// Aquarelle simulation core & Kubelka-Munk watercolor engine.
// Three-layer watercolor model after Curtis et al. 1997:
//   surface water (shallow-water height + velocity) / suspended pigment / paper capillary layer.
// 8 pigment channels across two RGBA16F texture pairs (suspended + deposited).
// Rendering composites total Kubelka-Munk K,S over lit paper, in linear light.

const MAXS = 48; // max splats per frame

const VS = `#version 300 es
layout(location=0) in vec2 aPos;
out vec2 vUv;
void main(){ vUv = aPos*0.5+0.5; gl_Position = vec4(aPos,0.,1.); }`;

const NOISE = `
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx)*0.1031); p3 += dot(p3,p3.yzx+33.33); return fract((p3.x+p3.y)*p3.z); }
float vnoise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
  float a=hash12(i), b=hash12(i+vec2(1,0)), c=hash12(i+vec2(0,1)), d=hash12(i+vec2(1,1));
  return mix(mix(a,b,f.x), mix(c,d,f.x), f.y); }
float fbm(vec2 p){ float v=0., a=0.5; for(int i=0;i<5;i++){ v+=a*vnoise(p); p=p*2.03+17.1; a*=0.5; } return v; }`;

// ---------------- paper generation ----------------
const PAPER_FS = `#version 300 es
precision highp float;
uniform float uGrainScale, uGrainAmp, uFineAmp, uFiberAmp, uSeed, uScale;
in vec2 vUv; out vec4 outP;
${NOISE}
void main(){
  // uScale maps output pixels back to sim texels, so a paper generated at a
  // higher resolution has the same physical grain — only sharper
  vec2 p = gl_FragCoord.xy / uScale;
  float g     = fbm(p/uGrainScale + uSeed*11.3);
  float fine  = fbm(p/2.6 + uSeed*23.7);
  float fiber = fbm(vec2(p.x/46.0, p.y/3.4) + uSeed*31.1);
  float height = clamp(0.5 + (g-0.5)*uGrainAmp + (fine-0.5)*uFineAmp + (fiber-0.5)*uFiberAmp, 0.02, 0.98);
  float absorb = 0.78 + 0.5*(fbm(p/90.0 + uSeed*41.7)-0.5);
  float fiberN = fbm(p/6.0 + uSeed*53.9);
  // pore-entry threshold for the percolation front: fine anisotropic noise,
  // streaked along the fiber axis like the web of a real cold-press sheet
  float pore = fbm(vec2(p.x/7.0, p.y/2.4) + uSeed*7.7)*0.72 + fbm(p/1.6 + uSeed*67.3)*0.28;
  outP = vec4(height, absorb, fiberN, pore);
}`;

// ---------------- alive-mode presence mask ----------------
const MASK_FS = `#version 300 es
precision highp float;
uniform sampler2D uDepA, uDepB;
in vec2 vUv; out vec4 outM;
void main(){
  float sum = dot(texture(uDepA, vUv), vec4(1.0)) + dot(texture(uDepB, vUv), vec4(1.0));
  outM = vec4(clamp((sum - 0.02)*2.5, 0.0, 1.0), 0.0, 0.0, 1.0);
}`;

// ---------------- water layer ----------------
const WATER_FS = `#version 300 es
precision highp float;
const int MAXS = ${MAXS};
uniform sampler2D uWater, uPaper, uMask;
uniform vec2 uSize, uTilt;
uniform int uSplatCount, uMode;
uniform float uApplySplats;
uniform vec4 uSplat[MAXS];
uniform vec2 uSplatVel[MAXS];
uniform float uGrav,uDrag,uDragShallow,uMaxSpeed,uRelief,uEdgeFlow,uEdgeEvap,
              uAbsorb,uFill,uCap,uSeepT,uSeep,uEvap,uEvapS,uSplatOut,uReplenish,uSustainH,uEdgeDrive,uFibers;
uniform int uGrainCount;
uniform vec4 uGrain[24];   // salt grains: xy pos, z radius, w strength
in vec2 vUv; out vec4 outW;

vec4 W(vec2 t){ return texture(uWater, t/uSize); }
float PH(vec2 t){ return texture(uPaper, t/uSize).r; }
float wetAt(vec2 t){ return smoothstep(0.0004, 0.004, W(t).r); }

void main(){
  vec2 t = gl_FragCoord.xy;
  vec4 w0 = W(t);
  float s = w0.a;

  // semi-Lagrangian advection of surface water + velocity
  vec2 back = t - w0.gb;
  vec4 wb = W(back);
  float h = wb.r;
  vec2 vel = wb.gb;

  // slight smoothing keeps the free surface stable
  float hl = (W(t+vec2(1,0)).r + W(t-vec2(1,0)).r + W(t+vec2(0,1)).r + W(t-vec2(0,1)).r)*0.25;
  h = mix(h, hl, 0.25);

  // brush splats
  if (uApplySplats > 0.5) {
    for (int i=0;i<MAXS;i++){ if(i>=uSplatCount) break;
      vec4 sp = uSplat[i];
      float fall = smoothstep(sp.z, sp.z*0.25, distance(t, sp.xy));
      if (uMode == 2) { // thirsty brush drinks
        h *= 1.0 - 0.6*fall;
        s *= 1.0 - 0.30*fall;
      } else {
        h += fall*sp.w;
        vel += uSplatVel[i]*fall;
        // the drop landing pushes water outward
        vec2 rd = t - sp.xy;
        float rl = max(length(rd), 1e-3);
        vel += (rd/rl) * fall * uSplatOut * sp.w;
      }
    }
  }

  // forces: downhill along free surface (water + paper relief), plus tilt gravity
  float hasW = smoothstep(0.0002, 0.002, h);
  float gx = (W(t+vec2(1,0)).r + PH(t+vec2(1,0))*uRelief) - (W(t-vec2(1,0)).r + PH(t-vec2(1,0))*uRelief);
  float gy = (W(t+vec2(0,1)).r + PH(t+vec2(0,1))*uRelief) - (W(t-vec2(0,1)).r + PH(t-vec2(0,1))*uRelief);
  vel += (-uGrav*vec2(gx,gy)*0.5 + uTilt) * hasW;

  // evaporation at the wet-dry boundary drives outward flow (edge darkening)
  vec2 sob = vec2(wetAt(t+vec2(1.7,0.)) - wetAt(t-vec2(1.7,0.)),
                  wetAt(t+vec2(0.,1.7)) - wetAt(t-vec2(0.,1.7)))*0.5; // points toward interior
  float em = length(sob);
  // the ring flow is evaporation's replacement current: gentle in standing
  // water, full strength only while the sheet is actively drying
  if (em > 1e-4) vel -= (sob/em) * em * uEdgeFlow * hasW * (0.3 + 0.7*min(uEdgeDrive, 12.0)/12.0);

  vel *= mix(uDragShallow, uDrag, clamp(h*6.0, 0.0, 1.0));
  float spd = length(vel);
  if (spd > uMaxSpeed) vel *= uMaxSpeed/spd;

  // absorption into the fibers
  vec4 pap = texture(uPaper, vUv);
  float da = min(h, uAbsorb*pap.g*(1.0-s));
  h -= da; s += da*uFill;

  // capillary spread through the sheet, seeping back up when saturated
  if (uFibers > 0.5) {
    float P = 0.26 + 0.48*pap.a;
    float sx = max(W(t+vec2(1,0)).a, W(t-vec2(1,0)).a);
    float sy = max(W(t+vec2(0,1)).a, W(t-vec2(0,1)).a);
    float sd = max(max(W(t+vec2(1,1)).a, W(t-vec2(1,-1)).a),
                   max(W(t-vec2(1,1)).a, W(t+vec2(1,-1)).a));
    float drive = max(sx, max(sy*0.55, sd*0.75)) * 0.994;
    float gate = smoothstep(P - 0.05, P + 0.03, drive);
    s += uCap*2.6 * max(drive - s, 0.0) * gate * (0.7 + 0.6*pap.b);
  } else {
    float sl = (W(t+vec2(1,0)).a + W(t-vec2(1,0)).a + W(t+vec2(0,1)).a + W(t-vec2(0,1)).a)*0.25;
    s += uCap*(sl - s)*(0.7 + 0.6*pap.b);
  }
  if (s > uSeepT && h < 0.0006) { float sb = uSeep*(s-uSeepT); h += sb; s -= sb; }

  // salt grains
  for (int i=0;i<24;i++){ if(i>=uGrainCount) break;
    vec4 g = uGrain[i];
    vec2 rd = g.xy - t;
    float d = length(rd);
    float inf = exp(-d*d/(g.z*g.z));
    h -= min(h, g.w*0.011*inf);
    s -= min(s, g.w*0.0035*inf);
    vel += (rd/max(d, 1.0)) * inf * g.w * 0.5 * hasW;
  }

  // evaporation, boosted at the rim
  h -= uEvap*(1.0 + uEdgeEvap*em*8.0);
  s = clamp(s - uEvapS*s, 0.0, 1.0);

  if (uReplenish > 0.0) {
    float presence = texture(uMask, vUv).r;
    h = mix(h*0.994, h, presence);
    h += uReplenish * presence * clamp(uSustainH - h, 0.0, 1.0);
    s = max(s, 0.985*presence);
  }

  outW = vec4(clamp(h, 0.0, 1.6), vel, s);
}`;

