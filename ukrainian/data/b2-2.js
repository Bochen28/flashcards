/* Etap 6 – gramatyka B2 i zdania. */
(function () {
var SENT = ["order", "pl2en", "order", "en2pl", "listen"];
ADD("s6", [
{ id: "x6-passive", t: "Strona bierna: -но, -то", d: "Лист написано. Двері зачинено.", k: "f", i: `
Лист уже {написано}.|List został już napisany.|написав,пише|Forma na -но/-то to bezosobowa strona bierna: napisano, zrobiono.
Двері {зачинено}.|Drzwi są zamknięte.|зачинив,зачиняє
Музей {відкрито} щодня.|Muzeum jest otwarte codziennie.|відкрив,відкриває
Будинок {збудовано} в 1990 році.|Dom zbudowano w 1990 roku.|збудував,будує
Квитки вже {продано}.|Bilety są już sprzedane.|продав,продає
Роботу {виконано} вчасно.|Pracę wykonano na czas.|виконав,виконує
Злочинця {затримано}.|Przestępcę zatrzymano.|затримав,затримує
Рішення {ухвалено}.|Decyzję podjęto.|ухвалив,ухвалює
Магазин {зачинено} на ремонт.|Sklep zamknięto z powodu remontu.|зачинив,зачиняє
Книжку {перекладено} польською.|Książkę przetłumaczono na polski.|переклав,перекладає
Проблему {вирішено}.|Problem rozwiązano.|вирішив,вирішує
Нас {запрошено} на весілля.|Zaproszono nas na wesele.|запросив,запрошує
Повідомлення {надіслано}.|Wiadomość wysłano.|надіслав,надсилає
Заявку {прийнято}.|Wniosek przyjęto.|прийняв,приймає
Обід уже {приготовано}.|Obiad jest już przygotowany.|приготував,готує
Вікно було {відчинене}.|Okno było otwarte.|відчинений,відчинена|Imiesłów zgadza się z rodzajem: вікно (nijaki) → відчинене.
Двері були {зачинені}.|Drzwi były zamknięte.|зачинений,зачинена|Двері występują tylko w liczbie mnogiej.
Стаття {написана} відомим журналістом.|Artykuł jest napisany przez znanego dziennikarza.|написаний,написане|Стаття – rodzaj żeński: написана.
Цей роман {написаний} давно.|Ta powieść została napisana dawno.|написана,написане|Роман – rodzaj męski.
Усі місця {зайняті}.|Wszystkie miejsca są zajęte.|зайнятий,зайнята
`},
{ id: "x6-gerund", t: "Imiesłowy: читаючи, прочитавши", d: "Robiąc coś / zrobiwszy coś.", k: "f", i: `
{Читаючи} книжку, я заснув.|Czytając książkę, zasnąłem.|Прочитавши,Читав|-учи/-ючи (-ачи/-ячи) = robiąc coś w tym samym czasie.
{Прочитавши} лист, вона заплакала.|Przeczytawszy list, rozpłakała się.|Читаючи,Прочитала|-вши = zrobiwszy (wcześniej, czynność zakończona).
{Повернувшись} додому, я ліг спати.|Wróciwszy do domu, położyłem się spać.|Повертаючись,Повернувся
Він слухав музику, {готуючи} вечерю.|Słuchał muzyki, przygotowując kolację.|приготувавши,готував
{Закінчивши} роботу, ми пішли в кафе.|Skończywszy pracę, poszliśmy do kawiarni.|Закінчуючи,Закінчили
Вона говорила, {посміхаючись}.|Mówiła, uśmiechając się.|посміхнувшись,посміхалася
{Йдучи} вулицею, я зустрів друга.|Idąc ulicą, spotkałem przyjaciela.|Пішовши,Йшов
{Побачивши} мене, він зрадів.|Zobaczywszy mnie, ucieszył się.|Бачачи,Побачив
Не {знаючи} мови, важко знайти роботу.|Nie znając języka, trudno znaleźć pracę.|знавши,знає
{Сидячи} вдома, я нудьгую.|Siedząc w domu, nudzę się.|Сівши,Сиджу
Він пішов, не {сказавши} ні слова.|Wyszedł, nie mówiąc ani słowa.|кажучи,сказав|Не сказавши = nie powiedziawszy.
{Прокинувшись}, я одразу випив кави.|Po przebudzeniu od razu napiłem się kawy.|Прокидаючись,Прокинувся
Ми йшли, {розмовляючи} про життя.|Szliśmy, rozmawiając o życiu.|поговоривши,розмовляли
{Отримавши} зарплату, він купив подарунок.|Dostawszy pensję, kupił prezent.|Отримуючи,Отримав
{Вивчаючи} мову, треба багато читати.|Ucząc się języka, trzeba dużo czytać.|Вивчивши,Вивчає
Вона заснула, {подивившись} фільм.|Zasnęła, obejrzawszy film.|дивлячись,подивилася
{Знаючи} його, я не здивувався.|Znając go, nie zdziwiłem się.|Знавши,Знаю
{Попрощавшись}, гості пішли.|Pożegnawszy się, goście wyszli.|Прощаючись,Попрощалися
`},
{ id: "x6-reported", t: "Mowa zależna", d: "Powiedział, że… Zapytała, czy…", k: "f", i: `
Він сказав, {що} втомився.|Powiedział, że jest zmęczony.|чи,щоб|Що = że (zwykłe zdanie).
Вона спитала, {чи} я прийду.|Zapytała, czy przyjdę.|що,щоб|Чи = czy (pytanie tak/nie).
Мама попросила, {щоб} я купив хліба.|Mama poprosiła, żebym kupił chleba.|що,чи|Щоб + czas przeszły = żeby (prośba, polecenie).
Він спитав, {де} я живу.|Zapytał, gdzie mieszkam.|чи,щоб
Я не знаю, {коли} вона повернеться.|Nie wiem, kiedy ona wróci.|чи,щоб
Він пообіцяв, що {подзвонить}.|Obiecał, że zadzwoni.|подзвонив би,дзвонячи
Вона написала, що {приїде} в п'ятницю.|Napisała, że przyjedzie w piątek.|приїхала б,приїжджаючи|W mowie zależnej nie zmieniamy czasu: приїде = przyjedzie.
Лікар порадив, щоб я більше {відпочивав}.|Lekarz poradził, żebym więcej odpoczywał.|відпочиваю,відпочиватиму|Po щоб – czas przeszły: відпочивав.
Скажи йому, щоб він {зачекав}.|Powiedz mu, żeby zaczekał.|зачекає,чекає
Вони спитали, {скільки} це коштує.|Zapytali, ile to kosztuje.|чи,що
Він запитав, {чому} я сумний.|Zapytał, dlaczego jestem smutny.|чи,щоб
Вона думала, що я {забув}.|Myślała, że zapomniałem.|забувши,забуваючи
Учитель сказав, щоб ми {відкрили} підручники.|Nauczyciel powiedział, żebyśmy otworzyli podręczniki.|відкриємо,відкриваємо
Я не впевнений, {чи} це правда.|Nie jestem pewny, czy to prawda.|що,щоб
Він каже, що {знає} відповідь.|Mówi, że zna odpowiedź.|знав би,знаючи
Запитай, {котра} година.|Zapytaj, która godzina.|чи,що
Мені сказали, що поїзд {запізнюється}.|Powiedziano mi, że pociąg się spóźnia.|запізнювався б,запізнюючись
Вона хоче, {щоб} ти прийшов.|Ona chce, żebyś przyszedł.|що,чи
`},
{ id: "x6-prep", t: "Przyimki B2", d: "Через, завдяки, крім, замість, всупереч.", k: "f", i: `
Ми не пішли гуляти {через} дощ.|Nie poszliśmy na spacer z powodu deszczu.|завдяки,замість|Через = z powodu (zwykle coś złego).
{Завдяки} тобі я склав іспит.|Dzięki tobie zdałem egzamin.|Через,Крім|Завдяки + celownik: завдяки тобі.
Усі прийшли, {крім} Олега.|Wszyscy przyszli oprócz Olega.|замість,через|Крім + dopełniacz.
Я п'ю чай {замість} кави.|Piję herbatę zamiast kawy.|крім,завдяки
{Всупереч} прогнозу, був сонячний день.|Wbrew prognozie był słoneczny dzień.|Завдяки,Замість
Я чекаю на тебе {біля} входу.|Czekam na ciebie przy wejściu.|між,крізь
Кіт сховався {під} ліжком.|Kot schował się pod łóżkiem.|над,між
Лампа висить {над} столом.|Lampa wisi nad stołem.|під,біля
Ми сиділи {між} батьками.|Siedzieliśmy między rodzicami.|крізь,серед
Сонце світило {крізь} хмари.|Słońce świeciło przez chmury.|між,біля|Крізь = przez (na wskroś).
{Серед} студентів було багато іноземців.|Wśród studentów było wielu obcokrajowców.|Між,Біля
Я прийду {після} обіду.|Przyjdę po obiedzie.|перед,під час|Після + dopełniacz: після обіду.
Помий руки {перед} їжею.|Umyj ręce przed jedzeniem.|після,замість|Перед + narzędnik: перед їжею.
{Під час} уроку не можна говорити.|Podczas lekcji nie wolno rozmawiać.|Після,Перед
Ця книжка {про} кохання.|Ta książka jest o miłości.|для,без|Про + biernik: про кохання (po polsku: o + miejscownik).
Я купив подарунок {для} мами.|Kupiłem prezent dla mamy.|про,без
Не можу жити {без} кави.|Nie mogę żyć bez kawy.|для,про
Я йду {до} лікаря.|Idę do lekarza.|у,на|До + dopełniacz – gdy idziemy do osoby.
Я живу тут {з} 2020 року.|Mieszkam tu od 2020 roku.|по,на|З + dopełniacz = od (jakiegoś czasu).
Він приїхав {на} тиждень.|Przyjechał na tydzień.|в,по
Я зроблю це {за} годину.|Zrobię to w godzinę.|на,по|За годину = w ciągu godziny; через годину = za godzinę.
`},
{ id: "x6-conj", t: "Spójniki", d: "Хоча, бо, щоб, проте, оскільки, ніби.", k: "f", i: `
Я не прийшов, {бо} захворів.|Nie przyszedłem, bo zachorowałem.|щоб,хоча
{Хоча} було холодно, ми пішли гуляти.|Chociaż było zimno, poszliśmy na spacer.|Тому що,Щоб
Я вчу українську, {щоб} розмовляти з друзями.|Uczę się ukraińskiego, żeby rozmawiać z przyjaciółmi.|бо,хоча
Він багатий, {проте} нещасливий.|Jest bogaty, jednak nieszczęśliwy.|тому,бо
Було пізно, {тому} ми поїхали додому.|Było późno, więc pojechaliśmy do domu.|хоча,бо|Тому = dlatego, więc.
{Оскільки} ти тут, допоможи мені.|Skoro tu jesteś, pomóż mi.|Хоча,Щоб
Ні я, {ні} він не знаємо.|Ani ja, ani on nie wiemy.|чи,або
Ти хочеш чай {чи} каву?|Chcesz herbatę czy kawę?|ні,але
{Або} ти йдеш, або я.|Albo ty idziesz, albo ja.|Ні,Хоча
Я втомився, {але} щасливий.|Jestem zmęczony, ale szczęśliwy.|бо,щоб
{Як тільки} прийдеш, подзвони.|Jak tylko przyjdziesz, zadzwoń.|Хоча,Бо
Я зачекаю, {поки} ти не повернешся.|Poczekam, aż wrócisz.|хоча,бо
Він говорить так, {ніби} все знає.|Mówi tak, jakby wszystko wiedział.|бо,щоб
{Незважаючи на} втому, вона працювала.|Mimo zmęczenia pracowała.|Завдяки,Через
Я не тільки читаю, {а й} пишу.|Nie tylko czytam, ale i piszę.|бо,щоб
{Якщо} не поспішиш, запізнишся.|Jeśli się nie pospieszysz, spóźnisz się.|Якби,Хоча
Він сказав це, {щоб} мене розсмішити.|Powiedział to, żeby mnie rozśmieszyć.|бо,хоча
Ми залишилися вдома, {тому що} йшов дощ.|Zostaliśmy w domu, ponieważ padał deszcz.|щоб,хоча
Грошей немає, {зате} є час.|Pieniędzy nie ma, za to jest czas.|тому,щоб
`},
{ id: "x6-govern", t: "Czasowniki i przypadki", d: "Займаюся спортом, користуюся телефоном.", k: "f", i: `
Я займаюся {спортом}.|Uprawiam sport.|спорт,спорту|Займатися + narzędnik: займаюся спортом.
Я користуюся {телефоном}.|Korzystam z telefonu.|з телефону,телефон|Користуватися + narzędnik (bez przyimka).
Він зателефонував {мені}.|Zadzwonił do mnie.|до мене,мене|Телефонувати (дзвонити) + celownik: мені, другові.
Я телефоную {другові}.|Dzwonię do przyjaciela.|до друга,друга
Я пишаюся {сином}.|Jestem dumny z syna.|з сина,сина|Пишатися + narzędnik.
Ми говорили {про тебе}.|Rozmawialiśmy o tobie.|о тобі,про тобі|Про + biernik: про тебе.
Я думаю {про майбутнє}.|Myślę o przyszłości.|о майбутньому,про майбутнього
Він забув {про зустріч}.|Zapomniał o spotkaniu.|о зустрічі,про зустрічі
Вона дбає {про здоров'я}.|Ona dba o zdrowie.|о здоров'ї,здоров'ям
Він цікавиться {історією}.|Interesuje się historią.|історію,історії
Вона захоплюється {музикою}.|Pasjonuje się muzyką.|музику,музики
Він керує {компанією}.|Kieruje firmą.|компанію,компанії
Я боюся {собак}.|Boję się psów.|собаками,собакам
Я допомагаю {мамі}.|Pomagam mamie.|маму,мамою
Я заздрю {тобі}.|Zazdroszczę ci.|тебе,тобою
Я дякую {вам} за допомогу.|Dziękuję Państwu za pomoc.|вас,вами|Дякувати + celownik: дякую вам.
Він хворіє {на грип}.|Choruje na grypę.|грипом,з грипом
Я сумую {за тобою}.|Tęsknię za tobą.|тебе,тобі
Ми сміялися {з нього}.|Śmialiśmy się z niego.|його,ним
Я граю {на гітарі}.|Gram na gitarze.|гітару,у гітару
Вони грають {у футбол}.|Oni grają w piłkę nożną.|футболом,на футболі
Вона вийшла заміж {за Петра}.|Wyszła za mąż za Piotra.|з Петром,Петру
Я відповідаю {на лист}.|Odpowiadam na list.|листу,листом
`},
{ id: "x6-sent-news", t: "Zdania: wiadomości", d: "Rząd, ceny, pogoda, sport.", k: "o", ex: SENT, i: `
Уряд ухвалив новий закон.|Rząd przyjął nową ustawę.
Ціни на пальне знову зросли.|Ceny paliwa znowu wzrosły.
Вибори відбудуться восени.|Wybory odbędą się jesienią.
Президент зустрівся з послами.|Prezydent spotkał się z ambasadorami.
У місті сталася велика пожежа.|W mieście wybuchł duży pożar.
Ніхто не постраждав.|Nikt nie ucierpiał.
Поліція розслідує цю справу.|Policja prowadzi śledztwo w tej sprawie.
Завтра очікується сильний дощ.|Jutro spodziewany jest silny deszcz.
Безробіття трохи зменшилося.|Bezrobocie nieco spadło.
Науковці зробили важливе відкриття.|Naukowcy dokonali ważnego odkrycia.
Компанія відкрила новий завод.|Firma otworzyła nową fabrykę.
Матч закінчився внічию.|Mecz zakończył się remisem.
Наша команда виграла чемпіонат.|Nasza drużyna wygrała mistrzostwa.
Міст закрили на ремонт.|Most zamknięto z powodu remontu.
Тисячі людей вийшли на протест.|Tysiące ludzi wyszło na protest.
Країни підписали угоду про співпрацю.|Kraje podpisały umowę o współpracy.
Інфляція досягла рекордного рівня.|Inflacja osiągnęła rekordowy poziom.
Фільм отримав головну нагороду.|Film otrzymał główną nagrodę.
Вчені попереджають про зміну клімату.|Naukowcy ostrzegają przed zmianami klimatu.
Нову лінію метро відкриють наступного року.|Nową linię metra otworzą w przyszłym roku.
`},
{ id: "x6-sent-feelings", t: "Zdania: uczucia", d: "Tęsknię, jestem dumny, przykro mi.", k: "o", ex: SENT, i: `
Я дуже за тобою сумую.|Bardzo za tobą tęsknię.
Мені шкода, що так сталося.|Przykro mi, że tak się stało.
Я пишаюся тобою.|Jestem z ciebie dumny.
Не ображайся на мене.|Nie obrażaj się na mnie.
Він закохався в неї з першого погляду.|Zakochał się w niej od pierwszego wejrzenia.
Ми посварилися через дрібницю.|Pokłóciliśmy się o drobiazg.
Вони помирилися наступного дня.|Pogodzili się następnego dnia.
Я тобі повністю довіряю.|W pełni ci ufam.
Мені соромно за свою поведінку.|Wstydzę się swojego zachowania.
Вона розсердилася на брата.|Rozgniewała się na brata.
Не хвилюйся, все буде добре.|Nie martw się, wszystko będzie dobrze.
Я радий тебе бачити.|Cieszę się, że cię widzę.
Мене це дуже засмутило.|Bardzo mnie to zasmuciło.
Він боїться висоти.|On boi się wysokości.
Я вдячний тобі за допомогу.|Jestem ci wdzięczny za pomoc.
Вона почувається самотньою.|Ona czuje się samotna.
Мені набридла ця робота.|Mam dość tej pracy.
Ми дружимо вже десять років.|Przyjaźnimy się już dziesięć lat.
Він її ревнує.|On jest o nią zazdrosny.
Я не можу на тебе сердитися.|Nie potrafię się na ciebie gniewać.
`},
{ id: "x6-sent-debate", t: "Zdania: dyskusja", d: "Moim zdaniem, z drugiej strony, poza tym.", k: "o", ex: SENT, i: `
На мою думку, це хороша ідея.|Moim zdaniem to dobry pomysł.
З одного боку, це дорого.|Z jednej strony to drogie.
З іншого боку, це якісна річ.|Z drugiej strony to rzecz dobrej jakości.
Я повністю з тобою згоден.|Całkowicie się z tobą zgadzam.
Я не зовсім згоден.|Nie do końca się zgadzam.
Це залежить від ситуації.|To zależy od sytuacji.
Ти маєш рацію.|Masz rację.
Ти помиляєшся.|Mylisz się.
Справа в тому, що в нас немає часу.|Rzecz w tym, że nie mamy czasu.
Давай подивимося на це інакше.|Spójrzmy na to inaczej.
Головна проблема в грошах.|Główny problem to pieniądze.
Я розумію твою точку зору.|Rozumiem twój punkt widzenia.
Наприклад, можна працювати з дому.|Na przykład można pracować z domu.
Крім того, це шкідливо для здоров'я.|Poza tym to szkodliwe dla zdrowia.
Отже, ми маємо вибір.|A zatem mamy wybór.
Чесно кажучи, мені це не подобається.|Szczerze mówiąc, nie podoba mi się to.
Я б сказав, що це неправда.|Powiedziałbym, że to nieprawda.
Немає сенсу про це сперечатися.|Nie ma sensu się o to kłócić.
Давайте повернемося до теми.|Wróćmy do tematu.
Це питання не таке просте.|To pytanie nie jest takie proste.
`},
{ id: "x6-sent-home", t: "Zdania: dom", d: "Pralka się zepsuła, sąsiedzi hałasują.", k: "o", ex: SENT, i: `
Треба заплатити за комунальні послуги.|Trzeba zapłacić rachunki za media.
У нас зламалася пральна машина.|Zepsuła nam się pralka.
Я викликав майстра.|Wezwałem fachowca.
Сусіди знову шумлять.|Sąsiedzi znowu hałasują.
Ми переїжджаємо в нову квартиру.|Przeprowadzamy się do nowego mieszkania.
Орендна плата занадто висока.|Czynsz jest za wysoki.
Хто сьогодні виносить сміття?|Kto dziś wynosi śmieci?
Я забув вимкнути праску.|Zapomniałem wyłączyć żelazko.
У ванній протікає кран.|W łazience cieknie kran.
Нам треба купити новий холодильник.|Musimy kupić nową lodówkę.
Діти вже пішли спати.|Dzieci już poszły spać.
Я прибираю щосуботи.|Sprzątam w każdą sobotę.
Ключі лежать на полиці.|Klucze leżą na półce.
Не забудь зачинити двері.|Nie zapomnij zamknąć drzwi.
Світло вимкнули на дві години.|Prąd wyłączono na dwie godziny.
Я зарядив павербанк.|Naładowałem powerbank.
Ми замовили їжу додому.|Zamówiliśmy jedzenie do domu.
Посилка прийде завтра.|Paczka przyjdzie jutro.
Я полив квіти.|Podlałem kwiaty.
Сьогодні моя черга готувати.|Dziś moja kolej gotować.
`}
]);
})();
