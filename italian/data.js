/*
 * Fiszki – włoski dla Polaków. Szkielet etapów + pierwsze poziomy (wymowa, powitania).
 * Format jak w pozostałych językach (pole „en” = słowo włoskie):
 *   k:"v"  słówka:      "włoski|polski|emoji"
 *   k:"f"  uzupełnij:   "zdanie z {odpowiedzią}|tłumaczenie|błędna1,błędna2|wskazówka"
 *   k:"o"  zdania:      "zdanie włoskie|tłumaczenie|inna poprawna kolejność;…"
 *   k:"m"  znaczenie:   "słowo|poprawne znaczenie|błędne1,błędne2|wskazówka"
 * Dodatkowe poziomy są w folderze data/ i dopisują się przez ADD(idEtapu, [poziomy]).
 */
window.STAGES = [
  {
    id: "s1", name: "Pierwsze słowa", tag: "A1", ex: ["en2pl", "pl2en", "listen"],
    levels: [
      { id: "pron1", t: "Czytamy po włosku", d: "Większość liter czyta się jak po polsku, a każdą samogłoskę wymawiamy wyraźnie.", k: "v", i: `
casa|dom|🏠
mare|morze|🌊
sole|słońce|☀️
luna|księżyc|🌙
pane|chleb|🍞
vino|wino|🍷
uno|jeden|1️⃣
due|dwa|2️⃣
tre|trzy|3️⃣
amico|przyjaciel
mano|dłoń (ręka)|✋
nome|imię
porta|drzwi|🚪
foto|zdjęcie|📷
radio|radio|📻
pomodoro|pomidor|🍅
patata|ziemniak|🥔
banana|banan|🍌
limone|cytryna|🍋
pasta|makaron|🍝
`},
      { id: "pron2", t: "Wymowa: c, g, ch, gh", d: "ce, ci – jak cz; ge, gi – jak dż; che, chi – jak ke, ki; ghe, ghi – jak ge, gi.", k: "v", i: `
ciao|cześć|👋
cena|kolacja|🍽️
cinema|kino|🎬
cucina|kuchnia
dolce|słodki / deser|🍰
gelato|lody|🍦
giorno|dzień
gente|ludzie|👥
giardino|ogród|🌷
formaggio|ser|🧀
chiave|klucz|🔑
chiesa|kościół|⛪
che cosa?|co?
anche|też
spaghetti|spaghetti|🍝
funghi|grzyby|🍄
gatto|kot|🐈
gola|gardło
cuore|serce|❤️
amica|przyjaciółka
`},
      { id: "pron3", t: "Wymowa: gli, gn, sc, z i podwójne litery", d: "gli – jak li (miękko), gn – jak ń, sce/sci – jak sz, z – jak c albo dz. Podwójne spółgłoski wymawiamy dłużej.", k: "v", i: `
famiglia|rodzina|👪
figlio|syn
foglia|liść|🍃
aglio|czosnek|🧄
bagno|łazienka|🛁
montagna|góra|⛰️
lasagne|lasagne
gnocchi|kluski (gnocchi)
pesce|ryba|🐟
scienza|nauka|🔬
scuola|szkoła|🏫
pizza|pizza|🍕
grazie|dziękuję|🙏
zucchero|cukier
ragazzo|chłopak|👦
nonno|dziadek|👴
notte|noc|🌙
latte|mleko|🥛
cappuccino|cappuccino|☕
anno|rok
`},
      { id: "greet", t: "Powitania i grzeczności", d: "Ciao, buongiorno, grazie, per favore – zwroty na każdy dzień.", k: "v", i: `
ciao|cześć (na powitanie i pożegnanie)|👋
salve|dzień dobry (neutralnie)
buongiorno|dzień dobry|🌅
buonasera|dobry wieczór|🌆
buonanotte|dobranoc|🌙
arrivederci|do widzenia|👋
a presto|do zobaczenia wkrótce
a domani|do jutra
grazie|dziękuję|🙏
grazie mille|dziękuję bardzo
prego|proszę (nie ma za co)
per favore|proszę (prosząc o coś)
scusa|przepraszam (do kolegi)
scusi|przepraszam (grzecznie, do pana / pani)
mi dispiace|przykro mi
sì|tak|✅
no|nie|❌
come stai?|jak się masz?
bene|dobrze|👍
molto bene|bardzo dobrze
piacere|miło mi
come ti chiami?|jak masz na imię?
mi chiamo Anna|mam na imię Anna
signore|pan
signora|pani
`}
    ]
  },
  { id: "s2", name: "Podstawy", tag: "A1", ex: ["en2pl", "pl2en", "listen", "type"], levels: [] },
  { id: "s3", name: "Codzienne życie", tag: "A1–A2", ex: ["pl2en", "type", "listen", "en2pl"], levels: [] },
  { id: "s4", name: "Przeszłość i przyszłość", tag: "A2", ex: ["type", "pl2en", "type", "listen", "en2pl"], levels: [] },
  { id: "s5", name: "Średnio zaawansowany", tag: "B1", ex: ["type", "pl2en", "type", "listen", "en2pl"], levels: [] },
  { id: "s6", name: "Pewny siebie", tag: "B1–B2", ex: ["type", "pl2en", "type", "listen", "en2pl"], levels: [] },
  { id: "s7", name: "Zaawansowany", tag: "B2", ex: ["type", "pl2en", "type", "listen", "en2pl"], levels: [] },
  { id: "s8", name: "Ekspert", tag: "C1", ex: ["type", "pl2en", "en2pl", "listen"], levels: [] }
];

window.ADD = function (stageId, levels, afterId) {
  var st = window.STAGES.filter(function (s) { return s.id === stageId; })[0];
  if (!st) { console.error('ADD: nieznany etap ' + stageId); return; }
  var at = st.levels.length;
  if (afterId) {
    for (var j = 0; j < st.levels.length; j++) { if (st.levels[j].id === afterId) { at = j + 1; break; } }
  }
  st.levels.splice.apply(st.levels, [at, 0].concat(levels));
};

// Lekcje (wyjaśnienia zasad) – pliki lessons/*.js wywołują LESSON({ id, stage, before, practice, t, d, body }).
window.LESSONS = window.LESSONS || [];
window.LESSON = function () { for (var i = 0; i < arguments.length; i++) window.LESSONS.push(arguments[i]); };
