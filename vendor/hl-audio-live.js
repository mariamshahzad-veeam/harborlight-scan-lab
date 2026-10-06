/* quantil host: live AudioContext only */
(function () {
  var A = window.AudioContext || window.webkitAudioContext; if (!A) return;
  var ctx = new A(), o = ctx.createOscillator(), k = ctx.createDynamicsCompressor();
  o.type = 'triangle'; o.connect(k); k.connect(ctx.destination); o.start(0);
  setTimeout(function () { try { o.stop(); ctx.close(); } catch (e) {} }, 300);
})();
