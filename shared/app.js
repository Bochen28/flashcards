/* Fiszki – angielski dla Polaków. Cała logika aplikacji (bez zewnętrznych bibliotek). */
'use strict';
(function () {
  const STAGES = window.STAGES || [];
  const app = document.getElementById('app');
  // ustawienia języka – każdy język ustawia window.LANG w swoim index.html (domyślnie angielski)
  const L = Object.assign({
    name: 'Angielski', short: 'EN', inLang: 'po angielsku', storeKey: 'fiszki-angielski-v1',
    subtitle: 'Krok po kroku, od zera do C1', sample: 'Hello! How are you today?',
    voices: [{ code: 'en-GB', label: 'brytyjski' }, { code: 'en-US', label: 'amerykański' }],
    strip: /^(to|a|an|the)\s+/, keepFirst: /^I($|')/, requireVoice: false, translit: null, keyboard: null
  }, window.LANG || {});
  const STORE_KEY = L.storeKey;
  const KIND = { v: 'Słówka', f: 'Gramatyka', o: 'Zdania', m: 'Znaczenia' };
  const PRAISE = ['Świetnie!', 'Brawo!', 'Dobrze!', 'Super!', 'Doskonale!', 'Tak jest!', 'Znakomicie!'];

  /* ---------------- helpers ---------------- */
  const $ = (s, el) => (el || document).querySelector(s);
  const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pick = a => a[Math.floor(Math.random() * a.length)];
  function shuffle(a) {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }
  function plural(n, one, few, many) {
    if (n === 1) return one;
    const d = n % 10, h = n % 100;
    return d >= 2 && d <= 4 && !(h >= 12 && h <= 14) ? few : many;
  }
  const pad = n => String(n).padStart(2, '0');
  const dayStr = d => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  const isButtonFocused = () => document.activeElement && document.activeElement.tagName === 'BUTTON';

  const ICONS = {
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
    speaker: '<path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>',
    swap: '<path d="M17 2l4 4-4 4"/><path d="M3 11V9a3 3 0 0 1 3-3h15"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/>'
  };
  const icon = (n, s) => '<svg class="ic" viewBox="0 0 24 24" width="' + (s || 22) + '" height="' + (s || 22) + '" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS[n] + '</svg>';

  /* ---------------- data ---------------- */
  const LEVELS = [], BY_ID = {}, ITEMS = {};
  const splitList = s => (s || '').split(',').map(x => x.trim()).filter(Boolean);

  function parseItem(lv, raw) {
    const p = raw.split('|').map(x => x.trim());
    const it = { lv: lv, key: lv.id + '|' + p[0] };
    if (lv.k === 'v') {
      it.en = p[0]; it.pl = p[1] || ''; it.em = p[2] || '';
    } else if (lv.k === 'f') {
      const m = p[0].match(/\{([^}]+)\}/);
      it.s = p[0]; it.ans = m ? m[1] : ''; it.full = p[0].replace(/[{}]/g, '');
      it.pl = p[1] || ''; it.opts = splitList(p[2]); it.tip = p[3] || '';
    } else if (lv.k === 'o') {
      it.en = p[0]; it.pl = p[1] || '';
      it.alts = (p[2] || '').split(';').map(x => x.trim()).filter(Boolean);
    } else if (lv.k === 'm') {
      it.en = p[0]; it.pl = p[1] || ''; it.opts = splitList(p[2]); it.tip = p[3] || '';
    }
    return it;
  }

  STAGES.forEach((st, si) => {
    st.levels.forEach(lv => {
      lv.stage = si;
      lv.num = LEVELS.length + 1;
      if (lv.k === 'v' && !lv.ex) lv.ex = st.ex;
      if (lv.k === 'o' && !lv.ex) lv.ex = ['order'];
      const rawList = typeof lv.i === 'string' ? lv.i.split('\n') : lv.i;
      lv.items = rawList.map(x => x.trim()).filter(Boolean).map(raw => parseItem(lv, raw));
      lv.items.forEach(it => { ITEMS[it.key] = it; });
      LEVELS.push(lv);
      BY_ID[lv.id] = lv;
    });
  });

  const TOTAL = LEVELS.reduce((a, l) => a + l.items.length, 0);

  /* lekcje: wyjaśnienia zasad, każda stoi na ścieżce przed poziomem `before` i odsyła do poziomów `practice` */
  const LESSONS = [], LESSON_BY = {}, LESSON_BEFORE = {}, LESSON_FOR = {};
  (window.LESSONS || []).forEach(ls => {
    if (!ls || !ls.id || LESSON_BY[ls.id]) return;
    const si = STAGES.findIndex(s => s.id === ls.stage);
    if (si < 0) return;
    ls.si = si;
    ls.practice = (ls.practice || []).filter(id => BY_ID[id]);
    const at = BY_ID[ls.before] && BY_ID[ls.before].stage === si ? ls.before : (STAGES[si].levels[0] || {}).id;
    (LESSON_BEFORE[at] = LESSON_BEFORE[at] || []).push(ls);
    [ls.before].concat(ls.practice).forEach(id => { if (BY_ID[id] && !LESSON_FOR[id]) LESSON_FOR[id] = ls; });
    LESSONS.push(ls); LESSON_BY[ls.id] = ls;
  });
  const fmt = n => n.toLocaleString('pl-PL');
  const enShow = it => it.en.split('/').join(' / ');
  const sayText = it => it.lv.k === 'f' ? it.full.replace(/\s*→\s*/g, ', ') : (it.lv.k === 'v' ? it.en.split('/')[0] : it.en);
  function sentenceHTML(it, state) {
    const parts = it.s.split(/\{[^}]+\}/);
    const blank = state
      ? '<span class="blank filled ' + state + '">' + esc(it.ans) + '</span>'
      : '<span class="blank" aria-label="luka"> </span>';
    return esc(parts[0]) + blank + esc(parts[1] || '');
  }
  function previewText(it) {
    if (it.lv.k === 'v') return enShow(it) + ' – ' + it.pl;
    if (it.lv.k === 'f') return it.full;
    return it.en;
  }

  /* ---------------- saved progress ---------------- */
  function freshState(settings) {
    return {
      stars: {}, mistakes: {}, read: {}, streak: { last: '', n: 0 },
      settings: Object.assign({ auto: true, accent: L.voices[0].code, rate: 0.9, translit: true }, settings || {})
    };
  }
  function load() {
    let d = null;
    try { d = JSON.parse(localStorage.getItem(STORE_KEY) || 'null'); } catch (e) { d = null; }
    const s = freshState(d && d.settings);
    if (d) {
      s.stars = d.stars || {};
      s.mistakes = d.mistakes || {};
      s.read = d.read || {};
      s.streak = d.streak || s.streak;
    }
    Object.keys(s.mistakes).forEach(k => { if (!ITEMS[k]) delete s.mistakes[k]; });
    if (!L.voices.some(v => v.code === s.settings.accent)) s.settings.accent = L.voices[0].code;
    return s;
  }
  let S = load();
  function save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (e) { /* tryb prywatny itp. */ } }

  function touchStreak() {
    const today = dayStr(new Date());
    if (S.streak.last === today) return;
    const y = new Date(); y.setDate(y.getDate() - 1);
    S.streak.n = S.streak.last === dayStr(y) ? (S.streak.n || 0) + 1 : 1;
    S.streak.last = today;
    save();
  }
  function streakNow() {
    const y = new Date(); y.setDate(y.getDate() - 1);
    return (S.streak.last === dayStr(new Date()) || S.streak.last === dayStr(y)) ? (S.streak.n || 0) : 0;
  }
  const levelStars = lv => S.stars[lv.id] || 0;
  const mistakeList = () => Object.keys(S.mistakes).map(k => ITEMS[k]).filter(Boolean);
  function continueLevel() {
    return LEVELS.find(l => levelStars(l) === 0) || LEVELS.find(l => levelStars(l) < 3) || LEVELS[LEVELS.length - 1];
  }
  function starsHTML(n, cls) {
    let h = '<span class="stars ' + (cls || '') + '" aria-label="' + n + ' z 3 gwiazdek">';
    for (let i = 0; i < 3; i++) h += '<span class="' + (i < n ? 'on' : '') + '">★</span>';
    return h + '</span>';
  }

  /* ---------------- speech ---------------- */
  const TTS = 'speechSynthesis' in window && typeof window.SpeechSynthesisUtterance !== 'undefined';
  let voices = [];
  function loadVoices() { try { voices = window.speechSynthesis.getVoices() || []; } catch (e) { voices = []; } }
  if (TTS) {
    loadVoices();
    try { window.speechSynthesis.addEventListener('voiceschanged', loadVoices); }
    catch (e) { window.speechSynthesis.onvoiceschanged = loadVoices; }
  }
  function bestVoice() {
    const want = S.settings.accent.toLowerCase();
    const lang = v => (v.lang || '').replace('_', '-').toLowerCase();
    const good = /google|natural|premium|enhanced|neural|online|siri/i;
    const exact = voices.filter(v => lang(v) === want);
    return exact.find(v => good.test(v.name)) || exact[0] || voices.find(v => lang(v).indexOf(want.slice(0, 2)) === 0) || null;
  }
  // gdy język wymaga własnego głosu (np. ukraiński), nie czytamy niczego obcym głosem
  const canTTS = () => TTS && (!L.requireVoice || !!bestVoice());
  // nagrania: L.audio to folder z plikach MP3 (nazwa = skrót tekstu, ten sam co w tools/saylist.js)
  const AUDIO = !!L.audio && typeof window.Audio === 'function';
  const canSpeak = () => AUDIO || canTTS();
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
  // jeden odtwarzacz na całą stronę: iPhone po pierwszym dotknięciu pozwala mu grać także z opóźnieniem (np. kolejna fiszka)
  let player = null, playing = null;
  function playFile(text, slow) {
    if (!player) {
      player = new Audio();
      player.preload = 'auto';
      // brak pliku (np. nowe słowo bez nagrania) → głos urządzenia, jeśli jest
      player.addEventListener('error', () => { const p = playing; playing = null; if (p) ttsSpeak(p.text, p.slow); });
    }
    const a = player, rate = slow ? 0.7 : (S.settings.rate < 0.9 ? 0.85 : 1);
    try { a.pause(); } catch (e) { /* */ }
    playing = { text: text, slow: slow };
    a.src = L.audio + audioName(text);
    a.defaultPlaybackRate = rate; a.playbackRate = rate;
    a.preservesPitch = true;
    const p = a.play();
    if (p && p.catch) p.catch(() => { /* autoodtwarzanie zablokowane – trudno */ });
  }
  function speak(text, slow) {
    if (!text) return;
    if (AUDIO) playFile(text, slow); else ttsSpeak(text, slow);
  }
  function ttsSpeak(text, slow) {
    if (!canTTS() || !text) return;
    try {
      const ss = window.speechSynthesis;
      if (ss.speaking || ss.pending) ss.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = S.settings.accent;
      const v = bestVoice();
      if (v) u.voice = v;
      u.rate = slow ? 0.6 : S.settings.rate;
      ss.speak(u);
    } catch (e) { /* brak mowy – trudno */ }
  }
  const autoSay = t => { if (S.settings.auto) speak(t); };
  function stopSpeech() {
    if (player) { try { player.pause(); } catch (e) { /* */ } playing = null; }
    if (TTS) { try { window.speechSynthesis.cancel(); } catch (e) { /* */ } }
  }
  const spkBtn = (say, cls) => canSpeak() ? '<button class="spk ' + (cls || '') + '" data-say="' + esc(say) + '" aria-label="Posłuchaj wymowy">' + icon('speaker') + '</button>' : '';
  // transkrypcja (np. ukraińska cyrylica zapisana polskimi literami)
  const tl = t => (L.translit && S.settings.translit && t) ? '<span class="tl">' + esc(L.translit(t)) + '</span>' : '';
  function keyboardHTML() {
    return '<div class="kb" aria-label="Klawiatura">' + L.keyboard.map(row => '<div class="kb-row">' + row.split(' ').map(k =>
      k === '⌫' ? '<button class="kb-key wide" data-k="bs" aria-label="Usuń literę">⌫</button>'
                : '<button class="kb-key" data-k="' + esc(k) + '">' + esc(k) + '</button>').join('') + '</div>').join('') +
      '<div class="kb-row"><button class="kb-key space" data-k=" ">spacja</button></div></div>';
  }

  // każdy przycisk z data-say czyta tekst na głos
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-say]');
    if (b) speak(b.getAttribute('data-say'), b.hasAttribute('data-slow'));
  });

  /* ---------------- navigation ---------------- */
  let keyHandler = null, homeScroll = 0, onHome = true, sheetEl = null;
  let openStages = null; // rozwinięte etapy na ekranie głównym
  let Q = null; // sesja ćwiczeń
  let F = null; // sesja fiszek

  function pushScreen() {
    if (onHome) homeScroll = window.scrollY;
    onHome = false;
    try { history.pushState({ screen: 1 }, ''); } catch (e) { /* */ }
  }
  function goHome() {
    if (history.state && history.state.screen) history.back();
    else renderHome();
  }
  window.addEventListener('popstate', () => { closeSheet(); renderHome(); });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (sheetEl) { closeSheet(); return; }
      if (!onHome) { goHome(); return; }
    }
    if (sheetEl || e.ctrlKey || e.metaKey || e.altKey) return;
    if (keyHandler) keyHandler(e);
  });

  /* ---------------- bottom sheet ---------------- */
  function openSheet(html, onAct) {
    closeSheet();
    const back = document.createElement('div');
    back.className = 'sheet-back';
    back.innerHTML = '<div class="sheet" role="dialog" aria-modal="true"><div class="sheet-grip"></div>' + html + '</div>';
    document.body.appendChild(back);
    requestAnimationFrame(() => back.classList.add('open'));
    back.addEventListener('click', e => {
      if (e.target === back) { closeSheet(); return; }
      const b = e.target.closest('[data-act]');
      if (b) onAct(b.getAttribute('data-act'), b);
    });
    sheetEl = back;
    const first = $('.sheet [data-act]', back);
    if (first) setTimeout(() => { try { first.focus({ preventScroll: true }); } catch (e) { /* */ } }, 60);
    return back;
  }
  function closeSheet() {
    if (!sheetEl) return;
    const el = sheetEl;
    sheetEl = null;
    el.classList.remove('open');
    setTimeout(() => el.remove(), 220);
  }

  /* ---------------- home ---------------- */
  function tileHTML(l, isNext) {
    const st = levelStars(l);
    return '<button class="lvl' + (st ? ' done' : '') + (isNext ? ' next' : '') + '" data-lv="' + l.id + '">' +
      (isNext ? '<span class="now">Teraz</span>' : '') +
      '<span class="lvl-num">' + l.num + '</span>' +
      '<span class="lvl-t">' + esc(l.t) + '</span>' +
      '<span class="lvl-meta"><span class="lvl-k">' + KIND[l.k] + '</span>' + starsHTML(st) + '</span>' +
      '</button>';
  }
  function lessonTileHTML(ls, isNext) {
    const rd = !!S.read[ls.id];
    return '<button class="lvl lesson' + (rd ? ' done' : '') + (isNext ? ' next' : '') + '" data-lesson="' + esc(ls.id) + '">' +
      (isNext ? '<span class="now">Teraz</span>' : '') +
      '<span class="lvl-num" aria-hidden="true">📖</span>' +
      '<span class="lvl-t">' + esc(ls.t) + '</span>' +
      '<span class="lvl-meta"><span class="lvl-k">Lekcja</span>' + (rd ? '<span class="read-mark">✓ przeczytana</span>' : '') + '</span>' +
      '</button>';
  }
  // co pokazać jako „następne”: nieprzeczytana lekcja tuż przed następnym poziomem albo sam poziom
  function nextStep() {
    const lv = continueLevel();
    const ls = (LESSON_BEFORE[lv.id] || []).find(x => !S.read[x.id]);
    return { lv: lv, ls: ls || null };
  }

  function renderHome() {
    onHome = true; keyHandler = null; Q = null; F = null;
    stopSpeech();
    const done = LEVELS.filter(l => levelStars(l) > 0).length;
    const stars = LEVELS.reduce((a, l) => a + levelStars(l), 0);
    const step = nextStep(), next = step.lv;
    const nLessons = LESSONS.length;
    const mist = mistakeList().length;
    const streak = streakNow();
    const pct = Math.round(done / LEVELS.length * 100);

    let h = '<div class="wrap home">' +
      '<header class="topbar">' +
        '<div class="brand"><span class="logo" aria-hidden="true">' + esc(L.short) + '</span><div><h1>' + esc(L.name) + ' · fiszki</h1><p>' + esc(L.subtitle) + '</p></div></div>' +
        '<button class="icon-btn" data-act="settings" aria-label="Ustawienia">' + icon('gear') + '</button>' +
      '</header>' +
      '<section class="hero">' +
        '<div class="stats">' +
          '<div><b>' + done + '<small>/' + LEVELS.length + '</small></b><span>ukończone poziomy</span></div>' +
          '<div><b>' + stars + '<small>★</small></b><span>' + plural(stars, 'gwiazdka', 'gwiazdki', 'gwiazdek') + '</span></div>' +
          '<div><b>' + streak + '<small>🔥</small></b><span>' + (streak === 1 ? 'dzień' : 'dni') + ' z rzędu</span></div>' +
        '</div>' +
        '<div class="bar light" role="progressbar" aria-valuenow="' + pct + '" aria-valuemin="0" aria-valuemax="100"><i style="width:' + pct + '%"></i></div>' +
        '<p class="hero-count">📚 ' + fmt(TOTAL) + ' ' + plural(TOTAL, 'ćwiczenie', 'ćwiczenia', 'ćwiczeń') + ' w ' + LEVELS.length + ' poziomach' +
          (nLessons ? ' · 📖 ' + nLessons + ' ' + plural(nLessons, 'lekcja', 'lekcje', 'lekcji') : '') + '</p>' +
        (done === 0 ? '<p class="hero-tip">' + (nLessons ? '<b>📖 Lekcje</b> wyjaśniają zasady krok po kroku. ' : '') + 'Każdy poziom ma <b>📇 fiszki</b> do nauki i <b>✏️ ćwiczenia</b>, za które zdobywasz gwiazdki. Poziomy idą od najłatwiejszych do coraz trudniejszych.</p>' : '') +
        '<div class="hero-actions">' +
          '<button class="btn white big" data-act="continue">▶ ' + (done ? 'Kontynuuj' : 'Zacznij') + ': <span class="ellip">' +
            (step.ls ? '📖 ' + esc(step.ls.t) : next.num + '. ' + esc(next.t)) + '</span></button>' +
          (mist ? '<button class="btn glass" data-act="review">🔁 Powtórka błędów <span class="pill">' + mist + '</span></button>' : '') +
        '</div>' +
      '</section>';

    if (!openStages) openStages = new Set([next.stage]);
    STAGES.forEach((st, si) => {
      if (!st.levels.length) return;
      const d = st.levels.filter(l => levelStars(l) > 0).length;
      const n = st.levels.reduce((a, l) => a + l.items.length, 0);
      const nl = LESSONS.filter(x => x.si === si).length;
      const open = openStages.has(si);
      const tiles = () => st.levels.map(l => (LESSON_BEFORE[l.id] || []).map(x => lessonTileHTML(x, x === step.ls)).join('') +
        tileHTML(l, l === next && !step.ls)).join('');
      h += '<section class="stage' + (open ? ' open' : '') + '" style="--c:var(--s' + (si + 1) + ')">' +
        '<button class="stage-head" data-stage="' + si + '" aria-expanded="' + open + '">' +
          '<span class="stage-no">' + (si + 1) + '</span>' +
          '<span class="stage-info">' +
            '<span class="stage-name">' + esc(st.name) + ' <span class="tag">' + esc(st.tag) + '</span></span>' +
            '<span class="stage-sub">' + st.levels.length + ' ' + plural(st.levels.length, 'poziom', 'poziomy', 'poziomów') + ' · ' + fmt(n) + ' ' + plural(n, 'ćwiczenie', 'ćwiczenia', 'ćwiczeń') +
              (nl ? ' · ' + nl + ' ' + plural(nl, 'lekcja', 'lekcje', 'lekcji') : '') + '</span>' +
            '<span class="stage-bar"><i style="width:' + Math.round(d / st.levels.length * 100) + '%"></i></span>' +
          '</span>' +
          '<span class="stage-count">' + d + '/' + st.levels.length + '</span>' +
          '<span class="chev" aria-hidden="true">›</span>' +
        '</button>' +
        (open ? '<div class="grid">' + tiles() + '</div>' : '') +
        '</section>';
    });
    h += '<footer class="foot">Postępy zapisują się automatycznie w tej przeglądarce.<br>Powodzenia! Good luck! 🍀</footer></div>';

    app.innerHTML = h;
    window.scrollTo(0, homeScroll);

    $('.home', app).addEventListener('click', e => {
      const t = e.target.closest('[data-lv]');
      if (t) { openLevel(BY_ID[t.getAttribute('data-lv')]); return; }
      const lt = e.target.closest('[data-lesson]');
      if (lt) { openLesson(LESSON_BY[lt.getAttribute('data-lesson')], true); return; }
      const sh = e.target.closest('[data-stage]');
      if (sh) {
        const si = +sh.getAttribute('data-stage');
        if (openStages.has(si)) openStages.delete(si); else openStages.add(si);
        homeScroll = window.scrollY;
        renderHome();
        return;
      }
      const b = e.target.closest('[data-act]');
      if (!b) return;
      const act = b.getAttribute('data-act');
      if (act === 'continue') { if (step.ls) openLesson(step.ls, true); else openLevel(next); }
      else if (act === 'review') startReview(true);
      else if (act === 'settings') openSettings();
    });
  }

  function openLevel(lv) {
    const st = levelStars(lv);
    const n = lv.k === 'v' || lv.k === 'm' ? 6 : 3;
    const chips = lv.items.slice(0, n).map(it => '<span class="chip">' + esc(previewText(it)) + '</span>').join('') +
      (lv.items.length > n ? '<span class="chip more">+' + (lv.items.length - n) + '</span>' : '');
    openSheet(
      '<div class="sheet-head" style="--c:var(--s' + (lv.stage + 1) + ')">' +
        '<span class="lvl-num big">' + lv.num + '</span>' +
        '<div><p class="eyebrow">Etap ' + (lv.stage + 1) + ' · ' + KIND[lv.k] + ' · ' + lv.items.length + ' ' + plural(lv.items.length, 'element', 'elementy', 'elementów') + '</p><h2>' + esc(lv.t) + '</h2></div>' +
      '</div>' +
      '<p class="sheet-desc">' + esc(lv.d) + '</p>' +
      '<div class="chips">' + chips + '</div>' +
      '<div class="sheet-stars">' + starsHTML(st, 'lg') + '<span>' + (st ? 'Twój najlepszy wynik' : 'Jeszcze bez gwiazdek') + '</span></div>' +
      (LESSON_FOR[lv.id] ? '<button class="btn ghost wide lesson-link" data-act="lesson"><span>📖</span><span class="ellip">Lekcja: ' + esc(LESSON_FOR[lv.id].t) + '</span>' +
        (S.read[LESSON_FOR[lv.id].id] ? '<span class="read-mark">✓</span>' : '') + '</button>' : '') +
      '<div class="sheet-actions">' +
        '<button class="btn soft big" data-act="flash"><span class="b-ico">📇</span><span class="b-txt">Fiszki<small>poznaj i zapamiętaj</small></span></button>' +
        '<button class="btn primary big" data-act="quiz"><span class="b-ico">✏️</span><span class="b-txt">Ćwiczenia<small>sprawdź się, zdobądź ★</small></span></button>' +
      '</div>',
      act => {
        const push = onHome;
        closeSheet();
        if (act === 'flash') startFlash(lv, push);
        else if (act === 'quiz') startQuiz(lv, push);
        else if (act === 'lesson') openLesson(LESSON_FOR[lv.id], push);
      }
    );
  }

  /* ---------------- lessons ---------------- */
  // Prosty zapis treści lekcji (jedna rzecz na linię):
  //   ## Nagłówek      - punkt listy      | komórka | komórka   (pierwszy wiersz tabeli = nagłówek)
  //   > obce zdanie | tłumaczenie   (przykład z wymową)      ! wskazówka      !! uwaga / pułapka
  //   zwykłe linie = akapit, pusta linia kończy akapit; **pogrubienie**
  const inl = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
  const cells = row => row.replace(/^\s*\|/, '').replace(/\|\s*$/, '').split('|').map(c => c.trim());
  function lessonBody(src) {
    let h = '', buf = [], kind = '';
    const flush = () => {
      if (!buf.length) return;
      if (kind === 'p') h += '<p>' + buf.map(inl).join(' ') + '</p>';
      else if (kind === 'ul') h += '<ul>' + buf.map(x => '<li>' + inl(x) + '</li>').join('') + '</ul>';
      else if (kind === 'ex') h += '<div class="ls-exs">' + buf.map(x => {
        const i = x.indexOf('|');
        const fo = (i < 0 ? x : x.slice(0, i)).trim(), pl = i < 0 ? '' : x.slice(i + 1).trim();
        const say = fo.replace(/\*\*/g, '');
        return '<div class="ls-ex"><div class="ls-fo"><span class="ls-fo-t">' + inl(fo) + '</span>' + tl(say) +
          (pl ? '<span class="ls-pl">' + inl(pl) + '</span>' : '') + '</div>' + spkBtn(say, 'sm') + '</div>';
      }).join('') + '</div>';
      else if (kind === 'tb') {
        const [head, ...rows] = buf.map(cells);
        h += '<div class="ls-table"><table><thead><tr>' + head.map(c => '<th>' + inl(c) + '</th>').join('') + '</tr></thead><tbody>' +
          rows.map(r => '<tr>' + r.map(c => '<td>' + inl(c) + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';
      }
      buf = []; kind = '';
    };
    const add = (k, v) => { if (kind !== k) flush(); kind = k; buf.push(v); };
    String(src || '').split('\n').forEach(raw => {
      const t = raw.trim();
      if (!t) flush();
      else if (t.startsWith('## ')) { flush(); h += '<h2>' + inl(t.slice(3)) + '</h2>'; }
      else if (t.startsWith('!! ')) { flush(); h += '<div class="ls-box warn"><span aria-hidden="true">⚠️</span><div>' + inl(t.slice(3)) + '</div></div>'; }
      else if (t.startsWith('! ')) { flush(); h += '<div class="ls-box tip"><span aria-hidden="true">💡</span><div>' + inl(t.slice(2)) + '</div></div>'; }
      else if (t.startsWith('- ')) add('ul', t.slice(2));
      else if (t.startsWith('> ')) add('ex', t.slice(2));
      else if (t.startsWith('|')) add('tb', t);
      else add('p', t);
    });
    flush();
    return h;
  }

  function openLesson(ls, push) {
    if (!ls) return;
    if (push) pushScreen();
    onHome = false; keyHandler = null; Q = null; F = null;
    stopSpeech();
    S.read[ls.id] = 1; save();
    const i = LESSONS.indexOf(ls), nextLs = LESSONS.slice(i + 1).find(x => x.si === ls.si);
    app.innerHTML =
      '<div class="play lesson-screen" style="--c:var(--s' + (ls.si + 1) + ')">' +
        '<div class="play-top">' +
          '<button class="icon-btn" data-act="close" aria-label="Zamknij lekcję">' + icon('close') + '</button>' +
          '<span class="play-title">📖 Lekcja · Etap ' + (ls.si + 1) + ' · ' + esc(STAGES[ls.si].tag) + '</span>' +
        '</div>' +
        '<article class="lesson">' +
          '<h1>' + esc(ls.t) + '</h1>' +
          (ls.d ? '<p class="ls-lead">' + esc(ls.d) + '</p>' : '') +
          lessonBody(ls.body) +
        '</article>' +
        '<section class="lesson-end">' +
          (ls.practice.length ? '<h2>✏️ Przećwicz to</h2><div class="grid">' + ls.practice.map(id => tileHTML(BY_ID[id], false)).join('') + '</div>' : '') +
          '<div class="res-actions">' +
            '<button class="btn primary big" data-act="close">Gotowe ✓</button>' +
            (nextLs ? '<button class="btn soft" data-act="next-lesson">Następna lekcja: ' + esc(nextLs.t) + ' ›</button>' : '') +
          '</div>' +
        '</section>' +
      '</div>';
    window.scrollTo(0, 0);
    $('.lesson-screen', app).addEventListener('click', e => {
      const t = e.target.closest('[data-lv]');
      if (t) { openLevel(BY_ID[t.getAttribute('data-lv')]); return; }
      const b = e.target.closest('[data-act]');
      if (!b) return;
      const act = b.getAttribute('data-act');
      if (act === 'close') goHome();
      else if (act === 'next-lesson') openLesson(nextLs, false);
    });
  }

  function openSettings() {
    const s = S.settings;
    const seg = (name, val, label) => '<button class="seg-btn' + (s[name] === val ? ' on' : '') + '" data-act="set" data-k="' + name + '" data-v="' + val + '">' + label + '</button>';
    const el = openSheet(
      '<h2 class="sheet-title">Ustawienia</h2>' +
      '<label class="set-row"><span>Czytaj słowa na głos automatycznie</span><input type="checkbox" class="switch" id="set-auto"' + (s.auto ? ' checked' : '') + '></label>' +
      (L.translit ? '<label class="set-row"><span>Pokazuj wymowę polskimi literami</span><input type="checkbox" class="switch" id="set-tl"' + (s.translit ? ' checked' : '') + '></label>' : '') +
      (L.voices.length > 1 ? '<div class="set-row"><span>Akcent</span><div class="seg">' + L.voices.map(v => seg('accent', v.code, v.label)).join('') + '</div></div>' : '') +
      '<div class="set-row"><span>Tempo mowy</span><div class="seg">' + seg('rate', 0.75, 'wolniej') + seg('rate', 0.9, 'normalnie') + '</div></div>' +
      (canSpeak() ? '<button class="btn soft wide" data-act="test">🔊 Wypróbuj głos</button>' +
          (AUDIO && L.audioCredit ? '<p class="muted small">' + esc(L.audioCredit) + '</p>' : '')
        : '<p class="note">' + (TTS && L.requireVoice ? 'Ta przeglądarka nie ma głosu dla tego języka, więc czytanie na głos jest wyłączone. Spróbuj w przeglądarce Edge, Safari albo na Androidzie.' : 'Ta przeglądarka nie obsługuje czytania na głos.') + '</p>') +
      '<hr>' +
      '<p class="muted small">Postępy (gwiazdki, błędy do powtórki, seria dni) zapisują się tylko w tej przeglądarce na tym urządzeniu.</p>' +
      '<button class="btn danger wide" data-act="reset">Wyzeruj postępy</button>',
      (act, b) => {
        if (act === 'set') {
          const k = b.getAttribute('data-k');
          let v = b.getAttribute('data-v');
          if (k === 'rate') v = parseFloat(v);
          S.settings[k] = v; save();
          $$('.seg-btn[data-k="' + k + '"]', sheetEl).forEach(x => x.classList.toggle('on', x === b));
          speak(L.sample);
        } else if (act === 'test') {
          speak(L.sample);
        } else if (act === 'reset') {
          if (window.confirm('Na pewno usunąć wszystkie postępy? Tego nie da się cofnąć.')) {
            S = freshState(S.settings); save();
            closeSheet(); homeScroll = 0; renderHome();
          }
        }
      }
    );
    $('#set-auto', el).addEventListener('change', e => { S.settings.auto = e.target.checked; save(); });
    const tlBox = $('#set-tl', el);
    if (tlBox) tlBox.addEventListener('change', e => { S.settings.translit = e.target.checked; save(); });
  }

  /* ---------------- quiz ---------------- */
  function modeFor(it) {
    if (it.lv.k === 'f') return 'fill';
    if (it.lv.k === 'o') {
      let mo = pick(it.lv.ex);
      if (mo === 'listen' && !canSpeak()) mo = 'en2pl';
      return mo;
    }
    if (it.lv.k === 'm') return 'meaning';
    let m = pick(it.lv.ex);
    if (m === 'listen' && !canSpeak()) m = 'en2pl';
    return m;
  }
  function newSession(items, lv, review) {
    return { lv: lv, review: review, list: items.map(it => ({ it: it, mode: modeFor(it), tries: 0 })), idx: 0, ok: 0, total: items.length, missed: [], answered: false, at: 0 };
  }
  function startQuiz(lv, push) {
    if (push) pushScreen();
    Q = newSession(shuffle(lv.items), lv, false);
    renderQ();
  }
  function startReview(push) {
    const items = shuffle(mistakeList()).slice(0, 20);
    if (!items.length) { goHome(); return; }
    if (push) pushScreen();
    Q = newSession(items, null, true);
    renderQ();
  }

  const promptHTML = t => '<p class="prompt">' + esc(t) + '</p>';
  function wordCard(em, text, say) {
    return '<div class="q-card">' + (em ? '<div class="q-emoji">' + esc(em) + '</div>' : '') +
      '<div class="q-word' + (text.length > 24 ? ' long' : '') + '">' + esc(text) + '</div>' +
      (say ? tl(text) + spkBtn(say) : '') + '</div>';
  }

  function renderQ() {
    const q = Q.list[Q.idx];
    Q.cur = q; Q.answered = false;
    keyHandler = null;
    const title = Q.review ? '🔁 Powtórka błędów' : Q.lv.num + '. ' + Q.lv.t;
    app.innerHTML =
      '<div class="play">' +
        '<div class="play-top">' +
          '<button class="icon-btn" data-act="close" aria-label="Zakończ ćwiczenie">' + icon('close') + '</button>' +
          '<div class="bar"><i style="width:' + (Q.idx / Q.list.length * 100) + '%"></i></div>' +
          '<span class="counter">' + (Q.idx + 1) + '/' + Q.list.length + '</span>' +
        '</div>' +
        '<div class="play-title">' + esc(title) + (q.tries ? ' <span class="again-tag">↻ jeszcze raz</span>' : '') + '</div>' +
        '<div class="play-main pop" id="qm"></div>' +
      '</div>' +
      '<div class="feedback" id="fb" aria-live="polite"></div>';
    window.scrollTo(0, 0);
    $('[data-act=close]', app).addEventListener('click', goHome);
    MODES[q.mode](q, $('#qm'));
  }

  function vocabOpts(it, field) {
    const show = x => field === 'en' ? enShow(x) : x.pl;
    const right = show(it);
    // bez synonimów: odrzucamy elementy o tym samym tłumaczeniu
    const usable = x => x !== it && show(x) !== right && x.pl !== it.pl && x.en !== it.en;
    let pool = it.lv.items.filter(usable);
    if (pool.length < 3) {
      const i = LEVELS.indexOf(it.lv);
      const k = it.lv.k;
      const other = LEVELS[i - 1] && LEVELS[i - 1].k === k ? LEVELS[i - 1] : LEVELS[i + 1];
      if (other && other.k === k) pool = pool.concat(other.items.filter(usable));
    }
    const seen = new Set([right]), out = [];
    for (const x of shuffle(pool)) {
      const s = show(x);
      if (!seen.has(s)) { seen.add(s); out.push(s); }
      if (out.length === 3) break;
    }
    return shuffle([right].concat(out));
  }

  function choice(el, options, correct, done, foreign) {
    const box = $('.options', el);
    box.innerHTML = options.map((o, i) => '<button class="opt" data-i="' + i + '"><kbd>' + (i + 1) + '</kbd><span>' + esc(o) + (foreign ? tl(o) : '') + '</span></button>').join('');
    if (options.length === 4 && options.every(o => o.length <= 16)) box.classList.add('two');
    const btns = $$('.opt', box);
    const choose = i => {
      if (Q.answered || !btns[i]) return;
      const ok = options[i] === correct;
      btns.forEach((b, j) => {
        b.disabled = true;
        if (options[j] === correct) b.classList.add('correct');
        else if (j === i) b.classList.add('wrong');
        else b.classList.add('dim');
      });
      record(ok);
      done(ok);
    };
    btns.forEach((b, i) => b.addEventListener('click', () => choose(i)));
    keyHandler = e => {
      if (Q.answered) { quizNextKey(e); return; }
      const n = parseInt(e.key, 10);
      if (n >= 1 && n <= btns.length) { e.preventDefault(); choose(n - 1); }
    };
  }

  function record(ok) {
    const q = Q.cur;
    Q.answered = true;
    Q.at = Date.now();
    if (!q.tries) {
      if (ok) { Q.ok++; delete S.mistakes[q.it.key]; }
      else Q.missed.push(q.it);
    }
    if (!ok) {
      S.mistakes[q.it.key] = 1;
      if (q.tries < 2) Q.list.push({ it: q.it, mode: q.mode, tries: q.tries + 1 });
      if (navigator.vibrate && (!navigator.userActivation || navigator.userActivation.hasBeenActive)) { try { navigator.vibrate(60); } catch (e) { /* */ } }
    }
    save();
  }

  function feedback(ok, o) {
    o = o || {};
    const fb = $('#fb');
    let body = '<strong class="fb-title">' + (ok ? (o.typo ? 'Prawie idealnie!' : pick(PRAISE)) : 'Niestety nie…') + '</strong>';
    if (!ok && o.answer) body += '<div class="fb-line">Poprawnie: <b>' + esc(o.answer) + '</b>' + (o.foreign ? tl(o.answer) : '') + '</div>';
    if (o.typo) body += '<div class="fb-line">Uważaj na pisownię: <b>' + esc(o.typo) + '</b></div>';
    if (o.extra) body += '<div class="fb-line">' + esc(o.extra) + '</div>';
    if (o.tip) body += '<div class="fb-tip">💡 ' + esc(o.tip) + '</div>';
    fb.innerHTML = '<div class="fb-inner"><div class="fb-body"><span class="fb-icon" aria-hidden="true">' + (ok ? '✓' : '✗') + '</span><div>' + body + '</div></div>' +
      '<button class="btn ' + (ok ? 'ok' : 'bad') + ' fb-next">Dalej</button></div>';
    fb.className = 'feedback show ' + (ok ? 'ok' : 'bad');
    const nb = $('.fb-next', fb);
    nb.addEventListener('click', nextQ);
    setTimeout(() => { try { nb.focus({ preventScroll: true }); } catch (e) { /* */ } }, 30);
    keyHandler = quizNextKey;
  }

  function quizNextKey(e) {
    if ((e.key === 'Enter' || e.key === ' ') && !isButtonFocused()) { e.preventDefault(); nextQ(); }
  }
  function nextQ() {
    if (!Q || !Q.answered || Date.now() - Q.at < 350) return;
    Q.idx++;
    if (Q.idx >= Q.list.length) renderResult();
    else renderQ();
  }

  /* --- typed answers --- */
  function normWord(s) {
    s = s.toLowerCase()
      .replace(/[’‘`´ʼ]/g, "'")
      .replace(/[.,!?;:"„”«»()]/g, ' ')
      .trim();
    if (L.strip) s = s.replace(L.strip, '');
    return s.replace(/[\s'-]+/g, '');
  }
  function lev(a, b) {
    if (Math.abs(a.length - b.length) > 1) return 2;
    const dp = [];
    for (let j = 0; j <= b.length; j++) dp[j] = j;
    for (let i = 1; i <= a.length; i++) {
      let prev = dp[0]; dp[0] = i;
      for (let j = 1; j <= b.length; j++) {
        const tmp = dp[j];
        dp[j] = Math.min(dp[j] + 1, dp[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
        prev = tmp;
      }
    }
    return dp[b.length];
  }
  function checkTyped(input, it) {
    const v = normWord(input);
    if (!v) return 'bad';
    const alts = it.en.split('/').map(normWord);
    if (alts.indexOf(v) >= 0) return 'ok';
    if (!it.lv.strict && alts.some(a => a.length >= 4 && lev(a, v) <= 1)) return 'typo';
    return 'bad';
  }

  /* --- sentence ordering --- */
  const normSent = s => s.toLowerCase().replace(/[’‘ʼ]/g, "'").replace(/[.,!?;:«»—–]/g, '').replace(/\s+/g, ' ').trim();
  function tilesFor(s) {
    const w = s.replace(/[.,!?;:«»]/g, '').split(/\s+/).filter(x => x && x !== '—' && x !== '–');
    if (w.length && !(L.keepFirst && L.keepFirst.test(w[0]))) w[0] = w[0].charAt(0).toLowerCase() + w[0].slice(1);
    return w;
  }

  const MODES = {
    en2pl(q, el) {
      const it = q.it;
      el.innerHTML = promptHTML('Co to znaczy?') + wordCard(it.em, enShow(it), sayText(it)) + '<div class="options"></div>';
      autoSay(sayText(it));
      choice(el, vocabOpts(it, 'pl'), it.pl, ok => feedback(ok, { answer: it.pl }));
    },

    pl2en(q, el) {
      const it = q.it;
      el.innerHTML = promptHTML(it.lv.qp || 'Jak to powiedzieć ' + L.inLang + '?') + wordCard(it.em, it.pl) + '<div class="options"></div>';
      choice(el, vocabOpts(it, 'en'), enShow(it), ok => {
        autoSay(sayText(it));
        feedback(ok, { answer: enShow(it), foreign: true });
      }, true);
    },

    listen(q, el) {
      const it = q.it, t = sayText(it);
      el.innerHTML = promptHTML('Posłuchaj i wybierz tłumaczenie') +
        '<div class="q-card listen">' +
          '<button class="big-spk" data-say="' + esc(t) + '" aria-label="Odtwórz nagranie">' + icon('speaker', 44) + '</button>' +
          '<button class="slow-btn" data-say="' + esc(t) + '" data-slow>🐢 wolniej</button>' +
          '<div class="reveal" hidden>' + (it.em ? '<span class="q-emoji sm">' + esc(it.em) + '</span>' : '') + '<span class="q-word">' + esc(enShow(it)) + '</span>' + tl(enShow(it)) + '</div>' +
        '</div>' +
        '<div class="options"></div>';
      speak(t);
      choice(el, vocabOpts(it, 'pl'), it.pl, ok => {
        const r = $('.reveal', el); if (r) r.hidden = false;
        feedback(ok, { answer: it.pl, extra: enShow(it) + ' = ' + it.pl });
      });
    },

    type(q, el) {
      const it = q.it;
      const target = it.en.split('/')[0];
      let hints = 0;
      el.innerHTML = promptHTML(it.lv.qp || 'Napisz ' + L.inLang + ':') + wordCard(it.em, it.pl) +
        '<div class="type-box">' +
          '<input class="answer-input" id="ans" type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" enterkeyhint="done"' +
            (L.keyboard ? ' inputmode="none"' : '') + ' placeholder="Wpisz ' + L.inLang + '…" aria-label="Twoja odpowiedź">' +
          '<div class="hint-line" id="hint" aria-live="polite"></div>' +
          (L.keyboard ? keyboardHTML() : '') +
          '<div class="type-actions">' +
            '<button class="btn ghost" data-act="hint">💡 Podpowiedź</button>' +
            '<button class="btn ghost" data-act="skip">Nie wiem</button>' +
            '<button class="btn primary" data-act="check">Sprawdź</button>' +
          '</div>' +
        '</div>';
      const inp = $('#ans', el), hintEl = $('#hint', el);
      const kb = $('.kb', el);
      if (kb) {
        kb.addEventListener('mousedown', e => e.preventDefault()); // pole tekstowe nie traci kursora
        kb.addEventListener('click', e => {
          const b = e.target.closest('[data-k]');
          if (!b || Q.answered) return;
          const k = b.getAttribute('data-k');
          const s = inp.selectionStart == null ? inp.value.length : inp.selectionStart;
          const en = inp.selectionEnd == null ? s : inp.selectionEnd;
          if (k === 'bs') inp.setRangeText('', s === en ? Math.max(0, s - 1) : s, en, 'end');
          else inp.setRangeText(k, s, en, 'end');
          inp.classList.remove('shake');
        });
      }
      const showHint = () => {
        hints = Math.min(hints + 1, Math.max(1, target.replace(/\s/g, '').length - 1));
        let shown = 0;
        hintEl.innerHTML = target.split('').map(c => {
          if (c === ' ') return '<span class="gap"></span>';
          shown++;
          return '<span class="hl">' + (shown <= hints ? esc(c) : '_') + '</span>';
        }).join('');
        inp.focus();
      };
      const finish = res => {
        if (Q.answered) return;
        inp.disabled = true; inp.blur();
        $$('.type-actions .btn', el).forEach(b => { b.disabled = true; });
        const ok = res === 'ok' || res === 'typo';
        inp.classList.add(ok ? 'ok' : 'bad');
        record(ok);
        autoSay(sayText(it));
        feedback(ok, { answer: enShow(it), typo: res === 'typo' ? enShow(it) : '', foreign: true });
      };
      const check = () => {
        if (!inp.value.trim()) { inp.focus(); inp.classList.remove('shake'); void inp.offsetWidth; inp.classList.add('shake'); return; }
        finish(checkTyped(inp.value, it));
      };
      inp.addEventListener('keydown', e => {
        if (e.key === 'Enter') { e.preventDefault(); e.stopPropagation(); check(); }
      });
      $('.type-actions', el).addEventListener('click', e => {
        const b = e.target.closest('[data-act]');
        if (!b || Q.answered) return;
        const a = b.getAttribute('data-act');
        if (a === 'hint') showHint();
        else if (a === 'skip') finish('bad');
        else if (a === 'check') check();
      });
      keyHandler = e => { if (Q.answered) quizNextKey(e); };
      try { inp.focus({ preventScroll: true }); } catch (e) { inp.focus(); }
    },

    fill(q, el) {
      const it = q.it;
      el.innerHTML = promptHTML('Uzupełnij zdanie') +
        '<div class="q-card"><div class="sentence" id="sent">' + sentenceHTML(it) + '</div>' + tl(it.s.replace(/\{[^}]+\}/, '___')) + '<div class="q-pl">' + esc(it.pl) + '</div></div>' +
        '<div class="options"></div>';
      choice(el, shuffle([it.ans].concat(it.opts)), it.ans, ok => {
        $('#sent', el).innerHTML = sentenceHTML(it, ok ? 'ok' : 'fix') + ' ' + spkBtn(sayText(it), 'inline');
        autoSay(sayText(it));
        feedback(ok, { answer: it.full, tip: it.tip, foreign: true });
      }, true);
    },

    order(q, el) {
      const it = q.it;
      const words = tilesFor(it.en);
      let order = shuffle(words.map((w, i) => i));
      for (let k = 0; k < 6 && words.length > 2 && order.every((v, i) => words[v] === words[i]); k++) order = shuffle(order);
      const placed = [];
      el.innerHTML = promptHTML('Ułóż zdanie ' + L.inLang) +
        '<div class="q-card"><div class="q-word mid">' + esc(it.pl) + '</div></div>' +
        '<div class="zone" id="zone" aria-label="Twoje zdanie"></div>' +
        '<div class="bank" id="bank"></div>' +
        '<button class="btn primary wide" id="chk" disabled>Sprawdź</button>';
      const zone = $('#zone', el), bank = $('#bank', el), chk = $('#chk', el);
      const draw = () => {
        zone.innerHTML = placed.length
          ? placed.map((ti, p) => '<button class="tile" data-p="' + p + '">' + esc(words[ti]) + '</button>').join('')
          : '<span class="zone-ph">Stukaj w słowa poniżej…</span>';
        bank.innerHTML = order.map(ti => {
          const used = placed.indexOf(ti) >= 0;
          return '<button class="tile' + (used ? ' used' : '') + '" data-t="' + ti + '"' + (used ? ' disabled tabindex="-1"' : '') + '>' + esc(words[ti]) + '</button>';
        }).join('');
        chk.disabled = placed.length !== words.length;
      };
      draw();
      zone.addEventListener('click', e => {
        const b = e.target.closest('[data-p]');
        if (!b || Q.answered) return;
        placed.splice(+b.getAttribute('data-p'), 1);
        draw();
      });
      bank.addEventListener('click', e => {
        const b = e.target.closest('[data-t]');
        if (!b || Q.answered) return;
        const ti = +b.getAttribute('data-t');
        if (placed.indexOf(ti) < 0) { placed.push(ti); draw(); }
      });
      const check = () => {
        if (Q.answered || placed.length !== words.length) return;
        const built = placed.map(i => words[i]).join(' ');
        const ok = [it.en].concat(it.alts).some(t => normSent(t) === normSent(built));
        zone.classList.add(ok ? 'ok' : 'bad');
        chk.disabled = true;
        $$('.tile', el).forEach(b => { b.disabled = true; });
        record(ok);
        autoSay(it.en);
        feedback(ok, { answer: it.en, foreign: true });
      };
      chk.addEventListener('click', check);
      keyHandler = e => {
        if (Q.answered) { quizNextKey(e); return; }
        if (e.key === 'Backspace' && placed.length) { e.preventDefault(); placed.pop(); draw(); }
        else if (e.key === 'Enter') { e.preventDefault(); check(); }
      };
    },

    meaning(q, el) {
      const it = q.it;
      el.innerHTML = promptHTML(it.lv.qp || 'Co naprawdę znaczy to słowo?') + wordCard('', it.en, it.en) + '<div class="options"></div>';
      autoSay(it.en);
      choice(el, shuffle([it.pl].concat(it.opts)), it.pl, ok => feedback(ok, { answer: it.pl, tip: it.tip }));
    }
  };

  function missedLine(it) {
    if (it.lv.k === 'f') return '<span>' + esc(it.full) + ' <span class="muted">– ' + esc(it.pl) + '</span></span>' + spkBtn(sayText(it), 'sm');
    const en = it.lv.k === 'v' ? enShow(it) : it.en;
    return '<span><b>' + esc(en) + '</b> <span class="muted">– ' + esc(it.pl) + '</span></span>' + spkBtn(sayText(it), 'sm');
  }

  function renderResult() {
    const pct = Q.total ? Q.ok / Q.total : 0;
    const stars = pct >= 0.9 ? 3 : pct >= 0.7 ? 2 : pct >= 0.5 ? 1 : 0;
    touchStreak();
    let improved = false;
    if (!Q.review && stars > levelStars(Q.lv)) { S.stars[Q.lv.id] = stars; improved = true; }
    save();
    const lv = Q.lv;
    const nextLv = lv ? LEVELS[lv.num] : null;
    const heads = [['💪', 'Spróbuj jeszcze raz'], ['👍', 'Nieźle!'], ['🎉', 'Bardzo dobrze!'], ['🏆', 'Perfekcyjnie!']];
    const head = Q.review ? ['🔁', 'Powtórka zakończona!'] : heads[stars];
    const missed = Q.missed.filter((x, i, a) => a.indexOf(x) === i);
    const left = mistakeList().length;

    let actions = '';
    if (!Q.review) {
      if (stars > 0 && nextLv) actions += '<button class="btn primary big" data-act="nextlv">Następny poziom → <span class="ellip">' + nextLv.num + '. ' + esc(nextLv.t) + '</span></button>';
      if (stars === 0) actions += '<button class="btn primary big" data-act="flash">📇 Najpierw fiszki</button>';
      actions += '<button class="btn soft" data-act="retry">↻ Jeszcze raz</button>';
    } else if (left) {
      actions += '<button class="btn primary big" data-act="review">🔁 Powtarzaj dalej</button>';
    }
    actions += '<button class="btn ghost" data-act="home">Menu</button>';

    app.innerHTML =
      '<div class="play result-screen">' +
        '<div class="play-top"><button class="icon-btn" data-act="home" aria-label="Wróć do menu">' + icon('close') + '</button><div class="bar"><i style="width:100%"></i></div></div>' +
        '<div class="result pop">' +
          '<div class="res-emoji">' + head[0] + '</div>' +
          '<h2>' + head[1] + '</h2>' +
          (Q.review ? '' : starsHTML(stars, 'xl')) +
          '<p class="res-score"><b>' + Q.ok + '</b> z <b>' + Q.total + '</b> dobrze za pierwszym razem (' + Math.round(pct * 100) + '%)</p>' +
          (improved && stars ? '<p class="res-note">Nowy rekord na tym poziomie! ⭐</p>' : '') +
          (!Q.review && stars === 0 ? '<p class="muted">Gwiazdkę dostajesz od 50% poprawnych odpowiedzi. Przejrzyj fiszki i spróbuj ponownie – dasz radę!</p>' : '') +
          (!Q.review && stars > 0 && !nextLv ? '<p class="res-note">To był ostatni poziom. Gratulacje – przeszedłeś cały kurs! 🎓</p>' : '') +
          (Q.review ? '<p class="muted">' + (left ? 'Pozostało do powtórki: ' + left + '.' : 'Wszystkie błędy poprawione! 🎉') + '</p>' : '') +
          (missed.length ? '<div class="missed"><h3>Warto powtórzyć</h3><ul>' + missed.map(it => '<li>' + missedLine(it) + '</li>').join('') + '</ul></div>' : '') +
          '<div class="res-actions">' + actions + '</div>' +
        '</div>' +
      '</div>';
    window.scrollTo(0, 0);

    app.querySelector('.result-screen').addEventListener('click', e => {
      const b = e.target.closest('[data-act]');
      if (!b) return;
      const a = b.getAttribute('data-act');
      if (a === 'home') goHome();
      else if (a === 'retry') startQuiz(lv, false);
      else if (a === 'flash') startFlash(lv, false);
      else if (a === 'review') startReview(false);
      else if (a === 'nextlv') openLevel(nextLv);
    });
    keyHandler = e => {
      if (e.key === 'Enter' && !isButtonFocused()) {
        const p = $('.res-actions .btn', app);
        if (p) { e.preventDefault(); p.click(); }
      }
    };
  }

  /* ---------------- flashcards ---------------- */
  function startFlash(lv, push) {
    if (push) pushScreen();
    F = { lv: lv, deck: lv.items.slice(), known: 0, total: lv.items.length, rev: false };
    renderCard();
  }

  function faces(it, rev) {
    const lang = l => '<span class="lang">' + l + '</span>';
    const em = it.em ? '<div class="f-emoji">' + esc(it.em) + '</div>' : '';
    const k = it.lv.k;
    if (k === 'v') {
      const enSide = { html: lang(L.short) + em + '<div class="f-word">' + esc(enShow(it)) + '</div>' + tl(enShow(it)) + spkBtn(sayText(it)), say: sayText(it) };
      const plSide = { html: lang('PL') + em + '<div class="f-word">' + esc(it.pl) + '</div>', say: '' };
      const plFirst = !!it.lv.flip !== !!rev;
      if (plFirst) {
        enSide.html += '<div class="f-sub">' + esc(it.pl) + '</div>';
        return { front: plSide, back: enSide };
      }
      plSide.html += '<div class="f-sub">' + esc(enShow(it)) + '</div>';
      return { front: enSide, back: plSide };
    }
    if (k === 'm') {
      const enSide = { html: lang(L.short) + '<div class="f-word">' + esc(it.en) + '</div>' + tl(it.en) + spkBtn(it.en), say: it.en };
      const plSide = { html: lang('PL') + '<div class="f-word">' + esc(it.pl) + '</div>' + (it.tip ? '<div class="f-tip">⚠️ ' + esc(it.tip) + '</div>' : ''), say: '' };
      if (rev) { enSide.html += '<div class="f-sub">' + esc(it.pl) + '</div>'; return { front: plSide, back: enSide }; }
      return { front: enSide, back: plSide };
    }
    if (k === 'f') {
      return {
        front: { html: lang('Uzupełnij') + '<div class="f-sent">' + sentenceHTML(it) + '</div>' + tl(it.s.replace(/\{[^}]+\}/, '___')) + '<div class="f-sub">' + esc(it.pl) + '</div>', say: '' },
        back: { html: lang(L.short) + '<div class="f-sent">' + sentenceHTML(it, 'ok') + '</div>' + tl(it.full) + '<div class="f-sub">' + esc(it.pl) + '</div>' + spkBtn(sayText(it)) + (it.tip ? '<div class="f-tip">💡 ' + esc(it.tip) + '</div>' : ''), say: sayText(it) }
      };
    }
    return {
      front: { html: lang('PL') + '<div class="f-sent">' + esc(it.pl) + '</div><div class="f-sub">Jak to powiesz ' + esc(L.inLang) + '?</div>', say: '' },
      back: { html: lang(L.short) + '<div class="f-sent">' + esc(it.en) + '</div>' + tl(it.en) + spkBtn(it.en) + '<div class="f-sub">' + esc(it.pl) + '</div>', say: it.en }
    };
  }

  function renderCard() {
    if (!F.deck.length) { renderFlashDone(); return; }
    const it = F.deck[0];
    const fc = faces(it, F.rev);
    F.flipped = false; F.seenBack = false; F.busy = false;
    const canRev = F.lv.k === 'v' || F.lv.k === 'm';
    app.innerHTML =
      '<div class="play flash">' +
        '<div class="play-top">' +
          '<button class="icon-btn" data-act="close" aria-label="Zamknij fiszki">' + icon('close') + '</button>' +
          '<div class="bar"><i style="width:' + (F.known / F.total * 100) + '%"></i></div>' +
          '<span class="counter" title="Umiem">' + F.known + '/' + F.total + '</span>' +
          (canRev ? '<button class="icon-btn' + (F.rev ? ' on' : '') + '" data-act="rev" aria-label="Zmień kierunek (PL ⇄ EN)" title="Zmień kierunek (PL ⇄ EN)">' + icon('swap') + '</button>' : '') +
        '</div>' +
        '<div class="play-title">📇 ' + esc(F.lv.num + '. ' + F.lv.t) + '</div>' +
        '<div class="flash-main">' +
          '<div class="fwrap enter" id="fwrap">' +
            '<div class="fcard" id="fcard">' +
              '<div class="face front">' + fc.front.html + '</div>' +
              '<div class="face back">' + fc.back.html + '</div>' +
            '</div>' +
          '</div>' +
          '<p class="hint"><span class="touch-only">Stuknij kartę, aby ją odwrócić · przesuń w prawo = umiem, w lewo = jeszcze nie</span>' +
          '<span class="mouse-only">Kliknij kartę lub naciśnij spację · → umiem · ← jeszcze nie</span></p>' +
        '</div>' +
        '<div class="flash-actions" id="fact"></div>' +
      '</div>';
    window.scrollTo(0, 0);

    const wrap = $('#fwrap'), card = $('#fcard'), fact = $('#fact');
    const drawActions = () => {
      fact.innerHTML = F.seenBack
        ? '<button class="btn bad-soft" data-act="again">😕 Jeszcze nie</button><button class="btn ok" data-act="know">😊 Umiem</button>'
        : '<button class="btn primary wide" data-act="flip">Pokaż odpowiedź</button>';
    };
    const flip = () => {
      F.flipped = !F.flipped;
      card.classList.toggle('flipped', F.flipped);
      if (F.flipped && !F.seenBack) { F.seenBack = true; drawActions(); }
      const side = F.flipped ? fc.back : fc.front;
      if (side.say) autoSay(side.say);
    };
    const answer = kind => {
      if (F.busy || !F.seenBack) return;
      F.busy = true;
      const cur = F.deck.shift();
      if (kind === 'know') F.known++;
      else F.deck.splice(Math.min(3, F.deck.length), 0, cur);
      const dir = kind === 'know' ? 1 : -1;
      wrap.classList.remove('enter');
      wrap.style.transition = 'transform .22s ease-in, opacity .22s ease-in';
      wrap.style.transform = 'translateX(' + (dir * 110) + '%) rotate(' + (dir * 8) + 'deg)';
      wrap.style.opacity = '0';
      setTimeout(renderCard, 200);
    };
    drawActions();
    if (fc.front.say) autoSay(fc.front.say);

    fact.addEventListener('click', e => {
      const b = e.target.closest('[data-act]');
      if (!b) return;
      const a = b.getAttribute('data-act');
      if (a === 'flip') flip();
      else answer(a);
    });
    $('.play-top', app).addEventListener('click', e => {
      const b = e.target.closest('[data-act]');
      if (!b) return;
      if (b.getAttribute('data-act') === 'close') goHome();
      else if (b.getAttribute('data-act') === 'rev') { F.rev = !F.rev; renderCard(); }
    });

    // dotknięcie = odwróć, przesunięcie = umiem / jeszcze nie
    let sx = 0, sy = 0, dx = 0, down = false, moved = false;
    wrap.addEventListener('pointerdown', e => {
      if (e.target.closest('.spk') || (e.pointerType === 'mouse' && e.button !== 0)) return;
      down = true; moved = false; sx = e.clientX; sy = e.clientY; dx = 0;
      wrap.style.transition = 'none';
    });
    wrap.addEventListener('pointermove', e => {
      if (!down) return;
      dx = e.clientX - sx;
      const dy = e.clientY - sy;
      if (!moved && (Math.abs(dx) > 10 || Math.abs(dy) > 10)) {
        moved = true;
        if (Math.abs(dy) > Math.abs(dx)) { down = false; wrap.style.transition = ''; return; }
        try { wrap.setPointerCapture(e.pointerId); } catch (err) { /* */ }
      }
      if (moved && F.seenBack) {
        wrap.style.transform = 'translateX(' + dx + 'px) rotate(' + (dx / 25) + 'deg)';
        wrap.setAttribute('data-dir', dx > 50 ? 'know' : dx < -50 ? 'again' : '');
      }
    });
    const endDrag = cancel => {
      if (!down) return;
      down = false;
      wrap.style.transition = '';
      if (!cancel && !moved) { flip(); return; }
      if (!cancel && F.seenBack && Math.abs(dx) > 90) { answer(dx > 0 ? 'know' : 'again'); return; }
      wrap.style.transform = '';
      wrap.removeAttribute('data-dir');
    };
    wrap.addEventListener('pointerup', () => endDrag(false));
    wrap.addEventListener('pointercancel', () => endDrag(true));

    keyHandler = e => {
      if (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        if ((e.key === ' ' || e.key === 'Enter') && isButtonFocused()) return;
        e.preventDefault(); flip();
      } else if (e.key === 'ArrowRight') { e.preventDefault(); answer('know'); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); answer('again'); }
    };
  }

  function renderFlashDone() {
    touchStreak();
    const lv = F.lv;
    app.innerHTML =
      '<div class="play result-screen">' +
        '<div class="play-top"><button class="icon-btn" data-act="home" aria-label="Wróć do menu">' + icon('close') + '</button><div class="bar"><i style="width:100%"></i></div></div>' +
        '<div class="result pop">' +
          '<div class="res-emoji">🎉</div>' +
          '<h2>Fiszki przerobione!</h2>' +
          '<p class="res-score">Umiesz już wszystkie ' + F.total + ' ' + plural(F.total, 'fiszkę', 'fiszki', 'fiszek') + ' z poziomu „' + esc(lv.t) + '”.</p>' +
          '<p class="muted">Teraz sprawdź się w ćwiczeniach i zdobądź gwiazdki.</p>' +
          '<div class="res-actions">' +
            '<button class="btn primary big" data-act="quiz">✏️ Ćwiczenia</button>' +
            '<button class="btn soft" data-act="again">📇 Jeszcze raz</button>' +
            '<button class="btn ghost" data-act="home">Menu</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    window.scrollTo(0, 0);
    app.querySelector('.result-screen').addEventListener('click', e => {
      const b = e.target.closest('[data-act]');
      if (!b) return;
      const a = b.getAttribute('data-act');
      if (a === 'home') goHome();
      else if (a === 'quiz') startQuiz(lv, false);
      else if (a === 'again') startFlash(lv, false);
    });
    keyHandler = e => {
      if (e.key === 'Enter' && !isButtonFocused()) { e.preventDefault(); startQuiz(lv, false); }
    };
  }

  /* ---------------- start ---------------- */
  if (history.state && history.state.screen) { try { history.replaceState(null, ''); } catch (e) { /* */ } }
  renderHome();
})();
