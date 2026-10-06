[0, 500, 1000, 2000, 3000, 5000, 8000, 12000, 20000].forEach(function (d) {
  HL.at(d, function () { HL.idb('t_idb_' + d); HL.cache('t_cache_' + d); });
});
/* fingerprint sweep: one technique per delay (each technique appears only on this page) */
HL.at(0, function () { FP.getImageData(); });
HL.at(500, function () { FP.battery(); });
HL.at(1000, function () { FP.webgl(); });
HL.at(2000, function () { FP.fonts(); });
HL.at(5000, function () { FP.audioOffline(); });
