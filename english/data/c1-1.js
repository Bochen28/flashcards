/* Etap 8 – słówka C1 (część 1). */
(function () {
var CHOICE = ["en2pl", "pl2en", "listen"];
ADD("s8", [
{ id: "x8-academic", t: "Język akademicki", d: "Pojęcie, przesłanka, korelacja, aczkolwiek.", k: "v", i: `
paradigm|paradygmat
framework|ramy (struktura)
notion|pojęcie
premise|przesłanka
implication|implikacja
correlation|korelacja
discrepancy|rozbieżność
inference|wnioskowanie
methodology|metodologia
empirical|empiryczny
theoretical|teoretyczny
comprehensive|wyczerpujący
coherent|logicznie spójny
rigorous|rygorystyczny
plausible|wiarygodny
inherent|nieodłączny
intrinsic|wewnętrzny (wrodzony)
underlying|leżący u podstaw
predominantly|przeważnie
albeit|aczkolwiek
hence|stąd (dlatego)
thereby|tym samym
whereby|dzięki któremu
notwithstanding|pomimo
nonetheless|niemniej jednak
`},
{ id: "x8-verbs-c1", t: "Czasowniki C1", d: "Uśmierzać, potwierdzać, utrudniać, obalać.", k: "v", i: `
advocate|opowiadać się za
alleviate|uśmierzać (np. ból)
ascertain|ustalić
bolster|wzmacniać
circumvent|obchodzić (np. przepisy)
comprise|składać się z
condone|przymykać oko na
contemplate|rozważać
corroborate|potwierdzać
curtail|ograniczać
deem|uważać za
deter|odstraszać
discern|dostrzegać
elicit|wywoływać (reakcję)
embark on|rozpocząć (przedsięwzięcie)
endorse|popierać oficjalnie
exacerbate|pogarszać
foster|sprzyjać
hinder|utrudniać
instigate|wszczynać
mitigate|łagodzić skutki
refute|obalać (argument)
scrutinise/scrutinize|dokładnie badać
yield|przynosić (wyniki)
relinquish|zrzekać się
`},
{ id: "x8-adj-c1", t: "Przymiotniki C1: ludzie", d: "Drobiazgowy, dociekliwy, nieustępliwy.", k: "v", i: `
meticulous|drobiazgowy
articulate|wymowny
candid|szczery
diligent|pilny
erratic|nieobliczalny
frugal|oszczędny
gregarious|towarzyski
impeccable|nienaganny
inquisitive|dociekliwy
lethargic|ospały
magnanimous|wielkoduszny
obstinate|zawzięty
ostentatious|ostentacyjny
pragmatic|pragmatyczny
prudent|rozważny
resilient|prężny
scrupulous|skrupulatny
tenacious|nieustępliwy
unassuming|bezpretensjonalny
vindictive|mściwy
zealous|gorliwy
astute|przenikliwy
benevolent|dobroczynny
complacent|zbyt zadowolony z siebie
condescending|protekcjonalny
`},
{ id: "x8-idioms3", t: "Idiomy 3", d: "Igła w stogu siana, głowa do góry…", k: "v", ex: CHOICE, i: `
add insult to injury|na domiar złego
bark up the wrong tree|szukać nie tam, gdzie trzeba
beat a dead horse|wracać do zamkniętej sprawy
bite the bullet|zacisnąć zęby
by the skin of your teeth|o włos
cry over spilt milk|płakać nad rozlanym mlekiem
cut to the chase|przejść do sedna
devil's advocate|adwokat diabła
every cloud has a silver lining|nie ma tego złego, co by na dobre nie wyszło
go down in flames|sromotnie przegrać
hit the sack|iść spać
it takes two to tango|do tanga trzeba dwojga
keep your chin up|głowa do góry
leave no stone unturned|poruszyć niebo i ziemię
let sleeping dogs lie|nie wywołuj wilka z lasu
the elephant in the room|temat, którego wszyscy unikają
throw in the towel|rzucić ręcznik
a storm in a teacup|burza w szklance wody
when pigs fly|prędzej mi kaktus wyrośnie
your guess is as good as mine|wiem tyle, co ty
go back to square one|zaczynać od zera
a needle in a haystack|igła w stogu siana
put all your eggs in one basket|stawiać wszystko na jedną kartę
the best of both worlds|zalety obu rozwiązań naraz
the writing is on the wall|wszystko zapowiada katastrofę
`},
{ id: "x8-society2", t: "Społeczeństwo C1", d: "Państwo opiekuńcze, drenaż mózgów…", k: "v", i: `
welfare state|państwo opiekuńcze
social mobility|mobilność społeczna
marginalised/marginalized|zmarginalizowany
affluent|zamożny
deprived|upośledzony społecznie
gentrification|gentryfikacja
consumerism|konsumpcjonizm
materialism|materializm
individualism|indywidualizm
multicultural|wielokulturowy
integration|integracja
assimilation|asymilacja
xenophobia|ksenofobia
diversity|różnorodność
inclusion|inkluzja
social cohesion|spójność społeczna
civil society|społeczeństwo obywatelskie
grassroots|oddolny
activism|aktywizm
philanthropy|filantropia
ageing population/aging population|starzejące się społeczeństwo
birth rate|wskaźnik urodzeń
life expectancy|średnia długość życia
brain drain|drenaż mózgów
nuclear family|rodzina nuklearna
`},
{ id: "x8-politics2", t: "Polityka C1", d: "Poprawka, okręg wyborczy, zamach stanu.", k: "v", i: `
bill|projekt ustawy
amendment|poprawka
constitution|konstytucja
electorate|elektorat
constituency|okręg wyborczy
landslide victory|miażdżące zwycięstwo
incumbent|urzędujący
bipartisan|ponadpartyjny
lobby|lobbować
populism|populizm
authoritarian|autorytarny
dictatorship|dyktatura
regime|reżim
coup|zamach stanu
uprising|powstanie
dissent|sprzeciw
censure|nagana (potępienie)
accountability|rozliczalność
transparency|przejrzystość
bureaucracy|biurokracja
red tape|papierologia
diplomacy|dyplomacja
superpower|supermocarstwo
ceasefire|zawieszenie broni
statesman|mąż stanu
`},
{ id: "x8-phrasal6", t: "Phrasal verbs 6", d: "dwell on, iron out, mull over…", k: "v", i: `
bank on|polegać na
bear out|potwierdzać
brush aside|zbyć (zlekceważyć)
chip in|dorzucić się
clamp down on|rozprawić się z
crop up|pojawić się nagle
dwell on|rozpamiętywać
fend off|odpierać
fizzle out|rozmyć się
gloss over|prześlizgnąć się nad
hammer out|wypracować (porozumienie)
iron out|wyprostować (problemy)
jot down|zanotować
lash out|wybuchnąć złością
mull over|przemyśleć
nod off|przysnąć
own up|przyznać się
pan out|potoczyć się
pore over|ślęczeć nad
rake in|zgarniać (pieniądze)
rope in|wciągnąć do pomocy
single out|wyróżnić
stave off|zażegnać
touch on|poruszyć (temat)
weed out|wyeliminować
`},
{ id: "x8-business2", t: "Biznes C1", d: "Przejęcie, aktywa, dywidenda, audyt.", k: "v", i: `
acquisition|przejęcie (firmy)
asset|aktywo (atut)
liability|zobowiązanie (pasywo)
dividend|dywidenda
equity|kapitał własny
stakeholder|interesariusz
venture capital|kapitał podwyższonego ryzyka
cash flow|przepływy pieniężne
overheads|koszty ogólne
downsizing|redukcja zatrudnienia
outsource|zlecać na zewnątrz
benchmark|punkt odniesienia
scalable|skalowalny
leverage|wykorzystać (jako dźwignię)
synergy|synergia
due diligence|analiza przed transakcją
joint venture|wspólne przedsięwzięcie
insolvency|niewypłacalność
audit|audyt
fiscal year|rok obrotowy
headhunter|łowca głów
networking|nawiązywanie kontaktów
win-win situation|sytuacja korzystna dla obu stron
bottom line|sedno sprawy (wynik końcowy)
start-up capital|kapitał początkowy
`},
{ id: "x8-earth", t: "Ziemia i klimat C1", d: "Fotosynteza, erozja, wieczna zmarzlina.", k: "v", i: `
photosynthesis|fotosynteza
carbon neutral|neutralny emisyjnie
sustainability|zrównoważony rozwój
habitat loss|utrata siedlisk
pollinator|zapylacz
invasive species|gatunek inwazyjny
permafrost|wieczna zmarzlina
ice sheet|lądolód
erosion|erozja
sediment|osad
fertile|żyzny
barren|jałowy
arid|suchy (pustynny)
tropical|tropikalny
temperate|umiarkowany (o klimacie)
precipitation|opady
humidity|wilgotność
atmosphere|atmosfera
geothermal|geotermalny
hydroelectric|hydroelektryczny
carbon capture|wychwytywanie CO2
rewilding|przywracanie dzikiej przyrody
overfishing|przełowienie
microplastics|mikroplastik
food chain|łańcuch pokarmowy
`},
{ id: "x8-nouns-c1", t: "Rzeczowniki C1", d: "Zarzut, luka prawna, niuans, impas.", k: "v", i: `
advent|nadejście
allegation|zarzut
anomaly|anomalia
backlash|ostry sprzeciw
catalyst|katalizator
consensus|konsensus
constraint|ograniczenie
contingency|ewentualność
dichotomy|dychotomia
disparity|dysproporcja
endeavour/endeavor|przedsięwzięcie
facet|strona (aspekt)
fallacy|błędne przekonanie
hindsight|mądrość po fakcie
incentive|zachęta
leeway|swoboda działania
loophole|luka prawna
milestone|kamień milowy
nuance|niuans
pitfall|pułapka
precedent|precedens
repercussions|reperkusje
scrutiny|wnikliwa kontrola
stalemate|impas
upheaval|wstrząs (przewrót)
`},
{ id: "x8-adverbs-c1", t: "Przysłówki C1", d: "Rzekomo, nieuchronnie, pozornie, celowo.", k: "v", i: `
allegedly|rzekomo
arguably|można by twierdzić
conversely|odwrotnie
explicitly|wprost
implicitly|w sposób dorozumiany
inevitably|nieuchronnie
invariably|niezmiennie
notably|w szczególności
overwhelmingly|w przeważającej mierze
presumably|przypuszczalnie
reluctantly|niechętnie
seemingly|pozornie
simultaneously|jednocześnie
subsequently|następnie
thereafter|odtąd
ironically|jak na ironię
admittedly|trzeba przyznać
hitherto|dotychczas
fundamentally|zasadniczo
deliberately|celowo
inadvertently|nieumyślnie
readily|chętnie
scarcely|ledwie
virtually|praktycznie (niemal)
profoundly|głęboko
`},
{ id: "x8-collocations", t: "Kolokacje C1", d: "shed light on, pave the way for…", k: "v", ex: CHOICE, i: `
a vicious circle|błędne koło
a level playing field|równe szanse
bear the brunt of|ponosić główny ciężar
come under fire|znaleźć się pod ostrzałem krytyki
draw the line|postawić granicę
fall on deaf ears|trafić w próżnię
foot the bill|pokryć koszty
gain momentum|nabierać rozpędu
go to great lengths|zadać sobie wiele trudu
have a vested interest|mieć osobisty interes
in the wake of|w następstwie
lay the groundwork|położyć fundamenty
make headway|posuwać się naprzód
pave the way for|utorować drogę do
play a pivotal role|odgrywać kluczową rolę
raise eyebrows|wywołać zdziwienie
run counter to|być sprzecznym z
set a precedent|ustanowić precedens
shed light on|rzucić światło na
stand the test of time|przetrwać próbę czasu
take a toll on|odbić się negatywnie na
tip the balance|przeważyć szalę
to a large extent|w dużej mierze
wreak havoc|siać spustoszenie
a far-reaching decision|decyzja o daleko idących skutkach
`},
{ id: "x8-media", t: "Media i retoryka", d: "Eufemizm, żargon, sygnalista, nakład.", k: "v", i: `
spin|manipulowanie przekazem
soundbite|chwytliwy cytat
rhetoric|retoryka
euphemism|eufemizm
jargon|żargon
buzzword|modne słówko
headline-grabbing|przyciągający uwagę mediów
sensationalism|pogoń za sensacją
whistle-blower|sygnalista
leak|przeciek informacji
exclusive|materiał na wyłączność
scoop|sensacyjna wiadomość
editorial|artykuł redakcyjny
op-ed|artykuł opiniotwórczy
libel|zniesławienie na piśmie
slander|oszczerstwo
press release|komunikat prasowy
anchor|prezenter wiadomości
correspondent|korespondent
circulation|nakład
ratings|oglądalność
echo chamber|bańka informacyjna
clickbait|tytuł-pułapka
media literacy|umiejętność krytycznego odbioru mediów
off the record|nieoficjalnie
`},
{ id: "x8-attitudes", t: "Postawy wobec innych", d: "Upominać, schlebiać, pogardzać, dąsać się.", k: "v", i: `
admonish|upominać
belittle|umniejszać
berate|besztać
cajole|nakłaniać pochlebstwem
chastise|karcić
coax|łagodnie nakłonić
commend|wyróżniać pochwałą
console|pocieszać
deride|wyśmiewać
despise|gardzić
dread|bać się (z przerażeniem)
empathise/empathize|współodczuwać
flatter|schlebiać
grumble|burczeć (narzekać)
humiliate|upokarzać
indulge|dogadzać
lament|ubolewać
loathe|nie cierpieć
placate|udobruchać
relish|delektować się
resent|czuć urazę
scorn|odnosić się z pogardą
sulk|dąsać się
taunt|drwić
yearn|usilnie pragnąć
`},
{ id: "x8-suffixes", t: "Przyrostki: -ness, -ity, -ance", d: "Gotowość, złożoność, wytrwałość…", k: "v", i: `
consciousness|przytomność (świadomość)
willingness|gotowość
effectiveness|skuteczność
weakness|słabość
fairness|sprawiedliwość
kindness|życzliwość
darkness|ciemność
authenticity|autentyczność
complexity|złożoność
flexibility|elastyczność
generosity|hojność
hostility|wrogość
probability|prawdopodobieństwo
reliability|niezawodność
visibility|widoczność
maturity|dojrzałość
abundance|obfitość
assistance|pomoc
endurance|wytrzymałość
relevance|istotność
resistance|opór
significance|znaczenie
persistence|wytrwałość
reluctance|niechęć
anonymity|anonimowość
`},
{ id: "x8-formal", t: "Język formalny", d: "commence, purchase, prior to, on behalf of…", k: "v", i: `
commence|rozpoczynać (formalnie)
terminate|zakończyć (formalnie)
purchase|zakupić
inquire/enquire|dowiadywać się
assist|asystować
reside|zamieszkiwać
depart|odjeżdżać (formalnie)
inform|informować
request|wnosić o
sufficient|dostateczny
numerous|liczny
prior to|przed (formalnie)
subsequent to|po (formalnie)
in accordance with|zgodnie z
with regard to|w odniesieniu do
in the event of|w razie
on behalf of|w imieniu
pursuant to|na mocy
henceforth|odtąd (formalnie)
approximately|w przybliżeniu
commencement|rozpoczęcie
endeavour to/endeavor to|dokładać starań, aby
remuneration|wynagrodzenie
correspondence|korespondencja
notify|powiadamiać
`}
]);
})();
