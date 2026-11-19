/*
 * Fiszki – ukraiński dla Polaków. Szkielet etapów + alfabet.
 * Format jak w wersji angielskiej (pole „en” = słowo ukraińskie):
 *   k:"v"  słówka:      "ukraiński|polski|emoji"
 *   k:"f"  uzupełnij:   "zdanie z {odpowiedzią}|tłumaczenie|błędna1,błędna2|wskazówka"
 *   k:"o"  zdania:      "zdanie ukraińskie|tłumaczenie|inna poprawna kolejność;…"
 *   k:"m"  znaczenie:   "słowo|poprawne znaczenie|błędne1,błędne2|wskazówka"
 * Dodatkowe poziomy są w folderze data/ i dopisują się przez ADD(idEtapu, [poziomy]).
 */
window.STAGES = [
  {
    id: "s1", name: "Alfabet i pierwsze słowa", tag: "A1", ex: ["en2pl", "pl2en"],
    levels: [
      { id: "abc1", t: "Alfabet 1: litery jak po polsku", d: "Te litery czytasz tak samo jak w polskim.", k: "v", i: `
а|a
б|b
д|d
е|e
з|z
к|k
м|m
о|o
п|p
т|t
ф|f
`},
      { id: "abc2", t: "Alfabet 2: litery-pułapki", d: "Wyglądają znajomo, ale czyta się je inaczej!", k: "v", i: `
в|w (jak w „woda”)
н|n (jak w „noga”)
р|r (jak w „ryba”)
с|s (jak w „sok”)
у|u (jak w „ul”)
х|ch (jak w „chleb”)
и|y (jak w „ryba”)
і|i (jak w „igła”)
г|h (miękkie h)
ґ|g (jak w „gol”)
л|ł lub l
`},
      { id: "abc3", t: "Alfabet 3: nowe litery", d: "Ż, cz, sz, szcz – po ukraińsku to jedna litera.", k: "v", i: `
ж|ż
ц|c
ч|cz
ш|sz
щ|szcz
й|j
ь|znak miękki (ś, ź, ń, ć)
'|apostrof (п'ять = pjat')
`},
      { id: "abc4", t: "Alfabet 4: є, ю, я, ї", d: "Litery, które same w sobie mają „j”.", k: "v", i: `
є|je
ю|ju
я|ja
ї|ji
ля|la
лю|lu
ня|nia
дя|dia
тя|tia
ні|ni
сі|si
ль|l (miękkie)
`},
      { id: "abc5", t: "Czytamy sylaby", d: "Połącz litery w sylaby.", k: "v", i: `
ма|ma
ла|ła
ни|ny
ні|ni
ри|ry
ві|wi
си|sy
ге|he
хо|cho
чу|czu
що|szczo
жи|ży
ці|ci
шо|szo
ґа|ga
`},
      { id: "abc6", t: "Czytamy pierwsze słowa", d: "Przeczytaj słowo i rozpoznaj je.", k: "v", i: `
мама|mama (mama)|👩
тато|tato (tata)|👨
кава|kawa (kawa)|☕
банан|banan (banan)|🍌
парк|park (park)|🌳
метро|metro (metro)|🚇
радіо|radio (radio)|📻
лимон|łymon (cytryna)|🍋
так|tak (tak)|✅
ні|ni (nie)|❌
дім|dim (dom)|🏠
сир|syr (ser)|🧀
хліб|chlib (chleb)|🍞
вода|woda (woda)|💧
молоко|mołoko (mleko)|🥛
сік|sik (sok)|🧃
кіт|kit (kot)|🐱
собака|sobaka (pies)|🐶
рука|ruka (ręka)|✋
нога|noha (noga)|🦵
`}
    ]
  },
  { id: "s2", name: "Podstawy", tag: "A1", ex: ["en2pl", "pl2en", "listen"], levels: [] },
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
