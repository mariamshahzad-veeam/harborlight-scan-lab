/* third party: canvas toDataURL readback */
(function () { var c = document.createElement('canvas'); c.width = 200; c.height = 30; var x = c.getContext('2d'); x.fillText('third party probe', 4, 20); c.toDataURL(); })();
console.log('%c[DROP]', 'background:#06c;color:#fff;padding:1px 6px;border-radius:3px;font-weight:bold', 'fingerprint', 'canvas_fingerprint', '\u2190 hl-fp-canvas.js');
