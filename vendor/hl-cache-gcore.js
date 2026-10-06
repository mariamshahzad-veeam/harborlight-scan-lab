/* third-party script: creates one Cache Storage cache */
(function () { caches.open('tp_cache_gcore').then(function (c) { return c.put('/tp.json', new Response('{}')); }); })();
