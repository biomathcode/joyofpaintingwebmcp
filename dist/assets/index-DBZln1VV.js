var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function ee(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function te(e,t){return ee(e.type,t,e.props)}function E(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ne(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var re=/\/+/g;function ie(e,t){return typeof e==`object`&&e&&e.key!=null?ne(``+e.key):t.toString(36)}function ae(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function D(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,D(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ie(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(re,`$&/`)+`/`),D(o,r,i,``,function(e){return e})):o!=null&&(E(o)&&(o=te(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(re,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ie(a,u),c+=D(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ie(a,u++),c+=D(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return D(ae(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function oe(e,t,n){if(e==null)return e;var r=[],i=0;return D(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function se(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var O=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},k={map:oe,forEach:function(e,t,n){oe(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oe(e,function(){t++}),t},toArray:function(e){return oe(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=k,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ee(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ee(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=E,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:se}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,O)}catch(e){O(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,E());else{var t=n(l);t!==null&&ie(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function ee(){return g?!0:!(e.unstable_now()-T<w)}function te(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ee());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ie(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?E():S=!1}}}var E;if(typeof y==`function`)E=function(){y(te)};else if(typeof MessageChannel<`u`){var ne=new MessageChannel,re=ne.port2;ne.port1.onmessage=te,E=function(){re.postMessage(null)}}else E=function(){_(te,0)};function ie(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ie(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,E()))),r},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),ee=Symbol.for(`react.suspense_list`),te=Symbol.for(`react.memo`),E=Symbol.for(`react.lazy`),ne=Symbol.for(`react.activity`),re=Symbol.for(`react.memo_cache_sentinel`),ie=Symbol.iterator;function ae(e){return typeof e!=`object`||!e?null:(e=ie&&e[ie]||e[`@@iterator`],typeof e==`function`?e:null)}var D=Symbol.for(`react.client.reference`);function oe(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===D?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case ee:return`SuspenseList`;case ne:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case te:return t=e.displayName||null,t===null?oe(e.type)||`Memo`:t;case E:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}var se=Array.isArray,O=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A={pending:!1,data:null,method:null,action:null},ce=[],le=-1;function j(e){return{current:e}}function M(e){0>le||(e.current=ce[le],ce[le]=null,le--)}function N(e,t){le++,ce[le]=e.current,e.current=t}var ue=j(null),de=j(null),P=j(null),fe=j(null);function pe(e,t){switch(N(P,t),N(de,e),N(ue,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}M(ue),N(ue,e)}function me(){M(ue),M(de),M(P)}function he(e){e.memoizedState!==null&&N(fe,e);var t=ue.current,n=Hd(t,e.type);t!==n&&(N(de,e),N(ue,n))}function ge(e){de.current===e&&(M(ue),M(de)),fe.current===e&&(M(fe),Qf._currentValue=A)}var _e,ve;function F(e){if(_e===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);_e=t&&t[1]||``,ve=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+_e+e+ve}var ye=!1;function be(e,t){if(!e||ye)return``;ye=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{ye=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?F(n):``}function xe(e,t){switch(e.tag){case 26:case 27:case 5:return F(e.type);case 16:return F(`Lazy`);case 13:return e.child!==t&&t!==null?F(`Suspense Fallback`):F(`Suspense`);case 19:return F(`SuspenseList`);case 0:case 15:return be(e.type,!1);case 11:return be(e.type.render,!1);case 1:return be(e.type,!0);case 31:return F(`Activity`);default:return``}}function Se(e){try{var t=``,n=null;do t+=xe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ce=Object.prototype.hasOwnProperty,I=t.unstable_scheduleCallback,we=t.unstable_cancelCallback,L=t.unstable_shouldYield,Te=t.unstable_requestPaint,R=t.unstable_now,z=t.unstable_getCurrentPriorityLevel,Ee=t.unstable_ImmediatePriority,De=t.unstable_UserBlockingPriority,Oe=t.unstable_NormalPriority,ke=t.unstable_LowPriority,Ae=t.unstable_IdlePriority,je=t.log,Me=t.unstable_setDisableYieldValue,Ne=null,Pe=null;function Fe(e){if(typeof je==`function`&&Me(e),Pe&&typeof Pe.setStrictMode==`function`)try{Pe.setStrictMode(Ne,e)}catch{}}var Ie=Math.clz32?Math.clz32:ze,Le=Math.log,Re=Math.LN2;function ze(e){return e>>>=0,e===0?32:31-(Le(e)/Re|0)|0}var Be=256,Ve=262144,He=4194304;function Ue(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function We(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ue(n))):i=Ue(o):i=Ue(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ue(n))):i=Ue(o)):i=Ue(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Ge(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function B(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ke(){var e=He;return He<<=1,!(He&62914560)&&(He=4194304),e}function qe(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Je(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ye(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ie(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&Xe(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function Xe(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ie(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function Ze(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ie(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function Qe(e,t){var n=t&-t;return n=n&42?1:$e(n),(n&(e.suspendedLanes|t))===0?n:0}function $e(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function et(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function tt(){var e=k.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function nt(e,t){var n=k.p;try{return k.p=e,t()}finally{k.p=n}}var rt=Math.random().toString(36).slice(2),it=`__reactFiber$`+rt,at=`__reactProps$`+rt,ot=`__reactContainer$`+rt,st=`__reactEvents$`+rt,ct=`__reactListeners$`+rt,lt=`__reactHandles$`+rt,ut=`__reactResources$`+rt,dt=`__reactMarker$`+rt;function ft(e){delete e[it],delete e[at],delete e[st],delete e[ct],delete e[lt]}function pt(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ot]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[it])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function mt(e){if(e=e[it]||e[ot]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ht(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function gt(e){var t=e[ut];return t||=e[ut]={hoistableStyles:new Map,hoistableScripts:new Map},t}function _t(e){e[dt]=!0}var vt=new Set,yt={};function bt(e,t){xt(e,t),xt(e+`Capture`,t)}function xt(e,t){for(yt[e]=t,e=0;e<t.length;e++)vt.add(t[e])}var St=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ct={},wt={};function Tt(e){return Ce.call(wt,e)?!0:Ce.call(Ct,e)?!1:St.test(e)?wt[e]=!0:(Ct[e]=!0,!1)}function Et(e,t,n){if(Tt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function Dt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Ot(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function kt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function At(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function jt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mt(e){if(!e._valueTracker){var t=At(e)?`checked`:`value`;e._valueTracker=jt(e,t,``+e[t])}}function Nt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=At(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Pt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Ft=/[\n"\\]/g;function It(e){return e.replace(Ft,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Lt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+kt(t)):e.value!==``+kt(t)&&(e.value=``+kt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):zt(e,o,kt(n)):zt(e,o,kt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+kt(s):e.removeAttribute(`name`)}function Rt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Mt(e);return}n=n==null?``:``+kt(n),t=t==null?n:``+kt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Mt(e)}function zt(e,t,n){t===`number`&&Pt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Bt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+kt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Vt(e,t,n){if(t!=null&&(t=``+kt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+kt(n)}function Ht(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(se(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=kt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Mt(e)}function Ut(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Wt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Gt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Wt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Kt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Gt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Gt(e,o,t[o])}function qt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Jt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Yt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xt(e){return Yt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function Zt(){}var Qt=null;function $t(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var en=null,tn=null;function nn(e){var t=mt(e);if(t&&(e=t.stateNode)){var n=e[at]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Lt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+It(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[at]||null;if(!a)throw Error(i(90));Lt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Nt(r)}break a;case`textarea`:Vt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Bt(e,!!n.multiple,t,!1)}}}var rn=!1;function an(e,t,n){if(rn)return e(t,n);rn=!0;try{return e(t)}finally{if(rn=!1,(en!==null||tn!==null)&&(bu(),en&&(t=en,e=tn,tn=en=null,nn(t),e)))for(t=0;t<e.length;t++)nn(e[t])}}function on(e,t){var n=e.stateNode;if(n===null)return null;var r=n[at]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var sn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),cn=!1;if(sn)try{var ln={};Object.defineProperty(ln,"passive",{get:function(){cn=!0}}),window.addEventListener(`test`,ln,ln),window.removeEventListener(`test`,ln,ln)}catch{cn=!1}var un=null,dn=null,fn=null;function pn(){if(fn)return fn;var e,t=dn,n=t.length,r,i=`value`in un?un.value:un.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return fn=i.slice(e,1<r?1-r:void 0)}function mn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hn(){return!0}function gn(){return!1}function _n(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?hn:gn,this.isPropagationStopped=gn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=hn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=hn)},persist:function(){},isPersistent:hn}),t}var vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yn=_n(vn),bn=h({},vn,{view:0,detail:0}),xn=_n(bn),Sn,Cn,wn,Tn=h({},bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:In,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==wn&&(wn&&e.type===`mousemove`?(Sn=e.screenX-wn.screenX,Cn=e.screenY-wn.screenY):Cn=Sn=0,wn=e),Sn)},movementY:function(e){return`movementY`in e?e.movementY:Cn}}),En=_n(Tn),Dn=_n(h({},Tn,{dataTransfer:0})),On=_n(h({},bn,{relatedTarget:0})),kn=_n(h({},vn,{animationName:0,elapsedTime:0,pseudoElement:0})),An=_n(h({},vn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),jn=_n(h({},vn,{data:0})),Mn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Nn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Pn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Fn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Pn[e])?!!t[e]:!1}function In(){return Fn}var Ln=_n(h({},bn,{key:function(e){if(e.key){var t=Mn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=mn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Nn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:In,charCode:function(e){return e.type===`keypress`?mn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?mn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Rn=_n(h({},Tn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),zn=_n(h({},bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:In})),Bn=_n(h({},vn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Vn=_n(h({},Tn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Hn=_n(h({},vn,{newState:0,oldState:0})),Un=[9,13,27,32],Wn=sn&&`CompositionEvent`in window,Gn=null;sn&&`documentMode`in document&&(Gn=document.documentMode);var Kn=sn&&`TextEvent`in window&&!Gn,qn=sn&&(!Wn||Gn&&8<Gn&&11>=Gn),Jn=` `,Yn=!1;function Xn(e,t){switch(e){case`keyup`:return Un.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Zn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Qn=!1;function $n(e,t){switch(e){case`compositionend`:return Zn(t);case`keypress`:return t.which===32?(Yn=!0,Jn):null;case`textInput`:return e=t.data,e===Jn&&Yn?null:e;default:return null}}function er(e,t){if(Qn)return e===`compositionend`||!Wn&&Xn(e,t)?(e=pn(),fn=dn=un=null,Qn=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return qn&&t.locale!==`ko`?null:t.data;default:return null}}var tr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!tr[e.type]:t===`textarea`}function rr(e,t,n,r){en?tn?tn.push(r):tn=[r]:en=r,t=Ed(t,`onChange`),0<t.length&&(n=new yn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var ir=null,ar=null;function or(e){yd(e,0)}function sr(e){if(Nt(ht(e)))return e}function cr(e,t){if(e===`change`)return t}var lr=!1;if(sn){var ur;if(sn){var dr=`oninput`in document;if(!dr){var fr=document.createElement(`div`);fr.setAttribute(`oninput`,`return;`),dr=typeof fr.oninput==`function`}ur=dr}else ur=!1;lr=ur&&(!document.documentMode||9<document.documentMode)}function pr(){ir&&(ir.detachEvent(`onpropertychange`,mr),ar=ir=null)}function mr(e){if(e.propertyName===`value`&&sr(ar)){var t=[];rr(t,ar,e,$t(e)),an(or,t)}}function hr(e,t,n){e===`focusin`?(pr(),ir=t,ar=n,ir.attachEvent(`onpropertychange`,mr)):e===`focusout`&&pr()}function gr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return sr(ar)}function _r(e,t){if(e===`click`)return sr(t)}function vr(e,t){if(e===`input`||e===`change`)return sr(t)}function yr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var br=typeof Object.is==`function`?Object.is:yr;function xr(e,t){if(br(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ce.call(t,i)||!br(e[i],t[i]))return!1}return!0}function Sr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cr(e,t){var n=Sr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Sr(n)}}function wr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Pt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Pt(e.document)}return t}function Er(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Dr=sn&&`documentMode`in document&&11>=document.documentMode,Or=null,kr=null,Ar=null,jr=!1;function Mr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jr||Or==null||Or!==Pt(r)||(r=Or,`selectionStart`in r&&Er(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ar&&xr(Ar,r)||(Ar=r,r=Ed(kr,`onSelect`),0<r.length&&(t=new yn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Or)))}function Nr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Pr={animationend:Nr(`Animation`,`AnimationEnd`),animationiteration:Nr(`Animation`,`AnimationIteration`),animationstart:Nr(`Animation`,`AnimationStart`),transitionrun:Nr(`Transition`,`TransitionRun`),transitionstart:Nr(`Transition`,`TransitionStart`),transitioncancel:Nr(`Transition`,`TransitionCancel`),transitionend:Nr(`Transition`,`TransitionEnd`)},Fr={},Ir={};sn&&(Ir=document.createElement(`div`).style,`AnimationEvent`in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),`TransitionEvent`in window||delete Pr.transitionend.transition);function Lr(e){if(Fr[e])return Fr[e];if(!Pr[e])return e;var t=Pr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ir)return Fr[e]=t[n];return e}var Rr=Lr(`animationend`),zr=Lr(`animationiteration`),Br=Lr(`animationstart`),Vr=Lr(`transitionrun`),Hr=Lr(`transitionstart`),Ur=Lr(`transitioncancel`),Wr=Lr(`transitionend`),Gr=new Map,Kr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Kr.push(`scrollEnd`);function qr(e,t){Gr.set(e,t),bt(t,[e])}var Jr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Yr=[],Xr=0,Zr=0;function Qr(){for(var e=Xr,t=Zr=Xr=0;t<e;){var n=Yr[t];Yr[t++]=null;var r=Yr[t];Yr[t++]=null;var i=Yr[t];Yr[t++]=null;var a=Yr[t];if(Yr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ni(n,i,a)}}function $r(e,t,n,r){Yr[Xr++]=e,Yr[Xr++]=t,Yr[Xr++]=n,Yr[Xr++]=r,Zr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ei(e,t,n,r){return $r(e,t,n,r),ri(e)}function ti(e,t){return $r(e,null,null,t),ri(e)}function ni(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ie(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ri(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ii={};function ai(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(e,t,n,r){return new ai(e,t,n,r)}function si(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ci(e,t){var n=e.alternate;return n===null?(n=oi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function li(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ui(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)si(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,ue.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ne:return e=oi(31,n,t,a),e.elementType=ne,e.lanes=o,e;case y:return di(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=oi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=oi(13,n,t,a),e.elementType=T,e.lanes=o,e;case ee:return e=oi(19,n,t,a),e.elementType=ee,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case te:s=14;break a;case E:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=oi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function di(e,t,n,r){return e=oi(7,e,r,t),e.lanes=n,e}function fi(e,t,n){return e=oi(6,e,null,t),e.lanes=n,e}function pi(e){var t=oi(18,null,null,0);return t.stateNode=e,t}function mi(e,t,n){return t=oi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var hi=new WeakMap;function gi(e,t){if(typeof e==`object`&&e){var n=hi.get(e);return n===void 0?(t={value:e,source:t,stack:Se(t)},hi.set(e,t),t):n}return{value:e,source:t,stack:Se(t)}}var _i=[],vi=0,yi=null,bi=0,xi=[],Si=0,Ci=null,wi=1,Ti=``;function Ei(e,t){_i[vi++]=bi,_i[vi++]=yi,yi=e,bi=t}function Di(e,t,n){xi[Si++]=wi,xi[Si++]=Ti,xi[Si++]=Ci,Ci=e;var r=wi;e=Ti;var i=32-Ie(r)-1;r&=~(1<<i),n+=1;var a=32-Ie(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,wi=1<<32-Ie(t)+i|n<<i|r,Ti=a+e}else wi=1<<a|n<<i|r,Ti=e}function Oi(e){e.return!==null&&(Ei(e,1),Di(e,1,0))}function ki(e){for(;e===yi;)yi=_i[--vi],_i[vi]=null,bi=_i[--vi],_i[vi]=null;for(;e===Ci;)Ci=xi[--Si],xi[Si]=null,Ti=xi[--Si],xi[Si]=null,wi=xi[--Si],xi[Si]=null}function Ai(e,t){xi[Si++]=wi,xi[Si++]=Ti,xi[Si++]=Ci,wi=t.id,Ti=t.overflow,Ci=e}var ji=null,V=null,H=!1,Mi=null,Ni=!1,Pi=Error(i(519));function Fi(e){throw Vi(gi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Pi}function Ii(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[it]=e,t[at]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Rt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Ht(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=Zt),t=!0):t=!1,t||Fi(e,!0)}function Li(e){for(ji=e.return;ji;)switch(ji.tag){case 5:case 31:case 13:Ni=!1;return;case 27:case 3:Ni=!0;return;default:ji=ji.return}}function Ri(e){if(e!==ji)return!1;if(!H)return Li(e),H=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&V&&Fi(e),Li(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));V=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));V=uf(e)}else t===27?(t=V,Zd(e.type)?(e=lf,lf=null,V=e):V=t):V=ji?cf(e.stateNode.nextSibling):null;return!0}function zi(){V=ji=null,H=!1}function Bi(){var e=Mi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Mi=null),e}function Vi(e){Mi===null?Mi=[e]:Mi.push(e)}var Hi=j(null),Ui=null,Wi=null;function Gi(e,t,n){N(Hi,t._currentValue),t._currentValue=n}function Ki(e){e._currentValue=Hi.current,M(Hi)}function qi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Ji(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),qi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),qi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Yi(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;br(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===fe.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Ji(t,e,n,r),t.flags|=262144}function Xi(e){for(e=e.firstContext;e!==null;){if(!br(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Zi(e){Ui=e,Wi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Qi(e){return ea(Ui,e)}function $i(e,t){return Ui===null&&Zi(e),ea(e,t)}function ea(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Wi===null){if(e===null)throw Error(i(308));Wi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Wi=Wi.next=t;return n}var ta=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},na=t.unstable_scheduleCallback,ra=t.unstable_NormalPriority,ia={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function aa(){return{controller:new ta,data:new Map,refCount:0}}function oa(e){e.refCount--,e.refCount===0&&na(ra,function(){e.controller.abort()})}var sa=null,ca=0,la=0,ua=null;function da(e,t){if(sa===null){var n=sa=[];ca=0,la=dd(),ua={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ca++,t.then(fa,fa),t}function fa(){if(--ca===0&&sa!==null){ua!==null&&(ua.status=`fulfilled`);var e=sa;sa=null,la=0,ua=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function pa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ma=O.S;O.S=function(e,t){eu=R(),typeof t==`object`&&t&&typeof t.then==`function`&&da(e,t),ma!==null&&ma(e,t)};var ha=j(null);function ga(){var e=ha.current;return e===null?q.pooledCache:e}function _a(e,t){t===null?N(ha,ha.current):N(ha,t.pool)}function va(){var e=ga();return e===null?null:{parent:ia._currentValue,pool:e}}var ya=Error(i(460)),ba=Error(i(474)),xa=Error(i(542)),Sa={then:function(){}};function Ca(e){return e=e.status,e===`fulfilled`||e===`rejected`}function wa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Zt,Zt),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Oa(e),e;default:if(typeof t.status==`string`)t.then(Zt,Zt);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Oa(e),e}throw Ea=t,ya}}function Ta(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ea=e,ya):e}}var Ea=null;function Da(){if(Ea===null)throw Error(i(459));var e=Ea;return Ea=null,e}function Oa(e){if(e===ya||e===xa)throw Error(i(483))}var ka=null,Aa=0;function ja(e){var t=Aa;return Aa+=1,ka===null&&(ka=[]),wa(ka,e,t)}function Ma(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Na(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Pa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=ci(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=fi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===E&&Ta(i)===t.type)?(t=a(t,n.props),Ma(t,n),t.return=e,t):(t=ui(n.type,n.key,n.props,null,e.mode,r),Ma(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=mi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=di(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=fi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=ui(t.type,t.key,t.props,null,e.mode,n),Ma(n,t),n.return=e,n;case v:return t=mi(t,e.mode,n),t.return=e,t;case E:return t=Ta(t),f(e,t,n)}if(se(t)||ae(t))return t=di(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,ja(t),n);if(t.$$typeof===C)return f(e,$i(e,t),n);Na(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case E:return n=Ta(n),p(e,t,n,r)}if(se(n)||ae(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,ja(n),r);if(n.$$typeof===C)return p(e,t,$i(e,n),r);Na(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case E:return r=Ta(r),m(e,t,n,r,i)}if(se(r)||ae(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,ja(r),i);if(r.$$typeof===C)return m(e,t,n,$i(t,r),i);Na(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),H&&Ei(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return H&&Ei(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),H&&Ei(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),H&&Ei(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return H&&Ei(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),H&&Ei(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===E&&Ta(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ma(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=di(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=ui(o.type,o.key,o.props,null,e.mode,c),Ma(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=mi(o,e.mode,c),c.return=e,e=c}return s(e);case E:return o=Ta(o),b(e,r,o,c)}if(se(o))return h(e,r,o,c);if(ae(o)){if(l=ae(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,ja(o),c);if(o.$$typeof===C)return b(e,r,$i(e,o),c);Na(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=fi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Aa=0;var i=b(e,t,n,r);return ka=null,i}catch(t){if(t===ya||t===xa)throw t;var a=oi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Fa=Pa(!0),Ia=Pa(!1),La=!1;function Ra(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function za(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Va(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ri(e),ni(e,null,n),t}return $r(e,r,t,n),ri(e)}function Ha(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ze(e,n)}}function Ua(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Wa=!1;function Ga(){if(Wa){var e=ua;if(e!==null)throw e}}function Ka(e,t,n,r){Wa=!1;var i=e.updateQueue;La=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===la&&(Wa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:La=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function qa(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Ja(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)qa(n[e],t)}var Ya=j(null),Xa=j(0);function Za(e,t){e=Ul,N(Xa,e),N(Ya,t),Ul=e|t.baseLanes}function Qa(){N(Xa,Ul),N(Ya,Ya.current)}function $a(){Ul=Xa.current,M(Ya),M(Xa)}var eo=j(null),to=null;function no(e){var t=e.alternate;N(so,so.current&1),N(eo,e),to===null&&(t===null||Ya.current!==null||t.memoizedState!==null)&&(to=e)}function ro(e){N(so,so.current),N(eo,e),to===null&&(to=e)}function io(e){e.tag===22?(N(so,so.current),N(eo,e),to===null&&(to=e)):ao(e)}function ao(){N(so,so.current),N(eo,eo.current)}function oo(e){M(eo),to===e&&(to=null),M(so)}var so=j(0);function co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var lo=0,U=null,W=null,uo=null,fo=!1,po=!1,mo=!1,ho=0,go=0,_o=null,vo=0;function yo(){throw Error(i(321))}function bo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!br(e[n],t[n]))return!1;return!0}function xo(e,t,n,r,i,a){return lo=a,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?Rs:zs,mo=!1,a=n(r,i),mo=!1,po&&(a=Co(t,n,r,i)),So(e),a}function So(e){O.H=Ls;var t=W!==null&&W.next!==null;if(lo=0,uo=W=U=null,fo=!1,go=0,_o=null,t)throw Error(i(300));e===null||nc||(e=e.dependencies,e!==null&&Xi(e)&&(nc=!0))}function Co(e,t,n,r){U=e;var a=0;do{if(po&&(_o=null),go=0,po=!1,25<=a)throw Error(i(301));if(a+=1,uo=W=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}O.H=Bs,o=t(n,r)}while(po);return o}function wo(){var e=O.H,t=e.useState()[0];return t=typeof t.then==`function`?jo(t):t,e=e.useState()[0],(W===null?null:W.memoizedState)!==e&&(U.flags|=1024),t}function To(){var e=ho!==0;return ho=0,e}function Eo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Do(e){if(fo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}fo=!1}lo=0,uo=W=U=null,po=!1,go=ho=0,_o=null}function Oo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return uo===null?U.memoizedState=uo=e:uo=uo.next=e,uo}function ko(){if(W===null){var e=U.alternate;e=e===null?null:e.memoizedState}else e=W.next;var t=uo===null?U.memoizedState:uo.next;if(t!==null)uo=t,W=e;else{if(e===null)throw U.alternate===null?Error(i(467)):Error(i(310));W=e,e={memoizedState:W.memoizedState,baseState:W.baseState,baseQueue:W.baseQueue,queue:W.queue,next:null},uo===null?U.memoizedState=uo=e:uo=uo.next=e}return uo}function Ao(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jo(e){var t=go;return go+=1,_o===null&&(_o=[]),e=wa(_o,e,t),t=U,(uo===null?t.memoizedState:uo.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?Rs:zs),e}function Mo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return jo(e);if(e.$$typeof===C)return Qi(e)}throw Error(i(438,String(e)))}function No(e){var t=null,n=U.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=U.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Ao(),U.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=re;return t.index++,n}function Po(e,t){return typeof t==`function`?t(e):t}function Fo(e){return Io(ko(),W,e)}function Io(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(lo&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===la&&(d=!0);else if((lo&p)===p){u=u.next,p===la&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,U.lanes|=p,Gl|=p;f=u.action,mo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,U.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!br(o,e.memoizedState)&&(nc=!0,d&&(n=ua,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Lo(e){var t=ko(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);br(o,t.memoizedState)||(nc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ro(e,t,n){var r=U,a=ko(),o=H;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!br((W||a).memoizedState,n);if(s&&(a.memoizedState=n,nc=!0),a=a.queue,ls(Vo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||uo!==null&&uo.memoizedState.tag&1){if(r.flags|=2048,is(9,{destroy:void 0},Bo.bind(null,r,a,n,t),null),q===null)throw Error(i(349));o||lo&127||zo(r,t,n)}return n}function zo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=U.updateQueue,t===null?(t=Ao(),U.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bo(e,t,n,r){t.value=n,t.getSnapshot=r,Ho(t)&&Uo(e)}function Vo(e,t,n){return n(function(){Ho(t)&&Uo(e)})}function Ho(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!br(e,n)}catch{return!0}}function Uo(e){var t=ti(e,2);t!==null&&hu(t,e,2)}function Wo(e){var t=Oo();if(typeof e==`function`){var n=e;if(e=n(),mo){Fe(!0);try{n()}finally{Fe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:e},t}function Go(e,t,n,r){return e.baseState=n,Io(e,W,typeof r==`function`?r:Po)}function Ko(e,t,n,r,a){if(Ps(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};O.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,qo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function qo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=O.T,o={};O.T=o;try{var s=n(i,r),c=O.S;c!==null&&c(o,s),Jo(e,t,s)}catch(n){Xo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),O.T=a}}else try{a=n(i,r),Jo(e,t,a)}catch(n){Xo(e,t,n)}}function Jo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Yo(e,t,n)},function(n){return Xo(e,t,n)}):Yo(e,t,n)}function Yo(e,t,n){t.status=`fulfilled`,t.value=n,Zo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,qo(e,n)))}function Xo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Zo(t),t=t.next;while(t!==r)}e.action=null}function Zo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Qo(e,t){return t}function $o(e,t){if(H){var n=q.formState;if(n!==null){a:{var r=U;if(H){if(V){b:{for(var i=V,a=Ni;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){V=cf(i.nextSibling),r=i.data===`F!`;break a}}Fi(r)}r=!1}r&&(t=n[0])}}return n=Oo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:t},n.queue=r,n=js.bind(null,U,r),r.dispatch=n,r=Wo(!1),a=Ns.bind(null,U,!1,r.queue),r=Oo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Ko.bind(null,U,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function es(e){return ts(ko(),W,e)}function ts(e,t,n){if(t=Io(e,t,Qo)[0],e=Fo(Po)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=jo(t)}catch(e){throw e===ya?xa:e}else r=t;t=ko();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(U.flags|=2048,is(9,{destroy:void 0},ns.bind(null,i,n),null)),[r,a,e]}function ns(e,t){e.action=t}function rs(e){var t=ko(),n=W;if(n!==null)return ts(t,n,e);ko(),t=t.memoizedState,n=ko();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function is(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=U.updateQueue,t===null&&(t=Ao(),U.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function as(){return ko().memoizedState}function os(e,t,n,r){var i=Oo();U.flags|=e,i.memoizedState=is(1|t,{destroy:void 0},n,r===void 0?null:r)}function ss(e,t,n,r){var i=ko();r=r===void 0?null:r;var a=i.memoizedState.inst;W!==null&&r!==null&&bo(r,W.memoizedState.deps)?i.memoizedState=is(t,a,n,r):(U.flags|=e,i.memoizedState=is(1|t,a,n,r))}function cs(e,t){os(8390656,8,e,t)}function ls(e,t){ss(2048,8,e,t)}function us(e){U.flags|=4;var t=U.updateQueue;if(t===null)t=Ao(),U.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ds(e){var t=ko().memoizedState;return us({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function fs(e,t){return ss(4,2,e,t)}function ps(e,t){return ss(4,4,e,t)}function ms(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hs(e,t,n){n=n==null?null:n.concat([e]),ss(4,4,ms.bind(null,t,e),n)}function gs(){}function _s(e,t){var n=ko();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&bo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function vs(e,t){var n=ko();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&bo(t,r[1]))return r[0];if(r=e(),mo){Fe(!0);try{e()}finally{Fe(!1)}}return n.memoizedState=[r,t],r}function ys(e,t,n){return n===void 0||lo&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),U.lanes|=e,Gl|=e,n)}function bs(e,t,n,r){return br(n,t)?n:Ya.current===null?!(lo&42)||lo&1073741824&&!(Y&261930)?(nc=!0,e.memoizedState=n):(e=mu(),U.lanes|=e,Gl|=e,t):(e=ys(e,n,r),br(e,t)||(nc=!0),e)}function xs(e,t,n,r,i){var a=k.p;k.p=a!==0&&8>a?a:8;var o=O.T,s={};O.T=s,Ns(e,!1,t,n);try{var c=i(),l=O.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ms(e,t,pa(c,r),pu(e)):Ms(e,t,r,pu(e))}catch(n){Ms(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{k.p=a,o!==null&&s.types!==null&&(o.types=s.types),O.T=o}}function Ss(){}function Cs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=ws(e).queue;xs(e,a,t,A,n===null?Ss:function(){return Ts(e),n(r)})}function ws(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:A,baseState:A,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:A},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ts(e){var t=ws(e);t.next===null&&(t=e.alternate.memoizedState),Ms(e,t.next.queue,{},pu())}function Es(){return Qi(Qf)}function Ds(){return ko().memoizedState}function Os(){return ko().memoizedState}function ks(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ba(n);var r=Va(t,e,n);r!==null&&(hu(r,t,n),Ha(r,t,n)),t={cache:aa()},e.payload=t;return}t=t.return}}function As(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ps(e)?Fs(t,n):(n=ei(e,t,n,r),n!==null&&(hu(n,e,r),Is(n,t,r)))}function js(e,t,n){Ms(e,t,n,pu())}function Ms(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ps(e))Fs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,br(s,o))return $r(e,t,i,0),q===null&&Qr(),!1}catch{}if(n=ei(e,t,i,r),n!==null)return hu(n,e,r),Is(n,t,r),!0}return!1}function Ns(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ps(e)){if(t)throw Error(i(479))}else t=ei(e,n,r,2),t!==null&&hu(t,e,2)}function Ps(e){var t=e.alternate;return e===U||t!==null&&t===U}function Fs(e,t){po=fo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Is(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ze(e,n)}}var Ls={readContext:Qi,use:Mo,useCallback:yo,useContext:yo,useEffect:yo,useImperativeHandle:yo,useLayoutEffect:yo,useInsertionEffect:yo,useMemo:yo,useReducer:yo,useRef:yo,useState:yo,useDebugValue:yo,useDeferredValue:yo,useTransition:yo,useSyncExternalStore:yo,useId:yo,useHostTransitionStatus:yo,useFormState:yo,useActionState:yo,useOptimistic:yo,useMemoCache:yo,useCacheRefresh:yo};Ls.useEffectEvent=yo;var Rs={readContext:Qi,use:Mo,useCallback:function(e,t){return Oo().memoizedState=[e,t===void 0?null:t],e},useContext:Qi,useEffect:cs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),os(4194308,4,ms.bind(null,t,e),n)},useLayoutEffect:function(e,t){return os(4194308,4,e,t)},useInsertionEffect:function(e,t){os(4,2,e,t)},useMemo:function(e,t){var n=Oo();t=t===void 0?null:t;var r=e();if(mo){Fe(!0);try{e()}finally{Fe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Oo();if(n!==void 0){var i=n(t);if(mo){Fe(!0);try{n(t)}finally{Fe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=As.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var t=Oo();return e={current:e},t.memoizedState=e},useState:function(e){e=Wo(e);var t=e.queue,n=js.bind(null,U,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:gs,useDeferredValue:function(e,t){return ys(Oo(),e,t)},useTransition:function(){var e=Wo(!1);return e=xs.bind(null,U,e.queue,!0,!1),Oo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=U,a=Oo();if(H){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||zo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,cs(Vo.bind(null,r,o,e),[e]),r.flags|=2048,is(9,{destroy:void 0},Bo.bind(null,r,o,n,t),null),n},useId:function(){var e=Oo(),t=q.identifierPrefix;if(H){var n=Ti,r=wi;n=(r&~(1<<32-Ie(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=ho++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=vo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Es,useFormState:$o,useActionState:$o,useOptimistic:function(e){var t=Oo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ns.bind(null,U,!0,n),n.dispatch=t,[e,t]},useMemoCache:No,useCacheRefresh:function(){return Oo().memoizedState=ks.bind(null,U)},useEffectEvent:function(e){var t=Oo(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},zs={readContext:Qi,use:Mo,useCallback:_s,useContext:Qi,useEffect:ls,useImperativeHandle:hs,useInsertionEffect:fs,useLayoutEffect:ps,useMemo:vs,useReducer:Fo,useRef:as,useState:function(){return Fo(Po)},useDebugValue:gs,useDeferredValue:function(e,t){return bs(ko(),W.memoizedState,e,t)},useTransition:function(){var e=Fo(Po)[0],t=ko().memoizedState;return[typeof e==`boolean`?e:jo(e),t]},useSyncExternalStore:Ro,useId:Ds,useHostTransitionStatus:Es,useFormState:es,useActionState:es,useOptimistic:function(e,t){return Go(ko(),W,e,t)},useMemoCache:No,useCacheRefresh:Os};zs.useEffectEvent=ds;var Bs={readContext:Qi,use:Mo,useCallback:_s,useContext:Qi,useEffect:ls,useImperativeHandle:hs,useInsertionEffect:fs,useLayoutEffect:ps,useMemo:vs,useReducer:Lo,useRef:as,useState:function(){return Lo(Po)},useDebugValue:gs,useDeferredValue:function(e,t){var n=ko();return W===null?ys(n,e,t):bs(n,W.memoizedState,e,t)},useTransition:function(){var e=Lo(Po)[0],t=ko().memoizedState;return[typeof e==`boolean`?e:jo(e),t]},useSyncExternalStore:Ro,useId:Ds,useHostTransitionStatus:Es,useFormState:rs,useActionState:rs,useOptimistic:function(e,t){var n=ko();return W===null?(n.baseState=e,[e,n.queue.dispatch]):Go(n,W,e,t)},useMemoCache:No,useCacheRefresh:Os};Bs.useEffectEvent=ds;function Vs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Hs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ba(r);i.payload=t,n!=null&&(i.callback=n),t=Va(e,i,r),t!==null&&(hu(t,e,r),Ha(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ba(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Va(e,i,r),t!==null&&(hu(t,e,r),Ha(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ba(n);r.tag=2,t!=null&&(r.callback=t),t=Va(e,r,n),t!==null&&(hu(t,e,n),Ha(t,e,n))}};function Us(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!xr(n,r)||!xr(i,a):!0}function Ws(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Hs.enqueueReplaceState(t,t.state,null)}function Gs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ks(e){Jr(e)}function qs(e){console.error(e)}function Js(e){Jr(e)}function Ys(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Xs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Zs(e,t,n){return n=Ba(n),n.tag=3,n.payload={element:null},n.callback=function(){Ys(e,t)},n}function Qs(e){return e=Ba(e),e.tag=3,e}function $s(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Xs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Xs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ec(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Yi(t,n,a,!0),n=eo.current,n!==null){switch(n.tag){case 31:case 13:return to===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Sa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Sa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(H)return t=eo.current,t===null?(r!==Pi&&(t=Error(i(423),{cause:r}),Vi(gi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=gi(r,n),a=Zs(e.stateNode,r,a),Ua(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Pi&&(e=Error(i(422),{cause:r}),Vi(gi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=gi(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=gi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Zs(n.stateNode,r,e),Ua(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Qs(a),$s(a,e,n,r),Ua(n,a),!1}n=n.return}while(n!==null);return!1}var tc=Error(i(461)),nc=!1;function rc(e,t,n,r){t.child=e===null?Ia(t,null,n,r):Fa(t,e.child,n,r)}function ic(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Zi(t),r=xo(e,t,n,o,a,i),s=To(),e!==null&&!nc?(Eo(e,t,i),Oc(e,t,i)):(H&&s&&Oi(t),t.flags|=1,rc(e,t,r,i),t.child)}function ac(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!si(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,oc(e,t,a,r,i)):(e=ui(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!kc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?xr:n,n(o,r)&&e.ref===t.ref)return Oc(e,t,i)}return t.flags|=1,e=ci(a,r),e.ref=t.ref,e.return=t,t.child=e}function oc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(xr(a,r)&&e.ref===t.ref){if(nc=!1,t.pendingProps=r=a,kc(e,i))e.flags&131072&&(nc=!0);else return t.lanes=e.lanes,Oc(e,t,i)}}return mc(e,t,n,r,i)}function sc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return lc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&_a(t,a===null?null:a.cachePool),a===null?Qa():Za(t,a),io(t);else return r=t.lanes=536870912,lc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&_a(t,null),Qa(),ao(t)):(_a(t,a.cachePool),Za(t,a),ao(t),t.memoizedState=null);return rc(e,t,i,n),t.child}function cc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function lc(e,t,n,r,i){var a=ga();return a=a===null?null:{parent:ia._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&_a(t,null),Qa(),io(t),e!==null&&Yi(e,t,r,!0),t.childLanes=i,null}function uc(e,t){return t=Cc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function dc(e,t,n){return Fa(t,e.child,null,n),e=uc(t,t.pendingProps),e.flags|=2,oo(t),t.memoizedState=null,e}function fc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(H){if(r.mode===`hidden`)return e=uc(t,r),t.lanes=536870912,cc(null,e);if(ro(t),(e=V)?(e=rf(e,Ni),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ci===null?null:{id:wi,overflow:Ti},retryLane:536870912,hydrationErrors:null},n=pi(e),n.return=t,t.child=n,ji=t,V=null)):e=null,e===null)throw Fi(t);return t.lanes=536870912,null}return uc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(ro(t),a){if(t.flags&256)t.flags&=-257,t=dc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(nc||Yi(e,t,n,!1),a=(n&e.childLanes)!==0,nc||a){if(r=q,r!==null&&(s=Qe(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ti(e,s),hu(r,e,s),tc;Du(),t=dc(e,t,n)}else e=o.treeContext,V=cf(s.nextSibling),ji=t,H=!0,Mi=null,Ni=!1,e!==null&&Ai(t,e),t=uc(t,r),t.flags|=4096;return t}return e=ci(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function pc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function mc(e,t,n,r,i){return Zi(t),n=xo(e,t,n,r,void 0,i),r=To(),e!==null&&!nc?(Eo(e,t,i),Oc(e,t,i)):(H&&r&&Oi(t),t.flags|=1,rc(e,t,n,i),t.child)}function hc(e,t,n,r,i,a){return Zi(t),t.updateQueue=null,n=Co(t,r,n,i),So(e),r=To(),e!==null&&!nc?(Eo(e,t,a),Oc(e,t,a)):(H&&r&&Oi(t),t.flags|=1,rc(e,t,n,a),t.child)}function gc(e,t,n,r,i){if(Zi(t),t.stateNode===null){var a=ii,o=n.contextType;typeof o==`object`&&o&&(a=Qi(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Hs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ra(t),o=n.contextType,a.context=typeof o==`object`&&o?Qi(o):ii,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Vs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Hs.enqueueReplaceState(a,a.state,null),Ka(t,r,a,i),Ga(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Gs(n,s);a.props=c;var l=a.context,u=n.contextType;o=ii,typeof u==`object`&&u&&(o=Qi(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ws(t,a,r,o),La=!1;var f=t.memoizedState;a.state=f,Ka(t,r,a,i),Ga(),l=t.memoizedState,s||f!==l||La?(typeof d==`function`&&(Vs(t,n,d,r),l=t.memoizedState),(c=La||Us(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,za(e,t),o=t.memoizedProps,u=Gs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ii,typeof l==`object`&&l&&(c=Qi(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ws(t,a,r,c),La=!1,f=t.memoizedState,a.state=f,Ka(t,r,a,i),Ga();var p=t.memoizedState;o!==d||f!==p||La||e!==null&&e.dependencies!==null&&Xi(e.dependencies)?(typeof s==`function`&&(Vs(t,n,s,r),p=t.memoizedState),(u=La||Us(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Xi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,pc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Fa(t,e.child,null,i),t.child=Fa(t,null,n,i)):rc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Oc(e,t,i),e}function _c(e,t,n,r){return zi(),t.flags|=256,rc(e,t,n,r),t.child}var vc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yc(e){return{baseLanes:e,cachePool:va()}}function bc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function xc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(so.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(H){if(a?no(t):ao(t),(e=V)?(e=rf(e,Ni),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ci===null?null:{id:wi,overflow:Ti},retryLane:536870912,hydrationErrors:null},n=pi(e),n.return=t,t.child=n,ji=t,V=null)):e=null,e===null)throw Fi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(ao(t),a=t.mode,c=Cc({mode:`hidden`,children:c},a),r=di(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=yc(n),r.childLanes=bc(e,s,n),t.memoizedState=vc,cc(null,r)):(no(t),Sc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(no(t),t.flags&=-257,t=wc(e,t,n)):t.memoizedState===null?(ao(t),c=r.fallback,a=t.mode,r=Cc({mode:`visible`,children:r.children},a),c=di(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Fa(t,e.child,null,n),r=t.child,r.memoizedState=yc(n),r.childLanes=bc(e,s,n),t.memoizedState=vc,t=cc(null,r)):(ao(t),t.child=e.child,t.flags|=128,t=null);else if(no(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Vi({value:r,source:null,stack:null}),t=wc(e,t,n)}else if(nc||Yi(e,t,n,!1),s=(n&e.childLanes)!==0,nc||s){if(s=q,s!==null&&(r=Qe(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ti(e,r),hu(s,e,r),tc;af(c)||Du(),t=wc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,V=cf(c.nextSibling),ji=t,H=!0,Mi=null,Ni=!1,e!==null&&Ai(t,e),t=Sc(t,r.children),t.flags|=4096);return t}return a?(ao(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=ci(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=di(c,a,n,null),c.flags|=2):c=ci(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,cc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=yc(n):(a=c.cachePool,a===null?a=va():(l=ia._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=bc(e,s,n),t.memoizedState=vc,cc(e.child,r)):(no(t),n=e.child,e=n.sibling,n=ci(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Sc(e,t){return t=Cc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Cc(e,t){return e=oi(22,e,null,t),e.lanes=0,e}function wc(e,t,n){return Fa(t,e.child,null,n),e=Sc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Tc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),qi(e.return,t,n)}function Ec(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Dc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=so.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,N(so,o),rc(e,t,r,n),r=H?bi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tc(e,n,t);else if(e.tag===19)Tc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&co(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ec(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&co(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ec(t,!0,n,null,a,r);break;case`together`:Ec(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Oc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(Yi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=ci(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ci(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function kc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Xi(e)))}function Ac(e,t,n){switch(t.tag){case 3:pe(t,t.stateNode.containerInfo),Gi(t,ia,e.memoizedState.cache),zi();break;case 27:case 5:he(t);break;case 4:pe(t,t.stateNode.containerInfo);break;case 10:Gi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ro(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(no(t),e=Oc(e,t,n),e===null?null:e.sibling):xc(e,t,n):(no(t),t.flags|=128,null);no(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(Yi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Dc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),N(so,so.current),r)break;return null;case 22:return t.lanes=0,sc(e,t,n,t.pendingProps);case 24:Gi(t,ia,e.memoizedState.cache)}return Oc(e,t,n)}function jc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)nc=!0;else{if(!kc(e,n)&&!(t.flags&128))return nc=!1,Ac(e,t,n);nc=!!(e.flags&131072)}}else nc=!1,H&&t.flags&1048576&&Di(t,bi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ta(t.elementType),t.type=e,typeof e==`function`)si(e)?(r=Gs(e,r),t.tag=1,t=gc(null,t,e,r,n)):(t.tag=0,t=mc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=ic(null,t,e,r,n);break a}if(a===te){t.tag=14,t=ac(null,t,e,r,n);break a}}throw t=oe(e)||e,Error(i(306,t,``))}}return t;case 0:return mc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Gs(r,t.pendingProps),gc(e,t,r,a,n);case 3:a:{if(pe(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,za(e,t),Ka(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Gi(t,ia,r),r!==o.cache&&Ji(t,[ia],n,!0),Ga(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=_c(e,t,r,n);break a}if(r!==a){a=gi(Error(i(424)),t),Vi(a),t=_c(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(V=cf(e.firstChild),ji=t,H=!0,Mi=null,Ni=!0,n=Ia(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(zi(),r===a){t=Oc(e,t,n);break a}rc(e,t,r,n)}t=t.child}return t;case 26:return pc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:H||(n=t.type,e=t.pendingProps,r=Bd(P.current).createElement(n),r[it]=t,r[at]=e,Pd(r,n,e),_t(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return he(t),e===null&&H&&(r=t.stateNode=ff(t.type,t.pendingProps,P.current),ji=t,Ni=!0,a=V,Zd(t.type)?(lf=a,V=cf(r.firstChild)):V=a),rc(e,t,t.pendingProps.children,n),pc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&H&&((a=r=V)&&(r=tf(r,t.type,t.pendingProps,Ni),r===null?a=!1:(t.stateNode=r,ji=t,V=cf(r.firstChild),Ni=!1,a=!0)),a||Fi(t)),he(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=xo(e,t,wo,null,null,n),Qf._currentValue=a),pc(e,t),rc(e,t,r,n),t.child;case 6:return e===null&&H&&((e=n=V)&&(n=nf(n,t.pendingProps,Ni),n===null?e=!1:(t.stateNode=n,ji=t,V=null,e=!0)),e||Fi(t)),null;case 13:return xc(e,t,n);case 4:return pe(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fa(t,null,r,n):rc(e,t,r,n),t.child;case 11:return ic(e,t,t.type,t.pendingProps,n);case 7:return rc(e,t,t.pendingProps,n),t.child;case 8:return rc(e,t,t.pendingProps.children,n),t.child;case 12:return rc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Gi(t,t.type,r.value),rc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Zi(t),a=Qi(a),r=r(a),t.flags|=1,rc(e,t,r,n),t.child;case 14:return ac(e,t,t.type,t.pendingProps,n);case 15:return oc(e,t,t.type,t.pendingProps,n);case 19:return Dc(e,t,n);case 31:return fc(e,t,n);case 22:return sc(e,t,n,t.pendingProps);case 24:return Zi(t),r=Qi(ia),e===null?(a=ga(),a===null&&(a=q,o=aa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ra(t),Gi(t,ia,a)):((e.lanes&n)!==0&&(za(e,t),Ka(t,null,null,n),Ga()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Gi(t,ia,r),r!==a.cache&&Ji(t,[ia],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Gi(t,ia,r))),rc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Mc(e){e.flags|=4}function Nc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ea=Sa,ba}}else e.flags&=-16777217}function Pc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t)){if(wu())e.flags|=8192;else throw Ea=Sa,ba}}function Fc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Ke(),e.lanes|=t,Yl|=t)}function Ic(e,t){if(!H)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function G(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Lc(e,t,n){var r=t.pendingProps;switch(ki(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return G(t),null;case 1:return G(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Ki(ia),me(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ri(t)?Mc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Bi())),G(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Mc(t),o===null?(G(t),Nc(t,a,null,r,n)):(G(t),Pc(t,o))):o?o===e.memoizedState?(G(t),t.flags&=-16777217):(Mc(t),G(t),Pc(t,o)):(e=e.memoizedProps,e!==r&&Mc(t),G(t),Nc(t,a,e,r,n)),null;case 27:if(ge(t),n=P.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Mc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return G(t),null}e=ue.current,Ri(t)?Ii(t,e):(e=ff(a,r,n),t.stateNode=e,Mc(t))}return G(t),null;case 5:if(ge(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Mc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return G(t),null}if(o=ue.current,Ri(t))Ii(t,o);else{var s=Bd(P.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[it]=t,o[at]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Mc(t)}}return G(t),Nc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Mc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=P.current,Ri(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=ji,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[it]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Fi(t,!0)}else e=Bd(e).createTextNode(r),e[it]=t,t.stateNode=e}return G(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ri(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[it]=t}else zi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;G(t),e=!1}else n=Bi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(oo(t),t):(oo(t),null);if(t.flags&128)throw Error(i(558))}return G(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ri(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[it]=t}else zi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;G(t),a=!1}else a=Bi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(oo(t),t):(oo(t),null)}return oo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Fc(t,t.updateQueue),G(t),null);case 4:return me(),e===null&&Sd(t.stateNode.containerInfo),G(t),null;case 10:return Ki(t.type),G(t),null;case 19:if(M(so),r=t.memoizedState,r===null)return G(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)Ic(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=co(e),o!==null){for(t.flags|=128,Ic(r,!1),e=o.updateQueue,t.updateQueue=e,Fc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)li(n,e),n=n.sibling;return N(so,so.current&1|2),H&&Ei(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&R()>tu&&(t.flags|=128,a=!0,Ic(r,!1),t.lanes=4194304)}}else{if(!a){if(e=co(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Fc(t,e),Ic(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!H)return G(t),null}else 2*R()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Ic(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(G(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=R(),e.sibling=null,n=so.current,N(so,a?n&1|2:n&1),H&&Ei(t,r.treeForkCount),e);case 22:case 23:return oo(t),$a(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(G(t),t.subtreeFlags&6&&(t.flags|=8192)):G(t),n=t.updateQueue,n!==null&&Fc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&M(ha),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ki(ia),G(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Rc(e,t){switch(ki(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ki(ia),me(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ge(t),null;case 31:if(t.memoizedState!==null){if(oo(t),t.alternate===null)throw Error(i(340));zi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(oo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));zi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return M(so),null;case 4:return me(),null;case 10:return Ki(t.type),null;case 22:case 23:return oo(t),$a(),e!==null&&M(ha),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ki(ia),null;case 25:return null;default:return null}}function zc(e,t){switch(ki(t),t.tag){case 3:Ki(ia),me();break;case 26:case 27:case 5:ge(t);break;case 4:me();break;case 31:t.memoizedState!==null&&oo(t);break;case 13:oo(t);break;case 19:M(so);break;case 10:Ki(t.type);break;case 22:case 23:oo(t),$a(),e!==null&&M(ha);break;case 24:Ki(ia)}}function Bc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Vc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Hc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ja(t,n)}catch(t){Z(e,e.return,t)}}}function Uc(e,t,n){n.props=Gs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Wc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Gc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Kc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function qc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[at]=t}catch(t){Z(e,e.return,t)}}function Jc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Yc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Jc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zt));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Xc(e,t,n),e=e.sibling;e!==null;)Xc(e,t,n),e=e.sibling}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[it]=e,t[at]=n}catch(t){Z(e,e.return,t)}}var $c=!1,el=!1,tl=!1,nl=typeof WeakSet==`function`?WeakSet:Set,rl=null;function il(e,t){if(e=e.containerInfo,Rd=sp,e=Tr(e),Er(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,rl=t;rl!==null;)if(t=rl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,rl=e;else for(;rl!==null;){switch(t=rl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Gs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,rl=e;break}rl=t.return}}function al(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:bl(e,n),r&4&&Bc(5,n);break;case 1:if(bl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Gs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Hc(n),r&512&&Wc(n,n.return);break;case 3:if(bl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ja(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Qc(n);case 26:case 5:bl(e,n),t===null&&r&4&&Kc(n),r&512&&Wc(n,n.return);break;case 12:bl(e,n);break;case 31:bl(e,n),r&4&&dl(e,n);break;case 13:bl(e,n),r&4&&fl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||$c,!r){t=t!==null&&t.memoizedState!==null||el,i=$c;var a=el;$c=r,(el=t)&&!a?Sl(e,n,!!(n.subtreeFlags&8772)):bl(e,n),$c=i,el=a}break;case 30:break;default:bl(e,n)}}function ol(e){var t=e.alternate;t!==null&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ft(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var sl=null,cl=!1;function ll(e,t,n){for(n=n.child;n!==null;)ul(e,t,n),n=n.sibling}function ul(e,t,n){if(Pe&&typeof Pe.onCommitFiberUnmount==`function`)try{Pe.onCommitFiberUnmount(Ne,n)}catch{}switch(n.tag){case 26:el||Gc(n,t),ll(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:el||Gc(n,t);var r=sl,i=cl;Zd(n.type)&&(sl=n.stateNode,cl=!1),ll(e,t,n),pf(n.stateNode),sl=r,cl=i;break;case 5:el||Gc(n,t);case 6:if(r=sl,i=cl,sl=null,ll(e,t,n),sl=r,cl=i,sl!==null){if(cl)try{(sl.nodeType===9?sl.body:sl.nodeName===`HTML`?sl.ownerDocument.body:sl).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{sl.removeChild(n.stateNode)}catch(e){Z(n,t,e)}}break;case 18:sl!==null&&(cl?(e=sl,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(sl,n.stateNode));break;case 4:r=sl,i=cl,sl=n.stateNode.containerInfo,cl=!0,ll(e,t,n),sl=r,cl=i;break;case 0:case 11:case 14:case 15:Vc(2,n,t),el||Vc(4,n,t),ll(e,t,n);break;case 1:el||(Gc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Uc(n,t,r)),ll(e,t,n);break;case 21:ll(e,t,n);break;case 22:el=(r=el)||n.memoizedState!==null,ll(e,t,n),el=r;break;default:ll(e,t,n)}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function pl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new nl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new nl),t;default:throw Error(i(435,e.tag))}}function ml(e,t){var n=pl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function hl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){sl=c.stateNode,cl=!1;break a}break;case 5:sl=c.stateNode,cl=!1;break a;case 3:case 4:sl=c.stateNode.containerInfo,cl=!0;break a}c=c.return}if(sl===null)throw Error(i(160));ul(o,s,a),sl=null,cl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_l(t,e),t=t.sibling}var gl=null;function _l(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hl(t,e),vl(e),r&4&&(Vc(3,e,e.return),Bc(3,e),Vc(5,e,e.return));break;case 1:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&64&&$c&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=gl;if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[dt]||o[it]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[it]=e,_t(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[it]=e,_t(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode)}else e.stateNode=If(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&qc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),n!==null&&r&4&&qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),e.flags&32){a=e.stateNode;try{Ut(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,qc(e,a,n===null?a:n.memoizedProps)),r&1024&&(tl=!0);break;case 6:if(hl(t,e),vl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=gl,gl=gf(t.containerInfo),hl(t,e),gl=a,vl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}tl&&(tl=!1,yl(e));break;case 4:r=gl,gl=gf(e.stateNode.containerInfo),hl(t,e),vl(e),gl=r;break;case 12:hl(t,e),vl(e);break;case 31:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 13:hl(t,e),vl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=R()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=$c,d=el;if($c=u||a,el=d||l,hl(t,e),el=d,$c=u,vl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||$c||el||xl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ml(e,n))));break;case 19:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 30:break;case 21:break;default:hl(t,e),vl(e)}}function vl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Jc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Zc(e,Yc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Ut(o,``),n.flags&=-33),Zc(e,Yc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Xc(e,Yc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)al(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Vc(4,t,t.return),xl(t);break;case 1:Gc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Uc(t,t.return,n),xl(t);break;case 27:pf(t.stateNode);case 26:case 5:Gc(t,t.return),xl(t);break;case 22:t.memoizedState===null&&xl(t);break;case 30:xl(t);break;default:xl(t)}e=e.sibling}}function Sl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Sl(i,a,n),Bc(4,a);break;case 1:if(Sl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)qa(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Hc(a),Wc(a,a.return);break;case 27:Qc(a);case 26:case 5:Sl(i,a,n),n&&r===null&&o&4&&Kc(a),Wc(a,a.return);break;case 12:Sl(i,a,n);break;case 31:Sl(i,a,n),n&&o&4&&dl(i,a);break;case 13:Sl(i,a,n),n&&o&4&&fl(i,a);break;case 22:a.memoizedState===null&&Sl(i,a,n),Wc(a,a.return);break;case 30:break;default:Sl(i,a,n)}t=t.sibling}}function Cl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&oa(n))}function wl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&oa(e))}function Tl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)El(e,t,n,r),t=t.sibling}function El(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Tl(e,t,n,r),i&2048&&Bc(9,t);break;case 1:Tl(e,t,n,r);break;case 3:Tl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&oa(e)));break;case 12:if(i&2048){Tl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Tl(e,t,n,r);break;case 31:Tl(e,t,n,r);break;case 13:Tl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Tl(e,t,n,r):(a._visibility|=2,Dl(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?Tl(e,t,n,r):Ol(e,t),i&2048&&Cl(o,t);break;case 24:Tl(e,t,n,r),i&2048&&wl(t.alternate,t);break;default:Tl(e,t,n,r)}}function Dl(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Dl(a,o,s,c,i),Bc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Dl(a,o,s,c,i)):u._visibility&2?Dl(a,o,s,c,i):Ol(a,o),i&&l&2048&&Cl(o.alternate,o);break;case 24:Dl(a,o,s,c,i),i&&l&2048&&wl(o.alternate,o);break;default:Dl(a,o,s,c,i)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ol(n,r),i&2048&&Cl(r.alternate,r);break;case 24:Ol(n,r),i&2048&&wl(r.alternate,r);break;default:Ol(n,r)}t=t.sibling}}var kl=8192;function Al(e,t,n){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)jl(e,t,n),e=e.sibling}function jl(e,t,n){switch(e.tag){case 26:Al(e,t,n),e.flags&kl&&e.memoizedState!==null&&Gf(n,gl,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,n);break;case 3:case 4:var r=gl;gl=gf(e.stateNode.containerInfo),Al(e,t,n),gl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=kl,kl=16777216,Al(e,t,n),kl=r):Al(e,t,n));break;default:Al(e,t,n)}}function Ml(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Vc(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Nl(e);break;default:Nl(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Vc(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Il(e,t){for(;rl!==null;){var n=rl;switch(n.tag){case 0:case 11:case 15:Vc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:oa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,rl=r;else a:for(n=e;rl!==null;){r=rl;var i=r.sibling,a=r.return;if(ol(r),r===n){rl=null;break a}if(i!==null){i.return=a,rl=i;break a}rl=a}}}var Ll={getCacheForType:function(e){var t=Qi(ia),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Qi(ia).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return K&2&&Y!==0?Y&-Y:O.T===null?tt():dd()}function mu(){if(Jl===0){if(!(Y&536870912)||H){var e=Ve;Ve<<=1,!(Ve&3932160)&&(Ve=262144),Jl=e}else Jl=536870912}return e=eo.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),Je(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(K&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||Ge(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-R(),10<a)){if(yu(r,t,Jl,!Bl),We(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zt},jl(t,a,d);var m=(a&62914560)===a?$l-R():(a&4194048)===a?eu-R():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!br(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ie(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&Xe(e,n,t)}function bu(){return K&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Wi=Ui=null,Do(e),ka=null,Aa=0,e=J;for(;e!==null;)zc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),q=e,J=n=ci(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=Ge(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ie(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,Qr(),n}function Cu(e,t){U=null,O.H=Ls,t===ya||t===xa?(t=Da(),X=3):t===ba?(t=Da(),X=4):X=t===tc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,Ys(e,gi(t,e.current)))}function wu(){var e=eo.current;return e===null?!0:(Y&4194048)===Y?to===null:(Y&62914560)===Y||Y&536870912?e===to:!1}function Tu(){var e=O.H;return O.H=Ls,e===null?Ls:e}function Eu(){var e=O.A;return O.A=Ll,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&eo.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||q===null||yu(q,Y,Jl,!1)}function Ou(e,t,n){var r=K;K|=2;var i=Tu(),a=Eu();(q!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:eo.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Wi=Ui=null,K=r,O.H=i,O.A=a,J===null&&(q=null,Y=0,Qr()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=K;K|=2;var r=Tu(),a=Eu();q!==e||Y!==t?(nu=null,tu=R()+500,Su(e,t)):Vl=Ge(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,o,1);break;case 2:case 9:if(Ca(o)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),rd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:Ca(o)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Wf(s):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,o,5);break;case 6:X=0,zl=null,Pu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Wi=Ui=null,O.H=r,O.A=a,K=n,J===null?(q=null,Y=0,Qr(),Wl):0}function ju(){for(;J!==null&&!L();)Mu(J)}function Mu(e){var t=jc(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=hc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=hc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Do(t);default:zc(n,t),t=J=li(t,Ul),t=jc(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Wi=Ui=null,Do(t),ka=null,Aa=0;var i=t.return;try{if(ec(e,i,t,n,Y)){Wl=1,Ys(e,gi(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,Ys(e,gi(n,e.current)),J=null;return}t.flags&32768?(H||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=eo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Lc(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=Rc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=Zr,Ye(e,n,o,s,c,l),e===q&&(J=q=null,Y=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Oe,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=O.T,O.T=null,a=k.p,k.p=2,s=K,K|=4;try{il(e,t,n)}finally{K=s,k.p=a,O.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=K;K|=4;try{_l(t,e);var a=zd,o=Tr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&wr(s.ownerDocument.documentElement,s)){if(c!==null&&Er(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Cr(s,h),v=Cr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{K=i,k.p=r,O.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=K;K|=4;try{al(e,t.alternate,t)}finally{K=i,k.p=r,O.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Te();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),et(n),t=t.stateNode,Pe&&typeof Pe.onCommitFiberRoot==`function`)try{Pe.onCommitFiberRoot(Ne,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=O.T,i=k.p,k.p=2,O.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{O.T=t,k.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,oa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=et(su),r=O.T,a=k.p;try{k.p=32>n?32:n,O.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,K&6)throw Error(i(331));var c=K;if(K|=4,Pl(o.current),El(o,o.current,s,n),K=c,id(0,!1),Pe&&typeof Pe.onPostCommitFiberRoot==`function`)try{Pe.onPostCommitFiberRoot(Ne,o)}catch{}return!0}finally{k.p=a,O.T=r,Vu(e,t)}}function Wu(e,t,n){t=gi(n,t),t=Zs(e.stateNode,t,2),e=Va(e,t,2),e!==null&&(Je(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=gi(n,e),n=Qs(2),r=Va(t,n,2),r!==null&&($s(n,r,t,e),Je(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>R()-$l?!(K&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=Ke()),e=ti(e,t),e!==null&&(Je(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return I(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ie(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=We(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Ge(r,a)||(n=!0,ld(r,a))}r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=R(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ie(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=B(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=We(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&we(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ge(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&we(r),et(n)){case 2:case 8:n=De;break;case 32:n=Oe;break;case 268435456:n=Ae;break;default:n=Oe}return r=cd.bind(null,e),n=I(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&we(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=We(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,R()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){K&6?I(Ee,ad):od()})}function dd(){if(nd===0){var e=la;e===0&&(e=Be,Be<<=1,!(Be&261888)&&(Be=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Xt(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[at]||null).action),o=r.submitter;o&&(t=(t=o[at]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new yn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Cs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Cs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Kr.length;hd++){var gd=Kr[hd];qr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}qr(Rr,`onAnimationEnd`),qr(zr,`onAnimationIteration`),qr(Br,`onAnimationStart`),qr(`dblclick`,`onDoubleClick`),qr(`focusin`,`onFocus`),qr(`focusout`,`onBlur`),qr(Vr,`onTransitionRun`),qr(Hr,`onTransitionStart`),qr(Ur,`onTransitionCancel`),qr(Wr,`onTransitionEnd`),xt(`onMouseEnter`,[`mouseout`,`mouseover`]),xt(`onMouseLeave`,[`mouseout`,`mouseover`]),xt(`onPointerEnter`,[`pointerout`,`pointerover`]),xt(`onPointerLeave`,[`pointerout`,`pointerover`]),bt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),bt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),bt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),bt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),bt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),bt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Jr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Jr(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[st];n===void 0&&(n=t[st]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,vt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!cn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=pt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}an(function(){var r=a,i=$t(n),s=[];a:{var c=Gr.get(e);if(c!==void 0){var l=yn,u=e;switch(e){case`keypress`:if(mn(n)===0)break a;case`keydown`:case`keyup`:l=Ln;break;case`focusin`:u=`focus`,l=On;break;case`focusout`:u=`blur`,l=On;break;case`beforeblur`:case`afterblur`:l=On;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=En;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Dn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=zn;break;case Rr:case zr:case Br:l=kn;break;case Wr:l=Bn;break;case`scroll`:case`scrollend`:l=xn;break;case`wheel`:l=Vn;break;case`copy`:case`cut`:case`paste`:l=An;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Rn;break;case`toggle`:case`beforetoggle`:l=Hn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=on(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==Qt&&(u=n.relatedTarget||n.fromElement)&&(pt(u)||u[ot]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?pt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=En,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Rn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:ht(l),h=u==null?c:ht(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,pt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?ht(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=cr;else if(nr(c)){if(lr)v=vr;else{v=gr;var y=hr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&qt(r.elementType)&&(v=cr):v=_r;if(v&&=v(e,r)){rr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&zt(c,`number`,c.value)}switch(y=r?ht(r):window,e){case`focusin`:(nr(y)||y.contentEditable===`true`)&&(Or=y,kr=r,Ar=null);break;case`focusout`:Ar=kr=Or=null;break;case`mousedown`:jr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:jr=!1,Mr(s,n,i);break;case`selectionchange`:if(Dr)break;case`keydown`:case`keyup`:Mr(s,n,i)}var b;if(Wn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else Qn?Xn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(qn&&n.locale!==`ko`&&(Qn||x!==`onCompositionStart`?x===`onCompositionEnd`&&Qn&&(b=pn()):(un=i,dn=`value`in un?un.value:un.textContent,Qn=!0)),y=Ed(r,x),0<y.length&&(x=new jn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=Zn(n),b!==null&&(x.data=b)))),(b=Kn?$n(e,n):er(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new jn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=on(e,n),i!=null&&r.unshift(Td(e,i,a)),i=on(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=on(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=on(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Ut(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Ut(e,``+r);break;case`className`:Dt(e,`class`,r);break;case`tabIndex`:Dt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Dt(e,n,r);break;case`style`:Kt(e,r,o);break;case`data`:if(t!==`object`){Dt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Xt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Xt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=Zt);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Xt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Et(e,`popover`,r);break;case`xlinkActuate`:Ot(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Ot(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Ot(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Ot(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Ot(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Ot(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Ot(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Ot(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Ot(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Et(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Jt.get(n)||n,Et(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:Kt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Ut(e,r):(typeof r==`number`||typeof r==`bigint`)&&Ut(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=Zt);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!yt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[at]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Et(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Rt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Bt(e,!!r,n,!0):Bt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Ht(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(qt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Lt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Bt(e,!!n,n?[]:``,!1):Bt(e,!!n,t,!0)):Bt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Vt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(qt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[dt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body)}n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),ft(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[dt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ft(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=k.d;k.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=mt(e);t!==null&&t.tag===5&&t.type===`form`?Ts(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=It(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),_t(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+It(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+It(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+It(n.imageSizes)+`"]`)):i+=`[href="`+It(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),_t(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+It(r)+`"][href="`+It(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),_t(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=gt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);_t(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=gt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),_t(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=gt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),_t(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=P.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=gt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=gt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=gt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+It(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),_t(t),e.head.appendChild(t))}function Pf(e){return`[src="`+It(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+It(n.href)+`"]`);if(r)return t.instance=r,_t(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),_t(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,_t(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),_t(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,_t(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),_t(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[dt]||a[it]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,_t(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),_t(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:A,_currentValue2:A,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qe(0),this.hiddenUpdates=qe(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=oi(3,null,null,t),e.current=a,a.stateNode=e,t=aa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ra(a),e}function tp(e){return e?(e=ii,e):ii}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ba(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Va(e,r,t),n!==null&&(hu(n,e,t),Ha(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ti(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=$e(t);var n=ti(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=2,up(e,t,n,r)}finally{k.p=a,O.T=i}}function lp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=8,up(e,t,n,r)}finally{k.p=a,O.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=mt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ue(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ie(o);s.entanglements[1]|=c,o&=~c}rd(a),!(K&6)&&(tu=R()+500,id(0,!1))}}break;case 31:case 13:s=ti(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=$t(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=pt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(z()){case Ee:return 2;case De:return 8;case Oe:case ke:return 32;case Ae:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=mt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=pt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,nt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,nt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Qt=r,n.target.dispatchEvent(r),Qt=null}else return t=mt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=mt(n);a!==null&&(e.splice(t,3),t-=3,Cs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[at]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[at]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[ot]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=tt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));k.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:O,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ne=zp.inject(Rp),Pe=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ks,s=qs,c=Js;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[ot]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=`YouTube transcript
Video ID: oh5p5f5_-7A
Language: en
Captions: authored or unspecified

[0:01] - Hi, I'm Bob Ross,
[0:02] and for the next 13 weeks, I'll be your host,
[0:05] as we experience The Joy of Painting.
[0:08] I think each of us, sometime during our life,
[0:10] has wanted to paint a picture.
[0:12] I think there's an artist
[0:13] hidden in the bottom of every single one of us.
[0:16] And here we will try to show you
[0:17] how to bring that artist out,
[0:19] to put it on canvas.
[0:21] Because you too, can paint almighty pictures.
[0:25] You know, we have avoided painting for so long
[0:27] because I think, all of our lives, we've been told
[0:29] that you have to go to school half of your life,
[0:32] maybe even have to be blessed by Michelangelo at birth
[0:35] to ever be able to paint a picture.
[0:38] And here we want to show you that that's not true.
[0:41] That you can paint a picture right along with us.
[0:44] Each week we'll use the same colors,
[0:46] we'll use the same equipment,
[0:48] so if you have your brush and pallet ready next week,
[0:52] you can paint right along with us.
[0:54] I'd like to go over some of the equipment
[0:55] that we'll use before we start.
[0:57] The brushes that we use.
[0:59] I'll be using very large, two and a half inch,
[1:02] and one inch, natural bristle brushes.
[1:05] Now these are natural bristle.
[1:07] Be sure you don't start with a nylon brush.
[1:11] We'll use an almighty palette knife.
[1:15] And this is much different
[1:16] than the traditional palette knife.
[1:17] It is not thin and flimsy, it's a firm palette knife.
[1:21] And with this we can make fantastic things happen.
[1:24] Let's go over the colors that we'll use.
[1:26] We're gonna start out here with Titanium white,
[1:30] Phthalo green,
[1:32] Prussian blue,
[1:34] Van Dyke brown,
[1:36] Alizarin crimson,
[1:38] Sap green,
[1:40] Cad yellow,
[1:41] and Permanent red.
[1:43] Now these eight colors, we'll use each and every week,
[1:46] for every picture that we do.
[1:48] So you don't have to go out
[1:49] and buy 1500 different kinds of colors and brushes.
[1:52] You need very little equipment to paint with this.
[1:56] Another thing, we'll do no tracing of patterns on here.
[2:00] We start with the vision in our heart,
[2:02] and we put it on canvas.
[2:04] And we're here to teach you to be able to do this too.
[2:07] So, let's do it.
[2:09] Let's paint a picture right here.
[2:11] We're gonna to start with a big brush,
[2:13] and were gonna cover the canvas
[2:15] with a thin layer of magic white.
[2:18] Now this is a wet-on-wet technique,
[2:19] so the first thing were going to do is get the canvas wet.
[2:23] And all we want is a nice, even coat of paint here.
[2:27] There we go.
[2:29] Just cover it nice and even.
[2:35] You also need an almighty easel when you're doing this.
[2:37] You need an easel that will hold your canvas very firm,
[2:40] and allow you to use these big brushes.
[2:44] Okay.
[2:46] When you're using a large brush like this,
[2:47] it really doesn't take too long to cover your canvas.
[2:52] And if you get a hair like that,
[2:54] just pop it off with the corner of your brush,
[2:56] flip it away.
[2:58] Okay.
[2:59] Now after you get your canvas covered with a magic white,
[3:03] we'll take and make long strokes back and forth
[3:06] to get a nice even distribution of paint on here.
[3:11] Okay.
[3:14] Up and down one time.
[3:17] That assures that the magic white's
[3:19] nice and even all the way across the canvas.
[3:23] Okay, let's wash the brush out here.
[3:25] We wash our brushes with odorless paint thinner.
[3:30] Okay, we'll wash them out.
[3:35] And I beat the brush just to dry the bristles.
[3:38] Now let's take a little bit of Cad yellow here,
[3:43] and I think today we'll do a picture that's,
[3:45] maybe like were walking through the woods.
[3:47] And so let's start right here
[3:48] with a little bit of Cad yellow,
[3:50] with just the least little touch of Phalo green in it.
[3:55] And we'll out a little bit more of the green color,
[3:58] and we'll begin making little X's,
[4:01] just like so.
[4:05] Just work that around.
[4:10] Okay.
[4:12] Now without cleaning the brush,
[4:13] we'll go right into some Prussian blue.
[4:15] Just add it right onto the brush here.
[4:18] We'll just go out here.
[4:20] And were making the crisscross strokes, little X strokes.
[4:26] There.
[4:33] Already we're beginning to have a light source
[4:35] in this painting.
[4:41] Okay, now we'll clean the brush again.
[4:45] Once again, this is odorless paint thinner.
[4:46] We do not use turpentine.
[4:52] Now with a nice clean brush,
[4:54] I'm gonna take and add just a little bit of Titanium white,
[4:59] right here in the center.
[5:03] Just a little.
[5:05] And we'll begin working outward.
[5:08] There.
[5:10] By now maybe you have recognized
[5:12] some of the equipment we're using
[5:15] as something you've seen before.
[5:18] And I learned this fantastic technique wonderful man
[5:23] that I think all of us have enjoyed
[5:24] for many many years on TV,
[5:26] Bill Alexander.
[5:28] And Bill taught me this many years ago.
[5:31] It is the most fantastic way to paint
[5:34] that you've ever seen.
[5:35] So join us.
[5:37] Have some fun.
[5:38] And we'll just blend this out a little bit more here.
[5:47] Until we have a nice blue sky.
[5:51] There we go.
[6:00] Okay, we'll clean the brush one more time.
[6:08] Now let's start putting in some almighty trees here.
[6:12] We're gonna start with a little bit of Alizarin crimson,
[6:15] and a touch of Prussian blue.
[6:17] Now the Prussian blue is 100 times stronger than
[6:20] the Crimson, so use just a little blue and a lot of Crimson.
[6:26] And here we're going to begin pushing in basic tree shapes.
[6:29] So just bend the brush.
[6:32] Bend the brush.
[6:33] Make those little leaves and branches
[6:35] just pop right out at you.
[6:38] There he comes.
[6:41] These little son of a guns hide in your brush
[6:43] and you just have to push them out.
[6:48] This is your world, your creation.
[6:51] Let's put a little one right here.
[6:58] And maybe we'll just put some little grassy areas
[7:00] coming down through here.
[7:05] And right there, there is one.
[7:12] You're pushing quite firm here.
[7:14] This is why I say you need an almighty easel
[7:16] when you're doing this, an easel that's strong.
[7:20] Okay.
[7:24] Maybe over here on this side now,
[7:27] we'll add another one.
[7:28] Maybe a bigger one over here.
[7:34] There he is.
[7:38] And there's no secret to this, anybody can paint.
[7:41] Anybody can paint.
[7:43] All you need is a dream in your heart, a little practice.
[7:51] There, already we have the beginning of a beautiful picture.
[7:53] We have the tree shapes, the light source.
[7:57] Looks to me like it's early in the morning.
[8:06] Okay.
[8:07] Now, let's put some trunks on these trees.
[8:10] And for that will take a little bit of Van Dyke brown,
[8:15] and let's just lay in some basic trunks here.
[8:20] There we go.
[8:24] And maybe we'll put a little limb right here, like so.
[8:31] Maybe a little something right there.
[8:34] There we are.
[8:38] Okay, now this little fellow over here,
[8:39] he needs a trunk too.
[8:42] So we'll put one right in here.
[8:50] And maybe some limbs up in here.
[8:54] Right through here, there we go.
[8:58] Just some indications here and there,
[9:00] and some little sticks and twigs.
[9:05] Maybe over here.
[9:08] There we are.
[9:14] Okay.
[9:15] Now we'll highlight these,
[9:17] and we'll take a little bit of white,
[9:19] and a touch of brown mixed together.
[9:24] And remember where your light source is.
[9:26] So this tree, we'll highlight right here.
[9:33] Like so.
[9:39] There we are.
[9:41] Now over on this side,
[9:43] the light's coming through here,
[9:44] so we'll highlight this side of it.
[9:51] Maybe a few little indications up through here.
[9:57] Now comes the fun.
[9:59] Now we can begin putting all the beautiful leaves
[10:02] and stuff on this, and just really make it come alive.
[10:06] So here, we'll take a little bit of the magic white,
[10:09] to thin our paint.
[10:11] One of the golden rules in this,
[10:12] this is a thin paint, we'll stick to a thick paint.
[10:16] So anytime you're painting over the top of paint,
[10:18] you need to have a paint that's just a little bit thinner.
[10:22] We'll take a little bit of Phalo green
[10:28] and a little bit of yellow,
[10:30] and we load the brush full of paint.
[10:33] And out light's coming through here,
[10:34] so we want the side of the tree
[10:36] to be a little brighter than the other side.
[10:39] All right.
[10:40] And then we begin pushing
[10:42] thousands of little leaves on here.
[10:45] They hide in your brush.
[10:48] There they come.
[10:53] Just a little on this side over here,
[10:55] because not as much light's gonna strike.
[10:57] A little's come through, but not as much.
[11:07] And look at that.
[11:08] In just a matter of a few minutes,
[11:09] we have a beautiful tree.
[11:13] Now maybe, this little tree over here,
[11:15] we'll put a little highlight on him.
[11:19] And once again, we're using a paint
[11:20] that's a little bit thinner, so that it sticks.
[11:28] First thing that you have to do when you're doing this
[11:31] is start with an oil paint that's very, very firm.
[11:33] Your base paint has to be extremely firm.
[11:37] If you start with a thin, loose paint,
[11:40] your gonna become a mud mixer.
[11:43] You have to have a thick paint on the base coat
[11:46] in order to get this thinner paint to stick.
[11:48] Now let's begin building some bushes and stuff in here.
[11:53] All right, look at that.
[11:56] You can do it, I know you can.
[12:01] There, look there.
[12:11] Okay let's move to this big tree in the front here
[12:15] and let's put some nice little leaves up here on him.
[12:20] You have to bend that brush.
[12:22] If the brush doesn't bend, you're not gonna get all these
[12:24] beautiful little leaves, these little actions that happen.
[12:34] Okay, maybe there's a nice little bush
[12:36] that lives right here.
[12:40] You know if you've ever walked through the woods
[12:41] early in the morning, all the little creatures are out here.
[12:44] They're all playing in the bushes and stuff.
[12:47] This is where they live.
[12:49] In all these bushes.
[12:52] Okay, let's put something on this side now.
[12:56] Nice little bush here.
[13:00] Just let your imagination run wild.
[13:04] Let your heart be your guide.
[13:09] In the time you sit around worrying about it,
[13:11] trying to plan out painting,
[13:12] you could have completed a painting already.
[13:15] Let it happen, let it happen.
[13:22] You know for so many years I was a traditional painter,
[13:27] and I would spend sometimes weeks just working on a picture,
[13:32] drawing it out, getting all the little sketches and stuff.
[13:34] And then I'd go back and spend maybe a month
[13:36] trying to fill in the blocks.
[13:39] And here, we let it happen.
[13:41] It comes right out of here, it's in you.
[13:43] And you put it on the canvas.
[13:46] Okay, let's see.
[13:53] Let's try this big ole tree here,
[13:55] put some nice little leaves on him.
[14:03] There we go.
[14:13] Yeah.
[14:16] Mmm.
[14:22] Okay, let's try, I've added a little permanent red with
[14:27] my color now, just to give us a little different value.
[14:36] Okay, and you know if we're going to walk through the woods,
[14:39] we need a little path.
[14:41] So let's take a little bit of Van Dyke brown here,
[14:48] and let's build us a happy little path.
[14:50] We're just gonna take the knife and let this path
[14:52] sort of just wander right down through here.
[15:01] There we go, just let it wander 'round, play and have fun.
[15:16] Okay, there we got us a nice little path.
[15:21] Now we need to highlight that path so I'll take
[15:23] just a little bit of white,
[15:28] and we'll just take it and barely touch the canvas here.
[15:30] Just enough so we can highlight
[15:32] where the sun's sparkling through here.
[15:37] There, see how easy that is?
[15:43] Let the paint break.
[15:49] And now in order to set the path down into the painting,
[15:53] we'll add some bushes that project up over the path
[15:55] here and there.
[15:58] Push 'em in.
[16:02] There we go.
[16:04] And you can see how that makes it literally drop
[16:06] right into the painting.
[16:15] Okay, let's put some more land aries in here.
[16:22] Maybe this nice little area's coming down through here.
[16:33] Just like so.
[16:43] Maybe we'll have some over here.
[16:46] Follow the angle of your land.
[16:52] There we go, there we go.
[17:05] There, now maybe, maybe, maybe,
[17:09] as we're walking through the woods here,
[17:11] maybe it rained last night.
[17:15] Maybe it came a nice little rain.
[17:17] There's little puddles.
[17:20] You know after it rains you always have little rain puddles.
[17:23] So let's take a little touch of the Prussian blue here,
[17:26] and we'll just make us a little puddle.
[17:29] And we put some Prussian blue on the brush,
[17:31] and we take here and pull downward.
[17:35] Just pull downward like so.
[17:42] There we go.
[17:47] Okay, see how easy it is to do?
[17:52] Now.
[17:54] Very gently, we'll come across this way.
[17:57] Just to give it a watery effect.
[18:01] Now if you want to, if you wanna put highlights in here,
[18:04] maybe you could take just a little touch
[18:06] of the Titanium white on your brush, and pull down.
[18:11] It'll give it sort of a sheen.
[18:20] There and then once again just come across just enough
[18:26] to give it a nice watery feel.
[18:31] You can overdo this part very easily.
[18:34] Okay, wash off the ole brush.
[18:45] Okay, now we can take a little more of the Van Dyke brown
[18:52] and we can just make little puddles out of this.
[18:54] Maybe it comes down like so, right through there.
[19:00] There we are.
[19:04] Okay, little puddle.
[19:08] And we just make this a little separate puddle back here.
[19:16] Just like that.
[19:22] Okay, now we take a little bit of brown and white,
[19:27] and we'll lay a little highlight on there.
[19:30] There we go.
[19:42] And in your world, you can do anything
[19:43] that your heart desires.
[19:51] My home is in Fairbanks, Alaska, and I spend a lot of time
[19:55] walking around the woods and talking to trees
[19:58] and squirrels and little rabbits and stuff.
[20:01] And I look at a lot of nature.
[20:03] And if painting teaches you nothing else, it'll teach you
[20:06] to look at nature with different eyes.
[20:09] It'll teach you to see things that have been there
[20:10] all your life, and you've never noticed.
[20:14] And if it does nothing else but make you enjoy nature,
[20:18] it's worthwhile.
[20:20] So look around, look at what we have.
[20:23] Beauty is everywhere.
[20:26] You only have to look to see it.
[20:28] Okay, I talk too much sometimes
[20:30] so we'll go back to painting here.
[20:33] Take a little bit of the thin white paint here,
[20:35] and we'll put some little water lines back in here.
[20:38] Okay, just like so.
[20:42] There we go.
[20:49] There, and maybe some little water lines right here.
[20:56] This is just a thin white paint and you literally just cut
[21:00] right into the canvas with it.
[21:03] And let's smooth that out.
[21:06] There we go.
[21:14] Okay, now while I have the knife here, I'm gonna take it
[21:17] and just cut a few little sticks here and there.
[21:20] And all we're doing is just literally cutting
[21:22] right through the paint.
[21:25] So the canvas shows through and it makes
[21:27] a multitude of little sticks,
[21:31] and these little sticks help create the illusion
[21:33] of distance in a painting.
[21:37] All different planes.
[21:46] Okay, now then, let's put some bushes and stuff
[21:54] right down here on the grass, on this soil area.
[21:57] There we go.
[22:03] There they are, there they are.
[22:08] They just live right here in your brush.
[22:10] And you just drop 'em right in.
[22:14] There.
[22:19] Okay, now let's take and do this.
[22:24] Let's put some land right down through here.
[22:29] Back to the Van Dyke brown, little bit of white.
[22:35] There we go.
[22:40] We'll add a little highlight on here.
[22:46] There.
[22:51] And we'll put a few little bushes and stuff right out here.
[23:00] See how easy that is?
[23:02] Okay, a few more little water lines in there.
[23:09] Just let 'em happen.
[23:14] Each week, we'll try to do paintings that are designed
[23:16] to teach you something different, something new,
[23:19] something exciting.
[23:22] Just to keep your interest going.
[23:24] Okay now let's play a little bit here.
[23:29] Let's have a happy little tree right in here.
[23:32] So we'll start with the Van Dyke brown, and we'll make
[23:35] his little trunk here.
[23:37] There he goes.
[23:43] Straight Van Dyke brown to start with.
[23:47] There and we just turn him out to give him little foots
[23:49] to stand on.
[23:53] There.
[23:59] And maybe he needs another little arm out here.
[24:01] So we'll just give him one.
[24:04] This is your creation, you can do anything here
[24:06] that you want to do.
[24:11] Just let it happen.
[24:16] There.
[24:18] Now, and we'll give him some little leaves,
[24:22] and we'll use some more of the Alizarin crimson,
[24:25] a touch of Prussian blue.
[24:28] Okay, and we need dark in order to show light.
[24:31] So first we'll put some dark on here.
[24:34] I'll put some happy little leaves here and there.
[24:41] When we see you next week I hope you have your
[24:43] almighty easels set up, the colors ready,
[24:47] your big brushes all primed and ready to go,
[24:50] and do an almighty painting with us here.
[24:55] Very quickly while I'm finishing this up I'll go over
[24:58] the colors, one more time, that we use.
[25:01] Titanium white, Phthalo green, Prussian blue,
[25:08] Van Dyke brown, Alizarin crimson, Sap green,
[25:15] Cad yellow, and Permanent red.
[25:19] Only eight colors that you need.
[25:23] Okay now let's put some highlights
[25:24] on this pretty little tree right here.
[25:28] Mmm, I used just a little touch more of the Permanent red
[25:32] on this one so he'll stand out a little more.
[25:37] See how easy it is to create a tree
[25:39] right here in your world?
[25:42] There we go.
[25:50] And maybe down here, maybe there's some nice little
[25:54] bushes and stuff happening right in here.
[25:57] There we go.
[26:04] All right, maybe right there another one.
[26:08] Okay, here and there I'm gonna put
[26:11] just a few little sticks and stuff.
[26:15] Like that.
[26:19] Just, once again, to build some distance in here.
[26:24] We want this to have a lot of depth in it.
[26:27] Maybe we'll cut in a few little sticks here and there,
[26:29] like so.
[26:35] You gettin' excited yet?
[26:36] You ready to paint with us?
[26:39] You can do it.
[26:47] Okay, and I think this painting's far enough along,
[26:54] we'll just sign this rascal.
[26:56] And I sign the painting with a script liner brush,
[26:59] a little bit of oil, and I use red paint, but whatever
[27:04] color you prefer.
[27:06] Okay, and we'll just sign that rascal.
[27:13] I hope you've enjoyed this painting.
[27:17] Next week we're looking forward to seeing you.
[27:20] I hope you have your brush ready.
[27:22] A dream in your heart that you want to put on canvas.
[27:26] And join us, right here, at The Joy of Painting,
[27:30] and you too can build fantastic pictures.
[27:35] You can take 'em from here, and put 'em on there.
[27:38] Until next week, happy painting, from all of us here.
[27:45] (slow acoustic guitar)
`,b=`YouTube transcript
Video ID: wDnLlywAL5I
Language: en
Captions: authored or unspecified

[0:01] - Well hello, hope you have your canvas set up
[0:03] and ready to go, I think we'll do another almighty picture.
[0:06] And today, I wanna do a ridge of mountains,
[0:08] rather than the jagged, sharp mountains
[0:10] that we've been doing,
[0:11] I wanna do a nice, smooth little ridge of mountains,
[0:14] coming down into a beautiful little lake.
[0:17] So we'll start off here
[0:18] with a little bit of Prussian blue on the big brush,
[0:21] there we go, just work it into the bristles,
[0:25] and we'll start right at the top of the canvas.
[0:31] OK, we'll put us a quick little sky in here,
[0:37] and we'll just move this paint around, let it work, play.
[0:41] Don't want a dead sky.
[0:43] (calming piano music)
[0:47] OK.
[0:49] Now I've already had the magic white on the canvas
[0:50] before I started so,
[0:55] we have that ready, there we go,
[0:57] just nice little sky with some life in it.
[1:00] Now I put just a touch of fatal green with my color,
[1:04] and we'll put in some water.
[1:11] There we go.
[1:14] And sort of bring all that together.
[1:18] We've left a little area open right here in the center,
[1:22] so that it'll look like a sheen of light
[1:24] coming across the water.
[1:27] OK.
[1:28] (brush splashing in water)
[1:31] (brush banging on metal)
[1:36] There you go, just redecorated your living room.
[1:40] Now, let's take a little bit of the titanium white,
[1:46] and just a little touch of permanent red in it,
[1:48] always like to put a little bit of pink into my clouds,
[1:52] just so it looks like a little sunshine.
[1:55] And we'll do some almighty big clouds here,
[1:58] just let em work off that brush,
[2:00] keep the brush moving.
[2:02] Keep it moving.
[2:04] You don't wanna set and grind one spot to death,
[2:06] all you'll do is end up with huge cotton balls in the sky.
[2:11] And we want nice fluffy clouds.
[2:14] Leave some of these areas dark,
[2:17] that'll end up being the shadows in your cloud.
[2:20] OK.
[2:22] There we go.
[2:24] Maybe we'll just have a little cloud
[2:25] floating around up in the sky up here.
[2:30] There we are.
[2:35] Now maybe another nice little cloud,
[2:40] with just a little touch more pink with that one.
[2:44] There, now he stands out,
[2:45] we just want these to be soft little clouds.
[2:53] OK.
[2:54] Now we'll take the big brush,
[2:56] and very gently hypnotize this,
[2:57] just work it a little bit, leave it alone.
[3:03] If you overwork it, you've killed your cloud
[3:05] and you've become a cloud killer,
[3:07] ooh, nothing worse than a cloud killer.
[3:10] There, fluff it up a little,
[3:13] and don't worry if you pull little streaks
[3:15] of paint out when you do that,
[3:16] because when you hypnotize it it'll go away.
[3:19] There, we'll just hypnotize the whole thing now.
[3:27] OK let's clean the brush.
[3:29] (brush splashing in water)
[3:31] There we go.
[3:35] And let's put one more little cloud in there.
[3:39] We'll just have him right here, just let him work around.
[3:46] If you're gonna separate these two clouds,
[3:47] you need the dark area in between,
[3:49] so don't kill all your darker area.
[3:56] There, there.
[3:59] Blend him in a little bit, fluff him up, then hypnotize him.
[4:06] OK.
[4:08] Now let's start working on this ridge of mountains here.
[4:11] And we're gonna take a little blue and brown,
[4:20] I wanna make sort of a grey color here,
[4:22] blue, brown and white.
[4:28] And your blue is a hundred times stronger than the brown,
[4:30] so use it sparingly.
[4:33] There we go.
[4:38] Now, let's just take in, lay us in a nice little ridge here,
[4:43] and we're really pushing this into the canvas,
[4:44] work it hard, working hard.
[4:47] Push, you're not gonna hurt that canvas.
[4:55] Just a few little bumps here and there on top.
[5:10] We really push that color into the canvas, there.
[5:15] Now we take the big brush, and we'll pull this downward.
[5:19] There we go.
[5:22] Get rid of all that excess paint.
[5:24] And it's blending with the magic white as you pull it down,
[5:27] and automatically it gets lighter in value
[5:29] toward the bottom.
[5:35] OK.
[5:43] OK, let's clean the old brush.
[5:46] (brush banging on metal)
[5:49] There we are.
[5:53] Now, let's take a little bit of white,
[5:55] and I'm gonna grey it a little bit,
[5:56] just to make it a little bit duller.
[6:05] And over here I'm gonna make up a little shadow color,
[6:08] and it's brown, white and a little bit of blue,
[6:14] so we can work back and forth
[6:15] between highlights and shadows.
[6:17] Little bitty, little little bitty roll of paint
[6:21] on your knife, almost no paint.
[6:24] Want this to be very subdued.
[6:28] There we go.
[6:36] There, just let this come on down,
[6:38] this should look almost like cliffs.
[6:43] Just with a light striking here and there.
[6:52] OK.
[6:59] Little bit of the shadow color played here and there.
[7:18] I think you'll find that, doing these kind of mountains,
[7:21] are a little more difficult than the other ones
[7:23] we were doing, where we used more paint.
[7:27] These here, almost non-existent when it comes to paint.
[7:33] OK.
[7:35] Then we'll take the big brush and diffuse this,
[7:37] make it even softer, push it even farther back.
[7:43] Like so.
[7:46] Really pushing back.
[7:54] OK maybe we'll put a little ridge
[7:55] coming right around here sorta.
[7:58] There we go.
[8:02] You could spend all day just playing with mountains,
[8:03] and it's a super, super way to learn,
[8:06] so, if you have an old canvas around take it,
[8:09] and just do nothing but mountains on it, the whole thing.
[8:13] It really, really will make friend of that knife
[8:16] by the time you're finished.
[8:19] And it'll help you to understand mountains,
[8:23] everybody's not as fortunate as I who can live in Alaska
[8:25] where you can look out your window
[8:27] and view mountains that most people only see in pictures.
[8:35] Alrighty, let's bring this down,
[8:37] maybe we'll just have it come right into here.
[8:45] There we go.
[8:55] OK, and if you don't have mountains outside of your window,
[8:59] you can buy a lot of books that have pictures in it,
[9:02] and examples, and after a very short period of time
[9:07] you'll begin making these up in your own mind,
[9:09] you no longer have to worry about copying,
[9:11] but copying is a way to start.
[9:16] In here we're trying to give you something,
[9:18] just sorta as a guideline to go by,
[9:21] and to make your own vision, and to put it on canvas.
[9:25] So don't worry about trying to copy exactly
[9:27] what I'm doing here, do what you wanna do,
[9:30] put your feelings into it, your heart, it's your world.
[9:39] OK.
[9:42] And maybe a few little things here and there.
[9:47] A few little shadows.
[9:58] And maybe we'll just change some of these angles
[10:00] here a little, there we go, I like that better.
[10:03] See it's your mountain, you can change it.
[10:06] You can change it anyway you want him to be.
[10:10] We'll put some little shadows here and there,
[10:11] just to make some little projections coming out,
[10:16] wherever you want em.
[10:18] OK.
[10:20] Now, let's diffuse this, lay it in the mist here.
[10:27] Very soft.
[10:36] Now I must take a little magic white, little magic white.
[10:41] We need a thinner paint,
[10:42] if we're gonna make some happy little clouds
[10:44] that just sort of float down over the mountain here,
[10:47] and maybe we'll just take this one right here,
[10:50] and just let him float right on down over the mountain.
[10:53] Now, it's essential that you have a thick paint on first,
[10:58] it is essential, absolutely necessary,
[11:01] or all you do is make mud here.
[11:04] OK maybe there's a little cloud
[11:05] just floating right down through there.
[11:12] OK.
[11:15] We just lay these clouds where we want em.
[11:20] Heck, maybe this one comes down over here too.
[11:25] Very thin paint, can't stress that enough.
[11:36] OK.
[11:39] Now, very, very gently,
[11:43] a hair just about touches, not quite, just about.
[11:48] There we go.
[11:49] And then we'll hypnotize it, ever so lightly.
[11:56] Super, super lightly, there.
[12:00] See how easy it is to put clouds
[12:02] just drifting right over the mountain?
[12:03] (brush splashing in water)
[12:06] OK.
[12:08] Now then, let's take, let's take a little sap green,
[12:15] and a little brown mixed together.
[12:23] OK let's see here, let's take,
[12:25] oh got a big old hair, and it ain't right here on the brush.
[12:27] If you get a hair on the canvas,
[12:29] just take the corner of your brush, and lift it right off.
[12:31] No big deal.
[12:33] If you take your finger and start picking
[12:34] you'll destroy your whole picture
[12:35] trying to get that one little son of a gun off there.
[12:39] OK now, we'll just lay in some color here,
[12:41] maybe I'll add just a little touch of blue to that.
[12:45] Yeah, I like that better.
[12:53] There we go.
[13:02] OK, now then, we can take and grab the hold
[13:06] of a little bit of that, pull it down,
[13:10] instant reflections, instant reflections.
[13:18] Pull that across.
[13:23] OK, now we can highlight a little bit,
[13:26] we'll take a little bit of the magic white,
[13:30] a little yellow and a touch of thalo green.
[13:34] Nice bright little green here.
[13:37] And, they'll lay in some nice little things
[13:40] happening all over the place.
[13:48] There we go.
[13:58] OK let's reflect a little bit of that color
[14:00] right down into the water here.
[14:18] OK.
[14:20] Now, let's mix up some blue, and some brown,
[14:25] and some sap green, and you want this very dark,
[14:29] it looks black.
[14:34] And, we'll use the almighty fan brush today,
[14:38] make some little trees in the background.
[14:41] We've used just about every brush here,
[14:44] so just show you how you can make
[14:45] some beautiful little trees with this.
[14:49] And you just sort of let em fall of the brush,
[14:51] back and forth, shape your tree, and lay em in there.
[14:57] Maybe we'll put one a little higher,
[14:58] that way we'll put the cloud,
[15:00] that little cloud that's floating in front of the mountain,
[15:02] we'll put him behind the tree.
[15:10] There we go.
[15:13] These are fun little trees to make, just let em happen.
[15:22] OK, maybe one over here.
[15:31] His top got bent a little bit,
[15:32] maybe airplane went too close and clipped him.
[15:36] In Alaska that's not unusual,
[15:38] they have some crazy old bush pilots up there
[15:40] that run over everything.
[15:44] Friend of mine brought back a 12-foot tree hanging on his,
[15:47] back of his airplane.
[15:52] OK maybe a little baby one over here.
[15:56] OK.
[16:00] Then we'll just pull that down into the reflections,
[16:03] very gently,
[16:06] like so.
[16:11] Alright.
[16:13] Now we'll take some magic white,
[16:15] and a little bit of Van Dyke brown,
[16:18] a little touch of yellow,
[16:21] just to make sort of a dirt color, sandy little color,
[16:24] and we'll lay in some little waterlines back here.
[16:28] And maybe we'll have a little beach comes down.
[16:33] There, and that just run around the corner.
[16:45] OK, there you goes.
[16:49] We'll take a dry brush, and we lift this just a touch,
[16:52] this is a thinner paint so it'll move on top
[16:54] of the other without destroying.
[17:00] OK, now just some straight magic white
[17:03] and we'll sparkle this up a little bit.
[17:19] OK.
[17:20] We'll put a few little sticks and stems here and there.
[17:32] OK, time to move forward in this picture.
[17:36] We'll mix us up a little more dark color.
[17:46] OK.
[17:50] Let's put some paint on the one-inch brush,
[17:55] and build us another tree here.
[17:58] Maybe we got a nice evergreen
[18:00] that's growing right up through here.
[18:06] There you go son.
[18:13] Just let him drip out of the brush.
[18:22] And we'll give him a little friend.
[18:30] There,
[18:32] we go, alright.
[18:37] Now, let's just put some little bushy trees
[18:41] right in here, like this,
[18:48] some little reflections underneath.
[18:53] Pull those down.
[18:59] OK.
[19:01] And we'll put some little trunk indicators,
[19:04] just here and there.
[19:12] Alrighty, now we can highlight that.
[19:17] And we'll throw a nice little green bush right here.
[19:32] There's a nice little tree.
[19:41] OK,
[19:43] there.
[19:44] We'll reflect those right down into the water.
[19:51] And give them a little pull.
[19:56] OK, little Van Dyke brown,
[20:01] and we'll put some soil in here,
[20:05] and we'll just sort of let this come around.
[20:15] Then a little brown and white, a highlighty,
[20:20] make him look like stones and stuff.
[20:25] Few little bushes that travel down, there we go.
[20:32] There we go.
[20:36] OK.
[20:39] And we'll put a little waterline under here,
[20:45] and this is still water so it has to be flat,
[20:47] all these lines have to be straight.
[20:50] Go anywhere you wanna go with them
[20:51] but they have to basically be straight,
[20:53] or your water's gonna run out of your picture,
[20:55] you're gonna have to get a bucket and put it under one end.
[20:58] Let's put a few little sticks here and there.
[21:04] Alright.
[21:06] Now, let's take some brown, and do this,
[21:10] shwip, just let this go.
[21:21] OK.
[21:25] Really pushing that into the canvas,
[21:29] really pushing it.
[21:32] OK.
[21:34] And we take a little white, a little brown,
[21:39] a little touch of blue into it here.
[21:43] And we'll just do this, shwoo.
[21:47] Turn it into some nice dirt area.
[21:54] OK.
[21:58] Now then,
[22:01] let us build a tree right here.
[22:06] Nice tree, there we go.
[22:12] This is just our dark color that we've used before,
[22:15] blue and brown and a little sap green.
[22:19] Maybe we need a little bush right in here somewhere,
[22:21] just to break it up.
[22:24] A little bush out here.
[22:28] Maybe we'll put a little bush right there.
[22:33] OK.
[22:35] Add in some little trunks.
[22:40] Like so.
[22:48] And we'll put some little highlights on here.
[23:05] OK.
[23:05] (brush splashing in water)
[23:08] (brush banging on metal)
[23:17] And, there we are.
[23:23] Some little things happening on this bush.
[23:30] OK.
[23:32] And we'll have some little bushes over here.
[23:54] Maybe we have a little path that sort of,
[23:56] just comes through here.
[24:00] Just a little dark area.
[24:10] That'll bring it down to it.
[24:17] OK, let's see what we can do here.
[24:22] Let's have a nice tree right here,
[24:26] heading on right up through here maybe.
[24:32] Put his other side on, don't want a one-sided tree.
[24:41] OK, they go down through here,
[24:44] just let him fall down wherever.
[24:51] Maybe a little one there.
[24:56] Give them a little highlight.
[25:04] OK.
[25:06] And we'll take our dark color,
[25:10] and we'll put some leaves on that little rascal.
[25:29] There.
[25:31] And we'll just take,
[25:35] a little more color, and we'll highlight these.
[25:53] (brush splashing in water)
[25:56] (brush banging on metal)
[26:05] Maybe we'll put a nice bright little tree right here.
[26:14] And a few little things down here.
[26:18] This sort of gives it the indication
[26:19] that the land works down that way.
[26:24] OK.
[26:27] Now I wanna put a few little sticks all throughout here.
[26:33] Like so.
[26:36] We're just cutting through the paint here.
[26:44] OK, now we'll take a dark color
[26:46] and I've used a thin oil here,
[26:48] and maybe we'll put a few little things that are just,
[26:50] sort of, playing around out like so.
[26:57] Just here and there, wherever you'd like em.
[27:00] This is your creation.
[27:11] OK, and we need to have a old dead limb here and there.
[27:20] OK maybe I'll just mix up a dark, dark green here,
[27:24] we'll just put a few little highlights on these trees
[27:26] to indicate little lights playing on those.
[27:30] There we go.
[27:41] (brush splashing in water)
[27:43] OK I think we'll sign that one,
[27:45] and that one should be just about finished.
[27:50] There we are.
[27:52] I really hope you have enjoyed this painting,
[27:55] I hope yours is complete also, if not,
[27:59] hope you'll be with us next time.
[28:01] And until we meet again, happy painting,
[28:04] thank you very much.
[28:05] (acoustic guitar music)
`,x=`YouTube transcript
Video ID: Q03YvknOVe0
Language: en
Captions: authored or unspecified

[0:00] - Hello, glad to see you again today.
[0:02] Thought today we'd do a happy little picture,
[0:05] maybe with the sunshine in the winter
[0:07] and just see what we can develop from there.
[0:10] So let's start out here with just a little touch
[0:13] of permanent red mixed with a little bit of yellow.
[0:17] I'm gonna put the sun in here,
[0:19] so we're gonna start right in the center,
[0:22] where we want the sun to be,
[0:24] and this'll end up being the aura that's around the sun.
[0:27] And I've already prepared the canvas with Magic White
[0:29] so it's nice and wet.
[0:32] Now we're just gonna start little X patterns here,
[0:35] and we want this to get darker and darker
[0:39] and darker as it works out.
[0:41] Here I'm using a little bit of alizarin crimson and white.
[0:45] Work your brush back and forth, keep it moving.
[0:48] It's much, much easier to blend these colors
[0:50] when they're like this, and then drawing a big circle.
[0:54] Now, we'll take a little bit of alizarin crimson
[0:58] with a touch of Prussian blue into it.
[1:01] Make sort of a, like a lavender color.
[1:05] There we go.
[1:09] And just work it around.
[1:12] (light music)
[1:16] Okay, see how that just comes right together.
[1:20] And let's put just a little touch of this pink
[1:23] running right down like so.
[1:30] We'll just bring all this together.
[1:33] Maybe a little bit here,
[1:34] maybe have a little touch of water.
[1:39] Okay, now let's go into a mixture of Van Dyke brown,
[1:44] Prussian blue and a little bit of white
[1:48] to give us a gray effect, and we'll work that,
[1:50] also starting from here and working downwards
[1:53] so that it gets lighter and lighter
[1:55] as it gets toward the sun.
[1:58] Too many times in paintings, we try to avoid the sun.
[2:01] And the sun's a beautiful thing to paint.
[2:03] It's part of nature, you see it just about everyday.
[2:05] Sometimes we don't see it everyday, but just about.
[2:09] Okay, now we'll take the almighty brush here
[2:13] and we're gonna begin hypnotizing this,
[2:15] and do it in little X strokes back and forth.
[2:18] There we go.
[2:21] And we just wanna blend this color out
[2:22] so it's nice even distribution of color
[2:24] by the time we're finished.
[2:28] Always working with a clean brush
[2:29] from the lightest area outward, okay.
[2:38] And it's beginning to come together now.
[2:45] And while the brush is dirty,
[2:46] we'll go ahead and put in a little bit of water,
[2:49] and I'm using the same gray that I used in the sky.
[2:55] And you don't wanna cover up this area
[2:57] if you want a nice paint reflection coming across the water.
[2:59] You wanna leave this area open.
[3:06] And we'll bring this across, gently hypnotize it.
[3:17] We'll clean the almighty brush out here a little bit.
[3:23] Now you can work this as many times as you want,
[3:25] but the big thing is to always start
[3:27] with a clean brush and work outward.
[3:33] Okay, there we go.
[3:36] See, just having nice gradual blending of color.
[3:39] We will hypnotize it a little.
[3:43] Now we'll take a one inch brush,
[3:45] fill it full of titanium white.
[3:48] And we're going straight into the canvas
[3:49] and we're gonna push very hard.
[3:52] Just push this value right into the canvas like so.
[3:57] And if you wanna give some little indications of sunlight,
[3:59] you can just gently put a few of these in.
[4:03] Just here and there, okay.
[4:08] Now we'll take out all the excess loose paint.
[4:11] The value remains in the canvas.
[4:13] Now we can hypnotize that.
[4:18] And we don't want these to be bright and distinct.
[4:22] They'll still show, even though
[4:23] you hypnotize them over and over and over.
[4:29] Okay.
[4:42] Okay, now if you got that done,
[4:43] we can move right along here.
[4:45] We'll take a little bit of the alizarin crimson,
[4:50] a little blue, mix it together here.
[4:54] And we're just gonna make an indication
[4:55] of some nice little hills and mountains
[4:58] way back here in the background.
[5:03] There we go, just lay them on with a knife.
[5:05] We're using very, very little paint.
[5:07] Scrape off all the excess.
[5:16] And we'll just let it run right on out.
[5:23] Okay, with a big brush, we'll pull that down.
[5:29] And with a large brush like this,
[5:31] you can make all of your highlights
[5:33] and shadows in the mountain just by using brush strokes.
[5:39] We're not gonna worry about highlighting this
[5:42] with white like we normally do.
[5:46] We just want sort of a silhouette back here.
[5:51] Now we'll take a little bit of the grayish color.
[5:55] Maybe just a touch more brown.
[5:58] And we're gonna put in some little foothills
[6:00] that are way back here.
[6:03] Just take the big brush and tap the canvas.
[6:07] There we go.
[6:19] And we'll take a little bit
[6:21] of that same color and pull downward.
[6:23] This will make our reflections.
[6:34] And I'm gonna lift slightly upward,
[6:36] just to give it the appearance of little trees
[6:39] way back in the distance, far, far away.
[6:49] Okay.
[6:59] Okay, now, we'll just hypnotize this just a little bit
[7:01] to give it a watery effect.
[7:05] Now a little bit of Magic White.
[7:07] A little bit of Magic White.
[7:10] And to it I'm gonna add just a little bit of pink.
[7:15] That's a little too much, so we will just tone it down.
[7:17] There we go, that's better.
[7:21] And we'll cut us a little water line back here.
[7:23] We don't want this to be bright and distinct.
[7:25] We just want a gentle little water line
[7:27] to break up these two dark areas.
[7:35] Act just like you're trying to cut right through the canvas.
[7:37] Go straight into the canvas.
[7:47] And alrighty, you have the impression
[7:49] of just a beautiful sun, little hills in the background,
[7:52] foothills in the foreground.
[7:54] Now let's come forward and see what we can make.
[7:58] Think we'll take a little alizarin crimson
[8:01] and a touch of sap green mixed together.
[8:04] Make a very warm brown color here.
[8:06] And we use the almighty fan brush.
[8:09] And let's come down and let's just have some
[8:12] little grassy areas right along in here.
[8:15] There we go.
[8:21] Now when you're doing this at home,
[8:23] if you find that you end up with a bunch of smiley faces
[8:25] because the fan brush is curved,
[8:27] use the corner of the brush.
[8:30] Just use the corner.
[8:34] Don't end up with a picture
[8:35] full of smiley faces all at one time.
[8:38] Supposed to make you happy, but we don't
[8:39] wanna show all the smiley faces, okay.
[8:45] Now we'll take some titanium white.
[8:51] And begin laying in a little snow here.
[8:55] And the angle that you lay this in is very important.
[8:59] We want this to show a little coming down,
[9:01] little gradual decline.
[9:03] So we're gonna pull it in that direction.
[9:08] And let your paint break,
[9:13] so you have all these open spots,
[9:14] and the color we put here ends up being shadows.
[9:26] Okay, then we can work the
[9:30] little grassy areas right into that.
[9:35] And you have those travel with the lay of the land also.
[9:38] Let them sort of flow down like that.
[9:45] Okay.
[9:49] Let's clean off a little spot to work here,
[9:52] and we'll make some almighty trees.
[9:55] Wanna take some Van Dyke brown, Prussian blue.
[9:58] Little phthalo green and a little touch of alizarin crimson.
[10:04] You want a very dark color, it should look black.
[10:11] And let's see here, we're gonna load the brush full of paint
[10:14] and let's put a happy little tree, let's see, let's see.
[10:20] Right here, and we sort of just touch the canvas
[10:26] to give us a guide, then we're gonna push upward.
[10:30] Make a little different kind of tree today.
[10:35] Just push.
[10:43] Okay, let's give him a little friend right here.
[10:47] And we push.
[10:51] Just push those limbs right out of the brush.
[10:58] And maybe we'll put some nice little snow-covered bushes
[11:01] in here too, so we'll just lay those in.
[11:03] You need the dark in order to show the light.
[11:08] Put your dark color in so
[11:09] the light will show up when we put it on.
[11:17] Okay, now we'll just cut through the paint
[11:21] to give some little trunk indications here and there.
[11:28] Now we take a little bit of Magic White,
[11:32] and we'll mix that with firm white
[11:34] and a little touch of the blue
[11:35] that we used to make the tree.
[11:39] And we'll highlight this tree,
[11:42] and we see our light source, so we just push.
[11:47] We want this side of the tree to be a little bit brighter.
[11:50] There we go.
[11:55] Little bit for over here.
[12:10] Okay, now let's highlight some of these bushes.
[12:12] I'm gonna take a little bit of Magic White
[12:14] with the firm white, little touch of permanent red
[12:18] just so it sets off a little bit better.
[12:21] Okay, now we'll push off some
[12:23] nice little snow-covered bushes.
[12:27] So very gentle touch, just enough
[12:29] to get the paint to come off the brush.
[12:35] Here's a nice bush, we'll put some snow on him.
[12:45] When you're doing this, try to do one bush at a time
[12:48] and have him finished before you go to another one.
[12:52] Otherwise, they'll just sort of run together
[12:53] and you'll lose track of them.
[12:57] Okay, then we'll put a few little stems here and there.
[13:03] All we're doing is cutting right through the paint.
[13:12] Okay.
[13:17] Now, let's have some snow coming this way.
[13:22] Change these angles a little bit
[13:25] so that we have different planes in this picture.
[13:30] And maybe we'll bring that down just a little more.
[13:38] We'll have a little angle coming right down like that there.
[13:48] Okay, seems like I remember there was a old farmer
[13:51] that used to live here and he built a barn right here,
[13:53] so let's put a nice barn here.
[13:56] And it's better to sort of scrape it out
[13:59] to get all the loose paint off
[14:02] so the other paint will stick.
[14:03] It's also a nice way to lay it out.
[14:06] Give you an idea of your perspective and what you're doing.
[14:08] Just basic shape.
[14:18] Okay, so we'll take a little Van Dyke brown,
[14:22] and let's lay this eave here in like so, there.
[14:32] And we'll put some snow on the roof.
[14:35] Just come down and let it drop.
[14:38] We wanna give it the indication that it's sort of,
[14:42] one of these roofs had come over and dropped.
[14:49] And I'm gonna firm that back edge up.
[14:52] Over, down, over, down, these strokes are very important
[14:56] to make it look like the roof has that angle in it.
[15:02] Okay.
[15:06] Gonna put some wood in here, just like so.
[15:16] There we go.
[15:21] Then some over here.
[15:23] Gotta have a side on the barn.
[15:24] Don't want the cows to get out.
[15:35] Okay, now, let's put a little bit of snow
[15:38] on the other side of the roof over here,
[15:43] and we can firm this up.
[15:51] And maybe a little bit right along through here.
[15:59] A little more Van Dyke brown,
[16:00] and we can lay some shadows in there.
[16:04] There.
[16:09] Okay, tell you what, let's give him a little shed out here.
[16:13] Farmer always needs more room,
[16:15] so we'll put him a little shed.
[16:23] Little more of the brown.
[16:28] See how easy that is, just let it happen.
[16:34] And we need a little place for him to put the hay up here.
[16:42] And you can create any kind of barn you want here.
[16:44] It's just a matter of working with a knife,
[16:47] letting it happen, and having something inside
[16:50] that you wanna put on canvas.
[17:02] Okay, let's put a nice bush here,
[17:06] pushing back into the bushes.
[17:08] Maybe this old farmer, maybe he took up drinking
[17:11] a little bit too much, you know,
[17:12] we all have our problem sometimes.
[17:14] And the woods are sort of creeping up
[17:16] and fixing to eat up his barn.
[17:20] Okay, we'll take a little more of the titanium
[17:23] and the magic mixed together,
[17:25] and we'll put some highlights on these bushes.
[17:28] There we go.
[17:33] Okay, and here and there, we have some more
[17:37] of the little weeds that are growing around.
[17:40] Just use the corner of the fan brush
[17:41] till you make friends with it.
[17:45] Maybe there's some growing right along
[17:46] the edge of this little hill, okay.
[17:55] Now then, let's put an almighty tree in here.
[18:02] Let's come right along in here.
[18:05] Big tree, he just goes right on off the canvas.
[18:17] There we go, now we're getting some size to it.
[18:41] Okay, there we are.
[18:48] Now we can take him, put some highlights on him.
[18:57] Little bit of the magic, a little titanium,
[18:59] and then we're gonna put some blue in there.
[19:01] Want this to look cold.
[19:02] This picture should have both
[19:03] warmth and coldness in it cause we have
[19:06] the sun with all the warm colors coming right through here.
[19:11] So let's do this.
[19:14] I'll just put some nice little highlights here.
[19:20] Just let the light bounce through there and play.
[19:36] Okay.
[19:38] Now we can continue with our snow here a little more.
[19:41] And let's bring this one, have a different plane
[19:44] coming down through here.
[19:48] Just let it come right through.
[19:54] There we are.
[19:58] Okay.
[20:07] Just let that knife right down the angle
[20:09] that you want to show that your land is flowing
[20:15] and try to let the paint break.
[20:25] Okay.
[20:29] Let's take, maybe we have a few more little bushes in here,
[20:34] that are growing down the hill.
[20:39] Just push these in like so.
[20:52] Okay, a little more of the magic.
[20:57] Remember, thin paint will stick to a thick paint,
[21:00] so you need to thin your paint just a little bit.
[21:05] Okay, just a little touch more.
[21:09] And we'll put a nice little bush, it's standing right here.
[21:27] Okay, maybe another one right along here, there we go.
[21:32] Just sort of let your imagination wander around.
[21:34] Wherever you think there might be a little bush or tree,
[21:37] put it in, this is your world.
[21:41] Okay, maybe we'll take, put in some little trunks here
[21:46] of a little tree, that just about has nothing on it.
[21:51] Just the trunk left.
[21:54] Old Man Winter's taken all of his leaves away.
[22:01] You know, in Alaska, we have in the winter,
[22:04] ice fog, which settles on every little branch, everything.
[22:08] Oh, it's so beautiful.
[22:10] It just looks so pretty.
[22:12] It's almost like something out of a fairy tale book.
[22:16] That's probably one of the reasons
[22:17] I paint so many winter pictures,
[22:19] cause in Alaska we see a lot of winter, so.
[22:24] It's a good way to learn how to use the equipment.
[22:27] And we're trying to give you ideas here,
[22:29] trying to teach you a technique, and how to use it.
[22:33] There.
[22:37] Maybe another little thing coming up through here.
[22:43] Okay.
[22:45] Now maybe this old farmer, before he left the farm,
[22:47] maybe he had a fence that went
[22:49] right along here, had to keep the cow in.
[22:55] And make up these little stories as you paint.
[22:57] It really helps give you ideas.
[22:58] It makes your imagination work,
[23:00] and imagination is the key to painting.
[23:04] What to paint is much, much harder than how to paint it,
[23:07] and we've showed you how to paint it.
[23:09] Now the imagination comes from you.
[23:15] And maybe we can see the top of
[23:16] one more little post right there.
[23:19] Okay, and we'll take a little bit of color, a little white,
[23:23] and we'll put a little highlight on these, just like so.
[23:33] Okay, and a little snow laying on top.
[23:41] And let's have a wire running along these fence posts
[23:45] that just comes riding down like so.
[23:51] And all we've done here is just
[23:52] literally scratched through the paint.
[23:55] Okay.
[23:57] And you know, they always have a few little bushes
[24:00] that grow around the posts.
[24:01] When you're cutting the grass,
[24:02] you can't get up next to the post to cut it,
[24:04] so usually always have something around here.
[24:08] And maybe there's just a touch
[24:10] of very, very light blue, very light.
[24:13] We can just put some little indications
[24:14] of shadows back here, just a little bit.
[24:27] Okay, now let's put some highlights on the little bushes.
[24:32] There we go.
[24:37] And look at there.
[24:41] Just make those sparkle in the sun.
[24:50] And here and there, a few more little weeds,
[24:52] sticking through the snow.
[24:55] You can sort of fix it up none,
[24:57] but don't piddle it to death.
[24:59] Don't keep playing with it.
[25:01] One of the hardest things is when do I stop.
[25:03] Do I go a little bit farther?
[25:06] And you can sit and look at a picture long enough,
[25:08] and you're gonna find something else you wanna do,
[25:10] and you're gonna piddle it and piddle it,
[25:11] and soon, all you're gonna have's a heavy mess,
[25:15] so learn when to stop.
[25:24] Just a few little sticks here and there.
[25:33] And let's put just a little touch of highlight on this.
[25:38] Little happy sunlight shining through there, there we go.
[25:45] See what you can do in just a matter of a few minutes?
[25:49] And we knew you could do it.
[25:53] Okay, and when you do this at home,
[25:55] you have unlimited time and you can take
[25:57] and put a lot more detail into it.
[26:00] You can work out a lot of things.
[26:03] Here, we're just trying to give you an idea in 30 minutes,
[26:05] so I think I'll just sign this.
[26:08] We use a thin oil with a little bit of color on it,
[26:14] till we get it just about the consistency of water.
[26:18] Very, very thin, and with that then,
[26:21] you can just take and write your name.
[26:27] Takes as long to write your name
[26:28] as it does to paint the picture nearly.
[26:38] Maybe a little more paint right there.
[26:43] And I will advise that you date your painting
[26:44] so in years to come, as you look at them,
[26:48] or as your grandchildren look at them,
[26:50] you can tell what year this was painted in,
[26:52] and brings back a lot of happy memories.
[26:58] Okay, now I'm gonna take just a little more of the oil
[27:01] and put with a little bit of brown,
[27:05] and maybe we'll put a... there,
[27:08] because this is a thin slick paint,
[27:10] it can go right over the other paint without messing it up.
[27:14] Adding a few little sticks here.
[27:21] There we go.
[27:27] And just moving right along.
[27:30] Okay, see I told you not to piddle it,
[27:32] and I'm sitting here and I'm starting
[27:33] to piddle it to death, so I think
[27:35] we'll just lay the brush down and call that one finished.
[27:38] And we hope you enjoyed the almighty sun,
[27:41] the barn, the beautiful painting done today.
[27:45] And you can do it too.
[27:46] Until we meet again, happy painting.
[27:50] (light guitar music)
`,S=`YouTube transcript
Video ID: 4E35-8x_y04
Language: en
Captions: authored or unspecified

[0:00] - Welcome back, hope you have your canvas set up
[0:03] on your almighty easel and you're ready
[0:04] to paint along with us.
[0:05] Thought today we'd show you how to do snow.
[0:08] And we've had several requests,
[0:09] people asking us how do you put snow?
[0:11] How do you make it look like the snow is falling?
[0:14] So I thought that's what we'd do today.
[0:15] So we're gonna start out here with a little
[0:17] Van Dyke Brown and Prussian Blue,
[0:19] and we'll very quickly throw a little Sky in here.
[0:22] And we're looking for a sky that's sorta gray, overcast.
[0:27] So we'll sorta test it and see how it looks,
[0:29] there we go.
[0:30] That's a nice gray color, sort of a blue gray.
[0:34] We've already got the canvas covered with the Magic White,
[0:39] so we're actually blending color right here on the canvas.
[0:42] We're mixing a painting.
[0:45] Mixing a painting right on the canvas.
[0:52] Okay.
[0:56] Maybe just a little bit more right here.
[1:01] Put some life in this sky.
[1:04] If it's snowing, we have all kinda things going on.
[1:09] And we'll gently hypnotize a little bit.
[1:13] Don't want to kill all the little actions
[1:14] that we've created in here.
[1:18] And we'll take a little more of the same color
[1:21] and let's just lay in a little bit of water.
[1:31] There we go.
[1:34] And we might as well make some almighty mountains today too.
[1:36] What the heck.
[1:39] If you learn how to make mountains using this knife,
[1:41] the knife will probably never give you any more problems.
[1:46] Okay.
[1:53] (brush thuds)
[1:56] Okay, let's take some Titanium White
[2:02] and maybe we'll just lay in some nice clouds
[2:05] that are just laying around up here in the sky having fun.
[2:09] Dropping snow on us, that's what they're doing.
[2:13] There we go.
[2:16] I'm using quite a bit of paint here.
[2:20] And you can put these at any angle you want 'em.
[2:29] Probably at this point, you're looking at that,
[2:31] and saying "my God, he's got a mess going there today."
[2:34] But hopefully it'll come out.
[2:41] Okay.
[2:47] Now we'll take the almighty brush,
[2:50] and we're gonna start pulling this.
[2:53] Look at that.
[2:56] Instant clouds.
[3:00] But you need a good firm paint to do this,
[3:02] otherwise it's just gonna smear on ya.
[3:09] Okay, maybe we'll take, put a little gray
[3:11] underneath some of these.
[3:15] Take a little blue, brown and white.
[3:23] Okay, and just here and there,
[3:24] we'll lay a little touch of gray.
[3:34] Just to give it sort of an overcast feeling.
[3:42] Okay, now let's work that in.
[3:50] There we go.
[4:02] Okay, let's build an almighty mountain.
[4:04] We'll take some blue and some brown,
[4:06] a little touch of Alizarin Crimson.
[4:13] And let's put us a nice mountain right up through here.
[4:20] Maybe a little peak like so,
[4:26] and we'll just let that run right on off.
[4:33] Okay, with the big brush, we'll pull that down.
[4:46] Okay, a little bit of Titanium White,
[4:49] and we'll lay some snow on here.
[4:55] Little bit back on this peak.
[4:58] There we go.
[5:01] Let this paint break, most important that it break
[5:03] and let some of these dark areas show through.
[5:13] Maybe another little peak over here.
[5:16] It's your mountain,
[5:17] so you can do whatever you want to with it.
[5:20] Let these peaks just occur.
[5:26] Okay, we'll take some blue and white,
[5:31] make us a shadow color.
[5:39] There we go, and let's lay some shadows in here,
[5:43] very lightly, just want that paint
[5:46] to barely touch the canvas and to break
[5:48] as it comes floating down through here.
[5:54] Okay, we'll give this little peak his own shadow.
[6:03] And we'll lay a few little shadows here and there.
[6:07] Oh, I see a little ridge right there,
[6:09] there he is.
[6:17] Okay, maybe we'll just swing that around a little.
[6:25] Okay, now let's diffuse this real good,
[6:27] and all we're doing is tapping,
[6:28] don't want to destroy it.
[6:37] There we go.
[6:41] Now maybe we'll put another range of mountains in here.
[6:44] We'll use the same colors, but make 'em darker
[6:47] to give the impression that it's closer to us.
[6:53] Okay, let's have one coming right up through here.
[7:00] And we'll let him come over, maybe like so.
[7:07] And let him fall down.
[7:15] Okay, take off all the excess paint.
[7:23] And here's what's nice,
[7:23] if you want to change a shape, change it.
[7:28] There.
[7:30] I like that a little bit better.
[7:34] Okay, we'll pull that loose paint down.
[7:51] Put some snow on him.
[8:09] Okay, let's go right over here
[8:11] and let this one come down, work its way down.
[8:15] Maybe we'll just bring these together.
[8:21] See how you can put mountains together?
[8:24] Unbelievable amount of power that you control,
[8:26] to be able to move mountains and to change them.
[8:36] Okay, we need some highlight right here,
[8:40] and let's put some shadows in.
[8:44] See, another decision you have to make,
[8:45] is this peak on this side or that side?
[8:48] And if you want to push it back,
[8:49] all we have to do is come down through here,
[8:52] bring that shadow right through it,
[8:53] and automatically he goes into the background.
[8:59] There.
[9:13] Okay.
[9:22] Okay, then we'll diffuse this one.
[9:40] This feels nice and soft.
[9:42] Okay, let's throw in a few little trees back in here,
[9:46] and we'll take a little brown and a little touch of blue,
[9:49] and some white.
[9:54] And we want this to be very soft.
[9:57] So we're mixing a color that's
[9:58] almost the same color that we've used here,
[10:01] and sorta lay it up against here
[10:03] and taste it, test it, make sure it works.
[10:09] And we'll put a little tree right there.
[10:17] Look at that little rascal,
[10:17] just jumped right off your fan brush.
[10:20] And we'll give him a little friend,
[10:24] there we go.
[10:39] And maybe over here, one's a little bit larger.
[10:43] Maybe he got a little more light when he was a baby.
[10:45] He grew a little taller.
[10:51] There we go.
[10:54] And we'll just take and pull up some
[10:56] little grassy areas running back,
[10:58] we'll just have it run right on down like that.
[11:02] There.
[11:04] Okay, now let's put a little bit of snow underneath him.
[11:08] Using just a little bit of white.
[11:33] Okay.
[11:41] And let that paint break, very gentle touch
[11:44] just enough to get it to come off the knife.
[11:51] And we'll take a little bit of this color,
[11:52] and we'll begin deciding where this ends.
[11:56] So we'll just lay some little banks right there.
[12:01] Just like so.
[12:06] Then we'll catch ahold of just the bottom of that,
[12:09] pull us a little touch of reflection down into here.
[12:20] Okay, I want this to look misty,
[12:22] so I'm gonna tap back here.
[12:24] Just tap it and tap it and tap it.
[12:26] Lift it a little bit,
[12:28] just to create the illusion of mist
[12:31] back in the distance.
[12:34] Okay, let's come a little bit further closer,
[12:36] we'll add a little more color,
[12:37] a little brown, a little blue.
[12:40] And maybe we'll put a tree here.
[12:52] Okay.
[12:57] And let's give him a friend too.
[13:04] Everybody needs a friend.
[13:15] Okay.
[13:17] Now, we'll come just a little closer,
[13:19] so I'm gonna darken the paint just a little bit more.
[13:22] As you come closer, let these trees get darker and darker.
[13:41] Maybe there's one right here in the front.
[13:48] Just a little one.
[13:55] Okay, little areas of grass in here.
[13:59] Okay, now, let's take a little bit of the Magic White,
[14:03] put us a little water line into here.
[14:07] And we'll just let this sorta work around the corner.
[14:16] Okay.
[14:25] Little Magic White just to create
[14:27] the little water line here.
[14:33] And we got another little hill coming right down, there.
[14:52] Okay, we'll pull this one down just a little touch.
[15:03] Take the Magic White.
[15:19] Okay, now let's do something on the other side here.
[15:26] And let's put a little tree right there.
[15:31] Here's far away too.
[15:49] Okay.
[15:59] Okay, let's give him something to stand on out here.
[16:02] Maybe we'll have
[16:04] a little cliff, just sorta hanging around.
[16:08] There.
[16:16] Then we need a little bit of snow on top.
[16:20] Like so.
[16:22] Let that come all the way out there.
[16:27] And maybe then we have a larger hill that's coming down.
[16:32] There we go.
[16:35] Pull a little bit of that down.
[17:09] Maybe over here, there's a place that just sorta breaks off,
[17:13] snow doesn't hang right there.
[17:14] Just sorta, there we go.
[17:18] Okay.
[17:21] Put us some water lines around this.
[17:29] Let's take a little bit of white,
[17:31] mixed with a little Magic White here,
[17:32] just to make it a touch thinner.
[17:39] And just bring it right on around.
[17:43] There.
[17:46] Just some snow laying right along in here,
[17:48] up against that little cliff area.
[17:56] Okay, and then we can bring this right on down.
[17:58] Make this like a little cove there.
[18:10] Any way you want one of these little coves,
[18:13] really all you have to do is just sorta lay a shadow in.
[18:15] We could put another one in here for example,
[18:17] if you wanted to.
[18:20] And then bring it down,
[18:21] so it just comes right down to it.
[18:26] There.
[18:27] Okay.
[18:31] Now we'll put just a few more little trees
[18:34] right in here.
[18:37] These are getting closer,
[18:38] so they're beginning to get quite a bit bigger.
[18:45] Just drop them in real quick.
[19:01] Need a lot of paint on your fan brush
[19:02] when you're doing this.
[19:06] Okay, some little grassy areas.
[19:12] And a little more paint on my brush.
[19:19] Let's do an almighty tree right here.
[19:30] Okay.
[19:33] This fan brush is a fantastic little piece of equipment.
[19:36] Practice with it, use it, make friends with it.
[19:38] It'll do things for you that you wouldn't believe.
[19:43] But it's like everything else,
[19:44] you really need to practice with it.
[19:46] It has to be a friend.
[19:50] See, maybe you want to put another little tree right here.
[19:54] That's all there is to it.
[19:55] Just decide where you want him,
[19:57] let him fall in.
[19:59] And we'll put some little grassy areas
[20:01] working their way down.
[20:02] This helps shield the lay of the land.
[20:19] Okay, let's go back over here a second,
[20:20] and I'll throw a couple more little things right in there.
[20:24] Okay.
[20:26] Wash the brush,
[20:31] now let's take a little bit of the thin oil,
[20:34] mix it with some brown, just a little touch.
[20:39] And we want this quite light,
[20:40] don't get it get too dark on ya.
[20:42] And we'll just put in a few little sticks
[20:44] that are showing here and there.
[20:49] And the father back they go,
[20:50] the smaller they should get.
[20:53] And the lighter in color.
[20:58] Maybe back in here somewhere,
[21:00] just some kind of little thing working around.
[21:05] There.
[21:09] Okay.
[21:14] There.
[21:20] And we can take the knife and
[21:22] cut a few little sticks in here and there.
[21:38] Just a few small ones.
[21:40] Okay, maybe we'll go up here
[21:42] and sharpen that point a little touch.
[21:52] Okay, let me wash out the fan brush here.
[21:56] And we'll show you how to make some
[21:57] happy little snow on this.
[22:02] I'm gonna take some Magic White,
[22:04] and thin it even a little bit thinner,
[22:06] using some paint thinner,
[22:09] so it's very, very thin now.
[22:11] It's almost the consistency of water.
[22:17] And if I may, I'm gonna lay the palette down,
[22:19] so I can use both hands,
[22:21] and we'll just work off the palette laying right here.
[22:25] Now we'll take the fan brush is loaded
[22:29] with a lot of very loose paint.
[22:32] We're gonna take here and just flip this against,
[22:36] so it flips little globules of snow up here.
[22:40] Can you see what's happening?
[22:42] That's all we're doing is just
[22:44] flipping it right against the fan brush.
[22:50] Isn't that something?
[22:52] Used to spend weeks and week sitting around
[22:54] with a one haired brush
[22:55] trying to make all these little snow things fall.
[22:58] And all you gotta do is just flip this brush.
[23:00] Bend the bristles and make it pop.
[23:04] And we can create all the snow we want.
[23:06] Let's put a little bit more on here.
[23:12] There we go, look at all that snow.
[23:15] Got your heavy coat out yet?
[23:16] It's getting colder.
[23:24] Okay.
[23:26] Really suggest you do this in an area though
[23:28] where you're not gonna cover the whole house with snow.
[23:33] Nothing's gonna make your husband or wife madder
[23:34] than coming home and having a snow covered dinner.
[23:39] So, be careful where you do this.
[23:41] It does splatter and go all over the place.
[23:48] And you can get carried away,
[23:49] and finally just cover up the whole picture with snow.
[23:58] Nice, even distribution, there we go.
[24:05] Little bit more paint,
[24:06] I need some more right in here.
[24:11] And you can learn to control this very well.
[24:13] You can have it hit just about anywhere you want,
[24:15] you can make little bitty ones or bigger ones,
[24:18] according to what type of snowflakes you're trying to make.
[24:23] This old magic knife does a little bit of everything.
[24:25] You just have to make friends with it and use it.
[24:31] Now I'm getting into some real fine snow.
[24:33] This is also a nice way to create a misty effect.
[24:38] You can keep working an area with
[24:39] very fine little globules of paint,
[24:42] and it makes a beautiful little misty area,
[24:44] if you ever wanna do that.
[24:51] Once again, this is Magic White,
[24:52] thinned even thinner with
[24:54] a little bit of odorless paint thinner.
[25:06] Okay, let's go back up here
[25:07] and put just a little more in the sky.
[25:16] Okay, I think that's enough to give you the idea
[25:18] of how to do it.
[25:20] (water splashes)
[25:26] Find my almighty palette again.
[25:29] Okay.
[25:32] Maybe, see one little area here
[25:35] I'd like to tinker with a little bit.
[25:37] I'd like to put a tree right here
[25:39] to sorta kill this area.
[25:41] I sorta left it open, so that's no problem.
[25:44] You just go back and put you one more little happy tree in.
[25:49] And then you'll have to put some snow over the top of him
[25:51] to make him fit in to the picture a little better.
[25:58] Okay.
[26:02] And that's basically how we make snow.
[26:04] So let's take
[26:06] and put a few more little sticks here and there.
[26:13] Just let them go.
[26:28] Just let that, that just sorta blends right into the mist
[26:31] and just sorta disappears into the background.
[26:35] Okay.
[26:36] Now, maybe we'll put just a stick or two here.
[26:48] Just a little bit.
[26:49] Oop, put a little tree here that
[26:53] just lost all his little leaves and stuff.
[26:57] Cold weather's got him.
[27:00] This reminds me a great deal of my home,
[27:01] it's quite often we see these areas
[27:05] where we can see the almighty mountains and all the mist.
[27:08] Beautiful mist.
[27:16] There we go.
[27:18] And we can just take,
[27:19] put a little touch of highlight on that.
[27:24] Little snow laying here and there on the tree.
[27:33] Okay.
[27:35] I think we're gonna call that one finished.
[27:37] I hope you've enjoyed it,
[27:38] and when you're trying this at home, once again,
[27:42] just take your Magic White,
[27:43] thin it down with paint thinner,
[27:45] and flip it on there using the fan brush and a knife.
[27:49] Be careful where you do it,
[27:50] or you'll have a happy house
[27:52] that's covered with snow from one end to the other.
[27:55] And until we meet again,
[27:56] thank you very, very much for watching us.
[27:58] Happy painting.
[28:03] (soft guitar music)
`,C=`YouTube transcript
Video ID: RInDWhYceLU
Language: en
Captions: authored or unspecified

[0:01] - Hello, glad to see you again.
[0:03] Thought today we'd do a picture
[0:04] that's right straight out of Alaska.
[0:06] We'll do one of Mount McKinley,
[0:07] the most almighty mountain in the North American continent.
[0:11] And we'll start off today, and we use just a little bit
[0:14] of Prussian blue, maybe a touch of phthalo green
[0:16] mixed with it here.
[0:18] And let's dance in some basic shapes here.
[0:21] I've already put the Magic White on the canvas
[0:23] to save a little time.
[0:26] So we're just literally mixing color right here
[0:29] on the canvas, just let this brush
[0:31] dance and play and have fun.
[0:34] And all we're looking for is general basic
[0:37] cloud shapes here, we're really not
[0:38] trying to put anything in.
[0:41] Just let it happen.
[0:43] Just move the brush, keep it moving, working,
[0:46] playing, having fun, there we go.
[0:48] Isn't that something?
[0:50] There we are.
[0:52] Put a nice little cloud shape right there, what the heck.
[0:57] Okay, keep the brush moving, don't let it stop.
[1:04] And sometimes brush is lazy, you have to
[1:06] really push it a little or it'll quit on you.
[1:08] Make it keep moving.
[1:11] Okay, now we'll take the almighty brush here,
[1:16] and we're gonna swirl this.
[1:17] We're gonna pull the color, move it,
[1:21] pull it, there we go.
[1:23] Try to avoid a pattern, we want this to go everywhere.
[1:26] We're looking for a sky here that has life in it,
[1:29] has movement in it, we don't want a sky
[1:31] that looks like at night you pull the curtain down
[1:33] and everything went black on you.
[1:35] Wanna keep this moving, there.
[1:40] Already you're beginning to see
[1:41] all the little things happening up here.
[1:45] Every which direction.
[1:48] Every way, there we go.
[1:53] Now you can blend this too much and take it all out.
[1:55] We don't wanna take it out, we just wanna mix it up.
[1:58] Stir it up.
[2:04] Okay, while we've got some paint on the brush here,
[2:06] we'll add a little more Prussian blue and phthalo green.
[2:12] And we'll put us in some water.
[2:15] We pull from the outside in.
[2:19] And leave a little area opened here,
[2:21] that will create the little sheen of light
[2:24] that plays across the water.
[2:27] You can go back with white paint and put it back in,
[2:29] but you've already covered the canvas with Magic White,
[2:32] so why not use it?
[2:35] This is a lazy man's way of painting.
[2:39] You let the paint work, you let the brushes work.
[2:42] Use what happens naturally, don't fight it.
[2:50] Okay, clean the old brush off,
[2:54] and let's get out an almighty fan brush here.
[2:57] And let's build some happy little clouds up here.
[3:01] I'm gonna take titanium white with the least little touch
[3:04] of permanent red in it.
[3:08] And load the brush full of paint, just really load it up.
[3:12] Now we'll start working on some basic cloud shapes here,
[3:14] and we'll dance in all these little areas
[3:16] and let 'em just play in the sky.
[3:21] Keep the brush moving, keep it moving.
[3:26] You want areas that are thick, areas that are thin.
[3:29] Let all these little things happen.
[3:34] And we'll take the big brush here
[3:35] and gently, gently blend this together.
[3:39] Very lightly.
[3:41] And fluff it up a little and hypnotize it.
[3:46] And right there you've got an almighty cloud,
[3:48] just that quick.
[3:50] But they're very easily killed, clouds are delicate.
[3:53] Don't overwork it, put it in, leave it alone.
[3:58] Okay, and maybe we'll have another one here.
[4:00] We'll put a, layer these clouds some.
[4:05] Okay.
[4:10] Nature is so beautiful, just let it go, have fun with it.
[4:17] Very, very easy to work these to death.
[4:27] Okay, we'll blend this in.
[4:29] And you work in layers here, you do thing
[4:31] that's the farthest away first,
[4:33] have him finished, and then work forward.
[4:39] There, we'll hypnotize that one,
[4:41] blend this one a little bit.
[4:47] Okay, little bit more red here.
[4:52] There we go.
[4:53] Don't wanna set these clouds on fire now.
[4:55] All we wanna do is have a slight warmish glow to 'em,
[4:59] like the sun's playing along the top.
[5:04] There we go.
[5:07] Guess we better not forget this side of the sky.
[5:09] We'll put a little something over here.
[5:13] Just some nice little clouds playing around in the sky.
[5:22] Okay, and mix these up a little bit.
[5:24] (lively piano music)
[5:33] Okay, maybe a little streaky one right here.
[5:39] Got baby clouds, too.
[5:40] If you didn't have baby clouds,
[5:41] you wouldn't have big clouds.
[5:45] There, and we can work on this one a little touch.
[5:55] Okay, there looks like a nice place.
[6:00] And we're really pushing this paint into the canvas.
[6:02] We're working that value right into the canvas.
[6:07] Just let it play.
[6:09] Don't kill all the dark areas.
[6:12] You can end up with great big cotton balls in the sky
[6:14] if you're not careful.
[6:20] Guess that'd be considered a UFO,
[6:21] big cotton ball in the sky.
[6:24] There, fluff that up.
[6:30] And work that paint.
[6:34] And look at there, in just a couple of minutes,
[6:36] you have a sky that has so much action happening in it.
[6:42] There we go, okay.
[6:48] (banging)
[6:51] If you do this in your living room,
[6:52] you can redecorate your living room in a matter of minutes,
[6:55] so be very careful, learn to control it.
[6:58] Have you a box you can shake your brush in,
[7:00] and that way you don't have to worry about
[7:02] covering everything.
[7:05] Okay, let's take a little bit of brown, some blue,
[7:09] a little touch of alizarin crimson and some white.
[7:15] There we go, and don't mix your paint dead.
[7:17] Mix it marbley and leave it alone.
[7:20] Okay, now let's do, since we're gonna do McKinley today,
[7:23] let's do the basic shape here.
[7:26] McKinley comes down like so, has another peak
[7:30] running right off through here.
[7:33] Make that just a little more rounded.
[7:39] There, and we let this side drop right down and over.
[7:46] All you're looking for here is the basic outline,
[7:48] the basic shape of this mountain.
[7:51] You're not worried at all what happens in here.
[7:55] Okay, take the big brush, and we'll pull that down.
[8:02] This takes off the excess paint
[8:05] and makes the next layer stick better.
[8:07] And also when you're doing mountains,
[8:08] if you can see the entire mountain, the top of the mountain
[8:11] is always more distinct than the bottom.
[8:15] At the bottom of the mountain we have mist,
[8:17] and now we have pollution.
[8:18] We have a multitude of things that break up
[8:21] and diffuse light.
[8:26] Okay, and we'll put some snow on that almighty mountain.
[8:30] Pull that paint out real flat, just pull it out
[8:33] and get us a little roll of paint.
[8:35] And we'll just lay this on and let it travel right on down.
[8:42] And you want the paint to break like this,
[8:44] to make all the little things that happen in there,
[8:47] the little shadows, the light and dark areas.
[8:52] Okay, and there's a little bump
[8:56] that comes out right there
[9:00] and works its way down.
[9:04] And over here, let this drop just like so.
[9:15] There we go.
[9:19] Now for the shadow color, we'll use a little
[9:21] Prussian blue and white.
[9:27] And once again, don't mix it dead.
[9:30] You want it to be sort of marbley.
[9:34] Okay, now we'll start with the shadows,
[9:38] and we'll just lay these in here.
[9:39] We wanna bring these two areas here together.
[9:44] So we just sorta work it back and forth
[9:46] and let it come, there you go,
[9:48] let it just come together.
[9:51] And maybe this shadow comes right down through here.
[9:58] Every highlight needs its own private shadow.
[10:09] Okay, we'll put a little shadow right there.
[10:12] And see how that protrudes that up?
[10:14] Makes it just jump right out at you.
[10:16] The little ridges here and there.
[10:19] All kind of little things happening in this mountain.
[10:24] And we need a shadow back here behind this almighty peak.
[10:28] There it is.
[10:30] Just let him go.
[10:38] Okay, and we want a peak that comes right up through here
[10:42] and just begins working its way back down.
[10:45] (lively piano music)
[10:56] There.
[11:01] It's a nice ridge coming through here.
[11:04] And we can bring these together.
[11:06] (lively piano music)
[11:14] A few little shadows in here.
[11:18] Just here and there.
[11:24] Okay.
[11:27] And as we say, we want this to be more distinct
[11:30] at the top than the bottom, so we're gonna
[11:31] diffuse the bottom of it, and only the bottom.
[11:35] And here we're just tapping the canvas.
[11:37] We're trying not to destroy, only diffuse.
[11:40] And this is where you really depend on a firm paint.
[11:43] If you have a loose, oily, thin paint,
[11:46] you become a mud mixer here.
[11:52] So when you try this at home,
[11:55] if you find that you're making a lot of mud,
[11:57] check your paint, it should be very, very firm.
[12:00] Squeeze that tube, it should stand up maybe about
[12:02] three-quarters of an inch above the tube.
[12:05] Then you have a nice firm paint.
[12:08] Okay, I'm gonna make the same color and make it darker.
[12:10] Blue, brown, and alizarin added to it.
[12:15] 'Cause I want this mountain to be in front.
[12:17] This is a beautiful study of how to make one mountain
[12:19] look very, very big.
[12:22] And we'll put some little smaller mountains
[12:24] here in the foreground.
[12:26] (lively piano music)
[12:33] Okay, another little peak here.
[12:43] And we'll take the big brush and pull that out.
[12:47] Son of a gun, this comes right out.
[12:52] That's the beauty of painting wet on wet.
[12:54] You can move paint on the canvas.
[13:01] And we'll put some happy little snow here.
[13:04] Just let that run.
[13:07] There we go.
[13:13] Okay.
[13:16] Our light is still coming from the same direction here,
[13:18] so don't let that fool you.
[13:21] (lively piano music)
[13:30] Okay, now we can work in some shadows here.
[13:39] Let's push that one into the background,
[13:40] just come right on through, and that'll push him back.
[13:46] It's scary to have this much power
[13:47] that you can move mountains.
[14:00] Okay, this, there.
[14:04] We can swing this around and bring these two
[14:06] right together.
[14:09] Just make a nice little ridge out of that.
[14:15] Okay, now we've got an almighty mountain.
[14:20] I'm gonna take a little of the blue, brown,
[14:22] alizarin crimson, add a little touch of sap green to it.
[14:27] Looking for a dark color here, very dark.
[14:31] I will load up this one-inch brush,
[14:33] and we'll push in some little dark areas here.
[14:36] This'll be our little trees that are way, way
[14:38] back in the distance, bushes and trees
[14:40] and all the little things happening back here.
[14:50] There we go.
[14:52] Now with the big brush, we can pull a little bit
[14:54] of this color down.
[14:58] And this'll be the beginning of our reflections.
[15:05] Okay, and we'll just give it a little bit of ripple
[15:08] to make it look watery.
[15:15] (banging)
[15:22] Okay, let's put some highlights on here.
[15:25] I'm gonna use a little bit of Magic White
[15:27] mixed with some cad yellow.
[15:32] Little touch of permanent red.
[15:34] And we'll just sorta go back and forth,
[15:36] make a nice orangey color here, bright color.
[15:41] Mm.
[15:46] There we go, all these nice little bushes
[15:48] happening back here.
[15:50] (lively piano music)
[16:00] And then we'll reflect some of that
[16:02] right down into the water here.
[16:08] There we go.
[16:12] Now with a big brush and the most delicate, delicate
[16:14] touch possible, just enough to pull the paint
[16:18] a little bit, we'll pull that down
[16:21] and just give it a watery effect, don't wanna destroy it.
[16:27] Okay, now let's take...
[16:33] mix up a lot of dark here, blue, brown, alizarin,
[16:36] and a little bit of sap green.
[16:39] Should look black to you.
[16:44] And we'll load the brush full of paint, load it full.
[16:51] A lot of paint.
[16:54] And let's make some little evergreen trees
[16:56] that are growing way back here in the distance.
[16:58] (lively piano music)
[17:06] Okay.
[17:10] Let's firm that one up a little bit.
[17:13] It needs to be a little stronger.
[17:16] There we go.
[17:21] Maybe he's got a friend that lives right over here.
[17:25] Just dropped him in.
[17:27] (lively piano music)
[17:38] Okay, maybe they're getting a little bigger
[17:40] as it comes around the curve.
[17:54] Maybe a little baby one back here.
[18:03] Okay, we'll put a little bush in front of him.
[18:09] Okay, we'll take a little touch of Magic White,
[18:13] a little bit of brown,
[18:18] and a little touch of yellow
[18:19] just to make a nice sandy looking color.
[18:25] And we'll lay in a little water line back here.
[18:35] There we go.
[18:40] And we'll cut in a few little trunks
[18:41] and sticks here and there.
[18:44] (scraping)
[18:56] Okay.
[19:02] Maybe we need another tree right here.
[19:06] Trees are getting closer,
[19:07] so they're getting a little bigger.
[19:09] They look bigger to you, this is the way
[19:10] we push everything back.
[19:13] Work with perspective here.
[19:23] Okay, let's move to the other side of the picture
[19:25] while we've got a brush full of paint here,
[19:28] and we'll put an almighty tree right here.
[19:37] These trees live in your brush.
[19:38] You have to scare 'em out sometimes, really work at 'em.
[19:42] Little son of a guns will try to avoid you.
[19:49] And they're like everything else.
[19:50] The first time you try 'em, they're gonna
[19:52] drive you up the wall.
[19:54] But you practice it.
[19:56] If there's a secret to this, it is practice.
[20:00] You learn how to make the brush work,
[20:03] how to touch the canvas with it.
[20:05] And then it's just a matter of practicing.
[20:11] First time you tied your shoe, it wasn't easy.
[20:13] You had to look at it and work at it.
[20:15] The next thing you know, you're not paying
[20:17] any attention, you just, you get your shoe tied.
[20:19] Same thing.
[20:25] Okay, we'll just...
[20:29] Maybe we'll make another little projection
[20:31] come right out through here, there we go.
[20:35] A little reflection in here.
[20:40] And we'll pull that down.
[20:41] (lively piano music)
[20:51] Okay, we'll lay in some more of these
[20:54] pretty colors back here.
[20:56] There's a nice little bush right there.
[21:04] Mm, there's one.
[21:09] And right down here we'll reflect some of these.
[21:21] Okay, delicate touch again, very, very light.
[21:25] Just enough to move it a little bit on the wet canvas.
[21:32] And we'll put some land out here
[21:33] so these bushes have a place to sit.
[21:38] Don't want 'em fall off in the river here,
[21:41] so we'll give 'em something to set on here.
[21:46] And we can take a clean brush and just lift that gently.
[21:50] This is a very thin paint now, it's mostly Magic White.
[21:53] So you can move that without destroying
[21:55] what's underneath it.
[21:58] And here we'll use a little bit of just
[22:01] straight Magic White,
[22:04] and we'll put us a happy little water line in here.
[22:11] There.
[22:17] Okay.
[22:20] Now then, you can, you can put some more
[22:25] little bushes right in here like so.
[22:32] And we'll drop some reflections into the water.
[22:40] And we'll pull those down.
[22:44] And anybody can do this, this is not some big secret thing.
[22:48] Anybody can do it, we teach people from the age of 10
[22:51] all the way up 80 and 90 years old.
[22:54] (banging)
[23:00] And young people really, really like this.
[23:04] They learn it very easily, very quickly,
[23:07] and they see results very quickly.
[23:11] I have a son that's a young man right now,
[23:14] and he was, oh, he's been painting
[23:16] since he was about 12 years old, been selling his work.
[23:24] So it's not just for the older person.
[23:27] It will also work very well for the young person.
[23:32] The only trouble, like my son, he's quite lazy.
[23:35] He'll only paint if he needs money.
[23:37] If he needs money, he'll paint.
[23:40] But it is a nice way to put a happy buck in your pocket.
[23:45] And to make good things happen in your heart.
[23:50] Okay, we'll just have this come right on down through here.
[23:54] Fill that in.
[24:03] Okay, now we can start highlighting some of these things.
[24:06] We'll take a little bit of blue and yellow mixed together,
[24:10] make a very nice little green color here.
[24:14] And we'll just drop some highlights on this tree.
[24:17] Remember where your light's coming from.
[24:18] Light's coming from the right,
[24:21] so you want the right-hand side of this tree
[24:23] to be a little more distinct and bright than the left side.
[24:28] And if you're right handed, you'll probably find
[24:29] it's easier to have the light coming from the right.
[24:33] If you're left handed, it will sort of vary
[24:35] from person to person.
[24:38] Okay.
[24:42] Let's put some little highlights over here
[24:44] on these little trees.
[24:47] The sun wouldn't forget them.
[24:50] There we go.
[24:51] (lively piano music)
[25:00] There we are now.
[25:03] A little more Magic White, thin that down just a touch.
[25:08] And we can start finding all these beautiful little trees
[25:10] and bushes that are living in here.
[25:14] Very important that you don't kill all this dark area.
[25:17] If you kill all the dark,
[25:18] your picture's gonna be very flat.
[25:22] Well, we might as well reflect that
[25:23] right into the water there.
[25:27] Okay, and there we go.
[25:30] A little bit right in here.
[25:34] And we'll reflect that right on down,
[25:35] a little touch of red over the top.
[25:41] Okay, there's another nice tree I see.
[25:47] Little rascals live in your brush,
[25:48] you just gotta push 'em out.
[25:54] And let's put a touch more of the Magic here.
[25:59] There, nice ochre color.
[26:10] All these pretty little bushes,
[26:12] just let 'em flow off your brush.
[26:20] And some little grassy areas coming down through here.
[26:25] Let's turn that into a nice reflection.
[26:29] Just like so.
[26:33] Okay, now let's give him a little bit of dirt.
[26:40] There we go.
[26:43] This is straight van dyke brown.
[26:45] And onto that, we'll take a little brown and white
[26:50] and give him just a little touch of highlight,
[26:52] make him look like little stones and rocks
[26:54] playing through here.
[26:58] Okay, let's put a few little sticks here and there.
[27:03] Here we're just cutting through the paint
[27:04] using the point of the knife.
[27:08] But it shows distance, it shows all these different planes.
[27:15] Okay.
[27:18] And we'll put just a little bit of Magic White under here
[27:20] and give us a little water line.
[27:21] (lively piano music)
[27:32] There we go, and a few little sticks over here.
[27:42] Okay, but you see what you can do in just a few minutes
[27:45] with an almighty brush and an almighty knife
[27:50] and a beautiful painting in your heart.
[27:51] All you have to do is let it out.
[27:54] A few more sticks.
[27:59] There we go, I think we'll call that finished,
[28:02] and I wanna thank you very, very much for watching us.
[28:04] I hope to see you again in the near future.
[28:07] Until then, happy painting, thank you.
[28:13] (light guitar music)
`,w=`YouTube transcript
Video ID: UOziR7PoVco
Language: en
Captions: authored or unspecified

[0:00] - Hello again. Glad to see you.
[0:02] Thought today we'd one of these almighty black canvases.
[0:04] It's time we got into doing something on a black canvas.
[0:08] I'd like to show you how
[0:09] you can do a beautiful, beautiful landscape
[0:11] on a black canvas.
[0:12] I've already went ahead,
[0:14] because we are short of time on this show,
[0:17] I've already went ahead and covered the whole canvas
[0:19] with Alizarin crimson.
[0:21] Now I'm gonna take a little Van Dyke brown
[0:24] and work into the edges, just around the edges,
[0:28] so it's, we already have it covered with Alizarin crimson,
[0:30] and now we're putting a little brown on it.
[0:33] The whole canvas was covered with crimson.
[0:37] There we go.
[0:38] Just around the corners.
[0:41] Thought today we'd do a beautiful little sunset.
[0:45] And maybe we'll have a little sunset
[0:46] like the sun's going down behind the hill back there.
[0:50] And we just have a beautiful glow in the sky,
[0:54] and then we'll go from there.
[0:56] Now I'm gonna take and pull this back and forth
[0:59] to a get a nice even distribution of paint,
[1:01] working it up and down, back and forth.
[1:04] There we go.
[1:10] All right.
[1:14] Mm 'kay, now we'll start with a one-inch brush,
[1:17] we'll use a little bit of cad yellow.
[1:19] Figure out where the sun is, just went down,
[1:22] and we're gonna start like right here.
[1:25] And begin working this paint around.
[1:28] You start in the center and work
[1:30] around and around and around,
[1:32] and already it's picking up the Alizarin crimson
[1:34] and it's turning into
[1:35] a beautiful little yellow-ish orange-ish glow here.
[1:41] There we go.
[1:45] And we'll start right here, let it work outward.
[1:51] You want it to get darker and darker and darker and darker
[1:53] as it goes out toward the edges.
[1:55] So we always start with a color in here and work outward.
[2:02] There we go.
[2:10] Okay.
[2:11] A little bit of color here, work it out,
[2:14] and I'm doing this in little-bitty X patterns.
[2:16] Back and forth, back and forth, there we go.
[2:23] Mm 'kay.
[2:25] Now let's take the big brush,
[2:27] and gently gently hypnotize this.
[2:29] We're still making the little X's.
[2:39] There.
[2:41] Just work that in.
[2:48] And then just enough to take out the brushstrokes.
[2:55] Okay.
[2:56] (water sloshing)
[3:01] (paintbrush rattling)
[3:04] Okay, let's take a little bit of Alizarin, a little brown,
[3:07] put it together here on the brush, mix on the brush.
[3:11] And maybe back here in the distance
[3:12] we'll have a little foothill back here.
[3:14] Just let this brush bounce along and play.
[3:19] There we go.
[3:23] Don't let the size of this big brush scare you.
[3:24] It does fantastic things.
[3:31] Okay.
[3:34] Now, maybe we'll have some highlights.
[3:40] Take the little yellow and green and,
[3:43] little touch of red here,
[3:45] and we just push some little highlights coming down here.
[3:48] We'll make these little foothills way back in the distance.
[3:57] Okay.
[3:59] Let's put some back over here.
[4:03] There we go.
[4:13] Then we'll take a clean brush, and just gently lift up,
[4:17] very very lightly,
[4:18] just enough to give it an upward swirl.
[4:21] There.
[4:27] Very light, barely barely touching the canvas.
[4:31] You let two or three hairs just about touch.
[4:34] Just enough to move the paint a little bit.
[4:39] Okay.
[4:41] Now we'll take a little yellow
[4:43] and a little permanent red mixed together here,
[4:46] and we'll start putting in some reflections.
[4:48] Maybe we'll have a little,
[4:50] have a little lake right back here, a little pond.
[4:55] Just lay a little color on.
[4:57] And pull this down.
[5:02] There we go.
[5:09] Then just enough to give a little watery effect.
[5:12] Just
[5:14] ripple it a little.
[5:15] We don't want to destroy.
[5:18] (water sloshing)
[5:24] Mm 'kay.
[5:26] (brush rattling)
[5:27] Clean the old brushes here, and we'll move right along.
[5:34] Okay now I'm gonna go back into this brown and Alizarin.
[5:38] Once again we're mixing it on the brush.
[5:41] A lot of paint on the brush.
[5:43] Maybe we'll put a little tree standing back here.
[5:47] We'll make this one with the fan brush.
[5:56] There we go.
[6:00] And trees get lonely too, so we'll give him a friend.
[6:06] There.
[6:16] And maybe there's a little one right there.
[6:20] Got two big ones, so, invariably sooner or later
[6:22] there's gonna be a little one.
[6:24] There he is.
[6:30] Let's fill him in, make him just a touch darker.
[6:37] Maybe we'll put a third one right there.
[6:47] Work that in a little bit, create a shadow behind the tree.
[6:53] Okay.
[6:54] (water sloshing)
[7:02] Now, we'll just, with a knife here
[7:04] we'll just make a little waterline
[7:06] running back through here.
[7:12] These black canvases, we cover with a black acrylic.
[7:16] A flat black acrylic paint,
[7:18] and allow it to dry before we start.
[7:22] And the Alizarin crimson that we use here,
[7:25] is a transparent color, so the black shows through.
[7:28] It looks black, but when you apply color to it,
[7:31] man it really comes alive.
[7:33] Okay, let's start with some almighty trees and stuff.
[7:37] We'll use the big brush today.
[7:40] And let's have a big old tree right here.
[7:44] I know this may be quite difficult for you to see
[7:47] but we are putting the general shape of the tree right here.
[8:01] These black canvases make some of the prettiest pictures
[8:04] that you could imagine.
[8:07] And if you're interested in selling paintings
[8:08] and making a happy buck to put in your pocket,
[8:11] these are the ones that really sell.
[8:14] Let's have another tree right over here.
[8:17] Let these limbs just fly out, firemen.
[8:26] Maybe a big tree up here.
[8:32] And as you can see, we're really hitting this canvas,
[8:35] we're really pushing the paint into it.
[8:37] You need an almighty easel.
[8:40] Little Tiny Tim easels will let you down.
[8:45] This easel is made out of a platform step-ladder.
[8:49] And they work very very well.
[8:51] They're very strong, very simple to build.
[8:55] Okay.
[8:56] We've got that filled in.
[8:59] Let's put some tree trunks here and there.
[9:02] Okay.
[9:03] And we'll put some dark paint right along here.
[9:09] There we go.
[9:14] Just, in your mind,
[9:15] wherever you visualize there might be a little trunk,
[9:17] just drop one in.
[9:22] Now mix just a little brown and white,
[9:24] so we can put a little touch of highlight on this
[9:26] and make it stand out a little,
[9:32] like a light's playing through here and touching it.
[9:36] There.
[9:42] And we'll put a trunk right over in this one, too.
[9:45] Little dabble.
[9:53] Okay.
[9:54] Now, if the sun's here, light's coming from this direction,
[9:58] this would be highlighted on the other side.
[10:06] Now probably in reality, if the sky was this dark,
[10:10] you would have nothing but silhouettes.
[10:13] But that would be a boring picture.
[10:15] This is a lot more fun.
[10:23] Okay, you take a little bit of magic white,
[10:26] little yellow,
[10:27] maybe a touch of Phthalo green.
[10:34] And we can put some nice little leaves
[10:37] on all these little bushes.
[10:40] Look how that color stands out
[10:41] against this black background.
[10:43] It just jumps out at you.
[10:51] Okay, now, let's,
[10:54] let's put some on this little bush.
[11:01] And there's some little things growing down in here.
[11:07] Use your imagination, let it go.
[11:10] Let it go.
[11:13] Remember, this is your world.
[11:15] In your world you can create anything that you desire.
[11:22] Okay, let's do this old big tree here.
[11:34] What's so very nice about these black canvases,
[11:37] if there's a light shining directly on them
[11:39] they look totally different than if they're without a light.
[11:42] So in essence it's almost like
[11:43] having two paintings in one.
[11:46] Especially if you hang these, after they're finished,
[11:49] over a light, so at night if you turn the light on
[11:51] it shines up on this,
[11:53] it's remarkable what happens.
[12:01] There we go.
[12:04] All the little bushy areas.
[12:12] Maybe some little touches out here.
[12:23] Okay.
[12:25] Now let's take some more Van Dyke brown
[12:30] and let's put an almighty tree right here.
[12:33] We'll just let him bend and play and
[12:36] work right on up to here.
[12:42] And, there we go.
[12:58] There.
[13:00] Have another little limb coming down through here.
[13:05] And maybe there's some little things
[13:06] happening up here in the leaves.
[13:13] And we'll have a little light playing across here.
[13:16] Just pull that knife sort of, swirled,
[13:19] so it gives the appearance of it being round.
[13:29] There we go.
[13:33] Now we're ready to put some highlights
[13:35] on these little leaves out here.
[13:39] Okay.
[13:42] And just let the light play through this tree.
[13:54] Leaving a lot of dark areas.
[13:55] We need these dark areas to make the tree look round.
[13:59] Don't kill 'em all.
[14:02] Such a, such a temptation, to do a little bit more.
[14:08] I used to work with one art teacher,
[14:10] that, he had a set of handcuffs that hung in the studio,
[14:13] and he'd walk by and he'd bump you
[14:14] and he'd point at those handcuffs.
[14:16] And that was his way of saying,
[14:17] "You're beginning to fiddle it to death."
[14:19] We don't have any handcuffs here today,
[14:21] but stand back and look every once in a while.
[14:23] Don't overwork your picture, you'll fiddle it to death.
[14:29] Okay.
[14:30] This looks like a
[14:32] super place, maybe, to have a little path
[14:34] that runs up through there.
[14:37] So now take a little Prussian blue and Van Dyke brown
[14:42] and just very easy here, we'll just make a little path
[14:45] that runs right through this.
[14:47] Got to have a way to get around the lake
[14:49] to catch that big trout that lives out there.
[14:52] Know he's there.
[14:58] Okay.
[15:02] Then we'll put just a little bit of highlight on there.
[15:05] Just let that run down through there and break.
[15:09] You want that paint to break.
[15:11] So it leaves some of those beautiful dark areas in there.
[15:16] There we go.
[15:19] Now.
[15:22] Little bit more magic white here.
[15:23] Just want to thin that paint
[15:25] so it'll stick on top of all the other paint.
[15:28] Now we can start in here.
[15:29] We'll start putting some
[15:32] nice little bushes that are hanging over the path.
[15:40] So the path just disappears back here behind the big tree.
[15:47] Okay.
[15:57] And these bushes protruding up over the top,
[16:00] push it down into the picture.
[16:02] You need 'em.
[16:03] They pay you great dividends.
[16:06] And we'll put some on this side
[16:08] of the road over there.
[16:12] Mm 'kay.
[16:14] Let's make another big tree.
[16:17] Maybe right up through here.
[16:19] We'll just have a big ol' tree.
[16:22] There he goes. Van Dyke brown.
[16:29] Van Dyke brown's a very nice color,
[16:31] it's almost like a chocolate brown, very warm.
[16:37] There.
[16:46] Okay, now a little limb right there.
[17:02] Now one thing I'd like to mention while we're
[17:04] putting the highlights on here,
[17:05] if you have questions or comments or
[17:07] anything you'd lie to know about what we're doing here,
[17:11] please feel free to drop us a line,
[17:13] care WMVT, and we'll give you the address
[17:15] at the end of the show.
[17:19] And do use it, so you know,
[17:21] we're here to help you,
[17:22] if you have problems or if you have questions,
[17:24] anything concerning this method of painting,
[17:26] we'll be glad to work with you and try to help you.
[17:30] Okay.
[17:32] We'll put some highlights up here on this one.
[17:37] Little bit more of the magic, thin it down.
[17:39] Just a touch.
[17:44] Okay.
[17:55] Thousands and thousands and thousands of little leaves.
[18:05] Okay, now, let's go down here,
[18:07] put some little things around the tree.
[18:16] And maybe you can, right here, say,
[18:19] let's put a little stone.
[18:21] Maybe a little stone just lays right along here.
[18:26] Of course he's a happy little stone.
[18:28] We don't have any other kind.
[18:38] And we'll make up a little highlight color.
[18:42] Just lay right over there.
[18:46] Like so.
[18:53] Okay,
[18:56] now let's put some, mm, nice one there.
[19:01] Nice one there.
[19:03] Okay, let's have some little bushes right along in here.
[19:07] Now when you're doing this,
[19:09] load this brush by pulling it in one direction
[19:12] so that it looks like an old shoe on the end,
[19:14] sort of hangs over.
[19:17] You put that round part to the top,
[19:19] and tilt the brush sort of downward
[19:21] and just push,
[19:22] just enough to bend the bristles a little bit.
[19:25] Don't fight it, let the brush do the work.
[19:27] You have the fun, let the brush work.
[19:33] Maybe we'll put a nice little sparkler right there.
[19:36] Just sort of to break that up a little it.
[19:39] Okay.
[19:42] Now let's lay in a few stems here and there.
[19:48] And all we're doing here is literally just cutting
[19:50] right through the paint, using the point of the knife.
[19:53] We literally just cut the paint.
[20:00] There we go.
[20:05] This is one of the paintings
[20:06] that we do in class quite frequently.
[20:09] It's a very effective painting,
[20:10] it teaches you how to use black canvases.
[20:14] It's a lot of fun.
[20:16] And it's extremely, extremely effective.
[20:22] We'll have a few little sticks coming over like so.
[20:26] There we go.
[20:36] And once again, these little twigs and these little sticks
[20:39] show different planes in the picture.
[20:42] It produces the illusion of distance.
[20:44] Use 'em to your advantage.
[20:48] 'Cause the woods are always full of them.
[20:53] Let's see, maybe back here we could just
[20:54] put a little indication of a trunk here and there,
[20:57] some little sticks.
[21:01] There we go.
[21:10] Okay.
[21:16] All righty, I think this one's just about ready.
[21:19] Then we can sign it.
[21:21] So I'll use a very thin oil here.
[21:24] And we'll just take
[21:27] and use the liner brush,
[21:28] and you mix this paint until it's like water.
[21:31] And if you mix it very very thin,
[21:34] curl that brush as you pull it out,
[21:36] twist it, so it brings it to a point.
[21:38] It's just like you were writing.
[21:42] You don't have to wait until the painting is dry.
[21:45] Okay.
[21:51] There.
[21:56] (water sloshing)
[21:57] This same technique is also very good
[22:00] if you want to put some nice little sticks and limbs in
[22:03] that you wanted to draw in,
[22:05] use the oil to get the paint thin.
[22:08] And then maybe we could come right across and,
[22:11] 'cause a thin paint will stick to a thick paint.
[22:14] There.
[22:15] Just let these little things happen here and there.
[22:22] Okay.
[22:25] One of the things that we're trying to do
[22:26] as we travel around and teach this almighty method,
[22:29] is we're trying to gather up an army of teachers.
[22:33] And soon we'll have teachers that
[22:34] travel this entire beautiful country,
[22:38] teaching this fantastic method of painting.
[22:41] If you would like to have some information,
[22:46] drop us a line.
[22:47] Once again,
[22:48] we'll show you the address at the end of the show.
[22:51] And soon we'll have information on teachers
[22:53] that are all the way across this country.
[22:56] Teachers that we can guarantee
[22:57] that can teach this fantastic method.
[23:01] Okay.
[23:03] I think now, we'll just put a couple little things
[23:06] here and there.
[23:10] Put another little stick or two.
[23:23] I hope you've painted along with us
[23:24] and you've enjoyed this half as much as we have.
[23:26] We really enjoy doing these black canvases,
[23:29] they are extremely, extremely effective,
[23:32] and you'll find
[23:34] that they bring a nice warm glow to your heart.
[23:37] These can be done in a multitude of colors.
[23:39] You can cover 'em with any color that's transparent.
[23:43] We can use the Prussian blue, sap green,
[23:46] any of these colors, or combinations of colors.
[23:49] Later on in this series
[23:50] we'll do a winter picture on a black canvas
[23:53] and I'll show you how you can put the moon in the sky
[23:55] and let the light play across the snow
[23:57] when you have the almighty mountains and stuff.
[24:00] And I'll think you'll find
[24:02] these black canvases can do fantastic things.
[24:04] We also wanna do some pictures in the series
[24:06] where we paint the canvas with one color.
[24:09] Instead of putting the magic white on the canvas,
[24:11] we'll paint it, for example, the sap green.
[24:15] And we'll paint beautiful pictures
[24:16] by doing that.
[24:18] There's a multitude of things that can be done with this.
[24:20] Use it, experiment with it, go with it.
[24:24] Just let your heart be your guide.
[24:26] Let your imagination take you anywhere that you want to go.
[24:29] Let it go.
[24:31] Okay.
[24:32] All righty, I think we're gonna call that picture finished.
[24:36] And, once again,
[24:37] we want to thank you very much for watching us.
[24:41] And from all of us here at WMVT, happy painting.
[24:44] Thank you very much.
[24:48] (guitar music)
`,T=`YouTube transcript
Video ID: 0pwoixRikn4
Language: en
Captions: authored or unspecified

[0:02] - Hello, glad to see you again.
[0:04] Today I thought we'd do an almighty winter picture
[0:06] and I want to put a great of emphasis on the sky
[0:09] and how we make big bellowy, fluffy clouds that just
[0:14] roll and lay up in the sky here.
[0:16] So I've covered the canvas with magic white
[0:19] and I'm gonna start with sort of a grey color here
[0:21] made by mixing a little Prussian blue,
[0:24] a little brown and a little white
[0:25] and we're just gonna start gently working this
[0:29] and let it go.
[0:32] There we go, we just sort of work it around and around here.
[0:37] This is a winter sky.
[0:40] Bad weather's coming in.
[0:43] Okay, here we go.
[0:54] Now we just sorta bring all this together.
[0:57] But we want this swirling turning action here.
[1:02] And then very lightly back in here.
[1:10] Okay.
[1:14] Now we'll take our fan brush with a little bit of white
[1:19] and we'll put just a touch of permanent red with it here.
[1:27] Okay, a little bit of magic white.
[1:30] Now we're gonna start way back in the back,
[1:32] the cloud farthest away first.
[1:35] And we'll start working this.
[1:38] There we go.
[1:40] (light piano music)
[1:43] And you keep this brush moving all the time.
[1:47] Just let it dance and play and have fun up through there.
[1:56] Very gently we'll blend that.
[2:01] Okay, now we're ready to start working it.
[2:17] Always doing the thing, it's farthest away first
[2:19] and working forward.
[2:27] There.
[2:31] Then we'll hypnotize a little bit, very gently,
[2:34] we don't want to destroy what we've worked so hard
[2:36] to put in here, we just wanna blend it together.
[2:41] There.
[2:50] Today I'm using two fan brushes,
[2:52] one so I can work with the darks
[2:55] and the other one with the lights.
[2:57] We'll throw some ol' grey clouds in here
[2:59] that are sneaking around and having fun too.
[3:04] There he comes.
[3:08] And maybe there's an old grey one just sorta laying
[3:12] out here like this.
[3:30] And we'll work this one just a little touch.
[3:39] And we'll go back into another little white cloud here.
[3:44] And by the time I've got down this low I'm getting away
[3:46] from the pink that I had, I just want the pink in the top
[3:48] to give indication that sunlight's playing through there.
[3:59] Then all these beautiful clouds just happen
[4:01] right up here in the sky.
[4:08] Clouds used to be something that drove me crazy
[4:10] when I was a traditional painter.
[4:12] You'd work for days and days to make big, fluffy clouds.
[4:16] And here you just sorta let it happen, don't worry about it.
[4:20] Don't try to plan 'em.
[4:22] Ah, there's another nice one.
[4:26] 'Cause clouds are free.
[4:28] They have no boundaries.
[4:30] They come and go as they please.
[4:50] Okay, let's see.
[5:01] Really pushing that paint into the canvas,
[5:02] you wanna grind the value right into the materials.
[5:12] While we're talking about canvas,
[5:13] one of the things to look for
[5:14] when you're buying a canvas to paint this technique
[5:19] is look for a canvas that's acrylic primed.
[5:22] That'll hold the magic white on there longer.
[5:25] Keep it wet longer.
[5:27] And we depend on this being wet throughout the painting.
[5:44] Okay, maybe there's another little fluffy right in here.
[5:48] Just wherever.
[5:49] Just let it happen, don't worry about it.
[5:59] There we go.
[6:04] And here we're just putting some brush strokes in.
[6:06] Indicate light coming through there.
[6:18] Okay, maybe laying up here in the clouds
[6:21] we have some little mountains that are just laying in here.
[6:39] Okay, we want these to blend right into nothing.
[6:41] We're gonna lay these right in the clouds.
[6:47] Okay, we'll have a little light playing down through here.
[6:52] Just bouncing around, having fun.
[6:54] There.
[6:57] Right up to this peak.
[7:10] Want these to be far, far away
[7:12] just about disappearing right into the sky.
[7:19] Then we're gonna diffuse them
[7:21] by just tap, tap, tapping right along,
[7:24] always following the angles here.
[7:25] Just tapping.
[7:29] And then we'll gently hypnotize them
[7:30] so they just disappear right on back into the picture.
[7:38] Okay.
[7:43] Now we can just lay clouds all around 'em.
[7:47] Just set 'em down in there.
[7:58] We'll work those a little bit.
[8:15] Maybe a little touch of grey in here.
[8:24] Okay.
[8:29] Now when you're at home doing this and have unlimited time,
[8:32] you can put a great deal more detail in here.
[8:35] This is just to give you an idea of how it's done.
[8:40] Okay.
[8:43] Let's have an almighty mountain.
[8:45] Let's come all the way down, what the heck.
[8:51] He just comes right up through here.
[9:02] Very little paint.
[9:02] We're really pushing this paint into the canvas.
[9:20] Okay, then we'll take, pull that down.
[9:24] Just makes the next layer of paint stick better.
[9:37] I'm gonna add just a little touch of Prussian blue here.
[9:44] Just so we have some shadows under the snow.
[10:03] Okay.
[10:05] Now we can put some almighty snow
[10:07] coming all the way down through this mountain here.
[10:09] And we're just gonna let it run and play.
[10:13] Just let it go.
[10:17] There.
[10:41] See how easy that is?
[10:43] Just let it flow in there.
[10:46] And we'll run some right along this mountain peak.
[10:53] And maybe here since our light's coming from here,
[10:55] this one's gonna be highlighted from the other side.
[10:59] We'll create a little valley maybe right down through there.
[11:08] We can lay in some shadows here using just some
[11:10] Prussian blue and white.
[11:24] There we go.
[11:25] Any place you want a ridge to stand up,
[11:28] all you have to do is lay a shadow underneath it
[11:31] and automatically it's right there.
[11:37] Some shadows running down behind this one.
[11:52] Okay.
[11:55] Now, with a clean dry brush I'm gonna diffuse this,
[11:58] lay it in this mist, I want this to be misty in the back.
[12:01] Like it's very, very, very cold.
[12:06] Where I live, in Fairbanks, it's not unusual for it
[12:08] to get 60 or 70 degrees below zero.
[12:11] And it's always very, very misty.
[12:14] We have ice fog that forms and lays in between the trees.
[12:19] It's cold but it's beautiful.
[12:24] Mmkay.
[12:27] Now, let's take here,
[12:31] a little bit of the grey color
[12:33] and I'm gonna lighten it up just a little bit
[12:35] with a little titanium white.
[12:38] There, nice color.
[12:41] Load this brush full of paint
[12:43] and we'll put a little tree way back in the distance here.
[12:47] And I thought today we'd make these little trees
[12:49] with the fan brush.
[12:50] We can make them with a fan brush, one inch brush,
[12:52] two and a half inch brush.
[12:56] Today I thought we'd do it with this.
[13:02] And you want these to be very quiet.
[13:05] Very subdued.
[13:07] To give the illusion of distance.
[13:16] Okay, maybe there's another one right there.
[13:24] And we can start laying in a little bit of snow up here.
[13:34] And see how that color comes through
[13:35] and we use that to make the shadow effect.
[14:03] Mmkay.
[14:05] And as I say, I want to lay this in mist
[14:07] so I'm just gonna gently tap this.
[14:10] I want it to be far away and misty.
[14:17] Now we'll come forward just a little bit,
[14:20] drop in some more little trees here.
[14:34] There we go.
[14:34] Just go and forth with your fan brush
[14:37] and you're sorta bending these bristles downward.
[14:52] And however many trees you want.
[14:54] This is your world so
[14:55] you can put as many trees in it as you want.
[15:04] But you notice, these trees are a little darker
[15:05] than the first ones we put in.
[15:16] Mmkay.
[15:17] Now, let's mist these up just a little bit.
[15:19] All I'm doing is just tapping.
[15:22] Then I'll lift it a little.
[15:35] And maybe we got a few little bushes growing
[15:37] right around here that just covered with snow.
[15:45] Okay.
[15:47] So, we'll put some magic white and some titanium white,
[15:51] mix 'em together.
[15:53] Thin paint will stick to a thick paint.
[15:56] Then we'll just put these little sparklers here,
[15:58] just little snow covered bushes.
[16:22] There we go.
[16:26] And we'll put a few little sticks in here.
[16:44] Mmkay, let's move over to this side
[16:46] and see what we can put in here.
[16:52] Trees are closer to you,
[16:53] they're gonna be getting a little bigger.
[16:58] There.
[17:05] And you need to,
[17:06] when you're making these evergreen trees here,
[17:08] you need to leave spots open in between the limbs.
[17:12] Birds have got to have a place to sit
[17:13] and wind's gotta get through.
[17:16] Don't kill all those.
[17:18] Get away from the little Christmas tree things
[17:21] we used to make when we were kids in school.
[17:34] Trees don't grow even, they don't grow straight.
[17:38] However makes them happy
[17:40] according to the weather, the conditions,
[17:43] the amount of heat or cold.
[17:46] All these things effect the way a tree looks.
[17:53] Okay.
[17:57] Maybe we want one right in the front.
[17:59] I just made this a little darker so he stands out.
[18:02] A little baby tree right there.
[18:10] See, because he's a little darker now he shows
[18:12] otherwise he wouldn't show.
[18:14] He'd just lay in there and be quiet
[18:15] and you'd never know he was there.
[18:18] Now we know he's there.
[18:30] Gonna tap this just gently.
[18:39] Okay.
[18:40] And let's have this come down like this.
[18:42] We'll just make another little thing
[18:44] coming right down through here.
[18:47] Change the angle.
[18:55] Mmkay.
[18:59] Pull that right through.
[19:10] This is a very cold picture,
[19:11] I may have to go get my coat here in a second,
[19:13] it's about to freeze me to death.
[19:16] There we go.
[19:29] And as you can see, where the paint breaks,
[19:31] shadows automatically happen in the snow.
[19:34] It's very rare that snow is pure white.
[19:38] You always have the shadows and you have some dirt
[19:40] that shows through and all those little things.
[19:48] Okay, we'll have some of those nice little
[19:50] snow covered bushes on this side too.
[19:53] Don't want this side to get jealous.
[20:06] Okay, a little magic white, a little plain white.
[20:17] There we go.
[20:20] Nice little snow covered bushes.
[20:32] Maybe, if we had such a beautiful scene,
[20:36] maybe we'd need a little cabin about here.
[20:38] We have to have a little hunter's cabin or something
[20:40] right out through here.
[20:42] So first I'll take and scrape off the basic shape.
[20:44] This gets rid of all this loose paint, the thinner paint
[20:48] so we'll have something to work on here.
[20:50] And we'll take that off.
[20:52] It's also a very good way to lay in your cabin,
[20:54] to work on a perspective and lay it out
[20:55] exactly the way you want it.
[20:59] And just a general shape.
[21:01] The big thing is to get the loose paint off.
[21:05] Okay, now we'll take a little Van Dyke brown
[21:09] and we'll back this back eave back here.
[21:13] Just like so, nice and dark.
[21:16] There we go.
[21:21] Then we'll lay a roof on here.
[21:30] There.
[21:34] Just a little bitty cabin out here in the woods.
[21:39] Little snow on the other side.
[21:44] Maybe the snow's pretty thick so we'll lay it on there
[21:48] nice and thick so it looks strong.
[21:54] Then we'll put the front on.
[22:00] Mmkay.
[22:03] Son of a gun, there he comes.
[22:18] Mmkay, let's make this an old cabin.
[22:21] So we'll just make it weather beaten, old boards.
[22:32] Lay some shadows on top of that.
[22:35] This is Van Dyke brown again,
[22:36] I'm just sort of alternating back and forth
[22:38] between brown and white to make it look very, very old.
[22:43] This old hunter he...
[22:45] He went out after moose, it was too big
[22:47] and he ran off with him.
[22:50] So the old cabin's just standing here abandoned.
[22:53] Better put a door on it though.
[22:58] Maybe a passing hunter would like to stay here overnight.
[23:04] There we go.
[23:06] And we'll make this an old slab cabin.
[23:08] We'll just put some boards right in there.
[23:24] Mmkay.
[23:36] And you can, if you wanna push this back a little bit,
[23:40] we can put a darker color on here first.
[23:46] We'll just push this cabin right back into
[23:48] the bushes a little bit and we'll have some little bushes
[23:51] growing right down like that.
[23:56] Little big of magic.
[24:12] Okay.
[24:15] Maybe when this old fella lived here,
[24:18] maybe he had a little fence that ran back.
[24:21] He might've had an animal or two he kept in here
[24:24] so let's just put a little fence.
[24:29] And this little fence is running over the hill.
[24:32] We'll just let it go right on back over the hill.
[24:38] Just see the top of that one.
[24:44] And a little bit of highlight.
[24:52] Then a little bit of snow on top of the posts.
[24:57] There we go.
[25:04] Okay, then we can run some wire right down this
[25:08] and let it disappear right over the hill.
[25:13] Like so.
[25:23] Okay, maybe a couple little bushes out here in the front.
[25:29] And I think we need some icicles.
[25:31] So we'll use just straight magic white
[25:34] and we'll pull down some little icicles here.
[25:38] Using the liner brush, this is a number two script liner.
[25:45] Whew, it's getting colder already.
[25:52] Mmkay.
[25:53] Let's move out the snow a little.
[25:56] And let's put a few more little sticks here and there.
[26:04] Mmkay.
[26:09] This is truly an almighty mountain.
[26:15] There we go, few little sticks here and there.
[26:22] Maybe here and there are little indications.
[26:30] Mmkay.
[26:33] Just here and there, we don't wanna overdo.
[26:37] We want this to look very soft, very misty,
[26:40] far, far away.
[26:43] Mmkay.
[26:45] Take a little thin oil here.
[26:48] And we'll just sign this happy little picture.
[26:56] And I hope in the last 30 minutes we have shown you
[26:58] something that you can do very quickly.
[27:02] A way to make some almighty clouds, almighty mountains.
[27:06] Some fantastic things using very, very limited pallet.
[27:10] We've used mostly blue, brown and white in this picture;
[27:13] almost nothing else at all.
[27:15] But it's a very effective picture
[27:16] and it has a tremendous sky.
[27:18] You can work on this sky.
[27:20] Once again, you have unlimited time at home.
[27:21] You can take this sky to points
[27:24] that are almost unbelievable.
[27:25] You can work it, you can alternate between darks and lights
[27:28] in the sky.
[27:29] You can make skies that almost look like religious skies,
[27:32] that things are gonna come through.
[27:36] Practice it, work with it, don't give up on it.
[27:40] All you need is a dream in here that you wanna put on there.
[27:44] And we thank you very, very much for being with us today.
[27:48] Once again, if you have questions, if you have comments,
[27:51] feel free to drop us a line.
[27:52] We'll be glad to answer any question that we can.
[27:55] From all of us here, happy painting.
[27:57] Thank you very, very much for watching.
[28:03] (relaxing guitar music)
`,ee=`YouTube transcript
Video ID: DFSIQNjKRfk
Language: en
Captions: authored or unspecified

[0:02] - Well welcome back, glad to see you again today.
[0:05] I thought today we'd do something a little different
[0:07] and I've taken the liberty of going ahead
[0:09] and covering the canvas with a complete layer
[0:12] of Sap Green.
[0:13] And to that I'm gonna add a little Prussian Blue
[0:16] right on the bottom here.
[0:18] And we just start at the bottom and work up
[0:20] so that it gets lighter and lighter as we go up.
[0:24] There we go.
[0:26] I thought today we'd make a happy little stream,
[0:28] it's just sort of running through the woods here.
[0:31] There.
[0:34] Okay, we just work this blue back and forth
[0:36] so it graduates in value as it goes up.
[0:39] (gentle music)
[0:45] Okay.
[0:50] Now,
[0:51] let's take, let's use this brush.
[0:55] We'll take a little bit of Cadmium Yellow
[0:57] and let's make a light source in here.
[0:59] And we'll just do this by making little X patterns.
[1:03] There we go.
[1:05] Just work it around and round and round
[1:06] so it gets it darker and darker
[1:09] as it goes out from the center.
[1:14] Maybe a touch more.
[1:16] Always starting in the light area and working outward.
[1:20] There we go.
[1:25] Just back and forth, little Xs.
[1:33] Okay.
[1:34] Now we'll take the big brush,
[1:36] and very gently we'll hypnotize this.
[1:40] There.
[1:42] Just let it blend outward.
[1:49] So that we sort of have a light source,
[1:51] that's all we're looking for here.
[1:55] Now still using the big brush,
[1:56] we'll go right back into the Sap Green.
[2:01] And we'll do some basic tree shapes here.
[2:03] We push the paint into the canvas, just really push it.
[2:08] There we go.
[2:11] And you need an almighty easel when you're doing this
[2:12] because you're really, really pressing
[2:14] the paint into the canvas.
[2:17] (gentle music)
[2:24] Okay.
[2:26] Maybe we'll have another big tree right in here.
[2:32] Okay, there it is.
[2:35] Isn't that fantastic, that you can just push a tree
[2:37] right out of your brush like that?
[2:44] We'll have another tree here.
[2:46] No use stopping,
[2:47] we're having so much fun here with these trees.
[2:55] Okay.
[2:58] And already we have a basic shape to work with.
[3:00] We really don't plan these paintings,
[3:02] we let them happen,
[3:03] we just sort of decide where we want basic shapes
[3:05] and work from there.
[3:08] Okay, let's take the almighty knife,
[3:11] a little Van Dyke Brown and white mixed together.
[3:17] And we'll put some trunks on these almighty trees.
[3:19] And all we're gonna do is touch
[3:21] and sort of pull a little bit.
[3:23] It'll get wider as you go down.
[3:26] There we are.
[3:28] (upbeat guitar music)
[3:31] And maybe we'll have another trunk
[3:33] hiding back in here somewhere.
[3:39] Just make all kind of little tree things happen here.
[3:45] This is sort of different than the paintings
[3:46] we've done previously, because this painting
[3:48] has no Magic White on it.
[3:50] All we do is start with the Sap Green,
[3:52] completely cover the canvas,
[3:54] work the Prussian blue from the bottom upward
[3:57] to make it darker in the foreground.
[4:03] These are the kind of things that we continually look for,
[4:06] new ideas, new ways of using this fantastic technique.
[4:12] And these ideas we put out continually
[4:14] to all the people that enjoy this type of painting,
[4:18] we have a little quarterly newsletter that we use
[4:21] to put these ideas out to people
[4:23] so they are current in what's happening.
[4:26] Okay, let's just have another almighty trunk
[4:28] right down through here.
[4:33] Maybe we'll highlight these just a little bit,
[4:36] with a little plain white.
[4:38] Just think where the light would strike
[4:40] and run through here and have fun.
[4:42] (jazzy guitar music)
[4:45] There we go.
[4:51] And over on this side now,
[4:52] the light's gonna come from the opposing direction,
[4:54] the opposite direction.
[4:58] Just a little here and there.
[5:06] Okay.
[5:08] Now we'll take a one inch brush
[5:11] and a little bit of Magic White.
[5:13] And we'll start with some yellow
[5:15] and a touch of Phthalo Green.
[5:20] Remember that a thin paint will stick to a thick paint
[5:23] so we thinned it just a little bit
[5:24] with a little Magic White, and then we just push out
[5:27] all these thousands of little leaves.
[5:30] There they come.
[5:31] There they are.
[5:35] Isn't that fantastic?
[5:36] If you're painting along with us,
[5:37] by now you should begin to have little leaves
[5:39] all over these trees, just beautiful little leaves.
[5:43] Leave a lot of the dark areas in here,
[5:44] we don't want to kill all the dark areas.
[5:47] We need the dark in order to show the light.
[5:51] There.
[5:54] Okay, maybe we'll come right down here
[5:55] and drop in another happy little bush.
[6:01] There they come.
[6:03] And over in here.
[6:06] You want this to be the brightest area in the painting,
[6:08] back here where the light source is.
[6:10] As we work forward, we're gonna get darker
[6:12] and darker and darker.
[6:17] Mmm-kay.
[6:19] Maybe a little light coming through right in here.
[6:23] Now put your trunk in before you put the leaves though,
[6:25] so you have leaves in front of the trunk,
[6:27] you don't want the trunk sitting on the outside of the tree.
[6:33] Okay.
[6:34] There's a nice little bush, there he is.
[6:42] And maybe over here, just happy little thing growing.
[6:46] Nature's so fantastic, enjoy it.
[6:49] Let it, let it make you happy.
[6:54] Okay, there's another one.
[7:00] Now I'm gonna go into a little Sap Green,
[7:01] begin using a little Sap Green with this yellow
[7:03] so it begins to get a little darker as we work back here.
[7:08] And we'll put some highlights on this little tree.
[7:11] (gentle guitar music)
[7:17] There we go.
[7:22] By now you should begin having the feeling
[7:24] that you're walking through the deep woods
[7:26] of all the beautiful tree shapes are there,
[7:30] the little squirrels are hiding in the trees,
[7:32] the bunny rabbits are behind.
[7:35] There we go.
[7:36] Once again, don't kill all this dark area,
[7:38] you need it to produce distance in the painting.
[7:46] Okay.
[7:49] That should give us enough to get started with.
[7:51] Now we'll take the almighty fan brush
[7:54] and we'll take a little bit of Magic White,
[7:57] and a little bit of Firm White.
[7:59] And we'll make a, let's have a little waterfall
[8:02] that's happening back here,
[8:04] and maybe a bubbling little stream
[8:06] is just working its way through.
[8:08] So often we avoid running water,
[8:10] running water is a lot of fun, so here we go.
[8:14] Pull it over, and let it drop,
[8:16] if you're making a little waterfall.
[8:17] Then we take the fan brush and push,
[8:20] makes the little foamy things happen.
[8:24] Then we begin building our running water,
[8:25] and we're pushing the fan brush so that it bends upward
[8:27] and the foam's on the top instead of on the bottom.
[8:31] There we are.
[8:32] Let all these little things just happen.
[8:39] Mmm, there we go.
[8:41] Maybe under the water here, there's a little stones,
[8:42] causing the water to sort of just bubble over.
[8:45] You might not see this stone, but it's under there.
[8:52] As it comes towards you, let it get wider,
[8:54] bigger, stronger.
[8:56] More of these little things,
[8:57] little actions that are happening here.
[9:00] (gentle guitar music)
[9:02] All kinds of little churning motions.
[9:05] And avoid having your waterfall here
[9:08] and stream coming straight through your painting,
[9:11] let it sort of wander around.
[9:19] All these little water actions.
[9:21] And they all hide here in your fan brush,
[9:22] all you have to do is sort of push them out.
[9:34] Okay, good.
[9:39] Alrighty, maybe
[9:42] maybe back here in the distance there's,
[9:44] we have a little stone back here.
[9:48] We just use some Van Dyke brown
[9:49] and we'll build us a little stone.
[9:54] And maybe there's a little stone out here too.
[9:57] This is your world, so you put stones wherever you want.
[10:04] This painting comes right of your heart,
[10:06] so just let it sort of flow.
[10:09] Let it happen.
[10:10] Maybe we'll take a little bit of brown and white and
[10:14] the least little touch of blue.
[10:16] Just to make sort of a grey color here.
[10:19] And we can highlight these little stones, just like that.
[10:24] Maybe there's a little ridge coming down through here.
[10:31] Little sunlight playing across the stones.
[10:35] A little dark edge underneath here,
[10:37] so that it has some distance
[10:38] between the water and the stone.
[10:43] And we take the little fan brush,
[10:46] and splash some water up on the stones there, there.
[10:50] There we go.
[10:55] Okay, maybe we'll let this
[10:56] just drift right on down through here.
[11:02] Maybe right along here, there's another
[11:04] happy little waterfall that's happening right here.
[11:06] So you take your fan brush, and go straight,
[11:08] and let it just fall over.
[11:10] Just like so.
[11:12] Isn't that something?
[11:13] You can make a waterfall that quick.
[11:18] Just a small one, you don't want
[11:19] to have a violent waterfall here,
[11:21] just a little bitty waterfall.
[11:24] And then we push to make our little foamy areas
[11:26] where the waterfall's gonna hit and crash.
[11:33] There we go.
[11:41] Okay, now let's take the big brush again
[11:44] and use some Sap Green and Prussian Blue.
[11:48] It's getting darker as it comes down.
[11:50] And we'll throw in some more happy little bushes back here.
[11:57] You need the dark in order to show the light.
[12:01] (gentle guitar music)
[12:05] Okay, maybe over here there's a nice bush too.
[12:08] Let some of these bushes protrude out over the water.
[12:16] Okay.
[12:18] Now we can take a little more of the highlight color,
[12:22] some Cad Yellow with a little bit
[12:24] of Phthalo and Sap Green mixed together.
[12:27] I'm gonna start back here and push this rock
[12:28] back into the painting.
[12:31] We just put a little bush in front of it.
[12:33] There we go.
[12:37] And maybe right here there's some nice little things
[12:39] that just sort of hang over the water.
[12:44] Okay, let's do this nice one right here.
[12:57] There we go, there we go.
[13:01] You can do it, you can do it.
[13:08] Just push that waterfall right back into the painting.
[13:15] Okay, let's
[13:18] let's take a little more brown here
[13:21] and just put a little stone, a little gravel out here
[13:24] for all these nice bushes and stuff to sit on.
[13:33] There we go.
[13:37] Little highlight on the stones.
[13:40] (gentle guitar music)
[13:46] And a few little grassy things that grow
[13:48] right on down the bank here.
[13:56] Maybe we'll even get daring
[13:57] and put a little stone out here in the water.
[14:04] There.
[14:05] Just lay it in with Van Dyke Brown,
[14:07] then we highlight it with sort of the grey color.
[14:11] There, just let this bright play
[14:13] just run across this little stone.
[14:17] Okay.
[14:18] Little more of the Magic White, a little Firm White.
[14:21] Now we're gonna start playing the water around this stone.
[14:24] Maybe it just comes around like so,
[14:26] sort of falls over, splashes a little here,
[14:30] around the side, down.
[14:38] All kinds of little actions happening in this.
[14:49] Okay, a little bit of water
[14:50] splashing up against the rocks here.
[14:58] Okay, now we're getting a nice little stream here.
[15:03] You can see how it's beginning to pick up the blue
[15:05] that's underneath here, and make this water darker
[15:07] as it comes closer to you.
[15:15] There we go.
[15:24] Okay, let's go back to good old big brush here.
[15:28] Little more blue and Sap Green.
[15:30] And we'll project some bushes right up through here now.
[15:34] Need a lot of paint in the brush, more green than blue.
[15:42] And we just let these run right on down like so.
[15:45] (jazzy guitar music)
[15:52] And we can highlight these with a little yellow, Sap Green.
[15:58] We're getting much darker in color now.
[16:02] There.
[16:09] Just sort of vary your color tones
[16:11] back and forth a little so they stand out.
[16:13] Leave the dark areas, that's the only thing you have
[16:15] to separate all these beautiful bushes.
[16:19] Mm, there's a nice one.
[16:27] Okay.
[16:28] Add a little bush right in here.
[16:41] Looks like some of the beautiful streams
[16:42] that we have in Alaska.
[16:46] Walk through the woods, and you listen to, and you look at.
[16:50] And they make you happy.
[16:52] They have a beautiful sound to them.
[16:54] You can almost hear the bubbling and carrying on
[16:56] as it travels down the creek bed here.
[17:02] Just with the Van Dyke Brown here, we're just adding
[17:04] a few little sticks here and there,
[17:06] you always have in the woods.
[17:12] Okay.
[17:16] Now we can take a clean knife
[17:18] and just scrape through the dark areas
[17:19] and let the canvas show through to give
[17:21] the indication of all kind of little sticks and twigs
[17:24] that are going through here.
[17:28] There they are.
[17:34] Just using the point of the knife here.
[17:38] And these little sticks create
[17:40] tremendous distance in the painting.
[17:46] So many of the fast painting techniques
[17:47] that I have seen around the country
[17:49] as I teach this almighty method,
[17:51] are very flat, have very little depth to them.
[18:01] Okay, maybe now, we might as well have some fun here.
[18:05] Let's take some Van Dyke Brown,
[18:07] and let's put an almighty dead tree right up through here.
[18:11] You always have dead trees in the woods
[18:13] when you're walking around.
[18:16] There.
[18:17] Be brave, go right across the waterfall here.
[18:23] And we'll just lay this in with a knife.
[18:27] We're using very thick paint here.
[18:32] Right across the top.
[18:35] And we'll just give him a little friend
[18:37] right beside him here.
[18:39] This whole tree's just about, just about had it.
[18:42] He's gonna sort of fall over in the stream
[18:44] and be washed away here pretty soon.
[18:47] But until them, he's still part of the beauty that's
[18:51] ever-evident in nature.
[18:59] We'll just make him a little taller,
[19:01] that way he'll make a bigger splash when he hits the water.
[19:09] Okay.
[19:11] Now I'm gonna use the liner brush
[19:13] with a little bit of thin oil on it,
[19:15] a little yellow and a little Permanent Red mixed together,
[19:18] we'll brighten this one up a little touch.
[19:22] And I'm gonna just go down the side of it here,
[19:26] just highlighting a little.
[19:32] We need something bright here,
[19:34] so I'm gonna just use this tree.
[19:37] There.
[19:39] And let this sort of streak so it looks like bark.
[19:52] Okay, we'll wash him off.
[19:56] And we'll use some more of the thin oil
[19:58] and a little Van Dyke Brown,
[20:00] and we'll put a few old branches
[20:01] that are hanging on this tree.
[20:08] Okay, and with the thin oil, it makes the paint thinner.
[20:10] So once again, you're working with thin and thick paints,
[20:13] the thin paint will stick to the thicker paint.
[20:16] And I recommend you use an oil,
[20:18] if you use paint thinner it has a tendency to bleed
[20:22] if you're not very careful.
[20:25] And the oil makes it much slicker.
[20:27] There we go.
[20:33] Mm, there we are.
[20:38] Just a few old limbs here and there,
[20:40] let's get a little more oil here.
[20:45] And when you're working this paint in the oil,
[20:46] turn your brush, that brings it to a nice point.
[20:51] And you can make all these delicate little limbs and stuff.
[20:55] So put some over here on this one.
[21:06] At home you have unlimited time,
[21:08] here we're limited by our time factor,
[21:10] but you can put tremendous detail in these paintings.
[21:17] So we're just trying to give you an idea here,
[21:19] we're just trying to give you a guide to follow,
[21:21] to teach you how to use this fantastic technique.
[21:24] And at home, let your imagination be your guide,
[21:28] let your heart take you wherever you want to be.
[21:32] (gentle guitar music)
[21:39] There, look at all those little limbs.
[21:40] And just in a matter of minutes.
[21:47] Okay, maybe we'll have one come in right through here.
[21:52] There we go.
[21:54] Just let them flow off your brush.
[21:57] And this tree tends to push everything back in the painting,
[22:00] give it more distance.
[22:05] And maybe there's just an old hanging sort of here and
[22:08] there.
[22:12] There we go.
[22:17] Okay, we'll take a little touch more of the highlight color,
[22:20] that's yellow with a touch of Permanent Red.
[22:22] And a little oil in it.
[22:24] And we'll just highlight some of these major limbs here.
[22:29] Just let the brush flow right down the limb.
[22:34] If you have a problem,
[22:36] maybe your hand's not steady enough to do this,
[22:38] use your palette or something to sort of balance your hand.
[22:43] I was very fortunate, I was blessed with a very steady hand.
[22:48] And
[22:50] it comes in very handy when you're doing
[22:52] these little delicate things.
[22:54] (gentle music)
[22:59] Okay, your little highlights over here.
[23:09] There we go.
[23:14] Just sort of work all this together.
[23:22] Little bit right up here.
[23:27] Okay, we'll clean out the brush here.
[23:32] And let's see.
[23:35] What do we need here?
[23:36] I'm gonna pull this down just a little bit,
[23:38] to make it look a little, there we go.
[23:41] A little more of a cliff right here.
[23:44] Stone, very dark.
[23:54] Maybe right over here we'll build
[23:55] a nice little stone right here too.
[23:59] We have one in the water, maybe we need one over here.
[24:06] This is straight Van Dyke Brown again.
[24:11] And we'll take a little touch
[24:12] of the blue and the brown and white.
[24:24] Okay.
[24:25] Just lay this on very gently, just let the paint break.
[24:31] It's a very, very gentle touch.
[24:34] Super gentle touch.
[24:37] You almost let the knife touch.
[24:43] Now we'll take a little more of the Magic White,
[24:46] a little green and yellow and mix it together,
[24:49] we'll make some little bushes here
[24:51] to come up and protrude over the stone.
[24:53] You need a thin paint to go over the top
[24:54] of this very thick paint that you've put on.
[24:58] So there we go.
[25:04] And we put some little grassy areas around the trees' foots.
[25:11] Okay.
[25:16] Alrighty.
[25:18] (gentle guitar music)
[25:27] And we wanna splash that back up on the stone here.
[25:31] Like so.
[25:34] Okay.
[25:36] Good, I think we just about
[25:37] have our little stream finished today.
[25:40] And if you're painting along with us, you should have
[25:43] just about completed this painting.
[25:45] I might put a few little touches here and there.
[25:48] As I say, at home you have time to put in
[25:49] tremendous detail, you can work and carry on
[25:53] and build all kind of happy little things in here.
[25:56] Here, we're limited by the amount of time we have
[25:58] so we're just trying to show you the basic technique,
[26:02] the basic idea.
[26:04] Need a little highlight on this little dead one
[26:06] that's laying right out through here.
[26:13] Okay.
[26:14] Just a little sticks here and there.
[26:18] Little brighter color so they show up.
[26:22] There's one right in front of the stone.
[26:35] Okay, I think we'll just take a little thin oil,
[26:37] Permanent Red here, and we'll sign this painting.
[26:41] Little more oil.
[26:43] (upbeat guitar music)
[26:45] And I hope you've enjoyed this.
[26:48] This is sort of a new idea.
[26:50] As I say, we've used no Magic White on this canvas,
[26:52] just pure Sap Green.
[26:54] This will work in a multitude of colors,
[26:55] you can paint the canvas with blue,
[26:57] with combinations of colors, and make some of
[27:00] the most fantastic little paintings you've ever seen.
[27:03] One of the prettiest ones is to paint it with
[27:04] Van Dyke Brown, and make beautiful autumn scenes out of it.
[27:08] And the brown is picked up by the yellows
[27:09] and oranges and reds and just, it just stands out.
[27:12] Fantastic painting.
[27:15] Okay.
[27:17] We'll just sign this one.
[27:26] There we go.
[27:31] (upbeat guitar music)
[27:37] Yeah.
[27:39] And we'll call that painting finished.
[27:42] Once again, I hope you've painted along with us,
[27:44] and you've enjoyed this picture.
[27:46] It is a lot of fun.
[27:47] And we hope to see you again next time,
[27:49] and we'll do another happy little painting.
[27:51] Until then, from all of us here, happy painting.
[27:55] (upbeat guitar music)
`,te=`YouTube transcript
Video ID: loAzRUzx1wI
Language: en
Captions: authored or unspecified

[0:01] - Welcome back.
[0:02] Today I thought we'd do a painting that's right out of the
[0:04] heart of Alaska.
[0:05] We're gonna start with a black canvas, which I've already
[0:07] covered with a coat of Van Dyke brown and Prussian blue.
[0:12] And these colors are transparent, so it'll still look black.
[0:15] In this painting we want to show the Moon in the sky
[0:17] with some happy little clouds floating around,
[0:20] put some almighty mountains, some beautiful, frost-colored
[0:23] bushes, and we'll see what happens from there.
[0:26] - I'm gonna start with a little titanium white.
[0:30] And we'll start right up here where we want the Moon to be.
[0:33] And just make little x-es.
[0:36] And just start working around.
[0:39] You want to start in the center and work outwards so that
[0:42] the light gets progressively darker as it moves away
[0:45] from the Moon.
[0:47] And we'll go out in this direction so that it hits the
[0:49] curvature of the Earth and bounces back up.
[0:53] Okay, there we go.
[0:55] Already, you should be able to see how the white paint is
[0:57] beginning to pick up the color underneath.
[1:00] And we'll just blend this together.
[1:02] There we go.
[1:05] Okay, now we don't want to let this get too bright;
[1:08] we still want it to look like night when we're finished,
[1:12] so just work it 'round and around and all the way out
[1:14] to the edges.
[1:17] And we'll do a little over in here.
[1:21] Now then, we'll take the large brush, and very gently,
[1:26] we'll bring this together, just by making little x patterns.
[1:31] There we go.
[1:39] Makes all the little actions in the sky.
[1:45] And we'll come across.
[1:47] Now, let's put the Moon in.
[1:49] And we'll do that by taking a clean brush, and we'll load it
[1:53] full of white paint, and we go right straight
[1:57] into the canvas where we want the Moon to be,
[1:59] and we push quite hard.
[2:02] And push the paint right into the canvas, and just turn it.
[2:06] There.
[2:08] Get it in with the knife, very carefully, we'll take off
[2:11] just the excess paint.
[2:15] Let me clean this ol' big brush out here.
[2:24] There we go.
[2:25] Now very gently, we'll bring this together.
[2:27] Just work it back and forth, and create the illusion of a
[2:32] moon setting up here in the sky.
[2:38] Okay.
[2:39] Now then, let's put some happy little clouds up here.
[2:43] And we'll use the almighty fan brush, and we'll just use
[2:45] this blue and brown color.
[2:49] And...
[2:50] Load it full of paint, and we'll take, just using the
[2:53] corner, and we'll put in some happy little clouds,
[2:56] just let one float right across the Moon, here.
[3:00] Lot of paint on the brush.
[3:04] Okay.
[3:07] There we go.
[3:09] Now, maybe, maybe, maybe, you can see right up here,
[3:14] we'll put another happy little cloud.
[3:18] Little sneaky cloud running around here at night.
[3:23] There we go.
[3:25] And you're pushing this paint into the canvas; really,
[3:27] really work it into the canvas.
[3:32] And maybe down here we've got some little delicate clouds
[3:33] that are just floating around, really small, little clouds.
[3:37] There we go.
[3:40] Just lay 'em in.
[3:46] Mmmkay.
[3:49] Now, let us clean the fan brush.
[3:56] And wiping dry.
[3:58] And we'll take a little bit of titanium white,
[4:01] mixed with just a little bit of the same color.
[4:06] And we'll push some highlights in here.
[4:08] Just take the fan brush and just work the corners.
[4:12] Just the corner of the brush.
[4:15] Just push the paint right in here.
[4:17] There.
[4:21] A little light playing across the top of this cloud.
[4:26] Maybe right along here.
[4:28] This is your world, so wherever you want light to strike
[4:31] this cloud, let it happen.
[4:35] Okay, and let's put some highlights right along these
[4:36] little clouds right here.
[4:42] And we're pushing quite hard with this.
[4:43] Once again, we want to push the color right into the
[4:46] material if possible.
[4:53] There we go.
[4:54] Now, in this cloud up here, since it's above the Moon,
[4:57] the light's gonna strike the bottom of it.
[5:00] So we put the highlights on the bottom rather than
[5:02] on the top.
[5:07] There.
[5:10] Give me a nice little thing right out
[5:11] through here like that.
[5:17] Maybe a little light striking around up in here, just a
[5:19] little something playing.
[5:22] Okay, now, we'll take the big brush.
[5:25] Make sure it's dry and clean.
[5:27] And we're just gonna gently hypnotize this.
[5:28] Just to bring it together.
[5:31] Isn't that fantastic?
[5:33] Look at that.
[5:34] Look at all the little things that happen in this cloud.
[5:37] This is unplanned.
[5:39] It really just happens.
[5:41] You really can't control what's gonna happen here.
[5:43] Don't try to, don't fight it.
[5:45] Use what happens.
[5:46] Okay.
[5:48] Let's make a happy little mountain now.
[5:50] We'll take some blue and some brown, still using the same
[5:52] color.
[5:55] And we'll draw in our basic mountain shape, here.
[5:57] Here we go.
[6:00] Really push.
[6:02] Really forcing that paint into the material.
[6:13] Maybe we'll make this one come up a little higher so we can
[6:15] see clouds behind it.
[6:24] We use a large brush to pull that paint down, this removes
[6:27] any excess that we have left on the canvas.
[6:30] 'Cause we're trying to get all the paint off the canvas
[6:32] that we possibly can.
[6:39] Okay.
[6:44] Let's just clean the brush.
[6:48] Once again, we clean the brush with odorless paint thinner.
[6:55] Now, let's put some snow on the mountain.
[6:57] We'll take some titanium white and just a little touch
[7:00] of blue.
[7:03] Just a little blue.
[7:07] Okay.
[7:08] And let's let some snow just run right down this mountain.
[7:11] Just let it break and play.
[7:12] This has a very delicate touch.
[7:15] Very light touch.
[7:17] You're almost touching the canvas with the knife.
[7:24] Oh, here's a nice little ridge, just let this little ridge
[7:26] just play around like that.
[7:32] And there we go.
[7:36] And we'll put a little bit of light right on
[7:37] this little peak.
[7:40] Let it just break and play.
[7:43] Now we're gonna use blue and white next to a darker value
[7:46] for the shadow and we'll start right here and let this just
[7:50] follow right along.
[7:52] Let it go.
[7:58] Okay.
[7:59] And we'll put a little shadow behind this one.
[8:03] There we go.
[8:05] Maybe all the way over here a little shadow.
[8:12] Each highlight needs its own private shadow.
[8:19] And we can bring this down a little further.
[8:23] As you work on these mountains, you begin seeing all kinds
[8:25] of little things happening.
[8:27] Use what you see.
[8:28] Don't plan it.
[8:33] And maybe we'll put a little ridge right here.
[8:36] Ah, there's another one, I see him right there.
[8:38] There he is.
[8:44] Okay, now let's lay the bottom of these mountains into a
[8:47] little mist.
[8:48] Clean, dry brush, and all we're gonna do is tap.
[8:52] Always following the angles we've created in the mountain,
[8:54] down like so.
[8:57] Just tap.
[9:04] Mmmkay, over here, we'll follow these angles, and tap from
[9:06] this direction.
[9:13] Okay, a little bit here.
[9:14] Then we're gonna lift upward just enough to take out the
[9:16] little tap marks.
[9:19] There we go.
[9:29] Mmmkay, now we're getting a nice little misty effect
[9:31] over here.
[9:35] And we just work that right out, and we're ready to come
[9:38] forward.
[9:39] We've created small mighty mountains in just a few minutes
[9:41] here.
[9:43] Mmmkay.
[9:45] Now, we'll take a little more of the blue and brown,
[9:49] and back to one of our golden rules,
[9:50] you need dark in order to show light,
[9:53] so we're gonna start by putting some dark on here.
[9:55] Load a lot of paint into the brush, and we just push in
[9:58] little bushes right out of the...
[10:00] Right out of the brush.
[10:03] Here he comes.
[10:04] There he is.
[10:08] Just put in some dark on him so we'll have
[10:09] some light showing.
[10:16] Alright.
[10:18] Okay, now we can take a brush...
[10:22] We use a little bit of magic white and a little bit of
[10:24] plain white.
[10:28] Thin paint will stick to a thick paint.
[10:30] So we're thinning the paint just a little bit.
[10:32] And we're gonna push in beautiful little snow-covered trees,
[10:36] way back in the distance on here.
[10:41] There.
[10:42] Look at those son of a guns.
[10:46] There they are.
[10:48] Just hundreds of little trees, little bushes, all these
[10:50] things happening way back there.
[11:00] Okay.
[11:02] Now we'll take the big brush and clean it up a little bit.
[11:08] And we have all these nice bushes here, they need some
[11:10] reflections.
[11:13] So we'll take a clean brush and just a little bit of white
[11:15] paint on it, and we'll pull that down.
[11:18] Just grab ahold and pull.
[11:20] Make these nice streaks.
[11:23] This is mixing with the color that we have underneath,
[11:25] the blue and the brown.
[11:32] These lines need to be straight down reflections.
[11:38] What a fantastic way to make reflections.
[11:43] There.
[11:46] Now, we'll go across just enough to give it a watery effect;
[11:48] we don't want to destroy all those lines.
[11:50] We just want to make it look like it's in the water.
[11:56] Mmmkay.
[11:58] Let's take...
[11:59] Lay a little touch of snow along there.
[12:03] We'll just take the knife with a little paint.
[12:07] Just put some little snow right along there.
[12:11] Ooh, better get your coat out, this is gonna be a cold
[12:13] painting.
[12:16] I may have to go find my old mukluks and put 'em on.
[12:22] In Alaska, we have a word for people who have came to the
[12:26] great country and only been there a short period of time:
[12:29] it is called "cheechako."
[12:32] And if you've been in Alaska less than a year, you're a
[12:35] cheechako.
[12:38] So maybe you've learned a new word today.
[12:41] And where I live it's not unusual for it to get 60, 70
[12:43] degrees below zero.
[12:46] And we have a thing in nature that happens, it's called
[12:50] ice fog.
[12:52] Normally, it has to be about 30 below or colder.
[12:55] And this ice fog coats everything, every little branch,
[12:59] with little crystals of ice that weigh almost nothing.
[13:03] But they create unbelievable beauty.
[13:06] Light plays though these little crystals and acts as little
[13:09] prisms and breaks up the light.
[13:11] You see all the fantastic colors shining and shimmering
[13:14] and it is really something.
[13:17] Okay, here I'm just scratching right through the paint.
[13:20] Make it look like little trunks.
[13:23] Alrighty, let's take the almighty fan brush...
[13:29] During this series we have made trees with a two and a half
[13:32] inch brush, with a one inch brush, and a fan brush.
[13:35] So, all of these brushes you can use to create almighty
[13:38] trees.
[13:38] Today we're gonna try the fan brush.
[13:41] Load a lot of paint into the brush.
[13:43] Figure out where you'd like to have a beautiful little tree.
[13:46] Just touch, and then just using the corner of the brush,
[13:50] just begin building some little limbs on here.
[13:55] There we go.
[14:00] And we're still using the blue and the brown.
[14:03] Come right down there.
[14:04] That looks like a good place for a tree.
[14:08] Gonna push the paint right into the canvas.
[14:18] Okay, and maybe we need one over here that's sort of tired,
[14:21] sort of leaning over a little bit.
[14:24] In nature, trees grow in every direction.
[14:29] Maybe we'll put another one right here.
[14:31] These trees are so much fun to get started on, I have a hard
[14:34] time stopping.
[14:40] And we'll put another one right there.
[14:47] Now, as we work forward, we want these trees to begin
[14:49] getting much larger to show distance in this painting.
[14:57] In so many of the techniques where people paint very
[14:59] rapidly, the paintings are very flat, very overworked,
[15:03] washed-out looking.
[15:04] In this technique, you can create depth that is
[15:07] unbelievable.
[15:10] Distance in paintings.
[15:15] And this is how we do it.
[15:17] We use size, we use color.
[15:20] All of these things combine together to create the illusion
[15:23] of distance in a painting.
[15:25] Alrighty.
[15:25] Well, let's do some more trees.
[15:26] We'll put some on the other side over here.
[15:29] Put an almighty tree up here.
[15:33] There he is.
[15:37] Very dark.
[15:44] Mmmkay.
[15:45] Just let that tree come right out of your fan brush.
[15:47] Trees live in your fan brush, but you have
[15:49] to scare them out.
[15:52] It takes a little practice.
[15:53] The first time, it's gonna be a little touchy.
[15:56] Next time, it gets easier.
[15:57] Each time you do it, you learn from it.
[15:59] You progress.
[16:03] I've painted for 20 years, and I'm still learning.
[16:05] Every day I learn.
[16:10] Spend time studying nature if you wish to paint nature.
[16:12] You must understand nature.
[16:15] Talk to trees, look at the birds.
[16:17] Whatever it takes.
[16:21] Okay.
[16:22] Now, then, let's do an almighty tree, big tree.
[16:26] We'll come right over in here.
[16:31] Okay, here he comes.
[16:37] Big ol' tree.
[16:42] You got your coat out yet?
[16:43] You may need it here any second.
[16:50] In the paintings like this, on the black canvas, you can do
[16:52] a multitude of things with this, multitude.
[16:55] You can use all different colors.
[16:58] All you're looking for is a color that's transparent,
[16:59] so that the black shows through.
[17:01] Use this black to your advantage.
[17:05] We'll have another tree right there.
[17:10] There we go.
[17:16] There are a lot of people we have taught to do these black
[17:17] canvas who are absolutely making a living out of it now.
[17:25] And we have literally taught thousands and thousands
[17:27] of people to be almighty painters.
[17:32] To create things of beauty they never dreamed possible.
[17:35] And you can do it too.
[17:36] You can do it.
[17:41] Just jump right in here and paint along with us, we'll
[17:43] teach you how to do it; we'll make a happy painter
[17:45] out of you also.
[17:49] Okay, I think that's enough trees for right now.
[17:51] Let's take a little bit of white and blue mixed together,
[17:57] looking for a dark blue, here.
[17:59] And let's go right into this area here, and let's put some,
[18:03] let's put some happy little bushes and trees back in here.
[18:06] All this is is the shadow color.
[18:12] We put the shadow in first, and then we'll highlight it.
[18:16] And, while we've got the shadow here, let's put some right
[18:18] into the water.
[18:20] We can just reflect some of this right in here.
[18:27] Okay, now, let's...
[18:28] Oh, let's have some bushes over in this side also.
[18:32] Just start bringing this painting together.
[18:35] Now at home you have unlimited time.
[18:37] You can sit and come up with all kinds of fantastic things
[18:40] to do in this.
[18:41] You can put tremendous detail.
[18:43] Here we are limited on time, so we're trying to give you
[18:46] ideas, we're not trying to just give you something to copy,
[18:49] we're trying to give you an idea, to teach you a technique,
[18:53] so that you can use this and make unbelievable things.
[18:57] Back into the magic white and the titanium white.
[19:01] And we'll make some happy little bushes here.
[19:05] Look how that color stands out against the black.
[19:13] There we go.
[19:14] And as you work more and more in this, you'll know just by
[19:17] pulling the brush through, the correct consistency of the
[19:19] paint, if it's too thin, if it's too thick.
[19:23] It's only a matter of time where you can pull the brush
[19:25] through that paint and almost tell what brand it is.
[19:29] Now we'll just come across, and we'll turn this into
[19:31] beautiful little reflections.
[19:34] And while we've got the brush loaded here, we'll just, let's
[19:38] do this one right here.
[19:40] Big tree here.
[19:44] There we go.
[19:46] Little more of the magic white.
[19:48] And we'll come right down here and put a happy little bush.
[19:53] Now, let's reflect these right into the water; just let 'em
[19:55] reflect.
[20:00] Okay.
[20:01] Clean off the brush.
[20:09] That's the most fun of painting is beating your brush.
[20:13] It's a good way to get rid of all your anxieties and
[20:14] hostilities.
[20:18] Look at those reflections.
[20:19] But it's a very gentle touch.
[20:23] And now we'll take a little bit of white paint,
[20:25] just put some snow in here for all these things
[20:27] to sit on.
[20:29] There we go.
[20:37] Okay, a little bit of dark paint; we'll put some trunks in.
[20:40] Some stems.
[20:43] There we are.
[20:50] This sort of gives the tree body, gives it shape.
[20:52] And it also shows distance in a painting.
[20:54] Use these to your advantage.
[20:58] Okay.
[21:00] Take a little magic white, make us a water line under here.
[21:04] Just use a thin paint to make your water line.
[21:06] It'll flow off the knife.
[21:15] Alrighty.
[21:23] There we go.
[21:25] Nice little water line.
[21:29] Mmmkay, let's put some happy little bushes over here on the
[21:32] other side now.
[21:34] And we'll start right here.
[21:37] A nice one, there.
[21:39] Leave a lot of these dark areas showing.
[21:42] Be careful that you don't cover 'em all up.
[21:43] Your painting will get very, very flat.
[21:50] Look at all the snow on those.
[21:55] Okay.
[21:58] And work 'em in layers so you have distance in here.
[22:01] Do one bush at a time.
[22:05] Okay, we'll put a few little sticks in here.
[22:15] Mmmkay.
[22:18] Now then, let's lay a little snow into this side.
[22:23] Just using straight titanium white.
[22:24] This is very firm.
[22:26] And let it break, so you have shadows showing through.
[22:30] Just like when we do the mountains, let it break.
[22:36] Okay.
[22:37] There we go.
[22:40] And we lay the snow in like so.
[22:52] And maybe, maybe there was an old trapper that lived out
[22:54] here and one day he went to check his beaver traps
[22:58] and maybe he fell into the river here and drowned, but his
[23:00] old cabin's still here, so let's draw an old cabin in.
[23:05] I suggest you scrape it with a knife first, scrape out the
[23:07] basic shape.
[23:08] It gets rid of the thin, loose paint underneath.
[23:11] It's also a good way to lay out your general shape of your
[23:14] cabin, get your perspective right.
[23:17] There we go.
[23:19] Just very basic shape, that's all we're looking for.
[23:23] Big thing is to get rid of all that loose paint.
[23:26] And we'll take some Van Dyke brown and we'll do the far eave
[23:30] out here first.
[23:35] There.
[23:39] There we go.
[23:41] Now, we'll take some titanium white, and let's lay some
[23:46] snow on the roof.
[23:50] Over here.
[23:52] There.
[23:53] Let's bring this all together.
[23:57] There we go.
[23:58] Now, we need to have a little snow on the other side
[24:00] of the roof, so we'll just take a little white on the knife
[24:02] and lay it in like so.
[24:08] Little more brown, and we'll begin putting all this
[24:10] together.
[24:16] There we go.
[24:19] A fantastic way to make a little cabin.
[24:28] There.
[24:29] And if you want to make it look even older, you can take
[24:31] just a little bit of the white paint and let it just sort of
[24:33] bounce along here, very gently.
[24:38] Just let it touch and bounce.
[24:41] Little more dark to create the shadows on top.
[24:43] Ooh, look at that.
[24:45] Look how old that wood looks.
[24:47] It's a super way to make old buildings and stuff if you ever
[24:50] want to try it.
[24:53] Okay, I think we need a door in here now.
[24:55] Somebody might need to come along and stay in this old
[24:57] cabin, so he's got to have a way to get in.
[25:00] There we go.
[25:03] And we'll take in some highlights around the door, just by
[25:06] using the knife.
[25:09] And probably when this old trapper lived here,
[25:13] he's just like all the rest of us, he ran out of room,
[25:16] so he probably built him a little shed out here.
[25:18] So we'll just build us a little shed.
[25:20] Just bring a little snow for the roof first.
[25:23] There we go.
[25:26] Just like so.
[25:29] Take a little bit of dark paint...
[25:33] A little brown...
[25:36] And we need a wall over here, so we'll just drop it in.
[25:43] There.
[25:47] Okay, let's make this an old slab cabin.
[25:50] So we'll just cut in some slabs here with the point
[25:52] of the knife.
[25:56] There we go.
[25:57] And we can take a little white and clean this all up.
[26:02] Right now, you should begin having a painting that's
[26:04] beginning to take shape, beginning to look well.
[26:09] Should be very happy with it.
[26:14] And I think we've said it before, but painting should do
[26:16] one thing for you: it should create happiness in your heart.
[26:19] It should make you happy.
[26:22] Let's take and put a little bush right here.
[26:26] Just let a few of these run down.
[26:29] Maybe, maybe a little bush right here to sort of push this
[26:33] cabin back into the painting.
[26:36] Right along that cabin.
[26:39] Okay, we need some highlights on this little bush.
[26:41] There we go.
[26:45] Okay, and we'll cut a few little sticks here and there.
[26:48] We're just cutting right through the light paint,
[26:51] letting the dark show through.
[26:58] Alright.
[27:04] This painting's beginning to get close to being done.
[27:11] Let's take the fan brush here, and normally, I would leave
[27:14] these trees very dark.
[27:16] I want to take a little bit of blue and just tap a little
[27:20] so you can see them a little better at home.
[27:23] Just to give you an idea.
[27:25] Normally I leave them very, very dark, so they really give
[27:28] the impression of night time.
[27:31] Like so.
[27:34] Okay, just here and there.
[27:35] Just a few little highlights.
[27:39] There.
[27:40] And just a few over here.
[27:45] Like so.
[27:51] There we go.
[27:54] Alrighty.
[27:55] I think we're gonna sign this painting, and call it
[27:57] finished.
[27:58] Take a little of the thin oil.
[28:02] And let's sign it right here.
[28:05] I hope you've enjoyed this painting.
[28:06] It is a great deal of fun.
[28:08] We certainly have enjoyed being with you today.
[28:11] And I hope you've painted along with us, and you also have
[28:13] an almighty painting.
[28:15] All you need is the dream in your heart and the desire
[28:17] to put it on canvas.
[28:18] Until next time, we wish you happy painting.
[28:21] Thank you very much.
[28:27] (happy little country music)
`,E=`YouTube transcript
Video ID: sDdpc8uisD0
Language: en
Captions: authored or unspecified

[0:01] - Hello, welcome back.
[0:02] I thought today, we'd do an almighty picture
[0:04] that had some huge mountains in it
[0:06] and maybe today, we'll also work a little bit on
[0:09] putting some clouds floating in front of the mountains.
[0:11] This is always something that's very difficult to do,
[0:14] so I'll try to show ya how to do that
[0:16] and I hope you have a canvas set up on your almighty easel
[0:18] and cool drink in hand and let's go here.
[0:23] I'm gonna start with a little bit of alizarin crimson
[0:25] and a touch of prussian blue
[0:27] and maybe we'll just make a sky that's sort of a
[0:30] lavender type and sorta taste it, test it.
[0:34] There we go.
[0:36] I already have magic white on the canvas.
[0:39] So, we're just literally mixing paint
[0:42] right here on the canvas.
[0:43] (calm jazzy music)
[0:48] And we'll just bring this down to about like so.
[0:52] There we go.
[0:54] Now, go into just a little prussian blue
[0:59] and we'll lay this right in like so, there we go.
[1:08] Okay.
[1:10] And while we have the old brush dirty here,
[1:11] I'll take a little phthalo green in prussian blue
[1:14] and we'll lay in some water here.
[1:24] And already, we have a masterpiece for
[1:28] a museum of modern art somewhere.
[1:35] Okay, now we'll clean the old brush.
[1:43] Be sure it's good and dry.
[1:45] Then, this is just a clean, dry brush
[1:47] and we're just gonna bring these two colors together here.
[1:54] Okay.
[1:58] Just do you have a nice blending.
[2:00] You don't wanna be able to tell where one stops
[2:02] and the other one starts.
[2:06] And we'll hypnotize it and sort of blend it out.
[2:14] Okay, now let's take the fan brush,
[2:19] a little bit of titanium white
[2:21] mixed with a touch of permanent red
[2:23] just to give it a little pinkish hue.
[2:26] We don't wanna set these clouds on fire.
[2:27] All we wanna do is give it just a little hue here,
[2:31] just a little pinkish hue
[2:32] and we'll push us in some nice little clouds here.
[2:37] We're pushing very hard just to push the value
[2:39] right into the canvas.
[2:45] And maybe we'll put little cloud floating around
[2:49] right here.
[2:57] Okay.
[3:00] We'll take and gently, gently, gently
[3:03] blend that together.
[3:05] Very light, delicate touch.
[3:09] Don't overwork these clouds.
[3:10] They're very, very easy to overwork 'em.
[3:15] Then we'll hypnotize 'em.
[3:23] Okay, let's build us an almighty mountain.
[3:26] We'll take a little bit of blue
[3:28] and some brown, touch of alizarin.
[3:31] And a little bit of white.
[3:35] There we go.
[3:37] And mix your color marbley.
[3:38] Don't mix it dead.
[3:42] Let's start way up here.
[3:45] Put us an almighty mountain.
[3:49] Maybe there's a nice little peak over here.
[3:52] Let this drop down.
[3:56] We're really pushing this paint into the canvas.
[4:00] Maybe we'll have another little peak over in here.
[4:06] And we'll take off all the excess paint.
[4:14] Then we'll take the big brush and pull it down
[4:17] just to make sure we've got all the paint off of it
[4:19] that can come off.
[4:21] All we wanna leave is the value in the canvas,
[4:22] the color.
[4:32] Now, we'll start with a little bit of titanium white
[4:35] and I'm gonna mix a little bit of brown and blue with it
[4:37] just to gray it down.
[4:40] Just a little bit.
[4:49] We can start putting some highlights on this
[4:51] almighty mountain.
[4:57] Maybe we'll have a little peak rolling
[4:59] right down through there.
[5:08] Maybe a little light's hitting right up here.
[5:15] And for shadow color, we'll take a little bit of
[5:18] blue and brown and white
[5:22] mixed with a little darker value.
[5:25] And we'll just lay us some shadows right in here.
[5:33] And each little highlight needs it's own private shadow.
[5:51] Maybe we'll add another little peak here.
[5:53] This is your mountain, so you can add
[5:55] what you want to on it.
[6:06] Now let's diffuse the bottom of it
[6:07] and here, we're just gently tapping.
[6:10] Don't wanna destroy, just diffuse.
[6:16] And then we'll pull just to take out
[6:18] the little tap marks.
[6:24] Now, we'll lay some clouds on top of the mountain.
[6:27] And I've added a little bit of magic white
[6:29] with my paint just to make it a little bit thinner.
[6:33] You remember our golden rule here.
[6:35] Thin paint'll stick to a thick paint.
[6:38] So, maybe we'll have a little cloud here
[6:39] that just floats right across the mountain.
[6:51] Okay.
[6:56] Maybe right up here, there's one too.
[6:58] Seems like I remember one up here.
[7:08] Now, very carefully, we'll blend this in.
[7:15] Super light touch here.
[7:20] Okay, let's take
[7:24] and let's work on this peak now.
[7:27] Let's let him travel down and
[7:30] just come right down in the foreground here.
[7:45] Give him a few little shadows
[7:48] so he stands out as an individual.
[7:53] And maybe a few little shadows in here.
[8:04] Okay and once again, we'll diffuse this
[8:07] just to lay some mist in here.
[8:21] And then, maybe another little layer of clouds
[8:23] and we'll add a little more magic white
[8:26] to keep the paint thin.
[8:31] And maybe this one just drops right out of the sky here.
[8:38] And plays around the bottom.
[8:51] There we go.
[8:53] Just nice, soft little clouds.
[9:04] Okay, this is a very, very delicate touch.
[9:11] There.
[9:18] And maybe we'll just take and
[9:21] maybe there's another little stone right in here.
[9:24] Travels around.
[9:28] Just to show ya how to continually bring things forward here
[9:32] and we need this to be a little darker
[9:34] than the background back here.
[9:42] And we'll lay some highlights right on here.
[9:48] Let that paint break.
[9:49] Let it break so you have all these little holes in it.
[9:53] Let some of the dark show through.
[10:14] There we go.
[10:19] And maybe just a few little clouds,
[10:21] little misty areas floating around in here.
[10:27] This creates a tremendous illusion of distance,
[10:31] makes things far, far away.
[10:36] Now, we'll just hypnotize this a little touch.
[10:45] And it's vitally important, when you're doing this at home,
[10:47] that you use a paint that's very, very firm.
[10:50] Otherwise, you have nothing that's thinner
[10:51] to go over the top of it, so be sure
[10:54] to use a very firm paint.
[10:57] Okay, let's mix us up a little color.
[11:00] We'll add a little
[11:03] sap green, little more blue in here.
[11:09] Maybe just a touch more alizarin.
[11:11] There we go, nice color.
[11:12] And don't mix it dead, remember not to mix it dead.
[11:17] And we'll take this old big brush
[11:19] and let's put us some little foothills right in here.
[11:26] Don't let the size of this big brush scare you away.
[11:28] Use it, it does fantastic things.
[11:35] Now I'm gonna give it just a little upward sweep
[11:37] to make it look like little trees
[11:38] way, way back in the distance.
[11:41] There we go.
[11:47] Then we'll tap a little bit here
[11:50] just to lay some mist in between these.
[11:52] We'll have two of 'em, I think.
[11:58] Now we'll add a little more of the brown
[12:00] and a little more of the blue just to
[12:02] darken it up a little bit here.
[12:03] All the same colors.
[12:04] Blue, brown, a little alizarin, sap,
[12:07] just to make it a little bit darker
[12:08] so it'll look like it's in front.
[12:12] There we go.
[12:13] We'll lay another little ridge of
[12:15] foothills right down through there.
[12:27] We'll give those a little upward swirl.
[12:31] Just barely, barely touching the canvas here.
[12:39] Okay.
[12:50] Now we can start coming forward.
[12:52] And we'll take a little bit of sap green
[12:55] mixed with a little bit of alizarin
[12:57] and then I'll mix that into some yellow.
[13:02] Makes sort of a dirty green color
[13:05] and we'll start putting some little trees
[13:06] that are way back here.
[13:10] Load a lot of paint in your brush
[13:13] and just push upward.
[13:19] There, all these little things happening
[13:22] way back in the distance.
[13:28] And maybe just a little touch of yellow right here.
[13:32] Just let this blend right with the color that you had.
[13:35] Let it go.
[13:44] Now I'm gonna take and pull just the edges down.
[13:47] Don't overwork this because you're working with
[13:48] yellow into the blue water and it'll just
[13:50] turn it bright green on ya.
[13:52] Just pull it down, hypnotize it a little bit,
[13:57] and leave it alone.
[14:02] Now we can put a few little sticks here and there.
[14:04] Just cutting through the paint is all we're doing.
[14:09] Make it look like little trunks way back in the distance.
[14:24] We'll take just a little touch of phthalo green
[14:28] mixed with a cad yellow
[14:31] and a little bit of permanent red.
[14:34] And we'll put some highlights on these trees.
[14:38] Just where the sun's running through there
[14:39] and sparkling on top of 'em.
[14:50] There we go.
[14:53] Now, some straight vandyke brown
[14:56] and we just lay us a little, little bit of dirt
[15:01] and gravel and stuff in here.
[15:14] This isn't straight magic white and we're just gonna
[15:17] lay it right underneath here
[15:19] just to give us a little water line.
[15:23] And when you're doing this at home,
[15:25] you'll have a lot more time than we do here.
[15:27] You can take your time and put in all the little
[15:29] fantastic details that you want to back here.
[15:42] Okay.
[15:44] Let's begin moving this in a little bit closer.
[15:47] Using the same colors.
[15:51] We'll just start coming forward.
[15:56] Maybe we need a nice tall little tree right here.
[16:15] Let's put us a little bush over here also.
[16:19] Can't leave this side out.
[16:31] There we go.
[16:32] Just lay that in.
[16:42] Ya know, we'd love to hear from ya
[16:44] and love to hear how you're doing with all this
[16:46] and if it's helping you.
[16:49] We'd like to know what you wanna see on these shows.
[16:53] If you wanna see different things painted,
[16:55] different techniques.
[16:57] We'd also maybe like to, in the future,
[17:00] bring some of the better instructors
[17:01] that we have met across the United States
[17:04] and maybe we'll have them demonstrate some
[17:06] unbelievable techniques that can be done.
[17:11] But we need to know what you want, so let us know.
[17:14] Now, let's take a little bit of the brown
[17:18] and we'll just lay some little trunks here and there.
[17:26] Maybe we'll give this little bush one here.
[17:38] And we'll put some highlights on that.
[17:45] Still fascinates me how this works
[17:48] and how beautifully it works.
[17:58] Okay, let's see, maybe we need a little,
[18:02] there, that's it.
[18:14] And down in here, we need some little bushes
[18:16] that are hiding underneath this bigger one.
[18:19] And we'll put some little reflections in the water.
[18:26] There we go.
[18:30] Little red fireball there.
[18:36] Okay.
[18:39] Little touch more of the magic white
[18:40] just to thin it down a touch.
[18:42] Let's go over here
[18:45] and we'll put some nice little highlights on this tree.
[19:00] There we go.
[19:06] Leave a lot of these dark areas in here.
[19:08] They create the shadows that you need so desperately.
[19:12] And we'll put a little color right here
[19:14] for reflections.
[19:23] Then we can lay a little color right on top
[19:25] to give us nice, beautiful reflections.
[19:35] Right there.
[19:39] Okay.
[19:41] Now, let's take a little more of the straight brown
[19:53] and a little bit right along here
[19:56] and we'll just draw in some little bit of shore,
[20:01] little bank here.
[20:08] Lay a little highlight on top of that.
[20:14] Touch here.
[20:22] Okay, let's see what we got going here.
[20:26] Looks like we have a lot of space up in here
[20:28] that we really need to do something with.
[20:30] So, let's do this.
[20:32] This is alizarin, crimson, little bit of sap green.
[20:39] Now we've gotta do something up here
[20:42] 'cause we've thrown all this color in here.
[20:48] There we go.
[20:50] Maybe we'll put a little bit right out here too.
[20:53] Looks so good, we might as well not stop.
[20:59] We'll take a little bit of vandyke brown
[21:01] and let's do us an almighty tree coming
[21:03] right up through here.
[21:07] There he is.
[21:16] And you're just sort of pulling this sideways
[21:18] to lay the paint right on the canvas,
[21:20] let it pull off the knife.
[21:26] And maybe we can give him some little arms out here.
[21:33] There we go.
[21:36] And there's another one.
[21:41] And maybe this is a separate little entity,
[21:44] little tree by itself growing down here.
[21:46] Just a little sprout off the big one.
[21:55] Now we can put some highlights on these leaves.
[22:02] And just let it touch.
[22:04] Bend the bristles just the least little bit.
[22:12] There we go.
[22:20] Few over here.
[22:22] Isn't that fantastic that you can create
[22:24] an almighty tree that fast?
[22:31] We'll put a little highlight here in this one too.
[22:35] Don't want him to feel left out.
[22:41] Let's put a little something over here
[22:43] to give this a feel of bark.
[22:48] Just here and there.
[22:52] There we go.
[22:56] Let's see.
[22:57] Maybe over here.
[23:01] Let's be brave.
[23:03] Let's put an old, dead tree right up through here.
[23:09] And this old tree is tired.
[23:10] He's just about to fall down.
[23:13] Not too much left for him.
[23:22] We'll give him a little tired arm.
[23:33] There we go.
[23:35] And here and there.
[23:40] Just let these happen.
[23:48] Good.
[23:51] Maybe another little stick right there.
[23:55] Alrighty.
[23:56] Now, maybe we'll do something a little touch
[23:58] different here.
[23:59] I'm gonna take a little bit of the permanent red
[24:04] and sorta highlight this old tree,
[24:08] just run it down through there.
[24:15] There we go.
[24:26] And if we wanted to make a few more little branches
[24:28] on this tree, we can take
[24:30] a little bit of the thin oil
[24:33] and thin this down and we can lay
[24:35] just a few more little branches here and there.
[24:40] Just a few that's hangin' on.
[24:43] Most of 'em have already fallen off.
[24:55] Okay, now we'll put something here
[24:57] to cover up his foot, so it pushes him
[24:59] back down in there.
[25:00] Let's do the same thing over here.
[25:01] Need to push him back into the picture.
[25:05] And maybe we can take a little more of the
[25:07] sap green and alizarin combination
[25:09] and let's do this.
[25:13] Maybe we'll just project this right on out
[25:15] toward us here.
[25:24] Give him some highlights.
[25:36] Okay, there we go.
[25:50] By now, if you're painting at home with us,
[25:51] you should begin having a picture that's getting
[25:54] close to being completed.
[25:57] Should have listed your spirits up very high
[26:01] and ready to go to another one.
[26:08] We just put a little magic white under here
[26:10] to give us a little water line
[26:13] like so.
[26:18] And let's put a few little sticks here and there.
[26:30] Okay, there.
[26:39] Now, this is a most interesting picture
[26:41] because of the mountains
[26:43] and once again, the biggest thing
[26:45] we'd like for you to learn from this one
[26:48] is the laying of clouds in front of mountains
[26:50] and how to make these mountains be pushed
[26:52] far, far away.
[27:01] Okay, these little sticks show all different planes.
[27:03] They create the illusion of distance.
[27:13] Okay, I think this one's just about ready
[27:15] for a signature.
[27:17] So, we'll take a little of the thin oil,
[27:20] mix it up real good, make it almost like water here.
[27:25] And we'll just lay a little signature right there.
[27:30] And I'm very fortunate 'cause I have a short name so,
[27:33] only takes me a second to do so.
[27:45] And I think we'll call that one finished.
[27:46] If we mess with it any more, we're gonna start
[27:47] fiddling it to death.
[27:49] Do your picture, get your dream out on canvas
[27:52] and leave it alone.
[27:53] Don't fiddle with it all day.
[27:54] In the time you spend fiddling,
[27:56] you could do another picture.
[27:58] So, thank you very, very much for watching us.
[28:01] We hope to see you again and until then,
[28:03] happy painting.
[28:04] (calm piano)
`,ne=`YouTube transcript
Video ID: kQlFwTOkYzg
Language: en
Captions: authored or unspecified

[0:00] - Welcome back.
[0:02] Today I'd thought we'd do a little picture that's
[0:04] little different than what we've been doing.
[0:06] And today I wanna emphasize how to do several ranges
[0:09] of mountains and have some in the background
[0:11] that are very quiet, and very distant and then come forward
[0:15] with it and let's see what happens here.
[0:17] I've already prepared the canvas with a layer
[0:20] of magic white, just brushed in both directions.
[0:23] Okay, we'll start with a little bit of Persian blue
[0:27] and we're really working to the bristles of the brush.
[0:31] And we'll start right at the top
[0:34] working across
[0:36] and we're picking up the magic white as we go across here
[0:40] and automatically it makes the sky get lighter
[0:43] as it works downward.
[0:46] We don't want a sky that
[0:48] just looks like you pulled the curtain down.
[0:50] We're trying to avoid those.
[0:55] Okay, let me real hypnotize it a little bit.
[1:00] Okay.
[1:03] And while we've got some blue on the brush here,
[1:06] we might as well go ahead and
[1:09] put in a little bit of water here.
[1:13] This is still the Persian blue.
[1:20] And we'll just hypnotize this a little bit,
[1:22] bring it all together.
[1:25] Anyway it doesn't matter where you get your waterline here
[1:27] because when you put all the other stuff in,
[1:29] you can bring it to whatever points you want it
[1:31] so don't worry about it.
[1:36] Okay.
[1:40] We will wash this old brush.
[1:46] Alrighty, let's take some blue
[1:49] and a little bit of brown
[1:53] and little bit of white
[1:58] just to make a gray color, blue gray here.
[2:01] And maybe we're gonna have this mountain come way up
[2:05] on the canvas, what the heck.
[2:08] And just let it roll around.
[2:13] We're gonna have a little bump right there
[2:16] and let it wander right on off.
[2:18] Very little paint and we're pushing that paint
[2:21] right into the canvas, just really push it.
[2:26] And we'll put a little bump right there,
[2:27] another little hill.
[2:35] Okay, now we'll take and pull that paint down.
[2:38] We want it to get lighter as it goes
[2:40] toward the horizon here.
[2:42] So we pull it down.
[2:43] Once again it's mixing with the magic white
[2:46] that's already on the canvas and automatically this occurs.
[2:52] Pull this one down a little.
[2:56] Okay.
[2:59] Like so.
[3:00] Now this time we want very little paint,
[3:04] very little paint.
[3:05] All we wanna do is give little indications back here.
[3:11] Just a little,
[3:13] few little highlights.
[3:20] Light plane right through here.
[3:25] And you'll find if you're right handed,
[3:28] it's normally easier to have the light
[3:29] coming from the right.
[3:32] If you're left handed it will vary from person to person.
[3:35] So you have to find what's comfortable for you,
[3:40] and maybe a little spec of light back here on that point.
[3:52] Okay, maybe we'll just let these two work their way
[3:56] together here.
[4:00] Just make an almighty ridge coming right through there.
[4:12] There we go.
[4:14] Now, for the shadow we'll use a little blue and white,
[4:18] little touch of brown with it.
[4:20] Let's put a little shadow right here.
[4:23] Don't want a great deal in the shadows this time,
[4:27] just a little bit.
[4:36] Maybe a little touch over in here.
[4:44] Few little things happening all along the way.
[5:00] Little bit too straight so I'm gonna break that up a little
[5:03] so it doesn't look too round.
[5:05] Don't want it to look phony, want it to look real.
[5:11] Okay now I'm gonna really diffuse this one.
[5:14] I want it to just about disappear.
[5:22] Even gonna work a little bit in there,
[5:28] and we'll lift upward.
[5:32] Always follow the angles that you've built in your mountain.
[5:35] Always work with those angles.
[5:48] Okay now let's build another one, little closer.
[5:52] This time I'm gonna put a little Alizarin in blue
[5:56] to give it a little bit more of a purplish,
[5:58] little touch of brown to dull it.
[6:04] All right.
[6:07] And let's take this one and run right up through here.
[6:12] Now this being so dark should push everything back.
[6:22] Maybe a little bump there.
[6:24] Want this just to be a nice slow lowling a little hill.
[6:35] And just get in there and do it, thing like that.
[6:37] Don't worry about it, let it happen.
[6:40] There.
[6:46] And we'll pull this down a little bit.
[6:55] One reason we do so many mountains in this series
[6:58] is to teach you to use the knife
[7:00] that you can make mountains,
[7:02] you've made friends with the knife
[7:03] then you can do just about anything you wanna do with it.
[7:08] Okay, maybe we'll take a little blue and white here.
[7:15] Maybe there's a few little patches of snow laying on this
[7:18] just here and there.
[7:22] Just let those work down here and there.
[7:27] There.
[7:32] And maybe there's a little snow land
[7:34] right in here somewhere.
[7:55] Just sort of bring that together.
[8:23] Okay and we'll take a little bit of the blue and brown
[8:31] and put some sap green with it.
[8:42] There we go, very dark, it should look black.
[8:51] And now we'll load the brush up.
[8:59] And let's just do some little things like this.
[9:03] I want some little indication of trees
[9:05] way back in the distance back here.
[9:25] And maybe a few of them have just a little bit more detail
[9:28] so we can just add a little bit here and there.
[9:31] We're only looking for basic shapes as far back.
[9:34] You would not see a great deal of detail.
[9:39] And here and there nice little trees.
[9:42] Add a little more shape.
[9:56] Okay.
[9:59] A lot of paint on the brush, very, very thick.
[10:37] Just like so.
[10:40] Okay, now then we can take
[10:43] and just scratch a few little trunks here and there.
[10:50] And all we're doing here is using the point of the knife
[10:53] and cutting through the paint so the canvas shows.
[10:56] And it gives the illusion of little trunks
[10:59] way back in the distance.
[11:06] And you don't have to worry about cutting through the canvas
[11:08] with this knife.
[11:09] The canvas is very, very strong
[11:12] and we recommend that you use stretch canvas
[11:13] rather than canvas boards.
[11:15] The canvas boards have cardboard in the center
[11:18] and they have a tendency to absorb your magic white
[11:21] very rapidly and leave you with a dry canvas.
[11:25] And we depend on this being wet
[11:26] through the whole picture.
[11:29] Okay, now let's take
[11:33] little gray,
[11:36] a little yellow and red all mixed together here
[11:39] and let's start putting some land coming down through here.
[11:43] And all we're gonna do is just push.
[11:50] Like so.
[11:57] All the little grassy things happening here.
[12:15] And maybe here and there we can see little
[12:19] parts of the dirt showing through,
[12:22] little areas where there's some ground showing.
[12:25] So we just lay that in.
[12:29] And then you can just go back and push it down
[12:34] into the picture, put things that are projecting over it.
[12:38] Little more magic here,
[12:40] have to have a thin paint to make it stick on all these.
[12:52] And as these come out of the shadow,
[12:53] let them get a little brighter.
[12:56] These trees with shadow all back in there.
[12:58] So you want this to get a little brighter as it comes out.
[13:08] There we go.
[13:09] And let's take and pull just a little bit of this down
[13:12] into the water.
[13:30] There we go.
[13:34] And then we'll just, just hypnotize it a little bit,
[13:38] just make it come together.
[13:45] Here I'm adding just a little bit of dark.
[13:47] We have two light areas so we'll put a touch of dark in here
[13:50] just to separate these,
[13:54] very, very little paint.
[14:05] Okay, now let's take a little Vandyke brown
[14:12] and we'll just go right along here and
[14:15] build me some little shore.
[14:18] Here all we're doing is touching the canvas.
[14:31] Okay, and we can put a few little sticks in here
[14:35] while we have some color on the knife.
[14:45] You know what, when people see all these little
[14:47] sticks and stuff, they think you've spent days and days
[14:49] with your one haired brush sitting here
[14:51] doing all these little rascals,
[14:53] and when you get them believing that
[14:55] then you up the price of it.
[15:02] For a long time I've painted this way in the secrecy
[15:04] of my home and charged unbelievable prices
[15:08] which a lot of painters are doing now.
[15:15] But if people see it takes you 30 minutes
[15:16] then they don't wanna pay you an unbelievable price for it.
[15:19] They wanna pay you 30 minutes labor, so
[15:22] you have to make a decision whether you wanna be a
[15:24] traditional artist or an artist that eats regular.
[15:36] And we'll lay some little ripples along the water here,
[15:40] just here and there.
[15:54] Okay, now
[15:57] maybe we'll take some of this dark color
[16:02] and let's put a little tree right here, what the heck.
[16:15] Like so.
[16:19] And we'll take and pull some of that paint down,
[16:21] make this little reflection.
[16:30] Put a little tree trunk in.
[16:36] And we'll lay a little highlight right along here
[16:41] just so it stands out.
[16:47] And then we need some leaves on it
[16:49] so I'm gonna drop a few little leaves here and there.
[17:13] There we go.
[17:28] Very light touch,
[17:30] don't want to destroy.
[17:37] And we'll use just a little bit of the Vandyke here.
[17:56] Okay,
[17:58] now let's put something in the foreground.
[18:03] We will have all kind of nice little bushes and stuff
[18:05] just growing around here.
[18:12] And let's put something right here.
[18:16] There we go.
[18:37] And we'll highlight these real quick.
[19:02] Look at that, all those little leaves and bushes
[19:06] and you can do it.
[19:08] You can do it,
[19:09] just practice a little,
[19:11] load a lot of paint to the brush.
[19:14] Remember thin paints stick to a thick paint.
[19:35] Maybe just a little greenery on this.
[19:47] A little something right there.
[19:56] Okay, a few little sticks.
[20:21] Now let's get brave.
[20:26] Let's have a huge limb coming out here
[20:28] like there's a three over here somewhere
[20:30] and all you can see is a big limb coming out.
[20:34] I know this is scary to
[20:37] take in and put something like this
[20:38] right out through all the work you went through
[20:41] but give it a try one time.
[20:46] And maybe we have one coming down through here.
[20:59] And then we can have some little limbs coming off these,
[21:12] all kinds of little things happening here.
[21:16] Wherever you want them just drop them in.
[21:24] And there's a little something
[21:25] just protruding right up here.
[21:31] Okay, now
[21:34] you could put just a little bit of highlight on here
[21:39] just to break it up.
[21:41] Shows a little sunlight is hitting.
[21:48] Yeah.
[21:57] Now let's lay some leaves on top of them
[22:03] and we first need some dark,
[22:05] let me get some dark color here.
[22:07] A little bit of sap, a little bit of blue and brown.
[22:13] There we go.
[22:16] And we'd lay a little color on the brush here
[22:19] and now we're just gonna start tapping
[22:23] where we want some nice little leaves to be.
[22:31] Just let them fall in there.
[22:37] There.
[22:43] Just sort of helps make a nice composition of your picture
[22:46] and push everything back.
[22:51] Think you'll like this once you try it.
[23:01] And as I say first time is sort of the
[23:03] son of a gun distance through all these right up
[23:05] in the middle of your picture.
[23:05] It's gonna scare you a little bit.
[23:07] But jump in there and do it.
[23:10] Remember you're the master.
[23:12] This canvas is afraid of you.
[23:14] You're the master.
[23:22] Okay, now we can take
[23:25] a lighter color green,
[23:28] a little more magic in it.
[23:33] And we'll load this brush full
[23:37] and think where your light is coming from.
[23:38] The top of these are gonna be a little brighter
[23:40] than the bottom so we'll just lay a little bit of color
[23:43] right along the top here.
[23:48] This is where you need a good brush though.
[23:52] Be very careful about the brush you use.
[23:55] Avoid nylon brushes, they cut paint.
[23:58] These are natural bristle brushes.
[24:14] Put the color right in here.
[24:21] I always remember back when I was a traditional painter
[24:25] how long I would agonize trying to do something like this
[24:27] with the little one haired brush
[24:30] and working for days and days and days
[24:32] to get an effect that you can now get in minutes.
[24:47] Okay.
[24:57] There we go,
[24:59] and we have almighty limbs projecting
[25:01] right out in our picture
[25:03] and makes it look like there's a tree over here.
[25:06] Okay, maybe,
[25:08] maybe right in here.
[25:11] Let's do this.
[25:12] Let's have an old tree that's falling over
[25:15] coming right up through here.
[25:17] If you got all your nerve up and done this one,
[25:21] shoot, we might as well just keep going with it.
[25:25] No use letting you stop now.
[25:34] And maybe he had a little friend that fell over with him.
[25:41] There we go.
[25:44] Now don't laugh, trees need friends too.
[25:46] Everybody needs friends.
[25:51] Okay.
[25:55] Take a little white and little brown here.
[26:01] Now you'll put just a least little touch of
[26:04] sort of an orangey color in it.
[26:07] And we're gonna just work that right down here
[26:10] and make him look old and tired,
[26:14] just barely touching.
[26:19] Just pull that right along
[26:22] like so.
[26:24] Let it go.
[26:27] Okay, now we'll take
[26:31] and put a few little bushes in front
[26:34] so he has a place for his foot to sit.
[26:37] And we'll take the liner brush,
[26:39] a little bit of thin oil like so.
[26:43] There we go.
[26:46] And we'll put a few little limbs hanging on here
[26:49] that are just about going,
[26:52] just here and there.
[26:55] Let them go wherever which way, whatever makes them happy.
[27:04] And maybe this one is just hanging down.
[27:05] He's tired,
[27:07] poor old thing.
[27:12] There.
[27:15] This old tree is just about going,
[27:17] it's gonna fall over here in the pond.
[27:24] Maybe a little limb or two left up here,
[27:31] something like so.
[27:39] Okay, I think we'll sign that one
[27:42] and call it finished
[27:44] and there we go.
[27:47] And I'd like to thank you very, very much
[27:49] for watching us today.
[27:50] I hope you've enjoyed this painting
[27:52] and that you've painted along with us
[27:54] and until next time, happy painting.
[27:56] Thank you very, very much.
[27:58] (lively music)
[28:03] (calm music)
`,re=`YouTube transcript
Video ID: QxcS7p1VHyQ
Language: en
Captions: authored or unspecified

[0:01] - Well, welcome back.
[0:02] Thought today we'd do a little picture
[0:04] that maybe has got a little calm ocean, and...
[0:08] And we'll play with clouds today,
[0:10] we'll play with light reflecting all though the clouds,
[0:12] and see what kind thing we can come up with here.
[0:15] And we're gonna start out,
[0:17] I'm gonna take a little bit of yellow,
[0:20] and just a little bit of Permanent Red,
[0:24] and we're gonna work with the sun today.
[0:25] We're gonna put the sun in here.
[0:28] Now I've already covered the canvas
[0:30] with a thin layer of Magic White, save a little time.
[0:36] Next we'll go into a little bit of white,
[0:38] and a touch of Alizarin Crimson.
[0:41] And we'll work that a little bit.
[0:44] And maybe very gently.
[0:47] And always making these little X patterns.
[0:55] There we go, just work it right on back into here.
[1:00] And then I'm gonna go into a little Alizarin,
[1:01] a little touch of Prussian Blue.
[1:04] It makes sort of a, oh like a little lavender color here.
[1:08] And we'll just work that from out here inward.
[1:12] We'll play with some crazy colors in the sky today.
[1:25] Just come right on around with it like that.
[1:40] There we go.
[1:43] I know somebody's out there sayin' already,
[1:45] "sure don't look like the sun to me."
[1:51] Now let's take the big brush,
[1:53] and we're gonna start bringing all this together,
[1:56] very gently.
[2:05] There we go.
[2:06] See how all those colors just blend together?
[2:20] Now we'll hypnotize it, just a little bit.
[2:23] And while I've got this brush dirty,
[2:25] I'll take just a little touch of the blue.
[2:29] And lavender mixed together here.
[2:33] And we'll do this.
[2:40] And bring it right in here.
[2:41] We don't wanna destroy this nice, reflected light area
[2:44] that we're putting into the water already.
[2:48] Just very gently bring all this together.
[2:54] There we go.
[3:07] Clean up the brush.
[3:15] Now, let's take a little Titanium White.
[3:19] Load the brush full,
[3:20] and we'll go right into the center of this.
[3:22] We'll grind that into the canvas,
[3:24] just really push that color in.
[3:27] There.
[3:34] And we'll take the knife,
[3:36] and take off the excess paint.
[3:38] The value remains in the canvas.
[3:42] And now we can work with that a little bit.
[3:46] And the first color we put on,
[3:48] turns out to be the aura that's around the sun.
[3:53] Okay, now.
[3:56] We can play with some almighty clouds here,
[3:59] and we'll take a little brown, and a little blue.
[4:05] Make up a nice little color here.
[4:09] Sort of a grey color.
[4:13] And let's build some almighty clouds.
[4:18] And we just let these run right across the sun.
[4:23] Be careful not to put too much blue into this,
[4:25] you want it to grey,
[4:26] otherwise when you hit that yellow,
[4:29] it's gonna turn green on you.
[4:35] There we go.
[4:38] Nice fluffy little cloud.
[4:43] Just layin' around here in the sky, bein' lazy.
[4:49] Okay maybe we'll have another little cloud up here.
[4:55] Just let him play.
[5:01] There he goes.
[5:16] Now let's put some highlights on these clouds.
[5:20] And right close to the sun here
[5:21] I want them to be quite bright.
[5:24] There.
[5:29] Little bit more into the orangey type, pinkish hue.
[5:34] There we go, that's better.
[5:57] And a little brighter on this edge right here.
[6:09] And there we are.
[6:12] Just lay these on.
[6:21] Let all these pretty little colors
[6:22] just sort of float through the clouds.
[6:30] And mix the color in your brush.
[6:33] That way you have a multitude of colors all in one brush.
[6:40] Now on this cloud, the light, as you can see,
[6:43] is coming from the other direction.
[6:44] So it's gonna hit the bottom of the cloud more than the top.
[6:51] And we'll put some little sparkles here and there.
[7:02] There we go.
[7:05] Maybe some little highlights just playing around.
[7:11] Now we'll take the big brush, and very gently,
[7:14] super, super light, just enough to bring this together.
[7:23] Just wanna blend them together.
[7:29] Little little bit.
[7:33] Build some of the highlights here and there.
[7:45] Now we can hypnotize the whole thing.
[7:48] If you haven't used a firm paint, now you're in trouble.
[7:52] So be sure your paint is very, very firm.
[8:02] Now let's put some little small clouds,
[8:04] just lay it along here.
[8:11] Just little stringy clouds, I call 'em.
[8:15] For lack of a better name.
[8:31] And we'll take a little bit of color,
[8:34] and highlight these clouds.
[8:37] Just across the top.
[8:39] Just like the sunlight's bouncing along here,
[8:41] and playing and having fun.
[8:46] There.
[8:57] Now we'll gently hypnotize these,
[8:59] and Just bring 'em right into the picture.
[9:04] There we go.
[9:12] Now we'll take just a little touch of Magic White.
[9:15] We need a thin paint, thin, thin paint here.
[9:18] Be sure you're finished with your sky when you do this,
[9:21] 'cause it's just about over once you start this.
[9:24] We'll put some little light rays comin' through here.
[9:27] Just indications.
[9:30] Like you're bouncing through and playin'.
[9:39] Just enough to give it a little indication back here.
[9:42] Now let's see, way back here, very lightly.
[9:46] Let's just make us a little water line back in here.
[9:54] Like so.
[9:56] Thought we'd do like a nice bay, or something like that.
[10:00] The water's not violently rough.
[10:03] Just nice, few little ripples here and there.
[10:06] Few little waves coming in.
[10:15] Just work those around.
[10:19] Now as we get up closer here,
[10:22] let's have a little wave in here, just like so.
[10:28] Put this little darker color in so it'll stand out.
[10:37] Maybe just a little one back in here.
[10:48] Little dark underneath these.
[10:54] Now we take a little bit of white,
[10:56] little Magic White with it, and we're gonna push.
[11:03] Little bit of foam on top of that water.
[11:06] Sort of pull that down.
[11:08] And maybe here it's already curled over.
[11:13] And we just lift that right over like that.
[11:28] A little bit in here.
[11:44] Now if you're doing this at home, when it dries,
[11:47] take little dots of white paint, and just lay all in here,
[11:51] and it'll look like the light's just sparkling,
[11:53] right across the water,
[11:54] with just little dots of white paint.
[11:56] Don't over do it.
[12:09] Just little foamy things happening
[12:10] all throughout here.
[12:18] Very light, we don't want anything real bright back here.
[12:36] Now then, I think I'll take a little Alizarin Crimson,
[12:39] and Sap Green mixed together to make a nice brown color.
[12:45] Warm, warm brown, since we've used the Alizarin in here.
[12:50] And brown is such a nice color,
[12:53] it's a very warm, peaceful color.
[12:56] Maybe we'll put some little things like this in here.
[13:02] There we go.
[13:05] Put some little grassy things, layin' here on the beach.
[13:14] There.
[13:19] And let's take a little bit of the Prussian Blue.
[13:22] Maybe there's a little place layin' right in here,
[13:25] where the water sort of formed.
[13:29] So we'll put just a little more blue right here.
[13:33] Like so.
[13:35] There we go.
[13:41] Now I'm gonna make a mixture of brown and white.
[13:50] And we'll make some sand here on the beach.
[13:58] And we just let this knife work right down through here.
[14:03] Very gently.
[14:12] Try to get the paint to break like that.
[14:30] Maybe we'll go back right over here.
[14:33] Maybe we'll have this coming right down through here.
[14:42] And we can start putting all these little bushes
[14:44] and weeds that grow out here on the sand.
[14:48] This is still the Sap Green and Alizarin Crimson.
[14:57] There we go.
[15:10] And follow the lay of the land here.
[15:13] You want it to look like it's sorta coming down.
[15:14] If we're gonna have a little pool of water here,
[15:17] you need to have it coming down.
[15:19] So it just works in there.
[15:23] There we go.
[15:33] And we can take and lay a little bit of sand
[15:36] right down through here.
[15:46] Let's start with some reflections in this water.
[15:53] Little touch right here.
[15:56] Let's build some nice little reflections
[15:58] in this little pool that's laying here.
[16:28] Now we come ahead and decide where we want the
[16:32] dirt to come.
[16:34] Maybe it'll come right out like that.
[16:46] Let's put a little thing right out here.
[16:49] There we go.
[16:51] Very lightly.
[16:54] And we can bring some Over in here.
[16:56] Maybe this one comes way off.
[17:00] It would if I didn't run out of paint.
[17:10] There we go.
[17:12] Lay that in there.
[17:30] Now we take a little bit of Magic White.
[17:35] And we'll put some little things happening
[17:37] around the water's edge here.
[17:44] Just here and there.
[17:49] Always have a lot of foam that builds up around the sea.
[17:54] So we'll just have all those little foamy things in here.
[18:08] Little bit over here.
[18:09] So it looks like that just sort of slips on
[18:11] into the background there.
[18:14] And off and away.
[18:21] Now we can put a few more little things in here,
[18:24] just to build this up.
[18:28] Still following the lay of the land.
[18:45] Arighty.
[18:46] Let's take some brown here.
[18:52] I'm gonna put like an old snow fence,
[18:54] coming down through here I think.
[18:57] So we'll start with straight Van Dyke Brown.
[19:00] And these old fences are...
[19:03] Made out of just whatever happens to be available.
[19:07] So they're all different sizes, all different shapes.
[19:10] The wind and the weather,
[19:12] they tear them apart and they really get bad looking.
[19:16] So we'll just lay them in here.
[19:21] Some of 'em are just about to rot.
[19:25] Maybe there's a little short one right here.
[19:31] Give him a little more, there.
[19:33] This one over here, maybe he just comes like so.
[19:41] Every which way, ever which way.
[20:05] And we'll just let these happen.
[20:12] Sometimes they're close together,
[20:14] sometimes they're far apart, so wherever you want.
[20:20] There.
[20:28] And maybe one's just about to fall over,
[20:30] there he goes.
[20:34] Now I'll take a little touch of the light color here,
[20:37] and I'm gonna just put a little touch of light.
[20:43] Right on the edge of these, just here and there.
[20:46] This is just brown and white.
[20:49] Just a little bit.
[20:59] Those do look nice and old.
[21:01] They've been hangin' around the beach for a long time.
[21:08] There we go.
[21:11] Now take a little bit of paint here.
[21:17] And let's just make this old thing just wander around.
[21:23] IT's just about had it.
[21:24] Come right on down, there.
[21:30] Maybe this one has a bunch on the other side,
[21:32] so we just keep on cutting through.
[21:36] Come through like this.
[21:42] And let's give him one more.
[21:43] That went so well let's do another one, there.
[21:52] Now if your really wanna spruce these up a little bit,
[21:55] you can put just a little bit on top here.
[21:58] Let's use just a little touch lighter color,
[22:00] so it shows up, there.
[22:03] Just a little light playin' along the corner.
[22:06] And use the small edge of this knife, too,
[22:08] don't just use the...
[22:11] Other edge.
[22:15] Now then, let's...
[22:19] Let's put a nice little tree right here.
[22:21] We need an old, tired tree.
[22:24] That's live right next to the ocean all of it's life.
[22:29] It's not the best place in the world
[22:30] for an old tree to live.
[22:34] There, boy he looks tired already.
[22:38] LEt's give him another little helper here.
[22:44] There we go.
[22:52] Okay, let's use the little liner brush here.
[22:59] And just put some highlights right along here.
[23:06] Let those sort of fade back.
[23:18] Give him a few more little branches.
[23:20] This is just a thin oil.
[23:22] That's mixed with a paint so it's a little bit thinner.
[23:25] And then it flows better.
[23:31] He comes right along.
[23:34] Like that.
[23:39] And we just put a few little limbs at random,
[23:41] and then we'll put some leaves on him.
[23:46] Maybe right in here,
[23:48] maybe there's the one that's just tired,
[23:49] he's hangin' down.
[23:56] There.
[23:58] Poor old tree.
[24:04] Okay.
[24:06] We'll take a little bit of...
[24:10] Little Alizarin and the Sap Green again.
[24:15] Maybe dull it down with a little bit of brown,
[24:17] we don't want this very bright.
[24:22] Alright, that's nice.
[24:25] Just put some little leaves on here.
[24:34] There we go.
[24:35] Just drop the little rascals on wherever you want 'em.
[24:39] Maybe we'll just put these back,
[24:40] and let this limb protrude on through.
[24:43] Maybe he's already got tired one on strike.
[24:49] Just layin' out there by himself.
[24:52] We'll take a little bit of...
[24:55] Green, a little yellow.
[24:58] And I put just a little touch of brown with it to dull it.
[25:01] Once again, I don't want this to be a bright, bright tree.
[25:04] I want this to be quite dull.
[25:06] Put a few little highlights here.
[25:11] There we go.
[25:19] Just here and there.
[25:25] Alright.
[25:28] We can go back and fill in some more
[25:31] of these little busy areas.
[25:34] Just to give him a little...
[25:38] Character.
[26:11] There, that's nice.
[26:22] Take a little Alizarin Crimson and brown here,
[26:25] and maybe we'll just put a few little things
[26:27] that are trying to grow here.
[26:29] Life's sort of rough out here,
[26:30] so he's not doin' too great.
[26:36] Just here and there.
[26:41] Maybe there's one layin' over here.
[26:58] This is a very quiet little seascape.
[27:01] Something you can do.
[27:03] It's just a little practice, and I think you'll enjoy it.
[27:05] It's probably the most fun working with a sky.
[27:09] There's a multitude of things you can do here.
[27:11] There's no limit to the different colors you can use,
[27:14] you can change 'em to any color that pleases you.
[27:18] Feel free.
[27:20] We're not trying to teach you to copy here,
[27:22] we're trying to teach you a technique.
[27:24] And how you use that technique is strictly up to you.
[27:27] You're only limited by your imagination.
[27:31] So let it go, have fun with it, practice.
[27:35] And you too can be an almighty painter.
[27:39] I think we'll very quickly sign this picture.
[27:44] And we'll call it finished, so we'll take a little bit of...
[27:47] Thin paint here.
[27:52] Just do that.
[27:54] I wanna thank you very very much for watching us today,
[27:57] I hope you have enjoyed this picture,
[27:58] it's a little different than what we've done in the past.
[28:01] But it gives you some more ideas of what you can do.
[28:07] Until next time, happy painting.
[28:13] (guitar music)
`,ie=`YouTube transcript
Video ID: oh5p5f5_-7A
Language: en
Captions: authored or unspecified

[0:01] - Hi, I'm Bob Ross,
[0:02] and for the next 13 weeks, I'll be your host,
[0:05] as we experience The Joy of Painting.
[0:08] I think each of us, sometime during our life,
[0:10] has wanted to paint a picture.
[0:12] I think there's an artist
[0:13] hidden in the bottom of every single one of us.
[0:16] And here we will try to show you
[0:17] how to bring that artist out,
[0:19] to put it on canvas.
[0:21] Because you too, can paint almighty pictures.
[0:25] You know, we have avoided painting for so long
[0:27] because I think, all of our lives, we've been told
[0:29] that you have to go to school half of your life,
[0:32] maybe even have to be blessed by Michelangelo at birth
[0:35] to ever be able to paint a picture.
[0:38] And here we want to show you that that's not true.
[0:41] That you can paint a picture right along with us.
[0:44] Each week we'll use the same colors,
[0:46] we'll use the same equipment,
[0:48] so if you have your brush and pallet ready next week,
[0:52] you can paint right along with us.
[0:54] I'd like to go over some of the equipment
[0:55] that we'll use before we start.
[0:57] The brushes that we use.
[0:59] I'll be using very large, two and a half inch,
[1:02] and one inch, natural bristle brushes.
[1:05] Now these are natural bristle.
[1:07] Be sure you don't start with a nylon brush.
[1:11] We'll use an almighty palette knife.
[1:15] And this is much different
[1:16] than the traditional palette knife.
[1:17] It is not thin and flimsy, it's a firm palette knife.
[1:21] And with this we can make fantastic things happen.
[1:24] Let's go over the colors that we'll use.
[1:26] We're gonna start out here with Titanium white,
[1:30] Phthalo green,
[1:32] Prussian blue,
[1:34] Van Dyke brown,
[1:36] Alizarin crimson,
[1:38] Sap green,
[1:40] Cad yellow,
[1:41] and Permanent red.
[1:43] Now these eight colors, we'll use each and every week,
[1:46] for every picture that we do.
[1:48] So you don't have to go out
[1:49] and buy 1500 different kinds of colors and brushes.
[1:52] You need very little equipment to paint with this.
[1:56] Another thing, we'll do no tracing of patterns on here.
[2:00] We start with the vision in our heart,
[2:02] and we put it on canvas.
[2:04] And we're here to teach you to be able to do this too.
[2:07] So, let's do it.
[2:09] Let's paint a picture right here.
[2:11] We're gonna to start with a big brush,
[2:13] and were gonna cover the canvas
[2:15] with a thin layer of magic white.
[2:18] Now this is a wet-on-wet technique,
[2:19] so the first thing were going to do is get the canvas wet.
[2:23] And all we want is a nice, even coat of paint here.
[2:27] There we go.
[2:29] Just cover it nice and even.
[2:35] You also need an almighty easel when you're doing this.
[2:37] You need an easel that will hold your canvas very firm,
[2:40] and allow you to use these big brushes.
[2:44] Okay.
[2:46] When you're using a large brush like this,
[2:47] it really doesn't take too long to cover your canvas.
[2:52] And if you get a hair like that,
[2:54] just pop it off with the corner of your brush,
[2:56] flip it away.
[2:58] Okay.
[2:59] Now after you get your canvas covered with a magic white,
[3:03] we'll take and make long strokes back and forth
[3:06] to get a nice even distribution of paint on here.
[3:11] Okay.
[3:14] Up and down one time.
[3:17] That assures that the magic white's
[3:19] nice and even all the way across the canvas.
[3:23] Okay, let's wash the brush out here.
[3:25] We wash our brushes with odorless paint thinner.
[3:30] Okay, we'll wash them out.
[3:35] And I beat the brush just to dry the bristles.
[3:38] Now let's take a little bit of Cad yellow here,
[3:43] and I think today we'll do a picture that's,
[3:45] maybe like were walking through the woods.
[3:47] And so let's start right here
[3:48] with a little bit of Cad yellow,
[3:50] with just the least little touch of Phalo green in it.
[3:55] And we'll out a little bit more of the green color,
[3:58] and we'll begin making little X's,
[4:01] just like so.
[4:05] Just work that around.
[4:10] Okay.
[4:12] Now without cleaning the brush,
[4:13] we'll go right into some Prussian blue.
[4:15] Just add it right onto the brush here.
[4:18] We'll just go out here.
[4:20] And were making the crisscross strokes, little X strokes.
[4:26] There.
[4:33] Already we're beginning to have a light source
[4:35] in this painting.
[4:41] Okay, now we'll clean the brush again.
[4:45] Once again, this is odorless paint thinner.
[4:46] We do not use turpentine.
[4:52] Now with a nice clean brush,
[4:54] I'm gonna take and add just a little bit of Titanium white,
[4:59] right here in the center.
[5:03] Just a little.
[5:05] And we'll begin working outward.
[5:08] There.
[5:10] By now maybe you have recognized
[5:12] some of the equipment we're using
[5:15] as something you've seen before.
[5:18] And I learned this fantastic technique wonderful man
[5:23] that I think all of us have enjoyed
[5:24] for many many years on TV,
[5:26] Bill Alexander.
[5:28] And Bill taught me this many years ago.
[5:31] It is the most fantastic way to paint
[5:34] that you've ever seen.
[5:35] So join us.
[5:37] Have some fun.
[5:38] And we'll just blend this out a little bit more here.
[5:47] Until we have a nice blue sky.
[5:51] There we go.
[6:00] Okay, we'll clean the brush one more time.
[6:08] Now let's start putting in some almighty trees here.
[6:12] We're gonna start with a little bit of Alizarin crimson,
[6:15] and a touch of Prussian blue.
[6:17] Now the Prussian blue is 100 times stronger than
[6:20] the Crimson, so use just a little blue and a lot of Crimson.
[6:26] And here we're going to begin pushing in basic tree shapes.
[6:29] So just bend the brush.
[6:32] Bend the brush.
[6:33] Make those little leaves and branches
[6:35] just pop right out at you.
[6:38] There he comes.
[6:41] These little son of a guns hide in your brush
[6:43] and you just have to push them out.
[6:48] This is your world, your creation.
[6:51] Let's put a little one right here.
[6:58] And maybe we'll just put some little grassy areas
[7:00] coming down through here.
[7:05] And right there, there is one.
[7:12] You're pushing quite firm here.
[7:14] This is why I say you need an almighty easel
[7:16] when you're doing this, an easel that's strong.
[7:20] Okay.
[7:24] Maybe over here on this side now,
[7:27] we'll add another one.
[7:28] Maybe a bigger one over here.
[7:34] There he is.
[7:38] And there's no secret to this, anybody can paint.
[7:41] Anybody can paint.
[7:43] All you need is a dream in your heart, a little practice.
[7:51] There, already we have the beginning of a beautiful picture.
[7:53] We have the tree shapes, the light source.
[7:57] Looks to me like it's early in the morning.
[8:06] Okay.
[8:07] Now, let's put some trunks on these trees.
[8:10] And for that will take a little bit of Van Dyke brown,
[8:15] and let's just lay in some basic trunks here.
[8:20] There we go.
[8:24] And maybe we'll put a little limb right here, like so.
[8:31] Maybe a little something right there.
[8:34] There we are.
[8:38] Okay, now this little fellow over here,
[8:39] he needs a trunk too.
[8:42] So we'll put one right in here.
[8:50] And maybe some limbs up in here.
[8:54] Right through here, there we go.
[8:58] Just some indications here and there,
[9:00] and some little sticks and twigs.
[9:05] Maybe over here.
[9:08] There we are.
[9:14] Okay.
[9:15] Now we'll highlight these,
[9:17] and we'll take a little bit of white,
[9:19] and a touch of brown mixed together.
[9:24] And remember where your light source is.
[9:26] So this tree, we'll highlight right here.
[9:33] Like so.
[9:39] There we are.
[9:41] Now over on this side,
[9:43] the light's coming through here,
[9:44] so we'll highlight this side of it.
[9:51] Maybe a few little indications up through here.
[9:57] Now comes the fun.
[9:59] Now we can begin putting all the beautiful leaves
[10:02] and stuff on this, and just really make it come alive.
[10:06] So here, we'll take a little bit of the magic white,
[10:09] to thin our paint.
[10:11] One of the golden rules in this,
[10:12] this is a thin paint, we'll stick to a thick paint.
[10:16] So anytime you're painting over the top of paint,
[10:18] you need to have a paint that's just a little bit thinner.
[10:22] We'll take a little bit of Phalo green
[10:28] and a little bit of yellow,
[10:30] and we load the brush full of paint.
[10:33] And out light's coming through here,
[10:34] so we want the side of the tree
[10:36] to be a little brighter than the other side.
[10:39] All right.
[10:40] And then we begin pushing
[10:42] thousands of little leaves on here.
[10:45] They hide in your brush.
[10:48] There they come.
[10:53] Just a little on this side over here,
[10:55] because not as much light's gonna strike.
[10:57] A little's come through, but not as much.
[11:07] And look at that.
[11:08] In just a matter of a few minutes,
[11:09] we have a beautiful tree.
[11:13] Now maybe, this little tree over here,
[11:15] we'll put a little highlight on him.
[11:19] And once again, we're using a paint
[11:20] that's a little bit thinner, so that it sticks.
[11:28] First thing that you have to do when you're doing this
[11:31] is start with an oil paint that's very, very firm.
[11:33] Your base paint has to be extremely firm.
[11:37] If you start with a thin, loose paint,
[11:40] your gonna become a mud mixer.
[11:43] You have to have a thick paint on the base coat
[11:46] in order to get this thinner paint to stick.
[11:48] Now let's begin building some bushes and stuff in here.
[11:53] All right, look at that.
[11:56] You can do it, I know you can.
[12:01] There, look there.
[12:11] Okay let's move to this big tree in the front here
[12:15] and let's put some nice little leaves up here on him.
[12:20] You have to bend that brush.
[12:22] If the brush doesn't bend, you're not gonna get all these
[12:24] beautiful little leaves, these little actions that happen.
[12:34] Okay, maybe there's a nice little bush
[12:36] that lives right here.
[12:40] You know if you've ever walked through the woods
[12:41] early in the morning, all the little creatures are out here.
[12:44] They're all playing in the bushes and stuff.
[12:47] This is where they live.
[12:49] In all these bushes.
[12:52] Okay, let's put something on this side now.
[12:56] Nice little bush here.
[13:00] Just let your imagination run wild.
[13:04] Let your heart be your guide.
[13:09] In the time you sit around worrying about it,
[13:11] trying to plan out painting,
[13:12] you could have completed a painting already.
[13:15] Let it happen, let it happen.
[13:22] You know for so many years I was a traditional painter,
[13:27] and I would spend sometimes weeks just working on a picture,
[13:32] drawing it out, getting all the little sketches and stuff.
[13:34] And then I'd go back and spend maybe a month
[13:36] trying to fill in the blocks.
[13:39] And here, we let it happen.
[13:41] It comes right out of here, it's in you.
[13:43] And you put it on the canvas.
[13:46] Okay, let's see.
[13:53] Let's try this big ole tree here,
[13:55] put some nice little leaves on him.
[14:03] There we go.
[14:13] Yeah.
[14:16] Mmm.
[14:22] Okay, let's try, I've added a little permanent red with
[14:27] my color now, just to give us a little different value.
[14:36] Okay, and you know if we're going to walk through the woods,
[14:39] we need a little path.
[14:41] So let's take a little bit of Van Dyke brown here,
[14:48] and let's build us a happy little path.
[14:50] We're just gonna take the knife and let this path
[14:52] sort of just wander right down through here.
[15:01] There we go, just let it wander 'round, play and have fun.
[15:16] Okay, there we got us a nice little path.
[15:21] Now we need to highlight that path so I'll take
[15:23] just a little bit of white,
[15:28] and we'll just take it and barely touch the canvas here.
[15:30] Just enough so we can highlight
[15:32] where the sun's sparkling through here.
[15:37] There, see how easy that is?
[15:43] Let the paint break.
[15:49] And now in order to set the path down into the painting,
[15:53] we'll add some bushes that project up over the path
[15:55] here and there.
[15:58] Push 'em in.
[16:02] There we go.
[16:04] And you can see how that makes it literally drop
[16:06] right into the painting.
[16:15] Okay, let's put some more land aries in here.
[16:22] Maybe this nice little area's coming down through here.
[16:33] Just like so.
[16:43] Maybe we'll have some over here.
[16:46] Follow the angle of your land.
[16:52] There we go, there we go.
[17:05] There, now maybe, maybe, maybe,
[17:09] as we're walking through the woods here,
[17:11] maybe it rained last night.
[17:15] Maybe it came a nice little rain.
[17:17] There's little puddles.
[17:20] You know after it rains you always have little rain puddles.
[17:23] So let's take a little touch of the Prussian blue here,
[17:26] and we'll just make us a little puddle.
[17:29] And we put some Prussian blue on the brush,
[17:31] and we take here and pull downward.
[17:35] Just pull downward like so.
[17:42] There we go.
[17:47] Okay, see how easy it is to do?
[17:52] Now.
[17:54] Very gently, we'll come across this way.
[17:57] Just to give it a watery effect.
[18:01] Now if you want to, if you wanna put highlights in here,
[18:04] maybe you could take just a little touch
[18:06] of the Titanium white on your brush, and pull down.
[18:11] It'll give it sort of a sheen.
[18:20] There and then once again just come across just enough
[18:26] to give it a nice watery feel.
[18:31] You can overdo this part very easily.
[18:34] Okay, wash off the ole brush.
[18:45] Okay, now we can take a little more of the Van Dyke brown
[18:52] and we can just make little puddles out of this.
[18:54] Maybe it comes down like so, right through there.
[19:00] There we are.
[19:04] Okay, little puddle.
[19:08] And we just make this a little separate puddle back here.
[19:16] Just like that.
[19:22] Okay, now we take a little bit of brown and white,
[19:27] and we'll lay a little highlight on there.
[19:30] There we go.
[19:42] And in your world, you can do anything
[19:43] that your heart desires.
[19:51] My home is in Fairbanks, Alaska, and I spend a lot of time
[19:55] walking around the woods and talking to trees
[19:58] and squirrels and little rabbits and stuff.
[20:01] And I look at a lot of nature.
[20:03] And if painting teaches you nothing else, it'll teach you
[20:06] to look at nature with different eyes.
[20:09] It'll teach you to see things that have been there
[20:10] all your life, and you've never noticed.
[20:14] And if it does nothing else but make you enjoy nature,
[20:18] it's worthwhile.
[20:20] So look around, look at what we have.
[20:23] Beauty is everywhere.
[20:26] You only have to look to see it.
[20:28] Okay, I talk too much sometimes
[20:30] so we'll go back to painting here.
[20:33] Take a little bit of the thin white paint here,
[20:35] and we'll put some little water lines back in here.
[20:38] Okay, just like so.
[20:42] There we go.
[20:49] There, and maybe some little water lines right here.
[20:56] This is just a thin white paint and you literally just cut
[21:00] right into the canvas with it.
[21:03] And let's smooth that out.
[21:06] There we go.
[21:14] Okay, now while I have the knife here, I'm gonna take it
[21:17] and just cut a few little sticks here and there.
[21:20] And all we're doing is just literally cutting
[21:22] right through the paint.
[21:25] So the canvas shows through and it makes
[21:27] a multitude of little sticks,
[21:31] and these little sticks help create the illusion
[21:33] of distance in a painting.
[21:37] All different planes.
[21:46] Okay, now then, let's put some bushes and stuff
[21:54] right down here on the grass, on this soil area.
[21:57] There we go.
[22:03] There they are, there they are.
[22:08] They just live right here in your brush.
[22:10] And you just drop 'em right in.
[22:14] There.
[22:19] Okay, now let's take and do this.
[22:24] Let's put some land right down through here.
[22:29] Back to the Van Dyke brown, little bit of white.
[22:35] There we go.
[22:40] We'll add a little highlight on here.
[22:46] There.
[22:51] And we'll put a few little bushes and stuff right out here.
[23:00] See how easy that is?
[23:02] Okay, a few more little water lines in there.
[23:09] Just let 'em happen.
[23:14] Each week, we'll try to do paintings that are designed
[23:16] to teach you something different, something new,
[23:19] something exciting.
[23:22] Just to keep your interest going.
[23:24] Okay now let's play a little bit here.
[23:29] Let's have a happy little tree right in here.
[23:32] So we'll start with the Van Dyke brown, and we'll make
[23:35] his little trunk here.
[23:37] There he goes.
[23:43] Straight Van Dyke brown to start with.
[23:47] There and we just turn him out to give him little foots
[23:49] to stand on.
[23:53] There.
[23:59] And maybe he needs another little arm out here.
[24:01] So we'll just give him one.
[24:04] This is your creation, you can do anything here
[24:06] that you want to do.
[24:11] Just let it happen.
[24:16] There.
[24:18] Now, and we'll give him some little leaves,
[24:22] and we'll use some more of the Alizarin crimson,
[24:25] a touch of Prussian blue.
[24:28] Okay, and we need dark in order to show light.
[24:31] So first we'll put some dark on here.
[24:34] I'll put some happy little leaves here and there.
[24:41] When we see you next week I hope you have your
[24:43] almighty easels set up, the colors ready,
[24:47] your big brushes all primed and ready to go,
[24:50] and do an almighty painting with us here.
[24:55] Very quickly while I'm finishing this up I'll go over
[24:58] the colors, one more time, that we use.
[25:01] Titanium white, Phthalo green, Prussian blue,
[25:08] Van Dyke brown, Alizarin crimson, Sap green,
[25:15] Cad yellow, and Permanent red.
[25:19] Only eight colors that you need.
[25:23] Okay now let's put some highlights
[25:24] on this pretty little tree right here.
[25:28] Mmm, I used just a little touch more of the Permanent red
[25:32] on this one so he'll stand out a little more.
[25:37] See how easy it is to create a tree
[25:39] right here in your world?
[25:42] There we go.
[25:50] And maybe down here, maybe there's some nice little
[25:54] bushes and stuff happening right in here.
[25:57] There we go.
[26:04] All right, maybe right there another one.
[26:08] Okay, here and there I'm gonna put
[26:11] just a few little sticks and stuff.
[26:15] Like that.
[26:19] Just, once again, to build some distance in here.
[26:24] We want this to have a lot of depth in it.
[26:27] Maybe we'll cut in a few little sticks here and there,
[26:29] like so.
[26:35] You gettin' excited yet?
[26:36] You ready to paint with us?
[26:39] You can do it.
[26:47] Okay, and I think this painting's far enough along,
[26:54] we'll just sign this rascal.
[26:56] And I sign the painting with a script liner brush,
[26:59] a little bit of oil, and I use red paint, but whatever
[27:04] color you prefer.
[27:06] Okay, and we'll just sign that rascal.
[27:13] I hope you've enjoyed this painting.
[27:17] Next week we're looking forward to seeing you.
[27:20] I hope you have your brush ready.
[27:22] A dream in your heart that you want to put on canvas.
[27:26] And join us, right here, at The Joy of Painting,
[27:30] and you too can build fantastic pictures.
[27:35] You can take 'em from here, and put 'em on there.
[27:38] Until next week, happy painting, from all of us here.
[27:45] (slow acoustic guitar)`,ae=`YouTube transcript
Video ID: RInDWhYceLU
Language: en
Captions: authored or unspecified

[0:01] - Hello, glad to see you again.
[0:03] Thought today we'd do a picture
[0:04] that's right straight out of Alaska.
[0:06] We'll do one of Mount McKinley,
[0:07] the most almighty mountain in the North American continent.
[0:11] And we'll start off today, and we use just a little bit
[0:14] of Prussian blue, maybe a touch of phthalo green
[0:16] mixed with it here.
[0:18] And let's dance in some basic shapes here.
[0:21] I've already put the Magic White on the canvas
[0:23] to save a little time.
[0:26] So we're just literally mixing color right here
[0:29] on the canvas, just let this brush
[0:31] dance and play and have fun.
[0:34] And all we're looking for is general basic
[0:37] cloud shapes here, we're really not
[0:38] trying to put anything in.
[0:41] Just let it happen.
[0:43] Just move the brush, keep it moving, working,
[0:46] playing, having fun, there we go.
[0:48] Isn't that something?
[0:50] There we are.
[0:52] Put a nice little cloud shape right there, what the heck.
[0:57] Okay, keep the brush moving, don't let it stop.
[1:04] And sometimes brush is lazy, you have to
[1:06] really push it a little or it'll quit on you.
[1:08] Make it keep moving.
[1:11] Okay, now we'll take the almighty brush here,
[1:16] and we're gonna swirl this.
[1:17] We're gonna pull the color, move it,
[1:21] pull it, there we go.
[1:23] Try to avoid a pattern, we want this to go everywhere.
[1:26] We're looking for a sky here that has life in it,
[1:29] has movement in it, we don't want a sky
[1:31] that looks like at night you pull the curtain down
[1:33] and everything went black on you.
[1:35] Wanna keep this moving, there.
[1:40] Already you're beginning to see
[1:41] all the little things happening up here.
[1:45] Every which direction.
[1:48] Every way, there we go.
[1:53] Now you can blend this too much and take it all out.
[1:55] We don't wanna take it out, we just wanna mix it up.
[1:58] Stir it up.
[2:04] Okay, while we've got some paint on the brush here,
[2:06] we'll add a little more Prussian blue and phthalo green.
[2:12] And we'll put us in some water.
[2:15] We pull from the outside in.
[2:19] And leave a little area opened here,
[2:21] that will create the little sheen of light
[2:24] that plays across the water.
[2:27] You can go back with white paint and put it back in,
[2:29] but you've already covered the canvas with Magic White,
[2:32] so why not use it?
[2:35] This is a lazy man's way of painting.
[2:39] You let the paint work, you let the brushes work.
[2:42] Use what happens naturally, don't fight it.
[2:50] Okay, clean the old brush off,
[2:54] and let's get out an almighty fan brush here.
[2:57] And let's build some happy little clouds up here.
[3:01] I'm gonna take titanium white with the least little touch
[3:04] of permanent red in it.
[3:08] And load the brush full of paint, just really load it up.
[3:12] Now we'll start working on some basic cloud shapes here,
[3:14] and we'll dance in all these little areas
[3:16] and let 'em just play in the sky.
[3:21] Keep the brush moving, keep it moving.
[3:26] You want areas that are thick, areas that are thin.
[3:29] Let all these little things happen.
[3:34] And we'll take the big brush here
[3:35] and gently, gently blend this together.
[3:39] Very lightly.
[3:41] And fluff it up a little and hypnotize it.
[3:46] And right there you've got an almighty cloud,
[3:48] just that quick.
[3:50] But they're very easily killed, clouds are delicate.
[3:53] Don't overwork it, put it in, leave it alone.
[3:58] Okay, and maybe we'll have another one here.
[4:00] We'll put a, layer these clouds some.
[4:05] Okay.
[4:10] Nature is so beautiful, just let it go, have fun with it.
[4:17] Very, very easy to work these to death.
[4:27] Okay, we'll blend this in.
[4:29] And you work in layers here, you do thing
[4:31] that's the farthest away first,
[4:33] have him finished, and then work forward.
[4:39] There, we'll hypnotize that one,
[4:41] blend this one a little bit.
[4:47] Okay, little bit more red here.
[4:52] There we go.
[4:53] Don't wanna set these clouds on fire now.
[4:55] All we wanna do is have a slight warmish glow to 'em,
[4:59] like the sun's playing along the top.
[5:04] There we go.
[5:07] Guess we better not forget this side of the sky.
[5:09] We'll put a little something over here.
[5:13] Just some nice little clouds playing around in the sky.
[5:22] Okay, and mix these up a little bit.
[5:24] (lively piano music)
[5:33] Okay, maybe a little streaky one right here.
[5:39] Got baby clouds, too.
[5:40] If you didn't have baby clouds,
[5:41] you wouldn't have big clouds.
[5:45] There, and we can work on this one a little touch.
[5:55] Okay, there looks like a nice place.
[6:00] And we're really pushing this paint into the canvas.
[6:02] We're working that value right into the canvas.
[6:07] Just let it play.
[6:09] Don't kill all the dark areas.
[6:12] You can end up with great big cotton balls in the sky
[6:14] if you're not careful.
[6:20] Guess that'd be considered a UFO,
[6:21] big cotton ball in the sky.
[6:24] There, fluff that up.
[6:30] And work that paint.
[6:34] And look at there, in just a couple of minutes,
[6:36] you have a sky that has so much action happening in it.
[6:42] There we go, okay.
[6:48] (banging)
[6:51] If you do this in your living room,
[6:52] you can redecorate your living room in a matter of minutes,
[6:55] so be very careful, learn to control it.
[6:58] Have you a box you can shake your brush in,
[7:00] and that way you don't have to worry about
[7:02] covering everything.
[7:05] Okay, let's take a little bit of brown, some blue,
[7:09] a little touch of alizarin crimson and some white.
[7:15] There we go, and don't mix your paint dead.
[7:17] Mix it marbley and leave it alone.
[7:20] Okay, now let's do, since we're gonna do McKinley today,
[7:23] let's do the basic shape here.
[7:26] McKinley comes down like so, has another peak
[7:30] running right off through here.
[7:33] Make that just a little more rounded.
[7:39] There, and we let this side drop right down and over.
[7:46] All you're looking for here is the basic outline,
[7:48] the basic shape of this mountain.
[7:51] You're not worried at all what happens in here.
[7:55] Okay, take the big brush, and we'll pull that down.
[8:02] This takes off the excess paint
[8:05] and makes the next layer stick better.
[8:07] And also when you're doing mountains,
[8:08] if you can see the entire mountain, the top of the mountain
[8:11] is always more distinct than the bottom.
[8:15] At the bottom of the mountain we have mist,
[8:17] and now we have pollution.
[8:18] We have a multitude of things that break up
[8:21] and diffuse light.
[8:26] Okay, and we'll put some snow on that almighty mountain.
[8:30] Pull that paint out real flat, just pull it out
[8:33] and get us a little roll of paint.
[8:35] And we'll just lay this on and let it travel right on down.
[8:42] And you want the paint to break like this,
[8:44] to make all the little things that happen in there,
[8:47] the little shadows, the light and dark areas.
[8:52] Okay, and there's a little bump
[8:56] that comes out right there
[9:00] and works its way down.
[9:04] And over here, let this drop just like so.
[9:15] There we go.
[9:19] Now for the shadow color, we'll use a little
[9:21] Prussian blue and white.
[9:27] And once again, don't mix it dead.
[9:30] You want it to be sort of marbley.
[9:34] Okay, now we'll start with the shadows,
[9:38] and we'll just lay these in here.
[9:39] We wanna bring these two areas here together.
[9:44] So we just sorta work it back and forth
[9:46] and let it come, there you go,
[9:48] let it just come together.
[9:51] And maybe this shadow comes right down through here.
[9:58] Every highlight needs its own private shadow.
[10:09] Okay, we'll put a little shadow right there.
[10:12] And see how that protrudes that up?
[10:14] Makes it just jump right out at you.
[10:16] The little ridges here and there.
[10:19] All kind of little things happening in this mountain.
[10:24] And we need a shadow back here behind this almighty peak.
[10:28] There it is.
[10:30] Just let him go.
[10:38] Okay, and we want a peak that comes right up through here
[10:42] and just begins working its way back down.
[10:45] (lively piano music)
[10:56] There.
[11:01] It's a nice ridge coming through here.
[11:04] And we can bring these together.
[11:06] (lively piano music)
[11:14] A few little shadows in here.
[11:18] Just here and there.
[11:24] Okay.
[11:27] And as we say, we want this to be more distinct
[11:30] at the top than the bottom, so we're gonna
[11:31] diffuse the bottom of it, and only the bottom.
[11:35] And here we're just tapping the canvas.
[11:37] We're trying not to destroy, only diffuse.
[11:40] And this is where you really depend on a firm paint.
[11:43] If you have a loose, oily, thin paint,
[11:46] you become a mud mixer here.
[11:52] So when you try this at home,
[11:55] if you find that you're making a lot of mud,
[11:57] check your paint, it should be very, very firm.
[12:00] Squeeze that tube, it should stand up maybe about
[12:02] three-quarters of an inch above the tube.
[12:05] Then you have a nice firm paint.
[12:08] Okay, I'm gonna make the same color and make it darker.
[12:10] Blue, brown, and alizarin added to it.
[12:15] 'Cause I want this mountain to be in front.
[12:17] This is a beautiful study of how to make one mountain
[12:19] look very, very big.
[12:22] And we'll put some little smaller mountains
[12:24] here in the foreground.
[12:26] (lively piano music)
[12:33] Okay, another little peak here.
[12:43] And we'll take the big brush and pull that out.
[12:47] Son of a gun, this comes right out.
[12:52] That's the beauty of painting wet on wet.
[12:54] You can move paint on the canvas.
[13:01] And we'll put some happy little snow here.
[13:04] Just let that run.
[13:07] There we go.
[13:13] Okay.
[13:16] Our light is still coming from the same direction here,
[13:18] so don't let that fool you.
[13:21] (lively piano music)
[13:30] Okay, now we can work in some shadows here.
[13:39] Let's push that one into the background,
[13:40] just come right on through, and that'll push him back.
[13:46] It's scary to have this much power
[13:47] that you can move mountains.
[14:00] Okay, this, there.
[14:04] We can swing this around and bring these two
[14:06] right together.
[14:09] Just make a nice little ridge out of that.
[14:15] Okay, now we've got an almighty mountain.
[14:20] I'm gonna take a little of the blue, brown,
[14:22] alizarin crimson, add a little touch of sap green to it.
[14:27] Looking for a dark color here, very dark.
[14:31] I will load up this one-inch brush,
[14:33] and we'll push in some little dark areas here.
[14:36] This'll be our little trees that are way, way
[14:38] back in the distance, bushes and trees
[14:40] and all the little things happening back here.
[14:50] There we go.
[14:52] Now with the big brush, we can pull a little bit
[14:54] of this color down.
[14:58] And this'll be the beginning of our reflections.
[15:05] Okay, and we'll just give it a little bit of ripple
[15:08] to make it look watery.
[15:15] (banging)
[15:22] Okay, let's put some highlights on here.
[15:25] I'm gonna use a little bit of Magic White
[15:27] mixed with some cad yellow.
[15:32] Little touch of permanent red.
[15:34] And we'll just sorta go back and forth,
[15:36] make a nice orangey color here, bright color.
[15:41] Mm.
[15:46] There we go, all these nice little bushes
[15:48] happening back here.
[15:50] (lively piano music)
[16:00] And then we'll reflect some of that
[16:02] right down into the water here.
[16:08] There we go.
[16:12] Now with a big brush and the most delicate, delicate
[16:14] touch possible, just enough to pull the paint
[16:18] a little bit, we'll pull that down
[16:21] and just give it a watery effect, don't wanna destroy it.
[16:27] Okay, now let's take...
[16:33] mix up a lot of dark here, blue, brown, alizarin,
[16:36] and a little bit of sap green.
[16:39] Should look black to you.
[16:44] And we'll load the brush full of paint, load it full.
[16:51] A lot of paint.
[16:54] And let's make some little evergreen trees
[16:56] that are growing way back here in the distance.
[16:58] (lively piano music)
[17:06] Okay.
[17:10] Let's firm that one up a little bit.
[17:13] It needs to be a little stronger.
[17:16] There we go.
[17:21] Maybe he's got a friend that lives right over here.
[17:25] Just dropped him in.
[17:27] (lively piano music)
[17:38] Okay, maybe they're getting a little bigger
[17:40] as it comes around the curve.
[17:54] Maybe a little baby one back here.
[18:03] Okay, we'll put a little bush in front of him.
[18:09] Okay, we'll take a little touch of Magic White,
[18:13] a little bit of brown,
[18:18] and a little touch of yellow
[18:19] just to make a nice sandy looking color.
[18:25] And we'll lay in a little water line back here.
[18:35] There we go.
[18:40] And we'll cut in a few little trunks
[18:41] and sticks here and there.
[18:44] (scraping)
[18:56] Okay.
[19:02] Maybe we need another tree right here.
[19:06] Trees are getting closer,
[19:07] so they're getting a little bigger.
[19:09] They look bigger to you, this is the way
[19:10] we push everything back.
[19:13] Work with perspective here.
[19:23] Okay, let's move to the other side of the picture
[19:25] while we've got a brush full of paint here,
[19:28] and we'll put an almighty tree right here.
[19:37] These trees live in your brush.
[19:38] You have to scare 'em out sometimes, really work at 'em.
[19:42] Little son of a guns will try to avoid you.
[19:49] And they're like everything else.
[19:50] The first time you try 'em, they're gonna
[19:52] drive you up the wall.
[19:54] But you practice it.
[19:56] If there's a secret to this, it is practice.
[20:00] You learn how to make the brush work,
[20:03] how to touch the canvas with it.
[20:05] And then it's just a matter of practicing.
[20:11] First time you tied your shoe, it wasn't easy.
[20:13] You had to look at it and work at it.
[20:15] The next thing you know, you're not paying
[20:17] any attention, you just, you get your shoe tied.
[20:19] Same thing.
[20:25] Okay, we'll just...
[20:29] Maybe we'll make another little projection
[20:31] come right out through here, there we go.
[20:35] A little reflection in here.
[20:40] And we'll pull that down.
[20:41] (lively piano music)
[20:51] Okay, we'll lay in some more of these
[20:54] pretty colors back here.
[20:56] There's a nice little bush right there.
[21:04] Mm, there's one.
[21:09] And right down here we'll reflect some of these.
[21:21] Okay, delicate touch again, very, very light.
[21:25] Just enough to move it a little bit on the wet canvas.
[21:32] And we'll put some land out here
[21:33] so these bushes have a place to sit.
[21:38] Don't want 'em fall off in the river here,
[21:41] so we'll give 'em something to set on here.
[21:46] And we can take a clean brush and just lift that gently.
[21:50] This is a very thin paint now, it's mostly Magic White.
[21:53] So you can move that without destroying
[21:55] what's underneath it.
[21:58] And here we'll use a little bit of just
[22:01] straight Magic White,
[22:04] and we'll put us a happy little water line in here.
[22:11] There.
[22:17] Okay.
[22:20] Now then, you can, you can put some more
[22:25] little bushes right in here like so.
[22:32] And we'll drop some reflections into the water.
[22:40] And we'll pull those down.
[22:44] And anybody can do this, this is not some big secret thing.
[22:48] Anybody can do it, we teach people from the age of 10
[22:51] all the way up 80 and 90 years old.
[22:54] (banging)
[23:00] And young people really, really like this.
[23:04] They learn it very easily, very quickly,
[23:07] and they see results very quickly.
[23:11] I have a son that's a young man right now,
[23:14] and he was, oh, he's been painting
[23:16] since he was about 12 years old, been selling his work.
[23:24] So it's not just for the older person.
[23:27] It will also work very well for the young person.
[23:32] The only trouble, like my son, he's quite lazy.
[23:35] He'll only paint if he needs money.
[23:37] If he needs money, he'll paint.
[23:40] But it is a nice way to put a happy buck in your pocket.
[23:45] And to make good things happen in your heart.
[23:50] Okay, we'll just have this come right on down through here.
[23:54] Fill that in.
[24:03] Okay, now we can start highlighting some of these things.
[24:06] We'll take a little bit of blue and yellow mixed together,
[24:10] make a very nice little green color here.
[24:14] And we'll just drop some highlights on this tree.
[24:17] Remember where your light's coming from.
[24:18] Light's coming from the right,
[24:21] so you want the right-hand side of this tree
[24:23] to be a little more distinct and bright than the left side.
[24:28] And if you're right handed, you'll probably find
[24:29] it's easier to have the light coming from the right.
[24:33] If you're left handed, it will sort of vary
[24:35] from person to person.
[24:38] Okay.
[24:42] Let's put some little highlights over here
[24:44] on these little trees.
[24:47] The sun wouldn't forget them.
[24:50] There we go.
[24:51] (lively piano music)
[25:00] There we are now.
[25:03] A little more Magic White, thin that down just a touch.
[25:08] And we can start finding all these beautiful little trees
[25:10] and bushes that are living in here.
[25:14] Very important that you don't kill all this dark area.
[25:17] If you kill all the dark,
[25:18] your picture's gonna be very flat.
[25:22] Well, we might as well reflect that
[25:23] right into the water there.
[25:27] Okay, and there we go.
[25:30] A little bit right in here.
[25:34] And we'll reflect that right on down,
[25:35] a little touch of red over the top.
[25:41] Okay, there's another nice tree I see.
[25:47] Little rascals live in your brush,
[25:48] you just gotta push 'em out.
[25:54] And let's put a touch more of the Magic here.
[25:59] There, nice ochre color.
[26:10] All these pretty little bushes,
[26:12] just let 'em flow off your brush.
[26:20] And some little grassy areas coming down through here.
[26:25] Let's turn that into a nice reflection.
[26:29] Just like so.
[26:33] Okay, now let's give him a little bit of dirt.
[26:40] There we go.
[26:43] This is straight van dyke brown.
[26:45] And onto that, we'll take a little brown and white
[26:50] and give him just a little touch of highlight,
[26:52] make him look like little stones and rocks
[26:54] playing through here.
[26:58] Okay, let's put a few little sticks here and there.
[27:03] Here we're just cutting through the paint
[27:04] using the point of the knife.
[27:08] But it shows distance, it shows all these different planes.
[27:15] Okay.
[27:18] And we'll put just a little bit of Magic White under here
[27:20] and give us a little water line.
[27:21] (lively piano music)
[27:32] There we go, and a few little sticks over here.
[27:42] Okay, but you see what you can do in just a few minutes
[27:45] with an almighty brush and an almighty knife
[27:50] and a beautiful painting in your heart.
[27:51] All you have to do is let it out.
[27:54] A few more sticks.
[27:59] There we go, I think we'll call that finished,
[28:02] and I wanna thank you very, very much for watching us.
[28:04] I hope to see you again in the near future.
[28:07] Until then, happy painting, thank you.
[28:13] (light guitar music)
`;function D(e){return typeof e==`number`}function oe(e){return typeof e==`function`}function se(e){return e===void 0}function O(e){return typeof e==`object`&&!!e}function k(e){if(!O(e))return!1;let t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}function A(e,t){if(oe(e))return e(t);e!=null&&(e.current=t)}function ce(...e){let t=e.flat();return e=>{let n=t.map(t=>A(t,e));if(n.some(oe))return()=>{for(let e=0;e<n.length;e++){let r=n[e];oe(r)?r():A(t[e],null)}}}}function le(...e){return(0,_.useCallback)(ce(...e),[...e])}function j(e,t){if(Object.is(e,t))return!0;if(Array.isArray(e)||Array.isArray(t))return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every((e,n)=>j(e,t[n]));if(!k(e)||!k(t))return!1;let n=Object.keys(e).filter(t=>!se(e[t])),r=Object.keys(t).filter(e=>!se(t[e]));return n.length===r.length&&n.every(n=>j(e[n],t[n]))}function M(...e){}function N(){let e,t,n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n}function ue(e){try{e()}catch{}}var de=o((e=>{var t=Symbol.for(`react.transitional.element`);function n(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.jsx=n,e.jsxs=n})),P=o(((e,t)=>{t.exports=de()}))(),fe=(0,_.createContext)(null);function pe(){return(0,_.useContext)(fe)?.setMedia}function me(e){let t=(0,_.useRef)(e);return t.current=e,t}function he(e,t,n){let r=(0,_.useRef)(null),i=me(t),a=me(n);(0,_.useEffect)(()=>(r.current===null?i.current?.():(clearTimeout(r.current),r.current=null),()=>{r.current=setTimeout(()=>{a.current?.(),e.destroy()},0)}),[e])}function ge(e,t){let[n]=(0,_.useState)(()=>new e),r=pe();return he(n,()=>{t?.(n),r?.(n)},()=>r?.(e=>e===n?null:e)),n}function _e(e){return(0,_.useCallback)(t=>(t?e.attach?.(t):e.detach?.(),()=>e.detach?.()),[e])}function ve(e,t,n){let r={},i=new Set,a=(0,_.useRef)(null),o=(t,n)=>{e[t]!==n&&(e[t]=n)};for(let e of a.current??[])se(t[e])&&o(e,n[e]);for(let e in t)if(e in n){if(se(t[e]))continue;i.add(e),o(e,t[e])}else r[e]=t[e];return a.current=i,r}var F={src:``,autoplay:!1,defaultMuted:!1,muted:!1,loop:!1,controls:!1,playsInline:!0,preload:`metadata`,poster:``,source:null};function ye(e){let t=new URLSearchParams;for(let n in e){let r=e[n];r===!0||r===``?t.set(n,`1`):r===!1?t.set(n,`0`):r!=null&&t.set(n,String(r))}return t.toString()}function be(e){if(!e)return null;if(/^[\w-]{11}$/.test(e))return{id:e,kind:`video`,listId:null,startTime:null,noCookie:!1};let t=e.includes(`-nocookie`),n=we.exec(e),r=L.exec(e),i=n?.[1]??null,a=i===`videoseries`?null:i;return!a&&!r?null:{id:a,kind:a?`video`:`playlist`,listId:r?.[1]??null,startTime:Se(e),noCookie:t}}function xe(e,t={}){let n=be(e);if(!n)return``;let r=n.noCookie?I:Ce,i={controls:t.controls===!0?null:0,autoplay:t.autoplay,loop:t.loop,mute:t.defaultMuted,playsinline:t.playsInline??F.playsInline,preload:t.preload??F.preload,enablejsapi:1,rel:0,iv_load_policy:3,start:n.startTime,...t.source?.engine?.youtube??void 0};return n.kind===`playlist`&&n.listId?`${r}?${ye({listType:`playlist`,list:n.listId,...i})}`:`${r}/${n.id}?${ye(i)}`}function Se(e){let t=/[?&]t=([\dhms]+)/i.exec(e)?.[1]?.toLowerCase();if(!t)return null;let n=0,r=!1,i=/(\d+)h/.exec(t)?.[1];i&&(n+=Number.parseInt(i,10)*3600,r=!0);let a=/(\d+)m/.exec(t)?.[1];a&&(n+=Number.parseInt(a,10)*60,r=!0);let o=/(\d+)s?$/.exec(t)?.[1];return o&&(n+=Number.parseInt(o,10),r=!0),r?n:null}var Ce=`https://www.youtube.com/embed`,I=`https://www.youtube-nocookie.com/embed`,we=/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((?:\w|-){11})/,L=/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/.*?[?&]list=)([\w-]+)/,Te=Object.freeze({length:0,start:()=>0,end:()=>0}),R=Object.assign(new EventTarget,{length:0,*[Symbol.iterator](){},getTrackById:()=>null});new EventTarget;var z=class e extends Error{static MEDIA_ERR_ABORTED=1;static MEDIA_ERR_NETWORK=2;static MEDIA_ERR_DECODE=3;static MEDIA_ERR_SRC_NOT_SUPPORTED=4;static MEDIA_ERR_ENCRYPTED=5;static MEDIA_ERR_CUSTOM=100;static defaultMessages={1:`You stopped media playback before it finished.`,2:`This media could not be loaded due to a network or server issue.`,3:`This media could not be played. It may be corrupted, or your browser may not support its format.`,4:`This media could not be loaded. It may be unavailable, or your browser may not support its format.`,5:`This media could not be played because it could not be decrypted.`};name;code;context;fatal;data;constructor(t,n=e.MEDIA_ERR_CUSTOM,r,i){super(t),this.name=`MediaError`,this.code=n,this.context=i,this.fatal=r??(n>=e.MEDIA_ERR_NETWORK&&n<=e.MEDIA_ERR_ENCRYPTED),this.message||=e.defaultMessages[this.code]??``}};function Ee(e,t){return{length:1,start:()=>e,end:()=>t}}function De(e){class t extends e{#e=[];#t=null;#n=.5;#r=new AbortController;constructor(...e){super(...e);let t={signal:this.#r.signal};this.addEventListener(`play`,()=>this.#o(this.#a),t),this.addEventListener(`pause`,()=>this.#c(this.#a),t),this.addEventListener(`ended`,()=>this.#c(this.#a),t),this.addEventListener(`seeking`,()=>this.#l(),t),this.addEventListener(`seeked`,()=>this.#s(this.#a),t)}get#i(){return this}get#a(){return this.#i.currentTime}get played(){let e=this.#a;return!this.#i.paused&&!this.#t&&D(e)&&(this.#t={start:e,end:e}),this.#t&&D(e)&&(e>this.#t.end&&(this.#t.end=e),this.#u(this.#t.start,this.#t.end)),this.#e.length?Oe(this.#e.map(e=>[e.start,e.end])):Oe([[0,0]])}destroy(){this.#r.abort(),super.destroy?.()}#o(e){let t=D(e)?e:this.#a;this.#t||={start:t,end:t}}#s(e){let t=D(e)?e:this.#a;this.#t={start:t,end:t}}#c(e){let t=D(e)?e:this.#a;this.#l(t)}#l(e){if(!this.#t)return;D(e)&&(this.#t.end=e);let{start:t,end:n}=this.#t;this.#t=null,this.#u(t,n)}#u(e,t){if(e>=t)return;let n=[...this.#e,{start:e,end:t}];n.sort((e,t)=>e.start-t.start);let r=[];for(let e of n){let t=r.length?r[r.length-1]:null;if(!t){r.push({...e});continue}e.start<=t.end+this.#n?(t.start=Math.min(t.start,e.start),t.end=Math.max(t.end,e.end)):r.push({...e})}this.#e=r}}return t}function Oe(e){return Object.defineProperties(e,{start:{value:t=>e[t]?.[0]??0},end:{value:t=>e[t]?.[1]??0}}),e}var ke=new Map;function Ae(e){for(let t of document.scripts)if(t.getAttribute(`src`)===e)return!0;return!1}function je(e){let t=ke.get(e);return t||(Ae(e)?Promise.resolve():(t=new Promise((t,n)=>{let r=document.createElement(`script`);r.src=e,r.onload=()=>t(),r.onerror=()=>{r.remove(),n(Error(`Failed to load script: ${e}`))},document.head.appendChild(r)}),ke.set(e,t),t.catch(()=>ke.delete(e)),t))}var Me=`https://www.youtube.com/iframe_api`;async function Ne(){let e=globalThis.YT;if(e?.Player)return e;await je(Me);let t=globalThis.YT;if(!t)throw Error(`YouTube iframe API failed to load`);return await new Promise(e=>t.ready(e)),t}var Pe={2:z.MEDIA_ERR_SRC_NOT_SUPPORTED,5:z.MEDIA_ERR_DECODE,100:z.MEDIA_ERR_SRC_NOT_SUPPORTED,101:z.MEDIA_ERR_SRC_NOT_SUPPORTED,150:z.MEDIA_ERR_SRC_NOT_SUPPORTED},Fe=De(EventTarget),Ie=class extends Fe{#e=null;#t=null;#n=!1;#r=!1;#i=!1;#a=N();#o=0;#s=F.src;#c=F.autoplay;#l=F.defaultMuted;#u=F.loop;#d=F.controls;#f=F.playsInline;#p=F.preload;#m=F.poster;#h=F.source;#g=!0;#_=!1;#v=!1;#y=!1;#b=!1;#x=0;#S=NaN;#C=1;#w=!1;#T=1;#E=0;#D=Le;#O=null;#k=!1;#A=null;#j=null;#M=null;static PLAYER_SOFTWARE_NAME=`youtube-video`;get engine(){return this.#t}get target(){return this.#e}attach(e){!e||this.#e===e||(this.#e&&this.detach(),this.#e=e,this.#N(),this.#P())}detach(){this.#e&&(this.#o++,this.#G(),this.#Y(),ue(()=>this.#t?.destroy()),this.#t=null,this.#n=!1,this.#r=!1,this.#i=!1,this.#e=null,this.#a.resolve(),this.#z())}destroy(){this.detach(),super.destroy()}get src(){return this.#s}set src(e){let{engine:t}=this.#h??{},n={...t&&{engine:t},...e&&{src:e}};this.source=Object.keys(n).length>0?n:null}get currentSrc(){return this.#e?.getAttribute(`src`)??``}get readyState(){return this.#D}async load(){if(!this.#t||!this.#n){if(this.#r=!!this.#e,this.#e&&!this.#t&&!this.#i){let e=this.#N();if(await Promise.resolve(),e!==this.#a)return;this.#P()}return}let e=this.#N();if(this.#z(),this.dispatchEvent(new Event(`emptied`)),!this.#s){e.resolve(),this.#G(),ue(()=>this.#t?.stopVideo());return}this.dispatchEvent(new Event(`loadstart`));let t=be(this.#s);if(!t){this.#O=new z(`Unrecognized YouTube source: ${this.#s}`,z.MEDIA_ERR_SRC_NOT_SUPPORTED),this.dispatchEvent(new Event(`error`)),e.resolve();return}if(t.kind===`playlist`&&t.listId){let e={list:t.listId,listType:`playlist`};this.#c?this.#t.loadPlaylist(e):this.#t.cuePlaylist(e)}else if(t.id){let e={videoId:t.id};t.startTime!=null&&(e.startSeconds=t.startTime),this.#c?this.#t.loadVideoById(e):this.#t.cueVideoById(e)}}#N(){return this.#a.resolve(),this.#a=N(),this.#a}get paused(){return this.#g}get ended(){return this.#_}get seeking(){return this.#v}async play(){await this.#a,this.#s&&this.#t?.playVideo()}pause(){this.#t?.pauseVideo()}get currentTime(){return this.#x}set currentTime(e){this.#x!==e&&(this.#x=e,this.#L(t=>t.seekTo(e,!0)))}get duration(){return this.#S}get volume(){return this.#C}set volume(e){this.#C!==e&&(this.#C=e,this.#L(t=>t.setVolume(e*100)))}get muted(){return this.#w}set muted(e){this.#w!==e&&(this.#w=e,this.#L(t=>e?t.mute():t.unMute()))}get playbackRate(){return this.#T}set playbackRate(e){this.#T!==e&&(this.#T=e,this.#L(t=>t.setPlaybackRate(e)))}get autoplay(){return this.#c}set autoplay(e){this.#c=e}get defaultMuted(){return this.#l}set defaultMuted(e){this.#l=e}get loop(){return this.#u}set loop(e){this.#u=e}get controls(){return this.#d}set controls(e){this.#d=e}get playsInline(){return this.#f}set playsInline(e){this.#f=e}get preload(){return this.#p}set preload(e){this.#p=e}get poster(){return this.#m}set poster(e){this.#m=e}get source(){return this.#h}set source(e){let t=e??null;if(t===this.#h)return;let n=t?.src??``,r=this.#s!==n,i=!j(this.#h?.engine?.youtube??null,t?.engine?.youtube??null);this.#h=t,this.#s=n,(r||i)&&this.load(),this.dispatchEvent(new Event(`sourcechange`))}get buffered(){return this.#E>0?Ee(0,this.#E):Te}get seekable(){return this.#S>0&&Number.isFinite(this.#S)?Ee(0,this.#S):Te}get error(){return this.#O}get textTracks(){return this.#j??=globalThis.document?.createElement(`video`)??null,this.#j?.textTracks??R}get isFullscreen(){return this.#k}async requestFullscreen(){this.#e?.requestFullscreen&&(await this.#e.requestFullscreen(),this.#k=!0)}async exitFullscreen(){let e=globalThis.document;e?.fullscreenElement&&e.fullscreenElement===this.#e&&await e.exitFullscreen(),this.#k=!1}#P(){let e=this.#e;if(!e||this.#t||this.#i)return!1;if(!e.getAttribute(`src`)){let t=xe(this.#s,this.#R());if(!t)return this.#a.resolve(),!1;e.src=t}return this.#i=!0,this.dispatchEvent(new Event(`loadstart`)),this.#F(e),!0}async#F(e){let t=this.#o,n;try{n=await Ne()}catch{if(this.#I(t))return;this.#i=!1,this.#O=new z(`Failed to load the YouTube iframe API`,z.MEDIA_ERR_NETWORK),this.dispatchEvent(new Event(`error`)),this.#a.resolve();return}if(this.#I(t)||this.#e!==e)return;let r=new n.Player(e,{events:{onReady:()=>{this.#I(t)||this.#B()},onError:e=>{this.#I(t)||this.#H(e.data)}}});this.#t=r,this.#i=!1,this.#U(r,t),this.#q(r)}#I(e){return e!==this.#o}#L(e){this.#a.then(()=>{let t=this.#t;t&&ue(()=>e(t))},M)}#R(){return{autoplay:this.#c,defaultMuted:this.#l,loop:this.#u,controls:this.#d,playsInline:this.#f,preload:this.#p||F.preload,source:this.#h}}#z(){this.#x=0,this.#S=NaN,this.#w=!1,this.#g=!this.#c,this.#_=!1,this.#T=1,this.#E=0,this.#D=Le,this.#v=!1,this.#y=!1,this.#b=!1,this.#C=1,this.#O=null,this.#k=!1}#B(){if(this.#n=!0,this.#r){this.#r=!1,this.load();return}this.#V()}#V(){if(this.#y)return;this.#y=!0,this.#D=Re;let e=this.#t;e&&(this.#S=e.getDuration()||NaN,this.#w=e.isMuted(),this.#C=e.getVolume()/100,this.#T=e.getPlaybackRate());for(let e of[`loadedmetadata`,`durationchange`,`volumechange`,`loadcomplete`])this.dispatchEvent(new Event(e));this.#a.resolve(),this.#W()}#H(e){let t=new z(`YouTube iframe player error #${e}; visit https://developers.google.com/youtube/iframe_api_reference#onError for the full error message.`,Pe[e]??z.MEDIA_ERR_CUSTOM,!0);t.data={youtubeErrorCode:e},this.#O=t,this.dispatchEvent(new Event(`error`)),this.#a.resolve()}#U(e,t){let n=e=>this.dispatchEvent(new Event(e));e.addEventListener(`onStateChange`,({data:r})=>{if(!this.#I(t)){if(this.#s&&!this.#y&&r!==-1&&this.#V(),(r===1||r===3)&&(this.#b||(this.#b=!0,this.#g=!1,this.#_=!1,n(`play`)),this.#J(e)),r===3)n(`waiting`);else if(r===1)this.#v&&(this.#v=!1,n(`seeked`)),this.#D=ze,this.#g=!1,n(`playing`);else if(r===2){let t=Math.abs(e.getCurrentTime()-this.#x);!this.#v&&t>.1&&(this.#v=!0,n(`seeking`)),this.#b=!1,this.#g=!0,n(`pause`)}else r===0&&(this.#b=!1,this.#g=!0,n(`pause`),this.#_=!0,n(`ended`),this.#u&&this.play())}}),e.addEventListener(`onPlaybackRateChange`,()=>{this.#I(t)||(this.#T=e.getPlaybackRate(),n(`ratechange`))}),e.addEventListener(`onVolumeChange`,()=>{this.#I(t)||(this.#C=e.getVolume()/100,this.#w=e.isMuted(),n(`volumechange`))})}#W(){this.#G(),this.#A=setInterval(()=>this.#K(),50)}#G(){this.#A!==null&&(clearInterval(this.#A),this.#A=null)}#K(){let e=this.#t;if(!e)return;let t=e.getCurrentTime(),n=e.getDuration(),r=e.getVideoLoadedFraction()*n;this.#v&&r>.1?(this.#v=!1,this.dispatchEvent(new Event(`seeked`))):!this.#v&&Math.abs(t-this.#x)>.1&&(this.#v=!0,this.dispatchEvent(new Event(`seeking`))),t!==this.#x&&(this.#x=t,this.dispatchEvent(new Event(`timeupdate`))),D(n)&&n>0&&n!==this.#S&&(this.#S=n,this.dispatchEvent(new Event(`durationchange`))),r!==this.#E&&(this.#E=r,n>0&&r>=n&&(this.#D=Be),this.dispatchEvent(new Event(`progress`)))}#q(e){let t=globalThis.document;if(se(t))return;this.#Y();let n=t.createElement(`video`);this.#j=n,this.#M=new AbortController,n.textTracks?.addEventListener?.(`change`,()=>{let t=Array.from(n.textTracks).find(e=>e.mode===`showing`);ue(()=>e.setOption(`captions`,`track`,t?{languageCode:t.language}:{}))},{signal:this.#M.signal})}#J(e){let t=this.#j;if(!t)return;let n=e.getOption(`captions`,`tracklist`)??[];for(let e of n)e.languageCode&&(Array.from(t.textTracks).some(t=>t.language===e.languageCode)||ue(()=>t.addTextTrack?.(`subtitles`,e.displayName??``,e.languageCode)))}#Y(){this.#M?.abort(),this.#M=null,this.#j=null}},Le=0,Re=1,ze=3,Be=4,Ve=(0,_.forwardRef)(function({children:e,...t},n){let r=ge(Ie),i={...t},a=le(_e(r),n),[o]=(0,_.useState)(()=>xe(i.src||i.source?.src||``,{...F,...i})),s=ve(r,i,F);return(0,P.jsx)(`iframe`,{title:`YouTube video player`,src:o||void 0,"data-cross-origin-frame":!0,allow:`accelerometer; fullscreen; autoplay; encrypted-media; gyroscope; picture-in-picture`,allowFullScreen:!0,frameBorder:0,width:`100%`,height:`100%`,referrerPolicy:i.source?.engine?.youtube?.referrerPolicy,...s,ref:a,children:e})}),He=o(((e,t)=>{t.exports=`SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`})),Ue=o(((e,t)=>{var n=He();function r(){}function i(){}i.resetWarningCache=r,t.exports=function(){function e(e,t,r,i,a,o){if(o!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name=`Invariant Violation`,s}}e.isRequired=e;function t(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return a.PropTypes=a,a}})),We=o(((e,t)=>{t.exports=Ue()()})),Ge=c(m(),1),B=c(We(),1);function Ke(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`){if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Ke(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n)}return r}function qe(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Ke(e))&&(r&&(r+=` `),r+=t);return r}function Je(e,t){for(let n=0,r=e.length;n<r;n++)if(t.apply(t,[e[n],n,e]))return e[n]}function Ye(e){return typeof e==`function`||Object.prototype.toString.call(e)===`[object Function]`}function Xe(e){return typeof e==`number`&&!isNaN(e)}function Ze(e){return parseInt(e,10)}function Qe(e,t,n){if(e[t])return Error(`Invalid prop ${t} passed to ${n} - do not set this, set it on the child.`)}var $e=[`Moz`,`Webkit`,`O`,`ms`];function et(e=`transform`){if(typeof window>`u`)return``;let t=window.document?.documentElement?.style;if(!t||e in t)return``;for(let n=0;n<$e.length;n++)if(tt(e,$e[n])in t)return $e[n];return``}function tt(e,t){return t?`${t}${nt(e)}`:e}function nt(e){let t=``,n=!0;for(let r=0;r<e.length;r++)n?(t+=e[r].toUpperCase(),n=!1):e[r]===`-`?n=!0:t+=e[r];return t}var rt=et(),it=``;function at(e,t){it||=Je([`matches`,`webkitMatchesSelector`,`mozMatchesSelector`,`msMatchesSelector`,`oMatchesSelector`],function(t){return Ye(e[t])})??``;let n=e[it];return Ye(n)?!!n.call(e,t):!1}function ot(e,t,n){let r=e;do{if(at(r,t))return!0;if(r===n)return!1;r=r.parentNode}while(r);return!1}function st(e,t,n,r){if(!e)return;let i={capture:!0,...r},a=n;e.addEventListener?e.addEventListener(t,a,i):e.attachEvent?e.attachEvent(`on`+t,a):e[`on`+t]=a}function ct(e,t,n,r){if(!e)return;let i={capture:!0,...r},a=n;e.removeEventListener?e.removeEventListener(t,a,i):e.detachEvent?e.detachEvent(`on`+t,a):e[`on`+t]=null}function lt(e){let t=e.clientHeight,n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=Ze(n.borderTopWidth),t+=Ze(n.borderBottomWidth),t}function ut(e){let t=e.clientWidth,n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=Ze(n.borderLeftWidth),t+=Ze(n.borderRightWidth),t}function dt(e){let t=e.clientHeight,n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=Ze(n.paddingTop),t-=Ze(n.paddingBottom),t}function ft(e){let t=e.clientWidth,n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=Ze(n.paddingLeft),t-=Ze(n.paddingRight),t}function pt(e,t,n){let r=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect();return{x:(e.clientX+t.scrollLeft-r.left)/n,y:(e.clientY+t.scrollTop-r.top)/n}}function mt(e,t){let n=gt(e,t,`px`);return{[tt(`transform`,rt)]:n}}function ht(e,t){return gt(e,t,``)}function gt({x:e,y:t},n,r){let i=`translate(${e}${r},${t}${r})`;return n&&(i=`translate(${`${typeof n.x==`string`?n.x:n.x+r}`}, ${`${typeof n.y==`string`?n.y:n.y+r}`})`+i),i}function _t(e,t){return e.targetTouches&&Je(e.targetTouches,e=>t===e.identifier)||e.changedTouches&&Je(e.changedTouches,e=>t===e.identifier)}function vt(e){if(e.targetTouches&&e.targetTouches[0])return e.targetTouches[0].identifier;if(e.changedTouches&&e.changedTouches[0])return e.changedTouches[0].identifier}function yt(){return typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}function bt(e,t){if(!e)return;let n=e.getElementById(`react-draggable-style-el`);if(!n){n=e.createElement(`style`),n.type=`text/css`,n.id=`react-draggable-style-el`;let r=t??yt();r&&n.setAttribute(`nonce`,r),n.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,n.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,e.getElementsByTagName(`head`)[0].appendChild(n)}e.body&&Ct(e.body,`react-draggable-transparent-selection`)}function xt(e){window.requestAnimationFrame?window.requestAnimationFrame(()=>{St(e)}):St(e)}function St(e){if(e)try{e.body&&wt(e.body,`react-draggable-transparent-selection`);let t=e.selection;if(t)t.empty();else{let t=(e.defaultView||window).getSelection();t&&t.type!==`Caret`&&t.removeAllRanges()}}catch{}}function Ct(e,t){e.classList?e.classList.add(t):e.className.match(RegExp(`(?:^|\\s)${t}(?!\\S)`))||(e.className+=` ${t}`)}function wt(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(RegExp(`(?:^|\\s)${t}(?!\\S)`,`g`),``)}function Tt(e,t,n){if(!e.props.bounds)return[t,n];let{bounds:r}=e.props;r=typeof r==`string`?r:Mt(r);let i=Nt(e);if(typeof r==`string`){let{ownerDocument:e}=i,t=e.defaultView;if(!t)throw Error(`Cannot resolve the owner window of the draggable node.`);let n;if(n=r===`parent`?i.parentNode:i.getRootNode().querySelector(r),!(n instanceof t.HTMLElement))throw Error(`Bounds selector "`+r+`" could not find an element.`);let a=n,o=t.getComputedStyle(i),s=t.getComputedStyle(a);r={left:-i.offsetLeft+Ze(s.paddingLeft)+Ze(o.marginLeft),top:-i.offsetTop+Ze(s.paddingTop)+Ze(o.marginTop),right:ft(a)-ut(i)-i.offsetLeft+Ze(s.paddingRight)-Ze(o.marginRight),bottom:dt(a)-lt(i)-i.offsetTop+Ze(s.paddingBottom)-Ze(o.marginBottom)}}return Xe(r.right)&&(t=Math.min(t,r.right)),Xe(r.bottom)&&(n=Math.min(n,r.bottom)),Xe(r.left)&&(t=Math.max(t,r.left)),Xe(r.top)&&(n=Math.max(n,r.top)),[t,n]}function Et(e,t,n){return[Math.round(t/e[0])*e[0],Math.round(n/e[1])*e[1]]}function Dt(e){return e.props.axis===`both`||e.props.axis===`x`}function Ot(e){return e.props.axis===`both`||e.props.axis===`y`}function kt(e,t,n){let r=typeof t==`number`?_t(e,t):null;if(typeof t==`number`&&!r)return null;let i=Nt(n),a=n.props.offsetParent||i.offsetParent||i.ownerDocument.body;return pt(r||e,a,n.props.scale)}function At(e,t,n){let r=!Xe(e.lastX),i=Nt(e);return r?{node:i,deltaX:0,deltaY:0,lastX:t,lastY:n,x:t,y:n}:{node:i,deltaX:t-e.lastX,deltaY:n-e.lastY,lastX:e.lastX,lastY:e.lastY,x:t,y:n}}function jt(e,t){let n=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/n,y:e.state.y+t.deltaY/n,deltaX:t.deltaX/n,deltaY:t.deltaY/n,lastX:e.state.x,lastY:e.state.y}}function Mt(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}function Nt(e){let t=e.findDOMNode();if(!t)throw Error(`<DraggableCore>: Unmounted during event!`);return t}var Pt=typeof process<`u`&&{}.DRAGGABLE_DEBUG?console.log.bind(console):function(){},Ft={touch:{start:`touchstart`,move:`touchmove`,stop:`touchend`},mouse:{start:`mousedown`,move:`mousemove`,stop:`mouseup`}},It=Ft.mouse,Lt=class extends _.Component{constructor(){super(...arguments),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,this.touchIdentifier=null,this.mounted=!1,this.handleDragStart=e=>{if(this.props.onMouseDown(e),!this.props.allowAnyClick&&(typeof e.button==`number`&&e.button!==0||e.ctrlKey))return!1;let t=this.findDOMNode();if(!t||!t.ownerDocument||!t.ownerDocument.body)throw Error(`<DraggableCore> not mounted on DragStart!`);let{ownerDocument:n}=t;if(this.props.disabled||!(e.target instanceof n.defaultView.Node)||this.props.handle&&!ot(e.target,this.props.handle,t)||this.props.cancel&&ot(e.target,this.props.cancel,t))return;e.type===`touchstart`&&!this.props.allowMobileScroll&&e.preventDefault();let r=vt(e);this.touchIdentifier=r;let i=kt(e,r,this);if(i==null)return;let{x:a,y:o}=i,s=At(this,a,o);Pt(`DraggableCore: handleDragStart: %j`,s),Pt(`calling`,this.props.onStart),this.props.onStart(e,s)!==!1&&this.mounted!==!1&&(this.props.enableUserSelectHack&&bt(n,this.props.nonce),this.dragging=!0,this.lastX=a,this.lastY=o,st(n,It.move,this.handleDrag),st(n,It.stop,this.handleDragStop))},this.handleDrag=e=>{let t=kt(e,this.touchIdentifier,this);if(t==null)return;let{x:n,y:r}=t;if(Array.isArray(this.props.grid)){let e=n-this.lastX,t=r-this.lastY;if([e,t]=Et(this.props.grid,e,t),!e&&!t)return;n=this.lastX+e,r=this.lastY+t}let i=At(this,n,r);if(Pt(`DraggableCore: handleDrag: %j`,i),this.props.onDrag(e,i)===!1||this.mounted===!1){try{this.handleDragStop(new MouseEvent(`mouseup`))}catch{let e=document.createEvent(`MouseEvents`);e.initMouseEvent(`mouseup`,!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(e)}return}this.lastX=n,this.lastY=r},this.handleDragStop=e=>{if(!this.dragging)return;let t=kt(e,this.touchIdentifier,this);if(t==null)return;let{x:n,y:r}=t;if(Array.isArray(this.props.grid)){let e=n-this.lastX||0,t=r-this.lastY||0;[e,t]=Et(this.props.grid,e,t),n=this.lastX+e,r=this.lastY+t}let i=At(this,n,r);if(this.props.onStop(e,i)===!1||this.mounted===!1)return!1;let a=this.findDOMNode();a&&this.props.enableUserSelectHack&&xt(a.ownerDocument),Pt(`DraggableCore: handleDragStop: %j`,i),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,a&&(Pt(`DraggableCore: Removing handlers`),ct(a.ownerDocument,It.move,this.handleDrag),ct(a.ownerDocument,It.stop,this.handleDragStop))},this.onMouseDown=e=>(It=Ft.mouse,this.handleDragStart(e)),this.onMouseUp=e=>(It=Ft.mouse,this.handleDragStop(e)),this.onTouchStart=e=>(It=Ft.touch,this.handleDragStart(e)),this.onTouchEnd=e=>(It=Ft.touch,this.handleDragStop(e))}componentDidMount(){this.mounted=!0;let e=this.findDOMNode();e&&st(e,Ft.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;let e=this.findDOMNode();if(e){let{ownerDocument:t}=e;ct(t,Ft.mouse.move,this.handleDrag),ct(t,Ft.touch.move,this.handleDrag),ct(t,Ft.mouse.stop,this.handleDragStop),ct(t,Ft.touch.stop,this.handleDragStop),ct(e,Ft.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&xt(t)}}findDOMNode(){if(this.props?.nodeRef)return this.props.nodeRef.current;let e=Ge.default;return typeof e.findDOMNode==`function`?e.findDOMNode(this):(Pt(`react-draggable: ReactDOM.findDOMNode is not available in React 19+. You must provide a nodeRef prop. See: https://github.com/react-grid-layout/react-draggable#noderef`),null)}render(){return _.cloneElement(_.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}};Lt.displayName=`DraggableCore`,Lt.propTypes={allowAnyClick:B.default.bool,allowMobileScroll:B.default.bool,children:B.default.node.isRequired,disabled:B.default.bool,enableUserSelectHack:B.default.bool,offsetParent:function(e,t){if(e[t]&&e[t].nodeType!==1)throw Error(`Draggable's offsetParent must be a DOM Node.`)},grid:B.default.arrayOf(B.default.number),handle:B.default.string,cancel:B.default.string,nodeRef:B.default.object,nonce:B.default.string,onStart:B.default.func,onDrag:B.default.func,onStop:B.default.func,onMouseDown:B.default.func,scale:B.default.number,className:Qe,style:Qe,transform:Qe},Lt.defaultProps={allowAnyClick:!1,allowMobileScroll:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1};var Rt=class extends _.Component{constructor(e){super(e),this.onDragStart=(e,t)=>{if(Pt(`Draggable: onDragStart: %j`,t),this.props.onStart(e,jt(this,t))===!1)return!1;this.setState({dragging:!0,dragged:!0})},this.onDrag=(e,t)=>{if(!this.state.dragging)return!1;Pt(`Draggable: onDrag: %j`,t);let n=jt(this,t),r={x:n.x,y:n.y,slackX:0,slackY:0};if(this.props.bounds){let{x:e,y:t}=r;r.x+=this.state.slackX,r.y+=this.state.slackY;let[i,a]=Tt(this,r.x,r.y);r.x=i,r.y=a,r.slackX=this.state.slackX+(e-r.x),r.slackY=this.state.slackY+(t-r.y),n.x=r.x,n.y=r.y,n.deltaX=r.x-this.state.x,n.deltaY=r.y-this.state.y}if(this.props.onDrag(e,n)===!1)return!1;this.setState(r)},this.onDragStop=(e,t)=>{if(!this.state.dragging||this.props.onStop(e,jt(this,t))===!1)return!1;Pt(`Draggable: onDragStop: %j`,t);let n={dragging:!1,slackX:0,slackY:0};if(this.props.position){let{x:e,y:t}=this.props.position;n.x=e,n.y=t}this.setState(n)},this.state={dragging:!1,dragged:!1,x:e.position?e.position.x:e.defaultPosition.x,y:e.position?e.position.y:e.defaultPosition.y,prevPropsPosition:{...e.position},slackX:0,slackY:0,isElementSVG:!1},e.position&&!(e.onDrag||e.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}static getDerivedStateFromProps({position:e},{prevPropsPosition:t}){return e&&(!t||e.x!==t.x||e.y!==t.y)?(Pt(`Draggable: getDerivedStateFromProps %j`,{position:e,prevPropsPosition:t}),{x:e.x,y:e.y,prevPropsPosition:{...e}}):null}componentDidMount(){window.SVGElement!==void 0&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.state.dragging&&this.setState({dragging:!1})}findDOMNode(){if(this.props?.nodeRef)return this.props.nodeRef.current;let e=Ge.default;return typeof e.findDOMNode==`function`?e.findDOMNode(this):null}render(){let{axis:e,bounds:t,children:n,defaultPosition:r,defaultClassName:i,defaultClassNameDragging:a,defaultClassNameDragged:o,position:s,positionOffset:c,scale:l,...u}=this.props,d={},f=null,p=!s||this.state.dragging,m=s||r,h={x:Dt(this)&&p?this.state.x:m.x,y:Ot(this)&&p?this.state.y:m.y};this.state.isElementSVG?f=ht(h,c):d=mt(h,c);let g=_.Children.only(n),v=qe(g.props.className||``,i,{[a]:this.state.dragging,[o]:this.state.dragged});return _.createElement(Lt,{...u,onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop},_.cloneElement(g,{className:v,style:{...g.props.style,...d},transform:f}))}};Rt.displayName=`Draggable`,Rt.propTypes={...Lt.propTypes,axis:B.default.oneOf([`both`,`x`,`y`,`none`]),bounds:B.default.oneOfType([B.default.shape({left:B.default.number,right:B.default.number,top:B.default.number,bottom:B.default.number}),B.default.string,B.default.oneOf([!1])]),defaultClassName:B.default.string,defaultClassNameDragging:B.default.string,defaultClassNameDragged:B.default.string,defaultPosition:B.default.shape({x:B.default.number,y:B.default.number}),positionOffset:B.default.shape({x:B.default.oneOfType([B.default.number,B.default.string]),y:B.default.oneOfType([B.default.number,B.default.string])}),position:B.default.shape({x:B.default.number,y:B.default.number}),className:Qe,style:Qe,transform:Qe},Rt.defaultProps={...Lt.defaultProps,axis:`both`,bounds:!1,defaultClassName:`react-draggable`,defaultClassNameDragging:`react-draggable-dragging`,defaultClassNameDragged:`react-draggable-dragged`,defaultPosition:{x:0,y:0},scale:1};var zt=Rt,Bt=o(((e,t)=>{function n(e){var t,r,i=``;if(typeof e==`string`||typeof e==`number`)i+=e;else if(typeof e==`object`){if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=n(e[t]))&&(i&&(i+=` `),i+=r)}else for(r in e)e[r]&&(i&&(i+=` `),i+=r)}return i}function r(){for(var e,t,r=0,i=``,a=arguments.length;r<a;r++)(e=arguments[r])&&(t=n(e))&&(i&&(i+=` `),i+=t);return i}t.exports=r,t.exports.clsx=r})),Vt=o(((e,t)=>{var n=Object.create,r=Object.defineProperty,i=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,o=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty,c=(e,t)=>{for(var n in t)r(e,n,{get:t[n],enumerable:!0})},l=(e,t,n,o)=>{if(t&&typeof t==`object`||typeof t==`function`)for(let c of a(t))!s.call(e,c)&&c!==n&&r(e,c,{get:()=>t[c],enumerable:!(o=i(t,c))||o.enumerable});return e},d=(e,t,i)=>(i=e==null?{}:n(o(e)),l(t||!e||!e.__esModule?r(i,`default`,{value:e,enumerable:!0}):i,e)),f=e=>l(r({},`__esModule`,{value:!0}),e),p={};c(p,{DraggableCore:()=>z,default:()=>Ee}),t.exports=f(p);var h=d(u()),g=d(We()),_=d(m()),v=Bt();function y(e,t){for(let n=0,r=e.length;n<r;n++)if(t.apply(t,[e[n],n,e]))return e[n]}function b(e){return typeof e==`function`||Object.prototype.toString.call(e)===`[object Function]`}function x(e){return typeof e==`number`&&!isNaN(e)}function S(e){return parseInt(e,10)}function C(e,t,n){if(e[t])return Error(`Invalid prop ${t} passed to ${n} - do not set this, set it on the child.`)}var w=[`Moz`,`Webkit`,`O`,`ms`];function T(e=`transform`){if(typeof window>`u`)return``;let t=window.document?.documentElement?.style;if(!t||e in t)return``;for(let n=0;n<w.length;n++)if(ee(e,w[n])in t)return w[n];return``}function ee(e,t){return t?`${t}${te(e)}`:e}function te(e){let t=``,n=!0;for(let r=0;r<e.length;r++)n?(t+=e[r].toUpperCase(),n=!1):e[r]===`-`?n=!0:t+=e[r];return t}var E=T(),ne=``;function re(e,t){ne||=y([`matches`,`webkitMatchesSelector`,`mozMatchesSelector`,`msMatchesSelector`,`oMatchesSelector`],function(t){return b(e[t])})??``;let n=e[ne];return b(n)?!!n.call(e,t):!1}function ie(e,t,n){let r=e;do{if(re(r,t))return!0;if(r===n)return!1;r=r.parentNode}while(r);return!1}function ae(e,t,n,r){if(!e)return;let i={capture:!0,...r},a=n;e.addEventListener?e.addEventListener(t,a,i):e.attachEvent?e.attachEvent(`on`+t,a):e[`on`+t]=a}function D(e,t,n,r){if(!e)return;let i={capture:!0,...r},a=n;e.removeEventListener?e.removeEventListener(t,a,i):e.detachEvent?e.detachEvent(`on`+t,a):e[`on`+t]=null}function oe(e){let t=e.clientHeight,n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=S(n.borderTopWidth),t+=S(n.borderBottomWidth),t}function se(e){let t=e.clientWidth,n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=S(n.borderLeftWidth),t+=S(n.borderRightWidth),t}function O(e){let t=e.clientHeight,n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=S(n.paddingTop),t-=S(n.paddingBottom),t}function k(e){let t=e.clientWidth,n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=S(n.paddingLeft),t-=S(n.paddingRight),t}function A(e,t,n){let r=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect();return{x:(e.clientX+t.scrollLeft-r.left)/n,y:(e.clientY+t.scrollTop-r.top)/n}}function ce(e,t){let n=j(e,t,`px`);return{[ee(`transform`,E)]:n}}function le(e,t){return j(e,t,``)}function j({x:e,y:t},n,r){let i=`translate(${e}${r},${t}${r})`;return n&&(i=`translate(${`${typeof n.x==`string`?n.x:n.x+r}`}, ${`${typeof n.y==`string`?n.y:n.y+r}`})`+i),i}function M(e,t){return e.targetTouches&&y(e.targetTouches,e=>t===e.identifier)||e.changedTouches&&y(e.changedTouches,e=>t===e.identifier)}function N(e){if(e.targetTouches&&e.targetTouches[0])return e.targetTouches[0].identifier;if(e.changedTouches&&e.changedTouches[0])return e.changedTouches[0].identifier}function ue(){return typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}function de(e,t){if(!e)return;let n=e.getElementById(`react-draggable-style-el`);if(!n){n=e.createElement(`style`),n.type=`text/css`,n.id=`react-draggable-style-el`;let r=t??ue();r&&n.setAttribute(`nonce`,r),n.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,n.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,e.getElementsByTagName(`head`)[0].appendChild(n)}e.body&&pe(e.body,`react-draggable-transparent-selection`)}function P(e){window.requestAnimationFrame?window.requestAnimationFrame(()=>{fe(e)}):fe(e)}function fe(e){if(e)try{e.body&&me(e.body,`react-draggable-transparent-selection`);let t=e.selection;if(t)t.empty();else{let t=(e.defaultView||window).getSelection();t&&t.type!==`Caret`&&t.removeAllRanges()}}catch{}}function pe(e,t){e.classList?e.classList.add(t):e.className.match(RegExp(`(?:^|\\s)${t}(?!\\S)`))||(e.className+=` ${t}`)}function me(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(RegExp(`(?:^|\\s)${t}(?!\\S)`,`g`),``)}function he(e,t,n){if(!e.props.bounds)return[t,n];let{bounds:r}=e.props;r=typeof r==`string`?r:xe(r);let i=Se(e);if(typeof r==`string`){let{ownerDocument:e}=i,t=e.defaultView;if(!t)throw Error(`Cannot resolve the owner window of the draggable node.`);let n;if(n=r===`parent`?i.parentNode:i.getRootNode().querySelector(r),!(n instanceof t.HTMLElement))throw Error(`Bounds selector "`+r+`" could not find an element.`);let a=n,o=t.getComputedStyle(i),s=t.getComputedStyle(a);r={left:-i.offsetLeft+S(s.paddingLeft)+S(o.marginLeft),top:-i.offsetTop+S(s.paddingTop)+S(o.marginTop),right:k(a)-se(i)-i.offsetLeft+S(s.paddingRight)-S(o.marginRight),bottom:O(a)-oe(i)-i.offsetTop+S(s.paddingBottom)-S(o.marginBottom)}}return x(r.right)&&(t=Math.min(t,r.right)),x(r.bottom)&&(n=Math.min(n,r.bottom)),x(r.left)&&(t=Math.max(t,r.left)),x(r.top)&&(n=Math.max(n,r.top)),[t,n]}function ge(e,t,n){return[Math.round(t/e[0])*e[0],Math.round(n/e[1])*e[1]]}function _e(e){return e.props.axis===`both`||e.props.axis===`x`}function ve(e){return e.props.axis===`both`||e.props.axis===`y`}function F(e,t,n){let r=typeof t==`number`?M(e,t):null;if(typeof t==`number`&&!r)return null;let i=Se(n),a=n.props.offsetParent||i.offsetParent||i.ownerDocument.body;return A(r||e,a,n.props.scale)}function ye(e,t,n){let r=!x(e.lastX),i=Se(e);return r?{node:i,deltaX:0,deltaY:0,lastX:t,lastY:n,x:t,y:n}:{node:i,deltaX:t-e.lastX,deltaY:n-e.lastY,lastX:e.lastX,lastY:e.lastY,x:t,y:n}}function be(e,t){let n=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/n,y:e.state.y+t.deltaY/n,deltaX:t.deltaX/n,deltaY:t.deltaY/n,lastX:e.state.x,lastY:e.state.y}}function xe(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}function Se(e){let t=e.findDOMNode();if(!t)throw Error(`<DraggableCore>: Unmounted during event!`);return t}var Ce=d(u()),I=d(We()),we=d(m()),L=typeof process<`u`&&{}.DRAGGABLE_DEBUG?console.log.bind(console):function(){},Te={touch:{start:`touchstart`,move:`touchmove`,stop:`touchend`},mouse:{start:`mousedown`,move:`mousemove`,stop:`mouseup`}},R=Te.mouse,z=class extends Ce.Component{constructor(){super(...arguments),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,this.touchIdentifier=null,this.mounted=!1,this.handleDragStart=e=>{if(this.props.onMouseDown(e),!this.props.allowAnyClick&&(typeof e.button==`number`&&e.button!==0||e.ctrlKey))return!1;let t=this.findDOMNode();if(!t||!t.ownerDocument||!t.ownerDocument.body)throw Error(`<DraggableCore> not mounted on DragStart!`);let{ownerDocument:n}=t;if(this.props.disabled||!(e.target instanceof n.defaultView.Node)||this.props.handle&&!ie(e.target,this.props.handle,t)||this.props.cancel&&ie(e.target,this.props.cancel,t))return;e.type===`touchstart`&&!this.props.allowMobileScroll&&e.preventDefault();let r=N(e);this.touchIdentifier=r;let i=F(e,r,this);if(i==null)return;let{x:a,y:o}=i,s=ye(this,a,o);L(`DraggableCore: handleDragStart: %j`,s),L(`calling`,this.props.onStart),this.props.onStart(e,s)!==!1&&this.mounted!==!1&&(this.props.enableUserSelectHack&&de(n,this.props.nonce),this.dragging=!0,this.lastX=a,this.lastY=o,ae(n,R.move,this.handleDrag),ae(n,R.stop,this.handleDragStop))},this.handleDrag=e=>{let t=F(e,this.touchIdentifier,this);if(t==null)return;let{x:n,y:r}=t;if(Array.isArray(this.props.grid)){let e=n-this.lastX,t=r-this.lastY;if([e,t]=ge(this.props.grid,e,t),!e&&!t)return;n=this.lastX+e,r=this.lastY+t}let i=ye(this,n,r);if(L(`DraggableCore: handleDrag: %j`,i),this.props.onDrag(e,i)===!1||this.mounted===!1){try{this.handleDragStop(new MouseEvent(`mouseup`))}catch{let e=document.createEvent(`MouseEvents`);e.initMouseEvent(`mouseup`,!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(e)}return}this.lastX=n,this.lastY=r},this.handleDragStop=e=>{if(!this.dragging)return;let t=F(e,this.touchIdentifier,this);if(t==null)return;let{x:n,y:r}=t;if(Array.isArray(this.props.grid)){let e=n-this.lastX||0,t=r-this.lastY||0;[e,t]=ge(this.props.grid,e,t),n=this.lastX+e,r=this.lastY+t}let i=ye(this,n,r);if(this.props.onStop(e,i)===!1||this.mounted===!1)return!1;let a=this.findDOMNode();a&&this.props.enableUserSelectHack&&P(a.ownerDocument),L(`DraggableCore: handleDragStop: %j`,i),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,a&&(L(`DraggableCore: Removing handlers`),D(a.ownerDocument,R.move,this.handleDrag),D(a.ownerDocument,R.stop,this.handleDragStop))},this.onMouseDown=e=>(R=Te.mouse,this.handleDragStart(e)),this.onMouseUp=e=>(R=Te.mouse,this.handleDragStop(e)),this.onTouchStart=e=>(R=Te.touch,this.handleDragStart(e)),this.onTouchEnd=e=>(R=Te.touch,this.handleDragStop(e))}componentDidMount(){this.mounted=!0;let e=this.findDOMNode();e&&ae(e,Te.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;let e=this.findDOMNode();if(e){let{ownerDocument:t}=e;D(t,Te.mouse.move,this.handleDrag),D(t,Te.touch.move,this.handleDrag),D(t,Te.mouse.stop,this.handleDragStop),D(t,Te.touch.stop,this.handleDragStop),D(e,Te.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&P(t)}}findDOMNode(){if(this.props?.nodeRef)return this.props.nodeRef.current;let e=we.default;return typeof e.findDOMNode==`function`?e.findDOMNode(this):(L(`react-draggable: ReactDOM.findDOMNode is not available in React 19+. You must provide a nodeRef prop. See: https://github.com/react-grid-layout/react-draggable#noderef`),null)}render(){return Ce.cloneElement(Ce.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}};z.displayName=`DraggableCore`,z.propTypes={allowAnyClick:I.default.bool,allowMobileScroll:I.default.bool,children:I.default.node.isRequired,disabled:I.default.bool,enableUserSelectHack:I.default.bool,offsetParent:function(e,t){if(e[t]&&e[t].nodeType!==1)throw Error(`Draggable's offsetParent must be a DOM Node.`)},grid:I.default.arrayOf(I.default.number),handle:I.default.string,cancel:I.default.string,nodeRef:I.default.object,nonce:I.default.string,onStart:I.default.func,onDrag:I.default.func,onStop:I.default.func,onMouseDown:I.default.func,scale:I.default.number,className:C,style:C,transform:C},z.defaultProps={allowAnyClick:!1,allowMobileScroll:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1};var Ee=class extends h.Component{constructor(e){super(e),this.onDragStart=(e,t)=>{if(L(`Draggable: onDragStart: %j`,t),this.props.onStart(e,be(this,t))===!1)return!1;this.setState({dragging:!0,dragged:!0})},this.onDrag=(e,t)=>{if(!this.state.dragging)return!1;L(`Draggable: onDrag: %j`,t);let n=be(this,t),r={x:n.x,y:n.y,slackX:0,slackY:0};if(this.props.bounds){let{x:e,y:t}=r;r.x+=this.state.slackX,r.y+=this.state.slackY;let[i,a]=he(this,r.x,r.y);r.x=i,r.y=a,r.slackX=this.state.slackX+(e-r.x),r.slackY=this.state.slackY+(t-r.y),n.x=r.x,n.y=r.y,n.deltaX=r.x-this.state.x,n.deltaY=r.y-this.state.y}if(this.props.onDrag(e,n)===!1)return!1;this.setState(r)},this.onDragStop=(e,t)=>{if(!this.state.dragging||this.props.onStop(e,be(this,t))===!1)return!1;L(`Draggable: onDragStop: %j`,t);let n={dragging:!1,slackX:0,slackY:0};if(this.props.position){let{x:e,y:t}=this.props.position;n.x=e,n.y=t}this.setState(n)},this.state={dragging:!1,dragged:!1,x:e.position?e.position.x:e.defaultPosition.x,y:e.position?e.position.y:e.defaultPosition.y,prevPropsPosition:{...e.position},slackX:0,slackY:0,isElementSVG:!1},e.position&&!(e.onDrag||e.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}static getDerivedStateFromProps({position:e},{prevPropsPosition:t}){return e&&(!t||e.x!==t.x||e.y!==t.y)?(L(`Draggable: getDerivedStateFromProps %j`,{position:e,prevPropsPosition:t}),{x:e.x,y:e.y,prevPropsPosition:{...e}}):null}componentDidMount(){window.SVGElement!==void 0&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.state.dragging&&this.setState({dragging:!1})}findDOMNode(){if(this.props?.nodeRef)return this.props.nodeRef.current;let e=_.default;return typeof e.findDOMNode==`function`?e.findDOMNode(this):null}render(){let{axis:e,bounds:t,children:n,defaultPosition:r,defaultClassName:i,defaultClassNameDragging:a,defaultClassNameDragged:o,position:s,positionOffset:c,scale:l,...u}=this.props,d={},f=null,p=!s||this.state.dragging,m=s||r,g={x:_e(this)&&p?this.state.x:m.x,y:ve(this)&&p?this.state.y:m.y};this.state.isElementSVG?f=le(g,c):d=ce(g,c);let _=h.Children.only(n),y=(0,v.clsx)(_.props.className||``,i,{[a]:this.state.dragging,[o]:this.state.dragged});return h.createElement(z,{...u,onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop},h.cloneElement(_,{className:y,style:{..._.props.style,...d},transform:f}))}};Ee.displayName=`Draggable`,Ee.propTypes={...z.propTypes,axis:g.default.oneOf([`both`,`x`,`y`,`none`]),bounds:g.default.oneOfType([g.default.shape({left:g.default.number,right:g.default.number,top:g.default.number,bottom:g.default.number}),g.default.string,g.default.oneOf([!1])]),defaultClassName:g.default.string,defaultClassNameDragging:g.default.string,defaultClassNameDragged:g.default.string,defaultPosition:g.default.shape({x:g.default.number,y:g.default.number}),positionOffset:g.default.shape({x:g.default.oneOfType([g.default.number,g.default.string]),y:g.default.oneOfType([g.default.number,g.default.string])}),position:g.default.shape({x:g.default.number,y:g.default.number}),className:C,style:C,transform:C},Ee.defaultProps={...z.defaultProps,axis:`both`,bounds:!1,defaultClassName:`react-draggable`,defaultClassNameDragging:`react-draggable-dragging`,defaultClassNameDragged:`react-draggable-dragged`,defaultPosition:{x:0,y:0},scale:1},0&&(t.exports={DraggableCore:z})})),Ht=o(((e,t)=>{var n=Vt(),r=n.DraggableCore,i=n.default||n;t.exports=i,t.exports.default=i,t.exports.DraggableCore=r})),Ut=o((e=>{e.__esModule=!0,e.cloneElement=c;var t=n(u());function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?r(Object(n),!0).forEach(function(t){a(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function a(e,t,n){return(t=o(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){var t=s(e,`string`);return typeof t==`symbol`?t:t+``}function s(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function c(e,n){return n.style&&e.props.style&&(n.style=i(i({},e.props.style),n.style)),n.className&&e.props.className&&(n.className=e.props.className+` `+n.className),t.default.cloneElement(e,n)}})),Wt=o((e=>{e.__esModule=!0,e.resizableProps=void 0;var t=n(We());function n(e){return e&&e.__esModule?e:{default:e}}e.resizableProps={axis:t.default.oneOf([`both`,`x`,`y`,`none`]),className:t.default.string,children:t.default.element.isRequired,draggableOpts:t.default.shape({allowAnyClick:t.default.bool,cancel:t.default.string,children:t.default.node,disabled:t.default.bool,enableUserSelectHack:t.default.bool,offsetParent:typeof Element<`u`?t.default.instanceOf(Element):t.default.any,grid:t.default.arrayOf(t.default.number),handle:t.default.string,nodeRef:t.default.object,onStart:t.default.func,onDrag:t.default.func,onStop:t.default.func,onMouseDown:t.default.func,scale:t.default.number}),height:function(){var e=[...arguments];let n=e[0];return n.axis===`both`||n.axis===`y`?t.default.number.isRequired(...e):t.default.number(...e)},handle:t.default.oneOfType([t.default.node,t.default.func]),handleSize:t.default.arrayOf(t.default.number),lockAspectRatio:t.default.bool,maxConstraints:t.default.arrayOf(t.default.number),minConstraints:t.default.arrayOf(t.default.number),onResizeStop:t.default.func,onResizeStart:t.default.func,onResize:t.default.func,resizeHandles:t.default.arrayOf(t.default.oneOf([`s`,`w`,`e`,`n`,`sw`,`nw`,`se`,`ne`])),transformScale:t.default.number,width:function(){var e=[...arguments];let n=e[0];return n.axis===`both`||n.axis===`x`?t.default.number.isRequired(...e):t.default.number(...e)}}})),Gt=o((e=>{e.__esModule=!0,e.default=void 0;var t=o(u()),n=Ht(),r=Ut(),i=Wt(),a=[`children`,`className`,`draggableOpts`,`width`,`height`,`handle`,`handleSize`,`lockAspectRatio`,`axis`,`minConstraints`,`maxConstraints`,`onResize`,`onResizeStop`,`onResizeStart`,`resizeHandles`,`transformScale`];function o(e,t){if(typeof WeakMap==`function`)var n=new WeakMap,r=new WeakMap;return(o=function(e,t){if(!t&&e&&e.__esModule)return e;var i,a,o={__proto__:null,default:e};if(e===null||typeof e!=`object`&&typeof e!=`function`)return o;if(i=t?r:n){if(i.has(e))return i.get(e);i.set(e,o)}for(let t in e)t!=="default"&&{}.hasOwnProperty.call(e,t)&&((a=(i=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,t))&&(a.get||a.set)?i(o,t,a):o[t]=e[t]);return o})(e,t)}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(null,arguments)}function c(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?l(Object(n),!0).forEach(function(t){f(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function f(e,t,n){return(t=p(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){var t=m(e,`string`);return typeof t==`symbol`?t:t+``}function m(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var h=class extends t.Component{constructor(){super(...arguments),this.handleRefs={},this.lastHandleRect=null,this.slack=null,this.lastSize=null}componentWillUnmount(){this.resetData()}resetData(){this.lastHandleRect=this.slack=this.lastSize=null}runConstraints(e,t){let n=this.props,r=n.minConstraints,i=n.maxConstraints,a=n.lockAspectRatio;if(!r&&!i&&!a)return[e,t];if(a){let n=this.props.width/this.props.height;t=(e*n+t)/(n*n+1),e=t*n}let o=e,s=t,c=this.slack||[0,0],l=c[0],u=c[1];return e+=l,t+=u,r&&(e=Math.max(r[0],e),t=Math.max(r[1],t)),i&&(e=Math.min(i[0],e),t=Math.min(i[1],t)),this.slack=[l+(o-e),u+(s-t)],[e,t]}resizeHandler(e,t){return(n,r)=>{let i=r.node,a=r.deltaX,o=r.deltaY;e===`onResizeStart`&&this.resetData();let s=(this.props.axis===`both`||this.props.axis===`x`)&&t!==`n`&&t!==`s`,c=(this.props.axis===`both`||this.props.axis===`y`)&&t!==`e`&&t!==`w`;if(!s&&!c)return;let l=t[0],u=t[t.length-1],d=i.getBoundingClientRect();if(this.lastHandleRect!=null){if(u===`w`){let e=d.left-this.lastHandleRect.left;a+=e}if(l===`n`){let e=d.top-this.lastHandleRect.top;o+=e}}this.lastHandleRect=d,u===`w`&&(a=-a),l===`n`&&(o=-o);let f=this.lastSize?.width??this.props.width,p=this.lastSize?.height??this.props.height,m=f+(s?a/this.props.transformScale:0),h=p+(c?o/this.props.transformScale:0);var g=this.runConstraints(m,h);if(m=g[0],h=g[1],e===`onResizeStop`&&this.lastSize){var _=this.lastSize;m=_.width,h=_.height}let v=m!==f||h!==p;e!==`onResizeStop`&&(this.lastSize={width:m,height:h});let y=typeof this.props[e]==`function`?this.props[e]:null;y&&!(e===`onResize`&&!v)&&(n.persist==null||n.persist(),y(n,{node:i,size:{width:m,height:h},handle:t})),e===`onResizeStop`&&this.resetData()}}renderResizeHandle(e,n){let r=this.props.handle;if(!r)return t.createElement(`span`,{className:`react-resizable-handle react-resizable-handle-`+e,ref:n});if(typeof r==`function`)return r(e,n);let i=typeof r.type==`string`,a=d({ref:n},i?{}:{handleAxis:e});return t.cloneElement(r,a)}render(){let e=this.props,i=e.children,o=e.className,l=e.draggableOpts;e.width,e.height,e.handle,e.handleSize,e.lockAspectRatio,e.axis,e.minConstraints,e.maxConstraints,e.onResize,e.onResizeStop,e.onResizeStart;let u=e.resizeHandles;e.transformScale;let f=c(e,a);return(0,r.cloneElement)(i,d(d({},f),{},{className:(o?o+` `:``)+`react-resizable`,children:[...t.Children.toArray(i.props.children),...u.map(e=>{let r=this.handleRefs[e]??(this.handleRefs[e]=t.createRef());return t.createElement(n.DraggableCore,s({},l,{nodeRef:r,key:`resizableHandle-`+e,onStop:this.resizeHandler(`onResizeStop`,e),onStart:this.resizeHandler(`onResizeStart`,e),onDrag:this.resizeHandler(`onResize`,e)}),this.renderResizeHandle(e,r))})]}))}};e.default=h,h.propTypes=i.resizableProps,h.defaultProps={axis:`both`,handleSize:[20,20],lockAspectRatio:!1,minConstraints:[20,20],maxConstraints:[1/0,1/0],resizeHandles:[`se`],transformScale:1}})),Kt=o((e=>{e.__esModule=!0,e.default=void 0;var t=s(u()),n=o(We()),r=o(Gt()),i=Wt(),a=[`handle`,`handleSize`,`onResize`,`onResizeStart`,`onResizeStop`,`draggableOpts`,`minConstraints`,`maxConstraints`,`lockAspectRatio`,`axis`,`width`,`height`,`resizeHandles`,`style`,`transformScale`];function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(typeof WeakMap==`function`)var n=new WeakMap,r=new WeakMap;return(s=function(e,t){if(!t&&e&&e.__esModule)return e;var i,a,o={__proto__:null,default:e};if(e===null||typeof e!=`object`&&typeof e!=`function`)return o;if(i=t?r:n){if(i.has(e))return i.get(e);i.set(e,o)}for(let t in e)t!=="default"&&{}.hasOwnProperty.call(e,t)&&((a=(i=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,t))&&(a.get||a.set)?i(o,t,a):o[t]=e[t]);return o})(e,t)}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(null,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?l(Object(n),!0).forEach(function(t){f(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function f(e,t,n){return(t=p(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){var t=m(e,`string`);return typeof t==`symbol`?t:t+``}function m(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function h(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var g=class extends t.Component{constructor(){super(...arguments),this.state={width:this.props.width,height:this.props.height,propsWidth:this.props.width,propsHeight:this.props.height},this.onResize=(e,t)=>{let n=t.size;this.props.onResize?(e.persist==null||e.persist(),this.setState(n,()=>this.props.onResize&&this.props.onResize(e,t))):this.setState(n)}}static getDerivedStateFromProps(e,t){return t.propsWidth!==e.width||t.propsHeight!==e.height?{width:e.width,height:e.height,propsWidth:e.width,propsHeight:e.height}:null}render(){let e=this.props,n=e.handle,i=e.handleSize;e.onResize;let o=e.onResizeStart,s=e.onResizeStop,l=e.draggableOpts,u=e.minConstraints,f=e.maxConstraints,p=e.lockAspectRatio,m=e.axis;e.width,e.height;let g=e.resizeHandles,_=e.style,v=e.transformScale,y=h(e,a);return t.createElement(r.default,{axis:m,draggableOpts:l,handle:n,handleSize:i,height:this.state.height,lockAspectRatio:p,maxConstraints:f,minConstraints:u,onResizeStart:o,onResize:this.onResize,onResizeStop:s,resizeHandles:g,transformScale:v,width:this.state.width},t.createElement(`div`,c({},y,{style:d(d({},_),{},{width:this.state.width+`px`,height:this.state.height+`px`})})))}};e.default=g,g.propTypes=d(d({},i.resizableProps),{},{children:n.default.element})})),qt=o(((e,t)=>{t.exports=function(){throw Error(`Don't instantiate Resizable directly! Use require('react-resizable').Resizable`)},t.exports.Resizable=Gt().default,t.exports.ResizableBox=Kt().default}))(),Jt=48,Yt=`#version 300 es
layout(location=0) in vec2 aPos;
out vec2 vUv;
void main(){ vUv = aPos*0.5+0.5; gl_Position = vec4(aPos,0.,1.); }`,Xt=`
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx)*0.1031); p3 += dot(p3,p3.yzx+33.33); return fract((p3.x+p3.y)*p3.z); }
float vnoise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
  float a=hash12(i), b=hash12(i+vec2(1,0)), c=hash12(i+vec2(0,1)), d=hash12(i+vec2(1,1));
  return mix(mix(a,b,f.x), mix(c,d,f.x), f.y); }
float fbm(vec2 p){ float v=0., a=0.5; for(int i=0;i<5;i++){ v+=a*vnoise(p); p=p*2.03+17.1; a*=0.5; } return v; }`,Zt=`#version 300 es
precision highp float;
uniform float uGrainScale, uGrainAmp, uFineAmp, uFiberAmp, uSeed, uScale;
in vec2 vUv; out vec4 outP;
${Xt}
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
}`,Qt=`#version 300 es
precision highp float;
uniform sampler2D uDepA, uDepB;
in vec2 vUv; out vec4 outM;
void main(){
  float sum = dot(texture(uDepA, vUv), vec4(1.0)) + dot(texture(uDepB, vUv), vec4(1.0));
  outM = vec4(clamp((sum - 0.02)*2.5, 0.0, 1.0), 0.0, 0.0, 1.0);
}`,$t=`#version 300 es
precision highp float;
const int MAXS = ${Jt};
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
}`,en=`#version 300 es
precision highp float;
const int MAXS = ${Jt};
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
${Xt}
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
}`,tn=`#version 300 es
precision highp float;
uniform sampler2D uWater, uSusA, uSusB, uDepA, uDepB, uPaper, uGround;
uniform vec2 uSize;
uniform vec3 uK[8], uS[8];
uniform float uGranV[8];
uniform vec3 uPaperTint;
uniform float uGranVis, uWetDark, uBacklight, uXray;
uniform vec2 uLightPos;
in vec2 vUv; out vec4 fragColor;
${Xt}
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
}`,nn=`#version 300 es
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
}`;function rn(e,t,n){let r=e.createShader(t);if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS))throw Error(`shader: `+e.getShaderInfoLog(r));return r}function an(e,t){let n=e.createProgram();if(e.attachShader(n,rn(e,e.VERTEX_SHADER,Yt)),e.attachShader(n,rn(e,e.FRAGMENT_SHADER,t)),e.linkProgram(n),!e.getProgramParameter(n,e.LINK_STATUS))throw Error(`link: `+e.getProgramInfoLog(n));let r={},i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let t=0;t<i;t++){let i=e.getActiveUniform(n,t),a=i.name.replace(/\[0\]$/,``);r[a]=e.getUniformLocation(n,i.name)}return{p:n,uni:r}}function on(e,t,n){let r=e.createTexture();return e.bindTexture(e.TEXTURE_2D,r),e.texStorage2D(e.TEXTURE_2D,1,e.RGBA16F,t,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),r}function sn(e,t){let n=e.createFramebuffer();if(e.bindFramebuffer(e.FRAMEBUFFER,n),t.forEach((t,n)=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.TEXTURE_2D,t,0)),e.drawBuffers(t.map((t,n)=>e.COLOR_ATTACHMENT0+n)),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE)throw Error(`fbo incomplete`);return n}var cn={hot:{grainScale:4.5,grainAmp:.2,fineAmp:.1,fiberAmp:.05,label:`Hot press`},cold:{grainScale:9,grainAmp:.55,fineAmp:.18,fiberAmp:.1,label:`Cold press`},rough:{grainScale:15,grainAmp:.85,fineAmp:.24,fiberAmp:.12,label:`Rough`}};function ln(e,t={}){let n=e.getContext(`webgl2`,{alpha:!1,antialias:!1,premultipliedAlpha:!1});if(!n)throw Error(`WebGL2 unavailable`);if(!n.getExtension(`EXT_color_buffer_float`))throw Error(`float render targets unavailable`);let r=t.width||848,i=t.height||1060,a={substeps:2,grav:.45,drag:.96,dragShallow:.82,maxSpeed:2.4,relief:.45,edgeFlow:.22,edgeEvap:2.5,splatOut:2.2,absorb:.016,fill:1.3,cap:.1,seepT:.68,seep:.0025,evap:18e-5,evapS:22e-5,depRate:.02,liftBase:.028,dryDep:9,carry:.35,pigDiff:.45,granStr:1,dryEps:18e-5,swirl:1.6,granVis:1.1,wetDark:.12,paperTint:[.94,.92,.87]},o=n.createVertexArray();n.bindVertexArray(o);let s=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,s),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),n.STATIC_DRAW),n.enableVertexAttribArray(0),n.vertexAttribPointer(0,2,n.FLOAT,!1,0,0),n.disable(n.DEPTH_TEST),n.disable(n.BLEND);let c=an(n,Zt),l=an(n,$t),u=an(n,en),d=an(n,tn),f=an(n,Qt),p=an(n,nn),m=on(n,r,i),h=sn(n,[m]),g=[0,1].map(()=>on(n,r,i)),_=g.map(e=>sn(n,[e])),v=[0,1].map(()=>({susA:on(n,r,i),susB:on(n,r,i),depA:on(n,r,i),depB:on(n,r,i)})),y=v.map(e=>sn(n,[e.susA,e.susB,e.depA,e.depB])),b=on(n,r,i),x=sn(n,[b]),S=[0,1].map(()=>on(n,r,i)),C=S.map(e=>sn(n,[e])),w=0,T=0,ee=0;function te(){n.useProgram(f.p),n.bindFramebuffer(n.FRAMEBUFFER,x),n.viewport(0,0,r,i),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,v[T].depA),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,v[T].depB),n.uniform1i(f.uni.uDepA,0),n.uniform1i(f.uni.uDepB,1),n.drawArrays(n.TRIANGLE_STRIP,0,4)}let E=new Float32Array(192),ne=new Float32Array(96),re=new Float32Array(96);function ie(){n.clearColor(0,0,0,0);for(let e of[..._,...y])n.bindFramebuffer(n.FRAMEBUFFER,e),n.clear(n.COLOR_BUFFER_BIT);n.clearColor(1,1,1,1);for(let e of C)n.bindFramebuffer(n.FRAMEBUFFER,e),n.clear(n.COLOR_BUFFER_BIT)}function ae(){let e=1-ee;n.useProgram(p.p),n.bindFramebuffer(n.FRAMEBUFFER,C[e]),n.viewport(0,0,r,i),k(0,v[T].susA),k(1,v[T].susB),k(2,v[T].depA),k(3,v[T].depB),k(4,S[ee]),n.uniform1i(p.uni.uSusA,0),n.uniform1i(p.uni.uSusB,1),n.uniform1i(p.uni.uDepA,2),n.uniform1i(p.uni.uDepB,3),n.uniform1i(p.uni.uGround,4),n.uniform3fv(p.uni.uK,A),n.uniform3fv(p.uni.uS,ce),n.drawArrays(n.TRIANGLE_STRIP,0,4),ee=e,n.clearColor(0,0,0,0);for(let e of y)n.bindFramebuffer(n.FRAMEBUFFER,e),n.clear(n.COLOR_BUFFER_BIT)}let D=`cold`,oe=7.31;function se(e,t,r,i,a,o){let s=cn[a]||cn.cold;n.useProgram(c.p),n.uniform1f(c.uni.uGrainScale,s.grainScale),n.uniform1f(c.uni.uGrainAmp,s.grainAmp),n.uniform1f(c.uni.uFineAmp,s.fineAmp),n.uniform1f(c.uni.uFiberAmp,s.fiberAmp),n.uniform1f(c.uni.uSeed,o),n.uniform1f(c.uni.uScale,i),n.bindFramebuffer(n.FRAMEBUFFER,e),n.viewport(0,0,t,r),n.drawArrays(n.TRIANGLE_STRIP,0,4)}function O(e,t=7.31){D=e,oe=t,se(h,r,i,1,e,t),I=null}function k(e,t){n.activeTexture(n.TEXTURE0+e),n.bindTexture(n.TEXTURE_2D,t)}let A=new Float32Array(24),ce=new Float32Array(24),le=new Float32Array(8),j=new Float32Array(8),M=new Float32Array(8);function N(e){A.fill(0),ce.fill(0),le.fill(0),j.fill(1),M.fill(.5),e.forEach((e,t)=>{if(!(!e||t>7)){for(let n=0;n<3;n++)A[t*3+n]=e.K?e.K[n]:.5,ce[t*3+n]=e.S?e.S[n]:.5;le[t]=e.gran??.5,j[t]=e.stain??.5,M[t]=e.dens??.5}})}function ue(e,t){let o=1-w;n.useProgram(l.p),n.bindFramebuffer(n.FRAMEBUFFER,_[o]),n.viewport(0,0,r,i),k(0,g[w]),k(1,m),k(2,b),n.uniform1i(l.uni.uWater,0),n.uniform1i(l.uni.uPaper,1),n.uniform1i(l.uni.uMask,2),n.uniform2f(l.uni.uSize,r,i),n.uniform2f(l.uni.uTilt,e.tilt?e.tilt[0]:0,e.tilt?e.tilt[1]:0),n.uniform1i(l.uni.uSplatCount,e.count||0),n.uniform1i(l.uni.uMode,e.mode||0),n.uniform1f(l.uni.uApplySplats,+!!t),n.uniform4fv(l.uni.uSplat,E),n.uniform2fv(l.uni.uSplatVel,ne),n.uniform1f(l.uni.uGrav,a.grav),n.uniform1f(l.uni.uDrag,a.drag),n.uniform1f(l.uni.uDragShallow,a.dragShallow),n.uniform1f(l.uni.uMaxSpeed,a.maxSpeed),n.uniform1f(l.uni.uRelief,a.relief),n.uniform1f(l.uni.uEdgeFlow,a.edgeFlow),n.uniform1f(l.uni.uEdgeEvap,a.edgeEvap),n.uniform1f(l.uni.uAbsorb,a.absorb),n.uniform1f(l.uni.uFill,a.fill),n.uniform1f(l.uni.uCap,a.cap),n.uniform1f(l.uni.uSeepT,a.seepT),n.uniform1f(l.uni.uSeep,a.seep),n.uniform1f(l.uni.uSplatOut,a.splatOut),n.uniform1f(l.uni.uReplenish,e.alive?e.alive.replenish:0),n.uniform1f(l.uni.uSustainH,e.alive?e.alive.sustainH:.09),n.uniform1f(l.uni.uEvap,a.evap*(e.evapMul||1)),n.uniform1f(l.uni.uEvapS,a.evapS*(e.evapMul?Math.sqrt(e.evapMul):1)),n.uniform1f(l.uni.uEdgeDrive,e.evapMul||1),n.uniform1f(l.uni.uFibers,+!!ge);let s=e.grains||[],c=Math.min(s.length,24);for(let e=0;e<c;e++){let t=s[e];re[e*4]=t.x,re[e*4+1]=t.y,re[e*4+2]=t.r,re[e*4+3]=t.str}n.uniform1i(l.uni.uGrainCount,c),n.uniform4fv(l.uni.uGrain,re),n.drawArrays(n.TRIANGLE_STRIP,0,4),w=o;let d=1-T;n.useProgram(u.p),n.bindFramebuffer(n.FRAMEBUFFER,y[d]),k(0,g[w]),k(1,v[T].susA),k(2,v[T].susB),k(3,v[T].depA),k(4,v[T].depB),k(5,m),n.uniform1i(u.uni.uWater,0),n.uniform1i(u.uni.uSusA,1),n.uniform1i(u.uni.uSusB,2),n.uniform1i(u.uni.uDepA,3),n.uniform1i(u.uni.uDepB,4),n.uniform1i(u.uni.uPaper,5),n.uniform2f(u.uni.uSize,r,i),n.uniform1i(u.uni.uSplatCount,e.count||0),n.uniform1i(u.uni.uMode,e.mode||0),n.uniform1f(u.uni.uApplySplats,+!!t),n.uniform1f(u.uni.uStrokeWater,e.strokeWater??.5),n.uniform4fv(u.uni.uSplat,E),n.uniform4fv(u.uni.uPig0,e.pig0||[1,0,0,0]),n.uniform4fv(u.uni.uPig1,e.pig1||[0,0,0,0]),n.uniform4f(u.uni.uStainA,j[0],j[1],j[2],j[3]),n.uniform4f(u.uni.uStainB,j[4],j[5],j[6],j[7]),n.uniform4f(u.uni.uGranA,le[0],le[1],le[2],le[3]),n.uniform4f(u.uni.uGranB,le[4],le[5],le[6],le[7]),n.uniform4f(u.uni.uDensA,M[0],M[1],M[2],M[3]),n.uniform4f(u.uni.uDensB,M[4],M[5],M[6],M[7]),n.uniform1f(u.uni.uDepRate,a.depRate*(e.alive?e.alive.depScale:1)),n.uniform1f(u.uni.uLiftBase,a.liftBase),n.uniform1f(u.uni.uDryDep,a.dryDep),n.uniform1f(u.uni.uCarry,a.carry),n.uniform1f(u.uni.uPigDiff,a.pigDiff*(e.alive?e.alive.pigDiffScale:1)),n.uniform1f(u.uni.uRevive,e.alive?e.alive.revive:0),n.uniform1f(u.uni.uGranStr,a.granStr),n.uniform1f(u.uni.uDryEps,a.dryEps),n.uniform1f(u.uni.uTime,e.time||0),n.uniform1f(u.uni.uSwirl,a.swirl),n.uniform1f(u.uni.uFibers,+!!ge),n.uniform1i(u.uni.uGrainCount,c),n.uniform4fv(u.uni.uGrain,re),n.drawArrays(n.TRIANGLE_STRIP,0,4),T=d}function de(){P(null,e.width,e.height)}function P(e,t,o,s=null,c=null){n.useProgram(d.p),n.bindFramebuffer(n.FRAMEBUFFER,e),n.viewport(0,0,t,o),k(0,g[w]),k(1,v[T].susA),k(2,v[T].susB),k(3,v[T].depA),k(4,v[T].depB),k(5,s||m),k(6,S[ee]),n.uniform1i(d.uni.uWater,0),n.uniform1i(d.uni.uSusA,1),n.uniform1i(d.uni.uSusB,2),n.uniform1i(d.uni.uDepA,3),n.uniform1i(d.uni.uDepB,4),n.uniform1i(d.uni.uPaper,5),n.uniform1i(d.uni.uGround,6),c?n.uniform2f(d.uni.uSize,c[0],c[1]):n.uniform2f(d.uni.uSize,r,i),n.uniform3fv(d.uni.uK,A),n.uniform3fv(d.uni.uS,ce),n.uniform1fv(d.uni.uGranV,le),n.uniform3fv(d.uni.uPaperTint,a.paperTint),n.uniform1f(d.uni.uGranVis,a.granVis),n.uniform1f(d.uni.uWetDark,a.wetDark),n.uniform1f(d.uni.uBacklight,fe),n.uniform1f(d.uni.uXray,me),n.uniform2f(d.uni.uLightPos,_e[0],_e[1]),n.drawArrays(n.TRIANGLE_STRIP,0,4)}let fe=0,pe=!1,me=0,he=!1,ge=!1,_e=[.5,.62];function ve(e){pe=e}function F(e){he=e}function ye(e){ge=e}function be(e,t){_e[0]=e,_e[1]=t}function xe(){fe+=(+!!pe-fe)*.08,fe<.001&&(fe=0),me+=(+!!he-me)*.1,me<.001&&(me=0)}function Se(e){let t=e.splats||[],n=Math.min(t.length,Jt);for(let e=0;e<n;e++){let n=t[e];E[e*4]=n.x,E[e*4+1]=n.y,E[e*4+2]=n.r,E[e*4+3]=n.water,ne[e*2]=n.vx||0,ne[e*2+1]=n.vy||0}e.count=n;for(let t=0;t<a.substeps;t++)ue(e,t===0);xe(),typeof window<`u`&&window.__headless||de()}let Ce=null,I=null;function we(){let e=1272,t=1590;if(!Ce){let r=n.createTexture();n.bindTexture(n.TEXTURE_2D,r),n.texStorage2D(n.TEXTURE_2D,1,n.RGBA8,e,t),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),Ce={tex:r,fbo:sn(n,[r])}}if(!I){let i=on(n,e,t);I={tex:i,fbo:sn(n,[i])},se(I.fbo,e,t,e/r,D,oe)}P(Ce.fbo,e,t,I.tex,[e,t]);let i=new Uint8Array(e*t*4);n.readPixels(0,0,e,t,n.RGBA,n.UNSIGNED_BYTE,i);let a=document.createElement(`canvas`);a.width=e,a.height=t;let o=a.getContext(`2d`),s=o.createImageData(e,t);for(let n=0;n<t;n++)s.data.set(i.subarray((1589-n)*e*4,(t-n)*e*4),n*e*4);return o.putImageData(s,0,0),a}let L=[],Te=[],R=-1,z=!1;function Ee(){return Array.from({length:6},()=>{let e=on(n,r,i);return{tex:e,fbo:sn(n,[e])}})}function De(e,t,a){n.bindFramebuffer(n.FRAMEBUFFER,e),n.readBuffer(n.COLOR_ATTACHMENT0+t),n.bindTexture(n.TEXTURE_2D,a),n.copyTexSubImage2D(n.TEXTURE_2D,0,0,0,0,0,r,i)}function Oe(){R>=L.length-1||Te.push(...L.splice(R+1))}function ke(){Oe();let e=Te.pop()||Ee();De(_[w],0,e[0].tex);for(let t=0;t<4;t++)De(y[T],t,e[t+1].tex);De(C[ee],0,e[5].tex),L.push(e),L.length>7&&Te.push(L.shift()),R=L.length-1,z=!0}function Ae(e){De(e[0].fbo,0,g[w]);let t=[v[T].susA,v[T].susB,v[T].depA,v[T].depB];for(let n=0;n<4;n++)De(e[n+1].fbo,0,t[n]);De(e[5].fbo,0,S[ee]),de()}function je(){z?Oe():ke(),z=!1}function Me(){return z||ke(),R<=0?!1:(--R,Ae(L[R]),z=!0,!0)}function Ne(){return!z||R>=L.length-1?!1:(R+=1,Ae(L[R]),z=!0,!0)}return ie(),O(`cold`),{gl:n,p:a,SIM_W:r,SIM_H:i,frame:Se,render:de,capturePNG:we,setSlots:N,captureMask:te,bakeGround:ae,setBacklight:ve,setLightPos:be,setXray:F,setFibers:ye,pushUndo:je,popUndo:Me,popRedo:Ne,clearPaint:ie,setPaper:e=>{O(e),ie(),de()},papers:cn}}var un=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4,dn=e=>e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055,fn=e=>{let t=e.replace(`#`,``),n=t.length===3?t.split(``).map(e=>e+e).join(``):t;return[0,2,4].map(e=>un(parseInt(n.slice(e,e+2),16)/255))},pn=e=>.5*Math.log((e+1)/(e-1));function mn(e,t){e=Math.min(Math.max(e,.001),.998),t=Math.min(Math.max(t,5e-4),e*.98);let n=.5*(e+(t-e+1)/t),r=Math.sqrt(Math.max(n*n-1,1e-12)),i=Math.max((r*r-(n-e)*(n-1))/(r*(1-e)),1.0000001),a=1/r*pn(i);return[a*(n-1),a]}function hn(e,t,n){if(t<1e-6)return n;let r=1+e/t,i=Math.sqrt(Math.max(r*r-1,1e-9)),a=Math.exp(-2*Math.max(i*t,1e-4)),o=(1+a)/(1-a);return(1-n*(r-i*o))/(r-n+i*o)}var gn=1.35,_n=2.2,vn=3,yn=e=>{let t=Math.max(e,0)**+gn;return _n*t/(t+vn)},bn=.4,xn=e=>.582*e/(1-bn*e);function Sn(e,t=.93,n=1){return`#`+[0,1,2].map(r=>{let i=0,a=0,o=0;for(let{pig:t,amt:s}of e){let e=yn(s*n);i+=e*(t.K?t.K[r]:.5),a+=e*(t.S?t.S[r]:.5),o+=e}let s=hn(i,a,t),c=Math.min(o*1.5,1);return s*(1-c)+xn(s)*c}).map(e=>Math.round(dn(Math.min(Math.max(e,0),1))*255).toString(16).padStart(2,`0`)).join(``)}var Cn=[[`French Ultramarine`,`#3b55c4`,`#0a102a`,.85,.3,.9,`blue`],[`Indanthrone Blue`,`#2f4370`,`#060a16`,.3,.8,.5,`blue`],[`Phthalo Turquoise`,`#12716e`,`#03201f`,.1,.9,.3,`blue`],[`Lavender`,`#a8a6c8`,`#4e4c66`,.75,.1,.8,`blue`],[`Cobalt Blue`,`#4a72d2`,`#0d1836`,.6,.25,.75,`blue`],[`Cerulean Blue`,`#4f9ad2`,`#173349`,.9,.2,.95,`blue`],[`Phthalo Blue`,`#1a5fc8`,`#05162c`,.05,.95,.25,`blue`],[`Prussian Blue`,`#1d4a66`,`#040f1a`,.15,.9,.35,`blue`],[`Indigo`,`#31405c`,`#070a13`,.2,.8,.45,`blue`],[`Cobalt Teal`,`#3fb8ab`,`#0b2f2b`,.8,.2,.85,`blue`],[`Phthalo Green`,`#0e8a6b`,`#03231b`,.05,.95,.25,`green`],[`Viridian`,`#3e9c82`,`#0b2c24`,.55,.3,.7,`green`],[`Sap Green`,`#6d8e39`,`#1b240f`,.25,.6,.4,`green`],[`Green Gold`,`#8fa032`,`#26290b`,.15,.7,.35,`green`],[`Perylene Green`,`#33473b`,`#060a08`,.3,.7,.5,`green`],[`Cobalt Green`,`#5da287`,`#173229`,.8,.15,.85,`green`],[`Terre Verte`,`#7d9179`,`#2c352a`,.85,.1,.8,`green`],[`Undersea Green`,`#4f6448`,`#131a10`,.7,.35,.75,`green`],[`Olive Green`,`#75713a`,`#211f0d`,.3,.55,.5,`green`],[`Hansa Yellow`,`#f4e04b`,`#4a4410`,.05,.5,.3,`yellow`],[`Aureolin`,`#f0d23c`,`#57470e`,.1,.55,.3,`yellow`],[`Cadmium Yellow Deep`,`#f2a91e`,`#5c3c06`,.45,.35,.75,`yellow`],[`Indian Yellow`,`#f0b32a`,`#4a3208`,.1,.6,.3,`yellow`],[`Naples Yellow`,`#efc98d`,`#7a6647`,.5,.15,.7,`yellow`],[`Yellow Ochre`,`#d9a751`,`#57431e`,.55,.3,.7,`yellow`],[`Raw Sienna`,`#c8903f`,`#4a3413`,.6,.35,.7,`yellow`],[`Quinacridone Gold`,`#c8892b`,`#3f2a08`,.1,.8,.3,`yellow`],[`Pyrrol Orange`,`#e8702e`,`#431c08`,.1,.7,.35,`red`],[`Quin Burnt Orange`,`#b45a2c`,`#37130a`,.15,.75,.35,`red`],[`Vermilion`,`#dd4a26`,`#4a0f06`,.4,.45,.8,`red`],[`Scarlet Lake`,`#d93a3f`,`#420a0e`,.15,.7,.35,`red`],[`Quin Magenta`,`#b3306e`,`#33081e`,.05,.85,.25,`red`],[`Cadmium Red`,`#d63a2e`,`#57140f`,.45,.4,.8,`red`],[`Quinacridone Rose`,`#e04b8a`,`#400f26`,.05,.8,.25,`red`],[`Alizarin Crimson`,`#b92b46`,`#33060e`,.1,.85,.3,`red`],[`Opera Pink`,`#f657a7`,`#47102d`,.05,.7,.25,`red`],[`Potter's Pink`,`#c98d86`,`#4a2f2c`,.9,.15,.85,`red`],[`Perylene Maroon`,`#8c3a34`,`#260a08`,.2,.7,.45,`violet`],[`Moonglow`,`#7a7590`,`#211e30`,.9,.25,.85,`violet`],[`Dioxazine Violet`,`#6a3fa0`,`#150a25`,.1,.85,.3,`violet`],[`Cobalt Violet`,`#b06bb2`,`#2e1230`,.85,.15,.85,`violet`],[`Ultramarine Violet`,`#6a5fb8`,`#14102d`,.7,.3,.8,`violet`],[`Burnt Sienna`,`#b65a33`,`#33130a`,.6,.4,.7,`earth`],[`Indian Red`,`#9c4a3a`,`#2e0d09`,.75,.3,.9,`earth`],[`Caput Mortuum`,`#6e3a3a`,`#1d0a0a`,.7,.35,.85,`earth`],[`Burnt Umber`,`#7a4a2e`,`#1d0f08`,.5,.45,.7,`earth`],[`Raw Umber`,`#6e5a35`,`#17120a`,.6,.4,.7,`earth`],[`Sepia`,`#5a4632`,`#0f0a06`,.35,.6,.6,`earth`],[`Buff Titanium`,`#e8dcc2`,`#8a8070`,.7,.1,.8,`earth`],[`Payne's Gray`,`#46536a`,`#0a0d14`,.35,.6,.55,`neutral`],[`Neutral Tint`,`#555059`,`#0c0b0d`,.15,.7,.45,`neutral`],[`Ivory Black`,`#3a3a38`,`#060605`,.45,.5,.7,`neutral`]].map(([e,t,n,r,i,a,o],s)=>{let c=fn(t),l=fn(n),u=1-.8*Math.min(Math.max(i*.55+(1-a)*.45,0),1)**1.25,d=[0,0,0],f=[0,0,0];for(let e=0;e<3;e++)[d[e],f[e]]=mn(c[e],l[e]*u);return{id:s,name:e,hexW:t,gran:r,stain:i,dens:a,family:o,K:d,S:f}});[`French Ultramarine`,`Cerulean Blue`,`Quinacridone Rose`,`Hansa Yellow`,`Burnt Sienna`,`Payne's Gray`].map(e=>Cn.find(t=>t.name===e)?.id||0);function wn(e,t=`Color`){let n=Cn.find(n=>n.hexW.toLowerCase()===e.toLowerCase()||n.name.toLowerCase()===t.toLowerCase());if(n)return n;let r=fn(e),i=r.map(e=>e*.12),a=[0,0,0],o=[0,0,0];for(let e=0;e<3;e++)[a[e],o[e]]=mn(r[e],i[e]);return{id:-1,name:t,hexW:e,gran:.5,stain:.5,dens:.5,family:`custom`,K:a,S:o}}function Tn(e,t){let n=null,r=!1;try{n=ln(e,{width:848,height:1060}),r=!0}catch(e){console.warn(`WebGL2 Aquarelle simulation unavailable, falling back to 2D canvas:`,e)}let i=new AbortController,a=0,o=!1,s=!1,c=null,l=0,u=[],d={color:`#58745e`,size:18,water:.56,load:.7,brush:`round`,mode:`brush`,paper:`cold`},f=[wn(d.color,`Brush Pigment`),...Cn.slice(0,7)];r&&n&&(n.setSlots(f),n.setPaper(d.paper));let p=e=>{if(r&&n){let t=[0,0,0,0],r=[0,0,0,0],i=Math.max(.1,d.load*1.5);l<4?t[l]=i:r[l-4]=i;let a=u.splice(0,Jt);n.frame({splats:a,pig0:t,pig1:r,tilt:[0,0],mode:d.mode===`lift`?2:0,strokeWater:d.water,evapMul:1,time:e*.001})}a=requestAnimationFrame(p)};a=requestAnimationFrame(p);let m=(i,a,s,c,l=.65)=>{if(!r||!n)return;let f=e.getBoundingClientRect(),p=i/f.width*n.SIM_W,m=(1-a/f.height)*n.SIM_H,h=Math.max(2.5,d.size*(.45+l*.45));u.push({x:p,y:m,r:h,water:.15+d.water*.45,vx:s*.15,vy:-c*.15}),o||(o=!0,t?.())},h=t=>{let n=e.getBoundingClientRect();return{x:t.clientX-n.left,y:t.clientY-n.top}},g=(e,t)=>{if(!c){m(e.x,e.y,0,0,t),c=e;return}let n=e.x-c.x,r=e.y-c.y,i=Math.hypot(n,r),a=Math.max(2,d.size*.2);for(let e=0;e<=i;e+=a){let a=i?e/i:0;m(c.x+n*a,c.y+r*a,n,r,t)}c=e};e.addEventListener(`pointerdown`,t=>{r&&n&&n.pushUndo(),s=!0,c=null,e.setPointerCapture(t.pointerId),g(h(t),t.pressure||.65)},{signal:i.signal}),e.addEventListener(`pointermove`,e=>{s&&g(h(e),e.pressure||.65)},{signal:i.signal});let _=()=>{s=!1,c=null};return e.addEventListener(`pointerup`,_,{signal:i.signal}),e.addEventListener(`pointercancel`,_,{signal:i.signal}),{canvas:e,sim:n,setOptions(e){let t=!!(e.paper&&e.paper!==d.paper),i=!!(e.color&&e.color.toLowerCase()!==d.color.toLowerCase());if(i&&!t&&r&&n&&n.bakeGround(),d={...d,...e},t&&r&&n&&n.setPaper(e.paper),i){let t=wn(e.color);f[0]=t,l=0,r&&n&&n.setSlots(f)}},setEpisodePigments(e=[]){if(!(!e||!e.length)){for(r&&n&&n.bakeGround(),f=e.slice(0,8).map((e,t)=>wn(typeof e==`string`?e:e.hex||e[1],typeof e==`string`?e:e.name||e[0]));f.length<8;)f.push(Cn[f.length]);l=0,r&&n&&(n.setSlots(f),n.render())}},dry(){r&&n&&n.bakeGround()},clear(){r&&n&&(n.pushUndo(),n.clearPaint(),n.render()),o=!1},undo(){return r&&n?n.popUndo():!1},redo(){return r&&n?n.popRedo():!1},paint(e,t={}){r&&n&&n.pushUndo(),this.setOptions({...d,...t}),e.forEach(e=>m(e.x,e.y,0,0,e.pressure||.7))},stats(){return{width:e.width,height:e.height,webgl:r,mode:d.mode,paper:d.paper}},export(){return r&&n?n.capturePNG().toDataURL(`image/png`):e.toDataURL(`image/png`)},get painted(){return o},destroy(){a&&cancelAnimationFrame(a),i.abort()}}}var En=`,painting_index,img_src,painting_title,season,episode,num_colors,youtube_src,colors,color_hex,Black_Gesso,Bright_Red,Burnt_Umber,Cadmium_Yellow,Dark_Sienna,Indian_Red,Indian_Yellow,Liquid_Black,Liquid_Clear,Midnight_Black,Phthalo_Blue,Phthalo_Green,Prussian_Blue,Sap_Green,Titanium_White,Van_Dyke_Brown,Yellow_Ochre,Alizarin_Crimson\r
1,282,https://www.twoinchbrush.com/images/painting282.png,A Walk in the Woods,1,1,8,https://www.youtube.com/embed/oh5p5f5_-7A,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#FFEC00', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15']",0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1\r
2,283,https://www.twoinchbrush.com/images/painting283.png,Mt. McKinley,1,2,8,https://www.youtube.com/embed/RInDWhYceLU,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#FFEC00', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15']",0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1\r
3,284,https://www.twoinchbrush.com/images/painting284.png,Ebony Sunset,1,3,9,https://www.youtube.com/embed/UOziR7PoVco,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15']",1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1\r
4,285,https://www.twoinchbrush.com/images/painting285.png,Winter Mist,1,4,3,https://www.youtube.com/embed/0pwoixRikn4,"['Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#021E44', '#FFFFFF', '#221B15']",0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0\r
5,286,https://www.twoinchbrush.com/images/painting286.png,Quiet Stream,1,5,8,https://www.youtube.com/embed/DFSIQNjKRfk,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#FFEC00', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15']",0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1\r
6,287,https://www.twoinchbrush.com/images/painting287.png,Winter Moon,1,6,4,https://www.youtube.com/embed/loAzRUzx1wI,"['Black Gesso', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#000000', '#021E44', '#FFFFFF', '#221B15']",1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0\r
7,288,https://www.twoinchbrush.com/images/painting288.png,Autumn Mountain,1,7,8,https://www.youtube.com/embed/sDdpc8uisD0,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#FFEC00', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15']",0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1\r
8,289,https://www.twoinchbrush.com/images/painting289.png,Peaceful Valley,1,8,8,https://www.youtube.com/embed/kQlFwTOkYzg,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#FFEC00', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15']",0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1\r
9,290,https://www.twoinchbrush.com/images/painting290.png,Seascape,1,9,8,https://www.youtube.com/embed/QxcS7p1VHyQ,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#FFEC00', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15']",0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1\r
10,291,https://www.twoinchbrush.com/images/painting291.png,Mountain Lake,1,10,8,https://www.youtube.com/embed/wDnLlywAL5I,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#FFEC00', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15']",0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1\r
11,292,https://www.twoinchbrush.com/images/painting292.png,Winter Glow,1,11,8,https://www.youtube.com/embed/Q03YvknOVe0,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#FFEC00', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15']",0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1\r
12,293,https://www.twoinchbrush.com/images/painting293.png,Snow Fall,1,12,4,https://www.youtube.com/embed/4E35-8x_y04,"['Alizarin Crimson', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#021E44', '#FFFFFF', '#221B15']",0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1\r
13,294,https://www.twoinchbrush.com/images/painting294.png,Final Reflections,1,13,8,https://www.youtube.com/embed/IEQWfszfRlA,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#FFEC00', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15']",0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1\r
14,269,https://www.twoinchbrush.com/images/painting269.png,Meadow Lake,2,1,12,https://www.youtube.com/embed/GARWowi0QXI,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1\r
15,270,https://www.twoinchbrush.com/images/painting270.png,Winter Sun,2,2,12,https://www.youtube.com/embed/VPfYRj4DDco,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1\r
16,271,https://www.twoinchbrush.com/images/painting271.png,Ebony Sea,2,3,13,https://www.youtube.com/embed/aOJsKNzO3i8,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1\r
17,272,https://www.twoinchbrush.com/images/painting272.png,Shades of Grey,2,4,3,https://www.youtube.com/embed/I-ousb8-SD0,"['Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#021E44', '#FFFFFF', '#221B15']",0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0\r
18,273,https://www.twoinchbrush.com/images/painting273.png,Autumn Splendor,2,5,11,https://www.youtube.com/embed/rTTWw5Gd79I,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1\r
19,274,https://www.twoinchbrush.com/images/painting274.png,Black River,2,6,11,https://www.youtube.com/embed/6O4sfJd8G_M,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1\r
20,275,https://www.twoinchbrush.com/images/painting275.png,Brown Mountain,2,7,11,https://www.youtube.com/embed/Vx6v47gHBWM,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1\r
21,276,https://www.twoinchbrush.com/images/painting276.png,Reflections,2,8,12,https://www.youtube.com/embed/0FYfo94qefg,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1\r
22,277,https://www.twoinchbrush.com/images/painting277.png,Black and White Seascape,2,9,12,https://www.youtube.com/embed/PMDyPrE0puo,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1\r
23,278,https://www.twoinchbrush.com/images/painting278.png,Lazy River,2,10,12,https://www.youtube.com/embed/BW2wKKFvH1g,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1\r
24,279,https://www.twoinchbrush.com/images/painting279.png,Black Waterfall,2,11,12,https://www.youtube.com/embed/GzSqjyQUPZQ,"['Alizarin Crimson', 'Black Gesso', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1\r
25,280,https://www.twoinchbrush.com/images/painting280.png,Mountain Waterfall,2,12,12,https://www.youtube.com/embed/9jIt95PCFAA,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1\r
26,281,https://www.twoinchbrush.com/images/painting281.png,Final Grace,2,13,12,https://www.youtube.com/embed/miJ19Kz_i3Y,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1\r
27,256,https://www.twoinchbrush.com/images/painting256.png,Mountain Retreat,3,1,12,https://www.youtube.com/embed/hoimk4s8JoQ,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1\r
28,257,https://www.twoinchbrush.com/images/painting257.png,Blue Moon,3,2,12,https://www.youtube.com/embed/loit61vLUMc,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1\r
29,258,https://www.twoinchbrush.com/images/painting258.png,Bubbling Stream,3,3,12,https://www.youtube.com/embed/fuFalEXVN0k,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1\r
30,259,https://www.twoinchbrush.com/images/painting259.png,Winter Night,3,4,7,https://www.youtube.com/embed/8ysFkNYwhAE,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Liquid Black', 'Phthalo Green\\r\\n', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#FFEC00', '#000000', '#102E3C', '#FFFFFF', '#221B15']",0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1\r
31,260,https://www.twoinchbrush.com/images/painting260.png,Distant Hills,3,5,7,https://www.youtube.com/embed/8Zge88tVwjE,"['Alizarin Crimson', 'Burnt Umber', 'Cadmium Yellow', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#8A3324', '#FFEC00', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1\r
32,261,https://www.twoinchbrush.com/images/painting261.png,Covered Bridge,3,6,10,https://www.youtube.com/embed/OHSm8kLE7js,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1\r
33,262,https://www.twoinchbrush.com/images/painting262.png,Quiet Inlet,3,7,10,https://www.youtube.com/embed/9N5IWKzYIyU,"['Alizarin Crimson', 'Burnt Umber', 'Cadmium Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#8A3324', '#FFEC00', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1\r
34,263,https://www.twoinchbrush.com/images/painting263.png,Night Light,3,8,9,https://www.youtube.com/embed/l141Y0x8om0,"['Alizarin Crimson', 'Black Gesso', 'Burnt Umber', 'Cadmium Yellow', 'Phthalo Green\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#8A3324', '#FFEC00', '#102E3C', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1\r
35,264,https://www.twoinchbrush.com/images/painting264.png,The Old Mill,3,9,10,https://www.youtube.com/embed/OFKFUJ9eDNs,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1\r
36,265,https://www.twoinchbrush.com/images/painting265.png,Campfire,3,10,8,https://www.youtube.com/embed/L5bXkI0-pEg,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#221B15', '#C79B00']",1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1\r
37,266,https://www.twoinchbrush.com/images/painting266.png,Rustic Barn,3,11,12,https://www.youtube.com/embed/WJJwrnFhUUg,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1\r
38,267,https://www.twoinchbrush.com/images/painting267.png,Hidden Lake,3,12,10,https://www.youtube.com/embed/P_DaqkFbnac,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1\r
39,268,https://www.twoinchbrush.com/images/painting268.png,Peaceful Waters,3,13,9,https://www.youtube.com/embed/Z0vtjRLqXcQ,"['Alizarin Crimson', 'Cadmium Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#FFEC00', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1\r
40,243,https://www.twoinchbrush.com/images/painting243.png,Purple Splendor,4,1,4,https://www.youtube.com/embed/hP4GfMgsNVE,"['Alizarin Crimson', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#0C0040', '#FFFFFF', '#221B15']",0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1\r
41,244,https://www.twoinchbrush.com/images/painting244.png,Tranquil Valley,4,2,10,https://www.youtube.com/embed/PbchoOWWCZs,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1\r
42,245,https://www.twoinchbrush.com/images/painting245.png,Majestic Mountains,4,3,12,https://www.youtube.com/embed/NcVeRlPu_5w,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1\r
43,246,https://www.twoinchbrush.com/images/painting246.png,Winter Sawscape,4,4,7,https://www.youtube.com/embed/lmKAwKrONmE,"['Black Gesso', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Titanium White']","['#000000', '#DB0000', '#8A3324', '#FFEC00', '#000000', '#021E44', '#FFFFFF']",1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0\r
44,247,https://www.twoinchbrush.com/images/painting247.png,Evening Seascape,4,5,10,https://www.youtube.com/embed/y5k4GXw_-yI,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#000000', '#DB0000', '#8A3324', '#FFEC00', '#0C0040', '#102E3C', '#021E44', '#FFFFFF', '#221B15']",1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1\r
45,248,https://www.twoinchbrush.com/images/painting248.png,Warm Summer Day,4,6,11,https://www.youtube.com/embed/GBN9AIw3Ao4,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1\r
46,249,https://www.twoinchbrush.com/images/painting249.png,Cabin in the Woods,4,7,11,https://www.youtube.com/embed/81QKellPA70,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1\r
47,250,https://www.twoinchbrush.com/images/painting250.png,Wetlands,4,8,10,https://www.youtube.com/embed/2FpVyGanPwM,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1\r
48,251,https://www.twoinchbrush.com/images/painting251.png,Cool Waters,4,9,12,https://www.youtube.com/embed/tJRvBcqQd5A,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1\r
49,252,https://www.twoinchbrush.com/images/painting252.png,Quiet Woods,4,10,11,https://www.youtube.com/embed/wIZX57I4aDs,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1\r
50,253,https://www.twoinchbrush.com/images/painting253.png,Northwest Majesty,4,11,10,https://www.youtube.com/embed/9DU6bunvD_g,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Liquid Black', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15']",0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1\r
51,254,https://www.twoinchbrush.com/images/painting254.png,Autumn Days,4,12,12,https://www.youtube.com/embed/VAdMkf-AAPM,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1\r
52,255,https://www.twoinchbrush.com/images/painting255.png,Mountain Challenge,4,13,10,https://www.youtube.com/embed/o2cjLA_wgIk,"['Alizarin Crimson', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1\r
53,230,https://www.twoinchbrush.com/images/painting230.png,Mountain Waterfall,5,1,11,https://www.youtube.com/embed/DqhzxdkdQS0,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1\r
54,231,https://www.twoinchbrush.com/images/painting231.png,Twilight Meadow,5,2,12,https://www.youtube.com/embed/6evqNlOO7Bw,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1\r
55,232,https://www.twoinchbrush.com/images/painting232.png,Mountain Blossoms,5,3,5,https://www.youtube.com/embed/UVhhStJAJZc,"['Alizarin Crimson', 'Liquid Black', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Titanium White']","['#4E1500', '#000000', '#0C0040', '#102E3C', '#FFFFFF']",0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1\r
56,233,https://www.twoinchbrush.com/images/painting233.png,Winter Stillness,5,4,7,https://www.youtube.com/embed/qg9c1SqdRko,"['Alizarin Crimson', 'Burnt Umber', 'Indian Yellow', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#8A3324', '#FFB800', '#0C0040', '#0A3410', '#FFFFFF', '#221B15']",0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1\r
57,234,https://www.twoinchbrush.com/images/painting234.png,Quiet Pond,5,5,10,https://www.youtube.com/embed/aiK9xOIJtV8,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1\r
58,235,https://www.twoinchbrush.com/images/painting235.png,Ocean Sunrise,5,6,6,https://www.youtube.com/embed/u0Bz6TNUK1Q,"['Alizarin Crimson', 'Indian Yellow', 'Liquid Black', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#FFB800', '#000000', '#021E44', '#FFFFFF', '#221B15']",0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1\r
59,236,https://www.twoinchbrush.com/images/painting236.png,Bubbling Brook,5,7,10,https://www.youtube.com/embed/LiKCzeqn-kg,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1\r
60,237,https://www.twoinchbrush.com/images/painting237.png,Arizona Splendor,5,8,9,https://www.youtube.com/embed/spFwCh2616s,"['Alizarin Crimson', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1\r
61,238,https://www.twoinchbrush.com/images/painting238.png,Anatomy of a Wave,5,9,6,https://www.youtube.com/embed/DFQlu6eqrBo,"['Alizarin Crimson', 'Cadmium Yellow', 'Liquid Clear', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Titanium White']","['#4E1500', '#FFEC00', '#FFFFFF', '#0C0040', '#102E3C', '#FFFFFF']",0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1\r
62,239,https://www.twoinchbrush.com/images/painting239.png,The Windmill,5,10,11,https://www.youtube.com/embed/xj8xsTSkbUk,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Burnt Umber', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#8A3324', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1\r
63,240,https://www.twoinchbrush.com/images/painting240.png,Autumn Glory,5,11,8,https://www.youtube.com/embed/yTzlm_t0RmY,"['Alizarin Crimson', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#8A3324', '#FFEC00', '#FFB800', '#021E44', '#0A3410', '#FFFFFF', '#221B15']",0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1\r
64,241,https://www.twoinchbrush.com/images/painting241.png,Indian Girl,5,12,5,https://www.youtube.com/embed/2uXMx8Kjs8I,"['Bright Red', 'Burnt Umber', 'Indian Yellow', 'Prussian Blue', 'Titanium White']","['#DB0000', '#8A3324', '#FFB800', '#021E44', '#FFFFFF']",0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0\r
65,242,https://www.twoinchbrush.com/images/painting242.png,Meadow Stream,5,13,11,https://www.youtube.com/embed/87MMbN1bQCs,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1\r
66,217,https://www.twoinchbrush.com/images/painting217.png,Blue River,6,1,12,https://www.youtube.com/embed/LygUyAb78oY,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1\r
67,218,https://www.twoinchbrush.com/images/painting218.png,Nature's Edge,6,2,11,https://www.youtube.com/embed/Bcqyzo85A1o,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1\r
68,219,https://www.twoinchbrush.com/images/painting219.png,Morning Mist,6,3,10,https://www.youtube.com/embed/wbZreRaE74k,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1\r
69,220,https://www.twoinchbrush.com/images/painting220.png,Whispering Stream,6,4,11,https://www.youtube.com/embed/QglIjlqsUdU,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1\r
70,221,https://www.twoinchbrush.com/images/painting221.png,Secluded Forest,6,5,12,https://www.youtube.com/embed/USkduOfwJok,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1\r
71,222,https://www.twoinchbrush.com/images/painting222.png,Snow Trail,6,6,8,https://www.youtube.com/embed/n9EsFFtwZnE,"['Alizarin Crimson', 'Burnt Umber', 'Cadmium Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#8A3324', '#FFEC00', '#0C0040', '#102E3C', '#FFFFFF', '#221B15', '#C79B00']",0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1\r
72,223,https://www.twoinchbrush.com/images/painting223.png,Arctic Beauty,6,7,11,https://www.youtube.com/embed/UQ-RTZCOQn0,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1\r
73,224,https://www.twoinchbrush.com/images/painting224.png,Horizons West,6,8,7,https://www.youtube.com/embed/m6UM-rN2D6s,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Indian Yellow', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#FFEC00', '#FFB800', '#021E44', '#FFFFFF', '#221B15']",0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1\r
74,225,https://www.twoinchbrush.com/images/painting225.png,High Chateau,6,9,11,https://www.youtube.com/embed/dafH8ks9Zww,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1\r
75,226,https://www.twoinchbrush.com/images/painting226.png,Country Life,6,10,10,https://www.youtube.com/embed/j8Jf7QVKLgQ,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1\r
76,227,https://www.twoinchbrush.com/images/painting227.png,Western Expanse,6,11,11,https://www.youtube.com/embed/MTInkV5ODjk,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1\r
77,228,https://www.twoinchbrush.com/images/painting228.png,Marshlands,6,12,11,https://www.youtube.com/embed/Ugiwi8uizpg,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1\r
78,229,https://www.twoinchbrush.com/images/painting229.png,Blaze of Color,6,13,11,https://www.youtube.com/embed/se7wOprxRGs,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1\r
79,203,https://www.twoinchbrush.com/images/painting203.png,Winter Cabin,7,1,6,https://www.youtube.com/embed/kdlHV6ceI_gw,"['Bright Red', 'Dark Sienna', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#DB0000', '#5F2E1F', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0\r
80,204,https://www.twoinchbrush.com/images/painting204.png,Secluded Lake,7,2,12,https://www.youtube.com/embed/2OxSJcFvpoU,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1\r
81,205,https://www.twoinchbrush.com/images/painting205.png,Evergreens at Sunset,7,3,7,https://www.youtube.com/embed/YQPEy3hYGo8,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Sap Green', 'Titanium White']","['#4E1500', '#DB0000', '#FFEC00', '#FFB800', '#000000', '#0A3410', '#FFFFFF']",0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1\r
82,206,https://www.twoinchbrush.com/images/painting206.png,Mountain Cabin,7,4,12,https://www.youtube.com/embed/E3IAMvO8GyM,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1\r
83,208,https://www.twoinchbrush.com/images/painting208.png,Portrait of Sally,7,5,8,https://www.youtube.com/embed/MHJB0IBnuD4,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Phthalo Blue', 'Titanium White', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#0C0040', '#FFFFFF', '#C79B00']",0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1\r
84,209,https://www.twoinchbrush.com/images/painting209.png,Misty Waterfall,7,6,11,https://www.youtube.com/embed/530_cVmexiI,"['Alizarin Crimson', 'Bright Red', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1\r
85,210,https://www.twoinchbrush.com/images/painting210.png,Barn at Sunset,7,7,10,https://www.youtube.com/embed/WT6n0K2zGnA,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1\r
86,211,https://www.twoinchbrush.com/images/painting211.png,Mountain Splendor,7,8,11,https://www.youtube.com/embed/GhOGZMpPUSE,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1\r
87,212,https://www.twoinchbrush.com/images/painting212.png,Lake by Mountain,7,9,11,https://www.youtube.com/embed/yAiYirlcq7o,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1\r
88,213,https://www.twoinchbrush.com/images/painting213.png,Mountain Glory,7,10,11,https://www.youtube.com/embed/0M9pwLHRR2c,"['Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0\r
89,214,https://www.twoinchbrush.com/images/painting214.png,Grey Winter,7,11,3,https://www.youtube.com/embed/sS-hNYgDUak,"['Alizarin Crimson', 'Midnight Black\\r\\n\\r\\n', 'Titanium White']","['#4E1500', '#000000', '#FFFFFF']",0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1\r
90,215,https://www.twoinchbrush.com/images/painting215.png,Dock Scene,7,12,9,https://www.youtube.com/embed/4KYxkqlzyqM,"['Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#DB0000', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0\r
91,216,https://www.twoinchbrush.com/images/painting216.png,Dark Waterfall,7,13,11,https://www.youtube.com/embed/VqMbL00eZqw,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Black', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1\r
92,190,https://www.twoinchbrush.com/images/painting190.png,Misty Rolling Hills,8,1,10,https://www.youtube.com/embed/cC5ozePVKGI,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1\r
93,191,https://www.twoinchbrush.com/images/painting191.png,Lakeside Cabin,8,2,12,https://www.youtube.com/embed/CP6_5cQVZvQ,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1\r
94,192,https://www.twoinchbrush.com/images/painting192.png,Warm Winter Day,8,3,10,https://www.youtube.com/embed/mUJoNLWQ1yI,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1\r
95,193,https://www.twoinchbrush.com/images/painting193.png,Waterside Way,8,4,11,https://www.youtube.com/embed/uj5FE70BcB0,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
96,194,https://www.twoinchbrush.com/images/painting194.png,Hunter's Haven,8,5,11,https://www.youtube.com/embed/Da4SPyh1ATM,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1\r
97,195,https://www.twoinchbrush.com/images/painting195.png,Bubbling Mountain Brook,8,6,11,https://www.youtube.com/embed/U2_SKgM3f4A,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
98,196,https://www.twoinchbrush.com/images/painting196.png,Winter Hideaway,8,7,10,https://www.youtube.com/embed/19oz9XHZNzA,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1\r
99,197,https://www.twoinchbrush.com/images/painting197.png,Foot of the Mountain,8,8,13,https://www.youtube.com/embed/cIUBUc_ITBc,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1\r
100,198,https://www.twoinchbrush.com/images/painting198.png,Majestic Pine,8,9,11,https://www.youtube.com/embed/x5CoQj9zr-c,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
101,199,https://www.twoinchbrush.com/images/painting199.png,Cactus at Sunset,8,10,10,https://www.youtube.com/embed/XBqD3QhKU24,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1\r
102,200,https://www.twoinchbrush.com/images/painting200.png,Mountain Range,8,11,10,https://www.youtube.com/embed/V_l6olF3yHI,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#FFB800', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1\r
103,201,https://www.twoinchbrush.com/images/painting201.png,Lonely Retreat,8,12,10,https://www.youtube.com/embed/qTDQt_PdlYc,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1\r
104,202,https://www.twoinchbrush.com/images/painting202.png,Northern Lights,8,13,9,https://www.youtube.com/embed/vgbMONXc9Cs,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#000000', '#DB0000', '#5F2E1F', '#000000', '#0C0040', '#102E3C', '#FFFFFF', '#221B15']",1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1\r
105,177,https://www.twoinchbrush.com/images/painting177.png,Winter Evergreens,9,1,9,https://www.youtube.com/embed/O6L5YPt9CeU,"['Alizarin Crimson', 'Bright Red', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1\r
106,178,https://www.twoinchbrush.com/images/painting178.png,Surf's Up,9,2,11,https://www.youtube.com/embed/ZKxFvyyOBPQ,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1\r
107,179,https://www.twoinchbrush.com/images/painting179.png,Red Sunset,9,3,11,https://www.youtube.com/embed/e5JhYi_G-l0,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1\r
108,180,https://www.twoinchbrush.com/images/painting180.png,Meadow Road,9,4,11,https://www.youtube.com/embed/u5VT_WGM0kg,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
109,181,https://www.twoinchbrush.com/images/painting181.png,Winter Oval,9,5,7,https://www.youtube.com/embed/pYWiLm_-sXw,"['Alizarin Crimson', 'Bright Red', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#5F2E1F', '#000000', '#0C0040', '#FFFFFF', '#221B15']",0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1\r
110,182,https://www.twoinchbrush.com/images/painting182.png,Secluded Beach,9,6,11,https://www.youtube.com/embed/WGUcw_kFvzU,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1\r
111,183,https://www.twoinchbrush.com/images/painting183.png,Forest Hills,9,7,11,https://www.youtube.com/embed/E3XW_Zp238U,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
112,184,https://www.twoinchbrush.com/images/painting184.png,Little House by the Road,9,8,11,https://www.youtube.com/embed/3CDg_9gL-5M,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
113,185,https://www.twoinchbrush.com/images/painting185.png,Mountain Path,9,9,11,https://www.youtube.com/embed/e0VUprkc1n0,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
114,186,https://www.twoinchbrush.com/images/painting186.png,Country Charm,9,10,11,https://www.youtube.com/embed/9wp8NRzCJnw,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
115,187,https://www.twoinchbrush.com/images/painting187.png,Nature's Paradise,9,11,11,https://www.youtube.com/embed/7yU55PUls2c,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
116,188,https://www.twoinchbrush.com/images/painting188.png,Mountain by the Sea,9,12,13,https://www.youtube.com/embed/so--opB-yuQ,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFFFFF', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1\r
117,189,https://www.twoinchbrush.com/images/painting189.png,Mountain Hideaway,9,13,12,https://www.youtube.com/embed/q48EWPrbzVs,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
118,163,https://www.twoinchbrush.com/images/painting163.png,Towering Peaks,10,1,13,https://www.youtube.com/embed/1s58rW0_LN4,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1\r
119,164,https://www.twoinchbrush.com/images/painting164.png,Cabin at Sunset,10,2,12,https://www.youtube.com/embed/a6Wil3OXNuI,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
120,165,https://www.twoinchbrush.com/images/painting165.png,Twin Falls,10,3,12,https://www.youtube.com/embed/cMwkY8ojRik,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
121,166,https://www.twoinchbrush.com/images/painting166.png,Secluded Bridge,10,4,12,https://www.youtube.com/embed/vrAMRxBB5KI,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
122,167,https://www.twoinchbrush.com/images/painting167.png,Ocean Breeze,10,5,12,https://www.youtube.com/embed/XZmdzfvXRuw,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#102E3C', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1\r
123,168,https://www.twoinchbrush.com/images/painting168.png,Autumn Woods,10,6,12,https://www.youtube.com/embed/vKyMU5Z8cDI,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
124,170,https://www.twoinchbrush.com/images/painting170.png,Winter Solitude,10,7,7,https://www.youtube.com/embed/ov4YaCQB9co,"['Alizarin Crimson', 'Bright Red', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#5F2E1F', '#000000', '#0C0040', '#FFFFFF', '#221B15']",0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1\r
125,171,https://www.twoinchbrush.com/images/painting171.png,Golden Sunset,10,8,12,https://www.youtube.com/embed/CiNDyckERXQ,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
126,172,https://www.twoinchbrush.com/images/painting172.png,Mountain Oval,10,9,11,https://www.youtube.com/embed/Qj6lMtnCt8o,"['Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0\r
127,173,https://www.twoinchbrush.com/images/painting173.png,Ocean Sunset,10,10,12,https://www.youtube.com/embed/OJ_xqtvZf3o,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1\r
128,174,https://www.twoinchbrush.com/images/painting174.png,Triple View,10,11,12,https://www.youtube.com/embed/zoTeyliLn5o,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
129,175,https://www.twoinchbrush.com/images/painting175.png,Winter Frost,10,12,9,https://www.youtube.com/embed/8satX-hLkuI,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15']",0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1\r
130,176,https://www.twoinchbrush.com/images/painting176.png,Lakeside Cabin,10,13,12,https://www.youtube.com/embed/1l_TsfCIb_I,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
131,150,https://www.twoinchbrush.com/images/painting150.png,Mountain Stream,11,1,12,https://www.youtube.com/embed/xdFCj6BzQio,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
132,151,https://www.twoinchbrush.com/images/painting151.png,Country Cabin,11,2,7,https://www.youtube.com/embed/Dkww2nHpuZw,"['Alizarin Crimson', 'Bright Red', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#5F2E1F', '#000000', '#021E44', '#FFFFFF', '#221B15']",0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1\r
133,152,https://www.twoinchbrush.com/images/painting152.png,Daisy Delight,11,3,10,https://www.youtube.com/embed/HuHC1RqtvDA,"['Alizarin Crimson', 'Cadmium Yellow', 'Dark Sienna', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#FFEC00', '#5F2E1F', '#FFFFFF', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1\r
134,153,https://www.twoinchbrush.com/images/painting153.png,Hidden Stream,11,4,12,https://www.youtube.com/embed/JGzTg8fCj4w,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
135,154,https://www.twoinchbrush.com/images/painting154.png,Towering Glacier,11,5,12,https://www.youtube.com/embed/67vdGbA3Xkg,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1\r
136,155,https://www.twoinchbrush.com/images/painting155.png,Oval Barn,11,6,6,https://www.youtube.com/embed/HqBhCibidNM,"['Bright Red', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#DB0000', '#5F2E1F', '#000000', '#021E44', '#FFFFFF', '#221B15']",0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0\r
137,156,https://www.twoinchbrush.com/images/painting156.png,Lakeside Path,11,7,12,https://www.youtube.com/embed/1yjGoJokbZg,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
138,157,https://www.twoinchbrush.com/images/painting157.png,Sunset Oval,11,8,11,https://www.youtube.com/embed/9xG6IzcGotI,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
139,158,https://www.twoinchbrush.com/images/painting158.png,Winter Barn,11,9,6,https://www.youtube.com/embed/_xkn0ceDreo,"['Alizarin Crimson', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#5F2E1F', '#000000', '#0C0040', '#FFFFFF', '#221B15']",0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1\r
140,159,https://www.twoinchbrush.com/images/painting159.png,Sunset over the Waves,11,10,10,https://www.youtube.com/embed/c4b_B2F1eZg,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#FFFFFF', '#221B15']",1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1\r
141,160,https://www.twoinchbrush.com/images/painting160.png,Golden Glow,11,11,8,https://www.youtube.com/embed/aA8RhtaWACA,"['Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0\r
142,161,https://www.twoinchbrush.com/images/painting161.png,Roadside Barn,11,12,11,https://www.youtube.com/embed/vJpKhiXvXdA,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1\r
143,162,https://www.twoinchbrush.com/images/painting162.png,Happy Accident,11,13,11,https://www.youtube.com/embed/Fw6odlNp7_8,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1\r
144,137,https://www.twoinchbrush.com/images/painting137.png,Golden Knoll,12,1,7,https://www.youtube.com/embed/-O0Bs65eN5w,"['Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#FFFFFF', '#221B15', '#C79B00']",0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0\r
145,138,https://www.twoinchbrush.com/images/painting138.png,Mountain Reflections,12,2,12,https://www.youtube.com/embed/rzYpa4XGSnA,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
146,139,https://www.twoinchbrush.com/images/painting139.png,Secluded Mountain,12,3,13,https://www.youtube.com/embed/3PZabdohLso,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1\r
147,140,https://www.twoinchbrush.com/images/painting140.png,Bright Autumn Trees,12,4,13,https://www.youtube.com/embed/aR-C3h5zURM,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Black', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#000000', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1\r
148,141,https://www.twoinchbrush.com/images/painting141.png,Black Seascape,12,5,9,https://www.youtube.com/embed/P_aCan4cBwc,"['Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Titanium White', 'Van Dyke Brown']","['#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#102E3C', '#FFFFFF', '#221B15']",1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0\r
149,142,https://www.twoinchbrush.com/images/painting142.png,Steep Mountains,12,6,12,https://www.youtube.com/embed/fRK8_ioYWw4,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
150,143,https://www.twoinchbrush.com/images/painting143.png,Quiet Mountains River,12,7,12,https://www.youtube.com/embed/Leiw-FtADZc,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
151,144,https://www.twoinchbrush.com/images/painting144.png,Evening Waterfall,12,8,11,https://www.youtube.com/embed/PutvF_P4588,"['Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0\r
152,145,https://www.twoinchbrush.com/images/painting145.png,Tropical Seascape,12,9,12,https://www.youtube.com/embed/RrBsbqO9aqI,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1\r
153,146,https://www.twoinchbrush.com/images/painting146.png,Mountain at Sunset,12,10,13,https://www.youtube.com/embed/HCsCatvigtw,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1\r
154,147,https://www.twoinchbrush.com/images/painting147.png,Soft Mountain Glow,12,11,12,https://www.youtube.com/embed/gOGJYHWjXgE,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
155,148,https://www.twoinchbrush.com/images/painting148.png,Mountain in an Oval,12,12,11,https://www.youtube.com/embed/1jRPshs27H8,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
156,149,https://www.twoinchbrush.com/images/painting149.png,Winter Mountain,12,13,7,https://www.youtube.com/embed/46vI20697HI,"['Alizarin Crimson', 'Bright Red', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15']",0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1\r
157,124,https://www.twoinchbrush.com/images/painting124.png,Rolling Hills,13,1,12,https://www.youtube.com/embed/H4GyGrT7lEQ,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
158,125,https://www.twoinchbrush.com/images/painting125.png,Frozen Solitude,13,2,5,https://www.youtube.com/embed/kNZssD9zWlw,"['Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#5F2E1F', '#000000', '#021E44', '#FFFFFF', '#221B15']",0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0\r
159,126,https://www.twoinchbrush.com/images/painting126.png,Meadow Brook,13,3,13,https://www.youtube.com/embed/06W8GsWj2Yg,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1\r
160,127,https://www.twoinchbrush.com/images/painting127.png,Evening at Sunset,13,4,12,https://www.youtube.com/embed/7ZUQTXuDPaI,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
161,128,https://www.twoinchbrush.com/images/painting128.png,Mountain View,13,5,11,https://www.youtube.com/embed/dJfnAyDLwPY,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
162,129,https://www.twoinchbrush.com/images/painting129.png,Hidden Creek,13,6,10,https://www.youtube.com/embed/KmoRz01bm0Y,"['Black Gesso', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#000000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0\r
163,130,https://www.twoinchbrush.com/images/painting130.png,Peaceful Haven,13,7,13,https://www.youtube.com/embed/j20pZ96E_CE,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1\r
164,131,https://www.twoinchbrush.com/images/painting131.png,Mountain Exhibition,13,8,10,https://www.youtube.com/embed/bgI3_1quJ18,"['Alizarin Crimson', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
165,132,https://www.twoinchbrush.com/images/painting132.png,Emerald Waters,13,9,9,https://www.youtube.com/embed/lLunPQBzW6g,"['Black Gesso', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#000000', '#FFEC00', '#5F2E1F', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0\r
166,133,https://www.twoinchbrush.com/images/painting133.png,Mountain Summit,13,10,12,https://www.youtube.com/embed/kasGRkfkiPM,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
167,134,https://www.twoinchbrush.com/images/painting134.png,Cabin Hideaway,13,11,10,https://www.youtube.com/embed/NjTlW2NL1Lo,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1\r
168,135,https://www.twoinchbrush.com/images/painting135.png,Oval Essence,13,12,8,https://www.youtube.com/embed/q7WXF_BSEXw,"['Alizarin Crimson', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#102E3C', '#FFFFFF', '#221B15']",0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1\r
169,136,https://www.twoinchbrush.com/images/painting136.png,Lost Lake,13,13,12,https://www.youtube.com/embed/9-ATP8xyDM0,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
170,111,https://www.twoinchbrush.com/images/painting111.png,Distant Mountains,14,1,13,https://www.youtube.com/embed/GpA9UM7QGag,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1\r
171,112,https://www.twoinchbrush.com/images/painting112.png,Meadow Brook Surprise,14,2,12,https://www.youtube.com/embed/Ov5oIHTAa10,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
172,113,https://www.twoinchbrush.com/images/painting113.png,Mountain Moonlight Oval,14,3,12,https://www.youtube.com/embed/CigXQtT6BPM,"['Alizarin Crimson', 'Black Gesso', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
173,114,https://www.twoinchbrush.com/images/painting114.png,Snowy Solitude,14,4,7,https://www.youtube.com/embed/1ZriQGhSFTM,"['Alizarin Crimson', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#5F2E1F', '#000000', '#0C0040', '#FFFFFF', '#221B15', '#C79B00']",0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1\r
174,115,https://www.twoinchbrush.com/images/painting115.png,Mountain River,14,5,13,https://www.youtube.com/embed/CnMLKAGi0yM,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1\r
175,116,https://www.twoinchbrush.com/images/painting116.png,Graceful Mountains,14,6,12,https://www.youtube.com/embed/0uVe8T-vVVg,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
176,117,https://www.twoinchbrush.com/images/painting117.png,Windy Waves,14,7,14,https://www.youtube.com/embed/y6GVVjG4HMg,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Black', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1\r
177,118,https://www.twoinchbrush.com/images/painting118.png,On a Clear Day,14,8,11,https://www.youtube.com/embed/e63Cgln6Yag,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1\r
178,119,https://www.twoinchbrush.com/images/painting119.png,Riverside Escape Oval,14,9,13,https://www.youtube.com/embed/d83REwSGfGo,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1\r
179,120,https://www.twoinchbrush.com/images/painting120.png,Surprising Falls,14,10,13,https://www.youtube.com/embed/QbclL1ca7_s,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1\r
180,121,https://www.twoinchbrush.com/images/painting121.png,Shadow Pond,14,11,13,https://www.youtube.com/embed/BQWJ3kqonpA,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
181,122,https://www.twoinchbrush.com/images/painting122.png,Misty Forest Oval,14,12,12,https://www.youtube.com/embed/ddU9vQvSpw8,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
182,123,https://www.twoinchbrush.com/images/painting123.png,Natural Wonder,14,13,11,https://www.youtube.com/embed/knOutsaiKfU,"['Alizarin Crimson', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
183,98,https://www.twoinchbrush.com/images/painting98.png,Splendor of Winter,15,1,10,https://www.youtube.com/embed/oJvk7gPDHiE,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1\r
184,99,https://www.twoinchbrush.com/images/painting99.png,Colors of Nature,15,2,12,https://www.youtube.com/embed/Me9Ietooq4w,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
185,100,https://www.twoinchbrush.com/images/painting100.png,Grandpa's Barn,15,3,11,https://www.youtube.com/embed/IPPU49PyfEA,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1\r
186,101,https://www.twoinchbrush.com/images/painting101.png,Peaceful Reflections,15,4,13,https://www.youtube.com/embed/gYuH4Ilqdhs,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1\r
187,102,https://www.twoinchbrush.com/images/painting102.png,Hidden Winter Moon Oval,15,5,8,https://www.youtube.com/embed/yxAMOdl6RJE,"['Alizarin Crimson', 'Black Gesso', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#000000', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15']",1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1\r
188,103,https://www.twoinchbrush.com/images/painting103.png,Waves of Wonder,15,6,12,https://www.youtube.com/embed/tayQX_ng-Nc,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFFFFF', '#000000', '#0C0040', '#102E3C', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1\r
189,104,https://www.twoinchbrush.com/images/painting104.png,Cabin by the Pond,15,7,12,https://www.youtube.com/embed/TyOO6WeP2AY,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
190,105,https://www.twoinchbrush.com/images/painting105.png,Fall Stream,15,8,12,https://www.youtube.com/embed/ZY0ofhdV_L0,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
191,106,https://www.twoinchbrush.com/images/painting106.png,Christmas Eve Snow,15,9,9,https://www.youtube.com/embed/cVqFG2pxK2A,"['Alizarin Crimson', 'Black Gesso', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#000000', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15']",1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1\r
192,107,https://www.twoinchbrush.com/images/painting107.png,Forest Down Oval,15,10,12,https://www.youtube.com/embed/COsJUfPN2dA,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
193,108,https://www.twoinchbrush.com/images/painting108.png,Pathway to Autumn,15,11,12,https://www.youtube.com/embed/Hg5RKc6xiL4,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
194,109,https://www.twoinchbrush.com/images/painting109.png,Deep Forest Lake,15,12,13,https://www.youtube.com/embed/2bjFmSQjQrw,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
195,110,https://www.twoinchbrush.com/images/painting110.png,Peaks of Majesty,15,13,11,https://www.youtube.com/embed/lTb8DN6G6dE,"['Alizarin Crimson', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
196,84,https://www.twoinchbrush.com/images/painting84.png,Two Seasons,16,1,13,https://www.youtube.com/embed/jwVz0uTLH1I,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1\r
197,85,https://www.twoinchbrush.com/images/painting85.png,Nestled Cabin,16,2,12,https://www.youtube.com/embed/l_jN9KN257M,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
198,86,https://www.twoinchbrush.com/images/painting86.png,Wintertime Discovery,16,3,11,https://www.youtube.com/embed/uZyZW3tkCE0,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1\r
199,87,https://www.twoinchbrush.com/images/painting87.png,Mountain Mirage Wood Shape,16,4,12,https://www.youtube.com/embed/jfCsew_mz7A,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
200,88,https://www.twoinchbrush.com/images/painting88.png,Double Oval Fantasy,16,5,13,https://www.youtube.com/embed/4jAsLpJzjHM,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1\r
201,89,https://www.twoinchbrush.com/images/painting89.png,Contemplative Lady,16,6,1,https://www.youtube.com/embed/gnp6WE7Ql-s,['Van Dyke Brown'],['#221B15'],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0\r
202,90,https://www.twoinchbrush.com/images/painting90.png,Deep Woods,16,7,10,https://www.youtube.com/embed/rE5ZVs_YJfE,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1\r
203,91,https://www.twoinchbrush.com/images/painting91.png,High Tide,16,8,12,https://www.youtube.com/embed/_IREQ4SIcX8,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
204,93,https://www.twoinchbrush.com/images/painting93.png,Barn in Snow Oval,16,9,7,https://www.youtube.com/embed/wJmi7-G9r-w,"['Alizarin Crimson', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#5F2E1F', '#000000', '#0C0040', '#FFFFFF', '#221B15', '#C79B00']",0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1\r
205,94,https://www.twoinchbrush.com/images/painting94.png,That Time of Year,16,10,9,https://www.youtube.com/embed/q5moLoqOkP0,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#FFEC00', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15']",0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1\r
206,95,https://www.twoinchbrush.com/images/painting95.png,Waterfall Wonder,16,11,11,https://www.youtube.com/embed/AGhXEPfp-W4,"['Alizarin Crimson', 'Black Gesso', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
207,96,https://www.twoinchbrush.com/images/painting96.png,Mighty Mountain Lake,16,12,11,https://www.youtube.com/embed/4vXB2R8ybDE,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1\r
208,97,https://www.twoinchbrush.com/images/painting97.png,Wooded Stream Oval,16,13,12,https://www.youtube.com/embed/-XA2h17y3HU,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
209,71,https://www.twoinchbrush.com/images/painting71.png,Golden Mist Oval,17,1,9,https://www.youtube.com/embed/lhpfaW0k6uM,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1\r
210,72,https://www.twoinchbrush.com/images/painting72.png,The Old Home Place,17,2,11,https://www.youtube.com/embed/EVQcDEiJh2o,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
211,73,https://www.twoinchbrush.com/images/painting73.png,Soothing Vista,17,3,13,https://www.youtube.com/embed/NqfRLiv0SZ0,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
212,74,https://www.twoinchbrush.com/images/painting74.png,Stormy Seas,17,4,9,https://www.youtube.com/embed/LE6agCR5iBw,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1\r
213,75,https://www.twoinchbrush.com/images/painting75.png,Country Time,17,5,13,https://www.youtube.com/embed/e_bt9rQoGN0,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1\r
214,76,https://www.twoinchbrush.com/images/painting76.png,A Mild Winter's Day,17,6,10,https://www.youtube.com/embed/BbYO579MmhA,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1\r
215,77,https://www.twoinchbrush.com/images/painting77.png,Spectacular Waterfall,17,7,15,https://www.youtube.com/embed/nK-HebXL2uw,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1\r
216,78,https://www.twoinchbrush.com/images/painting78.png,View from the Park,17,8,13,https://www.youtube.com/embed/Q4n90jsOUtY,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1\r
217,79,https://www.twoinchbrush.com/images/painting79.png,Lake View,17,9,12,https://www.youtube.com/embed/07acfzBaoa0,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
218,80,https://www.twoinchbrush.com/images/painting80.png,Old Country Mill,17,10,11,https://www.youtube.com/embed/n8HlFCQACYA,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
219,81,https://www.twoinchbrush.com/images/painting81.png,Morning Walk,17,11,12,https://www.youtube.com/embed/pSvgNkQdR2Y,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1\r
220,82,https://www.twoinchbrush.com/images/painting82.png,Nature's Splendor,17,12,13,https://www.youtube.com/embed/uCAtI2IwEwk,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
221,83,https://www.twoinchbrush.com/images/painting83.png,Mountain Beauty,17,13,11,https://www.youtube.com/embed/8P-YeoTmVrw,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
222,58,https://www.twoinchbrush.com/images/painting58.png,Half-Oval Vignette,18,1,12,https://www.youtube.com/embed/uY3fIry2tOE,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
223,59,https://www.twoinchbrush.com/images/painting59.png,Absolutely Autumn,18,2,11,https://www.youtube.com/embed/PGPVpil2UmE,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
224,60,https://www.twoinchbrush.com/images/painting60.png,Mountain Seclusion,18,3,10,https://www.youtube.com/embed/EBZKuVbRY54,"['Alizarin Crimson', 'Black Gesso', 'Cadmium Yellow', 'Dark Sienna', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#000000', '#FFEC00', '#5F2E1F', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15']",1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1\r
225,61,https://www.twoinchbrush.com/images/painting61.png,Crimson Oval,18,4,12,https://www.youtube.com/embed/R7Y3izMFPbM,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
226,62,https://www.twoinchbrush.com/images/painting62.png,Autumn Exhibition,18,5,11,https://www.youtube.com/embed/6afHY2d9Lv8,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
227,63,https://www.twoinchbrush.com/images/painting63.png,Majestic Peaks,18,6,13,https://www.youtube.com/embed/lilbzLCNnDo,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1\r
228,64,https://www.twoinchbrush.com/images/painting64.png,Golden Morning Mist,18,7,12,https://www.youtube.com/embed/rCHXqj4DHlM,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
229,65,https://www.twoinchbrush.com/images/painting65.png,Winter Lace,18,8,8,https://www.youtube.com/embed/WJF_qoQRPck,"['Alizarin Crimson', 'Bright Red', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15']",0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1\r
230,66,https://www.twoinchbrush.com/images/painting66.png,Seascape Fantasy,18,9,11,https://www.youtube.com/embed/sBBBilrDuSw,"['Alizarin Crimson', 'Black Gesso', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
231,67,https://www.twoinchbrush.com/images/painting67.png,Double Oval Stream,18,10,13,https://www.youtube.com/embed/rRjnHdr9DmU,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Black', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1\r
232,68,https://www.twoinchbrush.com/images/painting68.png,Enchanted Forest,18,11,12,https://www.youtube.com/embed/ikR7UT9mVBw,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
233,69,https://www.twoinchbrush.com/images/painting69.png,Southwest Serenity,18,12,10,https://www.youtube.com/embed/EVfPPJ5FUmA,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1\r
234,70,https://www.twoinchbrush.com/images/painting70.png,Rippling Waters,18,13,12,https://www.youtube.com/embed/XvnJBynSiT0,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Black', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1\r
235,44,https://www.twoinchbrush.com/images/painting44.png,Snowfall Magic,19,1,10,https://www.youtube.com/embed/1enWTsRi16o,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1\r
236,45,https://www.twoinchbrush.com/images/painting45.png,Quiet Mountain Lake,19,2,14,https://www.youtube.com/embed/2gq2V6dCt2I,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1\r
237,46,https://www.twoinchbrush.com/images/painting46.png,Final Embers of Sunlight,19,3,12,https://www.youtube.com/embed/IeFbdk36MUU,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
238,47,https://www.twoinchbrush.com/images/painting47.png,Snowy Morn,19,4,7,https://www.youtube.com/embed/iB1TDWlo0kk,"['Alizarin Crimson', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#5F2E1F', '#000000', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1\r
239,48,https://www.twoinchbrush.com/images/painting48.png,Camper's Haven,19,5,11,https://www.youtube.com/embed/C34WAUgkAT0,"['Alizarin Crimson', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
240,49,https://www.twoinchbrush.com/images/painting49.png,Waterfall in the Woods,19,6,14,https://www.youtube.com/embed/uBRKVa7sy1Q,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1\r
241,50,https://www.twoinchbrush.com/images/painting50.png,Covered Bridge Oval,19,7,10,https://www.youtube.com/embed/F4iPbH1OHsQ,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1\r
242,51,https://www.twoinchbrush.com/images/painting51.png,Scenic Seclusion,19,8,13,https://www.youtube.com/embed/d50HkqB9JEM,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1\r
243,52,https://www.twoinchbrush.com/images/painting52.png,Ebb Tide,19,9,10,https://www.youtube.com/embed/mFOna_LN7Ys,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFFFFF', '#000000', '#0C0040', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1\r
244,53,https://www.twoinchbrush.com/images/painting53.png,After the Rain,19,10,12,https://www.youtube.com/embed/Wj-3ct7RvAI,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
245,54,https://www.twoinchbrush.com/images/painting54.png,Winter Elegance,19,11,9,https://www.youtube.com/embed/JjBZzKp_u5E,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1\r
246,56,https://www.twoinchbrush.com/images/painting56.png,Evening's Peace,19,12,10,https://www.youtube.com/embed/uEUMVwc4o5U,"['Alizarin Crimson', 'Black Gesso', 'Cadmium Yellow', 'Dark Sienna', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#000000', '#FFEC00', '#5F2E1F', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15']",1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1\r
247,57,https://www.twoinchbrush.com/images/painting57.png,Valley of Tranquility,19,13,13,https://www.youtube.com/embed/FnY7jDY5PsE,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1\r
248,31,https://www.twoinchbrush.com/images/painting31.png,Mystic Mountain,20,1,12,https://www.youtube.com/embed/VlucWfTUo1A,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
249,32,https://www.twoinchbrush.com/images/painting32.png,New Day's Dawn,20,2,12,https://www.youtube.com/embed/vbPdQ0w8ylg,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1\r
250,33,https://www.twoinchbrush.com/images/painting33.png,Winter in Pastel,20,3,9,https://www.youtube.com/embed/kbnXZRNMouM,"['Alizarin Crimson', 'Bright Red', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1\r
251,34,https://www.twoinchbrush.com/images/painting34.png,Hazy Day,20,4,11,https://www.youtube.com/embed/5U3G61r35Mc,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
252,35,https://www.twoinchbrush.com/images/painting35.png,Divine Elegance,20,5,12,https://www.youtube.com/embed/mb-Gwx1S5Gs,"['Alizarin Crimson', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1\r
253,36,https://www.twoinchbrush.com/images/painting36.png,Cliffside,20,6,12,https://www.youtube.com/embed/p6Uy2qOLvGk,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
254,37,https://www.twoinchbrush.com/images/painting37.png,Autumn Fantasy,20,7,11,https://www.youtube.com/embed/FozIp7Va7dY,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
255,38,https://www.twoinchbrush.com/images/painting38.png,The Old Oak Tree,20,8,13,https://www.youtube.com/embed/dN4HjAn8p5U,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1\r
256,39,https://www.twoinchbrush.com/images/painting39.png,Winter Paradise,20,9,6,https://www.youtube.com/embed/DY1aBv8Z1SQ,"['Alizarin Crimson', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White']","['#4E1500', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#FFFFFF']",0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1\r
257,40,https://www.twoinchbrush.com/images/painting40.png,Days Gone By,20,10,12,https://www.youtube.com/embed/DmYhNHVIdMI,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
258,41,https://www.twoinchbrush.com/images/painting41.png,Change of Seasons,20,11,12,https://www.youtube.com/embed/QbgPu5f2Vf8,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
259,42,https://www.twoinchbrush.com/images/painting42.png,Hidden Delight,20,12,11,https://www.youtube.com/embed/ZyPNzDaaDt8,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
260,43,https://www.twoinchbrush.com/images/painting43.png,Double Take,20,13,13,https://www.youtube.com/embed/ppzFgG2K2k4,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1\r
261,17,https://www.twoinchbrush.com/images/painting17.png,Valley View,21,1,13,https://www.youtube.com/embed/pw5ETGiiBRg,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
262,18,https://www.twoinchbrush.com/images/painting18.png,Tranquil Dawn,21,2,10,https://www.youtube.com/embed/4abDq6Q-mlM,"['Alizarin Crimson', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#FFFFFF', '#221B15', '#C79B00']",0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1\r
263,19,https://www.twoinchbrush.com/images/painting19.png,Royal Majesty,21,3,14,https://www.youtube.com/embed/ubUXBqE6t0U,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1\r
264,20,https://www.twoinchbrush.com/images/painting20.png,Serenity,21,4,12,https://www.youtube.com/embed/crqmO3qDdco,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
265,21,https://www.twoinchbrush.com/images/painting21.png,Cabin at Trails End,21,5,13,https://www.youtube.com/embed/GLkLO4KqTRs,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1\r
266,22,https://www.twoinchbrush.com/images/painting22.png,Mountain Rhapsody,21,6,8,https://www.youtube.com/embed/H4VsmKU5T7g,"['Alizarin Crimson', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#FFFFFF', '#221B15', '#C79B00']",0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1\r
267,23,https://www.twoinchbrush.com/images/painting23.png,Wilderness Cabin,21,7,14,https://www.youtube.com/embed/GWehiacnd1E,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1\r
268,24,https://www.twoinchbrush.com/images/painting24.png,By the Sea,21,8,13,https://www.youtube.com/embed/8tHHBTK6wwc,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1\r
269,25,https://www.twoinchbrush.com/images/painting25.png,Indian Summer,21,9,13,https://www.youtube.com/embed/pfWV8NkotvU,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
270,27,https://www.twoinchbrush.com/images/painting27.png,Blue Winter,21,10,3,https://www.youtube.com/embed/liR0gS0sZY0,"['Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Titanium White']","['#000000', '#021E44', '#FFFFFF']",0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0\r
271,28,https://www.twoinchbrush.com/images/painting28.png,Desert Glow,21,11,9,https://www.youtube.com/embed/QyncJfL_HmU,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#C79B00']",0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1\r
272,29,https://www.twoinchbrush.com/images/painting29.png,Lone Mountain,21,12,13,https://www.youtube.com/embed/NJbzIftLLmU,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1\r
273,30,https://www.twoinchbrush.com/images/painting30.png,Florida's Glory,21,13,11,https://www.youtube.com/embed/HQC5sPN9Xhc,"['Alizarin Crimson', 'Cadmium Yellow', 'Dark Sienna', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#FFEC00', '#5F2E1F', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1\r
274,14,https://www.twoinchbrush.com/images/painting14.png,Autumn Images,22,1,11,https://www.youtube.com/embed/HMx34Am6RFg,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Red', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#CD5C5C', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1\r
275,15,https://www.twoinchbrush.com/images/painting15.png,Hint of Springtime,22,2,13,https://www.youtube.com/embed/C-OSaHvt8ms,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1\r
276,16,https://www.twoinchbrush.com/images/painting16.png,Around the Bend,22,3,14,https://www.youtube.com/embed/Kl5X3icOVvw,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1\r
277,4,https://www.twoinchbrush.com/images/painting4.png,Countryside Oval,22,4,12,https://www.youtube.com/embed/hdNH5axK4u0,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
278,5,https://www.twoinchbrush.com/images/painting5.png,Russet Winter,22,5,9,https://www.youtube.com/embed/aE4nID1p-t0,"['Alizarin Crimson', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#FFFFFF', '#221B15', '#C79B00']",0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1\r
279,6,https://www.twoinchbrush.com/images/painting6.png,Purple Haze,22,6,11,https://www.youtube.com/embed/ZoJ2tcXWb7g,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
280,7,https://www.twoinchbrush.com/images/painting7.png,Dimensions,22,7,12,https://www.youtube.com/embed/JUuP75RVZDI,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
281,8,https://www.twoinchbrush.com/images/painting8.png,Deep Wilderness Home,22,8,12,https://www.youtube.com/embed/uZWNvDFfbUk,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
282,9,https://www.twoinchbrush.com/images/painting9.png,Haven in the Valley,22,9,13,https://www.youtube.com/embed/Qccgam514ds,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1\r
283,10,https://www.twoinchbrush.com/images/painting10.png,Wintertime Blues,22,10,7,https://www.youtube.com/embed/dbMJVM4iL2Q,"['Alizarin Crimson', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15']",0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1\r
284,11,https://www.twoinchbrush.com/images/painting11.png,Pastel Seascape,22,11,11,https://www.youtube.com/embed/K4aud_SpFDQ,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
285,12,https://www.twoinchbrush.com/images/painting12.png,Country Creek,22,12,13,https://www.youtube.com/embed/JDa6JPcqy88,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
286,13,https://www.twoinchbrush.com/images/painting13.png,Silent Forest,22,13,13,https://www.youtube.com/embed/AE1GKcL3NuI,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1\r
287,295,https://www.twoinchbrush.com/images/painting295.png,Frosty Winter Morn,23,1,8,https://www.youtube.com/embed/1-9_enMBquw,"['Alizarin Crimson', 'Cadmium Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#FFEC00', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15']",0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1\r
288,296,https://www.twoinchbrush.com/images/painting296.png,Forest Edge,23,2,12,https://www.youtube.com/embed/puGk2iFvvp0,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1\r
289,297,https://www.twoinchbrush.com/images/painting297.png,Mountain Ridge Lake,23,3,12,https://www.youtube.com/embed/Hq-z06i6HCs,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
290,298,https://www.twoinchbrush.com/images/painting298.png,Reflections of Gold,23,4,10,https://www.youtube.com/embed/8f9CCnqJ_1Y,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1\r
291,299,https://www.twoinchbrush.com/images/painting299.png,Quiet Cove,23,5,11,https://www.youtube.com/embed/cR9hTbSomx4,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1\r
292,300,https://www.twoinchbrush.com/images/painting300.png,Rivers Peace,23,6,13,https://www.youtube.com/embed/flCWS9LB4Ks,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
293,301,https://www.twoinchbrush.com/images/painting301.png,At Dawn's Light,23,7,9,https://www.youtube.com/embed/HFdTxqEznIk,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#000000', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1\r
294,302,https://www.twoinchbrush.com/images/painting302.png,Valley Waterfall,23,8,15,https://www.youtube.com/embed/VYcsYzzRae4,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1\r
295,303,https://www.twoinchbrush.com/images/painting303.png,Toward Days End,23,9,13,https://www.youtube.com/embed/cFi_fJl40BA,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1\r
296,304,https://www.twoinchbrush.com/images/painting304.png,Falls in the Glen,23,10,14,https://www.youtube.com/embed/txAtX-VyVNc,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1\r
297,305,https://www.twoinchbrush.com/images/painting305.png,Frozen Beauty in Vignette,23,11,9,https://www.youtube.com/embed/H15kV1wbDG4,"['Bright Red', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#DB0000', '#5F2E1F', '#000000', '#0C0040', '#102E3C', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0\r
298,306,https://www.twoinchbrush.com/images/painting306.png,Crimson Tide,23,12,8,https://www.youtube.com/embed/Y7SDU4i6Fco,"['Alizarin Crimson', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#FFFFFF', '#221B15', '#C79B00']",0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1\r
299,307,https://www.twoinchbrush.com/images/painting307.png,Winter Bliss,23,13,7,https://www.youtube.com/embed/yInYwy6AsDQ,"['Alizarin Crimson', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15']",0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1\r
300,308,https://www.twoinchbrush.com/images/painting308.png,Gray Mountain,24,1,13,https://www.youtube.com/embed/4XxClvPZ1RE,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1\r
301,309,https://www.twoinchbrush.com/images/painting309.png,Wayside Pond,24,2,11,https://www.youtube.com/embed/FPW2FwK4IOo,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1\r
302,310,https://www.twoinchbrush.com/images/painting310.png,Teton Winter,24,3,6,https://www.youtube.com/embed/I4h6TC4CPJY,"['Alizarin Crimson', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White']","['#4E1500', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF']",0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1\r
303,311,https://www.twoinchbrush.com/images/painting311.png,Little Home in the Meadow,24,4,12,https://www.youtube.com/embed/nU1zV93N-kI,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#C79B00']",1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1\r
304,312,https://www.twoinchbrush.com/images/painting312.png,A Pretty Autumn Day,24,5,13,https://www.youtube.com/embed/HWedDS3p7XI,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#C79B00']",1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1\r
305,313,https://www.twoinchbrush.com/images/painting313.png,Mirrored Images,24,6,12,https://www.youtube.com/embed/i29frkR1T98,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
306,314,https://www.twoinchbrush.com/images/painting314.png,Back-Country Path,24,7,11,https://www.youtube.com/embed/2iNMoQB1Pe8,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#C79B00']",1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1\r
307,315,https://www.twoinchbrush.com/images/painting315.png,Graceful Waterfall,24,8,15,https://www.youtube.com/embed/fBh1nA4pMDY,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1\r
308,316,https://www.twoinchbrush.com/images/painting316.png,Icy Lake,24,9,11,https://www.youtube.com/embed/AmBDmgta3l4,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1\r
309,317,https://www.twoinchbrush.com/images/painting317.png,Rowboat on the Beach,24,10,8,https://www.youtube.com/embed/hfvhXOvg43w,"['Alizarin Crimson', 'Cadmium Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Sap Green', 'Titanium White', 'Yellow Ochre']","['#4E1500', '#FFEC00', '#000000', '#0C0040', '#102E3C', '#0A3410', '#FFFFFF', '#C79B00']",0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1\r
310,318,https://www.twoinchbrush.com/images/painting318.png,Portrait of Winter,24,11,5,https://www.youtube.com/embed/JLnIUGOupOA,"['Alizarin Crimson', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White']","['#4E1500', '#000000', '#0C0040', '#021E44', '#FFFFFF']",0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1\r
311,319,https://www.twoinchbrush.com/images/painting319.png,The Footbridge,24,12,13,https://www.youtube.com/embed/RqtDliGeyTg,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1\r
312,320,https://www.twoinchbrush.com/images/painting320.png,Snowbound Cabin,24,13,8,https://www.youtube.com/embed/obSLZWXmDak,"['Alizarin Crimson', 'Black Gesso', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White']","['#4E1500', '#000000', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF']",1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1\r
313,321,https://www.twoinchbrush.com/images/painting321.png,Hide A Way Cove,25,1,13,https://www.youtube.com/embed/l_HqMYquc08,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1\r
314,322,https://www.twoinchbrush.com/images/painting322.png,Enchanted Falls Oval,25,2,6,https://www.youtube.com/embed/HklPkQ0lSKA,"['Alizarin Crimson', 'Black Gesso', 'Indian Yellow', 'Sap Green', 'Titanium White', 'Yellow Ochre']","['#4E1500', '#000000', '#FFB800', '#0A3410', '#FFFFFF', '#C79B00']",1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1\r
315,323,https://www.twoinchbrush.com/images/painting323.png,Not Quite Spring,25,3,9,https://www.youtube.com/embed/N_u6x7LeyTM,"['Alizarin Crimson', 'Black Gesso', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#FFEC00', '#5F2E1F', '#000000', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1\r
316,324,https://www.twoinchbrush.com/images/painting324.png,Splashes of Autumn,25,4,14,https://www.youtube.com/embed/YcbaMqq_X8s,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1\r
317,325,https://www.twoinchbrush.com/images/painting325.png,Summer in the Mountain,25,5,11,https://www.youtube.com/embed/gmCXgS38NDc,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1\r
318,326,https://www.twoinchbrush.com/images/painting326.png,Oriental Falls,25,6,11,https://www.youtube.com/embed/v8Znj8bbmCQ,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1\r
319,327,https://www.twoinchbrush.com/images/painting327.png,Autumn Palette,25,7,13,https://www.youtube.com/embed/HWrvW-NgaOY,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1\r
320,328,https://www.twoinchbrush.com/images/painting328.png,Cypress Swamp,25,8,12,https://www.youtube.com/embed/FdIUHudQABI,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
321,329,https://www.twoinchbrush.com/images/painting329.png,Downstream View,25,9,14,https://www.youtube.com/embed/KsDPg5HZYNw,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1\r
322,330,https://www.twoinchbrush.com/images/painting330.png,Just Before the Storm,25,10,8,https://www.youtube.com/embed/Rh-jKrMrmOA,"['Alizarin Crimson', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#FFEC00', '#5F2E1F', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15']",0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1\r
323,331,https://www.twoinchbrush.com/images/painting331.png,Fisherman's Paradise,25,11,12,https://www.youtube.com/embed/uJLK85uU5mA,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1\r
324,332,https://www.twoinchbrush.com/images/painting332.png,Desert Hues,25,12,11,https://www.youtube.com/embed/UUNNXGVNTuI,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1\r
325,333,https://www.twoinchbrush.com/images/painting333.png,The Property Line,25,13,11,https://www.youtube.com/embed/ivesI3rU7dU,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1\r
326,334,https://www.twoinchbrush.com/images/painting334.png,In the Stillness of Morning,26,1,10,https://www.youtube.com/embed/5rfGa1_iJpw,"['Alizarin Crimson', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1\r
327,335,https://www.twoinchbrush.com/images/painting335.png,Delightful Meadow Home,26,2,9,https://www.youtube.com/embed/tWoInh2USOs,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#C79B00']",0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1\r
328,336,https://www.twoinchbrush.com/images/painting336.png,First Snow,26,3,12,https://www.youtube.com/embed/raAkJKeo0Sk,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
329,337,https://www.twoinchbrush.com/images/painting337.png,Lake in the Valley,26,4,15,https://www.youtube.com/embed/KvJmSrErm20,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1\r
330,338,https://www.twoinchbrush.com/images/painting338.png,A Trace of Spring,26,5,13,https://www.youtube.com/embed/JMPwj3u4ZTA,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1\r
331,339,https://www.twoinchbrush.com/images/painting339.png,An Arctic Winter Day,26,6,6,https://www.youtube.com/embed/9BHWlbjd95c,"['Alizarin Crimson', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#5F2E1F', '#000000', '#021E44', '#FFFFFF', '#221B15']",0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1\r
332,340,https://www.twoinchbrush.com/images/painting340.png,Snow Birch,26,7,5,https://www.youtube.com/embed/wKeemvioVrM,"['Black Gesso', 'Indian Yellow', 'Phthalo Blue', 'Prussian Blue', 'Titanium White']","['#000000', '#FFB800', '#0C0040', '#021E44', '#FFFFFF']",1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0\r
333,341,https://www.twoinchbrush.com/images/painting341.png,Early Autumn,26,8,12,https://www.youtube.com/embed/SLQXlFLoqQc,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
334,342,https://www.twoinchbrush.com/images/painting342.png,Tranquil Wooded Stream,26,9,12,https://www.youtube.com/embed/lSeRrm5ZK9c,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
335,343,https://www.twoinchbrush.com/images/painting343.png,Purple Mountain Range,26,10,13,https://www.youtube.com/embed/nkDA_R-XmqA,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1\r
336,344,https://www.twoinchbrush.com/images/painting344.png,Storm's A Comin,26,11,10,https://www.youtube.com/embed/EHD9u-lo2wc,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#102E3C', '#FFFFFF', '#221B15']",1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1\r
337,345,https://www.twoinchbrush.com/images/painting345.png,Sunset Aglow,26,12,12,https://www.youtube.com/embed/gMEZp47VKC0,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
338,346,https://www.twoinchbrush.com/images/painting346.png,Evening at the Falls,26,13,7,https://www.youtube.com/embed/RulXVcpgpqw,"['Black Gesso', 'Cadmium Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White']","['#000000', '#FFEC00', '#FFFFFF', '#000000', '#021E44', '#0A3410', '#FFFFFF']",1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0\r
339,347,https://www.twoinchbrush.com/images/painting347.png,Twilight Beauty,27,1,11,https://www.youtube.com/embed/0mJqzzeWyXs,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#FFFFFF', '#221B15']",1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1\r
340,348,https://www.twoinchbrush.com/images/painting348.png,Angler's Haven,27,2,15,https://www.youtube.com/embed/XlwfcXZ0AIU,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Black', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#FFFFFF', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1\r
341,349,https://www.twoinchbrush.com/images/painting349.png,Rustic Winter Woods,27,3,6,https://www.youtube.com/embed/3q8Zi9480lw,"['Alizarin Crimson', 'Cadmium Yellow', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Sap Green', 'Titanium White']","['#4E1500', '#FFEC00', '#FFB800', '#000000', '#0A3410', '#FFFFFF']",0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1\r
342,350,https://www.twoinchbrush.com/images/painting350.png,Wilderness Falls,27,4,15,https://www.youtube.com/embed/gxd0MPX8c6I,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Black', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#FFFFFF', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1\r
343,351,https://www.twoinchbrush.com/images/painting351.png,Winter at the Farm,27,5,7,https://www.youtube.com/embed/LeIVNKnWz7o,"['Alizarin Crimson', 'Dark Sienna', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#5F2E1F', '#FFFFFF', '#000000', '#021E44', '#FFFFFF', '#221B15']",0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1\r
344,352,https://www.twoinchbrush.com/images/painting352.png,Daisies at Dawn,27,6,8,https://www.youtube.com/embed/_kkZcIgocBM,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Sap Green', 'Titanium White', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#FFB800', '#000000', '#0A3410', '#FFFFFF', '#C79B00']",0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1\r
345,353,https://www.twoinchbrush.com/images/painting353.png,A Spectacular View,27,7,11,https://www.youtube.com/embed/7R9HcaDT9P4,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1\r
346,354,https://www.twoinchbrush.com/images/painting354.png,Daybreak,27,8,7,https://www.youtube.com/embed/crWDcTvDmec,"['Alizarin Crimson', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#FFEC00', '#5F2E1F', '#000000', '#021E44', '#FFFFFF', '#221B15']",0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1\r
347,355,https://www.twoinchbrush.com/images/painting355.png,Island Paradise,27,9,12,https://www.youtube.com/embed/Cg3XAVhAas0,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#102E3C', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1\r
348,356,https://www.twoinchbrush.com/images/painting356.png,Sunlight in the Shadows,27,10,7,https://www.youtube.com/embed/xgjQ0v2d9mE,"['Alizarin Crimson', 'Black Gesso', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#FFFFFF', '#000000', '#FFFFFF', '#221B15', '#C79B00']",1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1\r
349,357,https://www.twoinchbrush.com/images/painting357.png,Splendor of a Snowy Winter,27,11,9,https://www.youtube.com/embed/JdXCoxkOdwQ,"['Alizarin Crimson', 'Dark Sienna', 'Liquid Black', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#5F2E1F', '#000000', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15']",0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1\r
350,358,https://www.twoinchbrush.com/images/painting358.png,Forest River,27,12,14,https://www.youtube.com/embed/wrbGlR22K0Q,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1\r
351,359,https://www.twoinchbrush.com/images/painting359.png,Golden Glow of Morning,27,13,9,https://www.youtube.com/embed/qXElmiqzcI0,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#C79B00']",0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1\r
352,360,https://www.twoinchbrush.com/images/painting360.png,Fisherman's Trail,28,1,12,https://www.youtube.com/embed/VnZEpic2UzU,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
353,361,https://www.twoinchbrush.com/images/painting361.png,A Warm Winter,28,2,9,https://www.youtube.com/embed/_TTdw3YnXuo,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#C79B00']",0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1\r
354,362,https://www.twoinchbrush.com/images/painting362.png,Under Pastel Skies,28,3,12,https://www.youtube.com/embed/lzODyJS2ZIg,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
355,363,https://www.twoinchbrush.com/images/painting363.png,Golden Rays of Sunshine,28,4,8,https://www.youtube.com/embed/zxj3xLDNxo0,"['Alizarin Crimson', 'Black Gesso', 'Indian Yellow', 'Liquid Clear', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White']","['#4E1500', '#000000', '#FFB800', '#FFFFFF', '#0C0040', '#021E44', '#0A3410', '#FFFFFF']",1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1\r
356,364,https://www.twoinchbrush.com/images/painting364.png,The Magic of Fall,28,5,10,https://www.youtube.com/embed/bSm3fmEyJ20,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#C79B00']",0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1\r
357,365,https://www.twoinchbrush.com/images/painting365.png,Glacier Lake,28,6,12,https://www.youtube.com/embed/TohG7F8M3Ls,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
358,366,https://www.twoinchbrush.com/images/painting366.png,The Old Weathered Barn,28,7,9,https://www.youtube.com/embed/NYUIIBFj0iQ,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#C79B00']",0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1\r
359,367,https://www.twoinchbrush.com/images/painting367.png,Deep Forest Falls,28,8,13,https://www.youtube.com/embed/urHQRbRNuYI,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
360,368,https://www.twoinchbrush.com/images/painting368.png,Winter's Grace,28,9,4,https://www.youtube.com/embed/mxJ2On9wyvY,"['Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White']","['#000000', '#0C0040', '#021E44', '#FFFFFF']",0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0\r
361,369,https://www.twoinchbrush.com/images/painting369.png,Splendor of Autumn,28,10,11,https://www.youtube.com/embed/hEyR2FDp-00,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
362,370,https://www.twoinchbrush.com/images/painting370.png,Tranquil Seas,28,11,11,https://www.youtube.com/embed/kN1DP_yqs-A,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Sap Green', 'Titanium White', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#FFB800', '#000000', '#0C0040', '#102E3C', '#0A3410', '#FFFFFF', '#C79B00']",1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1\r
363,371,https://www.twoinchbrush.com/images/painting371.png,Mountain Serenity,28,12,13,https://www.youtube.com/embed/wc_YVijYjT4,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1\r
364,372,https://www.twoinchbrush.com/images/painting372.png,Home Before Nightfall,28,13,8,https://www.youtube.com/embed/22SiIDvyJeM,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#C79B00']",0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1\r
365,373,https://www.twoinchbrush.com/images/painting373.png,Island in the Wilderness,29,1,13,https://www.youtube.com/embed/lLWEXRAnQd0,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1\r
366,374,https://www.twoinchbrush.com/images/painting374.png,Autumn Oval,29,2,10,https://www.youtube.com/embed/2XnIdinwot0,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1\r
367,375,https://www.twoinchbrush.com/images/painting375.png,Seasonal Progression,29,3,13,https://www.youtube.com/embed/T2G5waMfQ-g,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1\r
368,376,https://www.twoinchbrush.com/images/painting376.png,Light at the Summit,29,4,14,https://www.youtube.com/embed/HOdS-G8p1KE,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1\r
369,377,https://www.twoinchbrush.com/images/painting377.png,Countryside Barn,29,5,12,https://www.youtube.com/embed/G7Etn7QMeO4,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
370,378,https://www.twoinchbrush.com/images/painting378.png,Mountain Lake Falls,29,6,9,https://www.youtube.com/embed/dNEp3hoHSDI,"['Alizarin Crimson', 'Cadmium Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#FFEC00', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15']",0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1\r
371,379,https://www.twoinchbrush.com/images/painting379.png,Cypress Creek,29,7,11,https://www.youtube.com/embed/Tnb2cXKKuWM,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1\r
372,380,https://www.twoinchbrush.com/images/painting380.png,Trapper's Cabin,29,8,12,https://www.youtube.com/embed/chhCkmp0RG8,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
373,381,https://www.twoinchbrush.com/images/painting381.png,Storm on the Horizon,29,9,9,https://www.youtube.com/embed/pA_2paUhBAQ,"['Alizarin Crimson', 'Bright Red', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#5F2E1F', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1\r
374,382,https://www.twoinchbrush.com/images/painting382.png,Pot O' Posies,29,10,6,https://www.youtube.com/embed/2zv_S_uVoVQ,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green']","['#4E1500', '#000000', '#DB0000', '#000000', '#021E44', '#0A3410']",1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1\r
375,383,https://www.twoinchbrush.com/images/painting383.png,A Perfect Winter Day,29,11,7,https://www.youtube.com/embed/Io4fwhacpEs,"['Alizarin Crimson', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15']",0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1\r
376,384,https://www.twoinchbrush.com/images/painting384.png,Aurora's Dance,29,12,9,https://www.youtube.com/embed/iRMsb9Vf7GM,"['Alizarin Crimson', 'Dark Sienna', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#5F2E1F', '#FFFFFF', '#000000', '#0C0040', '#102E3C', '#021E44', '#FFFFFF', '#221B15']",0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1\r
377,385,https://www.twoinchbrush.com/images/painting385.png,Woodman's Retreat,29,13,12,https://www.youtube.com/embed/ODrV0dfQcNs,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
378,386,https://www.twoinchbrush.com/images/painting386.png,Babbling Brook,30,1,12,https://www.youtube.com/embed/ZHUdS0wEaKk,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
379,387,https://www.twoinchbrush.com/images/painting387.png,Woodgrain View,30,2,13,https://www.youtube.com/embed/fcx1yUuSf3o,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1\r
380,388,https://www.twoinchbrush.com/images/painting388.png,Winter's Peace,30,3,10,https://www.youtube.com/embed/Xzv3iiWi1Wo,"['Alizarin Crimson', 'Bright Red', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1\r
381,389,https://www.twoinchbrush.com/images/painting389.png,Wilderness Trail,30,4,13,https://www.youtube.com/embed/vGsW_6BCukU,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1\r
382,390,https://www.twoinchbrush.com/images/painting390.png,A Copper Winter,30,5,13,https://www.youtube.com/embed/BSjee-ond7w,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1\r
383,391,https://www.twoinchbrush.com/images/painting391.png,Misty Foothills,30,6,10,https://www.youtube.com/embed/LEz4UVL7POE,"['Alizarin Crimson', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1\r
384,392,https://www.twoinchbrush.com/images/painting392.png,Through the Window,30,7,7,https://www.youtube.com/embed/SrN4A9rVXj0,"['Alizarin Crimson', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15']",0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1\r
385,393,https://www.twoinchbrush.com/images/painting393.png,Home in the Valley,30,8,13,https://www.youtube.com/embed/enutOy-nsZk,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1\r
386,394,https://www.twoinchbrush.com/images/painting394.png,Mountains of Grace,30,9,11,https://www.youtube.com/embed/nXlu_Q0sR7c,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1\r
387,395,https://www.twoinchbrush.com/images/painting395.png,Seaside Harmony,30,10,12,https://www.youtube.com/embed/CY6sGFs209E,"['Alizarin Crimson', 'Black Gesso', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#000000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15']",1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1\r
388,396,https://www.twoinchbrush.com/images/painting396.png,A Cold Spring Day,30,11,13,https://www.youtube.com/embed/jq8bIbpW7DQ,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1\r
389,397,https://www.twoinchbrush.com/images/painting397.png,Evening's Glow,30,12,10,https://www.youtube.com/embed/eTEKGOi6SVg,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1\r
390,398,https://www.twoinchbrush.com/images/painting398.png,Blue Ridge Falls,30,13,12,https://www.youtube.com/embed/fz0YjqtHW84,"['Alizarin Crimson', 'Black Gesso', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
391,399,https://www.twoinchbrush.com/images/painting399.png,Reflections of Calm,31,1,12,https://www.youtube.com/embed/kJFB6rH3z2A,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
392,400,https://www.twoinchbrush.com/images/painting400.png,Before the Snowfall,31,2,7,https://www.youtube.com/embed/_MdMhQIOL1Y,"['Alizarin Crimson', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15']",0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1\r
393,401,https://www.twoinchbrush.com/images/painting401.png,Winding Stream,31,3,13,https://www.youtube.com/embed/QDwd4pMYyuo,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Black', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1\r
394,402,https://www.twoinchbrush.com/images/painting402.png,Tranquility Cove,31,4,11,https://www.youtube.com/embed/7t6ue0pEcNE,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
395,403,https://www.twoinchbrush.com/images/painting403.png,Cabin in the Hollow,31,5,7,https://www.youtube.com/embed/KYlM2zJnNWY,"['Alizarin Crimson', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15']",0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1\r
396,404,https://www.twoinchbrush.com/images/painting404.png,View from Clear Creek,31,6,13,https://www.youtube.com/embed/TLX1bmS8wBE,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1\r
397,405,https://www.twoinchbrush.com/images/painting405.png,Bridge to Autumn,31,7,11,https://www.youtube.com/embed/ReENCTH7MYI,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1\r
398,406,https://www.twoinchbrush.com/images/painting406.png,Trail's End,31,8,10,https://www.youtube.com/embed/XWQrP-WiLgc,"['Alizarin Crimson', 'Black Gesso', 'Dark Sienna', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#5F2E1F', '#FFFFFF', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1\r
399,407,https://www.twoinchbrush.com/images/painting407.png,Evergreen Valley,31,9,14,https://www.youtube.com/embed/mEU0stNfkxI,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Black', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1\r
400,408,https://www.twoinchbrush.com/images/painting408.png,Balmy Beach,31,10,13,https://www.youtube.com/embed/kMgd6r6c4vE,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#102E3C', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1\r
401,409,https://www.twoinchbrush.com/images/painting409.png,Lake at the Ridge,31,11,12,https://www.youtube.com/embed/8QWvzEQ69Kw,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1\r
402,410,https://www.twoinchbrush.com/images/painting410.png,In the Midst of Winter,31,12,7,https://www.youtube.com/embed/qx2IsmrCs3c,"['Alizarin Crimson', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15']",0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1\r
403,411,https://www.twoinchbrush.com/images/painting411.png,Wilderness Day,31,13,12,https://www.youtube.com/embed/nJGCVFn57U8,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1\r
`,Dn=`painting_index,img_src,painting_title,season,episode,num_colors,youtube_src,colors,color_hex,Black_Gesso,Bright_Red,Burnt_Umber,Cadmium_Yellow,Dark_Sienna,Indian_Red,Indian_Yellow,Liquid_Black,Liquid_Clear,Midnight_Black,Phthalo_Blue,Phthalo_Green,Prussian_Blue,Sap_Green,Titanium_White,Van_Dyke_Brown,Yellow_Ochre,Alizarin_Crimson
282,https://www.twoinchbrush.com/images/painting282.png,A Walk in the Woods,1,1,8,https://www.youtube.com/embed/oh5p5f5_-7A,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#FFEC00', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15']",FALSE,TRUE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,FALSE,TRUE
283,https://www.twoinchbrush.com/images/painting283.png,Mt. McKinley,1,2,8,https://www.youtube.com/embed/RInDWhYceLU,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#FFEC00', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15']",FALSE,TRUE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,FALSE,TRUE
284,https://www.twoinchbrush.com/images/painting284.png,Ebony Sunset,1,3,9,https://www.youtube.com/embed/UOziR7PoVco,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15']",TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,FALSE,TRUE
285,https://www.twoinchbrush.com/images/painting285.png,Winter Mist,1,4,3,https://www.youtube.com/embed/0pwoixRikn4,"['Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#021E44', '#FFFFFF', '#221B15']",FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE
286,https://www.twoinchbrush.com/images/painting286.png,Quiet Stream,1,5,8,https://www.youtube.com/embed/DFSIQNjKRfk,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#FFEC00', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15']",FALSE,TRUE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,FALSE,TRUE
287,https://www.twoinchbrush.com/images/painting287.png,Winter Moon,1,6,4,https://www.youtube.com/embed/loAzRUzx1wI,"['Black Gesso', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#000000', '#021E44', '#FFFFFF', '#221B15']",TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE
288,https://www.twoinchbrush.com/images/painting288.png,Autumn Mountain,1,7,8,https://www.youtube.com/embed/sDdpc8uisD0,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#FFEC00', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15']",FALSE,TRUE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,FALSE,TRUE
289,https://www.twoinchbrush.com/images/painting289.png,Peaceful Valley,1,8,8,https://www.youtube.com/embed/kQlFwTOkYzg,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#FFEC00', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15']",FALSE,TRUE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,FALSE,TRUE
290,https://www.twoinchbrush.com/images/painting290.png,Seascape,1,9,8,https://www.youtube.com/embed/QxcS7p1VHyQ,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#FFEC00', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15']",FALSE,TRUE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,FALSE,TRUE
291,https://www.twoinchbrush.com/images/painting291.png,Mountain Lake,1,10,8,https://www.youtube.com/embed/wDnLlywAL5I,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#FFEC00', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15']",FALSE,TRUE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,FALSE,TRUE
292,https://www.twoinchbrush.com/images/painting292.png,Winter Glow,1,11,8,https://www.youtube.com/embed/Q03YvknOVe0,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#FFEC00', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15']",FALSE,TRUE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,FALSE,TRUE
293,https://www.twoinchbrush.com/images/painting293.png,Snow Fall,1,12,4,https://www.youtube.com/embed/4E35-8x_y04,"['Alizarin Crimson', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#021E44', '#FFFFFF', '#221B15']",FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE
294,https://www.twoinchbrush.com/images/painting294.png,Final Reflections,1,13,8,https://www.youtube.com/embed/IEQWfszfRlA,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#FFEC00', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15']",FALSE,TRUE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,FALSE,TRUE
269,https://www.twoinchbrush.com/images/painting269.png,Meadow Lake,2,1,12,https://www.youtube.com/embed/GARWowi0QXI,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
270,https://www.twoinchbrush.com/images/painting270.png,Winter Sun,2,2,12,https://www.youtube.com/embed/VPfYRj4DDco,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
271,https://www.twoinchbrush.com/images/painting271.png,Ebony Sea,2,3,13,https://www.youtube.com/embed/aOJsKNzO3i8,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
272,https://www.twoinchbrush.com/images/painting272.png,Shades of Grey,2,4,3,https://www.youtube.com/embed/I-ousb8-SD0,"['Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#021E44', '#FFFFFF', '#221B15']",FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE
273,https://www.twoinchbrush.com/images/painting273.png,Autumn Splendor,2,5,11,https://www.youtube.com/embed/rTTWw5Gd79I,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
274,https://www.twoinchbrush.com/images/painting274.png,Black River,2,6,11,https://www.youtube.com/embed/6O4sfJd8G_M,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
275,https://www.twoinchbrush.com/images/painting275.png,Brown Mountain,2,7,11,https://www.youtube.com/embed/Vx6v47gHBWM,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
276,https://www.twoinchbrush.com/images/painting276.png,Reflections,2,8,12,https://www.youtube.com/embed/0FYfo94qefg,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
277,https://www.twoinchbrush.com/images/painting277.png,Black and White Seascape,2,9,12,https://www.youtube.com/embed/PMDyPrE0puo,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
278,https://www.twoinchbrush.com/images/painting278.png,Lazy River,2,10,12,https://www.youtube.com/embed/BW2wKKFvH1g,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
279,https://www.twoinchbrush.com/images/painting279.png,Black Waterfall,2,11,12,https://www.youtube.com/embed/GzSqjyQUPZQ,"['Alizarin Crimson', 'Black Gesso', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
280,https://www.twoinchbrush.com/images/painting280.png,Mountain Waterfall,2,12,12,https://www.youtube.com/embed/9jIt95PCFAA,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
281,https://www.twoinchbrush.com/images/painting281.png,Final Grace,2,13,12,https://www.youtube.com/embed/miJ19Kz_i3Y,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
256,https://www.twoinchbrush.com/images/painting256.png,Mountain Retreat,3,1,12,https://www.youtube.com/embed/hoimk4s8JoQ,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
257,https://www.twoinchbrush.com/images/painting257.png,Blue Moon,3,2,12,https://www.youtube.com/embed/loit61vLUMc,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
258,https://www.twoinchbrush.com/images/painting258.png,Bubbling Stream,3,3,12,https://www.youtube.com/embed/fuFalEXVN0k,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
259,https://www.twoinchbrush.com/images/painting259.png,Winter Night,3,4,7,https://www.youtube.com/embed/8ysFkNYwhAE,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Liquid Black', 'Phthalo Green\\r\\n', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#FFEC00', '#000000', '#102E3C', '#FFFFFF', '#221B15']",FALSE,TRUE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE
260,https://www.twoinchbrush.com/images/painting260.png,Distant Hills,3,5,7,https://www.youtube.com/embed/8Zge88tVwjE,"['Alizarin Crimson', 'Burnt Umber', 'Cadmium Yellow', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#8A3324', '#FFEC00', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
261,https://www.twoinchbrush.com/images/painting261.png,Covered Bridge,3,6,10,https://www.youtube.com/embed/OHSm8kLE7js,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
262,https://www.twoinchbrush.com/images/painting262.png,Quiet Inlet,3,7,10,https://www.youtube.com/embed/9N5IWKzYIyU,"['Alizarin Crimson', 'Burnt Umber', 'Cadmium Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#8A3324', '#FFEC00', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
263,https://www.twoinchbrush.com/images/painting263.png,Night Light,3,8,9,https://www.youtube.com/embed/l141Y0x8om0,"['Alizarin Crimson', 'Black Gesso', 'Burnt Umber', 'Cadmium Yellow', 'Phthalo Green\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#8A3324', '#FFEC00', '#102E3C', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
264,https://www.twoinchbrush.com/images/painting264.png,The Old Mill,3,9,10,https://www.youtube.com/embed/OFKFUJ9eDNs,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
265,https://www.twoinchbrush.com/images/painting265.png,Campfire,3,10,8,https://www.youtube.com/embed/L5bXkI0-pEg,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#221B15', '#C79B00']",TRUE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE
266,https://www.twoinchbrush.com/images/painting266.png,Rustic Barn,3,11,12,https://www.youtube.com/embed/WJJwrnFhUUg,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
267,https://www.twoinchbrush.com/images/painting267.png,Hidden Lake,3,12,10,https://www.youtube.com/embed/P_DaqkFbnac,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
268,https://www.twoinchbrush.com/images/painting268.png,Peaceful Waters,3,13,9,https://www.youtube.com/embed/Z0vtjRLqXcQ,"['Alizarin Crimson', 'Cadmium Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#FFEC00', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
243,https://www.twoinchbrush.com/images/painting243.png,Purple Splendor,4,1,4,https://www.youtube.com/embed/hP4GfMgsNVE,"['Alizarin Crimson', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#0C0040', '#FFFFFF', '#221B15']",FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE
244,https://www.twoinchbrush.com/images/painting244.png,Tranquil Valley,4,2,10,https://www.youtube.com/embed/PbchoOWWCZs,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
245,https://www.twoinchbrush.com/images/painting245.png,Majestic Mountains,4,3,12,https://www.youtube.com/embed/NcVeRlPu_5w,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
246,https://www.twoinchbrush.com/images/painting246.png,Winter Sawscape,4,4,7,https://www.youtube.com/embed/lmKAwKrONmE,"['Black Gesso', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Titanium White']","['#000000', '#DB0000', '#8A3324', '#FFEC00', '#000000', '#021E44', '#FFFFFF']",TRUE,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,TRUE,FALSE,FALSE,FALSE
247,https://www.twoinchbrush.com/images/painting247.png,Evening Seascape,4,5,10,https://www.youtube.com/embed/y5k4GXw_-yI,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#000000', '#DB0000', '#8A3324', '#FFEC00', '#0C0040', '#102E3C', '#021E44', '#FFFFFF', '#221B15']",TRUE,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE
248,https://www.twoinchbrush.com/images/painting248.png,Warm Summer Day,4,6,11,https://www.youtube.com/embed/GBN9AIw3Ao4,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
249,https://www.twoinchbrush.com/images/painting249.png,Cabin in the Woods,4,7,11,https://www.youtube.com/embed/81QKellPA70,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
250,https://www.twoinchbrush.com/images/painting250.png,Wetlands,4,8,10,https://www.youtube.com/embed/2FpVyGanPwM,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
251,https://www.twoinchbrush.com/images/painting251.png,Cool Waters,4,9,12,https://www.youtube.com/embed/tJRvBcqQd5A,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
252,https://www.twoinchbrush.com/images/painting252.png,Quiet Woods,4,10,11,https://www.youtube.com/embed/wIZX57I4aDs,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
253,https://www.twoinchbrush.com/images/painting253.png,Northwest Majesty,4,11,10,https://www.youtube.com/embed/9DU6bunvD_g,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Liquid Black', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,FALSE,TRUE
254,https://www.twoinchbrush.com/images/painting254.png,Autumn Days,4,12,12,https://www.youtube.com/embed/VAdMkf-AAPM,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
255,https://www.twoinchbrush.com/images/painting255.png,Mountain Challenge,4,13,10,https://www.youtube.com/embed/o2cjLA_wgIk,"['Alizarin Crimson', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
230,https://www.twoinchbrush.com/images/painting230.png,Mountain Waterfall,5,1,11,https://www.youtube.com/embed/DqhzxdkdQS0,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
231,https://www.twoinchbrush.com/images/painting231.png,Twilight Meadow,5,2,12,https://www.youtube.com/embed/6evqNlOO7Bw,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
232,https://www.twoinchbrush.com/images/painting232.png,Mountain Blossoms,5,3,5,https://www.youtube.com/embed/UVhhStJAJZc,"['Alizarin Crimson', 'Liquid Black', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Titanium White']","['#4E1500', '#000000', '#0C0040', '#102E3C', '#FFFFFF']",FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE
233,https://www.twoinchbrush.com/images/painting233.png,Winter Stillness,5,4,7,https://www.youtube.com/embed/qg9c1SqdRko,"['Alizarin Crimson', 'Burnt Umber', 'Indian Yellow', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#8A3324', '#FFB800', '#0C0040', '#0A3410', '#FFFFFF', '#221B15']",FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,FALSE,TRUE
234,https://www.twoinchbrush.com/images/painting234.png,Quiet Pond,5,5,10,https://www.youtube.com/embed/aiK9xOIJtV8,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
235,https://www.twoinchbrush.com/images/painting235.png,Ocean Sunrise,5,6,6,https://www.youtube.com/embed/u0Bz6TNUK1Q,"['Alizarin Crimson', 'Indian Yellow', 'Liquid Black', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#FFB800', '#000000', '#021E44', '#FFFFFF', '#221B15']",FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE
236,https://www.twoinchbrush.com/images/painting236.png,Bubbling Brook,5,7,10,https://www.youtube.com/embed/LiKCzeqn-kg,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
237,https://www.twoinchbrush.com/images/painting237.png,Arizona Splendor,5,8,9,https://www.youtube.com/embed/spFwCh2616s,"['Alizarin Crimson', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
238,https://www.twoinchbrush.com/images/painting238.png,Anatomy of a Wave,5,9,6,https://www.youtube.com/embed/DFQlu6eqrBo,"['Alizarin Crimson', 'Cadmium Yellow', 'Liquid Clear', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Titanium White']","['#4E1500', '#FFEC00', '#FFFFFF', '#0C0040', '#102E3C', '#FFFFFF']",FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE
239,https://www.twoinchbrush.com/images/painting239.png,The Windmill,5,10,11,https://www.youtube.com/embed/xj8xsTSkbUk,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Burnt Umber', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#8A3324', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
240,https://www.twoinchbrush.com/images/painting240.png,Autumn Glory,5,11,8,https://www.youtube.com/embed/yTzlm_t0RmY,"['Alizarin Crimson', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#8A3324', '#FFEC00', '#FFB800', '#021E44', '#0A3410', '#FFFFFF', '#221B15']",FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,FALSE,TRUE
241,https://www.twoinchbrush.com/images/painting241.png,Indian Girl,5,12,5,https://www.youtube.com/embed/2uXMx8Kjs8I,"['Bright Red', 'Burnt Umber', 'Indian Yellow', 'Prussian Blue', 'Titanium White']","['#DB0000', '#8A3324', '#FFB800', '#021E44', '#FFFFFF']",FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,TRUE,FALSE,FALSE,FALSE
242,https://www.twoinchbrush.com/images/painting242.png,Meadow Stream,5,13,11,https://www.youtube.com/embed/87MMbN1bQCs,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
217,https://www.twoinchbrush.com/images/painting217.png,Blue River,6,1,12,https://www.youtube.com/embed/LygUyAb78oY,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
218,https://www.twoinchbrush.com/images/painting218.png,Nature's Edge,6,2,11,https://www.youtube.com/embed/Bcqyzo85A1o,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
219,https://www.twoinchbrush.com/images/painting219.png,Morning Mist,6,3,10,https://www.youtube.com/embed/wbZreRaE74k,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
220,https://www.twoinchbrush.com/images/painting220.png,Whispering Stream,6,4,11,https://www.youtube.com/embed/QglIjlqsUdU,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
221,https://www.twoinchbrush.com/images/painting221.png,Secluded Forest,6,5,12,https://www.youtube.com/embed/USkduOfwJok,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
222,https://www.twoinchbrush.com/images/painting222.png,Snow Trail,6,6,8,https://www.youtube.com/embed/n9EsFFtwZnE,"['Alizarin Crimson', 'Burnt Umber', 'Cadmium Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#8A3324', '#FFEC00', '#0C0040', '#102E3C', '#FFFFFF', '#221B15', '#C79B00']",FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE
223,https://www.twoinchbrush.com/images/painting223.png,Arctic Beauty,6,7,11,https://www.youtube.com/embed/UQ-RTZCOQn0,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
224,https://www.twoinchbrush.com/images/painting224.png,Horizons West,6,8,7,https://www.youtube.com/embed/m6UM-rN2D6s,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Indian Yellow', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#FFEC00', '#FFB800', '#021E44', '#FFFFFF', '#221B15']",FALSE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE
225,https://www.twoinchbrush.com/images/painting225.png,High Chateau,6,9,11,https://www.youtube.com/embed/dafH8ks9Zww,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
226,https://www.twoinchbrush.com/images/painting226.png,Country Life,6,10,10,https://www.youtube.com/embed/j8Jf7QVKLgQ,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
227,https://www.twoinchbrush.com/images/painting227.png,Western Expanse,6,11,11,https://www.youtube.com/embed/MTInkV5ODjk,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
228,https://www.twoinchbrush.com/images/painting228.png,Marshlands,6,12,11,https://www.youtube.com/embed/Ugiwi8uizpg,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
229,https://www.twoinchbrush.com/images/painting229.png,Blaze of Color,6,13,11,https://www.youtube.com/embed/se7wOprxRGs,"['Alizarin Crimson', 'Bright Red', 'Burnt Umber', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#8A3324', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
203,https://www.twoinchbrush.com/images/painting203.png,Winter Cabin,7,1,6,https://www.youtube.com/embed/kdlHV6ceI_gw,"['Bright Red', 'Dark Sienna', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#DB0000', '#5F2E1F', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,FALSE
204,https://www.twoinchbrush.com/images/painting204.png,Secluded Lake,7,2,12,https://www.youtube.com/embed/2OxSJcFvpoU,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
205,https://www.twoinchbrush.com/images/painting205.png,Evergreens at Sunset,7,3,7,https://www.youtube.com/embed/YQPEy3hYGo8,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Sap Green', 'Titanium White']","['#4E1500', '#DB0000', '#FFEC00', '#FFB800', '#000000', '#0A3410', '#FFFFFF']",FALSE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE
206,https://www.twoinchbrush.com/images/painting206.png,Mountain Cabin,7,4,12,https://www.youtube.com/embed/E3IAMvO8GyM,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
208,https://www.twoinchbrush.com/images/painting208.png,Portrait of Sally,7,5,8,https://www.youtube.com/embed/MHJB0IBnuD4,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Phthalo Blue', 'Titanium White', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#0C0040', '#FFFFFF', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE
209,https://www.twoinchbrush.com/images/painting209.png,Misty Waterfall,7,6,11,https://www.youtube.com/embed/530_cVmexiI,"['Alizarin Crimson', 'Bright Red', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
210,https://www.twoinchbrush.com/images/painting210.png,Barn at Sunset,7,7,10,https://www.youtube.com/embed/WT6n0K2zGnA,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE
211,https://www.twoinchbrush.com/images/painting211.png,Mountain Splendor,7,8,11,https://www.youtube.com/embed/GhOGZMpPUSE,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
212,https://www.twoinchbrush.com/images/painting212.png,Lake by Mountain,7,9,11,https://www.youtube.com/embed/yAiYirlcq7o,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#FFB800', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
213,https://www.twoinchbrush.com/images/painting213.png,Mountain Glory,7,10,11,https://www.youtube.com/embed/0M9pwLHRR2c,"['Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,FALSE
214,https://www.twoinchbrush.com/images/painting214.png,Grey Winter,7,11,3,https://www.youtube.com/embed/sS-hNYgDUak,"['Alizarin Crimson', 'Midnight Black\\r\\n\\r\\n', 'Titanium White']","['#4E1500', '#000000', '#FFFFFF']",FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE
215,https://www.twoinchbrush.com/images/painting215.png,Dock Scene,7,12,9,https://www.youtube.com/embed/4KYxkqlzyqM,"['Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#DB0000', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,FALSE
216,https://www.twoinchbrush.com/images/painting216.png,Dark Waterfall,7,13,11,https://www.youtube.com/embed/VqMbL00eZqw,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Black', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
190,https://www.twoinchbrush.com/images/painting190.png,Misty Rolling Hills,8,1,10,https://www.youtube.com/embed/cC5ozePVKGI,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
191,https://www.twoinchbrush.com/images/painting191.png,Lakeside Cabin,8,2,12,https://www.youtube.com/embed/CP6_5cQVZvQ,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
192,https://www.twoinchbrush.com/images/painting192.png,Warm Winter Day,8,3,10,https://www.youtube.com/embed/mUJoNLWQ1yI,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE
193,https://www.twoinchbrush.com/images/painting193.png,Waterside Way,8,4,11,https://www.youtube.com/embed/uj5FE70BcB0,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
194,https://www.twoinchbrush.com/images/painting194.png,Hunter's Haven,8,5,11,https://www.youtube.com/embed/Da4SPyh1ATM,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
195,https://www.twoinchbrush.com/images/painting195.png,Bubbling Mountain Brook,8,6,11,https://www.youtube.com/embed/U2_SKgM3f4A,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
196,https://www.twoinchbrush.com/images/painting196.png,Winter Hideaway,8,7,10,https://www.youtube.com/embed/19oz9XHZNzA,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE
197,https://www.twoinchbrush.com/images/painting197.png,Foot of the Mountain,8,8,13,https://www.youtube.com/embed/cIUBUc_ITBc,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
198,https://www.twoinchbrush.com/images/painting198.png,Majestic Pine,8,9,11,https://www.youtube.com/embed/x5CoQj9zr-c,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
199,https://www.twoinchbrush.com/images/painting199.png,Cactus at Sunset,8,10,10,https://www.youtube.com/embed/XBqD3QhKU24,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE
200,https://www.twoinchbrush.com/images/painting200.png,Mountain Range,8,11,10,https://www.youtube.com/embed/V_l6olF3yHI,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Indian Yellow', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#FFB800', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
201,https://www.twoinchbrush.com/images/painting201.png,Lonely Retreat,8,12,10,https://www.youtube.com/embed/qTDQt_PdlYc,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE
202,https://www.twoinchbrush.com/images/painting202.png,Northern Lights,8,13,9,https://www.youtube.com/embed/vgbMONXc9Cs,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#000000', '#DB0000', '#5F2E1F', '#000000', '#0C0040', '#102E3C', '#FFFFFF', '#221B15']",TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE
177,https://www.twoinchbrush.com/images/painting177.png,Winter Evergreens,9,1,9,https://www.youtube.com/embed/O6L5YPt9CeU,"['Alizarin Crimson', 'Bright Red', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE
178,https://www.twoinchbrush.com/images/painting178.png,Surf's Up,9,2,11,https://www.youtube.com/embed/ZKxFvyyOBPQ,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE
179,https://www.twoinchbrush.com/images/painting179.png,Red Sunset,9,3,11,https://www.youtube.com/embed/e5JhYi_G-l0,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE
180,https://www.twoinchbrush.com/images/painting180.png,Meadow Road,9,4,11,https://www.youtube.com/embed/u5VT_WGM0kg,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
181,https://www.twoinchbrush.com/images/painting181.png,Winter Oval,9,5,7,https://www.youtube.com/embed/pYWiLm_-sXw,"['Alizarin Crimson', 'Bright Red', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#5F2E1F', '#000000', '#0C0040', '#FFFFFF', '#221B15']",FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE
182,https://www.twoinchbrush.com/images/painting182.png,Secluded Beach,9,6,11,https://www.youtube.com/embed/WGUcw_kFvzU,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE
183,https://www.twoinchbrush.com/images/painting183.png,Forest Hills,9,7,11,https://www.youtube.com/embed/E3XW_Zp238U,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
184,https://www.twoinchbrush.com/images/painting184.png,Little House by the Road,9,8,11,https://www.youtube.com/embed/3CDg_9gL-5M,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
185,https://www.twoinchbrush.com/images/painting185.png,Mountain Path,9,9,11,https://www.youtube.com/embed/e0VUprkc1n0,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
186,https://www.twoinchbrush.com/images/painting186.png,Country Charm,9,10,11,https://www.youtube.com/embed/9wp8NRzCJnw,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
187,https://www.twoinchbrush.com/images/painting187.png,Nature's Paradise,9,11,11,https://www.youtube.com/embed/7yU55PUls2c,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
188,https://www.twoinchbrush.com/images/painting188.png,Mountain by the Sea,9,12,13,https://www.youtube.com/embed/so--opB-yuQ,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFFFFF', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
189,https://www.twoinchbrush.com/images/painting189.png,Mountain Hideaway,9,13,12,https://www.youtube.com/embed/q48EWPrbzVs,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
163,https://www.twoinchbrush.com/images/painting163.png,Towering Peaks,10,1,13,https://www.youtube.com/embed/1s58rW0_LN4,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
164,https://www.twoinchbrush.com/images/painting164.png,Cabin at Sunset,10,2,12,https://www.youtube.com/embed/a6Wil3OXNuI,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
165,https://www.twoinchbrush.com/images/painting165.png,Twin Falls,10,3,12,https://www.youtube.com/embed/cMwkY8ojRik,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
166,https://www.twoinchbrush.com/images/painting166.png,Secluded Bridge,10,4,12,https://www.youtube.com/embed/vrAMRxBB5KI,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
167,https://www.twoinchbrush.com/images/painting167.png,Ocean Breeze,10,5,12,https://www.youtube.com/embed/XZmdzfvXRuw,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#102E3C', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE
168,https://www.twoinchbrush.com/images/painting168.png,Autumn Woods,10,6,12,https://www.youtube.com/embed/vKyMU5Z8cDI,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
170,https://www.twoinchbrush.com/images/painting170.png,Winter Solitude,10,7,7,https://www.youtube.com/embed/ov4YaCQB9co,"['Alizarin Crimson', 'Bright Red', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#5F2E1F', '#000000', '#0C0040', '#FFFFFF', '#221B15']",FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE
171,https://www.twoinchbrush.com/images/painting171.png,Golden Sunset,10,8,12,https://www.youtube.com/embed/CiNDyckERXQ,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
172,https://www.twoinchbrush.com/images/painting172.png,Mountain Oval,10,9,11,https://www.youtube.com/embed/Qj6lMtnCt8o,"['Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,FALSE
173,https://www.twoinchbrush.com/images/painting173.png,Ocean Sunset,10,10,12,https://www.youtube.com/embed/OJ_xqtvZf3o,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE
174,https://www.twoinchbrush.com/images/painting174.png,Triple View,10,11,12,https://www.youtube.com/embed/zoTeyliLn5o,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
175,https://www.twoinchbrush.com/images/painting175.png,Winter Frost,10,12,9,https://www.youtube.com/embed/8satX-hLkuI,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE
176,https://www.twoinchbrush.com/images/painting176.png,Lakeside Cabin,10,13,12,https://www.youtube.com/embed/1l_TsfCIb_I,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
150,https://www.twoinchbrush.com/images/painting150.png,Mountain Stream,11,1,12,https://www.youtube.com/embed/xdFCj6BzQio,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
151,https://www.twoinchbrush.com/images/painting151.png,Country Cabin,11,2,7,https://www.youtube.com/embed/Dkww2nHpuZw,"['Alizarin Crimson', 'Bright Red', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#5F2E1F', '#000000', '#021E44', '#FFFFFF', '#221B15']",FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE
152,https://www.twoinchbrush.com/images/painting152.png,Daisy Delight,11,3,10,https://www.youtube.com/embed/HuHC1RqtvDA,"['Alizarin Crimson', 'Cadmium Yellow', 'Dark Sienna', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#FFEC00', '#5F2E1F', '#FFFFFF', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
153,https://www.twoinchbrush.com/images/painting153.png,Hidden Stream,11,4,12,https://www.youtube.com/embed/JGzTg8fCj4w,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
154,https://www.twoinchbrush.com/images/painting154.png,Towering Glacier,11,5,12,https://www.youtube.com/embed/67vdGbA3Xkg,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
155,https://www.twoinchbrush.com/images/painting155.png,Oval Barn,11,6,6,https://www.youtube.com/embed/HqBhCibidNM,"['Bright Red', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#DB0000', '#5F2E1F', '#000000', '#021E44', '#FFFFFF', '#221B15']",FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE
156,https://www.twoinchbrush.com/images/painting156.png,Lakeside Path,11,7,12,https://www.youtube.com/embed/1yjGoJokbZg,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
157,https://www.twoinchbrush.com/images/painting157.png,Sunset Oval,11,8,11,https://www.youtube.com/embed/9xG6IzcGotI,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
158,https://www.twoinchbrush.com/images/painting158.png,Winter Barn,11,9,6,https://www.youtube.com/embed/_xkn0ceDreo,"['Alizarin Crimson', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#5F2E1F', '#000000', '#0C0040', '#FFFFFF', '#221B15']",FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE
159,https://www.twoinchbrush.com/images/painting159.png,Sunset over the Waves,11,10,10,https://www.youtube.com/embed/c4b_B2F1eZg,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#FFFFFF', '#221B15']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE
160,https://www.twoinchbrush.com/images/painting160.png,Golden Glow,11,11,8,https://www.youtube.com/embed/aA8RhtaWACA,"['Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,FALSE
161,https://www.twoinchbrush.com/images/painting161.png,Roadside Barn,11,12,11,https://www.youtube.com/embed/vJpKhiXvXdA,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
162,https://www.twoinchbrush.com/images/painting162.png,Happy Accident,11,13,11,https://www.youtube.com/embed/Fw6odlNp7_8,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
137,https://www.twoinchbrush.com/images/painting137.png,Golden Knoll,12,1,7,https://www.youtube.com/embed/-O0Bs65eN5w,"['Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#FFFFFF', '#221B15', '#C79B00']",FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,FALSE
138,https://www.twoinchbrush.com/images/painting138.png,Mountain Reflections,12,2,12,https://www.youtube.com/embed/rzYpa4XGSnA,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
139,https://www.twoinchbrush.com/images/painting139.png,Secluded Mountain,12,3,13,https://www.youtube.com/embed/3PZabdohLso,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
140,https://www.twoinchbrush.com/images/painting140.png,Bright Autumn Trees,12,4,13,https://www.youtube.com/embed/aR-C3h5zURM,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Black', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#000000', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
141,https://www.twoinchbrush.com/images/painting141.png,Black Seascape,12,5,9,https://www.youtube.com/embed/P_aCan4cBwc,"['Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Titanium White', 'Van Dyke Brown']","['#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#102E3C', '#FFFFFF', '#221B15']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE
142,https://www.twoinchbrush.com/images/painting142.png,Steep Mountains,12,6,12,https://www.youtube.com/embed/fRK8_ioYWw4,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
143,https://www.twoinchbrush.com/images/painting143.png,Quiet Mountains River,12,7,12,https://www.youtube.com/embed/Leiw-FtADZc,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
144,https://www.twoinchbrush.com/images/painting144.png,Evening Waterfall,12,8,11,https://www.youtube.com/embed/PutvF_P4588,"['Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,FALSE
145,https://www.twoinchbrush.com/images/painting145.png,Tropical Seascape,12,9,12,https://www.youtube.com/embed/RrBsbqO9aqI,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE
146,https://www.twoinchbrush.com/images/painting146.png,Mountain at Sunset,12,10,13,https://www.youtube.com/embed/HCsCatvigtw,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
147,https://www.twoinchbrush.com/images/painting147.png,Soft Mountain Glow,12,11,12,https://www.youtube.com/embed/gOGJYHWjXgE,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
148,https://www.twoinchbrush.com/images/painting148.png,Mountain in an Oval,12,12,11,https://www.youtube.com/embed/1jRPshs27H8,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
149,https://www.twoinchbrush.com/images/painting149.png,Winter Mountain,12,13,7,https://www.youtube.com/embed/46vI20697HI,"['Alizarin Crimson', 'Bright Red', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15']",FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE
124,https://www.twoinchbrush.com/images/painting124.png,Rolling Hills,13,1,12,https://www.youtube.com/embed/H4GyGrT7lEQ,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
125,https://www.twoinchbrush.com/images/painting125.png,Frozen Solitude,13,2,5,https://www.youtube.com/embed/kNZssD9zWlw,"['Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#5F2E1F', '#000000', '#021E44', '#FFFFFF', '#221B15']",FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE
126,https://www.twoinchbrush.com/images/painting126.png,Meadow Brook,13,3,13,https://www.youtube.com/embed/06W8GsWj2Yg,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
127,https://www.twoinchbrush.com/images/painting127.png,Evening at Sunset,13,4,12,https://www.youtube.com/embed/7ZUQTXuDPaI,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
128,https://www.twoinchbrush.com/images/painting128.png,Mountain View,13,5,11,https://www.youtube.com/embed/dJfnAyDLwPY,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
129,https://www.twoinchbrush.com/images/painting129.png,Hidden Creek,13,6,10,https://www.youtube.com/embed/KmoRz01bm0Y,"['Black Gesso', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#000000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,FALSE
130,https://www.twoinchbrush.com/images/painting130.png,Peaceful Haven,13,7,13,https://www.youtube.com/embed/j20pZ96E_CE,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
131,https://www.twoinchbrush.com/images/painting131.png,Mountain Exhibition,13,8,10,https://www.youtube.com/embed/bgI3_1quJ18,"['Alizarin Crimson', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
132,https://www.twoinchbrush.com/images/painting132.png,Emerald Waters,13,9,9,https://www.youtube.com/embed/lLunPQBzW6g,"['Black Gesso', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#000000', '#FFEC00', '#5F2E1F', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,FALSE
133,https://www.twoinchbrush.com/images/painting133.png,Mountain Summit,13,10,12,https://www.youtube.com/embed/kasGRkfkiPM,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
134,https://www.twoinchbrush.com/images/painting134.png,Cabin Hideaway,13,11,10,https://www.youtube.com/embed/NjTlW2NL1Lo,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE
135,https://www.twoinchbrush.com/images/painting135.png,Oval Essence,13,12,8,https://www.youtube.com/embed/q7WXF_BSEXw,"['Alizarin Crimson', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#102E3C', '#FFFFFF', '#221B15']",FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE
136,https://www.twoinchbrush.com/images/painting136.png,Lost Lake,13,13,12,https://www.youtube.com/embed/9-ATP8xyDM0,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
111,https://www.twoinchbrush.com/images/painting111.png,Distant Mountains,14,1,13,https://www.youtube.com/embed/GpA9UM7QGag,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
112,https://www.twoinchbrush.com/images/painting112.png,Meadow Brook Surprise,14,2,12,https://www.youtube.com/embed/Ov5oIHTAa10,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
113,https://www.twoinchbrush.com/images/painting113.png,Mountain Moonlight Oval,14,3,12,https://www.youtube.com/embed/CigXQtT6BPM,"['Alizarin Crimson', 'Black Gesso', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
114,https://www.twoinchbrush.com/images/painting114.png,Snowy Solitude,14,4,7,https://www.youtube.com/embed/1ZriQGhSFTM,"['Alizarin Crimson', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#5F2E1F', '#000000', '#0C0040', '#FFFFFF', '#221B15', '#C79B00']",FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE
115,https://www.twoinchbrush.com/images/painting115.png,Mountain River,14,5,13,https://www.youtube.com/embed/CnMLKAGi0yM,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
116,https://www.twoinchbrush.com/images/painting116.png,Graceful Mountains,14,6,12,https://www.youtube.com/embed/0uVe8T-vVVg,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
117,https://www.twoinchbrush.com/images/painting117.png,Windy Waves,14,7,14,https://www.youtube.com/embed/y6GVVjG4HMg,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Black', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
118,https://www.twoinchbrush.com/images/painting118.png,On a Clear Day,14,8,11,https://www.youtube.com/embed/e63Cgln6Yag,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE
119,https://www.twoinchbrush.com/images/painting119.png,Riverside Escape Oval,14,9,13,https://www.youtube.com/embed/d83REwSGfGo,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
120,https://www.twoinchbrush.com/images/painting120.png,Surprising Falls,14,10,13,https://www.youtube.com/embed/QbclL1ca7_s,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
121,https://www.twoinchbrush.com/images/painting121.png,Shadow Pond,14,11,13,https://www.youtube.com/embed/BQWJ3kqonpA,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
122,https://www.twoinchbrush.com/images/painting122.png,Misty Forest Oval,14,12,12,https://www.youtube.com/embed/ddU9vQvSpw8,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
123,https://www.twoinchbrush.com/images/painting123.png,Natural Wonder,14,13,11,https://www.youtube.com/embed/knOutsaiKfU,"['Alizarin Crimson', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
98,https://www.twoinchbrush.com/images/painting98.png,Splendor of Winter,15,1,10,https://www.youtube.com/embed/oJvk7gPDHiE,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE
99,https://www.twoinchbrush.com/images/painting99.png,Colors of Nature,15,2,12,https://www.youtube.com/embed/Me9Ietooq4w,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
100,https://www.twoinchbrush.com/images/painting100.png,Grandpa's Barn,15,3,11,https://www.youtube.com/embed/IPPU49PyfEA,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
101,https://www.twoinchbrush.com/images/painting101.png,Peaceful Reflections,15,4,13,https://www.youtube.com/embed/gYuH4Ilqdhs,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
102,https://www.twoinchbrush.com/images/painting102.png,Hidden Winter Moon Oval,15,5,8,https://www.youtube.com/embed/yxAMOdl6RJE,"['Alizarin Crimson', 'Black Gesso', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#000000', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15']",TRUE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE
103,https://www.twoinchbrush.com/images/painting103.png,Waves of Wonder,15,6,12,https://www.youtube.com/embed/tayQX_ng-Nc,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFFFFF', '#000000', '#0C0040', '#102E3C', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE
104,https://www.twoinchbrush.com/images/painting104.png,Cabin by the Pond,15,7,12,https://www.youtube.com/embed/TyOO6WeP2AY,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
105,https://www.twoinchbrush.com/images/painting105.png,Fall Stream,15,8,12,https://www.youtube.com/embed/ZY0ofhdV_L0,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
106,https://www.twoinchbrush.com/images/painting106.png,Christmas Eve Snow,15,9,9,https://www.youtube.com/embed/cVqFG2pxK2A,"['Alizarin Crimson', 'Black Gesso', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#000000', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15']",TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE
107,https://www.twoinchbrush.com/images/painting107.png,Forest Down Oval,15,10,12,https://www.youtube.com/embed/COsJUfPN2dA,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
108,https://www.twoinchbrush.com/images/painting108.png,Pathway to Autumn,15,11,12,https://www.youtube.com/embed/Hg5RKc6xiL4,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
109,https://www.twoinchbrush.com/images/painting109.png,Deep Forest Lake,15,12,13,https://www.youtube.com/embed/2bjFmSQjQrw,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
110,https://www.twoinchbrush.com/images/painting110.png,Peaks of Majesty,15,13,11,https://www.youtube.com/embed/lTb8DN6G6dE,"['Alizarin Crimson', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
84,https://www.twoinchbrush.com/images/painting84.png,Two Seasons,16,1,13,https://www.youtube.com/embed/jwVz0uTLH1I,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
85,https://www.twoinchbrush.com/images/painting85.png,Nestled Cabin,16,2,12,https://www.youtube.com/embed/l_jN9KN257M,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
86,https://www.twoinchbrush.com/images/painting86.png,Wintertime Discovery,16,3,11,https://www.youtube.com/embed/uZyZW3tkCE0,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE
87,https://www.twoinchbrush.com/images/painting87.png,Mountain Mirage Wood Shape,16,4,12,https://www.youtube.com/embed/jfCsew_mz7A,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
88,https://www.twoinchbrush.com/images/painting88.png,Double Oval Fantasy,16,5,13,https://www.youtube.com/embed/4jAsLpJzjHM,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
89,https://www.twoinchbrush.com/images/painting89.png,Contemplative Lady,16,6,1,https://www.youtube.com/embed/gnp6WE7Ql-s,['Van Dyke Brown'],['#221B15'],FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE
90,https://www.twoinchbrush.com/images/painting90.png,Deep Woods,16,7,10,https://www.youtube.com/embed/rE5ZVs_YJfE,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
91,https://www.twoinchbrush.com/images/painting91.png,High Tide,16,8,12,https://www.youtube.com/embed/_IREQ4SIcX8,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
93,https://www.twoinchbrush.com/images/painting93.png,Barn in Snow Oval,16,9,7,https://www.youtube.com/embed/wJmi7-G9r-w,"['Alizarin Crimson', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#5F2E1F', '#000000', '#0C0040', '#FFFFFF', '#221B15', '#C79B00']",FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE
94,https://www.twoinchbrush.com/images/painting94.png,That Time of Year,16,10,9,https://www.youtube.com/embed/q5moLoqOkP0,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#FFEC00', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15']",FALSE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,FALSE,TRUE
95,https://www.twoinchbrush.com/images/painting95.png,Waterfall Wonder,16,11,11,https://www.youtube.com/embed/AGhXEPfp-W4,"['Alizarin Crimson', 'Black Gesso', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
96,https://www.twoinchbrush.com/images/painting96.png,Mighty Mountain Lake,16,12,11,https://www.youtube.com/embed/4vXB2R8ybDE,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
97,https://www.twoinchbrush.com/images/painting97.png,Wooded Stream Oval,16,13,12,https://www.youtube.com/embed/-XA2h17y3HU,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
71,https://www.twoinchbrush.com/images/painting71.png,Golden Mist Oval,17,1,9,https://www.youtube.com/embed/lhpfaW0k6uM,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE
72,https://www.twoinchbrush.com/images/painting72.png,The Old Home Place,17,2,11,https://www.youtube.com/embed/EVQcDEiJh2o,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
73,https://www.twoinchbrush.com/images/painting73.png,Soothing Vista,17,3,13,https://www.youtube.com/embed/NqfRLiv0SZ0,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
74,https://www.twoinchbrush.com/images/painting74.png,Stormy Seas,17,4,9,https://www.youtube.com/embed/LE6agCR5iBw,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE
75,https://www.twoinchbrush.com/images/painting75.png,Country Time,17,5,13,https://www.youtube.com/embed/e_bt9rQoGN0,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
76,https://www.twoinchbrush.com/images/painting76.png,A Mild Winter's Day,17,6,10,https://www.youtube.com/embed/BbYO579MmhA,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE
77,https://www.twoinchbrush.com/images/painting77.png,Spectacular Waterfall,17,7,15,https://www.youtube.com/embed/nK-HebXL2uw,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
78,https://www.twoinchbrush.com/images/painting78.png,View from the Park,17,8,13,https://www.youtube.com/embed/Q4n90jsOUtY,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
79,https://www.twoinchbrush.com/images/painting79.png,Lake View,17,9,12,https://www.youtube.com/embed/07acfzBaoa0,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
80,https://www.twoinchbrush.com/images/painting80.png,Old Country Mill,17,10,11,https://www.youtube.com/embed/n8HlFCQACYA,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
81,https://www.twoinchbrush.com/images/painting81.png,Morning Walk,17,11,12,https://www.youtube.com/embed/pSvgNkQdR2Y,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
82,https://www.twoinchbrush.com/images/painting82.png,Nature's Splendor,17,12,13,https://www.youtube.com/embed/uCAtI2IwEwk,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
83,https://www.twoinchbrush.com/images/painting83.png,Mountain Beauty,17,13,11,https://www.youtube.com/embed/8P-YeoTmVrw,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
58,https://www.twoinchbrush.com/images/painting58.png,Half-Oval Vignette,18,1,12,https://www.youtube.com/embed/uY3fIry2tOE,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
59,https://www.twoinchbrush.com/images/painting59.png,Absolutely Autumn,18,2,11,https://www.youtube.com/embed/PGPVpil2UmE,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
60,https://www.twoinchbrush.com/images/painting60.png,Mountain Seclusion,18,3,10,https://www.youtube.com/embed/EBZKuVbRY54,"['Alizarin Crimson', 'Black Gesso', 'Cadmium Yellow', 'Dark Sienna', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#000000', '#FFEC00', '#5F2E1F', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15']",TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE
61,https://www.twoinchbrush.com/images/painting61.png,Crimson Oval,18,4,12,https://www.youtube.com/embed/R7Y3izMFPbM,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
62,https://www.twoinchbrush.com/images/painting62.png,Autumn Exhibition,18,5,11,https://www.youtube.com/embed/6afHY2d9Lv8,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
63,https://www.twoinchbrush.com/images/painting63.png,Majestic Peaks,18,6,13,https://www.youtube.com/embed/lilbzLCNnDo,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
64,https://www.twoinchbrush.com/images/painting64.png,Golden Morning Mist,18,7,12,https://www.youtube.com/embed/rCHXqj4DHlM,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
65,https://www.twoinchbrush.com/images/painting65.png,Winter Lace,18,8,8,https://www.youtube.com/embed/WJF_qoQRPck,"['Alizarin Crimson', 'Bright Red', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#DB0000', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15']",FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE
66,https://www.twoinchbrush.com/images/painting66.png,Seascape Fantasy,18,9,11,https://www.youtube.com/embed/sBBBilrDuSw,"['Alizarin Crimson', 'Black Gesso', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
67,https://www.twoinchbrush.com/images/painting67.png,Double Oval Stream,18,10,13,https://www.youtube.com/embed/rRjnHdr9DmU,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Black', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
68,https://www.twoinchbrush.com/images/painting68.png,Enchanted Forest,18,11,12,https://www.youtube.com/embed/ikR7UT9mVBw,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
69,https://www.twoinchbrush.com/images/painting69.png,Southwest Serenity,18,12,10,https://www.youtube.com/embed/EVfPPJ5FUmA,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
70,https://www.twoinchbrush.com/images/painting70.png,Rippling Waters,18,13,12,https://www.youtube.com/embed/XvnJBynSiT0,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Black', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
44,https://www.twoinchbrush.com/images/painting44.png,Snowfall Magic,19,1,10,https://www.youtube.com/embed/1enWTsRi16o,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE
45,https://www.twoinchbrush.com/images/painting45.png,Quiet Mountain Lake,19,2,14,https://www.youtube.com/embed/2gq2V6dCt2I,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
46,https://www.twoinchbrush.com/images/painting46.png,Final Embers of Sunlight,19,3,12,https://www.youtube.com/embed/IeFbdk36MUU,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
47,https://www.twoinchbrush.com/images/painting47.png,Snowy Morn,19,4,7,https://www.youtube.com/embed/iB1TDWlo0kk,"['Alizarin Crimson', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#5F2E1F', '#000000', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE
48,https://www.twoinchbrush.com/images/painting48.png,Camper's Haven,19,5,11,https://www.youtube.com/embed/C34WAUgkAT0,"['Alizarin Crimson', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
49,https://www.twoinchbrush.com/images/painting49.png,Waterfall in the Woods,19,6,14,https://www.youtube.com/embed/uBRKVa7sy1Q,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
50,https://www.twoinchbrush.com/images/painting50.png,Covered Bridge Oval,19,7,10,https://www.youtube.com/embed/F4iPbH1OHsQ,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE
51,https://www.twoinchbrush.com/images/painting51.png,Scenic Seclusion,19,8,13,https://www.youtube.com/embed/d50HkqB9JEM,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
52,https://www.twoinchbrush.com/images/painting52.png,Ebb Tide,19,9,10,https://www.youtube.com/embed/mFOna_LN7Ys,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFFFFF', '#000000', '#0C0040', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE
53,https://www.twoinchbrush.com/images/painting53.png,After the Rain,19,10,12,https://www.youtube.com/embed/Wj-3ct7RvAI,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
54,https://www.twoinchbrush.com/images/painting54.png,Winter Elegance,19,11,9,https://www.youtube.com/embed/JjBZzKp_u5E,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE
56,https://www.twoinchbrush.com/images/painting56.png,Evening's Peace,19,12,10,https://www.youtube.com/embed/uEUMVwc4o5U,"['Alizarin Crimson', 'Black Gesso', 'Cadmium Yellow', 'Dark Sienna', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#000000', '#FFEC00', '#5F2E1F', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15']",TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE
57,https://www.twoinchbrush.com/images/painting57.png,Valley of Tranquility,19,13,13,https://www.youtube.com/embed/FnY7jDY5PsE,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
31,https://www.twoinchbrush.com/images/painting31.png,Mystic Mountain,20,1,12,https://www.youtube.com/embed/VlucWfTUo1A,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
32,https://www.twoinchbrush.com/images/painting32.png,New Day's Dawn,20,2,12,https://www.youtube.com/embed/vbPdQ0w8ylg,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
33,https://www.twoinchbrush.com/images/painting33.png,Winter in Pastel,20,3,9,https://www.youtube.com/embed/kbnXZRNMouM,"['Alizarin Crimson', 'Bright Red', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE
34,https://www.twoinchbrush.com/images/painting34.png,Hazy Day,20,4,11,https://www.youtube.com/embed/5U3G61r35Mc,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
35,https://www.twoinchbrush.com/images/painting35.png,Divine Elegance,20,5,12,https://www.youtube.com/embed/mb-Gwx1S5Gs,"['Alizarin Crimson', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
36,https://www.twoinchbrush.com/images/painting36.png,Cliffside,20,6,12,https://www.youtube.com/embed/p6Uy2qOLvGk,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
37,https://www.twoinchbrush.com/images/painting37.png,Autumn Fantasy,20,7,11,https://www.youtube.com/embed/FozIp7Va7dY,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
38,https://www.twoinchbrush.com/images/painting38.png,The Old Oak Tree,20,8,13,https://www.youtube.com/embed/dN4HjAn8p5U,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
39,https://www.twoinchbrush.com/images/painting39.png,Winter Paradise,20,9,6,https://www.youtube.com/embed/DY1aBv8Z1SQ,"['Alizarin Crimson', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White']","['#4E1500', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#FFFFFF']",FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE
40,https://www.twoinchbrush.com/images/painting40.png,Days Gone By,20,10,12,https://www.youtube.com/embed/DmYhNHVIdMI,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
41,https://www.twoinchbrush.com/images/painting41.png,Change of Seasons,20,11,12,https://www.youtube.com/embed/QbgPu5f2Vf8,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
42,https://www.twoinchbrush.com/images/painting42.png,Hidden Delight,20,12,11,https://www.youtube.com/embed/ZyPNzDaaDt8,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
43,https://www.twoinchbrush.com/images/painting43.png,Double Take,20,13,13,https://www.youtube.com/embed/ppzFgG2K2k4,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
17,https://www.twoinchbrush.com/images/painting17.png,Valley View,21,1,13,https://www.youtube.com/embed/pw5ETGiiBRg,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
18,https://www.twoinchbrush.com/images/painting18.png,Tranquil Dawn,21,2,10,https://www.youtube.com/embed/4abDq6Q-mlM,"['Alizarin Crimson', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#FFFFFF', '#221B15', '#C79B00']",FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE
19,https://www.twoinchbrush.com/images/painting19.png,Royal Majesty,21,3,14,https://www.youtube.com/embed/ubUXBqE6t0U,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
20,https://www.twoinchbrush.com/images/painting20.png,Serenity,21,4,12,https://www.youtube.com/embed/crqmO3qDdco,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
21,https://www.twoinchbrush.com/images/painting21.png,Cabin at Trails End,21,5,13,https://www.youtube.com/embed/GLkLO4KqTRs,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
22,https://www.twoinchbrush.com/images/painting22.png,Mountain Rhapsody,21,6,8,https://www.youtube.com/embed/H4VsmKU5T7g,"['Alizarin Crimson', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#FFFFFF', '#221B15', '#C79B00']",FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE
23,https://www.twoinchbrush.com/images/painting23.png,Wilderness Cabin,21,7,14,https://www.youtube.com/embed/GWehiacnd1E,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
24,https://www.twoinchbrush.com/images/painting24.png,By the Sea,21,8,13,https://www.youtube.com/embed/8tHHBTK6wwc,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
25,https://www.twoinchbrush.com/images/painting25.png,Indian Summer,21,9,13,https://www.youtube.com/embed/pfWV8NkotvU,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
27,https://www.twoinchbrush.com/images/painting27.png,Blue Winter,21,10,3,https://www.youtube.com/embed/liR0gS0sZY0,"['Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Titanium White']","['#000000', '#021E44', '#FFFFFF']",FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,TRUE,FALSE,FALSE,FALSE
28,https://www.twoinchbrush.com/images/painting28.png,Desert Glow,21,11,9,https://www.youtube.com/embed/QyncJfL_HmU,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#C79B00']",FALSE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE
29,https://www.twoinchbrush.com/images/painting29.png,Lone Mountain,21,12,13,https://www.youtube.com/embed/NJbzIftLLmU,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
30,https://www.twoinchbrush.com/images/painting30.png,Florida's Glory,21,13,11,https://www.youtube.com/embed/HQC5sPN9Xhc,"['Alizarin Crimson', 'Cadmium Yellow', 'Dark Sienna', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#FFEC00', '#5F2E1F', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
14,https://www.twoinchbrush.com/images/painting14.png,Autumn Images,22,1,11,https://www.youtube.com/embed/HMx34Am6RFg,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Red', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#CD5C5C', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
15,https://www.twoinchbrush.com/images/painting15.png,Hint of Springtime,22,2,13,https://www.youtube.com/embed/C-OSaHvt8ms,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
16,https://www.twoinchbrush.com/images/painting16.png,Around the Bend,22,3,14,https://www.youtube.com/embed/Kl5X3icOVvw,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
4,https://www.twoinchbrush.com/images/painting4.png,Countryside Oval,22,4,12,https://www.youtube.com/embed/hdNH5axK4u0,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
5,https://www.twoinchbrush.com/images/painting5.png,Russet Winter,22,5,9,https://www.youtube.com/embed/aE4nID1p-t0,"['Alizarin Crimson', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#FFFFFF', '#221B15', '#C79B00']",FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE
6,https://www.twoinchbrush.com/images/painting6.png,Purple Haze,22,6,11,https://www.youtube.com/embed/ZoJ2tcXWb7g,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
7,https://www.twoinchbrush.com/images/painting7.png,Dimensions,22,7,12,https://www.youtube.com/embed/JUuP75RVZDI,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
8,https://www.twoinchbrush.com/images/painting8.png,Deep Wilderness Home,22,8,12,https://www.youtube.com/embed/uZWNvDFfbUk,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
9,https://www.twoinchbrush.com/images/painting9.png,Haven in the Valley,22,9,13,https://www.youtube.com/embed/Qccgam514ds,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
10,https://www.twoinchbrush.com/images/painting10.png,Wintertime Blues,22,10,7,https://www.youtube.com/embed/dbMJVM4iL2Q,"['Alizarin Crimson', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15']",FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE
11,https://www.twoinchbrush.com/images/painting11.png,Pastel Seascape,22,11,11,https://www.youtube.com/embed/K4aud_SpFDQ,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
12,https://www.twoinchbrush.com/images/painting12.png,Country Creek,22,12,13,https://www.youtube.com/embed/JDa6JPcqy88,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
13,https://www.twoinchbrush.com/images/painting13.png,Silent Forest,22,13,13,https://www.youtube.com/embed/AE1GKcL3NuI,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
295,https://www.twoinchbrush.com/images/painting295.png,Frosty Winter Morn,23,1,8,https://www.youtube.com/embed/1-9_enMBquw,"['Alizarin Crimson', 'Cadmium Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#FFEC00', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15']",FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,FALSE,TRUE
296,https://www.twoinchbrush.com/images/painting296.png,Forest Edge,23,2,12,https://www.youtube.com/embed/puGk2iFvvp0,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
297,https://www.twoinchbrush.com/images/painting297.png,Mountain Ridge Lake,23,3,12,https://www.youtube.com/embed/Hq-z06i6HCs,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
298,https://www.twoinchbrush.com/images/painting298.png,Reflections of Gold,23,4,10,https://www.youtube.com/embed/8f9CCnqJ_1Y,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE
299,https://www.twoinchbrush.com/images/painting299.png,Quiet Cove,23,5,11,https://www.youtube.com/embed/cR9hTbSomx4,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
300,https://www.twoinchbrush.com/images/painting300.png,Rivers Peace,23,6,13,https://www.youtube.com/embed/flCWS9LB4Ks,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
301,https://www.twoinchbrush.com/images/painting301.png,At Dawn's Light,23,7,9,https://www.youtube.com/embed/HFdTxqEznIk,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#000000', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE
302,https://www.twoinchbrush.com/images/painting302.png,Valley Waterfall,23,8,15,https://www.youtube.com/embed/VYcsYzzRae4,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
303,https://www.twoinchbrush.com/images/painting303.png,Toward Days End,23,9,13,https://www.youtube.com/embed/cFi_fJl40BA,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
304,https://www.twoinchbrush.com/images/painting304.png,Falls in the Glen,23,10,14,https://www.youtube.com/embed/txAtX-VyVNc,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
305,https://www.twoinchbrush.com/images/painting305.png,Frozen Beauty in Vignette,23,11,9,https://www.youtube.com/embed/H15kV1wbDG4,"['Bright Red', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#DB0000', '#5F2E1F', '#000000', '#0C0040', '#102E3C', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,FALSE
306,https://www.twoinchbrush.com/images/painting306.png,Crimson Tide,23,12,8,https://www.youtube.com/embed/Y7SDU4i6Fco,"['Alizarin Crimson', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#FFFFFF', '#221B15', '#C79B00']",FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE
307,https://www.twoinchbrush.com/images/painting307.png,Winter Bliss,23,13,7,https://www.youtube.com/embed/yInYwy6AsDQ,"['Alizarin Crimson', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15']",FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE
308,https://www.twoinchbrush.com/images/painting308.png,Gray Mountain,24,1,13,https://www.youtube.com/embed/4XxClvPZ1RE,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
309,https://www.twoinchbrush.com/images/painting309.png,Wayside Pond,24,2,11,https://www.youtube.com/embed/FPW2FwK4IOo,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
310,https://www.twoinchbrush.com/images/painting310.png,Teton Winter,24,3,6,https://www.youtube.com/embed/I4h6TC4CPJY,"['Alizarin Crimson', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White']","['#4E1500', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF']",FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE
311,https://www.twoinchbrush.com/images/painting311.png,Little Home in the Meadow,24,4,12,https://www.youtube.com/embed/nU1zV93N-kI,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#C79B00']",TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,FALSE,TRUE,TRUE
312,https://www.twoinchbrush.com/images/painting312.png,A Pretty Autumn Day,24,5,13,https://www.youtube.com/embed/HWedDS3p7XI,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#C79B00']",TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,FALSE,TRUE,TRUE
313,https://www.twoinchbrush.com/images/painting313.png,Mirrored Images,24,6,12,https://www.youtube.com/embed/i29frkR1T98,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
314,https://www.twoinchbrush.com/images/painting314.png,Back-Country Path,24,7,11,https://www.youtube.com/embed/2iNMoQB1Pe8,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#C79B00']",TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,FALSE,TRUE,TRUE
315,https://www.twoinchbrush.com/images/painting315.png,Graceful Waterfall,24,8,15,https://www.youtube.com/embed/fBh1nA4pMDY,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
316,https://www.twoinchbrush.com/images/painting316.png,Icy Lake,24,9,11,https://www.youtube.com/embed/AmBDmgta3l4,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
317,https://www.twoinchbrush.com/images/painting317.png,Rowboat on the Beach,24,10,8,https://www.youtube.com/embed/hfvhXOvg43w,"['Alizarin Crimson', 'Cadmium Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Sap Green', 'Titanium White', 'Yellow Ochre']","['#4E1500', '#FFEC00', '#000000', '#0C0040', '#102E3C', '#0A3410', '#FFFFFF', '#C79B00']",FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE
318,https://www.twoinchbrush.com/images/painting318.png,Portrait of Winter,24,11,5,https://www.youtube.com/embed/JLnIUGOupOA,"['Alizarin Crimson', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White']","['#4E1500', '#000000', '#0C0040', '#021E44', '#FFFFFF']",FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE
319,https://www.twoinchbrush.com/images/painting319.png,The Footbridge,24,12,13,https://www.youtube.com/embed/RqtDliGeyTg,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
320,https://www.twoinchbrush.com/images/painting320.png,Snowbound Cabin,24,13,8,https://www.youtube.com/embed/obSLZWXmDak,"['Alizarin Crimson', 'Black Gesso', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White']","['#4E1500', '#000000', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF']",TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE
321,https://www.twoinchbrush.com/images/painting321.png,Hide A Way Cove,25,1,13,https://www.youtube.com/embed/l_HqMYquc08,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
322,https://www.twoinchbrush.com/images/painting322.png,Enchanted Falls Oval,25,2,6,https://www.youtube.com/embed/HklPkQ0lSKA,"['Alizarin Crimson', 'Black Gesso', 'Indian Yellow', 'Sap Green', 'Titanium White', 'Yellow Ochre']","['#4E1500', '#000000', '#FFB800', '#0A3410', '#FFFFFF', '#C79B00']",TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE
323,https://www.twoinchbrush.com/images/painting323.png,Not Quite Spring,25,3,9,https://www.youtube.com/embed/N_u6x7LeyTM,"['Alizarin Crimson', 'Black Gesso', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#FFEC00', '#5F2E1F', '#000000', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE
324,https://www.twoinchbrush.com/images/painting324.png,Splashes of Autumn,25,4,14,https://www.youtube.com/embed/YcbaMqq_X8s,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
325,https://www.twoinchbrush.com/images/painting325.png,Summer in the Mountain,25,5,11,https://www.youtube.com/embed/gmCXgS38NDc,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
326,https://www.twoinchbrush.com/images/painting326.png,Oriental Falls,25,6,11,https://www.youtube.com/embed/v8Znj8bbmCQ,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
327,https://www.twoinchbrush.com/images/painting327.png,Autumn Palette,25,7,13,https://www.youtube.com/embed/HWrvW-NgaOY,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
328,https://www.twoinchbrush.com/images/painting328.png,Cypress Swamp,25,8,12,https://www.youtube.com/embed/FdIUHudQABI,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
329,https://www.twoinchbrush.com/images/painting329.png,Downstream View,25,9,14,https://www.youtube.com/embed/KsDPg5HZYNw,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
330,https://www.twoinchbrush.com/images/painting330.png,Just Before the Storm,25,10,8,https://www.youtube.com/embed/Rh-jKrMrmOA,"['Alizarin Crimson', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#FFEC00', '#5F2E1F', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15']",FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,FALSE,TRUE
331,https://www.twoinchbrush.com/images/painting331.png,Fisherman's Paradise,25,11,12,https://www.youtube.com/embed/uJLK85uU5mA,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
332,https://www.twoinchbrush.com/images/painting332.png,Desert Hues,25,12,11,https://www.youtube.com/embed/UUNNXGVNTuI,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
333,https://www.twoinchbrush.com/images/painting333.png,The Property Line,25,13,11,https://www.youtube.com/embed/ivesI3rU7dU,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
334,https://www.twoinchbrush.com/images/painting334.png,In the Stillness of Morning,26,1,10,https://www.youtube.com/embed/5rfGa1_iJpw,"['Alizarin Crimson', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
335,https://www.twoinchbrush.com/images/painting335.png,Delightful Meadow Home,26,2,9,https://www.youtube.com/embed/tWoInh2USOs,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#C79B00']",FALSE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,FALSE,TRUE,TRUE
336,https://www.twoinchbrush.com/images/painting336.png,First Snow,26,3,12,https://www.youtube.com/embed/raAkJKeo0Sk,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
337,https://www.twoinchbrush.com/images/painting337.png,Lake in the Valley,26,4,15,https://www.youtube.com/embed/KvJmSrErm20,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
338,https://www.twoinchbrush.com/images/painting338.png,A Trace of Spring,26,5,13,https://www.youtube.com/embed/JMPwj3u4ZTA,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
339,https://www.twoinchbrush.com/images/painting339.png,An Arctic Winter Day,26,6,6,https://www.youtube.com/embed/9BHWlbjd95c,"['Alizarin Crimson', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#5F2E1F', '#000000', '#021E44', '#FFFFFF', '#221B15']",FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE
340,https://www.twoinchbrush.com/images/painting340.png,Snow Birch,26,7,5,https://www.youtube.com/embed/wKeemvioVrM,"['Black Gesso', 'Indian Yellow', 'Phthalo Blue', 'Prussian Blue', 'Titanium White']","['#000000', '#FFB800', '#0C0040', '#021E44', '#FFFFFF']",TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,FALSE,TRUE,FALSE,TRUE,FALSE,FALSE,FALSE
341,https://www.twoinchbrush.com/images/painting341.png,Early Autumn,26,8,12,https://www.youtube.com/embed/SLQXlFLoqQc,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
342,https://www.twoinchbrush.com/images/painting342.png,Tranquil Wooded Stream,26,9,12,https://www.youtube.com/embed/lSeRrm5ZK9c,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
343,https://www.twoinchbrush.com/images/painting343.png,Purple Mountain Range,26,10,13,https://www.youtube.com/embed/nkDA_R-XmqA,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
344,https://www.twoinchbrush.com/images/painting344.png,Storm's A Comin,26,11,10,https://www.youtube.com/embed/EHD9u-lo2wc,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#102E3C', '#FFFFFF', '#221B15']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE
345,https://www.twoinchbrush.com/images/painting345.png,Sunset Aglow,26,12,12,https://www.youtube.com/embed/gMEZp47VKC0,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
346,https://www.twoinchbrush.com/images/painting346.png,Evening at the Falls,26,13,7,https://www.youtube.com/embed/RulXVcpgpqw,"['Black Gesso', 'Cadmium Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White']","['#000000', '#FFEC00', '#FFFFFF', '#000000', '#021E44', '#0A3410', '#FFFFFF']",TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE
347,https://www.twoinchbrush.com/images/painting347.png,Twilight Beauty,27,1,11,https://www.youtube.com/embed/0mJqzzeWyXs,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#FFFFFF', '#221B15']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE
348,https://www.twoinchbrush.com/images/painting348.png,Angler's Haven,27,2,15,https://www.youtube.com/embed/XlwfcXZ0AIU,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Black', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#FFFFFF', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
349,https://www.twoinchbrush.com/images/painting349.png,Rustic Winter Woods,27,3,6,https://www.youtube.com/embed/3q8Zi9480lw,"['Alizarin Crimson', 'Cadmium Yellow', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Sap Green', 'Titanium White']","['#4E1500', '#FFEC00', '#FFB800', '#000000', '#0A3410', '#FFFFFF']",FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE
350,https://www.twoinchbrush.com/images/painting350.png,Wilderness Falls,27,4,15,https://www.youtube.com/embed/gxd0MPX8c6I,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Black', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#FFFFFF', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
351,https://www.twoinchbrush.com/images/painting351.png,Winter at the Farm,27,5,7,https://www.youtube.com/embed/LeIVNKnWz7o,"['Alizarin Crimson', 'Dark Sienna', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#5F2E1F', '#FFFFFF', '#000000', '#021E44', '#FFFFFF', '#221B15']",FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE
352,https://www.twoinchbrush.com/images/painting352.png,Daisies at Dawn,27,6,8,https://www.youtube.com/embed/_kkZcIgocBM,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Sap Green', 'Titanium White', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#FFB800', '#000000', '#0A3410', '#FFFFFF', '#C79B00']",FALSE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE
353,https://www.twoinchbrush.com/images/painting353.png,A Spectacular View,27,7,11,https://www.youtube.com/embed/7R9HcaDT9P4,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
354,https://www.twoinchbrush.com/images/painting354.png,Daybreak,27,8,7,https://www.youtube.com/embed/crWDcTvDmec,"['Alizarin Crimson', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#FFEC00', '#5F2E1F', '#000000', '#021E44', '#FFFFFF', '#221B15']",FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE
355,https://www.twoinchbrush.com/images/painting355.png,Island Paradise,27,9,12,https://www.youtube.com/embed/Cg3XAVhAas0,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#102E3C', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE
356,https://www.twoinchbrush.com/images/painting356.png,Sunlight in the Shadows,27,10,7,https://www.youtube.com/embed/xgjQ0v2d9mE,"['Alizarin Crimson', 'Black Gesso', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#FFFFFF', '#000000', '#FFFFFF', '#221B15', '#C79B00']",TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE
357,https://www.twoinchbrush.com/images/painting357.png,Splendor of a Snowy Winter,27,11,9,https://www.youtube.com/embed/JdXCoxkOdwQ,"['Alizarin Crimson', 'Dark Sienna', 'Liquid Black', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#5F2E1F', '#000000', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15']",FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE
358,https://www.twoinchbrush.com/images/painting358.png,Forest River,27,12,14,https://www.youtube.com/embed/wrbGlR22K0Q,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
359,https://www.twoinchbrush.com/images/painting359.png,Golden Glow of Morning,27,13,9,https://www.youtube.com/embed/qXElmiqzcI0,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#C79B00']",FALSE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE
360,https://www.twoinchbrush.com/images/painting360.png,Fisherman's Trail,28,1,12,https://www.youtube.com/embed/VnZEpic2UzU,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
361,https://www.twoinchbrush.com/images/painting361.png,A Warm Winter,28,2,9,https://www.youtube.com/embed/_TTdw3YnXuo,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#C79B00']",FALSE,TRUE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,FALSE,TRUE,TRUE
362,https://www.twoinchbrush.com/images/painting362.png,Under Pastel Skies,28,3,12,https://www.youtube.com/embed/lzODyJS2ZIg,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
363,https://www.twoinchbrush.com/images/painting363.png,Golden Rays of Sunshine,28,4,8,https://www.youtube.com/embed/zxj3xLDNxo0,"['Alizarin Crimson', 'Black Gesso', 'Indian Yellow', 'Liquid Clear', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White']","['#4E1500', '#000000', '#FFB800', '#FFFFFF', '#0C0040', '#021E44', '#0A3410', '#FFFFFF']",TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE
364,https://www.twoinchbrush.com/images/painting364.png,The Magic of Fall,28,5,10,https://www.youtube.com/embed/bSm3fmEyJ20,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#C79B00']",FALSE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE
365,https://www.twoinchbrush.com/images/painting365.png,Glacier Lake,28,6,12,https://www.youtube.com/embed/TohG7F8M3Ls,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
366,https://www.twoinchbrush.com/images/painting366.png,The Old Weathered Barn,28,7,9,https://www.youtube.com/embed/NYUIIBFj0iQ,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#C79B00']",FALSE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE
367,https://www.twoinchbrush.com/images/painting367.png,Deep Forest Falls,28,8,13,https://www.youtube.com/embed/urHQRbRNuYI,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
368,https://www.twoinchbrush.com/images/painting368.png,Winter's Grace,28,9,4,https://www.youtube.com/embed/mxJ2On9wyvY,"['Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White']","['#000000', '#0C0040', '#021E44', '#FFFFFF']",FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,FALSE,FALSE,FALSE
369,https://www.twoinchbrush.com/images/painting369.png,Splendor of Autumn,28,10,11,https://www.youtube.com/embed/hEyR2FDp-00,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
370,https://www.twoinchbrush.com/images/painting370.png,Tranquil Seas,28,11,11,https://www.youtube.com/embed/kN1DP_yqs-A,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Sap Green', 'Titanium White', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#FFB800', '#000000', '#0C0040', '#102E3C', '#0A3410', '#FFFFFF', '#C79B00']",TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE
371,https://www.twoinchbrush.com/images/painting371.png,Mountain Serenity,28,12,13,https://www.youtube.com/embed/wc_YVijYjT4,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
372,https://www.twoinchbrush.com/images/painting372.png,Home Before Nightfall,28,13,8,https://www.youtube.com/embed/22SiIDvyJeM,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#C79B00']",FALSE,TRUE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE
373,https://www.twoinchbrush.com/images/painting373.png,Island in the Wilderness,29,1,13,https://www.youtube.com/embed/lLWEXRAnQd0,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
374,https://www.twoinchbrush.com/images/painting374.png,Autumn Oval,29,2,10,https://www.youtube.com/embed/2XnIdinwot0,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
375,https://www.twoinchbrush.com/images/painting375.png,Seasonal Progression,29,3,13,https://www.youtube.com/embed/T2G5waMfQ-g,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
376,https://www.twoinchbrush.com/images/painting376.png,Light at the Summit,29,4,14,https://www.youtube.com/embed/HOdS-G8p1KE,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
377,https://www.twoinchbrush.com/images/painting377.png,Countryside Barn,29,5,12,https://www.youtube.com/embed/G7Etn7QMeO4,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
378,https://www.twoinchbrush.com/images/painting378.png,Mountain Lake Falls,29,6,9,https://www.youtube.com/embed/dNEp3hoHSDI,"['Alizarin Crimson', 'Cadmium Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#FFEC00', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15']",FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,FALSE,TRUE
379,https://www.twoinchbrush.com/images/painting379.png,Cypress Creek,29,7,11,https://www.youtube.com/embed/Tnb2cXKKuWM,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
380,https://www.twoinchbrush.com/images/painting380.png,Trapper's Cabin,29,8,12,https://www.youtube.com/embed/chhCkmp0RG8,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
381,https://www.twoinchbrush.com/images/painting381.png,Storm on the Horizon,29,9,9,https://www.youtube.com/embed/pA_2paUhBAQ,"['Alizarin Crimson', 'Bright Red', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#5F2E1F', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
382,https://www.twoinchbrush.com/images/painting382.png,Pot O' Posies,29,10,6,https://www.youtube.com/embed/2zv_S_uVoVQ,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green']","['#4E1500', '#000000', '#DB0000', '#000000', '#021E44', '#0A3410']",TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE
383,https://www.twoinchbrush.com/images/painting383.png,A Perfect Winter Day,29,11,7,https://www.youtube.com/embed/Io4fwhacpEs,"['Alizarin Crimson', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15']",FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE
384,https://www.twoinchbrush.com/images/painting384.png,Aurora's Dance,29,12,9,https://www.youtube.com/embed/iRMsb9Vf7GM,"['Alizarin Crimson', 'Dark Sienna', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#5F2E1F', '#FFFFFF', '#000000', '#0C0040', '#102E3C', '#021E44', '#FFFFFF', '#221B15']",FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE
385,https://www.twoinchbrush.com/images/painting385.png,Woodman's Retreat,29,13,12,https://www.youtube.com/embed/ODrV0dfQcNs,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
386,https://www.twoinchbrush.com/images/painting386.png,Babbling Brook,30,1,12,https://www.youtube.com/embed/ZHUdS0wEaKk,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
387,https://www.twoinchbrush.com/images/painting387.png,Woodgrain View,30,2,13,https://www.youtube.com/embed/fcx1yUuSf3o,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
388,https://www.twoinchbrush.com/images/painting388.png,Winter's Peace,30,3,10,https://www.youtube.com/embed/Xzv3iiWi1Wo,"['Alizarin Crimson', 'Bright Red', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE
389,https://www.twoinchbrush.com/images/painting389.png,Wilderness Trail,30,4,13,https://www.youtube.com/embed/vGsW_6BCukU,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
390,https://www.twoinchbrush.com/images/painting390.png,A Copper Winter,30,5,13,https://www.youtube.com/embed/BSjee-ond7w,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
391,https://www.twoinchbrush.com/images/painting391.png,Misty Foothills,30,6,10,https://www.youtube.com/embed/LEz4UVL7POE,"['Alizarin Crimson', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
392,https://www.twoinchbrush.com/images/painting392.png,Through the Window,30,7,7,https://www.youtube.com/embed/SrN4A9rVXj0,"['Alizarin Crimson', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15']",FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE
393,https://www.twoinchbrush.com/images/painting393.png,Home in the Valley,30,8,13,https://www.youtube.com/embed/enutOy-nsZk,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
394,https://www.twoinchbrush.com/images/painting394.png,Mountains of Grace,30,9,11,https://www.youtube.com/embed/nXlu_Q0sR7c,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
395,https://www.twoinchbrush.com/images/painting395.png,Seaside Harmony,30,10,12,https://www.youtube.com/embed/CY6sGFs209E,"['Alizarin Crimson', 'Black Gesso', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#000000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15']",TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,FALSE,TRUE
396,https://www.twoinchbrush.com/images/painting396.png,A Cold Spring Day,30,11,13,https://www.youtube.com/embed/jq8bIbpW7DQ,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
397,https://www.twoinchbrush.com/images/painting397.png,Evening's Glow,30,12,10,https://www.youtube.com/embed/eTEKGOi6SVg,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
398,https://www.twoinchbrush.com/images/painting398.png,Blue Ridge Falls,30,13,12,https://www.youtube.com/embed/fz0YjqtHW84,"['Alizarin Crimson', 'Black Gesso', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
399,https://www.twoinchbrush.com/images/painting399.png,Reflections of Calm,31,1,12,https://www.youtube.com/embed/kJFB6rH3z2A,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
400,https://www.twoinchbrush.com/images/painting400.png,Before the Snowfall,31,2,7,https://www.youtube.com/embed/_MdMhQIOL1Y,"['Alizarin Crimson', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15']",FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE
401,https://www.twoinchbrush.com/images/painting401.png,Winding Stream,31,3,13,https://www.youtube.com/embed/QDwd4pMYyuo,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Black', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
402,https://www.twoinchbrush.com/images/painting402.png,Tranquility Cove,31,4,11,https://www.youtube.com/embed/7t6ue0pEcNE,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
403,https://www.twoinchbrush.com/images/painting403.png,Cabin in the Hollow,31,5,7,https://www.youtube.com/embed/KYlM2zJnNWY,"['Alizarin Crimson', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15']",FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE
404,https://www.twoinchbrush.com/images/painting404.png,View from Clear Creek,31,6,13,https://www.youtube.com/embed/TLX1bmS8wBE,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
405,https://www.twoinchbrush.com/images/painting405.png,Bridge to Autumn,31,7,11,https://www.youtube.com/embed/ReENCTH7MYI,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
406,https://www.twoinchbrush.com/images/painting406.png,Trail's End,31,8,10,https://www.youtube.com/embed/XWQrP-WiLgc,"['Alizarin Crimson', 'Black Gesso', 'Dark Sienna', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#5F2E1F', '#FFFFFF', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
407,https://www.twoinchbrush.com/images/painting407.png,Evergreen Valley,31,9,14,https://www.youtube.com/embed/mEU0stNfkxI,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Black', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#000000', '#0C0040', '#102E3C', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
408,https://www.twoinchbrush.com/images/painting408.png,Balmy Beach,31,10,13,https://www.youtube.com/embed/kMgd6r6c4vE,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Liquid Clear', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Phthalo Green\\r\\n', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#FFFFFF', '#000000', '#0C0040', '#102E3C', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE
409,https://www.twoinchbrush.com/images/painting409.png,Lake at the Ridge,31,11,12,https://www.youtube.com/embed/8QWvzEQ69Kw,"['Alizarin Crimson', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#021E44', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE
410,https://www.twoinchbrush.com/images/painting410.png,In the Midst of Winter,31,12,7,https://www.youtube.com/embed/qx2IsmrCs3c,"['Alizarin Crimson', 'Dark Sienna', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Prussian Blue', 'Titanium White', 'Van Dyke Brown']","['#4E1500', '#5F2E1F', '#000000', '#0C0040', '#021E44', '#FFFFFF', '#221B15']",FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE
411,https://www.twoinchbrush.com/images/painting411.png,Wilderness Day,31,13,12,https://www.youtube.com/embed/nJGCVFn57U8,"['Alizarin Crimson', 'Black Gesso', 'Bright Red', 'Cadmium Yellow', 'Dark Sienna', 'Indian Yellow', 'Midnight Black\\r\\n\\r\\n', 'Phthalo Blue', 'Sap Green', 'Titanium White', 'Van Dyke Brown', 'Yellow Ochre']","['#4E1500', '#000000', '#DB0000', '#FFEC00', '#5F2E1F', '#FFB800', '#000000', '#0C0040', '#0A3410', '#FFFFFF', '#221B15', '#C79B00']",TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE
`;function On(e){let t=[],n=[],r=``,i=!1;for(let a=0;a<e.length;a++){let o=e[a],s=e[a+1];o===`"`?i&&s===`"`?(r+=`"`,a++):i=!i:o===`,`&&!i?(n.push(r.trim()),r=``):(o===`
`||o===`\r`&&s===`
`)&&!i?(o===`\r`&&a++,n.push(r.trim()),(n.length>1||n[0]!==``)&&t.push(n),n=[],r=``):r+=o}return(r||n.length>0)&&(n.push(r.trim()),(n.length>1||n[0]!==``)&&t.push(n)),t}function kn(e){return e?e.replace(/^\[|\]$/g,``).split(`,`).map(e=>e.replace(/\\\\r|\\\\n|\\r|\\n|\r|\n/g,``).replace(/^['"\s]+|['"\s]+$/g,``).trim()).filter(Boolean):[]}function An(e){if(!e)return``;let t=e.match(/(?:embed\/|v\/|watch\?v=|youtu\.be\/|\/v=|^)([a-zA-Z0-9_-]{11})/);return t?t[1]:e.trim()}var jn=[`Black_Gesso`,`Bright_Red`,`Burnt_Umber`,`Cadmium_Yellow`,`Dark_Sienna`,`Indian_Red`,`Indian_Yellow`,`Liquid_Black`,`Liquid_Clear`,`Midnight_Black`,`Phthalo_Blue`,`Phthalo_Green`,`Prussian_Blue`,`Sap_Green`,`Titanium_White`,`Van_Dyke_Brown`,`Yellow_Ochre`,`Alizarin_Crimson`];function Mn(){let e=On(En),t=On(Dn),n=e[0]||[],r=t[0]||[],i=[];for(let a=1;a<t.length;a++){let o=t[a],s=e[a]||[],c=parseInt(o[0],10)||a,l=o[1]||``,u=o[2]||`Episode ${a}`,d=parseInt(o[3],10)||1,f=parseInt(o[4],10)||1,p=parseInt(o[5],10)||0,m=o[6]||``,h=An(m),g=kn(o[7]),_=kn(o[8]),v={};jn.forEach(e=>{let t=r.indexOf(e),i=n.indexOf(e),a=t>=0&&o[t]===`TRUE`,c=i>=0&&s[i]===`1`;v[e]=a||c}),i.push({index:c,id:h,title:u,season:d,episode:f,numColors:p,youtubeSrc:m.startsWith(`http`)?m:`https://www.youtube.com/embed/${h}`,watchUrl:`https://www.youtube.com/watch?v=${h}`,imgSrc:l,colors:g,colorHex:_,colorPresence:v})}return i}var Nn=Mn(),Pn=Object.fromEntries(Nn.map(e=>[e.id,e]));Object.fromEntries(Nn.map(e=>[e.index,e]));var Fn=Array.from(new Set(Nn.map(e=>e.season))).sort((e,t)=>e-t),In=Nn[0],Ln=Object.assign({"./data/transcripts/transcript-s1e1.txt":y,"./data/transcripts/transcript-s1e10.txt":b,"./data/transcripts/transcript-s1e11.txt":x,"./data/transcripts/transcript-s1e12.txt":S,"./data/transcripts/transcript-s1e2.txt":C,"./data/transcripts/transcript-s1e3.txt":w,"./data/transcripts/transcript-s1e4.txt":T,"./data/transcripts/transcript-s1e5.txt":ee,"./data/transcripts/transcript-s1e6.txt":te,"./data/transcripts/transcript-s1e7.txt":E,"./data/transcripts/transcript-s1e8.txt":ne,"./data/transcripts/transcript-s1e9.txt":re,"./transcript-s1e1.txt":ie,"./transcript-s1e2.txt":ae}),Rn={},zn={};for(let e in Ln){let t=Ln[e],n=t.match(/Video ID:\s*([a-zA-Z0-9_-]{11})/);n&&(Rn[n[1]]=t);let r=e.match(/transcript-s1e(\d+)\.txt/);r&&(zn[`1-${r[1]}`]=t)}var Bn=(e=0)=>`${Math.floor(e/60).toString().padStart(2,`0`)}:${Math.floor(e%60).toString().padStart(2,`0`)}`,Vn=e=>{let t=[];return e.split(`
`).forEach(e=>{let n=e.match(/^\[(\d+):(\d+)\]\s+(?:-\s+)?(.+)$/);if(!n)return;let r=Number(n[1])*60+Number(n[2]);t.push({start:r,text:n[3].trim()})}),t.map((e,n)=>({...e,end:t[n+1]?.start??99999}))},Hn=e=>typeof e==`string`?Vn(e):Array.isArray(e)?e.filter(e=>Number.isFinite(Number(e.start))&&typeof e.text==`string`).map((e,t,n)=>({start:Number(e.start),end:Number.isFinite(Number(e.end))?Number(e.end):Number(n[t+1]?.start??99999),text:e.text.trim()})):[];function Un(e,t){let n=0,r=e.length-1,i=-1;for(;n<=r;){let a=n+r>>1;e[a].start<=t?(i=a,n=a+1):r=a-1}return i>=0&&t<e[i].end?e[i]:null}function Wn(e,t={}){return{content:[{type:`text`,text:e}],structuredContent:t}}function Gn(){return typeof document<`u`&&document.modelContext?.registerTool?document.modelContext:typeof navigator<`u`&&navigator.modelContext?.registerTool?navigator.modelContext:null}function Kn(e,t){if(!Array.isArray(e)||!t)return[];let n=t.getBoundingClientRect();return!n.width||!n.height?[]:e.slice(0,512).flatMap(e=>{let t=Number(e?.x),r=Number(e?.y);if(!Number.isFinite(t)||!Number.isFinite(r)||t<0||t>1||r<0||r>1)return[];let i=Number(e.pressure);return[{x:t*n.width,y:r*n.height,pressure:Number.isFinite(i)?Math.max(.05,Math.min(1,i)):.7}]})}function qn(e,t,n){let[r,i]=(0,_.useState)({videoId:e,status:`loading`,cues:[]});return(0,_.useEffect)(()=>{if(n?.videoId===e&&n?.cues?.length)return i({videoId:e,status:`ready`,cues:n.cues}),()=>{};let r=Rn[e]||zn[`${t?.season}-${t?.episode}`];if(r){let t=Vn(r);return i({videoId:e,status:`ready`,cues:t}),()=>{}}return i({videoId:e,status:`unavailable`,cues:[]}),()=>{}},[n,e,t]),r}function Jn(e,t,n=[]){e?.contentWindow?.postMessage(JSON.stringify({event:`command`,func:t,args:n}),`*`)}function Yn(e){if(!e||e.length<7)return{tint:`#ffffff`,pure:`#58745e`,shade:`#1a1614`};let[t,n,r]=[1,3,5].map(t=>parseInt(e.slice(t,t+2),16)||0);return{tint:`#${[Math.min(255,Math.round(t+(255-t)*.45)),Math.min(255,Math.round(n+(255-n)*.45)),Math.min(255,Math.round(r+(255-r)*.45))].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`,pure:e,shade:`#${[Math.max(0,Math.round(t*.52)),Math.max(0,Math.round(n*.52)),Math.max(0,Math.round(r*.52))].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}}var Xn=_.forwardRef(({handleAxis:e,...t},n)=>(0,P.jsx)(`div`,{ref:n,className:`video-drag-handle handle-bottom`,...t,title:`Drag to resize maintaining 16:9 aspect ratio`,children:(0,P.jsxs)(`div`,{className:`grip-badge`,children:[(0,P.jsx)(`span`,{}),(0,P.jsx)(`span`,{}),(0,P.jsx)(`span`,{})]})})),Zn=_.forwardRef(({handleAxis:e,...t},n)=>(0,P.jsx)(`div`,{ref:n,className:`video-drag-handle handle-top`,...t,title:`Drag to resize video height`,children:(0,P.jsxs)(`div`,{className:`grip-badge`,children:[(0,P.jsx)(`span`,{}),(0,P.jsx)(`span`,{}),(0,P.jsx)(`span`,{})]})})),Qn=_.forwardRef(({handleAxis:e,...t},n)=>(0,P.jsx)(`div`,{ref:n,className:`video-drag-handle handle-se`,...t,title:`Drag corner to resize maintaining 16:9 aspect ratio`,children:(0,P.jsx)(`div`,{className:`grip-badge-corner`})})),$n=_.forwardRef(({handleAxis:e,...t},n)=>(0,P.jsx)(`div`,{ref:n,className:`panel-drag-handle handle-e`,...t,title:`Drag to resize panel width`,children:(0,P.jsx)(`div`,{className:`panel-drag-bar`})})),er=_.forwardRef(({handleAxis:e,...t},n)=>(0,P.jsx)(`div`,{ref:n,className:`panel-drag-handle handle-w`,...t,title:`Drag to resize panel width`,children:(0,P.jsx)(`div`,{className:`panel-drag-bar`})})),tr=_.forwardRef(function({owner:e,episode:t,onTime:n,onState:r,onVideoChange:i,onPrev:a,onNext:o},s){let c=(0,_.useRef)(null),l=(0,_.useRef)(0),u=(0,_.useRef)(t||In),[d,f]=(0,_.useState)(0),[p,m]=(0,_.useState)(0),[h,g]=(0,_.useState)(!1);(0,_.useEffect)(()=>{u.current=t,l.current=0,f(0),m(0),g(!1),n?.(0),r?.(!1)},[t,n,r]),(0,_.useEffect)(()=>{let t=new AbortController;window.addEventListener(`message`,e=>{if(e.source!==c.current?.contentWindow)return;let t=e.data;try{typeof t==`string`&&(t=JSON.parse(t))}catch{return}let a=t?.info;if(!a)return;let o=a.videoData,s=o?.video_id||o?.videoId||a.videoId;if(s&&s!==u.current?.id){let e=Pn[s];u.current=e||{id:s,title:o?.title||`YouTube lesson`},l.current=0,f(0),m(0),g(!1),n?.(0),r?.(!1),i?.(u.current)}if(Number.isFinite(a.currentTime)&&(l.current=a.currentTime,f(a.currentTime),n?.(a.currentTime)),Number.isFinite(a.duration)&&m(a.duration),Number.isFinite(a.playerState)){let e=a.playerState===1;g(e),r?.(e)}},{signal:t.signal});let a=()=>c.current?.contentWindow?.postMessage(JSON.stringify({event:`listening`,id:`${e}-listener`}),`*`);a();let o=window.setInterval(a,1500);return()=>{t.abort(),window.clearInterval(o)}},[n,r,i,e]);let v=(0,_.useMemo)(()=>({play:()=>Jn(c.current,`playVideo`),pause:()=>Jn(c.current,`pauseVideo`),seek:e=>Jn(c.current,`seekTo`,[Math.max(0,l.current+e),!0]),seekTo:e=>Jn(c.current,`seekTo`,[Math.max(0,Number(e)||0),!0]),time:()=>l.current,screenshot:()=>({owner:e,time:l.current,...u.current})}),[e]);_.useImperativeHandle(s,()=>v,[v]);let y=t?.watchUrl||t?.youtubeSrc||(t?.id?`https://www.youtube.com/watch?v=${t.id}`:``);return(0,P.jsxs)(`div`,{className:`video-frame`,children:[(0,P.jsx)(Ve,{ref:c,className:`youtube-video`,src:y,source:{src:y,engine:{youtube:{cc_load_policy:1,cc_lang_pref:`en`,rel:0}}},playsInline:!0,controls:!0},`${e}-${t?.id||`def`}`),e===`you`&&(0,P.jsx)(`button`,{className:`pick-video`,onClick:()=>window.paintAlongAgent?.eyedrop(),children:`⌖ pick color`})]},`${e}-${t?.id||`def`}`)});function nr({id:e,engineRef:t,settings:n,label:r,onActivate:i}){let a=(0,_.useRef)(null),[o,s]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{let e=Tn(a.current,()=>s(!0));return t.current=e,()=>{e.destroy(),t.current=null}},[t]),(0,_.useEffect)(()=>{t.current?.setOptions(n)},[t,n]),(0,P.jsx)(`div`,{className:`easel`,onPointerDown:i,children:(0,P.jsxs)(`div`,{className:`canvas-shell paper-${n.paper} ${o?`painted`:``}`,children:[(0,P.jsx)(`canvas`,{ref:a,id:e,width:`848`,height:`1060`,"aria-label":r}),(0,P.jsx)(`div`,{className:`empty-hint`,children:e===`humanCanvas`?`Begin with a quiet sky`:`Waiting for a happy accident`})]})})}function rr({time:e,playing:t,transcript:n,episode:r}){let i=Un(n.cues,e),a=i?.text||(e<(n.cues[0]?.start??0)?`The lesson is beginning…`:`Listening…`),o=n.status===`loading`?`Loading this episode’s transcript…`:n.status===`unavailable`?`Captions available via YouTube CC. (${n.cues.length?`Showing cached cues`:`CC on player`})`:a;return(0,P.jsxs)(`aside`,{className:`transcript`,"aria-live":`polite`,children:[(0,P.jsxs)(`div`,{className:`live-label`,children:[(0,P.jsx)(`i`,{className:t?`playing`:``}),` LIVE TRANSCRIPT`]}),(0,P.jsxs)(`div`,{className:`transcript-episode`,children:[`S`,r.season||`—`,` · E`,r.episode||`—`,` · `,r.title]}),(0,P.jsx)(`div`,{className:`speaker`,children:`BOB ROSS`}),(0,P.jsxs)(`blockquote`,{className:`live-caption transcript-${n.status}`,children:[`"`,o,`"`]},`${r.id}-${i?.start??n.status}`),(0,P.jsx)(`div`,{className:`caption-time`,children:Bn(e)})]})}function ir({isOpen:e,onClose:t,currentEpisode:n,onSelectEpisode:r}){let[i,a]=(0,_.useState)(`all`),[o,s]=(0,_.useState)(``);if(!e)return null;let c=Nn.filter(e=>{if(i!==`all`&&e.season!==Number(i))return!1;if(o.trim()){let t=o.toLowerCase(),n=e.title.toLowerCase().includes(t),r=`s${e.season}`.includes(t)||`season ${e.season}`.includes(t),i=Array.isArray(e.colors)&&e.colors.some(e=>e.toLowerCase().includes(t));return n||r||i}return!0});return(0,P.jsx)(`div`,{className:`modal-backdrop`,onClick:t,role:`dialog`,"aria-modal":`true`,"aria-label":`Browse Bob Ross Episodes`,children:(0,P.jsxs)(`div`,{className:`episode-modal`,onClick:e=>e.stopPropagation(),children:[(0,P.jsxs)(`div`,{className:`modal-header`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h3`,{children:`Select a Painting Lesson`}),(0,P.jsx)(`p`,{children:`Browse by season, title, or the colors Bob uses.`})]}),(0,P.jsx)(`button`,{className:`modal-close`,onClick:t,"aria-label":`Close modal`,children:`✕`})]}),(0,P.jsxs)(`div`,{className:`modal-filters`,children:[(0,P.jsxs)(`div`,{className:`modal-search`,children:[(0,P.jsx)(`span`,{"aria-hidden":`true`,children:`⌕`}),(0,P.jsx)(`input`,{type:`text`,placeholder:`Search by title, season, or pigment (e.g. Mountain, S2, Alizarin)...`,value:o,onChange:e=>s(e.target.value),autoFocus:!0}),o&&(0,P.jsx)(`button`,{className:`clear-search`,onClick:()=>s(``),children:`✕`})]}),(0,P.jsxs)(`div`,{className:`season-pills`,children:[(0,P.jsxs)(`button`,{className:`pill ${i===`all`?`active`:``}`,onClick:()=>a(`all`),children:[`All Seasons (`,Nn.length,`)`]}),Fn.map(e=>(0,P.jsxs)(`button`,{className:`pill ${i===String(e)?`active`:``}`,onClick:()=>a(String(e)),children:[`S`,e]},e))]})]}),(0,P.jsx)(`div`,{className:`modal-content`,children:(0,P.jsx)(`div`,{className:`episodes-grid`,children:c.length===0?(0,P.jsxs)(`div`,{className:`no-episodes`,children:[(0,P.jsxs)(`p`,{children:[`No paintings found matching "`,o,`"`]}),(0,P.jsx)(`button`,{className:`pill`,onClick:()=>{s(``),a(`all`)},children:`Reset filters`})]}):c.map(e=>{let i=e.id===n.id;return(0,P.jsxs)(`div`,{className:`episode-card ${i?`selected`:``}`,onClick:()=>{r(e),t()},role:`button`,tabIndex:0,onKeyDown:n=>{(n.key===`Enter`||n.key===` `)&&(r(e),t())},children:[(0,P.jsxs)(`div`,{className:`card-thumb-wrap`,children:[e.imgSrc?(0,P.jsx)(`img`,{src:e.imgSrc,alt:e.title,loading:`lazy`,onError:e=>{e.currentTarget.style.display=`none`}}):(0,P.jsx)(`div`,{className:`card-placeholder`,children:`🎨`}),(0,P.jsxs)(`span`,{className:`card-season-badge`,children:[`S`,e.season,` · E`,e.episode]}),i&&(0,P.jsx)(`span`,{className:`card-playing-badge`,children:`NOW PLAYING`})]}),(0,P.jsxs)(`div`,{className:`card-info`,children:[(0,P.jsx)(`h3`,{className:`card-title`,title:e.title,children:e.title}),(0,P.jsxs)(`div`,{className:`card-meta`,children:[(0,P.jsxs)(`span`,{className:`color-count`,children:[e.numColors||e.colors.length,` colors`]}),(0,P.jsxs)(`div`,{className:`color-dots`,children:[e.colorHex.slice(0,7).map((t,n)=>(0,P.jsx)(`span`,{style:{background:t},title:e.colors[n]||``},n)),e.colorHex.length>7&&(0,P.jsxs)(`span`,{className:`more-dots`,children:[`+`,e.colorHex.length-7]})]})]})]})]},`${e.season}-${e.episode}-${e.id}`)})})})]})})}function ar({isOpen:e,onClose:t,pigments:n,activeColor:r,onPickColor:i,onMixWithKnife:a,mixList:o}){if(!e)return null;let s=n.length,c=-Math.PI*.94,l=Math.PI*.22;return(0,P.jsx)(`div`,{className:`palette-plate-modal-backdrop`,onClick:t,role:`dialog`,"aria-modal":`true`,children:(0,P.jsxs)(`div`,{className:`bob-ross-palette-plate`,onClick:e=>e.stopPropagation(),children:[(0,P.jsx)(`div`,{className:`palette-thumb-hole`}),(0,P.jsxs)(`div`,{className:`palette-plate-header`,children:[(0,P.jsxs)(`div`,{className:`palette-plate-title-group`,children:[(0,P.jsx)(`span`,{className:`eyebrow`,style:{color:`#826548`},children:`BOB ROSS'S CLEAR LUCITE PALETTE`}),(0,P.jsx)(`h2`,{children:`Radial Color Palette`}),(0,P.jsx)(`p`,{children:`Pick pure hues, highlights (tints), or shadow shades. Blend dollops on the mixing slab.`})]}),(0,P.jsx)(`button`,{className:`palette-plate-close`,onClick:t,children:`✕`})]}),(0,P.jsxs)(`div`,{className:`radial-paint-area`,children:[(0,P.jsxs)(`div`,{className:`palette-center-mixing-well`,children:[(0,P.jsx)(`span`,{className:`mixing-well-title`,children:`Mixing Slab`}),(0,P.jsx)(`div`,{className:`mixing-puddle-display`,children:o.slice(-3).map((e,t)=>(0,P.jsx)(`span`,{className:`mixing-dollop`,style:{background:e},title:`Dollop ${t+1}: ${e}`},t))}),(0,P.jsx)(`button`,{className:`knife-mix-btn`,onClick:a,title:`Blend dollops with Bob's painting knife`,children:(0,P.jsx)(`span`,{children:`🗡️ Mix with Knife`})}),(0,P.jsxs)(`div`,{style:{marginTop:`8px`,fontSize:`10px`,color:`#6d5a49`},children:[`Active: `,(0,P.jsx)(`strong`,{children:n.find(e=>e[1].toLowerCase()===r.toLowerCase())?.[0]||r})]})]}),n.map(([e,t],n)=>{let a=s>1?c+n/(s-1)*(l-c):0,o=265+195*Math.cos(a),u=245+195*Math.sin(a),d=Yn(t),f=r.toLowerCase()===t.toLowerCase();return(0,P.jsxs)(`div`,{className:`radial-pigment-group`,style:{left:`${o}px`,top:`${u}px`},children:[(0,P.jsx)(`span`,{className:`radial-pigment-name`,children:e}),(0,P.jsxs)(`div`,{className:`radial-shades-row`,children:[(0,P.jsx)(`span`,{className:`radial-swatch-blob ${r.toLowerCase()===d.tint.toLowerCase()?`active-swatch`:``}`,style:{background:d.tint},onClick:()=>i(d.tint,`${e} (Highlight)`),title:`${e} · Highlight Tint (${d.tint})`}),(0,P.jsx)(`span`,{className:`radial-swatch-blob pure-swatch ${f?`active-swatch`:``}`,style:{background:d.pure},onClick:()=>i(d.pure,`${e} (Pure)`),title:`${e} · Pure Pigment (${d.pure})`}),(0,P.jsx)(`span`,{className:`radial-swatch-blob ${r.toLowerCase()===d.shade.toLowerCase()?`active-swatch`:``}`,style:{background:d.shade},onClick:()=>i(d.shade,`${e} (Shadow)`),title:`${e} · Deep Shadow (${d.shade})`})]})]},e)})]})]})})}function or({isOpen:e,onClose:t}){return e?(0,P.jsx)(`div`,{className:`modal-backdrop`,onClick:t,role:`dialog`,"aria-modal":`true`,"aria-label":`How Color Mixing Works`,children:(0,P.jsxs)(`div`,{className:`modal-sheet`,onClick:e=>e.stopPropagation(),style:{maxWidth:`640px`},children:[(0,P.jsxs)(`div`,{className:`modal-head`,children:[(0,P.jsxs)(`div`,{className:`modal-title-group`,children:[(0,P.jsx)(`span`,{className:`modal-eyebrow`,children:`PIGMENT SCIENCE & COLOR THEORY`}),(0,P.jsx)(`h2`,{children:`How Color Mixing Works in Happy Little Studio`})]}),(0,P.jsx)(`button`,{className:`modal-close`,onClick:t,"aria-label":`Close modal`,children:`✕`})]}),(0,P.jsxs)(`div`,{className:`modal-body mixing-guide-content`,children:[(0,P.jsxs)(`div`,{className:`mixing-section`,children:[(0,P.jsx)(`h3`,{children:`🎨 1. Real Paint vs. Computer Screens`}),(0,P.jsxs)(`p`,{children:[`Your screen uses `,(0,P.jsx)(`strong`,{children:`Additive Light (RGB)`}),`: pixels project red, green, and blue rays directly into your eyes (Red + Green + Blue = White light).`]}),(0,P.jsxs)(`p`,{children:[`Real paint pigments use `,(0,P.jsx)(`strong`,{children:`Subtractive Synthesis`}),`: each pigment particle absorbs specific wavelengths of ambient light and reflects only the rest back to the viewer.`]})]}),(0,P.jsxs)(`div`,{className:`mixing-section`,children:[(0,P.jsx)(`h3`,{children:`✨ 2. The Kubelka-Munk Physical Model`}),(0,P.jsxs)(`p`,{children:[`Happy Little Studio implements the optical `,(0,P.jsx)(`strong`,{children:`Kubelka-Munk theory`}),` used in physical pigment formulation:`]}),(0,P.jsxs)(`p`,{children:[`Each pigment is modeled with two fundamental spectral constants:`,(0,P.jsx)(`br`,{}),`• `,(0,P.jsx)(`strong`,{children:`K (Absorption coefficient):`}),` How strongly pigment grains absorb light.`,(0,P.jsx)(`br`,{}),`• `,(0,P.jsx)(`strong`,{children:`S (Scattering coefficient):`}),` How strongly pigment grains scatter light back.`]}),(0,P.jsx)(`div`,{className:`km-equation`,children:`K_mix = Σ (c_i · K_i)  |  S_mix = Σ (c_i · S_i)`}),(0,P.jsx)(`p`,{style:{marginTop:`8px`,fontSize:`12px`,color:`#4d6850`},children:`Plus Saunderson internal reflections, giving true watercolor luster!`})]})]})]})}):null}var sr=[{id:`knife`,icon:`🗡️`,name:`Knife`,title:`Bob's Painting Knife (Mountains, Snow Breaks & Tree Trunks)`},{id:`flat2`,icon:`🖌️`,name:`2" Flat`,title:`Almighty 2-Inch Brush (Skies, Water Washes & Criss-Cross Strokes)`},{id:`flat1`,icon:`🖌️`,name:`1" Flat`,title:`1-Inch Landscape Brush (Paths, Cliffs & Clump Foliage)`},{id:`fan6`,icon:`🪶`,name:`#6 Fan`,title:`No. 6 Fan Brush (Majestic Pine Trees & Wave Ripples)`},{id:`fan3`,icon:`🪶`,name:`#3 Fan`,title:`No. 3 Fan Brush (Delicate Evergreens & Small Trees)`},{id:`round`,icon:`🌳`,name:`1" Round`,title:`1-Inch Round Foliage Brush (Happy Little Bushes & Clouds)`},{id:`liner`,icon:`✒️`,name:`#2 Liner`,title:`No. 2 Script Liner (Twigs, Limbs, Grass Blades & Signature)`},{id:`mop`,icon:`☁️`,name:`Blender`,title:`Mop Blender Brush (Mist, Waterfalls & Soft Reflections)`}],cr=[{eyebrow:`WELCOME TO THE STUDIO`,title:`Two easels. One quiet lesson.`,body:`Paint beside Bob on the left while your Codex agent works from its own video and watercolor canvas on the right.`,note:`There are no mistakes here—only different paintings.`},{eyebrow:`YOUR WATERCOLOR BENCH`,title:`Load the brush, then let water wander.`,body:`Choose a brush, tune water and pigment, mix physical colors, or add a custom hue. Hover or focus any tool for a quick field note.`,note:`Undo and redo follow whichever easel you touched last.`},{eyebrow:`PAINT WITH AN AGENT`,title:`The agent can watch, listen, and paint.`,body:`WebMCP gives the agent its own lesson controls, live transcript cues, and normalized brush strokes—without taking over your easel.`,note:`Compete, collaborate, or simply make two happy little worlds.`}];function lr({open:e,onFinish:t}){let[n,r]=(0,_.useState)(0);if((0,_.useEffect)(()=>{e&&r(0)},[e]),!e)return null;let i=cr[n],a=n===cr.length-1;return(0,P.jsx)(`div`,{className:`onboarding-backdrop`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`onboarding-title`,children:(0,P.jsxs)(`div`,{className:`onboarding-card`,children:[(0,P.jsx)(`button`,{className:`onboarding-skip`,type:`button`,onClick:t,children:`Skip tour`}),(0,P.jsxs)(`div`,{className:`onboarding-portrait`,"aria-hidden":`true`,children:[(0,P.jsx)(`span`,{className:`onboarding-halo`}),(0,P.jsx)(`img`,{src:`/bob-ross-guide.png`,alt:``})]}),(0,P.jsxs)(`div`,{className:`onboarding-copy`,children:[(0,P.jsx)(`span`,{className:`onboarding-eyebrow`,children:i.eyebrow}),(0,P.jsx)(`h2`,{id:`onboarding-title`,children:i.title}),(0,P.jsx)(`p`,{children:i.body}),(0,P.jsx)(`blockquote`,{children:i.note})]},n),(0,P.jsxs)(`div`,{className:`onboarding-footer`,children:[(0,P.jsx)(`div`,{className:`onboarding-dots`,"aria-label":`Step ${n+1} of ${cr.length}`,children:cr.map((e,t)=>(0,P.jsx)(`button`,{type:`button`,className:t===n?`active`:``,onClick:()=>r(t),"aria-label":`Go to step ${t+1}`,"aria-current":t===n?`step`:void 0},e.title))}),(0,P.jsxs)(`div`,{className:`onboarding-actions`,children:[n>0&&(0,P.jsx)(`button`,{type:`button`,className:`onboarding-back`,onClick:()=>r(e=>e-1),children:`Back`}),(0,P.jsxs)(`button`,{type:`button`,className:`onboarding-next`,onClick:()=>a?t():r(e=>e+1),children:[a?`Start painting`:`Next`,` `,(0,P.jsx)(`span`,{"aria-hidden":`true`,children:`→`})]})]})]})]})})}function ur(){let e=(0,_.useRef)(null),t=(0,_.useRef)(null),n=(0,_.useRef)(null),r=(0,_.useRef)(null),i=(0,_.useRef)(null),a=(0,_.useRef)(null),[o,s]=(0,_.useState)(`#4E1500`),[c,l]=(0,_.useState)(`knife`),[u,d]=(0,_.useState)(18),[f,p]=(0,_.useState)(.45),[m,h]=(0,_.useState)(.75),[g,v]=(0,_.useState)(`brush`),[y,b]=(0,_.useState)(`cold`),[x,S]=(0,_.useState)(0),[C,w]=(0,_.useState)(!1),[T,ee]=(0,_.useState)(In),[te,E]=(0,_.useState)({videoId:``,cues:[]}),[ne,re]=(0,_.useState)(`human`),[ie,ae]=(0,_.useState)([o]),[D,oe]=(0,_.useState)([`#021E44`,`#FFEC00`]),[se,O]=(0,_.useState)([]),k=(0,_.useMemo)(()=>T?.colors?.length&&T?.colorHex?.length?T.colors.map((e,t)=>[e,T.colorHex[t]||`#58745e`]):[[`Alizarin Crimson`,`#4E1500`],[`Prussian Blue`,`#021E44`],[`Phthalo Green`,`#102E3C`],[`Cadmium Yellow`,`#FFEC00`],[`Sap Green`,`#0A3410`],[`Titanium White`,`#FFFFFF`],[`Van Dyke Brown`,`#221B15`],[`Midnight Black`,`#000000`]],[T]),A=(0,_.useMemo)(()=>{let e=D[0]||k[0]?.[1]||`#021E44`,t=D[1]||k[1]?.[1]||`#FFEC00`,n=k.find(t=>t[1].toLowerCase()===e.toLowerCase()),r=k.find(e=>e[1].toLowerCase()===t.toLowerCase()),i=n?n[0]:Cn.find(t=>t.hexW.toLowerCase()===e.toLowerCase())?.name||`Pigment 1`,a=r?r[0]:Cn.find(e=>e.hexW.toLowerCase()===t.toLowerCase())?.name||`Pigment 2`,o=Sn([{pig:wn(e,i),amt:.5},{pig:wn(t,a),amt:.5}],.93,1),s=parseInt(e.slice(1,3),16)||0,c=parseInt(e.slice(3,5),16)||0,l=parseInt(e.slice(5,7),16)||0,u=parseInt(t.slice(1,3),16)||0,d=parseInt(t.slice(3,5),16)||0,f=parseInt(t.slice(5,7),16)||0;return{km:o,rgb:`#`+[Math.round((s+u)/2),Math.round((c+d)/2),Math.round((l+f)/2)].map(e=>e.toString(16).padStart(2,`0`)).join(``),p1:e,p2:t,name1:i,name2:a}},[D,k]),[ce,le]=(0,_.useState)(``),[j,M]=(0,_.useState)(!1),[N,ue]=(0,_.useState)(!1),[de,fe]=(0,_.useState)(!1),[pe,me]=(0,_.useState)(!1),[he,ge]=(0,_.useState)(!1),_e=(0,_.useRef)(0),[ve,F]=(0,_.useState)(!0),[ye,be]=(0,_.useState)(420),[xe,Se]=(0,_.useState)(420),[Ce,I]=(0,_.useState)(175),[we,L]=(0,_.useState)(!1),[Te,R]=(0,_.useState)(!1),[z,Ee]=(0,_.useState)(!1),[De,Oe]=(0,_.useState)(!1),[ke,Ae]=(0,_.useState)(360),je=(0,_.useMemo)(()=>Math.round(9/16*ke),[ke]),Me=(0,_.useRef)(null),[Ne,Pe]=(0,_.useState)(!1);(0,_.useEffect)(()=>{try{window.localStorage.getItem(`joy-of-painting-onboarding`)!==`complete`&&ge(!0)}catch{ge(!0)}},[]),(0,_.useEffect)(()=>{if(k.length){let n=k[0][1];s(n),ae([n]),e.current?.setEpisodePigments(k),t.current?.setEpisodePigments(k)}},[k]);let Fe=(0,_.useMemo)(()=>({color:o,brush:c,size:u,water:f,load:m,mode:g,paper:y}),[o,c,u,f,m,g,y]),Ie=qn(T.id,T,te);a.current={brush:c,color:o,episode:T,load:m,size:u,transcript:Ie,water:f};let Le=(0,_.useCallback)(e=>{le(e),window.clearTimeout(_e.current),_e.current=window.setTimeout(()=>le(``),2500)},[]),Re=(0,_.useCallback)(e=>{let t=Pn[e.id]||e;ee(t),S(0),w(!1),Le(`Loaded S${t.season} · E${t.episode}: ${t.title}`)},[Le]),ze=Nn.findIndex(e=>e.id===T.id||e.index===T.index),Be=(0,_.useCallback)(e=>{let t=(ze+e+Nn.length)%Nn.length;Re(Nn[t])},[ze,Re]);(0,_.useEffect)(()=>()=>window.clearTimeout(_e.current),[]),(0,_.useEffect)(()=>{let n={play:()=>r.current?.play(),pause:()=>r.current?.pause(),forward:(e=10)=>r.current?.seek(e),back:(e=10)=>r.current?.seek(-e),seekTo:(e=0)=>r.current?.seekTo(e),screenshot:()=>r.current?.screenshot(),stats:()=>({human:e.current?.stats(),agent:t.current?.stats()}),paint:(e,n={})=>t.current?.paint(e,{color:n.color||o,size:n.size||u,brush:n.brush||c,water:n.water??f,load:n.load??m}),clear:()=>t.current?.clear(),dry:()=>t.current?.dry(),undo:()=>t.current?.undo(),redo:()=>t.current?.redo(),eyedrop:async()=>{if(!window.EyeDropper)return Le(`Use Chrome to pick a color from the lesson.`);try{let e=await new EyeDropper().open();s(e.sRGBHex),Le(`A lesson color joined your palette.`)}catch{}},setTranscript:(e,t)=>{let n=Hn(t);return E({videoId:e,cues:n}),{videoId:e,cueCount:n.length}},getEpisodes:()=>Nn,getEpisode:()=>T,setEpisode:e=>{let t=Nn.find(t=>t.id===e||t.index===Number(e)||t.title.toLowerCase()===String(e).toLowerCase());return t?(Re(t),t):null}};return i.current=n,window.paintAlongAgent=n,()=>{i.current=null,delete window.paintAlongAgent}},[c,o,T,m,Le,Re,u,f]),(0,_.useEffect)(()=>{let e=Gn();if(!e){M(!1);return}let n=new AbortController;return Promise.all([{name:`get_paint_along_status`,description:`Read the current Bob Ross lesson, the live caption, and the human and agent canvas capabilities. Use this before choosing a painting action.`,inputSchema:{type:`object`,properties:{}},annotations:{readOnlyHint:!0},execute:()=>{let e=a.current,n=i.current?.getEpisode?.()||e.episode,o=r.current?.time?.()||0,s=Un(e.transcript.cues,o);return Wn(`Agent lesson: ${n.title} at ${Bn(o)}. ${s?.text||`No live caption is available yet.`}`,{episode:{id:n.id,title:n.title,season:n.season,episode:n.episode},agentTime:o,liveCaption:s?.text||null,transcriptStatus:e.transcript.status,agentCanvas:t.current?.stats?.()||null})}},{name:`control_agent_lesson`,description:`Control only the agent’s separate YouTube lesson player. Play, pause, seek by a signed number of seconds, or seek to an exact timestamp.`,inputSchema:{type:`object`,properties:{action:{type:`string`,enum:[`play`,`pause`,`seek_by`,`seek_to`],description:`Playback action.`},seconds:{type:`number`,description:`For seek_by this may be negative; for seek_to it is an absolute non-negative timestamp.`}},required:[`action`]},annotations:{readOnlyHint:!1},execute:({action:e,seconds:t=0})=>{let n=i.current;if(!n)return Wn(`The agent lesson is not ready yet.`,{ok:!1});if(e===`play`)n.play();else if(e===`pause`)n.pause();else if(e===`seek_by`)n.forward(Number(t)||0);else if(e===`seek_to`)n.seekTo(t);else return Wn(`Unknown lesson action.`,{ok:!1});let a=e===`seek_to`?Math.max(0,Number(t)||0):r.current?.time?.()||0;return Wn(`Agent lesson ${e.replace(`_`,` `)} requested at ${Bn(a)}.`,{ok:!0,action:e,requestedTime:a})}},{name:`read_live_lesson_transcript`,description:`Read the current live transcript caption and a small nearby context window for the active Bob Ross episode. This returns a short excerpt, not the entire transcript.`,inputSchema:{type:`object`,properties:{contextCues:{type:`integer`,minimum:0,maximum:3,description:`Number of caption cues on each side of the current cue.`}}},annotations:{readOnlyHint:!0},execute:({contextCues:e=1}={})=>{let t=a.current,n=r.current?.time?.()||0,i=t.transcript.cues.findIndex(e=>e.start<=n&&n<e.end),o=Math.max(0,Math.min(3,Number(e)||0)),s=i<0?[]:t.transcript.cues.slice(Math.max(0,i-o),i+o+1);return Wn(s.length?`Live caption at ${Bn(n)}: ${s[Math.min(o,s.length-1)]?.text||s[0].text}`:`No cached transcript cue is available at the agent lesson time.`,{episodeId:t.episode.id,time:n,transcriptStatus:t.transcript.status,cues:s})}},{name:`get_agent_lesson_reference_image`,description:`Return the active agent lesson timestamp and its official YouTube thumbnail URL as a visual painting reference. This is a lesson thumbnail, not a frame-perfect video screenshot.`,inputSchema:{type:`object`,properties:{}},annotations:{readOnlyHint:!0},execute:()=>{let e=i.current?.screenshot?.();if(!e?.id)return Wn(`The agent lesson is not ready yet.`,{ok:!1});let t=`https://i.ytimg.com/vi/${e.id}/hqdefault.jpg`;return Wn(`Reference image for ${e.title||`the current lesson`} at ${Bn(e.time)}. This URL is the official lesson thumbnail, not a current-frame capture.`,{ok:!0,videoId:e.id,time:e.time,thumbnailUrl:t,limitation:`YouTube cross-origin iframes do not expose frame pixels to page JavaScript.`})}},{name:`paint_agent_canvas`,description:`Paint one or more watercolor strokes on the agent’s own HTML canvas. Points use normalized x/y coordinates from 0 to 1, measured from the canvas top-left. Keep each stroke concise.`,inputSchema:{type:`object`,properties:{strokes:{type:`array`,minItems:1,maxItems:12,items:{type:`object`,properties:{points:{type:`array`,minItems:1,maxItems:512,items:{type:`object`,properties:{x:{type:`number`,minimum:0,maximum:1},y:{type:`number`,minimum:0,maximum:1},pressure:{type:`number`,minimum:0,maximum:1}},required:[`x`,`y`]}},color:{type:`string`,pattern:`^#[0-9a-fA-F]{6}$`},size:{type:`number`,minimum:1,maximum:120},brush:{type:`string`,enum:[`knife`,`flat2`,`flat1`,`fan6`,`fan3`,`round`,`liner`,`mop`]},water:{type:`number`,minimum:0,maximum:1},load:{type:`number`,minimum:0,maximum:1}},required:[`points`]}}},required:[`strokes`]},annotations:{readOnlyHint:!1},execute:({strokes:e=[]}={})=>{let n=a.current,r=t.current;if(!r?.canvas)return Wn(`The agent canvas is not ready yet.`,{ok:!1});let i=0,o=0;return e.slice(0,12).forEach(e=>{let t=Kn(e?.points,r.canvas);t.length&&(r.paint(t,{color:/^#[0-9a-f]{6}$/i.test(e.color||``)?e.color:n.color,size:Math.max(1,Math.min(120,Number(e.size)||n.size)),brush:sr.some(t=>t.id===e.brush)?e.brush:n.brush,water:Math.max(0,Math.min(1,Number.isFinite(Number(e.water))?Number(e.water):n.water)),load:Math.max(0,Math.min(1,Number.isFinite(Number(e.load))?Number(e.load):n.load))}),i+=1,o+=t.length)}),Wn(`Painted ${i} watercolor stroke${i===1?``:`s`} on the agent canvas.`,{ok:i>0,paintedStrokes:i,paintedPoints:o,canvas:r.stats()})}},{name:`manage_agent_canvas`,description:`Dry, undo, redo, or clear the agent’s own watercolor canvas. Clear removes the agent painting, so use it deliberately.`,inputSchema:{type:`object`,properties:{action:{type:`string`,enum:[`dry`,`undo`,`redo`,`clear`]}},required:[`action`]},annotations:{readOnlyHint:!1},execute:({action:e})=>{let n=t.current;if(!n)return Wn(`The agent canvas is not ready yet.`,{ok:!1});if(e===`dry`)n.dry();else if(e===`undo`)n.undo();else if(e===`redo`)n.redo();else if(e===`clear`)n.clear();else return Wn(`Unknown canvas action.`,{ok:!1});return Wn(`Agent canvas ${e} complete.`,{ok:!0,action:e,canvas:n.stats()})}}].map(t=>e.registerTool(t,{signal:n.signal}))).then(()=>M(!0)).catch(e=>{console.warn(`WebMCP tools could not be registered:`,e),M(!1)}),()=>{n.abort(),M(!1)}},[]);let Ve=(e,t)=>{s(e),ae(t=>[...t.slice(-2),e]),oe(t=>[t[1]||t[0]||e,e]),t&&Le(`Loaded ${t}`)},He=e=>{let t=String(e).toUpperCase();O(e=>[t,...e.filter(e=>e!==t)].slice(0,6)),Ve(t,`custom pigment ${t}`)},Ue=n=>{let r=(ne===`agent`?t.current:e.current)?.[n]?.(),i=ne===`agent`?`Agent easel`:`Your easel`;Le(r?`${i}: ${n===`undo`?`last stroke lifted`:`stroke restored`}.`:`${i}: nothing to ${n}.`)};return(0,P.jsxs)(`main`,{children:[(0,P.jsxs)(`header`,{className:`topbar`,children:[(0,P.jsxs)(`div`,{className:`brand`,children:[(0,P.jsx)(`span`,{className:`brand-minimal`,children:`Joy Of Painting.`}),(0,P.jsx)(`span`,{className:`status webmcp-status ${j?`ready`:``}`,title:j?`WebMCP tools are available to an in-browser agent.`:`WebMCP is waiting for a compatible browser agent.`,children:j?`AGENT TOOLS READY`:`AGENT TOOLS STANDBY`})]}),(0,P.jsxs)(`div`,{className:`header-actions`,children:[(0,P.jsxs)(`button`,{className:`episode-picker-btn`,onClick:()=>ue(!0),title:`Browse all 403 episodes and paintings from dataset`,"aria-label":`Open episode archive`,children:[T.imgSrc&&(0,P.jsx)(`img`,{src:T.imgSrc,alt:``,className:`picker-thumb`,onError:e=>{e.currentTarget.style.display=`none`}}),(0,P.jsxs)(`div`,{className:`picker-text`,children:[(0,P.jsxs)(`span`,{className:`picker-season`,children:[`S`,T.season,` · E`,T.episode]}),(0,P.jsx)(`span`,{className:`picker-title`,children:T.title})]}),(0,P.jsx)(`span`,{className:`picker-caret`,children:`▾`})]}),(0,P.jsx)(`button`,{className:`palette-plate-toggle-btn`,onClick:()=>me(!0),title:`Open Bob Ross's Clear Lucite Color Mixing Plate with Radial Shades`,children:`🎨 Bob's Mixing Plate`}),(0,P.jsx)(`button`,{className:`resizing-toggle-btn ${ve?`active`:``}`,onClick:()=>{F(!ve),Le(ve?`Resizing locked to prevent accidental dragging.`:`Resizing unlocked.`)},title:`Toggle panel and video resizing on or off`,children:ve?`📐 Resizing: ON`:`🔒 Resizing: LOCKED`}),(0,P.jsx)(`button`,{className:`layout-reset-btn`,onClick:()=>{be(420),Se(420),Ae(360),I(175),L(!1),R(!1),Ee(!1),Oe(!1),F(!0),Le(`Studio layout reset to defaults.`)},title:`Reset easel panels and videos to default layout`,children:`↺ Reset`}),(0,P.jsxs)(`button`,{className:`studio-guide-btn`,type:`button`,onClick:()=>ge(!0),"data-tooltip":`Replay the gentle studio introduction.`,"aria-label":`Open studio guide`,children:[(0,P.jsx)(`img`,{src:`/bob-ross-guide.png`,alt:``}),`Guide`]}),(0,P.jsx)(`button`,{className:`finish`,onClick:()=>{let t=document.createElement(`a`);t.download=`${T.title.toLowerCase().replace(/\s+/g,`-`)}-painting.png`,t.href=e.current?.export(),t.click()},children:`Frame my painting`})]})]}),(0,P.jsxs)(`section`,{className:`studio-reference-layout ${ve?``:`resizing-locked`}`,children:[we?(0,P.jsxs)(`div`,{className:`canvas-panel collapsed`,onClick:()=>L(!1),title:`Click to expand Human Easel`,children:[(0,P.jsx)(`button`,{className:`panel-expand-btn`,children:`▶`}),(0,P.jsx)(`span`,{className:`panel-collapsed-strip`,children:`YOU · HUMAN EASEL`}),(0,P.jsx)(`div`,{style:{height:`24px`}})]}):(0,P.jsx)(qt.Resizable,{width:ye,height:680,axis:`x`,resizeHandles:ve?[`e`]:[],minConstraints:[280,400],maxConstraints:[750,950],onResize:(e,{size:t})=>be(t.width),handle:(0,P.jsx)($n,{}),children:(0,P.jsx)(`div`,{className:`resizable-panel-wrapper`,style:{width:ye},children:(0,P.jsxs)(`div`,{className:`canvas-panel human-panel`,children:[(0,P.jsxs)(`div`,{className:`panel-tag-header`,children:[(0,P.jsx)(`span`,{className:`panel-tag-title`,children:`YOU · JOY OF PAINTING`}),(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,P.jsx)(`span`,{className:`panel-tag-badge`,children:`HUMAN`}),(0,P.jsx)(`button`,{type:`button`,className:`panel-action-btn`,onClick:()=>L(!0),title:`Collapse human panel`,children:`◀ Collapse`})]})]}),(0,P.jsx)(nr,{id:`humanCanvas`,engineRef:e,settings:Fe,label:`your watercolor painting canvas`,onActivate:()=>re(`human`)})]})})}),(0,P.jsxs)(`div`,{className:`center-spine-column`,children:[(0,P.jsx)(`div`,{className:`center-video-container top-video-container`,children:(0,P.jsx)(zt,{nodeRef:Me,handle:`.video-drag-header`,cancel:`button, .video-header-action, .video-min-btn, .video-drag-handle`,onStart:()=>Pe(!0),onStop:()=>Pe(!1),children:(0,P.jsxs)(`div`,{ref:Me,className:`human-draggable-player ${Ne?`interacting`:``}`,style:{width:ke,zIndex:100},children:[(0,P.jsxs)(`div`,{className:`video-card-head video-drag-header`,title:`Drag by header to move video anywhere across the studio`,children:[(0,P.jsxs)(`div`,{className:`video-head-left`,children:[(0,P.jsx)(`span`,{className:`drag-grip-icon`,children:`✥`}),(0,P.jsxs)(`span`,{children:[`YOUR LESSON · `,ke,`×`,je,` (16:9)`]})]}),(0,P.jsxs)(`div`,{className:`video-head-actions`,children:[(0,P.jsx)(`button`,{type:`button`,className:`video-header-action`,onClick:()=>{Ae(ke>=640?300:ke>=440?640:440)},title:`Toggle size (S: 300px, M: 440px, L: 640px)`,children:ke>=640?`⤡ L`:ke>=440?`⤡ M`:`⤡ S`}),(0,P.jsx)(`button`,{type:`button`,className:`video-min-btn video-header-action`,onClick:()=>Ee(!z),title:z?`Expand video`:`Minimize video`,children:z?`▼`:`—`})]})]}),!z&&(0,P.jsx)(qt.Resizable,{width:ke,height:je,axis:`both`,lockAspectRatio:!0,resizeHandles:ve?[`se`,`s`,`e`]:[],minConstraints:[220,124],maxConstraints:[960,540],onResizeStart:()=>Pe(!0),onResizeStop:()=>Pe(!1),onResize:(e,{size:t})=>{let n=Math.max(220,Math.min(window.innerWidth-60,t.width));Ae(n)},handle:(e,t)=>e===`se`?(0,P.jsx)(Qn,{ref:t}):e===`s`?(0,P.jsx)(Xn,{ref:t}):(0,P.jsx)($n,{ref:t}),children:(0,P.jsxs)(`div`,{className:`video-content-box`,style:{width:ke,height:je},children:[Ne&&(0,P.jsx)(`div`,{className:`video-drag-overlay`}),(0,P.jsx)(tr,{owner:`you`,episode:T,ref:n,onTime:S,onState:w,onVideoChange:Re,onPrev:()=>Be(-1),onNext:()=>Be(1)})]})})]})})}),(0,P.jsx)(`div`,{className:`always-visible-captions-box`,children:(0,P.jsx)(rr,{time:x,playing:C,transcript:Ie,episode:T})}),(0,P.jsx)(`div`,{className:`center-video-container bottom-video-container`,children:(0,P.jsxs)(`div`,{className:`center-video-card`,style:{width:310,height:De?38:Ce},children:[(0,P.jsxs)(`div`,{className:`video-card-head`,children:[(0,P.jsxs)(`span`,{children:[`AGENT LESSON · S`,T.season,` E`,T.episode]}),(0,P.jsx)(`button`,{type:`button`,className:`video-min-btn`,onClick:()=>Oe(!De),title:De?`Expand video`:`Minimize video`,children:De?`▲`:`—`})]}),!De&&(0,P.jsx)(qt.Resizable,{width:310,height:Ce,axis:`y`,resizeHandles:ve?[`n`]:[],minConstraints:[240,135],maxConstraints:[360,310],onResize:(e,{size:t})=>I(t.height),handle:(0,P.jsx)(Zn,{}),children:(0,P.jsx)(`div`,{style:{width:310,height:Ce-28},children:(0,P.jsx)(tr,{owner:`agent`,episode:T,ref:r,onPrev:()=>Be(-1),onNext:()=>Be(1)})})})]})})]}),Te?(0,P.jsxs)(`div`,{className:`canvas-panel collapsed`,onClick:()=>R(!1),title:`Click to expand Agent Easel`,children:[(0,P.jsx)(`button`,{className:`panel-expand-btn`,children:`◀`}),(0,P.jsx)(`span`,{className:`panel-collapsed-strip`,children:`AGENT READY · EASEL`}),(0,P.jsx)(`div`,{style:{height:`24px`}})]}):(0,P.jsx)(qt.Resizable,{width:xe,height:680,axis:`x`,resizeHandles:ve?[`w`]:[],minConstraints:[280,400],maxConstraints:[750,950],onResize:(e,{size:t})=>Se(t.width),handle:(0,P.jsx)(er,{}),children:(0,P.jsx)(`div`,{className:`resizable-panel-wrapper`,style:{width:xe},children:(0,P.jsxs)(`div`,{className:`canvas-panel agent-panel`,children:[(0,P.jsxs)(`div`,{className:`panel-tag-header`,children:[(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,P.jsx)(`button`,{type:`button`,className:`panel-action-btn`,onClick:()=>R(!0),title:`Collapse agent panel`,children:`Collapse ▶`}),(0,P.jsx)(`span`,{className:`panel-tag-badge agent`,children:`AGENT READY`})]}),(0,P.jsx)(`span`,{className:`panel-tag-title`,children:`THE AGENT · JOY OF PAINTING`})]}),(0,P.jsx)(nr,{id:`agentCanvas`,engineRef:t,settings:Fe,label:`agent watercolor painting canvas`,onActivate:()=>re(`agent`)})]})})})]}),(0,P.jsxs)(`footer`,{className:`tool-bench`,"aria-label":`Watercolor editor`,children:[(0,P.jsxs)(`div`,{className:`bench-row bench-row-main`,children:[(0,P.jsxs)(`section`,{className:`bench-group history-tools`,"aria-label":`Canvas history`,children:[(0,P.jsxs)(`div`,{className:`bench-group-title`,children:[(0,P.jsx)(`span`,{children:`HISTORY`}),(0,P.jsx)(`small`,{children:ne===`agent`?`Agent easel`:`Your easel`})]}),(0,P.jsxs)(`div`,{className:`history`,children:[(0,P.jsxs)(`button`,{type:`button`,onClick:()=>Ue(`undo`),"data-tooltip":`Lift the most recent stroke from the active easel.`,"aria-label":`Undo last stroke`,children:[(0,P.jsx)(`b`,{children:`↶`}),(0,P.jsx)(`small`,{children:`Undo`})]}),(0,P.jsxs)(`button`,{type:`button`,onClick:()=>Ue(`redo`),"data-tooltip":`Restore the stroke you most recently undid.`,"aria-label":`Redo last stroke`,children:[(0,P.jsx)(`b`,{children:`↷`}),(0,P.jsx)(`small`,{children:`Redo`})]})]})]}),(0,P.jsxs)(`section`,{className:`bench-group mode-tools`,"aria-label":`Painting gesture`,children:[(0,P.jsx)(`span`,{className:`eyebrow`,children:`GESTURE`}),[{id:`brush`,icon:`✦`,label:`brush`,tip:`Apply loaded pigment with the selected brush.`},{id:`water`,icon:`◌`,label:`water`,tip:`Add clean water to soften edges and create blooms.`},{id:`lift`,icon:`○`,label:`lift`,tip:`Use a thirsty brush to lift wet pigment from the paper.`}].map(e=>(0,P.jsxs)(`button`,{className:g===e.id?`active`:``,onClick:()=>v(e.id),"data-tooltip":e.tip,"aria-label":`${e.label} mode`,children:[(0,P.jsx)(`b`,{children:e.icon}),(0,P.jsx)(`small`,{children:e.label})]},e.id))]}),(0,P.jsxs)(`section`,{className:`bench-group brushes`,"aria-label":`Bob Ross brushes`,children:[(0,P.jsx)(`span`,{className:`eyebrow`,children:`BRUSH`}),(0,P.jsx)(`div`,{className:`bob-brush-list`,children:sr.map(e=>(0,P.jsxs)(`button`,{className:`bob-brush-btn ${c===e.id?`active`:``}`,onClick:()=>{l(e.id),Le(`Selected ${e.title}`)},"data-tooltip":e.title,"aria-label":e.title,children:[(0,P.jsx)(`span`,{className:`bob-brush-icon`,children:e.icon}),(0,P.jsx)(`span`,{className:`bob-brush-label`,children:e.name})]},e.id))})]}),(0,P.jsxs)(`section`,{className:`bench-group sliders`,"aria-label":`Paint dynamics`,children:[(0,P.jsxs)(`label`,{"data-tooltip":`Controls the footprint of each brush mark.`,children:[(0,P.jsxs)(`span`,{className:`eyebrow`,children:[`SIZE `,(0,P.jsxs)(`small`,{children:[u,`px`]})]}),(0,P.jsx)(`input`,{type:`range`,min:`2`,max:`48`,value:u,onChange:e=>d(Number(e.target.value)),"aria-label":`Brush size`})]}),(0,P.jsxs)(`label`,{"data-tooltip":`More water increases flow, blooms, and softer edges.`,children:[(0,P.jsxs)(`span`,{className:`eyebrow`,children:[`WATER `,(0,P.jsxs)(`small`,{children:[Math.round(f*100),`%`]})]}),(0,P.jsx)(`input`,{type:`range`,min:`0`,max:`1`,step:`0.01`,value:f,onChange:e=>p(Number(e.target.value)),"aria-label":`Water amount`})]}),(0,P.jsxs)(`label`,{"data-tooltip":`More pigment makes denser, darker watercolor marks.`,children:[(0,P.jsxs)(`span`,{className:`eyebrow`,children:[`PIGMENT `,(0,P.jsxs)(`small`,{children:[Math.round(m*100),`%`]})]}),(0,P.jsx)(`input`,{type:`range`,min:`0.1`,max:`1`,step:`0.01`,value:m,onChange:e=>h(Number(e.target.value)),"aria-label":`Pigment load`})]})]}),(0,P.jsxs)(`section`,{className:`bench-group palette-wrap`,"aria-label":`Pigment palette`,children:[(0,P.jsxs)(`div`,{className:`palette-label`,children:[(0,P.jsxs)(`span`,{className:`eyebrow`,children:[`BOB'S PALETTE · S`,T?.season||1,` E`,T?.episode||1]}),(0,P.jsx)(`em`,{children:k.find(e=>e[1].toLowerCase()===o.toLowerCase())?.[0]||o})]}),(0,P.jsxs)(`div`,{className:`palette`,children:[k.map(([e,t])=>(0,P.jsx)(`button`,{className:`color ${o.toLowerCase()===t.toLowerCase()?`active`:``}`,onClick:()=>Ve(t,e),style:{"--color":t},"aria-label":e,"data-tooltip":`${e} · ${t}`},e)),se.map(e=>(0,P.jsx)(`button`,{className:`color custom-swatch ${o.toLowerCase()===e.toLowerCase()?`active`:``}`,onClick:()=>Ve(e,`custom pigment ${e}`),style:{"--color":e},"aria-label":`Custom pigment ${e}`,"data-tooltip":`Custom pigment · ${e}`},e)),(0,P.jsxs)(`label`,{className:`custom-color-picker`,"data-tooltip":`Choose any color and add it to your pigment row.`,children:[(0,P.jsx)(`input`,{type:`color`,value:o,onChange:e=>He(e.target.value),"aria-label":`Add a custom pigment color`}),(0,P.jsx)(`span`,{className:`custom-color-preview`,style:{background:o}}),(0,P.jsx)(`b`,{children:`+ Custom`})]})]})]}),(0,P.jsxs)(`section`,{className:`bench-group finish-tools`,"aria-label":`Paper and finishing tools`,children:[(0,P.jsxs)(`div`,{className:`paper-tools`,children:[(0,P.jsx)(`span`,{className:`eyebrow`,children:`PAPER`}),[[`hot`,`Smooth hot-pressed paper keeps marks crisp and controlled.`],[`cold`,`Cold-pressed paper balances soft flow with visible grain.`],[`rough`,`Rough paper gives pigment deep texture and granulation.`]].map(([e,t])=>(0,P.jsx)(`button`,{className:y===e?`active`:``,onClick:()=>b(e),"data-tooltip":t,children:e},e))]}),(0,P.jsxs)(`button`,{className:`water-cup`,onClick:()=>{v(`water`),Le(`Beat the devil out of it!`)},"data-tooltip":`Rinse the brush and switch to clean-water painting.`,"aria-label":`Rinse brush`,children:[(0,P.jsx)(`span`,{children:`◌`}),(0,P.jsx)(`small`,{children:`RINSE`})]}),(0,P.jsx)(`button`,{className:`action-btn`,onClick:()=>{(ne===`agent`?t.current:e.current)?.dry(),Le(`Baked glaze into the active paper ground.`)},"data-tooltip":`Dry the active easel so the next wash becomes a separate glaze.`,children:`Bake`}),(0,P.jsx)(`button`,{className:`action-btn`,onClick:()=>{(ne===`agent`?t.current:e.current)?.clear(),Le(`Fresh canvas prepared on the active easel.`)},"data-tooltip":`Clear the active easel and prepare fresh paper.`,children:`Fresh`})]})]}),(0,P.jsxs)(`div`,{className:`bench-row bench-row-mixing`,children:[(0,P.jsxs)(`div`,{className:`km-mixing-station`,children:[(0,P.jsxs)(`div`,{className:`km-station-head`,children:[(0,P.jsx)(`span`,{className:`eyebrow`,children:`WET MIXING WELL`}),(0,P.jsx)(`button`,{className:`mix-help-btn`,onClick:()=>fe(!0),"data-tooltip":`See why physical pigment mixing differs from RGB light.`,"aria-label":`Color mixing tutorial`,children:`? Science`})]}),(0,P.jsxs)(`div`,{className:`km-station-body`,children:[(0,P.jsxs)(`div`,{className:`km-slot`,"data-tooltip":`First pigment: ${A.name1}`,children:[(0,P.jsx)(`span`,{className:`km-slot-swatch`,style:{background:A.p1}}),(0,P.jsx)(`span`,{className:`km-slot-label`,children:A.name1})]}),(0,P.jsx)(`span`,{className:`km-plus`,children:`+`}),(0,P.jsxs)(`div`,{className:`km-slot`,"data-tooltip":`Second pigment: ${A.name2}`,children:[(0,P.jsx)(`span`,{className:`km-slot-swatch`,style:{background:A.p2}}),(0,P.jsx)(`span`,{className:`km-slot-label`,children:A.name2})]}),(0,P.jsx)(`span`,{className:`km-arrow`,children:`→`}),(0,P.jsxs)(`div`,{className:`km-result-slot`,"data-tooltip":`Physical subtractive blend: ${A.km}`,children:[(0,P.jsx)(`span`,{className:`km-result-swatch`,style:{background:A.km}}),(0,P.jsxs)(`div`,{className:`km-result-meta`,children:[(0,P.jsx)(`span`,{className:`km-badge`,children:`K-M Physical`}),(0,P.jsx)(`span`,{className:`km-hex`,children:A.km})]})]}),(0,P.jsxs)(`div`,{className:`km-compare-slot`,"data-tooltip":`Screen RGB average for comparison: ${A.rgb}`,children:[(0,P.jsx)(`span`,{className:`km-compare-swatch`,style:{background:A.rgb}}),(0,P.jsxs)(`div`,{className:`km-result-meta`,children:[(0,P.jsx)(`span`,{className:`km-badge-rgb`,children:`RGB Avg`}),(0,P.jsx)(`span`,{className:`km-hex`,children:A.rgb})]})]}),(0,P.jsx)(`button`,{className:`km-mix-btn`,onClick:()=>{Ve(A.km,`${A.name1} + ${A.name2}`)},"data-tooltip":`Load this physically modeled mixture onto your brush.`,children:(0,P.jsx)(`span`,{children:`🗡️ Load blend`})})]})]}),(0,P.jsx)(`p`,{className:`bench-whisper`,children:`Let the water do some of the painting.`})]})]}),ce&&(0,P.jsx)(`div`,{className:`toast show`,role:`status`,children:ce}),(0,P.jsx)(ir,{isOpen:N,onClose:()=>ue(!1),currentEpisode:T,onSelectEpisode:Re}),(0,P.jsx)(ar,{isOpen:pe,onClose:()=>me(!1),pigments:k,activeColor:o,onPickColor:Ve,onMixWithKnife:()=>{if(ie.length<2){Le(`Select at least 2 pigments on Bob’s palette to blend.`);return}let e=Sn(ie.map(e=>{let t=fn(e),n=t.map(e=>e*.12),r=[0,0,0],i=[0,0,0];for(let e=0;e<3;e++)[r[e],i[e]]=mn(t[e],n[e]);return{pig:{K:r,S:i},amt:1}}),.93,1);s(e),Le(`Blended with Kubelka-Munk physics: ${e}`)},mixList:ie}),(0,P.jsx)(or,{isOpen:de,onClose:()=>fe(!1)}),(0,P.jsx)(lr,{open:he,onFinish:()=>{try{window.localStorage.setItem(`joy-of-painting-onboarding`,`complete`)}catch{}ge(!1)}})]})}if(typeof Node<`u`&&Node.prototype){let e=Node.prototype.removeChild;Node.prototype.removeChild=function(t){return t&&t.parentNode!==this?t.parentNode?t.parentNode.removeChild(t):t:e.apply(this,arguments)};let t=Node.prototype.insertBefore;Node.prototype.insertBefore=function(e,n){return n&&n.parentNode!==this?n.parentNode?n.parentNode.insertBefore(e,n):this.appendChild(e):t.apply(this,arguments)}}(0,v.createRoot)(document.querySelector(`#app`)).render((0,P.jsx)(ur,{}));