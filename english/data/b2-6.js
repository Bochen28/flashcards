/* Etap 7 – słówka B2 (część 2). */
(function () {
var CHOICE = ["en2pl", "pl2en", "listen"];
ADD("s7", [
{ id: "x7-illness", t: "Choroby i urazy", d: "Astma, cukrzyca, skręcenie, wysypka.", k: "v", i: `
asthma|astma
diabetes|cukrzyca
cancer|nowotwór
stroke|udar
arthritis|zapalenie stawów
migraine|migrena
insomnia|bezsenność
food poisoning|zatrucie pokarmowe
rash|wysypka
blister|pęcherz na skórze
sprain|skręcenie
fracture|złamanie
concussion|wstrząśnienie mózgu
pneumonia|zapalenie płuc
tonsillitis|zapalenie migdałków
chickenpox|ospa wietrzna
measles|odra
hay fever|katar sienny
high blood pressure|nadciśnienie
surgery|chirurgia (zabieg)
recovery|powrót do zdrowia
physiotherapy|fizjoterapia
contagious|zaraźliwy
pharmacist|farmaceuta
prescribe|przepisywać (lek)
`},
{ id: "x7-feelings3", t: "Emocje B2", d: "Przytłoczony, zdruzgotany, oniemiały.", k: "v", i: `
overwhelmed|przytłoczony
devastated|zdruzgotany
thrilled|wniebowzięty
content|zadowolony (spokojny)
bewildered|oszołomiony
apprehensive|pełen obaw
indifferent|obojętny
resentful|pełen urazy
nostalgic|nostalgiczny
exhilarated|upojony radością
frustrated|sfrustrowany
intimidated|onieśmielony
humiliated|upokorzony
outraged|oburzony
petrified|sparaliżowany strachem
restless|niespokojny
sentimental|sentymentalny
smug|zadowolony z siebie
speechless|oniemiały
startled|przestraszony (zaskoczony)
tense|spięty
uneasy|zaniepokojony
weary|znużony
wistful|tęskny
elated|w euforii
`},
{ id: "x7-academia", t: "Edukacja i badania", d: "Program nauczania, ankieta, próba, rok przerwy.", k: "v", i: `
curriculum|program nauczania
compulsory|obowiązkowy
optional|nieobowiązkowy
assessment|ocenianie
continuous assessment|ocenianie ciągłe
coursework|praca semestralna
dissertation|rozprawa dyplomowa
peer review|recenzja naukowa
findings|wyniki badań
survey|ankieta
questionnaire|kwestionariusz
sample|próba (próbka)
statistics|statystyka
analyse/analyze|analizować
academic|akademicki
literacy|umiejętność czytania i pisania
numeracy|umiejętność liczenia
illiterate|niepiśmienny
vocational training|szkolenie zawodowe
lifelong learning|uczenie się przez całe życie
distance learning|nauczanie na odległość
gap year|rok przerwy przed studiami
student loan|kredyt studencki
alumni|absolwenci
tuition|zajęcia (nauczanie)
`},
{ id: "x7-phrasal5", t: "Phrasal verbs 5", d: "carry out, count on, fall through…", k: "v", i: `
back down|ustąpić
blow up|wysadzić
boil down to|sprowadzać się do
bring forward|przyspieszyć (termin)
carry out|przeprowadzić
come up|pojawić się (o temacie)
count on|liczyć na
die out|wymrzeć
draw up|sporządzić (dokument)
fall behind|zostawać w tyle
fall through|nie dojść do skutku
get through|przebrnąć przez
go ahead|śmiało zacząć
hold up|opóźniać
lay off|zwalniać (pracowników)
live up to|sprostać (oczekiwaniom)
phase out|stopniowo wycofywać
put across|przedstawić (myśl)
set back|opóźnić
sum up|podsumować
take on|przyjąć (zadanie)
tie in with|wiązać się z
turn over|przewrócić
wind down|odprężyć się
write off|spisać na straty
`},
{ id: "x7-world", t: "Świat: miejsca i nazwy", d: "Arktyka, Bałkany, Tatry, Wiedeń.", k: "v", i: `
the Arctic|Arktyka
Antarctica|Antarktyda
the Mediterranean|Morze Śródziemne
the Pacific|Pacyfik
the Atlantic|Atlantyk
the Middle East|Bliski Wschód
Africa|Afryka
South America|Ameryka Południowa
Asia|Azja
Europe|Europa
Scandinavia|Skandynawia
the Balkans|Bałkany
the Carpathians|Karpaty
the Tatra Mountains|Tatry
the Vistula|Wisła
the Thames|Tamiza
the Danube|Dunaj
the Rhine|Ren
Vienna|Wiedeń
Munich|Monachium
Lisbon|Lizbona
Brussels|Bruksela
Copenhagen|Kopenhaga
Moscow|Moskwa
Prague|Praga
`},
{ id: "x7-crime2", t: "Przestępczość 2", d: "Szantaż, przemyt, śledztwo, odciski palców.", k: "v", i: `
cybercrime|cyberprzestępczość
identity theft|kradzież tożsamości
blackmail|szantaż
bribery|przekupstwo
smuggling|przemyt
drug dealer|diler narkotyków
hostage|zakładnik
hijack|porwać (samolot)
assault|napaść
arson|podpalenie
forgery|fałszerstwo
money laundering|pranie pieniędzy
manslaughter|nieumyślne spowodowanie śmierci
trespassing|wtargnięcie na teren prywatny
speeding|przekroczenie prędkości
drink-driving/drunk driving|jazda po alkoholu
detective|detektyw
investigation|śledztwo
clue|trop
fingerprints|odciski palców
CCTV|monitoring
accomplice|wspólnik przestępstwa
crime scene|miejsce zbrodni
offender|sprawca
witness statement|zeznanie świadka
`},
{ id: "x7-qualities", t: "Przymiotniki: cechy rzeczy", d: "Dwuznaczny, trwały, kruchy, gruntowny.", k: "v", i: `
adequate|wystarczający
ambiguous|dwuznaczny
artificial|sztuczny
chaotic|chaotyczny
consistent|spójny
considerable|znaczny
contemporary|współczesny
crude|prymitywny
delicate|delikatny
distinct|odrębny
durable|trwały
explicit|dosłowny (wyraźny)
feasible|wykonalny
fragile|kruchy
genuine|autentyczny
harmful|szkodliwy
intense|intensywny
moderate|umiarkowany
rigid|sztywny
subsequent|późniejszy
substantial|pokaźny
superficial|powierzchowny
thorough|gruntowny
vast|rozległy
visible|widoczny
`},
{ id: "x7-verbs3", t: "Czasowniki B2 2", d: "Porzucić, gromadzić, ukrywać, ułatwiać.", k: "v", i: `
abandon|porzucić
accumulate|gromadzić
allocate|przydzielać
alter|przerabiać (zmieniać)
attribute|przypisywać
compensate|rekompensować
conceal|ukrywać
consult|konsultować się
dedicate|poświęcać
derive|czerpać (wywodzić)
diminish|zmniejszać się
discard|wyrzucać (odrzucać)
dominate|dominować
enhance|wzmacniać
enforce|egzekwować
evolve|ewoluować
expose|ujawniać (narażać)
facilitate|ułatwiać
generate|generować
illustrate|ilustrować
impose|narzucać
modify|modyfikować
perceive|postrzegać
possess|posiadać
undermine|podkopywać
`},
{ id: "x7-marketing", t: "Marketing i sprzedaż", d: "Grupa docelowa, marża, hurt, magazyn.", k: "v", i: `
target audience|grupa docelowa
market research|badanie rynku
brand awareness|rozpoznawalność marki
slogan|hasło reklamowe
commercial|reklama telewizyjna
endorsement|rekomendacja (np. gwiazdy)
loyalty card|karta lojalnościowa
free sample|darmowa próbka
special offer|oferta specjalna
buy one, get one free|kup jeden, drugi gratis
market share|udział w rynku
niche|nisza
profit margin|marża
pricing|ustalanie cen
wholesale|hurt
retail|sprzedaż detaliczna
retailer|sprzedawca detaliczny
distributor|dystrybutor
stock|towar na stanie
warehouse|magazyn
logistics|logistyka
customer satisfaction|zadowolenie klientów
sales figures|wyniki sprzedaży
break-even point|próg rentowności
competitive advantage|przewaga konkurencyjna
`},
{ id: "x7-plants", t: "Drzewa i rośliny", d: "Klon, wierzba, mech, sad, łąka.", k: "v", i: `
maple|klon
willow|wierzba
beech|buk
spruce|świerk
fir|jodła
chestnut|kasztan
acorn|żołądź
pine cone|szyszka
bark|kora
trunk|pień
twig|gałązka
moss|mech
fern|paproć
ivy|bluszcz
thorn|cierń
petal|płatek kwiatu
stem|łodyga
bud|pąk
blossom|kwiecie
weed|chwast
seedling|sadzonka
harvest|żniwa
crop|plon
orchard|sad
meadow|łąka
`},
{ id: "x7-love-idioms", t: "Idiomy: uczucia i relacje", d: "Zakochać się po uszy, krew nie woda…", k: "v", ex: CHOICE, i: `
fall head over heels|zakochać się po uszy
have a crush on|podkochiwać się w
get on like a house on fire|świetnie się dogadywać
break someone's heart|złamać komuś serce
pop the question|oświadczyć się
tie the knot|wziąć ślub
on the rocks|w kryzysie (o związku)
give someone the cold shoulder|traktować kogoś ozięble
hold a grudge|chować urazę
bury the hatchet|zakopać topór wojenny
make amends|naprawić krzywdy
turn a blind eye|przymykać oko
have a soft spot for|mieć słabość do
be on good terms|być w dobrych stosunkach
be at loggerheads|drzeć koty
keep someone at arm's length|trzymać kogoś na dystans
go behind someone's back|działać za czyimiś plecami
stab someone in the back|wbić komuś nóż w plecy
a shoulder to cry on|ktoś, komu można się wypłakać
blood is thicker than water|krew nie woda
the apple of someone's eye|oczko w głowie
like father, like son|niedaleko pada jabłko od jabłoni
wear your heart on your sleeve|okazywać otwarcie uczucia
see red|wpaść w szał
drive someone up the wall|doprowadzać kogoś do szału
`},
{ id: "x7-time-phrases", t: "Wyrażenia czasowe", d: "Na razie, z wyprzedzeniem, w samą porę.", k: "v", ex: CHOICE, i: `
in the meantime|w międzyczasie
from now on|od teraz
for the time being|na razie
sooner or later|prędzej czy później
at the latest|najpóźniej
in advance|z wyprzedzeniem
in due course|we właściwym czasie
at short notice|z krótkim wyprzedzeniem
on a regular basis|regularnie
once and for all|raz na zawsze
every now and then|co jakiś czas
for good|na dobre
in no time|w mgnieniu oka
behind schedule|z opóźnieniem wobec planu
ahead of schedule|przed terminem
around the clock|całą dobę
at the eleventh hour|w ostatniej chwili
in the nick of time|w samą porę
time-consuming|czasochłonny
overdue|zaległy
in the long term|w dłuższej perspektywie
short-term|krótkoterminowy
long-term|długoterminowy
nowadays|obecnie
meanwhile|tymczasem
`},
{ id: "x7-maths", t: "Liczby i matematyka", d: "Mnożyć, ułamek, równanie, średnica.", k: "v", i: `
add up|sumować
subtract|odejmować
multiply|mnożyć
divide|dzielić (liczby)
equals|równa się
fraction|ułamek
per cent/percent|procent
decimal point|przecinek dziesiętny
even number|liczba parzysta
odd number|liczba nieparzysta
square metre/square meter|metr kwadratowy
total|suma
digit|cyfra
calculation|obliczenie
equation|równanie
graph|wykres
chart|diagram
volume|objętość
diameter|średnica
radius|promień
angle|kąt
twice as much|dwa razy tyle
double|podwójny
triple|potrójny
a third|jedna trzecia
`},
{ id: "x7-books", t: "Literatura", d: "Rozdział, cytat, baśń, mól książkowy.", k: "v", i: `
chapter|rozdział
paragraph|akapit
quote|cytat
protagonist|główny bohater
genre|gatunek literacki
fiction|fikcja literacka
non-fiction|literatura faktu
biography|biografia
autobiography|autobiografia
memoir|wspomnienia
short story|opowiadanie
fairy tale|baśń
fable|bajka z morałem
myth|mit
legend|legenda
moral|morał
metaphor|metafora
irony|ironia
best-seller|bestseller
publisher|wydawca
edition|wydanie
hardback|twarda oprawa
paperback|miękka oprawa
bookworm|mól książkowy
page-turner|wciągająca książka
`},
{ id: "x7-noun-preps", t: "Rzeczowniki z przyimkami", d: "reason for, increase in, access to…", k: "v", i: `
reason for|powód (czegoś)
increase in|wzrost (czegoś)
decrease in|spadek (czegoś)
solution to|rozwiązanie (czegoś)
answer to|odpowiedź na
key to|klucz do
access to|dostęp do
attitude to/attitude towards|stosunek do
cause of|przyczyna (czegoś)
effect on|skutek dla
influence on|wpływ na
damage to|szkoda dla
demand for|popyt na
need for|potrzeba (czegoś)
relationship with|relacja z
difference between|różnica między
advantage of|zaleta (czegoś)
lack of|brak (czegoś)
invitation to|zaproszenie na
interest in|zainteresowanie czymś
pride in|duma z
respect for|szacunek dla
contact with|kontakt z
threat to|zagrożenie dla
approach to|podejście do
`},
{ id: "x7-take-give", t: "Wyrażenia z take i give", d: "take for granted, give way, give it a try…", k: "v", ex: CHOICE, i: `
take responsibility for|wziąć odpowiedzialność za
take for granted|uważać za oczywiste
take sides|opowiadać się po czyjejś stronie
take offence|obrazić się
take your time|nie spieszyć się
take turns|robić coś na zmianę
take the lead|objąć prowadzenie
take a seat|usiąść (proszę spocząć)
take notice of|zwrócić uwagę na
take pride in|być dumnym z
take steps|podjąć kroki
take charge of|przejąć kontrolę nad
give way|ustąpić pierwszeństwa
give rise to|dać początek
give a hand|pomóc
give up hope|stracić nadzieję
give priority to|dać pierwszeństwo czemuś
give notice|złożyć wypowiedzenie
give a lift|podwieźć
give it a try|spróbować
give birth to|urodzić (kogoś)
give credit to|docenić zasługi
give someone a call|zadzwonić do kogoś
give an example|podać przykład
give evidence|zeznawać w sądzie
`}
]);
})();
