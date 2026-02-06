(function(){const J=document.createElement("link").relList;if(J&&J.supports&&J.supports("modulepreload"))return;for(const H of document.querySelectorAll('link[rel="modulepreload"]'))m(H);new MutationObserver(H=>{for(const G of H)if(G.type==="childList")for(const Q of G.addedNodes)Q.tagName==="LINK"&&Q.rel==="modulepreload"&&m(Q)}).observe(document,{childList:!0,subtree:!0});function B(H){const G={};return H.integrity&&(G.integrity=H.integrity),H.referrerPolicy&&(G.referrerPolicy=H.referrerPolicy),H.crossOrigin==="use-credentials"?G.credentials="include":H.crossOrigin==="anonymous"?G.credentials="omit":G.credentials="same-origin",G}function m(H){if(H.ep)return;H.ep=!0;const G=B(H);fetch(H.href,G)}})();var is={exports:{}},Sn={};var yd;function Jh(){if(yd)return Sn;yd=1;var x=Symbol.for("react.transitional.element"),J=Symbol.for("react.fragment");function B(m,H,G){var Q=null;if(G!==void 0&&(Q=""+G),H.key!==void 0&&(Q=""+H.key),"key"in H){G={};for(var Y in H)Y!=="key"&&(G[Y]=H[Y])}else G=H;return H=G.ref,{$$typeof:x,type:m,key:Q,ref:H!==void 0?H:null,props:G}}return Sn.Fragment=J,Sn.jsx=B,Sn.jsxs=B,Sn}var pd;function Wh(){return pd||(pd=1,is.exports=Jh()),is.exports}var d=Wh(),us={exports:{}},q={};var gd;function Fh(){if(gd)return q;gd=1;var x=Symbol.for("react.transitional.element"),J=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),w=Symbol.iterator;function K(o){return o===null||typeof o!="object"?null:(o=w&&o[w]||o["@@iterator"],typeof o=="function"?o:null)}var Z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,pe={};function ae(o,T,O){this.props=o,this.context=T,this.refs=pe,this.updater=O||Z}ae.prototype.isReactComponent={},ae.prototype.setState=function(o,T){if(typeof o!="object"&&typeof o!="function"&&o!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,o,T,"setState")},ae.prototype.forceUpdate=function(o){this.updater.enqueueForceUpdate(this,o,"forceUpdate")};function _e(){}_e.prototype=ae.prototype;function ge(o,T,O){this.props=o,this.context=T,this.refs=pe,this.updater=O||Z}var Xe=ge.prototype=new _e;Xe.constructor=ge,F(Xe,ae.prototype),Xe.isPureReactComponent=!0;var Se=Array.isArray;function je(){}var V={H:null,A:null,T:null,S:null},ke=Object.prototype.hasOwnProperty;function At(o,T,O){var C=O.ref;return{$$typeof:x,type:o,key:T,ref:C!==void 0?C:null,props:O}}function Xl(o,T){return At(o.type,T,o.props)}function zt(o){return typeof o=="object"&&o!==null&&o.$$typeof===x}function Ve(o){var T={"=":"=0",":":"=2"};return"$"+o.replace(/[=:]/g,function(O){return T[O]})}var El=/\/+/g;function Nt(o,T){return typeof o=="object"&&o!==null&&o.key!=null?Ve(""+o.key):T.toString(36)}function St(o){switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:switch(typeof o.status=="string"?o.then(je,je):(o.status="pending",o.then(function(T){o.status==="pending"&&(o.status="fulfilled",o.value=T)},function(T){o.status==="pending"&&(o.status="rejected",o.reason=T)})),o.status){case"fulfilled":return o.value;case"rejected":throw o.reason}}throw o}function b(o,T,O,C,L){var $=typeof o;($==="undefined"||$==="boolean")&&(o=null);var ce=!1;if(o===null)ce=!0;else switch($){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(o.$$typeof){case x:case J:ce=!0;break;case W:return ce=o._init,b(ce(o._payload),T,O,C,L)}}if(ce)return L=L(o),ce=C===""?"."+Nt(o,0):C,Se(L)?(O="",ce!=null&&(O=ce.replace(El,"$&/")+"/"),b(L,T,O,"",function(Oa){return Oa})):L!=null&&(zt(L)&&(L=Xl(L,O+(L.key==null||o&&o.key===L.key?"":(""+L.key).replace(El,"$&/")+"/")+ce)),T.push(L)),1;ce=0;var Qe=C===""?".":C+":";if(Se(o))for(var Ae=0;Ae<o.length;Ae++)C=o[Ae],$=Qe+Nt(C,Ae),ce+=b(C,T,O,$,L);else if(Ae=K(o),typeof Ae=="function")for(o=Ae.call(o),Ae=0;!(C=o.next()).done;)C=C.value,$=Qe+Nt(C,Ae++),ce+=b(C,T,O,$,L);else if($==="object"){if(typeof o.then=="function")return b(St(o),T,O,C,L);throw T=String(o),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return ce}function z(o,T,O){if(o==null)return o;var C=[],L=0;return b(o,C,"","",function($){return T.call(O,$,L++)}),C}function j(o){if(o._status===-1){var T=o._result;T=T(),T.then(function(O){(o._status===0||o._status===-1)&&(o._status=1,o._result=O)},function(O){(o._status===0||o._status===-1)&&(o._status=2,o._result=O)}),o._status===-1&&(o._status=0,o._result=T)}if(o._status===1)return o._result.default;throw o._result}var oe=typeof reportError=="function"?reportError:function(o){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof o=="object"&&o!==null&&typeof o.message=="string"?String(o.message):String(o),error:o});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",o);return}console.error(o)},he={map:z,forEach:function(o,T,O){z(o,function(){T.apply(this,arguments)},O)},count:function(o){var T=0;return z(o,function(){T++}),T},toArray:function(o){return z(o,function(T){return T})||[]},only:function(o){if(!zt(o))throw Error("React.Children.only expected to receive a single React element child.");return o}};return q.Activity=N,q.Children=he,q.Component=ae,q.Fragment=B,q.Profiler=H,q.PureComponent=ge,q.StrictMode=m,q.Suspense=A,q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,q.__COMPILER_RUNTIME={__proto__:null,c:function(o){return V.H.useMemoCache(o)}},q.cache=function(o){return function(){return o.apply(null,arguments)}},q.cacheSignal=function(){return null},q.cloneElement=function(o,T,O){if(o==null)throw Error("The argument must be a React element, but you passed "+o+".");var C=F({},o.props),L=o.key;if(T!=null)for($ in T.key!==void 0&&(L=""+T.key),T)!ke.call(T,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&T.ref===void 0||(C[$]=T[$]);var $=arguments.length-2;if($===1)C.children=O;else if(1<$){for(var ce=Array($),Qe=0;Qe<$;Qe++)ce[Qe]=arguments[Qe+2];C.children=ce}return At(o.type,L,C)},q.createContext=function(o){return o={$$typeof:Q,_currentValue:o,_currentValue2:o,_threadCount:0,Provider:null,Consumer:null},o.Provider=o,o.Consumer={$$typeof:G,_context:o},o},q.createElement=function(o,T,O){var C,L={},$=null;if(T!=null)for(C in T.key!==void 0&&($=""+T.key),T)ke.call(T,C)&&C!=="key"&&C!=="__self"&&C!=="__source"&&(L[C]=T[C]);var ce=arguments.length-2;if(ce===1)L.children=O;else if(1<ce){for(var Qe=Array(ce),Ae=0;Ae<ce;Ae++)Qe[Ae]=arguments[Ae+2];L.children=Qe}if(o&&o.defaultProps)for(C in ce=o.defaultProps,ce)L[C]===void 0&&(L[C]=ce[C]);return At(o,$,L)},q.createRef=function(){return{current:null}},q.forwardRef=function(o){return{$$typeof:Y,render:o}},q.isValidElement=zt,q.lazy=function(o){return{$$typeof:W,_payload:{_status:-1,_result:o},_init:j}},q.memo=function(o,T){return{$$typeof:E,type:o,compare:T===void 0?null:T}},q.startTransition=function(o){var T=V.T,O={};V.T=O;try{var C=o(),L=V.S;L!==null&&L(O,C),typeof C=="object"&&C!==null&&typeof C.then=="function"&&C.then(je,oe)}catch($){oe($)}finally{T!==null&&O.types!==null&&(T.types=O.types),V.T=T}},q.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},q.use=function(o){return V.H.use(o)},q.useActionState=function(o,T,O){return V.H.useActionState(o,T,O)},q.useCallback=function(o,T){return V.H.useCallback(o,T)},q.useContext=function(o){return V.H.useContext(o)},q.useDebugValue=function(){},q.useDeferredValue=function(o,T){return V.H.useDeferredValue(o,T)},q.useEffect=function(o,T){return V.H.useEffect(o,T)},q.useEffectEvent=function(o){return V.H.useEffectEvent(o)},q.useId=function(){return V.H.useId()},q.useImperativeHandle=function(o,T,O){return V.H.useImperativeHandle(o,T,O)},q.useInsertionEffect=function(o,T){return V.H.useInsertionEffect(o,T)},q.useLayoutEffect=function(o,T){return V.H.useLayoutEffect(o,T)},q.useMemo=function(o,T){return V.H.useMemo(o,T)},q.useOptimistic=function(o,T){return V.H.useOptimistic(o,T)},q.useReducer=function(o,T,O){return V.H.useReducer(o,T,O)},q.useRef=function(o){return V.H.useRef(o)},q.useState=function(o){return V.H.useState(o)},q.useSyncExternalStore=function(o,T,O){return V.H.useSyncExternalStore(o,T,O)},q.useTransition=function(){return V.H.useTransition()},q.version="19.2.4",q}var vd;function rs(){return vd||(vd=1,us.exports=Fh()),us.exports}var ot=rs(),cs={exports:{}},En={},ss={exports:{}},fs={};var bd;function $h(){return bd||(bd=1,(function(x){function J(b,z){var j=b.length;b.push(z);e:for(;0<j;){var oe=j-1>>>1,he=b[oe];if(0<H(he,z))b[oe]=z,b[j]=he,j=oe;else break e}}function B(b){return b.length===0?null:b[0]}function m(b){if(b.length===0)return null;var z=b[0],j=b.pop();if(j!==z){b[0]=j;e:for(var oe=0,he=b.length,o=he>>>1;oe<o;){var T=2*(oe+1)-1,O=b[T],C=T+1,L=b[C];if(0>H(O,j))C<he&&0>H(L,O)?(b[oe]=L,b[C]=j,oe=C):(b[oe]=O,b[T]=j,oe=T);else if(C<he&&0>H(L,j))b[oe]=L,b[C]=j,oe=C;else break e}}return z}function H(b,z){var j=b.sortIndex-z.sortIndex;return j!==0?j:b.id-z.id}if(x.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var G=performance;x.unstable_now=function(){return G.now()}}else{var Q=Date,Y=Q.now();x.unstable_now=function(){return Q.now()-Y}}var A=[],E=[],W=1,N=null,w=3,K=!1,Z=!1,F=!1,pe=!1,ae=typeof setTimeout=="function"?setTimeout:null,_e=typeof clearTimeout=="function"?clearTimeout:null,ge=typeof setImmediate<"u"?setImmediate:null;function Xe(b){for(var z=B(E);z!==null;){if(z.callback===null)m(E);else if(z.startTime<=b)m(E),z.sortIndex=z.expirationTime,J(A,z);else break;z=B(E)}}function Se(b){if(F=!1,Xe(b),!Z)if(B(A)!==null)Z=!0,je||(je=!0,Ve());else{var z=B(E);z!==null&&St(Se,z.startTime-b)}}var je=!1,V=-1,ke=5,At=-1;function Xl(){return pe?!0:!(x.unstable_now()-At<ke)}function zt(){if(pe=!1,je){var b=x.unstable_now();At=b;var z=!0;try{e:{Z=!1,F&&(F=!1,_e(V),V=-1),K=!0;var j=w;try{t:{for(Xe(b),N=B(A);N!==null&&!(N.expirationTime>b&&Xl());){var oe=N.callback;if(typeof oe=="function"){N.callback=null,w=N.priorityLevel;var he=oe(N.expirationTime<=b);if(b=x.unstable_now(),typeof he=="function"){N.callback=he,Xe(b),z=!0;break t}N===B(A)&&m(A),Xe(b)}else m(A);N=B(A)}if(N!==null)z=!0;else{var o=B(E);o!==null&&St(Se,o.startTime-b),z=!1}}break e}finally{N=null,w=j,K=!1}z=void 0}}finally{z?Ve():je=!1}}}var Ve;if(typeof ge=="function")Ve=function(){ge(zt)};else if(typeof MessageChannel<"u"){var El=new MessageChannel,Nt=El.port2;El.port1.onmessage=zt,Ve=function(){Nt.postMessage(null)}}else Ve=function(){ae(zt,0)};function St(b,z){V=ae(function(){b(x.unstable_now())},z)}x.unstable_IdlePriority=5,x.unstable_ImmediatePriority=1,x.unstable_LowPriority=4,x.unstable_NormalPriority=3,x.unstable_Profiling=null,x.unstable_UserBlockingPriority=2,x.unstable_cancelCallback=function(b){b.callback=null},x.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ke=0<b?Math.floor(1e3/b):5},x.unstable_getCurrentPriorityLevel=function(){return w},x.unstable_next=function(b){switch(w){case 1:case 2:case 3:var z=3;break;default:z=w}var j=w;w=z;try{return b()}finally{w=j}},x.unstable_requestPaint=function(){pe=!0},x.unstable_runWithPriority=function(b,z){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var j=w;w=b;try{return z()}finally{w=j}},x.unstable_scheduleCallback=function(b,z,j){var oe=x.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?oe+j:oe):j=oe,b){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=j+he,b={id:W++,callback:z,priorityLevel:b,startTime:j,expirationTime:he,sortIndex:-1},j>oe?(b.sortIndex=j,J(E,b),B(A)===null&&b===B(E)&&(F?(_e(V),V=-1):F=!0,St(Se,j-oe))):(b.sortIndex=he,J(A,b),Z||K||(Z=!0,je||(je=!0,Ve()))),b},x.unstable_shouldYield=Xl,x.unstable_wrapCallback=function(b){var z=w;return function(){var j=w;w=z;try{return b.apply(this,arguments)}finally{w=j}}}})(fs)),fs}var _d;function Ih(){return _d||(_d=1,ss.exports=$h()),ss.exports}var os={exports:{}},Le={};var Sd;function Ph(){if(Sd)return Le;Sd=1;var x=rs();function J(A){var E="https://react.dev/errors/"+A;if(1<arguments.length){E+="?args[]="+encodeURIComponent(arguments[1]);for(var W=2;W<arguments.length;W++)E+="&args[]="+encodeURIComponent(arguments[W])}return"Minified React error #"+A+"; visit "+E+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function B(){}var m={d:{f:B,r:function(){throw Error(J(522))},D:B,C:B,L:B,m:B,X:B,S:B,M:B},p:0,findDOMNode:null},H=Symbol.for("react.portal");function G(A,E,W){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:N==null?null:""+N,children:A,containerInfo:E,implementation:W}}var Q=x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Y(A,E){if(A==="font")return"";if(typeof E=="string")return E==="use-credentials"?E:""}return Le.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=m,Le.createPortal=function(A,E){var W=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!E||E.nodeType!==1&&E.nodeType!==9&&E.nodeType!==11)throw Error(J(299));return G(A,E,null,W)},Le.flushSync=function(A){var E=Q.T,W=m.p;try{if(Q.T=null,m.p=2,A)return A()}finally{Q.T=E,m.p=W,m.d.f()}},Le.preconnect=function(A,E){typeof A=="string"&&(E?(E=E.crossOrigin,E=typeof E=="string"?E==="use-credentials"?E:"":void 0):E=null,m.d.C(A,E))},Le.prefetchDNS=function(A){typeof A=="string"&&m.d.D(A)},Le.preinit=function(A,E){if(typeof A=="string"&&E&&typeof E.as=="string"){var W=E.as,N=Y(W,E.crossOrigin),w=typeof E.integrity=="string"?E.integrity:void 0,K=typeof E.fetchPriority=="string"?E.fetchPriority:void 0;W==="style"?m.d.S(A,typeof E.precedence=="string"?E.precedence:void 0,{crossOrigin:N,integrity:w,fetchPriority:K}):W==="script"&&m.d.X(A,{crossOrigin:N,integrity:w,fetchPriority:K,nonce:typeof E.nonce=="string"?E.nonce:void 0})}},Le.preinitModule=function(A,E){if(typeof A=="string")if(typeof E=="object"&&E!==null){if(E.as==null||E.as==="script"){var W=Y(E.as,E.crossOrigin);m.d.M(A,{crossOrigin:W,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0})}}else E==null&&m.d.M(A)},Le.preload=function(A,E){if(typeof A=="string"&&typeof E=="object"&&E!==null&&typeof E.as=="string"){var W=E.as,N=Y(W,E.crossOrigin);m.d.L(A,W,{crossOrigin:N,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0,type:typeof E.type=="string"?E.type:void 0,fetchPriority:typeof E.fetchPriority=="string"?E.fetchPriority:void 0,referrerPolicy:typeof E.referrerPolicy=="string"?E.referrerPolicy:void 0,imageSrcSet:typeof E.imageSrcSet=="string"?E.imageSrcSet:void 0,imageSizes:typeof E.imageSizes=="string"?E.imageSizes:void 0,media:typeof E.media=="string"?E.media:void 0})}},Le.preloadModule=function(A,E){if(typeof A=="string")if(E){var W=Y(E.as,E.crossOrigin);m.d.m(A,{as:typeof E.as=="string"&&E.as!=="script"?E.as:void 0,crossOrigin:W,integrity:typeof E.integrity=="string"?E.integrity:void 0})}else m.d.m(A)},Le.requestFormReset=function(A){m.d.r(A)},Le.unstable_batchedUpdates=function(A,E){return A(E)},Le.useFormState=function(A,E,W){return Q.H.useFormState(A,E,W)},Le.useFormStatus=function(){return Q.H.useHostTransitionStatus()},Le.version="19.2.4",Le}var Ed;function ey(){if(Ed)return os.exports;Ed=1;function x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x)}catch(J){console.error(J)}}return x(),os.exports=Ph(),os.exports}var Td;function ty(){if(Td)return En;Td=1;var x=Ih(),J=rs(),B=ey();function m(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function H(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function G(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function Q(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Y(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function A(e){if(G(e)!==e)throw Error(m(188))}function E(e){var t=e.alternate;if(!t){if(t=G(e),t===null)throw Error(m(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return A(n),e;if(i===a)return A(n),t;i=i.sibling}throw Error(m(188))}if(l.return!==a.return)l=n,a=i;else{for(var u=!1,c=n.child;c;){if(c===l){u=!0,l=n,a=i;break}if(c===a){u=!0,a=n,l=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===l){u=!0,l=i,a=n;break}if(c===a){u=!0,a=i,l=n;break}c=c.sibling}if(!u)throw Error(m(189))}}if(l.alternate!==a)throw Error(m(190))}if(l.tag!==3)throw Error(m(188));return l.stateNode.current===l?e:t}function W(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=W(e),t!==null)return t;e=e.sibling}return null}var N=Object.assign,w=Symbol.for("react.element"),K=Symbol.for("react.transitional.element"),Z=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),pe=Symbol.for("react.strict_mode"),ae=Symbol.for("react.profiler"),_e=Symbol.for("react.consumer"),ge=Symbol.for("react.context"),Xe=Symbol.for("react.forward_ref"),Se=Symbol.for("react.suspense"),je=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),ke=Symbol.for("react.lazy"),At=Symbol.for("react.activity"),Xl=Symbol.for("react.memo_cache_sentinel"),zt=Symbol.iterator;function Ve(e){return e===null||typeof e!="object"?null:(e=zt&&e[zt]||e["@@iterator"],typeof e=="function"?e:null)}var El=Symbol.for("react.client.reference");function Nt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===El?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case ae:return"Profiler";case pe:return"StrictMode";case Se:return"Suspense";case je:return"SuspenseList";case At:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Z:return"Portal";case ge:return e.displayName||"Context";case _e:return(e._context.displayName||"Context")+".Consumer";case Xe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case V:return t=e.displayName||null,t!==null?t:Nt(e.type)||"Memo";case ke:t=e._payload,e=e._init;try{return Nt(e(t))}catch{}}return null}var St=Array.isArray,b=J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=B.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},oe=[],he=-1;function o(e){return{current:e}}function T(e){0>he||(e.current=oe[he],oe[he]=null,he--)}function O(e,t){he++,oe[he]=e.current,e.current=t}var C=o(null),L=o(null),$=o(null),ce=o(null);function Qe(e,t){switch(O($,t),O(L,e),O(C,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Gr(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Gr(t),e=qr(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}T(C),O(C,e)}function Ae(){T(C),T(L),T($)}function Oa(e){e.memoizedState!==null&&O(ce,e);var t=C.current,l=qr(t,e.type);t!==l&&(O(L,e),O(C,l))}function Tn(e){L.current===e&&(T(C),T(L)),ce.current===e&&(T(ce),gn._currentValue=j)}var Li,ds;function Tl(e){if(Li===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);Li=t&&t[1]||"",ds=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Li+e+ds}var Xi=!1;function Qi(e,t){if(!e||Xi)return"";Xi=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(g){var p=g}Reflect.construct(e,[],S)}else{try{S.call()}catch(g){p=g}e.call(S.prototype)}}else{try{throw Error()}catch(g){p=g}(S=e())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(g){if(g&&p&&typeof g.stack=="string")return[g.stack,p.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var s=u.split(`
`),y=c.split(`
`);for(n=a=0;a<s.length&&!s[a].includes("DetermineComponentFrameRoot");)a++;for(;n<y.length&&!y[n].includes("DetermineComponentFrameRoot");)n++;if(a===s.length||n===y.length)for(a=s.length-1,n=y.length-1;1<=a&&0<=n&&s[a]!==y[n];)n--;for(;1<=a&&0<=n;a--,n--)if(s[a]!==y[n]){if(a!==1||n!==1)do if(a--,n--,0>n||s[a]!==y[n]){var v=`
`+s[a].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),v}while(1<=a&&0<=n);break}}}finally{Xi=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?Tl(l):""}function Ad(e,t){switch(e.tag){case 26:case 27:case 5:return Tl(e.type);case 16:return Tl("Lazy");case 13:return e.child!==t&&t!==null?Tl("Suspense Fallback"):Tl("Suspense");case 19:return Tl("SuspenseList");case 0:case 15:return Qi(e.type,!1);case 11:return Qi(e.type.render,!1);case 1:return Qi(e.type,!0);case 31:return Tl("Activity");default:return""}}function ms(e){try{var t="",l=null;do t+=Ad(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Zi=Object.prototype.hasOwnProperty,ki=x.unstable_scheduleCallback,Vi=x.unstable_cancelCallback,zd=x.unstable_shouldYield,Od=x.unstable_requestPaint,et=x.unstable_now,Md=x.unstable_getCurrentPriorityLevel,hs=x.unstable_ImmediatePriority,ys=x.unstable_UserBlockingPriority,xn=x.unstable_NormalPriority,Cd=x.unstable_LowPriority,ps=x.unstable_IdlePriority,Dd=x.log,Nd=x.unstable_setDisableYieldValue,Ma=null,tt=null;function Ft(e){if(typeof Dd=="function"&&Nd(e),tt&&typeof tt.setStrictMode=="function")try{tt.setStrictMode(Ma,e)}catch{}}var lt=Math.clz32?Math.clz32:Ud,Rd=Math.log,Hd=Math.LN2;function Ud(e){return e>>>=0,e===0?32:31-(Rd(e)/Hd|0)|0}var An=256,zn=262144,On=4194304;function xl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Mn(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var c=a&134217727;return c!==0?(a=c&~i,a!==0?n=xl(a):(u&=c,u!==0?n=xl(u):l||(l=c&~e,l!==0&&(n=xl(l))))):(c=a&~i,c!==0?n=xl(c):u!==0?n=xl(u):l||(l=a&~e,l!==0&&(n=xl(l)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,l=t&-t,i>=l||i===32&&(l&4194048)!==0)?t:n}function Ca(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function jd(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gs(){var e=On;return On<<=1,(On&62914560)===0&&(On=4194304),e}function Ki(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Da(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function wd(e,t,l,a,n,i){var u=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var c=e.entanglements,s=e.expirationTimes,y=e.hiddenUpdates;for(l=u&~l;0<l;){var v=31-lt(l),S=1<<v;c[v]=0,s[v]=-1;var p=y[v];if(p!==null)for(y[v]=null,v=0;v<p.length;v++){var g=p[v];g!==null&&(g.lane&=-536870913)}l&=~S}a!==0&&vs(e,a,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function vs(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-lt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function bs(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-lt(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function _s(e,t){var l=t&-t;return l=(l&42)!==0?1:Ji(l),(l&(e.suspendedLanes|t))!==0?0:l}function Ji(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Wi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ss(){var e=z.p;return e!==0?e:(e=window.event,e===void 0?32:sd(e.type))}function Es(e,t){var l=z.p;try{return z.p=e,t()}finally{z.p=l}}var $t=Math.random().toString(36).slice(2),we="__reactFiber$"+$t,Ke="__reactProps$"+$t,Ql="__reactContainer$"+$t,Fi="__reactEvents$"+$t,Bd="__reactListeners$"+$t,Gd="__reactHandles$"+$t,Ts="__reactResources$"+$t,Na="__reactMarker$"+$t;function $i(e){delete e[we],delete e[Ke],delete e[Fi],delete e[Bd],delete e[Gd]}function Zl(e){var t=e[we];if(t)return t;for(var l=e.parentNode;l;){if(t=l[Ql]||l[we]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=Vr(e);e!==null;){if(l=e[we])return l;e=Vr(e)}return t}e=l,l=e.parentNode}return null}function kl(e){if(e=e[we]||e[Ql]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ra(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(m(33))}function Vl(e){var t=e[Ts];return t||(t=e[Ts]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function He(e){e[Na]=!0}var xs=new Set,As={};function Al(e,t){Kl(e,t),Kl(e+"Capture",t)}function Kl(e,t){for(As[e]=t,e=0;e<t.length;e++)xs.add(t[e])}var qd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),zs={},Os={};function Yd(e){return Zi.call(Os,e)?!0:Zi.call(zs,e)?!1:qd.test(e)?Os[e]=!0:(zs[e]=!0,!1)}function Cn(e,t,l){if(Yd(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Dn(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function Rt(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function rt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ms(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ld(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ii(e){if(!e._valueTracker){var t=Ms(e)?"checked":"value";e._valueTracker=Ld(e,t,""+e[t])}}function Cs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=Ms(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function Nn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Xd=/[\n"\\]/g;function dt(e){return e.replace(Xd,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Pi(e,t,l,a,n,i,u,c){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+rt(t)):e.value!==""+rt(t)&&(e.value=""+rt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?eu(e,u,rt(t)):l!=null?eu(e,u,rt(l)):a!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+rt(c):e.removeAttribute("name")}function Ds(e,t,l,a,n,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Ii(e);return}l=l!=null?""+rt(l):"",t=t!=null?""+rt(t):l,c||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=c?e.checked:!!a,e.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Ii(e)}function eu(e,t,l){t==="number"&&Nn(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function Jl(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+rt(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Ns(e,t,l){if(t!=null&&(t=""+rt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+rt(l):""}function Rs(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(m(92));if(St(a)){if(1<a.length)throw Error(m(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=rt(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),Ii(e)}function Wl(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Qd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hs(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||Qd.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function Us(e,t,l){if(t!=null&&typeof t!="object")throw Error(m(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&Hs(e,n,a)}else for(var i in t)t.hasOwnProperty(i)&&Hs(e,i,t[i])}function tu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),kd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rn(e){return kd.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ht(){}var lu=null;function au(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fl=null,$l=null;function js(e){var t=kl(e);if(t&&(e=t.stateNode)){var l=e[Ke]||null;e:switch(e=t.stateNode,t.type){case"input":if(Pi(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+dt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[Ke]||null;if(!n)throw Error(m(90));Pi(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&Cs(a)}break e;case"textarea":Ns(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&Jl(e,!!l.multiple,t,!1)}}}var nu=!1;function ws(e,t,l){if(nu)return e(t,l);nu=!0;try{var a=e(t);return a}finally{if(nu=!1,(Fl!==null||$l!==null)&&(bi(),Fl&&(t=Fl,e=$l,$l=Fl=null,js(t),e)))for(t=0;t<e.length;t++)js(e[t])}}function Ha(e,t){var l=e.stateNode;if(l===null)return null;var a=l[Ke]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(m(231,t,typeof l));return l}var Ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),iu=!1;if(Ut)try{var Ua={};Object.defineProperty(Ua,"passive",{get:function(){iu=!0}}),window.addEventListener("test",Ua,Ua),window.removeEventListener("test",Ua,Ua)}catch{iu=!1}var It=null,uu=null,Hn=null;function Bs(){if(Hn)return Hn;var e,t=uu,l=t.length,a,n="value"in It?It.value:It.textContent,i=n.length;for(e=0;e<l&&t[e]===n[e];e++);var u=l-e;for(a=1;a<=u&&t[l-a]===n[i-a];a++);return Hn=n.slice(e,1<a?1-a:void 0)}function Un(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function jn(){return!0}function Gs(){return!1}function Je(e){function t(l,a,n,i,u){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(l=e[c],this[c]=l?l(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?jn:Gs,this.isPropagationStopped=Gs,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=jn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=jn)},persist:function(){},isPersistent:jn}),t}var zl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wn=Je(zl),ja=N({},zl,{view:0,detail:0}),Vd=Je(ja),cu,su,wa,Bn=N({},ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wa&&(wa&&e.type==="mousemove"?(cu=e.screenX-wa.screenX,su=e.screenY-wa.screenY):su=cu=0,wa=e),cu)},movementY:function(e){return"movementY"in e?e.movementY:su}}),qs=Je(Bn),Kd=N({},Bn,{dataTransfer:0}),Jd=Je(Kd),Wd=N({},ja,{relatedTarget:0}),fu=Je(Wd),Fd=N({},zl,{animationName:0,elapsedTime:0,pseudoElement:0}),$d=Je(Fd),Id=N({},zl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pd=Je(Id),em=N({},zl,{data:0}),Ys=Je(em),tm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},am={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=am[e])?!!t[e]:!1}function ou(){return nm}var im=N({},ja,{key:function(e){if(e.key){var t=tm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Un(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ou,charCode:function(e){return e.type==="keypress"?Un(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Un(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),um=Je(im),cm=N({},Bn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ls=Je(cm),sm=N({},ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ou}),fm=Je(sm),om=N({},zl,{propertyName:0,elapsedTime:0,pseudoElement:0}),rm=Je(om),dm=N({},Bn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mm=Je(dm),hm=N({},zl,{newState:0,oldState:0}),ym=Je(hm),pm=[9,13,27,32],ru=Ut&&"CompositionEvent"in window,Ba=null;Ut&&"documentMode"in document&&(Ba=document.documentMode);var gm=Ut&&"TextEvent"in window&&!Ba,Xs=Ut&&(!ru||Ba&&8<Ba&&11>=Ba),Qs=" ",Zs=!1;function ks(e,t){switch(e){case"keyup":return pm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Il=!1;function vm(e,t){switch(e){case"compositionend":return Vs(t);case"keypress":return t.which!==32?null:(Zs=!0,Qs);case"textInput":return e=t.data,e===Qs&&Zs?null:e;default:return null}}function bm(e,t){if(Il)return e==="compositionend"||!ru&&ks(e,t)?(e=Bs(),Hn=uu=It=null,Il=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xs&&t.locale!=="ko"?null:t.data;default:return null}}var _m={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ks(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_m[e.type]:t==="textarea"}function Js(e,t,l,a){Fl?$l?$l.push(a):$l=[a]:Fl=a,t=zi(t,"onChange"),0<t.length&&(l=new wn("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var Ga=null,qa=null;function Sm(e){Rr(e,0)}function Gn(e){var t=Ra(e);if(Cs(t))return e}function Ws(e,t){if(e==="change")return t}var Fs=!1;if(Ut){var du;if(Ut){var mu="oninput"in document;if(!mu){var $s=document.createElement("div");$s.setAttribute("oninput","return;"),mu=typeof $s.oninput=="function"}du=mu}else du=!1;Fs=du&&(!document.documentMode||9<document.documentMode)}function Is(){Ga&&(Ga.detachEvent("onpropertychange",Ps),qa=Ga=null)}function Ps(e){if(e.propertyName==="value"&&Gn(qa)){var t=[];Js(t,qa,e,au(e)),ws(Sm,t)}}function Em(e,t,l){e==="focusin"?(Is(),Ga=t,qa=l,Ga.attachEvent("onpropertychange",Ps)):e==="focusout"&&Is()}function Tm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gn(qa)}function xm(e,t){if(e==="click")return Gn(t)}function Am(e,t){if(e==="input"||e==="change")return Gn(t)}function zm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var at=typeof Object.is=="function"?Object.is:zm;function Ya(e,t){if(at(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!Zi.call(t,n)||!at(e[n],t[n]))return!1}return!0}function ef(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tf(e,t){var l=ef(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=ef(l)}}function lf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function af(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Nn(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=Nn(e.document)}return t}function hu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Om=Ut&&"documentMode"in document&&11>=document.documentMode,Pl=null,yu=null,La=null,pu=!1;function nf(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;pu||Pl==null||Pl!==Nn(a)||(a=Pl,"selectionStart"in a&&hu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),La&&Ya(La,a)||(La=a,a=zi(yu,"onSelect"),0<a.length&&(t=new wn("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=Pl)))}function Ol(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var ea={animationend:Ol("Animation","AnimationEnd"),animationiteration:Ol("Animation","AnimationIteration"),animationstart:Ol("Animation","AnimationStart"),transitionrun:Ol("Transition","TransitionRun"),transitionstart:Ol("Transition","TransitionStart"),transitioncancel:Ol("Transition","TransitionCancel"),transitionend:Ol("Transition","TransitionEnd")},gu={},uf={};Ut&&(uf=document.createElement("div").style,"AnimationEvent"in window||(delete ea.animationend.animation,delete ea.animationiteration.animation,delete ea.animationstart.animation),"TransitionEvent"in window||delete ea.transitionend.transition);function Ml(e){if(gu[e])return gu[e];if(!ea[e])return e;var t=ea[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in uf)return gu[e]=t[l];return e}var cf=Ml("animationend"),sf=Ml("animationiteration"),ff=Ml("animationstart"),Mm=Ml("transitionrun"),Cm=Ml("transitionstart"),Dm=Ml("transitioncancel"),of=Ml("transitionend"),rf=new Map,vu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vu.push("scrollEnd");function Et(e,t){rf.set(e,t),Al(t,[e])}var qn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},mt=[],ta=0,bu=0;function Yn(){for(var e=ta,t=bu=ta=0;t<e;){var l=mt[t];mt[t++]=null;var a=mt[t];mt[t++]=null;var n=mt[t];mt[t++]=null;var i=mt[t];if(mt[t++]=null,a!==null&&n!==null){var u=a.pending;u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n}i!==0&&df(l,n,i)}}function Ln(e,t,l,a){mt[ta++]=e,mt[ta++]=t,mt[ta++]=l,mt[ta++]=a,bu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function _u(e,t,l,a){return Ln(e,t,l,a),Xn(e)}function Cl(e,t){return Ln(e,null,null,t),Xn(e)}function df(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=e.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-lt(l),e=i.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),i):null}function Xn(e){if(50<on)throw on=0,Cc=null,Error(m(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var la={};function Nm(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(e,t,l,a){return new Nm(e,t,l,a)}function Su(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jt(e,t){var l=e.alternate;return l===null?(l=nt(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function mf(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Qn(e,t,l,a,n,i){var u=0;if(a=e,typeof e=="function")Su(e)&&(u=1);else if(typeof e=="string")u=wh(e,l,C.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case At:return e=nt(31,l,t,n),e.elementType=At,e.lanes=i,e;case F:return Dl(l.children,n,i,t);case pe:u=8,n|=24;break;case ae:return e=nt(12,l,t,n|2),e.elementType=ae,e.lanes=i,e;case Se:return e=nt(13,l,t,n),e.elementType=Se,e.lanes=i,e;case je:return e=nt(19,l,t,n),e.elementType=je,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ge:u=10;break e;case _e:u=9;break e;case Xe:u=11;break e;case V:u=14;break e;case ke:u=16,a=null;break e}u=29,l=Error(m(130,e===null?"null":typeof e,"")),a=null}return t=nt(u,l,t,n),t.elementType=e,t.type=a,t.lanes=i,t}function Dl(e,t,l,a){return e=nt(7,e,a,t),e.lanes=l,e}function Eu(e,t,l){return e=nt(6,e,null,t),e.lanes=l,e}function hf(e){var t=nt(18,null,null,0);return t.stateNode=e,t}function Tu(e,t,l){return t=nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var yf=new WeakMap;function ht(e,t){if(typeof e=="object"&&e!==null){var l=yf.get(e);return l!==void 0?l:(t={value:e,source:t,stack:ms(t)},yf.set(e,t),t)}return{value:e,source:t,stack:ms(t)}}var aa=[],na=0,Zn=null,Xa=0,yt=[],pt=0,Pt=null,Ot=1,Mt="";function wt(e,t){aa[na++]=Xa,aa[na++]=Zn,Zn=e,Xa=t}function pf(e,t,l){yt[pt++]=Ot,yt[pt++]=Mt,yt[pt++]=Pt,Pt=e;var a=Ot;e=Mt;var n=32-lt(a)-1;a&=~(1<<n),l+=1;var i=32-lt(t)+n;if(30<i){var u=n-n%5;i=(a&(1<<u)-1).toString(32),a>>=u,n-=u,Ot=1<<32-lt(t)+n|l<<n|a,Mt=i+e}else Ot=1<<i|l<<n|a,Mt=e}function xu(e){e.return!==null&&(wt(e,1),pf(e,1,0))}function Au(e){for(;e===Zn;)Zn=aa[--na],aa[na]=null,Xa=aa[--na],aa[na]=null;for(;e===Pt;)Pt=yt[--pt],yt[pt]=null,Mt=yt[--pt],yt[pt]=null,Ot=yt[--pt],yt[pt]=null}function gf(e,t){yt[pt++]=Ot,yt[pt++]=Mt,yt[pt++]=Pt,Ot=t.id,Mt=t.overflow,Pt=e}var Be=null,ve=null,le=!1,el=null,gt=!1,zu=Error(m(519));function tl(e){var t=Error(m(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qa(ht(t,e)),zu}function vf(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[we]=e,t[Ke]=a,l){case"dialog":P("cancel",t),P("close",t);break;case"iframe":case"object":case"embed":P("load",t);break;case"video":case"audio":for(l=0;l<dn.length;l++)P(dn[l],t);break;case"source":P("error",t);break;case"img":case"image":case"link":P("error",t),P("load",t);break;case"details":P("toggle",t);break;case"input":P("invalid",t),Ds(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":P("invalid",t);break;case"textarea":P("invalid",t),Rs(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||wr(t.textContent,l)?(a.popover!=null&&(P("beforetoggle",t),P("toggle",t)),a.onScroll!=null&&P("scroll",t),a.onScrollEnd!=null&&P("scrollend",t),a.onClick!=null&&(t.onclick=Ht),t=!0):t=!1,t||tl(e,!0)}function bf(e){for(Be=e.return;Be;)switch(Be.tag){case 5:case 31:case 13:gt=!1;return;case 27:case 3:gt=!0;return;default:Be=Be.return}}function ia(e){if(e!==Be)return!1;if(!le)return bf(e),le=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||Zc(e.type,e.memoizedProps)),l=!l),l&&ve&&tl(e),bf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));ve=kr(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));ve=kr(e)}else t===27?(t=ve,yl(e.type)?(e=Wc,Wc=null,ve=e):ve=t):ve=Be?bt(e.stateNode.nextSibling):null;return!0}function Nl(){ve=Be=null,le=!1}function Ou(){var e=el;return e!==null&&(Ie===null?Ie=e:Ie.push.apply(Ie,e),el=null),e}function Qa(e){el===null?el=[e]:el.push(e)}var Mu=o(null),Rl=null,Bt=null;function ll(e,t,l){O(Mu,t._currentValue),t._currentValue=l}function Gt(e){e._currentValue=Mu.current,T(Mu)}function Cu(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function Du(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var c=i;i=n;for(var s=0;s<t.length;s++)if(c.context===t[s]){i.lanes|=l,c=i.alternate,c!==null&&(c.lanes|=l),Cu(i.return,l,e),a||(u=null);break e}i=c.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(m(341));u.lanes|=l,i=u.alternate,i!==null&&(i.lanes|=l),Cu(u,l,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function ua(e,t,l,a){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(m(387));if(u=u.memoizedProps,u!==null){var c=n.type;at(n.pendingProps.value,u.value)||(e!==null?e.push(c):e=[c])}}else if(n===ce.current){if(u=n.alternate,u===null)throw Error(m(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(gn):e=[gn])}n=n.return}e!==null&&Du(t,e,l,a),t.flags|=262144}function kn(e){for(e=e.firstContext;e!==null;){if(!at(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Hl(e){Rl=e,Bt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ge(e){return _f(Rl,e)}function Vn(e,t){return Rl===null&&Hl(e),_f(e,t)}function _f(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},Bt===null){if(e===null)throw Error(m(308));Bt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Bt=Bt.next=t;return l}var Rm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},Hm=x.unstable_scheduleCallback,Um=x.unstable_NormalPriority,Me={$$typeof:ge,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Nu(){return{controller:new Rm,data:new Map,refCount:0}}function Za(e){e.refCount--,e.refCount===0&&Hm(Um,function(){e.controller.abort()})}var ka=null,Ru=0,ca=0,sa=null;function jm(e,t){if(ka===null){var l=ka=[];Ru=0,ca=jc(),sa={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Ru++,t.then(Sf,Sf),t}function Sf(){if(--Ru===0&&ka!==null){sa!==null&&(sa.status="fulfilled");var e=ka;ka=null,ca=0,sa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function wm(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var Ef=b.S;b.S=function(e,t){ur=et(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&jm(e,t),Ef!==null&&Ef(e,t)};var Ul=o(null);function Hu(){var e=Ul.current;return e!==null?e:ye.pooledCache}function Kn(e,t){t===null?O(Ul,Ul.current):O(Ul,t.pool)}function Tf(){var e=Hu();return e===null?null:{parent:Me._currentValue,pool:e}}var fa=Error(m(460)),Uu=Error(m(474)),Jn=Error(m(542)),Wn={then:function(){}};function xf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Af(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(Ht,Ht),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Of(e),e;default:if(typeof t.status=="string")t.then(Ht,Ht);else{if(e=ye,e!==null&&100<e.shellSuspendCounter)throw Error(m(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Of(e),e}throw wl=t,fa}}function jl(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(wl=l,fa):l}}var wl=null;function zf(){if(wl===null)throw Error(m(459));var e=wl;return wl=null,e}function Of(e){if(e===fa||e===Jn)throw Error(m(483))}var oa=null,Va=0;function Fn(e){var t=Va;return Va+=1,oa===null&&(oa=[]),Af(oa,e,t)}function Ka(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function $n(e,t){throw t.$$typeof===w?Error(m(525)):(e=Object.prototype.toString.call(t),Error(m(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Mf(e){function t(r,f){if(e){var h=r.deletions;h===null?(r.deletions=[f],r.flags|=16):h.push(f)}}function l(r,f){if(!e)return null;for(;f!==null;)t(r,f),f=f.sibling;return null}function a(r){for(var f=new Map;r!==null;)r.key!==null?f.set(r.key,r):f.set(r.index,r),r=r.sibling;return f}function n(r,f){return r=jt(r,f),r.index=0,r.sibling=null,r}function i(r,f,h){return r.index=h,e?(h=r.alternate,h!==null?(h=h.index,h<f?(r.flags|=67108866,f):h):(r.flags|=67108866,f)):(r.flags|=1048576,f)}function u(r){return e&&r.alternate===null&&(r.flags|=67108866),r}function c(r,f,h,_){return f===null||f.tag!==6?(f=Eu(h,r.mode,_),f.return=r,f):(f=n(f,h),f.return=r,f)}function s(r,f,h,_){var R=h.type;return R===F?v(r,f,h.props.children,_,h.key):f!==null&&(f.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===ke&&jl(R)===f.type)?(f=n(f,h.props),Ka(f,h),f.return=r,f):(f=Qn(h.type,h.key,h.props,null,r.mode,_),Ka(f,h),f.return=r,f)}function y(r,f,h,_){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Tu(h,r.mode,_),f.return=r,f):(f=n(f,h.children||[]),f.return=r,f)}function v(r,f,h,_,R){return f===null||f.tag!==7?(f=Dl(h,r.mode,_,R),f.return=r,f):(f=n(f,h),f.return=r,f)}function S(r,f,h){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=Eu(""+f,r.mode,h),f.return=r,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case K:return h=Qn(f.type,f.key,f.props,null,r.mode,h),Ka(h,f),h.return=r,h;case Z:return f=Tu(f,r.mode,h),f.return=r,f;case ke:return f=jl(f),S(r,f,h)}if(St(f)||Ve(f))return f=Dl(f,r.mode,h,null),f.return=r,f;if(typeof f.then=="function")return S(r,Fn(f),h);if(f.$$typeof===ge)return S(r,Vn(r,f),h);$n(r,f)}return null}function p(r,f,h,_){var R=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return R!==null?null:c(r,f,""+h,_);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case K:return h.key===R?s(r,f,h,_):null;case Z:return h.key===R?y(r,f,h,_):null;case ke:return h=jl(h),p(r,f,h,_)}if(St(h)||Ve(h))return R!==null?null:v(r,f,h,_,null);if(typeof h.then=="function")return p(r,f,Fn(h),_);if(h.$$typeof===ge)return p(r,f,Vn(r,h),_);$n(r,h)}return null}function g(r,f,h,_,R){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return r=r.get(h)||null,c(f,r,""+_,R);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case K:return r=r.get(_.key===null?h:_.key)||null,s(f,r,_,R);case Z:return r=r.get(_.key===null?h:_.key)||null,y(f,r,_,R);case ke:return _=jl(_),g(r,f,h,_,R)}if(St(_)||Ve(_))return r=r.get(h)||null,v(f,r,_,R,null);if(typeof _.then=="function")return g(r,f,h,Fn(_),R);if(_.$$typeof===ge)return g(r,f,h,Vn(f,_),R);$n(f,_)}return null}function M(r,f,h,_){for(var R=null,ne=null,D=f,k=f=0,te=null;D!==null&&k<h.length;k++){D.index>k?(te=D,D=null):te=D.sibling;var ie=p(r,D,h[k],_);if(ie===null){D===null&&(D=te);break}e&&D&&ie.alternate===null&&t(r,D),f=i(ie,f,k),ne===null?R=ie:ne.sibling=ie,ne=ie,D=te}if(k===h.length)return l(r,D),le&&wt(r,k),R;if(D===null){for(;k<h.length;k++)D=S(r,h[k],_),D!==null&&(f=i(D,f,k),ne===null?R=D:ne.sibling=D,ne=D);return le&&wt(r,k),R}for(D=a(D);k<h.length;k++)te=g(D,r,k,h[k],_),te!==null&&(e&&te.alternate!==null&&D.delete(te.key===null?k:te.key),f=i(te,f,k),ne===null?R=te:ne.sibling=te,ne=te);return e&&D.forEach(function(_l){return t(r,_l)}),le&&wt(r,k),R}function U(r,f,h,_){if(h==null)throw Error(m(151));for(var R=null,ne=null,D=f,k=f=0,te=null,ie=h.next();D!==null&&!ie.done;k++,ie=h.next()){D.index>k?(te=D,D=null):te=D.sibling;var _l=p(r,D,ie.value,_);if(_l===null){D===null&&(D=te);break}e&&D&&_l.alternate===null&&t(r,D),f=i(_l,f,k),ne===null?R=_l:ne.sibling=_l,ne=_l,D=te}if(ie.done)return l(r,D),le&&wt(r,k),R;if(D===null){for(;!ie.done;k++,ie=h.next())ie=S(r,ie.value,_),ie!==null&&(f=i(ie,f,k),ne===null?R=ie:ne.sibling=ie,ne=ie);return le&&wt(r,k),R}for(D=a(D);!ie.done;k++,ie=h.next())ie=g(D,r,k,ie.value,_),ie!==null&&(e&&ie.alternate!==null&&D.delete(ie.key===null?k:ie.key),f=i(ie,f,k),ne===null?R=ie:ne.sibling=ie,ne=ie);return e&&D.forEach(function(Kh){return t(r,Kh)}),le&&wt(r,k),R}function me(r,f,h,_){if(typeof h=="object"&&h!==null&&h.type===F&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case K:e:{for(var R=h.key;f!==null;){if(f.key===R){if(R=h.type,R===F){if(f.tag===7){l(r,f.sibling),_=n(f,h.props.children),_.return=r,r=_;break e}}else if(f.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===ke&&jl(R)===f.type){l(r,f.sibling),_=n(f,h.props),Ka(_,h),_.return=r,r=_;break e}l(r,f);break}else t(r,f);f=f.sibling}h.type===F?(_=Dl(h.props.children,r.mode,_,h.key),_.return=r,r=_):(_=Qn(h.type,h.key,h.props,null,r.mode,_),Ka(_,h),_.return=r,r=_)}return u(r);case Z:e:{for(R=h.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){l(r,f.sibling),_=n(f,h.children||[]),_.return=r,r=_;break e}else{l(r,f);break}else t(r,f);f=f.sibling}_=Tu(h,r.mode,_),_.return=r,r=_}return u(r);case ke:return h=jl(h),me(r,f,h,_)}if(St(h))return M(r,f,h,_);if(Ve(h)){if(R=Ve(h),typeof R!="function")throw Error(m(150));return h=R.call(h),U(r,f,h,_)}if(typeof h.then=="function")return me(r,f,Fn(h),_);if(h.$$typeof===ge)return me(r,f,Vn(r,h),_);$n(r,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,f!==null&&f.tag===6?(l(r,f.sibling),_=n(f,h),_.return=r,r=_):(l(r,f),_=Eu(h,r.mode,_),_.return=r,r=_),u(r)):l(r,f)}return function(r,f,h,_){try{Va=0;var R=me(r,f,h,_);return oa=null,R}catch(D){if(D===fa||D===Jn)throw D;var ne=nt(29,D,null,r.mode);return ne.lanes=_,ne.return=r,ne}}}var Bl=Mf(!0),Cf=Mf(!1),al=!1;function ju(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function nl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function il(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ue&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=Xn(e),df(e,null,l),t}return Ln(e,a,t,l),Xn(e)}function Ja(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,bs(e,l)}}function Bu(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,l=l.next}while(l!==null);i===null?n=i=t:i=i.next=t}else n=i=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var Gu=!1;function Wa(){if(Gu){var e=sa;if(e!==null)throw e}}function Fa(e,t,l,a){Gu=!1;var n=e.updateQueue;al=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var s=c,y=s.next;s.next=null,u===null?i=y:u.next=y,u=s;var v=e.alternate;v!==null&&(v=v.updateQueue,c=v.lastBaseUpdate,c!==u&&(c===null?v.firstBaseUpdate=y:c.next=y,v.lastBaseUpdate=s))}if(i!==null){var S=n.baseState;u=0,v=y=s=null,c=i;do{var p=c.lane&-536870913,g=p!==c.lane;if(g?(ee&p)===p:(a&p)===p){p!==0&&p===ca&&(Gu=!0),v!==null&&(v=v.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var M=e,U=c;p=t;var me=l;switch(U.tag){case 1:if(M=U.payload,typeof M=="function"){S=M.call(me,S,p);break e}S=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=U.payload,p=typeof M=="function"?M.call(me,S,p):M,p==null)break e;S=N({},S,p);break e;case 2:al=!0}}p=c.callback,p!==null&&(e.flags|=64,g&&(e.flags|=8192),g=n.callbacks,g===null?n.callbacks=[p]:g.push(p))}else g={lane:p,tag:c.tag,payload:c.payload,callback:c.callback,next:null},v===null?(y=v=g,s=S):v=v.next=g,u|=p;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;g=c,c=g.next,g.next=null,n.lastBaseUpdate=g,n.shared.pending=null}}while(!0);v===null&&(s=S),n.baseState=s,n.firstBaseUpdate=y,n.lastBaseUpdate=v,i===null&&(n.shared.lanes=0),ol|=u,e.lanes=u,e.memoizedState=S}}function Df(e,t){if(typeof e!="function")throw Error(m(191,e));e.call(t)}function Nf(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)Df(l[e],t)}var ra=o(null),In=o(0);function Rf(e,t){e=Kt,O(In,e),O(ra,t),Kt=e|t.baseLanes}function qu(){O(In,Kt),O(ra,ra.current)}function Yu(){Kt=In.current,T(ra),T(In)}var it=o(null),vt=null;function ul(e){var t=e.alternate;O(ze,ze.current&1),O(it,e),vt===null&&(t===null||ra.current!==null||t.memoizedState!==null)&&(vt=e)}function Lu(e){O(ze,ze.current),O(it,e),vt===null&&(vt=e)}function Hf(e){e.tag===22?(O(ze,ze.current),O(it,e),vt===null&&(vt=e)):cl()}function cl(){O(ze,ze.current),O(it,it.current)}function ut(e){T(it),vt===e&&(vt=null),T(ze)}var ze=o(0);function Pn(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Kc(l)||Jc(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qt=0,X=null,re=null,Ce=null,ei=!1,da=!1,Gl=!1,ti=0,$a=0,ma=null,Bm=0;function Te(){throw Error(m(321))}function Xu(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!at(e[l],t[l]))return!1;return!0}function Qu(e,t,l,a,n,i){return qt=i,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,b.H=e===null||e.memoizedState===null?go:nc,Gl=!1,i=l(a,n),Gl=!1,da&&(i=jf(t,l,a,n)),Uf(e),i}function Uf(e){b.H=en;var t=re!==null&&re.next!==null;if(qt=0,Ce=re=X=null,ei=!1,$a=0,ma=null,t)throw Error(m(300));e===null||De||(e=e.dependencies,e!==null&&kn(e)&&(De=!0))}function jf(e,t,l,a){X=e;var n=0;do{if(da&&(ma=null),$a=0,da=!1,25<=n)throw Error(m(301));if(n+=1,Ce=re=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}b.H=vo,i=t(l,a)}while(da);return i}function Gm(){var e=b.H,t=e.useState()[0];return t=typeof t.then=="function"?Ia(t):t,e=e.useState()[0],(re!==null?re.memoizedState:null)!==e&&(X.flags|=1024),t}function Zu(){var e=ti!==0;return ti=0,e}function ku(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function Vu(e){if(ei){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ei=!1}qt=0,Ce=re=X=null,da=!1,$a=ti=0,ma=null}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?X.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function Oe(){if(re===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=Ce===null?X.memoizedState:Ce.next;if(t!==null)Ce=t,re=e;else{if(e===null)throw X.alternate===null?Error(m(467)):Error(m(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},Ce===null?X.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function li(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ia(e){var t=$a;return $a+=1,ma===null&&(ma=[]),e=Af(ma,e,t),t=X,(Ce===null?t.memoizedState:Ce.next)===null&&(t=t.alternate,b.H=t===null||t.memoizedState===null?go:nc),e}function ai(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ia(e);if(e.$$typeof===ge)return Ge(e)}throw Error(m(438,String(e)))}function Ku(e){var t=null,l=X.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=X.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=li(),X.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=Xl;return t.index++,l}function Yt(e,t){return typeof t=="function"?t(e):t}function ni(e){var t=Oe();return Ju(t,re,e)}function Ju(e,t,l){var a=e.queue;if(a===null)throw Error(m(311));a.lastRenderedReducer=l;var n=e.baseQueue,i=a.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,a.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var c=u=null,s=null,y=t,v=!1;do{var S=y.lane&-536870913;if(S!==y.lane?(ee&S)===S:(qt&S)===S){var p=y.revertLane;if(p===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),S===ca&&(v=!0);else if((qt&p)===p){y=y.next,p===ca&&(v=!0);continue}else S={lane:0,revertLane:y.revertLane,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},s===null?(c=s=S,u=i):s=s.next=S,X.lanes|=p,ol|=p;S=y.action,Gl&&l(i,S),i=y.hasEagerState?y.eagerState:l(i,S)}else p={lane:S,revertLane:y.revertLane,gesture:y.gesture,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},s===null?(c=s=p,u=i):s=s.next=p,X.lanes|=S,ol|=S;y=y.next}while(y!==null&&y!==t);if(s===null?u=i:s.next=c,!at(i,e.memoizedState)&&(De=!0,v&&(l=sa,l!==null)))throw l;e.memoizedState=i,e.baseState=u,e.baseQueue=s,a.lastRenderedState=i}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Wu(e){var t=Oe(),l=t.queue;if(l===null)throw Error(m(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,i=t.memoizedState;if(n!==null){l.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);at(i,t.memoizedState)||(De=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),l.lastRenderedState=i}return[i,a]}function wf(e,t,l){var a=X,n=Oe(),i=le;if(i){if(l===void 0)throw Error(m(407));l=l()}else l=t();var u=!at((re||n).memoizedState,l);if(u&&(n.memoizedState=l,De=!0),n=n.queue,Iu(qf.bind(null,a,n,e),[e]),n.getSnapshot!==t||u||Ce!==null&&Ce.memoizedState.tag&1){if(a.flags|=2048,ha(9,{destroy:void 0},Gf.bind(null,a,n,l,t),null),ye===null)throw Error(m(349));i||(qt&127)!==0||Bf(a,t,l)}return l}function Bf(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=X.updateQueue,t===null?(t=li(),X.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function Gf(e,t,l,a){t.value=l,t.getSnapshot=a,Yf(t)&&Lf(e)}function qf(e,t,l){return l(function(){Yf(t)&&Lf(e)})}function Yf(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!at(e,l)}catch{return!0}}function Lf(e){var t=Cl(e,2);t!==null&&Pe(t,e,2)}function Fu(e){var t=Ze();if(typeof e=="function"){var l=e;if(e=l(),Gl){Ft(!0);try{l()}finally{Ft(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:e},t}function Xf(e,t,l,a){return e.baseState=l,Ju(e,re,typeof a=="function"?a:Yt)}function qm(e,t,l,a,n){if(ci(e))throw Error(m(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};b.T!==null?l(!0):i.isTransition=!1,a(i),l=t.pending,l===null?(i.next=t.pending=i,Qf(t,i)):(i.next=l.next,t.pending=l.next=i)}}function Qf(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var i=b.T,u={};b.T=u;try{var c=l(n,a),s=b.S;s!==null&&s(u,c),Zf(e,t,c)}catch(y){$u(e,t,y)}finally{i!==null&&u.types!==null&&(i.types=u.types),b.T=i}}else try{i=l(n,a),Zf(e,t,i)}catch(y){$u(e,t,y)}}function Zf(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){kf(e,t,a)},function(a){return $u(e,t,a)}):kf(e,t,l)}function kf(e,t,l){t.status="fulfilled",t.value=l,Vf(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,Qf(e,l)))}function $u(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,Vf(t),t=t.next;while(t!==a)}e.action=null}function Vf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Kf(e,t){return t}function Jf(e,t){if(le){var l=ye.formState;if(l!==null){e:{var a=X;if(le){if(ve){t:{for(var n=ve,i=gt;n.nodeType!==8;){if(!i){n=null;break t}if(n=bt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){ve=bt(n.nextSibling),a=n.data==="F!";break e}}tl(a)}a=!1}a&&(t=l[0])}}return l=Ze(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kf,lastRenderedState:t},l.queue=a,l=ho.bind(null,X,a),a.dispatch=l,a=Fu(!1),i=ac.bind(null,X,!1,a.queue),a=Ze(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=qm.bind(null,X,n,i,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function Wf(e){var t=Oe();return Ff(t,re,e)}function Ff(e,t,l){if(t=Ju(e,t,Kf)[0],e=ni(Yt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Ia(t)}catch(u){throw u===fa?Jn:u}else a=t;t=Oe();var n=t.queue,i=n.dispatch;return l!==t.memoizedState&&(X.flags|=2048,ha(9,{destroy:void 0},Ym.bind(null,n,l),null)),[a,i,e]}function Ym(e,t){e.action=t}function $f(e){var t=Oe(),l=re;if(l!==null)return Ff(t,l,e);Oe(),t=t.memoizedState,l=Oe();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function ha(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=X.updateQueue,t===null&&(t=li(),X.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function If(){return Oe().memoizedState}function ii(e,t,l,a){var n=Ze();X.flags|=e,n.memoizedState=ha(1|t,{destroy:void 0},l,a===void 0?null:a)}function ui(e,t,l,a){var n=Oe();a=a===void 0?null:a;var i=n.memoizedState.inst;re!==null&&a!==null&&Xu(a,re.memoizedState.deps)?n.memoizedState=ha(t,i,l,a):(X.flags|=e,n.memoizedState=ha(1|t,i,l,a))}function Pf(e,t){ii(8390656,8,e,t)}function Iu(e,t){ui(2048,8,e,t)}function Lm(e){X.flags|=4;var t=X.updateQueue;if(t===null)t=li(),X.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function eo(e){var t=Oe().memoizedState;return Lm({ref:t,nextImpl:e}),function(){if((ue&2)!==0)throw Error(m(440));return t.impl.apply(void 0,arguments)}}function to(e,t){return ui(4,2,e,t)}function lo(e,t){return ui(4,4,e,t)}function ao(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function no(e,t,l){l=l!=null?l.concat([e]):null,ui(4,4,ao.bind(null,t,e),l)}function Pu(){}function io(e,t){var l=Oe();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&Xu(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function uo(e,t){var l=Oe();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&Xu(t,a[1]))return a[0];if(a=e(),Gl){Ft(!0);try{e()}finally{Ft(!1)}}return l.memoizedState=[a,t],a}function ec(e,t,l){return l===void 0||(qt&1073741824)!==0&&(ee&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=sr(),X.lanes|=e,ol|=e,l)}function co(e,t,l,a){return at(l,t)?l:ra.current!==null?(e=ec(e,l,a),at(e,t)||(De=!0),e):(qt&42)===0||(qt&1073741824)!==0&&(ee&261930)===0?(De=!0,e.memoizedState=l):(e=sr(),X.lanes|=e,ol|=e,t)}function so(e,t,l,a,n){var i=z.p;z.p=i!==0&&8>i?i:8;var u=b.T,c={};b.T=c,ac(e,!1,t,l);try{var s=n(),y=b.S;if(y!==null&&y(c,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var v=wm(s,a);Pa(e,t,v,ft(e))}else Pa(e,t,a,ft(e))}catch(S){Pa(e,t,{then:function(){},status:"rejected",reason:S},ft())}finally{z.p=i,u!==null&&c.types!==null&&(u.types=c.types),b.T=u}}function Xm(){}function tc(e,t,l,a){if(e.tag!==5)throw Error(m(476));var n=fo(e).queue;so(e,n,t,j,l===null?Xm:function(){return oo(e),l(a)})}function fo(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:j},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function oo(e){var t=fo(e);t.next===null&&(t=e.alternate.memoizedState),Pa(e,t.next.queue,{},ft())}function lc(){return Ge(gn)}function ro(){return Oe().memoizedState}function mo(){return Oe().memoizedState}function Qm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=ft();e=nl(l);var a=il(t,e,l);a!==null&&(Pe(a,t,l),Ja(a,t,l)),t={cache:Nu()},e.payload=t;return}t=t.return}}function Zm(e,t,l){var a=ft();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ci(e)?yo(t,l):(l=_u(e,t,l,a),l!==null&&(Pe(l,e,a),po(l,t,a)))}function ho(e,t,l){var a=ft();Pa(e,t,l,a)}function Pa(e,t,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(ci(e))yo(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,c=i(u,l);if(n.hasEagerState=!0,n.eagerState=c,at(c,u))return Ln(e,t,n,0),ye===null&&Yn(),!1}catch{}if(l=_u(e,t,n,a),l!==null)return Pe(l,e,a),po(l,t,a),!0}return!1}function ac(e,t,l,a){if(a={lane:2,revertLane:jc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ci(e)){if(t)throw Error(m(479))}else t=_u(e,l,a,2),t!==null&&Pe(t,e,2)}function ci(e){var t=e.alternate;return e===X||t!==null&&t===X}function yo(e,t){da=ei=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function po(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,bs(e,l)}}var en={readContext:Ge,use:ai,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useLayoutEffect:Te,useInsertionEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useSyncExternalStore:Te,useId:Te,useHostTransitionStatus:Te,useFormState:Te,useActionState:Te,useOptimistic:Te,useMemoCache:Te,useCacheRefresh:Te};en.useEffectEvent=Te;var go={readContext:Ge,use:ai,useCallback:function(e,t){return Ze().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:Pf,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,ii(4194308,4,ao.bind(null,t,e),l)},useLayoutEffect:function(e,t){return ii(4194308,4,e,t)},useInsertionEffect:function(e,t){ii(4,2,e,t)},useMemo:function(e,t){var l=Ze();t=t===void 0?null:t;var a=e();if(Gl){Ft(!0);try{e()}finally{Ft(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=Ze();if(l!==void 0){var n=l(t);if(Gl){Ft(!0);try{l(t)}finally{Ft(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=Zm.bind(null,X,e),[a.memoizedState,e]},useRef:function(e){var t=Ze();return e={current:e},t.memoizedState=e},useState:function(e){e=Fu(e);var t=e.queue,l=ho.bind(null,X,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:Pu,useDeferredValue:function(e,t){var l=Ze();return ec(l,e,t)},useTransition:function(){var e=Fu(!1);return e=so.bind(null,X,e.queue,!0,!1),Ze().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=X,n=Ze();if(le){if(l===void 0)throw Error(m(407));l=l()}else{if(l=t(),ye===null)throw Error(m(349));(ee&127)!==0||Bf(a,t,l)}n.memoizedState=l;var i={value:l,getSnapshot:t};return n.queue=i,Pf(qf.bind(null,a,i,e),[e]),a.flags|=2048,ha(9,{destroy:void 0},Gf.bind(null,a,i,l,t),null),l},useId:function(){var e=Ze(),t=ye.identifierPrefix;if(le){var l=Mt,a=Ot;l=(a&~(1<<32-lt(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=ti++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=Bm++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:lc,useFormState:Jf,useActionState:Jf,useOptimistic:function(e){var t=Ze();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=ac.bind(null,X,!0,l),l.dispatch=t,[e,t]},useMemoCache:Ku,useCacheRefresh:function(){return Ze().memoizedState=Qm.bind(null,X)},useEffectEvent:function(e){var t=Ze(),l={impl:e};return t.memoizedState=l,function(){if((ue&2)!==0)throw Error(m(440));return l.impl.apply(void 0,arguments)}}},nc={readContext:Ge,use:ai,useCallback:io,useContext:Ge,useEffect:Iu,useImperativeHandle:no,useInsertionEffect:to,useLayoutEffect:lo,useMemo:uo,useReducer:ni,useRef:If,useState:function(){return ni(Yt)},useDebugValue:Pu,useDeferredValue:function(e,t){var l=Oe();return co(l,re.memoizedState,e,t)},useTransition:function(){var e=ni(Yt)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:Ia(e),t]},useSyncExternalStore:wf,useId:ro,useHostTransitionStatus:lc,useFormState:Wf,useActionState:Wf,useOptimistic:function(e,t){var l=Oe();return Xf(l,re,e,t)},useMemoCache:Ku,useCacheRefresh:mo};nc.useEffectEvent=eo;var vo={readContext:Ge,use:ai,useCallback:io,useContext:Ge,useEffect:Iu,useImperativeHandle:no,useInsertionEffect:to,useLayoutEffect:lo,useMemo:uo,useReducer:Wu,useRef:If,useState:function(){return Wu(Yt)},useDebugValue:Pu,useDeferredValue:function(e,t){var l=Oe();return re===null?ec(l,e,t):co(l,re.memoizedState,e,t)},useTransition:function(){var e=Wu(Yt)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:Ia(e),t]},useSyncExternalStore:wf,useId:ro,useHostTransitionStatus:lc,useFormState:$f,useActionState:$f,useOptimistic:function(e,t){var l=Oe();return re!==null?Xf(l,re,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:Ku,useCacheRefresh:mo};vo.useEffectEvent=eo;function ic(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:N({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var uc={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=ft(),n=nl(a);n.payload=t,l!=null&&(n.callback=l),t=il(e,n,a),t!==null&&(Pe(t,e,a),Ja(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=ft(),n=nl(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=il(e,n,a),t!==null&&(Pe(t,e,a),Ja(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=ft(),a=nl(l);a.tag=2,t!=null&&(a.callback=t),t=il(e,a,l),t!==null&&(Pe(t,e,l),Ja(t,e,l))}};function bo(e,t,l,a,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,u):t.prototype&&t.prototype.isPureReactComponent?!Ya(l,a)||!Ya(n,i):!0}function _o(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&uc.enqueueReplaceState(t,t.state,null)}function ql(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=N({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}function So(e){qn(e)}function Eo(e){console.error(e)}function To(e){qn(e)}function si(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function xo(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function cc(e,t,l){return l=nl(l),l.tag=3,l.payload={element:null},l.callback=function(){si(e,t)},l}function Ao(e){return e=nl(e),e.tag=3,e}function zo(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;e.payload=function(){return n(i)},e.callback=function(){xo(t,l,a)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){xo(t,l,a),typeof n!="function"&&(rl===null?rl=new Set([this]):rl.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function km(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&ua(t,l,n,!0),l=it.current,l!==null){switch(l.tag){case 31:case 13:return vt===null?_i():l.alternate===null&&xe===0&&(xe=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===Wn?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),Rc(e,a,n)),!1;case 22:return l.flags|=65536,a===Wn?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),Rc(e,a,n)),!1}throw Error(m(435,l.tag))}return Rc(e,a,n),_i(),!1}if(le)return t=it.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==zu&&(e=Error(m(422),{cause:a}),Qa(ht(e,l)))):(a!==zu&&(t=Error(m(423),{cause:a}),Qa(ht(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=ht(a,l),n=cc(e.stateNode,a,n),Bu(e,n),xe!==4&&(xe=2)),!1;var i=Error(m(520),{cause:a});if(i=ht(i,l),fn===null?fn=[i]:fn.push(i),xe!==4&&(xe=2),t===null)return!0;a=ht(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=cc(l.stateNode,a,e),Bu(l,e),!1;case 1:if(t=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(rl===null||!rl.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Ao(n),zo(n,e,l,a),Bu(l,n),!1}l=l.return}while(l!==null);return!1}var sc=Error(m(461)),De=!1;function qe(e,t,l,a){t.child=e===null?Cf(t,null,l,a):Bl(t,e.child,l,a)}function Oo(e,t,l,a,n){l=l.render;var i=t.ref;if("ref"in a){var u={};for(var c in a)c!=="ref"&&(u[c]=a[c])}else u=a;return Hl(t),a=Qu(e,t,l,u,i,n),c=Zu(),e!==null&&!De?(ku(e,t,n),Lt(e,t,n)):(le&&c&&xu(t),t.flags|=1,qe(e,t,a,n),t.child)}function Mo(e,t,l,a,n){if(e===null){var i=l.type;return typeof i=="function"&&!Su(i)&&i.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=i,Co(e,t,i,a,n)):(e=Qn(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!pc(e,n)){var u=i.memoizedProps;if(l=l.compare,l=l!==null?l:Ya,l(u,a)&&e.ref===t.ref)return Lt(e,t,n)}return t.flags|=1,e=jt(i,a),e.ref=t.ref,e.return=t,t.child=e}function Co(e,t,l,a,n){if(e!==null){var i=e.memoizedProps;if(Ya(i,a)&&e.ref===t.ref)if(De=!1,t.pendingProps=a=i,pc(e,n))(e.flags&131072)!==0&&(De=!0);else return t.lanes=e.lanes,Lt(e,t,n)}return fc(e,t,l,a,n)}function Do(e,t,l,a){var n=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,e!==null){for(a=t.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,t.child=null;return No(e,t,i,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Kn(t,i!==null?i.cachePool:null),i!==null?Rf(t,i):qu(),Hf(t);else return a=t.lanes=536870912,No(e,t,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(Kn(t,i.cachePool),Rf(t,i),cl(),t.memoizedState=null):(e!==null&&Kn(t,null),qu(),cl());return qe(e,t,n,l),t.child}function tn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function No(e,t,l,a,n){var i=Hu();return i=i===null?null:{parent:Me._currentValue,pool:i},t.memoizedState={baseLanes:l,cachePool:i},e!==null&&Kn(t,null),qu(),Hf(t),e!==null&&ua(e,t,a,!0),t.childLanes=n,null}function fi(e,t){return t=ri({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ro(e,t,l){return Bl(t,e.child,null,l),e=fi(t,t.pendingProps),e.flags|=2,ut(t),t.memoizedState=null,e}function Vm(e,t,l){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(le){if(a.mode==="hidden")return e=fi(t,a),t.lanes=536870912,tn(null,e);if(Lu(t),(e=ve)?(e=Zr(e,gt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pt!==null?{id:Ot,overflow:Mt}:null,retryLane:536870912,hydrationErrors:null},l=hf(e),l.return=t,t.child=l,Be=t,ve=null)):e=null,e===null)throw tl(t);return t.lanes=536870912,null}return fi(t,a)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(Lu(t),n)if(t.flags&256)t.flags&=-257,t=Ro(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(m(558));else if(De||ua(e,t,l,!1),n=(l&e.childLanes)!==0,De||n){if(a=ye,a!==null&&(u=_s(a,l),u!==0&&u!==i.retryLane))throw i.retryLane=u,Cl(e,u),Pe(a,e,u),sc;_i(),t=Ro(e,t,l)}else e=i.treeContext,ve=bt(u.nextSibling),Be=t,le=!0,el=null,gt=!1,e!==null&&gf(t,e),t=fi(t,a),t.flags|=4096;return t}return e=jt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function oi(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(m(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function fc(e,t,l,a,n){return Hl(t),l=Qu(e,t,l,a,void 0,n),a=Zu(),e!==null&&!De?(ku(e,t,n),Lt(e,t,n)):(le&&a&&xu(t),t.flags|=1,qe(e,t,l,n),t.child)}function Ho(e,t,l,a,n,i){return Hl(t),t.updateQueue=null,l=jf(t,a,l,n),Uf(e),a=Zu(),e!==null&&!De?(ku(e,t,i),Lt(e,t,i)):(le&&a&&xu(t),t.flags|=1,qe(e,t,l,i),t.child)}function Uo(e,t,l,a,n){if(Hl(t),t.stateNode===null){var i=la,u=l.contextType;typeof u=="object"&&u!==null&&(i=Ge(u)),i=new l(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=uc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},ju(t),u=l.contextType,i.context=typeof u=="object"&&u!==null?Ge(u):la,i.state=t.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(ic(t,l,u,a),i.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&uc.enqueueReplaceState(i,i.state,null),Fa(t,a,i,n),Wa(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var c=t.memoizedProps,s=ql(l,c);i.props=s;var y=i.context,v=l.contextType;u=la,typeof v=="object"&&v!==null&&(u=Ge(v));var S=l.getDerivedStateFromProps;v=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,v||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||y!==u)&&_o(t,i,a,u),al=!1;var p=t.memoizedState;i.state=p,Fa(t,a,i,n),Wa(),y=t.memoizedState,c||p!==y||al?(typeof S=="function"&&(ic(t,l,S,a),y=t.memoizedState),(s=al||bo(t,l,s,a,p,y,u))?(v||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=y),i.props=a,i.state=y,i.context=u,a=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,wu(e,t),u=t.memoizedProps,v=ql(l,u),i.props=v,S=t.pendingProps,p=i.context,y=l.contextType,s=la,typeof y=="object"&&y!==null&&(s=Ge(y)),c=l.getDerivedStateFromProps,(y=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==S||p!==s)&&_o(t,i,a,s),al=!1,p=t.memoizedState,i.state=p,Fa(t,a,i,n),Wa();var g=t.memoizedState;u!==S||p!==g||al||e!==null&&e.dependencies!==null&&kn(e.dependencies)?(typeof c=="function"&&(ic(t,l,c,a),g=t.memoizedState),(v=al||bo(t,l,v,a,p,g,s)||e!==null&&e.dependencies!==null&&kn(e.dependencies))?(y||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,g,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,g,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=g),i.props=a,i.state=g,i.context=s,a=v):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,oi(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=Bl(t,e.child,null,n),t.child=Bl(t,null,l,n)):qe(e,t,l,n),t.memoizedState=i.state,e=t.child):e=Lt(e,t,n),e}function jo(e,t,l,a){return Nl(),t.flags|=256,qe(e,t,l,a),t.child}var oc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rc(e){return{baseLanes:e,cachePool:Tf()}}function dc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=st),e}function wo(e,t,l){var a=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(ze.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(le){if(n?ul(t):cl(),(e=ve)?(e=Zr(e,gt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pt!==null?{id:Ot,overflow:Mt}:null,retryLane:536870912,hydrationErrors:null},l=hf(e),l.return=t,t.child=l,Be=t,ve=null)):e=null,e===null)throw tl(t);return Jc(e)?t.lanes=32:t.lanes=536870912,null}var c=a.children;return a=a.fallback,n?(cl(),n=t.mode,c=ri({mode:"hidden",children:c},n),a=Dl(a,n,l,null),c.return=t,a.return=t,c.sibling=a,t.child=c,a=t.child,a.memoizedState=rc(l),a.childLanes=dc(e,u,l),t.memoizedState=oc,tn(null,a)):(ul(t),mc(t,c))}var s=e.memoizedState;if(s!==null&&(c=s.dehydrated,c!==null)){if(i)t.flags&256?(ul(t),t.flags&=-257,t=hc(e,t,l)):t.memoizedState!==null?(cl(),t.child=e.child,t.flags|=128,t=null):(cl(),c=a.fallback,n=t.mode,a=ri({mode:"visible",children:a.children},n),c=Dl(c,n,l,null),c.flags|=2,a.return=t,c.return=t,a.sibling=c,t.child=a,Bl(t,e.child,null,l),a=t.child,a.memoizedState=rc(l),a.childLanes=dc(e,u,l),t.memoizedState=oc,t=tn(null,a));else if(ul(t),Jc(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var y=u.dgst;u=y,a=Error(m(419)),a.stack="",a.digest=u,Qa({value:a,source:null,stack:null}),t=hc(e,t,l)}else if(De||ua(e,t,l,!1),u=(l&e.childLanes)!==0,De||u){if(u=ye,u!==null&&(a=_s(u,l),a!==0&&a!==s.retryLane))throw s.retryLane=a,Cl(e,a),Pe(u,e,a),sc;Kc(c)||_i(),t=hc(e,t,l)}else Kc(c)?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,ve=bt(c.nextSibling),Be=t,le=!0,el=null,gt=!1,e!==null&&gf(t,e),t=mc(t,a.children),t.flags|=4096);return t}return n?(cl(),c=a.fallback,n=t.mode,s=e.child,y=s.sibling,a=jt(s,{mode:"hidden",children:a.children}),a.subtreeFlags=s.subtreeFlags&65011712,y!==null?c=jt(y,c):(c=Dl(c,n,l,null),c.flags|=2),c.return=t,a.return=t,a.sibling=c,t.child=a,tn(null,a),a=t.child,c=e.child.memoizedState,c===null?c=rc(l):(n=c.cachePool,n!==null?(s=Me._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=Tf(),c={baseLanes:c.baseLanes|l,cachePool:n}),a.memoizedState=c,a.childLanes=dc(e,u,l),t.memoizedState=oc,tn(e.child,a)):(ul(t),l=e.child,e=l.sibling,l=jt(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=l,t.memoizedState=null,l)}function mc(e,t){return t=ri({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ri(e,t){return e=nt(22,e,null,t),e.lanes=0,e}function hc(e,t,l){return Bl(t,e.child,null,l),e=mc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bo(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Cu(e.return,t,l)}function yc(e,t,l,a,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=n,u.treeForkCount=i)}function Go(e,t,l){var a=t.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var u=ze.current,c=(u&2)!==0;if(c?(u=u&1|2,t.flags|=128):u&=1,O(ze,u),qe(e,t,a,l),a=le?Xa:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bo(e,l,t);else if(e.tag===19)Bo(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&Pn(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),yc(t,!1,n,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Pn(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}yc(t,!0,l,null,i,a);break;case"together":yc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Lt(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),ol|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(ua(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(m(153));if(t.child!==null){for(e=t.child,l=jt(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=jt(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function pc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&kn(e)))}function Km(e,t,l){switch(t.tag){case 3:Qe(t,t.stateNode.containerInfo),ll(t,Me,e.memoizedState.cache),Nl();break;case 27:case 5:Oa(t);break;case 4:Qe(t,t.stateNode.containerInfo);break;case 10:ll(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Lu(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(ul(t),t.flags|=128,null):(l&t.child.childLanes)!==0?wo(e,t,l):(ul(t),e=Lt(e,t,l),e!==null?e.sibling:null);ul(t);break;case 19:var n=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(ua(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return Go(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),O(ze,ze.current),a)break;return null;case 22:return t.lanes=0,Do(e,t,l,t.pendingProps);case 24:ll(t,Me,e.memoizedState.cache)}return Lt(e,t,l)}function qo(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)De=!0;else{if(!pc(e,l)&&(t.flags&128)===0)return De=!1,Km(e,t,l);De=(e.flags&131072)!==0}else De=!1,le&&(t.flags&1048576)!==0&&pf(t,Xa,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=jl(t.elementType),t.type=e,typeof e=="function")Su(e)?(a=ql(e,a),t.tag=1,t=Uo(null,t,e,a,l)):(t.tag=0,t=fc(null,t,e,a,l));else{if(e!=null){var n=e.$$typeof;if(n===Xe){t.tag=11,t=Oo(null,t,e,a,l);break e}else if(n===V){t.tag=14,t=Mo(null,t,e,a,l);break e}}throw t=Nt(e)||e,Error(m(306,t,""))}}return t;case 0:return fc(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=ql(a,t.pendingProps),Uo(e,t,a,n,l);case 3:e:{if(Qe(t,t.stateNode.containerInfo),e===null)throw Error(m(387));a=t.pendingProps;var i=t.memoizedState;n=i.element,wu(e,t),Fa(t,a,null,l);var u=t.memoizedState;if(a=u.cache,ll(t,Me,a),a!==i.cache&&Du(t,[Me],l,!0),Wa(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=jo(e,t,a,l);break e}else if(a!==n){n=ht(Error(m(424)),t),Qa(n),t=jo(e,t,a,l);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ve=bt(e.firstChild),Be=t,le=!0,el=null,gt=!0,l=Cf(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Nl(),a===n){t=Lt(e,t,l);break e}qe(e,t,a,l)}t=t.child}return t;case 26:return oi(e,t),e===null?(l=Fr(t.type,null,t.pendingProps,null))?t.memoizedState=l:le||(l=t.type,e=t.pendingProps,a=Oi($.current).createElement(l),a[we]=t,a[Ke]=e,Ye(a,l,e),He(a),t.stateNode=a):t.memoizedState=Fr(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Oa(t),e===null&&le&&(a=t.stateNode=Kr(t.type,t.pendingProps,$.current),Be=t,gt=!0,n=ve,yl(t.type)?(Wc=n,ve=bt(a.firstChild)):ve=n),qe(e,t,t.pendingProps.children,l),oi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&le&&((n=a=ve)&&(a=Th(a,t.type,t.pendingProps,gt),a!==null?(t.stateNode=a,Be=t,ve=bt(a.firstChild),gt=!1,n=!0):n=!1),n||tl(t)),Oa(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,a=i.children,Zc(n,i)?a=null:u!==null&&Zc(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=Qu(e,t,Gm,null,null,l),gn._currentValue=n),oi(e,t),qe(e,t,a,l),t.child;case 6:return e===null&&le&&((e=l=ve)&&(l=xh(l,t.pendingProps,gt),l!==null?(t.stateNode=l,Be=t,ve=null,e=!0):e=!1),e||tl(t)),null;case 13:return wo(e,t,l);case 4:return Qe(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Bl(t,null,a,l):qe(e,t,a,l),t.child;case 11:return Oo(e,t,t.type,t.pendingProps,l);case 7:return qe(e,t,t.pendingProps,l),t.child;case 8:return qe(e,t,t.pendingProps.children,l),t.child;case 12:return qe(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,ll(t,t.type,a.value),qe(e,t,a.children,l),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,Hl(t),n=Ge(n),a=a(n),t.flags|=1,qe(e,t,a,l),t.child;case 14:return Mo(e,t,t.type,t.pendingProps,l);case 15:return Co(e,t,t.type,t.pendingProps,l);case 19:return Go(e,t,l);case 31:return Vm(e,t,l);case 22:return Do(e,t,l,t.pendingProps);case 24:return Hl(t),a=Ge(Me),e===null?(n=Hu(),n===null&&(n=ye,i=Nu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),t.memoizedState={parent:a,cache:n},ju(t),ll(t,Me,n)):((e.lanes&l)!==0&&(wu(e,t),Fa(t,null,null,l),Wa()),n=e.memoizedState,i=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ll(t,Me,a)):(a=i.cache,ll(t,Me,a),a!==n.cache&&Du(t,[Me],l,!0))),qe(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(m(156,t.tag))}function Xt(e){e.flags|=4}function gc(e,t,l,a,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(dr())e.flags|=8192;else throw wl=Wn,Uu}else e.flags&=-16777217}function Yo(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!td(t))if(dr())e.flags|=8192;else throw wl=Wn,Uu}function di(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?gs():536870912,e.lanes|=t,va|=t)}function ln(e,t){if(!le)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function Jm(e,t,l){var a=t.pendingProps;switch(Au(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return be(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Gt(Me),Ae(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(ia(t)?Xt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ou())),be(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(Xt(t),i!==null?(be(t),Yo(t,i)):(be(t),gc(t,n,null,a,l))):i?i!==e.memoizedState?(Xt(t),be(t),Yo(t,i)):(be(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Xt(t),be(t),gc(t,n,e,a,l)),null;case 27:if(Tn(t),l=$.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Xt(t);else{if(!a){if(t.stateNode===null)throw Error(m(166));return be(t),null}e=C.current,ia(t)?vf(t):(e=Kr(n,a,l),t.stateNode=e,Xt(t))}return be(t),null;case 5:if(Tn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Xt(t);else{if(!a){if(t.stateNode===null)throw Error(m(166));return be(t),null}if(i=C.current,ia(t))vf(t);else{var u=Oi($.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?u.createElement(n,{is:a.is}):u.createElement(n)}}i[we]=t,i[Ke]=a;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(Ye(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Xt(t)}}return be(t),gc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Xt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(m(166));if(e=$.current,ia(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=Be,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[we]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||wr(e.nodeValue,l)),e||tl(t,!0)}else e=Oi(e).createTextNode(a),e[we]=t,t.stateNode=e}return be(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=ia(t),l!==null){if(e===null){if(!a)throw Error(m(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(557));e[we]=t}else Nl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;be(t),e=!1}else l=Ou(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(ut(t),t):(ut(t),null);if((t.flags&128)!==0)throw Error(m(558))}return be(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ia(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(m(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(m(317));n[we]=t}else Nl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;be(t),n=!1}else n=Ou(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(ut(t),t):(ut(t),null)}return ut(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),di(t,t.updateQueue),be(t),null);case 4:return Ae(),e===null&&qc(t.stateNode.containerInfo),be(t),null;case 10:return Gt(t.type),be(t),null;case 19:if(T(ze),a=t.memoizedState,a===null)return be(t),null;if(n=(t.flags&128)!==0,i=a.rendering,i===null)if(n)ln(a,!1);else{if(xe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Pn(e),i!==null){for(t.flags|=128,ln(a,!1),e=i.updateQueue,t.updateQueue=e,di(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)mf(l,e),l=l.sibling;return O(ze,ze.current&1|2),le&&wt(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&et()>gi&&(t.flags|=128,n=!0,ln(a,!1),t.lanes=4194304)}else{if(!n)if(e=Pn(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,di(t,e),ln(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!le)return be(t),null}else 2*et()-a.renderingStartTime>gi&&l!==536870912&&(t.flags|=128,n=!0,ln(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=et(),e.sibling=null,l=ze.current,O(ze,n?l&1|2:l&1),le&&wt(t,a.treeForkCount),e):(be(t),null);case 22:case 23:return ut(t),Yu(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),l=t.updateQueue,l!==null&&di(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&T(Ul),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Gt(Me),be(t),null;case 25:return null;case 30:return null}throw Error(m(156,t.tag))}function Wm(e,t){switch(Au(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gt(Me),Ae(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Tn(t),null;case 31:if(t.memoizedState!==null){if(ut(t),t.alternate===null)throw Error(m(340));Nl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ut(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(m(340));Nl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return T(ze),null;case 4:return Ae(),null;case 10:return Gt(t.type),null;case 22:case 23:return ut(t),Yu(),e!==null&&T(Ul),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Gt(Me),null;case 25:return null;default:return null}}function Lo(e,t){switch(Au(t),t.tag){case 3:Gt(Me),Ae();break;case 26:case 27:case 5:Tn(t);break;case 4:Ae();break;case 31:t.memoizedState!==null&&ut(t);break;case 13:ut(t);break;case 19:T(ze);break;case 10:Gt(t.type);break;case 22:case 23:ut(t),Yu(),e!==null&&T(Ul);break;case 24:Gt(Me)}}function an(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var i=l.create,u=l.inst;a=i(),u.destroy=a}l=l.next}while(l!==n)}}catch(c){fe(t,t.return,c)}}function sl(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){var u=a.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,n=t;var s=l,y=c;try{y()}catch(v){fe(n,s,v)}}}a=a.next}while(a!==i)}}catch(v){fe(t,t.return,v)}}function Xo(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{Nf(t,l)}catch(a){fe(e,e.return,a)}}}function Qo(e,t,l){l.props=ql(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){fe(e,t,a)}}function nn(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(n){fe(e,t,n)}}function Ct(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){fe(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){fe(e,t,n)}else l.current=null}function Zo(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){fe(e,e.return,n)}}function vc(e,t,l){try{var a=e.stateNode;gh(a,e.type,l,t),a[Ke]=t}catch(n){fe(e,e.return,n)}}function ko(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&yl(e.type)||e.tag===4}function bc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ko(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&yl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _c(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Ht));else if(a!==4&&(a===27&&yl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(_c(e,t,l),e=e.sibling;e!==null;)_c(e,t,l),e=e.sibling}function mi(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&yl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(mi(e,t,l),e=e.sibling;e!==null;)mi(e,t,l),e=e.sibling}function Vo(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ye(t,a,l),t[we]=e,t[Ke]=l}catch(i){fe(e,e.return,i)}}var Qt=!1,Ne=!1,Sc=!1,Ko=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function Fm(e,t){if(e=e.containerInfo,Xc=Ui,e=af(e),hu(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break e}var u=0,c=-1,s=-1,y=0,v=0,S=e,p=null;t:for(;;){for(var g;S!==l||n!==0&&S.nodeType!==3||(c=u+n),S!==i||a!==0&&S.nodeType!==3||(s=u+a),S.nodeType===3&&(u+=S.nodeValue.length),(g=S.firstChild)!==null;)p=S,S=g;for(;;){if(S===e)break t;if(p===l&&++y===n&&(c=u),p===i&&++v===a&&(s=u),(g=S.nextSibling)!==null)break;S=p,p=S.parentNode}S=g}l=c===-1||s===-1?null:{start:c,end:s}}else l=null}l=l||{start:0,end:0}}else l=null;for(Qc={focusedElem:e,selectionRange:l},Ui=!1,Ue=t;Ue!==null;)if(t=Ue,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ue=e;else for(;Ue!==null;){switch(t=Ue,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)n=e[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,l=t,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var M=ql(l.type,n);e=a.getSnapshotBeforeUpdate(M,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(U){fe(l,l.return,U)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)Vc(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(m(163))}if(e=t.sibling,e!==null){e.return=t.return,Ue=e;break}Ue=t.return}}function Jo(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:kt(e,l),a&4&&an(5,l);break;case 1:if(kt(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(u){fe(l,l.return,u)}else{var n=ql(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){fe(l,l.return,u)}}a&64&&Xo(l),a&512&&nn(l,l.return);break;case 3:if(kt(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{Nf(e,t)}catch(u){fe(l,l.return,u)}}break;case 27:t===null&&a&4&&Vo(l);case 26:case 5:kt(e,l),t===null&&a&4&&Zo(l),a&512&&nn(l,l.return);break;case 12:kt(e,l);break;case 31:kt(e,l),a&4&&$o(e,l);break;case 13:kt(e,l),a&4&&Io(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=ih.bind(null,l),Ah(e,l))));break;case 22:if(a=l.memoizedState!==null||Qt,!a){t=t!==null&&t.memoizedState!==null||Ne,n=Qt;var i=Ne;Qt=a,(Ne=t)&&!i?Vt(e,l,(l.subtreeFlags&8772)!==0):kt(e,l),Qt=n,Ne=i}break;case 30:break;default:kt(e,l)}}function Wo(e){var t=e.alternate;t!==null&&(e.alternate=null,Wo(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&$i(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ee=null,We=!1;function Zt(e,t,l){for(l=l.child;l!==null;)Fo(e,t,l),l=l.sibling}function Fo(e,t,l){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(Ma,l)}catch{}switch(l.tag){case 26:Ne||Ct(l,t),Zt(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Ne||Ct(l,t);var a=Ee,n=We;yl(l.type)&&(Ee=l.stateNode,We=!1),Zt(e,t,l),hn(l.stateNode),Ee=a,We=n;break;case 5:Ne||Ct(l,t);case 6:if(a=Ee,n=We,Ee=null,Zt(e,t,l),Ee=a,We=n,Ee!==null)if(We)try{(Ee.nodeType===9?Ee.body:Ee.nodeName==="HTML"?Ee.ownerDocument.body:Ee).removeChild(l.stateNode)}catch(i){fe(l,t,i)}else try{Ee.removeChild(l.stateNode)}catch(i){fe(l,t,i)}break;case 18:Ee!==null&&(We?(e=Ee,Xr(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),za(e)):Xr(Ee,l.stateNode));break;case 4:a=Ee,n=We,Ee=l.stateNode.containerInfo,We=!0,Zt(e,t,l),Ee=a,We=n;break;case 0:case 11:case 14:case 15:sl(2,l,t),Ne||sl(4,l,t),Zt(e,t,l);break;case 1:Ne||(Ct(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Qo(l,t,a)),Zt(e,t,l);break;case 21:Zt(e,t,l);break;case 22:Ne=(a=Ne)||l.memoizedState!==null,Zt(e,t,l),Ne=a;break;default:Zt(e,t,l)}}function $o(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{za(e)}catch(l){fe(t,t.return,l)}}}function Io(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{za(e)}catch(l){fe(t,t.return,l)}}function $m(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ko),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ko),t;default:throw Error(m(435,e.tag))}}function hi(e,t){var l=$m(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var n=uh.bind(null,e,a);a.then(n,n)}})}function Fe(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=e,u=t,c=u;e:for(;c!==null;){switch(c.tag){case 27:if(yl(c.type)){Ee=c.stateNode,We=!1;break e}break;case 5:Ee=c.stateNode,We=!1;break e;case 3:case 4:Ee=c.stateNode.containerInfo,We=!0;break e}c=c.return}if(Ee===null)throw Error(m(160));Fo(i,u,n),Ee=null,We=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Po(t,e),t=t.sibling}var Tt=null;function Po(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Fe(t,e),$e(e),a&4&&(sl(3,e,e.return),an(3,e),sl(5,e,e.return));break;case 1:Fe(t,e),$e(e),a&512&&(Ne||l===null||Ct(l,l.return)),a&64&&Qt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=Tt;if(Fe(t,e),$e(e),a&512&&(Ne||l===null||Ct(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Na]||i[we]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),Ye(i,a,l),i[we]=e,He(i),a=i;break e;case"link":var u=Pr("link","href",n).get(a+(l.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(c,1);break t}}i=n.createElement(a),Ye(i,a,l),n.head.appendChild(i);break;case"meta":if(u=Pr("meta","content",n).get(a+(l.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(c,1);break t}}i=n.createElement(a),Ye(i,a,l),n.head.appendChild(i);break;default:throw Error(m(468,a))}i[we]=e,He(i),a=i}e.stateNode=a}else ed(n,e.type,e.stateNode);else e.stateNode=Ir(n,a,e.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?ed(n,e.type,e.stateNode):Ir(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&vc(e,e.memoizedProps,l.memoizedProps)}break;case 27:Fe(t,e),$e(e),a&512&&(Ne||l===null||Ct(l,l.return)),l!==null&&a&4&&vc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(Fe(t,e),$e(e),a&512&&(Ne||l===null||Ct(l,l.return)),e.flags&32){n=e.stateNode;try{Wl(n,"")}catch(M){fe(e,e.return,M)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,vc(e,n,l!==null?l.memoizedProps:n)),a&1024&&(Sc=!0);break;case 6:if(Fe(t,e),$e(e),a&4){if(e.stateNode===null)throw Error(m(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(M){fe(e,e.return,M)}}break;case 3:if(Di=null,n=Tt,Tt=Mi(t.containerInfo),Fe(t,e),Tt=n,$e(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{za(t.containerInfo)}catch(M){fe(e,e.return,M)}Sc&&(Sc=!1,er(e));break;case 4:a=Tt,Tt=Mi(e.stateNode.containerInfo),Fe(t,e),$e(e),Tt=a;break;case 12:Fe(t,e),$e(e);break;case 31:Fe(t,e),$e(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,hi(e,a)));break;case 13:Fe(t,e),$e(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(pi=et()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,hi(e,a)));break;case 22:n=e.memoizedState!==null;var s=l!==null&&l.memoizedState!==null,y=Qt,v=Ne;if(Qt=y||n,Ne=v||s,Fe(t,e),Ne=v,Qt=y,$e(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||s||Qt||Ne||Yl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){s=l=t;try{if(i=s.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=s.stateNode;var S=s.memoizedProps.style,p=S!=null&&S.hasOwnProperty("display")?S.display:null;c.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(M){fe(s,s.return,M)}}}else if(t.tag===6){if(l===null){s=t;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(M){fe(s,s.return,M)}}}else if(t.tag===18){if(l===null){s=t;try{var g=s.stateNode;n?Qr(g,!0):Qr(s.stateNode,!1)}catch(M){fe(s,s.return,M)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,hi(e,l))));break;case 19:Fe(t,e),$e(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,hi(e,a)));break;case 30:break;case 21:break;default:Fe(t,e),$e(e)}}function $e(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(ko(a)){l=a;break}a=a.return}if(l==null)throw Error(m(160));switch(l.tag){case 27:var n=l.stateNode,i=bc(e);mi(e,i,n);break;case 5:var u=l.stateNode;l.flags&32&&(Wl(u,""),l.flags&=-33);var c=bc(e);mi(e,c,u);break;case 3:case 4:var s=l.stateNode.containerInfo,y=bc(e);_c(e,y,s);break;default:throw Error(m(161))}}catch(v){fe(e,e.return,v)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function er(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;er(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function kt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Jo(e,t.alternate,t),t=t.sibling}function Yl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:sl(4,t,t.return),Yl(t);break;case 1:Ct(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Qo(t,t.return,l),Yl(t);break;case 27:hn(t.stateNode);case 26:case 5:Ct(t,t.return),Yl(t);break;case 22:t.memoizedState===null&&Yl(t);break;case 30:Yl(t);break;default:Yl(t)}e=e.sibling}}function Vt(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:Vt(n,i,l),an(4,i);break;case 1:if(Vt(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(y){fe(a,a.return,y)}if(a=i,n=a.updateQueue,n!==null){var c=a.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)Df(s[n],c)}catch(y){fe(a,a.return,y)}}l&&u&64&&Xo(i),nn(i,i.return);break;case 27:Vo(i);case 26:case 5:Vt(n,i,l),l&&a===null&&u&4&&Zo(i),nn(i,i.return);break;case 12:Vt(n,i,l);break;case 31:Vt(n,i,l),l&&u&4&&$o(n,i);break;case 13:Vt(n,i,l),l&&u&4&&Io(n,i);break;case 22:i.memoizedState===null&&Vt(n,i,l),nn(i,i.return);break;case 30:break;default:Vt(n,i,l)}t=t.sibling}}function Ec(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&Za(l))}function Tc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Za(e))}function xt(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)tr(e,t,l,a),t=t.sibling}function tr(e,t,l,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:xt(e,t,l,a),n&2048&&an(9,t);break;case 1:xt(e,t,l,a);break;case 3:xt(e,t,l,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Za(e)));break;case 12:if(n&2048){xt(e,t,l,a),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(s){fe(t,t.return,s)}}else xt(e,t,l,a);break;case 31:xt(e,t,l,a);break;case 13:xt(e,t,l,a);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?xt(e,t,l,a):un(e,t):i._visibility&2?xt(e,t,l,a):(i._visibility|=2,ya(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Ec(u,t);break;case 24:xt(e,t,l,a),n&2048&&Tc(t.alternate,t);break;default:xt(e,t,l,a)}}function ya(e,t,l,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,c=l,s=a,y=u.flags;switch(u.tag){case 0:case 11:case 15:ya(i,u,c,s,n),an(8,u);break;case 23:break;case 22:var v=u.stateNode;u.memoizedState!==null?v._visibility&2?ya(i,u,c,s,n):un(i,u):(v._visibility|=2,ya(i,u,c,s,n)),n&&y&2048&&Ec(u.alternate,u);break;case 24:ya(i,u,c,s,n),n&&y&2048&&Tc(u.alternate,u);break;default:ya(i,u,c,s,n)}t=t.sibling}}function un(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:un(l,a),n&2048&&Ec(a.alternate,a);break;case 24:un(l,a),n&2048&&Tc(a.alternate,a);break;default:un(l,a)}t=t.sibling}}var cn=8192;function pa(e,t,l){if(e.subtreeFlags&cn)for(e=e.child;e!==null;)lr(e,t,l),e=e.sibling}function lr(e,t,l){switch(e.tag){case 26:pa(e,t,l),e.flags&cn&&e.memoizedState!==null&&Bh(l,Tt,e.memoizedState,e.memoizedProps);break;case 5:pa(e,t,l);break;case 3:case 4:var a=Tt;Tt=Mi(e.stateNode.containerInfo),pa(e,t,l),Tt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=cn,cn=16777216,pa(e,t,l),cn=a):pa(e,t,l));break;default:pa(e,t,l)}}function ar(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function sn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Ue=a,ir(a,e)}ar(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)nr(e),e=e.sibling}function nr(e){switch(e.tag){case 0:case 11:case 15:sn(e),e.flags&2048&&sl(9,e,e.return);break;case 3:sn(e);break;case 12:sn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,yi(e)):sn(e);break;default:sn(e)}}function yi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Ue=a,ir(a,e)}ar(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:sl(8,t,t.return),yi(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,yi(t));break;default:yi(t)}e=e.sibling}}function ir(e,t){for(;Ue!==null;){var l=Ue;switch(l.tag){case 0:case 11:case 15:sl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Za(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Ue=a;else e:for(l=e;Ue!==null;){a=Ue;var n=a.sibling,i=a.return;if(Wo(a),a===l){Ue=null;break e}if(n!==null){n.return=i,Ue=n;break e}Ue=i}}}var Im={getCacheForType:function(e){var t=Ge(Me),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return Ge(Me).controller.signal}},Pm=typeof WeakMap=="function"?WeakMap:Map,ue=0,ye=null,I=null,ee=0,se=0,ct=null,fl=!1,ga=!1,xc=!1,Kt=0,xe=0,ol=0,Ll=0,Ac=0,st=0,va=0,fn=null,Ie=null,zc=!1,pi=0,ur=0,gi=1/0,vi=null,rl=null,Re=0,dl=null,ba=null,Jt=0,Oc=0,Mc=null,cr=null,on=0,Cc=null;function ft(){return(ue&2)!==0&&ee!==0?ee&-ee:b.T!==null?jc():Ss()}function sr(){if(st===0)if((ee&536870912)===0||le){var e=zn;zn<<=1,(zn&3932160)===0&&(zn=262144),st=e}else st=536870912;return e=it.current,e!==null&&(e.flags|=32),st}function Pe(e,t,l){(e===ye&&(se===2||se===9)||e.cancelPendingCommit!==null)&&(_a(e,0),ml(e,ee,st,!1)),Da(e,l),((ue&2)===0||e!==ye)&&(e===ye&&((ue&2)===0&&(Ll|=l),xe===4&&ml(e,ee,st,!1)),Dt(e))}function fr(e,t,l){if((ue&6)!==0)throw Error(m(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||Ca(e,t),n=a?lh(e,t):Nc(e,t,!0),i=a;do{if(n===0){ga&&!a&&ml(e,t,0,!1);break}else{if(l=e.current.alternate,i&&!eh(l)){n=Nc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var c=e;n=fn;var s=c.current.memoizedState.isDehydrated;if(s&&(_a(c,u).flags|=256),u=Nc(c,u,!1),u!==2){if(xc&&!s){c.errorRecoveryDisabledLanes|=i,Ll|=i,n=4;break e}i=Ie,Ie=n,i!==null&&(Ie===null?Ie=i:Ie.push.apply(Ie,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){_a(e,0),ml(e,t,0,!0);break}e:{switch(a=e,i=n,i){case 0:case 1:throw Error(m(345));case 4:if((t&4194048)!==t)break;case 6:ml(a,t,st,!fl);break e;case 2:Ie=null;break;case 3:case 5:break;default:throw Error(m(329))}if((t&62914560)===t&&(n=pi+300-et(),10<n)){if(ml(a,t,st,!fl),Mn(a,0,!0)!==0)break e;Jt=t,a.timeoutHandle=Yr(or.bind(null,a,l,Ie,vi,zc,t,st,Ll,va,fl,i,"Throttled",-0,0),n);break e}or(a,l,Ie,vi,zc,t,st,Ll,va,fl,i,null,-0,0)}}break}while(!0);Dt(e)}function or(e,t,l,a,n,i,u,c,s,y,v,S,p,g){if(e.timeoutHandle=-1,S=t.subtreeFlags,S&8192||(S&16785408)===16785408){S={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ht},lr(t,i,S);var M=(i&62914560)===i?pi-et():(i&4194048)===i?ur-et():0;if(M=Gh(S,M),M!==null){Jt=i,e.cancelPendingCommit=M(vr.bind(null,e,t,i,l,a,n,u,c,s,v,S,null,p,g)),ml(e,i,u,!y);return}}vr(e,t,i,l,a,n,u,c,s)}function eh(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!at(i(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ml(e,t,l,a){t&=~Ac,t&=~Ll,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var i=31-lt(n),u=1<<i;a[i]=-1,n&=~u}l!==0&&vs(e,l,t)}function bi(){return(ue&6)===0?(rn(0),!1):!0}function Dc(){if(I!==null){if(se===0)var e=I.return;else e=I,Bt=Rl=null,Vu(e),oa=null,Va=0,e=I;for(;e!==null;)Lo(e.alternate,e),e=e.return;I=null}}function _a(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,_h(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),Jt=0,Dc(),ye=e,I=l=jt(e.current,null),ee=t,se=0,ct=null,fl=!1,ga=Ca(e,t),xc=!1,va=st=Ac=Ll=ol=xe=0,Ie=fn=null,zc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-lt(a),i=1<<n;t|=e[n],a&=~i}return Kt=t,Yn(),l}function rr(e,t){X=null,b.H=en,t===fa||t===Jn?(t=zf(),se=3):t===Uu?(t=zf(),se=4):se=t===sc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ct=t,I===null&&(xe=1,si(e,ht(t,e.current)))}function dr(){var e=it.current;return e===null?!0:(ee&4194048)===ee?vt===null:(ee&62914560)===ee||(ee&536870912)!==0?e===vt:!1}function mr(){var e=b.H;return b.H=en,e===null?en:e}function hr(){var e=b.A;return b.A=Im,e}function _i(){xe=4,fl||(ee&4194048)!==ee&&it.current!==null||(ga=!0),(ol&134217727)===0&&(Ll&134217727)===0||ye===null||ml(ye,ee,st,!1)}function Nc(e,t,l){var a=ue;ue|=2;var n=mr(),i=hr();(ye!==e||ee!==t)&&(vi=null,_a(e,t)),t=!1;var u=xe;e:do try{if(se!==0&&I!==null){var c=I,s=ct;switch(se){case 8:Dc(),u=6;break e;case 3:case 2:case 9:case 6:it.current===null&&(t=!0);var y=se;if(se=0,ct=null,Sa(e,c,s,y),l&&ga){u=0;break e}break;default:y=se,se=0,ct=null,Sa(e,c,s,y)}}th(),u=xe;break}catch(v){rr(e,v)}while(!0);return t&&e.shellSuspendCounter++,Bt=Rl=null,ue=a,b.H=n,b.A=i,I===null&&(ye=null,ee=0,Yn()),u}function th(){for(;I!==null;)yr(I)}function lh(e,t){var l=ue;ue|=2;var a=mr(),n=hr();ye!==e||ee!==t?(vi=null,gi=et()+500,_a(e,t)):ga=Ca(e,t);e:do try{if(se!==0&&I!==null){t=I;var i=ct;t:switch(se){case 1:se=0,ct=null,Sa(e,t,i,1);break;case 2:case 9:if(xf(i)){se=0,ct=null,pr(t);break}t=function(){se!==2&&se!==9||ye!==e||(se=7),Dt(e)},i.then(t,t);break e;case 3:se=7;break e;case 4:se=5;break e;case 7:xf(i)?(se=0,ct=null,pr(t)):(se=0,ct=null,Sa(e,t,i,7));break;case 5:var u=null;switch(I.tag){case 26:u=I.memoizedState;case 5:case 27:var c=I;if(u?td(u):c.stateNode.complete){se=0,ct=null;var s=c.sibling;if(s!==null)I=s;else{var y=c.return;y!==null?(I=y,Si(y)):I=null}break t}}se=0,ct=null,Sa(e,t,i,5);break;case 6:se=0,ct=null,Sa(e,t,i,6);break;case 8:Dc(),xe=6;break e;default:throw Error(m(462))}}ah();break}catch(v){rr(e,v)}while(!0);return Bt=Rl=null,b.H=a,b.A=n,ue=l,I!==null?0:(ye=null,ee=0,Yn(),xe)}function ah(){for(;I!==null&&!zd();)yr(I)}function yr(e){var t=qo(e.alternate,e,Kt);e.memoizedProps=e.pendingProps,t===null?Si(e):I=t}function pr(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=Ho(l,t,t.pendingProps,t.type,void 0,ee);break;case 11:t=Ho(l,t,t.pendingProps,t.type.render,t.ref,ee);break;case 5:Vu(t);default:Lo(l,t),t=I=mf(t,Kt),t=qo(l,t,Kt)}e.memoizedProps=e.pendingProps,t===null?Si(e):I=t}function Sa(e,t,l,a){Bt=Rl=null,Vu(t),oa=null,Va=0;var n=t.return;try{if(km(e,n,t,l,ee)){xe=1,si(e,ht(l,e.current)),I=null;return}}catch(i){if(n!==null)throw I=n,i;xe=1,si(e,ht(l,e.current)),I=null;return}t.flags&32768?(le||a===1?e=!0:ga||(ee&536870912)!==0?e=!1:(fl=e=!0,(a===2||a===9||a===3||a===6)&&(a=it.current,a!==null&&a.tag===13&&(a.flags|=16384))),gr(t,e)):Si(t)}function Si(e){var t=e;do{if((t.flags&32768)!==0){gr(t,fl);return}e=t.return;var l=Jm(t.alternate,t,Kt);if(l!==null){I=l;return}if(t=t.sibling,t!==null){I=t;return}I=t=e}while(t!==null);xe===0&&(xe=5)}function gr(e,t){do{var l=Wm(e.alternate,e);if(l!==null){l.flags&=32767,I=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){I=e;return}I=e=l}while(e!==null);xe=6,I=null}function vr(e,t,l,a,n,i,u,c,s){e.cancelPendingCommit=null;do Ei();while(Re!==0);if((ue&6)!==0)throw Error(m(327));if(t!==null){if(t===e.current)throw Error(m(177));if(i=t.lanes|t.childLanes,i|=bu,wd(e,l,i,u,c,s),e===ye&&(I=ye=null,ee=0),ba=t,dl=e,Jt=l,Oc=i,Mc=n,cr=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ch(xn,function(){return Tr(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=b.T,b.T=null,n=z.p,z.p=2,u=ue,ue|=4;try{Fm(e,t,l)}finally{ue=u,z.p=n,b.T=a}}Re=1,br(),_r(),Sr()}}function br(){if(Re===1){Re=0;var e=dl,t=ba,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=b.T,b.T=null;var a=z.p;z.p=2;var n=ue;ue|=4;try{Po(t,e);var i=Qc,u=af(e.containerInfo),c=i.focusedElem,s=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&lf(c.ownerDocument.documentElement,c)){if(s!==null&&hu(c)){var y=s.start,v=s.end;if(v===void 0&&(v=y),"selectionStart"in c)c.selectionStart=y,c.selectionEnd=Math.min(v,c.value.length);else{var S=c.ownerDocument||document,p=S&&S.defaultView||window;if(p.getSelection){var g=p.getSelection(),M=c.textContent.length,U=Math.min(s.start,M),me=s.end===void 0?U:Math.min(s.end,M);!g.extend&&U>me&&(u=me,me=U,U=u);var r=tf(c,U),f=tf(c,me);if(r&&f&&(g.rangeCount!==1||g.anchorNode!==r.node||g.anchorOffset!==r.offset||g.focusNode!==f.node||g.focusOffset!==f.offset)){var h=S.createRange();h.setStart(r.node,r.offset),g.removeAllRanges(),U>me?(g.addRange(h),g.extend(f.node,f.offset)):(h.setEnd(f.node,f.offset),g.addRange(h))}}}}for(S=[],g=c;g=g.parentNode;)g.nodeType===1&&S.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<S.length;c++){var _=S[c];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}Ui=!!Xc,Qc=Xc=null}finally{ue=n,z.p=a,b.T=l}}e.current=t,Re=2}}function _r(){if(Re===2){Re=0;var e=dl,t=ba,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=b.T,b.T=null;var a=z.p;z.p=2;var n=ue;ue|=4;try{Jo(e,t.alternate,t)}finally{ue=n,z.p=a,b.T=l}}Re=3}}function Sr(){if(Re===4||Re===3){Re=0,Od();var e=dl,t=ba,l=Jt,a=cr;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Re=5:(Re=0,ba=dl=null,Er(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(rl=null),Wi(l),t=t.stateNode,tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(Ma,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=b.T,n=z.p,z.p=2,b.T=null;try{for(var i=e.onRecoverableError,u=0;u<a.length;u++){var c=a[u];i(c.value,{componentStack:c.stack})}}finally{b.T=t,z.p=n}}(Jt&3)!==0&&Ei(),Dt(e),n=e.pendingLanes,(l&261930)!==0&&(n&42)!==0?e===Cc?on++:(on=0,Cc=e):on=0,rn(0)}}function Er(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Za(t)))}function Ei(){return br(),_r(),Sr(),Tr()}function Tr(){if(Re!==5)return!1;var e=dl,t=Oc;Oc=0;var l=Wi(Jt),a=b.T,n=z.p;try{z.p=32>l?32:l,b.T=null,l=Mc,Mc=null;var i=dl,u=Jt;if(Re=0,ba=dl=null,Jt=0,(ue&6)!==0)throw Error(m(331));var c=ue;if(ue|=4,nr(i.current),tr(i,i.current,u,l),ue=c,rn(0,!1),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(Ma,i)}catch{}return!0}finally{z.p=n,b.T=a,Er(e,t)}}function xr(e,t,l){t=ht(l,t),t=cc(e.stateNode,t,2),e=il(e,t,2),e!==null&&(Da(e,2),Dt(e))}function fe(e,t,l){if(e.tag===3)xr(e,e,l);else for(;t!==null;){if(t.tag===3){xr(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(rl===null||!rl.has(a))){e=ht(l,e),l=Ao(2),a=il(t,l,2),a!==null&&(zo(l,a,t,e),Da(a,2),Dt(a));break}}t=t.return}}function Rc(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new Pm;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(xc=!0,n.add(l),e=nh.bind(null,e,t,l),t.then(e,e))}function nh(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,ye===e&&(ee&l)===l&&(xe===4||xe===3&&(ee&62914560)===ee&&300>et()-pi?(ue&2)===0&&_a(e,0):Ac|=l,va===ee&&(va=0)),Dt(e)}function Ar(e,t){t===0&&(t=gs()),e=Cl(e,t),e!==null&&(Da(e,t),Dt(e))}function ih(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Ar(e,l)}function uh(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(m(314))}a!==null&&a.delete(t),Ar(e,l)}function ch(e,t){return ki(e,t)}var Ti=null,Ea=null,Hc=!1,xi=!1,Uc=!1,hl=0;function Dt(e){e!==Ea&&e.next===null&&(Ea===null?Ti=Ea=e:Ea=Ea.next=e),xi=!0,Hc||(Hc=!0,fh())}function rn(e,t){if(!Uc&&xi){Uc=!0;do for(var l=!1,a=Ti;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var u=a.suspendedLanes,c=a.pingedLanes;i=(1<<31-lt(42|e)+1)-1,i&=n&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,Cr(a,i))}else i=ee,i=Mn(a,a===ye?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Ca(a,i)||(l=!0,Cr(a,i));a=a.next}while(l);Uc=!1}}function sh(){zr()}function zr(){xi=Hc=!1;var e=0;hl!==0&&bh()&&(e=hl);for(var t=et(),l=null,a=Ti;a!==null;){var n=a.next,i=Or(a,t);i===0?(a.next=null,l===null?Ti=n:l.next=n,n===null&&(Ea=l)):(l=a,(e!==0||(i&3)!==0)&&(xi=!0)),a=n}Re!==0&&Re!==5||rn(e),hl!==0&&(hl=0)}function Or(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-lt(i),c=1<<u,s=n[u];s===-1?((c&l)===0||(c&a)!==0)&&(n[u]=jd(c,t)):s<=t&&(e.expiredLanes|=c),i&=~c}if(t=ye,l=ee,l=Mn(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(se===2||se===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Vi(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||Ca(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&Vi(a),Wi(l)){case 2:case 8:l=ys;break;case 32:l=xn;break;case 268435456:l=ps;break;default:l=xn}return a=Mr.bind(null,e),l=ki(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&Vi(a),e.callbackPriority=2,e.callbackNode=null,2}function Mr(e,t){if(Re!==0&&Re!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Ei()&&e.callbackNode!==l)return null;var a=ee;return a=Mn(e,e===ye?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(fr(e,a,t),Or(e,et()),e.callbackNode!=null&&e.callbackNode===l?Mr.bind(null,e):null)}function Cr(e,t){if(Ei())return null;fr(e,t,!0)}function fh(){Sh(function(){(ue&6)!==0?ki(hs,sh):zr()})}function jc(){if(hl===0){var e=ca;e===0&&(e=An,An<<=1,(An&261888)===0&&(An=256)),hl=e}return hl}function Dr(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Rn(""+e)}function Nr(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function oh(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var i=Dr((n[Ke]||null).action),u=a.submitter;u&&(t=(t=u[Ke]||null)?Dr(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var c=new wn("action","action",null,a,n);e.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(hl!==0){var s=u?Nr(n,u):new FormData(n);tc(l,{pending:!0,data:s,method:n.method,action:i},null,s)}}else typeof i=="function"&&(c.preventDefault(),s=u?Nr(n,u):new FormData(n),tc(l,{pending:!0,data:s,method:n.method,action:i},i,s))},currentTarget:n}]})}}for(var wc=0;wc<vu.length;wc++){var Bc=vu[wc],rh=Bc.toLowerCase(),dh=Bc[0].toUpperCase()+Bc.slice(1);Et(rh,"on"+dh)}Et(cf,"onAnimationEnd"),Et(sf,"onAnimationIteration"),Et(ff,"onAnimationStart"),Et("dblclick","onDoubleClick"),Et("focusin","onFocus"),Et("focusout","onBlur"),Et(Mm,"onTransitionRun"),Et(Cm,"onTransitionStart"),Et(Dm,"onTransitionCancel"),Et(of,"onTransitionEnd"),Kl("onMouseEnter",["mouseout","mouseover"]),Kl("onMouseLeave",["mouseout","mouseover"]),Kl("onPointerEnter",["pointerout","pointerover"]),Kl("onPointerLeave",["pointerout","pointerover"]),Al("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Al("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Al("onBeforeInput",["compositionend","keypress","textInput","paste"]),Al("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Al("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Al("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(dn));function Rr(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var u=a.length-1;0<=u;u--){var c=a[u],s=c.instance,y=c.currentTarget;if(c=c.listener,s!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=y;try{i(n)}catch(v){qn(v)}n.currentTarget=null,i=s}else for(u=0;u<a.length;u++){if(c=a[u],s=c.instance,y=c.currentTarget,c=c.listener,s!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=y;try{i(n)}catch(v){qn(v)}n.currentTarget=null,i=s}}}}function P(e,t){var l=t[Fi];l===void 0&&(l=t[Fi]=new Set);var a=e+"__bubble";l.has(a)||(Hr(t,e,2,!1),l.add(a))}function Gc(e,t,l){var a=0;t&&(a|=4),Hr(l,e,a,t)}var Ai="_reactListening"+Math.random().toString(36).slice(2);function qc(e){if(!e[Ai]){e[Ai]=!0,xs.forEach(function(l){l!=="selectionchange"&&(mh.has(l)||Gc(l,!1,e),Gc(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ai]||(t[Ai]=!0,Gc("selectionchange",!1,t))}}function Hr(e,t,l,a){switch(sd(t)){case 2:var n=Lh;break;case 8:n=Xh;break;default:n=es}l=n.bind(null,t,l,e),n=void 0,!iu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function Yc(e,t,l,a,n){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var c=a.stateNode.containerInfo;if(c===n)break;if(u===4)for(u=a.return;u!==null;){var s=u.tag;if((s===3||s===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;c!==null;){if(u=Zl(c),u===null)return;if(s=u.tag,s===5||s===6||s===26||s===27){a=i=u;continue e}c=c.parentNode}}a=a.return}ws(function(){var y=i,v=au(l),S=[];e:{var p=rf.get(e);if(p!==void 0){var g=wn,M=e;switch(e){case"keypress":if(Un(l)===0)break e;case"keydown":case"keyup":g=um;break;case"focusin":M="focus",g=fu;break;case"focusout":M="blur",g=fu;break;case"beforeblur":case"afterblur":g=fu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=qs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Jd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=fm;break;case cf:case sf:case ff:g=$d;break;case of:g=rm;break;case"scroll":case"scrollend":g=Vd;break;case"wheel":g=mm;break;case"copy":case"cut":case"paste":g=Pd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ls;break;case"toggle":case"beforetoggle":g=ym}var U=(t&4)!==0,me=!U&&(e==="scroll"||e==="scrollend"),r=U?p!==null?p+"Capture":null:p;U=[];for(var f=y,h;f!==null;){var _=f;if(h=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||h===null||r===null||(_=Ha(f,r),_!=null&&U.push(mn(f,_,h))),me)break;f=f.return}0<U.length&&(p=new g(p,M,null,l,v),S.push({event:p,listeners:U}))}}if((t&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&l!==lu&&(M=l.relatedTarget||l.fromElement)&&(Zl(M)||M[Ql]))break e;if((g||p)&&(p=v.window===v?v:(p=v.ownerDocument)?p.defaultView||p.parentWindow:window,g?(M=l.relatedTarget||l.toElement,g=y,M=M?Zl(M):null,M!==null&&(me=G(M),U=M.tag,M!==me||U!==5&&U!==27&&U!==6)&&(M=null)):(g=null,M=y),g!==M)){if(U=qs,_="onMouseLeave",r="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(U=Ls,_="onPointerLeave",r="onPointerEnter",f="pointer"),me=g==null?p:Ra(g),h=M==null?p:Ra(M),p=new U(_,f+"leave",g,l,v),p.target=me,p.relatedTarget=h,_=null,Zl(v)===y&&(U=new U(r,f+"enter",M,l,v),U.target=h,U.relatedTarget=me,_=U),me=_,g&&M)t:{for(U=hh,r=g,f=M,h=0,_=r;_;_=U(_))h++;_=0;for(var R=f;R;R=U(R))_++;for(;0<h-_;)r=U(r),h--;for(;0<_-h;)f=U(f),_--;for(;h--;){if(r===f||f!==null&&r===f.alternate){U=r;break t}r=U(r),f=U(f)}U=null}else U=null;g!==null&&Ur(S,p,g,U,!1),M!==null&&me!==null&&Ur(S,me,M,U,!0)}}e:{if(p=y?Ra(y):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var ne=Ws;else if(Ks(p))if(Fs)ne=Am;else{ne=Tm;var D=Em}else g=p.nodeName,!g||g.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?y&&tu(y.elementType)&&(ne=Ws):ne=xm;if(ne&&(ne=ne(e,y))){Js(S,ne,l,v);break e}D&&D(e,p,y),e==="focusout"&&y&&p.type==="number"&&y.memoizedProps.value!=null&&eu(p,"number",p.value)}switch(D=y?Ra(y):window,e){case"focusin":(Ks(D)||D.contentEditable==="true")&&(Pl=D,yu=y,La=null);break;case"focusout":La=yu=Pl=null;break;case"mousedown":pu=!0;break;case"contextmenu":case"mouseup":case"dragend":pu=!1,nf(S,l,v);break;case"selectionchange":if(Om)break;case"keydown":case"keyup":nf(S,l,v)}var k;if(ru)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else Il?ks(e,l)&&(te="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(te="onCompositionStart");te&&(Xs&&l.locale!=="ko"&&(Il||te!=="onCompositionStart"?te==="onCompositionEnd"&&Il&&(k=Bs()):(It=v,uu="value"in It?It.value:It.textContent,Il=!0)),D=zi(y,te),0<D.length&&(te=new Ys(te,e,null,l,v),S.push({event:te,listeners:D}),k?te.data=k:(k=Vs(l),k!==null&&(te.data=k)))),(k=gm?vm(e,l):bm(e,l))&&(te=zi(y,"onBeforeInput"),0<te.length&&(D=new Ys("onBeforeInput","beforeinput",null,l,v),S.push({event:D,listeners:te}),D.data=k)),oh(S,e,y,l,v)}Rr(S,t)})}function mn(e,t,l){return{instance:e,listener:t,currentTarget:l}}function zi(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ha(e,l),n!=null&&a.unshift(mn(e,n,i)),n=Ha(e,t),n!=null&&a.push(mn(e,n,i))),e.tag===3)return a;e=e.return}return[]}function hh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ur(e,t,l,a,n){for(var i=t._reactName,u=[];l!==null&&l!==a;){var c=l,s=c.alternate,y=c.stateNode;if(c=c.tag,s!==null&&s===a)break;c!==5&&c!==26&&c!==27||y===null||(s=y,n?(y=Ha(l,i),y!=null&&u.unshift(mn(l,y,s))):n||(y=Ha(l,i),y!=null&&u.push(mn(l,y,s)))),l=l.return}u.length!==0&&e.push({event:t,listeners:u})}var yh=/\r\n?/g,ph=/\u0000|\uFFFD/g;function jr(e){return(typeof e=="string"?e:""+e).replace(yh,`
`).replace(ph,"")}function wr(e,t){return t=jr(t),jr(e)===t}function de(e,t,l,a,n,i){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Wl(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Wl(e,""+a);break;case"className":Dn(e,"class",a);break;case"tabIndex":Dn(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Dn(e,l,a);break;case"style":Us(e,a,i);break;case"data":if(t!=="object"){Dn(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Rn(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(t!=="input"&&de(e,t,"name",n.name,n,null),de(e,t,"formEncType",n.formEncType,n,null),de(e,t,"formMethod",n.formMethod,n,null),de(e,t,"formTarget",n.formTarget,n,null)):(de(e,t,"encType",n.encType,n,null),de(e,t,"method",n.method,n,null),de(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Rn(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=Ht);break;case"onScroll":a!=null&&P("scroll",e);break;case"onScrollEnd":a!=null&&P("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(m(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(m(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=Rn(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":P("beforetoggle",e),P("toggle",e),Cn(e,"popover",a);break;case"xlinkActuate":Rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Rt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Rt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Rt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Rt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Cn(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Zd.get(l)||l,Cn(e,l,a))}}function Lc(e,t,l,a,n,i){switch(l){case"style":Us(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(m(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(m(60));e.innerHTML=l}}break;case"children":typeof a=="string"?Wl(e,a):(typeof a=="number"||typeof a=="bigint")&&Wl(e,""+a);break;case"onScroll":a!=null&&P("scroll",e);break;case"onScrollEnd":a!=null&&P("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Ht);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!As.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),i=e[Ke]||null,i=i!=null?i[l]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,n);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):Cn(e,l,a)}}}function Ye(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":P("error",e),P("load",e);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,t));default:de(e,t,i,u,l,null)}}n&&de(e,t,"srcSet",l.srcSet,l,null),a&&de(e,t,"src",l.src,l,null);return;case"input":P("invalid",e);var c=i=u=n=null,s=null,y=null;for(a in l)if(l.hasOwnProperty(a)){var v=l[a];if(v!=null)switch(a){case"name":n=v;break;case"type":u=v;break;case"checked":s=v;break;case"defaultChecked":y=v;break;case"value":i=v;break;case"defaultValue":c=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(m(137,t));break;default:de(e,t,a,v,l,null)}}Ds(e,i,c,s,y,u,n,!1);return;case"select":P("invalid",e),a=u=i=null;for(n in l)if(l.hasOwnProperty(n)&&(c=l[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":a=c;default:de(e,t,n,c,l,null)}t=i,l=u,e.multiple=!!a,t!=null?Jl(e,!!a,t,!1):l!=null&&Jl(e,!!a,l,!0);return;case"textarea":P("invalid",e),i=n=a=null;for(u in l)if(l.hasOwnProperty(u)&&(c=l[u],c!=null))switch(u){case"value":a=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(m(91));break;default:de(e,t,u,c,l,null)}Rs(e,a,n,i);return;case"option":for(s in l)l.hasOwnProperty(s)&&(a=l[s],a!=null)&&(s==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":de(e,t,s,a,l,null));return;case"dialog":P("beforetoggle",e),P("toggle",e),P("cancel",e),P("close",e);break;case"iframe":case"object":P("load",e);break;case"video":case"audio":for(a=0;a<dn.length;a++)P(dn[a],e);break;case"image":P("error",e),P("load",e);break;case"details":P("toggle",e);break;case"embed":case"source":case"link":P("error",e),P("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(y in l)if(l.hasOwnProperty(y)&&(a=l[y],a!=null))switch(y){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,t));default:de(e,t,y,a,l,null)}return;default:if(tu(t)){for(v in l)l.hasOwnProperty(v)&&(a=l[v],a!==void 0&&Lc(e,t,v,a,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(a=l[c],a!=null&&de(e,t,c,a,l,null))}function gh(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,c=null,s=null,y=null,v=null;for(g in l){var S=l[g];if(l.hasOwnProperty(g)&&S!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":s=S;default:a.hasOwnProperty(g)||de(e,t,g,null,a,S)}}for(var p in a){var g=a[p];if(S=l[p],a.hasOwnProperty(p)&&(g!=null||S!=null))switch(p){case"type":i=g;break;case"name":n=g;break;case"checked":y=g;break;case"defaultChecked":v=g;break;case"value":u=g;break;case"defaultValue":c=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(m(137,t));break;default:g!==S&&de(e,t,p,g,a,S)}}Pi(e,u,c,s,y,v,i,n);return;case"select":g=u=c=p=null;for(i in l)if(s=l[i],l.hasOwnProperty(i)&&s!=null)switch(i){case"value":break;case"multiple":g=s;default:a.hasOwnProperty(i)||de(e,t,i,null,a,s)}for(n in a)if(i=a[n],s=l[n],a.hasOwnProperty(n)&&(i!=null||s!=null))switch(n){case"value":p=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==s&&de(e,t,n,i,a,s)}t=c,l=u,a=g,p!=null?Jl(e,!!l,p,!1):!!a!=!!l&&(t!=null?Jl(e,!!l,t,!0):Jl(e,!!l,l?[]:"",!1));return;case"textarea":g=p=null;for(c in l)if(n=l[c],l.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:de(e,t,c,null,a,n)}for(u in a)if(n=a[u],i=l[u],a.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":p=n;break;case"defaultValue":g=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(m(91));break;default:n!==i&&de(e,t,u,n,a,i)}Ns(e,p,g);return;case"option":for(var M in l)p=l[M],l.hasOwnProperty(M)&&p!=null&&!a.hasOwnProperty(M)&&(M==="selected"?e.selected=!1:de(e,t,M,null,a,p));for(s in a)p=a[s],g=l[s],a.hasOwnProperty(s)&&p!==g&&(p!=null||g!=null)&&(s==="selected"?e.selected=p&&typeof p!="function"&&typeof p!="symbol":de(e,t,s,p,a,g));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var U in l)p=l[U],l.hasOwnProperty(U)&&p!=null&&!a.hasOwnProperty(U)&&de(e,t,U,null,a,p);for(y in a)if(p=a[y],g=l[y],a.hasOwnProperty(y)&&p!==g&&(p!=null||g!=null))switch(y){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(m(137,t));break;default:de(e,t,y,p,a,g)}return;default:if(tu(t)){for(var me in l)p=l[me],l.hasOwnProperty(me)&&p!==void 0&&!a.hasOwnProperty(me)&&Lc(e,t,me,void 0,a,p);for(v in a)p=a[v],g=l[v],!a.hasOwnProperty(v)||p===g||p===void 0&&g===void 0||Lc(e,t,v,p,a,g);return}}for(var r in l)p=l[r],l.hasOwnProperty(r)&&p!=null&&!a.hasOwnProperty(r)&&de(e,t,r,null,a,p);for(S in a)p=a[S],g=l[S],!a.hasOwnProperty(S)||p===g||p==null&&g==null||de(e,t,S,p,a,g)}function Br(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,u=n.initiatorType,c=n.duration;if(i&&c&&Br(u)){for(u=0,c=n.responseEnd,a+=1;a<l.length;a++){var s=l[a],y=s.startTime;if(y>c)break;var v=s.transferSize,S=s.initiatorType;v&&Br(S)&&(s=s.responseEnd,u+=v*(s<c?1:(c-y)/(s-y)))}if(--a,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Xc=null,Qc=null;function Oi(e){return e.nodeType===9?e:e.ownerDocument}function Gr(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qr(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Zc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var kc=null;function bh(){var e=window.event;return e&&e.type==="popstate"?e===kc?!1:(kc=e,!0):(kc=null,!1)}var Yr=typeof setTimeout=="function"?setTimeout:void 0,_h=typeof clearTimeout=="function"?clearTimeout:void 0,Lr=typeof Promise=="function"?Promise:void 0,Sh=typeof queueMicrotask=="function"?queueMicrotask:typeof Lr<"u"?function(e){return Lr.resolve(null).then(e).catch(Eh)}:Yr;function Eh(e){setTimeout(function(){throw e})}function yl(e){return e==="head"}function Xr(e,t){var l=t,a=0;do{var n=l.nextSibling;if(e.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(n),za(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")hn(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,hn(l);for(var i=l.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[Na]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=u}}else l==="body"&&hn(e.ownerDocument.body);l=n}while(l);za(t)}function Qr(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function Vc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Vc(l),$i(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function Th(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Na])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=bt(e.nextSibling),e===null)break}return null}function xh(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=bt(e.nextSibling),e===null))return null;return e}function Zr(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=bt(e.nextSibling),e===null))return null;return e}function Kc(e){return e.data==="$?"||e.data==="$~"}function Jc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ah(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Wc=null;function kr(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return bt(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function Vr(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function Kr(e,t,l){switch(t=Oi(l),e){case"html":if(e=t.documentElement,!e)throw Error(m(452));return e;case"head":if(e=t.head,!e)throw Error(m(453));return e;case"body":if(e=t.body,!e)throw Error(m(454));return e;default:throw Error(m(451))}}function hn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);$i(e)}var _t=new Map,Jr=new Set;function Mi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Wt=z.d;z.d={f:zh,r:Oh,D:Mh,C:Ch,L:Dh,m:Nh,X:Hh,S:Rh,M:Uh};function zh(){var e=Wt.f(),t=bi();return e||t}function Oh(e){var t=kl(e);t!==null&&t.tag===5&&t.type==="form"?oo(t):Wt.r(e)}var Ta=typeof document>"u"?null:document;function Wr(e,t,l){var a=Ta;if(a&&typeof t=="string"&&t){var n=dt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Jr.has(n)||(Jr.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),Ye(t,"link",e),He(t),a.head.appendChild(t)))}}function Mh(e){Wt.D(e),Wr("dns-prefetch",e,null)}function Ch(e,t){Wt.C(e,t),Wr("preconnect",e,t)}function Dh(e,t,l){Wt.L(e,t,l);var a=Ta;if(a&&e&&t){var n='link[rel="preload"][as="'+dt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+dt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+dt(l.imageSizes)+'"]')):n+='[href="'+dt(e)+'"]';var i=n;switch(t){case"style":i=xa(e);break;case"script":i=Aa(e)}_t.has(i)||(e=N({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),_t.set(i,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(yn(i))||t==="script"&&a.querySelector(pn(i))||(t=a.createElement("link"),Ye(t,"link",e),He(t),a.head.appendChild(t)))}}function Nh(e,t){Wt.m(e,t);var l=Ta;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+dt(a)+'"][href="'+dt(e)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Aa(e)}if(!_t.has(i)&&(e=N({rel:"modulepreload",href:e},t),_t.set(i,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(pn(i)))return}a=l.createElement("link"),Ye(a,"link",e),He(a),l.head.appendChild(a)}}}function Rh(e,t,l){Wt.S(e,t,l);var a=Ta;if(a&&e){var n=Vl(a).hoistableStyles,i=xa(e);t=t||"default";var u=n.get(i);if(!u){var c={loading:0,preload:null};if(u=a.querySelector(yn(i)))c.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":t},l),(l=_t.get(i))&&Fc(e,l);var s=u=a.createElement("link");He(s),Ye(s,"link",e),s._p=new Promise(function(y,v){s.onload=y,s.onerror=v}),s.addEventListener("load",function(){c.loading|=1}),s.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Ci(u,t,a)}u={type:"stylesheet",instance:u,count:1,state:c},n.set(i,u)}}}function Hh(e,t){Wt.X(e,t);var l=Ta;if(l&&e){var a=Vl(l).hoistableScripts,n=Aa(e),i=a.get(n);i||(i=l.querySelector(pn(n)),i||(e=N({src:e,async:!0},t),(t=_t.get(n))&&$c(e,t),i=l.createElement("script"),He(i),Ye(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Uh(e,t){Wt.M(e,t);var l=Ta;if(l&&e){var a=Vl(l).hoistableScripts,n=Aa(e),i=a.get(n);i||(i=l.querySelector(pn(n)),i||(e=N({src:e,async:!0,type:"module"},t),(t=_t.get(n))&&$c(e,t),i=l.createElement("script"),He(i),Ye(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Fr(e,t,l,a){var n=(n=$.current)?Mi(n):null;if(!n)throw Error(m(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=xa(l.href),l=Vl(n).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=xa(l.href);var i=Vl(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(yn(e)))&&!i._p&&(u.instance=i,u.state.loading=5),_t.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},_t.set(e,l),i||jh(n,e,l,u.state))),t&&a===null)throw Error(m(528,""));return u}if(t&&a!==null)throw Error(m(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Aa(l),l=Vl(n).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,e))}}function xa(e){return'href="'+dt(e)+'"'}function yn(e){return'link[rel="stylesheet"]['+e+"]"}function $r(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function jh(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Ye(t,"link",l),He(t),e.head.appendChild(t))}function Aa(e){return'[src="'+dt(e)+'"]'}function pn(e){return"script[async]"+e}function Ir(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+dt(l.href)+'"]');if(a)return t.instance=a,He(a),a;var n=N({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),He(a),Ye(a,"style",n),Ci(a,l.precedence,e),t.instance=a;case"stylesheet":n=xa(l.href);var i=e.querySelector(yn(n));if(i)return t.state.loading|=4,t.instance=i,He(i),i;a=$r(l),(n=_t.get(n))&&Fc(a,n),i=(e.ownerDocument||e).createElement("link"),He(i);var u=i;return u._p=new Promise(function(c,s){u.onload=c,u.onerror=s}),Ye(i,"link",a),t.state.loading|=4,Ci(i,l.precedence,e),t.instance=i;case"script":return i=Aa(l.src),(n=e.querySelector(pn(i)))?(t.instance=n,He(n),n):(a=l,(n=_t.get(i))&&(a=N({},l),$c(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),He(n),Ye(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(m(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Ci(a,l.precedence,e));return t.instance}function Ci(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,u=0;u<a.length;u++){var c=a[u];if(c.dataset.precedence===t)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function Fc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function $c(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Di=null;function Pr(e,t,l){if(Di===null){var a=new Map,n=Di=new Map;n.set(l,a)}else n=Di,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var i=l[n];if(!(i[Na]||i[we]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var c=a.get(u);c?c.push(i):a.set(u,[i])}}return a}function ed(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function wh(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function td(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Bh(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=xa(a.href),i=t.querySelector(yn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ni.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=i,He(i);return}i=t.ownerDocument||t,a=$r(a),(n=_t.get(n))&&Fc(a,n),i=i.createElement("link"),He(i);var u=i;u._p=new Promise(function(c,s){u.onload=c,u.onerror=s}),Ye(i,"link",a),l.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=Ni.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var Ic=0;function Gh(e,t){return e.stylesheets&&e.count===0&&Hi(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&Hi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Ic===0&&(Ic=62500*vh());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Hi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Ic?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function Ni(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Hi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ri=null;function Hi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ri=new Map,t.forEach(qh,e),Ri=null,Ni.call(e))}function qh(e,t){if(!(t.state.loading&4)){var l=Ri.get(e);if(l)var a=l.get(null);else{l=new Map,Ri.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),a=u)}a&&l.set(null,a)}n=t.instance,u=n.getAttribute("data-precedence"),i=l.get(u)||a,i===a&&l.set(null,n),l.set(u,n),this.count++,a=Ni.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var gn={$$typeof:ge,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function Yh(e,t,l,a,n,i,u,c,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ki(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ki(0),this.hiddenUpdates=Ki(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function ld(e,t,l,a,n,i,u,c,s,y,v,S){return e=new Yh(e,t,l,u,s,y,v,S,c),t=1,i===!0&&(t|=24),i=nt(3,null,null,t),e.current=i,i.stateNode=e,t=Nu(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:t},ju(i),e}function ad(e){return e?(e=la,e):la}function nd(e,t,l,a,n,i){n=ad(n),a.context===null?a.context=n:a.pendingContext=n,a=nl(t),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=il(e,a,t),l!==null&&(Pe(l,e,t),Ja(l,e,t))}function id(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function Pc(e,t){id(e,t),(e=e.alternate)&&id(e,t)}function ud(e){if(e.tag===13||e.tag===31){var t=Cl(e,67108864);t!==null&&Pe(t,e,67108864),Pc(e,67108864)}}function cd(e){if(e.tag===13||e.tag===31){var t=ft();t=Ji(t);var l=Cl(e,t);l!==null&&Pe(l,e,t),Pc(e,t)}}var Ui=!0;function Lh(e,t,l,a){var n=b.T;b.T=null;var i=z.p;try{z.p=2,es(e,t,l,a)}finally{z.p=i,b.T=n}}function Xh(e,t,l,a){var n=b.T;b.T=null;var i=z.p;try{z.p=8,es(e,t,l,a)}finally{z.p=i,b.T=n}}function es(e,t,l,a){if(Ui){var n=ts(a);if(n===null)Yc(e,t,a,ji,l),fd(e,a);else if(Zh(n,e,t,l,a))a.stopPropagation();else if(fd(e,a),t&4&&-1<Qh.indexOf(e)){for(;n!==null;){var i=kl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=xl(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var s=1<<31-lt(u);c.entanglements[1]|=s,u&=~s}Dt(i),(ue&6)===0&&(gi=et()+500,rn(0))}}break;case 31:case 13:c=Cl(i,2),c!==null&&Pe(c,i,2),bi(),Pc(i,2)}if(i=ts(a),i===null&&Yc(e,t,a,ji,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else Yc(e,t,a,null,l)}}function ts(e){return e=au(e),ls(e)}var ji=null;function ls(e){if(ji=null,e=Zl(e),e!==null){var t=G(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=Q(t),e!==null)return e;e=null}else if(l===31){if(e=Y(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ji=e,null}function sd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Md()){case hs:return 2;case ys:return 8;case xn:case Cd:return 32;case ps:return 268435456;default:return 32}default:return 32}}var as=!1,pl=null,gl=null,vl=null,vn=new Map,bn=new Map,bl=[],Qh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function fd(e,t){switch(e){case"focusin":case"focusout":pl=null;break;case"dragenter":case"dragleave":gl=null;break;case"mouseover":case"mouseout":vl=null;break;case"pointerover":case"pointerout":vn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bn.delete(t.pointerId)}}function _n(e,t,l,a,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},t!==null&&(t=kl(t),t!==null&&ud(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Zh(e,t,l,a,n){switch(t){case"focusin":return pl=_n(pl,e,t,l,a,n),!0;case"dragenter":return gl=_n(gl,e,t,l,a,n),!0;case"mouseover":return vl=_n(vl,e,t,l,a,n),!0;case"pointerover":var i=n.pointerId;return vn.set(i,_n(vn.get(i)||null,e,t,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,bn.set(i,_n(bn.get(i)||null,e,t,l,a,n)),!0}return!1}function od(e){var t=Zl(e.target);if(t!==null){var l=G(t);if(l!==null){if(t=l.tag,t===13){if(t=Q(l),t!==null){e.blockedOn=t,Es(e.priority,function(){cd(l)});return}}else if(t===31){if(t=Y(l),t!==null){e.blockedOn=t,Es(e.priority,function(){cd(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=ts(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);lu=a,l.target.dispatchEvent(a),lu=null}else return t=kl(l),t!==null&&ud(t),e.blockedOn=l,!1;t.shift()}return!0}function rd(e,t,l){wi(e)&&l.delete(t)}function kh(){as=!1,pl!==null&&wi(pl)&&(pl=null),gl!==null&&wi(gl)&&(gl=null),vl!==null&&wi(vl)&&(vl=null),vn.forEach(rd),bn.forEach(rd)}function Bi(e,t){e.blockedOn===t&&(e.blockedOn=null,as||(as=!0,x.unstable_scheduleCallback(x.unstable_NormalPriority,kh)))}var Gi=null;function dd(e){Gi!==e&&(Gi=e,x.unstable_scheduleCallback(x.unstable_NormalPriority,function(){Gi===e&&(Gi=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(ls(a||l)===null)continue;break}var i=kl(l);i!==null&&(e.splice(t,3),t-=3,tc(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function za(e){function t(s){return Bi(s,e)}pl!==null&&Bi(pl,e),gl!==null&&Bi(gl,e),vl!==null&&Bi(vl,e),vn.forEach(t),bn.forEach(t);for(var l=0;l<bl.length;l++){var a=bl[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<bl.length&&(l=bl[0],l.blockedOn===null);)od(l),l.blockedOn===null&&bl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],u=n[Ke]||null;if(typeof i=="function")u||dd(l);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Ke]||null)c=u.formAction;else if(ls(n)!==null)continue}else c=u.action;typeof c=="function"?l[a+1]=c:(l.splice(a,3),a-=3),dd(l)}}}function md(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function ns(e){this._internalRoot=e}qi.prototype.render=ns.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(m(409));var l=t.current,a=ft();nd(l,a,e,t,null,null)},qi.prototype.unmount=ns.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nd(e.current,2,null,e,null,null),bi(),t[Ql]=null}};function qi(e){this._internalRoot=e}qi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ss();e={blockedOn:null,target:e,priority:t};for(var l=0;l<bl.length&&t!==0&&t<bl[l].priority;l++);bl.splice(l,0,e),l===0&&od(e)}};var hd=J.version;if(hd!=="19.2.4")throw Error(m(527,hd,"19.2.4"));z.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(m(188)):(e=Object.keys(e).join(","),Error(m(268,e)));return e=E(t),e=e!==null?W(e):null,e=e===null?null:e.stateNode,e};var Vh={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:b,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yi.isDisabled&&Yi.supportsFiber)try{Ma=Yi.inject(Vh),tt=Yi}catch{}}return En.createRoot=function(e,t){if(!H(e))throw Error(m(299));var l=!1,a="",n=So,i=Eo,u=To;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=ld(e,1,!1,null,null,l,a,null,n,i,u,md),e[Ql]=t.current,qc(e),new ns(t)},En.hydrateRoot=function(e,t,l){if(!H(e))throw Error(m(299));var a=!1,n="",i=So,u=Eo,c=To,s=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.formState!==void 0&&(s=l.formState)),t=ld(e,1,!0,t,l??null,a,n,s,i,u,c,md),t.context=ad(null),l=t.current,a=ft(),a=Ji(a),n=nl(a),n.callback=null,il(l,n,a),l=a,t.current.lanes=l,Da(t,l),Dt(t),e[Ql]=t.current,qc(e),new qi(t)},En.version="19.2.4",En}var xd;function ly(){if(xd)return cs.exports;xd=1;function x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x)}catch(J){console.error(J)}}return x(),cs.exports=ty(),cs.exports}var ay=ly();const Sl={title:"Python for Gamers",description:"Learn Python by building awesome games — made for middle schoolers who love gaming!",chapters:[{id:1,title:"Welcome, Gamer!",lessons:[{id:"1-1",title:"Why Python + Games?",completed:!1,content:{description:"Discover how Python powers real games and why it's the perfect first language for future game developers!",sections:[{type:"text",content:`By the end of this lesson, you'll understand why Python is amazing for game development, write your first Python code, and see your output on screen.

