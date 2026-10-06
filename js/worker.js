/* worker: storage and fingerprint reads happen here */
var r = indexedDB.open('s_idb_worker', 1);
r.onupgradeneeded = function () { r.result.createObjectStore('items', { autoIncrement: true }); };
r.onsuccess = function () { r.result.transaction('items', 'readwrite').objectStore('items').add({ t: Date.now() }); };
caches.open('s_cache_worker').then(function (c) { return c.put('/hl.json', new Response('{}')); });
var h = [self.navigator.hardwareConcurrency, self.navigator.deviceMemory, self.navigator.platform];
try { var oc = new OffscreenCanvas(100, 30), x = oc.getContext('2d'); x.fillText('worker probe', 2, 18); oc.convertToBlob(); } catch (e) {}
