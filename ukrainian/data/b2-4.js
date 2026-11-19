/* Etap 7 – gramatyka, zdania i idiomy (B2). */
(function () {
var SENT = ["order", "pl2en", "order", "en2pl", "listen"];
var CHOICE = ["en2pl", "pl2en", "listen"];
ADD("s7", [
{ id: "x7-aspect2", t: "Aspekt w praktyce", d: "Robiłem czy zrobiłem? Kupuję czy kupię?", k: "f", i: `
Я цілий вечір {писав} лист.|Cały wieczór pisałem list.|написав,напишу|Czynność trwająca (cały wieczór) – aspekt niedokonany.
Я вже {написав} лист.|Już napisałem list.|писав,пишу|Rezultat (już) – aspekt dokonany.
Щоранку я {п'ю} каву.|Każdego ranka piję kawę.|вип'ю,випив|Czynność powtarzana – niedokonany.
Зараз я {вип'ю} ліки і ляжу.|Zaraz wezmę leki i się położę.|п'ю,пив
Він довго {шукав} ключі.|Długo szukał kluczy.|знайшов,знайде
Нарешті він {знайшов} ключі.|W końcu znalazł klucze.|шукав,шукає
Завтра я {куплю} квитки.|Jutro kupię bilety.|купую,купував|Dokonany w czasie „teraźniejszym” = przyszłość: куплю.
Я завжди {купую} хліб у цій пекарні.|Zawsze kupuję chleb w tej piekarni.|куплю,купив
Не {відчиняй} вікно, холодно.|Nie otwieraj okna, jest zimno.|відчини,відчинив|Zakaz (не + rozkaz) – zwykle niedokonany.
{Відчини}, будь ласка, вікно.|Otwórz, proszę, okno.|Відчиняй,Відчиняв
Поки я {готував} вечерю, діти гралися.|Kiedy gotowałem kolację, dzieci się bawiły.|приготував,приготую
Коли я {приготував} вечерю, ми сіли їсти.|Kiedy przygotowałem kolację, usiedliśmy do jedzenia.|готував,готую
Я буду {чекати} на тебе.|Będę na ciebie czekać.|зачекати,почекав|Буду + bezokolicznik – tylko niedokonany.
Ти {зможеш} прийти завтра?|Będziesz mógł przyjść jutro?|можеш,міг
Я {вчу} українську вже рік.|Uczę się ukraińskiego już od roku.|вивчу,вивчив
Я {вивчив} усі слова.|Nauczyłem się wszystkich słów.|вчив,вчу
Він часто {забуває} телефон.|Często zapomina telefonu.|забуде,забув
Я {забув} телефон удома.|Zapomniałem telefonu z domu.|забуваю,забуватиму
Ми щодня {телефонуємо} бабусі.|Codziennie dzwonimy do babci.|зателефонуємо,зателефонували
Я {зателефоную} тобі ввечері.|Zadzwonię do ciebie wieczorem.|телефоную,телефонував
`},
{ id: "x7-numcase", t: "Liczebniki i przypadki", d: "Два студенти, п'ять студентів, без трьох хвилин.", k: "f", i: `
У мене два {брати}.|Mam dwóch braci.|брата,братів|2, 3, 4 + mianownik liczby mnogiej: два брати.
У мене п'ять {братів}.|Mam pięciu braci.|брати,брата|5 i więcej + dopełniacz l.mn.: п'ять братів.
Я купив три {книжки}.|Kupiłem trzy książki.|книжок,книжка
Я прочитав десять {книжок}.|Przeczytałem dziesięć książek.|книжки,книжка
На столі одна {чашка}.|Na stole jest jedna filiżanka.|чашки,чашок
У класі двадцять один {учень}.|W klasie jest dwudziestu jeden uczniów.|учні,учнів|Liczebnik kończący się na 1 (21, 31) – liczba pojedyncza: двадцять один учень.
У класі двадцять два {учні}.|W klasie jest dwudziestu dwóch uczniów.|учень,учнів
Мені тридцять п'ять {років}.|Mam trzydzieści pięć lat.|роки,рік
Йому двадцять один {рік}.|Ma dwadzieścia jeden lat.|роки,років
Їй двадцять три {роки}.|Ma dwadzieścia trzy lata.|рік,років
Це коштує сто {гривень}.|To kosztuje sto hrywien.|гривні,гривня
Це коштує дві {гривні}.|To kosztuje dwie hrywny.|гривень,гривня
Я чекав двадцять {хвилин}.|Czekałem dwadzieścia minut.|хвилини,хвилина
Зустріч триватиме дві {години}.|Spotkanie potrwa dwie godziny.|годин,година
Він був там чотири {дні}.|Był tam cztery dni.|днів,день
Ми відпочивали чотирнадцять {днів}.|Odpoczywaliśmy czternaście dni.|дні,день|11–19 zawsze z dopełniaczem l.mn.: чотирнадцять днів.
У групі дві {дівчини}.|W grupie są dwie dziewczyny.|дівчат,дівчина
У групі шість {дівчат}.|W grupie jest sześć dziewczyn.|дівчини,дівчина
Кілька {людей} чекали на вулиці.|Kilka osób czekało na ulicy.|люди,людина|Кілька, багато, мало + dopełniacz l.mn.
Багато {студентів} живе в гуртожитку.|Wielu studentów mieszka w akademiku.|студенти,студент
`},
{ id: "x7-reflexive", t: "Czasowniki zwrotne -ся", d: "Вчитися, сміятися, здається, вдалося.", k: "f", i: `
Я {вчуся} в університеті.|Studiuję na uniwersytecie.|вчу,вчить|Вчитися = uczyć się (studiować); вчити = uczyć (się) czegoś konkretnego.
Діти голосно {сміються}.|Dzieci głośno się śmieją.|сміють,сміється
Як тебе {звуть}?|Jak masz na imię?|звуться,звешся|Мене звуть… – bez -ся.
Мені {здається}, що буде дощ.|Wydaje mi się, że będzie padać.|здає,здаються
Нам {вдалося} купити квитки.|Udało nam się kupić bilety.|вдало,вдалися
Магазин {відчиняється} о дев'ятій.|Sklep otwiera się o dziewiątej.|відчиняє,відчиняються
Фільм {починається} о восьмій.|Film zaczyna się o ósmej.|починає,починаються
Урок {закінчився}.|Lekcja się skończyła.|закінчив,закінчилася|Урок – rodzaj męski: закінчився.
Ми {зустрілися} біля метро.|Spotkaliśmy się przy metrze.|зустріли,зустрівся
Він довго {голився}.|Długo się golił.|голив,голилася
Не {турбуйтеся}, я сам.|Proszę się nie martwić, ja sam.|турбуйте,турбуєтеся
Я {повертаюся} о шостій.|Wracam o szóstej.|повертаю,повертається
Ти {одягнувся}?|Ubrałeś się?|одягнув,одягнулася
Вона {посміхнулася} мені.|Uśmiechnęła się do mnie.|посміхнула,посміхнувся
Двері {зачинилися}.|Drzwi się zamknęły.|зачинили,зачинилася
Ми {познайомилися} на роботі.|Poznaliśmy się w pracy.|познайомили,познайомився
Він {розлучився} з дружиною.|Rozwiódł się z żoną.|розлучив,розлучилася
Я не {соромлюся} цього.|Nie wstydzę się tego.|соромлю,соромиться
Ціни {змінюються} щодня.|Ceny zmieniają się codziennie.|змінюють,змінюється
Мені не {хочеться} йти.|Nie chce mi się iść.|хочу,хочемо|Мені хочеться = chce mi się.
`},
{ id: "x7-imperative2", t: "Rozkaz: uprzejmie i stanowczo", d: "Давай підемо! Хай він зайде. Не забудьте!", k: "f", i: `
{Давай} підемо в кіно!|Chodźmy do kina!|Дай,Давати|Давай / давайте + czasownik = zróbmy coś.
{Давайте} познайомимося!|Poznajmy się! (grzecznie)|Дайте,Давали
{Хай} він зайде пізніше.|Niech on wejdzie później.|Давай,Дай|Хай (нехай) + 3. osoba = niech.
{Нехай} буде так.|Niech tak będzie.|Давайте,Дайте
Не {забудьте} паспорт!|Nie zapomnijcie paszportu!|забудете,забули
{Сідайте}, будь ласка.|Proszę siadać.|Сідаєте,Сіли
{Прошу} до столу!|Zapraszam do stołu!|Просіть,Просив
{Покажіть}, будь ласка, де це.|Proszę pokazać, gdzie to jest.|Покажете,Показали
{Скажіть}, будь ласка, котра година?|Proszę powiedzieć, która godzina?|Скажете,Сказали
{Почекайте} хвилинку.|Proszę chwileczkę poczekać.|Почекаєте,Почекали
{Ходімо} додому.|Chodźmy do domu.|Ходили,Ходить|Ходімо = chodźmy (forma 1. os. l.mn.).
{Будьте} обережні!|Bądźcie ostrożni!|Будете,Були
{Не кури} тут!|Nie pal tutaj!|Не куриш,Не курив
{Зачекай}, я з тобою!|Poczekaj, idę z tobą!|Зачекаєш,Зачекав
{Передайте} привіт мамі.|Proszę przekazać pozdrowienia mamie.|Передасте,Передали
{Заходьте}, не соромтеся.|Proszę wejść, nie krępujcie się.|Заходите,Зайшли
{Їжте}, поки гаряче.|Jedzcie, póki gorące.|Їсте,Їли
{Пиши} мені частіше.|Pisz do mnie częściej.|Пишеш,Писав
`},
{ id: "x7-sent-travel", t: "Zdania: podróże zaawansowane", d: "Przesiadka, opóźnienie, zakwaterowanie.", k: "o", ex: SENT, i: `
Наш рейс затримали на три години.|Nasz lot opóźnili o trzy godziny.
У Варшаві в нас пересадка.|W Warszawie mamy przesiadkę.
Я ледь не запізнився на потяг.|Prawie spóźniłem się na pociąg.
Ми забронювали житло заздалегідь.|Zarezerwowaliśmy nocleg z wyprzedzeniem.
На кордоні була величезна черга.|Na granicy była ogromna kolejka.
Митник перевірив наш багаж.|Celnik sprawdził nasz bagaż.
Ми заблукали в старому місті.|Zgubiliśmy się na starym mieście.
Місцеві жителі нам допомогли.|Miejscowi nam pomogli.
Я завжди беру з собою аптечку.|Zawsze biorę ze sobą apteczkę.
Подорож тривала цілу добу.|Podróż trwała całą dobę.
Ми їхали нічним потягом до Львова.|Jechaliśmy nocnym pociągiem do Lwowa.
Квитки треба купувати онлайн.|Bilety trzeba kupować online.
Я поміняв гроші в аеропорту.|Wymieniłem pieniądze na lotnisku.
Готель виявився кращим, ніж на фото.|Hotel okazał się lepszy niż na zdjęciach.
Нам порадили спробувати місцеву кухню.|Doradzono nam spróbować miejscowej kuchni.
Ми взяли машину напрокат.|Wypożyczyliśmy samochód.
Я загубив свою валізу.|Zgubiłem swoją walizkę.
Відпустка пролетіла дуже швидко.|Urlop minął bardzo szybko.
Наступного разу поїдемо в гори.|Następnym razem pojedziemy w góry.
Ця поїздка залишила чудові спогади.|Ta podróż zostawiła wspaniałe wspomnienia.
`},
{ id: "x7-sent-work2", t: "Zdania: kariera", d: "Awans, zwolnienie, projekt, termin.", k: "o", ex: SENT, i: `
Мене підвищили на посаді.|Awansowano mnie.
Він звільнився з роботи минулого місяця.|Odszedł z pracy w zeszłym miesiącu.
Ми не встигаємо до дедлайну.|Nie zdążymy przed terminem.
Проєкт треба здати до п'ятниці.|Projekt trzeba oddać do piątku.
Я працюю віддалено два дні на тиждень.|Pracuję zdalnie dwa dni w tygodniu.
Начальник незадоволений результатами.|Szef jest niezadowolony z wyników.
Ми найняли трьох нових працівників.|Zatrudniliśmy trzech nowych pracowników.
Я подав заявку на цю вакансію.|Złożyłem podanie na to stanowisko.
У мене сьогодні співбесіда.|Mam dziś rozmowę kwalifikacyjną.
Мені запропонували вищу зарплату.|Zaproponowano mi wyższą pensję.
Наша компанія розширюється.|Nasza firma się rozwija.
Він відповідає за маркетинг.|On odpowiada za marketing.
Нарада перенесена на завтра.|Zebranie przeniesiono na jutro.
Я взяв відпустку за власний рахунок.|Wziąłem urlop bezpłatny.
Колеги влаштували мені прощання.|Koledzy zorganizowali mi pożegnanie.
Я шукаю роботу в іншій сфері.|Szukam pracy w innej branży.
Вона працює тут з першого дня.|Ona pracuje tu od pierwszego dnia.
Ми підписали контракт на рік.|Podpisaliśmy kontrakt na rok.
Робота мені подобається, але зарплата низька.|Praca mi się podoba, ale pensja jest niska.
Я хочу відкрити власну справу.|Chcę założyć własny biznes.
`},
{ id: "x7-sent-society", t: "Zdania: społeczeństwo", d: "Problemy, zmiany, przyszłość.", k: "o", ex: SENT, i: `
Молодь дедалі більше часу проводить онлайн.|Młodzież spędza coraz więcej czasu w sieci.
Багато людей переїжджає до великих міст.|Wiele osób przeprowadza się do dużych miast.
Житло стає все дорожчим.|Mieszkania stają się coraz droższe.
Суспільство старіє.|Społeczeństwo się starzeje.
Освіта має бути доступною для всіх.|Edukacja powinna być dostępna dla wszystkich.
Технології змінюють наше життя.|Technologie zmieniają nasze życie.
Люди стали менше читати.|Ludzie zaczęli mniej czytać.
Волонтери допомагають біженцям.|Wolontariusze pomagają uchodźcom.
Кожен голос має значення.|Każdy głos ma znaczenie.
Ми повинні дбати про довкілля.|Musimy dbać o środowisko.
Корупція шкодить економіці.|Korupcja szkodzi gospodarce.
Важко знайти роботу без досвіду.|Trudno znaleźć pracę bez doświadczenia.
Соціальні мережі впливають на вибори.|Media społecznościowe wpływają na wybory.
Країна потребує реформ.|Kraj potrzebuje reform.
Ціни ростуть швидше за зарплати.|Ceny rosną szybciej niż pensje.
Громада зібрала гроші на лікарню.|Społeczność zebrała pieniądze na szpital.
Діти мають право на освіту.|Dzieci mają prawo do edukacji.
Ми живемо в епоху змін.|Żyjemy w epoce zmian.
Майбутнє залежить від нас.|Przyszłość zależy od nas.
Кожен може зробити щось корисне.|Każdy może zrobić coś pożytecznego.
`},
{ id: "x7-idioms2", t: "Idiomy 2", d: "Ставити палки в колеса, брати бика за роги…", k: "v", ex: CHOICE, i: `
ставити палки в колеса|rzucać kłody pod nogi
брати бика за роги|brać byka za rogi
лити воду|lać wodę
переливати з пустого в порожнє|przelewać z pustego w próżne
кров з молоком|krew z mlekiem (pełen zdrowia)
вилами по воді писано|palcem na wodzie pisane
дивитися крізь пальці|przymykać oko
мати голову на плечах|mieć głowę na karku
не лізти за словом у кишеню|nie dać się zagadać (być wygadanym)
вставати з лівої ноги|wstać lewą nogą
обвести навколо пальця|owinąć wokół palca
розбити глечик|pokłócić się
гра не варта свічок|gra niewarta świeczki
на ловця і звір біжить|o wilku mowa
звести нанівець|zniweczyć
як з гуски вода|spływa jak woda po kaczce
куди очі дивляться|przed siebie (gdzie oczy poniosą)
шукати вітра в полі|szukać wiatru w polu
пустити півня|puścić koguta (zafałszować)
показати, де раки зимують|pokazać, gdzie raki zimują
душа в п'яти втекла|serce podeszło do gardła (ze strachu)
від щирого серця|z głębi serca
гнатися за двома зайцями|gonić dwa zające naraz
ні пари з вуст|ani mru-mru (ani słowa)
краще пізно, ніж ніколи|lepiej późno niż wcale
`},
{ id: "x7-proverbs", t: "Przysłowia", d: "Ukraińskie przysłowia i ich polskie odpowiedniki.", k: "v", ex: CHOICE, i: `
Без праці нема колачів.|Bez pracy nie ma kołaczy.
Тихіше їдеш – далі будеш.|Kto powoli jedzie, ten dalej zajedzie.
Друзі пізнаються в біді.|Prawdziwych przyjaciół poznaje się w biedzie.
Не все те золото, що блищить.|Nie wszystko złoto, co się świeci.
Що посієш, те й пожнеш.|Co zasiejesz, to zbierzesz.
Апетит приходить під час їди.|Apetyt rośnie w miarę jedzenia.
Вовка ноги годують.|Kto nie pracuje, ten nie je.
Яблуко від яблуні недалеко падає.|Niedaleko pada jabłko od jabłoni.
Не кажи «гоп», поки не перескочиш.|Nie chwal dnia przed zachodem słońca.
У гостях добре, а вдома краще.|Wszędzie dobrze, ale w domu najlepiej.
Хто рано встає, тому Бог дає.|Kto rano wstaje, temu Pan Bóg daje.
Краще синиця в руці, ніж журавель у небі.|Lepszy wróbel w garści niż gołąb na dachu.
Сім разів відміряй, один раз відріж.|Dwa razy mierz, raz tnij.
Не плюй у криницю.|Nie pluj do studni (przyda się jeszcze).
Ранок вечора мудріший.|Prześpij się z tym – rano będzie mądrzej.
Слово – срібло, мовчання – золото.|Mowa jest srebrem, a milczenie złotem.
Де два б'ються, третій користає.|Gdzie dwóch się bije, tam trzeci korzysta.
Біда не ходить одна.|Nieszczęścia chodzą parami.
Риба гниє з голови.|Ryba psuje się od głowy.
Обіцянка – цяцянка, а дурневі радість.|Obiecanki cacanki, a głupiemu radość.
Як ти до людей, так і люди до тебе.|Jak ty komu, tak on tobie.
Чужими руками жар загрібати.|Cudzymi rękami kasztany z ognia wyciągać.
Шила в мішку не сховаєш.|Szydło wyjdzie z worka.
Кінець – ділу вінець.|Koniec wieńczy dzieło.
Вчення – світло, а невчення – тьма.|Nauka to światło, niewiedza to ciemność.
`}
]);
})();
