/* Etap 7 – słówka B2 (część 1). */
(function () {
var CHOICE = ["en2pl", "pl2en", "listen"];
ADD("s7", [
{ id: "x7-law", t: "Prawo i sąd", d: "Proces, werdykt, ława przysięgłych.", k: "v", i: `
legal|prawny
legislation|ustawodawstwo
ban|zakaz
prosecute|ścigać sądownie
defendant|oskarżony
prosecutor|prokurator
jury|ława przysięgłych
trial|proces sądowy
verdict|werdykt
acquit|uniewinnić
convict|skazać
appeal|apelacja
bail|kaucja za zwolnienie
testify|zeznawać
solicitor|radca prawny
barrister|adwokat
offence/offense|wykroczenie
legal advice|porada prawna
breach|naruszenie
comply with|przestrzegać (przepisów)
liable|odpowiedzialny prawnie
custody|areszt
community service|prace społeczne
parole|zwolnienie warunkowe
life sentence|dożywocie
`},
{ id: "x7-politics", t: "Polityka", d: "Kampania, koalicja, ambasada, sankcje.", k: "v", i: `
policy|polityka (strategia)
politics|polityka (dziedzina)
campaign|kampania
voter|wyborca
ballot|karta do głosowania
opposition|opozycja
coalition|koalicja
parliament|parlament
ministry|ministerstwo
spokesperson|rzecznik
reform|reforma
elect|wybierać (w wyborach)
scandal|skandal
diplomat|dyplomata
embassy|ambasada
treaty|traktat
sanctions|sankcje
negotiations|negocjacje
summit|szczyt (spotkanie)
independence|niepodległość
sovereignty|suwerenność
left-wing|lewicowy
right-wing|prawicowy
ally|sojusznik
polling station|lokal wyborczy
`},
{ id: "x7-economy", t: "Gospodarka", d: "Recesja, PKB, popyt i podaż.", k: "v", i: `
recession|recesja
economic growth|wzrost gospodarczy
GDP|PKB
interest rate|stopa procentowa
deflation|deflacja
unemployment rate|stopa bezrobocia
consumer|konsument
demand|popyt
supply|podaż
budget deficit|deficyt budżetowy
public debt|dług publiczny
taxpayer|podatnik
subsidy|dotacja
privatisation/privatization|prywatyzacja
monopoly|monopol
globalisation/globalization|globalizacja
wage gap|różnica płacowa
living standards|poziom życia
purchasing power|siła nabywcza
minimum wage|płaca minimalna
tax relief|ulga podatkowa
bankruptcy|bankructwo
prosperity|dobrobyt
shortage|niedobór
surplus|nadwyżka
`},
{ id: "x7-psychology", t: "Psychologia", d: "Poczucie własnej wartości, empatia, uprzedzenia.", k: "v", i: `
subconscious|podświadomość
perception|postrzeganie
emotion|emocja
self-esteem|poczucie własnej wartości
phobia|fobia
therapy|terapia
therapist|terapeuta
counselling/counseling|poradnictwo psychologiczne
anxiety disorder|zaburzenie lękowe
mood swings|wahania nastroju
empathy|empatia
resilience|odporność psychiczna
willpower|siła woli
instinct|instynkt
intuition|intuicja
stereotype|stereotyp
prejudice|uprzedzenie
introvert|introwertyk
extrovert|ekstrawertyk
insecurity|niepewność siebie
breakdown|załamanie nerwowe
mindset|sposób myślenia
mental illness|choroba psychiczna
panic attack|atak paniki
procrastination|odkładanie na później
`},
{ id: "x7-tech2", t: "Technologia 2", d: "Algorytm, szyfrowanie, usterka, dron.", k: "v", i: `
algorithm|algorytm
database|baza danych
encryption|szyfrowanie
cybersecurity|cyberbezpieczeństwo
malware|złośliwe oprogramowanie
cloud storage|przechowywanie w chmurze
bandwidth|przepustowość łącza
user interface|interfejs użytkownika
upgrade|ulepszenie (nowsza wersja)
glitch|usterka
bug|błąd w programie
troubleshoot|rozwiązywać problemy techniczne
compatible|kompatybilny
obsolete|przestarzały (wycofany)
cutting-edge|najnowocześniejszy
automation|automatyzacja
virtual reality|rzeczywistość wirtualna
drone|dron
3D printer|drukarka 3D
wearable technology|technologia ubieralna
tech-savvy|obeznany z technologią
digital|cyfrowy
keyboard shortcut|skrót klawiszowy
phishing|wyłudzanie danych
two-factor authentication|uwierzytelnianie dwuskładnikowe
`},
{ id: "x7-phrasal4", t: "Phrasal verbs 4", d: "figure out, end up, catch up on…", k: "v", i: `
account for|stanowić (wyjaśniać)
break into|włamać się do
brush up on|odświeżyć (wiedzę)
catch up on|nadrobić
come round|odzyskać przytomność
cut off|odciąć
do without|obyć się bez
drop by|wpaść (z wizytą)
end up|skończyć (wylądować)
fall apart|rozpaść się
figure out|rozgryźć
get across|przekazać (myśl)
get round to|znaleźć czas na
give away|rozdać
go off|wybuchnąć / zepsuć się
hand in|oddać (pracę)
look out|uważać
make up for|zrekompensować
opt out|wycofać się
pick up on|wychwycić
put down to|przypisywać czemuś
run into|wpaść na (kogoś)
stick to|trzymać się (planu)
talk into|namówić
turn into|zamienić się w
`},
{ id: "x7-collocations3", t: "Kolokacje B2", d: "take into account, meet a deadline…", k: "v", ex: CHOICE, i: `
bear in mind|mieć na uwadze
draw a conclusion|wyciągnąć wniosek
meet a deadline|zdążyć z terminem
raise awareness|zwiększać świadomość
reach an agreement|osiągnąć porozumienie
pose a threat|stanowić zagrożenie
take into account|brać pod uwagę
make an exception|zrobić wyjątek
pay a compliment|powiedzieć komplement
run the risk|ryzykować
set an example|dawać przykład
jump to conclusions|wyciągać pochopne wnioski
come to terms with|pogodzić się z
make ends meet|wiązać koniec z końcem
keep a low profile|nie rzucać się w oczy
catch someone's eye|przyciągnąć czyjś wzrok
lose track of time|stracić poczucie czasu
give someone the benefit of the doubt|dać komuś kredyt zaufania
draw attention to|zwracać uwagę na
hold a meeting|zorganizować zebranie
deliver a speech|wygłosić przemówienie
face a problem|stawić czoła problemowi
fulfil a dream/fulfill a dream|spełnić marzenie
gain experience|zdobywać doświadczenie
strike a balance|znaleźć równowagę
`},
{ id: "x7-judging", t: "Oceny i recenzje", d: "Przezabawny, przereklamowany, nużący.", k: "v", i: `
admirable|godny podziwu
appalling|skandaliczny
astonishing|zdumiewający
bizarre|dziwaczny
compelling|przekonujący
dreadful|okropny
exceptional|wyjątkowy
flawless|bezbłędny
hilarious|przezabawny
innovative|innowacyjny
mediocre|przeciętny
memorable|niezapomniany
monotonous|monotonny
overrated|przereklamowany
predictable|przewidywalny
remarkable|niezwykły
stunning|olśniewający
superb|znakomity
tedious|nużący
thought-provoking|skłaniający do myślenia
touching|wzruszający
underrated|niedoceniany
unbearable|nie do zniesienia
gripping|trzymający w napięciu
far-fetched|naciągany
`},
{ id: "x7-senses", t: "Zmysły i odczucia", d: "Wzrok, słuch, zdrętwiały, gęsia skórka.", k: "v", i: `
sense|zmysł
sight|wzrok
hearing|słuch
smell|węch
touch|dotyk
deaf|głuchy
blind|niewidomy
short-sighted|krótkowzroczny
numb|zdrętwiały
ache|tępy ból
sore|obolały
faint|zemdleć
exhausted|wyczerpany
drowsy|senny
thirst|pragnienie
goosebumps|gęsia skórka
sweat|pot
breath|oddech
heartbeat|bicie serca
pulse|puls
reflex|odruch
balance|równowaga
hiccups|czkawka
blurred vision|niewyraźne widzenie
sensation|odczucie
`},
{ id: "x7-business-phrases", t: "Angielski w pracy", d: "Zwroty na spotkania i do e-maili.", k: "v", ex: CHOICE, i: `
Let's get down to business.|Przejdźmy do rzeczy.
Could you elaborate on that?|Czy mógłbyś to rozwinąć?
I'll get back to you.|Wrócę do ciebie z odpowiedzią.
Let's touch base next week.|Skontaktujmy się w przyszłym tygodniu.
We're on the same page.|Rozumiemy się (mamy to samo zdanie).
Let's keep this brief.|Streszczajmy się.
I'm afraid I can't make it.|Obawiam się, że nie dam rady przyjść.
Could we postpone the meeting?|Czy moglibyśmy przełożyć spotkanie?
Thank you for your patience.|Dziękuję za cierpliwość.
Please let me know if you have any questions.|Daj znać, jeśli masz pytania.
I'd like to follow up on our conversation.|Chciałbym wrócić do naszej rozmowy.
Sorry for the inconvenience.|Przepraszamy za niedogodności.
Let's call it a day.|Kończymy na dziś.
That's a fair point.|To słuszna uwaga.
Can we move on to the next item?|Przejdźmy do następnego punktu.
I'm out of the office until Monday.|Jestem poza biurem do poniedziałku.
Please see the attached file.|Proszę zobaczyć załączony plik.
Kind regards|Z poważaniem
Dear Sir or Madam|Szanowni Państwo
I look forward to working with you.|Cieszę się na współpracę.
Could you run that by me again?|Czy mógłbyś mi to jeszcze raz wyjaśnić?
It's not my area of expertise.|To nie moja specjalność.
Let's brainstorm some ideas.|Zróbmy burzę mózgów.
We need to cut costs.|Musimy obciąć koszty.
Who is in charge of this project?|Kto odpowiada za ten projekt?
`},
{ id: "x7-religion", t: "Religia i tradycje", d: "Wiara, modlitwa, zwyczaj, pielgrzymka.", k: "v", i: `
religion|religia
faith|wiara
mosque|meczet
synagogue|synagoga
temple|świątynia
priest|ksiądz
monk|mnich
nun|zakonnica
prayer|modlitwa
sin|grzech
heaven|niebo (raj)
hell|piekło
soul|dusza
God|Bóg
Bible|Biblia
Christian|chrześcijanin
Catholic|katolik
Muslim|muzułmanin
Jewish|żydowski
Buddhist|buddysta
atheist|ateista
tradition|tradycja
custom|zwyczaj
ritual|rytuał
pilgrimage|pielgrzymka
`},
{ id: "x7-history", t: "Historia", d: "Imperium, rycerz, bitwa, średniowiecze.", k: "v", i: `
empire|imperium
emperor|cesarz
kingdom|królestwo
throne|tron
crown|korona
knight|rycerz
battle|bitwa
army|armia
soldier|żołnierz
weapon|broń
sword|miecz
shield|tarcza
invasion|inwazja
occupation|okupacja
revolution|rewolucja
civil war|wojna domowa
slavery|niewolnictwo
colony|kolonia
Middle Ages|średniowiecze
medieval|średniowieczny
ruins|ruiny
archaeologist|archeolog
treasure|skarb
historian|historyk
victory|zwycięstwo
`},
{ id: "x7-negative", t: "Charakter: wady", d: "Chciwy, próżny, wścibski, wybredny.", k: "v", i: `
greedy|chciwy
stingy|skąpy
vain|próżny
spoilt/spoiled|rozpieszczony
manipulative|manipulujący
hypocritical|hipokrytyczny
cowardly|tchórzliwy
clumsy|niezdarny
gullible|łatwowierny
grumpy|zrzędliwy
ungrateful|niewdzięczny
unreliable|niesolidny
impulsive|impulsywny
possessive|zaborczy
obsessive|obsesyjny
pushy|nachalny
fussy|wybredny
snobbish|snobistyczny
nosy|wścibski
sarcastic|sarkastyczny
tactless|nietaktowny
rebellious|buntowniczy
irritable|drażliwy
competitive|nastawiony na rywalizację
cynical|cyniczny
`},
{ id: "x7-nouns2", t: "Rzeczowniki B2 – wartości", d: "Ambicja, kompromis, wysiłek, mądrość.", k: "v", i: `
ambition|ambicja
authority|autorytet
burden|ciężar
commitment|zaangażowanie
compromise|kompromis
contribution|wkład
dilemma|dylemat
dispute|spór
effort|wysiłek
expectation|oczekiwanie
hardship|niedostatek
initiative|inicjatywa
integrity|prawość
motive|motyw (pobudka)
necessity|konieczność
patience|cierpliwość
potential|potencjał
reputation|reputacja
sacrifice|poświęcenie
setback|niepowodzenie
threat|zagrożenie
tolerance|tolerancja
virtue|cnota
wisdom|mądrość
privilege|przywilej
`},
{ id: "x7-flying", t: "Na lotnisku", d: "Odprawa, bagaż podręczny, przesiadka.", k: "v", i: `
airline|linia lotnicza
baggage allowance|limit bagażu
hand luggage/carry-on|bagaż podręczny
check-in desk|stanowisko odprawy
security check|kontrola bezpieczeństwa
gate|wyjście (do samolotu)
boarding|wejście na pokład
cabin crew|personel pokładowy
flight attendant|steward / stewardesa
turbulence|turbulencje
emergency exit|wyjście awaryjne
layover|międzylądowanie
direct flight|lot bezpośredni
connecting flight|lot z przesiadką
baggage claim|odbiór bagażu
customs officer|celnik
overbooked|z nadkompletem rezerwacji
cancellation|odwołanie (lotu)
compensation|odszkodowanie
low-cost airline|tania linia lotnicza
frequent flyer|często latający pasażer
time zone|strefa czasowa
red-eye flight|nocny lot
arrivals hall|hala przylotów
take-off|start samolotu
`},
{ id: "x7-idioms2", t: "Idiomy 2", d: "Kropla w morzu, o wilku mowa, na dłuższą metę.", k: "v", ex: CHOICE, i: `
a drop in the ocean|kropla w morzu
against the clock|w wyścigu z czasem
be in the same boat|jechać na tym samym wózku
burn the midnight oil|pracować do późnej nocy
cut corners|iść na skróty (kosztem jakości)
get the ball rolling|rozkręcić sprawę
hit the road|ruszać w drogę
in the long run|na dłuższą metę
jump on the bandwagon|przyłączyć się do mody
kill two birds with one stone|upiec dwie pieczenie na jednym ogniu
to make a long story short|krótko mówiąc
miss the boat|przegapić okazję
no pain, no gain|bez pracy nie ma kołaczy
off the top of my head|tak na szybko (z głowy)
play it by ear|zobaczyć, jak wyjdzie (improwizować)
rule of thumb|praktyczna zasada
speak of the devil|o wilku mowa
take it with a pinch of salt|podchodzić do czegoś z rezerwą
the tip of the iceberg|wierzchołek góry lodowej
through thick and thin|na dobre i na złe
time flies|czas leci
under pressure|pod presją
up in the air|wciąż niepewny
word of mouth|poczta pantoflowa
a far cry from|zupełnie co innego niż
`}
]);
})();
