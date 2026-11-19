/*
 * Ćwiczenia generowane z ~180 czasowników: znaczenie, odmiana w czasie teraźniejszym, Pretérito Indefinido,
 * Imperfecto, Futuro, Condicional, Presente de Subjuntivo, tryb rozkazujący (tú), imiesłów (participio)
 * i gerundio. Formy wynikają z reguł; nieregularności podane są w polach linii:
 *   "bezokolicznik|znaczenie|cechy"   cechy (oddzielone spacją):
 *   e>ie o>ue e>i u>ue  – wymiana w temacie   zc – conozco   yo=… – nieregularne „yo” w czasie teraźniejszym
 *   pret=… – mocny temat Indefinido (tuv → tuve)   fut=… – temat Futuro/Condicional   part=…  imp=…  ger=…
 *   noimp – bez trybu rozkazującego   -se na końcu bezokolicznika = czasownik zwrotny (me, te, se…)
 * Czasowniki całkiem nieregularne mają tabele w OVR. Ten plik ładujemy PO plikach z treścią.
 */
(function () {
  var LEX = `
ser|być|noimp
estar|być (gdzieś, jakimś)|noimp
tener|mieć|e>ie yo=tengo pret=tuv fut=tendr imp=ten
hacer|robić|yo=hago pret=hic fut=har part=hecho imp=haz
poder|móc|o>ue pret=pud fut=podr ger=pudiendo noimp
decir|mówić / powiedzieć|e>i yo=digo pret=dij fut=dir part=dicho imp=di
querer|chcieć / kochać|e>ie pret=quis fut=querr noimp
hablar|mówić (językiem)|
comer|jeść|
vivir|mieszkać / żyć|
trabajar|pracować|
estudiar|uczyć się (studiować)|
ver|widzieć / oglądać|part=visto noimp
dar|dawać|
saber|wiedzieć / umieć|noimp
venir|przychodzić|e>ie yo=vengo pret=vin fut=vendr imp=ven
salir|wychodzić|yo=salgo fut=saldr imp=sal
poner|kłaść / stawiać|yo=pongo pret=pus fut=pondr part=puesto imp=pon
llegar|przybywać|
ir|iść / jechać|
escribir|pisać|part=escrito
leer|czytać|
beber|pić|
escuchar|słuchać|
mirar|patrzeć|
comprar|kupować|
pagar|płacić|
llamar|dzwonić / wołać|
necesitar|potrzebować|noimp
tomar|brać / pić|
llevar|nosić / zabierać|
abrir|otwierać|part=abierto
cerrar|zamykać|e>ie
pensar|myśleć|e>ie
empezar|zaczynać|e>ie
volver|wracać|o>ue part=vuelto
dormir|spać|o>ue
pedir|prosić / zamawiać|e>i
jugar|grać / bawić się|u>ue
conocer|znać|zc
entender|rozumieć|e>ie
aprender|uczyć się (czegoś)|
buscar|szukać|
esperar|czekać / mieć nadzieję|
ayudar|pomagać|
preguntar|pytać|
contestar|odpowiadać|
cocinar|gotować|
bailar|tańczyć|
cantar|śpiewać|
nadar|pływać|
viajar|podróżować|
caminar|spacerować|
visitar|odwiedzać|
lavar|myć|
limpiar|sprzątać|
descansar|odpoczywać|
desayunar|jeść śniadanie|
cenar|jeść kolację|
terminar|kończyć|
usar|używać|
ganar|zarabiać / wygrywać|
correr|biegać|
vender|sprzedawać|
creer|wierzyć / sądzić|
deber|musieć (powinienem)|noimp
recibir|otrzymywać|
decidir|decydować|
subir|wchodzić (na górę)|
bajar|schodzić|
entrar|wchodzić|
encontrar|znajdować|o>ue
recordar|pamiętać|o>ue
contar|liczyć / opowiadać|o>ue
mostrar|pokazywać|o>ue
almorzar|jeść obiad|o>ue
probar|próbować|o>ue
soñar|śnić / marzyć|o>ue
preferir|woleć|e>ie noimp
sentir|czuć / żałować|e>ie
servir|podawać / służyć|e>i
repetir|powtarzać|e>i
seguir|iść dalej / śledzić|e>i
traer|przynosić|yo=traigo pret=traj
oír|słyszeć|
conducir|prowadzić (samochód)|zc pret=conduj
traducir|tłumaczyć|zc pret=traduj
explicar|wyjaśniać|
practicar|ćwiczyć|
tocar|dotykać / grać (na czymś)|
sacar|wyjmować|
dejar|zostawiać / pozwalać|
enseñar|uczyć (kogoś) / pokazywać|
olvidar|zapominać|
cambiar|zmieniać|
alquilar|wynajmować|
enviar|wysyłać|noimp
preparar|przygotowywać|
pasar|spędzać / mijać|
gastar|wydawać (pieniądze)|
ahorrar|oszczędzać|
invitar|zapraszać|
amar|kochać|
odiar|nienawidzić|noimp
regresar|wracać|
reservar|rezerwować|
dibujar|rysować|
pintar|malować|
fumar|palić|
arreglar|naprawiać|
crear|tworzyć|
celebrar|świętować|
saludar|witać|
abrazar|przytulać|
gritar|krzyczeć|
llorar|płakać|
responder|odpowiadać (na coś)|
romper|łamać / psuć|part=roto
prometer|obiecywać|
compartir|dzielić się|
describir|opisywać|part=descrito
descubrir|odkrywać|part=descubierto
permitir|pozwalać|
sufrir|cierpieć|noimp
cubrir|przykrywać|part=cubierto
asistir|uczestniczyć|
discutir|kłócić się / dyskutować|
añadir|dodawać|
imprimir|drukować|
perder|gubić / przegrywać|e>ie
encender|włączać / zapalać|e>ie
recomendar|polecać|e>ie
calentar|podgrzewać|e>ie
mentir|kłamać|e>ie
mover|ruszać|o>ue
volar|latać|o>ue
morir|umierać|o>ue part=muerto noimp
devolver|zwracać|o>ue part=devuelto
resolver|rozwiązywać|o>ue part=resuelto
colgar|wieszać|o>ue
aprobar|zdawać (egzamin)|o>ue
vestir|ubierać|e>i
elegir|wybierać|e>i
corregir|poprawiać|e>i
medir|mierzyć|e>i
conseguir|osiągać / zdobywać|e>i
parecer|wydawać się|zc noimp
ofrecer|oferować|zc
agradecer|dziękować (za coś)|zc
crecer|rosnąć|zc noimp
nacer|rodzić się|zc noimp
producir|produkować|zc pret=produj
andar|chodzić|pret=anduv
caer|spadać|yo=caigo
construir|budować|
destruir|niszczyć|
incluir|zawierać / włączać|
contribuir|przyczyniać się|
suponer|przypuszczać|yo=supongo pret=supus fut=supondr part=supuesto noimp
proponer|proponować|yo=propongo pret=propus fut=propondr part=propuesto noimp
mantener|utrzymywać|e>ie yo=mantengo pret=mantuv fut=mantendr noimp
obtener|uzyskiwać|e>ie yo=obtengo pret=obtuv fut=obtendr noimp
levantarse|wstawać|
llamarse|nazywać się|
ducharse|brać prysznic|
lavarse|myć się|
acostarse|kłaść się spać|o>ue
vestirse|ubierać się|e>i
despertarse|budzić się|e>ie
sentarse|siadać|e>ie
quedarse|zostawać|
casarse|brać ślub|
preocuparse|martwić się|
divertirse|bawić się|e>ie
enfadarse|złościć się|
irse|iść sobie / wyjeżdżać|
sentirse|czuć się|e>ie
quejarse|narzekać|
equivocarse|mylić się|
acordarse|pamiętać (o czymś)|o>ue
`;

  // całkiem nieregularne formy (nadpisują reguły)
  var OVR = {
    ser: { pres: 'soy eres es somos sois son', pret: 'fui fuiste fue fuimos fuisteis fueron', impf: 'era eras era éramos erais eran',
      subj: 'sea seas sea seamos seáis sean', part: 'sido', ger: 'siendo' },
    estar: { pres: 'estoy estás está estamos estáis están', pret: 'estuve estuviste estuvo estuvimos estuvisteis estuvieron',
      subj: 'esté estés esté estemos estéis estén' },
    ir: { pres: 'voy vas va vamos vais van', pret: 'fui fuiste fue fuimos fuisteis fueron', impf: 'iba ibas iba íbamos ibais iban',
      subj: 'vaya vayas vaya vayamos vayáis vayan', imp: 've', ger: 'yendo' },
    dar: { pres: 'doy das da damos dais dan', pret: 'di diste dio dimos disteis dieron', subj: 'dé des dé demos deis den' },
    ver: { pres: 'veo ves ve vemos veis ven', pret: 'vi viste vio vimos visteis vieron', impf: 'veía veías veía veíamos veíais veían' },
    saber: { pres: 'sé sabes sabe sabemos sabéis saben', pret: 'supe supiste supo supimos supisteis supieron',
      subj: 'sepa sepas sepa sepamos sepáis sepan', fut: 'sabr' },
    'oír': { pres: 'oigo oyes oye oímos oís oyen', pret: 'oí oíste oyó oímos oísteis oyeron', ger: 'oyendo', fut: 'oir' },
    leer: { pret: 'leí leíste leyó leímos leísteis leyeron' },
    creer: { pret: 'creí creíste creyó creímos creísteis creyeron' },
    caer: { pret: 'caí caíste cayó caímos caísteis cayeron' },
    enviar: { pres: 'envío envías envía enviamos enviáis envían', subj: 'envíe envíes envíe enviemos enviéis envíen' }
  };

  var E = {
    pres: { ar: 'o as a amos áis an', er: 'o es e emos éis en', ir: 'o es e imos ís en' },
    pret: { ar: 'é aste ó amos asteis aron', er: 'í iste ió imos isteis ieron', ir: 'í iste ió imos isteis ieron' },
    impf: { ar: 'aba abas aba ábamos abais aban', er: 'ía ías ía íamos íais ían', ir: 'ía ías ía íamos íais ían' },
    subj: { ar: 'e es e emos éis en', er: 'a as a amos áis an', ir: 'a as a amos áis an' },
    fut: 'é ás á emos éis án', cond: 'ía ías ía íamos íais ían', strong: 'e iste o imos isteis ieron'
  };
  var W = function (s) { return s.split(' '); };
  var REFL = ['me', 'te', 'se', 'nos', 'os', 'se'];

  function changeStem(stem, ch) {
    var from = ch.split('>')[0], to = ch.split('>')[1];
    var i = stem.lastIndexOf(from);
    return i < 0 ? stem : stem.slice(0, i) + to + stem.slice(i + from.length);
  }
  var uir = function (inf) { return /uir$/.test(inf) && !/guir$/.test(inf); };
  var arOrtho = function (b) { return b.replace(/c$/, 'qu').replace(/g$/, 'gu').replace(/z$/, 'c'); }; // przed e

  function build(line) {
    var p = line.split('|');
    var full = p[0], refl = /se$/.test(full) && full !== 'ser' && full !== 'ese';
    var inf = refl ? full.slice(0, -2) : full;
    var v = { full: full, inf: inf, pl: p[1], refl: refl, f: {} };
    (p[2] || '').split(/\s+/).filter(Boolean).forEach(function (x) {
      var kv = x.split('=');
      if (kv.length === 2) v.f[kv[0]] = kv[1]; else if (/>/.test(x)) v.f.ch = x; else v.f[x] = true;
    });
    var o = OVR[inf] || {};
    v.t = inf.slice(-2) === 'ír' ? 'ir' : inf.slice(-2);
    v.stem = inf.slice(0, -2);
    var t = v.t, st = v.stem, ch = v.f.ch;

    // presente
    var pres = o.pres ? W(o.pres) : W(E.pres[t]).map(function (e, i) {
      var s = (ch && [0, 1, 2, 5].indexOf(i) >= 0) ? changeStem(st, ch) : st;
      return s + e;
    });
    if (!o.pres) {
      if (v.f.yo) pres[0] = v.f.yo;
      else if (/guir$/.test(inf)) pres[0] = pres[0].replace(/guo$/, 'go');
      else if (/g(er|ir)$/.test(inf)) pres[0] = pres[0].replace(/go$/, 'jo');
      else if (v.f.zc) pres[0] = pres[0].replace(/co$/, 'zco');
      if (uir(inf)) [0, 1, 2, 5].forEach(function (i) { pres[i] = pres[i].replace(/u(o|es|e|en)$/, 'uy$1'); });
    }

    // pretérito indefinido
    var pret;
    if (o.pret) pret = W(o.pret);
    else if (v.f.pret) {
      pret = W(E.strong).map(function (e) { return v.f.pret + e; });
      if (/j$/.test(v.f.pret)) pret[5] = v.f.pret + 'eron';
      if (v.f.pret === 'hic') pret[2] = 'hizo';
    } else {
      pret = W(E.pret[t]).map(function (e) { return st + e; });
      if (t === 'ar') pret[0] = pret[0].replace(/cé$/, 'qué').replace(/gé$/, 'gué').replace(/zé$/, 'cé');
      if (t === 'ir' && ch) {
        var s3 = changeStem(st, ch === 'o>ue' ? 'o>u' : 'e>i');
        pret[2] = s3 + 'ió'; pret[5] = s3 + 'ieron';
      }
      if (uir(inf)) { pret[2] = st + 'yó'; pret[5] = st + 'yeron'; }
    }

    var impf = o.impf ? W(o.impf) : W(E.impf[t]).map(function (e) { return st + e; });
    var fs = o.fut || v.f.fut || inf;
    var fut = W(E.fut).map(function (e) { return fs + e; });
    var cond = W(E.cond).map(function (e) { return fs + e; });

    // presente de subjuntivo – z formy „yo”
    var subj;
    if (o.subj) subj = W(o.subj);
    else {
      var base = pres[0].replace(/o$/, '');
      if (t === 'ar') base = arOrtho(base);
      subj = W(E.subj[t]).map(function (e) { return base + e; });
      if (ch && !v.f.yo) {
        var nb = t === 'ir' ? changeStem(st, ch === 'o>ue' ? 'o>u' : 'e>i') : st;
        if (t === 'ar') nb = arOrtho(nb);
        if (/guir$/.test(inf)) nb = nb.replace(/gu$/, 'g');
        else if (/g(er|ir)$/.test(inf)) nb = nb.replace(/g$/, 'j');
        subj[3] = nb + W(E.subj[t])[3]; subj[4] = nb + W(E.subj[t])[4];
      }
    }

    var imp = v.f.noimp || refl ? '' : (v.f.imp || o.imp || pres[2]);
    var part = v.f.part || o.part || (t === 'ar' ? st + 'ado' : st + (/[aeo]$/.test(st) ? 'ído' : 'ido'));
    var ger = v.f.ger || o.ger || (t === 'ar' ? st + 'ando'
      : (/[aeo]$/.test(st) || uir(inf)) ? st + 'yendo'
      : (t === 'ir' && ch ? changeStem(st, ch === 'o>ue' ? 'o>u' : 'e>i') : st) + 'iendo');

    var R = function (a) { return refl ? a.map(function (x, i) { return REFL[i] + ' ' + x; }) : a; };
    v.pres = R(pres); v.pret = R(pret); v.impf = R(impf); v.fut = R(fut); v.cond = R(cond); v.subj = R(subj);
    v.imp = imp; v.part = refl ? '' : part; v.ger = refl ? '' : ger;
    return v;
  }

  var verbs = LEX.split('\n').map(function (l) { return l.trim(); }).filter(Boolean).map(build);
  window.ES_VERBS = verbs; // do testów

  var PERS = [['yo', 'ja'], ['tú', 'ty'], ['él / ella', 'on / ona'], ['nosotros', 'my'], ['vosotros', 'wy'], ['ellos / ellas', 'oni / one']];
  var short = function (pl) { return pl.replace(/\s*\([^)]*\)/g, ''); };
  var label = function (v) { return v.full + ' (' + short(v.pl) + ')'; };
  function chunks(a, n) { var out = []; for (var i = 0; i < a.length; i += n) out.push(a.slice(i, i + n)); return out; }
  function form(id, t, d, qp, items) {
    return { id: id, t: t, d: d, k: 'v', qp: qp, flip: true, strict: true, ex: ['pl2en', 'type', 'pl2en'], i: items };
  }
  var groups = {};
  function put(st, lv) { (groups[st] = groups[st] || []).push(lv); }
  var at = function (arr, i) { return arr[Math.min(i, arr.length - 1)]; };
  var item = function (v, tense, i) { return v[tense][i] + '|' + PERS[i][0] + ' (' + PERS[i][1] + ') … — ' + label(v); };

  // znaczenie: po 20 czasowników
  chunks(verbs, 20).forEach(function (c, ci) {
    put(at(['s2', 's2', 's3', 's3', 's4', 's4', 's5', 's5', 's6'], ci), { id: 'gv-m-' + (ci + 1), t: 'Czasowniki: zestaw ' + (ci + 1),
      d: 'Dwadzieścia czasowników – znaczenie.', k: 'v', i: c.map(function (v) { return v.full + '|' + v.pl; }) });
  });

  // po 10 czasowników: presente (2 poziomy), indefinido (2), imperfecto, futuro, condicional, subjuntivo
  var PRES = ['s2', 's2', 's2', 's2', 's2', 's2', 's3', 's3', 's3', 's3', 's3', 's3', 's4', 's4', 's4', 's4', 's4', 's4'];
  var PRET = ['s4', 's4', 's4', 's4', 's4', 's4', 's4', 's5', 's5', 's5', 's5', 's5', 's5', 's6', 's6', 's6', 's6', 's6'];
  var IMPF = ['s4', 's4', 's4', 's4', 's5', 's5', 's5', 's5', 's5', 's6', 's6', 's6', 's6', 's6', 's7', 's7', 's7', 's7'];
  var FUT = ['s4', 's4', 's4', 's5', 's5', 's5', 's5', 's6', 's6', 's6', 's6', 's7', 's7', 's7', 's7', 's7', 's7', 's7'];
  var SUBJ = ['s6', 's6', 's6', 's6', 's6', 's6', 's7', 's7', 's7', 's7', 's7', 's7', 's8', 's8', 's8', 's8', 's8', 's8'];
  chunks(verbs, 10).forEach(function (c, ci) {
    var n = ci + 1, pa = [], pb = [], ta = [], tb = [], im = [], fu = [], su = [];
    c.forEach(function (v) {
      [0, 1, 2].forEach(function (i) { pa.push(item(v, 'pres', i)); ta.push(item(v, 'pret', i)); });
      [3, 4, 5].forEach(function (i) { pb.push(item(v, 'pres', i)); tb.push(item(v, 'pret', i)); });
      [0, 1, 3].forEach(function (i) { im.push(item(v, 'impf', i)); });
      fu.push(item(v, 'fut', 0)); fu.push(item(v, 'fut', 5)); fu.push(item(v, 'cond', 0));
      [0, 1, 5].forEach(function (i) { su.push(item(v, 'subj', i)); });
    });
    put(at(PRES, ci), form('gv-p' + n + 'a', 'Presente ' + n + ': yo, tú, él', 'Czas teraźniejszy: ja, ty, on / ona.', 'Odmień w czasie teraźniejszym:', pa));
    put(at(PRES, ci), form('gv-p' + n + 'b', 'Presente ' + n + ': nosotros, vosotros, ellos', 'Czas teraźniejszy: my, wy, oni.', 'Odmień w czasie teraźniejszym:', pb));
    put(at(PRET, ci), form('gv-t' + n + 'a', 'Indefinido ' + n + ': yo, tú, él', 'Czas przeszły: zrobiłem, zrobiłeś, zrobił.', 'Pretérito indefinido:', ta));
    put(at(PRET, ci), form('gv-t' + n + 'b', 'Indefinido ' + n + ': nosotros, vosotros, ellos', 'Czas przeszły: zrobiliśmy, zrobiliście, zrobili.', 'Pretérito indefinido:', tb));
    put(at(IMPF, ci), form('gv-i' + n, 'Imperfecto ' + n, 'Czas przeszły niedokonany: robiłem, robiłeś, robiliśmy.', 'Pretérito imperfecto:', im));
    put(at(FUT, ci), form('gv-f' + n, 'Futuro i condicional ' + n, 'Zrobię, zrobią – i zrobiłbym.', 'Futuro / condicional (yo … = zrobiłbym):', fu.map(function (x, i) {
      return i % 3 === 2 ? x.replace(' (ja) … — ', ' (ja) … [tryb warunkowy] — ') : x; })));
    put(at(SUBJ, ci), form('gv-s' + n, 'Subjuntivo ' + n, 'Presente de subjuntivo: (que) yo hable, tú hables, ellos hablen.', 'Presente de subjuntivo (que …):', su));
  });

  // tryb rozkazujący (tú), participio i gerundio: po 30
  var imps = verbs.filter(function (v) { return v.imp; });
  chunks(imps, 30).forEach(function (c, ci) {
    put(at(['s5', 's5', 's5', 's6', 's6'], ci), form('gv-imp' + (ci + 1), 'Tryb rozkazujący: tú ' + (ci + 1), '¡Habla! ¡Come! ¡Escribe! – i nieregularne: haz, pon, ven, di.',
      'Rozkaz do jednej osoby (tú):', c.map(function (v) { return v.imp + '|¡…! — ' + label(v); })));
  });
  var parts = verbs.filter(function (v) { return v.part; });
  chunks(parts, 30).forEach(function (c, ci) {
    put(at(['s5', 's5', 's5', 's6', 's6', 's6'], ci), form('gv-pp' + (ci + 1), 'Participio ' + (ci + 1), 'Hablado, comido, vivido – i nieregularne: hecho, dicho, escrito, visto.',
      'Participio (he …):', c.map(function (v) { return v.part + '|he … — ' + label(v); })));
  });
  chunks(parts, 30).forEach(function (c, ci) {
    put(at(['s3', 's3', 's4', 's4', 's4', 's5'], ci), form('gv-g' + (ci + 1), 'Gerundio ' + (ci + 1), 'Estoy hablando, comiendo, escribiendo – co się dzieje teraz.',
      'Gerundio (estoy …):', c.map(function (v) { return v.ger + '|estoy … — ' + label(v); })));
  });

  // rozkłada poziomy równo między istniejące poziomy etapu
  window.SPREAD = function (stageId, lvls) {
    var st = window.STAGES.filter(function (s) { return s.id === stageId; })[0];
    if (!st || !lvls.length) return;
    var start = 0;
    st.levels.forEach(function (l, i) { if (!/^(x\d|g)/.test(l.id)) start = i + 1; });
    var rest = st.levels.length - start, n = lvls.length;
    for (var k = n - 1; k >= 0; k--) st.levels.splice(start + Math.round((k + 1) * rest / (n + 1)), 0, lvls[k]);
  };
  // dodatkowe poziomy (id „x…”): słówka i ćwiczenia ze zdaniami na zmianę
  window.STAGES.forEach(function (st) {
    var core = [], vocab = [], practice = [];
    st.levels.forEach(function (l) {
      if (!/^x\d/.test(l.id)) core.push(l);
      else if (l.k === 'f' || l.k === 'o') practice.push(l);
      else vocab.push(l);
    });
    var merged = vocab.slice(), rest = merged.length;
    for (var k = practice.length - 1; k >= 0; k--) merged.splice(Math.round((k + 1) * rest / (practice.length + 1)), 0, practice[k]);
    st.levels = core.concat(merged);
  });
  window.ES_GROUPS = groups; // gen-more.js dokłada swoje poziomy i wywołuje SPREAD
})();
