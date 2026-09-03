import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { YouTubeVideo } from '@videojs/react/media/youtube-video';
import Draggable from 'react-draggable';
import { Resizable } from 'react-resizable';
import 'react-resizable/css/styles.css';
import {
  createWatercolorEngine,
  mixColor as kmMixColor,
  deriveKS,
  hex2lin,
  getPigmentForColor,
  PIGMENTS
} from './watercolor.js?v=12';
import {
  BOB_ROSS_EPISODES,
  EPISODE_BY_ID,
  SEASONS
} from './data/bobRossData.js';

const FIRST_EPISODE = BOB_ROSS_EPISODES[0];

// Load all available transcripts (all of Season 1)
const RAW_TRANSCRIPT_MODULES = import.meta.glob(
  ['./transcript-s1e*.txt', './data/transcripts/transcript-s1e*.txt'],
  { query: '?raw', import: 'default', eager: true }
);

const TRANSCRIPTS_BY_VIDEO_ID = {};
const TRANSCRIPTS_BY_EP_KEY = {};

for (const path in RAW_TRANSCRIPT_MODULES) {
  const content = RAW_TRANSCRIPT_MODULES[path];
  const m = content.match(/Video ID:\s*([a-zA-Z0-9_-]{11})/);
  if (m) {
    TRANSCRIPTS_BY_VIDEO_ID[m[1]] = content;
  }
  const epMatch = path.match(/transcript-s1e(\d+)\.txt/);
  if (epMatch) {
    TRANSCRIPTS_BY_EP_KEY[`1-${epMatch[1]}`] = content;
  }
}

const formatTime = (seconds = 0) =>
  `${Math.floor(seconds / 60).toString().padStart(2, '0')}:${Math.floor(seconds % 60).toString().padStart(2, '0')}`;

const parseTranscript = (raw) => {
  const cues = [];
  raw.split('\n').forEach((line) => {
    const match = line.match(/^\[(\d+):(\d+)\]\s+(?:-\s+)?(.+)$/);
    if (!match) return;
    const start = Number(match[1]) * 60 + Number(match[2]);
    cues.push({ start, text: match[3].trim() });
  });
  return cues.map((cue, index) => ({ ...cue, end: cues[index + 1]?.start ?? 99999 }));
};

const normalizeCues = (source) => {
  if (typeof source === 'string') return parseTranscript(source);
  if (!Array.isArray(source)) return [];
  return source
    .filter((cue) => Number.isFinite(Number(cue.start)) && typeof cue.text === 'string')
    .map((cue, index, all) => ({
      start: Number(cue.start),
      end: Number.isFinite(Number(cue.end)) ? Number(cue.end) : Number(all[index + 1]?.start ?? 99999),
      text: cue.text.trim()
    }));
};

function cueAt(cues, time) {
  let low = 0, high = cues.length - 1, found = -1;
  while (low <= high) {
    const middle = (low + high) >> 1;
    if (cues[middle].start <= time) {
      found = middle;
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
  return found >= 0 && time < cues[found].end ? cues[found] : null;
}

function webMcpResult(text, data = {}) {
  return {
    content: [{ type: 'text', text }],
    structuredContent: data
  };
}

function getWebMcpContext() {
  if (typeof document !== 'undefined' && document.modelContext?.registerTool) {
    return document.modelContext;
  }
  // Chromium's earlier origin-trial builds used this location. Keep the
  // fallback during the migration, but prefer the current document API.
  if (typeof navigator !== 'undefined' && navigator.modelContext?.registerTool) {
    return navigator.modelContext;
  }
  return null;
}

function normalizedAgentPoints(points, canvas) {
  if (!Array.isArray(points) || !canvas) return [];
  const rect = canvas.getBoundingClientRect();
  if (!rect.width || !rect.height) return [];
  return points.slice(0, 512).flatMap((point) => {
    const x = Number(point?.x);
    const y = Number(point?.y);
    if (!Number.isFinite(x) || !Number.isFinite(y) || x < 0 || x > 1 || y < 0 || y > 1) return [];
    const pressure = Number(point.pressure);
    return [{
      x: x * rect.width,
      y: y * rect.height,
      pressure: Number.isFinite(pressure) ? Math.max(0.05, Math.min(1, pressure)) : 0.7
    }];
  });
}

function useEpisodeTranscript(videoId, episode, supplied) {
  const [state, setState] = useState({ videoId, status: 'loading', cues: [] });
  useEffect(() => {
    let current = true;
    if (supplied?.videoId === videoId && supplied?.cues?.length) {
      setState({ videoId, status: 'ready', cues: supplied.cues });
      return () => { current = false; };
    }
    const raw = TRANSCRIPTS_BY_VIDEO_ID[videoId] || TRANSCRIPTS_BY_EP_KEY[`${episode?.season}-${episode?.episode}`];
    if (raw) {
      const cues = parseTranscript(raw);
      setState({ videoId, status: 'ready', cues });
      return () => { current = false; };
    }
    setState({ videoId, status: 'unavailable', cues: [] });
    return () => { current = false; };
  }, [supplied, videoId, episode]);
  return state;
}

function postCommand(frame, func, args = []) {
  frame?.contentWindow?.postMessage(JSON.stringify({ event: 'command', func, args }), '*');
}

// Compute Highlight (tint) and Shadow (shade) for any pigment hex code
function getColorShades(hex) {
  if (!hex || hex.length < 7) return { tint: '#ffffff', pure: '#58745e', shade: '#1a1614' };
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) || 0);

  // Highlight / Tint (mix with white)
  const tintR = Math.min(255, Math.round(r + (255 - r) * 0.45));
  const tintG = Math.min(255, Math.round(g + (255 - g) * 0.45));
  const tintB = Math.min(255, Math.round(b + (255 - b) * 0.45));
  const tint = `#${[tintR, tintG, tintB].map((x) => x.toString(16).padStart(2, '0')).join('')}`;

  // Shadow / Shade (deep tone)
  const shadeR = Math.max(0, Math.round(r * 0.52));
  const shadeG = Math.max(0, Math.round(g * 0.52));
  const shadeB = Math.max(0, Math.round(b * 0.52));
  const shade = `#${[shadeR, shadeG, shadeB].map((x) => x.toString(16).padStart(2, '0')).join('')}`;

  return { tint, pure: hex, shade };
}

// Custom drag handles matching the reference image layout
const BottomHandle = React.forwardRef(({ handleAxis, ...props }, ref) => (
  <div ref={ref} className="video-drag-handle handle-bottom" {...props} title="Drag to resize maintaining 16:9 aspect ratio">
    <div className="grip-badge">
      <span />
      <span />
      <span />
    </div>
  </div>
));

const TopHandle = React.forwardRef(({ handleAxis, ...props }, ref) => (
  <div ref={ref} className="video-drag-handle handle-top" {...props} title="Drag to resize video height">
    <div className="grip-badge">
      <span />
      <span />
      <span />
    </div>
  </div>
));

const CornerHandle = React.forwardRef(({ handleAxis, ...props }, ref) => (
  <div ref={ref} className="video-drag-handle handle-se" {...props} title="Drag corner to resize maintaining 16:9 aspect ratio">
    <div className="grip-badge-corner" />
  </div>
));

const EastHandle = React.forwardRef(({ handleAxis, ...props }, ref) => (
  <div ref={ref} className="panel-drag-handle handle-e" {...props} title="Drag to resize panel width">
    <div className="panel-drag-bar" />
  </div>
));

const WestHandle = React.forwardRef(({ handleAxis, ...props }, ref) => (
  <div ref={ref} className="panel-drag-handle handle-w" {...props} title="Drag to resize panel width">
    <div className="panel-drag-bar" />
  </div>
));