Ever wondered how your favorite games are made? Behind every game — from Minecraft to Fortnite — there's **code** making everything work. The characters move because of code. Enemies attack because of code. Items drop because of code. And one of the best languages to start learning that code is **Python**.

Python is special because it reads almost like English. While other languages need weird symbols and brackets everywhere, Python keeps things clean and simple. That's why it's the #1 language taught in schools and the #1 language used by beginners worldwide. But don't let "beginner-friendly" fool you — Python is used by NASA, Google, Netflix, Instagram, and Spotify for real, production software.`},{type:"heading",level:2,content:"Games Made with Python"},{type:"list",items:["**Minecraft** — Uses Python for mods, education edition, and plugins!","**Battlefield 2** — Core game logic written in Python","**Eve Online** — Massive space MMO with Python backend","**Civilization IV** — AI and game logic powered by Python","**Frets on Fire** — Guitar Hero clone built entirely in Python","**Mount & Blade** — Module system uses Python scripting","**Toontown Online** — Disney MMO built with Python"]},{type:"tip",content:"Python is used by NASA to control Mars rovers, by Google to power their search engine, and by Netflix to recommend shows. Learning it doesn't just help with games — it opens doors to literally every tech career! 🚀"},{type:"heading",level:2,content:"Setting Up Python"},{type:"code",language:"text",filename:"setup_guide.txt",code:`Option 1: Replit (EASIEST — No Install!)
1. Go to replit.com
2. Create a free account
3. Click '+ Create Repl'
4. Choose 'Python'
5. Start coding in your browser! ✅

