/* Etap 7 – więcej słownictwa i zdań B2. */
(function () {
var SENT = ["order", "pl2en", "order", "en2pl", "listen"];
var CHOICE = ["en2pl", "pl2en", "listen"];
ADD("s7", [
{ id: "x7-prefix3", t: "Przedrostki: брати, класти, нести", d: "Прибрати, перекласти, скласти, винести…", k: "v", i: `
вибрати|wybrać
забрати|zabrać
прибрати|posprzątać
зібрати|zebrać
розібрати|rozebrać (rozmontować)
набрати номер|wybrać numer
підібрати|podnieść (dobrać)
відібрати|odebrać (zabrać komuś)
поставити|postawić
переставити|przestawić
виставити|wystawić
представити|przedstawić
покласти|położyć
перекласти|przetłumaczyć (przełożyć)
скласти іспит|zdać egzamin
відкласти|odłożyć
розкласти|rozłożyć
укласти угоду|zawrzeć umowę
винести|wynieść
принести|przynieść
занести|zanieść
перенести|przenieść
віднести|odnieść
завести машину|uruchomić samochód
привести|przyprowadzić
`},
{ id: "x7-healthy", t: "Zdrowy styl życia", d: "Odżywianie, węglowodany, schudnąć, odporność.", k: "v", i: `
здоровий спосіб життя|zdrowy tryb życia
харчування|odżywianie
дієта|dieta
вітаміни|witaminy
білки|białka
вуглеводи|węglowodany
жири|tłuszcze
калорії|kalorie
фізичні вправи|ćwiczenia fizyczne
зарядка|gimnastyka poranna
тренування|trening
режим дня|plan dnia
шкідливі звички|złe nawyki
кинути палити|rzucić palenie
алкоголь|alkohol
схуднути|schudnąć
набрати вагу|przytyć
медичний огляд|badanie lekarskie
профілактика|profilaktyka
імунітет|odporność
загартовуватися|hartować się
відпочинок|odpoczynek
ходьба|chodzenie (spacery)
повноцінний сон|zdrowy sen
зневоднення|odwodnienie
`},
{ id: "x7-traffic", t: "Ruch drogowy", d: "Korek, objazd, rondo, pas ruchu, laweta.", k: "v", i: `
затор|korek
об'їзд|objazd
світлофор|sygnalizacja świetlna
пішохідний перехід|przejście dla pieszych
тротуар|chodnik
проїжджа частина|jezdnia
перехрестя|skrzyżowanie
кільце|rondo
смуга руху|pas ruchu
розворот|zawracanie
проїзний квиток|bilet okresowy
валідатор|kasownik
маршрутка|marszrutka (bus)
тролейбус|trolejbus
трамвай|tramwaj
електричка|pociąg podmiejski
автомагістраль|autostrada
платна дорога|droga płatna
евакуатор|laweta (holownik)
пішохід|pieszy
велосипедист|rowerzysta
дорожній знак|znak drogowy
зелена хвиля|zielona fala
година пік|godzina szczytu
каршеринг|carsharing
`},
{ id: "x7-speaking", t: "Czasowniki mówienia", d: "Ogłaszać, przyznawać się, namawiać, plotkować.", k: "v", i: `
повідомляти|informować
оголошувати|ogłaszać
заявляти|oświadczać
зізнаватися|przyznawać się
натякати|robić aluzje
перебивати|przerywać (komuś)
умовляти|namawiać
відмовляти|odradzać
наполягати|nalegać
домовлятися|umawiać się (dogadywać się)
лаяти|besztać
хвалитися|chwalić się
брехати|kłamać
пліткувати|plotkować
жартувати|żartować
бурмотіти|mamrotać
заїкатися|jąkać się
вимовляти|wymawiać
перепитувати|dopytywać
уточнювати|doprecyzowywać
підтверджувати|potwierdzać
цитувати|cytować
коментувати|komentować
звертатися|zwracać się
висловлюватися|wypowiadać się
`},
{ id: "x7-money", t: "Finanse osobiste", d: "Kieszonkowe, raty, przedpłata, zwrot pieniędzy.", k: "v", i: `
кишенькові гроші|kieszonkowe
заощаджувати|oszczędzać
відкладати гроші|odkładać pieniądze
марнувати гроші|trwonić pieniądze
позичати|pożyczać
повертати борг|spłacać dług
бути винним гроші|być winnym pieniądze
розрахуватися|rozliczyć się
чайові|napiwek
знижка|zniżka
розпродаж|wyprzedaż
акція|promocja
переплатити|przepłacić
недорого|niedrogo
задорого|za drogo
вигідна ціна|korzystna cena
розстрочка|raty
передоплата|przedpłata
гарантія|gwarancja
повернення коштів|zwrot pieniędzy
кешбек|cashback
сімейний бюджет|budżet domowy
витрати на життя|koszty utrzymania
зарплата на руки|pensja na rękę
жити від зарплати до зарплати|żyć od pierwszego do pierwszego
`},
{ id: "x7-places", t: "Opis miejsc", d: "Malowniczy, przytulny, zaniedbany, przestronny.", k: "v", i: `
мальовничий|malowniczy
затишний|przytulny
галасливий|hałaśliwy
людний|zatłoczony (ludny)
безлюдний|bezludny
занедбаний|zaniedbany
доглянутий|zadbany
просторий|przestronny
тісний|ciasny
історичний|historyczny
старовинний|zabytkowy (dawny)
величний|majestatyczny
похмурий|ponury
яскравий|jaskrawy (jasny)
барвистий|kolorowy
провінційний|prowincjonalny
туристичний|turystyczny
розкішний|luksusowy
скромний|skromny
зручно розташований|dogodnie położony
віддалений|odległy
гостинний|gościnny
чарівний|uroczy
модний район|modna dzielnica
спальний район|dzielnica sypialniana
`},
{ id: "x7-expressions", t: "Wyrażenia z мати, брати, робити", d: "Mieć na myśli, udawać, podawać w wątpliwość.", k: "v", ex: CHOICE, i: `
мати на увазі|mieć na myśli
мати справу з|mieć do czynienia z
мати успіх|mieć powodzenie
мати право|mieć prawo
мати можливість|mieć możliwość
мати сенс|mieć sens
мати вигляд|wyglądać
брати приклад з|brać przykład z
брати на себе відповідальність|brać na siebie odpowiedzialność
брати слово|zabierać głos
брати гору|brać górę
давати згоду|wyrażać zgodę
давати слово|dawać słowo
давати знати|dawać znać
давати привід|dawać powód
робити вигляд|udawać
робити помилку|popełniać błąd
робити зауваження|zwracać komuś uwagę
робити крок|robić krok
ставити під сумнів|podawać w wątpliwość
ставити за мету|stawiać sobie za cel
ставити умову|stawiać warunek
іти на ризик|podejmować ryzyko
іти назустріч|wychodzić naprzeciw
сходити з розуму|tracić rozum
`},
{ id: "x7-weather", t: "Pogoda i klimat B2", d: "Mżawka, gołoledź, zamieć, odwilż, sopel.", k: "v", i: `
злива|ulewa
мряка|mżawka
ожеледиця|gołoledź
заметіль|zamieć
іній|szron
роса|rosa
град|grad
спека|upał
відлига|odwilż
похолодання|ochłodzenie
потепління|ocieplenie
атмосферний тиск|ciśnienie atmosferyczne
вологість|wilgotność
опади|opady
хмарність|zachmurzenie
прояснення|przejaśnienie
буря|burza (sztorm)
ураган|huragan
смерч|trąba powietrzna
землетрус|trzęsienie ziemi
снігопад|opady śniegu
замет|zaspa
калюжа|kałuża
бурулька|sopel
сутінки|zmierzch
`},
{ id: "x7-workverbs", t: "Praca: czasowniki", d: "Zatrudnić, uzgadniać, zatwierdzać, pracować na zmiany.", k: "v", i: `
найняти|zatrudnić
керувати|kierować
координувати|koordynować
контролювати|kontrolować
звітувати|składać sprawozdanie
доповідати|referować (meldować)
узгоджувати|uzgadniać
затверджувати|zatwierdzać
виконувати|wykonywać
доручати|zlecać (powierzać)
розподіляти|rozdzielać
навчати персонал|szkolić personel
співпрацювати|współpracować
вести переговори|prowadzić negocjacje
укладати угоду|zawierać umowę
виставляти рахунок|wystawiać fakturę
обслуговувати клієнтів|obsługiwać klientów
працювати позмінно|pracować na zmiany
брати лікарняний|brać zwolnienie lekarskie
подавати у відставку|składać dymisję
працевлаштуватися|znaleźć zatrudnienie
стажуватися|odbywać staż
підвищувати кваліфікацію|podnosić kwalifikacje
виходити на пенсію|przechodzić na emeryturę
брати відпустку|brać urlop
`},
{ id: "x7-motion-fill", t: "Przedrostki w zdaniach", d: "Вийшов, зайшов, під'їхав, переїхали…", k: "f", i: `
Він {вийшов} з кімнати.|Wyszedł z pokoju.|зайшов,підійшов|Ви- = wy- (na zewnątrz).
Я {зайшов} до аптеки по ліки.|Wstąpiłem do apteki po leki.|вийшов,перейшов|За- = wstąpić gdzieś po drodze.
Обережно {перейди} дорогу.|Ostrożnie przejdź przez ulicę.|підійди,зайди|Пере- = przez, na drugą stronę.
{Підійди} до мене, будь ласка.|Podejdź do mnie, proszę.|Відійди,Перейди
{Відійдіть} від краю платформи!|Odsuńcie się od krawędzi peronu!|Підійдіть,Зайдіть
Ми {дійшли} до вершини за три години.|Doszliśmy na szczyt w trzy godziny.|зійшли,вийшли
Ми {зійшли} з гори до річки.|Zeszliśmy z góry do rzeki.|дійшли,прийшли
Гості вже {розійшлися}.|Goście już się rozeszli.|зійшлися,дійшли
Я {приїхав} до Києва вчора.|Przyjechałem do Kijowa wczoraj.|поїхав,виїхав
Вона {поїхала} до Польщі на тиждень.|Pojechała do Polski na tydzień.|приїхала,заїхала
Потяг {від'їхав} від станції.|Pociąg odjechał od stacji.|під'їхав,заїхав
Таксі {під'їхало} до будинку.|Taksówka podjechała pod dom.|від'їхало,виїхало
Ми {переїхали} в нову квартиру.|Przeprowadziliśmy się do nowego mieszkania.|приїхали,доїхали
Ми {заїхали} на заправку.|Zajechaliśmy na stację benzynową.|виїхали,переїхали
Машина {виїхала} з гаража.|Samochód wyjechał z garażu.|в'їхала,заїхала
Ми ледве {доїхали} до готелю.|Ledwo dojechaliśmy do hotelu.|переїхали,виїхали
Автобус {проїхав} повз нашу зупинку.|Autobus przejechał obok naszego przystanku.|переїхав,заїхав
Він {приніс} мені квіти.|Przyniósł mi kwiaty.|відніс,виніс
{Винеси}, будь ласка, сміття.|Wynieś, proszę, śmieci.|Принеси,Віднеси
Я {відніс} книжки до бібліотеки.|Odniosłem książki do biblioteki.|приніс,виніс
`},
{ id: "x7-sent-story", t: "Zdania: opowiadanie", d: "Pewnego razu… Nagle… Okazało się, że…", k: "o", ex: SENT, i: `
Одного разу зі мною сталася цікава історія.|Pewnego razu przydarzyła mi się ciekawa historia.
Це було кілька років тому.|To było kilka lat temu.
Спочатку все йшло добре.|Na początku wszystko szło dobrze.
Раптом пролунав дзвінок.|Nagle rozległ się dzwonek.
Я не повірив своїм очам.|Nie uwierzyłem własnym oczom.
Виявилося, що це мій старий друг.|Okazało się, że to mój stary przyjaciel.
Ми не бачилися з дитинства.|Nie widzieliśmy się od dzieciństwa.
Ми проговорили до самого ранку.|Przegadaliśmy do samego rana.
Тим часом за вікном почався дощ.|Tymczasem za oknem zaczął padać deszcz.
Згодом я дізнався правду.|Później poznałem prawdę.
Я досі пам'ятаю той день.|Do dziś pamiętam ten dzień.
Наприкінці всі сміялися.|Na koniec wszyscy się śmiali.
Того вечора я зрозумів щось важливе.|Tego wieczoru zrozumiałem coś ważnego.
Ніхто не очікував такого кінця.|Nikt nie spodziewał się takiego zakończenia.
Після цього все змінилося.|Po tym wszystko się zmieniło.
Я ледве стримав сміх.|Ledwo powstrzymałem śmiech.
Ми заблукали й опинилися в лісі.|Zgubiliśmy się i znaleźliśmy się w lesie.
Мені пощастило, що я встиг.|Miałem szczęście, że zdążyłem.
На щастя, все закінчилося добре.|Na szczęście wszystko dobrze się skończyło.
Відтоді ми найкращі друзі.|Od tamtej pory jesteśmy najlepszymi przyjaciółmi.
`},
{ id: "x7-sent-health", t: "Zdania: zdrowie", d: "Rzuciłem palenie, trzymam dietę, dbaj o siebie.", k: "o", ex: SENT, i: `
Я намагаюся більше рухатися.|Staram się więcej ruszać.
Лікар заборонив мені солодке.|Lekarz zabronił mi słodyczy.
Я кинув курити два роки тому.|Rzuciłem palenie dwa lata temu.
Мені треба здати аналіз крові.|Muszę zrobić badanie krwi.
Я записався в спортзал.|Zapisałem się na siłownię.
Вона дотримується суворої дієти.|Ona trzyma się ścisłej diety.
Я сплю щонайменше вісім годин.|Śpię co najmniej osiem godzin.
У мене алергія на пилок.|Mam alergię na pyłki.
Він швидко одужав після операції.|Szybko wyzdrowiał po operacji.
Я щоранку роблю зарядку.|Każdego ranka robię gimnastykę.
Стрес шкодить здоров'ю.|Stres szkodzi zdrowiu.
Не забувай пити воду.|Nie zapominaj pić wody.
Я намагаюся їсти менше цукру.|Staram się jeść mniej cukru.
Свіже повітря корисне для всіх.|Świeże powietrze jest dobre dla wszystkich.
Мені призначили курс антибіотиків.|Przepisano mi kurację antybiotykową.
Я пройшов медичний огляд.|Przeszedłem badania lekarskie.
Він схуд на десять кілограмів.|Schudł dziesięć kilogramów.
Ходьба — найкращі ліки.|Chodzenie to najlepsze lekarstwo.
Бережи себе!|Dbaj o siebie!
Здоров'я дорожче за гроші.|Zdrowie jest cenniejsze niż pieniądze.
`}
]);
})();
