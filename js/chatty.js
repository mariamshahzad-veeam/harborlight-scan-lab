/* keep 4 requests really open for 45 seconds: each waits 10 s on a public delay endpoint, then is replaced */
var started = Date.now(), pending = 0, n = 0;
function hold() {
  pending++;
  fetch('https://httpbin.org/delay/10?n=' + (n++), { mode: 'no-cors', cache: 'no-store' })
    .catch(function () {}).then(function () { pending--; });
}
var iv = setInterval(function () {
  if (Date.now() - started > 45000) { clearInterval(iv); return; }
  while (pending < 4) hold();
}, 500);
[10000, 25000, 35000].forEach(function (d) { setTimeout(function () { HL.idb('ch_idb_' + d); HL.cache('ch_cache_' + d); }, d); });
