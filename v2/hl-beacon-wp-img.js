/* third-party script: adds one 1x1 tracking <img> to the page (image beacon) */
(function () {
  function add() {
    var i = document.createElement('img');
    i.width = 1; i.height = 1; i.alt = ''; i.style.cssText = 'position:absolute;left:-9999px';
    i.src = 'https://pixel.wp.com/g.gif?v=ext&blog=0&post=0&rand=1';
    (document.body || document.documentElement).appendChild(i);
    console.log('%c[DROP]', 'background:#06c;color:#fff;padding:1px 6px;border-radius:3px;font-weight:bold', 'image beacon', 'pixel.wp.com/g.gif', '\u2190 hl-beacon-wp-img.js');
  }
  if (document.body) add(); else document.addEventListener('DOMContentLoaded', add);
})();
