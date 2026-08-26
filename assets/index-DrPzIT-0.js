(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(r){if(r.ep)return;r.ep=!0;const l=i(r);fetch(r.href,l)}})();function gk(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var b0={exports:{}},hc={};var _y;function mk(){if(_y)return hc;_y=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(n,r,l){var c=null;if(l!==void 0&&(c=""+l),r.key!==void 0&&(c=""+r.key),"key"in r){l={};for(var d in r)d!=="key"&&(l[d]=r[d])}else l=r;return r=l.ref,{$$typeof:a,type:n,key:c,ref:r!==void 0?r:null,props:l}}return hc.Fragment=t,hc.jsx=i,hc.jsxs=i,hc}var Sy;function xk(){return Sy||(Sy=1,b0.exports=mk()),b0.exports}var k=xk(),v0={exports:{}},Rt={};var ky;function bk(){if(ky)return Rt;ky=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),b=Symbol.iterator;function v(C){return C===null||typeof C!="object"?null:(C=b&&C[b]||C["@@iterator"],typeof C=="function"?C:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,S={};function E(C,$,nt){this.props=C,this.context=$,this.refs=S,this.updater=nt||_}E.prototype.isReactComponent={},E.prototype.setState=function(C,$){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,$,"setState")},E.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function M(){}M.prototype=E.prototype;function A(C,$,nt){this.props=C,this.context=$,this.refs=S,this.updater=nt||_}var O=A.prototype=new M;O.constructor=A,w(O,E.prototype),O.isPureReactComponent=!0;var z=Array.isArray;function H(){}var j={H:null,A:null,T:null,S:null},F=Object.prototype.hasOwnProperty;function U(C,$,nt){var it=nt.ref;return{$$typeof:a,type:C,key:$,ref:it!==void 0?it:null,props:nt}}function W(C,$){return U(C.type,$,C.props)}function et(C){return typeof C=="object"&&C!==null&&C.$$typeof===a}function Y(C){var $={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(nt){return $[nt]})}var at=/\/+/g;function ct(C,$){return typeof C=="object"&&C!==null&&C.key!=null?Y(""+C.key):$.toString(36)}function lt(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(H,H):(C.status="pending",C.then(function($){C.status==="pending"&&(C.status="fulfilled",C.value=$)},function($){C.status==="pending"&&(C.status="rejected",C.reason=$)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function B(C,$,nt,it,ft){var ht=typeof C;(ht==="undefined"||ht==="boolean")&&(C=null);var St=!1;if(C===null)St=!0;else switch(ht){case"bigint":case"string":case"number":St=!0;break;case"object":switch(C.$$typeof){case a:case t:St=!0;break;case m:return St=C._init,B(St(C._payload),$,nt,it,ft)}}if(St)return ft=ft(C),St=it===""?"."+ct(C,0):it,z(ft)?(nt="",St!=null&&(nt=St.replace(at,"$&/")+"/"),B(ft,$,nt,"",function(Ei){return Ei})):ft!=null&&(et(ft)&&(ft=W(ft,nt+(ft.key==null||C&&C.key===ft.key?"":(""+ft.key).replace(at,"$&/")+"/")+St)),$.push(ft)),1;St=0;var te=it===""?".":it+":";if(z(C))for(var Lt=0;Lt<C.length;Lt++)it=C[Lt],ht=te+ct(it,Lt),St+=B(it,$,nt,ht,ft);else if(Lt=v(C),typeof Lt=="function")for(C=Lt.call(C),Lt=0;!(it=C.next()).done;)it=it.value,ht=te+ct(it,Lt++),St+=B(it,$,nt,ht,ft);else if(ht==="object"){if(typeof C.then=="function")return B(lt(C),$,nt,it,ft);throw $=String(C),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return St}function X(C,$,nt){if(C==null)return C;var it=[],ft=0;return B(C,it,"","",function(ht){return $.call(nt,ht,ft++)}),it}function st(C){if(C._status===-1){var $=C._result;$=$(),$.then(function(nt){(C._status===0||C._status===-1)&&(C._status=1,C._result=nt)},function(nt){(C._status===0||C._status===-1)&&(C._status=2,C._result=nt)}),C._status===-1&&(C._status=0,C._result=$)}if(C._status===1)return C._result.default;throw C._result}var ut=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},D={map:X,forEach:function(C,$,nt){X(C,function(){$.apply(this,arguments)},nt)},count:function(C){var $=0;return X(C,function(){$++}),$},toArray:function(C){return X(C,function($){return $})||[]},only:function(C){if(!et(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return Rt.Activity=x,Rt.Children=D,Rt.Component=E,Rt.Fragment=i,Rt.Profiler=r,Rt.PureComponent=A,Rt.StrictMode=n,Rt.Suspense=f,Rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=j,Rt.__COMPILER_RUNTIME={__proto__:null,c:function(C){return j.H.useMemoCache(C)}},Rt.cache=function(C){return function(){return C.apply(null,arguments)}},Rt.cacheSignal=function(){return null},Rt.cloneElement=function(C,$,nt){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var it=w({},C.props),ft=C.key;if($!=null)for(ht in $.key!==void 0&&(ft=""+$.key),$)!F.call($,ht)||ht==="key"||ht==="__self"||ht==="__source"||ht==="ref"&&$.ref===void 0||(it[ht]=$[ht]);var ht=arguments.length-2;if(ht===1)it.children=nt;else if(1<ht){for(var St=Array(ht),te=0;te<ht;te++)St[te]=arguments[te+2];it.children=St}return U(C.type,ft,it)},Rt.createContext=function(C){return C={$$typeof:c,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:l,_context:C},C},Rt.createElement=function(C,$,nt){var it,ft={},ht=null;if($!=null)for(it in $.key!==void 0&&(ht=""+$.key),$)F.call($,it)&&it!=="key"&&it!=="__self"&&it!=="__source"&&(ft[it]=$[it]);var St=arguments.length-2;if(St===1)ft.children=nt;else if(1<St){for(var te=Array(St),Lt=0;Lt<St;Lt++)te[Lt]=arguments[Lt+2];ft.children=te}if(C&&C.defaultProps)for(it in St=C.defaultProps,St)ft[it]===void 0&&(ft[it]=St[it]);return U(C,ht,ft)},Rt.createRef=function(){return{current:null}},Rt.forwardRef=function(C){return{$$typeof:d,render:C}},Rt.isValidElement=et,Rt.lazy=function(C){return{$$typeof:m,_payload:{_status:-1,_result:C},_init:st}},Rt.memo=function(C,$){return{$$typeof:h,type:C,compare:$===void 0?null:$}},Rt.startTransition=function(C){var $=j.T,nt={};j.T=nt;try{var it=C(),ft=j.S;ft!==null&&ft(nt,it),typeof it=="object"&&it!==null&&typeof it.then=="function"&&it.then(H,ut)}catch(ht){ut(ht)}finally{$!==null&&nt.types!==null&&($.types=nt.types),j.T=$}},Rt.unstable_useCacheRefresh=function(){return j.H.useCacheRefresh()},Rt.use=function(C){return j.H.use(C)},Rt.useActionState=function(C,$,nt){return j.H.useActionState(C,$,nt)},Rt.useCallback=function(C,$){return j.H.useCallback(C,$)},Rt.useContext=function(C){return j.H.useContext(C)},Rt.useDebugValue=function(){},Rt.useDeferredValue=function(C,$){return j.H.useDeferredValue(C,$)},Rt.useEffect=function(C,$){return j.H.useEffect(C,$)},Rt.useEffectEvent=function(C){return j.H.useEffectEvent(C)},Rt.useId=function(){return j.H.useId()},Rt.useImperativeHandle=function(C,$,nt){return j.H.useImperativeHandle(C,$,nt)},Rt.useInsertionEffect=function(C,$){return j.H.useInsertionEffect(C,$)},Rt.useLayoutEffect=function(C,$){return j.H.useLayoutEffect(C,$)},Rt.useMemo=function(C,$){return j.H.useMemo(C,$)},Rt.useOptimistic=function(C,$){return j.H.useOptimistic(C,$)},Rt.useReducer=function(C,$,nt){return j.H.useReducer(C,$,nt)},Rt.useRef=function(C){return j.H.useRef(C)},Rt.useState=function(C){return j.H.useState(C)},Rt.useSyncExternalStore=function(C,$,nt){return j.H.useSyncExternalStore(C,$,nt)},Rt.useTransition=function(){return j.H.useTransition()},Rt.version="19.2.4",Rt}var Ty;function Yg(){return Ty||(Ty=1,v0.exports=bk()),v0.exports}var N=Yg();const vk=gk(N);var y0={exports:{}},pc={},w0={exports:{}},_0={};var Ey;function yk(){return Ey||(Ey=1,(function(a){function t(B,X){var st=B.length;B.push(X);t:for(;0<st;){var ut=st-1>>>1,D=B[ut];if(0<r(D,X))B[ut]=X,B[st]=D,st=ut;else break t}}function i(B){return B.length===0?null:B[0]}function n(B){if(B.length===0)return null;var X=B[0],st=B.pop();if(st!==X){B[0]=st;t:for(var ut=0,D=B.length,C=D>>>1;ut<C;){var $=2*(ut+1)-1,nt=B[$],it=$+1,ft=B[it];if(0>r(nt,st))it<D&&0>r(ft,nt)?(B[ut]=ft,B[it]=st,ut=it):(B[ut]=nt,B[$]=st,ut=$);else if(it<D&&0>r(ft,st))B[ut]=ft,B[it]=st,ut=it;else break t}}return X}function r(B,X){var st=B.sortIndex-X.sortIndex;return st!==0?st:B.id-X.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;a.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();a.unstable_now=function(){return c.now()-d}}var f=[],h=[],m=1,x=null,b=3,v=!1,_=!1,w=!1,S=!1,E=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function O(B){for(var X=i(h);X!==null;){if(X.callback===null)n(h);else if(X.startTime<=B)n(h),X.sortIndex=X.expirationTime,t(f,X);else break;X=i(h)}}function z(B){if(w=!1,O(B),!_)if(i(f)!==null)_=!0,H||(H=!0,Y());else{var X=i(h);X!==null&&lt(z,X.startTime-B)}}var H=!1,j=-1,F=5,U=-1;function W(){return S?!0:!(a.unstable_now()-U<F)}function et(){if(S=!1,H){var B=a.unstable_now();U=B;var X=!0;try{t:{_=!1,w&&(w=!1,M(j),j=-1),v=!0;var st=b;try{e:{for(O(B),x=i(f);x!==null&&!(x.expirationTime>B&&W());){var ut=x.callback;if(typeof ut=="function"){x.callback=null,b=x.priorityLevel;var D=ut(x.expirationTime<=B);if(B=a.unstable_now(),typeof D=="function"){x.callback=D,O(B),X=!0;break e}x===i(f)&&n(f),O(B)}else n(f);x=i(f)}if(x!==null)X=!0;else{var C=i(h);C!==null&&lt(z,C.startTime-B),X=!1}}break t}finally{x=null,b=st,v=!1}X=void 0}}finally{X?Y():H=!1}}}var Y;if(typeof A=="function")Y=function(){A(et)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,ct=at.port2;at.port1.onmessage=et,Y=function(){ct.postMessage(null)}}else Y=function(){E(et,0)};function lt(B,X){j=E(function(){B(a.unstable_now())},X)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(B){B.callback=null},a.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<B?Math.floor(1e3/B):5},a.unstable_getCurrentPriorityLevel=function(){return b},a.unstable_next=function(B){switch(b){case 1:case 2:case 3:var X=3;break;default:X=b}var st=b;b=X;try{return B()}finally{b=st}},a.unstable_requestPaint=function(){S=!0},a.unstable_runWithPriority=function(B,X){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var st=b;b=B;try{return X()}finally{b=st}},a.unstable_scheduleCallback=function(B,X,st){var ut=a.unstable_now();switch(typeof st=="object"&&st!==null?(st=st.delay,st=typeof st=="number"&&0<st?ut+st:ut):st=ut,B){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=st+D,B={id:m++,callback:X,priorityLevel:B,startTime:st,expirationTime:D,sortIndex:-1},st>ut?(B.sortIndex=st,t(h,B),i(f)===null&&B===i(h)&&(w?(M(j),j=-1):w=!0,lt(z,st-ut))):(B.sortIndex=D,t(f,B),_||v||(_=!0,H||(H=!0,Y()))),B},a.unstable_shouldYield=W,a.unstable_wrapCallback=function(B){var X=b;return function(){var st=b;b=X;try{return B.apply(this,arguments)}finally{b=st}}}})(_0)),_0}var My;function wk(){return My||(My=1,w0.exports=yk()),w0.exports}var S0={exports:{}},Hi={};var Cy;function _k(){if(Cy)return Hi;Cy=1;var a=Yg();function t(f){var h="https://react.dev/errors/"+f;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)h+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+f+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var n={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},r=Symbol.for("react.portal");function l(f,h,m){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:x==null?null:""+x,children:f,containerInfo:h,implementation:m}}var c=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(f,h){if(f==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Hi.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=n,Hi.createPortal=function(f,h){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return l(f,h,null,m)},Hi.flushSync=function(f){var h=c.T,m=n.p;try{if(c.T=null,n.p=2,f)return f()}finally{c.T=h,n.p=m,n.d.f()}},Hi.preconnect=function(f,h){typeof f=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,n.d.C(f,h))},Hi.prefetchDNS=function(f){typeof f=="string"&&n.d.D(f)},Hi.preinit=function(f,h){if(typeof f=="string"&&h&&typeof h.as=="string"){var m=h.as,x=d(m,h.crossOrigin),b=typeof h.integrity=="string"?h.integrity:void 0,v=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;m==="style"?n.d.S(f,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:x,integrity:b,fetchPriority:v}):m==="script"&&n.d.X(f,{crossOrigin:x,integrity:b,fetchPriority:v,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Hi.preinitModule=function(f,h){if(typeof f=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var m=d(h.as,h.crossOrigin);n.d.M(f,{crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&n.d.M(f)},Hi.preload=function(f,h){if(typeof f=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var m=h.as,x=d(m,h.crossOrigin);n.d.L(f,m,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Hi.preloadModule=function(f,h){if(typeof f=="string")if(h){var m=d(h.as,h.crossOrigin);n.d.m(f,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else n.d.m(f)},Hi.requestFormReset=function(f){n.d.r(f)},Hi.unstable_batchedUpdates=function(f,h){return f(h)},Hi.useFormState=function(f,h,m){return c.H.useFormState(f,h,m)},Hi.useFormStatus=function(){return c.H.useHostTransitionStatus()},Hi.version="19.2.4",Hi}var Ay;function Sk(){if(Ay)return S0.exports;Ay=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),S0.exports=_k(),S0.exports}var zy;function kk(){if(zy)return pc;zy=1;var a=wk(),t=Yg(),i=Sk();function n(e){var s="https://react.dev/errors/"+e;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+e+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var s=e,o=e;if(e.alternate)for(;s.return;)s=s.return;else{e=s;do s=e,(s.flags&4098)!==0&&(o=s.return),e=s.return;while(e)}return s.tag===3?o:null}function c(e){if(e.tag===13){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function d(e){if(e.tag===31){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(n(188))}function h(e){var s=e.alternate;if(!s){if(s=l(e),s===null)throw Error(n(188));return s!==e?null:e}for(var o=e,u=s;;){var p=o.return;if(p===null)break;var g=p.alternate;if(g===null){if(u=p.return,u!==null){o=u;continue}break}if(p.child===g.child){for(g=p.child;g;){if(g===o)return f(p),e;if(g===u)return f(p),s;g=g.sibling}throw Error(n(188))}if(o.return!==u.return)o=p,u=g;else{for(var y=!1,T=p.child;T;){if(T===o){y=!0,o=p,u=g;break}if(T===u){y=!0,u=p,o=g;break}T=T.sibling}if(!y){for(T=g.child;T;){if(T===o){y=!0,o=g,u=p;break}if(T===u){y=!0,u=g,o=p;break}T=T.sibling}if(!y)throw Error(n(189))}}if(o.alternate!==u)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?e:s}function m(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e;for(e=e.child;e!==null;){if(s=m(e),s!==null)return s;e=e.sibling}return null}var x=Object.assign,b=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),_=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),A=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),W=Symbol.for("react.memo_cache_sentinel"),et=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=et&&e[et]||e["@@iterator"],typeof e=="function"?e:null)}var at=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===at?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case E:return"Profiler";case S:return"StrictMode";case z:return"Suspense";case H:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case _:return"Portal";case A:return e.displayName||"Context";case M:return(e._context.displayName||"Context")+".Consumer";case O:var s=e.render;return e=e.displayName,e||(e=s.displayName||s.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case j:return s=e.displayName||null,s!==null?s:ct(e.type)||"Memo";case F:s=e._payload,e=e._init;try{return ct(e(s))}catch{}}return null}var lt=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,st={pending:!1,data:null,method:null,action:null},ut=[],D=-1;function C(e){return{current:e}}function $(e){0>D||(e.current=ut[D],ut[D]=null,D--)}function nt(e,s){D++,ut[D]=e.current,e.current=s}var it=C(null),ft=C(null),ht=C(null),St=C(null);function te(e,s){switch(nt(ht,s),nt(ft,e),nt(it,null),s.nodeType){case 9:case 11:e=(e=s.documentElement)&&(e=e.namespaceURI)?Vv(e):0;break;default:if(e=s.tagName,s=s.namespaceURI)s=Vv(s),e=Iv(s,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$(it),nt(it,e)}function Lt(){$(it),$(ft),$(ht)}function Ei(e){e.memoizedState!==null&&nt(St,e);var s=it.current,o=Iv(s,e.type);s!==o&&(nt(ft,e),nt(it,o))}function Ne(e){ft.current===e&&($(it),$(ft)),St.current===e&&($(St),cc._currentValue=st)}var Le,Yt;function oe(e){if(Le===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);Le=s&&s[1]||"",Yt=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Le+e+Yt}var Je=!1;function pi(e,s){if(!e||Je)return"";Je=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(s){var tt=function(){throw Error()};if(Object.defineProperty(tt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(tt,[])}catch(Z){var I=Z}Reflect.construct(e,[],tt)}else{try{tt.call()}catch(Z){I=Z}e.call(tt.prototype)}}else{try{throw Error()}catch(Z){I=Z}(tt=e())&&typeof tt.catch=="function"&&tt.catch(function(){})}}catch(Z){if(Z&&I&&typeof Z.stack=="string")return[Z.stack,I.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var p=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");p&&p.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=u.DetermineComponentFrameRoot(),y=g[0],T=g[1];if(y&&T){var R=y.split(`
`),V=T.split(`
`);for(p=u=0;u<R.length&&!R[u].includes("DetermineComponentFrameRoot");)u++;for(;p<V.length&&!V[p].includes("DetermineComponentFrameRoot");)p++;if(u===R.length||p===V.length)for(u=R.length-1,p=V.length-1;1<=u&&0<=p&&R[u]!==V[p];)p--;for(;1<=u&&0<=p;u--,p--)if(R[u]!==V[p]){if(u!==1||p!==1)do if(u--,p--,0>p||R[u]!==V[p]){var K=`
`+R[u].replace(" at new "," at ");return e.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",e.displayName)),K}while(1<=u&&0<=p);break}}}finally{Je=!1,Error.prepareStackTrace=o}return(o=e?e.displayName||e.name:"")?oe(o):""}function Q(e,s){switch(e.tag){case 26:case 27:case 5:return oe(e.type);case 16:return oe("Lazy");case 13:return e.child!==s&&s!==null?oe("Suspense Fallback"):oe("Suspense");case 19:return oe("SuspenseList");case 0:case 15:return pi(e.type,!1);case 11:return pi(e.type.render,!1);case 1:return pi(e.type,!0);case 31:return oe("Activity");default:return""}}function gi(e){try{var s="",o=null;do s+=Q(e,o),o=e,e=e.return;while(e);return s}catch(u){return`
Error generating stack: `+u.message+`
`+u.stack}}var ot=Object.prototype.hasOwnProperty,G=a.unstable_scheduleCallback,rt=a.unstable_cancelCallback,bt=a.unstable_shouldYield,Tt=a.unstable_requestPaint,vt=a.unstable_now,Bt=a.unstable_getCurrentPriorityLevel,Oe=a.unstable_ImmediatePriority,Ot=a.unstable_UserBlockingPriority,ce=a.unstable_NormalPriority,ie=a.unstable_LowPriority,Ht=a.unstable_IdlePriority,ti=a.log,pt=a.unstable_setDisableYieldValue,an=null,xe=null;function Xe(e){if(typeof ti=="function"&&pt(e),xe&&typeof xe.setStrictMode=="function")try{xe.setStrictMode(an,e)}catch{}}var Be=Math.clz32?Math.clz32:At,sn=Math.log,Tn=Math.LN2;function At(e){return e>>>=0,e===0?32:31-(sn(e)/Tn|0)|0}var qi=256,He=262144,Zt=4194304;function ae(e){var s=e&42;if(s!==0)return s;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function yi(e,s,o){var u=e.pendingLanes;if(u===0)return 0;var p=0,g=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var T=u&134217727;return T!==0?(u=T&~g,u!==0?p=ae(u):(y&=T,y!==0?p=ae(y):o||(o=T&~e,o!==0&&(p=ae(o))))):(T=u&~g,T!==0?p=ae(T):y!==0?p=ae(y):o||(o=u&~e,o!==0&&(p=ae(o)))),p===0?0:s!==0&&s!==p&&(s&g)===0&&(g=p&-p,o=s&-s,g>=o||g===32&&(o&4194048)!==0)?s:p}function Mi(e,s){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&s)===0}function $e(e,s){switch(e){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rn(){var e=Zt;return Zt<<=1,(Zt&62914560)===0&&(Zt=4194304),e}function Et(e){for(var s=[],o=0;31>o;o++)s.push(e);return s}function yt(e,s){e.pendingLanes|=s,s!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ne(e,s,o,u,p,g){var y=e.pendingLanes;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=o,e.entangledLanes&=o,e.errorRecoveryDisabledLanes&=o,e.shellSuspendCounter=0;var T=e.entanglements,R=e.expirationTimes,V=e.hiddenUpdates;for(o=y&~o;0<o;){var K=31-Be(o),tt=1<<K;T[K]=0,R[K]=-1;var I=V[K];if(I!==null)for(V[K]=null,K=0;K<I.length;K++){var Z=I[K];Z!==null&&(Z.lane&=-536870913)}o&=~tt}u!==0&&dt(e,u,0),g!==0&&p===0&&e.tag!==0&&(e.suspendedLanes|=g&~(y&~s))}function dt(e,s,o){e.pendingLanes|=s,e.suspendedLanes&=~s;var u=31-Be(s);e.entangledLanes|=s,e.entanglements[u]=e.entanglements[u]|1073741824|o&261930}function zt(e,s){var o=e.entangledLanes|=s;for(e=e.entanglements;o;){var u=31-Be(o),p=1<<u;p&s|e[u]&s&&(e[u]|=s),o&=~p}}function wt(e,s){var o=s&-s;return o=(o&42)!==0?1:Mt(o),(o&(e.suspendedLanes|s))!==0?0:o}function Mt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function We(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Gt(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:gy(e.type))}function Re(e,s){var o=X.p;try{return X.p=e,s()}finally{X.p=o}}var Ee=Math.random().toString(36).slice(2),Ft="__reactFiber$"+Ee,Pt="__reactProps$"+Ee,ee="__reactContainer$"+Ee,Vi="__reactEvents$"+Ee,Me="__reactListeners$"+Ee,Ii="__reactHandles$"+Ee,En="__reactResources$"+Ee,Fe="__reactMarker$"+Ee;function ei(e){delete e[Ft],delete e[Pt],delete e[Vi],delete e[Me],delete e[Ii]}function Pe(e){var s=e[Ft];if(s)return s;for(var o=e.parentNode;o;){if(s=o[ee]||o[Ft]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(e=Jv(e);e!==null;){if(o=e[Ft])return o;e=Jv(e)}return s}e=o,o=e.parentNode}return null}function ln(e){if(e=e[Ft]||e[ee]){var s=e.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return e}return null}function _a(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e.stateNode;throw Error(n(33))}function Ue(e){var s=e[En];return s||(s=e[En]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function qt(e){e[Fe]=!0}var Mn=new Set,fl={};function Sa(e,s){$n(e,s),$n(e+"Capture",s)}function $n(e,s){for(fl[e]=s,e=0;e<s.length;e++)Mn.add(s[e])}var Wn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Es={},_r={};function ka(e){return ot.call(_r,e)?!0:ot.call(Es,e)?!1:Wn.test(e)?_r[e]=!0:(Es[e]=!0,!1)}function ku(e,s,o){if(ka(s))if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":e.removeAttribute(s);return;case"boolean":var u=s.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){e.removeAttribute(s);return}}e.setAttribute(s,""+o)}}function Tu(e,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttribute(s,""+o)}}function qa(e,s,o,u){if(u===null)e.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(o);return}e.setAttributeNS(s,o,""+u)}}function Qn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bm(e){var s=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function oS(e,s,o){var u=Object.getOwnPropertyDescriptor(e.constructor.prototype,s);if(!e.hasOwnProperty(s)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var p=u.get,g=u.set;return Object.defineProperty(e,s,{configurable:!0,get:function(){return p.call(this)},set:function(y){o=""+y,g.call(this,y)}}),Object.defineProperty(e,s,{enumerable:u.enumerable}),{getValue:function(){return o},setValue:function(y){o=""+y},stopTracking:function(){e._valueTracker=null,delete e[s]}}}}function dh(e){if(!e._valueTracker){var s=Bm(e)?"checked":"value";e._valueTracker=oS(e,s,""+e[s])}}function Hm(e){if(!e)return!1;var s=e._valueTracker;if(!s)return!0;var o=s.getValue(),u="";return e&&(u=Bm(e)?e.checked?"true":"false":e.value),e=u,e!==o?(s.setValue(e),!0):!1}function Eu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var cS=/[\n"\\]/g;function Zn(e){return e.replace(cS,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function fh(e,s,o,u,p,g,y,T){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),s!=null?y==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+Qn(s)):e.value!==""+Qn(s)&&(e.value=""+Qn(s)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),s!=null?hh(e,y,Qn(s)):o!=null?hh(e,y,Qn(o)):u!=null&&e.removeAttribute("value"),p==null&&g!=null&&(e.defaultChecked=!!g),p!=null&&(e.checked=p&&typeof p!="function"&&typeof p!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+Qn(T):e.removeAttribute("name")}function Fm(e,s,o,u,p,g,y,T){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.type=g),s!=null||o!=null){if(!(g!=="submit"&&g!=="reset"||s!=null)){dh(e);return}o=o!=null?""+Qn(o):"",s=s!=null?""+Qn(s):o,T||s===e.value||(e.value=s),e.defaultValue=s}u=u??p,u=typeof u!="function"&&typeof u!="symbol"&&!!u,e.checked=T?e.checked:!!u,e.defaultChecked=!!u,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),dh(e)}function hh(e,s,o){s==="number"&&Eu(e.ownerDocument)===e||e.defaultValue===""+o||(e.defaultValue=""+o)}function hl(e,s,o,u){if(e=e.options,s){s={};for(var p=0;p<o.length;p++)s["$"+o[p]]=!0;for(o=0;o<e.length;o++)p=s.hasOwnProperty("$"+e[o].value),e[o].selected!==p&&(e[o].selected=p),p&&u&&(e[o].defaultSelected=!0)}else{for(o=""+Qn(o),s=null,p=0;p<e.length;p++){if(e[p].value===o){e[p].selected=!0,u&&(e[p].defaultSelected=!0);return}s!==null||e[p].disabled||(s=e[p])}s!==null&&(s.selected=!0)}}function Pm(e,s,o){if(s!=null&&(s=""+Qn(s),s!==e.value&&(e.value=s),o==null)){e.defaultValue!==s&&(e.defaultValue=s);return}e.defaultValue=o!=null?""+Qn(o):""}function Um(e,s,o,u){if(s==null){if(u!=null){if(o!=null)throw Error(n(92));if(lt(u)){if(1<u.length)throw Error(n(93));u=u[0]}o=u}o==null&&(o=""),s=o}o=Qn(s),e.defaultValue=o,u=e.textContent,u===o&&u!==""&&u!==null&&(e.value=u),dh(e)}function pl(e,s){if(s){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=s;return}}e.textContent=s}var uS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ym(e,s,o){var u=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="":u?e.setProperty(s,o):typeof o!="number"||o===0||uS.has(s)?s==="float"?e.cssFloat=o:e[s]=(""+o).trim():e[s]=o+"px"}function Gm(e,s,o){if(s!=null&&typeof s!="object")throw Error(n(62));if(e=e.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||s!=null&&s.hasOwnProperty(u)||(u.indexOf("--")===0?e.setProperty(u,""):u==="float"?e.cssFloat="":e[u]="");for(var p in s)u=s[p],s.hasOwnProperty(p)&&o[p]!==u&&Ym(e,p,u)}else for(var g in s)s.hasOwnProperty(g)&&Ym(e,g,s[g])}function ph(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Mu(e){return fS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Va(){}var gh=null;function mh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gl=null,ml=null;function qm(e){var s=ln(e);if(s&&(e=s.stateNode)){var o=e[Pt]||null;t:switch(e=s.stateNode,s.type){case"input":if(fh(e,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Zn(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var u=o[s];if(u!==e&&u.form===e.form){var p=u[Pt]||null;if(!p)throw Error(n(90));fh(u,p.value,p.defaultValue,p.defaultValue,p.checked,p.defaultChecked,p.type,p.name)}}for(s=0;s<o.length;s++)u=o[s],u.form===e.form&&Hm(u)}break t;case"textarea":Pm(e,o.value,o.defaultValue);break t;case"select":s=o.value,s!=null&&hl(e,!!o.multiple,s,!1)}}}var xh=!1;function Vm(e,s,o){if(xh)return e(s,o);xh=!0;try{var u=e(s);return u}finally{if(xh=!1,(gl!==null||ml!==null)&&(pd(),gl&&(s=gl,e=ml,ml=gl=null,qm(s),e)))for(s=0;s<e.length;s++)qm(e[s])}}function Eo(e,s){var o=e.stateNode;if(o===null)return null;var u=o[Pt]||null;if(u===null)return null;o=u[s];t:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(e=e.type,u=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!u;break t;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(n(231,s,typeof o));return o}var Ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bh=!1;if(Ia)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){bh=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{bh=!1}var Ms=null,vh=null,Cu=null;function Im(){if(Cu)return Cu;var e,s=vh,o=s.length,u,p="value"in Ms?Ms.value:Ms.textContent,g=p.length;for(e=0;e<o&&s[e]===p[e];e++);var y=o-e;for(u=1;u<=y&&s[o-u]===p[g-u];u++);return Cu=p.slice(e,1<u?1-u:void 0)}function Au(e){var s=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&s===13&&(e=13)):e=s,e===10&&(e=13),32<=e||e===13?e:0}function zu(){return!0}function Xm(){return!1}function on(e){function s(o,u,p,g,y){this._reactName=o,this._targetInst=p,this.type=u,this.nativeEvent=g,this.target=y,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(o=e[T],this[T]=o?o(g):g[T]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?zu:Xm,this.isPropagationStopped=Xm,this}return x(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=zu)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=zu)},persist:function(){},isPersistent:zu}),s}var Sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ou=on(Sr),Co=x({},Sr,{view:0,detail:0}),hS=on(Co),yh,wh,Ao,Ru=x({},Co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ao&&(Ao&&e.type==="mousemove"?(yh=e.screenX-Ao.screenX,wh=e.screenY-Ao.screenY):wh=yh=0,Ao=e),yh)},movementY:function(e){return"movementY"in e?e.movementY:wh}}),$m=on(Ru),pS=x({},Ru,{dataTransfer:0}),gS=on(pS),mS=x({},Co,{relatedTarget:0}),_h=on(mS),xS=x({},Sr,{animationName:0,elapsedTime:0,pseudoElement:0}),bS=on(xS),vS=x({},Sr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yS=on(vS),wS=x({},Sr,{data:0}),Wm=on(wS),_S={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},SS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function TS(e){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(e):(e=kS[e])?!!s[e]:!1}function Sh(){return TS}var ES=x({},Co,{key:function(e){if(e.key){var s=_S[e.key]||e.key;if(s!=="Unidentified")return s}return e.type==="keypress"?(e=Au(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?SS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sh,charCode:function(e){return e.type==="keypress"?Au(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Au(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),MS=on(ES),CS=x({},Ru,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qm=on(CS),AS=x({},Co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sh}),zS=on(AS),OS=x({},Sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),RS=on(OS),jS=x({},Ru,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),DS=on(jS),NS=x({},Sr,{newState:0,oldState:0}),LS=on(NS),BS=[9,13,27,32],kh=Ia&&"CompositionEvent"in window,zo=null;Ia&&"documentMode"in document&&(zo=document.documentMode);var HS=Ia&&"TextEvent"in window&&!zo,Zm=Ia&&(!kh||zo&&8<zo&&11>=zo),Km=" ",Jm=!1;function tx(e,s){switch(e){case"keyup":return BS.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ex(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xl=!1;function FS(e,s){switch(e){case"compositionend":return ex(s);case"keypress":return s.which!==32?null:(Jm=!0,Km);case"textInput":return e=s.data,e===Km&&Jm?null:e;default:return null}}function PS(e,s){if(xl)return e==="compositionend"||!kh&&tx(e,s)?(e=Im(),Cu=vh=Ms=null,xl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Zm&&s.locale!=="ko"?null:s.data;default:return null}}var US={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ix(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s==="input"?!!US[e.type]:s==="textarea"}function nx(e,s,o,u){gl?ml?ml.push(u):ml=[u]:gl=u,s=wd(s,"onChange"),0<s.length&&(o=new Ou("onChange","change",null,o,u),e.push({event:o,listeners:s}))}var Oo=null,Ro=null;function YS(e){Fv(e,0)}function ju(e){var s=_a(e);if(Hm(s))return e}function ax(e,s){if(e==="change")return s}var sx=!1;if(Ia){var Th;if(Ia){var Eh="oninput"in document;if(!Eh){var rx=document.createElement("div");rx.setAttribute("oninput","return;"),Eh=typeof rx.oninput=="function"}Th=Eh}else Th=!1;sx=Th&&(!document.documentMode||9<document.documentMode)}function lx(){Oo&&(Oo.detachEvent("onpropertychange",ox),Ro=Oo=null)}function ox(e){if(e.propertyName==="value"&&ju(Ro)){var s=[];nx(s,Ro,e,mh(e)),Vm(YS,s)}}function GS(e,s,o){e==="focusin"?(lx(),Oo=s,Ro=o,Oo.attachEvent("onpropertychange",ox)):e==="focusout"&&lx()}function qS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ju(Ro)}function VS(e,s){if(e==="click")return ju(s)}function IS(e,s){if(e==="input"||e==="change")return ju(s)}function XS(e,s){return e===s&&(e!==0||1/e===1/s)||e!==e&&s!==s}var Cn=typeof Object.is=="function"?Object.is:XS;function jo(e,s){if(Cn(e,s))return!0;if(typeof e!="object"||e===null||typeof s!="object"||s===null)return!1;var o=Object.keys(e),u=Object.keys(s);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var p=o[u];if(!ot.call(s,p)||!Cn(e[p],s[p]))return!1}return!0}function cx(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ux(e,s){var o=cx(e);e=0;for(var u;o;){if(o.nodeType===3){if(u=e+o.textContent.length,e<=s&&u>=s)return{node:o,offset:s-e};e=u}t:{for(;o;){if(o.nextSibling){o=o.nextSibling;break t}o=o.parentNode}o=void 0}o=cx(o)}}function dx(e,s){return e&&s?e===s?!0:e&&e.nodeType===3?!1:s&&s.nodeType===3?dx(e,s.parentNode):"contains"in e?e.contains(s):e.compareDocumentPosition?!!(e.compareDocumentPosition(s)&16):!1:!1}function fx(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var s=Eu(e.document);s instanceof e.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)e=s.contentWindow;else break;s=Eu(e.document)}return s}function Mh(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s&&(s==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||s==="textarea"||e.contentEditable==="true")}var $S=Ia&&"documentMode"in document&&11>=document.documentMode,bl=null,Ch=null,Do=null,Ah=!1;function hx(e,s,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ah||bl==null||bl!==Eu(u)||(u=bl,"selectionStart"in u&&Mh(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Do&&jo(Do,u)||(Do=u,u=wd(Ch,"onSelect"),0<u.length&&(s=new Ou("onSelect","select",null,s,o),e.push({event:s,listeners:u}),s.target=bl)))}function kr(e,s){var o={};return o[e.toLowerCase()]=s.toLowerCase(),o["Webkit"+e]="webkit"+s,o["Moz"+e]="moz"+s,o}var vl={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionrun:kr("Transition","TransitionRun"),transitionstart:kr("Transition","TransitionStart"),transitioncancel:kr("Transition","TransitionCancel"),transitionend:kr("Transition","TransitionEnd")},zh={},px={};Ia&&(px=document.createElement("div").style,"AnimationEvent"in window||(delete vl.animationend.animation,delete vl.animationiteration.animation,delete vl.animationstart.animation),"TransitionEvent"in window||delete vl.transitionend.transition);function Tr(e){if(zh[e])return zh[e];if(!vl[e])return e;var s=vl[e],o;for(o in s)if(s.hasOwnProperty(o)&&o in px)return zh[e]=s[o];return e}var gx=Tr("animationend"),mx=Tr("animationiteration"),xx=Tr("animationstart"),WS=Tr("transitionrun"),QS=Tr("transitionstart"),ZS=Tr("transitioncancel"),bx=Tr("transitionend"),vx=new Map,Oh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Oh.push("scrollEnd");function ga(e,s){vx.set(e,s),Sa(s,[e])}var Du=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Kn=[],yl=0,Rh=0;function Nu(){for(var e=yl,s=Rh=yl=0;s<e;){var o=Kn[s];Kn[s++]=null;var u=Kn[s];Kn[s++]=null;var p=Kn[s];Kn[s++]=null;var g=Kn[s];if(Kn[s++]=null,u!==null&&p!==null){var y=u.pending;y===null?p.next=p:(p.next=y.next,y.next=p),u.pending=p}g!==0&&yx(o,p,g)}}function Lu(e,s,o,u){Kn[yl++]=e,Kn[yl++]=s,Kn[yl++]=o,Kn[yl++]=u,Rh|=u,e.lanes|=u,e=e.alternate,e!==null&&(e.lanes|=u)}function jh(e,s,o,u){return Lu(e,s,o,u),Bu(e)}function Er(e,s){return Lu(e,null,null,s),Bu(e)}function yx(e,s,o){e.lanes|=o;var u=e.alternate;u!==null&&(u.lanes|=o);for(var p=!1,g=e.return;g!==null;)g.childLanes|=o,u=g.alternate,u!==null&&(u.childLanes|=o),g.tag===22&&(e=g.stateNode,e===null||e._visibility&1||(p=!0)),e=g,g=g.return;return e.tag===3?(g=e.stateNode,p&&s!==null&&(p=31-Be(o),e=g.hiddenUpdates,u=e[p],u===null?e[p]=[s]:u.push(s),s.lane=o|536870912),g):null}function Bu(e){if(50<ic)throw ic=0,Yp=null,Error(n(185));for(var s=e.return;s!==null;)e=s,s=e.return;return e.tag===3?e.stateNode:null}var wl={};function KS(e,s,o,u){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(e,s,o,u){return new KS(e,s,o,u)}function Dh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xa(e,s){var o=e.alternate;return o===null?(o=An(e.tag,s,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=s,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&65011712,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,s=e.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o.refCleanup=e.refCleanup,o}function wx(e,s){e.flags&=65011714;var o=e.alternate;return o===null?(e.childLanes=0,e.lanes=s,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=o.childLanes,e.lanes=o.lanes,e.child=o.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=o.memoizedProps,e.memoizedState=o.memoizedState,e.updateQueue=o.updateQueue,e.type=o.type,s=o.dependencies,e.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),e}function Hu(e,s,o,u,p,g){var y=0;if(u=e,typeof e=="function")Dh(e)&&(y=1);else if(typeof e=="string")y=nk(e,o,it.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=An(31,o,s,p),e.elementType=U,e.lanes=g,e;case w:return Mr(o.children,p,g,s);case S:y=8,p|=24;break;case E:return e=An(12,o,s,p|2),e.elementType=E,e.lanes=g,e;case z:return e=An(13,o,s,p),e.elementType=z,e.lanes=g,e;case H:return e=An(19,o,s,p),e.elementType=H,e.lanes=g,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case A:y=10;break t;case M:y=9;break t;case O:y=11;break t;case j:y=14;break t;case F:y=16,u=null;break t}y=29,o=Error(n(130,e===null?"null":typeof e,"")),u=null}return s=An(y,o,s,p),s.elementType=e,s.type=u,s.lanes=g,s}function Mr(e,s,o,u){return e=An(7,e,u,s),e.lanes=o,e}function Nh(e,s,o){return e=An(6,e,null,s),e.lanes=o,e}function _x(e){var s=An(18,null,null,0);return s.stateNode=e,s}function Lh(e,s,o){return s=An(4,e.children!==null?e.children:[],e.key,s),s.lanes=o,s.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},s}var Sx=new WeakMap;function Jn(e,s){if(typeof e=="object"&&e!==null){var o=Sx.get(e);return o!==void 0?o:(s={value:e,source:s,stack:gi(s)},Sx.set(e,s),s)}return{value:e,source:s,stack:gi(s)}}var _l=[],Sl=0,Fu=null,No=0,ta=[],ea=0,Cs=null,Ta=1,Ea="";function $a(e,s){_l[Sl++]=No,_l[Sl++]=Fu,Fu=e,No=s}function kx(e,s,o){ta[ea++]=Ta,ta[ea++]=Ea,ta[ea++]=Cs,Cs=e;var u=Ta;e=Ea;var p=32-Be(u)-1;u&=~(1<<p),o+=1;var g=32-Be(s)+p;if(30<g){var y=p-p%5;g=(u&(1<<y)-1).toString(32),u>>=y,p-=y,Ta=1<<32-Be(s)+p|o<<p|u,Ea=g+e}else Ta=1<<g|o<<p|u,Ea=e}function Bh(e){e.return!==null&&($a(e,1),kx(e,1,0))}function Hh(e){for(;e===Fu;)Fu=_l[--Sl],_l[Sl]=null,No=_l[--Sl],_l[Sl]=null;for(;e===Cs;)Cs=ta[--ea],ta[ea]=null,Ea=ta[--ea],ta[ea]=null,Ta=ta[--ea],ta[ea]=null}function Tx(e,s){ta[ea++]=Ta,ta[ea++]=Ea,ta[ea++]=Cs,Ta=s.id,Ea=s.overflow,Cs=e}var Ci=null,Ce=null,Kt=!1,As=null,ia=!1,Fh=Error(n(519));function zs(e){var s=Error(n(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Lo(Jn(s,e)),Fh}function Ex(e){var s=e.stateNode,o=e.type,u=e.memoizedProps;switch(s[Ft]=e,s[Pt]=u,o){case"dialog":$t("cancel",s),$t("close",s);break;case"iframe":case"object":case"embed":$t("load",s);break;case"video":case"audio":for(o=0;o<ac.length;o++)$t(ac[o],s);break;case"source":$t("error",s);break;case"img":case"image":case"link":$t("error",s),$t("load",s);break;case"details":$t("toggle",s);break;case"input":$t("invalid",s),Fm(s,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0);break;case"select":$t("invalid",s);break;case"textarea":$t("invalid",s),Um(s,u.value,u.defaultValue,u.children)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||u.suppressHydrationWarning===!0||Gv(s.textContent,o)?(u.popover!=null&&($t("beforetoggle",s),$t("toggle",s)),u.onScroll!=null&&$t("scroll",s),u.onScrollEnd!=null&&$t("scrollend",s),u.onClick!=null&&(s.onclick=Va),s=!0):s=!1,s||zs(e,!0)}function Mx(e){for(Ci=e.return;Ci;)switch(Ci.tag){case 5:case 31:case 13:ia=!1;return;case 27:case 3:ia=!0;return;default:Ci=Ci.return}}function kl(e){if(e!==Ci)return!1;if(!Kt)return Mx(e),Kt=!0,!1;var s=e.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=e.type,o=!(o!=="form"&&o!=="button")||n0(e.type,e.memoizedProps)),o=!o),o&&Ce&&zs(e),Mx(e),s===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(n(317));Ce=Kv(e)}else if(s===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(n(317));Ce=Kv(e)}else s===27?(s=Ce,qs(e.type)?(e=o0,o0=null,Ce=e):Ce=s):Ce=Ci?aa(e.stateNode.nextSibling):null;return!0}function Cr(){Ce=Ci=null,Kt=!1}function Ph(){var e=As;return e!==null&&(fn===null?fn=e:fn.push.apply(fn,e),As=null),e}function Lo(e){As===null?As=[e]:As.push(e)}var Uh=C(null),Ar=null,Wa=null;function Os(e,s,o){nt(Uh,s._currentValue),s._currentValue=o}function Qa(e){e._currentValue=Uh.current,$(Uh)}function Yh(e,s,o){for(;e!==null;){var u=e.alternate;if((e.childLanes&s)!==s?(e.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),e===o)break;e=e.return}}function Gh(e,s,o,u){var p=e.child;for(p!==null&&(p.return=e);p!==null;){var g=p.dependencies;if(g!==null){var y=p.child;g=g.firstContext;t:for(;g!==null;){var T=g;g=p;for(var R=0;R<s.length;R++)if(T.context===s[R]){g.lanes|=o,T=g.alternate,T!==null&&(T.lanes|=o),Yh(g.return,o,e),u||(y=null);break t}g=T.next}}else if(p.tag===18){if(y=p.return,y===null)throw Error(n(341));y.lanes|=o,g=y.alternate,g!==null&&(g.lanes|=o),Yh(y,o,e),y=null}else y=p.child;if(y!==null)y.return=p;else for(y=p;y!==null;){if(y===e){y=null;break}if(p=y.sibling,p!==null){p.return=y.return,y=p;break}y=y.return}p=y}}function Tl(e,s,o,u){e=null;for(var p=s,g=!1;p!==null;){if(!g){if((p.flags&524288)!==0)g=!0;else if((p.flags&262144)!==0)break}if(p.tag===10){var y=p.alternate;if(y===null)throw Error(n(387));if(y=y.memoizedProps,y!==null){var T=p.type;Cn(p.pendingProps.value,y.value)||(e!==null?e.push(T):e=[T])}}else if(p===St.current){if(y=p.alternate,y===null)throw Error(n(387));y.memoizedState.memoizedState!==p.memoizedState.memoizedState&&(e!==null?e.push(cc):e=[cc])}p=p.return}e!==null&&Gh(s,e,o,u),s.flags|=262144}function Pu(e){for(e=e.firstContext;e!==null;){if(!Cn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function zr(e){Ar=e,Wa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ai(e){return Cx(Ar,e)}function Uu(e,s){return Ar===null&&zr(e),Cx(e,s)}function Cx(e,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},Wa===null){if(e===null)throw Error(n(308));Wa=s,e.dependencies={lanes:0,firstContext:s},e.flags|=524288}else Wa=Wa.next=s;return o}var JS=typeof AbortController<"u"?AbortController:function(){var e=[],s=this.signal={aborted:!1,addEventListener:function(o,u){e.push(u)}};this.abort=function(){s.aborted=!0,e.forEach(function(o){return o()})}},t3=a.unstable_scheduleCallback,e3=a.unstable_NormalPriority,oi={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qh(){return{controller:new JS,data:new Map,refCount:0}}function Bo(e){e.refCount--,e.refCount===0&&t3(e3,function(){e.controller.abort()})}var Ho=null,Vh=0,El=0,Ml=null;function i3(e,s){if(Ho===null){var o=Ho=[];Vh=0,El=$p(),Ml={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Vh++,s.then(Ax,Ax),s}function Ax(){if(--Vh===0&&Ho!==null){Ml!==null&&(Ml.status="fulfilled");var e=Ho;Ho=null,El=0,Ml=null;for(var s=0;s<e.length;s++)(0,e[s])()}}function n3(e,s){var o=[],u={status:"pending",value:null,reason:null,then:function(p){o.push(p)}};return e.then(function(){u.status="fulfilled",u.value=s;for(var p=0;p<o.length;p++)(0,o[p])(s)},function(p){for(u.status="rejected",u.reason=p,p=0;p<o.length;p++)(0,o[p])(void 0)}),u}var zx=B.S;B.S=function(e,s){hv=vt(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&i3(e,s),zx!==null&&zx(e,s)};var Or=C(null);function Ih(){var e=Or.current;return e!==null?e:we.pooledCache}function Yu(e,s){s===null?nt(Or,Or.current):nt(Or,s.pool)}function Ox(){var e=Ih();return e===null?null:{parent:oi._currentValue,pool:e}}var Cl=Error(n(460)),Xh=Error(n(474)),Gu=Error(n(542)),qu={then:function(){}};function Rx(e){return e=e.status,e==="fulfilled"||e==="rejected"}function jx(e,s,o){switch(o=e[o],o===void 0?e.push(s):o!==s&&(s.then(Va,Va),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,Nx(e),e;default:if(typeof s.status=="string")s.then(Va,Va);else{if(e=we,e!==null&&100<e.shellSuspendCounter)throw Error(n(482));e=s,e.status="pending",e.then(function(u){if(s.status==="pending"){var p=s;p.status="fulfilled",p.value=u}},function(u){if(s.status==="pending"){var p=s;p.status="rejected",p.reason=u}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,Nx(e),e}throw jr=s,Cl}}function Rr(e){try{var s=e._init;return s(e._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(jr=o,Cl):o}}var jr=null;function Dx(){if(jr===null)throw Error(n(459));var e=jr;return jr=null,e}function Nx(e){if(e===Cl||e===Gu)throw Error(n(483))}var Al=null,Fo=0;function Vu(e){var s=Fo;return Fo+=1,Al===null&&(Al=[]),jx(Al,e,s)}function Po(e,s){s=s.props.ref,e.ref=s!==void 0?s:null}function Iu(e,s){throw s.$$typeof===b?Error(n(525)):(e=Object.prototype.toString.call(s),Error(n(31,e==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":e)))}function Lx(e){function s(P,L){if(e){var q=P.deletions;q===null?(P.deletions=[L],P.flags|=16):q.push(L)}}function o(P,L){if(!e)return null;for(;L!==null;)s(P,L),L=L.sibling;return null}function u(P){for(var L=new Map;P!==null;)P.key!==null?L.set(P.key,P):L.set(P.index,P),P=P.sibling;return L}function p(P,L){return P=Xa(P,L),P.index=0,P.sibling=null,P}function g(P,L,q){return P.index=q,e?(q=P.alternate,q!==null?(q=q.index,q<L?(P.flags|=67108866,L):q):(P.flags|=67108866,L)):(P.flags|=1048576,L)}function y(P){return e&&P.alternate===null&&(P.flags|=67108866),P}function T(P,L,q,J){return L===null||L.tag!==6?(L=Nh(q,P.mode,J),L.return=P,L):(L=p(L,q),L.return=P,L)}function R(P,L,q,J){var _t=q.type;return _t===w?K(P,L,q.props.children,J,q.key):L!==null&&(L.elementType===_t||typeof _t=="object"&&_t!==null&&_t.$$typeof===F&&Rr(_t)===L.type)?(L=p(L,q.props),Po(L,q),L.return=P,L):(L=Hu(q.type,q.key,q.props,null,P.mode,J),Po(L,q),L.return=P,L)}function V(P,L,q,J){return L===null||L.tag!==4||L.stateNode.containerInfo!==q.containerInfo||L.stateNode.implementation!==q.implementation?(L=Lh(q,P.mode,J),L.return=P,L):(L=p(L,q.children||[]),L.return=P,L)}function K(P,L,q,J,_t){return L===null||L.tag!==7?(L=Mr(q,P.mode,J,_t),L.return=P,L):(L=p(L,q),L.return=P,L)}function tt(P,L,q){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return L=Nh(""+L,P.mode,q),L.return=P,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case v:return q=Hu(L.type,L.key,L.props,null,P.mode,q),Po(q,L),q.return=P,q;case _:return L=Lh(L,P.mode,q),L.return=P,L;case F:return L=Rr(L),tt(P,L,q)}if(lt(L)||Y(L))return L=Mr(L,P.mode,q,null),L.return=P,L;if(typeof L.then=="function")return tt(P,Vu(L),q);if(L.$$typeof===A)return tt(P,Uu(P,L),q);Iu(P,L)}return null}function I(P,L,q,J){var _t=L!==null?L.key:null;if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return _t!==null?null:T(P,L,""+q,J);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case v:return q.key===_t?R(P,L,q,J):null;case _:return q.key===_t?V(P,L,q,J):null;case F:return q=Rr(q),I(P,L,q,J)}if(lt(q)||Y(q))return _t!==null?null:K(P,L,q,J,null);if(typeof q.then=="function")return I(P,L,Vu(q),J);if(q.$$typeof===A)return I(P,L,Uu(P,q),J);Iu(P,q)}return null}function Z(P,L,q,J,_t){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return P=P.get(q)||null,T(L,P,""+J,_t);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case v:return P=P.get(J.key===null?q:J.key)||null,R(L,P,J,_t);case _:return P=P.get(J.key===null?q:J.key)||null,V(L,P,J,_t);case F:return J=Rr(J),Z(P,L,q,J,_t)}if(lt(J)||Y(J))return P=P.get(q)||null,K(L,P,J,_t,null);if(typeof J.then=="function")return Z(P,L,q,Vu(J),_t);if(J.$$typeof===A)return Z(P,L,q,Uu(L,J),_t);Iu(L,J)}return null}function gt(P,L,q,J){for(var _t=null,se=null,xt=L,Dt=L=0,Qt=null;xt!==null&&Dt<q.length;Dt++){xt.index>Dt?(Qt=xt,xt=null):Qt=xt.sibling;var re=I(P,xt,q[Dt],J);if(re===null){xt===null&&(xt=Qt);break}e&&xt&&re.alternate===null&&s(P,xt),L=g(re,L,Dt),se===null?_t=re:se.sibling=re,se=re,xt=Qt}if(Dt===q.length)return o(P,xt),Kt&&$a(P,Dt),_t;if(xt===null){for(;Dt<q.length;Dt++)xt=tt(P,q[Dt],J),xt!==null&&(L=g(xt,L,Dt),se===null?_t=xt:se.sibling=xt,se=xt);return Kt&&$a(P,Dt),_t}for(xt=u(xt);Dt<q.length;Dt++)Qt=Z(xt,P,Dt,q[Dt],J),Qt!==null&&(e&&Qt.alternate!==null&&xt.delete(Qt.key===null?Dt:Qt.key),L=g(Qt,L,Dt),se===null?_t=Qt:se.sibling=Qt,se=Qt);return e&&xt.forEach(function(Ws){return s(P,Ws)}),Kt&&$a(P,Dt),_t}function kt(P,L,q,J){if(q==null)throw Error(n(151));for(var _t=null,se=null,xt=L,Dt=L=0,Qt=null,re=q.next();xt!==null&&!re.done;Dt++,re=q.next()){xt.index>Dt?(Qt=xt,xt=null):Qt=xt.sibling;var Ws=I(P,xt,re.value,J);if(Ws===null){xt===null&&(xt=Qt);break}e&&xt&&Ws.alternate===null&&s(P,xt),L=g(Ws,L,Dt),se===null?_t=Ws:se.sibling=Ws,se=Ws,xt=Qt}if(re.done)return o(P,xt),Kt&&$a(P,Dt),_t;if(xt===null){for(;!re.done;Dt++,re=q.next())re=tt(P,re.value,J),re!==null&&(L=g(re,L,Dt),se===null?_t=re:se.sibling=re,se=re);return Kt&&$a(P,Dt),_t}for(xt=u(xt);!re.done;Dt++,re=q.next())re=Z(xt,P,Dt,re.value,J),re!==null&&(e&&re.alternate!==null&&xt.delete(re.key===null?Dt:re.key),L=g(re,L,Dt),se===null?_t=re:se.sibling=re,se=re);return e&&xt.forEach(function(pk){return s(P,pk)}),Kt&&$a(P,Dt),_t}function ye(P,L,q,J){if(typeof q=="object"&&q!==null&&q.type===w&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case v:t:{for(var _t=q.key;L!==null;){if(L.key===_t){if(_t=q.type,_t===w){if(L.tag===7){o(P,L.sibling),J=p(L,q.props.children),J.return=P,P=J;break t}}else if(L.elementType===_t||typeof _t=="object"&&_t!==null&&_t.$$typeof===F&&Rr(_t)===L.type){o(P,L.sibling),J=p(L,q.props),Po(J,q),J.return=P,P=J;break t}o(P,L);break}else s(P,L);L=L.sibling}q.type===w?(J=Mr(q.props.children,P.mode,J,q.key),J.return=P,P=J):(J=Hu(q.type,q.key,q.props,null,P.mode,J),Po(J,q),J.return=P,P=J)}return y(P);case _:t:{for(_t=q.key;L!==null;){if(L.key===_t)if(L.tag===4&&L.stateNode.containerInfo===q.containerInfo&&L.stateNode.implementation===q.implementation){o(P,L.sibling),J=p(L,q.children||[]),J.return=P,P=J;break t}else{o(P,L);break}else s(P,L);L=L.sibling}J=Lh(q,P.mode,J),J.return=P,P=J}return y(P);case F:return q=Rr(q),ye(P,L,q,J)}if(lt(q))return gt(P,L,q,J);if(Y(q)){if(_t=Y(q),typeof _t!="function")throw Error(n(150));return q=_t.call(q),kt(P,L,q,J)}if(typeof q.then=="function")return ye(P,L,Vu(q),J);if(q.$$typeof===A)return ye(P,L,Uu(P,q),J);Iu(P,q)}return typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint"?(q=""+q,L!==null&&L.tag===6?(o(P,L.sibling),J=p(L,q),J.return=P,P=J):(o(P,L),J=Nh(q,P.mode,J),J.return=P,P=J),y(P)):o(P,L)}return function(P,L,q,J){try{Fo=0;var _t=ye(P,L,q,J);return Al=null,_t}catch(xt){if(xt===Cl||xt===Gu)throw xt;var se=An(29,xt,null,P.mode);return se.lanes=J,se.return=P,se}}}var Dr=Lx(!0),Bx=Lx(!1),Rs=!1;function $h(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wh(e,s){e=e.updateQueue,s.updateQueue===e&&(s.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function js(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ds(e,s,o){var u=e.updateQueue;if(u===null)return null;if(u=u.shared,(ue&2)!==0){var p=u.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s,s=Bu(e),yx(e,null,o),s}return Lu(e,u,s,o),Bu(e)}function Uo(e,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var u=s.lanes;u&=e.pendingLanes,o|=u,s.lanes=o,zt(e,o)}}function Qh(e,s){var o=e.updateQueue,u=e.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var p=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var y={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};g===null?p=g=y:g=g.next=y,o=o.next}while(o!==null);g===null?p=g=s:g=g.next=s}else p=g=s;o={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:g,shared:u.shared,callbacks:u.callbacks},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=s:e.next=s,o.lastBaseUpdate=s}var Zh=!1;function Yo(){if(Zh){var e=Ml;if(e!==null)throw e}}function Go(e,s,o,u){Zh=!1;var p=e.updateQueue;Rs=!1;var g=p.firstBaseUpdate,y=p.lastBaseUpdate,T=p.shared.pending;if(T!==null){p.shared.pending=null;var R=T,V=R.next;R.next=null,y===null?g=V:y.next=V,y=R;var K=e.alternate;K!==null&&(K=K.updateQueue,T=K.lastBaseUpdate,T!==y&&(T===null?K.firstBaseUpdate=V:T.next=V,K.lastBaseUpdate=R))}if(g!==null){var tt=p.baseState;y=0,K=V=R=null,T=g;do{var I=T.lane&-536870913,Z=I!==T.lane;if(Z?(Wt&I)===I:(u&I)===I){I!==0&&I===El&&(Zh=!0),K!==null&&(K=K.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var gt=e,kt=T;I=s;var ye=o;switch(kt.tag){case 1:if(gt=kt.payload,typeof gt=="function"){tt=gt.call(ye,tt,I);break t}tt=gt;break t;case 3:gt.flags=gt.flags&-65537|128;case 0:if(gt=kt.payload,I=typeof gt=="function"?gt.call(ye,tt,I):gt,I==null)break t;tt=x({},tt,I);break t;case 2:Rs=!0}}I=T.callback,I!==null&&(e.flags|=64,Z&&(e.flags|=8192),Z=p.callbacks,Z===null?p.callbacks=[I]:Z.push(I))}else Z={lane:I,tag:T.tag,payload:T.payload,callback:T.callback,next:null},K===null?(V=K=Z,R=tt):K=K.next=Z,y|=I;if(T=T.next,T===null){if(T=p.shared.pending,T===null)break;Z=T,T=Z.next,Z.next=null,p.lastBaseUpdate=Z,p.shared.pending=null}}while(!0);K===null&&(R=tt),p.baseState=R,p.firstBaseUpdate=V,p.lastBaseUpdate=K,g===null&&(p.shared.lanes=0),Fs|=y,e.lanes=y,e.memoizedState=tt}}function Hx(e,s){if(typeof e!="function")throw Error(n(191,e));e.call(s)}function Fx(e,s){var o=e.callbacks;if(o!==null)for(e.callbacks=null,e=0;e<o.length;e++)Hx(o[e],s)}var zl=C(null),Xu=C(0);function Px(e,s){e=ss,nt(Xu,e),nt(zl,s),ss=e|s.baseLanes}function Kh(){nt(Xu,ss),nt(zl,zl.current)}function Jh(){ss=Xu.current,$(zl),$(Xu)}var zn=C(null),na=null;function Ns(e){var s=e.alternate;nt(ii,ii.current&1),nt(zn,e),na===null&&(s===null||zl.current!==null||s.memoizedState!==null)&&(na=e)}function tp(e){nt(ii,ii.current),nt(zn,e),na===null&&(na=e)}function Ux(e){e.tag===22?(nt(ii,ii.current),nt(zn,e),na===null&&(na=e)):Ls()}function Ls(){nt(ii,ii.current),nt(zn,zn.current)}function On(e){$(zn),na===e&&(na=null),$(ii)}var ii=C(0);function $u(e){for(var s=e;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||r0(o)||l0(o)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Za=0,jt=null,be=null,ci=null,Wu=!1,Ol=!1,Nr=!1,Qu=0,qo=0,Rl=null,a3=0;function Qe(){throw Error(n(321))}function ep(e,s){if(s===null)return!1;for(var o=0;o<s.length&&o<e.length;o++)if(!Cn(e[o],s[o]))return!1;return!0}function ip(e,s,o,u,p,g){return Za=g,jt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,B.H=e===null||e.memoizedState===null?kb:xp,Nr=!1,g=o(u,p),Nr=!1,Ol&&(g=Gx(s,o,u,p)),Yx(e),g}function Yx(e){B.H=Xo;var s=be!==null&&be.next!==null;if(Za=0,ci=be=jt=null,Wu=!1,qo=0,Rl=null,s)throw Error(n(300));e===null||ui||(e=e.dependencies,e!==null&&Pu(e)&&(ui=!0))}function Gx(e,s,o,u){jt=e;var p=0;do{if(Ol&&(Rl=null),qo=0,Ol=!1,25<=p)throw Error(n(301));if(p+=1,ci=be=null,e.updateQueue!=null){var g=e.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}B.H=Tb,g=s(o,u)}while(Ol);return g}function s3(){var e=B.H,s=e.useState()[0];return s=typeof s.then=="function"?Vo(s):s,e=e.useState()[0],(be!==null?be.memoizedState:null)!==e&&(jt.flags|=1024),s}function np(){var e=Qu!==0;return Qu=0,e}function ap(e,s,o){s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~o}function sp(e){if(Wu){for(e=e.memoizedState;e!==null;){var s=e.queue;s!==null&&(s.pending=null),e=e.next}Wu=!1}Za=0,ci=be=jt=null,Ol=!1,qo=Qu=0,Rl=null}function Xi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ci===null?jt.memoizedState=ci=e:ci=ci.next=e,ci}function ni(){if(be===null){var e=jt.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var s=ci===null?jt.memoizedState:ci.next;if(s!==null)ci=s,be=e;else{if(e===null)throw jt.alternate===null?Error(n(467)):Error(n(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},ci===null?jt.memoizedState=ci=e:ci=ci.next=e}return ci}function Zu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Vo(e){var s=qo;return qo+=1,Rl===null&&(Rl=[]),e=jx(Rl,e,s),s=jt,(ci===null?s.memoizedState:ci.next)===null&&(s=s.alternate,B.H=s===null||s.memoizedState===null?kb:xp),e}function Ku(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Vo(e);if(e.$$typeof===A)return Ai(e)}throw Error(n(438,String(e)))}function rp(e){var s=null,o=jt.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var u=jt.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(s={data:u.data.map(function(p){return p.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=Zu(),jt.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(e),u=0;u<e;u++)o[u]=W;return s.index++,o}function Ka(e,s){return typeof s=="function"?s(e):s}function Ju(e){var s=ni();return lp(s,be,e)}function lp(e,s,o){var u=e.queue;if(u===null)throw Error(n(311));u.lastRenderedReducer=o;var p=e.baseQueue,g=u.pending;if(g!==null){if(p!==null){var y=p.next;p.next=g.next,g.next=y}s.baseQueue=p=g,u.pending=null}if(g=e.baseState,p===null)e.memoizedState=g;else{s=p.next;var T=y=null,R=null,V=s,K=!1;do{var tt=V.lane&-536870913;if(tt!==V.lane?(Wt&tt)===tt:(Za&tt)===tt){var I=V.revertLane;if(I===0)R!==null&&(R=R.next={lane:0,revertLane:0,gesture:null,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),tt===El&&(K=!0);else if((Za&I)===I){V=V.next,I===El&&(K=!0);continue}else tt={lane:0,revertLane:V.revertLane,gesture:null,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},R===null?(T=R=tt,y=g):R=R.next=tt,jt.lanes|=I,Fs|=I;tt=V.action,Nr&&o(g,tt),g=V.hasEagerState?V.eagerState:o(g,tt)}else I={lane:tt,revertLane:V.revertLane,gesture:V.gesture,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},R===null?(T=R=I,y=g):R=R.next=I,jt.lanes|=tt,Fs|=tt;V=V.next}while(V!==null&&V!==s);if(R===null?y=g:R.next=T,!Cn(g,e.memoizedState)&&(ui=!0,K&&(o=Ml,o!==null)))throw o;e.memoizedState=g,e.baseState=y,e.baseQueue=R,u.lastRenderedState=g}return p===null&&(u.lanes=0),[e.memoizedState,u.dispatch]}function op(e){var s=ni(),o=s.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=e;var u=o.dispatch,p=o.pending,g=s.memoizedState;if(p!==null){o.pending=null;var y=p=p.next;do g=e(g,y.action),y=y.next;while(y!==p);Cn(g,s.memoizedState)||(ui=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),o.lastRenderedState=g}return[g,u]}function qx(e,s,o){var u=jt,p=ni(),g=Kt;if(g){if(o===void 0)throw Error(n(407));o=o()}else o=s();var y=!Cn((be||p).memoizedState,o);if(y&&(p.memoizedState=o,ui=!0),p=p.queue,dp(Xx.bind(null,u,p,e),[e]),p.getSnapshot!==s||y||ci!==null&&ci.memoizedState.tag&1){if(u.flags|=2048,jl(9,{destroy:void 0},Ix.bind(null,u,p,o,s),null),we===null)throw Error(n(349));g||(Za&127)!==0||Vx(u,s,o)}return o}function Vx(e,s,o){e.flags|=16384,e={getSnapshot:s,value:o},s=jt.updateQueue,s===null?(s=Zu(),jt.updateQueue=s,s.stores=[e]):(o=s.stores,o===null?s.stores=[e]:o.push(e))}function Ix(e,s,o,u){s.value=o,s.getSnapshot=u,$x(s)&&Wx(e)}function Xx(e,s,o){return o(function(){$x(s)&&Wx(e)})}function $x(e){var s=e.getSnapshot;e=e.value;try{var o=s();return!Cn(e,o)}catch{return!0}}function Wx(e){var s=Er(e,2);s!==null&&hn(s,e,2)}function cp(e){var s=Xi();if(typeof e=="function"){var o=e;if(e=o(),Nr){Xe(!0);try{o()}finally{Xe(!1)}}}return s.memoizedState=s.baseState=e,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ka,lastRenderedState:e},s}function Qx(e,s,o,u){return e.baseState=o,lp(e,be,typeof u=="function"?u:Ka)}function r3(e,s,o,u,p){if(id(e))throw Error(n(485));if(e=s.action,e!==null){var g={payload:p,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){g.listeners.push(y)}};B.T!==null?o(!0):g.isTransition=!1,u(g),o=s.pending,o===null?(g.next=s.pending=g,Zx(s,g)):(g.next=o.next,s.pending=o.next=g)}}function Zx(e,s){var o=s.action,u=s.payload,p=e.state;if(s.isTransition){var g=B.T,y={};B.T=y;try{var T=o(p,u),R=B.S;R!==null&&R(y,T),Kx(e,s,T)}catch(V){up(e,s,V)}finally{g!==null&&y.types!==null&&(g.types=y.types),B.T=g}}else try{g=o(p,u),Kx(e,s,g)}catch(V){up(e,s,V)}}function Kx(e,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Jx(e,s,u)},function(u){return up(e,s,u)}):Jx(e,s,o)}function Jx(e,s,o){s.status="fulfilled",s.value=o,tb(s),e.state=o,s=e.pending,s!==null&&(o=s.next,o===s?e.pending=null:(o=o.next,s.next=o,Zx(e,o)))}function up(e,s,o){var u=e.pending;if(e.pending=null,u!==null){u=u.next;do s.status="rejected",s.reason=o,tb(s),s=s.next;while(s!==u)}e.action=null}function tb(e){e=e.listeners;for(var s=0;s<e.length;s++)(0,e[s])()}function eb(e,s){return s}function ib(e,s){if(Kt){var o=we.formState;if(o!==null){t:{var u=jt;if(Kt){if(Ce){e:{for(var p=Ce,g=ia;p.nodeType!==8;){if(!g){p=null;break e}if(p=aa(p.nextSibling),p===null){p=null;break e}}g=p.data,p=g==="F!"||g==="F"?p:null}if(p){Ce=aa(p.nextSibling),u=p.data==="F!";break t}}zs(u)}u=!1}u&&(s=o[0])}}return o=Xi(),o.memoizedState=o.baseState=s,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:eb,lastRenderedState:s},o.queue=u,o=wb.bind(null,jt,u),u.dispatch=o,u=cp(!1),g=mp.bind(null,jt,!1,u.queue),u=Xi(),p={state:s,dispatch:null,action:e,pending:null},u.queue=p,o=r3.bind(null,jt,p,g,o),p.dispatch=o,u.memoizedState=e,[s,o,!1]}function nb(e){var s=ni();return ab(s,be,e)}function ab(e,s,o){if(s=lp(e,s,eb)[0],e=Ju(Ka)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var u=Vo(s)}catch(y){throw y===Cl?Gu:y}else u=s;s=ni();var p=s.queue,g=p.dispatch;return o!==s.memoizedState&&(jt.flags|=2048,jl(9,{destroy:void 0},l3.bind(null,p,o),null)),[u,g,e]}function l3(e,s){e.action=s}function sb(e){var s=ni(),o=be;if(o!==null)return ab(s,o,e);ni(),s=s.memoizedState,o=ni();var u=o.queue.dispatch;return o.memoizedState=e,[s,u,!1]}function jl(e,s,o,u){return e={tag:e,create:o,deps:u,inst:s,next:null},s=jt.updateQueue,s===null&&(s=Zu(),jt.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=e.next=e:(u=o.next,o.next=e,e.next=u,s.lastEffect=e),e}function rb(){return ni().memoizedState}function td(e,s,o,u){var p=Xi();jt.flags|=e,p.memoizedState=jl(1|s,{destroy:void 0},o,u===void 0?null:u)}function ed(e,s,o,u){var p=ni();u=u===void 0?null:u;var g=p.memoizedState.inst;be!==null&&u!==null&&ep(u,be.memoizedState.deps)?p.memoizedState=jl(s,g,o,u):(jt.flags|=e,p.memoizedState=jl(1|s,g,o,u))}function lb(e,s){td(8390656,8,e,s)}function dp(e,s){ed(2048,8,e,s)}function o3(e){jt.flags|=4;var s=jt.updateQueue;if(s===null)s=Zu(),jt.updateQueue=s,s.events=[e];else{var o=s.events;o===null?s.events=[e]:o.push(e)}}function ob(e){var s=ni().memoizedState;return o3({ref:s,nextImpl:e}),function(){if((ue&2)!==0)throw Error(n(440));return s.impl.apply(void 0,arguments)}}function cb(e,s){return ed(4,2,e,s)}function ub(e,s){return ed(4,4,e,s)}function db(e,s){if(typeof s=="function"){e=e();var o=s(e);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return e=e(),s.current=e,function(){s.current=null}}function fb(e,s,o){o=o!=null?o.concat([e]):null,ed(4,4,db.bind(null,s,e),o)}function fp(){}function hb(e,s){var o=ni();s=s===void 0?null:s;var u=o.memoizedState;return s!==null&&ep(s,u[1])?u[0]:(o.memoizedState=[e,s],e)}function pb(e,s){var o=ni();s=s===void 0?null:s;var u=o.memoizedState;if(s!==null&&ep(s,u[1]))return u[0];if(u=e(),Nr){Xe(!0);try{e()}finally{Xe(!1)}}return o.memoizedState=[u,s],u}function hp(e,s,o){return o===void 0||(Za&1073741824)!==0&&(Wt&261930)===0?e.memoizedState=s:(e.memoizedState=o,e=gv(),jt.lanes|=e,Fs|=e,o)}function gb(e,s,o,u){return Cn(o,s)?o:zl.current!==null?(e=hp(e,o,u),Cn(e,s)||(ui=!0),e):(Za&42)===0||(Za&1073741824)!==0&&(Wt&261930)===0?(ui=!0,e.memoizedState=o):(e=gv(),jt.lanes|=e,Fs|=e,s)}function mb(e,s,o,u,p){var g=X.p;X.p=g!==0&&8>g?g:8;var y=B.T,T={};B.T=T,mp(e,!1,s,o);try{var R=p(),V=B.S;if(V!==null&&V(T,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var K=n3(R,u);Io(e,s,K,Dn(e))}else Io(e,s,u,Dn(e))}catch(tt){Io(e,s,{then:function(){},status:"rejected",reason:tt},Dn())}finally{X.p=g,y!==null&&T.types!==null&&(y.types=T.types),B.T=y}}function c3(){}function pp(e,s,o,u){if(e.tag!==5)throw Error(n(476));var p=xb(e).queue;mb(e,p,s,st,o===null?c3:function(){return bb(e),o(u)})}function xb(e){var s=e.memoizedState;if(s!==null)return s;s={memoizedState:st,baseState:st,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ka,lastRenderedState:st},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ka,lastRenderedState:o},next:null},e.memoizedState=s,e=e.alternate,e!==null&&(e.memoizedState=s),s}function bb(e){var s=xb(e);s.next===null&&(s=e.alternate.memoizedState),Io(e,s.next.queue,{},Dn())}function gp(){return Ai(cc)}function vb(){return ni().memoizedState}function yb(){return ni().memoizedState}function u3(e){for(var s=e.return;s!==null;){switch(s.tag){case 24:case 3:var o=Dn();e=js(o);var u=Ds(s,e,o);u!==null&&(hn(u,s,o),Uo(u,s,o)),s={cache:qh()},e.payload=s;return}s=s.return}}function d3(e,s,o){var u=Dn();o={lane:u,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},id(e)?_b(s,o):(o=jh(e,s,o,u),o!==null&&(hn(o,e,u),Sb(o,s,u)))}function wb(e,s,o){var u=Dn();Io(e,s,o,u)}function Io(e,s,o,u){var p={lane:u,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(id(e))_b(s,p);else{var g=e.alternate;if(e.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var y=s.lastRenderedState,T=g(y,o);if(p.hasEagerState=!0,p.eagerState=T,Cn(T,y))return Lu(e,s,p,0),we===null&&Nu(),!1}catch{}if(o=jh(e,s,p,u),o!==null)return hn(o,e,u),Sb(o,s,u),!0}return!1}function mp(e,s,o,u){if(u={lane:2,revertLane:$p(),gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},id(e)){if(s)throw Error(n(479))}else s=jh(e,o,u,2),s!==null&&hn(s,e,2)}function id(e){var s=e.alternate;return e===jt||s!==null&&s===jt}function _b(e,s){Ol=Wu=!0;var o=e.pending;o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s}function Sb(e,s,o){if((o&4194048)!==0){var u=s.lanes;u&=e.pendingLanes,o|=u,s.lanes=o,zt(e,o)}}var Xo={readContext:Ai,use:Ku,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};Xo.useEffectEvent=Qe;var kb={readContext:Ai,use:Ku,useCallback:function(e,s){return Xi().memoizedState=[e,s===void 0?null:s],e},useContext:Ai,useEffect:lb,useImperativeHandle:function(e,s,o){o=o!=null?o.concat([e]):null,td(4194308,4,db.bind(null,s,e),o)},useLayoutEffect:function(e,s){return td(4194308,4,e,s)},useInsertionEffect:function(e,s){td(4,2,e,s)},useMemo:function(e,s){var o=Xi();s=s===void 0?null:s;var u=e();if(Nr){Xe(!0);try{e()}finally{Xe(!1)}}return o.memoizedState=[u,s],u},useReducer:function(e,s,o){var u=Xi();if(o!==void 0){var p=o(s);if(Nr){Xe(!0);try{o(s)}finally{Xe(!1)}}}else p=s;return u.memoizedState=u.baseState=p,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:p},u.queue=e,e=e.dispatch=d3.bind(null,jt,e),[u.memoizedState,e]},useRef:function(e){var s=Xi();return e={current:e},s.memoizedState=e},useState:function(e){e=cp(e);var s=e.queue,o=wb.bind(null,jt,s);return s.dispatch=o,[e.memoizedState,o]},useDebugValue:fp,useDeferredValue:function(e,s){var o=Xi();return hp(o,e,s)},useTransition:function(){var e=cp(!1);return e=mb.bind(null,jt,e.queue,!0,!1),Xi().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,s,o){var u=jt,p=Xi();if(Kt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=s(),we===null)throw Error(n(349));(Wt&127)!==0||Vx(u,s,o)}p.memoizedState=o;var g={value:o,getSnapshot:s};return p.queue=g,lb(Xx.bind(null,u,g,e),[e]),u.flags|=2048,jl(9,{destroy:void 0},Ix.bind(null,u,g,o,s),null),o},useId:function(){var e=Xi(),s=we.identifierPrefix;if(Kt){var o=Ea,u=Ta;o=(u&~(1<<32-Be(u)-1)).toString(32)+o,s="_"+s+"R_"+o,o=Qu++,0<o&&(s+="H"+o.toString(32)),s+="_"}else o=a3++,s="_"+s+"r_"+o.toString(32)+"_";return e.memoizedState=s},useHostTransitionStatus:gp,useFormState:ib,useActionState:ib,useOptimistic:function(e){var s=Xi();s.memoizedState=s.baseState=e;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=mp.bind(null,jt,!0,o),o.dispatch=s,[e,s]},useMemoCache:rp,useCacheRefresh:function(){return Xi().memoizedState=u3.bind(null,jt)},useEffectEvent:function(e){var s=Xi(),o={impl:e};return s.memoizedState=o,function(){if((ue&2)!==0)throw Error(n(440));return o.impl.apply(void 0,arguments)}}},xp={readContext:Ai,use:Ku,useCallback:hb,useContext:Ai,useEffect:dp,useImperativeHandle:fb,useInsertionEffect:cb,useLayoutEffect:ub,useMemo:pb,useReducer:Ju,useRef:rb,useState:function(){return Ju(Ka)},useDebugValue:fp,useDeferredValue:function(e,s){var o=ni();return gb(o,be.memoizedState,e,s)},useTransition:function(){var e=Ju(Ka)[0],s=ni().memoizedState;return[typeof e=="boolean"?e:Vo(e),s]},useSyncExternalStore:qx,useId:vb,useHostTransitionStatus:gp,useFormState:nb,useActionState:nb,useOptimistic:function(e,s){var o=ni();return Qx(o,be,e,s)},useMemoCache:rp,useCacheRefresh:yb};xp.useEffectEvent=ob;var Tb={readContext:Ai,use:Ku,useCallback:hb,useContext:Ai,useEffect:dp,useImperativeHandle:fb,useInsertionEffect:cb,useLayoutEffect:ub,useMemo:pb,useReducer:op,useRef:rb,useState:function(){return op(Ka)},useDebugValue:fp,useDeferredValue:function(e,s){var o=ni();return be===null?hp(o,e,s):gb(o,be.memoizedState,e,s)},useTransition:function(){var e=op(Ka)[0],s=ni().memoizedState;return[typeof e=="boolean"?e:Vo(e),s]},useSyncExternalStore:qx,useId:vb,useHostTransitionStatus:gp,useFormState:sb,useActionState:sb,useOptimistic:function(e,s){var o=ni();return be!==null?Qx(o,be,e,s):(o.baseState=e,[e,o.queue.dispatch])},useMemoCache:rp,useCacheRefresh:yb};Tb.useEffectEvent=ob;function bp(e,s,o,u){s=e.memoizedState,o=o(u,s),o=o==null?s:x({},s,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var vp={enqueueSetState:function(e,s,o){e=e._reactInternals;var u=Dn(),p=js(u);p.payload=s,o!=null&&(p.callback=o),s=Ds(e,p,u),s!==null&&(hn(s,e,u),Uo(s,e,u))},enqueueReplaceState:function(e,s,o){e=e._reactInternals;var u=Dn(),p=js(u);p.tag=1,p.payload=s,o!=null&&(p.callback=o),s=Ds(e,p,u),s!==null&&(hn(s,e,u),Uo(s,e,u))},enqueueForceUpdate:function(e,s){e=e._reactInternals;var o=Dn(),u=js(o);u.tag=2,s!=null&&(u.callback=s),s=Ds(e,u,o),s!==null&&(hn(s,e,o),Uo(s,e,o))}};function Eb(e,s,o,u,p,g,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(u,g,y):s.prototype&&s.prototype.isPureReactComponent?!jo(o,u)||!jo(p,g):!0}function Mb(e,s,o,u){e=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,u),s.state!==e&&vp.enqueueReplaceState(s,s.state,null)}function Lr(e,s){var o=s;if("ref"in s){o={};for(var u in s)u!=="ref"&&(o[u]=s[u])}if(e=e.defaultProps){o===s&&(o=x({},o));for(var p in e)o[p]===void 0&&(o[p]=e[p])}return o}function Cb(e){Du(e)}function Ab(e){console.error(e)}function zb(e){Du(e)}function nd(e,s){try{var o=e.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(u){setTimeout(function(){throw u})}}function Ob(e,s,o){try{var u=e.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(p){setTimeout(function(){throw p})}}function yp(e,s,o){return o=js(o),o.tag=3,o.payload={element:null},o.callback=function(){nd(e,s)},o}function Rb(e){return e=js(e),e.tag=3,e}function jb(e,s,o,u){var p=o.type.getDerivedStateFromError;if(typeof p=="function"){var g=u.value;e.payload=function(){return p(g)},e.callback=function(){Ob(s,o,u)}}var y=o.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){Ob(s,o,u),typeof p!="function"&&(Ps===null?Ps=new Set([this]):Ps.add(this));var T=u.stack;this.componentDidCatch(u.value,{componentStack:T!==null?T:""})})}function f3(e,s,o,u,p){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(s=o.alternate,s!==null&&Tl(s,o,p,!0),o=zn.current,o!==null){switch(o.tag){case 31:case 13:return na===null?gd():o.alternate===null&&Ze===0&&(Ze=3),o.flags&=-257,o.flags|=65536,o.lanes=p,u===qu?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([u]):s.add(u),Vp(e,u,p)),!1;case 22:return o.flags|=65536,u===qu?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([u]):o.add(u)),Vp(e,u,p)),!1}throw Error(n(435,o.tag))}return Vp(e,u,p),gd(),!1}if(Kt)return s=zn.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=p,u!==Fh&&(e=Error(n(422),{cause:u}),Lo(Jn(e,o)))):(u!==Fh&&(s=Error(n(423),{cause:u}),Lo(Jn(s,o))),e=e.current.alternate,e.flags|=65536,p&=-p,e.lanes|=p,u=Jn(u,o),p=yp(e.stateNode,u,p),Qh(e,p),Ze!==4&&(Ze=2)),!1;var g=Error(n(520),{cause:u});if(g=Jn(g,o),ec===null?ec=[g]:ec.push(g),Ze!==4&&(Ze=2),s===null)return!0;u=Jn(u,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,e=p&-p,o.lanes|=e,e=yp(o.stateNode,u,e),Qh(o,e),!1;case 1:if(s=o.type,g=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ps===null||!Ps.has(g))))return o.flags|=65536,p&=-p,o.lanes|=p,p=Rb(p),jb(p,e,o,u),Qh(o,p),!1}o=o.return}while(o!==null);return!1}var wp=Error(n(461)),ui=!1;function zi(e,s,o,u){s.child=e===null?Bx(s,null,o,u):Dr(s,e.child,o,u)}function Db(e,s,o,u,p){o=o.render;var g=s.ref;if("ref"in u){var y={};for(var T in u)T!=="ref"&&(y[T]=u[T])}else y=u;return zr(s),u=ip(e,s,o,y,g,p),T=np(),e!==null&&!ui?(ap(e,s,p),Ja(e,s,p)):(Kt&&T&&Bh(s),s.flags|=1,zi(e,s,u,p),s.child)}function Nb(e,s,o,u,p){if(e===null){var g=o.type;return typeof g=="function"&&!Dh(g)&&g.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=g,Lb(e,s,g,u,p)):(e=Hu(o.type,null,u,s,s.mode,p),e.ref=s.ref,e.return=s,s.child=e)}if(g=e.child,!Ap(e,p)){var y=g.memoizedProps;if(o=o.compare,o=o!==null?o:jo,o(y,u)&&e.ref===s.ref)return Ja(e,s,p)}return s.flags|=1,e=Xa(g,u),e.ref=s.ref,e.return=s,s.child=e}function Lb(e,s,o,u,p){if(e!==null){var g=e.memoizedProps;if(jo(g,u)&&e.ref===s.ref)if(ui=!1,s.pendingProps=u=g,Ap(e,p))(e.flags&131072)!==0&&(ui=!0);else return s.lanes=e.lanes,Ja(e,s,p)}return _p(e,s,o,u,p)}function Bb(e,s,o,u){var p=u.children,g=e!==null?e.memoizedState:null;if(e===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),u.mode==="hidden"){if((s.flags&128)!==0){if(g=g!==null?g.baseLanes|o:o,e!==null){for(u=s.child=e.child,p=0;u!==null;)p=p|u.lanes|u.childLanes,u=u.sibling;u=p&~g}else u=0,s.child=null;return Hb(e,s,g,o,u)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},e!==null&&Yu(s,g!==null?g.cachePool:null),g!==null?Px(s,g):Kh(),Ux(s);else return u=s.lanes=536870912,Hb(e,s,g!==null?g.baseLanes|o:o,o,u)}else g!==null?(Yu(s,g.cachePool),Px(s,g),Ls(),s.memoizedState=null):(e!==null&&Yu(s,null),Kh(),Ls());return zi(e,s,p,o),s.child}function $o(e,s){return e!==null&&e.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function Hb(e,s,o,u,p){var g=Ih();return g=g===null?null:{parent:oi._currentValue,pool:g},s.memoizedState={baseLanes:o,cachePool:g},e!==null&&Yu(s,null),Kh(),Ux(s),e!==null&&Tl(e,s,u,!0),s.childLanes=p,null}function ad(e,s){return s=rd({mode:s.mode,children:s.children},e.mode),s.ref=e.ref,e.child=s,s.return=e,s}function Fb(e,s,o){return Dr(s,e.child,null,o),e=ad(s,s.pendingProps),e.flags|=2,On(s),s.memoizedState=null,e}function h3(e,s,o){var u=s.pendingProps,p=(s.flags&128)!==0;if(s.flags&=-129,e===null){if(Kt){if(u.mode==="hidden")return e=ad(s,u),s.lanes=536870912,$o(null,e);if(tp(s),(e=Ce)?(e=Zv(e,ia),e=e!==null&&e.data==="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Cs!==null?{id:Ta,overflow:Ea}:null,retryLane:536870912,hydrationErrors:null},o=_x(e),o.return=s,s.child=o,Ci=s,Ce=null)):e=null,e===null)throw zs(s);return s.lanes=536870912,null}return ad(s,u)}var g=e.memoizedState;if(g!==null){var y=g.dehydrated;if(tp(s),p)if(s.flags&256)s.flags&=-257,s=Fb(e,s,o);else if(s.memoizedState!==null)s.child=e.child,s.flags|=128,s=null;else throw Error(n(558));else if(ui||Tl(e,s,o,!1),p=(o&e.childLanes)!==0,ui||p){if(u=we,u!==null&&(y=wt(u,o),y!==0&&y!==g.retryLane))throw g.retryLane=y,Er(e,y),hn(u,e,y),wp;gd(),s=Fb(e,s,o)}else e=g.treeContext,Ce=aa(y.nextSibling),Ci=s,Kt=!0,As=null,ia=!1,e!==null&&Tx(s,e),s=ad(s,u),s.flags|=4096;return s}return e=Xa(e.child,{mode:u.mode,children:u.children}),e.ref=s.ref,s.child=e,e.return=s,e}function sd(e,s){var o=s.ref;if(o===null)e!==null&&e.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(n(284));(e===null||e.ref!==o)&&(s.flags|=4194816)}}function _p(e,s,o,u,p){return zr(s),o=ip(e,s,o,u,void 0,p),u=np(),e!==null&&!ui?(ap(e,s,p),Ja(e,s,p)):(Kt&&u&&Bh(s),s.flags|=1,zi(e,s,o,p),s.child)}function Pb(e,s,o,u,p,g){return zr(s),s.updateQueue=null,o=Gx(s,u,o,p),Yx(e),u=np(),e!==null&&!ui?(ap(e,s,g),Ja(e,s,g)):(Kt&&u&&Bh(s),s.flags|=1,zi(e,s,o,g),s.child)}function Ub(e,s,o,u,p){if(zr(s),s.stateNode===null){var g=wl,y=o.contextType;typeof y=="object"&&y!==null&&(g=Ai(y)),g=new o(u,g),s.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=vp,s.stateNode=g,g._reactInternals=s,g=s.stateNode,g.props=u,g.state=s.memoizedState,g.refs={},$h(s),y=o.contextType,g.context=typeof y=="object"&&y!==null?Ai(y):wl,g.state=s.memoizedState,y=o.getDerivedStateFromProps,typeof y=="function"&&(bp(s,o,y,u),g.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(y=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),y!==g.state&&vp.enqueueReplaceState(g,g.state,null),Go(s,u,g,p),Yo(),g.state=s.memoizedState),typeof g.componentDidMount=="function"&&(s.flags|=4194308),u=!0}else if(e===null){g=s.stateNode;var T=s.memoizedProps,R=Lr(o,T);g.props=R;var V=g.context,K=o.contextType;y=wl,typeof K=="object"&&K!==null&&(y=Ai(K));var tt=o.getDerivedStateFromProps;K=typeof tt=="function"||typeof g.getSnapshotBeforeUpdate=="function",T=s.pendingProps!==T,K||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(T||V!==y)&&Mb(s,g,u,y),Rs=!1;var I=s.memoizedState;g.state=I,Go(s,u,g,p),Yo(),V=s.memoizedState,T||I!==V||Rs?(typeof tt=="function"&&(bp(s,o,tt,u),V=s.memoizedState),(R=Rs||Eb(s,o,R,u,I,V,y))?(K||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(s.flags|=4194308)):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=V),g.props=u,g.state=V,g.context=y,u=R):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{g=s.stateNode,Wh(e,s),y=s.memoizedProps,K=Lr(o,y),g.props=K,tt=s.pendingProps,I=g.context,V=o.contextType,R=wl,typeof V=="object"&&V!==null&&(R=Ai(V)),T=o.getDerivedStateFromProps,(V=typeof T=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(y!==tt||I!==R)&&Mb(s,g,u,R),Rs=!1,I=s.memoizedState,g.state=I,Go(s,u,g,p),Yo();var Z=s.memoizedState;y!==tt||I!==Z||Rs||e!==null&&e.dependencies!==null&&Pu(e.dependencies)?(typeof T=="function"&&(bp(s,o,T,u),Z=s.memoizedState),(K=Rs||Eb(s,o,K,u,I,Z,R)||e!==null&&e.dependencies!==null&&Pu(e.dependencies))?(V||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(u,Z,R),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(u,Z,R)),typeof g.componentDidUpdate=="function"&&(s.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof g.componentDidUpdate!="function"||y===e.memoizedProps&&I===e.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&I===e.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=Z),g.props=u,g.state=Z,g.context=R,u=K):(typeof g.componentDidUpdate!="function"||y===e.memoizedProps&&I===e.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&I===e.memoizedState||(s.flags|=1024),u=!1)}return g=u,sd(e,s),u=(s.flags&128)!==0,g||u?(g=s.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:g.render(),s.flags|=1,e!==null&&u?(s.child=Dr(s,e.child,null,p),s.child=Dr(s,null,o,p)):zi(e,s,o,p),s.memoizedState=g.state,e=s.child):e=Ja(e,s,p),e}function Yb(e,s,o,u){return Cr(),s.flags|=256,zi(e,s,o,u),s.child}var Sp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function kp(e){return{baseLanes:e,cachePool:Ox()}}function Tp(e,s,o){return e=e!==null?e.childLanes&~o:0,s&&(e|=jn),e}function Gb(e,s,o){var u=s.pendingProps,p=!1,g=(s.flags&128)!==0,y;if((y=g)||(y=e!==null&&e.memoizedState===null?!1:(ii.current&2)!==0),y&&(p=!0,s.flags&=-129),y=(s.flags&32)!==0,s.flags&=-33,e===null){if(Kt){if(p?Ns(s):Ls(),(e=Ce)?(e=Zv(e,ia),e=e!==null&&e.data!=="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Cs!==null?{id:Ta,overflow:Ea}:null,retryLane:536870912,hydrationErrors:null},o=_x(e),o.return=s,s.child=o,Ci=s,Ce=null)):e=null,e===null)throw zs(s);return l0(e)?s.lanes=32:s.lanes=536870912,null}var T=u.children;return u=u.fallback,p?(Ls(),p=s.mode,T=rd({mode:"hidden",children:T},p),u=Mr(u,p,o,null),T.return=s,u.return=s,T.sibling=u,s.child=T,u=s.child,u.memoizedState=kp(o),u.childLanes=Tp(e,y,o),s.memoizedState=Sp,$o(null,u)):(Ns(s),Ep(s,T))}var R=e.memoizedState;if(R!==null&&(T=R.dehydrated,T!==null)){if(g)s.flags&256?(Ns(s),s.flags&=-257,s=Mp(e,s,o)):s.memoizedState!==null?(Ls(),s.child=e.child,s.flags|=128,s=null):(Ls(),T=u.fallback,p=s.mode,u=rd({mode:"visible",children:u.children},p),T=Mr(T,p,o,null),T.flags|=2,u.return=s,T.return=s,u.sibling=T,s.child=u,Dr(s,e.child,null,o),u=s.child,u.memoizedState=kp(o),u.childLanes=Tp(e,y,o),s.memoizedState=Sp,s=$o(null,u));else if(Ns(s),l0(T)){if(y=T.nextSibling&&T.nextSibling.dataset,y)var V=y.dgst;y=V,u=Error(n(419)),u.stack="",u.digest=y,Lo({value:u,source:null,stack:null}),s=Mp(e,s,o)}else if(ui||Tl(e,s,o,!1),y=(o&e.childLanes)!==0,ui||y){if(y=we,y!==null&&(u=wt(y,o),u!==0&&u!==R.retryLane))throw R.retryLane=u,Er(e,u),hn(y,e,u),wp;r0(T)||gd(),s=Mp(e,s,o)}else r0(T)?(s.flags|=192,s.child=e.child,s=null):(e=R.treeContext,Ce=aa(T.nextSibling),Ci=s,Kt=!0,As=null,ia=!1,e!==null&&Tx(s,e),s=Ep(s,u.children),s.flags|=4096);return s}return p?(Ls(),T=u.fallback,p=s.mode,R=e.child,V=R.sibling,u=Xa(R,{mode:"hidden",children:u.children}),u.subtreeFlags=R.subtreeFlags&65011712,V!==null?T=Xa(V,T):(T=Mr(T,p,o,null),T.flags|=2),T.return=s,u.return=s,u.sibling=T,s.child=u,$o(null,u),u=s.child,T=e.child.memoizedState,T===null?T=kp(o):(p=T.cachePool,p!==null?(R=oi._currentValue,p=p.parent!==R?{parent:R,pool:R}:p):p=Ox(),T={baseLanes:T.baseLanes|o,cachePool:p}),u.memoizedState=T,u.childLanes=Tp(e,y,o),s.memoizedState=Sp,$o(e.child,u)):(Ns(s),o=e.child,e=o.sibling,o=Xa(o,{mode:"visible",children:u.children}),o.return=s,o.sibling=null,e!==null&&(y=s.deletions,y===null?(s.deletions=[e],s.flags|=16):y.push(e)),s.child=o,s.memoizedState=null,o)}function Ep(e,s){return s=rd({mode:"visible",children:s},e.mode),s.return=e,e.child=s}function rd(e,s){return e=An(22,e,null,s),e.lanes=0,e}function Mp(e,s,o){return Dr(s,e.child,null,o),e=Ep(s,s.pendingProps.children),e.flags|=2,s.memoizedState=null,e}function qb(e,s,o){e.lanes|=s;var u=e.alternate;u!==null&&(u.lanes|=s),Yh(e.return,s,o)}function Cp(e,s,o,u,p,g){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:p,treeForkCount:g}:(y.isBackwards=s,y.rendering=null,y.renderingStartTime=0,y.last=u,y.tail=o,y.tailMode=p,y.treeForkCount=g)}function Vb(e,s,o){var u=s.pendingProps,p=u.revealOrder,g=u.tail;u=u.children;var y=ii.current,T=(y&2)!==0;if(T?(y=y&1|2,s.flags|=128):y&=1,nt(ii,y),zi(e,s,u,o),u=Kt?No:0,!T&&e!==null&&(e.flags&128)!==0)t:for(e=s.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qb(e,o,s);else if(e.tag===19)qb(e,o,s);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===s)break t;for(;e.sibling===null;){if(e.return===null||e.return===s)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(p){case"forwards":for(o=s.child,p=null;o!==null;)e=o.alternate,e!==null&&$u(e)===null&&(p=o),o=o.sibling;o=p,o===null?(p=s.child,s.child=null):(p=o.sibling,o.sibling=null),Cp(s,!1,p,o,g,u);break;case"backwards":case"unstable_legacy-backwards":for(o=null,p=s.child,s.child=null;p!==null;){if(e=p.alternate,e!==null&&$u(e)===null){s.child=p;break}e=p.sibling,p.sibling=o,o=p,p=e}Cp(s,!0,o,null,g,u);break;case"together":Cp(s,!1,null,null,void 0,u);break;default:s.memoizedState=null}return s.child}function Ja(e,s,o){if(e!==null&&(s.dependencies=e.dependencies),Fs|=s.lanes,(o&s.childLanes)===0)if(e!==null){if(Tl(e,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(e!==null&&s.child!==e.child)throw Error(n(153));if(s.child!==null){for(e=s.child,o=Xa(e,e.pendingProps),s.child=o,o.return=s;e.sibling!==null;)e=e.sibling,o=o.sibling=Xa(e,e.pendingProps),o.return=s;o.sibling=null}return s.child}function Ap(e,s){return(e.lanes&s)!==0?!0:(e=e.dependencies,!!(e!==null&&Pu(e)))}function p3(e,s,o){switch(s.tag){case 3:te(s,s.stateNode.containerInfo),Os(s,oi,e.memoizedState.cache),Cr();break;case 27:case 5:Ei(s);break;case 4:te(s,s.stateNode.containerInfo);break;case 10:Os(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,tp(s),null;break;case 13:var u=s.memoizedState;if(u!==null)return u.dehydrated!==null?(Ns(s),s.flags|=128,null):(o&s.child.childLanes)!==0?Gb(e,s,o):(Ns(s),e=Ja(e,s,o),e!==null?e.sibling:null);Ns(s);break;case 19:var p=(e.flags&128)!==0;if(u=(o&s.childLanes)!==0,u||(Tl(e,s,o,!1),u=(o&s.childLanes)!==0),p){if(u)return Vb(e,s,o);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),nt(ii,ii.current),u)break;return null;case 22:return s.lanes=0,Bb(e,s,o,s.pendingProps);case 24:Os(s,oi,e.memoizedState.cache)}return Ja(e,s,o)}function Ib(e,s,o){if(e!==null)if(e.memoizedProps!==s.pendingProps)ui=!0;else{if(!Ap(e,o)&&(s.flags&128)===0)return ui=!1,p3(e,s,o);ui=(e.flags&131072)!==0}else ui=!1,Kt&&(s.flags&1048576)!==0&&kx(s,No,s.index);switch(s.lanes=0,s.tag){case 16:t:{var u=s.pendingProps;if(e=Rr(s.elementType),s.type=e,typeof e=="function")Dh(e)?(u=Lr(e,u),s.tag=1,s=Ub(null,s,e,u,o)):(s.tag=0,s=_p(null,s,e,u,o));else{if(e!=null){var p=e.$$typeof;if(p===O){s.tag=11,s=Db(null,s,e,u,o);break t}else if(p===j){s.tag=14,s=Nb(null,s,e,u,o);break t}}throw s=ct(e)||e,Error(n(306,s,""))}}return s;case 0:return _p(e,s,s.type,s.pendingProps,o);case 1:return u=s.type,p=Lr(u,s.pendingProps),Ub(e,s,u,p,o);case 3:t:{if(te(s,s.stateNode.containerInfo),e===null)throw Error(n(387));u=s.pendingProps;var g=s.memoizedState;p=g.element,Wh(e,s),Go(s,u,null,o);var y=s.memoizedState;if(u=y.cache,Os(s,oi,u),u!==g.cache&&Gh(s,[oi],o,!0),Yo(),u=y.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:y.cache},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){s=Yb(e,s,u,o);break t}else if(u!==p){p=Jn(Error(n(424)),s),Lo(p),s=Yb(e,s,u,o);break t}else for(e=s.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ce=aa(e.firstChild),Ci=s,Kt=!0,As=null,ia=!0,o=Bx(s,null,u,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Cr(),u===p){s=Ja(e,s,o);break t}zi(e,s,u,o)}s=s.child}return s;case 26:return sd(e,s),e===null?(o=ny(s.type,null,s.pendingProps,null))?s.memoizedState=o:Kt||(o=s.type,e=s.pendingProps,u=_d(ht.current).createElement(o),u[Ft]=s,u[Pt]=e,Oi(u,o,e),qt(u),s.stateNode=u):s.memoizedState=ny(s.type,e.memoizedProps,s.pendingProps,e.memoizedState),null;case 27:return Ei(s),e===null&&Kt&&(u=s.stateNode=ty(s.type,s.pendingProps,ht.current),Ci=s,ia=!0,p=Ce,qs(s.type)?(o0=p,Ce=aa(u.firstChild)):Ce=p),zi(e,s,s.pendingProps.children,o),sd(e,s),e===null&&(s.flags|=4194304),s.child;case 5:return e===null&&Kt&&((p=u=Ce)&&(u=q3(u,s.type,s.pendingProps,ia),u!==null?(s.stateNode=u,Ci=s,Ce=aa(u.firstChild),ia=!1,p=!0):p=!1),p||zs(s)),Ei(s),p=s.type,g=s.pendingProps,y=e!==null?e.memoizedProps:null,u=g.children,n0(p,g)?u=null:y!==null&&n0(p,y)&&(s.flags|=32),s.memoizedState!==null&&(p=ip(e,s,s3,null,null,o),cc._currentValue=p),sd(e,s),zi(e,s,u,o),s.child;case 6:return e===null&&Kt&&((e=o=Ce)&&(o=V3(o,s.pendingProps,ia),o!==null?(s.stateNode=o,Ci=s,Ce=null,e=!0):e=!1),e||zs(s)),null;case 13:return Gb(e,s,o);case 4:return te(s,s.stateNode.containerInfo),u=s.pendingProps,e===null?s.child=Dr(s,null,u,o):zi(e,s,u,o),s.child;case 11:return Db(e,s,s.type,s.pendingProps,o);case 7:return zi(e,s,s.pendingProps,o),s.child;case 8:return zi(e,s,s.pendingProps.children,o),s.child;case 12:return zi(e,s,s.pendingProps.children,o),s.child;case 10:return u=s.pendingProps,Os(s,s.type,u.value),zi(e,s,u.children,o),s.child;case 9:return p=s.type._context,u=s.pendingProps.children,zr(s),p=Ai(p),u=u(p),s.flags|=1,zi(e,s,u,o),s.child;case 14:return Nb(e,s,s.type,s.pendingProps,o);case 15:return Lb(e,s,s.type,s.pendingProps,o);case 19:return Vb(e,s,o);case 31:return h3(e,s,o);case 22:return Bb(e,s,o,s.pendingProps);case 24:return zr(s),u=Ai(oi),e===null?(p=Ih(),p===null&&(p=we,g=qh(),p.pooledCache=g,g.refCount++,g!==null&&(p.pooledCacheLanes|=o),p=g),s.memoizedState={parent:u,cache:p},$h(s),Os(s,oi,p)):((e.lanes&o)!==0&&(Wh(e,s),Go(s,null,null,o),Yo()),p=e.memoizedState,g=s.memoizedState,p.parent!==u?(p={parent:u,cache:u},s.memoizedState=p,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=p),Os(s,oi,u)):(u=g.cache,Os(s,oi,u),u!==p.cache&&Gh(s,[oi],o,!0))),zi(e,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(n(156,s.tag))}function ts(e){e.flags|=4}function zp(e,s,o,u,p){if((s=(e.mode&32)!==0)&&(s=!1),s){if(e.flags|=16777216,(p&335544128)===p)if(e.stateNode.complete)e.flags|=8192;else if(vv())e.flags|=8192;else throw jr=qu,Xh}else e.flags&=-16777217}function Xb(e,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!oy(s))if(vv())e.flags|=8192;else throw jr=qu,Xh}function ld(e,s){s!==null&&(e.flags|=4),e.flags&16384&&(s=e.tag!==22?rn():536870912,e.lanes|=s,Bl|=s)}function Wo(e,s){if(!Kt)switch(e.tailMode){case"hidden":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s||e.tail===null?e.tail=null:e.tail.sibling=null:u.sibling=null}}function Ae(e){var s=e.alternate!==null&&e.alternate.child===e.child,o=0,u=0;if(s)for(var p=e.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags&65011712,u|=p.flags&65011712,p.return=e,p=p.sibling;else for(p=e.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=e,p=p.sibling;return e.subtreeFlags|=u,e.childLanes=o,s}function g3(e,s,o){var u=s.pendingProps;switch(Hh(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(s),null;case 1:return Ae(s),null;case 3:return o=s.stateNode,u=null,e!==null&&(u=e.memoizedState.cache),s.memoizedState.cache!==u&&(s.flags|=2048),Qa(oi),Lt(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(kl(s)?ts(s):e===null||e.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Ph())),Ae(s),null;case 26:var p=s.type,g=s.memoizedState;return e===null?(ts(s),g!==null?(Ae(s),Xb(s,g)):(Ae(s),zp(s,p,null,u,o))):g?g!==e.memoizedState?(ts(s),Ae(s),Xb(s,g)):(Ae(s),s.flags&=-16777217):(e=e.memoizedProps,e!==u&&ts(s),Ae(s),zp(s,p,e,u,o)),null;case 27:if(Ne(s),o=ht.current,p=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==u&&ts(s);else{if(!u){if(s.stateNode===null)throw Error(n(166));return Ae(s),null}e=it.current,kl(s)?Ex(s):(e=ty(p,u,o),s.stateNode=e,ts(s))}return Ae(s),null;case 5:if(Ne(s),p=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==u&&ts(s);else{if(!u){if(s.stateNode===null)throw Error(n(166));return Ae(s),null}if(g=it.current,kl(s))Ex(s);else{var y=_d(ht.current);switch(g){case 1:g=y.createElementNS("http://www.w3.org/2000/svg",p);break;case 2:g=y.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;default:switch(p){case"svg":g=y.createElementNS("http://www.w3.org/2000/svg",p);break;case"math":g=y.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;case"script":g=y.createElement("div"),g.innerHTML="<script><\/script>",g=g.removeChild(g.firstChild);break;case"select":g=typeof u.is=="string"?y.createElement("select",{is:u.is}):y.createElement("select"),u.multiple?g.multiple=!0:u.size&&(g.size=u.size);break;default:g=typeof u.is=="string"?y.createElement(p,{is:u.is}):y.createElement(p)}}g[Ft]=s,g[Pt]=u;t:for(y=s.child;y!==null;){if(y.tag===5||y.tag===6)g.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===s)break t;for(;y.sibling===null;){if(y.return===null||y.return===s)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}s.stateNode=g;t:switch(Oi(g,p,u),p){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break t;case"img":u=!0;break t;default:u=!1}u&&ts(s)}}return Ae(s),zp(s,s.type,e===null?null:e.memoizedProps,s.pendingProps,o),null;case 6:if(e&&s.stateNode!=null)e.memoizedProps!==u&&ts(s);else{if(typeof u!="string"&&s.stateNode===null)throw Error(n(166));if(e=ht.current,kl(s)){if(e=s.stateNode,o=s.memoizedProps,u=null,p=Ci,p!==null)switch(p.tag){case 27:case 5:u=p.memoizedProps}e[Ft]=s,e=!!(e.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||Gv(e.nodeValue,o)),e||zs(s,!0)}else e=_d(e).createTextNode(u),e[Ft]=s,s.stateNode=e}return Ae(s),null;case 31:if(o=s.memoizedState,e===null||e.memoizedState!==null){if(u=kl(s),o!==null){if(e===null){if(!u)throw Error(n(318));if(e=s.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(n(557));e[Ft]=s}else Cr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ae(s),e=!1}else o=Ph(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),e=!0;if(!e)return s.flags&256?(On(s),s):(On(s),null);if((s.flags&128)!==0)throw Error(n(558))}return Ae(s),null;case 13:if(u=s.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(p=kl(s),u!==null&&u.dehydrated!==null){if(e===null){if(!p)throw Error(n(318));if(p=s.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[Ft]=s}else Cr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ae(s),p=!1}else p=Ph(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=p),p=!0;if(!p)return s.flags&256?(On(s),s):(On(s),null)}return On(s),(s.flags&128)!==0?(s.lanes=o,s):(o=u!==null,e=e!==null&&e.memoizedState!==null,o&&(u=s.child,p=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(p=u.alternate.memoizedState.cachePool.pool),g=null,u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(g=u.memoizedState.cachePool.pool),g!==p&&(u.flags|=2048)),o!==e&&o&&(s.child.flags|=8192),ld(s,s.updateQueue),Ae(s),null);case 4:return Lt(),e===null&&Kp(s.stateNode.containerInfo),Ae(s),null;case 10:return Qa(s.type),Ae(s),null;case 19:if($(ii),u=s.memoizedState,u===null)return Ae(s),null;if(p=(s.flags&128)!==0,g=u.rendering,g===null)if(p)Wo(u,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=s.child;e!==null;){if(g=$u(e),g!==null){for(s.flags|=128,Wo(u,!1),e=g.updateQueue,s.updateQueue=e,ld(s,e),s.subtreeFlags=0,e=o,o=s.child;o!==null;)wx(o,e),o=o.sibling;return nt(ii,ii.current&1|2),Kt&&$a(s,u.treeForkCount),s.child}e=e.sibling}u.tail!==null&&vt()>fd&&(s.flags|=128,p=!0,Wo(u,!1),s.lanes=4194304)}else{if(!p)if(e=$u(g),e!==null){if(s.flags|=128,p=!0,e=e.updateQueue,s.updateQueue=e,ld(s,e),Wo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!g.alternate&&!Kt)return Ae(s),null}else 2*vt()-u.renderingStartTime>fd&&o!==536870912&&(s.flags|=128,p=!0,Wo(u,!1),s.lanes=4194304);u.isBackwards?(g.sibling=s.child,s.child=g):(e=u.last,e!==null?e.sibling=g:s.child=g,u.last=g)}return u.tail!==null?(e=u.tail,u.rendering=e,u.tail=e.sibling,u.renderingStartTime=vt(),e.sibling=null,o=ii.current,nt(ii,p?o&1|2:o&1),Kt&&$a(s,u.treeForkCount),e):(Ae(s),null);case 22:case 23:return On(s),Jh(),u=s.memoizedState!==null,e!==null?e.memoizedState!==null!==u&&(s.flags|=8192):u&&(s.flags|=8192),u?(o&536870912)!==0&&(s.flags&128)===0&&(Ae(s),s.subtreeFlags&6&&(s.flags|=8192)):Ae(s),o=s.updateQueue,o!==null&&ld(s,o.retryQueue),o=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==o&&(s.flags|=2048),e!==null&&$(Or),null;case 24:return o=null,e!==null&&(o=e.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),Qa(oi),Ae(s),null;case 25:return null;case 30:return null}throw Error(n(156,s.tag))}function m3(e,s){switch(Hh(s),s.tag){case 1:return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 3:return Qa(oi),Lt(),e=s.flags,(e&65536)!==0&&(e&128)===0?(s.flags=e&-65537|128,s):null;case 26:case 27:case 5:return Ne(s),null;case 31:if(s.memoizedState!==null){if(On(s),s.alternate===null)throw Error(n(340));Cr()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 13:if(On(s),e=s.memoizedState,e!==null&&e.dehydrated!==null){if(s.alternate===null)throw Error(n(340));Cr()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 19:return $(ii),null;case 4:return Lt(),null;case 10:return Qa(s.type),null;case 22:case 23:return On(s),Jh(),e!==null&&$(Or),e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 24:return Qa(oi),null;case 25:return null;default:return null}}function $b(e,s){switch(Hh(s),s.tag){case 3:Qa(oi),Lt();break;case 26:case 27:case 5:Ne(s);break;case 4:Lt();break;case 31:s.memoizedState!==null&&On(s);break;case 13:On(s);break;case 19:$(ii);break;case 10:Qa(s.type);break;case 22:case 23:On(s),Jh(),e!==null&&$(Or);break;case 24:Qa(oi)}}function Qo(e,s){try{var o=s.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var p=u.next;o=p;do{if((o.tag&e)===e){u=void 0;var g=o.create,y=o.inst;u=g(),y.destroy=u}o=o.next}while(o!==p)}}catch(T){ge(s,s.return,T)}}function Bs(e,s,o){try{var u=s.updateQueue,p=u!==null?u.lastEffect:null;if(p!==null){var g=p.next;u=g;do{if((u.tag&e)===e){var y=u.inst,T=y.destroy;if(T!==void 0){y.destroy=void 0,p=s;var R=o,V=T;try{V()}catch(K){ge(p,R,K)}}}u=u.next}while(u!==g)}}catch(K){ge(s,s.return,K)}}function Wb(e){var s=e.updateQueue;if(s!==null){var o=e.stateNode;try{Fx(s,o)}catch(u){ge(e,e.return,u)}}}function Qb(e,s,o){o.props=Lr(e.type,e.memoizedProps),o.state=e.memoizedState;try{o.componentWillUnmount()}catch(u){ge(e,s,u)}}function Zo(e,s){try{var o=e.ref;if(o!==null){switch(e.tag){case 26:case 27:case 5:var u=e.stateNode;break;case 30:u=e.stateNode;break;default:u=e.stateNode}typeof o=="function"?e.refCleanup=o(u):o.current=u}}catch(p){ge(e,s,p)}}function Ma(e,s){var o=e.ref,u=e.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(p){ge(e,s,p)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(p){ge(e,s,p)}else o.current=null}function Zb(e){var s=e.type,o=e.memoizedProps,u=e.stateNode;try{t:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break t;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(p){ge(e,e.return,p)}}function Op(e,s,o){try{var u=e.stateNode;H3(u,e.type,o,s),u[Pt]=s}catch(p){ge(e,e.return,p)}}function Kb(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&qs(e.type)||e.tag===4}function Rp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Kb(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&qs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function jp(e,s,o){var u=e.tag;if(u===5||u===6)e=e.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(e,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(e),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=Va));else if(u!==4&&(u===27&&qs(e.type)&&(o=e.stateNode,s=null),e=e.child,e!==null))for(jp(e,s,o),e=e.sibling;e!==null;)jp(e,s,o),e=e.sibling}function od(e,s,o){var u=e.tag;if(u===5||u===6)e=e.stateNode,s?o.insertBefore(e,s):o.appendChild(e);else if(u!==4&&(u===27&&qs(e.type)&&(o=e.stateNode),e=e.child,e!==null))for(od(e,s,o),e=e.sibling;e!==null;)od(e,s,o),e=e.sibling}function Jb(e){var s=e.stateNode,o=e.memoizedProps;try{for(var u=e.type,p=s.attributes;p.length;)s.removeAttributeNode(p[0]);Oi(s,u,o),s[Ft]=e,s[Pt]=o}catch(g){ge(e,e.return,g)}}var es=!1,di=!1,Dp=!1,tv=typeof WeakSet=="function"?WeakSet:Set,wi=null;function x3(e,s){if(e=e.containerInfo,e0=Ad,e=fx(e),Mh(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else t:{o=(o=e.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var p=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break t}var y=0,T=-1,R=-1,V=0,K=0,tt=e,I=null;e:for(;;){for(var Z;tt!==o||p!==0&&tt.nodeType!==3||(T=y+p),tt!==g||u!==0&&tt.nodeType!==3||(R=y+u),tt.nodeType===3&&(y+=tt.nodeValue.length),(Z=tt.firstChild)!==null;)I=tt,tt=Z;for(;;){if(tt===e)break e;if(I===o&&++V===p&&(T=y),I===g&&++K===u&&(R=y),(Z=tt.nextSibling)!==null)break;tt=I,I=tt.parentNode}tt=Z}o=T===-1||R===-1?null:{start:T,end:R}}else o=null}o=o||{start:0,end:0}}else o=null;for(i0={focusedElem:e,selectionRange:o},Ad=!1,wi=s;wi!==null;)if(s=wi,e=s.child,(s.subtreeFlags&1028)!==0&&e!==null)e.return=s,wi=e;else for(;wi!==null;){switch(s=wi,g=s.alternate,e=s.flags,s.tag){case 0:if((e&4)!==0&&(e=s.updateQueue,e=e!==null?e.events:null,e!==null))for(o=0;o<e.length;o++)p=e[o],p.ref.impl=p.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&g!==null){e=void 0,o=s,p=g.memoizedProps,g=g.memoizedState,u=o.stateNode;try{var gt=Lr(o.type,p);e=u.getSnapshotBeforeUpdate(gt,g),u.__reactInternalSnapshotBeforeUpdate=e}catch(kt){ge(o,o.return,kt)}}break;case 3:if((e&1024)!==0){if(e=s.stateNode.containerInfo,o=e.nodeType,o===9)s0(e);else if(o===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":s0(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(n(163))}if(e=s.sibling,e!==null){e.return=s.return,wi=e;break}wi=s.return}}function ev(e,s,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:ns(e,o),u&4&&Qo(5,o);break;case 1:if(ns(e,o),u&4)if(e=o.stateNode,s===null)try{e.componentDidMount()}catch(y){ge(o,o.return,y)}else{var p=Lr(o.type,s.memoizedProps);s=s.memoizedState;try{e.componentDidUpdate(p,s,e.__reactInternalSnapshotBeforeUpdate)}catch(y){ge(o,o.return,y)}}u&64&&Wb(o),u&512&&Zo(o,o.return);break;case 3:if(ns(e,o),u&64&&(e=o.updateQueue,e!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{Fx(e,s)}catch(y){ge(o,o.return,y)}}break;case 27:s===null&&u&4&&Jb(o);case 26:case 5:ns(e,o),s===null&&u&4&&Zb(o),u&512&&Zo(o,o.return);break;case 12:ns(e,o);break;case 31:ns(e,o),u&4&&av(e,o);break;case 13:ns(e,o),u&4&&sv(e,o),u&64&&(e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(o=E3.bind(null,o),I3(e,o))));break;case 22:if(u=o.memoizedState!==null||es,!u){s=s!==null&&s.memoizedState!==null||di,p=es;var g=di;es=u,(di=s)&&!g?as(e,o,(o.subtreeFlags&8772)!==0):ns(e,o),es=p,di=g}break;case 30:break;default:ns(e,o)}}function iv(e){var s=e.alternate;s!==null&&(e.alternate=null,iv(s)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(s=e.stateNode,s!==null&&ei(s)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var je=null,cn=!1;function is(e,s,o){for(o=o.child;o!==null;)nv(e,s,o),o=o.sibling}function nv(e,s,o){if(xe&&typeof xe.onCommitFiberUnmount=="function")try{xe.onCommitFiberUnmount(an,o)}catch{}switch(o.tag){case 26:di||Ma(o,s),is(e,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:di||Ma(o,s);var u=je,p=cn;qs(o.type)&&(je=o.stateNode,cn=!1),is(e,s,o),rc(o.stateNode),je=u,cn=p;break;case 5:di||Ma(o,s);case 6:if(u=je,p=cn,je=null,is(e,s,o),je=u,cn=p,je!==null)if(cn)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(o.stateNode)}catch(g){ge(o,s,g)}else try{je.removeChild(o.stateNode)}catch(g){ge(o,s,g)}break;case 18:je!==null&&(cn?(e=je,Wv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,o.stateNode),Vl(e)):Wv(je,o.stateNode));break;case 4:u=je,p=cn,je=o.stateNode.containerInfo,cn=!0,is(e,s,o),je=u,cn=p;break;case 0:case 11:case 14:case 15:Bs(2,o,s),di||Bs(4,o,s),is(e,s,o);break;case 1:di||(Ma(o,s),u=o.stateNode,typeof u.componentWillUnmount=="function"&&Qb(o,s,u)),is(e,s,o);break;case 21:is(e,s,o);break;case 22:di=(u=di)||o.memoizedState!==null,is(e,s,o),di=u;break;default:is(e,s,o)}}function av(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Vl(e)}catch(o){ge(s,s.return,o)}}}function sv(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Vl(e)}catch(o){ge(s,s.return,o)}}function b3(e){switch(e.tag){case 31:case 13:case 19:var s=e.stateNode;return s===null&&(s=e.stateNode=new tv),s;case 22:return e=e.stateNode,s=e._retryCache,s===null&&(s=e._retryCache=new tv),s;default:throw Error(n(435,e.tag))}}function cd(e,s){var o=b3(e);s.forEach(function(u){if(!o.has(u)){o.add(u);var p=M3.bind(null,e,u);u.then(p,p)}})}function un(e,s){var o=s.deletions;if(o!==null)for(var u=0;u<o.length;u++){var p=o[u],g=e,y=s,T=y;t:for(;T!==null;){switch(T.tag){case 27:if(qs(T.type)){je=T.stateNode,cn=!1;break t}break;case 5:je=T.stateNode,cn=!1;break t;case 3:case 4:je=T.stateNode.containerInfo,cn=!0;break t}T=T.return}if(je===null)throw Error(n(160));nv(g,y,p),je=null,cn=!1,g=p.alternate,g!==null&&(g.return=null),p.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)rv(s,e),s=s.sibling}var ma=null;function rv(e,s){var o=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:un(s,e),dn(e),u&4&&(Bs(3,e,e.return),Qo(3,e),Bs(5,e,e.return));break;case 1:un(s,e),dn(e),u&512&&(di||o===null||Ma(o,o.return)),u&64&&es&&(e=e.updateQueue,e!==null&&(u=e.callbacks,u!==null&&(o=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var p=ma;if(un(s,e),dn(e),u&512&&(di||o===null||Ma(o,o.return)),u&4){var g=o!==null?o.memoizedState:null;if(u=e.memoizedState,o===null)if(u===null)if(e.stateNode===null){t:{u=e.type,o=e.memoizedProps,p=p.ownerDocument||p;e:switch(u){case"title":g=p.getElementsByTagName("title")[0],(!g||g[Fe]||g[Ft]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=p.createElement(u),p.head.insertBefore(g,p.querySelector("head > title"))),Oi(g,u,o),g[Ft]=e,qt(g),u=g;break t;case"link":var y=ry("link","href",p).get(u+(o.href||""));if(y){for(var T=0;T<y.length;T++)if(g=y[T],g.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&g.getAttribute("rel")===(o.rel==null?null:o.rel)&&g.getAttribute("title")===(o.title==null?null:o.title)&&g.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){y.splice(T,1);break e}}g=p.createElement(u),Oi(g,u,o),p.head.appendChild(g);break;case"meta":if(y=ry("meta","content",p).get(u+(o.content||""))){for(T=0;T<y.length;T++)if(g=y[T],g.getAttribute("content")===(o.content==null?null:""+o.content)&&g.getAttribute("name")===(o.name==null?null:o.name)&&g.getAttribute("property")===(o.property==null?null:o.property)&&g.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&g.getAttribute("charset")===(o.charSet==null?null:o.charSet)){y.splice(T,1);break e}}g=p.createElement(u),Oi(g,u,o),p.head.appendChild(g);break;default:throw Error(n(468,u))}g[Ft]=e,qt(g),u=g}e.stateNode=u}else ly(p,e.type,e.stateNode);else e.stateNode=sy(p,u,e.memoizedProps);else g!==u?(g===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):g.count--,u===null?ly(p,e.type,e.stateNode):sy(p,u,e.memoizedProps)):u===null&&e.stateNode!==null&&Op(e,e.memoizedProps,o.memoizedProps)}break;case 27:un(s,e),dn(e),u&512&&(di||o===null||Ma(o,o.return)),o!==null&&u&4&&Op(e,e.memoizedProps,o.memoizedProps);break;case 5:if(un(s,e),dn(e),u&512&&(di||o===null||Ma(o,o.return)),e.flags&32){p=e.stateNode;try{pl(p,"")}catch(gt){ge(e,e.return,gt)}}u&4&&e.stateNode!=null&&(p=e.memoizedProps,Op(e,p,o!==null?o.memoizedProps:p)),u&1024&&(Dp=!0);break;case 6:if(un(s,e),dn(e),u&4){if(e.stateNode===null)throw Error(n(162));u=e.memoizedProps,o=e.stateNode;try{o.nodeValue=u}catch(gt){ge(e,e.return,gt)}}break;case 3:if(Td=null,p=ma,ma=Sd(s.containerInfo),un(s,e),ma=p,dn(e),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Vl(s.containerInfo)}catch(gt){ge(e,e.return,gt)}Dp&&(Dp=!1,lv(e));break;case 4:u=ma,ma=Sd(e.stateNode.containerInfo),un(s,e),dn(e),ma=u;break;case 12:un(s,e),dn(e);break;case 31:un(s,e),dn(e),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,cd(e,u)));break;case 13:un(s,e),dn(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(dd=vt()),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,cd(e,u)));break;case 22:p=e.memoizedState!==null;var R=o!==null&&o.memoizedState!==null,V=es,K=di;if(es=V||p,di=K||R,un(s,e),di=K,es=V,dn(e),u&8192)t:for(s=e.stateNode,s._visibility=p?s._visibility&-2:s._visibility|1,p&&(o===null||R||es||di||Br(e)),o=null,s=e;;){if(s.tag===5||s.tag===26){if(o===null){R=o=s;try{if(g=R.stateNode,p)y=g.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{T=R.stateNode;var tt=R.memoizedProps.style,I=tt!=null&&tt.hasOwnProperty("display")?tt.display:null;T.style.display=I==null||typeof I=="boolean"?"":(""+I).trim()}}catch(gt){ge(R,R.return,gt)}}}else if(s.tag===6){if(o===null){R=s;try{R.stateNode.nodeValue=p?"":R.memoizedProps}catch(gt){ge(R,R.return,gt)}}}else if(s.tag===18){if(o===null){R=s;try{var Z=R.stateNode;p?Qv(Z,!0):Qv(R.stateNode,!1)}catch(gt){ge(R,R.return,gt)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===e)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break t;for(;s.sibling===null;){if(s.return===null||s.return===e)break t;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}u&4&&(u=e.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,cd(e,o))));break;case 19:un(s,e),dn(e),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,cd(e,u)));break;case 30:break;case 21:break;default:un(s,e),dn(e)}}function dn(e){var s=e.flags;if(s&2){try{for(var o,u=e.return;u!==null;){if(Kb(u)){o=u;break}u=u.return}if(o==null)throw Error(n(160));switch(o.tag){case 27:var p=o.stateNode,g=Rp(e);od(e,g,p);break;case 5:var y=o.stateNode;o.flags&32&&(pl(y,""),o.flags&=-33);var T=Rp(e);od(e,T,y);break;case 3:case 4:var R=o.stateNode.containerInfo,V=Rp(e);jp(e,V,R);break;default:throw Error(n(161))}}catch(K){ge(e,e.return,K)}e.flags&=-3}s&4096&&(e.flags&=-4097)}function lv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var s=e;lv(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),e=e.sibling}}function ns(e,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)ev(e,s.alternate,s),s=s.sibling}function Br(e){for(e=e.child;e!==null;){var s=e;switch(s.tag){case 0:case 11:case 14:case 15:Bs(4,s,s.return),Br(s);break;case 1:Ma(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&Qb(s,s.return,o),Br(s);break;case 27:rc(s.stateNode);case 26:case 5:Ma(s,s.return),Br(s);break;case 22:s.memoizedState===null&&Br(s);break;case 30:Br(s);break;default:Br(s)}e=e.sibling}}function as(e,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var u=s.alternate,p=e,g=s,y=g.flags;switch(g.tag){case 0:case 11:case 15:as(p,g,o),Qo(4,g);break;case 1:if(as(p,g,o),u=g,p=u.stateNode,typeof p.componentDidMount=="function")try{p.componentDidMount()}catch(V){ge(u,u.return,V)}if(u=g,p=u.updateQueue,p!==null){var T=u.stateNode;try{var R=p.shared.hiddenCallbacks;if(R!==null)for(p.shared.hiddenCallbacks=null,p=0;p<R.length;p++)Hx(R[p],T)}catch(V){ge(u,u.return,V)}}o&&y&64&&Wb(g),Zo(g,g.return);break;case 27:Jb(g);case 26:case 5:as(p,g,o),o&&u===null&&y&4&&Zb(g),Zo(g,g.return);break;case 12:as(p,g,o);break;case 31:as(p,g,o),o&&y&4&&av(p,g);break;case 13:as(p,g,o),o&&y&4&&sv(p,g);break;case 22:g.memoizedState===null&&as(p,g,o),Zo(g,g.return);break;case 30:break;default:as(p,g,o)}s=s.sibling}}function Np(e,s){var o=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),e=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(e=s.memoizedState.cachePool.pool),e!==o&&(e!=null&&e.refCount++,o!=null&&Bo(o))}function Lp(e,s){e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&Bo(e))}function xa(e,s,o,u){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)ov(e,s,o,u),s=s.sibling}function ov(e,s,o,u){var p=s.flags;switch(s.tag){case 0:case 11:case 15:xa(e,s,o,u),p&2048&&Qo(9,s);break;case 1:xa(e,s,o,u);break;case 3:xa(e,s,o,u),p&2048&&(e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&Bo(e)));break;case 12:if(p&2048){xa(e,s,o,u),e=s.stateNode;try{var g=s.memoizedProps,y=g.id,T=g.onPostCommit;typeof T=="function"&&T(y,s.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(R){ge(s,s.return,R)}}else xa(e,s,o,u);break;case 31:xa(e,s,o,u);break;case 13:xa(e,s,o,u);break;case 23:break;case 22:g=s.stateNode,y=s.alternate,s.memoizedState!==null?g._visibility&2?xa(e,s,o,u):Ko(e,s):g._visibility&2?xa(e,s,o,u):(g._visibility|=2,Dl(e,s,o,u,(s.subtreeFlags&10256)!==0||!1)),p&2048&&Np(y,s);break;case 24:xa(e,s,o,u),p&2048&&Lp(s.alternate,s);break;default:xa(e,s,o,u)}}function Dl(e,s,o,u,p){for(p=p&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var g=e,y=s,T=o,R=u,V=y.flags;switch(y.tag){case 0:case 11:case 15:Dl(g,y,T,R,p),Qo(8,y);break;case 23:break;case 22:var K=y.stateNode;y.memoizedState!==null?K._visibility&2?Dl(g,y,T,R,p):Ko(g,y):(K._visibility|=2,Dl(g,y,T,R,p)),p&&V&2048&&Np(y.alternate,y);break;case 24:Dl(g,y,T,R,p),p&&V&2048&&Lp(y.alternate,y);break;default:Dl(g,y,T,R,p)}s=s.sibling}}function Ko(e,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=e,u=s,p=u.flags;switch(u.tag){case 22:Ko(o,u),p&2048&&Np(u.alternate,u);break;case 24:Ko(o,u),p&2048&&Lp(u.alternate,u);break;default:Ko(o,u)}s=s.sibling}}var Jo=8192;function Nl(e,s,o){if(e.subtreeFlags&Jo)for(e=e.child;e!==null;)cv(e,s,o),e=e.sibling}function cv(e,s,o){switch(e.tag){case 26:Nl(e,s,o),e.flags&Jo&&e.memoizedState!==null&&ak(o,ma,e.memoizedState,e.memoizedProps);break;case 5:Nl(e,s,o);break;case 3:case 4:var u=ma;ma=Sd(e.stateNode.containerInfo),Nl(e,s,o),ma=u;break;case 22:e.memoizedState===null&&(u=e.alternate,u!==null&&u.memoizedState!==null?(u=Jo,Jo=16777216,Nl(e,s,o),Jo=u):Nl(e,s,o));break;default:Nl(e,s,o)}}function uv(e){var s=e.alternate;if(s!==null&&(e=s.child,e!==null)){s.child=null;do s=e.sibling,e.sibling=null,e=s;while(e!==null)}}function tc(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];wi=u,fv(u,e)}uv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)dv(e),e=e.sibling}function dv(e){switch(e.tag){case 0:case 11:case 15:tc(e),e.flags&2048&&Bs(9,e,e.return);break;case 3:tc(e);break;case 12:tc(e);break;case 22:var s=e.stateNode;e.memoizedState!==null&&s._visibility&2&&(e.return===null||e.return.tag!==13)?(s._visibility&=-3,ud(e)):tc(e);break;default:tc(e)}}function ud(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];wi=u,fv(u,e)}uv(e)}for(e=e.child;e!==null;){switch(s=e,s.tag){case 0:case 11:case 15:Bs(8,s,s.return),ud(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,ud(s));break;default:ud(s)}e=e.sibling}}function fv(e,s){for(;wi!==null;){var o=wi;switch(o.tag){case 0:case 11:case 15:Bs(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Bo(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,wi=u;else t:for(o=e;wi!==null;){u=wi;var p=u.sibling,g=u.return;if(iv(u),u===o){wi=null;break t}if(p!==null){p.return=g,wi=p;break t}wi=g}}}var v3={getCacheForType:function(e){var s=Ai(oi),o=s.data.get(e);return o===void 0&&(o=e(),s.data.set(e,o)),o},cacheSignal:function(){return Ai(oi).controller.signal}},y3=typeof WeakMap=="function"?WeakMap:Map,ue=0,we=null,Xt=null,Wt=0,pe=0,Rn=null,Hs=!1,Ll=!1,Bp=!1,ss=0,Ze=0,Fs=0,Hr=0,Hp=0,jn=0,Bl=0,ec=null,fn=null,Fp=!1,dd=0,hv=0,fd=1/0,hd=null,Ps=null,mi=0,Us=null,Hl=null,rs=0,Pp=0,Up=null,pv=null,ic=0,Yp=null;function Dn(){return(ue&2)!==0&&Wt!==0?Wt&-Wt:B.T!==null?$p():Gt()}function gv(){if(jn===0)if((Wt&536870912)===0||Kt){var e=He;He<<=1,(He&3932160)===0&&(He=262144),jn=e}else jn=536870912;return e=zn.current,e!==null&&(e.flags|=32),jn}function hn(e,s,o){(e===we&&(pe===2||pe===9)||e.cancelPendingCommit!==null)&&(Fl(e,0),Ys(e,Wt,jn,!1)),yt(e,o),((ue&2)===0||e!==we)&&(e===we&&((ue&2)===0&&(Hr|=o),Ze===4&&Ys(e,Wt,jn,!1)),Ca(e))}function mv(e,s,o){if((ue&6)!==0)throw Error(n(327));var u=!o&&(s&127)===0&&(s&e.expiredLanes)===0||Mi(e,s),p=u?S3(e,s):qp(e,s,!0),g=u;do{if(p===0){Ll&&!u&&Ys(e,s,0,!1);break}else{if(o=e.current.alternate,g&&!w3(o)){p=qp(e,s,!1),g=!1;continue}if(p===2){if(g=s,e.errorRecoveryDisabledLanes&g)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){s=y;t:{var T=e;p=ec;var R=T.current.memoizedState.isDehydrated;if(R&&(Fl(T,y).flags|=256),y=qp(T,y,!1),y!==2){if(Bp&&!R){T.errorRecoveryDisabledLanes|=g,Hr|=g,p=4;break t}g=fn,fn=p,g!==null&&(fn===null?fn=g:fn.push.apply(fn,g))}p=y}if(g=!1,p!==2)continue}}if(p===1){Fl(e,0),Ys(e,s,0,!0);break}t:{switch(u=e,g=p,g){case 0:case 1:throw Error(n(345));case 4:if((s&4194048)!==s)break;case 6:Ys(u,s,jn,!Hs);break t;case 2:fn=null;break;case 3:case 5:break;default:throw Error(n(329))}if((s&62914560)===s&&(p=dd+300-vt(),10<p)){if(Ys(u,s,jn,!Hs),yi(u,0,!0)!==0)break t;rs=s,u.timeoutHandle=Xv(xv.bind(null,u,o,fn,hd,Fp,s,jn,Hr,Bl,Hs,g,"Throttled",-0,0),p);break t}xv(u,o,fn,hd,Fp,s,jn,Hr,Bl,Hs,g,null,-0,0)}}break}while(!0);Ca(e)}function xv(e,s,o,u,p,g,y,T,R,V,K,tt,I,Z){if(e.timeoutHandle=-1,tt=s.subtreeFlags,tt&8192||(tt&16785408)===16785408){tt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Va},cv(s,g,tt);var gt=(g&62914560)===g?dd-vt():(g&4194048)===g?hv-vt():0;if(gt=sk(tt,gt),gt!==null){rs=g,e.cancelPendingCommit=gt(Tv.bind(null,e,s,g,o,u,p,y,T,R,K,tt,null,I,Z)),Ys(e,g,y,!V);return}}Tv(e,s,g,o,u,p,y,T,R)}function w3(e){for(var s=e;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var p=o[u],g=p.getSnapshot;p=p.value;try{if(!Cn(g(),p))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ys(e,s,o,u){s&=~Hp,s&=~Hr,e.suspendedLanes|=s,e.pingedLanes&=~s,u&&(e.warmLanes|=s),u=e.expirationTimes;for(var p=s;0<p;){var g=31-Be(p),y=1<<g;u[g]=-1,p&=~y}o!==0&&dt(e,o,s)}function pd(){return(ue&6)===0?(nc(0),!1):!0}function Gp(){if(Xt!==null){if(pe===0)var e=Xt.return;else e=Xt,Wa=Ar=null,sp(e),Al=null,Fo=0,e=Xt;for(;e!==null;)$b(e.alternate,e),e=e.return;Xt=null}}function Fl(e,s){var o=e.timeoutHandle;o!==-1&&(e.timeoutHandle=-1,U3(o)),o=e.cancelPendingCommit,o!==null&&(e.cancelPendingCommit=null,o()),rs=0,Gp(),we=e,Xt=o=Xa(e.current,null),Wt=s,pe=0,Rn=null,Hs=!1,Ll=Mi(e,s),Bp=!1,Bl=jn=Hp=Hr=Fs=Ze=0,fn=ec=null,Fp=!1,(s&8)!==0&&(s|=s&32);var u=e.entangledLanes;if(u!==0)for(e=e.entanglements,u&=s;0<u;){var p=31-Be(u),g=1<<p;s|=e[p],u&=~g}return ss=s,Nu(),o}function bv(e,s){jt=null,B.H=Xo,s===Cl||s===Gu?(s=Dx(),pe=3):s===Xh?(s=Dx(),pe=4):pe=s===wp?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Rn=s,Xt===null&&(Ze=1,nd(e,Jn(s,e.current)))}function vv(){var e=zn.current;return e===null?!0:(Wt&4194048)===Wt?na===null:(Wt&62914560)===Wt||(Wt&536870912)!==0?e===na:!1}function yv(){var e=B.H;return B.H=Xo,e===null?Xo:e}function wv(){var e=B.A;return B.A=v3,e}function gd(){Ze=4,Hs||(Wt&4194048)!==Wt&&zn.current!==null||(Ll=!0),(Fs&134217727)===0&&(Hr&134217727)===0||we===null||Ys(we,Wt,jn,!1)}function qp(e,s,o){var u=ue;ue|=2;var p=yv(),g=wv();(we!==e||Wt!==s)&&(hd=null,Fl(e,s)),s=!1;var y=Ze;t:do try{if(pe!==0&&Xt!==null){var T=Xt,R=Rn;switch(pe){case 8:Gp(),y=6;break t;case 3:case 2:case 9:case 6:zn.current===null&&(s=!0);var V=pe;if(pe=0,Rn=null,Pl(e,T,R,V),o&&Ll){y=0;break t}break;default:V=pe,pe=0,Rn=null,Pl(e,T,R,V)}}_3(),y=Ze;break}catch(K){bv(e,K)}while(!0);return s&&e.shellSuspendCounter++,Wa=Ar=null,ue=u,B.H=p,B.A=g,Xt===null&&(we=null,Wt=0,Nu()),y}function _3(){for(;Xt!==null;)_v(Xt)}function S3(e,s){var o=ue;ue|=2;var u=yv(),p=wv();we!==e||Wt!==s?(hd=null,fd=vt()+500,Fl(e,s)):Ll=Mi(e,s);t:do try{if(pe!==0&&Xt!==null){s=Xt;var g=Rn;e:switch(pe){case 1:pe=0,Rn=null,Pl(e,s,g,1);break;case 2:case 9:if(Rx(g)){pe=0,Rn=null,Sv(s);break}s=function(){pe!==2&&pe!==9||we!==e||(pe=7),Ca(e)},g.then(s,s);break t;case 3:pe=7;break t;case 4:pe=5;break t;case 7:Rx(g)?(pe=0,Rn=null,Sv(s)):(pe=0,Rn=null,Pl(e,s,g,7));break;case 5:var y=null;switch(Xt.tag){case 26:y=Xt.memoizedState;case 5:case 27:var T=Xt;if(y?oy(y):T.stateNode.complete){pe=0,Rn=null;var R=T.sibling;if(R!==null)Xt=R;else{var V=T.return;V!==null?(Xt=V,md(V)):Xt=null}break e}}pe=0,Rn=null,Pl(e,s,g,5);break;case 6:pe=0,Rn=null,Pl(e,s,g,6);break;case 8:Gp(),Ze=6;break t;default:throw Error(n(462))}}k3();break}catch(K){bv(e,K)}while(!0);return Wa=Ar=null,B.H=u,B.A=p,ue=o,Xt!==null?0:(we=null,Wt=0,Nu(),Ze)}function k3(){for(;Xt!==null&&!bt();)_v(Xt)}function _v(e){var s=Ib(e.alternate,e,ss);e.memoizedProps=e.pendingProps,s===null?md(e):Xt=s}function Sv(e){var s=e,o=s.alternate;switch(s.tag){case 15:case 0:s=Pb(o,s,s.pendingProps,s.type,void 0,Wt);break;case 11:s=Pb(o,s,s.pendingProps,s.type.render,s.ref,Wt);break;case 5:sp(s);default:$b(o,s),s=Xt=wx(s,ss),s=Ib(o,s,ss)}e.memoizedProps=e.pendingProps,s===null?md(e):Xt=s}function Pl(e,s,o,u){Wa=Ar=null,sp(s),Al=null,Fo=0;var p=s.return;try{if(f3(e,p,s,o,Wt)){Ze=1,nd(e,Jn(o,e.current)),Xt=null;return}}catch(g){if(p!==null)throw Xt=p,g;Ze=1,nd(e,Jn(o,e.current)),Xt=null;return}s.flags&32768?(Kt||u===1?e=!0:Ll||(Wt&536870912)!==0?e=!1:(Hs=e=!0,(u===2||u===9||u===3||u===6)&&(u=zn.current,u!==null&&u.tag===13&&(u.flags|=16384))),kv(s,e)):md(s)}function md(e){var s=e;do{if((s.flags&32768)!==0){kv(s,Hs);return}e=s.return;var o=g3(s.alternate,s,ss);if(o!==null){Xt=o;return}if(s=s.sibling,s!==null){Xt=s;return}Xt=s=e}while(s!==null);Ze===0&&(Ze=5)}function kv(e,s){do{var o=m3(e.alternate,e);if(o!==null){o.flags&=32767,Xt=o;return}if(o=e.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(e=e.sibling,e!==null)){Xt=e;return}Xt=e=o}while(e!==null);Ze=6,Xt=null}function Tv(e,s,o,u,p,g,y,T,R){e.cancelPendingCommit=null;do xd();while(mi!==0);if((ue&6)!==0)throw Error(n(327));if(s!==null){if(s===e.current)throw Error(n(177));if(g=s.lanes|s.childLanes,g|=Rh,ne(e,o,g,y,T,R),e===we&&(Xt=we=null,Wt=0),Hl=s,Us=e,rs=o,Pp=g,Up=p,pv=u,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,C3(ce,function(){return zv(),null})):(e.callbackNode=null,e.callbackPriority=0),u=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||u){u=B.T,B.T=null,p=X.p,X.p=2,y=ue,ue|=4;try{x3(e,s,o)}finally{ue=y,X.p=p,B.T=u}}mi=1,Ev(),Mv(),Cv()}}function Ev(){if(mi===1){mi=0;var e=Us,s=Hl,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=B.T,B.T=null;var u=X.p;X.p=2;var p=ue;ue|=4;try{rv(s,e);var g=i0,y=fx(e.containerInfo),T=g.focusedElem,R=g.selectionRange;if(y!==T&&T&&T.ownerDocument&&dx(T.ownerDocument.documentElement,T)){if(R!==null&&Mh(T)){var V=R.start,K=R.end;if(K===void 0&&(K=V),"selectionStart"in T)T.selectionStart=V,T.selectionEnd=Math.min(K,T.value.length);else{var tt=T.ownerDocument||document,I=tt&&tt.defaultView||window;if(I.getSelection){var Z=I.getSelection(),gt=T.textContent.length,kt=Math.min(R.start,gt),ye=R.end===void 0?kt:Math.min(R.end,gt);!Z.extend&&kt>ye&&(y=ye,ye=kt,kt=y);var P=ux(T,kt),L=ux(T,ye);if(P&&L&&(Z.rangeCount!==1||Z.anchorNode!==P.node||Z.anchorOffset!==P.offset||Z.focusNode!==L.node||Z.focusOffset!==L.offset)){var q=tt.createRange();q.setStart(P.node,P.offset),Z.removeAllRanges(),kt>ye?(Z.addRange(q),Z.extend(L.node,L.offset)):(q.setEnd(L.node,L.offset),Z.addRange(q))}}}}for(tt=[],Z=T;Z=Z.parentNode;)Z.nodeType===1&&tt.push({element:Z,left:Z.scrollLeft,top:Z.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<tt.length;T++){var J=tt[T];J.element.scrollLeft=J.left,J.element.scrollTop=J.top}}Ad=!!e0,i0=e0=null}finally{ue=p,X.p=u,B.T=o}}e.current=s,mi=2}}function Mv(){if(mi===2){mi=0;var e=Us,s=Hl,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=B.T,B.T=null;var u=X.p;X.p=2;var p=ue;ue|=4;try{ev(e,s.alternate,s)}finally{ue=p,X.p=u,B.T=o}}mi=3}}function Cv(){if(mi===4||mi===3){mi=0,Tt();var e=Us,s=Hl,o=rs,u=pv;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?mi=5:(mi=0,Hl=Us=null,Av(e,e.pendingLanes));var p=e.pendingLanes;if(p===0&&(Ps=null),We(o),s=s.stateNode,xe&&typeof xe.onCommitFiberRoot=="function")try{xe.onCommitFiberRoot(an,s,void 0,(s.current.flags&128)===128)}catch{}if(u!==null){s=B.T,p=X.p,X.p=2,B.T=null;try{for(var g=e.onRecoverableError,y=0;y<u.length;y++){var T=u[y];g(T.value,{componentStack:T.stack})}}finally{B.T=s,X.p=p}}(rs&3)!==0&&xd(),Ca(e),p=e.pendingLanes,(o&261930)!==0&&(p&42)!==0?e===Yp?ic++:(ic=0,Yp=e):ic=0,nc(0)}}function Av(e,s){(e.pooledCacheLanes&=s)===0&&(s=e.pooledCache,s!=null&&(e.pooledCache=null,Bo(s)))}function xd(){return Ev(),Mv(),Cv(),zv()}function zv(){if(mi!==5)return!1;var e=Us,s=Pp;Pp=0;var o=We(rs),u=B.T,p=X.p;try{X.p=32>o?32:o,B.T=null,o=Up,Up=null;var g=Us,y=rs;if(mi=0,Hl=Us=null,rs=0,(ue&6)!==0)throw Error(n(331));var T=ue;if(ue|=4,dv(g.current),ov(g,g.current,y,o),ue=T,nc(0,!1),xe&&typeof xe.onPostCommitFiberRoot=="function")try{xe.onPostCommitFiberRoot(an,g)}catch{}return!0}finally{X.p=p,B.T=u,Av(e,s)}}function Ov(e,s,o){s=Jn(o,s),s=yp(e.stateNode,s,2),e=Ds(e,s,2),e!==null&&(yt(e,2),Ca(e))}function ge(e,s,o){if(e.tag===3)Ov(e,e,o);else for(;s!==null;){if(s.tag===3){Ov(s,e,o);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Ps===null||!Ps.has(u))){e=Jn(o,e),o=Rb(2),u=Ds(s,o,2),u!==null&&(jb(o,u,s,e),yt(u,2),Ca(u));break}}s=s.return}}function Vp(e,s,o){var u=e.pingCache;if(u===null){u=e.pingCache=new y3;var p=new Set;u.set(s,p)}else p=u.get(s),p===void 0&&(p=new Set,u.set(s,p));p.has(o)||(Bp=!0,p.add(o),e=T3.bind(null,e,s,o),s.then(e,e))}function T3(e,s,o){var u=e.pingCache;u!==null&&u.delete(s),e.pingedLanes|=e.suspendedLanes&o,e.warmLanes&=~o,we===e&&(Wt&o)===o&&(Ze===4||Ze===3&&(Wt&62914560)===Wt&&300>vt()-dd?(ue&2)===0&&Fl(e,0):Hp|=o,Bl===Wt&&(Bl=0)),Ca(e)}function Rv(e,s){s===0&&(s=rn()),e=Er(e,s),e!==null&&(yt(e,s),Ca(e))}function E3(e){var s=e.memoizedState,o=0;s!==null&&(o=s.retryLane),Rv(e,o)}function M3(e,s){var o=0;switch(e.tag){case 31:case 13:var u=e.stateNode,p=e.memoizedState;p!==null&&(o=p.retryLane);break;case 19:u=e.stateNode;break;case 22:u=e.stateNode._retryCache;break;default:throw Error(n(314))}u!==null&&u.delete(s),Rv(e,o)}function C3(e,s){return G(e,s)}var bd=null,Ul=null,Ip=!1,vd=!1,Xp=!1,Gs=0;function Ca(e){e!==Ul&&e.next===null&&(Ul===null?bd=Ul=e:Ul=Ul.next=e),vd=!0,Ip||(Ip=!0,z3())}function nc(e,s){if(!Xp&&vd){Xp=!0;do for(var o=!1,u=bd;u!==null;){if(e!==0){var p=u.pendingLanes;if(p===0)var g=0;else{var y=u.suspendedLanes,T=u.pingedLanes;g=(1<<31-Be(42|e)+1)-1,g&=p&~(y&~T),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(o=!0,Lv(u,g))}else g=Wt,g=yi(u,u===we?g:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(g&3)===0||Mi(u,g)||(o=!0,Lv(u,g));u=u.next}while(o);Xp=!1}}function A3(){jv()}function jv(){vd=Ip=!1;var e=0;Gs!==0&&P3()&&(e=Gs);for(var s=vt(),o=null,u=bd;u!==null;){var p=u.next,g=Dv(u,s);g===0?(u.next=null,o===null?bd=p:o.next=p,p===null&&(Ul=o)):(o=u,(e!==0||(g&3)!==0)&&(vd=!0)),u=p}mi!==0&&mi!==5||nc(e),Gs!==0&&(Gs=0)}function Dv(e,s){for(var o=e.suspendedLanes,u=e.pingedLanes,p=e.expirationTimes,g=e.pendingLanes&-62914561;0<g;){var y=31-Be(g),T=1<<y,R=p[y];R===-1?((T&o)===0||(T&u)!==0)&&(p[y]=$e(T,s)):R<=s&&(e.expiredLanes|=T),g&=~T}if(s=we,o=Wt,o=yi(e,e===s?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),u=e.callbackNode,o===0||e===s&&(pe===2||pe===9)||e.cancelPendingCommit!==null)return u!==null&&u!==null&&rt(u),e.callbackNode=null,e.callbackPriority=0;if((o&3)===0||Mi(e,o)){if(s=o&-o,s===e.callbackPriority)return s;switch(u!==null&&rt(u),We(o)){case 2:case 8:o=Ot;break;case 32:o=ce;break;case 268435456:o=Ht;break;default:o=ce}return u=Nv.bind(null,e),o=G(o,u),e.callbackPriority=s,e.callbackNode=o,s}return u!==null&&u!==null&&rt(u),e.callbackPriority=2,e.callbackNode=null,2}function Nv(e,s){if(mi!==0&&mi!==5)return e.callbackNode=null,e.callbackPriority=0,null;var o=e.callbackNode;if(xd()&&e.callbackNode!==o)return null;var u=Wt;return u=yi(e,e===we?u:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),u===0?null:(mv(e,u,s),Dv(e,vt()),e.callbackNode!=null&&e.callbackNode===o?Nv.bind(null,e):null)}function Lv(e,s){if(xd())return null;mv(e,s,!0)}function z3(){Y3(function(){(ue&6)!==0?G(Oe,A3):jv()})}function $p(){if(Gs===0){var e=El;e===0&&(e=qi,qi<<=1,(qi&261888)===0&&(qi=256)),Gs=e}return Gs}function Bv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Mu(""+e)}function Hv(e,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,e.id&&o.setAttribute("form",e.id),s.parentNode.insertBefore(o,s),e=new FormData(e),o.parentNode.removeChild(o),e}function O3(e,s,o,u,p){if(s==="submit"&&o&&o.stateNode===p){var g=Bv((p[Pt]||null).action),y=u.submitter;y&&(s=(s=y[Pt]||null)?Bv(s.formAction):y.getAttribute("formAction"),s!==null&&(g=s,y=null));var T=new Ou("action","action",null,u,p);e.push({event:T,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Gs!==0){var R=y?Hv(p,y):new FormData(p);pp(o,{pending:!0,data:R,method:p.method,action:g},null,R)}}else typeof g=="function"&&(T.preventDefault(),R=y?Hv(p,y):new FormData(p),pp(o,{pending:!0,data:R,method:p.method,action:g},g,R))},currentTarget:p}]})}}for(var Wp=0;Wp<Oh.length;Wp++){var Qp=Oh[Wp],R3=Qp.toLowerCase(),j3=Qp[0].toUpperCase()+Qp.slice(1);ga(R3,"on"+j3)}ga(gx,"onAnimationEnd"),ga(mx,"onAnimationIteration"),ga(xx,"onAnimationStart"),ga("dblclick","onDoubleClick"),ga("focusin","onFocus"),ga("focusout","onBlur"),ga(WS,"onTransitionRun"),ga(QS,"onTransitionStart"),ga(ZS,"onTransitionCancel"),ga(bx,"onTransitionEnd"),$n("onMouseEnter",["mouseout","mouseover"]),$n("onMouseLeave",["mouseout","mouseover"]),$n("onPointerEnter",["pointerout","pointerover"]),$n("onPointerLeave",["pointerout","pointerover"]),Sa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Sa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Sa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Sa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Sa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Sa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ac="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),D3=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ac));function Fv(e,s){s=(s&4)!==0;for(var o=0;o<e.length;o++){var u=e[o],p=u.event;u=u.listeners;t:{var g=void 0;if(s)for(var y=u.length-1;0<=y;y--){var T=u[y],R=T.instance,V=T.currentTarget;if(T=T.listener,R!==g&&p.isPropagationStopped())break t;g=T,p.currentTarget=V;try{g(p)}catch(K){Du(K)}p.currentTarget=null,g=R}else for(y=0;y<u.length;y++){if(T=u[y],R=T.instance,V=T.currentTarget,T=T.listener,R!==g&&p.isPropagationStopped())break t;g=T,p.currentTarget=V;try{g(p)}catch(K){Du(K)}p.currentTarget=null,g=R}}}}function $t(e,s){var o=s[Vi];o===void 0&&(o=s[Vi]=new Set);var u=e+"__bubble";o.has(u)||(Pv(s,e,2,!1),o.add(u))}function Zp(e,s,o){var u=0;s&&(u|=4),Pv(o,e,u,s)}var yd="_reactListening"+Math.random().toString(36).slice(2);function Kp(e){if(!e[yd]){e[yd]=!0,Mn.forEach(function(o){o!=="selectionchange"&&(D3.has(o)||Zp(o,!1,e),Zp(o,!0,e))});var s=e.nodeType===9?e:e.ownerDocument;s===null||s[yd]||(s[yd]=!0,Zp("selectionchange",!1,s))}}function Pv(e,s,o,u){switch(gy(s)){case 2:var p=ok;break;case 8:p=ck;break;default:p=h0}o=p.bind(null,s,o,e),p=void 0,!bh||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),u?p!==void 0?e.addEventListener(s,o,{capture:!0,passive:p}):e.addEventListener(s,o,!0):p!==void 0?e.addEventListener(s,o,{passive:p}):e.addEventListener(s,o,!1)}function Jp(e,s,o,u,p){var g=u;if((s&1)===0&&(s&2)===0&&u!==null)t:for(;;){if(u===null)return;var y=u.tag;if(y===3||y===4){var T=u.stateNode.containerInfo;if(T===p)break;if(y===4)for(y=u.return;y!==null;){var R=y.tag;if((R===3||R===4)&&y.stateNode.containerInfo===p)return;y=y.return}for(;T!==null;){if(y=Pe(T),y===null)return;if(R=y.tag,R===5||R===6||R===26||R===27){u=g=y;continue t}T=T.parentNode}}u=u.return}Vm(function(){var V=g,K=mh(o),tt=[];t:{var I=vx.get(e);if(I!==void 0){var Z=Ou,gt=e;switch(e){case"keypress":if(Au(o)===0)break t;case"keydown":case"keyup":Z=MS;break;case"focusin":gt="focus",Z=_h;break;case"focusout":gt="blur",Z=_h;break;case"beforeblur":case"afterblur":Z=_h;break;case"click":if(o.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=$m;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=gS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=zS;break;case gx:case mx:case xx:Z=bS;break;case bx:Z=RS;break;case"scroll":case"scrollend":Z=hS;break;case"wheel":Z=DS;break;case"copy":case"cut":case"paste":Z=yS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=Qm;break;case"toggle":case"beforetoggle":Z=LS}var kt=(s&4)!==0,ye=!kt&&(e==="scroll"||e==="scrollend"),P=kt?I!==null?I+"Capture":null:I;kt=[];for(var L=V,q;L!==null;){var J=L;if(q=J.stateNode,J=J.tag,J!==5&&J!==26&&J!==27||q===null||P===null||(J=Eo(L,P),J!=null&&kt.push(sc(L,J,q))),ye)break;L=L.return}0<kt.length&&(I=new Z(I,gt,null,o,K),tt.push({event:I,listeners:kt}))}}if((s&7)===0){t:{if(I=e==="mouseover"||e==="pointerover",Z=e==="mouseout"||e==="pointerout",I&&o!==gh&&(gt=o.relatedTarget||o.fromElement)&&(Pe(gt)||gt[ee]))break t;if((Z||I)&&(I=K.window===K?K:(I=K.ownerDocument)?I.defaultView||I.parentWindow:window,Z?(gt=o.relatedTarget||o.toElement,Z=V,gt=gt?Pe(gt):null,gt!==null&&(ye=l(gt),kt=gt.tag,gt!==ye||kt!==5&&kt!==27&&kt!==6)&&(gt=null)):(Z=null,gt=V),Z!==gt)){if(kt=$m,J="onMouseLeave",P="onMouseEnter",L="mouse",(e==="pointerout"||e==="pointerover")&&(kt=Qm,J="onPointerLeave",P="onPointerEnter",L="pointer"),ye=Z==null?I:_a(Z),q=gt==null?I:_a(gt),I=new kt(J,L+"leave",Z,o,K),I.target=ye,I.relatedTarget=q,J=null,Pe(K)===V&&(kt=new kt(P,L+"enter",gt,o,K),kt.target=q,kt.relatedTarget=ye,J=kt),ye=J,Z&&gt)e:{for(kt=N3,P=Z,L=gt,q=0,J=P;J;J=kt(J))q++;J=0;for(var _t=L;_t;_t=kt(_t))J++;for(;0<q-J;)P=kt(P),q--;for(;0<J-q;)L=kt(L),J--;for(;q--;){if(P===L||L!==null&&P===L.alternate){kt=P;break e}P=kt(P),L=kt(L)}kt=null}else kt=null;Z!==null&&Uv(tt,I,Z,kt,!1),gt!==null&&ye!==null&&Uv(tt,ye,gt,kt,!0)}}t:{if(I=V?_a(V):window,Z=I.nodeName&&I.nodeName.toLowerCase(),Z==="select"||Z==="input"&&I.type==="file")var se=ax;else if(ix(I))if(sx)se=IS;else{se=qS;var xt=GS}else Z=I.nodeName,!Z||Z.toLowerCase()!=="input"||I.type!=="checkbox"&&I.type!=="radio"?V&&ph(V.elementType)&&(se=ax):se=VS;if(se&&(se=se(e,V))){nx(tt,se,o,K);break t}xt&&xt(e,I,V),e==="focusout"&&V&&I.type==="number"&&V.memoizedProps.value!=null&&hh(I,"number",I.value)}switch(xt=V?_a(V):window,e){case"focusin":(ix(xt)||xt.contentEditable==="true")&&(bl=xt,Ch=V,Do=null);break;case"focusout":Do=Ch=bl=null;break;case"mousedown":Ah=!0;break;case"contextmenu":case"mouseup":case"dragend":Ah=!1,hx(tt,o,K);break;case"selectionchange":if($S)break;case"keydown":case"keyup":hx(tt,o,K)}var Dt;if(kh)t:{switch(e){case"compositionstart":var Qt="onCompositionStart";break t;case"compositionend":Qt="onCompositionEnd";break t;case"compositionupdate":Qt="onCompositionUpdate";break t}Qt=void 0}else xl?tx(e,o)&&(Qt="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(Qt="onCompositionStart");Qt&&(Zm&&o.locale!=="ko"&&(xl||Qt!=="onCompositionStart"?Qt==="onCompositionEnd"&&xl&&(Dt=Im()):(Ms=K,vh="value"in Ms?Ms.value:Ms.textContent,xl=!0)),xt=wd(V,Qt),0<xt.length&&(Qt=new Wm(Qt,e,null,o,K),tt.push({event:Qt,listeners:xt}),Dt?Qt.data=Dt:(Dt=ex(o),Dt!==null&&(Qt.data=Dt)))),(Dt=HS?FS(e,o):PS(e,o))&&(Qt=wd(V,"onBeforeInput"),0<Qt.length&&(xt=new Wm("onBeforeInput","beforeinput",null,o,K),tt.push({event:xt,listeners:Qt}),xt.data=Dt)),O3(tt,e,V,o,K)}Fv(tt,s)})}function sc(e,s,o){return{instance:e,listener:s,currentTarget:o}}function wd(e,s){for(var o=s+"Capture",u=[];e!==null;){var p=e,g=p.stateNode;if(p=p.tag,p!==5&&p!==26&&p!==27||g===null||(p=Eo(e,o),p!=null&&u.unshift(sc(e,p,g)),p=Eo(e,s),p!=null&&u.push(sc(e,p,g))),e.tag===3)return u;e=e.return}return[]}function N3(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Uv(e,s,o,u,p){for(var g=s._reactName,y=[];o!==null&&o!==u;){var T=o,R=T.alternate,V=T.stateNode;if(T=T.tag,R!==null&&R===u)break;T!==5&&T!==26&&T!==27||V===null||(R=V,p?(V=Eo(o,g),V!=null&&y.unshift(sc(o,V,R))):p||(V=Eo(o,g),V!=null&&y.push(sc(o,V,R)))),o=o.return}y.length!==0&&e.push({event:s,listeners:y})}var L3=/\r\n?/g,B3=/\u0000|\uFFFD/g;function Yv(e){return(typeof e=="string"?e:""+e).replace(L3,`
`).replace(B3,"")}function Gv(e,s){return s=Yv(s),Yv(e)===s}function ve(e,s,o,u,p,g){switch(o){case"children":typeof u=="string"?s==="body"||s==="textarea"&&u===""||pl(e,u):(typeof u=="number"||typeof u=="bigint")&&s!=="body"&&pl(e,""+u);break;case"className":Tu(e,"class",u);break;case"tabIndex":Tu(e,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Tu(e,o,u);break;case"style":Gm(e,u,g);break;case"data":if(s!=="object"){Tu(e,"data",u);break}case"src":case"href":if(u===""&&(s!=="a"||o!=="href")){e.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){e.removeAttribute(o);break}u=Mu(""+u),e.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){e.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(o==="formAction"?(s!=="input"&&ve(e,s,"name",p.name,p,null),ve(e,s,"formEncType",p.formEncType,p,null),ve(e,s,"formMethod",p.formMethod,p,null),ve(e,s,"formTarget",p.formTarget,p,null)):(ve(e,s,"encType",p.encType,p,null),ve(e,s,"method",p.method,p,null),ve(e,s,"target",p.target,p,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){e.removeAttribute(o);break}u=Mu(""+u),e.setAttribute(o,u);break;case"onClick":u!=null&&(e.onclick=Va);break;case"onScroll":u!=null&&$t("scroll",e);break;case"onScrollEnd":u!=null&&$t("scrollend",e);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(n(61));if(o=u.__html,o!=null){if(p.children!=null)throw Error(n(60));e.innerHTML=o}}break;case"multiple":e.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":e.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){e.removeAttribute("xlink:href");break}o=Mu(""+u),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(o,""+u):e.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(o,""):e.removeAttribute(o);break;case"capture":case"download":u===!0?e.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(o,u):e.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?e.setAttribute(o,u):e.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?e.removeAttribute(o):e.setAttribute(o,u);break;case"popover":$t("beforetoggle",e),$t("toggle",e),ku(e,"popover",u);break;case"xlinkActuate":qa(e,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":qa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":qa(e,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":qa(e,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":qa(e,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":qa(e,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":qa(e,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":qa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":qa(e,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":ku(e,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=dS.get(o)||o,ku(e,o,u))}}function t0(e,s,o,u,p,g){switch(o){case"style":Gm(e,u,g);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(n(61));if(o=u.__html,o!=null){if(p.children!=null)throw Error(n(60));e.innerHTML=o}}break;case"children":typeof u=="string"?pl(e,u):(typeof u=="number"||typeof u=="bigint")&&pl(e,""+u);break;case"onScroll":u!=null&&$t("scroll",e);break;case"onScrollEnd":u!=null&&$t("scrollend",e);break;case"onClick":u!=null&&(e.onclick=Va);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!fl.hasOwnProperty(o))t:{if(o[0]==="o"&&o[1]==="n"&&(p=o.endsWith("Capture"),s=o.slice(2,p?o.length-7:void 0),g=e[Pt]||null,g=g!=null?g[o]:null,typeof g=="function"&&e.removeEventListener(s,g,p),typeof u=="function")){typeof g!="function"&&g!==null&&(o in e?e[o]=null:e.hasAttribute(o)&&e.removeAttribute(o)),e.addEventListener(s,u,p);break t}o in e?e[o]=u:u===!0?e.setAttribute(o,""):ku(e,o,u)}}}function Oi(e,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":$t("error",e),$t("load",e);var u=!1,p=!1,g;for(g in o)if(o.hasOwnProperty(g)){var y=o[g];if(y!=null)switch(g){case"src":u=!0;break;case"srcSet":p=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(n(137,s));default:ve(e,s,g,y,o,null)}}p&&ve(e,s,"srcSet",o.srcSet,o,null),u&&ve(e,s,"src",o.src,o,null);return;case"input":$t("invalid",e);var T=g=y=p=null,R=null,V=null;for(u in o)if(o.hasOwnProperty(u)){var K=o[u];if(K!=null)switch(u){case"name":p=K;break;case"type":y=K;break;case"checked":R=K;break;case"defaultChecked":V=K;break;case"value":g=K;break;case"defaultValue":T=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(n(137,s));break;default:ve(e,s,u,K,o,null)}}Fm(e,g,T,R,V,y,p,!1);return;case"select":$t("invalid",e),u=y=g=null;for(p in o)if(o.hasOwnProperty(p)&&(T=o[p],T!=null))switch(p){case"value":g=T;break;case"defaultValue":y=T;break;case"multiple":u=T;default:ve(e,s,p,T,o,null)}s=g,o=y,e.multiple=!!u,s!=null?hl(e,!!u,s,!1):o!=null&&hl(e,!!u,o,!0);return;case"textarea":$t("invalid",e),g=p=u=null;for(y in o)if(o.hasOwnProperty(y)&&(T=o[y],T!=null))switch(y){case"value":u=T;break;case"defaultValue":p=T;break;case"children":g=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(n(91));break;default:ve(e,s,y,T,o,null)}Um(e,u,p,g);return;case"option":for(R in o)o.hasOwnProperty(R)&&(u=o[R],u!=null)&&(R==="selected"?e.selected=u&&typeof u!="function"&&typeof u!="symbol":ve(e,s,R,u,o,null));return;case"dialog":$t("beforetoggle",e),$t("toggle",e),$t("cancel",e),$t("close",e);break;case"iframe":case"object":$t("load",e);break;case"video":case"audio":for(u=0;u<ac.length;u++)$t(ac[u],e);break;case"image":$t("error",e),$t("load",e);break;case"details":$t("toggle",e);break;case"embed":case"source":case"link":$t("error",e),$t("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(V in o)if(o.hasOwnProperty(V)&&(u=o[V],u!=null))switch(V){case"children":case"dangerouslySetInnerHTML":throw Error(n(137,s));default:ve(e,s,V,u,o,null)}return;default:if(ph(s)){for(K in o)o.hasOwnProperty(K)&&(u=o[K],u!==void 0&&t0(e,s,K,u,o,void 0));return}}for(T in o)o.hasOwnProperty(T)&&(u=o[T],u!=null&&ve(e,s,T,u,o,null))}function H3(e,s,o,u){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var p=null,g=null,y=null,T=null,R=null,V=null,K=null;for(Z in o){var tt=o[Z];if(o.hasOwnProperty(Z)&&tt!=null)switch(Z){case"checked":break;case"value":break;case"defaultValue":R=tt;default:u.hasOwnProperty(Z)||ve(e,s,Z,null,u,tt)}}for(var I in u){var Z=u[I];if(tt=o[I],u.hasOwnProperty(I)&&(Z!=null||tt!=null))switch(I){case"type":g=Z;break;case"name":p=Z;break;case"checked":V=Z;break;case"defaultChecked":K=Z;break;case"value":y=Z;break;case"defaultValue":T=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(n(137,s));break;default:Z!==tt&&ve(e,s,I,Z,u,tt)}}fh(e,y,T,R,V,K,g,p);return;case"select":Z=y=T=I=null;for(g in o)if(R=o[g],o.hasOwnProperty(g)&&R!=null)switch(g){case"value":break;case"multiple":Z=R;default:u.hasOwnProperty(g)||ve(e,s,g,null,u,R)}for(p in u)if(g=u[p],R=o[p],u.hasOwnProperty(p)&&(g!=null||R!=null))switch(p){case"value":I=g;break;case"defaultValue":T=g;break;case"multiple":y=g;default:g!==R&&ve(e,s,p,g,u,R)}s=T,o=y,u=Z,I!=null?hl(e,!!o,I,!1):!!u!=!!o&&(s!=null?hl(e,!!o,s,!0):hl(e,!!o,o?[]:"",!1));return;case"textarea":Z=I=null;for(T in o)if(p=o[T],o.hasOwnProperty(T)&&p!=null&&!u.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:ve(e,s,T,null,u,p)}for(y in u)if(p=u[y],g=o[y],u.hasOwnProperty(y)&&(p!=null||g!=null))switch(y){case"value":I=p;break;case"defaultValue":Z=p;break;case"children":break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(n(91));break;default:p!==g&&ve(e,s,y,p,u,g)}Pm(e,I,Z);return;case"option":for(var gt in o)I=o[gt],o.hasOwnProperty(gt)&&I!=null&&!u.hasOwnProperty(gt)&&(gt==="selected"?e.selected=!1:ve(e,s,gt,null,u,I));for(R in u)I=u[R],Z=o[R],u.hasOwnProperty(R)&&I!==Z&&(I!=null||Z!=null)&&(R==="selected"?e.selected=I&&typeof I!="function"&&typeof I!="symbol":ve(e,s,R,I,u,Z));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var kt in o)I=o[kt],o.hasOwnProperty(kt)&&I!=null&&!u.hasOwnProperty(kt)&&ve(e,s,kt,null,u,I);for(V in u)if(I=u[V],Z=o[V],u.hasOwnProperty(V)&&I!==Z&&(I!=null||Z!=null))switch(V){case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(n(137,s));break;default:ve(e,s,V,I,u,Z)}return;default:if(ph(s)){for(var ye in o)I=o[ye],o.hasOwnProperty(ye)&&I!==void 0&&!u.hasOwnProperty(ye)&&t0(e,s,ye,void 0,u,I);for(K in u)I=u[K],Z=o[K],!u.hasOwnProperty(K)||I===Z||I===void 0&&Z===void 0||t0(e,s,K,I,u,Z);return}}for(var P in o)I=o[P],o.hasOwnProperty(P)&&I!=null&&!u.hasOwnProperty(P)&&ve(e,s,P,null,u,I);for(tt in u)I=u[tt],Z=o[tt],!u.hasOwnProperty(tt)||I===Z||I==null&&Z==null||ve(e,s,tt,I,u,Z)}function qv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function F3(){if(typeof performance.getEntriesByType=="function"){for(var e=0,s=0,o=performance.getEntriesByType("resource"),u=0;u<o.length;u++){var p=o[u],g=p.transferSize,y=p.initiatorType,T=p.duration;if(g&&T&&qv(y)){for(y=0,T=p.responseEnd,u+=1;u<o.length;u++){var R=o[u],V=R.startTime;if(V>T)break;var K=R.transferSize,tt=R.initiatorType;K&&qv(tt)&&(R=R.responseEnd,y+=K*(R<T?1:(T-V)/(R-V)))}if(--u,s+=8*(g+y)/(p.duration/1e3),e++,10<e)break}}if(0<e)return s/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var e0=null,i0=null;function _d(e){return e.nodeType===9?e:e.ownerDocument}function Vv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Iv(e,s){if(e===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&s==="foreignObject"?0:e}function n0(e,s){return e==="textarea"||e==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var a0=null;function P3(){var e=window.event;return e&&e.type==="popstate"?e===a0?!1:(a0=e,!0):(a0=null,!1)}var Xv=typeof setTimeout=="function"?setTimeout:void 0,U3=typeof clearTimeout=="function"?clearTimeout:void 0,$v=typeof Promise=="function"?Promise:void 0,Y3=typeof queueMicrotask=="function"?queueMicrotask:typeof $v<"u"?function(e){return $v.resolve(null).then(e).catch(G3)}:Xv;function G3(e){setTimeout(function(){throw e})}function qs(e){return e==="head"}function Wv(e,s){var o=s,u=0;do{var p=o.nextSibling;if(e.removeChild(o),p&&p.nodeType===8)if(o=p.data,o==="/$"||o==="/&"){if(u===0){e.removeChild(p),Vl(s);return}u--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")u++;else if(o==="html")rc(e.ownerDocument.documentElement);else if(o==="head"){o=e.ownerDocument.head,rc(o);for(var g=o.firstChild;g;){var y=g.nextSibling,T=g.nodeName;g[Fe]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&g.rel.toLowerCase()==="stylesheet"||o.removeChild(g),g=y}}else o==="body"&&rc(e.ownerDocument.body);o=p}while(o);Vl(s)}function Qv(e,s){var o=e;e=0;do{var u=o.nextSibling;if(o.nodeType===1?s?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(s?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(e===0)break;e--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||e++;o=u}while(o)}function s0(e){var s=e.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":s0(o),ei(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}e.removeChild(o)}}function q3(e,s,o,u){for(;e.nodeType===1;){var p=o;if(e.nodeName.toLowerCase()!==s.toLowerCase()){if(!u&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(u){if(!e[Fe])switch(s){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(g=e.getAttribute("rel"),g==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(g!==p.rel||e.getAttribute("href")!==(p.href==null||p.href===""?null:p.href)||e.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin)||e.getAttribute("title")!==(p.title==null?null:p.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(g=e.getAttribute("src"),(g!==(p.src==null?null:p.src)||e.getAttribute("type")!==(p.type==null?null:p.type)||e.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin))&&g&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(s==="input"&&e.type==="hidden"){var g=p.name==null?null:""+p.name;if(p.type==="hidden"&&e.getAttribute("name")===g)return e}else return e;if(e=aa(e.nextSibling),e===null)break}return null}function V3(e,s,o){if(s==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!o||(e=aa(e.nextSibling),e===null))return null;return e}function Zv(e,s){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=aa(e.nextSibling),e===null))return null;return e}function r0(e){return e.data==="$?"||e.data==="$~"}function l0(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function I3(e,s){var o=e.ownerDocument;if(e.data==="$~")e._reactRetry=s;else if(e.data!=="$?"||o.readyState!=="loading")s();else{var u=function(){s(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),e._reactRetry=u}}function aa(e){for(;e!=null;e=e.nextSibling){var s=e.nodeType;if(s===1||s===3)break;if(s===8){if(s=e.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return e}var o0=null;function Kv(e){e=e.nextSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"||o==="/&"){if(s===0)return aa(e.nextSibling);s--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||s++}e=e.nextSibling}return null}function Jv(e){e=e.previousSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(s===0)return e;s--}else o!=="/$"&&o!=="/&"||s++}e=e.previousSibling}return null}function ty(e,s,o){switch(s=_d(o),e){case"html":if(e=s.documentElement,!e)throw Error(n(452));return e;case"head":if(e=s.head,!e)throw Error(n(453));return e;case"body":if(e=s.body,!e)throw Error(n(454));return e;default:throw Error(n(451))}}function rc(e){for(var s=e.attributes;s.length;)e.removeAttributeNode(s[0]);ei(e)}var sa=new Map,ey=new Set;function Sd(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ls=X.d;X.d={f:X3,r:$3,D:W3,C:Q3,L:Z3,m:K3,X:tk,S:J3,M:ek};function X3(){var e=ls.f(),s=pd();return e||s}function $3(e){var s=ln(e);s!==null&&s.tag===5&&s.type==="form"?bb(s):ls.r(e)}var Yl=typeof document>"u"?null:document;function iy(e,s,o){var u=Yl;if(u&&typeof s=="string"&&s){var p=Zn(s);p='link[rel="'+e+'"][href="'+p+'"]',typeof o=="string"&&(p+='[crossorigin="'+o+'"]'),ey.has(p)||(ey.add(p),e={rel:e,crossOrigin:o,href:s},u.querySelector(p)===null&&(s=u.createElement("link"),Oi(s,"link",e),qt(s),u.head.appendChild(s)))}}function W3(e){ls.D(e),iy("dns-prefetch",e,null)}function Q3(e,s){ls.C(e,s),iy("preconnect",e,s)}function Z3(e,s,o){ls.L(e,s,o);var u=Yl;if(u&&e&&s){var p='link[rel="preload"][as="'+Zn(s)+'"]';s==="image"&&o&&o.imageSrcSet?(p+='[imagesrcset="'+Zn(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(p+='[imagesizes="'+Zn(o.imageSizes)+'"]')):p+='[href="'+Zn(e)+'"]';var g=p;switch(s){case"style":g=Gl(e);break;case"script":g=ql(e)}sa.has(g)||(e=x({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:e,as:s},o),sa.set(g,e),u.querySelector(p)!==null||s==="style"&&u.querySelector(lc(g))||s==="script"&&u.querySelector(oc(g))||(s=u.createElement("link"),Oi(s,"link",e),qt(s),u.head.appendChild(s)))}}function K3(e,s){ls.m(e,s);var o=Yl;if(o&&e){var u=s&&typeof s.as=="string"?s.as:"script",p='link[rel="modulepreload"][as="'+Zn(u)+'"][href="'+Zn(e)+'"]',g=p;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=ql(e)}if(!sa.has(g)&&(e=x({rel:"modulepreload",href:e},s),sa.set(g,e),o.querySelector(p)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(oc(g)))return}u=o.createElement("link"),Oi(u,"link",e),qt(u),o.head.appendChild(u)}}}function J3(e,s,o){ls.S(e,s,o);var u=Yl;if(u&&e){var p=Ue(u).hoistableStyles,g=Gl(e);s=s||"default";var y=p.get(g);if(!y){var T={loading:0,preload:null};if(y=u.querySelector(lc(g)))T.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":s},o),(o=sa.get(g))&&c0(e,o);var R=y=u.createElement("link");qt(R),Oi(R,"link",e),R._p=new Promise(function(V,K){R.onload=V,R.onerror=K}),R.addEventListener("load",function(){T.loading|=1}),R.addEventListener("error",function(){T.loading|=2}),T.loading|=4,kd(y,s,u)}y={type:"stylesheet",instance:y,count:1,state:T},p.set(g,y)}}}function tk(e,s){ls.X(e,s);var o=Yl;if(o&&e){var u=Ue(o).hoistableScripts,p=ql(e),g=u.get(p);g||(g=o.querySelector(oc(p)),g||(e=x({src:e,async:!0},s),(s=sa.get(p))&&u0(e,s),g=o.createElement("script"),qt(g),Oi(g,"link",e),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(p,g))}}function ek(e,s){ls.M(e,s);var o=Yl;if(o&&e){var u=Ue(o).hoistableScripts,p=ql(e),g=u.get(p);g||(g=o.querySelector(oc(p)),g||(e=x({src:e,async:!0,type:"module"},s),(s=sa.get(p))&&u0(e,s),g=o.createElement("script"),qt(g),Oi(g,"link",e),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(p,g))}}function ny(e,s,o,u){var p=(p=ht.current)?Sd(p):null;if(!p)throw Error(n(446));switch(e){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=Gl(o.href),o=Ue(p).hoistableStyles,u=o.get(s),u||(u={type:"style",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){e=Gl(o.href);var g=Ue(p).hoistableStyles,y=g.get(e);if(y||(p=p.ownerDocument||p,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(e,y),(g=p.querySelector(lc(e)))&&!g._p&&(y.instance=g,y.state.loading=5),sa.has(e)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},sa.set(e,o),g||ik(p,e,o,y.state))),s&&u===null)throw Error(n(528,""));return y}if(s&&u!==null)throw Error(n(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=ql(o),o=Ue(p).hoistableScripts,u=o.get(s),u||(u={type:"script",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(n(444,e))}}function Gl(e){return'href="'+Zn(e)+'"'}function lc(e){return'link[rel="stylesheet"]['+e+"]"}function ay(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function ik(e,s,o,u){e.querySelector('link[rel="preload"][as="style"]['+s+"]")?u.loading=1:(s=e.createElement("link"),u.preload=s,s.addEventListener("load",function(){return u.loading|=1}),s.addEventListener("error",function(){return u.loading|=2}),Oi(s,"link",o),qt(s),e.head.appendChild(s))}function ql(e){return'[src="'+Zn(e)+'"]'}function oc(e){return"script[async]"+e}function sy(e,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var u=e.querySelector('style[data-href~="'+Zn(o.href)+'"]');if(u)return s.instance=u,qt(u),u;var p=x({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(e.ownerDocument||e).createElement("style"),qt(u),Oi(u,"style",p),kd(u,o.precedence,e),s.instance=u;case"stylesheet":p=Gl(o.href);var g=e.querySelector(lc(p));if(g)return s.state.loading|=4,s.instance=g,qt(g),g;u=ay(o),(p=sa.get(p))&&c0(u,p),g=(e.ownerDocument||e).createElement("link"),qt(g);var y=g;return y._p=new Promise(function(T,R){y.onload=T,y.onerror=R}),Oi(g,"link",u),s.state.loading|=4,kd(g,o.precedence,e),s.instance=g;case"script":return g=ql(o.src),(p=e.querySelector(oc(g)))?(s.instance=p,qt(p),p):(u=o,(p=sa.get(g))&&(u=x({},o),u0(u,p)),e=e.ownerDocument||e,p=e.createElement("script"),qt(p),Oi(p,"link",u),e.head.appendChild(p),s.instance=p);case"void":return null;default:throw Error(n(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(u=s.instance,s.state.loading|=4,kd(u,o.precedence,e));return s.instance}function kd(e,s,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),p=u.length?u[u.length-1]:null,g=p,y=0;y<u.length;y++){var T=u[y];if(T.dataset.precedence===s)g=T;else if(g!==p)break}g?g.parentNode.insertBefore(e,g.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(e,s.firstChild))}function c0(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.title==null&&(e.title=s.title)}function u0(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.integrity==null&&(e.integrity=s.integrity)}var Td=null;function ry(e,s,o){if(Td===null){var u=new Map,p=Td=new Map;p.set(o,u)}else p=Td,u=p.get(o),u||(u=new Map,p.set(o,u));if(u.has(e))return u;for(u.set(e,null),o=o.getElementsByTagName(e),p=0;p<o.length;p++){var g=o[p];if(!(g[Fe]||g[Ft]||e==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var y=g.getAttribute(s)||"";y=e+y;var T=u.get(y);T?T.push(g):u.set(y,[g])}}return u}function ly(e,s,o){e=e.ownerDocument||e,e.head.insertBefore(o,s==="title"?e.querySelector("head > title"):null)}function nk(e,s,o){if(o===1||s.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;return s.rel==="stylesheet"?(e=s.disabled,typeof s.precedence=="string"&&e==null):!0;case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function oy(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ak(e,s,o,u){if(o.type==="stylesheet"&&(typeof u.media!="string"||matchMedia(u.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var p=Gl(u.href),g=s.querySelector(lc(p));if(g){s=g._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(e.count++,e=Ed.bind(e),s.then(e,e)),o.state.loading|=4,o.instance=g,qt(g);return}g=s.ownerDocument||s,u=ay(u),(p=sa.get(p))&&c0(u,p),g=g.createElement("link"),qt(g);var y=g;y._p=new Promise(function(T,R){y.onload=T,y.onerror=R}),Oi(g,"link",u),o.instance=g}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(o,s),(s=o.state.preload)&&(o.state.loading&3)===0&&(e.count++,o=Ed.bind(e),s.addEventListener("load",o),s.addEventListener("error",o))}}var d0=0;function sk(e,s){return e.stylesheets&&e.count===0&&Cd(e,e.stylesheets),0<e.count||0<e.imgCount?function(o){var u=setTimeout(function(){if(e.stylesheets&&Cd(e,e.stylesheets),e.unsuspend){var g=e.unsuspend;e.unsuspend=null,g()}},6e4+s);0<e.imgBytes&&d0===0&&(d0=62500*F3());var p=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Cd(e,e.stylesheets),e.unsuspend)){var g=e.unsuspend;e.unsuspend=null,g()}},(e.imgBytes>d0?50:800)+s);return e.unsuspend=o,function(){e.unsuspend=null,clearTimeout(u),clearTimeout(p)}}:null}function Ed(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Cd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Md=null;function Cd(e,s){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Md=new Map,s.forEach(rk,e),Md=null,Ed.call(e))}function rk(e,s){if(!(s.state.loading&4)){var o=Md.get(e);if(o)var u=o.get(null);else{o=new Map,Md.set(e,o);for(var p=e.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<p.length;g++){var y=p[g];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(o.set(y.dataset.precedence,y),u=y)}u&&o.set(null,u)}p=s.instance,y=p.getAttribute("data-precedence"),g=o.get(y)||u,g===u&&o.set(null,p),o.set(y,p),this.count++,u=Ed.bind(this),p.addEventListener("load",u),p.addEventListener("error",u),g?g.parentNode.insertBefore(p,g.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(p,e.firstChild)),s.state.loading|=4}}var cc={$$typeof:A,Provider:null,Consumer:null,_currentValue:st,_currentValue2:st,_threadCount:0};function lk(e,s,o,u,p,g,y,T,R){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Et(0),this.hiddenUpdates=Et(null),this.identifierPrefix=u,this.onUncaughtError=p,this.onCaughtError=g,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function cy(e,s,o,u,p,g,y,T,R,V,K,tt){return e=new lk(e,s,o,y,R,V,K,tt,T),s=1,g===!0&&(s|=24),g=An(3,null,null,s),e.current=g,g.stateNode=e,s=qh(),s.refCount++,e.pooledCache=s,s.refCount++,g.memoizedState={element:u,isDehydrated:o,cache:s},$h(g),e}function uy(e){return e?(e=wl,e):wl}function dy(e,s,o,u,p,g){p=uy(p),u.context===null?u.context=p:u.pendingContext=p,u=js(s),u.payload={element:o},g=g===void 0?null:g,g!==null&&(u.callback=g),o=Ds(e,u,s),o!==null&&(hn(o,e,s),Uo(o,e,s))}function fy(e,s){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<s?o:s}}function f0(e,s){fy(e,s),(e=e.alternate)&&fy(e,s)}function hy(e){if(e.tag===13||e.tag===31){var s=Er(e,67108864);s!==null&&hn(s,e,67108864),f0(e,67108864)}}function py(e){if(e.tag===13||e.tag===31){var s=Dn();s=Mt(s);var o=Er(e,s);o!==null&&hn(o,e,s),f0(e,s)}}var Ad=!0;function ok(e,s,o,u){var p=B.T;B.T=null;var g=X.p;try{X.p=2,h0(e,s,o,u)}finally{X.p=g,B.T=p}}function ck(e,s,o,u){var p=B.T;B.T=null;var g=X.p;try{X.p=8,h0(e,s,o,u)}finally{X.p=g,B.T=p}}function h0(e,s,o,u){if(Ad){var p=p0(u);if(p===null)Jp(e,s,u,zd,o),my(e,u);else if(dk(p,e,s,o,u))u.stopPropagation();else if(my(e,u),s&4&&-1<uk.indexOf(e)){for(;p!==null;){var g=ln(p);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var y=ae(g.pendingLanes);if(y!==0){var T=g;for(T.pendingLanes|=2,T.entangledLanes|=2;y;){var R=1<<31-Be(y);T.entanglements[1]|=R,y&=~R}Ca(g),(ue&6)===0&&(fd=vt()+500,nc(0))}}break;case 31:case 13:T=Er(g,2),T!==null&&hn(T,g,2),pd(),f0(g,2)}if(g=p0(u),g===null&&Jp(e,s,u,zd,o),g===p)break;p=g}p!==null&&u.stopPropagation()}else Jp(e,s,u,null,o)}}function p0(e){return e=mh(e),g0(e)}var zd=null;function g0(e){if(zd=null,e=Pe(e),e!==null){var s=l(e);if(s===null)e=null;else{var o=s.tag;if(o===13){if(e=c(s),e!==null)return e;e=null}else if(o===31){if(e=d(s),e!==null)return e;e=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;e=null}else s!==e&&(e=null)}}return zd=e,null}function gy(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Bt()){case Oe:return 2;case Ot:return 8;case ce:case ie:return 32;case Ht:return 268435456;default:return 32}default:return 32}}var m0=!1,Vs=null,Is=null,Xs=null,uc=new Map,dc=new Map,$s=[],uk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function my(e,s){switch(e){case"focusin":case"focusout":Vs=null;break;case"dragenter":case"dragleave":Is=null;break;case"mouseover":case"mouseout":Xs=null;break;case"pointerover":case"pointerout":uc.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":dc.delete(s.pointerId)}}function fc(e,s,o,u,p,g){return e===null||e.nativeEvent!==g?(e={blockedOn:s,domEventName:o,eventSystemFlags:u,nativeEvent:g,targetContainers:[p]},s!==null&&(s=ln(s),s!==null&&hy(s)),e):(e.eventSystemFlags|=u,s=e.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),e)}function dk(e,s,o,u,p){switch(s){case"focusin":return Vs=fc(Vs,e,s,o,u,p),!0;case"dragenter":return Is=fc(Is,e,s,o,u,p),!0;case"mouseover":return Xs=fc(Xs,e,s,o,u,p),!0;case"pointerover":var g=p.pointerId;return uc.set(g,fc(uc.get(g)||null,e,s,o,u,p)),!0;case"gotpointercapture":return g=p.pointerId,dc.set(g,fc(dc.get(g)||null,e,s,o,u,p)),!0}return!1}function xy(e){var s=Pe(e.target);if(s!==null){var o=l(s);if(o!==null){if(s=o.tag,s===13){if(s=c(o),s!==null){e.blockedOn=s,Re(e.priority,function(){py(o)});return}}else if(s===31){if(s=d(o),s!==null){e.blockedOn=s,Re(e.priority,function(){py(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Od(e){if(e.blockedOn!==null)return!1;for(var s=e.targetContainers;0<s.length;){var o=p0(e.nativeEvent);if(o===null){o=e.nativeEvent;var u=new o.constructor(o.type,o);gh=u,o.target.dispatchEvent(u),gh=null}else return s=ln(o),s!==null&&hy(s),e.blockedOn=o,!1;s.shift()}return!0}function by(e,s,o){Od(e)&&o.delete(s)}function fk(){m0=!1,Vs!==null&&Od(Vs)&&(Vs=null),Is!==null&&Od(Is)&&(Is=null),Xs!==null&&Od(Xs)&&(Xs=null),uc.forEach(by),dc.forEach(by)}function Rd(e,s){e.blockedOn===s&&(e.blockedOn=null,m0||(m0=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,fk)))}var jd=null;function vy(e){jd!==e&&(jd=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){jd===e&&(jd=null);for(var s=0;s<e.length;s+=3){var o=e[s],u=e[s+1],p=e[s+2];if(typeof u!="function"){if(g0(u||o)===null)continue;break}var g=ln(o);g!==null&&(e.splice(s,3),s-=3,pp(g,{pending:!0,data:p,method:o.method,action:u},u,p))}}))}function Vl(e){function s(R){return Rd(R,e)}Vs!==null&&Rd(Vs,e),Is!==null&&Rd(Is,e),Xs!==null&&Rd(Xs,e),uc.forEach(s),dc.forEach(s);for(var o=0;o<$s.length;o++){var u=$s[o];u.blockedOn===e&&(u.blockedOn=null)}for(;0<$s.length&&(o=$s[0],o.blockedOn===null);)xy(o),o.blockedOn===null&&$s.shift();if(o=(e.ownerDocument||e).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var p=o[u],g=o[u+1],y=p[Pt]||null;if(typeof g=="function")y||vy(o);else if(y){var T=null;if(g&&g.hasAttribute("formAction")){if(p=g,y=g[Pt]||null)T=y.formAction;else if(g0(p)!==null)continue}else T=y.action;typeof T=="function"?o[u+1]=T:(o.splice(u,3),u-=3),vy(o)}}}function yy(){function e(g){g.canIntercept&&g.info==="react-transition"&&g.intercept({handler:function(){return new Promise(function(y){return p=y})},focusReset:"manual",scroll:"manual"})}function s(){p!==null&&(p(),p=null),u||setTimeout(o,20)}function o(){if(!u&&!navigation.transition){var g=navigation.currentEntry;g&&g.url!=null&&navigation.navigate(g.url,{state:g.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var u=!1,p=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(o,100),function(){u=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),p!==null&&(p(),p=null)}}}function x0(e){this._internalRoot=e}Dd.prototype.render=x0.prototype.render=function(e){var s=this._internalRoot;if(s===null)throw Error(n(409));var o=s.current,u=Dn();dy(o,u,e,s,null,null)},Dd.prototype.unmount=x0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var s=e.containerInfo;dy(e.current,2,null,e,null,null),pd(),s[ee]=null}};function Dd(e){this._internalRoot=e}Dd.prototype.unstable_scheduleHydration=function(e){if(e){var s=Gt();e={blockedOn:null,target:e,priority:s};for(var o=0;o<$s.length&&s!==0&&s<$s[o].priority;o++);$s.splice(o,0,e),o===0&&xy(e)}};var wy=t.version;if(wy!=="19.2.4")throw Error(n(527,wy,"19.2.4"));X.findDOMNode=function(e){var s=e._reactInternals;if(s===void 0)throw typeof e.render=="function"?Error(n(188)):(e=Object.keys(e).join(","),Error(n(268,e)));return e=h(s),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var hk={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nd.isDisabled&&Nd.supportsFiber)try{an=Nd.inject(hk),xe=Nd}catch{}}return pc.createRoot=function(e,s){if(!r(e))throw Error(n(299));var o=!1,u="",p=Cb,g=Ab,y=zb;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(p=s.onUncaughtError),s.onCaughtError!==void 0&&(g=s.onCaughtError),s.onRecoverableError!==void 0&&(y=s.onRecoverableError)),s=cy(e,1,!1,null,null,o,u,null,p,g,y,yy),e[ee]=s.current,Kp(e),new x0(s)},pc.hydrateRoot=function(e,s,o){if(!r(e))throw Error(n(299));var u=!1,p="",g=Cb,y=Ab,T=zb,R=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onUncaughtError!==void 0&&(g=o.onUncaughtError),o.onCaughtError!==void 0&&(y=o.onCaughtError),o.onRecoverableError!==void 0&&(T=o.onRecoverableError),o.formState!==void 0&&(R=o.formState)),s=cy(e,1,!0,s,o??null,u,p,R,g,y,T,yy),s.context=uy(null),o=s.current,u=Dn(),u=Mt(u),p=js(u),p.callback=null,Ds(o,p,u),o=u,s.current.lanes=o,yt(s,o),Ca(s),e[ee]=s.current,Kp(e),new Dd(s)},pc.version="19.2.4",pc}var Oy;function Tk(){if(Oy)return y0.exports;Oy=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),y0.exports=kk(),y0.exports}var Ek=Tk();var Ry="popstate";function jy(a){return typeof a=="object"&&a!=null&&"pathname"in a&&"search"in a&&"hash"in a&&"state"in a&&"key"in a}function Mk(a={}){function t(n,r){let l=r.state?.masked,{pathname:c,search:d,hash:f}=l||n.location;return sg("",{pathname:c,search:d,hash:f},r.state&&r.state.usr||null,r.state&&r.state.key||"default",l?{pathname:n.location.pathname,search:n.location.search,hash:n.location.hash}:void 0)}function i(n,r){return typeof r=="string"?r:tu(r)}return Ak(t,i,null,a)}function Ve(a,t){if(a===!1||a===null||typeof a>"u")throw new Error(t)}function Ya(a,t){if(!a){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ck(){return Math.random().toString(36).substring(2,10)}function Dy(a,t){return{usr:a.state,key:a.key,idx:t,masked:a.unstable_mask?{pathname:a.pathname,search:a.search,hash:a.hash}:void 0}}function sg(a,t,i=null,n,r){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof t=="string"?_o(t):t,state:i,key:t&&t.key||n||Ck(),unstable_mask:r}}function tu({pathname:a="/",search:t="",hash:i=""}){return t&&t!=="?"&&(a+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(a+=i.charAt(0)==="#"?i:"#"+i),a}function _o(a){let t={};if(a){let i=a.indexOf("#");i>=0&&(t.hash=a.substring(i),a=a.substring(0,i));let n=a.indexOf("?");n>=0&&(t.search=a.substring(n),a=a.substring(0,n)),a&&(t.pathname=a)}return t}function Ak(a,t,i,n={}){let{window:r=document.defaultView,v5Compat:l=!1}=n,c=r.history,d="POP",f=null,h=m();h==null&&(h=0,c.replaceState({...c.state,idx:h},""));function m(){return(c.state||{idx:null}).idx}function x(){d="POP";let S=m(),E=S==null?null:S-h;h=S,f&&f({action:d,location:w.location,delta:E})}function b(S,E){d="PUSH";let M=jy(S)?S:sg(w.location,S,E);h=m()+1;let A=Dy(M,h),O=w.createHref(M.unstable_mask||M);try{c.pushState(A,"",O)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;r.location.assign(O)}l&&f&&f({action:d,location:w.location,delta:1})}function v(S,E){d="REPLACE";let M=jy(S)?S:sg(w.location,S,E);h=m();let A=Dy(M,h),O=w.createHref(M.unstable_mask||M);c.replaceState(A,"",O),l&&f&&f({action:d,location:w.location,delta:0})}function _(S){return zk(S)}let w={get action(){return d},get location(){return a(r,c)},listen(S){if(f)throw new Error("A history only accepts one active listener");return r.addEventListener(Ry,x),f=S,()=>{r.removeEventListener(Ry,x),f=null}},createHref(S){return t(r,S)},createURL:_,encodeLocation(S){let E=_(S);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:b,replace:v,go(S){return c.go(S)}};return w}function zk(a,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Ve(i,"No window.location.(origin|href) available to create URL");let n=typeof a=="string"?a:tu(a);return n=n.replace(/ $/,"%20"),!t&&n.startsWith("//")&&(n=i+n),new URL(n,i)}function K2(a,t,i="/"){return Ok(a,t,i,!1)}function Ok(a,t,i,n){let r=typeof t=="string"?_o(t):t,l=ys(r.pathname||"/",i);if(l==null)return null;let c=J2(a);Rk(c);let d=null;for(let f=0;d==null&&f<c.length;++f){let h=Gk(l);d=Uk(c[f],h,n)}return d}function J2(a,t=[],i=[],n="",r=!1){let l=(c,d,f=r,h)=>{let m={relativePath:h===void 0?c.path||"":h,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(n)&&f)return;Ve(m.relativePath.startsWith(n),`Absolute route path "${m.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(n.length)}let x=Pa([n,m.relativePath]),b=i.concat(m);c.children&&c.children.length>0&&(Ve(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),J2(c.children,t,b,x,f)),!(c.path==null&&!c.index)&&t.push({path:x,score:Fk(x,c.index),routesMeta:b})};return a.forEach((c,d)=>{if(c.path===""||!c.path?.includes("?"))l(c,d);else for(let f of tw(c.path))l(c,d,!0,f)}),t}function tw(a){let t=a.split("/");if(t.length===0)return[];let[i,...n]=t,r=i.endsWith("?"),l=i.replace(/\?$/,"");if(n.length===0)return r?[l,""]:[l];let c=tw(n.join("/")),d=[];return d.push(...c.map(f=>f===""?l:[l,f].join("/"))),r&&d.push(...c),d.map(f=>a.startsWith("/")&&f===""?"/":f)}function Rk(a){a.sort((t,i)=>t.score!==i.score?i.score-t.score:Pk(t.routesMeta.map(n=>n.childrenIndex),i.routesMeta.map(n=>n.childrenIndex)))}var jk=/^:[\w-]+$/,Dk=3,Nk=2,Lk=1,Bk=10,Hk=-2,Ny=a=>a==="*";function Fk(a,t){let i=a.split("/"),n=i.length;return i.some(Ny)&&(n+=Hk),t&&(n+=Nk),i.filter(r=>!Ny(r)).reduce((r,l)=>r+(jk.test(l)?Dk:l===""?Lk:Bk),n)}function Pk(a,t){return a.length===t.length&&a.slice(0,-1).every((n,r)=>n===t[r])?a[a.length-1]-t[t.length-1]:0}function Uk(a,t,i=!1){let{routesMeta:n}=a,r={},l="/",c=[];for(let d=0;d<n.length;++d){let f=n[d],h=d===n.length-1,m=l==="/"?t:t.slice(l.length)||"/",x=Af({path:f.relativePath,caseSensitive:f.caseSensitive,end:h},m),b=f.route;if(!x&&h&&i&&!n[n.length-1].route.index&&(x=Af({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},m)),!x)return null;Object.assign(r,x.params),c.push({params:r,pathname:Pa([l,x.pathname]),pathnameBase:Xk(Pa([l,x.pathnameBase])),route:b}),x.pathnameBase!=="/"&&(l=Pa([l,x.pathnameBase]))}return c}function Af(a,t){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[i,n]=Yk(a.path,a.caseSensitive,a.end),r=t.match(i);if(!r)return null;let l=r[0],c=l.replace(/(.)\/+$/,"$1"),d=r.slice(1);return{params:n.reduce((h,{paramName:m,isOptional:x},b)=>{if(m==="*"){let _=d[b]||"";c=l.slice(0,l.length-_.length).replace(/(.)\/+$/,"$1")}const v=d[b];return x&&!v?h[m]=void 0:h[m]=(v||"").replace(/%2F/g,"/"),h},{}),pathname:l,pathnameBase:c,pattern:a}}function Yk(a,t=!1,i=!0){Ya(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let n=[],r="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,f,h,m)=>{if(n.push({paramName:d,isOptional:f!=null}),f){let x=m.charAt(h+c.length);return x&&x!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(n.push({paramName:"*"}),r+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?r+="\\/*$":a!==""&&a!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),n]}function Gk(a){try{return a.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ya(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),a}}function ys(a,t){if(t==="/")return a;if(!a.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,n=a.charAt(i);return n&&n!=="/"?null:a.slice(i)||"/"}var qk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Vk(a,t="/"){let{pathname:i,search:n="",hash:r=""}=typeof a=="string"?_o(a):a,l;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?l=Ly(i.substring(1),"/"):l=Ly(i,t)):l=t,{pathname:l,search:$k(n),hash:Wk(r)}}function Ly(a,t){let i=t.replace(/\/+$/,"").split("/");return a.split("/").forEach(r=>{r===".."?i.length>1&&i.pop():r!=="."&&i.push(r)}),i.length>1?i.join("/"):"/"}function k0(a,t,i,n){return`Cannot include a '${a}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ik(a){return a.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function ew(a){let t=Ik(a);return t.map((i,n)=>n===t.length-1?i.pathname:i.pathnameBase)}function Gg(a,t,i,n=!1){let r;typeof a=="string"?r=_o(a):(r={...a},Ve(!r.pathname||!r.pathname.includes("?"),k0("?","pathname","search",r)),Ve(!r.pathname||!r.pathname.includes("#"),k0("#","pathname","hash",r)),Ve(!r.search||!r.search.includes("#"),k0("#","search","hash",r)));let l=a===""||r.pathname==="",c=l?"/":r.pathname,d;if(c==null)d=i;else{let x=t.length-1;if(!n&&c.startsWith("..")){let b=c.split("/");for(;b[0]==="..";)b.shift(),x-=1;r.pathname=b.join("/")}d=x>=0?t[x]:"/"}let f=Vk(r,d),h=c&&c!=="/"&&c.endsWith("/"),m=(l||c===".")&&i.endsWith("/");return!f.pathname.endsWith("/")&&(h||m)&&(f.pathname+="/"),f}var Pa=a=>a.join("/").replace(/\/\/+/g,"/"),Xk=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),$k=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Wk=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,Qk=class{constructor(a,t,i,n=!1){this.status=a,this.statusText=t||"",this.internal=n,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function Zk(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function Kk(a){return a.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var iw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function nw(a,t){let i=a;if(typeof i!="string"||!qk.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let n=i,r=!1;if(iw)try{let l=new URL(window.location.href),c=i.startsWith("//")?new URL(l.protocol+i):new URL(i),d=ys(c.pathname,t);c.origin===l.origin&&d!=null?i=d+c.search+c.hash:r=!0}catch{Ya(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:n,isExternal:r,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var aw=["POST","PUT","PATCH","DELETE"];new Set(aw);var Jk=["GET",...aw];new Set(Jk);var So=N.createContext(null);So.displayName="DataRouter";var Kf=N.createContext(null);Kf.displayName="DataRouterState";var tT=N.createContext(!1),sw=N.createContext({isTransitioning:!1});sw.displayName="ViewTransition";var eT=N.createContext(new Map);eT.displayName="Fetchers";var iT=N.createContext(null);iT.displayName="Await";var pa=N.createContext(null);pa.displayName="Navigation";var gu=N.createContext(null);gu.displayName="Location";var ks=N.createContext({outlet:null,matches:[],isDataRoute:!1});ks.displayName="Route";var qg=N.createContext(null);qg.displayName="RouteError";var rw="REACT_ROUTER_ERROR",nT="REDIRECT",aT="ROUTE_ERROR_RESPONSE";function sT(a){if(a.startsWith(`${rw}:${nT}:{`))try{let t=JSON.parse(a.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function rT(a){if(a.startsWith(`${rw}:${aT}:{`))try{let t=JSON.parse(a.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new Qk(t.status,t.statusText,t.data)}catch{}}function lT(a,{relative:t}={}){Ve(mu(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:n}=N.useContext(pa),{hash:r,pathname:l,search:c}=xu(a,{relative:t}),d=l;return i!=="/"&&(d=l==="/"?i:Pa([i,l])),n.createHref({pathname:d,search:c,hash:r})}function mu(){return N.useContext(gu)!=null}function Ts(){return Ve(mu(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(gu).location}var lw="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ow(a){N.useContext(pa).static||N.useLayoutEffect(a)}function oT(){let{isDataRoute:a}=N.useContext(ks);return a?wT():cT()}function cT(){Ve(mu(),"useNavigate() may be used only in the context of a <Router> component.");let a=N.useContext(So),{basename:t,navigator:i}=N.useContext(pa),{matches:n}=N.useContext(ks),{pathname:r}=Ts(),l=JSON.stringify(ew(n)),c=N.useRef(!1);return ow(()=>{c.current=!0}),N.useCallback((f,h={})=>{if(Ya(c.current,lw),!c.current)return;if(typeof f=="number"){i.go(f);return}let m=Gg(f,JSON.parse(l),r,h.relative==="path");a==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Pa([t,m.pathname])),(h.replace?i.replace:i.push)(m,h.state,h)},[t,i,l,r,a])}N.createContext(null);function xu(a,{relative:t}={}){let{matches:i}=N.useContext(ks),{pathname:n}=Ts(),r=JSON.stringify(ew(i));return N.useMemo(()=>Gg(a,JSON.parse(r),n,t==="path"),[a,r,n,t])}function uT(a,t){return cw(a,t)}function cw(a,t,i){Ve(mu(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:n}=N.useContext(pa),{matches:r}=N.useContext(ks),l=r[r.length-1],c=l?l.params:{},d=l?l.pathname:"/",f=l?l.pathnameBase:"/",h=l&&l.route;{let S=h&&h.path||"";dw(d,!h||S.endsWith("*")||S.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${S}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${S}"> to <Route path="${S==="/"?"*":`${S}/*`}">.`)}let m=Ts(),x;if(t){let S=typeof t=="string"?_o(t):t;Ve(f==="/"||S.pathname?.startsWith(f),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${S.pathname}" was given in the \`location\` prop.`),x=S}else x=m;let b=x.pathname||"/",v=b;if(f!=="/"){let S=f.replace(/^\//,"").split("/");v="/"+b.replace(/^\//,"").split("/").slice(S.length).join("/")}let _=K2(a,{pathname:v});Ya(h||_!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),Ya(_==null||_[_.length-1].route.element!==void 0||_[_.length-1].route.Component!==void 0||_[_.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let w=gT(_&&_.map(S=>Object.assign({},S,{params:Object.assign({},c,S.params),pathname:Pa([f,n.encodeLocation?n.encodeLocation(S.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?f:Pa([f,n.encodeLocation?n.encodeLocation(S.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathnameBase])})),r,i);return t&&w?N.createElement(gu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...x},navigationType:"POP"}},w):w}function dT(){let a=yT(),t=Zk(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),i=a instanceof Error?a.stack:null,n="rgba(200,200,200, 0.5)",r={padding:"0.5rem",backgroundColor:n},l={padding:"2px 4px",backgroundColor:n},c=null;return console.error("Error handled by React Router default ErrorBoundary:",a),c=N.createElement(N.Fragment,null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:l},"ErrorBoundary")," or"," ",N.createElement("code",{style:l},"errorElement")," prop on your route.")),N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},t),i?N.createElement("pre",{style:r},i):null,c)}var fT=N.createElement(dT,null),uw=class extends N.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,t){return t.location!==a.location||t.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:t.error,location:t.location,revalidation:a.revalidation||t.revalidation}}componentDidCatch(a,t){this.props.onError?this.props.onError(a,t):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const i=rT(a.digest);i&&(a=i)}let t=a!==void 0?N.createElement(ks.Provider,{value:this.props.routeContext},N.createElement(qg.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?N.createElement(hT,{error:a},t):t}};uw.contextType=tT;var T0=new WeakMap;function hT({children:a,error:t}){let{basename:i}=N.useContext(pa);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let n=sT(t.digest);if(n){let r=T0.get(t);if(r)throw r;let l=nw(n.location,i);if(iw&&!T0.get(t))if(l.isExternal||n.reloadDocument)window.location.href=l.absoluteURL||l.to;else{const c=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:n.replace}));throw T0.set(t,c),c}return N.createElement("meta",{httpEquiv:"refresh",content:`0;url=${l.absoluteURL||l.to}`})}}return a}function pT({routeContext:a,match:t,children:i}){let n=N.useContext(So);return n&&n.static&&n.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=t.route.id),N.createElement(ks.Provider,{value:a},i)}function gT(a,t=[],i){let n=i?.state;if(a==null){if(!n)return null;if(n.errors)a=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)a=n.matches;else return null}let r=a,l=n?.errors;if(l!=null){let m=r.findIndex(x=>x.route.id&&l?.[x.route.id]!==void 0);Ve(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),r=r.slice(0,Math.min(r.length,m+1))}let c=!1,d=-1;if(i&&n){c=n.renderFallback;for(let m=0;m<r.length;m++){let x=r[m];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(d=m),x.route.id){let{loaderData:b,errors:v}=n,_=x.route.loader&&!b.hasOwnProperty(x.route.id)&&(!v||v[x.route.id]===void 0);if(x.route.lazy||_){i.isStatic&&(c=!0),d>=0?r=r.slice(0,d+1):r=[r[0]];break}}}}let f=i?.onError,h=n&&f?(m,x)=>{f(m,{location:n.location,params:n.matches?.[0]?.params??{},unstable_pattern:Kk(n.matches),errorInfo:x})}:void 0;return r.reduceRight((m,x,b)=>{let v,_=!1,w=null,S=null;n&&(v=l&&x.route.id?l[x.route.id]:void 0,w=x.route.errorElement||fT,c&&(d<0&&b===0?(dw("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,S=null):d===b&&(_=!0,S=x.route.hydrateFallbackElement||null)));let E=t.concat(r.slice(0,b+1)),M=()=>{let A;return v?A=w:_?A=S:x.route.Component?A=N.createElement(x.route.Component,null):x.route.element?A=x.route.element:A=m,N.createElement(pT,{match:x,routeContext:{outlet:m,matches:E,isDataRoute:n!=null},children:A})};return n&&(x.route.ErrorBoundary||x.route.errorElement||b===0)?N.createElement(uw,{location:n.location,revalidation:n.revalidation,component:w,error:v,children:M(),routeContext:{outlet:null,matches:E,isDataRoute:!0},onError:h}):M()},null)}function Vg(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function mT(a){let t=N.useContext(So);return Ve(t,Vg(a)),t}function xT(a){let t=N.useContext(Kf);return Ve(t,Vg(a)),t}function bT(a){let t=N.useContext(ks);return Ve(t,Vg(a)),t}function Ig(a){let t=bT(a),i=t.matches[t.matches.length-1];return Ve(i.route.id,`${a} can only be used on routes that contain a unique "id"`),i.route.id}function vT(){return Ig("useRouteId")}function yT(){let a=N.useContext(qg),t=xT("useRouteError"),i=Ig("useRouteError");return a!==void 0?a:t.errors?.[i]}function wT(){let{router:a}=mT("useNavigate"),t=Ig("useNavigate"),i=N.useRef(!1);return ow(()=>{i.current=!0}),N.useCallback(async(r,l={})=>{Ya(i.current,lw),i.current&&(typeof r=="number"?await a.navigate(r):await a.navigate(r,{fromRouteId:t,...l}))},[a,t])}var By={};function dw(a,t,i){!t&&!By[a]&&(By[a]=!0,Ya(!1,i))}N.memo(_T);function _T({routes:a,future:t,state:i,isStatic:n,onError:r}){return cw(a,void 0,{state:i,isStatic:n,onError:r})}function Tc(a){Ve(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ST({basename:a="/",children:t=null,location:i,navigationType:n="POP",navigator:r,static:l=!1,unstable_useTransitions:c}){Ve(!mu(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=a.replace(/^\/*/,"/"),f=N.useMemo(()=>({basename:d,navigator:r,static:l,unstable_useTransitions:c,future:{}}),[d,r,l,c]);typeof i=="string"&&(i=_o(i));let{pathname:h="/",search:m="",hash:x="",state:b=null,key:v="default",unstable_mask:_}=i,w=N.useMemo(()=>{let S=ys(h,d);return S==null?null:{location:{pathname:S,search:m,hash:x,state:b,key:v,unstable_mask:_},navigationType:n}},[d,h,m,x,b,v,n,_]);return Ya(w!=null,`<Router basename="${d}"> is not able to match the URL "${h}${m}${x}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:N.createElement(pa.Provider,{value:f},N.createElement(gu.Provider,{children:t,value:w}))}function kT({children:a,location:t}){return uT(rg(a),t)}function rg(a,t=[]){let i=[];return N.Children.forEach(a,(n,r)=>{if(!N.isValidElement(n))return;let l=[...t,r];if(n.type===N.Fragment){i.push.apply(i,rg(n.props.children,l));return}Ve(n.type===Tc,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ve(!n.props.index||!n.props.children,"An index route cannot have child routes.");let c={id:n.props.id||l.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,middleware:n.props.middleware,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(c.children=rg(n.props.children,l)),i.push(c)}),i}var pf="get",gf="application/x-www-form-urlencoded";function Jf(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function TT(a){return Jf(a)&&a.tagName.toLowerCase()==="button"}function ET(a){return Jf(a)&&a.tagName.toLowerCase()==="form"}function MT(a){return Jf(a)&&a.tagName.toLowerCase()==="input"}function CT(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function AT(a,t){return a.button===0&&(!t||t==="_self")&&!CT(a)}var Ld=null;function zT(){if(Ld===null)try{new FormData(document.createElement("form"),0),Ld=!1}catch{Ld=!0}return Ld}var OT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function E0(a){return a!=null&&!OT.has(a)?(Ya(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${gf}"`),null):a}function RT(a,t){let i,n,r,l,c;if(ET(a)){let d=a.getAttribute("action");n=d?ys(d,t):null,i=a.getAttribute("method")||pf,r=E0(a.getAttribute("enctype"))||gf,l=new FormData(a)}else if(TT(a)||MT(a)&&(a.type==="submit"||a.type==="image")){let d=a.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=a.getAttribute("formaction")||d.getAttribute("action");if(n=f?ys(f,t):null,i=a.getAttribute("formmethod")||d.getAttribute("method")||pf,r=E0(a.getAttribute("formenctype"))||E0(d.getAttribute("enctype"))||gf,l=new FormData(d,a),!zT()){let{name:h,type:m,value:x}=a;if(m==="image"){let b=h?`${h}.`:"";l.append(`${b}x`,"0"),l.append(`${b}y`,"0")}else h&&l.append(h,x)}}else{if(Jf(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=pf,n=null,r=gf,c=a}return l&&r==="text/plain"&&(c=l,l=void 0),{action:n,method:i.toLowerCase(),encType:r,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Xg(a,t){if(a===!1||a===null||typeof a>"u")throw new Error(t)}function jT(a,t,i,n){let r=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return i?r.pathname.endsWith("/")?r.pathname=`${r.pathname}_.${n}`:r.pathname=`${r.pathname}.${n}`:r.pathname==="/"?r.pathname=`_root.${n}`:t&&ys(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function DT(a,t){if(a.id in t)return t[a.id];try{let i=await import(a.module);return t[a.id]=i,i}catch(i){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function NT(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function LT(a,t,i){let n=await Promise.all(a.map(async r=>{let l=t.routes[r.route.id];if(l){let c=await DT(l,i);return c.links?c.links():[]}return[]}));return PT(n.flat(1).filter(NT).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function Hy(a,t,i,n,r,l){let c=(f,h)=>i[h]?f.route.id!==i[h].route.id:!0,d=(f,h)=>i[h].pathname!==f.pathname||i[h].route.path?.endsWith("*")&&i[h].params["*"]!==f.params["*"];return l==="assets"?t.filter((f,h)=>c(f,h)||d(f,h)):l==="data"?t.filter((f,h)=>{let m=n.routes[f.route.id];if(!m||!m.hasLoader)return!1;if(c(f,h)||d(f,h))return!0;if(f.route.shouldRevalidate){let x=f.route.shouldRevalidate({currentUrl:new URL(r.pathname+r.search+r.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function BT(a,t,{includeHydrateFallback:i}={}){return HT(a.map(n=>{let r=t.routes[n.route.id];if(!r)return[];let l=[r.module];return r.clientActionModule&&(l=l.concat(r.clientActionModule)),r.clientLoaderModule&&(l=l.concat(r.clientLoaderModule)),i&&r.hydrateFallbackModule&&(l=l.concat(r.hydrateFallbackModule)),r.imports&&(l=l.concat(r.imports)),l}).flat(1))}function HT(a){return[...new Set(a)]}function FT(a){let t={},i=Object.keys(a).sort();for(let n of i)t[n]=a[n];return t}function PT(a,t){let i=new Set;return new Set(t),a.reduce((n,r)=>{let l=JSON.stringify(FT(r));return i.has(l)||(i.add(l),n.push({key:l,link:r})),n},[])}function fw(){let a=N.useContext(So);return Xg(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function UT(){let a=N.useContext(Kf);return Xg(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var $g=N.createContext(void 0);$g.displayName="FrameworkContext";function hw(){let a=N.useContext($g);return Xg(a,"You must render this element inside a <HydratedRouter> element"),a}function YT(a,t){let i=N.useContext($g),[n,r]=N.useState(!1),[l,c]=N.useState(!1),{onFocus:d,onBlur:f,onMouseEnter:h,onMouseLeave:m,onTouchStart:x}=t,b=N.useRef(null);N.useEffect(()=>{if(a==="render"&&c(!0),a==="viewport"){let w=E=>{E.forEach(M=>{c(M.isIntersecting)})},S=new IntersectionObserver(w,{threshold:.5});return b.current&&S.observe(b.current),()=>{S.disconnect()}}},[a]),N.useEffect(()=>{if(n){let w=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(w)}}},[n]);let v=()=>{r(!0)},_=()=>{r(!1),c(!1)};return i?a!=="intent"?[l,b,{}]:[l,b,{onFocus:gc(d,v),onBlur:gc(f,_),onMouseEnter:gc(h,v),onMouseLeave:gc(m,_),onTouchStart:gc(x,v)}]:[!1,b,{}]}function gc(a,t){return i=>{a&&a(i),i.defaultPrevented||t(i)}}function GT({page:a,...t}){let{router:i}=fw(),n=N.useMemo(()=>K2(i.routes,a,i.basename),[i.routes,a,i.basename]);return n?N.createElement(VT,{page:a,matches:n,...t}):null}function qT(a){let{manifest:t,routeModules:i}=hw(),[n,r]=N.useState([]);return N.useEffect(()=>{let l=!1;return LT(a,t,i).then(c=>{l||r(c)}),()=>{l=!0}},[a,t,i]),n}function VT({page:a,matches:t,...i}){let n=Ts(),{future:r,manifest:l,routeModules:c}=hw(),{basename:d}=fw(),{loaderData:f,matches:h}=UT(),m=N.useMemo(()=>Hy(a,t,h,l,n,"data"),[a,t,h,l,n]),x=N.useMemo(()=>Hy(a,t,h,l,n,"assets"),[a,t,h,l,n]),b=N.useMemo(()=>{if(a===n.pathname+n.search+n.hash)return[];let w=new Set,S=!1;if(t.forEach(M=>{let A=l.routes[M.route.id];!A||!A.hasLoader||(!m.some(O=>O.route.id===M.route.id)&&M.route.id in f&&c[M.route.id]?.shouldRevalidate||A.hasClientLoader?S=!0:w.add(M.route.id))}),w.size===0)return[];let E=jT(a,d,r.unstable_trailingSlashAwareDataRequests,"data");return S&&w.size>0&&E.searchParams.set("_routes",t.filter(M=>w.has(M.route.id)).map(M=>M.route.id).join(",")),[E.pathname+E.search]},[d,r.unstable_trailingSlashAwareDataRequests,f,n,l,m,t,a,c]),v=N.useMemo(()=>BT(x,l),[x,l]),_=qT(x);return N.createElement(N.Fragment,null,b.map(w=>N.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...i})),v.map(w=>N.createElement("link",{key:w,rel:"modulepreload",href:w,...i})),_.map(({key:w,link:S})=>N.createElement("link",{key:w,nonce:i.nonce,...S,crossOrigin:S.crossOrigin??i.crossOrigin})))}function IT(...a){return t=>{a.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var XT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{XT&&(window.__reactRouterVersion="7.13.1")}catch{}function $T({basename:a,children:t,unstable_useTransitions:i,window:n}){let r=N.useRef();r.current==null&&(r.current=Mk({window:n,v5Compat:!0}));let l=r.current,[c,d]=N.useState({action:l.action,location:l.location}),f=N.useCallback(h=>{i===!1?d(h):N.startTransition(()=>d(h))},[i]);return N.useLayoutEffect(()=>l.listen(f),[l,f]),N.createElement(ST,{basename:a,children:t,location:c.location,navigationType:c.action,navigator:l,unstable_useTransitions:i})}var pw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,th=N.forwardRef(function({onClick:t,discover:i="render",prefetch:n="none",relative:r,reloadDocument:l,replace:c,unstable_mask:d,state:f,target:h,to:m,preventScrollReset:x,viewTransition:b,unstable_defaultShouldRevalidate:v,..._},w){let{basename:S,navigator:E,unstable_useTransitions:M}=N.useContext(pa),A=typeof m=="string"&&pw.test(m),O=nw(m,S);m=O.to;let z=lT(m,{relative:r}),H=Ts(),j=null;if(d){let lt=Gg(d,[],H.unstable_mask?H.unstable_mask.pathname:"/",!0);S!=="/"&&(lt.pathname=lt.pathname==="/"?S:Pa([S,lt.pathname])),j=E.createHref(lt)}let[F,U,W]=YT(n,_),et=KT(m,{replace:c,unstable_mask:d,state:f,target:h,preventScrollReset:x,relative:r,viewTransition:b,unstable_defaultShouldRevalidate:v,unstable_useTransitions:M});function Y(lt){t&&t(lt),lt.defaultPrevented||et(lt)}let at=!(O.isExternal||l),ct=N.createElement("a",{..._,...W,href:(at?j:void 0)||O.absoluteURL||z,onClick:at?Y:t,ref:IT(w,U),target:h,"data-discover":!A&&i==="render"?"true":void 0});return F&&!A?N.createElement(N.Fragment,null,ct,N.createElement(GT,{page:z})):ct});th.displayName="Link";var WT=N.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:n="",end:r=!1,style:l,to:c,viewTransition:d,children:f,...h},m){let x=xu(c,{relative:h.relative}),b=Ts(),v=N.useContext(Kf),{navigator:_,basename:w}=N.useContext(pa),S=v!=null&&nE(x)&&d===!0,E=_.encodeLocation?_.encodeLocation(x).pathname:x.pathname,M=b.pathname,A=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(M=M.toLowerCase(),A=A?A.toLowerCase():null,E=E.toLowerCase()),A&&w&&(A=ys(A,w)||A);const O=E!=="/"&&E.endsWith("/")?E.length-1:E.length;let z=M===E||!r&&M.startsWith(E)&&M.charAt(O)==="/",H=A!=null&&(A===E||!r&&A.startsWith(E)&&A.charAt(E.length)==="/"),j={isActive:z,isPending:H,isTransitioning:S},F=z?t:void 0,U;typeof n=="function"?U=n(j):U=[n,z?"active":null,H?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let W=typeof l=="function"?l(j):l;return N.createElement(th,{...h,"aria-current":F,className:U,ref:m,style:W,to:c,viewTransition:d},typeof f=="function"?f(j):f)});WT.displayName="NavLink";var QT=N.forwardRef(({discover:a="render",fetcherKey:t,navigate:i,reloadDocument:n,replace:r,state:l,method:c=pf,action:d,onSubmit:f,relative:h,preventScrollReset:m,viewTransition:x,unstable_defaultShouldRevalidate:b,...v},_)=>{let{unstable_useTransitions:w}=N.useContext(pa),S=eE(),E=iE(d,{relative:h}),M=c.toLowerCase()==="get"?"get":"post",A=typeof d=="string"&&pw.test(d),O=z=>{if(f&&f(z),z.defaultPrevented)return;z.preventDefault();let H=z.nativeEvent.submitter,j=H?.getAttribute("formmethod")||c,F=()=>S(H||z.currentTarget,{fetcherKey:t,method:j,navigate:i,replace:r,state:l,relative:h,preventScrollReset:m,viewTransition:x,unstable_defaultShouldRevalidate:b});w&&i!==!1?N.startTransition(()=>F()):F()};return N.createElement("form",{ref:_,method:M,action:E,onSubmit:n?f:O,...v,"data-discover":!A&&a==="render"?"true":void 0})});QT.displayName="Form";function ZT(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function gw(a){let t=N.useContext(So);return Ve(t,ZT(a)),t}function KT(a,{target:t,replace:i,unstable_mask:n,state:r,preventScrollReset:l,relative:c,viewTransition:d,unstable_defaultShouldRevalidate:f,unstable_useTransitions:h}={}){let m=oT(),x=Ts(),b=xu(a,{relative:c});return N.useCallback(v=>{if(AT(v,t)){v.preventDefault();let _=i!==void 0?i:tu(x)===tu(b),w=()=>m(a,{replace:_,unstable_mask:n,state:r,preventScrollReset:l,relative:c,viewTransition:d,unstable_defaultShouldRevalidate:f});h?N.startTransition(()=>w()):w()}},[x,m,b,i,n,r,t,a,l,c,d,f,h])}var JT=0,tE=()=>`__${String(++JT)}__`;function eE(){let{router:a}=gw("useSubmit"),{basename:t}=N.useContext(pa),i=vT(),n=a.fetch,r=a.navigate;return N.useCallback(async(l,c={})=>{let{action:d,method:f,encType:h,formData:m,body:x}=RT(l,t);if(c.navigate===!1){let b=c.fetcherKey||tE();await n(b,i,c.action||d,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:m,body:x,formMethod:c.method||f,formEncType:c.encType||h,flushSync:c.flushSync})}else await r(c.action||d,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:m,body:x,formMethod:c.method||f,formEncType:c.encType||h,replace:c.replace,state:c.state,fromRouteId:i,flushSync:c.flushSync,viewTransition:c.viewTransition})},[n,r,t,i])}function iE(a,{relative:t}={}){let{basename:i}=N.useContext(pa),n=N.useContext(ks);Ve(n,"useFormAction must be used inside a RouteContext");let[r]=n.matches.slice(-1),l={...xu(a||".",{relative:t})},c=Ts();if(a==null){l.search=c.search;let d=new URLSearchParams(l.search),f=d.getAll("index");if(f.some(m=>m==="")){d.delete("index"),f.filter(x=>x).forEach(x=>d.append("index",x));let m=d.toString();l.search=m?`?${m}`:""}}return(!a||a===".")&&r.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(l.pathname=l.pathname==="/"?i:Pa([i,l.pathname])),tu(l)}function nE(a,{relative:t}={}){let i=N.useContext(sw);Ve(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=gw("useViewTransitionState"),r=xu(a,{relative:t});if(!i.isTransitioning)return!1;let l=ys(i.currentLocation.pathname,n)||i.currentLocation.pathname,c=ys(i.nextLocation.pathname,n)||i.nextLocation.pathname;return Af(r.pathname,c)!=null||Af(r.pathname,l)!=null}function ps(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function mw(a,t){a.prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t}var qn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ho={duration:.5,overwrite:!1,delay:0},Wg,Li,De,ua=1e8,Se=1/ua,lg=Math.PI*2,aE=lg/4,sE=0,xw=Math.sqrt,rE=Math.cos,lE=Math.sin,Ti=function(t){return typeof t=="string"},Ke=function(t){return typeof t=="function"},ws=function(t){return typeof t=="number"},Qg=function(t){return typeof t>"u"},Ga=function(t){return typeof t=="object"},vn=function(t){return t!==!1},Zg=function(){return typeof window<"u"},Bd=function(t){return Ke(t)||Ti(t)},bw=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Gi=Array.isArray,oE=/random\([^)]+\)/g,cE=/,\s*/g,Fy=/(?:-?\.?\d|\.)+/gi,vw=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,to=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,M0=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,yw=/[+-]=-?[.\d]+/,uE=/[^,'"\[\]\s]+/gi,dE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ge,ja,og,Kg,Vn={},zf={},ww,_w=function(t){return(zf=po(t,Vn))&&kn},Jg=function(t,i){return console.warn("Invalid property",t,"set to",i,"Missing plugin? gsap.registerPlugin()")},eu=function(t,i){return!i&&console.warn(t)},Sw=function(t,i){return t&&(Vn[t]=i)&&zf&&(zf[t]=i)||Vn},iu=function(){return 0},fE={suppressEvents:!0,isStart:!0,kill:!1},mf={suppressEvents:!0,kill:!1},hE={suppressEvents:!0},tm={},cr=[],cg={},kw,Hn={},C0={},Py=30,xf=[],em="",im=function(t){var i=t[0],n,r;if(Ga(i)||Ke(i)||(t=[t]),!(n=(i._gsap||{}).harness)){for(r=xf.length;r--&&!xf[r].targetTest(i););n=xf[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new $w(t[r],n)))||t.splice(r,1);return t},Jr=function(t){return t._gsap||im(da(t))[0]._gsap},Tw=function(t,i,n){return(n=t[i])&&Ke(n)?t[i]():Qg(n)&&t.getAttribute&&t.getAttribute(i)||n},yn=function(t,i){return(t=t.split(",")).forEach(i)||t},ai=function(t){return Math.round(t*1e5)/1e5||0},Ye=function(t){return Math.round(t*1e7)/1e7||0},ao=function(t,i){var n=i.charAt(0),r=parseFloat(i.substr(2));return t=parseFloat(t),n==="+"?t+r:n==="-"?t-r:n==="*"?t*r:t/r},pE=function(t,i){for(var n=i.length,r=0;t.indexOf(i[r])<0&&++r<n;);return r<n},Of=function(){var t=cr.length,i=cr.slice(0),n,r;for(cg={},cr.length=0,n=0;n<t;n++)r=i[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},nm=function(t){return!!(t._initted||t._startAt||t.add)},Ew=function(t,i,n,r){cr.length&&!Li&&Of(),t.render(i,n,!!(Li&&i<0&&nm(t))),cr.length&&!Li&&Of()},Mw=function(t){var i=parseFloat(t);return(i||i===0)&&(t+"").match(uE).length<2?i:Ti(t)?t.trim():t},Cw=function(t){return t},In=function(t,i){for(var n in i)n in t||(t[n]=i[n]);return t},gE=function(t){return function(i,n){for(var r in n)r in i||r==="duration"&&t||r==="ease"||(i[r]=n[r])}},po=function(t,i){for(var n in i)t[n]=i[n];return t},Uy=function a(t,i){for(var n in i)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Ga(i[n])?a(t[n]||(t[n]={}),i[n]):i[n]);return t},Rf=function(t,i){var n={},r;for(r in t)r in i||(n[r]=t[r]);return n},Bc=function(t){var i=t.parent||Ge,n=t.keyframes?gE(Gi(t.keyframes)):In;if(vn(t.inherit))for(;i;)n(t,i.vars.defaults),i=i.parent||i._dp;return t},mE=function(t,i){for(var n=t.length,r=n===i.length;r&&n--&&t[n]===i[n];);return n<0},Aw=function(t,i,n,r,l){var c=t[r],d;if(l)for(d=i[l];c&&c[l]>d;)c=c._prev;return c?(i._next=c._next,c._next=i):(i._next=t[n],t[n]=i),i._next?i._next._prev=i:t[r]=i,i._prev=c,i.parent=i._dp=t,i},eh=function(t,i,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var l=i._prev,c=i._next;l?l._next=c:t[n]===i&&(t[n]=c),c?c._prev=l:t[r]===i&&(t[r]=l),i._next=i._prev=i.parent=null},gr=function(t,i){t.parent&&(!i||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},tl=function(t,i){if(t&&(!i||i._end>t._dur||i._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},xE=function(t){for(var i=t.parent;i&&i.parent;)i._dirty=1,i.totalDuration(),i=i.parent;return t},ug=function(t,i,n,r){return t._startAt&&(Li?t._startAt.revert(mf):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(i,!0,r))},bE=function a(t){return!t||t._ts&&a(t.parent)},Yy=function(t){return t._repeat?go(t._tTime,t=t.duration()+t._rDelay)*t:0},go=function(t,i){var n=Math.floor(t=Ye(t/i));return t&&n===t?n-1:n},jf=function(t,i){return(t-i._start)*i._ts+(i._ts>=0?0:i._dirty?i.totalDuration():i._tDur)},ih=function(t){return t._end=Ye(t._start+(t._tDur/Math.abs(t._ts||t._rts||Se)||0))},nh=function(t,i){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ye(n._time-(t._ts>0?i/t._ts:((t._dirty?t.totalDuration():t._tDur)-i)/-t._ts)),ih(t),n._dirty||tl(n,t)),t},zw=function(t,i){var n;if((i._time||!i._dur&&i._initted||i._start<t._time&&(i._dur||!i.add))&&(n=jf(t.rawTime(),i),(!i._dur||bu(0,i.totalDuration(),n)-i._tTime>Se)&&i.render(n,!0)),tl(t,i)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Se}},La=function(t,i,n,r){return i.parent&&gr(i),i._start=Ye((ws(n)?n:n||t!==Ge?la(t,n,i):t._time)+i._delay),i._end=Ye(i._start+(i.totalDuration()/Math.abs(i.timeScale())||0)),Aw(t,i,"_first","_last",t._sort?"_start":0),dg(i)||(t._recent=i),r||zw(t,i),t._ts<0&&nh(t,t._tTime),t},Ow=function(t,i){return(Vn.ScrollTrigger||Jg("scrollTrigger",i))&&Vn.ScrollTrigger.create(i,t)},Rw=function(t,i,n,r,l){if(sm(t,i,l),!t._initted)return 1;if(!n&&t._pt&&!Li&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&kw!==Pn.frame)return cr.push(t),t._lazy=[l,r],1},vE=function a(t){var i=t.parent;return i&&i._ts&&i._initted&&!i._lock&&(i.rawTime()<0||a(i))},dg=function(t){var i=t.data;return i==="isFromStart"||i==="isStart"},yE=function(t,i,n,r){var l=t.ratio,c=i<0||!i&&(!t._start&&vE(t)&&!(!t._initted&&dg(t))||(t._ts<0||t._dp._ts<0)&&!dg(t))?0:1,d=t._rDelay,f=0,h,m,x;if(d&&t._repeat&&(f=bu(0,t._tDur,i),m=go(f,d),t._yoyo&&m&1&&(c=1-c),m!==go(t._tTime,d)&&(l=1-c,t.vars.repeatRefresh&&t._initted&&t.invalidate())),c!==l||Li||r||t._zTime===Se||!i&&t._zTime){if(!t._initted&&Rw(t,i,r,n,f))return;for(x=t._zTime,t._zTime=i||(n?Se:0),n||(n=i&&!x),t.ratio=c,t._from&&(c=1-c),t._time=0,t._tTime=f,h=t._pt;h;)h.r(c,h.d),h=h._next;i<0&&ug(t,i,n,!0),t._onUpdate&&!n&&Yn(t,"onUpdate"),f&&t._repeat&&!n&&t.parent&&Yn(t,"onRepeat"),(i>=t._tDur||i<0)&&t.ratio===c&&(c&&gr(t,1),!n&&!Li&&(Yn(t,c?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=i)},wE=function(t,i,n){var r;if(n>i)for(r=t._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>i)return r;r=r._next}else for(r=t._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<i)return r;r=r._prev}},mo=function(t,i,n,r){var l=t._repeat,c=Ye(i)||0,d=t._tTime/t._tDur;return d&&!r&&(t._time*=c/t._dur),t._dur=c,t._tDur=l?l<0?1e10:Ye(c*(l+1)+t._rDelay*l):c,d>0&&!r&&nh(t,t._tTime=t._tDur*d),t.parent&&ih(t),n||tl(t.parent,t),t},Gy=function(t){return t instanceof ji?tl(t):mo(t,t._dur)},_E={_start:0,endTime:iu,totalDuration:iu},la=function a(t,i,n){var r=t.labels,l=t._recent||_E,c=t.duration()>=ua?l.endTime(!1):t._dur,d,f,h;return Ti(i)&&(isNaN(i)||i in r)?(f=i.charAt(0),h=i.substr(-1)==="%",d=i.indexOf("="),f==="<"||f===">"?(d>=0&&(i=i.replace(/=/,"")),(f==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(i.substr(1))||0)*(h?(d<0?l:n).totalDuration()/100:1)):d<0?(i in r||(r[i]=c),r[i]):(f=parseFloat(i.charAt(d-1)+i.substr(d+1)),h&&n&&(f=f/100*(Gi(n)?n[0]:n).totalDuration()),d>1?a(t,i.substr(0,d-1),n)+f:c+f)):i==null?c:+i},Hc=function(t,i,n){var r=ws(i[1]),l=(r?2:1)+(t<2?0:1),c=i[l],d,f;if(r&&(c.duration=i[1]),c.parent=n,t){for(d=c,f=n;f&&!("immediateRender"in d);)d=f.vars.defaults||{},f=vn(f.vars.inherit)&&f.parent;c.immediateRender=vn(d.immediateRender),t<2?c.runBackwards=1:c.startAt=i[l-1]}return new si(i[0],c,i[l+1])},yr=function(t,i){return t||t===0?i(t):i},bu=function(t,i,n){return n<t?t:n>i?i:n},Ui=function(t,i){return!Ti(t)||!(i=dE.exec(t))?"":i[1]},SE=function(t,i,n){return yr(n,function(r){return bu(t,i,r)})},fg=[].slice,jw=function(t,i){return t&&Ga(t)&&"length"in t&&(!i&&!t.length||t.length-1 in t&&Ga(t[0]))&&!t.nodeType&&t!==ja},kE=function(t,i,n){return n===void 0&&(n=[]),t.forEach(function(r){var l;return Ti(r)&&!i||jw(r,1)?(l=n).push.apply(l,da(r)):n.push(r)})||n},da=function(t,i,n){return De&&!i&&De.selector?De.selector(t):Ti(t)&&!n&&(og||!xo())?fg.call((i||Kg).querySelectorAll(t),0):Gi(t)?kE(t,n):jw(t)?fg.call(t,0):t?[t]:[]},hg=function(t){return t=da(t)[0]||eu("Invalid scope")||{},function(i){var n=t.current||t.nativeElement||t;return da(i,n.querySelectorAll?n:n===t?eu("Invalid scope")||Kg.createElement("div"):t)}},Dw=function(t){return t.sort(function(){return .5-Math.random()})},Nw=function(t){if(Ke(t))return t;var i=Ga(t)?t:{each:t},n=el(i.ease),r=i.from||0,l=parseFloat(i.base)||0,c={},d=r>0&&r<1,f=isNaN(r)||d,h=i.axis,m=r,x=r;return Ti(r)?m=x={center:.5,edges:.5,end:1}[r]||0:!d&&f&&(m=r[0],x=r[1]),function(b,v,_){var w=(_||i).length,S=c[w],E,M,A,O,z,H,j,F,U;if(!S){if(U=i.grid==="auto"?0:(i.grid||[1,ua])[1],!U){for(j=-ua;j<(j=_[U++].getBoundingClientRect().left)&&U<w;);U<w&&U--}for(S=c[w]=[],E=f?Math.min(U,w)*m-.5:r%U,M=U===ua?0:f?w*x/U-.5:r/U|0,j=0,F=ua,H=0;H<w;H++)A=H%U-E,O=M-(H/U|0),S[H]=z=h?Math.abs(h==="y"?O:A):xw(A*A+O*O),z>j&&(j=z),z<F&&(F=z);r==="random"&&Dw(S),S.max=j-F,S.min=F,S.v=w=(parseFloat(i.amount)||parseFloat(i.each)*(U>w?w-1:h?h==="y"?w/U:U:Math.max(U,w/U))||0)*(r==="edges"?-1:1),S.b=w<0?l-w:l,S.u=Ui(i.amount||i.each)||0,n=n&&w<0?Vw(n):n}return w=(S[b]-S.min)/S.max||0,Ye(S.b+(n?n(w):w)*S.v)+S.u}},pg=function(t){var i=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var r=Ye(Math.round(parseFloat(n)/t)*t*i);return(r-r%1)/i+(ws(n)?0:Ui(n))}},Lw=function(t,i){var n=Gi(t),r,l;return!n&&Ga(t)&&(r=n=t.radius||ua,t.values?(t=da(t.values),(l=!ws(t[0]))&&(r*=r)):t=pg(t.increment)),yr(i,n?Ke(t)?function(c){return l=t(c),Math.abs(l-c)<=r?l:c}:function(c){for(var d=parseFloat(l?c.x:c),f=parseFloat(l?c.y:0),h=ua,m=0,x=t.length,b,v;x--;)l?(b=t[x].x-d,v=t[x].y-f,b=b*b+v*v):b=Math.abs(t[x]-d),b<h&&(h=b,m=x);return m=!r||h<=r?t[m]:c,l||m===c||ws(c)?m:m+Ui(c)}:pg(t))},Bw=function(t,i,n,r){return yr(Gi(t)?!i:n===!0?!!(n=0):!r,function(){return Gi(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(i-t+n*.99))/n)*n*r)/r})},TE=function(){for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];return function(r){return i.reduce(function(l,c){return c(l)},r)}},EE=function(t,i){return function(n){return t(parseFloat(n))+(i||Ui(n))}},ME=function(t,i,n){return Fw(t,i,0,1,n)},Hw=function(t,i,n){return yr(n,function(r){return t[~~i(r)]})},CE=function a(t,i,n){var r=i-t;return Gi(t)?Hw(t,a(0,t.length),i):yr(n,function(l){return(r+(l-t)%r)%r+t})},AE=function a(t,i,n){var r=i-t,l=r*2;return Gi(t)?Hw(t,a(0,t.length-1),i):yr(n,function(c){return c=(l+(c-t)%l)%l||0,t+(c>r?l-c:c)})},nu=function(t){return t.replace(oE,function(i){var n=i.indexOf("[")+1,r=i.substring(n||7,n?i.indexOf("]"):i.length-1).split(cE);return Bw(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},Fw=function(t,i,n,r,l){var c=i-t,d=r-n;return yr(l,function(f){return n+((f-t)/c*d||0)})},zE=function a(t,i,n,r){var l=isNaN(t+i)?0:function(v){return(1-v)*t+v*i};if(!l){var c=Ti(t),d={},f,h,m,x,b;if(n===!0&&(r=1)&&(n=null),c)t={p:t},i={p:i};else if(Gi(t)&&!Gi(i)){for(m=[],x=t.length,b=x-2,h=1;h<x;h++)m.push(a(t[h-1],t[h]));x--,l=function(_){_*=x;var w=Math.min(b,~~_);return m[w](_-w)},n=i}else r||(t=po(Gi(t)?[]:{},t));if(!m){for(f in i)am.call(d,t,f,"get",i[f]);l=function(_){return om(_,d)||(c?t.p:t)}}}return yr(n,l)},qy=function(t,i,n){var r=t.labels,l=ua,c,d,f;for(c in r)d=r[c]-i,d<0==!!n&&d&&l>(d=Math.abs(d))&&(f=c,l=d);return f},Yn=function(t,i,n){var r=t.vars,l=r[i],c=De,d=t._ctx,f,h,m;if(l)return f=r[i+"Params"],h=r.callbackScope||t,n&&cr.length&&Of(),d&&(De=d),m=f?l.apply(h,f):l.call(h),De=c,m},Ec=function(t){return gr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Li),t.progress()<1&&Yn(t,"onInterrupt"),t},eo,Pw=[],Uw=function(t){if(t)if(t=!t.name&&t.default||t,Zg()||t.headless){var i=t.name,n=Ke(t),r=i&&!n&&t.init?function(){this._props=[]}:t,l={init:iu,render:om,add:am,kill:IE,modifier:VE,rawVars:0},c={targetTest:0,get:0,getSetter:lm,aliases:{},register:0};if(xo(),t!==r){if(Hn[i])return;In(r,In(Rf(t,l),c)),po(r.prototype,po(l,Rf(t,c))),Hn[r.prop=i]=r,t.targetTest&&(xf.push(r),tm[i]=1),i=(i==="css"?"CSS":i.charAt(0).toUpperCase()+i.substr(1))+"Plugin"}Sw(i,r),t.register&&t.register(kn,r,wn)}else Pw.push(t)},_e=255,Mc={aqua:[0,_e,_e],lime:[0,_e,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,_e],navy:[0,0,128],white:[_e,_e,_e],olive:[128,128,0],yellow:[_e,_e,0],orange:[_e,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[_e,0,0],pink:[_e,192,203],cyan:[0,_e,_e],transparent:[_e,_e,_e,0]},A0=function(t,i,n){return t+=t<0?1:t>1?-1:0,(t*6<1?i+(n-i)*t*6:t<.5?n:t*3<2?i+(n-i)*(2/3-t)*6:i)*_e+.5|0},Yw=function(t,i,n){var r=t?ws(t)?[t>>16,t>>8&_e,t&_e]:0:Mc.black,l,c,d,f,h,m,x,b,v,_;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Mc[t])r=Mc[t];else if(t.charAt(0)==="#"){if(t.length<6&&(l=t.charAt(1),c=t.charAt(2),d=t.charAt(3),t="#"+l+l+c+c+d+d+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&_e,r&_e,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&_e,t&_e]}else if(t.substr(0,3)==="hsl"){if(r=_=t.match(Fy),!i)f=+r[0]%360/360,h=+r[1]/100,m=+r[2]/100,c=m<=.5?m*(h+1):m+h-m*h,l=m*2-c,r.length>3&&(r[3]*=1),r[0]=A0(f+1/3,l,c),r[1]=A0(f,l,c),r[2]=A0(f-1/3,l,c);else if(~t.indexOf("="))return r=t.match(vw),n&&r.length<4&&(r[3]=1),r}else r=t.match(Fy)||Mc.transparent;r=r.map(Number)}return i&&!_&&(l=r[0]/_e,c=r[1]/_e,d=r[2]/_e,x=Math.max(l,c,d),b=Math.min(l,c,d),m=(x+b)/2,x===b?f=h=0:(v=x-b,h=m>.5?v/(2-x-b):v/(x+b),f=x===l?(c-d)/v+(c<d?6:0):x===c?(d-l)/v+2:(l-c)/v+4,f*=60),r[0]=~~(f+.5),r[1]=~~(h*100+.5),r[2]=~~(m*100+.5)),n&&r.length<4&&(r[3]=1),r},Gw=function(t){var i=[],n=[],r=-1;return t.split(ur).forEach(function(l){var c=l.match(to)||[];i.push.apply(i,c),n.push(r+=c.length+1)}),i.c=n,i},Vy=function(t,i,n){var r="",l=(t+r).match(ur),c=i?"hsla(":"rgba(",d=0,f,h,m,x;if(!l)return t;if(l=l.map(function(b){return(b=Yw(b,i,1))&&c+(i?b[0]+","+b[1]+"%,"+b[2]+"%,"+b[3]:b.join(","))+")"}),n&&(m=Gw(t),f=n.c,f.join(r)!==m.c.join(r)))for(h=t.replace(ur,"1").split(to),x=h.length-1;d<x;d++)r+=h[d]+(~f.indexOf(d)?l.shift()||c+"0,0,0,0)":(m.length?m:l.length?l:n).shift());if(!h)for(h=t.split(ur),x=h.length-1;d<x;d++)r+=h[d]+l[d];return r+h[x]},ur=(function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Mc)a+="|"+t+"\\b";return new RegExp(a+")","gi")})(),OE=/hsl[a]?\(/,qw=function(t){var i=t.join(" "),n;if(ur.lastIndex=0,ur.test(i))return n=OE.test(i),t[1]=Vy(t[1],n),t[0]=Vy(t[0],n,Gw(t[1])),!0},au,Pn=(function(){var a=Date.now,t=500,i=33,n=a(),r=n,l=1e3/240,c=l,d=[],f,h,m,x,b,v,_=function w(S){var E=a()-r,M=S===!0,A,O,z,H;if((E>t||E<0)&&(n+=E-i),r+=E,z=r-n,A=z-c,(A>0||M)&&(H=++x.frame,b=z-x.time*1e3,x.time=z=z/1e3,c+=A+(A>=l?4:l-A),O=1),M||(f=h(w)),O)for(v=0;v<d.length;v++)d[v](z,b,H,S)};return x={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(S){return b/(1e3/(S||60))},wake:function(){ww&&(!og&&Zg()&&(ja=og=window,Kg=ja.document||{},Vn.gsap=kn,(ja.gsapVersions||(ja.gsapVersions=[])).push(kn.version),_w(zf||ja.GreenSockGlobals||!ja.gsap&&ja||{}),Pw.forEach(Uw)),m=typeof requestAnimationFrame<"u"&&requestAnimationFrame,f&&x.sleep(),h=m||function(S){return setTimeout(S,c-x.time*1e3+1|0)},au=1,_(2))},sleep:function(){(m?cancelAnimationFrame:clearTimeout)(f),au=0,h=iu},lagSmoothing:function(S,E){t=S||1/0,i=Math.min(E||33,t)},fps:function(S){l=1e3/(S||240),c=x.time*1e3+l},add:function(S,E,M){var A=E?function(O,z,H,j){S(O,z,H,j),x.remove(A)}:S;return x.remove(S),d[M?"unshift":"push"](A),xo(),A},remove:function(S,E){~(E=d.indexOf(S))&&d.splice(E,1)&&v>=E&&v--},_listeners:d},x})(),xo=function(){return!au&&Pn.wake()},Jt={},RE=/^[\d.\-M][\d.\-,\s]/,jE=/["']/g,DE=function(t){for(var i={},n=t.substr(1,t.length-3).split(":"),r=n[0],l=1,c=n.length,d,f,h;l<c;l++)f=n[l],d=l!==c-1?f.lastIndexOf(","):f.length,h=f.substr(0,d),i[r]=isNaN(h)?h.replace(jE,"").trim():+h,r=f.substr(d+1).trim();return i},NE=function(t){var i=t.indexOf("(")+1,n=t.indexOf(")"),r=t.indexOf("(",i);return t.substring(i,~r&&r<n?t.indexOf(")",n+1):n)},LE=function(t){var i=(t+"").split("("),n=Jt[i[0]];return n&&i.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[DE(i[1])]:NE(t).split(",").map(Mw)):Jt._CE&&RE.test(t)?Jt._CE("",t):n},Vw=function(t){return function(i){return 1-t(1-i)}},Iw=function a(t,i){for(var n=t._first,r;n;)n instanceof ji?a(n,i):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==i&&(n.timeline?a(n.timeline,i):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=i)),n=n._next},el=function(t,i){return t&&(Ke(t)?t:Jt[t]||LE(t))||i},dl=function(t,i,n,r){n===void 0&&(n=function(f){return 1-i(1-f)}),r===void 0&&(r=function(f){return f<.5?i(f*2)/2:1-i((1-f)*2)/2});var l={easeIn:i,easeOut:n,easeInOut:r},c;return yn(t,function(d){Jt[d]=Vn[d]=l,Jt[c=d.toLowerCase()]=n;for(var f in l)Jt[c+(f==="easeIn"?".in":f==="easeOut"?".out":".inOut")]=Jt[d+"."+f]=l[f]}),l},Xw=function(t){return function(i){return i<.5?(1-t(1-i*2))/2:.5+t((i-.5)*2)/2}},z0=function a(t,i,n){var r=i>=1?i:1,l=(n||(t?.3:.45))/(i<1?i:1),c=l/lg*(Math.asin(1/r)||0),d=function(m){return m===1?1:r*Math.pow(2,-10*m)*lE((m-c)*l)+1},f=t==="out"?d:t==="in"?function(h){return 1-d(1-h)}:Xw(d);return l=lg/l,f.config=function(h,m){return a(t,h,m)},f},O0=function a(t,i){i===void 0&&(i=1.70158);var n=function(c){return c?--c*c*((i+1)*c+i)+1:0},r=t==="out"?n:t==="in"?function(l){return 1-n(1-l)}:Xw(n);return r.config=function(l){return a(t,l)},r};yn("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,t){var i=t<5?t+1:t;dl(a+",Power"+(i-1),t?function(n){return Math.pow(n,i)}:function(n){return n},function(n){return 1-Math.pow(1-n,i)},function(n){return n<.5?Math.pow(n*2,i)/2:1-Math.pow((1-n)*2,i)/2})});Jt.Linear.easeNone=Jt.none=Jt.Linear.easeIn;dl("Elastic",z0("in"),z0("out"),z0());(function(a,t){var i=1/t,n=2*i,r=2.5*i,l=function(d){return d<i?a*d*d:d<n?a*Math.pow(d-1.5/t,2)+.75:d<r?a*(d-=2.25/t)*d+.9375:a*Math.pow(d-2.625/t,2)+.984375};dl("Bounce",function(c){return 1-l(1-c)},l)})(7.5625,2.75);dl("Expo",function(a){return Math.pow(2,10*(a-1))*a+a*a*a*a*a*a*(1-a)});dl("Circ",function(a){return-(xw(1-a*a)-1)});dl("Sine",function(a){return a===1?1:-rE(a*aE)+1});dl("Back",O0("in"),O0("out"),O0());Jt.SteppedEase=Jt.steps=Vn.SteppedEase={config:function(t,i){t===void 0&&(t=1);var n=1/t,r=t+(i?0:1),l=i?1:0,c=1-Se;return function(d){return((r*bu(0,c,d)|0)+l)*n}}};ho.ease=Jt["quad.out"];yn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return em+=a+","+a+"Params,"});var $w=function(t,i){this.id=sE++,t._gsap=this,this.target=t,this.harness=i,this.get=i?i.get:Tw,this.set=i?i.getSetter:lm},su=(function(){function a(i){this.vars=i,this._delay=+i.delay||0,(this._repeat=i.repeat===1/0?-2:i.repeat||0)&&(this._rDelay=i.repeatDelay||0,this._yoyo=!!i.yoyo||!!i.yoyoEase),this._ts=1,mo(this,+i.duration,1,1),this.data=i.data,De&&(this._ctx=De,De.data.push(this)),au||Pn.wake()}var t=a.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,mo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,r){if(xo(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(nh(this,n),!l._dp||l.parent||zw(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&La(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Se||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ew(this,n,r)),this},t.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Yy(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},t.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Yy(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,r){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*l,r):this._repeat?go(this._tTime,l)+1:1},t.timeScale=function(n,r){if(!arguments.length)return this._rts===-Se?0:this._rts;if(this._rts===n)return this;var l=this.parent&&this._ts?jf(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Se?0:this._rts,this.totalTime(bu(-Math.abs(this._delay),this.totalDuration(),l),r!==!1),ih(this),xE(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(xo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Se&&(this._tTime-=Se)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Ye(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&La(r,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(vn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?jf(r.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=hE);var r=Li;return Li=n,nm(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Li=r,this},t.globalTime=function(n){for(var r=this,l=arguments.length?n:r.rawTime();r;)l=r._start+l/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):l},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Gy(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Gy(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,r){return this.totalTime(la(this,n),vn(r))},t.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,vn(r)),this._dur||(this._zTime=-Se),this},t.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},t.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Se:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Se,this},t.isActive=function(){var n=this.parent||this._dp,r=this._start,l;return!!(!n||this._ts&&this._initted&&n.isActive()&&(l=n.rawTime(!0))>=r&&l<this.endTime(!0)-Se)},t.eventCallback=function(n,r,l){var c=this.vars;return arguments.length>1?(r?(c[n]=r,l&&(c[n+"Params"]=l),n==="onUpdate"&&(this._onUpdate=r)):delete c[n],this):c[n]},t.then=function(n){var r=this,l=r._prom;return new Promise(function(c){var d=Ke(n)?n:Cw,f=function(){var m=r.then;r.then=null,l&&l(),Ke(d)&&(d=d(r))&&(d.then||d===r)&&(r.then=m),c(d),r.then=m};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?f():r._prom=f})},t.kill=function(){Ec(this)},a})();In(su.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Se,_prom:0,_ps:!1,_rts:1});var ji=(function(a){mw(t,a);function t(n,r){var l;return n===void 0&&(n={}),l=a.call(this,n)||this,l.labels={},l.smoothChildTiming=!!n.smoothChildTiming,l.autoRemoveChildren=!!n.autoRemoveChildren,l._sort=vn(n.sortChildren),Ge&&La(n.parent||Ge,ps(l),r),n.reversed&&l.reverse(),n.paused&&l.paused(!0),n.scrollTrigger&&Ow(ps(l),n.scrollTrigger),l}var i=t.prototype;return i.to=function(r,l,c){return Hc(0,arguments,this),this},i.from=function(r,l,c){return Hc(1,arguments,this),this},i.fromTo=function(r,l,c,d){return Hc(2,arguments,this),this},i.set=function(r,l,c){return l.duration=0,l.parent=this,Bc(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new si(r,l,la(this,c),1),this},i.call=function(r,l,c){return La(this,si.delayedCall(0,r,l),c)},i.staggerTo=function(r,l,c,d,f,h,m){return c.duration=l,c.stagger=c.stagger||d,c.onComplete=h,c.onCompleteParams=m,c.parent=this,new si(r,c,la(this,f)),this},i.staggerFrom=function(r,l,c,d,f,h,m){return c.runBackwards=1,Bc(c).immediateRender=vn(c.immediateRender),this.staggerTo(r,l,c,d,f,h,m)},i.staggerFromTo=function(r,l,c,d,f,h,m,x){return d.startAt=c,Bc(d).immediateRender=vn(d.immediateRender),this.staggerTo(r,l,d,f,h,m,x)},i.render=function(r,l,c){var d=this._time,f=this._dirty?this.totalDuration():this._tDur,h=this._dur,m=r<=0?0:Ye(r),x=this._zTime<0!=r<0&&(this._initted||!h),b,v,_,w,S,E,M,A,O,z,H,j;if(this!==Ge&&m>f&&r>=0&&(m=f),m!==this._tTime||c||x){if(d!==this._time&&h&&(m+=this._time-d,r+=this._time-d),b=m,O=this._start,A=this._ts,E=!A,x&&(h||(d=this._zTime),(r||!l)&&(this._zTime=r)),this._repeat){if(H=this._yoyo,S=h+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(S*100+r,l,c);if(b=Ye(m%S),m===f?(w=this._repeat,b=h):(z=Ye(m/S),w=~~z,w&&w===z&&(b=h,w--),b>h&&(b=h)),z=go(this._tTime,S),!d&&this._tTime&&z!==w&&this._tTime-z*S-this._dur<=0&&(z=w),H&&w&1&&(b=h-b,j=1),w!==z&&!this._lock){var F=H&&z&1,U=F===(H&&w&1);if(w<z&&(F=!F),d=F?0:m%h?h:m,this._lock=1,this.render(d||(j?0:Ye(w*S)),l,!h)._lock=0,this._tTime=m,!l&&this.parent&&Yn(this,"onRepeat"),this.vars.repeatRefresh&&!j&&(this.invalidate()._lock=1,z=w),d&&d!==this._time||E!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,f=this._tDur,U&&(this._lock=2,d=F?h:-1e-4,this.render(d,!0),this.vars.repeatRefresh&&!j&&this.invalidate()),this._lock=0,!this._ts&&!E)return this;Iw(this,j)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=wE(this,Ye(d),Ye(b)),M&&(m-=b-(b=M._start))),this._tTime=m,this._time=b,this._act=!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,d=0),!d&&m&&h&&!l&&!z&&(Yn(this,"onStart"),this._tTime!==m))return this;if(b>=d&&r>=0)for(v=this._first;v;){if(_=v._next,(v._act||b>=v._start)&&v._ts&&M!==v){if(v.parent!==this)return this.render(r,l,c);if(v.render(v._ts>0?(b-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(b-v._start)*v._ts,l,c),b!==this._time||!this._ts&&!E){M=0,_&&(m+=this._zTime=-Se);break}}v=_}else{v=this._last;for(var W=r<0?r:b;v;){if(_=v._prev,(v._act||W<=v._end)&&v._ts&&M!==v){if(v.parent!==this)return this.render(r,l,c);if(v.render(v._ts>0?(W-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(W-v._start)*v._ts,l,c||Li&&nm(v)),b!==this._time||!this._ts&&!E){M=0,_&&(m+=this._zTime=W?-Se:Se);break}}v=_}}if(M&&!l&&(this.pause(),M.render(b>=d?0:-Se)._zTime=b>=d?1:-1,this._ts))return this._start=O,ih(this),this.render(r,l,c);this._onUpdate&&!l&&Yn(this,"onUpdate",!0),(m===f&&this._tTime>=this.totalDuration()||!m&&d)&&(O===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((r||!h)&&(m===f&&this._ts>0||!m&&this._ts<0)&&gr(this,1),!l&&!(r<0&&!d)&&(m||d||!f)&&(Yn(this,m===f&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(m<f&&this.timeScale()>0)&&this._prom())))}return this},i.add=function(r,l){var c=this;if(ws(l)||(l=la(this,l,r)),!(r instanceof su)){if(Gi(r))return r.forEach(function(d){return c.add(d,l)}),this;if(Ti(r))return this.addLabel(r,l);if(Ke(r))r=si.delayedCall(0,r);else return this}return this!==r?La(this,r,l):this},i.getChildren=function(r,l,c,d){r===void 0&&(r=!0),l===void 0&&(l=!0),c===void 0&&(c=!0),d===void 0&&(d=-ua);for(var f=[],h=this._first;h;)h._start>=d&&(h instanceof si?l&&f.push(h):(c&&f.push(h),r&&f.push.apply(f,h.getChildren(!0,l,c)))),h=h._next;return f},i.getById=function(r){for(var l=this.getChildren(1,1,1),c=l.length;c--;)if(l[c].vars.id===r)return l[c]},i.remove=function(r){return Ti(r)?this.removeLabel(r):Ke(r)?this.killTweensOf(r):(r.parent===this&&eh(this,r),r===this._recent&&(this._recent=this._last),tl(this))},i.totalTime=function(r,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ye(Pn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),a.prototype.totalTime.call(this,r,l),this._forcing=0,this):this._tTime},i.addLabel=function(r,l){return this.labels[r]=la(this,l),this},i.removeLabel=function(r){return delete this.labels[r],this},i.addPause=function(r,l,c){var d=si.delayedCall(0,l||iu,c);return d.data="isPause",this._hasPause=1,La(this,d,la(this,r))},i.removePause=function(r){var l=this._first;for(r=la(this,r);l;)l._start===r&&l.data==="isPause"&&gr(l),l=l._next},i.killTweensOf=function(r,l,c){for(var d=this.getTweensOf(r,c),f=d.length;f--;)tr!==d[f]&&d[f].kill(r,l);return this},i.getTweensOf=function(r,l){for(var c=[],d=da(r),f=this._first,h=ws(l),m;f;)f instanceof si?pE(f._targets,d)&&(h?(!tr||f._initted&&f._ts)&&f.globalTime(0)<=l&&f.globalTime(f.totalDuration())>l:!l||f.isActive())&&c.push(f):(m=f.getTweensOf(d,l)).length&&c.push.apply(c,m),f=f._next;return c},i.tweenTo=function(r,l){l=l||{};var c=this,d=la(c,r),f=l,h=f.startAt,m=f.onStart,x=f.onStartParams,b=f.immediateRender,v,_=si.to(c,In({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:d,overwrite:"auto",duration:l.duration||Math.abs((d-(h&&"time"in h?h.time:c._time))/c.timeScale())||Se,onStart:function(){if(c.pause(),!v){var S=l.duration||Math.abs((d-(h&&"time"in h?h.time:c._time))/c.timeScale());_._dur!==S&&mo(_,S,0,1).render(_._time,!0,!0),v=1}m&&m.apply(_,x||[])}},l));return b?_.render(0):_},i.tweenFromTo=function(r,l,c){return this.tweenTo(l,In({startAt:{time:la(this,r)}},c))},i.recent=function(){return this._recent},i.nextLabel=function(r){return r===void 0&&(r=this._time),qy(this,la(this,r))},i.previousLabel=function(r){return r===void 0&&(r=this._time),qy(this,la(this,r),1)},i.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Se)},i.shiftChildren=function(r,l,c){c===void 0&&(c=0);var d=this._first,f=this.labels,h;for(r=Ye(r);d;)d._start>=c&&(d._start+=r,d._end+=r),d=d._next;if(l)for(h in f)f[h]>=c&&(f[h]+=r);return tl(this)},i.invalidate=function(r){var l=this._first;for(this._lock=0;l;)l.invalidate(r),l=l._next;return a.prototype.invalidate.call(this,r)},i.clear=function(r){r===void 0&&(r=!0);for(var l=this._first,c;l;)c=l._next,this.remove(l),l=c;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),tl(this)},i.totalDuration=function(r){var l=0,c=this,d=c._last,f=ua,h,m,x;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-r:r));if(c._dirty){for(x=c.parent;d;)h=d._prev,d._dirty&&d.totalDuration(),m=d._start,m>f&&c._sort&&d._ts&&!c._lock?(c._lock=1,La(c,d,m-d._delay,1)._lock=0):f=m,m<0&&d._ts&&(l-=m,(!x&&!c._dp||x&&x.smoothChildTiming)&&(c._start+=Ye(m/c._ts),c._time-=m,c._tTime-=m),c.shiftChildren(-m,!1,-1/0),f=0),d._end>l&&d._ts&&(l=d._end),d=h;mo(c,c===Ge&&c._time>l?c._time:l,1,1),c._dirty=0}return c._tDur},t.updateRoot=function(r){if(Ge._ts&&(Ew(Ge,jf(r,Ge)),kw=Pn.frame),Pn.frame>=Py){Py+=qn.autoSleep||120;var l=Ge._first;if((!l||!l._ts)&&qn.autoSleep&&Pn._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||Pn.sleep()}}},t})(su);In(ji.prototype,{_lock:0,_hasPause:0,_forcing:0});var BE=function(t,i,n,r,l,c,d){var f=new wn(this._pt,t,i,0,1,t_,null,l),h=0,m=0,x,b,v,_,w,S,E,M;for(f.b=n,f.e=r,n+="",r+="",(E=~r.indexOf("random("))&&(r=nu(r)),c&&(M=[n,r],c(M,t,i),n=M[0],r=M[1]),b=n.match(M0)||[];x=M0.exec(r);)_=x[0],w=r.substring(h,x.index),v?v=(v+1)%5:w.substr(-5)==="rgba("&&(v=1),_!==b[m++]&&(S=parseFloat(b[m-1])||0,f._pt={_next:f._pt,p:w||m===1?w:",",s:S,c:_.charAt(1)==="="?ao(S,_)-S:parseFloat(_)-S,m:v&&v<4?Math.round:0},h=M0.lastIndex);return f.c=h<r.length?r.substring(h,r.length):"",f.fp=d,(yw.test(r)||E)&&(f.e=0),this._pt=f,f},am=function(t,i,n,r,l,c,d,f,h,m){Ke(r)&&(r=r(l||0,t,c));var x=t[i],b=n!=="get"?n:Ke(x)?h?t[i.indexOf("set")||!Ke(t["get"+i.substr(3)])?i:"get"+i.substr(3)](h):t[i]():x,v=Ke(x)?h?YE:Kw:rm,_;if(Ti(r)&&(~r.indexOf("random(")&&(r=nu(r)),r.charAt(1)==="="&&(_=ao(b,r)+(Ui(b)||0),(_||_===0)&&(r=_))),!m||b!==r||gg)return!isNaN(b*r)&&r!==""?(_=new wn(this._pt,t,i,+b||0,r-(b||0),typeof x=="boolean"?qE:Jw,0,v),h&&(_.fp=h),d&&_.modifier(d,this,t),this._pt=_):(!x&&!(i in t)&&Jg(i,r),BE.call(this,t,i,b,r,v,f||qn.stringFilter,h))},HE=function(t,i,n,r,l){if(Ke(t)&&(t=Fc(t,l,i,n,r)),!Ga(t)||t.style&&t.nodeType||Gi(t)||bw(t))return Ti(t)?Fc(t,l,i,n,r):t;var c={},d;for(d in t)c[d]=Fc(t[d],l,i,n,r);return c},Ww=function(t,i,n,r,l,c){var d,f,h,m;if(Hn[t]&&(d=new Hn[t]).init(l,d.rawVars?i[t]:HE(i[t],r,l,c,n),n,r,c)!==!1&&(n._pt=f=new wn(n._pt,l,t,0,1,d.render,d,0,d.priority),n!==eo))for(h=n._ptLookup[n._targets.indexOf(l)],m=d._props.length;m--;)h[d._props[m]]=f;return d},tr,gg,sm=function a(t,i,n){var r=t.vars,l=r.ease,c=r.startAt,d=r.immediateRender,f=r.lazy,h=r.onUpdate,m=r.runBackwards,x=r.yoyoEase,b=r.keyframes,v=r.autoRevert,_=t._dur,w=t._startAt,S=t._targets,E=t.parent,M=E&&E.data==="nested"?E.vars.targets:S,A=t._overwrite==="auto"&&!Wg,O=t.timeline,z,H,j,F,U,W,et,Y,at,ct,lt,B,X;if(O&&(!b||!l)&&(l="none"),t._ease=el(l,ho.ease),t._yEase=x?Vw(el(x===!0?l:x,ho.ease)):0,x&&t._yoyo&&!t._repeat&&(x=t._yEase,t._yEase=t._ease,t._ease=x),t._from=!O&&!!r.runBackwards,!O||b&&!r.stagger){if(Y=S[0]?Jr(S[0]).harness:0,B=Y&&r[Y.prop],z=Rf(r,tm),w&&(w._zTime<0&&w.progress(1),i<0&&m&&d&&!v?w.render(-1,!0):w.revert(m&&_?mf:fE),w._lazy=0),c){if(gr(t._startAt=si.set(S,In({data:"isStart",overwrite:!1,parent:E,immediateRender:!0,lazy:!w&&vn(f),startAt:null,delay:0,onUpdate:h&&function(){return Yn(t,"onUpdate")},stagger:0},c))),t._startAt._dp=0,t._startAt._sat=t,i<0&&(Li||!d&&!v)&&t._startAt.revert(mf),d&&_&&i<=0&&n<=0){i&&(t._zTime=i);return}}else if(m&&_&&!w){if(i&&(d=!1),j=In({overwrite:!1,data:"isFromStart",lazy:d&&!w&&vn(f),immediateRender:d,stagger:0,parent:E},z),B&&(j[Y.prop]=B),gr(t._startAt=si.set(S,j)),t._startAt._dp=0,t._startAt._sat=t,i<0&&(Li?t._startAt.revert(mf):t._startAt.render(-1,!0)),t._zTime=i,!d)a(t._startAt,Se,Se);else if(!i)return}for(t._pt=t._ptCache=0,f=_&&vn(f)||f&&!_,H=0;H<S.length;H++){if(U=S[H],et=U._gsap||im(S)[H]._gsap,t._ptLookup[H]=ct={},cg[et.id]&&cr.length&&Of(),lt=M===S?H:M.indexOf(U),Y&&(at=new Y).init(U,B||z,t,lt,M)!==!1&&(t._pt=F=new wn(t._pt,U,at.name,0,1,at.render,at,0,at.priority),at._props.forEach(function(st){ct[st]=F}),at.priority&&(W=1)),!Y||B)for(j in z)Hn[j]&&(at=Ww(j,z,t,lt,U,M))?at.priority&&(W=1):ct[j]=F=am.call(t,U,j,"get",z[j],lt,M,0,r.stringFilter);t._op&&t._op[H]&&t.kill(U,t._op[H]),A&&t._pt&&(tr=t,Ge.killTweensOf(U,ct,t.globalTime(i)),X=!t.parent,tr=0),t._pt&&f&&(cg[et.id]=1)}W&&e_(t),t._onInit&&t._onInit(t)}t._onUpdate=h,t._initted=(!t._op||t._pt)&&!X,b&&i<=0&&O.render(ua,!0,!0)},FE=function(t,i,n,r,l,c,d,f){var h=(t._pt&&t._ptCache||(t._ptCache={}))[i],m,x,b,v;if(!h)for(h=t._ptCache[i]=[],b=t._ptLookup,v=t._targets.length;v--;){if(m=b[v][i],m&&m.d&&m.d._pt)for(m=m.d._pt;m&&m.p!==i&&m.fp!==i;)m=m._next;if(!m)return gg=1,t.vars[i]="+=0",sm(t,d),gg=0,f?eu(i+" not eligible for reset"):1;h.push(m)}for(v=h.length;v--;)x=h[v],m=x._pt||x,m.s=(r||r===0)&&!l?r:m.s+(r||0)+c*m.c,m.c=n-m.s,x.e&&(x.e=ai(n)+Ui(x.e)),x.b&&(x.b=m.s+Ui(x.b))},PE=function(t,i){var n=t[0]?Jr(t[0]).harness:0,r=n&&n.aliases,l,c,d,f;if(!r)return i;l=po({},i);for(c in r)if(c in l)for(f=r[c].split(","),d=f.length;d--;)l[f[d]]=l[c];return l},UE=function(t,i,n,r){var l=i.ease||r||"power1.inOut",c,d;if(Gi(i))d=n[t]||(n[t]=[]),i.forEach(function(f,h){return d.push({t:h/(i.length-1)*100,v:f,e:l})});else for(c in i)d=n[c]||(n[c]=[]),c==="ease"||d.push({t:parseFloat(t),v:i[c],e:l})},Fc=function(t,i,n,r,l){return Ke(t)?t.call(i,n,r,l):Ti(t)&&~t.indexOf("random(")?nu(t):t},Qw=em+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Zw={};yn(Qw+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return Zw[a]=1});var si=(function(a){mw(t,a);function t(n,r,l,c){var d;typeof r=="number"&&(l.duration=r,r=l,l=null),d=a.call(this,c?r:Bc(r))||this;var f=d.vars,h=f.duration,m=f.delay,x=f.immediateRender,b=f.stagger,v=f.overwrite,_=f.keyframes,w=f.defaults,S=f.scrollTrigger,E=f.yoyoEase,M=r.parent||Ge,A=(Gi(n)||bw(n)?ws(n[0]):"length"in r)?[n]:da(n),O,z,H,j,F,U,W,et;if(d._targets=A.length?im(A):eu("GSAP target "+n+" not found. https://gsap.com",!qn.nullTargetWarn)||[],d._ptLookup=[],d._overwrite=v,_||b||Bd(h)||Bd(m)){if(r=d.vars,O=d.timeline=new ji({data:"nested",defaults:w||{},targets:M&&M.data==="nested"?M.vars.targets:A}),O.kill(),O.parent=O._dp=ps(d),O._start=0,b||Bd(h)||Bd(m)){if(j=A.length,W=b&&Nw(b),Ga(b))for(F in b)~Qw.indexOf(F)&&(et||(et={}),et[F]=b[F]);for(z=0;z<j;z++)H=Rf(r,Zw),H.stagger=0,E&&(H.yoyoEase=E),et&&po(H,et),U=A[z],H.duration=+Fc(h,ps(d),z,U,A),H.delay=(+Fc(m,ps(d),z,U,A)||0)-d._delay,!b&&j===1&&H.delay&&(d._delay=m=H.delay,d._start+=m,H.delay=0),O.to(U,H,W?W(z,U,A):0),O._ease=Jt.none;O.duration()?h=m=0:d.timeline=0}else if(_){Bc(In(O.vars.defaults,{ease:"none"})),O._ease=el(_.ease||r.ease||"none");var Y=0,at,ct,lt;if(Gi(_))_.forEach(function(B){return O.to(A,B,">")}),O.duration();else{H={};for(F in _)F==="ease"||F==="easeEach"||UE(F,_[F],H,_.easeEach);for(F in H)for(at=H[F].sort(function(B,X){return B.t-X.t}),Y=0,z=0;z<at.length;z++)ct=at[z],lt={ease:ct.e,duration:(ct.t-(z?at[z-1].t:0))/100*h},lt[F]=ct.v,O.to(A,lt,Y),Y+=lt.duration;O.duration()<h&&O.to({},{duration:h-O.duration()})}}h||d.duration(h=O.duration())}else d.timeline=0;return v===!0&&!Wg&&(tr=ps(d),Ge.killTweensOf(A),tr=0),La(M,ps(d),l),r.reversed&&d.reverse(),r.paused&&d.paused(!0),(x||!h&&!_&&d._start===Ye(M._time)&&vn(x)&&bE(ps(d))&&M.data!=="nested")&&(d._tTime=-Se,d.render(Math.max(0,-m)||0)),S&&Ow(ps(d),S),d}var i=t.prototype;return i.render=function(r,l,c){var d=this._time,f=this._tDur,h=this._dur,m=r<0,x=r>f-Se&&!m?f:r<Se?0:r,b,v,_,w,S,E,M,A,O;if(!h)yE(this,r,l,c);else if(x!==this._tTime||!r||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==m||this._lazy){if(b=x,A=this.timeline,this._repeat){if(w=h+this._rDelay,this._repeat<-1&&m)return this.totalTime(w*100+r,l,c);if(b=Ye(x%w),x===f?(_=this._repeat,b=h):(S=Ye(x/w),_=~~S,_&&_===S?(b=h,_--):b>h&&(b=h)),E=this._yoyo&&_&1,E&&(O=this._yEase,b=h-b),S=go(this._tTime,w),b===d&&!c&&this._initted&&_===S)return this._tTime=x,this;_!==S&&(A&&this._yEase&&Iw(A,E),this.vars.repeatRefresh&&!E&&!this._lock&&b!==w&&this._initted&&(this._lock=c=1,this.render(Ye(w*_),!0).invalidate()._lock=0))}if(!this._initted){if(Rw(this,m?r:b,c,l,x))return this._tTime=0,this;if(d!==this._time&&!(c&&this.vars.repeatRefresh&&_!==S))return this;if(h!==this._dur)return this.render(r,l,c)}if(this._tTime=x,this._time=b,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(O||this._ease)(b/h),this._from&&(this.ratio=M=1-M),!d&&x&&!l&&!S&&(Yn(this,"onStart"),this._tTime!==x))return this;for(v=this._pt;v;)v.r(M,v.d),v=v._next;A&&A.render(r<0?r:A._dur*A._ease(b/this._dur),l,c)||this._startAt&&(this._zTime=r),this._onUpdate&&!l&&(m&&ug(this,r,l,c),Yn(this,"onUpdate")),this._repeat&&_!==S&&this.vars.onRepeat&&!l&&this.parent&&Yn(this,"onRepeat"),(x===this._tDur||!x)&&this._tTime===x&&(m&&!this._onUpdate&&ug(this,r,!0,!0),(r||!h)&&(x===this._tDur&&this._ts>0||!x&&this._ts<0)&&gr(this,1),!l&&!(m&&!d)&&(x||d||E)&&(Yn(this,x===f?"onComplete":"onReverseComplete",!0),this._prom&&!(x<f&&this.timeScale()>0)&&this._prom()))}return this},i.targets=function(){return this._targets},i.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),a.prototype.invalidate.call(this,r)},i.resetTo=function(r,l,c,d,f){au||Pn.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),m;return this._initted||sm(this,h),m=this._ease(h/this._dur),FE(this,r,l,c,d,m,h,f)?this.resetTo(r,l,c,d,1):(nh(this,0),this.parent||Aw(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},i.kill=function(r,l){if(l===void 0&&(l="all"),!r&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?Ec(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Li),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(r,l,tr&&tr.vars.overwrite!==!0)._first||Ec(this),this.parent&&c!==this.timeline.totalDuration()&&mo(this,this._dur*this.timeline._tDur/c,0,1),this}var d=this._targets,f=r?da(r):d,h=this._ptLookup,m=this._pt,x,b,v,_,w,S,E;if((!l||l==="all")&&mE(d,f))return l==="all"&&(this._pt=0),Ec(this);for(x=this._op=this._op||[],l!=="all"&&(Ti(l)&&(w={},yn(l,function(M){return w[M]=1}),l=w),l=PE(d,l)),E=d.length;E--;)if(~f.indexOf(d[E])){b=h[E],l==="all"?(x[E]=l,_=b,v={}):(v=x[E]=x[E]||{},_=l);for(w in _)S=b&&b[w],S&&((!("kill"in S.d)||S.d.kill(w)===!0)&&eh(this,S,"_pt"),delete b[w]),v!=="all"&&(v[w]=1)}return this._initted&&!this._pt&&m&&Ec(this),this},t.to=function(r,l){return new t(r,l,arguments[2])},t.from=function(r,l){return Hc(1,arguments)},t.delayedCall=function(r,l,c,d){return new t(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:l,onReverseComplete:l,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:d})},t.fromTo=function(r,l,c){return Hc(2,arguments)},t.set=function(r,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new t(r,l)},t.killTweensOf=function(r,l,c){return Ge.killTweensOf(r,l,c)},t})(su);In(si.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});yn("staggerTo,staggerFrom,staggerFromTo",function(a){si[a]=function(){var t=new ji,i=fg.call(arguments,0);return i.splice(a==="staggerFromTo"?5:4,0,0),t[a].apply(t,i)}});var rm=function(t,i,n){return t[i]=n},Kw=function(t,i,n){return t[i](n)},YE=function(t,i,n,r){return t[i](r.fp,n)},GE=function(t,i,n){return t.setAttribute(i,n)},lm=function(t,i){return Ke(t[i])?Kw:Qg(t[i])&&t.setAttribute?GE:rm},Jw=function(t,i){return i.set(i.t,i.p,Math.round((i.s+i.c*t)*1e6)/1e6,i)},qE=function(t,i){return i.set(i.t,i.p,!!(i.s+i.c*t),i)},t_=function(t,i){var n=i._pt,r="";if(!t&&i.b)r=i.b;else if(t===1&&i.e)r=i.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+r,n=n._next;r+=i.c}i.set(i.t,i.p,r,i)},om=function(t,i){for(var n=i._pt;n;)n.r(t,n.d),n=n._next},VE=function(t,i,n,r){for(var l=this._pt,c;l;)c=l._next,l.p===r&&l.modifier(t,i,n),l=c},IE=function(t){for(var i=this._pt,n,r;i;)r=i._next,i.p===t&&!i.op||i.op===t?eh(this,i,"_pt"):i.dep||(n=1),i=r;return!n},XE=function(t,i,n,r){r.mSet(t,i,r.m.call(r.tween,n,r.mt),r)},e_=function(t){for(var i=t._pt,n,r,l,c;i;){for(n=i._next,r=l;r&&r.pr>i.pr;)r=r._next;(i._prev=r?r._prev:c)?i._prev._next=i:l=i,(i._next=r)?r._prev=i:c=i,i=n}t._pt=l},wn=(function(){function a(i,n,r,l,c,d,f,h,m){this.t=n,this.s=l,this.c=c,this.p=r,this.r=d||Jw,this.d=f||this,this.set=h||rm,this.pr=m||0,this._next=i,i&&(i._prev=this)}var t=a.prototype;return t.modifier=function(n,r,l){this.mSet=this.mSet||this.set,this.set=XE,this.m=n,this.mt=l,this.tween=r},a})();yn(em+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return tm[a]=1});Vn.TweenMax=Vn.TweenLite=si;Vn.TimelineLite=Vn.TimelineMax=ji;Ge=new ji({sortChildren:!1,defaults:ho,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});qn.stringFilter=qw;var il=[],bf={},$E=[],Iy=0,WE=0,R0=function(t){return(bf[t]||$E).map(function(i){return i()})},mg=function(){var t=Date.now(),i=[];t-Iy>2&&(R0("matchMediaInit"),il.forEach(function(n){var r=n.queries,l=n.conditions,c,d,f,h;for(d in r)c=ja.matchMedia(r[d]).matches,c&&(f=1),c!==l[d]&&(l[d]=c,h=1);h&&(n.revert(),f&&i.push(n))}),R0("matchMediaRevert"),i.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Iy=t,R0("matchMedia"))},i_=(function(){function a(i,n){this.selector=n&&hg(n),this.data=[],this._r=[],this.isReverted=!1,this.id=WE++,i&&this.add(i)}var t=a.prototype;return t.add=function(n,r,l){Ke(n)&&(l=r,r=n,n=Ke);var c=this,d=function(){var h=De,m=c.selector,x;return h&&h!==c&&h.data.push(c),l&&(c.selector=hg(l)),De=c,x=r.apply(c,arguments),Ke(x)&&c._r.push(x),De=h,c.selector=m,c.isReverted=!1,x};return c.last=d,n===Ke?d(c,function(f){return c.add(null,f)}):n?c[n]=d:d},t.ignore=function(n){var r=De;De=null,n(this),De=r},t.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof a?n.push.apply(n,r.getTweens()):r instanceof si&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,r){var l=this;if(n?(function(){for(var d=l.getTweens(),f=l.data.length,h;f--;)h=l.data[f],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(m){return d.splice(d.indexOf(m),1)}));for(d.map(function(m){return{g:m._dur||m._delay||m._sat&&!m._sat.vars.immediateRender?m.globalTime(0):-1/0,t:m}}).sort(function(m,x){return x.g-m.g||-1/0}).forEach(function(m){return m.t.revert(n)}),f=l.data.length;f--;)h=l.data[f],h instanceof ji?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof si)&&h.revert&&h.revert(n);l._r.forEach(function(m){return m(n,l)}),l.isReverted=!0})():this.data.forEach(function(d){return d.kill&&d.kill()}),this.clear(),r)for(var c=il.length;c--;)il[c].id===this.id&&il.splice(c,1)},t.revert=function(n){this.kill(n||{})},a})(),QE=(function(){function a(i){this.contexts=[],this.scope=i,De&&De.data.push(this)}var t=a.prototype;return t.add=function(n,r,l){Ga(n)||(n={matches:n});var c=new i_(0,l||this.scope),d=c.conditions={},f,h,m;De&&!c.selector&&(c.selector=De.selector),this.contexts.push(c),r=c.add("onMatch",r),c.queries=n;for(h in n)h==="all"?m=1:(f=ja.matchMedia(n[h]),f&&(il.indexOf(c)<0&&il.push(c),(d[h]=f.matches)&&(m=1),f.addListener?f.addListener(mg):f.addEventListener("change",mg)));return m&&r(c,function(x){return c.add(null,x)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},a})(),Df={registerPlugin:function(){for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];i.forEach(function(r){return Uw(r)})},timeline:function(t){return new ji(t)},getTweensOf:function(t,i){return Ge.getTweensOf(t,i)},getProperty:function(t,i,n,r){Ti(t)&&(t=da(t)[0]);var l=Jr(t||{}).get,c=n?Cw:Mw;return n==="native"&&(n=""),t&&(i?c((Hn[i]&&Hn[i].get||l)(t,i,n,r)):function(d,f,h){return c((Hn[d]&&Hn[d].get||l)(t,d,f,h))})},quickSetter:function(t,i,n){if(t=da(t),t.length>1){var r=t.map(function(m){return kn.quickSetter(m,i,n)}),l=r.length;return function(m){for(var x=l;x--;)r[x](m)}}t=t[0]||{};var c=Hn[i],d=Jr(t),f=d.harness&&(d.harness.aliases||{})[i]||i,h=c?function(m){var x=new c;eo._pt=0,x.init(t,n?m+n:m,eo,0,[t]),x.render(1,x),eo._pt&&om(1,eo)}:d.set(t,f);return c?h:function(m){return h(t,f,n?m+n:m,d,1)}},quickTo:function(t,i,n){var r,l=kn.to(t,In((r={},r[i]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),c=function(f,h,m){return l.resetTo(i,f,h,m)};return c.tween=l,c},isTweening:function(t){return Ge.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=el(t.ease,ho.ease)),Uy(ho,t||{})},config:function(t){return Uy(qn,t||{})},registerEffect:function(t){var i=t.name,n=t.effect,r=t.plugins,l=t.defaults,c=t.extendTimeline;(r||"").split(",").forEach(function(d){return d&&!Hn[d]&&!Vn[d]&&eu(i+" effect requires "+d+" plugin.")}),C0[i]=function(d,f,h){return n(da(d),In(f||{},l),h)},c&&(ji.prototype[i]=function(d,f,h){return this.add(C0[i](d,Ga(f)?f:(h=f)&&{},this),h)})},registerEase:function(t,i){Jt[t]=el(i)},parseEase:function(t,i){return arguments.length?el(t,i):Jt},getById:function(t){return Ge.getById(t)},exportRoot:function(t,i){t===void 0&&(t={});var n=new ji(t),r,l;for(n.smoothChildTiming=vn(t.smoothChildTiming),Ge.remove(n),n._dp=0,n._time=n._tTime=Ge._time,r=Ge._first;r;)l=r._next,(i||!(!r._dur&&r instanceof si&&r.vars.onComplete===r._targets[0]))&&La(n,r,r._start-r._delay),r=l;return La(Ge,n,0),n},context:function(t,i){return t?new i_(t,i):De},matchMedia:function(t){return new QE(t)},matchMediaRefresh:function(){return il.forEach(function(t){var i=t.conditions,n,r;for(r in i)i[r]&&(i[r]=!1,n=1);n&&t.revert()})||mg()},addEventListener:function(t,i){var n=bf[t]||(bf[t]=[]);~n.indexOf(i)||n.push(i)},removeEventListener:function(t,i){var n=bf[t],r=n&&n.indexOf(i);r>=0&&n.splice(r,1)},utils:{wrap:CE,wrapYoyo:AE,distribute:Nw,random:Bw,snap:Lw,normalize:ME,getUnit:Ui,clamp:SE,splitColor:Yw,toArray:da,selector:hg,mapRange:Fw,pipe:TE,unitize:EE,interpolate:zE,shuffle:Dw},install:_w,effects:C0,ticker:Pn,updateRoot:ji.updateRoot,plugins:Hn,globalTimeline:Ge,core:{PropTween:wn,globals:Sw,Tween:si,Timeline:ji,Animation:su,getCache:Jr,_removeLinkedListItem:eh,reverting:function(){return Li},context:function(t){return t&&De&&(De.data.push(t),t._ctx=De),De},suppressOverwrites:function(t){return Wg=t}}};yn("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return Df[a]=si[a]});Pn.add(ji.updateRoot);eo=Df.to({},{duration:0});var ZE=function(t,i){for(var n=t._pt;n&&n.p!==i&&n.op!==i&&n.fp!==i;)n=n._next;return n},KE=function(t,i){var n=t._targets,r,l,c;for(r in i)for(l=n.length;l--;)c=t._ptLookup[l][r],c&&(c=c.d)&&(c._pt&&(c=ZE(c,r)),c&&c.modifier&&c.modifier(i[r],t,n[l],r))},j0=function(t,i){return{name:t,headless:1,rawVars:1,init:function(r,l,c){c._onInit=function(d){var f,h;if(Ti(l)&&(f={},yn(l,function(m){return f[m]=1}),l=f),i){f={};for(h in l)f[h]=i(l[h]);l=f}KE(d,l)}}}},kn=Df.registerPlugin({name:"attr",init:function(t,i,n,r,l){var c,d,f;this.tween=n;for(c in i)f=t.getAttribute(c)||"",d=this.add(t,"setAttribute",(f||0)+"",i[c],r,l,0,0,c),d.op=c,d.b=f,this._props.push(c)},render:function(t,i){for(var n=i._pt;n;)Li?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,i){for(var n=i.length;n--;)this.add(t,n,t[n]||0,i[n],0,0,0,0,0,1)}},j0("roundProps",pg),j0("modifiers"),j0("snap",Lw))||Df;si.version=ji.version=kn.version="3.14.2";ww=1;Zg()&&xo();var JE=Jt.Power0,tM=Jt.Power1,eM=Jt.Power2,iM=Jt.Power3,nM=Jt.Power4,aM=Jt.Linear,sM=Jt.Quad,rM=Jt.Cubic,lM=Jt.Quart,oM=Jt.Quint,cM=Jt.Strong,uM=Jt.Elastic,dM=Jt.Back,fM=Jt.SteppedEase,hM=Jt.Bounce,pM=Jt.Sine,gM=Jt.Expo,mM=Jt.Circ;var Xy,er,so,cm,Qr,$y,um,xM=function(){return typeof window<"u"},_s={},Vr=180/Math.PI,ro=Math.PI/180,Il=Math.atan2,Wy=1e8,dm=/([A-Z])/g,bM=/(left|right|width|margin|padding|x)/i,vM=/[\s,\(]\S/,Ba={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},xg=function(t,i){return i.set(i.t,i.p,Math.round((i.s+i.c*t)*1e4)/1e4+i.u,i)},yM=function(t,i){return i.set(i.t,i.p,t===1?i.e:Math.round((i.s+i.c*t)*1e4)/1e4+i.u,i)},wM=function(t,i){return i.set(i.t,i.p,t?Math.round((i.s+i.c*t)*1e4)/1e4+i.u:i.b,i)},_M=function(t,i){return i.set(i.t,i.p,t===1?i.e:t?Math.round((i.s+i.c*t)*1e4)/1e4+i.u:i.b,i)},SM=function(t,i){var n=i.s+i.c*t;i.set(i.t,i.p,~~(n+(n<0?-.5:.5))+i.u,i)},n_=function(t,i){return i.set(i.t,i.p,t?i.e:i.b,i)},a_=function(t,i){return i.set(i.t,i.p,t!==1?i.b:i.e,i)},kM=function(t,i,n){return t.style[i]=n},TM=function(t,i,n){return t.style.setProperty(i,n)},EM=function(t,i,n){return t._gsap[i]=n},MM=function(t,i,n){return t._gsap.scaleX=t._gsap.scaleY=n},CM=function(t,i,n,r,l){var c=t._gsap;c.scaleX=c.scaleY=n,c.renderTransform(l,c)},AM=function(t,i,n,r,l){var c=t._gsap;c[i]=n,c.renderTransform(l,c)},qe="transform",_n=qe+"Origin",zM=function a(t,i){var n=this,r=this.target,l=r.style,c=r._gsap;if(t in _s&&l){if(this.tfm=this.tfm||{},t!=="transform")t=Ba[t]||t,~t.indexOf(",")?t.split(",").forEach(function(d){return n.tfm[d]=gs(r,d)}):this.tfm[t]=c.x?c[t]:gs(r,t),t===_n&&(this.tfm.zOrigin=c.zOrigin);else return Ba.transform.split(",").forEach(function(d){return a.call(n,d,i)});if(this.props.indexOf(qe)>=0)return;c.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(_n,i,"")),t=qe}(l||i)&&this.props.push(t,i,l[t])},s_=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},OM=function(){var t=this.props,i=this.target,n=i.style,r=i._gsap,l,c;for(l=0;l<t.length;l+=3)t[l+1]?t[l+1]===2?i[t[l]](t[l+2]):i[t[l]]=t[l+2]:t[l+2]?n[t[l]]=t[l+2]:n.removeProperty(t[l].substr(0,2)==="--"?t[l]:t[l].replace(dm,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)r[c]=this.tfm[c];r.svg&&(r.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),l=um(),(!l||!l.isStart)&&!n[qe]&&(s_(n),r.zOrigin&&n[_n]&&(n[_n]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},r_=function(t,i){var n={target:t,props:[],revert:OM,save:zM};return t._gsap||kn.core.getCache(t),i&&t.style&&t.nodeType&&i.split(",").forEach(function(r){return n.save(r)}),n},l_,bg=function(t,i){var n=er.createElementNS?er.createElementNS((i||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):er.createElement(t);return n&&n.style?n:er.createElement(t)},Gn=function a(t,i,n){var r=getComputedStyle(t);return r[i]||r.getPropertyValue(i.replace(dm,"-$1").toLowerCase())||r.getPropertyValue(i)||!n&&a(t,bo(i)||i,1)||""},Qy="O,Moz,ms,Ms,Webkit".split(","),bo=function(t,i,n){var r=i||Qr,l=r.style,c=5;if(t in l&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);c--&&!(Qy[c]+t in l););return c<0?null:(c===3?"ms":c>=0?Qy[c]:"")+t},vg=function(){xM()&&window.document&&(Xy=window,er=Xy.document,so=er.documentElement,Qr=bg("div")||{style:{}},bg("div"),qe=bo(qe),_n=qe+"Origin",Qr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",l_=!!bo("perspective"),um=kn.core.reverting,cm=1)},Zy=function(t){var i=t.ownerSVGElement,n=bg("svg",i&&i.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),l;r.style.display="block",n.appendChild(r),so.appendChild(n);try{l=r.getBBox()}catch{}return n.removeChild(r),so.removeChild(n),l},Ky=function(t,i){for(var n=i.length;n--;)if(t.hasAttribute(i[n]))return t.getAttribute(i[n])},o_=function(t){var i,n;try{i=t.getBBox()}catch{i=Zy(t),n=1}return i&&(i.width||i.height)||n||(i=Zy(t)),i&&!i.width&&!i.x&&!i.y?{x:+Ky(t,["x","cx","x1"])||0,y:+Ky(t,["y","cy","y1"])||0,width:0,height:0}:i},c_=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&o_(t))},mr=function(t,i){if(i){var n=t.style,r;i in _s&&i!==_n&&(i=qe),n.removeProperty?(r=i.substr(0,2),(r==="ms"||i.substr(0,6)==="webkit")&&(i="-"+i),n.removeProperty(r==="--"?i:i.replace(dm,"-$1").toLowerCase())):n.removeAttribute(i)}},ir=function(t,i,n,r,l,c){var d=new wn(t._pt,i,n,0,1,c?a_:n_);return t._pt=d,d.b=r,d.e=l,t._props.push(n),d},Jy={deg:1,rad:1,turn:1},RM={grid:1,flex:1},xr=function a(t,i,n,r){var l=parseFloat(n)||0,c=(n+"").trim().substr((l+"").length)||"px",d=Qr.style,f=bM.test(i),h=t.tagName.toLowerCase()==="svg",m=(h?"client":"offset")+(f?"Width":"Height"),x=100,b=r==="px",v=r==="%",_,w,S,E;if(r===c||!l||Jy[r]||Jy[c])return l;if(c!=="px"&&!b&&(l=a(t,i,n,"px")),E=t.getCTM&&c_(t),(v||c==="%")&&(_s[i]||~i.indexOf("adius")))return _=E?t.getBBox()[f?"width":"height"]:t[m],ai(v?l/_*x:l/100*_);if(d[f?"width":"height"]=x+(b?c:r),w=r!=="rem"&&~i.indexOf("adius")||r==="em"&&t.appendChild&&!h?t:t.parentNode,E&&(w=(t.ownerSVGElement||{}).parentNode),(!w||w===er||!w.appendChild)&&(w=er.body),S=w._gsap,S&&v&&S.width&&f&&S.time===Pn.time&&!S.uncache)return ai(l/S.width*x);if(v&&(i==="height"||i==="width")){var M=t.style[i];t.style[i]=x+r,_=t[m],M?t.style[i]=M:mr(t,i)}else(v||c==="%")&&!RM[Gn(w,"display")]&&(d.position=Gn(t,"position")),w===t&&(d.position="static"),w.appendChild(Qr),_=Qr[m],w.removeChild(Qr),d.position="absolute";return f&&v&&(S=Jr(w),S.time=Pn.time,S.width=w[m]),ai(b?_*l/x:_&&l?x/_*l:0)},gs=function(t,i,n,r){var l;return cm||vg(),i in Ba&&i!=="transform"&&(i=Ba[i],~i.indexOf(",")&&(i=i.split(",")[0])),_s[i]&&i!=="transform"?(l=lu(t,r),l=i!=="transformOrigin"?l[i]:l.svg?l.origin:Lf(Gn(t,_n))+" "+l.zOrigin+"px"):(l=t.style[i],(!l||l==="auto"||r||~(l+"").indexOf("calc("))&&(l=Nf[i]&&Nf[i](t,i,n)||Gn(t,i)||Tw(t,i)||(i==="opacity"?1:0))),n&&!~(l+"").trim().indexOf(" ")?xr(t,i,l,n)+n:l},jM=function(t,i,n,r){if(!n||n==="none"){var l=bo(i,t,1),c=l&&Gn(t,l,1);c&&c!==n?(i=l,n=c):i==="borderColor"&&(n=Gn(t,"borderTopColor"))}var d=new wn(this._pt,t.style,i,0,1,t_),f=0,h=0,m,x,b,v,_,w,S,E,M,A,O,z;if(d.b=n,d.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=Gn(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(w=t.style[i],t.style[i]=r,r=Gn(t,i)||r,w?t.style[i]=w:mr(t,i)),m=[n,r],qw(m),n=m[0],r=m[1],b=n.match(to)||[],z=r.match(to)||[],z.length){for(;x=to.exec(r);)S=x[0],M=r.substring(f,x.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),S!==(w=b[h++]||"")&&(v=parseFloat(w)||0,O=w.substr((v+"").length),S.charAt(1)==="="&&(S=ao(v,S)+O),E=parseFloat(S),A=S.substr((E+"").length),f=to.lastIndex-A.length,A||(A=A||qn.units[i]||O,f===r.length&&(r+=A,d.e+=A)),O!==A&&(v=xr(t,i,w,A)||0),d._pt={_next:d._pt,p:M||h===1?M:",",s:v,c:E-v,m:_&&_<4||i==="zIndex"?Math.round:0});d.c=f<r.length?r.substring(f,r.length):""}else d.r=i==="display"&&r==="none"?a_:n_;return yw.test(r)&&(d.e=0),this._pt=d,d},t1={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},DM=function(t){var i=t.split(" "),n=i[0],r=i[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(t=n,n=r,r=t),i[0]=t1[n]||n,i[1]=t1[r]||r,i.join(" ")},NM=function(t,i){if(i.tween&&i.tween._time===i.tween._dur){var n=i.t,r=n.style,l=i.u,c=n._gsap,d,f,h;if(l==="all"||l===!0)r.cssText="",f=1;else for(l=l.split(","),h=l.length;--h>-1;)d=l[h],_s[d]&&(f=1,d=d==="transformOrigin"?_n:qe),mr(n,d);f&&(mr(n,qe),c&&(c.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",lu(n,1),c.uncache=1,s_(r)))}},Nf={clearProps:function(t,i,n,r,l){if(l.data!=="isFromStart"){var c=t._pt=new wn(t._pt,i,n,0,0,NM);return c.u=r,c.pr=-10,c.tween=l,t._props.push(n),1}}},ru=[1,0,0,1,0,0],u_={},d_=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},e1=function(t){var i=Gn(t,qe);return d_(i)?ru:i.substr(7).match(vw).map(ai)},fm=function(t,i){var n=t._gsap||Jr(t),r=t.style,l=e1(t),c,d,f,h;return n.svg&&t.getAttribute("transform")?(f=t.transform.baseVal.consolidate().matrix,l=[f.a,f.b,f.c,f.d,f.e,f.f],l.join(",")==="1,0,0,1,0,0"?ru:l):(l===ru&&!t.offsetParent&&t!==so&&!n.svg&&(f=r.display,r.display="block",c=t.parentNode,(!c||!t.offsetParent&&!t.getBoundingClientRect().width)&&(h=1,d=t.nextElementSibling,so.appendChild(t)),l=e1(t),f?r.display=f:mr(t,"display"),h&&(d?c.insertBefore(t,d):c?c.appendChild(t):so.removeChild(t))),i&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},yg=function(t,i,n,r,l,c){var d=t._gsap,f=l||fm(t,!0),h=d.xOrigin||0,m=d.yOrigin||0,x=d.xOffset||0,b=d.yOffset||0,v=f[0],_=f[1],w=f[2],S=f[3],E=f[4],M=f[5],A=i.split(" "),O=parseFloat(A[0])||0,z=parseFloat(A[1])||0,H,j,F,U;n?f!==ru&&(j=v*S-_*w)&&(F=O*(S/j)+z*(-w/j)+(w*M-S*E)/j,U=O*(-_/j)+z*(v/j)-(v*M-_*E)/j,O=F,z=U):(H=o_(t),O=H.x+(~A[0].indexOf("%")?O/100*H.width:O),z=H.y+(~(A[1]||A[0]).indexOf("%")?z/100*H.height:z)),r||r!==!1&&d.smooth?(E=O-h,M=z-m,d.xOffset=x+(E*v+M*w)-E,d.yOffset=b+(E*_+M*S)-M):d.xOffset=d.yOffset=0,d.xOrigin=O,d.yOrigin=z,d.smooth=!!r,d.origin=i,d.originIsAbsolute=!!n,t.style[_n]="0px 0px",c&&(ir(c,d,"xOrigin",h,O),ir(c,d,"yOrigin",m,z),ir(c,d,"xOffset",x,d.xOffset),ir(c,d,"yOffset",b,d.yOffset)),t.setAttribute("data-svg-origin",O+" "+z)},lu=function(t,i){var n=t._gsap||new $w(t);if("x"in n&&!i&&!n.uncache)return n;var r=t.style,l=n.scaleX<0,c="px",d="deg",f=getComputedStyle(t),h=Gn(t,_n)||"0",m,x,b,v,_,w,S,E,M,A,O,z,H,j,F,U,W,et,Y,at,ct,lt,B,X,st,ut,D,C,$,nt,it,ft;return m=x=b=w=S=E=M=A=O=0,v=_=1,n.svg=!!(t.getCTM&&c_(t)),f.translate&&((f.translate!=="none"||f.scale!=="none"||f.rotate!=="none")&&(r[qe]=(f.translate!=="none"?"translate3d("+(f.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(f.rotate!=="none"?"rotate("+f.rotate+") ":"")+(f.scale!=="none"?"scale("+f.scale.split(" ").join(",")+") ":"")+(f[qe]!=="none"?f[qe]:"")),r.scale=r.rotate=r.translate="none"),j=fm(t,n.svg),n.svg&&(n.uncache?(st=t.getBBox(),h=n.xOrigin-st.x+"px "+(n.yOrigin-st.y)+"px",X=""):X=!i&&t.getAttribute("data-svg-origin"),yg(t,X||h,!!X||n.originIsAbsolute,n.smooth!==!1,j)),z=n.xOrigin||0,H=n.yOrigin||0,j!==ru&&(et=j[0],Y=j[1],at=j[2],ct=j[3],m=lt=j[4],x=B=j[5],j.length===6?(v=Math.sqrt(et*et+Y*Y),_=Math.sqrt(ct*ct+at*at),w=et||Y?Il(Y,et)*Vr:0,M=at||ct?Il(at,ct)*Vr+w:0,M&&(_*=Math.abs(Math.cos(M*ro))),n.svg&&(m-=z-(z*et+H*at),x-=H-(z*Y+H*ct))):(ft=j[6],nt=j[7],D=j[8],C=j[9],$=j[10],it=j[11],m=j[12],x=j[13],b=j[14],F=Il(ft,$),S=F*Vr,F&&(U=Math.cos(-F),W=Math.sin(-F),X=lt*U+D*W,st=B*U+C*W,ut=ft*U+$*W,D=lt*-W+D*U,C=B*-W+C*U,$=ft*-W+$*U,it=nt*-W+it*U,lt=X,B=st,ft=ut),F=Il(-at,$),E=F*Vr,F&&(U=Math.cos(-F),W=Math.sin(-F),X=et*U-D*W,st=Y*U-C*W,ut=at*U-$*W,it=ct*W+it*U,et=X,Y=st,at=ut),F=Il(Y,et),w=F*Vr,F&&(U=Math.cos(F),W=Math.sin(F),X=et*U+Y*W,st=lt*U+B*W,Y=Y*U-et*W,B=B*U-lt*W,et=X,lt=st),S&&Math.abs(S)+Math.abs(w)>359.9&&(S=w=0,E=180-E),v=ai(Math.sqrt(et*et+Y*Y+at*at)),_=ai(Math.sqrt(B*B+ft*ft)),F=Il(lt,B),M=Math.abs(F)>2e-4?F*Vr:0,O=it?1/(it<0?-it:it):0),n.svg&&(X=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!d_(Gn(t,qe)),X&&t.setAttribute("transform",X))),Math.abs(M)>90&&Math.abs(M)<270&&(l?(v*=-1,M+=w<=0?180:-180,w+=w<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),i=i||n.uncache,n.x=m-((n.xPercent=m&&(!i&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-m)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+c,n.y=x-((n.yPercent=x&&(!i&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-x)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+c,n.z=b+c,n.scaleX=ai(v),n.scaleY=ai(_),n.rotation=ai(w)+d,n.rotationX=ai(S)+d,n.rotationY=ai(E)+d,n.skewX=M+d,n.skewY=A+d,n.transformPerspective=O+c,(n.zOrigin=parseFloat(h.split(" ")[2])||!i&&n.zOrigin||0)&&(r[_n]=Lf(h)),n.xOffset=n.yOffset=0,n.force3D=qn.force3D,n.renderTransform=n.svg?BM:l_?f_:LM,n.uncache=0,n},Lf=function(t){return(t=t.split(" "))[0]+" "+t[1]},D0=function(t,i,n){var r=Ui(i);return ai(parseFloat(i)+parseFloat(xr(t,"x",n+"px",r)))+r},LM=function(t,i){i.z="0px",i.rotationY=i.rotationX="0deg",i.force3D=0,f_(t,i)},Fr="0deg",mc="0px",Pr=") ",f_=function(t,i){var n=i||this,r=n.xPercent,l=n.yPercent,c=n.x,d=n.y,f=n.z,h=n.rotation,m=n.rotationY,x=n.rotationX,b=n.skewX,v=n.skewY,_=n.scaleX,w=n.scaleY,S=n.transformPerspective,E=n.force3D,M=n.target,A=n.zOrigin,O="",z=E==="auto"&&t&&t!==1||E===!0;if(A&&(x!==Fr||m!==Fr)){var H=parseFloat(m)*ro,j=Math.sin(H),F=Math.cos(H),U;H=parseFloat(x)*ro,U=Math.cos(H),c=D0(M,c,j*U*-A),d=D0(M,d,-Math.sin(H)*-A),f=D0(M,f,F*U*-A+A)}S!==mc&&(O+="perspective("+S+Pr),(r||l)&&(O+="translate("+r+"%, "+l+"%) "),(z||c!==mc||d!==mc||f!==mc)&&(O+=f!==mc||z?"translate3d("+c+", "+d+", "+f+") ":"translate("+c+", "+d+Pr),h!==Fr&&(O+="rotate("+h+Pr),m!==Fr&&(O+="rotateY("+m+Pr),x!==Fr&&(O+="rotateX("+x+Pr),(b!==Fr||v!==Fr)&&(O+="skew("+b+", "+v+Pr),(_!==1||w!==1)&&(O+="scale("+_+", "+w+Pr),M.style[qe]=O||"translate(0, 0)"},BM=function(t,i){var n=i||this,r=n.xPercent,l=n.yPercent,c=n.x,d=n.y,f=n.rotation,h=n.skewX,m=n.skewY,x=n.scaleX,b=n.scaleY,v=n.target,_=n.xOrigin,w=n.yOrigin,S=n.xOffset,E=n.yOffset,M=n.forceCSS,A=parseFloat(c),O=parseFloat(d),z,H,j,F,U;f=parseFloat(f),h=parseFloat(h),m=parseFloat(m),m&&(m=parseFloat(m),h+=m,f+=m),f||h?(f*=ro,h*=ro,z=Math.cos(f)*x,H=Math.sin(f)*x,j=Math.sin(f-h)*-b,F=Math.cos(f-h)*b,h&&(m*=ro,U=Math.tan(h-m),U=Math.sqrt(1+U*U),j*=U,F*=U,m&&(U=Math.tan(m),U=Math.sqrt(1+U*U),z*=U,H*=U)),z=ai(z),H=ai(H),j=ai(j),F=ai(F)):(z=x,F=b,H=j=0),(A&&!~(c+"").indexOf("px")||O&&!~(d+"").indexOf("px"))&&(A=xr(v,"x",c,"px"),O=xr(v,"y",d,"px")),(_||w||S||E)&&(A=ai(A+_-(_*z+w*j)+S),O=ai(O+w-(_*H+w*F)+E)),(r||l)&&(U=v.getBBox(),A=ai(A+r/100*U.width),O=ai(O+l/100*U.height)),U="matrix("+z+","+H+","+j+","+F+","+A+","+O+")",v.setAttribute("transform",U),M&&(v.style[qe]=U)},HM=function(t,i,n,r,l){var c=360,d=Ti(l),f=parseFloat(l)*(d&&~l.indexOf("rad")?Vr:1),h=f-r,m=r+h+"deg",x,b;return d&&(x=l.split("_")[1],x==="short"&&(h%=c,h!==h%(c/2)&&(h+=h<0?c:-c)),x==="cw"&&h<0?h=(h+c*Wy)%c-~~(h/c)*c:x==="ccw"&&h>0&&(h=(h-c*Wy)%c-~~(h/c)*c)),t._pt=b=new wn(t._pt,i,n,r,h,yM),b.e=m,b.u="deg",t._props.push(n),b},i1=function(t,i){for(var n in i)t[n]=i[n];return t},FM=function(t,i,n){var r=i1({},n._gsap),l="perspective,force3D,transformOrigin,svgOrigin",c=n.style,d,f,h,m,x,b,v,_;r.svg?(h=n.getAttribute("transform"),n.setAttribute("transform",""),c[qe]=i,d=lu(n,1),mr(n,qe),n.setAttribute("transform",h)):(h=getComputedStyle(n)[qe],c[qe]=i,d=lu(n,1),c[qe]=h);for(f in _s)h=r[f],m=d[f],h!==m&&l.indexOf(f)<0&&(v=Ui(h),_=Ui(m),x=v!==_?xr(n,f,h,_):parseFloat(h),b=parseFloat(m),t._pt=new wn(t._pt,d,f,x,b-x,xg),t._pt.u=_||0,t._props.push(f));i1(d,r)};yn("padding,margin,Width,Radius",function(a,t){var i="Top",n="Right",r="Bottom",l="Left",c=(t<3?[i,n,r,l]:[i+l,i+n,r+n,r+l]).map(function(d){return t<2?a+d:"border"+d+a});Nf[t>1?"border"+a:a]=function(d,f,h,m,x){var b,v;if(arguments.length<4)return b=c.map(function(_){return gs(d,_,h)}),v=b.join(" "),v.split(b[0]).length===5?b[0]:v;b=(m+"").split(" "),v={},c.forEach(function(_,w){return v[_]=b[w]=b[w]||b[(w-1)/2|0]}),d.init(f,v,x)}});var hm={name:"css",register:vg,targetTest:function(t){return t.style&&t.nodeType},init:function(t,i,n,r,l){var c=this._props,d=t.style,f=n.vars.startAt,h,m,x,b,v,_,w,S,E,M,A,O,z,H,j,F,U;cm||vg(),this.styles=this.styles||r_(t),F=this.styles.props,this.tween=n;for(w in i)if(w!=="autoRound"&&(m=i[w],!(Hn[w]&&Ww(w,i,n,r,t,l)))){if(v=typeof m,_=Nf[w],v==="function"&&(m=m.call(n,r,t,l),v=typeof m),v==="string"&&~m.indexOf("random(")&&(m=nu(m)),_)_(this,t,w,m,n)&&(j=1);else if(w.substr(0,2)==="--")h=(getComputedStyle(t).getPropertyValue(w)+"").trim(),m+="",ur.lastIndex=0,ur.test(h)||(S=Ui(h),E=Ui(m),E?S!==E&&(h=xr(t,w,h,E)+E):S&&(m+=S)),this.add(d,"setProperty",h,m,r,l,0,0,w),c.push(w),F.push(w,0,d[w]);else if(v!=="undefined"){if(f&&w in f?(h=typeof f[w]=="function"?f[w].call(n,r,t,l):f[w],Ti(h)&&~h.indexOf("random(")&&(h=nu(h)),Ui(h+"")||h==="auto"||(h+=qn.units[w]||Ui(gs(t,w))||""),(h+"").charAt(1)==="="&&(h=gs(t,w))):h=gs(t,w),b=parseFloat(h),M=v==="string"&&m.charAt(1)==="="&&m.substr(0,2),M&&(m=m.substr(2)),x=parseFloat(m),w in Ba&&(w==="autoAlpha"&&(b===1&&gs(t,"visibility")==="hidden"&&x&&(b=0),F.push("visibility",0,d.visibility),ir(this,d,"visibility",b?"inherit":"hidden",x?"inherit":"hidden",!x)),w!=="scale"&&w!=="transform"&&(w=Ba[w],~w.indexOf(",")&&(w=w.split(",")[0]))),A=w in _s,A){if(this.styles.save(w),U=m,v==="string"&&m.substring(0,6)==="var(--"){if(m=Gn(t,m.substring(4,m.indexOf(")"))),m.substring(0,5)==="calc("){var W=t.style.perspective;t.style.perspective=m,m=Gn(t,"perspective"),W?t.style.perspective=W:mr(t,"perspective")}x=parseFloat(m)}if(O||(z=t._gsap,z.renderTransform&&!i.parseTransform||lu(t,i.parseTransform),H=i.smoothOrigin!==!1&&z.smooth,O=this._pt=new wn(this._pt,d,qe,0,1,z.renderTransform,z,0,-1),O.dep=1),w==="scale")this._pt=new wn(this._pt,z,"scaleY",z.scaleY,(M?ao(z.scaleY,M+x):x)-z.scaleY||0,xg),this._pt.u=0,c.push("scaleY",w),w+="X";else if(w==="transformOrigin"){F.push(_n,0,d[_n]),m=DM(m),z.svg?yg(t,m,0,H,0,this):(E=parseFloat(m.split(" ")[2])||0,E!==z.zOrigin&&ir(this,z,"zOrigin",z.zOrigin,E),ir(this,d,w,Lf(h),Lf(m)));continue}else if(w==="svgOrigin"){yg(t,m,1,H,0,this);continue}else if(w in u_){HM(this,z,w,b,M?ao(b,M+m):m);continue}else if(w==="smoothOrigin"){ir(this,z,"smooth",z.smooth,m);continue}else if(w==="force3D"){z[w]=m;continue}else if(w==="transform"){FM(this,m,t);continue}}else w in d||(w=bo(w)||w);if(A||(x||x===0)&&(b||b===0)&&!vM.test(m)&&w in d)S=(h+"").substr((b+"").length),x||(x=0),E=Ui(m)||(w in qn.units?qn.units[w]:S),S!==E&&(b=xr(t,w,h,E)),this._pt=new wn(this._pt,A?z:d,w,b,(M?ao(b,M+x):x)-b,!A&&(E==="px"||w==="zIndex")&&i.autoRound!==!1?SM:xg),this._pt.u=E||0,A&&U!==m?(this._pt.b=h,this._pt.e=U,this._pt.r=_M):S!==E&&E!=="%"&&(this._pt.b=h,this._pt.r=wM);else if(w in d)jM.call(this,t,w,h,M?M+m:m);else if(w in t)this.add(t,w,h||t[w],M?M+m:m,r,l);else if(w!=="parseTransform"){Jg(w,m);continue}A||(w in d?F.push(w,0,d[w]):typeof t[w]=="function"?F.push(w,2,t[w]()):F.push(w,1,h||t[w])),c.push(w)}}j&&e_(this)},render:function(t,i){if(i.tween._time||!um())for(var n=i._pt;n;)n.r(t,n.d),n=n._next;else i.styles.revert()},get:gs,aliases:Ba,getSetter:function(t,i,n){var r=Ba[i];return r&&r.indexOf(",")<0&&(i=r),i in _s&&i!==_n&&(t._gsap.x||gs(t,"x"))?n&&$y===n?i==="scale"?MM:EM:($y=n||{})&&(i==="scale"?CM:AM):t.style&&!Qg(t.style[i])?kM:~i.indexOf("-")?TM:lm(t,i)},core:{_removeProperty:mr,_getMatrix:fm}};kn.utils.checkPrefix=bo;kn.core.getStyleSaver=r_;(function(a,t,i,n){var r=yn(a+","+t+","+i,function(l){_s[l]=1});yn(t,function(l){qn.units[l]="deg",u_[l]=1}),Ba[r[13]]=a+","+t,yn(n,function(l){var c=l.split(":");Ba[c[1]]=r[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");yn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){qn.units[a]="px"});kn.registerPlugin(hm);var Di=kn.registerPlugin(hm)||kn,PM=Di.core.Tween;const UM=Object.freeze(Object.defineProperty({__proto__:null,Back:dM,Bounce:hM,CSSPlugin:hm,Circ:mM,Cubic:rM,Elastic:uM,Expo:gM,Linear:aM,Power0:JE,Power1:tM,Power2:eM,Power3:iM,Power4:nM,Quad:sM,Quart:lM,Quint:oM,Sine:pM,SteppedEase:fM,Strong:cM,TimelineLite:ji,TimelineMax:ji,TweenLite:si,TweenMax:PM,default:Di,gsap:Di},Symbol.toStringTag,{value:"Module"}));function YM(a,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function GM(a,t,i){return t&&YM(a.prototype,t),a}var fe,Hd,Ki,Ks,Cc,os,Ir,n1,Nt,Na,Fd,a1,s1,r1,l1,h_=function(){return typeof window<"u"},p_=function(){return fe||h_()&&(fe=window.gsap)&&fe.registerPlugin&&fe},qM=function(t){return Math.round(t*1e5)/1e5||0},Qs=function(t){return Nt.maxScroll(t||Ki)},VM=function(t,i){var n=t.parentNode||Cc,r=t.getBoundingClientRect(),l=n.getBoundingClientRect(),c=l.top-r.top,d=l.bottom-r.bottom,f=(Math.abs(c)>Math.abs(d)?c:d)/(1-i),h=-f*i,m,x;return f>0&&(m=l.height/(Ki.innerHeight+l.height),x=m===.5?l.height*2:Math.min(l.height,Math.abs(-f*m/(2*m-1)))*2*(i||1),h+=i?-x*i:-x/2,f+=x),{change:f,offset:h}},IM=function(t){var i=Ks.querySelector(".ScrollSmoother-wrapper");return i||(i=Ks.createElement("div"),i.classList.add("ScrollSmoother-wrapper"),t.parentNode.insertBefore(i,t),i.appendChild(t)),i},Xn=(function(){function a(t){var i=this;Hd||a.register(fe)||console.warn("Please gsap.registerPlugin(ScrollSmoother)"),t=this.vars=t||{},Na&&Na.kill(),Na=this,r1(this);var n=t,r=n.smoothTouch,l=n.onUpdate,c=n.onStop,d=n.smooth,f=n.onFocusIn,h=n.normalizeScroll,m=n.wholePixels,x,b,v,_,w,S,E,M,A,O,z,H,j,F,U=this,W=t.effectsPrefix||"",et=Nt.getScrollFunc(Ki),Y=Nt.isTouch===1?r===!0?.8:parseFloat(r)||0:d===0||d===!1?0:parseFloat(d)||.8,at=Y&&+t.speed||1,ct=0,lt=0,B=1,X=a1(0),st=function(){return X.update(-ct)},ut={y:0},D=function(){return x.style.overflow="visible"},C,$=function(G){G.update();var rt=G.getTween();rt&&(rt.pause(),rt._time=rt._dur,rt._tTime=rt._tDur),C=!1,G.animation.progress(G.progress,!0)},nt=function(G,rt){(G!==ct&&!O||rt)&&(m&&(G=Math.round(G)),Y&&(x.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+G+", 0, 1)",x._gsap.y=G+"px"),lt=G-ct,ct=G,Nt.isUpdating||a.isRefreshing||Nt.update())},it=function(G){return arguments.length?(G<0&&(G=0),ut.y=-G,C=!0,O?ct=-G:nt(-G),Nt.isRefreshing?_.update():et(G/at),this):-ct},ft=typeof ResizeObserver<"u"&&t.autoResize!==!1&&new ResizeObserver(function(){if(!Nt.isRefreshing){var ot=Qs(b)*at;ot<-ct&&it(ot),l1.restart(!0)}}),ht,St=function(G){b.scrollTop=0,!(G.target.contains&&G.target.contains(b)||f&&f(i,G)===!1)&&(Nt.isInViewport(G.target)||G.target===ht||i.scrollTo(G.target,!1,"center center"),ht=G.target)},te=function(G,rt){if(G<rt.start)return G;var bt=isNaN(rt.ratio)?1:rt.ratio,Tt=rt.end-rt.start,vt=G-rt.start,Bt=rt.offset||0,Oe=rt.pins||[],Ot=Oe.offset||0,ce=rt._startClamp&&rt.start<=0||rt.pins&&rt.pins.offset?0:rt._endClamp&&rt.end===Qs()?1:.5;return Oe.forEach(function(ie){Tt-=ie.distance,ie.nativeStart<=G&&(vt-=ie.distance)}),Ot&&(vt*=(Tt-Ot/bt)/Tt),G+(vt-Bt*ce)/bt-vt},Lt=function ot(G,rt,bt){bt||(G.pins.length=G.pins.offset=0);var Tt=G.pins,vt=G.markers,Bt,Oe,Ot,ce,ie,Ht,ti,pt;for(ti=0;ti<rt.length;ti++)if(pt=rt[ti],G.trigger&&pt.trigger&&G!==pt&&(pt.trigger===G.trigger||pt.pinnedContainer===G.trigger||G.trigger.contains(pt.trigger))&&(ie=pt._startNative||pt._startClamp||pt.start,Ht=pt._endNative||pt._endClamp||pt.end,Ot=te(ie,G),ce=pt.pin&&Ht>0?Ot+(Ht-ie):te(Ht,G),pt.setPositions(Ot,ce,!0,(pt._startClamp?Math.max(0,Ot):Ot)-ie),pt.markerStart&&vt.push(fe.quickSetter([pt.markerStart,pt.markerEnd],"y","px")),pt.pin&&pt.end>0&&!bt)){if(Bt=pt.end-pt.start,Oe=G._startClamp&&pt.start<0,Oe){if(G.start>0){G.setPositions(0,G.end+(G._startNative-G.start),!0),ot(G,rt);return}Bt+=pt.start,Tt.offset=-pt.start}Tt.push({start:pt.start,nativeStart:ie,end:pt.end,distance:Bt,trig:pt}),G.setPositions(G.start,G.end+(Oe?-pt.start:Bt),!0)}},Ei=function(G,rt){w.forEach(function(bt){return Lt(bt,G,rt)})},Ne=function(){Cc=Ks.documentElement,os=Ks.body,D(),requestAnimationFrame(D),w&&(Nt.getAll().forEach(function(G){G._startNative=G.start,G._endNative=G.end}),w.forEach(function(G){var rt=G._startClamp||G.start,bt=G.autoSpeed?Math.min(Qs(),G.end):rt+Math.abs((G.end-rt)/G.ratio),Tt=bt-G.end;if(rt-=Tt/2,bt-=Tt/2,rt>bt){var vt=rt;rt=bt,bt=vt}G._startClamp&&rt<0?(bt=G.ratio<0?Qs():G.end/G.ratio,Tt=bt-G.end,rt=0):(G.ratio<0||G._endClamp&&bt>=Qs())&&(bt=Qs(),rt=G.ratio<0||G.ratio>1?0:bt-(bt-G.start)/G.ratio,Tt=(bt-rt)*G.ratio-(G.end-G.start)),G.offset=Tt||1e-4,G.pins.length=G.pins.offset=0,G.setPositions(rt,bt,!0)}),Ei(Nt.sort())),X.reset()},Le=function(){return Nt.addEventListener("refresh",Ne)},Yt=function(){return w&&w.forEach(function(G){return G.vars.onRefresh(G)})},oe=function(){return w&&w.forEach(function(G){return G.vars.onRefreshInit(G)}),Yt},Je=function(G,rt,bt,Tt){return function(){var vt=typeof rt=="function"?rt(bt,Tt):rt;vt||vt===0||(vt=Tt.getAttribute("data-"+W+G)||(G==="speed"?1:0)),Tt.setAttribute("data-"+W+G,vt);var Bt=(vt+"").substr(0,6)==="clamp(";return{clamp:Bt,value:Bt?vt.substr(6,vt.length-7):vt}}},pi=function(G,rt,bt,Tt,vt){vt=(typeof vt=="function"?vt(Tt,G):vt)||0;var Bt=Je("speed",rt,Tt,G),Oe=Je("lag",bt,Tt,G),Ot=fe.getProperty(G,"y"),ce=G._gsap,ie,Ht,ti,pt,an,xe,Xe=[],Be=function(){rt=Bt(),bt=parseFloat(Oe().value),ie=parseFloat(rt.value)||1,ti=rt.value==="auto",an=ti||Ht&&Ht._startClamp&&Ht.start<=0||Xe.offset?0:Ht&&Ht._endClamp&&Ht.end===Qs()?1:.5,pt&&pt.kill(),pt=bt&&fe.to(G,{ease:Fd,overwrite:!1,y:"+=0",duration:bt}),Ht&&(Ht.ratio=ie,Ht.autoSpeed=ti)},sn=function(){ce.y=Ot+"px",ce.renderTransform(1),Be()},Tn=[],At=0,qi=function(Zt){if(ti){sn();var ae=VM(G,n1(0,1,-Zt.start/(Zt.end-Zt.start)));At=ae.change,xe=ae.offset}else xe=Xe.offset||0,At=(Zt.end-Zt.start-xe)*(1-ie);Xe.forEach(function(yi){return At-=yi.distance*(1-ie)}),Zt.offset=At||.001,Zt.vars.onUpdate(Zt),pt&&pt.progress(1)};return Be(),(ie!==1||ti||pt)&&(Ht=Nt.create({trigger:ti?G.parentNode:G,start:function(){return rt.clamp?"clamp(top bottom+="+vt+")":"top bottom+="+vt},end:function(){return rt.value<0?"max":rt.clamp?"clamp(bottom top-="+vt+")":"bottom top-="+vt},scroller:b,scrub:!0,refreshPriority:-999,onRefreshInit:sn,onRefresh:qi,onKill:function(Zt){var ae=w.indexOf(Zt);ae>=0&&w.splice(ae,1),sn()},onUpdate:function(Zt){var ae=Ot+At*(Zt.progress-an),yi=Xe.length,Mi=0,$e,rn,Et;if(Zt.offset){if(yi){for(rn=-ct,Et=Zt.end;yi--;){if($e=Xe[yi],$e.trig.isActive||rn>=$e.start&&rn<=$e.end){pt&&($e.trig.progress+=$e.trig.direction<0?.001:-.001,$e.trig.update(0,0,1),pt.resetTo("y",parseFloat(ce.y),-lt,!0),B&&pt.progress(1));return}rn>$e.end&&(Mi+=$e.distance),Et-=$e.distance}ae=Ot+Mi+At*((fe.utils.clamp(Zt.start,Zt.end,rn)-Zt.start-Mi)/(Et-Zt.start)-an)}Tn.length&&!ti&&Tn.forEach(function(yt){return yt(ae-Mi)}),ae=qM(ae+xe),pt?(pt.resetTo("y",ae,-lt,!0),B&&pt.progress(1)):(ce.y=ae+"px",ce.renderTransform(1))}}}),qi(Ht),fe.core.getCache(Ht.trigger).stRevert=oe,Ht.startY=Ot,Ht.pins=Xe,Ht.markers=Tn,Ht.ratio=ie,Ht.autoSpeed=ti,G.style.willChange="transform"),Ht};Le(),Nt.addEventListener("killAll",Le),fe.delayedCall(.5,function(){return B=0}),this.scrollTop=it,this.scrollTo=function(ot,G,rt){var bt=fe.utils.clamp(0,Qs(),isNaN(ot)?i.offset(ot,rt,!!G&&!O):+ot);G?O?fe.to(i,{duration:Y,scrollTop:bt,overwrite:"auto",ease:Fd}):et(bt):it(bt)},this.offset=function(ot,G,rt){ot=Ir(ot)[0];var bt=ot.style.cssText,Tt=Nt.create({trigger:ot,start:G||"top top"}),vt;return w&&(B?Nt.refresh():Ei([Tt],!0)),vt=Tt.start/(rt?at:1),Tt.kill(!1),ot.style.cssText=bt,fe.core.getCache(ot).uncache=1,vt};function Q(){return v=x.clientHeight,x.style.overflow="visible",os.style.height=Ki.innerHeight+(v-Ki.innerHeight)/at+"px",v-Ki.innerHeight}this.content=function(ot){if(arguments.length){var G=Ir(ot||"#smooth-content")[0]||console.warn("ScrollSmoother needs a valid content element.")||os.children[0];return G!==x&&(x=G,A=x.getAttribute("style")||"",ft&&ft.observe(x),fe.set(x,{overflow:"visible",width:"100%",boxSizing:"border-box",y:"+=0"}),Y||fe.set(x,{clearProps:"transform"})),this}return x},this.wrapper=function(ot){return arguments.length?(b=Ir(ot||"#smooth-wrapper")[0]||IM(x),M=b.getAttribute("style")||"",Q(),fe.set(b,Y?{overflow:"hidden",position:"fixed",height:"100%",width:"100%",top:0,left:0,right:0,bottom:0}:{overflow:"visible",position:"relative",width:"100%",height:"auto",top:"auto",bottom:"auto",left:"auto",right:"auto"}),this):b},this.effects=function(ot,G){var rt;if(w||(w=[]),!ot)return w.slice(0);ot=Ir(ot),ot.forEach(function(ie){for(var Ht=w.length;Ht--;)w[Ht].trigger===ie&&w[Ht].kill()}),G=G||{};var bt=G,Tt=bt.speed,vt=bt.lag,Bt=bt.effectsPadding,Oe=[],Ot,ce;for(Ot=0;Ot<ot.length;Ot++)ce=pi(ot[Ot],Tt,vt,Ot,Bt),ce&&Oe.push(ce);return(rt=w).push.apply(rt,Oe),G.refresh!==!1&&Nt.refresh(),Oe},this.sections=function(ot,G){var rt;if(S||(S=[]),!ot)return S.slice(0);var bt=Ir(ot).map(function(Tt){return Nt.create({trigger:Tt,start:"top 120%",end:"bottom -20%",onToggle:function(Bt){Tt.style.opacity=Bt.isActive?"1":"0",Tt.style.pointerEvents=Bt.isActive?"all":"none"}})});return G&&G.add?(rt=S).push.apply(rt,bt):S=bt.slice(0),bt},this.content(t.content),this.wrapper(t.wrapper),this.render=function(ot){return nt(ot||ot===0?ot:ct)},this.getVelocity=function(){return X.getVelocity(-ct)},Nt.scrollerProxy(b,{scrollTop:it,scrollHeight:function(){return Q()&&os.scrollHeight},fixedMarkers:t.fixedMarkers!==!1&&!!Y,content:x,getBoundingClientRect:function(){return{top:0,left:0,width:Ki.innerWidth,height:Ki.innerHeight}}}),Nt.defaults({scroller:b});var gi=Nt.getAll().filter(function(ot){return ot.scroller===Ki||ot.scroller===b});gi.forEach(function(ot){return ot.revert(!0,!0)}),_=Nt.create({animation:fe.fromTo(ut,{y:function(){return F=0,0}},{y:function(){return F=1,-Q()},immediateRender:!1,ease:"none",data:"ScrollSmoother",duration:100,onUpdate:function(){if(F){var G=C;G&&($(_),ut.y=ct),nt(ut.y,G),st(),l&&!O&&l(U)}}}),onRefreshInit:function(G){if(!a.isRefreshing){if(a.isRefreshing=!0,w){var rt=Nt.getAll().filter(function(Tt){return!!Tt.pin});w.forEach(function(Tt){Tt.vars.pinnedContainer||rt.forEach(function(vt){if(vt.pin.contains(Tt.trigger)){var Bt=Tt.vars;Bt.pinnedContainer=vt.pin,Tt.vars=null,Tt.init(Bt,Tt.animation)}})})}var bt=G.getTween();j=bt&&bt._end>bt._dp._time,H=ct,ut.y=0,Y&&(Nt.isTouch===1&&(b.style.position="absolute"),b.scrollTop=0,Nt.isTouch===1&&(b.style.position="fixed"))}},onRefresh:function(G){G.animation.invalidate(),ut.y=0,G.setPositions(G.start,Q()/at),j||$(G),ut.y=-et()*at,nt(ut.y),B||(j&&(C=!1),G.animation.progress(fe.utils.clamp(0,1,H/at/-G.end))),j&&(G.progress-=.001,G.update()),a.isRefreshing=!1},id:"ScrollSmoother",scroller:Ki,invalidateOnRefresh:!0,start:0,refreshPriority:-9999,end:function(){return Q()/at},onScrubComplete:function(){X.reset(),c&&c(i)},scrub:Y||!0}),this.smooth=function(ot){return arguments.length&&(Y=ot||0,at=Y&&+t.speed||1,_.scrubDuration(ot)),_.getTween()?_.getTween().duration():0},_.getTween()&&(_.getTween().vars.ease=t.ease||Fd),this.scrollTrigger=_,t.effects&&this.effects(t.effects===!0?"[data-"+W+"speed], [data-"+W+"lag]":t.effects,{effectsPadding:t.effectsPadding,refresh:!1}),t.sections&&this.sections(t.sections===!0?"[data-section]":t.sections),gi.forEach(function(ot){ot.vars.scroller=b,ot.revert(!1,!0),ot.init(ot.vars,ot.animation)}),this.paused=function(ot,G){return arguments.length?(!!O!==ot&&(ot?(_.getTween()&&_.getTween().pause(),et(-ct/at),X.reset(),z=Nt.normalizeScroll(),z&&z.disable(),O=Nt.observe({preventDefault:!0,type:"wheel,touch,scroll",debounce:!1,allowClicks:!0,onChangeY:function(){return it(-ct)}}),O.nested=s1(Cc,"wheel,touch,scroll",!0,G!==!1)):(O.nested.kill(),O.kill(),O=0,z&&z.enable(),_.progress=(-ct/at-_.start)/(_.end-_.start),$(_))),this):!!O},this.kill=this.revert=function(){i.paused(!1),$(_),_.kill();for(var ot=(w||[]).concat(S||[]),G=ot.length;G--;)ot[G].kill();Nt.scrollerProxy(b),Nt.removeEventListener("killAll",Le),Nt.removeEventListener("refresh",Ne),b.style.cssText=M,x.style.cssText=A;var rt=Nt.defaults({});rt&&rt.scroller===b&&Nt.defaults({scroller:Ki}),i.normalizer&&Nt.normalizeScroll(!1),clearInterval(E),Na=null,ft&&ft.disconnect(),os.style.removeProperty("height"),Ki.removeEventListener("focusin",St)},this.refresh=function(ot,G){return _.refresh(ot,G)},h&&(this.normalizer=Nt.normalizeScroll(h===!0?{debounce:!0,content:!Y&&x}:h)),Nt.config(t),"scrollBehavior"in Ki.getComputedStyle(os)&&fe.set([os,Cc],{scrollBehavior:"auto"}),Ki.addEventListener("focusin",St),E=setInterval(st,250),Ks.readyState==="loading"||requestAnimationFrame(function(){return Nt.refresh()})}return a.register=function(i){return Hd||(fe=i||p_(),h_()&&window.document&&(Ki=window,Ks=document,Cc=Ks.documentElement,os=Ks.body),fe&&(Ir=fe.utils.toArray,n1=fe.utils.clamp,Fd=fe.parseEase("expo"),r1=fe.core.context||function(){},Nt=fe.core.globals().ScrollTrigger,fe.core.globals("ScrollSmoother",a),os&&Nt&&(l1=fe.delayedCall(.2,function(){return Nt.isRefreshing||Na&&Na.refresh()}).pause(),a1=Nt.core._getVelocityProp,s1=Nt.core._inputObserver,a.refresh=Nt.refresh,Hd=1))),Hd},GM(a,[{key:"progress",get:function(){return this.scrollTrigger?this.scrollTrigger.animation._time/100:0}}]),a})();Xn.version="3.14.2";Xn.create=function(a){return Na&&a&&Na.content()===Ir(a.content)[0]?Na:new Xn(a)};Xn.get=function(){return Na};p_()&&fe.registerPlugin(Xn);function XM(a,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function $M(a,t,i){return t&&XM(a.prototype,t),a}var Ni,vf,Un,nr,ar,lo,g_,Xr,Pc,m_,bs,ba,x_,b_=function(){return Ni||typeof window<"u"&&(Ni=window.gsap)&&Ni.registerPlugin&&Ni},v_=1,io=[],It=[],Ua=[],Uc=Date.now,wg=function(t,i){return i},WM=function(){var t=Pc.core,i=t.bridge||{},n=t._scrollers,r=t._proxies;n.push.apply(n,It),r.push.apply(r,Ua),It=n,Ua=r,wg=function(c,d){return i[c](d)}},dr=function(t,i){return~Ua.indexOf(t)&&Ua[Ua.indexOf(t)+1][i]},Yc=function(t){return!!~m_.indexOf(t)},Qi=function(t,i,n,r,l){return t.addEventListener(i,n,{passive:r!==!1,capture:!!l})},$i=function(t,i,n,r){return t.removeEventListener(i,n,!!r)},Pd="scrollLeft",Ud="scrollTop",_g=function(){return bs&&bs.isPressed||It.cache++},Bf=function(t,i){var n=function r(l){if(l||l===0){v_&&(Un.history.scrollRestoration="manual");var c=bs&&bs.isPressed;l=r.v=Math.round(l)||(bs&&bs.iOS?1:0),t(l),r.cacheID=It.cache,c&&wg("ss",l)}else(i||It.cache!==r.cacheID||wg("ref"))&&(r.cacheID=It.cache,r.v=t());return r.v+r.offset};return n.offset=0,t&&n},nn={s:Pd,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Bf(function(a){return arguments.length?Un.scrollTo(a,bi.sc()):Un.pageXOffset||nr[Pd]||ar[Pd]||lo[Pd]||0})},bi={s:Ud,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:nn,sc:Bf(function(a){return arguments.length?Un.scrollTo(nn.sc(),a):Un.pageYOffset||nr[Ud]||ar[Ud]||lo[Ud]||0})},mn=function(t,i){return(i&&i._ctx&&i._ctx.selector||Ni.utils.toArray)(t)[0]||(typeof t=="string"&&Ni.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},QM=function(t,i){for(var n=i.length;n--;)if(i[n]===t||i[n].contains(t))return!0;return!1},br=function(t,i){var n=i.s,r=i.sc;Yc(t)&&(t=nr.scrollingElement||ar);var l=It.indexOf(t),c=r===bi.sc?1:2;!~l&&(l=It.push(t)-1),It[l+c]||Qi(t,"scroll",_g);var d=It[l+c],f=d||(It[l+c]=Bf(dr(t,n),!0)||(Yc(t)?r:Bf(function(h){return arguments.length?t[n]=h:t[n]})));return f.target=t,d||(f.smooth=Ni.getProperty(t,"scrollBehavior")==="smooth"),f},Sg=function(t,i,n){var r=t,l=t,c=Uc(),d=c,f=i||50,h=Math.max(500,f*3),m=function(_,w){var S=Uc();w||S-c>f?(l=r,r=_,d=c,c=S):n?r+=_:r=l+(_-l)/(S-d)*(c-d)},x=function(){l=r=n?0:r,d=c=0},b=function(_){var w=d,S=l,E=Uc();return(_||_===0)&&_!==r&&m(_),c===d||E-d>h?0:(r+(n?S:-S))/((n?E:c)-w)*1e3};return{update:m,reset:x,getVelocity:b}},xc=function(t,i){return i&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},o1=function(t){var i=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(i)>=Math.abs(n)?i:n},y_=function(){Pc=Ni.core.globals().ScrollTrigger,Pc&&Pc.core&&WM()},w_=function(t){return Ni=t||b_(),!vf&&Ni&&typeof document<"u"&&document.body&&(Un=window,nr=document,ar=nr.documentElement,lo=nr.body,m_=[Un,nr,ar,lo],Ni.utils.clamp,x_=Ni.core.context||function(){},Xr="onpointerenter"in lo?"pointer":"mouse",g_=ri.isTouch=Un.matchMedia&&Un.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Un||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ba=ri.eventTypes=("ontouchstart"in ar?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ar?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return v_=0},500),y_(),vf=1),vf};nn.op=bi;It.cache=0;var ri=(function(){function a(i){this.init(i)}var t=a.prototype;return t.init=function(n){vf||w_(Ni)||console.warn("Please gsap.registerPlugin(Observer)"),Pc||y_();var r=n.tolerance,l=n.dragMinimum,c=n.type,d=n.target,f=n.lineHeight,h=n.debounce,m=n.preventDefault,x=n.onStop,b=n.onStopDelay,v=n.ignore,_=n.wheelSpeed,w=n.event,S=n.onDragStart,E=n.onDragEnd,M=n.onDrag,A=n.onPress,O=n.onRelease,z=n.onRight,H=n.onLeft,j=n.onUp,F=n.onDown,U=n.onChangeX,W=n.onChangeY,et=n.onChange,Y=n.onToggleX,at=n.onToggleY,ct=n.onHover,lt=n.onHoverEnd,B=n.onMove,X=n.ignoreCheck,st=n.isNormalizer,ut=n.onGestureStart,D=n.onGestureEnd,C=n.onWheel,$=n.onEnable,nt=n.onDisable,it=n.onClick,ft=n.scrollSpeed,ht=n.capture,St=n.allowClicks,te=n.lockAxis,Lt=n.onLockAxis;this.target=d=mn(d)||ar,this.vars=n,v&&(v=Ni.utils.toArray(v)),r=r||1e-9,l=l||0,_=_||1,ft=ft||1,c=c||"wheel,touch,pointer",h=h!==!1,f||(f=parseFloat(Un.getComputedStyle(lo).lineHeight)||22);var Ei,Ne,Le,Yt,oe,Je,pi,Q=this,gi=0,ot=0,G=n.passive||!m&&n.passive!==!1,rt=br(d,nn),bt=br(d,bi),Tt=rt(),vt=bt(),Bt=~c.indexOf("touch")&&!~c.indexOf("pointer")&&ba[0]==="pointerdown",Oe=Yc(d),Ot=d.ownerDocument||nr,ce=[0,0,0],ie=[0,0,0],Ht=0,ti=function(){return Ht=Uc()},pt=function(yt,ne){return(Q.event=yt)&&v&&QM(yt.target,v)||ne&&Bt&&yt.pointerType!=="touch"||X&&X(yt,ne)},an=function(){Q._vx.reset(),Q._vy.reset(),Ne.pause(),x&&x(Q)},xe=function(){var yt=Q.deltaX=o1(ce),ne=Q.deltaY=o1(ie),dt=Math.abs(yt)>=r,zt=Math.abs(ne)>=r;et&&(dt||zt)&&et(Q,yt,ne,ce,ie),dt&&(z&&Q.deltaX>0&&z(Q),H&&Q.deltaX<0&&H(Q),U&&U(Q),Y&&Q.deltaX<0!=gi<0&&Y(Q),gi=Q.deltaX,ce[0]=ce[1]=ce[2]=0),zt&&(F&&Q.deltaY>0&&F(Q),j&&Q.deltaY<0&&j(Q),W&&W(Q),at&&Q.deltaY<0!=ot<0&&at(Q),ot=Q.deltaY,ie[0]=ie[1]=ie[2]=0),(Yt||Le)&&(B&&B(Q),Le&&(S&&Le===1&&S(Q),M&&M(Q),Le=0),Yt=!1),Je&&!(Je=!1)&&Lt&&Lt(Q),oe&&(C(Q),oe=!1),Ei=0},Xe=function(yt,ne,dt){ce[dt]+=yt,ie[dt]+=ne,Q._vx.update(yt),Q._vy.update(ne),h?Ei||(Ei=requestAnimationFrame(xe)):xe()},Be=function(yt,ne){te&&!pi&&(Q.axis=pi=Math.abs(yt)>Math.abs(ne)?"x":"y",Je=!0),pi!=="y"&&(ce[2]+=yt,Q._vx.update(yt,!0)),pi!=="x"&&(ie[2]+=ne,Q._vy.update(ne,!0)),h?Ei||(Ei=requestAnimationFrame(xe)):xe()},sn=function(yt){if(!pt(yt,1)){yt=xc(yt,m);var ne=yt.clientX,dt=yt.clientY,zt=ne-Q.x,wt=dt-Q.y,Mt=Q.isDragging;Q.x=ne,Q.y=dt,(Mt||(zt||wt)&&(Math.abs(Q.startX-ne)>=l||Math.abs(Q.startY-dt)>=l))&&(Le||(Le=Mt?2:1),Mt||(Q.isDragging=!0),Be(zt,wt))}},Tn=Q.onPress=function(Et){pt(Et,1)||Et&&Et.button||(Q.axis=pi=null,Ne.pause(),Q.isPressed=!0,Et=xc(Et),gi=ot=0,Q.startX=Q.x=Et.clientX,Q.startY=Q.y=Et.clientY,Q._vx.reset(),Q._vy.reset(),Qi(st?d:Ot,ba[1],sn,G,!0),Q.deltaX=Q.deltaY=0,A&&A(Q))},At=Q.onRelease=function(Et){if(!pt(Et,1)){$i(st?d:Ot,ba[1],sn,!0);var yt=!isNaN(Q.y-Q.startY),ne=Q.isDragging,dt=ne&&(Math.abs(Q.x-Q.startX)>3||Math.abs(Q.y-Q.startY)>3),zt=xc(Et);!dt&&yt&&(Q._vx.reset(),Q._vy.reset(),m&&St&&Ni.delayedCall(.08,function(){if(Uc()-Ht>300&&!Et.defaultPrevented){if(Et.target.click)Et.target.click();else if(Ot.createEvent){var wt=Ot.createEvent("MouseEvents");wt.initMouseEvent("click",!0,!0,Un,1,zt.screenX,zt.screenY,zt.clientX,zt.clientY,!1,!1,!1,!1,0,null),Et.target.dispatchEvent(wt)}}})),Q.isDragging=Q.isGesturing=Q.isPressed=!1,x&&ne&&!st&&Ne.restart(!0),Le&&xe(),E&&ne&&E(Q),O&&O(Q,dt)}},qi=function(yt){return yt.touches&&yt.touches.length>1&&(Q.isGesturing=!0)&&ut(yt,Q.isDragging)},He=function(){return(Q.isGesturing=!1)||D(Q)},Zt=function(yt){if(!pt(yt)){var ne=rt(),dt=bt();Xe((ne-Tt)*ft,(dt-vt)*ft,1),Tt=ne,vt=dt,x&&Ne.restart(!0)}},ae=function(yt){if(!pt(yt)){yt=xc(yt,m),C&&(oe=!0);var ne=(yt.deltaMode===1?f:yt.deltaMode===2?Un.innerHeight:1)*_;Xe(yt.deltaX*ne,yt.deltaY*ne,0),x&&!st&&Ne.restart(!0)}},yi=function(yt){if(!pt(yt)){var ne=yt.clientX,dt=yt.clientY,zt=ne-Q.x,wt=dt-Q.y;Q.x=ne,Q.y=dt,Yt=!0,x&&Ne.restart(!0),(zt||wt)&&Be(zt,wt)}},Mi=function(yt){Q.event=yt,ct(Q)},$e=function(yt){Q.event=yt,lt(Q)},rn=function(yt){return pt(yt)||xc(yt,m)&&it(Q)};Ne=Q._dc=Ni.delayedCall(b||.25,an).pause(),Q.deltaX=Q.deltaY=0,Q._vx=Sg(0,50,!0),Q._vy=Sg(0,50,!0),Q.scrollX=rt,Q.scrollY=bt,Q.isDragging=Q.isGesturing=Q.isPressed=!1,x_(this),Q.enable=function(Et){return Q.isEnabled||(Qi(Oe?Ot:d,"scroll",_g),c.indexOf("scroll")>=0&&Qi(Oe?Ot:d,"scroll",Zt,G,ht),c.indexOf("wheel")>=0&&Qi(d,"wheel",ae,G,ht),(c.indexOf("touch")>=0&&g_||c.indexOf("pointer")>=0)&&(Qi(d,ba[0],Tn,G,ht),Qi(Ot,ba[2],At),Qi(Ot,ba[3],At),St&&Qi(d,"click",ti,!0,!0),it&&Qi(d,"click",rn),ut&&Qi(Ot,"gesturestart",qi),D&&Qi(Ot,"gestureend",He),ct&&Qi(d,Xr+"enter",Mi),lt&&Qi(d,Xr+"leave",$e),B&&Qi(d,Xr+"move",yi)),Q.isEnabled=!0,Q.isDragging=Q.isGesturing=Q.isPressed=Yt=Le=!1,Q._vx.reset(),Q._vy.reset(),Tt=rt(),vt=bt(),Et&&Et.type&&Tn(Et),$&&$(Q)),Q},Q.disable=function(){Q.isEnabled&&(io.filter(function(Et){return Et!==Q&&Yc(Et.target)}).length||$i(Oe?Ot:d,"scroll",_g),Q.isPressed&&(Q._vx.reset(),Q._vy.reset(),$i(st?d:Ot,ba[1],sn,!0)),$i(Oe?Ot:d,"scroll",Zt,ht),$i(d,"wheel",ae,ht),$i(d,ba[0],Tn,ht),$i(Ot,ba[2],At),$i(Ot,ba[3],At),$i(d,"click",ti,!0),$i(d,"click",rn),$i(Ot,"gesturestart",qi),$i(Ot,"gestureend",He),$i(d,Xr+"enter",Mi),$i(d,Xr+"leave",$e),$i(d,Xr+"move",yi),Q.isEnabled=Q.isPressed=Q.isDragging=!1,nt&&nt(Q))},Q.kill=Q.revert=function(){Q.disable();var Et=io.indexOf(Q);Et>=0&&io.splice(Et,1),bs===Q&&(bs=0)},io.push(Q),st&&Yc(d)&&(bs=Q),Q.enable(w)},$M(a,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),a})();ri.version="3.14.2";ri.create=function(a){return new ri(a)};ri.register=w_;ri.getAll=function(){return io.slice()};ri.getById=function(a){return io.filter(function(t){return t.vars.id===a})[0]};b_()&&Ni.registerPlugin(ri);var mt,Kl,Vt,Te,Fn,he,pm,Hf,ou,Gc,Ac,Yd,Fi,ah,kg,tn,c1,u1,Jl,__,N0,S_,Ji,Tg,k_,T_,Zs,Eg,gm,oo,mm,qc,Mg,L0,Gd=1,Pi=Date.now,B0=Pi(),fa=0,zc=0,d1=function(t,i,n){var r=Bn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+i+"Clamp"]=r,r?t.substr(6,t.length-7):t},f1=function(t,i){return i&&(!Bn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},ZM=function a(){return zc&&requestAnimationFrame(a)},h1=function(){return ah=1},p1=function(){return ah=0},Da=function(t){return t},Oc=function(t){return Math.round(t*1e5)/1e5||0},E_=function(){return typeof window<"u"},M_=function(){return mt||E_()&&(mt=window.gsap)&&mt.registerPlugin&&mt},ll=function(t){return!!~pm.indexOf(t)},C_=function(t){return(t==="Height"?mm:Vt["inner"+t])||Fn["client"+t]||he["client"+t]},A_=function(t){return dr(t,"getBoundingClientRect")||(ll(t)?function(){return kf.width=Vt.innerWidth,kf.height=mm,kf}:function(){return xs(t)})},KM=function(t,i,n){var r=n.d,l=n.d2,c=n.a;return(c=dr(t,"getBoundingClientRect"))?function(){return c()[r]}:function(){return(i?C_(l):t["client"+l])||0}},JM=function(t,i){return!i||~Ua.indexOf(t)?A_(t):function(){return kf}},Ha=function(t,i){var n=i.s,r=i.d2,l=i.d,c=i.a;return Math.max(0,(n="scroll"+r)&&(c=dr(t,n))?c()-A_(t)()[l]:ll(t)?(Fn[n]||he[n])-C_(r):t[n]-t["offset"+r])},qd=function(t,i){for(var n=0;n<Jl.length;n+=3)(!i||~i.indexOf(Jl[n+1]))&&t(Jl[n],Jl[n+1],Jl[n+2])},Bn=function(t){return typeof t=="string"},Yi=function(t){return typeof t=="function"},Rc=function(t){return typeof t=="number"},$r=function(t){return typeof t=="object"},bc=function(t,i,n){return t&&t.progress(i?0:1)&&n&&t.pause()},H0=function(t,i){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return i(t)}):i(t);n&&n.totalTime&&(t.callbackAnimation=n)}},Xl=Math.abs,z_="left",O_="top",xm="right",bm="bottom",nl="width",al="height",Vc="Right",Ic="Left",Xc="Top",$c="Bottom",fi="padding",oa="margin",vo="Width",vm="Height",xi="px",ca=function(t){return Vt.getComputedStyle(t)},tC=function(t){var i=ca(t).position;t.style.position=i==="absolute"||i==="fixed"?i:"relative"},g1=function(t,i){for(var n in i)n in t||(t[n]=i[n]);return t},xs=function(t,i){var n=i&&ca(t)[kg]!=="matrix(1, 0, 0, 1, 0, 0)"&&mt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=t.getBoundingClientRect();return n&&n.progress(0).kill(),r},Ff=function(t,i){var n=i.d2;return t["offset"+n]||t["client"+n]||0},R_=function(t){var i=[],n=t.labels,r=t.duration(),l;for(l in n)i.push(n[l]/r);return i},eC=function(t){return function(i){return mt.utils.snap(R_(t),i)}},ym=function(t){var i=mt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(r,l){return r-l});return n?function(r,l,c){c===void 0&&(c=.001);var d;if(!l)return i(r);if(l>0){for(r-=c,d=0;d<n.length;d++)if(n[d]>=r)return n[d];return n[d-1]}else for(d=n.length,r+=c;d--;)if(n[d]<=r)return n[d];return n[0]}:function(r,l,c){c===void 0&&(c=.001);var d=i(r);return!l||Math.abs(d-r)<c||d-r<0==l<0?d:i(l<0?r-t:r+t)}},iC=function(t){return function(i,n){return ym(R_(t))(i,n.direction)}},Vd=function(t,i,n,r){return n.split(",").forEach(function(l){return t(i,l,r)})},Si=function(t,i,n,r,l){return t.addEventListener(i,n,{passive:!r,capture:!!l})},_i=function(t,i,n,r){return t.removeEventListener(i,n,!!r)},Id=function(t,i,n){n=n&&n.wheelHandler,n&&(t(i,"wheel",n),t(i,"touchmove",n))},m1={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Xd={toggleActions:"play",anticipatePin:0},Pf={top:0,left:0,center:.5,bottom:1,right:1},yf=function(t,i){if(Bn(t)){var n=t.indexOf("="),r=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(r*=i/100),t=t.substr(0,n-1)),t=r+(t in Pf?Pf[t]*i:~t.indexOf("%")?parseFloat(t)*i/100:parseFloat(t)||0)}return t},$d=function(t,i,n,r,l,c,d,f){var h=l.startColor,m=l.endColor,x=l.fontSize,b=l.indent,v=l.fontWeight,_=Te.createElement("div"),w=ll(n)||dr(n,"pinType")==="fixed",S=t.indexOf("scroller")!==-1,E=w?he:n,M=t.indexOf("start")!==-1,A=M?h:m,O="border-color:"+A+";font-size:"+x+";color:"+A+";font-weight:"+v+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return O+="position:"+((S||f)&&w?"fixed;":"absolute;"),(S||f||!w)&&(O+=(r===bi?xm:bm)+":"+(c+parseFloat(b))+"px;"),d&&(O+="box-sizing:border-box;text-align:left;width:"+d.offsetWidth+"px;"),_._isStart=M,_.setAttribute("class","gsap-marker-"+t+(i?" marker-"+i:"")),_.style.cssText=O,_.innerText=i||i===0?t+"-"+i:t,E.children[0]?E.insertBefore(_,E.children[0]):E.appendChild(_),_._offset=_["offset"+r.op.d2],wf(_,0,r,M),_},wf=function(t,i,n,r){var l={display:"block"},c=n[r?"os2":"p2"],d=n[r?"p2":"os2"];t._isFlipped=r,l[n.a+"Percent"]=r?-100:0,l[n.a]=r?"1px":0,l["border"+c+vo]=1,l["border"+d+vo]=0,l[n.p]=i+"px",mt.set(t,l)},Ut=[],Cg={},cu,x1=function(){return Pi()-fa>34&&(cu||(cu=requestAnimationFrame(vs)))},$l=function(){(!Ji||!Ji.isPressed||Ji.startX>he.clientWidth)&&(It.cache++,Ji?cu||(cu=requestAnimationFrame(vs)):vs(),fa||cl("scrollStart"),fa=Pi())},F0=function(){T_=Vt.innerWidth,k_=Vt.innerHeight},jc=function(t){It.cache++,(t===!0||!Fi&&!S_&&!Te.fullscreenElement&&!Te.webkitFullscreenElement&&(!Tg||T_!==Vt.innerWidth||Math.abs(Vt.innerHeight-k_)>Vt.innerHeight*.25))&&Hf.restart(!0)},ol={},nC=[],j_=function a(){return _i(Ct,"scrollEnd",a)||Zr(!0)},cl=function(t){return ol[t]&&ol[t].map(function(i){return i()})||nC},Ln=[],D_=function(t){for(var i=0;i<Ln.length;i+=5)(!t||Ln[i+4]&&Ln[i+4].query===t)&&(Ln[i].style.cssText=Ln[i+1],Ln[i].getBBox&&Ln[i].setAttribute("transform",Ln[i+2]||""),Ln[i+3].uncache=1)},N_=function(){return It.forEach(function(t){return Yi(t)&&++t.cacheID&&(t.rec=t())})},wm=function(t,i){var n;for(tn=0;tn<Ut.length;tn++)n=Ut[tn],n&&(!i||n._ctx===i)&&(t?n.kill(1):n.revert(!0,!0));qc=!0,i&&D_(i),i||cl("revert")},L_=function(t,i){It.cache++,(i||!en)&&It.forEach(function(n){return Yi(n)&&n.cacheID++&&(n.rec=0)}),Bn(t)&&(Vt.history.scrollRestoration=gm=t)},en,sl=0,b1,aC=function(){if(b1!==sl){var t=b1=sl;requestAnimationFrame(function(){return t===sl&&Zr(!0)})}},B_=function(){he.appendChild(oo),mm=!Ji&&oo.offsetHeight||Vt.innerHeight,he.removeChild(oo)},v1=function(t){return ou(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(i){return i.style.display=t?"none":"block"})},Zr=function(t,i){if(Fn=Te.documentElement,he=Te.body,pm=[Vt,Te,Fn,he],fa&&!t&&!qc){Si(Ct,"scrollEnd",j_);return}B_(),en=Ct.isRefreshing=!0,qc||N_();var n=cl("refreshInit");__&&Ct.sort(),i||wm(),It.forEach(function(r){Yi(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),Ut.slice(0).forEach(function(r){return r.refresh()}),qc=!1,Ut.forEach(function(r){if(r._subPinOffset&&r.pin){var l=r.vars.horizontal?"offsetWidth":"offsetHeight",c=r.pin[l];r.revert(!0,1),r.adjustPinSpacing(r.pin[l]-c),r.refresh()}}),Mg=1,v1(!0),Ut.forEach(function(r){var l=Ha(r.scroller,r._dir),c=r.vars.end==="max"||r._endClamp&&r.end>l,d=r._startClamp&&r.start>=l;(c||d)&&r.setPositions(d?l-1:r.start,c?Math.max(d?l:r.start+1,l):r.end,!0)}),v1(!1),Mg=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),It.forEach(function(r){Yi(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),L_(gm,1),Hf.pause(),sl++,en=2,vs(2),Ut.forEach(function(r){return Yi(r.vars.onRefresh)&&r.vars.onRefresh(r)}),en=Ct.isRefreshing=!1,cl("refresh")},Ag=0,_f=1,Wc,vs=function(t){if(t===2||!en&&!qc){Ct.isUpdating=!0,Wc&&Wc.update(0);var i=Ut.length,n=Pi(),r=n-B0>=50,l=i&&Ut[0].scroll();if(_f=Ag>l?-1:1,en||(Ag=l),r&&(fa&&!ah&&n-fa>200&&(fa=0,cl("scrollEnd")),Ac=B0,B0=n),_f<0){for(tn=i;tn-- >0;)Ut[tn]&&Ut[tn].update(0,r);_f=1}else for(tn=0;tn<i;tn++)Ut[tn]&&Ut[tn].update(0,r);Ct.isUpdating=!1}cu=0},zg=[z_,O_,bm,xm,oa+$c,oa+Vc,oa+Xc,oa+Ic,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Sf=zg.concat([nl,al,"boxSizing","max"+vo,"max"+vm,"position",oa,fi,fi+Xc,fi+Vc,fi+$c,fi+Ic]),sC=function(t,i,n){co(n);var r=t._gsap;if(r.spacerIsNative)co(r.spacerState);else if(t._gsap.swappedIn){var l=i.parentNode;l&&(l.insertBefore(t,i),l.removeChild(i))}t._gsap.swappedIn=!1},P0=function(t,i,n,r){if(!t._gsap.swappedIn){for(var l=zg.length,c=i.style,d=t.style,f;l--;)f=zg[l],c[f]=n[f];c.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(c.display="inline-block"),d[bm]=d[xm]="auto",c.flexBasis=n.flexBasis||"auto",c.overflow="visible",c.boxSizing="border-box",c[nl]=Ff(t,nn)+xi,c[al]=Ff(t,bi)+xi,c[fi]=d[oa]=d[O_]=d[z_]="0",co(r),d[nl]=d["max"+vo]=n[nl],d[al]=d["max"+vm]=n[al],d[fi]=n[fi],t.parentNode!==i&&(t.parentNode.insertBefore(i,t),i.appendChild(t)),t._gsap.swappedIn=!0}},rC=/([A-Z])/g,co=function(t){if(t){var i=t.t.style,n=t.length,r=0,l,c;for((t.t._gsap||mt.core.getCache(t.t)).uncache=1;r<n;r+=2)c=t[r+1],l=t[r],c?i[l]=c:i[l]&&i.removeProperty(l.replace(rC,"-$1").toLowerCase())}},Wd=function(t){for(var i=Sf.length,n=t.style,r=[],l=0;l<i;l++)r.push(Sf[l],n[Sf[l]]);return r.t=t,r},lC=function(t,i,n){for(var r=[],l=t.length,c=n?8:0,d;c<l;c+=2)d=t[c],r.push(d,d in i?i[d]:t[c+1]);return r.t=t.t,r},kf={left:0,top:0},y1=function(t,i,n,r,l,c,d,f,h,m,x,b,v,_){Yi(t)&&(t=t(f)),Bn(t)&&t.substr(0,3)==="max"&&(t=b+(t.charAt(4)==="="?yf("0"+t.substr(3),n):0));var w=v?v.time():0,S,E,M;if(v&&v.seek(0),isNaN(t)||(t=+t),Rc(t))v&&(t=mt.utils.mapRange(v.scrollTrigger.start,v.scrollTrigger.end,0,b,t)),d&&wf(d,n,r,!0);else{Yi(i)&&(i=i(f));var A=(t||"0").split(" "),O,z,H,j;M=mn(i,f)||he,O=xs(M)||{},(!O||!O.left&&!O.top)&&ca(M).display==="none"&&(j=M.style.display,M.style.display="block",O=xs(M),j?M.style.display=j:M.style.removeProperty("display")),z=yf(A[0],O[r.d]),H=yf(A[1]||"0",n),t=O[r.p]-h[r.p]-m+z+l-H,d&&wf(d,H,r,n-H<20||d._isStart&&H>20),n-=n-H}if(_&&(f[_]=t||-.001,t<0&&(t=0)),c){var F=t+n,U=c._isStart;S="scroll"+r.d2,wf(c,F,r,U&&F>20||!U&&(x?Math.max(he[S],Fn[S]):c.parentNode[S])<=F+1),x&&(h=xs(d),x&&(c.style[r.op.p]=h[r.op.p]-r.op.m-c._offset+xi))}return v&&M&&(S=xs(M),v.seek(b),E=xs(M),v._caScrollDist=S[r.p]-E[r.p],t=t/v._caScrollDist*b),v&&v.seek(w),v?t:Math.round(t)},oC=/(webkit|moz|length|cssText|inset)/i,w1=function(t,i,n,r){if(t.parentNode!==i){var l=t.style,c,d;if(i===he){t._stOrig=l.cssText,d=ca(t);for(c in d)!+c&&!oC.test(c)&&d[c]&&typeof l[c]=="string"&&c!=="0"&&(l[c]=d[c]);l.top=n,l.left=r}else l.cssText=t._stOrig;mt.core.getCache(t).uncache=1,i.appendChild(t)}},H_=function(t,i,n){var r=i,l=r;return function(c){var d=Math.round(t());return d!==r&&d!==l&&Math.abs(d-r)>3&&Math.abs(d-l)>3&&(c=d,n&&n()),l=r,r=Math.round(c),r}},Qd=function(t,i,n){var r={};r[i.p]="+="+n,mt.set(t,r)},_1=function(t,i){var n=br(t,i),r="_scroll"+i.p2,l=function c(d,f,h,m,x){var b=c.tween,v=f.onComplete,_={};h=h||n();var w=H_(n,h,function(){b.kill(),c.tween=0});return x=m&&x||0,m=m||d-h,b&&b.kill(),f[r]=d,f.inherit=!1,f.modifiers=_,_[r]=function(){return w(h+m*b.ratio+x*b.ratio*b.ratio)},f.onUpdate=function(){It.cache++,c.tween&&vs()},f.onComplete=function(){c.tween=0,v&&v.call(b)},b=c.tween=mt.to(t,f),b};return t[r]=n,n.wheelHandler=function(){return l.tween&&l.tween.kill()&&(l.tween=0)},Si(t,"wheel",n.wheelHandler),Ct.isTouch&&Si(t,"touchmove",n.wheelHandler),l},Ct=(function(){function a(i,n){Kl||a.register(mt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Eg(this),this.init(i,n)}var t=a.prototype;return t.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!zc){this.update=this.refresh=this.kill=Da;return}n=g1(Bn(n)||Rc(n)||n.nodeType?{trigger:n}:n,Xd);var l=n,c=l.onUpdate,d=l.toggleClass,f=l.id,h=l.onToggle,m=l.onRefresh,x=l.scrub,b=l.trigger,v=l.pin,_=l.pinSpacing,w=l.invalidateOnRefresh,S=l.anticipatePin,E=l.onScrubComplete,M=l.onSnapComplete,A=l.once,O=l.snap,z=l.pinReparent,H=l.pinSpacer,j=l.containerAnimation,F=l.fastScrollEnd,U=l.preventOverlaps,W=n.horizontal||n.containerAnimation&&n.horizontal!==!1?nn:bi,et=!x&&x!==0,Y=mn(n.scroller||Vt),at=mt.core.getCache(Y),ct=ll(Y),lt=("pinType"in n?n.pinType:dr(Y,"pinType")||ct&&"fixed")==="fixed",B=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=et&&n.toggleActions.split(" "),st="markers"in n?n.markers:Xd.markers,ut=ct?0:parseFloat(ca(Y)["border"+W.p2+vo])||0,D=this,C=n.onRefreshInit&&function(){return n.onRefreshInit(D)},$=KM(Y,ct,W),nt=JM(Y,ct),it=0,ft=0,ht=0,St=br(Y,W),te,Lt,Ei,Ne,Le,Yt,oe,Je,pi,Q,gi,ot,G,rt,bt,Tt,vt,Bt,Oe,Ot,ce,ie,Ht,ti,pt,an,xe,Xe,Be,sn,Tn,At,qi,He,Zt,ae,yi,Mi,$e;if(D._startClamp=D._endClamp=!1,D._dir=W,S*=45,D.scroller=Y,D.scroll=j?j.time.bind(j):St,Ne=St(),D.vars=n,r=r||n.animation,"refreshPriority"in n&&(__=1,n.refreshPriority===-9999&&(Wc=D)),at.tweenScroll=at.tweenScroll||{top:_1(Y,bi),left:_1(Y,nn)},D.tweenTo=te=at.tweenScroll[W.p],D.scrubDuration=function(dt){qi=Rc(dt)&&dt,qi?At?At.duration(dt):At=mt.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:qi,paused:!0,onComplete:function(){return E&&E(D)}}):(At&&At.progress(1).kill(),At=0)},r&&(r.vars.lazy=!1,r._initted&&!D.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),D.animation=r.pause(),r.scrollTrigger=D,D.scrubDuration(x),sn=0,f||(f=r.vars.id)),O&&((!$r(O)||O.push)&&(O={snapTo:O}),"scrollBehavior"in he.style&&mt.set(ct?[he,Fn]:Y,{scrollBehavior:"auto"}),It.forEach(function(dt){return Yi(dt)&&dt.target===(ct?Te.scrollingElement||Fn:Y)&&(dt.smooth=!1)}),Ei=Yi(O.snapTo)?O.snapTo:O.snapTo==="labels"?eC(r):O.snapTo==="labelsDirectional"?iC(r):O.directional!==!1?function(dt,zt){return ym(O.snapTo)(dt,Pi()-ft<500?0:zt.direction)}:mt.utils.snap(O.snapTo),He=O.duration||{min:.1,max:2},He=$r(He)?Gc(He.min,He.max):Gc(He,He),Zt=mt.delayedCall(O.delay||qi/2||.1,function(){var dt=St(),zt=Pi()-ft<500,wt=te.tween;if((zt||Math.abs(D.getVelocity())<10)&&!wt&&!ah&&it!==dt){var Mt=(dt-Yt)/rt,We=r&&!et?r.totalProgress():Mt,Gt=zt?0:(We-Tn)/(Pi()-Ac)*1e3||0,Re=mt.utils.clamp(-Mt,1-Mt,Xl(Gt/2)*Gt/.185),Ee=Mt+(O.inertia===!1?0:Re),Ft,Pt,ee=O,Vi=ee.onStart,Me=ee.onInterrupt,Ii=ee.onComplete;if(Ft=Ei(Ee,D),Rc(Ft)||(Ft=Ee),Pt=Math.max(0,Math.round(Yt+Ft*rt)),dt<=oe&&dt>=Yt&&Pt!==dt){if(wt&&!wt._initted&&wt.data<=Xl(Pt-dt))return;O.inertia===!1&&(Re=Ft-Mt),te(Pt,{duration:He(Xl(Math.max(Xl(Ee-We),Xl(Ft-We))*.185/Gt/.05||0)),ease:O.ease||"power3",data:Xl(Pt-dt),onInterrupt:function(){return Zt.restart(!0)&&Me&&Me(D)},onComplete:function(){D.update(),it=St(),r&&!et&&(At?At.resetTo("totalProgress",Ft,r._tTime/r._tDur):r.progress(Ft)),sn=Tn=r&&!et?r.totalProgress():D.progress,M&&M(D),Ii&&Ii(D)}},dt,Re*rt,Pt-dt-Re*rt),Vi&&Vi(D,te.tween)}}else D.isActive&&it!==dt&&Zt.restart(!0)}).pause()),f&&(Cg[f]=D),b=D.trigger=mn(b||v!==!0&&v),$e=b&&b._gsap&&b._gsap.stRevert,$e&&($e=$e(D)),v=v===!0?b:mn(v),Bn(d)&&(d={targets:b,className:d}),v&&(_===!1||_===oa||(_=!_&&v.parentNode&&v.parentNode.style&&ca(v.parentNode).display==="flex"?!1:fi),D.pin=v,Lt=mt.core.getCache(v),Lt.spacer?bt=Lt.pinState:(H&&(H=mn(H),H&&!H.nodeType&&(H=H.current||H.nativeElement),Lt.spacerIsNative=!!H,H&&(Lt.spacerState=Wd(H))),Lt.spacer=Bt=H||Te.createElement("div"),Bt.classList.add("pin-spacer"),f&&Bt.classList.add("pin-spacer-"+f),Lt.pinState=bt=Wd(v)),n.force3D!==!1&&mt.set(v,{force3D:!0}),D.spacer=Bt=Lt.spacer,Be=ca(v),ti=Be[_+W.os2],Ot=mt.getProperty(v),ce=mt.quickSetter(v,W.a,xi),P0(v,Bt,Be),vt=Wd(v)),st){ot=$r(st)?g1(st,m1):m1,Q=$d("scroller-start",f,Y,W,ot,0),gi=$d("scroller-end",f,Y,W,ot,0,Q),Oe=Q["offset"+W.op.d2];var rn=mn(dr(Y,"content")||Y);Je=this.markerStart=$d("start",f,rn,W,ot,Oe,0,j),pi=this.markerEnd=$d("end",f,rn,W,ot,Oe,0,j),j&&(Mi=mt.quickSetter([Je,pi],W.a,xi)),!lt&&!(Ua.length&&dr(Y,"fixedMarkers")===!0)&&(tC(ct?he:Y),mt.set([Q,gi],{force3D:!0}),an=mt.quickSetter(Q,W.a,xi),Xe=mt.quickSetter(gi,W.a,xi))}if(j){var Et=j.vars.onUpdate,yt=j.vars.onUpdateParams;j.eventCallback("onUpdate",function(){D.update(0,0,1),Et&&Et.apply(j,yt||[])})}if(D.previous=function(){return Ut[Ut.indexOf(D)-1]},D.next=function(){return Ut[Ut.indexOf(D)+1]},D.revert=function(dt,zt){if(!zt)return D.kill(!0);var wt=dt!==!1||!D.enabled,Mt=Fi;wt!==D.isReverted&&(wt&&(ae=Math.max(St(),D.scroll.rec||0),ht=D.progress,yi=r&&r.progress()),Je&&[Je,pi,Q,gi].forEach(function(We){return We.style.display=wt?"none":"block"}),wt&&(Fi=D,D.update(wt)),v&&(!z||!D.isActive)&&(wt?sC(v,Bt,bt):P0(v,Bt,ca(v),pt)),wt||D.update(wt),Fi=Mt,D.isReverted=wt)},D.refresh=function(dt,zt,wt,Mt){if(!((Fi||!D.enabled)&&!zt)){if(v&&dt&&fa){Si(a,"scrollEnd",j_);return}!en&&C&&C(D),Fi=D,te.tween&&!wt&&(te.tween.kill(),te.tween=0),At&&At.pause(),w&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(ka){return ka.vars.immediateRender&&ka.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var We=$(),Gt=nt(),Re=j?j.duration():Ha(Y,W),Ee=rt<=.01||!rt,Ft=0,Pt=Mt||0,ee=$r(wt)?wt.end:n.end,Vi=n.endTrigger||b,Me=$r(wt)?wt.start:n.start||(n.start===0||!b?0:v?"0 0":"0 100%"),Ii=D.pinnedContainer=n.pinnedContainer&&mn(n.pinnedContainer,D),En=b&&Math.max(0,Ut.indexOf(D))||0,Fe=En,ei,Pe,ln,_a,Ue,qt,Mn,fl,Sa,$n,Wn,Es,_r;for(st&&$r(wt)&&(Es=mt.getProperty(Q,W.p),_r=mt.getProperty(gi,W.p));Fe-- >0;)qt=Ut[Fe],qt.end||qt.refresh(0,1)||(Fi=D),Mn=qt.pin,Mn&&(Mn===b||Mn===v||Mn===Ii)&&!qt.isReverted&&($n||($n=[]),$n.unshift(qt),qt.revert(!0,!0)),qt!==Ut[Fe]&&(En--,Fe--);for(Yi(Me)&&(Me=Me(D)),Me=d1(Me,"start",D),Yt=y1(Me,b,We,W,St(),Je,Q,D,Gt,ut,lt,Re,j,D._startClamp&&"_startClamp")||(v?-.001:0),Yi(ee)&&(ee=ee(D)),Bn(ee)&&!ee.indexOf("+=")&&(~ee.indexOf(" ")?ee=(Bn(Me)?Me.split(" ")[0]:"")+ee:(Ft=yf(ee.substr(2),We),ee=Bn(Me)?Me:(j?mt.utils.mapRange(0,j.duration(),j.scrollTrigger.start,j.scrollTrigger.end,Yt):Yt)+Ft,Vi=b)),ee=d1(ee,"end",D),oe=Math.max(Yt,y1(ee||(Vi?"100% 0":Re),Vi,We,W,St()+Ft,pi,gi,D,Gt,ut,lt,Re,j,D._endClamp&&"_endClamp"))||-.001,Ft=0,Fe=En;Fe--;)qt=Ut[Fe]||{},Mn=qt.pin,Mn&&qt.start-qt._pinPush<=Yt&&!j&&qt.end>0&&(ei=qt.end-(D._startClamp?Math.max(0,qt.start):qt.start),(Mn===b&&qt.start-qt._pinPush<Yt||Mn===Ii)&&isNaN(Me)&&(Ft+=ei*(1-qt.progress)),Mn===v&&(Pt+=ei));if(Yt+=Ft,oe+=Ft,D._startClamp&&(D._startClamp+=Ft),D._endClamp&&!en&&(D._endClamp=oe||-.001,oe=Math.min(oe,Ha(Y,W))),rt=oe-Yt||(Yt-=.01)&&.001,Ee&&(ht=mt.utils.clamp(0,1,mt.utils.normalize(Yt,oe,ae))),D._pinPush=Pt,Je&&Ft&&(ei={},ei[W.a]="+="+Ft,Ii&&(ei[W.p]="-="+St()),mt.set([Je,pi],ei)),v&&!(Mg&&D.end>=Ha(Y,W)))ei=ca(v),_a=W===bi,ln=St(),ie=parseFloat(Ot(W.a))+Pt,!Re&&oe>1&&(Wn=(ct?Te.scrollingElement||Fn:Y).style,Wn={style:Wn,value:Wn["overflow"+W.a.toUpperCase()]},ct&&ca(he)["overflow"+W.a.toUpperCase()]!=="scroll"&&(Wn.style["overflow"+W.a.toUpperCase()]="scroll")),P0(v,Bt,ei),vt=Wd(v),Pe=xs(v,!0),fl=lt&&br(Y,_a?nn:bi)(),_?(pt=[_+W.os2,rt+Pt+xi],pt.t=Bt,Fe=_===fi?Ff(v,W)+rt+Pt:0,Fe&&(pt.push(W.d,Fe+xi),Bt.style.flexBasis!=="auto"&&(Bt.style.flexBasis=Fe+xi)),co(pt),Ii&&Ut.forEach(function(ka){ka.pin===Ii&&ka.vars.pinSpacing!==!1&&(ka._subPinOffset=!0)}),lt&&St(ae)):(Fe=Ff(v,W),Fe&&Bt.style.flexBasis!=="auto"&&(Bt.style.flexBasis=Fe+xi)),lt&&(Ue={top:Pe.top+(_a?ln-Yt:fl)+xi,left:Pe.left+(_a?fl:ln-Yt)+xi,boxSizing:"border-box",position:"fixed"},Ue[nl]=Ue["max"+vo]=Math.ceil(Pe.width)+xi,Ue[al]=Ue["max"+vm]=Math.ceil(Pe.height)+xi,Ue[oa]=Ue[oa+Xc]=Ue[oa+Vc]=Ue[oa+$c]=Ue[oa+Ic]="0",Ue[fi]=ei[fi],Ue[fi+Xc]=ei[fi+Xc],Ue[fi+Vc]=ei[fi+Vc],Ue[fi+$c]=ei[fi+$c],Ue[fi+Ic]=ei[fi+Ic],Tt=lC(bt,Ue,z),en&&St(0)),r?(Sa=r._initted,N0(1),r.render(r.duration(),!0,!0),Ht=Ot(W.a)-ie+rt+Pt,xe=Math.abs(rt-Ht)>1,lt&&xe&&Tt.splice(Tt.length-2,2),r.render(0,!0,!0),Sa||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),N0(0)):Ht=rt,Wn&&(Wn.value?Wn.style["overflow"+W.a.toUpperCase()]=Wn.value:Wn.style.removeProperty("overflow-"+W.a));else if(b&&St()&&!j)for(Pe=b.parentNode;Pe&&Pe!==he;)Pe._pinOffset&&(Yt-=Pe._pinOffset,oe-=Pe._pinOffset),Pe=Pe.parentNode;$n&&$n.forEach(function(ka){return ka.revert(!1,!0)}),D.start=Yt,D.end=oe,Ne=Le=en?ae:St(),!j&&!en&&(Ne<ae&&St(ae),D.scroll.rec=0),D.revert(!1,!0),ft=Pi(),Zt&&(it=-1,Zt.restart(!0)),Fi=0,r&&et&&(r._initted||yi)&&r.progress()!==yi&&r.progress(yi||0,!0).render(r.time(),!0,!0),(Ee||ht!==D.progress||j||w||r&&!r._initted)&&(r&&!et&&(r._initted||ht||r.vars.immediateRender!==!1)&&r.totalProgress(j&&Yt<-.001&&!ht?mt.utils.normalize(Yt,oe,0):ht,!0),D.progress=Ee||(Ne-Yt)/rt===ht?0:ht),v&&_&&(Bt._pinOffset=Math.round(D.progress*Ht)),At&&At.invalidate(),isNaN(Es)||(Es-=mt.getProperty(Q,W.p),_r-=mt.getProperty(gi,W.p),Qd(Q,W,Es),Qd(Je,W,Es-(Mt||0)),Qd(gi,W,_r),Qd(pi,W,_r-(Mt||0))),Ee&&!en&&D.update(),m&&!en&&!G&&(G=!0,m(D),G=!1)}},D.getVelocity=function(){return(St()-Le)/(Pi()-Ac)*1e3||0},D.endAnimation=function(){bc(D.callbackAnimation),r&&(At?At.progress(1):r.paused()?et||bc(r,D.direction<0,1):bc(r,r.reversed()))},D.labelToScroll=function(dt){return r&&r.labels&&(Yt||D.refresh()||Yt)+r.labels[dt]/r.duration()*rt||0},D.getTrailing=function(dt){var zt=Ut.indexOf(D),wt=D.direction>0?Ut.slice(0,zt).reverse():Ut.slice(zt+1);return(Bn(dt)?wt.filter(function(Mt){return Mt.vars.preventOverlaps===dt}):wt).filter(function(Mt){return D.direction>0?Mt.end<=Yt:Mt.start>=oe})},D.update=function(dt,zt,wt){if(!(j&&!wt&&!dt)){var Mt=en===!0?ae:D.scroll(),We=dt?0:(Mt-Yt)/rt,Gt=We<0?0:We>1?1:We||0,Re=D.progress,Ee,Ft,Pt,ee,Vi,Me,Ii,En;if(zt&&(Le=Ne,Ne=j?St():Mt,O&&(Tn=sn,sn=r&&!et?r.totalProgress():Gt)),S&&v&&!Fi&&!Gd&&fa&&(!Gt&&Yt<Mt+(Mt-Le)/(Pi()-Ac)*S?Gt=1e-4:Gt===1&&oe>Mt+(Mt-Le)/(Pi()-Ac)*S&&(Gt=.9999)),Gt!==Re&&D.enabled){if(Ee=D.isActive=!!Gt&&Gt<1,Ft=!!Re&&Re<1,Me=Ee!==Ft,Vi=Me||!!Gt!=!!Re,D.direction=Gt>Re?1:-1,D.progress=Gt,Vi&&!Fi&&(Pt=Gt&&!Re?0:Gt===1?1:Re===1?2:3,et&&(ee=!Me&&X[Pt+1]!=="none"&&X[Pt+1]||X[Pt],En=r&&(ee==="complete"||ee==="reset"||ee in r))),U&&(Me||En)&&(En||x||!r)&&(Yi(U)?U(D):D.getTrailing(U).forEach(function(ln){return ln.endAnimation()})),et||(At&&!Fi&&!Gd?(At._dp._time-At._start!==At._time&&At.render(At._dp._time-At._start),At.resetTo?At.resetTo("totalProgress",Gt,r._tTime/r._tDur):(At.vars.totalProgress=Gt,At.invalidate().restart())):r&&r.totalProgress(Gt,!!(Fi&&(ft||dt)))),v){if(dt&&_&&(Bt.style[_+W.os2]=ti),!lt)ce(Oc(ie+Ht*Gt));else if(Vi){if(Ii=!dt&&Gt>Re&&oe+1>Mt&&Mt+1>=Ha(Y,W),z)if(!dt&&(Ee||Ii)){var Fe=xs(v,!0),ei=Mt-Yt;w1(v,he,Fe.top+(W===bi?ei:0)+xi,Fe.left+(W===bi?0:ei)+xi)}else w1(v,Bt);co(Ee||Ii?Tt:vt),xe&&Gt<1&&Ee||ce(ie+(Gt===1&&!Ii?Ht:0))}}O&&!te.tween&&!Fi&&!Gd&&Zt.restart(!0),d&&(Me||A&&Gt&&(Gt<1||!L0))&&ou(d.targets).forEach(function(ln){return ln.classList[Ee||A?"add":"remove"](d.className)}),c&&!et&&!dt&&c(D),Vi&&!Fi?(et&&(En&&(ee==="complete"?r.pause().totalProgress(1):ee==="reset"?r.restart(!0).pause():ee==="restart"?r.restart(!0):r[ee]()),c&&c(D)),(Me||!L0)&&(h&&Me&&H0(D,h),B[Pt]&&H0(D,B[Pt]),A&&(Gt===1?D.kill(!1,1):B[Pt]=0),Me||(Pt=Gt===1?1:3,B[Pt]&&H0(D,B[Pt]))),F&&!Ee&&Math.abs(D.getVelocity())>(Rc(F)?F:2500)&&(bc(D.callbackAnimation),At?At.progress(1):bc(r,ee==="reverse"?1:!Gt,1))):et&&c&&!Fi&&c(D)}if(Xe){var Pe=j?Mt/j.duration()*(j._caScrollDist||0):Mt;an(Pe+(Q._isFlipped?1:0)),Xe(Pe)}Mi&&Mi(-Mt/j.duration()*(j._caScrollDist||0))}},D.enable=function(dt,zt){D.enabled||(D.enabled=!0,Si(Y,"resize",jc),ct||Si(Y,"scroll",$l),C&&Si(a,"refreshInit",C),dt!==!1&&(D.progress=ht=0,Ne=Le=it=St()),zt!==!1&&D.refresh())},D.getTween=function(dt){return dt&&te?te.tween:At},D.setPositions=function(dt,zt,wt,Mt){if(j){var We=j.scrollTrigger,Gt=j.duration(),Re=We.end-We.start;dt=We.start+Re*dt/Gt,zt=We.start+Re*zt/Gt}D.refresh(!1,!1,{start:f1(dt,wt&&!!D._startClamp),end:f1(zt,wt&&!!D._endClamp)},Mt),D.update()},D.adjustPinSpacing=function(dt){if(pt&&dt){var zt=pt.indexOf(W.d)+1;pt[zt]=parseFloat(pt[zt])+dt+xi,pt[1]=parseFloat(pt[1])+dt+xi,co(pt)}},D.disable=function(dt,zt){if(dt!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,zt||At&&At.pause(),ae=0,Lt&&(Lt.uncache=1),C&&_i(a,"refreshInit",C),Zt&&(Zt.pause(),te.tween&&te.tween.kill()&&(te.tween=0)),!ct)){for(var wt=Ut.length;wt--;)if(Ut[wt].scroller===Y&&Ut[wt]!==D)return;_i(Y,"resize",jc),ct||_i(Y,"scroll",$l)}},D.kill=function(dt,zt){D.disable(dt,zt),At&&!zt&&At.kill(),f&&delete Cg[f];var wt=Ut.indexOf(D);wt>=0&&Ut.splice(wt,1),wt===tn&&_f>0&&tn--,wt=0,Ut.forEach(function(Mt){return Mt.scroller===D.scroller&&(wt=1)}),wt||en||(D.scroll.rec=0),r&&(r.scrollTrigger=null,dt&&r.revert({kill:!1}),zt||r.kill()),Je&&[Je,pi,Q,gi].forEach(function(Mt){return Mt.parentNode&&Mt.parentNode.removeChild(Mt)}),Wc===D&&(Wc=0),v&&(Lt&&(Lt.uncache=1),wt=0,Ut.forEach(function(Mt){return Mt.pin===v&&wt++}),wt||(Lt.spacer=0)),n.onKill&&n.onKill(D)},Ut.push(D),D.enable(!1,!1),$e&&$e(D),r&&r.add&&!rt){var ne=D.update;D.update=function(){D.update=ne,It.cache++,Yt||oe||D.refresh()},mt.delayedCall(.01,D.update),rt=.01,Yt=oe=0}else D.refresh();v&&aC()},a.register=function(n){return Kl||(mt=n||M_(),E_()&&window.document&&a.enable(),Kl=zc),Kl},a.defaults=function(n){if(n)for(var r in n)Xd[r]=n[r];return Xd},a.disable=function(n,r){zc=0,Ut.forEach(function(c){return c[r?"kill":"disable"](n)}),_i(Vt,"wheel",$l),_i(Te,"scroll",$l),clearInterval(Yd),_i(Te,"touchcancel",Da),_i(he,"touchstart",Da),Vd(_i,Te,"pointerdown,touchstart,mousedown",h1),Vd(_i,Te,"pointerup,touchend,mouseup",p1),Hf.kill(),qd(_i);for(var l=0;l<It.length;l+=3)Id(_i,It[l],It[l+1]),Id(_i,It[l],It[l+2])},a.enable=function(){if(Vt=window,Te=document,Fn=Te.documentElement,he=Te.body,mt&&(ou=mt.utils.toArray,Gc=mt.utils.clamp,Eg=mt.core.context||Da,N0=mt.core.suppressOverwrites||Da,gm=Vt.history.scrollRestoration||"auto",Ag=Vt.pageYOffset||0,mt.core.globals("ScrollTrigger",a),he)){zc=1,oo=document.createElement("div"),oo.style.height="100vh",oo.style.position="absolute",B_(),ZM(),ri.register(mt),a.isTouch=ri.isTouch,Zs=ri.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Tg=ri.isTouch===1,Si(Vt,"wheel",$l),pm=[Vt,Te,Fn,he],mt.matchMedia?(a.matchMedia=function(h){var m=mt.matchMedia(),x;for(x in h)m.add(x,h[x]);return m},mt.addEventListener("matchMediaInit",function(){N_(),wm()}),mt.addEventListener("matchMediaRevert",function(){return D_()}),mt.addEventListener("matchMedia",function(){Zr(0,1),cl("matchMedia")}),mt.matchMedia().add("(orientation: portrait)",function(){return F0(),F0})):console.warn("Requires GSAP 3.11.0 or later"),F0(),Si(Te,"scroll",$l);var n=he.hasAttribute("style"),r=he.style,l=r.borderTopStyle,c=mt.core.Animation.prototype,d,f;for(c.revert||Object.defineProperty(c,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",d=xs(he),bi.m=Math.round(d.top+bi.sc())||0,nn.m=Math.round(d.left+nn.sc())||0,l?r.borderTopStyle=l:r.removeProperty("border-top-style"),n||(he.setAttribute("style",""),he.removeAttribute("style")),Yd=setInterval(x1,250),mt.delayedCall(.5,function(){return Gd=0}),Si(Te,"touchcancel",Da),Si(he,"touchstart",Da),Vd(Si,Te,"pointerdown,touchstart,mousedown",h1),Vd(Si,Te,"pointerup,touchend,mouseup",p1),kg=mt.utils.checkPrefix("transform"),Sf.push(kg),Kl=Pi(),Hf=mt.delayedCall(.2,Zr).pause(),Jl=[Te,"visibilitychange",function(){var h=Vt.innerWidth,m=Vt.innerHeight;Te.hidden?(c1=h,u1=m):(c1!==h||u1!==m)&&jc()},Te,"DOMContentLoaded",Zr,Vt,"load",Zr,Vt,"resize",jc],qd(Si),Ut.forEach(function(h){return h.enable(0,1)}),f=0;f<It.length;f+=3)Id(_i,It[f],It[f+1]),Id(_i,It[f],It[f+2])}},a.config=function(n){"limitCallbacks"in n&&(L0=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(Yd)||(Yd=r)&&setInterval(x1,r),"ignoreMobileResize"in n&&(Tg=a.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(qd(_i)||qd(Si,n.autoRefreshEvents||"none"),S_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},a.scrollerProxy=function(n,r){var l=mn(n),c=It.indexOf(l),d=ll(l);~c&&It.splice(c,d?6:2),r&&(d?Ua.unshift(Vt,r,he,r,Fn,r):Ua.unshift(l,r))},a.clearMatchMedia=function(n){Ut.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},a.isInViewport=function(n,r,l){var c=(Bn(n)?mn(n):n).getBoundingClientRect(),d=c[l?nl:al]*r||0;return l?c.right-d>0&&c.left+d<Vt.innerWidth:c.bottom-d>0&&c.top+d<Vt.innerHeight},a.positionInViewport=function(n,r,l){Bn(n)&&(n=mn(n));var c=n.getBoundingClientRect(),d=c[l?nl:al],f=r==null?d/2:r in Pf?Pf[r]*d:~r.indexOf("%")?parseFloat(r)*d/100:parseFloat(r)||0;return l?(c.left+f)/Vt.innerWidth:(c.top+f)/Vt.innerHeight},a.killAll=function(n){if(Ut.slice(0).forEach(function(l){return l.vars.id!=="ScrollSmoother"&&l.kill()}),n!==!0){var r=ol.killAll||[];ol={},r.forEach(function(l){return l()})}},a})();Ct.version="3.14.2";Ct.saveStyles=function(a){return a?ou(a).forEach(function(t){if(t&&t.style){var i=Ln.indexOf(t);i>=0&&Ln.splice(i,5),Ln.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),mt.core.getCache(t),Eg())}}):Ln};Ct.revert=function(a,t){return wm(!a,t)};Ct.create=function(a,t){return new Ct(a,t)};Ct.refresh=function(a){return a?jc(!0):(Kl||Ct.register())&&Zr(!0)};Ct.update=function(a){return++It.cache&&vs(a===!0?2:0)};Ct.clearScrollMemory=L_;Ct.maxScroll=function(a,t){return Ha(a,t?nn:bi)};Ct.getScrollFunc=function(a,t){return br(mn(a),t?nn:bi)};Ct.getById=function(a){return Cg[a]};Ct.getAll=function(){return Ut.filter(function(a){return a.vars.id!=="ScrollSmoother"})};Ct.isScrolling=function(){return!!fa};Ct.snapDirectional=ym;Ct.addEventListener=function(a,t){var i=ol[a]||(ol[a]=[]);~i.indexOf(t)||i.push(t)};Ct.removeEventListener=function(a,t){var i=ol[a],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)};Ct.batch=function(a,t){var i=[],n={},r=t.interval||.016,l=t.batchMax||1e9,c=function(h,m){var x=[],b=[],v=mt.delayedCall(r,function(){m(x,b),x=[],b=[]}).pause();return function(_){x.length||v.restart(!0),x.push(_.trigger),b.push(_),l<=x.length&&v.progress(1)}},d;for(d in t)n[d]=d.substr(0,2)==="on"&&Yi(t[d])&&d!=="onRefreshInit"?c(d,t[d]):t[d];return Yi(l)&&(l=l(),Si(Ct,"refresh",function(){return l=t.batchMax()})),ou(a).forEach(function(f){var h={};for(d in n)h[d]=n[d];h.trigger=f,i.push(Ct.create(h))}),i};var S1=function(t,i,n,r){return i>r?t(r):i<0&&t(0),n>r?(r-i)/(n-i):n<0?i/(i-n):1},U0=function a(t,i){i===!0?t.style.removeProperty("touch-action"):t.style.touchAction=i===!0?"auto":i?"pan-"+i+(ri.isTouch?" pinch-zoom":""):"none",t===Fn&&a(he,i)},Zd={auto:1,scroll:1},cC=function(t){var i=t.event,n=t.target,r=t.axis,l=(i.changedTouches?i.changedTouches[0]:i).target,c=l._gsap||mt.core.getCache(l),d=Pi(),f;if(!c._isScrollT||d-c._isScrollT>2e3){for(;l&&l!==he&&(l.scrollHeight<=l.clientHeight&&l.scrollWidth<=l.clientWidth||!(Zd[(f=ca(l)).overflowY]||Zd[f.overflowX]));)l=l.parentNode;c._isScroll=l&&l!==n&&!ll(l)&&(Zd[(f=ca(l)).overflowY]||Zd[f.overflowX]),c._isScrollT=d}(c._isScroll||r==="x")&&(i.stopPropagation(),i._gsapAllow=!0)},F_=function(t,i,n,r){return ri.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:i,onWheel:r=r&&cC,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&Si(Te,ri.eventTypes[0],T1,!1,!0)},onDisable:function(){return _i(Te,ri.eventTypes[0],T1,!0)}})},uC=/(input|label|select|textarea)/i,k1,T1=function(t){var i=uC.test(t.target.tagName);(i||k1)&&(t._gsapAllow=!0,k1=i)},dC=function(t){$r(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var i=t,n=i.normalizeScrollX,r=i.momentum,l=i.allowNestedScroll,c=i.onRelease,d,f,h=mn(t.target)||Fn,m=mt.core.globals().ScrollSmoother,x=m&&m.get(),b=Zs&&(t.content&&mn(t.content)||x&&t.content!==!1&&!x.smooth()&&x.content()),v=br(h,bi),_=br(h,nn),w=1,S=(ri.isTouch&&Vt.visualViewport?Vt.visualViewport.scale*Vt.visualViewport.width:Vt.outerWidth)/Vt.innerWidth,E=0,M=Yi(r)?function(){return r(d)}:function(){return r||2.8},A,O,z=F_(h,t.type,!0,l),H=function(){return O=!1},j=Da,F=Da,U=function(){f=Ha(h,bi),F=Gc(Zs?1:0,f),n&&(j=Gc(0,Ha(h,nn))),A=sl},W=function(){b._gsap.y=Oc(parseFloat(b._gsap.y)+v.offset)+"px",b.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(b._gsap.y)+", 0, 1)",v.offset=v.cacheID=0},et=function(){if(O){requestAnimationFrame(H);var st=Oc(d.deltaY/2),ut=F(v.v-st);if(b&&ut!==v.v+v.offset){v.offset=ut-v.v;var D=Oc((parseFloat(b&&b._gsap.y)||0)-v.offset);b.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",b._gsap.y=D+"px",v.cacheID=It.cache,vs()}return!0}v.offset&&W(),O=!0},Y,at,ct,lt,B=function(){U(),Y.isActive()&&Y.vars.scrollY>f&&(v()>f?Y.progress(1)&&v(f):Y.resetTo("scrollY",f))};return b&&mt.set(b,{y:"+=0"}),t.ignoreCheck=function(X){return Zs&&X.type==="touchmove"&&et()||w>1.05&&X.type!=="touchstart"||d.isGesturing||X.touches&&X.touches.length>1},t.onPress=function(){O=!1;var X=w;w=Oc((Vt.visualViewport&&Vt.visualViewport.scale||1)/S),Y.pause(),X!==w&&U0(h,w>1.01?!0:n?!1:"x"),at=_(),ct=v(),U(),A=sl},t.onRelease=t.onGestureStart=function(X,st){if(v.offset&&W(),!st)lt.restart(!0);else{It.cache++;var ut=M(),D,C;n&&(D=_(),C=D+ut*.05*-X.velocityX/.227,ut*=S1(_,D,C,Ha(h,nn)),Y.vars.scrollX=j(C)),D=v(),C=D+ut*.05*-X.velocityY/.227,ut*=S1(v,D,C,Ha(h,bi)),Y.vars.scrollY=F(C),Y.invalidate().duration(ut).play(.01),(Zs&&Y.vars.scrollY>=f||D>=f-1)&&mt.to({},{onUpdate:B,duration:ut})}c&&c(X)},t.onWheel=function(){Y._ts&&Y.pause(),Pi()-E>1e3&&(A=0,E=Pi())},t.onChange=function(X,st,ut,D,C){if(sl!==A&&U(),st&&n&&_(j(D[2]===st?at+(X.startX-X.x):_()+st-D[1])),ut){v.offset&&W();var $=C[2]===ut,nt=$?ct+X.startY-X.y:v()+ut-C[1],it=F(nt);$&&nt!==it&&(ct+=it-nt),v(it)}(ut||st)&&vs()},t.onEnable=function(){U0(h,n?!1:"x"),Ct.addEventListener("refresh",B),Si(Vt,"resize",B),v.smooth&&(v.target.style.scrollBehavior="auto",v.smooth=_.smooth=!1),z.enable()},t.onDisable=function(){U0(h,!0),_i(Vt,"resize",B),Ct.removeEventListener("refresh",B),z.kill()},t.lockAxis=t.lockAxis!==!1,d=new ri(t),d.iOS=Zs,Zs&&!v()&&v(1),Zs&&mt.ticker.add(Da),lt=d._dc,Y=mt.to(d,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:H_(v,v(),function(){return Y.pause()})},onUpdate:vs,onComplete:lt.vars.onComplete}),d};Ct.sort=function(a){if(Yi(a))return Ut.sort(a);var t=Vt.pageYOffset||0;return Ct.getAll().forEach(function(i){return i._sortY=i.trigger?t+i.trigger.getBoundingClientRect().top:i.start+Vt.innerHeight}),Ut.sort(a||function(i,n){return(i.vars.refreshPriority||0)*-1e6+(i.vars.containerAnimation?1e6:i._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Ct.observe=function(a){return new ri(a)};Ct.normalizeScroll=function(a){if(typeof a>"u")return Ji;if(a===!0&&Ji)return Ji.enable();if(a===!1){Ji&&Ji.kill(),Ji=a;return}var t=a instanceof ri?a:dC(a);return Ji&&Ji.target===t.target&&Ji.kill(),ll(t.target)&&(Ji=t),t};Ct.core={_getVelocityProp:Sg,_inputObserver:F_,_scrollers:It,_proxies:Ua,bridge:{ss:function(){fa||cl("scrollStart"),fa=Pi()},ref:function(){return Fi}}};M_()&&mt.registerPlugin(Ct);const fC=Object.freeze(Object.defineProperty({__proto__:null,ScrollTrigger:Ct,default:Ct},Symbol.toStringTag,{value:"Module"}));const P_=(...a)=>a.filter((t,i,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===i).join(" ").trim();const hC=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const pC=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,n)=>n?n.toUpperCase():i.toLowerCase());const E1=a=>{const t=pC(a);return t.charAt(0).toUpperCase()+t.slice(1)};var gC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const mC=a=>{for(const t in a)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};const xC=N.forwardRef(({color:a="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:n,className:r="",children:l,iconNode:c,...d},f)=>N.createElement("svg",{ref:f,...gC,width:t,height:t,stroke:a,strokeWidth:n?Number(i)*24/Number(t):i,className:P_("lucide",r),...!l&&!mC(d)&&{"aria-hidden":"true"},...d},[...c.map(([h,m])=>N.createElement(h,m)),...Array.isArray(l)?l:[l]]));const Ie=(a,t)=>{const i=N.forwardRef(({className:n,...r},l)=>N.createElement(xC,{ref:l,iconNode:t,className:P_(`lucide-${hC(E1(a))}`,`lucide-${a}`,n),...r}));return i.displayName=E1(a),i};const bC=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],U_=Ie("arrow-up-right",bC);const vC=[["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",key:"uouzyp"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4",key:"1b0z45"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97",key:"5cxbf6"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4",key:"1fjd4g"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97",key:"1d7oge"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13",key:"1vgav8"}]],yC=Ie("bug",vC);const wC=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],_C=Ie("cloud",wC);const SC=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Qc=Ie("code-xml",SC);const kC=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],TC=Ie("code",kC);const EC=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],MC=Ie("cpu",EC);const CC=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],AC=Ie("database",CC);const zC=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Og=Ie("download",zC);const OC=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]],RC=Ie("file-code-corner",OC);const jC=[["path",{d:"M13 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.36",key:"1shsnm"}],["path",{d:"M19 12v6",key:"kflna4"}],["path",{d:"M19 14h2",key:"wp2qbk"}],["circle",{cx:"19",cy:"20",r:"2",key:"1jfyz6"}]],DC=Ie("folder-key",jC);const NC=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],LC=Ie("github",NC);const BC=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],HC=Ie("heart",BC);const FC=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],PC=Ie("instagram",FC);const UC=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],YC=Ie("linkedin",UC);const GC=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],qC=Ie("menu",GC);const VC=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],IC=Ie("message-circle",VC);const XC=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],$C=Ie("plus",XC);const WC=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],QC=Ie("server",WC);const ZC=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],KC=Ie("shield",ZC);const JC=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],t4=Ie("star",JC);const e4=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],i4=Ie("terminal",e4);const n4=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Y_=Ie("x",n4);const a4=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],s4=Ie("zap",a4);function r4(){return k.jsx("img",{className:"rounded-2xl",src:"/mine-portfolio/img/logo/portfolio-logo.jpg",alt:"Logo"})}function l4(){return k.jsxs(k.Fragment,{children:[k.jsx("div",{className:"flex aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground",children:k.jsx(r4,{})}),k.jsx("div",{className:"ml-1 grid flex-1 text-left text-sm",children:k.jsx("span",{className:"mb-0.5 truncate text-lg text-white leading-tight font-semibold",children:"Marwane Elhosni"})})]})}const o4=()=>{const[a,t]=N.useState(!1),[i,n]=N.useState(!0),[r,l]=N.useState(!1),c=N.useRef(0),f=Ts().pathname,h=(x,b)=>{if(!b.startsWith("#"))return;x.preventDefault();const v=document.querySelector(b);if(!v){console.warn(`Element ${b} not found`);return}const _=Xn.get();_?_.scrollTo(v,!0,"top 100px"):v.scrollIntoView({behavior:"smooth",block:"start"}),window.history.pushState(null,"",b),l(!1)};N.useEffect(()=>{c.current=window.scrollY;const x=()=>{const b=window.scrollY,v=b>c.current?"down":"up";t(b>20),v==="down"&&b>100&&n(!1),v==="up"&&n(!0),c.current=b};return window.addEventListener("scroll",x),()=>window.removeEventListener("scroll",x)},[]);const m=[{title:"Home",href:"/"},{title:"About",href:"#about"},{title:"Projects",href:"#projects"},{title:"Contact",href:"#contact"}];return k.jsxs("header",{className:`
        fixed top-4 left-1/2 -translate-x-1/2 z-50
        w-[95%] max-w-7xl
        rounded-3xl
        transition-all duration-500 ease-out
        ${i?"translate-y-0 opacity-100":"-translate-y-24 opacity-0"}
        ${a?"bg-black/80 backdrop-blur-xl border border-[#c4aaff]/40 shadow-xl shadow-[#c4aaff]/35":"bg-transparent"}
      `,children:[k.jsx("div",{className:"px-6",children:k.jsxs("div",{className:"flex h-16 items-center justify-between",children:[k.jsx(th,{to:"/",className:"flex items-center gap-2",children:k.jsx(l4,{})}),k.jsx("nav",{className:"hidden md:flex items-center gap-8",children:m.map(x=>k.jsxs("a",{href:x.href,onClick:b=>h(b,x.href),className:`relative px-3 py-2 text-sm font-medium transition-all
                  ${f===x.href?"text-blue-200":"text-white"}
                  hover:text-white/70
                `,children:[x.title,f===x.href&&k.jsx("span",{className:"absolute -bottom-1 left-1/2 h-0.5 w-10 -translate-x-1/2 bg-[#8B5CF6]"})]},x.href))}),k.jsx("div",{className:"hidden md:flex items-center",children:k.jsxs("a",{href:"/mine-portfolio/files/Mine-cv.pdf",target:"_blank",className:"flex items-center gap-2 shadow-inner shadow-[#c4aaff] glass-surface-lg bg-linear-90 from-[#8B5CF6]  to-[#c4aaff]/20 border border-white/10 border-spacing-5 text-white px-7 py-3 font-semibold rounded-full text-sm",children:["Download CV",k.jsx(Og,{size:16})]})}),k.jsx("button",{className:"md:hidden text-white",onClick:()=>l(!r),children:r?k.jsx(Y_,{size:26}):k.jsx(qC,{size:26})})]})}),k.jsx("div",{className:`md:hidden overflow-hidden transition-all duration-500 ease-in-out
          ${r?"max-h-96 opacity-100":"max-h-0 opacity-0"}
        `,children:k.jsxs("div",{className:"flex flex-col gap-4 px-6 pb-6 pt-2 bg-black/90 backdrop-blur-xl rounded-b-3xl",children:[m.map(x=>k.jsx("a",{href:x.href,onClick:b=>h(b,x.href),className:`text-base font-medium transition-colors
                ${f===x.href?"text-[#7AF298]":"text-white"}
                hover:text-[#7AF298]
              `,children:x.title},x.href)),k.jsxs("a",{href:"/files/Mine-cv.pdf",target:"_blank",onClick:()=>l(!1),className:"flex items-center justify-center gap-2 border border-[#c0c0c0] bg-[#7af298] text-black px-4 py-2 rounded-md font-mono text-sm mt-4",children:["Download CV",k.jsx(Og,{size:16})]})]})})]})};function c4({onClose:a}){const[t,i]=N.useState([]),[n,r]=N.useState(""),[l,c]=N.useState(!1),d=async()=>{if(!n.trim())return;const f=n;i(h=>[...h,{sender:"user",message:f}]),r(""),c(!0);try{const m=await(await fetch("https://chatbot-api-nine-puce.vercel.app/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:f})})).json();i(x=>[...x,{sender:"bot",message:m.reply||"No response from server."}])}catch{i(m=>[...m,{sender:"bot",message:"Something went wrong."}])}c(!1)};return k.jsx("div",{className:"fixed bottom-24 right-6 w-80 lg:w-96 h-80 glass-surface-sm bg-glass-border-subtle shadow-inner shadow-[#c4aaff]/80 rounded-xl border border-[#c4aaff]/20 flex z-50 animate-fadeIn",children:k.jsxs("div",{className:"flex flex-col flex-1 font-sans",children:[k.jsxs("div",{className:"p-4 bg-linear-120 from-[#8B5CF6]/70 glass-surface-sm to-transparent rounded-t-xl flex justify-between",children:[k.jsx("div",{className:"flex items-center text-white text-xl gap-2",children:k.jsx("span",{className:"font-bold",children:"Assistant"})}),k.jsx("button",{onClick:a,children:k.jsx(Y_,{className:"text-white",size:22})})]}),k.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-3",children:[t.map((f,h)=>k.jsx("div",{className:`p-2 rounded-lg max-w-[75%] ${f.sender==="user"?"ml-auto bg-[#8B5CF6] text-white":"mr-auto bg-white text-[#8B5CF6]"}`,children:f.message},h)),l&&k.jsx("div",{className:"mr-auto bg-white text-[#8B5CF6] p-2 rounded-lg",children:"Assistant is typing..."})]}),k.jsxs("div",{className:"p-3 border-t border-[#c4aaff] mx-auto flex gap-2",children:[k.jsx("input",{className:"flex-1 text-[#ffffff] border border-[#c4aaff] rounded-lg px-3 py-2 text-sm placeholder:text-[#ffffff]",placeholder:"Write a message...",value:n,onChange:f=>r(f.target.value),onKeyDown:f=>f.key==="Enter"&&d()}),k.jsx("button",{onClick:d,className:"bg-[#8B5CF6] text-white font-semibold px-4 rounded-lg hover:bg-blue-700",children:"Send"})]})]})})}function u4({onClick:a}){return k.jsxs("button",{onClick:a,className:`
        fixed bottom-6 right-6 z-50 flex font-sans font-bold items-center gap-2 shadow-inner shadow-[#8B5CF6]/70 glass-surface-lg glass-shine-subtle bg-glass-border-subtle hover:text-blue-100 hover:bg-white
        text-white p-4 rounded-full
        transition-all duration-300
      `,children:["AI Chat",k.jsx(IC,{size:26})]})}function d4(){const[a,t]=N.useState(!1);return k.jsxs(k.Fragment,{children:[!a&&k.jsx(u4,{onClick:()=>t(!0)}),a&&k.jsx(c4,{onClose:()=>t(!1)})]})}const f4=({className:a})=>{const t=new Date().getFullYear(),i=(r,l)=>{if(!l.startsWith("http")&&l!=="/"&&l.startsWith("#")){r.preventDefault();const c=document.querySelector(l);if(!c){console.warn(`Element ${l} not found`);return}const d=Xn.get();d?d.scrollTo(c,!0,"top 100px"):c.scrollIntoView({behavior:"smooth",block:"start"}),window.history.pushState(null,"",l)}},n=[{title:"Quick Links",links:[{text:"Home",url:"/"},{text:"About",url:"#about"},{text:"Projects",url:"#projects"},{text:"Contact",url:"#contact"}]},{title:"Portfolio Resources",links:[{text:"GitHub",url:"https://github.com/theelh",external:!0}]},{title:"Social Links",links:[{text:"Instagram",url:"https://www.instagram.com/codeaurum77/",external:!0},{text:"LinkedIn",url:"https://www.linkedin.com/in/marwane-elhosni/",external:!0}]}];return k.jsx("section",{className:a,children:k.jsxs("footer",{className:"mx-auto w-full max-w-7xl px-6",children:[k.jsxs("div",{className:"flex items-center text-[#c4aaff] font-bold justify-between gap-3 mb-16",children:["</",k.jsx("div",{className:"h-px bg-[#505559] w-full"}),">"]}),k.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12",children:[k.jsxs("div",{children:[k.jsx("img",{src:"./img/logo/portfolio-logo.jpg",className:"rounded-2xl w-40 h-40 object-cover",alt:"Marwane Elhosni Logo"}),k.jsx("p",{className:"mt-4 font-semibold text-[#e8e8e6] text-lg",children:"Marwane Elhosni"}),k.jsx("p",{className:"text-sm text-gray-400 mt-2",children:"Building modern, scalable web experiences."})]}),n.map((r,l)=>k.jsxs("div",{children:[k.jsx("h3",{className:"mb-5 font-semibold text-lg text-white",children:r.title}),k.jsx("ul",{className:"space-y-3 text-[#bcb0b0]",children:r.links.map((c,d)=>k.jsx("li",{children:k.jsx("a",{href:c.url,onClick:f=>i(f,c.url),target:c.external?"_blank":"_self",rel:c.external?"noopener noreferrer":void 0,className:"transition-colors duration-200 hover:text-white hover:underline",children:c.text})},d))})]},l))]}),k.jsxs("div",{className:"mt-20 border-t border-[#2a2a2a] pt-6 text-sm text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-4",children:[k.jsxs("p",{children:["© 2021 - ",t," Marwane Elhosni. All rights reserved."]}),k.jsx("p",{className:"text-xs text-gray-500",children:"Built with ♥ by Marwane Elhosni."})]})]})})};function vu(a){return a+.5|0}const sr=(a,t,i)=>Math.max(Math.min(a,i),t);function Dc(a){return sr(vu(a*2.55),0,255)}function fr(a){return sr(vu(a*255),0,255)}function ms(a){return sr(vu(a/2.55)/100,0,1)}function M1(a){return sr(vu(a*100),0,100)}const ra={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Rg=[..."0123456789ABCDEF"],h4=a=>Rg[a&15],p4=a=>Rg[(a&240)>>4]+Rg[a&15],Kd=a=>(a&240)>>4===(a&15),g4=a=>Kd(a.r)&&Kd(a.g)&&Kd(a.b)&&Kd(a.a);function m4(a){var t=a.length,i;return a[0]==="#"&&(t===4||t===5?i={r:255&ra[a[1]]*17,g:255&ra[a[2]]*17,b:255&ra[a[3]]*17,a:t===5?ra[a[4]]*17:255}:(t===7||t===9)&&(i={r:ra[a[1]]<<4|ra[a[2]],g:ra[a[3]]<<4|ra[a[4]],b:ra[a[5]]<<4|ra[a[6]],a:t===9?ra[a[7]]<<4|ra[a[8]]:255})),i}const x4=(a,t)=>a<255?t(a):"";function b4(a){var t=g4(a)?h4:p4;return a?"#"+t(a.r)+t(a.g)+t(a.b)+x4(a.a,t):void 0}const v4=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function G_(a,t,i){const n=t*Math.min(i,1-i),r=(l,c=(l+a/30)%12)=>i-n*Math.max(Math.min(c-3,9-c,1),-1);return[r(0),r(8),r(4)]}function y4(a,t,i){const n=(r,l=(r+a/60)%6)=>i-i*t*Math.max(Math.min(l,4-l,1),0);return[n(5),n(3),n(1)]}function w4(a,t,i){const n=G_(a,1,.5);let r;for(t+i>1&&(r=1/(t+i),t*=r,i*=r),r=0;r<3;r++)n[r]*=1-t-i,n[r]+=t;return n}function _4(a,t,i,n,r){return a===r?(t-i)/n+(t<i?6:0):t===r?(i-a)/n+2:(a-t)/n+4}function _m(a){const i=a.r/255,n=a.g/255,r=a.b/255,l=Math.max(i,n,r),c=Math.min(i,n,r),d=(l+c)/2;let f,h,m;return l!==c&&(m=l-c,h=d>.5?m/(2-l-c):m/(l+c),f=_4(i,n,r,m,l),f=f*60+.5),[f|0,h||0,d]}function Sm(a,t,i,n){return(Array.isArray(t)?a(t[0],t[1],t[2]):a(t,i,n)).map(fr)}function km(a,t,i){return Sm(G_,a,t,i)}function S4(a,t,i){return Sm(w4,a,t,i)}function k4(a,t,i){return Sm(y4,a,t,i)}function q_(a){return(a%360+360)%360}function T4(a){const t=v4.exec(a);let i=255,n;if(!t)return;t[5]!==n&&(i=t[6]?Dc(+t[5]):fr(+t[5]));const r=q_(+t[2]),l=+t[3]/100,c=+t[4]/100;return t[1]==="hwb"?n=S4(r,l,c):t[1]==="hsv"?n=k4(r,l,c):n=km(r,l,c),{r:n[0],g:n[1],b:n[2],a:i}}function E4(a,t){var i=_m(a);i[0]=q_(i[0]+t),i=km(i),a.r=i[0],a.g=i[1],a.b=i[2]}function M4(a){if(!a)return;const t=_m(a),i=t[0],n=M1(t[1]),r=M1(t[2]);return a.a<255?`hsla(${i}, ${n}%, ${r}%, ${ms(a.a)})`:`hsl(${i}, ${n}%, ${r}%)`}const C1={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},A1={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function C4(){const a={},t=Object.keys(A1),i=Object.keys(C1);let n,r,l,c,d;for(n=0;n<t.length;n++){for(c=d=t[n],r=0;r<i.length;r++)l=i[r],d=d.replace(l,C1[l]);l=parseInt(A1[c],16),a[d]=[l>>16&255,l>>8&255,l&255]}return a}let Jd;function A4(a){Jd||(Jd=C4(),Jd.transparent=[0,0,0,0]);const t=Jd[a.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const z4=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function O4(a){const t=z4.exec(a);let i=255,n,r,l;if(t){if(t[7]!==n){const c=+t[7];i=t[8]?Dc(c):sr(c*255,0,255)}return n=+t[1],r=+t[3],l=+t[5],n=255&(t[2]?Dc(n):sr(n,0,255)),r=255&(t[4]?Dc(r):sr(r,0,255)),l=255&(t[6]?Dc(l):sr(l,0,255)),{r:n,g:r,b:l,a:i}}}function R4(a){return a&&(a.a<255?`rgba(${a.r}, ${a.g}, ${a.b}, ${ms(a.a)})`:`rgb(${a.r}, ${a.g}, ${a.b})`)}const Y0=a=>a<=.0031308?a*12.92:Math.pow(a,1/2.4)*1.055-.055,Wl=a=>a<=.04045?a/12.92:Math.pow((a+.055)/1.055,2.4);function j4(a,t,i){const n=Wl(ms(a.r)),r=Wl(ms(a.g)),l=Wl(ms(a.b));return{r:fr(Y0(n+i*(Wl(ms(t.r))-n))),g:fr(Y0(r+i*(Wl(ms(t.g))-r))),b:fr(Y0(l+i*(Wl(ms(t.b))-l))),a:a.a+i*(t.a-a.a)}}function tf(a,t,i){if(a){let n=_m(a);n[t]=Math.max(0,Math.min(n[t]+n[t]*i,t===0?360:1)),n=km(n),a.r=n[0],a.g=n[1],a.b=n[2]}}function V_(a,t){return a&&Object.assign(t||{},a)}function z1(a){var t={r:0,g:0,b:0,a:255};return Array.isArray(a)?a.length>=3&&(t={r:a[0],g:a[1],b:a[2],a:255},a.length>3&&(t.a=fr(a[3]))):(t=V_(a,{r:0,g:0,b:0,a:1}),t.a=fr(t.a)),t}function D4(a){return a.charAt(0)==="r"?O4(a):T4(a)}class uu{constructor(t){if(t instanceof uu)return t;const i=typeof t;let n;i==="object"?n=z1(t):i==="string"&&(n=m4(t)||A4(t)||D4(t)),this._rgb=n,this._valid=!!n}get valid(){return this._valid}get rgb(){var t=V_(this._rgb);return t&&(t.a=ms(t.a)),t}set rgb(t){this._rgb=z1(t)}rgbString(){return this._valid?R4(this._rgb):void 0}hexString(){return this._valid?b4(this._rgb):void 0}hslString(){return this._valid?M4(this._rgb):void 0}mix(t,i){if(t){const n=this.rgb,r=t.rgb;let l;const c=i===l?.5:i,d=2*c-1,f=n.a-r.a,h=((d*f===-1?d:(d+f)/(1+d*f))+1)/2;l=1-h,n.r=255&h*n.r+l*r.r+.5,n.g=255&h*n.g+l*r.g+.5,n.b=255&h*n.b+l*r.b+.5,n.a=c*n.a+(1-c)*r.a,this.rgb=n}return this}interpolate(t,i){return t&&(this._rgb=j4(this._rgb,t._rgb,i)),this}clone(){return new uu(this.rgb)}alpha(t){return this._rgb.a=fr(t),this}clearer(t){const i=this._rgb;return i.a*=1-t,this}greyscale(){const t=this._rgb,i=vu(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=i,this}opaquer(t){const i=this._rgb;return i.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return tf(this._rgb,2,t),this}darken(t){return tf(this._rgb,2,-t),this}saturate(t){return tf(this._rgb,1,t),this}desaturate(t){return tf(this._rgb,1,-t),this}rotate(t){return E4(this._rgb,t),this}}function cs(){}const N4=(()=>{let a=0;return()=>a++})();function ke(a){return a==null}function ki(a){if(Array.isArray&&Array.isArray(a))return!0;const t=Object.prototype.toString.call(a);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function le(a){return a!==null&&Object.prototype.toString.call(a)==="[object Object]"}function ha(a){return(typeof a=="number"||a instanceof Number)&&isFinite(+a)}function Aa(a,t){return ha(a)?a:t}function de(a,t){return typeof a>"u"?t:a}const L4=(a,t)=>typeof a=="string"&&a.endsWith("%")?parseFloat(a)/100*t:+a;function ze(a,t,i){if(a&&typeof a.call=="function")return a.apply(i,t)}function me(a,t,i,n){let r,l,c;if(ki(a))for(l=a.length,r=0;r<l;r++)t.call(i,a[r],r);else if(le(a))for(c=Object.keys(a),l=c.length,r=0;r<l;r++)t.call(i,a[c[r]],c[r])}function Uf(a,t){let i,n,r,l;if(!a||!t||a.length!==t.length)return!1;for(i=0,n=a.length;i<n;++i)if(r=a[i],l=t[i],r.datasetIndex!==l.datasetIndex||r.index!==l.index)return!1;return!0}function Yf(a){if(ki(a))return a.map(Yf);if(le(a)){const t=Object.create(null),i=Object.keys(a),n=i.length;let r=0;for(;r<n;++r)t[i[r]]=Yf(a[i[r]]);return t}return a}function I_(a){return["__proto__","prototype","constructor"].indexOf(a)===-1}function B4(a,t,i,n){if(!I_(a))return;const r=t[a],l=i[a];le(r)&&le(l)?du(r,l,n):t[a]=Yf(l)}function du(a,t,i){const n=ki(t)?t:[t],r=n.length;if(!le(a))return a;i=i||{};const l=i.merger||B4;let c;for(let d=0;d<r;++d){if(c=n[d],!le(c))continue;const f=Object.keys(c);for(let h=0,m=f.length;h<m;++h)l(f[h],a,c,i)}return a}function Zc(a,t){return du(a,t,{merger:H4})}function H4(a,t,i){if(!I_(a))return;const n=t[a],r=i[a];le(n)&&le(r)?Zc(n,r):Object.prototype.hasOwnProperty.call(t,a)||(t[a]=Yf(r))}const O1={"":a=>a,x:a=>a.x,y:a=>a.y};function F4(a){const t=a.split("."),i=[];let n="";for(const r of t)n+=r,n.endsWith("\\")?n=n.slice(0,-1)+".":(i.push(n),n="");return i}function P4(a){const t=F4(a);return i=>{for(const n of t){if(n==="")break;i=i&&i[n]}return i}}function yo(a,t){return(O1[t]||(O1[t]=P4(t)))(a)}function Tm(a){return a.charAt(0).toUpperCase()+a.slice(1)}const fu=a=>typeof a<"u",vr=a=>typeof a=="function",R1=(a,t)=>{if(a.size!==t.size)return!1;for(const i of a)if(!t.has(i))return!1;return!0};function U4(a){return a.type==="mouseup"||a.type==="click"||a.type==="contextmenu"}const Sn=Math.PI,hr=2*Sn,Gf=Number.POSITIVE_INFINITY,Y4=Sn/180,va=Sn/2,Ur=Sn/4,j1=Sn*2/3,X_=Math.log10,pr=Math.sign;function Tf(a,t,i){return Math.abs(a-t)<i}function D1(a){const t=Math.round(a);a=Tf(a,t,a/1e3)?t:a;const i=Math.pow(10,Math.floor(X_(a))),n=a/i;return(n<=1?1:n<=2?2:n<=5?5:10)*i}function G4(a){const t=[],i=Math.sqrt(a);let n;for(n=1;n<i;n++)a%n===0&&(t.push(n),t.push(a/n));return i===(i|0)&&t.push(i),t.sort((r,l)=>r-l).pop(),t}function q4(a){return typeof a=="symbol"||typeof a=="object"&&a!==null&&!(Symbol.toPrimitive in a||"toString"in a||"valueOf"in a)}function qf(a){return!q4(a)&&!isNaN(parseFloat(a))&&isFinite(a)}function V4(a,t){const i=Math.round(a);return i-t<=a&&i+t>=a}function I4(a,t,i){let n,r,l;for(n=0,r=a.length;n<r;n++)l=a[n][i],isNaN(l)||(t.min=Math.min(t.min,l),t.max=Math.max(t.max,l))}function Kr(a){return a*(Sn/180)}function X4(a){return a*(180/Sn)}function N1(a){if(!ha(a))return;let t=1,i=0;for(;Math.round(a*t)/t!==a;)t*=10,i++;return i}function $4(a,t){const i=t.x-a.x,n=t.y-a.y,r=Math.sqrt(i*i+n*n);let l=Math.atan2(n,i);return l<-.5*Sn&&(l+=hr),{angle:l,distance:r}}function W4(a,t){return Math.sqrt(Math.pow(t.x-a.x,2)+Math.pow(t.y-a.y,2))}function Yr(a){return(a%hr+hr)%hr}function Q4(a,t,i,n){const r=Yr(a),l=Yr(t),c=Yr(i),d=Yr(l-r),f=Yr(c-r),h=Yr(r-l),m=Yr(r-c);return r===l||r===c||n||d>f&&h<m}function ya(a,t,i){return Math.max(t,Math.min(i,a))}function Z4(a){return ya(a,-32768,32767)}function no(a,t,i,n=1e-6){return a>=Math.min(t,i)-n&&a<=Math.max(t,i)+n}function Em(a,t,i){i=i||(c=>a[c]<t);let n=a.length-1,r=0,l;for(;n-r>1;)l=r+n>>1,i(l)?r=l:n=l;return{lo:r,hi:n}}const jg=(a,t,i,n)=>Em(a,i,n?r=>{const l=a[r][t];return l<i||l===i&&a[r+1][t]===i}:r=>a[r][t]<i),K4=(a,t,i)=>Em(a,i,n=>a[n][t]>=i);function J4(a,t,i){let n=0,r=a.length;for(;n<r&&a[n]<t;)n++;for(;r>n&&a[r-1]>i;)r--;return n>0||r<a.length?a.slice(n,r):a}const $_=["push","pop","shift","splice","unshift"];function tA(a,t){if(a._chartjs){a._chartjs.listeners.push(t);return}Object.defineProperty(a,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),$_.forEach(i=>{const n="_onData"+Tm(i),r=a[i];Object.defineProperty(a,i,{configurable:!0,enumerable:!1,value(...l){const c=r.apply(this,l);return a._chartjs.listeners.forEach(d=>{typeof d[n]=="function"&&d[n](...l)}),c}})})}function L1(a,t){const i=a._chartjs;if(!i)return;const n=i.listeners,r=n.indexOf(t);r!==-1&&n.splice(r,1),!(n.length>0)&&($_.forEach(l=>{delete a[l]}),delete a._chartjs)}function W_(a){const t=new Set(a);return t.size===a.length?a:Array.from(t)}const Q_=(function(){return typeof window>"u"?function(a){return a()}:window.requestAnimationFrame})();function Z_(a,t){let i=[],n=!1;return function(...r){i=r,n||(n=!0,Q_.call(window,()=>{n=!1,a.apply(t,i)}))}}function eA(a,t){let i;return function(...n){return t?(clearTimeout(i),i=setTimeout(a,t,n)):a.apply(this,n),t}}const K_=a=>a==="start"?"left":a==="end"?"right":"center",Nn=(a,t,i)=>a==="start"?t:a==="end"?i:(t+i)/2,iA=(a,t,i,n)=>a===(n?"left":"right")?i:a==="center"?(t+i)/2:t,ef=a=>a===0||a===1,B1=(a,t,i)=>-(Math.pow(2,10*(a-=1))*Math.sin((a-t)*hr/i)),H1=(a,t,i)=>Math.pow(2,-10*a)*Math.sin((a-t)*hr/i)+1,Kc={linear:a=>a,easeInQuad:a=>a*a,easeOutQuad:a=>-a*(a-2),easeInOutQuad:a=>(a/=.5)<1?.5*a*a:-.5*(--a*(a-2)-1),easeInCubic:a=>a*a*a,easeOutCubic:a=>(a-=1)*a*a+1,easeInOutCubic:a=>(a/=.5)<1?.5*a*a*a:.5*((a-=2)*a*a+2),easeInQuart:a=>a*a*a*a,easeOutQuart:a=>-((a-=1)*a*a*a-1),easeInOutQuart:a=>(a/=.5)<1?.5*a*a*a*a:-.5*((a-=2)*a*a*a-2),easeInQuint:a=>a*a*a*a*a,easeOutQuint:a=>(a-=1)*a*a*a*a+1,easeInOutQuint:a=>(a/=.5)<1?.5*a*a*a*a*a:.5*((a-=2)*a*a*a*a+2),easeInSine:a=>-Math.cos(a*va)+1,easeOutSine:a=>Math.sin(a*va),easeInOutSine:a=>-.5*(Math.cos(Sn*a)-1),easeInExpo:a=>a===0?0:Math.pow(2,10*(a-1)),easeOutExpo:a=>a===1?1:-Math.pow(2,-10*a)+1,easeInOutExpo:a=>ef(a)?a:a<.5?.5*Math.pow(2,10*(a*2-1)):.5*(-Math.pow(2,-10*(a*2-1))+2),easeInCirc:a=>a>=1?a:-(Math.sqrt(1-a*a)-1),easeOutCirc:a=>Math.sqrt(1-(a-=1)*a),easeInOutCirc:a=>(a/=.5)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1),easeInElastic:a=>ef(a)?a:B1(a,.075,.3),easeOutElastic:a=>ef(a)?a:H1(a,.075,.3),easeInOutElastic(a){return ef(a)?a:a<.5?.5*B1(a*2,.1125,.45):.5+.5*H1(a*2-1,.1125,.45)},easeInBack(a){return a*a*((1.70158+1)*a-1.70158)},easeOutBack(a){return(a-=1)*a*((1.70158+1)*a+1.70158)+1},easeInOutBack(a){let t=1.70158;return(a/=.5)<1?.5*(a*a*(((t*=1.525)+1)*a-t)):.5*((a-=2)*a*(((t*=1.525)+1)*a+t)+2)},easeInBounce:a=>1-Kc.easeOutBounce(1-a),easeOutBounce(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},easeInOutBounce:a=>a<.5?Kc.easeInBounce(a*2)*.5:Kc.easeOutBounce(a*2-1)*.5+.5};function J_(a){if(a&&typeof a=="object"){const t=a.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function F1(a){return J_(a)?a:new uu(a)}function G0(a){return J_(a)?a:new uu(a).saturate(.5).darken(.1).hexString()}const nA=["x","y","borderWidth","radius","tension"],aA=["color","borderColor","backgroundColor"];function sA(a){a.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),a.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),a.set("animations",{colors:{type:"color",properties:aA},numbers:{type:"number",properties:nA}}),a.describe("animations",{_fallback:"animation"}),a.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function rA(a){a.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const P1=new Map;function lA(a,t){t=t||{};const i=a+JSON.stringify(t);let n=P1.get(i);return n||(n=new Intl.NumberFormat(a,t),P1.set(i,n)),n}function t5(a,t,i){return lA(t,i).format(a)}const oA={values(a){return ki(a)?a:""+a},numeric(a,t,i){if(a===0)return"0";const n=this.chart.options.locale;let r,l=a;if(i.length>1){const h=Math.max(Math.abs(i[0].value),Math.abs(i[i.length-1].value));(h<1e-4||h>1e15)&&(r="scientific"),l=cA(a,i)}const c=X_(Math.abs(l)),d=isNaN(c)?1:Math.max(Math.min(-1*Math.floor(c),20),0),f={notation:r,minimumFractionDigits:d,maximumFractionDigits:d};return Object.assign(f,this.options.ticks.format),t5(a,n,f)}};function cA(a,t){let i=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(i)>=1&&a!==Math.floor(a)&&(i=a-Math.floor(a)),i}var e5={formatters:oA};function uA(a){a.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,i)=>i.lineWidth,tickColor:(t,i)=>i.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:e5.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),a.route("scale.ticks","color","","color"),a.route("scale.grid","color","","borderColor"),a.route("scale.border","color","","borderColor"),a.route("scale.title","color","","color"),a.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),a.describe("scales",{_fallback:"scale"}),a.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const ul=Object.create(null),Dg=Object.create(null);function Jc(a,t){if(!t)return a;const i=t.split(".");for(let n=0,r=i.length;n<r;++n){const l=i[n];a=a[l]||(a[l]=Object.create(null))}return a}function q0(a,t,i){return typeof t=="string"?du(Jc(a,t),i):du(Jc(a,""),t)}class dA{constructor(t,i){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=n=>n.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(n,r)=>G0(r.backgroundColor),this.hoverBorderColor=(n,r)=>G0(r.borderColor),this.hoverColor=(n,r)=>G0(r.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(i)}set(t,i){return q0(this,t,i)}get(t){return Jc(this,t)}describe(t,i){return q0(Dg,t,i)}override(t,i){return q0(ul,t,i)}route(t,i,n,r){const l=Jc(this,t),c=Jc(this,n),d="_"+i;Object.defineProperties(l,{[d]:{value:l[i],writable:!0},[i]:{enumerable:!0,get(){const f=this[d],h=c[r];return le(f)?Object.assign({},h,f):de(f,h)},set(f){this[d]=f}}})}apply(t){t.forEach(i=>i(this))}}var li=new dA({_scriptable:a=>!a.startsWith("on"),_indexable:a=>a!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[sA,rA,uA]);function fA(a){return!a||ke(a.size)||ke(a.family)?null:(a.style?a.style+" ":"")+(a.weight?a.weight+" ":"")+a.size+"px "+a.family}function U1(a,t,i,n,r){let l=t[r];return l||(l=t[r]=a.measureText(r).width,i.push(r)),l>n&&(n=l),n}function Gr(a,t,i){const n=a.currentDevicePixelRatio,r=i!==0?Math.max(i/2,.5):0;return Math.round((t-r)*n)/n+r}function Y1(a,t){!t&&!a||(t=t||a.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,a.width,a.height),t.restore())}function G1(a,t,i,n){i5(a,t,i,n,null)}function i5(a,t,i,n,r){let l,c,d,f,h,m,x,b;const v=t.pointStyle,_=t.rotation,w=t.radius;let S=(_||0)*Y4;if(v&&typeof v=="object"&&(l=v.toString(),l==="[object HTMLImageElement]"||l==="[object HTMLCanvasElement]")){a.save(),a.translate(i,n),a.rotate(S),a.drawImage(v,-v.width/2,-v.height/2,v.width,v.height),a.restore();return}if(!(isNaN(w)||w<=0)){switch(a.beginPath(),v){default:r?a.ellipse(i,n,r/2,w,0,0,hr):a.arc(i,n,w,0,hr),a.closePath();break;case"triangle":m=r?r/2:w,a.moveTo(i+Math.sin(S)*m,n-Math.cos(S)*w),S+=j1,a.lineTo(i+Math.sin(S)*m,n-Math.cos(S)*w),S+=j1,a.lineTo(i+Math.sin(S)*m,n-Math.cos(S)*w),a.closePath();break;case"rectRounded":h=w*.516,f=w-h,c=Math.cos(S+Ur)*f,x=Math.cos(S+Ur)*(r?r/2-h:f),d=Math.sin(S+Ur)*f,b=Math.sin(S+Ur)*(r?r/2-h:f),a.arc(i-x,n-d,h,S-Sn,S-va),a.arc(i+b,n-c,h,S-va,S),a.arc(i+x,n+d,h,S,S+va),a.arc(i-b,n+c,h,S+va,S+Sn),a.closePath();break;case"rect":if(!_){f=Math.SQRT1_2*w,m=r?r/2:f,a.rect(i-m,n-f,2*m,2*f);break}S+=Ur;case"rectRot":x=Math.cos(S)*(r?r/2:w),c=Math.cos(S)*w,d=Math.sin(S)*w,b=Math.sin(S)*(r?r/2:w),a.moveTo(i-x,n-d),a.lineTo(i+b,n-c),a.lineTo(i+x,n+d),a.lineTo(i-b,n+c),a.closePath();break;case"crossRot":S+=Ur;case"cross":x=Math.cos(S)*(r?r/2:w),c=Math.cos(S)*w,d=Math.sin(S)*w,b=Math.sin(S)*(r?r/2:w),a.moveTo(i-x,n-d),a.lineTo(i+x,n+d),a.moveTo(i+b,n-c),a.lineTo(i-b,n+c);break;case"star":x=Math.cos(S)*(r?r/2:w),c=Math.cos(S)*w,d=Math.sin(S)*w,b=Math.sin(S)*(r?r/2:w),a.moveTo(i-x,n-d),a.lineTo(i+x,n+d),a.moveTo(i+b,n-c),a.lineTo(i-b,n+c),S+=Ur,x=Math.cos(S)*(r?r/2:w),c=Math.cos(S)*w,d=Math.sin(S)*w,b=Math.sin(S)*(r?r/2:w),a.moveTo(i-x,n-d),a.lineTo(i+x,n+d),a.moveTo(i+b,n-c),a.lineTo(i-b,n+c);break;case"line":c=r?r/2:Math.cos(S)*w,d=Math.sin(S)*w,a.moveTo(i-c,n-d),a.lineTo(i+c,n+d);break;case"dash":a.moveTo(i,n),a.lineTo(i+Math.cos(S)*(r?r/2:w),n+Math.sin(S)*w);break;case!1:a.closePath();break}a.fill(),t.borderWidth>0&&a.stroke()}}function n5(a,t,i){return i=i||.5,!t||a&&a.x>t.left-i&&a.x<t.right+i&&a.y>t.top-i&&a.y<t.bottom+i}function Mm(a,t){a.save(),a.beginPath(),a.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),a.clip()}function Cm(a){a.restore()}function hA(a,t){t.translation&&a.translate(t.translation[0],t.translation[1]),ke(t.rotation)||a.rotate(t.rotation),t.color&&(a.fillStyle=t.color),t.textAlign&&(a.textAlign=t.textAlign),t.textBaseline&&(a.textBaseline=t.textBaseline)}function pA(a,t,i,n,r){if(r.strikethrough||r.underline){const l=a.measureText(n),c=t-l.actualBoundingBoxLeft,d=t+l.actualBoundingBoxRight,f=i-l.actualBoundingBoxAscent,h=i+l.actualBoundingBoxDescent,m=r.strikethrough?(f+h)/2:h;a.strokeStyle=a.fillStyle,a.beginPath(),a.lineWidth=r.decorationWidth||2,a.moveTo(c,m),a.lineTo(d,m),a.stroke()}}function gA(a,t){const i=a.fillStyle;a.fillStyle=t.color,a.fillRect(t.left,t.top,t.width,t.height),a.fillStyle=i}function Vf(a,t,i,n,r,l={}){const c=ki(t)?t:[t],d=l.strokeWidth>0&&l.strokeColor!=="";let f,h;for(a.save(),a.font=r.string,hA(a,l),f=0;f<c.length;++f)h=c[f],l.backdrop&&gA(a,l.backdrop),d&&(l.strokeColor&&(a.strokeStyle=l.strokeColor),ke(l.strokeWidth)||(a.lineWidth=l.strokeWidth),a.strokeText(h,i,n,l.maxWidth)),a.fillText(h,i,n,l.maxWidth),pA(a,i,n,h,l),n+=Number(r.lineHeight);a.restore()}function If(a,t){const{x:i,y:n,w:r,h:l,radius:c}=t;a.arc(i+c.topLeft,n+c.topLeft,c.topLeft,1.5*Sn,Sn,!0),a.lineTo(i,n+l-c.bottomLeft),a.arc(i+c.bottomLeft,n+l-c.bottomLeft,c.bottomLeft,Sn,va,!0),a.lineTo(i+r-c.bottomRight,n+l),a.arc(i+r-c.bottomRight,n+l-c.bottomRight,c.bottomRight,va,0,!0),a.lineTo(i+r,n+c.topRight),a.arc(i+r-c.topRight,n+c.topRight,c.topRight,0,-va,!0),a.lineTo(i+c.topLeft,n)}const mA=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,xA=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function bA(a,t){const i=(""+a).match(mA);if(!i||i[1]==="normal")return t*1.2;switch(a=+i[2],i[3]){case"px":return a;case"%":a/=100;break}return t*a}const vA=a=>+a||0;function a5(a,t){const i={},n=le(t),r=n?Object.keys(t):t,l=le(a)?n?c=>de(a[c],a[t[c]]):c=>a[c]:()=>a;for(const c of r)i[c]=vA(l(c));return i}function s5(a){return a5(a,{top:"y",right:"x",bottom:"y",left:"x"})}function uo(a){return a5(a,["topLeft","topRight","bottomLeft","bottomRight"])}function wa(a){const t=s5(a);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function bn(a,t){a=a||{},t=t||li.font;let i=de(a.size,t.size);typeof i=="string"&&(i=parseInt(i,10));let n=de(a.style,t.style);n&&!(""+n).match(xA)&&(console.warn('Invalid font style specified: "'+n+'"'),n=void 0);const r={family:de(a.family,t.family),lineHeight:bA(de(a.lineHeight,t.lineHeight),i),size:i,style:n,weight:de(a.weight,t.weight),string:""};return r.string=fA(r),r}function nf(a,t,i,n){let r,l,c;for(r=0,l=a.length;r<l;++r)if(c=a[r],c!==void 0&&c!==void 0)return c}function yA(a,t,i){const{min:n,max:r}=a,l=L4(t,(r-n)/2),c=(d,f)=>i&&d===0?0:d+f;return{min:c(n,-Math.abs(l)),max:c(r,l)}}function ko(a,t){return Object.assign(Object.create(a),t)}function Am(a,t=[""],i,n,r=()=>a[0]){const l=i||a;typeof n>"u"&&(n=c5("_fallback",a));const c={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:a,_rootScopes:l,_fallback:n,_getTarget:r,override:d=>Am([d,...a],t,l,n)};return new Proxy(c,{deleteProperty(d,f){return delete d[f],delete d._keys,delete a[0][f],!0},get(d,f){return l5(d,f,()=>CA(f,t,a,d))},getOwnPropertyDescriptor(d,f){return Reflect.getOwnPropertyDescriptor(d._scopes[0],f)},getPrototypeOf(){return Reflect.getPrototypeOf(a[0])},has(d,f){return V1(d).includes(f)},ownKeys(d){return V1(d)},set(d,f,h){const m=d._storage||(d._storage=r());return d[f]=m[f]=h,delete d._keys,!0}})}function wo(a,t,i,n){const r={_cacheable:!1,_proxy:a,_context:t,_subProxy:i,_stack:new Set,_descriptors:r5(a,n),setContext:l=>wo(a,l,i,n),override:l=>wo(a.override(l),t,i,n)};return new Proxy(r,{deleteProperty(l,c){return delete l[c],delete a[c],!0},get(l,c,d){return l5(l,c,()=>_A(l,c,d))},getOwnPropertyDescriptor(l,c){return l._descriptors.allKeys?Reflect.has(a,c)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(a,c)},getPrototypeOf(){return Reflect.getPrototypeOf(a)},has(l,c){return Reflect.has(a,c)},ownKeys(){return Reflect.ownKeys(a)},set(l,c,d){return a[c]=d,delete l[c],!0}})}function r5(a,t={scriptable:!0,indexable:!0}){const{_scriptable:i=t.scriptable,_indexable:n=t.indexable,_allKeys:r=t.allKeys}=a;return{allKeys:r,scriptable:i,indexable:n,isScriptable:vr(i)?i:()=>i,isIndexable:vr(n)?n:()=>n}}const wA=(a,t)=>a?a+Tm(t):t,zm=(a,t)=>le(t)&&a!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function l5(a,t,i){if(Object.prototype.hasOwnProperty.call(a,t)||t==="constructor")return a[t];const n=i();return a[t]=n,n}function _A(a,t,i){const{_proxy:n,_context:r,_subProxy:l,_descriptors:c}=a;let d=n[t];return vr(d)&&c.isScriptable(t)&&(d=SA(t,d,a,i)),ki(d)&&d.length&&(d=kA(t,d,a,c.isIndexable)),zm(t,d)&&(d=wo(d,r,l&&l[t],c)),d}function SA(a,t,i,n){const{_proxy:r,_context:l,_subProxy:c,_stack:d}=i;if(d.has(a))throw new Error("Recursion detected: "+Array.from(d).join("->")+"->"+a);d.add(a);let f=t(l,c||n);return d.delete(a),zm(a,f)&&(f=Om(r._scopes,r,a,f)),f}function kA(a,t,i,n){const{_proxy:r,_context:l,_subProxy:c,_descriptors:d}=i;if(typeof l.index<"u"&&n(a))return t[l.index%t.length];if(le(t[0])){const f=t,h=r._scopes.filter(m=>m!==f);t=[];for(const m of f){const x=Om(h,r,a,m);t.push(wo(x,l,c&&c[a],d))}}return t}function o5(a,t,i){return vr(a)?a(t,i):a}const TA=(a,t)=>a===!0?t:typeof a=="string"?yo(t,a):void 0;function EA(a,t,i,n,r){for(const l of t){const c=TA(i,l);if(c){a.add(c);const d=o5(c._fallback,i,r);if(typeof d<"u"&&d!==i&&d!==n)return d}else if(c===!1&&typeof n<"u"&&i!==n)return null}return!1}function Om(a,t,i,n){const r=t._rootScopes,l=o5(t._fallback,i,n),c=[...a,...r],d=new Set;d.add(n);let f=q1(d,c,i,l||i,n);return f===null||typeof l<"u"&&l!==i&&(f=q1(d,c,l,f,n),f===null)?!1:Am(Array.from(d),[""],r,l,()=>MA(t,i,n))}function q1(a,t,i,n,r){for(;i;)i=EA(a,t,i,n,r);return i}function MA(a,t,i){const n=a._getTarget();t in n||(n[t]={});const r=n[t];return ki(r)&&le(i)?i:r||{}}function CA(a,t,i,n){let r;for(const l of t)if(r=c5(wA(l,a),i),typeof r<"u")return zm(a,r)?Om(i,n,a,r):r}function c5(a,t){for(const i of t){if(!i)continue;const n=i[a];if(typeof n<"u")return n}}function V1(a){let t=a._keys;return t||(t=a._keys=AA(a._scopes)),t}function AA(a){const t=new Set;for(const i of a)for(const n of Object.keys(i).filter(r=>!r.startsWith("_")))t.add(n);return Array.from(t)}function Rm(){return typeof window<"u"&&typeof document<"u"}function jm(a){let t=a.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function Xf(a,t,i){let n;return typeof a=="string"?(n=parseInt(a,10),a.indexOf("%")!==-1&&(n=n/100*t.parentNode[i])):n=a,n}const sh=a=>a.ownerDocument.defaultView.getComputedStyle(a,null);function zA(a,t){return sh(a).getPropertyValue(t)}const OA=["top","right","bottom","left"];function rl(a,t,i){const n={};i=i?"-"+i:"";for(let r=0;r<4;r++){const l=OA[r];n[l]=parseFloat(a[t+"-"+l+i])||0}return n.width=n.left+n.right,n.height=n.top+n.bottom,n}const RA=(a,t,i)=>(a>0||t>0)&&(!i||!i.shadowRoot);function jA(a,t){const i=a.touches,n=i&&i.length?i[0]:a,{offsetX:r,offsetY:l}=n;let c=!1,d,f;if(RA(r,l,a.target))d=r,f=l;else{const h=t.getBoundingClientRect();d=n.clientX-h.left,f=n.clientY-h.top,c=!0}return{x:d,y:f,box:c}}function Wr(a,t){if("native"in a)return a;const{canvas:i,currentDevicePixelRatio:n}=t,r=sh(i),l=r.boxSizing==="border-box",c=rl(r,"padding"),d=rl(r,"border","width"),{x:f,y:h,box:m}=jA(a,i),x=c.left+(m&&d.left),b=c.top+(m&&d.top);let{width:v,height:_}=t;return l&&(v-=c.width+d.width,_-=c.height+d.height),{x:Math.round((f-x)/v*i.width/n),y:Math.round((h-b)/_*i.height/n)}}function DA(a,t,i){let n,r;if(t===void 0||i===void 0){const l=a&&jm(a);if(!l)t=a.clientWidth,i=a.clientHeight;else{const c=l.getBoundingClientRect(),d=sh(l),f=rl(d,"border","width"),h=rl(d,"padding");t=c.width-h.width-f.width,i=c.height-h.height-f.height,n=Xf(d.maxWidth,l,"clientWidth"),r=Xf(d.maxHeight,l,"clientHeight")}}return{width:t,height:i,maxWidth:n||Gf,maxHeight:r||Gf}}const rr=a=>Math.round(a*10)/10;function NA(a,t,i,n){const r=sh(a),l=rl(r,"margin"),c=Xf(r.maxWidth,a,"clientWidth")||Gf,d=Xf(r.maxHeight,a,"clientHeight")||Gf,f=DA(a,t,i);let{width:h,height:m}=f;if(r.boxSizing==="content-box"){const b=rl(r,"border","width"),v=rl(r,"padding");h-=v.width+b.width,m-=v.height+b.height}return h=Math.max(0,h-l.width),m=Math.max(0,n?h/n:m-l.height),h=rr(Math.min(h,c,f.maxWidth)),m=rr(Math.min(m,d,f.maxHeight)),h&&!m&&(m=rr(h/2)),(t!==void 0||i!==void 0)&&n&&f.height&&m>f.height&&(m=f.height,h=rr(Math.floor(m*n))),{width:h,height:m}}function I1(a,t,i){const n=t||1,r=rr(a.height*n),l=rr(a.width*n);a.height=rr(a.height),a.width=rr(a.width);const c=a.canvas;return c.style&&(i||!c.style.height&&!c.style.width)&&(c.style.height=`${a.height}px`,c.style.width=`${a.width}px`),a.currentDevicePixelRatio!==n||c.height!==r||c.width!==l?(a.currentDevicePixelRatio=n,c.height=r,c.width=l,a.ctx.setTransform(n,0,0,n,0,0),!0):!1}const LA=(function(){let a=!1;try{const t={get passive(){return a=!0,!1}};Rm()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return a})();function X1(a,t){const i=zA(a,t),n=i&&i.match(/^(\d+)(\.\d+)?px$/);return n?+n[1]:void 0}const BA=function(a,t){return{x(i){return a+a+t-i},setWidth(i){t=i},textAlign(i){return i==="center"?i:i==="right"?"left":"right"},xPlus(i,n){return i-n},leftForLtr(i,n){return i-n}}},HA=function(){return{x(a){return a},setWidth(a){},textAlign(a){return a},xPlus(a,t){return a+t},leftForLtr(a,t){return a}}};function fo(a,t,i){return a?BA(t,i):HA()}function u5(a,t){let i,n;(t==="ltr"||t==="rtl")&&(i=a.canvas.style,n=[i.getPropertyValue("direction"),i.getPropertyPriority("direction")],i.setProperty("direction",t,"important"),a.prevTextDirection=n)}function d5(a,t){t!==void 0&&(delete a.prevTextDirection,a.canvas.style.setProperty("direction",t[0],t[1]))}function af(a,t,i){return a.options.clip?a[i]:t[i]}function FA(a,t){const{xScale:i,yScale:n}=a;return i&&n?{left:af(i,t,"left"),right:af(i,t,"right"),top:af(n,t,"top"),bottom:af(n,t,"bottom")}:t}function PA(a,t){const i=t._clip;if(i.disabled)return!1;const n=FA(t,a.chartArea);return{left:i.left===!1?0:n.left-(i.left===!0?0:i.left),right:i.right===!1?a.width:n.right+(i.right===!0?0:i.right),top:i.top===!1?0:n.top-(i.top===!0?0:i.top),bottom:i.bottom===!1?a.height:n.bottom+(i.bottom===!0?0:i.bottom)}}class UA{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,i,n,r){const l=i.listeners[r],c=i.duration;l.forEach(d=>d({chart:t,initial:i.initial,numSteps:c,currentStep:Math.min(n-i.start,c)}))}_refresh(){this._request||(this._running=!0,this._request=Q_.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let i=0;this._charts.forEach((n,r)=>{if(!n.running||!n.items.length)return;const l=n.items;let c=l.length-1,d=!1,f;for(;c>=0;--c)f=l[c],f._active?(f._total>n.duration&&(n.duration=f._total),f.tick(t),d=!0):(l[c]=l[l.length-1],l.pop());d&&(r.draw(),this._notify(r,n,t,"progress")),l.length||(n.running=!1,this._notify(r,n,t,"complete"),n.initial=!1),i+=l.length}),this._lastDate=t,i===0&&(this._running=!1)}_getAnims(t){const i=this._charts;let n=i.get(t);return n||(n={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},i.set(t,n)),n}listen(t,i,n){this._getAnims(t).listeners[i].push(n)}add(t,i){!i||!i.length||this._getAnims(t).items.push(...i)}has(t){return this._getAnims(t).items.length>0}start(t){const i=this._charts.get(t);i&&(i.running=!0,i.start=Date.now(),i.duration=i.items.reduce((n,r)=>Math.max(n,r._duration),0),this._refresh())}running(t){if(!this._running)return!1;const i=this._charts.get(t);return!(!i||!i.running||!i.items.length)}stop(t){const i=this._charts.get(t);if(!i||!i.items.length)return;const n=i.items;let r=n.length-1;for(;r>=0;--r)n[r].cancel();i.items=[],this._notify(t,i,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var fs=new UA;const $1="transparent",YA={boolean(a,t,i){return i>.5?t:a},color(a,t,i){const n=F1(a||$1),r=n.valid&&F1(t||$1);return r&&r.valid?r.mix(n,i).hexString():t},number(a,t,i){return a+(t-a)*i}};class GA{constructor(t,i,n,r){const l=i[n];r=nf([t.to,r,l,t.from]);const c=nf([t.from,l,r]);this._active=!0,this._fn=t.fn||YA[t.type||typeof c],this._easing=Kc[t.easing]||Kc.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=i,this._prop=n,this._from=c,this._to=r,this._promises=void 0}active(){return this._active}update(t,i,n){if(this._active){this._notify(!1);const r=this._target[this._prop],l=n-this._start,c=this._duration-l;this._start=n,this._duration=Math.floor(Math.max(c,t.duration)),this._total+=l,this._loop=!!t.loop,this._to=nf([t.to,i,r,t.from]),this._from=nf([t.from,r,i])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const i=t-this._start,n=this._duration,r=this._prop,l=this._from,c=this._loop,d=this._to;let f;if(this._active=l!==d&&(c||i<n),!this._active){this._target[r]=d,this._notify(!0);return}if(i<0){this._target[r]=l;return}f=i/n%2,f=c&&f>1?2-f:f,f=this._easing(Math.min(1,Math.max(0,f))),this._target[r]=this._fn(l,d,f)}wait(){const t=this._promises||(this._promises=[]);return new Promise((i,n)=>{t.push({res:i,rej:n})})}_notify(t){const i=t?"res":"rej",n=this._promises||[];for(let r=0;r<n.length;r++)n[r][i]()}}class f5{constructor(t,i){this._chart=t,this._properties=new Map,this.configure(i)}configure(t){if(!le(t))return;const i=Object.keys(li.animation),n=this._properties;Object.getOwnPropertyNames(t).forEach(r=>{const l=t[r];if(!le(l))return;const c={};for(const d of i)c[d]=l[d];(ki(l.properties)&&l.properties||[r]).forEach(d=>{(d===r||!n.has(d))&&n.set(d,c)})})}_animateOptions(t,i){const n=i.options,r=VA(t,n);if(!r)return[];const l=this._createAnimations(r,n);return n.$shared&&qA(t.options.$animations,n).then(()=>{t.options=n},()=>{}),l}_createAnimations(t,i){const n=this._properties,r=[],l=t.$animations||(t.$animations={}),c=Object.keys(i),d=Date.now();let f;for(f=c.length-1;f>=0;--f){const h=c[f];if(h.charAt(0)==="$")continue;if(h==="options"){r.push(...this._animateOptions(t,i));continue}const m=i[h];let x=l[h];const b=n.get(h);if(x)if(b&&x.active()){x.update(b,m,d);continue}else x.cancel();if(!b||!b.duration){t[h]=m;continue}l[h]=x=new GA(b,t,h,m),r.push(x)}return r}update(t,i){if(this._properties.size===0){Object.assign(t,i);return}const n=this._createAnimations(t,i);if(n.length)return fs.add(this._chart,n),!0}}function qA(a,t){const i=[],n=Object.keys(t);for(let r=0;r<n.length;r++){const l=a[n[r]];l&&l.active()&&i.push(l.wait())}return Promise.all(i)}function VA(a,t){if(!t)return;let i=a.options;if(!i){a.options=t;return}return i.$shared&&(a.options=i=Object.assign({},i,{$shared:!1,$animations:{}})),i}function W1(a,t){const i=a&&a.options||{},n=i.reverse,r=i.min===void 0?t:0,l=i.max===void 0?t:0;return{start:n?l:r,end:n?r:l}}function IA(a,t,i){if(i===!1)return!1;const n=W1(a,i),r=W1(t,i);return{top:r.end,right:n.end,bottom:r.start,left:n.start}}function XA(a){let t,i,n,r;return le(a)?(t=a.top,i=a.right,n=a.bottom,r=a.left):t=i=n=r=a,{top:t,right:i,bottom:n,left:r,disabled:a===!1}}function h5(a,t){const i=[],n=a._getSortedDatasetMetas(t);let r,l;for(r=0,l=n.length;r<l;++r)i.push(n[r].index);return i}function Q1(a,t,i,n={}){const r=a.keys,l=n.mode==="single";let c,d,f,h;if(t===null)return;let m=!1;for(c=0,d=r.length;c<d;++c){if(f=+r[c],f===i){if(m=!0,n.all)continue;break}h=a.values[f],ha(h)&&(l||t===0||pr(t)===pr(h))&&(t+=h)}return!m&&!n.all?0:t}function $A(a,t){const{iScale:i,vScale:n}=t,r=i.axis==="x"?"x":"y",l=n.axis==="x"?"x":"y",c=Object.keys(a),d=new Array(c.length);let f,h,m;for(f=0,h=c.length;f<h;++f)m=c[f],d[f]={[r]:m,[l]:a[m]};return d}function V0(a,t){const i=a&&a.options.stacked;return i||i===void 0&&t.stack!==void 0}function WA(a,t,i){return`${a.id}.${t.id}.${i.stack||i.type}`}function QA(a){const{min:t,max:i,minDefined:n,maxDefined:r}=a.getUserBounds();return{min:n?t:Number.NEGATIVE_INFINITY,max:r?i:Number.POSITIVE_INFINITY}}function ZA(a,t,i){const n=a[t]||(a[t]={});return n[i]||(n[i]={})}function Z1(a,t,i,n){for(const r of t.getMatchingVisibleMetas(n).reverse()){const l=a[r.index];if(i&&l>0||!i&&l<0)return r.index}return null}function K1(a,t){const{chart:i,_cachedMeta:n}=a,r=i._stacks||(i._stacks={}),{iScale:l,vScale:c,index:d}=n,f=l.axis,h=c.axis,m=WA(l,c,n),x=t.length;let b;for(let v=0;v<x;++v){const _=t[v],{[f]:w,[h]:S}=_,E=_._stacks||(_._stacks={});b=E[h]=ZA(r,m,w),b[d]=S,b._top=Z1(b,c,!0,n.type),b._bottom=Z1(b,c,!1,n.type);const M=b._visualValues||(b._visualValues={});M[d]=S}}function I0(a,t){const i=a.scales;return Object.keys(i).filter(n=>i[n].axis===t).shift()}function KA(a,t){return ko(a,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function JA(a,t,i){return ko(a,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:i,index:t,mode:"default",type:"data"})}function vc(a,t){const i=a.controller.index,n=a.vScale&&a.vScale.axis;if(n){t=t||a._parsed;for(const r of t){const l=r._stacks;if(!l||l[n]===void 0||l[n][i]===void 0)return;delete l[n][i],l[n]._visualValues!==void 0&&l[n]._visualValues[i]!==void 0&&delete l[n]._visualValues[i]}}}const X0=a=>a==="reset"||a==="none",J1=(a,t)=>t?a:Object.assign({},a),tz=(a,t,i)=>a&&!t.hidden&&t._stacked&&{keys:h5(i,!0),values:null};class p5{static defaults={};static datasetElementType=null;static dataElementType=null;constructor(t,i){this.chart=t,this._ctx=t.ctx,this.index=i,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=V0(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&vc(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,i=this._cachedMeta,n=this.getDataset(),r=(x,b,v,_)=>x==="x"?b:x==="r"?_:v,l=i.xAxisID=de(n.xAxisID,I0(t,"x")),c=i.yAxisID=de(n.yAxisID,I0(t,"y")),d=i.rAxisID=de(n.rAxisID,I0(t,"r")),f=i.indexAxis,h=i.iAxisID=r(f,l,c,d),m=i.vAxisID=r(f,c,l,d);i.xScale=this.getScaleForId(l),i.yScale=this.getScaleForId(c),i.rScale=this.getScaleForId(d),i.iScale=this.getScaleForId(h),i.vScale=this.getScaleForId(m)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const i=this._cachedMeta;return t===i.iScale?i.vScale:i.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&L1(this._data,this),t._stacked&&vc(t)}_dataCheck(){const t=this.getDataset(),i=t.data||(t.data=[]),n=this._data;if(le(i)){const r=this._cachedMeta;this._data=$A(i,r)}else if(n!==i){if(n){L1(n,this);const r=this._cachedMeta;vc(r),r._parsed=[]}i&&Object.isExtensible(i)&&tA(i,this),this._syncList=[],this._data=i}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const i=this._cachedMeta,n=this.getDataset();let r=!1;this._dataCheck();const l=i._stacked;i._stacked=V0(i.vScale,i),i.stack!==n.stack&&(r=!0,vc(i),i.stack=n.stack),this._resyncElements(t),(r||l!==i._stacked)&&(K1(this,i._parsed),i._stacked=V0(i.vScale,i))}configure(){const t=this.chart.config,i=t.datasetScopeKeys(this._type),n=t.getOptionScopes(this.getDataset(),i,!0);this.options=t.createResolver(n,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,i){const{_cachedMeta:n,_data:r}=this,{iScale:l,_stacked:c}=n,d=l.axis;let f=t===0&&i===r.length?!0:n._sorted,h=t>0&&n._parsed[t-1],m,x,b;if(this._parsing===!1)n._parsed=r,n._sorted=!0,b=r;else{ki(r[t])?b=this.parseArrayData(n,r,t,i):le(r[t])?b=this.parseObjectData(n,r,t,i):b=this.parsePrimitiveData(n,r,t,i);const v=()=>x[d]===null||h&&x[d]<h[d];for(m=0;m<i;++m)n._parsed[m+t]=x=b[m],f&&(v()&&(f=!1),h=x);n._sorted=f}c&&K1(this,b)}parsePrimitiveData(t,i,n,r){const{iScale:l,vScale:c}=t,d=l.axis,f=c.axis,h=l.getLabels(),m=l===c,x=new Array(r);let b,v,_;for(b=0,v=r;b<v;++b)_=b+n,x[b]={[d]:m||l.parse(h[_],_),[f]:c.parse(i[_],_)};return x}parseArrayData(t,i,n,r){const{xScale:l,yScale:c}=t,d=new Array(r);let f,h,m,x;for(f=0,h=r;f<h;++f)m=f+n,x=i[m],d[f]={x:l.parse(x[0],m),y:c.parse(x[1],m)};return d}parseObjectData(t,i,n,r){const{xScale:l,yScale:c}=t,{xAxisKey:d="x",yAxisKey:f="y"}=this._parsing,h=new Array(r);let m,x,b,v;for(m=0,x=r;m<x;++m)b=m+n,v=i[b],h[m]={x:l.parse(yo(v,d),b),y:c.parse(yo(v,f),b)};return h}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,i,n){const r=this.chart,l=this._cachedMeta,c=i[t.axis],d={keys:h5(r,!0),values:i._stacks[t.axis]._visualValues};return Q1(d,c,l.index,{mode:n})}updateRangeFromParsed(t,i,n,r){const l=n[i.axis];let c=l===null?NaN:l;const d=r&&n._stacks[i.axis];r&&d&&(r.values=d,c=Q1(r,l,this._cachedMeta.index)),t.min=Math.min(t.min,c),t.max=Math.max(t.max,c)}getMinMax(t,i){const n=this._cachedMeta,r=n._parsed,l=n._sorted&&t===n.iScale,c=r.length,d=this._getOtherScale(t),f=tz(i,n,this.chart),h={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:m,max:x}=QA(d);let b,v;function _(){v=r[b];const w=v[d.axis];return!ha(v[t.axis])||m>w||x<w}for(b=0;b<c&&!(!_()&&(this.updateRangeFromParsed(h,t,v,f),l));++b);if(l){for(b=c-1;b>=0;--b)if(!_()){this.updateRangeFromParsed(h,t,v,f);break}}return h}getAllParsedValues(t){const i=this._cachedMeta._parsed,n=[];let r,l,c;for(r=0,l=i.length;r<l;++r)c=i[r][t.axis],ha(c)&&n.push(c);return n}getMaxOverflow(){return!1}getLabelAndValue(t){const i=this._cachedMeta,n=i.iScale,r=i.vScale,l=this.getParsed(t);return{label:n?""+n.getLabelForValue(l[n.axis]):"",value:r?""+r.getLabelForValue(l[r.axis]):""}}_update(t){const i=this._cachedMeta;this.update(t||"default"),i._clip=XA(de(this.options.clip,IA(i.xScale,i.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,i=this.chart,n=this._cachedMeta,r=n.data||[],l=i.chartArea,c=[],d=this._drawStart||0,f=this._drawCount||r.length-d,h=this.options.drawActiveElementsOnTop;let m;for(n.dataset&&n.dataset.draw(t,l,d,f),m=d;m<d+f;++m){const x=r[m];x.hidden||(x.active&&h?c.push(x):x.draw(t,l))}for(m=0;m<c.length;++m)c[m].draw(t,l)}getStyle(t,i){const n=i?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(n):this.resolveDataElementOptions(t||0,n)}getContext(t,i,n){const r=this.getDataset();let l;if(t>=0&&t<this._cachedMeta.data.length){const c=this._cachedMeta.data[t];l=c.$context||(c.$context=JA(this.getContext(),t,c)),l.parsed=this.getParsed(t),l.raw=r.data[t],l.index=l.dataIndex=t}else l=this.$context||(this.$context=KA(this.chart.getContext(),this.index)),l.dataset=r,l.index=l.datasetIndex=this.index;return l.active=!!i,l.mode=n,l}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,i){return this._resolveElementOptions(this.dataElementType.id,i,t)}_resolveElementOptions(t,i="default",n){const r=i==="active",l=this._cachedDataOpts,c=t+"-"+i,d=l[c],f=this.enableOptionSharing&&fu(n);if(d)return J1(d,f);const h=this.chart.config,m=h.datasetElementScopeKeys(this._type,t),x=r?[`${t}Hover`,"hover",t,""]:[t,""],b=h.getOptionScopes(this.getDataset(),m),v=Object.keys(li.elements[t]),_=()=>this.getContext(n,r,i),w=h.resolveNamedOptions(b,v,_,x);return w.$shared&&(w.$shared=f,l[c]=Object.freeze(J1(w,f))),w}_resolveAnimations(t,i,n){const r=this.chart,l=this._cachedDataOpts,c=`animation-${i}`,d=l[c];if(d)return d;let f;if(r.options.animation!==!1){const m=this.chart.config,x=m.datasetAnimationScopeKeys(this._type,i),b=m.getOptionScopes(this.getDataset(),x);f=m.createResolver(b,this.getContext(t,n,i))}const h=new f5(r,f&&f.animations);return f&&f._cacheable&&(l[c]=Object.freeze(h)),h}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,i){return!i||X0(t)||this.chart._animationsDisabled}_getSharedOptions(t,i){const n=this.resolveDataElementOptions(t,i),r=this._sharedOptions,l=this.getSharedOptions(n),c=this.includeOptions(i,l)||l!==r;return this.updateSharedOptions(l,i,n),{sharedOptions:l,includeOptions:c}}updateElement(t,i,n,r){X0(r)?Object.assign(t,n):this._resolveAnimations(i,r).update(t,n)}updateSharedOptions(t,i,n){t&&!X0(i)&&this._resolveAnimations(void 0,i).update(t,n)}_setStyle(t,i,n,r){t.active=r;const l=this.getStyle(i,r);this._resolveAnimations(i,n,r).update(t,{options:!r&&this.getSharedOptions(l)||l})}removeHoverStyle(t,i,n){this._setStyle(t,n,"active",!1)}setHoverStyle(t,i,n){this._setStyle(t,n,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const i=this._data,n=this._cachedMeta.data;for(const[d,f,h]of this._syncList)this[d](f,h);this._syncList=[];const r=n.length,l=i.length,c=Math.min(l,r);c&&this.parse(0,c),l>r?this._insertElements(r,l-r,t):l<r&&this._removeElements(l,r-l)}_insertElements(t,i,n=!0){const r=this._cachedMeta,l=r.data,c=t+i;let d;const f=h=>{for(h.length+=i,d=h.length-1;d>=c;d--)h[d]=h[d-i]};for(f(l),d=t;d<c;++d)l[d]=new this.dataElementType;this._parsing&&f(r._parsed),this.parse(t,i),n&&this.updateElements(l,t,i,"reset")}updateElements(t,i,n,r){}_removeElements(t,i){const n=this._cachedMeta;if(this._parsing){const r=n._parsed.splice(t,i);n._stacked&&vc(n,r)}n.data.splice(t,i)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[i,n,r]=t;this[i](n,r)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,i){i&&this._sync(["_removeElements",t,i]);const n=arguments.length-2;n&&this._sync(["_insertElements",t,n])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}function ez(a,t){if(!a._cache.$bar){const i=a.getMatchingVisibleMetas(t);let n=[];for(let r=0,l=i.length;r<l;r++)n=n.concat(i[r].controller.getAllParsedValues(a));a._cache.$bar=W_(n.sort((r,l)=>r-l))}return a._cache.$bar}function iz(a){const t=a.iScale,i=ez(t,a.type);let n=t._length,r,l,c,d;const f=()=>{c===32767||c===-32768||(fu(d)&&(n=Math.min(n,Math.abs(c-d)||n)),d=c)};for(r=0,l=i.length;r<l;++r)c=t.getPixelForValue(i[r]),f();for(d=void 0,r=0,l=t.ticks.length;r<l;++r)c=t.getPixelForTick(r),f();return n}function nz(a,t,i,n){const r=i.barThickness;let l,c;return ke(r)?(l=t.min*i.categoryPercentage,c=i.barPercentage):(l=r*n,c=1),{chunk:l/n,ratio:c,start:t.pixels[a]-l/2}}function az(a,t,i,n){const r=t.pixels,l=r[a];let c=a>0?r[a-1]:null,d=a<r.length-1?r[a+1]:null;const f=i.categoryPercentage;c===null&&(c=l-(d===null?t.end-t.start:d-l)),d===null&&(d=l+l-c);const h=l-(l-Math.min(c,d))/2*f;return{chunk:Math.abs(d-c)/2*f/n,ratio:i.barPercentage,start:h}}function sz(a,t,i,n){const r=i.parse(a[0],n),l=i.parse(a[1],n),c=Math.min(r,l),d=Math.max(r,l);let f=c,h=d;Math.abs(c)>Math.abs(d)&&(f=d,h=c),t[i.axis]=h,t._custom={barStart:f,barEnd:h,start:r,end:l,min:c,max:d}}function g5(a,t,i,n){return ki(a)?sz(a,t,i,n):t[i.axis]=i.parse(a,n),t}function t2(a,t,i,n){const r=a.iScale,l=a.vScale,c=r.getLabels(),d=r===l,f=[];let h,m,x,b;for(h=i,m=i+n;h<m;++h)b=t[h],x={},x[r.axis]=d||r.parse(c[h],h),f.push(g5(b,x,l,h));return f}function $0(a){return a&&a.barStart!==void 0&&a.barEnd!==void 0}function rz(a,t,i){return a!==0?pr(a):(t.isHorizontal()?1:-1)*(t.min>=i?1:-1)}function lz(a){let t,i,n,r,l;return a.horizontal?(t=a.base>a.x,i="left",n="right"):(t=a.base<a.y,i="bottom",n="top"),t?(r="end",l="start"):(r="start",l="end"),{start:i,end:n,reverse:t,top:r,bottom:l}}function oz(a,t,i,n){let r=t.borderSkipped;const l={};if(!r){a.borderSkipped=l;return}if(r===!0){a.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:c,end:d,reverse:f,top:h,bottom:m}=lz(a);r==="middle"&&i&&(a.enableBorderRadius=!0,(i._top||0)===n?r=h:(i._bottom||0)===n?r=m:(l[e2(m,c,d,f)]=!0,r=h)),l[e2(r,c,d,f)]=!0,a.borderSkipped=l}function e2(a,t,i,n){return n?(a=cz(a,t,i),a=i2(a,i,t)):a=i2(a,t,i),a}function cz(a,t,i){return a===t?i:a===i?t:a}function i2(a,t,i){return a==="start"?t:a==="end"?i:a}function uz(a,{inflateAmount:t},i){a.inflateAmount=t==="auto"?i===1?.33:0:t}class dz extends p5{static id="bar";static defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}};static overrides={scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};parsePrimitiveData(t,i,n,r){return t2(t,i,n,r)}parseArrayData(t,i,n,r){return t2(t,i,n,r)}parseObjectData(t,i,n,r){const{iScale:l,vScale:c}=t,{xAxisKey:d="x",yAxisKey:f="y"}=this._parsing,h=l.axis==="x"?d:f,m=c.axis==="x"?d:f,x=[];let b,v,_,w;for(b=n,v=n+r;b<v;++b)w=i[b],_={},_[l.axis]=l.parse(yo(w,h),b),x.push(g5(yo(w,m),_,c,b));return x}updateRangeFromParsed(t,i,n,r){super.updateRangeFromParsed(t,i,n,r);const l=n._custom;l&&i===this._cachedMeta.vScale&&(t.min=Math.min(t.min,l.min),t.max=Math.max(t.max,l.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const i=this._cachedMeta,{iScale:n,vScale:r}=i,l=this.getParsed(t),c=l._custom,d=$0(c)?"["+c.start+", "+c.end+"]":""+r.getLabelForValue(l[r.axis]);return{label:""+n.getLabelForValue(l[n.axis]),value:d}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const i=this._cachedMeta;this.updateElements(i.data,0,i.data.length,t)}updateElements(t,i,n,r){const l=r==="reset",{index:c,_cachedMeta:{vScale:d}}=this,f=d.getBasePixel(),h=d.isHorizontal(),m=this._getRuler(),{sharedOptions:x,includeOptions:b}=this._getSharedOptions(i,r);for(let v=i;v<i+n;v++){const _=this.getParsed(v),w=l||ke(_[d.axis])?{base:f,head:f}:this._calculateBarValuePixels(v),S=this._calculateBarIndexPixels(v,m),E=(_._stacks||{})[d.axis],M={horizontal:h,base:w.base,enableBorderRadius:!E||$0(_._custom)||c===E._top||c===E._bottom,x:h?w.head:S.center,y:h?S.center:w.head,height:h?S.size:Math.abs(w.size),width:h?Math.abs(w.size):S.size};b&&(M.options=x||this.resolveDataElementOptions(v,t[v].active?"active":r));const A=M.options||t[v].options;oz(M,A,E,c),uz(M,A,m.ratio),this.updateElement(t[v],v,M,r)}}_getStacks(t,i){const{iScale:n}=this._cachedMeta,r=n.getMatchingVisibleMetas(this._type).filter(m=>m.controller.options.grouped),l=n.options.stacked,c=[],d=this._cachedMeta.controller.getParsed(i),f=d&&d[n.axis],h=m=>{const x=m._parsed.find(v=>v[n.axis]===f),b=x&&x[m.vScale.axis];if(ke(b)||isNaN(b))return!0};for(const m of r)if(!(i!==void 0&&h(m))&&((l===!1||c.indexOf(m.stack)===-1||l===void 0&&m.stack===void 0)&&c.push(m.stack),m.index===t))break;return c.length||c.push(void 0),c}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,i=this.chart.options.indexAxis;return Object.keys(t).filter(n=>t[n].axis===i).shift()}_getAxis(){const t={},i=this.getFirstScaleIdForIndexAxis();for(const n of this.chart.data.datasets)t[de(this.chart.options.indexAxis==="x"?n.xAxisID:n.yAxisID,i)]=!0;return Object.keys(t)}_getStackIndex(t,i,n){const r=this._getStacks(t,n),l=i!==void 0?r.indexOf(i):-1;return l===-1?r.length-1:l}_getRuler(){const t=this.options,i=this._cachedMeta,n=i.iScale,r=[];let l,c;for(l=0,c=i.data.length;l<c;++l)r.push(n.getPixelForValue(this.getParsed(l)[n.axis],l));const d=t.barThickness;return{min:d||iz(i),pixels:r,start:n._startPixel,end:n._endPixel,stackCount:this._getStackCount(),scale:n,grouped:t.grouped,ratio:d?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:i,_stacked:n,index:r},options:{base:l,minBarLength:c}}=this,d=l||0,f=this.getParsed(t),h=f._custom,m=$0(h);let x=f[i.axis],b=0,v=n?this.applyStack(i,f,n):x,_,w;v!==x&&(b=v-x,v=x),m&&(x=h.barStart,v=h.barEnd-h.barStart,x!==0&&pr(x)!==pr(h.barEnd)&&(b=0),b+=x);const S=!ke(l)&&!m?l:b;let E=i.getPixelForValue(S);if(this.chart.getDataVisibility(t)?_=i.getPixelForValue(b+v):_=E,w=_-E,Math.abs(w)<c){w=rz(w,i,d)*c,x===d&&(E-=w/2);const M=i.getPixelForDecimal(0),A=i.getPixelForDecimal(1),O=Math.min(M,A),z=Math.max(M,A);E=Math.max(Math.min(E,z),O),_=E+w,n&&!m&&(f._stacks[i.axis]._visualValues[r]=i.getValueForPixel(_)-i.getValueForPixel(E))}if(E===i.getPixelForValue(d)){const M=pr(w)*i.getLineWidthForValue(d)/2;E+=M,w-=M}return{size:w,base:E,head:_,center:_+w/2}}_calculateBarIndexPixels(t,i){const n=i.scale,r=this.options,l=r.skipNull,c=de(r.maxBarThickness,1/0);let d,f;const h=this._getAxisCount();if(i.grouped){const m=l?this._getStackCount(t):i.stackCount,x=r.barThickness==="flex"?az(t,i,r,m*h):nz(t,i,r,m*h),b=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,v=this._getAxis().indexOf(de(b,this.getFirstScaleIdForIndexAxis())),_=this._getStackIndex(this.index,this._cachedMeta.stack,l?t:void 0)+v;d=x.start+x.chunk*_+x.chunk/2,f=Math.min(c,x.chunk*x.ratio)}else d=n.getPixelForValue(this.getParsed(t)[n.axis],t),f=Math.min(c,i.min*i.ratio);return{base:d-f/2,head:d+f/2,center:d,size:f}}draw(){const t=this._cachedMeta,i=t.vScale,n=t.data,r=n.length;let l=0;for(;l<r;++l)this.getParsed(l)[i.axis]!==null&&!n[l].hidden&&n[l].draw(this._ctx)}}function qr(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Dm{static override(t){Object.assign(Dm.prototype,t)}options;constructor(t){this.options=t||{}}init(){}formats(){return qr()}parse(){return qr()}format(){return qr()}add(){return qr()}diff(){return qr()}startOf(){return qr()}endOf(){return qr()}}var fz={_date:Dm};function hz(a,t,i,n){const{controller:r,data:l,_sorted:c}=a,d=r._cachedMeta.iScale,f=a.dataset&&a.dataset.options?a.dataset.options.spanGaps:null;if(d&&t===d.axis&&t!=="r"&&c&&l.length){const h=d._reversePixels?K4:jg;if(n){if(r._sharedOptions){const m=l[0],x=typeof m.getRange=="function"&&m.getRange(t);if(x){const b=h(l,t,i-x),v=h(l,t,i+x);return{lo:b.lo,hi:v.hi}}}}else{const m=h(l,t,i);if(f){const{vScale:x}=r._cachedMeta,{_parsed:b}=a,v=b.slice(0,m.lo+1).reverse().findIndex(w=>!ke(w[x.axis]));m.lo-=Math.max(0,v);const _=b.slice(m.hi).findIndex(w=>!ke(w[x.axis]));m.hi+=Math.max(0,_)}return m}}return{lo:0,hi:l.length-1}}function rh(a,t,i,n,r){const l=a.getSortedVisibleDatasetMetas(),c=i[t];for(let d=0,f=l.length;d<f;++d){const{index:h,data:m}=l[d],{lo:x,hi:b}=hz(l[d],t,c,r);for(let v=x;v<=b;++v){const _=m[v];_.skip||n(_,h,v)}}}function pz(a){const t=a.indexOf("x")!==-1,i=a.indexOf("y")!==-1;return function(n,r){const l=t?Math.abs(n.x-r.x):0,c=i?Math.abs(n.y-r.y):0;return Math.sqrt(Math.pow(l,2)+Math.pow(c,2))}}function W0(a,t,i,n,r){const l=[];return!r&&!a.isPointInArea(t)||rh(a,i,t,function(d,f,h){!r&&!n5(d,a.chartArea,0)||d.inRange(t.x,t.y,n)&&l.push({element:d,datasetIndex:f,index:h})},!0),l}function gz(a,t,i,n){let r=[];function l(c,d,f){const{startAngle:h,endAngle:m}=c.getProps(["startAngle","endAngle"],n),{angle:x}=$4(c,{x:t.x,y:t.y});Q4(x,h,m)&&r.push({element:c,datasetIndex:d,index:f})}return rh(a,i,t,l),r}function mz(a,t,i,n,r,l){let c=[];const d=pz(i);let f=Number.POSITIVE_INFINITY;function h(m,x,b){const v=m.inRange(t.x,t.y,r);if(n&&!v)return;const _=m.getCenterPoint(r);if(!(!!l||a.isPointInArea(_))&&!v)return;const S=d(t,_);S<f?(c=[{element:m,datasetIndex:x,index:b}],f=S):S===f&&c.push({element:m,datasetIndex:x,index:b})}return rh(a,i,t,h),c}function Q0(a,t,i,n,r,l){return!l&&!a.isPointInArea(t)?[]:i==="r"&&!n?gz(a,t,i,r):mz(a,t,i,n,r,l)}function n2(a,t,i,n,r){const l=[],c=i==="x"?"inXRange":"inYRange";let d=!1;return rh(a,i,t,(f,h,m)=>{f[c]&&f[c](t[i],r)&&(l.push({element:f,datasetIndex:h,index:m}),d=d||f.inRange(t.x,t.y,r))}),n&&!d?[]:l}var xz={modes:{index(a,t,i,n){const r=Wr(t,a),l=i.axis||"x",c=i.includeInvisible||!1,d=i.intersect?W0(a,r,l,n,c):Q0(a,r,l,!1,n,c),f=[];return d.length?(a.getSortedVisibleDatasetMetas().forEach(h=>{const m=d[0].index,x=h.data[m];x&&!x.skip&&f.push({element:x,datasetIndex:h.index,index:m})}),f):[]},dataset(a,t,i,n){const r=Wr(t,a),l=i.axis||"xy",c=i.includeInvisible||!1;let d=i.intersect?W0(a,r,l,n,c):Q0(a,r,l,!1,n,c);if(d.length>0){const f=d[0].datasetIndex,h=a.getDatasetMeta(f).data;d=[];for(let m=0;m<h.length;++m)d.push({element:h[m],datasetIndex:f,index:m})}return d},point(a,t,i,n){const r=Wr(t,a),l=i.axis||"xy",c=i.includeInvisible||!1;return W0(a,r,l,n,c)},nearest(a,t,i,n){const r=Wr(t,a),l=i.axis||"xy",c=i.includeInvisible||!1;return Q0(a,r,l,i.intersect,n,c)},x(a,t,i,n){const r=Wr(t,a);return n2(a,r,"x",i.intersect,n)},y(a,t,i,n){const r=Wr(t,a);return n2(a,r,"y",i.intersect,n)}}};const m5=["left","top","right","bottom"];function yc(a,t){return a.filter(i=>i.pos===t)}function a2(a,t){return a.filter(i=>m5.indexOf(i.pos)===-1&&i.box.axis===t)}function wc(a,t){return a.sort((i,n)=>{const r=t?n:i,l=t?i:n;return r.weight===l.weight?r.index-l.index:r.weight-l.weight})}function bz(a){const t=[];let i,n,r,l,c,d;for(i=0,n=(a||[]).length;i<n;++i)r=a[i],{position:l,options:{stack:c,stackWeight:d=1}}=r,t.push({index:i,box:r,pos:l,horizontal:r.isHorizontal(),weight:r.weight,stack:c&&l+c,stackWeight:d});return t}function vz(a){const t={};for(const i of a){const{stack:n,pos:r,stackWeight:l}=i;if(!n||!m5.includes(r))continue;const c=t[n]||(t[n]={count:0,placed:0,weight:0,size:0});c.count++,c.weight+=l}return t}function yz(a,t){const i=vz(a),{vBoxMaxWidth:n,hBoxMaxHeight:r}=t;let l,c,d;for(l=0,c=a.length;l<c;++l){d=a[l];const{fullSize:f}=d.box,h=i[d.stack],m=h&&d.stackWeight/h.weight;d.horizontal?(d.width=m?m*n:f&&t.availableWidth,d.height=r):(d.width=n,d.height=m?m*r:f&&t.availableHeight)}return i}function wz(a){const t=bz(a),i=wc(t.filter(h=>h.box.fullSize),!0),n=wc(yc(t,"left"),!0),r=wc(yc(t,"right")),l=wc(yc(t,"top"),!0),c=wc(yc(t,"bottom")),d=a2(t,"x"),f=a2(t,"y");return{fullSize:i,leftAndTop:n.concat(l),rightAndBottom:r.concat(f).concat(c).concat(d),chartArea:yc(t,"chartArea"),vertical:n.concat(r).concat(f),horizontal:l.concat(c).concat(d)}}function s2(a,t,i,n){return Math.max(a[i],t[i])+Math.max(a[n],t[n])}function x5(a,t){a.top=Math.max(a.top,t.top),a.left=Math.max(a.left,t.left),a.bottom=Math.max(a.bottom,t.bottom),a.right=Math.max(a.right,t.right)}function _z(a,t,i,n){const{pos:r,box:l}=i,c=a.maxPadding;if(!le(r)){i.size&&(a[r]-=i.size);const x=n[i.stack]||{size:0,count:1};x.size=Math.max(x.size,i.horizontal?l.height:l.width),i.size=x.size/x.count,a[r]+=i.size}l.getPadding&&x5(c,l.getPadding());const d=Math.max(0,t.outerWidth-s2(c,a,"left","right")),f=Math.max(0,t.outerHeight-s2(c,a,"top","bottom")),h=d!==a.w,m=f!==a.h;return a.w=d,a.h=f,i.horizontal?{same:h,other:m}:{same:m,other:h}}function Sz(a){const t=a.maxPadding;function i(n){const r=Math.max(t[n]-a[n],0);return a[n]+=r,r}a.y+=i("top"),a.x+=i("left"),i("right"),i("bottom")}function kz(a,t){const i=t.maxPadding;function n(r){const l={left:0,top:0,right:0,bottom:0};return r.forEach(c=>{l[c]=Math.max(t[c],i[c])}),l}return n(a?["left","right"]:["top","bottom"])}function Nc(a,t,i,n){const r=[];let l,c,d,f,h,m;for(l=0,c=a.length,h=0;l<c;++l){d=a[l],f=d.box,f.update(d.width||t.w,d.height||t.h,kz(d.horizontal,t));const{same:x,other:b}=_z(t,i,d,n);h|=x&&r.length,m=m||b,f.fullSize||r.push(d)}return h&&Nc(r,t,i,n)||m}function sf(a,t,i,n,r){a.top=i,a.left=t,a.right=t+n,a.bottom=i+r,a.width=n,a.height=r}function r2(a,t,i,n){const r=i.padding;let{x:l,y:c}=t;for(const d of a){const f=d.box,h=n[d.stack]||{placed:0,weight:1},m=d.stackWeight/h.weight||1;if(d.horizontal){const x=t.w*m,b=h.size||f.height;fu(h.start)&&(c=h.start),f.fullSize?sf(f,r.left,c,i.outerWidth-r.right-r.left,b):sf(f,t.left+h.placed,c,x,b),h.start=c,h.placed+=x,c=f.bottom}else{const x=t.h*m,b=h.size||f.width;fu(h.start)&&(l=h.start),f.fullSize?sf(f,l,r.top,b,i.outerHeight-r.bottom-r.top):sf(f,l,t.top+h.placed,b,x),h.start=l,h.placed+=x,l=f.right}}t.x=l,t.y=c}var lr={addBox(a,t){a.boxes||(a.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(i){t.draw(i)}}]},a.boxes.push(t)},removeBox(a,t){const i=a.boxes?a.boxes.indexOf(t):-1;i!==-1&&a.boxes.splice(i,1)},configure(a,t,i){t.fullSize=i.fullSize,t.position=i.position,t.weight=i.weight},update(a,t,i,n){if(!a)return;const r=wa(a.options.layout.padding),l=Math.max(t-r.width,0),c=Math.max(i-r.height,0),d=wz(a.boxes),f=d.vertical,h=d.horizontal;me(a.boxes,w=>{typeof w.beforeLayout=="function"&&w.beforeLayout()});const m=f.reduce((w,S)=>S.box.options&&S.box.options.display===!1?w:w+1,0)||1,x=Object.freeze({outerWidth:t,outerHeight:i,padding:r,availableWidth:l,availableHeight:c,vBoxMaxWidth:l/2/m,hBoxMaxHeight:c/2}),b=Object.assign({},r);x5(b,wa(n));const v=Object.assign({maxPadding:b,w:l,h:c,x:r.left,y:r.top},r),_=yz(f.concat(h),x);Nc(d.fullSize,v,x,_),Nc(f,v,x,_),Nc(h,v,x,_)&&Nc(f,v,x,_),Sz(v),r2(d.leftAndTop,v,x,_),v.x+=v.w,v.y+=v.h,r2(d.rightAndBottom,v,x,_),a.chartArea={left:v.left,top:v.top,right:v.left+v.w,bottom:v.top+v.h,height:v.h,width:v.w},me(d.chartArea,w=>{const S=w.box;Object.assign(S,a.chartArea),S.update(v.w,v.h,{left:0,top:0,right:0,bottom:0})})}};class b5{acquireContext(t,i){}releaseContext(t){return!1}addEventListener(t,i,n){}removeEventListener(t,i,n){}getDevicePixelRatio(){return 1}getMaximumSize(t,i,n,r){return i=Math.max(0,i||t.width),n=n||t.height,{width:i,height:Math.max(0,r?Math.floor(i/r):n)}}isAttached(t){return!0}updateConfig(t){}}class Tz extends b5{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Ef="$chartjs",Ez={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},l2=a=>a===null||a==="";function Mz(a,t){const i=a.style,n=a.getAttribute("height"),r=a.getAttribute("width");if(a[Ef]={initial:{height:n,width:r,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",i.boxSizing=i.boxSizing||"border-box",l2(r)){const l=X1(a,"width");l!==void 0&&(a.width=l)}if(l2(n))if(a.style.height==="")a.height=a.width/(t||2);else{const l=X1(a,"height");l!==void 0&&(a.height=l)}return a}const v5=LA?{passive:!0}:!1;function Cz(a,t,i){a&&a.addEventListener(t,i,v5)}function Az(a,t,i){a&&a.canvas&&a.canvas.removeEventListener(t,i,v5)}function zz(a,t){const i=Ez[a.type]||a.type,{x:n,y:r}=Wr(a,t);return{type:i,chart:t,native:a,x:n!==void 0?n:null,y:r!==void 0?r:null}}function $f(a,t){for(const i of a)if(i===t||i.contains(t))return!0}function Oz(a,t,i){const n=a.canvas,r=new MutationObserver(l=>{let c=!1;for(const d of l)c=c||$f(d.addedNodes,n),c=c&&!$f(d.removedNodes,n);c&&i()});return r.observe(document,{childList:!0,subtree:!0}),r}function Rz(a,t,i){const n=a.canvas,r=new MutationObserver(l=>{let c=!1;for(const d of l)c=c||$f(d.removedNodes,n),c=c&&!$f(d.addedNodes,n);c&&i()});return r.observe(document,{childList:!0,subtree:!0}),r}const hu=new Map;let o2=0;function y5(){const a=window.devicePixelRatio;a!==o2&&(o2=a,hu.forEach((t,i)=>{i.currentDevicePixelRatio!==a&&t()}))}function jz(a,t){hu.size||window.addEventListener("resize",y5),hu.set(a,t)}function Dz(a){hu.delete(a),hu.size||window.removeEventListener("resize",y5)}function Nz(a,t,i){const n=a.canvas,r=n&&jm(n);if(!r)return;const l=Z_((d,f)=>{const h=r.clientWidth;i(d,f),h<r.clientWidth&&i()},window),c=new ResizeObserver(d=>{const f=d[0],h=f.contentRect.width,m=f.contentRect.height;h===0&&m===0||l(h,m)});return c.observe(r),jz(a,l),c}function Z0(a,t,i){i&&i.disconnect(),t==="resize"&&Dz(a)}function Lz(a,t,i){const n=a.canvas,r=Z_(l=>{a.ctx!==null&&i(zz(l,a))},a);return Cz(n,t,r),r}class Bz extends b5{acquireContext(t,i){const n=t&&t.getContext&&t.getContext("2d");return n&&n.canvas===t?(Mz(t,i),n):null}releaseContext(t){const i=t.canvas;if(!i[Ef])return!1;const n=i[Ef].initial;["height","width"].forEach(l=>{const c=n[l];ke(c)?i.removeAttribute(l):i.setAttribute(l,c)});const r=n.style||{};return Object.keys(r).forEach(l=>{i.style[l]=r[l]}),i.width=i.width,delete i[Ef],!0}addEventListener(t,i,n){this.removeEventListener(t,i);const r=t.$proxies||(t.$proxies={}),c={attach:Oz,detach:Rz,resize:Nz}[i]||Lz;r[i]=c(t,i,n)}removeEventListener(t,i){const n=t.$proxies||(t.$proxies={}),r=n[i];if(!r)return;({attach:Z0,detach:Z0,resize:Z0}[i]||Az)(t,i,r),n[i]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,i,n,r){return NA(t,i,n,r)}isAttached(t){const i=t&&jm(t);return!!(i&&i.isConnected)}}function Hz(a){return!Rm()||typeof OffscreenCanvas<"u"&&a instanceof OffscreenCanvas?Tz:Bz}class yu{static defaults={};static defaultRoutes=void 0;x;y;active=!1;options;$animations;tooltipPosition(t){const{x:i,y:n}=this.getProps(["x","y"],t);return{x:i,y:n}}hasValue(){return qf(this.x)&&qf(this.y)}getProps(t,i){const n=this.$animations;if(!i||!n)return this;const r={};return t.forEach(l=>{r[l]=n[l]&&n[l].active()?n[l]._to:this[l]}),r}}function Fz(a,t){const i=a.options.ticks,n=Pz(a),r=Math.min(i.maxTicksLimit||n,n),l=i.major.enabled?Yz(t):[],c=l.length,d=l[0],f=l[c-1],h=[];if(c>r)return Gz(t,h,l,c/r),h;const m=Uz(l,t,r);if(c>0){let x,b;const v=c>1?Math.round((f-d)/(c-1)):null;for(rf(t,h,m,ke(v)?0:d-v,d),x=0,b=c-1;x<b;x++)rf(t,h,m,l[x],l[x+1]);return rf(t,h,m,f,ke(v)?t.length:f+v),h}return rf(t,h,m),h}function Pz(a){const t=a.options.offset,i=a._tickSize(),n=a._length/i+(t?0:1),r=a._maxLength/i;return Math.floor(Math.min(n,r))}function Uz(a,t,i){const n=qz(a),r=t.length/i;if(!n)return Math.max(r,1);const l=G4(n);for(let c=0,d=l.length-1;c<d;c++){const f=l[c];if(f>r)return f}return Math.max(r,1)}function Yz(a){const t=[];let i,n;for(i=0,n=a.length;i<n;i++)a[i].major&&t.push(i);return t}function Gz(a,t,i,n){let r=0,l=i[0],c;for(n=Math.ceil(n),c=0;c<a.length;c++)c===l&&(t.push(a[c]),r++,l=i[r*n])}function rf(a,t,i,n,r){const l=de(n,0),c=Math.min(de(r,a.length),a.length);let d=0,f,h,m;for(i=Math.ceil(i),r&&(f=r-n,i=f/Math.floor(f/i)),m=l;m<0;)d++,m=Math.round(l+d*i);for(h=Math.max(l,0);h<c;h++)h===m&&(t.push(a[h]),d++,m=Math.round(l+d*i))}function qz(a){const t=a.length;let i,n;if(t<2)return!1;for(n=a[0],i=1;i<t;++i)if(a[i]-a[i-1]!==n)return!1;return n}const Vz=a=>a==="left"?"right":a==="right"?"left":a,c2=(a,t,i)=>t==="top"||t==="left"?a[t]+i:a[t]-i,u2=(a,t)=>Math.min(t||a,a);function d2(a,t){const i=[],n=a.length/t,r=a.length;let l=0;for(;l<r;l+=n)i.push(a[Math.floor(l)]);return i}function Iz(a,t,i){const n=a.ticks.length,r=Math.min(t,n-1),l=a._startPixel,c=a._endPixel,d=1e-6;let f=a.getPixelForTick(r),h;if(!(i&&(n===1?h=Math.max(f-l,c-f):t===0?h=(a.getPixelForTick(1)-f)/2:h=(f-a.getPixelForTick(r-1))/2,f+=r<t?h:-h,f<l-d||f>c+d)))return f}function Xz(a,t){me(a,i=>{const n=i.gc,r=n.length/2;let l;if(r>t){for(l=0;l<r;++l)delete i.data[n[l]];n.splice(0,r)}})}function _c(a){return a.drawTicks?a.tickLength:0}function f2(a,t){if(!a.display)return 0;const i=bn(a.font,t),n=wa(a.padding);return(ki(a.text)?a.text.length:1)*i.lineHeight+n.height}function $z(a,t){return ko(a,{scale:t,type:"scale"})}function Wz(a,t,i){return ko(a,{tick:i,index:t,type:"tick"})}function Qz(a,t,i){let n=K_(a);return(i&&t!=="right"||!i&&t==="right")&&(n=Vz(n)),n}function Zz(a,t,i,n){const{top:r,left:l,bottom:c,right:d,chart:f}=a,{chartArea:h,scales:m}=f;let x=0,b,v,_;const w=c-r,S=d-l;if(a.isHorizontal()){if(v=Nn(n,l,d),le(i)){const E=Object.keys(i)[0],M=i[E];_=m[E].getPixelForValue(M)+w-t}else i==="center"?_=(h.bottom+h.top)/2+w-t:_=c2(a,i,t);b=d-l}else{if(le(i)){const E=Object.keys(i)[0],M=i[E];v=m[E].getPixelForValue(M)-S+t}else i==="center"?v=(h.left+h.right)/2-S+t:v=c2(a,i,t);_=Nn(n,c,r),x=i==="left"?-va:va}return{titleX:v,titleY:_,maxWidth:b,rotation:x}}class To extends yu{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,i){return t}getUserBounds(){let{_userMin:t,_userMax:i,_suggestedMin:n,_suggestedMax:r}=this;return t=Aa(t,Number.POSITIVE_INFINITY),i=Aa(i,Number.NEGATIVE_INFINITY),n=Aa(n,Number.POSITIVE_INFINITY),r=Aa(r,Number.NEGATIVE_INFINITY),{min:Aa(t,n),max:Aa(i,r),minDefined:ha(t),maxDefined:ha(i)}}getMinMax(t){let{min:i,max:n,minDefined:r,maxDefined:l}=this.getUserBounds(),c;if(r&&l)return{min:i,max:n};const d=this.getMatchingVisibleMetas();for(let f=0,h=d.length;f<h;++f)c=d[f].controller.getMinMax(this,t),r||(i=Math.min(i,c.min)),l||(n=Math.max(n,c.max));return i=l&&i>n?n:i,n=r&&i>n?i:n,{min:Aa(i,Aa(n,i)),max:Aa(n,Aa(i,n))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){ze(this.options.beforeUpdate,[this])}update(t,i,n){const{beginAtZero:r,grace:l,ticks:c}=this.options,d=c.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=i,this._margins=n=Object.assign({left:0,right:0,top:0,bottom:0},n),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+n.left+n.right:this.height+n.top+n.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=yA(this,l,r),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const f=d<this.ticks.length;this._convertTicksToLabels(f?d2(this.ticks,d):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),c.display&&(c.autoSkip||c.source==="auto")&&(this.ticks=Fz(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),f&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,i,n;this.isHorizontal()?(i=this.left,n=this.right):(i=this.top,n=this.bottom,t=!t),this._startPixel=i,this._endPixel=n,this._reversePixels=t,this._length=n-i,this._alignToPixels=this.options.alignToPixels}afterUpdate(){ze(this.options.afterUpdate,[this])}beforeSetDimensions(){ze(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){ze(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),ze(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){ze(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const i=this.options.ticks;let n,r,l;for(n=0,r=t.length;n<r;n++)l=t[n],l.label=ze(i.callback,[l.value,n,t],this)}afterTickToLabelConversion(){ze(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){ze(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,i=t.ticks,n=u2(this.ticks.length,t.ticks.maxTicksLimit),r=i.minRotation||0,l=i.maxRotation;let c=r,d,f,h;if(!this._isVisible()||!i.display||r>=l||n<=1||!this.isHorizontal()){this.labelRotation=r;return}const m=this._getLabelSizes(),x=m.widest.width,b=m.highest.height,v=ya(this.chart.width-x,0,this.maxWidth);d=t.offset?this.maxWidth/n:v/(n-1),x+6>d&&(d=v/(n-(t.offset?.5:1)),f=this.maxHeight-_c(t.grid)-i.padding-f2(t.title,this.chart.options.font),h=Math.sqrt(x*x+b*b),c=X4(Math.min(Math.asin(ya((m.highest.height+6)/d,-1,1)),Math.asin(ya(f/h,-1,1))-Math.asin(ya(b/h,-1,1)))),c=Math.max(r,Math.min(l,c))),this.labelRotation=c}afterCalculateLabelRotation(){ze(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){ze(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:i,options:{ticks:n,title:r,grid:l}}=this,c=this._isVisible(),d=this.isHorizontal();if(c){const f=f2(r,i.options.font);if(d?(t.width=this.maxWidth,t.height=_c(l)+f):(t.height=this.maxHeight,t.width=_c(l)+f),n.display&&this.ticks.length){const{first:h,last:m,widest:x,highest:b}=this._getLabelSizes(),v=n.padding*2,_=Kr(this.labelRotation),w=Math.cos(_),S=Math.sin(_);if(d){const E=n.mirror?0:S*x.width+w*b.height;t.height=Math.min(this.maxHeight,t.height+E+v)}else{const E=n.mirror?0:w*x.width+S*b.height;t.width=Math.min(this.maxWidth,t.width+E+v)}this._calculatePadding(h,m,S,w)}}this._handleMargins(),d?(this.width=this._length=i.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=i.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,i,n,r){const{ticks:{align:l,padding:c},position:d}=this.options,f=this.labelRotation!==0,h=d!=="top"&&this.axis==="x";if(this.isHorizontal()){const m=this.getPixelForTick(0)-this.left,x=this.right-this.getPixelForTick(this.ticks.length-1);let b=0,v=0;f?h?(b=r*t.width,v=n*i.height):(b=n*t.height,v=r*i.width):l==="start"?v=i.width:l==="end"?b=t.width:l!=="inner"&&(b=t.width/2,v=i.width/2),this.paddingLeft=Math.max((b-m+c)*this.width/(this.width-m),0),this.paddingRight=Math.max((v-x+c)*this.width/(this.width-x),0)}else{let m=i.height/2,x=t.height/2;l==="start"?(m=0,x=t.height):l==="end"&&(m=i.height,x=0),this.paddingTop=m+c,this.paddingBottom=x+c}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){ze(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:i}=this.options;return i==="top"||i==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let i,n;for(i=0,n=t.length;i<n;i++)ke(t[i].label)&&(t.splice(i,1),n--,i--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const i=this.options.ticks.sampleSize;let n=this.ticks;i<n.length&&(n=d2(n,i)),this._labelSizes=t=this._computeLabelSizes(n,n.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,i,n){const{ctx:r,_longestTextCache:l}=this,c=[],d=[],f=Math.floor(i/u2(i,n));let h=0,m=0,x,b,v,_,w,S,E,M,A,O,z;for(x=0;x<i;x+=f){if(_=t[x].label,w=this._resolveTickFontOptions(x),r.font=S=w.string,E=l[S]=l[S]||{data:{},gc:[]},M=w.lineHeight,A=O=0,!ke(_)&&!ki(_))A=U1(r,E.data,E.gc,A,_),O=M;else if(ki(_))for(b=0,v=_.length;b<v;++b)z=_[b],!ke(z)&&!ki(z)&&(A=U1(r,E.data,E.gc,A,z),O+=M);c.push(A),d.push(O),h=Math.max(A,h),m=Math.max(O,m)}Xz(l,i);const H=c.indexOf(h),j=d.indexOf(m),F=U=>({width:c[U]||0,height:d[U]||0});return{first:F(0),last:F(i-1),widest:F(H),highest:F(j),widths:c,heights:d}}getLabelForValue(t){return t}getPixelForValue(t,i){return NaN}getValueForPixel(t){}getPixelForTick(t){const i=this.ticks;return t<0||t>i.length-1?null:this.getPixelForValue(i[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const i=this._startPixel+t*this._length;return Z4(this._alignToPixels?Gr(this.chart,i,0):i)}getDecimalForPixel(t){const i=(t-this._startPixel)/this._length;return this._reversePixels?1-i:i}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:i}=this;return t<0&&i<0?i:t>0&&i>0?t:0}getContext(t){const i=this.ticks||[];if(t>=0&&t<i.length){const n=i[t];return n.$context||(n.$context=Wz(this.getContext(),t,n))}return this.$context||(this.$context=$z(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,i=Kr(this.labelRotation),n=Math.abs(Math.cos(i)),r=Math.abs(Math.sin(i)),l=this._getLabelSizes(),c=t.autoSkipPadding||0,d=l?l.widest.width+c:0,f=l?l.highest.height+c:0;return this.isHorizontal()?f*n>d*r?d/n:f/r:f*r<d*n?f/n:d/r}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const i=this.axis,n=this.chart,r=this.options,{grid:l,position:c,border:d}=r,f=l.offset,h=this.isHorizontal(),x=this.ticks.length+(f?1:0),b=_c(l),v=[],_=d.setContext(this.getContext()),w=_.display?_.width:0,S=w/2,E=function(B){return Gr(n,B,w)};let M,A,O,z,H,j,F,U,W,et,Y,at;if(c==="top")M=E(this.bottom),j=this.bottom-b,U=M-S,et=E(t.top)+S,at=t.bottom;else if(c==="bottom")M=E(this.top),et=t.top,at=E(t.bottom)-S,j=M+S,U=this.top+b;else if(c==="left")M=E(this.right),H=this.right-b,F=M-S,W=E(t.left)+S,Y=t.right;else if(c==="right")M=E(this.left),W=t.left,Y=E(t.right)-S,H=M+S,F=this.left+b;else if(i==="x"){if(c==="center")M=E((t.top+t.bottom)/2+.5);else if(le(c)){const B=Object.keys(c)[0],X=c[B];M=E(this.chart.scales[B].getPixelForValue(X))}et=t.top,at=t.bottom,j=M+S,U=j+b}else if(i==="y"){if(c==="center")M=E((t.left+t.right)/2);else if(le(c)){const B=Object.keys(c)[0],X=c[B];M=E(this.chart.scales[B].getPixelForValue(X))}H=M-S,F=H-b,W=t.left,Y=t.right}const ct=de(r.ticks.maxTicksLimit,x),lt=Math.max(1,Math.ceil(x/ct));for(A=0;A<x;A+=lt){const B=this.getContext(A),X=l.setContext(B),st=d.setContext(B),ut=X.lineWidth,D=X.color,C=st.dash||[],$=st.dashOffset,nt=X.tickWidth,it=X.tickColor,ft=X.tickBorderDash||[],ht=X.tickBorderDashOffset;O=Iz(this,A,f),O!==void 0&&(z=Gr(n,O,ut),h?H=F=W=Y=z:j=U=et=at=z,v.push({tx1:H,ty1:j,tx2:F,ty2:U,x1:W,y1:et,x2:Y,y2:at,width:ut,color:D,borderDash:C,borderDashOffset:$,tickWidth:nt,tickColor:it,tickBorderDash:ft,tickBorderDashOffset:ht}))}return this._ticksLength=x,this._borderValue=M,v}_computeLabelItems(t){const i=this.axis,n=this.options,{position:r,ticks:l}=n,c=this.isHorizontal(),d=this.ticks,{align:f,crossAlign:h,padding:m,mirror:x}=l,b=_c(n.grid),v=b+m,_=x?-m:v,w=-Kr(this.labelRotation),S=[];let E,M,A,O,z,H,j,F,U,W,et,Y,at="middle";if(r==="top")H=this.bottom-_,j=this._getXAxisLabelAlignment();else if(r==="bottom")H=this.top+_,j=this._getXAxisLabelAlignment();else if(r==="left"){const lt=this._getYAxisLabelAlignment(b);j=lt.textAlign,z=lt.x}else if(r==="right"){const lt=this._getYAxisLabelAlignment(b);j=lt.textAlign,z=lt.x}else if(i==="x"){if(r==="center")H=(t.top+t.bottom)/2+v;else if(le(r)){const lt=Object.keys(r)[0],B=r[lt];H=this.chart.scales[lt].getPixelForValue(B)+v}j=this._getXAxisLabelAlignment()}else if(i==="y"){if(r==="center")z=(t.left+t.right)/2-v;else if(le(r)){const lt=Object.keys(r)[0],B=r[lt];z=this.chart.scales[lt].getPixelForValue(B)}j=this._getYAxisLabelAlignment(b).textAlign}i==="y"&&(f==="start"?at="top":f==="end"&&(at="bottom"));const ct=this._getLabelSizes();for(E=0,M=d.length;E<M;++E){A=d[E],O=A.label;const lt=l.setContext(this.getContext(E));F=this.getPixelForTick(E)+l.labelOffset,U=this._resolveTickFontOptions(E),W=U.lineHeight,et=ki(O)?O.length:1;const B=et/2,X=lt.color,st=lt.textStrokeColor,ut=lt.textStrokeWidth;let D=j;c?(z=F,j==="inner"&&(E===M-1?D=this.options.reverse?"left":"right":E===0?D=this.options.reverse?"right":"left":D="center"),r==="top"?h==="near"||w!==0?Y=-et*W+W/2:h==="center"?Y=-ct.highest.height/2-B*W+W:Y=-ct.highest.height+W/2:h==="near"||w!==0?Y=W/2:h==="center"?Y=ct.highest.height/2-B*W:Y=ct.highest.height-et*W,x&&(Y*=-1),w!==0&&!lt.showLabelBackdrop&&(z+=W/2*Math.sin(w))):(H=F,Y=(1-et)*W/2);let C;if(lt.showLabelBackdrop){const $=wa(lt.backdropPadding),nt=ct.heights[E],it=ct.widths[E];let ft=Y-$.top,ht=0-$.left;switch(at){case"middle":ft-=nt/2;break;case"bottom":ft-=nt;break}switch(j){case"center":ht-=it/2;break;case"right":ht-=it;break;case"inner":E===M-1?ht-=it:E>0&&(ht-=it/2);break}C={left:ht,top:ft,width:it+$.width,height:nt+$.height,color:lt.backdropColor}}S.push({label:O,font:U,textOffset:Y,options:{rotation:w,color:X,strokeColor:st,strokeWidth:ut,textAlign:D,textBaseline:at,translation:[z,H],backdrop:C}})}return S}_getXAxisLabelAlignment(){const{position:t,ticks:i}=this.options;if(-Kr(this.labelRotation))return t==="top"?"left":"right";let r="center";return i.align==="start"?r="left":i.align==="end"?r="right":i.align==="inner"&&(r="inner"),r}_getYAxisLabelAlignment(t){const{position:i,ticks:{crossAlign:n,mirror:r,padding:l}}=this.options,c=this._getLabelSizes(),d=t+l,f=c.widest.width;let h,m;return i==="left"?r?(m=this.right+l,n==="near"?h="left":n==="center"?(h="center",m+=f/2):(h="right",m+=f)):(m=this.right-d,n==="near"?h="right":n==="center"?(h="center",m-=f/2):(h="left",m=this.left)):i==="right"?r?(m=this.left+l,n==="near"?h="right":n==="center"?(h="center",m-=f/2):(h="left",m-=f)):(m=this.left+d,n==="near"?h="left":n==="center"?(h="center",m+=f/2):(h="right",m=this.right)):h="right",{textAlign:h,x:m}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,i=this.options.position;if(i==="left"||i==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(i==="top"||i==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:i},left:n,top:r,width:l,height:c}=this;i&&(t.save(),t.fillStyle=i,t.fillRect(n,r,l,c),t.restore())}getLineWidthForValue(t){const i=this.options.grid;if(!this._isVisible()||!i.display)return 0;const r=this.ticks.findIndex(l=>l.value===t);return r>=0?i.setContext(this.getContext(r)).lineWidth:0}drawGrid(t){const i=this.options.grid,n=this.ctx,r=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let l,c;const d=(f,h,m)=>{!m.width||!m.color||(n.save(),n.lineWidth=m.width,n.strokeStyle=m.color,n.setLineDash(m.borderDash||[]),n.lineDashOffset=m.borderDashOffset,n.beginPath(),n.moveTo(f.x,f.y),n.lineTo(h.x,h.y),n.stroke(),n.restore())};if(i.display)for(l=0,c=r.length;l<c;++l){const f=r[l];i.drawOnChartArea&&d({x:f.x1,y:f.y1},{x:f.x2,y:f.y2},f),i.drawTicks&&d({x:f.tx1,y:f.ty1},{x:f.tx2,y:f.ty2},{color:f.tickColor,width:f.tickWidth,borderDash:f.tickBorderDash,borderDashOffset:f.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:i,options:{border:n,grid:r}}=this,l=n.setContext(this.getContext()),c=n.display?l.width:0;if(!c)return;const d=r.setContext(this.getContext(0)).lineWidth,f=this._borderValue;let h,m,x,b;this.isHorizontal()?(h=Gr(t,this.left,c)-c/2,m=Gr(t,this.right,d)+d/2,x=b=f):(x=Gr(t,this.top,c)-c/2,b=Gr(t,this.bottom,d)+d/2,h=m=f),i.save(),i.lineWidth=l.width,i.strokeStyle=l.color,i.beginPath(),i.moveTo(h,x),i.lineTo(m,b),i.stroke(),i.restore()}drawLabels(t){if(!this.options.ticks.display)return;const n=this.ctx,r=this._computeLabelArea();r&&Mm(n,r);const l=this.getLabelItems(t);for(const c of l){const d=c.options,f=c.font,h=c.label,m=c.textOffset;Vf(n,h,0,m,f,d)}r&&Cm(n)}drawTitle(){const{ctx:t,options:{position:i,title:n,reverse:r}}=this;if(!n.display)return;const l=bn(n.font),c=wa(n.padding),d=n.align;let f=l.lineHeight/2;i==="bottom"||i==="center"||le(i)?(f+=c.bottom,ki(n.text)&&(f+=l.lineHeight*(n.text.length-1))):f+=c.top;const{titleX:h,titleY:m,maxWidth:x,rotation:b}=Zz(this,f,i,d);Vf(t,n.text,0,0,l,{color:n.color,maxWidth:x,rotation:b,textAlign:Qz(d,i,r),textBaseline:"middle",translation:[h,m]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,i=t.ticks&&t.ticks.z||0,n=de(t.grid&&t.grid.z,-1),r=de(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==To.prototype.draw?[{z:i,draw:l=>{this.draw(l)}}]:[{z:n,draw:l=>{this.drawBackground(),this.drawGrid(l),this.drawTitle()}},{z:r,draw:()=>{this.drawBorder()}},{z:i,draw:l=>{this.drawLabels(l)}}]}getMatchingVisibleMetas(t){const i=this.chart.getSortedVisibleDatasetMetas(),n=this.axis+"AxisID",r=[];let l,c;for(l=0,c=i.length;l<c;++l){const d=i[l];d[n]===this.id&&(!t||d.type===t)&&r.push(d)}return r}_resolveTickFontOptions(t){const i=this.options.ticks.setContext(this.getContext(t));return bn(i.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class lf{constructor(t,i,n){this.type=t,this.scope=i,this.override=n,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const i=Object.getPrototypeOf(t);let n;t6(i)&&(n=this.register(i));const r=this.items,l=t.id,c=this.scope+"."+l;if(!l)throw new Error("class does not have id: "+t);return l in r||(r[l]=t,Kz(t,c,n),this.override&&li.override(t.id,t.overrides)),c}get(t){return this.items[t]}unregister(t){const i=this.items,n=t.id,r=this.scope;n in i&&delete i[n],r&&n in li[r]&&(delete li[r][n],this.override&&delete ul[n])}}function Kz(a,t,i){const n=du(Object.create(null),[i?li.get(i):{},li.get(t),a.defaults]);li.set(t,n),a.defaultRoutes&&Jz(t,a.defaultRoutes),a.descriptors&&li.describe(t,a.descriptors)}function Jz(a,t){Object.keys(t).forEach(i=>{const n=i.split("."),r=n.pop(),l=[a].concat(n).join("."),c=t[i].split("."),d=c.pop(),f=c.join(".");li.route(l,r,f,d)})}function t6(a){return"id"in a&&"defaults"in a}class e6{constructor(){this.controllers=new lf(p5,"datasets",!0),this.elements=new lf(yu,"elements"),this.plugins=new lf(Object,"plugins"),this.scales=new lf(To,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,i,n){[...i].forEach(r=>{const l=n||this._getRegistryForType(r);n||l.isForType(r)||l===this.plugins&&r.id?this._exec(t,l,r):me(r,c=>{const d=n||this._getRegistryForType(c);this._exec(t,d,c)})})}_exec(t,i,n){const r=Tm(t);ze(n["before"+r],[],n),i[t](n),ze(n["after"+r],[],n)}_getRegistryForType(t){for(let i=0;i<this._typedRegistries.length;i++){const n=this._typedRegistries[i];if(n.isForType(t))return n}return this.plugins}_get(t,i,n){const r=i.get(t);if(r===void 0)throw new Error('"'+t+'" is not a registered '+n+".");return r}}var Ra=new e6;class i6{constructor(){this._init=void 0}notify(t,i,n,r){if(i==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const l=r?this._descriptors(t).filter(r):this._descriptors(t),c=this._notify(l,t,i,n);return i==="afterDestroy"&&(this._notify(l,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),c}_notify(t,i,n,r){r=r||{};for(const l of t){const c=l.plugin,d=c[n],f=[i,r,l.options];if(ze(d,f,c)===!1&&r.cancelable)return!1}return!0}invalidate(){ke(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const i=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),i}_createDescriptors(t,i){const n=t&&t.config,r=de(n.options&&n.options.plugins,{}),l=n6(n);return r===!1&&!i?[]:s6(t,l,r,i)}_notifyStateChanges(t){const i=this._oldCache||[],n=this._cache,r=(l,c)=>l.filter(d=>!c.some(f=>d.plugin.id===f.plugin.id));this._notify(r(i,n),t,"stop"),this._notify(r(n,i),t,"start")}}function n6(a){const t={},i=[],n=Object.keys(Ra.plugins.items);for(let l=0;l<n.length;l++)i.push(Ra.getPlugin(n[l]));const r=a.plugins||[];for(let l=0;l<r.length;l++){const c=r[l];i.indexOf(c)===-1&&(i.push(c),t[c.id]=!0)}return{plugins:i,localIds:t}}function a6(a,t){return!t&&a===!1?null:a===!0?{}:a}function s6(a,{plugins:t,localIds:i},n,r){const l=[],c=a.getContext();for(const d of t){const f=d.id,h=a6(n[f],r);h!==null&&l.push({plugin:d,options:r6(a.config,{plugin:d,local:i[f]},h,c)})}return l}function r6(a,{plugin:t,local:i},n,r){const l=a.pluginScopeKeys(t),c=a.getOptionScopes(n,l);return i&&t.defaults&&c.push(t.defaults),a.createResolver(c,r,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Ng(a,t){const i=li.datasets[a]||{};return((t.datasets||{})[a]||{}).indexAxis||t.indexAxis||i.indexAxis||"x"}function l6(a,t){let i=a;return a==="_index_"?i=t:a==="_value_"&&(i=t==="x"?"y":"x"),i}function o6(a,t){return a===t?"_index_":"_value_"}function h2(a){if(a==="x"||a==="y"||a==="r")return a}function c6(a){if(a==="top"||a==="bottom")return"x";if(a==="left"||a==="right")return"y"}function Lg(a,...t){if(h2(a))return a;for(const i of t){const n=i.axis||c6(i.position)||a.length>1&&h2(a[0].toLowerCase());if(n)return n}throw new Error(`Cannot determine type of '${a}' axis. Please provide 'axis' or 'position' option.`)}function p2(a,t,i){if(i[t+"AxisID"]===a)return{axis:t}}function u6(a,t){if(t.data&&t.data.datasets){const i=t.data.datasets.filter(n=>n.xAxisID===a||n.yAxisID===a);if(i.length)return p2(a,"x",i[0])||p2(a,"y",i[0])}return{}}function d6(a,t){const i=ul[a.type]||{scales:{}},n=t.scales||{},r=Ng(a.type,t),l=Object.create(null);return Object.keys(n).forEach(c=>{const d=n[c];if(!le(d))return console.error(`Invalid scale configuration for scale: ${c}`);if(d._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${c}`);const f=Lg(c,d,u6(c,a),li.scales[d.type]),h=o6(f,r),m=i.scales||{};l[c]=Zc(Object.create(null),[{axis:f},d,m[f],m[h]])}),a.data.datasets.forEach(c=>{const d=c.type||a.type,f=c.indexAxis||Ng(d,t),m=(ul[d]||{}).scales||{};Object.keys(m).forEach(x=>{const b=l6(x,f),v=c[b+"AxisID"]||b;l[v]=l[v]||Object.create(null),Zc(l[v],[{axis:b},n[v],m[x]])})}),Object.keys(l).forEach(c=>{const d=l[c];Zc(d,[li.scales[d.type],li.scale])}),l}function w5(a){const t=a.options||(a.options={});t.plugins=de(t.plugins,{}),t.scales=d6(a,t)}function _5(a){return a=a||{},a.datasets=a.datasets||[],a.labels=a.labels||[],a}function f6(a){return a=a||{},a.data=_5(a.data),w5(a),a}const g2=new Map,S5=new Set;function of(a,t){let i=g2.get(a);return i||(i=t(),g2.set(a,i),S5.add(i)),i}const Sc=(a,t,i)=>{const n=yo(t,i);n!==void 0&&a.add(n)};class h6{constructor(t){this._config=f6(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=_5(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),w5(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return of(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,i){return of(`${t}.transition.${i}`,()=>[[`datasets.${t}.transitions.${i}`,`transitions.${i}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,i){return of(`${t}-${i}`,()=>[[`datasets.${t}.elements.${i}`,`datasets.${t}`,`elements.${i}`,""]])}pluginScopeKeys(t){const i=t.id,n=this.type;return of(`${n}-plugin-${i}`,()=>[[`plugins.${i}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,i){const n=this._scopeCache;let r=n.get(t);return(!r||i)&&(r=new Map,n.set(t,r)),r}getOptionScopes(t,i,n){const{options:r,type:l}=this,c=this._cachedScopes(t,n),d=c.get(i);if(d)return d;const f=new Set;i.forEach(m=>{t&&(f.add(t),m.forEach(x=>Sc(f,t,x))),m.forEach(x=>Sc(f,r,x)),m.forEach(x=>Sc(f,ul[l]||{},x)),m.forEach(x=>Sc(f,li,x)),m.forEach(x=>Sc(f,Dg,x))});const h=Array.from(f);return h.length===0&&h.push(Object.create(null)),S5.has(i)&&c.set(i,h),h}chartOptionScopes(){const{options:t,type:i}=this;return[t,ul[i]||{},li.datasets[i]||{},{type:i},li,Dg]}resolveNamedOptions(t,i,n,r=[""]){const l={$shared:!0},{resolver:c,subPrefixes:d}=m2(this._resolverCache,t,r);let f=c;if(g6(c,i)){l.$shared=!1,n=vr(n)?n():n;const h=this.createResolver(t,n,d);f=wo(c,n,h)}for(const h of i)l[h]=f[h];return l}createResolver(t,i,n=[""],r){const{resolver:l}=m2(this._resolverCache,t,n);return le(i)?wo(l,i,void 0,r):l}}function m2(a,t,i){let n=a.get(t);n||(n=new Map,a.set(t,n));const r=i.join();let l=n.get(r);return l||(l={resolver:Am(t,i),subPrefixes:i.filter(d=>!d.toLowerCase().includes("hover"))},n.set(r,l)),l}const p6=a=>le(a)&&Object.getOwnPropertyNames(a).some(t=>vr(a[t]));function g6(a,t){const{isScriptable:i,isIndexable:n}=r5(a);for(const r of t){const l=i(r),c=n(r),d=(c||l)&&a[r];if(l&&(vr(d)||p6(d))||c&&ki(d))return!0}return!1}var m6="4.5.1";const x6=["top","bottom","left","right","chartArea"];function x2(a,t){return a==="top"||a==="bottom"||x6.indexOf(a)===-1&&t==="x"}function b2(a,t){return function(i,n){return i[a]===n[a]?i[t]-n[t]:i[a]-n[a]}}function v2(a){const t=a.chart,i=t.options.animation;t.notifyPlugins("afterRender"),ze(i&&i.onComplete,[a],t)}function b6(a){const t=a.chart,i=t.options.animation;ze(i&&i.onProgress,[a],t)}function k5(a){return Rm()&&typeof a=="string"?a=document.getElementById(a):a&&a.length&&(a=a[0]),a&&a.canvas&&(a=a.canvas),a}const Mf={},y2=a=>{const t=k5(a);return Object.values(Mf).filter(i=>i.canvas===t).pop()};function v6(a,t,i){const n=Object.keys(a);for(const r of n){const l=+r;if(l>=t){const c=a[r];delete a[r],(i>0||l>t)&&(a[l+i]=c)}}}function y6(a,t,i,n){return!i||a.type==="mouseout"?null:n?t:a}let lh=class{static defaults=li;static instances=Mf;static overrides=ul;static registry=Ra;static version=m6;static getChart=y2;static register(...t){Ra.add(...t),w2()}static unregister(...t){Ra.remove(...t),w2()}constructor(t,i){const n=this.config=new h6(i),r=k5(t),l=y2(r);if(l)throw new Error("Canvas is already in use. Chart with ID '"+l.id+"' must be destroyed before the canvas with ID '"+l.canvas.id+"' can be reused.");const c=n.createResolver(n.chartOptionScopes(),this.getContext());this.platform=new(n.platform||Hz(r)),this.platform.updateConfig(n);const d=this.platform.acquireContext(r,c.aspectRatio),f=d&&d.canvas,h=f&&f.height,m=f&&f.width;if(this.id=N4(),this.ctx=d,this.canvas=f,this.width=m,this.height=h,this._options=c,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new i6,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=eA(x=>this.update(x),c.resizeDelay||0),this._dataChanges=[],Mf[this.id]=this,!d||!f){console.error("Failed to create chart: can't acquire context from the given item");return}fs.listen(this,"complete",v2),fs.listen(this,"progress",b6),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:i},width:n,height:r,_aspectRatio:l}=this;return ke(t)?i&&l?l:r?n/r:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return Ra}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():I1(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Y1(this.canvas,this.ctx),this}stop(){return fs.stop(this),this}resize(t,i){fs.running(this)?this._resizeBeforeDraw={width:t,height:i}:this._resize(t,i)}_resize(t,i){const n=this.options,r=this.canvas,l=n.maintainAspectRatio&&this.aspectRatio,c=this.platform.getMaximumSize(r,t,i,l),d=n.devicePixelRatio||this.platform.getDevicePixelRatio(),f=this.width?"resize":"attach";this.width=c.width,this.height=c.height,this._aspectRatio=this.aspectRatio,I1(this,d,!0)&&(this.notifyPlugins("resize",{size:c}),ze(n.onResize,[this,c],this),this.attached&&this._doResize(f)&&this.render())}ensureScalesHaveIDs(){const i=this.options.scales||{};me(i,(n,r)=>{n.id=r})}buildOrUpdateScales(){const t=this.options,i=t.scales,n=this.scales,r=Object.keys(n).reduce((c,d)=>(c[d]=!1,c),{});let l=[];i&&(l=l.concat(Object.keys(i).map(c=>{const d=i[c],f=Lg(c,d),h=f==="r",m=f==="x";return{options:d,dposition:h?"chartArea":m?"bottom":"left",dtype:h?"radialLinear":m?"category":"linear"}}))),me(l,c=>{const d=c.options,f=d.id,h=Lg(f,d),m=de(d.type,c.dtype);(d.position===void 0||x2(d.position,h)!==x2(c.dposition))&&(d.position=c.dposition),r[f]=!0;let x=null;if(f in n&&n[f].type===m)x=n[f];else{const b=Ra.getScale(m);x=new b({id:f,type:m,ctx:this.ctx,chart:this}),n[x.id]=x}x.init(d,t)}),me(r,(c,d)=>{c||delete n[d]}),me(n,c=>{lr.configure(this,c,c.options),lr.addBox(this,c)})}_updateMetasets(){const t=this._metasets,i=this.data.datasets.length,n=t.length;if(t.sort((r,l)=>r.index-l.index),n>i){for(let r=i;r<n;++r)this._destroyDatasetMeta(r);t.splice(i,n-i)}this._sortedMetasets=t.slice(0).sort(b2("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:i}}=this;t.length>i.length&&delete this._stacks,t.forEach((n,r)=>{i.filter(l=>l===n._dataset).length===0&&this._destroyDatasetMeta(r)})}buildOrUpdateControllers(){const t=[],i=this.data.datasets;let n,r;for(this._removeUnreferencedMetasets(),n=0,r=i.length;n<r;n++){const l=i[n];let c=this.getDatasetMeta(n);const d=l.type||this.config.type;if(c.type&&c.type!==d&&(this._destroyDatasetMeta(n),c=this.getDatasetMeta(n)),c.type=d,c.indexAxis=l.indexAxis||Ng(d,this.options),c.order=l.order||0,c.index=n,c.label=""+l.label,c.visible=this.isDatasetVisible(n),c.controller)c.controller.updateIndex(n),c.controller.linkScales();else{const f=Ra.getController(d),{datasetElementType:h,dataElementType:m}=li.datasets[d];Object.assign(f,{dataElementType:Ra.getElement(m),datasetElementType:h&&Ra.getElement(h)}),c.controller=new f(this,n),t.push(c.controller)}}return this._updateMetasets(),t}_resetElements(){me(this.data.datasets,(t,i)=>{this.getDatasetMeta(i).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const i=this.config;i.update();const n=this._options=i.createResolver(i.chartOptionScopes(),this.getContext()),r=this._animationsDisabled=!n.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const l=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let c=0;for(let h=0,m=this.data.datasets.length;h<m;h++){const{controller:x}=this.getDatasetMeta(h),b=!r&&l.indexOf(x)===-1;x.buildOrUpdateElements(b),c=Math.max(+x.getMaxOverflow(),c)}c=this._minPadding=n.layout.autoPadding?c:0,this._updateLayout(c),r||me(l,h=>{h.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(b2("z","_idx"));const{_active:d,_lastEvent:f}=this;f?this._eventHandler(f,!0):d.length&&this._updateHoverStyles(d,d,!0),this.render()}_updateScales(){me(this.scales,t=>{lr.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,i=new Set(Object.keys(this._listeners)),n=new Set(t.events);(!R1(i,n)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,i=this._getUniformDataChanges()||[];for(const{method:n,start:r,count:l}of i){const c=n==="_removeElements"?-l:l;v6(t,r,c)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const i=this.data.datasets.length,n=l=>new Set(t.filter(c=>c[0]===l).map((c,d)=>d+","+c.splice(1).join(","))),r=n(0);for(let l=1;l<i;l++)if(!R1(r,n(l)))return;return Array.from(r).map(l=>l.split(",")).map(l=>({method:l[1],start:+l[2],count:+l[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;lr.update(this,this.width,this.height,t);const i=this.chartArea,n=i.width<=0||i.height<=0;this._layers=[],me(this.boxes,r=>{n&&r.position==="chartArea"||(r.configure&&r.configure(),this._layers.push(...r._layers()))},this),this._layers.forEach((r,l)=>{r._idx=l}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let i=0,n=this.data.datasets.length;i<n;++i)this.getDatasetMeta(i).controller.configure();for(let i=0,n=this.data.datasets.length;i<n;++i)this._updateDataset(i,vr(t)?t({datasetIndex:i}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,i){const n=this.getDatasetMeta(t),r={meta:n,index:t,mode:i,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",r)!==!1&&(n.controller._update(i),r.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",r))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(fs.has(this)?this.attached&&!fs.running(this)&&fs.start(this):(this.draw(),v2({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:n,height:r}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(n,r)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const i=this._layers;for(t=0;t<i.length&&i[t].z<=0;++t)i[t].draw(this.chartArea);for(this._drawDatasets();t<i.length;++t)i[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const i=this._sortedMetasets,n=[];let r,l;for(r=0,l=i.length;r<l;++r){const c=i[r];(!t||c.visible)&&n.push(c)}return n}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let i=t.length-1;i>=0;--i)this._drawDataset(t[i]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const i=this.ctx,n={meta:t,index:t.index,cancelable:!0},r=PA(this,t);this.notifyPlugins("beforeDatasetDraw",n)!==!1&&(r&&Mm(i,r),t.controller.draw(),r&&Cm(i),n.cancelable=!1,this.notifyPlugins("afterDatasetDraw",n))}isPointInArea(t){return n5(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,i,n,r){const l=xz.modes[i];return typeof l=="function"?l(this,t,n,r):[]}getDatasetMeta(t){const i=this.data.datasets[t],n=this._metasets;let r=n.filter(l=>l&&l._dataset===i).pop();return r||(r={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:i&&i.order||0,index:t,_dataset:i,_parsed:[],_sorted:!1},n.push(r)),r}getContext(){return this.$context||(this.$context=ko(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const i=this.data.datasets[t];if(!i)return!1;const n=this.getDatasetMeta(t);return typeof n.hidden=="boolean"?!n.hidden:!i.hidden}setDatasetVisibility(t,i){const n=this.getDatasetMeta(t);n.hidden=!i}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,i,n){const r=n?"show":"hide",l=this.getDatasetMeta(t),c=l.controller._resolveAnimations(void 0,r);fu(i)?(l.data[i].hidden=!n,this.update()):(this.setDatasetVisibility(t,n),c.update(l,{visible:n}),this.update(d=>d.datasetIndex===t?r:void 0))}hide(t,i){this._updateVisibility(t,i,!1)}show(t,i){this._updateVisibility(t,i,!0)}_destroyDatasetMeta(t){const i=this._metasets[t];i&&i.controller&&i.controller._destroy(),delete this._metasets[t]}_stop(){let t,i;for(this.stop(),fs.remove(this),t=0,i=this.data.datasets.length;t<i;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:i}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Y1(t,i),this.platform.releaseContext(i),this.canvas=null,this.ctx=null),delete Mf[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,i=this.platform,n=(l,c)=>{i.addEventListener(this,l,c),t[l]=c},r=(l,c,d)=>{l.offsetX=c,l.offsetY=d,this._eventHandler(l)};me(this.options.events,l=>n(l,r))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,i=this.platform,n=(f,h)=>{i.addEventListener(this,f,h),t[f]=h},r=(f,h)=>{t[f]&&(i.removeEventListener(this,f,h),delete t[f])},l=(f,h)=>{this.canvas&&this.resize(f,h)};let c;const d=()=>{r("attach",d),this.attached=!0,this.resize(),n("resize",l),n("detach",c)};c=()=>{this.attached=!1,r("resize",l),this._stop(),this._resize(0,0),n("attach",d)},i.isAttached(this.canvas)?d():c()}unbindEvents(){me(this._listeners,(t,i)=>{this.platform.removeEventListener(this,i,t)}),this._listeners={},me(this._responsiveListeners,(t,i)=>{this.platform.removeEventListener(this,i,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,i,n){const r=n?"set":"remove";let l,c,d,f;for(i==="dataset"&&(l=this.getDatasetMeta(t[0].datasetIndex),l.controller["_"+r+"DatasetHoverStyle"]()),d=0,f=t.length;d<f;++d){c=t[d];const h=c&&this.getDatasetMeta(c.datasetIndex).controller;h&&h[r+"HoverStyle"](c.element,c.datasetIndex,c.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const i=this._active||[],n=t.map(({datasetIndex:l,index:c})=>{const d=this.getDatasetMeta(l);if(!d)throw new Error("No dataset found at index "+l);return{datasetIndex:l,element:d.data[c],index:c}});!Uf(n,i)&&(this._active=n,this._lastEvent=null,this._updateHoverStyles(n,i))}notifyPlugins(t,i,n){return this._plugins.notify(this,t,i,n)}isPluginEnabled(t){return this._plugins._cache.filter(i=>i.plugin.id===t).length===1}_updateHoverStyles(t,i,n){const r=this.options.hover,l=(f,h)=>f.filter(m=>!h.some(x=>m.datasetIndex===x.datasetIndex&&m.index===x.index)),c=l(i,t),d=n?t:l(t,i);c.length&&this.updateHoverStyle(c,r.mode,!1),d.length&&r.mode&&this.updateHoverStyle(d,r.mode,!0)}_eventHandler(t,i){const n={event:t,replay:i,cancelable:!0,inChartArea:this.isPointInArea(t)},r=c=>(c.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",n,r)===!1)return;const l=this._handleEvent(t,i,n.inChartArea);return n.cancelable=!1,this.notifyPlugins("afterEvent",n,r),(l||n.changed)&&this.render(),this}_handleEvent(t,i,n){const{_active:r=[],options:l}=this,c=i,d=this._getActiveElements(t,r,n,c),f=U4(t),h=y6(t,this._lastEvent,n,f);n&&(this._lastEvent=null,ze(l.onHover,[t,d,this],this),f&&ze(l.onClick,[t,d,this],this));const m=!Uf(d,r);return(m||i)&&(this._active=d,this._updateHoverStyles(d,r,i)),this._lastEvent=h,m}_getActiveElements(t,i,n,r){if(t.type==="mouseout")return[];if(!n)return i;const l=this.options.hover;return this.getElementsAtEventForMode(t,l.mode,l,r)}};function w2(){return me(lh.instances,a=>a._plugins.invalidate())}function T5(a,t){const{x:i,y:n,base:r,width:l,height:c}=a.getProps(["x","y","base","width","height"],t);let d,f,h,m,x;return a.horizontal?(x=c/2,d=Math.min(i,r),f=Math.max(i,r),h=n-x,m=n+x):(x=l/2,d=i-x,f=i+x,h=Math.min(n,r),m=Math.max(n,r)),{left:d,top:h,right:f,bottom:m}}function or(a,t,i,n){return a?0:ya(t,i,n)}function w6(a,t,i){const n=a.options.borderWidth,r=a.borderSkipped,l=s5(n);return{t:or(r.top,l.top,0,i),r:or(r.right,l.right,0,t),b:or(r.bottom,l.bottom,0,i),l:or(r.left,l.left,0,t)}}function _6(a,t,i){const{enableBorderRadius:n}=a.getProps(["enableBorderRadius"]),r=a.options.borderRadius,l=uo(r),c=Math.min(t,i),d=a.borderSkipped,f=n||le(r);return{topLeft:or(!f||d.top||d.left,l.topLeft,0,c),topRight:or(!f||d.top||d.right,l.topRight,0,c),bottomLeft:or(!f||d.bottom||d.left,l.bottomLeft,0,c),bottomRight:or(!f||d.bottom||d.right,l.bottomRight,0,c)}}function S6(a){const t=T5(a),i=t.right-t.left,n=t.bottom-t.top,r=w6(a,i/2,n/2),l=_6(a,i/2,n/2);return{outer:{x:t.left,y:t.top,w:i,h:n,radius:l},inner:{x:t.left+r.l,y:t.top+r.t,w:i-r.l-r.r,h:n-r.t-r.b,radius:{topLeft:Math.max(0,l.topLeft-Math.max(r.t,r.l)),topRight:Math.max(0,l.topRight-Math.max(r.t,r.r)),bottomLeft:Math.max(0,l.bottomLeft-Math.max(r.b,r.l)),bottomRight:Math.max(0,l.bottomRight-Math.max(r.b,r.r))}}}}function K0(a,t,i,n){const r=t===null,l=i===null,d=a&&!(r&&l)&&T5(a,n);return d&&(r||no(t,d.left,d.right))&&(l||no(i,d.top,d.bottom))}function k6(a){return a.topLeft||a.topRight||a.bottomLeft||a.bottomRight}function T6(a,t){a.rect(t.x,t.y,t.w,t.h)}function J0(a,t,i={}){const n=a.x!==i.x?-t:0,r=a.y!==i.y?-t:0,l=(a.x+a.w!==i.x+i.w?t:0)-n,c=(a.y+a.h!==i.y+i.h?t:0)-r;return{x:a.x+n,y:a.y+r,w:a.w+l,h:a.h+c,radius:a.radius}}class E6 extends yu{static id="bar";static defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:i,options:{borderColor:n,backgroundColor:r}}=this,{inner:l,outer:c}=S6(this),d=k6(c.radius)?If:T6;t.save(),(c.w!==l.w||c.h!==l.h)&&(t.beginPath(),d(t,J0(c,i,l)),t.clip(),d(t,J0(l,-i,c)),t.fillStyle=n,t.fill("evenodd")),t.beginPath(),d(t,J0(l,i)),t.fillStyle=r,t.fill(),t.restore()}inRange(t,i,n){return K0(this,t,i,n)}inXRange(t,i){return K0(this,t,null,i)}inYRange(t,i){return K0(this,null,t,i)}getCenterPoint(t){const{x:i,y:n,base:r,horizontal:l}=this.getProps(["x","y","base","horizontal"],t);return{x:l?(i+r)/2:i,y:l?n:(n+r)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}const _2=(a,t)=>{let{boxHeight:i=t,boxWidth:n=t}=a;return a.usePointStyle&&(i=Math.min(i,t),n=a.pointStyleWidth||Math.min(n,t)),{boxWidth:n,boxHeight:i,itemHeight:Math.max(t,i)}},M6=(a,t)=>a!==null&&t!==null&&a.datasetIndex===t.datasetIndex&&a.index===t.index;class S2 extends yu{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,i,n){this.maxWidth=t,this.maxHeight=i,this._margins=n,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let i=ze(t.generateLabels,[this.chart],this)||[];t.filter&&(i=i.filter(n=>t.filter(n,this.chart.data))),t.sort&&(i=i.sort((n,r)=>t.sort(n,r,this.chart.data))),this.options.reverse&&i.reverse(),this.legendItems=i}fit(){const{options:t,ctx:i}=this;if(!t.display){this.width=this.height=0;return}const n=t.labels,r=bn(n.font),l=r.size,c=this._computeTitleHeight(),{boxWidth:d,itemHeight:f}=_2(n,l);let h,m;i.font=r.string,this.isHorizontal()?(h=this.maxWidth,m=this._fitRows(c,l,d,f)+10):(m=this.maxHeight,h=this._fitCols(c,r,d,f)+10),this.width=Math.min(h,t.maxWidth||this.maxWidth),this.height=Math.min(m,t.maxHeight||this.maxHeight)}_fitRows(t,i,n,r){const{ctx:l,maxWidth:c,options:{labels:{padding:d}}}=this,f=this.legendHitBoxes=[],h=this.lineWidths=[0],m=r+d;let x=t;l.textAlign="left",l.textBaseline="middle";let b=-1,v=-m;return this.legendItems.forEach((_,w)=>{const S=n+i/2+l.measureText(_.text).width;(w===0||h[h.length-1]+S+2*d>c)&&(x+=m,h[h.length-(w>0?0:1)]=0,v+=m,b++),f[w]={left:0,top:v,row:b,width:S,height:r},h[h.length-1]+=S+d}),x}_fitCols(t,i,n,r){const{ctx:l,maxHeight:c,options:{labels:{padding:d}}}=this,f=this.legendHitBoxes=[],h=this.columnSizes=[],m=c-t;let x=d,b=0,v=0,_=0,w=0;return this.legendItems.forEach((S,E)=>{const{itemWidth:M,itemHeight:A}=C6(n,i,l,S,r);E>0&&v+A+2*d>m&&(x+=b+d,h.push({width:b,height:v}),_+=b+d,w++,b=v=0),f[E]={left:_,top:v,col:w,width:M,height:A},b=Math.max(b,M),v+=A+d}),x+=b,h.push({width:b,height:v}),x}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:i,options:{align:n,labels:{padding:r},rtl:l}}=this,c=fo(l,this.left,this.width);if(this.isHorizontal()){let d=0,f=Nn(n,this.left+r,this.right-this.lineWidths[d]);for(const h of i)d!==h.row&&(d=h.row,f=Nn(n,this.left+r,this.right-this.lineWidths[d])),h.top+=this.top+t+r,h.left=c.leftForLtr(c.x(f),h.width),f+=h.width+r}else{let d=0,f=Nn(n,this.top+t+r,this.bottom-this.columnSizes[d].height);for(const h of i)h.col!==d&&(d=h.col,f=Nn(n,this.top+t+r,this.bottom-this.columnSizes[d].height)),h.top=f,h.left+=this.left+r,h.left=c.leftForLtr(c.x(h.left),h.width),f+=h.height+r}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;Mm(t,this),this._draw(),Cm(t)}}_draw(){const{options:t,columnSizes:i,lineWidths:n,ctx:r}=this,{align:l,labels:c}=t,d=li.color,f=fo(t.rtl,this.left,this.width),h=bn(c.font),{padding:m}=c,x=h.size,b=x/2;let v;this.drawTitle(),r.textAlign=f.textAlign("left"),r.textBaseline="middle",r.lineWidth=.5,r.font=h.string;const{boxWidth:_,boxHeight:w,itemHeight:S}=_2(c,x),E=function(H,j,F){if(isNaN(_)||_<=0||isNaN(w)||w<0)return;r.save();const U=de(F.lineWidth,1);if(r.fillStyle=de(F.fillStyle,d),r.lineCap=de(F.lineCap,"butt"),r.lineDashOffset=de(F.lineDashOffset,0),r.lineJoin=de(F.lineJoin,"miter"),r.lineWidth=U,r.strokeStyle=de(F.strokeStyle,d),r.setLineDash(de(F.lineDash,[])),c.usePointStyle){const W={radius:w*Math.SQRT2/2,pointStyle:F.pointStyle,rotation:F.rotation,borderWidth:U},et=f.xPlus(H,_/2),Y=j+b;i5(r,W,et,Y,c.pointStyleWidth&&_)}else{const W=j+Math.max((x-w)/2,0),et=f.leftForLtr(H,_),Y=uo(F.borderRadius);r.beginPath(),Object.values(Y).some(at=>at!==0)?If(r,{x:et,y:W,w:_,h:w,radius:Y}):r.rect(et,W,_,w),r.fill(),U!==0&&r.stroke()}r.restore()},M=function(H,j,F){Vf(r,F.text,H,j+S/2,h,{strikethrough:F.hidden,textAlign:f.textAlign(F.textAlign)})},A=this.isHorizontal(),O=this._computeTitleHeight();A?v={x:Nn(l,this.left+m,this.right-n[0]),y:this.top+m+O,line:0}:v={x:this.left+m,y:Nn(l,this.top+O+m,this.bottom-i[0].height),line:0},u5(this.ctx,t.textDirection);const z=S+m;this.legendItems.forEach((H,j)=>{r.strokeStyle=H.fontColor,r.fillStyle=H.fontColor;const F=r.measureText(H.text).width,U=f.textAlign(H.textAlign||(H.textAlign=c.textAlign)),W=_+b+F;let et=v.x,Y=v.y;f.setWidth(this.width),A?j>0&&et+W+m>this.right&&(Y=v.y+=z,v.line++,et=v.x=Nn(l,this.left+m,this.right-n[v.line])):j>0&&Y+z>this.bottom&&(et=v.x=et+i[v.line].width+m,v.line++,Y=v.y=Nn(l,this.top+O+m,this.bottom-i[v.line].height));const at=f.x(et);if(E(at,Y,H),et=iA(U,et+_+b,A?et+W:this.right,t.rtl),M(f.x(et),Y,H),A)v.x+=W+m;else if(typeof H.text!="string"){const ct=h.lineHeight;v.y+=E5(H,ct)+m}else v.y+=z}),d5(this.ctx,t.textDirection)}drawTitle(){const t=this.options,i=t.title,n=bn(i.font),r=wa(i.padding);if(!i.display)return;const l=fo(t.rtl,this.left,this.width),c=this.ctx,d=i.position,f=n.size/2,h=r.top+f;let m,x=this.left,b=this.width;if(this.isHorizontal())b=Math.max(...this.lineWidths),m=this.top+h,x=Nn(t.align,x,this.right-b);else{const _=this.columnSizes.reduce((w,S)=>Math.max(w,S.height),0);m=h+Nn(t.align,this.top,this.bottom-_-t.labels.padding-this._computeTitleHeight())}const v=Nn(d,x,x+b);c.textAlign=l.textAlign(K_(d)),c.textBaseline="middle",c.strokeStyle=i.color,c.fillStyle=i.color,c.font=n.string,Vf(c,i.text,v,m,n)}_computeTitleHeight(){const t=this.options.title,i=bn(t.font),n=wa(t.padding);return t.display?i.lineHeight+n.height:0}_getLegendItemAt(t,i){let n,r,l;if(no(t,this.left,this.right)&&no(i,this.top,this.bottom)){for(l=this.legendHitBoxes,n=0;n<l.length;++n)if(r=l[n],no(t,r.left,r.left+r.width)&&no(i,r.top,r.top+r.height))return this.legendItems[n]}return null}handleEvent(t){const i=this.options;if(!O6(t.type,i))return;const n=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const r=this._hoveredItem,l=M6(r,n);r&&!l&&ze(i.onLeave,[t,r,this],this),this._hoveredItem=n,n&&!l&&ze(i.onHover,[t,n,this],this)}else n&&ze(i.onClick,[t,n,this],this)}}function C6(a,t,i,n,r){const l=A6(n,a,t,i),c=z6(r,n,t.lineHeight);return{itemWidth:l,itemHeight:c}}function A6(a,t,i,n){let r=a.text;return r&&typeof r!="string"&&(r=r.reduce((l,c)=>l.length>c.length?l:c)),t+i.size/2+n.measureText(r).width}function z6(a,t,i){let n=a;return typeof t.text!="string"&&(n=E5(t,i)),n}function E5(a,t){const i=a.text?a.text.length:0;return t*i}function O6(a,t){return!!((a==="mousemove"||a==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(a==="click"||a==="mouseup"))}var R6={id:"legend",_element:S2,start(a,t,i){const n=a.legend=new S2({ctx:a.ctx,options:i,chart:a});lr.configure(a,n,i),lr.addBox(a,n)},stop(a){lr.removeBox(a,a.legend),delete a.legend},beforeUpdate(a,t,i){const n=a.legend;lr.configure(a,n,i),n.options=i},afterUpdate(a){const t=a.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(a,t){t.replay||a.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(a,t,i){const n=t.datasetIndex,r=i.chart;r.isDatasetVisible(n)?(r.hide(n),t.hidden=!0):(r.show(n),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:a=>a.chart.options.color,boxWidth:40,padding:10,generateLabels(a){const t=a.data.datasets,{labels:{usePointStyle:i,pointStyle:n,textAlign:r,color:l,useBorderRadius:c,borderRadius:d}}=a.legend.options;return a._getSortedDatasetMetas().map(f=>{const h=f.controller.getStyle(i?0:void 0),m=wa(h.borderWidth);return{text:t[f.index].label,fillStyle:h.backgroundColor,fontColor:l,hidden:!f.visible,lineCap:h.borderCapStyle,lineDash:h.borderDash,lineDashOffset:h.borderDashOffset,lineJoin:h.borderJoinStyle,lineWidth:(m.width+m.height)/4,strokeStyle:h.borderColor,pointStyle:n||h.pointStyle,rotation:h.rotation,textAlign:r||h.textAlign,borderRadius:c&&(d||h.borderRadius),datasetIndex:f.index}},this)}},title:{color:a=>a.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:a=>!a.startsWith("on"),labels:{_scriptable:a=>!["generateLabels","filter","sort"].includes(a)}}};const Lc={average(a){if(!a.length)return!1;let t,i,n=new Set,r=0,l=0;for(t=0,i=a.length;t<i;++t){const d=a[t].element;if(d&&d.hasValue()){const f=d.tooltipPosition();n.add(f.x),r+=f.y,++l}}return l===0||n.size===0?!1:{x:[...n].reduce((d,f)=>d+f)/n.size,y:r/l}},nearest(a,t){if(!a.length)return!1;let i=t.x,n=t.y,r=Number.POSITIVE_INFINITY,l,c,d;for(l=0,c=a.length;l<c;++l){const f=a[l].element;if(f&&f.hasValue()){const h=f.getCenterPoint(),m=W4(t,h);m<r&&(r=m,d=f)}}if(d){const f=d.tooltipPosition();i=f.x,n=f.y}return{x:i,y:n}}};function Oa(a,t){return t&&(ki(t)?Array.prototype.push.apply(a,t):a.push(t)),a}function hs(a){return(typeof a=="string"||a instanceof String)&&a.indexOf(`
`)>-1?a.split(`
`):a}function j6(a,t){const{element:i,datasetIndex:n,index:r}=t,l=a.getDatasetMeta(n).controller,{label:c,value:d}=l.getLabelAndValue(r);return{chart:a,label:c,parsed:l.getParsed(r),raw:a.data.datasets[n].data[r],formattedValue:d,dataset:l.getDataset(),dataIndex:r,datasetIndex:n,element:i}}function k2(a,t){const i=a.chart.ctx,{body:n,footer:r,title:l}=a,{boxWidth:c,boxHeight:d}=t,f=bn(t.bodyFont),h=bn(t.titleFont),m=bn(t.footerFont),x=l.length,b=r.length,v=n.length,_=wa(t.padding);let w=_.height,S=0,E=n.reduce((O,z)=>O+z.before.length+z.lines.length+z.after.length,0);if(E+=a.beforeBody.length+a.afterBody.length,x&&(w+=x*h.lineHeight+(x-1)*t.titleSpacing+t.titleMarginBottom),E){const O=t.displayColors?Math.max(d,f.lineHeight):f.lineHeight;w+=v*O+(E-v)*f.lineHeight+(E-1)*t.bodySpacing}b&&(w+=t.footerMarginTop+b*m.lineHeight+(b-1)*t.footerSpacing);let M=0;const A=function(O){S=Math.max(S,i.measureText(O).width+M)};return i.save(),i.font=h.string,me(a.title,A),i.font=f.string,me(a.beforeBody.concat(a.afterBody),A),M=t.displayColors?c+2+t.boxPadding:0,me(n,O=>{me(O.before,A),me(O.lines,A),me(O.after,A)}),M=0,i.font=m.string,me(a.footer,A),i.restore(),S+=_.width,{width:S,height:w}}function D6(a,t){const{y:i,height:n}=t;return i<n/2?"top":i>a.height-n/2?"bottom":"center"}function N6(a,t,i,n){const{x:r,width:l}=n,c=i.caretSize+i.caretPadding;if(a==="left"&&r+l+c>t.width||a==="right"&&r-l-c<0)return!0}function L6(a,t,i,n){const{x:r,width:l}=i,{width:c,chartArea:{left:d,right:f}}=a;let h="center";return n==="center"?h=r<=(d+f)/2?"left":"right":r<=l/2?h="left":r>=c-l/2&&(h="right"),N6(h,a,t,i)&&(h="center"),h}function T2(a,t,i){const n=i.yAlign||t.yAlign||D6(a,i);return{xAlign:i.xAlign||t.xAlign||L6(a,t,i,n),yAlign:n}}function B6(a,t){let{x:i,width:n}=a;return t==="right"?i-=n:t==="center"&&(i-=n/2),i}function H6(a,t,i){let{y:n,height:r}=a;return t==="top"?n+=i:t==="bottom"?n-=r+i:n-=r/2,n}function E2(a,t,i,n){const{caretSize:r,caretPadding:l,cornerRadius:c}=a,{xAlign:d,yAlign:f}=i,h=r+l,{topLeft:m,topRight:x,bottomLeft:b,bottomRight:v}=uo(c);let _=B6(t,d);const w=H6(t,f,h);return f==="center"?d==="left"?_+=h:d==="right"&&(_-=h):d==="left"?_-=Math.max(m,b)+r:d==="right"&&(_+=Math.max(x,v)+r),{x:ya(_,0,n.width-t.width),y:ya(w,0,n.height-t.height)}}function cf(a,t,i){const n=wa(i.padding);return t==="center"?a.x+a.width/2:t==="right"?a.x+a.width-n.right:a.x+n.left}function M2(a){return Oa([],hs(a))}function F6(a,t,i){return ko(a,{tooltip:t,tooltipItems:i,type:"tooltip"})}function C2(a,t){const i=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return i?a.override(i):a}const M5={beforeTitle:cs,title(a){if(a.length>0){const t=a[0],i=t.chart.data.labels,n=i?i.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(n>0&&t.dataIndex<n)return i[t.dataIndex]}return""},afterTitle:cs,beforeBody:cs,beforeLabel:cs,label(a){if(this&&this.options&&this.options.mode==="dataset")return a.label+": "+a.formattedValue||a.formattedValue;let t=a.dataset.label||"";t&&(t+=": ");const i=a.formattedValue;return ke(i)||(t+=i),t},labelColor(a){const i=a.chart.getDatasetMeta(a.datasetIndex).controller.getStyle(a.dataIndex);return{borderColor:i.borderColor,backgroundColor:i.backgroundColor,borderWidth:i.borderWidth,borderDash:i.borderDash,borderDashOffset:i.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(a){const i=a.chart.getDatasetMeta(a.datasetIndex).controller.getStyle(a.dataIndex);return{pointStyle:i.pointStyle,rotation:i.rotation}},afterLabel:cs,afterBody:cs,beforeFooter:cs,footer:cs,afterFooter:cs};function pn(a,t,i,n){const r=a[t].call(i,n);return typeof r>"u"?M5[t].call(i,n):r}class A2 extends yu{static positioners=Lc;constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const i=this.chart,n=this.options.setContext(this.getContext()),r=n.enabled&&i.options.animation&&n.animations,l=new f5(this.chart,r);return r._cacheable&&(this._cachedAnimations=Object.freeze(l)),l}getContext(){return this.$context||(this.$context=F6(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,i){const{callbacks:n}=i,r=pn(n,"beforeTitle",this,t),l=pn(n,"title",this,t),c=pn(n,"afterTitle",this,t);let d=[];return d=Oa(d,hs(r)),d=Oa(d,hs(l)),d=Oa(d,hs(c)),d}getBeforeBody(t,i){return M2(pn(i.callbacks,"beforeBody",this,t))}getBody(t,i){const{callbacks:n}=i,r=[];return me(t,l=>{const c={before:[],lines:[],after:[]},d=C2(n,l);Oa(c.before,hs(pn(d,"beforeLabel",this,l))),Oa(c.lines,pn(d,"label",this,l)),Oa(c.after,hs(pn(d,"afterLabel",this,l))),r.push(c)}),r}getAfterBody(t,i){return M2(pn(i.callbacks,"afterBody",this,t))}getFooter(t,i){const{callbacks:n}=i,r=pn(n,"beforeFooter",this,t),l=pn(n,"footer",this,t),c=pn(n,"afterFooter",this,t);let d=[];return d=Oa(d,hs(r)),d=Oa(d,hs(l)),d=Oa(d,hs(c)),d}_createItems(t){const i=this._active,n=this.chart.data,r=[],l=[],c=[];let d=[],f,h;for(f=0,h=i.length;f<h;++f)d.push(j6(this.chart,i[f]));return t.filter&&(d=d.filter((m,x,b)=>t.filter(m,x,b,n))),t.itemSort&&(d=d.sort((m,x)=>t.itemSort(m,x,n))),me(d,m=>{const x=C2(t.callbacks,m);r.push(pn(x,"labelColor",this,m)),l.push(pn(x,"labelPointStyle",this,m)),c.push(pn(x,"labelTextColor",this,m))}),this.labelColors=r,this.labelPointStyles=l,this.labelTextColors=c,this.dataPoints=d,d}update(t,i){const n=this.options.setContext(this.getContext()),r=this._active;let l,c=[];if(!r.length)this.opacity!==0&&(l={opacity:0});else{const d=Lc[n.position].call(this,r,this._eventPosition);c=this._createItems(n),this.title=this.getTitle(c,n),this.beforeBody=this.getBeforeBody(c,n),this.body=this.getBody(c,n),this.afterBody=this.getAfterBody(c,n),this.footer=this.getFooter(c,n);const f=this._size=k2(this,n),h=Object.assign({},d,f),m=T2(this.chart,n,h),x=E2(n,h,m,this.chart);this.xAlign=m.xAlign,this.yAlign=m.yAlign,l={opacity:1,x:x.x,y:x.y,width:f.width,height:f.height,caretX:d.x,caretY:d.y}}this._tooltipItems=c,this.$context=void 0,l&&this._resolveAnimations().update(this,l),t&&n.external&&n.external.call(this,{chart:this.chart,tooltip:this,replay:i})}drawCaret(t,i,n,r){const l=this.getCaretPosition(t,n,r);i.lineTo(l.x1,l.y1),i.lineTo(l.x2,l.y2),i.lineTo(l.x3,l.y3)}getCaretPosition(t,i,n){const{xAlign:r,yAlign:l}=this,{caretSize:c,cornerRadius:d}=n,{topLeft:f,topRight:h,bottomLeft:m,bottomRight:x}=uo(d),{x:b,y:v}=t,{width:_,height:w}=i;let S,E,M,A,O,z;return l==="center"?(O=v+w/2,r==="left"?(S=b,E=S-c,A=O+c,z=O-c):(S=b+_,E=S+c,A=O-c,z=O+c),M=S):(r==="left"?E=b+Math.max(f,m)+c:r==="right"?E=b+_-Math.max(h,x)-c:E=this.caretX,l==="top"?(A=v,O=A-c,S=E-c,M=E+c):(A=v+w,O=A+c,S=E+c,M=E-c),z=A),{x1:S,x2:E,x3:M,y1:A,y2:O,y3:z}}drawTitle(t,i,n){const r=this.title,l=r.length;let c,d,f;if(l){const h=fo(n.rtl,this.x,this.width);for(t.x=cf(this,n.titleAlign,n),i.textAlign=h.textAlign(n.titleAlign),i.textBaseline="middle",c=bn(n.titleFont),d=n.titleSpacing,i.fillStyle=n.titleColor,i.font=c.string,f=0;f<l;++f)i.fillText(r[f],h.x(t.x),t.y+c.lineHeight/2),t.y+=c.lineHeight+d,f+1===l&&(t.y+=n.titleMarginBottom-d)}}_drawColorBox(t,i,n,r,l){const c=this.labelColors[n],d=this.labelPointStyles[n],{boxHeight:f,boxWidth:h}=l,m=bn(l.bodyFont),x=cf(this,"left",l),b=r.x(x),v=f<m.lineHeight?(m.lineHeight-f)/2:0,_=i.y+v;if(l.usePointStyle){const w={radius:Math.min(h,f)/2,pointStyle:d.pointStyle,rotation:d.rotation,borderWidth:1},S=r.leftForLtr(b,h)+h/2,E=_+f/2;t.strokeStyle=l.multiKeyBackground,t.fillStyle=l.multiKeyBackground,G1(t,w,S,E),t.strokeStyle=c.borderColor,t.fillStyle=c.backgroundColor,G1(t,w,S,E)}else{t.lineWidth=le(c.borderWidth)?Math.max(...Object.values(c.borderWidth)):c.borderWidth||1,t.strokeStyle=c.borderColor,t.setLineDash(c.borderDash||[]),t.lineDashOffset=c.borderDashOffset||0;const w=r.leftForLtr(b,h),S=r.leftForLtr(r.xPlus(b,1),h-2),E=uo(c.borderRadius);Object.values(E).some(M=>M!==0)?(t.beginPath(),t.fillStyle=l.multiKeyBackground,If(t,{x:w,y:_,w:h,h:f,radius:E}),t.fill(),t.stroke(),t.fillStyle=c.backgroundColor,t.beginPath(),If(t,{x:S,y:_+1,w:h-2,h:f-2,radius:E}),t.fill()):(t.fillStyle=l.multiKeyBackground,t.fillRect(w,_,h,f),t.strokeRect(w,_,h,f),t.fillStyle=c.backgroundColor,t.fillRect(S,_+1,h-2,f-2))}t.fillStyle=this.labelTextColors[n]}drawBody(t,i,n){const{body:r}=this,{bodySpacing:l,bodyAlign:c,displayColors:d,boxHeight:f,boxWidth:h,boxPadding:m}=n,x=bn(n.bodyFont);let b=x.lineHeight,v=0;const _=fo(n.rtl,this.x,this.width),w=function(F){i.fillText(F,_.x(t.x+v),t.y+b/2),t.y+=b+l},S=_.textAlign(c);let E,M,A,O,z,H,j;for(i.textAlign=c,i.textBaseline="middle",i.font=x.string,t.x=cf(this,S,n),i.fillStyle=n.bodyColor,me(this.beforeBody,w),v=d&&S!=="right"?c==="center"?h/2+m:h+2+m:0,O=0,H=r.length;O<H;++O){for(E=r[O],M=this.labelTextColors[O],i.fillStyle=M,me(E.before,w),A=E.lines,d&&A.length&&(this._drawColorBox(i,t,O,_,n),b=Math.max(x.lineHeight,f)),z=0,j=A.length;z<j;++z)w(A[z]),b=x.lineHeight;me(E.after,w)}v=0,b=x.lineHeight,me(this.afterBody,w),t.y-=l}drawFooter(t,i,n){const r=this.footer,l=r.length;let c,d;if(l){const f=fo(n.rtl,this.x,this.width);for(t.x=cf(this,n.footerAlign,n),t.y+=n.footerMarginTop,i.textAlign=f.textAlign(n.footerAlign),i.textBaseline="middle",c=bn(n.footerFont),i.fillStyle=n.footerColor,i.font=c.string,d=0;d<l;++d)i.fillText(r[d],f.x(t.x),t.y+c.lineHeight/2),t.y+=c.lineHeight+n.footerSpacing}}drawBackground(t,i,n,r){const{xAlign:l,yAlign:c}=this,{x:d,y:f}=t,{width:h,height:m}=n,{topLeft:x,topRight:b,bottomLeft:v,bottomRight:_}=uo(r.cornerRadius);i.fillStyle=r.backgroundColor,i.strokeStyle=r.borderColor,i.lineWidth=r.borderWidth,i.beginPath(),i.moveTo(d+x,f),c==="top"&&this.drawCaret(t,i,n,r),i.lineTo(d+h-b,f),i.quadraticCurveTo(d+h,f,d+h,f+b),c==="center"&&l==="right"&&this.drawCaret(t,i,n,r),i.lineTo(d+h,f+m-_),i.quadraticCurveTo(d+h,f+m,d+h-_,f+m),c==="bottom"&&this.drawCaret(t,i,n,r),i.lineTo(d+v,f+m),i.quadraticCurveTo(d,f+m,d,f+m-v),c==="center"&&l==="left"&&this.drawCaret(t,i,n,r),i.lineTo(d,f+x),i.quadraticCurveTo(d,f,d+x,f),i.closePath(),i.fill(),r.borderWidth>0&&i.stroke()}_updateAnimationTarget(t){const i=this.chart,n=this.$animations,r=n&&n.x,l=n&&n.y;if(r||l){const c=Lc[t.position].call(this,this._active,this._eventPosition);if(!c)return;const d=this._size=k2(this,t),f=Object.assign({},c,this._size),h=T2(i,t,f),m=E2(t,f,h,i);(r._to!==m.x||l._to!==m.y)&&(this.xAlign=h.xAlign,this.yAlign=h.yAlign,this.width=d.width,this.height=d.height,this.caretX=c.x,this.caretY=c.y,this._resolveAnimations().update(this,m))}}_willRender(){return!!this.opacity}draw(t){const i=this.options.setContext(this.getContext());let n=this.opacity;if(!n)return;this._updateAnimationTarget(i);const r={width:this.width,height:this.height},l={x:this.x,y:this.y};n=Math.abs(n)<.001?0:n;const c=wa(i.padding),d=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;i.enabled&&d&&(t.save(),t.globalAlpha=n,this.drawBackground(l,t,r,i),u5(t,i.textDirection),l.y+=c.top,this.drawTitle(l,t,i),this.drawBody(l,t,i),this.drawFooter(l,t,i),d5(t,i.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,i){const n=this._active,r=t.map(({datasetIndex:d,index:f})=>{const h=this.chart.getDatasetMeta(d);if(!h)throw new Error("Cannot find a dataset at index "+d);return{datasetIndex:d,element:h.data[f],index:f}}),l=!Uf(n,r),c=this._positionChanged(r,i);(l||c)&&(this._active=r,this._eventPosition=i,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,i,n=!0){if(i&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const r=this.options,l=this._active||[],c=this._getActiveElements(t,l,i,n),d=this._positionChanged(c,t),f=i||!Uf(c,l)||d;return f&&(this._active=c,(r.enabled||r.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,i))),f}_getActiveElements(t,i,n,r){const l=this.options;if(t.type==="mouseout")return[];if(!r)return i.filter(d=>this.chart.data.datasets[d.datasetIndex]&&this.chart.getDatasetMeta(d.datasetIndex).controller.getParsed(d.index)!==void 0);const c=this.chart.getElementsAtEventForMode(t,l.mode,l,n);return l.reverse&&c.reverse(),c}_positionChanged(t,i){const{caretX:n,caretY:r,options:l}=this,c=Lc[l.position].call(this,t,i);return c!==!1&&(n!==c.x||r!==c.y)}}var P6={id:"tooltip",_element:A2,positioners:Lc,afterInit(a,t,i){i&&(a.tooltip=new A2({chart:a,options:i}))},beforeUpdate(a,t,i){a.tooltip&&a.tooltip.initialize(i)},reset(a,t,i){a.tooltip&&a.tooltip.initialize(i)},afterDraw(a){const t=a.tooltip;if(t&&t._willRender()){const i={tooltip:t};if(a.notifyPlugins("beforeTooltipDraw",{...i,cancelable:!0})===!1)return;t.draw(a.ctx),a.notifyPlugins("afterTooltipDraw",i)}},afterEvent(a,t){if(a.tooltip){const i=t.replay;a.tooltip.handleEvent(t.event,i,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(a,t)=>t.bodyFont.size,boxWidth:(a,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:M5},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:a=>a!=="filter"&&a!=="itemSort"&&a!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const U6=(a,t,i,n)=>(typeof t=="string"?(i=a.push(t)-1,n.unshift({index:i,label:t})):isNaN(t)&&(i=null),i);function Y6(a,t,i,n){const r=a.indexOf(t);if(r===-1)return U6(a,t,i,n);const l=a.lastIndexOf(t);return r!==l?i:r}const G6=(a,t)=>a===null?null:ya(Math.round(a),0,t);function z2(a){const t=this.getLabels();return a>=0&&a<t.length?t[a]:a}class q6 extends To{static id="category";static defaults={ticks:{callback:z2}};constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const i=this._addedLabels;if(i.length){const n=this.getLabels();for(const{index:r,label:l}of i)n[r]===l&&n.splice(r,1);this._addedLabels=[]}super.init(t)}parse(t,i){if(ke(t))return null;const n=this.getLabels();return i=isFinite(i)&&n[i]===t?i:Y6(n,t,de(i,t),this._addedLabels),G6(i,n.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:i}=this.getUserBounds();let{min:n,max:r}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(n=0),i||(r=this.getLabels().length-1)),this.min=n,this.max=r}buildTicks(){const t=this.min,i=this.max,n=this.options.offset,r=[];let l=this.getLabels();l=t===0&&i===l.length-1?l:l.slice(t,i+1),this._valueRange=Math.max(l.length-(n?0:1),1),this._startValue=this.min-(n?.5:0);for(let c=t;c<=i;c++)r.push({value:c});return r}getLabelForValue(t){return z2.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const i=this.ticks;return t<0||t>i.length-1?null:this.getPixelForValue(i[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}function V6(a,t){const i=[],{bounds:r,step:l,min:c,max:d,precision:f,count:h,maxTicks:m,maxDigits:x,includeBounds:b}=a,v=l||1,_=m-1,{min:w,max:S}=t,E=!ke(c),M=!ke(d),A=!ke(h),O=(S-w)/(x+1);let z=D1((S-w)/_/v)*v,H,j,F,U;if(z<1e-14&&!E&&!M)return[{value:w},{value:S}];U=Math.ceil(S/z)-Math.floor(w/z),U>_&&(z=D1(U*z/_/v)*v),ke(f)||(H=Math.pow(10,f),z=Math.ceil(z*H)/H),r==="ticks"?(j=Math.floor(w/z)*z,F=Math.ceil(S/z)*z):(j=w,F=S),E&&M&&l&&V4((d-c)/l,z/1e3)?(U=Math.round(Math.min((d-c)/z,m)),z=(d-c)/U,j=c,F=d):A?(j=E?c:j,F=M?d:F,U=h-1,z=(F-j)/U):(U=(F-j)/z,Tf(U,Math.round(U),z/1e3)?U=Math.round(U):U=Math.ceil(U));const W=Math.max(N1(z),N1(j));H=Math.pow(10,ke(f)?W:f),j=Math.round(j*H)/H,F=Math.round(F*H)/H;let et=0;for(E&&(b&&j!==c?(i.push({value:c}),j<c&&et++,Tf(Math.round((j+et*z)*H)/H,c,O2(c,O,a))&&et++):j<c&&et++);et<U;++et){const Y=Math.round((j+et*z)*H)/H;if(M&&Y>d)break;i.push({value:Y})}return M&&b&&F!==d?i.length&&Tf(i[i.length-1].value,d,O2(d,O,a))?i[i.length-1].value=d:i.push({value:d}):(!M||F===d)&&i.push({value:F}),i}function O2(a,t,{horizontal:i,minRotation:n}){const r=Kr(n),l=(i?Math.sin(r):Math.cos(r))||.001,c=.75*t*(""+a).length;return Math.min(t/l,c)}class I6 extends To{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,i){return ke(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:i,maxDefined:n}=this.getUserBounds();let{min:r,max:l}=this;const c=f=>r=i?r:f,d=f=>l=n?l:f;if(t){const f=pr(r),h=pr(l);f<0&&h<0?d(0):f>0&&h>0&&c(0)}if(r===l){let f=l===0?1:Math.abs(l*.05);d(l+f),t||c(r-f)}this.min=r,this.max=l}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:i,stepSize:n}=t,r;return n?(r=Math.ceil(this.max/n)-Math.floor(this.min/n)+1,r>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${r} ticks. Limiting to 1000.`),r=1e3)):(r=this.computeTickLimit(),i=i||11),i&&(r=Math.min(i,r)),r}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,i=t.ticks;let n=this.getTickLimit();n=Math.max(2,n);const r={maxTicks:n,bounds:t.bounds,min:t.min,max:t.max,precision:i.precision,step:i.stepSize,count:i.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:i.minRotation||0,includeBounds:i.includeBounds!==!1},l=this._range||this,c=V6(r,l);return t.bounds==="ticks"&&I4(c,this,"value"),t.reverse?(c.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),c}configure(){const t=this.ticks;let i=this.min,n=this.max;if(super.configure(),this.options.offset&&t.length){const r=(n-i)/Math.max(t.length-1,1)/2;i-=r,n+=r}this._startValue=i,this._endValue=n,this._valueRange=n-i}getLabelForValue(t){return t5(t,this.chart.options.locale,this.options.ticks.format)}}class X6 extends I6{static id="linear";static defaults={ticks:{callback:e5.formatters.numeric}};determineDataLimits(){const{min:t,max:i}=this.getMinMax(!0);this.min=ha(t)?t:0,this.max=ha(i)?i:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),i=t?this.width:this.height,n=Kr(this.options.ticks.minRotation),r=(t?Math.sin(n):Math.cos(n))||.001,l=this._resolveTickFontOptions(0);return Math.ceil(i/Math.min(40,l.lineHeight/r))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}const oh={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},xn=Object.keys(oh);function R2(a,t){return a-t}function j2(a,t){if(ke(t))return null;const i=a._adapter,{parser:n,round:r,isoWeekday:l}=a._parseOpts;let c=t;return typeof n=="function"&&(c=n(c)),ha(c)||(c=typeof n=="string"?i.parse(c,n):i.parse(c)),c===null?null:(r&&(c=r==="week"&&(qf(l)||l===!0)?i.startOf(c,"isoWeek",l):i.startOf(c,r)),+c)}function D2(a,t,i,n){const r=xn.length;for(let l=xn.indexOf(a);l<r-1;++l){const c=oh[xn[l]],d=c.steps?c.steps:Number.MAX_SAFE_INTEGER;if(c.common&&Math.ceil((i-t)/(d*c.size))<=n)return xn[l]}return xn[r-1]}function $6(a,t,i,n,r){for(let l=xn.length-1;l>=xn.indexOf(i);l--){const c=xn[l];if(oh[c].common&&a._adapter.diff(r,n,c)>=t-1)return c}return xn[i?xn.indexOf(i):0]}function W6(a){for(let t=xn.indexOf(a)+1,i=xn.length;t<i;++t)if(oh[xn[t]].common)return xn[t]}function N2(a,t,i){if(!i)a[t]=!0;else if(i.length){const{lo:n,hi:r}=Em(i,t),l=i[n]>=t?i[n]:i[r];a[l]=!0}}function Q6(a,t,i,n){const r=a._adapter,l=+r.startOf(t[0].value,n),c=t[t.length-1].value;let d,f;for(d=l;d<=c;d=+r.add(d,1,n))f=i[d],f>=0&&(t[f].major=!0);return t}function L2(a,t,i){const n=[],r={},l=t.length;let c,d;for(c=0;c<l;++c)d=t[c],r[d]=c,n.push({value:d,major:!1});return l===0||!i?n:Q6(a,n,r,i)}class B2 extends To{static id="time";static defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}};constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,i={}){const n=t.time||(t.time={}),r=this._adapter=new fz._date(t.adapters.date);r.init(i),Zc(n.displayFormats,r.formats()),this._parseOpts={parser:n.parser,round:n.round,isoWeekday:n.isoWeekday},super.init(t),this._normalized=i.normalized}parse(t,i){return t===void 0?null:j2(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,i=this._adapter,n=t.time.unit||"day";let{min:r,max:l,minDefined:c,maxDefined:d}=this.getUserBounds();function f(h){!c&&!isNaN(h.min)&&(r=Math.min(r,h.min)),!d&&!isNaN(h.max)&&(l=Math.max(l,h.max))}(!c||!d)&&(f(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&f(this.getMinMax(!1))),r=ha(r)&&!isNaN(r)?r:+i.startOf(Date.now(),n),l=ha(l)&&!isNaN(l)?l:+i.endOf(Date.now(),n)+1,this.min=Math.min(r,l-1),this.max=Math.max(r+1,l)}_getLabelBounds(){const t=this.getLabelTimestamps();let i=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;return t.length&&(i=t[0],n=t[t.length-1]),{min:i,max:n}}buildTicks(){const t=this.options,i=t.time,n=t.ticks,r=n.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&r.length&&(this.min=this._userMin||r[0],this.max=this._userMax||r[r.length-1]);const l=this.min,c=this.max,d=J4(r,l,c);return this._unit=i.unit||(n.autoSkip?D2(i.minUnit,this.min,this.max,this._getLabelCapacity(l)):$6(this,d.length,i.minUnit,this.min,this.max)),this._majorUnit=!n.major.enabled||this._unit==="year"?void 0:W6(this._unit),this.initOffsets(r),t.reverse&&d.reverse(),L2(this,d,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let i=0,n=0,r,l;this.options.offset&&t.length&&(r=this.getDecimalForValue(t[0]),t.length===1?i=1-r:i=(this.getDecimalForValue(t[1])-r)/2,l=this.getDecimalForValue(t[t.length-1]),t.length===1?n=l:n=(l-this.getDecimalForValue(t[t.length-2]))/2);const c=t.length<3?.5:.25;i=ya(i,0,c),n=ya(n,0,c),this._offsets={start:i,end:n,factor:1/(i+1+n)}}_generate(){const t=this._adapter,i=this.min,n=this.max,r=this.options,l=r.time,c=l.unit||D2(l.minUnit,i,n,this._getLabelCapacity(i)),d=de(r.ticks.stepSize,1),f=c==="week"?l.isoWeekday:!1,h=qf(f)||f===!0,m={};let x=i,b,v;if(h&&(x=+t.startOf(x,"isoWeek",f)),x=+t.startOf(x,h?"day":c),t.diff(n,i,c)>1e5*d)throw new Error(i+" and "+n+" are too far apart with stepSize of "+d+" "+c);const _=r.ticks.source==="data"&&this.getDataTimestamps();for(b=x,v=0;b<n;b=+t.add(b,d,c),v++)N2(m,b,_);return(b===n||r.bounds==="ticks"||v===1)&&N2(m,b,_),Object.keys(m).sort(R2).map(w=>+w)}getLabelForValue(t){const i=this._adapter,n=this.options.time;return n.tooltipFormat?i.format(t,n.tooltipFormat):i.format(t,n.displayFormats.datetime)}format(t,i){const r=this.options.time.displayFormats,l=this._unit,c=i||r[l];return this._adapter.format(t,c)}_tickFormatFunction(t,i,n,r){const l=this.options,c=l.ticks.callback;if(c)return ze(c,[t,i,n],this);const d=l.time.displayFormats,f=this._unit,h=this._majorUnit,m=f&&d[f],x=h&&d[h],b=n[i],v=h&&x&&b&&b.major;return this._adapter.format(t,r||(v?x:m))}generateTickLabels(t){let i,n,r;for(i=0,n=t.length;i<n;++i)r=t[i],r.label=this._tickFormatFunction(r.value,i,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const i=this._offsets,n=this.getDecimalForValue(t);return this.getPixelForDecimal((i.start+n)*i.factor)}getValueForPixel(t){const i=this._offsets,n=this.getDecimalForPixel(t)/i.factor-i.end;return this.min+n*(this.max-this.min)}_getLabelSize(t){const i=this.options.ticks,n=this.ctx.measureText(t).width,r=Kr(this.isHorizontal()?i.maxRotation:i.minRotation),l=Math.cos(r),c=Math.sin(r),d=this._resolveTickFontOptions(0).size;return{w:n*l+d*c,h:n*c+d*l}}_getLabelCapacity(t){const i=this.options.time,n=i.displayFormats,r=n[i.unit]||n.millisecond,l=this._tickFormatFunction(t,0,L2(this,[t],this._majorUnit),r),c=this._getLabelSize(l),d=Math.floor(this.isHorizontal()?this.width/c.w:this.height/c.h)-1;return d>0?d:1}getDataTimestamps(){let t=this._cache.data||[],i,n;if(t.length)return t;const r=this.getMatchingVisibleMetas();if(this._normalized&&r.length)return this._cache.data=r[0].controller.getAllParsedValues(this);for(i=0,n=r.length;i<n;++i)t=t.concat(r[i].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let i,n;if(t.length)return t;const r=this.getLabels();for(i=0,n=r.length;i<n;++i)t.push(j2(this,r[i]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return W_(t.sort(R2))}}function uf(a,t,i){let n=0,r=a.length-1,l,c,d,f;i?(t>=a[n].pos&&t<=a[r].pos&&({lo:n,hi:r}=jg(a,"pos",t)),{pos:l,time:d}=a[n],{pos:c,time:f}=a[r]):(t>=a[n].time&&t<=a[r].time&&({lo:n,hi:r}=jg(a,"time",t)),{time:l,pos:d}=a[n],{time:c,pos:f}=a[r]);const h=c-l;return h?d+(f-d)*(t-l)/h:d}class tR extends B2{static id="timeseries";static defaults=B2.defaults;constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),i=this._table=this.buildLookupTable(t);this._minPos=uf(i,this.min),this._tableRange=uf(i,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:i,max:n}=this,r=[],l=[];let c,d,f,h,m;for(c=0,d=t.length;c<d;++c)h=t[c],h>=i&&h<=n&&r.push(h);if(r.length<2)return[{time:i,pos:0},{time:n,pos:1}];for(c=0,d=r.length;c<d;++c)m=r[c+1],f=r[c-1],h=r[c],Math.round((m+f)/2)!==h&&l.push({time:h,pos:c/(d-1)});return l}_generate(){const t=this.min,i=this.max;let n=super.getDataTimestamps();return(!n.includes(t)||!n.length)&&n.splice(0,0,t),(!n.includes(i)||n.length===1)&&n.push(i),n.sort((r,l)=>r-l)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const i=this.getDataTimestamps(),n=this.getLabelTimestamps();return i.length&&n.length?t=this.normalize(i.concat(n)):t=i.length?i:n,t=this._cache.all=t,t}getDecimalForValue(t){return(uf(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const i=this._offsets,n=this.getDecimalForPixel(t)/i.factor-i.end;return uf(this._table,n*this._tableRange+this._minPos,!0)}}const C5="label";function H2(a,t){typeof a=="function"?a(t):a&&(a.current=t)}function Z6(a,t){const i=a.options;i&&t&&Object.assign(i,t)}function A5(a,t){a.labels=t}function z5(a,t,i=C5){const n=[];a.datasets=t.map(r=>{const l=a.datasets.find(c=>c[i]===r[i]);return!l||!r.data||n.includes(l)?{...r}:(n.push(l),Object.assign(l,r),l)})}function K6(a,t=C5){const i={labels:[],datasets:[]};return A5(i,a.labels),z5(i,a.datasets,t),i}function J6(a,t){const{height:i=150,width:n=300,redraw:r=!1,datasetIdKey:l,type:c,data:d,options:f,plugins:h=[],fallbackContent:m,updateMode:x,...b}=a,v=N.useRef(null),_=N.useRef(null),w=()=>{v.current&&(_.current=new lh(v.current,{type:c,data:K6(d,l),options:f&&{...f},plugins:h}),H2(t,_.current))},S=()=>{H2(t,null),_.current&&(_.current.destroy(),_.current=null)};return N.useEffect(()=>{!r&&_.current&&f&&Z6(_.current,f)},[r,f]),N.useEffect(()=>{!r&&_.current&&A5(_.current.config.data,d.labels)},[r,d.labels]),N.useEffect(()=>{!r&&_.current&&d.datasets&&z5(_.current.config.data,d.datasets,l)},[r,d.datasets]),N.useEffect(()=>{_.current&&(r?(S(),setTimeout(w)):_.current.update(x))},[r,f,d.labels,d.datasets,x]),N.useEffect(()=>{_.current&&(S(),setTimeout(w))},[c]),N.useEffect(()=>(w(),()=>S()),[]),k.jsx("canvas",{ref:v,role:"img",height:i,width:n,...b,children:m})}const tO=N.forwardRef(J6);function eO(a,t){return lh.register(t),N.forwardRef((i,n)=>k.jsx(tO,{...i,ref:n,type:a}))}const iO=eO("bar",dz);lh.register(q6,X6,E6,P6,R6);const df={projects:[{name:"OSCULT BTP",url:"https://oscult-ingenierie.ma/"},{name:"BLS Services",url:"https://locationbenne-alsace.fr/"},{name:"Airless Decoration",url:"https://airlessdecoration.fr/"},{name:"Age d'Or Services",url:"https://agedorservicesguyane.fr/"},{name:"AHC Plumber",url:"https://ahcplomberie.fr/"}],skills:["languages","tools","frameworks"]};function nO(){const[a,t]=N.useState(""),[i,n]=N.useState([" "]),[r,l]=N.useState("root"),[c,d]=N.useState(!1),f=N.useRef(null),h={languages:[{name:"PHP",level:90},{name:"JavaScript",level:90},{name:"TypeScript",level:80},{name:"HTML",level:95},{name:"CSS",level:90},{name:"Java",level:70},{name:"Oracle DB",level:80},{name:"SQL",level:90},{name:"PL/SQL",level:75}],tools:[{name:"Git",level:90},{name:"GitHub",level:90},{name:"Postman",level:90},{name:"API / REST APIs",level:90},{name:"Docker",level:70},{name:"XAMPP",level:80},{name:"UML",level:75},{name:"Enterprise Architect",level:70}],frameworks:[{name:"React.js",level:85},{name:"Tailwind CSS",level:90},{name:"Laravel",level:90},{name:"Django",level:75},{name:"Flutter",level:70}]},[m,x]=N.useState(null);N.useEffect(()=>{f.current?.focus()},[]);const b=w=>{if(w.key!=="Enter")return;const S=a.trim().toLowerCase();let E=[];if(S==="clear"){n([]),t("");return}if(S==="help")E=["Available commands:","ls - list files/folders","cd <folder> - enter folder","cd .. - return to root","cat <file> - view file content","to exit - close chart","clear - clear terminal"];else if(S==="-h")E=["Available commands:","ls - list files/folders","cd <folder> - enter folder","cd .. - return to root","cat <file> - view file content","to exit - close chart","clear - clear terminal"];else if(S==="ls")r==="root"?E=Object.keys(df):r==="projects"?E=df.projects.map(M=>`${M.name} → ${M.url}`):r==="skills"&&(E=df.skills);else if(S==="cd ..")r==="root"?E=["Already at root directory."]:(l("root"),E=["Returned to root directory."]);else if(S.startsWith("cd ")){const M=S.split(" ")[1];M==="projects"?(l("projects"),E=["Entered folder: projects","","Available projects:",...df.projects.map(A=>`- ${A.name} → ${A.url}`)]):M==="skills"?(l("skills"),E=["Entered folder: skills","","Available skill categories:","- skills languages","- skills tools","- skills frameworks"]):E=[`Folder '${M}' not found.`]}else if(S.startsWith("cat ")){const M=S.split(" ")[1];r!=="skills"?E=["You must be inside the skills folder."]:M==="languages"?(x(v(h.languages)),d(!0),E=["Displaying Programming Languages skills..."]):M==="tools"?(x(v(h.tools)),d(!0),E=["Displaying Developer Tools skills..."]):M==="frameworks"?(x(v(h.frameworks)),d(!0),E=["Displaying Frameworks skills..."]):E=[`Skill category '${M}' not found.`]}else S==="skills languages"?(x(v(h.languages)),d(!0),E=["Displaying Programming Languages skills..."]):S==="skills tools"?(x(v(h.tools)),d(!0),E=["Displaying Developer Tools skills..."]):S==="skills frameworks"?(x(v(h.frameworks)),d(!0),E=["Displaying Frameworks skills..."]):S==="chart"?(d(!0),E=["Displaying skills chart..."]):S==="close chart"||S==="exit"?(d(!1),E=["Chart closed."]):E=[`Command not found: ${S}`];n(M=>[...M,`$ ${S}`,...E]),t("")},v=w=>({labels:w.map(S=>S.name),datasets:[{label:"Skill level (%)",data:w.map(S=>S.level),backgroundColor:"#3b82f6",borderRadius:8,barThickness:20}]}),_={indexAxis:"y",responsive:!0,plugins:{legend:{display:!1},tooltip:{callbacks:{label:w=>`${w.parsed.x}%`}}},scales:{x:{min:0,max:100,ticks:{callback:w=>`${w}%`}}}};return k.jsx("main",{className:"w-full px-6 flex justify-center",children:k.jsx("div",{className:"w-full max-w-5xl shadow-inner shadow-[#c4aaff]/90  rounded-4xl",children:k.jsxs("div",{className:"flex flex-col gap-6 glass-surface-sm glass-shine-subtle bg-glass-dark p-6 border-spacing-5 md:p-10 rounded-2xl text-white",children:[k.jsxs("div",{className:"space-y-3",children:[k.jsxs("h1",{className:"text-2xl md:text-5xl font-bold",children:["I'm Marwane"," ",k.jsx("span",{className:"bg-linear-to-r from-[#8B5CF6] to-[#c4aaff] bg-clip-text text-transparent",children:"Elhosni"})]}),k.jsxs("p",{className:"text-sm lg:text-lg md:text-lg text-[#c0c0c0] leading-relaxed",children:["I craft fast, scalable web apps. Explore my skills and projects using the terminal below.",k.jsx("br",{className:"hidden sm:block"}),"Type ",k.jsx("span",{className:"text-[#c4aaff] font-semibold",children:"-h"})," to start or continue scrolling."]})]}),k.jsxs("div",{className:`mt-4  border border-white/10 p-4 md:p-6 rounded-xl \r
                      h-50 md:h-75 lg:h-75\r
                      flex flex-col overflow-hidden`,children:[k.jsxs("div",{className:"flex-1 overflow-y-auto pr-2 space-y-1",children:[i.map((w,S)=>k.jsx("div",{className:"whitespace-pre-wrap text-sm md:text-base",children:w},S)),c&&m&&k.jsxs("div",{className:"mt-4 w-full",children:[k.jsx("p",{className:"text-xs text-gray-400 mb-2",children:'Type "close chart" to quit'}),k.jsx(iO,{data:m,options:_})]})]}),k.jsxs("div",{className:"flex gap-2 mt-4 items-center",children:[k.jsxs("span",{className:"text-[#c0c0c0] text-sm md:text-base",children:["marwane@/:~",r!=="root"&&`/${r}`,"$"]}),k.jsx("input",{ref:f,value:a,onChange:w=>t(w.target.value),onKeyDown:b,className:"flex-1 bg-transparent outline-none text-[#c4aaff] placeholder-[#c4aaff] text-sm md:text-base",placeholder:"type a command..."})]})]})]})})})}let kc,Ql,F2=typeof Symbol=="function"?Symbol():"_split",Bg,aO=()=>Bg||wu.register(window.gsap),P2=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,pu=a=>typeof a=="string"?pu(document.querySelectorAll(a)):"length"in a?Array.from(a).reduce((t,i)=>(typeof i=="string"?t.push(...pu(i)):t.push(i),t),[]):[a],U2=a=>pu(a).filter(t=>t instanceof HTMLElement),Hg=[],tg=function(){},sO={add:a=>a()},rO=/\s+/g,Y2=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),Wf={left:0,top:0,width:0,height:0},lO=(a,t)=>{for(;++t<a.length&&a[t]===Wf;);return a[t]||Wf},G2=({element:a,html:t,ariaL:i,ariaH:n})=>{a.innerHTML=t,i?a.setAttribute("aria-label",i):a.removeAttribute("aria-label"),n?a.setAttribute("aria-hidden",n):a.removeAttribute("aria-hidden")},q2=(a,t)=>{if(t){let i=new Set(a.join("").match(t)||Hg),n=a.length,r,l,c,d;if(i.size)for(;--n>-1;){l=a[n];for(c of i)if(c.startsWith(l)&&c.length>l.length){for(r=0,d=l;c.startsWith(d+=a[n+ ++r])&&d.length<c.length;);if(r&&d.length===c.length){a[n]=c,a.splice(n+1,r);break}}}}return a},V2=a=>window.getComputedStyle(a).display==="inline"&&(a.style.display="inline-block"),Zl=(a,t,i)=>t.insertBefore(typeof a=="string"?document.createTextNode(a):a,i),Fg=(a,t,i)=>{let n=t[a+"sClass"]||"",{tag:r="div",aria:l="auto",propIndex:c=!1}=t,d=a==="line"?"block":"inline-block",f=n.indexOf("++")>-1,h=m=>{let x=document.createElement(r),b=i.length+1;return n&&(x.className=n+(f?" "+n+b:"")),c&&x.style.setProperty("--"+a,b+""),l!=="none"&&x.setAttribute("aria-hidden","true"),r!=="span"&&(x.style.position="relative",x.style.display=d),x.textContent=m,i.push(x),x};return f&&(n=n.replace("++","")),h.collection=i,h},oO=(a,t,i,n)=>{let r=Fg("line",i,n),l=window.getComputedStyle(a).textAlign||"left";return(c,d)=>{let f=r("");for(f.style.textAlign=l,a.insertBefore(f,t[c]);c<d;c++)f.appendChild(t[c]);f.normalize()}},O5=(a,t,i,n,r,l,c,d,f,h)=>{var m;let x=Array.from(a.childNodes),b=0,{wordDelimiter:v,reduceWhiteSpace:_=!0,prepareText:w}=t,S=a.getBoundingClientRect(),E=S,M=!_&&window.getComputedStyle(a).whiteSpace.substring(0,3)==="pre",A=0,O=i.collection,z,H,j,F,U,W,et,Y,at,ct,lt,B,X,st,ut,D,C,$;for(typeof v=="object"?(j=v.delimiter||v,H=v.replaceWith||""):H=v===""?"":v||" ",z=H!==" ";b<x.length;b++)if(F=x[b],F.nodeType===3){for(ut=F.textContent||"",_?ut=ut.replace(rO," "):M&&(ut=ut.replace(/\n/g,H+`
`)),w&&(ut=w(ut,a)),F.textContent=ut,U=H||j?ut.split(j||H):ut.match(d)||Hg,C=U[U.length-1],Y=z?C.slice(-1)===" ":!C,C||U.pop(),E=S,et=z?U[0].charAt(0)===" ":!U[0],et&&Zl(" ",a,F),U[0]||U.shift(),q2(U,f),l&&h||(F.textContent=""),at=1;at<=U.length;at++)if(D=U[at-1],!_&&M&&D.charAt(0)===`
`&&((m=F.previousSibling)==null||m.remove(),Zl(document.createElement("br"),a,F),D=D.slice(1)),!_&&D==="")Zl(H,a,F);else if(D===" ")a.insertBefore(document.createTextNode(" "),F);else{if(z&&D.charAt(0)===" "&&Zl(" ",a,F),A&&at===1&&!et&&O.indexOf(A.parentNode)>-1?(W=O[O.length-1],W.appendChild(document.createTextNode(n?"":D))):(W=i(n?"":D),Zl(W,a,F),A&&at===1&&!et&&W.insertBefore(A,W.firstChild)),n)for(lt=P2?q2([...P2.segment(D)].map(nt=>nt.segment),f):D.match(d)||Hg,$=0;$<lt.length;$++)W.appendChild(lt[$]===" "?document.createTextNode(" "):n(lt[$]));if(l&&h){if(ut=F.textContent=ut.substring(D.length+1,ut.length),ct=W.getBoundingClientRect(),ct.top>E.top&&ct.left<=E.left){for(B=a.cloneNode(),X=a.childNodes[0];X&&X!==W;)st=X,X=X.nextSibling,B.appendChild(st);a.parentNode.insertBefore(B,a),r&&V2(B)}E=ct}(at<U.length||Y)&&Zl(at>=U.length?" ":z&&D.slice(-1)===" "?" "+H:H,a,F)}a.removeChild(F),A=0}else F.nodeType===1&&(c&&c.indexOf(F)>-1?(O.indexOf(F.previousSibling)>-1&&O[O.length-1].appendChild(F),A=F):(O5(F,t,i,n,r,l,c,d,f,!0),A=0),r&&V2(F))};const R5=class j5{constructor(t,i){this.isSplit=!1,aO(),this.elements=U2(t),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=i,this.elements.forEach(c=>{var d;i.overwrite!==!1&&((d=c[F2])==null||d._data.orig.filter(({element:f})=>f===c).forEach(G2)),c[F2]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],r,l=()=>{let c=n.length,d;for(;c--;){d=n[c];let f=d.element.offsetWidth;if(f!==d.width){d.width=f,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(r),r=setTimeout(l,200)})},tg(this),this.split(i)}split(t){return(this._ctx||sO).add(()=>{this.isSplit&&this.revert(),this.vars=t=t||this.vars||{};let{type:i="chars,words,lines",aria:n="auto",deepSlice:r=!0,smartWrap:l,onSplit:c,autoSplit:d=!1,specialChars:f,mask:h}=this.vars,m=i.indexOf("lines")>-1,x=i.indexOf("chars")>-1,b=i.indexOf("words")>-1,v=x&&!b&&!m,_=f&&("push"in f?new RegExp("(?:"+f.join("|")+")","gu"):f),w=_?new RegExp(_.source+"|"+Y2.source,"gu"):Y2,S=!!t.ignore&&U2(t.ignore),{orig:E,animTime:M,obs:A}=this._data,O;(x||b||m)&&(this.elements.forEach((z,H)=>{E[H]={element:z,html:z.innerHTML,ariaL:z.getAttribute("aria-label"),ariaH:z.getAttribute("aria-hidden")},n==="auto"?z.setAttribute("aria-label",(z.textContent||"").trim()):n==="hidden"&&z.setAttribute("aria-hidden","true");let j=[],F=[],U=[],W=x?Fg("char",t,j):null,et=Fg("word",t,F),Y,at,ct,lt;if(O5(z,t,et,W,v,r&&(m||v),S,w,_,!1),m){let B=pu(z.childNodes),X=oO(z,B,t,U),st,ut=[],D=0,C=B.map(it=>it.nodeType===1?it.getBoundingClientRect():Wf),$=Wf,nt;for(Y=0;Y<B.length;Y++)st=B[Y],st.nodeType===1&&(st.nodeName==="BR"?((!Y||B[Y-1].nodeName!=="BR")&&(ut.push(st),X(D,Y+1)),D=Y+1,$=lO(C,Y)):(nt=C[Y],Y&&nt.top>$.top&&nt.left<$.left+$.width-1&&(X(D,Y),D=Y),$=nt));D<Y&&X(D,Y),ut.forEach(it=>{var ft;return(ft=it.parentNode)==null?void 0:ft.removeChild(it)})}if(!b){for(Y=0;Y<F.length;Y++)if(at=F[Y],x||!at.nextSibling||at.nextSibling.nodeType!==3)if(l&&!m){for(ct=document.createElement("span"),ct.style.whiteSpace="nowrap";at.firstChild;)ct.appendChild(at.firstChild);at.replaceWith(ct)}else at.replaceWith(...at.childNodes);else lt=at.nextSibling,lt&&lt.nodeType===3&&(lt.textContent=(at.textContent||"")+(lt.textContent||""),at.remove());F.length=0,z.normalize()}this.lines.push(...U),this.words.push(...F),this.chars.push(...j)}),h&&this[h]&&this.masks.push(...this[h].map(z=>{let H=z.cloneNode();return z.replaceWith(H),H.appendChild(z),z.className&&(H.className=z.className.trim()+"-mask"),H.style.overflow="clip",H}))),this.isSplit=!0,Ql&&m&&(d?Ql.addEventListener("loadingdone",this._split):Ql.status==="loading"&&console.warn("SplitText called before fonts loaded")),(O=c&&c(this))&&O.totalTime&&(this._data.anim=M?O.totalTime(M):O),m&&d&&this.elements.forEach((z,H)=>{E[H].width=z.offsetWidth,A&&A.observe(z)})}),this}kill(){let{obs:t}=this._data;t&&t.disconnect(),Ql?.removeEventListener("loadingdone",this._split)}revert(){var t,i;if(this.isSplit){let{orig:n,anim:r}=this._data;this.kill(),n.forEach(G2),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,r&&(this._data.animTime=r.totalTime(),r.revert()),(i=(t=this.vars).onRevert)==null||i.call(t,this)}return this}static create(t,i){return new j5(t,i)}static register(t){kc=kc||t||window.gsap,kc&&(pu=kc.utils.toArray,tg=kc.core.context||tg),!Bg&&window.innerWidth>0&&(Ql=document.fonts,Bg=!0)}};R5.version="3.14.2";let wu=R5;const cO="modulepreload",uO=function(a){return"/mine-portfolio/"+a},I2={},Qf=function(t,i,n){let r=Promise.resolve();if(i&&i.length>0){let f=function(h){return Promise.all(h.map(m=>Promise.resolve(m).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),d=c?.nonce||c?.getAttribute("nonce");r=f(i.map(h=>{if(h=uO(h),h in I2)return;I2[h]=!0;const m=h.endsWith(".css"),x=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${x}`))return;const b=document.createElement("link");if(b.rel=m?"stylesheet":cO,m||(b.as="script"),b.crossOrigin="",b.href=h,d&&b.setAttribute("nonce",d),document.head.appendChild(b),m)return new Promise((v,_)=>{b.addEventListener("load",v),b.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${h}`)))})}))}function l(c){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=c,window.dispatchEvent(d),!d.defaultPrevented)throw c}return r.then(c=>{for(const d of c||[])d.status==="rejected"&&l(d.reason);return t().catch(l)})};Di.registerPlugin(Ct);function dO(){const a=N.useRef(null),t=N.useRef(null);N.useEffect(()=>{let r;return(async()=>{if(!a.current||!t.current)return;const c=await Qf(()=>Promise.resolve().then(()=>UM),[]),d=await Qf(()=>Promise.resolve().then(()=>fC),void 0),f=c.default,h=d.ScrollTrigger;f.registerPlugin(h),r=f.context(()=>{f.fromTo(t.current,{scale:1.2},{scale:.7,ease:"none",scrollTrigger:{trigger:a.current,start:"top center",end:"bottom top",scrub:!0}});const m=Array.from(a.current.querySelectorAll(".floating-icon")),x=250,b=400;m.forEach(v=>{const _=Math.random()*Math.PI*2,w=x+Math.random()*(b-x);f.fromTo(v,{opacity:0,scale:0},{opacity:1,scale:1,x:w*Math.cos(_),y:w*Math.sin(_),rotation:Math.random()*360,ease:"power2.out",scrollTrigger:{trigger:a.current,start:"top center",end:"bottom top",scrub:!0}})})},a),h.refresh()})(),()=>r?.revert()},[]);const i=[TC,Qc,RC,KC,t4,HC,s4,Qc,AC,MC,i4,QC],n=Array(12).fill("#c4aaff");return k.jsxs("section",{ref:a,className:"relative flex items-center justify-center min-h-165.5 w-screen overflow-hidden",children:[i.map((r,l)=>k.jsx("div",{className:"floating-icon absolute z-20 blur-[2px]",style:{color:n[l%n.length]},children:k.jsx(r,{size:50})},l)),k.jsx("div",{className:"overflow-hidden z-50",children:k.jsx("img",{ref:t,src:"./img/about/gradient2.jpg",alt:"Zoom",className:"w-96 h-auto object-cover"})})]})}Di.registerPlugin(Ct,wu);function D5(){Di.registerPlugin(Ct,Xn),N.useEffect(()=>{const r=Xn.create({wrapper:"#smooth-wrapper",content:"#smooth-content",smooth:1,effects:!0,smoothTouch:.1});return Ct.refresh(),()=>{r.paused()}},[]);const[a]=N.useState(!1);N.useEffect(()=>{const r=document.querySelector(".lens");let l=0,c=0,d=0,f=0;const h=.12,m=b=>{l=b.clientX,c=b.clientY};window.addEventListener("mousemove",m);const x=()=>{d+=(l-d)*h,f+=(c-f)*h,r&&(r.style.transform=`
    translate(${d}px, ${f}px)
    translate(-50%, -50%)
    scale(${a?1.08:0})
  `,r.style.opacity=a?"1":"0"),requestAnimationFrame(x)};return x(),()=>{window.removeEventListener("mousemove",m)}},[a]);const t=N.useRef(null);N.useEffect(()=>{if(!t.current)return;const r=Di.context(()=>{Di.set(".split",{opacity:1}),document.fonts.ready.then(()=>{Di.utils.toArray(".container").forEach(c=>{c.querySelectorAll(".split").forEach(f=>{wu.create(f,{type:"words,lines",mask:"lines",linesClass:"line",autoSplit:!0,onSplit:h=>Di.from(h.lines,{yPercent:120,stagger:.1,scrollTrigger:{trigger:c,scrub:!0,start:"top center",end:"bottom center"}})})})})})},t);return()=>r.revert()},[]);const i="Creating, Exploring & Enjoying Every Single Day",n="Life for me is about balance — doing what I love, staying curious, and finding joy in both the small wins and big milestones.";return k.jsx(k.Fragment,{children:k.jsxs("div",{className:"relative z-10 min-h-screen flex h-full flex-col items-center pt-6 text-[#1b1b18] lg:justify-center",children:[k.jsxs("main",{className:"flex flex-col font-sans text-center items-center w-full my-20 lg:my-40 h-full max-w-7xl px-6",children:[k.jsx("p",{className:"text-[16px] text-[#c4aaff]",children:"// Hello World"}),k.jsx("h1",{className:"lg:text-[72px] text-[42px] text-white font-semibold max-w-xl lg:leading-20",children:"I'm a Full Stack Developer"}),k.jsx(dO,{}),k.jsxs("p",{className:"lg:text-[24px] text-lg text-white font-sans font-semibold max-w-2xl mt-9",children:[k.jsx("span",{className:"text-[#c4aaff]",children:"<p>"})," I CRAFT FAST, SCALABLE, AND ",k.jsx("span",{className:"text-[#c4aaff]",children:"USER-FRIENDLY WEB"})," APPLICATIONS WITH MODERN JAVASCRIPT FRAMEWORKS — COMBINING REACT ON THE FRONTEND WITH ROBUST ",k.jsx("span",{className:"text-[#c4aaff]",children:"SERVER-SIDE SOLUTIONS"})," USING NODE.JS. ",k.jsx("span",{className:"text-[#c4aaff]",children:"</p>"})]}),k.jsx("p",{className:"text-md text-gray-400 max-w-2xl",children:"I thrive on solving real-world problems, turning ideas into clean, maintainable code, and learning through experimentation.  You’ll find me building side projects, diving into new tech stacks, or simply exploring web development."}),k.jsx("a",{href:"/mine-portfolio/files/Mine-cv.pdf",target:"_blank",className:"flex my-6 items-center gap-2 shadow-inner shadow-[#c4aaff] glass-surface-lg bg-linear-90 from-[#8B5CF6]  to-[#c4aaff]/20 border border-white/10 border-spacing-5 text-white px-7 py-3 font-semibold rounded-full text-lg",children:"My Resume"})]}),k.jsx("main",{className:" w-full h-full max-w-full  font-mono justify-center",children:k.jsx("div",{className:"max-w-340 p-8 mx-auto flex flex-col",children:k.jsx("div",{ref:t,className:"flex flex-col items-center justify-center",children:[1].map(r=>k.jsxs("div",{className:"container font-sans lg:w-[35vw] my-20",children:[k.jsx("h2",{className:"split leading-tight text-center text-[32px] lg:text-[48px] font-semibold text-white will-change-transform opacity-0",children:i}),k.jsx("p",{className:"split text-center text-md text-white/70 mt-6 opacity-0",children:n})]},r))})})}),k.jsx("main",{className:" w-full py-12 h-full max-w-full font-mono justify-center",children:k.jsxs("div",{className:"max-w-340 p-8 mx-auto flex flex-col",children:[k.jsxs("div",{className:"flex flex-col lg:flex-row lg:justify-between items-start gap-6 py-8 rounded-2xl font-sans text-white",children:[k.jsx("p",{className:"text-sm sm:text-[16px] mt-1 lg:mt-3 text-[#c4aaff]",children:"// Experience"}),k.jsx("h3",{className:"text-2xl sm:text-3xl lg:text-[48px] font-bold max-w-xl leading-tight",children:"Professional Working Experience"})]}),k.jsxs("div",{className:"flex items-center text-[#c4aaff] font-bold justify-between gap-1",children:["</",k.jsx("div",{className:"h-0.5 bg-[#505559] w-[90vw]"}),">"]}),k.jsxs("div",{className:"grid grid-cols-1 font-sans md:grid-cols-2 lg:grid-cols-2 items-start gap-16 lg:gap-10 max-w-7xl py-20 px-6",children:[k.jsx("div",{className:"max-w-md left-0 w-full lg:h-[40%] flex flex-col justify-start",children:k.jsx("img",{src:"./img/about/about3.jpg",alt:"about3"})}),k.jsxs("div",{className:"lg:flex w-full lg:max-w-380 max-w-full flex flex-col items-start  lg:justify-start",children:[k.jsxs("div",{className:"flex items-center lg:gap-4 py-5 border-b border-white/30 justify-between w-full",children:[k.jsxs("div",{children:[k.jsx("h3",{className:"text-[16px] text-white",children:"Digital media mobile"}),k.jsx("p",{className:"text-[#c4aaff] text-sm mt-1",children:"2025 - Present"})]}),k.jsx("h3",{className:"text-[16px] text-end text-[#b5b5b5]",children:"Freelance Web Developer"})]}),k.jsxs("div",{className:"flex items-center gap-4 py-5 border-b border-white/30 justify-between w-full",children:[k.jsxs("div",{children:[k.jsx("h3",{className:"text-[16px] text-white",children:"Digital media mobile"}),k.jsx("p",{className:"text-[#c4aaff] text-sm mt-1",children:"2024 - 2025"})]}),k.jsx("h3",{className:"text-[16px] text-end text-[#b5b5b5]",children:"Web developer internship"})]}),k.jsx("p",{className:"text-sm text-gray-300 mt-4 max-w-xl",children:"I have a strong background in web development, with experience in both frontend and backend technologies. I have worked on various projects, including e-commerce websites, content management systems, and custom web applications. My expertise includes HTML, CSS, JavaScript, React, Node.js, and database management. I am passionate about creating efficient and user-friendly web solutions that meet the needs of clients and users alike."}),k.jsxs(th,{to:"/contact",className:"flex my-6 items-center font-medium font-sans gap-2 shadow-inner shadow-[#8B5CF6]/70 glass-surface-lg glass-shine-subtle bg-glass-medium rounded-2xl border border-[#ffffff]/10 text-white p-3 px-5 hover:bg-[#8a5cf630] hover:border-[#ffffff45] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_8px_35px_rgba(138,92,246,0.28)] transition-all duration-300",children:["Contact me",k.jsx(U_,{className:"text-xs"})]})]})]})]})})]})})}let fO={data:""},hO=a=>{if(typeof window=="object"){let t=(a?a.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(a||document.head).appendChild(t),t.firstChild}return a||fO},pO=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,gO=/\/\*[^]*?\*\/|  +/g,X2=/\n+/g,Js=(a,t)=>{let i="",n="",r="";for(let l in a){let c=a[l];l[0]=="@"?l[1]=="i"?i=l+" "+c+";":n+=l[1]=="f"?Js(c,l):l+"{"+Js(c,l[1]=="k"?"":t)+"}":typeof c=="object"?n+=Js(c,t?t.replace(/([^,])+/g,d=>l.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,f=>/&/.test(f)?f.replace(/&/g,d):d?d+" "+f:f)):l):c!=null&&(l=/^--/.test(l)?l:l.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=Js.p?Js.p(l,c):l+":"+c+";")}return i+(t&&r?t+"{"+r+"}":r)+n},us={},N5=a=>{if(typeof a=="object"){let t="";for(let i in a)t+=i+N5(a[i]);return t}return a},mO=(a,t,i,n,r)=>{let l=N5(a),c=us[l]||(us[l]=(f=>{let h=0,m=11;for(;h<f.length;)m=101*m+f.charCodeAt(h++)>>>0;return"go"+m})(l));if(!us[c]){let f=l!==a?a:(h=>{let m,x,b=[{}];for(;m=pO.exec(h.replace(gO,""));)m[4]?b.shift():m[3]?(x=m[3].replace(X2," ").trim(),b.unshift(b[0][x]=b[0][x]||{})):b[0][m[1]]=m[2].replace(X2," ").trim();return b[0]})(a);us[c]=Js(r?{["@keyframes "+c]:f}:f,i?"":"."+c)}let d=i&&us.g?us.g:null;return i&&(us.g=us[c]),((f,h,m,x)=>{x?h.data=h.data.replace(x,f):h.data.indexOf(f)===-1&&(h.data=m?f+h.data:h.data+f)})(us[c],t,n,d),c},xO=(a,t,i)=>a.reduce((n,r,l)=>{let c=t[l];if(c&&c.call){let d=c(i),f=d&&d.props&&d.props.className||/^go/.test(d)&&d;c=f?"."+f:d&&typeof d=="object"?d.props?"":Js(d,""):d===!1?"":d}return n+r+(c??"")},"");function ch(a){let t=this||{},i=a.call?a(t.p):a;return mO(i.unshift?i.raw?xO(i,[].slice.call(arguments,1),t.p):i.reduce((n,r)=>Object.assign(n,r&&r.call?r(t.p):r),{}):i,hO(t.target),t.g,t.o,t.k)}let L5,Pg,Ug;ch.bind({g:1});let Ss=ch.bind({k:1});function bO(a,t,i,n){Js.p=t,L5=a,Pg=i,Ug=n}function wr(a,t){let i=this||{};return function(){let n=arguments;function r(l,c){let d=Object.assign({},l),f=d.className||r.className;i.p=Object.assign({theme:Pg&&Pg()},d),i.o=/ *go\d+/.test(f),d.className=ch.apply(i,n)+(f?" "+f:"");let h=a;return a[0]&&(h=d.as||a,delete d.as),Ug&&h[0]&&Ug(d),L5(h,d)}return r}}var vO=a=>typeof a=="function",Zf=(a,t)=>vO(a)?a(t):a,yO=(()=>{let a=0;return()=>(++a).toString()})(),B5=(()=>{let a;return()=>{if(a===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");a=!t||t.matches}return a}})(),wO=20,Nm="default",H5=(a,t)=>{let{toastLimit:i}=a.settings;switch(t.type){case 0:return{...a,toasts:[t.toast,...a.toasts].slice(0,i)};case 1:return{...a,toasts:a.toasts.map(c=>c.id===t.toast.id?{...c,...t.toast}:c)};case 2:let{toast:n}=t;return H5(a,{type:a.toasts.find(c=>c.id===n.id)?1:0,toast:n});case 3:let{toastId:r}=t;return{...a,toasts:a.toasts.map(c=>c.id===r||r===void 0?{...c,dismissed:!0,visible:!1}:c)};case 4:return t.toastId===void 0?{...a,toasts:[]}:{...a,toasts:a.toasts.filter(c=>c.id!==t.toastId)};case 5:return{...a,pausedAt:t.time};case 6:let l=t.time-(a.pausedAt||0);return{...a,pausedAt:void 0,toasts:a.toasts.map(c=>({...c,pauseDuration:c.pauseDuration+l}))}}},Cf=[],F5={toasts:[],pausedAt:void 0,settings:{toastLimit:wO}},Fa={},P5=(a,t=Nm)=>{Fa[t]=H5(Fa[t]||F5,a),Cf.forEach(([i,n])=>{i===t&&n(Fa[t])})},U5=a=>Object.keys(Fa).forEach(t=>P5(a,t)),_O=a=>Object.keys(Fa).find(t=>Fa[t].toasts.some(i=>i.id===a)),uh=(a=Nm)=>t=>{P5(t,a)},SO={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},kO=(a={},t=Nm)=>{let[i,n]=N.useState(Fa[t]||F5),r=N.useRef(Fa[t]);N.useEffect(()=>(r.current!==Fa[t]&&n(Fa[t]),Cf.push([t,n]),()=>{let c=Cf.findIndex(([d])=>d===t);c>-1&&Cf.splice(c,1)}),[t]);let l=i.toasts.map(c=>{var d,f,h;return{...a,...a[c.type],...c,removeDelay:c.removeDelay||((d=a[c.type])==null?void 0:d.removeDelay)||a?.removeDelay,duration:c.duration||((f=a[c.type])==null?void 0:f.duration)||a?.duration||SO[c.type],style:{...a.style,...(h=a[c.type])==null?void 0:h.style,...c.style}}});return{...i,toasts:l}},TO=(a,t="blank",i)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:a,pauseDuration:0,...i,id:i?.id||yO()}),_u=a=>(t,i)=>{let n=TO(t,a,i);return uh(n.toasterId||_O(n.id))({type:2,toast:n}),n.id},vi=(a,t)=>_u("blank")(a,t);vi.error=_u("error");vi.success=_u("success");vi.loading=_u("loading");vi.custom=_u("custom");vi.dismiss=(a,t)=>{let i={type:3,toastId:a};t?uh(t)(i):U5(i)};vi.dismissAll=a=>vi.dismiss(void 0,a);vi.remove=(a,t)=>{let i={type:4,toastId:a};t?uh(t)(i):U5(i)};vi.removeAll=a=>vi.remove(void 0,a);vi.promise=(a,t,i)=>{let n=vi.loading(t.loading,{...i,...i?.loading});return typeof a=="function"&&(a=a()),a.then(r=>{let l=t.success?Zf(t.success,r):void 0;return l?vi.success(l,{id:n,...i,...i?.success}):vi.dismiss(n),r}).catch(r=>{let l=t.error?Zf(t.error,r):void 0;l?vi.error(l,{id:n,...i,...i?.error}):vi.dismiss(n)}),a};var EO=1e3,MO=(a,t="default")=>{let{toasts:i,pausedAt:n}=kO(a,t),r=N.useRef(new Map).current,l=N.useCallback((x,b=EO)=>{if(r.has(x))return;let v=setTimeout(()=>{r.delete(x),c({type:4,toastId:x})},b);r.set(x,v)},[]);N.useEffect(()=>{if(n)return;let x=Date.now(),b=i.map(v=>{if(v.duration===1/0)return;let _=(v.duration||0)+v.pauseDuration-(x-v.createdAt);if(_<0){v.visible&&vi.dismiss(v.id);return}return setTimeout(()=>vi.dismiss(v.id,t),_)});return()=>{b.forEach(v=>v&&clearTimeout(v))}},[i,n,t]);let c=N.useCallback(uh(t),[t]),d=N.useCallback(()=>{c({type:5,time:Date.now()})},[c]),f=N.useCallback((x,b)=>{c({type:1,toast:{id:x,height:b}})},[c]),h=N.useCallback(()=>{n&&c({type:6,time:Date.now()})},[n,c]),m=N.useCallback((x,b)=>{let{reverseOrder:v=!1,gutter:_=8,defaultPosition:w}=b||{},S=i.filter(A=>(A.position||w)===(x.position||w)&&A.height),E=S.findIndex(A=>A.id===x.id),M=S.filter((A,O)=>O<E&&A.visible).length;return S.filter(A=>A.visible).slice(...v?[M+1]:[0,M]).reduce((A,O)=>A+(O.height||0)+_,0)},[i]);return N.useEffect(()=>{i.forEach(x=>{if(x.dismissed)l(x.id,x.removeDelay);else{let b=r.get(x.id);b&&(clearTimeout(b),r.delete(x.id))}})},[i,l]),{toasts:i,handlers:{updateHeight:f,startPause:d,endPause:h,calculateOffset:m}}},CO=Ss`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,AO=Ss`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,zO=Ss`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,OO=wr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${CO} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${AO} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${a=>a.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${zO} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,RO=Ss`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,jO=wr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${a=>a.secondary||"#e0e0e0"};
  border-right-color: ${a=>a.primary||"#616161"};
  animation: ${RO} 1s linear infinite;
`,DO=Ss`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,NO=Ss`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,LO=wr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${DO} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${NO} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${a=>a.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,BO=wr("div")`
  position: absolute;
`,HO=wr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,FO=Ss`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,PO=wr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${FO} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,UO=({toast:a})=>{let{icon:t,type:i,iconTheme:n}=a;return t!==void 0?typeof t=="string"?N.createElement(PO,null,t):t:i==="blank"?null:N.createElement(HO,null,N.createElement(jO,{...n}),i!=="loading"&&N.createElement(BO,null,i==="error"?N.createElement(OO,{...n}):N.createElement(LO,{...n})))},YO=a=>`
0% {transform: translate3d(0,${a*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,GO=a=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${a*-150}%,-1px) scale(.6); opacity:0;}
`,qO="0%{opacity:0;} 100%{opacity:1;}",VO="0%{opacity:1;} 100%{opacity:0;}",IO=wr("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,XO=wr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,$O=(a,t)=>{let i=a.includes("top")?1:-1,[n,r]=B5()?[qO,VO]:[YO(i),GO(i)];return{animation:t?`${Ss(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Ss(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},WO=N.memo(({toast:a,position:t,style:i,children:n})=>{let r=a.height?$O(a.position||t||"top-center",a.visible):{opacity:0},l=N.createElement(UO,{toast:a}),c=N.createElement(XO,{...a.ariaProps},Zf(a.message,a));return N.createElement(IO,{className:a.className,style:{...r,...i,...a.style}},typeof n=="function"?n({icon:l,message:c}):N.createElement(N.Fragment,null,l,c))});bO(N.createElement);var QO=({id:a,className:t,style:i,onHeightUpdate:n,children:r})=>{let l=N.useCallback(c=>{if(c){let d=()=>{let f=c.getBoundingClientRect().height;n(a,f)};d(),new MutationObserver(d).observe(c,{subtree:!0,childList:!0,characterData:!0})}},[a,n]);return N.createElement("div",{ref:l,className:t,style:i},r)},ZO=(a,t)=>{let i=a.includes("top"),n=i?{top:0}:{bottom:0},r=a.includes("center")?{justifyContent:"center"}:a.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:B5()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(i?1:-1)}px)`,...n,...r}},KO=ch`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ff=16,JO=({reverseOrder:a,position:t="top-center",toastOptions:i,gutter:n,children:r,toasterId:l,containerStyle:c,containerClassName:d})=>{let{toasts:f,handlers:h}=MO(i,l);return N.createElement("div",{"data-rht-toaster":l||"",style:{position:"fixed",zIndex:9999,top:ff,left:ff,right:ff,bottom:ff,pointerEvents:"none",...c},className:d,onMouseEnter:h.startPause,onMouseLeave:h.endPause},f.map(m=>{let x=m.position||t,b=h.calculateOffset(m,{reverseOrder:a,gutter:n,defaultPosition:t}),v=ZO(x,b);return N.createElement(QO,{id:m.id,key:m.id,onHeightUpdate:h.updateHeight,className:m.visible?KO:"",style:v},m.type==="custom"?Zf(m.message,m):r?r(m):N.createElement(WO,{toast:m,position:x}))}))},eg=vi;class Su{constructor(t=0,i="Network Error"){this.status=t,this.text=i}}const t8=()=>{if(!(typeof localStorage>"u"))return{get:a=>Promise.resolve(localStorage.getItem(a)),set:(a,t)=>Promise.resolve(localStorage.setItem(a,t)),remove:a=>Promise.resolve(localStorage.removeItem(a))}},Ri={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:t8()},Lm=a=>a?typeof a=="string"?{publicKey:a}:a.toString()==="[object Object]"?a:{}:{},e8=(a,t="https://api.emailjs.com")=>{if(!a)return;const i=Lm(a);Ri.publicKey=i.publicKey,Ri.blockHeadless=i.blockHeadless,Ri.storageProvider=i.storageProvider,Ri.blockList=i.blockList,Ri.limitRate=i.limitRate,Ri.origin=i.origin||t},Y5=async(a,t,i={})=>{const n=await fetch(Ri.origin+a,{method:"POST",headers:i,body:t}),r=await n.text(),l=new Su(n.status,r);if(n.ok)return l;throw l},G5=(a,t,i)=>{if(!a||typeof a!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!i||typeof i!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},i8=a=>{if(a&&a.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},q5=a=>a.webdriver||!a.languages||a.languages.length===0,V5=()=>new Su(451,"Unavailable For Headless Browser"),n8=(a,t)=>{if(!Array.isArray(a))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},a8=a=>!a.list?.length||!a.watchVariable,s8=(a,t)=>a instanceof FormData?a.get(t):a[t],I5=(a,t)=>{if(a8(a))return!1;n8(a.list,a.watchVariable);const i=s8(t,a.watchVariable);return typeof i!="string"?!1:a.list.includes(i)},X5=()=>new Su(403,"Forbidden"),r8=(a,t)=>{if(typeof a!="number"||a<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},l8=async(a,t,i)=>{const n=Number(await i.get(a)||0);return t-Date.now()+n},$5=async(a,t,i)=>{if(!t.throttle||!i)return!1;r8(t.throttle,t.id);const n=t.id||a;return await l8(n,t.throttle,i)>0?!0:(await i.set(n,Date.now().toString()),!1)},W5=()=>new Su(429,"Too Many Requests"),o8=async(a,t,i,n)=>{const r=Lm(n),l=r.publicKey||Ri.publicKey,c=r.blockHeadless||Ri.blockHeadless,d=r.storageProvider||Ri.storageProvider,f={...Ri.blockList,...r.blockList},h={...Ri.limitRate,...r.limitRate};return c&&q5(navigator)?Promise.reject(V5()):(G5(l,a,t),i8(i),i&&I5(f,i)?Promise.reject(X5()):await $5(location.pathname,h,d)?Promise.reject(W5()):Y5("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:l,service_id:a,template_id:t,template_params:i}),{"Content-type":"application/json"}))},c8=a=>{if(!a||a.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},u8=a=>typeof a=="string"?document.querySelector(a):a,d8=async(a,t,i,n)=>{const r=Lm(n),l=r.publicKey||Ri.publicKey,c=r.blockHeadless||Ri.blockHeadless,d=Ri.storageProvider||r.storageProvider,f={...Ri.blockList,...r.blockList},h={...Ri.limitRate,...r.limitRate};if(c&&q5(navigator))return Promise.reject(V5());const m=u8(i);G5(l,a,t),c8(m);const x=new FormData(m);return I5(f,x)?Promise.reject(X5()):await $5(location.pathname,h,d)?Promise.reject(W5()):(x.append("lib_version","4.4.1"),x.append("service_id",a),x.append("template_id",t),x.append("user_id",l),Y5("/api/v1.0/email/send-form",x))},f8={init:e8,send:o8,sendForm:d8,EmailJSResponseStatus:Su};Di.registerPlugin(Ct,wu);function Q5(){Di.registerPlugin(Ct,Xn),N.useEffect(()=>{const h=Xn.create({wrapper:"#smooth-wrapper",content:"#smooth-content",smooth:1,effects:!0,smoothTouch:.1});return Ct.refresh(),()=>{h.paused()}},[]);const[a,t]=N.useState(!1);N.useEffect(()=>{const h=document.querySelector(".lens");let m=0,x=0,b=0,v=0;const _=.12,w=M=>{m=M.clientX,x=M.clientY};window.addEventListener("mousemove",w);let S;const E=()=>{b+=(m-b)*_,v+=(x-v)*_,h&&(h.style.transform=`
        translate(${b}px, ${v}px)
        translate(-50%, -50%)
        scale(${a?1.08:0})
      `,h.style.opacity=a?"1":"0"),S=requestAnimationFrame(E)};return E(),()=>{window.removeEventListener("mousemove",w),cancelAnimationFrame(S)}},[a]);const i=N.useRef(null);N.useEffect(()=>{if(!i.current)return;const h=Di.context(()=>{Di.set(".split",{opacity:1}),document.fonts.ready.then(()=>{Di.utils.toArray(".container").forEach(x=>{x.querySelectorAll(".split").forEach(v=>{wu.create(v,{type:"words,lines",mask:"lines",linesClass:"line",autoSplit:!0,onSplit:_=>Di.from(_.lines,{yPercent:120,stagger:.1,scrollTrigger:{trigger:x,scrub:!0,start:"top center",end:"bottom center"}})})})})})},i);return()=>h.revert()},[]);const[n,r]=N.useState({name:"",email:"",message:""}),[l,c]=N.useState(!1),d=h=>{r({...n,[h.target.name]:h.target.value})},f=async h=>{if(h.preventDefault(),!n.name||!n.email||!n.message){eg.error("Please fill all fields");return}try{c(!0),await f8.send("service_x3iacqn","template_qedoa0x",{name:n.name,email:n.email,message:n.message},"f7UNr4cBU3UGpTWUf"),eg.success("Message sent 🚀"),r({name:"",email:"",message:""})}catch{eg.error("Failed to send message")}finally{c(!1)}};return k.jsxs(k.Fragment,{children:[k.jsx(JO,{position:"bottom-center",toastOptions:{style:{background:"#1c1c1c",color:"#fff",border:"1px solid rgba(255,255,255,.1)",borderRadius:"999px"}}}),k.jsx("div",{onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:k.jsx("div",{className:"relative z-10 min-h-full flex flex-col items-center pt-6 text-[#1b1b18] lg:justify-center",children:k.jsxs("main",{className:"grid lg:grid-cols-2 gap-16 font-sans items-center w-full h-full max-w-7xl px-6",children:[k.jsxs("div",{className:"flex flex-col gap-6",children:[k.jsx("p",{className:"text-[16px] text-[#c4aaff]",children:"// Get In Touch"}),k.jsx("h1",{className:"lg:text-[50px] uppercase text-[37px] text-white font-semibold max-w-xl lg:leading-tight",children:"Let’s Connect & Collaborate"}),k.jsx("p",{className:"text-[16px] text-[#b5b5b5] max-w-lg",children:"Have a project in mind? Let’s make it happen! Drop us a message, and we’ll connect with you soon."}),k.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-2",children:[k.jsxs("a",{target:"_blank",href:"https://github.com/theelh",className:"flex lg:mx-auto hover:rotate-x-180 transition-all duration-700 items-center gap-2 hover:bg-white hover:text-[#131313] border-b border-white text-white py-3 px-3 hover:rounded-full",children:["Github",k.jsx(LC,{className:"text-md"})]}),k.jsxs("a",{target:"_blank",href:"https://www.linkedin.com/in/marwane-elhosni/",className:"flex lg:mx-auto hover:rotate-x-180 transition-all duration-700 items-center gap-2 hover:bg-white hover:text-[#131313] border-b border-white text-white py-3 px-3 hover:rounded-full",children:["LinkedIn",k.jsx(YC,{className:"text-md"})]}),k.jsxs("a",{target:"_blank",href:"https://www.instagram.com/codeaurum77/",className:"flex lg:mx-auto hover:rotate-x-180 transition-all duration-700 items-center gap-2 hover:bg-white hover:text-[#131313] border-b border-white text-white py-3 px-3 hover:rounded-full",children:["Instagram",k.jsx(PC,{className:"text-md"})]})]})]}),k.jsx("div",{children:k.jsxs("form",{onSubmit:f,className:"lg:w-105 w-80 p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 flex flex-col gap-6",children:[k.jsx("input",{name:"name",placeholder:"Name",value:n.name,onChange:d,className:"input"}),k.jsx("input",{name:"email",placeholder:"Email",value:n.email,onChange:d,className:"input"}),k.jsx("textarea",{name:"message",placeholder:"Message",rows:4,value:n.message,onChange:d,className:"input"}),k.jsx("button",{disabled:l,className:"py-3 rounded-full bg-white text-black font-medium",children:l?"Sending...":"Send Message"})]})})]})})})]})}const hf=["Initializing system...","Loading interface...","Connecting modules...","Loading developer profile...","Preparing projects...","Initializing experience...","System ready."];function h8(){const[a,t]=N.useState(0),[i,n]=N.useState(hf[0]),[r,l]=N.useState(!1);return N.useEffect(()=>{const c=setInterval(()=>{t(d=>{const f=d+Math.floor(Math.random()*4)+1;if(f>=100)return clearInterval(c),t(100),n("System ready."),setTimeout(()=>{l(!0)},700),100;const h=Math.floor(f/100*hf.length);return n(hf[Math.min(h,hf.length-1)]),f})},50);return()=>clearInterval(c)},[]),r?null:k.jsxs("div",{className:`fixed inset-0 z-9999 bg-[#050505] text-white
      flex items-center justify-center
      transition-all duration-700
      ${a===100?"opacity-0 scale-105":"opacity-100"}`,children:[k.jsx("div",{className:"absolute inset-0 opacity-[0.08] tech-grid"}),k.jsx("div",{className:`absolute w-[500px] h-[500px] rounded-full\r
        bg-[#c4aaff]/10 blur-[120px]`}),k.jsxs("div",{className:"relative w-[90%] max-w-xl",children:[k.jsxs("div",{className:"flex justify-between items-center mb-6",children:[k.jsx("div",{className:"font-mono text-xs text-[#c4aaff]",children:"MARWANE.DEV"}),k.jsx("div",{className:"font-mono text-xs text-gray-500",children:"SYS_BOOT"})]}),k.jsxs("div",{className:"relative flex justify-center items-center h-64",children:[k.jsx("div",{className:`absolute w-52 h-52 rounded-full\r
            border border-[#c4aaff]/20\r
            border-t-[#c4aaff]\r
            animate-spin`}),k.jsx("div",{className:`absolute w-40 h-40 rounded-full\r
            border border-[#c4aaff]/20\r
            border-b-[#c4aaff]\r
            animate-[spin_4s_linear_infinite_reverse]`}),k.jsx("div",{className:`relative w-24 h-24 rounded-full\r
            border border-[#c4aaff]/60\r
            bg-[#c4aaff]/5\r
            flex items-center justify-center\r
            shadow-[0_0_50px_rgba(122,242,152,0.25)]`,children:k.jsx("div",{className:`w-10 h-10 rounded-full\r
              bg-[#c4aaff]\r
              shadow-[0_0_40px_#c4aaff]\r
              animate-pulse`})}),k.jsx("span",{className:`absolute w-2 h-2 bg-[#c4aaff] rounded-full\r
            top-6 left-1/2 shadow-[0_0_15px_#c4aaff]`}),k.jsx("span",{className:`absolute w-1.5 h-1.5 bg-[#c4aaff] rounded-full\r
            bottom-12 right-24 shadow-[0_0_15px_#c4aaff]`}),k.jsx("span",{className:`absolute w-1.5 h-1.5 bg-[#c4aaff] rounded-full\r
            top-16 left-24 shadow-[0_0_15px_#c4aaff]`})]}),k.jsxs("div",{className:"font-mono text-sm mb-3 flex justify-between",children:[k.jsx("span",{className:"text-gray-400",children:i}),k.jsxs("span",{className:"text-[#c4aaff]",children:[a,"%"]})]}),k.jsx("div",{className:"h-[3px] bg-white/10 overflow-hidden",children:k.jsx("div",{className:`h-full bg-[#c4aaff]\r
            shadow-[0_0_15px_#c4aaff]\r
            transition-all duration-100`,style:{width:`${a}%`}})}),k.jsxs("div",{className:"mt-5 font-mono text-[10px] text-gray-600 space-y-1",children:[k.jsxs("p",{children:[k.jsx("span",{className:"text-[#c4aaff]",children:"[OK]"})," ","kernel initialized"]}),k.jsxs("p",{children:[k.jsx("span",{className:"text-[#c4aaff]",children:"[OK]"})," ","frontend modules loaded"]}),k.jsxs("p",{children:[k.jsx("span",{className:"text-[#c4aaff]",children:"[OK]"})," ","portfolio data synchronized"]}),k.jsxs("p",{children:[k.jsx("span",{className:"text-[#c4aaff]",children:"[--]"})," ",i.toLowerCase()]})]})]})]})}const p8=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lumira - Advanced Analytics</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <!-- GSAP for Masked Reveal -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>

<body class="relative min-h-screen overflow-x-hidden flex flex-col font-sans text-[#F2F4FB] bg-[#070914] selection:bg-[#7FC4FF]/30 selection:text-[#7FC4FF]">

    <!-- WebGL Constellation Canvas Shell & Depth Overlay -->
    <div class="fixed inset-0 -z-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,_#0E1222_0%,_#070914_100%)]"></div>
    <div class="fixed inset-0 -z-10 pointer-events-none">
        <canvas id="constellationCanvas" class="w-full h-full"></canvas>
    </div>
    <div class="fixed inset-0 -z-10 pointer-events-none bg-gradient-to-b from-transparent via-[#0E1222]/40 to-[#070914] opacity-80"></div>

    <!-- Header (Elevated Glassy UI) -->
    <nav class="w-full relative z-20 bg-[#0E1222]/40 backdrop-blur-md border-b border-[#1C2236] shadow-[0_2px_8px_rgba(0,0,0,0.30)]">
        <div class="flex justify-between items-center py-5 px-6 md:px-12 max-w-[90rem] mx-auto">
            
            <!-- Brand -->
            <div class="flex items-center gap-2 text-[#F2F4FB]">
                <div class="relative h-8 w-8 bg-transparent border border-[#1C2236] flex items-center justify-center rounded-md" style="box-shadow: 0 2px 8px rgba(0,0,0,0.30);">
                    <span class="h-2 w-2 rounded-full bg-[#E6C879]" style="box-shadow: 0 0 12px rgba(230,200,121,0.6);"></span>
                </div>
                <span class="text-xl font-thin tracking-tight uppercase ml-1">Lumira</span>
            </div>

            <div class="hidden md:flex items-center gap-10 text-xs font-normal uppercase text-[#9AA3BC] tracking-widest">
                <a href="#" class="hover:text-[#F2F4FB] transition-colors hover:shadow-[0_0_8px_rgba(127,196,255,0.4)]">Features</a>
                <a href="#" class="hover:text-[#F2F4FB] transition-colors hover:shadow-[0_0_8px_rgba(127,196,255,0.4)]">Use Cases</a>
                <a href="#" class="hover:text-[#F2F4FB] transition-colors hover:shadow-[0_0_8px_rgba(127,196,255,0.4)]">Developers</a>
                <a href="#" class="hover:text-[#F2F4FB] transition-colors hover:shadow-[0_0_8px_rgba(127,196,255,0.4)]">Pricing</a>
            </div>

            <!-- Gradient Border Shell CTA -->
            <div class="p-[1px] rounded-full bg-gradient-to-br from-[#E6C879]/30 to-transparent">
                <a href="#" class="block bg-[#0E1222]/80 backdrop-blur-sm text-[#E6C879] px-6 py-2.5 rounded-full text-xs font-normal uppercase tracking-widest hover:bg-[#E6C879] hover:text-[#0E1222] transition-colors">
                    Get Access
                </a>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="flex-grow flex flex-col items-center justify-center relative z-10 px-6 pt-24 pb-28 md:pt-32 lg:pt-40">

        <div class="max-w-5xl mx-auto w-full flex flex-col items-center text-center">

            <!-- Trust Indicators -->
            <div class="flex items-center gap-4 mb-12 fade-in-up" style="opacity: 0; transform: translateY(24px); transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);">
                <div class="flex -space-x-3">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_1600w.jpg" alt="User 1" class="w-12 h-12 rounded-full border border-[#1C2236] object-cover relative z-30 opacity-80 mix-blend-luminosity">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f5668c5-fc4a-44e0-bc5e-a664189d3c31_1600w.jpg" alt="User 2" class="w-12 h-12 rounded-full border border-[#1C2236] object-cover relative z-20 opacity-80 mix-blend-luminosity">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eca707cc-a5b7-439a-b4fd-247f6106c2e1_1600w.jpg" alt="User 3" class="w-12 h-12 rounded-full border border-[#1C2236] object-cover relative z-10 opacity-80 mix-blend-luminosity">
                </div>

                <div class="flex flex-col items-start gap-1">
                    <div class="flex items-center text-[#E6C879] text-lg">
                        <iconify-icon icon="solar:star-linear" stroke-width="1.5"></iconify-icon>
                        <iconify-icon icon="solar:star-linear" stroke-width="1.5"></iconify-icon>
                        <iconify-icon icon="solar:star-linear" stroke-width="1.5"></iconify-icon>
                        <iconify-icon icon="solar:star-linear" stroke-width="1.5"></iconify-icon>
                        <iconify-icon icon="solar:star-linear" stroke-width="1.5"></iconify-icon>
                    </div>
                    <span class="text-xs font-normal uppercase text-[#9AA3BC] tracking-widest">Trusted by 10,000+ data teams</span>
                </div>
            </div>

            <!-- Headline (Ultralight System Display - GSAP Masked Reveal) -->
            <h1 class="masked-reveal text-5xl md:text-7xl lg:text-8xl font-thin tracking-tight text-[#F2F4FB] text-center leading-tight max-w-5xl cursor-default">
                Uncover hidden patterns<br />with intelligent analytics
            </h1>

            <!-- Subheadline (GSAP Masked Reveal) -->
            <p class="masked-reveal mt-8 text-lg md:text-xl text-[#9AA3BC] max-w-2xl font-normal leading-relaxed">
                Lumira synthesizes complex datasets, disparate sources, and endless metrics into actionable, automated insights that guide your decisions.
            </p>

            <!-- Chunky CTAs to Refined Border Shells -->
            <div class="flex flex-col sm:flex-row items-center gap-6 mt-14 w-full justify-center fade-in-up" style="opacity: 0; transform: translateY(24px); transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.5s;">
                
                <div class="p-[1px] rounded-full bg-gradient-to-br from-[#E6C879]/40 to-transparent w-full sm:w-auto" style="box-shadow: 0 16px 40px rgba(0,0,0,0.36);">
                    <a href="#" class="w-full sm:w-auto bg-[#E6C879] text-[#0E1222] px-12 py-4 rounded-full font-medium text-xs uppercase tracking-widest hover:bg-[#E6C879]/90 transition-colors flex items-center justify-center">
                        Get Access
                    </a>
                </div>

                <div class="p-[1px] rounded-full bg-gradient-to-br from-[#E6C879]/16 to-transparent w-full sm:w-auto" style="box-shadow: 0 2px 8px rgba(0,0,0,0.30);">
                    <a href="#" class="w-full sm:w-auto bg-[#0E1222]/60 backdrop-blur-md text-[#F2F4FB] px-10 py-4 rounded-full font-medium text-xs uppercase tracking-widest hover:bg-[#1C2236]/80 transition-colors flex items-center justify-center gap-2 group">
                        Explore Demo
                        <iconify-icon icon="solar:arrow-right-linear" class="text-xl text-[#7FC4FF] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" stroke-width="1.5"></iconify-icon>
                    </a>
                </div>

            </div>
        </div>

        <!-- Logos Section -->
        <div class="w-full mt-28 md:mt-32 max-w-6xl mx-auto flex flex-col items-center fade-in-up" style="opacity: 0; transform: translateY(24px); transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.6s;">
            <p class="text-xs font-normal text-[#5C668A] mb-12 tracking-widest uppercase">Powering data-driven enterprises</p>

            <div class="flex flex-wrap justify-center items-center gap-10 md:gap-16">

                <div class="flex items-center gap-2 text-xl font-thin text-[#9AA3BC] hover:text-[#7FC4FF] hover:shadow-[0_0_12px_rgba(127,196,255,0.2)] transition-all cursor-default">
                    <iconify-icon icon="solar:box-linear" stroke-width="1.5"></iconify-icon>
                    Quantus
                </div>

                <div class="flex items-center gap-2 text-lg font-thin text-[#9AA3BC] hover:text-[#7FC4FF] hover:shadow-[0_0_12px_rgba(127,196,255,0.2)] transition-all cursor-default">
                    <iconify-icon icon="solar:globus-linear" class="text-xl" stroke-width="1.5"></iconify-icon>
                    NexusData
                </div>

                <div class="flex items-center gap-2 text-xl font-thin text-[#9AA3BC] hover:text-[#7FC4FF] hover:shadow-[0_0_12px_rgba(127,196,255,0.2)] transition-all cursor-default">
                    OmniStream
                </div>

                <div class="flex items-center gap-2 text-lg font-thin text-[#9AA3BC] hover:text-[#7FC4FF] hover:shadow-[0_0_12px_rgba(127,196,255,0.2)] transition-all cursor-default">
                    <iconify-icon icon="solar:routing-2-linear" class="text-xl" stroke-width="1.5"></iconify-icon>
                    Veridian
                </div>

                <div class="flex items-center gap-2 text-lg font-thin text-[#9AA3BC] hover:text-[#7FC4FF] hover:shadow-[0_0_12px_rgba(127,196,255,0.2)] transition-all cursor-default">
                    <iconify-icon icon="solar:letter-linear" class="text-xl" stroke-width="1.5"></iconify-icon>
                    ApexMetrics
                </div>

                <div class="hidden lg:flex items-center gap-2 text-xl font-thin text-[#9AA3BC] hover:text-[#7FC4FF] hover:shadow-[0_0_12px_rgba(127,196,255,0.2)] transition-all cursor-default">
                    Zenith
                </div>

            </div>
        </div>

    </main>

    <script>
        // WebGL Drifting Nodes & Network Logic
        const canvas = document.getElementById('constellationCanvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let nodes = [];
        const LINK = 160; 
        const MAX_NODES = window.innerWidth < 768 ? 40 : 85;
        let pointer = { x: -1000, y: -1000 };

        function resize() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.max(1, Math.floor(width * dpr));
            canvas.height = Math.max(1, Math.floor(height * dpr));
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.imageSmoothingEnabled = false;
        }
        
        window.addEventListener('resize', () => {
            resize();
            initNodes();
        });
        resize();

        function initNodes() {
            nodes = [];
            for(let i=0; i<MAX_NODES; i++) {
                nodes.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    radius: Math.random() * 2.4 + 1.8
                });
            }
        }
        initNodes();

        // Pointer gravity tracker
        document.addEventListener('mousemove', e => {
            pointer.x = e.clientX;
            pointer.y = e.clientY;
        });

        // Clear pointer on leave
        document.addEventListener('mouseleave', () => {
            pointer.x = -1000;
            pointer.y = -1000;
        });

        function dist(a, b) {
            return Math.hypot(a.x - b.x, a.y - b.y);
        }

        // Render Loop
        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);
            ctx.lineCap = 'butt';
            ctx.lineJoin = 'miter';
            
            // Draw Links first so nodes sit crisp on top
            ctx.strokeStyle = '#E6C879';
            ctx.lineWidth = 1;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const d = dist(nodes[i], nodes[j]);
                    if (d < LINK) {
                        ctx.globalAlpha = 0.22 + (1 - d/LINK) * 0.55;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }
            }

            nodes.forEach(node => {
                node.x += node.vx;
                node.y += node.vy;
                
                // Bounce off edges
                if(node.x < 0 || node.x > width) node.vx *= -1;
                if(node.y < 0 || node.y > height) node.vy *= -1;

                // Gentle Pointer gravity
                const pd = dist(node, pointer);
                if(pd < 220) {
                    node.x -= (node.x - pointer.x) * 0.005;
                    node.y -= (node.y - pointer.y) * 0.005;
                }
                
                // Draw Node (Pale Gold) — core + soft halo so particles read at retina scale
                const pulse = 0.78 + Math.sin(Date.now() * 0.001 + node.x) * 0.22;
                ctx.fillStyle = '#E6C879';
                ctx.globalAlpha = pulse * 0.28;
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius * 2.4, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = pulse;
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            ctx.globalAlpha = 1;
            requestAnimationFrame(animateCanvas);
        }
        
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!prefersReducedMotion) {
            animateCanvas();
        }

        // --- Intersection Observer for structural fade-ins ---
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
        });

        // --- GSAP Masked Staggered Word Reveal ---
        document.addEventListener('DOMContentLoaded', () => {
            if (typeof gsap !== 'undefined' && !prefersReducedMotion) {
                gsap.registerPlugin(ScrollTrigger);
                
                const revealElements = document.querySelectorAll('.masked-reveal');
                
                revealElements.forEach(el => {
                    // Non-destructive split that respects <br> tags
                    const html = el.innerHTML;
                    const fragments = html.split(/(<br\\s*\\/?>|\\s+)/);
                    el.innerHTML = '';
                    
                    fragments.forEach(frag => {
                        if (/<br/i.test(frag)) {
                            el.appendChild(document.createElement('br'));
                        } else if (frag.trim() !== '') {
                            const wrapper = document.createElement('span');
                            wrapper.style.cssText = 'overflow: hidden; display: inline-block; vertical-align: bottom; padding-top: 0.1em; margin-top: -0.1em;';
                            
                            const inner = document.createElement('span');
                            inner.className = 'reveal-word';
                            inner.style.cssText = 'display: inline-block; transform: translateY(110%); will-change: transform;';
                            inner.innerHTML = frag;
                            
                            wrapper.appendChild(inner);
                            el.appendChild(wrapper);
                        } else {
                            // Preserve spaces
                            el.appendChild(document.createTextNode(frag));
                        }
                    });

                    // Trigger the animation
                    gsap.to(el.querySelectorAll('.reveal-word'), {
                        y: '0%',
                        duration: 1.2,
                        ease: 'power4.out',
                        stagger: 0.04,
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 90%',
                        }
                    });
                });
            }
        });
    <\/script>
</body>
</html>`,g8=`<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zenith Compute Network</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Playfair+Display:wght@400&display=swap" rel="stylesheet">
</head>
<body class="bg-[#030509] min-h-screen flex items-center justify-center p-4 md:p-12 font-sans antialiased text-[#FFFFFF] overflow-x-hidden selection:bg-[#60A5FA] selection:text-[#030509]">

    <!-- Gradient Border Shell Technique -->
    <div class="w-full max-w-[1440px] shadow-[0px_100px_80px_rgba(0,0,0,0.12),_0px_41.8px_33.4px_rgba(0,0,0,0.086),_0px_22.3px_17.9px_rgba(0,0,0,0.07)]" style="display:inline-block; padding:1px; border-radius:24px; background:linear-gradient(to right bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.03), rgba(0, 0, 0, 0));">
        
        <!-- Main Inner Surface -->
        <div class="relative w-full flex flex-col md:flex-row overflow-hidden min-h-[600px] md:min-h-[650px]" style="background:#030509; border-radius:23px; box-shadow:rgba(255, 255, 255, 0.02) 0px 0px 40px 0px inset;">
            
            <!-- Canvas Particle System Background Field -->
            <canvas id="particle-canvas" class="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-100"></canvas>

            <!-- Matte Noise Texture Overlay -->
            <div class="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none z-10" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');"></div>

            <!-- Left Column: Copy & Controls -->
            <div class="w-full md:w-[38%] px-8 lg:px-16 py-10 md:py-14 flex flex-col justify-between relative z-20 shrink-0 border-r border-white/5">
                
                <!-- Lineart Detail: Corner Brackets -->
                <div class="absolute top-6 left-6 w-3 h-3 border-t border-l border-white/20"></div>
                <div class="absolute top-6 right-6 w-3 h-3 border-t border-r border-white/20"></div>
                <div class="absolute bottom-6 left-6 w-3 h-3 border-b border-l border-white/20"></div>
                <div class="absolute bottom-6 right-6 w-3 h-3 border-b border-r border-white/20"></div>

                <!-- Top Badge -->
                <div class="fade-in-el opacity-0 inline-flex items-center gap-2 px-3 py-1 text-xs font-light tracking-widest uppercase mb-16 border border-white/10 text-[#60A5FA] rounded-full w-max bg-white/5 backdrop-blur-sm">
                    <iconify-icon icon="solar:server-square-linear" stroke-width="1.5" class="text-sm"></iconify-icon>
                    ZENITH COMPUTE
                </div>

                <!-- Heading (Playfair Display) -->
                <div>
                    <h1 id="hero-heading" class="text-5xl md:text-7xl tracking-tight text-[#FFFFFF] mb-6 leading-none opacity-0 font-light" style="font-family: 'Playfair Display', serif;">
                        Infinite execution threads.<br>The cognitive backbone.
                    </h1>

                    <!-- Body Text -->
                    <p class="fade-in-el opacity-0 text-[#9CA3AF] text-lg leading-relaxed max-w-[320px] font-light mb-8" style="font-family: 'Inter', sans-serif;">
                        An autonomous state-management protocol synchronizing distributed workloads across edge micro-clusters and centralized servers. Adjust the target environment to refine processing speed.
                    </p>
                    
                    <!-- Primary Action Button -->
                    <button class="fade-in-el opacity-0 bg-[#60A5FA] text-[#030509] px-8 py-3.5 rounded-full text-sm font-light w-max hover:bg-blue-300 transition-colors flex items-center gap-2" style="font-family: 'Inter', sans-serif;">
                        Provision Network
                        <iconify-icon icon="solar:cpu-linear" stroke-width="1.5" class="text-lg"></iconify-icon>
                    </button>
                </div>

                <!-- Custom Slider Control -->
                <div class="fade-in-el opacity-0 mt-16 pt-8 w-full relative">
                    <!-- Track Line -->
                    <div class="w-full h-[1px] bg-white/10 relative">
                        <!-- Thumb / Active Indicator -->
                        <div class="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#60A5FA] rounded-full shadow-[0_0_12px_rgba(96,165,250,0.6)]"></div>
                    </div>
                    
                    <!-- Labels -->
                    <div class="flex justify-between mt-4 w-full" style="font-family: 'Inter', sans-serif;">
                        <span class="text-xs font-light tracking-widest uppercase text-white/30 transition-colors hover:text-[#60A5FA] cursor-pointer">Local</span>
                        <span class="text-xs font-light tracking-widest uppercase text-white/30 transition-colors hover:text-[#60A5FA] cursor-pointer">Edge</span>
                        <span class="text-xs font-light tracking-widest uppercase text-[#60A5FA] cursor-default">Ring</span>
                        <span class="text-xs font-light tracking-widest uppercase text-white/30 transition-colors hover:text-[#60A5FA] cursor-pointer">Core</span>
                        <span class="text-xs font-light tracking-widest uppercase text-white/30 transition-colors hover:text-[#60A5FA] cursor-pointer">Cloud</span>
                    </div>
                </div>

            </div>

            <!-- Right Column: Media Frame -->
            <div class="w-full md:w-[62%] relative bg-transparent overflow-hidden min-h-[400px] md:min-h-0 border-t md:border-t-0 border-white/5 pointer-events-none" style="transform-style: preserve-3d;">
                
                <!-- Deep Integration Gradients -->
                <div class="absolute inset-0 z-30 pointer-events-none bg-gradient-to-r from-[#030509] via-transparent to-transparent opacity-90"></div>
                <div class="absolute inset-0 z-30 pointer-events-none bg-gradient-to-t from-[#030509] via-[#030509]/30 to-transparent opacity-80"></div>
                
                <!-- Glassmorphism Floating Logic Card -->
                <div id="floating-card" class="absolute top-[25%] right-[12%] z-40 bg-white/[0.03] backdrop-blur-xl border border-[#60A5FA]/20 p-5 rounded-2xl shadow-[0_22px_40px_rgba(0,0,0,0.4)] w-[220px] text-[#60A5FA] pointer-events-auto">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-8 h-8 rounded-full bg-[#60A5FA]/10 border border-[#60A5FA]/20 text-[#60A5FA] flex items-center justify-center">
                            <iconify-icon icon="solar:transfer-horizontal-linear" stroke-width="1.5"></iconify-icon>
                        </div>
                        <span class="text-xs uppercase tracking-widest font-light" style="font-family: 'Inter', sans-serif;">Throughput</span>
                    </div>
                    <div class="text-3xl leading-9 tracking-tighter mb-1" style="font-family: 'Inter', sans-serif;">128.6 PB/s</div>
                    <div class="text-xs uppercase tracking-widest text-[#60A5FA]/60" style="font-family: 'Inter', sans-serif;">Sync Efficiency</div>
                </div>

            </div>
        </div>
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);

            // --- ASCII Particle System Implementation ---
            const canvas = document.getElementById('particle-canvas');
            const ctx = canvas.getContext('2d');

            let width, height;
            let nodes = [];
            let beams = [];
            const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*()'.split('');
            let mouse = { x: -1000, y: -1000 };

            function resize() {
                width = canvas.clientWidth;
                height = canvas.clientHeight;
                const dpr = window.devicePixelRatio || 1;
                canvas.width = width * dpr;
                canvas.height = height * dpr;
                ctx.scale(dpr, dpr);
            }

            window.addEventListener('resize', () => {
                resize();
                initParticles();
            });

            window.addEventListener('mousemove', e => {
                const rect = canvas.getBoundingClientRect();
                mouse.x = e.clientX - rect.left;
                mouse.y = e.clientY - rect.top;
            });

            function initParticles() {
                nodes = Array.from({ length: 90 }).map(() => ({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vy: (Math.random() * 0.4) + 0.1,
                    char: chars[Math.floor(Math.random() * chars.length)]
                }));

                beams = Array.from({ length: 25 }).map(() => ({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    length: Math.random() * 100 + 50,
                    speed: (Math.random() * 6) + 3,
                    opacity: Math.random() * 0.5 + 0.3
                }));
            }

            resize();
            initParticles();

            function draw() {
                ctx.clearRect(0, 0, width, height);

                // 1. Upward Beams (Fast)
                beams.forEach(b => {
                    b.y -= b.speed;
                    if (b.y + b.length < 0) {
                        b.y = height + 100;
                        b.x = Math.random() * width;
                    }
                    let g = ctx.createLinearGradient(b.x, b.y, b.x, b.y + b.length);
                    g.addColorStop(0, \`rgba(96, 165, 250, \${b.opacity})\`);
                    g.addColorStop(1, 'transparent');
                    ctx.strokeStyle = g;
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.moveTo(b.x, b.y);
                    ctx.lineTo(b.x, b.y + b.length);
                    ctx.stroke();
                });

                // 2. Interactive Nodes (ASCII)
                ctx.font = '12px monospace';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                
                // Proximity Lines
                ctx.lineWidth = 0.5;
                for(let i = 0; i < nodes.length; i++) {
                    let n1 = nodes[i];
                    for(let j = i + 1; j < nodes.length; j++) {
                        let n2 = nodes[j];
                        let d = Math.hypot(n1.x - n2.x, n1.y - n2.y);
                        if(d < 120) {
                            ctx.strokeStyle = \`rgba(156, 163, 175, \${0.15 * (1 - d/120)})\`;
                            ctx.beginPath();
                            ctx.moveTo(n1.x, n1.y);
                            ctx.lineTo(n2.x, n2.y);
                            ctx.stroke();
                        }
                    }
                }

                nodes.forEach(n => {
                    n.y += n.vy; // Slow drift
                    if(n.y > height + 20) {
                        n.y = -20;
                        n.x = Math.random() * width;
                    }

                    let dist = Math.hypot(mouse.x - n.x, mouse.y - n.y);

                    // Dynamic Character Swap
                    if (dist < 180 || Math.random() > 0.98) n.char = chars[Math.floor(Math.random() * chars.length)];

                    // Mouse Connection
                    if (dist < 180) {
                        ctx.strokeStyle = \`rgba(96, 165, 250, \${0.5 * (1 - dist/180)})\`;
                        ctx.beginPath(); 
                        ctx.moveTo(n.x, n.y); 
                        ctx.lineTo(mouse.x, mouse.y); 
                        ctx.stroke();
                    }

                    ctx.fillStyle = dist < 180 ? '#60A5FA' : 'rgba(156, 163, 175, 0.4)';
                    ctx.fillText(n.char, n.x, n.y);
                });

                requestAnimationFrame(draw);
            }
            draw();

            // --- GSAP Timeline Reveals ---
            const heading = document.getElementById('hero-heading');
            
            // Staggered vertical masked word setup
            const words = heading.innerHTML.trim().split(/(<br\\s*\\/?>|\\s+)/).filter(w => w.trim().length > 0 || w.toLowerCase().includes('<br'));
            let newHTML = '';
            words.forEach(word => {
                if(word.toLowerCase().includes('<br')) {
                    newHTML += '<br/>';
                } else if (word.trim() !== '') {
                    newHTML += \`<span class="inline-block overflow-hidden align-bottom pb-1 -mb-1"><span class="reveal-word inline-block translate-y-full opacity-0">\${word}</span></span> \`;
                }
            });
            heading.innerHTML = newHTML;
            heading.style.opacity = 1;

            const tl = gsap.timeline({ 
                scrollTrigger: {
                    trigger: heading,
                    start: "top 85%"
                },
                delay: 0.1 
            });

            tl.to('.reveal-word', {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.04,
                ease: "power4.out"
            }, 0);

            tl.to('.fade-in-el', {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out"
            }, 0.6);

            // Canvas Timeline Integration
            tl.to(canvas, { opacity: 1, duration: 2, ease: "power2.inOut" }, 0.2);

            // Floating Logic independent 3D shifts
            gsap.to('#floating-card', {
                y: "-=12",
                rotationX: 4,
                rotationY: -4,
                duration: 4,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut"
            });
        });
    <\/script>
</body>
</html>`,m8=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Omnichannel Data Intelligence</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400&display=swap" rel="stylesheet">
</head>
<body class="font-sans antialiased text-white m-0 p-0 h-screen w-full flex flex-col overflow-hidden selection:bg-blue-500/30 bg-black relative" style="font-family: 'Inter', sans-serif;">

    <!-- Background Image Stage -->
    <div class="absolute inset-0 z-0 bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_3840w.jpg')] bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen"></div>
    
    <!-- Directional Tonal Washes for Readability -->
    <div class="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
    <div class="absolute inset-0 z-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>

    <!-- Visible Structural Grid Scaffold -->
    <div class="absolute inset-0 z-10 pointer-events-none flex justify-center w-full">
        <div class="w-full max-w-7xl h-full grid grid-cols-1 md:grid-cols-4 border-x border-white/5 divide-y-0 md:divide-x divide-white/5 relative">
            <!-- Structural Line Markers -->
            <div class="hidden md:block absolute top-[20%] -left-1 w-2 h-[1px] bg-white/30"></div>
            <div class="hidden md:block absolute top-[20%] -right-1 w-2 h-[1px] bg-white/30"></div>
            <div class="hidden md:block absolute bottom-[35%] -left-1 w-2 h-[1px] bg-white/30"></div>
            <div class="hidden md:block absolute bottom-[35%] -right-1 w-2 h-[1px] bg-white/30"></div>
            <!-- Grid columns -->
            <div class="relative"><div class="absolute top-0 right-0 w-[1px] h-4 bg-white/20"></div></div>
            <div class="hidden md:block relative"><div class="absolute top-0 right-0 w-[1px] h-4 bg-white/20"></div></div>
            <div class="hidden md:block relative"><div class="absolute top-0 right-0 w-[1px] h-4 bg-white/20"></div></div>
            <div class="hidden md:block"></div>
        </div>
    </div>

    <!-- Controls Box (Top Right Anchored) -->
    <div class="absolute top-6 right-6 md:top-8 md:right-8 z-40 flex gap-3">
        <!-- Gradient Border Treatment Applied via wrapper -->
        <div class="w-10 h-10 rounded p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent">
            <button id="pauseBtn" class="w-full h-full rounded bg-black/40 backdrop-blur-md flex items-center justify-center text-[#6a9ded] hover:bg-white/10 transition-all cursor-pointer outline-none focus:ring-1 focus:ring-[#6a9ded]/50 group" aria-label="Pause Animation">
                <iconify-icon icon="solar:pause-linear" width="18" height="18" stroke-width="1.5" class="group-hover:scale-110 transition-transform"></iconify-icon>
            </button>
        </div>
        <div class="w-10 h-10 rounded p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent">
            <button class="w-full h-full rounded bg-black/40 backdrop-blur-md flex items-center justify-center text-[#6a9ded] hover:bg-white/10 transition-all cursor-pointer outline-none focus:ring-1 focus:ring-[#6a9ded]/50 group" aria-label="Settings">
                <iconify-icon icon="solar:settings-linear" width="18" height="18" stroke-width="1.5" class="group-hover:rotate-90 transition-transform duration-500"></iconify-icon>
            </button>
        </div>
    </div>

    <!-- Additive Canvas Overlay -->
    <canvas id="particle-canvas" class="absolute inset-0 w-full h-full z-20 pointer-events-none"></canvas>

    <!-- Anchored Content Overlay low in viewport -->
    <main class="relative z-30 flex-grow w-full flex flex-col justify-end pb-12 md:pb-24">
        <div class="w-full max-w-7xl mx-auto px-6 md:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 items-end">
                
                <!-- Primary Headline Block -->
                <header class="md:col-span-2 flex flex-col gap-6">
                    <h1 class="text-4xl md:text-5xl font-extralight tracking-tight leading-tight text-white drop-shadow-lg">
                        <span class="inline-block overflow-hidden align-bottom"><span class="inline-block gsap-word translate-y-full">Omnichannel</span></span> <br>
                        <span class="text-white/60">
                            <span class="inline-block overflow-hidden align-bottom"><span class="inline-block gsap-word translate-y-full">Data</span></span>
                            <span class="inline-block overflow-hidden align-bottom"><span class="inline-block gsap-word translate-y-full">Intelligence</span></span>
                        </span>
                    </h1>
                    <p id="split-text-target" class="text-sm md:text-base font-extralight text-white/50 max-w-sm leading-relaxed tracking-wide">
                        Empowering next-generation analytics platforms with real-time distributed insights and secure, scalable hybrid-cloud processing architectures.
                    </p>
                </header>

                <!-- Secondary Framed Grid Lane (Stats) with Premium Gradient Border -->
                <div class="md:col-span-2 relative p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent backdrop-blur-sm">
                    <!-- Corner structural crosses -->
                    <div class="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 border-t border-l border-white/40 z-10"></div>
                    <div class="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 border-t border-r border-white/40 z-10"></div>
                    <div class="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 border-b border-l border-white/40 z-10"></div>
                    <div class="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 border-b border-r border-white/40 z-10"></div>

                    <!-- Grid Layout for Stats inside Gradient Wrapper -->
                    <div class="grid grid-cols-2 gap-px bg-white/5 w-full h-full relative z-0">
                        <!-- Stat 1 -->
                        <div class="bg-black/60 p-6 flex flex-col gap-2 hover:bg-black/40 transition-colors">
                            <span class="text-3xl font-extralight tracking-tight text-[#6a9ded] overflow-hidden"><span class="inline-block gsap-word translate-y-full">120+</span></span>
                            <span class="text-xs font-light uppercase tracking-widest text-white/40 leading-tight">Edge<br>Nodes</span>
                        </div>

                        <!-- Stat 2 -->
                        <div class="bg-black/60 p-6 flex flex-col gap-2 hover:bg-black/40 transition-colors">
                            <span class="text-3xl font-extralight tracking-tight text-[#6a9ded] overflow-hidden"><span class="inline-block gsap-word translate-y-full">5.2P</span></span>
                            <span class="text-xs font-light uppercase tracking-widest text-white/40 leading-tight">Data<br>Indexed</span>
                        </div>

                        <!-- Stat 3 -->
                        <div class="bg-black/60 p-6 flex flex-col gap-2 hover:bg-black/40 transition-colors">
                            <span class="text-3xl font-extralight tracking-tight text-[#6a9ded] overflow-hidden"><span class="inline-block gsap-word translate-y-full">&lt;10ms</span></span>
                            <span class="text-xs font-light uppercase tracking-widest text-white/40 leading-tight">Query<br>Latency</span>
                        </div>

                        <!-- Stat 4 -->
                        <div class="bg-black/60 p-6 flex flex-col gap-2 hover:bg-black/40 transition-colors">
                            <span class="text-3xl font-extralight tracking-tight text-[#6a9ded] overflow-hidden"><span class="inline-block gsap-word translate-y-full">3.4B+</span></span>
                            <span class="text-xs font-light uppercase tracking-widest text-white/40 leading-tight">Event<br>Triggers</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>

    <script>
        // Set up the masked text reveal dynamically for the paragraph text
        const p = document.getElementById('split-text-target');
        const text = p.innerText.trim();
        const words = text.split(/\\s+/);
        p.innerHTML = '';
        words.forEach(word => {
            p.innerHTML += \`<span class="inline-block overflow-hidden align-bottom pb-1"><span class="inline-block gsap-word translate-y-full">\${word}</span></span> \`;
        });

        // Initialize GSAP ScrollTrigger for masked reveal
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.gsap-word', {
            y: "0%",
            duration: 0.9,
            ease: "power4.out",
            stagger: 0.04,
            scrollTrigger: {
                trigger: "main",
                start: "top 95%"
            }
        });

        // Canvas Particle Network (Original logic preserved)
        const canvas = document.getElementById('particle-canvas');
        const ctx = canvas.getContext('2d');
        const pauseBtn = document.getElementById('pauseBtn');
        let isPaused = false;

        let width, height;
        let particles = [];
        const particleCount = 200;
        const speedMultiplier = 1.1;

        let originX, originY;

        function resize() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.max(1, Math.floor(width * dpr));
            canvas.height = Math.max(1, Math.floor(height * dpr));
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.imageSmoothingEnabled = false;
            originX = width / 2;
            originY = height * 0.7; // Lowered slightly to fit grid stage better
        }

        class Particle {
            constructor() {
                this.reset();
                this.z = Math.random() * 1000;
            }

            reset() {
                const angle = Math.random() * Math.PI * 2;
                const radius = Math.random() * 600;
                
                this.x = Math.cos(angle) * radius;
                this.y = (Math.sin(angle) * radius) - 150; 
                
                this.z = 1000; 
                this.speed = (Math.random() * 2 + 1) * speedMultiplier;
                
                // Restrained blue and white hues for technical atmosphere
                const hue = Math.random() > 0.5 ? '200, 220, 255' : '106, 157, 237';
                this.color = \`rgb(\${hue})\`;
                this.length = Math.random() * 2 + 0.5;
            }

            update() {
                this.z -= this.speed;
                if (this.z <= 0) {
                    this.reset();
                }
            }

            draw() {
                const fov = 300; 
                
                const scale = fov / this.z;
                const px = originX + this.x * scale;
                const py = originY + this.y * scale;

                const prevZ = this.z + this.speed * this.length;
                const prevScale = fov / prevZ;
                const prevPx = originX + this.x * prevScale;
                const prevPy = originY + this.y * prevScale;

                let opacity = 1 - (this.z / 1000);
                if (this.z < 100) opacity = this.z / 100; 
                if (opacity < 0) opacity = 0;

                ctx.beginPath();
                ctx.moveTo(prevPx, prevPy);
                ctx.lineTo(px, py);
                
                ctx.strokeStyle = this.color.replace('rgb', 'rgba').replace(')', \`, \${opacity * 0.9})\`);
                // Hairline strokes stay crisp under retina DPR scaling
                ctx.lineWidth = Math.max(0.25, (1 - (this.z / 1000)) * 0.4);
                ctx.lineCap = 'butt';
                ctx.lineJoin = 'miter';
                
                ctx.stroke();
            }
        }

        function init() {
            resize();
            window.addEventListener('resize', resize);
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
            animate();
        }

        function animate() {
            requestAnimationFrame(animate);

            if (!isPaused) {
                // Faster fade keeps streaks sharp instead of smeared
                ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
                ctx.fillRect(0, 0, width, height);

                particles.forEach(p => {
                    p.update();
                    p.draw();
                });
            }
        }

        pauseBtn.addEventListener('click', () => {
            isPaused = !isPaused;
            const icon = pauseBtn.querySelector('iconify-icon');
            if (isPaused) {
                icon.setAttribute('icon', 'solar:play-linear');
            } else {
                icon.setAttribute('icon', 'solar:pause-linear');
            }
        });

        init();
    <\/script>
</body>
</html>`,x8=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quantum Flux</title>
    
    <!-- Tailwind & Iconify -->
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600&display=swap" rel="stylesheet">
    
    <!-- GSAP Core & ScrollTrigger -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    
    <!-- Three.js Import Map -->
    <script type="importmap">
    {
        "imports": {
            "three": "https://unpkg.com/three@0.160.0/build/three.module.js",
            "three/addons/": "https://unpkg.com/three@0.160.0/examples/jsm/"
        }
    }
    <\/script>
</head>
<body class="bg-[#050505] text-white selection:bg-white selection:text-black font-extralight overflow-x-hidden relative" style="font-family: 'Space Grotesk', sans-serif;">

    <!-- Loading Overlay -->
    <div id="loader" class="fixed inset-0 z-50 flex items-center justify-center bg-[#050505] transition-opacity duration-1000">
        <div class="flex flex-col items-center gap-4">
            <div class="h-px w-24 bg-neutral-800 overflow-hidden relative">
                <div id="shimmer-bar" class="absolute inset-y-0 left-0 bg-white w-full -translate-x-full"></div>
            </div>
            <p class="text-xs uppercase tracking-[0.2em] text-neutral-500 font-light">
                Booting Sequence
            </p>
        </div>
    </div>

    <!-- 3D Canvas Container -->
    <div class="fixed inset-0 z-0">
        <canvas id="webgl-canvas" class="w-full h-full outline-none cursor-auto"></canvas>
    </div>

    <!-- Container Lines & Corner Squares -->
    <div class="fixed inset-y-6 inset-x-6 md:inset-y-12 md:inset-x-12 border-x border-white/10 pointer-events-none z-10 flex flex-col justify-between">
        <!-- Top Left -->
        <div class="absolute top-0 -translate-y-1/2 -left-[3px] w-1.5 h-1.5 bg-neutral-900 border border-neutral-500 rounded-none"></div>
        <!-- Top Right -->
        <div class="absolute top-0 -translate-y-1/2 -right-[3px] w-1.5 h-1.5 bg-neutral-900 border border-neutral-500 rounded-none"></div>
        <!-- Bottom Left -->
        <div class="absolute bottom-0 translate-y-1/2 -left-[3px] w-1.5 h-1.5 bg-neutral-900 border border-neutral-500 rounded-none"></div>
        <!-- Bottom Right -->
        <div class="absolute bottom-0 translate-y-1/2 -right-[3px] w-1.5 h-1.5 bg-neutral-900 border border-neutral-500 rounded-none"></div>
    </div>

    <!-- Scrollable UI Overlay -->
    <div class="relative z-20 flex flex-col min-h-[160vh] pointer-events-none">
        
        <!-- Fixed Navigation -->
        <header class="fixed top-6 md:top-12 left-6 right-6 md:left-12 md:right-12 px-6 py-6 flex justify-between items-center pointer-events-auto opacity-0 nav-item z-30">
            <div class="flex items-center gap-3 group cursor-pointer">
                <div class="w-8 h-8 rounded-none border border-neutral-800 flex items-center justify-center bg-[#050505] group-hover:border-neutral-400 transition-colors duration-300">
                    <span class="font-light text-xs tracking-tighter text-white">Q</span>
                </div>
                <span class="text-xs font-light tracking-widest text-neutral-400 group-hover:text-white transition-colors uppercase glitch-target">
                    Quantum
                </span>
            </div>

            <nav class="hidden md:flex items-center gap-10 px-8 py-3 rounded-none" style="background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(8px); border: 1px solid transparent; background-clip: padding-box, border-box; background-image: linear-gradient(#050505, #050505), linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.02) 100%);">
                <a href="#" class="uppercase tracking-widest text-neutral-500 hover:text-white transition-colors text-xs font-light">Topology</a>
                <a href="#" class="uppercase tracking-widest text-neutral-500 hover:text-white transition-colors text-xs font-light">Matrix</a>
                <a href="#" class="uppercase tracking-widest text-neutral-500 hover:text-white transition-colors text-xs font-light">Protocol</a>
            </nav>

            <button class="group flex items-center gap-3 px-5 py-2.5 rounded-none transition-all duration-300" style="background: linear-gradient(#050505, #050505) padding-box, linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05)) border-box; border: 1px solid transparent;">
                <span class="text-xs font-light tracking-widest uppercase text-neutral-400 group-hover:text-white">Connect</span>
                <iconify-icon icon="solar:arrow-right-linear" width="14" class="text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all"></iconify-icon>
            </button>
        </header>

        <!-- Main Content Area -->
        <main class="flex-grow flex flex-col pt-[35vh] pb-[40vh] px-12 md:px-24 pointer-events-none relative z-20 w-full max-w-6xl mx-auto scroll-trigger-area">
            <div class="space-y-12">
                <!-- Status Tagline -->
                <div class="overflow-hidden">
                    <div class="flex items-center gap-3 mask-word translate-y-full inline-flex">
                        <span class="flex h-1.5 w-1.5 rounded-none bg-neutral-300 shadow-[0_0_8px_rgba(255,255,255,0.6)]"></span>
                        <p class="text-xs uppercase tracking-[0.25em] text-neutral-400 font-extralight">
                            Neural Node: Active
                        </p>
                    </div>
                </div>

                <!-- Headline with Staggered Masked Reveal -->
                <div class="max-w-4xl flex flex-wrap gap-x-6 gap-y-2">
                    <span class="inline-block overflow-hidden pb-2"><span class="mask-word inline-block translate-y-[110%] text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-[1] text-white glitch-target">Dynamic</span></span>
                    <span class="inline-block overflow-hidden pb-2"><span class="mask-word inline-block translate-y-[110%] text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-[1] text-white glitch-target">Resonance</span></span>
                    <span class="inline-block overflow-hidden pb-2"><span class="mask-word inline-block translate-y-[110%] text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-[1] text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-neutral-700 glitch-target">Field.</span></span>
                </div>

                <!-- Description -->
                <div class="overflow-hidden max-w-lg">
                    <p class="mask-word translate-y-[110%] inline-block text-sm md:text-base text-neutral-500 leading-relaxed font-extralight">
                        An autonomous volumetric simulation powered by algorithmic dispersion and real-time data flow.
                    </p>
                </div>

                <!-- CTA Actions -->
                <div class="overflow-hidden pt-6">
                    <div class="mask-word translate-y-[110%] flex flex-wrap gap-5 pointer-events-auto">
                        <button class="relative group px-8 py-3.5 bg-white text-black rounded-none overflow-hidden">
                            <div class="absolute inset-0 bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                            <div class="relative flex items-center gap-3">
                                <span class="text-xs uppercase tracking-widest font-light text-black">Initialize</span>
                                <iconify-icon icon="solar:play-linear" width="16"></iconify-icon>
                            </div>
                        </button>

                        <button class="group px-8 py-3.5 rounded-none transition-colors backdrop-blur-sm" style="background: linear-gradient(rgba(255,255,255,0.02), rgba(255,255,255,0.02)) padding-box, linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%) border-box; border: 1px solid transparent;">
                            <div class="flex items-center gap-3">
                                <span class="text-xs uppercase tracking-widest font-light text-neutral-400 group-hover:text-white transition-colors">System Specs</span>
                                <iconify-icon icon="solar:document-linear" width="16" class="text-neutral-500 group-hover:text-white transition-colors"></iconify-icon>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </main>

        <!-- Fixed Footer -->
        <footer class="fixed bottom-6 md:bottom-12 left-6 right-6 md:left-12 md:right-12 pointer-events-auto nav-item opacity-0 px-6 py-6 grid grid-cols-3 items-end z-30">
            <div class="flex flex-col gap-2">
                <span class="text-[10px] uppercase tracking-widest text-neutral-600 font-light">Telemetry</span>
                <span id="coords" class="text-xs font-mono text-neutral-300 font-extralight">0.00.0.00.00</span>
            </div>

            <div class="hidden sm:flex flex-col gap-2 items-center">
                <span class="text-[10px] uppercase tracking-[0.2em] text-neutral-600 font-light">Scroll to traverse</span>
                <div class="w-px h-8 bg-gradient-to-b from-neutral-600 to-transparent"></div>
            </div>
            
            <div class="flex gap-6 justify-self-end">
                <a href="#" class="text-neutral-600 hover:text-white transition-colors">
                    <iconify-icon icon="solar:link-linear" width="18"></iconify-icon>
                </a>
                <a href="#" class="text-neutral-600 hover:text-white transition-colors">
                    <iconify-icon icon="solar:maximize-square-linear" width="18"></iconify-icon>
                </a>
            </div>
        </footer>
    </div>

    <!-- Main Logic & Interactions -->
    <script type="module">
        import * as THREE from 'three';
        import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
        import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
        import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

        // Register GSAP ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // --- Configuration (Monotone) ---
        const config = {
            colors: {
                bg: 0x050505,
                primary: 0xdddddd, 
                secondary: 0x555555
            }
        };

        // --- Scene Setup ---
        const canvas = document.querySelector('#webgl-canvas');
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(config.colors.bg);
        scene.fog = new THREE.FogExp2(config.colors.bg, 0.04);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.z = 7;

        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: false,
            powerPreference: "high-performance",
            alpha: false
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.0;

        // --- Objects Container ---
        const mainGroup = new THREE.Group();
        scene.add(mainGroup);

        // --- 1. Vortex Particle Field (Smaller Dots) ---
        const vortexCount = 9500;
        const vortexPositions = new Float32Array(vortexCount * 3);
        const vortexRadius = new Float32Array(vortexCount);
        const vortexAngle = new Float32Array(vortexCount);
        const vortexHeight = new Float32Array(vortexCount);
        const vortexSpeed = new Float32Array(vortexCount);

        for (let i = 0; i < vortexCount; i++) {
            const i3 = i * 3;
            const y = (Math.random() - 0.5) * 7.5;
            const funnel = 0.4 + Math.abs(y) * 0.2;
            const r = (0.1 + Math.pow(Math.random(), 1.5) * 2.5) * funnel;
            const a = Math.random() * Math.PI * 2;

            vortexHeight[i] = y;
            vortexRadius[i] = r;
            vortexAngle[i] = a;
            vortexSpeed[i] = 0.5 + Math.random() * 0.8;

            vortexPositions[i3] = Math.cos(a) * r;
            vortexPositions[i3 + 1] = y;
            vortexPositions[i3 + 2] = Math.sin(a) * r;
        }

        const vortexGeometry = new THREE.BufferGeometry();
        vortexGeometry.setAttribute('position', new THREE.BufferAttribute(vortexPositions, 3));
        const vortexMaterial = new THREE.PointsMaterial({
            size: 0.006, // Smaller dots requested
            color: config.colors.primary,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        const vortexPoints = new THREE.Points(vortexGeometry, vortexMaterial);
        mainGroup.add(vortexPoints);

        // --- 2. Spiral Guides ---
        function createSpiralLine(turnOffset, color) {
            const spiralPoints = [];
            const pointCount = 400;
            for (let i = 0; i < pointCount; i++) {
                const t = i / (pointCount - 1);
                const angle = t * Math.PI * 14 + turnOffset;
                const radius = 0.2 + t * 2.8;
                const y = (0.5 - t) * 6.0;
                spiralPoints.push(new THREE.Vector3(
                    Math.cos(angle) * radius,
                    y,
                    Math.sin(angle) * radius
                ));
            }
            const spiralGeometry = new THREE.BufferGeometry().setFromPoints(spiralPoints);
            const spiralMaterial = new THREE.LineBasicMaterial({
                color,
                transparent: true,
                opacity: 0.15,
                blending: THREE.AdditiveBlending
            });
            return new THREE.Line(spiralGeometry, spiralMaterial);
        }

        const spiralLineA = createSpiralLine(0, config.colors.secondary);
        const spiralLineB = createSpiralLine(Math.PI, config.colors.primary);
        mainGroup.add(spiralLineA);
        mainGroup.add(spiralLineB);

        // --- 3. Ambient Particles ---
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 300;
        const posArray = new Float32Array(particlesCount * 3);
        for(let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 12;
        }
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.008,
            color: config.colors.secondary,
            transparent: true,
            opacity: 0.4,
            blending: THREE.AdditiveBlending
        });
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // --- Post Processing ---
        const renderScene = new RenderPass(scene, camera);
        const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.0, 0.4, 0.85);
        bloomPass.strength = 0.6;
        bloomPass.radius = 0.3;
        bloomPass.threshold = 0.2;

        const composer = new EffectComposer(renderer);
        composer.addPass(renderScene);
        composer.addPass(bloomPass);

        // --- Interactions & Animation State ---
        let mouseX = 0, mouseY = 0;
        let targetX = 0, targetY = 0;
        let windowHalfX = window.innerWidth / 2;
        let windowHalfY = window.innerHeight / 2;

        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX - windowHalfX);
            mouseY = (event.clientY - windowHalfY);
            
            // Coordinates Update
            const xVal = (event.clientX / window.innerWidth).toFixed(2);
            const yVal = (event.clientY / window.innerHeight).toFixed(2);
            document.getElementById('coords').innerText = \`\${xVal}.\${yVal}.00\`;
        });

        // --- Animation Loop ---
        const clock = new THREE.Clock();

        function animate() {
            const elapsedTime = clock.getElapsedTime();

            targetX = mouseX * 0.001;
            targetY = mouseY * 0.0008;

            mainGroup.rotation.y += 0.002;
            mainGroup.rotation.y += 0.03 * (targetX - mainGroup.rotation.y);
            mainGroup.rotation.x += 0.03 * (targetY - mainGroup.rotation.x);

            const positions = vortexGeometry.attributes.position.array;
            for (let i = 0; i < vortexCount; i++) {
                const i3 = i * 3;
                const spin = elapsedTime * vortexSpeed[i] * 0.5 + vortexHeight[i] * 0.5;
                const angle = vortexAngle[i] + spin;
                const pulse = Math.sin(elapsedTime * 1.2 + i * 0.01) * 0.05;
                const radius = vortexRadius[i] + pulse;

                positions[i3] = Math.cos(angle) * radius;
                positions[i3 + 1] = vortexHeight[i] + Math.sin(elapsedTime + i * 0.02) * 0.03;
                positions[i3 + 2] = Math.sin(angle) * radius;
            }
            vortexGeometry.attributes.position.needsUpdate = true;

            spiralLineA.rotation.y = elapsedTime * 0.15;
            spiralLineB.rotation.y = -elapsedTime * 0.12;

            particlesMesh.rotation.y = elapsedTime * 0.03;
            particlesMesh.rotation.x = -mouseY * 0.0001;

            composer.render();
            requestAnimationFrame(animate);
        }

        // --- Resize ---
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            composer.setSize(window.innerWidth, window.innerHeight);
            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;
        });

        // --- Init & GSAP Animations ---
        window.onload = () => {
            animate();

            // Loader Shimmer loop
            gsap.to("#shimmer-bar", { x: "100%", duration: 1.5, repeat: -1, ease: "power1.inOut" });

            const tl = gsap.timeline();

            // 1. Loader Exit & Nav Enter
            tl.to("#loader", {
                opacity: 0,
                duration: 1.0,
                onComplete: () => { document.getElementById("loader").style.display = "none"; }
            })
            .from(mainGroup.scale, { x: 0.6, y: 0.6, z: 0.6, duration: 2.0, ease: "power3.out" }, "-=0.5")
            .to(".nav-item", { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: "power2.out" }, "-=1.5");

            // 2. ScrollTrigger Masked Staggered Word Reveal
            gsap.to(".mask-word", {
                scrollTrigger: {
                    trigger: ".scroll-trigger-area",
                    start: "top 80%",
                },
                y: 0,
                duration: 1.4,
                stagger: 0.1,
                ease: "power4.out"
            });
        };
    <\/script>

    <!-- JS based Glitch Effect to avoid arbitrary style tags -->
    <script>
        (function(){
            const targets = document.querySelectorAll('.glitch-target');
            let lastX = 0, lastY = 0, lastTime = 0;
            
            document.addEventListener('mousemove', e => {
                const now = Date.now(), dt = now - lastTime;
                if (dt > 40) {
                    const dx = e.clientX - lastX, dy = e.clientY - lastY;
                    const speed = Math.sqrt(dx * dx + dy * dy) / dt;
                    
                    if (speed > 2.0) {
                        targets.forEach(el => {
                            if (!el.dataset.animating) {
                                el.dataset.animating = "true";
                                gsap.to(el, {
                                    x: () => (Math.random() - 0.5) * 4,
                                    y: () => (Math.random() - 0.5) * 2,
                                    textShadow: "2px 0 rgba(255,255,255,0.4), -2px 0 rgba(100,100,100,0.4)",
                                    duration: 0.05,
                                    yoyo: true,
                                    repeat: 3,
                                    onComplete: () => {
                                        gsap.set(el, { x: 0, y: 0, textShadow: "none" });
                                        setTimeout(() => el.dataset.animating = "", 200);
                                    }
                                });
                            }
                        });
                    }
                    lastX = e.clientX; lastY = e.clientY; lastTime = now;
                }
            });
        })();
    <\/script>
</body>
</html>`,b8=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AEON // Portal</title>
    
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>

    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400&family=JetBrains+Mono:wght@300;400&display=swap" rel="stylesheet">
</head>
<body style="
    --bg-base: #020202; 
    --bg-surface-1: rgba(255, 255, 255, 0.015); 
    --bg-surface-2: rgba(255, 255, 255, 0.04); 
    --bg-surface-3: rgba(255, 255, 255, 0.08);
    --text-primary: #F4F4F5; 
    --text-secondary: #A3A3A3; 
    --text-accent: #020202; 
    --text-tech: #666666;
    --bg-accent: #F4F4F5; 
    --bg-accent-active: #22C55E;
    --border-glow: rgba(255, 255, 255, 0.08);
    --glow-color: 255, 255, 255;
    background-color: var(--bg-base); 
    color: var(--text-primary);
    transition: background-color 0.8s cubic-bezier(0.16, 1, 0.3, 1), color 0.8s cubic-bezier(0.16, 1, 0.3, 1);
" class="font-['Inter'] min-h-screen overflow-hidden flex items-center justify-center antialiased selection:bg-[var(--bg-surface-3)] selection:text-[var(--text-primary)]">

    <!-- Ambient Background -->
    <div id="webgl-container" class="absolute inset-0 z-0 pointer-events-none opacity-80 mix-blend-screen"></div>

    <!-- Structural Framing -->
    <div class="fixed inset-4 lg:inset-8 pointer-events-none z-0 border border-[var(--border-glow)] hidden lg:block transition-colors duration-700">
        <!-- Corner Registration Marks -->
        <div class="absolute -top-[1px] -left-[1px] w-3 h-3 border-t border-l border-[var(--text-secondary)] transition-colors duration-500"></div>
        <div class="absolute -top-[1px] -right-[1px] w-3 h-3 border-t border-r border-[var(--text-secondary)] transition-colors duration-500"></div>
        <div class="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b border-l border-[var(--text-secondary)] transition-colors duration-500"></div>
        <div class="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b border-r border-[var(--text-secondary)] transition-colors duration-500"></div>
        
        <!-- Precision Grid Lines -->
        <div class="absolute top-0 bottom-0 left-1/3 w-[1px] bg-gradient-to-b from-transparent via-[var(--border-glow)] to-transparent opacity-20"></div>
        <div class="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--border-glow)] to-transparent opacity-10"></div>
    </div>

    <!-- Interface Controls -->
    <div class="absolute top-6 lg:top-12 right-6 lg:right-12 z-20 flex items-center gap-6">
        <div class="font-['JetBrains_Mono'] text-xs text-[var(--text-tech)] tracking-widest uppercase transition-colors duration-500 hidden sm:block">SYS-2.9</div>
        <button id="themeToggleBtn" class="h-8 px-4 border border-[var(--border-glow)] bg-[var(--bg-surface-1)] hover:bg-[var(--bg-surface-2)] text-[var(--text-primary)] backdrop-blur-md flex items-center gap-2 transition-all duration-300 text-xs font-light tracking-wide rounded-sm">
            <iconify-icon id="themeIcon" icon="solar:moon-linear" stroke-width="1.5" class="text-sm"></iconify-icon>
            <span id="themeText">DARK</span>
        </button>
    </div>

    <!-- Metadata Labels -->
    <div class="absolute top-12 left-8 lg:top-16 lg:left-16 z-10 font-['JetBrains_Mono'] text-xs tracking-widest text-[var(--text-tech)] uppercase transition-colors duration-500 hidden sm:block">
        NEURAL.NET // ACTIVE
    </div>
    <div style="transform: translateY(-50%) rotate(90deg); transform-origin: center right;" class="absolute top-1/2 right-8 lg:right-12 z-10 font-['JetBrains_Mono'] text-xs tracking-widest text-[var(--text-tech)] uppercase flex items-center gap-4 transition-colors duration-500 hidden xl:flex">
        <span class="opacity-40">[</span>
        <span>PRT</span>
        <span class="opacity-40">=</span>
        <span>ECHO-9</span>
        <span class="opacity-40">]</span>
    </div>

    <!-- Remixed Layout: Typographic Hero + Interactive Section -->
    <div class="relative z-10 w-full max-w-[1440px] min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-24 py-24 gap-16 lg:gap-8">
        
        <!-- Hero Section -->
        <div class="w-full lg:w-1/2 flex flex-col gap-6 lg:pr-12">
            <div class="font-['JetBrains_Mono'] text-xs text-[var(--text-secondary)] tracking-widest uppercase flex items-center gap-3">
                <div class="w-1.5 h-1.5 rounded-full bg-[var(--bg-accent-active)] animate-pulse"></div>
                <span class="block overflow-hidden"><span class="block masked-word translate-y-full opacity-0">Authorization Pending</span></span>
            </div>
            
            <h1 class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tighter font-extralight leading-[0.95] text-[var(--text-primary)] uppercase">
                <span class="block overflow-hidden pb-2"><span class="block masked-word translate-y-full opacity-0">Establish</span></span>
                <span class="block overflow-hidden pb-2"><span class="block masked-word translate-y-full opacity-0">Connection</span></span>
            </h1>
            
            <p class="text-sm lg:text-base font-extralight text-[var(--text-secondary)] leading-relaxed max-w-md mt-4">
                <span class="block overflow-hidden"><span class="block masked-word translate-y-full opacity-0">Restricted network sector. Verify your identity via biometric uplink to access the centralized mainframe and quantum datasets.</span></span>
            </p>
        </div>

        <!-- Second Section (Interactive Card) -->
        <div class="w-full max-w-[420px] lg:w-1/2 flex justify-center lg:justify-end">
            
            <!-- Structural Shell with Gradient Border -->
            <div class="relative w-full rounded-sm p-[1px] bg-gradient-to-br from-[var(--border-glow)] via-transparent to-[var(--border-glow)] group">
                
                <div class="w-full rounded-sm bg-[var(--bg-surface-1)] backdrop-blur-2xl p-8 lg:p-10 flex flex-col gap-8 transition-colors duration-500 shadow-2xl shadow-black/40">
                    
                    <!-- Card Header -->
                    <div class="flex flex-col gap-2">
                        <div class="font-['JetBrains_Mono'] text-xs text-[var(--text-primary)] border border-[var(--border-glow)] bg-[var(--bg-surface-2)] px-3 py-1 self-start mb-2 tracking-widest uppercase rounded-sm transition-colors duration-500">IDENTITY.CHECK</div>
                        <h2 class="text-2xl tracking-tight font-light text-[var(--text-primary)]">
                            <span class="block overflow-hidden"><span class="block masked-word translate-y-full opacity-0">Authentication</span></span>
                        </h2>
                    </div>

                    <!-- Alternate Methods Grid -->
                    <div class="grid grid-cols-3 gap-3">
                        <button class="h-12 rounded-sm bg-[var(--bg-surface-2)] hover:bg-[var(--text-primary)] text-[var(--text-primary)] hover:text-[var(--text-accent)] flex items-center justify-center transition-all duration-300 border border-[var(--border-glow)] group/btn" aria-label="Biometric Scan">
                            <iconify-icon icon="solar:fingerprint-linear" stroke-width="1.5" class="text-xl transition-transform duration-300 group-hover/btn:scale-110"></iconify-icon>
                        </button>
                        <button class="h-12 rounded-sm bg-[var(--bg-surface-2)] hover:bg-[var(--text-primary)] text-[var(--text-primary)] hover:text-[var(--text-accent)] flex items-center justify-center transition-all duration-300 border border-[var(--border-glow)] group/btn" aria-label="Hardware Token">
                            <iconify-icon icon="solar:smartphone-linear" stroke-width="1.5" class="text-xl transition-transform duration-300 group-hover/btn:scale-110"></iconify-icon>
                        </button>
                        <button class="h-12 rounded-sm bg-[var(--bg-surface-2)] hover:bg-[var(--text-primary)] text-[var(--text-primary)] hover:text-[var(--text-accent)] flex items-center justify-center transition-all duration-300 border border-[var(--border-glow)] group/btn" aria-label="Neural Passkey">
                            <iconify-icon icon="solar:shield-keyhole-linear" stroke-width="1.5" class="text-xl transition-transform duration-300 group-hover/btn:scale-110"></iconify-icon>
                        </button>
                    </div>

                    <!-- Divider -->
                    <div class="flex items-center gap-4 text-[var(--text-tech)] font-['JetBrains_Mono'] text-xs tracking-widest uppercase">
                        <div class="flex-1 h-[1px] bg-[var(--border-glow)] transition-colors duration-500"></div>
                        <span>FALLBACK PROTOCOL</span>
                        <div class="flex-1 h-[1px] bg-[var(--border-glow)] transition-colors duration-500"></div>
                    </div>

                    <!-- Input Fields -->
                    <div class="flex flex-col gap-5">
                        <div class="relative flex flex-col gap-2">
                            <label class="font-['JetBrains_Mono'] text-xs font-light text-[var(--text-secondary)] uppercase tracking-widest transition-colors duration-500">AGENT_ALIAS</label>
                            <input type="text" placeholder="agent.name@aeon.net" autocomplete="username" class="w-full px-4 h-12 border border-[var(--border-glow)] outline-none rounded-sm bg-[var(--bg-surface-1)] text-[var(--text-primary)] font-['Inter'] text-sm transition-all duration-300 focus:bg-[var(--bg-surface-2)] focus:border-[var(--text-secondary)] placeholder-[var(--text-tech)] font-light">
                        </div>
                        <div class="relative flex flex-col gap-2">
                            <label class="font-['JetBrains_Mono'] text-xs font-light text-[var(--text-secondary)] uppercase tracking-widest transition-colors duration-500">ACCESS_CODE</label>
                            <input type="password" placeholder="••••••••••••" autocomplete="current-password" class="w-full px-4 h-12 border border-[var(--border-glow)] outline-none rounded-sm bg-[var(--bg-surface-1)] text-[var(--text-primary)] font-['Inter'] text-sm transition-all duration-300 focus:bg-[var(--bg-surface-2)] focus:border-[var(--text-secondary)] placeholder-[var(--text-tech)] font-light">
                        </div>
                    </div>

                    <!-- Primary Action -->
                    <button class="h-14 mt-4 rounded-sm bg-[var(--bg-accent)] text-[var(--text-accent)] font-medium text-xs tracking-widest uppercase flex items-center justify-center gap-3 transition-all duration-500 hover:bg-[var(--bg-accent-active)] hover:text-white group/submit relative overflow-hidden">
                        <span class="relative z-10 flex items-center gap-2">
                            INITIATE LINK 
                            <iconify-icon icon="solar:arrow-right-linear" stroke-width="1.5" class="text-base transition-transform duration-300 group-hover/submit:translate-x-1"></iconify-icon>
                        </span>
                    </button>

                </div>
            </div>
        </div>
    </div>

    <script>
        // GSAP Masked Reveal Directive
        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);
            
            gsap.to(".masked-word", {
                y: "0%",
                opacity: 1,
                duration: 1.2,
                ease: "power4.out",
                stagger: 0.1,
                delay: 0.1
            });
        });

        // Theme Toggling Logic
        const body = document.body;
        const themeBtn = document.getElementById('themeToggleBtn');
        const themeIcon = document.getElementById('themeIcon');
        const themeText = document.getElementById('themeText');
        let isDark = true;

        const themes = {
            dark: {
                '--bg-base': '#020202',
                '--bg-surface-1': 'rgba(255, 255, 255, 0.015)',
                '--bg-surface-2': 'rgba(255, 255, 255, 0.04)',
                '--bg-surface-3': 'rgba(255, 255, 255, 0.08)',
                '--text-primary': '#F4F4F5',
                '--text-secondary': '#A3A3A3',
                '--text-accent': '#020202',
                '--text-tech': '#666666',
                '--bg-accent': '#F4F4F5',
                '--bg-accent-active': '#22C55E',
                '--border-glow': 'rgba(255, 255, 255, 0.08)',
                '--glow-color': '255, 255, 255',
                shaderCore: '#FFFFFF',
                shaderFringe: '#1e3a8a'
            },
            light: {
                '--bg-base': '#F4F4F5',
                '--bg-surface-1': 'rgba(0, 0, 0, 0.02)',
                '--bg-surface-2': 'rgba(0, 0, 0, 0.05)',
                '--bg-surface-3': 'rgba(0, 0, 0, 0.1)',
                '--text-primary': '#020202',
                '--text-secondary': '#666666',
                '--text-accent': '#FFFFFF',
                '--text-tech': '#A3A3A3',
                '--bg-accent': '#020202',
                '--bg-accent-active': '#16A34A',
                '--border-glow': 'rgba(0, 0, 0, 0.08)',
                '--glow-color': '0, 0, 0',
                shaderCore: '#020202',
                shaderFringe: '#94a3b8'
            }
        };

        themeBtn.addEventListener('click', () => {
            isDark = !isDark;
            const currentTheme = isDark ? themes.dark : themes.light;

            for (const [key, value] of Object.entries(currentTheme)) {
                if (key.startsWith('--')) {
                    body.style.setProperty(key, value);
                }
            }

            if (isDark) {
                themeIcon.setAttribute('icon', 'solar:moon-linear');
                themeText.textContent = 'DARK';
            } else {
                themeIcon.setAttribute('icon', 'solar:sun-linear');
                themeText.textContent = 'LIGHT';
            }

            if (typeof material !== 'undefined') {
                material.uniforms.u_colorCore.value = new THREE.Color(currentTheme.shaderCore);
                material.uniforms.u_colorFringe.value = new THREE.Color(currentTheme.shaderFringe);
                material.uniforms.u_isLightMode.value = isDark ? 0.0 : 1.0;
            }
        });

        // Ambient WebGL Background
        const container = document.getElementById('webgl-container');
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
        camera.position.z = 1;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        const geometry = new THREE.PlaneGeometry(2, 2);

        const vertexShader = \`
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = vec4(position, 1.0);
            }
        \`;

        const fragmentShader = \`
            uniform float u_time;
            uniform vec2 u_resolution;
            uniform vec2 u_mouse;
            uniform vec3 u_colorCore;
            uniform vec3 u_colorFringe;
            uniform float u_isLightMode;
            varying vec2 vUv;

            vec2 hash( vec2 p ) {
                p = vec2( dot(p,vec2(127.1,311.7)), dot(p,vec2(269.5,183.3)) );
                return -1.0 + 2.0*fract(sin(p)*43758.5453123);
            }
            float noise( in vec2 p ) {
                const float K1 = 0.366025404;
                const float K2 = 0.211324865;
                vec2 i = floor( p + (p.x+p.y)*K1 );
                vec2 a = p - i + (i.x+i.y)*K2;
                vec2 o = (a.x>a.y) ? vec2(1.0,0.0) : vec2(0.0,1.0);
                vec2 b = a - o + K2;
                vec2 c = a - 1.0 + 2.0*K2;
                vec3 h = max( 0.5-vec3(dot(a,a), dot(b,b), dot(c,c) ), 0.0 );
                vec3 n = h*h*h*h*vec3( dot(a,hash(i+0.0)), dot(b,hash(i+o)), dot(c,hash(i+1.0)));
                return dot( n, vec3(70.0) );
            }

            float sdArc(vec2 p, vec2 center, float radius, float width, float warp) {
                p.y += sin(p.x * 2.0 + u_time * 0.3) * warp;
                p.x += noise(p * 1.5 + u_time * 0.1) * (warp * 0.8);
                float d = length(p - center) - radius;
                return abs(d) - width;
            }

            void main() {
                vec2 uv = gl_FragCoord.xy / u_resolution.xy;
                vec2 st = uv;
                st.x *= u_resolution.x / u_resolution.y;
                
                vec2 mouseOffset = (u_mouse - 0.5) * 0.05;
                st += mouseOffset;

                // Center organic form behind the content area
                vec2 center = vec2(0.5, 0.5);
                
                float d1 = sdArc(st, center, 0.6, 0.02, 0.15);
                float d2 = sdArc(st, center, 0.65, 0.06, 0.2);
                
                float coreGlow = exp(-d1 * 30.0);
                float fringeGlow = exp(-d2 * 10.0);
                float wash = smoothstep(1.5, -0.5, length(st - center)) * 0.15;

                vec3 finalColor = vec3(0.0);
                finalColor += u_colorCore * coreGlow;
                finalColor += u_colorFringe * fringeGlow;
                finalColor += u_colorFringe * wash * (sin(u_time * 0.5) * 0.2 + 0.8);

                float alpha = clamp(coreGlow + fringeGlow + wash, 0.0, 1.0);
                finalColor = vec3(1.0) - exp(-finalColor * 1.5);
                
                if(u_isLightMode > 0.5) {
                    alpha = clamp((coreGlow * 1.2 + fringeGlow + wash * 0.4), 0.0, 0.4);
                }

                gl_FragColor = vec4(finalColor, alpha * 0.6);
            }
        \`;

        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                u_time: { value: 0.0 },
                u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
                u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
                u_colorCore: { value: new THREE.Color(themes.dark.shaderCore) },
                u_colorFringe: { value: new THREE.Color(themes.dark.shaderFringe) },
                u_isLightMode: { value: 0.0 }
            },
            transparent: true,
            blending: THREE.AdditiveBlending 
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        let targetMouse = new THREE.Vector2(0.5, 0.5);
        document.addEventListener('mousemove', (e) => {
            targetMouse.x = e.clientX / window.innerWidth;
            targetMouse.y = 1.0 - (e.clientY / window.innerHeight); 
        });

        const clock = new THREE.Clock();
        function animate() {
            requestAnimationFrame(animate);
            material.uniforms.u_time.value = clock.getElapsedTime();
            material.uniforms.u_mouse.value.lerp(targetMouse, 0.03);
            renderer.render(scene, camera);
        }
        animate();

        window.addEventListener('resize', () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            material.uniforms.u_resolution.value.set(width, height);
        });
    <\/script>
</body>
</html>`,v8=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Flow Field with Particle Trails</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 100%; height: 100%; overflow: hidden; background: #0a0a0a; }
  canvas { display: block; width: 100vw; height: 100vh; }
  .label {
    position: fixed;
    top: 20px;
    left: 24px;
    font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
    font-size: 11px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: rgba(200, 149, 108, 0.5);
    z-index: 10;
    pointer-events: none;
    user-select: none;
  }
</style>
</head>
<body>
<div class="label">Flow Field</div>
<canvas id="canvas"></canvas>
<script>
// ─────────────────────────────────────────────
// Simplex Noise (compact implementation)
// Based on Stefan Gustavson's simplex noise
// ─────────────────────────────────────────────
const SimplexNoise = (function() {
  const F2 = 0.5 * (Math.sqrt(3) - 1);
  const G2 = (3 - Math.sqrt(3)) / 6;
  const F3 = 1 / 3;
  const G3 = 1 / 6;

  const grad3 = [
    [1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],
    [1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],
    [0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]
  ];

  function SimplexNoise(seed) {
    this.perm = new Uint8Array(512);
    this.permMod12 = new Uint8Array(512);
    const p = new Uint8Array(256);
    // Seed-based permutation
    seed = seed || Math.random() * 65536;
    for (let i = 0; i < 256; i++) p[i] = i;
    for (let i = 255; i > 0; i--) {
      seed = (seed * 16807 + 0) % 2147483647;
      const j = seed % (i + 1);
      const tmp = p[i];
      p[i] = p[j];
      p[j] = tmp;
    }
    for (let i = 0; i < 512; i++) {
      this.perm[i] = p[i & 255];
      this.permMod12[i] = this.perm[i] % 12;
    }
  }

  SimplexNoise.prototype.noise2D = function(xin, yin) {
    const perm = this.perm, permMod12 = this.permMod12;
    let n0, n1, n2;
    const s = (xin + yin) * F2;
    const i = Math.floor(xin + s);
    const j = Math.floor(yin + s);
    const t = (i + j) * G2;
    const X0 = i - t, Y0 = j - t;
    const x0 = xin - X0, y0 = yin - Y0;
    let i1, j1;
    if (x0 > y0) { i1 = 1; j1 = 0; }
    else { i1 = 0; j1 = 1; }
    const x1 = x0 - i1 + G2, y1 = y0 - j1 + G2;
    const x2 = x0 - 1 + 2 * G2, y2 = y0 - 1 + 2 * G2;
    const ii = i & 255, jj = j & 255;
    let t0 = 0.5 - x0*x0 - y0*y0;
    if (t0 < 0) n0 = 0;
    else { t0 *= t0; const gi = permMod12[ii + perm[jj]]; n0 = t0 * t0 * (grad3[gi][0]*x0 + grad3[gi][1]*y0); }
    let t1 = 0.5 - x1*x1 - y1*y1;
    if (t1 < 0) n1 = 0;
    else { t1 *= t1; const gi = permMod12[ii + i1 + perm[jj + j1]]; n1 = t1 * t1 * (grad3[gi][0]*x1 + grad3[gi][1]*y1); }
    let t2 = 0.5 - x2*x2 - y2*y2;
    if (t2 < 0) n2 = 0;
    else { t2 *= t2; const gi = permMod12[ii + 1 + perm[jj + 1]]; n2 = t2 * t2 * (grad3[gi][0]*x2 + grad3[gi][1]*y2); }
    return 70 * (n0 + n1 + n2);
  };

  SimplexNoise.prototype.noise3D = function(xin, yin, zin) {
    const perm = this.perm, permMod12 = this.permMod12;
    let n0, n1, n2, n3;
    const s = (xin + yin + zin) * F3;
    const i = Math.floor(xin + s), j = Math.floor(yin + s), k = Math.floor(zin + s);
    const t = (i + j + k) * G3;
    const X0 = i - t, Y0 = j - t, Z0 = k - t;
    const x0 = xin - X0, y0 = yin - Y0, z0 = zin - Z0;
    let i1, j1, k1, i2, j2, k2;
    if (x0 >= y0) {
      if (y0 >= z0) { i1=1;j1=0;k1=0;i2=1;j2=1;k2=0; }
      else if (x0 >= z0) { i1=1;j1=0;k1=0;i2=1;j2=0;k2=1; }
      else { i1=0;j1=0;k1=1;i2=1;j2=0;k2=1; }
    } else {
      if (y0 < z0) { i1=0;j1=0;k1=1;i2=0;j2=1;k2=1; }
      else if (x0 < z0) { i1=0;j1=1;k1=0;i2=0;j2=1;k2=1; }
      else { i1=0;j1=1;k1=0;i2=1;j2=1;k2=0; }
    }
    const x1 = x0 - i1 + G3, y1 = y0 - j1 + G3, z1 = z0 - k1 + G3;
    const x2 = x0 - i2 + 2*G3, y2 = y0 - j2 + 2*G3, z2 = z0 - k2 + 2*G3;
    const x3 = x0 - 1 + 3*G3, y3 = y0 - 1 + 3*G3, z3 = z0 - 1 + 3*G3;
    const ii = i & 255, jj = j & 255, kk = k & 255;
    let t0 = 0.6 - x0*x0 - y0*y0 - z0*z0;
    if (t0 < 0) n0 = 0;
    else { t0 *= t0; const gi = permMod12[ii+perm[jj+perm[kk]]]; n0 = t0*t0*(grad3[gi][0]*x0+grad3[gi][1]*y0+grad3[gi][2]*z0); }
    let t1 = 0.6 - x1*x1 - y1*y1 - z1*z1;
    if (t1 < 0) n1 = 0;
    else { t1 *= t1; const gi = permMod12[ii+i1+perm[jj+j1+perm[kk+k1]]]; n1 = t1*t1*(grad3[gi][0]*x1+grad3[gi][1]*y1+grad3[gi][2]*z1); }
    let t2 = 0.6 - x2*x2 - y2*y2 - z2*z2;
    if (t2 < 0) n2 = 0;
    else { t2 *= t2; const gi = permMod12[ii+i2+perm[jj+j2+perm[kk+k2]]]; n2 = t2*t2*(grad3[gi][0]*x2+grad3[gi][1]*y2+grad3[gi][2]*z2); }
    let t3 = 0.6 - x3*x3 - y3*y3 - z3*z3;
    if (t3 < 0) n3 = 0;
    else { t3 *= t3; const gi = permMod12[ii+1+perm[jj+1+perm[kk+1]]]; n3 = t3*t3*(grad3[gi][0]*x3+grad3[gi][1]*y3+grad3[gi][2]*z3); }
    return 32 * (n0 + n1 + n2 + n3);
  };

  return SimplexNoise;
})();

// ─────────────────────────────────────────────
// Flow Field Renderer
// ─────────────────────────────────────────────
(function() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const noise = new SimplexNoise(42);
  const dpr = window.devicePixelRatio || 1;

  let W, H;

  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    // Fill with background on resize to avoid flash
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, W, H);
  }

  window.addEventListener('resize', resize);
  resize();

  // ── Mouse tracking ──
  const mouse = { x: -9999, y: -9999, active: false };
  window.addEventListener('mousemove', function(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
  });
  window.addEventListener('mouseleave', function() {
    mouse.active = false;
  });

  // ── Color palette ──
  // Warm tones: amber, gold, coral, with variations
  const palette = [
    { r: 200, g: 149, b: 108 }, // amber  #c8956c
    { r: 212, g: 165, b: 116 }, // gold   #d4a574
    { r: 224, g: 120, b: 80  }, // coral  #e07850
    { r: 190, g: 130, b: 90  }, // dark amber
    { r: 230, g: 180, b: 140 }, // light gold
    { r: 210, g: 100, b: 70  }, // deep coral
    { r: 180, g: 160, b: 120 }, // muted gold
  ];

  function lerpColor(a, b, t) {
    return {
      r: a.r + (b.r - a.r) * t,
      g: a.g + (b.g - a.g) * t,
      b: a.b + (b.b - a.b) * t
    };
  }

  function getColor(noiseVal) {
    // Map noise [-1,1] to palette index
    const t = (noiseVal + 1) * 0.5; // 0..1
    const idx = t * (palette.length - 1);
    const i = Math.floor(idx);
    const f = idx - i;
    const a = palette[Math.min(i, palette.length - 1)];
    const b = palette[Math.min(i + 1, palette.length - 1)];
    return lerpColor(a, b, f);
  }

  // ── Particles ──
  const PARTICLE_COUNT = 2500;
  let NOISE_SCALE = 0.0025;
  let SPEED = 1.2;
  const MOUSE_RADIUS = 150;
  const MOUSE_FORCE = 2.5;

  const particles = [];

  function createParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      speed: 0.4 + Math.random() * 1.0,
      alpha: 0.15 + Math.random() * 0.55,
      size: 0.5 + Math.random() * 1.5
    };
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(createParticle());
  }

  // ── Animation ──
  let time = 0;

  function draw() {
    // Fade previous frame with dark overlay — creates trailing effect
    ctx.fillStyle = 'rgba(10, 10, 10, 0.03)';
    ctx.fillRect(0, 0, W, H);

    time += 0.0008;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = particles[i];

      // Sample noise field at particle position with time evolution
      const nx = p.x * NOISE_SCALE;
      const ny = p.y * NOISE_SCALE;
      const angle = noise.noise3D(nx, ny, time) * Math.PI * 2;

      // Secondary noise for color variation
      const colorNoise = noise.noise3D(nx * 1.5 + 100, ny * 1.5 + 100, time * 0.5);

      // Velocity from flow field
      let vx = Math.cos(angle) * p.speed * SPEED;
      let vy = Math.sin(angle) * p.speed * SPEED;

      // Mouse interaction — gentle push away
      if (mouse.active) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (1 - dist / MOUSE_RADIUS) * MOUSE_FORCE;
          vx += (dx / dist) * force;
          vy += (dy / dist) * force;
        }
      }

      // Store previous position for line drawing
      const px = p.x;
      const py = p.y;

      // Update position
      p.x += vx;
      p.y += vy;

      // Draw particle trail segment
      const color = getColor(colorNoise);
      ctx.beginPath();
      ctx.moveTo(px, py);
      ctx.lineTo(p.x, p.y);
      ctx.strokeStyle = 'rgba(' + Math.round(color.r) + ',' + Math.round(color.g) + ',' + Math.round(color.b) + ',' + p.alpha + ')';
      ctx.lineWidth = p.size;
      ctx.stroke();

      // Respawn if offscreen
      if (p.x < -20 || p.x > W + 20 || p.y < -20 || p.y > H + 20) {
        p.x = Math.random() * W;
        p.y = Math.random() * H;
      }
    }

    requestAnimationFrame(draw);
  }

  // Initial fill
  ctx.fillStyle = '#0a0a0a';
  ctx.fillRect(0, 0, W, H);

  requestAnimationFrame(draw);

  window.addEventListener('message', function(e) {
    if (e.data && e.data.type === 'param') {
      switch (e.data.name) {
        case 'SPEED': SPEED = e.data.value; break;
        case 'NOISE_SCALE': NOISE_SCALE = e.data.value; break;
      }
    }
  });
})();
<\/script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v8c78df7c7c0f484497ecbca7046644da1771523124516" integrity="sha512-8DS7rgIrAmghBFwoOTujcf6D9rXvH8xm8JQ1Ja01h9QX8EzXldiszufYa4IFfKdLUKTTrnSFXLDkUEOTrZQ8Qg==" data-cf-beacon='{"version":"2024.11.0","token":"216c03e5eb1b42998a91f716785010f9","r":1,"server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}' crossorigin="anonymous"><\/script>
</body>
</html>
`,y8=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aegis Security - Remixed Bento</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Space+Mono&display=swap" rel="stylesheet">
</head>
<body class="bg-[#111111] text-black antialiased min-h-screen flex items-center justify-center p-4 md:p-8 lg:p-12 overflow-x-hidden selection:bg-yellow-300 selection:text-black" style="font-family: 'Space Mono', monospace;">

    <!-- Bento Grid Container -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full max-w-5xl mx-auto min-h-[85vh] py-8">
        
        <!-- Card 1: Grainy / Light (Black Globe) -->
        <article class="col-span-1 relative w-full h-[500px] md:h-auto min-h-[450px] rounded-[2rem] flex flex-col justify-between p-8 overflow-hidden shadow-2xl border border-transparent" style="background: linear-gradient(#f4f4f0, #f4f4f0) padding-box, linear-gradient(135deg, #ffffff 0%, #d1d5db 100%) border-box;">
            <!-- Noise Overlay -->
            <div class="absolute inset-0 z-10 pointer-events-none opacity-[0.15]" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E'); mix-blend-mode: multiply;"></div>
            
            <!-- WebGL Background -->
            <div class="absolute inset-0 z-0 top-1/4">
                <canvas id="webgl-lines" class="w-full h-full opacity-60"></canvas>
            </div>

            <!-- Header -->
            <header class="relative z-20 flex justify-between items-center text-sm tracking-tight font-normal">
                <div class="flex items-center gap-1.5">
                    <iconify-icon icon="solar:shield-network-linear" width="20" height="20" style="stroke-width: 1.5;"></iconify-icon>
                    <span>aegis</span>
                </div>
                <span class="text-xs opacity-50 uppercase tracking-widest">Sector.01</span>
            </header>

            <!-- Main Content -->
            <main class="relative z-20 mt-auto">
                <h2 class="text-3xl md:text-4xl tracking-tight leading-[1.1] mb-4 masked-reveal">
                    Absolute stealth.<br>Zero presence.
                </h2>
                <p class="text-xs leading-relaxed font-sans max-w-[220px] text-black/70 masked-reveal" style="font-family: 'Inter', sans-serif;">
                    Your network footprint.<br>Entirely eradicated.
                </p>
            </main>
        </article>

        <!-- Card 2: Yellow Grid + Aura Asset Image -->
        <article class="col-span-1 relative w-full h-[500px] md:h-auto min-h-[450px] rounded-[2rem] flex flex-col justify-between p-8 overflow-hidden shadow-2xl border border-transparent" style="background: linear-gradient(#FDE047, #FDE047) padding-box, linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(202,138,4,0.4) 100%) border-box;">
            
            <!-- Aura Asset Image Background -->
            <div class="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/724142aa-44a6-48d3-9cf3-761e00d05b78_1600w.jpg" class="w-full h-full object-cover" alt="Futuristic Deconstructed Pyramid">
            </div>

            <!-- Grid Background Overlay -->
            <div class="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" style="background-image: linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px); background-size: 1.5rem 1.5rem;"></div>

            <!-- Header -->
            <header class="relative z-20 flex justify-between items-center text-sm tracking-tight font-normal">
                <div class="flex items-center gap-1.5">
                    <iconify-icon icon="solar:shield-network-linear" width="20" height="20" style="stroke-width: 1.5;"></iconify-icon>
                    <span>aegis</span>
                </div>
                <span class="text-xs opacity-50 uppercase tracking-widest">Sector.02</span>
            </header>

            <!-- Main Content -->
            <main class="relative z-20 mt-auto">
                <h2 class="text-3xl md:text-4xl tracking-tight leading-[1.1] masked-reveal">
                    Adaptive shields.<br>Total autonomy.
                </h2>
            </main>
        </article>

        <!-- Card 3: Black Halftone -->
        <article class="col-span-1 md:col-span-2 relative w-full h-[450px] md:h-[350px] rounded-[2rem] flex flex-col md:flex-row justify-between p-8 overflow-hidden text-white shadow-2xl border border-transparent" style="font-family: 'Inter', sans-serif; background: linear-gradient(#0A0A0A, #0A0A0A) padding-box, linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%) border-box;">
            
            <!-- WebGL Halftone Background -->
            <div class="absolute inset-0 z-0 md:left-1/3 pointer-events-none">
                <canvas id="webgl-halftone" class="w-full h-full"></canvas>
            </div>

            <!-- Header (Left on desktop) -->
            <header class="relative z-20 flex md:flex-col justify-between md:justify-start items-center md:items-start text-sm tracking-tight font-normal text-white/90 gap-4" style="font-family: 'Space Mono', monospace;">
                <div class="flex items-center gap-1.5">
                    <iconify-icon icon="solar:shield-network-linear" width="20" height="20" class="text-yellow-400" style="stroke-width: 1.5;"></iconify-icon>
                    <span>aegis</span>
                </div>
                <span class="text-xs opacity-50 uppercase tracking-widest">Sector.03</span>
            </header>

            <!-- Main Content (Right on desktop) -->
            <main class="relative z-20 mt-auto md:mt-0 md:self-end md:text-right max-w-md w-full">
                <h2 class="text-4xl md:text-5xl tracking-tight leading-[1.1] font-normal mb-4 md:mb-6 uppercase masked-reveal">
                    Quantum<br>Core.
                </h2>
                <p class="text-xs leading-relaxed text-white/70 md:ml-auto md:max-w-[240px] masked-reveal" style="font-family: 'Space Mono', monospace;">
                    Next-gen cryptography<br>for modern infrastructure.
                </p>
            </main>
        </article>

    </div>

    <script>
        // GSAP ScrollTrigger Setup
        gsap.registerPlugin(ScrollTrigger);

        // Utility: Split text into words and wrap for masking
        function wrapWords(element) {
            const text = element.innerHTML;
            const words = text.split(/(<br>|\\s+)/).filter(Boolean);
            element.innerHTML = '';
            
            words.forEach(word => {
                if (word === '<br>') {
                    element.appendChild(document.createElement('br'));
                    return;
                }
                if (word.trim() === '') {
                    element.appendChild(document.createTextNode(' '));
                    return;
                }

                const outerSpan = document.createElement('span');
                outerSpan.style.display = 'inline-block';
                outerSpan.style.overflow = 'hidden';
                outerSpan.style.verticalAlign = 'bottom';
                outerSpan.style.paddingBottom = '0.1em'; // Prevent clipping on descenders

                const innerSpan = document.createElement('span');
                innerSpan.style.display = 'inline-block';
                innerSpan.innerHTML = word;
                innerSpan.classList.add('reveal-target');
                innerSpan.style.transform = 'translateY(110%)';
                innerSpan.style.willChange = 'transform';

                outerSpan.appendChild(innerSpan);
                element.appendChild(outerSpan);
            });
        }

        // Apply masking structure and animation
        document.querySelectorAll('.masked-reveal').forEach(el => {
            wrapWords(el);
            
            gsap.to(el.querySelectorAll('.reveal-target'), {
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                },
                y: "0%",
                duration: 0.85,
                ease: "power4.out",
                stagger: 0.04
            });
        });

        /* --- WebGL Section 1: Abstract Lines --- */
        const initLinesWebGL = () => {
            const canvas = document.getElementById('webgl-lines');
            if(!canvas) return;
            const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
            
            const resize = () => {
                const parent = canvas.parentElement;
                const width = parent.clientWidth;
                const height = parent.clientHeight;
                renderer.setSize(width, height);
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
            };
            window.addEventListener('resize', resize);
            resize();

            camera.position.z = 4.5;

            const group = new THREE.Group();
            scene.add(group);

            const material = new THREE.LineBasicMaterial({ color: 0x111111, transparent: true, opacity: 0.85 }); 
            const particlesCount = 200;
            
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(particlesCount * 3);
            
            for(let i = 0; i < particlesCount * 3; i+=3) {
                const r = 2.5;
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos((Math.random() * 2) - 1);
                
                positions[i] = r * Math.sin(phi) * Math.cos(theta);
                positions[i+1] = r * Math.sin(phi) * Math.sin(theta);
                positions[i+2] = r * Math.cos(phi);
            }
            
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            
            const index = [];
            for (let i = 0; i < particlesCount; i++) {
                for (let j = i + 1; j < particlesCount; j++) {
                    const dx = positions[i*3] - positions[j*3];
                    const dy = positions[i*3+1] - positions[j*3+1];
                    const dz = positions[i*3+2] - positions[j*3+2];
                    const distSq = dx*dx + dy*dy + dz*dz;
                    if (distSq < 1.2) { 
                        index.push(i, j);
                    }
                }
            }
            geometry.setIndex(index);
            
            const lines = new THREE.LineSegments(geometry, material);
            group.add(lines);

            const animate = () => {
                requestAnimationFrame(animate);
                group.rotation.y += 0.002;
                group.rotation.x += 0.001;
                renderer.render(scene, camera);
            };
            animate();
        };

        /* --- WebGL Section 3: Animated Halftone --- */
        const initHalftoneWebGL = () => {
            const canvas = document.getElementById('webgl-halftone');
            if(!canvas) return;
            const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
            renderer.setClearColor(0x0A0A0A, 1);
            const scene = new THREE.Scene();
            const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
            
            const resize = () => {
                const parent = canvas.parentElement;
                const width = Math.max(1, (parent && parent.clientWidth) || window.innerWidth || canvas.clientWidth || 1);
                const height = Math.max(1, (parent && parent.clientHeight) || window.innerHeight || canvas.clientHeight || 1);
                renderer.setSize(width, height, false);
                canvas.style.width = '100%';
                canvas.style.height = '100%';
                const aspect = width / height;
                camera.left = -aspect;
                camera.right = aspect;
                camera.bottom = -1;
                camera.top = 1;
                camera.updateProjectionMatrix();
            };
            window.addEventListener('resize', resize);
            resize();
            camera.position.z = 1;

            const gridSize = 20;
            const geometry = new THREE.BufferGeometry();
            const positions = [];
            const scales = [];

            for (let x = -gridSize; x <= gridSize; x++) {
                for (let y = -gridSize; y <= gridSize; y++) {
                    positions.push(x * 0.15, y * 0.15, 0);
                    scales.push(1); 
                }
            }

            geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
            geometry.setAttribute('scale', new THREE.Float32BufferAttribute(scales, 1));

            const material = new THREE.ShaderMaterial({
                uniforms: {
                    time: { value: 0 },
                    color1: { value: new THREE.Color(0xFBBF24) }, 
                    color2: { value: new THREE.Color(0xFFFFFF) }
                },
                vertexShader: \`
                    attribute float scale;
                    varying vec2 vUv;
                    varying float vScale;
                    uniform float time;
                    
                    void main() {
                        vUv = position.xy;
                        float dist = length(position.xy);
                        float animatedScale = scale * (sin(dist * 6.0 - time * 2.5) * 0.5 + 0.5);
                        vScale = animatedScale;
                        
                        gl_PointSize = animatedScale * 5.0; 
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                \`,
                fragmentShader: \`
                    uniform vec3 color1;
                    uniform vec3 color2;
                    varying vec2 vUv;
                    varying float vScale;
                    
                    void main() {
                        vec2 coord = gl_PointCoord - vec2(0.5);
                        if(length(coord) > 0.5) discard;
                        
                        vec3 finalColor = mix(color2, color1, (vUv.y + 1.0) * 0.5);
                        gl_FragColor = vec4(finalColor, vScale * 0.9);
                    }
                \`,
                transparent: true
            });

            const points = new THREE.Points(geometry, material);
            scene.add(points);

            const clock = new THREE.Clock();
            const animate = () => {
                requestAnimationFrame(animate);
                material.uniforms.time.value = clock.getElapsedTime();
                renderer.render(scene, camera);
            };
            animate();
        };

        // Initialize WebGL instances
        initLinesWebGL();
        initHalftoneWebGL();
    <\/script>
</body>
</html>`,ig=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Network Diagnostics</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <!-- GSAP & ScrollTrigger for Masked Reveal -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400&family=JetBrains+Mono:wght@200;300;400&display=swap" rel="stylesheet">
    <style>
        /* Essential mask utility for inner gradient borders */
        .mask-border {
            -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
            mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: destination-out;
            mask-composite: exclude;
        }
    </style>
</head>
<body class="bg-[#020804] text-white/90 antialiased min-h-screen flex items-center justify-center p-6 md:p-12 selection:bg-[#34d399]/20 font-sans relative overflow-hidden">

    <!-- Aura Asset Image Background Layer -->
    <div class="absolute inset-0 z-0 opacity-20 bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg')] bg-cover bg-center pointer-events-none mix-blend-screen"></div>

    <!-- WebGL-style Lines & Particles Background -->
    <canvas id="bg-waves" class="absolute inset-0 z-0 pointer-events-none opacity-40"></canvas>

    <main id="main-container" class="max-w-7xl w-full relative bg-white/[0.04] p-px z-10 backdrop-blur-sm shadow-2xl shadow-[#34d399]/5 rounded-sm">
        
        <div id="flashlight" class="absolute inset-0 z-0 opacity-0 transition-opacity duration-300 pointer-events-none" style="background: radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(52,211,153,0.08), transparent 40%);"></div>

        <!-- Corner Accents -->
        <div class="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 border border-[#34d399]/30 bg-[#020804] z-30"></div>
        <div class="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 border border-[#34d399]/30 bg-[#020804] z-30"></div>
        <div class="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 border border-[#34d399]/30 bg-[#020804] z-30"></div>
        <div class="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 border border-[#34d399]/30 bg-[#020804] z-30"></div>

        <!-- Horizontal Shooting Line -->
        <div class="hidden md:block absolute -top-px left-0 right-0 h-px overflow-hidden z-20 pointer-events-none">
            <div id="shoot-h" class="absolute top-0 left-0 w-64 h-full bg-gradient-to-r from-transparent via-[#34d399]/80 to-transparent"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-y-px md:gap-x-px relative z-10">
            
            <article class="relative flex flex-col py-12 md:p-12 bg-[#020804]/90 backdrop-blur-md">
                <!-- Border Gradient Overlay -->
                <div class="absolute inset-0 border border-transparent bg-[linear-gradient(to_bottom,rgba(52,211,153,0.35),transparent)] mask-border pointer-events-none z-20"></div>

                <header class="text-xs text-white/40 mb-16 uppercase tracking-widest font-mono flex items-center gap-3 font-extralight">
                    <iconify-icon icon="solar:cpu-linear" stroke-width="1.5" class="text-sm text-[#34d399] drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]"></iconify-icon>
                    CORE-X
                </header>
                <div class="flex-grow flex items-center justify-center mb-16 relative h-56 w-full">
                    <canvas id="canvas-layers" class="absolute inset-0 w-full h-full" style="touch-action: none;"></canvas>
                </div>
                <div>
                    <h3 class="text-lg font-extralight tracking-tight mb-3 text-white/90 flex items-center">
                        <span class="typewriter" data-text="Neural Synchrony"></span><span class="animate-pulse inline-block w-1 h-4 bg-[#34d399]/80 ml-2 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span>
                    </h3>
                    <p class="text-sm text-white/40 leading-relaxed font-extralight reveal-text">Optimized for zero-latency cognitive routing, maintaining absolute parity across decentralized processing nodes.</p>
                </div>
            </article>

            <article class="relative flex flex-col py-12 md:p-12 bg-[#020804]/90 backdrop-blur-md">
                <!-- Border Gradient Overlay -->
                <div class="absolute inset-0 border border-transparent bg-[linear-gradient(to_bottom,rgba(52,211,153,0.35),transparent)] mask-border pointer-events-none z-20"></div>
                
                <div class="hidden md:block absolute top-0 bottom-0 -left-px w-px overflow-hidden z-20 pointer-events-none">
                    <div id="shoot1" class="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-transparent via-[#34d399]/70 to-transparent"></div>
                </div>
                
                <header class="text-xs text-white/40 mb-16 uppercase tracking-widest font-mono flex items-center gap-3 font-extralight">
                    <iconify-icon icon="solar:server-square-linear" stroke-width="1.5" class="text-sm text-[#34d399] drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]"></iconify-icon>
                    LINK-Y
                </header>
                <div class="flex-grow flex items-center justify-center mb-16 relative h-56 w-full">
                    <canvas id="canvas-nodes" class="absolute inset-0 w-full h-full" style="touch-action: none;"></canvas>
                </div>
                <div>
                    <h3 class="text-lg font-extralight tracking-tight mb-3 text-white/90 flex items-center">
                        <span class="typewriter" data-text="Fluid Topologies"></span><span class="animate-pulse inline-block w-1 h-4 bg-[#34d399]/80 ml-2 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span>
                    </h3>
                    <p class="text-sm text-white/40 leading-relaxed font-extralight reveal-text">Self-healing network architectures that dynamically adjust vectors to circumvent bottlenecks and systemic anomalies.</p>
                </div>
            </article>

            <article class="relative flex flex-col py-12 md:p-12 bg-[#020804]/90 backdrop-blur-md">
                <!-- Border Gradient Overlay -->
                <div class="absolute inset-0 border border-transparent bg-[linear-gradient(to_bottom,rgba(52,211,153,0.35),transparent)] mask-border pointer-events-none z-20"></div>

                <div class="hidden md:block absolute top-0 bottom-0 -left-px w-px overflow-hidden z-20 pointer-events-none">
                    <div id="shoot2" class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-[#34d399]/60 to-transparent"></div>
                </div>
                <div class="hidden md:block absolute top-0 bottom-0 -right-px w-px overflow-hidden z-20 pointer-events-none">
                    <div id="shoot3" class="absolute top-0 left-0 w-full h-56 bg-gradient-to-b from-transparent via-[#34d399]/70 to-transparent"></div>
                </div>

                <header class="text-xs text-white/40 mb-16 uppercase tracking-widest font-mono flex items-center gap-3 font-extralight">
                    <iconify-icon icon="solar:network-linear" stroke-width="1.5" class="text-sm text-[#34d399] drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]"></iconify-icon>
                    GRID-Z
                </header>
                <div class="flex-grow flex items-center justify-center mb-16 relative h-56 w-full">
                    <canvas id="canvas-flow" class="absolute inset-0 w-full h-full" style="touch-action: none;"></canvas>
                </div>
                <div>
                    <h3 class="text-lg font-extralight tracking-tight mb-3 text-white/90 flex items-center">
                        <span class="typewriter" data-text="Elastic Matrices"></span><span class="animate-pulse inline-block w-1 h-4 bg-[#34d399]/80 ml-2 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span>
                    </h3>
                    <p class="text-sm text-white/40 leading-relaxed font-extralight reveal-text">Responsive structural frameworks that instantly allocate computational mass during spikes and retract to preserve efficiency.</p>
                </div>
            </article>

        </div>
    </main>

    <script>
        // WebGL-style Background (Lines & Particles)
        const bgCanvas = document.getElementById('bg-waves');
        const bgCtx = bgCanvas.getContext('2d', { alpha: true });
        let bw, bh, bgT = 0;
        const resizeBg = () => {
            bw = window.innerWidth; bh = window.innerHeight;
            bgCanvas.width = bw; bgCanvas.height = bh;
        };
        window.addEventListener('resize', resizeBg);
        resizeBg();

        const drawBg = () => {
            bgT += 0.012;
            bgCtx.clearRect(0, 0, bw, bh);
            bgCtx.save();
            bgCtx.translate(bw / 2, bh / 2 + 150);
            
            const cols = 32, rows = 22, sp = 65;
            bgCtx.lineWidth = 1;
            
            for(let z = 0; z < rows; z++) {
                for(let x = 0; x < cols; x++) {
                    const px = (x - cols/2) * sp;
                    const pz = z * sp;
                    const scale = 800 / (800 + pz);
                    const sx = px * scale;
                    const y = Math.sin(x * 0.3 + bgT) * Math.cos(z * 0.3 + bgT) * 60;
                    const sy = (y + 50) * scale - 200;

                    bgCtx.fillStyle = \`rgba(52,211,153, \${0.7 * scale})\`;
                    bgCtx.beginPath();
                    bgCtx.arc(sx, sy, 1.2 * scale, 0, Math.PI*2);
                    bgCtx.fill();

                    if (x > 0) {
                        const pxL = (x - 1 - cols/2) * sp;
                        const sxL = pxL * scale;
                        const yL = Math.sin((x - 1) * 0.3 + bgT) * Math.cos(z * 0.3 + bgT) * 60;
                        const syL = (yL + 50) * scale - 200;
                        bgCtx.strokeStyle = \`rgba(52,211,153, \${0.12 * scale})\`;
                        bgCtx.beginPath();
                        bgCtx.moveTo(sx, sy); bgCtx.lineTo(sxL, syL);
                        bgCtx.stroke();
                    }
                    if (z > 0) {
                        const pzU = (z - 1) * sp;
                        const scaleU = 800 / (800 + pzU);
                        const sxU = px * scaleU;
                        const yU = Math.sin(x * 0.3 + bgT) * Math.cos((z - 1) * 0.3 + bgT) * 60;
                        const syU = (yU + 50) * scaleU - 200;
                        bgCtx.strokeStyle = \`rgba(52,211,153, \${0.12 * scale})\`;
                        bgCtx.beginPath();
                        bgCtx.moveTo(sx, sy); bgCtx.lineTo(sxU, syU);
                        bgCtx.stroke();
                    }
                }
            }
            bgCtx.restore();
            requestAnimationFrame(drawBg);
        };
        drawBg();

        // Interactive & Shooting Lines
        const mainEl = document.getElementById('main-container');
        const flash = document.getElementById('flashlight');
        const s1 = document.getElementById('shoot1'), s2 = document.getElementById('shoot2');
        const s3 = document.getElementById('shoot3'), sh = document.getElementById('shoot-h');
        let pos1 = -200, pos2 = -400, pos3 = -300, posH = -300;

        mainEl.addEventListener('mousemove', (e) => {
            const rect = mainEl.getBoundingClientRect();
            flash.style.setProperty('--x', \`\${e.clientX - rect.left}px\`);
            flash.style.setProperty('--y', \`\${e.clientY - rect.top}px\`);
            flash.style.opacity = '1';
        });
        mainEl.addEventListener('mouseleave', () => flash.style.opacity = '0');

        const animateShoots = () => {
            const h = mainEl.offsetHeight || 1000, w = mainEl.offsetWidth || 1200;
            pos1 += 2.5; pos2 += 1.8; pos3 += 3; posH += 3.5;
            if (pos1 > h) pos1 = -200;
            if (pos2 > h) pos2 = -200;
            if (pos3 > h) pos3 = -200;
            if (posH > w) posH = -300;
            if (s1) s1.style.transform = \`translateY(\${pos1}px)\`;
            if (s2) s2.style.transform = \`translateY(\${pos2}px)\`;
            if (s3) s3.style.transform = \`translateY(\${pos3}px)\`;
            if (sh) sh.style.transform = \`translateX(\${posH}px)\`;
            requestAnimationFrame(animateShoots);
        };
        animateShoots();

        // Typewriter Effect
        document.querySelectorAll('.typewriter').forEach(el => {
            const text = el.getAttribute('data-text');
            let i = 0, isDeleting = false;
            const type = () => {
                i += isDeleting ? -1 : 1;
                el.textContent = text.substring(0, i);
                let delay = isDeleting ? 30 : 80;
                if (!isDeleting && i === text.length) { delay = 4000; isDeleting = true; }
                else if (isDeleting && i === 0) { delay = 1500; isDeleting = false; }
                setTimeout(type, delay);
            };
            type();
        });

        // GSAP Masked Staggered Word Reveal 
        gsap.registerPlugin(ScrollTrigger);
        document.querySelectorAll('.reveal-text').forEach((el) => {
            const words = el.innerText.split(' ');
            el.innerHTML = '';
            words.forEach(word => {
                const wrapper = document.createElement('span');
                wrapper.className = 'inline-block overflow-hidden mr-[0.25em] align-bottom leading-tight';
                const inner = document.createElement('span');
                inner.className = 'inline-block translate-y-full will-change-transform';
                inner.innerText = word;
                wrapper.appendChild(inner);
                el.appendChild(wrapper);
            });

            gsap.to(el.querySelectorAll('.will-change-transform'), {
                y: 0,
                ease: "power4.out",
                duration: 0.8,
                stagger: 0.02,
                scrollTrigger: {
                    trigger: el,
                    start: "top 95%",
                }
            });
        });

        // 3D Canvas Utilities
        const projectIso = (x, y, z) => {
            const angle = Math.PI / 6; 
            return { x: (x - z) * Math.cos(angle), y: y + (x + z) * Math.sin(angle) };
        };

        const setupCanvas = (id, renderFn) => {
            const canvas = document.getElementById(id);
            const ctx = canvas.getContext('2d', { alpha: true });
            let w, h, time = 0;
            const resize = () => {
                const rect = canvas.parentElement.getBoundingClientRect();
                w = rect.width; h = rect.height;
                const dpr = window.devicePixelRatio || 1;
                canvas.width = w * dpr; canvas.height = h * dpr;
                ctx.scale(dpr, dpr);
            };
            window.addEventListener('resize', resize);
            resize();
            const loop = () => {
                time += 0.015;
                ctx.clearRect(0, 0, w, h);
                ctx.save();
                ctx.translate(w / 2, h / 2 + 5);
                renderFn(ctx, time);
                ctx.restore();
                requestAnimationFrame(loop);
            };
            loop();
        };

        // Card 1: Fixed Cropping
        setupCanvas('canvas-layers', (ctx, t) => {
            const size = 42, layers = 5, gap = 20;
            ctx.lineWidth = 1;
            for (let i = layers - 1; i >= 0; i--) {
                const yOff = i * gap - (layers * gap) / 2 + Math.sin(t + i * 0.4) * 4;
                const p1 = projectIso(-size, yOff, -size), p2 = projectIso(size, yOff, -size);
                const p3 = projectIso(size, yOff, size), p4 = projectIso(-size, yOff, size);

                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y);
                ctx.lineTo(p3.x, p3.y); ctx.lineTo(p4.x, p4.y); ctx.closePath();
                
                ctx.fillStyle = '#020804'; ctx.fill();
                ctx.strokeStyle = i === 0 ? 'rgba(52,211,153,0.8)' : 'rgba(52,211,153,0.15)';
                ctx.stroke();

                if (i === 0) {
                    ctx.save();
                    const center = projectIso(0, yOff, 0);
                    ctx.translate(center.x, center.y); ctx.scale(1, 0.5);
                    const sqSize = size * 0.55;
                    ctx.beginPath(); ctx.rect(-sqSize, -sqSize, sqSize * 2, sqSize * 2);
                    ctx.strokeStyle = 'rgba(52,211,153,0.4)'; ctx.stroke();
                    ctx.clip();
                    for(let j = -sqSize; j < sqSize; j += 4) {
                        ctx.beginPath(); ctx.moveTo(-sqSize, j); ctx.lineTo(sqSize, j);
                        ctx.strokeStyle = 'rgba(52,211,153,0.2)'; ctx.stroke();
                    }
                    ctx.restore();
                }
                
                if (i < layers - 1) {
                    const nextY = (i+1) * gap - (layers * gap) / 2 + Math.sin(t + (i+1) * 0.4) * 4;
                    const p1Next = projectIso(-size, nextY, -size), p3Next = projectIso(size, nextY, size);
                    ctx.beginPath(); ctx.setLineDash([2, 2]);
                    ctx.moveTo(p1.x, p1.y); ctx.lineTo(p1Next.x, p1Next.y);
                    ctx.moveTo(p3.x, p3.y); ctx.lineTo(p3Next.x, p3Next.y);
                    ctx.strokeStyle = 'rgba(52,211,153,0.1)'; ctx.stroke();
                    ctx.setLineDash([]);
                }
            }
        });

        // Card 2
        const drawCube = (ctx, x, y, z, s, colorStr) => {
            const pts = [
                projectIso(x-s, y-s, z-s), projectIso(x+s, y-s, z-s), projectIso(x+s, y-s, z+s), projectIso(x-s, y-s, z+s),
                projectIso(x-s, y+s, z-s), projectIso(x+s, y+s, z-s), projectIso(x+s, y+s, z+s), projectIso(x-s, y+s, z+s)
            ];
            ctx.strokeStyle = colorStr; ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(pts[0].x, pts[0].y); ctx.lineTo(pts[1].x, pts[1].y); ctx.lineTo(pts[2].x, pts[2].y); ctx.lineTo(pts[3].x, pts[3].y); ctx.closePath();
            ctx.moveTo(pts[4].x, pts[4].y); ctx.lineTo(pts[5].x, pts[5].y); ctx.lineTo(pts[6].x, pts[6].y); ctx.lineTo(pts[7].x, pts[7].y); ctx.closePath();
            ctx.moveTo(pts[0].x, pts[0].y); ctx.lineTo(pts[4].x, pts[4].y);
            ctx.moveTo(pts[1].x, pts[1].y); ctx.lineTo(pts[5].x, pts[5].y);
            ctx.moveTo(pts[2].x, pts[2].y); ctx.lineTo(pts[6].x, pts[6].y);
            ctx.moveTo(pts[3].x, pts[3].y); ctx.lineTo(pts[7].x, pts[7].y);
            ctx.stroke();
        };

        setupCanvas('canvas-nodes', (ctx, t) => {
            const s = 22, float = Math.sin(t) * 4;
            drawCube(ctx, -35, -float, -35, s, 'rgba(52,211,153,0.15)');
            drawCube(ctx, 35, float, -35, s, 'rgba(52,211,153,0.15)');
            drawCube(ctx, -35, float, 35, s, 'rgba(52,211,153,0.15)');
            drawCube(ctx, 35, -float, 35, s, 'rgba(52,211,153,0.15)');
            drawCube(ctx, 0, Math.cos(t)*6 - 15, 0, s*0.9, 'rgba(52,211,153,0.6)'); 
        });

        // Card 3
        setupCanvas('canvas-flow', (ctx, t) => {
            const size = 65, segments = 22, step = (size * 2) / segments;
            ctx.lineWidth = 1;
            const getH = (x, z) => {
                const dist = Math.sqrt(x*x + z*z);
                const peak = Math.max(0, 45 - dist * 1.1);
                const wave = Math.sin(x*0.2 + t*1.5) * Math.cos(z*0.2 + t*1.5) * 5;
                return -peak - wave + 15;
            };

            for (let z = -size; z < size; z += step) {
                for (let x = -size; x < size; x += step) {
                    const y1 = getH(x, z), y2 = getH(x + step, z);
                    const y3 = getH(x + step, z + step), y4 = getH(x, z + step);
                    const p1 = projectIso(x, y1, z), p2 = projectIso(x + step, y2, z);
                    const p3 = projectIso(x + step, y3, z + step), p4 = projectIso(x, y4, z + step);

                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y);
                    ctx.lineTo(p3.x, p3.y); ctx.lineTo(p4.x, p4.y); ctx.closePath();
                    ctx.fillStyle = '#020804'; ctx.fill();

                    const heightRatio = Math.max(0, (-y1) / 30);
                    const alpha = 0.05 + heightRatio * 0.4;
                    ctx.strokeStyle = heightRatio > 0.6 ? \`rgba(52,211,153,\${alpha + 0.3})\` : \`rgba(52,211,153,\${alpha + 0.05})\`;
                    ctx.stroke();
                }
            }
        });
    <\/script>
</body>
</html>`,w8=`<!doctype html>
<html lang="en" data-autofocus-guard-installed="1"><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vanguard Security - Intelligence</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <!-- GSAP for Masked Reveal -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
<style>*, ::before, ::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }/* ! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com */*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}::after,::before{--tw-content:''}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0px}.top-0{top:0px}.z-0{z-index:0}.z-50{z-index:50}.z-10{z-index:10}.mx-4{margin-left:1rem;margin-right:1rem}.mx-auto{margin-left:auto;margin-right:auto}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mt-2{margin-top:0.5rem}.mt-auto{margin-top:auto}.flex{display:flex}.grid{display:grid}.h-1{height:0.25rem}.h-32{height:8rem}.h-\\[65vh\\]{height:65vh}.h-full{height:100%}.min-h-screen{min-height:100vh}.min-h-\\[500px\\]{min-height:500px}.w-full{width:100%}.max-w-2xl{max-width:42rem}.max-w-4xl{max-width:56rem}.max-w-7xl{max-width:80rem}.max-w-\\[40px\\]{max-width:40px}.grid-cols-1{grid-template-columns:repeat(1, minmax(0, 1fr))}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.items-end{align-items:flex-end}.items-center{align-items:center}.items-baseline{align-items:baseline}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1\\.5{gap:0.375rem}.gap-2{gap:0.5rem}.gap-3{gap:0.75rem}.gap-6{gap:1.5rem}.gap-\\[2px\\]{gap:2px}.overflow-hidden{overflow:hidden}.rounded{border-radius:0.25rem}.rounded-md{border-radius:0.375rem}.rounded-sm{border-radius:0.125rem}.rounded-xl{border-radius:0.75rem}.border-b{border-bottom-width:1px}.border-white\\/5{border-color:rgb(255 255 255 / 0.05)}.bg-\\[\\#0a0a0a\\]{--tw-bg-opacity:1;background-color:rgb(10 10 10 / var(--tw-bg-opacity, 1))}.bg-\\[\\#0a0a0a\\]\\/80{background-color:rgb(10 10 10 / 0.8)}.bg-\\[\\#1a1a1a\\]{--tw-bg-opacity:1;background-color:rgb(26 26 26 / var(--tw-bg-opacity, 1))}.bg-blue-600{--tw-bg-opacity:1;background-color:rgb(37 99 235 / var(--tw-bg-opacity, 1))}.bg-\\[\\#121212\\]{--tw-bg-opacity:1;background-color:rgb(18 18 18 / var(--tw-bg-opacity, 1))}.bg-blue-500\\/80{background-color:rgb(59 130 246 / 0.8)}.bg-purple-500\\/80{background-color:rgb(168 85 247 / 0.8)}.bg-slate-500{--tw-bg-opacity:1;background-color:rgb(100 116 139 / var(--tw-bg-opacity, 1))}.p-6{padding:1.5rem}.px-1\\.5{padding-left:0.375rem;padding-right:0.375rem}.px-3{padding-left:0.75rem;padding-right:0.75rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-0\\.5{padding-top:0.125rem;padding-bottom:0.125rem}.py-1\\.5{padding-top:0.375rem;padding-bottom:0.375rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-12{padding-top:3rem;padding-bottom:3rem}.pt-16{padding-top:4rem}.pt-6{padding-top:1.5rem}.text-center{text-align:center}.font-sans{font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"}.text-base{font-size:1rem;line-height:1.5rem}.text-xs{font-size:0.75rem;line-height:1rem}.text-5xl{font-size:3rem;line-height:1}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.font-light{font-weight:300}.leading-relaxed{line-height:1.625}.leading-tight{line-height:1.25}.tracking-tight{letter-spacing:-0.025em}.tracking-wide{letter-spacing:0.025em}.text-slate-200{--tw-text-opacity:1;color:rgb(226 232 240 / var(--tw-text-opacity, 1))}.text-slate-300{--tw-text-opacity:1;color:rgb(203 213 225 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.text-slate-400{--tw-text-opacity:1;color:rgb(148 163 184 / var(--tw-text-opacity, 1))}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139 / var(--tw-text-opacity, 1))}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.opacity-80{opacity:0.8}.backdrop-blur-md{--tw-backdrop-blur:blur(12px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition-colors{transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.duration-300{transition-duration:300ms}.selection\\:bg-blue-500\\/30 *::selection{background-color:rgb(59 130 246 / 0.3)}.selection\\:bg-blue-500\\/30::selection{background-color:rgb(59 130 246 / 0.3)}.before\\:absolute::before{content:var(--tw-content);position:absolute}.before\\:inset-0::before{content:var(--tw-content);inset:0px}.before\\:-z-10::before{content:var(--tw-content);z-index:-10}.before\\:rounded-md::before{content:var(--tw-content);border-radius:0.375rem}.before\\:rounded-xl::before{content:var(--tw-content);border-radius:0.75rem}.before\\:bg-gradient-to-b::before{content:var(--tw-content);background-image:linear-gradient(to bottom, var(--tw-gradient-stops))}.before\\:from-white\\/20::before{content:var(--tw-content);--tw-gradient-from:rgb(255 255 255 / 0.2) var(--tw-gradient-from-position);--tw-gradient-to:rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.before\\:from-white\\/15::before{content:var(--tw-content);--tw-gradient-from:rgb(255 255 255 / 0.15) var(--tw-gradient-from-position);--tw-gradient-to:rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.before\\:to-transparent::before{content:var(--tw-content);--tw-gradient-to:transparent var(--tw-gradient-to-position)}.before\\:p-\\[1px\\]::before{content:var(--tw-content);padding:1px}.before\\:transition-colors::before{content:var(--tw-content);transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.before\\:duration-500::before{content:var(--tw-content);transition-duration:500ms}.before\\:\\[mask-composite\\:exclude\\]::before{content:var(--tw-content);-webkit-mask-composite:xor;mask-composite:exclude}.before\\:\\[mask\\:linear-gradient\\(\\#fff_0_0\\)_content-box\\2c linear-gradient\\(\\#fff_0_0\\)\\]::before{content:var(--tw-content);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0)}.hover\\:bg-\\[\\#222\\]:hover{--tw-bg-opacity:1;background-color:rgb(34 34 34 / var(--tw-bg-opacity, 1))}.hover\\:before\\:from-white\\/25:hover::before{content:var(--tw-content);--tw-gradient-from:rgb(255 255 255 / 0.25) var(--tw-gradient-from-position);--tw-gradient-to:rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.group:hover .group-hover\\:opacity-100{opacity:1}@media (min-width: 768px){.md\\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr))}.md\\:text-7xl{font-size:4.5rem;line-height:1}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width: 1024px){.lg\\:grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr))}.lg\\:text-2xl{font-size:1.5rem;line-height:2rem}.lg\\:text-8xl{font-size:6rem;line-height:1}}</style><meta name="disabled-font-classes" content="font-inter,font-roboto,font-poppins,font-playfair,font-merriweather,font-bricolage,font-work-sans,font-pt-serif,font-space-mono,font-cormorant,font-newsreader,font-dm-sans,font-oswald,font-geist-mono,font-space-grotesk,font-montserrat,font-quicksand,font-google-sans-flex,font-nunito,font-geist,font-jakarta,font-instrument-serif"><link id="all-fonts-link-font-manrope" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&amp;display=swap"><style id="all-fonts-style-font-manrope">.font-manrope { font-family: 'Manrope', sans-serif !important; }</style></head>
<body class="bg-[#0a0a0a] text-slate-200 min-h-screen selection:bg-blue-500/30 antialiased font-sans">

    <!-- Header -->
    <header class="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div class="flex items-center gap-2">
            <span class="text-base text-white tracking-tight font-medium font-sans">Vanguard</span>
            <span class="bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded tracking-wide font-sans">Security</span>
        </div>
        <button class="relative flex items-center gap-1.5 bg-[#1a1a1a] hover:bg-[#222] transition-colors text-slate-300 text-xs px-3 py-1.5 rounded-md z-0 before:absolute before:inset-0 before:-z-10 before:rounded-md before:p-[1px] before:bg-gradient-to-b before:from-white/20 before:to-transparent before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] before:[WebkitMaskComposite:xor] font-sans">
            <iconify-icon icon="solar:alt-arrow-left-linear" stroke-width="1.5"></iconify-icon>
            Back to Portal
        </button>
    </header>

    <!-- Hero Section with Canvas Animation & Aura Background -->
    <section class="relative w-full h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden border-b border-white/5 pt-16">
        <!-- Aura Abstract Asset Image Background -->
        <div class="absolute inset-0 z-0 opacity-20 mix-blend-screen bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_3840w.jpg')] bg-cover bg-center"></div>
        
        <!-- WebGL/Canvas Background -->
        <canvas id="particle-canvas" class="absolute inset-0 z-0 w-full h-full opacity-80" width="1519" height="715"></canvas>
        
        <!-- Hero Content -->
        <div class="relative z-10 text-center mx-4 max-w-4xl w-full">
            <h1 class="reveal-text text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-tight mb-6 font-manrope font-light">
                Autonomous Cyber<br>Immunity
            </h1>
            <p class="reveal-text text-lg md:text-xl lg:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-manrope font-light">
                Securing global infrastructure through AI-driven threat intelligence and proactive zero-day neutralization.
            </p>
        </div>
    </section>

    <!-- Content Grid Section -->
    <section class="max-w-7xl mx-auto px-6 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <!-- Card 1 -->
            <div class="relative bg-[#121212] rounded-xl p-6 h-full flex flex-col group z-0 before:absolute before:inset-0 before:-z-10 before:rounded-xl before:p-[1px] before:bg-gradient-to-b before:from-white/15 hover:before:from-white/25 before:to-transparent before:transition-colors before:duration-500 before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] before:[WebkitMaskComposite:xor]">
                <div class="mb-4">
                    <h3 class="reveal-text text-base text-white tracking-tight flex items-baseline gap-2 font-medium font-sans">
                        Sentinel Protocol <span class="text-xs text-slate-500 font-normal font-sans">(Threat Detection)</span>
                    </h3>
                    <p class="text-sm text-slate-400 mt-2 leading-relaxed font-normal font-sans">
                        Deep learning algorithms monitoring data streams to isolate vulnerabilities before they manifest.
                    </p>
                </div>
                
                <!-- Animated Dot Chart -->
                <div class="mt-auto pt-6 flex items-end gap-3 h-32 opacity-80 group-hover:opacity-100 transition-opacity">
                    <!-- Bars -->
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                    </div>
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                    </div>
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                    </div>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="relative bg-[#121212] rounded-xl p-6 h-full flex flex-col group z-0 before:absolute before:inset-0 before:-z-10 before:rounded-xl before:p-[1px] before:bg-gradient-to-b before:from-white/15 hover:before:from-white/25 before:to-transparent before:transition-colors before:duration-500 before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] before:[WebkitMaskComposite:xor]">
                <div class="mb-4">
                    <h3 class="reveal-text text-base text-white tracking-tight flex items-baseline gap-2 font-medium font-sans">
                        Nexus Guardian <span class="text-xs text-slate-500 font-normal font-sans">(Node Security)</span>
                    </h3>
                    <p class="text-sm text-slate-400 mt-2 leading-relaxed font-normal font-sans">
                        Heuristic analysis tracking process execution and memory states to halt malicious payloads instantly.
                    </p>
                </div>
                
                <!-- Animated Dot Chart (Purple tint) -->
                <div class="mt-auto pt-6 flex items-end gap-3 h-32 opacity-80 group-hover:opacity-100 transition-opacity">
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                    </div>
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                    </div>
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                    </div>
                </div>
            </div>

            <!-- Card 3 -->
            <div class="relative bg-[#121212] rounded-xl p-6 h-full flex flex-col group z-0 before:absolute before:inset-0 before:-z-10 before:rounded-xl before:p-[1px] before:bg-gradient-to-b before:from-white/15 hover:before:from-white/25 before:to-transparent before:transition-colors before:duration-500 before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] before:[WebkitMaskComposite:xor]">
                <div class="mb-4">
                    <h3 class="reveal-text text-base text-white tracking-tight flex items-baseline gap-2 font-medium font-sans">
                        Aether Monitor <span class="text-xs text-slate-500 font-normal font-sans">(Cloud Defense)</span>
                    </h3>
                    <p class="text-sm text-slate-400 mt-2 leading-relaxed font-normal font-sans">
                        Continuous validation of distributed environments and access controls to maintain absolute state integrity.
                    </p>
                </div>
                
                <!-- Animated Dot Chart (Blue tint) -->
                <div class="mt-auto pt-6 flex items-end gap-3 h-32 opacity-80 group-hover:opacity-100 transition-opacity">
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                    </div>
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- Scripts -->
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            // Text Masked Reveal with GSAP Split Logic
            document.querySelectorAll('.reveal-text').forEach(el => {
                const html = el.innerHTML;
                const newHtml = html.split(/(<br\\s*\\/?>|\\s+)/).map(part => {
                    if (part.match(/<br/i)) return part;
                    if (part.trim() === '') return part; 
                    return \`<span style="display:inline-block; overflow:hidden; vertical-align:top;"><span class="reveal-word" style="display:inline-block; transform:translateY(100%); opacity:0;">\${part}</span></span>\`;
                }).join('');
                el.innerHTML = newHtml;
            });

            gsap.registerPlugin(ScrollTrigger);
            gsap.utils.toArray('.reveal-text').forEach(el => {
                gsap.to(el.querySelectorAll('.reveal-word'), {
                    y: '0%',
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.04,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 90%'
                    }
                });
            });

            // Chart Animation Logic
            setInterval(() => {
                document.querySelectorAll('.chart-col').forEach(col => {
                    const dots = col.querySelectorAll('.chart-dot');
                    const activeCount = Math.floor(Math.random() * (dots.length + 1));
                    dots.forEach((dot, index) => {
                        dot.style.opacity = index < activeCount ? '1' : '0.15';
                    });
                });
            }, 600);

            // Canvas Background Logic
            const canvas = document.getElementById('particle-canvas');
            if (canvas) {
                const ctx = canvas.getContext('2d');
                let width, height;
                
                const spacing = 16;
                const dotRadius = 1.5;
                let time = 0;

                function resize() {
                    width = canvas.width = canvas.offsetWidth;
                    height = canvas.height = canvas.offsetHeight;
                }
                
                window.addEventListener('resize', resize);
                resize();

                function draw() {
                    ctx.clearRect(0, 0, width, height);
                    
                    const cols = Math.floor(width / spacing);
                    const rows = Math.floor(height / spacing);
                    
                    const offsetX = (width - cols * spacing) / 2;
                    const offsetY = (height - rows * spacing) / 2;

                    for (let i = 0; i <= cols; i++) {
                        for (let j = 0; j <= rows; j++) {
                            const x = offsetX + i * spacing;
                            const y = offsetY + j * spacing;
                            
                            const nx = i * 0.1;
                            const ny = j * 0.1;
                            
                            const wave1 = Math.sin(nx + time * 0.5) * Math.cos(ny - time * 0.3);
                            const wave2 = Math.sin(nx * 0.5 - ny * 0.5 + time * 0.8);
                            const value = wave1 + wave2;

                            if (value > 0.1) {
                                ctx.beginPath();
                                ctx.arc(x, y, dotRadius, 0, Math.PI * 2);

                                const highlightCheck = Math.sin(i * 12.34) * Math.cos(j * 56.78);
                                
                                if (highlightCheck > 0.98) {
                                    ctx.fillStyle = '#3b82f6'; // Blue highlight
                                } else if (highlightCheck < -0.98) {
                                    ctx.fillStyle = '#8b5cf6'; // Purple highlight
                                } else {
                                    const alpha = Math.min(0.6, (value - 0.1) * 0.8);
                                    ctx.fillStyle = \`rgba(148, 163, 184, \${alpha})\`;
                                }
                                
                                ctx.fill();
                            }
                        }
                    }
                    
                    time += 0.02;
                    requestAnimationFrame(draw);
                }
                
                draw();
            }
        });
    <\/script>

</body></html>`,_8=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Skeuomorphic Toggle UI - Blue Remix</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>
<body class="bg-slate-50 flex items-center justify-center min-h-screen p-4 antialiased" style="background-image: linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px); background-size: 120px 120px; background-position: center center;">

    <!-- Card Container with Premium Gradient Border -->
    <div id="toggle-card" class="relative rounded-[2rem] w-full max-w-[380px] shadow-[0_25px_50px_-12px_rgba(15,23,42,0.12)] p-[1px] bg-gradient-to-b from-slate-200/80 via-slate-100/50 to-slate-50/20 z-10">
        
        <div class="bg-white rounded-[calc(2rem-1px)] w-full h-full overflow-hidden flex flex-col relative">
            
            <!-- Top Section: 3D Environment -->
            <div class="relative h-64 w-full flex items-center justify-center overflow-hidden" style="background: radial-gradient(circle at 50% 50%, #f0f7ff 0%, #ffffff 80%);">
                
                <!-- Light Rays -->
                <div class="absolute inset-0 pointer-events-none opacity-40" style="background: repeating-conic-gradient(from 0deg at 50% -10%, rgba(59, 130, 246, 0.04) 0deg, transparent 4deg, transparent 8deg, rgba(59, 130, 246, 0.04) 12deg);"></div>

                <!-- Soft Overlay Shadows -->
                <div class="absolute inset-0 pointer-events-none" style="box-shadow: inset 0 20px 40px -10px rgba(0,0,0,0.04), inset 0 -20px 40px -10px rgba(59, 130, 246, 0.05);"></div>

                <!-- Simulated WebGL Waves / Ripples -->
                <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <!-- Ambient Wave Base -->
                    <div class="absolute bottom-0 w-full h-32" style="background: radial-gradient(ellipse at 50% 100%, rgba(59, 130, 246, 0.08) 0%, transparent 70%);"></div>
                    
                    <!-- Outer Ripple -->
                    <div class="absolute w-[320px] h-[160px] rounded-[80px]" style="border: 1px solid rgba(96, 165, 250, 0.05); box-shadow: 0 0 30px rgba(96, 165, 250, 0.06), inset 0 0 20px rgba(96, 165, 250, 0.03);"></div>
                    <!-- Middle Ripple -->
                    <div class="absolute w-[260px] h-[120px] rounded-[60px]" style="border: 1px solid rgba(96, 165, 250, 0.12); box-shadow: 0 0 20px rgba(96, 165, 250, 0.1), inset 0 0 15px rgba(96, 165, 250, 0.05);"></div>
                    <!-- Inner Ripple -->
                    <div class="absolute w-[220px] h-[90px] rounded-[45px]" style="border: 1px solid rgba(96, 165, 250, 0.2); box-shadow: 0 0 15px rgba(96, 165, 250, 0.18), inset 0 0 10px rgba(96, 165, 250, 0.1);"></div>
                </div>

                <!-- Dotted Pattern Arc -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[120px] pointer-events-none" style="mask-image: radial-gradient(circle at bottom, transparent 50px, black 51px); -webkit-mask-image: radial-gradient(circle at bottom, transparent 50px, black 51px);">
                    <div class="w-full h-full opacity-40" style="background-image: radial-gradient(rgba(59, 130, 246, 0.7) 1.5px, transparent 1.5px); background-size: 8px 8px; mask-image: linear-gradient(to bottom, black, transparent); -webkit-mask-image: linear-gradient(to bottom, black, transparent);"></div>
                </div>

                <!-- Skeuomorphic Toggle Control -->
                <div id="skeuomorphic-toggle" role="switch" aria-checked="true" tabindex="0" class="relative z-10 w-48 h-16 rounded-full p-1.5 cursor-pointer select-none" style="background: repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px), linear-gradient(180deg, #dbeafe 0%, #93c5fd 100%); box-shadow: inset 0 4px 8px rgba(0,0,0,0.1), inset 0 -2px 4px rgba(255,255,255,0.7), 0 0 0 6px rgba(239, 246, 255, 0.8), 0 0 25px 5px rgba(96, 165, 250, 0.4); border: 1px solid #60a5fa; transition: background 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;">
                    <div id="skeuomorphic-thumb" class="absolute top-1.5 left-1.5 w-[116px] h-[calc(100%-0.75rem)] rounded-full flex items-center justify-center" style="background: linear-gradient(180deg, #ffffff 0%, #f4f8ff 100%); box-shadow: 0 10px 20px -4px rgba(37, 99, 235, 0.3), 0 4px 6px -2px rgba(0,0,0,0.04), inset 0 3px 4px rgba(255,255,255,1), inset 0 -2px 4px rgba(96, 165, 250, 0.2); border: 1px solid #e0edfa; transform: translateX(64px); transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease;">
                        <span class="text-sm font-normal text-slate-800 tracking-wide" style="text-shadow: 0 1px 1px rgba(255,255,255,0.9); transition: color 0.35s ease, opacity 0.35s ease;">Live Sync</span>
                    </div>
                </div>
            </div>

            <!-- Bottom Section: Content -->
            <div class="p-7 pb-9 bg-white z-20 relative">
                <!-- Icon -->
                <div class="w-8 h-8 rounded-[0.6rem] mb-4 flex items-center justify-center" style="background: linear-gradient(135deg, #60a5fa 0%, #2563eb 100%); box-shadow: inset 0 2px 2px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.1), 0 4px 8px -2px rgba(37, 99, 235, 0.4); border: 1px solid #1d4ed8;">
                    <iconify-icon icon="solar:server-square-linear" class="text-white text-base" style="filter: drop-shadow(0 1px 1px rgba(0,0,0,0.2));"></iconify-icon>
                </div>
                
                <!-- Text -->
                <h2 class="text-xl font-normal tracking-tight text-slate-900 mb-1.5 mask-reveal">Real-time Updates</h2>
                <p class="text-sm text-slate-500 leading-relaxed mask-reveal">Seamless background integration keeps everything current.</p>
            </div>
            
        </div>
    </div>

    <script>
        (function () {
            var toggle = document.getElementById('skeuomorphic-toggle');
            var thumb = document.getElementById('skeuomorphic-thumb');
            var label = thumb && thumb.querySelector('span');
            if (!toggle || !thumb) return;

            var ON_BG = 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px), linear-gradient(180deg, #dbeafe 0%, #93c5fd 100%)';
            var OFF_BG = 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px), linear-gradient(180deg, #e2e8f0 0%, #cbd5e1 100%)';
            var ON_SHADOW = 'inset 0 4px 8px rgba(0,0,0,0.1), inset 0 -2px 4px rgba(255,255,255,0.7), 0 0 0 6px rgba(239, 246, 255, 0.8), 0 0 25px 5px rgba(96, 165, 250, 0.4)';
            var OFF_SHADOW = 'inset 0 4px 8px rgba(0,0,0,0.12), inset 0 -2px 4px rgba(255,255,255,0.55), 0 0 0 6px rgba(241, 245, 249, 0.9), 0 0 18px 2px rgba(148, 163, 184, 0.25)';
            var ON_BORDER = '#60a5fa';
            var OFF_BORDER = '#94a3b8';
            var ON_THUMB_SHADOW = '0 10px 20px -4px rgba(37, 99, 235, 0.3), 0 4px 6px -2px rgba(0,0,0,0.04), inset 0 3px 4px rgba(255,255,255,1), inset 0 -2px 4px rgba(96, 165, 250, 0.2)';
            var OFF_THUMB_SHADOW = '0 8px 16px -4px rgba(15, 23, 42, 0.18), 0 3px 5px -2px rgba(0,0,0,0.05), inset 0 3px 4px rgba(255,255,255,1), inset 0 -2px 4px rgba(148, 163, 184, 0.25)';

            function travel() {
                return Math.max(0, toggle.clientWidth - thumb.clientWidth - 12);
            }

            function apply(on) {
                toggle.setAttribute('aria-checked', on ? 'true' : 'false');
                toggle.style.background = on ? ON_BG : OFF_BG;
                toggle.style.boxShadow = on ? ON_SHADOW : OFF_SHADOW;
                toggle.style.borderColor = on ? ON_BORDER : OFF_BORDER;
                thumb.style.transform = 'translateX(' + (on ? travel() : 0) + 'px)';
                thumb.style.boxShadow = on ? ON_THUMB_SHADOW : OFF_THUMB_SHADOW;
                if (label) {
                    label.style.opacity = on ? '1' : '0.72';
                    label.style.color = on ? '#1e293b' : '#475569';
                }
            }

            function flip() {
                apply(toggle.getAttribute('aria-checked') !== 'true');
            }

            apply(true);
            toggle.addEventListener('click', flip);
            toggle.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    flip();
                }
            });
            window.addEventListener('resize', function () {
                apply(toggle.getAttribute('aria-checked') === 'true');
            });
        })();

        document.addEventListener("DOMContentLoaded", () => {
            if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
            gsap.registerPlugin(ScrollTrigger);
            
            document.querySelectorAll('.mask-reveal').forEach(el => {
                const text = el.innerText;
                el.innerHTML = '';
                
                text.split(/(\\s+)/).forEach(part => {
                    if (!part.trim()) {
                        el.appendChild(document.createTextNode(part));
                        return;
                    }
                    
                    const wrapper = document.createElement('span');
                    wrapper.style.display = 'inline-block';
                    wrapper.style.overflow = 'hidden';
                    wrapper.style.verticalAlign = 'bottom';
                    
                    const inner = document.createElement('span');
                    inner.innerText = part;
                    inner.style.display = 'inline-block';
                    inner.className = 'reveal-word';
                    inner.style.transform = 'translateY(110%)';
                    inner.style.opacity = '0';
                    
                    wrapper.appendChild(inner);
                    el.appendChild(wrapper);
                });
                
                gsap.to(el.querySelectorAll('.reveal-word'), {
                    y: '0%',
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.04,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 95%',
                    }
                });
            });
        });
    <\/script>
</body>
</html>`,S8=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quantum Matrix State</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400&family=Geist:wght@300;400&family=Gloock&display=swap" rel="stylesheet">
</head>
<body class="bg-[#050505] text-white h-screen w-screen overflow-hidden relative selection:bg-white/20 selection:text-white">
    
    <!-- WebGL Background Canvas -->
    <canvas id="glcanvas" class="absolute inset-0 z-0 w-full h-full"></canvas>

    <!-- Aura Asset Image Overlay (Mix Blend Texture) -->
    <div class="absolute inset-0 z-10 opacity-30 mix-blend-screen pointer-events-none bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg')] bg-cover bg-center"></div>

    <!-- Structural Framing Lines with Corner Squares -->
    <div class="absolute inset-6 md:inset-12 border border-white/10 pointer-events-none z-20 transition-all duration-1000 fade-target" style="opacity: 0;">
        <div class="absolute -top-1 -left-1 w-2 h-2 border border-white/30 bg-[#050505]"></div>
        <div class="absolute -top-1 -right-1 w-2 h-2 border border-white/30 bg-[#050505]"></div>
        <div class="absolute -bottom-1 -left-1 w-2 h-2 border border-white/30 bg-[#050505]"></div>
        <div class="absolute -bottom-1 -right-1 w-2 h-2 border border-white/30 bg-[#050505]"></div>
    </div>

    <!-- Main Content Overlay -->
    <main class="absolute inset-0 z-30 p-12 md:p-20 flex flex-col justify-between pointer-events-none">
        
        <!-- Top Row: Editorial Grid Metadata -->
        <header class="grid grid-cols-2 md:grid-cols-3 w-full gap-8 fade-target transition-all duration-1000 ease-out font-['DM_Mono'] uppercase" style="opacity: 0; transform: translateY(10px);">
            <div class="flex flex-col gap-2 text-xs text-gray-500 tracking-widest font-light">
                <span class="text-gray-200">SYSTEM — 09</span>
                <span>NETWORK UPLINK</span>
            </div>
            <div class="hidden md:flex flex-col gap-2 text-xs text-gray-500 tracking-widest font-light text-center">
                <span class="text-gray-200">PING 1.2MS</span>
                <span>SYNC COMPLETE</span>
            </div>
            <div class="flex flex-col gap-2 text-xs text-gray-500 tracking-widest font-light text-right">
                <span class="text-gray-200">SECURITY</span>
                <span>SECURED</span>
            </div>
        </header>

        <!-- Middle: Dashboard Layout -->
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-12 md:gap-8 fade-target transition-all duration-1000 ease-out flex-1 mt-12 md:mt-0" style="opacity: 0; transform: translateY(10px);">
            
            <!-- Left: Title & Context -->
            <section class="flex-shrink-0 z-40 pointer-events-auto">
                <h2 class="font-['Gloock'] text-5xl md:text-7xl font-normal tracking-tight text-white leading-none uppercase">
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">QUANTUM</span></span><br>
                    <span class="inline-block overflow-hidden align-bottom italic text-gray-300 pr-4"><span class="reveal-word inline-block translate-y-full">MATRIX</span></span>
                </h2>
                <p class="font-['Geist'] text-sm text-gray-400 mt-6 max-w-xs font-light leading-relaxed">
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">Continuous</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">monitoring</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">of</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">decentralized</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">server</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">arrays.</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">All</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">telemetry</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">data</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">is</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">perfectly</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">synchronized</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">across</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">the</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">global</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">infrastructure</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">network.</span></span>
                </p>
            </section>

            <!-- Right: Telemetry Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl pointer-events-auto font-['Geist'] z-40">
                <!-- Metric Card 1 -->
                <div class="p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent h-full">
                    <div class="bg-[#050505]/70 backdrop-blur-md p-5 flex flex-col gap-4 hover:bg-white/5 transition-colors duration-500 h-full">
                        <div class="flex justify-between items-center text-xs font-['DM_Mono'] text-gray-400 tracking-widest uppercase">
                            <span>Bandwidth</span>
                            <iconify-icon icon="solar:graph-up-linear" stroke-width="1.5" class="text-base text-gray-200"></iconify-icon>
                        </div>
                        <div class="text-3xl font-normal tracking-tight text-white">142.8<span class="text-sm text-gray-500 ml-1 font-light">GB/s</span></div>
                        <div class="w-full h-0.5 bg-white/10 mt-2">
                            <div class="h-full bg-gray-300 w-[88%]"></div>
                        </div>
                    </div>
                </div>
                
                <!-- Metric Card 2 -->
                <div class="p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent h-full">
                    <div class="bg-[#050505]/70 backdrop-blur-md p-5 flex flex-col gap-4 hover:bg-white/5 transition-colors duration-500 h-full">
                        <div class="flex justify-between items-center text-xs font-['DM_Mono'] text-gray-400 tracking-widest uppercase">
                            <span>Server Uplinks</span>
                            <iconify-icon icon="solar:server-square-linear" stroke-width="1.5" class="text-base text-gray-200"></iconify-icon>
                        </div>
                        <div class="text-3xl font-normal tracking-tight text-white">8,192</div>
                        <div class="flex items-end gap-1 h-4 mt-2 opacity-70">
                            <div class="w-full bg-white/20 h-1/2"></div>
                            <div class="w-full bg-white/40 h-3/4"></div>
                            <div class="w-full bg-white/30 h-1/3"></div>
                            <div class="w-full bg-white/60 h-full"></div>
                            <div class="w-full bg-white/50 h-2/3"></div>
                            <div class="w-full bg-white/80 h-[90%]"></div>
                        </div>
                    </div>
                </div>

                <!-- Metric Card 3 -->
                <div class="p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent h-full">
                    <div class="bg-[#050505]/70 backdrop-blur-md p-5 flex flex-col gap-4 hover:bg-white/5 transition-colors duration-500 h-full">
                        <div class="flex justify-between items-center text-xs font-['DM_Mono'] text-gray-400 tracking-widest uppercase">
                            <span>Health</span>
                            <div class="w-1.5 h-1.5 rounded-full bg-gray-200 animate-pulse"></div>
                        </div>
                        <div class="text-xl font-normal tracking-tight text-gray-200 leading-snug mt-auto">
                            Systems nominal across all primary regions.
                        </div>
                    </div>
                </div>

                <!-- Metric Card 4 -->
                <div class="p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent h-full">
                    <div class="bg-[#050505]/70 backdrop-blur-md p-5 flex flex-col gap-4 hover:bg-white/5 transition-colors duration-500 h-full">
                        <div class="flex justify-between items-center text-xs font-['DM_Mono'] text-gray-400 tracking-widest uppercase">
                            <span>Firewalls</span>
                            <iconify-icon icon="solar:shield-check-linear" stroke-width="1.5" class="text-base text-gray-200"></iconify-icon>
                        </div>
                        <div class="flex flex-wrap gap-2 mt-auto font-['DM_Mono']">
                            <span class="text-xs border border-white/10 px-2 py-1 text-gray-300">AES-256</span>
                            <span class="text-xs border border-white/10 px-2 py-1 text-gray-300">BIOMETRIC</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom Row: Status Footer -->
        <footer class="w-full flex justify-between items-end fade-target transition-all duration-1000 ease-out mt-8" style="opacity: 0; transform: translateY(10px);">
            <div class="flex items-center gap-3 text-xs text-gray-500 tracking-widest font-['DM_Mono'] uppercase font-light">
                <iconify-icon icon="solar:radar-linear" stroke-width="1.5" class="text-lg text-gray-200"></iconify-icon>
                <span class="hidden md:inline">MONITORING SECTORS</span>
            </div>
            <div class="flex flex-col gap-2 text-xs text-gray-500 tracking-widest font-['DM_Mono'] uppercase font-light text-right">
                <span class="text-gray-200">ROOT.USER</span>
                <span>SESSION ACTIVE</span>
            </div>
        </footer>
    </main>

    <!-- UI Animation Logic -->
    <script>
        window.addEventListener('load', () => {
            gsap.registerPlugin(ScrollTrigger);

            // Initial UI fade
            document.querySelectorAll('.fade-target').forEach((el, i) => {
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, i * 150 + 100);
            });

            // Masked word reveal
            gsap.to('.reveal-word', {
                scrollTrigger: {
                    trigger: '.reveal-word',
                    start: 'top 95%',
                },
                y: '0%',
                duration: 0.8,
                stagger: 0.03,
                ease: 'power4.out',
                delay: 0.3
            });
        });
    <\/script>

    <!-- WebGL Logic -->
    <script>
        const canvas = document.getElementById('glcanvas');
        const gl = canvas.getContext('webgl');

        let mouseX = -1000, mouseY = -1000;
        let lastMouseMove = 0;
        let currentMouseActive = 0.0;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = canvas.clientHeight - e.clientY;
            lastMouseMove = Date.now();
        });

        const vsSource = \`
            attribute vec4 aVertexPosition;
            void main() {
                gl_Position = aVertexPosition;
            }
        \`;

        const fsSource = \`
            precision highp float;
            uniform vec2 u_resolution;
            uniform float u_time;
            uniform vec2 u_mouse;
            uniform float u_mouseActive;

            float hash(float n) { return fract(sin(n)*753.5453123); }
            float noise(float x) {
                float i = floor(x);
                float f = fract(x);
                f = f*f*(3.0-2.0*f);
                return mix(hash(i), hash(i+1.0), f);
            }

            vec2 sdLine(vec2 p, vec2 a, vec2 b) {
                vec2 pa = p - a, ba = b - a;
                float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
                return vec2(length(pa - ba * h), h);
            }

            float lightning(vec2 uv, vec2 a, vec2 b, float t) {
                vec2 ab = b - a;
                float len = length(ab);
                if(len < 0.01) return 0.0;
                vec2 dir = ab / len;
                
                vec2 pa = uv - a;
                float h = clamp(dot(pa, dir) / len, 0.0, 1.0);
                float dist = length(pa - dir * (h * len));
                
                float env = sin(h * 3.1415);
                
                float offset = (noise(h * 25.0 - t * 35.0) - 0.5) * 0.08 * env;
                offset += (noise(h * 70.0 + t * 50.0) - 0.5) * 0.02 * env;
                
                float d = abs(dist + offset);
                
                return (0.0002 / (d + 0.0002) + 0.00001 / (d*d + 0.00001)) * env;
            }

            void main() {
                vec2 uv = gl_FragCoord.xy / u_resolution.xy;
                uv = uv * 2.0 - 1.0;
                uv.x *= u_resolution.x / u_resolution.y;

                vec2 mouseUV = u_mouse / u_resolution.xy;
                mouseUV = mouseUV * 2.0 - 1.0;
                mouseUV.x *= u_resolution.x / u_resolution.y;

                vec2 center = vec2(-0.8, -0.2);
                center.x += sin(u_time * 0.4) * 0.03;
                center.y += cos(u_time * 0.3) * 0.03;

                vec2 dirUp = normalize(vec2(0.15, 1.0));
                vec2 dirRight = normalize(vec2(1.0, -0.25));
                vec2 dirDownLeft = normalize(vec2(-0.8, -0.6));

                vec2 l1 = sdLine(uv, center, center + dirUp * 5.0);
                vec2 l2 = sdLine(uv, center, center + dirRight * 5.0);
                vec2 l3 = sdLine(uv, center, center + dirDownLeft * 5.0);

                float intensity = 0.006;
                float glow = intensity / (l1.x + 0.001) +
                             intensity / (l2.x + 0.001) +
                             (intensity * 0.4) / (l3.x + 0.001);

                float pulse1 = smoothstep(0.1, 0.0, abs(l1.y - fract(u_time * 0.4))) * 0.03 / (l1.x + 0.001);
                float pulse2 = smoothstep(0.1, 0.0, abs(l2.y - fract(u_time * 0.5 + 0.3))) * 0.03 / (l2.x + 0.001);
                float pulse3 = smoothstep(0.1, 0.0, abs(l3.y - fract(u_time * 0.3 + 0.7))) * 0.015 / (l3.x + 0.001);
                glow += pulse1 + pulse2 + pulse3;

                vec2 p1 = center + dirUp * clamp(dot(mouseUV - center, dirUp), 0.0, 5.0);
                vec2 p2 = center + dirRight * clamp(dot(mouseUV - center, dirRight), 0.0, 5.0);
                vec2 p3 = center + dirDownLeft * clamp(dot(mouseUV - center, dirDownLeft), 0.0, 5.0);
                
                float lgt1 = lightning(uv, p1, mouseUV, u_time);
                float lgt2 = lightning(uv, p2, mouseUV, u_time + 10.0);
                float lgt3 = lightning(uv, p3, mouseUV, u_time + 20.0);
                
                float flicker = step(0.1, noise(u_time * 60.0)) * (noise(u_time * 150.0) * 0.8 + 0.2);
                
                float d1 = length(mouseUV - p1);
                float d2 = length(mouseUV - p2);
                float d3 = length(mouseUV - p3);
                
                glow += lgt1 * smoothstep(2.0, 0.0, d1) * u_mouseActive * flicker;
                glow += lgt2 * smoothstep(2.0, 0.0, d2) * u_mouseActive * flicker;
                glow += lgt3 * smoothstep(2.0, 0.0, d3) * u_mouseActive * flicker;

                float distToCenter = length(uv - center);
                glow += 0.04 / (distToCenter + 0.01);

                vec3 baseColor = vec3(0.6, 0.75, 1.0);
                vec3 finalColor = baseColor * glow;

                finalColor *= 0.85 + 0.15 * sin(u_time * 2.0 - distToCenter * 8.0);

                float vignette = 1.0 - smoothstep(0.4, 2.0, length(uv));
                finalColor *= vignette;

                float n = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
                finalColor += n * 0.02;

                gl_FragColor = vec4(finalColor, 1.0);
            }
        \`;

        function createShader(gl, type, source) {
            const shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return null;
            return shader;
        }

        const shaderProgram = gl.createProgram();
        gl.attachShader(shaderProgram, createShader(gl, gl.VERTEX_SHADER, vsSource));
        gl.attachShader(shaderProgram, createShader(gl, gl.FRAGMENT_SHADER, fsSource));
        gl.linkProgram(shaderProgram);

        const programInfo = {
            program: shaderProgram,
            attribLocations: { vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition') },
            uniformLocations: {
                resolution: gl.getUniformLocation(shaderProgram, 'u_resolution'),
                time: gl.getUniformLocation(shaderProgram, 'u_time'),
                mouse: gl.getUniformLocation(shaderProgram, 'u_mouse'),
                mouseActive: gl.getUniformLocation(shaderProgram, 'u_mouseActive'),
            },
        };

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0]), gl.STATIC_DRAW);

        let startTime = Date.now();

        function render() {
            if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
                canvas.width = canvas.clientWidth;
                canvas.height = canvas.clientHeight;
            }
            gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
            gl.useProgram(programInfo.program);

            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.vertexAttribPointer(programInfo.attribLocations.vertexPosition, 2, gl.FLOAT, false, 0, 0);
            gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);

            let timeSinceMove = Date.now() - lastMouseMove;
            let targetActive = timeSinceMove < 150 ? 1.0 : Math.max(0.0, 1.0 - (timeSinceMove - 150) / 350.0);
            currentMouseActive += (targetActive - currentMouseActive) * 0.15;

            gl.uniform2f(programInfo.uniformLocations.resolution, gl.canvas.width, gl.canvas.height);
            gl.uniform1f(programInfo.uniformLocations.time, (Date.now() - startTime) * 0.001);
            gl.uniform2f(programInfo.uniformLocations.mouse, mouseX, mouseY);
            gl.uniform1f(programInfo.uniformLocations.mouseActive, currentMouseActive);

            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            requestAnimationFrame(render);
        }
        requestAnimationFrame(render);
    <\/script>
</body>
</html>`,k8=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nexus Gateway</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300&display=swap" rel="stylesheet">
</head>
<body class="bg-black text-slate-300 antialiased min-h-screen flex flex-col selection:bg-slate-700 selection:text-white relative" style="font-family: 'Inter', sans-serif;">

    <!-- Global Dither Overlay -->
    <div class="fixed inset-0 z-50 pointer-events-none opacity-[0.15]" style="background-image: url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%202%202%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%221%22%20height%3D%221%22%20fill%3D%22%23ffffff%22%2F%3E%3Crect%20x%3D%221%22%20y%3D%221%22%20width%3D%221%22%20height%3D%221%22%20fill%3D%22%23ffffff%22%2F%3E%3C%2Fsvg%3E'); background-size: 2px 2px;"></div>

    <!-- Visualization Background -->
    <div class="fixed inset-0 z-0 overflow-hidden bg-black">
        <div class="absolute inset-0 z-0 opacity-10" style="background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.01) 0%, rgba(0, 0, 0, 0) 80%);"></div>
        <canvas id="flow-canvas" class="absolute inset-0 w-full h-full z-10"></canvas>
    </div>

    <!-- Main Content -->
    <main class="flex-grow flex flex-col items-center justify-center relative z-30 px-6 py-12 min-h-screen w-full">
        
        <!-- Premium Login Card with Hover Border Gradient -->
        <div class="max-w-md w-full bg-black/95 backdrop-blur-xl rounded-2xl p-7 md:p-8 shadow-2xl flex flex-col relative group">
            
            <!-- Base Border -->
            <div class="absolute inset-0 border border-white/[0.04] rounded-2xl pointer-events-none transition-colors duration-500 group-hover:border-transparent"></div>
            
            <!-- Hover Gradient Border -->
            <div class="absolute inset-0 p-[1px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.15),transparent)] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

            <!-- Header Text -->
            <div class="text-center mb-8 w-full relative z-20">
                <div class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/50 border border-slate-700/50 mb-6 shadow-inner">
                    <iconify-icon icon="solar:cpu-bolt-linear" width="24" height="24" stroke-width="1.5" class="text-slate-200"></iconify-icon>
                </div>
                <h1 id="reveal-title" class="text-3xl md:text-4xl font-thin tracking-tight text-white leading-tight mb-3 uppercase flex flex-wrap justify-center gap-x-2">
                    <span class="overflow-hidden inline-block pt-1"><span class="reveal-word inline-block translate-y-[120%]">Nexus</span></span>
                    <span class="overflow-hidden inline-block pt-1"><span class="reveal-word inline-block translate-y-[120%]">Gateway</span></span>
                </h1>
                <p class="text-sm text-slate-500 font-extralight leading-relaxed">
                    Verify identity to initialize secure connection with the primary framework. Oversee active protocols and routing.
                </p>
            </div>

            <!-- Form -->
            <form class="space-y-5 relative z-20">
                <div>
                    <label for="identifier" class="text-xs font-light text-slate-400 mb-1.5 block uppercase tracking-widest">Operative ID</label>
                    <div class="relative rounded-lg bg-black/80 group/input">
                        <div class="absolute inset-0 border border-slate-800/80 rounded-lg pointer-events-none transition-colors duration-300 group-hover/input:border-transparent focus-within:border-transparent"></div>
                        <div class="absolute inset-0 p-[1px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.25),transparent)] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] pointer-events-none rounded-lg opacity-0 group-hover/input:opacity-100 focus-within:opacity-100 transition-opacity duration-300 z-10"></div>
                        <input type="text" id="identifier" class="relative w-full bg-transparent px-3 py-2 text-sm text-slate-200 focus:outline-none z-20 placeholder-slate-700 font-extralight" placeholder="operative@nexus.net">
                    </div>
                </div>
                <div>
                    <div class="flex justify-between items-center mb-1.5">
                        <label for="key" class="text-xs font-light text-slate-400 block uppercase tracking-widest">Security Key</label>
                        <a href="#" class="text-xs font-extralight text-slate-400 hover:text-white transition-colors underline decoration-slate-700 underline-offset-2">Recover access</a>
                    </div>
                    <div class="relative rounded-lg bg-black/80 group/input">
                        <div class="absolute inset-0 border border-slate-800/80 rounded-lg pointer-events-none transition-colors duration-300 group-hover/input:border-transparent focus-within:border-transparent"></div>
                        <div class="absolute inset-0 p-[1px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.25),transparent)] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] pointer-events-none rounded-lg opacity-0 group-hover/input:opacity-100 focus-within:opacity-100 transition-opacity duration-300 z-10"></div>
                        <input type="password" id="key" class="relative w-full bg-transparent pl-3 pr-10 py-2 text-sm text-slate-200 focus:outline-none z-20 placeholder-slate-700 font-extralight" placeholder="••••••••">
                        <button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 hover:text-white transition-colors z-30" aria-label="Toggle visibility">
                            <iconify-icon icon="solar:eye-linear" width="16" height="16" stroke-width="1.5"></iconify-icon>
                        </button>
                    </div>
                </div>
                <div class="flex items-center gap-2 pt-1">
                    <div class="relative flex items-center justify-center w-4 h-4">
                        <input type="checkbox" id="session" class="peer appearance-none w-4 h-4 border border-slate-700 rounded bg-black/50 checked:bg-slate-300 checked:border-slate-300 cursor-pointer transition-colors">
                        <iconify-icon icon="solar:check-linear" width="12" height="12" stroke-width="1.5" class="absolute text-black opacity-0 peer-checked:opacity-100 pointer-events-none"></iconify-icon>
                    </div>
                    <label for="session" class="text-xs font-extralight text-slate-400 cursor-pointer select-none uppercase tracking-wider">Maintain persistent uplink</label>
                </div>
                
                <!-- Primary Button -->
                <button type="submit" class="w-full bg-[#0a0a0a] hover:bg-[#111] text-white text-sm font-light py-2.5 rounded-lg transition-all mt-2 uppercase tracking-widest relative group/btn shadow-[0_0_20px_rgba(255,255,255,0.03)] hover:shadow-[0_0_25px_rgba(255,255,255,0.06)]">
                    <div class="absolute inset-0 border border-white/10 rounded-lg pointer-events-none transition-colors duration-300 group-hover/btn:border-transparent"></div>
                    <div class="absolute inset-0 p-[1px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.4),transparent)] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] pointer-events-none rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 z-10"></div>
                    <span class="relative z-20">Initialize Uplink</span>
                </button>
            </form>

            <!-- Divider -->
            <div class="relative flex items-center py-6 z-20">
                <div class="flex-grow border-t border-slate-800/60"></div>
                <span class="flex-shrink-0 px-4 text-xs font-extralight text-slate-600 uppercase tracking-widest">Alternative Auth</span>
                <div class="flex-grow border-t border-slate-800/60"></div>
            </div>

            <!-- Alternative Options -->
            <div class="grid grid-cols-2 gap-3 z-20">
                <button type="button" class="relative flex items-center justify-center gap-2 w-full bg-black/40 hover:bg-slate-900 rounded-lg py-2.5 text-sm text-slate-400 hover:text-slate-200 transition-colors font-extralight group/alt">
                    <div class="absolute inset-0 border border-slate-800/80 rounded-lg pointer-events-none transition-colors duration-300 group-hover/alt:border-transparent"></div>
                    <div class="absolute inset-0 p-[1px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.25),transparent)] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] pointer-events-none rounded-lg opacity-0 group-hover/alt:opacity-100 transition-opacity duration-300 z-10"></div>
                    <span class="relative z-20 flex items-center gap-2"><iconify-icon icon="solar:buildings-linear" width="18" height="18" stroke-width="1.5"></iconify-icon> Corporate SSO</span>
                </button>
                <button type="button" class="relative flex items-center justify-center gap-2 w-full bg-black/40 hover:bg-slate-900 rounded-lg py-2.5 text-sm text-slate-400 hover:text-slate-200 transition-colors font-extralight group/alt">
                    <div class="absolute inset-0 border border-slate-800/80 rounded-lg pointer-events-none transition-colors duration-300 group-hover/alt:border-transparent"></div>
                    <div class="absolute inset-0 p-[1px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.25),transparent)] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] pointer-events-none rounded-lg opacity-0 group-hover/alt:opacity-100 transition-opacity duration-300 z-10"></div>
                    <span class="relative z-20 flex items-center gap-2"><iconify-icon icon="solar:code-circle-linear" width="18" height="18" stroke-width="1.5"></iconify-icon> Git Auth</span>
                </button>
            </div>
        </div>

        <!-- Social Proof -->
        <div class="mt-8 flex flex-col items-center gap-4 relative z-20">
            <div class="flex -space-x-2">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_800w.jpg" alt="Active Node" class="w-10 h-10 rounded-full border border-slate-800 bg-black object-cover shadow-lg">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f5668c5-fc4a-44e0-bc5e-a664189d3c31_800w.jpg" alt="Active Node" class="w-10 h-10 rounded-full border border-slate-800 bg-black object-cover shadow-lg">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eca707cc-a5b7-439a-b4fd-247f6106c2e1_800w.jpg" alt="Active Node" class="w-10 h-10 rounded-full border border-slate-800 bg-black object-cover shadow-lg">
                <div class="w-10 h-10 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center text-xs text-slate-300 font-extralight shadow-lg">+</div>
            </div>
            <p class="text-xs text-slate-600 font-extralight uppercase tracking-widest">Validated by distributed consensus nodes</p>
        </div>

    </main>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // GSAP Masked Reveal for Heading
            gsap.registerPlugin(ScrollTrigger);
            gsap.to(".reveal-word", {
                y: "0%",
                duration: 1.2,
                ease: "power4.out",
                stagger: 0.15,
                scrollTrigger: {
                    trigger: "#reveal-title",
                    start: "top 95%",
                }
            });

            // Flow Canvas Animation
            const canvas = document.getElementById('flow-canvas');
            const ctx = canvas.getContext('2d');
            
            let width, height;
            let explosions = [];

            function resize() {
                const dpr = window.devicePixelRatio || 1;
                width = window.innerWidth;
                height = window.innerHeight;
                canvas.width = width * dpr;
                canvas.height = height * dpr;
                ctx.scale(dpr, dpr);
            }
            window.addEventListener('resize', resize);
            resize();

            window.addEventListener('click', (e) => {
                explosions.push({ x: e.clientX, y: e.clientY, radius: 0, life: 1 });
            });

            const paths = [];
            const numPaths = 80;
            
            for(let i = 0; i < numPaths; i++) {
                paths.push({
                    isLeft: i % 2 === 0,
                    startY: (i / numPaths) * height * 1.4 - height * 0.2,
                    particles: [{
                        t: Math.random(),
                        speed: 0.0015 + Math.random() * 0.002
                    }]
                });
            }

            function getBezierPoint(t, p0, p1, p2, p3) {
                const u = 1 - t;
                return {
                    x: u**3 * p0.x + 3 * u**2 * t * p1.x + 3 * u * t**2 * p2.x + t**3 * p3.x,
                    y: u**3 * p0.y + 3 * u**2 * t * p1.y + 3 * u * t**2 * p2.y + t**3 * p3.y
                };
            }

            function render() {
                ctx.clearRect(0, 0, width, height);
                const centerX = width / 2;
                const centerY = height / 2;

                explosions.forEach(exp => {
                    exp.radius += 15;
                    exp.life -= 0.015;
                });
                explosions = explosions.filter(exp => exp.life > 0);

                paths.forEach(path => {
                    const p0 = { x: path.isLeft ? 0 : width, y: path.startY };
                    const p1 = { x: path.isLeft ? centerX * 0.5 : width - centerX * 0.5, y: path.startY };
                    const p2 = { x: path.isLeft ? centerX * 0.8 : width - centerX * 0.8, y: centerY };
                    const p3 = { x: centerX, y: centerY };

                    ctx.beginPath();
                    ctx.moveTo(p0.x, p0.y);
                    ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
                    ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
                    ctx.lineWidth = 1.2;
                    ctx.setLineDash([1, 4]);
                    ctx.stroke();
                    ctx.setLineDash([]);

                    path.particles.forEach(p => {
                        p.t += p.speed;
                        if (p.t > 1) {
                            p.t = 0;
                            path.startY += (Math.random() - 0.5) * 10;
                        }

                        let pos = getBezierPoint(p.t, p0, p1, p2, p3);

                        let dxTotal = 0, dyTotal = 0;
                        explosions.forEach(exp => {
                            let dx = pos.x - exp.x;
                            let dy = pos.y - exp.y;
                            let dist = Math.hypot(dx, dy);
                            if (dist < exp.radius + 120 && dist > exp.radius - 120) {
                                let force = (1 - Math.abs(dist - exp.radius) / 120) * exp.life;
                                dxTotal += (dx / dist) * force * 80;
                                dyTotal += (dy / dist) * force * 80;
                            }
                        });
                        
                        pos.x += dxTotal;
                        pos.y += dyTotal;

                        ctx.fillStyle = \`rgba(255, 255, 255, 0.7)\`;
                        ctx.fillRect(pos.x - 1.5, pos.y - 1.5, 3, 3);
                    });
                });
                
                requestAnimationFrame(render);
            }
            
            render();
        });
    <\/script>
</body>
</html>`,T8=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Global Connectivity Nexus</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>
<body class="font-sans antialiased text-blue-950 min-h-screen flex flex-col" style="background: linear-gradient(180deg, rgba(240,244,248,0.92) 0%, rgba(225,234,244,0.92) 40%, rgba(196,217,239,0.92) 80%, rgba(166,200,234,0.92) 100%), url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e534354d-c5f2-4399-a1d9-2f50338e8c47_1600w.jpg') center/cover no-repeat fixed; background-blend-mode: normal;">

    <!-- Main Structural Container -->
    <div class="max-w-6xl mx-auto w-full flex-grow flex flex-col border-x border-transparent relative bg-white/20 backdrop-blur-[2px]" style="border-image: linear-gradient(to bottom, rgba(147,197,253,0.1), rgba(147,197,253,0.7), rgba(147,197,253,0.1)) 1;">
        
        <!-- Top Corner Squares -->
        <div class="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
        <div class="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>

        <!-- Header Section -->
        <header class="pt-24 pb-20 px-6 text-center border-b border-transparent relative z-10" style="border-image: linear-gradient(to right, rgba(147,197,253,0.1), rgba(147,197,253,0.7), rgba(147,197,253,0.1)) 1;">
            <h1 id="reveal-title" class="text-5xl md:text-6xl font-normal tracking-tight text-blue-950 max-w-3xl mx-auto leading-tight">
                The nexus of <br> global connectivity
            </h1>
            
            <!-- Header Bottom Corner Squares -->
            <div class="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
            <div class="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
        </header>

        <!-- Stats Section -->
        <section class="border-b border-transparent relative z-10 bg-white/10" style="border-image: linear-gradient(to right, rgba(147,197,253,0.1), rgba(147,197,253,0.7), rgba(147,197,253,0.1)) 1;">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-blue-300/40 text-center">
                
                <div class="flex flex-col items-center justify-center space-y-3 py-14 px-6 relative">
                    <div class="text-4xl font-normal text-blue-950 tracking-tight">150+</div>
                    <div class="text-sm text-blue-800/70 max-w-[160px] leading-relaxed">
                        countries integrated worldwide
                    </div>
                    <!-- Internal Grid Intersection Square -->
                    <div class="hidden lg:block absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
                </div>

                <div class="flex flex-col items-center justify-center space-y-3 py-14 px-6 relative">
                    <div class="text-4xl font-normal text-blue-800/90 tracking-tight">
                        <span class="text-blue-500/80 font-light mr-1">$</span>3.1T
                    </div>
                    <div class="text-sm text-blue-800/70 max-w-[160px] leading-relaxed">
                        annual transfer volume
                    </div>
                    <!-- Internal Grid Intersection Square -->
                    <div class="hidden lg:block absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
                </div>

                <div class="flex flex-col items-center justify-center space-y-3 py-14 px-6 relative">
                    <div class="text-4xl font-normal text-blue-800/80 tracking-tight">99.999%</div>
                    <div class="text-sm text-blue-800/70 max-w-[160px] leading-relaxed">
                        infrastructure reliability
                    </div>
                    <!-- Internal Grid Intersection Square -->
                    <div class="hidden lg:block absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
                </div>

                <div class="flex flex-col items-center justify-center space-y-3 py-14 px-6">
                    <div class="text-4xl font-normal text-blue-700/80 tracking-tight">850M+</div>
                    <div class="text-sm text-blue-800/70 max-w-[160px] leading-relaxed">
                        verified digital identities
                    </div>
                </div>

            </div>
            
            <!-- Stats Bottom Corner Squares -->
            <div class="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
            <div class="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
        </section>

        <!-- Animation Section -->
        <main class="flex-grow relative overflow-hidden min-h-[500px]">
            
            <!-- Controls -->
            <div class="absolute top-6 right-6 flex gap-2 z-20">
                <button id="pauseBtn" class="w-8 h-8 flex items-center justify-center bg-white/40 hover:bg-white/60 backdrop-blur-md border border-blue-300/40 rounded text-blue-800 transition-all cursor-pointer" aria-label="Pause animation">
                    <iconify-icon icon="solar:pause-linear" width="16" height="16" style="stroke-width: 1.5;"></iconify-icon>
                </button>
                <button class="w-8 h-8 flex items-center justify-center bg-white/40 hover:bg-white/60 backdrop-blur-md border border-blue-300/40 rounded text-blue-800 transition-all cursor-pointer" aria-label="Settings">
                    <iconify-icon icon="solar:settings-linear" width="16" height="16" style="stroke-width: 1.5;"></iconify-icon>
                </button>
            </div>

            <!-- Canvas Container -->
            <canvas id="networkCanvas" class="absolute inset-0 w-full h-full block z-0"></canvas>
            
            <!-- Bottom Corner Squares -->
            <div class="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
            <div class="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
        </main>
    </div>

    <script>
        // Background Canvas Animation
        const canvas = document.getElementById('networkCanvas');
        const ctx = canvas.getContext('2d', { alpha: true });
        let width, height;
        let particles = [];
        let isPlaying = true;
        let animationFrameId;

        function resize() {
            width = canvas.clientWidth;
            height = canvas.clientHeight;
            canvas.width = width * window.devicePixelRatio;
            canvas.height = height * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
            initParticles();
        }

        class Particle {
            constructor() {
                this.reset(true);
            }

            reset(initial = false) {
                this.angle = Math.PI + (Math.random() * Math.PI); 
                if (Math.random() > 0.3) {
                    this.angle = Math.PI * 1.25 + (Math.random() * Math.PI * 0.5);
                }

                this.speed = 0.5 + Math.random() * 2.5;
                this.distance = initial ? Math.random() * (height * 1.2) : Math.random() * 50;
                this.maxLength = 20 + Math.random() * 180;
                this.length = 0;
                this.alpha = 0;
            }

            update() {
                this.distance += this.speed;
                this.length = Math.min(this.maxLength, this.distance * 0.8);
                
                const normalizedDist = this.distance / (height * 1.2);
                this.alpha = Math.min(1, this.distance / 100) * Math.max(0, 1 - normalizedDist);

                if (this.distance > height * 1.5) {
                    this.reset();
                }
            }

            draw() {
                const originX = width / 2;
                const originY = height + 50;

                const startX = originX + Math.cos(this.angle) * this.distance;
                const startY = originY + Math.sin(this.angle) * this.distance;
                const endX = originX + Math.cos(this.angle) * (this.distance + this.length);
                const endY = originY + Math.sin(this.angle) * (this.distance + this.length);

                const distRatio = Math.min(1, this.distance / height);
                const hue = 220 + (distRatio * 15);
                const lightness = 15 + (distRatio * 35);
                
                const color = \`hsla(\${hue}, 90%, \${lightness}%, \${this.alpha})\`;
                const tailColor = \`hsla(\${hue}, 90%, \${Math.max(5, lightness - 15)}%, \${this.alpha * 0.05})\`;

                ctx.beginPath();
                const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
                gradient.addColorStop(0, tailColor);
                gradient.addColorStop(1, color);
                
                ctx.moveTo(startX, startY);
                ctx.lineTo(endX, endY);
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 0.5 + (distRatio * 2);
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(endX, endY, 0.5 + (distRatio * 1.5), 0, Math.PI * 2);
                ctx.fillStyle = \`hsla(\${hue}, 100%, \${lightness + 20}%, \${this.alpha * 1.5})\`;
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            const particleCount = window.innerWidth < 768 ? 150 : 400;
            for(let i=0; i<particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            if (!isPlaying) return;
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        }

        window.addEventListener('resize', () => {
            cancelAnimationFrame(animationFrameId);
            resize();
            if(isPlaying) animate();
        });

        resize();
        animate();

        const pauseBtn = document.getElementById('pauseBtn');
        pauseBtn.addEventListener('click', () => {
            isPlaying = !isPlaying;
            if (isPlaying) {
                pauseBtn.innerHTML = '<iconify-icon icon="solar:pause-linear" width="16" height="16" style="stroke-width: 1.5;"></iconify-icon>';
                animate();
            } else {
                pauseBtn.innerHTML = '<iconify-icon icon="solar:play-linear" width="16" height="16" style="stroke-width: 1.5;"></iconify-icon>';
                cancelAnimationFrame(animationFrameId);
            }
        });

        // GSAP Masked Text Reveal
        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);
            
            const titleEl = document.getElementById('reveal-title');
            if (titleEl) {
                const lines = titleEl.innerHTML.split(/<br\\s*\\/?>/i);
                titleEl.innerHTML = '';
                
                lines.forEach((line, index) => {
                    const words = line.split(' ');
                    words.forEach((word) => {
                        if (word.trim() !== '') {
                            const wrapper = document.createElement('span');
                            wrapper.className = 'inline-block overflow-hidden align-bottom';
                            wrapper.style.paddingBottom = '0.1em'; 
                            wrapper.style.marginBottom = '-0.1em';
                            
                            const inner = document.createElement('span');
                            inner.className = 'inline-block reveal-text';
                            inner.style.transform = 'translateY(110%)';
                            inner.innerHTML = word;
                            
                            wrapper.appendChild(inner);
                            titleEl.appendChild(wrapper);
                            titleEl.appendChild(document.createTextNode(' '));
                        }
                    });
                    if (index < lines.length - 1) {
                        titleEl.appendChild(document.createElement('br'));
                    }
                });

                gsap.to('.reveal-text', {
                    y: 0,
                    ease: 'power4.out',
                    duration: 1.2,
                    stagger: 0.08,
                    scrollTrigger: {
                        trigger: '#reveal-title',
                        start: 'top 90%',
                    }
                });
            }
        });
    <\/script>
</body>
</html>`,E8=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>System Interface</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>
<body class="bg-[#0a0a0c] text-zinc-400 font-mono min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden selection:bg-zinc-800 selection:text-white">
    
    <!-- Aura Asset Background Image -->
    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg" 
         class="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-screen pointer-events-none z-0" 
         alt="">

    <!-- WebGL-simulated Background Animation -->
    <canvas id="bg-canvas" class="absolute inset-0 z-0 pointer-events-none"></canvas>

    <!-- Main UI Container -->
    <main class="relative z-10 w-full max-w-2xl flex flex-col gap-12 sm:gap-20">

        <!-- PANEL 1: CORE (Red/Orange) -->
        <section class="relative group">
            <!-- Border Gradient Skill Application -->
            <div class="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-[#c87a65]/40 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" style="mask-image: linear-gradient(black, black); -webkit-mask-image: -webkit-linear-gradient(black, black);"></div>
            
            <div class="relative bg-[#0a0a0c] rounded-lg p-2 flex flex-col gap-4 text-[#c87a65]">
                
                <!-- Top Row -->
                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#c87a65]/20 pb-2">
                    <h1 class="gsap-reveal text-3xl sm:text-4xl tracking-tight font-medium uppercase animate-pulse" style="animation-duration: 4s;">[ CORE ]</h1>
                    <div class="flex gap-6 text-xs tracking-wider">
                        <div class="flex flex-col gap-1">
                            <span>CONF.SYS</span>
                            <span class="opacity-70">RESTART</span>
                            <span class="opacity-70">SLEEP</span>
                        </div>
                        <div class="flex flex-col gap-1">
                            <span>BUILD_11</span>
                            <span class="opacity-70">ANALYZE</span>
                            <span class="opacity-70">INPUT NEEDED</span>
                        </div>
                    </div>
                </div>

                <!-- Middle Row -->
                <div class="flex flex-col sm:flex-row justify-between items-start gap-6">
                    <!-- Dot Matrix -->
                    <div class="grid grid-cols-[repeat(20,minmax(0,1fr))] gap-1 opacity-80" id="matrix-1">
                        <!-- Populated by JS for brevity -->
                    </div>
                    
                    <!-- Right Controls -->
                    <div class="flex flex-col gap-2 min-w-[200px]">
                        <div class="flex items-center justify-between border-b border-[#c87a65]/20 pb-1">
                            <div class="flex items-center gap-2">
                                <div class="w-3 h-3 rounded-full bg-[#c87a65] animate-ping" style="animation-duration: 3s;"></div>
                                <span class="text-lg tracking-widest">++</span>
                            </div>
                            <span class="text-xs">HASH: 0x3C9A</span>
                        </div>
                        <div class="flex items-center justify-between text-xs pt-1">
                            <span>2B-44 - TEMP: 61°C</span>
                            <div class="w-8 h-3 rounded-full border border-[#c87a65]/50 flex items-center p-[1px]">
                                <div class="w-2 h-full bg-[#c87a65] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- PANEL 2: SECURE (Green) -->
        <section class="relative group">
            <!-- Border Gradient Skill Application -->
            <div class="absolute -inset-[1px] rounded-lg bg-gradient-to-l from-[#7a9f65]/40 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" style="mask-image: linear-gradient(black, black); -webkit-mask-image: -webkit-linear-gradient(black, black);"></div>
            
            <div class="relative bg-[#0a0a0c] rounded-lg p-2 flex flex-col gap-3 text-[#7a9f65]">
                
                <!-- Ruler -->
                <div class="relative w-full h-4 border-t border-[#7a9f65]/30 flex justify-between">
                    <div class="w-px h-2 bg-[#7a9f65]/50"></div>
                    <div class="w-px h-1 bg-[#7a9f65]/30"></div>
                    <div class="w-px h-2 bg-[#7a9f65]/50"></div>
                    <div class="w-px h-1 bg-[#7a9f65]/30"></div>
                    <div class="w-px h-2 bg-[#7a9f65]/50"></div>
                    <div class="w-px h-1 bg-[#7a9f65]/30"></div>
                    <div class="w-px h-2 bg-[#7a9f65]/50"></div>
                </div>

                <div class="flex flex-col sm:flex-row justify-between items-end gap-6">
                    <!-- Large Dot Pattern -->
                    <div class="flex flex-col gap-2 opacity-90">
                        <div class="flex gap-2"><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div></div>
                        <div class="flex gap-2"><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div></div>
                        <div class="flex gap-2"><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div></div>
                    </div>

                    <!-- Info Box & Title -->
                    <div class="flex flex-col items-end gap-2 w-full sm:w-auto">
                        <div class="flex items-stretch gap-2">
                            <div class="border border-[#7a9f65]/30 p-2 text-xs flex flex-col justify-center min-w-[120px]">
                                <span>APPROVED</span>
                                <span class="opacity-70">ID: X7-44</span>
                                <span class="opacity-70">SEQ: #0933</span>
                            </div>
                            <div class="border border-[#7a9f65]/30 p-2 flex items-center justify-center">
                                <iconify-icon icon="solar:clock-circle-linear" class="text-xl"></iconify-icon>
                            </div>
                            <!-- Logo Box -->
                            <div class="w-12 h-12 bg-[#7a9f65] relative overflow-hidden flex-shrink-0">
                                <div class="absolute w-16 h-4 bg-[#0a0a0c] -rotate-45 top-4 -left-2"></div>
                            </div>
                        </div>
                        <h2 class="gsap-reveal text-2xl sm:text-3xl tracking-tight font-medium uppercase">SECURE</h2>
                    </div>
                </div>

                <!-- Bottom Text -->
                <div class="flex flex-col sm:flex-row justify-between text-xs mt-2 opacity-80">
                    <span>LOADING <span class="animate-pulse">...</span></span>
                    <span>//KEY: <span class="text-white opacity-90">0x7B11</span>//</span>
                </div>
                <div class="text-xs opacity-70">
                    SYNCING - ID: 88-K - DATA DROP: 0.2% SECTOR 9
                </div>
            </div>
        </section>

        <!-- PANEL 3: 909 (Purple/Blue) -->
        <section class="relative group">
            <!-- Border Gradient Skill Application -->
            <div class="absolute -inset-[1px] rounded-lg bg-gradient-to-t from-[#756a9f]/40 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" style="mask-image: linear-gradient(black, black); -webkit-mask-image: -webkit-linear-gradient(black, black);"></div>
            
            <div class="relative bg-[#0a0a0c] rounded-lg p-2 flex flex-col gap-4 text-[#756a9f]">
                
                <div class="flex flex-col sm:flex-row items-center justify-between gap-8">
                    
                    <!-- Left: Node Diagram -->
                    <div class="relative w-32 h-16 flex-shrink-0 hidden sm:block">
                        <!-- Lines -->
                        <div class="absolute top-2 left-2 w-20 h-px bg-[#756a9f]/50"></div>
                        <div class="absolute top-10 left-6 w-16 h-px bg-[#756a9f]/50"></div>
                        <div class="absolute top-2 left-22 w-px h-8 bg-[#756a9f]/50 rotate-45 origin-top-left"></div>
                        <div class="absolute top-10 left-6 w-px h-6 bg-[#756a9f]/50 -rotate-45 origin-top-left"></div>
                        
                        <!-- Nodes -->
                        <div class="absolute top-1.5 left-1.5 w-1.5 h-1.5 rounded-full border border-[#756a9f] bg-[#0a0a0c]"></div>
                        <div class="absolute top-1.5 left-21.5 w-1.5 h-1.5 rounded-full border border-[#756a9f] bg-[#0a0a0c]"></div>
                        <div class="absolute top-9.5 left-5.5 w-1.5 h-1.5 rounded-full border border-[#756a9f] bg-[#0a0a0c]"></div>
                        <div class="absolute top-9.5 left-21.5 w-1.5 h-1.5 rounded-full border border-[#756a9f] bg-[#0a0a0c]"></div>
                        <div class="absolute top-14.5 left-1.5 w-1.5 h-1.5 rounded-full border border-[#756a9f] bg-[#0a0a0c]"></div>
                        
                        <!-- Arrows -->
                        <div class="absolute top-5 left-0 flex items-center gap-1">
                            <iconify-icon icon="solar:alt-arrow-right-linear" class="text-lg"></iconify-icon>
                            <div class="w-8 h-px bg-[#756a9f]"></div>
                        </div>
                    </div>

                    <!-- Middle: Title -->
                    <div class="flex items-center gap-4">
                        <div class="flex items-center gap-1 sm:hidden">
                            <iconify-icon icon="solar:alt-arrow-right-linear" class="text-lg"></iconify-icon>
                            <div class="w-8 h-px bg-[#756a9f]"></div>
                        </div>
                        <h3 class="gsap-reveal text-5xl sm:text-6xl tracking-tight font-normal">909</h3>
                    </div>

                    <!-- Right: Info & Circle -->
                    <div class="flex items-center gap-6">
                        <div class="flex flex-col text-xs">
                            <span>SECURITY-NET</span>
                            <span class="opacity-70">ACTIVE</span>
                            <span class="opacity-70">STAT: 0xBB02</span>
                            <div class="flex gap-1 mt-1">
                                <div class="w-1.5 h-1.5 rounded-full border border-current"></div>
                                <div class="w-1.5 h-1.5 rounded-full border border-current"></div>
                                <div class="w-1.5 h-1.5 rounded-full border border-current bg-current"></div>
                            </div>
                        </div>
                        
                        <!-- Circular Dots -->
                        <div class="relative w-12 h-12 animate-spin" style="animation-duration: 10s; animation-timing-function: linear;">
                            <div class="absolute inset-0" id="circle-dots">
                                <!-- Populated by JS -->
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bottom Text -->
                <div class="text-center sm:text-left text-xs flex flex-col sm:flex-row sm:justify-center gap-2 sm:gap-8 mt-2 opacity-80">
                    <span>UPLINK STATUS - <span class="text-white opacity-90">ONLINE</span></span>
                    <span>POWER: 48V - DRAW: 1.8A</span>
                </div>
            </div>
        </section>

    </main>

    <script>
        // GSAP Masked Staggered Reveal Logic
        gsap.registerPlugin(ScrollTrigger);
        document.querySelectorAll('.gsap-reveal').forEach(el => {
            const text = el.innerText;
            const words = text.split(' ');
            el.innerHTML = '';
            words.forEach((word, i) => {
                const outer = document.createElement('span');
                // Ensure overflow hidden and adjust alignment
                outer.className = 'inline-block overflow-hidden pb-1 -mb-1 align-bottom';
                const inner = document.createElement('span');
                inner.className = 'inline-block translate-y-[120%]';
                inner.innerText = word + (i < words.length - 1 ? '\\u00A0' : '');
                outer.appendChild(inner);
                el.appendChild(outer);
                
                gsap.to(inner, {
                    y: "0%",
                    duration: 0.8,
                    ease: "power3.out",
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 95%",
                    }
                });
            });
        });

        // Populate Matrix 1
        const matrixContainer = document.getElementById('matrix-1');
        let matrixHTML = '';
        for(let i=0; i<80; i++) {
            const isFilled = Math.random() > 0.6;
            const isDim = Math.random() > 0.5;
            matrixHTML += \`<div class="w-1.5 h-1.5 rounded-full border border-current \${isFilled ? 'bg-current' : ''} \${isDim ? 'opacity-30' : ''}"></div>\`;
        }
        matrixContainer.innerHTML = matrixHTML;

        // Populate Circle Dots
        const circleContainer = document.getElementById('circle-dots');
        let circleHTML = '';
        for(let i=0; i<12; i++) {
            const angle = (i * 30) * (Math.PI / 180);
            const x = 24 + 20 * Math.cos(angle) - 3; // center 24, radius 20, offset half width
            const y = 24 + 20 * Math.sin(angle) - 3;
            const isFilled = i % 3 === 0;
            circleHTML += \`<div class="absolute w-1.5 h-1.5 rounded-full border border-current \${isFilled ? 'bg-current' : ''}" style="left: \${x}px; top: \${y}px;"></div>\`;
        }
        circleContainer.innerHTML = circleHTML;

        // WebGL-simulated Canvas Animation
        const canvas = document.getElementById('bg-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        function initCanvas() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.max(1, Math.floor(width * dpr));
            canvas.height = Math.max(1, Math.floor(height * dpr));
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.imageSmoothingEnabled = false;
            particles = [];
            const numParticles = window.innerWidth < 640 ? 30 : 70;
            for (let i = 0; i < numParticles; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5
                });
            }
        }

        function drawLines() {
            ctx.clearRect(0, 0, width, height);
            ctx.lineWidth = 1;
            ctx.lineCap = 'butt';
            ctx.lineJoin = 'miter';
            
            for (let i = 0; i < particles.length; i++) {
                let p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                for (let j = i + 1; j < particles.length; j++) {
                    let p2 = particles[j];
                    let dx = p.x - p2.x;
                    let dy = p.y - p2.y;
                    let dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.strokeStyle = \`rgba(255, 255, 255, \${0.28 + (1 - dist / 120) * 0.42})\`;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }

                ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
                ctx.fillRect(p.x - 0.75, p.y - 0.75, 1.5, 1.5);
            }
            requestAnimationFrame(drawLines);
        }

        window.addEventListener('resize', initCanvas);
        initCanvas();
        drawLines();
    <\/script>
</body>
</html>`,M8=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nexus / Systems</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #050505;
        }
        .font-mono {
            font-family: 'JetBrains Mono', monospace;
        }
    </style>
</head>
<body class="text-zinc-300 min-h-screen flex flex-col overflow-x-hidden selection:bg-white/20 antialiased">

    <!-- Navbar / Top Brand -->
    <nav class="w-full relative z-20">
        <!-- Gradient Border Bottom -->
        <div class="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div class="flex items-center gap-2 text-sm tracking-tight font-medium text-white">
                <iconify-icon icon="solar:atom-linear" width="20"></iconify-icon>
                <span>NEXUS / CORE</span>
            </div>
            <div class="flex items-center gap-6 text-xs font-mono text-zinc-500">
                <span class="hidden sm:block reveal-text">BUILD.v7.2.1</span>
                <span class="flex items-center gap-2 text-zinc-400">
                    <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                    <span class="reveal-text">ACTIVE</span>
                </span>
            </div>
        </div>
    </nav>

    <!-- Main Layout with Vertical Container Lines -->
    <main class="flex-grow w-full max-w-7xl mx-auto relative grid grid-cols-1 lg:grid-cols-3">
        
        <!-- Gradient Container Borders -->
        <div class="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent z-20"></div>
        <div class="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent z-20"></div>

        <!-- Decoration: Corner Squares for Container Lines -->
        <div class="absolute -top-[1px] -left-[3px] w-[5px] h-[5px] bg-white z-20"></div>
        <div class="absolute -top-[1px] -right-[3px] w-[5px] h-[5px] bg-white z-20"></div>
        <div class="absolute -bottom-[1px] -left-[3px] w-[5px] h-[5px] bg-white z-20"></div>
        <div class="absolute -bottom-[1px] -right-[3px] w-[5px] h-[5px] bg-white z-20"></div>

        <!-- Section 01: Hypercube -->
        <div class="group relative p-8 lg:p-10 flex flex-col justify-between h-[600px] lg:h-[800px] overflow-hidden">
            <!-- Background Image Aura Asset -->
            <div class="absolute inset-0 z-0 opacity-[0.08] mix-blend-screen transition-opacity duration-1000 group-hover:opacity-[0.2]" style="background-image: url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg'); background-size: cover; background-position: center;"></div>
            
            <!-- Gradient Divider Right -->
            <div class="hidden lg:block absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent z-20"></div>
            <!-- Gradient Divider Bottom (Mobile) -->
            <div class="block lg:hidden absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-20"></div>

            <!-- Header -->
            <div class="relative z-10 flex justify-between items-start font-mono text-xs text-zinc-500 uppercase tracking-widest">
                <span class="text-zinc-300 font-medium font-sans reveal-text">Prismatic Core</span>
                <span class="reveal-text">01//</span>
            </div>
            
            <!-- Description Top -->
            <p class="relative z-10 mt-8 text-xs text-zinc-400 leading-relaxed max-w-[280px] reveal-text">
                The foundational structure processes raw data streams, organizing chaotic inputs into structured geometric architectures.
            </p>

            <!-- Visual (Canvas) -->
            <div data-wireframe-visual class="relative z-10 flex-grow flex items-center justify-center py-12">
                <canvas id="canvas1" class="w-full max-w-[300px] aspect-square opacity-80 mix-blend-screen"></canvas>
                <!-- Axis Labels -->
                <span class="absolute left-0 top-1/2 text-[10px] text-zinc-700 font-mono -translate-y-1/2 reveal-text">Input</span>
                <span class="absolute right-0 top-1/2 text-[10px] text-zinc-700 font-mono -translate-y-1/2 reveal-text">Output</span>
            </div>

            <!-- Footer -->
            <div class="relative z-10 space-y-6">
                <div class="pt-4 relative">
                    <div class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-white/10 to-transparent"></div>
                    <h3 class="text-sm font-medium text-white mb-2 reveal-text">Sequence: Alpha</h3>
                    <p class="text-xs text-zinc-500 leading-relaxed reveal-text">
                        Nexus enables the synthesis of physical and virtual environments, unlocking realms previously hidden from standard view.
                    </p>
                </div>
                <!-- Mini Grid Decor -->
                <div class="flex justify-end">
                    <div class="grid grid-cols-4 grid-rows-3 gap-[1px] bg-[#1a1a1c] border border-[#1a1a1c] w-24 h-16 opacity-50">
                        <div class="bg-[#09090b]"></div><div class="bg-[#09090b]"></div><div class="bg-[#09090b]"></div><div class="bg-[#09090b]"></div>
                        <div class="bg-[#09090b]"></div><div class="bg-[#09090b]"></div><div class="bg-[#09090b] flex items-center justify-center"><div class="w-1 h-1 bg-white rounded-full"></div></div><div class="bg-[#09090b]"></div>
                        <div class="bg-[#09090b]"></div><div class="bg-[#09090b]"></div><div class="bg-[#09090b]"></div><div class="bg-[#09090b]"></div>
                    </div>
                </div>
                <div class="flex justify-between items-end font-mono text-[10px] text-zinc-600">
                    <span class="reveal-text">Nexus.sys</span>
                    <span class="reveal-text">V-00.XX.1024</span>
                </div>
            </div>
        </div>

        <!-- Section 02: Logic Cylinders -->
        <div class="group relative p-8 lg:p-10 flex flex-col justify-between h-[600px] lg:h-[800px] overflow-hidden">
            <!-- Background Image Aura Asset -->
            <div class="absolute inset-0 z-0 opacity-[0.08] mix-blend-screen transition-opacity duration-1000 group-hover:opacity-[0.2]" style="background-image: url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e534354d-c5f2-4399-a1d9-2f50338e8c47_1600w.jpg'); background-size: cover; background-position: center;"></div>
            
            <!-- Gradient Divider Right -->
            <div class="hidden lg:block absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent z-20"></div>
            <!-- Gradient Divider Bottom (Mobile) -->
            <div class="block lg:hidden absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-20"></div>

            <div class="relative z-10 flex justify-between items-start font-mono text-xs text-zinc-500 uppercase tracking-widest">
                <span class="text-zinc-300 font-medium font-sans reveal-text">Cognitive Mesh</span>
                <span class="reveal-text">02//</span>
            </div>

            <p class="relative z-10 mt-8 text-xs text-zinc-400 leading-relaxed max-w-[280px] reveal-text">
                Data flow stems from legacy nodes. An interface born from overlapping algorithms and encrypted keys.
            </p>

            <div data-wireframe-visual class="relative z-10 flex-grow flex items-center justify-center py-12">
                <canvas id="canvas2" class="w-full max-w-[300px] aspect-square opacity-80 mix-blend-screen"></canvas>
                <!-- Floating Glyphs -->
                <div class="absolute inset-0 flex items-center justify-center gap-16 pointer-events-none">
                    <iconify-icon icon="solar:code-scan-linear" class="text-white/20 text-4xl animate-[pulse_4s_ease-in-out_infinite]"></iconify-icon>
                    <iconify-icon icon="solar:database-linear" class="text-white/20 text-4xl animate-[pulse_4s_ease-in-out_infinite] animation-delay-2000"></iconify-icon>
                </div>
            </div>

            <div class="relative z-10 space-y-6">
                <div class="text-right">
                    <p class="text-xs text-zinc-500 leading-relaxed max-w-[240px] ml-auto reveal-text">
                        Within Nexus, metrics are redefined: bridging analytical processing and immersive interaction. The ultimate signature of digital evolution.
                    </p>
                </div>
                <div class="relative flex justify-between items-end font-mono text-[10px] text-zinc-600 pt-12">
                    <div class="absolute top-0 right-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    <span class="reveal-text">Nexus.sys</span>
                    <span class="reveal-text">SYS.MEM.OVERFLOW</span>
                </div>
            </div>
        </div>

        <!-- Section 03: Esoteric Sphere -->
        <div class="group relative p-8 lg:p-10 flex flex-col justify-between h-[600px] lg:h-[800px] overflow-hidden">
            <!-- Background Image Aura Asset -->
            <div class="absolute inset-0 z-0 opacity-[0.08] mix-blend-screen transition-opacity duration-1000 group-hover:opacity-[0.2]" style="background-image: url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg'); background-size: cover; background-position: center;"></div>

            <div class="relative z-10 flex justify-between items-start font-mono text-xs text-zinc-500 uppercase tracking-widest">
                <span class="text-zinc-300 font-medium font-sans reveal-text">Kinetic Frequency</span>
                <span class="reveal-text">03//</span>
            </div>

            <p class="relative z-10 mt-8 text-xs text-zinc-400 leading-relaxed max-w-[280px] reveal-text">
                "Frequency" denotes the synchronization of fragmented data packets, individuals, or systems oscillating at parallel states.
            </p>

            <div data-wireframe-visual class="relative z-10 flex-grow flex items-center justify-center py-12">
                <canvas id="canvas3" class="w-full max-w-[300px] aspect-square opacity-80 mix-blend-screen"></canvas>
            </div>

            <div class="relative z-10 space-y-6">
                 <div class="pt-4 relative">
                    <div class="absolute top-0 right-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    <h3 class="text-sm font-medium text-white mb-2 reveal-text">State: Synchronized</h3>
                    <p class="text-xs text-zinc-500 leading-relaxed reveal-text">
                        Frequency: Data equals the juncture between pure logic and tactile feedback. Tuning to optimal processing bandwidths.
                    </p>
                </div>
                <div class="flex justify-between items-end font-mono text-[10px] text-zinc-600">
                    <div class="flex gap-2">
                        <span class="w-2 h-2 rounded-full border border-zinc-700"></span>
                        <span class="w-2 h-2 rounded-full border border-zinc-700 bg-white/20"></span>
                        <span class="w-2 h-2 rounded-full border border-zinc-700"></span>
                    </div>
                    <span class="reveal-text">Nexus.sys</span>
                </div>
            </div>
        </div>
    </main>

    <!-- Bottom Interface Bar -->
    <footer class="w-full relative z-20 bg-[#09090b]">
        <div class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div class="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between font-mono text-[10px] text-zinc-600 uppercase">
            <div class="flex items-center gap-4">
                <span class="reveal-text">Ping: 2ms</span>
                <span class="hidden sm:inline reveal-text">Cipher: RSA-4096</span>
            </div>
            <div class="flex items-center gap-4">
                <a href="#" class="hover:text-white transition-colors">Privacy</a>
                <a href="#" class="hover:text-white transition-colors">Terms</a>
                <a href="#" class="hover:text-white transition-colors">Doctrine</a>
            </div>
        </div>
    </footer>

    <!-- WebGL-like Canvas Animation Script & GSAP Reveal -->
    <script>
        // GSAP ScrollTrigger Text Reveal
        gsap.registerPlugin(ScrollTrigger);
        
        document.querySelectorAll('.reveal-text').forEach(el => {
            const text = el.innerText.trim();
            const words = text.split(/\\s+/);
            el.innerHTML = words.map(word => 
                \`<span style="overflow: hidden; display: inline-block; vertical-align: top;"><span style="display: inline-block; transform: translateY(100%);" class="reveal-word">\${word}</span></span>\`
            ).join(' ');

            gsap.to(el.querySelectorAll('.reveal-word'), {
                y: '0%',
                duration: 0.8,
                stagger: 0.03,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 95%',
                    toggleActions: 'play none none none'
                }
            });
        });

        // Wireframe Engine
        class WireframeEngine {
            constructor(canvasId, shapeType) {
                this.canvas = document.getElementById(canvasId);
                this.ctx = this.canvas.getContext('2d');
                this.width = this.canvas.offsetWidth;
                this.height = this.canvas.offsetHeight;
                this.canvas.width = this.width * 2; 
                this.canvas.height = this.height * 2;
                this.ctx.scale(2, 2);
                this.cx = this.width / 2;
                this.cy = this.height / 2;
                this.shapeType = shapeType;
                
                this.points = [];
                this.edges = [];
                this.angleX = 0;
                this.angleY = 0;
                
                this.initShape();
                this.animate();
            }

            initShape() {
                if (this.shapeType === 'cube') {
                    const s = 80;
                    this.points.push({x: s, y: s, z: s}, {x: -s, y: -s, z: s}, {x: -s, y: s, z: -s}, {x: s, y: -s, z: -s});
                    this.points.push({x: -s, y: -s, z: -s}, {x: s, y: s, z: -s}, {x: s, y: -s, z: s}, {x: -s, y: s, z: s});
                    this.edges.push([0,1], [0,2], [0,3], [1,2], [1,3], [2,3]);
                    this.edges.push([4,5], [4,6], [4,7], [5,6], [5,7], [6,7]);
                } else if (this.shapeType === 'cylinders') {
                    const r = 70;
                    const segments = 24;
                    for(let i=0; i<segments; i++) {
                        const theta = (i/segments) * Math.PI * 2;
                        this.points.push({ x: Math.cos(theta)*r, y: Math.sin(theta)*r, z: -30 });
                        this.points.push({ x: Math.cos(theta)*r, y: Math.sin(theta)*r, z: 30 });
                        let next = (i+1)%segments;
                        this.edges.push([i*2, next*2], [i*2+1, next*2+1], [i*2, i*2+1]);
                    }
                     let offset = this.points.length;
                     for(let i=0; i<segments; i++) {
                        const theta = (i/segments) * Math.PI * 2;
                        this.points.push({ x: Math.cos(theta)*r, y: -30, z: Math.sin(theta)*r });
                        this.points.push({ x: Math.cos(theta)*r, y: 30, z: Math.sin(theta)*r });
                        let next = (i+1)%segments;
                        this.edges.push([offset + i*2, offset + next*2], [offset + i*2+1, offset + next*2+1], [offset + i*2, offset + i*2+1]);
                    }
                } else if (this.shapeType === 'sphere') {
                    const t = (1.0 + Math.sqrt(5.0)) / 2.0;
                    const s = 50; 
                    const p = [
                        [-1,  t,  0], [ 1,  t,  0], [-1, -t,  0], [ 1, -t,  0],
                        [ 0, -1,  t], [ 0,  1,  t], [ 0, -1, -t], [ 0,  1, -t],
                        [ t,  0, -1], [ t,  0,  1], [-t,  0, -1], [-t,  0,  1]
                    ];
                    p.forEach(v => this.points.push({x: v[0]*s, y: v[1]*s, z: v[2]*s}));
                    for(let i=0; i<this.points.length; i++){
                        for(let j=i+1; j<this.points.length; j++){
                            let d = Math.hypot(this.points[i].x - this.points[j].x, this.points[i].y - this.points[j].y, this.points[i].z - this.points[j].z);
                            if(d < s*2.1) this.edges.push([i,j]);
                        }
                    }
                     p.forEach(v => this.points.push({x: v[0]*s*0.5, y: v[1]*s*0.5, z: v[2]*s*0.5}));
                     let off = 12;
                     for(let i=0; i<12; i++){
                        for(let j=i+1; j<12; j++){
                            let d = Math.hypot(this.points[off+i].x - this.points[off+j].x, this.points[off+i].y - this.points[off+j].y, this.points[off+i].z - this.points[off+j].z);
                            if(d < s*1.1) this.edges.push([off+i,off+j]);
                        }
                        this.edges.push([i, off+i]); 
                     }
                }
            }

            project(p) {
                let x = p.x * Math.cos(this.angleY) - p.z * Math.sin(this.angleY);
                let z = p.z * Math.cos(this.angleY) + p.x * Math.sin(this.angleY);
                let y = p.y * Math.cos(this.angleX) - z * Math.sin(this.angleX);
                z = z * Math.cos(this.angleX) + p.y * Math.sin(this.angleX);
                
                let fov = 400;
                let scale = fov / (fov + z);
                return { x: x * scale + this.cx, y: y * scale + this.cy, z: z };
            }

            animate() {
                this.ctx.clearRect(0, 0, this.width, this.height);
                this.angleY += 0.005;
                this.angleX += 0.002;
                
                this.ctx.lineWidth = 0.8;

                let projected = this.points.map(p => this.project(p));

                this.edges.forEach(e => {
                    let p1 = projected[e[0]];
                    let p2 = projected[e[1]];
                    let depth = (p1.z + p2.z) / 2;
                    let alpha = Math.max(0.1, (1 - (depth / 200)));
                    
                    this.ctx.beginPath();
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.strokeStyle = \`rgba(255, 255, 255, \${alpha * 0.4})\`;
                    this.ctx.stroke();
                });

                projected.forEach(p => {
                    let alpha = Math.max(0.1, (1 - (p.z / 200)));
                    if (alpha > 0.5) {
                        this.ctx.fillStyle = \`rgba(255, 255, 255, \${alpha})\`;
                        this.ctx.fillRect(p.x-1, p.y-1, 2, 2);
                    }
                });

                requestAnimationFrame(() => this.animate());
            }
        }

        window.onload = () => {
            new WireframeEngine('canvas1', 'cube');
            new WireframeEngine('canvas2', 'cylinders');
            new WireframeEngine('canvas3', 'sphere');
        };
    <\/script>
</body>
</html>`,C8=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cyber Defenses</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=DM+Mono:wght@300;400&family=Plus+Jakarta+Sans:wght@300;400&display=swap" rel="stylesheet">
</head>
<body class="bg-[#030303] min-h-screen flex flex-col items-center justify-center overflow-hidden text-white relative antialiased selection:bg-red-500/30" style="font-family: 'Plus Jakarta Sans', sans-serif;">
    
    <!-- Canvas for background line animation -->
    <canvas id="bg-canvas" class="absolute inset-0 z-0 opacity-50 pointer-events-none"></canvas>

    <!-- Ambient background glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[800px] h-[500px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

    <main class="relative z-10 flex flex-col items-center justify-center w-full min-h-screen max-w-7xl mx-auto px-4 sm:px-6">
        
        <!-- 3D Card Carousel -->
        <div class="relative flex items-center justify-center w-full h-[400px] sm:h-[650px]" style="perspective: 1200px;">
            <div id="carousel" class="relative w-full h-full flex items-center justify-center" style="transform-style: preserve-3d;">
                
                <!-- Left Cards -->
                <div class="card absolute w-32 sm:w-64 h-[230px] sm:h-[422px] rounded-xl z-0 bg-gradient-to-r from-[#0a0202] to-[#1f0505] border border-red-900/10 cursor-pointer pointer-events-auto" style="transform: translateX(-180%) translateZ(-400px) rotateY(35deg); opacity: 0.15; box-shadow: inset 0 0 20px rgba(0,0,0,0.8);"></div>
                <div class="card absolute w-32 sm:w-64 h-[230px] sm:h-[422px] rounded-xl z-10 bg-gradient-to-r from-[#140303] to-[#3d0a0a] border border-red-900/20 cursor-pointer pointer-events-auto" style="transform: translateX(-120%) translateZ(-250px) rotateY(25deg); opacity: 0.4; box-shadow: inset 0 0 20px rgba(0,0,0,0.5);"></div>
                <div class="card absolute w-32 sm:w-64 h-[230px] sm:h-[422px] rounded-xl z-20 bg-gradient-to-r from-[#290606] to-[#6b1111] border border-red-700/30 cursor-pointer pointer-events-auto" style="transform: translateX(-60%) translateZ(-100px) rotateY(15deg); opacity: 0.7; box-shadow: inset 0 0 20px rgba(0,0,0,0.3);"></div>

                <!-- Right Cards -->
                <div class="card absolute w-32 sm:w-64 h-[230px] sm:h-[422px] rounded-xl z-0 bg-gradient-to-l from-[#0a0202] to-[#1f0505] border border-red-900/10 cursor-pointer pointer-events-auto" style="transform: translateX(180%) translateZ(-400px) rotateY(-35deg); opacity: 0.15; box-shadow: inset 0 0 20px rgba(0,0,0,0.8);"></div>
                <div class="card absolute w-32 sm:w-64 h-[230px] sm:h-[422px] rounded-xl z-10 bg-gradient-to-l from-[#140303] to-[#3d0a0a] border border-red-900/20 cursor-pointer pointer-events-auto" style="transform: translateX(120%) translateZ(-250px) rotateY(-25deg); opacity: 0.4; box-shadow: inset 0 0 20px rgba(0,0,0,0.5);"></div>
                <div class="card absolute w-32 sm:w-64 h-[230px] sm:h-[422px] rounded-xl z-20 bg-gradient-to-l from-[#290606] to-[#6b1111] border border-red-700/30 cursor-pointer pointer-events-auto" style="transform: translateX(60%) translateZ(-100px) rotateY(-15deg); opacity: 0.7; box-shadow: inset 0 0 20px rgba(0,0,0,0.3);"></div>

                <!-- Center Active Card -->
                <div class="card absolute w-36 sm:w-72 h-[269px] sm:h-[461px] bg-gradient-to-br from-[#ff4747] to-[#cc0000] rounded-xl flex items-center justify-center z-30 border border-red-300/40 overflow-hidden cursor-pointer pointer-events-auto" style="transform: translateZ(50px); box-shadow: 0 0 80px 15px rgba(220, 38, 38, 0.35), inset 0 0 30px rgba(255,255,255,0.15);">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg" class="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply pointer-events-none" alt="Abstract Pattern">
                    <div class="relative flex w-full h-full pointer-events-none" style="background-image: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%), repeating-linear-gradient(-45deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 2px, transparent 2px, transparent 12px);">
                    </div>
                </div>
            </div>
        </div>

        <!-- Typography Section (Overlayed) -->
        <div class="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none z-40" id="hero-text">
            
            <!-- Monospaced Technical Badge -->
            <div id="hero-badge" class="opacity-0 flex items-center gap-3 px-4 py-2 rounded-full bg-[#1a0505]/80 backdrop-blur-md text-red-400 text-xs font-light tracking-widest uppercase mb-8" style="font-family: 'DM Mono', monospace; box-shadow: 0 0 20px rgba(220,38,38,0.15); border: 1px solid transparent; background-clip: padding-box, border-box; background-origin: padding-box, border-box; background-image: linear-gradient(#1a0505, #1a0505), linear-gradient(to right, rgba(153,27,27,0.6), rgba(239,68,68,0.3));">
                <iconify-icon icon="solar:radar-linear" width="16" height="16" stroke-width="1.5"></iconify-icon>
                <span>Continuous Network Surveillance</span>
            </div>
            
            <!-- Elegant Serif Headline -->
            <h1 class="text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-[#f5f5f5] leading-none max-w-5xl flex flex-col items-center gap-y-2 sm:gap-y-4" style="font-family: 'Cormorant Garamond', serif; text-shadow: 0 10px 40px rgba(0,0,0,0.9);">
                <div class="flex flex-wrap justify-center gap-x-3 sm:gap-x-4">
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">Expose</span></span>
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">hidden</span></span>
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">vulnerabilities</span></span>
                </div>
                <div class="flex flex-wrap justify-center gap-x-3 sm:gap-x-4 italic text-red-100">
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">within</span></span>
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">your</span></span>
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">cloud</span></span>
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">infrastructure</span></span>
                </div>
            </h1>

            <!-- Clean Sans-Serif CTA -->
            <button id="hero-button" class="opacity-0 group relative mt-10 sm:mt-14 px-8 py-4 rounded-lg text-sm font-light text-white transition-all active:scale-95 pointer-events-auto flex items-center justify-center bg-red-600 border border-red-500/50 overflow-hidden" style="font-family: 'Plus Jakarta Sans', sans-serif;">
                <span class="absolute inset-0 w-full h-full bg-red-500 transition-all duration-500 ease-out [clip-path:circle(0%_at_50%_50%)] group-hover:[clip-path:circle(150%_at_50%_50%)] z-0"></span>
                <span class="relative z-10 flex items-center gap-2">
                    Start Threat Assessment
                    <iconify-icon icon="solar:arrow-right-linear" width="18" height="18" stroke-width="1.5"></iconify-icon>
                </span>
            </button>
        </div>
    </main>

    <script>
        // Background Canvas Animation
        const canvas = document.getElementById('bg-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        function initCanvas() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.max(1, Math.floor(width * dpr));
            canvas.height = Math.max(1, Math.floor(height * dpr));
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.imageSmoothingEnabled = false;
            particles = [];
            const particleCount = window.innerWidth < 768 ? 40 : 100;
            
            for(let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    baseLength: Math.random() * 80 + 20,
                    speedY: Math.random() * 0.8 + 0.2,
                    baseOpacity: Math.random() * 0.2 + 0.05
                });
            }
        }

        window.addEventListener('resize', initCanvas);
        initCanvas();

        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);
            const centerX = width / 2;
            const centerY = height / 2;
            ctx.lineCap = 'butt';
            ctx.lineJoin = 'miter';
            
            particles.forEach(p => {
                const distFromCenterX = Math.abs(p.x - centerX);
                const distFromCenterY = Math.abs(p.y - centerY);
                
                const proximityX = Math.max(0, 1 - (distFromCenterX / (width / 2)));
                const proximityY = Math.max(0, 1 - (distFromCenterY / (height / 2)));
                const centerProximity = proximityX * (0.4 + proximityY * 0.6);
                
                const currentLength = p.baseLength * (1 + centerProximity * 4); 
                
                const currentOpacity = Math.min(1.0, p.baseOpacity + (centerProximity * 2.0));
                const brightness = Math.floor(centerProximity * 180);
                
                ctx.beginPath();
                const grad = ctx.createLinearGradient(p.x, p.y, p.x, p.y + currentLength);
                grad.addColorStop(0, \`rgba(220, 38, 38, 0)\`);
                grad.addColorStop(0.5, \`rgba(255, \${38 + brightness}, \${38 + brightness}, \${currentOpacity})\`);
                grad.addColorStop(1, \`rgba(220, 38, 38, 0)\`);
                
                ctx.strokeStyle = grad;
                ctx.lineWidth = 0.5;
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x, p.y + currentLength);
                ctx.stroke();

                p.y -= p.speedY * 1.5 * (1 + centerProximity * 0.5);
                
                if(p.y + currentLength < 0) {
                    p.y = height;
                    p.x = Math.random() * width;
                }
            });
            requestAnimationFrame(animateCanvas);
        }
        animateCanvas();

        // 3D Cards Floating, Mouse Tracking & Hover Animation
        const carousel = document.getElementById('carousel');
        const cards = document.querySelectorAll('.card');
        let time = 0;
        let targetRotateY = 0;
        let currentRotateY = 0;

        cards.forEach(card => {
            card.addEventListener('mouseenter', () => card.isHovered = true);
            card.addEventListener('mouseleave', () => card.isHovered = false);
            card.hoverAmt = 0;
        });

        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) - 0.5;
            targetRotateY = x * 40; 
        });

        function animateCards() {
            time += 0.015;
            currentRotateY += (targetRotateY - currentRotateY) * 0.08;
            carousel.style.transform = \`rotateY(\${currentRotateY}deg)\`;

            cards.forEach((card, index) => {
                if(!card.dataset.baseTransform) {
                    card.dataset.baseTransform = card.style.transform;
                    const match = card.dataset.baseTransform.match(/translateX\\(([^)]+)\\)/);
                    card.directionX = match ? parseFloat(match[1]) : 0;
                }
                
                const targetHover = card.isHovered ? 1 : 0;
                card.hoverAmt += (targetHover - card.hoverAmt) * 0.15;
                
                const hoverZ = card.hoverAmt * 60;
                const hoverY = card.hoverAmt * -20;
                let hoverX = 0;
                
                if (card.directionX < 0) hoverX = card.hoverAmt * -40;
                else if (card.directionX > 0) hoverX = card.hoverAmt * 40;

                const offset = Math.sin(time + (index * 0.5)) * 8;
                
                card.style.transform = \`\${card.dataset.baseTransform} translateX(\${hoverX}px) translateY(\${offset + hoverY}px) translateZ(\${hoverZ}px)\`;
            });
            requestAnimationFrame(animateCards);
        }
        animateCards();

        // Entrance Animation with GSAP Masked Reveal
        gsap.registerPlugin(ScrollTrigger);

        setTimeout(() => {
            // Animate headline words in a masked stagger
            gsap.to('.word', {
                y: "0%",
                duration: 1.2,
                stagger: 0.06,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: "#hero-text",
                    start: "top 90%"
                }
            });

            // Fade in and float up the badge and button sequentially
            gsap.fromTo(['#hero-badge', '#hero-button'], 
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power3.out", delay: 0.4 }
            );
        }, 150);
    <\/script>
</body>
</html>`,A8=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>System Override</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>
<body class="bg-zinc-900 text-orange-500 font-mono w-full h-screen overflow-hidden relative select-none flex items-center justify-center">

    <!-- Aura Asset Background Image (Subtle) -->
    <div class="absolute inset-0 z-[-1] opacity-30 mix-blend-screen bg-cover bg-center" style="background-image: url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg');"></div>

    <!-- Dither / Noise Overlay -->
    <div class="pointer-events-none absolute inset-0 z-50 opacity-[0.06] mix-blend-screen" style="background-image: url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 2 2%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Crect width=%221%22 height=%221%22 fill=%22%23f97316%22/%3E%3Crect x=%221%22 y=%221%22 width=%221%22 height=%221%22 fill=%22%23f97316%22/%3E%3C/svg%3E'); background-size: 2px 2px;"></div>

    <!-- WebGL-style Block by Block Animation Canvas -->
    <canvas id="grid-canvas" class="absolute inset-0 z-0 opacity-50" aria-hidden="true"></canvas>

    <!-- Viewport Corner Markers -->
    <div class="absolute top-4 left-4 w-4 h-4 border-t border-l border-orange-500/50 z-10"></div>
    <div class="absolute top-4 right-4 w-4 h-4 border-t border-r border-orange-500/50 z-10"></div>
    <div class="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-orange-500/50 z-10"></div>
    <div class="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-orange-500/50 z-10"></div>

    <!-- Background Telemetry Text -->
    <div class="absolute top-8 left-8 text-xs font-thin opacity-60 tracking-widest flex flex-col gap-1 z-10 hidden sm:flex">
        <span>SYNC_PHASE: <span id="log-frame">000000</span></span>
        <span>SYS_OVERRIDE_SEQ: [ ACTIVE ]</span>
        <span>ROUTE_MAP: TRACING</span>
        <span>CRIT_ALERT:</span>
        <span class="text-orange-600 animate-pulse">> ERR_TIMEOUT</span>
        <span id="typewriter" class="text-orange-400"></span>
    </div>

    <div class="absolute bottom-8 right-8 text-xs font-thin opacity-60 tracking-widest text-right z-10 hidden sm:block">
        <span id="log-mem">REG_ADDR: 0xFA48B2</span><br>
        <span>STATE: OVERRIDING</span>
    </div>

    <!-- Main Content Container -->
    <main class="relative z-20 w-full max-w-5xl h-full flex items-center justify-center px-4 sm:px-16">
        
        <!-- Container Lines & Mini Squares -->
        <div class="absolute inset-y-12 left-8 w-px bg-gradient-to-b from-transparent via-orange-500/30 to-transparent hidden sm:block"></div>
        <div class="absolute inset-y-12 right-8 w-px bg-gradient-to-b from-transparent via-orange-500/30 to-transparent hidden sm:block"></div>
        <div class="absolute top-1/4 left-[30px] w-1.5 h-1.5 border border-orange-500/80 hidden sm:block"></div>
        <div class="absolute bottom-1/4 left-[30px] w-1.5 h-1.5 border border-orange-500/80 hidden sm:block"></div>
        <div class="absolute top-1/3 right-[30px] w-1.5 h-1.5 border border-orange-500/80 hidden sm:block"></div>
        <div class="absolute bottom-1/3 right-[30px] w-1.5 h-1.5 border border-orange-500/80 hidden sm:block"></div>

        <!-- The Main Orange Block (Gradient Border for Premium Surface) -->
        <div class="p-[1px] bg-gradient-to-br from-orange-300 via-orange-600/70 to-orange-900/40 relative w-full shadow-[0_0_50px_rgba(249,115,22,0.15)]">
            
            <div class="relative w-full h-40 sm:h-48 bg-[#f97316] flex items-center transition-all duration-100">
                
                <!-- Top Left Tab -->
                <div class="absolute -top-6 left-0 h-6 w-24 bg-[#f97316] flex items-center justify-between px-2 text-xs font-normal text-zinc-800 tracking-widest border-b border-zinc-800">
                    <span>TIMEOUT</span>
                    <div class="w-1.5 h-1.5 bg-zinc-800"></div>
                </div>

                <!-- Right Edge Extrusions & Cutouts -->
                <div class="absolute -top-3 right-0 h-3 w-10 sm:w-16 bg-[#f97316]">
                    <div class="absolute top-1 right-1 w-1 h-1 bg-zinc-800"></div>
                </div>
                <div class="absolute -bottom-3 right-0 h-3 w-10 sm:w-16 bg-[#f97316]">
                    <div class="absolute bottom-1 right-1 w-1 h-1 bg-zinc-800"></div>
                </div>

                <!-- Left Edge Middle Cutout -->
                <div class="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-4 bg-zinc-800 border-r border-[#f97316]/50"></div>
                <!-- Right Edge Middle Cutout -->
                <div class="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-6 bg-zinc-800"></div>

                <!-- Inner Layout -->
                <div class="flex w-full h-full px-4 sm:px-8">
                    
                    <!-- Left Section: Warning & Text -->
                    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-4 sm:gap-6 w-full sm:w-1/2 border-zinc-800/30 sm:border-r pr-0 sm:pr-6 relative gs-reveal-container">
                        <!-- Subtle animated background highlight in left section -->
                        <div class="absolute inset-0 bg-white/5 opacity-0 animate-[pulse_4s_ease-in-out_infinite]" style="animation-direction: alternate;"></div>
                        
                        <iconify-icon icon="solar:round-transfer-horizontal-linear" class="text-zinc-800 text-5xl sm:text-7xl shrink-0 animate-spin-slow relative z-10" style="stroke-width: 1.5px; animation: spin 4s linear infinite;"></iconify-icon>
                        <div class="flex flex-col relative z-10 pt-1">
                            <h1 class="text-zinc-800 text-3xl sm:text-5xl font-light tracking-tight leading-[0.85] uppercase overflow-hidden pb-1">
                                <span class="block gs-reveal">System</span>
                            </h1>
                            <h2 class="text-zinc-800 text-3xl sm:text-5xl font-thin tracking-tight leading-[0.85] uppercase mt-1 overflow-hidden pb-1">
                                <span class="block gs-reveal">Override</span>
                            </h2>
                        </div>
                    </div>

                    <!-- Right Section: Data Matrix -->
                    <div class="hidden sm:flex flex-1 relative items-center justify-end pl-6">
                        <!-- Crosshairs / Guides -->
                        <div class="absolute inset-x-6 top-1/2 h-px bg-zinc-800/20 -translate-y-1/2"></div>
                        <div class="absolute inset-y-8 right-32 w-px bg-zinc-800/20"></div>
                        <div class="absolute inset-y-8 right-12 w-px bg-zinc-800/20"></div>

                        <!-- Data Grid Blocks -->
                        <div class="flex gap-4 sm:gap-6 relative z-10">
                            <!-- Block Group 1 -->
                            <div class="grid grid-cols-2 gap-1.5 h-fit">
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                            </div>
                            
                            <!-- Block Group 2 (Offset) -->
                            <div class="grid grid-cols-2 gap-1.5 h-fit mt-8">
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] opacity-20 animate-pulse"></div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                            </div>

                            <div class="w-2"></div>

                            <!-- Block Group 3 (Top aligned, missing piece blinking to suggest retry) -->
                            <div class="grid grid-cols-2 gap-1.5 h-fit">
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                                <div class="w-5 h-5 bg-transparent border border-zinc-800 relative animate-pulse">
                                    <div class="absolute inset-x-1 top-1/2 h-px bg-zinc-800"></div>
                                    <div class="absolute inset-y-1 left-1/2 w-px bg-zinc-800"></div>
                                </div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bottom Left Micro Details -->
                <div class="absolute bottom-2 left-4 flex gap-2 items-center text-zinc-800">
                    <iconify-icon icon="solar:server-square-linear" class="text-lg opacity-80" style="stroke-width: 1.5px;"></iconify-icon>
                    <div class="flex flex-col">
                        <span class="text-xs tracking-widest opacity-80 uppercase font-light leading-none">AUTH_NODE // ACCESS DENIED</span>
                        <span class="text-xs tracking-widest opacity-60 uppercase font-thin mt-1">EXECUTING BYPASS PROTOCOL...</span>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <script>
        // GSAP ScrollTrigger Masked Reveal
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".gs-reveal", {
            y: "120%",
            duration: 1.2,
            stagger: 0.15,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".gs-reveal-container",
                start: "top 95%",
            }
        });

        // WebGL-style Block by Block Animation (Simulated in 2D for constraints)
        const canvas = document.getElementById('grid-canvas');
        const ctx = canvas.getContext('2d');
        let width, height, time = 0;

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        function draw() {
            ctx.clearRect(0, 0, width, height);
            time += 0.04;

            const blockSize = 48;
            const blockGap = 2;
            const pitch = blockSize + blockGap;
            const cols = Math.ceil(width / pitch);
            const rows = Math.ceil(height / pitch);

            const centerX = cols / 2;
            const centerY = rows / 2;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const dist = Math.sqrt(Math.pow(i - centerX, 2) + Math.pow(j - centerY, 2));
                    const wave = Math.sin(time - dist * 0.4);
                    
                    if (wave > 0) {
                        const alpha = wave * 0.15; 
                        ctx.fillStyle = \`rgba(249, 115, 22, \${alpha})\`;
                        
                        // Block scaling for "Z-depth" pulsing feel
                        const scale = wave * 0.7 + 0.3;
                        const size = blockSize * scale;
                        const offset = (pitch - size) / 2;
                        
                        ctx.fillRect(i * pitch + offset, j * pitch + offset, size, size);
                    }
                }
            }
            requestAnimationFrame(draw);
        }
        draw();

        // Simulate telemetry data updates
        setInterval(() => {
            const frameLog = document.getElementById('log-frame');
            const memLog = document.getElementById('log-mem');
            if (frameLog) frameLog.innerText = Math.floor(Math.random() * 999999).toString().padStart(6, '0');
            if (memLog) {
                const hex = Math.floor(Math.random() * 16777215).toString(16).toUpperCase();
                memLog.innerText = \`REG_ADDR: 0x\${hex}\`;
            }
        }, 150);

        // Typewriter Animation Logic
        const typewriterElement = document.getElementById('typewriter');
        if (typewriterElement) {
            const phrases = ["> INITIATING BYPASS...", "> FLUSHING REGISTERS...", "> TIMEOUT: RETRYING..."];
            let phraseIdx = 0;
            let charIdx = 0;
            let isDeleting = false;
            
            function type() {
                const currentPhrase = phrases[phraseIdx];
                if (isDeleting) {
                    charIdx--;
                } else {
                    charIdx++;
                }
                
                typewriterElement.innerText = currentPhrase.substring(0, charIdx) + "_";
                
                let speed = isDeleting ? 30 : 60;
                
                if (!isDeleting && charIdx === currentPhrase.length) {
                    speed = 2000;
                    isDeleting = true;
                } else if (isDeleting && charIdx === 0) {
                    isDeleting = false;
                    phraseIdx = (phraseIdx + 1) % phrases.length;
                    speed = 500;
                }
                
                setTimeout(type, speed);
            }
            type();
        }
    <\/script>
</body>
</html>`,z8=`<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NexusNode Infrastructure</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <!-- GSAP & ScrollTrigger for Masked Reveal -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>
<body class="bg-black text-white font-sans min-h-screen relative overflow-x-hidden selection:bg-white/20 selection:text-white font-light" style="background-color: #000; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">

    <!-- WebGL Background Container -->
    <div class="fixed inset-0 z-0 pointer-events-none">
        <canvas id="topo-canvas" class="w-full h-full"></canvas>
        <!-- Gradient overlay to fade bottom and top for text readability -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black z-10"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] opacity-90 z-10"></div>
    </div>

    <!-- Main Content -->
    <main class="relative z-20 flex flex-col min-h-screen">
        
        <!-- Navigation -->
        <header class="container mx-auto px-6 py-6 flex items-center justify-between reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out">
            <div class="flex items-center gap-2 text-white hover:text-neutral-300 transition-colors cursor-pointer">
                <iconify-icon icon="solar:radar-linear" width="24"></iconify-icon>
                <span class="font-light text-sm tracking-tight">NexusNode</span>
            </div>
            <nav class="hidden md:flex items-center gap-8 text-sm text-neutral-400 font-extralight">
                <a href="#" class="hover:text-white transition-colors">Compute Clusters</a>
                <a href="#" class="hover:text-white transition-colors">Observability</a>
                <a href="#" class="hover:text-white transition-colors">Throughput</a>
                <a href="#" class="hover:text-white transition-colors">Consensus</a>
            </nav>
            <div class="flex items-center gap-4">
                <a href="#" class="hidden md:block text-sm text-neutral-400 font-extralight hover:text-white transition-colors">Sign In</a>
                <button class="bg-white text-black px-4 py-2 rounded-full text-sm font-light hover:bg-neutral-200 transition-colors">
                    Get Started
                </button>
            </div>
        </header>

        <!-- Hero Section -->
        <section class="flex-grow flex flex-col items-center justify-center text-center px-6 py-24 md:py-32">
            <div class="max-w-4xl mx-auto flex flex-col items-center">
                
                <!-- Pill Badge -->
                <div class="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
                    <span class="flex h-2 w-2 relative">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    <span class="text-xs font-extralight text-neutral-300 tracking-wide uppercase">Nexus OS v4.2 deployment ready</span>
                    <iconify-icon icon="solar:alt-arrow-right-linear" width="14" class="text-neutral-500"></iconify-icon>
                </div>

                <h1 class="mask-container text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[1.1]">
                    <span class="overflow-hidden inline-block align-bottom pb-2"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Orchestrate</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-2"><span class="mask-word inline-block opacity-0 translate-y-[120%]">the</span></span>
                    <br class="hidden md:block" />
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-600 font-extralight inline-block">
                        <span class="overflow-hidden inline-block align-bottom pb-2"><span class="mask-word inline-block opacity-0 translate-y-[120%]">neural</span></span>
                        <span class="overflow-hidden inline-block align-bottom pb-2"><span class="mask-word inline-block opacity-0 translate-y-[120%]">compute</span></span>
                        <span class="overflow-hidden inline-block align-bottom pb-2"><span class="mask-word inline-block opacity-0 translate-y-[120%]">fabric.</span></span>
                    </span>
                </h1>
                
                <p class="mask-container mt-6 text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed font-extralight">
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Provision</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">ultra-low</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">latency</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">inference</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">nodes</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">with</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">zero</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">configuration.</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Enterprise-grade</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">AI</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">infrastructure</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">built</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">for</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">real-time</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">model</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">serving.</span></span>
                </p>
                
                <div class="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-300 mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                    <button class="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-light hover:bg-neutral-200 transition-colors group">
                        Launch Workspace
                        <iconify-icon icon="solar:transfer-horizontal-linear" width="18" class="group-hover:translate-x-0.5 transition-transform"></iconify-icon>
                    </button>
                    <button class="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-light text-white border border-white/20 hover:bg-white/5 transition-colors">
                        View Documentation
                    </button>
                </div>
            </div>
        </section>

        <!-- Features Matrix with Subtler Gradient Borders -->
        <section class="container mx-auto px-6 py-24 pb-32">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-300">
                
                <!-- Feature Card 1 -->
                <div class="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/10 overflow-hidden shadow-2xl shadow-white/5">
                    <div class="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div class="relative h-full bg-[#050505] rounded-[15px] p-8 flex flex-col gap-4 z-10">
                        <div class="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-2">
                            <iconify-icon icon="solar:scanner-linear" width="20"></iconify-icon>
                        </div>
                        <h3 class="mask-container text-xl font-light tracking-tight text-white">
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Homomorphic</span></span>
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Encryption</span></span>
                        </h3>
                        <p class="text-sm text-neutral-400 font-extralight leading-relaxed">Cryptographic isolation guaranteeing absolute data privacy during active model inference across edge nodes.</p>
                    </div>
                </div>

                <!-- Feature Card 2 -->
                <div class="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/10 overflow-hidden shadow-2xl shadow-white/5">
                    <div class="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div class="relative h-full bg-[#050505] rounded-[15px] p-8 flex flex-col gap-4 z-10">
                        <div class="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-2">
                            <iconify-icon icon="solar:cpu-bolt-linear" width="20"></iconify-icon>
                        </div>
                        <h3 class="mask-container text-xl font-light tracking-tight text-white">
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Serverless</span></span>
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">GPUs</span></span>
                        </h3>
                        <p class="text-sm text-neutral-400 font-extralight leading-relaxed">On-demand distributed compute layers. Elastic scaling powered by decentralized tensor processing units.</p>
                    </div>
                </div>

                <!-- Feature Card 3 -->
                <div class="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/10 overflow-hidden shadow-2xl shadow-white/5">
                    <div class="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div class="relative h-full bg-[#050505] rounded-[15px] p-8 flex flex-col gap-4 z-10">
                        <div class="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-2">
                            <iconify-icon icon="solar:server-square-linear" width="20"></iconify-icon>
                        </div>
                        <h3 class="mask-container text-xl font-light tracking-tight text-white">
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Global</span></span>
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">State</span></span>
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Sync</span></span>
                        </h3>
                        <p class="text-sm text-neutral-400 font-extralight leading-relaxed">Distributed vector database integration. Access and mutate embedding states with sub-millisecond precision.</p>
                    </div>
                </div>

            </div>
        </section>

    </main>

    <!-- Interactions & WebGL Implementation -->
    <script>
        // Native Reveal Animations Trigger
        setTimeout(() => {
            document.querySelectorAll('.reveal').forEach(el => {
                el.classList.remove('opacity-0', 'translate-y-4');
            });
        }, 100);

        // GSAP Masked Reveal Implementation
        gsap.registerPlugin(ScrollTrigger);
        document.querySelectorAll('.mask-container').forEach(container => {
            const words = container.querySelectorAll('.mask-word');
            gsap.to(words, {
                scrollTrigger: {
                    trigger: container,
                    start: "top 95%",
                },
                y: "0%",
                opacity: 1,
                duration: 1.1,
                stagger: 0.05,
                ease: "power4.out",
                delay: 0.1
            });
        });

        // WebGL Topography
        const canvas = document.getElementById('topo-canvas');
        const gl = canvas.getContext('webgl', { alpha: false, antialias: false, depth: false });

        if (gl) {
            const vsSource = \`
                attribute vec2 a_position;
                void main() { gl_Position = vec4(a_position, 0.0, 1.0); }
            \`;

            const fsSource = \`
                precision highp float;
                uniform vec2 u_resolution;
                uniform float u_time;
                uniform float u_dpr;

                vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
                float snoise(vec2 v){
                    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
                    vec2 i  = floor(v + dot(v, C.yy) );
                    vec2 x0 = v -   i + dot(i, C.xx);
                    vec2 i1; i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
                    vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1;
                    i = mod(i, 289.0);
                    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
                    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
                    m = m*m; m = m*m;
                    vec3 x = 2.0 * fract(p * C.www) - 1.0;
                    vec3 h = abs(x) - 0.5; vec3 ox = floor(x + 0.5);
                    vec3 a0 = x - ox; m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
                    vec3 g; g.x  = a0.x  * x0.x  + h.x  * x0.y; g.yz = a0.yz * x12.xz + h.yz * x12.yw;
                    return 130.0 * dot(m, g);
                }

                void main() {
                    vec2 st = gl_FragCoord.xy / u_resolution.xy;
                    st.x *= u_resolution.x / u_resolution.y;

                    // 1px physical grid rendering
                    float gridSize = 48.0 * u_dpr;
                    vec2 gridSt = gl_FragCoord.xy / gridSize;
                    vec2 gridFract = fract(gridSt);
                    float lineThickness = 1.0 / gridSize;
                    float gridLines = step(1.0 - lineThickness, gridFract.x) + step(1.0 - lineThickness, gridFract.y);
                    gridLines = clamp(gridLines, 0.0, 1.0) * 0.12; 

                    // Ultra-thin Topographic Lines
                    float noiseScale = 1.4;
                    vec2 noisePos = st * noiseScale + vec2(u_time * 0.015, u_time * 0.025);
                    float n = snoise(noisePos) * 0.5 + 0.5;
                    float numBands = 10.0;
                    float bandVal = n * numBands;
                    float triangleWave = abs(fract(bandVal) - 0.5) * 2.0; 
                    
                    // Thinner smoothstep constraint for fine industrial aesthetic
                    float topoLines = smoothstep(0.02, 0.00, triangleWave) * 0.45;

                    vec3 color = vec3(0.0);
                    color += vec3(1.0) * gridLines;
                    color += vec3(1.0) * topoLines;

                    gl_FragColor = vec4(color, 1.0);
                }
            \`;

            function createShader(gl, type, source) {
                const shader = gl.createShader(type);
                gl.shaderSource(shader, source);
                gl.compileShader(shader);
                return shader;
            }

            const vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
            const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
            const program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            gl.useProgram(program);

            const positionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

            const positionLocation = gl.getAttribLocation(program, "a_position");
            gl.enableVertexAttribArray(positionLocation);
            gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

            const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
            const timeLocation = gl.getUniformLocation(program, "u_time");
            const dprLocation = gl.getUniformLocation(program, "u_dpr");

            function resizeCanvas() {
                const dpr = window.devicePixelRatio || 1;
                canvas.width = window.innerWidth * dpr;
                canvas.height = window.innerHeight * dpr;
                gl.viewport(0, 0, canvas.width, canvas.height);
                gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
                gl.uniform1f(dprLocation, dpr);
            }

            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();

            let startTime = performance.now();
            function render(time) {
                gl.uniform1f(timeLocation, (time - startTime) * 0.001);
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
                requestAnimationFrame(render);
            }
            requestAnimationFrame(render);
        }
    <\/script>
</body>
</html>`,Zi={mode:"dark",speed:1,size:1,gap:2,length:1,density:1,strokeWidth:1,opacity:1,hue:0,saturation:1,brightness:1},gn="#eef1f6";function za(a,t,i){return Math.min(i,Math.max(t,a))}function Wi(a,t,i=1){return Math.max(i,Math.round(a*t))}function O8(a){return a==="cylinders"||a==="sphere"?a:"cube"}function ds(a,t=3){const i=Number(a).toFixed(t);return i.includes(".")?i:`${i}.0`}function R8(a,t="dark"){return a==null?t:a==="light"||a===1||a==="1"?"light":"dark"}function $2(){if(typeof document>"u"||typeof window>"u")return"dark";const a=document.documentElement,t=a.dataset.scheme??a.dataset.theme;return t==="light"||t==="dark"?t:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function j8(a){const[t,i]=N.useState($2);return N.useEffect(()=>{if(!a||typeof document>"u"||typeof window>"u")return;const n=document.documentElement,r=window.matchMedia("(prefers-color-scheme: dark)"),l=()=>i($2()),c=new MutationObserver(l);return c.observe(n,{attributes:!0,attributeFilter:["data-scheme","data-theme"]}),r.addEventListener("change",l),l(),()=>{c.disconnect(),r.removeEventListener("change",l)}},[a]),t}function Z5(a,t){return typeof a=="function"?a(t):a}const ng=`
[data-threeui-role="ui"].flex-grow {
  flex: none !important;
  width: min(calc(100% - 32px), var(--threeui-target-width, 360px)) !important;
  height: auto !important;
  min-height: 0 !important;
  max-height: calc(100% - 32px) !important;
  aspect-ratio: 1 / 1 !important;
  margin: 0 !important;
  overflow: hidden !important;
}
[data-threeui-role="ui"] > canvas {
  position: absolute !important;
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
}
`;function ag(a,{mode:t}){let i=a.replaceAll("time += 0.015;","time += 0.015 * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);");return t==="light"&&(i=i.replaceAll("ctx.fillStyle = '#020804';",`ctx.fillStyle = '${gn}';`).replaceAll("rgba(52,211,153,","rgba(4,120,87,")),i}const hi={constellationField:{title:"Constellation Field",source:p8,supportsMode:!0,background:a=>a==="light"?gn:"#070914",targets:[{selector:"#constellationCanvas",role:"background"}],patch(a,{size:t,length:i,density:n,strokeWidth:r,mode:l}){let c=a.replace("const LINK = 160;",`const LINK = ${Math.round(160*i)};`).replace("const MAX_NODES = window.innerWidth < 768 ? 40 : 85;",`const MAX_NODES = window.innerWidth < 768 ? ${Wi(40,n,8)} : ${Wi(85,n,12)};`).replace("radius: Math.random() * 2.4 + 1.8",`radius: (Math.random() * 2.4 + 1.8) * ${t}`).replace("ctx.lineWidth = 1;",`ctx.lineWidth = ${Number(Math.max(.25,r).toFixed(2))};`).replace("node.x += node.vx;","node.x += node.vx * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("node.y += node.vy;","node.y += node.vy * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);");return l==="light"&&(c=c.replace("ctx.strokeStyle = '#E6C879';","ctx.strokeStyle = '#8B6914';").replace("ctx.fillStyle = '#E6C879';","ctx.fillStyle = '#8B6914';")),c}},particleDrift:{title:"Particle Drift",source:g8,supportsMode:!0,background:a=>a==="light"?gn:"#030509",targets:[{selector:"#particle-canvas",role:"background"}],patch(a,{size:t,length:i,density:n,mode:r}){const l=Math.round(120*i),c=r==="light"?.22:.15;let d=a.replace("Array.from({ length: 90 })",`Array.from({ length: ${Wi(90,n,12)} })`).replace("Array.from({ length: 25 })",`Array.from({ length: ${Wi(25,n,4)} })`).replace("length: Math.random() * 100 + 50,",`length: (Math.random() * 100 + 50) * ${i},`).replace("n.y += n.vy; // Slow drift","n.y += n.vy * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1); // Slow drift").replace("b.y -= b.speed;","b.y -= b.speed * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("if(d < 120) {",`if(d < ${l}) {`).replace("0.15 * (1 - d/120)",`${c} * (1 - d/${l})`).replace("ctx.lineWidth = 1.5;",`ctx.lineWidth = ${Number((1.5*t).toFixed(2))};`);return r==="light"&&(d=d.replaceAll("rgba(96, 165, 250,","rgba(37, 99, 235,").replaceAll("rgba(156, 163, 175,","rgba(36, 48, 68,").replace("ctx.fillStyle = dist < 180 ? '#60A5FA' : 'rgba(36, 48, 68, 0.4)';","ctx.fillStyle = dist < 180 ? '#2563EB' : 'rgba(36, 48, 68, 0.55)';")),d}},particleNetwork:{title:"Particle Network",source:m8,supportsMode:!0,background:a=>a==="light"?gn:"#05070d",targets:[{selector:"#particle-canvas",role:"background"}],patch(a,{size:t,length:i,density:n,mode:r}){let l=a.replace("const particleCount = 200;",`const particleCount = ${Wi(200,n,40)};`).replace("this.length = Math.random() * 2 + 0.5;",`this.length = (Math.random() * 2 + 0.5) * ${i};`).replace("this.z -= this.speed;","this.z -= this.speed * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("const fov = 300;",`const fov = ${Math.round(300/Math.max(.4,t))};`);return r==="light"&&(l=l.replace("ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';","ctx.fillStyle = 'rgba(238, 241, 246, 0.55)';").replace("const hue = Math.random() > 0.5 ? '200, 220, 255' : '106, 157, 237';","const hue = Math.random() > 0.5 ? '36, 48, 68' : '37, 99, 235';")),l}},fluxVortex:{title:"Flux Vortex",source:x8,background:"#050505",targets:[{selector:"#webgl-canvas",role:"background"}],patch(a,{size:t,density:i}){return a.replace("const vortexCount = 9500;",`const vortexCount = ${Wi(9500,i,1200)};`).replace("const particlesCount = 300;",`const particlesCount = ${Wi(300,i,40)};`).replace("size: 0.006, // Smaller dots requested",`size: ${Number((.006*t).toFixed(4))}, // Smaller dots requested`).replace("size: 0.008,",`size: ${Number((.008*t).toFixed(4))},`)}},portalField:{title:"Portal Field",source:b8,background:"#05060a",targets:[{selector:"#webgl-container",role:"background"}],patch(a,{size:t,length:i}){return a.replace("float d1 = sdArc(st, center, 0.6, 0.02, 0.15);",`float d1 = sdArc(st, center, ${ds(.6*i,3)}, ${ds(.02*t,4)}, 0.15);`).replace("float d2 = sdArc(st, center, 0.65, 0.06, 0.2);",`float d2 = sdArc(st, center, ${ds(.65*i,3)}, ${ds(.06*t,4)}, 0.2);`)}},flowField:{title:"Flow Field",source:v8,background:"#0a0a0a",targets:[{selector:"#canvas",role:"background"}],patch(a,{size:t,length:i,density:n}){return a.replace(/<script defer src="https:\/\/static\.cloudflareinsights\.com\/beacon\.min\.js[^>]*><\/script>/,"").replace("const PARTICLE_COUNT = 2500;",`const PARTICLE_COUNT = ${Wi(2500,n,300)};`).replace("let NOISE_SCALE = 0.0025;",`let NOISE_SCALE = ${Number((.0025/i).toFixed(6))};`).replace("time += 0.0008;","time += 0.0008 * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||0);").replace("let vx = Math.cos(angle) * p.speed * SPEED;","let vx = Math.cos(angle) * p.speed * SPEED * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||0);").replace("let vy = Math.sin(angle) * p.speed * SPEED;","let vy = Math.sin(angle) * p.speed * SPEED * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||0);").replace("ctx.lineWidth = p.size;",`ctx.lineWidth = p.size * ${Number(t.toFixed(3))};`)}},amberHalftone:{title:"Amber Halftone",source:y8,supportsMode:!0,background:a=>a==="light"?gn:"#0A0A0A",targets:[{selector:"#webgl-halftone",role:"background"}],patch(a,{size:t,length:i,density:n,mode:r}){const l=Number((.085/Math.max(.25,n)).toFixed(4)),c=Math.max(12,Math.ceil(2.8/l)),d=Number((9*t).toFixed(2)),f=Number((6*i).toFixed(2));let h=a.replace("const gridSize = 20;",`const gridSize = ${c};`).replace("positions.push(x * 0.15, y * 0.15, 0);",`positions.push(x * ${l}, y * ${l}, 0);`).replace("float animatedScale = scale * (sin(dist * 6.0 - time * 2.5) * 0.5 + 0.5);",`float animatedScale = scale * (sin(dist * ${ds(f,2)} - time * 2.5) * 0.5 + 0.5);`).replace("gl_PointSize = animatedScale * 5.0;",`gl_PointSize = animatedScale * ${ds(d,2)};`).replace("material.uniforms.time.value = clock.getElapsedTime();","material.uniforms.time.value = clock.getElapsedTime() * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);");return r==="light"&&(h=h.replace("renderer.setClearColor(0x0A0A0A, 1);","renderer.setClearColor(0xeef1f6, 1);").replace("color1: { value: new THREE.Color(0xFBBF24) },","color1: { value: new THREE.Color(0xB45309) },").replace("color2: { value: new THREE.Color(0xFFFFFF) }","color2: { value: new THREE.Color(0x1a1f2a) }")),h}},diagnosticsLayers:{title:"Layered Planes",source:ig,supportsMode:!0,background:a=>a==="light"?gn:"#020804",targets:[{selector:"#main-container article:nth-of-type(1) .flex-grow",role:"ui",width:"360px"}],focusCss:ng,patch:ag},diagnosticsNodes:{title:"Node Cubes",source:ig,supportsMode:!0,background:a=>a==="light"?gn:"#020804",targets:[{selector:"#main-container article:nth-of-type(2) .flex-grow",role:"ui",width:"360px"}],focusCss:ng,patch:ag},diagnosticsFlow:{title:"Flowing Mesh",source:ig,supportsMode:!0,background:a=>a==="light"?gn:"#020804",targets:[{selector:"#main-container article:nth-of-type(3) .flex-grow",role:"ui",width:"360px"}],focusCss:ng,patch:ag},signalParticles:{title:"Signal Particles",source:w8,supportsMode:!0,background:a=>a==="light"?gn:"#0a0a0a",targets:[{selector:"#particle-canvas",role:"background"}],patch(a,{size:t,length:i,mode:n}){let r=a.replace("const spacing = 16;",`const spacing = ${Math.max(6,Math.round(16/Math.max(.35,i)))};`).replace("const dotRadius = 1.5;",`const dotRadius = ${Number((1.5*t).toFixed(2))};`).replace("time += 0.02;","time += 0.02 * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);");return n==="light"&&(r=r.replace("ctx.fillStyle = '#3b82f6'; // Blue highlight","ctx.fillStyle = '#1d4ed8'; // Blue highlight").replace("ctx.fillStyle = '#8b5cf6'; // Purple highlight","ctx.fillStyle = '#5b21b6'; // Purple highlight").replace("ctx.fillStyle = `rgba(148, 163, 184, ${alpha})`;","ctx.fillStyle = `rgba(36, 48, 68, ${alpha})`;")),r}},skeuomorphicToggle:{title:"Skeuomorphic Toggle",source:_8,supportsMode:!0,defaultMode:"auto",background:a=>a==="light"?"#f8fafc":"#0b1220",targets:[{selector:"#skeuomorphic-toggle",role:"ui",width:"192px"}],focusCss:`
#skeuomorphic-toggle {
  width: 12rem !important;
  height: 4rem !important;
  margin: auto !important;
  overflow: visible !important;
  max-height: none !important;
}
`,patch(a,{mode:t}){return t!=="dark"?a:a.replace("var ON_BG = 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px), linear-gradient(180deg, #dbeafe 0%, #93c5fd 100%)';","var ON_BG = 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.035) 2px, rgba(255,255,255,0.035) 4px), linear-gradient(180deg, #1e3a8a 0%, #172554 100%)';").replace("var OFF_BG = 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px), linear-gradient(180deg, #e2e8f0 0%, #cbd5e1 100%)';","var OFF_BG = 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.025) 2px, rgba(255,255,255,0.025) 4px), linear-gradient(180deg, #1e293b 0%, #0f172a 100%)';").replace("var ON_SHADOW = 'inset 0 4px 8px rgba(0,0,0,0.1), inset 0 -2px 4px rgba(255,255,255,0.7), 0 0 0 6px rgba(239, 246, 255, 0.8), 0 0 25px 5px rgba(96, 165, 250, 0.4)';","var ON_SHADOW = 'inset 0 5px 10px rgba(0,0,0,0.52), inset 0 -2px 4px rgba(147,197,253,0.24), 0 0 0 6px rgba(15,23,42,0.96), 0 0 26px 5px rgba(59,130,246,0.42)';").replace("var OFF_SHADOW = 'inset 0 4px 8px rgba(0,0,0,0.12), inset 0 -2px 4px rgba(255,255,255,0.55), 0 0 0 6px rgba(241, 245, 249, 0.9), 0 0 18px 2px rgba(148, 163, 184, 0.25)';","var OFF_SHADOW = 'inset 0 5px 10px rgba(0,0,0,0.56), inset 0 -2px 4px rgba(148,163,184,0.12), 0 0 0 6px rgba(15,23,42,0.96), 0 0 18px 2px rgba(30,64,175,0.2)';").replace("var ON_BORDER = '#60a5fa';","var ON_BORDER = '#3b82f6';").replace("var OFF_BORDER = '#94a3b8';","var OFF_BORDER = '#334155';").replace("background: linear-gradient(180deg, #ffffff 0%, #f4f8ff 100%);","background: linear-gradient(180deg, #e2e8f0 0%, #94a3b8 100%);").replace("border: 1px solid #e0edfa;","border: 1px solid #64748b;")}},matrixField:{title:"Matrix Field",source:S8,background:"#000000",targets:[{selector:"#glcanvas",role:"background"}],patch(a,{size:t,length:i}){return a.replace("float intensity = 0.006;",`float intensity = ${ds(.006*t*i,5)};`)}},gatewayFlow:{title:"Gateway Flow",source:k8,supportsMode:!0,background:a=>a==="light"?gn:"#000000",targets:[{selector:"#flow-canvas",role:"background"}],patch(a,{size:t,density:i,mode:n}){let r=a.replace("const numPaths = 80;",`const numPaths = ${Wi(80,i,12)};`).replace("p.t += p.speed;","p.t += p.speed * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("ctx.lineWidth = 1.2;",`ctx.lineWidth = ${Number((1.2*t).toFixed(2))};`);return n==="light"&&(r=r.replace("ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';","ctx.strokeStyle = 'rgba(26, 31, 42, 0.4)';").replace("ctx.fillStyle = `rgba(255, 255, 255, 0.7)`;","ctx.fillStyle = `rgba(26, 31, 42, 0.75)`;")),r}},connectivityGraph:{title:"Connectivity Graph",source:T8,supportsMode:!0,defaultMode:"light",background:a=>a==="light"?"#c4d9ef":"#0a1220",targets:[{selector:"#networkCanvas",role:"background"}],patch(a,{size:t,length:i,density:n,mode:r}){let l=a.replace("const particleCount = window.innerWidth < 768 ? 150 : 400;",`const particleCount = window.innerWidth < 768 ? ${Wi(150,n,30)} : ${Wi(400,n,60)};`).replace("this.maxLength = 20 + Math.random() * 180;",`this.maxLength = (20 + Math.random() * 180) * ${i};`).replace("this.distance += this.speed;","this.distance += this.speed * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("ctx.lineWidth = 0.5 + (distRatio * 2);",`ctx.lineWidth = (0.5 + (distRatio * 2)) * ${t};`);return r==="dark"&&(l=l.replace("const lightness = 15 + (distRatio * 35);","const lightness = 58 + (distRatio * 28);").replace("const tailColor = `hsla(${hue}, 90%, ${Math.max(5, lightness - 15)}%, ${this.alpha * 0.05})`;","const tailColor = `hsla(${hue}, 90%, ${Math.max(40, lightness - 15)}%, ${this.alpha * 0.08})`;")),l}},interfaceLines:{title:"Interface Lines",source:E8,supportsMode:!0,background:a=>a==="light"?gn:"#050505",targets:[{selector:"#bg-canvas",role:"background"}],patch(a,{size:t,length:i,density:n,mode:r}){const l=Math.round(120*i);let c=a.replace("const numParticles = window.innerWidth < 640 ? 30 : 70;",`const numParticles = window.innerWidth < 640 ? ${Wi(30,n,8)} : ${Wi(70,n,12)};`).replace("p.x += p.vx;","p.x += p.vx * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("p.y += p.vy;","p.y += p.vy * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("if (dist < 120)",`if (dist < ${l})`).replace("ctx.lineWidth = 1;",`ctx.lineWidth = ${Number((1*t).toFixed(2))};`);return r==="light"?c=c.replace("ctx.strokeStyle = `rgba(255, 255, 255, ${0.28 + (1 - dist / 120) * 0.42})`;",`ctx.strokeStyle = \`rgba(26, 31, 42, \${0.28 + (1 - dist / ${l}) * 0.42})\`;`).replace("ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';","ctx.fillStyle = 'rgba(26, 31, 42, 0.85)';"):c=c.replace("ctx.strokeStyle = `rgba(255, 255, 255, ${0.28 + (1 - dist / 120) * 0.42})`;",`ctx.strokeStyle = \`rgba(255, 255, 255, \${0.28 + (1 - dist / ${l}) * 0.42})\`;`),c}},wireframeForms:{title:"Wireframe Forms",source:M8,supportsMode:!0,background:a=>a==="light"?gn:"#050505",targets:[{selector:"main",role:"ui",width:"1040px"}],focusCss:`
main {
  display: flex !important;
  flex-direction: row !important;
  flex-wrap: wrap !important;
  align-items: center !important;
  justify-content: center !important;
  gap: clamp(1rem, 3vw, 2.5rem) !important;
  height: auto !important;
  min-height: 0 !important;
  padding: 1.5rem !important;
  background: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
  grid-template-columns: none !important;
}
main > .absolute { display: none !important; }
main > .group {
  height: auto !important;
  min-height: 0 !important;
  padding: 0 !important;
  overflow: visible !important;
  background: transparent !important;
  flex: 0 0 auto !important;
  width: min(72vw, 480px) !important;
}
main > .group:not([data-wireframe-selected]) { display: none !important; }
main > .group > :not([data-wireframe-visual]) { display: none !important; }
main > .group > [data-wireframe-visual] {
  padding: 0 !important;
  flex-grow: 0 !important;
  width: 100% !important;
  aspect-ratio: 1 !important;
}
main > .group > [data-wireframe-visual] > :not(canvas) { display: none !important; }
#canvas1, #canvas2, #canvas3 {
  width: 100% !important;
  max-width: none !important;
  height: 100% !important;
  opacity: 1 !important;
  mix-blend-mode: normal !important;
}
`,patch(a,{variant:t,size:i,length:n,mode:r}){const l=O8(t),c={cube:"<!-- Section 01: Hypercube -->",cylinders:"<!-- Section 02: Logic Cylinders -->",sphere:"<!-- Section 03: Esoteric Sphere -->"}[l];let d=a.replace(`${c}
        <div class="group`,`${c}
        <div data-wireframe-selected="${l}" class="group`).replace("this.angleY += 0.005;","this.angleY += 0.005 * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("this.angleX += 0.002;","this.angleX += 0.002 * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("const s = 80;",`const s = ${Math.round(80*n)};`).replace("const r = 70;",`const r = ${Math.round(70*n)};`).replace("const s = 50; ",`const s = ${Math.round(50*n)}; `).replace("this.ctx.lineWidth = 0.8;",`this.ctx.lineWidth = ${Number((.8*i).toFixed(2))};`);return r==="light"&&(d=d.replace("this.ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.4})`;","this.ctx.strokeStyle = `rgba(26, 31, 42, ${alpha * 0.45})`;").replace("this.ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;","this.ctx.fillStyle = `rgba(26, 31, 42, ${alpha})`;")),d}},defenseLines:{title:"Defense Lines",source:C8,supportsMode:!0,background:a=>a==="light"?"#f4ecec":"#120303",targets:[{selector:"#bg-canvas",role:"background"}],patch(a,{size:t,length:i,density:n,mode:r}){let l=a.replace("const particleCount = window.innerWidth < 768 ? 40 : 100;",`const particleCount = window.innerWidth < 768 ? ${Wi(40,n,8)} : ${Wi(100,n,16)};`).replace("baseLength: Math.random() * 80 + 20,",`baseLength: (Math.random() * 80 + 20) * ${i},`).replace("p.y -= p.speedY * 1.5 * (1 + centerProximity * 0.5);","p.y -= p.speedY * 1.5 * (1 + centerProximity * 0.5) * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("ctx.lineWidth = 0.5;",`ctx.lineWidth = ${Number((.5*t).toFixed(2))};`);return r==="light"&&(l=l.replaceAll("rgba(220, 38, 38, 0)","rgba(153, 27, 27, 0)").replace("grad.addColorStop(0.5, `rgba(255, ${38 + brightness}, ${38 + brightness}, ${currentOpacity})`);","grad.addColorStop(0.5, `rgba(185, ${20 + brightness * 0.55}, ${20 + brightness * 0.55}, ${currentOpacity})`);")),l}},overrideGrid:{title:"Override Grid",source:A8,supportsMode:!0,background:a=>a==="light"?gn:"#050505",targets:[{selector:"#grid-canvas",role:"background"}],patch(a,{size:t,gap:i,mode:n}){const r=Math.max(8,Math.round(t)),l=Math.max(0,Math.round(i));let c=a.replace("const blockSize = 48;",`const blockSize = ${r};`).replace("const blockGap = 2;",`const blockGap = ${l};`).replace("time += 0.04;","time += 0.04 * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);");return n==="light"&&(c=c.replace("ctx.fillStyle = `rgba(249, 115, 22, ${alpha})`;","ctx.fillStyle = `rgba(194, 65, 12, ${alpha * 1.35})`;")),c}},topoField:{title:"Topo Field",source:z8,supportsMode:!0,background:a=>a==="light"?gn:"#000000",targets:[{selector:"#topo-canvas",role:"background"}],patch(a,{length:t,density:i,mode:n}){let r=a.replace("float noiseScale = 1.4;",`float noiseScale = ${ds(1.4*t,3)};`).replace("float numBands = 10.0;",`float numBands = ${ds(10*i,2)};`);return n==="light"&&(r=r.replace("gridLines = clamp(gridLines, 0.0, 1.0) * 0.12;","gridLines = clamp(gridLines, 0.0, 1.0) * 0.55;").replace("float topoLines = smoothstep(0.02, 0.00, triangleWave) * 0.45;","float topoLines = smoothstep(0.03, 0.00, triangleWave) * 0.95;").replace(`vec3 color = vec3(0.0);
                    color += vec3(1.0) * gridLines;
                    color += vec3(1.0) * topoLines;`,`vec3 paper = vec3(0.933, 0.945, 0.965);
                    vec3 ink = vec3(0.12, 0.14, 0.18);
                    float lines = clamp(gridLines + topoLines, 0.0, 1.0);
                    vec3 color = mix(paper, ink, lines);`)),r}}};function D8(a,t){const i=t.mode,n=Z5(a.background,i),r=JSON.stringify(a.targets).replace(/</g,"\\u003c"),l=JSON.stringify({mode:i,speed:t.speed,size:t.size,gap:t.gap,length:t.length,density:t.density,strokeWidth:t.strokeWidth,opacity:t.opacity}).replace(/</g,"\\u003c"),c=a.patch?a.patch(a.source,{variant:t.variant,size:t.size,gap:t.gap,length:t.length,density:t.density,strokeWidth:t.strokeWidth,mode:i}):a.source,d=`<style data-threeui-focus>
html, body { width: 100% !important; height: 100% !important; min-height: 0 !important; margin: 0 !important; padding: 0 !important; overflow: hidden !important; background: ${n} !important; }
body { position: relative !important; display: flex !important; align-items: center !important; justify-content: center !important; }
body > * { visibility: hidden !important; }
body[data-threeui-ready] > [data-threeui-role] { visibility: visible !important; }
[data-threeui-residual] { display: none !important; }
[data-threeui-role="background"] { position: fixed !important; inset: 0 !important; width: 100% !important; height: 100% !important; max-width: none !important; max-height: none !important; z-index: 0 !important; opacity: 1 !important; pointer-events: none !important; }
[data-threeui-role="ui"] { position: relative !important; z-index: 1 !important; width: min(calc(100% - 32px), var(--threeui-target-width, 1040px)) !important; max-width: none !important; max-height: calc(100% - 32px) !important; margin: auto !important; overflow: auto !important; opacity: 1 !important; transform: none !important; filter: none !important; flex: none !important; box-sizing: border-box !important; }
${a.focusCss??""}
</style>`,f=`<script data-threeui-controls>
(function () {
  var controls = ${l};
  window.__SF_CONTROLS = controls;
  var origin = performance.now();
  var virtual = 0;
  var last = origin;
  var performanceNow = performance.now.bind(performance);
  var dateNow = Date.now.bind(Date);
  var dateOrigin = dateNow();
  performance.now = function () {
    var real = performanceNow();
    virtual += (real - last) * (controls.speed || 1);
    last = real;
    return origin + virtual;
  };
  Date.now = function () {
    return dateOrigin + (performance.now() - origin);
  };
  var raf = window.requestAnimationFrame.bind(window);
  window.requestAnimationFrame = function (callback) {
    return raf(function () {
      callback(performance.now());
    });
  };
  function applyVisual() {
    var opacity = controls.opacity == null ? 1 : controls.opacity;
    var size = controls.size == null ? 1 : controls.size;
    Array.prototype.forEach.call(document.querySelectorAll('[data-threeui-role]'), function (element) {
      element.style.opacity = String(opacity);
      if (element.getAttribute('data-threeui-role') === 'ui') {
        element.style.transform = 'scale(' + size + ')';
        element.style.transformOrigin = 'center center';
      }
    });
  }
  window.addEventListener('message', function (event) {
    if (!event.data || event.data.type !== 'threeui-controls') return;
    var next = event.data.controls || {};
    Object.keys(next).forEach(function (key) { controls[key] = next[key]; });
    applyVisual();
  });
  window.__SF_APPLY_CONTROLS = applyVisual;
})();
<\/script>`,h=`<script data-threeui-focus>
(function () {
  var isolated = false;
  function isolate() {
    if (isolated) return;
    var specs = ${r};
    var roots = [];
    specs.forEach(function (spec) {
      var element = document.querySelector(spec.selector);
      if (!element) return;
      element.setAttribute('data-threeui-role', spec.role);
      if (spec.width) element.style.setProperty('--threeui-target-width', spec.width);
      if (!roots.some(function (root) { return root.contains(element); })) roots.push(element);
    });
    if (!roots.length) return;
    isolated = true;
    roots.forEach(function (root) { document.body.appendChild(root); });
    Array.from(document.body.children).forEach(function (element) {
      if (roots.indexOf(element) !== -1) return;
      element.setAttribute('data-threeui-residual', '');
      element.setAttribute('aria-hidden', 'true');
      if ('inert' in element) element.inert = true;
    });
    document.body.setAttribute('data-threeui-ready', '');
    if (window.__SF_APPLY_CONTROLS) window.__SF_APPLY_CONTROLS();
    requestAnimationFrame(function () { window.dispatchEvent(new Event('resize')); });
  }
  function scheduleIsolation() { setTimeout(isolate, 100); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scheduleIsolation, { once: true });
  else scheduleIsolation();
  window.addEventListener('load', isolate, { once: true });
})();
<\/script>`;return c.replace(/<head([^>]*)>/i,`<head$1>${f}${d}`).replace(/<\/body>/i,`${h}</body>`)}function K5({definition:a,variant:t="cube",mode:i,speed:n=Zi.speed,size:r=Zi.size,gap:l=Zi.gap,length:c=Zi.length,density:d=Zi.density,strokeWidth:f=Zi.strokeWidth,opacity:h=Zi.opacity,hue:m=Zi.hue,saturation:x=Zi.saturation,brightness:b=Zi.brightness,className:v,style:_}){const w=N.useRef(null),S=i??a.defaultMode??Zi.mode,E=j8(S==="auto"),M=S==="auto"?E:R8(S,Zi.mode),A=Z5(a.background,M),O=za(n,0,3),z=za(r,.05,200),H=za(l,0,64),j=za(c,.35,2.5),F=za(d,.25,2.5),U=za(f,.25,8),W=za(h,.05,1),et=za(m,-180,180),Y=za(x,0,2),at=za(b,.35,1.65),ct=N.useMemo(()=>D8(a,{variant:t,mode:M,speed:Zi.speed,size:z,gap:H,length:j,density:F,strokeWidth:U,opacity:Zi.opacity}),[a,M,F,H,j,z,U,t]);N.useEffect(()=>{const B=w.current?.contentWindow;B&&B.postMessage({type:"threeui-controls",controls:{mode:M,speed:O,size:z,gap:H,length:j,density:F,strokeWidth:U,opacity:W}},"*")},[M,F,H,j,W,z,O,U,ct]);const lt=et===0&&Y===1&&at===1?void 0:`hue-rotate(${et}deg) saturate(${Y}) brightness(${at})`;return k.jsx("iframe",{ref:w,className:v,title:a.title,srcDoc:ct,sandbox:"allow-scripts",loading:"eager",style:{display:"block",width:"100%",height:"100%",border:0,background:A,filter:lt,..._}})}function Bi(a){return function(t){return k.jsx(K5,{...t,definition:a})}}const J5=Bi(hi.constellationField),tS=Bi(hi.particleDrift),eS=Bi(hi.particleNetwork),N8=Bi(hi.fluxVortex),L8=Bi(hi.portalField),B8=Bi(hi.flowField),H8=Bi(hi.amberHalftone),W2={layers:hi.diagnosticsLayers,nodes:hi.diagnosticsNodes,flow:hi.diagnosticsFlow},iS={variant:"layers"};function F8({variant:a=iS.variant,...t}){const i=W2[a]??W2.layers;return k.jsx(K5,{...t,definition:i})}const P8=Bi(hi.signalParticles),U8=Bi(hi.skeuomorphicToggle),Y8=Bi(hi.matrixField),nS=Bi(hi.gatewayFlow),aS=Bi(hi.connectivityGraph),sS=Bi(hi.interfaceLines),G8=Bi(hi.wireframeForms),rS=Bi(hi.defenseLines),q8=Bi(hi.overrideGrid),lS=Bi(hi.topoField),V8=Object.freeze(Object.defineProperty({__proto__:null,AmberHalftone:H8,ConnectivityGraph:aS,ConstellationField:J5,DIAGNOSTICS_PANEL_DEFAULTS:iS,DefenseLines:rS,DiagnosticsPanel:F8,FlowField:B8,FluxVortex:N8,GatewayFlow:nS,InterfaceLines:sS,MatrixField:Y8,NEUFORM_BATCH_DEFAULTS:Zi,OverrideGrid:q8,ParticleDrift:tS,ParticleNetwork:eS,PortalField:L8,SignalParticles:P8,SkeuomorphicToggle:U8,TopoField:lS,WireframeForms:G8},Symbol.toStringTag,{value:"Module"})),I8={"constellation-field":J5,"particle-drift":tS,"particle-network":eS,"gateway-flow":nS,"connectivity-graph":aS,"interface-lines":sS,"defense-lines":rS,"topo-field":lS};function X8({variant:a="constellation-field",...t}){const i=I8[a];return k.jsx(i,{...t})}const $8=N.lazy(()=>Qf(()=>Promise.resolve().then(()=>V8),void 0).then(a=>({default:a.MatrixField}))),W8=N.lazy(()=>Qf(()=>import("./LaserVariants-DudAPp3L.js"),[]).then(a=>({default:a.LaserVariants}))),Q2=k.jsx("div",{className:"threeui-background laser-variant"});function Q8({variant:a="matrix-field",...t}){return a!=="matrix-field"?k.jsx(N.Suspense,{fallback:Q2,children:k.jsx(W8,{...t,variant:a})}):k.jsx(N.Suspense,{fallback:Q2,children:k.jsx($8,{...t})})}function Z8(){return k.jsx("div",{className:"shader-frame",children:k.jsx(Q8,{speed:1,size:1,length:1,density:1,opacity:1,hue:0,saturation:1,brightness:1})})}function K8(){return k.jsx("div",{className:"w-full h-full",children:k.jsx(X8,{variant:"interface-lines",mode:"dark",speed:1,size:1,length:1,density:1,opacity:1,hue:0,saturation:1,brightness:1})})}function Z2(){Di.registerPlugin(Ct,Xn),N.useEffect(()=>{const c=Xn.create({wrapper:"#smooth-wrapper",content:"#smooth-content",smooth:.7,effects:!1,smoothTouch:0});return Ct.refresh(),()=>{c.kill()}},[]);const a=[{title:"HTML",icon:"./icons/html-5.png"},{title:"CSS",icon:"./icons/css-file-format-symbol.png"},{title:"Node js ",icon:"./icons/programing.png"},{title:"PHP",icon:"./icons/php.png"},{title:"My SQL",icon:"./icons/mysql.png"},{title:"JAVA",icon:"./icons/java.png"},{title:"PYTHON",icon:"./icons/python.png"},{title:"Type-Script",icon:"./icons/typescript.png"},{title:"HugginFace AI Models",icon:"./icons/generative.png"},{title:"Rest API",icon:"./icons/cloud-api.png"},{title:"3D Three JS",icon:"./icons/3d-model.png"}],t=[{title:"BLS Services",img:"./cpt/11.png",description:"Oscult BTP accompagne vos projets d’ingénierie structurelle : études techniques, diagnostics, audits et expertises pour bâtiments existants. Rénovation, réhabilitation et adaptation sur mesure.",tags:["WordPress","PHP","Java-script"],link:"https://oscult-ingenierie.ma/"},{title:"Samser Rayonnages",img:"./cpt/6.png",description:"The best way to store. Leader in office furniture shelving, handling equipment for warehouses and industries.",tags:["WordPress","PHP","Java-script"],link:"https://samser-rayonnages-martinique.fr/"},{title:"Airless Decoration",img:"./cpt/2.png",description:"Interior and exterior painting services for individuals and professionals. Modern techniques (airless painting, sprayed plaster) for a high-end, durable and meticulous finish.",tags:["WordPress","PHP","Java-script"],link:"https://airlessdecoration.fr/"},{title:"Age d'Or Services",img:"./cpt/3.png",description:"Composed of a team of home care professionals, the Age d’Or agency prioritizes meeting your needs, whether they are daily or more occasional. Our team is ready to listen to you, discuss your needs, and provide the services best suited to your lifestyle.",tags:["WordPress","PHP","Java-script"],link:"https://agedorservicesguyane.fr/"},{title:"Hoffert Architecture",img:"./cpt/8.png",description:"Hoffert Architecture accompagne les propriétaires, copropriétés et gestionnaires d’immeubles collectifs dans leurs projets de rénovation et de transition énergétique.",tags:["WordPress","PHP","Java-script"],link:"https://hoffertarchitecture.fr/"},{title:"AHC Plumber",img:"./cpt/4.png",description:"AHC Plomberie is a company specializing in all plumbing, heating and bathroom creation work in the Rouen area.",tags:["WordPress","PHP","Java-script"],link:"https://ahcplomberie.fr/"}],i=[{id:1,title:"Custom Web Development",content:"Build complete web applications from scratch — frontend to backend — optimized for speed, security, and scalability.",image:"/mine-portfolio/img/acoo/acco4.png"},{id:2,title:"Frontend Engineering",content:"Build complete web applications from scratch — frontend to backend — optimized for speed, security, and scalability.",image:"/mine-portfolio/img/acoo/acco2.png"},{id:3,title:"Server logic & API Development",content:"Build complete web applications from scratch — frontend to backend — optimized for speed, security, and scalability.",image:"/mine-portfolio/img/acoo/acco3.png"},{id:4,title:"Full Stack Application Development",content:"Build complete web applications from scratch — frontend to backend — optimized for speed, security, and scalability.",image:"/mine-portfolio/img/acoo/acco1.png"}],[n,r]=N.useState(1),l=i.find(c=>c.id===n);return k.jsxs(k.Fragment,{children:[k.jsx(o4,{}),k.jsx(h8,{}),k.jsx(Z8,{}),k.jsxs("div",{className:"relative z-10",children:[k.jsx(d4,{}),k.jsxs("header",{title:"Welcome",children:[k.jsx("link",{rel:"preconnect",href:"https://fonts.bunny.net"}),k.jsx("link",{href:"https://fonts.bunny.net/css?family=instrument-sans:400,500,600",rel:"stylesheet"})]}),k.jsx("div",{id:"smooth-wrapper",children:k.jsxs("div",{id:"smooth-content",className:"relative z-10 min-h-screen flex flex-col items-center pt-6 text-[#1b1b18] lg:justify-center",children:[k.jsxs("main",{className:"lg:grid lg:grid-cols-2 flex flex-col lg:flex-row gap-18 items-center w-full my-20 lg:my-40 h-full max-w-360 px-6",children:[k.jsx("div",{}),k.jsx("div",{className:"w-full",children:k.jsx(nO,{})})]}),k.jsxs("main",{className:"relative w-full pt-32 h-full max-w-full font-mono justify-center overflow-hidden",children:[k.jsx("div",{className:"absolute inset-0 z-0 pointer-events-none",children:k.jsx(K8,{})}),k.jsxs("div",{className:"relative z-10 max-w-340 p-8 mx-auto flex flex-col",children:[k.jsx("p",{className:"text-[16px] text-[#c4aaff]",children:"// Skills"}),k.jsxs("div",{className:"flex flex-col lg:flex-row w-full gap-14 h-full  font-mono justify-start",children:[k.jsxs("div",{className:"flex flex-col max-w-2xl gap-3 py-8 rounded-2xl font-mono text-white",children:[k.jsxs("div",{className:"flex flex-col font-sans gap-3 border-b pb-5 border-white/25",children:[k.jsxs("div",{className:"flex justify-between",children:[k.jsx("h1",{className:"text-md font-bold",children:"Programming Languages"}),k.jsx(Qc,{className:"text-[#c4aaff]"})]}),k.jsx("p",{className:"text-sm text-gray-300",children:"PHP • Java-script • Type-script • HTML • CSS • Java • Oracle DB • SQL"})]}),k.jsxs("div",{className:"flex flex-col font-sans gap-3 border-b pb-5 border-white/25",children:[k.jsxs("div",{className:"flex justify-between",children:[k.jsx("h1",{className:"text-md font-bold",children:"Developer Tools"}),k.jsx(Qc,{className:"text-[#c4aaff]"})]}),k.jsx("p",{className:"text-sm text-gray-300",children:"Git • Github • Postman • API • REST APIs • Docker • Xampp • UML"})]}),k.jsxs("div",{className:"flex flex-col font-sans gap-3 border-b pb-5 border-white/25",children:[k.jsxs("div",{className:"flex justify-between",children:[k.jsx("h1",{className:"text-md font-bold",children:"Frameworks"}),k.jsx(Qc,{className:"text-[#c4aaff]"})]}),k.jsx("p",{className:"text-sm text-gray-300",children:"Reactjs • Tailwindcss • Laravel • Django • Spring Boot • Flutter"})]}),k.jsxs("div",{className:"flex flex-col font-sans gap-3 border-b pb-5 border-white/25",children:[k.jsxs("div",{className:"flex justify-between",children:[k.jsx("h1",{className:"text-md font-bold",children:"DevOps"}),k.jsx(_C,{className:"text-[#c4aaff]"})]}),k.jsx("p",{className:"text-sm text-gray-300",children:"Docker • GitHub Actions • CI/CD • Linux • Cloud Basics"})]}),k.jsxs("div",{className:"flex flex-col font-sans gap-3 border-b pb-5 border-white/25",children:[k.jsxs("div",{className:"flex justify-between",children:[k.jsx("h1",{className:"text-md font-bold",children:"Testing"}),k.jsx(yC,{className:"text-[#c4aaff]"})]}),k.jsx("p",{className:"text-sm text-gray-300",children:"Jest • Postman"})]}),k.jsxs("div",{className:"flex flex-col font-sans gap-3 border-b pb-5 border-white/25",children:[k.jsxs("div",{className:"flex justify-between",children:[k.jsx("h1",{className:"text-md font-bold",children:"Security"}),k.jsx(DC,{className:"text-[#c4aaff]"})]}),k.jsx("p",{className:"text-sm text-gray-300",children:"Linux ( Nmap/Wireshark/Metasploit ) • Networking & Protocols • VirtualBox • Docker"})]})]}),k.jsxs("div",{className:"flex flex-col max-w-2xl gap-3 py-8 rounded-2xl  text-white",children:[k.jsx("p",{className:"text-md font-sans font-normal max-w-lg",children:"I thrive on solving real-world problems, turning ideas into clean, maintainable code, and learning through experimentation. You’ll find me building side projects, diving into new tech stacks, or simply exploring what’s next in the world of web development."}),k.jsxs("a",{href:"/mine-portfolio/files/Mine-cv.pdf",target:"_blank",className:"flex mr-auto my-6 items-center font-medium font-sans gap-2 bg-[#8a5cf620] backdrop-blur-xl rounded-2xl border border-[#ffffff30] shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_30px_rgba(138,92,246,0.18)] text-white p-3 px-5 hover:bg-[#8a5cf630] hover:border-[#ffffff45] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_8px_35px_rgba(138,92,246,0.28)] transition-all duration-300",children:["Download CV",k.jsx(Og,{className:"size-4"})]})]})]}),k.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-evenly w-full gap-10 lg:gap-16 items-center mx-auto mt-12",children:[k.jsxs("div",{className:"p-7 border-b-2 border-white/25",children:[k.jsx("h3",{className:"text-3xl sm:text-4xl lg:text-[6rem] font-sans bg-linear-to-r from-[#8B5CF6] to-white bg-clip-text text-transparent font-bold",children:"9+"}),k.jsx("p",{className:"text-[16px] font-sans text-white",children:"Years in IT"})]}),k.jsxs("div",{className:"p-7 border-b-2 border-white/25",children:[k.jsx("h3",{className:"text-3xl sm:text-4xl lg:text-[6rem] font-sans bg-linear-to-r from-[#8B5CF6] to-white bg-clip-text text-transparent font-bold",children:"4+"}),k.jsx("p",{className:"text-[16px] font-sans text-white",children:"Years of Professional Experience"})]}),k.jsxs("div",{className:"p-7 border-b-2 border-white/25",children:[k.jsx("h3",{className:"text-3xl sm:text-4xl lg:text-[6rem] font-sans bg-linear-to-r from-[#8B5CF6] to-white bg-clip-text text-transparent font-bold",children:"57+"}),k.jsx("p",{className:"text-[16px] font-sans  text-white",children:"Completed Projects"})]})]})]}),k.jsx("section",{id:"about",className:"w-full",children:k.jsx(D5,{})}),k.jsxs("section",{id:"projects",className:"max-w-340 relative mb-28 mt-44 p-8 mx-auto flex flex-col",children:[k.jsxs("div",{className:"flex flex-col lg:flex-row lg:justify-between items-start gap-6 py-8 rounded-2xl font-sans text-white",children:[k.jsx("p",{className:"text-[16px] mt-3 text-[#c4aaff]",children:"// Explore Work"}),k.jsx("h3",{className:"text-[48px] font-bold max-w-lg leading-tight",children:"A Showcase of My Latest Projects"})]}),k.jsxs("div",{className:"flex items-center text-[#c4aaff] font-bold justify-between gap-1",children:["</",k.jsx("div",{className:"h-0.5 bg-[#505559] w-[90vw]"}),">"]}),k.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 font-sans gap-20 lg:gap-32 mt-12 justify-between items-center",children:[k.jsx("div",{className:"flex flex-col gap-24",children:t.slice(0,3).map(c=>k.jsx("a",{href:c.link,target:"_blank",rel:"noopener noreferrer",children:k.jsxs("div",{className:"flex flex-col gap-7",children:[k.jsx("img",{src:c.img,alt:c.title,className:"rounded-lg scale-100 lg:scale-[1.09] hover:scale-100 transition-all duration-700 object-cover h-64 sm:h-80 lg:h-96 w-full"}),k.jsxs("div",{className:"flex flex-col gap-3",children:[k.jsx("h4",{className:"text-xl font-bold text-white",children:c.title}),k.jsx("p",{className:"text-sm text-gray-300",children:c.description}),k.jsx("div",{className:"flex gap-2",children:c.tags.map(d=>k.jsx("span",{className:"text-[14px] font-sans bg-[#2E2E2E] text-[#c4aaff] py-1  px-3 rounded-3xl",children:d},d))})]})]},c.title)}))}),k.jsx("div",{className:"flex flex-col font-sans gap-24",children:t.slice(3,6).map(c=>k.jsx("a",{href:c.link,target:"_blank",rel:"noopener noreferrer",children:k.jsxs("div",{className:"flex flex-col gap-7",children:[k.jsx("img",{src:c.img,alt:c.title,className:"rounded-lg scale-100 lg:scale-[1.09] hover:scale-100 transition-all duration-700 object-cover h-64 sm:h-80 lg:h-96 w-full"}),k.jsxs("div",{className:"flex flex-col gap-3",children:[k.jsx("h4",{className:"text-xl font-bold text-white",children:c.title}),k.jsx("p",{className:"text-sm text-gray-300",children:c.description}),k.jsx("div",{className:"flex gap-2",children:c.tags.map(d=>k.jsx("span",{className:"text-[14px] font-sans bg-[#2E2E2E] text-[#c4aaff] py-1  px-3 rounded-3xl",children:d},d))})]})]},c.title)}))})]})]})]}),k.jsxs("main",{className:" w-full  h-full max-w-full bg-[#131313] font-mono justify-center",children:[k.jsxs("div",{className:"max-w-340 p-8 mx-auto flex flex-col",children:[k.jsxs("div",{className:"flex flex-col lg:flex-row lg:justify-between items-start gap-6 py-8 rounded-2xl font-sans text-white",children:[k.jsx("p",{className:"text-[16px] mt-3 text-[#c4aaff]",children:"// Service"}),k.jsx("h3",{className:"text-[48px] font-bold max-w-xl leading-tight",children:"End-to-End Web Development Services"})]}),k.jsxs("div",{className:"flex items-center text-[#c4aaff] font-bold justify-between gap-1",children:["</",k.jsx("div",{className:"h-0.5 bg-[#505559] w-[90vw]"}),">"]})]}),k.jsxs("div",{className:"flex flex-col lg:flex-row items-center gap-16 lg:gap-32 max-w-7xl mx-auto py-16 lg:py-20 px-6",children:[k.jsx("div",{className:"w-full lg:w-1/2",children:k.jsx("div",{className:"relative w-full h-full rounded-2xl overflow-hidden shadow-xl",children:k.jsx("img",{src:l?.image,alt:l?.title,className:"w-full h-full object-cover transition-all duration-700 ease-in-out"})})}),k.jsx("div",{className:"w-full font-sans lg:w-1/2 space-y-4",children:i.map(c=>{const d=c.id===n;return k.jsxs("div",{className:"border-b border-white/45 py-5 cursor-pointer transition-all duration-300 text-white",onClick:()=>r(c.id),children:[k.jsxs("h3",{className:"text-lg flex justify-between font-semibold font-sans",children:[c.title,d?k.jsxs("p",{className:"text-lg text-white/50 flex justify-between font-normal font-sans",children:["( 0",c.id," )"]}):k.jsx($C,{className:"text-[#c4aaff]"})]}),k.jsx("div",{className:`overflow-hidden transition-all duration-700 ${d?"max-h-40 mt-3":"max-h-0"}`,children:k.jsx("p",{className:"text-sm max-w-md opacity-80",children:c.content})}),k.jsxs("a",{href:"#contact",className:`mt-4 text-[#c4aaff] underline underline-offset-8 items-center gap-2 font-mono text-sm ${d?"flex":"text-[1px] mt-0 opacity-0 pointer-events-none"}`,children:["Hire me",k.jsx(U_,{className:"text-xs"})]})]},c.id)})})]})]}),k.jsxs("main",{className:" w-full py-12 h-full max-w-full bg-[#191818] font-mono justify-center",children:[k.jsxs("div",{className:"max-w-340 p-8 mx-auto flex flex-col",children:[k.jsxs("div",{className:"flex flex-col lg:flex-row lg:justify-between items-start gap-6 py-8 rounded-2xl font-sans text-white",children:[k.jsx("p",{className:"text-sm sm:text-[16px] mt-1 lg:mt-3 text-[#c4aaff]",children:"// Process"}),k.jsx("h3",{className:"text-2xl sm:text-3xl lg:text-[48px] font-bold max-w-xl leading-tight",children:"My Development work Process"})]}),k.jsxs("div",{className:"flex items-center text-[#c4aaff] font-bold justify-between gap-1",children:["</",k.jsx("div",{className:"h-0.5 bg-[#505559] w-[90vw]"}),">"]})]}),k.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-sans items-start gap-16 lg:gap-32 max-w-7xl mx-auto pb-20 px-6",children:[k.jsxs("div",{className:"pl-12",children:[k.jsx("h3",{className:"text-7xl sm:text-8xl lg:text-[158px] font-bold bg-linear-to-r from-[#8B5CF6] to-white/80 bg-clip-text text-transparent",children:"01"}),k.jsx("p",{className:"text-[22px] text-white font-semibold",children:"Plan & Architect"}),k.jsx("p",{className:"text-sm text-gray-300 mt-4 max-w-xl",children:"Before writing a single line of code, I dive deep into understanding the project goals, user needs, and technical constraints."})]}),k.jsxs("div",{className:"border-l border-white/25 pl-12",children:[k.jsx("h3",{className:"text-7xl sm:text-8xl lg:text-[158px] font-bold bg-linear-to-r from-[#8B5CF6] to-white/80 bg-clip-text text-transparent",children:"02"}),k.jsx("p",{className:"text-[22px] text-white font-semibold",children:"Build & Develop"}),k.jsx("p",{className:"text-sm text-gray-300 mt-4 max-w-xl",children:"Build pixel-perfect user interfaces and robust backend systems in parallel. I ensure that every component—UI or API—is maintainable."})]}),k.jsxs("div",{className:"border-l border-white/25 pl-12",children:[k.jsx("h3",{className:"text-7xl sm:text-8xl lg:text-[158px] font-bold bg-linear-to-r from-[#8B5CF6] to-white/80 bg-clip-text text-transparent",children:"03"}),k.jsx("p",{className:"text-[22px] text-white font-semibold",children:"Launch & Support"}),k.jsx("p",{className:"text-sm text-gray-300 mt-4 max-w-xl",children:"I also provide post-launch monitoring, performance optimization, and ongoing iteration support to keep your product growing."})]})]})]}),k.jsx("section",{className:"flex flex-col py-15 bg-black/40",children:k.jsxs("div",{className:"relative w-full overflow-hidden",children:[k.jsx("div",{className:"pointer-events-none absolute right-0 h-full w-16 bg-linear-to-l from-white to-transparent z-10"}),k.jsx("div",{className:"marquee",children:[...a,...a].map((c,d)=>k.jsxs("div",{className:"flex items-center gap-4 mx-12 bg-white px-7 py-2",children:[k.jsx("img",{src:c.icon,alt:c.title,className:"h-8 w-8 object-contain"}),k.jsx("span",{className:"text-lg font-semibold text-[#111A4A]",children:c.title})]},`${c.title}-${d}`))})]})}),k.jsxs("main",{className:" w-full h-full max-w-full bg-[#131313] font-mono justify-center",children:[k.jsx("section",{id:"contact",className:"max-w-340 p-8 mx-auto flex flex-col",children:k.jsx(Q5,{})}),k.jsx(f4,{className:"py-7"})]})]})})]})]})}Ek.createRoot(document.getElementById("root")).render(k.jsx(vk.StrictMode,{children:k.jsx($T,{basename:"/mine-portfolio",children:k.jsxs(kT,{children:[k.jsx(Tc,{path:"/",element:k.jsx(Z2,{})}),k.jsx(Tc,{path:"/about",element:k.jsx(D5,{})}),k.jsx(Tc,{path:"/contact",element:k.jsx(Q5,{})}),k.jsx(Tc,{path:"*",element:k.jsx(Z2,{})})," "]})})}));export{k as j,N as r};
