/* Etap 3 – przypadki i zdania (A2). */
(function () {
var SENT = ["order", "pl2en", "order", "en2pl", "listen"];
ADD("s3", [
{ id: "x3-locative", t: "Gdzie? Miejscownik", d: "На столі, в Києві, у парку.", k: "f", i: `
Книга лежить на {столі}.|Książka leży na stole.|стіл,стола
Я живу в {Києві}.|Mieszkam w Kijowie.|Київ,Києва
Мама працює в {лікарні}.|Mama pracuje w szpitalu.|лікарня,лікарню
Діти гуляють у {парку}.|Dzieci spacerują w parku.|парк,парком
Кіт спить на {дивані}.|Kot śpi na kanapie.|диван,дивана
Ми обідаємо на {кухні}.|Jemy obiad w kuchni.|кухня,кухню|Ukraińcy mówią zwykle „на кухні”.
Я був у {Львові}.|Byłem we Lwowie.|Львів,Львова
Вона вчиться в {університеті}.|Ona studiuje na uniwersytecie.|університет,університету
Ключі в {сумці}.|Klucze są w torbie.|сумка,сумку
Ми зустрілися на {вокзалі}.|Spotkaliśmy się na dworcu.|вокзал,вокзалу
Він сидить у {кафе}.|On siedzi w kawiarni.|кафею,кафі|Кафе się nie odmienia.
Я живу в {Польщі}.|Mieszkam w Polsce.|Польща,Польщу
Риба плаває в {річці}.|Ryba pływa w rzece.|річка,річку
Ми відпочиваємо на {морі}.|Odpoczywamy nad morzem.|море,морем|„Nad morzem” to po ukraińsku на морі.
Вони живуть у {селі}.|Oni mieszkają na wsi.|село,селом|„Na wsi” to po ukraińsku у селі.
Я працюю на {заводі}.|Pracuję w fabryce.|завод,заводу
Книжки на {полиці}.|Książki są na półce.|полиця,полицю
Ми в {магазині}.|Jesteśmy w sklepie.|магазин,магазину
Хліб у {шафі}.|Chleb jest w szafie.|шафа,шафу
Ми були в {театрі}.|Byliśmy w teatrze.|театр,театру
`},
{ id: "x3-sent-day", t: "Zdania: mój dzień", d: "Codzienne czynności po kolei.", k: "o", ex: SENT, i: `
Я встаю о сьомій.|Wstaję o siódmej.
Я снідаю вдома.|Jem śniadanie w domu.
Я їду на роботу автобусом.|Jeżdżę do pracy autobusem.
Робота починається о дев'ятій.|Praca zaczyna się o dziewiątej.
Я обідаю о першій.|Jem obiad o pierwszej.
Я закінчую роботу о п'ятій.|Kończę pracę o piątej.
Увечері я дивлюся телевізор.|Wieczorem oglądam telewizję.|Я дивлюся телевізор увечері.
Я лягаю спати об одинадцятій.|Kładę się spać o jedenastej.
Вона приймає душ щоранку.|Ona bierze prysznic każdego ranka.
Ми робимо покупки в суботу.|Robimy zakupy w sobotę.
Він вигулює собаку після вечері.|On wyprowadza psa po kolacji.
Мої діти ходять до школи пішки.|Moje dzieci chodzą do szkoły pieszo.
Я ніколи не п'ю кави ввечері.|Nigdy nie piję kawy wieczorem.
Вона зазвичай читає перед сном.|Ona zwykle czyta przed snem.
Ми часто вечеряємо в ресторані.|Często jemy kolację w restauracji.
Я не працюю на вихідних.|Nie pracuję w weekend.
О котрій ти встаєш?|O której wstajesz?
Як ти їдеш на роботу?|Jak dojeżdżasz do pracy?
Ти готуєш щодня?|Czy gotujesz codziennie?
Мій чоловік щоранку варить каву.|Mój mąż co rano parzy kawę.
`},
{ id: "x3-accusative", t: "Kogo? Co? Biernik", d: "Бачу маму, люблю каву, слухаю музику.", k: "f", i: `
Я бачу {маму}.|Widzę mamę.|мама,мамі
Я люблю {каву}.|Lubię kawę.|кава,кави
Він читає {книгу}.|On czyta książkę.|книга,книзі
Ми купуємо {хліб}.|Kupujemy chleb.|хліба,хлібом|Rzeczowniki męskie nieżywotne w bierniku się nie zmieniają: хліб.
Я маю {сестру}.|Mam siostrę.|сестра,сестрі
Вона п'є {воду}.|Ona pije wodę.|вода,води
Я чекаю {автобус}.|Czekam na autobus.|автобуса,автобусі|Чекати + biernik (można też: чекати на автобус).
Ти знаєш {Андрія}?|Znasz Andrzeja?|Андрій,Андрієві|Męskie żywotne: biernik = dopełniacz (Андрія).
Я люблю {брата}.|Kocham brata.|брат,братові
Діти їдять {морозиво}.|Dzieci jedzą lody.|морозива,морозиві
Я слухаю {музику}.|Słucham muzyki.|музика,музики|Po polsku dopełniacz (muzyki), po ukraińsku biernik (музику).
Вона дивиться {фільм}.|Ona ogląda film.|фільму,фільмі
Ми відвідуємо {бабусю}.|Odwiedzamy babcię.|бабуся,бабусі
Я їм {рибу}.|Jem rybę.|риба,рибі
Він шукає {роботу}.|On szuka pracy.|робота,роботи|Po polsku dopełniacz (pracy), po ukraińsku biernik (роботу).
Я вивчаю {українську} мову.|Uczę się języka ukraińskiego.|українська,української
Ми замовляємо {піцу}.|Zamawiamy pizzę.|піца,піці
Я люблю {тебе}.|Kocham cię.|ти,тобі
Ти бачиш {його}?|Widzisz go?|він,йому
Я знаю {її}.|Znam ją.|вона,їй
`},
{ id: "x3-sent-shop", t: "Zdania: w sklepie i restauracji", d: "Płacenie, przymierzanie, zamawianie.", k: "o", ex: SENT, i: `
Скільки коштують ці черевики?|Ile kosztują te buty?
Можна заплатити карткою?|Czy można zapłacić kartą?
Я тільки дивлюся, дякую.|Tylko się rozglądam, dziękuję.
У вас є більший розмір?|Czy macie większy rozmiar?
Де примірочна?|Gdzie jest przymierzalnia?
Мені каву, будь ласка.|Poproszę kawę.
Можна меню, будь ласка?|Czy mogę prosić menu?
Столик на двох, будь ласка.|Stolik dla dwóch osób, proszę.
Я візьму борщ.|Wezmę barszcz.
Принесіть рахунок, будь ласка.|Proszę przynieść rachunek.
Решти не треба.|Reszty nie trzeba.
Ця сорочка задорога.|Ta koszula jest za droga.
Я шукаю подарунок для мами.|Szukam prezentu dla mamy.
Можна це приміряти?|Czy mogę to przymierzyć?
У вас є вегетаріанські страви?|Czy macie dania wegetariańskie?
Я хочу повернути ці черевики.|Chcę zwrócić te buty.
Суп холодний.|Zupa jest zimna.
Дві кави з собою, будь ласка.|Dwie kawy na wynos, proszę.
Тут поруч є банкомат?|Czy jest tu w pobliżu bankomat?
Це дуже смачно!|To bardzo smaczne!
`},
{ id: "x3-genitive", t: "Kogo? Czego? Dopełniacz", d: "Немає часу, склянка води, з Польщі.", k: "f", i: `
У мене немає {часу}.|Nie mam czasu.|час,часом
Я з {Польщі}.|Jestem z Polski.|Польща,Польщу
Це книга {брата}.|To książka brata.|брат,братові
Немає {молока}.|Nie ma mleka.|молоко,молоком
Я йду до {магазину}.|Idę do sklepu.|магазин,магазині|До + dopełniacz.
Склянка {води}.|Szklanka wody.|вода,воду
Чашка {кави}.|Filiżanka kawy.|кава,каву
Кілограм {яблук}.|Kilogram jabłek.|яблука,яблуко
Біля {будинку} є парк.|Koło domu jest park.|будинок,будинком
Без {цукру}, будь ласка.|Bez cukru, proszę.|цукор,цукром
Я повертаюся з {роботи}.|Wracam z pracy.|робота,роботу
Це дім {батьків}.|To dom rodziców.|батьки,батькам
Після {уроку} ми граємо.|Po lekcji gramy.|урок,уроці
Тут багато {людей}.|Tu jest dużo ludzi.|люди,людям
У мене мало {грошей}.|Mam mało pieniędzy.|гроші,грішми
Це для {мами}.|To dla mamy.|мама,мамі
У {сестри} день народження.|Siostra ma urodziny.|сестра,сестрі
Немає {проблем}.|Nie ma problemu.|проблеми,проблема
Я боюся {собак}.|Boję się psów.|собаки,собакам
Від {вокзалу} до центру десять хвилин.|Z dworca do centrum jest dziesięć minut.|вокзал,вокзалі
`},
{ id: "x3-sent-city", t: "Zdania: jak dojść?", d: "Pytanie o drogę i wskazówki.", k: "o", ex: SENT, i: `
Вибачте, де пошта?|Przepraszam, gdzie jest poczta?
Ідіть прямо.|Proszę iść prosto.
Поверніть ліворуч на світлофорі.|Proszę skręcić w lewo na światłach.
Поверніть праворуч біля аптеки.|Proszę skręcić w prawo przy aptece.
Це на розі.|To jest na rogu.
Банк навпроти церкви.|Bank jest naprzeciwko cerkwi.
Музей поруч із парком.|Muzeum jest obok parku.
Як дійти до вокзалу?|Jak dojść do dworca?
Це далеко?|Czy to daleko?
Це десять хвилин пішки.|To dziesięć minut pieszo.
Перейдіть через міст.|Proszę przejść przez most.
Готель у кінці вулиці.|Hotel jest na końcu ulicy.
Сідайте на п'ятий автобус.|Proszę wsiąść w autobus numer pięć.
Де зупинка тролейбуса?|Gdzie jest przystanek trolejbusu?
Вибачте, я не тутешній.|Przepraszam, nie jestem stąd.
Це праворуч від вас.|To jest po Pana prawej stronie.
Покажіть, будь ласка, на карті.|Proszę pokazać na mapie.
Як проїхати до центру?|Jak dojechać do centrum?
Вам треба вийти на наступній зупинці.|Musi Pan wysiąść na następnym przystanku.
Ми заблукали.|Zabłądziliśmy.
`},
{ id: "x3-dative", t: "Komu? Czemu? Celownik", d: "Мені подобається, дзвоню мамі, дякую вам.", k: "f", i: `
{Мені} подобається Київ.|Podoba mi się Kijów.|Я,Мене
{Тобі} подобається ця музика?|Podoba ci się ta muzyka?|Ти,Тебе
Я дзвоню {мамі}.|Dzwonię do mamy.|мама,маму|Дзвонити комусь – celownik: дзвоню мамі (po polsku „do mamy”).
Я даю книгу {братові}.|Daję książkę bratu.|брат,брата
Допоможи {мені}!|Pomóż mi!|мене,я|Допомагати + celownik.
{Йому} холодно.|Jest mu zimno.|Він,Його
{Їй} двадцять років.|Ona ma dwadzieścia lat.|Вона,Її
{Нам} треба йти.|Musimy iść.|Ми,Нас|Треба = trzeba: нам треба (musimy).
{Вам} допомогти?|Pomóc Panu?|Ви,Вас
Я пишу {подрузі}.|Piszę do przyjaciółki.|подруга,подругу
Скажи {батькові}.|Powiedz ojcu.|батько,батька
Дякую {вам}.|Dziękuję Panu.|ви,вас|Дякувати + celownik: дякую тобі, дякую вам.
{Дітям} подобаються мультфільми.|Dzieci lubią bajki.|Діти,Дітей
Я купую подарунок {сестрі}.|Kupuję prezent siostrze.|сестра,сестру
{Мені} шкода.|Przykro mi.|Я,Мій
{Тобі} треба відпочити.|Musisz odpocząć.|Ти,Тебе
{Їм} не можна палити.|Nie wolno im palić.|Вони,Їх
Я вірю {тобі}.|Wierzę ci.|тебе,ти
Вчитель пояснює {учням}.|Nauczyciel tłumaczy uczniom.|учні,учнів
{Мені} сумно.|Smutno mi.|Я,Мене
`},
{ id: "x3-sent-like", t: "Zdania: co lubię?", d: "Upodobania i czas wolny.", k: "o", ex: SENT, i: `
Я люблю читати книжки.|Lubię czytać książki.
Вона дуже любить танцювати.|Ona bardzo lubi tańczyć.
Він не любить холодну погоду.|On nie lubi zimnej pogody.
Мені подобається гуляти в лісі.|Lubię spacerować po lesie.
Ти любиш плавати?|Lubisz pływać?
Мій улюблений спорт – волейбол.|Mój ulubiony sport to siatkówka.
Я цікавлюся історією.|Interesuję się historią.
Вона добре малює.|Ona dobrze rysuje.
Я погано готую.|Słabo gotuję.
Що ти робиш у вільний час?|Co robisz w wolnym czasie?
Я граю на гітарі.|Gram na gitarze.
Він збирає старі монети.|On zbiera stare monety.
Мій син щодня грає в комп'ютерні ігри.|Mój syn codziennie gra w gry komputerowe.
Я ходжу в спортзал тричі на тиждень.|Chodzę na siłownię trzy razy w tygodniu.
Хочеш піти в кіно?|Chcesz pójść do kina?
Я більше люблю чай, ніж каву.|Bardziej lubię herbatę niż kawę.
Вони не люблять фільми жахів.|Oni nie lubią horrorów.
Твоя сестра любить тварин?|Czy twoja siostra lubi zwierzęta?
Мені дуже подобається ця пісня.|Bardzo podoba mi się ta piosenka.
Ми любимо подорожувати.|Lubimy podróżować.
`},
{ id: "x3-direction", t: "Dokąd? Skąd? Przyimki", d: "До школи, на роботу, з Польщі, від мами.", k: "f", i: `
Я йду {до} школи.|Idę do szkoły.|в,на|До + dopełniacz: до школи.
Ми їдемо {в} Київ.|Jedziemy do Kijowa.|до,на|Do miasta: їхати в (у) Київ albo до Києва.
Він іде {на} роботу.|On idzie do pracy.|в,до|„Do pracy” to po ukraińsku на роботу.
Вони йдуть {у} кіно.|Oni idą do kina.|на,до
Ми йдемо {на} концерт.|Idziemy na koncert.|в,до
Я повертаюся {з} роботи.|Wracam z pracy.|від,до
Я йду {до} лікаря.|Idę do lekarza.|в,на
Це лист {від} мами.|To list od mamy.|з,до|Від = od (osoby), з = z (miejsca).
Вона приїхала {з} Польщі.|Przyjechała z Polski.|від,до
Поклади книгу {на} стіл.|Połóż książkę na stół.|в,до
Ми йдемо {в} парк.|Idziemy do parku.|на,з
Я їду {на} море.|Jadę nad morze.|в,до|„Nad morze” to на море.
Діти біжать {до} мами.|Dzieci biegną do mamy.|в,на
Я виходжу {з} дому.|Wychodzę z domu.|від,до
Вони переїхали {в} нове місто.|Przeprowadzili się do nowego miasta.|на,з
Ходімо {на} каву!|Chodźmy na kawę!|в,до
Я йду {через} парк.|Idę przez park.|по,на
Ми гуляємо {по} місту.|Spacerujemy po mieście.|через,на|По + celownik: по місту.
Я стою {біля} вікна.|Stoję przy oknie.|до,на
Кіт сидить {під} столом.|Kot siedzi pod stołem.|над,на
`},
{ id: "x3-sent-now", t: "Zdania: co się dzieje teraz?", d: "Teraz, w tej chwili, znowu.", k: "o", ex: SENT, i: `
Зараз я готую обід.|Teraz gotuję obiad.|Я зараз готую обід.
Вона розмовляє по телефону.|Ona rozmawia przez telefon.
Діти граються на вулиці.|Dzieci bawią się na dworze.
Знову йде сніг.|Znowu pada śnieg.
Ми чекаємо на автобус.|Czekamy na autobus.
Що ти читаєш?|Co czytasz?
Він мене не слухає.|On mnie nie słucha.
Ти дивишся цей фільм?|Oglądasz ten film?
Я шукаю свої окуляри.|Szukam swoich okularów.
Чому вона плаче?|Dlaczego ona płacze?
Світить сонце.|Świeci słońce.
Тут будують нову школу.|Tu budują nową szkołę.
Я сьогодні погано почуваюся.|Źle się dziś czuję.
З ким ти розмовляєш?|Z kim rozmawiasz?
Ми зараз обідаємо.|Teraz jemy obiad.
На вулиці йде дощ?|Czy na dworze pada deszcz?
Телефон дзвонить.|Telefon dzwoni.
Мій брат вчиться водити машину.|Mój brat uczy się prowadzić samochód.
Ти стоїш на моїй нозі!|Stoisz na mojej nodze!
Вода кипить.|Woda się gotuje.
`}
]);
})();
