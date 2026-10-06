/* third-party script: sends one image beacon (1x1 tracking pixel) */
(function () { var i = new Image(1, 1); i.src = 'https://www.google-analytics.com/collect?v=1&t=pageview&tid=UA-000000-1&cid=555&dp=%2F'; })();
console.log('%c[DROP]', 'background:#06c;color:#fff;padding:1px 6px;border-radius:3px;font-weight:bold', 'image beacon', 'google-analytics.com/collect', '\u2190 hl-beacon-ga.js');
