/*
 * Wspólne dla wszystkich stron (ładowane w <head>, zanim strona się narysuje):
 * motyw i wielkość tekstu wybrane w ustawieniach oraz praca offline (sw.js w katalogu głównym).
 */
(function () {
  try {
    var d = document.documentElement;
    var t = localStorage.getItem('fiszki-theme'), z = localStorage.getItem('fiszki-size');
    if (t === 'light' || t === 'dark') d.setAttribute('data-theme', t);
    if (z === 'large') d.setAttribute('data-size', z);
  } catch (e) { /* prywatny tryb itp. */ }
  var me = document.currentScript && document.currentScript.src;
  if (me && 'serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', function () {
      try { navigator.serviceWorker.register(new URL('../sw.js', me).href).catch(function () { /* */ }); } catch (e) { /* */ }
    });
  }
})();
