/* Console logger for browser fingerprinting calls (manual testing aid).
   ACTIVE ONLY when the page is opened with ?fplog (for example index.html?fplog=1); the tab then stays in log mode while you navigate.
   Without ?fplog it does nothing at all, so it never shows up in scanner call stacks.
   Each fingerprint API is logged the first time a script calls it; totals are in window.__fpLogCounts. */
(function () {
  if (!/[?&]fplog(=|&|$)/.test(location.search) && window.name !== 'hl_fplog') return;
  window.name = 'hl_fplog';
  var counts = window.__fpLogCounts = {}, seen = {};
  function caller() {
    var m = (new Error().stack || '').match(/https?:\/\/[^\s)]+?:\d+:\d+/g) || [];
    for (var i = 0; i < m.length; i++) { if (m[i].indexOf('hl-fp-log') === -1) return m[i]; }
    return '(inline / unknown)';
  }
  function log(api) {
    var by = caller(), k = api + ' | ' + by;
    counts[k] = (counts[k] || 0) + 1;
    if (seen[k]) return;
    seen[k] = 1;
    console.log('%c[FINGERPRINT]', 'background:#c00;color:#fff;padding:1px 6px;border-radius:3px;font-weight:bold', api, '← ' + by);
  }
  function wrap(proto, name, api) {
    try { var o = proto[name]; if (typeof o !== 'function') return; proto[name] = function () { log(api); return o.apply(this, arguments); }; } catch (e) {}
  }
  function getter(proto, name, api) {
    try { var d = Object.getOwnPropertyDescriptor(proto, name); if (!d || !d.get) return; Object.defineProperty(proto, name, { configurable: true, enumerable: d.enumerable, get: function () { log(api); return d.get.call(this); } }); } catch (e) {}
  }
  /* canvas */
  wrap(HTMLCanvasElement.prototype, 'toDataURL', 'canvas.toDataURL');
  wrap(HTMLCanvasElement.prototype, 'toBlob', 'canvas.toBlob');
  if (window.CanvasRenderingContext2D) wrap(CanvasRenderingContext2D.prototype, 'getImageData', 'canvas.getImageData');
  /* WebGL */
  var gc = HTMLCanvasElement.prototype.getContext;
  HTMLCanvasElement.prototype.getContext = function (t) { if (/webgl/i.test(String(t))) log('webgl.getContext'); return gc.apply(this, arguments); };
  ['WebGLRenderingContext', 'WebGL2RenderingContext'].forEach(function (n) {
    if (!window[n]) return;
    wrap(window[n].prototype, 'getParameter', 'webgl.getParameter');
    wrap(window[n].prototype, 'getExtension', 'webgl.getExtension');
    wrap(window[n].prototype, 'getSupportedExtensions', 'webgl.getSupportedExtensions');
  });
  /* audio */
  if (window.BaseAudioContext) { wrap(BaseAudioContext.prototype, 'createOscillator', 'audio.createOscillator'); wrap(BaseAudioContext.prototype, 'createDynamicsCompressor', 'audio.createDynamicsCompressor'); }
  if (window.OfflineAudioContext) wrap(OfflineAudioContext.prototype, 'startRendering', 'audio.startRendering');
  /* fonts and battery */
  if (window.FontFaceSet) wrap(FontFaceSet.prototype, 'check', 'fonts.check');
  wrap(Navigator.prototype, 'getBattery', 'battery.getBattery');
  /* hardware and screen */
  ['hardwareConcurrency', 'deviceMemory', 'platform', 'languages', 'maxTouchPoints'].forEach(function (n) { getter(Navigator.prototype, n, 'navigator.' + n); });
  ['width', 'height', 'availWidth', 'availHeight', 'colorDepth', 'pixelDepth'].forEach(function (n) { getter(Screen.prototype, n, 'screen.' + n); });
  console.log('%c[FINGERPRINT LOGGER ON]', 'background:#0a6;color:#fff;padding:1px 6px;border-radius:3px;font-weight:bold', 'logging fingerprint API calls on this tab (opened with ?fplog)');
})();
