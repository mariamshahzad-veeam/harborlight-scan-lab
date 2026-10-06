var s = document.getElementById('spark').getContext('2d');
s.strokeStyle = '#246'; s.beginPath(); s.moveTo(0, 40); [30, 34, 22, 26, 12, 18, 8].forEach(function (y, i) { s.lineTo((i + 1) * 34, y); }); s.stroke();
var m = document.createElement('canvas').getContext('2d'); m.font = '20px Georgia'; m.measureText('Harborlight');
try { localStorage.setItem('hl_pref', '1'); sessionStorage.setItem('hl_tmp', '1'); } catch (e) {}
HL.idb('c_idb_load');
HL.cache('c_cache_load');
