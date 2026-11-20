/*
 * Ćwiczenia generowane z ~190 czasowników: znaczenie, odmiana w czasie teraźniejszym, passato prossimo,
 * imperfetto, futuro, condizionale, congiuntivo presente, tryb rozkazujący (tu), participio i gerundio.
 * Formy wynikają z reguł; nieregularności podane są w polach linii:
 *   "bezokolicznik|znaczenie|cechy"   cechy (oddzielone spacją):
 *   isc – -ire z -isc- (capisco)   ess – passato prossimo z „essere”   part=… – imiesłów
 *   fut=… – temat futuro / condizionale (andr → andrò)   imp=… – temat imperfetto i gerundio (face → facevo, facendo)
 *   impv=… – tryb rozkazujący (tu)   noimp – bez trybu rozkazującego   -rsi na końcu = czasownik zwrotny (mi, ti, si…)
 * Czasowniki nieregularne w czasie teraźniejszym mają tabele w OVR. Ten plik ładujemy PO plikach z treścią.
 */
(function () {
  var LEX = `
essere|być|ess part=stato fut=sar impv=sii
avere|mieć|fut=avr impv=abbi
fare|robić|imp=face part=fatto fut=far impv=fa'/fai
andare|iść / jechać|ess fut=andr impv=va'/vai
venire|przychodzić|ess part=venuto fut=verr
dire|mówić / powiedzieć|imp=dice part=detto impv=di'
potere|móc|fut=potr noimp
volere|chcieć|fut=vorr noimp
dovere|musieć|fut=dovr noimp
sapere|wiedzieć / umieć|fut=sapr impv=sappi
stare|być (przebywać, czuć się)|ess fut=star impv=sta'/stai
dare|dawać|fut=dar impv=da'/dai
parlare|mówić (językiem)|
mangiare|jeść|
bere|pić|imp=beve part=bevuto fut=berr
dormire|spać|
lavorare|pracować|
studiare|uczyć się (studiować)|
abitare|mieszkać|
vivere|żyć / mieszkać|part=vissuto fut=vivr
vedere|widzieć|part=visto fut=vedr
sentire|słyszeć / czuć|
leggere|czytać|part=letto
scrivere|pisać|part=scritto
prendere|brać|part=preso
mettere|kłaść|part=messo
aprire|otwierać|part=aperto
chiudere|zamykać|part=chiuso
capire|rozumieć|isc
finire|kończyć|isc
preferire|woleć|isc noimp
pulire|sprzątać (czyścić)|isc
spedire|wysyłać (pocztą)|isc
uscire|wychodzić|ess
partire|wyjeżdżać|ess
arrivare|przybywać|ess
tornare|wracać|ess
entrare|wchodzić|ess
restare|zostawać|ess
rimanere|zostawać (pozostawać)|ess part=rimasto fut=rimarr
diventare|stawać się|ess
nascere|rodzić się|ess part=nato noimp
morire|umierać|ess part=morto noimp
cadere|upadać|ess fut=cadr
salire|wchodzić (do góry)|ess
scendere|schodzić / wysiadać|ess part=sceso
correre|biegać|part=corso
camminare|chodzić (spacerować)|
guidare|prowadzić (samochód)|
viaggiare|podróżować|
comprare|kupować|
vendere|sprzedawać|
pagare|płacić|
costare|kosztować|ess noimp
cercare|szukać|
trovare|znajdować|
perdere|gubić / przegrywać|part=perso
vincere|wygrywać|part=vinto
giocare|grać / bawić się|
suonare|grać (na instrumencie) / dzwonić|
cantare|śpiewać|
ballare|tańczyć|
nuotare|pływać|
cucinare|gotować|
lavare|myć|
ascoltare|słuchać|
guardare|patrzeć / oglądać|
aspettare|czekać|
chiamare|wołać / dzwonić|
telefonare|telefonować|
rispondere|odpowiadać|part=risposto
chiedere|pytać / prosić|part=chiesto
domandare|pytać|
spiegare|wyjaśniać|
imparare|uczyć się (czegoś)|
insegnare|uczyć (kogoś)|
pensare|myśleć|
credere|wierzyć / sądzić|
conoscere|znać|part=conosciuto
ricordare|pamiętać|
dimenticare|zapominać|
cominciare|zaczynać|
iniziare|rozpoczynać|
continuare|kontynuować|
smettere|przestawać|part=smesso
provare|próbować / przymierzać|
usare|używać|
portare|nosić / przynosić|
lasciare|zostawiać / pozwalać|
aiutare|pomagać|
incontrare|spotykać|
visitare|zwiedzać / odwiedzać|
preparare|przygotowywać|
mandare|wysyłać|
ricevere|otrzymywać|
decidere|decydować|part=deciso
scegliere|wybierać|part=scelto
accendere|zapalać / włączać|part=acceso
spegnere|gasić / wyłączać|part=spento
offrire|oferować / częstować|part=offerto
soffrire|cierpieć|part=sofferto noimp
scoprire|odkrywać|part=scoperto
coprire|przykrywać|part=coperto
rompere|łamać / psuć|part=rotto
ridere|śmiać się|part=riso
piangere|płakać|part=pianto
sorridere|uśmiechać się|part=sorriso
piacere|podobać się|ess part=piaciuto noimp
succedere|zdarzać się|ess part=successo noimp
sembrare|wydawać się|ess noimp
bastare|wystarczać|ess noimp
riuscire|udawać się (dawać radę)|ess noimp
tenere|trzymać|part=tenuto fut=terr
ottenere|uzyskiwać|part=ottenuto fut=otterr noimp
mantenere|utrzymywać|part=mantenuto fut=manterr
tradurre|tłumaczyć|imp=traduce part=tradotto fut=tradurr
produrre|produkować|imp=produce part=prodotto fut=produrr noimp
proporre|proponować|imp=propone part=proposto fut=proporr
supporre|przypuszczać|imp=suppone part=supposto fut=supporr noimp
raccogliere|zbierać|part=raccolto
togliere|zdejmować / usuwać|part=tolto
crescere|rosnąć|ess part=cresciuto noimp
dipingere|malować (obraz)|part=dipinto
discutere|dyskutować|part=discusso
muovere|ruszać|part=mosso
convincere|przekonywać|part=convinto
difendere|bronić|part=difeso
dividere|dzielić|part=diviso
spendere|wydawać (pieniądze)|part=speso
risparmiare|oszczędzać|
guadagnare|zarabiać|
prestare|pożyczać (komuś)|
noleggiare|wynajmować (pojazd)|
prenotare|rezerwować|
affittare|wynajmować (mieszkanie)|
invitare|zapraszać|
festeggiare|świętować|
regalare|dawać w prezencie|
sognare|śnić / marzyć|
sperare|mieć nadzieję|
amare|kochać|
odiare|nienawidzić|noimp
baciare|całować|
abbracciare|przytulać|
gridare|krzyczeć|
fumare|palić (papierosy)|
bussare|pukać|
riparare|naprawiać|
costruire|budować|isc
distruggere|niszczyć|part=distrutto
tagliare|ciąć / kroić|
disegnare|rysować|
dimagrire|chudnąć|isc ess noimp
ingrassare|tyć|ess noimp
obbedire|być posłusznym|isc
suggerire|sugerować|isc
restituire|zwracać (oddawać)|isc
attraversare|przechodzić (przez)|
girare|skręcać / kręcić|
fermare|zatrzymywać|
controllare|sprawdzać|
raccontare|opowiadać|
mostrare|pokazywać|
rispettare|szanować|
evitare|unikać|
cambiare|zmieniać|
nascondere|chować (ukrywać)|part=nascosto
promettere|obiecywać|part=promesso
permettere|pozwalać|part=permesso
alzarsi|wstawać|
svegliarsi|budzić się|
lavarsi|myć się|
vestirsi|ubierać się|
chiamarsi|nazywać się|noimp
sedersi|siadać|
divertirsi|bawić się|
riposarsi|odpoczywać|
preoccuparsi|martwić się|
sbrigarsi|spieszyć się|
addormentarsi|zasypiać|
sposarsi|brać ślub|
arrabbiarsi|złościć się|
innamorarsi|zakochiwać się|
sentirsi|czuć się|noimp
mettersi|zakładać (na siebie)|part=messo
ricordarsi|pamiętać (o czymś)|
lamentarsi|narzekać|
sbagliarsi|mylić się|
trasferirsi|przeprowadzać się|isc
`;

  // czasowniki nieregularne (nadpisują reguły)
  var OVR = {
    essere: { pres: 'sono sei è siamo siete sono', impf: 'ero eri era eravamo eravate erano', cong: 'sia sia sia siamo siate siano' },
    avere: { pres: 'ho hai ha abbiamo avete hanno', cong: 'abbia abbia abbia abbiamo abbiate abbiano' },
    andare: { pres: 'vado vai va andiamo andate vanno' },
    fare: { pres: 'faccio fai fa facciamo fate fanno' },
    venire: { pres: 'vengo vieni viene veniamo venite vengono' },
    dire: { pres: 'dico dici dice diciamo dite dicono' },
    uscire: { pres: 'esco esci esce usciamo uscite escono' },
    riuscire: { pres: 'riesco riesci riesce riusciamo riuscite riescono' },
    potere: { pres: 'posso puoi può possiamo potete possono' },
    volere: { pres: 'voglio vuoi vuole vogliamo volete vogliono' },
    dovere: { pres: 'devo devi deve dobbiamo dovete devono', cong: 'debba debba debba dobbiamo dobbiate debbano' },
    sapere: { pres: 'so sai sa sappiamo sapete sanno', cong: 'sappia sappia sappia sappiamo sappiate sappiano' },
    stare: { pres: 'sto stai sta stiamo state stanno', cong: 'stia stia stia stiamo stiate stiano' },
    dare: { pres: 'do dai dà diamo date danno', cong: 'dia dia dia diamo diate diano' },
    bere: { pres: 'bevo bevi beve beviamo bevete bevono' },
    rimanere: { pres: 'rimango rimani rimane rimaniamo rimanete rimangono' },
    tenere: { pres: 'tengo tieni tiene teniamo tenete tengono' },
    ottenere: { pres: 'ottengo ottieni ottiene otteniamo ottenete ottengono' },
    mantenere: { pres: 'mantengo mantieni mantiene manteniamo mantenete mantengono' },
    salire: { pres: 'salgo sali sale saliamo salite salgono' },
    scegliere: { pres: 'scelgo scegli sceglie scegliamo scegliete scelgono' },
    togliere: { pres: 'tolgo togli toglie togliamo togliete tolgono' },
    raccogliere: { pres: 'raccolgo raccogli raccoglie raccogliamo raccogliete raccolgono' },
    proporre: { pres: 'propongo proponi propone proponiamo proponete propongono' },
    supporre: { pres: 'suppongo supponi suppone supponiamo supponete suppongono' },
    tradurre: { pres: 'traduco traduci traduce traduciamo traducete traducono' },
    produrre: { pres: 'produco produci produce produciamo producete producono' },
    morire: { pres: 'muoio muori muore moriamo morite muoiono' },
    sedere: { pres: 'siedo siedi siede sediamo sedete siedono' },
    piacere: { pres: 'piaccio piaci piace piacciamo piacete piacciono' },
    spegnere: { pres: 'spengo spegni spegne spegniamo spegnete spengono' },
    muovere: { pres: 'muovo muovi muove muoviamo muovete muovono' }
  };

  var E = {
    pres: { are: 'o i a iamo ate ano', ere: 'o i e iamo ete ono', ire: 'o i e iamo ite ono', isc: 'isco isci isce iamo ite iscono' },
    fut: 'ò ai à emo ete anno', cond: 'ei esti ebbe emmo este ebbero', impf: 'vo vi va vamo vate vano'
  };
  var W = function (s) { return s.split(' '); };
  var REFL = ['mi', 'ti', 'si', 'ci', 'vi', 'si'];
  var AUX = { avere: W('ho hai ha abbiamo avete hanno'), essere: W('sono sei è siamo siete sono') };

  // pisownia -are: c / g + e, i → ch, gh (cerchi, paghiamo); ii → i (studi, mangiamo)
  function join(stem, end, t) {
    if (t === 'are' && /[cg]$/.test(stem) && /^[ei]/.test(end)) stem += 'h';
    return (stem + end).replace(/ii/g, 'i');
  }

  function build(line) {
    var p = line.split('|');
    var full = p[0], refl = /rsi$/.test(full);
    var inf = refl ? full.slice(0, -2) + 'e' : full;
    var v = { full: full, inf: inf, pl: p[1], refl: refl, f: {} };
    (p[2] || '').split(/\s+/).filter(Boolean).forEach(function (x) {
      var i = x.indexOf('=');
      if (i > 0) v.f[x.slice(0, i)] = x.slice(i + 1); else v.f[x] = true;
    });
    var o = OVR[inf] || {};
    var t = /rre$/.test(inf) ? 'ere' : inf.slice(-3);
    var st = /rre$/.test(inf) ? inf.slice(0, -3) : inf.slice(0, -3);
    v.t = t; v.stem = st;
    var isc = !!v.f.isc;

    // presente
    var pres = o.pres ? W(o.pres) : W(isc ? E.pres.isc : E.pres[t]).map(function (e) { return join(st, e, t); });

    // imperfetto i gerundio (temat z samogłoską tematyczną: parla-, prende-, dormi-, face-)
    var ib = v.f.imp || (st + t.charAt(0));
    var impf = o.impf ? W(o.impf) : W(E.impf).map(function (e) { return ib + e; });
    var ger = t === 'are' && !v.f.imp ? st + 'ando' : ib.slice(0, -1) + 'endo';

    // futuro i condizionale
    var fb = v.f.fut;
    if (!fb) {
      // mangiare → mangerò, cominciare → comincerò (bez „i”), cercare → cercherò (z „h”)
      if (t === 'are') fb = /[cg]i$/.test(st) ? st.slice(0, -1) + 'er' : join(st, 'er', t);
      else fb = st + (t === 'ere' ? 'er' : 'ir');
    }
    var fut = W(E.fut).map(function (e) { return fb + e; });
    var cond = W(E.cond).map(function (e) { return fb + e; });

    // congiuntivo presente: z formy „io” (vengo → venga), noi jak w czasie teraźniejszym, voi: -iamo → -iate
    var cong;
    if (o.cong) cong = W(o.cong);
    else {
      var cb = pres[0].replace(/o$/, '');
      var areEnd = t === 'are' && !o.pres; // andare, fare: vada, faccia
      var sg = areEnd ? join(cb, 'i', t) : cb + 'a';
      var pl3 = areEnd ? join(cb, 'ino', t) : cb + 'ano';
      cong = [sg, sg, sg, pres[3], pres[3].replace(/iamo$/, 'iate'), pl3];
    }

    // tryb rozkazujący (tu): -are → parla, -ere / -ire → jak forma „tu” (prendi, senti, finisci)
    var impv = v.f.noimp ? '' : (v.f.impv || (t === 'are' && !o.pres ? join(st, 'a', t) : pres[1]));
    if (refl && impv) impv = impv + 'ti';

    var part = v.f.part || (t === 'are' ? st + 'ato' : t === 'ere' ? st + 'uto' : st + 'ito');
    var ess = refl || !!v.f.ess;

    // passato prossimo: avere / essere + imiesłów; z „essere” imiesłów się zgadza (andato / andata, andati / andate)
    var pb = part.slice(0, -1);
    var pp = AUX[ess ? 'essere' : 'avere'].map(function (a, i) {
      var pre = refl ? REFL[i] + ' ' : '';
      if (!ess) return pre + a + ' ' + part;
      var m = pb + (i < 3 ? 'o' : 'i'), f = pb + (i < 3 ? 'a' : 'e');
      return pre + a + ' ' + m + '/' + pre + a + ' ' + f;
    });

    var R = function (a) { return refl ? a.map(function (x, i) { return REFL[i] + ' ' + x; }) : a; };
    v.pres = R(pres); v.pp = pp; v.impf = R(impf); v.fut = R(fut); v.cond = R(cond); v.cong = R(cong);
    v.impv = impv; v.part = refl ? '' : part; v.ger = refl ? '' : ger; v.ess = ess;
    return v;
  }

  var verbs = LEX.split('\n').map(function (l) { return l.trim(); }).filter(Boolean).map(build);
  window.IT_VERBS = verbs; // do testów

  var PERS = [['io', 'ja'], ['tu', 'ty'], ['lui / lei', 'on / ona'], ['noi', 'my'], ['voi', 'wy'], ['loro', 'oni / one']];
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
    put(at(['s2', 's2', 's3', 's3', 's4', 's4', 's5', 's5', 's6', 's6'], ci), { id: 'gv-m-' + (ci + 1), t: 'Czasowniki: zestaw ' + (ci + 1),
      d: 'Dwadzieścia czasowników – znaczenie.', k: 'v', i: c.map(function (v) { return v.full + '|' + v.pl; }) });
  });

  // po 10 czasowników: presente (2 poziomy), passato prossimo (2), imperfetto, futuro + condizionale, congiuntivo
  var PRES = ['s2', 's2', 's2', 's2', 's2', 's2', 's3', 's3', 's3', 's3', 's3', 's3', 's4', 's4', 's4', 's4', 's4', 's4', 's4'];
  var PASS = ['s4', 's4', 's4', 's4', 's4', 's4', 's4', 's5', 's5', 's5', 's5', 's5', 's5', 's6', 's6', 's6', 's6', 's6', 's6'];
  var IMPF = ['s4', 's4', 's4', 's4', 's5', 's5', 's5', 's5', 's5', 's6', 's6', 's6', 's6', 's6', 's7', 's7', 's7', 's7', 's7'];
  var FUT = ['s4', 's4', 's4', 's5', 's5', 's5', 's5', 's6', 's6', 's6', 's6', 's7', 's7', 's7', 's7', 's7', 's7', 's7', 's7'];
  var CONG = ['s5', 's6', 's6', 's6', 's6', 's6', 's7', 's7', 's7', 's7', 's7', 's7', 's8', 's8', 's8', 's8', 's8', 's8', 's8'];
  chunks(verbs, 10).forEach(function (c, ci) {
    var n = ci + 1, pa = [], pb = [], ta = [], tb = [], im = [], fu = [], co = [];
    c.forEach(function (v) {
      [0, 1, 2].forEach(function (i) { pa.push(item(v, 'pres', i)); ta.push(item(v, 'pp', i)); });
      [3, 4, 5].forEach(function (i) { pb.push(item(v, 'pres', i)); tb.push(item(v, 'pp', i)); });
      [0, 1, 3].forEach(function (i) { im.push(item(v, 'impf', i)); });
      fu.push(item(v, 'fut', 0)); fu.push(item(v, 'fut', 5)); fu.push(item(v, 'cond', 0));
      [0, 3, 5].forEach(function (i) { co.push(item(v, 'cong', i)); });
    });
    put(at(PRES, ci), form('gv-p' + n + 'a', 'Presente ' + n + ': io, tu, lui', 'Czas teraźniejszy: ja, ty, on / ona.', 'Odmień w czasie teraźniejszym:', pa));
    put(at(PRES, ci), form('gv-p' + n + 'b', 'Presente ' + n + ': noi, voi, loro', 'Czas teraźniejszy: my, wy, oni.', 'Odmień w czasie teraźniejszym:', pb));
    put(at(PASS, ci), form('gv-t' + n + 'a', 'Passato prossimo ' + n + ': io, tu, lui', 'Czas przeszły: zrobiłem, zrobiłeś, zrobił. Z „essere” wpisz formę męską albo żeńską.', 'Passato prossimo:', ta));
    put(at(PASS, ci), form('gv-t' + n + 'b', 'Passato prossimo ' + n + ': noi, voi, loro', 'Czas przeszły: zrobiliśmy, zrobiliście, zrobili.', 'Passato prossimo:', tb));
    put(at(IMPF, ci), form('gv-i' + n, 'Imperfetto ' + n, 'Czas przeszły niedokonany: robiłem, robiłeś, robiliśmy.', 'Imperfetto:', im));
    put(at(FUT, ci), form('gv-f' + n, 'Futuro i condizionale ' + n, 'Zrobię, zrobią – i zrobiłbym.', 'Futuro / condizionale (io … = zrobiłbym):', fu.map(function (x, i) {
      return i % 3 === 2 ? x.replace(' (ja) … — ', ' (ja) … [tryb warunkowy] — ') : x; })));
    put(at(CONG, ci), form('gv-s' + n, 'Congiuntivo ' + n, 'Congiuntivo presente: (che) io parli, noi parliamo, loro parlino.', 'Congiuntivo presente (che …):', co));
  });

  // tryb rozkazujący (tu), participio i gerundio: po 30
  var imps = verbs.filter(function (v) { return v.impv; });
  chunks(imps, 30).forEach(function (c, ci) {
    put(at(['s5', 's5', 's5', 's6', 's6', 's6'], ci), form('gv-imp' + (ci + 1), 'Tryb rozkazujący: tu ' + (ci + 1), 'Parla! Prendi! Senti! – i nieregularne: fa\', va\', di\', sii, abbi. Zwrotne: alzati!',
      'Rozkaz do jednej osoby (tu):', c.map(function (v) { return v.impv + '|…! — ' + label(v); })));
  });
  var seenPart = {};
  var parts = verbs.filter(function (v) { if (!v.part || seenPart[v.part]) return false; seenPart[v.part] = 1; return true; }); // stato: essere i stare
  chunks(parts, 30).forEach(function (c, ci) {
    put(at(['s4', 's4', 's5', 's5', 's5', 's6'], ci), form('gv-pp' + (ci + 1), 'Participio ' + (ci + 1), 'Parlato, venduto, dormito – i nieregularne: fatto, detto, visto, preso, messo.',
      'Participio (ho … / sono …):', c.map(function (v) { return v.part + '|' + (v.ess ? 'sono' : 'ho') + ' … — ' + label(v); })));
  });
  chunks(parts, 30).forEach(function (c, ci) {
    put(at(['s3', 's3', 's4', 's4', 's4', 's5'], ci), form('gv-g' + (ci + 1), 'Gerundio ' + (ci + 1), 'Sto parlando, sto leggendo, sto dormendo – co dzieje się teraz.',
      'Gerundio (-ando / -endo):', c.map(function (v) { return v.ger + '|gerundio … — ' + label(v); })));
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
  window.IT_GROUPS = groups; // gen-more.js dokłada swoje poziomy i wywołuje SPREAD
})();
