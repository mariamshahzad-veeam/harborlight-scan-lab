/* third party: loads the real localforage (DB localforage / store keyvaluepairs), then waits for it and uses it (does not rely on onload, because auto-blocking can replace the script element) */
(function () {
  var s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/npm/localforage@1.10.0/dist/localforage.min.js';
  document.head.appendChild(s);
  var tries = 0, t = setInterval(function () {
    if (window.localforage) { clearInterval(t); localforage.setItem('hl_key', 'hl_value'); }
    else if (++tries > 100) clearInterval(t);
  }, 200);
})();
