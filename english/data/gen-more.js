/*
 * Ćwiczenia generowane: stopniowanie przymiotników, liczba mnoga,
 * liczby, lata, liczebniki porządkowe i podawanie godziny.
 * Ładowany po gen-verbs.js (korzysta z SPREAD).
 */
(function () {
  /* "przymiotnik|znaczenie|wyższy|najwyższy" – formy tylko dla nieregularnych.
     "+" = more / most, "*" = podwajamy ostatnią spółgłoskę (big* → bigger). */
  var ADJ = `
big*|duży
small|mały
old|stary
young|młody
long|długi
short|krótki / niski
tall|wysoki (o ludziach)
hot*|gorący
cold|zimny
fast|szybki
slow|wolny
cheap|tani
nice|miły
good|dobry|better|best
bad|zły|worse|worst
happy|szczęśliwy
sad*|smutny
easy|łatwy
new|nowy
clean|czysty
high|wysoki (o rzeczach)
low|niski
warm|ciepły
cool|chłodny
dark|ciemny
light|jasny / lekki
strong|silny
weak|słaby
rich|bogaty
poor|biedny
heavy|ciężki
thin*|chudy / cienki
fat*|gruby
wet*|mokry
dry|suchy
loud|głośny
quiet|cichy
busy|zajęty
early|wczesny
late|późny
beautiful+|piękny
expensive+|drogi
interesting+|ciekawy
difficult+|trudny
important+|ważny
dangerous+|niebezpieczny
comfortable+|wygodny
popular+|popularny
famous+|sławny
boring+|nudny
careful+|ostrożny
useful+|przydatny
modern+|nowoczesny
delicious+|pyszny
tired+|zmęczony
wonderful+|wspaniały
exciting+|ekscytujący
healthy|zdrowy
funny|zabawny
lazy|leniwy
far|daleki|farther/further|farthest/furthest
wide|szeroki
narrow|wąski
deep|głęboki
safe|bezpieczny
brave|odważny
kind|życzliwy
rude|niegrzeczny
polite+|uprzejmy
clever|bystry
stupid+|głupi
angry|zły (rozgniewany)
hungry|głodny
lucky|mający szczęście
dirty|brudny
pretty|ładny
ugly|brzydki
noisy|hałaśliwy
tidy|schludny
friendly|przyjazny
simple|prosty
gentle|łagodny
strange|dziwny
large|obszerny / duży
sweet|słodki
sour|kwaśny
fresh|świeży
soft|miękki
hard|twardy
smooth|gładki
rough|szorstki
sharp|ostry
calm|spokojny
wild|dziki
proud|dumny
bright|jasny / bystry
fair|sprawiedliwy
crazy|szalony
lonely|samotny
silly|głupiutki
intelligent+|inteligentny
generous+|hojny
patient+|cierpliwy
honest+|uczciwy
confident+|pewny siebie
reliable+|niezawodny
efficient+|wydajny
convenient+|wygodny (praktyczny)
crowded+|zatłoczony
relaxed+|zrelaksowany
serious+|poważny
successful+|odnoszący sukcesy
attractive+|atrakcyjny
responsible+|odpowiedzialny
flexible+|elastyczny
ambitious+|ambitny
polluted+|zanieczyszczony
peaceful+|spokojny (pokojowy)
stressful+|stresujący
valuable+|wartościowy
mild|łagodny (o klimacie)
harsh|surowy
tough|twardy / trudny
shallow|płytki
humble|skromny
subtle|subtelny
steep|stromy
dense|gęsty
vague|niejasny
pale|blady
brief|zwięzły
fierce|zaciekły
keen|chętny / zapalony
weird|dziwaczny
grim*|ponury
slim*|szczupły
neat|staranny
crisp|chrupiący / rześki
wise|mądry
loose|luźny
sophisticated+|wyrafinowany
reluctant+|niechętny
spontaneous+|spontaniczny
sensitive+|wrażliwy
sensible+|rozsądny
considerate+|taktowny
sustainable+|zrównoważony
vulnerable+|podatny na zranienie
controversial+|kontrowersyjny
reasonable+|umiarkowany (np. cena)
persistent+|wytrwały
accurate+|dokładny
obvious+|oczywisty
significant+|znaczący
complicated+|skomplikowany
aggressive+|agresywny
anxious+|niespokojny
cautious+|ostrożny (przezorny)
decent+|przyzwoity
eloquent+|elokwentny
`;

  /* "rzeczownik|znaczenie|liczba mnoga" – liczba mnoga tylko dla nieregularnych. */
  var NOUNS = `
book|książka
pen|długopis
bag|torba
car|samochód
house|dom
dog|pies
cat|kot
box|pudełko
bus|autobus
glass|szklanka
watch|zegarek
dish|naczynie / danie
baby|niemowlę
city|miasto
toy|zabawka
day|dzień
man|mężczyzna|men
woman|kobieta|women
child|dziecko|children
apple|jabłko
tree|drzewo
flower|kwiat
bird|ptak
horse|koń
chair|krzesło
table|stół
window|okno
key|klucz
egg|jajko
orange|pomarańcza
banana|banan
friend|przyjaciel
teacher|nauczyciel
student|student
family|rodzina
party|impreza
country|kraj
story|historia (opowieść)
boy|chłopiec
girl|dziewczynka
foot|stopa|feet
tooth|ząb|teeth
mouse|mysz|mice
person|osoba|people
sheep|owca|sheep
fish|ryba|fish
knife|nóż|knives
wife|żona|wives
life|życie|lives
leaf|liść|leaves
half|połowa|halves
shelf|półka|shelves
wolf|wilk|wolves
thief|złodziej|thieves
potato|ziemniak|potatoes
tomato|pomidor|tomatoes
hero|bohater|heroes
goose|gęś|geese
deer|jeleń|deer
loaf|bochenek|loaves
photo|zdjęcie
piano|pianino
radio|radio
video|nagranie wideo
zoo|zoo
kilo|kilogram
roof|dach
chef|szef kuchni
belief|przekonanie
cliff|klif
church|kościół
beach|plaża
brush|szczotka
fox|lis
kiss|pocałunek
address|adres
class|klasa
match|mecz / zapałka
sandwich|kanapka
wish|życzenie
library|biblioteka
dictionary|słownik
factory|fabryka
company|firma
university|uniwersytet
activity|zajęcie / aktywność
holiday|urlop / święto
monkey|małpa
journey|podróż
valley|dolina
lady|pani
cherry|wiśnia
strawberry|truskawka
butterfly|motyl
battery|bateria
enemy|wróg
memory|wspomnienie
hobby|hobby
puppy|szczeniak
way|droga / sposób
tax|podatek
bush|krzak
crash|wypadek (zderzenie)
coach|autokar / trener
branch|gałąź / oddział
speech|przemówienie
switch|przełącznik
dress|sukienka
boss|szef
princess|księżniczka
witness|świadek
business|biznes (firma)
process|proces
virus|wirus
campus|kampus
bonus|premia
quiz|quiz|quizzes
lens|soczewka
gas|gaz|gases
torch|latarka
crisis|kryzys|crises
analysis|analiza|analyses
thesis|praca dyplomowa|theses
hypothesis|hipoteza|hypotheses
phenomenon|zjawisko|phenomena
criterion|kryterium|criteria
cactus|kaktus|cacti/cactuses
fungus|grzyb|fungi
series|serial / seria|series
species|gatunek|species
aircraft|samolot (statek powietrzny)|aircraft
means|środek / sposób|means
salmon|łosoś|salmon
ox|wół|oxen
passer-by|przechodzień|passers-by
mother-in-law|teściowa|mothers-in-law
son-in-law|zięć|sons-in-law
policeman|policjant|policemen
fireman|strażak|firemen
postman|listonosz|postmen
`;

  var lines = function (s) { return s.split('\n').map(function (l) { return l.trim(); }).filter(Boolean).map(function (l) { return l.split('|'); }); };
  function chunks(a, n) { var out = []; for (var i = 0; i < a.length; i += n) out.push(a.slice(i, i + n)); return out; }
  var short = function (pl) { return pl.replace(/\s*\([^)]*\)/g, ''); };
  function form(id, t, d, qp, items) {
    return { id: id, t: t, d: d, k: 'v', qp: qp, flip: true, strict: true, ex: ['pl2en', 'type', 'type'], i: items };
  }
  var groups = {};
  function put(stageId, anchor, lv) { var key = stageId + '|' + (anchor || ''); (groups[key] = groups[key] || []).push(lv); }

  /* ---- stopniowanie ---- */
  var adjs = lines(ADJ).map(function (p) {
    var raw = p[0], b = raw.replace(/[+*]/g, ''), c, s;
    if (p[2]) { c = p[2]; s = p[3]; }
    else if (raw.indexOf('+') > 0) { c = 'more ' + b; s = 'most ' + b; }
    else if (raw.indexOf('*') > 0) { c = b + b.slice(-1) + 'er'; s = b + b.slice(-1) + 'est'; }
    else if (/e$/.test(b)) { c = b + 'r'; s = b + 'st'; }
    else if (/[^aeiou]y$/.test(b)) { c = b.slice(0, -1) + 'ier'; s = b.slice(0, -1) + 'iest'; }
    else { c = b + 'er'; s = b + 'est'; }
    return { b: b, pl: p[1], c: c, s: s };
  });
  var adjIn = ['s4', 's4', 's4', 's5', 's5', 's6', 's7', 's8'];
  chunks(adjs, 20).forEach(function (c, ci) {
    var st = adjIn[ci], an = st === 's4' ? 'compare' : '', n = ci + 1;
    var lab = function (a) { return a.b + ' (' + short(a.pl) + ')'; };
    put(st, an, form('ga-c-' + n, 'Stopień wyższy: zestaw ' + n, 'big → bigger, easy → easier, beautiful → more beautiful.',
      'Stopień wyższy (-er / more):', c.map(function (a) { return a.c + '|' + lab(a); })));
    put(st, an, form('ga-s-' + n, 'Stopień najwyższy: zestaw ' + n, 'the biggest, the easiest, the most beautiful. „the” możesz pominąć.',
      'Stopień najwyższy (the …):', c.map(function (a) { return a.s + '|' + lab(a); })));
  });

  /* ---- liczba mnoga ---- */
  var nouns = lines(NOUNS).map(function (p) {
    var b = p[0], pl = p[2];
    if (!pl) {
      if (/(s|x|z|ch|sh)$/.test(b)) pl = b + 'es';
      else if (/[^aeiou]y$/.test(b)) pl = b.slice(0, -1) + 'ies';
      else pl = b + 's';
    }
    return pl + '|' + b + ' (' + short(p[1]) + ')';
  });
  var nounIn = ['s2', 's2', 's3', 's3', 's3', 's4', 's5', 's7'];
  chunks(nouns, 20).forEach(function (c, ci) {
    var st = nounIn[ci];
    put(st, st === 's2' ? 'plural' : '', form('gn-' + (ci + 1), 'Liczba mnoga: zestaw ' + (ci + 1),
      ci < 2 ? 'Dodaj -s, -es albo -ies.' : 'Reguły i wyjątki: knife → knives, child → children, crisis → crises.',
      'Liczba mnoga:', c));
  });

  /* ---- liczby ---- */
  var ONES = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
    'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  var TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  function en(n) {
    if (n < 20) return ONES[n];
    if (n < 100) return TENS[Math.floor(n / 10)] + (n % 10 ? '-' + ONES[n % 10] : '');
    if (n < 1000) return ONES[Math.floor(n / 100)] + ' hundred' + (n % 100 ? ' and ' + en(n % 100) : '');
    var r = n % 1000;
    return en(Math.floor(n / 1000)) + ' thousand' + (r ? (r < 100 ? ' and ' : ' ') + en(r) : '');
  }
  var withAlt = function (s) { return s.indexOf(' and ') >= 0 ? s + '/' + s.replace(/ and /g, ' ') : s; };
  var numItem = function (n) { return withAlt(en(n)) + '|' + n; };
  var NUM = { k: 'v', qp: 'Napisz tę liczbę po angielsku:', strict: true, ex: ['en2pl', 'pl2en', 'type', 'listen'] };
  function numLevel(id, t, d, items) { var o = { id: id, t: t, d: d, i: items }; for (var k in NUM) o[k] = NUM[k]; return o; }
  var range = function (a, b) { var r = []; for (var i = a; i <= b; i++) r.push(i); return r; };
  var pickNums = function (count, base, span, mul, add) {
    var out = [];
    for (var k = 0; out.length < count && k < count * 3; k++) { var v = base + ((k * mul + add) % span); if (out.indexOf(v) < 0) out.push(v); }
    return out;
  };

  put('s1', 'num1', numLevel('gnum-1', 'Liczby 0–15', 'Od zera do piętnastu – słuchaj i pisz.', range(0, 15).map(numItem)));
  put('s1', 'num1', numLevel('gnum-2', 'Liczby 16–30', 'Nastki i pierwsze dziesiątki.', range(16, 30).map(numItem)));
  chunks(range(31, 100), 18).forEach(function (c, ci) {
    put('s2', 'num2', numLevel('gnum-' + (ci + 3), 'Liczby ' + c[0] + '–' + c[c.length - 1], 'Dziesiątki i jedności: forty-five, ninety-nine.', c.map(numItem)));
  });
  chunks(pickNums(40, 100, 900, 137, 61).sort(function (a, b) { return a - b; }), 20).forEach(function (c, ci) {
    put('s3', '', numLevel('gnum-h' + (ci + 1), 'Setki ' + (ci + 1), 'three hundred and twelve – Brytyjczycy dodają „and”, Amerykanie zwykle nie.', c.map(numItem)));
  });
  var thousands = [1000, 1500, 2000, 10000, 100000].concat(pickNums(25, 1000, 9000, 1979, 433)).sort(function (a, b) { return a - b; });
  chunks(thousands, 15).forEach(function (c, ci) {
    put('s4', '', numLevel('gnum-t' + (ci + 1), 'Tysiące ' + (ci + 1), 'two thousand five hundred – duże liczby.', c.map(numItem)));
  });

  /* ---- lata ---- */
  function year(y) {
    if (y >= 2000 && y < 2010) return y === 2000 ? 'two thousand' : 'two thousand and ' + ONES[y % 10];
    var hi = Math.floor(y / 100), lo = y % 100;
    var main = en(hi) + ' ' + (lo === 0 ? 'hundred' : lo < 10 ? 'oh ' + ONES[lo] : en(lo));
    return y >= 2010 ? main + '/two thousand and ' + en(lo) : main;
  }
  var YEARS = [1066, 1410, 1492, 1683, 1776, 1805, 1900, 1901, 1909, 1918, 1939, 1945, 1956, 1969, 1980, 1989,
    1990, 1995, 1999, 2000, 2001, 2004, 2008, 2010, 2012, 2015, 2020, 2024, 2025, 2030];
  chunks(YEARS, 15).forEach(function (c, ci) {
    put('s4', '', numLevel('gyear-' + (ci + 1), 'Lata ' + (ci + 1), '1999 = nineteen ninety-nine, 2024 = twenty twenty-four.',
      c.map(function (y) { return year(y) + '|rok ' + y; })));
  });

  /* ---- liczebniki porządkowe ---- */
  var ORD = ['', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth',
    'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth'];
  var PORZ = ['', 'pierwszy', 'drugi', 'trzeci', 'czwarty', 'piąty', 'szósty', 'siódmy', 'ósmy', 'dziewiąty', 'dziesiąty', 'jedenasty',
    'dwunasty', 'trzynasty', 'czternasty', 'piętnasty', 'szesnasty', 'siedemnasty', 'osiemnasty', 'dziewiętnasty'];
  function ord(n) {
    if (n < 20) return ORD[n];
    var t = ['', '', 'twent', 'thirt'][Math.floor(n / 10)];
    return n % 10 ? t + 'y-' + ORD[n % 10] : t + 'ieth';
  }
  function porz(n) {
    if (n < 20) return PORZ[n];
    var t = ['', '', 'dwudziesty', 'trzydziesty'][Math.floor(n / 10)];
    return n % 10 ? t + ' ' + PORZ[n % 10] : t;
  }
  chunks(range(1, 31), 16).forEach(function (c, ci) {
    put('s3', 'time', numLevel('gord-' + (ci + 1), 'Liczebniki porządkowe ' + (ci + 1), 'first, second, third… – potrzebne do dat: the 21st of May.',
      c.map(function (n) { return ord(n) + '|' + n + '. (' + porz(n) + ')'; })));
  });

  /* ---- godziny ---- */
  var NOM = ['', 'pierwsza', 'druga', 'trzecia', 'czwarta', 'piąta', 'szósta', 'siódma', 'ósma', 'dziewiąta', 'dziesiąta', 'jedenasta', 'dwunasta'];
  var LOC = ['', 'pierwszej', 'drugiej', 'trzeciej', 'czwartej', 'piątej', 'szóstej', 'siódmej', 'ósmej', 'dziewiątej', 'dziesiątej', 'jedenastej', 'dwunastej'];
  var EN_M = { 5: 'five', 10: 'ten', 15: 'a quarter', 20: 'twenty', 25: 'twenty-five' };
  var PL_M = { 5: 'pięć', 10: 'dziesięć', 15: 'kwadrans', 20: 'dwadzieścia', 25: 'dwadzieścia pięć' };
  function clock(h, m) {
    var nx = h % 12 + 1, e, p;
    if (m === 0) { e = "It's " + ONES[h] + " o'clock"; p = NOM[h]; }
    else if (m === 30) { e = "It's half past " + ONES[h]; p = 'wpół do ' + LOC[nx]; }
    else if (m < 30) { e = "It's " + EN_M[m] + ' past ' + ONES[h]; p = PL_M[m] + ' po ' + LOC[h]; }
    else { e = "It's " + EN_M[60 - m] + ' to ' + ONES[nx]; p = 'za ' + PL_M[60 - m] + ' ' + NOM[nx]; }
    return e + '|' + h + ':' + (m < 10 ? '0' : '') + m + ' – ' + p;
  }
  var TIME = { k: 'v', ex: ['pl2en', 'en2pl', 'listen', 'pl2en'] };
  function timeLevel(id, t, d, mins) {
    var items = [];
    range(1, 12).forEach(function (h) { mins.forEach(function (m) { items.push(clock(h, m)); }); });
    return { id: id, t: t, d: d, k: TIME.k, ex: TIME.ex, qp: 'Jak to powiedzieć po angielsku?', i: items };
  }
  put('s3', 'time', timeLevel('gtime-1', "Godziny: o'clock i half past", "3:00 = three o'clock, 3:30 = half past three (wpół do czwartej!).", [0, 30]));
  put('s3', 'time', timeLevel('gtime-2', 'Godziny: kwadranse', '3:15 = a quarter past three, 3:45 = a quarter to four.', [15, 45]));
  put('s4', '', timeLevel('gtime-3', 'Godziny: minuty „past”', '3:05, 3:10, 3:20, 3:25 – … past three.', [5, 10]));
  put('s4', '', timeLevel('gtime-4', 'Godziny: więcej „past”', '… past three – dwadzieścia i dwadzieścia pięć po.', [20, 25]));
  put('s4', '', timeLevel('gtime-5', 'Godziny: minuty „to”', '3:50 = ten to four, 3:55 = five to four.', [50, 55]));
  put('s4', '', timeLevel('gtime-6', 'Godziny: więcej „to”', '3:35 = twenty-five to four, 3:40 = twenty to four.', [35, 40]));

  Object.keys(groups).forEach(function (k) {
    var p = k.split('|');
    window.SPREAD(p[0], groups[k], p[1] || null);
  });
})();