Option 2: Python.org (Local Install)
1. Go to python.org/downloads
2. Download Python 3.12+ (latest version)
3. Run installer — CHECK 'Add to PATH'! ✅
4. Open Terminal/Command Prompt
5. Type: python --version
6. Should show: Python 3.12.x

Option 3: VS Code (Professional Setup)
1. Install Python from python.org
2. Install VS Code from code.visualstudio.com
3. Install the 'Python' extension in VS Code
4. Create a new file: game.py
5. Write code and press F5 to run!`},{type:"heading",level:2,content:"Your First Python Code!"},{type:"text",content:"Let's write your first program. Every coder starts here — it's a tradition:"},{type:"code",language:"python",filename:"hello_gamer.py",code:`# Your first Python program!
# Lines starting with # are comments — notes for YOU

print("Hello, Gamer! 🎮")
print("Welcome to Python!")
print("Let's make some games!")

# print() shows text on the screen
# Text must be in quotes (single or double)

print('Single quotes work too!')
print("You can use emoji: 🎯 🏆 ⚔️ 🛡️")

# Try running this code and see what happens!`},{type:"heading",level:2,content:"Getting Player Input"},{type:"code",language:"python",filename:"input_example.py",code:`# input() lets the player type something
player_name = input("What's your gamer tag? ")
print(f"Welcome, {player_name}! Let's play! 🎮")