// ---------------- pigment layers (suspended + deposited, MRT x4) ----------------
const PIG_FS = `#version 300 es
precision highp float;
const int MAXS = ${MAXS};
uniform sampler2D uWater, uSusA, uSusB, uDepA, uDepB, uPaper;
uniform vec2 uSize;
uniform int uSplatCount, uMode;
uniform float uApplySplats, uStrokeWater;
uniform vec4 uSplat[MAXS];
uniform vec4 uPig0, uPig1;
uniform vec4 uStainA,uStainB,uGranA,uGranB,uDensA,uDensB;
uniform float uDepRate,uLiftBase,uDryDep,uCarry,uPigDiff,uGranStr,uDryEps,uTime,uSwirl,uRevive,uFibers;
uniform int uGrainCount;
uniform vec4 uGrain[24];
in vec2 vUv;
${NOISE}
vec2 curlN(vec2 p){
  vec2 q = p/46.0 + vec2(0.0, uTime*0.45);
  float e = 1.6;
  float n0 = fbm(q);
  float nx = fbm(q + vec2(e/46.0, 0.0));
  float ny = fbm(q + vec2(0.0, e/46.0));
  return vec2(ny - n0, n0 - nx) * (46.0/e) * 0.05;
}
layout(location=0) out vec4 oSusA;
layout(location=1) out vec4 oSusB;
layout(location=2) out vec4 oDepA;
layout(location=3) out vec4 oDepB;

vec4 SA(vec2 t){ return texture(uSusA, t/uSize); }
vec4 SB(vec2 t){ return texture(uSusB, t/uSize); }

void main(){
  vec2 t = gl_FragCoord.xy;
  vec4 w = texture(uWater, vUv);
  float h = w.r; vec2 vel = w.gb;
  float wet = smoothstep(0.0004, 0.004, h);

  vec2 velP = vel + curlN(t)*uSwirl*smoothstep(0.025, 0.28, h);
  if (uFibers > 0.5) {
    vec2 gs = vec2(texture(uWater, (t+vec2(1.5,0.))/uSize).a - texture(uWater, (t-vec2(1.5,0.))/uSize).a,
                   texture(uWater, (t+vec2(0.,1.5))/uSize).a - texture(uWater, (t-vec2(0.,1.5))/uSize).a);
    float gl2 = length(gs);
    float damp2 = smoothstep(0.2, 0.6, w.a);
    if (gl2 > 1e-4) velP += (-gs/gl2) * min(gl2*6.0, 1.0) * 1.05 * damp2 * (1.0 - wet*0.5);
  }

  float brine = 0.0;
  for (int i=0;i<24;i++){ if(i>=uGrainCount) break;
    vec4 g = uGrain[i];
    vec2 rd = t - g.xy;
    float d = max(length(rd), 1.0);
    float inf = exp(-d*d/(g.z*g.z*2.6)) * min(g.w, 1.2);
    brine = max(brine, inf);
    velP += (rd/d) * inf * 1.1;
  }
  vec2 back = t - velP;
  vec4 sA = SA(back), sB = SB(back);
  vec4 dA = texture(uDepA, vUv), dB = texture(uDepB, vUv);

  float brineKill = clamp(brine, 0.0, 1.0);
  float brineAct = max(wet, smoothstep(0.15, 0.7, w.a));
  sA *= 1.0 - 0.12*brineKill*brineAct;
  sB *= 1.0 - 0.12*brineKill*brineAct;
  dA *= 1.0 - 0.010*brineKill*brineAct;
  dB *= 1.0 - 0.010*brineKill*brineAct;

  vec4 avA = (SA(t+vec2(1,0))+SA(t-vec2(1,0))+SA(t+vec2(0,1))+SA(t-vec2(0,1)))*0.25;
  vec4 avB = (SB(t+vec2(1,0))+SB(t-vec2(1,0))+SB(t+vec2(0,1))+SB(t-vec2(0,1)))*0.25;

  float wick = uFibers * smoothstep(0.3, 0.9, w.a) * 0.55;
  float diffF = clamp(uPigDiff*(0.35 + h*45.0), 0.0, 0.45)*max(wet, wick);
  vec4 diffA = clamp(diffF*(1.45 - uDensA), 0.0, 0.6);
  vec4 diffB = clamp(diffF*(1.45 - uDensB), 0.0, 0.6);
  sA = mix(sA, avA, diffA);
  sB = mix(sB, avB, diffB);

  vec4 pap = texture(uPaper, vUv);

  if (uApplySplats > 0.5) {
    for (int i=0;i<MAXS;i++){ if(i>=uSplatCount) break;
      vec4 sp = uSplat[i];
      float fall = smoothstep(sp.z, sp.z*0.25, distance(t, sp.xy));
      if (uMode == 0) {
        float db = uStrokeWater < 0.2
          ? smoothstep(0.40, 0.56, pap.r*0.8 + pap.b*0.2 + (uStrokeWater-0.2)*0.5)
          : 1.0;
        sA += fall*db*uPig0;
        sB += fall*db*uPig1;
      } else if (uMode == 2) {
        sA *= 1.0 - 0.9*fall;
        sB *= 1.0 - 0.9*fall;
        dA *= 1.0 - fall*0.55*(vec4(1.0)-uStainA);
        dB *= 1.0 - fall*0.55*(vec4(1.0)-uStainB);
      }
    }
  }

  float valley = (0.5 - pap.r)*2.0;
  float spd = length(vel);
  float settleGate = 0.035 + uDryDep*pow(1.0-wet, 1.6);
  settleGate *= 1.0 - 0.93*uFibers*smoothstep(0.2, 0.6, w.a)*(1.0 - wet);
  settleGate *= 1.0 - 0.9*clamp(brine, 0.0, 1.0);
  vec4 granFA = clamp(1.0 + uGranA*valley*uGranStr, 0.05, 2.5);
  vec4 granFB = clamp(1.0 + uGranB*valley*uGranStr, 0.05, 2.5);
  vec4 carryA = clamp(1.0 - spd*uCarry*(1.2-uDensA), 0.1, 1.0);
  vec4 carryB = clamp(1.0 - spd*uCarry*(1.2-uDensB), 0.1, 1.0);

  vec4 setA = clamp(uDepRate*(settleGate + uDensA*0.09*wet + uStainA*0.12*wet)*granFA*carryA, 0.0, 0.85);
  vec4 setB = clamp(uDepRate*(settleGate + uDensB*0.09*wet + uStainB*0.12*wet)*granFB*carryB, 0.0, 0.85);
  float liftDyn = wet*(0.25 + 0.75*clamp(spd*1.5, 0.0, 1.0));
  vec4 liftA = uLiftBase*liftDyn*(vec4(1.0)-uStainA);
  vec4 liftB = uLiftBase*liftDyn*(vec4(1.0)-uStainB);
  liftA += uRevive*wet*(vec4(1.0)-uStainA*0.55);
  liftB += uRevive*wet*(vec4(1.0)-uStainB*0.55);

  vec4 dltA = sA*setA - dA*liftA;
  vec4 dltB = sB*setB - dB*liftB;
  sA = max(sA - dltA, 0.0); dA = max(dA + dltA, 0.0);
  sB = max(sB - dltB, 0.0); dB = max(dB + dltB, 0.0);

  if (h <= uDryEps) { dA += sA; sA = vec4(0.0); dB += sB; sB = vec4(0.0); }

  oSusA = min(sA, 6.0); oSusB = min(sB, 6.0);
  oDepA = min(dA, 6.0); oDepB = min(dB, 6.0);
}`;

