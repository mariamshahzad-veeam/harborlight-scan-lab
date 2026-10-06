/* static cookies, Analytics only (one script = one category, so auto-blocking can treat them separately) */
(function () {
  var year = 'max-age=31536000; path=/; SameSite=Lax';
  var jar = { _ga: 'GA1.1.2038475610.1759700000', _gid: 'GA1.1.774201938.1759700000' };
  Object.keys(jar).forEach(function (k) { document.cookie = k + '=' + jar[k] + '; ' + year; });
})();