const YouTubeLesson = React.forwardRef(function YouTubeLesson({
  owner,
  episode,
  onTime,
  onState,
  onVideoChange,
  onPrev,
  onNext
}, apiRef) {
  const frameRef = useRef(null);
  const timeRef = useRef(0);
  const videoRef = useRef(episode || FIRST_EPISODE);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    videoRef.current = episode;
    timeRef.current = 0;
    setTime(0);
    setDuration(0);
    setPlaying(false);
    onTime?.(0);
    onState?.(false);
  }, [episode, onTime, onState]);

  useEffect(() => {
    const controller = new AbortController();
    const receive = (event) => {
      if (event.source !== frameRef.current?.contentWindow) return;
      let payload = event.data;
      try {
        if (typeof payload === 'string') payload = JSON.parse(payload);
      } catch {
        return;
      }
      const info = payload?.info;
      if (!info) return;
      const videoData = info.videoData;
      const videoId = videoData?.video_id || videoData?.videoId || info.videoId;
      if (videoId && videoId !== videoRef.current?.id) {
        const known = EPISODE_BY_ID[videoId];
        videoRef.current = known || { id: videoId, title: videoData?.title || 'YouTube lesson' };
        timeRef.current = 0;
        setTime(0);
        setDuration(0);
        setPlaying(false);
        onTime?.(0);
        onState?.(false);
        onVideoChange?.(videoRef.current);
      }
      if (Number.isFinite(info.currentTime)) {
        timeRef.current = info.currentTime;
        setTime(info.currentTime);
        onTime?.(info.currentTime);
      }
      if (Number.isFinite(info.duration)) setDuration(info.duration);
      if (Number.isFinite(info.playerState)) {
        const next = info.playerState === 1;
        setPlaying(next);
        onState?.(next);
      }
    };
    window.addEventListener('message', receive, { signal: controller.signal });
    const announce = () =>
      frameRef.current?.contentWindow?.postMessage(
        JSON.stringify({ event: 'listening', id: `${owner}-listener` }),
        '*'
      );
    announce();
    const listeningInterval = window.setInterval(announce, 1500);
    return () => {
      controller.abort();
      window.clearInterval(listeningInterval);
    };
  }, [onTime, onState, onVideoChange, owner]);

  const api = useMemo(() => ({
    play: () => postCommand(frameRef.current, 'playVideo'),
    pause: () => postCommand(frameRef.current, 'pauseVideo'),
    seek: (delta) => postCommand(frameRef.current, 'seekTo', [Math.max(0, timeRef.current + delta), true]),
    seekTo: (seconds) => postCommand(frameRef.current, 'seekTo', [Math.max(0, Number(seconds) || 0), true]),
    time: () => timeRef.current,
    screenshot: () => ({ owner, time: timeRef.current, ...videoRef.current })
  }), [owner]);
  React.useImperativeHandle(apiRef, () => api, [api]);

  const videoSourceUrl = episode?.watchUrl || episode?.youtubeSrc || (episode?.id ? `https://www.youtube.com/watch?v=${episode.id}` : '');

  return (
    <div className="video-frame" key={`${owner}-${episode?.id || 'def'}`}>
      <YouTubeVideo
        key={`${owner}-${episode?.id || 'def'}`}
        ref={frameRef}
        className="youtube-video"
        src={videoSourceUrl}
        source={{
          src: videoSourceUrl,
          engine: { youtube: { cc_load_policy: 1, cc_lang_pref: 'en', rel: 0 } }
        }}
        playsInline
        controls
      />
      {owner === 'you' && (
        <button className="pick-video" onClick={() => window.paintAlongAgent?.eyedrop()}>
          ⌖ pick color
        </button>
      )}
    </div>
  );
});

function PaintCanvas({ id, engineRef, settings, label, onActivate }) {
  const canvasRef = useRef(null);
  const [painted, setPainted] = useState(false);
  useEffect(() => {
    const engine = createWatercolorEngine(canvasRef.current, () => setPainted(true));
    engineRef.current = engine;
    return () => { engine.destroy(); engineRef.current = null; };
  }, [engineRef]);
  useEffect(() => { engineRef.current?.setOptions(settings); }, [engineRef, settings]);
  return (
    <div className="easel" onPointerDown={onActivate}>
      <div className={`canvas-shell paper-${settings.paper} ${painted ? 'painted' : ''}`}>
        <canvas ref={canvasRef} id={id} width="848" height="1060" aria-label={label} />
        <div className="empty-hint">{id === 'humanCanvas' ? 'Begin with a quiet sky' : 'Waiting for a happy accident'}</div>
      </div>
    </div>
  );
}

function Transcript({ time, playing, transcript, episode }) {
  const cue = cueAt(transcript.cues, time);
  const readyText = cue?.text || (time < (transcript.cues[0]?.start ?? 0) ? 'The lesson is beginning…' : 'Listening…');
  const text = transcript.status === 'loading'
    ? 'Loading this episode’s transcript…'
    : transcript.status === 'unavailable'
      ? `Captions available via YouTube CC. (${transcript.cues.length ? 'Showing cached cues' : 'CC on player'})`
      : readyText;
  return (
    <aside className="transcript" aria-live="polite">
      <div className="live-label"><i className={playing ? 'playing' : ''} /> LIVE TRANSCRIPT</div>
      <div className="transcript-episode">S{episode.season || '—'} · E{episode.episode || '—'} · {episode.title}</div>
      <div className="speaker">BOB ROSS</div>
      <blockquote className={`live-caption transcript-${transcript.status}`} key={`${episode.id}-${cue?.start ?? transcript.status}`}>
        "{text}"
      </blockquote>
      <div className="caption-time">{formatTime(time)}</div>
    </aside>
  );
}

