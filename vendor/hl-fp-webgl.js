/* third party: WebGL renderer info */
(function () { var g = document.createElement('canvas').getContext('webgl'); if (!g) return; var e = g.getExtension('WEBGL_debug_renderer_info'); if (e) { g.getParameter(e.UNMASKED_VENDOR_WEBGL); g.getParameter(e.UNMASKED_RENDERER_WEBGL); } g.getParameter(g.MAX_TEXTURE_SIZE); })();
