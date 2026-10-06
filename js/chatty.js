var n = 0, t = setInterval(function () { fetch('ping.txt?n=' + (n++), { cache: 'no-store' }); if (n > 400) clearInterval(t); }, 100);
[10000, 25000, 35000].forEach(function (d) { setTimeout(function () { HL.idb('ch_idb_' + d); HL.cache('ch_cache_' + d); }, d); });
