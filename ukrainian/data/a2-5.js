/* Etapy 2–3 – więcej podstawowych słówek (A1–A2). */
(function () {
var CHOICE = ["en2pl", "pl2en", "listen"];
ADD("s2", [
{ id: "x2-verbs1", t: "Czasowniki 1", d: "Być, mieć, robić, iść, jeść, pić…", k: "v", i: `
бути|być
мати|mieć
робити|robić
йти|iść
їсти|jeść
пити|pić
спати|spać
читати|czytać
писати|pisać
говорити|mówić
слухати|słuchać
дивитися|patrzeć (oglądać)
бачити|widzieć
знати|wiedzieć (znać)
хотіти|chcieć
могти|móc
любити|kochać (lubić)
жити|mieszkać (żyć)
працювати|pracować
вчитися|uczyć się
грати|grać
купувати|kupować
давати|dawać
брати|brać
відкривати|otwierać
`},
{ id: "x2-verbs2", t: "Czasowniki 2", d: "Siedzieć, stać, czekać, szukać, pamiętać…", k: "v", i: `
сидіти|siedzieć
стояти|stać
лежати|leżeć
бігати|biegać
плавати|pływać
співати|śpiewać
танцювати|tańczyć
готувати|gotować (przygotowywać)
мити|myć
прати|prać
прибирати|sprzątać
відпочивати|odpoczywać
чекати|czekać
шукати|szukać
знаходити|znajdować
питати|pytać
відповідати|odpowiadać
думати|myśleć
розуміти|rozumieć
пам'ятати|pamiętać
забувати|zapominać
починати|zaczynać
закінчувати|kończyć
приходити|przychodzić
повертатися|wracać
`},
{ id: "x2-opposites", t: "Przymiotniki: przeciwieństwa", d: "Duży – mały, nowy – stary, ciepły – zimny.", k: "v", i: `
великий|duży
малий|mały
новий|nowy
старий|stary
молодий|młody
добрий|dobry
поганий|zły (kiepski)
гарячий|gorący
холодний|zimny
теплий|ciepły
довгий|długi
короткий|krótki
високий|wysoki
низький|niski
швидкий|szybki
повільний|wolny (powolny)
легкий|lekki (łatwy)
важкий|ciężki (trudny)
дорогий|drogi
дешевий|tani
чистий|czysty
брудний|brudny
повний|pełny
порожній|pusty
мокрий|mokry
`},
{ id: "x2-jobs", t: "Zawody", d: "Lekarz, kierowca, kucharz, fryzjer.", k: "v", i: `
лікар|lekarz
вчитель|nauczyciel
водій|kierowca
кухар|kucharz
продавець|sprzedawca
інженер|inżynier
адвокат|adwokat
медсестра|pielęgniarka
поліцейський|policjant
пожежник|strażak
фермер|rolnik
будівельник|budowlaniec
програміст|programista
бухгалтер|księgowy
перукар|fryzjer
офіціант|kelner
листоноша|listonosz
журналіст|dziennikarz
актор|aktor
співак|piosenkarz
художник|malarz (artysta)
музикант|muzyk
пілот|pilot
механік|mechanik
прибиральниця|sprzątaczka
`},
{ id: "x2-things", t: "Rzeczy w domu", d: "Szafa, lustro, ręcznik, czajnik.", k: "v", i: `
шафа|szafa
комод|komoda
крісло|fotel
диван|kanapa
полиця|półka
дзеркало|lustro
лампа|lampa
килим|dywan
штори|zasłony
подушка|poduszka
простирадло|prześcieradło
рушник|ręcznik
мило|mydło
зубна щітка|szczoteczka do zębów
зубна паста|pasta do zębów
шампунь|szampon
пральна машина|pralka
посудомийна машина|zmywarka
мікрохвильовка|mikrofalówka
чайник|czajnik
праска|żelazko
телевізор|telewizor
вентилятор|wentylator
годинник|zegar (zegarek)
ключ|klucz
`},
{ id: "x2-sport", t: "Sport", d: "Piłka, drużyna, trener, remis.", k: "v", i: `
футбол|piłka nożna
баскетбол|koszykówka
волейбол|siatkówka
теніс|tenis
плавання|pływanie
біг|bieganie
велосипед|rower
лижі|narty
ковзани|łyżwy
гімнастика|gimnastyka
бокс|boks
м'яч|piłka
команда|drużyna
гравець|zawodnik (gracz)
тренер|trener
стадіон|stadion
басейн|basen
спортзал|siłownia (sala gimnastyczna)
матч|mecz
гол|gol
перемогти|wygrać
програти|przegrać
нічия|remis
чемпіон|mistrz
змагання|zawody
`},
{ id: "x2-questions", t: "Pierwsze pytania", d: "Jak masz na imię? Skąd jesteś? Która godzina?", k: "v", ex: CHOICE, i: `
Як тебе звати?|Jak masz na imię?
Скільки тобі років?|Ile masz lat?
Звідки ти?|Skąd jesteś?
Де ти живеш?|Gdzie mieszkasz?
Ким ти працюєш?|Kim jesteś z zawodu?
Котра година?|Która godzina?
Що це?|Co to jest?
Хто це?|Kto to jest?
Скільки це коштує?|Ile to kosztuje?
Де туалет?|Gdzie jest toaleta?
Ти говориш польською?|Mówisz po polsku?
Ти розумієш?|Rozumiesz?
Що ти робиш?|Co robisz?
Куди ти йдеш?|Dokąd idziesz?
Коли ти прийдеш?|Kiedy przyjdziesz?
Чому ти сумний?|Dlaczego jesteś smutny?
Ти голодний?|Jesteś głodny?
Хочеш кави?|Chcesz kawy?
Можна?|Można?
Яка сьогодні погода?|Jaka jest dziś pogoda?
Який сьогодні день?|Jaki jest dziś dzień?
У тебе є брат?|Masz brata?
Ти любиш музику?|Lubisz muzykę?
Де ти працюєш?|Gdzie pracujesz?
Як це сказати українською?|Jak to powiedzieć po ukraińsku?
`},
{ id: "x2-freetime", t: "Czas wolny", d: "Gitara, koncert, grać w szachy, spacerować.", k: "v", i: `
музика|muzyka
пісня|piosenka
гітара|gitara
піаніно|pianino
скрипка|skrzypce
барабан|bęben
концерт|koncert
фільм|film
гра|gra
фотографія|zdjęcie (fotografia)
малювати|rysować (malować)
гуляти|spacerować
подорожувати|podróżować
рибалити|łowić ryby
грати в шахи|grać w szachy
слухати музику|słuchać muzyki
дивитися телевізор|oglądać telewizję
кататися на велосипеді|jeździć na rowerze
кататися на лижах|jeździć na nartach
ходити в кіно|chodzić do kina
зустрічатися з друзями|spotykać się z przyjaciółmi
вихідні|weekend
відпустка|urlop
хобі|hobby
вільний час|wolny czas
`}
]);
ADD("s3", [
{ id: "x3-weather", t: "Pogoda", d: "Pada deszcz, wieje wiatr, jest ślisko.", k: "v", i: `
погода|pogoda
сонце|słońce
сонячно|słonecznie
дощ|deszcz
іде дощ|pada deszcz
сніг|śnieg
іде сніг|pada śnieg
вітер|wiatr
вітряно|wietrznie
хмара|chmura
хмарно|pochmurno
туман|mgła
гроза|burza
блискавка|błyskawica
грім|grzmot
веселка|tęcza
тепло|ciepło
холодно|zimno
спекотно|upalnie
мороз|mróz
прогноз погоди|prognoza pogody
температура|temperatura
градус|stopień
мокро|mokro
слизько|ślisko
`},
{ id: "x3-howfeel", t: "Jak się czujesz?", d: "Jest mi zimno, nudzę się, jestem zajęty.", k: "v", ex: CHOICE, i: `
Мені холодно.|Jest mi zimno.
Мені жарко.|Jest mi gorąco.
Мені сумно.|Jest mi smutno.
Мені весело.|Jest mi wesoło.
Мені нудно.|Nudzę się.
Мені страшно.|Boję się.
Мені соромно.|Wstyd mi.
Мені погано.|Źle się czuję.
Мені вже краще.|Już mi lepiej.
Я втомився.|Jestem zmęczony.
Я голодний.|Jestem głodny.
Я хочу пити.|Chce mi się pić.
Я хворий.|Jestem chory.
Я щасливий.|Jestem szczęśliwy.
Я злий.|Jestem zły.
Я хвилююся.|Denerwuję się (martwię się).
Я радий.|Cieszę się.
Я спокійний.|Jestem spokojny.
Я зайнятий.|Jestem zajęty.
Я вільний.|Jestem wolny.
Я готовий.|Jestem gotowy.
Я згоден.|Zgadzam się.
Я впевнений.|Jestem pewny.
Я здивований.|Jestem zdziwiony.
Я закоханий.|Jestem zakochany.
`},
{ id: "x3-routine", t: "Codzienne czynności", d: "Budzić się, myć zęby, spieszyć się.", k: "v", i: `
прокидатися|budzić się
вставати|wstawać
вмиватися|myć się (twarz)
чистити зуби|myć zęby
одягатися|ubierać się
снідати|jeść śniadanie
обідати|jeść obiad
вечеряти|jeść kolację
їхати на роботу|jechać do pracy
йти до школи|iść do szkoły
повертатися додому|wracać do domu
лягати спати|kłaść się spać
засинати|zasypiać
приймати душ|brać prysznic
голитися|golić się
фарбуватися|malować się
зачісуватися|czesać się
поспішати|spieszyć się
запізнюватися|spóźniać się
дзвонити|dzwonić
писати повідомлення|pisać wiadomość
перевіряти пошту|sprawdzać pocztę
гуляти з собакою|wyprowadzać psa
ходити по магазинах|chodzić po sklepach
прибирати в кімнаті|sprzątać pokój
`},
{ id: "x3-dishes", t: "Potrawy", d: "Kasza, gołąbki, naleśniki, musztarda.", k: "v", i: `
каша|kasza (owsianka)
суп|zupa
борщ|barszcz
вареники|pierogi
голубці|gołąbki
котлета|kotlet
ковбаса|kiełbasa
сосиска|parówka
шинка|szynka
сало|słonina
яєчня|jajecznica
млинці|naleśniki
сирники|placuszki z twarogu
пиріжок|pierożek (bułeczka z nadzieniem)
салат|sałatka
бутерброд|kanapka
локшина|makaron (kluski)
рис|ryż
гречка|kasza gryczana
картопляне пюре|puree ziemniaczane
соус|sos
кетчуп|keczup
гірчиця|musztarda
морозиво|lody
печиво|ciastka
`},
{ id: "x3-taste", t: "Smaki", d: "Słodki, kwaśny, ostry, soczysty.", k: "v", i: `
солодкий|słodki
солоний|słony
гіркий|gorzki
кислий|kwaśny
гострий|ostry
смачний|smaczny
несмачний|niesmaczny
свіжий|świeży
зіпсований|zepsuty
сирий|surowy
варений|gotowany
смажений|smażony
печений|pieczony
копчений|wędzony
жирний|tłusty
ситний|sycący
хрусткий|chrupiący
м'який|miękki
соковитий|soczysty
стиглий|dojrzały
домашній|domowy
гарячий суп|gorąca zupa
холодне пиво|zimne piwo
теплий чай|ciepła herbata
гірка кава|gorzka kawa
`},
{ id: "x3-where", t: "Gdzie to jest?", d: "Na stole, pod stołem, obok okna, naprzeciwko.", k: "v", ex: CHOICE, i: `
на столі|na stole
під столом|pod stołem
над столом|nad stołem
біля вікна|przy oknie
між книжками|między książkami
за дверима|za drzwiami
перед будинком|przed domem
у шафі|w szafie
поруч зі мною|obok mnie
навпроти банку|naprzeciwko banku
ліворуч|po lewej
праворуч|po prawej
прямо|prosto
нагорі|na górze
внизу|na dole
всередині|w środku
надворі|na dworze
поблизу|w pobliżu
далеко від центру|daleko od centrum
посередині|pośrodku
у кутку|w kącie
на розі|na rogu
з іншого боку|z drugiej strony
позаду|z tyłu
попереду|z przodu
`},
{ id: "x3-shops", t: "Sklepy i usługi", d: "Piekarnia, apteka, szewc, stacja benzynowa.", k: "v", i: `
продуктовий магазин|sklep spożywczy
пекарня|piekarnia
м'ясний магазин|sklep mięsny
книгарня|księgarnia
квітковий магазин|kwiaciarnia
взуттєвий магазин|sklep obuwniczy
магазин одягу|sklep odzieżowy
ювелірний магазин|jubiler
перукарня|fryzjer (salon)
хімчистка|pralnia chemiczna
пральня|pralnia
ремонт взуття|szewc (naprawa butów)
ательє|krawiec (pracownia krawiecka)
оптика|optyk
зоомагазин|sklep zoologiczny
канцтовари|sklep papierniczy
кіоск|kiosk
торговий центр|centrum handlowe
ринок|targ
супермаркет|supermarket
автосервіс|warsztat samochodowy
заправка|stacja benzynowa
банкомат|bankomat
аптека|apteka
пошта|poczta
`},
{ id: "x3-family2", t: "Rodzina 2", d: "Kuzyn, teściowa, synowa, bliźniaki.", k: "v", i: `
батьки|rodzice
чоловік|mąż
дружина|żona
онук|wnuk
онука|wnuczka
дядько|wujek
тітка|ciocia
двоюрідний брат|kuzyn
двоюрідна сестра|kuzynka
племінник|bratanek (siostrzeniec)
племінниця|bratanica (siostrzenica)
тесть|teść (ojciec żony)
теща|teściowa (matka żony)
свекор|teść (ojciec męża)
свекруха|teściowa (matka męża)
зять|zięć
невістка|synowa
хрещений батько|ojciec chrzestny
хрещена мати|matka chrzestna
близнюки|bliźniaki
родичі|krewni
одружений|żonaty
заміжня|zamężna
неодружений|nieżonaty (kawaler)
прабабуся|prababcia
`}
]);
})();
