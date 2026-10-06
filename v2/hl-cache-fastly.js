/* third-party script: creates one Cache Storage cache */
(function () { caches.open('tp_cache_fastly').then(function (c) { return c.put('/tp.json', new Response('{}')); }); })();
console.log('%c[DROP]', 'background:#06c;color:#fff;padding:1px 6px;border-radius:3px;font-weight:bold', 'Cache Storage', 'tp_cache_fastly', '\u2190 hl-cache-fastly.js');
