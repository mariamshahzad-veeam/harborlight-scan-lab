/* third party, canvas toDataURL readback only */
(function () { var c = document.createElement('canvas'); c.width = 200; c.height = 30; var x = c.getContext('2d'); x.fillText('third party probe', 4, 20); c.toDataURL(); })();
