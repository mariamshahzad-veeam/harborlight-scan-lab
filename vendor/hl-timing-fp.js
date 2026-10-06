/* gcore host: one technique per delay, each name used once on this host */
(function () {
  var w = window, d = document;
  function at(ms, fn) { if (ms === 0) fn(); else setTimeout(fn, ms); }
  at(0, function () { [screen.width, screen.height, screen.colorDepth, w.devicePixelRatio]; });
  at(500, function () { [navigator.hardwareConcurrency, navigator.deviceMemory, navigator.platform]; });
  at(800, function () {
    var c = d.createElement('canvas'); c.width = 200; c.height = 30;
    var x = c.getContext('2d'); x.fillText('timing probe', 4, 20); c.toDataURL();
  });
  at(1000, function () { if (navigator.getBattery) navigator.getBattery(); });
  at(2000, function () {
    ['Arial', 'Verdana', 'Helvetica', 'Tahoma', 'Georgia', 'Impact', 'Menlo', 'Calibri', 'Cambria', 'Futura', 'Optima', 'Geneva'].forEach(function (n) { d.fonts.check('12px "' + n + '"'); });
  });
  at(3000, function () {
    var g = d.createElement('canvas').getContext('webgl'); if (!g) return;
    var e = g.getExtension('WEBGL_debug_renderer_info'); if (e) { g.getParameter(e.UNMASKED_VENDOR_WEBGL); g.getParameter(e.UNMASKED_RENDERER_WEBGL); }
    g.getParameter(g.MAX_TEXTURE_SIZE); g.getSupportedExtensions();
  });
  at(5000, function () {
    var A = w.OfflineAudioContext || w.webkitOfflineAudioContext; if (!A) return;
    var ctx = new A(1, 44100, 44100), o = ctx.createOscillator(), k = ctx.createDynamicsCompressor();
    o.type = 'triangle'; o.connect(k); k.connect(ctx.destination); o.start(0); ctx.startRendering();
  });
})();
