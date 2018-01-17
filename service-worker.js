"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/kaka/index.html","f0ef9cfad365795a33c395953d44f3f5"],["/kaka/static/css/main.ff1fff5e.css","d3b0855ad2f5e8c04aaf07cd97ff16d4"],["/kaka/static/js/main.2b18ded8.js","4a3951fb9889bf4c2f82db9cce5b04fe"],["/kaka/static/media/1.a662faa8.png","a662faa83756eb771264cd32de7794ce"],["/kaka/static/media/13.3660b0d2.png","3660b0d2562abcd939b8a40571cf5ed4"],["/kaka/static/media/16.e4b40098.png","e4b40098c2e77aed2de08c8ba3d8dfaa"],["/kaka/static/media/17.790e2655.png","790e2655acba442a9af65971f5ba9e03"],["/kaka/static/media/18.4981d522.jpg","4981d522ad6d6fc77078ddd82a40d22f"],["/kaka/static/media/2.47c868b8.png","47c868b8e08ec7b347908768a55bef80"],["/kaka/static/media/23.80911504.jpg","80911504a1964ace48814cf6f8e476c3"],["/kaka/static/media/24.30d19fc2.jpg","30d19fc21d46b38b76c32cfe09c8da3d"],["/kaka/static/media/25.72c79633.jpg","72c796332c3709cef45ad0d30882b39d"],["/kaka/static/media/29.7d506bb6.svg","7d506bb61506a747f81ed16107fcae50"],["/kaka/static/media/3.d1c63cd2.png","d1c63cd27f7272e8e85943a80e9989fb"],["/kaka/static/media/31.14216d47.svg","14216d478a08541cc10667b6b0d82ddf"],["/kaka/static/media/32.9c913b7e.svg","9c913b7eef50ca1e45c2beaa6f6004cd"],["/kaka/static/media/33.11962c5c.svg","11962c5c49fa198732e3d0a1016ec260"],["/kaka/static/media/34.69fe0cb1.svg","69fe0cb14c35f8a2a6c6045a0c67aae9"],["/kaka/static/media/35.5e555480.png","5e5554806ed3002400b087fa550197da"],["/kaka/static/media/36.f75c6224.svg","f75c62248cb57f4d7b3014ddd587203a"],["/kaka/static/media/37.b01290a7.svg","b01290a7b90087bc7ac57ede82aff2df"],["/kaka/static/media/38.24b1c086.svg","24b1c086ecbde5b6205fae107611e1c1"],["/kaka/static/media/39.aee6afad.svg","aee6afad8c7d5ea383df4251a564b5e8"],["/kaka/static/media/4.5e245f45.png","5e245f45f065f47138bc531428f3f1e1"],["/kaka/static/media/40.051f7464.jpg","051f74647a3f31b8800bed3dd53f8093"],["/kaka/static/media/41.1e1453fb.png","1e1453fb68819abae29a31a3cf1ff9c0"],["/kaka/static/media/43.4230f42e.png","4230f42e2b9ed9d13ff742fbfbe2cc7e"],["/kaka/static/media/45.54f34ffd.png","54f34ffdd8f9a73b48c61c4f75e44f4a"],["/kaka/static/media/5.1546e571.png","1546e571b06bf145c6a35582c1bd1897"],["/kaka/static/media/67.71f3c184.png","71f3c1846f8bc108422c971c458d9250"],["/kaka/static/media/69.0159c0e2.jpg","0159c0e2a876a60891de7896083f159f"],["/kaka/static/media/70.8ca4a380.jpg","8ca4a380864254975b53b21eeff01001"],["/kaka/static/media/73.0cd2e8a4.png","0cd2e8a4b5cd0ce4f53ac9115a92f727"],["/kaka/static/media/banner1.16edb577.jpg","16edb5771c44f2e4f4f069ec7eb5d3d8"],["/kaka/static/media/banner2.0f74b0d4.jpg","0f74b0d435f036bd3f358bc9679fb0f6"],["/kaka/static/media/banner3.7b4f5456.png","7b4f545645dd6108f63159fbf0c5c20d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var n="/kaka/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});