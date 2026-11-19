/* Etap 5 i 6 – zwroty praktyczne i słówka B1. */
(function () {
var CHOICE = ["en2pl", "pl2en", "listen"];
ADD("s5", [
{ id: "x5-shop-phrases", t: "Zwroty: w sklepie", d: "Reklamacja, wymiana, zły rozmiar, wezmę to.", k: "v", ex: CHOICE, i: `
Я хочу поскаржитися.|Chcę złożyć reklamację.
Це не працює.|To nie działa.
Це не мій розмір.|To nie mój rozmiar.
Можна це обміняти?|Czy mogę to wymienić?
У вас є чек?|Czy ma Pan paragon?
Це зі знижкою?|Czy to jest przecenione?
Запакуйте, будь ласка.|Proszę zapakować.
Ви доставляєте додому?|Czy dostarczacie do domu?
Цього немає в наявності.|Tego nie ma na stanie.
Ми можемо це замовити для вас.|Możemy to dla Pana zamówić.
Де можна заплатити?|Gdzie można zapłacić?
Введіть пін-код, будь ласка.|Proszę wpisać PIN.
Вам потрібен пакет?|Czy potrzebuje Pan reklamówki?
Разом двісті гривень.|Razem dwieście hrywien.
Ось ваша решта.|Oto reszta.
Можна знижку?|Czy mogę dostać zniżkę?
Це вигідна покупка!|To okazja!
Мені тісно.|Jest mi za ciasno.
У вас є такий самий у чорному кольорі?|Czy macie taki sam w czarnym kolorze?
Я це візьму.|Wezmę to.
Можна повернути гроші?|Czy można dostać zwrot pieniędzy?
Термінал не працює.|Terminal nie działa.
На це є гарантія?|Czy jest na to gwarancja?
О котрій ви зачиняєтеся?|O której zamykacie?
Скільки це коштує зі знижкою?|Ile to kosztuje po zniżce?
`},
{ id: "x5-restaurant-phrases", t: "Zwroty: w restauracji", d: "Co Pan poleca? Płacimy osobno. Na wynos?", k: "v", ex: CHOICE, i: `
Ви вже готові замовити?|Czy są już Państwo gotowi zamówić?
Що ви порадите?|Co Pan poleca?
Тут є горіхи?|Czy są tu orzechy?
Мені те саме.|Dla mnie to samo.
Можна ще хліба?|Czy można jeszcze chleba?
Вода з газом чи без газу?|Woda gazowana czy niegazowana?
Можна десертне меню?|Czy można kartę deserów?
Я це не замовляв.|Tego nie zamawiałem.
Їжа холодна.|Jedzenie jest zimne.
Ми заплатимо окремо.|Zapłacimy osobno.
Я забронював столик.|Zarezerwowałem stolik.
Столик біля вікна, будь ласка.|Stolik przy oknie, proszę.
Можна винну карту?|Czy można kartę win?
Було дуже смачно, дякую.|Było bardzo smaczne, dziękuję.
Принесіть, будь ласка, води.|Proszę przynieść wody.
Це місце вільне?|Czy to miejsce jest wolne?
Ми готові замовити.|Jesteśmy gotowi zamówić.
Тут чи з собою?|Na miejscu czy na wynos?
Ви приймаєте картки?|Czy przyjmujecie karty?
Частуйтеся!|Częstujcie się!
Смачного вам!|Smacznego!
Я вегетаріанець.|Jestem wegetarianinem.
Без цибулі, будь ласка.|Bez cebuli, proszę.
Можна ще одну каву?|Czy można jeszcze jedną kawę?
Чайові включені?|Czy napiwek jest wliczony?
`},
{ id: "x5-travel-phrases", t: "Zwroty: w podróży", d: "Ile się jedzie? Czy to miejsce jest zajęte?", k: "v", ex: CHOICE, i: `
Скільки їхати?|Ile się jedzie?
Як далеко це?|Jak daleko to jest?
Цей автобус їде до аеропорту?|Czy ten autobus jedzie na lotnisko?
Скажіть, будь ласка, де мені вийти.|Proszę powiedzieć, gdzie mam wysiąść.
Квиток туди й назад до Львова, будь ласка.|Bilet w obie strony do Lwowa, proszę.
З якої платформи відходить поїзд?|Z którego peronu odjeżdża pociąg?
Це місце зайняте?|Czy to miejsce jest zajęte?
Я хочу орендувати машину.|Chcę wynająć samochód.
Де можна взяти таксі?|Gdzie można złapać taksówkę?
Відвезіть мене за цією адресою.|Proszę mnie zawieźć pod ten adres.
Скільки коштує проїзд?|Ile kosztuje przejazd?
Мій рейс скасували.|Mój lot został odwołany.
Мій багаж не прибув.|Mój bagaż nie dotarł.
Де стійка реєстрації?|Gdzie jest stanowisko odprawy?
Біля вікна чи біля проходу?|Przy oknie czy przy przejściu?
Мені потрібна віза?|Czy potrzebuję wizy?
Маєте що декларувати?|Ma Pan coś do oclenia?
Яка мета вашої поїздки?|Jaki jest cel Pana podróży?
Я тут у відпустці.|Jestem tu na urlopie.
Я у відрядженні.|Jestem w delegacji.
Як довго ви тут будете?|Jak długo Pan tu będzie?
Порадьте гарний готель.|Proszę polecić dobry hotel.
Сніданок включено?|Czy śniadanie jest wliczone?
Можна залишити тут сумки?|Czy mogę zostawić tu torby?
Сфотографуйте нас, будь ласка.|Proszę zrobić nam zdjęcie.
`},
{ id: "x5-health-phrases", t: "Zwroty: u lekarza", d: "Co Pana dolega? Gdzie boli? Wypiszę receptę.", k: "v", ex: CHOICE, i: `
Я хочу записатися до лікаря.|Chcę zapisać się do lekarza.
Що вас турбує?|Co Pana dolega?
Де болить?|Gdzie boli?
Болить тут.|Boli tutaj.
У мене три дні болить голова.|Od trzech dni boli mnie głowa.
Я не можу спати.|Nie mogę spać.
У мене температура.|Mam gorączkę.
Я весь час кашляю.|Cały czas kaszlę.
Мені трохи краще.|Jest mi trochę lepiej.
Приймайте дві таблетки на день.|Proszę brać dwie tabletki dziennie.
Ви приймаєте якісь ліки?|Czy przyjmuje Pan jakieś leki?
У вас є алергія?|Czy ma Pan alergię?
Глибоко вдихніть.|Proszę głęboko wciągnąć powietrze.
Відкрийте рот, будь ласка.|Proszę otworzyć usta.
Я випишу вам рецепт.|Wypiszę Panu receptę.
Вам треба відпочивати.|Musi Pan odpoczywać.
Пийте багато рідини.|Proszę dużo pić.
Приходьте, якщо стане гірше.|Proszę przyjść, jeśli się pogorszy.
Я підвернув ногу.|Skręciłem nogę.
Здається, це перелом.|Wygląda na złamanie.
Я вагітна.|Jestem w ciąży.
Як часто це приймати?|Jak często to brać?
До їжі чи після?|Przed jedzeniem czy po?
Це серйозно?|Czy to coś poważnego?
Одужуйте!|Szybkiego powrotu do zdrowia!
`},
{ id: "x5-everyday", t: "Zwroty potoczne", d: "Kopę lat! Co nowego? Ja stawiam.", k: "v", ex: CHOICE, i: `
Давно не бачилися!|Kopę lat!
Як життя?|Jak życie?
Що нового?|Co nowego?
Нічого особливого.|Nic szczególnego.
Звучить добре.|Brzmi dobrze.
Не переживай.|Nie przejmuj się.
Нема за що.|Nie ma za co.
З задоволенням.|Z przyjemnością.
Хвилинку.|Chwileczkę.
Я пішов.|Już idę (lecę).
Бувай здоров!|Bywaj zdrów!
Не бери до голови.|Nie bierz sobie tego do głowy.
Та ти що!|Co ty mówisz!
Серйозно?|Serio?
Яке полегшення!|Co za ulga!
Будь як удома.|Czuj się jak u siebie.
Я пригощаю.|Ja stawiam.
Будь здоров!|Na zdrowie! (po kichnięciu)
Молодець!|Brawo!
І тобі теж!|Nawzajem!
Звертайся.|Zawsze służę pomocą.
Я зараз повернуся.|Zaraz wracam.
Тримай.|Proszę (masz).
Після вас.|Proszę przodem.
Шкода!|Szkoda!
`},
{ id: "x5-emergency", t: "Nagłe sytuacje", d: "Pomocy! Proszę wezwać karetkę! Okradziono mnie.", k: "v", ex: CHOICE, i: `
Допоможіть!|Pomocy!
Викличте швидку!|Proszę wezwać karetkę!
Викличте поліцію!|Proszę wezwać policję!
Пожежа!|Pożar!
Обережно!|Uwaga!
Тримайте злодія!|Łapać złodzieja!
Мене пограбували.|Okradziono mnie.
Я загубив паспорт.|Zgubiłem paszport.
Сталася аварія.|Zdarzył się wypadek.
Хтось поранений?|Czy ktoś jest ranny?
Мені потрібен лікар.|Potrzebuję lekarza.
Де найближча лікарня?|Gdzie jest najbliższy szpital?
У мене алергія на горіхи.|Mam alergię na orzechy.
Він не дихає.|On nie oddycha.
Зберігайте спокій.|Proszę zachować spokój.
Це терміново.|To pilne.
У мене зламалася машина.|Zepsuł mi się samochód.
Я не можу потрапити додому.|Nie mogę dostać się do domu.
Ліфт застряг.|Winda utknęła.
Можете мені допомогти?|Czy może mi Pan pomóc?
аварійний вихід|wyjście awaryjne
перша допомога|pierwsza pomoc
номер екстреної служби|numer alarmowy
У мене паморочиться голова.|Kręci mi się w głowie.
Я порізав палець.|Skaleczyłem się w palec.
`},
{ id: "x5-hotel", t: "W hotelu", d: "Klucz do pokoju, brak miejsc, przechowalnia.", k: "v", i: `
ключ від номера|klucz do pokoju
обслуговування номерів|obsługa pokoju
дзвінок-будильник|budzenie telefoniczne
сніданок включено|śniadanie w cenie
немає вільних місць|brak wolnych miejsc
вільний номер|wolny pokój
номер із двома ліжками|pokój z dwoma łóżkami
люкс|apartament (luks)
сейф|sejf
носій|bagażowy
галасливий номер|głośny pokój
вид на море|widok na morze
час заселення|godzina zameldowania
час виселення|godzina wymeldowania
пізнє виселення|późne wymeldowanie
підтвердження бронювання|potwierdzenie rezerwacji
скасувати бронювання|anulować rezerwację
додаткове ліжко|dodatkowe łóżko
Не турбувати|Nie przeszkadzać
пароль від вайфаю|hasło do Wi-Fi
камера схову|przechowalnia bagażu
рецепція|recepcja
гість готелю|gość hotelowy
з кондиціонером|klimatyzowany
власна ванна кімната|własna łazienka
`},
{ id: "x5-household", t: "Przedmioty w domu", d: "Wieszak, kołdra, miotła, obrus.", k: "v", i: `
вішалка|wieszak
ваза|wazon
рамка|ramka
диванна подушка|poduszka ozdobna
ковдра|kołdra
матрац|materac
килимок|dywanik
абажур|abażur
килимок біля дверей|wycieraczka
гачок|haczyk
совок|szufelka
віник|miotła
пилосос|odkurzacz
кошик для білизни|kosz na pranie
прищіпка|klamerka do bielizny
прасувальна дошка|deska do prasowania
подовжувач|przedłużacz
будильник|budzik
жалюзі|żaluzje
скатертина|obrus
столові прибори|sztućce
обробна дошка|deska kuchenna
прихватка|łapka kuchenna
паперові рушники|ręczniki papierowe
тумбочка|szafka nocna
`}
]);
ADD("s6", [
{ id: "x6-clothes-desc", t: "Opis ubrań", d: "W paski, w kratkę, w groszki, z długim rękawem.", k: "v", i: `
смугастий|w paski
картатий|w kratkę
у горошок|w groszki
однотонний|jednolity
візерунчастий|wzorzysty
у квіточку|w kwiatki
тісний|obcisły
мішкуватий|workowaty
з довгим рукавом|z długim rękawem
з коротким рукавом|z krótkim rękawem
без рукавів|bez rękawów
водонепроникний|wodoodporny
модний|modny
старомодний|staromodny
повсякденний|codzienny (casual)
елегантний|elegancki
пасувати|pasować (do kogoś)
підходити за розміром|pasować rozmiarem
поєднуватися|pasować do siebie
вбиратися|stroić się
роздягатися|rozbierać się
шовк|jedwab
джинсова тканина|dżins (materiał)
вовна|wełna
бавовна|bawełna
`},
{ id: "x6-life", t: "Etapy życia", d: "Dzieciństwo, pogrzeb, pokolenie, przodek.", k: "v", i: `
дитинство|dzieciństwo
юність|młodość
дорослість|dorosłość
старість|starość
народження|narodziny
смерть|śmierć
народитися|urodzić się
постаріти|zestarzeć się
померти|umrzeć
похорон|pogrzeb
вдова|wdowa
вдівець|wdowiec
сирота|sierota
вагітна|w ciąży
народити|urodzić (dziecko)
виховувати дітей|wychowywać dzieci
покоління|pokolenie
предок|przodek
нащадок|potomek
вихід на пенсію|przejście na emeryturę
криза середнього віку|kryzys wieku średniego
малюк|maluch
літні люди|osoby starsze
молодь|młodzież
дорослішати|dorastać
`},
{ id: "x6-language", t: "Język i komunikacja", d: "Wymowa, pisownia, przypadek, rodzaj.", k: "v", i: `
словниковий запас|zasób słownictwa
граматика|gramatyka
вимова|wymowa
правопис|pisownia
речення|zdanie
значення|znaczenie
переклад|tłumaczenie
носій мови|rodzimy użytkownik języka
вільно|płynnie
двомовний|dwujęzyczny
діалект|dialekt
скорочення|skrót
вислів|wyrażenie
розмова|rozmowa
спілкуватися|komunikować się
мова тіла|mowa ciała
непорозуміння|nieporozumienie
буква|litera
алфавіт|alfabet
наголос|akcent (w słowie)
голосний звук|samogłoska
приголосний звук|spółgłoska
відмінок|przypadek (gramatyczny)
рід|rodzaj (gramatyczny)
дієслово|czasownik
`},
{ id: "x6-hobbies", t: "Hobby", d: "Wspinaczka, haft, grzybobranie, szachy.", k: "v", i: `
піші походи|wędrówki piesze
скелелазіння|wspinaczka skałkowa
вітрильний спорт|żeglarstwo
дайвінг|nurkowanie
в'язання|robienie na drutach
шиття|szycie
гончарство|garncarstwo
випічка|wypieki
колекціонування марок|zbieranie znaczków
спостереження за птахами|obserwowanie ptaków
настільна гра|gra planszowa
кросворд|krzyżówka
йога|joga
бойові мистецтва|sztuki walki
волонтерство|wolontariat
подорожі|podróże
астрономія|astronomia
збирання грибів|grzybobranie
столярство|stolarstwo
аматор|amator
рибалка|wędkarstwo
вишивка|haft
катання на ковзанах|jazda na łyżwach
лижі|narty
шахи|szachy
`},
{ id: "x6-film", t: "Kino i film", d: "Obsada, zwiastun, scenariusz, zwrot akcji.", k: "v", i: `
фільм жахів|horror
бойовик|film akcji
романтична комедія|komedia romantyczna
анімаційний фільм|film animowany
військовий фільм|film wojenny
акторський склад|obsada
зірка кіно|gwiazda filmowa
головний герой|główny bohater
лиходій|czarny charakter
продовження|kontynuacja (sequel)
трейлер|zwiastun
спецефекти|efekty specjalne
саундтрек|ścieżka dźwiękowa
сценарій|scenariusz
касові збори|wpływy z biletów
прем'єра|premiera
кінокритик|krytyk filmowy
нагорода|nagroda
номінувати|nominować
у головній ролі|w roli głównej
дія відбувається в|akcja dzieje się w
за мотивами|na podstawie
щасливий кінець|szczęśliwe zakończenie
несподіваний поворот|nieoczekiwany zwrot akcji
кінозал|sala kinowa
`},
{ id: "x6-citylife", t: "Życie w mieście", d: "Godziny szczytu, tłum, spaliny, drożyzna.", k: "v", i: `
година пік|godziny szczytu
шум|hałas
натовп|tłum
переповнений|przepełniony
забруднення повітря|zanieczyszczenie powietrza
вихлопні гази|spaliny
велодоріжка|ścieżka rowerowa
житловий район|osiedle mieszkaniowe
промисловий район|dzielnica przemysłowa
житло|mieszkanie (lokum)
інфраструктура|infrastruktura
ремонт доріг|remont dróg
обмеження швидкості|ograniczenie prędkości
паркомісце|miejsce parkingowe
ліхтар|latarnia
смітник|śmietnik
бездомність|bezdomność
нічне життя|życie nocne
передмістя|przedmieście
місцева влада|władze lokalne
громадський туалет|toaleta publiczna
мешканець|mieszkaniec
дорожнеча|drożyzna
спальний район|dzielnica mieszkaniowa
добиратися на роботу|dojeżdżać do pracy
`},
{ id: "x6-global", t: "Problemy świata", d: "Głód, przemoc, korupcja, szczepionka.", k: "v", i: `
голод|głód
епідемія|epidemia
пандемія|pandemia
вакцина|szczepionka
тероризм|terroryzm
терорист|terrorysta
насильство|przemoc
права людини|prawa człowieka
корупція|korupcja
нерівність|nierówność
перенаселення|przeludnienie
стихійне лихо|klęska żywiołowa
вирубка лісів|wylesianie
нестача води|niedobór wody
економічна криза|kryzys gospodarczy
інфляція|inflacja
ядерна зброя|broń jądrowa
гуманітарна допомога|pomoc humanitarna
країни, що розвиваються|kraje rozwijające się
міграція|migracja
дитяча праця|praca dzieci
расизм|rasizm
залежність|uzależnienie
бідність|bieda
окупація|okupacja
`},
{ id: "x6-mindverbs", t: "Czasowniki: myśli i uczucia", d: "Uwielbiać, szanować, wyobrażać sobie, wybaczać.", k: "v", i: `
ненавидіти|nienawidzić
обожнювати|uwielbiać
захоплюватися|zachwycać się
поважати|szanować
дивуватися|dziwić się
вгадувати|zgadywać
уявляти|wyobrażać sobie
усвідомлювати|uświadamiać sobie
впізнавати|rozpoznawać
припускати|przypuszczać
заперечувати|zaprzeczać
цінувати|cenić
заслуговувати|zasługiwać
звинувачувати|obwiniać
переконувати|przekonywać
панікувати|panikować
заспокоїтися|uspokoić się
розізлитися|rozzłościć się
втратити терпіння|stracić cierpliwość
заснути|zasnąć
пробачати|wybaczać
образитися|obrazić się
жаліти|żałować (współczuć)
розраховувати на|liczyć na
турбуватися про|troszczyć się o
`}
]);
})();
