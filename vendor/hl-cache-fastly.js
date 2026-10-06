/* third-party script: creates one Cache Storage cache */
(function () { caches.open('tp_cache_fastly').then(function (c) { return c.put('/tp.json', new Response('{}')); }); })();