// ---------------- display: Kubelka-Munk over lit paper ----------------
const DISPLAY_FS = `#version 300 es
precision highp float;
uniform sampler2D uWater, uSusA, uSusB, uDepA, uDepB, uPaper, uGround;
uniform vec2 uSize;
uniform vec3 uK[8], uS[8];
uniform float uGranV[8];
uniform vec3 uPaperTint;
uniform float uGranVis, uWetDark, uBacklight, uXray;
uniform vec2 uLightPos;
in vec2 vUv; out vec4 fragColor;
${NOISE}
vec3 cothv(vec3 x){ x = max(x, 1e-4); vec3 e = exp(-2.0*x); return (1.0+e)/(1.0-e); }
vec4 dl(vec4 d){ vec4 g = pow(max(d, vec4(0.0)), vec4(1.35)); return 2.2*g/(g + 3.0); }
void main(){
  vec4 sA = texture(uSusA, vUv), sB = texture(uSusB, vUv);
  vec4 dA = texture(uDepA, vUv), dB = texture(uDepB, vUv);
  vec4 tA = dl(dA + sA*0.85), tB = dl(dB + sB*0.85);
  float tot = dot(tA, vec4(1.0)) + dot(tB, vec4(1.0));

  vec4 pap = texture(uPaper, vUv);
  float hR = texture(uPaper, vUv+vec2(1.0,0.0)/uSize).r;
  float hU = texture(uPaper, vUv+vec2(0.0,1.0)/uSize).r;
  float shade = clamp(0.985 + 5.0*(-(hR-pap.r)*0.7 - (hU-pap.r)*0.7), 0.9, 1.05);
  float grain = hash12(gl_FragCoord.xy*0.71);
  vec3 Rg = uPaperTint * (shade + (grain-0.5)*0.02);

  vec4 w = texture(uWater, vUv);
  float wet = smoothstep(0.0004, 0.004, w.r);
  float damp = smoothstep(0.25, 0.9, w.a);
  float wetLook = max(wet, damp*0.85);
  Rg *= 1.0 - uWetDark*wetLook;

  vec3 G = texture(uGround, vUv).rgb;
  Rg *= G*G;

  vec3 R = Rg;
  if (tot > 1e-4) {
    float gw = (dot(tA*vec4(uGranV[0],uGranV[1],uGranV[2],uGranV[3]), vec4(1.0))
              + dot(tB*vec4(uGranV[4],uGranV[5],uGranV[6],uGranV[7]), vec4(1.0))) / tot;
    float gmod = 1.0 + gw*uGranVis*((pap.r-0.5)*1.4 + (pap.b-0.5)*0.6);
    vec3 K = vec3(0.0), S = vec3(0.0);
    K += tA.x*uK[0] + tA.y*uK[1] + tA.z*uK[2] + tA.w*uK[3];
    S += tA.x*uS[0] + tA.y*uS[1] + tA.z*uS[2] + tA.w*uS[3];
    K += tB.x*uK[4] + tB.y*uK[5] + tB.z*uK[6] + tB.w*uK[7];
    S += tB.x*uS[4] + tB.y*uS[5] + tB.z*uS[6] + tB.w*uS[7];
    K *= max(gmod, 0.05); S = max(S*max(gmod, 0.05), vec3(1e-4));
    S *= 1.0 - 0.5*wetLook;
    K *= 1.0 + 0.2*wetLook;
    vec3 a = 1.0 + K/S;
    vec3 b = sqrt(max(a*a - 1.0, 1e-6));
    vec3 cth = cothv(b*S);
    R = (1.0 - Rg*(a - b*cth)) / (a - Rg + b*cth);
  }
  float cov = clamp(tot*1.5 + (1.0 - dot(G, vec3(0.3333)))*3.0, 0.0, 1.0);
  R = mix(R, 0.582*R / (1.0 - 0.4*R), cov);
  R += wet*0.018;

  if (uXray > 0.001) {
    vec3 X = vec3(0.051, 0.058, 0.070);
    X += vec3(0.10, 0.14, 0.20) * smoothstep(0.03, 0.85, w.a);
    X += vec3(0.03, 0.22, 0.62) * smoothstep(0.0004, 0.05, w.r);
    float spd2 = length(w.gb);
    X += vec3(0.95, 0.52, 0.10) * clamp(spd2*2.4, 0.0, 0.85);
    X += vec3(0.80, 0.84, 0.90) * tot * 0.34;
    float iso = abs(fract(tot*5.0 - 0.5) - 0.5);
    X += vec3(1.0) * (1.0 - smoothstep(0.0, 0.07, iso)) * smoothstep(0.02, 0.3, tot) * 0.30;
    float front = abs(w.a - 0.42);
    X += vec3(0.30, 0.72, 1.0) * (1.0 - smoothstep(0.0, 0.045, front)) * 0.75;
    X += vec3(0.018) * (pap.r - 0.5);
    R = mix(R, X, uXray);
  }

  if (uBacklight > 0.001) {
    vec3 K = vec3(0.0), S = vec3(0.0);
    K += tA.x*uK[0] + tA.y*uK[1] + tA.z*uK[2] + tA.w*uK[3];
    S += tA.x*uS[0] + tA.y*uS[1] + tA.z*uS[2] + tA.w*uS[3];
    K += tB.x*uK[4] + tB.y*uK[5] + tB.z*uK[6] + tB.w*uK[7];
    S += tB.x*uS[4] + tB.y*uS[5] + tB.z*uS[6] + tB.w*uS[7];
    S *= 1.0 - 0.3*wet;
    S = max(S, vec3(1e-4));
    vec3 a = 1.0 + K/S;
    vec3 b = sqrt(max(a*a - 1.0, 1e-6));
    vec3 x = b*S;
    vec3 T = b / (a*sinh(x) + b*cosh(x));
    vec3 Tp = vec3(0.90, 0.86, 0.78) * (0.94 + 0.2*(pap.r - 0.5)) * (1.0 + 0.18*wet);
    float d2 = distance(vUv, uLightPos);
    float lamp = 0.88 + 0.55*exp(-d2*d2*5.0);
    vec3 lit = vec3(1.0, 0.98, 0.94) * lamp * Tp * T * G;
    R = mix(R, lit, uBacklight);
  }
  fragColor = vec4(pow(clamp(R, 0.0, 1.0), vec3(1.0/2.2)), 1.0);
}`;

