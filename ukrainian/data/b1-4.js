/* Etapy 4–5 – słownictwo A2–B1: podróże, przyroda, bank, telefon, miary. */
(function () {
var CHOICE = ["en2pl", "pl2en", "listen"];
ADD("s4", [
{ id: "x4-trip", t: "Samolot i pociąg", d: "Przesiadka, karta pokładowa, przedział, konduktor.", k: "v", i: `
паспорт|paszport
квиток|bilet
рейс|lot (kurs)
виліт|odlot
приліт|przylot
пересадка|przesiadka
багаж|bagaż
ручна поклажа|bagaż podręczny
валіза|walizka
посадковий талон|karta pokładowa
вихід на посадку|wyjście do samolotu (gate)
митниця|urząd celny
прикордонний контроль|kontrola graniczna
затримка|opóźnienie
скасування|odwołanie (lotu)
перон|peron
вагон|wagon
купе|przedział
місце|miejsce
розклад|rozkład jazdy
каса|kasa
туди й назад|w obie strony
в один бік|w jedną stronę
провідник|konduktor
залізниця|kolej
`},
{ id: "x4-nature", t: "Przyroda", d: "Las, łąka, kamień, gałąź, strumień.", k: "v", i: `
ліс|las
гора|góra
річка|rzeka
озеро|jezioro
море|morze
пляж|plaża
поле|pole
луг|łąka
небо|niebo
зірка|gwiazda
місяць|księżyc
земля|ziemia
камінь|kamień
пісок|piasek
трава|trawa
квітка|kwiat
дерево|drzewo
листок|liść
гілка|gałąź
корінь|korzeń
берег|brzeg
хвиля|fala
скеля|skała
струмок|strumyk
природа|przyroda
`},
{ id: "x4-animals2", t: "Zwierzęta 2", d: "Niedźwiedź, wilk, lis, sowa, orzeł.", k: "v", i: `
ведмідь|niedźwiedź
вовк|wilk
лисиця|lis
заєць|zając
олень|jeleń
мавпа|małpa
слон|słoń
лев|lew
тигр|tygrys
жираф|żyrafa
зебра|zebra
верблюд|wielbłąd
змія|wąż
черепаха|żółw
жаба|żaba
крокодил|krokodyl
дельфін|delfin
кит|wieloryb
акула|rekin
сова|sowa
орел|orzeł
голуб|gołąb
курка|kura
качка|kaczka
гуска|gęś
`},
{ id: "x4-perfective", t: "Czasowniki dokonane", d: "Zrobić, powiedzieć, znaleźć, zrozumieć…", k: "v", i: `
зробити|zrobić
сказати|powiedzieć
побачити|zobaczyć
почути|usłyszeć
купити|kupić
знайти|znaleźć
загубити|zgubić
забути|zapomnieć
згадати|przypomnieć sobie
прийти|przyjść
приїхати|przyjechać
взяти|wziąć
дати|dać
відкрити|otworzyć
закрити|zamknąć
почати|zacząć
закінчити|skończyć
вирішити|zdecydować
зрозуміти|zrozumieć
вивчити|nauczyć się (czegoś)
написати|napisać
прочитати|przeczytać
з'їсти|zjeść
випити|wypić
допомогти|pomóc
`},
{ id: "x4-materials", t: "Materiały i kształty", d: "Drewniany, szklany, okrągły, przezroczysty.", k: "v", i: `
дерев'яний|drewniany
металевий|metalowy
скляний|szklany
пластиковий|plastikowy
паперовий|papierowy
шкіряний|skórzany
вовняний|wełniany
бавовняний|bawełniany
золотий|złoty
срібний|srebrny
кам'яний|kamienny
круглий|okrągły
квадратний|kwadratowy
прямокутний|prostokątny
трикутний|trójkątny
овальний|owalny
плоский|płaski
гострий ніж|ostry nóż
тупий ніж|tępy nóż
гладкий|gładki
шорсткий|szorstki
твердий|twardy
прозорий|przezroczysty
блискучий|błyszczący
важкий камінь|ciężki kamień
`},
{ id: "x4-bank", t: "W banku", d: "Wypłacić pieniądze, prowizja, wyciąg.", k: "v", i: `
рахунок|konto (rachunek)
банківська картка|karta bankowa
пін-код|PIN
зняти гроші|wypłacić pieniądze
покласти гроші на рахунок|wpłacić pieniądze na konto
баланс|saldo
кредитна картка|karta kredytowa
відділення банку|oddział banku
обмін валют|wymiana walut
комісія|prowizja
монета|moneta
банкнота|banknot
гаманець|portfel
платіж|płatność
оплатити рахунок|opłacić rachunek
квитанція|pokwitowanie
виписка|wyciąg (z konta)
онлайн-банкінг|bankowość internetowa
відкрити рахунок|założyć konto
закрити рахунок|zamknąć konto
номер рахунку|numer konta
одержувач|odbiorca
сума|kwota
заблокувати картку|zablokować kartę
дрібні гроші|drobne
`},
{ id: "x4-bodymoves", t: "Ruchy ciała", d: "Kiwać głową, ziewać, kichać, przytulać.", k: "v", i: `
кивати|kiwać (głową)
махати рукою|machać ręką
підморгувати|mrugać (puszczać oko)
посміхатися|uśmiechać się
сміятися|śmiać się
плакати|płakać
кричати|krzyczeć
шепотіти|szeptać
позіхати|ziewać
чхати|kichać
кашляти|kaszleć
дихати|oddychać
ковтати|połykać
жувати|żuć
кусати|gryźć
нюхати|wąchać
торкатися|dotykać
обіймати|przytulać
цілувати|całować
штовхати|pchać
тягнути|ciągnąć
піднімати|podnosić
кидати|rzucać
ловити|łapać
показувати пальцем|pokazywać palcem
`},
{ id: "x4-adj3", t: "Przymiotniki 3", d: "Ważny, prosty, wygodny, zwykły, ostatni.", k: "v", i: `
цікавий|ciekawy
нудний|nudny
важливий|ważny
корисний|pożyteczny
простий|prosty
складний|trudny (skomplikowany)
зручний|wygodny
незручний|niewygodny
можливий|możliwy
неможливий|niemożliwy
правильний|prawidłowy
неправильний|nieprawidłowy
готовий|gotowy
відомий|znany
популярний|popularny
особливий|szczególny
звичайний|zwykły
головний|główny
різний|różny
однаковий|jednakowy
наступний|następny
останній|ostatni
власний|własny
справжній|prawdziwy
вільний|wolny
`}
]);
ADD("s5", [
{ id: "x5-verbs-b1", t: "Czasowniki B1", d: "Wyjaśniać, obiecywać, odmawiać, narzekać.", k: "v", i: `
пояснювати|wyjaśniać
описувати|opisywać
обіцяти|obiecywać
запрошувати|zapraszać
погоджуватися|zgadzać się
відмовлятися|odmawiać
сперечатися|kłócić się (spierać się)
скаржитися|skarżyć się (narzekać)
вибачатися|przepraszać
дякувати|dziękować
вітати|witać (gratulować)
радити|radzić
пропонувати|proponować
планувати|planować
організовувати|organizować
готуватися|przygotowywać się
сподіватися|mieć nadzieję
мріяти|marzyć
боятися|bać się
хвалити|chwalić
критикувати|krytykować
перемагати|zwyciężać
змінювати|zmieniać
повторювати|powtarzać
перевіряти|sprawdzać
`},
{ id: "x5-phone", t: "Rozmowa telefoniczna", d: "Halo! Kto mówi? Oddzwonię później.", k: "v", ex: CHOICE, i: `
Алло!|Halo!
Слухаю.|Słucham.
Хто це говорить?|Kto mówi?
Можна Олену?|Czy mogę rozmawiać z Oleną?
Її зараз немає.|Nie ma jej teraz.
Що їй передати?|Co jej przekazać?
Я передзвоню пізніше.|Oddzwonię później.
Ви помилилися номером.|Pomylił się Pan numerem.
Вас погано чути.|Słabo Pana słychać.
Говоріть голосніше, будь ласка.|Proszę mówić głośniej.
Зв'язок переривається.|Połączenie się urywa.
У мене сідає батарея.|Rozładowuje mi się bateria.
Залиште повідомлення.|Proszę zostawić wiadomość.
Я не можу зараз говорити.|Nie mogę teraz rozmawiać.
Передзвони мені.|Oddzwoń do mnie.
Дякую за дзвінок.|Dziękuję za telefon.
Зачекайте хвилинку.|Proszę chwilę poczekać.
З'єдную.|Łączę.
Лінія зайнята.|Linia jest zajęta.
Вибачте, що турбую.|Przepraszam, że przeszkadzam.
Я дзвоню щодо замовлення.|Dzwonię w sprawie zamówienia.
Продиктуйте, будь ласка, номер.|Proszę podyktować numer.
Повторіть, будь ласка.|Proszę powtórzyć.
Я вам напишу.|Napiszę do Pana.
До зв'язку!|Do usłyszenia!
`},
{ id: "x5-mood", t: "Nastrój i emocje B1", d: "Rozczarowany, poirytowany, zaskoczony.", k: "v", i: `
задоволений|zadowolony
незадоволений|niezadowolony
розчарований|rozczarowany
схвильований|przejęty (podekscytowany)
роздратований|poirytowany
збентежений|zakłopotany
наляканий|przestraszony
ображений|obrażony
вражений|pod wrażeniem
зацікавлений|zainteresowany
пригнічений|przygnębiony
натхненний|natchniony
виснажений|wyczerpany
розгублений|zagubiony (zdezorientowany)
засмучений|zmartwiony
обурений|oburzony
заздрісний|zazdrosny
вдячний|wdzięczny
самотній|samotny
захоплений|zachwycony
спокійний|spokojny
знервований|zdenerwowany
веселий|wesoły
сердитий|zły (rozgniewany)
щасливий|szczęśliwy
`},
{ id: "x5-officeitems", t: "Przybory biurowe", d: "Drukarka, zszywacz, spinacz, koperta.", k: "v", i: `
принтер|drukarka
ксерокс|kserokopiarka
сканер|skaner
папір|papier
олівець|ołówek
гумка|gumka
лінійка|linijka
степлер|zszywacz
скріпка|spinacz
ножиці|nożyczki
клей|klej
папка|teczka
конверт|koperta
марка|znaczek
блокнот|notes
календар|kalendarz
дошка|tablica
маркер|marker
наліпка|naklejka
калькулятор|kalkulator
флешка|pendrive
навушники|słuchawki
мишка|myszka
клавіатура|klawiatura
монітор|monitor
`},
{ id: "x5-car", t: "Samochód", d: "Kierownica, hamulec, bagażnik, pas.", k: "v", i: `
кермо|kierownica
гальмо|hamulec
педаль газу|pedał gazu
колесо|koło
шина|opona
фара|reflektor
багажник|bagażnik
капот|maska
двигун|silnik
бензин|benzyna
дизель|olej napędowy
ремінь безпеки|pas bezpieczeństwa
дзеркало заднього виду|lusterko wsteczne
номерний знак|tablica rejestracyjna
посвідчення водія|prawo jazdy
паркуватися|parkować
обганяти|wyprzedzać
гальмувати|hamować
заводити машину|zapalać samochód
пробити шину|złapać gumę
дорожньо-транспортна пригода|wypadek drogowy
швидкість|prędkość
пасажир|pasażer
водійське сидіння|fotel kierowcy
заправити машину|zatankować samochód
`},
{ id: "x5-polite", t: "Zwroty grzecznościowe", d: "Czy mógłby Pan…? Nic nie szkodzi. Wzajemnie.", k: "v", ex: CHOICE, i: `
Чи не могли б ви мені допомогти?|Czy mógłby mi Pan pomóc?
Будьте такі ласкаві.|Proszę być tak uprzejmym.
Чи не заперечуєте, якщо я відчиню вікно?|Czy nie ma Pan nic przeciwko, żebym otworzył okno?
Якщо вам не важко…|Jeśli to nie kłopot…
Дозвольте пройти.|Proszę pozwolić mi przejść.
Перепрошую, що перебиваю.|Przepraszam, że przerywam.
Вибачте за запізнення.|Przepraszam za spóźnienie.
Мені дуже шкода.|Bardzo mi przykro.
Нічого страшного.|Nic nie szkodzi.
Не варто дякувати.|Nie ma za co dziękować.
Радий допомогти.|Cieszę się, że mogłem pomóc.
Ви дуже люб'язні.|Jest Pan bardzo uprzejmy.
Прошу вибачення.|Proszę o wybaczenie.
Коли вам зручно?|Kiedy Panu pasuje?
Дякую, що знайшли час.|Dziękuję, że znalazł Pan czas.
Мені дуже приємно.|Bardzo mi miło.
Взаємно.|Wzajemnie.
Щиро дякую.|Serdecznie dziękuję.
Дуже вам вдячний.|Jestem Panu bardzo wdzięczny.
Чи можна вас на хвилинку?|Czy mogę Pana prosić na chwilkę?
Залюбки.|Chętnie.
З радістю допоможу.|Z radością pomogę.
Не турбуйтеся.|Proszę się nie kłopotać.
Як вам буде зручніше.|Jak będzie Panu wygodniej.
Дякую за вашу доброту.|Dziękuję za Pana życzliwość.
`},
{ id: "x5-measures", t: "Ilości i miary", d: "Połowa, ćwierć, tuzin, szerokość, głębokość.", k: "v", i: `
половина|połowa
третина|jedna trzecia
чверть|ćwierć
пара|para
десяток|dziesiątka (dziesięć sztuk)
дюжина|tuzin
сотня|setka
мільйон|milion
мільярд|miliard
відсоток|procent
грам|gram
літр|litr
метр|metr
сантиметр|centymetr
кілометр|kilometr
тонна|tona
ширина|szerokość
довжина|długość
висота|wysokość
глибина|głębokość
вага|waga (ciężar)
розмір|rozmiar
кількість|ilość
площа|powierzchnia
об'єм|objętość
`},
{ id: "x5-web", t: "Internet B1", d: "Hasło, załącznik, zakładka, powiadomienie.", k: "v", i: `
пароль|hasło
логін|login
обліковий запис|konto (użytkownika)
зареєструватися|zarejestrować się
увійти|zalogować się
вийти|wylogować się
посилання|link (odnośnik)
вкладення|załącznik
пошукова система|wyszukiwarka
сайт|strona internetowa
сторінка|strona
браузер|przeglądarka
вкладка|karta (zakładka)
налаштування|ustawienia
сповіщення|powiadomienie
кошик|koszyk
оформити замовлення|złożyć zamówienie
відгук|opinia (recenzja)
коментар|komentarz
поділитися|udostępnić (podzielić się)
підписатися|zasubskrybować
відписатися|anulować subskrypcję
спам|spam
вайфай|Wi-Fi
оновити сторінку|odświeżyć stronę
`}
]);
})();
