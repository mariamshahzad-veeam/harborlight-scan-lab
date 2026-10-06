/* fastly host: OfflineAudioContext only */
(function () {
  var A = window.OfflineAudioContext || window.webkitOfflineAudioContext; if (!A) return;
  var ctx = new A(1, 44100, 44100), o = ctx.createOscillator(), k = ctx.createDynamicsCompressor();
  o.type = 'triangle'; o.frequency.value = 10000; o.connect(k); k.connect(ctx.destination); o.start(0); ctx.startRendering();
})();
