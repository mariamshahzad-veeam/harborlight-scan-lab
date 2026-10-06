/* third party: loads the real idb-keyval (DB keyval-store / store keyval), then uses it */
(function () {
  var s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/npm/idb-keyval@6.2.1/dist/umd.js';
  s.onload = function () { idbKeyval.set('hl_key', 'hl_value'); };
  document.head.appendChild(s);
})();
