function aS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Pf(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var q_={exports:{}},Du={},G_={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var la=Symbol.for("react.element"),lS=Symbol.for("react.portal"),uS=Symbol.for("react.fragment"),cS=Symbol.for("react.strict_mode"),hS=Symbol.for("react.profiler"),dS=Symbol.for("react.provider"),fS=Symbol.for("react.context"),pS=Symbol.for("react.forward_ref"),gS=Symbol.for("react.suspense"),mS=Symbol.for("react.memo"),yS=Symbol.for("react.lazy"),bm=Symbol.iterator;function vS(t){return t===null||typeof t!="object"?null:(t=bm&&t[bm]||t["@@iterator"],typeof t=="function"?t:null)}var K_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q_=Object.assign,Y_={};function vs(t,e,n){this.props=t,this.context=e,this.refs=Y_,this.updater=n||K_}vs.prototype.isReactComponent={};vs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};vs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function X_(){}X_.prototype=vs.prototype;function Af(t,e,n){this.props=t,this.context=e,this.refs=Y_,this.updater=n||K_}var Rf=Af.prototype=new X_;Rf.constructor=Af;Q_(Rf,vs.prototype);Rf.isPureReactComponent=!0;var Om=Array.isArray,J_=Object.prototype.hasOwnProperty,kf={current:null},Z_={key:!0,ref:!0,__self:!0,__source:!0};function e0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)J_.call(e,r)&&!Z_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:la,type:t,key:s,ref:o,props:i,_owner:kf.current}}function _S(t,e){return{$$typeof:la,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bf(t){return typeof t=="object"&&t!==null&&t.$$typeof===la}function ES(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Dm=/\/+/g;function $c(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ES(""+t.key):e.toString(36)}function gl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case la:case lS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+$c(o,0):r,Om(i)?(n="",t!=null&&(n=t.replace(Dm,"$&/")+"/"),gl(i,e,n,"",function(c){return c})):i!=null&&(bf(i)&&(i=_S(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Dm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Om(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+$c(s,l);o+=gl(s,e,n,u,i)}else if(u=vS(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+$c(s,l++),o+=gl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Wa(t,e,n){if(t==null)return t;var r=[],i=0;return gl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function wS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ht={current:null},ml={transition:null},TS={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:ml,ReactCurrentOwner:kf};function t0(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:Wa,forEach:function(t,e,n){Wa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Wa(t,function(){e++}),e},toArray:function(t){return Wa(t,function(e){return e})||[]},only:function(t){if(!bf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=vs;ne.Fragment=uS;ne.Profiler=hS;ne.PureComponent=Af;ne.StrictMode=cS;ne.Suspense=gS;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TS;ne.act=t0;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Q_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=kf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)J_.call(e,u)&&!Z_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:la,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:fS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:dS,_context:t},t.Consumer=t};ne.createElement=e0;ne.createFactory=function(t){var e=e0.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:pS,render:t}};ne.isValidElement=bf;ne.lazy=function(t){return{$$typeof:yS,_payload:{_status:-1,_result:t},_init:wS}};ne.memo=function(t,e){return{$$typeof:mS,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=ml.transition;ml.transition={};try{t()}finally{ml.transition=e}};ne.unstable_act=t0;ne.useCallback=function(t,e){return ht.current.useCallback(t,e)};ne.useContext=function(t){return ht.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return ht.current.useDeferredValue(t)};ne.useEffect=function(t,e){return ht.current.useEffect(t,e)};ne.useId=function(){return ht.current.useId()};ne.useImperativeHandle=function(t,e,n){return ht.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return ht.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return ht.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return ht.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return ht.current.useReducer(t,e,n)};ne.useRef=function(t){return ht.current.useRef(t)};ne.useState=function(t){return ht.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return ht.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return ht.current.useTransition()};ne.version="18.3.1";G_.exports=ne;var N=G_.exports;const ua=Pf(N),IS=aS({__proto__:null,default:ua},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var SS=N,CS=Symbol.for("react.element"),PS=Symbol.for("react.fragment"),AS=Object.prototype.hasOwnProperty,RS=SS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kS={key:!0,ref:!0,__self:!0,__source:!0};function n0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)AS.call(e,r)&&!kS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:CS,type:t,key:s,ref:o,props:i,_owner:RS.current}}Du.Fragment=PS;Du.jsx=n0;Du.jsxs=n0;q_.exports=Du;var j=q_.exports,Uh={},r0={exports:{}},At={},i0={exports:{}},s0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Q){var ee=B.length;B.push(Q);e:for(;0<ee;){var Ee=ee-1>>>1,ce=B[Ee];if(0<i(ce,Q))B[Ee]=Q,B[ee]=ce,ee=Ee;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Q=B[0],ee=B.pop();if(ee!==Q){B[0]=ee;e:for(var Ee=0,ce=B.length,ke=ce>>>1;Ee<ke;){var pn=2*(Ee+1)-1,gn=B[pn],mn=pn+1,yn=B[mn];if(0>i(gn,ee))mn<ce&&0>i(yn,gn)?(B[Ee]=yn,B[mn]=ee,Ee=mn):(B[Ee]=gn,B[pn]=ee,Ee=pn);else if(mn<ce&&0>i(yn,ee))B[Ee]=yn,B[mn]=ee,Ee=mn;else break e}}return Q}function i(B,Q){var ee=B.sortIndex-Q.sortIndex;return ee!==0?ee:B.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,g=3,E=!1,A=!1,R=!1,k=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(B){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=B)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function D(B){if(R=!1,I(B),!A)if(n(u)!==null)A=!0,Lr(L);else{var Q=n(c);Q!==null&&fn(D,Q.startTime-B)}}function L(B,Q){A=!1,R&&(R=!1,_(y),y=-1),E=!0;var ee=g;try{for(I(Q),p=n(u);p!==null&&(!(p.expirationTime>Q)||B&&!S());){var Ee=p.callback;if(typeof Ee=="function"){p.callback=null,g=p.priorityLevel;var ce=Ee(p.expirationTime<=Q);Q=t.unstable_now(),typeof ce=="function"?p.callback=ce:p===n(u)&&r(u),I(Q)}else r(u);p=n(u)}if(p!==null)var ke=!0;else{var pn=n(c);pn!==null&&fn(D,pn.startTime-Q),ke=!1}return ke}finally{p=null,g=ee,E=!1}}var U=!1,w=null,y=-1,T=5,P=-1;function S(){return!(t.unstable_now()-P<T)}function b(){if(w!==null){var B=t.unstable_now();P=B;var Q=!0;try{Q=w(!0,B)}finally{Q?C():(U=!1,w=null)}}else U=!1}var C;if(typeof v=="function")C=function(){v(b)};else if(typeof MessageChannel<"u"){var Ce=new MessageChannel,vt=Ce.port2;Ce.port1.onmessage=b,C=function(){vt.postMessage(null)}}else C=function(){k(b,0)};function Lr(B){w=B,U||(U=!0,C())}function fn(B,Q){y=k(function(){B(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){A||E||(A=!0,Lr(L))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var ee=g;g=Q;try{return B()}finally{g=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ee=g;g=B;try{return Q()}finally{g=ee}},t.unstable_scheduleCallback=function(B,Q,ee){var Ee=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?Ee+ee:Ee):ee=Ee,B){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=ee+ce,B={id:d++,callback:Q,priorityLevel:B,startTime:ee,expirationTime:ce,sortIndex:-1},ee>Ee?(B.sortIndex=ee,e(c,B),n(u)===null&&B===n(c)&&(R?(_(y),y=-1):R=!0,fn(D,ee-Ee))):(B.sortIndex=ce,e(u,B),A||E||(A=!0,Lr(L))),B},t.unstable_shouldYield=S,t.unstable_wrapCallback=function(B){var Q=g;return function(){var ee=g;g=Q;try{return B.apply(this,arguments)}finally{g=ee}}}})(s0);i0.exports=s0;var bS=i0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var OS=N,Ct=bS;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o0=new Set,bo={};function pi(t,e){ts(t,e),ts(t+"Capture",e)}function ts(t,e){for(bo[t]=e,t=0;t<e.length;t++)o0.add(e[t])}var bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jh=Object.prototype.hasOwnProperty,DS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xm={},Nm={};function xS(t){return jh.call(Nm,t)?!0:jh.call(xm,t)?!1:DS.test(t)?Nm[t]=!0:(xm[t]=!0,!1)}function NS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function LS(t,e,n,r){if(e===null||typeof e>"u"||NS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ke[t]=new dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ke[e]=new dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ke[t]=new dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ke[t]=new dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ke[t]=new dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ke[t]=new dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ke[t]=new dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ke[t]=new dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ke[t]=new dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Of=/[\-:]([a-z])/g;function Df(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Of,Df);Ke[e]=new dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Of,Df);Ke[e]=new dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Of,Df);Ke[e]=new dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ke[t]=new dt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ke[t]=new dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function xf(t,e,n,r){var i=Ke.hasOwnProperty(e)?Ke[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(LS(e,n,i,r)&&(n=null),r||i===null?xS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Un=OS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qa=Symbol.for("react.element"),ki=Symbol.for("react.portal"),bi=Symbol.for("react.fragment"),Nf=Symbol.for("react.strict_mode"),zh=Symbol.for("react.profiler"),a0=Symbol.for("react.provider"),l0=Symbol.for("react.context"),Lf=Symbol.for("react.forward_ref"),Bh=Symbol.for("react.suspense"),$h=Symbol.for("react.suspense_list"),Mf=Symbol.for("react.memo"),Qn=Symbol.for("react.lazy"),u0=Symbol.for("react.offscreen"),Lm=Symbol.iterator;function qs(t){return t===null||typeof t!="object"?null:(t=Lm&&t[Lm]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,Hc;function to(t){if(Hc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Hc=e&&e[1]||""}return`
`+Hc+t}var Wc=!1;function qc(t,e){if(!t||Wc)return"";Wc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Wc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?to(t):""}function MS(t){switch(t.tag){case 5:return to(t.type);case 16:return to("Lazy");case 13:return to("Suspense");case 19:return to("SuspenseList");case 0:case 2:case 15:return t=qc(t.type,!1),t;case 11:return t=qc(t.type.render,!1),t;case 1:return t=qc(t.type,!0),t;default:return""}}function Hh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case bi:return"Fragment";case ki:return"Portal";case zh:return"Profiler";case Nf:return"StrictMode";case Bh:return"Suspense";case $h:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case l0:return(t.displayName||"Context")+".Consumer";case a0:return(t._context.displayName||"Context")+".Provider";case Lf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Mf:return e=t.displayName||null,e!==null?e:Hh(t.type)||"Memo";case Qn:e=t._payload,t=t._init;try{return Hh(t(e))}catch{}}return null}function VS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hh(e);case 8:return e===Nf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function c0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function FS(t){var e=c0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ga(t){t._valueTracker||(t._valueTracker=FS(t))}function h0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=c0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Fl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wh(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Mm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=wr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function d0(t,e){e=e.checked,e!=null&&xf(t,"checked",e,!1)}function qh(t,e){d0(t,e);var n=wr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Gh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Gh(t,e.type,wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Vm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Gh(t,e,n){(e!=="number"||Fl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var no=Array.isArray;function Hi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+wr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Kh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Fm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(no(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wr(n)}}function f0(t,e){var n=wr(e.value),r=wr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Um(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function p0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?p0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ka,g0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ka=Ka||document.createElement("div"),Ka.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ka.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Oo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},US=["Webkit","ms","Moz","O"];Object.keys(fo).forEach(function(t){US.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fo[e]=fo[t]})});function m0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fo.hasOwnProperty(t)&&fo[t]?(""+e).trim():e+"px"}function y0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=m0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var jS=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yh(t,e){if(e){if(jS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Xh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jh=null;function Vf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zh=null,Wi=null,qi=null;function jm(t){if(t=da(t)){if(typeof Zh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Vu(e),Zh(t.stateNode,t.type,e))}}function v0(t){Wi?qi?qi.push(t):qi=[t]:Wi=t}function _0(){if(Wi){var t=Wi,e=qi;if(qi=Wi=null,jm(t),e)for(t=0;t<e.length;t++)jm(e[t])}}function E0(t,e){return t(e)}function w0(){}var Gc=!1;function T0(t,e,n){if(Gc)return t(e,n);Gc=!0;try{return E0(t,e,n)}finally{Gc=!1,(Wi!==null||qi!==null)&&(w0(),_0())}}function Do(t,e){var n=t.stateNode;if(n===null)return null;var r=Vu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var ed=!1;if(bn)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){ed=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{ed=!1}function zS(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var po=!1,Ul=null,jl=!1,td=null,BS={onError:function(t){po=!0,Ul=t}};function $S(t,e,n,r,i,s,o,l,u){po=!1,Ul=null,zS.apply(BS,arguments)}function HS(t,e,n,r,i,s,o,l,u){if($S.apply(this,arguments),po){if(po){var c=Ul;po=!1,Ul=null}else throw Error(F(198));jl||(jl=!0,td=c)}}function gi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function I0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zm(t){if(gi(t)!==t)throw Error(F(188))}function WS(t){var e=t.alternate;if(!e){if(e=gi(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return zm(i),t;if(s===r)return zm(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function S0(t){return t=WS(t),t!==null?C0(t):null}function C0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=C0(t);if(e!==null)return e;t=t.sibling}return null}var P0=Ct.unstable_scheduleCallback,Bm=Ct.unstable_cancelCallback,qS=Ct.unstable_shouldYield,GS=Ct.unstable_requestPaint,be=Ct.unstable_now,KS=Ct.unstable_getCurrentPriorityLevel,Ff=Ct.unstable_ImmediatePriority,A0=Ct.unstable_UserBlockingPriority,zl=Ct.unstable_NormalPriority,QS=Ct.unstable_LowPriority,R0=Ct.unstable_IdlePriority,xu=null,rn=null;function YS(t){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(xu,t,void 0,(t.current.flags&128)===128)}catch{}}var qt=Math.clz32?Math.clz32:ZS,XS=Math.log,JS=Math.LN2;function ZS(t){return t>>>=0,t===0?32:31-(XS(t)/JS|0)|0}var Qa=64,Ya=4194304;function ro(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Bl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ro(l):(s&=o,s!==0&&(r=ro(s)))}else o=n&~i,o!==0?r=ro(o):s!==0&&(r=ro(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-qt(e),i=1<<n,r|=t[n],e&=~i;return r}function eC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-qt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=eC(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function nd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function k0(){var t=Qa;return Qa<<=1,!(Qa&4194240)&&(Qa=64),t}function Kc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ca(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qt(e),t[e]=n}function nC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-qt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Uf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-qt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ue=0;function b0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var O0,jf,D0,x0,N0,rd=!1,Xa=[],lr=null,ur=null,cr=null,xo=new Map,No=new Map,Xn=[],rC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $m(t,e){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":xo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(e.pointerId)}}function Ks(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=da(e),e!==null&&jf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function iC(t,e,n,r,i){switch(e){case"focusin":return lr=Ks(lr,t,e,n,r,i),!0;case"dragenter":return ur=Ks(ur,t,e,n,r,i),!0;case"mouseover":return cr=Ks(cr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return xo.set(s,Ks(xo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,No.set(s,Ks(No.get(s)||null,t,e,n,r,i)),!0}return!1}function L0(t){var e=Hr(t.target);if(e!==null){var n=gi(e);if(n!==null){if(e=n.tag,e===13){if(e=I0(n),e!==null){t.blockedOn=e,N0(t.priority,function(){D0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=id(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Jh=r,n.target.dispatchEvent(r),Jh=null}else return e=da(n),e!==null&&jf(e),t.blockedOn=n,!1;e.shift()}return!0}function Hm(t,e,n){yl(t)&&n.delete(e)}function sC(){rd=!1,lr!==null&&yl(lr)&&(lr=null),ur!==null&&yl(ur)&&(ur=null),cr!==null&&yl(cr)&&(cr=null),xo.forEach(Hm),No.forEach(Hm)}function Qs(t,e){t.blockedOn===e&&(t.blockedOn=null,rd||(rd=!0,Ct.unstable_scheduleCallback(Ct.unstable_NormalPriority,sC)))}function Lo(t){function e(i){return Qs(i,t)}if(0<Xa.length){Qs(Xa[0],t);for(var n=1;n<Xa.length;n++){var r=Xa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(lr!==null&&Qs(lr,t),ur!==null&&Qs(ur,t),cr!==null&&Qs(cr,t),xo.forEach(e),No.forEach(e),n=0;n<Xn.length;n++)r=Xn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Xn.length&&(n=Xn[0],n.blockedOn===null);)L0(n),n.blockedOn===null&&Xn.shift()}var Gi=Un.ReactCurrentBatchConfig,$l=!0;function oC(t,e,n,r){var i=ue,s=Gi.transition;Gi.transition=null;try{ue=1,zf(t,e,n,r)}finally{ue=i,Gi.transition=s}}function aC(t,e,n,r){var i=ue,s=Gi.transition;Gi.transition=null;try{ue=4,zf(t,e,n,r)}finally{ue=i,Gi.transition=s}}function zf(t,e,n,r){if($l){var i=id(t,e,n,r);if(i===null)ih(t,e,r,Hl,n),$m(t,r);else if(iC(i,t,e,n,r))r.stopPropagation();else if($m(t,r),e&4&&-1<rC.indexOf(t)){for(;i!==null;){var s=da(i);if(s!==null&&O0(s),s=id(t,e,n,r),s===null&&ih(t,e,r,Hl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ih(t,e,r,null,n)}}var Hl=null;function id(t,e,n,r){if(Hl=null,t=Vf(r),t=Hr(t),t!==null)if(e=gi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=I0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Hl=t,null}function M0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(KS()){case Ff:return 1;case A0:return 4;case zl:case QS:return 16;case R0:return 536870912;default:return 16}default:return 16}}var rr=null,Bf=null,vl=null;function V0(){if(vl)return vl;var t,e=Bf,n=e.length,r,i="value"in rr?rr.value:rr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return vl=i.slice(t,1<r?1-r:void 0)}function _l(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ja(){return!0}function Wm(){return!1}function Rt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ja:Wm,this.isPropagationStopped=Wm,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ja)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ja)},persist:function(){},isPersistent:Ja}),e}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$f=Rt(_s),ha=Ie({},_s,{view:0,detail:0}),lC=Rt(ha),Qc,Yc,Ys,Nu=Ie({},ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ys&&(Ys&&t.type==="mousemove"?(Qc=t.screenX-Ys.screenX,Yc=t.screenY-Ys.screenY):Yc=Qc=0,Ys=t),Qc)},movementY:function(t){return"movementY"in t?t.movementY:Yc}}),qm=Rt(Nu),uC=Ie({},Nu,{dataTransfer:0}),cC=Rt(uC),hC=Ie({},ha,{relatedTarget:0}),Xc=Rt(hC),dC=Ie({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),fC=Rt(dC),pC=Ie({},_s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gC=Rt(pC),mC=Ie({},_s,{data:0}),Gm=Rt(mC),yC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_C={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function EC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_C[t])?!!e[t]:!1}function Hf(){return EC}var wC=Ie({},ha,{key:function(t){if(t.key){var e=yC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_l(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hf,charCode:function(t){return t.type==="keypress"?_l(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_l(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),TC=Rt(wC),IC=Ie({},Nu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Km=Rt(IC),SC=Ie({},ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hf}),CC=Rt(SC),PC=Ie({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),AC=Rt(PC),RC=Ie({},Nu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kC=Rt(RC),bC=[9,13,27,32],Wf=bn&&"CompositionEvent"in window,go=null;bn&&"documentMode"in document&&(go=document.documentMode);var OC=bn&&"TextEvent"in window&&!go,F0=bn&&(!Wf||go&&8<go&&11>=go),Qm=" ",Ym=!1;function U0(t,e){switch(t){case"keyup":return bC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function j0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Oi=!1;function DC(t,e){switch(t){case"compositionend":return j0(e);case"keypress":return e.which!==32?null:(Ym=!0,Qm);case"textInput":return t=e.data,t===Qm&&Ym?null:t;default:return null}}function xC(t,e){if(Oi)return t==="compositionend"||!Wf&&U0(t,e)?(t=V0(),vl=Bf=rr=null,Oi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return F0&&e.locale!=="ko"?null:e.data;default:return null}}var NC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!NC[t.type]:e==="textarea"}function z0(t,e,n,r){v0(r),e=Wl(e,"onChange"),0<e.length&&(n=new $f("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var mo=null,Mo=null;function LC(t){J0(t,0)}function Lu(t){var e=Ni(t);if(h0(e))return t}function MC(t,e){if(t==="change")return e}var B0=!1;if(bn){var Jc;if(bn){var Zc="oninput"in document;if(!Zc){var Jm=document.createElement("div");Jm.setAttribute("oninput","return;"),Zc=typeof Jm.oninput=="function"}Jc=Zc}else Jc=!1;B0=Jc&&(!document.documentMode||9<document.documentMode)}function Zm(){mo&&(mo.detachEvent("onpropertychange",$0),Mo=mo=null)}function $0(t){if(t.propertyName==="value"&&Lu(Mo)){var e=[];z0(e,Mo,t,Vf(t)),T0(LC,e)}}function VC(t,e,n){t==="focusin"?(Zm(),mo=e,Mo=n,mo.attachEvent("onpropertychange",$0)):t==="focusout"&&Zm()}function FC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Lu(Mo)}function UC(t,e){if(t==="click")return Lu(e)}function jC(t,e){if(t==="input"||t==="change")return Lu(e)}function zC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kt=typeof Object.is=="function"?Object.is:zC;function Vo(t,e){if(Kt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!jh.call(e,i)||!Kt(t[i],e[i]))return!1}return!0}function ey(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ty(t,e){var n=ey(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ey(n)}}function H0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?H0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function W0(){for(var t=window,e=Fl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Fl(t.document)}return e}function qf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function BC(t){var e=W0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&H0(n.ownerDocument.documentElement,n)){if(r!==null&&qf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ty(n,s);var o=ty(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $C=bn&&"documentMode"in document&&11>=document.documentMode,Di=null,sd=null,yo=null,od=!1;function ny(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;od||Di==null||Di!==Fl(r)||(r=Di,"selectionStart"in r&&qf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yo&&Vo(yo,r)||(yo=r,r=Wl(sd,"onSelect"),0<r.length&&(e=new $f("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Di)))}function Za(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xi={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionend:Za("Transition","TransitionEnd")},eh={},q0={};bn&&(q0=document.createElement("div").style,"AnimationEvent"in window||(delete xi.animationend.animation,delete xi.animationiteration.animation,delete xi.animationstart.animation),"TransitionEvent"in window||delete xi.transitionend.transition);function Mu(t){if(eh[t])return eh[t];if(!xi[t])return t;var e=xi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in q0)return eh[t]=e[n];return t}var G0=Mu("animationend"),K0=Mu("animationiteration"),Q0=Mu("animationstart"),Y0=Mu("transitionend"),X0=new Map,ry="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(t,e){X0.set(t,e),pi(e,[t])}for(var th=0;th<ry.length;th++){var nh=ry[th],HC=nh.toLowerCase(),WC=nh[0].toUpperCase()+nh.slice(1);kr(HC,"on"+WC)}kr(G0,"onAnimationEnd");kr(K0,"onAnimationIteration");kr(Q0,"onAnimationStart");kr("dblclick","onDoubleClick");kr("focusin","onFocus");kr("focusout","onBlur");kr(Y0,"onTransitionEnd");ts("onMouseEnter",["mouseout","mouseover"]);ts("onMouseLeave",["mouseout","mouseover"]);ts("onPointerEnter",["pointerout","pointerover"]);ts("onPointerLeave",["pointerout","pointerover"]);pi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pi("onBeforeInput",["compositionend","keypress","textInput","paste"]);pi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qC=new Set("cancel close invalid load scroll toggle".split(" ").concat(io));function iy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,HS(r,e,void 0,t),t.currentTarget=null}function J0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;iy(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;iy(i,l,c),s=u}}}if(jl)throw t=td,jl=!1,td=null,t}function ge(t,e){var n=e[hd];n===void 0&&(n=e[hd]=new Set);var r=t+"__bubble";n.has(r)||(Z0(e,t,2,!1),n.add(r))}function rh(t,e,n){var r=0;e&&(r|=4),Z0(n,t,r,e)}var el="_reactListening"+Math.random().toString(36).slice(2);function Fo(t){if(!t[el]){t[el]=!0,o0.forEach(function(n){n!=="selectionchange"&&(qC.has(n)||rh(n,!1,t),rh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[el]||(e[el]=!0,rh("selectionchange",!1,e))}}function Z0(t,e,n,r){switch(M0(e)){case 1:var i=oC;break;case 4:i=aC;break;default:i=zf}n=i.bind(null,e,n,t),i=void 0,!ed||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ih(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Hr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}T0(function(){var c=s,d=Vf(n),p=[];e:{var g=X0.get(t);if(g!==void 0){var E=$f,A=t;switch(t){case"keypress":if(_l(n)===0)break e;case"keydown":case"keyup":E=TC;break;case"focusin":A="focus",E=Xc;break;case"focusout":A="blur",E=Xc;break;case"beforeblur":case"afterblur":E=Xc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=qm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=cC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=CC;break;case G0:case K0:case Q0:E=fC;break;case Y0:E=AC;break;case"scroll":E=lC;break;case"wheel":E=kC;break;case"copy":case"cut":case"paste":E=gC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Km}var R=(e&4)!==0,k=!R&&t==="scroll",_=R?g!==null?g+"Capture":null:g;R=[];for(var v=c,I;v!==null;){I=v;var D=I.stateNode;if(I.tag===5&&D!==null&&(I=D,_!==null&&(D=Do(v,_),D!=null&&R.push(Uo(v,D,I)))),k)break;v=v.return}0<R.length&&(g=new E(g,A,null,n,d),p.push({event:g,listeners:R}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",g&&n!==Jh&&(A=n.relatedTarget||n.fromElement)&&(Hr(A)||A[On]))break e;if((E||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,E?(A=n.relatedTarget||n.toElement,E=c,A=A?Hr(A):null,A!==null&&(k=gi(A),A!==k||A.tag!==5&&A.tag!==6)&&(A=null)):(E=null,A=c),E!==A)){if(R=qm,D="onMouseLeave",_="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(R=Km,D="onPointerLeave",_="onPointerEnter",v="pointer"),k=E==null?g:Ni(E),I=A==null?g:Ni(A),g=new R(D,v+"leave",E,n,d),g.target=k,g.relatedTarget=I,D=null,Hr(d)===c&&(R=new R(_,v+"enter",A,n,d),R.target=I,R.relatedTarget=k,D=R),k=D,E&&A)t:{for(R=E,_=A,v=0,I=R;I;I=Ii(I))v++;for(I=0,D=_;D;D=Ii(D))I++;for(;0<v-I;)R=Ii(R),v--;for(;0<I-v;)_=Ii(_),I--;for(;v--;){if(R===_||_!==null&&R===_.alternate)break t;R=Ii(R),_=Ii(_)}R=null}else R=null;E!==null&&sy(p,g,E,R,!1),A!==null&&k!==null&&sy(p,k,A,R,!0)}}e:{if(g=c?Ni(c):window,E=g.nodeName&&g.nodeName.toLowerCase(),E==="select"||E==="input"&&g.type==="file")var L=MC;else if(Xm(g))if(B0)L=jC;else{L=FC;var U=VC}else(E=g.nodeName)&&E.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(L=UC);if(L&&(L=L(t,c))){z0(p,L,n,d);break e}U&&U(t,g,c),t==="focusout"&&(U=g._wrapperState)&&U.controlled&&g.type==="number"&&Gh(g,"number",g.value)}switch(U=c?Ni(c):window,t){case"focusin":(Xm(U)||U.contentEditable==="true")&&(Di=U,sd=c,yo=null);break;case"focusout":yo=sd=Di=null;break;case"mousedown":od=!0;break;case"contextmenu":case"mouseup":case"dragend":od=!1,ny(p,n,d);break;case"selectionchange":if($C)break;case"keydown":case"keyup":ny(p,n,d)}var w;if(Wf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Oi?U0(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(F0&&n.locale!=="ko"&&(Oi||y!=="onCompositionStart"?y==="onCompositionEnd"&&Oi&&(w=V0()):(rr=d,Bf="value"in rr?rr.value:rr.textContent,Oi=!0)),U=Wl(c,y),0<U.length&&(y=new Gm(y,t,null,n,d),p.push({event:y,listeners:U}),w?y.data=w:(w=j0(n),w!==null&&(y.data=w)))),(w=OC?DC(t,n):xC(t,n))&&(c=Wl(c,"onBeforeInput"),0<c.length&&(d=new Gm("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=w))}J0(p,e)})}function Uo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Wl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Do(t,n),s!=null&&r.unshift(Uo(t,s,i)),s=Do(t,e),s!=null&&r.push(Uo(t,s,i))),t=t.return}return r}function Ii(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function sy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Do(n,s),u!=null&&o.unshift(Uo(n,u,l))):i||(u=Do(n,s),u!=null&&o.push(Uo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var GC=/\r\n?/g,KC=/\u0000|\uFFFD/g;function oy(t){return(typeof t=="string"?t:""+t).replace(GC,`
`).replace(KC,"")}function tl(t,e,n){if(e=oy(e),oy(t)!==e&&n)throw Error(F(425))}function ql(){}var ad=null,ld=null;function ud(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var cd=typeof setTimeout=="function"?setTimeout:void 0,QC=typeof clearTimeout=="function"?clearTimeout:void 0,ay=typeof Promise=="function"?Promise:void 0,YC=typeof queueMicrotask=="function"?queueMicrotask:typeof ay<"u"?function(t){return ay.resolve(null).then(t).catch(XC)}:cd;function XC(t){setTimeout(function(){throw t})}function sh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Lo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Lo(e)}function hr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ly(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Es=Math.random().toString(36).slice(2),Zt="__reactFiber$"+Es,jo="__reactProps$"+Es,On="__reactContainer$"+Es,hd="__reactEvents$"+Es,JC="__reactListeners$"+Es,ZC="__reactHandles$"+Es;function Hr(t){var e=t[Zt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[On]||n[Zt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ly(t);t!==null;){if(n=t[Zt])return n;t=ly(t)}return e}t=n,n=t.parentNode}return null}function da(t){return t=t[Zt]||t[On],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ni(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Vu(t){return t[jo]||null}var dd=[],Li=-1;function br(t){return{current:t}}function me(t){0>Li||(t.current=dd[Li],dd[Li]=null,Li--)}function de(t,e){Li++,dd[Li]=t.current,t.current=e}var Tr={},st=br(Tr),gt=br(!1),Zr=Tr;function ns(t,e){var n=t.type.contextTypes;if(!n)return Tr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function mt(t){return t=t.childContextTypes,t!=null}function Gl(){me(gt),me(st)}function uy(t,e,n){if(st.current!==Tr)throw Error(F(168));de(st,e),de(gt,n)}function eE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,VS(t)||"Unknown",i));return Ie({},n,r)}function Kl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Tr,Zr=st.current,de(st,t),de(gt,gt.current),!0}function cy(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=eE(t,e,Zr),r.__reactInternalMemoizedMergedChildContext=t,me(gt),me(st),de(st,t)):me(gt),de(gt,n)}var wn=null,Fu=!1,oh=!1;function tE(t){wn===null?wn=[t]:wn.push(t)}function eP(t){Fu=!0,tE(t)}function Or(){if(!oh&&wn!==null){oh=!0;var t=0,e=ue;try{var n=wn;for(ue=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}wn=null,Fu=!1}catch(i){throw wn!==null&&(wn=wn.slice(t+1)),P0(Ff,Or),i}finally{ue=e,oh=!1}}return null}var Mi=[],Vi=0,Ql=null,Yl=0,Ot=[],Dt=0,ei=null,Tn=1,In="";function jr(t,e){Mi[Vi++]=Yl,Mi[Vi++]=Ql,Ql=t,Yl=e}function nE(t,e,n){Ot[Dt++]=Tn,Ot[Dt++]=In,Ot[Dt++]=ei,ei=t;var r=Tn;t=In;var i=32-qt(r)-1;r&=~(1<<i),n+=1;var s=32-qt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Tn=1<<32-qt(e)+i|n<<i|r,In=s+t}else Tn=1<<s|n<<i|r,In=t}function Gf(t){t.return!==null&&(jr(t,1),nE(t,1,0))}function Kf(t){for(;t===Ql;)Ql=Mi[--Vi],Mi[Vi]=null,Yl=Mi[--Vi],Mi[Vi]=null;for(;t===ei;)ei=Ot[--Dt],Ot[Dt]=null,In=Ot[--Dt],Ot[Dt]=null,Tn=Ot[--Dt],Ot[Dt]=null}var Tt=null,wt=null,ve=!1,Ht=null;function rE(t,e){var n=Lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function hy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tt=t,wt=hr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tt=t,wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ei!==null?{id:Tn,overflow:In}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tt=t,wt=null,!0):!1;default:return!1}}function fd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pd(t){if(ve){var e=wt;if(e){var n=e;if(!hy(t,e)){if(fd(t))throw Error(F(418));e=hr(n.nextSibling);var r=Tt;e&&hy(t,e)?rE(r,n):(t.flags=t.flags&-4097|2,ve=!1,Tt=t)}}else{if(fd(t))throw Error(F(418));t.flags=t.flags&-4097|2,ve=!1,Tt=t}}}function dy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tt=t}function nl(t){if(t!==Tt)return!1;if(!ve)return dy(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ud(t.type,t.memoizedProps)),e&&(e=wt)){if(fd(t))throw iE(),Error(F(418));for(;e;)rE(t,e),e=hr(e.nextSibling)}if(dy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wt=hr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wt=null}}else wt=Tt?hr(t.stateNode.nextSibling):null;return!0}function iE(){for(var t=wt;t;)t=hr(t.nextSibling)}function rs(){wt=Tt=null,ve=!1}function Qf(t){Ht===null?Ht=[t]:Ht.push(t)}var tP=Un.ReactCurrentBatchConfig;function Xs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function rl(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function fy(t){var e=t._init;return e(t._payload)}function sE(t){function e(_,v){if(t){var I=_.deletions;I===null?(_.deletions=[v],_.flags|=16):I.push(v)}}function n(_,v){if(!t)return null;for(;v!==null;)e(_,v),v=v.sibling;return null}function r(_,v){for(_=new Map;v!==null;)v.key!==null?_.set(v.key,v):_.set(v.index,v),v=v.sibling;return _}function i(_,v){return _=gr(_,v),_.index=0,_.sibling=null,_}function s(_,v,I){return _.index=I,t?(I=_.alternate,I!==null?(I=I.index,I<v?(_.flags|=2,v):I):(_.flags|=2,v)):(_.flags|=1048576,v)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function l(_,v,I,D){return v===null||v.tag!==6?(v=fh(I,_.mode,D),v.return=_,v):(v=i(v,I),v.return=_,v)}function u(_,v,I,D){var L=I.type;return L===bi?d(_,v,I.props.children,D,I.key):v!==null&&(v.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Qn&&fy(L)===v.type)?(D=i(v,I.props),D.ref=Xs(_,v,I),D.return=_,D):(D=Pl(I.type,I.key,I.props,null,_.mode,D),D.ref=Xs(_,v,I),D.return=_,D)}function c(_,v,I,D){return v===null||v.tag!==4||v.stateNode.containerInfo!==I.containerInfo||v.stateNode.implementation!==I.implementation?(v=ph(I,_.mode,D),v.return=_,v):(v=i(v,I.children||[]),v.return=_,v)}function d(_,v,I,D,L){return v===null||v.tag!==7?(v=Qr(I,_.mode,D,L),v.return=_,v):(v=i(v,I),v.return=_,v)}function p(_,v,I){if(typeof v=="string"&&v!==""||typeof v=="number")return v=fh(""+v,_.mode,I),v.return=_,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case qa:return I=Pl(v.type,v.key,v.props,null,_.mode,I),I.ref=Xs(_,null,v),I.return=_,I;case ki:return v=ph(v,_.mode,I),v.return=_,v;case Qn:var D=v._init;return p(_,D(v._payload),I)}if(no(v)||qs(v))return v=Qr(v,_.mode,I,null),v.return=_,v;rl(_,v)}return null}function g(_,v,I,D){var L=v!==null?v.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return L!==null?null:l(_,v,""+I,D);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case qa:return I.key===L?u(_,v,I,D):null;case ki:return I.key===L?c(_,v,I,D):null;case Qn:return L=I._init,g(_,v,L(I._payload),D)}if(no(I)||qs(I))return L!==null?null:d(_,v,I,D,null);rl(_,I)}return null}function E(_,v,I,D,L){if(typeof D=="string"&&D!==""||typeof D=="number")return _=_.get(I)||null,l(v,_,""+D,L);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case qa:return _=_.get(D.key===null?I:D.key)||null,u(v,_,D,L);case ki:return _=_.get(D.key===null?I:D.key)||null,c(v,_,D,L);case Qn:var U=D._init;return E(_,v,I,U(D._payload),L)}if(no(D)||qs(D))return _=_.get(I)||null,d(v,_,D,L,null);rl(v,D)}return null}function A(_,v,I,D){for(var L=null,U=null,w=v,y=v=0,T=null;w!==null&&y<I.length;y++){w.index>y?(T=w,w=null):T=w.sibling;var P=g(_,w,I[y],D);if(P===null){w===null&&(w=T);break}t&&w&&P.alternate===null&&e(_,w),v=s(P,v,y),U===null?L=P:U.sibling=P,U=P,w=T}if(y===I.length)return n(_,w),ve&&jr(_,y),L;if(w===null){for(;y<I.length;y++)w=p(_,I[y],D),w!==null&&(v=s(w,v,y),U===null?L=w:U.sibling=w,U=w);return ve&&jr(_,y),L}for(w=r(_,w);y<I.length;y++)T=E(w,_,y,I[y],D),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?y:T.key),v=s(T,v,y),U===null?L=T:U.sibling=T,U=T);return t&&w.forEach(function(S){return e(_,S)}),ve&&jr(_,y),L}function R(_,v,I,D){var L=qs(I);if(typeof L!="function")throw Error(F(150));if(I=L.call(I),I==null)throw Error(F(151));for(var U=L=null,w=v,y=v=0,T=null,P=I.next();w!==null&&!P.done;y++,P=I.next()){w.index>y?(T=w,w=null):T=w.sibling;var S=g(_,w,P.value,D);if(S===null){w===null&&(w=T);break}t&&w&&S.alternate===null&&e(_,w),v=s(S,v,y),U===null?L=S:U.sibling=S,U=S,w=T}if(P.done)return n(_,w),ve&&jr(_,y),L;if(w===null){for(;!P.done;y++,P=I.next())P=p(_,P.value,D),P!==null&&(v=s(P,v,y),U===null?L=P:U.sibling=P,U=P);return ve&&jr(_,y),L}for(w=r(_,w);!P.done;y++,P=I.next())P=E(w,_,y,P.value,D),P!==null&&(t&&P.alternate!==null&&w.delete(P.key===null?y:P.key),v=s(P,v,y),U===null?L=P:U.sibling=P,U=P);return t&&w.forEach(function(b){return e(_,b)}),ve&&jr(_,y),L}function k(_,v,I,D){if(typeof I=="object"&&I!==null&&I.type===bi&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case qa:e:{for(var L=I.key,U=v;U!==null;){if(U.key===L){if(L=I.type,L===bi){if(U.tag===7){n(_,U.sibling),v=i(U,I.props.children),v.return=_,_=v;break e}}else if(U.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Qn&&fy(L)===U.type){n(_,U.sibling),v=i(U,I.props),v.ref=Xs(_,U,I),v.return=_,_=v;break e}n(_,U);break}else e(_,U);U=U.sibling}I.type===bi?(v=Qr(I.props.children,_.mode,D,I.key),v.return=_,_=v):(D=Pl(I.type,I.key,I.props,null,_.mode,D),D.ref=Xs(_,v,I),D.return=_,_=D)}return o(_);case ki:e:{for(U=I.key;v!==null;){if(v.key===U)if(v.tag===4&&v.stateNode.containerInfo===I.containerInfo&&v.stateNode.implementation===I.implementation){n(_,v.sibling),v=i(v,I.children||[]),v.return=_,_=v;break e}else{n(_,v);break}else e(_,v);v=v.sibling}v=ph(I,_.mode,D),v.return=_,_=v}return o(_);case Qn:return U=I._init,k(_,v,U(I._payload),D)}if(no(I))return A(_,v,I,D);if(qs(I))return R(_,v,I,D);rl(_,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,v!==null&&v.tag===6?(n(_,v.sibling),v=i(v,I),v.return=_,_=v):(n(_,v),v=fh(I,_.mode,D),v.return=_,_=v),o(_)):n(_,v)}return k}var is=sE(!0),oE=sE(!1),Xl=br(null),Jl=null,Fi=null,Yf=null;function Xf(){Yf=Fi=Jl=null}function Jf(t){var e=Xl.current;me(Xl),t._currentValue=e}function gd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ki(t,e){Jl=t,Yf=Fi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pt=!0),t.firstContext=null)}function Ft(t){var e=t._currentValue;if(Yf!==t)if(t={context:t,memoizedValue:e,next:null},Fi===null){if(Jl===null)throw Error(F(308));Fi=t,Jl.dependencies={lanes:0,firstContext:t}}else Fi=Fi.next=t;return e}var Wr=null;function Zf(t){Wr===null?Wr=[t]:Wr.push(t)}function aE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Zf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Dn(t,r)}function Dn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yn=!1;function ep(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function An(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function dr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Dn(t,n)}return i=r.interleaved,i===null?(e.next=e,Zf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Dn(t,n)}function El(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Uf(t,n)}}function py(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Zl(t,e,n,r){var i=t.updateQueue;Yn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var g=l.lane,E=l.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:E,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=t,R=l;switch(g=e,E=n,R.tag){case 1:if(A=R.payload,typeof A=="function"){p=A.call(E,p,g);break e}p=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=R.payload,g=typeof A=="function"?A.call(E,p,g):A,g==null)break e;p=Ie({},p,g);break e;case 2:Yn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else E={eventTime:E,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=E,u=p):d=d.next=E,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ni|=o,t.lanes=o,t.memoizedState=p}}function gy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var fa={},sn=br(fa),zo=br(fa),Bo=br(fa);function qr(t){if(t===fa)throw Error(F(174));return t}function tp(t,e){switch(de(Bo,e),de(zo,t),de(sn,fa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Qh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Qh(e,t)}me(sn),de(sn,e)}function ss(){me(sn),me(zo),me(Bo)}function uE(t){qr(Bo.current);var e=qr(sn.current),n=Qh(e,t.type);e!==n&&(de(zo,t),de(sn,n))}function np(t){zo.current===t&&(me(sn),me(zo))}var we=br(0);function eu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ah=[];function rp(){for(var t=0;t<ah.length;t++)ah[t]._workInProgressVersionPrimary=null;ah.length=0}var wl=Un.ReactCurrentDispatcher,lh=Un.ReactCurrentBatchConfig,ti=0,Te=null,Le=null,je=null,tu=!1,vo=!1,$o=0,nP=0;function Ze(){throw Error(F(321))}function ip(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kt(t[n],e[n]))return!1;return!0}function sp(t,e,n,r,i,s){if(ti=s,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wl.current=t===null||t.memoizedState===null?oP:aP,t=n(r,i),vo){s=0;do{if(vo=!1,$o=0,25<=s)throw Error(F(301));s+=1,je=Le=null,e.updateQueue=null,wl.current=lP,t=n(r,i)}while(vo)}if(wl.current=nu,e=Le!==null&&Le.next!==null,ti=0,je=Le=Te=null,tu=!1,e)throw Error(F(300));return t}function op(){var t=$o!==0;return $o=0,t}function Xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?Te.memoizedState=je=t:je=je.next=t,je}function Ut(){if(Le===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var e=je===null?Te.memoizedState:je.next;if(e!==null)je=e,Le=t;else{if(t===null)throw Error(F(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},je===null?Te.memoizedState=je=t:je=je.next=t}return je}function Ho(t,e){return typeof e=="function"?e(t):e}function uh(t){var e=Ut(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Le,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((ti&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Te.lanes|=d,ni|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Kt(r,e.memoizedState)||(pt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Te.lanes|=s,ni|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ch(t){var e=Ut(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Kt(s,e.memoizedState)||(pt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function cE(){}function hE(t,e){var n=Te,r=Ut(),i=e(),s=!Kt(r.memoizedState,i);if(s&&(r.memoizedState=i,pt=!0),r=r.queue,ap(pE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,Wo(9,fE.bind(null,n,r,i,e),void 0,null),ze===null)throw Error(F(349));ti&30||dE(n,e,i)}return i}function dE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function fE(t,e,n,r){e.value=n,e.getSnapshot=r,gE(e)&&mE(t)}function pE(t,e,n){return n(function(){gE(e)&&mE(t)})}function gE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kt(t,n)}catch{return!0}}function mE(t){var e=Dn(t,1);e!==null&&Gt(e,t,1,-1)}function my(t){var e=Xt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:t},e.queue=t,t=t.dispatch=sP.bind(null,Te,t),[e.memoizedState,t]}function Wo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function yE(){return Ut().memoizedState}function Tl(t,e,n,r){var i=Xt();Te.flags|=t,i.memoizedState=Wo(1|e,n,void 0,r===void 0?null:r)}function Uu(t,e,n,r){var i=Ut();r=r===void 0?null:r;var s=void 0;if(Le!==null){var o=Le.memoizedState;if(s=o.destroy,r!==null&&ip(r,o.deps)){i.memoizedState=Wo(e,n,s,r);return}}Te.flags|=t,i.memoizedState=Wo(1|e,n,s,r)}function yy(t,e){return Tl(8390656,8,t,e)}function ap(t,e){return Uu(2048,8,t,e)}function vE(t,e){return Uu(4,2,t,e)}function _E(t,e){return Uu(4,4,t,e)}function EE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function wE(t,e,n){return n=n!=null?n.concat([t]):null,Uu(4,4,EE.bind(null,e,t),n)}function lp(){}function TE(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ip(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function IE(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ip(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function SE(t,e,n){return ti&21?(Kt(n,e)||(n=k0(),Te.lanes|=n,ni|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pt=!0),t.memoizedState=n)}function rP(t,e){var n=ue;ue=n!==0&&4>n?n:4,t(!0);var r=lh.transition;lh.transition={};try{t(!1),e()}finally{ue=n,lh.transition=r}}function CE(){return Ut().memoizedState}function iP(t,e,n){var r=pr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},PE(t))AE(e,n);else if(n=aE(t,e,n,r),n!==null){var i=ct();Gt(n,t,r,i),RE(n,e,r)}}function sP(t,e,n){var r=pr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(PE(t))AE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Kt(l,o)){var u=e.interleaved;u===null?(i.next=i,Zf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=aE(t,e,i,r),n!==null&&(i=ct(),Gt(n,t,r,i),RE(n,e,r))}}function PE(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function AE(t,e){vo=tu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function RE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Uf(t,n)}}var nu={readContext:Ft,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},oP={readContext:Ft,useCallback:function(t,e){return Xt().memoizedState=[t,e===void 0?null:e],t},useContext:Ft,useEffect:yy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Tl(4194308,4,EE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Tl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Tl(4,2,t,e)},useMemo:function(t,e){var n=Xt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Xt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=iP.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=Xt();return t={current:t},e.memoizedState=t},useState:my,useDebugValue:lp,useDeferredValue:function(t){return Xt().memoizedState=t},useTransition:function(){var t=my(!1),e=t[0];return t=rP.bind(null,t[1]),Xt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,i=Xt();if(ve){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),ze===null)throw Error(F(349));ti&30||dE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,yy(pE.bind(null,r,s,t),[t]),r.flags|=2048,Wo(9,fE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Xt(),e=ze.identifierPrefix;if(ve){var n=In,r=Tn;n=(r&~(1<<32-qt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=$o++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=nP++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},aP={readContext:Ft,useCallback:TE,useContext:Ft,useEffect:ap,useImperativeHandle:wE,useInsertionEffect:vE,useLayoutEffect:_E,useMemo:IE,useReducer:uh,useRef:yE,useState:function(){return uh(Ho)},useDebugValue:lp,useDeferredValue:function(t){var e=Ut();return SE(e,Le.memoizedState,t)},useTransition:function(){var t=uh(Ho)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:cE,useSyncExternalStore:hE,useId:CE,unstable_isNewReconciler:!1},lP={readContext:Ft,useCallback:TE,useContext:Ft,useEffect:ap,useImperativeHandle:wE,useInsertionEffect:vE,useLayoutEffect:_E,useMemo:IE,useReducer:ch,useRef:yE,useState:function(){return ch(Ho)},useDebugValue:lp,useDeferredValue:function(t){var e=Ut();return Le===null?e.memoizedState=t:SE(e,Le.memoizedState,t)},useTransition:function(){var t=ch(Ho)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:cE,useSyncExternalStore:hE,useId:CE,unstable_isNewReconciler:!1};function Bt(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function md(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ju={isMounted:function(t){return(t=t._reactInternals)?gi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ct(),i=pr(t),s=An(r,i);s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,i),e!==null&&(Gt(e,t,i,r),El(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ct(),i=pr(t),s=An(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,i),e!==null&&(Gt(e,t,i,r),El(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ct(),r=pr(t),i=An(n,r);i.tag=2,e!=null&&(i.callback=e),e=dr(t,i,r),e!==null&&(Gt(e,t,r,n),El(e,t,r))}};function vy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Vo(n,r)||!Vo(i,s):!0}function kE(t,e,n){var r=!1,i=Tr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ft(s):(i=mt(e)?Zr:st.current,r=e.contextTypes,s=(r=r!=null)?ns(t,i):Tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ju,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function _y(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ju.enqueueReplaceState(e,e.state,null)}function yd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ep(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ft(s):(s=mt(e)?Zr:st.current,i.context=ns(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(md(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ju.enqueueReplaceState(i,i.state,null),Zl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function os(t,e){try{var n="",r=e;do n+=MS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function hh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function vd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var uP=typeof WeakMap=="function"?WeakMap:Map;function bE(t,e,n){n=An(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){iu||(iu=!0,Rd=r),vd(t,e)},n}function OE(t,e,n){n=An(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){vd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){vd(t,e),typeof r!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ey(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new uP;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=IP.bind(null,t,e,n),e.then(t,t))}function wy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ty(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=An(-1,1),e.tag=2,dr(n,e,1))),n.lanes|=1),t)}var cP=Un.ReactCurrentOwner,pt=!1;function ut(t,e,n,r){e.child=t===null?oE(e,null,n,r):is(e,t.child,n,r)}function Iy(t,e,n,r,i){n=n.render;var s=e.ref;return Ki(e,i),r=sp(t,e,n,r,s,i),n=op(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xn(t,e,i)):(ve&&n&&Gf(e),e.flags|=1,ut(t,e,r,i),e.child)}function Sy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!mp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,DE(t,e,s,r,i)):(t=Pl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Vo,n(o,r)&&t.ref===e.ref)return xn(t,e,i)}return e.flags|=1,t=gr(s,r),t.ref=e.ref,t.return=e,e.child=t}function DE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Vo(s,r)&&t.ref===e.ref)if(pt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(pt=!0);else return e.lanes=t.lanes,xn(t,e,i)}return _d(t,e,n,r,i)}function xE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(ji,Et),Et|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(ji,Et),Et|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(ji,Et),Et|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,de(ji,Et),Et|=r;return ut(t,e,i,n),e.child}function NE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _d(t,e,n,r,i){var s=mt(n)?Zr:st.current;return s=ns(e,s),Ki(e,i),n=sp(t,e,n,r,s,i),r=op(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xn(t,e,i)):(ve&&r&&Gf(e),e.flags|=1,ut(t,e,n,i),e.child)}function Cy(t,e,n,r,i){if(mt(n)){var s=!0;Kl(e)}else s=!1;if(Ki(e,i),e.stateNode===null)Il(t,e),kE(e,n,r),yd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ft(c):(c=mt(n)?Zr:st.current,c=ns(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&_y(e,o,r,c),Yn=!1;var g=e.memoizedState;o.state=g,Zl(e,r,o,i),u=e.memoizedState,l!==r||g!==u||gt.current||Yn?(typeof d=="function"&&(md(e,n,d,r),u=e.memoizedState),(l=Yn||vy(e,n,l,r,g,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,lE(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Bt(e.type,l),o.props=c,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ft(u):(u=mt(n)?Zr:st.current,u=ns(e,u));var E=n.getDerivedStateFromProps;(d=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&_y(e,o,r,u),Yn=!1,g=e.memoizedState,o.state=g,Zl(e,r,o,i);var A=e.memoizedState;l!==p||g!==A||gt.current||Yn?(typeof E=="function"&&(md(e,n,E,r),A=e.memoizedState),(c=Yn||vy(e,n,c,r,g,A,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Ed(t,e,n,r,s,i)}function Ed(t,e,n,r,i,s){NE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&cy(e,n,!1),xn(t,e,s);r=e.stateNode,cP.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=is(e,t.child,null,s),e.child=is(e,null,l,s)):ut(t,e,l,s),e.memoizedState=r.state,i&&cy(e,n,!0),e.child}function LE(t){var e=t.stateNode;e.pendingContext?uy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&uy(t,e.context,!1),tp(t,e.containerInfo)}function Py(t,e,n,r,i){return rs(),Qf(i),e.flags|=256,ut(t,e,n,r),e.child}var wd={dehydrated:null,treeContext:null,retryLane:0};function Td(t){return{baseLanes:t,cachePool:null,transitions:null}}function ME(t,e,n){var r=e.pendingProps,i=we.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),de(we,i&1),t===null)return pd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=$u(o,r,0,null),t=Qr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Td(n),e.memoizedState=wd,t):up(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return hP(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=gr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=gr(l,s):(s=Qr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Td(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=wd,r}return s=t.child,t=s.sibling,r=gr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function up(t,e){return e=$u({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function il(t,e,n,r){return r!==null&&Qf(r),is(e,t.child,null,n),t=up(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hP(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=hh(Error(F(422))),il(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=$u({mode:"visible",children:r.children},i,0,null),s=Qr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&is(e,t.child,null,o),e.child.memoizedState=Td(o),e.memoizedState=wd,s);if(!(e.mode&1))return il(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=hh(s,r,void 0),il(t,e,o,r)}if(l=(o&t.childLanes)!==0,pt||l){if(r=ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Dn(t,i),Gt(r,t,i,-1))}return gp(),r=hh(Error(F(421))),il(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=SP.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,wt=hr(i.nextSibling),Tt=e,ve=!0,Ht=null,t!==null&&(Ot[Dt++]=Tn,Ot[Dt++]=In,Ot[Dt++]=ei,Tn=t.id,In=t.overflow,ei=e),e=up(e,r.children),e.flags|=4096,e)}function Ay(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),gd(t.return,e,n)}function dh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function VE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ut(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ay(t,n,e);else if(t.tag===19)Ay(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(we,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&eu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),dh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&eu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}dh(e,!0,n,null,s);break;case"together":dh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Il(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function xn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ni|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=gr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=gr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function dP(t,e,n){switch(e.tag){case 3:LE(e),rs();break;case 5:uE(e);break;case 1:mt(e.type)&&Kl(e);break;case 4:tp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;de(Xl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?ME(t,e,n):(de(we,we.current&1),t=xn(t,e,n),t!==null?t.sibling:null);de(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return VE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,xE(t,e,n)}return xn(t,e,n)}var FE,Id,UE,jE;FE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Id=function(){};UE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,qr(sn.current);var s=null;switch(n){case"input":i=Wh(t,i),r=Wh(t,r),s=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),s=[];break;case"textarea":i=Kh(t,i),r=Kh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ql)}Yh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(bo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(bo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ge("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};jE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Js(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function fP(t,e,n){var r=e.pendingProps;switch(Kf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(e),null;case 1:return mt(e.type)&&Gl(),et(e),null;case 3:return r=e.stateNode,ss(),me(gt),me(st),rp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(nl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ht!==null&&(Od(Ht),Ht=null))),Id(t,e),et(e),null;case 5:np(e);var i=qr(Bo.current);if(n=e.type,t!==null&&e.stateNode!=null)UE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return et(e),null}if(t=qr(sn.current),nl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Zt]=e,r[jo]=s,t=(e.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<io.length;i++)ge(io[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":Mm(r,s),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ge("invalid",r);break;case"textarea":Fm(r,s),ge("invalid",r)}Yh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&tl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&tl(r.textContent,l,t),i=["children",""+l]):bo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ge("scroll",r)}switch(n){case"input":Ga(r),Vm(r,s,!0);break;case"textarea":Ga(r),Um(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ql)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=p0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Zt]=e,t[jo]=r,FE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Xh(n,r),n){case"dialog":ge("cancel",t),ge("close",t),i=r;break;case"iframe":case"object":case"embed":ge("load",t),i=r;break;case"video":case"audio":for(i=0;i<io.length;i++)ge(io[i],t);i=r;break;case"source":ge("error",t),i=r;break;case"img":case"image":case"link":ge("error",t),ge("load",t),i=r;break;case"details":ge("toggle",t),i=r;break;case"input":Mm(t,r),i=Wh(t,r),ge("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),ge("invalid",t);break;case"textarea":Fm(t,r),i=Kh(t,r),ge("invalid",t);break;default:i=r}Yh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?y0(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&g0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Oo(t,u):typeof u=="number"&&Oo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ge("scroll",t):u!=null&&xf(t,s,u,o))}switch(n){case"input":Ga(t),Vm(t,r,!1);break;case"textarea":Ga(t),Um(t);break;case"option":r.value!=null&&t.setAttribute("value",""+wr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Hi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Hi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ql)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return et(e),null;case 6:if(t&&e.stateNode!=null)jE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=qr(Bo.current),qr(sn.current),nl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Zt]=e,(s=r.nodeValue!==n)&&(t=Tt,t!==null))switch(t.tag){case 3:tl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&tl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Zt]=e,e.stateNode=r}return et(e),null;case 13:if(me(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&wt!==null&&e.mode&1&&!(e.flags&128))iE(),rs(),e.flags|=98560,s=!1;else if(s=nl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[Zt]=e}else rs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;et(e),s=!1}else Ht!==null&&(Od(Ht),Ht=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?Ve===0&&(Ve=3):gp())),e.updateQueue!==null&&(e.flags|=4),et(e),null);case 4:return ss(),Id(t,e),t===null&&Fo(e.stateNode.containerInfo),et(e),null;case 10:return Jf(e.type._context),et(e),null;case 17:return mt(e.type)&&Gl(),et(e),null;case 19:if(me(we),s=e.memoizedState,s===null)return et(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Js(s,!1);else{if(Ve!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=eu(t),o!==null){for(e.flags|=128,Js(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(we,we.current&1|2),e.child}t=t.sibling}s.tail!==null&&be()>as&&(e.flags|=128,r=!0,Js(s,!1),e.lanes=4194304)}else{if(!r)if(t=eu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Js(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ve)return et(e),null}else 2*be()-s.renderingStartTime>as&&n!==1073741824&&(e.flags|=128,r=!0,Js(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=be(),e.sibling=null,n=we.current,de(we,r?n&1|2:n&1),e):(et(e),null);case 22:case 23:return pp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Et&1073741824&&(et(e),e.subtreeFlags&6&&(e.flags|=8192)):et(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function pP(t,e){switch(Kf(e),e.tag){case 1:return mt(e.type)&&Gl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ss(),me(gt),me(st),rp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return np(e),null;case 13:if(me(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));rs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return me(we),null;case 4:return ss(),null;case 10:return Jf(e.type._context),null;case 22:case 23:return pp(),null;case 24:return null;default:return null}}var sl=!1,rt=!1,gP=typeof WeakSet=="function"?WeakSet:Set,$=null;function Ui(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(t,e,r)}else n.current=null}function Sd(t,e,n){try{n()}catch(r){Ae(t,e,r)}}var Ry=!1;function mP(t,e){if(ad=$l,t=W0(),qf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,g=null;t:for(;;){for(var E;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(E=p.firstChild)!==null;)g=p,p=E;for(;;){if(p===t)break t;if(g===n&&++c===i&&(l=o),g===s&&++d===r&&(u=o),(E=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=E}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ld={focusedElem:t,selectionRange:n},$l=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var R=A.memoizedProps,k=A.memoizedState,_=e.stateNode,v=_.getSnapshotBeforeUpdate(e.elementType===e.type?R:Bt(e.type,R),k);_.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(D){Ae(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return A=Ry,Ry=!1,A}function _o(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Sd(e,n,s)}i=i.next}while(i!==r)}}function zu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Cd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function zE(t){var e=t.alternate;e!==null&&(t.alternate=null,zE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zt],delete e[jo],delete e[hd],delete e[JC],delete e[ZC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function BE(t){return t.tag===5||t.tag===3||t.tag===4}function ky(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||BE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ql));else if(r!==4&&(t=t.child,t!==null))for(Pd(t,e,n),t=t.sibling;t!==null;)Pd(t,e,n),t=t.sibling}function Ad(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ad(t,e,n),t=t.sibling;t!==null;)Ad(t,e,n),t=t.sibling}var $e=null,$t=!1;function qn(t,e,n){for(n=n.child;n!==null;)$E(t,e,n),n=n.sibling}function $E(t,e,n){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(xu,n)}catch{}switch(n.tag){case 5:rt||Ui(n,e);case 6:var r=$e,i=$t;$e=null,qn(t,e,n),$e=r,$t=i,$e!==null&&($t?(t=$e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&($t?(t=$e,n=n.stateNode,t.nodeType===8?sh(t.parentNode,n):t.nodeType===1&&sh(t,n),Lo(t)):sh($e,n.stateNode));break;case 4:r=$e,i=$t,$e=n.stateNode.containerInfo,$t=!0,qn(t,e,n),$e=r,$t=i;break;case 0:case 11:case 14:case 15:if(!rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Sd(n,e,o),i=i.next}while(i!==r)}qn(t,e,n);break;case 1:if(!rt&&(Ui(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ae(n,e,l)}qn(t,e,n);break;case 21:qn(t,e,n);break;case 22:n.mode&1?(rt=(r=rt)||n.memoizedState!==null,qn(t,e,n),rt=r):qn(t,e,n);break;default:qn(t,e,n)}}function by(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new gP),e.forEach(function(r){var i=CP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function zt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:$e=l.stateNode,$t=!1;break e;case 3:$e=l.stateNode.containerInfo,$t=!0;break e;case 4:$e=l.stateNode.containerInfo,$t=!0;break e}l=l.return}if($e===null)throw Error(F(160));$E(s,o,i),$e=null,$t=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ae(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)HE(e,t),e=e.sibling}function HE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zt(e,t),Yt(t),r&4){try{_o(3,t,t.return),zu(3,t)}catch(R){Ae(t,t.return,R)}try{_o(5,t,t.return)}catch(R){Ae(t,t.return,R)}}break;case 1:zt(e,t),Yt(t),r&512&&n!==null&&Ui(n,n.return);break;case 5:if(zt(e,t),Yt(t),r&512&&n!==null&&Ui(n,n.return),t.flags&32){var i=t.stateNode;try{Oo(i,"")}catch(R){Ae(t,t.return,R)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&d0(i,s),Xh(l,o);var c=Xh(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?y0(i,p):d==="dangerouslySetInnerHTML"?g0(i,p):d==="children"?Oo(i,p):xf(i,d,p,c)}switch(l){case"input":qh(i,s);break;case"textarea":f0(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?Hi(i,!!s.multiple,E,!1):g!==!!s.multiple&&(s.defaultValue!=null?Hi(i,!!s.multiple,s.defaultValue,!0):Hi(i,!!s.multiple,s.multiple?[]:"",!1))}i[jo]=s}catch(R){Ae(t,t.return,R)}}break;case 6:if(zt(e,t),Yt(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(R){Ae(t,t.return,R)}}break;case 3:if(zt(e,t),Yt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Lo(e.containerInfo)}catch(R){Ae(t,t.return,R)}break;case 4:zt(e,t),Yt(t);break;case 13:zt(e,t),Yt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(dp=be())),r&4&&by(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(rt=(c=rt)||d,zt(e,t),rt=c):zt(e,t),Yt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for($=t,d=t.child;d!==null;){for(p=$=d;$!==null;){switch(g=$,E=g.child,g.tag){case 0:case 11:case 14:case 15:_o(4,g,g.return);break;case 1:Ui(g,g.return);var A=g.stateNode;if(typeof A.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(R){Ae(r,n,R)}}break;case 5:Ui(g,g.return);break;case 22:if(g.memoizedState!==null){Dy(p);continue}}E!==null?(E.return=g,$=E):Dy(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=m0("display",o))}catch(R){Ae(t,t.return,R)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(R){Ae(t,t.return,R)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:zt(e,t),Yt(t),r&4&&by(t);break;case 21:break;default:zt(e,t),Yt(t)}}function Yt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(BE(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Oo(i,""),r.flags&=-33);var s=ky(t);Ad(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=ky(t);Pd(t,l,o);break;default:throw Error(F(161))}}catch(u){Ae(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function yP(t,e,n){$=t,WE(t)}function WE(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||sl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||rt;l=sl;var c=rt;if(sl=o,(rt=u)&&!c)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?xy(i):u!==null?(u.return=o,$=u):xy(i);for(;s!==null;)$=s,WE(s),s=s.sibling;$=i,sl=l,rt=c}Oy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):Oy(t)}}function Oy(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rt||zu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!rt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Bt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&gy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}gy(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Lo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}rt||e.flags&512&&Cd(e)}catch(g){Ae(e,e.return,g)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Dy(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function xy(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{zu(4,e)}catch(u){Ae(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ae(e,i,u)}}var s=e.return;try{Cd(e)}catch(u){Ae(e,s,u)}break;case 5:var o=e.return;try{Cd(e)}catch(u){Ae(e,o,u)}}}catch(u){Ae(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var vP=Math.ceil,ru=Un.ReactCurrentDispatcher,cp=Un.ReactCurrentOwner,Mt=Un.ReactCurrentBatchConfig,oe=0,ze=null,Ne=null,qe=0,Et=0,ji=br(0),Ve=0,qo=null,ni=0,Bu=0,hp=0,Eo=null,ft=null,dp=0,as=1/0,En=null,iu=!1,Rd=null,fr=null,ol=!1,ir=null,su=0,wo=0,kd=null,Sl=-1,Cl=0;function ct(){return oe&6?be():Sl!==-1?Sl:Sl=be()}function pr(t){return t.mode&1?oe&2&&qe!==0?qe&-qe:tP.transition!==null?(Cl===0&&(Cl=k0()),Cl):(t=ue,t!==0||(t=window.event,t=t===void 0?16:M0(t.type)),t):1}function Gt(t,e,n,r){if(50<wo)throw wo=0,kd=null,Error(F(185));ca(t,n,r),(!(oe&2)||t!==ze)&&(t===ze&&(!(oe&2)&&(Bu|=n),Ve===4&&Jn(t,qe)),yt(t,r),n===1&&oe===0&&!(e.mode&1)&&(as=be()+500,Fu&&Or()))}function yt(t,e){var n=t.callbackNode;tC(t,e);var r=Bl(t,t===ze?qe:0);if(r===0)n!==null&&Bm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Bm(n),e===1)t.tag===0?eP(Ny.bind(null,t)):tE(Ny.bind(null,t)),YC(function(){!(oe&6)&&Or()}),n=null;else{switch(b0(r)){case 1:n=Ff;break;case 4:n=A0;break;case 16:n=zl;break;case 536870912:n=R0;break;default:n=zl}n=ZE(n,qE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function qE(t,e){if(Sl=-1,Cl=0,oe&6)throw Error(F(327));var n=t.callbackNode;if(Qi()&&t.callbackNode!==n)return null;var r=Bl(t,t===ze?qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ou(t,r);else{e=r;var i=oe;oe|=2;var s=KE();(ze!==t||qe!==e)&&(En=null,as=be()+500,Kr(t,e));do try{wP();break}catch(l){GE(t,l)}while(!0);Xf(),ru.current=s,oe=i,Ne!==null?e=0:(ze=null,qe=0,e=Ve)}if(e!==0){if(e===2&&(i=nd(t),i!==0&&(r=i,e=bd(t,i))),e===1)throw n=qo,Kr(t,0),Jn(t,r),yt(t,be()),n;if(e===6)Jn(t,r);else{if(i=t.current.alternate,!(r&30)&&!_P(i)&&(e=ou(t,r),e===2&&(s=nd(t),s!==0&&(r=s,e=bd(t,s))),e===1))throw n=qo,Kr(t,0),Jn(t,r),yt(t,be()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:zr(t,ft,En);break;case 3:if(Jn(t,r),(r&130023424)===r&&(e=dp+500-be(),10<e)){if(Bl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ct(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=cd(zr.bind(null,t,ft,En),e);break}zr(t,ft,En);break;case 4:if(Jn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-qt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vP(r/1960))-r,10<r){t.timeoutHandle=cd(zr.bind(null,t,ft,En),r);break}zr(t,ft,En);break;case 5:zr(t,ft,En);break;default:throw Error(F(329))}}}return yt(t,be()),t.callbackNode===n?qE.bind(null,t):null}function bd(t,e){var n=Eo;return t.current.memoizedState.isDehydrated&&(Kr(t,e).flags|=256),t=ou(t,e),t!==2&&(e=ft,ft=n,e!==null&&Od(e)),t}function Od(t){ft===null?ft=t:ft.push.apply(ft,t)}function _P(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Kt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Jn(t,e){for(e&=~hp,e&=~Bu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qt(e),r=1<<n;t[n]=-1,e&=~r}}function Ny(t){if(oe&6)throw Error(F(327));Qi();var e=Bl(t,0);if(!(e&1))return yt(t,be()),null;var n=ou(t,e);if(t.tag!==0&&n===2){var r=nd(t);r!==0&&(e=r,n=bd(t,r))}if(n===1)throw n=qo,Kr(t,0),Jn(t,e),yt(t,be()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,zr(t,ft,En),yt(t,be()),null}function fp(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(as=be()+500,Fu&&Or())}}function ri(t){ir!==null&&ir.tag===0&&!(oe&6)&&Qi();var e=oe;oe|=1;var n=Mt.transition,r=ue;try{if(Mt.transition=null,ue=1,t)return t()}finally{ue=r,Mt.transition=n,oe=e,!(oe&6)&&Or()}}function pp(){Et=ji.current,me(ji)}function Kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,QC(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(Kf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gl();break;case 3:ss(),me(gt),me(st),rp();break;case 5:np(r);break;case 4:ss();break;case 13:me(we);break;case 19:me(we);break;case 10:Jf(r.type._context);break;case 22:case 23:pp()}n=n.return}if(ze=t,Ne=t=gr(t.current,null),qe=Et=e,Ve=0,qo=null,hp=Bu=ni=0,ft=Eo=null,Wr!==null){for(e=0;e<Wr.length;e++)if(n=Wr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Wr=null}return t}function GE(t,e){do{var n=Ne;try{if(Xf(),wl.current=nu,tu){for(var r=Te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}tu=!1}if(ti=0,je=Le=Te=null,vo=!1,$o=0,cp.current=null,n===null||n.return===null){Ve=1,qo=e,Ne=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=qe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var E=wy(o);if(E!==null){E.flags&=-257,Ty(E,o,l,s,e),E.mode&1&&Ey(s,c,e),e=E,u=c;var A=e.updateQueue;if(A===null){var R=new Set;R.add(u),e.updateQueue=R}else A.add(u);break e}else{if(!(e&1)){Ey(s,c,e),gp();break e}u=Error(F(426))}}else if(ve&&l.mode&1){var k=wy(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Ty(k,o,l,s,e),Qf(os(u,l));break e}}s=u=os(u,l),Ve!==4&&(Ve=2),Eo===null?Eo=[s]:Eo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var _=bE(s,u,e);py(s,_);break e;case 1:l=u;var v=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(fr===null||!fr.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=OE(s,l,e);py(s,D);break e}}s=s.return}while(s!==null)}YE(n)}catch(L){e=L,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function KE(){var t=ru.current;return ru.current=nu,t===null?nu:t}function gp(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),ze===null||!(ni&268435455)&&!(Bu&268435455)||Jn(ze,qe)}function ou(t,e){var n=oe;oe|=2;var r=KE();(ze!==t||qe!==e)&&(En=null,Kr(t,e));do try{EP();break}catch(i){GE(t,i)}while(!0);if(Xf(),oe=n,ru.current=r,Ne!==null)throw Error(F(261));return ze=null,qe=0,Ve}function EP(){for(;Ne!==null;)QE(Ne)}function wP(){for(;Ne!==null&&!qS();)QE(Ne)}function QE(t){var e=JE(t.alternate,t,Et);t.memoizedProps=t.pendingProps,e===null?YE(t):Ne=e,cp.current=null}function YE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=pP(n,e),n!==null){n.flags&=32767,Ne=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ve=6,Ne=null;return}}else if(n=fP(n,e,Et),n!==null){Ne=n;return}if(e=e.sibling,e!==null){Ne=e;return}Ne=e=t}while(e!==null);Ve===0&&(Ve=5)}function zr(t,e,n){var r=ue,i=Mt.transition;try{Mt.transition=null,ue=1,TP(t,e,n,r)}finally{Mt.transition=i,ue=r}return null}function TP(t,e,n,r){do Qi();while(ir!==null);if(oe&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(nC(t,s),t===ze&&(Ne=ze=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ol||(ol=!0,ZE(zl,function(){return Qi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mt.transition,Mt.transition=null;var o=ue;ue=1;var l=oe;oe|=4,cp.current=null,mP(t,n),HE(n,t),BC(ld),$l=!!ad,ld=ad=null,t.current=n,yP(n),GS(),oe=l,ue=o,Mt.transition=s}else t.current=n;if(ol&&(ol=!1,ir=t,su=i),s=t.pendingLanes,s===0&&(fr=null),YS(n.stateNode),yt(t,be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(iu)throw iu=!1,t=Rd,Rd=null,t;return su&1&&t.tag!==0&&Qi(),s=t.pendingLanes,s&1?t===kd?wo++:(wo=0,kd=t):wo=0,Or(),null}function Qi(){if(ir!==null){var t=b0(su),e=Mt.transition,n=ue;try{if(Mt.transition=null,ue=16>t?16:t,ir===null)var r=!1;else{if(t=ir,ir=null,su=0,oe&6)throw Error(F(331));var i=oe;for(oe|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for($=c;$!==null;){var d=$;switch(d.tag){case 0:case 11:case 15:_o(8,d,s)}var p=d.child;if(p!==null)p.return=d,$=p;else for(;$!==null;){d=$;var g=d.sibling,E=d.return;if(zE(d),d===c){$=null;break}if(g!==null){g.return=E,$=g;break}$=E}}}var A=s.alternate;if(A!==null){var R=A.child;if(R!==null){A.child=null;do{var k=R.sibling;R.sibling=null,R=k}while(R!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:_o(9,s,s.return)}var _=s.sibling;if(_!==null){_.return=s.return,$=_;break e}$=s.return}}var v=t.current;for($=v;$!==null;){o=$;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,$=I;else e:for(o=v;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:zu(9,l)}}catch(L){Ae(l,l.return,L)}if(l===o){$=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,$=D;break e}$=l.return}}if(oe=i,Or(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(xu,t)}catch{}r=!0}return r}finally{ue=n,Mt.transition=e}}return!1}function Ly(t,e,n){e=os(n,e),e=bE(t,e,1),t=dr(t,e,1),e=ct(),t!==null&&(ca(t,1,e),yt(t,e))}function Ae(t,e,n){if(t.tag===3)Ly(t,t,n);else for(;e!==null;){if(e.tag===3){Ly(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fr===null||!fr.has(r))){t=os(n,t),t=OE(e,t,1),e=dr(e,t,1),t=ct(),e!==null&&(ca(e,1,t),yt(e,t));break}}e=e.return}}function IP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ct(),t.pingedLanes|=t.suspendedLanes&n,ze===t&&(qe&n)===n&&(Ve===4||Ve===3&&(qe&130023424)===qe&&500>be()-dp?Kr(t,0):hp|=n),yt(t,e)}function XE(t,e){e===0&&(t.mode&1?(e=Ya,Ya<<=1,!(Ya&130023424)&&(Ya=4194304)):e=1);var n=ct();t=Dn(t,e),t!==null&&(ca(t,e,n),yt(t,n))}function SP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),XE(t,n)}function CP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),XE(t,n)}var JE;JE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gt.current)pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pt=!1,dP(t,e,n);pt=!!(t.flags&131072)}else pt=!1,ve&&e.flags&1048576&&nE(e,Yl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Il(t,e),t=e.pendingProps;var i=ns(e,st.current);Ki(e,n),i=sp(null,e,r,t,i,n);var s=op();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mt(r)?(s=!0,Kl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ep(e),i.updater=ju,e.stateNode=i,i._reactInternals=e,yd(e,r,t,n),e=Ed(null,e,r,!0,s,n)):(e.tag=0,ve&&s&&Gf(e),ut(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Il(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=AP(r),t=Bt(r,t),i){case 0:e=_d(null,e,r,t,n);break e;case 1:e=Cy(null,e,r,t,n);break e;case 11:e=Iy(null,e,r,t,n);break e;case 14:e=Sy(null,e,r,Bt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),_d(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),Cy(t,e,r,i,n);case 3:e:{if(LE(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,lE(t,e),Zl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=os(Error(F(423)),e),e=Py(t,e,r,n,i);break e}else if(r!==i){i=os(Error(F(424)),e),e=Py(t,e,r,n,i);break e}else for(wt=hr(e.stateNode.containerInfo.firstChild),Tt=e,ve=!0,Ht=null,n=oE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rs(),r===i){e=xn(t,e,n);break e}ut(t,e,r,n)}e=e.child}return e;case 5:return uE(e),t===null&&pd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ud(r,i)?o=null:s!==null&&ud(r,s)&&(e.flags|=32),NE(t,e),ut(t,e,o,n),e.child;case 6:return t===null&&pd(e),null;case 13:return ME(t,e,n);case 4:return tp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=is(e,null,r,n):ut(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),Iy(t,e,r,i,n);case 7:return ut(t,e,e.pendingProps,n),e.child;case 8:return ut(t,e,e.pendingProps.children,n),e.child;case 12:return ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,de(Xl,r._currentValue),r._currentValue=o,s!==null)if(Kt(s.value,o)){if(s.children===i.children&&!gt.current){e=xn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=An(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),gd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),gd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ut(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ki(e,n),i=Ft(i),r=r(i),e.flags|=1,ut(t,e,r,n),e.child;case 14:return r=e.type,i=Bt(r,e.pendingProps),i=Bt(r.type,i),Sy(t,e,r,i,n);case 15:return DE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),Il(t,e),e.tag=1,mt(r)?(t=!0,Kl(e)):t=!1,Ki(e,n),kE(e,r,i),yd(e,r,i,n),Ed(null,e,r,!0,t,n);case 19:return VE(t,e,n);case 22:return xE(t,e,n)}throw Error(F(156,e.tag))};function ZE(t,e){return P0(t,e)}function PP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(t,e,n,r){return new PP(t,e,n,r)}function mp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function AP(t){if(typeof t=="function")return mp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Lf)return 11;if(t===Mf)return 14}return 2}function gr(t,e){var n=t.alternate;return n===null?(n=Lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Pl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")mp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case bi:return Qr(n.children,i,s,e);case Nf:o=8,i|=8;break;case zh:return t=Lt(12,n,e,i|2),t.elementType=zh,t.lanes=s,t;case Bh:return t=Lt(13,n,e,i),t.elementType=Bh,t.lanes=s,t;case $h:return t=Lt(19,n,e,i),t.elementType=$h,t.lanes=s,t;case u0:return $u(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case a0:o=10;break e;case l0:o=9;break e;case Lf:o=11;break e;case Mf:o=14;break e;case Qn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Lt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Qr(t,e,n,r){return t=Lt(7,t,r,e),t.lanes=n,t}function $u(t,e,n,r){return t=Lt(22,t,r,e),t.elementType=u0,t.lanes=n,t.stateNode={isHidden:!1},t}function fh(t,e,n){return t=Lt(6,t,null,e),t.lanes=n,t}function ph(t,e,n){return e=Lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function RP(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kc(0),this.expirationTimes=Kc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function yp(t,e,n,r,i,s,o,l,u){return t=new RP(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Lt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ep(s),t}function kP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ki,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ew(t){if(!t)return Tr;t=t._reactInternals;e:{if(gi(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(mt(n))return eE(t,n,e)}return e}function tw(t,e,n,r,i,s,o,l,u){return t=yp(n,r,!0,t,i,s,o,l,u),t.context=ew(null),n=t.current,r=ct(),i=pr(n),s=An(r,i),s.callback=e??null,dr(n,s,i),t.current.lanes=i,ca(t,i,r),yt(t,r),t}function Hu(t,e,n,r){var i=e.current,s=ct(),o=pr(i);return n=ew(n),e.context===null?e.context=n:e.pendingContext=n,e=An(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=dr(i,e,o),t!==null&&(Gt(t,i,o,s),El(t,i,o)),o}function au(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function My(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function vp(t,e){My(t,e),(t=t.alternate)&&My(t,e)}function bP(){return null}var nw=typeof reportError=="function"?reportError:function(t){console.error(t)};function _p(t){this._internalRoot=t}Wu.prototype.render=_p.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Hu(t,e,null,null)};Wu.prototype.unmount=_p.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ri(function(){Hu(null,t,null,null)}),e[On]=null}};function Wu(t){this._internalRoot=t}Wu.prototype.unstable_scheduleHydration=function(t){if(t){var e=x0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Xn.length&&e!==0&&e<Xn[n].priority;n++);Xn.splice(n,0,t),n===0&&L0(t)}};function Ep(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function qu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vy(){}function OP(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=au(o);s.call(c)}}var o=tw(e,r,t,0,null,!1,!1,"",Vy);return t._reactRootContainer=o,t[On]=o.current,Fo(t.nodeType===8?t.parentNode:t),ri(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=au(u);l.call(c)}}var u=yp(t,0,!1,null,null,!1,!1,"",Vy);return t._reactRootContainer=u,t[On]=u.current,Fo(t.nodeType===8?t.parentNode:t),ri(function(){Hu(e,u,n,r)}),u}function Gu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=au(o);l.call(u)}}Hu(e,o,t,i)}else o=OP(n,e,t,i,r);return au(o)}O0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ro(e.pendingLanes);n!==0&&(Uf(e,n|1),yt(e,be()),!(oe&6)&&(as=be()+500,Or()))}break;case 13:ri(function(){var r=Dn(t,1);if(r!==null){var i=ct();Gt(r,t,1,i)}}),vp(t,1)}};jf=function(t){if(t.tag===13){var e=Dn(t,134217728);if(e!==null){var n=ct();Gt(e,t,134217728,n)}vp(t,134217728)}};D0=function(t){if(t.tag===13){var e=pr(t),n=Dn(t,e);if(n!==null){var r=ct();Gt(n,t,e,r)}vp(t,e)}};x0=function(){return ue};N0=function(t,e){var n=ue;try{return ue=t,e()}finally{ue=n}};Zh=function(t,e,n){switch(e){case"input":if(qh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Vu(r);if(!i)throw Error(F(90));h0(r),qh(r,i)}}}break;case"textarea":f0(t,n);break;case"select":e=n.value,e!=null&&Hi(t,!!n.multiple,e,!1)}};E0=fp;w0=ri;var DP={usingClientEntryPoint:!1,Events:[da,Ni,Vu,v0,_0,fp]},Zs={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xP={bundleType:Zs.bundleType,version:Zs.version,rendererPackageName:Zs.rendererPackageName,rendererConfig:Zs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Un.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=S0(t),t===null?null:t.stateNode},findFiberByHostInstance:Zs.findFiberByHostInstance||bP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!al.isDisabled&&al.supportsFiber)try{xu=al.inject(xP),rn=al}catch{}}At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=DP;At.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ep(e))throw Error(F(200));return kP(t,e,null,n)};At.createRoot=function(t,e){if(!Ep(t))throw Error(F(299));var n=!1,r="",i=nw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=yp(t,1,!1,null,null,n,!1,r,i),t[On]=e.current,Fo(t.nodeType===8?t.parentNode:t),new _p(e)};At.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=S0(e),t=t===null?null:t.stateNode,t};At.flushSync=function(t){return ri(t)};At.hydrate=function(t,e,n){if(!qu(e))throw Error(F(200));return Gu(null,t,e,!0,n)};At.hydrateRoot=function(t,e,n){if(!Ep(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=nw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=tw(e,null,t,1,n??null,i,!1,s,o),t[On]=e.current,Fo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Wu(e)};At.render=function(t,e,n){if(!qu(e))throw Error(F(200));return Gu(null,t,e,!1,n)};At.unmountComponentAtNode=function(t){if(!qu(t))throw Error(F(40));return t._reactRootContainer?(ri(function(){Gu(null,null,t,!1,function(){t._reactRootContainer=null,t[On]=null})}),!0):!1};At.unstable_batchedUpdates=fp;At.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!qu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Gu(t,e,n,!1,r)};At.version="18.3.1-next-f1338f8080-20240426";function rw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rw)}catch(t){console.error(t)}}rw(),r0.exports=At;var NP=r0.exports,Fy=NP;Uh.createRoot=Fy.createRoot,Uh.hydrateRoot=Fy.hydrateRoot;/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Go(){return Go=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Go.apply(this,arguments)}var sr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(sr||(sr={}));const Uy="popstate";function LP(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Dd("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:lu(i)}return VP(e,n,null,t)}function Oe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function iw(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function MP(){return Math.random().toString(36).substr(2,8)}function jy(t,e){return{usr:t.state,key:t.key,idx:e}}function Dd(t,e,n,r){return n===void 0&&(n=null),Go({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ws(e):e,{state:n,key:e&&e.key||r||MP()})}function lu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ws(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function VP(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=sr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Go({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=sr.Pop;let k=d(),_=k==null?null:k-c;c=k,u&&u({action:l,location:R.location,delta:_})}function g(k,_){l=sr.Push;let v=Dd(R.location,k,_);c=d()+1;let I=jy(v,c),D=R.createHref(v);try{o.pushState(I,"",D)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(D)}s&&u&&u({action:l,location:R.location,delta:1})}function E(k,_){l=sr.Replace;let v=Dd(R.location,k,_);c=d();let I=jy(v,c),D=R.createHref(v);o.replaceState(I,"",D),s&&u&&u({action:l,location:R.location,delta:0})}function A(k){let _=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof k=="string"?k:lu(k);return v=v.replace(/ $/,"%20"),Oe(_,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,_)}let R={get action(){return l},get location(){return t(i,o)},listen(k){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Uy,p),u=k,()=>{i.removeEventListener(Uy,p),u=null}},createHref(k){return e(i,k)},createURL:A,encodeLocation(k){let _=A(k);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:g,replace:E,go(k){return o.go(k)}};return R}var zy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(zy||(zy={}));function FP(t,e,n){return n===void 0&&(n="/"),UP(t,e,n,!1)}function UP(t,e,n,r){let i=typeof e=="string"?ws(e):e,s=wp(i.pathname||"/",n);if(s==null)return null;let o=sw(t);jP(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=XP(s);l=QP(o[u],c,r)}return l}function sw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Oe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=mr([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Oe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),sw(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:GP(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of ow(s.path))i(s,o,u)}),e}function ow(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=ow(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function jP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:KP(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const zP=/^:[\w-]+$/,BP=3,$P=2,HP=1,WP=10,qP=-2,By=t=>t==="*";function GP(t,e){let n=t.split("/"),r=n.length;return n.some(By)&&(r+=qP),e&&(r+=$P),n.filter(i=>!By(i)).reduce((i,s)=>i+(zP.test(s)?BP:s===""?HP:WP),r)}function KP(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function QP(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=$y({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),g=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=$y({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:mr([s,p.pathname]),pathnameBase:tA(mr([s,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(s=mr([s,p.pathnameBase]))}return o}function $y(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=YP(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:g,isOptional:E}=d;if(g==="*"){let R=l[p]||"";o=s.slice(0,s.length-R.length).replace(/(.)\/+$/,"$1")}const A=l[p];return E&&!A?c[g]=void 0:c[g]=(A||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function YP(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),iw(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function XP(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return iw(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function wp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function JP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ws(t):t;return{pathname:n?n.startsWith("/")?n:ZP(n,e):e,search:nA(r),hash:rA(i)}}function ZP(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function gh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function eA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Tp(t,e){let n=eA(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ip(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ws(t):(i=Go({},t),Oe(!i.pathname||!i.pathname.includes("?"),gh("?","pathname","search",i)),Oe(!i.pathname||!i.pathname.includes("#"),gh("#","pathname","hash",i)),Oe(!i.search||!i.search.includes("#"),gh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}l=p>=0?e[p]:"/"}let u=JP(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const mr=t=>t.join("/").replace(/\/\/+/g,"/"),tA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),nA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,rA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function iA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const aw=["post","put","patch","delete"];new Set(aw);const sA=["get",...aw];new Set(sA);/**
 * React Router v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ko(){return Ko=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ko.apply(this,arguments)}const Sp=N.createContext(null),oA=N.createContext(null),Dr=N.createContext(null),Ku=N.createContext(null),jn=N.createContext({outlet:null,matches:[],isDataRoute:!1}),lw=N.createContext(null);function aA(t,e){let{relative:n}=e===void 0?{}:e;Ts()||Oe(!1);let{basename:r,navigator:i}=N.useContext(Dr),{hash:s,pathname:o,search:l}=cw(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:mr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function Ts(){return N.useContext(Ku)!=null}function Is(){return Ts()||Oe(!1),N.useContext(Ku).location}function uw(t){N.useContext(Dr).static||N.useLayoutEffect(t)}function Qu(){let{isDataRoute:t}=N.useContext(jn);return t?TA():lA()}function lA(){Ts()||Oe(!1);let t=N.useContext(Sp),{basename:e,future:n,navigator:r}=N.useContext(Dr),{matches:i}=N.useContext(jn),{pathname:s}=Is(),o=JSON.stringify(Tp(i,n.v7_relativeSplatPath)),l=N.useRef(!1);return uw(()=>{l.current=!0}),N.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=Ip(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:mr([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}const uA=N.createContext(null);function cA(t){let e=N.useContext(jn).outlet;return e&&N.createElement(uA.Provider,{value:t},e)}function cw(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=N.useContext(Dr),{matches:i}=N.useContext(jn),{pathname:s}=Is(),o=JSON.stringify(Tp(i,r.v7_relativeSplatPath));return N.useMemo(()=>Ip(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function hA(t,e){return dA(t,e)}function dA(t,e,n,r){Ts()||Oe(!1);let{navigator:i}=N.useContext(Dr),{matches:s}=N.useContext(jn),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Is(),d;if(e){var p;let k=typeof e=="string"?ws(e):e;u==="/"||(p=k.pathname)!=null&&p.startsWith(u)||Oe(!1),d=k}else d=c;let g=d.pathname||"/",E=g;if(u!=="/"){let k=u.replace(/^\//,"").split("/");E="/"+g.replace(/^\//,"").split("/").slice(k.length).join("/")}let A=FP(t,{pathname:E}),R=yA(A&&A.map(k=>Object.assign({},k,{params:Object.assign({},l,k.params),pathname:mr([u,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?u:mr([u,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,n,r);return e&&R?N.createElement(Ku.Provider,{value:{location:Ko({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:sr.Pop}},R):R}function fA(){let t=wA(),e=iA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),n?N.createElement("pre",{style:i},n):null,null)}const pA=N.createElement(fA,null);class gA extends N.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?N.createElement(jn.Provider,{value:this.props.routeContext},N.createElement(lw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function mA(t){let{routeContext:e,match:n,children:r}=t,i=N.useContext(Sp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(jn.Provider,{value:e},r)}function yA(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||Oe(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:g,errors:E}=n,A=p.route.loader&&g[p.route.id]===void 0&&(!E||E[p.route.id]===void 0);if(p.route.lazy||A){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,p,g)=>{let E,A=!1,R=null,k=null;n&&(E=l&&p.route.id?l[p.route.id]:void 0,R=p.route.errorElement||pA,u&&(c<0&&g===0?(A=!0,k=null):c===g&&(A=!0,k=p.route.hydrateFallbackElement||null)));let _=e.concat(o.slice(0,g+1)),v=()=>{let I;return E?I=R:A?I=k:p.route.Component?I=N.createElement(p.route.Component,null):p.route.element?I=p.route.element:I=d,N.createElement(mA,{match:p,routeContext:{outlet:d,matches:_,isDataRoute:n!=null},children:I})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?N.createElement(gA,{location:n.location,revalidation:n.revalidation,component:R,error:E,children:v(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):v()},null)}var hw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(hw||{}),uu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(uu||{});function vA(t){let e=N.useContext(Sp);return e||Oe(!1),e}function _A(t){let e=N.useContext(oA);return e||Oe(!1),e}function EA(t){let e=N.useContext(jn);return e||Oe(!1),e}function dw(t){let e=EA(),n=e.matches[e.matches.length-1];return n.route.id||Oe(!1),n.route.id}function wA(){var t;let e=N.useContext(lw),n=_A(uu.UseRouteError),r=dw(uu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function TA(){let{router:t}=vA(hw.UseNavigateStable),e=dw(uu.UseNavigateStable),n=N.useRef(!1);return uw(()=>{n.current=!0}),N.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ko({fromRouteId:e},s)))},[t,e])}function Cp(t){let{to:e,replace:n,state:r,relative:i}=t;Ts()||Oe(!1);let{future:s,static:o}=N.useContext(Dr),{matches:l}=N.useContext(jn),{pathname:u}=Is(),c=Qu(),d=Ip(e,Tp(l,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(d);return N.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:i}),[c,p,i,n,r]),null}function IA(t){return cA(t.context)}function Ci(t){Oe(!1)}function SA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=sr.Pop,navigator:s,static:o=!1,future:l}=t;Ts()&&Oe(!1);let u=e.replace(/^\/*/,"/"),c=N.useMemo(()=>({basename:u,navigator:s,static:o,future:Ko({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=ws(r));let{pathname:d="/",search:p="",hash:g="",state:E=null,key:A="default"}=r,R=N.useMemo(()=>{let k=wp(d,u);return k==null?null:{location:{pathname:k,search:p,hash:g,state:E,key:A},navigationType:i}},[u,d,p,g,E,A,i]);return R==null?null:N.createElement(Dr.Provider,{value:c},N.createElement(Ku.Provider,{children:n,value:R}))}function CA(t){let{children:e,location:n}=t;return hA(xd(e),n)}new Promise(()=>{});function xd(t,e){e===void 0&&(e=[]);let n=[];return N.Children.forEach(t,(r,i)=>{if(!N.isValidElement(r))return;let s=[...e,i];if(r.type===N.Fragment){n.push.apply(n,xd(r.props.children,s));return}r.type!==Ci&&Oe(!1),!r.props.index||!r.props.children||Oe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=xd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nd(){return Nd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Nd.apply(this,arguments)}function PA(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function AA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function RA(t,e){return t.button===0&&(!e||e==="_self")&&!AA(t)}const kA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],bA="6";try{window.__reactRouterVersion=bA}catch{}const OA="startTransition",Hy=IS[OA];function DA(t){let{basename:e,children:n,future:r,window:i}=t,s=N.useRef();s.current==null&&(s.current=LP({window:i,v5Compat:!0}));let o=s.current,[l,u]=N.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=N.useCallback(p=>{c&&Hy?Hy(()=>u(p)):u(p)},[u,c]);return N.useLayoutEffect(()=>o.listen(d),[o,d]),N.createElement(SA,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const xA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",NA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fw=N.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,unstable_viewTransition:p}=e,g=PA(e,kA),{basename:E}=N.useContext(Dr),A,R=!1;if(typeof c=="string"&&NA.test(c)&&(A=c,xA))try{let I=new URL(window.location.href),D=c.startsWith("//")?new URL(I.protocol+c):new URL(c),L=wp(D.pathname,E);D.origin===I.origin&&L!=null?c=L+D.search+D.hash:R=!0}catch{}let k=aA(c,{relative:i}),_=LA(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,unstable_viewTransition:p});function v(I){r&&r(I),I.defaultPrevented||_(I)}return N.createElement("a",Nd({},g,{href:A||k,onClick:R||s?r:v,ref:n,target:u}))});var Wy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Wy||(Wy={}));var qy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(qy||(qy={}));function LA(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,u=Qu(),c=Is(),d=cw(t,{relative:o});return N.useCallback(p=>{if(RA(p,n)){p.preventDefault();let g=r!==void 0?r:lu(c)===lu(d);u(t,{replace:g,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}var Gy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},MA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},gw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|c>>6,E=c&63;u||(E=64,o||(g=64)),r.push(n[d],n[p],n[g],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(pw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):MA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new VA;const g=s<<2|l>>4;if(r.push(g),c!==64){const E=l<<4&240|c>>2;if(r.push(E),p!==64){const A=c<<6&192|p;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class VA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const FA=function(t){const e=pw(t);return gw.encodeByteArray(e,!0)},cu=function(t){return FA(t).replace(/\./g,"")},mw=function(t){try{return gw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA=()=>UA().__FIREBASE_DEFAULTS__,zA=()=>{if(typeof process>"u"||typeof Gy>"u")return;const t=Gy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},BA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&mw(t[1]);return e&&JSON.parse(e)},Yu=()=>{try{return jA()||zA()||BA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},yw=t=>{var e,n;return(n=(e=Yu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$A=t=>{const e=yw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},vw=()=>{var t;return(t=Yu())===null||t===void 0?void 0:t.config},_w=t=>{var e;return(e=Yu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[cu(JSON.stringify(n)),cu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qe())}function GA(){var t;const e=(t=Yu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function KA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function QA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function YA(){const t=Qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function XA(){return!GA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function JA(){try{return typeof indexedDB=="object"}catch{return!1}}function ZA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR="FirebaseError";class zn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=eR,Object.setPrototypeOf(this,zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pa.prototype.create)}}class pa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?tR(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new zn(i,l,r)}}function tR(t,e){return t.replace(nR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const nR=/\{\$([^}]+)}/g;function rR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function hu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ky(s)&&Ky(o)){if(!hu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ky(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function so(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function oo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function iR(t,e){const n=new sR(t,e);return n.subscribe.bind(n)}class sR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");oR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=mh),i.error===void 0&&(i.error=mh),i.complete===void 0&&(i.complete=mh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function oR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function mh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t){return t&&t._delegate?t._delegate:t}class ii{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new HA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uR(e))try{this.getOrInitializeService({instanceIdentifier:Br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Br){return this.instances.has(e)}getOptions(e=Br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:lR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Br){return this.component?this.component.multipleInstances?e:Br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lR(t){return t===Br?void 0:t}function uR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new aR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const hR={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},dR=ie.INFO,fR={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},pR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=fR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pp{constructor(e){this.name=e,this._logLevel=dR,this._logHandler=pR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const gR=(t,e)=>e.some(n=>t instanceof n);let Qy,Yy;function mR(){return Qy||(Qy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yR(){return Yy||(Yy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ew=new WeakMap,Ld=new WeakMap,ww=new WeakMap,yh=new WeakMap,Ap=new WeakMap;function vR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(yr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ew.set(n,t)}).catch(()=>{}),Ap.set(e,t),e}function _R(t){if(Ld.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ld.set(t,e)}let Md={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ld.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ww.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ER(t){Md=t(Md)}function wR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(vh(this),e,...n);return ww.set(r,e.sort?e.sort():[e]),yr(r)}:yR().includes(t)?function(...e){return t.apply(vh(this),e),yr(Ew.get(this))}:function(...e){return yr(t.apply(vh(this),e))}}function TR(t){return typeof t=="function"?wR(t):(t instanceof IDBTransaction&&_R(t),gR(t,mR())?new Proxy(t,Md):t)}function yr(t){if(t instanceof IDBRequest)return vR(t);if(yh.has(t))return yh.get(t);const e=TR(t);return e!==t&&(yh.set(t,e),Ap.set(e,t)),e}const vh=t=>Ap.get(t);function IR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=yr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(yr(o.result),u.oldVersion,u.newVersion,yr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const SR=["get","getKey","getAll","getAllKeys","count"],CR=["put","add","delete","clear"],_h=new Map;function Xy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_h.get(e))return _h.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=CR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||SR.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return _h.set(e,s),s}ER(t=>({...t,get:(e,n,r)=>Xy(e,n)||t.get(e,n,r),has:(e,n)=>!!Xy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(AR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function AR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vd="@firebase/app",Jy="0.10.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=new Pp("@firebase/app"),RR="@firebase/app-compat",kR="@firebase/analytics-compat",bR="@firebase/analytics",OR="@firebase/app-check-compat",DR="@firebase/app-check",xR="@firebase/auth",NR="@firebase/auth-compat",LR="@firebase/database",MR="@firebase/database-compat",VR="@firebase/functions",FR="@firebase/functions-compat",UR="@firebase/installations",jR="@firebase/installations-compat",zR="@firebase/messaging",BR="@firebase/messaging-compat",$R="@firebase/performance",HR="@firebase/performance-compat",WR="@firebase/remote-config",qR="@firebase/remote-config-compat",GR="@firebase/storage",KR="@firebase/storage-compat",QR="@firebase/firestore",YR="@firebase/vertexai-preview",XR="@firebase/firestore-compat",JR="firebase",ZR="10.12.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="[DEFAULT]",ek={[Vd]:"fire-core",[RR]:"fire-core-compat",[bR]:"fire-analytics",[kR]:"fire-analytics-compat",[DR]:"fire-app-check",[OR]:"fire-app-check-compat",[xR]:"fire-auth",[NR]:"fire-auth-compat",[LR]:"fire-rtdb",[MR]:"fire-rtdb-compat",[VR]:"fire-fn",[FR]:"fire-fn-compat",[UR]:"fire-iid",[jR]:"fire-iid-compat",[zR]:"fire-fcm",[BR]:"fire-fcm-compat",[$R]:"fire-perf",[HR]:"fire-perf-compat",[WR]:"fire-rc",[qR]:"fire-rc-compat",[GR]:"fire-gcs",[KR]:"fire-gcs-compat",[QR]:"fire-fst",[XR]:"fire-fst-compat",[YR]:"fire-vertex","fire-js":"fire-js",[JR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du=new Map,tk=new Map,Ud=new Map;function Zy(t,e){try{t.container.addComponent(e)}catch(n){si.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ls(t){const e=t.name;if(Ud.has(e))return si.debug(`There were multiple attempts to register component ${e}.`),!1;Ud.set(e,t);for(const n of du.values())Zy(n,t);for(const n of tk.values())Zy(n,t);return!0}function Rp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function en(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vr=new pa("app","Firebase",nk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ii("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=ZR;function Tw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Fd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw vr.create("bad-app-name",{appName:String(i)});if(n||(n=vw()),!n)throw vr.create("no-options");const s=du.get(i);if(s){if(hu(n,s.options)&&hu(r,s.config))return s;throw vr.create("duplicate-app",{appName:i})}const o=new cR(i);for(const u of Ud.values())o.addComponent(u);const l=new rk(n,r,o);return du.set(i,l),l}function Iw(t=Fd){const e=du.get(t);if(!e&&t===Fd&&vw())return Tw();if(!e)throw vr.create("no-app",{appName:t});return e}function _r(t,e,n){var r;let i=(r=ek[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),si.warn(l.join(" "));return}ls(new ii(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik="firebase-heartbeat-database",sk=1,Qo="firebase-heartbeat-store";let Eh=null;function Sw(){return Eh||(Eh=IR(ik,sk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Qo)}catch(n){console.warn(n)}}}}).catch(t=>{throw vr.create("idb-open",{originalErrorMessage:t.message})})),Eh}async function ok(t){try{const n=(await Sw()).transaction(Qo),r=await n.objectStore(Qo).get(Cw(t));return await n.done,r}catch(e){if(e instanceof zn)si.warn(e.message);else{const n=vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});si.warn(n.message)}}}async function ev(t,e){try{const r=(await Sw()).transaction(Qo,"readwrite");await r.objectStore(Qo).put(e,Cw(t)),await r.done}catch(n){if(n instanceof zn)si.warn(n.message);else{const r=vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});si.warn(r.message)}}}function Cw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak=1024,lk=30*24*60*60*1e3;class uk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=tv();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=lk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=tv(),{heartbeatsToSend:r,unsentEntries:i}=ck(this._heartbeatsCache.heartbeats),s=cu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function tv(){return new Date().toISOString().substring(0,10)}function ck(t,e=ak){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),nv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),nv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return JA()?ZA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ok(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ev(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ev(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function nv(t){return cu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dk(t){ls(new ii("platform-logger",e=>new PR(e),"PRIVATE")),ls(new ii("heartbeat",e=>new uk(e),"PRIVATE")),_r(Vd,Jy,t),_r(Vd,Jy,"esm2017"),_r("fire-js","")}dk("");function kp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Pw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fk=Pw,Aw=new pa("auth","Firebase",Pw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu=new Pp("@firebase/auth");function pk(t,...e){fu.logLevel<=ie.WARN&&fu.warn(`Auth (${Ss}): ${t}`,...e)}function Al(t,...e){fu.logLevel<=ie.ERROR&&fu.error(`Auth (${Ss}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t,...e){throw bp(t,...e)}function on(t,...e){return bp(t,...e)}function Rw(t,e,n){const r=Object.assign(Object.assign({},fk()),{[e]:n});return new pa("auth","Firebase",r).create(e,{appName:t.name})}function Rn(t){return Rw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function bp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Aw.create(t,...e)}function K(t,e,...n){if(!t)throw bp(e,...n)}function Sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Al(e),new Error(e)}function Nn(t,e){t||Sn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function gk(){return rv()==="http:"||rv()==="https:"}function rv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gk()||KA()||"connection"in navigator)?navigator.onLine:!0}function yk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nn(n>e,"Short delay should be less than long delay!"),this.isMobile=qA()||QA()}get(){return mk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(t,e){Nn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k=new ma(3e4,6e4);function xr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Nr(t,e,n,r,i={}){return bw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ga(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),kw.fetch()(Ow(t,t.config.apiHost,n,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function bw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},vk),e);try{const i=new wk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ll(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ll(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ll(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ll(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Rw(t,d,c);Qt(t,d)}}catch(i){if(i instanceof zn)throw i;Qt(t,"network-request-failed",{message:String(i)})}}async function ya(t,e,n,r,i={}){const s=await Nr(t,e,n,r,i);return"mfaPendingCredential"in s&&Qt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ow(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Op(t.config,i):`${t.config.apiScheme}://${i}`}function Ek(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class wk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(on(this.auth,"network-request-failed")),_k.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ll(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=on(t,e,r);return i.customData._tokenResponse=n,i}function iv(t){return t!==void 0&&t.enterprise!==void 0}class Tk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Ek(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Ik(t,e){return Nr(t,"GET","/v2/recaptchaConfig",xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sk(t,e){return Nr(t,"POST","/v1/accounts:delete",e)}async function Dw(t,e){return Nr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ck(t,e=!1){const n=Pt(t),r=await n.getIdToken(e),i=Dp(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:To(wh(i.auth_time)),issuedAtTime:To(wh(i.iat)),expirationTime:To(wh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function wh(t){return Number(t)*1e3}function Dp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Al("JWT malformed, contained fewer than 3 sections"),null;try{const i=mw(n);return i?JSON.parse(i):(Al("Failed to decode base64 JWT payload"),null)}catch(i){return Al("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function sv(t){const e=Dp(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof zn&&Pk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Pk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=To(this.lastLoginAt),this.creationTime=To(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Yo(t,Dw(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?xw(s.providerUserInfo):[],l=kk(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new zd(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function Rk(t){const e=Pt(t);await pu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function xw(t){return t.map(e=>{var{providerId:n}=e,r=kp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bk(t,e){const n=await bw(t,{},async()=>{const r=ga({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Ow(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",kw.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ok(t,e){return Nr(t,"POST","/v2/accounts:revokeToken",xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=sv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await bk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Yi;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yi,this.toJSON())}_performRefresh(){return Sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=kp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ak(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new zd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Yo(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ck(this,e)}reload(){return Rk(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await pu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(en(this.auth.app))return Promise.reject(Rn(this.auth));const e=await this.getIdToken();return await Yo(this,Sk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,E=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(l=n.tenantId)!==null&&l!==void 0?l:void 0,k=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:I,emailVerified:D,isAnonymous:L,providerData:U,stsTokenManager:w}=n;K(I&&w,e,"internal-error");const y=Yi.fromJSON(this.name,w);K(typeof I=="string",e,"internal-error"),Gn(p,e.name),Gn(g,e.name),K(typeof D=="boolean",e,"internal-error"),K(typeof L=="boolean",e,"internal-error"),Gn(E,e.name),Gn(A,e.name),Gn(R,e.name),Gn(k,e.name),Gn(_,e.name),Gn(v,e.name);const T=new Cn({uid:I,auth:e,email:g,emailVerified:D,displayName:p,isAnonymous:L,photoURL:A,phoneNumber:E,tenantId:R,stsTokenManager:y,createdAt:_,lastLoginAt:v});return U&&Array.isArray(U)&&(T.providerData=U.map(P=>Object.assign({},P))),k&&(T._redirectEventId=k),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new Yi;i.updateFromServerResponse(n);const s=new Cn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await pu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?xw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Yi;l.updateFromIdToken(r);const u=new Cn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new zd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov=new Map;function Pn(t){Nn(t instanceof Function,"Expected a class definition");let e=ov.get(t);return e?(Nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ov.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Nw.type="NONE";const av=Nw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(t,e,n){return`firebase:${t}:${e}:${n}`}class Xi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Rl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Rl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xi(Pn(av),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Pn(av);const o=Rl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const p=Cn._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Xi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Xi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Lw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Uw(e))return"Blackberry";if(jw(e))return"Webos";if(xp(e))return"Safari";if((e.includes("chrome/")||Mw(e))&&!e.includes("edge/"))return"Chrome";if(Fw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Lw(t=Qe()){return/firefox\//i.test(t)}function xp(t=Qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mw(t=Qe()){return/crios\//i.test(t)}function Vw(t=Qe()){return/iemobile/i.test(t)}function Fw(t=Qe()){return/android/i.test(t)}function Uw(t=Qe()){return/blackberry/i.test(t)}function jw(t=Qe()){return/webos/i.test(t)}function Xu(t=Qe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Dk(t=Qe()){var e;return Xu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xk(){return YA()&&document.documentMode===10}function zw(t=Qe()){return Xu(t)||Fw(t)||jw(t)||Uw(t)||/windows phone/i.test(t)||Vw(t)}function Nk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bw(t,e=[]){let n;switch(t){case"Browser":n=lv(Qe());break;case"Worker":n=`${lv(Qe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ss}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mk(t,e={}){return Nr(t,"GET","/v2/passwordPolicy",xr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk=6;class Fk{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Vk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uv(this),this.idTokenSubscription=new uv(this),this.beforeStateQueue=new Lk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Aw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Xi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Dw(this,{idToken:e}),r=await Cn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(en(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(en(this.app))return Promise.reject(Rn(this));const n=e?Pt(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return en(this.app)?Promise.reject(Rn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return en(this.app)?Promise.reject(Rn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Mk(this),n=new Fk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new pa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ok(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Xi.create(this,[Pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Bw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&pk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function mi(t){return Pt(t)}class uv{constructor(e){this.auth=e,this.observer=null,this.addObserver=iR(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ju={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jk(t){Ju=t}function $w(t){return Ju.loadJS(t)}function zk(){return Ju.recaptchaEnterpriseScript}function Bk(){return Ju.gapiScript}function $k(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Hk="recaptcha-enterprise",Wk="NO_RECAPTCHA";class qk{constructor(e){this.type=Hk,this.auth=mi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{Ik(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new Tk(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;iv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Wk)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&iv(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=zk();u.length!==0&&(u+=l),$w(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function cv(t,e,n,r=!1){const i=new qk(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Bd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await cv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await cv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gk(t,e){const n=Rp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(hu(s,e??{}))return i;Qt(i,"already-initialized")}return n.initialize({options:e})}function Kk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Qk(t,e,n){const r=mi(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Hw(e),{host:o,port:l}=Yk(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Xk()}function Hw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Yk(t){const e=Hw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:hv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:hv(o)}}}function hv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Xk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sn("not implemented")}_getIdTokenResponse(e){return Sn("not implemented")}_linkToIdToken(e,n){return Sn("not implemented")}_getReauthenticationResolver(e){return Sn("not implemented")}}async function Jk(t,e){return Nr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zk(t,e){return ya(t,"POST","/v1/accounts:signInWithPassword",xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eb(t,e){return ya(t,"POST","/v1/accounts:signInWithEmailLink",xr(t,e))}async function tb(t,e){return ya(t,"POST","/v1/accounts:signInWithEmailLink",xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo extends Np{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Xo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Xo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bd(e,n,"signInWithPassword",Zk);case"emailLink":return eb(e,{email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bd(e,r,"signUpPassword",Jk);case"emailLink":return tb(e,{idToken:n,email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ji(t,e){return ya(t,"POST","/v1/accounts:signInWithIdp",xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb="http://localhost";class oi extends Np{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new oi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=kp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new oi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ji(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ji(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ji(e,n)}buildRequest(){const e={requestUri:nb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ga(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ib(t){const e=so(oo(t)).link,n=e?so(oo(e)).deep_link_id:null,r=so(oo(t)).deep_link_id;return(r?so(oo(r)).link:null)||r||n||e||t}class Lp{constructor(e){var n,r,i,s,o,l;const u=so(oo(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,p=rb((i=u.mode)!==null&&i!==void 0?i:null);K(c&&d&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=ib(e);try{return new Lp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(){this.providerId=Cs.PROVIDER_ID}static credential(e,n){return Xo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Lp.parseLink(n);return K(r,"argument-error"),Xo._fromEmailAndCode(e,r.code,r.tenantId)}}Cs.PROVIDER_ID="password";Cs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Cs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va extends Ww{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends va{constructor(){super("facebook.com")}static credential(e){return oi._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends va{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return oi._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return er.credential(n,r)}catch{return null}}}er.GOOGLE_SIGN_IN_METHOD="google.com";er.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends va{constructor(){super("github.com")}static credential(e){return oi._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.GITHUB_SIGN_IN_METHOD="github.com";tr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends va{constructor(){super("twitter.com")}static credential(e,n){return oi._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return nr.credential(n,r)}catch{return null}}}nr.TWITTER_SIGN_IN_METHOD="twitter.com";nr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sb(t,e){return ya(t,"POST","/v1/accounts:signUp",xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Cn._fromIdTokenResponse(e,r,i),o=dv(r);return new ai({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=dv(r);return new ai({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function dv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu extends zn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,gu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new gu(e,n,r,i)}}function qw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?gu._fromErrorAndOperation(t,s,e,r):s})}async function ob(t,e,n=!1){const r=await Yo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ai._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ab(t,e,n=!1){const{auth:r}=t;if(en(r.app))return Promise.reject(Rn(r));const i="reauthenticate";try{const s=await Yo(t,qw(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=Dp(s.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),ai._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Qt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gw(t,e,n=!1){if(en(t.app))return Promise.reject(Rn(t));const r="signIn",i=await qw(t,r,e),s=await ai._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function lb(t,e){return Gw(mi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kw(t){const e=mi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ub(t,e,n){if(en(t.app))return Promise.reject(Rn(t));const r=mi(t),o=await Bd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",sb).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Kw(t),u}),l=await ai._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function cb(t,e,n){return en(t.app)?Promise.reject(Rn(t)):lb(Pt(t),Cs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Kw(t),r})}function hb(t,e,n,r){return Pt(t).onIdTokenChanged(e,n,r)}function db(t,e,n){return Pt(t).beforeAuthStateChanged(e,n)}function fb(t,e,n,r){return Pt(t).onAuthStateChanged(e,n,r)}function pb(t){return Pt(t).signOut()}const mu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mu,"1"),this.storage.removeItem(mu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(){const t=Qe();return xp(t)||Xu(t)}const mb=1e3,yb=10;class Yw extends Qw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gb()&&Nk(),this.fallbackToPolling=zw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);xk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,yb):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},mb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yw.type="LOCAL";const vb=Yw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw extends Qw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Xw.type="SESSION";const Jw=Xw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Zu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await _b(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Mp("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return window}function wb(t){an().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function Tb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ib(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Sb(){return Zw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT="firebaseLocalStorageDb",Cb=1,yu="firebaseLocalStorage",tT="fbase_key";class _a{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ec(t,e){return t.transaction([yu],e?"readwrite":"readonly").objectStore(yu)}function Pb(){const t=indexedDB.deleteDatabase(eT);return new _a(t).toPromise()}function $d(){const t=indexedDB.open(eT,Cb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(yu,{keyPath:tT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(yu)?e(r):(r.close(),await Pb(),e(await $d()))})})}async function fv(t,e,n){const r=ec(t,!0).put({[tT]:e,value:n});return new _a(r).toPromise()}async function Ab(t,e){const n=ec(t,!1).get(e),r=await new _a(n).toPromise();return r===void 0?null:r.value}function pv(t,e){const n=ec(t,!0).delete(e);return new _a(n).toPromise()}const Rb=800,kb=3;class nT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $d(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>kb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zu._getInstance(Sb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Tb(),!this.activeServiceWorker)return;this.sender=new Eb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ib()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $d();return await fv(e,mu,"1"),await pv(e,mu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>fv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ab(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ec(i,!1).getAll();return new _a(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Rb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nT.type="LOCAL";const bb=nT;new ma(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ob(t,e){return e?Pn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp extends Np{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ji(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ji(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ji(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Db(t){return Gw(t.auth,new Vp(t),t.bypassAuthState)}function xb(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),ab(n,new Vp(t),t.bypassAuthState)}async function Nb(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),ob(n,new Vp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Db;case"linkViaPopup":case"linkViaRedirect":return Nb;case"reauthViaPopup":case"reauthViaRedirect":return xb;default:Qt(this.auth,"internal-error")}}resolve(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb=new ma(2e3,1e4);class zi extends rT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,zi.currentPopupAction&&zi.currentPopupAction.cancel(),zi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Nn(this.filter.length===1,"Popup operations only handle one event");const e=Mp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Lb.get())};e()}}zi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb="pendingRedirect",kl=new Map;class Vb extends rT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=kl.get(this.auth._key());if(!e){try{const r=await Fb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}kl.set(this.auth._key(),e)}return this.bypassAuthState||kl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Fb(t,e){const n=zb(e),r=jb(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Ub(t,e){kl.set(t._key(),e)}function jb(t){return Pn(t._redirectPersistence)}function zb(t){return Rl(Mb,t.config.apiKey,t.name)}async function Bb(t,e,n=!1){if(en(t.app))return Promise.reject(Rn(t));const r=mi(t),i=Ob(r,e),o=await new Vb(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b=10*60*1e3;class Hb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Wb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!iT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(on(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$b&&this.cachedEventUids.clear(),this.cachedEventUids.has(gv(e))}saveEventToCache(e){this.cachedEventUids.add(gv(e)),this.lastProcessedEventTime=Date.now()}}function gv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function iT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Wb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qb(t,e={}){return Nr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Kb=/^https?/;async function Qb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qb(t);for(const n of e)try{if(Yb(n))return}catch{}Qt(t,"unauthorized-domain")}function Yb(t){const e=jd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Kb.test(n))return!1;if(Gb.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb=new ma(3e4,6e4);function mv(){const t=an().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Jb(t){return new Promise((e,n)=>{var r,i,s;function o(){mv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mv(),n(on(t,"network-request-failed"))},timeout:Xb.get()})}if(!((i=(r=an().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=an().gapi)===null||s===void 0)&&s.load)o();else{const l=$k("iframefcb");return an()[l]=()=>{gapi.load?o():n(on(t,"network-request-failed"))},$w(`${Bk()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw bl=null,e})}let bl=null;function Zb(t){return bl=bl||Jb(t),bl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eO=new ma(5e3,15e3),tO="__/auth/iframe",nO="emulator/auth/iframe",rO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sO(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Op(e,nO):`https://${t.config.authDomain}/${tO}`,r={apiKey:e.apiKey,appName:t.name,v:Ss},i=iO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ga(r).slice(1)}`}async function oO(t){const e=await Zb(t),n=an().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:sO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=on(t,"network-request-failed"),l=an().setTimeout(()=>{s(o)},eO.get());function u(){an().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lO=500,uO=600,cO="_blank",hO="http://localhost";class yv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dO(t,e,n,r=lO,i=uO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},aO),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Qe().toLowerCase();n&&(l=Mw(c)?cO:n),Lw(c)&&(e=e||hO,u.scrollbars="yes");const d=Object.entries(u).reduce((g,[E,A])=>`${g}${E}=${A},`,"");if(Dk(c)&&l!=="_self")return fO(e||"",l),new yv(null);const p=window.open(e||"",l,d);K(p,t,"popup-blocked");try{p.focus()}catch{}return new yv(p)}function fO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO="__/auth/handler",gO="emulator/auth/handler",mO=encodeURIComponent("fac");async function vv(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ss,eventId:i};if(e instanceof Ww){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",rR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof va){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${mO}=${encodeURIComponent(u)}`:"";return`${yO(t)}?${ga(l).slice(1)}${c}`}function yO({config:t}){return t.emulator?Op(t,gO):`https://${t.authDomain}/${pO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th="webStorageSupport";class vO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jw,this._completeRedirectFn=Bb,this._overrideRedirectResult=Ub}async _openPopup(e,n,r,i){var s;Nn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await vv(e,n,r,jd(),i);return dO(e,o,Mp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await vv(e,n,r,jd(),i);return wb(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Nn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await oO(e),r=new Hb(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Th,{type:Th},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Th];o!==void 0&&n(!!o),Qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Qb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zw()||xp()||Xu()}}const _O=vO;var _v="@firebase/auth",Ev="1.7.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function TO(t){ls(new ii("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bw(t)},c=new Uk(r,i,s,u);return Kk(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ls(new ii("auth-internal",e=>{const n=mi(e.getProvider("auth").getImmediate());return(r=>new EO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_r(_v,Ev,wO(t)),_r(_v,Ev,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IO=5*60,SO=_w("authIdTokenMaxAge")||IO;let wv=null;const CO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>SO)return;const i=n==null?void 0:n.token;wv!==i&&(wv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function PO(t=Iw()){const e=Rp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Gk(t,{popupRedirectResolver:_O,persistence:[bb,vb,Jw]}),r=_w("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=CO(s.toString());db(n,o,()=>o(n.currentUser)),hb(n,l=>o(l))}}const i=yw("auth");return i&&Qk(n,`http://${i}`),n}function AO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}jk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=on("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",AO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});TO("Browser");var RO="firebase",kO="10.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_r(RO,kO,"app");var Tv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yr,sT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function T(){}T.prototype=y.prototype,w.D=y.prototype,w.prototype=new T,w.prototype.constructor=w,w.C=function(P,S,b){for(var C=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)C[Ce-2]=arguments[Ce];return y.prototype[S].apply(P,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,y,T){T||(T=0);var P=Array(16);if(typeof y=="string")for(var S=0;16>S;++S)P[S]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(S=0;16>S;++S)P[S]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=w.g[0],T=w.g[1],S=w.g[2];var b=w.g[3],C=y+(b^T&(S^b))+P[0]+3614090360&4294967295;y=T+(C<<7&4294967295|C>>>25),C=b+(S^y&(T^S))+P[1]+3905402710&4294967295,b=y+(C<<12&4294967295|C>>>20),C=S+(T^b&(y^T))+P[2]+606105819&4294967295,S=b+(C<<17&4294967295|C>>>15),C=T+(y^S&(b^y))+P[3]+3250441966&4294967295,T=S+(C<<22&4294967295|C>>>10),C=y+(b^T&(S^b))+P[4]+4118548399&4294967295,y=T+(C<<7&4294967295|C>>>25),C=b+(S^y&(T^S))+P[5]+1200080426&4294967295,b=y+(C<<12&4294967295|C>>>20),C=S+(T^b&(y^T))+P[6]+2821735955&4294967295,S=b+(C<<17&4294967295|C>>>15),C=T+(y^S&(b^y))+P[7]+4249261313&4294967295,T=S+(C<<22&4294967295|C>>>10),C=y+(b^T&(S^b))+P[8]+1770035416&4294967295,y=T+(C<<7&4294967295|C>>>25),C=b+(S^y&(T^S))+P[9]+2336552879&4294967295,b=y+(C<<12&4294967295|C>>>20),C=S+(T^b&(y^T))+P[10]+4294925233&4294967295,S=b+(C<<17&4294967295|C>>>15),C=T+(y^S&(b^y))+P[11]+2304563134&4294967295,T=S+(C<<22&4294967295|C>>>10),C=y+(b^T&(S^b))+P[12]+1804603682&4294967295,y=T+(C<<7&4294967295|C>>>25),C=b+(S^y&(T^S))+P[13]+4254626195&4294967295,b=y+(C<<12&4294967295|C>>>20),C=S+(T^b&(y^T))+P[14]+2792965006&4294967295,S=b+(C<<17&4294967295|C>>>15),C=T+(y^S&(b^y))+P[15]+1236535329&4294967295,T=S+(C<<22&4294967295|C>>>10),C=y+(S^b&(T^S))+P[1]+4129170786&4294967295,y=T+(C<<5&4294967295|C>>>27),C=b+(T^S&(y^T))+P[6]+3225465664&4294967295,b=y+(C<<9&4294967295|C>>>23),C=S+(y^T&(b^y))+P[11]+643717713&4294967295,S=b+(C<<14&4294967295|C>>>18),C=T+(b^y&(S^b))+P[0]+3921069994&4294967295,T=S+(C<<20&4294967295|C>>>12),C=y+(S^b&(T^S))+P[5]+3593408605&4294967295,y=T+(C<<5&4294967295|C>>>27),C=b+(T^S&(y^T))+P[10]+38016083&4294967295,b=y+(C<<9&4294967295|C>>>23),C=S+(y^T&(b^y))+P[15]+3634488961&4294967295,S=b+(C<<14&4294967295|C>>>18),C=T+(b^y&(S^b))+P[4]+3889429448&4294967295,T=S+(C<<20&4294967295|C>>>12),C=y+(S^b&(T^S))+P[9]+568446438&4294967295,y=T+(C<<5&4294967295|C>>>27),C=b+(T^S&(y^T))+P[14]+3275163606&4294967295,b=y+(C<<9&4294967295|C>>>23),C=S+(y^T&(b^y))+P[3]+4107603335&4294967295,S=b+(C<<14&4294967295|C>>>18),C=T+(b^y&(S^b))+P[8]+1163531501&4294967295,T=S+(C<<20&4294967295|C>>>12),C=y+(S^b&(T^S))+P[13]+2850285829&4294967295,y=T+(C<<5&4294967295|C>>>27),C=b+(T^S&(y^T))+P[2]+4243563512&4294967295,b=y+(C<<9&4294967295|C>>>23),C=S+(y^T&(b^y))+P[7]+1735328473&4294967295,S=b+(C<<14&4294967295|C>>>18),C=T+(b^y&(S^b))+P[12]+2368359562&4294967295,T=S+(C<<20&4294967295|C>>>12),C=y+(T^S^b)+P[5]+4294588738&4294967295,y=T+(C<<4&4294967295|C>>>28),C=b+(y^T^S)+P[8]+2272392833&4294967295,b=y+(C<<11&4294967295|C>>>21),C=S+(b^y^T)+P[11]+1839030562&4294967295,S=b+(C<<16&4294967295|C>>>16),C=T+(S^b^y)+P[14]+4259657740&4294967295,T=S+(C<<23&4294967295|C>>>9),C=y+(T^S^b)+P[1]+2763975236&4294967295,y=T+(C<<4&4294967295|C>>>28),C=b+(y^T^S)+P[4]+1272893353&4294967295,b=y+(C<<11&4294967295|C>>>21),C=S+(b^y^T)+P[7]+4139469664&4294967295,S=b+(C<<16&4294967295|C>>>16),C=T+(S^b^y)+P[10]+3200236656&4294967295,T=S+(C<<23&4294967295|C>>>9),C=y+(T^S^b)+P[13]+681279174&4294967295,y=T+(C<<4&4294967295|C>>>28),C=b+(y^T^S)+P[0]+3936430074&4294967295,b=y+(C<<11&4294967295|C>>>21),C=S+(b^y^T)+P[3]+3572445317&4294967295,S=b+(C<<16&4294967295|C>>>16),C=T+(S^b^y)+P[6]+76029189&4294967295,T=S+(C<<23&4294967295|C>>>9),C=y+(T^S^b)+P[9]+3654602809&4294967295,y=T+(C<<4&4294967295|C>>>28),C=b+(y^T^S)+P[12]+3873151461&4294967295,b=y+(C<<11&4294967295|C>>>21),C=S+(b^y^T)+P[15]+530742520&4294967295,S=b+(C<<16&4294967295|C>>>16),C=T+(S^b^y)+P[2]+3299628645&4294967295,T=S+(C<<23&4294967295|C>>>9),C=y+(S^(T|~b))+P[0]+4096336452&4294967295,y=T+(C<<6&4294967295|C>>>26),C=b+(T^(y|~S))+P[7]+1126891415&4294967295,b=y+(C<<10&4294967295|C>>>22),C=S+(y^(b|~T))+P[14]+2878612391&4294967295,S=b+(C<<15&4294967295|C>>>17),C=T+(b^(S|~y))+P[5]+4237533241&4294967295,T=S+(C<<21&4294967295|C>>>11),C=y+(S^(T|~b))+P[12]+1700485571&4294967295,y=T+(C<<6&4294967295|C>>>26),C=b+(T^(y|~S))+P[3]+2399980690&4294967295,b=y+(C<<10&4294967295|C>>>22),C=S+(y^(b|~T))+P[10]+4293915773&4294967295,S=b+(C<<15&4294967295|C>>>17),C=T+(b^(S|~y))+P[1]+2240044497&4294967295,T=S+(C<<21&4294967295|C>>>11),C=y+(S^(T|~b))+P[8]+1873313359&4294967295,y=T+(C<<6&4294967295|C>>>26),C=b+(T^(y|~S))+P[15]+4264355552&4294967295,b=y+(C<<10&4294967295|C>>>22),C=S+(y^(b|~T))+P[6]+2734768916&4294967295,S=b+(C<<15&4294967295|C>>>17),C=T+(b^(S|~y))+P[13]+1309151649&4294967295,T=S+(C<<21&4294967295|C>>>11),C=y+(S^(T|~b))+P[4]+4149444226&4294967295,y=T+(C<<6&4294967295|C>>>26),C=b+(T^(y|~S))+P[11]+3174756917&4294967295,b=y+(C<<10&4294967295|C>>>22),C=S+(y^(b|~T))+P[2]+718787259&4294967295,S=b+(C<<15&4294967295|C>>>17),C=T+(b^(S|~y))+P[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(S+(C<<21&4294967295|C>>>11))&4294967295,w.g[2]=w.g[2]+S&4294967295,w.g[3]=w.g[3]+b&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var T=y-this.blockSize,P=this.B,S=this.h,b=0;b<y;){if(S==0)for(;b<=T;)i(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<y;)if(P[S++]=w.charCodeAt(b++),S==this.blockSize){i(this,P),S=0;break}}else for(;b<y;)if(P[S++]=w[b++],S==this.blockSize){i(this,P),S=0;break}}this.h=S,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var T=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=T&255,T/=256;for(this.u(w),w=Array(16),y=T=0;4>y;++y)for(var P=0;32>P;P+=8)w[T++]=this.g[y]>>>P&255;return w};function s(w,y){var T=l;return Object.prototype.hasOwnProperty.call(T,w)?T[w]:T[w]=y(w)}function o(w,y){this.h=y;for(var T=[],P=!0,S=w.length-1;0<=S;S--){var b=w[S]|0;P&&b==y||(T[S]=b,P=!1)}this.g=T}var l={};function u(w){return-128<=w&&128>w?s(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return k(c(-w));for(var y=[],T=1,P=0;w>=T;P++)y[P]=w/T|0,T*=4294967296;return new o(y,0)}function d(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return k(d(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(y,8)),P=p,S=0;S<w.length;S+=8){var b=Math.min(8,w.length-S),C=parseInt(w.substring(S,S+b),y);8>b?(b=c(Math.pow(y,b)),P=P.j(b).add(c(C))):(P=P.j(T),P=P.add(c(C)))}return P}var p=u(0),g=u(1),E=u(16777216);t=o.prototype,t.m=function(){if(R(this))return-k(this).m();for(var w=0,y=1,T=0;T<this.g.length;T++){var P=this.i(T);w+=(0<=P?P:4294967296+P)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(A(this))return"0";if(R(this))return"-"+k(this).toString(w);for(var y=c(Math.pow(w,6)),T=this,P="";;){var S=D(T,y).g;T=_(T,S.j(y));var b=((0<T.g.length?T.g[0]:T.h)>>>0).toString(w);if(T=S,A(T))return b+P;for(;6>b.length;)b="0"+b;P=b+P}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function A(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function R(w){return w.h==-1}t.l=function(w){return w=_(this,w),R(w)?-1:A(w)?0:1};function k(w){for(var y=w.g.length,T=[],P=0;P<y;P++)T[P]=~w.g[P];return new o(T,~w.h).add(g)}t.abs=function(){return R(this)?k(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),T=[],P=0,S=0;S<=y;S++){var b=P+(this.i(S)&65535)+(w.i(S)&65535),C=(b>>>16)+(this.i(S)>>>16)+(w.i(S)>>>16);P=C>>>16,b&=65535,C&=65535,T[S]=C<<16|b}return new o(T,T[T.length-1]&-2147483648?-1:0)};function _(w,y){return w.add(k(y))}t.j=function(w){if(A(this)||A(w))return p;if(R(this))return R(w)?k(this).j(k(w)):k(k(this).j(w));if(R(w))return k(this.j(k(w)));if(0>this.l(E)&&0>w.l(E))return c(this.m()*w.m());for(var y=this.g.length+w.g.length,T=[],P=0;P<2*y;P++)T[P]=0;for(P=0;P<this.g.length;P++)for(var S=0;S<w.g.length;S++){var b=this.i(P)>>>16,C=this.i(P)&65535,Ce=w.i(S)>>>16,vt=w.i(S)&65535;T[2*P+2*S]+=C*vt,v(T,2*P+2*S),T[2*P+2*S+1]+=b*vt,v(T,2*P+2*S+1),T[2*P+2*S+1]+=C*Ce,v(T,2*P+2*S+1),T[2*P+2*S+2]+=b*Ce,v(T,2*P+2*S+2)}for(P=0;P<y;P++)T[P]=T[2*P+1]<<16|T[2*P];for(P=y;P<2*y;P++)T[P]=0;return new o(T,0)};function v(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function I(w,y){this.g=w,this.h=y}function D(w,y){if(A(y))throw Error("division by zero");if(A(w))return new I(p,p);if(R(w))return y=D(k(w),y),new I(k(y.g),k(y.h));if(R(y))return y=D(w,k(y)),new I(k(y.g),y.h);if(30<w.g.length){if(R(w)||R(y))throw Error("slowDivide_ only works with positive integers.");for(var T=g,P=y;0>=P.l(w);)T=L(T),P=L(P);var S=U(T,1),b=U(P,1);for(P=U(P,2),T=U(T,2);!A(P);){var C=b.add(P);0>=C.l(w)&&(S=S.add(T),b=C),P=U(P,1),T=U(T,1)}return y=_(w,S.j(y)),new I(S,y)}for(S=p;0<=w.l(y);){for(T=Math.max(1,Math.floor(w.m()/y.m())),P=Math.ceil(Math.log(T)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),b=c(T),C=b.j(y);R(C)||0<C.l(w);)T-=P,b=c(T),C=b.j(y);A(b)&&(b=g),S=S.add(b),w=_(w,C)}return new I(S,w)}t.A=function(w){return D(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),T=[],P=0;P<y;P++)T[P]=this.i(P)&w.i(P);return new o(T,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),T=[],P=0;P<y;P++)T[P]=this.i(P)|w.i(P);return new o(T,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),T=[],P=0;P<y;P++)T[P]=this.i(P)^w.i(P);return new o(T,this.h^w.h)};function L(w){for(var y=w.g.length+1,T=[],P=0;P<y;P++)T[P]=w.i(P)<<1|w.i(P-1)>>>31;return new o(T,w.h)}function U(w,y){var T=y>>5;y%=32;for(var P=w.g.length-T,S=[],b=0;b<P;b++)S[b]=0<y?w.i(b+T)>>>y|w.i(b+T+1)<<32-y:w.i(b+T);return new o(S,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,sT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Yr=o}).apply(typeof Tv<"u"?Tv:typeof self<"u"?self:typeof window<"u"?window:{});var ul=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var oT,aT,ao,lT,Ol,Hd,uT,cT,hT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ul=="object"&&ul];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var O=a[m];if(!(O in f))break e;f=f[O]}a=a[a.length-1],m=f[a],h=h(m),h!=m&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,m=!1,O={next:function(){if(!m&&f<a.length){var x=f++;return{value:h(x,a[x]),done:!1}}return m=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,m),a.apply(h,O)}}return function(){return a.apply(h,arguments)}}function g(a,h,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function E(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function A(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(m,O,x){for(var z=Array(arguments.length-2),he=2;he<arguments.length;he++)z[he-2]=arguments[he];return h.prototype[O].apply(m,z)}}function R(a){const h=a.length;if(0<h){const f=Array(h);for(let m=0;m<h;m++)f[m]=a[m];return f}return[]}function k(a,h){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(u(m)){const O=a.length||0,x=m.length||0;a.length=O+x;for(let z=0;z<x;z++)a[O+z]=m[z]}else a.push(m)}}class _{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(a){return/^[\s\xa0]*$/.test(a)}function I(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var L=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function U(a,h,f){for(const m in a)h.call(f,a[m],m,a)}function w(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(a,h){let f,m;for(let O=1;O<arguments.length;O++){m=arguments[O];for(f in m)a[f]=m[f];for(let x=0;x<T.length;x++)f=T[x],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function S(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function b(a){l.setTimeout(()=>{throw a},0)}function C(){var a=Q;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Ce{constructor(){this.h=this.g=null}add(h,f){const m=vt.get();m.set(h,f),this.h?this.h.next=m:this.g=m,this.h=m}}var vt=new _(()=>new Lr,a=>a.reset());class Lr{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let fn,B=!1,Q=new Ce,ee=()=>{const a=l.Promise.resolve(void 0);fn=()=>{a.then(Ee)}};var Ee=()=>{for(var a;a=C();){try{a.h.call(a.g)}catch(f){b(f)}var h=vt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}B=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ke(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}ke.prototype.h=function(){this.defaultPrevented=!0};var pn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function gn(a,h){if(ke.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(L){e:{try{D(h.nodeName);var O=!0;break e}catch{}O=!1}O||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:mn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&gn.aa.h.call(this)}}A(gn,ke);var mn={2:"touch",3:"pen",4:"mouse"};gn.prototype.h=function(){gn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var yn="closure_listenable_"+(1e6*Math.random()|0),bI=0;function OI(a,h,f,m,O){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!m,this.ha=O,this.key=++bI,this.da=this.fa=!1}function Ra(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ka(a){this.src=a,this.g={},this.h=0}ka.prototype.add=function(a,h,f,m,O){var x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);var z=wc(a,h,m,O);return-1<z?(h=a[z],f||(h.fa=!1)):(h=new OI(h,this.src,x,!!m,O),h.fa=f,a.push(h)),h};function Ec(a,h){var f=h.type;if(f in a.g){var m=a.g[f],O=Array.prototype.indexOf.call(m,h,void 0),x;(x=0<=O)&&Array.prototype.splice.call(m,O,1),x&&(Ra(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function wc(a,h,f,m){for(var O=0;O<a.length;++O){var x=a[O];if(!x.da&&x.listener==h&&x.capture==!!f&&x.ha==m)return O}return-1}var Tc="closure_lm_"+(1e6*Math.random()|0),Ic={};function Og(a,h,f,m,O){if(Array.isArray(h)){for(var x=0;x<h.length;x++)Og(a,h[x],f,m,O);return null}return f=Ng(f),a&&a[yn]?a.K(h,f,c(m)?!!m.capture:!!m,O):DI(a,h,f,!1,m,O)}function DI(a,h,f,m,O,x){if(!h)throw Error("Invalid event type");var z=c(O)?!!O.capture:!!O,he=Cc(a);if(he||(a[Tc]=he=new ka(a)),f=he.add(h,f,m,z,x),f.proxy)return f;if(m=xI(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)pn||(O=z),O===void 0&&(O=!1),a.addEventListener(h.toString(),m,O);else if(a.attachEvent)a.attachEvent(xg(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function xI(){function a(f){return h.call(a.src,a.listener,f)}const h=NI;return a}function Dg(a,h,f,m,O){if(Array.isArray(h))for(var x=0;x<h.length;x++)Dg(a,h[x],f,m,O);else m=c(m)?!!m.capture:!!m,f=Ng(f),a&&a[yn]?(a=a.i,h=String(h).toString(),h in a.g&&(x=a.g[h],f=wc(x,f,m,O),-1<f&&(Ra(x[f]),Array.prototype.splice.call(x,f,1),x.length==0&&(delete a.g[h],a.h--)))):a&&(a=Cc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=wc(h,f,m,O)),(f=-1<a?h[a]:null)&&Sc(f))}function Sc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[yn])Ec(h.i,a);else{var f=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(f,m,a.capture):h.detachEvent?h.detachEvent(xg(f),m):h.addListener&&h.removeListener&&h.removeListener(m),(f=Cc(h))?(Ec(f,a),f.h==0&&(f.src=null,h[Tc]=null)):Ra(a)}}}function xg(a){return a in Ic?Ic[a]:Ic[a]="on"+a}function NI(a,h){if(a.da)a=!0;else{h=new gn(h,this);var f=a.listener,m=a.ha||a.src;a.fa&&Sc(a),a=f.call(m,h)}return a}function Cc(a){return a=a[Tc],a instanceof ka?a:null}var Pc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ng(a){return typeof a=="function"?a:(a[Pc]||(a[Pc]=function(h){return a.handleEvent(h)}),a[Pc])}function Ye(){ce.call(this),this.i=new ka(this),this.M=this,this.F=null}A(Ye,ce),Ye.prototype[yn]=!0,Ye.prototype.removeEventListener=function(a,h,f,m){Dg(this,a,h,f,m)};function at(a,h){var f,m=a.F;if(m)for(f=[];m;m=m.F)f.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new ke(h,a);else if(h instanceof ke)h.target=h.target||a;else{var O=h;h=new ke(m,a),P(h,O)}if(O=!0,f)for(var x=f.length-1;0<=x;x--){var z=h.g=f[x];O=ba(z,m,!0,h)&&O}if(z=h.g=a,O=ba(z,m,!0,h)&&O,O=ba(z,m,!1,h)&&O,f)for(x=0;x<f.length;x++)z=h.g=f[x],O=ba(z,m,!1,h)&&O}Ye.prototype.N=function(){if(Ye.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],m=0;m<f.length;m++)Ra(f[m]);delete a.g[h],a.h--}}this.F=null},Ye.prototype.K=function(a,h,f,m){return this.i.add(String(a),h,!1,f,m)},Ye.prototype.L=function(a,h,f,m){return this.i.add(String(a),h,!0,f,m)};function ba(a,h,f,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var O=!0,x=0;x<h.length;++x){var z=h[x];if(z&&!z.da&&z.capture==f){var he=z.listener,Be=z.ha||z.src;z.fa&&Ec(a.i,z),O=he.call(Be,m)!==!1&&O}}return O&&!m.defaultPrevented}function Lg(a,h,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Mg(a){a.g=Lg(()=>{a.g=null,a.i&&(a.i=!1,Mg(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class LI extends ce{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Mg(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ds(a){ce.call(this),this.h=a,this.g={}}A(Ds,ce);var Vg=[];function Fg(a){U(a.g,function(h,f){this.g.hasOwnProperty(f)&&Sc(h)},a),a.g={}}Ds.prototype.N=function(){Ds.aa.N.call(this),Fg(this)},Ds.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ac=l.JSON.stringify,MI=l.JSON.parse,VI=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Rc(){}Rc.prototype.h=null;function Ug(a){return a.h||(a.h=a.i())}function jg(){}var xs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function kc(){ke.call(this,"d")}A(kc,ke);function bc(){ke.call(this,"c")}A(bc,ke);var Mr={},zg=null;function Oa(){return zg=zg||new Ye}Mr.La="serverreachability";function Bg(a){ke.call(this,Mr.La,a)}A(Bg,ke);function Ns(a){const h=Oa();at(h,new Bg(h))}Mr.STAT_EVENT="statevent";function $g(a,h){ke.call(this,Mr.STAT_EVENT,a),this.stat=h}A($g,ke);function lt(a){const h=Oa();at(h,new $g(h,a))}Mr.Ma="timingevent";function Hg(a,h){ke.call(this,Mr.Ma,a),this.size=h}A(Hg,ke);function Ls(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Ms(){this.g=!0}Ms.prototype.xa=function(){this.g=!1};function FI(a,h,f,m,O,x){a.info(function(){if(a.g)if(x)for(var z="",he=x.split("&"),Be=0;Be<he.length;Be++){var ae=he[Be].split("=");if(1<ae.length){var Xe=ae[0];ae=ae[1];var Je=Xe.split("_");z=2<=Je.length&&Je[1]=="type"?z+(Xe+"="+ae+"&"):z+(Xe+"=redacted&")}}else z=null;else z=x;return"XMLHTTP REQ ("+m+") [attempt "+O+"]: "+h+`
`+f+`
`+z})}function UI(a,h,f,m,O,x,z){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+O+"]: "+h+`
`+f+`
`+x+" "+z})}function _i(a,h,f,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+zI(a,f)+(m?" "+m:"")})}function jI(a,h){a.info(function(){return"TIMEOUT: "+h})}Ms.prototype.info=function(){};function zI(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var m=f[a];if(!(2>m.length)){var O=m[1];if(Array.isArray(O)&&!(1>O.length)){var x=O[0];if(x!="noop"&&x!="stop"&&x!="close")for(var z=1;z<O.length;z++)O[z]=""}}}}return Ac(f)}catch{return h}}var Da={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Wg={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Oc;function xa(){}A(xa,Rc),xa.prototype.g=function(){return new XMLHttpRequest},xa.prototype.i=function(){return{}},Oc=new xa;function $n(a,h,f,m){this.j=a,this.i=h,this.l=f,this.R=m||1,this.U=new Ds(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new qg}function qg(){this.i=null,this.g="",this.h=!1}var Gg={},Dc={};function xc(a,h,f){a.L=1,a.v=Va(vn(h)),a.m=f,a.P=!0,Kg(a,null)}function Kg(a,h){a.F=Date.now(),Na(a),a.A=vn(a.v);var f=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),lm(f.i,"t",m),a.C=0,f=a.j.J,a.h=new qg,a.g=Pm(a.j,f?h:null,!a.m),0<a.O&&(a.M=new LI(g(a.Y,a,a.g),a.O)),h=a.U,f=a.g,m=a.ca;var O="readystatechange";Array.isArray(O)||(O&&(Vg[0]=O.toString()),O=Vg);for(var x=0;x<O.length;x++){var z=Og(f,O[x],m||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Ns(),FI(a.i,a.u,a.A,a.l,a.R,a.m)}$n.prototype.ca=function(a){a=a.target;const h=this.M;h&&_n(a)==3?h.j():this.Y(a)},$n.prototype.Y=function(a){try{if(a==this.g)e:{const Je=_n(this.g);var h=this.g.Ba();const Ti=this.g.Z();if(!(3>Je)&&(Je!=3||this.g&&(this.h.h||this.g.oa()||gm(this.g)))){this.J||Je!=4||h==7||(h==8||0>=Ti?Ns(3):Ns(2)),Nc(this);var f=this.g.Z();this.X=f;t:if(Qg(this)){var m=gm(this.g);a="";var O=m.length,x=_n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vr(this),Vs(this);var z="";break t}this.h.i=new l.TextDecoder}for(h=0;h<O;h++)this.h.h=!0,a+=this.h.i.decode(m[h],{stream:!(x&&h==O-1)});m.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=f==200,UI(this.i,this.u,this.A,this.l,this.R,Je,f),this.o){if(this.T&&!this.K){t:{if(this.g){var he,Be=this.g;if((he=Be.g?Be.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(he)){var ae=he;break t}}ae=null}if(f=ae)_i(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Lc(this,f);else{this.o=!1,this.s=3,lt(12),Vr(this),Vs(this);break e}}if(this.P){f=!0;let jt;for(;!this.J&&this.C<z.length;)if(jt=BI(this,z),jt==Dc){Je==4&&(this.s=4,lt(14),f=!1),_i(this.i,this.l,null,"[Incomplete Response]");break}else if(jt==Gg){this.s=4,lt(15),_i(this.i,this.l,z,"[Invalid Chunk]"),f=!1;break}else _i(this.i,this.l,jt,null),Lc(this,jt);if(Qg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Je!=4||z.length!=0||this.h.h||(this.s=1,lt(16),f=!1),this.o=this.o&&f,!f)_i(this.i,this.l,z,"[Invalid Chunked Response]"),Vr(this),Vs(this);else if(0<z.length&&!this.W){this.W=!0;var Xe=this.j;Xe.g==this&&Xe.ba&&!Xe.M&&(Xe.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),zc(Xe),Xe.M=!0,lt(11))}}else _i(this.i,this.l,z,null),Lc(this,z);Je==4&&Vr(this),this.o&&!this.J&&(Je==4?Tm(this.j,this):(this.o=!1,Na(this)))}else sS(this.g),f==400&&0<z.indexOf("Unknown SID")?(this.s=3,lt(12)):(this.s=0,lt(13)),Vr(this),Vs(this)}}}catch{}finally{}};function Qg(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function BI(a,h){var f=a.C,m=h.indexOf(`
`,f);return m==-1?Dc:(f=Number(h.substring(f,m)),isNaN(f)?Gg:(m+=1,m+f>h.length?Dc:(h=h.slice(m,m+f),a.C=m+f,h)))}$n.prototype.cancel=function(){this.J=!0,Vr(this)};function Na(a){a.S=Date.now()+a.I,Yg(a,a.I)}function Yg(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ls(g(a.ba,a),h)}function Nc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}$n.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(jI(this.i,this.A),this.L!=2&&(Ns(),lt(17)),Vr(this),this.s=2,Vs(this)):Yg(this,this.S-a)};function Vs(a){a.j.G==0||a.J||Tm(a.j,a)}function Vr(a){Nc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Fg(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Lc(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Mc(f.h,a))){if(!a.K&&Mc(f.h,a)&&f.G==3){try{var m=f.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var O=m;if(O[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Ba(f),ja(f);else break e;jc(f),lt(18)}}else f.za=O[1],0<f.za-f.T&&37500>O[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ls(g(f.Za,f),6e3));if(1>=Zg(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Ur(f,11)}else if((a.K||f.g==a)&&Ba(f),!v(h))for(O=f.Da.g.parse(h),h=0;h<O.length;h++){let ae=O[h];if(f.T=ae[0],ae=ae[1],f.G==2)if(ae[0]=="c"){f.K=ae[1],f.ia=ae[2];const Xe=ae[3];Xe!=null&&(f.la=Xe,f.j.info("VER="+f.la));const Je=ae[4];Je!=null&&(f.Aa=Je,f.j.info("SVER="+f.Aa));const Ti=ae[5];Ti!=null&&typeof Ti=="number"&&0<Ti&&(m=1.5*Ti,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const jt=a.g;if(jt){const Ha=jt.g?jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ha){var x=m.h;x.g||Ha.indexOf("spdy")==-1&&Ha.indexOf("quic")==-1&&Ha.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(Vc(x,x.h),x.h=null))}if(m.D){const Bc=jt.g?jt.g.getResponseHeader("X-HTTP-Session-Id"):null;Bc&&(m.ya=Bc,pe(m.I,m.D,Bc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var z=a;if(m.qa=Cm(m,m.J?m.ia:null,m.W),z.K){em(m.h,z);var he=z,Be=m.L;Be&&(he.I=Be),he.B&&(Nc(he),Na(he)),m.g=z}else Em(m);0<f.i.length&&za(f)}else ae[0]!="stop"&&ae[0]!="close"||Ur(f,7);else f.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?Ur(f,7):Uc(f):ae[0]!="noop"&&f.l&&f.l.ta(ae),f.v=0)}}Ns(4)}catch{}}var $I=class{constructor(a,h){this.g=a,this.map=h}};function Xg(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Jg(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Zg(a){return a.h?1:a.g?a.g.size:0}function Mc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Vc(a,h){a.g?a.g.add(h):a.h=h}function em(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Xg.prototype.cancel=function(){if(this.i=tm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function tm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return R(a.i)}function HI(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,m=0;m<f;m++)h.push(a[m]);return h}h=[],f=0;for(m in a)h[f++]=a[m];return h}function WI(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const m in a)h[f++]=m;return h}}}function nm(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=WI(a),m=HI(a),O=m.length,x=0;x<O;x++)h.call(void 0,m[x],f&&f[x],a)}var rm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qI(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var m=a[f].indexOf("="),O=null;if(0<=m){var x=a[f].substring(0,m);O=a[f].substring(m+1)}else x=a[f];h(x,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Fr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Fr){this.h=a.h,La(this,a.j),this.o=a.o,this.g=a.g,Ma(this,a.s),this.l=a.l;var h=a.i,f=new js;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),im(this,f),this.m=a.m}else a&&(h=String(a).match(rm))?(this.h=!1,La(this,h[1]||"",!0),this.o=Fs(h[2]||""),this.g=Fs(h[3]||"",!0),Ma(this,h[4]),this.l=Fs(h[5]||"",!0),im(this,h[6]||"",!0),this.m=Fs(h[7]||"")):(this.h=!1,this.i=new js(null,this.h))}Fr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Us(h,sm,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Us(h,sm,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Us(f,f.charAt(0)=="/"?QI:KI,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Us(f,XI)),a.join("")};function vn(a){return new Fr(a)}function La(a,h,f){a.j=f?Fs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ma(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function im(a,h,f){h instanceof js?(a.i=h,JI(a.i,a.h)):(f||(h=Us(h,YI)),a.i=new js(h,a.h))}function pe(a,h,f){a.i.set(h,f)}function Va(a){return pe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Fs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Us(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,GI),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function GI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var sm=/[#\/\?@]/g,KI=/[#\?:]/g,QI=/[#\?]/g,YI=/[#\?@]/g,XI=/#/g;function js(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Hn(a){a.g||(a.g=new Map,a.h=0,a.i&&qI(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=js.prototype,t.add=function(a,h){Hn(this),this.i=null,a=Ei(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function om(a,h){Hn(a),h=Ei(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function am(a,h){return Hn(a),h=Ei(a,h),a.g.has(h)}t.forEach=function(a,h){Hn(this),this.g.forEach(function(f,m){f.forEach(function(O){a.call(h,O,m,this)},this)},this)},t.na=function(){Hn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let m=0;m<h.length;m++){const O=a[m];for(let x=0;x<O.length;x++)f.push(h[m])}return f},t.V=function(a){Hn(this);let h=[];if(typeof a=="string")am(this,a)&&(h=h.concat(this.g.get(Ei(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Hn(this),this.i=null,a=Ei(this,a),am(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function lm(a,h,f){om(a,h),0<f.length&&(a.i=null,a.g.set(Ei(a,h),R(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var m=h[f];const x=encodeURIComponent(String(m)),z=this.V(m);for(m=0;m<z.length;m++){var O=x;z[m]!==""&&(O+="="+encodeURIComponent(String(z[m]))),a.push(O)}}return this.i=a.join("&")};function Ei(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function JI(a,h){h&&!a.j&&(Hn(a),a.i=null,a.g.forEach(function(f,m){var O=m.toLowerCase();m!=O&&(om(this,m),lm(this,O,f))},a)),a.j=h}function ZI(a,h){const f=new Ms;if(l.Image){const m=new Image;m.onload=E(Wn,f,"TestLoadImage: loaded",!0,h,m),m.onerror=E(Wn,f,"TestLoadImage: error",!1,h,m),m.onabort=E(Wn,f,"TestLoadImage: abort",!1,h,m),m.ontimeout=E(Wn,f,"TestLoadImage: timeout",!1,h,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function eS(a,h){const f=new Ms,m=new AbortController,O=setTimeout(()=>{m.abort(),Wn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(x=>{clearTimeout(O),x.ok?Wn(f,"TestPingServer: ok",!0,h):Wn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),Wn(f,"TestPingServer: error",!1,h)})}function Wn(a,h,f,m,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),m(f)}catch{}}function tS(){this.g=new VI}function nS(a,h,f){const m=f||"";try{nm(a,function(O,x){let z=O;c(O)&&(z=Ac(O)),h.push(m+x+"="+encodeURIComponent(z))})}catch(O){throw h.push(m+"type="+encodeURIComponent("_badmap")),O}}function zs(a){this.l=a.Ub||null,this.j=a.eb||!1}A(zs,Rc),zs.prototype.g=function(){return new Fa(this.l,this.j)},zs.prototype.i=function(a){return function(){return a}}({});function Fa(a,h){Ye.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(Fa,Ye),t=Fa.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,$s(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,$s(this)),this.g&&(this.readyState=3,$s(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;um(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function um(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Bs(this):$s(this),this.readyState==3&&um(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Bs(this))},t.Qa=function(a){this.g&&(this.response=a,Bs(this))},t.ga=function(){this.g&&Bs(this)};function Bs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,$s(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function $s(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Fa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function cm(a){let h="";return U(a,function(f,m){h+=m,h+=":",h+=f,h+=`\r
`}),h}function Fc(a,h,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=cm(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):pe(a,h,f))}function Pe(a){Ye.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Pe,Ye);var rS=/^https?$/i,iS=["POST","PUT"];t=Pe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Oc.g(),this.v=this.o?Ug(this.o):Ug(Oc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(x){hm(this,x);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var O in m)f.set(O,m[O]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const x of m.keys())f.set(x,m.get(x));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(x=>x.toLowerCase()=="content-type"),O=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(iS,h,void 0))||m||O||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,z]of f)this.g.setRequestHeader(x,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{pm(this),this.u=!0,this.g.send(a),this.u=!1}catch(x){hm(this,x)}};function hm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,dm(a),Ua(a)}function dm(a){a.A||(a.A=!0,at(a,"complete"),at(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,at(this,"complete"),at(this,"abort"),Ua(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ua(this,!0)),Pe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?fm(this):this.bb())},t.bb=function(){fm(this)};function fm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||_n(a)!=4||a.Z()!=2)){if(a.u&&_n(a)==4)Lg(a.Ea,0,a);else if(at(a,"readystatechange"),_n(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var m;if(m=z===0){var O=String(a.D).match(rm)[1]||null;!O&&l.self&&l.self.location&&(O=l.self.location.protocol.slice(0,-1)),m=!rS.test(O?O.toLowerCase():"")}f=m}if(f)at(a,"complete"),at(a,"success");else{a.m=6;try{var x=2<_n(a)?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.Z()+"]",dm(a)}}finally{Ua(a)}}}}function Ua(a,h){if(a.g){pm(a);const f=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||at(a,"ready");try{f.onreadystatechange=m}catch{}}}function pm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function _n(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<_n(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),MI(h)}};function gm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function sS(a){const h={};a=(a.g&&2<=_n(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(v(a[m]))continue;var f=S(a[m]);const O=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const x=h[O]||[];h[O]=x,x.push(f)}w(h,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Hs(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function mm(a){this.Aa=0,this.i=[],this.j=new Ms,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Hs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Hs("baseRetryDelayMs",5e3,a),this.cb=Hs("retryDelaySeedMs",1e4,a),this.Wa=Hs("forwardChannelMaxRetries",2,a),this.wa=Hs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Xg(a&&a.concurrentRequestLimit),this.Da=new tS,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=mm.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,m){lt(0),this.W=a,this.H=h||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=Cm(this,null,this.W),za(this)};function Uc(a){if(ym(a),a.G==3){var h=a.U++,f=vn(a.I);if(pe(f,"SID",a.K),pe(f,"RID",h),pe(f,"TYPE","terminate"),Ws(a,f),h=new $n(a,a.j,h),h.L=2,h.v=Va(vn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Pm(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Na(h)}Sm(a)}function ja(a){a.g&&(zc(a),a.g.cancel(),a.g=null)}function ym(a){ja(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ba(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function za(a){if(!Jg(a.h)&&!a.s){a.s=!0;var h=a.Ga;fn||ee(),B||(fn(),B=!0),Q.add(h,a),a.B=0}}function oS(a,h){return Zg(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ls(g(a.Ga,a,h),Im(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const O=new $n(this,this.j,a);let x=this.o;if(this.S&&(x?(x=y(x),P(x,this.S)):x=this.S),this.m!==null||this.O||(O.H=x,x=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=_m(this,O,h),f=vn(this.I),pe(f,"RID",a),pe(f,"CVER",22),this.D&&pe(f,"X-HTTP-Session-Id",this.D),Ws(this,f),x&&(this.O?h="headers="+encodeURIComponent(String(cm(x)))+"&"+h:this.m&&Fc(f,this.m,x)),Vc(this.h,O),this.Ua&&pe(f,"TYPE","init"),this.P?(pe(f,"$req",h),pe(f,"SID","null"),O.T=!0,xc(O,f,null)):xc(O,f,h),this.G=2}}else this.G==3&&(a?vm(this,a):this.i.length==0||Jg(this.h)||vm(this))};function vm(a,h){var f;h?f=h.l:f=a.U++;const m=vn(a.I);pe(m,"SID",a.K),pe(m,"RID",f),pe(m,"AID",a.T),Ws(a,m),a.m&&a.o&&Fc(m,a.m,a.o),f=new $n(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=_m(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Vc(a.h,f),xc(f,m,h)}function Ws(a,h){a.H&&U(a.H,function(f,m){pe(h,m,f)}),a.l&&nm({},function(f,m){pe(h,m,f)})}function _m(a,h,f){f=Math.min(a.i.length,f);var m=a.l?g(a.l.Na,a.l,a):null;e:{var O=a.i;let x=-1;for(;;){const z=["count="+f];x==-1?0<f?(x=O[0].g,z.push("ofs="+x)):x=0:z.push("ofs="+x);let he=!0;for(let Be=0;Be<f;Be++){let ae=O[Be].g;const Xe=O[Be].map;if(ae-=x,0>ae)x=Math.max(0,O[Be].g-100),he=!1;else try{nS(Xe,z,"req"+ae+"_")}catch{m&&m(Xe)}}if(he){m=z.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,m}function Em(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;fn||ee(),B||(fn(),B=!0),Q.add(h,a),a.v=0}}function jc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ls(g(a.Fa,a),Im(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,wm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ls(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,lt(10),ja(this),wm(this))};function zc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function wm(a){a.g=new $n(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=vn(a.qa);pe(h,"RID","rpc"),pe(h,"SID",a.K),pe(h,"AID",a.T),pe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&pe(h,"TO",a.ja),pe(h,"TYPE","xmlhttp"),Ws(a,h),a.m&&a.o&&Fc(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Va(vn(h)),f.m=null,f.P=!0,Kg(f,a)}t.Za=function(){this.C!=null&&(this.C=null,ja(this),jc(this),lt(19))};function Ba(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Tm(a,h){var f=null;if(a.g==h){Ba(a),zc(a),a.g=null;var m=2}else if(Mc(a.h,h))f=h.D,em(a.h,h),m=1;else return;if(a.G!=0){if(h.o)if(m==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var O=a.B;m=Oa(),at(m,new Hg(m,f)),za(a)}else Em(a);else if(O=h.s,O==3||O==0&&0<h.X||!(m==1&&oS(a,h)||m==2&&jc(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),O){case 1:Ur(a,5);break;case 4:Ur(a,10);break;case 3:Ur(a,6);break;default:Ur(a,2)}}}function Im(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Ur(a,h){if(a.j.info("Error code "+h),h==2){var f=g(a.fb,a),m=a.Xa;const O=!m;m=new Fr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||La(m,"https"),Va(m),O?ZI(m.toString(),f):eS(m.toString(),f)}else lt(2);a.G=0,a.l&&a.l.sa(h),Sm(a),ym(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function Sm(a){if(a.G=0,a.ka=[],a.l){const h=tm(a.h);(h.length!=0||a.i.length!=0)&&(k(a.ka,h),k(a.ka,a.i),a.h.i.length=0,R(a.i),a.i.length=0),a.l.ra()}}function Cm(a,h,f){var m=f instanceof Fr?vn(f):new Fr(f);if(m.g!="")h&&(m.g=h+"."+m.g),Ma(m,m.s);else{var O=l.location;m=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;var x=new Fr(null);m&&La(x,m),h&&(x.g=h),O&&Ma(x,O),f&&(x.l=f),m=x}return f=a.D,h=a.ya,f&&h&&pe(m,f,h),pe(m,"VER",a.la),Ws(a,m),m}function Pm(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Pe(new zs({eb:f})):new Pe(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Am(){}t=Am.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function $a(){}$a.prototype.g=function(a,h){return new _t(a,h)};function _t(a,h){Ye.call(this),this.g=new mm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!v(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new wi(this)}A(_t,Ye),_t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_t.prototype.close=function(){Uc(this.g)},_t.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Ac(a),a=f);h.i.push(new $I(h.Ya++,a)),h.G==3&&za(h)},_t.prototype.N=function(){this.g.l=null,delete this.j,Uc(this.g),delete this.g,_t.aa.N.call(this)};function Rm(a){kc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}A(Rm,kc);function km(){bc.call(this),this.status=1}A(km,bc);function wi(a){this.g=a}A(wi,Am),wi.prototype.ua=function(){at(this.g,"a")},wi.prototype.ta=function(a){at(this.g,new Rm(a))},wi.prototype.sa=function(a){at(this.g,new km)},wi.prototype.ra=function(){at(this.g,"b")},$a.prototype.createWebChannel=$a.prototype.g,_t.prototype.send=_t.prototype.o,_t.prototype.open=_t.prototype.m,_t.prototype.close=_t.prototype.close,hT=function(){return new $a},cT=function(){return Oa()},uT=Mr,Hd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Da.NO_ERROR=0,Da.TIMEOUT=8,Da.HTTP_ERROR=6,Ol=Da,Wg.COMPLETE="complete",lT=Wg,jg.EventType=xs,xs.OPEN="a",xs.CLOSE="b",xs.ERROR="c",xs.MESSAGE="d",Ye.prototype.listen=Ye.prototype.K,ao=jg,aT=zs,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha,oT=Pe}).apply(typeof ul<"u"?ul:typeof self<"u"?self:typeof window<"u"?window:{});const Iv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ps="10.12.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=new Pp("@firebase/firestore");function eo(){return li.logLevel}function H(t,...e){if(li.logLevel<=ie.DEBUG){const n=e.map(Fp);li.debug(`Firestore (${Ps}): ${t}`,...n)}}function Ln(t,...e){if(li.logLevel<=ie.ERROR){const n=e.map(Fp);li.error(`Firestore (${Ps}): ${t}`,...n)}}function us(t,...e){if(li.logLevel<=ie.WARN){const n=e.map(Fp);li.warn(`Firestore (${Ps}): ${t}`,...n)}}function Fp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${Ps}) INTERNAL ASSERTION FAILED: `+t;throw Ln(e),new Error(e)}function fe(t,e){t||Y()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends zn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class OO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class DO{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Er;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Er,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Er)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(fe(typeof r.accessToken=="string"),new dT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string"),new nt(e)}}class xO{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class NO{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new xO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class LO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class MO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fe(typeof n.token=="string"),this.R=n.token,new LO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=VO(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function cs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Fe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Fe(0,0))}static max(){return new X(new Fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Jo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Jo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Re extends Jo{construct(e,n,r){return new Re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Re(n)}static emptyPath(){return new Re([])}}const FO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends Jo{construct(e,n,r){return new We(e,n,r)}static isValidIdentifier(e){return FO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new We(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new G(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new G(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(n)}static emptyPath(){return new We([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Re.fromString(e))}static fromName(e){return new q(Re.fromString(e).popFirst(5))}static empty(){return new q(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Re(e.slice()))}}function UO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Fe(n+1,0):new Fe(n,r));return new Ir(i,q.empty(),e)}function jO(t){return new Ir(t.readTime,t.key,-1)}class Ir{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ir(X.min(),q.empty(),-1)}static max(){return new Ir(X.max(),q.empty(),-1)}}function zO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $O{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ea(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==BO)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function HO(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function wa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Up.oe=-1;function tc(t){return t==null}function vu(t){return t===0&&1/t==-1/0}function WO(t){return typeof t=="number"&&Number.isInteger(t)&&!vu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function As(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function pT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.comparator=e,this.root=n||He.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new cl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new cl(this.root,e,this.comparator,!1)}getReverseIterator(){return new cl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new cl(this.root,e,this.comparator,!0)}}class cl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??He.RED,this.left=i??He.EMPTY,this.right=s??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new He(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return He.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,s){return this}insert(e,n,r){return new He(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Cv(this.data.getIterator())}getIteratorFrom(e){return new Cv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ge(this.comparator);return n.data=e,n}}class Cv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new Wt([])}unionWith(e){let n=new Ge(We.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return cs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new gT("Invalid base64 string: "+s):s}}(e);return new ot(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const qO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Sr(t){if(fe(!!t),typeof t=="string"){let e=0;const n=qO.exec(t);if(fe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xe(t.seconds),nanos:xe(t.nanos)}}function xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ui(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function zp(t){const e=t.mapValue.fields.__previous_value__;return jp(e)?zp(e):e}function Zo(t){const e=Sr(t.mapValue.fields.__local_write_time__.timestampValue);return new Fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class ea{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ea("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ea&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ci(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?jp(t)?4:KO(t)?9007199254740991:10:Y()}function cn(t,e){if(t===e)return!0;const n=ci(t);if(n!==ci(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Zo(t).isEqual(Zo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Sr(i.timestampValue),l=Sr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ui(i.bytesValue).isEqual(ui(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return xe(i.geoPointValue.latitude)===xe(s.geoPointValue.latitude)&&xe(i.geoPointValue.longitude)===xe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return xe(i.integerValue)===xe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=xe(i.doubleValue),l=xe(s.doubleValue);return o===l?vu(o)===vu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return cs(t.arrayValue.values||[],e.arrayValue.values||[],cn);case 10:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Sv(o)!==Sv(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!cn(o[u],l[u])))return!1;return!0}(t,e);default:return Y()}}function ta(t,e){return(t.values||[]).find(n=>cn(n,e))!==void 0}function hs(t,e){if(t===e)return 0;const n=ci(t),r=ci(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=xe(s.integerValue||s.doubleValue),u=xe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Pv(t.timestampValue,e.timestampValue);case 4:return Pv(Zo(t),Zo(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(s,o){const l=ui(s),u=ui(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=le(l[c],u[c]);if(d!==0)return d}return le(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=le(xe(s.latitude),xe(o.latitude));return l!==0?l:le(xe(s.longitude),xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const l=s.values||[],u=o.values||[];for(let c=0;c<l.length&&c<u.length;++c){const d=hs(l[c],u[c]);if(d)return d}return le(l.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===hl.mapValue&&o===hl.mapValue)return 0;if(s===hl.mapValue)return 1;if(o===hl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const g=le(u[p],d[p]);if(g!==0)return g;const E=hs(l[u[p]],c[d[p]]);if(E!==0)return E}return le(u.length,d.length)}(t.mapValue,e.mapValue);default:throw Y()}}function Pv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=Sr(t),r=Sr(e),i=le(n.seconds,r.seconds);return i!==0?i:le(n.nanos,r.nanos)}function ds(t){return Wd(t)}function Wd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Sr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ui(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Wd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Wd(n.fields[o])}`;return i+"}"}(t.mapValue):Y()}function qd(t){return!!t&&"integerValue"in t}function Bp(t){return!!t&&"arrayValue"in t}function Av(t){return!!t&&"nullValue"in t}function Rv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Dl(t){return!!t&&"mapValue"in t}function Io(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return As(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Io(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Io(t.arrayValue.values[n]);return e}return Object.assign({},t)}function KO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Dl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Io(n)}setAll(e){let n=We.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Io(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Dl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Dl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){As(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Nt(Io(this.value))}}function mT(t){const e=[];return As(t.fields,(n,r)=>{const i=new We([n]);if(Dl(r)){const s=mT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Wt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new it(e,0,X.min(),X.min(),X.min(),Nt.empty(),0)}static newFoundDocument(e,n,r,i){return new it(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new it(e,2,n,X.min(),X.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new it(e,3,n,X.min(),X.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof it&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,n){this.position=e,this.inclusive=n}}function kv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=hs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function bv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n="asc"){this.field=e,this.dir=n}}function QO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{}class Me extends yT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new XO(e,n,r):n==="array-contains"?new eD(e,r):n==="in"?new tD(e,r):n==="not-in"?new nD(e,r):n==="array-contains-any"?new rD(e,r):new Me(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new JO(e,r):new ZO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(hs(n,this.value)):n!==null&&ci(this.value)===ci(n)&&this.matchesComparison(hs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hn extends yT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new hn(e,n)}matches(e){return vT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function vT(t){return t.op==="and"}function _T(t){return YO(t)&&vT(t)}function YO(t){for(const e of t.filters)if(e instanceof hn)return!1;return!0}function Gd(t){if(t instanceof Me)return t.field.canonicalString()+t.op.toString()+ds(t.value);if(_T(t))return t.filters.map(e=>Gd(e)).join(",");{const e=t.filters.map(n=>Gd(n)).join(",");return`${t.op}(${e})`}}function ET(t,e){return t instanceof Me?function(r,i){return i instanceof Me&&r.op===i.op&&r.field.isEqual(i.field)&&cn(r.value,i.value)}(t,e):t instanceof hn?function(r,i){return i instanceof hn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&ET(o,i.filters[l]),!0):!1}(t,e):void Y()}function wT(t){return t instanceof Me?function(n){return`${n.field.canonicalString()} ${n.op} ${ds(n.value)}`}(t):t instanceof hn?function(n){return n.op.toString()+" {"+n.getFilters().map(wT).join(" ,")+"}"}(t):"Filter"}class XO extends Me{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class JO extends Me{constructor(e,n){super(e,"in",n),this.keys=TT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ZO extends Me{constructor(e,n){super(e,"not-in",n),this.keys=TT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function TT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class eD extends Me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Bp(n)&&ta(n.arrayValue,this.value)}}class tD extends Me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ta(this.value.arrayValue,n)}}class nD extends Me{constructor(e,n){super(e,"not-in",n)}matches(e){if(ta(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ta(this.value.arrayValue,n)}}class rD extends Me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Bp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ta(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Ov(t,e=null,n=[],r=[],i=null,s=null,o=null){return new iD(t,e,n,r,i,s,o)}function $p(t){const e=J(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Gd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),tc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ds(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ds(r)).join(",")),e.ue=n}return e.ue}function Hp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!QO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ET(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!bv(t.startAt,e.startAt)&&bv(t.endAt,e.endAt)}function Kd(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function sD(t,e,n,r,i,s,o,l){return new nc(t,e,n,r,i,s,o,l)}function Wp(t){return new nc(t)}function Dv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function oD(t){return t.collectionGroup!==null}function So(t){const e=J(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ge(We.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Eu(s,r))}),n.has(We.keyField().canonicalString())||e.ce.push(new Eu(We.keyField(),r))}return e.ce}function ln(t){const e=J(t);return e.le||(e.le=aD(e,So(t))),e.le}function aD(t,e){if(t.limitType==="F")return Ov(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Eu(i.field,s)});const n=t.endAt?new _u(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new _u(t.startAt.position,t.startAt.inclusive):null;return Ov(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Qd(t,e,n){return new nc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function rc(t,e){return Hp(ln(t),ln(e))&&t.limitType===e.limitType}function IT(t){return`${$p(ln(t))}|lt:${t.limitType}`}function Pi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>wT(i)).join(", ")}]`),tc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ds(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ds(i)).join(",")),`Target(${r})`}(ln(t))}; limitType=${t.limitType})`}function ic(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of So(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=kv(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,So(r),i)||r.endAt&&!function(o,l,u){const c=kv(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,So(r),i))}(t,e)}function lD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ST(t){return(e,n)=>{let r=!1;for(const i of So(t)){const s=uD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function uD(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?hs(u,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){As(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return pT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cD=new Se(q.comparator);function Mn(){return cD}const CT=new Se(q.comparator);function lo(...t){let e=CT;for(const n of t)e=e.insert(n.key,n);return e}function PT(t){let e=CT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Gr(){return Co()}function AT(){return Co()}function Co(){return new Rs(t=>t.toString(),(t,e)=>t.isEqual(e))}const hD=new Se(q.comparator),dD=new Ge(q.comparator);function re(...t){let e=dD;for(const n of t)e=e.add(n);return e}const fD=new Ge(le);function pD(){return fD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vu(e)?"-0":e}}function kT(t){return{integerValue:""+t}}function gD(t,e){return WO(e)?kT(e):RT(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(){this._=void 0}}function mD(t,e,n){return t instanceof wu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&jp(s)&&(s=zp(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof na?OT(t,e):t instanceof ra?DT(t,e):function(i,s){const o=bT(i,s),l=xv(o)+xv(i.Pe);return qd(o)&&qd(i.Pe)?kT(l):RT(i.serializer,l)}(t,e)}function yD(t,e,n){return t instanceof na?OT(t,e):t instanceof ra?DT(t,e):n}function bT(t,e){return t instanceof Tu?function(r){return qd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class wu extends sc{}class na extends sc{constructor(e){super(),this.elements=e}}function OT(t,e){const n=xT(e);for(const r of t.elements)n.some(i=>cn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ra extends sc{constructor(e){super(),this.elements=e}}function DT(t,e){let n=xT(e);for(const r of t.elements)n=n.filter(i=>!cn(i,r));return{arrayValue:{values:n}}}class Tu extends sc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function xv(t){return xe(t.integerValue||t.doubleValue)}function xT(t){return Bp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function vD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof na&&i instanceof na||r instanceof ra&&i instanceof ra?cs(r.elements,i.elements,cn):r instanceof Tu&&i instanceof Tu?cn(r.Pe,i.Pe):r instanceof wu&&i instanceof wu}(t.transform,e.transform)}class _D{constructor(e,n){this.version=e,this.transformResults=n}}class kn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new kn}static exists(e){return new kn(void 0,e)}static updateTime(e){return new kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class oc{}function NT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new MT(t.key,kn.none()):new Ta(t.key,t.data,kn.none());{const n=t.data,r=Nt.empty();let i=new Ge(We.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new yi(t.key,r,new Wt(i.toArray()),kn.none())}}function ED(t,e,n){t instanceof Ta?function(i,s,o){const l=i.value.clone(),u=Lv(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof yi?function(i,s,o){if(!xl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Lv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(LT(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Po(t,e,n,r){return t instanceof Ta?function(s,o,l,u){if(!xl(s.precondition,o))return l;const c=s.value.clone(),d=Mv(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof yi?function(s,o,l,u){if(!xl(s.precondition,o))return l;const c=Mv(s.fieldTransforms,u,o),d=o.data;return d.setAll(LT(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return xl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function wD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=bT(r.transform,i||null);s!=null&&(n===null&&(n=Nt.empty()),n.set(r.field,s))}return n||null}function Nv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&cs(r,i,(s,o)=>vD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ta extends oc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class yi extends oc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function LT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Lv(t,e,n){const r=new Map;fe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,yD(o,l,n[i]))}return r}function Mv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,mD(s,o,e))}return r}class MT extends oc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class TD extends oc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ED(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Po(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Po(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=AT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=NT(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&cs(this.mutations,e.mutations,(n,r)=>Nv(n,r))&&cs(this.baseMutations,e.baseMutations,(n,r)=>Nv(n,r))}}class qp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){fe(e.mutations.length===r.length);let i=function(){return hD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new qp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De,se;function PD(t){switch(t){default:return Y();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function VT(t){if(t===void 0)return Ln("GRPC error has no .code"),V.UNKNOWN;switch(t){case De.OK:return V.OK;case De.CANCELLED:return V.CANCELLED;case De.UNKNOWN:return V.UNKNOWN;case De.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case De.INTERNAL:return V.INTERNAL;case De.UNAVAILABLE:return V.UNAVAILABLE;case De.UNAUTHENTICATED:return V.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case De.NOT_FOUND:return V.NOT_FOUND;case De.ALREADY_EXISTS:return V.ALREADY_EXISTS;case De.PERMISSION_DENIED:return V.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case De.ABORTED:return V.ABORTED;case De.OUT_OF_RANGE:return V.OUT_OF_RANGE;case De.UNIMPLEMENTED:return V.UNIMPLEMENTED;case De.DATA_LOSS:return V.DATA_LOSS;default:return Y()}}(se=De||(De={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AD(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RD=new Yr([4294967295,4294967295],0);function Vv(t){const e=AD().encode(t),n=new sT;return n.update(e),new Uint8Array(n.digest())}function Fv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Yr([n,r],0),new Yr([i,s],0)]}class Gp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new uo(`Invalid padding: ${n}`);if(r<0)throw new uo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new uo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new uo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Yr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Yr.fromNumber(r)));return i.compare(RD)===1&&(i=new Yr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Vv(e),[r,i]=Fv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Gp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Vv(e),[r,i]=Fv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class uo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ia.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ac(X.min(),i,new Se(le),Mn(),re())}}class Ia{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ia(r,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class FT{constructor(e,n){this.targetId=e,this.me=n}}class UT{constructor(e,n,r=ot.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Uv{constructor(){this.fe=0,this.ge=zv(),this.pe=ot.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=re(),n=re(),r=re();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new Ia(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=zv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class kD{constructor(e){this.Le=e,this.Be=new Map,this.ke=Mn(),this.qe=jv(),this.Qe=new Se(le)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Kd(s))if(r===0){const o=new q(s.path);this.Ue(n,o,it.newNoDocument(o,X.min()))}else fe(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=ui(r).toUint8Array()}catch(u){if(u instanceof gT)return us("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Gp(o,i,s)}catch(u){return us(u instanceof uo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Kd(l.target)){const u=new q(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,it.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=re();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new ac(e,n,this.Qe,this.ke,r);return this.ke=Mn(),this.qe=jv(),this.Qe=new Se(le),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Uv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ge(le),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Uv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function jv(){return new Se(q.comparator)}function zv(){return new Se(q.comparator)}const bD={asc:"ASCENDING",desc:"DESCENDING"},OD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},DD={and:"AND",or:"OR"};class xD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Yd(t,e){return t.useProto3Json||tc(e)?e:{value:e}}function Iu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ND(t,e){return Iu(t,e.toTimestamp())}function un(t){return fe(!!t),X.fromTimestamp(function(n){const r=Sr(n);return new Fe(r.seconds,r.nanos)}(t))}function Kp(t,e){return Xd(t,e).canonicalString()}function Xd(t,e){const n=function(i){return new Re(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function zT(t){const e=Re.fromString(t);return fe(qT(e)),e}function Jd(t,e){return Kp(t.databaseId,e.path)}function Ih(t,e){const n=zT(e);if(n.get(1)!==t.databaseId.projectId)throw new G(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q($T(n))}function BT(t,e){return Kp(t.databaseId,e)}function LD(t){const e=zT(t);return e.length===4?Re.emptyPath():$T(e)}function Zd(t){return new Re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $T(t){return fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Bv(t,e,n){return{name:Jd(t,e),fields:n.value.mapValue.fields}}function MD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(fe(d===void 0||typeof d=="string"),ot.fromBase64String(d||"")):(fe(d===void 0||d instanceof Buffer||d instanceof Uint8Array),ot.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?V.UNKNOWN:VT(c.code);return new G(d,c.message||"")}(o);n=new UT(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ih(t,r.document.name),s=un(r.document.updateTime),o=r.document.createTime?un(r.document.createTime):X.min(),l=new Nt({mapValue:{fields:r.document.fields}}),u=it.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Nl(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ih(t,r.document),s=r.readTime?un(r.readTime):X.min(),o=it.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Nl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ih(t,r.document),s=r.removedTargetIds||[];n=new Nl([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new CD(i,s),l=r.targetId;n=new FT(l,o)}}return n}function VD(t,e){let n;if(e instanceof Ta)n={update:Bv(t,e.key,e.value)};else if(e instanceof MT)n={delete:Jd(t,e.key)};else if(e instanceof yi)n={update:Bv(t,e.key,e.data),updateMask:qD(e.fieldMask)};else{if(!(e instanceof TD))return Y();n={verify:Jd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof wu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof na)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ra)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Tu)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:ND(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(t,e.precondition)),n}function FD(t,e){return t&&t.length>0?(fe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?un(i.updateTime):un(s);return o.isEqual(X.min())&&(o=un(s)),new _D(o,i.transformResults||[])}(n,e))):[]}function UD(t,e){return{documents:[BT(t,e.path)]}}function jD(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=BT(t,i);const s=function(c){if(c.length!==0)return WT(hn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(g){return{field:Ai(g.field),direction:$D(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Yd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function zD(t){let e=LD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){fe(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const g=HT(p);return g instanceof hn&&_T(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(A){return new Eu(Ri(A.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,tc(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,E=p.values||[];return new _u(E,g)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const g=!p.before,E=p.values||[];return new _u(E,g)}(n.endAt)),sD(e,i,o,s,l,"F",u,c)}function BD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function HT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ri(n.unaryFilter.field);return Me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ri(n.unaryFilter.field);return Me.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ri(n.unaryFilter.field);return Me.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ri(n.unaryFilter.field);return Me.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return Me.create(Ri(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return hn.create(n.compositeFilter.filters.map(r=>HT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function $D(t){return bD[t]}function HD(t){return OD[t]}function WD(t){return DD[t]}function Ai(t){return{fieldPath:t.canonicalString()}}function Ri(t){return We.fromServerFormat(t.fieldPath)}function WT(t){return t instanceof Me?function(n){if(n.op==="=="){if(Rv(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NAN"}};if(Av(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Rv(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NOT_NAN"}};if(Av(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ai(n.field),op:HD(n.op),value:n.value}}}(t):t instanceof hn?function(n){const r=n.getFilters().map(i=>WT(i));return r.length===1?r[0]:{compositeFilter:{op:WD(n.op),filters:r}}}(t):Y()}function qD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function qT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n,r,i,s=X.min(),o=X.min(),l=ot.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new or(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD{constructor(e){this.ct=e}}function KD(t){const e=zD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Qd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(){this._n=new YD}addToCollectionParentIndex(e,n){return this._n.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Ir.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Ir.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class YD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ge(Re.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ge(Re.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new fs(0)}static Ln(){return new fs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(){this.changes=new Rs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,it.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Po(r.mutation,i,Wt.empty(),Fe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=Gr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=lo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Gr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Mn();const o=Co(),l=function(){return Co()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof yi)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Po(d.mutation,c,d.mutation.getFieldMask(),Fe.now())):o.set(c.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return l.set(c,new JD(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Co();let i=new Se((o,l)=>o-l),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Wt.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||re()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=AT();d.forEach(g=>{if(!s.has(g)){const E=NT(n.get(g),r.get(g));E!==null&&p.set(g,E),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):oD(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Gr());let l=-1,u=s;return o.next(c=>M.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{u=u.insert(d,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,re())).next(d=>({batchId:l,changes:PT(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=lo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=lo();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const c=function(p,g){return new nc(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,it.newInvalidDocument(d)))});let l=lo();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Po(d.mutation,c,Wt.empty(),Fe.now()),ic(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return M.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:un(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:KD(i.bundledQuery),readTime:un(i.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(){this.overlays=new Se(q.comparator),this.hr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Gr();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Gr(),s=n.length+1,o=new q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Se((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Gr(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Gr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return M.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new SD(n,r));let s=this.hr.get(n);s===void 0&&(s=re(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(){this.Pr=new Ge(Ue.Ir),this.Tr=new Ge(Ue.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Ue(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Ue(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new q(new Re([])),r=new Ue(n,e),i=new Ue(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new q(new Re([])),r=new Ue(n,e),i=new Ue(n,e+1);let s=re();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ue(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ue{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return q.comparator(e.key,n.key)||le(e.pr,n.pr)}static Er(e,n){return le(e.pr,n.pr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Ge(Ue.Ir)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ID(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.wr=this.wr.add(new Ue(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ue(n,0),i=new Ue(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const l=this.Sr(o.pr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ge(le);return n.forEach(i=>{const s=new Ue(i,0),o=new Ue(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],l=>{r=r.add(l.pr)})}),M.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new Ue(new q(s),0);let l=new Ge(le);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.pr)),!0)},o),M.resolve(this.Dr(l))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){fe(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return M.forEach(n.mutations,i=>{const s=new Ue(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Ue(n,0),i=this.wr.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e){this.vr=e,this.docs=function(){return new Se(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():it.newInvalidDocument(n))}getEntries(e,n){let r=Mn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():it.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Mn();const o=n.path,l=new q(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||zO(jO(d),r)<=0||(i.has(d.key)||ic(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y()}Fr(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ix(this)}getSize(e){return M.resolve(this.size)}}class ix extends XD{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e){this.persistence=e,this.Mr=new Rs(n=>$p(n),Hp),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Qp,this.targetCount=0,this.Lr=fs.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),M.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new fs(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.qn(n),M.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e,n){this.Br={},this.overlays={},this.kr=new Up(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new sx(this),this.indexManager=new QD,this.remoteDocumentCache=function(i){return new rx(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new GD(n),this.$r=new ex(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new tx,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new nx(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new ax(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return M.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class ax extends $O{constructor(e){super(),this.currentSequenceNumber=e}}class Yp{constructor(e){this.persistence=e,this.zr=new Qp,this.jr=null}static Hr(e){return new Yp(e)}get Jr(){if(this.jr)return this.jr;throw Y()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),M.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Jr,r=>{const i=q.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return M.or([()=>M.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Xp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return XA()?8:HO(Qe())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new lx;return this.Ji(e,n,o).next(l=>{if(s.result=l,this.Ui)return this.Yi(e,n,o,l.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(eo()<=ie.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Pi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),M.resolve()):(eo()<=ie.DEBUG&&H("QueryEngine","Query:",Pi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(eo()<=ie.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Pi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ln(n))):M.resolve())}ji(e,n){if(Dv(n))return M.resolve(null);let r=ln(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Qd(n,null,"F"),r=ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Zi(n,l);return this.Xi(n,c,o,u.readTime)?this.ji(e,Qd(n,null,"F")):this.es(e,c,n,u)}))})))}Hi(e,n,r,i){return Dv(n)||i.isEqual(X.min())?M.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?M.resolve(null):(eo()<=ie.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Pi(n)),this.es(e,o,n,UO(i,-1)).next(l=>l))})}Zi(e,n){let r=new Ge(ST(e));return n.forEach((i,s)=>{ic(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return eo()<=ie.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Pi(n)),this.zi.getDocumentsMatchingQuery(e,n,Ir.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Se(le),this.rs=new Rs(s=>$p(s),Hp),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ZD(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function hx(t,e,n,r){return new cx(t,e,n,r)}async function GT(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=re();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:l}))})})}function dx(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,g=p.keys();let E=M.resolve();return g.forEach(A=>{E=E.next(()=>d.getEntry(u,A)).next(R=>{const k=c.docVersions.get(A);fe(k!==null),R.version.compareTo(k)<0&&(p.applyToRemoteDocument(R,c),R.isValidDocument()&&(R.setReadTime(c.commitVersion),d.addEntry(R)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=re();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function KT(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function fx(t,e){const n=J(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const l=[];e.targetChanges.forEach((d,p)=>{const g=i.get(p);if(!g)return;l.push(n.Qr.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Qr.addMatchingKeys(s,d.addedDocuments,p)));let E=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(ot.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):d.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(d.resumeToken,r)),i=i.insert(p,E),function(R,k,_){return R.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(g,E,d)&&l.push(n.Qr.updateTargetData(s,E))});let u=Mn(),c=re();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(px(s,o,e.documentUpdates).next(d=>{u=d.cs,c=d.ls})),!r.isEqual(X.min())){const d=n.Qr.getLastRemoteSnapshotVersion(s).next(p=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ns=i,s))}function px(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Mn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function gx(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function mx(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new or(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function ef(t,e,n){const r=J(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!wa(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function $v(t,e,n){const r=J(t);let i=X.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=J(u),g=p.rs.get(d);return g!==void 0?M.resolve(p.ns.get(g)):p.Qr.getTargetData(c,d)}(r,o,ln(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:re())).next(l=>(yx(r,lD(e),l),{documents:l,hs:s})))}function yx(t,e,n){let r=t.ss.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class Hv{constructor(){this.activeTargetIds=pD()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vx{constructor(){this.no=new Hv,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Hv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dl=null;function Sh(){return dl===null?dl=function(){return 268435456+Math.round(2147483648*Math.random())}():dl++,"0x"+dl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ex={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt="WebChannelConnection";class Tx extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const l=Sh(),u=this.vo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,u,c,i).then(d=>(H("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw us("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}xo(n,r,i,s,o,l){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ps}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=Ex[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=Sh();return new Promise((o,l)=>{const u=new oT;u.setWithCredentials(!0),u.listenOnce(lT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ol.NO_ERROR:const d=u.getResponseJson();H(tt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Ol.TIMEOUT:H(tt,`RPC '${e}' ${s} timed out`),l(new G(V.DEADLINE_EXCEEDED,"Request time out"));break;case Ol.HTTP_ERROR:const p=u.getStatus();if(H(tt,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const E=g==null?void 0:g.error;if(E&&E.status&&E.message){const A=function(k){const _=k.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(_)>=0?_:V.UNKNOWN}(E.status);l(new G(A,E.message))}else l(new G(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new G(V.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{H(tt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);H(tt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=Sh(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=hT(),l=cT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new aT({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");H(tt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let g=!1,E=!1;const A=new wx({lo:k=>{E?H(tt,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(g||(H(tt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),H(tt,`RPC '${e}' stream ${i} sending:`,k),p.send(k))},ho:()=>p.close()}),R=(k,_,v)=>{k.listen(_,I=>{try{v(I)}catch(D){setTimeout(()=>{throw D},0)}})};return R(p,ao.EventType.OPEN,()=>{E||(H(tt,`RPC '${e}' stream ${i} transport opened.`),A.mo())}),R(p,ao.EventType.CLOSE,()=>{E||(E=!0,H(tt,`RPC '${e}' stream ${i} transport closed`),A.po())}),R(p,ao.EventType.ERROR,k=>{E||(E=!0,us(tt,`RPC '${e}' stream ${i} transport errored:`,k),A.po(new G(V.UNAVAILABLE,"The operation could not be completed")))}),R(p,ao.EventType.MESSAGE,k=>{var _;if(!E){const v=k.data[0];fe(!!v);const I=v,D=I.error||((_=I[0])===null||_===void 0?void 0:_.error);if(D){H(tt,`RPC '${e}' stream ${i} received error:`,D);const L=D.status;let U=function(T){const P=De[T];if(P!==void 0)return VT(P)}(L),w=D.message;U===void 0&&(U=V.INTERNAL,w="Unknown error status: "+L+" with message "+D.message),E=!0,A.po(new G(U,w)),p.close()}else H(tt,`RPC '${e}' stream ${i} received:`,v),A.yo(v)}}),R(l,uT.STAT_EVENT,k=>{k.stat===Hd.PROXY?H(tt,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===Hd.NOPROXY&&H(tt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.fo()},0),A}}function Ch(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(t){return new xD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e,n,r,i,s,o,l,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new QT(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Ln(n.toString()),Ln("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new G(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ix extends YT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=MD(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?un(o.readTime):X.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=Zd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Kd(u)?{documents:UD(s,u)}:{query:jD(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=jT(s,o.resumeToken);const c=Yd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){l.readTime=Iu(s,o.snapshotVersion.toTimestamp());const c=Yd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=BD(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=Zd(this.serializer),n.removeTarget=e,this.i_(n)}}class Sx extends YT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=FD(e.writeResults,e.commitTime),r=un(e.commitTime);return this.listener.A_(r,n)}return fe(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Zd(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>VD(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new G(V.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,Xd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(V.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.xo(e,Xd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(V.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class Px{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Ln(n),this.y_=!1):H("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{vi(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=J(u);c.M_.add(4),await Sa(c),c.N_.set("Unknown"),c.M_.delete(4),await uc(c)}(this))})}),this.N_=new Px(r,i)}}async function uc(t){if(vi(t))for(const e of t.x_)await e(!0)}async function Sa(t){for(const e of t.x_)await e(!1)}function XT(t,e){const n=J(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),tg(n)?eg(n):ks(n).Xo()&&Zp(n,e))}function Jp(t,e){const n=J(t),r=ks(n);n.F_.delete(e),r.Xo()&&JT(n,e),n.F_.size===0&&(r.Xo()?r.n_():vi(n)&&n.N_.set("Unknown"))}function Zp(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ks(t).P_(e)}function JT(t,e){t.L_.xe(e),ks(t).I_(e)}function eg(t){t.L_=new kD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ks(t).start(),t.N_.w_()}function tg(t){return vi(t)&&!ks(t).Zo()&&t.F_.size>0}function vi(t){return J(t).M_.size===0}function ZT(t){t.L_=void 0}async function Rx(t){t.N_.set("Online")}async function kx(t){t.F_.forEach((e,n)=>{Zp(t,e)})}async function bx(t,e){ZT(t),tg(t)?(t.N_.D_(e),eg(t)):t.N_.set("Unknown")}async function Ox(t,e,n){if(t.N_.set("Online"),e instanceof UT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.F_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.F_.delete(l),i.L_.removeTarget(l))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Su(t,r)}else if(e instanceof Nl?t.L_.Ke(e):e instanceof FT?t.L_.He(e):t.L_.We(e),!n.isEqual(X.min()))try{const r=await KT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.L_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.F_.get(c);d&&s.F_.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.F_.get(u);if(!d)return;s.F_.set(u,d.withResumeToken(ot.EMPTY_BYTE_STRING,d.snapshotVersion)),JT(s,u);const p=new or(d.target,u,c,d.sequenceNumber);Zp(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Su(t,r)}}async function Su(t,e,n){if(!wa(e))throw e;t.M_.add(1),await Sa(t),t.N_.set("Offline"),n||(n=()=>KT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await uc(t)})}function e1(t,e){return e().catch(n=>Su(t,n,e))}async function cc(t){const e=J(t),n=Cr(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;Dx(e);)try{const i=await gx(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,xx(e,i)}catch(i){await Su(e,i)}t1(e)&&n1(e)}function Dx(t){return vi(t)&&t.v_.length<10}function xx(t,e){t.v_.push(e);const n=Cr(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function t1(t){return vi(t)&&!Cr(t).Zo()&&t.v_.length>0}function n1(t){Cr(t).start()}async function Nx(t){Cr(t).V_()}async function Lx(t){const e=Cr(t);for(const n of t.v_)e.d_(n.mutations)}async function Mx(t,e,n){const r=t.v_.shift(),i=qp.from(r,e,n);await e1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await cc(t)}async function Vx(t,e){e&&Cr(t).E_&&await async function(r,i){if(function(o){return PD(o)&&o!==V.ABORTED}(i.code)){const s=r.v_.shift();Cr(r).t_(),await e1(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await cc(r)}}(t,e),t1(t)&&n1(t)}async function qv(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=vi(n);n.M_.add(3),await Sa(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await uc(n)}async function Fx(t,e){const n=J(t);e?(n.M_.delete(2),await uc(n)):e||(n.M_.add(2),await Sa(n),n.N_.set("Unknown"))}function ks(t){return t.B_||(t.B_=function(n,r,i){const s=J(n);return s.f_(),new Ix(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:Rx.bind(null,t),To:kx.bind(null,t),Ao:bx.bind(null,t),h_:Ox.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),tg(t)?eg(t):t.N_.set("Unknown")):(await t.B_.stop(),ZT(t))})),t.B_}function Cr(t){return t.k_||(t.k_=function(n,r,i){const s=J(n);return s.f_(),new Sx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:Nx.bind(null,t),Ao:Vx.bind(null,t),R_:Lx.bind(null,t),A_:Mx.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await cc(t)):(await t.k_.stop(),t.v_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Er,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new ng(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rg(t,e){if(Ln("AsyncQueue",`${e}: ${t}`),wa(t))return new G(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=lo(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new Zi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Zi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Zi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(){this.q_=new Se(q.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):Y():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ps{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ps(e,n,Zi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class jx{constructor(){this.queries=new Rs(e=>IT(e),rc),this.onlineState="Unknown",this.z_=new Set}}async function zx(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new Ux,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=rg(o,`Initialization of query '${Pi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&ig(n)}async function Bx(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function $x(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.U_)l.H_(i)&&(r=!0);o.K_=i}}r&&ig(n)}function Hx(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function ig(t){t.z_.forEach(e=>{e.next()})}var tf,Kv;(Kv=tf||(tf={})).J_="default",Kv.Cache="cache";class Wx{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ps(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=ps.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==tf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e){this.key=e}}class i1{constructor(e){this.key=e}}class qx{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=re(),this.mutatedKeys=re(),this.Ia=ST(e),this.Ta=new Zi(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new Gv,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const g=i.get(d),E=ic(this.query,p)?p:null,A=!!g&&this.mutatedKeys.has(g.key),R=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let k=!1;g&&E?g.data.isEqual(E.data)?A!==R&&(r.track({type:3,doc:E}),k=!0):this.Ra(g,E)||(r.track({type:2,doc:E}),k=!0,(u&&this.Ia(E,u)>0||c&&this.Ia(E,c)<0)&&(l=!0)):!g&&E?(r.track({type:0,doc:E}),k=!0):g&&!E&&(r.track({type:1,doc:g}),k=!0,(u||c)&&(l=!0)),k&&(E?(o=o.add(E),s=R?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ta:o,Aa:r,Xi:l,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,p)=>function(E,A){const R=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return R(E)-R(A)}(d.type,p.type)||this.Ia(d.doc,p.doc)),this.Va(r),i=i!=null&&i;const l=n&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,c=u!==this.ha;return this.ha=u,o.length!==0||c?{snapshot:new ps(this.query,e.Ta,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Gv,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=re(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new i1(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new r1(r))}),n}pa(e){this.la=e.hs,this.Pa=re();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return ps.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class Gx{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Kx{constructor(e){this.key=e,this.wa=!1}}class Qx{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Rs(l=>IT(l),rc),this.Da=new Map,this.Ca=new Set,this.va=new Se(q.comparator),this.Fa=new Map,this.Ma=new Qp,this.xa={},this.Oa=new Map,this.Na=fs.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Yx(t,e,n=!0){const r=c1(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await s1(r,e,n,!0),i}async function Xx(t,e){const n=c1(t);await s1(n,e,!0,!1)}async function s1(t,e,n,r){const i=await mx(t.localStore,ln(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await Jx(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&XT(t.remoteStore,i),l}async function Jx(t,e,n,r,i){t.Ba=(p,g,E)=>async function(R,k,_,v){let I=k.view.da(_);I.Xi&&(I=await $v(R.localStore,k.query,!1).then(({documents:w})=>k.view.da(w,I)));const D=v&&v.targetChanges.get(k.targetId),L=v&&v.targetMismatches.get(k.targetId)!=null,U=k.view.applyChanges(I,R.isPrimaryClient,D,L);return Yv(R,k.targetId,U.fa),U.snapshot}(t,p,g,E);const s=await $v(t.localStore,e,!0),o=new qx(e,s.hs),l=o.da(s.documents),u=Ia.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Yv(t,n,c.fa);const d=new Gx(e,n,o);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function Zx(t,e,n){const r=J(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!rc(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ef(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Jp(r.remoteStore,i.targetId),nf(r,i.targetId)}).catch(Ea)):(nf(r,i.targetId),await ef(r.localStore,i.targetId,!0))}async function eN(t,e){const n=J(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Jp(n.remoteStore,r.targetId))}async function tN(t,e,n){const r=lN(t);try{const i=await function(o,l){const u=J(o),c=Fe.now(),d=l.reduce((E,A)=>E.add(A.key),re());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let A=Mn(),R=re();return u.os.getEntries(E,d).next(k=>{A=k,A.forEach((_,v)=>{v.isValidDocument()||(R=R.add(_))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,A)).next(k=>{p=k;const _=[];for(const v of l){const I=wD(v,p.get(v.key).overlayedDocument);I!=null&&_.push(new yi(v.key,I,mT(I.value.mapValue),kn.exists(!0)))}return u.mutationQueue.addMutationBatch(E,c,_,l)}).next(k=>{g=k;const _=k.applyToLocalDocumentSet(p,R);return u.documentOverlayCache.saveOverlays(E,k.batchId,_)})}).then(()=>({batchId:g.batchId,changes:PT(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.xa[o.currentUser.toKey()];c||(c=new Se(le)),c=c.insert(l,u),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await Ca(r,i.changes),await cc(r.remoteStore)}catch(i){const s=rg(i,"Failed to persist write");n.reject(s)}}async function o1(t,e){const n=J(t);try{const r=await fx(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(fe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?fe(o.wa):i.removedDocuments.size>0&&(fe(o.wa),o.wa=!1))}),await Ca(n,r,e)}catch(r){await Ea(r)}}function Qv(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const l=o.view.j_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const g of p.U_)g.j_(l)&&(c=!0)}),c&&ig(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function nN(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new Se(q.comparator);o=o.insert(s,it.newNoDocument(s,X.min()));const l=re().add(s),u=new ac(X.min(),new Map,new Se(le),o,l);await o1(r,u),r.va=r.va.remove(s),r.Fa.delete(e),sg(r)}else await ef(r.localStore,e,!1).then(()=>nf(r,e,n)).catch(Ea)}async function rN(t,e){const n=J(t),r=e.batch.batchId;try{const i=await dx(n.localStore,e);l1(n,r,null),a1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ca(n,i)}catch(i){await Ea(i)}}async function iN(t,e,n){const r=J(t);try{const i=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(fe(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);l1(r,e,n),a1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ca(r,i)}catch(i){await Ea(i)}}function a1(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function l1(t,e,n){const r=J(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function nf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||u1(t,r)})}function u1(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Jp(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),sg(t))}function Yv(t,e,n){for(const r of n)r instanceof r1?(t.Ma.addReference(r.key,e),sN(t,r)):r instanceof i1?(H("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||u1(t,r.key)):Y()}function sN(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(H("SyncEngine","New document in limbo: "+n),t.Ca.add(r),sg(t))}function sg(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new q(Re.fromString(e)),r=t.Na.next();t.Fa.set(r,new Kx(n)),t.va=t.va.insert(n,r),XT(t.remoteStore,new or(ln(Wp(n.path)),r,"TargetPurposeLimboResolution",Up.oe))}}async function Ca(t,e,n){const r=J(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((l,u)=>{o.push(r.Ba(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=Xp.Ki(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(u,c){const d=J(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(c,g=>M.forEach(g.qi,E=>d.persistence.referenceDelegate.addReference(p,g.targetId,E)).next(()=>M.forEach(g.Qi,E=>d.persistence.referenceDelegate.removeReference(p,g.targetId,E)))))}catch(p){if(!wa(p))throw p;H("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const g=p.targetId;if(!p.fromCache){const E=d.ns.get(g),A=E.snapshotVersion,R=E.withLastLimboFreeSnapshotVersion(A);d.ns=d.ns.insert(g,R)}}}(r.localStore,s))}async function oN(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await GT(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(l=>{l.forEach(u=>{u.reject(new G(V.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ca(n,r.us)}}function aN(t,e){const n=J(t),r=n.Fa.get(e);if(r&&r.wa)return re().add(r.key);{let i=re();const s=n.Da.get(e);if(!s)return i;for(const o of s){const l=n.ba.get(o);i=i.unionWith(l.view.Ea)}return i}}function c1(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=o1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nN.bind(null,e),e.Sa.h_=$x.bind(null,e.eventManager),e.Sa.ka=Hx.bind(null,e.eventManager),e}function lN(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iN.bind(null,e),e}class Xv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=lc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return hx(this.persistence,new ux,e.initialUser,this.serializer)}createPersistence(e){return new ox(Yp.Hr,this.serializer)}createSharedClientState(e){return new vx}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class uN{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Qv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=oN.bind(null,this.syncEngine),await Fx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new jx}()}createDatastore(e){const n=lc(e.databaseInfo.databaseId),r=function(s){return new Tx(s)}(e.databaseInfo);return function(s,o,l,u){return new Cx(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new Ax(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Qv(this.syncEngine,n,0),function(){return Wv.D()?new Wv:new _x}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new Qx(i,s,o,l,u,c);return d&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=J(r);H("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Sa(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Ln("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=nt.UNAUTHENTICATED,this.clientId=fT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{H("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(H("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new G(V.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Er;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=rg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ph(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await GT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Jv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await fN(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>qv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>qv(e.remoteStore,i)),t._onlineComponents=e}function dN(t){return t.name==="FirebaseError"?t.code===V.FAILED_PRECONDITION||t.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function fN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ph(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!dN(n))throw n;us("Error using user provided cache. Falling back to memory cache: "+n),await Ph(t,new Xv)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await Ph(t,new Xv);return t._offlineComponents}async function h1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await Jv(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await Jv(t,new uN))),t._onlineComponents}function pN(t){return h1(t).then(e=>e.syncEngine)}async function gN(t){const e=await h1(t),n=e.eventManager;return n.onListen=Yx.bind(null,e.syncEngine),n.onUnlisten=Zx.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Xx.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=eN.bind(null,e.syncEngine),n}function mN(t,e,n={}){const r=new Er;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new cN({next:g=>{o.enqueueAndForget(()=>Bx(s,p));const E=g.docs.has(l);!E&&g.fromCache?c.reject(new G(V.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&g.fromCache&&u&&u.source==="server"?c.reject(new G(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new Wx(Wp(l.path),d,{includeMetadataChanges:!0,ra:!0});return zx(s,p)}(await gN(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yN(t,e,n){if(!n)throw new G(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function vN(t,e,n,r){if(e===!0&&r===!0)throw new G(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function e_(t){if(!q.isDocumentKey(t))throw new G(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function og(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function ia(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=og(t);throw new G(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=d1((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new G(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new G(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new G(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ag{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new t_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new G(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new G(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new t_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new bO;switch(r.type){case"firstParty":return new NO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Zv.get(n);r&&(H("ComponentProvider","Removing Datastore"),Zv.delete(n),r.terminate())}(this),Promise.resolve()}}function _N(t,e,n,r={}){var i;const s=(t=ia(t,ag))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&us("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=nt.MOCK_USER;else{l=WA(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new G(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new nt(c)}t._authCredentials=new OO(new dT(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new lg(this.firestore,e,this._query)}}class Vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Vt(this.firestore,e,this._key)}}class sa extends lg{constructor(e,n,r){super(e,n,Wp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Vt(this.firestore,null,new q(e))}withConverter(e){return new sa(this.firestore,e,this._path)}}function f1(t,e,...n){if(t=Pt(t),arguments.length===1&&(e=fT.newId()),yN("doc","path",e),t instanceof ag){const r=Re.fromString(e,...n);return e_(r),new Vt(t,null,new q(r))}{if(!(t instanceof Vt||t instanceof sa))throw new G(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return e_(r),new Vt(t.firestore,t instanceof sa?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new QT(this,"async_queue_retry"),this.hu=()=>{const n=Ch();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Ch();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Ch();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Er;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!wa(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Ln("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=ng.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&Y()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class ug extends ag{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new EN}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||g1(this),this._firestoreClient.terminate()}}function wN(t,e){const n=typeof t=="object"?t:Iw(),r=typeof t=="string"?t:"(default)",i=Rp(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=$A("firestore");s&&_N(i,...s)}return i}function p1(t){return t._firestoreClient||g1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function g1(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,d){return new GO(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,d1(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new hN(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new gs(ot.fromBase64String(e))}catch(n){throw new G(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new gs(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN=/^__.*__$/;class IN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new yi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ta(e,this.data,n,this.fieldTransforms)}}function y1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class dg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new dg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Cu(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(y1(this.fu)&&TN.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class SN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||lc(e)}Fu(e,n,r,i=!1){return new dg({fu:e,methodName:n,vu:r,path:We.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function CN(t){const e=t._freezeSettings(),n=lc(t._databaseId);return new SN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function PN(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);w1("Data must be an object, but it was:",o,r);const l=_1(r,o);let u,c;if(s.merge)u=new Wt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const g=AN(e,p,n);if(!o.contains(g))throw new G(V.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);kN(d,g)||d.push(g)}u=new Wt(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new IN(new Nt(l),u,c)}function v1(t,e){if(E1(t=Pt(t)))return w1("Unsupported field value:",e,t),_1(t,e);if(t instanceof m1)return function(r,i){if(!y1(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=v1(l,i.bu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Pt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return gD(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Fe.fromDate(r);return{timestampValue:Iu(i.serializer,s)}}if(r instanceof Fe){const s=new Fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Iu(i.serializer,s)}}if(r instanceof hg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof gs)return{bytesValue:jT(i.serializer,r._byteString)};if(r instanceof Vt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Kp(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${og(r)}`)}(t,e)}function _1(t,e){const n={};return pT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):As(t,(r,i)=>{const s=v1(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function E1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof hg||t instanceof gs||t instanceof Vt||t instanceof m1)}function w1(t,e,n){if(!E1(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=og(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function AN(t,e,n){if((e=Pt(e))instanceof cg)return e._internalPath;if(typeof e=="string")return T1(t,e);throw Cu("Field path arguments must be of type string or ",t,!1,void 0,n)}const RN=new RegExp("[~\\*/\\[\\]]");function T1(t,e,n){if(e.search(RN)>=0)throw Cu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new cg(...e.split("."))._internalPath}catch{throw Cu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Cu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new G(V.INVALID_ARGUMENT,l+t+u)}function kN(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(S1("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bN extends I1{data(){return super.data()}}function S1(t,e){return typeof e=="string"?T1(t,e):e instanceof cg?e._internalPath:e._delegate._internalPath}class ON{convertValue(e,n="none"){switch(ci(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ui(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return As(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new hg(xe(e.latitude),xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=zp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Zo(e));default:return null}}convertTimestamp(e){const n=Sr(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Re.fromString(e);fe(qT(r));const i=new ea(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||Ln(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DN(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class C1 extends I1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new NN(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(S1("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class NN extends C1{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LN(t){t=ia(t,Vt);const e=ia(t.firestore,ug);return mN(p1(e),t._key).then(n=>UN(e,t,n))}class MN extends ON{constructor(e){super(),this.firestore=e}convertBytes(e){return new gs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Vt(this.firestore,null,n)}}function VN(t,e,n){t=ia(t,Vt);const r=ia(t.firestore,ug),i=DN(t.converter,e,n);return FN(r,[PN(CN(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,kn.none())])}function FN(t,e){return function(r,i){const s=new Er;return r.asyncQueue.enqueueAndForget(async()=>tN(await pN(r),i,s)),s.promise}(p1(t),e)}function UN(t,e,n){const r=n.docs.get(e._key),i=new MN(t);return new C1(t,i,e._key,r,new xN(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Ps=i})(Ss),ls(new ii("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new ug(new DO(r.getProvider("auth-internal")),new MO(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new G(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ea(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),_r(Iv,"4.6.4",e),_r(Iv,"4.6.4","esm2017")})();const jN={apiKey:"AIzaSyCN3FgD1OduJBoaIclu9-MFmuU7ljVxJmc",authDomain:"wage-counter-motivation.firebaseapp.com",projectId:"wage-counter-motivation",storageBucket:"wage-counter-motivation.appspot.com",messagingSenderId:"771556845535",appId:"1:771556845535:web:94cf869f5dab11fbd3066a"},P1=Tw(jN),Pu=PO(P1),A1=wN(P1),R1=N.createContext(void 0),zN=({children:t})=>{const[e,n]=N.useState(null);N.useEffect(()=>fb(Pu,s=>{n(s)}),[]);const r=()=>{pb(Pu)};return j.jsx(R1.Provider,{value:{currentUser:e,logout:r},children:t})},BN=()=>{const[t,e]=N.useState(""),[n,r]=N.useState(""),[i,s]=N.useState(null),o=Qu(),l=async u=>{u.preventDefault();try{await cb(Pu,t,n),o("/")}catch(c){const d=c;console.error("Error logging in",d),s(d.message)}};return j.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen bg-gray-100",children:[j.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Login"}),j.jsxs("form",{onSubmit:l,className:"bg-white p-6 rounded shadow-md w-full max-w-md",children:[j.jsx("input",{type:"email",value:t,onChange:u=>e(u.target.value),placeholder:"Email",className:"mb-4 p-2 border rounded w-full"}),j.jsx("input",{type:"password",value:n,onChange:u=>r(u.target.value),placeholder:"Password",className:"mb-4 p-2 border rounded w-full"}),j.jsx("button",{type:"submit",className:"bg-blue-500 text-white p-2 rounded w-full",children:"Login"}),i&&j.jsx("p",{className:"text-red-500 mt-4",children:i})]}),j.jsxs("p",{className:"mt-4",children:["Don't have an account?"," ",j.jsx(fw,{to:"/register",className:"text-blue-500",children:"Register"})]})]})},$N=()=>{const[t,e]=N.useState(""),[n,r]=N.useState(""),[i,s]=N.useState(null),o=Qu(),l=async u=>{u.preventDefault();try{await ub(Pu,t,n),o("/login")}catch(c){const d=c;console.error("Error registering",d),s(d.message)}};return j.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen bg-gray-100",children:[j.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Register"}),j.jsxs("form",{onSubmit:l,className:"bg-white p-6 rounded shadow-md w-full max-w-md",children:[j.jsx("input",{type:"email",value:t,onChange:u=>e(u.target.value),placeholder:"Email",className:"mb-4 p-2 border rounded w-full"}),j.jsx("input",{type:"password",value:n,onChange:u=>r(u.target.value),placeholder:"Password",className:"mb-4 p-2 border rounded w-full"}),j.jsx("button",{type:"submit",className:"bg-blue-500 text-white p-2 rounded w-full",children:"Register"}),i&&j.jsx("p",{className:"text-red-500 mt-4",children:i})]}),j.jsxs("p",{className:"mt-4",children:["Already have an account?"," ",j.jsx(fw,{to:"/login",className:"text-blue-500",children:"Login"})]})]})},fg=()=>{const t=N.useContext(R1);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t},HN=()=>{const{currentUser:t}=fg();return t?j.jsx(IA,{}):j.jsx(Cp,{to:"/login"})},n_=({component:t})=>{const{currentUser:e}=fg(),n=Is();return e?j.jsx(Cp,{to:"/",state:{from:n}}):j.jsx(t,{})},r_=[{label:"Russian Ruble",symbol:"₽"},{label:"US Dollar",symbol:"$"},{label:"Euro",symbol:"€"},{label:"British Pound",symbol:"£"},{label:"Japanese Yen",symbol:"¥"}],i_=[{label:"Hour",value:"hour"},{label:"Day",value:"day"},{label:"Week",value:"week"},{label:"Month",value:"month"}],Au=[{label:"January",value:"january",hours:136},{label:"February",value:"february",hours:159},{label:"March",value:"march",hours:159},{label:"April",value:"april",hours:168},{label:"May",value:"may",hours:159},{label:"June",value:"june",hours:151},{label:"July",value:"july",hours:184},{label:"August",value:"august",hours:176},{label:"September",value:"september",hours:168},{label:"October",value:"october",hours:184},{label:"November",value:"november",hours:167},{label:"December",value:"december",hours:168}],WN=({onAddItem:t})=>{const[e,n]=N.useState(""),[r,i]=N.useState(""),s=o=>{o.preventDefault(),!(!e||!r)&&(t(e,parseFloat(r)),n(""),i(""))};return j.jsxs("form",{onSubmit:s,className:"flex flex-col mb-8",children:[j.jsx("input",{type:"text",placeholder:"Item name",value:e,onChange:o=>n(o.target.value),className:"mb-4 p-2 border border-gray-300 rounded-lg bg-white text-black"}),j.jsx("input",{type:"number",placeholder:"Item price",value:r,onChange:o=>i(o.target.value),className:"mb-4 p-2 border border-gray-300 rounded-lg bg-white text-black"}),j.jsx("button",{type:"submit",className:"bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors",children:"Add Item"})]})},k1=N.createContext({dragDropManager:void 0});function bt(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var s_=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Ah=function(){return Math.random().toString(36).substring(7).split("").join(".")},o_={INIT:"@@redux/INIT"+Ah(),REPLACE:"@@redux/REPLACE"+Ah(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Ah()}};function qN(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function b1(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(bt(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(bt(1));return n(b1)(t,e)}if(typeof t!="function")throw new Error(bt(2));var i=t,s=e,o=[],l=o,u=!1;function c(){l===o&&(l=o.slice())}function d(){if(u)throw new Error(bt(3));return s}function p(R){if(typeof R!="function")throw new Error(bt(4));if(u)throw new Error(bt(5));var k=!0;return c(),l.push(R),function(){if(k){if(u)throw new Error(bt(6));k=!1,c();var v=l.indexOf(R);l.splice(v,1),o=null}}}function g(R){if(!qN(R))throw new Error(bt(7));if(typeof R.type>"u")throw new Error(bt(8));if(u)throw new Error(bt(9));try{u=!0,s=i(s,R)}finally{u=!1}for(var k=o=l,_=0;_<k.length;_++){var v=k[_];v()}return R}function E(R){if(typeof R!="function")throw new Error(bt(10));i=R,g({type:o_.REPLACE})}function A(){var R,k=p;return R={subscribe:function(v){if(typeof v!="object"||v===null)throw new Error(bt(11));function I(){v.next&&v.next(d())}I();var D=k(I);return{unsubscribe:D}}},R[s_]=function(){return this},R}return g({type:o_.INIT}),r={dispatch:g,subscribe:p,getState:d,replaceReducer:E},r[s_]=A,r}function Z(t,e,...n){if(GN()&&e===void 0)throw new Error("invariant requires an error message argument");if(!t){let r;if(e===void 0)r=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{let i=0;r=new Error(e.replace(/%s/g,function(){return n[i++]})),r.name="Invariant Violation"}throw r.framesToPop=1,r}}function GN(){return typeof process<"u"&&!0}function KN(t,e,n){return e.split(".").reduce((r,i)=>r&&r[i]?r[i]:n||null,t)}function QN(t,e){return t.filter(n=>n!==e)}function O1(t){return typeof t=="object"}function YN(t,e){const n=new Map,r=s=>{n.set(s,n.has(s)?n.get(s)+1:1)};t.forEach(r),e.forEach(r);const i=[];return n.forEach((s,o)=>{s===1&&i.push(o)}),i}function XN(t,e){return t.filter(n=>e.indexOf(n)>-1)}const pg="dnd-core/INIT_COORDS",hc="dnd-core/BEGIN_DRAG",gg="dnd-core/PUBLISH_DRAG_SOURCE",dc="dnd-core/HOVER",fc="dnd-core/DROP",pc="dnd-core/END_DRAG";function a_(t,e){return{type:pg,payload:{sourceClientOffset:e||null,clientOffset:t||null}}}const JN={type:pg,payload:{clientOffset:null,sourceClientOffset:null}};function ZN(t){return function(n=[],r={publishSource:!0}){const{publishSource:i=!0,clientOffset:s,getSourceClientOffset:o}=r,l=t.getMonitor(),u=t.getRegistry();t.dispatch(a_(s)),e2(n,l,u);const c=r2(n,l);if(c==null){t.dispatch(JN);return}let d=null;if(s){if(!o)throw new Error("getSourceClientOffset must be defined");t2(o),d=o(c)}t.dispatch(a_(s,d));const g=u.getSource(c).beginDrag(l,c);if(g==null)return;n2(g),u.pinSource(c);const E=u.getSourceType(c);return{type:hc,payload:{itemType:E,item:g,sourceId:c,clientOffset:s||null,sourceClientOffset:d||null,isSourcePublic:!!i}}}}function e2(t,e,n){Z(!e.isDragging(),"Cannot call beginDrag while dragging."),t.forEach(function(r){Z(n.getSource(r),"Expected sourceIds to be registered.")})}function t2(t){Z(typeof t=="function","When clientOffset is provided, getSourceClientOffset must be a function.")}function n2(t){Z(O1(t),"Item must be an object.")}function r2(t,e){let n=null;for(let r=t.length-1;r>=0;r--)if(e.canDragSource(t[r])){n=t[r];break}return n}function i2(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s2(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable}))),r.forEach(function(i){i2(t,i,n[i])})}return t}function o2(t){return function(n={}){const r=t.getMonitor(),i=t.getRegistry();a2(r),c2(r).forEach((o,l)=>{const u=l2(o,l,i,r),c={type:fc,payload:{dropResult:s2({},n,u)}};t.dispatch(c)})}}function a2(t){Z(t.isDragging(),"Cannot call drop while not dragging."),Z(!t.didDrop(),"Cannot call drop twice during one drag operation.")}function l2(t,e,n,r){const i=n.getTarget(t);let s=i?i.drop(r,t):void 0;return u2(s),typeof s>"u"&&(s=e===0?{}:r.getDropResult()),s}function u2(t){Z(typeof t>"u"||O1(t),"Drop result must either be an object or undefined.")}function c2(t){const e=t.getTargetIds().filter(t.canDropOnTarget,t);return e.reverse(),e}function h2(t){return function(){const n=t.getMonitor(),r=t.getRegistry();d2(n);const i=n.getSourceId();return i!=null&&(r.getSource(i,!0).endDrag(n,i),r.unpinSource()),{type:pc}}}function d2(t){Z(t.isDragging(),"Cannot call endDrag while not dragging.")}function rf(t,e){return e===null?t===null:Array.isArray(t)?t.some(n=>n===e):t===e}function f2(t){return function(n,{clientOffset:r}={}){p2(n);const i=n.slice(0),s=t.getMonitor(),o=t.getRegistry(),l=s.getItemType();return m2(i,o,l),g2(i,s,o),y2(i,s,o),{type:dc,payload:{targetIds:i,clientOffset:r||null}}}}function p2(t){Z(Array.isArray(t),"Expected targetIds to be an array.")}function g2(t,e,n){Z(e.isDragging(),"Cannot call hover while not dragging."),Z(!e.didDrop(),"Cannot call hover after drop.");for(let r=0;r<t.length;r++){const i=t[r];Z(t.lastIndexOf(i)===r,"Expected targetIds to be unique in the passed array.");const s=n.getTarget(i);Z(s,"Expected targetIds to be registered.")}}function m2(t,e,n){for(let r=t.length-1;r>=0;r--){const i=t[r],s=e.getTargetType(i);rf(s,n)||t.splice(r,1)}}function y2(t,e,n){t.forEach(function(r){n.getTarget(r).hover(e,r)})}function v2(t){return function(){if(t.getMonitor().isDragging())return{type:gg}}}function _2(t){return{beginDrag:ZN(t),publishDragSource:v2(t),hover:f2(t),drop:o2(t),endDrag:h2(t)}}class E2{receiveBackend(e){this.backend=e}getMonitor(){return this.monitor}getBackend(){return this.backend}getRegistry(){return this.monitor.registry}getActions(){const e=this,{dispatch:n}=this.store;function r(s){return(...o)=>{const l=s.apply(e,o);typeof l<"u"&&n(l)}}const i=_2(this);return Object.keys(i).reduce((s,o)=>{const l=i[o];return s[o]=r(l),s},{})}dispatch(e){this.store.dispatch(e)}constructor(e,n){this.isSetUp=!1,this.handleRefCountChange=()=>{const r=this.store.getState().refCount>0;this.backend&&(r&&!this.isSetUp?(this.backend.setup(),this.isSetUp=!0):!r&&this.isSetUp&&(this.backend.teardown(),this.isSetUp=!1))},this.store=e,this.monitor=n,e.subscribe(this.handleRefCountChange)}}function w2(t,e){return{x:t.x+e.x,y:t.y+e.y}}function D1(t,e){return{x:t.x-e.x,y:t.y-e.y}}function T2(t){const{clientOffset:e,initialClientOffset:n,initialSourceClientOffset:r}=t;return!e||!n||!r?null:D1(w2(e,r),n)}function I2(t){const{clientOffset:e,initialClientOffset:n}=t;return!e||!n?null:D1(e,n)}const Ao=[],mg=[];Ao.__IS_NONE__=!0;mg.__IS_ALL__=!0;function S2(t,e){return t===Ao?!1:t===mg||typeof e>"u"?!0:XN(e,t).length>0}class C2{subscribeToStateChange(e,n={}){const{handlerIds:r}=n;Z(typeof e=="function","listener must be a function."),Z(typeof r>"u"||Array.isArray(r),"handlerIds, when specified, must be an array of strings.");let i=this.store.getState().stateId;const s=()=>{const o=this.store.getState(),l=o.stateId;try{l===i||l===i+1&&!S2(o.dirtyHandlerIds,r)||e()}finally{i=l}};return this.store.subscribe(s)}subscribeToOffsetChange(e){Z(typeof e=="function","listener must be a function.");let n=this.store.getState().dragOffset;const r=()=>{const i=this.store.getState().dragOffset;i!==n&&(n=i,e())};return this.store.subscribe(r)}canDragSource(e){if(!e)return!1;const n=this.registry.getSource(e);return Z(n,`Expected to find a valid source. sourceId=${e}`),this.isDragging()?!1:n.canDrag(this,e)}canDropOnTarget(e){if(!e)return!1;const n=this.registry.getTarget(e);if(Z(n,`Expected to find a valid target. targetId=${e}`),!this.isDragging()||this.didDrop())return!1;const r=this.registry.getTargetType(e),i=this.getItemType();return rf(r,i)&&n.canDrop(this,e)}isDragging(){return!!this.getItemType()}isDraggingSource(e){if(!e)return!1;const n=this.registry.getSource(e,!0);if(Z(n,`Expected to find a valid source. sourceId=${e}`),!this.isDragging()||!this.isSourcePublic())return!1;const r=this.registry.getSourceType(e),i=this.getItemType();return r!==i?!1:n.isDragging(this,e)}isOverTarget(e,n={shallow:!1}){if(!e)return!1;const{shallow:r}=n;if(!this.isDragging())return!1;const i=this.registry.getTargetType(e),s=this.getItemType();if(s&&!rf(i,s))return!1;const o=this.getTargetIds();if(!o.length)return!1;const l=o.indexOf(e);return r?l===o.length-1:l>-1}getItemType(){return this.store.getState().dragOperation.itemType}getItem(){return this.store.getState().dragOperation.item}getSourceId(){return this.store.getState().dragOperation.sourceId}getTargetIds(){return this.store.getState().dragOperation.targetIds}getDropResult(){return this.store.getState().dragOperation.dropResult}didDrop(){return this.store.getState().dragOperation.didDrop}isSourcePublic(){return!!this.store.getState().dragOperation.isSourcePublic}getInitialClientOffset(){return this.store.getState().dragOffset.initialClientOffset}getInitialSourceClientOffset(){return this.store.getState().dragOffset.initialSourceClientOffset}getClientOffset(){return this.store.getState().dragOffset.clientOffset}getSourceClientOffset(){return T2(this.store.getState().dragOffset)}getDifferenceFromInitialOffset(){return I2(this.store.getState().dragOffset)}constructor(e,n){this.store=e,this.registry=n}}const l_=typeof global<"u"?global:self,x1=l_.MutationObserver||l_.WebKitMutationObserver;function N1(t){return function(){const n=setTimeout(i,0),r=setInterval(i,50);function i(){clearTimeout(n),clearInterval(r),t()}}}function P2(t){let e=1;const n=new x1(t),r=document.createTextNode("");return n.observe(r,{characterData:!0}),function(){e=-e,r.data=e}}const A2=typeof x1=="function"?P2:N1;class R2{enqueueTask(e){const{queue:n,requestFlush:r}=this;n.length||(r(),this.flushing=!0),n[n.length]=e}constructor(){this.queue=[],this.pendingErrors=[],this.flushing=!1,this.index=0,this.capacity=1024,this.flush=()=>{const{queue:e}=this;for(;this.index<e.length;){const n=this.index;if(this.index++,e[n].call(),this.index>this.capacity){for(let r=0,i=e.length-this.index;r<i;r++)e[r]=e[r+this.index];e.length-=this.index,this.index=0}}e.length=0,this.index=0,this.flushing=!1},this.registerPendingError=e=>{this.pendingErrors.push(e),this.requestErrorThrow()},this.requestFlush=A2(this.flush),this.requestErrorThrow=N1(()=>{if(this.pendingErrors.length)throw this.pendingErrors.shift()})}}class k2{call(){try{this.task&&this.task()}catch(e){this.onError(e)}finally{this.task=null,this.release(this)}}constructor(e,n){this.onError=e,this.release=n,this.task=null}}class b2{create(e){const n=this.freeTasks,r=n.length?n.pop():new k2(this.onError,i=>n[n.length]=i);return r.task=e,r}constructor(e){this.onError=e,this.freeTasks=[]}}const L1=new R2,O2=new b2(L1.registerPendingError);function D2(t){L1.enqueueTask(O2.create(t))}const yg="dnd-core/ADD_SOURCE",vg="dnd-core/ADD_TARGET",_g="dnd-core/REMOVE_SOURCE",gc="dnd-core/REMOVE_TARGET";function x2(t){return{type:yg,payload:{sourceId:t}}}function N2(t){return{type:vg,payload:{targetId:t}}}function L2(t){return{type:_g,payload:{sourceId:t}}}function M2(t){return{type:gc,payload:{targetId:t}}}function V2(t){Z(typeof t.canDrag=="function","Expected canDrag to be a function."),Z(typeof t.beginDrag=="function","Expected beginDrag to be a function."),Z(typeof t.endDrag=="function","Expected endDrag to be a function.")}function F2(t){Z(typeof t.canDrop=="function","Expected canDrop to be a function."),Z(typeof t.hover=="function","Expected hover to be a function."),Z(typeof t.drop=="function","Expected beginDrag to be a function.")}function sf(t,e){if(e&&Array.isArray(t)){t.forEach(n=>sf(n,!1));return}Z(typeof t=="string"||typeof t=="symbol",e?"Type can only be a string, a symbol, or an array of either.":"Type can only be a string or a symbol.")}var xt;(function(t){t.SOURCE="SOURCE",t.TARGET="TARGET"})(xt||(xt={}));let U2=0;function j2(){return U2++}function z2(t){const e=j2().toString();switch(t){case xt.SOURCE:return`S${e}`;case xt.TARGET:return`T${e}`;default:throw new Error(`Unknown Handler Role: ${t}`)}}function u_(t){switch(t[0]){case"S":return xt.SOURCE;case"T":return xt.TARGET;default:throw new Error(`Cannot parse handler ID: ${t}`)}}function c_(t,e){const n=t.entries();let r=!1;do{const{done:i,value:[,s]}=n.next();if(s===e)return!0;r=!!i}while(!r);return!1}class B2{addSource(e,n){sf(e),V2(n);const r=this.addHandler(xt.SOURCE,e,n);return this.store.dispatch(x2(r)),r}addTarget(e,n){sf(e,!0),F2(n);const r=this.addHandler(xt.TARGET,e,n);return this.store.dispatch(N2(r)),r}containsHandler(e){return c_(this.dragSources,e)||c_(this.dropTargets,e)}getSource(e,n=!1){return Z(this.isSourceId(e),"Expected a valid source ID."),n&&e===this.pinnedSourceId?this.pinnedSource:this.dragSources.get(e)}getTarget(e){return Z(this.isTargetId(e),"Expected a valid target ID."),this.dropTargets.get(e)}getSourceType(e){return Z(this.isSourceId(e),"Expected a valid source ID."),this.types.get(e)}getTargetType(e){return Z(this.isTargetId(e),"Expected a valid target ID."),this.types.get(e)}isSourceId(e){return u_(e)===xt.SOURCE}isTargetId(e){return u_(e)===xt.TARGET}removeSource(e){Z(this.getSource(e),"Expected an existing source."),this.store.dispatch(L2(e)),D2(()=>{this.dragSources.delete(e),this.types.delete(e)})}removeTarget(e){Z(this.getTarget(e),"Expected an existing target."),this.store.dispatch(M2(e)),this.dropTargets.delete(e),this.types.delete(e)}pinSource(e){const n=this.getSource(e);Z(n,"Expected an existing source."),this.pinnedSourceId=e,this.pinnedSource=n}unpinSource(){Z(this.pinnedSource,"No source is pinned at the time."),this.pinnedSourceId=null,this.pinnedSource=null}addHandler(e,n,r){const i=z2(e);return this.types.set(i,n),e===xt.SOURCE?this.dragSources.set(i,r):e===xt.TARGET&&this.dropTargets.set(i,r),i}constructor(e){this.types=new Map,this.dragSources=new Map,this.dropTargets=new Map,this.pinnedSourceId=null,this.pinnedSource=null,this.store=e}}const $2=(t,e)=>t===e;function H2(t,e){return!t&&!e?!0:!t||!e?!1:t.x===e.x&&t.y===e.y}function W2(t,e,n=$2){if(t.length!==e.length)return!1;for(let r=0;r<t.length;++r)if(!n(t[r],e[r]))return!1;return!0}function q2(t=Ao,e){switch(e.type){case dc:break;case yg:case vg:case gc:case _g:return Ao;case hc:case gg:case pc:case fc:default:return mg}const{targetIds:n=[],prevTargetIds:r=[]}=e.payload,i=YN(n,r);if(!(i.length>0||!W2(n,r)))return Ao;const o=r[r.length-1],l=n[n.length-1];return o!==l&&(o&&i.push(o),l&&i.push(l)),i}function G2(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function K2(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable}))),r.forEach(function(i){G2(t,i,n[i])})}return t}const h_={initialSourceClientOffset:null,initialClientOffset:null,clientOffset:null};function Q2(t=h_,e){const{payload:n}=e;switch(e.type){case pg:case hc:return{initialSourceClientOffset:n.sourceClientOffset,initialClientOffset:n.clientOffset,clientOffset:n.clientOffset};case dc:return H2(t.clientOffset,n.clientOffset)?t:K2({},t,{clientOffset:n.clientOffset});case pc:case fc:return h_;default:return t}}function Y2(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Si(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable}))),r.forEach(function(i){Y2(t,i,n[i])})}return t}const X2={itemType:null,item:null,sourceId:null,targetIds:[],dropResult:null,didDrop:!1,isSourcePublic:null};function J2(t=X2,e){const{payload:n}=e;switch(e.type){case hc:return Si({},t,{itemType:n.itemType,item:n.item,sourceId:n.sourceId,isSourcePublic:n.isSourcePublic,dropResult:null,didDrop:!1});case gg:return Si({},t,{isSourcePublic:!0});case dc:return Si({},t,{targetIds:n.targetIds});case gc:return t.targetIds.indexOf(n.targetId)===-1?t:Si({},t,{targetIds:QN(t.targetIds,n.targetId)});case fc:return Si({},t,{dropResult:n.dropResult,didDrop:!0,targetIds:[]});case pc:return Si({},t,{itemType:null,item:null,sourceId:null,dropResult:null,didDrop:!1,isSourcePublic:null,targetIds:[]});default:return t}}function Z2(t=0,e){switch(e.type){case yg:case vg:return t+1;case _g:case gc:return t-1;default:return t}}function eL(t=0){return t+1}function tL(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function nL(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable}))),r.forEach(function(i){tL(t,i,n[i])})}return t}function rL(t={},e){return{dirtyHandlerIds:q2(t.dirtyHandlerIds,{type:e.type,payload:nL({},e.payload,{prevTargetIds:KN(t,"dragOperation.targetIds",[])})}),dragOffset:Q2(t.dragOffset,e),refCount:Z2(t.refCount,e),dragOperation:J2(t.dragOperation,e),stateId:eL(t.stateId)}}function iL(t,e=void 0,n={},r=!1){const i=sL(r),s=new C2(i,new B2(i)),o=new E2(i,s),l=t(o,e,n);return o.receiveBackend(l),o}function sL(t){const e=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION__;return b1(rL,t&&e&&e({name:"dnd-core",instanceId:"dnd-core"}))}function oL(t,e){if(t==null)return{};var n=aL(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function aL(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}let d_=0;const Ll=Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");var lL=N.memo(function(e){var{children:n}=e,r=oL(e,["children"]);const[i,s]=uL(r);return N.useEffect(()=>{if(s){const o=M1();return++d_,()=>{--d_===0&&(o[Ll]=null)}}},[]),j.jsx(k1.Provider,{value:i,children:n})});function uL(t){if("manager"in t)return[{dragDropManager:t.manager},!1];const e=cL(t.backend,t.context,t.options,t.debugMode),n=!t.context;return[e,n]}function cL(t,e=M1(),n,r){const i=e;return i[Ll]||(i[Ll]={dragDropManager:iL(t,e,n,r)}),i[Ll]}function M1(){return typeof global<"u"?global:window}var hL=function t(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var r,i,s;if(Array.isArray(e)){if(r=e.length,r!=n.length)return!1;for(i=r;i--!==0;)if(!t(e[i],n[i]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(s=Object.keys(e),r=s.length,r!==Object.keys(n).length)return!1;for(i=r;i--!==0;)if(!Object.prototype.hasOwnProperty.call(n,s[i]))return!1;for(i=r;i--!==0;){var o=s[i];if(!t(e[o],n[o]))return!1}return!0}return e!==e&&n!==n};const dL=Pf(hL),hi=typeof window<"u"?N.useLayoutEffect:N.useEffect;function fL(t,e,n){const[r,i]=N.useState(()=>e(t)),s=N.useCallback(()=>{const o=e(t);dL(r,o)||(i(o),n&&n())},[r,t,n]);return hi(s),[r,s]}function pL(t,e,n){const[r,i]=fL(t,e,n);return hi(function(){const o=t.getHandlerId();if(o!=null)return t.subscribeToStateChange(i,{handlerIds:[o]})},[t,i]),r}function V1(t,e,n){return pL(e,t||(()=>({})),()=>n.reconnect())}function F1(t,e){const n=[];return typeof t!="function"&&n.push(t),N.useMemo(()=>typeof t=="function"?t():t,n)}function gL(t){return N.useMemo(()=>t.hooks.dragSource(),[t])}function mL(t){return N.useMemo(()=>t.hooks.dragPreview(),[t])}let Rh=!1,kh=!1;class yL{receiveHandlerId(e){this.sourceId=e}getHandlerId(){return this.sourceId}canDrag(){Z(!Rh,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return Rh=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{Rh=!1}}isDragging(){if(!this.sourceId)return!1;Z(!kh,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return kh=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{kh=!1}}subscribeToStateChange(e,n){return this.internalMonitor.subscribeToStateChange(e,n)}isDraggingSource(e){return this.internalMonitor.isDraggingSource(e)}isOverTarget(e,n){return this.internalMonitor.isOverTarget(e,n)}getTargetIds(){return this.internalMonitor.getTargetIds()}isSourcePublic(){return this.internalMonitor.isSourcePublic()}getSourceId(){return this.internalMonitor.getSourceId()}subscribeToOffsetChange(e){return this.internalMonitor.subscribeToOffsetChange(e)}canDragSource(e){return this.internalMonitor.canDragSource(e)}canDropOnTarget(e){return this.internalMonitor.canDropOnTarget(e)}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(e){this.sourceId=null,this.internalMonitor=e.getMonitor()}}let bh=!1;class vL{receiveHandlerId(e){this.targetId=e}getHandlerId(){return this.targetId}subscribeToStateChange(e,n){return this.internalMonitor.subscribeToStateChange(e,n)}canDrop(){if(!this.targetId)return!1;Z(!bh,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");try{return bh=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{bh=!1}}isOver(e){return this.targetId?this.internalMonitor.isOverTarget(this.targetId,e):!1}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(e){this.targetId=null,this.internalMonitor=e.getMonitor()}}function _L(t,e,n){const r=n.getRegistry(),i=r.addTarget(t,e);return[i,()=>r.removeTarget(i)]}function EL(t,e,n){const r=n.getRegistry(),i=r.addSource(t,e);return[i,()=>r.removeSource(i)]}function of(t,e,n,r){let i;if(i!==void 0)return!!i;if(t===e)return!0;if(typeof t!="object"||!t||typeof e!="object"||!e)return!1;const s=Object.keys(t),o=Object.keys(e);if(s.length!==o.length)return!1;const l=Object.prototype.hasOwnProperty.bind(e);for(let u=0;u<s.length;u++){const c=s[u];if(!l(c))return!1;const d=t[c],p=e[c];if(i=void 0,i===!1||i===void 0&&d!==p)return!1}return!0}function af(t){return t!==null&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function wL(t){if(typeof t.type=="string")return;const e=t.type.displayName||t.type.name||"the component";throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${e} into a <div>, or turn it into a drag source or a drop target itself.`)}function TL(t){return(e=null,n=null)=>{if(!N.isValidElement(e)){const s=e;return t(s,n),s}const r=e;return wL(r),IL(r,n?s=>t(s,n):t)}}function U1(t){const e={};return Object.keys(t).forEach(n=>{const r=t[n];if(n.endsWith("Ref"))e[n]=t[n];else{const i=TL(r);e[n]=()=>i}}),e}function f_(t,e){typeof t=="function"?t(e):t.current=e}function IL(t,e){const n=t.ref;return Z(typeof n!="string","Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"),n?N.cloneElement(t,{ref:r=>{f_(n,r),f_(e,r)}}):N.cloneElement(t,{ref:e})}class SL{receiveHandlerId(e){this.handlerId!==e&&(this.handlerId=e,this.reconnect())}get connectTarget(){return this.dragSource}get dragSourceOptions(){return this.dragSourceOptionsInternal}set dragSourceOptions(e){this.dragSourceOptionsInternal=e}get dragPreviewOptions(){return this.dragPreviewOptionsInternal}set dragPreviewOptions(e){this.dragPreviewOptionsInternal=e}reconnect(){const e=this.reconnectDragSource();this.reconnectDragPreview(e)}reconnectDragSource(){const e=this.dragSource,n=this.didHandlerIdChange()||this.didConnectedDragSourceChange()||this.didDragSourceOptionsChange();return n&&this.disconnectDragSource(),this.handlerId?e?(n&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragSource=e,this.lastConnectedDragSourceOptions=this.dragSourceOptions,this.dragSourceUnsubscribe=this.backend.connectDragSource(this.handlerId,e,this.dragSourceOptions)),n):(this.lastConnectedDragSource=e,n):n}reconnectDragPreview(e=!1){const n=this.dragPreview,r=e||this.didHandlerIdChange()||this.didConnectedDragPreviewChange()||this.didDragPreviewOptionsChange();if(r&&this.disconnectDragPreview(),!!this.handlerId){if(!n){this.lastConnectedDragPreview=n;return}r&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragPreview=n,this.lastConnectedDragPreviewOptions=this.dragPreviewOptions,this.dragPreviewUnsubscribe=this.backend.connectDragPreview(this.handlerId,n,this.dragPreviewOptions))}}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didConnectedDragSourceChange(){return this.lastConnectedDragSource!==this.dragSource}didConnectedDragPreviewChange(){return this.lastConnectedDragPreview!==this.dragPreview}didDragSourceOptionsChange(){return!of(this.lastConnectedDragSourceOptions,this.dragSourceOptions)}didDragPreviewOptionsChange(){return!of(this.lastConnectedDragPreviewOptions,this.dragPreviewOptions)}disconnectDragSource(){this.dragSourceUnsubscribe&&(this.dragSourceUnsubscribe(),this.dragSourceUnsubscribe=void 0)}disconnectDragPreview(){this.dragPreviewUnsubscribe&&(this.dragPreviewUnsubscribe(),this.dragPreviewUnsubscribe=void 0,this.dragPreviewNode=null,this.dragPreviewRef=null)}get dragSource(){return this.dragSourceNode||this.dragSourceRef&&this.dragSourceRef.current}get dragPreview(){return this.dragPreviewNode||this.dragPreviewRef&&this.dragPreviewRef.current}clearDragSource(){this.dragSourceNode=null,this.dragSourceRef=null}clearDragPreview(){this.dragPreviewNode=null,this.dragPreviewRef=null}constructor(e){this.hooks=U1({dragSource:(n,r)=>{this.clearDragSource(),this.dragSourceOptions=r||null,af(n)?this.dragSourceRef=n:this.dragSourceNode=n,this.reconnectDragSource()},dragPreview:(n,r)=>{this.clearDragPreview(),this.dragPreviewOptions=r||null,af(n)?this.dragPreviewRef=n:this.dragPreviewNode=n,this.reconnectDragPreview()}}),this.handlerId=null,this.dragSourceRef=null,this.dragSourceOptionsInternal=null,this.dragPreviewRef=null,this.dragPreviewOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDragSource=null,this.lastConnectedDragSourceOptions=null,this.lastConnectedDragPreview=null,this.lastConnectedDragPreviewOptions=null,this.backend=e}}class CL{get connectTarget(){return this.dropTarget}reconnect(){const e=this.didHandlerIdChange()||this.didDropTargetChange()||this.didOptionsChange();e&&this.disconnectDropTarget();const n=this.dropTarget;if(this.handlerId){if(!n){this.lastConnectedDropTarget=n;return}e&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDropTarget=n,this.lastConnectedDropTargetOptions=this.dropTargetOptions,this.unsubscribeDropTarget=this.backend.connectDropTarget(this.handlerId,n,this.dropTargetOptions))}}receiveHandlerId(e){e!==this.handlerId&&(this.handlerId=e,this.reconnect())}get dropTargetOptions(){return this.dropTargetOptionsInternal}set dropTargetOptions(e){this.dropTargetOptionsInternal=e}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didDropTargetChange(){return this.lastConnectedDropTarget!==this.dropTarget}didOptionsChange(){return!of(this.lastConnectedDropTargetOptions,this.dropTargetOptions)}disconnectDropTarget(){this.unsubscribeDropTarget&&(this.unsubscribeDropTarget(),this.unsubscribeDropTarget=void 0)}get dropTarget(){return this.dropTargetNode||this.dropTargetRef&&this.dropTargetRef.current}clearDropTarget(){this.dropTargetRef=null,this.dropTargetNode=null}constructor(e){this.hooks=U1({dropTarget:(n,r)=>{this.clearDropTarget(),this.dropTargetOptions=r,af(n)?this.dropTargetRef=n:this.dropTargetNode=n,this.reconnect()}}),this.handlerId=null,this.dropTargetRef=null,this.dropTargetOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDropTarget=null,this.lastConnectedDropTargetOptions=null,this.backend=e}}function bs(){const{dragDropManager:t}=N.useContext(k1);return Z(t!=null,"Expected drag drop context"),t}function PL(t,e){const n=bs(),r=N.useMemo(()=>new SL(n.getBackend()),[n]);return hi(()=>(r.dragSourceOptions=t||null,r.reconnect(),()=>r.disconnectDragSource()),[r,t]),hi(()=>(r.dragPreviewOptions=e||null,r.reconnect(),()=>r.disconnectDragPreview()),[r,e]),r}function AL(){const t=bs();return N.useMemo(()=>new yL(t),[t])}class RL{beginDrag(){const e=this.spec,n=this.monitor;let r=null;return typeof e.item=="object"?r=e.item:typeof e.item=="function"?r=e.item(n):r={},r??null}canDrag(){const e=this.spec,n=this.monitor;return typeof e.canDrag=="boolean"?e.canDrag:typeof e.canDrag=="function"?e.canDrag(n):!0}isDragging(e,n){const r=this.spec,i=this.monitor,{isDragging:s}=r;return s?s(i):n===e.getSourceId()}endDrag(){const e=this.spec,n=this.monitor,r=this.connector,{end:i}=e;i&&i(n.getItem(),n),r.reconnect()}constructor(e,n,r){this.spec=e,this.monitor=n,this.connector=r}}function kL(t,e,n){const r=N.useMemo(()=>new RL(t,e,n),[e,n]);return N.useEffect(()=>{r.spec=t},[t]),r}function bL(t){return N.useMemo(()=>{const e=t.type;return Z(e!=null,"spec.type must be defined"),e},[t])}function OL(t,e,n){const r=bs(),i=kL(t,e,n),s=bL(t);hi(function(){if(s!=null){const[l,u]=EL(s,i,r);return e.receiveHandlerId(l),n.receiveHandlerId(l),u}},[r,e,n,i,s])}function DL(t,e){const n=F1(t);Z(!n.begin,"useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");const r=AL(),i=PL(n.options,n.previewOptions);return OL(n,r,i),[V1(n.collect,r,i),gL(i),mL(i)]}function xL(t){return N.useMemo(()=>t.hooks.dropTarget(),[t])}function NL(t){const e=bs(),n=N.useMemo(()=>new CL(e.getBackend()),[e]);return hi(()=>(n.dropTargetOptions=t||null,n.reconnect(),()=>n.disconnectDropTarget()),[t]),n}function LL(){const t=bs();return N.useMemo(()=>new vL(t),[t])}function ML(t){const{accept:e}=t;return N.useMemo(()=>(Z(t.accept!=null,"accept must be defined"),Array.isArray(e)?e:[e]),[e])}class VL{canDrop(){const e=this.spec,n=this.monitor;return e.canDrop?e.canDrop(n.getItem(),n):!0}hover(){const e=this.spec,n=this.monitor;e.hover&&e.hover(n.getItem(),n)}drop(){const e=this.spec,n=this.monitor;if(e.drop)return e.drop(n.getItem(),n)}constructor(e,n){this.spec=e,this.monitor=n}}function FL(t,e){const n=N.useMemo(()=>new VL(t,e),[e]);return N.useEffect(()=>{n.spec=t},[t]),n}function UL(t,e,n){const r=bs(),i=FL(t,e),s=ML(t);hi(function(){const[l,u]=_L(s,i,r);return e.receiveHandlerId(l),n.receiveHandlerId(l),u},[r,e,i,n,s.map(o=>o.toString()).join("|")])}function jL(t,e){const n=F1(t),r=LL(),i=NL(n.options);return UL(n,r,i),[V1(n.collect,r,i),xL(i)]}function j1(t){let e=null;return()=>(e==null&&(e=t()),e)}function zL(t,e){return t.filter(n=>n!==e)}function BL(t,e){const n=new Set,r=s=>n.add(s);t.forEach(r),e.forEach(r);const i=[];return n.forEach(s=>i.push(s)),i}class $L{enter(e){const n=this.entered.length,r=i=>this.isNodeInDocument(i)&&(!i.contains||i.contains(e));return this.entered=BL(this.entered.filter(r),[e]),n===0&&this.entered.length>0}leave(e){const n=this.entered.length;return this.entered=zL(this.entered.filter(this.isNodeInDocument),e),n>0&&this.entered.length===0}reset(){this.entered=[]}constructor(e){this.entered=[],this.isNodeInDocument=e}}class HL{initializeExposedProperties(){Object.keys(this.config.exposeProperties).forEach(e=>{Object.defineProperty(this.item,e,{configurable:!0,enumerable:!0,get(){return console.warn(`Browser doesn't allow reading "${e}" until the drop event.`),null}})})}loadDataTransfer(e){if(e){const n={};Object.keys(this.config.exposeProperties).forEach(r=>{const i=this.config.exposeProperties[r];i!=null&&(n[r]={value:i(e,this.config.matchesTypes),configurable:!0,enumerable:!0})}),Object.defineProperties(this.item,n)}}canDrag(){return!0}beginDrag(){return this.item}isDragging(e,n){return n===e.getSourceId()}endDrag(){}constructor(e){this.config=e,this.item={},this.initializeExposedProperties()}}const z1="__NATIVE_FILE__",B1="__NATIVE_URL__",$1="__NATIVE_TEXT__",H1="__NATIVE_HTML__",p_=Object.freeze(Object.defineProperty({__proto__:null,FILE:z1,HTML:H1,TEXT:$1,URL:B1},Symbol.toStringTag,{value:"Module"}));function Oh(t,e,n){const r=e.reduce((i,s)=>i||t.getData(s),"");return r??n}const lf={[z1]:{exposeProperties:{files:t=>Array.prototype.slice.call(t.files),items:t=>t.items,dataTransfer:t=>t},matchesTypes:["Files"]},[H1]:{exposeProperties:{html:(t,e)=>Oh(t,e,""),dataTransfer:t=>t},matchesTypes:["Html","text/html"]},[B1]:{exposeProperties:{urls:(t,e)=>Oh(t,e,"").split(`
`),dataTransfer:t=>t},matchesTypes:["Url","text/uri-list"]},[$1]:{exposeProperties:{text:(t,e)=>Oh(t,e,""),dataTransfer:t=>t},matchesTypes:["Text","text/plain"]}};function WL(t,e){const n=lf[t];if(!n)throw new Error(`native type ${t} has no configuration`);const r=new HL(n);return r.loadDataTransfer(e),r}function Dh(t){if(!t)return null;const e=Array.prototype.slice.call(t.types||[]);return Object.keys(lf).filter(n=>{const r=lf[n];return r!=null&&r.matchesTypes?r.matchesTypes.some(i=>e.indexOf(i)>-1):!1})[0]||null}const qL=j1(()=>/firefox/i.test(navigator.userAgent)),W1=j1(()=>!!window.safari);class g_{interpolate(e){const{xs:n,ys:r,c1s:i,c2s:s,c3s:o}=this;let l=n.length-1;if(e===n[l])return r[l];let u=0,c=o.length-1,d;for(;u<=c;){d=Math.floor(.5*(u+c));const E=n[d];if(E<e)u=d+1;else if(E>e)c=d-1;else return r[d]}l=Math.max(0,c);const p=e-n[l],g=p*p;return r[l]+i[l]*p+s[l]*g+o[l]*p*g}constructor(e,n){const{length:r}=e,i=[];for(let E=0;E<r;E++)i.push(E);i.sort((E,A)=>e[E]<e[A]?-1:1);const s=[],o=[];let l,u;for(let E=0;E<r-1;E++)l=e[E+1]-e[E],u=n[E+1]-n[E],s.push(l),o.push(u/l);const c=[o[0]];for(let E=0;E<s.length-1;E++){const A=o[E],R=o[E+1];if(A*R<=0)c.push(0);else{l=s[E];const k=s[E+1],_=l+k;c.push(3*_/((_+k)/A+(_+l)/R))}}c.push(o[o.length-1]);const d=[],p=[];let g;for(let E=0;E<c.length-1;E++){g=o[E];const A=c[E],R=1/s[E],k=A+c[E+1]-g-g;d.push((g-A-k)*R),p.push(k*R*R)}this.xs=e,this.ys=n,this.c1s=c,this.c2s=d,this.c3s=p}}const GL=1;function q1(t){const e=t.nodeType===GL?t:t.parentElement;if(!e)return null;const{top:n,left:r}=e.getBoundingClientRect();return{x:r,y:n}}function fl(t){return{x:t.clientX,y:t.clientY}}function KL(t){var e;return t.nodeName==="IMG"&&(qL()||!(!((e=document.documentElement)===null||e===void 0)&&e.contains(t)))}function QL(t,e,n,r){let i=t?e.width:n,s=t?e.height:r;return W1()&&t&&(s/=window.devicePixelRatio,i/=window.devicePixelRatio),{dragPreviewWidth:i,dragPreviewHeight:s}}function YL(t,e,n,r,i){const s=KL(e),l=q1(s?t:e),u={x:n.x-l.x,y:n.y-l.y},{offsetWidth:c,offsetHeight:d}=t,{anchorX:p,anchorY:g}=r,{dragPreviewWidth:E,dragPreviewHeight:A}=QL(s,e,c,d),R=()=>{let U=new g_([0,.5,1],[u.y,u.y/d*A,u.y+A-d]).interpolate(g);return W1()&&s&&(U+=(window.devicePixelRatio-1)*A),U},k=()=>new g_([0,.5,1],[u.x,u.x/c*E,u.x+E-c]).interpolate(p),{offsetX:_,offsetY:v}=i,I=_===0||_,D=v===0||v;return{x:I?_:k(),y:D?v:R()}}class XL{get window(){if(this.globalContext)return this.globalContext;if(typeof window<"u")return window}get document(){var e;return!((e=this.globalContext)===null||e===void 0)&&e.document?this.globalContext.document:this.window?this.window.document:void 0}get rootElement(){var e;return((e=this.optionsArgs)===null||e===void 0?void 0:e.rootElement)||this.window}constructor(e,n){this.ownerDocument=null,this.globalContext=e,this.optionsArgs=n}}function JL(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m_(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable}))),r.forEach(function(i){JL(t,i,n[i])})}return t}class ZL{profile(){var e,n;return{sourcePreviewNodes:this.sourcePreviewNodes.size,sourcePreviewNodeOptions:this.sourcePreviewNodeOptions.size,sourceNodeOptions:this.sourceNodeOptions.size,sourceNodes:this.sourceNodes.size,dragStartSourceIds:((e=this.dragStartSourceIds)===null||e===void 0?void 0:e.length)||0,dropTargetIds:this.dropTargetIds.length,dragEnterTargetIds:this.dragEnterTargetIds.length,dragOverTargetIds:((n=this.dragOverTargetIds)===null||n===void 0?void 0:n.length)||0}}get window(){return this.options.window}get document(){return this.options.document}get rootElement(){return this.options.rootElement}setup(){const e=this.rootElement;if(e!==void 0){if(e.__isReactDndBackendSetUp)throw new Error("Cannot have two HTML5 backends at the same time.");e.__isReactDndBackendSetUp=!0,this.addEventListeners(e)}}teardown(){const e=this.rootElement;if(e!==void 0&&(e.__isReactDndBackendSetUp=!1,this.removeEventListeners(this.rootElement),this.clearCurrentDragSourceNode(),this.asyncEndDragFrameId)){var n;(n=this.window)===null||n===void 0||n.cancelAnimationFrame(this.asyncEndDragFrameId)}}connectDragPreview(e,n,r){return this.sourcePreviewNodeOptions.set(e,r),this.sourcePreviewNodes.set(e,n),()=>{this.sourcePreviewNodes.delete(e),this.sourcePreviewNodeOptions.delete(e)}}connectDragSource(e,n,r){this.sourceNodes.set(e,n),this.sourceNodeOptions.set(e,r);const i=o=>this.handleDragStart(o,e),s=o=>this.handleSelectStart(o);return n.setAttribute("draggable","true"),n.addEventListener("dragstart",i),n.addEventListener("selectstart",s),()=>{this.sourceNodes.delete(e),this.sourceNodeOptions.delete(e),n.removeEventListener("dragstart",i),n.removeEventListener("selectstart",s),n.setAttribute("draggable","false")}}connectDropTarget(e,n){const r=o=>this.handleDragEnter(o,e),i=o=>this.handleDragOver(o,e),s=o=>this.handleDrop(o,e);return n.addEventListener("dragenter",r),n.addEventListener("dragover",i),n.addEventListener("drop",s),()=>{n.removeEventListener("dragenter",r),n.removeEventListener("dragover",i),n.removeEventListener("drop",s)}}addEventListeners(e){e.addEventListener&&(e.addEventListener("dragstart",this.handleTopDragStart),e.addEventListener("dragstart",this.handleTopDragStartCapture,!0),e.addEventListener("dragend",this.handleTopDragEndCapture,!0),e.addEventListener("dragenter",this.handleTopDragEnter),e.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.addEventListener("dragover",this.handleTopDragOver),e.addEventListener("dragover",this.handleTopDragOverCapture,!0),e.addEventListener("drop",this.handleTopDrop),e.addEventListener("drop",this.handleTopDropCapture,!0))}removeEventListeners(e){e.removeEventListener&&(e.removeEventListener("dragstart",this.handleTopDragStart),e.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),e.removeEventListener("dragend",this.handleTopDragEndCapture,!0),e.removeEventListener("dragenter",this.handleTopDragEnter),e.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.removeEventListener("dragover",this.handleTopDragOver),e.removeEventListener("dragover",this.handleTopDragOverCapture,!0),e.removeEventListener("drop",this.handleTopDrop),e.removeEventListener("drop",this.handleTopDropCapture,!0))}getCurrentSourceNodeOptions(){const e=this.monitor.getSourceId(),n=this.sourceNodeOptions.get(e);return m_({dropEffect:this.altKeyPressed?"copy":"move"},n||{})}getCurrentDropEffect(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect}getCurrentSourcePreviewNodeOptions(){const e=this.monitor.getSourceId(),n=this.sourcePreviewNodeOptions.get(e);return m_({anchorX:.5,anchorY:.5,captureDraggingState:!1},n||{})}isDraggingNativeItem(){const e=this.monitor.getItemType();return Object.keys(p_).some(n=>p_[n]===e)}beginDragNativeItem(e,n){this.clearCurrentDragSourceNode(),this.currentNativeSource=WL(e,n),this.currentNativeHandle=this.registry.addSource(e,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle])}setCurrentDragSourceNode(e){this.clearCurrentDragSourceNode(),this.currentDragSourceNode=e;const n=1e3;this.mouseMoveTimeoutTimer=setTimeout(()=>{var r;return(r=this.rootElement)===null||r===void 0?void 0:r.addEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)},n)}clearCurrentDragSourceNode(){if(this.currentDragSourceNode){if(this.currentDragSourceNode=null,this.rootElement){var e;(e=this.window)===null||e===void 0||e.clearTimeout(this.mouseMoveTimeoutTimer||void 0),this.rootElement.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)}return this.mouseMoveTimeoutTimer=null,!0}return!1}handleDragStart(e,n){e.defaultPrevented||(this.dragStartSourceIds||(this.dragStartSourceIds=[]),this.dragStartSourceIds.unshift(n))}handleDragEnter(e,n){this.dragEnterTargetIds.unshift(n)}handleDragOver(e,n){this.dragOverTargetIds===null&&(this.dragOverTargetIds=[]),this.dragOverTargetIds.unshift(n)}handleDrop(e,n){this.dropTargetIds.unshift(n)}constructor(e,n,r){this.sourcePreviewNodes=new Map,this.sourcePreviewNodeOptions=new Map,this.sourceNodes=new Map,this.sourceNodeOptions=new Map,this.dragStartSourceIds=null,this.dropTargetIds=[],this.dragEnterTargetIds=[],this.currentNativeSource=null,this.currentNativeHandle=null,this.currentDragSourceNode=null,this.altKeyPressed=!1,this.mouseMoveTimeoutTimer=null,this.asyncEndDragFrameId=null,this.dragOverTargetIds=null,this.lastClientOffset=null,this.hoverRafId=null,this.getSourceClientOffset=i=>{const s=this.sourceNodes.get(i);return s&&q1(s)||null},this.endDragNativeItem=()=>{this.isDraggingNativeItem()&&(this.actions.endDrag(),this.currentNativeHandle&&this.registry.removeSource(this.currentNativeHandle),this.currentNativeHandle=null,this.currentNativeSource=null)},this.isNodeInDocument=i=>!!(i&&this.document&&this.document.body&&this.document.body.contains(i)),this.endDragIfSourceWasRemovedFromDOM=()=>{const i=this.currentDragSourceNode;i==null||this.isNodeInDocument(i)||(this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover())},this.scheduleHover=i=>{this.hoverRafId===null&&typeof requestAnimationFrame<"u"&&(this.hoverRafId=requestAnimationFrame(()=>{this.monitor.isDragging()&&this.actions.hover(i||[],{clientOffset:this.lastClientOffset}),this.hoverRafId=null}))},this.cancelHover=()=>{this.hoverRafId!==null&&typeof cancelAnimationFrame<"u"&&(cancelAnimationFrame(this.hoverRafId),this.hoverRafId=null)},this.handleTopDragStartCapture=()=>{this.clearCurrentDragSourceNode(),this.dragStartSourceIds=[]},this.handleTopDragStart=i=>{if(i.defaultPrevented)return;const{dragStartSourceIds:s}=this;this.dragStartSourceIds=null;const o=fl(i);this.monitor.isDragging()&&(this.actions.endDrag(),this.cancelHover()),this.actions.beginDrag(s||[],{publishSource:!1,getSourceClientOffset:this.getSourceClientOffset,clientOffset:o});const{dataTransfer:l}=i,u=Dh(l);if(this.monitor.isDragging()){if(l&&typeof l.setDragImage=="function"){const d=this.monitor.getSourceId(),p=this.sourceNodes.get(d),g=this.sourcePreviewNodes.get(d)||p;if(g){const{anchorX:E,anchorY:A,offsetX:R,offsetY:k}=this.getCurrentSourcePreviewNodeOptions(),I=YL(p,g,o,{anchorX:E,anchorY:A},{offsetX:R,offsetY:k});l.setDragImage(g,I.x,I.y)}}try{l==null||l.setData("application/json",{})}catch{}this.setCurrentDragSourceNode(i.target);const{captureDraggingState:c}=this.getCurrentSourcePreviewNodeOptions();c?this.actions.publishDragSource():setTimeout(()=>this.actions.publishDragSource(),0)}else if(u)this.beginDragNativeItem(u);else{if(l&&!l.types&&(i.target&&!i.target.hasAttribute||!i.target.hasAttribute("draggable")))return;i.preventDefault()}},this.handleTopDragEndCapture=()=>{this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleTopDragEnterCapture=i=>{if(this.dragEnterTargetIds=[],this.isDraggingNativeItem()){var s;(s=this.currentNativeSource)===null||s===void 0||s.loadDataTransfer(i.dataTransfer)}if(!this.enterLeaveCounter.enter(i.target)||this.monitor.isDragging())return;const{dataTransfer:l}=i,u=Dh(l);u&&this.beginDragNativeItem(u,l)},this.handleTopDragEnter=i=>{const{dragEnterTargetIds:s}=this;if(this.dragEnterTargetIds=[],!this.monitor.isDragging())return;this.altKeyPressed=i.altKey,s.length>0&&this.actions.hover(s,{clientOffset:fl(i)}),s.some(l=>this.monitor.canDropOnTarget(l))&&(i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect=this.getCurrentDropEffect()))},this.handleTopDragOverCapture=i=>{if(this.dragOverTargetIds=[],this.isDraggingNativeItem()){var s;(s=this.currentNativeSource)===null||s===void 0||s.loadDataTransfer(i.dataTransfer)}},this.handleTopDragOver=i=>{const{dragOverTargetIds:s}=this;if(this.dragOverTargetIds=[],!this.monitor.isDragging()){i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect="none");return}this.altKeyPressed=i.altKey,this.lastClientOffset=fl(i),this.scheduleHover(s),(s||[]).some(l=>this.monitor.canDropOnTarget(l))?(i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect=this.getCurrentDropEffect())):this.isDraggingNativeItem()?i.preventDefault():(i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect="none"))},this.handleTopDragLeaveCapture=i=>{this.isDraggingNativeItem()&&i.preventDefault(),this.enterLeaveCounter.leave(i.target)&&(this.isDraggingNativeItem()&&setTimeout(()=>this.endDragNativeItem(),0),this.cancelHover())},this.handleTopDropCapture=i=>{if(this.dropTargetIds=[],this.isDraggingNativeItem()){var s;i.preventDefault(),(s=this.currentNativeSource)===null||s===void 0||s.loadDataTransfer(i.dataTransfer)}else Dh(i.dataTransfer)&&i.preventDefault();this.enterLeaveCounter.reset()},this.handleTopDrop=i=>{const{dropTargetIds:s}=this;this.dropTargetIds=[],this.actions.hover(s,{clientOffset:fl(i)}),this.actions.drop({dropEffect:this.getCurrentDropEffect()}),this.isDraggingNativeItem()?this.endDragNativeItem():this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleSelectStart=i=>{const s=i.target;typeof s.dragDrop=="function"&&(s.tagName==="INPUT"||s.tagName==="SELECT"||s.tagName==="TEXTAREA"||s.isContentEditable||(i.preventDefault(),s.dragDrop()))},this.options=new XL(n,r),this.actions=e.getActions(),this.monitor=e.getMonitor(),this.registry=e.getRegistry(),this.enterLeaveCounter=new $L(this.isNodeInDocument)}}const eM=function(e,n,r){return new ZL(e,n,r)},y_=()=>{};let Eg={},G1={},K1=null,Q1={mark:y_,measure:y_};try{typeof window<"u"&&(Eg=window),typeof document<"u"&&(G1=document),typeof MutationObserver<"u"&&(K1=MutationObserver),typeof performance<"u"&&(Q1=performance)}catch{}const{userAgent:v_=""}=Eg.navigator||{},Pr=Eg,ye=G1,__=K1,pl=Q1;Pr.document;const Bn=!!ye.documentElement&&!!ye.head&&typeof ye.addEventListener=="function"&&typeof ye.createElement=="function",Y1=~v_.indexOf("MSIE")||~v_.indexOf("Trident/");var _e="classic",X1="duotone",It="sharp",St="sharp-duotone",tM=[_e,X1,It,St],nM={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},E_={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},rM=["kit"],iM=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,sM=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,oM={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},aM={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},lM={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},uM={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},cM={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},hM={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},J1={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},dM=["solid","regular","light","thin","duotone","brands"],Z1=[1,2,3,4,5,6,7,8,9,10],fM=Z1.concat([11,12,13,14,15,16,17,18,19,20]),co={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},pM=[...Object.keys(uM),...dM,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",co.GROUP,co.SWAP_OPACITY,co.PRIMARY,co.SECONDARY].concat(Z1.map(t=>"".concat(t,"x"))).concat(fM.map(t=>"w-".concat(t))),gM={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},mM={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},yM={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},w_={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const Vn="___FONT_AWESOME___",uf=16,eI="fa",tI="svg-inline--fa",di="data-fa-i2svg",cf="data-fa-pseudo-element",vM="data-fa-pseudo-element-pending",wg="data-prefix",Tg="data-icon",T_="fontawesome-i2svg",_M="async",EM=["HTML","HEAD","STYLE","SCRIPT"],nI=(()=>{try{return!0}catch{return!1}})(),rI=[_e,It,St];function Pa(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[_e]}})}const iI={...J1};iI[_e]={...J1[_e],...E_.kit,...E_["kit-duotone"]};const Xr=Pa(iI),hf={...hM};hf[_e]={...hf[_e],...w_.kit,...w_["kit-duotone"]};const oa=Pa(hf),df={...cM};df[_e]={...df[_e],...yM.kit};const Jr=Pa(df),ff={...lM};ff[_e]={...ff[_e],...mM.kit};const wM=Pa(ff),TM=iM,sI="fa-layers-text",IM=sM,SM={...nM};Pa(SM);const CM=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],xh=co,ms=new Set;Object.keys(oa[_e]).map(ms.add.bind(ms));Object.keys(oa[It]).map(ms.add.bind(ms));Object.keys(oa[St]).map(ms.add.bind(ms));const PM=[...rM,...pM],Ro=Pr.FontAwesomeConfig||{};function AM(t){var e=ye.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function RM(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}ye&&typeof ye.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=RM(AM(n));i!=null&&(Ro[r]=i)});const oI={styleDefault:"solid",familyDefault:"classic",cssPrefix:eI,replacementClass:tI,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ro.familyPrefix&&(Ro.cssPrefix=Ro.familyPrefix);const ys={...oI,...Ro};ys.autoReplaceSvg||(ys.observeMutations=!1);const W={};Object.keys(oI).forEach(t=>{Object.defineProperty(W,t,{enumerable:!0,set:function(e){ys[t]=e,ko.forEach(n=>n(W))},get:function(){return ys[t]}})});Object.defineProperty(W,"familyPrefix",{enumerable:!0,set:function(t){ys.cssPrefix=t,ko.forEach(e=>e(W))},get:function(){return ys.cssPrefix}});Pr.FontAwesomeConfig=W;const ko=[];function kM(t){return ko.push(t),()=>{ko.splice(ko.indexOf(t),1)}}const Kn=uf,tn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function bM(t){if(!t||!Bn)return;const e=ye.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=ye.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return ye.head.insertBefore(e,r),t}const OM="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function aa(){let t=12,e="";for(;t-- >0;)e+=OM[Math.random()*62|0];return e}function Os(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ig(t){return t.classList?Os(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function aI(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function DM(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(aI(t[n]),'" '),"").trim()}function mc(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Sg(t){return t.size!==tn.size||t.x!==tn.x||t.y!==tn.y||t.rotate!==tn.rotate||t.flipX||t.flipY}function xM(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(s," ").concat(o," ").concat(l)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:c}}function NM(t){let{transform:e,width:n=uf,height:r=uf,startCentered:i=!1}=t,s="";return i&&Y1?s+="translate(".concat(e.x/Kn-n/2,"em, ").concat(e.y/Kn-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(e.x/Kn,"em), calc(-50% + ").concat(e.y/Kn,"em)) "):s+="translate(".concat(e.x/Kn,"em, ").concat(e.y/Kn,"em) "),s+="scale(".concat(e.size/Kn*(e.flipX?-1:1),", ").concat(e.size/Kn*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var LM=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function lI(){const t=eI,e=tI,n=W.cssPrefix,r=W.replacementClass;let i=LM;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}let I_=!1;function Nh(){W.autoAddCss&&!I_&&(bM(lI()),I_=!0)}var MM={mixout(){return{dom:{css:lI,insertCss:Nh}}},hooks(){return{beforeDOMElementCreation(){Nh()},beforeI2svg(){Nh()}}}};const Fn=Pr||{};Fn[Vn]||(Fn[Vn]={});Fn[Vn].styles||(Fn[Vn].styles={});Fn[Vn].hooks||(Fn[Vn].hooks={});Fn[Vn].shims||(Fn[Vn].shims=[]);var nn=Fn[Vn];const uI=[],cI=function(){ye.removeEventListener("DOMContentLoaded",cI),Ru=1,uI.map(t=>t())};let Ru=!1;Bn&&(Ru=(ye.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ye.readyState),Ru||ye.addEventListener("DOMContentLoaded",cI));function VM(t){Bn&&(Ru?setTimeout(t,0):uI.push(t))}function Aa(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?aI(t):"<".concat(e," ").concat(DM(n),">").concat(r.map(Aa).join(""),"</").concat(e,">")}function S_(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Lh=function(e,n,r,i){var s=Object.keys(e),o=s.length,l=n,u,c,d;for(r===void 0?(u=1,d=e[s[0]]):(u=0,d=r);u<o;u++)c=s[u],d=l(d,e[c],c,e);return d};function FM(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function pf(t){const e=FM(t);return e.length===1?e[0].toString(16):null}function UM(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function C_(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function gf(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=C_(e);typeof nn.hooks.addPack=="function"&&!r?nn.hooks.addPack(t,C_(e)):nn.styles[t]={...nn.styles[t]||{},...i},t==="fas"&&gf("fa",e)}const{styles:$r,shims:jM}=nn,zM={[_e]:Object.values(Jr[_e]),[It]:Object.values(Jr[It]),[St]:Object.values(Jr[St])};let Cg=null,hI={},dI={},fI={},pI={},gI={};const BM={[_e]:Object.keys(Xr[_e]),[It]:Object.keys(Xr[It]),[St]:Object.keys(Xr[St])};function $M(t){return~PM.indexOf(t)}function HM(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!$M(i)?i:null}const mI=()=>{const t=r=>Lh($r,(i,s,o)=>(i[o]=Lh(s,r,{}),i),{});hI=t((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=s}),r)),dI=t((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=s}),r)),gI=t((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(l=>{r[l]=s}),r});const e="far"in $r||W.autoFetchSvg,n=Lh(jM,(r,i)=>{const s=i[0];let o=i[1];const l=i[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});fI=n.names,pI=n.unicodes,Cg=yc(W.styleDefault,{family:W.familyDefault})};kM(t=>{Cg=yc(t.styleDefault,{family:W.familyDefault})});mI();function Pg(t,e){return(hI[t]||{})[e]}function WM(t,e){return(dI[t]||{})[e]}function ar(t,e){return(gI[t]||{})[e]}function yI(t){return fI[t]||{prefix:null,iconName:null}}function qM(t){const e=pI[t],n=Pg("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ar(){return Cg}const Ag=()=>({prefix:null,iconName:null,rest:[]});function yc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=_e}=e,r=Xr[n][t],i=oa[n][t]||oa[n][r],s=t in nn.styles?t:null;return i||s||null}const GM={[_e]:Object.keys(Jr[_e]),[It]:Object.keys(Jr[It]),[St]:Object.keys(Jr[St])};function vc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[_e]:"".concat(W.cssPrefix,"-").concat(_e),[It]:"".concat(W.cssPrefix,"-").concat(It),[St]:"".concat(W.cssPrefix,"-").concat(St)};let i=null,s=_e;const o=tM.filter(u=>u!==X1);o.forEach(u=>{(t.includes(r[u])||t.some(c=>GM[u].includes(c)))&&(s=u)});const l=t.reduce((u,c)=>{const d=HM(W.cssPrefix,c);if($r[c]?(c=zM[s].includes(c)?wM[s][c]:c,i=c,u.prefix=c):BM[s].indexOf(c)>-1?(i=c,u.prefix=yc(c,{family:s})):d?u.iconName=d:c!==W.replacementClass&&!o.some(p=>c===r[p])&&u.rest.push(c),!n&&u.prefix&&u.iconName){const p=i==="fa"?yI(u.iconName):{},g=ar(u.prefix,u.iconName);p.prefix&&(i=null),u.iconName=p.iconName||g||u.iconName,u.prefix=p.prefix||u.prefix,u.prefix==="far"&&!$r.far&&$r.fas&&!W.autoFetchSvg&&(u.prefix="fas")}return u},Ag());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===It&&($r.fass||W.autoFetchSvg)&&(l.prefix="fass",l.iconName=ar(l.prefix,l.iconName)||l.iconName),!l.prefix&&s===St&&($r.fasds||W.autoFetchSvg)&&(l.prefix="fasds",l.iconName=ar(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=Ar()||"fas"),l}class KM{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...i[s]},gf(s,i[s]);const o=Jr[_e][s];o&&gf(o,i[s]),mI()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:l}=r[i],u=l[2];e[s]||(e[s]={}),u.length>0&&u.forEach(c=>{typeof c=="string"&&(e[s][c]=l)}),e[s][o]=l}),e}}let P_=[],Bi={};const es={},QM=Object.keys(es);function YM(t,e){let{mixoutsTo:n}=e;return P_=t,Bi={},Object.keys(es).forEach(r=>{QM.indexOf(r)===-1&&delete es[r]}),P_.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{Bi[o]||(Bi[o]=[]),Bi[o].push(s[o])})}r.provides&&r.provides(es)}),n}function mf(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(Bi[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function fi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(Bi[t]||[]).forEach(s=>{s.apply(null,n)})}function Rr(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return es[t]?es[t].apply(null,e):void 0}function yf(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Ar();if(e)return e=ar(n,e)||e,S_(vI.definitions,n,e)||S_(nn.styles,n,e)}const vI=new KM,XM=()=>{W.autoReplaceSvg=!1,W.observeMutations=!1,fi("noAuto")},JM={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Bn?(fi("beforeI2svg",t),Rr("pseudoElements2svg",t),Rr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;W.autoReplaceSvg===!1&&(W.autoReplaceSvg=!0),W.observeMutations=!0,VM(()=>{eV({autoReplaceSvgRoot:e}),fi("watch",t)})}},ZM={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ar(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=yc(t[0]);return{prefix:n,iconName:ar(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(W.cssPrefix,"-"))>-1||t.match(TM))){const e=vc(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Ar(),iconName:ar(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Ar();return{prefix:e,iconName:ar(e,t)||t}}}},kt={noAuto:XM,config:W,dom:JM,parse:ZM,library:vI,findIconDefinition:yf,toHtml:Aa},eV=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=ye}=t;(Object.keys(nn.styles).length>0||W.autoFetchSvg)&&Bn&&W.autoReplaceSvg&&kt.dom.i2svg({node:e})};function _c(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Aa(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Bn)return;const n=ye.createElement("div");return n.innerHTML=t.html,n.children}}),t}function tV(t){let{children:e,main:n,mask:r,attributes:i,styles:s,transform:o}=t;if(Sg(o)&&n.found&&!r.found){const{width:l,height:u}=n,c={x:l/u/2,y:.5};i.style=mc({...s,"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")})}return[{tag:"svg",attributes:i,children:e}]}function nV(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(W.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:o},children:r}]}]}function Rg(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:l,maskId:u,titleId:c,extra:d,watchable:p=!1}=t,{width:g,height:E}=n.found?n:e,A=r==="fak",R=[W.replacementClass,i?"".concat(W.cssPrefix,"-").concat(i):""].filter(L=>d.classes.indexOf(L)===-1).filter(L=>L!==""||!!L).concat(d.classes).join(" ");let k={children:[],attributes:{...d.attributes,"data-prefix":r,"data-icon":i,class:R,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(E)}};const _=A&&!~d.classes.indexOf("fa-fw")?{width:"".concat(g/E*16*.0625,"em")}:{};p&&(k.attributes[di]=""),l&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(c||aa())},children:[l]}),delete k.attributes.title);const v={...k,prefix:r,iconName:i,main:e,mask:n,maskId:u,transform:s,symbol:o,styles:{..._,...d.styles}},{children:I,attributes:D}=n.found&&e.found?Rr("generateAbstractMask",v)||{children:[],attributes:{}}:Rr("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=I,v.attributes=D,o?nV(v):tV(v)}function A_(t){const{content:e,width:n,height:r,transform:i,title:s,extra:o,watchable:l=!1}=t,u={...o.attributes,...s?{title:s}:{},class:o.classes.join(" ")};l&&(u[di]="");const c={...o.styles};Sg(i)&&(c.transform=NM({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const d=mc(c);d.length>0&&(u.style=d);const p=[];return p.push({tag:"span",attributes:u,children:[e]}),s&&p.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),p}function rV(t){const{content:e,title:n,extra:r}=t,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},s=mc(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Mh}=nn;function vf(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(W.cssPrefix,"-").concat(xh.GROUP)},children:[{tag:"path",attributes:{class:"".concat(W.cssPrefix,"-").concat(xh.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(W.cssPrefix,"-").concat(xh.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const iV={found:!1,width:512,height:512};function sV(t,e){!nI&&!W.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function _f(t,e){let n=e;return e==="fa"&&W.styleDefault!==null&&(e=Ar()),new Promise((r,i)=>{if(n==="fa"){const s=yI(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Mh[e]&&Mh[e][t]){const s=Mh[e][t];return r(vf(s))}sV(t,e),r({...iV,icon:W.showMissingIcons&&t?Rr("missingIconAbstract")||{}:{}})})}const R_=()=>{},Ef=W.measurePerformance&&pl&&pl.mark&&pl.measure?pl:{mark:R_,measure:R_},ho='FA "6.6.0"',oV=t=>(Ef.mark("".concat(ho," ").concat(t," begins")),()=>_I(t)),_I=t=>{Ef.mark("".concat(ho," ").concat(t," ends")),Ef.measure("".concat(ho," ").concat(t),"".concat(ho," ").concat(t," begins"),"".concat(ho," ").concat(t," ends"))};var kg={begin:oV,end:_I};const Ml=()=>{};function k_(t){return typeof(t.getAttribute?t.getAttribute(di):null)=="string"}function aV(t){const e=t.getAttribute?t.getAttribute(wg):null,n=t.getAttribute?t.getAttribute(Tg):null;return e&&n}function lV(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(W.replacementClass)}function uV(){return W.autoReplaceSvg===!0?Vl.replace:Vl[W.autoReplaceSvg]||Vl.replace}function cV(t){return ye.createElementNS("http://www.w3.org/2000/svg",t)}function hV(t){return ye.createElement(t)}function EI(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?cV:hV}=e;if(typeof t=="string")return ye.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(EI(s,{ceFn:n}))}),r}function dV(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Vl={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(EI(n),e)}),e.getAttribute(di)===null&&W.keepOriginalSource){let n=ye.createComment(dV(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Ig(e).indexOf(W.replacementClass))return Vl.replace(t);const r=new RegExp("".concat(W.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,l)=>(l===W.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>Aa(s)).join(`
`);e.setAttribute(di,""),e.innerHTML=i}};function b_(t){t()}function wI(t,e){const n=typeof e=="function"?e:Ml;if(t.length===0)n();else{let r=b_;W.mutateApproach===_M&&(r=Pr.requestAnimationFrame||b_),r(()=>{const i=uV(),s=kg.begin("mutate");t.map(i),s(),n()})}}let bg=!1;function TI(){bg=!0}function wf(){bg=!1}let ku=null;function O_(t){if(!__||!W.observeMutations)return;const{treeCallback:e=Ml,nodeCallback:n=Ml,pseudoElementsCallback:r=Ml,observeMutationsRoot:i=ye}=t;ku=new __(s=>{if(bg)return;const o=Ar();Os(s).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!k_(l.addedNodes[0])&&(W.searchPseudoElements&&r(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&W.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&k_(l.target)&&~CM.indexOf(l.attributeName))if(l.attributeName==="class"&&aV(l.target)){const{prefix:u,iconName:c}=vc(Ig(l.target));l.target.setAttribute(wg,u||o),c&&l.target.setAttribute(Tg,c)}else lV(l.target)&&n(l.target)})}),Bn&&ku.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function fV(){ku&&ku.disconnect()}function pV(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],l=s.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function gV(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=vc(Ig(t));return i.prefix||(i.prefix=Ar()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=WM(i.prefix,t.innerText)||Pg(i.prefix,pf(t.innerText))),!i.iconName&&W.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function mV(t){const e=Os(t.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return W.autoA11y&&(n?e["aria-labelledby"]="".concat(W.replacementClass,"-title-").concat(r||aa()):(e["aria-hidden"]="true",e.focusable="false")),e}function yV(){return{iconName:null,title:null,titleId:null,prefix:null,transform:tn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function D_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=gV(t),s=mV(t),o=mf("parseNodeAttributes",{},t);let l=e.styleParser?pV(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:tn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s},...o}}const{styles:vV}=nn;function II(t){const e=W.autoReplaceSvg==="nest"?D_(t,{styleParser:!1}):D_(t);return~e.extra.classes.indexOf(sI)?Rr("generateLayersText",t,e):Rr("generateSvgReplacementMutation",t,e)}let dn=new Set;rI.map(t=>{dn.add("fa-".concat(t))});Object.keys(Xr[_e]).map(dn.add.bind(dn));Object.keys(Xr[It]).map(dn.add.bind(dn));Object.keys(Xr[St]).map(dn.add.bind(dn));dn=[...dn];function x_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Bn)return Promise.resolve();const n=ye.documentElement.classList,r=d=>n.add("".concat(T_,"-").concat(d)),i=d=>n.remove("".concat(T_,"-").concat(d)),s=W.autoFetchSvg?dn:rI.map(d=>"fa-".concat(d)).concat(Object.keys(vV));s.includes("fa")||s.push("fa");const o=[".".concat(sI,":not([").concat(di,"])")].concat(s.map(d=>".".concat(d,":not([").concat(di,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=Os(t.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();const u=kg.begin("onTree"),c=l.reduce((d,p)=>{try{const g=II(p);g&&d.push(g)}catch(g){nI||g.name==="MissingIcon"&&console.error(g)}return d},[]);return new Promise((d,p)=>{Promise.all(c).then(g=>{wI(g,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),u(),d()})}).catch(g=>{u(),p(g)})})}function _V(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;II(t).then(n=>{n&&wI([n],e)})}function EV(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:yf(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:yf(i||{})),t(r,{...n,mask:i})}}const wV=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=tn,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:l=null,classes:u=[],attributes:c={},styles:d={}}=e;if(!t)return;const{prefix:p,iconName:g,icon:E}=t;return _c({type:"icon",...t},()=>(fi("beforeDOMElementCreation",{iconDefinition:t,params:e}),W.autoA11y&&(o?c["aria-labelledby"]="".concat(W.replacementClass,"-title-").concat(l||aa()):(c["aria-hidden"]="true",c.focusable="false")),Rg({icons:{main:vf(E),mask:i?vf(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:g,transform:{...tn,...n},symbol:r,title:o,maskId:s,titleId:l,extra:{attributes:c,styles:d,classes:u}})))};var TV={mixout(){return{icon:EV(wV)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=x_,t.nodeCallback=_V,t}}},provides(t){t.i2svg=function(e){const{node:n=ye,callback:r=()=>{}}=e;return x_(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:l,symbol:u,mask:c,maskId:d,extra:p}=n;return new Promise((g,E)=>{Promise.all([_f(r,o),c.iconName?_f(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(A=>{let[R,k]=A;g([e,Rg({icons:{main:R,mask:k},prefix:o,iconName:r,transform:l,symbol:u,maskId:d,title:i,titleId:s,extra:p,watchable:!0})])}).catch(E)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:s,styles:o}=e;const l=mc(o);l.length>0&&(r.style=l);let u;return Sg(s)&&(u=Rr("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:r}}}},IV={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return _c({type:"layer"},()=>{fi("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(W.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},SV={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=e;return _c({type:"counter",content:t},()=>(fi("beforeDOMElementCreation",{content:t,params:e}),rV({content:t.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(W.cssPrefix,"-layers-counter"),...r]}})))}}}},CV={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=tn,title:r=null,classes:i=[],attributes:s={},styles:o={}}=e;return _c({type:"text",content:t},()=>(fi("beforeDOMElementCreation",{content:t,params:e}),A_({content:t,transform:{...tn,...n},title:r,extra:{attributes:s,styles:o,classes:["".concat(W.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:s}=n;let o=null,l=null;if(Y1){const u=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/u,l=c.height/u}return W.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,A_({content:e.innerHTML,width:o,height:l,transform:i,title:r,extra:s,watchable:!0})])}}};const PV=new RegExp('"',"ug"),N_=[1105920,1112319],L_={FontAwesome:{normal:"fas",400:"fas"},...aM,...oM,...gM},Tf=Object.keys(L_).reduce((t,e)=>(t[e.toLowerCase()]=L_[e],t),{}),AV=Object.keys(Tf).reduce((t,e)=>{const n=Tf[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function RV(t){const e=t.replace(PV,""),n=UM(e,0),r=n>=N_[0]&&n<=N_[1],i=e.length===2?e[0]===e[1]:!1;return{value:pf(i?e[0]:e),isSecondary:r||i}}function kV(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(Tf[n]||{})[i]||AV[n]}function M_(t,e){const n="".concat(vM).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const o=Os(t.children).filter(g=>g.getAttribute(cf)===e)[0],l=Pr.getComputedStyle(t,e),u=l.getPropertyValue("font-family"),c=u.match(IM),d=l.getPropertyValue("font-weight"),p=l.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&p!=="none"&&p!==""){const g=l.getPropertyValue("content");let E=kV(u,d);const{value:A,isSecondary:R}=RV(g),k=c[0].startsWith("FontAwesome");let _=Pg(E,A),v=_;if(k){const I=qM(A);I.iconName&&I.prefix&&(_=I.iconName,E=I.prefix)}if(_&&!R&&(!o||o.getAttribute(wg)!==E||o.getAttribute(Tg)!==v)){t.setAttribute(n,v),o&&t.removeChild(o);const I=yV(),{extra:D}=I;D.attributes[cf]=e,_f(_,E).then(L=>{const U=Rg({...I,icons:{main:L,mask:Ag()},prefix:E,iconName:v,extra:D,watchable:!0}),w=ye.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(w,t.firstChild):t.appendChild(w),w.outerHTML=U.map(y=>Aa(y)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function bV(t){return Promise.all([M_(t,"::before"),M_(t,"::after")])}function OV(t){return t.parentNode!==document.head&&!~EM.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(cf)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function V_(t){if(Bn)return new Promise((e,n)=>{const r=Os(t.querySelectorAll("*")).filter(OV).map(bV),i=kg.begin("searchPseudoElements");TI(),Promise.all(r).then(()=>{i(),wf(),e()}).catch(()=>{i(),wf(),n()})})}var DV={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=V_,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=ye}=e;W.searchPseudoElements&&V_(n)}}};let F_=!1;var xV={mixout(){return{dom:{unwatch(){TI(),F_=!0}}}},hooks(){return{bootstrap(){O_(mf("mutationObserverCallbacks",{}))},noAuto(){fV()},watch(t){const{observeMutationsRoot:e}=t;F_?wf():O_(mf("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const U_=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var NV={mixout(){return{parse:{transform:t=>U_(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=U_(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:s}=e;const o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},p={transform:"translate(".concat(s/2*-1," -256)")},g={outer:o,inner:d,path:p};return{tag:"g",attributes:{...g.outer},children:[{tag:"g",attributes:{...g.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...g.path}}]}]}}}};const Vh={x:0,y:0,width:"100%",height:"100%"};function j_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function LV(t){return t.tag==="g"?t.children:[t]}var MV={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?vc(n.split(" ").map(i=>i.trim())):Ag();return r.prefix||(r.prefix=Ar()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:l}=e;const{width:u,icon:c}=i,{width:d,icon:p}=s,g=xM({transform:l,containerWidth:d,iconWidth:u}),E={tag:"rect",attributes:{...Vh,fill:"white"}},A=c.children?{children:c.children.map(j_)}:{},R={tag:"g",attributes:{...g.inner},children:[j_({tag:c.tag,attributes:{...c.attributes,...g.path},...A})]},k={tag:"g",attributes:{...g.outer},children:[R]},_="mask-".concat(o||aa()),v="clip-".concat(o||aa()),I={tag:"mask",attributes:{...Vh,id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[E,k]},D={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:LV(p)},I]};return n.push(D,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(_,")"),...Vh}}),{children:n,attributes:r}}}},VV={provides(t){let e=!1;Pr.matchMedia&&(e=Pr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...i,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},FV={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},UV=[MM,TV,IV,SV,CV,DV,xV,NV,MV,VV,FV];YM(UV,{mixoutsTo:kt});kt.noAuto;kt.config;kt.library;kt.dom;const If=kt.parse;kt.findIconDefinition;kt.toHtml;const jV=kt.icon;kt.layer;kt.text;kt.counter;var SI={exports:{}},zV="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",BV=zV,$V=BV;function CI(){}function PI(){}PI.resetWarningCache=CI;var HV=function(){function t(r,i,s,o,l,u){if(u!==$V){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:PI,resetWarningCache:CI};return n.PropTypes=n,n};SI.exports=HV();var WV=SI.exports;const te=Pf(WV);function z_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Jt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?z_(Object(n),!0).forEach(function(r){$i(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):z_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function bu(t){"@babel/helpers - typeof";return bu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},bu(t)}function $i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function qV(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function GV(t,e){if(t==null)return{};var n=qV(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Sf(t){return KV(t)||QV(t)||YV(t)||XV()}function KV(t){if(Array.isArray(t))return Cf(t)}function QV(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function YV(t,e){if(t){if(typeof t=="string")return Cf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Cf(t,e)}}function Cf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function XV(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function JV(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,l=t.flash,u=t.spin,c=t.spinPulse,d=t.spinReverse,p=t.pulse,g=t.fixedWidth,E=t.inverse,A=t.border,R=t.listItem,k=t.flip,_=t.size,v=t.rotation,I=t.pull,D=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":l,"fa-spin":u,"fa-spin-reverse":d,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":g,"fa-inverse":E,"fa-border":A,"fa-li":R,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},$i(e,"fa-".concat(_),typeof _<"u"&&_!==null),$i(e,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),$i(e,"fa-pull-".concat(I),typeof I<"u"&&I!==null),$i(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(D).map(function(L){return D[L]?L:null}).filter(function(L){return L})}function ZV(t){return t=t-0,t===t}function AI(t){return ZV(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var e4=["style"];function t4(t){return t.charAt(0).toUpperCase()+t.slice(1)}function n4(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=AI(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[t4(i)]=s:e[i]=s,e},{})}function RI(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(u){return RI(t,u)}),i=Object.keys(e.attributes||{}).reduce(function(u,c){var d=e.attributes[c];switch(c){case"class":u.attrs.className=d,delete e.attributes.class;break;case"style":u.attrs.style=n4(d);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=d:u.attrs[AI(c)]=d}return u},{attrs:{}}),s=n.style,o=s===void 0?{}:s,l=GV(n,e4);return i.attrs.style=Jt(Jt({},i.attrs.style),o),t.apply(void 0,[e.tag,Jt(Jt({},i.attrs),l)].concat(Sf(r)))}var kI=!1;try{kI=!0}catch{}function r4(){if(!kI&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function B_(t){if(t&&bu(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(If.icon)return If.icon(t);if(t===null)return null;if(t&&bu(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Fh(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?$i({},t,e):{}}var $_={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Ou=ua.forwardRef(function(t,e){var n=Jt(Jt({},$_),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,l=n.title,u=n.titleId,c=n.maskId,d=B_(r),p=Fh("classes",[].concat(Sf(JV(n)),Sf((o||"").split(" ")))),g=Fh("transform",typeof n.transform=="string"?If.transform(n.transform):n.transform),E=Fh("mask",B_(i)),A=jV(d,Jt(Jt(Jt(Jt({},p),g),E),{},{symbol:s,title:l,titleId:u,maskId:c}));if(!A)return r4("Could not find icon",d),null;var R=A.abstract,k={ref:e};return Object.keys(n).forEach(function(_){$_.hasOwnProperty(_)||(k[_]=n[_])}),i4(R[0],k)});Ou.displayName="FontAwesomeIcon";Ou.propTypes={beat:te.bool,border:te.bool,beatFade:te.bool,bounce:te.bool,className:te.string,fade:te.bool,flash:te.bool,mask:te.oneOfType([te.object,te.array,te.string]),maskId:te.string,fixedWidth:te.bool,inverse:te.bool,flip:te.oneOf([!0,!1,"horizontal","vertical","both"]),icon:te.oneOfType([te.object,te.array,te.string]),listItem:te.bool,pull:te.oneOf(["right","left"]),pulse:te.bool,rotation:te.oneOf([0,90,180,270]),shake:te.bool,size:te.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:te.bool,spinPulse:te.bool,spinReverse:te.bool,symbol:te.oneOfType([te.bool,te.string]),title:te.string,titleId:te.string,transform:te.oneOfType([te.string,te.object]),swapOpacity:te.bool};var i4=RI.bind(null,ua.createElement);const s4={prefix:"fas",iconName:"pencil",icon:[512,512,[9999,61504,"pencil-alt"],"f303","M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]},o4=s4,a4={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},l4=a4,u4={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},c4=({item:t,progress:e,onRemove:n,onEdit:r})=>{const[i,s]=N.useState(!1),[o,l]=N.useState(t.name),[u,c]=N.useState(t.price.toFixed(2)),d=Math.min(e/t.price*100,100),p=()=>{r(t.id,o,parseFloat(u)),s(!1)};return j.jsxs("div",{className:"bg-white border border-gray-300 rounded-lg p-4 mb-4 shadow-lg transition-shadow hover:shadow-xl",children:[j.jsxs("div",{className:"flex justify-between items-center mb-2",children:[j.jsxs("div",{className:"flex items-center",children:[i?j.jsx("input",{type:"text",value:o,onChange:g=>l(g.target.value),className:"mr-2 p-1 border border-gray-300 rounded-lg text-black"}):j.jsx("div",{className:"font-bold text-lg text-black",children:t.name}),i?j.jsx("input",{type:"number",value:u,onChange:g=>c(g.target.value),className:"mr-2 p-1 border border-gray-300 rounded-lg text-black"}):j.jsx("div",{className:"text-gray-600",children:t.price.toFixed(2)}),j.jsx("button",{onClick:i?p:()=>s(!0),children:j.jsx(Ou,{icon:i?u4:o4,className:"ml-2 text-blue-500"})})]}),j.jsx("button",{onClick:n,children:j.jsx(Ou,{icon:l4,className:"text-red-500"})})]}),j.jsxs("div",{className:"relative w-full bg-gray-200 rounded-full h-4 mb-4",children:[j.jsx("div",{className:`absolute top-0 left-0 h-4 rounded-full transition-width duration-200 ${d===100?"bg-green-500":"bg-yellow-500"}`,style:{width:`${d}%`}}),j.jsxs("span",{className:"absolute inset-0 flex justify-center items-center text-black text-sm",children:[d.toFixed(2),"%"]})]})]})},H_="ITEM",h4=({item:t,index:e,moveItem:n,progress:r,onRemove:i,onEdit:s})=>{const o=ua.useRef(null),[,l]=jL({accept:H_,hover:(d,p)=>{var v;if(!o.current)return;const g=d.index,E=e;if(g===E)return;const A=(v=o.current)==null?void 0:v.getBoundingClientRect(),R=(A.bottom-A.top)/2,_=p.getClientOffset().y-A.top;g<E&&_<R||g>E&&_>R||(n(g,E),d.index=E)}}),[{isDragging:u},c]=DL({type:H_,item:{index:e},collect:d=>({isDragging:d.isDragging()})});return c(l(o)),j.jsx("div",{ref:o,className:"transition-opacity",style:{opacity:u?.5:1},children:j.jsx(c4,{item:t,progress:r,onRemove:i,onEdit:s})})},d4=({items:t,progress:e,moveItem:n,handleRemoveItem:r,handleEditItem:i})=>{const s=t.reduce((o,l,u)=>{if(e<=0)return o;const c=Math.max(e-o.total,0),d=Math.min(c,l.price);return o.total+=d,o.items[u]=d,o},{total:0,items:t.map(()=>0)});return j.jsx(lL,{backend:eM,children:j.jsx("div",{className:"bg-gray-100 p-8 rounded-lg shadow-lg max-w-lg mx-auto",children:t.map((o,l)=>j.jsx(h4,{item:o,index:l,moveItem:n,progress:s.items[l],onRemove:()=>r(o.id),onEdit:i},o.id))})})},f4=async(t,e)=>{if(!t)return;const n=f1(A1,"users",t.uid);try{await VN(n,e,{merge:!0})}catch(r){console.error("Error saving user data",r)}},p4=async t=>{if(!t)return null;const e=f1(A1,"users",t.uid);try{const n=await LN(e);return n.exists()?n.data():null}catch(n){return console.error("Error fetching user data",n),null}},g4=new Date().toLocaleString("default",{month:"long"}).toLowerCase(),W_=Au.find(t=>t.value===g4)||Au[0],m4=()=>{const{currentUser:t,logout:e}=fg(),[n,r]=N.useState(""),[i,s]=N.useState(i_[0].value),[o,l]=N.useState(0),[u,c]=N.useState(!1),[d,p]=N.useState(r_[0].symbol),[g,E]=N.useState(W_.value),[A,R]=N.useState(W_.hours),[k,_]=N.useState([]),[v,I]=N.useState(!1),D=N.useRef(null);N.useEffect(()=>{(async()=>{if(t){const b=await p4(t);b&&(r(b.userInputNumber),_(b.items),l(b.amount),p(b.currency),s(b.period),I(!0))}})()},[t]),N.useEffect(()=>{const S=Au.find(b=>b.value===g);S&&R(S.hours)},[g]),N.useEffect(()=>{let S=null;return u?(D.current||(D.current=new Date),S=setInterval(()=>{if(D.current){const C=(new Date().getTime()-D.current.getTime())/1e3,Ce=typeof n=="number"?n:0;let vt=0;i==="hour"&&(vt=60*60),i==="day"&&(vt=60*60*8),i==="week"&&(vt=60*60*8*5),i==="month"&&(vt=typeof A=="number"?A*3600:0);const Lr=Ce/vt;l(C*Lr)}},1e3)):(D.current=null,S&&clearInterval(S)),()=>{S&&clearInterval(S)}},[u,n,i,A]),N.useEffect(()=>{t&&v&&f4(t,{userInputNumber:Number(n),items:k,amount:o,currency:d,period:i}).catch(S=>console.error("Error saving user data:",S))},[t,n,v,k,o,d,i]);const L=()=>{c(!u)},U=()=>{l(0),c(!1),D.current=null},w=(S,b)=>{const C={id:`item-${k.length+1}`,name:S,price:b,accumulated:0};_([...k,C])},y=S=>{_(k.filter(b=>b.id!==S))},T=(S,b,C)=>{_(k.map(Ce=>Ce.id===S?{...Ce,name:b,price:C}:Ce))},P=N.useCallback((S,b)=>{const C=k[S],Ce=[...k];Ce.splice(S,1),Ce.splice(b,0,C),_(Ce)},[k]);return j.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 text-white p-4",children:[j.jsx("h1",{className:"text-4xl font-bold mb-8",children:"Wage Counter Motivation"}),j.jsx("button",{onClick:e,className:"bg-red-500 text-white p-2 rounded mb-8",children:"Logout"}),j.jsxs("div",{className:"bg-white text-black p-8 rounded-lg shadow-lg w-full max-w-md",children:[j.jsx("input",{type:"number",placeholder:"Enter rate per period",value:n,onChange:S=>r(parseFloat(S.target.value)),className:"mb-4 p-2 border rounded w-full"}),j.jsx("select",{value:d,onChange:S=>p(S.target.value),className:"mb-4 p-2 border rounded w-full",children:r_.map(S=>j.jsx("option",{value:S.symbol,children:S.label},S.symbol))}),j.jsx("select",{value:i,onChange:S=>s(S.target.value),className:"mb-4 p-2 border rounded w-full",children:i_.map(S=>j.jsx("option",{value:S.value,children:S.label},S.value))}),j.jsxs("div",{className:"mb-4 flex items-center",children:[j.jsx("select",{value:g,onChange:S=>E(S.target.value),className:"p-2 border rounded mr-2 w-1/2",children:Au.map(S=>j.jsx("option",{value:S.value,children:S.label},S.value))}),j.jsx("input",{type:"number",placeholder:"Working hours",value:A,onChange:S=>R(parseFloat(S.target.value)),className:"p-2 border rounded w-1/2"})]}),j.jsxs("div",{className:"flex items-center justify-between",children:[j.jsx("button",{onClick:L,className:"bg-blue-500 text-white p-2 rounded w-1/2 mr-2",children:u?"Pause":"Start"}),j.jsx("button",{onClick:U,className:"bg-red-500 text-white p-2 rounded w-1/2",children:"Reset"})]})]}),j.jsxs("div",{className:"mt-8 text-2xl",children:[j.jsx("span",{children:o.toFixed(2)})," ",j.jsx("span",{children:d})]}),j.jsx(WN,{onAddItem:w}),j.jsx(d4,{items:k,progress:o,moveItem:P,handleRemoveItem:y,handleEditItem:T})]})},y4=()=>j.jsx(DA,{basename:"/wage-counter",children:j.jsx(zN,{children:j.jsxs(CA,{children:[j.jsx(Ci,{path:"/login",element:j.jsx(n_,{component:BN})}),j.jsx(Ci,{path:"/register",element:j.jsx(n_,{component:$N})}),j.jsx(Ci,{path:"/",element:j.jsx(HN,{}),children:j.jsx(Ci,{path:"/",element:j.jsx(m4,{})})}),j.jsx(Ci,{path:"*",element:j.jsx(Cp,{to:"/"})})]})})});Uh.createRoot(document.getElementById("root")).render(j.jsx(ua.StrictMode,{children:j.jsx(y4,{})}));