function EpisodeModal({ isOpen, onClose, currentEpisode, onSelectEpisode }) {
  const [seasonFilter, setSeasonFilter] = useState('all');
  const [search, setSearch] = useState('');

  if (!isOpen) return null;

  const filtered = BOB_ROSS_EPISODES.filter((ep) => {
    if (seasonFilter !== 'all' && ep.season !== Number(seasonFilter)) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      const matchTitle = ep.title.toLowerCase().includes(q);
      const matchSeason = `s${ep.season}`.includes(q) || `season ${ep.season}`.includes(q);
      const matchColor =
        Array.isArray(ep.colors) &&
        ep.colors.some((c) => c.toLowerCase().includes(q));
      return matchTitle || matchSeason || matchColor;
    }
    return true;
  });

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Browse Bob Ross Episodes">
      <div className="episode-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3>Select a Painting Lesson</h3>
            <p>Browse by season, title, or the colors Bob uses.</p>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">✕</button>
        </div>

        <div className="modal-filters">
          <div className="modal-search">
            <span aria-hidden="true">⌕</span>
            <input
              type="text"
              placeholder="Search by title, season, or pigment (e.g. Mountain, S2, Alizarin)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus
            />
            {search && <button className="clear-search" onClick={() => setSearch('')}>✕</button>}
          </div>
          <div className="season-pills">
            <button
              className={`pill ${seasonFilter === 'all' ? 'active' : ''}`}
              onClick={() => setSeasonFilter('all')}
            >
              All Seasons ({BOB_ROSS_EPISODES.length})
            </button>
            {SEASONS.map((s) => (
              <button
                key={s}
                className={`pill ${seasonFilter === String(s) ? 'active' : ''}`}
                onClick={() => setSeasonFilter(String(s))}
              >
                S{s}
              </button>
            ))}
          </div>
        </div>

        <div className="modal-content">
          <div className="episodes-grid">
          {filtered.length === 0 ? (
            <div className="no-episodes">
              <p>No paintings found matching "{search}"</p>
              <button className="pill" onClick={() => { setSearch(''); setSeasonFilter('all'); }}>Reset filters</button>
            </div>
          ) : (
            filtered.map((ep) => {
              const isSelected = ep.id === currentEpisode.id;
              return (
                <div
                  key={`${ep.season}-${ep.episode}-${ep.id}`}
                  className={`episode-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => {
                    onSelectEpisode(ep);
                    onClose();
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      onSelectEpisode(ep);
                      onClose();
                    }
                  }}
                >
                  <div className="card-thumb-wrap">
                    {ep.imgSrc ? (
                      <img
                        src={ep.imgSrc}
                        alt={ep.title}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="card-placeholder">🎨</div>
                    )}
                    <span className="card-season-badge">S{ep.season} · E{ep.episode}</span>
                    {isSelected && <span className="card-playing-badge">NOW PLAYING</span>}
                  </div>
                  <div className="card-info">
                    <h3 className="card-title" title={ep.title}>{ep.title}</h3>
                    <div className="card-meta">
                      <span className="color-count">{ep.numColors || ep.colors.length} colors</span>
                      <div className="color-dots">
                        {ep.colorHex.slice(0, 7).map((hex, ci) => (
                          <span key={ci} style={{ background: hex }} title={ep.colors[ci] || ''} />
                        ))}
                        {ep.colorHex.length > 7 && <span className="more-dots">+{ep.colorHex.length - 7}</span>}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Bob Ross Lucite Color Mixing Plate (Radial Display with Concentric Shades & Mixing Slab)
function BobRossPalettePlateModal({ isOpen, onClose, pigments, activeColor, onPickColor, onMixWithKnife, mixList }) {
  if (!isOpen) return null;

  const count = pigments.length;
  const startAngle = -Math.PI * 0.94;
  const endAngle = Math.PI * 0.22;
  const radius = 195;
  const centerX = 265;
  const centerY = 245;

  return (
    <div className="palette-plate-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="bob-ross-palette-plate" onClick={(e) => e.stopPropagation()}>
        <div className="palette-thumb-hole" />

        <div className="palette-plate-header">
          <div className="palette-plate-title-group">
            <span className="eyebrow" style={{ color: '#826548' }}>BOB ROSS'S CLEAR LUCITE PALETTE</span>
            <h2>Radial Color Palette</h2>
            <p>Pick pure hues, highlights (tints), or shadow shades. Blend dollops on the mixing slab.</p>
          </div>
          <button className="palette-plate-close" onClick={onClose}>✕</button>
        </div>

        <div className="radial-paint-area">
          {/* Central Mixing Slab */}
          <div className="palette-center-mixing-well">
            <span className="mixing-well-title">Mixing Slab</span>
            <div className="mixing-puddle-display">
              {mixList.slice(-3).map((hex, idx) => (
                <span
                  key={idx}
                  className="mixing-dollop"
                  style={{ background: hex }}
                  title={`Dollop ${idx + 1}: ${hex}`}
                />
              ))}
            </div>
            <button className="knife-mix-btn" onClick={onMixWithKnife} title="Blend dollops with Bob's painting knife">
              <span>🗡️ Mix with Knife</span>
            </button>
            <div style={{ marginTop: '8px', fontSize: '10px', color: '#6d5a49' }}>
              Active: <strong>{pigments.find((p) => p[1].toLowerCase() === activeColor.toLowerCase())?.[0] || activeColor}</strong>
            </div>
          </div>

          {/* Radial Mounds of Pigments with 3 Concentric Shade Blobs */}
          {pigments.map(([name, pureHex], i) => {
            const angle = count > 1 ? startAngle + (i / (count - 1)) * (endAngle - startAngle) : 0;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            const shades = getColorShades(pureHex);
            const isSelected = activeColor.toLowerCase() === pureHex.toLowerCase();

            return (
              <div
                key={name}
                className="radial-pigment-group"
                style={{ left: `${x}px`, top: `${y}px` }}
              >
                <span className="radial-pigment-name">{name}</span>
                <div className="radial-shades-row">
                  <span
                    className={`radial-swatch-blob ${activeColor.toLowerCase() === shades.tint.toLowerCase() ? 'active-swatch' : ''}`}
                    style={{ background: shades.tint }}
                    onClick={() => onPickColor(shades.tint, `${name} (Highlight)`)}
                    title={`${name} · Highlight Tint (${shades.tint})`}
                  />
                  <span
                    className={`radial-swatch-blob pure-swatch ${isSelected ? 'active-swatch' : ''}`}
                    style={{ background: shades.pure }}
                    onClick={() => onPickColor(shades.pure, `${name} (Pure)`)}
                    title={`${name} · Pure Pigment (${shades.pure})`}
                  />
                  <span
                    className={`radial-swatch-blob ${activeColor.toLowerCase() === shades.shade.toLowerCase() ? 'active-swatch' : ''}`}
                    style={{ background: shades.shade }}
                    onClick={() => onPickColor(shades.shade, `${name} (Shadow)`)}
                    title={`${name} · Deep Shadow (${shades.shade})`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ColorMixingGuideModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="How Color Mixing Works">
      <div className="modal-sheet" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
        <div className="modal-head">
          <div className="modal-title-group">
            <span className="modal-eyebrow">PIGMENT SCIENCE & COLOR THEORY</span>
            <h2>How Color Mixing Works in Happy Little Studio</h2>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">✕</button>
        </div>
        <div className="modal-body mixing-guide-content">
          <div className="mixing-section">
            <h3>🎨 1. Real Paint vs. Computer Screens</h3>
            <p>
              Your screen uses <strong>Additive Light (RGB)</strong>: pixels project red, green, and blue rays directly into your eyes (Red + Green + Blue = White light).
            </p>
            <p>
              Real paint pigments use <strong>Subtractive Synthesis</strong>: each pigment particle absorbs specific wavelengths of ambient light and reflects only the rest back to the viewer.
            </p>
          </div>

          <div className="mixing-section">
            <h3>✨ 2. The Kubelka-Munk Physical Model</h3>
            <p>
              Happy Little Studio implements the optical <strong>Kubelka-Munk theory</strong> used in physical pigment formulation:
            </p>
            <p>
              Each pigment is modeled with two fundamental spectral constants:
              <br />• <strong>K (Absorption coefficient):</strong> How strongly pigment grains absorb light.
              <br />• <strong>S (Scattering coefficient):</strong> How strongly pigment grains scatter light back.
            </p>
            <div className="km-equation">
              K_mix = Σ (c_i · K_i)  |  S_mix = Σ (c_i · S_i)
            </div>
            <p style={{ marginTop: '8px', fontSize: '12px', color: '#4d6850' }}>
              Plus Saunderson internal reflections, giving true watercolor luster!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Bob Ross Tools catalog
const BOB_ROSS_BRUSHES = [
  { id: 'knife', icon: '🗡️', name: 'Knife', title: 'Bob\'s Painting Knife (Mountains, Snow Breaks & Tree Trunks)' },
  { id: 'flat2', icon: '🖌️', name: '2" Flat', title: 'Almighty 2-Inch Brush (Skies, Water Washes & Criss-Cross Strokes)' },
  { id: 'flat1', icon: '🖌️', name: '1" Flat', title: '1-Inch Landscape Brush (Paths, Cliffs & Clump Foliage)' },
  { id: 'fan6', icon: '🪶', name: '#6 Fan', title: 'No. 6 Fan Brush (Majestic Pine Trees & Wave Ripples)' },
  { id: 'fan3', icon: '🪶', name: '#3 Fan', title: 'No. 3 Fan Brush (Delicate Evergreens & Small Trees)' },
  { id: 'round', icon: '🌳', name: '1" Round', title: '1-Inch Round Foliage Brush (Happy Little Bushes & Clouds)' },
  { id: 'liner', icon: '✒️', name: '#2 Liner', title: 'No. 2 Script Liner (Twigs, Limbs, Grass Blades & Signature)' },
  { id: 'mop', icon: '☁️', name: 'Blender', title: 'Mop Blender Brush (Mist, Waterfalls & Soft Reflections)' }
];

const ONBOARDING_STEPS = [
  {
    eyebrow: 'WELCOME TO THE STUDIO',
    title: 'Two easels. One quiet lesson.',
    body: 'Paint beside Bob on the left while your Codex agent works from its own video and watercolor canvas on the right.',
    note: 'There are no mistakes here—only different paintings.'
  },
  {
    eyebrow: 'YOUR WATERCOLOR BENCH',
    title: 'Load the brush, then let water wander.',
    body: 'Choose a brush, tune water and pigment, mix physical colors, or add a custom hue. Hover or focus any tool for a quick field note.',
    note: 'Undo and redo follow whichever easel you touched last.'
  },
  {
    eyebrow: 'PAINT WITH AN AGENT',
    title: 'The agent can watch, listen, and paint.',
    body: 'WebMCP gives the agent its own lesson controls, live transcript cues, and normalized brush strokes—without taking over your easel.',
    note: 'Compete, collaborate, or simply make two happy little worlds.'
  }
];

function Onboarding({ open, onFinish }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (open) setStep(0);
  }, [open]);

  if (!open) return null;
  const content = ONBOARDING_STEPS[step];
  const isLast = step === ONBOARDING_STEPS.length - 1;

  return (
    <div className="onboarding-backdrop" role="dialog" aria-modal="true" aria-labelledby="onboarding-title">
      <div className="onboarding-card">
        <button className="onboarding-skip" type="button" onClick={onFinish}>Skip tour</button>
        <div className="onboarding-portrait" aria-hidden="true">
          <span className="onboarding-halo" />
          <img src="/bob-ross-guide.png" alt="" />
        </div>
        <div className="onboarding-copy" key={step}>
          <span className="onboarding-eyebrow">{content.eyebrow}</span>
          <h2 id="onboarding-title">{content.title}</h2>
          <p>{content.body}</p>
          <blockquote>{content.note}</blockquote>
        </div>
        <div className="onboarding-footer">
          <div className="onboarding-dots" aria-label={`Step ${step + 1} of ${ONBOARDING_STEPS.length}`}>
            {ONBOARDING_STEPS.map((item, index) => (
              <button
                key={item.title}
                type="button"
                className={index === step ? 'active' : ''}
                onClick={() => setStep(index)}
                aria-label={`Go to step ${index + 1}`}
                aria-current={index === step ? 'step' : undefined}
              />
            ))}
          </div>
          <div className="onboarding-actions">
            {step > 0 && <button type="button" className="onboarding-back" onClick={() => setStep((value) => value - 1)}>Back</button>}
            <button
              type="button"
              className="onboarding-next"
              onClick={() => isLast ? onFinish() : setStep((value) => value + 1)}
            >
              {isLast ? 'Start painting' : 'Next'} <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default function App() {
  const humanEngine = useRef(null), agentEngine = useRef(null), humanVideo = useRef(null), agentVideo = useRef(null);
  const agentToolApi = useRef(null);
  const liveMcpState = useRef(null);
  const [color, setColor] = useState('#4E1500');
  const [brush, setBrush] = useState('knife');
  const [size, setSize] = useState(18);
  const [water, setWater] = useState(.45);
  const [load, setLoad] = useState(.75);
  const [mode, setMode] = useState('brush');
  const [paper, setPaper] = useState('cold');
  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [episode, setEpisode] = useState(FIRST_EPISODE);
  const [suppliedTranscript, setSuppliedTranscript] = useState({ videoId: '', cues: [] });
  const [active, setActive] = useState('human');
  const [mix, setMix] = useState([color]);
  const [mixQueue, setMixQueue] = useState(['#021E44', '#FFEC00']);
  const [customColors, setCustomColors] = useState([]);
  // Bob Ross color palette dynamically derived from current episode
  const currentEpisodePigments = useMemo(() => {
    if (episode?.colors?.length && episode?.colorHex?.length) {
      return episode.colors.map((name, i) => [name, episode.colorHex[i] || '#58745e']);
    }
    return [
      ['Alizarin Crimson', '#4E1500'],
      ['Prussian Blue', '#021E44'],
      ['Phthalo Green', '#102E3C'],
      ['Cadmium Yellow', '#FFEC00'],
      ['Sap Green', '#0A3410'],
      ['Titanium White', '#FFFFFF'],
      ['Van Dyke Brown', '#221B15'],
      ['Midnight Black', '#000000']
    ];
  }, [episode]);

  // Real-time Kubelka-Munk physical color mixing calculation vs. naive RGB average
  const mixData = useMemo(() => {
    const p1 = mixQueue[0] || currentEpisodePigments[0]?.[1] || '#021E44';
    const p2 = mixQueue[1] || currentEpisodePigments[1]?.[1] || '#FFEC00';

    const p1Item = currentEpisodePigments.find((p) => p[1].toLowerCase() === p1.toLowerCase());
    const p2Item = currentEpisodePigments.find((p) => p[1].toLowerCase() === p2.toLowerCase());

    const name1 = p1Item ? p1Item[0] : (PIGMENTS.find((p) => p.hexW.toLowerCase() === p1.toLowerCase())?.name || 'Pigment 1');
    const name2 = p2Item ? p2Item[0] : (PIGMENTS.find((p) => p.hexW.toLowerCase() === p2.toLowerCase())?.name || 'Pigment 2');

    const parts = [
      { pig: getPigmentForColor(p1, name1), amt: 0.5 },
      { pig: getPigmentForColor(p2, name2), amt: 0.5 }
    ];
    const km = kmMixColor(parts, 0.93, 1.0);

    // Naive RGB average
    const r1 = parseInt(p1.slice(1, 3), 16) || 0, g1 = parseInt(p1.slice(3, 5), 16) || 0, b1 = parseInt(p1.slice(5, 7), 16) || 0;
    const r2 = parseInt(p2.slice(1, 3), 16) || 0, g2 = parseInt(p2.slice(3, 5), 16) || 0, b2 = parseInt(p2.slice(5, 7), 16) || 0;
    const rgb = '#' + [Math.round((r1 + r2) / 2), Math.round((g1 + g2) / 2), Math.round((b1 + b2) / 2)].map((x) => x.toString(16).padStart(2, '0')).join('');

    return { km, rgb, p1, p2, name1, name2 };
  }, [mixQueue, currentEpisodePigments]);

  const [toast, setToast] = useState('');
  const [webMcpReady, setWebMcpReady] = useState(false);
  const [selectorOpen, setSelectorOpen] = useState(false);
  const [mixModalOpen, setMixModalOpen] = useState(false);
  const [plateModalOpen, setPlateModalOpen] = useState(false);
  const [onboardingOpen, setOnboardingOpen] = useState(false);
  const toastTimer = useRef(0);
// Resizable layout states with collapse toggles
  const [resizableEnabled, setResizableEnabled] = useState(true);
  const [humanWidth, setHumanWidth] = useState(420);
  const [agentWidth, setAgentWidth] = useState(420);
  const [bottomVideoHeight, setBottomVideoHeight] = useState(175);
  const [humanCollapsed, setHumanCollapsed] = useState(false);
  const [agentCollapsed, setAgentCollapsed] = useState(false);
  const [topVideoCollapsed, setTopVideoCollapsed] = useState(false);
  const [bottomVideoCollapsed, setBottomVideoCollapsed] = useState(false);

  // Draggable and Sizeable Human Video (16:9 Aspect Ratio locked)
  const [humanVideoWidth, setHumanVideoWidth] = useState(360);
  const humanVideoHeight = useMemo(() => Math.round(humanVideoWidth * (9 / 16)), [humanVideoWidth]);
  const humanVideoNodeRef = useRef(null);
  const [isInteractingVideo, setIsInteractingVideo] = useState(false);

  useEffect(() => {
    try {
      if (window.localStorage.getItem('joy-of-painting-onboarding') !== 'complete') {
        setOnboardingOpen(true);
      }
    } catch {
      setOnboardingOpen(true);
    }
  }, []);

  // Sync palette to watercolor simulation engines safely (bakes ground to avoid wiping canvas)
  useEffect(() => {
    if (currentEpisodePigments.length) {
      const firstColor = currentEpisodePigments[0][1];
      setColor(firstColor);
      setMix([firstColor]);
      humanEngine.current?.setEpisodePigments(currentEpisodePigments);
      agentEngine.current?.setEpisodePigments(currentEpisodePigments);
    }
  }, [currentEpisodePigments]);

  const settings = useMemo(() => ({ color, brush, size, water, load, mode, paper }), [color, brush, size, water, load, mode, paper]);
  const transcript = useEpisodeTranscript(episode.id, episode, suppliedTranscript);
  liveMcpState.current = { brush, color, episode, load, size, transcript, water };

  const notify = useCallback((message) => {
    setToast(message);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(''), 2500);
  }, []);

  const selectEpisode = useCallback((video) => {
    const next = EPISODE_BY_ID[video.id] || video;
    setEpisode(next);
    setTime(0);
    setPlaying(false);
    notify(`Loaded S${next.season} · E${next.episode}: ${next.title}`);
  }, [notify]);

  const currentIdx = BOB_ROSS_EPISODES.findIndex((ep) => ep.id === episode.id || ep.index === episode.index);
  const goToEpisode = useCallback((delta) => {
    const nextIdx = (currentIdx + delta + BOB_ROSS_EPISODES.length) % BOB_ROSS_EPISODES.length;
    selectEpisode(BOB_ROSS_EPISODES[nextIdx]);
  }, [currentIdx, selectEpisode]);

  useEffect(() => () => window.clearTimeout(toastTimer.current), []);

  useEffect(() => {
    const eyedrop = async () => {
      if (!window.EyeDropper) return notify('Use Chrome to pick a color from the lesson.');
      try {
        const result = await new EyeDropper().open();
        setColor(result.sRGBHex);
        notify('A lesson color joined your palette.');
      } catch {
        /* cancelled */
      }
    };

    const api = {
      play: () => agentVideo.current?.play(),
      pause: () => agentVideo.current?.pause(),
      forward: (seconds = 10) => agentVideo.current?.seek(seconds),
      back: (seconds = 10) => agentVideo.current?.seek(-seconds),
      seekTo: (seconds = 0) => agentVideo.current?.seekTo(seconds),
      screenshot: () => agentVideo.current?.screenshot(),
      stats: () => ({ human: humanEngine.current?.stats(), agent: agentEngine.current?.stats() }),
      paint: (points, next = {}) =>
        agentEngine.current?.paint(points, {
          color: next.color || color,
          size: next.size || size,
          brush: next.brush || brush,
          water: next.water ?? water,
          load: next.load ?? load
        }),
      clear: () => agentEngine.current?.clear(),
      dry: () => agentEngine.current?.dry(),
      undo: () => agentEngine.current?.undo(),
      redo: () => agentEngine.current?.redo(),
      eyedrop,
      setTranscript: (videoId, source) => {
        const cues = normalizeCues(source);
        setSuppliedTranscript({ videoId, cues });
        return { videoId, cueCount: cues.length };
      },
      getEpisodes: () => BOB_ROSS_EPISODES,
      getEpisode: () => episode,
      setEpisode: (idOrIndex) => {
        const found = BOB_ROSS_EPISODES.find(
          (e) => e.id === idOrIndex || e.index === Number(idOrIndex) || e.title.toLowerCase() === String(idOrIndex).toLowerCase()
        );
        if (found) {
          selectEpisode(found);
          return found;
        }
        return null;
      }
    };
    agentToolApi.current = api;
    // Kept as a developer-friendly fallback. Real agents discover the same
    // capabilities through document.modelContext below.
    window.paintAlongAgent = api;
    return () => {
      agentToolApi.current = null;
      delete window.paintAlongAgent;
    };
  }, [brush, color, episode, load, notify, selectEpisode, size, water]);

  useEffect(() => {
    const modelContext = getWebMcpContext();
    if (!modelContext) {
      setWebMcpReady(false);
      return undefined;
    }

    const controller = new AbortController();
    const tools = [
      {
        name: 'get_paint_along_status',
        description: 'Read the current Bob Ross lesson, the live caption, and the human and agent canvas capabilities. Use this before choosing a painting action.',
        inputSchema: { type: 'object', properties: {} },
        annotations: { readOnlyHint: true },
        execute: () => {
          const live = liveMcpState.current;
          const currentEpisode = agentToolApi.current?.getEpisode?.() || live.episode;
          const currentTime = agentVideo.current?.time?.() || 0;
          const activeCue = cueAt(live.transcript.cues, currentTime);
          return webMcpResult(
            `Agent lesson: ${currentEpisode.title} at ${formatTime(currentTime)}. ${activeCue?.text || 'No live caption is available yet.'}`,
            {
              episode: { id: currentEpisode.id, title: currentEpisode.title, season: currentEpisode.season, episode: currentEpisode.episode },
              agentTime: currentTime,
              liveCaption: activeCue?.text || null,
              transcriptStatus: live.transcript.status,
              agentCanvas: agentEngine.current?.stats?.() || null
            }
          );
        }
      },
      {
        name: 'control_agent_lesson',
        description: 'Control only the agent’s separate YouTube lesson player. Play, pause, seek by a signed number of seconds, or seek to an exact timestamp.',
        inputSchema: {
          type: 'object',
          properties: {
            action: { type: 'string', enum: ['play', 'pause', 'seek_by', 'seek_to'], description: 'Playback action.' },
            seconds: { type: 'number', description: 'For seek_by this may be negative; for seek_to it is an absolute non-negative timestamp.' }
          },
          required: ['action']
        },
        annotations: { readOnlyHint: false },
        execute: ({ action, seconds = 0 }) => {
          const api = agentToolApi.current;
          if (!api) return webMcpResult('The agent lesson is not ready yet.', { ok: false });
          if (action === 'play') api.play();
          else if (action === 'pause') api.pause();
          else if (action === 'seek_by') api.forward(Number(seconds) || 0);
          else if (action === 'seek_to') api.seekTo(seconds);
          else return webMcpResult('Unknown lesson action.', { ok: false });
          const after = action === 'seek_to' ? Math.max(0, Number(seconds) || 0) : agentVideo.current?.time?.() || 0;
          return webMcpResult(`Agent lesson ${action.replace('_', ' ')} requested at ${formatTime(after)}.`, { ok: true, action, requestedTime: after });
        }
      },
      {
        name: 'read_live_lesson_transcript',
        description: 'Read the current live transcript caption and a small nearby context window for the active Bob Ross episode. This returns a short excerpt, not the entire transcript.',
        inputSchema: {
          type: 'object',
          properties: { contextCues: { type: 'integer', minimum: 0, maximum: 3, description: 'Number of caption cues on each side of the current cue.' } }
        },
        annotations: { readOnlyHint: true },
        execute: ({ contextCues = 1 } = {}) => {
          const live = liveMcpState.current;
          const currentTime = agentVideo.current?.time?.() || 0;
          const index = live.transcript.cues.findIndex((cue) => cue.start <= currentTime && currentTime < cue.end);
          const radius = Math.max(0, Math.min(3, Number(contextCues) || 0));
          const cues = index < 0 ? [] : live.transcript.cues.slice(Math.max(0, index - radius), index + radius + 1);
          return webMcpResult(
            cues.length ? `Live caption at ${formatTime(currentTime)}: ${cues[Math.min(radius, cues.length - 1)]?.text || cues[0].text}` : 'No cached transcript cue is available at the agent lesson time.',
            { episodeId: live.episode.id, time: currentTime, transcriptStatus: live.transcript.status, cues }
          );
        }
      },
      {
        name: 'get_agent_lesson_reference_image',
        description: 'Return the active agent lesson timestamp and its official YouTube thumbnail URL as a visual painting reference. This is a lesson thumbnail, not a frame-perfect video screenshot.',
        inputSchema: { type: 'object', properties: {} },
        annotations: { readOnlyHint: true },
        execute: () => {
          const snapshot = agentToolApi.current?.screenshot?.();
          if (!snapshot?.id) return webMcpResult('The agent lesson is not ready yet.', { ok: false });
          const thumbnailUrl = `https://i.ytimg.com/vi/${snapshot.id}/hqdefault.jpg`;
          return webMcpResult(
            `Reference image for ${snapshot.title || 'the current lesson'} at ${formatTime(snapshot.time)}. This URL is the official lesson thumbnail, not a current-frame capture.`,
            { ok: true, videoId: snapshot.id, time: snapshot.time, thumbnailUrl, limitation: 'YouTube cross-origin iframes do not expose frame pixels to page JavaScript.' }
          );
        }
      },
      {
        name: 'paint_agent_canvas',
        description: 'Paint one or more watercolor strokes on the agent’s own HTML canvas. Points use normalized x/y coordinates from 0 to 1, measured from the canvas top-left. Keep each stroke concise.',
        inputSchema: {
          type: 'object',
          properties: {
            strokes: {
              type: 'array', minItems: 1, maxItems: 12,
              items: {
                type: 'object',
                properties: {
                  points: { type: 'array', minItems: 1, maxItems: 512, items: { type: 'object', properties: { x: { type: 'number', minimum: 0, maximum: 1 }, y: { type: 'number', minimum: 0, maximum: 1 }, pressure: { type: 'number', minimum: 0, maximum: 1 } }, required: ['x', 'y'] } },
                  color: { type: 'string', pattern: '^#[0-9a-fA-F]{6}$' },
                  size: { type: 'number', minimum: 1, maximum: 120 },
                  brush: { type: 'string', enum: ['knife', 'flat2', 'flat1', 'fan6', 'fan3', 'round', 'liner', 'mop'] },
                  water: { type: 'number', minimum: 0, maximum: 1 },
                  load: { type: 'number', minimum: 0, maximum: 1 }
                },
                required: ['points']
              }
            }
          },
          required: ['strokes']
        },
        annotations: { readOnlyHint: false },
        execute: ({ strokes = [] } = {}) => {
          const live = liveMcpState.current;
          const engine = agentEngine.current;
          if (!engine?.canvas) return webMcpResult('The agent canvas is not ready yet.', { ok: false });
          let paintedStrokes = 0;
          let paintedPoints = 0;
          strokes.slice(0, 12).forEach((stroke) => {
            const points = normalizedAgentPoints(stroke?.points, engine.canvas);
            if (!points.length) return;
            engine.paint(points, {
              color: /^#[0-9a-f]{6}$/i.test(stroke.color || '') ? stroke.color : live.color,
              size: Math.max(1, Math.min(120, Number(stroke.size) || live.size)),
              brush: BOB_ROSS_BRUSHES.some((item) => item.id === stroke.brush) ? stroke.brush : live.brush,
              water: Math.max(0, Math.min(1, Number.isFinite(Number(stroke.water)) ? Number(stroke.water) : live.water)),
              load: Math.max(0, Math.min(1, Number.isFinite(Number(stroke.load)) ? Number(stroke.load) : live.load))
            });
            paintedStrokes += 1;
            paintedPoints += points.length;
          });
          return webMcpResult(`Painted ${paintedStrokes} watercolor stroke${paintedStrokes === 1 ? '' : 's'} on the agent canvas.`, { ok: paintedStrokes > 0, paintedStrokes, paintedPoints, canvas: engine.stats() });
        }
      },
      {
        name: 'manage_agent_canvas',
        description: 'Dry, undo, redo, or clear the agent’s own watercolor canvas. Clear removes the agent painting, so use it deliberately.',
        inputSchema: { type: 'object', properties: { action: { type: 'string', enum: ['dry', 'undo', 'redo', 'clear'] } }, required: ['action'] },
        annotations: { readOnlyHint: false },
        execute: ({ action }) => {
          const engine = agentEngine.current;
          if (!engine) return webMcpResult('The agent canvas is not ready yet.', { ok: false });
          if (action === 'dry') engine.dry();
          else if (action === 'undo') engine.undo();
          else if (action === 'redo') engine.redo();
          else if (action === 'clear') engine.clear();
          else return webMcpResult('Unknown canvas action.', { ok: false });
          return webMcpResult(`Agent canvas ${action} complete.`, { ok: true, action, canvas: engine.stats() });
        }
      }
    ];

    Promise.all(tools.map((tool) => modelContext.registerTool(tool, { signal: controller.signal })))
      .then(() => setWebMcpReady(true))
      .catch((error) => {
        // A browser may expose a partial origin-trial API or deny tools through
        // Permissions Policy. The painting studio remains fully usable either way.
        console.warn('WebMCP tools could not be registered:', error);
        setWebMcpReady(false);
      });
    return () => {
      controller.abort();
      setWebMcpReady(false);
    };
  }, []);

  const pickColor = (next, label) => {
    setColor(next);
    setMix((items) => [...items.slice(-2), next]);
    setMixQueue((items) => [items[1] || items[0] || next, next]);
    if (label) notify(`Loaded ${label}`);
  };

  const addCustomColor = (next) => {
    const normalized = String(next).toUpperCase();
    setCustomColors((items) => [normalized, ...items.filter((item) => item !== normalized)].slice(0, 6));
    pickColor(normalized, `custom pigment ${normalized}`);
  };

  const runHistoryAction = (action) => {
    const engine = active === 'agent' ? agentEngine.current : humanEngine.current;
    const changed = engine?.[action]?.();
    const label = active === 'agent' ? 'Agent easel' : 'Your easel';
    notify(changed ? `${label}: ${action === 'undo' ? 'last stroke lifted' : 'stroke restored'}.` : `${label}: nothing to ${action}.`);
  };

  const finishOnboarding = () => {
    try {
      window.localStorage.setItem('joy-of-painting-onboarding', 'complete');
    } catch {
      /* private browsing may block local storage */
    }
    setOnboardingOpen(false);
  };

  const mixColor = () => {
    if (mix.length < 2) {
      notify('Select at least 2 pigments on Bob’s palette to blend.');
      return;
    }
    const parts = mix.map((hex) => {
      const lin = hex2lin(hex);
      const dark = lin.map((c) => c * 0.12);
      const K = [0, 0, 0], S = [0, 0, 0];
      for (let ch = 0; ch < 3; ch++) {
        [K[ch], S[ch]] = deriveKS(lin[ch], dark[ch]);
      }
      return { pig: { K, S }, amt: 1.0 };
    });

    const blended = kmMixColor(parts, 0.93, 1.0);
    setColor(blended);
    notify(`Blended with Kubelka-Munk physics: ${blended}`);
  };

  const resetLayout = () => {
    setHumanWidth(420);
    setAgentWidth(420);
    setHumanVideoWidth(360);
    setBottomVideoHeight(175);
    setHumanCollapsed(false);
    setAgentCollapsed(false);
    setTopVideoCollapsed(false);
    setBottomVideoCollapsed(false);
    setResizableEnabled(true);
    notify('Studio layout reset to defaults.');
  };

  const exportPainting = () => {
    const link = document.createElement('a');
    link.download = `${episode.title.toLowerCase().replace(/\s+/g, '-')}-painting.png`;
    link.href = humanEngine.current?.export();
    link.click();
  };

  return (
    <main>
      <header className="topbar">
        <div className="brand">
          <span className="brand-minimal">Joy Of Painting.</span>
          <span className={`status webmcp-status ${webMcpReady ? 'ready' : ''}`} title={webMcpReady ? 'WebMCP tools are available to an in-browser agent.' : 'WebMCP is waiting for a compatible browser agent.'}>
            {webMcpReady ? 'AGENT TOOLS READY' : 'AGENT TOOLS STANDBY'}
          </span>
        </div>
        <div className="header-actions">
          <button
            className="episode-picker-btn"
            onClick={() => setSelectorOpen(true)}
            title="Browse all 403 episodes and paintings from dataset"
            aria-label="Open episode archive"
          >
            {episode.imgSrc && (
              <img
                src={episode.imgSrc}
                alt=""
                className="picker-thumb"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            )}
            <div className="picker-text">
              <span className="picker-season">S{episode.season} · E{episode.episode}</span>
              <span className="picker-title">{episode.title}</span>
            </div>
            <span className="picker-caret">▾</span>
          </button>

          {/* Bob Ross Radial Mixing Plate modal trigger */}
          <button
            className="palette-plate-toggle-btn"
            onClick={() => setPlateModalOpen(true)}
            title="Open Bob Ross's Clear Lucite Color Mixing Plate with Radial Shades"
          >
            🎨 Bob's Mixing Plate
          </button>
{/* Resizing Toggle */}
          <button
            className={`resizing-toggle-btn ${resizableEnabled ? 'active' : ''}`}
            onClick={() => {
              setResizableEnabled(!resizableEnabled);
              notify(resizableEnabled ? 'Resizing locked to prevent accidental dragging.' : 'Resizing unlocked.');
            }}
            title="Toggle panel and video resizing on or off"
          >
            {resizableEnabled ? '📐 Resizing: ON' : '🔒 Resizing: LOCKED'}
          </button>

          <button
            className="layout-reset-btn"
            onClick={resetLayout}
            title="Reset easel panels and videos to default layout"
          >
            ↺ Reset
          </button>

          <button
            className="studio-guide-btn"
            type="button"
            onClick={() => setOnboardingOpen(true)}
            data-tooltip="Replay the gentle studio introduction."
            aria-label="Open studio guide"
          >
            <img src="/bob-ross-guide.png" alt="" />
            Guide
          </button>

          <button className="finish" onClick={exportPainting}>Frame my painting</button>
        </div>
      </header>

      {/* Main Studio Area: Sidebar on left, then Human Easel, Center Spine (Videos & ALWAYS Captions), Agent Easel */}
      <section className={`studio-reference-layout ${!resizableEnabled ? 'resizing-locked' : ''}`}>
{/* Left Panel: Human Canvas */}
        {humanCollapsed ? (
          <div
            className="canvas-panel collapsed"
            onClick={() => setHumanCollapsed(false)}
            title="Click to expand Human Easel"
          >
            <button className="panel-expand-btn">▶</button>
            <span className="panel-collapsed-strip">YOU · HUMAN EASEL</span>
            <div style={{ height: '24px' }} />
          </div>
        ) : (
          <Resizable
            width={humanWidth}
            height={680}
            axis="x"
            resizeHandles={resizableEnabled ? ['e'] : []}
            minConstraints={[280, 400]}
            maxConstraints={[750, 950]}
            onResize={(e, { size }) => setHumanWidth(size.width)}
            handle={<EastHandle />}
          >
            <div className="resizable-panel-wrapper" style={{ width: humanWidth }}>
              <div className="canvas-panel human-panel">
                <div className="panel-tag-header">
                  <span className="panel-tag-title">YOU · JOY OF PAINTING</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span className="panel-tag-badge">HUMAN</span>
                    <button
                      type="button"
                      className="panel-action-btn"
                      onClick={() => setHumanCollapsed(true)}
                      title="Collapse human panel"
                    >
                      ◀ Collapse
                    </button>
                  </div>
                </div>
                <PaintCanvas
                  id="humanCanvas"
                  engineRef={humanEngine}
                  settings={settings}
                  label="your watercolor painting canvas"
                  onActivate={() => setActive('human')}
                />
              </div>
            </div>
          </Resizable>
        )}

        {/* Center Column: Top Video (Draggable & 16:9 Sizeable), ALWAYS-VISIBLE CAPTIONS, Bottom Video */}
        <div className="center-spine-column">
          {/* Top Video: DRAGGABLE & SIZEABLE TO ANY WIDTH (16:9 Aspect Ratio) */}
          <div className="center-video-container top-video-container">
            <Draggable
              nodeRef={humanVideoNodeRef}
              handle=".video-drag-header"
              cancel="button, .video-header-action, .video-min-btn, .video-drag-handle"
              onStart={() => setIsInteractingVideo(true)}
              onStop={() => setIsInteractingVideo(false)}
            >
              <div
                ref={humanVideoNodeRef}
                className={`human-draggable-player ${isInteractingVideo ? 'interacting' : ''}`}
                style={{ width: humanVideoWidth, zIndex: 100 }}
              >
                <div className="video-card-head video-drag-header" title="Drag by header to move video anywhere across the studio">
                  <div className="video-head-left">
                    <span className="drag-grip-icon">✥</span>
                    <span>YOUR LESSON · {humanVideoWidth}×{humanVideoHeight} (16:9)</span>
                  </div>
                  <div className="video-head-actions">
                    <button
                      type="button"
                      className="video-header-action"
                      onClick={() => {
                        const nextWidth = humanVideoWidth >= 640 ? 300 : humanVideoWidth >= 440 ? 640 : 440;
                        setHumanVideoWidth(nextWidth);
                      }}
                      title="Toggle size (S: 300px, M: 440px, L: 640px)"
                    >
                      {humanVideoWidth >= 640 ? '⤡ L' : humanVideoWidth >= 440 ? '⤡ M' : '⤡ S'}
                    </button>
                    <button
                      type="button"
                      className="video-min-btn video-header-action"
                      onClick={() => setTopVideoCollapsed(!topVideoCollapsed)}
                      title={topVideoCollapsed ? 'Expand video' : 'Minimize video'}
                    >
                      {topVideoCollapsed ? '▼' : '—'}
                    </button>
                  </div>
                </div>

                {!topVideoCollapsed && (
                  <Resizable
                    width={humanVideoWidth}
                    height={humanVideoHeight}
                    axis="both"
                    lockAspectRatio={true}
                    resizeHandles={resizableEnabled ? ['se', 's', 'e'] : []}
                    minConstraints={[220, 124]}
                    maxConstraints={[960, 540]}
                    onResizeStart={() => setIsInteractingVideo(true)}
                    onResizeStop={() => setIsInteractingVideo(false)}
                    onResize={(e, { size }) => {
                      const newWidth = Math.max(220, Math.min(window.innerWidth - 60, size.width));
                      setHumanVideoWidth(newWidth);
                    }}
                    handle={(h, ref) => {
                      if (h === 'se') return <CornerHandle ref={ref} />;
                      if (h === 's') return <BottomHandle ref={ref} />;
                      return <EastHandle ref={ref} />;
                    }}
                  >
                    <div className="video-content-box" style={{ width: humanVideoWidth, height: humanVideoHeight }}>
                      {isInteractingVideo && <div className="video-drag-overlay" />}
                      <YouTubeLesson
                        owner="you"
                        episode={episode}
                        ref={humanVideo}
                        onTime={setTime}
                        onState={setPlaying}
                        onVideoChange={selectEpisode}
                        onPrev={() => goToEpisode(-1)}
                        onNext={() => goToEpisode(1)}
                      />
                    </div>
                  </Resizable>
                )}
              </div>
            </Draggable>
          </div>

          {/* ALWAYS VISIBLE LIVE CAPTIONS */}
          <div className="always-visible-captions-box">
            <Transcript time={time} playing={playing} transcript={transcript} episode={episode} />
          </div>

          {/* Bottom Video: AI Video with Resize Handle at Top */}
          <div className="center-video-container bottom-video-container">
            <div className="center-video-card" style={{ width: 310, height: bottomVideoCollapsed ? 38 : bottomVideoHeight }}>
              <div className="video-card-head">
                <span>AGENT LESSON · S{episode.season} E{episode.episode}</span>
                <button
                  type="button"
                  className="video-min-btn"
                  onClick={() => setBottomVideoCollapsed(!bottomVideoCollapsed)}
                  title={bottomVideoCollapsed ? 'Expand video' : 'Minimize video'}
                >
                  {bottomVideoCollapsed ? '▲' : '—'}
                </button>
              </div>
              {!bottomVideoCollapsed && (
                <Resizable
                  width={310}
                  height={bottomVideoHeight}
                  axis="y"
                  resizeHandles={resizableEnabled ? ['n'] : []}
                  minConstraints={[240, 135]}
                  maxConstraints={[360, 310]}
                  onResize={(e, { size }) => setBottomVideoHeight(size.height)}
                  handle={<TopHandle />}
                >
                  <div style={{ width: 310, height: bottomVideoHeight - 28 }}>
                    <YouTubeLesson
                      owner="agent"
                      episode={episode}
                      ref={agentVideo}
                      onPrev={() => goToEpisode(-1)}
                      onNext={() => goToEpisode(1)}
                    />
                  </div>
                </Resizable>
              )}
            </div>
          </div>
        </div>

        {/* Right Panel: Agent Canvas */}
        {agentCollapsed ? (
          <div
            className="canvas-panel collapsed"
            onClick={() => setAgentCollapsed(false)}
            title="Click to expand Agent Easel"
          >
            <button className="panel-expand-btn">◀</button>
            <span className="panel-collapsed-strip">AGENT READY · EASEL</span>
            <div style={{ height: '24px' }} />
          </div>
        ) : (
          <Resizable
            width={agentWidth}
            height={680}
            axis="x"
            resizeHandles={resizableEnabled ? ['w'] : []}
            minConstraints={[280, 400]}
            maxConstraints={[750, 950]}
            onResize={(e, { size }) => setAgentWidth(size.width)}
            handle={<WestHandle />}
          >
            <div className="resizable-panel-wrapper" style={{ width: agentWidth }}>
              <div className="canvas-panel agent-panel">
                <div className="panel-tag-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <button
                      type="button"
                      className="panel-action-btn"
                      onClick={() => setAgentCollapsed(true)}
                      title="Collapse agent panel"
                    >
                      Collapse ▶
                    </button>
                    <span className="panel-tag-badge agent">AGENT READY</span>
                  </div>
                  <span className="panel-tag-title">THE AGENT · JOY OF PAINTING</span>
                </div>
                <PaintCanvas
                  id="agentCanvas"
                  engineRef={agentEngine}
                  settings={settings}
                  label="agent watercolor painting canvas"
                  onActivate={() => setActive('agent')}
                />
              </div>
            </div>
          </Resizable>
        )}
      </section>

      
      {/* Bottom Tool Bench */}
      <footer className="tool-bench" aria-label="Watercolor editor">
        <div className="bench-row bench-row-main">
          <section className="bench-group history-tools" aria-label="Canvas history">
            <div className="bench-group-title">
              <span>HISTORY</span>
              <small>{active === 'agent' ? 'Agent easel' : 'Your easel'}</small>
            </div>
            <div className="history">
              <button type="button" onClick={() => runHistoryAction('undo')} data-tooltip="Lift the most recent stroke from the active easel." aria-label="Undo last stroke">
                <b>↶</b><small>Undo</small>
              </button>
              <button type="button" onClick={() => runHistoryAction('redo')} data-tooltip="Restore the stroke you most recently undid." aria-label="Redo last stroke">
                <b>↷</b><small>Redo</small>
              </button>
            </div>
          </section>

          <section className="bench-group mode-tools" aria-label="Painting gesture">
            <span className="eyebrow">GESTURE</span>
            {[
              { id: 'brush', icon: '✦', label: 'brush', tip: 'Apply loaded pigment with the selected brush.' },
              { id: 'water', icon: '◌', label: 'water', tip: 'Add clean water to soften edges and create blooms.' },
              { id: 'lift', icon: '○', label: 'lift', tip: 'Use a thirsty brush to lift wet pigment from the paper.' }
            ].map((item) => (
              <button key={item.id} className={mode === item.id ? 'active' : ''} onClick={() => setMode(item.id)} data-tooltip={item.tip} aria-label={`${item.label} mode`}>
                <b>{item.icon}</b>
                <small>{item.label}</small>
              </button>
            ))}
          </section>

          <section className="bench-group brushes" aria-label="Bob Ross brushes">
            <span className="eyebrow">BRUSH</span>
            <div className="bob-brush-list">
              {BOB_ROSS_BRUSHES.map((b) => (
                <button
                  key={b.id}
                  className={`bob-brush-btn ${brush === b.id ? 'active' : ''}`}
                  onClick={() => {
                    setBrush(b.id);
                    notify(`Selected ${b.title}`);
                  }}
                  data-tooltip={b.title}
                  aria-label={b.title}
                >
                  <span className="bob-brush-icon">{b.icon}</span>
                  <span className="bob-brush-label">{b.name}</span>
                </button>
              ))}
            </div>
          </section>

          <section className="bench-group sliders" aria-label="Paint dynamics">
            <label data-tooltip="Controls the footprint of each brush mark.">
              <span className="eyebrow">SIZE <small>{size}px</small></span>
              <input type="range" min="2" max="48" value={size} onChange={(e) => setSize(Number(e.target.value))} aria-label="Brush size" />
            </label>
            <label data-tooltip="More water increases flow, blooms, and softer edges.">
              <span className="eyebrow">WATER <small>{Math.round(water * 100)}%</small></span>
              <input type="range" min="0" max="1" step="0.01" value={water} onChange={(e) => setWater(Number(e.target.value))} aria-label="Water amount" />
            </label>
            <label data-tooltip="More pigment makes denser, darker watercolor marks.">
              <span className="eyebrow">PIGMENT <small>{Math.round(load * 100)}%</small></span>
              <input type="range" min="0.1" max="1" step="0.01" value={load} onChange={(e) => setLoad(Number(e.target.value))} aria-label="Pigment load" />
            </label>
          </section>

          <section className="bench-group palette-wrap" aria-label="Pigment palette">
            <div className="palette-label">
              <span className="eyebrow">BOB'S PALETTE · S{episode?.season || 1} E{episode?.episode || 1}</span>
              <em>{currentEpisodePigments.find((p) => p[1].toLowerCase() === color.toLowerCase())?.[0] || color}</em>
            </div>
            <div className="palette">
              {currentEpisodePigments.map(([name, val]) => (
                <button
                  key={name}
                  className={`color ${color.toLowerCase() === val.toLowerCase() ? 'active' : ''}`}
                  onClick={() => pickColor(val, name)}
                  style={{ '--color': val }}
                  aria-label={name}
                  data-tooltip={`${name} · ${val}`}
                />
              ))}
              {customColors.map((val) => (
                <button
                  key={val}
                  className={`color custom-swatch ${color.toLowerCase() === val.toLowerCase() ? 'active' : ''}`}
                  onClick={() => pickColor(val, `custom pigment ${val}`)}
                  style={{ '--color': val }}
                  aria-label={`Custom pigment ${val}`}
                  data-tooltip={`Custom pigment · ${val}`}
                />
              ))}
              <label className="custom-color-picker" data-tooltip="Choose any color and add it to your pigment row.">
                <input type="color" value={color} onChange={(event) => addCustomColor(event.target.value)} aria-label="Add a custom pigment color" />
                <span className="custom-color-preview" style={{ background: color }} />
                <b>+ Custom</b>
              </label>
            </div>
          </section>

          <section className="bench-group finish-tools" aria-label="Paper and finishing tools">
            <div className="paper-tools">
              <span className="eyebrow">PAPER</span>
              {[
                ['hot', 'Smooth hot-pressed paper keeps marks crisp and controlled.'],
                ['cold', 'Cold-pressed paper balances soft flow with visible grain.'],
                ['rough', 'Rough paper gives pigment deep texture and granulation.']
              ].map(([name, tip]) => (
                <button key={name} className={paper === name ? 'active' : ''} onClick={() => setPaper(name)} data-tooltip={tip}>{name}</button>
              ))}
            </div>
            <button className="water-cup" onClick={() => { setMode('water'); notify('Beat the devil out of it!'); }} data-tooltip="Rinse the brush and switch to clean-water painting." aria-label="Rinse brush">
              <span>◌</span><small>RINSE</small>
            </button>
            <button
              className="action-btn"
              onClick={() => {
                (active === 'agent' ? agentEngine.current : humanEngine.current)?.dry();
                notify('Baked glaze into the active paper ground.');
              }}
              data-tooltip="Dry the active easel so the next wash becomes a separate glaze."
            >
              Bake
            </button>
            <button
              className="action-btn"
              onClick={() => {
                (active === 'agent' ? agentEngine.current : humanEngine.current)?.clear();
                notify('Fresh canvas prepared on the active easel.');
              }}
              data-tooltip="Clear the active easel and prepare fresh paper."
            >
              Fresh
            </button>
          </section>
        </div>

        <div className="bench-row bench-row-mixing">
          <div className="km-mixing-station">
            <div className="km-station-head">
              <span className="eyebrow">WET MIXING WELL</span>
              <button className="mix-help-btn" onClick={() => setMixModalOpen(true)} data-tooltip="See why physical pigment mixing differs from RGB light." aria-label="Color mixing tutorial">? Science</button>
            </div>
            <div className="km-station-body">
              <div className="km-slot" data-tooltip={`First pigment: ${mixData.name1}`}>
                <span className="km-slot-swatch" style={{ background: mixData.p1 }} />
                <span className="km-slot-label">{mixData.name1}</span>
              </div>
              <span className="km-plus">+</span>
              <div className="km-slot" data-tooltip={`Second pigment: ${mixData.name2}`}>
                <span className="km-slot-swatch" style={{ background: mixData.p2 }} />
                <span className="km-slot-label">{mixData.name2}</span>
              </div>
              <span className="km-arrow">→</span>
              <div className="km-result-slot" data-tooltip={`Physical subtractive blend: ${mixData.km}`}>
                <span className="km-result-swatch" style={{ background: mixData.km }} />
                <div className="km-result-meta"><span className="km-badge">K-M Physical</span><span className="km-hex">{mixData.km}</span></div>
              </div>
              <div className="km-compare-slot" data-tooltip={`Screen RGB average for comparison: ${mixData.rgb}`}>
                <span className="km-compare-swatch" style={{ background: mixData.rgb }} />
                <div className="km-result-meta"><span className="km-badge-rgb">RGB Avg</span><span className="km-hex">{mixData.rgb}</span></div>
              </div>
              <button
                className="km-mix-btn"
                onClick={() => {
                  pickColor(mixData.km, `${mixData.name1} + ${mixData.name2}`);
                }}
                data-tooltip="Load this physically modeled mixture onto your brush."
              >
                <span>🗡️ Load blend</span>
              </button>
            </div>
          </div>
          <p className="bench-whisper">Let the water do some of the painting.</p>
        </div>
      </footer>

      {toast && <div className="toast show" role="status">{toast}</div>}

      <EpisodeModal
        isOpen={selectorOpen}
        onClose={() => setSelectorOpen(false)}
        currentEpisode={episode}
        onSelectEpisode={selectEpisode}
      />

      <BobRossPalettePlateModal
        isOpen={plateModalOpen}
        onClose={() => setPlateModalOpen(false)}
        pigments={currentEpisodePigments}
        activeColor={color}
        onPickColor={pickColor}
        onMixWithKnife={mixColor}
        mixList={mix}
      />

      <ColorMixingGuideModal
        isOpen={mixModalOpen}
        onClose={() => setMixModalOpen(false)}
      />

      <Onboarding open={onboardingOpen} onFinish={finishOnboarding} />
    </main>
  );
}