# f-strings (the f before the quotes) let you
# put variables inside curly braces {like_this}
# They're the easiest way to mix text and variables!

favorite_game = input("What's your favorite game? ")
print(f"{player_name} loves playing {favorite_game}!")
print(f"Let's build something even cooler! 🚀")`},{type:"warning",content:"Python is CASE SENSITIVE! `print()` works, but `Print()` or `PRINT()` will cause an error. Watch your capitalization!"},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Write a program that prints your name, age, and favorite game on separate lines.","**Exercise 2:** Use input() to ask for a player's name and favorite weapon, then print a message using both.","**Exercise 3:** Create a mini character creator that asks for name, class (warrior/mage/rogue), and prints a character summary.","**Exercise 4:** Print ASCII art using multiple print() statements (try making a sword or shield!).",'**Exercise 5:** Use \\n inside a print to make text on multiple lines: `print("Line 1\\nLine 2\\nLine 3")`']},{type:"checkpoint",content:"Write a program that asks for the player's name and favorite game, then prints a personalized welcome message using f-strings!"}]}},{id:"1-2",title:"Variables = Game Stats",completed:!1,content:{description:"Learn variables by thinking about them like character stats in your favorite RPG! Store health, mana, gold, and more.",sections:[{type:"text",content:`By the end of this lesson, you'll create and modify variables, understand data types, and use f-strings to display game information beautifully.

