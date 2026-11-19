/* Etap 5 – słówka B1 (część 1). */
(function () {
var CHOICE = ["en2pl", "pl2en", "listen"];
ADD("s5", [
{ id: "x5-jobhunt", t: "Szukanie pracy", d: "Оголошення, вакансія, мотиваційний лист.", k: "v", i: `
оголошення про роботу|ogłoszenie o pracę
подавати заявку|składać podanie
анкета|formularz
кандидат|kandydat
кваліфікація|kwalifikacje
мотиваційний лист|list motywacyjny
рекомендація|referencje
наймати|zatrudniać
звільняти|zwalniać (z pracy)
звільнитися|odejść z pracy
зміна|zmiana (w pracy)
ставка|stawka
премія|premia
персонал|personel
стажист|stażysta
стажування|staż
підприємець|przedsiębiorca
фрилансер|freelancer
головний офіс|centrala firmy
робоче місце|miejsce pracy
робочий час|godziny pracy
декретна відпустка|urlop macierzyński
пропозиція роботи|oferta pracy
командна робота|praca zespołowa
вакансія|wakat (wolne stanowisko)
`},
{ id: "x5-university", t: "Na studiach", d: "Семінар, сесія, залік, студентський квиток.", k: "v", i: `
семінар|seminarium
курсова робота|praca semestralna
дипломна робота|praca dyplomowa
науковий керівник|promotor
випускник|absolwent
бакалавр|licencjat
магістр|magister
аспірантура|studia doktoranckie
кафедра|katedra (zakład)
факультет|wydział
декан|dziekan
ректор|rektor
залікова книжка|indeks
сесія|sesja egzaminacyjna
залік|zaliczenie
вступати|zdawać na studia
відрахувати|skreślić z listy studentów
навчальний рік|rok akademicki
конспект|notatki z wykładu
бібліотекар|bibliotekarz
дослідження|badania
наука|nauka
науковець|naukowiec
студентський квиток|legitymacja studencka
лаборант|laborant
`},
{ id: "x5-tech", t: "Technologia", d: "Пристрій, дані, сповіщення, флешка.", k: "v", i: `
пристрій|urządzenie
ґаджет|gadżet
смартфон|smartfon
програмне забезпечення|oprogramowanie
хакер|haker
дані|dane
конфіденційність|prywatność
онлайн|online
бездротовий|bezprzewodowy
заряджати|ładować
встановлювати|instalować
зависати|zawieszać się
резервна копія|kopia zapasowa
гортати|przewijać
публікувати|publikować
поширювати|udostępniać
підписник|obserwujący
профіль|profil
сповіщення|powiadomienie
знімок екрана|zrzut ekranu
штучний інтелект|sztuczna inteligencja
винахід|wynalazek
вірус|wirus
принтер|drukarka
флешка|pendrive
`},
{ id: "x5-crime", t: "Przestępczość", d: "Злодій, суд, свідок, хабар.", k: "v", i: `
злочин|przestępstwo
злочинець|przestępca
злодій|złodziej
крадіжка|kradzież
пограбування|napad rabunkowy
вбивство|morderstwo
вбивця|morderca
заарештувати|aresztować
суд|sąd
суддя|sędzia
адвокат|adwokat
свідок|świadek
жертва|ofiara
докази|dowody
невинний|niewinny
покарання|kara
порушувати закон|łamać prawo
шахрайство|oszustwo
підозрюваний|podejrzany
вирок|wyrok
в'язень|więzień
поліцейський|policjant
слідство|śledztwo
кишеньковий злодій|kieszonkowiec
хабар|łapówka
`},
{ id: "x5-society", t: "Społeczeństwo i państwo", d: "Uwaga: уряд to rząd, a urząd to установа!", k: "v", i: `
суспільство|społeczeństwo
уряд|rząd
політик|polityk
вибори|wybory
голосувати|głosować
президент|prezydent
прем'єр-міністр|premier
закон|ustawa (prawo)
громадянин|obywatel
права|prawa
безробіття|bezrobocie
іммігрант|imigrant
біженець|uchodźca
населення|ludność
бездомний|bezdomny
благодійність|dobroczynność
волонтер|wolontariusz
демонстрація|demonstracja
рівність|równość
дискримінація|dyskryminacja
демократія|demokracja
партія|partia
держава|państwo
Європейський Союз|Unia Europejska
громадська думка|opinia publiczna
`},
{ id: "x5-wildlife", t: "Zwierzęta i przyroda", d: "Гніздо, хутро, хижак, ссавець.", k: "v", i: `
дика природа|dzika przyroda
середовище існування|siedlisko
гніздо|gniazdo
хутро|futro
пір'я|pióra
кіготь|pazur
дзьоб|dziób
лапа|łapa
ріг|róg (zwierzęcia)
полювати|polować
здобич|zdobycz
хижак|drapieżnik
домашня тварина|zwierzę domowe
ветеринар|weterynarz
ферма|farma
клітка|klatka
гавкати|szczekać
ревіти|ryczeć
вимерлий|wymarły
ссавець|ssak
плазун|gad
стадо|stado
зграя|wataha (klucz ptaków)
впадати в сплячку|zapadać w sen zimowy
приручений|oswojony
`},
{ id: "x5-taste", t: "Smaki i jedzenie", d: "Хрусткий, соковитий, черствий, прісний.", k: "v", i: `
смак|smak
хрусткий|chrupiący
соковитий|soczysty
вершковий|śmietankowy
жирний|tłusty
прісний|mdły (bez smaku)
м'який|miękki
черствий|czerstwy
стиглий|dojrzały
гнилий|zgniły
домашня їжа|domowe jedzenie
заморожений|mrożony
консервований|konserwowy
органічний|ekologiczny (bio)
порція|porcja
перекус|przekąska
залишки їжі|resztki jedzenia
веганський|wegański
без глютену|bezglutenowy
апетит|apetyt
апетитний|apetyczny
переварений|rozgotowany
недоварений|niedogotowany
морепродукти|owoce morza
приправа|przyprawa
`},
{ id: "x5-tools", t: "Narzędzia i naprawy", d: "Uwaga: замок (zamek w drzwiach) i за́мок (budowla) różnią się akcentem.", k: "v", i: `
інструмент|narzędzie
молоток|młotek
цвях|gwóźdź
шуруп|wkręt
викрутка|śrubokręt
дриль|wiertarka
пилка|piła
драбина|drabina
фарба|farba
скотч|taśma klejąca
рулетка|miarka
плоскогубці|kombinerki
гайковий ключ|klucz (do nakrętek)
ящик для інструментів|skrzynka na narzędzia
ремонт|naprawa (remont)
зламаний|zepsuty
протікання|przeciek
сантехнік|hydraulik
електрик|elektryk
шпалери|tapeta
замок|zamek w drzwiach
лампочка|żarówka
мотузка|sznurek
дріт|drut
майструвати|majsterkować
`},
{ id: "x5-moves", t: "Ruchy i gesty", d: "Моргати, кивати, позіхати, шепотіти.", k: "v", i: `
моргати|mrugać
кивати|kiwać głową
махати|machać
нахилятися|pochylać się
потягуватися|przeciągać się
позіхати|ziewać
зітхати|wzdychać
шепотіти|szeptać
верещати|wrzeszczeć
хмуритися|marszczyć brwi
підморгувати|puszczać oko
дихати|oddychać
ковтати|połykać
жувати|żuć
лизати|lizać
копати|kopać
бити|bić
обнімати|obejmować
плескати в долоні|klaskać
тремтіти|drżeć
сідати|siadać
присідати|kucać
повзати|pełzać
ходити навшпиньки|chodzić na palcach
кульгати|kuleć
`},
{ id: "x5-opinion-adj", t: "Oceny: świetny czy okropny?", d: "Дивовижний, огидний, захопливий, моторошний.", k: "v", i: `
дивовижний|niesamowity
блискучий|błyskotliwy
відмінний|doskonały
фантастичний|fantastyczny
страшний|straszny
огидний|obrzydliwy
безглуздий|bezsensowny
захопливий|fascynujący
вражаючий|imponujący
дратівливий|irytujący
розчаровуючий|rozczarowujący
несподіваний|nieoczekiwany
шокуючий|szokujący
моторошний|upiorny
розслаблюючий|relaksujący
виснажливий|wyczerpujący
кумедний|zabawny
заплутаний|zagmatwany
незручний|niezręczny
надихаючий|inspirujący
видатний|wybitny
посередній|przeciętny
приголомшливий|oszałamiający
чарівний|czarujący
банальний|banalny
`},
{ id: "x5-prefix-ne", t: "Przedrostek не-", d: "Нещасний, несправедливий, незаконний…", k: "v", i: `
нещасний|nieszczęśliwy
неприємний|nieprzyjemny
несправедливий|niesprawiedliwy
незвичайний|niezwykły
невідомий|nieznany
навряд чи|raczej nie
нездатний|niezdolny
непривітний|nieprzyjazny
нечесний|nieuczciwy
не погоджуватися|nie zgadzać się
не любити|nie lubić
зникати|znikać
недолік|wada
неввічливий|nieuprzejmy
незаконний|nielegalny
безвідповідальний|nieodpowiedzialny
неофіційний|nieoficjalny
некоректний|niepoprawny
невпевнений|niepewny
неправильно зрозуміти|źle zrozumieć
недостатній|niewystarczający
необов'язковий|nieobowiązkowy
небажаний|niepożądany
непотрібний|niepotrzebny
безкорисливий|bezinteresowny
`},
{ id: "x5-eshop", t: "Zakupy w internecie", d: "Доставка, відгук, промокод, поштомат.", k: "v", i: `
доставка|dostawa
безкоштовна доставка|darmowa dostawa
відправлення|wysyłka
номер відстеження|numer przesyłki
оформлення замовлення|finalizacja zamówienia
оплата|płatność
в наявності|dostępny
немає в наявності|niedostępny
повернення|zwrot
бракований|wadliwy
гарантія|gwarancja
відгук|opinia (recenzja)
рейтинг|ocena
інтернет-магазин|sklep internetowy
покупка|zakup
вживаний|używany
новенький|nowiutki
аукціон|aukcja
скарга|skarga
служба підтримки|obsługa klienta
накладений платіж|płatność przy odbiorze
купон|kupon
промокод|kod rabatowy
список бажань|lista życzeń
поштомат|paczkomat
`},
{ id: "x5-sport2", t: "Sport 2", d: "Забити гол, нічия, вболівальник, кубок.", k: "v", i: `
забити гол|strzelić gola
нічия|remis
арбітр|sędzia sportowy
суперник|przeciwnik
чемпіон|mistrz
чемпіонат|mistrzostwa
турнір|turniej
ліга|liga
змагання|zawody
спортсмен|sportowiec
тренування|trening
травма|kontuzja
розминка|rozgrzewka
форма|forma (kondycja)
марафон|maraton
фініш|meta
рекорд|rekord
вболівальник|kibic
золота медаль|złoty medal
додатковий час|dogrywka
пенальті|rzut karny
тайм|połowa meczu
кубок|puchar
тренер|trener
команда|drużyna
`},
{ id: "x5-opinions", t: "Wyrażanie opinii", d: "На мою думку, я не згоден, у жодному разі!", k: "v", ex: CHOICE, i: `
На мою думку…|Moim zdaniem…
Я так думаю.|Tak myślę.
Не думаю.|Nie sądzę.
Я з тобою згоден.|Zgadzam się z tobą.
Я не згоден.|Nie zgadzam się.
Це правда.|To prawda.
Ти маєш рацію.|Masz rację.
Я не впевнений.|Nie jestem pewien.
Це залежить.|To zależy.
Саме так!|Właśnie tak!
Я розумію, що ти маєш на увазі.|Rozumiem, co masz na myśli.
Що ти про це думаєш?|Co o tym myślisz?
Наскільки я знаю…|O ile wiem…
Чесно кажучи…|Szczerze mówiąc…
З одного боку…|Z jednej strony…
З іншого боку…|Z drugiej strony…
Я б не хотів.|Wolałbym nie.
У жодному разі!|W żadnym wypadku!
Гаразд.|W porządku.
Слушне зауваження.|Słuszna uwaga.
Вирішуй сам.|Decyduj sam.
Терпіти цього не можу.|Nie znoszę tego.
Мені все одно.|Wszystko mi jedno.
Неважливо.|Nieważne.
Я теж.|Ja też.
`},
{ id: "x5-verbcases", t: "Czasowniki i przypadki", d: "Дякувати комусь, сумувати за кимось, грати на гітарі.", k: "v", i: `
дякувати комусь|dziękować komuś
допомагати комусь|pomagać komuś
дзвонити комусь|dzwonić do kogoś
заважати комусь|przeszkadzać komuś
радити комусь|radzić komuś
вірити комусь|wierzyć komuś
довіряти комусь|ufać komuś
подобатися комусь|podobać się komuś
пишатися кимось|być dumnym z kogoś
цікавитися чимось|interesować się czymś
займатися чимось|zajmować się czymś
користуватися чимось|korzystać z czegoś
керувати чимось|kierować czymś
захоплюватися чимось|pasjonować się czymś
боятися чогось|bać się czegoś
чекати на когось|czekać na kogoś
думати про щось|myśleć o czymś
мріяти про щось|marzyć o czymś
просити про допомогу|prosić o pomoc
залежати від когось|zależeć od kogoś
сміятися з когось|śmiać się z kogoś
сумувати за кимось|tęsknić za kimś
грати у футбол|grać w piłkę nożną
грати на гітарі|grać na gitarze
відповідати на питання|odpowiadać na pytanie
`},
{ id: "x5-nouns", t: "Rzeczowniki B1", d: "Перевага, наслідок, звичка, виклик.", k: "v", i: `
перевага|zaleta (przewaga)
користь|korzyść
наслідок|skutek
рішення|decyzja (rozwiązanie)
ситуація|sytuacja
умова|warunek
якість|jakość
кількість|ilość
сума|kwota
більшість|większość
меншість|mniejszość
метод|metoda
прогрес|postęp
ставлення|nastawienie
поведінка|zachowanie
звичка|nawyk
здатність|zdolność
досягнення|osiągnięcie
невдача|niepowodzenie
успіх|sukces
виклик|wyzwanie
можливість|możliwość
відповідальність|odpowiedzialność
ризик|ryzyko
вплив|wpływ
`}
]);
})();
