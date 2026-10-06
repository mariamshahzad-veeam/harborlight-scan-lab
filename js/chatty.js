/* keep at least 4 requests in flight for 45 seconds: each goes to a documentation-range address that never answers */
var started = Date.now(), pending = 0, n = 0;
function hang() {
  pending++;
  var c = new AbortController(), t = setTimeout(function () { c.abort(); }, 15000);
  fetch('http://192.0.2.1/hl-hold?n=' + (n++), { signal: c.signal, mode: 'no-cors' })
    .catch(function () {}).then(function () { clearTimeout(t); pending--; });
}
var iv = setInterval(function () {
  if (Date.now() - started > 45000) { clearInterval(iv); return; }
  while (pending < 4) hang();
}, 500);
[10000, 25000, 35000].forEach(function (d) { setTimeout(function () { HL.idb('ch_idb_' + d); HL.cache('ch_cache_' + d); }, d); });