// ---------------- Bake: fixed dried glaze layer ----------------
const BAKE_FS = `#version 300 es
precision highp float;
uniform sampler2D uSusA, uSusB, uDepA, uDepB, uGround;
uniform vec3 uK[8], uS[8];
in vec2 vUv; out vec4 fragColor;
vec4 dl(vec4 d){ vec4 g = pow(max(d, vec4(0.0)), vec4(1.35)); return 2.2*g/(g + 3.0); }
void main(){
  vec4 tA = dl(texture(uDepA, vUv) + texture(uSusA, vUv));
  vec4 tB = dl(texture(uDepB, vUv) + texture(uSusB, vUv));
  vec3 G = texture(uGround, vUv).rgb;
  float tot = dot(tA, vec4(1.0)) + dot(tB, vec4(1.0));
  if (tot > 1e-5) {
    vec3 K = vec3(0.0), S = vec3(0.0);
    K += tA.x*uK[0] + tA.y*uK[1] + tA.z*uK[2] + tA.w*uK[3];
    S += tA.x*uS[0] + tA.y*uS[1] + tA.z*uS[2] + tA.w*uS[3];
    K += tB.x*uK[4] + tB.y*uK[5] + tB.z*uK[6] + tB.w*uK[7];
    S += tB.x*uS[4] + tB.y*uS[5] + tB.z*uS[6] + tB.w*uS[7];
    S = max(S, vec3(1e-4));
    vec3 a = 1.0 + K/S;
    vec3 b = sqrt(max(a*a - 1.0, 1e-6));
    vec3 x = min(b*S, vec3(20.0));
    G *= b / (a*sinh(x) + b*cosh(x));
  }
  fragColor = vec4(G, 1.0);
}`;

// ---------------- GL helpers ----------------
function compile(gl, type, src) {
  const s = gl.createShader(type);
  gl.shaderSource(s, src); gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS))
    throw new Error('shader: ' + gl.getShaderInfoLog(s));
  return s;
}
function program(gl, fsSrc) {
  const p = gl.createProgram();
  gl.attachShader(p, compile(gl, gl.VERTEX_SHADER, VS));
  gl.attachShader(p, compile(gl, gl.FRAGMENT_SHADER, fsSrc));
  gl.linkProgram(p);
  if (!gl.getProgramParameter(p, gl.LINK_STATUS))
    throw new Error('link: ' + gl.getProgramInfoLog(p));
  const uni = {};
  const n = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS);
  for (let i = 0; i < n; i++) {
    const info = gl.getActiveUniform(p, i);
    const base = info.name.replace(/\[0\]$/, '');
    uni[base] = gl.getUniformLocation(p, info.name);
  }
  return { p, uni };
}
function makeTex(gl, w, h) {
  const t = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, t);
  gl.texStorage2D(gl.TEXTURE_2D, 1, gl.RGBA16F, w, h);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  return t;
}
function makeFbo(gl, texes) {
  const f = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, f);
  texes.forEach((t, i) =>
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0 + i, gl.TEXTURE_2D, t, 0));
  gl.drawBuffers(texes.map((_, i) => gl.COLOR_ATTACHMENT0 + i));
  if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE)
    throw new Error('fbo incomplete');
  return f;
}

const PAPERS = {
  hot:   { grainScale: 4.5,  grainAmp: 0.20, fineAmp: 0.10, fiberAmp: 0.05, label: 'Hot press' },
  cold:  { grainScale: 9.0,  grainAmp: 0.55, fineAmp: 0.18, fiberAmp: 0.10, label: 'Cold press' },
  rough: { grainScale: 15.0, grainAmp: 0.85, fineAmp: 0.24, fiberAmp: 0.12, label: 'Rough' },
};

