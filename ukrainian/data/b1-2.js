/* Etap 5 – gramatyka, zdania i fałszywi przyjaciele (B1). */
(function () {
var SENT = ["order", "pl2en", "order", "en2pl", "listen"];
ADD("s5", [
{ id: "x5-cond", t: "Tryb warunkowy", d: "Якби я мав час, я б допоміг.", k: "f", i: `
Якби я мав час, я б {допоміг} тобі.|Gdybym miał czas, pomógłbym ci.|допоможу,допомагаю|Tryb warunkowy: czas przeszły + б (би): я б допоміг.
{Якби} я був багатий, я б подорожував.|Gdybym był bogaty, podróżowałbym.|Якщо,Коли|Якби = gdyby (nierealne), якщо = jeśli (realne).
{Якщо} буде дощ, ми залишимося вдома.|Jeśli będzie padać, zostaniemy w domu.|Якби,Щоб
Я б {купив} цю машину, якби мав гроші.|Kupiłbym ten samochód, gdybym miał pieniądze.|куплю,купую
Якби ти {знав}, ти б не питав.|Gdybyś wiedział, nie pytałbyś.|знаєш,знатимеш
Що б ти {зробив} на моєму місці?|Co byś zrobił na moim miejscu?|зробиш,робиш
Якби не дощ, ми б {пішли} гуляти.|Gdyby nie deszcz, poszlibyśmy na spacer.|підемо,йдемо
Якщо ти {прийдеш}, я буду радий.|Jeśli przyjdziesz, będę zadowolony.|прийшов,приходив
Я хотів {би} поговорити з вами.|Chciałbym z Panem porozmawiać.|буде,був|Хотів би = chciałbym (uprzejma prośba).
Чи не могли б ви {допомогти}?|Czy mógłby Pan pomóc?|допоможете,допомагаєте
Якби вона {вчилася}, вона б склала іспит.|Gdyby się uczyła, zdałaby egzamin.|вчиться,вчитиметься
Було б {добре}, якби ти прийшов.|Byłoby dobrze, gdybyś przyszedł.|добрий,добра
{Якби} я був тобою, я б погодився.|Gdybym był tobą, zgodziłbym się.|Якщо,Хоча
Якщо {захочеш}, подзвони мені.|Jeśli zechcesz, zadzwoń do mnie.|захотів,хотів би
Я б {випив} кави.|Napiłbym się kawy.|вип'ю,п'ю
Якби ми {вийшли} раніше, ми б не запізнилися.|Gdybyśmy wyszli wcześniej, nie spóźnilibyśmy się.|вийдемо,виходимо
Ми б поїхали на море, {якби} була відпустка.|Pojechalibyśmy nad morze, gdybyśmy mieli urlop.|якщо,коли
Якщо {тобі} холодно, закрий вікно.|Jeśli ci zimno, zamknij okno.|ти,тебе
Вона б {прийшла}, але захворіла.|Przyszłaby, ale zachorowała.|прийде,приходить
Якби я {міг}, я б полетів.|Gdybym mógł, poleciałbym.|можу,зможу
`},
{ id: "x5-sent-exp", t: "Zdania: doświadczenia", d: "Nigdy, już, jeszcze nie, ostatnio.", k: "o", ex: SENT, i: `
Я ніколи не був в Азії.|Nigdy nie byłem w Azji.
Ти колись їв равликів?|Jadłeś kiedyś ślimaki?
Вона живе в Лондоні вже п'ять років.|Ona mieszka w Londynie już od pięciu lat.
Ми знайомі ще зі школи.|Znamy się jeszcze ze szkoły.
Я щойно закінчив роботу.|Właśnie skończyłem pracę.
Він мені ще не подзвонив.|Jeszcze do mnie nie zadzwonił.
Ти не бачив моїх окулярів?|Nie widziałeś moich okularów?
Вони вже пішли.|Oni już wyszli.
Я загубив гаманець.|Zgubiłem portfel.
Я вперше лечу літаком.|Pierwszy raz lecę samolotem.
Скільки років ви одружені?|Ile lat jesteście małżeństwem?
Вона зламала ногу.|Złamała nogę.
Я читав цю книгу тричі.|Czytałem tę książkę trzy razy.
Ми не бачилися роками.|Nie widzieliśmy się od lat.
Фільм уже почався?|Czy film już się zaczął?
Мої батьки ніколи не були в Америці.|Moi rodzice nigdy nie byli w Ameryce.
Останнім часом я дуже зайнятий.|Ostatnio jestem bardzo zajęty.
Ціни зросли.|Ceny wzrosły.
Я передумав.|Zmieniłem zdanie.
Ти вже допив каву?|Już dopiłeś kawę?
`},
{ id: "x5-imperative", t: "Tryb rozkazujący", d: "Читай! Сідайте! Давай! Ходімо!", k: "f", i: `
{Читай} уважно!|Czytaj uważnie!|Читає,Читати|Tryb rozkazujący: читай (ty), читайте (wy / Pan).
{Сідайте}, будь ласка.|Proszę usiąść.|Сідає,Сідати
{Говоріть} повільніше.|Proszę mówić wolniej.|Говорять,Говорити
{Дай} мені ручку.|Daj mi długopis.|Даєш,Дати
Не {кури} тут!|Nie pal tutaj!|курить,курити
{Іди} сюди!|Chodź tutaj!|Йде,Йти
{Давай} підемо в кіно!|Chodźmy do kina!|Даєш,Дати|Давай + czasownik = zachęta: chodźmy, zróbmy.
{Ходімо} додому!|Chodźmy do domu!|Ходимо,Ходити|Ходімо = chodźmy.
{Подивіться} на це!|Proszę na to spojrzeć!|Дивляться,Подивитися
Не {хвилюйся}!|Nie martw się!|хвилюєшся,хвилюватися
{Будь} обережний!|Bądź ostrożny!|Будеш,Бути
{Будьте} ласкаві, зачекайте.|Proszę być łaskawym i zaczekać.|Будете,Бути
{Напиши} мені завтра.|Napisz do mnie jutro.|Напишеш,Написати
{Подзвоніть} мені ввечері.|Proszę do mnie zadzwonić wieczorem.|Подзвоните,Подзвонити
{Зачиніть} двері, будь ласка.|Proszę zamknąć drzwi.|Зачините,Зачинити
Не {забудь} парасольку!|Nie zapomnij parasola!|забудеш,забути
{Їж} овочі!|Jedz warzywa!|Їси,Їсти
{Пий} більше води.|Pij więcej wody.|П'єш,Пити
{Допоможи} мені, будь ласка.|Pomóż mi, proszę.|Допоможеш,Допомогти
{Послухай} мене!|Posłuchaj mnie!|Послухаєш,Послухати
`},
{ id: "x5-sent-work", t: "Zdania: w pracy", d: "Zebrania, terminy, e-maile.", k: "o", ex: SENT, i: `
Я працюю у великій міжнародній компанії.|Pracuję w dużej międzynarodowej firmie.
Я відповідаю за обслуговування клієнтів.|Odpowiadam za obsługę klienta.
У мене нарада о десятій.|Mam zebranie o dziesiątej.
Надішліть мені звіт, будь ласка.|Proszę przesłać mi raport.
Термін – наступна п'ятниця.|Termin mija w przyszły piątek.
Сьогодні я працюю з дому.|Dziś pracuję z domu.
Минулого місяця її підвищили.|W zeszłym miesiącu dostała awans.
Нам треба найняти більше людей.|Musimy zatrudnić więcej ludzi.
Він подав резюме в банк.|Złożył CV w banku.
Мій начальник дуже вимогливий.|Mój szef jest bardzo wymagający.
Я хочу попросити про підвищення зарплати.|Chcę poprosić o podwyżkę.
Співбесіда пройшла дуже добре.|Rozmowa kwalifikacyjna poszła bardzo dobrze.
Зазвичай я починаю роботу о восьмій.|Zwykle zaczynam pracę o ósmej.
Можемо перенести нараду?|Czy możemy przełożyć zebranie?
Завтра мене не буде в офісі.|Jutro nie będzie mnie w biurze.
Вона працює на півставки.|Ona pracuje na pół etatu.
У мене великий досвід у продажах.|Mam duże doświadczenie w sprzedaży.
Дякую за ваш лист.|Dziękuję za Pana list.
Чекаю на вашу відповідь.|Czekam na Pana odpowiedź.
Документ у вкладенні.|Dokument jest w załączniku.
`},
{ id: "x5-relative", t: "Який, яка, яке, де, чий", d: "Zdania względne: który, gdzie, czyj.", k: "f", i: `
Це чоловік, {який} мені допоміг.|To mężczyzna, który mi pomógł.|яка,яке|Який / яка / яке / які = który / która / które / którzy.
Це книга, {яку} я читаю.|To książka, którą czytam.|який,яка
Ось місто, {де} я народився.|Oto miasto, w którym się urodziłem.|куди,яке
Жінка, {чий} син – лікар.|Kobieta, której syn jest lekarzem.|яка,чия|Чий / чия / чиє zgadza się z rzeczownikiem po nim (син → чий).
Друзі, {які} живуть у Києві.|Przyjaciele, którzy mieszkają w Kijowie.|який,яка
Машина, {яку} я купив, червона.|Samochód, który kupiłem, jest czerwony.|який,яке|Машина jest rodzaju żeńskiego → яку.
Дівчина, {яка} розмовляє з Томом.|Dziewczyna, która rozmawia z Tomem.|який,які
Готель, {у якому} ми зупинилися.|Hotel, w którym się zatrzymaliśmy.|який,якому
Фільм, {який} ми бачили, був чудовий.|Film, który widzieliśmy, był świetny.|яку,яке
Все, {що} він сказав, правда.|Wszystko, co powiedział, jest prawdą.|який,яке
Люди, {які} працюють тут, дуже милі.|Ludzie, którzy tu pracują, są bardzo mili.|який,яка
Вчитель, {якого} я поважаю.|Nauczyciel, którego szanuję.|який,якому
Подруга, {якій} я подарувала квіти.|Przyjaciółka, której dałam kwiaty.|яка,яку
Місце, {куди} ми їдемо.|Miejsce, do którego jedziemy.|де,звідки
Я не знаю, {хто} це.|Nie wiem, kto to.|що,який
Скажи, {що} ти хочеш.|Powiedz, czego chcesz.|хто,який
Будинок, {який} ми бачимо, дуже старий.|Budynek, który widzimy, jest bardzo stary.|яку,яке
Це той хлопець, {про якого} я говорив.|To ten chłopak, o którym mówiłem.|який,якому
Ресторан, {де} ми познайомилися.|Restauracja, w której się poznaliśmy.|куди,звідки
Діти, {чиї} батьки працюють.|Dzieci, których rodzice pracują.|чий,чия
`},
{ id: "x5-sent-opinion", t: "Zdania: opinie", d: "Zgadzam się, nie sądzę, to zależy.", k: "o", ex: SENT, i: `
На мою думку, палити треба заборонити.|Moim zdaniem palenia trzeba zakazać.
Не думаю, що це гарна ідея.|Nie sądzę, żeby to był dobry pomysł.
Я повністю з тобою згоден.|Całkowicie się z tobą zgadzam.
Я не впевнений, що це правда.|Nie jestem pewien, czy to prawda.
Це залежить від погоди.|To zależy od pogody.
Чесно кажучи, фільм мені не сподобався.|Szczerze mówiąc, film mi się nie podobał.
Що ти про це думаєш?|Co o tym myślisz?
Думаю, нам уже час іти.|Myślę, że czas już iść.
Для мене це задорого.|Dla mnie to za drogie.
Я більше люблю жити в місті.|Wolę mieszkać w mieście.
Є переваги й недоліки.|Są zalety i wady.
Дехто вважає, що гроші – це все.|Niektórzy uważają, że pieniądze to wszystko.
Сьогодні я краще залишуся вдома.|Dziś wolę zostać w domu.
Ти абсолютно маєш рацію.|Masz absolutną rację.
Я розумію тебе, але не згоден.|Rozumiem cię, ale się nie zgadzam.
Це варто побачити.|Warto to zobaczyć.
Для мене це не має значення.|Dla mnie to nie ma znaczenia.
Я терпіти не можу гучної музики.|Nie znoszę głośnej muzyki.
Фільм був кращий, ніж я думав.|Film był lepszy, niż myślałem.
Поняття не маю.|Nie mam pojęcia.
`},
{ id: "x5-motion", t: "Czasowniki ruchu", d: "Іти czy ходити? Їхати czy їздити?", k: "f", i: `
Щодня я {ходжу} на роботу пішки.|Codziennie chodzę do pracy pieszo.|йду,їду|Ходити – regularnie; йти – teraz, w jednym kierunku.
Зараз я {йду} в магазин.|Teraz idę do sklepu.|ходжу,їжджу
Ми часто {їздимо} до бабусі.|Często jeździmy do babci.|їдемо,ходимо|Їздити – regularnie; їхати – teraz albo jednorazowo.
Завтра ми {їдемо} в Карпати.|Jutro jedziemy w Karpaty.|їздимо,ходимо
Він {ходить} у спортзал тричі на тиждень.|Chodzi na siłownię trzy razy w tygodniu.|йде,їде
Куди ти {йдеш}?|Dokąd idziesz?|ходиш,їздиш
Діти вже {ходять} до школи.|Dzieci już chodzą do szkoły.|йдуть,їдуть
Птахи {летять} на південь.|Ptaki lecą na południe.|літають,ходять
Він {літає} до Лондона щомісяця.|Lata do Londynu co miesiąc.|летить,йде
Я {несу} важку сумку.|Niosę ciężką torbę.|ношу,везу
Вона завжди {носить} окуляри.|Ona zawsze nosi okulary.|несе,веде
Тато {везе} нас на вокзал.|Tata wiezie nas na dworzec.|возить,несе
Мама {водить} дітей у садок.|Mama prowadza dzieci do przedszkola.|веде,везе
Зараз мама {веде} сина до лікаря.|Teraz mama prowadzi syna do lekarza.|водить,возить
Я люблю {плавати}.|Lubię pływać.|пливти,летіти
Він уміє {водити} машину.|On umie prowadzić samochód.|вести,везти
Ми {бігаємо} щоранку.|Biegamy każdego ranka.|біжимо,ходимо
Дивись, він {біжить} до нас!|Patrz, biegnie do nas!|бігає,ходить
Учора я {ходив} у кіно.|Wczoraj byłem w kinie.|йшов,їхав|Ходив у кіно = byłem w kinie (poszedłem i wróciłem).
Коли я {йшов} додому, пішов дощ.|Kiedy szedłem do domu, zaczął padać deszcz.|ходив,їздив
`},
{ id: "x5-sent-cond", t: "Zdania: jeśli… gdyby…", d: "Якщо i якби w pełnych zdaniach.", k: "o", ex: SENT, i: `
Якщо будеш старанно вчитися, складеш іспит.|Jeśli będziesz pilnie się uczyć, zdasz egzamin.
Якщо матиму час, подзвоню.|Jeśli będę miał czas, zadzwonię.
Якби я виграв у лотерею, я б подорожував.|Gdybym wygrał na loterii, podróżowałbym.
Якби я був багатий, я б купив човен.|Gdybym był bogaty, kupiłbym łódź.
Що б ти зробив, якби втратив роботу?|Co byś zrobił, gdybyś stracił pracę?
Якщо вона подзвонить, скажи, що я зайнятий.|Jeśli zadzwoni, powiedz, że jestem zajęty.
Я б тобі допоміг, якби міг.|Pomógłbym ci, gdybym mógł.
Якщо не поспішимо, запізнимося.|Jeśli się nie pospieszymy, spóźnimy się.
На твоєму місці я б цього не робив.|Na twoim miejscu bym tego nie robił.
Якщо завтра буде сонячно, підемо на пляж.|Jeśli jutro będzie słonecznie, pójdziemy na plażę.
Якби в мене була машина, я б їздив на роботу.|Gdybym miał samochód, jeździłbym do pracy.
Ти б жив за кордоном, якби міг?|Mieszkałbyś za granicą, gdybyś mógł?
Якщо потрібна допомога, просто скажи.|Jeśli potrzebujesz pomocy, po prostu powiedz.
Якби він знав відповідь, він би сказав.|Gdyby znał odpowiedź, powiedziałby.
Якщо змішати червоний і синій, буде фіолетовий.|Jeśli zmiesza się czerwony i niebieski, wyjdzie fioletowy.
Я розсерджуся, якщо ти знову запізнишся.|Zezłoszczę się, jeśli znowu się spóźnisz.
Якби я краще говорив англійською, я б мав кращу роботу.|Gdybym lepiej mówił po angielsku, miałbym lepszą pracę.
Що ти робитимеш, якщо піде дощ?|Co będziesz robić, jeśli zacznie padać?
Якби в мене було більше часу, я б більше читав.|Gdybym miał więcej czasu, czytałbym więcej.
Було б чудово, якби ти прийшов.|Byłoby wspaniale, gdybyś przyszedł.
`},
{ id: "x5-numnouns", t: "Liczebnik + rzeczownik", d: "Два брати, п'ять котів, двадцять один рік.", k: "f", i: `
У мене два {брати}.|Mam dwóch braci.|брата,братів|Po 2, 3, 4 – mianownik liczby mnogiej (два брати).
У нас п'ять {котів}.|Mamy pięć kotów.|коти,кота|Po 5 i więcej – dopełniacz liczby mnogiej (п'ять котів).
Це три {сестри}.|To trzy siostry.|сестер,сестра
Зачекай десять {хвилин}.|Poczekaj dziesięć minut.|хвилини,хвилина
Фільм триває одну {годину}.|Film trwa jedną godzinę.|години,годин
Ми чекали дві {години}.|Czekaliśmy dwie godziny.|година,годин
Я спав шість {годин}.|Spałem sześć godzin.|години,година
Мені двадцять один {рік}.|Mam dwadzieścia jeden lat.|роки,років|21, 31… – liczba pojedyncza (двадцять один рік).
Йому двадцять два {роки}.|Ma dwadzieścia dwa lata.|рік,років
Їй тридцять {років}.|Ma trzydzieści lat.|рік,роки
Ми там були чотири {дні}.|Byliśmy tam cztery dni.|днів,день
Відпустка триває сім {днів}.|Urlop trwa siedem dni.|дні,день
Там стоять {два} чоловіки.|Tam stoi dwóch mężczyzn.|дві,двоє|Два – z rzeczownikami męskimi i nijakimi, дві – z żeńskimi.
Там стоять {дві} жінки.|Tam stoją dwie kobiety.|два,двоє
У кімнаті два {вікна}.|W pokoju są dwa okna.|вікон,вікно
У будинку п'ять {вікон}.|W domu jest pięć okien.|вікна,вікно
Скільки тут {людей}?|Ile tu jest osób?|люди,людина
Це коштує сто {гривень}.|To kosztuje sto hrywien.|гривні,гривня
Це коштує три {гривні}.|To kosztuje trzy hrywny.|гривень,гривня
У мене багато {друзів}.|Mam wielu przyjaciół.|друзі,друг
`},
{ id: "x5-falsefr1", t: "Fałszywi przyjaciele 1", d: "Склеп to nie sklep, a дружина to nie drużyna!", k: "m", i: `
склеп|grobowiec (krypta)|sklep,składzik|Sklep to po ukraińsku магазин.
дружина|żona|drużyna,druhna|Drużyna to команда.
живіт|brzuch|żywot (życie),żywność|Życie to життя.
урок|lekcja|urok (wdzięk),urodziny|Urok to чарівність.
диня|melon|dynia,dynamit|Dynia to гарбуз.
гарбуз|dynia|arbuz,garbus|Arbuz to кавун.
овоч|warzywo|owoc,owies|Owoc to фрукт.
хвиля|fala|chwila,chwiejność|Chwila to мить.
уряд|rząd|urząd,urodzaj|Urząd to установа.
держава|państwo|dzierżawa,drzewo|Dzierżawa to оренда.
пенсія|emerytura|pensja,pensjonat|Pensja to зарплата.
стілець|krzesło|stolec,stolik|Polski „stolec” to zupełnie co innego!
кит|wieloryb|kit (do okien),kot|Kit do okien to шпаклівка.
аварія|wypadek (drogowy)|awaria,awantura|Awaria to поломка.
грубий|niegrzeczny (szorstki)|gruby,grubas|Gruby to товстий.
мир|pokój (brak wojny)|mir (poważanie),mirra|„Mir” (poważanie) to повага.
вечеря|kolacja|wieczór,wieczorek|Wieczór to вечір.
гроші|pieniądze|grosze,groch|Grosze to копійки.
сім'я|rodzina|siemię,siedem|Siedem to сім.
питання|pytanie|picie,pitny|Picie to пиття.
`},
{ id: "x5-falsefr2", t: "Fałszywi przyjaciele 2", d: "Пиріг to nie pieróg, a туман to nie tuman!", k: "m", i: `
лист|list / liść|lista,listopad|Lista to список.
краватка|krawat|kratka,karawan|Kratka to клітинка.
полиця|półka|policja,polityka|Policja to поліція.
ліжко|łóżko|łyżka,lizak|Łyżka to ложка.
ложка|łyżka|łóżko,loża|Łóżko to ліжко.
дід|dziadek|dziad (żebrak),dzida|Dziad (żebrak) to жебрак.
вродливий|przystojny (piękny)|wrodzony,uprzejmy|Wrodzony to вроджений.
уважний|uważny|ważny,poważny|Ważny to важливий.
важливий|ważny|ważący,uważny|Uważny to уважний.
справа|sprawa (także: po prawej)|sprawny,prawo|Prawo (przepisy) to закон / право.
пиріг|placek (ciasto)|pieróg,pierożek|Pierogi to вареники.
двір|podwórko|dwór szlachecki,drzwi|Dwór szlachecki to садиба.
лікарня|szpital|lekarstwo,likier|Lekarstwo to ліки.
квітка|kwiat|kwitek,kwita|Kwitek to квитанція.
заява|podanie (wniosek)|zjawa,zjawisko|Zjawa to привид.
фамілія|nazwisko (potocznie)|familia (rodzina),famulus|Poprawnie „nazwisko” to прізвище, a rodzina to родина.
радий|zadowolony|radny,radio|Radny to депутат.
сало|słonina|sałata,salon|Sałata to салат.
туман|mgła|tuman (głupiec),tumult|Polski „tuman” to дурень.
гарний|ładny|garnek,gwarny|Garnek to каструля.
`}
]);
})();
