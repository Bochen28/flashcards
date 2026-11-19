/* Etap 4 – czasy, aspekt, stopniowanie, narzędnik i zdania (A2). */
(function () {
var SENT = ["order", "pl2en", "order", "en2pl", "listen"];
ADD("s4", [
{ id: "x4-past", t: "Czas przeszły", d: "Працював, працювала, працювали – rodzaj ma znaczenie.", k: "f", i: `
Вчора я {працював} допізна.|Wczoraj pracowałem do późna.|працювала,працювали|Czas przeszły zależy od rodzaju: я працював (on), я працювала (ona).
Вона {купила} нову сукню.|Ona kupiła nową sukienkę.|купив,купили
Ми {були} в кіно.|Byliśmy w kinie.|був,була
Діти {гралися} в саду.|Dzieci bawiły się w ogrodzie.|грався,гралася
Він {написав} лист мамі.|On napisał list do mamy.|написала,написали
Я {бачив} його вчора.|Widziałem go wczoraj.|бачила,бачили
Ти {була} в Києві?|Byłaś w Kijowie?|був,були
Вони {приїхали} в суботу.|Przyjechali w sobotę.|приїхав,приїхала
Мама {приготувала} обід.|Mama przygotowała obiad.|приготував,приготували
Що ти {робив} учора?|Co robiłeś wczoraj?|робила,робили
Я {не знав} про це.|Nie wiedziałem o tym.|не знала,не знали
Фільм {почався} о восьмій.|Film zaczął się o ósmej.|почалася,почалося
Вечірка {почалася} пізно.|Impreza zaczęła się późno.|почався,почалося
Свято {було} чудове.|Święto było wspaniałe.|був,була|Свято – rodzaj nijaki: було.
Погода {була} погана.|Pogoda była zła.|був,було
Він {міг} прийти раніше.|Mógł przyjść wcześniej.|могла,могли
Вона {йшла} додому.|Ona szła do domu.|йшов,йшли
Ми {їли} вареники.|Jedliśmy pierogi.|їв,їла
Учора {йшов} дощ.|Wczoraj padał deszcz.|йшла,йшло
Кава {була} холодна.|Kawa była zimna.|був,було
`},
{ id: "x4-sent-past", t: "Zdania: mój weekend", d: "Opowiadamy, co się wydarzyło.", k: "o", ex: SENT, i: `
Я їздив до батьків.|Jeździłem do rodziców.
Ми смажили шашлики в саду.|Robiliśmy grilla w ogrodzie.
Було сонячно і тепло.|Było słonecznie i ciepło.
Я нічого особливого не робив.|Nie robiłem nic szczególnego.
Ми дивилися фільм удома.|Oglądaliśmy film w domu.
Вона прибрала всю квартиру.|Posprzątała całe mieszkanie.
Я зустрів старого друга в місті.|Spotkałem starego przyjaciela w mieście.
Ми довго гуляли в парку.|Długo spacerowaliśmy po parku.
Мій син грав у футбол у суботу.|Mój syn grał w piłkę w sobotę.
Я спав до десятої.|Spałem do dziesiątej.
Як минули вихідні?|Jak minął weekend?
Що ти робив у неділю?|Co robiłeś w niedzielę?
Ми відвідали музей у Львові.|Zwiedziliśmy muzeum we Lwowie.
У неділю цілий день ішов дощ.|W niedzielę cały dzień padał deszcz.
Після вечірки я був дуже втомлений.|Po imprezie byłem bardzo zmęczony.
Вони залишилися вдома.|Zostali w domu.
Ми вечеряли в новому ресторані.|Jedliśmy kolację w nowej restauracji.
Я купив подарунок для сестри.|Kupiłem prezent dla siostry.
Вихідні були занадто короткі.|Weekend był za krótki.
Де ти був учора ввечері?|Gdzie byłeś wczoraj wieczorem?
`},
{ id: "x4-future", t: "Czas przyszły", d: "Буду читати, читатиму, прочитаю.", k: "f", i: `
Завтра я {буду} працювати.|Jutro będę pracować.|буде,будуть|Czas przyszły złożony: буду + bezokolicznik.
Ми {будемо} чекати.|Będziemy czekać.|будуть,буду
Вона {буде} вдома ввечері.|Ona będzie wieczorem w domu.|будеш,будемо
Що ти {будеш} робити?|Co będziesz robić?|буду,буде
Вони {будуть} раді.|Oni będą zadowoleni.|буде,будемо
Я {читатиму} цю книгу.|Będę czytać tę książkę.|читатимеш,читатимуть|Druga forma: bezokolicznik + -му (читатиму = буду читати).
Ми {працюватимемо} разом.|Będziemy pracować razem.|працюватиму,працюватимуть
Я {зроблю} це завтра.|Zrobię to jutro.|зробить,зробимо|Czasownik dokonany w czasie „teraźniejszym” znaczy przyszłość: зроблю = zrobię.
Він {прийде} о шостій.|Przyjdzie o szóstej.|прийду,прийдуть
Ми {купимо} квитки онлайн.|Kupimy bilety online.|куплю,купить
Я тобі {подзвоню}.|Zadzwonię do ciebie.|подзвонить,подзвонимо
Вони {приїдуть} у неділю.|Przyjadą w niedzielę.|приїде,приїду
Ти {допоможеш} мені?|Pomożesz mi?|допоможу,допоможе
Я {напишу} тобі листа.|Napiszę do ciebie list.|напише,напишеш
Завтра {буде} холодно.|Jutro będzie zimno.|будуть,буду
Наступного року я {поїду} в Україну.|W przyszłym roku pojadę na Ukrainę.|поїде,поїдуть
Коли ти {закінчиш} роботу?|Kiedy skończysz pracę?|закінчу,закінчить
Я не {забуду} цей день.|Nie zapomnę tego dnia.|забуде,забудуть
Ми {побачимося} завтра.|Zobaczymy się jutro.|побачиться,побачуся
Вона {скаже} тобі правду.|Ona powie ci prawdę.|скажу,скажуть
`},
{ id: "x4-sent-plans", t: "Zdania: plany", d: "Będę, zrobię, zamierzam.", k: "o", ex: SENT, i: `
Я буду вчити іспанську.|Będę się uczyć hiszpańskiego.
Цього літа ми поїдемо в Італію.|Tego lata pojedziemy do Włoch.|Ми поїдемо в Італію цього літа.
Що ти будеш робити завтра?|Co będziesz robić jutro?
Я подзвоню тобі ввечері.|Zadzwonię do ciebie wieczorem.
У неї скоро буде дитина.|Ona niedługo będzie miała dziecko.
Ми зустрічаємося на вокзалі о шостій.|Spotykamy się na dworcu o szóstej.
Думаю, він виграє.|Myślę, że on wygra.
Я нікому не скажу.|Nikomu nie powiem.
Вони одружуються в червні.|Biorą ślub w czerwcu.
Ти прийдеш на мою вечірку?|Przyjdziesz na moją imprezę?
Я не збираюся купувати нову машину.|Nie zamierzam kupować nowego samochodu.
Завтра буде сонячно.|Jutro będzie słonecznie.
Наступного року я хочу знайти нову роботу.|W przyszłym roku chcę znaleźć nową pracę.
Ми збираємося пофарбувати кухню.|Zamierzamy pomalować kuchnię.
Я допоможу тобі з сумками.|Pomogę ci z torbami.
Мій брат починає навчання в жовтні.|Mój brat zaczyna studia w październiku.
Ти збираєшся продавати квартиру?|Czy zamierzasz sprzedać mieszkanie?
Може, підемо на каву?|Może pójdziemy na kawę?
Сподіваюся, що не буде дощу.|Mam nadzieję, że nie będzie padać.
Побачимо.|Zobaczymy.
`},
{ id: "x4-aspect", t: "Aspekt: robić czy zrobić?", d: "Proces (читав) czy rezultat (прочитав)? Jak po polsku!", k: "f", i: `
Я вже {прочитав} цю книгу.|Już przeczytałem tę książkę.|читав,читаю|Skończona czynność z rezultatem → aspekt dokonany.
Я довго {читав} цю книгу.|Długo czytałem tę książkę.|прочитав,прочитаю|Proces, trwanie → aspekt niedokonany.
Щодня я {п'ю} каву.|Codziennie piję kawę.|вип'ю,випив
Я {випив} каву і пішов.|Wypiłem kawę i wyszedłem.|пив,п'ю
Вона завжди {купує} хліб тут.|Ona zawsze kupuje tu chleb.|купить,купила
Вчора вона {купила} новий телефон.|Wczoraj kupiła nowy telefon.|купувала,купує
Я {зроблю} домашнє завдання ввечері.|Zrobię pracę domową wieczorem.|роблю,робив
Що ти зараз {робиш}?|Co teraz robisz?|зробиш,зробив
Він {писав} лист цілу годину.|Pisał list całą godzinę.|написав,напише
Він {написав} лист і відправив його.|Napisał list i go wysłał.|писав,пише
Ми часто {зустрічаємося} в кафе.|Często spotykamy się w kawiarni.|зустрінемося,зустрілися
Ми {зустрілися} вчора випадково.|Spotkaliśmy się wczoraj przypadkiem.|зустрічаємося,зустрінемося
Не {відкривай} вікно!|Nie otwieraj okna!|відкрий,відкрив|W zakazach zwykle używamy aspektu niedokonanego.
{Відкрий}, будь ласка, вікно.|Otwórz, proszę, okno.|Відкривав,Відкриє
Я {забув} ключі вдома.|Zapomniałem kluczy z domu.|забував,забуваю
Я часто {забуваю} паролі.|Często zapominam hasła.|забуду,забув
Коли ти {закінчиш}, подзвони мені.|Kiedy skończysz, zadzwoń do mnie.|закінчуєш,закінчував
Ми {відпочивали} на морі два тижні.|Odpoczywaliśmy nad morzem dwa tygodnie.|відпочили,відпочинемо
Нарешті ми {відпочили}!|Wreszcie odpoczęliśmy!|відпочивали,відпочиваємо
Я {вивчу} ці слова до завтра.|Nauczę się tych słów do jutra.|вчу,вчив
`},
{ id: "x4-sent-compare", t: "Zdania: porównania", d: "Starszy, najlepszy, tak samo jak.", k: "o", ex: SENT, i: `
Моя сестра молодша за мене.|Moja siostra jest młodsza ode mnie.
Це найкращий день у моєму житті.|To najlepszy dzień w moim życiu.
Поїзди швидші за автобуси.|Pociągi są szybsze od autobusów.
Польська мова схожа на українську.|Język polski jest podobny do ukraińskiego.
Хто найстарший у вашій родині?|Kto jest najstarszy w waszej rodzinie?
Цей готель дорожчий, ніж той.|Ten hotel jest droższy niż tamten.
Сьогодні холодніше, ніж учора.|Dziś jest zimniej niż wczoraj.
Вона така ж висока, як її мама.|Ona jest tak samo wysoka jak jej mama.
Мій новий телефон набагато кращий.|Mój nowy telefon jest dużo lepszy.
Це найгарніше місто в Україні.|To najładniejsze miasto na Ukrainie.
Другий тест був важчий.|Drugi test był trudniejszy.
Твоя українська краща за мою.|Twój ukraiński jest lepszy od mojego.
Яке місто більше?|Które miasto jest większe?
Він найсмішніша людина, яку я знаю.|To najzabawniejszy człowiek, jakiego znam.
Життя в селі спокійніше.|Życie na wsi jest spokojniejsze.
Погода стає гіршою.|Pogoda się pogarsza.
Найвища гора в Україні – Говерла.|Najwyższa góra na Ukrainie to Howerla.
Кава в Польщі популярніша, ніж чай?|Czy kawa w Polsce jest popularniejsza niż herbata?
Ця кімната замала для нас.|Ten pokój jest dla nas za mały.
Чим більше вчишся, тим більше знаєш.|Im więcej się uczysz, tym więcej wiesz.
`},
{ id: "x4-compare", t: "Stopniowanie", d: "Старший, кращий, найкращий.", k: "f", i: `
Мій брат {старший} за мене.|Mój brat jest starszy ode mnie.|старий,найстарший|Stopień wyższy: -ший / -іший + за (albo ніж): старший за мене.
Це {найкращий} день у моєму житті.|To najlepszy dzień w moim życiu.|кращий,добрий|Най- + stopień wyższy = stopień najwyższy.
Київ {більший}, ніж Львів.|Kijów jest większy niż Lwów.|великий,найбільший
Сьогодні {холодніше}, ніж учора.|Dziś jest zimniej niż wczoraj.|холодно,найхолодніше
Ця сукня {дорожча} за ту.|Ta sukienka jest droższa od tamtej.|дорога,найдорожча
Поїзд {швидший} за автобус.|Pociąg jest szybszy od autobusu.|швидкий,найшвидший
Хто {найвищий} у вашому класі?|Kto jest najwyższy w waszej klasie?|вищий,високий
Англійська {легша}, ніж українська?|Czy angielski jest łatwiejszy niż ukraiński?|легка,найлегша
Моя кімната {менша} за твою.|Mój pokój jest mniejszy od twojego.|маленька,найменша
Це {найсмачніший} борщ!|To najsmaczniejszy barszcz!|смачніший,смачний
Він говорить {краще}, ніж я.|On mówi lepiej niż ja.|добре,найкраще
Мені {гірше}, ніж учора.|Czuję się gorzej niż wczoraj.|погано,найгірше
Ця книга {цікавіша} за фільм.|Ta książka jest ciekawsza od filmu.|цікава,найцікавіша
Літо – {найтепліша} пора року.|Lato to najcieplejsza pora roku.|тепліша,тепла
Говоріть {повільніше}, будь ласка.|Proszę mówić wolniej.|повільно,найповільніше
Вона така ж {висока}, як мама.|Ona jest tak samo wysoka jak mama.|вища,найвища|Такий же … як = tak samo … jak.
Ціни стають {вищими}.|Ceny stają się wyższe.|високими,найвищими
Сьогодні {більше} людей, ніж минулого року.|Dziś jest więcej ludzi niż w zeszłym roku.|багато,найбільше
Що {важливіше}: гроші чи здоров'я?|Co jest ważniejsze: pieniądze czy zdrowie?|важливо,найважливіше
Це {найдовша} річка в Україні.|To najdłuższa rzeka na Ukrainie.|довша,довга
`},
{ id: "x4-sent-travel", t: "Zdania: wakacje w przeszłości", d: "Opowiedz o podróży.", k: "o", ex: SENT, i: `
Минулого року ми летіли до Лондона.|W zeszłym roku lecieliśmy do Londynu.
Наш рейс затримали.|Nasz lot był opóźniony.
Готель був біля моря.|Hotel był blisko morza.
Ми були там тиждень.|Byliśmy tam tydzień.
Я загубив паспорт в аеропорту.|Zgubiłem paszport na lotnisku.
Ми взяли машину напрокат.|Wypożyczyliśmy samochód.
Їжа була дуже смачна.|Jedzenie było bardzo smaczne.
Ми зробили багато фотографій.|Zrobiliśmy dużo zdjęć.
Я купив сувеніри для друзів.|Kupiłem pamiątki dla przyjaciół.
Погода була жахлива.|Pogoda była okropna.
Тобі сподобалася відпустка?|Podobał ci się urlop?
Де ви зупинилися?|Gdzie się zatrzymaliście?
Ми гуляли старим містом.|Spacerowaliśmy po starym mieście.
Пляж був переповнений.|Plaża była zatłoczona.
Я плавав у морі щодня.|Codziennie pływałem w morzu.
Ми запізнилися на останній поїзд.|Spóźniliśmy się na ostatni pociąg.
Як ви туди дісталися?|Jak się tam dostaliście?
Ми їхали машиною.|Jechaliśmy samochodem.
Подорож тривала десять годин.|Podróż trwała dziesięć godzin.
Ми повернулися в неділю.|Wróciliśmy w niedzielę.
`},
{ id: "x4-instrumental", t: "Kim? Czym? Narzędnik", d: "Автобусом, з мамою, працює вчителем.", k: "f", i: `
Я їду {автобусом}.|Jadę autobusem.|автобус,автобуса|Narzędnik (чим?): автобусом, поїздом, літаком.
Вона пише {ручкою}.|Ona pisze długopisem.|ручка,ручку
Я хочу стати {лікарем}.|Chcę zostać lekarzem.|лікар,лікаря
Він працює {вчителем}.|On pracuje jako nauczyciel.|вчитель,вчителя|Працювати ким? – narzędnik: працює вчителем.
Я п'ю чай з {цукром}.|Piję herbatę z cukrem.|цукор,цукру
Ми гуляємо з {собакою}.|Spacerujemy z psem.|собака,собаку
Я розмовляю з {мамою}.|Rozmawiam z mamą.|мама,мамі
Він цікавиться {музикою}.|Interesuje się muzyką.|музика,музику
Я займаюся {спортом}.|Uprawiam sport.|спорт,спорту
Ми їдемо {поїздом}.|Jedziemy pociągiem.|поїзд,поїзда
Кава з {молоком}, будь ласка.|Kawa z mlekiem, proszę.|молоко,молока
Я пишаюся {тобою}.|Jestem z ciebie dumny.|ти,тебе|Пишатися ким / чим – narzędnik.
Над {столом} висить лампа.|Nad stołem wisi lampa.|стіл,столі
Між {домом} і школою є парк.|Między domem a szkołą jest park.|дім,дому
Перед {будинком} стоїть машина.|Przed budynkiem stoi samochód.|будинок,будинку
За {школою} є стадіон.|Za szkołą jest stadion.|школа,школі
Я їм суп {ложкою}.|Jem zupę łyżką.|ложка,ложку
Вона стала {мамою}.|Ona została mamą.|мама,мамі
Ми летимо {літаком}.|Lecimy samolotem.|літак,літака
Хліб із {маслом}.|Chleb z masłem.|масло,масла
`},
{ id: "x4-sent-advice", t: "Zdania: rady i obowiązki", d: "Треба, мусиш, не можна, варто.", k: "o", ex: SENT, i: `
Тобі треба пити більше води.|Powinieneś pić więcej wody.
Не працюй так багато.|Nie pracuj tak dużo.
Може, запитаєш учителя?|Może zapytasz nauczyciela?
Думаю, тобі треба йти спати.|Myślę, że powinieneś iść spać.
Ти мусиш бути обережним.|Musisz być ostrożny.
Не обов'язково вдягати краватку.|Nie trzeba zakładać krawata.
Нам треба вже йти.|Musimy już iść.
Тут не можна паркуватися.|Tu nie wolno parkować.
Що мені робити?|Co mam robić?
На твоєму місці я б почекав.|Na twoim miejscu bym poczekał.
Попросімо когось про допомогу.|Poprośmy kogoś o pomoc.
Чи треба платити зараз?|Czy trzeba płacić teraz?
Можеш узяти мій велосипед.|Możesz wziąć mój rower.
Відчиніть, будь ласка, вікно.|Proszę otworzyć okno.
Можна скористатися твоїм телефоном?|Czy mogę skorzystać z twojego telefonu?
Можна увійти?|Czy można wejść?
Краще поспішай.|Lepiej się pospiesz.
Спробуй розслабитися.|Spróbuj się zrelaksować.
Не хвилюйся через це.|Nie martw się tym.
Варто забронювати столик.|Warto zarezerwować stolik.
`}
]);
})();
