/* third-party script: sends one image beacon (1x1 tracking pixel) */
(function () { var i = new Image(1, 1); i.src = 'https://analytics.twitter.com/i/adsct?txn_id=o0000&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0'; })();
console.log('%c[DROP]', 'background:#06c;color:#fff;padding:1px 6px;border-radius:3px;font-weight:bold', 'image beacon', 'analytics.twitter.com/i/adsct', '\u2190 hl-beacon-twitter.js');