In every RPG, your character has **stats** — health points, mana, level, gold, experience. In Python, we store these values in **variables**. A variable is just a named container that holds data. You give it a name, put something inside, and use it whenever you need that data.

Variables are the single most important concept in programming. Master them and everything else becomes easier.`},{type:"heading",level:2,content:"Creating Variables"},{type:"code",language:"python",filename:"player_stats.py",code:`# Creating variables is simple: name = value
player_name = "DragonSlayer99"
health = 100
mana = 50
level = 1
gold = 25
is_alive = True

# Display with f-strings (the best way!)
print(f"⚔️ Character Sheet for {player_name}")
print(f"{'='*35}")
print(f"❤️  Health: {health}")
print(f"💙 Mana:   {mana}")
print(f"⭐ Level:  {level}")
print(f"💰 Gold:   {gold}")
print(f"🏃 Alive:  {is_alive}")

# Variables can change!
health = 75  # Took some damage
gold = gold + 10  # Found some gold!
level = level + 1  # Level up!

print(f"\\nAfter adventuring:")
print(f"❤️  Health: {health}")
print(f"💰 Gold:   {gold}")
print(f"⭐ Level:  {level}")`},{type:"heading",level:2,content:"Data Types — The Four Main Types"},{type:"code",language:"python",filename:"data_types.py",code:`# STRINGS — Text (always in quotes)
weapon_name = "Diamond Sword"
player_class = 'Warrior'  # single quotes work too
battle_cry = """For glory
and honor!"""  # triple quotes for multi-line

