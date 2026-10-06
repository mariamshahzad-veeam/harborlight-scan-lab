/* static third-party cookie (stand-in for Hotjar, which needs a real site id): Performance and Functionality */
(function () {
  var year = 'max-age=31536000; path=/; SameSite=Lax';
  var jar = { _hjSessionUser_2718281: 'eyJpZCI6IkhMLVFBLTAwMSJ9' };
  Object.keys(jar).forEach(function (k) { document.cookie = k + '=' + jar[k] + '; ' + year; });
})();
