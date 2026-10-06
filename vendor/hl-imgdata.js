/* testingcf host: canvas getImageData only (no toDataURL on this host) */
(function () {
  var c = document.createElement('canvas'); c.width = 120; c.height = 30;
  var x = c.getContext('2d'); x.fillStyle = '#396'; x.fillRect(0, 0, 60, 30); x.fillText('imgdata probe', 2, 18);
  x.getImageData(0, 0, 120, 30);
})();
