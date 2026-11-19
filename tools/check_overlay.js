// Checks a translation overlay course: every level translated, line counts match, no Polish left.
// Usage: node tools/check_overlay.js uk/english
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.resolve(__dirname, '..');
const dir = path.resolve(process.argv[2] || 'uk/english');
const src = path.join(root, 'english');
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
const run = f => vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f });
run(path.join(src, 'data.js'));
const files = fs.readdirSync(path.join(src, 'data')).filter(f => f.endsWith('.js'));
[...files.filter(f => !f.startsWith('gen-')).sort(), 'gen-verbs.js', 'gen-more.js'].forEach(f => run(path.join(src, 'data', f)));
const lines = v => (typeof v === 'string' ? v.split('\n') : v || []).map(x => x.trim()).filter(Boolean);
const before = {};
ctx.window.STAGES.forEach(s => s.levels.forEach(l => { before[l.id] = { k: l.k, i: lines(l.i) }; }));
run(path.join(root, 'shared', 'overlay.js'));
const tr = fs.readdirSync(path.join(dir, 'tr')).filter(f => f.endsWith('.js')).sort();
tr.forEach(f => run(path.join(dir, 'tr', f)));
const P = [], PL = /[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/, CYR = /[Ѐ-ӿ]/;
(ctx.window.TR_MISSING || []).forEach(id => P.push('not translated: ' + id));
const X = ctx.window.TRX;
Object.keys(X.levels).forEach(id => {
  if (!before[id]) { P.push('overlay for unknown level ' + id); return; }
  const o = X.levels[id], b = before[id];
  if (o.i && lines(o.i).length !== b.i.length) P.push(id + ': ' + lines(o.i).length + ' lines, original ' + b.i.length);
  if (o.i && b.k === 'f') lines(o.i).forEach((u, k) => { if ((b.i[k] || '').split('|')[3] && !u.split('|')[1]) P.push(id + ' line ' + (k + 1) + ': tip missing'); });
});
let items = 0;
ctx.window.STAGES.forEach(s => {
  if (PL.test(s.name)) P.push('stage name in Polish: ' + s.name);
  s.levels.forEach(l => {
    [l.t, l.d, l.qp].forEach(x => { if (x && PL.test(x)) P.push(l.id + ': Polish in title/desc: ' + x); });
    lines(l.i).forEach(r => {
      items++;
      const p = r.split('|');
      const fields = l.k === 'f' ? [p[1], p[3]] : l.k === 'm' ? [p[1], p[2], p[3]] : [p[1]];
      fields.forEach((x, n) => {
        if (!x) return;
        if (PL.test(x)) P.push(l.id + ': Polish left: ' + r);
        // wskazówki (ostatnie pole f/m) mogą być samymi wzorami, np. „I → am, he/she/it → is”
        else if (n === 0 && !CYR.test(x) && /[a-zA-Z]{3,}/.test(x) && !/^[\d\s.:–-]+$/.test(x)) P.push(l.id + ': no Ukrainian in: ' + r);
      });
    });
  });
});
const only = process.argv[3]; // np. "gv-" – pokaż tylko problemy zawierające ten tekst
if (only) { const keep = P.filter(x => x.indexOf(only) >= 0); P.length = 0; P.push(...keep); }
console.log('levels translated: ' + Object.keys(X.levels).length + ' hand-written, generated patterns: ' + Object.keys(X.gen).length + ', items: ' + items);
console.log(P.length ? P.slice(0, 40).join('\n') + (P.length > 40 ? '\n…and ' + (P.length - 40) + ' more (' + P.length + ' total)' : '') : 'no problems');
