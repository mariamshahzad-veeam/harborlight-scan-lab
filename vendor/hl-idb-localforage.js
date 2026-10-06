/* third party: loads the real localforage (DB localforage / store keyvaluepairs), then uses it */
(function () {
  var s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/npm/localforage@1.10.0/dist/localforage.min.js';
  s.onload = function () { localforage.setItem('hl_key', 'hl_value'); };
  document.head.appendChild(s);
})();
