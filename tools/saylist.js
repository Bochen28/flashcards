// Lists every text the app reads aloud for one language, with the audio file name the app looks for.
// Usage: node tools/saylist.js ukrainian  → JSON [{ "t": text, "f": file }] on stdout
// The text rules match sayText() in shared/app.js and the file name matches audioName() there.
const fs = require('fs'), path = require('path'), vm = require('vm');

function cyrb53(str) {
  let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
  h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
  h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
}
const audioName = t => cyrb53(t.trim()).toString(36) + '.mp3';

const dir = path.resolve(process.argv[2] || '.');
const ctx = { console }; ctx.window = ctx;
vm.createContext(ctx);
const run = f => vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f });
if (fs.existsSync(path.join(dir, 'lang.js'))) run(path.join(dir, 'lang.js'));
run(path.join(dir, 'data.js'));
const files = fs.readdirSync(path.join(dir, 'data')).filter(f => f.endsWith('.js'));
[...files.filter(f => !f.startsWith('gen-')).sort(), ...['gen-verbs.js', 'gen-more.js'].filter(f => files.includes(f))]
  .forEach(f => run(path.join(dir, 'data', f)));

const texts = new Set();
if (ctx.window.LANG && ctx.window.LANG.sample) texts.add(ctx.window.LANG.sample);
ctx.window.STAGES.forEach(st => st.levels.forEach(lv => {
  const raw = typeof lv.i === 'string' ? lv.i.split('\n') : lv.i;
  raw.map(x => x.trim()).filter(Boolean).forEach(r => {
    const p0 = r.split('|')[0].trim();
    if (lv.k === 'f') texts.add(p0.replace(/[{}]/g, '').replace(/\s*→\s*/g, ', '));
    else if (lv.k === 'v') texts.add(p0.split('/')[0]);
    else texts.add(p0);
  });
}));

// lesson examples: lines "> foreign | polish" in lessons/*.js (spoken text = foreign part without **, as in lessonBody())
const ldir = path.join(dir, 'lessons');
if (fs.existsSync(ldir)) {
  fs.readdirSync(ldir).filter(f => f.endsWith('.js')).sort().forEach(f => run(path.join(ldir, f)));
  (ctx.window.LESSONS || []).forEach(ls => String(ls.body || '').split('\n').forEach(raw => {
    const t = raw.trim();
    if (!t.startsWith('> ')) return;
    const x = t.slice(2), i = x.indexOf('|');
    const say = (i < 0 ? x : x.slice(0, i)).trim().replace(/\*\*/g, '');
    if (say.trim()) texts.add(say);
  }));
}

const out = [], seen = new Map();
for (const t of texts) {
  const f = audioName(t);
  if (seen.has(f) && seen.get(f) !== t.trim()) { console.error('Hash collision: ' + JSON.stringify([seen.get(f), t])); process.exit(1); }
  seen.set(f, t.trim());
  out.push({ t: t.trim(), f });
}
process.stdout.write(JSON.stringify(out));
