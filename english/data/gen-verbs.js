/*
 * Ćwiczenia generowane z listy 300 czasowników:
 * znaczenie, forma he/she/it, forma -ing, Past Simple i III forma.
 * Format linii: "bezokolicznik|znaczenie|past|past participle" (dwie ostatnie tylko dla nieregularnych).
 * "*" po bezokoliczniku = podwajamy ostatnią spółgłoskę (stop* → stopped, stopping).
 * Ten plik ładujemy PO plikach z treścią – rozkłada poziomy równo po etapach.
 */
(function () {
  var LEX = `
be|być|was/were|been
have|mieć|had|had
do|robić|did|done
go|iść / jechać|went|gone
come|przychodzić|came|come
see|widzieć|saw|seen
eat|jeść|ate|eaten
drink|pić|drank|drunk
sleep|spać|slept|slept
like|lubić
want|chcieć
work|pracować
play|grać / bawić się
live|mieszkać
read|czytać|read|read
write|pisać|wrote|written
speak|mówić (językiem)|spoke|spoken
listen|słuchać
watch|oglądać
open|otwierać
make|tworzyć / robić (coś)|made|made
know|wiedzieć / znać|knew|known
think|myśleć|thought|thought
take|brać|took|taken
give|dawać|gave|given
say|powiedzieć (coś)|said|said
get*|dostawać|got|got/gotten
buy|kupować|bought|bought
sell|sprzedawać|sold|sold
run*|biegać|ran|run
walk|chodzić (pieszo)
swim*|pływać|swam|swum
sit*|siedzieć|sat|sat
stand|stać|stood|stood
cook|gotować
help|pomagać
wait|czekać
close|zamykać
start|zaczynać
finish|kończyć
love|kochać
need|potrzebować
learn|uczyć się|learned/learnt|learned/learnt
teach|uczyć (kogoś)|taught|taught
study|studiować
understand|rozumieć|understood|understood
remember|pamiętać
forget*|zapominać|forgot|forgotten
ask|pytać
answer|odpowiadać
call|dzwonić / wołać
find|znajdować|found|found
look|patrzeć
hear|słyszeć|heard|heard
feel|czuć|felt|felt
tell|opowiadać / powiedzieć (komuś)|told|told
talk|rozmawiać
pay|płacić|paid|paid
try|próbować
use|używać
put*|kłaść|put|put
bring|przynosić|brought|brought
leave|wychodzić / zostawiać|left|left
meet|spotykać|met|met
send|wysyłać|sent|sent
show|pokazywać|showed|shown
visit|odwiedzać
clean|sprzątać / czyścić
wash|myć
dance|tańczyć
sing|śpiewać|sang|sung
drive|prowadzić (samochód)|drove|driven
fly|latać|flew|flown
carry|nieść / nosić
stop*|zatrzymywać się
smile|uśmiechać się
laugh|śmiać się
cry|płakać
jump|skakać
move|przeprowadzać się / ruszać
begin*|rozpoczynać się|began|begun
become|stawać się|became|become
lose|gubić / przegrywać|lost|lost
win*|wygrywać|won|won
break|łamać / psuć|broke|broken
choose|wybierać|chose|chosen
spend|wydawać (pieniądze) / spędzać (czas)|spent|spent
keep|zachowywać / przechowywać|kept|kept
let*|pozwalać|let|let
hold|trzymać|held|held
wear|nosić (ubranie)|wore|worn
grow|rosnąć / uprawiać|grew|grown
draw|rysować|drew|drawn
fall|spadać / upadać|fell|fallen
catch|łapać|caught|caught
throw|rzucać|threw|thrown
build|budować|built|built
hurt|ranić / boleć|hurt|hurt
cut*|ciąć / kroić|cut|cut
hit*|uderzać|hit|hit
plan*|planować
prefer*|woleć
decide|decydować
hope|mieć nadzieję
believe|wierzyć
agree|zgadzać się
arrive|przyjeżdżać / przybywać
return|wracać
enjoy|cieszyć się (czymś)
worry|martwić się
hurry|spieszyć się
change|zmieniać
repeat|powtarzać
explain|wyjaśniać
describe|opisywać
invite|zapraszać
order|zamawiać
book|rezerwować
rent|wynajmować
borrow|pożyczać (od kogoś)
lend|pożyczać (komuś)|lent|lent
shut*|zamykać (mocno)|shut|shut
ride|jeździć (na rowerze, konno)|rode|ridden
hide|chować (się)|hid|hidden
bite|gryźć|bit|bitten
shake|potrząsać|shook|shaken
wake|budzić (się)|woke|woken
steal|kraść|stole|stolen
forgive|wybaczać|forgave|forgiven
feed|karmić|fed|fed
fight|walczyć / kłócić się|fought|fought
mean|znaczyć|meant|meant
lead|prowadzić (kogoś)|led|led
dream|śnić / marzyć|dreamt/dreamed|dreamt/dreamed
burn|palić (się)|burnt/burned|burnt/burned
sweep|zamiatać|swept|swept
ring|dzwonić (o dzwonku)|rang|rung
rise|wznosić się|rose|risen
shoot|strzelać|shot|shot
dig*|kopać (łopatą)|dug|dug
improve|poprawiać / ulepszać
prepare|przygotowywać
compare|porównywać
suggest|sugerować
recommend|polecać
complain|narzekać
discuss|omawiać
mention|wspominać (o czymś)
manage|radzić sobie / zarządzać
develop|rozwijać
increase|zwiększać
reduce|zmniejszać / ograniczać
protect|chronić
avoid|unikać
allow|pozwalać na coś
expect|oczekiwać / spodziewać się
include|zawierać / obejmować
offer|oferować
deliver|dostarczać
promise|obiecywać
achieve|osiągać
stick|przyklejać|stuck|stuck
hang|wieszać|hung|hung
bend|zginać|bent|bent
spread|rozprzestrzeniać się / smarować|spread|spread
seek|szukać (formalnie)|sought|sought
bet*|zakładać się|bet|bet
bleed|krwawić|bled|bled
breed|hodować|bred|bred
creep|skradać się|crept|crept
freeze|zamarzać / mrozić|froze|frozen
tear|drzeć|tore|torn
swear|przysięgać / przeklinać|swore|sworn
sink|tonąć|sank|sunk
strike|uderzać / strajkować|struck|struck
spin*|kręcić się|spun|spun
split*|dzielić / rozdzielać|split|split
quit*|rzucać (pracę, nałóg)|quit|quit
upset*|denerwować (kogoś)|upset|upset
forbid*|zakazywać|forbade|forbidden
admit*|przyznawać się
regret*|żałować
refer*|odnosić się / odsyłać
control*|kontrolować
consider|rozważać
require|wymagać
provide|zapewniać
remove|usuwać
replace|zastępować / wymieniać
solve|rozwiązywać
prove|udowadniać|proved|proved/proven
measure|mierzyć
estimate|szacować
predict|przewidywać
encourage|zachęcać
persuade|przekonywać
earn|zarabiać
waste|marnować
save|oszczędzać / ratować
fail|ponieść porażkę / nie zdać
succeed|odnieść sukces
survive|przetrwać / przeżyć
behave|zachowywać się
apply|ubiegać się / stosować
deny|zaprzeczać
rely|polegać
satisfy|zadowalać
identify|rozpoznawać / identyfikować
occupy|zajmować
supply|zaopatrywać
annoy|irytować
destroy|niszczyć
employ|zatrudniać
obey|być posłusznym
pray|modlić się
delay|opóźniać
display|wystawiać / wyświetlać
copy|kopiować
marry|poślubić
bury|zakopywać / grzebać
arise|powstawać / pojawiać się|arose|arisen
bear|znosić / dźwigać|bore|borne
bind|wiązać|bound|bound
cling|kurczowo się trzymać|clung|clung
deal|zajmować się (czymś) / rozdawać|dealt|dealt
flee|uciekać|fled|fled
forecast|prognozować|forecast|forecast
foresee|przewidzieć|foresaw|foreseen
grind|mielić|ground|ground
kneel|klękać|knelt/kneeled|knelt/kneeled
lay|kłaść / nakrywać (do stołu)|laid|laid
leap|skakać (daleko)|leapt/leaped|leapt/leaped
light|zapalać|lit|lit
mislead|wprowadzać w błąd|misled|misled
overcome|pokonywać / przezwyciężać|overcame|overcome
overtake|wyprzedzać|overtook|overtaken
shine|świecić|shone|shone
slide|ślizgać się|slid|slid
spit*|pluć|spat/spit|spat/spit
sting|żądlić / szczypać|stung|stung
acknowledge|przyznawać / potwierdzać
anticipate|przewidywać / oczekiwać
assume|zakładać / przypuszczać
attempt|próbować (formalnie)
cease|przestawać / ustawać
claim|twierdzić / domagać się
concentrate|koncentrować się
contribute|przyczyniać się
determine|ustalać / określać
ensure|zapewniać / upewniać się
establish|zakładać / ustanawiać
evaluate|oceniać
exaggerate|przesadzać
hesitate|wahać się
imply|sugerować (nie wprost)
indicate|wskazywać
insist|nalegać
interrupt|przerywać
investigate|badać / prowadzić śledztwo
justify|uzasadniać
maintain|utrzymywać
negotiate|negocjować
neglect|zaniedbywać
obtain|uzyskiwać
occur*|zdarzać się / występować
omit*|pomijać
oppose|sprzeciwiać się
overlook|przeoczyć
postpone|przekładać (na później)
pretend|udawać
prevent|zapobiegać
pursue|dążyć do / ścigać
recover|wracać do zdrowia / odzyskiwać
reject|odrzucać
release|uwalniać / wydawać
resign|rezygnować (ze stanowiska)
resist|opierać się
retire|przechodzić na emeryturę
reveal|ujawniać
seize|chwytać / przejmować
struggle|zmagać się
surrender|poddawać się
suspect|podejrzewać
sustain|podtrzymywać / wspierać
tackle|mierzyć się (z problemem)
tolerate|tolerować
undergo|przechodzić (np. operację)|underwent|undergone
undertake|podejmować się|undertook|undertaken
withdraw|wycofywać / wypłacać|withdrew|withdrawn
withstand|wytrzymywać|withstood|withstood
uphold|utrzymywać w mocy|upheld|upheld
overhear|przypadkiem usłyszeć|overheard|overheard
outgrow|wyrastać (z czegoś)|outgrew|outgrown
override|unieważniać / przeważać|overrode|overridden
withhold|zatajać / wstrzymywać|withheld|withheld
weave|tkać|wove|woven
wring|wykręcać (pranie)|wrung|wrung
sew|szyć|sewed|sewn/sewed
strive|usilnie się starać|strove/strived|striven/strived
tread|stąpać / deptać|trod|trodden
`;

  function stage(id) { return window.STAGES.filter(function (s) { return s.id === id; })[0]; }

  // rozkłada poziomy równo między istniejące poziomy etapu (po poziomie afterId, jeśli podano)
  window.SPREAD = function (stageId, lvls, afterId) {
    var st = stage(stageId);
    if (!st || !lvls.length) return;
    var start = 0;
    if (afterId) st.levels.forEach(function (l, i) { if (l.id === afterId) start = i + 1; });
    var rest = st.levels.length - start, n = lvls.length;
    for (var k = n - 1; k >= 0; k--) {
      st.levels.splice(start + Math.round((k + 1) * rest / (n + 1)), 0, lvls[k]);
    }
  };

  // dodatkowe poziomy (id „x…”) przeplatamy: słówka i ćwiczenia ze zdaniami na zmianę
  window.STAGES.forEach(function (st) {
    var core = [], vocab = [], practice = [];
    st.levels.forEach(function (l) {
      if (!/^x\d/.test(l.id)) core.push(l);
      else if (l.k === 'f' || l.k === 'o') practice.push(l);
      else vocab.push(l);
    });
    var merged = vocab.slice(), rest = merged.length;
    for (var k = practice.length - 1; k >= 0; k--) {
      merged.splice(Math.round((k + 1) * rest / (practice.length + 1)), 0, practice[k]);
    }
    st.levels = core.concat(merged);
  });

  var verbs = LEX.split('\n').map(function (l) { return l.trim(); }).filter(Boolean).map(function (l) {
    var p = l.split('|');
    return { b: p[0].replace('*', ''), dbl: p[0].indexOf('*') > 0, pl: p[1], past: p[2] || '', pp: p[3] || '' };
  });

  function regPast(v) {
    var b = v.b;
    if (v.dbl) return b + b.slice(-1) + 'ed';
    if (/e$/.test(b)) return b + 'd';
    if (/[^aeiou]y$/.test(b)) return b.slice(0, -1) + 'ied';
    return b + 'ed';
  }
  function third(b) {
    if (b === 'have') return 'has';
    if (/(s|x|z|ch|sh|o)$/.test(b)) return b + 'es';
    if (/[^aeiou]y$/.test(b)) return b.slice(0, -1) + 'ies';
    return b + 's';
  }
  function ing(v) {
    var b = v.b;
    if (b === 'be') return 'being';
    if (/ie$/.test(b)) return b.slice(0, -2) + 'ying';
    if (v.dbl) return b + b.slice(-1) + 'ing';
    if (/[^eoy]e$/.test(b)) return b.slice(0, -1) + 'ing';
    return b + 'ing';
  }
  var label = function (v) { return v.b + ' (' + v.pl.replace(/\s*\([^)]*\)/g, '') + ')'; };
  function chunks(a, n) { var out = []; for (var i = 0; i < a.length; i += n) out.push(a.slice(i, i + n)); return out; }
  function form(id, t, d, qp, items) {
    return { id: id, t: t, d: d, k: 'v', qp: qp, flip: true, strict: true, ex: ['pl2en', 'type', 'type'], i: items };
  }

  var groups = {};
  function put(stageId, anchor, lv) { var key = stageId + '|' + (anchor || ''); (groups[key] = groups[key] || []).push(lv); }

  var IN = {
    m: ['s2', 's2', 's3', 's3', 's4', 's4', 's5', 's5', 's6', 's6', 's6', 's7', 's7', 's8', 's8'],
    s: ['s3', 's3', 's3', 's3', 's4', 's4', 's5', 's5', 's5', 's6', 's6', 's7', 's7', 's8', 's8'],
    i: ['s3', 's3', 's3', 's4', 's4', 's5', 's5', 's5', 's6', 's6', 's6', 's7', 's7', 's8', 's8'],
    p: ['s4', 's4', 's4', 's4', 's5', 's5', 's5', 's6', 's6', 's6', 's7', 's7', 's7', 's8', 's8']
  };
  var ANCHOR = { 'm|s2': 'verbs1', 's|s3': 'ps1', 'i|s3': 'pc', 'p|s4': 'past2', 'pp|s5': 'pp' };
  var anchor = function (type, st) { return ANCHOR[type + '|' + st] || ''; };

  chunks(verbs, 20).forEach(function (c, ci) {
    var n = ci + 1, st;
    st = IN.m[ci];
    put(st, anchor('m', st), { id: 'gv-m-' + n, t: 'Czasowniki: zestaw ' + n, d: 'Dwadzieścia czasowników – znaczenie i pisownia.', k: 'v',
      i: c.map(function (v) { return v.b + '|' + v.pl; }) });
    st = IN.s[ci];
    put(st, anchor('s', st), form('gv-s-' + n, 'he / she / it: zestaw ' + n, 'Dodaj -s albo -es: go → goes, study → studies, have → has.',
      'Forma dla he / she / it:', c.filter(function (v) { return v.b !== 'be'; }).map(function (v) { return third(v.b) + '|' + label(v); })));
    st = IN.i[ci];
    put(st, anchor('i', st), form('gv-i-' + n, 'Forma -ing: zestaw ' + n, 'make → making, stop → stopping, see → seeing.',
      'Forma z końcówką -ing:', c.map(function (v) { return ing(v) + '|' + label(v); })));
    st = IN.p[ci];
    put(st, anchor('p', st), form('gv-p-' + n, 'Past Simple: zestaw ' + n, 'Forma przeszła – regularna (-ed) albo nieregularna.',
      'Forma przeszła (Past Simple):', c.map(function (v) { return (v.past || regPast(v)) + '|' + label(v); })));
  });

  var ppIn = ['s5', 's5', 's6', 's6', 's7', 's7'];
  chunks(verbs.filter(function (v) { return v.pp; }), 20).forEach(function (c, ci) {
    var st = ppIn[Math.min(ci, ppIn.length - 1)];
    put(st, anchor('pp', st), form('gv-pp-' + (ci + 1), 'III forma: zestaw ' + (ci + 1), 'Past Participle – do Present Perfect i strony biernej: go → gone.',
      'III forma (Past Participle):', c.map(function (v) { return v.pp + '|' + label(v); })));
  });

  Object.keys(groups).forEach(function (k) {
    var p = k.split('|');
    window.SPREAD(p[0], groups[k], p[1] || null);
  });
})();
