/* third-party script: sends one image beacon (1x1 tracking pixel) */
(function () { var i = new Image(1, 1); i.src = 'https://ct.pinterest.com/v3/?tid=2612345678901&event=init&noscript=1'; })();
console.log('%c[DROP]', 'background:#06c;color:#fff;padding:1px 6px;border-radius:3px;font-weight:bold', 'image beacon', 'ct.pinterest.com/v3', '\u2190 hl-beacon-pinterest.js');
