/*
 * Ćwiczenia generowane: rodzajnik (il / lo / la / l') i liczba mnoga rzeczowników, przymiotniki (znaczenie i zgoda),
 * liczebniki, liczebniki porządkowe i godziny. Ładujemy PO gen-verbs.js (który zbiera poziomy w IT_GROUPS).
 */
(function () {
  // rzeczownik|znaczenie|m/f|liczba mnoga
  var NOUNS = `
libro|książka|m|libri
ragazzo|chłopak|m|ragazzi
fratello|brat|m|fratelli
amico|przyjaciel|m|amici
padre|ojciec|m|padri
figlio|syn|m|figli
nonno|dziadek|m|nonni
professore|nauczyciel|m|professori
medico|lekarz|m|medici
giorno|dzień|m|giorni
problema|problem|m|problemi
programma|program|m|programmi
tema|temat (wypracowanie)|m|temi
sistema|system|m|sistemi
clima|klimat|m|climi
divano|kanapa|m|divani
albero|drzewo|m|alberi
uomo|mężczyzna|m|uomini
uovo|jajko|m|uova
braccio|ręka (ramię)|m|braccia
dito|palec|m|dita
ginocchio|kolano|m|ginocchia
paese|kraj (miasteczko)|m|paesi
mese|miesiąc|m|mesi
esame|egzamin|m|esami
treno|pociąg|m|treni
aereo|samolot|m|aerei
giardino|ogród|m|giardini
caffè|kawa|m|caffè
bar|bar|m|bar
sport|sport|m|sport
film|film|m|film
orologio|zegar|m|orologi
negozio|sklep|m|negozi
zio|wujek|m|zii
lago|jezioro|m|laghi
gioco|gra (zabawa)|m|giochi
parco|park|m|parchi
mare|morze|m|mari
computer|komputer|m|computer
telefono|telefon|m|telefoni
bicchiere|szklanka|m|bicchieri
piatto|talerz|m|piatti
coltello|nóż|m|coltelli
formaggio|ser|m|formaggi
pesce|ryba|m|pesci
vino|wino|m|vini
lavoro|praca|m|lavori
viaggio|podróż|m|viaggi
biglietto|bilet|m|biglietti
autobus|autobus|m|autobus
museo|muzeum|m|musei
ristorante|restauracja|m|ristoranti
cinema|kino|m|cinema
appartamento|mieszkanie|m|appartamenti
bagno|łazienka|m|bagni
letto|łóżko|m|letti
specchio|lustro|m|specchi
armadio|szafa|m|armadi
zaino|plecak|m|zaini
studente|student|m|studenti
zucchero|cukier|m|zuccheri
sbaglio|błąd|m|sbagli
spettacolo|przedstawienie|m|spettacoli
psicologo|psycholog|m|psicologi
gnomo|krasnal|m|gnomi
occhio|oko|m|occhi
orecchio|ucho|m|orecchi
piede|stopa|m|piedi
cuore|serce|m|cuori
dente|ząb|m|denti
anno|rok|m|anni
inverno|zima|m|inverni
mondo|świat|m|mondi
fiume|rzeka|m|fiumi
bosco|las|m|boschi
vento|wiatr|m|venti
colore|kolor|m|colori
numero|numer|m|numeri
nome|imię|m|nomi
cognome|nazwisko|m|cognomi
regalo|prezent|m|regali
amore|miłość|m|amori
ospedale|szpital|m|ospedali
ufficio|biuro|m|uffici
aeroporto|lotnisko|m|aeroporti
albergo|hotel|m|alberghi
elefante|słoń|m|elefanti
scontrino|paragon|m|scontrini
yogurt|jogurt|m|yogurt
pneumatico|opona|m|pneumatici
errore|błąd|m|errori
posto|miejsce|m|posti
lenzuolo|prześcieradło|m|lenzuola
paio|para|m|paia
casa|dom|f|case
madre|matka|f|madri
sorella|siostra|f|sorelle
figlia|córka|f|figlie
nonna|babcia|f|nonne
donna|kobieta|f|donne
famiglia|rodzina|f|famiglie
mano|dłoń (ręka)|f|mani
foto|zdjęcie|f|foto
radio|radio|f|radio
moto|motocykl|f|moto
auto|samochód|f|auto
città|miasto|f|città
università|uniwersytet|f|università
verità|prawda|f|verità
libertà|wolność|f|libertà
crisi|kryzys|f|crisi
tesi|teza (praca dyplomowa)|f|tesi
canzone|piosenka|f|canzoni
stazione|stacja|f|stazioni
lezione|lekcja|f|lezioni
televisione|telewizja|f|televisioni
notte|noc|f|notti
chiave|klucz|f|chiavi
classe|klasa|f|classi
nave|statek|f|navi
luce|światło|f|luci
voce|głos|f|voci
pace|pokój (brak wojny)|f|paci
settimana|tydzień|f|settimane
ora|godzina|f|ore
estate|lato|f|estati
spiaggia|plaża|f|spiagge
valigia|walizka|f|valigie
camicia|koszula|f|camicie
arancia|pomarańcza|f|arance
farmacia|apteka|f|farmacie
amica|przyjaciółka|f|amiche
banca|bank|f|banche
lingua|język|f|lingue
mela|jabłko|f|mele
fragola|truskawka|f|fragole
pizza|pizza|f|pizze
bottiglia|butelka|f|bottiglie
tazza|filiżanka|f|tazze
gonna|spódnica|f|gonne
giacca|kurtka|f|giacche
scarpa|but|f|scarpe
testa|głowa|f|teste
bocca|usta|f|bocche
gamba|noga|f|gambe
schiena|plecy|f|schiene
faccia|twarz|f|facce
lettera|list|f|lettere
parola|słowo|f|parole
domanda|pytanie|f|domande
risposta|odpowiedź|f|risposte
idea|pomysł|f|idee
penna|długopis|f|penne
sedia|krzesło|f|sedie
finestra|okno|f|finestre
porta|drzwi|f|porte
cucina|kuchnia|f|cucine
camera|pokój|f|camere
strada|ulica|f|strade
piazza|plac|f|piazze
chiesa|kościół|f|chiese
scuola|szkoła|f|scuole
isola|wyspa|f|isole
montagna|góra|f|montagne
festa|święto (impreza)|f|feste
bicicletta|rower|f|biciclette
vita|życie|f|vite
legge|prawo (ustawa)|f|leggi
specie|gatunek|f|specie
serie|serial (seria)|f|serie
ape|pszczoła|f|api
acqua|woda|f|acque
amicizia|przyjaźń|f|amicizie
opinione|opinia|f|opinioni
abitudine|nawyk|f|abitudini
`;
  // przymiotnik|znaczenie[|r. żeński,l. mn. męska,l. mn. żeńska] – bez form: reguły (-o: 4 formy, -e: 2 formy)
  var ADJ = `
alto|wysoki
basso|niski
grande|duży
piccolo|mały
nuovo|nowy
vecchio|stary|vecchia,vecchi,vecchie
buono|dobry
cattivo|zły
bello|piękny
brutto|brzydki
caro|drogi
economico|tani|economica,economici,economiche
lungo|długi|lunga,lunghi,lunghe
corto|krótki
veloce|szybki
lento|wolny (powolny)
facile|łatwy
difficile|trudny
caldo|ciepły (gorący)
freddo|zimny
pulito|czysty
sporco|brudny|sporca,sporchi,sporche
pieno|pełny
vuoto|pusty
ricco|bogaty|ricca,ricchi,ricche
povero|biedny
felice|szczęśliwy
triste|smutny
stanco|zmęczony|stanca,stanchi,stanche
contento|zadowolony
malato|chory
simpatico|sympatyczny|simpatica,simpatici,simpatiche
antipatico|niesympatyczny|antipatica,antipatici,antipatiche
intelligente|inteligentny
gentile|miły (uprzejmy)
timido|nieśmiały
pigro|leniwy
divertente|zabawny
noioso|nudny
interessante|ciekawy
importante|ważny
tranquillo|spokojny
moderno|nowoczesny
antico|dawny (zabytkowy)|antica,antichi,antiche
famoso|sławny
giovane|młody
forte|silny
debole|słaby
grasso|gruby
magro|chudy
biondo|blond
rosso|czerwony
bianco|biały|bianca,bianchi,bianche
nero|czarny
giallo|żółty
azzurro|błękitny
verde|zielony
grigio|szary|grigia,grigi,grigie
blu|niebieski (granatowy)|blu,blu,blu
rosa|różowy|rosa,rosa,rosa
viola|fioletowy|viola,viola,viola
marrone|brązowy
italiano|włoski
polacco|polski|polacca,polacchi,polacche
tedesco|niemiecki|tedesca,tedeschi,tedesche
francese|francuski
inglese|angielski
spagnolo|hiszpański
preoccupato|zmartwiony
nervoso|zdenerwowany
occupato|zajęty
pronto|gotowy
sicuro|pewny (bezpieczny)
pericoloso|niebezpieczny
comodo|wygodny
scomodo|niewygodny
utile|przydatny
necessario|potrzebny|necessaria,necessari,necessarie
possibile|możliwy
impossibile|niemożliwy
chiaro|jasny
scuro|ciemny
dolce|słodki
salato|słony
amaro|gorzki
piccante|ostry (w smaku)
fresco|świeży|fresca,freschi,fresche
sano|zdrowy
aperto|otwarty
chiuso|zamknięty
largo|szeroki|larga,larghi,larghe
stretto|wąski
`;
  var lines = function (s) { return s.split('\n').map(function (l) { return l.trim(); }).filter(Boolean).map(function (l) { return l.split('|'); }); };
  function chunks(a, n) { var out = []; for (var i = 0; i < a.length; i += n) out.push(a.slice(i, i + n)); return out; }
  var groups = window.IT_GROUPS || {};
  function put(st, lv) { (groups[st] = groups[st] || []).push(lv); }
  var at = function (arr, i) { return arr[Math.min(i, arr.length - 1)]; };
  function form(id, t, d, qp, items, ex) {
    return { id: id, t: t, d: d, k: 'v', qp: qp, flip: true, strict: true, ex: ex || ['pl2en', 'type', 'pl2en'], i: items };
  }

  /* ---- rodzajnik i liczba mnoga ---- */
  // rodzajnik określony: il / lo / l' (męski), la / l' (żeński)
  function article(word, g) {
    if (/^[aeiouàèéìòù]/i.test(word)) return "l'";
    if (g === 'f') return 'la';
    return /^(s[^aeiouàèéìòù]|z|gn|ps|pn|x|y)/i.test(word) ? 'lo' : 'il';
  }
  function plArticle(word, g) {
    if (g === 'f') return 'le';
    return /^([aeiouàèéìòù]|s[^aeiouàèéìòù]|z|gn|ps|pn|x|y)/i.test(word) ? 'gli' : 'i';
  }
  var nouns = lines(NOUNS);
  var WRONG = { il: ['lo', 'la'], lo: ['il', 'la'], la: ['il', 'lo'], "l'": ['il', 'la'] };
  var TIP = {
    il: 'il – rodzaj męski przed zwykłą spółgłoską',
    lo: 'lo – rodzaj męski przed s + spółgłoska, z, gn, ps, y',
    la: 'la – rodzaj żeński przed spółgłoską',
    "l'm": "l' – rodzaj męski przed samogłoską", "l'f": "l' – rodzaj żeński przed samogłoską"
  };
  chunks(nouns, 20).forEach(function (c, ci) {
    var n = ci + 1;
    put(at(['s2', 's2', 's2', 's3', 's3', 's3', 's4', 's4', 's4', 's5'], ci), { id: 'gn-g' + n, t: 'Il, lo, la czy l\'? Zestaw ' + n,
      d: 'Rodzajnik zależy od rodzaju i pierwszej litery: il libro, lo zaino, la casa, l\'amico. Uwaga: il problema, la mano.', k: 'm', qp: 'Jaki rodzajnik pasuje?',
      i: c.map(function (x) {
        var a = article(x[0], x[2]);
        return x[0] + '|' + a + '|' + WRONG[a].join(',') + '|' + TIP[a === "l'" ? "l'" + x[2] : a] + ' (' + x[1] + ')';
      }) });
    put(at(['s2', 's2', 's3', 's3', 's3', 's4', 's4', 's4', 's5', 's5'], ci), form('gn-p' + n, 'Liczba mnoga: zestaw ' + n,
      '-o → -i (libri), -a → -e (case), -e → -i (chiavi). Bez zmian: città, caffè, film. Wyjątki: uomini, uova, braccia.', 'Podaj liczbę mnogą:',
      c.map(function (x) {
        var a = article(x[0], x[2]);
        return x[3] + '|' + a + (a === "l'" ? '' : ' ') + x[0] + ' → ' + plArticle(x[3], x[2] === 'm' && /^(uova|braccia|dita|ginocchia|lenzuola|paia)$/.test(x[3]) ? 'f' : x[2]) + ' … (' + x[1] + ')';
      })));
  });

  /* ---- przymiotniki ---- */
  var adjs = lines(ADJ).map(function (p) {
    var m = p[0], f, mp, fp;
    if (p[2]) { var x = p[2].split(','); f = x[0]; mp = x[1]; fp = x[2]; }
    else if (/o$/.test(m)) { var b = m.slice(0, -1); f = b + 'a'; mp = b + 'i'; fp = b + 'e'; }
    else if (/e$/.test(m)) { f = m; mp = fp = m.slice(0, -1) + 'i'; }
    else { f = mp = fp = m; }
    return { m: m, pl: p[1], f: f, mp: mp, fp: fp };
  });
  chunks(adjs, 20).forEach(function (c, ci) {
    var n = ci + 1, items = [];
    var seen = {};
    var add = function (x) { var k = x.split('|')[0]; if (!seen[k]) { seen[k] = 1; items.push(x); } }; // blu, rosa: ta sama forma
    c.forEach(function (a, i) {
      add(a.f + '|' + a.m + ' → rodzaj żeński (la …) — ' + a.pl);
      add(i % 2 ? a.mp + '|' + a.m + ' → l. mnoga, r. męski (i …) — ' + a.pl : a.fp + '|' + a.m + ' → l. mnoga, r. żeński (le …) — ' + a.pl);
    });
    put(at(['s2', 's2', 's3', 's3', 's4'], ci), { id: 'ga-m' + n, t: 'Przymiotniki: zestaw ' + n, d: 'Dwadzieścia przymiotników – znaczenie.', k: 'v',
      i: c.map(function (a) { return a.m + '|' + a.pl; }) });
    put(at(['s2', 's3', 's3', 's4', 's4'], ci), form('ga-f' + n, 'Zgoda przymiotnika ' + n,
      'alto → alta, alti, alte. Na -e: grande, grandi. Bez zmian: blu, rosa, viola.', 'Dopasuj formę przymiotnika:', items));
  });

  /* ---- liczebniki ---- */
  var U = ['zero', 'uno', 'due', 'tre', 'quattro', 'cinque', 'sei', 'sette', 'otto', 'nove', 'dieci', 'undici', 'dodici', 'tredici',
    'quattordici', 'quindici', 'sedici', 'diciassette', 'diciotto', 'diciannove'];
  var T = ['', '', 'venti', 'trenta', 'quaranta', 'cinquanta', 'sessanta', 'settanta', 'ottanta', 'novanta'];
  // tre na końcu dłuższej liczby dostaje akcent: ventitré, centotré
  var tail = function (r) { return r === 3 ? 'tré' : it(r); };
  function it(n) {
    if (n < 20) return U[n];
    if (n < 100) {
      var t = T[Math.floor(n / 10)], u = n % 10;
      if (u === 1 || u === 8) t = t.slice(0, -1); // ventuno, ventotto
      return t + (u ? (u === 3 ? 'tré' : U[u]) : '');
    }
    if (n < 1000) {
      var h = Math.floor(n / 100), r = n % 100;
      return (h === 1 ? 'cento' : U[h] + 'cento') + (r ? tail(r) : '');
    }
    var th = Math.floor(n / 1000), rr = n % 1000;
    return (th === 1 ? 'mille' : it(th) + 'mila') + (rr ? tail(rr) : '');
  }
  window.IT_NUM = it; // do testów
  var NUM = { k: 'v', qp: 'Napisz tę liczbę po włosku:', strict: true, ex: ['en2pl', 'pl2en', 'type', 'listen'] };
  function numLevel(id, t, d, items) { var o = { id: id, t: t, d: d, i: items }; for (var k in NUM) o[k] = NUM[k]; return o; }
  var range = function (a, b) { var r = []; for (var i = a; i <= b; i++) r.push(i); return r; };
  var numItem = function (n) { return it(n) + '|' + n; };
  put('s1', numLevel('gnum-1', 'Liczby 0–10', 'Zero, uno, due, tre…', range(0, 10).map(numItem)));
  put('s1', numLevel('gnum-2', 'Liczby 11–20', 'Undici, dodici… diciassette = 10 + 7.', range(11, 20).map(numItem)));
  chunks(range(21, 100), 20).forEach(function (c, ci) {
    put('s2', numLevel('gnum-' + (ci + 3), 'Liczby ' + c[0] + '–' + c[c.length - 1], 'Piszemy razem: ventidue, trentacinque. Przed uno i otto znika samogłoska: ventuno, trentotto.', c.map(numItem)));
  });
  var picks = function (count, base, span, mul, add) {
    var out = [];
    for (var k = 0; out.length < count && k < count * 3; k++) { var v = base + ((k * mul + add) % span); if (out.indexOf(v) < 0) out.push(v); }
    return out.sort(function (a, b) { return a - b; });
  };
  chunks([100, 101, 103, 108, 200, 500, 700, 900].concat(picks(32, 101, 899, 137, 61)), 20).forEach(function (c, ci) {
    put('s3', numLevel('gnum-h' + (ci + 1), 'Setki ' + (ci + 1), 'Cento, centouno, centotré, duecento, cinquecento – wszystko razem.', c.map(numItem)));
  });
  chunks([1000, 2000, 1492, 1861, 1999, 2010, 2023, 5000, 9999].concat(picks(21, 1000, 9000, 1979, 433)), 15).forEach(function (c, ci) {
    put('s4', numLevel('gnum-t' + (ci + 1), 'Tysiące i lata ' + (ci + 1), 'Mille, duemila, millenovecentonovantanove – też jednym słowem.', c.map(numItem)));
  });
  var ORD = ['', 'primo', 'secondo', 'terzo', 'quarto', 'quinto', 'sesto', 'settimo', 'ottavo', 'nono', 'decimo'];
  var PORZ = ['', 'pierwszy', 'drugi', 'trzeci', 'czwarty', 'piąty', 'szósty', 'siódmy', 'ósmy', 'dziewiąty', 'dziesiąty'];
  put('s3', numLevel('gord-1', 'Liczebniki porządkowe', 'Primo, secondo, terzo… Odmieniają się jak przymiotniki: la prima volta, il terzo piano.',
    range(1, 10).map(function (n) { return ORD[n] + '|' + n + '. (' + PORZ[n] + ')'; })));

  /* ---- godziny ---- */
  var PLN = ['', 'pierwsza', 'druga', 'trzecia', 'czwarta', 'piąta', 'szósta', 'siódma', 'ósma', 'dziewiąta', 'dziesiąta', 'jedenasta', 'dwunasta'];
  var PLL = ['', 'pierwszej', 'drugiej', 'trzeciej', 'czwartej', 'piątej', 'szóstej', 'siódmej', 'ósmej', 'dziewiątej', 'dziesiątej', 'jedenastej', 'dwunastej'];
  var MIN = { 5: 'cinque', 10: 'dieci', 15: 'un quarto', 20: 'venti', 25: 'venticinque' };
  var PLM = { 5: 'pięć', 10: 'dziesięć', 15: 'kwadrans', 20: 'dwadzieścia', 25: 'dwadzieścia pięć' };
  var hour = function (h) { return h === 1 ? "È l'una" : 'Sono le ' + U[h]; };
  function clock(h, m) {
    var nx = h % 12 + 1, u, p;
    if (m === 0) { u = hour(h); p = PLN[h]; }
    else if (m === 30) { u = hour(h) + ' e mezza'; p = 'wpół do ' + PLL[nx]; }
    else if (m < 30) { u = hour(h) + ' e ' + MIN[m]; p = (m === 15 ? 'kwadrans' : PLM[m]) + ' po ' + PLL[h]; }
    else { u = hour(nx) + ' meno ' + MIN[60 - m]; p = 'za ' + PLM[60 - m] + ' ' + PLN[nx]; }
    return u + '.|' + h + ':' + (m < 10 ? '0' : '') + m + ' – ' + p;
  }
  function timeLevel(id, t, d, mins) {
    var items = [];
    range(1, 12).forEach(function (h) { mins.forEach(function (m) { items.push(clock(h, m)); }); });
    return { id: id, t: t, d: d, k: 'v', ex: ['pl2en', 'en2pl', 'listen', 'pl2en'], qp: 'Jak to powiedzieć po włosku?', i: items };
  }
  put('s3', timeLevel('gtime-1', 'Godziny: pełne i „e mezza”', "È l'una, sono le due. E mezza = wpół do następnej.", [0, 30]));
  put('s3', timeLevel('gtime-2', 'Godziny: kwadranse', 'E un quarto = kwadrans po, meno un quarto = za kwadrans.', [15, 45]));
  put('s4', timeLevel('gtime-3', 'Godziny: minuty „e”', 'Sono le tre e dieci = 3:10.', [5, 10, 20]));
  put('s4', timeLevel('gtime-4', 'Godziny: minuty „meno”', 'Sono le quattro meno dieci = 3:50.', [40, 50, 55]));

  Object.keys(groups).forEach(function (st) { window.SPREAD(st, groups[st]); });
})();
