/* Etap 8 – styl formalny, zdania złożone, idiomy, synonimy (C1). */
(function () {
var SENT = ["order", "pl2en", "order", "en2pl", "listen"];
var CHOICE = ["en2pl", "pl2en", "listen"];
ADD("s8", [
{ id: "x8-letters", t: "Listy i e-maile formalne", d: "Z poważaniem, w załączniku przesyłam…", k: "v", ex: CHOICE, i: `
З повагою|Z poważaniem
Шановний пане…|Szanowny Panie…
Шановна пані…|Szanowna Pani…
Звертаюся до вас із проханням…|Zwracam się do Państwa z prośbą…
У відповідь на ваш лист…|W odpowiedzi na Państwa list…
Дозвольте висловити подяку…|Pozwolę sobie wyrazić wdzięczność…
Прошу розглянути мою заяву.|Proszę o rozpatrzenie mojego wniosku.
Повідомляємо вам, що…|Informujemy Państwa, że…
На жаль, змушені відмовити.|Niestety musimy odmówić.
Буду вдячний за швидку відповідь.|Będę wdzięczny za szybką odpowiedź.
У додатку надсилаю…|W załączniku przesyłam…
Просимо вибачення за незручності.|Przepraszamy za niedogodności.
Відповідно до договору…|Zgodnie z umową…
Беручи до уваги вищезазначене…|Biorąc pod uwagę powyższe…
Щодо вашого запиту…|W odniesieniu do Państwa zapytania…
Чекаю на вашу відповідь.|Czekam na Państwa odpowiedź.
Зі свого боку…|Ze swojej strony…
Сподіваюся на подальшу співпрацю.|Liczę na dalszą współpracę.
Будь ласка, підтвердіть отримання.|Proszę potwierdzić odbiór.
Залишаюся до ваших послуг.|Pozostaję do Państwa dyspozycji.
Дякую за розуміння.|Dziękuję za wyrozumiałość.
Нагадую вам про…|Przypominam Państwu o…
Мушу зауважити, що…|Muszę zauważyć, że…
Перепрошую за затримку з відповіддю.|Przepraszam za opóźnienie w odpowiedzi.
З найкращими побажаннями|Z najlepszymi życzeniami
`},
{ id: "x8-relative2", t: "Zdania z „який”", d: "Zamiast imiesłowu -ący: людина, яка читає.", k: "f", i: `
Жінка, {яка} читає книжку, — моя сестра.|Kobieta czytająca książkę to moja siostra.|який,яке|Zamiast imiesłowu na -ący po ukraińsku zwykle mówimy: який/яка/яке + czasownik.
Чоловік, {який} стоїть біля дверей, — мій брат.|Mężczyzna stojący przy drzwiach to mój brat.|яка,які
Діти, {які} граються у дворі, дуже галасливі.|Dzieci bawiące się na podwórku są bardzo hałaśliwe.|яка,який
Місто, {яке} ми відвідали, було чудове.|Miasto, które odwiedziliśmy, było wspaniałe.|який,яка
Книжка, {яку} я читаю, дуже цікава.|Książka, którą czytam, jest bardzo ciekawa.|яка,який|Biernik: яку.
Людина, {якій} я довіряю, — моя мама.|Osoba, której ufam, to moja mama.|яка,яку|Довіряти + celownik: якій.
Друг, {з яким} я працюю, з Києва.|Przyjaciel, z którym pracuję, jest z Kijowa.|який,якого
Будинок, {у якому} я живу, старий.|Dom, w którym mieszkam, jest stary.|який,якого
Фільм, {про який} ти казав, уже вийшов.|Film, o którym mówiłeś, już wyszedł.|про якого,який
Хлопець, {якого} я зустрів, був ввічливий.|Chłopak, którego spotkałem, był uprzejmy.|який,якому
Лікар, {до якого} я ходжу, дуже уважний.|Lekarz, do którego chodzę, jest bardzo uważny.|до який,якого
Студенти, {яких} я навчаю, старанні.|Studenci, których uczę, są pilni.|які,якими
Країна, {де} я народився, далеко.|Kraj, w którym się urodziłem, jest daleko.|куди,звідки|Де = gdzie (miejsce).
Місто, {куди} ми їдемо, на заході.|Miasto, do którego jedziemy, jest na zachodzie.|де,звідки
Усе, {що} ти сказав, — правда.|Wszystko, co powiedziałeś, to prawda.|який,яке
Той, {хто} рано встає, багато встигає.|Kto wcześnie wstaje, wiele zdąży.|що,який
Це те, {чого} я боявся.|To jest to, czego się bałem.|що,чому|Боятися + dopełniacz: чого.
Ось людина, {чиє} ім'я всі знають.|Oto osoba, której imię wszyscy znają.|чия,чий|Чиє – bo ім'я jest rodzaju nijakiego.
Немає нікого, {хто} б мені допоміг.|Nie ma nikogo, kto by mi pomógł.|яка,кого
`},
{ id: "x8-wordform", t: "Słowotwórstwo", d: "Рішення, вирішити, вирішальний…", k: "f", i: `
Його {рішення} було правильним.|Jego decyzja była słuszna.|вирішити,вирішальний
Це {вирішальний} момент.|To decydujący moment.|рішення,вирішити
Треба {вирішити} цю проблему.|Trzeba rozwiązać ten problem.|рішення,вирішальний
Ми чекаємо на {відповідь}.|Czekamy na odpowiedź.|відповідати,відповідальний
Він дуже {відповідальний} працівник.|To bardzo odpowiedzialny pracownik.|відповідь,відповідати
Наше {знайомство} було випадковим.|Nasza znajomość była przypadkowa.|знайомий,знайомитися
Він мій давній {знайомий}.|To mój dawny znajomy.|знайомство,знайомитися
Це дуже {корисна} порада.|To bardzo pożyteczna rada.|користь,користуватися
Яка з цього {користь}?|Jaki z tego pożytek?|корисна,користуватися
Я ціную твою {допомогу}.|Cenię twoją pomoc.|допомагати,допоміжний
Це {допоміжний} матеріал.|To materiał pomocniczy.|допомога,допомагати
Його {поведінка} була дивною.|Jego zachowanie było dziwne.|поводитися,поведінковий
Він дивно {поводиться}.|On dziwnie się zachowuje.|поведінка,поведінковий
Ми відчуваємо {вдячність}.|Czujemy wdzięczność.|вдячний,дякувати
Я тобі дуже {вдячний}.|Jestem ci bardzo wdzięczny.|вдячність,дякувати
{Читання} розвиває уяву.|Czytanie rozwija wyobraźnię.|Читати,Читач
Кожен {читач} знайде щось для себе.|Każdy czytelnik znajdzie coś dla siebie.|читання,читати
Це {небезпечне} місце.|To niebezpieczne miejsce.|небезпека,небезпечно
Нам загрожує {небезпека}.|Grozi nam niebezpieczeństwo.|небезпечна,небезпечно
Тут {небезпечно} плавати.|Tu niebezpiecznie jest pływać.|небезпека,небезпечний
`},
{ id: "x8-sent-formal", t: "Zdania: styl urzędowy", d: "Posiedzenie, wniosek, wchodzi w życie.", k: "o", ex: SENT, i: `
Прошу надати мені відпустку з першого липня.|Proszę o udzielenie mi urlopu od pierwszego lipca.
Засідання відбудеться у вівторок о десятій.|Posiedzenie odbędzie się we wtorek o dziesiątej.
Доповідь триватиме не більше двадцяти хвилин.|Wystąpienie potrwa nie dłużej niż dwadzieścia minut.
Просимо дотримуватися правил безпеки.|Prosimy o przestrzeganie zasad bezpieczeństwa.
Документи необхідно подати до кінця місяця.|Dokumenty należy złożyć do końca miesiąca.
Ваша заява перебуває на розгляді.|Pana wniosek jest rozpatrywany.
Ми розглянемо вашу пропозицію найближчим часом.|Rozpatrzymy Pana propozycję w najbliższym czasie.
Відповідно до закону ви маєте право на компенсацію.|Zgodnie z ustawą ma Pan prawo do odszkodowania.
Вхід лише для персоналу.|Wejście tylko dla personelu.
Рішення набирає чинності з дня підписання.|Decyzja wchodzi w życie z dniem podpisania.
Учасники конференції обговорили низку питань.|Uczestnicy konferencji omówili szereg kwestii.
Сторони дійшли згоди.|Strony doszły do porozumienia.
Звертаємо вашу увагу на зміни в розкладі.|Zwracamy uwagę na zmiany w rozkładzie.
Інформацію буде оновлено згодом.|Informacje zostaną zaktualizowane później.
Компанія несе відповідальність за якість.|Firma ponosi odpowiedzialność za jakość.
Дані обробляються згідно з політикою конфіденційності.|Dane są przetwarzane zgodnie z polityką prywatności.
Термін подання заявок закінчується в п'ятницю.|Termin składania wniosków upływa w piątek.
Пропоную перейти до наступного питання.|Proponuję przejść do następnej kwestii.
Дозвольте представити нашого гостя.|Pozwólcie, że przedstawię naszego gościa.
Дякуємо за плідну співпрацю.|Dziękujemy za owocną współpracę.
`},
{ id: "x8-sent-ideas", t: "Zdania: myśli i argumenty", d: "Im więcej, tym… Cokolwiek się stanie…", k: "o", ex: SENT, i: `
Важко переоцінити роль освіти в сучасному світі.|Trudno przecenić rolę edukacji we współczesnym świecie.
Не можна не погодитися з цією думкою.|Nie sposób nie zgodzić się z tą opinią.
Ця проблема має глибше коріння.|Ten problem ma głębsze korzenie.
Справжня свобода неможлива без відповідальності.|Prawdziwa wolność jest niemożliwa bez odpowiedzialności.
Чим більше я читаю, тим менше знаю.|Im więcej czytam, tym mniej wiem.
Як би там не було, ми мусимо діяти.|Tak czy inaczej, musimy działać.
Що б не трапилося, я буду поруч.|Cokolwiek się stanie, będę obok.
Хоч би як було важко, не здавайся.|Choćby nie wiem jak było trudno, nie poddawaj się.
Мало хто про це знає.|Mało kto o tym wie.
Не всі погоджуються з таким підходом.|Nie wszyscy zgadzają się z takim podejściem.
Варто зазначити, що ситуація змінилася.|Warto zaznaczyć, że sytuacja się zmieniła.
Саме тому ця тема така важлива.|Właśnie dlatego ten temat jest tak ważny.
Звісно, кожен має право на власну думку.|Oczywiście każdy ma prawo do własnego zdania.
Іншими словами, ми повинні змінитися.|Innymi słowy, musimy się zmienić.
Найголовніше — не втрачати надії.|Najważniejsze to nie tracić nadziei.
Історія вчить нас, що ніщо не вічне.|Historia uczy nas, że nic nie jest wieczne.
Це рішення матиме далекосяжні наслідки.|Ta decyzja będzie miała dalekosiężne konsekwencje.
Ми стоїмо перед непростим вибором.|Stoimy przed niełatwym wyborem.
Правда, як завжди, десь посередині.|Prawda, jak zawsze, leży gdzieś pośrodku.
Лише час покаже, хто мав рацію.|Tylko czas pokaże, kto miał rację.
`},
{ id: "x8-sent-nuance", t: "Zdania: niuanse", d: "Prawie, ledwo, byle tylko, też coś!", k: "o", ex: SENT, i: `
Я мало не забув про твій день народження.|Prawie zapomniałem o twoich urodzinach.
Я ледве встиг на останній автобус.|Ledwo zdążyłem na ostatni autobus.
Він ніби й не помітив мене.|Jakby w ogóle mnie nie zauważył.
Навряд чи вона прийде вчасно.|Raczej nie przyjdzie na czas.
Аби тільки не пішов дощ.|Byle tylko nie padało.
Хоч би хтось зателефонував!|Żeby chociaż ktoś zadzwonił!
Мені байдуже, що про мене думають.|Jest mi obojętne, co o mnie myślą.
Годі вже скаржитися!|Dość już narzekania!
Шкода, що ти не прийшов.|Szkoda, że nie przyszedłeś.
Даремно ти так переживаєш.|Niepotrzebnie się tak przejmujesz.
Не варто було цього казати.|Nie warto było tego mówić.
Де б ти не був, пиши мені.|Gdziekolwiek będziesz, pisz do mnie.
Хто б міг подумати!|Kto by pomyślał!
Ото ще вигадав!|Też coś wymyślił!
Мені не до сміху.|Nie jest mi do śmiechu.
Як на мене, це забагато.|Jak dla mnie to za dużo.
Ще б пак!|No pewnie!
Що й казати, він має талант.|Co tu dużo mówić, on ma talent.
Тим паче, що ми вже запізнюємося.|Tym bardziej, że już się spóźniamy.
Будь-що-будь, я спробую.|Niech się dzieje, co chce – spróbuję.
`},
{ id: "x8-idioms3", t: "Idiomy 3", d: "Niedźwiedzia przysługa, kot w worku, w bród.", k: "v", ex: CHOICE, i: `
голка в копиці сіна|igła w stogu siana
ведмежа послуга|niedźwiedzia przysługa
крокодилячі сльози|krokodyle łzy
ахіллесова п'ята|pięta achillesowa
біла ворона|biała wrona (odmieniec)
паршива вівця|czarna owca
грати першу скрипку|grać pierwsze skrzypce
лебедина пісня|łabędzi śpiew
ведмідь на вухо наступив|słoń nadepnął na ucho
тягнути кота за хвіст|przeciągać sprawę
ні сіло ні впало|ni stąd, ni zowąd
жити як кіт із собакою|żyć jak pies z kotem
купити кота в мішку|kupić kota w worku
дзвонити в усі дзвони|rozgłaszać wszem i wobec
згущувати фарби|malować w czarnych barwach
як горохом об стіну|jak grochem o ścianę
здирати три шкури|zdzierać skórę (wyzyskiwać)
хоч греблю гати|w bród (bardzo dużo)
не бачити далі свого носа|nie widzieć dalej niż czubek własnego nosa
вийти сухим із води|wyjść z czegoś suchą stopą
дати маху|dać plamę (pomylić się)
наступати на ті самі граблі|popełniać wciąż ten sam błąd
танцювати під чужу дудку|tańczyć, jak ktoś zagra
на свіжу голову|na świeżo (z wypoczętą głową)
кров холоне в жилах|krew mrozi się w żyłach
`},
{ id: "x8-synonyms", t: "Synonimy", d: "Wybierz słowo o tym samym znaczeniu.", k: "m", qp: "Wybierz synonim:", i: `
гарний|вродливий|потворний,сумний|Гарний = вродливий = ładny.
швидко|хутко|повільно,тихо|Хутко = szybko.
великий|величезний|крихітний,вузький
говорити|розмовляти|мовчати,слухати
сумний|журливий|веселий,радісний
сміливий|відважний|боязкий,лінивий
розумний|кмітливий|дурний,лінивий
бідний|убогий|багатий,щедрий
тихий|спокійний|гучний,галасливий
працювати|трудитися|відпочивати,лінуватися
починати|розпочинати|закінчувати,припиняти
допомагати|сприяти|заважати,шкодити
мета|ціль|причина,наслідок
помилка|хиба|правда,успіх
думка|гадка|мовчання,дія
радість|втіха|сум,горе
дорога|шлях|будинок,річка
друг|приятель|ворог,суперник
незабаром|невдовзі|давно,ніколи
справжній|істинний|фальшивий,уявний
`},
{ id: "x8-antonyms", t: "Antonimy", d: "Wybierz słowo o przeciwnym znaczeniu.", k: "m", qp: "Wybierz przeciwieństwo:", i: `
щедрий|скупий|добрий,багатий|Щедрий = hojny, скупий = skąpy.
сміливий|боягузливий|відважний,сильний
вузький|широкий|тонкий,довгий
мілкий|глибокий|низький,мокрий
важкий|легкий|тяжкий,складний
твердий|м'який|жорсткий,міцний
гіркий|солодкий|кислий,гострий
ранній|пізній|вечірній,швидкий
бідний|багатий|убогий,злий
дешевий|дорогий|недорогий,дешевший
перемога|поразка|успіх,виграш
приятель|ворог|друг,товариш
правда|брехня|істина,факт
початок|кінець|старт,середина
радість|смуток|втіха,щастя
вхід|вихід|двері,прохід
зачиняти|відчиняти|закривати,вимикати
прибувати|вирушати|приїжджати,з'являтися
хвалити|критикувати|хвалитися,дякувати
згода|незгода|дозвіл,мир
`}
]);
})();