export function createSim(canvas, dims = {}) {
  const gl = canvas.getContext('webgl2', { alpha: false, antialias: false, premultipliedAlpha: false });
  if (!gl) throw new Error('WebGL2 unavailable');
  if (!gl.getExtension('EXT_color_buffer_float')) throw new Error('float render targets unavailable');

  const SIM_W = dims.width || 848, SIM_H = dims.height || 1060;

  const p = {
    substeps: 2,
    grav: 0.45, drag: 0.96, dragShallow: 0.82, maxSpeed: 2.4, relief: 0.45,
    edgeFlow: 0.22, edgeEvap: 2.5, splatOut: 2.2,
    absorb: 0.016, fill: 1.3, cap: 0.10, seepT: 0.68, seep: 0.0025,
    evap: 0.00018, evapS: 0.00022,
    depRate: 0.020, liftBase: 0.028, dryDep: 9.0, carry: 0.35,
    pigDiff: 0.45, granStr: 1.0, dryEps: 0.00018, swirl: 1.6,
    granVis: 1.1, wetDark: 0.12,
    paperTint: [0.94, 0.92, 0.87],
  };

  const vao = gl.createVertexArray();
  gl.bindVertexArray(vao);
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
  gl.disable(gl.DEPTH_TEST);
  gl.disable(gl.BLEND);

  const paperP = program(gl, PAPER_FS);
  const waterP = program(gl, WATER_FS);
  const pigP   = program(gl, PIG_FS);
  const dispP  = program(gl, DISPLAY_FS);
  const maskP  = program(gl, MASK_FS);
  const bakeP  = program(gl, BAKE_FS);

  const paperT = makeTex(gl, SIM_W, SIM_H);
  const paperF = makeFbo(gl, [paperT]);
  const water = [0, 1].map(() => makeTex(gl, SIM_W, SIM_H));
  const waterF = water.map(t => makeFbo(gl, [t]));
  const pig = [0, 1].map(() => ({
    susA: makeTex(gl, SIM_W, SIM_H), susB: makeTex(gl, SIM_W, SIM_H),
    depA: makeTex(gl, SIM_W, SIM_H), depB: makeTex(gl, SIM_W, SIM_H),
  }));
  const pigF = pig.map(o => makeFbo(gl, [o.susA, o.susB, o.depA, o.depB]));
  const maskT = makeTex(gl, SIM_W, SIM_H);
  const maskF = makeFbo(gl, [maskT]);
  const ground = [0, 1].map(() => makeTex(gl, SIM_W, SIM_H));
  const groundF = ground.map(t => makeFbo(gl, [t]));
  let wCur = 0, pCur = 0, gCur = 0;

  function captureMask() {
    gl.useProgram(maskP.p);
    gl.bindFramebuffer(gl.FRAMEBUFFER, maskF);
    gl.viewport(0, 0, SIM_W, SIM_H);
    gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, pig[pCur].depA);
    gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, pig[pCur].depB);
    gl.uniform1i(maskP.uni.uDepA, 0); gl.uniform1i(maskP.uni.uDepB, 1);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  const splatArr = new Float32Array(MAXS * 4);
  const splatVelArr = new Float32Array(MAXS * 2);
  const grainArr = new Float32Array(24 * 4);

  function clearTargets() {
    gl.clearColor(0, 0, 0, 0);
    for (const f of [...waterF, ...pigF]) {
      gl.bindFramebuffer(gl.FRAMEBUFFER, f);
      gl.clear(gl.COLOR_BUFFER_BIT);
    }
    gl.clearColor(1, 1, 1, 1);
    for (const f of groundF) {
      gl.bindFramebuffer(gl.FRAMEBUFFER, f);
      gl.clear(gl.COLOR_BUFFER_BIT);
    }
  }

  function bakeGround() {
    const gNxt = 1 - gCur;
    gl.useProgram(bakeP.p);
    gl.bindFramebuffer(gl.FRAMEBUFFER, groundF[gNxt]);
    gl.viewport(0, 0, SIM_W, SIM_H);
    bindTex(0, pig[pCur].susA); bindTex(1, pig[pCur].susB);
    bindTex(2, pig[pCur].depA); bindTex(3, pig[pCur].depB);
    bindTex(4, ground[gCur]);
    gl.uniform1i(bakeP.uni.uSusA, 0); gl.uniform1i(bakeP.uni.uSusB, 1);
    gl.uniform1i(bakeP.uni.uDepA, 2); gl.uniform1i(bakeP.uni.uDepB, 3);
    gl.uniform1i(bakeP.uni.uGround, 4);
    gl.uniform3fv(bakeP.uni.uK, slotK);
    gl.uniform3fv(bakeP.uni.uS, slotS);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    gCur = gNxt;
    gl.clearColor(0, 0, 0, 0);
    for (const f of pigF) {
      gl.bindFramebuffer(gl.FRAMEBUFFER, f);
      gl.clear(gl.COLOR_BUFFER_BIT);
    }
  }

  let paperPreset = 'cold', paperSeed = 7.31;
  function genPaperInto(fbo, w, h, scale, preset, seed) {
    const pp = PAPERS[preset] || PAPERS.cold;
    gl.useProgram(paperP.p);
    gl.uniform1f(paperP.uni.uGrainScale, pp.grainScale);
    gl.uniform1f(paperP.uni.uGrainAmp, pp.grainAmp);
    gl.uniform1f(paperP.uni.uFineAmp, pp.fineAmp);
    gl.uniform1f(paperP.uni.uFiberAmp, pp.fiberAmp);
    gl.uniform1f(paperP.uni.uSeed, seed);
    gl.uniform1f(paperP.uni.uScale, scale);
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.viewport(0, 0, w, h);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
  function genPaper(preset, seed = 7.31) {
    paperPreset = preset; paperSeed = seed;
    genPaperInto(paperF, SIM_W, SIM_H, 1.0, preset, seed);
    exportPaper = null;
  }

  function bindTex(unit, tex) {
    gl.activeTexture(gl.TEXTURE0 + unit);
    gl.bindTexture(gl.TEXTURE_2D, tex);
  }

  const slotK = new Float32Array(24), slotS = new Float32Array(24);
  const slotGran = new Float32Array(8), slotStain = new Float32Array(8), slotDens = new Float32Array(8);
  function setSlots(slots) {
    slotK.fill(0); slotS.fill(0); slotGran.fill(0); slotStain.fill(1); slotDens.fill(0.5);
    slots.forEach((pigItem, i) => {
      if (!pigItem || i > 7) return;
      for (let c = 0; c < 3; c++) {
        slotK[i * 3 + c] = pigItem.K ? pigItem.K[c] : 0.5;
        slotS[i * 3 + c] = pigItem.S ? pigItem.S[c] : 0.5;
      }
      slotGran[i] = pigItem.gran ?? 0.5;
      slotStain[i] = pigItem.stain ?? 0.5;
      slotDens[i] = pigItem.dens ?? 0.5;
    });
  }

  function step(input, applySplats) {
    const wNxt = 1 - wCur;
    gl.useProgram(waterP.p);
    gl.bindFramebuffer(gl.FRAMEBUFFER, waterF[wNxt]);
    gl.viewport(0, 0, SIM_W, SIM_H);
    bindTex(0, water[wCur]); bindTex(1, paperT);
    bindTex(2, maskT);
    gl.uniform1i(waterP.uni.uWater, 0); gl.uniform1i(waterP.uni.uPaper, 1);
    gl.uniform1i(waterP.uni.uMask, 2);
    gl.uniform2f(waterP.uni.uSize, SIM_W, SIM_H);
    gl.uniform2f(waterP.uni.uTilt, input.tilt ? input.tilt[0] : 0, input.tilt ? input.tilt[1] : 0);
    gl.uniform1i(waterP.uni.uSplatCount, input.count || 0);
    gl.uniform1i(waterP.uni.uMode, input.mode || 0);
    gl.uniform1f(waterP.uni.uApplySplats, applySplats ? 1 : 0);
    gl.uniform4fv(waterP.uni.uSplat, splatArr);
    gl.uniform2fv(waterP.uni.uSplatVel, splatVelArr);
    gl.uniform1f(waterP.uni.uGrav, p.grav);
    gl.uniform1f(waterP.uni.uDrag, p.drag);
    gl.uniform1f(waterP.uni.uDragShallow, p.dragShallow);
    gl.uniform1f(waterP.uni.uMaxSpeed, p.maxSpeed);
    gl.uniform1f(waterP.uni.uRelief, p.relief);
    gl.uniform1f(waterP.uni.uEdgeFlow, p.edgeFlow);
    gl.uniform1f(waterP.uni.uEdgeEvap, p.edgeEvap);
    gl.uniform1f(waterP.uni.uAbsorb, p.absorb);
    gl.uniform1f(waterP.uni.uFill, p.fill);
    gl.uniform1f(waterP.uni.uCap, p.cap);
    gl.uniform1f(waterP.uni.uSeepT, p.seepT);
    gl.uniform1f(waterP.uni.uSeep, p.seep);
    gl.uniform1f(waterP.uni.uSplatOut, p.splatOut);
    gl.uniform1f(waterP.uni.uReplenish, input.alive ? input.alive.replenish : 0);
    gl.uniform1f(waterP.uni.uSustainH, input.alive ? input.alive.sustainH : 0.09);
    gl.uniform1f(waterP.uni.uEvap, p.evap * (input.evapMul || 1));
    gl.uniform1f(waterP.uni.uEvapS, p.evapS * (input.evapMul ? Math.sqrt(input.evapMul) : 1));
    gl.uniform1f(waterP.uni.uEdgeDrive, input.evapMul || 1);
    gl.uniform1f(waterP.uni.uFibers, fibersOn ? 1 : 0);
    const grains = input.grains || [];
    const gn = Math.min(grains.length, 24);
    for (let i = 0; i < gn; i++) {
      const g = grains[i];
      grainArr[i*4] = g.x; grainArr[i*4+1] = g.y;
      grainArr[i*4+2] = g.r; grainArr[i*4+3] = g.str;
    }
    gl.uniform1i(waterP.uni.uGrainCount, gn);
    gl.uniform4fv(waterP.uni.uGrain, grainArr);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    wCur = wNxt;

    const pNxt = 1 - pCur;
    gl.useProgram(pigP.p);
    gl.bindFramebuffer(gl.FRAMEBUFFER, pigF[pNxt]);
    bindTex(0, water[wCur]);
    bindTex(1, pig[pCur].susA); bindTex(2, pig[pCur].susB);
    bindTex(3, pig[pCur].depA); bindTex(4, pig[pCur].depB);
    bindTex(5, paperT);
    gl.uniform1i(pigP.uni.uWater, 0);
    gl.uniform1i(pigP.uni.uSusA, 1); gl.uniform1i(pigP.uni.uSusB, 2);
    gl.uniform1i(pigP.uni.uDepA, 3); gl.uniform1i(pigP.uni.uDepB, 4);
    gl.uniform1i(pigP.uni.uPaper, 5);
    gl.uniform2f(pigP.uni.uSize, SIM_W, SIM_H);
    gl.uniform1i(pigP.uni.uSplatCount, input.count || 0);
    gl.uniform1i(pigP.uni.uMode, input.mode || 0);
    gl.uniform1f(pigP.uni.uApplySplats, applySplats ? 1 : 0);
    gl.uniform1f(pigP.uni.uStrokeWater, input.strokeWater ?? 0.5);
    gl.uniform4fv(pigP.uni.uSplat, splatArr);
    gl.uniform4fv(pigP.uni.uPig0, input.pig0 || [1, 0, 0, 0]);
    gl.uniform4fv(pigP.uni.uPig1, input.pig1 || [0, 0, 0, 0]);
    gl.uniform4f(pigP.uni.uStainA, slotStain[0], slotStain[1], slotStain[2], slotStain[3]);
    gl.uniform4f(pigP.uni.uStainB, slotStain[4], slotStain[5], slotStain[6], slotStain[7]);
    gl.uniform4f(pigP.uni.uGranA, slotGran[0], slotGran[1], slotGran[2], slotGran[3]);
    gl.uniform4f(pigP.uni.uGranB, slotGran[4], slotGran[5], slotGran[6], slotGran[7]);
    gl.uniform4f(pigP.uni.uDensA, slotDens[0], slotDens[1], slotDens[2], slotDens[3]);
    gl.uniform4f(pigP.uni.uDensB, slotDens[4], slotDens[5], slotDens[6], slotDens[7]);
    gl.uniform1f(pigP.uni.uDepRate, p.depRate * (input.alive ? input.alive.depScale : 1));
    gl.uniform1f(pigP.uni.uLiftBase, p.liftBase);
    gl.uniform1f(pigP.uni.uDryDep, p.dryDep);
    gl.uniform1f(pigP.uni.uCarry, p.carry);
    gl.uniform1f(pigP.uni.uPigDiff, p.pigDiff * (input.alive ? input.alive.pigDiffScale : 1));
    gl.uniform1f(pigP.uni.uRevive, input.alive ? input.alive.revive : 0);
    gl.uniform1f(pigP.uni.uGranStr, p.granStr);
    gl.uniform1f(pigP.uni.uDryEps, p.dryEps);
    gl.uniform1f(pigP.uni.uTime, input.time || 0);
    gl.uniform1f(pigP.uni.uSwirl, p.swirl);
    gl.uniform1f(pigP.uni.uFibers, fibersOn ? 1 : 0);
    gl.uniform1i(pigP.uni.uGrainCount, gn);
    gl.uniform4fv(pigP.uni.uGrain, grainArr);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    pCur = pNxt;
  }

  function render() { renderInto(null, canvas.width, canvas.height); }

  function renderInto(fbo, w, h, paperOverride = null, sizeOverride = null) {
    gl.useProgram(dispP.p);
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.viewport(0, 0, w, h);
    bindTex(0, water[wCur]);
    bindTex(1, pig[pCur].susA); bindTex(2, pig[pCur].susB);
    bindTex(3, pig[pCur].depA); bindTex(4, pig[pCur].depB);
    bindTex(5, paperOverride || paperT);
    bindTex(6, ground[gCur]);
    gl.uniform1i(dispP.uni.uWater, 0);
    gl.uniform1i(dispP.uni.uSusA, 1); gl.uniform1i(dispP.uni.uSusB, 2);
    gl.uniform1i(dispP.uni.uDepA, 3); gl.uniform1i(dispP.uni.uDepB, 4);
    gl.uniform1i(dispP.uni.uPaper, 5);
    gl.uniform1i(dispP.uni.uGround, 6);
    if (sizeOverride) gl.uniform2f(dispP.uni.uSize, sizeOverride[0], sizeOverride[1]);
    else gl.uniform2f(dispP.uni.uSize, SIM_W, SIM_H);
    gl.uniform3fv(dispP.uni.uK, slotK);
    gl.uniform3fv(dispP.uni.uS, slotS);
    gl.uniform1fv(dispP.uni.uGranV, slotGran);
    gl.uniform3fv(dispP.uni.uPaperTint, p.paperTint);
    gl.uniform1f(dispP.uni.uGranVis, p.granVis);
    gl.uniform1f(dispP.uni.uWetDark, p.wetDark);
    gl.uniform1f(dispP.uni.uBacklight, backlightMix);
    gl.uniform1f(dispP.uni.uXray, xrayMix);
    gl.uniform2f(dispP.uni.uLightPos, lightPos[0], lightPos[1]);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  let backlightMix = 0, backlightOn = false;
  let xrayMix = 0, xrayOn = false;
  let fibersOn = false;
  const lightPos = [0.5, 0.62];
  function setBacklight(on) { backlightOn = on; }
  function setXray(on) { xrayOn = on; }
  function setFibers(on) { fibersOn = on; }
  function setLightPos(x, y) { lightPos[0] = x; lightPos[1] = y; }
  function easeBacklight() {
    backlightMix += ((backlightOn ? 1 : 0) - backlightMix) * 0.08;
    if (backlightMix < 0.001) backlightMix = 0;
    xrayMix += ((xrayOn ? 1 : 0) - xrayMix) * 0.10;
    if (xrayMix < 0.001) xrayMix = 0;
  }

  function frame(input) {
    const splats = input.splats || [];
    const n = Math.min(splats.length, MAXS);
    for (let i = 0; i < n; i++) {
      const s = splats[i];
      splatArr[i*4] = s.x; splatArr[i*4+1] = s.y;
      splatArr[i*4+2] = s.r; splatArr[i*4+3] = s.water;
      splatVelArr[i*2] = s.vx || 0; splatVelArr[i*2+1] = s.vy || 0;
    }
    input.count = n;
    for (let sub = 0; sub < p.substeps; sub++) step(input, sub === 0);
    easeBacklight();
    if (!(typeof window !== 'undefined' && window.__headless)) render();
  }

  let exportRT = null, exportPaper = null;
  function capturePNG() {
    const w = 1272, h = 1590;
    if (!exportRT) {
      const tex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texStorage2D(gl.TEXTURE_2D, 1, gl.RGBA8, w, h);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      exportRT = { tex, fbo: makeFbo(gl, [tex]) };
    }
    if (!exportPaper) {
      const tex = makeTex(gl, w, h);
      exportPaper = { tex, fbo: makeFbo(gl, [tex]) };
      genPaperInto(exportPaper.fbo, w, h, w / SIM_W, paperPreset, paperSeed);
    }
    renderInto(exportRT.fbo, w, h, exportPaper.tex, [w, h]);
    const px = new Uint8Array(w * h * 4);
    gl.readPixels(0, 0, w, h, gl.RGBA, gl.UNSIGNED_BYTE, px);
    const c2 = document.createElement('canvas');
    c2.width = w; c2.height = h;
    const ctx = c2.getContext('2d');
    const img = ctx.createImageData(w, h);
    for (let y = 0; y < h; y++)
      img.data.set(px.subarray((h-1-y)*w*4, (h-y)*w*4), y*w*4);
    ctx.putImageData(img, 0, 0);
    return c2;
  }

  const UNDO_DEPTH = 6;
  const undoRing = [];
  let undoHead = 0, undoCount = 0;
  function undoSlot(i) {
    if (!undoRing[i]) undoRing[i] = Array.from({ length: 6 }, () => {
      const tex = makeTex(gl, SIM_W, SIM_H);
      return { tex, fbo: makeFbo(gl, [tex]) };
    });
    return undoRing[i];
  }
  function copyInto(srcFbo, attachment, dstTex) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, srcFbo);
    gl.readBuffer(gl.COLOR_ATTACHMENT0 + attachment);
    gl.bindTexture(gl.TEXTURE_2D, dstTex);
    gl.copyTexSubImage2D(gl.TEXTURE_2D, 0, 0, 0, 0, 0, SIM_W, SIM_H);
  }
  function pushUndo() {
    const s = undoSlot(undoHead);
    copyInto(waterF[wCur], 0, s[0].tex);
    for (let i = 0; i < 4; i++) copyInto(pigF[pCur], i, s[i + 1].tex);
    copyInto(groundF[gCur], 0, s[5].tex);
    undoHead = (undoHead + 1) % UNDO_DEPTH;
    undoCount = Math.min(undoCount + 1, UNDO_DEPTH);
  }
  function popUndo() {
    if (!undoCount) return false;
    undoHead = (undoHead - 1 + UNDO_DEPTH) % UNDO_DEPTH;
    undoCount--;
    const s = undoRing[undoHead];
    copyInto(s[0].fbo, 0, water[wCur]);
    const dst = [pig[pCur].susA, pig[pCur].susB, pig[pCur].depA, pig[pCur].depB];
    for (let i = 0; i < 4; i++) copyInto(s[i + 1].fbo, 0, dst[i]);
    copyInto(s[5].fbo, 0, ground[gCur]);
    render();
    return true;
  }

  clearTargets();
  genPaper('cold');

  return {
    gl, p, SIM_W, SIM_H, frame, render, capturePNG, setSlots, captureMask, bakeGround,
    setBacklight, setLightPos, setXray, setFibers, pushUndo, popUndo,
    clearPaint: clearTargets,
    setPaper: (name) => { genPaper(name); clearTargets(); render(); },
    papers: PAPERS,
  };
}

