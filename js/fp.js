/* one function per fingerprinting technique; plain, direct API calls */
window.FP = {
  canvasReadback: function (doc) {
    var c = (doc || document).createElement('canvas'); c.width = 240; c.height = 40;
    var x = c.getContext('2d'); x.font = '15px Arial'; x.fillStyle = '#e60'; x.fillRect(8, 4, 70, 20);
    x.fillStyle = '#06a'; x.fillText('Harborlight canvas probe', 4, 26);
    return c.toDataURL().length;
  },
  getImageData: function () {
    var c = document.createElement('canvas'); c.width = 120; c.height = 30;
    var x = c.getContext('2d'); x.fillStyle = '#396'; x.fillRect(0, 0, 60, 30); x.fillText('imgdata probe', 2, 18);
    return x.getImageData(0, 0, 120, 30).data.length;
  },
  screenRead: function () { return [screen.width, screen.height, screen.colorDepth, window.devicePixelRatio, screen.availWidth]; },
  hardwareRead: function () { return [navigator.hardwareConcurrency, navigator.deviceMemory, navigator.platform]; },
  webgl: function (doc) {
    var c = (doc || document).createElement('canvas'), g = c.getContext('webgl');
    if (!g) return null;
    var e = g.getExtension('WEBGL_debug_renderer_info');
    return [e ? g.getParameter(e.UNMASKED_VENDOR_WEBGL) : '', e ? g.getParameter(e.UNMASKED_RENDERER_WEBGL) : '', g.getParameter(g.MAX_TEXTURE_SIZE), g.getSupportedExtensions().length];
  },
  fonts: function () {
    var list = ['Arial', 'Verdana', 'Helvetica', 'Tahoma', 'Georgia', 'Times New Roman', 'Courier New', 'Impact', 'Comic Sans MS',
      'Palatino', 'Garamond', 'Bookman', 'Menlo', 'Monaco', 'Consolas', 'Calibri', 'Cambria', 'Candara', 'Segoe UI', 'Optima',
      'Futura', 'Gill Sans', 'Lucida Grande', 'Geneva', 'Baskerville', 'Didot', 'Hoefler Text', 'Rockwell', 'Trebuchet MS', 'Avenir'];
    return list.filter(function (n) { return document.fonts.check('12px "' + n + '"'); });
  },
  battery: function () { if (navigator.getBattery) return navigator.getBattery().then(function (b) { return [b.charging, b.level]; }); },
  audioLive: function () {
    var A = window.AudioContext || window.webkitAudioContext; if (!A) return;
    var ctx = new A(), o = ctx.createOscillator(), k = ctx.createDynamicsCompressor();
    o.type = 'triangle'; o.connect(k); k.connect(ctx.destination); o.start(0); setTimeout(function () { try { o.stop(); ctx.close(); } catch (e) {} }, 300);
  },
  audioOffline: function () {
    var A = window.OfflineAudioContext || window.webkitOfflineAudioContext; if (!A) return;
    var ctx = new A(1, 44100, 44100), o = ctx.createOscillator(), k = ctx.createDynamicsCompressor();
    o.type = 'triangle'; o.frequency.value = 10000; o.connect(k); k.connect(ctx.destination); o.start(0); ctx.startRendering();
  }
};
