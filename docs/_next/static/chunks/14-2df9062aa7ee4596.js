"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14],{19950:function(e,n,i){/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=i(39129);function h(e,n){return e===n&&(0!==e||1/e==1/n)||e!=e&&n!=n}var o="function"==typeof Object.is?Object.is:h,u=s.useState,l=s.useEffect,c=s.useLayoutEffect,f=s.useDebugValue;function q(e,n){var i=n(),s=u({inst:{value:i,getSnapshot:n}}),o=s[0].inst,d=s[1];return c(function(){o.value=i,o.getSnapshot=n,r(o)&&d({inst:o})},[e,i,n]),l(function(){return r(o)&&d({inst:o}),e(function(){r(o)&&d({inst:o})})},[e]),f(i),i}function r(e){var n=e.getSnapshot;e=e.value;try{var i=n();return!o(e,i)}catch(e){return!0}}function t(e,n){return n()}var d="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?t:q;n.useSyncExternalStore=void 0!==s.useSyncExternalStore?s.useSyncExternalStore:d},91397:function(e,n,i){/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=i(39129),o=i(54410);function p(e,n){return e===n&&(0!==e||1/e==1/n)||e!=e&&n!=n}var u="function"==typeof Object.is?Object.is:p,l=o.useSyncExternalStore,c=s.useRef,f=s.useEffect,d=s.useMemo,y=s.useDebugValue;n.useSyncExternalStoreWithSelector=function(e,n,i,s,o){var v=c(null);if(null===v.current){var b={hasValue:!1,value:null};v.current=b}else b=v.current;var m=l(e,(v=d(function(){function a(n){if(!c){if(c=!0,e=n,n=s(n),void 0!==o&&b.hasValue){var i=b.value;if(o(i,n))return l=i}return l=n}if(i=l,u(e,n))return i;var f=s(n);return void 0!==o&&o(i,f)?i:(e=n,l=f)}var e,l,c=!1,f=void 0===i?null:i;return[function(){return a(n())},null===f?void 0:function(){return a(f())}]},[n,i,s,o]))[0],v[1]);return f(function(){b.hasValue=!0,b.value=m},[m]),y(m),m}},54410:function(e,n,i){e.exports=i(19950)},44594:function(e,n,i){e.exports=i(91397)},29840:function(e,n,i){i.d(n,{NL:function(){return useQueryClient},aH:function(){return QueryClientProvider}});var s=i(39129);let o=s.createContext(void 0),u=s.createContext(!1);function getQueryClientContext(e,n){return e||(n&&"undefined"!=typeof window?(window.ReactQueryClientContext||(window.ReactQueryClientContext=o),window.ReactQueryClientContext):o)}let useQueryClient=({context:e}={})=>{let n=s.useContext(getQueryClientContext(e,s.useContext(u)));if(!n)throw Error("No QueryClient set, use QueryClientProvider to set one");return n},QueryClientProvider=({client:e,children:n,context:i,contextSharing:o=!1})=>{s.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]);let l=getQueryClientContext(i,o);return s.createElement(u.Provider,{value:!i&&o},s.createElement(l.Provider,{value:e},n))}},31360:function(e,n,i){i.d(n,{Ue:function(){return create}});let createStoreImpl=e=>{let n;let i=new Set,setState=(e,s)=>{let o="function"==typeof e?e(n):e;if(!Object.is(o,n)){let e=n;n=(null!=s?s:"object"!=typeof o)?o:Object.assign({},n,o),i.forEach(i=>i(n,e))}},getState=()=>n,s={setState,getState,subscribe:e=>(i.add(e),()=>i.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),i.clear()}};return n=e(setState,getState,s),s},createStore=e=>e?createStoreImpl(e):createStoreImpl;var s=i(39129),o=i(44594);let{useSyncExternalStoreWithSelector:u}=o,l=!1;function useStore(e,n=e.getState,i){i&&!l&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),l=!0);let o=u(e.subscribe,e.getState,e.getServerState||e.getState,n,i);return(0,s.useDebugValue)(o),o}let createImpl=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let n="function"==typeof e?createStore(e):e,useBoundStore=(e,i)=>useStore(n,e,i);return Object.assign(useBoundStore,n),useBoundStore},create=e=>e?createImpl(e):createImpl},77795:function(e,n,i){i.d(n,{j:function(){return u}});var s=i(75538),o=i(7476);let FocusManager=class FocusManager extends s.l{constructor(){super(),this.setup=e=>{if(!o.sk&&window.addEventListener){let listener=()=>e();return window.addEventListener("visibilitychange",listener,!1),window.addEventListener("focus",listener,!1),()=>{window.removeEventListener("visibilitychange",listener),window.removeEventListener("focus",listener)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.cleanup)||e.call(this),this.cleanup=void 0}}setEventListener(e){var n;this.setup=e,null==(n=this.cleanup)||n.call(this),this.cleanup=e(e=>{"boolean"==typeof e?this.setFocused(e):this.onFocus()})}setFocused(e){let n=this.focused!==e;n&&(this.focused=e,this.onFocus())}onFocus(){this.listeners.forEach(({listener:e})=>{e()})}isFocused(){return"boolean"==typeof this.focused?this.focused:"undefined"==typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)}};let u=new FocusManager},45202:function(e,n,i){i.d(n,{_:function(){return s}});let s=console},35641:function(e,n,i){i.d(n,{R:function(){return getDefaultState},m:function(){return Mutation}});var s=i(45202),o=i(42404),u=i(68264),l=i(28171);let Mutation=class Mutation extends u.F{constructor(e){super(),this.defaultOptions=e.defaultOptions,this.mutationId=e.mutationId,this.mutationCache=e.mutationCache,this.logger=e.logger||s._,this.observers=[],this.state=e.state||getDefaultState(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(e){this.dispatch({type:"setState",state:e})}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.observers=this.observers.filter(n=>n!==e),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.observers.length||("loading"===this.state.status?this.scheduleGc():this.mutationCache.remove(this))}continue(){var e,n;return null!=(e=null==(n=this.retryer)?void 0:n.continue())?e:this.execute()}async execute(){var e,n,i,s,o,u,c,f,d,y,v,b,m,g,w,S,E,C,O,P;let F="loading"===this.state.status;try{if(!F){this.dispatch({type:"loading",variables:this.options.variables}),await (null==(d=(y=this.mutationCache.config).onMutate)?void 0:d.call(y,this.state.variables,this));let e=await (null==(v=(b=this.options).onMutate)?void 0:v.call(b,this.state.variables));e!==this.state.context&&this.dispatch({type:"loading",context:e,variables:this.state.variables})}let m=await (()=>{var e;return this.retryer=(0,l.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(e,n)=>{this.dispatch({type:"failed",failureCount:e,error:n})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:null!=(e=this.options.retry)?e:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise})();return await (null==(e=(n=this.mutationCache.config).onSuccess)?void 0:e.call(n,m,this.state.variables,this.state.context,this)),await (null==(i=(s=this.options).onSuccess)?void 0:i.call(s,m,this.state.variables,this.state.context)),await (null==(o=(u=this.mutationCache.config).onSettled)?void 0:o.call(u,m,null,this.state.variables,this.state.context,this)),await (null==(c=(f=this.options).onSettled)?void 0:c.call(f,m,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:m}),m}catch(e){try{throw await (null==(m=(g=this.mutationCache.config).onError)?void 0:m.call(g,e,this.state.variables,this.state.context,this)),await (null==(w=(S=this.options).onError)?void 0:w.call(S,e,this.state.variables,this.state.context)),await (null==(E=(C=this.mutationCache.config).onSettled)?void 0:E.call(C,void 0,e,this.state.variables,this.state.context,this)),await (null==(O=(P=this.options).onSettled)?void 0:O.call(P,void 0,e,this.state.variables,this.state.context)),e}finally{this.dispatch({type:"error",error:e})}}}dispatch(e){this.state=(n=>{switch(e.type){case"failed":return{...n,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...n,isPaused:!0};case"continue":return{...n,isPaused:!1};case"loading":return{...n,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,l.Kw)(this.options.networkMode),status:"loading",variables:e.variables};case"success":return{...n,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...n,data:void 0,error:e.error,failureCount:n.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"};case"setState":return{...n,...e.state}}})(this.state),o.V.batch(()=>{this.observers.forEach(n=>{n.onMutationUpdate(e)}),this.mutationCache.notify({mutation:this,type:"updated",action:e})})}};function getDefaultState(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}},42404:function(e,n,i){i.d(n,{V:function(){return o}});var s=i(7476);function createNotifyManager(){let e=[],n=0,notifyFn=e=>{e()},batchNotifyFn=e=>{e()},schedule=i=>{n?e.push(i):(0,s.A4)(()=>{notifyFn(i)})},flush=()=>{let n=e;e=[],n.length&&(0,s.A4)(()=>{batchNotifyFn(()=>{n.forEach(e=>{notifyFn(e)})})})};return{batch:e=>{let i;n++;try{i=e()}finally{--n||flush()}return i},batchCalls:e=>(...n)=>{schedule(()=>{e(...n)})},schedule,setNotifyFunction:e=>{notifyFn=e},setBatchNotifyFunction:e=>{batchNotifyFn=e}}}let o=createNotifyManager()},15755:function(e,n,i){i.d(n,{N:function(){return l}});var s=i(75538),o=i(7476);let u=["online","offline"];let OnlineManager=class OnlineManager extends s.l{constructor(){super(),this.setup=e=>{if(!o.sk&&window.addEventListener){let listener=()=>e();return u.forEach(e=>{window.addEventListener(e,listener,!1)}),()=>{u.forEach(e=>{window.removeEventListener(e,listener)})}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.cleanup)||e.call(this),this.cleanup=void 0}}setEventListener(e){var n;this.setup=e,null==(n=this.cleanup)||n.call(this),this.cleanup=e(e=>{"boolean"==typeof e?this.setOnline(e):this.onOnline()})}setOnline(e){let n=this.online!==e;n&&(this.online=e,this.onOnline())}onOnline(){this.listeners.forEach(({listener:e})=>{e()})}isOnline(){return"boolean"==typeof this.online?this.online:"undefined"==typeof navigator||void 0===navigator.onLine||navigator.onLine}};let l=new OnlineManager},68264:function(e,n,i){i.d(n,{F:function(){return Removable}});var s=i(7476);let Removable=class Removable{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,s.PN)(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(e){this.cacheTime=Math.max(this.cacheTime||0,null!=e?e:s.sk?1/0:3e5)}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}},28171:function(e,n,i){i.d(n,{DV:function(){return isCancelledError},Kw:function(){return canFetch},Mz:function(){return createRetryer}});var s=i(77795),o=i(15755),u=i(7476);function defaultRetryDelay(e){return Math.min(1e3*2**e,3e4)}function canFetch(e){return(null!=e?e:"online")!=="online"||o.N.isOnline()}let CancelledError=class CancelledError{constructor(e){this.revert=null==e?void 0:e.revert,this.silent=null==e?void 0:e.silent}};function isCancelledError(e){return e instanceof CancelledError}function createRetryer(e){let n,i,l,c=!1,f=0,d=!1,y=new Promise((e,n)=>{i=e,l=n}),shouldPause=()=>!s.j.isFocused()||"always"!==e.networkMode&&!o.N.isOnline(),resolve=s=>{d||(d=!0,null==e.onSuccess||e.onSuccess(s),null==n||n(),i(s))},reject=i=>{d||(d=!0,null==e.onError||e.onError(i),null==n||n(),l(i))},pause=()=>new Promise(i=>{n=e=>{let n=d||!shouldPause();return n&&i(e),n},null==e.onPause||e.onPause()}).then(()=>{n=void 0,d||null==e.onContinue||e.onContinue()}),run=()=>{let n;if(!d){try{n=e.fn()}catch(e){n=Promise.reject(e)}Promise.resolve(n).then(resolve).catch(n=>{var i,s;if(d)return;let o=null!=(i=e.retry)?i:3,l=null!=(s=e.retryDelay)?s:defaultRetryDelay,y="function"==typeof l?l(f,n):l,v=!0===o||"number"==typeof o&&f<o||"function"==typeof o&&o(f,n);if(c||!v){reject(n);return}f++,null==e.onFail||e.onFail(f,n),(0,u.Gh)(y).then(()=>{if(shouldPause())return pause()}).then(()=>{c?reject(n):run()})})}};return canFetch(e.networkMode)?run():pause().then(run),{promise:y,cancel:n=>{d||(reject(new CancelledError(n)),null==e.abort||e.abort())},continue:()=>{let e=null==n?void 0:n();return e?y:Promise.resolve()},cancelRetry:()=>{c=!0},continueRetry:()=>{c=!1}}}},75538:function(e,n,i){i.d(n,{l:function(){return Subscribable}});let Subscribable=class Subscribable{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){let n={listener:e};return this.listeners.add(n),this.onSubscribe(),()=>{this.listeners.delete(n),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}},7476:function(e,n,i){i.d(n,{A4:function(){return scheduleMicrotask},G9:function(){return getAbortController},Gh:function(){return sleep},I6:function(){return parseFilterArgs},Kp:function(){return timeUntilStale},PN:function(){return isValidTimeout},Rm:function(){return hashQueryKeyByOptions},SE:function(){return functionalUpdate},VS:function(){return shallowEqualObjects},X7:function(){return matchMutation},ZT:function(){return noop},_v:function(){return parseQueryArgs},_x:function(){return matchQuery},lV:function(){return parseMutationArgs},oE:function(){return replaceData},sk:function(){return s},to:function(){return partialMatchKey},yF:function(){return hashQueryKey}});let s="undefined"==typeof window||"Deno"in window;function noop(){}function functionalUpdate(e,n){return"function"==typeof e?e(n):e}function isValidTimeout(e){return"number"==typeof e&&e>=0&&e!==1/0}function timeUntilStale(e,n){return Math.max(e+(n||0)-Date.now(),0)}function parseQueryArgs(e,n,i){return isQueryKey(e)?"function"==typeof n?{...i,queryKey:e,queryFn:n}:{...n,queryKey:e}:e}function parseMutationArgs(e,n,i){return isQueryKey(e)?"function"==typeof n?{...i,mutationKey:e,mutationFn:n}:{...n,mutationKey:e}:"function"==typeof e?{...n,mutationFn:e}:{...e}}function parseFilterArgs(e,n,i){return isQueryKey(e)?[{...n,queryKey:e},i]:[e||{},n]}function matchQuery(e,n){let{type:i="all",exact:s,fetchStatus:o,predicate:u,queryKey:l,stale:c}=e;if(isQueryKey(l)){if(s){if(n.queryHash!==hashQueryKeyByOptions(l,n.options))return!1}else{if(!partialDeepEqual(n.queryKey,l))return!1}}if("all"!==i){let e=n.isActive();if("active"===i&&!e||"inactive"===i&&e)return!1}return("boolean"!=typeof c||n.isStale()===c)&&(void 0===o||o===n.state.fetchStatus)&&(!u||!!u(n))}function matchMutation(e,n){let{exact:i,fetching:s,predicate:o,mutationKey:u}=e;if(isQueryKey(u)){if(!n.options.mutationKey)return!1;if(i){if(hashQueryKey(n.options.mutationKey)!==hashQueryKey(u))return!1}else{if(!partialDeepEqual(n.options.mutationKey,u))return!1}}return("boolean"!=typeof s||"loading"===n.state.status===s)&&(!o||!!o(n))}function hashQueryKeyByOptions(e,n){let i=(null==n?void 0:n.queryKeyHashFn)||hashQueryKey;return i(e)}function hashQueryKey(e){return JSON.stringify(e,(e,n)=>isPlainObject(n)?Object.keys(n).sort().reduce((e,i)=>(e[i]=n[i],e),{}):n)}function partialMatchKey(e,n){return partialDeepEqual(e,n)}function partialDeepEqual(e,n){return e===n||typeof e==typeof n&&!!e&&!!n&&"object"==typeof e&&"object"==typeof n&&!Object.keys(n).some(i=>!partialDeepEqual(e[i],n[i]))}function replaceEqualDeep(e,n){if(e===n)return e;let i=isPlainArray(e)&&isPlainArray(n);if(i||isPlainObject(e)&&isPlainObject(n)){let s=i?e.length:Object.keys(e).length,o=i?n:Object.keys(n),u=o.length,l=i?[]:{},c=0;for(let s=0;s<u;s++){let u=i?s:o[s];l[u]=replaceEqualDeep(e[u],n[u]),l[u]===e[u]&&c++}return s===u&&c===s?e:l}return n}function shallowEqualObjects(e,n){if(e&&!n||n&&!e)return!1;for(let i in e)if(e[i]!==n[i])return!1;return!0}function isPlainArray(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function isPlainObject(e){if(!hasObjectPrototype(e))return!1;let n=e.constructor;if(void 0===n)return!0;let i=n.prototype;return!!(hasObjectPrototype(i)&&i.hasOwnProperty("isPrototypeOf"))}function hasObjectPrototype(e){return"[object Object]"===Object.prototype.toString.call(e)}function isQueryKey(e){return Array.isArray(e)}function sleep(e){return new Promise(n=>{setTimeout(n,e)})}function scheduleMicrotask(e){sleep(0).then(e)}function getAbortController(){if("function"==typeof AbortController)return new AbortController}function replaceData(e,n,i){return null!=i.isDataEqual&&i.isDataEqual(e,n)?e:"function"==typeof i.structuralSharing?i.structuralSharing(e,n):!1!==i.structuralSharing?replaceEqualDeep(e,n):n}}}]);