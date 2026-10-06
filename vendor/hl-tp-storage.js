/* third-party script, storage only (IndexedDB + Cache Storage): one script = one category */
(function () {
  var r = indexedDB.open('tp_idb_cdn', 1);
  r.onupgradeneeded = function () { r.result.createObjectStore('items', { autoIncrement: true }); };
  r.onsuccess = function () { r.result.transaction('items', 'readwrite').objectStore('items').add({ t: Date.now() }); };
  caches.open('tp_cache_cdn').then(function (c) { return c.put('/tp.json', new Response('{}')); });
})();
