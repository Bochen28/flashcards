/* Etap 8 – poprawna ukraińszczyzna, kolokacje, fałszywi przyjaciele, zdania C1. */
(function () {
var SENT = ["order", "pl2en", "order", "en2pl", "listen"];
var CHOICE = ["en2pl", "pl2en", "listen"];
ADD("s8", [
{ id: "x8-falsefr4", t: "Fałszywi przyjaciele 4", d: "Чашка to nie czaszka, a пилка to nie piłka!", k: "m", i: `
чашка|filiżanka (kubek)|czaszka,czapka|Czaszka to череп.
пилка|piłka (do drewna, do paznokci)|piłka do gry,pilnik|Piłka do gry to м'яч.
чоловік|mężczyzna (mąż)|człowiek,czołg|Człowiek to людина.
шина|opona|szyna,szynka|Szyna to рейка.
фара|reflektor samochodowy|fara (kościół),farba|Farba to фарба.
капот|maska samochodu|kapota (płaszcz),kapeć|Płaszcz to пальто.
хмара|chmura|chmara (tłum),chmiel|Chmara (mnóstwo) to сила-силенна.
веселка|tęcza|wesołek,wesele|Wesele to весілля.
лагодити|naprawiać|łagodzić,łaskotać|Łagodzić to пом'якшувати.
застава|kaucja (zastaw)|zastawa stołowa,zasłona|Zastawa stołowa to посуд, сервіз.
плита|kuchenka|płyta CD,płytka|Płyta CD to диск.
майка|podkoszulek|majtki,majka|Majtki to труси.
колія|tor (koleina)|kolej,kolejka|Kolej to залізниця.
пишний|okazały (bujny)|pyszny (smaczny),pysk|Pyszny (smaczny) to смачний.
зміст|treść (spis treści)|zmysł,zmieść|Zmysł to чуття.
лапки|cudzysłów|łapówka,łopatki|W piśmie лапки = cudzysłów: «…».
тлумачити|objaśniać (interpretować)|tłumaczyć na inny język,tłoczyć|Tłumaczyć tekst to перекладати.
наступ|ofensywa (natarcie)|następca,nastrój|Następca to наступник.
живопис|malarstwo|życiorys,żywopłot|Życiorys to біографія або резюме.
майдан|plac|majątek,majdan (dobytek)|Dobytek, majątek to майно.
`},
{ id: "x8-norms", t: "Poprawnie po ukraińsku", d: "Unikaj rusycyzmów: бере участь, а nie приймає участь.", k: "f", i: `
Мені {подобається} ця книжка.|Podoba mi się ta książka.|нравиться,любиться|Нравиться to słowo rosyjskie; po ukraińsku: подобається.
Я {вважаю}, що ти правий.|Uważam, że masz rację.|рахую,щитаю|Рахувати = liczyć; uważać (sądzić) = вважати.
Він {бере} участь у конкурсі.|Bierze udział w konkursie.|приймає,має|Poprawnie: брати участь (nie «приймати участь»).
Я працював там {протягом} тижня.|Pracowałem tam przez tydzień.|на протязі,під протягом|Poprawnie: протягом або впродовж.
Згідно {з} законом ви маєте право відмовитися.|Zgodnie z ustawą ma Pan prawo odmówić.|до,по|Poprawnie: згідно з (чим), відповідно до (чого).
{Завдяки} вашій допомозі ми встигли.|Dzięki waszej pomocy zdążyliśmy.|Дякуючи,Благодаря|Дякуючи = dziękując; dzięki = завдяки.
{На жаль}, я не можу прийти.|Niestety nie mogę przyjść.|К сожалению,На жалість
Ти {маєш} рацію.|Masz rację.|правий,прав|Мати рацію = mieć rację.
{Наступна} зупинка — вокзал.|Następny przystanek – dworzec.|Слідуюча,Будуча|Слідуючий to rusycyzm; poprawnie: наступний.
Треба вжити {заходів}.|Trzeba podjąć działania.|міри,мір|Poprawnie: вжити заходів (nie «прийняти міри»).
Я хворію {на} грип.|Choruję na grypę.|з,від|Poprawnie: хворіти на щось (jak po polsku).
Я {сумую} за тобою.|Tęsknię za tobą.|скучаю,нудьгую|Скучати to rusycyzm; poprawnie: сумувати за кимось.
{Вітаю} з днем народження!|Wszystkiego najlepszego z okazji urodzin!|Поздоровляю,Поздравляю|Поздоровляти to rusycyzm; poprawnie: вітати.
Наші думки {збігаються}.|Nasze opinie się pokrywają.|співпадають,совпадають|Співпадати to kalka z rosyjskiego; poprawnie: збігатися.
{Йдеться} про важливу справу.|Chodzi o ważną sprawę.|Мова йде,Речь іде|Poprawnie: йдеться про…
Музей {розташований} у центрі.|Muzeum znajduje się w centrum.|находиться,стоїться
Тобі дуже {личить} ця сукня.|Bardzo ci pasuje ta sukienka.|пасується,ідеться|Личити = pasować (o wyglądzie).
Я {прийшов} до висновку, що він має рацію.|Doszedłem do wniosku, że ma rację.|прибув,приїхав|Дійти (прийти) до висновку = dojść do wniosku.
`},
{ id: "x8-colloc2", t: "Kolokacje C1", d: "Poruszyć kwestię, wnieść wkład, ponieść porażkę.", k: "v", ex: CHOICE, i: `
порушити питання|poruszyć kwestię
висунути гіпотезу|wysunąć hipotezę
дійти висновку|dojść do wniosku
зробити внесок|wnieść wkład
надати перевагу|dać pierwszeństwo (woleć)
приділяти увагу|poświęcać uwagę
відігравати ключову роль|odgrywać kluczową rolę
набути чинності|wejść w życie
зазнати поразки|ponieść porażkę
здобути перемогу|odnieść zwycięstwo
завдати шкоди|wyrządzić szkodę
надати допомогу|udzielić pomocy
висловити думку|wyrazić opinię
дотримуватися правил|przestrzegać zasad
посідати перше місце|zajmować pierwsze miejsce
мати вплив|mieć wpływ
викликати інтерес|wzbudzić zainteresowanie
зазнати змін|ulec zmianom
вийти з ладу|zepsuć się
стати в пригоді|przydać się
порушити тишу|przerwać ciszę
покласти відповідальність|nałożyć odpowiedzialność
надати слово|udzielić głosu
підбити підсумки|podsumować
поставити крапку|postawić kropkę (zakończyć)
`},
{ id: "x8-sent-culture", t: "Zdania: Ukraina i kultura", d: "Kijów, Lwów, Karpaty, kolędy, pisanki.", k: "o", ex: SENT, i: `
Київ — одне з найстаріших міст Європи.|Kijów to jedno z najstarszych miast Europy.
Тарас Шевченко — найвідоміший український поет.|Taras Szewczenko to najbardziej znany ukraiński poeta.
Україна проголосила незалежність 24 серпня.|Ukraina ogłosiła niepodległość 24 sierpnia.
Українська мова належить до слов'янських мов.|Język ukraiński należy do języków słowiańskich.
Польська та українська мови мають багато спільного.|Język polski i ukraiński mają wiele wspólnego.
Львів славиться своїми кав'ярнями.|Lwów słynie ze swoich kawiarni.
Карпати приваблюють туристів цілий рік.|Karpaty przyciągają turystów przez cały rok.
На Різдво співають колядки.|Na Boże Narodzenie śpiewa się kolędy.
Вишиванку вдягають на свята.|Wyszywankę zakłada się na święta.
Дніпро — найбільша річка України.|Dniepr to największa rzeka Ukrainy.
Одеса розташована на березі Чорного моря.|Odessa leży nad Morzem Czarnym.
Леся Українка писала вірші й драми.|Łesia Ukrainka pisała wiersze i dramaty.
Українці дуже гостинні.|Ukraińcy są bardzo gościnni.
Гості мають скуштувати все, що на столі.|Goście powinni spróbować wszystkiego, co jest na stole.
На Великдень печуть паски й фарбують писанки.|Na Wielkanoc piecze się paski i maluje pisanki.
Багато українців тепер живе в Польщі.|Wielu Ukraińców mieszka teraz w Polsce.
Ми разом відзначали День Незалежності.|Razem obchodziliśmy Dzień Niepodległości.
Борщ — це не просто суп, а ціла традиція.|Barszcz to nie zwykła zupa, ale cała tradycja.
Я хочу краще зрозуміти українську культуру.|Chcę lepiej zrozumieć kulturę ukraińską.
Вивчати мову — це відкривати новий світ.|Uczyć się języka to odkrywać nowy świat.
`},
{ id: "x8-sent-work", t: "Zdania: praca na poziomie C1", d: "Zrewidować budżet, napięte terminy, owocna praca.", k: "o", ex: SENT, i: `
Пропоную обговорити це на наступній нараді.|Proponuję omówić to na następnym zebraniu.
Нам потрібно переглянути бюджет.|Musimy zrewidować budżet.
Цей підхід виявився неефективним.|To podejście okazało się nieskuteczne.
Ми маємо врахувати думку клієнтів.|Musimy uwzględnić opinię klientów.
Результати перевершили наші очікування.|Wyniki przerosły nasze oczekiwania.
Проєкт затримується з об'єктивних причин.|Projekt opóźnia się z przyczyn obiektywnych.
Я беру на себе відповідальність за це рішення.|Biorę na siebie odpowiedzialność za tę decyzję.
Давайте розподілимо завдання в команді.|Rozdzielmy zadania w zespole.
Терміни дуже стислі.|Terminy są bardzo napięte.
Ми шукаємо компромісне рішення.|Szukamy kompromisowego rozwiązania.
Звіт має бути готовий до понеділка.|Raport musi być gotowy do poniedziałku.
Партнери погодилися на наші умови.|Partnerzy zgodzili się na nasze warunki.
Варто інвестувати в навчання персоналу.|Warto inwestować w szkolenie personelu.
Продажі зросли на двадцять відсотків.|Sprzedaż wzrosła o dwadzieścia procent.
Ми не можемо дозволити собі таких витрат.|Nie możemy sobie pozwolić na takie wydatki.
Мені бракує досвіду в цій сфері.|Brakuje mi doświadczenia w tej dziedzinie.
Ця посада передбачає часті відрядження.|To stanowisko wiąże się z częstymi delegacjami.
Я хотів би обговорити умови контракту.|Chciałbym omówić warunki kontraktu.
Конкуренція на ринку постійно зростає.|Konkurencja na rynku stale rośnie.
Дякую всім за плідну роботу.|Dziękuję wszystkim za owocną pracę.
`},
{ id: "x8-sent-life", t: "Zdania: o życiu", d: "Szczęście tkwi w drobiazgach. Wiedza to potęga.", k: "o", ex: SENT, i: `
Життя занадто коротке, щоб сумувати.|Życie jest zbyt krótkie, by się smucić.
Кожна людина сама творить свою долю.|Każdy sam kształtuje swój los.
Помилки — це частина навчання.|Błędy są częścią nauki.
Щастя полягає в дрібницях.|Szczęście tkwi w drobiazgach.
Справжня дружба не потребує слів.|Prawdziwa przyjaźń nie potrzebuje słów.
Час лікує, але не все.|Czas leczy, ale nie wszystko.
Не можна догодити всім.|Nie da się dogodzić wszystkim.
Найважче — зробити перший крок.|Najtrudniej jest zrobić pierwszy krok.
Мрії збуваються, якщо до них іти.|Marzenia się spełniają, jeśli się do nich dąży.
Знання — це сила.|Wiedza to potęga.
Не судіть інших, не знаючи їхньої історії.|Nie oceniajcie innych, nie znając ich historii.
Усе, що нас не вбиває, робить нас сильнішими.|Co nas nie zabije, to nas wzmocni.
Ми цінуємо те, що маємо, коли це втрачаємо.|Doceniamy to, co mamy, kiedy to tracimy.
Кожен день — це новий шанс.|Każdy dzień to nowa szansa.
Гроші не можуть купити щастя.|Pieniądze nie kupią szczęścia.
Мовчання іноді говорить більше за слова.|Milczenie czasem mówi więcej niż słowa.
Хто шукає, той знайде.|Kto szuka, ten znajdzie.
Найкращий учитель — досвід.|Najlepszym nauczycielem jest doświadczenie.
Важливо не лише що ти кажеш, а й як.|Ważne jest nie tylko co mówisz, ale i jak.
Зміни починаються з тебе самого.|Zmiany zaczynają się od ciebie samego.
`},
{ id: "x8-sent-media", t: "Zdania: media i informacja", d: "Sprawdzaj źródła, fałszywe wiadomości, sprostowanie.", k: "o", ex: SENT, i: `
Завжди перевіряйте джерела інформації.|Zawsze sprawdzajcie źródła informacji.
Ця новина виявилася фейком.|Ta wiadomość okazała się fałszywa.
Редакція опублікувала спростування.|Redakcja opublikowała sprostowanie.
Журналісти провели власне розслідування.|Dziennikarze przeprowadzili własne śledztwo.
Речник відмовився коментувати ситуацію.|Rzecznik odmówił komentarza w sprawie sytuacji.
Інтерв'ю вийде в ефір завтра ввечері.|Wywiad zostanie wyemitowany jutro wieczorem.
Соціальні мережі поширюють чутки дуже швидко.|Media społecznościowe bardzo szybko rozpowszechniają plotki.
Заголовок не відповідає змісту статті.|Nagłówek nie odpowiada treści artykułu.
Свобода слова — основа демократії.|Wolność słowa to podstawa demokracji.
Я передплачую кілька незалежних видань.|Prenumeruję kilka niezależnych wydań.
Цю статтю варто прочитати повністю.|Ten artykuł warto przeczytać w całości.
Пресконференція почнеться за десять хвилин.|Konferencja prasowa zacznie się za dziesięć minut.
Новину підхопили всі провідні канали.|Wiadomość podchwyciły wszystkie wiodące kanały.
Не вірте всьому, що читаєте в інтернеті.|Nie wierzcie we wszystko, co czytacie w internecie.
Він веде популярний подкаст про історію.|Prowadzi popularny podcast o historii.
Автор посилається на офіційні дані.|Autor powołuje się na oficjalne dane.
Ця тема викликала бурхливу дискусію.|Ten temat wywołał burzliwą dyskusję.
Рейтинг програми різко впав.|Oglądalność programu gwałtownie spadła.
Ми живемо в епоху інформаційного шуму.|Żyjemy w epoce szumu informacyjnego.
Критичне мислення потрібне кожному.|Krytyczne myślenie jest potrzebne każdemu.
`}
]);
})();
