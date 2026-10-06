/* static cookies, the site's own preference cookies only (one script = one category, so auto-blocking can treat them separately) */
(function () {
  var year = 'max-age=31536000; path=/; SameSite=Lax';
  var jar = { hl_theme: 'dark', hl_lang: 'en-GB', hl_cart_hint: 'empty' };
  Object.keys(jar).forEach(function (k) { document.cookie = k + '=' + jar[k] + '; ' + year; });
})();
