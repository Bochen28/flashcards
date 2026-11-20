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
    home: '../', strip: /^(to|a|an|the)\s+/, keepFirst: /^I($|')/, requireVoice: false, translit: null, keyboard: null
  }, window.LANG || {});
  const STORE_KEY = L.storeKey;

  /* teksty interfejsu – domyślnie po polsku; window.UI (np. ui-uk.js) może je podmienić dla innego języka interfejsu */
  const T = Object.assign({
    native: 'PL', cards: 'fiszki', locale: 'pl-PL',
    plural: (n, one, few, many) => {
      if (n === 1) return one;
      const d = n % 10, h = n % 100;
      return d >= 2 && d <= 4 && !(h >= 12 && h <= 14) ? few : many;
    },
    kind: { v: 'Słówka', f: 'Gramatyka', o: 'Zdania', m: 'Znaczenia' },
    praise: ['Świetnie!', 'Brawo!', 'Dobrze!', 'Super!', 'Doskonale!', 'Tak jest!', 'Znakomicie!'],
    listen: 'Posłuchaj wymowy', specialKeys: 'Znaki specjalne', keyboard: 'Klawiatura', delLetter: 'Usuń literę', space: 'spacja',
    now: 'Teraz', lesson: 'Lekcja', read: '✓ przeczytana', settings: 'Ustawienia',
    levelsDone: 'ukończone poziomy', starsW: ['gwiazdka', 'gwiazdki', 'gwiazdek'], day: 'dzień', days: 'dni', inARow: ' z rzędu',
    exW: ['ćwiczenie', 'ćwiczenia', 'ćwiczeń'], inLevels: n => ' w ' + n + ' poziomach', lessonsW: ['lekcja', 'lekcje', 'lekcji'],
    tipLessons: '<b>📖 Lekcje</b> wyjaśniają zasady krok po kroku. ',
    tip: 'Każdy poziom ma <b>📇 fiszki</b> do nauki i <b>✏️ ćwiczenia</b>, za które zdobywasz gwiazdki. Poziomy idą od najłatwiejszych do coraz trudniejszych.',
    cont: 'Kontynuuj', start: 'Zacznij', review: '🔁 Powtórka', levelsW: ['poziom', 'poziomy', 'poziomów'],
    foot: 'Postępy zapisują się automatycznie w tej przeglądarce.<br>Powodzenia! Good luck! 🍀',
    stage: 'Etap', elemW: ['element', 'elementy', 'elementów'], best: 'Twój najlepszy wynik', noStars: 'Jeszcze bez gwiazdek', lessonColon: 'Lekcja: ',
    flash: 'Fiszki', flashSub: 'poznaj i zapamiętaj', quiz: 'Ćwiczenia', quizSub: 'sprawdź się, zdobądź ★',
    closeLesson: 'Zamknij lekcję', practice: '✏️ Przećwicz to', done: 'Gotowe ✓', nextLesson: 'Następna lekcja: ',
    autoSpeak: 'Czytaj słowa na głos automatycznie', translit: 'Pokazuj wymowę polskimi literami', accent: 'Akcent',
    rate: 'Tempo mowy', slower: 'wolniej', normal: 'normalnie', testVoice: '🔊 Wypróbuj głos',
    noVoiceLang: 'Ta przeglądarka nie ma głosu dla tego języka, więc czytanie na głos jest wyłączone. Spróbuj w przeglądarce Edge, Safari albo na Androidzie.',
    noVoice: 'Ta przeglądarka nie obsługuje czytania na głos.',
    progressNote: 'Postępy (gwiazdki, powtórki, seria dni) zapisują się tylko w tej przeglądarce na tym urządzeniu.',
    reset: 'Wyzeruj postępy', resetAsk: 'Na pewno usunąć wszystkie postępy? Tego nie da się cofnąć.',
    endQuiz: 'Zakończ ćwiczenie', againTag: '↻ jeszcze raz', almost: 'Prawie idealnie!', wrong: 'Niestety nie…', correct: 'Poprawnie: ',
    spelling: 'Uważaj na pisownię: ', next: 'Dalej',
    whatMeans: 'Co to znaczy?', howSay: 'Jak to powiedzieć ', listenChoose: 'Posłuchaj i wybierz tłumaczenie', play: 'Odtwórz nagranie', slow: '🐢 wolniej',
    write: 'Napisz ', typeIn: 'Wpisz ', yourAnswer: 'Twoja odpowiedź', hint: '💡 Podpowiedź', dontKnow: 'Nie wiem', check: 'Sprawdź',
    fill: 'Uzupełnij zdanie', order: 'Ułóż zdanie ', yourSentence: 'Twoje zdanie', tapWords: 'Stukaj w słowa poniżej…', meaning: 'Co naprawdę znaczy to słowo?',
    heads: [['💪', 'Spróbuj jeszcze raz'], ['👍', 'Nieźle!'], ['🎉', 'Bardzo dobrze!'], ['🏆', 'Perfekcyjnie!']], reviewDone: 'Powtórka zakończona!',
    nextLevel: 'Następny poziom → ', flashFirst: '📇 Najpierw fiszki', retry: '↻ Jeszcze raz', reviewMore: '🔁 Powtarzaj dalej', menu: 'Menu', backMenu: 'Wróć do menu',
    score: (ok, total) => '<b>' + ok + '</b> z <b>' + total + '</b> dobrze za pierwszym razem',
    record: 'Nowy rekord na tym poziomie! ⭐',
    starRule: 'Gwiazdkę dostajesz od 50% poprawnych odpowiedzi. Przejrzyj fiszki i spróbuj ponownie – dasz radę!',
    lastLevel: 'To był ostatni poziom. Gratulacje – przeszedłeś cały kurs! 🎓', left: 'Pozostało do powtórki: ', allFixed: 'Na dziś wszystko powtórzone! 🎉',
    reviewToday: 'Powtórka na dziś', reviewFrom: 'z poprzednich dni', reviewGo: 'Powtórz', goOn: 'Albo ucz się dalej: ',
    worth: 'Warto powtórzyć', fillBadge: 'Uzupełnij', howSayIt: 'Jak to powiesz ', closeFlash: 'Zamknij fiszki', know: 'Umiem', switchDir: 'Zmień kierunek',
    hintTouch: 'Stuknij kartę, aby ją odwrócić · przesuń w prawo = umiem, w lewo = jeszcze nie',
    hintMouse: 'Kliknij kartę lub naciśnij spację · → umiem · ← jeszcze nie',
    notYet: '😕 Jeszcze nie', iKnow: '😊 Umiem', showAnswer: 'Pokaż odpowiedź', flashDone: 'Fiszki przerobione!',
    flashKnown: (n, w, title) => 'Umiesz już wszystkie ' + n + ' ' + w + ' z poziomu „' + title + '”.', flashW: ['fiszkę', 'fiszki', 'fiszek'],
    flashNext: 'Teraz sprawdź się w ćwiczeniach i zdobądź gwiazdki.', quizBtn: '✏️ Ćwiczenia', flashAgain: '📇 Jeszcze raz',
    starsAria: n => n + ' z 3 gwiazdek', gap: 'luka', allCourses: 'Wszystkie języki',
    search: 'Szukaj poziomu, lekcji albo słowa', searchNone: 'Nic nie znaleziono. Spróbuj innego słowa.',
    searchFound: (n, more) => 'Znaleziono: ' + n + (more ? ' (pokazuję pierwsze ' + more + ')' : ''),
    leaveTitle: 'Zakończyć ćwiczenie?', leaveText: 'Wynik tej rundy nie zostanie zapisany.', keepGoing: 'Ćwicz dalej', leave: 'Zakończ',
    autoNext: 'Po dobrej odpowiedzi przechodź dalej sam', theme: 'Motyw', themeAuto: 'jak system', themeLight: 'jasny', themeDark: 'ciemny',
    textSize: 'Wielkość tekstu', sizeNormal: 'zwykła', sizeLarge: 'duża', backup: 'Kopia postępów',
    backupNote: 'Zapisz postępy do pliku, żeby mieć kopię albo przenieść je do innej przeglądarki czy na inne urządzenie.',
    exportBtn: '⬇ Zapisz do pliku', importBtn: '⬆ Wczytaj z pliku', importOk: 'Postępy wczytane ✓',
    importBad: 'To nie jest plik z postępami tego kursu.', importAsk: 'Wczytać postępy z pliku? Obecne postępy w tym kursie zostaną zastąpione.',
    greetMorning: 'Dzień dobry!', greetDay: 'Cześć!', greetEvening: 'Dobry wieczór!', greetNight: 'Jeszcze nie śpisz? 🌙',
    subNew: 'Zacznij od krótkiej lekcji – to zajmie tylko kilka minut.', subBack: 'Miło cię znowu widzieć. Ruszamy dalej?',
    subStreak: 'Zrób dziś choć jedną rundę, żeby nie stracić serii 🔥', subGoal: 'Dzisiejszy cel zrobiony – brawo! Możesz ćwiczyć dalej albo odpocząć.',
    nextUp: 'Następny krok', answersToday: 'odpowiedzi dziś', courseProg: 'Postęp kursu', howTitle: 'Jak to działa?', hide: 'Ukryj',
    how: ['<b>Lekcje</b> tłumaczą zasady prostymi słowami.', '<b>Fiszki</b> pomagają poznać i zapamiętać nowe słowa.',
      '<b>Ćwiczenia</b> sprawdzają, co już umiesz – za dobre wyniki dostajesz gwiazdki ★.',
      '<b>Powtórki</b> wracają do słów po 1, 3, 7 dniach i dłużej – w samą porę, zanim je zapomnisz.', 'Ucz się codziennie po trochu – nawet 5 minut robi różnicę.'],
    goal: 'Dzienny cel (odpowiedzi)', goalDone: 'Cel na dziś osiągnięty! 🎉'
  }, window.UI || {});
  const KIND = T.kind;
  const PRAISE = T.praise;

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
  const plural = (n, one, few, many) => T.plural(n, one, few, many);
  const pluralW = (n, w) => T.plural(n, w[0], w[1], w[2]);
  const pad = n => String(n).padStart(2, '0');
  const dayStr = d => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  // numer dnia (lokalna data) – do terminów powtórek
  const dayNum = d => Math.round(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 864e5);
  const todayNum = () => dayNum(new Date());
  const isButtonFocused = () => document.activeElement && document.activeElement.tagName === 'BUTTON';

  const ICONS = {
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
    speaker: '<path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
    play: '<path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.4-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" fill="currentColor" stroke="none"/>',
    book: '<path d="M2 4.5h6a4 4 0 0 1 4 4V21a3 3 0 0 0-3-3H2z"/><path d="M22 4.5h-6a4 4 0 0 0-4 4V21a3 3 0 0 1 3-3h7z"/>',
    cards: '<rect x="3" y="7" width="13" height="14" rx="2.5"/><path d="M8 3h10.5A2.5 2.5 0 0 1 21 5.5V16"/>',
    pencil: '<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/>',
    repeat: '<path d="M3 12a9 9 0 1 0 2.64-6.36L3 8"/><path d="M3 3v5h5"/>',
    flame: '<path d="M12 22c3.9 0 7-2.7 7-6.8 0-3.6-2.4-6-3.8-9.7-.2-.5-.8-.6-1.1-.2C12.6 7.4 12 9 12 10.6c-.9-.7-1.6-1.8-1.9-3.1-.1-.5-.7-.7-1-.3C7.4 9.4 5 12 5 15.2 5 19.3 8.1 22 12 22z"/>',
    star: '<path d="M12 2.8l2.85 5.78 6.38.93-4.62 4.5 1.09 6.35L12 17.36l-5.7 3 1.09-6.35-4.62-4.5 6.38-.93z"/>',
    check: '<path d="M20 6L9 17l-5-5"/>',
    chev: '<path d="M9 6l6 6-6 6"/>',
    swap: '<path d="M17 2l4 4-4 4"/><path d="M3 11V9a3 3 0 0 1 3-3h15"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/>'
  };
  // tekst bez emoji na początku (gdy obok stoi ikona)
  const plain = t => String(t).replace(/^[^\p{L}\p{N}(]+/u, '');
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

  /* powtórki w odstępach: każde ćwiczenie dostaje termin następnej powtórki.
     Zapis: S.srs[skrót klucza] = [pudełko, dzień]. Pudełko 0 = błąd (powtórka od razu),
     a każda dobra odpowiedź w terminie przesuwa do następnego pudełka: 1, 3, 7, 16, 35, 90 dni. */
  const SRS_INT = [0, 1, 3, 7, 16, 35, 90];
  const SRS_SESSION = 20;
  const BY_HASH = {};
  const hashOf = it => it.h || (it.h = cyrb53(it.key).toString(36));
  LEVELS.forEach(lv => lv.items.forEach(it => { BY_HASH[hashOf(it)] = it; }));

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
  const fmt = n => n.toLocaleString(T.locale);
  const enShow = it => it.en.split('/').join(' / ');
  const sayText = it => it.lv.k === 'f' ? it.full.replace(/\s*→\s*/g, ', ') : (it.lv.k === 'v' ? it.en.split('/')[0] : it.en);
  function sentenceHTML(it, state) {
    const parts = it.s.split(/\{[^}]+\}/);
    const blank = state
      ? '<span class="blank filled ' + state + '">' + esc(it.ans) + '</span>'
      : '<span class="blank" aria-label="' + esc(T.gap) + '"> </span>';
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
      stars: {}, srs: {}, revDay: '', read: {}, streak: { last: '', n: 0 }, open: [], today: { d: '', n: 0 }, how: 0,
      settings: Object.assign({ auto: true, accent: L.voices[0].code, rate: 0.9, translit: true, autoNext: false, goal: 20 }, settings || {})
    };
  }
  function load() {
    let d = null;
    try { d = JSON.parse(localStorage.getItem(STORE_KEY) || 'null'); } catch (e) { d = null; }
    const s = freshState(d && d.settings);
    if (d) {
      s.stars = d.stars || {};
      s.read = d.read || {};
      s.streak = d.streak || s.streak;
      s.open = Array.isArray(d.open) ? d.open : [];
      if (d.today && d.today.d) s.today = d.today;
      s.how = d.how || 0;
      // postępy sprzed powtórek: ukończone poziomy wchodzą do powtórek rozłożone na 4 tygodnie, a stare błędy – na dziś
      s.srs = d.srs && typeof d.srs === 'object' ? d.srs : seedSrs(s.stars);
      s.revDay = d.revDay || '';
      const t = todayNum();
      Object.keys(d.mistakes || {}).forEach(k => { if (ITEMS[k]) s.srs[hashOf(ITEMS[k])] = [0, t]; });
    }
    Object.keys(s.srs).forEach(h => {
      const e = s.srs[h];
      if (!BY_HASH[h] || !Array.isArray(e) || typeof e[0] !== 'number' || typeof e[1] !== 'number') delete s.srs[h];
    });
    if (!L.voices.some(v => v.code === s.settings.accent)) s.settings.accent = L.voices[0].code;
    return s;
  }
  let S = load();
  function save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (e) { /* tryb prywatny itp. */ } }
  // strona wyboru języka zaznacza ostatnio używany kurs
  try { localStorage.setItem('fiszki-last', STORE_KEY); } catch (e) { /* */ }

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
  const todayCount = () => S.today && S.today.d === dayStr(new Date()) ? S.today.n : 0;
  // każda odpowiedź (ćwiczenie albo fiszka) liczy się do dziennego celu
  function bumpToday() {
    const d = dayStr(new Date()), goal = S.settings.goal || 20;
    if (!S.today || S.today.d !== d) S.today = { d: d, n: 0 };
    S.today.n++;
    if (S.today.n === goal) setTimeout(() => toast(T.goalDone), 500);
  }
  function seedSrs(stars) {
    const out = {}, t = todayNum();
    let n = 0;
    LEVELS.forEach(lv => {
      const st = stars[lv.id] || 0;
      if (st) lv.items.forEach(it => { out[hashOf(it)] = [st, t + 1 + (n++ % 28)]; });
    });
    return out;
  }
  // odpowiedź za pierwszym razem: błąd → powtórka dziś, dobrze → nowe ćwiczenie za 1 dzień,
  // a ćwiczenie w terminie idzie do następnego pudełka (dobrze przed terminem niczego nie zmienia)
  function srsAnswer(it, ok) {
    const h = hashOf(it), t = todayNum(), e = S.srs[h];
    if (!ok) S.srs[h] = [0, t];
    else if (!e) S.srs[h] = [1, t + 1];
    else if (e[1] <= t) { const b = Math.min(e[0] + 1, SRS_INT.length - 1); S.srs[h] = [b, t + SRS_INT[b]]; }
  }
  // fiszka „umiem” tylko dopisuje nowe słowo do powtórek (sprawdzą je dopiero ćwiczenia)
  function srsMeet(it) {
    const h = hashOf(it);
    if (!S.srs[h]) S.srs[h] = [1, todayNum() + 1];
  }
  // na dziś: najpierw najdłużej czekające, potem te z niższych pudełek
  function dueList() {
    const t = todayNum();
    return Object.keys(S.srs).filter(h => S.srs[h][1] <= t && BY_HASH[h])
      .sort((a, b) => S.srs[a][1] - S.srs[b][1] || S.srs[a][0] - S.srs[b][0])
      .map(h => BY_HASH[h]);
  }
  // czy czeka coś z wcześniejszych dni (nie tylko dzisiejsze błędy)
  const spacedDue = () => { const t = todayNum(); return Object.keys(S.srs).some(h => S.srs[h][0] > 0 && S.srs[h][1] <= t); };
  const countLabel = n => n > 99 ? '99+' : String(n);
  function continueLevel() {
    return LEVELS.find(l => levelStars(l) === 0) || LEVELS.find(l => levelStars(l) < 3) || LEVELS[LEVELS.length - 1];
  }
  function starsHTML(n, cls) {
    let h = '<span class="stars ' + (cls || '') + '" aria-label="' + esc(T.starsAria(n)) + '">';
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
  const spkBtn = (say, cls) => canSpeak() ? '<button class="spk ' + (cls || '') + '" data-say="' + esc(say) + '" aria-label="' + esc(T.listen) + '">' + icon('speaker') + '</button>' : '';
  // transkrypcja (np. ukraińska cyrylica zapisana polskimi literami)
  const tl = t => (L.translit && S.settings.translit && t) ? '<span class="tl">' + esc(L.translit(t)) + '</span>' : '';
  // dodatkowy rząd znaków (np. á é ñ ¿) nad zwykłą klawiaturą urządzenia
  const extraKeysHTML = () => '<div class="kb kb-extra" aria-label="' + esc(T.specialKeys) + '"><div class="kb-row">' +
    L.extraKeys.split(' ').map(k => '<button class="kb-key" data-k="' + esc(k) + '">' + esc(k) + '</button>').join('') + '</div></div>';
  function keyboardHTML() {
    return '<div class="kb" aria-label="' + esc(T.keyboard) + '">' + L.keyboard.map(row => '<div class="kb-row">' + row.split(' ').map(k =>
      k === '⌫' ? '<button class="kb-key wide" data-k="bs" aria-label="' + esc(T.delLetter) + '">⌫</button>'
                : '<button class="kb-key" data-k="' + esc(k) + '">' + esc(k) + '</button>').join('') + '</div>').join('') +
      '<div class="kb-row"><button class="kb-key space" data-k=" ">' + esc(T.space) + '</button></div></div>';
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
      if (!onHome) { if (Q) leaveQuiz(); else goHome(); return; }
    }
    if (sheetEl || e.ctrlKey || e.metaKey || e.altKey) return;
    if (onHome && e.key === '/' && !/^(INPUT|TEXTAREA)$/.test((document.activeElement || {}).tagName)) {
      const si = $('#search'); if (si) { e.preventDefault(); si.focus(); } return;
    }
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

  function toast(msg) {
    const t = document.createElement('div');
    t.className = 'toast'; t.setAttribute('role', 'status'); t.textContent = msg;
    document.body.appendChild(t);
    requestAnimationFrame(() => t.classList.add('show'));
    setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 2600);
  }

  /* ---------------- search ---------------- */
  let searchQ = '', SEARCH = null;
  // bez wielkości liter i znaków diakrytycznych (ą → a, й → и), żeby łatwo trafić
  const fold = s => String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ł/g, 'l').replace(/[’'ʼ`]/g, '');
  const hitText = it => it.lv.k === 'v' ? previewText(it) : previewText(it) + ' – ' + it.pl;
  function searchIndex() {
    if (SEARCH) return SEARCH;
    SEARCH = [];
    LEVELS.forEach(l => SEARCH.push({ lv: l, head: fold(l.t + ' ' + l.d), items: l.items.map(it => ({ it: it, t: fold(hitText(it)) })) }));
    LESSONS.forEach(ls => SEARCH.push({ ls: ls, head: fold(ls.t + ' ' + ls.d), body: fold(ls.body) }));
    return SEARCH;
  }
  function runSearch() {
    const box = $('#search-res'), home = $('.home');
    if (!box || !home) return;
    const q = fold(searchQ).trim();
    home.classList.toggle('searching', !!q);
    if (!q) { box.innerHTML = ''; return; }
    const words = q.split(/\s+/), has = t => words.every(w => t.indexOf(w) >= 0);
    const num = /^\d+$/.test(q) ? +q : 0;
    const res = [];
    searchIndex().forEach(e => {
      if (e.lv) {
        if (num && e.lv.num === num) res.push({ e: e, score: -1 });
        else if (has(e.head)) res.push({ e: e, score: 0 });
        else { const m = e.items.find(x => has(x.t)); if (m) res.push({ e: e, score: 1, hit: hitText(m.it) }); }
      } else if (has(e.head)) res.push({ e: e, score: 0 });
      else if (has(e.body)) res.push({ e: e, score: 2 });
    });
    res.sort((a, b) => a.score - b.score);
    const MAX = 60, shown = res.slice(0, MAX);
    box.innerHTML = '<p class="search-count">' + (res.length ? T.searchFound(res.length, res.length > MAX ? MAX : 0) : T.searchNone) + '</p>' +
      (shown.length ? '<div class="grid">' + shown.map(r => r.e.lv ? tileHTML(r.e.lv, false, r.hit) : lessonTileHTML(r.e.ls, false)).join('') + '</div>' : '');
  }

  /* ---------------- home ---------------- */
  function ring(frac, inner) {
    const r = 20, c = 2 * Math.PI * r, f = Math.max(0, Math.min(1, frac || 0));
    return '<span class="ring"><svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="' + r + '" class="ring-bg"/>' +
      (f ? '<circle cx="24" cy="24" r="' + r + '" class="ring-fg" stroke-dasharray="' + (c * f).toFixed(1) + ' ' + c.toFixed(1) + '"/>' : '') +
      '</svg><span class="ring-in">' + (inner || '') + '</span></span>';
  }
  function tileHTML(l, isNext, hit) {
    const st = levelStars(l);
    return '<button class="lvl' + (st ? ' done' : '') + (isNext ? ' next' : '') + '" data-lv="' + l.id + '" style="--c:var(--s' + (l.stage + 1) + ')">' +
      '<span class="lvl-num">' + l.num + '</span>' +
      '<span class="lvl-main"><span class="lvl-t">' + esc(l.t) + '</span>' +
        (hit ? '<span class="lvl-hit">' + esc(hit) + '</span>' : '<span class="lvl-k">' + KIND[l.k] + '</span>') + '</span>' +
      (isNext ? '<span class="now">' + T.now + '</span>' : starsHTML(st)) +
      '</button>';
  }
  function lessonTileHTML(ls, isNext) {
    const rd = !!S.read[ls.id];
    return '<button class="lvl lesson' + (rd ? ' done' : '') + (isNext ? ' next' : '') + '" data-lesson="' + esc(ls.id) + '" style="--c:var(--s' + (ls.si + 1) + ')">' +
      '<span class="lvl-num" aria-hidden="true">' + icon('book', 18) + '</span>' +
      '<span class="lvl-main"><span class="lvl-t">' + esc(ls.t) + '</span><span class="lvl-k">' + T.lesson + '</span></span>' +
      (isNext ? '<span class="now">' + T.now + '</span>' : rd ? '<span class="read-ok" title="' + esc(plain(T.read)) + '">' + icon('check', 16) + '</span>' : '') +
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
    const due = dueList().length;
    // raz dziennie powtórka staje się „następnym krokiem” (gdy czeka coś z wcześniejszych dni)
    const reviewFirst = due > 0 && spacedDue() && S.revDay !== dayStr(new Date());
    const streak = streakNow();
    const pct = Math.round(done / LEVELS.length * 100);
    const today = todayCount(), goal = S.settings.goal || 20;
    const playedToday = S.streak.last === dayStr(new Date()) || today > 0;
    const sub = done === 0 && !today ? T.subNew : today >= goal ? T.subGoal : streak && !playedToday ? T.subStreak : T.subBack;
    const nPath = step.ls
      ? { c: 'var(--s' + (step.ls.si + 1) + ')', badge: icon('book', 24), t: step.ls.t, meta: T.stage + ' ' + (step.ls.si + 1) + ' · ' + T.lesson }
      : { c: 'var(--s' + (next.stage + 1) + ')', badge: next.num, t: next.t, meta: T.stage + ' ' + (next.stage + 1) + ' · ' + KIND[next.k] + ' · ' + next.items.length + ' ' + pluralW(next.items.length, T.elemW) };
    const nRev = Math.min(due, SRS_SESSION);
    const nx = reviewFirst
      ? { c: 'var(--primary)', badge: icon('repeat', 26), t: T.reviewToday, meta: nRev + ' ' + pluralW(nRev, T.exW) + ' ' + T.reviewFrom }
      : nPath;
    const pathName = step.ls ? step.ls.t : next.num + '. ' + next.t;
    const hr = new Date().getHours();
    const hello = hr < 5 ? T.greetNight : hr < 12 ? T.greetMorning : hr < 18 ? T.greetDay : T.greetEvening;

    let h = '<div class="wrap home">' +
      '<header class="topbar">' +
        '<div class="brand"><span class="logo" aria-hidden="true">' + esc(L.short) + '</span><div class="brand-txt"><h1>' + esc(L.name) + ' <span>· ' + T.cards + '</span></h1><p>' + esc(L.subtitle) + '</p></div></div>' +
        '<div class="top-btns">' +
          '<a class="icon-btn" href="' + esc(L.home) + '" aria-label="' + esc(T.allCourses) + '" title="' + esc(T.allCourses) + '">' + icon('globe') + '</a>' +
          '<button class="icon-btn" data-act="settings" aria-label="' + esc(T.settings) + '" title="' + esc(T.settings) + '">' + icon('gear') + '</button>' +
        '</div>' +
      '</header>' +
      '<section class="welcome"><h2>' + hello + '</h2><p>' + sub + '</p></section>' +
      '<div class="dash">' +
        '<div class="dash-main">' +
          '<button class="next-card" data-act="' + (reviewFirst ? 'review' : 'continue') + '" style="--c:' + nx.c + '">' +
            '<span class="next-label">' + T.nextUp + '</span>' +
            '<span class="next-row"><span class="next-badge">' + nx.badge + '</span>' +
              '<span class="next-txt"><b>' + esc(nx.t) + '</b><small>' + esc(nx.meta) + '</small></span></span>' +
            '<span class="btn primary big next-go">' + icon('play', 18) + (reviewFirst ? T.reviewGo : done ? T.cont : T.start) + '</span>' +
          '</button>' +
          (reviewFirst
            ? '<button class="row-btn go" data-act="continue" style="--c:' + nPath.c + '"><span class="row-ico">' + icon('chev', 20) + '</span><span class="row-txt ellip">' + esc(T.goOn) + '<b>' + esc(pathName) + '</b></span></button>'
            : due ? '<button class="row-btn" data-act="review"><span class="row-ico">' + icon('repeat', 20) + '</span><span class="row-txt">' + esc(plain(T.review)) + '</span><span class="pill">' + countLabel(due) + '</span>' + icon('chev', 18) + '</button>' : '') +
        '</div>' +
        '<div class="dash-side">' +
          '<div class="stats">' +
            '<div class="stat goal' + (today >= goal ? ' reached' : '') + '">' + ring(today / goal, today >= goal ? icon('check', 18) : '') +
              '<b>' + today + '<small>/' + goal + '</small></b><span>' + T.answersToday + '</span></div>' +
            '<div class="stat streak' + (streak ? ' on' : '') + '"><span class="stat-ico">' + icon('flame', 22) + '</span>' +
              '<b>' + streak + '</b><span>' + (T.daysW ? pluralW(streak, T.daysW) : (streak === 1 ? T.day : T.days)) + T.inARow + '</span></div>' +
            '<div class="stat stars-stat"><span class="stat-ico">' + icon('star', 22) + '</span>' +
              '<b>' + stars + '</b><span>' + pluralW(stars, T.starsW) + '</span></div>' +
          '</div>' +
          '<div class="course-prog"><div class="cp-top"><span>' + T.courseProg + '</span><b>' + done + '/' + LEVELS.length + '</b></div>' +
            '<div class="bar" role="progressbar" aria-label="' + esc(T.courseProg) + '" aria-valuenow="' + pct + '" aria-valuemin="0" aria-valuemax="100"><i style="width:' + Math.max(pct, done ? 2 : 0) + '%"></i></div></div>' +
        '</div>' +
      '</div>' +
      (!S.how && done < 3 ? '<section class="how"><div class="how-head"><h3>' + T.howTitle + '</h3>' +
          '<button class="icon-btn sm" data-act="how-close" aria-label="' + esc(T.hide) + '" title="' + esc(T.hide) + '">' + icon('close', 18) + '</button></div>' +
          '<ul>' + T.how.map((x, i) => '<li><span class="how-ico">' + icon(['book', 'cards', 'pencil', 'repeat', 'flame'][i] || 'check', 20) + '</span><span>' + x + '</span></li>').join('') + '</ul></section>' : '') +
      '<div class="search">' + icon('search', 20) +
        '<input id="search" type="search" enterkeyhint="search" autocomplete="off" spellcheck="false" placeholder="' + esc(T.search) + '…" aria-label="' + esc(T.search) + '" value="' + esc(searchQ) + '">' +
        '<kbd class="mouse-only" aria-hidden="true">/</kbd>' +
      '</div>' +
      '<div class="search-res" id="search-res" aria-live="polite"></div>' +
      '<div class="stages">';

    if (!openStages) {
      // etapy rozwinięte przy ostatniej wizycie + etap z następnym poziomem
      openStages = new Set((S.open || []).map(id => STAGES.findIndex(s => s.id === id)).filter(i => i >= 0));
      openStages.add(next.stage);
    }
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
            '<span class="stage-sub">' + st.levels.length + ' ' + pluralW(st.levels.length, T.levelsW) + ' · ' + fmt(n) + ' ' + pluralW(n, T.exW) +
              (nl ? ' · ' + nl + ' ' + pluralW(nl, T.lessonsW) : '') + '</span>' +
            '<span class="stage-bar"><i style="width:' + Math.round(d / st.levels.length * 100) + '%"></i></span>' +
          '</span>' +
          '<span class="stage-count">' + d + '/' + st.levels.length + '</span>' +
          '<span class="chev" aria-hidden="true">' + icon('chev', 20) + '</span>' +
        '</button>' +
        (open ? '<div class="grid">' + tiles() + '</div>' : '') +
        '</section>';
    });
    h += '</div><footer class="foot"><p class="foot-count">' + fmt(TOTAL) + ' ' + pluralW(TOTAL, T.exW) + T.inLevels(LEVELS.length) +
      (nLessons ? ' · ' + nLessons + ' ' + pluralW(nLessons, T.lessonsW) : '') + '</p><p>' + T.foot + '</p></footer></div>';

    app.innerHTML = h;
    const sIn = $('#search', app);
    sIn.addEventListener('input', () => { searchQ = sIn.value; runSearch(); });
    sIn.addEventListener('keydown', e => {
      if (e.key === 'Escape' && sIn.value) { e.stopPropagation(); sIn.value = ''; searchQ = ''; runSearch(); }
      else if (e.key === 'Enter') { e.preventDefault(); sIn.blur(); }
    });
    runSearch();
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
        S.open = Array.from(openStages).map(i => STAGES[i].id); save();
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
      else if (act === 'how-close') { S.how = 1; save(); const c = $('.how', app); if (c) c.remove(); }
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
        '<div><p class="eyebrow">' + T.stage + ' ' + (lv.stage + 1) + ' · ' + KIND[lv.k] + ' · ' + lv.items.length + ' ' + pluralW(lv.items.length, T.elemW) + '</p><h2>' + esc(lv.t) + '</h2></div>' +
      '</div>' +
      '<p class="sheet-desc">' + esc(lv.d) + '</p>' +
      '<div class="chips">' + chips + '</div>' +
      '<div class="sheet-stars">' + starsHTML(st, 'lg') + '<span>' + (st ? T.best : T.noStars) + '</span></div>' +
      (LESSON_FOR[lv.id] ? '<button class="btn ghost wide lesson-link" data-act="lesson">' + icon('book', 18) + '<span class="ellip">' + T.lessonColon + esc(LESSON_FOR[lv.id].t) + '</span>' +
        (S.read[LESSON_FOR[lv.id].id] ? '<span class="read-mark">' + icon('check', 16) + '</span>' : '') + '</button>' : '') +
      '<div class="sheet-actions">' +
        '<button class="btn soft big" data-act="flash"><span class="b-ico">' + icon('cards', 24) + '</span><span class="b-txt">' + T.flash + '<small>' + T.flashSub + '</small></span></button>' +
        '<button class="btn primary big" data-act="quiz"><span class="b-ico">' + icon('pencil', 24) + '</span><span class="b-txt">' + T.quiz + '<small>' + T.quizSub + '</small></span></button>' +
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
          '<button class="icon-btn" data-act="close" aria-label="' + esc(T.closeLesson) + '">' + icon('close') + '</button>' +
          '<span class="play-title">📖 ' + T.lesson + ' · ' + T.stage + ' ' + (ls.si + 1) + ' · ' + esc(STAGES[ls.si].tag) + '</span>' +
        '</div>' +
        '<article class="lesson">' +
          '<h1>' + esc(ls.t) + '</h1>' +
          (ls.d ? '<p class="ls-lead">' + esc(ls.d) + '</p>' : '') +
          lessonBody(ls.body) +
        '</article>' +
        '<section class="lesson-end">' +
          (ls.practice.length ? '<h2>' + T.practice + '</h2><div class="grid">' + ls.practice.map(id => tileHTML(BY_ID[id], false)).join('') + '</div>' : '') +
          '<div class="res-actions">' +
            '<button class="btn primary big" data-act="close">' + T.done + '</button>' +
            (nextLs ? '<button class="btn soft" data-act="next-lesson">' + T.nextLesson + esc(nextLs.t) + ' ›</button>' : '') +
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
    const pseg = (name, val, label) => '<button class="seg-btn' + (getPref(name) === val ? ' on' : '') + '" data-act="pref" data-k="' + name + '" data-v="' + val + '">' + label + '</button>';
    const el = openSheet(
      '<h2 class="sheet-title">' + T.settings + '</h2>' +
      '<label class="set-row"><span>' + T.autoSpeak + '</span><input type="checkbox" class="switch" id="set-auto"' + (s.auto ? ' checked' : '') + '></label>' +
      (L.translit ? '<label class="set-row"><span>' + T.translit + '</span><input type="checkbox" class="switch" id="set-tl"' + (s.translit ? ' checked' : '') + '></label>' : '') +
      (L.voices.length > 1 ? '<div class="set-row"><span>' + T.accent + '</span><div class="seg">' + L.voices.map(v => seg('accent', v.code, v.label)).join('') + '</div></div>' : '') +
      '<div class="set-row"><span>' + T.rate + '</span><div class="seg">' + seg('rate', 0.75, T.slower) + seg('rate', 0.9, T.normal) + '</div></div>' +
      '<div class="set-row"><span>' + T.goal + '</span><div class="seg">' + seg('goal', 10, '10') + seg('goal', 20, '20') + seg('goal', 40, '40') + '</div></div>' +
      '<label class="set-row"><span>' + T.autoNext + '</span><input type="checkbox" class="switch" id="set-next"' + (s.autoNext ? ' checked' : '') + '></label>' +
      '<div class="set-row"><span>' + T.theme + '</span><div class="seg">' + pseg('theme', 'auto', T.themeAuto) + pseg('theme', 'light', T.themeLight) + pseg('theme', 'dark', T.themeDark) + '</div></div>' +
      '<div class="set-row"><span>' + T.textSize + '</span><div class="seg">' + pseg('size', 'normal', T.sizeNormal) + pseg('size', 'large', T.sizeLarge) + '</div></div>' +
      (canSpeak() ? '<button class="btn soft wide" data-act="test">' + T.testVoice + '</button>' +
          (AUDIO && L.audioCredit ? '<p class="muted small">' + esc(L.audioCredit) + '</p>' : '')
        : '<p class="note">' + (TTS && L.requireVoice ? T.noVoiceLang : T.noVoice) + '</p>') +
      '<hr>' +
      '<h3 class="set-h">' + T.backup + '</h3>' +
      '<p class="muted small">' + T.progressNote + ' ' + T.backupNote + '</p>' +
      '<div class="set-btns"><button class="btn soft" data-act="export">' + T.exportBtn + '</button><button class="btn soft" data-act="import">' + T.importBtn + '</button></div>' +
      '<input type="file" id="set-file" accept=".json,application/json" hidden>' +
      '<button class="btn danger wide" data-act="reset">' + T.reset + '</button>',
      (act, b) => {
        if (act === 'set') {
          const k = b.getAttribute('data-k');
          let v = b.getAttribute('data-v');
          if (k === 'rate') v = parseFloat(v);
          if (k === 'goal') v = parseInt(v, 10);
          S.settings[k] = v; save();
          $$('.seg-btn[data-k="' + k + '"]', sheetEl).forEach(x => x.classList.toggle('on', x === b));
          if (k === 'accent' || k === 'rate') speak(L.sample);
        } else if (act === 'pref') {
          const k = b.getAttribute('data-k');
          setPref(k, b.getAttribute('data-v'));
          $$('.seg-btn[data-k="' + k + '"]', sheetEl).forEach(x => x.classList.toggle('on', x === b));
        } else if (act === 'export') {
          exportProgress();
        } else if (act === 'import') {
          $('#set-file', sheetEl).click();
        } else if (act === 'test') {
          speak(L.sample);
        } else if (act === 'reset') {
          if (window.confirm(T.resetAsk)) {
            S = freshState(S.settings); save();
            closeSheet(); homeScroll = 0; renderHome();
          }
        }
      }
    );
    $('#set-auto', el).addEventListener('change', e => { S.settings.auto = e.target.checked; save(); });
    $('#set-next', el).addEventListener('change', e => { S.settings.autoNext = e.target.checked; save(); });
    $('#set-file', el).addEventListener('change', e => { const f = e.target.files && e.target.files[0]; if (f) importProgress(f); e.target.value = ''; });
    const tlBox = $('#set-tl', el);
    if (tlBox) tlBox.addEventListener('change', e => { S.settings.translit = e.target.checked; save(); });
  }

  // motyw i wielkość tekstu są wspólne dla całej strony (shared/prefs.js ustawia je przed rysowaniem)
  const PREF_DEF = { theme: 'auto', size: 'normal' };
  function getPref(k) { try { return localStorage.getItem('fiszki-' + k) || PREF_DEF[k]; } catch (e) { return PREF_DEF[k]; } }
  function setPref(k, v) {
    try { if (v === PREF_DEF[k]) localStorage.removeItem('fiszki-' + k); else localStorage.setItem('fiszki-' + k, v); } catch (e) { /* */ }
    if (v === PREF_DEF[k]) document.documentElement.removeAttribute('data-' + k);
    else document.documentElement.setAttribute('data-' + k, v);
  }
  function exportProgress() {
    const data = JSON.stringify({ app: 'fiszki', key: STORE_KEY, course: L.name, saved: new Date().toISOString(), data: S });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([data], { type: 'application/json' }));
    a.download = STORE_KEY + '-' + dayStr(new Date()) + '.json';
    document.body.appendChild(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  }
  function importProgress(file) {
    const r = new FileReader();
    r.onload = () => {
      let d = null;
      try { d = JSON.parse(r.result); } catch (e) { d = null; }
      if (!d || d.key !== STORE_KEY || !d.data || typeof d.data.stars !== 'object') { toast(T.importBad); return; }
      if (!window.confirm(T.importAsk)) return;
      try { localStorage.setItem(STORE_KEY, JSON.stringify(d.data)); } catch (e) { /* */ }
      S = load(); save(); openStages = null; homeScroll = 0;
      closeSheet(); renderHome(); toast(T.importOk);
    };
    r.readAsText(file);
  }
  // wyjście z ćwiczeń w trakcie rundy: najpierw pytamy, żeby nie stracić wyniku przez przypadek
  function leaveQuiz() {
    if (!Q || Q.done || (Q.idx === 0 && !Q.answered)) { goHome(); return; }
    openSheet('<h2 class="sheet-title">' + T.leaveTitle + '</h2><p class="sheet-desc">' + T.leaveText + '</p>' +
      '<div class="res-actions"><button class="btn primary big" data-act="stay">' + T.keepGoing + '</button>' +
      '<button class="btn ghost" data-act="leave">' + T.leave + '</button></div>',
      act => { closeSheet(); if (act === 'leave') goHome(); });
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
    const items = shuffle(dueList().slice(0, SRS_SESSION));
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
    const title = Q.review ? T.review : Q.lv.num + '. ' + Q.lv.t;
    app.innerHTML =
      '<div class="play quiz" style="--c:' + (Q.lv ? 'var(--s' + (Q.lv.stage + 1) + ')' : 'var(--primary)') + '">' +
        '<div class="play-top">' +
          '<button class="icon-btn" data-act="close" aria-label="' + esc(T.endQuiz) + '">' + icon('close') + '</button>' +
          '<div class="bar"><i style="width:' + (Q.idx / Q.list.length * 100) + '%"></i></div>' +
          '<span class="counter">' + (Q.idx + 1) + '/' + Q.list.length + '</span>' +
        '</div>' +
        '<div class="play-title">' + esc(title) + (q.tries ? ' <span class="again-tag">' + T.againTag + '</span>' : '') + '</div>' +
        '<div class="play-main pop" id="qm"></div>' +
      '</div>' +
      '<div class="feedback" id="fb" aria-live="polite"></div>';
    window.scrollTo(0, 0);
    $('[data-act=close]', app).addEventListener('click', leaveQuiz);
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
    bumpToday();
    if (!q.tries) {
      if (ok) Q.ok++;
      else Q.missed.push(q.it);
      srsAnswer(q.it, ok);
    }
    if (!ok) {
      if (q.tries < 2) Q.list.push({ it: q.it, mode: q.mode, tries: q.tries + 1 });
      if (navigator.vibrate && (!navigator.userActivation || navigator.userActivation.hasBeenActive)) { try { navigator.vibrate(60); } catch (e) { /* */ } }
    }
    save();
  }

  function feedback(ok, o) {
    o = o || {};
    const fb = $('#fb');
    let body = '<strong class="fb-title">' + (ok ? (o.typo ? T.almost : pick(PRAISE)) : T.wrong) + '</strong>';
    if (!ok && o.answer) body += '<div class="fb-line">' + T.correct + '<b>' + esc(o.answer) + '</b>' + (o.foreign ? tl(o.answer) : '') + '</div>';
    if (o.typo) body += '<div class="fb-line">' + T.spelling + '<b>' + esc(o.typo) + '</b></div>';
    if (o.extra) body += '<div class="fb-line">' + esc(o.extra) + '</div>';
    if (o.tip) body += '<div class="fb-tip">💡 ' + esc(o.tip) + '</div>';
    fb.innerHTML = '<div class="fb-inner"><div class="fb-body"><span class="fb-icon" aria-hidden="true">' + (ok ? '✓' : '✗') + '</span><div>' + body + '</div></div>' +
      '<button class="btn ' + (ok ? 'ok' : 'bad') + ' fb-next">' + T.next + '</button></div>';
    fb.className = 'feedback show ' + (ok ? 'ok' : 'bad');
    const nb = $('.fb-next', fb);
    nb.addEventListener('click', nextQ);
    setTimeout(() => { try { nb.focus({ preventScroll: true }); } catch (e) { /* */ } }, 30);
    keyHandler = quizNextKey;
    if (ok && S.settings.autoNext) {
      const cur = Q.cur;
      fb.classList.add('auto');
      setTimeout(() => { if (Q && Q.cur === cur && Q.answered && !sheetEl) nextQ(); }, o.tip || o.typo ? 2600 : 1100);
    }
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
      .replace(/[.,!?;:"„”«»()¿¡]/g, ' ')
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
    if (it.lv.strict) return 'bad';
    if (alts.some(a => a.length >= 4 && lev(a, v) <= 1)) return 'typo';
    // brak akcentu (á → a) albo brak rodzajnika (el libro → libro): zaliczamy, ale pokazujemy poprawną formę
    const fold = s => L.foldAccents ? s.normalize('NFD').replace(/[\u0300\u0301\u0308]/g, '').normalize('NFC') : s; // \u00b4 ` \u00a8 (\u00e1, \u00e0, \u00fc)
    if (L.foldAccents && alts.some(a => fold(a) === fold(v))) return 'typo';
    if (L.softStrip) {
      const bare = it.en.split('/').map(a => normWord(a.toLowerCase().replace(L.softStrip, '')));
      if (bare.some(a => fold(a) === fold(v))) return 'typo';
    }
    return 'bad';
  }

  /* --- sentence ordering --- */
  const normSent = s => s.toLowerCase().replace(/[’‘ʼ]/g, "'").replace(/[.,!?;:«»—–¿¡]/g, '').replace(/\s+/g, ' ').trim();
  function tilesFor(s) {
    const w = s.replace(/[.,!?;:«»¿¡]/g, '').split(/\s+/).filter(x => x && x !== '—' && x !== '–');
    if (w.length && !(L.keepFirst && L.keepFirst.test(w[0]))) w[0] = w[0].charAt(0).toLowerCase() + w[0].slice(1);
    return w;
  }

  const MODES = {
    en2pl(q, el) {
      const it = q.it;
      el.innerHTML = promptHTML(T.whatMeans) + wordCard(it.em, enShow(it), sayText(it)) + '<div class="options"></div>';
      autoSay(sayText(it));
      choice(el, vocabOpts(it, 'pl'), it.pl, ok => feedback(ok, { answer: it.pl }));
    },

    pl2en(q, el) {
      const it = q.it;
      el.innerHTML = promptHTML(it.lv.qp || T.howSay + L.inLang + '?') + wordCard(it.em, it.pl) + '<div class="options"></div>';
      choice(el, vocabOpts(it, 'en'), enShow(it), ok => {
        autoSay(sayText(it));
        feedback(ok, { answer: enShow(it), foreign: true });
      }, true);
    },

    listen(q, el) {
      const it = q.it, t = sayText(it);
      el.innerHTML = promptHTML(T.listenChoose) +
        '<div class="q-card listen">' +
          '<button class="big-spk" data-say="' + esc(t) + '" aria-label="' + esc(T.play) + '">' + icon('speaker', 44) + '</button>' +
          '<button class="slow-btn" data-say="' + esc(t) + '" data-slow>' + T.slow + '</button>' +
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
      el.innerHTML = promptHTML(it.lv.qp || T.write + L.inLang + ':') + wordCard(it.em, it.pl) +
        '<div class="type-box">' +
          '<input class="answer-input" id="ans" type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" enterkeyhint="done"' +
            (L.keyboard ? ' inputmode="none"' : '') + ' placeholder="' + esc(T.typeIn + L.inLang) + '…" aria-label="' + esc(T.yourAnswer) + '">' +
          '<div class="hint-line" id="hint" aria-live="polite"></div>' +
          (L.keyboard ? keyboardHTML() : L.extraKeys ? extraKeysHTML() : '') +
          '<div class="type-actions">' +
            '<button class="btn ghost" data-act="hint">' + T.hint + '</button>' +
            '<button class="btn ghost" data-act="skip">' + T.dontKnow + '</button>' +
            '<button class="btn primary" data-act="check">' + T.check + '</button>' +
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
          if (!L.keyboard) inp.focus(); // przy klawiaturze telefonu wracamy kursorem do pola
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
      el.innerHTML = promptHTML(T.fill) +
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
      el.innerHTML = promptHTML(T.order + L.inLang) +
        '<div class="q-card"><div class="q-word mid">' + esc(it.pl) + '</div></div>' +
        '<div class="zone" id="zone" aria-label="' + esc(T.yourSentence) + '"></div>' +
        '<div class="bank" id="bank"></div>' +
        '<button class="btn primary wide" id="chk" disabled>' + T.check + '</button>';
      const zone = $('#zone', el), bank = $('#bank', el), chk = $('#chk', el);
      const draw = () => {
        zone.innerHTML = placed.length
          ? placed.map((ti, p) => '<button class="tile" data-p="' + p + '">' + esc(words[ti]) + '</button>').join('')
          : '<span class="zone-ph">' + T.tapWords + '</span>';
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
      el.innerHTML = promptHTML(it.lv.qp || T.meaning) + wordCard('', it.en, it.en) + '<div class="options"></div>';
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
    Q.done = true;
    const pct = Q.total ? Q.ok / Q.total : 0;
    const stars = pct >= 0.9 ? 3 : pct >= 0.7 ? 2 : pct >= 0.5 ? 1 : 0;
    touchStreak();
    let improved = false;
    if (!Q.review && stars > levelStars(Q.lv)) { S.stars[Q.lv.id] = stars; improved = true; }
    if (Q.review) S.revDay = dayStr(new Date());
    save();
    const lv = Q.lv;
    const nextLv = lv ? LEVELS[lv.num] : null;
    const heads = T.heads;
    const head = Q.review ? ['🔁', T.reviewDone] : heads[stars];
    const missed = Q.missed.filter((x, i, a) => a.indexOf(x) === i);
    const left = dueList().length;

    let actions = '';
    if (!Q.review) {
      if (stars > 0 && nextLv) actions += '<button class="btn primary big" data-act="nextlv">' + T.nextLevel + '<span class="ellip">' + nextLv.num + '. ' + esc(nextLv.t) + '</span></button>';
      if (stars === 0) actions += '<button class="btn primary big" data-act="flash">' + T.flashFirst + '</button>';
      actions += '<button class="btn soft" data-act="retry">' + T.retry + '</button>';
    } else if (left) {
      actions += '<button class="btn primary big" data-act="review">' + T.reviewMore + '</button>';
    }
    actions += '<button class="btn ghost" data-act="home">' + T.menu + '</button>';

    if (stars >= 2 || (Q.review && Q.total && Q.ok === Q.total)) setTimeout(confetti, 250);
    app.innerHTML =
      '<div class="play result-screen" style="--c:' + (lv ? 'var(--s' + (lv.stage + 1) + ')' : 'var(--primary)') + '">' +
        '<div class="play-top"><button class="icon-btn" data-act="home" aria-label="' + esc(T.backMenu) + '">' + icon('close') + '</button><div class="bar"><i style="width:100%"></i></div></div>' +
        '<div class="result pop">' +
          '<div class="res-emoji">' + head[0] + '</div>' +
          '<h2>' + head[1] + '</h2>' +
          (Q.review ? '' : starsHTML(stars, 'xl')) +
          '<div class="res-pct" style="--p:' + Math.round(pct * 100) + '">' + ring(pct, '<b>' + Math.round(pct * 100) + '%</b>') + '</div>' +
          '<p class="res-score">' + T.score(Q.ok, Q.total, Math.round(pct * 100)) + '</p>' +
          (improved && stars ? '<p class="res-note">' + T.record + '</p>' : '') +
          (!Q.review && stars === 0 ? '<p class="muted">' + T.starRule + '</p>' : '') +
          (!Q.review && stars > 0 && !nextLv ? '<p class="res-note">' + T.lastLevel + '</p>' : '') +
          (Q.review ? '<p class="muted">' + (left ? T.left + left + '.' : T.allFixed) + '</p>' : '') +
          (missed.length ? '<div class="missed"><h3>' + T.worth + '</h3><ul>' + missed.map(it => '<li>' + missedLine(it) + '</li>').join('') + '</ul></div>' : '') +
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

  // krótkie konfetti po dobrym wyniku (bez animacji, gdy system prosi o ograniczenie ruchu)
  function confetti() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const box = document.createElement('div');
    box.className = 'confetti'; box.setAttribute('aria-hidden', 'true');
    const cols = ['#5b4cf0', '#10b981', '#f5b324', '#e5484d', '#3b82f6', '#d946ef'];
    for (let i = 0; i < 36; i++) {
      const c = document.createElement('i');
      c.style.left = (Math.random() * 100) + '%';
      c.style.background = cols[i % cols.length];
      c.style.animationDelay = (Math.random() * .35) + 's';
      c.style.animationDuration = (1.4 + Math.random() * 1.1) + 's';
      c.style.setProperty('--dx', (Math.random() * 120 - 60) + 'px');
      c.style.setProperty('--r', (Math.random() * 720 - 360) + 'deg');
      box.appendChild(c);
    }
    document.body.appendChild(box);
    setTimeout(() => box.remove(), 3000);
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
      const plSide = { html: lang(T.native) + em + '<div class="f-word">' + esc(it.pl) + '</div>', say: '' };
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
      const plSide = { html: lang(T.native) + '<div class="f-word">' + esc(it.pl) + '</div>' + (it.tip ? '<div class="f-tip">⚠️ ' + esc(it.tip) + '</div>' : ''), say: '' };
      if (rev) { enSide.html += '<div class="f-sub">' + esc(it.pl) + '</div>'; return { front: plSide, back: enSide }; }
      return { front: enSide, back: plSide };
    }
    if (k === 'f') {
      return {
        front: { html: lang(T.fillBadge) + '<div class="f-sent">' + sentenceHTML(it) + '</div>' + tl(it.s.replace(/\{[^}]+\}/, '___')) + '<div class="f-sub">' + esc(it.pl) + '</div>', say: '' },
        back: { html: lang(L.short) + '<div class="f-sent">' + sentenceHTML(it, 'ok') + '</div>' + tl(it.full) + '<div class="f-sub">' + esc(it.pl) + '</div>' + spkBtn(sayText(it)) + (it.tip ? '<div class="f-tip">💡 ' + esc(it.tip) + '</div>' : ''), say: sayText(it) }
      };
    }
    return {
      front: { html: lang(T.native) + '<div class="f-sent">' + esc(it.pl) + '</div><div class="f-sub">' + T.howSayIt + esc(L.inLang) + '?</div>', say: '' },
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
      '<div class="play flash" style="--c:var(--s' + (F.lv.stage + 1) + ')">' +
        '<div class="play-top">' +
          '<button class="icon-btn" data-act="close" aria-label="' + esc(T.closeFlash) + '">' + icon('close') + '</button>' +
          '<div class="bar"><i style="width:' + (F.known / F.total * 100) + '%"></i></div>' +
          '<span class="counter" title="' + esc(T.know) + '">' + F.known + '/' + F.total + '</span>' +
          (canRev ? '<button class="icon-btn' + (F.rev ? ' on' : '') + '" data-act="rev" aria-label="' + esc(T.switchDir + ' (' + T.native + ' ⇄ ' + L.short + ')') + '" title="' + esc(T.switchDir + ' (' + T.native + ' ⇄ ' + L.short + ')') + '">' + icon('swap') + '</button>' : '') +
        '</div>' +
        '<div class="play-title">📇 ' + esc(F.lv.num + '. ' + F.lv.t) + '</div>' +
        '<div class="flash-main">' +
          '<div class="fwrap enter" id="fwrap">' +
            '<div class="fcard" id="fcard">' +
              '<div class="face front">' + fc.front.html + '</div>' +
              '<div class="face back">' + fc.back.html + '</div>' +
            '</div>' +
          '</div>' +
          '<p class="hint"><span class="touch-only">' + T.hintTouch + '</span>' +
          '<span class="mouse-only">' + T.hintMouse + '</span></p>' +
        '</div>' +
        '<div class="flash-actions" id="fact"></div>' +
      '</div>';
    window.scrollTo(0, 0);

    const wrap = $('#fwrap'), card = $('#fcard'), fact = $('#fact');
    const drawActions = () => {
      fact.innerHTML = F.seenBack
        ? '<button class="btn bad-soft" data-act="again">' + T.notYet + '</button><button class="btn ok" data-act="know">' + T.iKnow + '</button>'
        : '<button class="btn primary wide" data-act="flip">' + T.showAnswer + '</button>';
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
      bumpToday();
      if (kind === 'know') { F.known++; srsMeet(cur); }
      else F.deck.splice(Math.min(3, F.deck.length), 0, cur);
      save();
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
        '<div class="play-top"><button class="icon-btn" data-act="home" aria-label="' + esc(T.backMenu) + '">' + icon('close') + '</button><div class="bar"><i style="width:100%"></i></div></div>' +
        '<div class="result pop">' +
          '<div class="res-emoji">🎉</div>' +
          '<h2>' + T.flashDone + '</h2>' +
          '<p class="res-score">' + T.flashKnown(F.total, pluralW(F.total, T.flashW), esc(lv.t)) + '</p>' +
          '<p class="muted">' + T.flashNext + '</p>' +
          '<div class="res-actions">' +
            '<button class="btn primary big" data-act="quiz">' + T.quizBtn + '</button>' +
            '<button class="btn soft" data-act="again">' + T.flashAgain + '</button>' +
            '<button class="btn ghost" data-act="home">' + T.menu + '</button>' +
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
