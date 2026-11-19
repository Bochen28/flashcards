/*
 * Fiszki – hiszpański dla Polaków. Szkielet etapów + pierwsze poziomy (wymowa, powitania).
 * Format jak w pozostałych językach (pole „en” = słowo hiszpańskie):
 *   k:"v"  słówka:      "hiszpański|polski|emoji"
 *   k:"f"  uzupełnij:   "zdanie z {odpowiedzią}|tłumaczenie|błędna1,błędna2|wskazówka"
 *   k:"o"  zdania:      "zdanie hiszpańskie|tłumaczenie|inna poprawna kolejność;…"
 *   k:"m"  znaczenie:   "słowo|poprawne znaczenie|błędne1,błędne2|wskazówka"
 * Dodatkowe poziomy są w folderze data/ i dopisują się przez ADD(idEtapu, [poziomy]).
 */
window.STAGES = [
  {
    id: "s1", name: "Pierwsze słowa", tag: "A1", ex: ["en2pl", "pl2en", "listen"],
    levels: [
      { id: "pron1", t: "Czytamy po hiszpańsku", d: "Większość liter czyta się jak po polsku. rr – mocne, długie r.", k: "v", i: `
casa|dom|🏠
mesa|stół
sol|słońce|☀️
mar|morze|🌊
pan|chleb|🍞
agua|woda|💧
uno|jeden|1️⃣
dos|dwa|2️⃣
tres|trzy|3️⃣
amigo|przyjaciel
gato|kot|🐈
perro|pies|🐕
foto|zdjęcie|📷
radio|radio|📻
tomate|pomidor|🍅
patata|ziemniak|🥔
banana|banan|🍌
limón|cytryna|🍋
mapa|mapa|🗺️
taxi|taksówka|🚕
`},
      { id: "pron2", t: "Wymowa: ll, ñ, ch, j", d: "ll – jak j, ñ – jak ń, ch – jak cz, j – jak mocne ch.", k: "v", i: `
llave|klucz|🔑
calle|ulica
lluvia|deszcz|🌧️
pollo|kurczak|🍗
España|Hiszpania|🇪🇸
niño|dziecko (chłopiec)|👦
año|rok
mañana|jutro (też: rano)
noche|noc|🌙
leche|mleko|🥛
coche|samochód|🚗
chocolate|czekolada|🍫
jamón|szynka
ojo|oko|👁️
hijo|syn
mujer|kobieta|👩
joven|młody
jardín|ogród|🌷
`},
      { id: "pron3", t: "Wymowa: c, z, g, h, qu", d: "ce, ci, z – jak angielskie th; ge, gi – jak ch; h jest nieme; qu – jak k.", k: "v", i: `
cine|kino|🎬
cena|kolacja|🍽️
cielo|niebo
zapato|but|👞
zumo|sok|🧃
plaza|plac
gente|ludzie|👥
gigante|olbrzym
guitarra|gitara|🎸
gato|kot|🐈
hola|cześć|👋
hotel|hotel|🏨
hora|godzina|🕐
huevo|jajko|🥚
queso|ser|🧀
¿qué?|co?
aquí|tutaj
gracias|dziękuję|🙏
`},
      { id: "greet", t: "Powitania i grzeczności", d: "Hola, buenos días, gracias, por favor – zwroty na każdy dzień.", k: "v", i: `
hola|cześć|👋
buenos días|dzień dobry (rano)|🌅
buenas tardes|dzień dobry (po południu)|☀️
buenas noches|dobry wieczór / dobranoc|🌙
adiós|do widzenia|👋
hasta luego|na razie / do zobaczenia
hasta mañana|do jutra
gracias|dziękuję|🙏
muchas gracias|dziękuję bardzo
de nada|nie ma za co
por favor|proszę (prosząc o coś)
perdón|przepraszam
lo siento|przykro mi
sí|tak|✅
no|nie|❌
¿qué tal?|co słychać?
bien|dobrze|👍
muy bien|bardzo dobrze
encantado|miło mi (mówi mężczyzna)
encantada|miło mi (mówi kobieta)
¿cómo te llamas?|jak masz na imię?
me llamo Ana|mam na imię Ana
señor|pan
señora|pani
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