# INTEGERS — Whole numbers (no decimal point)
health = 100
damage = 25
coins = 0

# FLOATS — Decimal numbers
crit_chance = 0.15    # 15% chance
speed = 16.5
pi = 3.14159

# BOOLEANS — True or False (capital T and F!)
is_alive = True
has_key = False
can_fly = True

# Check what type something is:
print(type(weapon_name))  # <class 'str'>
print(type(health))       # <class 'int'>
print(type(crit_chance))  # <class 'float'>
print(type(is_alive))     # <class 'bool'>

# CONVERTING between types:
age_text = "15"           # This is a STRING, not a number!
age_number = int(age_text)  # Now it's an integer: 15
price = float("9.99")    # String to float: 9.99
text = str(100)           # Number to string: "100"`},{type:"tip",content:"Variable names can't have spaces! Use underscores instead: `player_health` not `player health`. Also, they can't start with numbers: `weapon1` works but `1weapon` doesn't."},{type:"heading",level:2,content:"Modifying Variables"},{type:"code",language:"python",filename:"modify_stats.py",code:`# Variables can change — that's what makes games dynamic!

health = 100
print(f"Starting HP: {health}")

# Regular update
health = health - 25  # Took 25 damage
print(f"After hit: {health}")

# Shorthand operators (same thing, less typing!)
health -= 10   # Same as: health = health - 10
print(f"After poison: {health}")

gold = 0
gold += 50     # Same as: gold = gold + 50
gold += 30     # Add 30 more
print(f"Gold: {gold}")

damage = 10
damage *= 2    # Same as: damage = damage * 2 (DOUBLE DAMAGE!)
print(f"Buffed damage: {damage}")

# All shorthand operators:
# +=  add         x += 5   →  x = x + 5
# -=  subtract    x -= 5   →  x = x - 5
# *=  multiply    x *= 2   →  x = x * 2
# /=  divide      x /= 2   →  x = x / 2
# **= power       x **= 2  →  x = x ** 2
# //= floor div   x //= 3  →  x = x // 3
# %=  remainder   x %= 3   →  x = x % 3`},{type:"heading",level:2,content:"Building a Character Creator"},{type:"code",language:"python",filename:"character_creator.py",code:`# A complete character creator!
print("⚔️ CHARACTER CREATOR ⚔️")
print("=" * 30)

# Get player info
name = input("Enter character name: ")
player_class = input("Choose class (Warrior/Mage/Rogue): ")

# Set stats based on class
if player_class.lower() == "warrior":
    health = 150
    mana = 30
    strength = 20
    intelligence = 5
    emoji = "⚔️"
elif player_class.lower() == "mage":
    health = 80
    mana = 150
    strength = 5
    intelligence = 25
    emoji = "🔮"
elif player_class.lower() == "rogue":
    health = 100
    mana = 60
    strength = 12
    intelligence = 12
    emoji = "🗡️"
else:
    health = 100
    mana = 50
    strength = 10
    intelligence = 10
    emoji = "🎮"

# Display character sheet
print(f"\\n{emoji} {name} the {player_class.title()}")
print(f"{'─' * 30}")
print(f"❤️  HP:           {health}")
print(f"💙 Mana:         {mana}")
print(f"💪 Strength:     {strength}")
print(f"🧠 Intelligence: {intelligence}")
print(f"\\n🎮 Adventure awaits!")`},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Create variables for a game weapon: name (str), damage (int), crit_chance (float), is_legendary (bool). Print them all with f-strings.","**Exercise 2:** Simulate combat: start with health=100, take 3 hits of 25 damage each using -=. Print health after each hit.","**Exercise 3:** Build a gold tracker: start at 0, add gold from 3 different sources, then spend some. Show the running total.","**Exercise 4:** Use input() to ask for a number, convert it to int(), double it, and print the result.","**Exercise 5:** Expand the character creator to include more classes and stats."]},{type:"quiz",question:"What type of variable is `is_alive = True`?",options:[{id:"a",text:"String"},{id:"b",text:"Integer"},{id:"c",text:"Float"},{id:"d",text:"Boolean"}],correct:"d",explanation:"True and False are Boolean values — perfect for yes/no or on/off situations like 'is the player alive?' Remember: True and False must be capitalized in Python!"}]}},{id:"1-3",title:"Math = Damage Calculations",completed:!1,content:{description:"Master Python math by building damage calculators, XP systems, and gold economies. Every number in a game is math in disguise!",sections:[{type:"text",content:`By the end of this lesson, you'll use all Python math operators, build damage calculation formulas, and create an XP leveling system.

Every game runs on math. When you hit an enemy, the game calculates damage using formulas. When you gain XP, math determines when you level up. When loot drops, math decides the rarity. Understanding Python math is understanding how games work under the hood.`},{type:"heading",level:2,content:"Python Math Operators"},{type:"code",language:"python",filename:"math_operators.py",code:`# All math operators you need for games!