// ---------------- Pigment science & Kubelka-Munk library ----------------
export const srgb2lin = c => c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
export const lin2srgb = c => c <= 0.0031308 ? c * 12.92 : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
export const hex2lin = h => {
  const clean = h.replace('#', '');
  const hex = clean.length === 3 ? clean.split('').map(x => x + x).join('') : clean;
  return [0, 2, 4].map(i => srgb2lin(parseInt(hex.slice(i, i + 2), 16) / 255));
};

const acoth = x => 0.5 * Math.log((x + 1) / (x - 1));

export function deriveKS(Rw, Rb) {
  Rw = Math.min(Math.max(Rw, 0.001), 0.998);
  Rb = Math.min(Math.max(Rb, 0.0005), Rw * 0.98);
  const a = 0.5 * (Rw + (Rb - Rw + 1) / Rb);
  const b = Math.sqrt(Math.max(a * a - 1, 1e-12));
  const arg = Math.max((b * b - (a - Rw) * (a - 1)) / (b * (1 - Rw)), 1.0000001);
  const S = (1 / b) * acoth(arg);
  const K = S * (a - 1);
  return [K, S];
}

export function kmReflect(K, S, Rg) {
  if (S < 1e-6) return Rg;
  const a = 1 + K / S;
  const b = Math.sqrt(Math.max(a * a - 1, 1e-9));
  const e = Math.exp(-2 * Math.max(b * S, 1e-4));
  const cth = (1 + e) / (1 - e);
  return (1 - Rg * (a - b * cth)) / (a - Rg + b * cth);
}

