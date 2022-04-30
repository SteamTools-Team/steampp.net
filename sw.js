var l=(P,x,d)=>new Promise((W,u)=>{var f=p=>{try{N(d.next(p))}catch(U){u(U)}},b=p=>{try{N(d.throw(p))}catch(U){u(U)}},N=p=>p.done?W(p.value):Promise.resolve(p.value).then(f,b);N((d=d.apply(P,x)).next())});(function(){"use strict";var P={913:function(){try{self["workbox:core:6.5.1"]&&_()}catch(u){}},977:function(){try{self["workbox:precaching:6.5.1"]&&_()}catch(u){}},80:function(){try{self["workbox:routing:6.5.1"]&&_()}catch(u){}},873:function(){try{self["workbox:strategies:6.5.1"]&&_()}catch(u){}}},x={};function d(u){var f=x[u];if(f!==void 0)return f.exports;var b=x[u]={exports:{}};return P[u](b,b.exports,d),b.exports}var W={};(function(){function u(r,e,t,n,s,a,o){try{var i=r[a](o),c=i.value}catch(m){t(m);return}i.done?e(c):Promise.resolve(c).then(n,s)}function f(r){return function(){var e=this,t=arguments;return new Promise(function(n,s){var a=r.apply(e,t);function o(c){u(a,n,s,o,i,"next",c)}function i(c){u(a,n,s,o,i,"throw",c)}o(void 0)})}}var b=d(913);const N={"invalid-value":({paramName:r,validValueDescription:e,value:t})=>{if(!r||!e)throw new Error("Unexpected input to 'invalid-value' error.");return`The '${r}' parameter was given a value with an unexpected value. ${e} Received a value of ${JSON.stringify(t)}.`},"not-an-array":({moduleName:r,className:e,funcName:t,paramName:n})=>{if(!r||!e||!t||!n)throw new Error("Unexpected input to 'not-an-array' error.");return`The parameter '${n}' passed into '${r}.${e}.${t}()' must be an array.`},"incorrect-type":({expectedType:r,paramName:e,moduleName:t,className:n,funcName:s})=>{if(!r||!e||!t||!s)throw new Error("Unexpected input to 'incorrect-type' error.");const a=n?`${n}.`:"";return`The parameter '${e}' passed into '${t}.${a}${s}()' must be of type ${r}.`},"incorrect-class":({expectedClassName:r,paramName:e,moduleName:t,className:n,funcName:s,isReturnValueProblem:a})=>{if(!r||!t||!s)throw new Error("Unexpected input to 'incorrect-class' error.");const o=n?`${n}.`:"";return a?`The return value from '${t}.${o}${s}()' must be an instance of class ${r}.`:`The parameter '${e}' passed into '${t}.${o}${s}()' must be an instance of class ${r}.`},"missing-a-method":({expectedMethod:r,paramName:e,moduleName:t,className:n,funcName:s})=>{if(!r||!e||!t||!n||!s)throw new Error("Unexpected input to 'missing-a-method' error.");return`${t}.${n}.${s}() expected the '${e}' parameter to expose a '${r}' method.`},"add-to-cache-list-unexpected-type":({entry:r})=>`An unexpected entry was passed to 'workbox-precaching.PrecacheController.addToCacheList()' The entry '${JSON.stringify(r)}' isn't supported. You must supply an array of strings with one or more characters, objects with a url property or Request objects.`,"add-to-cache-list-conflicting-entries":({firstEntry:r,secondEntry:e})=>{if(!r||!e)throw new Error("Unexpected input to 'add-to-cache-list-duplicate-entries' error.");return`Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${r} but different revision details. Workbox is unable to cache and version the asset correctly. Please remove one of the entries.`},"plugin-error-request-will-fetch":({thrownErrorMessage:r})=>{if(!r)throw new Error("Unexpected input to 'plugin-error-request-will-fetch', error.");return`An error was thrown by a plugins 'requestWillFetch()' method. The thrown error message was: '${r}'.`},"invalid-cache-name":({cacheNameId:r,value:e})=>{if(!r)throw new Error("Expected a 'cacheNameId' for error 'invalid-cache-name'");return`You must provide a name containing at least one character for setCacheDetails({${r}: '...'}). Received a value of '${JSON.stringify(e)}'`},"unregister-route-but-not-found-with-method":({method:r})=>{if(!r)throw new Error("Unexpected input to 'unregister-route-but-not-found-with-method' error.");return`The route you're trying to unregister was not  previously registered for the method type '${r}'.`},"unregister-route-route-not-registered":()=>"The route you're trying to unregister was not previously registered.","queue-replay-failed":({name:r})=>`Replaying the background sync queue '${r}' failed.`,"duplicate-queue-name":({name:r})=>`The Queue name '${r}' is already being used. All instances of backgroundSync.Queue must be given unique names.`,"expired-test-without-max-age":({methodName:r,paramName:e})=>`The '${r}()' method can only be used when the '${e}' is used in the constructor.`,"unsupported-route-type":({moduleName:r,className:e,funcName:t,paramName:n})=>`The supplied '${n}' parameter was an unsupported type. Please check the docs for ${r}.${e}.${t} for valid input types.`,"not-array-of-class":({value:r,expectedClass:e,moduleName:t,className:n,funcName:s,paramName:a})=>`The supplied '${a}' parameter must be an array of '${e}' objects. Received '${JSON.stringify(r)},'. Please check the call to ${t}.${n}.${s}() to fix the issue.`,"max-entries-or-age-required":({moduleName:r,className:e,funcName:t})=>`You must define either config.maxEntries or config.maxAgeSecondsin ${r}.${e}.${t}`,"statuses-or-headers-required":({moduleName:r,className:e,funcName:t})=>`You must define either config.statuses or config.headersin ${r}.${e}.${t}`,"invalid-string":({moduleName:r,funcName:e,paramName:t})=>{if(!t||!r||!e)throw new Error("Unexpected input to 'invalid-string' error.");return`When using strings, the '${t}' parameter must start with 'http' (for cross-origin matches) or '/' (for same-origin matches). Please see the docs for ${r}.${e}() for more info.`},"channel-name-required":()=>"You must provide a channelName to construct a BroadcastCacheUpdate instance.","invalid-responses-are-same-args":()=>"The arguments passed into responsesAreSame() appear to be invalid. Please ensure valid Responses are used.","expire-custom-caches-only":()=>"You must provide a 'cacheName' property when using the expiration plugin with a runtime caching strategy.","unit-must-be-bytes":({normalizedRangeHeader:r})=>{if(!r)throw new Error("Unexpected input to 'unit-must-be-bytes' error.");return`The 'unit' portion of the Range header must be set to 'bytes'. The Range header provided was "${r}"`},"single-range-only":({normalizedRangeHeader:r})=>{if(!r)throw new Error("Unexpected input to 'single-range-only' error.");return`Multiple ranges are not supported. Please use a  single start value, and optional end value. The Range header provided was "${r}"`},"invalid-range-values":({normalizedRangeHeader:r})=>{if(!r)throw new Error("Unexpected input to 'invalid-range-values' error.");return`The Range header is missing both start and end values. At least one of those values is needed. The Range header provided was "${r}"`},"no-range-header":()=>"No Range header was found in the Request provided.","range-not-satisfiable":({size:r,start:e,end:t})=>`The start (${e}) and end (${t}) values in the Range are not satisfiable by the cached response, which is ${r} bytes.`,"attempt-to-cache-non-get-request":({url:r,method:e})=>`Unable to cache '${r}' because it is a '${e}' request and only 'GET' requests can be cached.`,"cache-put-with-no-response":({url:r})=>`There was an attempt to cache '${r}' but the response was not defined.`,"no-response":({url:r,error:e})=>{let t=`The strategy could not generate a response for '${r}'.`;return e&&(t+=` The underlying error is ${e}.`),t},"bad-precaching-response":({url:r,status:e})=>`The precaching request for '${r}' failed`+(e?` with an HTTP status of ${e}.`:"."),"non-precached-url":({url:r})=>`createHandlerBoundToURL('${r}') was called, but that URL is not precached. Please pass in a URL that is precached instead.`,"add-to-cache-list-conflicting-integrities":({url:r})=>`Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${r} with different integrity values. Please remove one of them.`,"missing-precache-entry":({cacheName:r,url:e})=>`Unable to find a precached response in ${r} for ${e}.`,"cross-origin-copy-response":({origin:r})=>`workbox-core.copyResponse() can only be used with same-origin responses. It was passed a response with origin ${r}.`,"opaque-streams-source":({type:r})=>{const e=`One of the workbox-streams sources resulted in an '${r}' response.`;return r==="opaqueredirect"?`${e} Please do not use a navigation request that results in a redirect as a source.`:`${e} Please ensure your sources are CORS-enabled.`}},p=(r,...e)=>{let t=r;return e.length>0&&(t+=` :: ${JSON.stringify(e)}`),t},U=(r,e={})=>{const t=messages[r];if(!t)throw new Error(`Unable to find message for code '${r}'.`);return t(e)},F=p;class h extends Error{constructor(e,t){const n=F(e,t);super(n);this.name=e,this.details=t}}const Ue=(r,e)=>{if(!Array.isArray(r))throw new WorkboxError("not-an-array",e)},qe=(r,e,t)=>{if(typeof r[e]!="function")throw t.expectedMethod=e,new WorkboxError("missing-a-method",t)},Te=(r,e,t)=>{if(typeof r!==e)throw t.expectedType=e,new WorkboxError("incorrect-type",t)},Le=(r,e,t)=>{if(!(r instanceof e))throw t.expectedClassName=e.name,new WorkboxError("incorrect-class",t)},ke=(r,e,t)=>{if(!e.includes(r))throw t.validValueDescription=`Valid values are ${JSON.stringify(e)}.`,new WorkboxError("invalid-value",t)},Pe=(r,e,t)=>{const n=new WorkboxError("not-array-of-class",t);if(!Array.isArray(r))throw n;for(const s of r)if(!(s instanceof e))throw n},Ee=null,g={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:typeof registration!="undefined"?registration.scope:""},E=r=>[g.prefix,r,g.suffix].filter(e=>e&&e.length>0).join("-"),B=r=>{for(const e of Object.keys(g))r(e)},K={updateDetails:r=>{B(e=>{typeof r[e]=="string"&&(g[e]=r[e])})},getGoogleAnalyticsName:r=>r||E(g.googleAnalytics),getPrecacheName:r=>r||E(g.precache),getPrefix:()=>g.prefix,getRuntimeName:r=>r||E(g.runtime),getSuffix:()=>g.suffix},Ke=null;function A(r,e){const t=e();return r.waitUntil(t),t}var Oe=d(977);const J="__WB_REVISION__";function V(r){if(!r)throw new h("add-to-cache-list-unexpected-type",{entry:r});if(typeof r=="string"){const a=new URL(r,location.href);return{cacheKey:a.href,url:a.href}}const{revision:e,url:t}=r;if(!t)throw new h("add-to-cache-list-unexpected-type",{entry:r});if(!e){const a=new URL(t,location.href);return{cacheKey:a.href,url:a.href}}const n=new URL(t,location.href),s=new URL(t,location.href);return n.searchParams.set(J,e),{cacheKey:n.href,url:s.href}}class z{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=e=>l(this,[e],function*({request:t,state:n}){n&&(n.originalRequest=t)}),this.cachedResponseWillBeUsed=e=>l(this,[e],function*({event:t,state:n,cachedResponse:s}){if(t.type==="install"&&n&&n.originalRequest&&n.originalRequest instanceof Request){const a=n.originalRequest.url;s?this.notUpdatedURLs.push(a):this.updatedURLs.push(a)}return s})}}class Y{constructor({precacheController:e}){this.cacheKeyWillBeUsed=t=>l(this,[t],function*({request:n,params:s}){const a=(s==null?void 0:s.cacheKey)||this._precacheController.getCacheKeyForURL(n.url);return a?new Request(a,{headers:n.headers}):n}),this._precacheController=e}}const G=(r,e)=>{logger.groupCollapsed(r);for(const t of e)logger.log(t);logger.groupEnd()};function We(r){const e=r.length;e>0&&(logger.groupCollapsed(`During precaching cleanup, ${e} cached request${e===1?" was":"s were"} deleted.`),G("Deleted Cache Requests",r),logger.groupEnd())}function M(r,e){if(e.length!==0){logger.groupCollapsed(r);for(const t of e)logger.log(t);logger.groupEnd()}}function Ae(r,e){const t=r.length,n=e.length;if(t||n){let s=`Precaching ${t} file${t===1?"":"s"}.`;n>0&&(s+=` ${n} file${n===1?" is":"s are"} already cached.`),logger.groupCollapsed(s),M("View newly precached URLs.",r),M("View previously precached URLs.",e),logger.groupEnd()}}let R;function Q(){if(R===void 0){const r=new Response("");if("body"in r)try{new Response(r.body),R=!0}catch(e){R=!1}R=!1}return R}function X(r,e){return l(this,null,function*(){let t=null;if(r.url&&(t=new URL(r.url).origin),t!==self.location.origin)throw new h("cross-origin-copy-response",{origin:t});const n=r.clone(),s={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},a=e?e(s):s,o=Q()?n.body:yield n.blob();return new Response(o,a)})}const Z=r=>new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),"");function S(r,e){const t=new URL(r);for(const n of e)t.searchParams.delete(n);return t.href}function ee(r,e,t,n){return l(this,null,function*(){const s=S(e.url,t);if(e.url===s)return r.match(e,n);const a=Object.assign(Object.assign({},n),{ignoreSearch:!0}),o=yield r.keys(e,a);for(const i of o){const c=S(i.url,t);if(s===c)return r.match(i,n)}})}class te{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}const re=new Set;function ne(){return l(this,null,function*(){for(const r of re)yield r()})}function se(r){return new Promise(e=>setTimeout(e,r))}var Me=d(873);function q(r){return typeof r=="string"?new Request(r):r}class ae{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new te,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const n of this._plugins)this._pluginStateMap.set(n,{});this.event.waitUntil(this._handlerDeferred.promise)}fetch(e){return l(this,null,function*(){const{event:t}=this;let n=q(e);if(n.mode==="navigate"&&t instanceof FetchEvent&&t.preloadResponse){const o=yield t.preloadResponse;if(o)return o}const s=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const o of this.iterateCallbacks("requestWillFetch"))n=yield o({request:n.clone(),event:t})}catch(o){if(o instanceof Error)throw new h("plugin-error-request-will-fetch",{thrownErrorMessage:o.message})}const a=n.clone();try{let o;o=yield fetch(n,n.mode==="navigate"?void 0:this._strategy.fetchOptions);for(const i of this.iterateCallbacks("fetchDidSucceed"))o=yield i({event:t,request:a,response:o});return o}catch(o){throw s&&(yield this.runCallbacks("fetchDidFail",{error:o,event:t,originalRequest:s.clone(),request:a.clone()})),o}})}fetchAndCachePut(e){return l(this,null,function*(){const t=yield this.fetch(e),n=t.clone();return this.waitUntil(this.cachePut(e,n)),t})}cacheMatch(e){return l(this,null,function*(){const t=q(e);let n;const{cacheName:s,matchOptions:a}=this._strategy,o=yield this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},a),{cacheName:s});n=yield caches.match(o,i);for(const c of this.iterateCallbacks("cachedResponseWillBeUsed"))n=(yield c({cacheName:s,matchOptions:a,cachedResponse:n,request:o,event:this.event}))||void 0;return n})}cachePut(e,t){return l(this,null,function*(){const n=q(e);yield se(0);const s=yield this.getCacheKey(n,"write");if(!t)throw new h("cache-put-with-no-response",{url:Z(s.url)});const a=yield this._ensureResponseSafeToCache(t);if(!a)return!1;const{cacheName:o,matchOptions:i}=this._strategy,c=yield self.caches.open(o),m=this.hasCallback("cacheDidUpdate"),v=m?yield ee(c,s.clone(),["__WB_REVISION__"],i):null;try{yield c.put(s,m?a.clone():a)}catch(y){if(y instanceof Error)throw y.name==="QuotaExceededError"&&(yield ne()),y}for(const y of this.iterateCallbacks("cacheDidUpdate"))yield y({cacheName:o,oldResponse:v,newResponse:a.clone(),request:s,event:this.event});return!0})}getCacheKey(e,t){return l(this,null,function*(){const n=`${e.url} | ${t}`;if(!this._cacheKeys[n]){let s=e;for(const a of this.iterateCallbacks("cacheKeyWillBeUsed"))s=q(yield a({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[n]=s}return this._cacheKeys[n]})}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}runCallbacks(e,t){return l(this,null,function*(){for(const n of this.iterateCallbacks(e))yield n(t)})}*iterateCallbacks(e){for(const t of this._strategy.plugins)if(typeof t[e]=="function"){const n=this._pluginStateMap.get(t);yield s=>{const a=Object.assign(Object.assign({},s),{state:n});return t[e](a)}}}waitUntil(e){return this._extendLifetimePromises.push(e),e}doneWaiting(){return l(this,null,function*(){let e;for(;e=this._extendLifetimePromises.shift();)yield e})}destroy(){this._handlerDeferred.resolve(null)}_ensureResponseSafeToCache(e){return l(this,null,function*(){let t=e,n=!1;for(const s of this.iterateCallbacks("cacheWillUpdate"))if(t=(yield s({request:this.request,response:t,event:this.event}))||void 0,n=!0,!t)break;return n||t&&t.status!==200&&(t=void 0),t})}}class oe{constructor(e={}){this.cacheName=K.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,n=typeof e.request=="string"?new Request(e.request):e.request,s="params"in e?e.params:void 0,a=new ae(this,{event:t,request:n,params:s}),o=this._getResponse(a,n,t),i=this._awaitComplete(o,a,n,t);return[o,i]}_getResponse(e,t,n){return l(this,null,function*(){yield e.runCallbacks("handlerWillStart",{event:n,request:t});let s;try{if(s=yield this._handle(t,e),!s||s.type==="error")throw new h("no-response",{url:t.url})}catch(a){if(a instanceof Error){for(const o of e.iterateCallbacks("handlerDidError"))if(s=yield o({error:a,event:n,request:t}),s)break}if(!s)throw a}for(const a of e.iterateCallbacks("handlerWillRespond"))s=yield a({event:n,request:t,response:s});return s})}_awaitComplete(e,t,n,s){return l(this,null,function*(){let a,o;try{a=yield e}catch(i){}try{yield t.runCallbacks("handlerDidRespond",{event:s,request:n,response:a}),yield t.doneWaiting()}catch(i){i instanceof Error&&(o=i)}if(yield t.runCallbacks("handlerDidComplete",{event:s,request:n,response:a,error:o}),t.destroy(),o)throw o})}}class w extends oe{constructor(e={}){e.cacheName=K.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=e.fallbackToNetwork!==!1,this.plugins.push(w.copyRedirectedCacheableResponsesPlugin)}_handle(e,t){return l(this,null,function*(){return(yield t.cacheMatch(e))||(t.event&&t.event.type==="install"?yield this._handleInstall(e,t):yield this._handleFetch(e,t))})}_handleFetch(e,t){return l(this,null,function*(){let n;const s=t.params||{};if(this._fallbackToNetwork){const a=s.integrity,o=e.integrity,i=!o||o===a;if(n=yield t.fetch(new Request(e,{integrity:o||a})),a&&i){this._useDefaultCacheabilityPluginIfNeeded();const c=yield t.cachePut(e,n.clone())}}else throw new h("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return n})}_handleInstall(e,t){return l(this,null,function*(){this._useDefaultCacheabilityPluginIfNeeded();const n=yield t.fetch(e);if(!(yield t.cachePut(e,n.clone())))throw new h("bad-precaching-response",{url:e.url,status:n.status});return n})}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[n,s]of this.plugins.entries())s!==w.copyRedirectedCacheableResponsesPlugin&&(s===w.defaultPrecacheCacheabilityPlugin&&(e=n),s.cacheWillUpdate&&t++);t===0?this.plugins.push(w.defaultPrecacheCacheabilityPlugin):t>1&&e!==null&&this.plugins.splice(e,1)}}w.defaultPrecacheCacheabilityPlugin={cacheWillUpdate(r){return l(this,arguments,function*({response:e}){return!e||e.status>=400?null:e})}},w.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate(r){return l(this,arguments,function*({response:e}){return e.redirected?yield X(e):e})}};class ie{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:n=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new w({cacheName:K.getPrecacheName(e),plugins:[...t,new Y({precacheController:this})],fallbackToNetwork:n}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const n of e){typeof n=="string"?t.push(n):n&&n.revision===void 0&&t.push(n.url);const{cacheKey:s,url:a}=V(n),o=typeof n!="string"&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==s)throw new h("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:s});if(typeof n!="string"&&n.integrity){if(this._cacheKeysToIntegrities.has(s)&&this._cacheKeysToIntegrities.get(s)!==n.integrity)throw new h("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(s,n.integrity)}if(this._urlsToCacheKeys.set(a,s),this._urlsToCacheModes.set(a,o),t.length>0){const i=`Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(i)}}}install(e){return A(e,()=>l(this,null,function*(){const t=new z;this.strategy.plugins.push(t);for(const[a,o]of this._urlsToCacheKeys){const i=this._cacheKeysToIntegrities.get(o),c=this._urlsToCacheModes.get(a),m=new Request(a,{integrity:i,cache:c,credentials:"same-origin"});yield Promise.all(this.strategy.handleAll({params:{cacheKey:o},request:m,event:e}))}const{updatedURLs:n,notUpdatedURLs:s}=t;return{updatedURLs:n,notUpdatedURLs:s}}))}activate(e){return A(e,()=>l(this,null,function*(){const t=yield self.caches.open(this.strategy.cacheName),n=yield t.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const o of n)s.has(o.url)||(yield t.delete(o),a.push(o.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}matchPrecache(e){return l(this,null,function*(){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n)return(yield self.caches.open(this.strategy.cacheName)).match(n)})}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new h("non-precached-url",{url:e});return n=>(n.request=new Request(e),n.params=Object.assign({cacheKey:t},n.params),this.strategy.handle(n))}}let O;const j=()=>(O||(O=new ie),O);function Se(r){getOrCreatePrecacheController().strategy.plugins.push(...r)}var je=d(80);const H="GET",He=null,T=r=>r&&typeof r=="object"?r:{handle:r};class C{constructor(e,t,n=H){this.handler=T(t),this.match=e,this.method=n}setCatchHandler(e){this.catchHandler=T(e)}}class ce extends C{constructor(e,t,n){const s=({url:a})=>{const o=e.exec(a.href);if(!!o&&!(a.origin!==location.origin&&o.index!==0))return o.slice(1)};super(s,t,n)}}class le{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,n=this.handleRequest({request:t,event:e});n&&e.respondWith(n)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&e.data.type==="CACHE_URLS"){const{payload:t}=e.data,n=Promise.all(t.urlsToCache.map(s=>{typeof s=="string"&&(s=[s]);const a=new Request(...s);return this.handleRequest({request:a,event:e})}));e.waitUntil(n),e.ports&&e.ports[0]&&n.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const n=new URL(e.url,location.href);if(!n.protocol.startsWith("http"))return;const s=n.origin===location.origin,{params:a,route:o}=this.findMatchingRoute({event:t,request:e,sameOrigin:s,url:n});let i=o&&o.handler;const c=[],m=e.method;if(!i&&this._defaultHandlerMap.has(m)&&(i=this._defaultHandlerMap.get(m)),!i)return;let v;try{v=i.handle({url:n,request:e,event:t,params:a})}catch(k){v=Promise.reject(k)}const y=o&&o.catchHandler;return v instanceof Promise&&(this._catchHandler||y)&&(v=v.catch(k=>l(this,null,function*(){if(y)try{return yield y.handle({url:n,request:e,event:t,params:a})}catch(D){D instanceof Error&&(k=D)}if(this._catchHandler)return this._catchHandler.handle({url:n,request:e,event:t});throw k}))),v}findMatchingRoute({url:e,sameOrigin:t,request:n,event:s}){const a=this._routes.get(n.method)||[];for(const o of a){let i;const c=o.match({url:e,sameOrigin:t,request:n,event:s});if(c)return i=c,(Array.isArray(i)&&i.length===0||c.constructor===Object&&Object.keys(c).length===0||typeof c=="boolean")&&(i=void 0),{route:o,params:i}}return{}}setDefaultHandler(e,t=H){this._defaultHandlerMap.set(t,T(e))}setCatchHandler(e){this._catchHandler=T(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new h("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(t>-1)this._routes.get(e.method).splice(t,1);else throw new h("unregister-route-route-not-registered")}}let $;const he=()=>($||($=new le,$.addFetchListener(),$.addCacheListener()),$);function ue(r,e,t){let n;if(typeof r=="string"){const s=new URL(r,location.href),a=({url:o})=>o.href===s.href;n=new C(a,e,t)}else if(r instanceof RegExp)n=new ce(r,e,t);else if(typeof r=="function")n=new C(r,e,t);else if(r instanceof C)n=r;else throw new h("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});return he().registerRoute(n),n}function de(r,e=[]){for(const t of[...r.searchParams.keys()])e.some(n=>n.test(t))&&r.searchParams.delete(t);return r}function*fe(r,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:t="index.html",cleanURLs:n=!0,urlManipulation:s}={}){const a=new URL(r,location.href);a.hash="",yield a.href;const o=de(a,e);if(yield o.href,t&&o.pathname.endsWith("/")){const i=new URL(o.href);i.pathname+=t,yield i.href}if(n){const i=new URL(o.href);i.pathname+=".html",yield i.href}if(s){const i=s({url:a});for(const c of i)yield c.href}}class pe extends C{constructor(e,t){const n=({request:s})=>{const a=e.getURLsToCacheKeys();for(const o of fe(s.url,t)){const i=a.get(o);if(i){const c=e.getIntegrityForCacheKey(i);return{cacheKey:i,integrity:c}}}};super(n,e.strategy)}}function ge(r){const e=j(),t=new pe(e,r);ue(t)}const me="-precache-",Ie=(r,...e)=>l(this,[r,...e],function*(t,n=me){const s=(yield self.caches.keys()).filter(a=>a.includes(n)&&a.includes(self.registration.scope)&&a!==t);return yield Promise.all(s.map(a=>self.caches.delete(a))),s});function De(){self.addEventListener("activate",r=>{const e=cacheNames.getPrecacheName();r.waitUntil(deleteOutdatedCaches(e).then(t=>{}))})}function Fe(r){return getOrCreatePrecacheController().createHandlerBoundToURL(r)}function Be(r){return getOrCreatePrecacheController().getCacheKeyForURL(r)}function Je(r){return getOrCreatePrecacheController().matchPrecache(r)}function ye(r){j().precache(r)}function we(r,e){ye(r),ge(e)}class Ve{constructor({fallbackURL:e,precacheController:t}){this.handlerDidError=()=>this._precacheController.matchPrecache(this._fallbackURL),this._fallbackURL=e,this._precacheController=t||getOrCreatePrecacheController()}}var ve={navTheme:"light",primaryColor:"#1890ff",title:"Steam++",pwa:!0,version:"2.7.2.0",url:"https://steampp.net/",apiUrl:"https://api.steampp.net/",logo:"/logo.svg"},I=ve,be={version:"0.0.0.0_bate1_dev_04_17"},Re=["./favicon.ico","./default.css?v=2021_11_23","./theme/dark.css?v=".concat(be.version),"./js/compatibilitytesting.min.js?v=tF7FuRPbIURrhzHmz9_uk2m7A2DlnHv3ruKUJIPgNkg"];we([{'revision':null,'url':'/antd.4c1ad1bd.async.js'},{'revision':null,'url':'/antd.7f650cec.chunk.css'},{'revision':'9f692bd3cb4cb22b1bc88420bea8310c','url':'/api.json'},{'revision':null,'url':'/app.c58a0d62.css'},{'revision':null,'url':'/app.ef125a8b.js'},{'revision':null,'url':'/async-commons.84614670.async.js'},{'revision':'c424215d82b4f0c982098ee2bb26a332','url':'/avatar/GitHub-Mark-120px-dark-plus.png'},{'revision':'74467a218626f60863e4746a6823ebb0','url':'/avatar/GitHub-Mark-120px-plus.png'},{'revision':'9b1d856095c6ec65cae77e953eb1972e','url':'/avatar/cliencer.jpg'},{'revision':'3f795a9f82b7fae182ddc2fbb74288fe','url':'/avatar/cliencer.webp'},{'revision':'51b5ee5f07769ab4fca59db27e7bf4aa','url':'/avatar/logo.png'},{'revision':'69b23a84e44aa1193657684401d874e7','url':'/avatar/qq.png'},{'revision':'d8f4a0f42fea028d9e047c41dad715bd','url':'/avatar/rmbplayer.jpg'},{'revision':'9982e2572afeb10785d9c5fad2253296','url':'/avatar/rmbplayer.webp'},{'revision':'8b9ef5baaa3c12e3e39a465753c0dce2','url':'/avatar/steam.png'},{'revision':null,'url':'/default.31669740.async.js'},{'revision':null,'url':'/default.89f1cae8.chunk.css'},{'revision':'433318127c4cca355b1a817ec5f16437','url':'/default.css'},{'revision':'c79c831c9eb28bf198868a53f91d50f2','url':'/dome/js.png'},{'revision':'31011c476488d9f31b3d3171badae59c','url':'/dome/kc.png'},{'revision':'0dcb82d073776c448d91f6512575b1e5','url':'/dome/lp.png'},{'revision':'3de4264e2e98ed2482687c54185bfb4b','url':'/dome/speed.png'},{'revision':'5d980e8ab249f067b88a422c1ad35fe5','url':'/faq.json'},{'revision':'edeade942e28caa07f0413ad46d3246f','url':'/gameplatform/Battle.net.png'},{'revision':'c74cf00e2a6b34540eaf17dd9b50a610','url':'/gameplatform/battle-net.png'},{'revision':'5c51cfaf9b8ffdc475182dc799569723','url':'/gameplatform/battle-net.svg'},{'revision':'ade9eb23c75413544118e3c3a375db7c','url':'/gameplatform/epic.svg'},{'revision':'7aa168dcdd6eec5a88e13b1e22ff553a','url':'/gameplatform/epic_Black.png'},{'revision':'f60f99e7928dbdd8a17612adf3f17789','url':'/gameplatform/epic_Wite.png'},{'revision':'1606a9357e1850900ed2301b31f74052','url':'/gameplatform/gog.png'},{'revision':'e736bf36e129fec8999dde99cbae600e','url':'/gameplatform/google-play-badge.png'},{'revision':'76a7ea30a618941b8f14ef0330b08233','url':'/gameplatform/origin.png'},{'revision':'2a8d52a0d5f366f6d1d07a58b8fb2075','url':'/gameplatform/origin.svg'},{'revision':'5a82fd1733b0005b95e2f1b24c1a64f0','url':'/gameplatform/steam.png'},{'revision':'6f4ffd97342d88d3c1bae6c96bf8b0d1','url':'/gameplatform/ubisoft.png'},{'revision':'8a2b3e5feb53476edac1f87c3b759e1b','url':'/gameplatform/ubisoft.svg'},{'revision':'9d399c12bcd792610be9edea2adb8c6a','url':'/gameplatform/xbox.png'},{'revision':'c0c27e7bd377c00a259e654b28f8a36b','url':'/gameplatform/xbox.svg'},{'revision':'b762ad74eb923546c0a7c74810a0f29c','url':'/icons.png'},{'revision':'ea0522b2fed5fefdfe7a2b0af1b0f98e','url':'/icons/icon-128x128.png'},{'revision':'7fff9f274a160b6930bc918444f03c86','url':'/icons/icon-192x192.png'},{'revision':'4aac00c49c85c08a0fd6490c755bbc65','url':'/icons/icon-512x512.png'},{'revision':'770f6cc245c041e8ffa8ca6f0ec3cc92','url':'/js/compatibilitytesting.min.js'},{'revision':'cdf4378add639df6e42d0a1fc040f59d','url':'/js/modernizr-LoginDetection-210815.js'},{'revision':'4e09ebb95f21a9c1958a263d4f29c6fb','url':'/js/modernizr.js'},{'revision':'f3bf0cf83f570bdb0dad870a257ea336','url':'/login.html'},{'revision':'d468aa1cddd8ba386a8bf174b50e98ba','url':'/logo.png'},{'revision':'e7bf61eb8aa1870aacba736aec116722','url':'/logo.svg'},{'revision':'a2468ad9e0a835a1e8b4ae09b0a064b5','url':'/manifest.json'},{'revision':'ae7ea4905994216b5eda2969d9776827','url':'/pro_icon.svg'},{'revision':'1b65926236d951b2af57201b275f595b','url':'/static/app_store.e250c68b.svg'},{'revision':'6b78dfd7649944fba02f93bf6e79495a','url':'/static/bilibili.f7814360.svg'},{'revision':'8b156f1bbc77f3454ec345497b9a78fc','url':'/static/dark.cbeb2350.svg'},{'revision':'557092c090aff8468846783c4a56f59c','url':'/static/github.36ba035f.svg'},{'revision':'5e9a01998ff5d45f1fef213ac17fb904','url':'/static/light.2e3c5cf9.svg'},{'revision':'e3d574461fe5775ea197cc678d917011','url':'/static/linux.96eaaef7.svg'},{'revision':'5b32f03728737efd11da71af7dbce36b','url':'/static/mac.aaaa06a2.svg'},{'revision':'3f666dec88527004bbe05e9b45d0ada9','url':'/static/microsoft_Store.f793de5e.svg'},{'revision':'db0eef4d832b7cc0f8dedbb1ce86d53d','url':'/static/qq.7a9665da.svg'},{'revision':'f35d6ced009570c15536820403723d48','url':'/static/qq_white.c701325a.svg'},{'revision':'9ee4a54a5344bac8aaad48df0036da30','url':'/static/security.db5ab397.svg'},{'revision':'c83d6b31fbe3a456e60359cc2feab85a','url':'/static/shop.aff33a3c.svg'},{'revision':'df4760feeb5208c9c28315e1264efa0a','url':'/static/speed.1b5c1068.svg'},{'revision':'937e08b027a7b5a484a7ad3e5419cbce','url':'/static/stock.e965e634.svg'},{'revision':'b63edc1df93e3f3d6ae80a43de25d40c','url':'/static/windows.d315939a.svg'},{'revision':'b26ce78384482b5fbedba23cccd74ab6','url':'/svg/login/apple.svg'},{'revision':'d1b4e697dc17cc4c2d4731be007124ad','url':'/svg/login/phone.svg'},{'revision':'f0222e30a4145eed2fb8e298130312eb','url':'/svg/login/qq.svg'},{'revision':'e49ea18a4574447a828cb294e30b11c1','url':'/svg/login/steam.svg'},{'revision':'5eb6f8bdda734a7cb03e722b62f65f53','url':'/svg/login/xbox.svg'},{'revision':'370afb2d3a5ccbd5846f1ff98b1391ee','url':'/theme/dark.css'},{'revision':null,'url':'/vendors.c937300f.async.js'}]);var _e=I.url,Ce=[...Re.map(r=>"".concat(_e).concat(r)),"./","https://gw.alipayobjects.com/os/lib/react/17.0.2/umd/react.production.min.js","https://gw.alipayobjects.com/os/lib/react-dom/17.0.2/umd/react-dom.production.min.js"];self.addEventListener("install",r=>{r.waitUntil(caches.open(L).then(e=>{e.addAll(Ce.map(t=>new Request(t))).then(()=>{})}))});var L="dev-v0.".concat(I.version,"_01_bate");self.addEventListener("activate",r=>{r.waitUntil(caches.keys().then(e=>Promise.all([self.clients.claim(),e.map(t=>{if(new RegExp("^dev.*").test(t)&&t!==L)return caches.delete(t)})])))});var $e=[new RegExp("^chrome-extension")],xe=r=>$e.some(e=>!e.test(r)),Ne=r=>r.status>=200&&r.status<400;self.addEventListener("fetch",r=>{r.respondWith(caches.match(r.request).then(function(){var e=f(function*(t){if(t&&Ne(t))return t;if(self.navigator.onLine&&xe(r.request.url))return fetch(r.request).then(s=>caches.open(L).then(function(){var a=f(function*(o){var i=s.clone();return o.put(r.request,i),s});return function(o){return a.apply(this,arguments)}}())).catch(s=>{console.log("Fetch failed",r.request.url,s)});if(r.request.destination=="document"&&r.request.method=="GET"){if(self.navigator.onLine)return fetch(r.request).then(s=>caches.open(L).then(function(){var a=f(function*(o){var i=s.clone();return o.put(r.request,i),s});return function(o){return a.apply(this,arguments)}}()));if(t==null){var n=yield caches.match(new Request("./")).then(s=>s);if(n)return n}}return fetch(r.request)});return function(t){return e.apply(this,arguments)}}()))}),self.addEventListener("message",function(){var r=f(function*(e){switch(e.data){case"skipWaiting":self.skipWaiting();break;case"offline":break;default:}});return function(e){return r.apply(this,arguments)}}())})()})();