# Basic operations
print(10 + 5)    # Addition: 15
print(10 - 5)    # Subtraction: 5
print(10 * 5)    # Multiplication: 50
print(10 / 3)    # Division: 3.333... (always gives float!)
print(10 // 3)   # Floor division: 3 (rounds DOWN to integer)
print(10 % 3)    # Modulo (remainder): 1
print(2 ** 10)   # Power (2^10): 1024

# Order of operations (PEMDAS!)
result = 10 + 5 * 2    # = 20, not 30! (* before +)
result = (10 + 5) * 2  # = 30 (parentheses first!)

# Practical game examples:
base_damage = 20
weapon_bonus = 15
crit_multiplier = 2
armor = 10

total_damage = (base_damage + weapon_bonus) * crit_multiplier - armor
print(f"💥 Total damage: {total_damage}")  # (20+15)*2-10 = 60`},{type:"heading",level:2,content:"Damage Calculator"},{type:"code",language:"python",filename:"damage_calc.py",code:`# Complete damage calculation system! ⚔️

# Player stats
base_damage = 20
weapon_bonus = 15
strength = 12
crit_multiplier = 2.5

# Enemy stats
enemy_armor = 8
enemy_health = 100

# Calculate damage
raw_damage = base_damage + weapon_bonus + (strength * 0.5)
damage_after_armor = max(raw_damage - enemy_armor, 1)  # min 1 damage!

print(f"⚔️ COMBAT LOG")
print(f"{'='*30}")
print(f"Raw damage:     {raw_damage}")
print(f"Enemy armor:    -{enemy_armor}")
print(f"Final damage:   {damage_after_armor}")

# Critical hit!
import random
crit_roll = random.random()  # 0.0 to 1.0
if crit_roll < 0.25:  # 25% crit chance
    damage_after_armor *= crit_multiplier
    print(f"💥 CRITICAL HIT! x{crit_multiplier}")
    print(f"Critical damage: {damage_after_armor}")

# Apply damage
enemy_health -= damage_after_armor
print(f"\\nEnemy HP: {enemy_health}/{100}")

if enemy_health <= 0:
    print("🎉 Enemy defeated!")
else:
    print(f"Enemy has {enemy_health} HP remaining")`},{type:"heading",level:2,content:"XP and Leveling System"},{type:"code",language:"python",filename:"xp_system.py",code:`# Experience and leveling system! 📈

current_xp = 0
level = 1
xp_per_kill = 25
kills = 12

# Calculate XP gained
xp_gained = xp_per_kill * kills
current_xp += xp_gained
print(f"XP gained: +{xp_gained}")
print(f"Total XP: {current_xp}")

# Leveling formula: 100 XP per level
# Level = XP // 100 + 1
level = current_xp // 100 + 1
xp_in_current_level = current_xp % 100
xp_needed = 100 - xp_in_current_level

print(f"\\n⭐ Level: {level}")
print(f"📊 Progress: {xp_in_current_level}/100 XP")
print(f"📈 Need {xp_needed} more XP to level up!")

# XP bar visualization!
bar_length = 20
filled = int((xp_in_current_level / 100) * bar_length)
empty = bar_length - filled
bar = "█" * filled + "░" * empty
print(f"[{bar}] {xp_in_current_level}%")`},{type:"tip",content:"The `%` (modulo) operator gives you the remainder after division. It's incredibly useful! Use it for: XP to next level (xp % 100), checking even/odd (num % 2), turn-based games (turn % num_players), and repeating patterns."},{type:"heading",level:2,content:"Useful Math Functions"},{type:"code",language:"python",filename:"math_functions.py",code:`import math
import random

# Built-in functions (no import needed)
print(abs(-15))        # Absolute value: 15
print(round(3.7))      # Round: 4
print(round(3.14159, 2))  # Round to 2 decimals: 3.14
print(max(5, 10, 3))   # Biggest: 10
print(min(5, 10, 3))   # Smallest: 3

# math module
print(math.floor(3.9))  # Round DOWN: 3
print(math.ceil(3.1))   # Round UP: 4
print(math.sqrt(64))    # Square root: 8.0

# random module (ESSENTIAL for games!)
print(random.randint(1, 6))     # Roll a d6: 1-6
print(random.randint(1, 20))    # Roll a d20: 1-20
print(random.random())          # Float 0.0 to 1.0
print(random.choice(["Sword", "Shield", "Potion"]))  # Pick random item
print(random.uniform(0.5, 2.0))  # Random float in range`},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Build a damage calculator that takes base_damage, weapon_bonus, and enemy_armor, then calculates final damage (minimum 1).","**Exercise 2:** Create an XP system: give the player 25 XP per kill for a random number of kills (1-20). Show their level and progress.","**Exercise 3:** Simulate rolling two 6-sided dice. Print each roll and the total. Check if it's doubles!","**Exercise 4:** Build a gold economy: start with 100 gold, buy items of random prices (10-50), show remaining gold after each purchase.","**Exercise 5:** Create a critical hit system: 20% chance for 2x damage, 5% chance for 3x damage. Test it 10 times."]},{type:"checkpoint",content:"Create a complete damage formula that includes base damage, weapon bonus, strength scaling, armor reduction, and a random critical hit chance. Print a formatted combat log!"}]}}]},{id:2,title:"Making Decisions",lessons:[{id:"2-1",title:"If Statements = Game Logic",completed:!1,content:{description:"Master if/elif/else by coding game decisions — health checks, loot drops, level requirements, and combat outcomes!",sections:[{type:"text",content:`By the end of this lesson, you'll write if/elif/else chains, use all comparison operators, and build real game logic like loot drop systems and health checks.

Games are FULL of decisions: Is the player's health zero? Did they collect the key? Can they afford the item? Is this enemy stronger than them? ALL of these are **if statements** — the code checks a condition and does different things based on whether it's true or false.

Without if statements, every game would play exactly the same way every time. With them, games become dynamic, unpredictable, and fun.`},{type:"heading",level:2,content:"Basic If Statement"},{type:"code",language:"python",filename:"if_basics.py",code:`# If statement — do something ONLY when a condition is true
health = 25

if health < 50:
    print("⚠️ Low health! Find a potion!")

# If health were 75, NOTHING would print
# because 75 < 50 is False

# If-Else — two different paths
health = 80
if health > 50:
    print("💪 You're doing great!")
else:
    print("⚠️ Watch your health!")

# If-Elif-Else — multiple paths
health = 25
if health > 75:
    print("💚 Healthy!")
elif health > 50:
    print("💛 Okay, but be careful")
elif health > 25:
    print("🟠 Getting dangerous...")
elif health > 0:
    print("🔴 CRITICAL! Find healing NOW!")
else:
    print("💀 You are dead!")`},{type:"warning",content:"Python uses INDENTATION (4 spaces) to define what's inside an if block. This isn't optional — it's how Python works! If your indentation is wrong, you'll get an IndentationError."},{type:"heading",level:2,content:"Comparison Operators"},{type:"code",language:"python",filename:"comparisons.py",code:`# All comparison operators
health = 100
level = 15
required_level = 10

print(health == 100)    # Equal to: True
print(health != 50)     # Not equal: True
print(health > 50)      # Greater than: True
print(health < 150)     # Less than: True
print(health >= 100)    # Greater or equal: True
print(level <= 20)      # Less or equal: True

# String comparisons
player_class = "mage"
print(player_class == "mage")     # True
print(player_class == "Mage")     # False! (case matters)
print(player_class != "warrior")  # True

# 'in' operator — check if something is IN a collection
inventory = ["Sword", "Shield", "Potion"]
print("Sword" in inventory)       # True
print("Bow" in inventory)         # False
print("Bow" not in inventory)     # True`},{type:"heading",level:2,content:"Loot Drop System"},{type:"code",language:"python",filename:"loot_system.py",code:`import random

# Random loot drop based on rarity! 🎁
drop_chance = random.randint(1, 100)
print(f"🎲 Drop roll: {drop_chance}")

if drop_chance <= 2:
    print("✨ MYTHIC DROP! Dragon's Breath Sword!")
    rarity = "Mythic"
elif drop_chance <= 8:
    print("🌟 LEGENDARY! Enchanted Diamond Armor!")
    rarity = "Legendary"
elif drop_chance <= 20:
    print("💜 EPIC! Shadow Cloak!")
    rarity = "Epic"
elif drop_chance <= 45:
    print("💙 RARE! Steel Longsword!")
    rarity = "Rare"
elif drop_chance <= 75:
    print("💚 UNCOMMON! Leather Boots")
    rarity = "Uncommon"
else:
    print("⬜ COMMON! Wooden Stick")
    rarity = "Common"

print(f"\\nItem rarity: {rarity}")
print(f"Better luck next time!" if rarity == "Common" else "Nice drop! 🎉")`},{type:"heading",level:2,content:"Combining Conditions with and, or, not"},{type:"code",language:"python",filename:"combined_conditions.py",code:`# AND — ALL conditions must be true
gold = 150
level = 10
item_price = 100
required_level = 5

if gold >= item_price and level >= required_level:
    print("✅ Purchase successful!")
    gold -= item_price
else:
    if gold < item_price:
        print(f"❌ Need {item_price - gold} more gold!")
    if level < required_level:
        print(f"❌ Need level {required_level} (you're {level})")

# OR — at least ONE must be true
is_premium = False
level = 25

if is_premium or level >= 20:
    print("🎁 Bonus content unlocked!")

# NOT — flips True/False
is_banned = False
if not is_banned:
    print("✅ Welcome to the server!")

# Complex combinations
has_key = True
has_lockpick = False
strength = 18

if has_key or has_lockpick or strength >= 20:
    print("🚪 Door opened!")
else:
    print("🔒 Door is locked. Find a key, lockpick, or get stronger!")`},{type:"tip",content:"Use parentheses to make complex conditions clearer! `if (gold >= price and level >= req) or is_premium:` is much easier to read and less error-prone."},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Write a health checker that prints different status messages for health ranges: 76-100, 51-75, 26-50, 1-25, 0.","**Exercise 2:** Create a loot drop system with at least 6 rarity tiers using random numbers.","**Exercise 3:** Build a shop that checks both gold AND level before allowing a purchase.","**Exercise 4:** Write a dungeon door system: player needs (key AND level 10) OR (lockpick AND level 15) OR (strength >= 20).","**Exercise 5:** Create a grade calculator for a 'Combat Academy' that gives S/A/B/C/D/F ranks based on a score."]},{type:"quiz",question:`What prints if health = 75?

if health > 80:
    print('A')
elif health > 50:
    print('B')
else:
    print('C')`,options:[{id:"a",text:"A"},{id:"b",text:"B"},{id:"c",text:"C"},{id:"d",text:"B and C"}],correct:"b",explanation:"75 is NOT > 80 (skip A). But 75 IS > 50, so B prints. Python runs the FIRST true condition and skips the rest."}]}},{id:"2-2",title:"Match Your Way — Pattern Matching",completed:!1,content:{description:"Clean up messy if-chains with Python's match statement, nested conditions, and ternary expressions for concise game logic!",sections:[{type:"text",content:`By the end of this lesson, you'll use match/case for clean multi-path logic, ternary expressions for quick conditions, and nested ifs for complex game rules.

As your games get more complex, your if/elif chains get longer. Python 3.10 introduced **match/case** (similar to switch statements in other languages) to make multi-option code cleaner. Combined with ternary expressions, you'll write more elegant game logic.`},{type:"heading",level:2,content:"Match/Case (Python 3.10+)"},{type:"code",language:"python",filename:"match_case.py",code:`# Match/case — clean multi-option logic
player_class = "mage"

match player_class:
    case "warrior":
        weapon = "Greatsword"
        armor = "Plate"
        print(f"⚔️ Warrior: {weapon} + {armor}")
    case "mage":
        weapon = "Staff"
        armor = "Robes"
        print(f"🔮 Mage: {weapon} + {armor}")
    case "rogue":
        weapon = "Daggers"
        armor = "Leather"
        print(f"🗡️ Rogue: {weapon} + {armor}")
    case "ranger":
        weapon = "Longbow"
        armor = "Chainmail"
        print(f"🏹 Ranger: {weapon} + {armor}")
    case _:  # Default case (like 'else')
        weapon = "Fists"
        armor = "Clothes"
        print(f"🤷 Unknown class: {weapon} + {armor}")`},{type:"heading",level:2,content:"Ternary Expressions (One-Line If)"},{type:"code",language:"python",filename:"ternary.py",code:`# Normal if/else (3 lines):
health = 30
if health > 50:
    status = "Healthy"
else:
    status = "Wounded"

# Ternary expression (1 line — same result!):
status = "Healthy" if health > 50 else "Wounded"
print(f"Status: {status}")

# Great for game messages:
is_alive = health > 0
result = "Victory! 🎉" if is_alive else "Defeat... 💀"
print(result)

# Damage text
damage = 45
damage_text = "CRITICAL!" if damage > 40 else "Normal hit"
print(f"💥 {damage} damage — {damage_text}")

# Even nested (use sparingly — can get hard to read!)
rarity = "Legendary" if random.random() < 0.05 else "Rare" if random.random() < 0.2 else "Common"`},{type:"heading",level:2,content:"Nested If Statements"},{type:"code",language:"python",filename:"nested_ifs.py",code:`# Sometimes you need ifs INSIDE ifs
player_class = "mage"
level = 15
has_spell_book = True

print(f"🎮 Checking abilities for Level {level} {player_class}...")

if player_class == "mage":
    print("🔮 You are a mage!")
    
    if level >= 10:
        print("  ✅ Fireball unlocked!")
        
        if level >= 20:
            print("  ✅ Meteor Storm unlocked!")
        else:
            print(f"  🔒 Meteor Storm at level 20 (need {20 - level} more)")
        
        if has_spell_book:
            print("  ✅ Bonus: Ancient Spells available!")
    else:
        print(f"  🔒 Fireball unlocks at level 10 (need {10 - level} more)")

elif player_class == "warrior":
    print("⚔️ You are a warrior!")
    if level >= 5:
        print("  ✅ Shield Bash unlocked!")
    if level >= 15:
        print("  ✅ Whirlwind Attack unlocked!")`},{type:"tip",content:"Don't nest more than 3 levels deep! If you find yourself writing if inside if inside if inside if, refactor into functions instead. Deep nesting makes code hard to read and maintain."},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Use match/case to assign starting stats based on 5 different character classes.","**Exercise 2:** Convert 5 if/else blocks into ternary expressions for status messages.","**Exercise 3:** Build a skill tree checker using nested ifs: class → level → has prerequisite item.","**Exercise 4:** Create a quest system: different dialogue based on player's class, level, AND quest progress.","**Exercise 5:** Build an item comparison system: check two items' stats and print which is better and why."]},{type:"checkpoint",content:"Create a character ability system that uses match/case for class selection, nested ifs for level requirements, and ternary expressions for status messages."}]}}]},{id:3,title:"Loops = Repeat Actions",lessons:[{id:"3-1",title:"For Loops = Farming XP",completed:!1,content:{description:"Master for loops by farming enemies, processing inventories, and automating repetitive game tasks!",sections:[{type:"text",content:`By the end of this lesson, you'll use for loops with range(), iterate over lists, use enumerate(), and build automated game systems.

Ever grinded enemies in a game to level up? Kill, collect XP, repeat. Kill, collect XP, repeat. That's a **loop** — doing the same action over and over. In code, loops save you from writing the same thing hundreds of times. Instead of 50 lines to fight 50 enemies, you write 5 lines inside a loop.`},{type:"heading",level:2,content:"Basic For Loop with range()"},{type:"code",language:"python",filename:"for_basics.py",code:`# Farming enemies for XP! 👾
total_xp = 0
xp_per_enemy = 25

print("⚔️ Starting the grind!")
for enemy_num in range(1, 6):  # 1 to 5
    total_xp += xp_per_enemy
    print(f"  Enemy {enemy_num} defeated! +{xp_per_enemy} XP (Total: {total_xp})")

print(f"\\n🎉 Grind complete! Total XP: {total_xp}")

# How range() works:
print("\\nrange() examples:")
for i in range(5):        # 0, 1, 2, 3, 4 (5 numbers starting from 0)
    print(i, end=" ")
print()

for i in range(1, 6):     # 1, 2, 3, 4, 5 (start to stop-1)
    print(i, end=" ")
print()

for i in range(0, 10, 2): # 0, 2, 4, 6, 8 (step by 2)
    print(i, end=" ")
print()

for i in range(5, 0, -1): # 5, 4, 3, 2, 1 (countdown!)
    print(i, end=" ")
print("Go!")`},{type:"heading",level:2,content:"Looping Through Lists"},{type:"code",language:"python",filename:"list_loops.py",code:`# Loop through inventory! 🎒
inventory = ["Sword", "Shield", "Potion", "Key", "Map"]

print("📦 Your inventory:")
for item in inventory:
    print(f"  • {item}")

print(f"\\nTotal items: {len(inventory)}")

# With index numbers using enumerate
print("\\n📦 Inventory (numbered):")
for i, item in enumerate(inventory, 1):  # start counting from 1
    print(f"  {i}. {item}")

# Processing enemy list
enemies = [
    {"name": "Goblin", "hp": 30, "xp": 15},
    {"name": "Orc", "hp": 60, "xp": 30},
    {"name": "Dragon", "hp": 200, "xp": 100},
]

print("\\n👾 Enemies to fight:")
for enemy in enemies:
    print(f"  {enemy['name']}: {enemy['hp']} HP (worth {enemy['xp']} XP)")`},{type:"heading",level:2,content:"Building a Wave Defense Game"},{type:"code",language:"python",filename:"wave_defense.py",code:`import random

# Wave defense simulator! 🏰
player_hp = 100
player_damage = 20
total_kills = 0
total_gold = 0

print("🏰 WAVE DEFENSE!")
print("=" * 30)

for wave in range(1, 4):  # 3 waves
    enemies_in_wave = wave * 3  # More enemies each wave
    print(f"\\n⚔️ WAVE {wave} — {enemies_in_wave} enemies incoming!")
    
    for enemy_num in range(1, enemies_in_wave + 1):
        # Random enemy
        enemy_hp = random.randint(20, 40) + (wave * 10)
        enemy_damage = random.randint(5, 15) + (wave * 3)
        
        # Simple combat
        while enemy_hp > 0 and player_hp > 0:
            enemy_hp -= player_damage
            if enemy_hp > 0:
                player_hp -= enemy_damage
        
        if player_hp <= 0:
            print(f"  💀 Defeated on wave {wave}, enemy {enemy_num}!")
            break
        
        total_kills += 1
        gold_earned = random.randint(5, 15) * wave
        total_gold += gold_earned
        print(f"  ✅ Enemy {enemy_num} down! +{gold_earned}g | HP: {player_hp}")
    
    if player_hp <= 0:
        break
    
    # Heal between waves
    heal = 30
    player_hp = min(player_hp + heal, 100)
    print(f"  💚 Healed +{heal}! HP: {player_hp}")

print(f"\\n{'='*30}")
print(f"🏆 Results: {total_kills} kills, {total_gold} gold")
print(f"{'Victory! 🎉' if player_hp > 0 else 'Defeat... 💀'}")`},{type:"tip",content:'The `end=" "` parameter in print() prevents the newline, so things print on the same line. Great for progress bars and compact displays!'},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Create a countdown from 10 to 1, then print 'GAME START!' using range() with a negative step.","**Exercise 2:** Build an enemy farming loop: defeat 10 enemies, each gives random XP (10-30). Show running total.","**Exercise 3:** Loop through an inventory list and print each item with its index number.","**Exercise 4:** Create a dice roller that rolls a d20 ten times and finds the highest roll.","**Exercise 5:** Expand the wave defense game to include different enemy types."]},{type:"quiz",question:`How many times does this loop run?

for i in range(3):
    print(i)`,options:[{id:"a",text:"2 times"},{id:"b",text:"3 times"},{id:"c",text:"4 times"},{id:"d",text:"Infinite times"}],correct:"b",explanation:"range(3) gives 0, 1, 2 — that's 3 numbers, so the loop runs 3 times! Remember: range(n) gives n numbers starting from 0."}]}},{id:"3-2",title:"While Loops = The Game Loop",completed:!1,content:{description:"Master while loops — the foundation of every game's main loop! Build interactive game loops with player input and dynamic state.",sections:[{type:"text",content:`By the end of this lesson, you'll build while loops for game loops, use break and continue for flow control, and create interactive text-based games.

Every video game has a **main loop** — code that runs continuously, checking for input, updating the game state, and rendering the screen. In a text-based game, our main loop asks for player input, processes it, and shows the result. This is the **game loop** pattern, and it uses while loops.`},{type:"heading",level:2,content:"While Loop Basics"},{type:"code",language:"python",filename:"while_basics.py",code:`# While loop — runs AS LONG AS condition is True
health = 100
turn = 0
damage_per_turn = 15

print("⚔️ Battle Simulation!")
while health > 0:
    turn += 1
    health -= damage_per_turn
    health = max(health, 0)  # Don't go below 0
    
    bar_length = 20
    filled = int((health / 100) * bar_length)
    bar = "█" * filled + "░" * (bar_length - filled)
    print(f"Turn {turn}: [{bar}] {health} HP")

print(f"💀 Defeated after {turn} turns!")`},{type:"heading",level:2,content:"Break and Continue"},{type:"code",language:"python",filename:"break_continue.py",code:`# BREAK — escape the loop immediately!
print("🔍 Searching for treasure...")
rooms = ["empty", "monster", "trap", "TREASURE", "exit"]

for room in rooms:
    print(f"  Entering: {room}")
    if room == "TREASURE":
        print("  🎉 Found the treasure!")
        break  # Stop searching!
# Doesn't check "exit" because break ended the loop

print()

# CONTINUE — skip to the next iteration
print("⚔️ Fighting enemies (skip shielded ones)...")
enemies = ["goblin", "SHIELDED_ORC", "skeleton", "SHIELDED_KNIGHT", "dragon"]

for enemy in enemies:
    if enemy.startswith("SHIELDED"):
        print(f"  🛡️ {enemy} — can't attack, skipping...")
        continue  # Skip to next enemy
    print(f"  ⚔️ Attacked {enemy}!")
    
print()

# WHILE with break — common game pattern
import random
attempts = 0
while True:  # Infinite loop
    attempts += 1
    roll = random.randint(1, 20)
    print(f"  🎲 Roll #{attempts}: {roll}")
    if roll == 20:
        print(f"  🎉 Natural 20 after {attempts} rolls!")
        break  # Exit the infinite loop`},{type:"warning",content:"While loops can run forever if the condition never becomes False! Always make sure something inside the loop eventually changes the condition, or use 'break' to exit. An infinite loop will freeze your program!"},{type:"heading",level:2,content:"Interactive Game Loop"},{type:"code",language:"python",filename:"game_loop.py",code:`import random

# Mini RPG Game Loop! 🎮
player_hp = 100
player_max_hp = 100
player_attack = 15
potions = 3
gold = 0
monsters_killed = 0

print("🏰 DUNGEON CRAWLER!")
print("Commands: fight, heal, stats, flee")
print("=" * 30)

game_running = True
while game_running:
    action = input("\\n> What do you do? ").lower().strip()
    
    if action == "fight":
        # Generate random monster
        monster_names = ["Goblin", "Skeleton", "Orc", "Bat", "Spider"]
        monster = random.choice(monster_names)
        monster_hp = random.randint(20, 50)
        monster_atk = random.randint(5, 15)
        
        print(f"\\n⚔️ A {monster} appears! (HP: {monster_hp})")
        
        while monster_hp > 0 and player_hp > 0:
            # Player attacks
            dmg = random.randint(10, player_attack)
            monster_hp -= dmg
            print(f"  You hit {monster} for {dmg}! (Monster HP: {max(0, monster_hp)})")
            
            if monster_hp <= 0:
                loot = random.randint(5, 20)
                gold += loot
                monsters_killed += 1
                print(f"  🎉 {monster} defeated! +{loot} gold!")
                break
            
            # Monster attacks
            dmg = random.randint(3, monster_atk)
            player_hp -= dmg
            print(f"  {monster} hits you for {dmg}! (Your HP: {player_hp})")
            
            if player_hp <= 0:
                print("  💀 You have been defeated!")
                game_running = False
    
    elif action == "heal":
        if potions > 0:
            heal_amount = 30
            player_hp = min(player_hp + heal_amount, player_max_hp)
            potions -= 1
            print(f"🧪 Used potion! +{heal_amount} HP ({player_hp}/{player_max_hp})")
            print(f"   Potions remaining: {potions}")
        else:
            print("❌ No potions left!")
    
    elif action == "stats":
        print(f"\\n📊 STATS")
        print(f"  ❤️  HP: {player_hp}/{player_max_hp}")
        print(f"  🧪 Potions: {potions}")
        print(f"  💰 Gold: {gold}")
        print(f"  💀 Kills: {monsters_killed}")
    
    elif action == "flee":
        print("🏃 You flee the dungeon!")
        game_running = False
    
    else:
        print("❓ Unknown command! Try: fight, heal, stats, flee")

print(f"\\n{'='*30}")
print(f"🏆 Adventure Over!")
print(f"Monsters killed: {monsters_killed}")
print(f"Gold earned: {gold}")`},{type:"tip",content:"Use `.lower().strip()` on input to handle player typos: 'Fight', 'FIGHT', ' fight ' all become 'fight'. Makes your game much more forgiving!"},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Create a guessing game: computer picks 1-100, player guesses until correct. Count attempts.","**Exercise 2:** Build a battle loop where player and enemy take turns attacking until one dies.","**Exercise 3:** Create a shop loop: show items, let player buy/sell, update gold, type 'exit' to leave.","**Exercise 4:** Build a countdown timer that prints 10...9...8... then 'GAME START!'","**Exercise 5:** Expand the dungeon crawler with a shop, leveling, and stronger enemies over time."]},{type:"checkpoint",content:"Build an interactive game loop with at least 3 commands (fight, heal, quit). The game should continue until the player dies or chooses to quit."}]}}]},{id:4,title:"Lists & Inventories",lessons:[{id:"4-1",title:"Inventory System",completed:!1,content:{description:"Master Python lists by building game inventories — add items, remove them, search, sort, and manage collections like a pro!",sections:[{type:"text",content:`By the end of this lesson, you'll create lists, add/remove items, search collections, slice lists, and build a complete inventory management system.

Your game inventory is a **list** — a collection of items stored in order. Lists are one of Python's most powerful features. They let you store multiple values in a single variable, access them by position, add new ones, remove old ones, and process them all with loops.`},{type:"heading",level:2,content:"Creating and Accessing Lists"},{type:"code",language:"python",filename:"list_basics.py",code:`# Creating lists
inventory = ["Sword", "Shield", "Potion", "Gold Key"]
damage_values = [15, 25, 40, 60, 100]
mixed = ["Sword", 25, True, 3.14]  # Can mix types!
empty = []  # Empty list

# Accessing by index (starts at 0!)
print(inventory[0])    # First: "Sword"
print(inventory[1])    # Second: "Shield"
print(inventory[-1])   # Last: "Gold Key"
print(inventory[-2])   # Second-to-last: "Potion"

# Length
print(f"Items: {len(inventory)}")  # 4

# Check membership
if "Gold Key" in inventory:
    print("🔑 You can open the gold door!")
if "Bow" not in inventory:
    print("🚫 You don't have a bow")

# Slicing (grabbing portions)
print(inventory[0:2])   # First 2: ["Sword", "Shield"]
print(inventory[:3])    # First 3 (shortcut)
print(inventory[2:])    # From index 2 onward
print(inventory[::-1])  # Reversed!`},{type:"heading",level:2,content:"Adding and Removing Items"},{type:"code",language:"python",filename:"list_management.py",code:`inventory = ["Sword", "Shield"]
print(f"Start: {inventory}")

# ADDING items
inventory.append("Potion")         # Add to end
print(f"Found potion: {inventory}")

inventory.insert(0, "Helmet")      # Add at specific position
print(f"Equipped helmet: {inventory}")

# REMOVING items
inventory.remove("Potion")         # Remove by name (first match)
print(f"Used potion: {inventory}")

last_item = inventory.pop()        # Remove and return last item
print(f"Dropped {last_item}: {inventory}")

first_item = inventory.pop(0)      # Remove at specific index
print(f"Sold {first_item}: {inventory}")

# SORTING
weapons = ["Greatsword", "Dagger", "Bow", "Staff", "Axe"]
weapons.sort()                     # Alphabetical (modifies original!)
print(f"Sorted: {weapons}")

weapons.sort(reverse=True)         # Reverse alphabetical
print(f"Reverse: {weapons}")

# COUNTING and FINDING
loot = ["Gold", "Gold", "Gem", "Gold", "Potion"]
print(f"Gold count: {loot.count('Gold')}")   # 3
print(f"Gem position: {loot.index('Gem')}")  # 2`},{type:"heading",level:2,content:"Complete Inventory System"},{type:"code",language:"python",filename:"inventory_system.py",code:`# Full inventory management system! 🎒

MAX_INVENTORY_SIZE = 10
inventory = ["Iron Sword", "Leather Armor", "Health Potion", "Health Potion"]

def show_inventory():
    print(f"\\n🎒 INVENTORY ({len(inventory)}/{MAX_INVENTORY_SIZE})")
    print("-" * 30)
    if not inventory:
        print("  (empty)")
    for i, item in enumerate(inventory, 1):
        print(f"  {i}. {item}")
    print("-" * 30)

def add_item(item_name):
    if len(inventory) >= MAX_INVENTORY_SIZE:
        print(f"❌ Inventory full! Drop something first.")
        return False
    inventory.append(item_name)
    print(f"✅ Added {item_name}!")
    return True

def remove_item(item_name):
    if item_name in inventory:
        inventory.remove(item_name)
        print(f"🗑️ Removed {item_name}")
        return True
    print(f"❌ {item_name} not in inventory!")
    return False

def use_item(item_name):
    if item_name not in inventory:
        print(f"❌ You don't have {item_name}!")
        return
    
    if "Potion" in item_name:
        print(f"🧪 Used {item_name}! Feel refreshed!")
        inventory.remove(item_name)
    elif "Scroll" in item_name:
        print(f"📜 Read {item_name}! Learned new knowledge!")
        inventory.remove(item_name)
    else:
        print(f"❓ Can't use {item_name} like that!")

# Test the system!
show_inventory()
add_item("Magic Scroll")
add_item("Diamond Ring")
use_item("Health Potion")
show_inventory()`},{type:"tip",content:"Lists start counting at 0, not 1! So `inventory[0]` is the FIRST item. This is called 'zero-based indexing' and it's used in almost every programming language."},{type:"heading",level:2,content:"List Comprehensions (Power Move!)"},{type:"code",language:"python",filename:"comprehensions.py",code:`# List comprehensions create new lists in one line! 🚀
import random

# Generate 10 random damage values
damages = [random.randint(10, 50) for _ in range(10)]
print(f"Damage rolls: {damages}")

# Filter — keep only high hits
big_hits = [d for d in damages if d > 30]
print(f"Big hits (>30): {big_hits}")

# Transform — double all values
doubled = [d * 2 for d in damages]
print(f"With buff (2x): {doubled}")

# Generate enemy names
enemy_names = [f"Goblin_{i}" for i in range(1, 6)]
print(f"Enemies: {enemy_names}")

# Filter inventory
all_items = ["Iron Sword", "Broken Shield", "Health Potion", "Broken Armor", "Gold Ring"]
usable = [item for item in all_items if "Broken" not in item]
print(f"Usable items: {usable}")`},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Create an inventory list with 5 items. Practice append, remove, pop, and insert.","**Exercise 2:** Build an inventory system with max capacity. Prevent adding items when full.","**Exercise 3:** Create a loot generator: generate 10 random items, filter out 'Broken' ones, keep the good stuff.","**Exercise 4:** Build a party system: add/remove party members, show the roster, limit to 4 members max.","**Exercise 5:** Sort a list of enemy dictionaries by HP (hint: use key= parameter in sort)."]},{type:"quiz",question:"What does `inventory[-1]` return?",options:[{id:"a",text:"The first item"},{id:"b",text:"The last item"},{id:"c",text:"An error"},{id:"d",text:"Nothing"}],correct:"b",explanation:"Negative indices count from the end! -1 is the last item, -2 is second-to-last, etc. It's a Python shortcut to quickly access the end of a list."}]}},{id:"4-2",title:"Dictionaries = Game Data",completed:!1,content:{description:"Store complex game data with dictionaries — character sheets, item databases, enemy stats, and more!",sections:[{type:"text",content:`By the end of this lesson, you'll create dictionaries for game data, nest them for complex structures, and build item databases and character systems.

Lists are great for ordered collections, but what if you want to store data with **names** instead of numbers? That's what **dictionaries** are for. Instead of inventory[0] for your first item, you can use player['health'] to get exactly what you want by name.`},{type:"heading",level:2,content:"Dictionary Basics"},{type:"code",language:"python",filename:"dict_basics.py",code:`# Dictionaries use key: value pairs
player = {
    "name": "DragonSlayer99",
    "class": "Warrior",
    "level": 15,
    "health": 150,
    "mana": 30,
    "strength": 25,
    "defense": 20,
    "gold": 500,
    "is_alive": True
}

# Access values by key
print(f"Player: {player['name']}")
print(f"Class: {player['class']}")
print(f"❤️ HP: {player['health']}")
print(f"💪 STR: {player['strength']}")

# Modify values
player["health"] -= 30  # Take damage
player["gold"] += 100   # Find gold
player["level"] += 1    # Level up!

# Add new keys
player["mana_regen"] = 5
player["equipped_weapon"] = "Greatsword"

# Safe access with .get() — returns default if key missing
speed = player.get("speed", 10)  # Returns 10 if "speed" doesn't exist
print(f"Speed: {speed}")  # 10

# Loop through all stats
print(f"\\n📊 Full Character Sheet:")
for stat, value in player.items():
    print(f"  {stat}: {value}")`},{type:"heading",level:2,content:"Item Database"},{type:"code",language:"python",filename:"item_database.py",code:`# Complete item database! 🗡️
items_db = {
    "iron_sword": {
        "name": "Iron Sword",
        "type": "weapon",
        "damage": 25,
        "price": 100,
        "rarity": "Common",
        "emoji": "⚔️"
    },
    "fire_staff": {
        "name": "Fire Staff",
        "type": "weapon",
        "damage": 35,
        "price": 250,
        "rarity": "Rare",
        "emoji": "🔥"
    },
    "health_potion": {
        "name": "Health Potion",
        "type": "consumable",
        "heal": 50,
        "price": 25,
        "rarity": "Common",
        "emoji": "🧪"
    },
    "diamond_armor": {
        "name": "Diamond Armor",
        "type": "armor",
        "defense": 40,
        "price": 500,
        "rarity": "Epic",
        "emoji": "💎"
    }
}

# Look up an item
item_id = "fire_staff"
item = items_db[item_id]
print(f"{item['emoji']} {item['name']}")
print(f"  Type: {item['type']}")
print(f"  Damage: {item['damage']}")
print(f"  Price: {item['price']} gold")
print(f"  Rarity: {item['rarity']}")

# List all weapons
print("\\n⚔️ Available Weapons:")
for item_id, item_data in items_db.items():
    if item_data["type"] == "weapon":
        print(f"  {item_data['emoji']} {item_data['name']}: {item_data['damage']} DMG — {item_data['price']}g")`},{type:"heading",level:2,content:"Combining Lists and Dictionaries"},{type:"code",language:"python",filename:"combined_structures.py",code:`# Party system — list of character dictionaries! 🎭
party = [
    {"name": "Hero", "class": "Warrior", "hp": 150, "atk": 25},
    {"name": "Luna", "class": "Mage", "hp": 80, "atk": 40},
    {"name": "Shadow", "class": "Rogue", "hp": 100, "atk": 30},
]

print("🎭 YOUR PARTY:")
for member in party:
    print(f"  {member['name']} the {member['class']}: {member['hp']} HP, {member['atk']} ATK")

# Find the strongest member
strongest = max(party, key=lambda m: m["atk"])
print(f"\\n💪 Strongest: {strongest['name']} ({strongest['atk']} ATK)")

# Total party HP
total_hp = sum(member["hp"] for member in party)
print(f"❤️ Total party HP: {total_hp}")`},{type:"tip",content:"Use `.get('key', default)` instead of `dict['key']` when a key might not exist. `player.get('mana', 0)` safely returns 0 if 'mana' isn't set, while `player['mana']` would crash with a KeyError!"},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Create a player dictionary with at least 8 stats. Print a formatted character sheet.","**Exercise 2:** Build an item database with 6+ items of different types. Write a function to look up items by ID.","**Exercise 3:** Create a party system with 3 characters. Find the one with the highest HP.","**Exercise 4:** Build a shop that uses the item database to show prices and process purchases.","**Exercise 5:** Create a battle system using dictionaries for both player and enemy stats."]},{type:"quiz",question:"How do you access the player's health? player = {'name': 'Hero', 'health': 100}",options:[{id:"a",text:"player.health"},{id:"b",text:"player['health']"},{id:"c",text:"player[1]"},{id:"d",text:"player(health)"}],correct:"b",explanation:"Dictionaries use square brackets with the key NAME: player['health']. Note: player.health works for objects/classes but NOT for plain dictionaries."}]}}]},{id:5,title:"Functions = Abilities",lessons:[{id:"5-1",title:"Creating Game Abilities",completed:!1,content:{description:"Master functions by building reusable game abilities, damage calculators, and combat systems!",sections:[{type:"text",content:`By the end of this lesson, you'll create functions with parameters, return values, default arguments, and build a complete combat ability system.

Functions are like **abilities** in a game — reusable actions you can activate anytime. You define the ability once (write the function), then use it whenever you need (call the function). Without functions, you'd copy-paste the same code everywhere. With functions, you write it once and call it 100 times.`},{type:"heading",level:2,content:"Function Basics"},{type:"code",language:"python",filename:"function_basics.py",code:`# Defining a function
def basic_attack(damage):
    """Perform a basic attack."""
    print(f"⚔️ Basic Attack! {damage} damage!")
    return damage

def power_strike(damage):
    """A powerful attack that deals 2x damage."""
    total = damage * 2
    print(f"💥 POWER STRIKE! {total} damage!")
    return total

def heal(current_hp, heal_amount, max_hp=100):
    """Heal the player. Can't exceed max_hp."""
    new_hp = min(current_hp + heal_amount, max_hp)
    actual_heal = new_hp - current_hp
    print(f"💚 Healed for {actual_heal}! HP: {new_hp}/{max_hp}")
    return new_hp

# Using the functions
enemy_hp = 100
player_hp = 50

enemy_hp -= basic_attack(25)     # 25 damage
enemy_hp -= power_strike(25)     # 50 damage
player_hp = heal(player_hp, 30)  # Heal 30 HP

print(f"\\nEnemy HP: {enemy_hp}")
print(f"Player HP: {player_hp}")`},{type:"heading",level:2,content:"Advanced Function Features"},{type:"code",language:"python",filename:"advanced_functions.py",code:`import random

def calculate_damage(base_damage, strength, crit=False, weapon_bonus=0):
    """
    Calculate total damage with all modifiers.
    
    Args:
        base_damage: Base attack power
        strength: Player's strength stat
        crit: Whether this is a critical hit
        weapon_bonus: Extra damage from weapon
    
    Returns:
        Total damage as integer
    """
    total = base_damage + (strength * 0.5) + weapon_bonus
    
    if crit:
        total *= 2.5
        print("💥 CRITICAL HIT!")
    
    return int(total)

# Call with positional arguments
dmg = calculate_damage(20, 10)
print(f"Normal: {dmg}")

# Call with keyword arguments (any order!)
dmg = calculate_damage(base_damage=25, strength=15, crit=True, weapon_bonus=10)
print(f"Full power: {dmg}")

# Return multiple values
def get_player_info():
    return "Hero", 100, 50, 15  # name, hp, mana, level

name, hp, mana, level = get_player_info()
print(f"{name}: HP={hp}, Mana={mana}, Level={level}")`},{type:"heading",level:2,content:"Complete Battle System"},{type:"code",language:"python",filename:"battle_system.py",code:`import random

def roll_dice(sides=20):
    """Roll a dice with given number of sides."""
    return random.randint(1, sides)

def attempt_attack(attacker_str, defender_def):
    """Check if attack hits based on d20 roll."""
    roll = roll_dice(20)
    attack_value = roll + attacker_str
    
    is_crit = roll == 20
    is_miss = roll == 1
    hit = attack_value >= defender_def and not is_miss
    
    return hit, is_crit, roll

def calculate_combat_damage(base_dmg, crit=False):
    """Calculate damage with variance."""
    variance = random.uniform(0.8, 1.2)
    damage = int(base_dmg * variance)
    if crit:
        damage *= 3
    return max(damage, 1)

def battle_round(attacker, defender):
    """Execute one round of combat."""
    hit, crit, roll = attempt_attack(
        attacker["strength"], defender["defense"]
    )
    
    print(f"  🎲 {attacker['name']} rolls {roll}...")
    
    if not hit:
        print(f"  ❌ Miss!")
        return
    
    damage = calculate_combat_damage(attacker["attack"], crit)
    
    if crit:
        print(f"  💥 CRITICAL! {damage} damage!")
    else:
        print(f"  ⚔️ Hit! {damage} damage!")
    
    defender["hp"] -= damage
    defender["hp"] = max(defender["hp"], 0)
    print(f"  {defender['name']} HP: {defender['hp']}")

# Battle!
player = {"name": "Hero", "hp": 100, "attack": 20, "strength": 12, "defense": 14}
enemy = {"name": "Dark Knight", "hp": 80, "attack": 15, "strength": 10, "defense": 12}

print("⚔️ BATTLE START!")
print(f"{player['name']} vs {enemy['name']}")
print("=" * 30)

turn = 0
while player["hp"] > 0 and enemy["hp"] > 0:
    turn += 1
    print(f"\\n--- Turn {turn} ---")
    battle_round(player, enemy)
    if enemy["hp"] > 0:
        battle_round(enemy, player)

winner = player["name"] if player["hp"] > 0 else enemy["name"]
print(f"\\n🏆 {winner} wins after {turn} turns!")`},{type:"tip",content:"Functions should do ONE thing well. 'calculate_damage()' only calculates, 'attempt_attack()' only checks if it hits. Keep them focused and combine them in higher-level functions like 'battle_round()'. This is called 'separation of concerns'."},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Create functions for 3 different attacks (basic, power, magic) with different damage formulas.","**Exercise 2:** Build a `use_potion(player, potion_type)` function that heals different amounts based on potion type.","**Exercise 3:** Create a dice rolling system with functions for d4, d6, d8, d12, d20.","**Exercise 4:** Build a complete battle system between player and enemy using functions.","**Exercise 5:** Write a `generate_loot()` function that returns a random item with random stats."]},{type:"checkpoint",content:"Build a battle system with separate functions for: attack rolling, damage calculation, and healing. Create a full battle loop between player and enemy!"}]}},{id:"5-2",title:"Classes = Game Objects",completed:!1,content:{description:"Level up to Object-Oriented Programming! Create Player, Enemy, and Item classes for professional game architecture.",sections:[{type:"text",content:`By the end of this lesson, you'll understand classes and objects, create game entity classes with methods, and use inheritance for different character types.

**Classes** are blueprints for creating objects. Think of a class like a character template in a game — the template defines what stats every character has (health, mana, damage), but each actual character fills in their own values. Classes combine data (variables) and abilities (functions) into one neat package.`},{type:"heading",level:2,content:"Your First Class"},{type:"code",language:"python",filename:"first_class.py",code:`class Player:
    """A game player character."""
    
    def __init__(self, name, player_class, health=100):
        """Initialize a new player (constructor)."""
        self.name = name
        self.player_class = player_class
        self.health = health
        self.max_health = health
        self.level = 1
        self.xp = 0
        self.gold = 0
        self.inventory = []
    
    def take_damage(self, amount):
        """Reduce health by damage amount."""
        self.health = max(self.health - amount, 0)
        print(f"💔 {self.name} takes {amount} damage! HP: {self.health}/{self.max_health}")
        if self.health <= 0:
            print(f"💀 {self.name} has been defeated!")
    
    def heal(self, amount):
        """Restore health."""
        old_hp = self.health
        self.health = min(self.health + amount, self.max_health)
        print(f"💚 {self.name} heals {self.health - old_hp} HP! ({self.health}/{self.max_health})")
    
    def gain_xp(self, amount):
        """Gain experience and check for level up."""
        self.xp += amount
        print(f"✨ {self.name} gains {amount} XP!")
        while self.xp >= self.level * 100:
            self.xp -= self.level * 100
            self.level += 1
            self.max_health += 10
            self.health = self.max_health
            print(f"🎉 LEVEL UP! {self.name} is now Level {self.level}!")
    
    def show_stats(self):
        """Display character stats."""
        print(f"\\n📊 {self.name} the {self.player_class}")
        print(f"  ⭐ Level: {self.level}")
        print(f"  ❤️  HP: {self.health}/{self.max_health}")
        print(f"  ✨ XP: {self.xp}/{self.level * 100}")
        print(f"  💰 Gold: {self.gold}")

# Create player objects!
hero = Player("DragonSlayer", "Warrior", 150)
mage = Player("Luna", "Mage", 80)

hero.show_stats()
hero.take_damage(30)
hero.heal(20)
hero.gain_xp(150)  # Level up!
hero.show_stats()`},{type:"heading",level:2,content:"Enemy Class with Inheritance"},{type:"code",language:"python",filename:"enemy_class.py",code:`import random

class Enemy:
    """Base enemy class."""
    
    def __init__(self, name, hp, attack, xp_reward, gold_reward):
        self.name = name
        self.hp = hp
        self.max_hp = hp
        self.attack = attack
        self.xp_reward = xp_reward
        self.gold_reward = gold_reward
    
    def attack_player(self, player):
        damage = random.randint(self.attack // 2, self.attack)
        print(f"👹 {self.name} attacks {player.name}!")
        player.take_damage(damage)
    
    def take_damage(self, amount):
        self.hp = max(self.hp - amount, 0)
        print(f"  {self.name} takes {amount} damage! ({self.hp}/{self.max_hp})")
    
    def is_alive(self):
        return self.hp > 0

# Factory function to create random enemies
def spawn_enemy(difficulty=1):
    enemies = [
        ("Goblin", 30, 8, 15, 10),
        ("Skeleton", 40, 12, 25, 15),
        ("Orc", 60, 15, 40, 25),
        ("Dark Knight", 80, 20, 60, 40),
        ("Dragon", 150, 30, 200, 100),
    ]
    
    # Scale by difficulty
    name, hp, atk, xp, gold = random.choice(enemies)
    return Enemy(
        name, 
        int(hp * difficulty), 
        int(atk * difficulty),
        int(xp * difficulty),
        int(gold * difficulty)
    )`},{type:"tip",content:"`self` refers to the specific object (instance) calling the method. When you write `hero.take_damage(30)`, inside the function `self` IS `hero`. It's how the object knows to change ITS OWN health, not some other player's."},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Create a Player class with name, health, attack, and methods for take_damage, heal, and show_stats.","**Exercise 2:** Create an Enemy class with attack_player and take_damage methods.","**Exercise 3:** Build a complete battle between a Player object and an Enemy object using their methods.","**Exercise 4:** Add an inventory system to the Player class: add_item, remove_item, show_inventory.","**Exercise 5:** Create specialized enemy types (Goblin, Dragon) with unique attack patterns."]},{type:"checkpoint",content:"Create Player and Enemy classes, then build a turn-based battle using their methods. The player should gain XP and gold when they win!"}]}}]},{id:6,title:"Build a Text RPG!",lessons:[{id:"6-1",title:"Putting It All Together",completed:!1,content:{description:"Combine everything you've learned into a complete text-based RPG with exploration, combat, items, and progression!",sections:[{type:"text",content:`By the end of this lesson, you'll have built a complete text RPG that uses variables, conditions, loops, lists, dictionaries, functions, and classes — everything from this course!

This is your **capstone project** — the moment where all the pieces come together. You'll build a game with exploration (choosing paths), combat (fighting enemies), items (inventory management), and progression (leveling up and getting stronger).`},{type:"heading",level:2,content:"The Complete RPG"},{type:"code",language:"python",filename:"text_rpg.py",code:`import random

# ===== GAME CONFIGURATION =====
PLAYER_START_HP = 100
POTION_HEAL = 40
POTION_COST = 25

# ===== PLAYER DATA =====
player = {
    "name": "",
    "class": "",
    "hp": PLAYER_START_HP,
    "max_hp": PLAYER_START_HP,
    "attack": 15,
    "defense": 10,
    "gold": 50,
    "potions": 2,
    "xp": 0,
    "level": 1,
    "kills": 0
}

# ===== ENEMIES =====
enemies = [
    {"name": "Goblin", "hp": 30, "atk": 8, "gold": 10, "xp": 15},
    {"name": "Skeleton", "hp": 45, "atk": 12, "gold": 18, "xp": 25},
    {"name": "Orc", "hp": 60, "atk": 16, "gold": 30, "xp": 40},
    {"name": "Dark Mage", "hp": 50, "atk": 22, "gold": 40, "xp": 50},
    {"name": "Dragon", "hp": 120, "atk": 28, "gold": 100, "xp": 150},
]

# ===== FUNCTIONS =====
def show_stats():
    p = player
    print(f"\\n📊 {p['name']} the {p['class']} (Level {p['level']})")
    print(f"  ❤️  HP: {p['hp']}/{p['max_hp']}")
    print(f"  ⚔️  ATK: {p['attack']}  🛡️ DEF: {p['defense']}")
    print(f"  💰 Gold: {p['gold']}  🧪 Potions: {p['potions']}")
    print(f"  ✨ XP: {p['xp']}/{p['level'] * 100}  💀 Kills: {p['kills']}")

def use_potion():
    if player["potions"] <= 0:
        print("❌ No potions!")
        return
    heal = min(POTION_HEAL, player["max_hp"] - player["hp"])
    player["hp"] += heal
    player["potions"] -= 1
    print(f"🧪 Healed {heal} HP! ({player['hp']}/{player['max_hp']})")

def check_level_up():
    while player["xp"] >= player["level"] * 100:
        player["xp"] -= player["level"] * 100
        player["level"] += 1
        player["max_hp"] += 15
        player["hp"] = player["max_hp"]
        player["attack"] += 3
        player["defense"] += 2
        print(f"\\n🎉 LEVEL UP! Now Level {player['level']}!")
        print(f"  HP: {player['max_hp']} | ATK: {player['attack']} | DEF: {player['defense']}")

def battle(enemy_data):
    enemy = enemy_data.copy()
    enemy["hp"] = int(enemy["hp"] * (1 + player["level"] * 0.1))
    
    print(f"\\n⚔️ A {enemy['name']} appears! (HP: {enemy['hp']})")
    
    while enemy["hp"] > 0 and player["hp"] > 0:
        # Player turn
        action = input("  [a]ttack or [h]eal? ").lower()
        
        if action == "h":
            use_potion()
        else:
            dmg = random.randint(player["attack"] // 2, player["attack"])
            crit = random.random() < 0.15
            if crit:
                dmg = int(dmg * 2.5)
                print(f"  💥 CRITICAL! You deal {dmg} damage!")
            else:
                print(f"  ⚔️ You deal {dmg} damage!")
            enemy["hp"] = max(enemy["hp"] - dmg, 0)
            print(f"  {enemy['name']} HP: {enemy['hp']}")
        
        if enemy["hp"] <= 0:
            player["gold"] += enemy["gold"]
            player["xp"] += enemy["xp"]
            player["kills"] += 1
            print(f"\\n  🎉 {enemy['name']} defeated!")
            print(f"  +{enemy['gold']} gold, +{enemy['xp']} XP!")
            check_level_up()
            return True
        
        # Enemy turn
        dmg = max(random.randint(enemy["atk"] // 2, enemy["atk"]) - player["defense"] // 2, 1)
        player["hp"] = max(player["hp"] - dmg, 0)
        print(f"  👹 {enemy['name']} deals {dmg} damage! (Your HP: {player['hp']})")
    
    print("\\n  💀 You have been defeated...")
    return False

def shop():
    print("\\n🏪 SHOP")
    print(f"  1. Health Potion ({POTION_COST}g)")
    print(f"  2. Weapon Upgrade (100g, +5 ATK)")
    print(f"  3. Armor Upgrade (80g, +3 DEF)")
    print(f"  4. Leave")
    print(f"  💰 Your gold: {player['gold']}")
    
    choice = input("  Buy what? ")
    if choice == "1" and player["gold"] >= POTION_COST:
        player["gold"] -= POTION_COST
        player["potions"] += 1
        print(f"  ✅ Bought potion! ({player['potions']} total)")
    elif choice == "2" and player["gold"] >= 100:
        player["gold"] -= 100
        player["attack"] += 5
        print(f"  ✅ ATK upgraded to {player['attack']}!")
    elif choice == "3" and player["gold"] >= 80:
        player["gold"] -= 80
        player["defense"] += 3
        print(f"  ✅ DEF upgraded to {player['defense']}!")
    elif choice == "4":
        return
    else:
        print("  ❌ Can't afford that!")

# ===== MAIN GAME =====
print("🏰 TEXT RPG ADVENTURE!")
print("=" * 30)
player["name"] = input("Enter your name: ") or "Hero"
player["class"] = input("Class (Warrior/Mage/Rogue): ").title() or "Warrior"

print(f"\\n⚔️ Welcome, {player['name']} the {player['class']}!")
print("Commands: fight, shop, stats, heal, quit")

while player["hp"] > 0:
    action = input("\\n> ").lower().strip()
    
    if action == "fight":
        difficulty = min(player["level"], len(enemies))
        enemy = random.choice(enemies[:difficulty])
        if not battle(enemy):
            break
    elif action == "shop":
        shop()
    elif action == "stats":
        show_stats()
    elif action == "heal":
        use_potion()
    elif action == "quit":
        print("\\n🏃 You flee the dungeon!")
        break
    else:
        print("❓ Commands: fight, shop, stats, heal, quit")

print(f"\\n{'='*30}")
print(f"🏆 GAME OVER!")
show_stats()`},{type:"tip",content:"This game uses EVERYTHING you learned: variables, f-strings, if/elif/else, while loops, for loops, lists, dictionaries, functions, random numbers, and user input. If you understand this code, you've truly mastered the fundamentals!"},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Add a 'run' option in combat that has a 50% chance of escaping.","**Exercise 2:** Add an inventory system with equippable weapons that change your attack stat.","**Exercise 3:** Add a magic system: spells that cost mana and deal different types of damage.","**Exercise 4:** Add a boss fight every 5 kills that's much harder but gives great rewards.","**Exercise 5:** Add save/load functionality using file I/O (json module)."]},{type:"checkpoint",content:"Get the RPG running and play through it! Try to reach Level 3 and defeat at least 10 enemies. Then add one custom feature of your own!"}]}}]},{id:7,title:"Pygame — Graphics!",lessons:[{id:"7-1",title:"Introduction to Pygame",completed:!1,content:{description:"Move beyond text! Learn Pygame basics — windows, colors, shapes, and the game loop that powers graphical games.",sections:[{type:"text",content:`By the end of this lesson, you'll create a Pygame window, draw shapes, understand the game loop, and handle keyboard input for player movement.

Text games are awesome for learning, but eventually you want **graphics**! **Pygame** is a Python library that lets you create games with windows, images, sounds, and animations. It's perfect for 2D games like platformers, shooters, puzzles, and more.`},{type:"heading",level:2,content:"Installing Pygame"},{type:"code",language:"text",filename:"install_pygame.txt",code:`# In your terminal/command prompt:
pip install pygame

# Or on Replit: search 'pygame' in packages

# Verify it works:
python -c "import pygame; print(pygame.ver)"`},{type:"heading",level:2,content:"Your First Pygame Window"},{type:"code",language:"python",filename:"first_window.py",code:`import pygame
import sys

# Initialize Pygame
pygame.init()

# Create window
WIDTH, HEIGHT = 800, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("My First Game! 🎮")

# Colors (Red, Green, Blue) — each 0-255
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
RED = (255, 0, 0)
GREEN = (0, 255, 0)
BLUE = (0, 100, 255)
YELLOW = (255, 255, 0)

# Player position
player_x = WIDTH // 2
player_y = HEIGHT // 2
player_speed = 5
player_size = 40

# Game loop
clock = pygame.time.Clock()
running = True

while running:
    # 1. Handle events (keyboard, mouse, quit)
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    
    # 2. Get keyboard input
    keys = pygame.key.get_pressed()
    if keys[pygame.K_LEFT] or keys[pygame.K_a]:
        player_x -= player_speed
    if keys[pygame.K_RIGHT] or keys[pygame.K_d]:
        player_x += player_speed
    if keys[pygame.K_UP] or keys[pygame.K_w]:
        player_y -= player_speed
    if keys[pygame.K_DOWN] or keys[pygame.K_s]:
        player_y += player_speed
    
    # Keep player on screen
    player_x = max(0, min(player_x, WIDTH - player_size))
    player_y = max(0, min(player_y, HEIGHT - player_size))
    
    # 3. Draw everything
    screen.fill(BLACK)  # Clear screen
    
    # Draw player (rectangle)
    pygame.draw.rect(screen, BLUE, (player_x, player_y, player_size, player_size))
    
    # Draw some other shapes
    pygame.draw.circle(screen, RED, (100, 100), 30)          # Circle
    pygame.draw.line(screen, GREEN, (0, 0), (200, 200), 3)   # Line
    
    # 4. Update display
    pygame.display.flip()
    clock.tick(60)  # 60 FPS

pygame.quit()
sys.exit()`},{type:"heading",level:2,content:"The Game Loop Explained"},{type:"code",language:"text",filename:"game_loop_explained.txt",code:`Every frame, the game loop does 4 things:

1. HANDLE EVENTS — Check for quit, key presses, mouse clicks
2. UPDATE STATE  — Move player, check collisions, update scores
3. DRAW          — Clear screen, draw background, draw objects
4. DISPLAY       — Show the frame on screen

This runs 60 times per second (60 FPS)!

while running:
    handle_events()    # Step 1
    update_game()      # Step 2
    draw_everything()  # Step 3
    pygame.display.flip()  # Step 4
    clock.tick(60)     # Cap at 60 FPS`},{type:"tip",content:"Always call `screen.fill(BLACK)` at the start of each frame to clear the previous frame. Without it, old drawings stay on screen and everything smears together!"},{type:"heading",level:2,content:"Practice Exercises"},{type:"list",items:["**Exercise 1:** Create a Pygame window with a colored background. Draw 3 different shapes on it.","**Exercise 2:** Make a square that moves with arrow keys or WASD, and stays within the window.","**Exercise 3:** Add a 'collectible' circle that appears at a random position. When the player touches it, move it somewhere new and add to a score.","**Exercise 4:** Display text on screen showing the player's score (use pygame.font).","**Exercise 5:** Add multiple collectibles and a timer — how many can you get in 30 seconds?"]},{type:"checkpoint",content:"Create a Pygame window with a player square that moves with keyboard input. Add a collectible that respawns when touched and keep score!"}]}}]},{id:8,title:"You're a Coder Now! 🎮",lessons:[{id:"8-1",title:"What You've Accomplished",completed:!1,content:{description:"Celebrate your achievement! Review everything you learned and discover the exciting paths ahead.",sections:[{type:"text",content:`**CONGRATULATIONS, GAME DEVELOPER!** 🎉🎮

You've done something incredible. You started this course with zero programming knowledge, and now you can build real, playable games in Python. That's not just a course completion — that's a genuine, marketable **skill** that very few people your age have.

Let's look at everything you've mastered:`},{type:"heading",level:2,content:"Skills You've Mastered"},{type:"list",items:["✅ **Variables & Data Types** — Storing game stats, player info, and item data","✅ **Math Operations** — Damage calculations, XP systems, gold economies","✅ **If/Elif/Else** — Game logic, loot drops, level requirements","✅ **For Loops** — Farming enemies, processing inventories, wave defense","✅ **While Loops** — Game loops, interactive menus, battle systems","✅ **Lists** — Inventories, party systems, enemy rosters","✅ **Dictionaries** — Character stats, item databases, complex game data","✅ **Functions** — Reusable abilities, damage calculators, organized code","✅ **Classes** — Player objects, enemy objects, professional architecture","✅ **A Complete Text RPG** — Everything combined into a real game!","✅ **Pygame Basics** — Graphics, input, and the game loop"]},{type:"heading",level:2,content:"What's Next?"},{type:"list",items:["🎮 **Pygame Deep Dive** — Build full graphical games with sprites, animations, and sound","🐢 **Turtle Graphics** — Create visual programs and simple animations","🌐 **Web Games** — Learn JavaScript to make browser games","🤖 **AI for Games** — Teach enemies to be smart with pathfinding algorithms","📱 **App Development** — Build mobile apps with Python (Kivy)","🏆 **Game Jams** — Join coding competitions like Ludum Dare or PyWeek","💻 **Replit** — Share your games online for free at replit.com"]},{type:"heading",level:2,content:"Game Ideas to Build Next"},{type:"list",items:["🎲 Number guessing game with difficulty levels","✊ Rock Paper Scissors with win tracking","🃏 Blackjack / 21 card game","🐍 Snake game (with Pygame)","👾 Space Invaders clone","🏃 Infinite runner / platformer","♟️ Chess or checkers","🏰 Expand your Text RPG into an epic adventure!"]},{type:"tip",content:"The BEST way to learn is to BUILD! Don't just read tutorials — pick a game idea and start making it. You'll get stuck, google the answer, learn something new, and get unstuck. That's how real developers work every single day!"},{type:"text",content:`You're not just a gamer anymore — you're a **game maker**. You see the code behind the games. You understand the logic behind the loot drops. You know why that enemy behaves the way it does.

Keep coding, keep creating, and most importantly, have FUN! 🎮✨🚀`}]}}]}]};function ny({course:x,currentLesson:J,completedLessons:B,expandedChapters:m,onLessonSelect:H,onChapterToggle:G,progress:Q,isOpen:Y}){const[A,E]=ot.useState(""),W=w=>({completed:w.lessons.filter(Z=>B.includes(Z.id)).length,total:w.lessons.length}),N=A?x.chapters.map(w=>({...w,lessons:w.lessons.filter(K=>K.title.toLowerCase().includes(A.toLowerCase()))})).filter(w=>w.lessons.length>0):x.chapters;return d.jsxs("aside",{className:`sidebar ${Y?"open":""}`,children:[d.jsxs("div",{className:"sidebar-header",children:[d.jsxs("div",{className:"course-logo",children:[d.jsx("span",{className:"logo-icon",children:"🎮"}),d.jsxs("div",{children:[d.jsx("h1",{className:"course-title",children:x.title}),d.jsx("p",{className:"course-subtitle",children:x.description})]})]}),d.jsxs("div",{className:"progress-section",children:[d.jsxs("div",{className:"progress-header",children:[d.jsx("span",{children:"Progress"}),d.jsxs("span",{className:"progress-percent",children:[Q,"%"]})]}),d.jsx("div",{className:"progress-bar",children:d.jsx("div",{className:"progress-fill",style:{width:`${Q}%`}})})]}),d.jsxs("div",{className:"search-box",children:[d.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("circle",{cx:"11",cy:"11",r:"8"}),d.jsx("path",{d:"m21 21-4.35-4.35"})]}),d.jsx("input",{type:"text",placeholder:"Search lessons...",value:A,onChange:w=>E(w.target.value)})]})]}),d.jsx("nav",{className:"chapter-list",children:N.map(w=>{const K=m.includes(w.id),{completed:Z,total:F}=W(w),pe=Z===F;return d.jsxs("div",{className:"chapter",children:[d.jsxs("div",{className:`chapter-header ${K?"expanded":""}`,onClick:()=>G(w.id),children:[d.jsxs("div",{className:"chapter-info",children:[d.jsx("span",{className:`chapter-number ${pe?"completed":""}`,children:pe?"✓":w.id}),d.jsxs("div",{className:"chapter-text",children:[d.jsx("span",{className:"chapter-name",children:w.title}),d.jsxs("span",{className:"chapter-meta",children:[Z,"/",F," lessons"]})]})]}),d.jsx("svg",{className:`chevron ${K?"rotated":""}`,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:d.jsx("path",{d:"m6 9 6 6 6-6"})})]}),K&&d.jsx("ul",{className:"lesson-list",children:w.lessons.map(ae=>{const _e=J?.id===ae.id,ge=B.includes(ae.id);return d.jsxs("li",{className:`lesson-item ${_e?"active":""} ${ge?"completed":""}`,onClick:()=>H(ae),children:[d.jsx("span",{className:"lesson-status",children:ge?d.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:d.jsx("polyline",{points:"20 6 9 17 4 12"})}):d.jsx("span",{className:"status-dot"})}),d.jsx("span",{className:"lesson-name",children:ae.title})]},ae.id)})})]},w.id)})})]})}function iy({code:x,language:J,filename:B}){const[m,H]=ot.useState(""),[G,Q]=ot.useState(!1),[Y,A]=ot.useState(!1),E=x.split(`
`),W=()=>{Q(!0),setTimeout(()=>{try{const Z=w(x);H(Z)}catch(Z){H(`Error: ${Z.message}`)}Q(!1)},500)},N=()=>{navigator.clipboard.writeText(x),A(!0),setTimeout(()=>A(!1),2e3)},w=Z=>{const F=[],pe=Z.split(`
`),ae={};for(const _e of pe){if(_e.trim().startsWith("#")||!_e.trim())continue;const ge=_e.match(/print\((.+)\)/);if(ge){let Se=ge[1].trim();Se.startsWith('f"')||Se.startsWith("f'")?(Se=Se.slice(2,-1),Se=Se.replace(/\{([^}]+)\}/g,(je,V)=>V.includes("+")?"[calculated]":V.includes(":")?"[formatted]":ae[V]||V),F.push(Se)):Se.startsWith('"')||Se.startsWith("'")?F.push(Se.slice(1,-1)):F.push(Se)}const Xe=_e.match(/^(\w+)\s*=\s*(.+)$/);if(Xe&&!_e.includes("def ")){const[,Se,je]=Xe;ae[Se]=je.replace(/["']/g,"").trim()}}return F.length>0?F.join(`
`):"✨ Code executed successfully!"},K=Z=>{let F=Z.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");const pe=["def","return","if","elif","else","for","while","in","not","and","or","True","False","None","import","from","class","try","except","finally","with","as","raise","break","continue","pass","lambda"],ae=["print","len","range","str","int","float","list","dict","set","type","open","sum","min","max","sorted","enumerate","zip","map","filter","isinstance","super"];return F.replace(/(#.*)$/gm,"§COM§$1§/COM§").replace(/(f?&quot;[^&]*&quot;|f?&#39;[^&]*&#39;|f?"[^"]*"|f?'[^']*')/g,"§STR§$1§/STR§").replace(/\b(\d+\.?\d*)\b/g,"§NUM§$1§/NUM§").replace(new RegExp(`\\b(${pe.join("|")})\\b`,"g"),"§KEY§$1§/KEY§").replace(new RegExp(`\\b(${ae.join("|")})\\b(?=\\()`,"g"),"§BLT§$1§/BLT§").replace(/§COM§/g,'<span class="comment">').replace(/§\/COM§/g,"</span>").replace(/§STR§/g,'<span class="string">').replace(/§\/STR§/g,"</span>").replace(/§NUM§/g,'<span class="number">').replace(/§\/NUM§/g,"</span>").replace(/§KEY§/g,'<span class="keyword">').replace(/§\/KEY§/g,"</span>").replace(/§BLT§/g,'<span class="builtin">').replace(/§\/BLT§/g,"</span>")};return d.jsxs("div",{className:"code-editor",children:[d.jsxs("div",{className:"editor-header",children:[d.jsx("div",{className:"editor-tabs",children:d.jsxs("div",{className:"editor-tab active",children:[d.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:d.jsx("path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"})}),B]})}),d.jsxs("div",{className:"editor-actions",children:[d.jsx("button",{className:"copy-btn",onClick:N,title:"Copy code",children:Y?d.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#10b981",strokeWidth:"2",children:d.jsx("polyline",{points:"20 6 9 17 4 12"})}):d.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),d.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})}),d.jsx("button",{className:"run-btn",onClick:W,disabled:G,children:G?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"spinner"}),"Running..."]}):d.jsxs(d.Fragment,{children:[d.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:d.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),"Run"]})})]})]}),d.jsxs("div",{className:"editor-content",children:[d.jsx("div",{className:"line-numbers",children:E.map((Z,F)=>d.jsx("div",{children:F+1},F))}),d.jsx("pre",{className:"code-area",dangerouslySetInnerHTML:{__html:K(x)}})]}),m&&d.jsxs("div",{className:"output-area",children:[d.jsxs("div",{className:"output-header",children:[d.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("polyline",{points:"4 17 10 11 4 5"}),d.jsx("line",{x1:"12",y1:"19",x2:"20",y2:"19"})]}),"Output"]}),d.jsx("pre",{className:"output-content",children:m})]})]})}function uy({quiz:x}){const[J,B]=ot.useState(null),[m,H]=ot.useState(!1),G=()=>{J&&H(!0)},Q=J===x.correct,Y=A=>A.replace(/\n/g,"<br/>");return d.jsxs("div",{className:"quiz-container",children:[d.jsxs("div",{className:"quiz-header",children:[d.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("circle",{cx:"12",cy:"12",r:"10"}),d.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),d.jsx("path",{d:"M12 17h.01"})]}),d.jsx("span",{children:"Quick Quiz"})]}),d.jsx("p",{className:"quiz-question",dangerouslySetInnerHTML:{__html:Y(x.question)}}),d.jsx("div",{className:"quiz-options",children:x.options.map(A=>{let E="quiz-option";return m?A.id===x.correct?E+=" correct":A.id===J&&A.id!==x.correct&&(E+=" incorrect"):A.id===J&&(E+=" selected"),d.jsxs("div",{className:E,onClick:()=>!m&&B(A.id),children:[d.jsx("span",{className:"option-marker",children:m&&A.id===x.correct?d.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:d.jsx("polyline",{points:"20 6 9 17 4 12"})}):m&&A.id===J&&A.id!==x.correct?d.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:[d.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),d.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}):A.id.toUpperCase()}),d.jsx("span",{className:"option-text",children:A.text})]},A.id)})}),m?d.jsxs("div",{className:`quiz-result ${Q?"correct":"incorrect"}`,children:[d.jsx("div",{className:"result-header",children:Q?d.jsxs(d.Fragment,{children:[d.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),d.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),"Correct! 🎉"]}):d.jsxs(d.Fragment,{children:[d.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("circle",{cx:"12",cy:"12",r:"10"}),d.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),d.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),"Not quite!"]})}),d.jsx("p",{className:"result-explanation",children:x.explanation}),d.jsx("button",{className:"quiz-retry",onClick:()=>{B(null),H(!1)},children:"Try Again"})]}):d.jsx("button",{className:"quiz-submit gradient-btn",onClick:G,disabled:!J,children:"Check Answer"})]})}function cy({lesson:x,isCompleted:J,onMarkComplete:B,onNavigate:m,courseTitle:H}){const G=(Y,A)=>{switch(Y.type){case"text":return d.jsx("div",{className:"lesson-text",dangerouslySetInnerHTML:{__html:Q(Y.content)}},A);case"heading":const E=`h${Y.level}`;return d.jsx(E,{className:"lesson-heading",children:Y.content},A);case"list":return d.jsx("ul",{className:"lesson-list",children:Y.items.map((W,N)=>d.jsx("li",{dangerouslySetInnerHTML:{__html:Q(W)}},N))},A);case"code":return d.jsx(iy,{code:Y.code,language:Y.language,filename:Y.filename},A);case"tip":return d.jsxs("div",{className:"tip-box",children:[d.jsxs("div",{className:"tip-title",children:[d.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("circle",{cx:"12",cy:"12",r:"10"}),d.jsx("path",{d:"M12 16v-4M12 8h.01"})]}),"Pro Tip"]}),d.jsx("p",{dangerouslySetInnerHTML:{__html:Q(Y.content)}})]},A);case"warning":return d.jsxs("div",{className:"warning-box",children:[d.jsxs("div",{className:"warning-title",children:[d.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"}),d.jsx("path",{d:"M12 9v4M12 17h.01"})]}),"Important"]}),d.jsx("p",{dangerouslySetInnerHTML:{__html:Q(Y.content)}})]},A);case"checkpoint":return d.jsxs("div",{className:"checkpoint",children:[d.jsxs("div",{className:"checkpoint-title",children:[d.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),d.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),"Checkpoint"]}),d.jsx("p",{dangerouslySetInnerHTML:{__html:Q(Y.content)}})]},A);case"quiz":return d.jsx(uy,{quiz:Y},A);default:return null}},Q=Y=>Y?Y.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\n/g,"<br/>"):"";return d.jsxs("div",{className:"lesson-container animate-in",children:[d.jsxs("nav",{className:"breadcrumb",children:[d.jsx("a",{href:"#",children:"Home"}),d.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:d.jsx("path",{d:"m9 18 6-6-6-6"})}),d.jsx("a",{href:"#",children:"Courses"}),d.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:d.jsx("path",{d:"m9 18 6-6-6-6"})}),d.jsx("span",{children:H})]}),d.jsxs("header",{className:"lesson-header",children:[d.jsx("h1",{className:"lesson-title",children:x.title}),d.jsx("p",{className:"lesson-description",children:x.content.description})]}),d.jsx("article",{className:"lesson-content",children:x.content.sections.map((Y,A)=>G(Y,A))}),d.jsxs("footer",{className:"lesson-nav",children:[d.jsxs("button",{className:"nav-btn secondary",onClick:()=>m("prev"),children:[d.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:d.jsx("path",{d:"m15 18-6-6 6-6"})}),"Previous"]}),d.jsx("div",{className:"nav-center",children:J?d.jsxs("span",{className:"completed-badge",children:[d.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:d.jsx("polyline",{points:"20 6 9 17 4 12"})}),"Completed"]}):d.jsxs("button",{className:"nav-btn gradient-btn mark-complete-btn",onClick:B,children:[d.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:d.jsx("polyline",{points:"20 6 9 17 4 12"})}),"Mark Complete"]})}),d.jsxs("button",{className:"nav-btn gradient-btn",onClick:()=>m("next"),children:["Next",d.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:d.jsx("path",{d:"m9 18 6-6-6-6"})})]})]})]})}function sy(){const[x,J]=ot.useState(null),[B,m]=ot.useState(()=>{const K=localStorage.getItem("pythonGamersCourseProgress");return K?JSON.parse(K):[]}),[H,G]=ot.useState([1]),[Q,Y]=ot.useState(!1);ot.useEffect(()=>{!x&&Sl.chapters.length>0&&J(Sl.chapters[0].lessons[0])},[]),ot.useEffect(()=>{localStorage.setItem("pythonGamersCourseProgress",JSON.stringify(B))},[B]);const A=K=>{G(Z=>Z.includes(K)?Z.filter(F=>F!==K):[...Z,K])},E=K=>{B.includes(K)||m(Z=>[...Z,K])},W=K=>{const Z=Sl.chapters.flatMap(pe=>pe.lessons),F=Z.findIndex(pe=>pe.id===x?.id);if(K==="next"&&F<Z.length-1){const pe=Z[F+1];J(pe);const ae=Sl.chapters.find(_e=>_e.lessons.some(ge=>ge.id===pe.id));ae&&!H.includes(ae.id)&&G(_e=>[..._e,ae.id])}else if(K==="prev"&&F>0){const pe=Z[F-1];J(pe);const ae=Sl.chapters.find(_e=>_e.lessons.some(ge=>ge.id===pe.id));ae&&!H.includes(ae.id)&&G(_e=>[..._e,ae.id])}},N=()=>{const K=Sl.chapters.reduce((Z,F)=>Z+F.lessons.length,0);return Math.round(B.length/K*100)},w=K=>{J(K),Y(!1)};return d.jsxs("div",{className:"app",children:[d.jsx("button",{className:"mobile-menu-btn",onClick:()=>Y(!Q),"aria-label":"Toggle menu",children:Q?d.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),d.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}):d.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),d.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),d.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),Q&&d.jsx("div",{className:"sidebar-overlay",onClick:()=>Y(!1)}),d.jsx(ny,{course:Sl,currentLesson:x,completedLessons:B,expandedChapters:H,onLessonSelect:w,onChapterToggle:A,progress:N(),isOpen:Q}),d.jsx("main",{className:"main-content",children:x&&d.jsx(cy,{lesson:x,isCompleted:B.includes(x.id),onMarkComplete:()=>E(x.id),onNavigate:W,courseTitle:Sl.title})})]})}ay.createRoot(document.getElementById("root")).render(d.jsx(ot.StrictMode,{children:d.jsx(sy,{})}));