const DIL_GAMMA = 1.35, DIL_MAX = 2.2, DIL_MID = 3.0;
export const dilute = d => {
  const g = Math.pow(Math.max(d, 0), DIL_GAMMA);
  return DIL_MAX * g / (g + DIL_MID);
};

const SAU_K1 = 0.03, SAU_K2 = 0.4;
export const saunderson = R => (1 - SAU_K1) * (1 - SAU_K2) * R / (1 - SAU_K2 * R);

export function mixColor(parts, Rg = 0.93, scale = 1) {
  const rgb = [0, 1, 2].map(ch => {
    let K = 0, S = 0, tot = 0;
    for (const { pig, amt } of parts) {
      const x = dilute(amt * scale);
      K += x * (pig.K ? pig.K[ch] : 0.5);
      S += x * (pig.S ? pig.S[ch] : 0.5);
      tot += x;
    }
    let R = kmReflect(K, S, Rg);
    const cov = Math.min(tot * 1.5, 1);
    return R * (1 - cov) + saunderson(R) * cov;
  });
  return '#' + rgb.map(c => Math.round(lin2srgb(Math.min(Math.max(c, 0), 1)) * 255).toString(16).padStart(2, '0')).join('');
}

export const RAW = [
  ['French Ultramarine', '#3b55c4', '#0a102a', 0.85, 0.30, 0.90, 'blue'],
  ['Indanthrone Blue',   '#2f4370', '#060a16', 0.30, 0.80, 0.50, 'blue'],
  ['Phthalo Turquoise',  '#12716e', '#03201f', 0.10, 0.90, 0.30, 'blue'],
  ['Lavender',           '#a8a6c8', '#4e4c66', 0.75, 0.10, 0.80, 'blue'],
  ['Cobalt Blue',        '#4a72d2', '#0d1836', 0.60, 0.25, 0.75, 'blue'],
  ['Cerulean Blue',      '#4f9ad2', '#173349', 0.90, 0.20, 0.95, 'blue'],
  ['Phthalo Blue',       '#1a5fc8', '#05162c', 0.05, 0.95, 0.25, 'blue'],
  ['Prussian Blue',      '#1d4a66', '#040f1a', 0.15, 0.90, 0.35, 'blue'],
  ['Indigo',             '#31405c', '#070a13', 0.20, 0.80, 0.45, 'blue'],
  ['Cobalt Teal',        '#3fb8ab', '#0b2f2b', 0.80, 0.20, 0.85, 'blue'],
  ['Phthalo Green',      '#0e8a6b', '#03231b', 0.05, 0.95, 0.25, 'green'],
  ['Viridian',           '#3e9c82', '#0b2c24', 0.55, 0.30, 0.70, 'green'],
  ['Sap Green',          '#6d8e39', '#1b240f', 0.25, 0.60, 0.40, 'green'],
  ['Green Gold',         '#8fa032', '#26290b', 0.15, 0.70, 0.35, 'green'],
  ['Perylene Green',     '#33473b', '#060a08', 0.30, 0.70, 0.50, 'green'],
  ['Cobalt Green',       '#5da287', '#173229', 0.80, 0.15, 0.85, 'green'],
  ['Terre Verte',        '#7d9179', '#2c352a', 0.85, 0.10, 0.80, 'green'],
  ['Undersea Green',     '#4f6448', '#131a10', 0.70, 0.35, 0.75, 'green'],
  ['Olive Green',        '#75713a', '#211f0d', 0.30, 0.55, 0.50, 'green'],
  ['Hansa Yellow',       '#f4e04b', '#4a4410', 0.05, 0.50, 0.30, 'yellow'],
  ['Aureolin',           '#f0d23c', '#57470e', 0.10, 0.55, 0.30, 'yellow'],
  ['Cadmium Yellow Deep','#f2a91e', '#5c3c06', 0.45, 0.35, 0.75, 'yellow'],
  ['Indian Yellow',      '#f0b32a', '#4a3208', 0.10, 0.60, 0.30, 'yellow'],
  ['Naples Yellow',      '#efc98d', '#7a6647', 0.50, 0.15, 0.70, 'yellow'],
  ['Yellow Ochre',       '#d9a751', '#57431e', 0.55, 0.30, 0.70, 'yellow'],
  ['Raw Sienna',         '#c8903f', '#4a3413', 0.60, 0.35, 0.70, 'yellow'],
  ['Quinacridone Gold',  '#c8892b', '#3f2a08', 0.10, 0.80, 0.30, 'yellow'],
  ['Pyrrol Orange',      '#e8702e', '#431c08', 0.10, 0.70, 0.35, 'red'],
  ['Quin Burnt Orange',  '#b45a2c', '#37130a', 0.15, 0.75, 0.35, 'red'],
  ['Vermilion',          '#dd4a26', '#4a0f06', 0.40, 0.45, 0.80, 'red'],
  ['Scarlet Lake',       '#d93a3f', '#420a0e', 0.15, 0.70, 0.35, 'red'],
  ['Quin Magenta',       '#b3306e', '#33081e', 0.05, 0.85, 0.25, 'red'],
  ['Cadmium Red',        '#d63a2e', '#57140f', 0.45, 0.40, 0.80, 'red'],
  ['Quinacridone Rose',  '#e04b8a', '#400f26', 0.05, 0.80, 0.25, 'red'],
  ['Alizarin Crimson',   '#b92b46', '#33060e', 0.10, 0.85, 0.30, 'red'],
  ['Opera Pink',         '#f657a7', '#47102d', 0.05, 0.70, 0.25, 'red'],
  ["Potter's Pink",      '#c98d86', '#4a2f2c', 0.90, 0.15, 0.85, 'red'],
  ['Perylene Maroon',    '#8c3a34', '#260a08', 0.20, 0.70, 0.45, 'violet'],
  ['Moonglow',           '#7a7590', '#211e30', 0.90, 0.25, 0.85, 'violet'],
  ['Dioxazine Violet',   '#6a3fa0', '#150a25', 0.10, 0.85, 0.30, 'violet'],
  ['Cobalt Violet',      '#b06bb2', '#2e1230', 0.85, 0.15, 0.85, 'violet'],
  ['Ultramarine Violet', '#6a5fb8', '#14102d', 0.70, 0.30, 0.80, 'violet'],
  ['Burnt Sienna',       '#b65a33', '#33130a', 0.60, 0.40, 0.70, 'earth'],
  ['Indian Red',         '#9c4a3a', '#2e0d09', 0.75, 0.30, 0.90, 'earth'],
  ['Caput Mortuum',      '#6e3a3a', '#1d0a0a', 0.70, 0.35, 0.85, 'earth'],
  ['Burnt Umber',        '#7a4a2e', '#1d0f08', 0.50, 0.45, 0.70, 'earth'],
  ['Raw Umber',          '#6e5a35', '#17120a', 0.60, 0.40, 0.70, 'earth'],
  ['Sepia',              '#5a4632', '#0f0a06', 0.35, 0.60, 0.60, 'earth'],
  ['Buff Titanium',      '#e8dcc2', '#8a8070', 0.70, 0.10, 0.80, 'earth'],
  ["Payne's Gray",       '#46536a', '#0a0d14', 0.35, 0.60, 0.55, 'neutral'],
  ['Neutral Tint',       '#555059', '#0c0b0d', 0.15, 0.70, 0.45, 'neutral'],
  ['Ivory Black',        '#3a3a38', '#060605', 0.45, 0.50, 0.70, 'neutral'],
];

