[0, 500, 600, 700, 800, 900, 1000, 2000, 3000, 5000, 8000, 12000, 20000].forEach(function (d) {
  HL.at(d, function () { HL.idb('t_idb_' + d); HL.cache('t_cache_' + d); });
});
