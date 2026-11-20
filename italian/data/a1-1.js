/* Etap 1 – pierwsze słowa (A1). Rzeczowniki z rodzajnikiem: od razu uczymy rodzaju. */
ADD("s1", [
{ id: "x1-colors", t: "Kolory", d: "Rosso, blu, verde… Kolor zwykle stoi po rzeczowniku: una macchina rossa.", k: "v", i: `
rosso|czerwony|🔴
blu|niebieski (granatowy)|🔵
azzurro|błękitny
verde|zielony|🟢
giallo|żółty|🟡
arancione|pomarańczowy|🟠
viola|fioletowy|🟣
nero|czarny|⚫
bianco|biały|⚪
grigio|szary
marrone|brązowy|🟤
rosa|różowy|🩷
celeste|jasnoniebieski
verde scuro|ciemnozielony
dorato|złoty (kolor)
argento|srebrny (kolor)
una macchina rossa|czerwony samochód|🚗
una casa bianca|biały dom|🏠
il cielo azzurro|błękitne niebo
Di che colore è?|Jakiego to jest koloru?
Il mio colore preferito è il verde.|Mój ulubiony kolor to zielony.
`},
{ id: "x1-family", t: "Rodzina", d: "Il padre, la madre… i genitori = rodzice!", k: "v", i: `
la famiglia|rodzina|👪
il padre|ojciec|👨
la madre|matka|👩
i genitori|rodzice
il figlio|syn|👦
la figlia|córka|👧
i figli|dzieci (synowie i córki)
il fratello|brat
la sorella|siostra
il nonno|dziadek|👴
la nonna|babcia|👵
i nonni|dziadkowie
lo zio|wujek
la zia|ciocia
il cugino|kuzyn
la cugina|kuzynka
il marito|mąż
la moglie|żona
il ragazzo|chłopak (też: partner)
la ragazza|dziewczyna (też: partnerka)
il nipote|wnuk / bratanek, siostrzeniec
il bambino|dziecko (chłopiec)|👶
papà|tata
mamma|mama
`},
{ id: "x1-animals", t: "Zwierzęta", d: "Il cane, il gatto, il cavallo…", k: "v", i: `
il cane|pies|🐕
il gatto|kot|🐈
il cavallo|koń|🐎
la mucca|krowa|🐄
il maiale|świnia|🐖
la pecora|owca|🐑
la gallina|kura|🐔
l'uccello|ptak|🐦
il pesce|ryba|🐟
il topo|mysz|🐭
il coniglio|królik|🐇
l'orso|niedźwiedź|🐻
il lupo|wilk|🐺
la volpe|lis|🦊
il leone|lew|🦁
la tigre|tygrys|🐯
l'elefante|słoń|🐘
la scimmia|małpa|🐒
il serpente|wąż|🐍
la tartaruga|żółw|🐢
la rana|żaba|🐸
l'anatra|kaczka|🦆
l'ape|pszczoła|🐝
la farfalla|motyl|🦋
il toro|byk|🐂
`},
{ id: "x1-food", t: "Jedzenie", d: "Il pane, il formaggio, il riso… i włoskie klasyki.", k: "v", i: `
il pane|chleb|🍞
il formaggio|ser|🧀
il burro|masło|🧈
l'uovo|jajko|🥚
il prosciutto|szynka|🥓
il riso|ryż|🍚
la pasta|makaron|🍝
la carne|mięso|🥩
il pollo|kurczak|🍗
il pesce|ryba (jedzenie)|🐟
la zuppa|zupa|🍲
l'insalata|sałatka|🥗
il panino|kanapka (bułka)|🥪
la pizza|pizza|🍕
il risotto|risotto
la lasagna|lasagne
lo zucchero|cukier
il sale|sól|🧂
l'olio|oliwa (olej)
il pepe|pieprz
la torta|ciasto (tort)|🎂
il biscotto|ciastko|🍪
il cioccolato|czekolada|🍫
il gelato|lody|🍦
la colazione|śniadanie|🍳
`},
{ id: "x1-fruitveg", t: "Owoce i warzywa", d: "La mela, la pera, la carota…", k: "v", i: `
la frutta|owoce|🍎
la mela|jabłko|🍎
la pera|gruszka|🍐
l'arancia|pomarańcza|🍊
la banana|banan|🍌
la fragola|truskawka|🍓
l'uva|winogrona|🍇
la ciliegia|wiśnia / czereśnia|🍒
la pesca|brzoskwinia|🍑
il limone|cytryna|🍋
l'anguria|arbuz|🍉
l'ananas|ananas|🍍
la verdura|warzywa|🥦
la patata|ziemniak|🥔
il pomodoro|pomidor|🍅
la carota|marchew|🥕
la cipolla|cebula|🧅
l'aglio|czosnek|🧄
l'insalata|sałata|🥬
il cetriolo|ogórek|🥒
il peperone|papryka|🫑
i fagioli|fasola|🫘
i piselli|groszek
il fungo|grzyb|🍄
la zucchina|cukinia
`},
{ id: "x1-drinks", t: "Napoje", d: "L'acqua, il caffè, il succo… i jak zamówić kawę po włosku.", k: "v", i: `
l'acqua|woda|💧
l'acqua minerale|woda mineralna
l'acqua frizzante|woda gazowana
l'acqua naturale|woda niegazowana
il caffè|kawa (espresso)|☕
il cappuccino|cappuccino
il latte|mleko|🥛
il tè|herbata|🍵
il succo|sok|🧃
il succo d'arancia|sok pomarańczowy
la birra|piwo|🍺
il vino|wino|🍷
il vino rosso|czerwone wino
il vino bianco|białe wino
la bibita|napój (słodki)|🥤
la cioccolata calda|gorąca czekolada
il ghiaccio|lód (kostki)|🧊
un bicchiere d'acqua|szklanka wody
una tazza di tè|filiżanka herbaty
una bottiglia di vino|butelka wina|🍾
Ho sete.|Chce mi się pić.
Un caffè, per favore.|Poproszę kawę.
`},
{ id: "x1-body", t: "Ciało", d: "La testa, il braccio… i nieregularne: le braccia, le mani.", k: "v", i: `
il corpo|ciało
la testa|głowa
i capelli|włosy|💇
la faccia|twarz
l'occhio|oko|👁️
gli occhi|oczy|👀
l'orecchio|ucho|👂
il naso|nos|👃
la bocca|usta|👄
il dente|ząb|🦷
la lingua|język (w ustach)|👅
il collo|szyja
la spalla|ramię (bark)
il braccio|ręka (od ramienia)|💪
le braccia|ręce (ramiona)
la mano|dłoń (ręka)|✋
le mani|dłonie (ręce)
il dito|palec
la gamba|noga|🦵
il ginocchio|kolano
il piede|stopa|🦶
la pancia|brzuch
la schiena|plecy
il cuore|serce|❤️
`},
{ id: "x1-home", t: "Dom", d: "La casa, la cucina, il bagno…", k: "v", i: `
la casa|dom|🏠
l'appartamento|mieszkanie
la stanza|pokój
la camera da letto|sypialnia|🛏️
la cucina|kuchnia
il bagno|łazienka|🛁
il soggiorno|salon
la porta|drzwi|🚪
la finestra|okno|🪟
il tavolo|stół
la sedia|krzesło|🪑
il letto|łóżko|🛏️
il divano|kanapa|🛋️
l'armadio|szafa
la lampada|lampa|💡
il frigorifero|lodówka
la doccia|prysznic|🚿
le scale|schody
il giardino|ogród|🌷
il balcone|balkon
il tetto|dach
la chiave|klucz|🔑
il piano|piętro
`},
{ id: "x1-clothes", t: "Ubrania", d: "La maglietta, i pantaloni, le scarpe…", k: "v", i: `
i vestiti|ubrania
la maglietta|koszulka (T-shirt)|👕
la camicia|koszula
i pantaloni|spodnie|👖
i jeans|dżinsy
la gonna|spódnica
il vestito|sukienka (też: garnitur)|👗
la giacca|kurtka (marynarka)|🧥
il cappotto|płaszcz
il maglione|sweter
le scarpe|buty|👟
gli stivali|kozaki|👢
i calzini|skarpetki|🧦
il cappello|kapelusz|🎩
la sciarpa|szalik|🧣
i guanti|rękawiczki|🧤
la borsa|torebka (torba)|👜
la cintura|pasek
gli occhiali|okulary|👓
il costume da bagno|strój kąpielowy|🩱
il pigiama|piżama
Che taglia porti?|Jaki nosisz rozmiar?
`},
{ id: "x1-school", t: "Szkoła", d: "La scuola, il libro, la penna…", k: "v", i: `
la scuola|szkoła|🏫
l'aula|klasa (sala)
la classe|klasa (uczniowie)
il professore|nauczyciel|👨‍🏫
la professoressa|nauczycielka|👩‍🏫
lo studente|uczeń (student)
la studentessa|uczennica (studentka)
il libro|książka|📖
il quaderno|zeszyt|📓
la penna|długopis|🖊️
la matita|ołówek|✏️
la gomma|gumka
lo zaino|plecak|🎒
la lavagna|tablica
il banco|ławka szkolna
la lezione|lekcja
i compiti|zadanie domowe
l'esame|egzamin
il voto|ocena
la domanda|pytanie
la risposta|odpowiedź
il dizionario|słownik
la pagina|strona
`},
{ id: "x1-city", t: "Miasto", d: "La città, la strada, la piazza…", k: "v", i: `
la città|miasto|🏙️
il paese|miasteczko (też: kraj)
la strada|ulica (droga)
la via|ulica (w adresie)
la piazza|plac
il negozio|sklep|🏪
il supermercato|supermarket|🛒
il mercato|targ
la banca|bank|🏦
la farmacia|apteka|💊
l'ospedale|szpital|🏥
la chiesa|kościół|⛪
il museo|muzeum|🏛️
il parco|park|🌳
il bar|bar (kawiarnia)|☕
il ristorante|restauracja|🍽️
l'albergo|hotel|🏨
la stazione|dworzec|🚉
la posta|poczta|📮
il ponte|most|🌉
il centro|centrum
l'edificio|budynek
il teatro|teatr|🎭
`},
{ id: "x1-transport", t: "Transport", d: "In macchina, in treno, a piedi.", k: "v", i: `
la macchina|samochód|🚗
l'autobus|autobus|🚌
il treno|pociąg|🚆
l'aereo|samolot|✈️
la bicicletta|rower|🚲
la moto|motocykl|🏍️
il tram|tramwaj|🚋
la metropolitana|metro|🚇
il taxi|taksówka|🚕
la nave|statek|🚢
la barca|łódź|⛵
il camion|ciężarówka|🚚
il biglietto|bilet|🎫
la fermata|przystanek|🚏
l'aeroporto|lotnisko|🛫
il porto|port
in macchina|samochodem
in treno|pociągiem
in aereo|samolotem
a piedi|pieszo|🚶
il viaggio|podróż
la valigia|walizka|🧳
`},
{ id: "x1-days", t: "Dni tygodnia", d: "Lunedì, martedì… – z małej litery. Il lunedì = w poniedziałki.", k: "v", i: `
lunedì|poniedziałek
martedì|wtorek
mercoledì|środa
giovedì|czwartek
venerdì|piątek
sabato|sobota
domenica|niedziela
il giorno|dzień
la settimana|tydzień
il fine settimana|weekend
oggi|dzisiaj
domani|jutro
ieri|wczoraj
dopodomani|pojutrze
la mattina|rano (poranek)|🌅
il pomeriggio|popołudnie
la sera|wieczór|🌆
la notte|noc|🌙
il lunedì|w poniedziałki
Che giorno è oggi?|Jaki dziś dzień?
Oggi è venerdì.|Dziś jest piątek.
`},
{ id: "x1-months", t: "Miesiące i pory roku", d: "Gennaio, febbraio… – też z małej litery.", k: "v", i: `
gennaio|styczeń
febbraio|luty
marzo|marzec
aprile|kwiecień
maggio|maj
giugno|czerwiec
luglio|lipiec
agosto|sierpień
settembre|wrzesień
ottobre|październik
novembre|listopad
dicembre|grudzień
il mese|miesiąc
l'anno|rok
la primavera|wiosna|🌸
l'estate|lato|☀️
l'autunno|jesień|🍂
l'inverno|zima|❄️
a maggio|w maju
in estate|latem
il compleanno|urodziny|🎂
`},
{ id: "x1-weather", t: "Pogoda", d: "Fa caldo, fa freddo, piove, nevica.", k: "v", i: `
il tempo|pogoda (też: czas)
Che tempo fa?|Jaka jest pogoda?
Fa caldo.|Jest gorąco.|🥵
Fa freddo.|Jest zimno.|🥶
Fa bel tempo.|Jest ładna pogoda.
Fa brutto tempo.|Jest brzydka pogoda.
C'è il sole.|Świeci słońce.|☀️
C'è vento.|Wieje wiatr.|💨
Piove.|Pada deszcz.|🌧️
Nevica.|Pada śnieg.|🌨️
È nuvoloso.|Jest pochmurno.|☁️
il sole|słońce|☀️
la pioggia|deszcz|🌧️
la neve|śnieg|❄️
il vento|wiatr|💨
la nuvola|chmura|☁️
il temporale|burza|⛈️
la nebbia|mgła|🌫️
la temperatura|temperatura|🌡️
l'ombrello|parasol|☂️
`},
{ id: "x1-jobs", t: "Zawody", d: "Il medico, l'insegnante… Faccio il medico = jestem lekarzem.", k: "v", i: `
il lavoro|praca
il medico|lekarz|👨‍⚕️
l'infermiere|pielęgniarz
l'infermiera|pielęgniarka
l'insegnante|nauczyciel(ka)
il cuoco|kucharz|👨‍🍳
il cameriere|kelner
la cameriera|kelnerka
l'avvocato|prawnik (adwokat)
l'ingegnere|inżynier
il commesso|sprzedawca (w sklepie)
il poliziotto|policjant|👮
il pompiere|strażak|🧑‍🚒
il contadino|rolnik|🧑‍🌾
l'autista|kierowca
il meccanico|mechanik
il parrucchiere|fryzjer
l'architetto|architekt
il giornalista|dziennikarz
il programmatore|programista
l'impiegato|urzędnik (pracownik biurowy)
Che lavoro fai?|Czym się zajmujesz?
Faccio il medico.|Jestem lekarzem.
`}
]);
