(function () {
  var r = indexedDB.open('tp_idb_cdn', 1);
  r.onupgradeneeded = function () { r.result.createObjectStore('items', { autoIncrement: true }); };
  r.onsuccess = function () { r.result.transaction('items', 'readwrite').objectStore('items').add({ t: Date.now() }); };
  caches.open('tp_cache_cdn').then(function (c) { return c.put('/tp.json', new Response('{}')); });
  var c = document.createElement('canvas'); c.width = 200; c.height = 30;
  var x = c.getContext('2d'); x.fillText('third party probe', 4, 20); c.toDataURL();
  [screen.width, screen.height]; [navigator.hardwareConcurrency];
})();
