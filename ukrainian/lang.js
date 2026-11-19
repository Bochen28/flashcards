/*
 * Ustawienia języka ukraińskiego dla wspólnej aplikacji (../shared/app.js):
 * transkrypcja na polskie litery, klawiatura ekranowa i głos uk-UA.
 */
(function () {
  var MAP = {
    'а': 'a', 'б': 'b', 'в': 'w', 'г': 'h', 'ґ': 'g', 'д': 'd', 'е': 'e', 'ж': 'ż', 'з': 'z', 'и': 'y',
    'і': 'i', 'ї': 'ji', 'й': 'j', 'к': 'k', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's',
    'т': 't', 'у': 'u', 'ф': 'f', 'х': 'ch', 'ц': 'c', 'ч': 'cz', 'ш': 'sz', 'щ': 'szcz'
  };
  var SOFT = { 'с': 'ś', 'з': 'ź', 'ц': 'ć', 'н': 'ń', 'л': 'l', 'д': "d'", 'т': "t'" }; // spółgłoska + ь
  var IOT = { 'є': 'e', 'ю': 'u', 'я': 'a' };                                             // є, ю, я
  var CONS = /[бвгґджзклмнпрстфхцчшщ]/;

  // Привіт → Prywit, дякую → diakuju, п'ять → pjat', сьогодні → śohodni, Україна → Ukrajina
  function translit(text) {
    var s = String(text), out = '';
    for (var i = 0; i < s.length; i++) {
      var ch = s[i], lo = ch.toLowerCase(), up = ch !== lo;
      var prev = i > 0 ? s[i - 1].toLowerCase() : '';
      var next = i + 1 < s.length ? s[i + 1].toLowerCase() : '';
      var r;
      if (lo === 'ь' || lo === 'ʼ' || lo === "'" || lo === '’') continue;
      if (lo === 'л') r = /[ьєіїюя]/.test(next) ? 'l' : 'ł';
      else if (IOT[lo]) r = (CONS.test(prev) ? (prev === 'л' ? '' : 'i') : 'j') + IOT[lo];
      else if (MAP[lo]) r = MAP[lo];
      else { out += ch; continue; }
      if (next === 'ь' && SOFT[lo]) r = SOFT[lo];
      if (up) r = r.charAt(0).toUpperCase() + r.slice(1);
      out += r;
    }
    return out;
  }

  window.LANG = {
    name: 'Ukraiński', short: 'UA', inLang: 'po ukraińsku', storeKey: 'fiszki-ukrainski-v1',
    subtitle: 'Od alfabetu do poziomu C1', sample: 'Привіт! Як справи?',
    voices: [{ code: 'uk-UA', label: 'ukraiński' }], requireVoice: true,
    strip: null, keepFirst: null, translit: translit,
    keyboard: ['й ц у к е н г ш щ з х ї', 'ф і в а п р о л д ж є ґ', 'я ч с м и т ь б ю ʼ ⌫']
  };
})();
