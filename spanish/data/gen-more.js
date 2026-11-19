/*
 * Ćwiczenia generowane: rodzaj (el / la) i liczba mnoga rzeczowników, przymiotniki (znaczenie i zgoda),
 * liczebniki, liczebniki porządkowe i godziny. Ładujemy PO gen-verbs.js (który zbiera poziomy w ES_GROUPS).
 */
(function () {
  // rzeczownik|znaczenie|m/f|liczba mnoga
  var NOUNS = `
libro|książka|m|libros
coche|samochód|m|coches
perro|pies|m|perros
gato|kot|m|gatos
hermano|brat|m|hermanos
amigo|przyjaciel|m|amigos
hombre|mężczyzna|m|hombres
padre|ojciec|m|padres
hijo|syn|m|hijos
abuelo|dziadek|m|abuelos
profesor|nauczyciel|m|profesores
médico|lekarz|m|médicos
día|dzień|m|días
mapa|mapa|m|mapas
problema|problem|m|problemas
idioma|język (mowa)|m|idiomas
tema|temat|m|temas
sistema|system|m|sistemas
programa|program|m|programas
clima|klimat|m|climas
sofá|kanapa|m|sofás
árbol|drzewo|m|árboles
papel|papier|m|papeles
hotel|hotel|m|hoteles
hospital|szpital|m|hospitales
animal|zwierzę|m|animales
país|kraj|m|países
mes|miesiąc|m|meses
lápiz|ołówek|m|lápices
pez|ryba (żywa)|m|peces
examen|egzamin|m|exámenes
tren|pociąg|m|trenes
avión|samolot|m|aviones
camión|ciężarówka|m|camiones
jardín|ogród|m|jardines
café|kawa|m|cafés
menú|menu|m|menús
reloj|zegar|m|relojes
mar|morze|m|mares
ordenador|komputer|m|ordenadores
teléfono|telefon|m|teléfonos
vaso|szklanka|m|vasos
plato|talerz|m|platos
cuchillo|nóż|m|cuchillos
tenedor|widelec|m|tenedores
queso|ser|m|quesos
huevo|jajko|m|huevos
pescado|ryba (jedzenie)|m|pescados
pollo|kurczak|m|pollos
vino|wino|m|vinos
trabajo|praca|m|trabajos
viaje|podróż|m|viajes
billete|bilet|m|billetes
autobús|autobus|m|autobuses
barco|statek|m|barcos
aeropuerto|lotnisko|m|aeropuertos
museo|muzeum|m|museos
parque|park|m|parques
banco|bank|m|bancos
restaurante|restauracja|m|restaurantes
cine|kino|m|cines
edificio|budynek|m|edificios
piso|mieszkanie|m|pisos
baño|łazienka|m|baños
dormitorio|sypialnia|m|dormitorios
salón|salon|m|salones
suelo|podłoga|m|suelos
espejo|lustro|m|espejos
armario|szafa|m|armarios
sillón|fotel|m|sillones
zapato|but|m|zapatos
vestido|sukienka|m|vestidos
abrigo|płaszcz|m|abrigos
bolso|torebka|m|bolsos
ojo|oko|m|ojos
brazo|ramię|m|brazos
pie|stopa|m|pies
dedo|palec|m|dedos
corazón|serce|m|corazones
diente|ząb|m|dientes
lunes|poniedziałek|m|lunes
cumpleaños|urodziny|m|cumpleaños
paraguas|parasol|m|paraguas
año|rok|m|años
invierno|zima|m|inviernos
verano|lato|m|veranos
mundo|świat|m|mundos
río|rzeka|m|ríos
lago|jezioro|m|lagos
bosque|las|m|bosques
pueblo|wieś (miasteczko)|m|pueblos
viento|wiatr|m|vientos
color|kolor|m|colores
número|numer|m|números
nombre|imię|m|nombres
apellido|nazwisko|m|apellidos
regalo|prezent|m|regalos
deporte|sport|m|deportes
partido|mecz|m|partidos
equipo|drużyna|m|equipos
mercado|targ|m|mercados
precio|cena|m|precios
mensaje|wiadomość|m|mensajes
periódico|gazeta|m|periódicos
ejercicio|ćwiczenie|m|ejercicios
error|błąd|m|errores
lugar|miejsce|m|lugares
casa|dom|f|casas
mesa|stół|f|mesas
silla|krzesło|f|sillas
ventana|okno|f|ventanas
puerta|drzwi|f|puertas
cocina|kuchnia|f|cocinas
cama|łóżko|f|camas
lámpara|lampa|f|lámparas
hermana|siostra|f|hermanas
madre|matka|f|madres
hija|córka|f|hijas
abuela|babcia|f|abuelas
mujer|kobieta|f|mujeres
familia|rodzina|f|familias
mano|ręka (dłoń)|f|manos
foto|zdjęcie|f|fotos
radio|radio|f|radios
moto|motocykl|f|motos
ciudad|miasto|f|ciudades
universidad|uniwersytet|f|universidades
verdad|prawda|f|verdades
libertad|wolność|f|libertades
canción|piosenka|f|canciones
estación|stacja|f|estaciones
habitación|pokój|f|habitaciones
lección|lekcja|f|lecciones
conversación|rozmowa|f|conversaciones
televisión|telewizja|f|televisiones
noche|noc|f|noches
calle|ulica|f|calles
llave|klucz|f|llaves
clase|klasa (lekcja)|f|clases
nube|chmura|f|nubes
flor|kwiat|f|flores
luz|światło|f|luces
voz|głos|f|voces
vez|raz|f|veces
nariz|nos|f|narices
semana|tydzień|f|semanas
hora|godzina|f|horas
tarde|popołudnie|f|tardes
primavera|wiosna|f|primaveras
playa|plaża|f|playas
montaña|góra|f|montañas
isla|wyspa|f|islas
tienda|sklep|f|tiendas
farmacia|apteka|f|farmacias
iglesia|kościół|f|iglesias
escuela|szkoła|f|escuelas
oficina|biuro|f|oficinas
empresa|firma|f|empresas
fiesta|impreza (święto)|f|fiestas
comida|jedzenie|f|comidas
bebida|napój|f|bebidas
fruta|owoc|f|frutas
manzana|jabłko|f|manzanas
naranja|pomarańcza|f|naranjas
sopa|zupa|f|sopas
botella|butelka|f|botellas
taza|filiżanka|f|tazas
camisa|koszula|f|camisas
falda|spódnica|f|faldas
chaqueta|kurtka|f|chaquetas
cabeza|głowa|f|cabezas
boca|usta|f|bocas
pierna|noga|f|piernas
espalda|plecy|f|espaldas
oreja|ucho|f|orejas
cara|twarz|f|caras
carta|list|f|cartas
palabra|słowo|f|palabras
pregunta|pytanie|f|preguntas
respuesta|odpowiedź|f|respuestas
idea|pomysł|f|ideas
película|film|f|películas
novela|powieść|f|novelas
revista|czasopismo|f|revistas
cuenta|rachunek|f|cuentas
tarjeta|karta|f|tarjetas
maleta|walizka|f|maletas
bicicleta|rower|f|bicicletas
vida|życie|f|vidas
ley|prawo (ustawa)|f|leyes
red|sieć|f|redes
pared|ściana|f|paredes
razón|powód|f|razones
opinión|opinia|f|opiniones
costumbre|zwyczaj|f|costumbres
`;
  // przymiotnik|znaczenie[|forma ż., l.mn. m., l.mn. ż.] – bez form: reguły (-o/-a, -e, spółgłoska, -z)
  var ADJ = `
alto|wysoki
bajo|niski
grande|duży
pequeño|mały
nuevo|nowy
viejo|stary
bueno|dobry
malo|zły
bonito|ładny
feo|brzydki
caro|drogi
barato|tani
largo|długi
corto|krótki
rápido|szybki
lento|wolny
fácil|łatwy
difícil|trudny
caliente|gorący
frío|zimny
limpio|czysty
sucio|brudny
lleno|pełny
vacío|pusty
rico|bogaty / smaczny
pobre|biedny
feliz|szczęśliwy
triste|smutny
cansado|zmęczony
contento|zadowolony
enfermo|chory
guapo|przystojny / ładny
simpático|sympatyczny
antipático|niesympatyczny
inteligente|inteligentny
tonto|głupi
amable|miły
tímido|nieśmiały
trabajador|pracowity|trabajadora,trabajadores,trabajadoras
perezoso|leniwy
divertido|zabawny
aburrido|nudny
interesante|ciekawy
importante|ważny
tranquilo|spokojny
ruidoso|hałaśliwy
moderno|nowoczesny
antiguo|dawny / zabytkowy
famoso|sławny
joven|młody|joven,jóvenes,jóvenes
mayor|starszy
fuerte|silny
débil|słaby
gordo|gruby
delgado|szczupły
rubio|blondyn
moreno|brunet / opalony
rojo|czerwony
blanco|biały
negro|czarny
amarillo|żółty
azul|niebieski
verde|zielony
gris|szary
marrón|brązowy|marrón,marrones,marrones
español|hiszpański|española,españoles,españolas
inglés|angielski|inglesa,ingleses,inglesas
alemán|niemiecki|alemana,alemanes,alemanas
francés|francuski|francesa,franceses,francesas
polaco|polski
italiano|włoski
preocupado|zmartwiony
nervioso|zdenerwowany
ocupado|zajęty
listo|gotowy / mądry
seguro|pewny / bezpieczny
peligroso|niebezpieczny
cómodo|wygodny
incómodo|niewygodny
útil|przydatny
necesario|potrzebny
posible|możliwy
imposible|niemożliwy
claro|jasny
oscuro|ciemny
dulce|słodki
salado|słony
amargo|gorzki
picante|ostry (w smaku)
fresco|świeży
sano|zdrowy
abierto|otwarty
cerrado|zamknięty
`;
  var lines = function (s) { return s.split('\n').map(function (l) { return l.trim(); }).filter(Boolean).map(function (l) { return l.split('|'); }); };
  function chunks(a, n) { var out = []; for (var i = 0; i < a.length; i += n) out.push(a.slice(i, i + n)); return out; }
  var groups = window.ES_GROUPS || {};
  function put(st, lv) { (groups[st] = groups[st] || []).push(lv); }
  var at = function (arr, i) { return arr[Math.min(i, arr.length - 1)]; };
  function form(id, t, d, qp, items, ex) {
    return { id: id, t: t, d: d, k: 'v', qp: qp, flip: true, strict: true, ex: ex || ['pl2en', 'type', 'pl2en'], i: items };
  }

  /* ---- rodzaj i liczba mnoga ---- */
  var nouns = lines(NOUNS);
  var ART = { m: 'el (rodzaj męski)', f: 'la (rodzaj żeński)' };
  var TIP = { m: 'Rodzaj męski: el … , un …', f: 'Rodzaj żeński: la … , una …' };
  chunks(nouns, 20).forEach(function (c, ci) {
    var n = ci + 1;
    put(at(['s2', 's2', 's2', 's3', 's3', 's3', 's4', 's4', 's4', 's5'], ci), { id: 'gn-g' + n, t: 'El czy la? Zestaw ' + n,
      d: 'Zwykle -o = el, -a = la. Ale uwaga: el día, el problema, la mano, la foto.', k: 'm', qp: 'Jaki rodzajnik pasuje?',
      i: c.map(function (x) { return x[0] + '|' + ART[x[2]] + '|' + ART[x[2] === 'm' ? 'f' : 'm'] + '|' + TIP[x[2]] + ' (' + x[1] + ')'; }) });
    put(at(['s2', 's2', 's3', 's3', 's3', 's4', 's4', 's4', 's5', 's5'], ci), form('gn-p' + n, 'Liczba mnoga: zestaw ' + n,
      'Samogłoska → +s (casas), spółgłoska → +es (ciudades), z → ces (lápices).', 'Podaj liczbę mnogą:',
      c.map(function (x) { return x[3] + '|' + (x[2] === 'm' ? 'el ' : 'la ') + x[0] + ' → los / las … (' + x[1] + ')'; })));
  });

  /* ---- przymiotniki ---- */
  var adjs = lines(ADJ).map(function (p) {
    var m = p[0], f, mp, fp;
    if (p[2]) { var x = p[2].split(','); f = x[0]; mp = x[1]; fp = x[2]; }
    else if (/o$/.test(m)) { f = m.slice(0, -1) + 'a'; mp = m + 's'; fp = f + 's'; }
    else if (/[aeé]$/.test(m)) { f = m; mp = fp = m + 's'; }
    else if (/z$/.test(m)) { f = m; mp = fp = m.slice(0, -1) + 'ces'; }
    else { f = m; mp = fp = m + 'es'; }
    return { m: m, pl: p[1], f: f, mp: mp, fp: fp };
  });
  chunks(adjs, 20).forEach(function (c, ci) {
    var n = ci + 1, items = [];
    c.forEach(function (a, i) {
      items.push(a.f + '|' + a.m + ' → rodzaj żeński (la …) — ' + a.pl);
      items.push(i % 2 ? a.mp + '|' + a.m + ' → l. mnoga, r. męski (los …) — ' + a.pl : a.fp + '|' + a.m + ' → l. mnoga, r. żeński (las …) — ' + a.pl);
    });
    put(at(['s2', 's2', 's3', 's3', 's4'], ci), { id: 'ga-m' + n, t: 'Przymiotniki: zestaw ' + n, d: 'Dwadzieścia przymiotników – znaczenie.', k: 'v',
      i: c.map(function (a) { return a.m + '|' + a.pl; }) });
    put(at(['s2', 's3', 's3', 's4', 's4'], ci), form('ga-f' + n, 'Zgoda przymiotnika ' + n,
      'alto → alta, altos, altas. Na -e i spółgłoskę: grande, grandes; fácil, fáciles.', 'Dopasuj formę przymiotnika:', items));
  });

  /* ---- liczebniki ---- */
  var U = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce', 'trece', 'catorce',
    'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve', 'veinte', 'veintiuno', 'veintidós', 'veintitrés', 'veinticuatro',
    'veinticinco', 'veintiséis', 'veintisiete', 'veintiocho', 'veintinueve'];
  var T = ['', '', '', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
  var H = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];
  function es(n) {
    if (n < 30) return U[n];
    if (n < 100) return T[Math.floor(n / 10)] + (n % 10 ? ' y ' + U[n % 10] : '');
    if (n === 100) return 'cien';
    if (n < 1000) return H[Math.floor(n / 100)] + (n % 100 ? ' ' + es(n % 100) : '');
    var th = Math.floor(n / 1000), r = n % 1000;
    return (th === 1 ? 'mil' : es(th) + ' mil') + (r ? ' ' + es(r) : '');
  }
  var NUM = { k: 'v', qp: 'Napisz tę liczbę po hiszpańsku:', strict: true, ex: ['en2pl', 'pl2en', 'type', 'listen'] };
  function numLevel(id, t, d, items) { var o = { id: id, t: t, d: d, i: items }; for (var k in NUM) o[k] = NUM[k]; return o; }
  var range = function (a, b) { var r = []; for (var i = a; i <= b; i++) r.push(i); return r; };
  var numItem = function (n) { return es(n) + '|' + n; };
  put('s1', numLevel('gnum-1', 'Liczby 0–10', 'Cero, uno, dos, tres…', range(0, 10).map(numItem)));
  put('s1', numLevel('gnum-2', 'Liczby 11–20', 'Once, doce… dieciséis = 10 + 6.', range(11, 20).map(numItem)));
  chunks(range(21, 100), 20).forEach(function (c, ci) {
    put('s2', numLevel('gnum-' + (ci + 3), 'Liczby ' + c[0] + '–' + c[c.length - 1], 'Do 29 jednym słowem (veintidós), potem z „y”: treinta y uno.', c.map(numItem)));
  });
  var picks = function (count, base, span, mul, add) {
    var out = [];
    for (var k = 0; out.length < count && k < count * 3; k++) { var v = base + ((k * mul + add) % span); if (out.indexOf(v) < 0) out.push(v); }
    return out.sort(function (a, b) { return a - b; });
  };
  chunks([100, 101, 200, 500, 700, 900].concat(picks(34, 101, 899, 137, 61)), 20).forEach(function (c, ci) {
    put('s3', numLevel('gnum-h' + (ci + 1), 'Setki ' + (ci + 1), 'Cien, ciento uno, doscientos, quinientos, setecientos, novecientos.', c.map(numItem)));
  });
  chunks([1000, 2000, 1492, 1999, 2010, 2025, 5000, 9999].concat(picks(22, 1000, 9000, 1979, 433)), 15).forEach(function (c, ci) {
    put('s4', numLevel('gnum-t' + (ci + 1), 'Tysiące i lata ' + (ci + 1), 'Mil, dos mil, mil novecientos noventa y nueve.', c.map(numItem)));
  });
  var ORD = ['', 'primero', 'segundo', 'tercero', 'cuarto', 'quinto', 'sexto', 'séptimo', 'octavo', 'noveno', 'décimo'];
  var PORZ = ['', 'pierwszy', 'drugi', 'trzeci', 'czwarty', 'piąty', 'szósty', 'siódmy', 'ósmy', 'dziewiąty', 'dziesiąty'];
  put('s3', numLevel('gord-1', 'Liczebniki porządkowe', 'Primero, segundo, tercero… Przed rzeczownikiem: el primer piso, el tercer día.',
    range(1, 10).map(function (n) { return ORD[n] + '|' + n + '. (' + PORZ[n] + ')'; })));

  /* ---- godziny ---- */
  var PLN = ['', 'pierwsza', 'druga', 'trzecia', 'czwarta', 'piąta', 'szósta', 'siódma', 'ósma', 'dziewiąta', 'dziesiąta', 'jedenasta', 'dwunasta'];
  var PLL = ['', 'pierwszej', 'drugiej', 'trzeciej', 'czwartej', 'piątej', 'szóstej', 'siódmej', 'ósmej', 'dziewiątej', 'dziesiątej', 'jedenastej', 'dwunastej'];
  var MIN = { 5: 'cinco', 10: 'diez', 15: 'cuarto', 20: 'veinte', 25: 'veinticinco', 30: 'media' };
  var PLM = { 5: 'pięć', 10: 'dziesięć', 15: 'kwadrans', 20: 'dwadzieścia', 25: 'dwadzieścia pięć' };
  var hour = function (h) { return h === 1 ? 'Es la una' : 'Son las ' + U[h]; };
  function clock(h, m) {
    var nx = h % 12 + 1, u, p;
    if (m === 0) { u = hour(h); p = PLN[h]; }
    else if (m === 30) { u = hour(h) + ' y media'; p = 'wpół do ' + PLL[nx]; }
    else if (m < 30) { u = hour(h) + ' y ' + MIN[m]; p = (m === 15 ? 'kwadrans' : PLM[m]) + ' po ' + PLL[h]; }
    else { u = hour(nx) + ' menos ' + MIN[60 - m]; p = 'za ' + PLM[60 - m] + ' ' + PLN[nx]; }
    return u + '.|' + h + ':' + (m < 10 ? '0' : '') + m + ' – ' + p;
  }
  function timeLevel(id, t, d, mins) {
    var items = [];
    range(1, 12).forEach(function (h) { mins.forEach(function (m) { items.push(clock(h, m)); }); });
    return { id: id, t: t, d: d, k: 'v', ex: ['pl2en', 'en2pl', 'listen', 'pl2en'], qp: 'Jak to powiedzieć po hiszpańsku?', i: items };
  }
  put('s3', timeLevel('gtime-1', 'Godziny: pełne i „y media”', 'Es la una, son las dos. Y media = wpół do następnej.', [0, 30]));
  put('s3', timeLevel('gtime-2', 'Godziny: kwadranse', 'Y cuarto = kwadrans po, menos cuarto = za kwadrans.', [15, 45]));
  put('s4', timeLevel('gtime-3', 'Godziny: minuty „y”', 'Son las tres y diez = 3:10.', [5, 10, 20]));
  put('s4', timeLevel('gtime-4', 'Godziny: minuty „menos”', 'Son las cuatro menos diez = 3:50.', [40, 50, 55]));

  Object.keys(groups).forEach(function (st) { window.SPREAD(st, groups[st]); });
})();
