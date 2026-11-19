/* Etap 1 – pierwsze słówka (A1). */
ADD("s1", [
{ id: "x1-greet", t: "Powitania i grzeczności", d: "Привіт, дякую, будь ласка.", k: "v", i: `
привіт|cześć|👋
добрий день|dzień dobry|☀️
доброго ранку|dzień dobry (rano)|🌅
добрий вечір|dobry wieczór|🌆
на добраніч|dobranoc|🌙
до побачення|do widzenia|🚪
бувай|pa (na razie)|🙋
дякую|dziękuję|🙏
будь ласка|proszę|😊
вибачте|przepraszam|😔
так|tak|✅
ні|nie|❌
як справи?|jak się masz?|🙂
добре|dobrze|👍
погано|źle|👎
нормально|w porządku|👌
дуже приємно|bardzo mi miło|🤝
до зустрічі|do zobaczenia|📅
ласкаво просимо|witamy|🎉
вітаю!|gratuluję!|🥳
смачного!|smacznego!|🍽️
на здоров'я!|na zdrowie!|🥂
перепрошую|przepraszam (nie dosłyszałem)|👂
нічого страшного|nic się nie stało|😌
звичайно|oczywiście|💯
`},
{ id: "x1-colors", t: "Kolory", d: "Червоний, синій, жовтий…", k: "v", i: `
червоний|czerwony|🟥
синій|niebieski (granatowy)|🟦
блакитний|błękitny|
зелений|zielony|🟩
жовтий|żółty|🟨
чорний|czarny|⬛
білий|biały|⬜
помаранчевий|pomarańczowy|🟧
фіолетовий|fioletowy|🟪
коричневий|brązowy|🟫
рожевий|różowy|🌸
сірий|szary|🐘
золотий|złoty|🥇
срібний|srebrny|🥈
світлий|jasny|💡
темний|ciemny|🌑
колір|kolor|🎨
кольоровий|kolorowy|🌈
бежевий|beżowy|
бірюзовий|turkusowy|
бордовий|bordowy|🍷
кремовий|kremowy|
салатовий|jasnozielony|🥬
різнокольоровий|wielobarwny|
яскравий|jaskrawy|✨
`},
{ id: "x1-family", t: "Rodzina", d: "Мама, тато, бабуся, дідусь.", k: "v", i: `
мама|mama|👩
тато|tata|👨
мати|matka|
батько|ojciec|
брат|brat|👦
сестра|siostra|👧
син|syn|👶
донька|córka|🎀
бабуся|babcia|👵
дідусь|dziadek|👴
батьки|rodzice|👫
сім'я|rodzina|👪
чоловік|mąż (mężczyzna)|🤵
дружина|żona|👰
дитина|dziecko|🧒
діти|dzieci|🧸
онук|wnuk|
онука|wnuczka|
дядько|wujek|
тітка|ciocia|
двоюрідний брат|kuzyn|
двоюрідна сестра|kuzynka|
племінник|bratanek / siostrzeniec|
племінниця|bratanica / siostrzenica|
родичі|krewni|
`},
{ id: "x1-animals", t: "Zwierzęta", d: "Кіт, собака, корова, їжак…", k: "v", i: `
кіт|kot|🐱
собака|pies|🐶
кінь|koń|🐴
корова|krowa|🐮
свиня|świnia|🐷
вівця|owca|🐑
коза|koza|🐐
курка|kura|🐔
качка|kaczka|🦆
гуска|gęś|🪿
птах|ptak|🐦
риба|ryba|🐟
миша|mysz|🐭
кролик|królik|🐰
ведмідь|niedźwiedź|🐻
вовк|wilk|🐺
лисиця|lis|🦊
заєць|zając|🐇
їжак|jeż|🦔
білка|wiewiórka|🐿️
жаба|żaba|🐸
змія|wąż|🐍
лев|lew|🦁
слон|słoń|🐘
мавпа|małpa|🐒
`},
{ id: "x1-food", t: "Jedzenie", d: "Хліб, сир, борщ, вареники.", k: "v", i: `
хліб|chleb|🍞
масло|masło|🧈
сир|ser|🧀
яйце|jajko|🥚
м'ясо|mięso|🥩
ковбаса|kiełbasa|🌭
суп|zupa|🍲
борщ|barszcz|🥣
вареники|pierogi|🥟
каша|kasza|
рис|ryż|🍚
макарони|makaron|🍝
картопля|ziemniaki|🥔
салат|sałatka|🥗
торт|tort|🎂
печиво|ciastka (herbatniki)|🍪
цукор|cukier|
сіль|sól|🧂
перець|pieprz / papryka|🌶️
мед|miód|🍯
варення|konfitura|🍓
млинці|naleśniki|🥞
бутерброд|kanapka|🥪
сало|słonina|🥓
морозиво|lody|🍦
`},
{ id: "x1-fruitveg", t: "Owoce i warzywa", d: "Uwaga: диня to melon, a гарбуз to dynia!", k: "v", i: `
яблуко|jabłko|🍎
груша|gruszka|🍐
банан|banan|🍌
апельсин|pomarańcza|🍊
лимон|cytryna|🍋
виноград|winogrona|🍇
полуниця|truskawka|🍓
вишня|wiśnia|🍒
черешня|czereśnia|
слива|śliwka|
кавун|arbuz|🍉
диня|melon|🍈
гарбуз|dynia|🎃
помідор|pomidor|🍅
огірок|ogórek|🥒
цибуля|cebula|🧅
часник|czosnek|🧄
морква|marchewka|🥕
капуста|kapusta|🥬
буряк|burak|
горох|groch|🫛
гриб|grzyb|🍄
кукурудза|kukurydza|🌽
малина|malina|
персик|brzoskwinia|🍑
`},
{ id: "x1-drinks", t: "Napoje", d: "Вода, чай, кава, компот.", k: "v", i: `
вода|woda|💧
молоко|mleko|🥛
кава|kawa|☕
чай|herbata|🍵
сік|sok|🧃
пиво|piwo|🍺
вино|wino|🍷
горілка|wódka|
компот|kompot|
квас|kwas chlebowy|
мінеральна вода|woda mineralna|
газована вода|woda gazowana|
какао|kakao|
лимонад|lemoniada|
коктейль|koktajl|🍹
чашка кави|filiżanka kawy|
склянка води|szklanka wody|
пляшка|butelka|🍾
чашка|filiżanka|
склянка|szklanka|🥃
кухоль|kufel|
лід|lód|🧊
гарячий шоколад|gorąca czekolada|
напій|napój|🥤
вершки|śmietanka|
`},
{ id: "x1-body", t: "Ciało", d: "Uwaga: живіт to brzuch, a nie żywot!", k: "v", i: `
голова|głowa|🙆
обличчя|twarz|🙂
око|oko|👁️
вухо|ucho|👂
ніс|nos|👃
рот|usta|👄
зуб|ząb|🦷
волосся|włosy|💇
шия|szyja|
плече|ramię|
рука|ręka|✋
палець|palec|☝️
нога|noga|🦵
коліно|kolano|
ступня|stopa|🦶
спина|plecy|
живіт|brzuch|
серце|serce|❤️
губа|warga|💋
язик|język (w ustach)|👅
брова|brew|
щока|policzek|
лоб|czoło|
шкіра|skóra|
кістка|kość|🦴
`},
{ id: "x1-home", t: "Dom", d: "Кімната, кухня, двері, вікно.", k: "v", i: `
дім|dom|🏠
квартира|mieszkanie|🏢
кімната|pokój|
кухня|kuchnia|🍳
ванна кімната|łazienka|🛁
спальня|sypialnia|🛏️
вітальня|salon|
туалет|toaleta|🚽
двері|drzwi|🚪
вікно|okno|🪟
стіл|stół|🍽️
стілець|krzesło|🪑
ліжко|łóżko|🛌
шафа|szafa|
диван|kanapa|🛋️
лампа|lampa|💡
ключ|klucz|🔑
сад|ogród|🌷
балкон|balkon|
сходи|schody|🪜
підлога|podłoga|
стеля|sufit|
стіна|ściana|🧱
дзеркало|lustro|🪞
холодильник|lodówka|🧊
`},
{ id: "x1-clothes", t: "Ubrania", d: "Сорочка, штани, шапка, черевики.", k: "v", i: `
одяг|ubranie|
сорочка|koszula|👔
футболка|koszulka|👕
штани|spodnie|👖
джинси|dżinsy|
сукня|sukienka|👗
спідниця|spódnica|
светр|sweter|🧶
куртка|kurtka|🧥
пальто|płaszcz|
шапка|czapka|🧢
капелюх|kapelusz|👒
шарф|szalik|🧣
рукавички|rękawiczki|🧤
шкарпетки|skarpetki|🧦
взуття|obuwie|
черевики|półbuty|👞
кросівки|buty sportowe|👟
чоботи|kozaki|👢
сумка|torba|👜
пояс|pasek|
краватка|krawat|
окуляри|okulary|👓
піжама|piżama|
костюм|garnitur|🤵
`},
{ id: "x1-pronouns", t: "Zaimki", d: "Я, ти, він, вона… мій, твій, наш.", k: "v", i: `
я|ja|🙋
ти|ty|👉
він|on|👨
вона|ona|👩
воно|ono|📦
ми|my|👥
ви|wy (Pan / Pani)|
вони|oni / one|👨‍👩‍👧
мій|mój|
моя|moja|
моє|moje|
мої|moje (liczba mnoga)|
твій|twój|
його|jego|
її|jej|
наш|nasz|
ваш|wasz (Pana / Pani)|
їхній|ich|
хто?|kto?|❓
що?|co?|❔
це|to|
цей|ten|
ця|ta|
той|tamten|
та|tamta|
`},
{ id: "x1-days", t: "Dni i pory dnia", d: "Понеділок, вівторок… сьогодні, завтра.", k: "v", i: `
понеділок|poniedziałek
вівторок|wtorek
середа|środa
четвер|czwartek
п'ятниця|piątek
субота|sobota
неділя|niedziela
сьогодні|dzisiaj
завтра|jutro
вчора|wczoraj
день|dzień
тиждень|tydzień
вихідні|weekend
ранок|poranek
вечір|wieczór
ніч|noc
зараз|teraz
пізніше|później
рано|wcześnie
пізно|późno
щодня|codziennie
післязавтра|pojutrze
позавчора|przedwczoraj
доба|doba
будній день|dzień powszedni
`},
{ id: "x1-months", t: "Miesiące i święta", d: "Uwaga: травень to maj, a жовтень to październik.", k: "v", i: `
січень|styczeń
лютий|luty
березень|marzec
квітень|kwiecień
травень|maj
червень|czerwiec
липень|lipiec
серпень|sierpień
вересень|wrzesień
жовтень|październik
листопад|listopad
грудень|grudzień
весна|wiosna|🌱
літо|lato|☀️
осінь|jesień|🍂
зима|zima|❄️
місяць|miesiąc|🗓️
рік|rok|
пора року|pora roku|
свято|święto|🎉
день народження|urodziny|🎂
Новий рік|Nowy Rok|🎆
Різдво|Boże Narodzenie|🎄
Великдень|Wielkanoc|🐣
відпустка|urlop|🏖️
`},
{ id: "x1-school", t: "Szkoła", d: "Uwaga: урок to lekcja, a nie urok!", k: "v", i: `
школа|szkoła|🏫
клас|klasa|
урок|lekcja|
учень|uczeń|🧒
вчитель|nauczyciel|🧑‍🏫
дошка|tablica|
ручка|długopis|🖊️
олівець|ołówek|✏️
зошит|zeszyt|📓
книжка|książka|📕
підручник|podręcznik|📘
рюкзак|plecak|🎒
лінійка|linijka|📏
гумка|gumka|
ножиці|nożyczki|✂️
клей|klej|
папір|papier|📄
сторінка|strona|
питання|pytanie|❓
відповідь|odpowiedź|💬
домашнє завдання|praca domowa|📝
перерва|przerwa|🔔
оцінка|ocena|
контрольна робота|sprawdzian|
дзвінок|dzwonek|
`},
{ id: "x1-city", t: "Miasto", d: "Uwaga: магазин to sklep, a склеп to grobowiec!", k: "v", i: `
місто|miasto|🏙️
вулиця|ulica|🛣️
магазин|sklep|🏪
ринок|rynek|
аптека|apteka|💊
лікарня|szpital|🏥
пошта|poczta|🏤
кафе|kawiarnia|☕
ресторан|restauracja|🍽️
площа|plac|
церква|cerkiew (kościół)|⛪
театр|teatr|🎭
кінотеатр|kino|🎬
музей|muzeum|🏛️
зупинка|przystanek|🚏
вокзал|dworzec|🚉
аеропорт|lotnisko|✈️
міст|most|🌉
будинок|budynek|🏢
готель|hotel|🏨
бібліотека|biblioteka|📚
перехрестя|skrzyżowanie|
тротуар|chodnik|
світлофор|sygnalizacja świetlna|🚦
село|wieś|🏡
`},
{ id: "x1-transport", t: "Transport", d: "Автобус, трамвай, літак, ліворуч, праворуч.", k: "v", i: `
автобус|autobus|🚌
тролейбус|trolejbus|🚎
трамвай|tramwaj|🚋
поїзд|pociąg|🚆
літак|samolot|✈️
машина|samochód|🚗
таксі|taksówka|🚕
велосипед|rower|🚲
мотоцикл|motocykl|🏍️
корабель|statek|🚢
човен|łódź|⛵
вантажівка|ciężarówka|🚚
швидка|karetka|🚑
маршрутка|bus (marszrutka)|🚐
квиток|bilet|🎫
водій|kierowca|
пасажир|pasażer|
станція|stacja|🚉
колія|tor|
кермо|kierownica|
колесо|koło|🛞
пішки|pieszo|🚶
прямо|prosto|⬆️
ліворуч|w lewo|⬅️
праворуч|w prawo|➡️
`}
]);
