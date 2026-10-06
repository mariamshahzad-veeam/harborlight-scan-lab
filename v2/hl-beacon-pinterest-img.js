/* third-party script: adds one 1x1 tracking <img> to the page (image beacon) */
(function () {
  function add() {
    var i = document.createElement('img');
    i.width = 1; i.height = 1; i.alt = ''; i.style.cssText = 'position:absolute;left:-9999px';
    i.src = 'https://ct.pinterest.com/v3/?tid=2612345678901&event=init&noscript=1';
    (document.body || document.documentElement).appendChild(i);
    console.log('%c[DROP]', 'background:#06c;color:#fff;padding:1px 6px;border-radius:3px;font-weight:bold', 'image beacon', 'ct.pinterest.com/v3', '\u2190 hl-beacon-pinterest-img.js');
  }
  if (document.body) add(); else document.addEventListener('DOMContentLoaded', add);
})();
