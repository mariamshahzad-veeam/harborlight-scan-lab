var SCOPE = self.registration.scope;
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open('s_cache_sw_precache').then(function (c) { return c.addAll(['style.css']); }));
  self.skipWaiting();
});
self.addEventListener('activate', function (e) {
  e.waitUntil(self.clients.claim());
  var r = indexedDB.open('s_idb_sw', 1);
  r.onupgradeneeded = function () { r.result.createObjectStore('items'); };
});
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET' || e.request.url.indexOf(SCOPE) !== 0) return;
  e.respondWith(fetch(e.request).then(function (res) {
    var cp = res.clone(); caches.open('s_cache_sw_runtime').then(function (c) { c.put(e.request, cp); }); return res;
  }));
});
