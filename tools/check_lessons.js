// Validates lessons/*.js for a language: ids, placement, practice links and body markup.
// Usage: node tools/check_lessons.js ukrainian
const fs = require('fs'), path = require('path'), vm = require('vm');
const dir = path.resolve(process.argv[2]);
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
const run = f => vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f });
if (fs.existsSync(path.join(dir, 'lang.js'))) run(path.join(dir, 'lang.js'));
// kurs-nakładka (np. uk/english) nie ma własnych danych – bierze je z kursu źródłowego o tej samej nazwie
const src = fs.existsSync(path.join(dir, 'data.js')) ? dir : path.resolve(__dirname, '..', path.basename(dir));
run(path.join(src, 'data.js'));
const files = fs.readdirSync(path.join(src, 'data')).filter(f => f.endsWith('.js'));
[...files.filter(f => !f.startsWith('gen-')).sort(), 'gen-verbs.js', 'gen-more.js'].forEach(f => run(path.join(src, 'data', f)));
const lf = fs.readdirSync(path.join(dir, 'lessons')).filter(f => f.endsWith('.js')).sort();
lf.forEach(f => run(path.join(dir, 'lessons', f)));
const where = {}; ctx.window.STAGES.forEach(s => s.levels.forEach(l => where[l.id] = s.id));
const P = [], ids = new Set(); let ex = 0, words = 0;
const per = {};
ctx.window.LESSONS.forEach(ls => {
  const w = m => P.push(ls.id + ': ' + m);
  if (ids.has(ls.id)) w('duplicate id'); ids.add(ls.id);
  if (!ctx.window.STAGES.some(s => s.id === ls.stage)) w('bad stage ' + ls.stage);
  if (!where[ls.before]) w('before not found: ' + ls.before); else if (where[ls.before] !== ls.stage) w('before ' + ls.before + ' is in ' + where[ls.before]);
  (ls.practice || []).forEach(p => { if (!where[p]) w('practice not found: ' + p); });
  if (!ls.t || !ls.d) w('missing t/d');
  per[ls.stage] = (per[ls.stage] || 0) + 1;
  let cols = 0, prevTable = false;
  (ls.body || '').split('\n').forEach(raw => {
    const t = raw.trim();
    if ((t.match(/\*\*/g) || []).length % 2) w('odd ** in: ' + t);
    if (t.startsWith('> ')) { ex++; if (t.indexOf('|') < 0) w('example without |: ' + t); }
    if (t.startsWith('|')) { const n = t.replace(/^\|/, '').replace(/\|$/, '').split('|').length; if (prevTable && n !== cols) w('table cols ' + n + ' vs ' + cols + ': ' + t); if (!prevTable) cols = n; prevTable = true; } else prevTable = false;
    words += t.split(/\s+/).filter(Boolean).length;
    (t.match(/[\p{L}́']+/gu) || []).forEach(wd => { if (/[Ѐ-ӿ]/.test(wd) && /[A-Za-zÀ-ſ]/.test(wd)) w('mixed alphabets: ' + wd); });
  });
});
console.log(lf.length + ' files, ' + ctx.window.LESSONS.length + ' lessons, ' + ex + ' examples, ~' + words + ' words; per stage ' + JSON.stringify(per));
console.log(P.length ? P.join('\n') : 'no problems');
