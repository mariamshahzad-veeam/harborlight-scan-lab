/* third party, Cache Storage only (one script = one category) */
(function () { caches.open('tp_cache_gcore').then(function (c) { return c.put('/tp.json', new Response('{}')); }); })();