export const PIGMENTS = RAW.map(([name, w, b, gran, stain, dens, family], id) => {
  const lw = hex2lin(w), lb = hex2lin(b);
  const transp = Math.min(Math.max(stain * 0.55 + (1 - dens) * 0.45, 0), 1);
  const opaq = 1 - 0.8 * Math.pow(transp, 1.25);
  const K = [0, 0, 0], S = [0, 0, 0];
  for (let ch = 0; ch < 3; ch++) [K[ch], S[ch]] = deriveKS(lw[ch], lb[ch] * opaq);
  return { id, name, hexW: w, gran, stain, dens, family, K, S };
});

export const DEFAULT_PALETTE = [
  'French Ultramarine', 'Cerulean Blue', 'Quinacridone Rose',
  'Hansa Yellow', 'Burnt Sienna', "Payne's Gray",
].map(n => PIGMENTS.find(p => p.name === n)?.id || 0);

// Helper to create or find a pigment representation from any hex color
export function getPigmentForColor(colorHex, name = 'Color') {
  const found = PIGMENTS.find(p => p.hexW.toLowerCase() === colorHex.toLowerCase() || p.name.toLowerCase() === name.toLowerCase());
  if (found) return found;
  const lw = hex2lin(colorHex);
  const lb = lw.map(c => c * 0.12);
  const K = [0, 0, 0], S = [0, 0, 0];
  for (let ch = 0; ch < 3; ch++) [K[ch], S[ch]] = deriveKS(lw[ch], lb[ch]);
  return { id: -1, name, hexW: colorHex, gran: 0.5, stain: 0.5, dens: 0.5, family: 'custom', K, S };
}

// ---------------- Watercolor Engine Interface ----------------
export function createWatercolorEngine(canvas, onPaint) {
  let sim = null;
  let useWebGL = false;

  try {
    sim = createSim(canvas, { width: 848, height: 1060 });
    useWebGL = true;
  } catch (err) {
    console.warn('WebGL2 Aquarelle simulation unavailable, falling back to 2D canvas:', err);
  }

  const aborter = new AbortController();
  let raf = 0;
  let painted = false;
  let drawing = false;
  let last = null;
  let activeSlot = 0;
  let pendingSplats = [];

  let options = {
    color: '#58745e',
    size: 18,
    water: 0.56,
    load: 0.7,
    brush: 'round',
    mode: 'brush',
    paper: 'cold'
  };

  // 8 slot palette for simulation
  let activePigments = [
    getPigmentForColor(options.color, 'Brush Pigment'),
    ...PIGMENTS.slice(0, 7)
  ];

  if (useWebGL && sim) {
    sim.setSlots(activePigments);
    sim.setPaper(options.paper);
  }

  // Animation / simulation step loop
  const loop = (timestamp) => {
    if (useWebGL && sim) {
      const pig0 = [0, 0, 0, 0];
      const pig1 = [0, 0, 0, 0];
      const load = Math.max(0.1, options.load * 1.5);
      if (activeSlot < 4) pig0[activeSlot] = load;
      else pig1[activeSlot - 4] = load;

      const splatsToApply = pendingSplats.splice(0, MAXS);
      sim.frame({
        splats: splatsToApply,
        pig0,
        pig1,
        tilt: [0, 0],
        mode: options.mode === 'lift' ? 2 : 0,
        strokeWater: options.water,
        evapMul: 1.0,
        time: timestamp * 0.001
      });
    }
    raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);

  const addSplat = (x, y, vx, vy, pressure = 0.65) => {
    if (!useWebGL || !sim) return;
    const rect = canvas.getBoundingClientRect();
    const simX = (x / rect.width) * sim.SIM_W;
    const simY = (1.0 - (y / rect.height)) * sim.SIM_H; // WebGL bottom-left origin
    const radius = Math.max(2.5, options.size * (0.45 + pressure * 0.45));

    pendingSplats.push({
      x: simX,
      y: simY,
      r: radius,
      water: 0.15 + options.water * 0.45,
      vx: vx * 0.15,
      vy: -vy * 0.15
    });
    if (!painted) {
      painted = true;
      onPaint?.();
    }
  };

  const position = (event) => {
    const rect = canvas.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  };

  const strokeTo = (pt, pressure) => {
    if (!last) {
      addSplat(pt.x, pt.y, 0, 0, pressure);
      last = pt;
      return;
    }
    const dx = pt.x - last.x;
    const dy = pt.y - last.y;
    const distance = Math.hypot(dx, dy);
    const step = Math.max(2.0, options.size * 0.2);
    for (let cur = 0; cur <= distance; cur += step) {
      const ratio = distance ? cur / distance : 0;
      addSplat(last.x + dx * ratio, last.y + dy * ratio, dx, dy, pressure);
    }
    last = pt;
  };

  canvas.addEventListener('pointerdown', (event) => {
    if (useWebGL && sim) sim.pushUndo();
    drawing = true;
    last = null;
    canvas.setPointerCapture(event.pointerId);
    strokeTo(position(event), event.pressure || 0.65);
  }, { signal: aborter.signal });

  canvas.addEventListener('pointermove', (event) => {
    if (drawing) strokeTo(position(event), event.pressure || 0.65);
  }, { signal: aborter.signal });

  const end = () => { drawing = false; last = null; };
  canvas.addEventListener('pointerup', end, { signal: aborter.signal });
  canvas.addEventListener('pointercancel', end, { signal: aborter.signal });

  return {
    canvas,
    sim,
    setOptions(next) {
      options = { ...options, ...next };
      if (next.paper && useWebGL && sim) {
        sim.setPaper(next.paper);
      }
      if (next.color) {
        // Map selected color into active simulation slot
        const pig = getPigmentForColor(next.color);
        activePigments[0] = pig;
        activeSlot = 0;
        if (useWebGL && sim) sim.setSlots(activePigments);
      }
    },
    setEpisodePigments(paletteColors = []) {
      if (!paletteColors || !paletteColors.length) return;
      if (useWebGL && sim) {
        // Permanently preserve and bake all existing wet strokes into the dry ground canvas
        // before switching optical constants, preventing the canvas from resetting or recoloring.
        sim.bakeGround();
      }
      activePigments = paletteColors.slice(0, 8).map((c, i) => {
        const hex = typeof c === 'string' ? c : c.hex || c[1];
        const name = typeof c === 'string' ? c : c.name || c[0];
        return getPigmentForColor(hex, name);
      });
      while (activePigments.length < 8) {
        activePigments.push(PIGMENTS[activePigments.length]);
      }
      activeSlot = 0;
      if (useWebGL && sim) {
        sim.setSlots(activePigments);
        sim.render();
      }
    },
    dry() {
      if (useWebGL && sim) sim.bakeGround();
    },
    clear() {
      if (useWebGL && sim) {
        sim.pushUndo();
        sim.clearPaint();
        sim.render();
      }
      painted = false;
    },
    undo() {
      if (useWebGL && sim) return sim.popUndo();
      return false;
    },
    paint(points, next = {}) {
      if (useWebGL && sim) sim.pushUndo();
      this.setOptions({ ...options, ...next });
      points.forEach((p) => addSplat(p.x, p.y, 0, 0, p.pressure || 0.7));
    },
    stats() {
      return {
        width: canvas.width,
        height: canvas.height,
        webgl: useWebGL,
        mode: options.mode,
        paper: options.paper
      };
    },
    export() {
      if (useWebGL && sim) {
        return sim.capturePNG().toDataURL('image/png');
      }
      return canvas.toDataURL('image/png');
    },
    get painted() { return painted; },
    destroy() {
      if (raf) cancelAnimationFrame(raf);
      aborter.abort();
    }
  };
}
