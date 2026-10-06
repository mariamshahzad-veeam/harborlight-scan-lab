/* third party: IndexedDB tp_idb_gcore / store items */
(function () {
  var r = indexedDB.open('tp_idb_gcore', 1);
  r.onupgradeneeded = function () { r.result.createObjectStore('items', { autoIncrement: true }); };
  r.onsuccess = function () { r.result.transaction('items', 'readwrite').objectStore('items').add({ t: Date.now() }); };
})();
console.log('%c[DROP]', 'background:#06c;color:#fff;padding:1px 6px;border-radius:3px;font-weight:bold', 'IndexedDB', 'tp_idb_gcore', '\u2190 hl-idb-static.js');
