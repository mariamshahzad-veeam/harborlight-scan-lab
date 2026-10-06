/* third party: WebGL renderer info */
(function () { var g = document.createElement('canvas').getContext('webgl'); if (!g) return; var e = g.getExtension('WEBGL_debug_renderer_info'); if (e) { g.getParameter(e.UNMASKED_VENDOR_WEBGL); g.getParameter(e.UNMASKED_RENDERER_WEBGL); } g.getParameter(g.MAX_TEXTURE_SIZE); })();
console.log('%c[DROP]', 'background:#06c;color:#fff;padding:1px 6px;border-radius:3px;font-weight:bold', 'fingerprint', 'webgl_fingerprint', '\u2190 hl-fp-webgl.js');
