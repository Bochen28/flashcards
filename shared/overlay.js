/*
 * Nakładka tłumaczeń: ten sam kurs w innym języku interfejsu (np. angielski dla Ukraińców).
 * Ładujemy ją po danych kursu i generatorach, a przed app.js. Pliki tłumaczeń wywołują:
 *   TR({ idPoziomu: { t, d, qp, i: `linie`, full: `całe linie`, en: [['Poland','Ukraine']] } })  – poziomy pisane ręcznie
 *       linie i (w tej samej kolejności co oryginał):  v/o: "tłumaczenie"
 *       f: "tłumaczenie|wskazówka"   m: "poprawne|błędne1,błędne2|wskazówka"
 *   TRS({ s1: 'nazwa etapu' })                       – nazwy etapów
 *   TRG({ 'gv-m-#': { t, d, qp, item } })            – poziomy generowane (# = numer w id);
 *       t / d mogą być funkcją (staryTekst, numer), item – funkcją (linia) → linia
 *   TRM({ 'go': 'йти', … })                          – znaczenia słów w poziomach generowanych
 */
(function () {
  var X = window.TRX = window.TRX || { levels: {}, stages: {}, gen: {}, mean: {} };
  window.TR = function (m) { Object.assign(X.levels, m); };
  window.TRS = function (m) { Object.assign(X.stages, m); };
  window.TRG = function (m) { Object.assign(X.gen, m); };
  // znaczenia według rodzaju listy (np. 'v' czasowniki, 'a' przymiotniki, 'n' rzeczowniki) – watch, book, light są w kilku
  window.TRM = function (m, cat) { var c = cat || '*'; X.mean[c] = Object.assign(X.mean[c] || {}, m); };
})();

window.APPLY_TR = function () {
  var X = window.TRX, missing = [];
  var trim = function (s) { return s.trim(); };
  var lines = function (v) { return (typeof v === 'string' ? v.split('\n') : v || []).map(trim).filter(Boolean); };
  // "goes|go (iść)" → podmieniamy znaczenie słowa z nawiasu; "go|iść" (lista znaczeń) → podmieniamy całe tłumaczenie
  var meaning = function (cat) {
    var M = Object.assign({}, X.mean['*'] || {}, X.mean[cat] || {});
    return function (line) {
      var p = line.split('|');
      var m = (p[1] || '').match(/^(.+?) \((.+)\)$/);
      if (m && M[m[1]]) p[1] = m[1] + ' (' + M[m[1]] + ')';
      else if (M[p[0]]) p[1] = M[p[0]];
      return p.join('|');
    };
  };
  window.STAGES.forEach(function (st) {
    if (X.stages[st.id]) st.name = X.stages[st.id];
    st.levels.forEach(function (lv) {
      var o = X.levels[lv.id];
      if (o) {
        if (o.t) lv.t = o.t; if (o.d) lv.d = o.d; if (o.qp) lv.qp = o.qp;
        if (o.full) { lv.i = o.full; return; }
        if (!o.i) return;
        var tr = lines(o.i), en = o.en || [];
        lv.i = lines(lv.i).map(function (r, k) {
          // en: [['Poland', 'Ukraine'], …] – podmiany w tekście obcojęzycznym (np. realia bliższe uczniom)
          en.forEach(function (e) { r = r.split(e[0]).join(e[1]); });
          var p = r.split('|'), u = (tr[k] || '').split('|');
          if (lv.k === 'f') { p[1] = u[0]; if (p.length > 3 || u[1]) p[3] = u[1] || ''; }
          else if (lv.k === 'm') { p[1] = u[0]; p[2] = u[1] || ''; if (p.length > 3 || u[2]) p[3] = u[2] || ''; }
          else p[1] = u[0];
          return p.join('|');
        });
        return;
      }
      var key = lv.id.replace(/\d+/g, '#'), g = X.gen[key];
      if (!g) { missing.push(lv.id); return; }
      var n = (lv.id.match(/\d+/) || [''])[0];
      var txt = function (v, old) { return typeof v === 'function' ? v(old, n) : v.replace(/#/g, n); };
      if (g.t) lv.t = txt(g.t, lv.t); if (g.d) lv.d = txt(g.d, lv.d); if (g.qp) lv.qp = txt(g.qp, lv.qp);
      lv.i = lines(lv.i).map(g.item || meaning(g.map));
    });
  });
  window.TR_MISSING = missing;
};
