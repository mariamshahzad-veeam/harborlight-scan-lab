/* third party: loads the real idb-keyval (DB keyval-store / store keyval), then waits for it and uses it (does not rely on onload, because auto-blocking can replace the script element) */
(function () {
  var s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/npm/idb-keyval@6.2.1/dist/umd.js';
  document.head.appendChild(s);
  var tries = 0, t = setInterval(function () {
    if (window.idbKeyval) { clearInterval(t); idbKeyval.set('hl_key', 'hl_value'); console.log('%c[DROP]', 'background:#06c;color:#fff;padding:1px 6px;border-radius:3px;font-weight:bold', 'IndexedDB', 'keyval-store', '\u2190 hl-idb-keyval-poll.js'); }
    else if (++tries > 100) clearInterval(t);
  }, 200);
})();
