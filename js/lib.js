/* helpers: each call creates one named IndexedDB database or one named cache */
window.HL = {
  idb: function (name, store) {
    store = store || 'items';
    var r = indexedDB.open(name, 1);
    r.onupgradeneeded = function () { r.result.createObjectStore(store, { autoIncrement: true }); };
    r.onsuccess = function () {
      try { r.result.transaction(store, 'readwrite').objectStore(store).add({ t: Date.now() }); } catch (e) {}
    };
  },
  cache: function (name) {
    if ('caches' in window) caches.open(name).then(function (c) { return c.put('/hl.json', new Response('{"hl":1}')); });
  },
  at: function (ms, fn) { if (ms === 0) fn(); else setTimeout(fn, ms); }
};
