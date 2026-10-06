HL.idb('s_idb_page');
HL.cache('s_cache_page');
try { new Worker('js/worker.js'); } catch (e) {}
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');
document.getElementById('go').addEventListener('click', function () {
  HL.idb('s_idb_click');
  HL.cache('s_cache_click');
});
