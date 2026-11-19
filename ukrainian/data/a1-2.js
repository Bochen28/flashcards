/* Etap 2 – podstawy gramatyki, zdania i słówka (A1). */
(function () {
var SENT = ["order", "pl2en", "order", "en2pl", "listen"];
var CHOICE = ["en2pl", "pl2en", "listen"];
ADD("s2", [
{ id: "x2-poss", t: "мій, моя, моє, мої", d: "Zaimek dzierżawczy zgadza się z rodzajem rzeczownika.", k: "f", i: `
Це {мій} брат.|To mój brat.|моя,моє|мій – rodzaj męski, моя – żeński, моє – nijaki, мої – liczba mnoga.
Це {моя} сестра.|To moja siostra.|мій,моє
Це {моє} місто.|To moje miasto.|мій,моя
Це {мої} діти.|To moje dzieci.|моє,моя
Де {твій} телефон?|Gdzie jest twój telefon?|твоя,твоє
Де {твоя} сумка?|Gdzie jest twoja torba?|твій,твоє
Це {твоє} вікно?|Czy to twoje okno?|твій,твоя
Це {твої} ключі?|Czy to twoje klucze?|твоє,твій
{Наш} дім великий.|Nasz dom jest duży.|Наша,Наше
{Наша} кухня маленька.|Nasza kuchnia jest mała.|Наш,Наше
{Наше} село гарне.|Nasza wieś jest ładna.|Наш,Наша|Село jest rodzaju nijakiego (inaczej niż „wieś”).
{Наші} батьки живуть у Львові.|Nasi rodzice mieszkają we Lwowie.|Наше,Наш
Це {ваш} квиток?|Czy to Pana bilet?|ваша,ваше
Це {ваша} кава.|To Pani kawa.|ваш,ваше
{Його} мама – лікар.|Jego mama jest lekarzem.|Її,Їхній|Його, її, їхній – jego, jej, ich.
{Її} брат – студент.|Jej brat jest studentem.|Його,Мій
{Мій} кіт спить.|Mój kot śpi.|Моя,Моє
{Моя} кімната тут.|Mój pokój jest tutaj.|Мій,Моє|Кімната jest rodzaju żeńskiego (inaczej niż „pokój”).
Де {моє} пальто?|Gdzie jest mój płaszcz?|мій,моя|Пальто jest rodzaju nijakiego.
{Мої} друзі тут.|Moi przyjaciele są tutaj.|Мій,Моє
`},
{ id: "x2-sent1", t: "Zdania: o sobie", d: "Przedstaw się po ukraińsku.", k: "o", ex: SENT, i: `
Мене звати Олена.|Mam na imię Olena.
Я з Польщі.|Jestem z Polski.
Я живу у Варшаві.|Mieszkam w Warszawie.
Мені тридцять років.|Mam trzydzieści lat.
Я працюю в офісі.|Pracuję w biurze.
Я вчу українську мову.|Uczę się języka ukraińskiego.
Я трохи говорю українською.|Trochę mówię po ukraińsku.
У мене є брат і сестра.|Mam brata i siostrę.
Моя дружина – вчителька.|Moja żona jest nauczycielką.
Дуже приємно.|Bardzo mi miło.
Як тебе звати?|Jak masz na imię?
Звідки ти?|Skąd jesteś?
Де ти працюєш?|Gdzie pracujesz?
Я люблю музику і спорт.|Lubię muzykę i sport.
Мій улюблений колір – зелений.|Mój ulubiony kolor to zielony.
Я не одружений.|Nie jestem żonaty.
У мене є кіт.|Mam kota.
Я студент.|Jestem studentem.
Я розумію, але погано говорю.|Rozumiem, ale słabo mówię.
До зустрічі завтра!|Do zobaczenia jutro!
`},
{ id: "x2-this", t: "цей, ця, це, ці", d: "Ten, ta, to, te – i tamten, tamta…", k: "f", i: `
{Цей} стіл новий.|Ten stół jest nowy.|Ця,Це
{Ця} книга цікава.|Ta książka jest ciekawa.|Цей,Ці
{Це} вікно велике.|To okno jest duże.|Цей,Ця
{Ці} яблука смачні.|Te jabłka są smaczne.|Ця,Цей
{Цей} хлопець – мій брат.|Ten chłopak to mój brat.|Ця,Це
{Ця} дівчина – моя сестра.|Ta dziewczyna to moja siostra.|Цей,Це
Скільки коштує {ця} сумка?|Ile kosztuje ta torba?|цей,ці
{Ці} квіти для тебе.|Te kwiaty są dla ciebie.|Цей,Ця
{Той} будинок старий.|Tamten budynek jest stary.|Та,Те|Той / та / те / ті = tamten / tamta / tamto / tamte.
{Та} жінка – лікарка.|Tamta kobieta jest lekarką.|Той,Ті
{Те} місто далеко.|Tamto miasto jest daleko.|Той,Та
{Ті} гори дуже високі.|Tamte góry są bardzo wysokie.|Та,Те
Я хочу {цей} торт.|Chcę ten tort.|ця,ці
{Це} моя мама.|To moja mama.|Ця,Цей|Przedstawiając kogoś mówimy це (to): Це моя мама.
{Це} мої батьки.|To moi rodzice.|Ці,Ця
{Цей} автобус їде в центр.|Ten autobus jedzie do centrum.|Ця,Ці
{Ця} кава гаряча.|Ta kawa jest gorąca.|Цей,Це
{Цей} чай холодний.|Ta herbata jest zimna.|Ця,Це|Чай jest rodzaju męskiego (inaczej niż „herbata”).
{Ця} проблема серйозна.|Ten problem jest poważny.|Цей,Це|Проблема jest rodzaju żeńskiego.
Що {це}?|Co to jest?|ця,цей
`},
{ id: "x2-sent2", t: "Zdania: dom i rodzina", d: "Opisz swój dom i bliskich.", k: "o", ex: SENT, i: `
Мій дім маленький, але гарний.|Mój dom jest mały, ale ładny.
У нас велика кухня.|Mamy dużą kuchnię.
Моя кімната на другому поверсі.|Mój pokój jest na drugim piętrze.
Ванна кімната поруч з кухнею.|Łazienka jest obok kuchni.
У квартирі три кімнати.|W mieszkaniu są trzy pokoje.
Моя сестра має довге волосся.|Moja siostra ma długie włosy.
Наш кіт спить на дивані.|Nasz kot śpi na kanapie.
Мої бабуся і дідусь живуть у селі.|Moi dziadkowie mieszkają na wsi.
Мама дуже добре готує.|Mama bardzo dobrze gotuje.
Сад за будинком.|Ogród jest za domem.
Ми обідаємо разом.|Jemy razem obiad.
Тато працює в лікарні.|Tata pracuje w szpitalu.
Діти в своїй кімнаті.|Dzieci są w swoim pokoju.
Мій брат старший за мене.|Mój brat jest starszy ode mnie.
Телевізор у вітальні.|Telewizor jest w salonie.
У нас новий холодильник.|Mamy nową lodówkę.
Моя донька ходить до школи.|Moja córka chodzi do szkoły.
Мій дядько живе в Канаді.|Mój wujek mieszka w Kanadzie.
Ключі на столі.|Klucze są na stole.
Вікно відчинене.|Okno jest otwarte.
`},
{ id: "x2-adjagree", t: "Przymiotnik + rzeczownik", d: "Нова машина, новий телефон, нове вікно.", k: "f", i: `
У мене {нова} машина.|Mam nowy samochód.|новий,нове|Машина jest rodzaju żeńskiego.
Це {новий} телефон.|To nowy telefon.|нова,нове
Це {нове} вікно.|To nowe okno.|новий,нова
Це {нові} черевики.|To nowe buty.|нова,новий
Сьогодні {гарна} погода.|Dziś jest ładna pogoda.|гарний,гарне
Київ – {велике} місто.|Kijów to duże miasto.|великий,велика
У неї {довге} волосся.|Ona ma długie włosy.|довгий,довга|Волосся jest rodzaju nijakiego i w liczbie pojedynczej.
Це {цікава} книга.|To ciekawa książka.|цікавий,цікаве
Мій брат – {високий} хлопець.|Mój brat to wysoki chłopak.|висока,високе
Моя сестра {висока}.|Moja siostra jest wysoka.|високий,високе
Чай {гарячий}.|Herbata jest gorąca.|гаряча,гаряче
Кава {гаряча}.|Kawa jest gorąca.|гарячий,гаряче
Молоко {холодне}.|Mleko jest zimne.|холодний,холодна
Діти {щасливі}.|Dzieci są szczęśliwe.|щасливий,щаслива
Це {синя} сукня.|To niebieska sukienka.|синій,синє|Синій to przymiotnik miękki: синя, синє, сині.
Він купив {синій} светр.|Kupił niebieski sweter.|синя,синє
Небо {синє}.|Niebo jest niebieskie.|синій,синя
У нас {маленька} квартира.|Mamy małe mieszkanie.|маленький,маленьке|Квартира jest rodzaju żeńskiego.
Це {останній} автобус.|To ostatni autobus.|остання,останнє
Яка {смачна} їжа!|Jakie smaczne jedzenie!|смачний,смачне|Їжа jest rodzaju żeńskiego.
`},
{ id: "x2-sent3", t: "Zdania: proste pytania", d: "Gdzie, ile, kiedy, dokąd?", k: "o", ex: SENT, i: `
Як справи?|Co słychać?
Де вокзал?|Gdzie jest dworzec?
Скільки це коштує?|Ile to kosztuje?
Котра година?|Która godzina?
Ти голодний?|Jesteś głodny?
Хто це?|Kto to jest?
Що це таке?|Co to takiego?
Де тут туалет?|Gdzie tu jest toaleta?
Ви говорите англійською?|Czy mówi Pan po angielsku?
Можна вас запитати?|Czy mogę Pana o coś zapytać?
Де можна купити квиток?|Gdzie można kupić bilet?
Коли відходить поїзд?|Kiedy odjeżdża pociąg?
Чи це далеко?|Czy to daleko?
Ти мене розумієш?|Rozumiesz mnie?
Що ти хочеш?|Czego chcesz?
Куди ти їдеш?|Dokąd jedziesz?
Чому ти сумний?|Dlaczego jesteś smutny?
Яка сьогодні погода?|Jaka jest dziś pogoda?
Можна мені води?|Czy mogę prosić wody?
Ти вже поїв?|Czy już zjadłeś?
`},
{ id: "x2-present", t: "Czas teraźniejszy", d: "Я читаю, ти читаєш, він читає…", k: "f", i: `
Я {читаю} книгу.|Czytam książkę.|читає,читаєш
Ти {читаєш} газету?|Czytasz gazetę?|читаю,читають
Вона {працює} в банку.|Ona pracuje w banku.|працюю,працюють
Ми {живемо} в Польщі.|Mieszkamy w Polsce.|живуть,живе
Ви {говорите} українською?|Czy mówi Pan po ukraińsku?|говорить,говоримо|Ви – forma grzecznościowa (Pan / Pani) i liczba mnoga.
Вони {знають} відповідь.|Oni znają odpowiedź.|знає,знаю
Я не {розумію}.|Nie rozumiem.|розуміє,розуміють
Що ти {робиш}?|Co robisz?|роблю,робить
Я {люблю} каву.|Lubię kawę.|любить,любиш|Любити: люблю (z „л”), любиш, любить.
Мама {готує} обід.|Mama gotuje obiad.|готую,готуємо
Діти {грають} у футбол.|Dzieci grają w piłkę nożną.|грає,граємо
Ми {дивимося} фільм.|Oglądamy film.|дивиться,дивлюся
Я {хочу} пити.|Chce mi się pić.|хоче,хочеш
Він {їде} в Київ.|On jedzie do Kijowa.|їду,їдуть
Куди ти {йдеш}?|Dokąd idziesz?|йду,йде
Я {п'ю} чай.|Piję herbatę.|п'є,п'ють
Що ви {їсте}?|Co jecie?|їсть,їмо|Їсти jest nieregularne: їм, їси, їсть, їмо, їсте, їдять.
Ми {вчимося} в школі.|Uczymy się w szkole.|вчиться,вчаться
Я {маю} сестру.|Mam siostrę.|має,мають
Вони {сплять}.|Oni śpią.|спить,сплю
`},
{ id: "x2-sent4", t: "Zdania: rzeczy wokół nas", d: "Gdzie coś jest i jakie jest.", k: "o", ex: SENT, i: `
Книга на столі.|Książka jest na stole.
Мій телефон у сумці.|Mój telefon jest w torbie.
Ця сумка дуже важка.|Ta torba jest bardzo ciężka.
Ці черевики замалі.|Te buty są za małe.
Сьогодні небо синє.|Dziś niebo jest niebieskie.
У мене червона машина.|Mam czerwony samochód.
Її сукня дуже гарна.|Jej sukienka jest bardzo ładna.
Магазин зачинений.|Sklep jest zamknięty.
Вода холодна.|Woda jest zimna.
Чай дуже гарячий.|Herbata jest bardzo gorąca.
Це гарна ідея.|To dobry pomysł.
Той будинок дуже старий.|Tamten budynek jest bardzo stary.
Мій комп'ютер новий.|Mój komputer jest nowy.
Собака під столом.|Pies jest pod stołem.
Де мої окуляри?|Gdzie są moje okulary?
Чашки в шафі.|Filiżanki są w szafie.
Сьогодні гарний день.|Dziś jest piękny dzień.
Діти щасливі.|Dzieci są szczęśliwe.
Кава смачна.|Kawa jest smaczna.
Квартира велика і світла.|Mieszkanie jest duże i jasne.
`},
{ id: "x2-qwords", t: "Słowa pytające", d: "Хто, що, де, куди, коли, скільки…", k: "f", i: `
{Хто} це?|Kto to jest?|Що,Де
{Що} це?|Co to jest?|Хто,Як
{Де} ти живеш?|Gdzie mieszkasz?|Куди,Коли|Де = gdzie (miejsce), куди = dokąd (kierunek).
{Куди} ти йдеш?|Dokąd idziesz?|Де,Звідки
{Звідки} ви?|Skąd Pan jest?|Куди,Де
{Коли} твій день народження?|Kiedy masz urodziny?|Де,Хто
{Як} тебе звати?|Jak masz na imię?|Що,Хто|Як тебе звати? – dosłownie „jak cię wołają?”.
{Скільки} коштує квиток?|Ile kosztuje bilet?|Котрий,Як
{Чому} ти сумний?|Dlaczego jesteś smutny?|Хто,Де
{Котра} година?|Która godzina?|Яка,Скільки
{Скільки} тобі років?|Ile masz lat?|Як,Котрий
{Який} твій улюблений колір?|Jaki jest twój ulubiony kolor?|Яка,Яке
{Яка} сьогодні погода?|Jaka jest dziś pogoda?|Який,Яке
{Чий} це телефон?|Czyj to telefon?|Чия,Чиє
{Чия} це сумка?|Czyja to torba?|Чий,Чиє
{Як} справи?|Co słychać?|Що,Хто
{Що} ти робиш?|Co robisz?|Хто,Де
{Де} туалет?|Gdzie jest toaleta?|Куди,Звідки
{Навіщо} тобі це?|Po co ci to?|Звідки,Скільки
{Хто} там?|Kto tam?|Що,Де
`},
{ id: "x2-umene", t: "У мене є – mam", d: "Jak powiedzieć „mam”, „nie mam” i „boli mnie”.", k: "f", i: `
{У мене} є брат.|Mam brata.|Я,Мені|„Mam” po ukraińsku najczęściej: у мене є.
У тебе {є} машина?|Masz samochód?|має,маєш
У {нього} є собака.|On ma psa.|він,його|Po „у” zaimek він zmienia się w нього.
У {неї} є кіт.|Ona ma kota.|вона,її
У {нас} є дача.|Mamy daczę.|ми,наш
У {них} немає дітей.|Oni nie mają dzieci.|вони,їх|Немає = nie ma (brak).
У мене {немає} часу.|Nie mam czasu.|не є,ні
У {вас} є квитки?|Czy ma Pan bilety?|ви,ваш
{У тебе} є питання?|Masz pytanie?|Ти,Тобі
У мене є {сестра}.|Mam siostrę.|сестру,сестри|Po „у мене є” rzeczownik stoi w mianowniku: є сестра.
У мене немає {сестри}.|Nie mam siostry.|сестра,сестру|Po „немає” – dopełniacz: немає сестри.
У нас немає {хліба}.|Nie mamy chleba.|хліб,хлібу
У мене немає {грошей}.|Nie mam pieniędzy.|гроші,грошам
У неї є {гарна} сукня.|Ona ma ładną sukienkę.|гарний,гарне
У мене {болить} голова.|Boli mnie głowa.|болять,болю
У нього {болять} зуби.|Bolą go zęby.|болить,болю
Я {маю} час.|Mam czas.|має,мати|Można też powiedzieć я маю, ale у мене є jest częstsze.
Скільки {тобі} років?|Ile masz lat?|ти,тебе|Wiek: мені двадцять років (dosł. „mnie dwadzieścia lat”).
Мені {двадцять} років.|Mam dwadzieścia lat.|двадцятий,двадцятеро
{Мені} подобається це місто.|Podoba mi się to miasto.|Я,Мене
`},
{ id: "x2-phrases", t: "Przydatne zwroty", d: "Nie rozumiem, proszę powtórzyć, rachunek proszę.", k: "v", ex: CHOICE, i: `
Я не розумію.|Nie rozumiem.|🤷
Повторіть, будь ласка.|Proszę powtórzyć.|🔁
Говоріть повільніше, будь ласка.|Proszę mówić wolniej.|🐢
Як це сказати українською?|Jak to powiedzieć po ukraińsku?|💬
Що це означає?|Co to znaczy?|❓
Де туалет?|Gdzie jest toaleta?|🚻
Допоможіть, будь ласка!|Proszę pomóc!|🆘
Я загубився.|Zgubiłem się.|🗺️
Я поляк.|Jestem Polakiem.|🙋‍♂️
Я полька.|Jestem Polką.|🙋‍♀️
Мене звати…|Mam na imię…|📛
Як вас звати?|Jak Pan ma na imię?|🤝
Рахунок, будь ласка.|Rachunek, proszę.|🧾
Можна?|Czy można?|✋
Не знаю.|Nie wiem.|🤔
Все добре.|Wszystko w porządku.|👌
Без проблем.|Bez problemu.|👍
Гарного дня!|Miłego dnia!|🌞
Щасливої дороги!|Szczęśliwej podróży!|🧳
Удачі!|Powodzenia!|🍀
Будьмо!|Zdrowie! (toast)|🥂
Зачекайте хвилинку.|Proszę chwilę poczekać.|⏳
Дякую, не треба.|Dziękuję, nie trzeba.|🙅
Вибачте, де тут вокзал?|Przepraszam, gdzie tu jest dworzec?|🚉
Я хочу каву.|Chcę kawę.|☕
`},
{ id: "x2-adverbs", t: "Gdzie? Jak? Ile?", d: "Тут, там, дуже, трохи, завжди, ніколи.", k: "v", i: `
тут|tutaj
там|tam
дуже|bardzo
трохи|trochę
багато|dużo
мало|mało
завжди|zawsze
ніколи|nigdy
іноді|czasami
часто|często
вже|już
ще|jeszcze
теж|też
також|także
разом|razem
швидко|szybko
повільно|powoli
далеко|daleko
близько|blisko
вгорі|na górze
внизу|na dole
тепер|teraz (obecnie)
може|może
майже|prawie
тільки|tylko
`},
{ id: "x2-feelings", t: "Jak się czujesz?", d: "Щасливий, втомлений, голодний, закоханий.", k: "v", i: `
щасливий|szczęśliwy|😀
сумний|smutny|😢
веселий|wesoły|😄
втомлений|zmęczony|😴
голодний|głodny|🍽️
спраглий|spragniony|🥤
злий|zły (rozzłoszczony)|😠
хворий|chory|🤒
здоровий|zdrowy|💪
зайнятий|zajęty|📅
вільний|wolny|🆓
радий|rad (cieszę się)|😊
наляканий|przestraszony|😨
здивований|zdziwiony|😮
спокійний|spokojny|😌
нервовий|nerwowy|😬
закоханий|zakochany|😍
самотній|samotny|
задоволений|zadowolony|🙂
сонний|śpiący|🥱
холодно|zimno (mi)|🥶
жарко|gorąco (mi)|🥵
нудно|nudno|
весело|wesoło|🎉
страшно|strasznie (boję się)|😱
`},
{ id: "x2-nature", t: "Pogoda i przyroda", d: "Сонце, дощ, сніг, веселка, ліс.", k: "v", i: `
сонце|słońce|☀️
небо|niebo|
хмара|chmura|☁️
дощ|deszcz|🌧️
сніг|śnieg|❄️
вітер|wiatr|💨
погода|pogoda|🌦️
тепло|ciepło|🌡️
гроза|burza|⛈️
туман|mgła|🌫️
веселка|tęcza|🌈
зірка|gwiazda|⭐
місяць|księżyc (miesiąc)|🌙
земля|ziemia|🌍
море|morze|🌊
річка|rzeka|
озеро|jezioro|
гора|góra|⛰️
ліс|las|🌲
дерево|drzewo|🌳
квітка|kwiat|🌼
трава|trawa|🌱
поле|pole|🌾
пляж|plaża|🏖️
острів|wyspa|🏝️
`}
]);
})();
