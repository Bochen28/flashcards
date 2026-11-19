/* Etap 3 i 4 – dodatkowe słówka A2. */
(function () {
var CHOICE = ["en2pl", "pl2en", "listen"];
ADD("s3", [
{ id: "x3-food3", t: "Jedzenie 3", d: "Wołowina, krewetki, jajecznica, sernik.", k: "v", i: `
beef|wołowina
pork|wieprzowina
lamb|jagnięcina
chicken breast|pierś z kurczaka
minced meat|mięso mielone
tuna|tuńczyk
salmon|łosoś
prawns/shrimp|krewetki
noodles|makaron azjatycki
omelette/omelet|omlet
scrambled eggs|jajecznica
boiled egg|jajko na twardo
peanut butter|masło orzechowe
apple pie|szarlotka
cheesecake|sernik
muffin|babeczka
bun|drożdżówka
roll|bułka
baguette|bagietka
wrap|wrap (tortilla z nadzieniem)
stew|gulasz
roast chicken|pieczony kurczak
mashed potatoes|puree ziemniaczane
whipped cream|bita śmietana
ice cube|kostka lodu
`},
{ id: "x3-shops2", t: "Sklepy i usługi", d: "Kwiaciarnia, jubiler, optyk, pralnia.", k: "v", i: `
hairdresser's|zakład fryzjerski
dry cleaner's|pralnia chemiczna
launderette/laundromat|pralnia samoobsługowa
florist's|kwiaciarnia
newsagent's|kiosk z gazetami
jeweller's/jeweler's|jubiler
optician's|optyk
shoe shop|sklep obuwniczy
department store|dom towarowy
hardware store|sklep budowlany
off-licence/liquor store|sklep monopolowy
stationer's|sklep papierniczy
electronics shop|sklep z elektroniką
furniture shop|sklep meblowy
sports shop|sklep sportowy
charity shop|sklep charytatywny
travel agent's|agencja turystyczna
car wash|myjnia samochodowa
beauty salon|salon kosmetyczny
repair shop|warsztat naprawczy
dentist's|gabinet dentystyczny
vet's|gabinet weterynaryjny
fishmonger's|sklep rybny
delicatessen|delikatesy
cake shop|cukiernia
`},
{ id: "x3-homeverbs", t: "W domu: czynności", d: "Zamknąć na klucz, nastawić budzik, rozpakować.", k: "v", i: `
turn on the light|włączyć światło
turn off the TV|wyłączyć telewizor
lock the door|zamknąć drzwi na klucz
unlock|otworzyć kluczem
ring the doorbell|zadzwonić do drzwi
knock on the door|zapukać do drzwi
go upstairs|iść na górę
go downstairs|iść na dół
sit on the sofa|siedzieć na kanapie
lie in bed|leżeć w łóżku
make tea|zrobić herbatę
boil water|zagotować wodę
set the alarm|nastawić budzik
charge your phone|naładować telefon
fold the clothes|składać ubrania
hang up your coat|powiesić płaszcz
put away|odłożyć na miejsce
open the curtains|odsłonić zasłony
close the blinds|zasunąć żaluzje
feed the fish|nakarmić rybki
answer the door|otworzyć drzwi (gościowi)
pack a bag|spakować torbę
unpack|rozpakować się
fix a tap|naprawić kran
change a light bulb|wymienić żarówkę
`},
{ id: "x3-sportgear", t: "Sprzęt sportowy", d: "Rakieta, narty, hantle, wędka.", k: "v", i: `
racket|rakieta tenisowa
bat|kij (do baseballa)
net|siatka
skis|narty
skates|łyżwy
swimming goggles|okulary pływackie
swimming cap|czepek pływacki
tracksuit|dres
sports bag|torba sportowa
water bottle|bidon
stopwatch|stoper
mat|mata
dumbbells|hantle
treadmill|bieżnia
surfboard|deska surfingowa
snowboard|deska snowboardowa
fishing rod|wędka
boxing gloves|rękawice bokserskie
cue|kij bilardowy
court|kort
golf club|kij golfowy
scoreboard|tablica wyników
changing room/locker room|szatnia
skateboard|deskorolka
shin pads|ochraniacze na piszczele
`},
{ id: "x3-hotel", t: "W hotelu", d: "Klucz do pokoju, brak miejsc, sejf.", k: "v", i: `
room key|klucz do pokoju
room service|obsługa pokoju
wake-up call|budzenie telefoniczne
breakfast included|śniadanie w cenie
fully booked|brak wolnych miejsc
vacancy|wolny pokój
twin room|pokój z dwoma łóżkami
suite|apartament hotelowy
safe|sejf
porter|bagażowy
noisy room|głośny pokój
sea view|widok na morze
check-in time|godzina zameldowania
checkout time|godzina wymeldowania
late checkout|późne wymeldowanie
booking confirmation|potwierdzenie rezerwacji
cancel a booking|anulować rezerwację
extra bed|dodatkowe łóżko
Do not disturb|Nie przeszkadzać
Wi-Fi password|hasło do Wi-Fi
luggage storage|przechowalnia bagażu
front desk|lada recepcji
hotel guest|gość hotelowy
air-conditioned|klimatyzowany
en suite bathroom|łazienka w pokoju
`},
{ id: "x3-gadgets", t: "Sprzęt elektroniczny", d: "Pendrive, kamerka, słuchawki, etui.", k: "v", i: `
mouse pad|podkładka pod mysz
USB stick/flash drive|pendrive
scanner|skaner
webcam|kamerka internetowa
speakers|głośniki
microphone|mikrofon
headset|zestaw słuchawkowy
cable|kabel
plug|wtyczka
touchpad|gładzik
desktop computer|komputer stacjonarny
e-reader|czytnik e-booków
hard drive|dysk twardy
memory card|karta pamięci
games console|konsola do gier
earphones|słuchawki douszne
screen protector|szkło ochronne na ekran
phone case|etui na telefon
selfie stick|kijek do selfie
printer ink|tusz do drukarki
Bluetooth speaker|głośnik bezprzewodowy
laptop bag|torba na laptopa
on/off button|przycisk zasilania
volume|głośność
screen saver|wygaszacz ekranu
`},
{ id: "x3-outdoors", t: "W parku, na wsi i na plaży", d: "Piknik, posąg, leżak, zamek z piasku.", k: "v", i: `
picnic|piknik
picnic blanket|koc piknikowy
duck pond|staw z kaczkami
flower bed|klomb
statue|posąg
jogger|biegacz
dog walker|osoba wyprowadzająca psa
cyclist|rowerzysta
Keep off the grass|Nie deptać trawników
No dogs allowed|Zakaz wprowadzania psów
farmhouse|dom w gospodarstwie
cottage|domek na wsi
wood|lasek
footpath|ścieżka dla pieszych
fresh air|świeże powietrze
barbecue|grill
hammock|hamak
bird feeder|karmnik
molehill|kopiec kreta
wildflowers|polne kwiaty
sandcastle|zamek z piasku
seashell|muszelka
sunshade|parasol plażowy
deckchair|leżak
ice cream van|furgonetka z lodami
`},
{ id: "x3-signs", t: "Napisy i znaki", d: "Wyjście, nieczynne, świeżo malowane.", k: "v", ex: CHOICE, i: `
Exit|Wyjście
Entrance|Wejście
Push|Pchać
Pull|Ciągnąć
Closed|Zamknięte
Out of order|Nieczynne (awaria)
No smoking|Zakaz palenia
No entry|Zakaz wstępu
No parking|Zakaz parkowania
Wet paint|Świeżo malowane
Mind the gap|Uwaga na szczelinę przy peronie
Mind the step|Uwaga, stopień
Danger|Niebezpieczeństwo
Toilets|Toalety
Ladies|Toaleta damska
Gents|Toaleta męska
Staff only|Tylko dla personelu
Sold out|Wyprzedane
Fragile|Ostrożnie, kruche
Keep left|Trzymaj się lewej strony
Please queue here|Proszę ustawić się w kolejce tutaj
Lost property|Biuro rzeczy znalezionych
Cash only|Tylko gotówka
Slow down|Zwolnij
Beware of the dog|Uwaga, zły pies
`},
{ id: "x3-family3", t: "Rodzina 3", d: "Prababcia, szwagier, chrzestny, nazwisko.", k: "v", i: `
great-grandmother|prababcia
great-grandfather|pradziadek
grandparents|dziadkowie
grandchildren|wnuki
twin brother|brat bliźniak
twin sister|siostra bliźniaczka
older brother|starszy brat
younger sister|młodsza siostra
half-brother|brat przyrodni
stepsister|przybrana siostra
father-in-law|teść
brother-in-law|szwagier
sister-in-law|szwagierka
godmother|matka chrzestna
godfather|ojciec chrzestny
family tree|drzewo genealogiczne
surname|nazwisko
first name|imię
nickname|przezwisko
maiden name|nazwisko panieńskie
related to|spokrewniony z
adopt|adoptować
foster family|rodzina zastępcza
single parent|samotny rodzic
extended family|dalsza rodzina
`},
{ id: "x3-howfeel", t: "Jak się czujesz?", d: "Tak sobie, spieszę się, szybkiego powrotu do zdrowia!", k: "v", ex: CHOICE, i: `
I'm fine, thanks.|Dobrze, dziękuję.
Not bad.|Nieźle.
So-so.|Tak sobie.
I'm a bit tired.|Jestem trochę zmęczony.
I'm really happy.|Jestem naprawdę szczęśliwy.
I feel sick.|Niedobrze mi.
I've got a cold.|Jestem przeziębiony.
I'm so bored.|Strasznie się nudzę.
I'm worried about it.|Martwię się tym.
I'm scared.|Boję się.
I'm in a hurry.|Spieszę się.
I'm late.|Jestem spóźniony.
I'm lost.|Zgubiłem się.
I'm busy right now.|Jestem teraz zajęty.
I'm not sure.|Nie jestem pewny.
What's wrong?|Co się stało?
What's the matter?|O co chodzi?
Are you all right?|Wszystko w porządku?
Don't worry.|Nie martw się.
Take care!|Uważaj na siebie!
Get well soon!|Szybkiego powrotu do zdrowia!
Cheer up!|Rozchmurz się!
Calm down.|Uspokój się.
Good for you!|Gratuluję!
What a pity!|Jaka szkoda!
`}
]);
ADD("s4", [
{ id: "x4-holidayact", t: "Co robimy na wakacjach?", d: "go sightseeing, go camping, buy souvenirs…", k: "v", i: `
go sightseeing|zwiedzać
go camping|jechać pod namiot
go skiing|jeździć na nartach
go swimming|iść popływać
go fishing|iść na ryby
go hiking|chodzić po górach
go cycling|jeździć na rowerze
go shopping|iść na zakupy
go dancing|iść potańczyć
go sailing|pływać żaglówką
go horse riding|jeździć konno
go ice skating|jeździć na łyżwach
go on a trip|jechać na wycieczkę
go abroad|wyjechać za granicę
go to the beach|iść na plażę
stay in a hotel|mieszkać w hotelu
rent a flat|wynająć mieszkanie
take a tour|pójść na zwiedzanie z przewodnikiem
visit a museum|zwiedzić muzeum
buy souvenirs|kupować pamiątki
send postcards|wysyłać pocztówki
try local food|próbować lokalnego jedzenia
relax on the beach|odpoczywać na plaży
pack your suitcase|spakować walizkę
book a flight|zarezerwować lot
`},
{ id: "x4-schoolverbs", t: "Szkoła: czynności", d: "Uczyć się na pamięć, wagarować, zdać celująco.", k: "v", i: `
learn by heart|uczyć się na pamięć
do a test|pisać test
get a good mark|dostać dobrą ocenę
make notes|robić notatki
hand in homework|oddać pracę domową
copy|przepisywać
cheat|ściągać (oszukiwać)
be absent|być nieobecnym
be late for school|spóźnić się do szkoły
skip a class|opuścić lekcję
raise your hand|podnieść rękę
ask a question|zadać pytanie
give a presentation|wygłosić prezentację
work in groups|pracować w grupach
write an essay|napisać wypracowanie
solve a problem|rozwiązać problem
look up a word|sprawdzić słowo
study for an exam|uczyć się do egzaminu
pass with flying colours|zdać celująco
repeat a year|powtarzać klasę
go to university|iść na studia
get a scholarship|dostać stypendium
school trip|wycieczka szkolna
school report|świadectwo szkolne
break time|przerwa między lekcjami
`},
{ id: "x4-containers", t: "Opakowania i ilości", d: "Słoik miodu, kiść bananów, tuzin jajek.", k: "v", i: `
a bag of sugar|torebka cukru
a box of chocolates|bombonierka
a carton of milk|karton mleka
a jar of honey|słoik miodu
a tube of toothpaste|tubka pasty do zębów
a bunch of flowers|bukiet kwiatów
a bunch of bananas|kiść bananów
a head of lettuce|główka sałaty
a slice of pizza|kawałek pizzy
a piece of paper|kartka papieru
a pair of shoes|para butów
a pair of jeans|para dżinsów
a bowl of soup|miska zupy
a glass of milk|szklanka mleka
a mug of coffee|kubek kawy
a spoonful of sugar|łyżka cukru
a drop of water|kropla wody
a kilo of apples|kilogram jabłek
a litre of water/a liter of water|litr wody
a dozen eggs|tuzin jajek
a tin of tomatoes/a can of tomatoes|puszka pomidorów
a roll of toilet paper|rolka papieru toaletowego
a packet of biscuits|paczka herbatników
a pot of tea|dzbanek herbaty
a piece of advice|jedna rada
`},
{ id: "x4-train", t: "Na dworcu i w pociągu", d: "Kasa biletowa, miejscówka, przedział.", k: "v", i: `
railway station/train station|dworzec kolejowy
ticket office|kasa biletowa
ticket machine|biletomat
departures board|tablica odjazdów
track|tor
delayed|opóźniony
cancelled/canceled|odwołany
change trains|przesiadać się
catch a train|zdążyć na pociąg
miss a train|spóźnić się na pociąg
get on the train|wsiąść do pociągu
get off the train|wysiąść z pociągu
seat reservation|miejscówka
first class|pierwsza klasa
second class|druga klasa
dining car|wagon restauracyjny
sleeper train|pociąg sypialny
compartment|przedział
express train|pociąg ekspresowy
local train|pociąg osobowy
next stop|następny przystanek
terminus|stacja końcowa
waiting room|poczekalnia
ticket inspection|kontrola biletów
luggage trolley|wózek bagażowy
`},
{ id: "x4-places-desc", t: "Opis miejsc", d: "Ruchliwa ulica, ślepa uliczka, kurort.", k: "v", i: `
busy street|ruchliwa ulica
quiet neighbourhood/quiet neighborhood|cicha okolica
historic centre/historic center|zabytkowe centrum
modern building|nowoczesny budynek
narrow street|wąska uliczka
wide avenue|szeroka aleja
crowded beach|zatłoczona plaża
beautiful view|piękny widok
lively area|ożywiona okolica
safe area|bezpieczna okolica
dangerous district|niebezpieczna dzielnica
industrial town|miasto przemysłowe
seaside resort|kurort nadmorski
ski resort|ośrodek narciarski
capital city|stolica
small village|mała wioska
old town|stare miasto
market square|rynek (plac)
shopping street|ulica handlowa
main road|główna droga
side street|boczna uliczka
dead end|ślepa uliczka
green area|teren zielony
car-free zone|strefa bez samochodów
tourist trap|pułapka na turystów
`},
{ id: "x4-verbnoun", t: "Czasownik + rzeczownik", d: "Wydawać pieniądze, opowiedzieć dowcip, uprawiać sport.", k: "v", i: `
keep fit|dbać o kondycję
go on a diet|przejść na dietę
spend money|wydawać pieniądze
earn money|zarabiać pieniądze
borrow money|pożyczać pieniądze (od kogoś)
lend money|pożyczać pieniądze (komuś)
waste money|marnować pieniądze
change money|wymieniać pieniądze
pay by card|płacić kartą
pay in cash|płacić gotówką
tell a joke|opowiedzieć dowcip
tell a story|opowiedzieć historię
say goodbye|pożegnać się
say sorry|przeprosić
say thank you|podziękować
make a cake|upiec ciasto
make a list|zrobić listę
make a plan|zrobić plan
make dinner|zrobić obiad
do the cooking|zajmować się gotowaniem
do a course|robić kurs
do sport|uprawiać sport
have a bath|wykąpać się
have a chat|pogawędzić
have a dream|mieć sen
`},
{ id: "x4-ful-less", t: "Przymiotniki z -ful i -less", d: "Bezużyteczny, beznadziejny, bolesny, wierny.", k: "v", i: `
useless|bezużyteczny
harmless|nieszkodliwy
hopeful|pełen nadziei
hopeless|beznadziejny
painful|bolesny
painless|bezbolesny
colourful/colorful|kolorowy
powerful|potężny
powerless|bezsilny
thankful|wdzięczny
thoughtless|bezmyślny
meaningful|znaczący
meaningless|bez znaczenia
tasteless|bez smaku
tasteful|gustowny
endless|niekończący się
fearless|nieustraszony
restful|odprężający
sleepless|bezsenny
playful|figlarny
forgetful|zapominalski
doubtful|wątpliwy
faithful|wierny
skilful/skillful|zręczny
boastful|chełpliwy
`},
{ id: "x4-emergency", t: "Nagłe sytuacje", d: "Pomocy! Wezwij karetkę! Okradziono mnie.", k: "v", ex: CHOICE, i: `
Help!|Pomocy!
Call an ambulance!|Wezwij karetkę!
Call the police!|Wezwij policję!
Fire!|Pali się!
Watch out!/Look out!|Uważaj!
Stop, thief!|Łapać złodzieja!
I've been robbed.|Okradziono mnie.
I've lost my passport.|Zgubiłem paszport.
There's been an accident.|Zdarzył się wypadek.
Is anyone hurt?|Czy ktoś jest ranny?
I need a doctor.|Potrzebuję lekarza.
Where is the nearest hospital?|Gdzie jest najbliższy szpital?
I'm allergic to nuts.|Mam alergię na orzechy.
He's not breathing.|On nie oddycha.
Stay calm.|Zachowaj spokój.
It's an emergency.|To nagły wypadek.
My car has broken down.|Zepsuł mi się samochód.
I've locked myself out.|Zatrzasnąłem się na zewnątrz.
The lift is stuck.|Winda utknęła.
Can you help me, please?|Czy może mi pan pomóc?
fire exit|wyjście ewakuacyjne
first aid|pierwsza pomoc
emergency number|numer alarmowy
I feel dizzy.|Kręci mi się w głowie.
I've cut my finger.|Skaleczyłem się w palec.
`},
{ id: "x4-nouns-a2", t: "Rzeczowniki A2: różne", d: "Kawałek, część, rodzaj, głos, szczegół.", k: "v", i: `
piece|kawałek
part|część
top|wierzch
end|koniec
beginning|początek
pair|para
group|grupa
kind|rodzaj
type|typ
thing|rzecz
stuff|rzeczy (graty)
place|miejsce
number|liczba
voice|głos
sound|dźwięk
fact|fakt
rest|reszta (pozostała część)
joke|dowcip
visit|wizyta
row|rząd
list|lista
note|liścik
matter|sprawa
detail|szczegół
point|sens (punkt)
`},
{ id: "x4-phrasal-a2", t: "Phrasal verbs A2", d: "come in, hurry up, write down, move in…", k: "v", i: `
come in|wejść
stand up|wstać
go away|odejść
come on|no dalej
hurry up|pospieszyć się
write down|zapisać
put down|odłożyć
go back|wrócić
go up|wzrosnąć
go down|spaść (zmaleć)
slow down|zwolnić
speed up|przyspieszyć
clean up|posprzątać
wash up|pozmywać
run away|uciec
fall down|przewrócić się
come over|wpaść (z wizytą)
go on|kontynuować
hang out|spędzać czas (z kimś)
look around|rozejrzeć się
move in|wprowadzić się
move out|wyprowadzić się
stay up|nie kłaść się spać
lock up|zamknąć na klucz
turn round/turn around|odwrócić się
`}
]);
})();
