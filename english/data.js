/*
 * Fiszki – angielski dla Polaków. Dane ćwiczeń.
 *
 * Każdy poziom ma rodzaj (k):
 *   "v"  słówka:        "angielski|polski|emoji"        (warianty po "/", np. "mum/mom")
 *   "f"  uzupełnij:     "zdanie z {odpowiedzią}|tłumaczenie|błędna1,błędna2|wskazówka"
 *   "o"  ułóż zdanie:   "zdanie angielskie|tłumaczenie|inna poprawna kolejność;…"
 *   "m"  znaczenie:     "słowo|poprawne znaczenie|błędne1,błędne2|wskazówka"
 *
 * Rodzaje pytań dla słówek (ex): en2pl, pl2en (wybór), listen (słuchanie), type (wpisywanie).
 * Poziomy są ułożone od najłatwiejszych do najtrudniejszych. Możesz śmiało dopisywać własne.
 */
window.STAGES = [
  {
    id: "s1", name: "Pierwsze słowa", tag: "A1", ex: ["en2pl", "pl2en"],
    levels: [
      { id: "greet", t: "Powitania", d: "Cześć, dziękuję, przepraszam – słowa na dobry początek.", k: "v", i: [
        "hello|cześć|🙋",
        "goodbye|do widzenia|👋",
        "good morning|dzień dobry|🌅",
        "good evening|dobry wieczór|🌆",
        "good night|dobranoc|🌙",
        "please|proszę|🙏",
        "thank you/thanks|dziękuję / dzięki|😊",
        "sorry|przepraszam|😔",
        "yes|tak|✅",
        "no|nie|❌",
        "see you|do zobaczenia|🙌",
        "How are you?|Jak się masz?|🙂",
        "I'm fine|Mam się dobrze|👍"
      ]},
      { id: "num1", t: "Liczby 1–10", d: "Liczymy od jednego do dziesięciu.", k: "v", i: [
        "one|jeden (1)", "two|dwa (2)", "three|trzy (3)", "four|cztery (4)", "five|pięć (5)",
        "six|sześć (6)", "seven|siedem (7)", "eight|osiem (8)", "nine|dziewięć (9)", "ten|dziesięć (10)"
      ]},
      { id: "colors", t: "Kolory", d: "Najważniejsze kolory.", k: "v", i: [
        "red|czerwony|🟥", "blue|niebieski|🟦", "green|zielony|🟩", "yellow|żółty|🟨",
        "black|czarny|⬛", "white|biały|⬜", "orange|pomarańczowy|🟧", "purple|fioletowy|🟪",
        "brown|brązowy|🟫", "pink|różowy|🌸", "grey/gray|szary|🐘"
      ]},
      { id: "family", t: "Rodzina", d: "Mama, tata, babcia, dziadek i cała reszta.", k: "v", i: [
        "mother/mum|mama / matka|👩", "father/dad|tata / ojciec|👨", "sister|siostra|👭",
        "brother|brat|👬", "daughter|córka|👧", "son|syn|👦", "grandmother/grandma|babcia|👵",
        "grandfather/grandpa|dziadek|👴", "parents|rodzice|👫", "family|rodzina|👪",
        "husband|mąż|🤵", "wife|żona|👰", "child|dziecko|🧒", "baby|niemowlę|👶"
      ]},
      { id: "animals", t: "Zwierzęta", d: "Zwierzęta domowe i z wiejskiego podwórka.", k: "v", i: [
        "dog|pies|🐶", "cat|kot|🐱", "horse|koń|🐴", "cow|krowa|🐮", "pig|świnia|🐷",
        "bird|ptak|🐦", "fish|ryba|🐟", "mouse|mysz|🐭", "rabbit|królik|🐰",
        "chicken|kura / kurczak|🐔", "sheep|owca|🐑", "duck|kaczka|🦆", "bear|niedźwiedź|🐻"
      ]},
      { id: "food", t: "Jedzenie", d: "Co jemy na co dzień.", k: "v", i: [
        "bread|chleb|🍞", "butter|masło|🧈", "cheese|ser|🧀", "egg|jajko|🥚", "meat|mięso|🥩",
        "rice|ryż|🍚", "soup|zupa|🍲", "cake|ciasto|🍰", "salt|sól|🧂", "potato|ziemniak|🥔",
        "tomato|pomidor|🍅", "carrot|marchewka|🥕"
      ]},
      { id: "fruit", t: "Owoce i napoje", d: "Owoce oraz to, co pijemy.", k: "v", i: [
        "apple|jabłko|🍎", "banana|banan|🍌", "orange|pomarańcza|🍊", "strawberry|truskawka|🍓",
        "grapes|winogrona|🍇", "lemon|cytryna|🍋", "pear|gruszka|🍐", "cherry|wiśnia / czereśnia|🍒",
        "water|woda|💧", "milk|mleko|🥛", "tea|herbata|🍵", "coffee|kawa|☕", "juice|sok|🧃", "beer|piwo|🍺"
      ]},
      { id: "body", t: "Ciało", d: "Głowa, ręce, nogi…", k: "v", i: [
        "head|głowa|🙆", "eye|oko|👁️", "ear|ucho|👂", "nose|nos|👃", "mouth|usta|👄",
        "tooth|ząb|🦷", "hair|włosy|💇", "hand|dłoń|✋", "arm|ramię|💪", "finger|palec|☝️",
        "leg|noga|🦵", "foot|stopa|🦶", "heart|serce|❤️"
      ]},
      { id: "home", t: "Dom", d: "Pokoje i rzeczy w domu.", k: "v", i: [
        "house|dom|🏠", "flat/apartment|mieszkanie|🏢", "room|pokój|🛋️", "kitchen|kuchnia|🍳",
        "bathroom|łazienka|🛁", "bedroom|sypialnia|🛏️", "door|drzwi|🚪", "window|okno|🪟",
        "table|stół|🍽️", "chair|krzesło|🪑", "bed|łóżko|🛌", "lamp|lampa|💡", "key|klucz|🔑", "garden|ogród|🌷"
      ]},
      { id: "clothes", t: "Ubrania", d: "Co nosimy na sobie.", k: "v", i: [
        "T-shirt|koszulka|👕", "shirt|koszula|👔", "trousers/pants|spodnie|👖", "dress|sukienka|👗",
        "skirt|spódnica|", "shoes|buty|👟", "hat|kapelusz|👒", "cap|czapka z daszkiem|🧢",
        "jacket|kurtka|🧥", "socks|skarpetki|🧦", "gloves|rękawiczki|🧤", "scarf|szalik|🧣",
        "glasses|okulary|👓", "bag|torba|👜"
      ]}
    ]
  },

  {
    id: "s2", name: "Podstawy", tag: "A1", ex: ["en2pl", "pl2en", "listen"],
    levels: [
      { id: "pronouns", t: "Zaimki", d: "Ja, ty, on, ona… oraz mój, twój, jego.", k: "v", i: [
        "I|ja|🙋", "you|ty / wy|👉", "he|on|👨", "she|ona|👩", "it|ono / to|📦", "we|my|👥",
        "they|oni / one|👨‍👩‍👧", "my|mój / moja / moje", "your|twój / wasz", "his|jego", "her|jej",
        "our|nasz", "their|ich"
      ]},
      { id: "num2", t: "Liczby 11–100", d: "Nastki, dziesiątki i sto.", k: "v", i: [
        "eleven|jedenaście (11)", "twelve|dwanaście (12)", "thirteen|trzynaście (13)",
        "fourteen|czternaście (14)", "fifteen|piętnaście (15)", "twenty|dwadzieścia (20)",
        "twenty-one|dwadzieścia jeden (21)", "thirty|trzydzieści (30)", "forty|czterdzieści (40)",
        "fifty|pięćdziesiąt (50)", "eighty|osiemdziesiąt (80)", "one hundred|sto (100)"
      ]},
      { id: "days", t: "Dni tygodnia", d: "Uwaga: po angielsku dni tygodnia piszemy wielką literą!", k: "v", i: [
        "Monday|poniedziałek", "Tuesday|wtorek", "Wednesday|środa", "Thursday|czwartek",
        "Friday|piątek", "Saturday|sobota", "Sunday|niedziela", "today|dzisiaj",
        "tomorrow|jutro", "yesterday|wczoraj", "day|dzień", "week|tydzień"
      ]},
      { id: "months", t: "Miesiące i pory roku", d: "Nazwy miesięcy też piszemy wielką literą.", k: "v", i: [
        "January|styczeń", "February|luty", "March|marzec", "April|kwiecień", "May|maj", "June|czerwiec",
        "July|lipiec", "August|sierpień", "September|wrzesień", "October|październik",
        "November|listopad", "December|grudzień", "spring|wiosna|🌱", "summer|lato|☀️",
        "autumn/fall|jesień|🍂", "winter|zima|❄️"
      ]},
      { id: "be1", t: "to be: am / is / are", d: "Jestem, jesteś, jest… czyli najważniejszy czasownik.", k: "f", i: [
        "I {am} a student.|Jestem studentem.|is,are|I → am, he/she/it → is, you/we/they → are.",
        "You {are} my friend.|Jesteś moim przyjacielem.|am,is",
        "He {is} tall.|On jest wysoki.|am,are",
        "She {is} a doctor.|Ona jest lekarką.|am,are",
        "It {is} cold today.|Dzisiaj jest zimno.|am,are",
        "We {are} at home.|Jesteśmy w domu.|am,is",
        "They {are} happy.|Oni są szczęśliwi.|am,is",
        "My mother {is} a teacher.|Moja mama jest nauczycielką.|am,are",
        "The dogs {are} in the garden.|Psy są w ogrodzie.|am,is",
        "I {am} hungry.|Jestem głodny.|is,are",
        "Tom and Anna {are} friends.|Tom i Anna są przyjaciółmi.|is,am",
        "The coffee {is} hot.|Kawa jest gorąca.|are,am"
      ]},
      { id: "aan", t: "a czy an?", d: "Rodzajnik przed rzeczownikiem: a dog, an apple.", k: "f", i: [
        "It is {a} dog.|To jest pies.|an|Przed spółgłoską używamy a.",
        "It is {an} apple.|To jest jabłko.|a|Przed samogłoską (a, e, i, o, u) używamy an.",
        "She has {a} cat.|Ona ma kota.|an",
        "I am {an} engineer.|Jestem inżynierem.|a",
        "He is {a} doctor.|On jest lekarzem.|an",
        "It is {an} umbrella.|To jest parasol.|a",
        "I want {an} ice cream.|Chcę loda.|a",
        "This is {a} house.|To jest dom.|an",
        "It's {an} old car.|To stary samochód.|a|Liczy się pierwsze słowo po a/an – tutaj old.",
        "She is {a} good teacher.|Ona jest dobrą nauczycielką.|an|Liczy się pierwsze słowo po a/an – tutaj good.",
        "I have {an} hour.|Mam godzinę.|a|W słowie hour „h” jest nieme, więc słychać samogłoskę → an.",
        "He is {a} university student.|On jest studentem.|an|University wymawiamy „juniwersity” – na początku słychać spółgłoskę → a."
      ]},
      { id: "be2", t: "to be: przeczenia i pytania", d: "I'm not…, Are you…?, Is he…?", k: "f", i: [
        "I {am not} tired.|Nie jestem zmęczony.|isn't,aren't",
        "She {isn't} at school.|Nie ma jej w szkole.|aren't,am not",
        "They {aren't} here.|Nie ma ich tutaj.|isn't,am not",
        "{Are} you ready?|Czy jesteś gotowy?|Is,Am|W pytaniu am/is/are idzie na początek.",
        "{Is} he your brother?|Czy on jest twoim bratem?|Are,Am",
        "{Am} I late?|Czy jestem spóźniony?|Is,Are",
        "It {isn't} expensive.|To nie jest drogie.|aren't,am not",
        "We {aren't} hungry.|Nie jesteśmy głodni.|isn't,am not",
        "{Is} it cold outside?|Czy na dworze jest zimno?|Are,Am",
        "{Are} they students?|Czy oni są studentami?|Is,Am",
        "Where {is} my phone?|Gdzie jest mój telefon?|are,am",
        "How old {are} you?|Ile masz lat?|is,am|Po angielsku wiek wyrażamy przez „być”: I am 20."
      ]},
      { id: "verbs1", t: "Czasowniki 1", d: "Najczęstsze czynności: jeść, pić, iść, mieć…", k: "v", i: [
        "be|być|🧍", "have|mieć|🤲", "eat|jeść|🍴", "drink|pić|🥤", "sleep|spać|😴",
        "go|iść / jechać|🚶", "come|przychodzić / przyjeżdżać|🏃", "read|czytać|📖", "write|pisać|✍️",
        "speak|mówić|🗣️", "listen|słuchać|🎧", "see|widzieć|👀", "like|lubić|👍", "want|chcieć|🙋",
        "do|robić|🛠️"
      ]},
      { id: "adj1", t: "Przymiotniki 1", d: "Duży, mały, nowy, stary – opisujemy świat.", k: "v", i: [
        "big|duży|🐘", "small|mały|🐜", "hot|gorący|🔥", "cold|zimny|🧊", "good|dobry|👍",
        "bad|zły|👎", "new|nowy|✨", "old|stary|🏚️", "happy|szczęśliwy|😀", "sad|smutny|😢",
        "tall|wysoki|🦒", "short|niski / krótki|📏", "fast|szybki|🚀", "slow|powolny / wolny|🐌",
        "young|młody|🐣", "beautiful|piękny|🌹"
      ]},
      { id: "plural", t: "Liczba mnoga", d: "Jeden kot – dwa koty. Plus ważne wyjątki!", k: "f", i: [
        "one book → two {books}|jedna książka → dwie książki|book,bookes|Zwykle dodajemy -s.",
        "one box → two {boxes}|jedno pudełko → dwa pudełka|boxs,box|Po -s, -x, -ch, -sh dodajemy -es.",
        "one bus → two {buses}|jeden autobus → dwa autobusy|bus,buss",
        "one baby → two {babies}|jedno niemowlę → dwoje niemowląt|babys,babyes|Spółgłoska + y → -ies.",
        "one city → two {cities}|jedno miasto → dwa miasta|citys,cityes",
        "one knife → two {knives}|jeden nóż → dwa noże|knifes,knifs|-f / -fe często zmienia się w -ves.",
        "one child → two {children}|jedno dziecko → dwoje dzieci|childs,childes|Wyjątek – trzeba zapamiętać.",
        "one man → two {men}|jeden mężczyzna → dwóch mężczyzn|mans,mens|Wyjątek – trzeba zapamiętać.",
        "one woman → two {women}|jedna kobieta → dwie kobiety|womans,womens",
        "one person → two {people}|jedna osoba → dwie osoby|peoples,persones",
        "one foot → two {feet}|jedna stopa → dwie stopy|foots,feets",
        "one tooth → two {teeth}|jeden ząb → dwa zęby|tooths,teeths",
        "one mouse → two {mice}|jedna mysz → dwie myszy|mouses,mices",
        "one sheep → two {sheep}|jedna owca → dwie owce|sheeps,sheepes|Sheep i fish zwykle się nie zmieniają."
      ]},
      { id: "order1", t: "Ułóż zdanie 1", d: "Proste zdania z „to be”. Stukaj w słowa w dobrej kolejności.", k: "o", i: [
        "I am a student.|Jestem studentem.",
        "She is my sister.|Ona jest moją siostrą.",
        "The cat is black.|Kot jest czarny.",
        "We are at home.|Jesteśmy w domu.",
        "This is my house.|To jest mój dom.",
        "I like apples.|Lubię jabłka.",
        "He is very tall.|On jest bardzo wysoki.",
        "My name is Anna.|Mam na imię Anna.",
        "They are not here.|Nie ma ich tutaj.",
        "Is it your dog?|Czy to twój pies?",
        "I have a brother.|Mam brata.",
        "The coffee is hot.|Kawa jest gorąca."
      ]},
      { id: "phrases", t: "Przydatne zwroty", d: "Gotowe zdania, które przydadzą się każdego dnia.", k: "v", i: [
        "Excuse me|Przepraszam (gdy chcesz kogoś zagadnąć)|🙋",
        "Nice to meet you.|Miło cię poznać.|🤝",
        "What's your name?|Jak masz na imię?|📛",
        "I'm from Poland.|Jestem z Polski.|🇵🇱",
        "I don't understand.|Nie rozumiem.|🤷",
        "Can you repeat that, please?|Możesz powtórzyć?|🔁",
        "Please speak more slowly.|Proszę mówić wolniej.|🐢",
        "How much is it?|Ile to kosztuje?|💰",
        "Where is the toilet?|Gdzie jest toaleta?|🚻",
        "Can I have the bill, please?|Poproszę rachunek.|🧾",
        "Could you help me?|Czy mógłbyś / mogłabyś mi pomóc?|🆘",
        "I'm sorry I'm late.|Przepraszam za spóźnienie.|⏰",
        "No problem.|Nie ma problemu.|👌",
        "It doesn't matter.|Nie szkodzi.|🙂",
        "Have a nice day!|Miłego dnia!|🌞"
      ]}
    ]
  },

  {
    id: "s3", name: "Codzienne życie", tag: "A1–A2", ex: ["pl2en", "type", "listen", "type"],
    levels: [
      { id: "this", t: "this / that / these / those", d: "Ten, ta, to – blisko czy daleko? Jedno czy wiele?", k: "f", i: [
        "{This} book here is mine.|Ta książka (tutaj) jest moja.|These,Those|this – blisko, l. pojedyncza; these – blisko, l. mnoga; that – daleko, l. pojedyncza; those – daleko, l. mnoga.",
        "{These} shoes here are new.|Te buty (tutaj) są nowe.|This,That",
        "{That} house over there is big.|Tamten dom jest duży.|Those,These",
        "{Those} birds over there are loud.|Tamte ptaki są głośne.|That,These",
        "Look at {this} photo here.|Spójrz na to zdjęcie (tutaj).|these,those",
        "{These} apples here are sweet.|Te jabłka (tutaj) są słodkie.|This,That",
        "Who is {that} man over there?|Kim jest tamten mężczyzna?|those,these",
        "I like {those} flowers over there.|Podobają mi się tamte kwiaty.|that,this",
        "{This} is my friend Kate.|To jest moja przyjaciółka Kate.|These,Those",
        "Are {these} your keys?|Czy to są twoje klucze?|this,that"
      ]},
      { id: "havegot", t: "have got / has got", d: "Mam, masz, ma – posiadanie.", k: "f", i: [
        "I {have got} a car.|Mam samochód.|has got,am got|I/you/we/they → have got, he/she/it → has got.",
        "She {has got} two cats.|Ona ma dwa koty.|have got,is got",
        "We {have got} a big garden.|Mamy duży ogród.|has got,are got",
        "He {has got} blue eyes.|On ma niebieskie oczy.|have got,is",
        "They {haven't got} any money.|Oni nie mają pieniędzy.|hasn't got,aren't",
        "{Have} you got a pen?|Masz długopis?|Has,Are",
        "{Has} she got a brother?|Czy ona ma brata?|Have,Is",
        "My dog {has got} a long tail.|Mój pies ma długi ogon.|have got,is got",
        "I {haven't got} time.|Nie mam czasu.|hasn't got,am not",
        "Our flat {has got} two bedrooms.|Nasze mieszkanie ma dwie sypialnie.|have got,is got",
        "{Have} your parents got a dog?|Czy twoi rodzice mają psa?|Has,Are"
      ]},
      { id: "ps1", t: "Present Simple: he / she + -s", d: "Czynności, które robimy regularnie.", k: "f", i: [
        "I {work} in an office.|Pracuję w biurze.|works,working",
        "She {works} in a hospital.|Ona pracuje w szpitalu.|work,working|he/she/it → dodajemy -s.",
        "He {plays} football.|On gra w piłkę nożną.|play,playing",
        "We {live} in Poland.|Mieszkamy w Polsce.|lives,living",
        "My brother {watches} TV every day.|Mój brat codziennie ogląda telewizję.|watch,watchs|Po -ch, -sh, -s, -x, -o dodajemy -es.",
        "They {like} pizza.|Oni lubią pizzę.|likes,liking",
        "Anna {goes} to school by bus.|Anna jeździ do szkoły autobusem.|go,gos",
        "The shop {opens} at 9.|Sklep otwierają o dziewiątej.|open,opening",
        "You {speak} English well.|Dobrze mówisz po angielsku.|speaks,speaking",
        "It {rains} a lot in autumn.|Jesienią dużo pada.|rain,raining",
        "He {has} breakfast at 7.|On je śniadanie o siódmej.|have,haves|have → has (nieregularnie).",
        "She {studies} every evening.|Ona uczy się każdego wieczoru.|study,studys|Spółgłoska + y → -ies."
      ]},
      { id: "ps2", t: "Present Simple: do / does", d: "Pytania i przeczenia: Do you…? She doesn't…", k: "f", i: [
        "{Do} you like tea?|Czy lubisz herbatę?|Does,Are",
        "{Does} she speak English?|Czy ona mówi po angielsku?|Do,Is|he/she/it → does.",
        "I {don't} eat meat.|Nie jem mięsa.|doesn't,am not",
        "He {doesn't} drink coffee.|On nie pije kawy.|don't,isn't",
        "Where {do} you live?|Gdzie mieszkasz?|does,are",
        "What time {does} the film start?|O której zaczyna się film?|do,is",
        "We {don't} work on Sunday.|Nie pracujemy w niedzielę.|doesn't,aren't",
        "{Does} your father cook?|Czy twój tata gotuje?|Do,Is",
        "They {don't} have a car.|Oni nie mają samochodu.|doesn't,aren't",
        "She doesn't {like} cats.|Ona nie lubi kotów.|likes,liking|Po does/doesn't czasownik jest bez -s.",
        "Does he {play} the guitar?|Czy on gra na gitarze?|plays,playing",
        "How {do} you say 'kot' in English?|Jak powiedzieć „kot” po angielsku?|does,are"
      ]},
      { id: "weather", t: "Pogoda i pory dnia", d: "Słońce, deszcz, poranek i wieczór.", k: "v", i: [
        "weather|pogoda|🌦️", "sun|słońce|☀️", "rain|deszcz|🌧️", "snow|śnieg|❄️", "wind|wiatr|💨",
        "cloud|chmura|☁️", "storm|burza|⛈️", "fog|mgła|🌫️", "rainbow|tęcza|🌈", "sunny|słoneczny|😎",
        "cloudy|pochmurny|🌥️", "warm|ciepły|🌡️", "morning|poranek / rano|🌅", "afternoon|popołudnie|🕒",
        "evening|wieczór|🌆", "night|noc|🌙"
      ]},
      { id: "city", t: "W mieście", d: "Sklep, szkoła, dworzec, apteka…", k: "v", i: [
        "street|ulica|🛣️", "shop|sklep|🏪", "school|szkoła|🏫", "hospital|szpital|🏥", "church|kościół|⛪",
        "station|dworzec / stacja|🚉", "bridge|most|🌉", "library|biblioteka|📚", "post office|poczta|🏤",
        "restaurant|restauracja|🍽️", "market|targ / rynek|🧺", "airport|lotnisko|🛫",
        "bus stop|przystanek autobusowy|🚏", "pharmacy/chemist|apteka|💊", "city/town|miasto|🏙️",
        "village|wieś|🏡"
      ]},
      { id: "jobs", t: "Zawody", d: "Kim jesteś z zawodu?", k: "v", i: [
        "teacher|nauczyciel|🧑‍🏫", "doctor|lekarz|🩺", "nurse|pielęgniarka|💉", "driver|kierowca|🚚",
        "cook/chef|kucharz|🧑‍🍳", "police officer/policeman|policjant|👮", "farmer|rolnik|🚜",
        "builder|budowlaniec|👷", "engineer|inżynier|⚙️", "shop assistant|sprzedawca|🛍️",
        "waiter|kelner|🍷", "lawyer|prawnik|⚖️", "firefighter|strażak|🚒", "student|student / uczeń|🎓",
        "job|praca / zawód|💼", "boss|szef|👔"
      ]},
      { id: "travel", t: "Transport i podróże", d: "Samochód, pociąg, bilet i walizka.", k: "v", i: [
        "car|samochód|🚗", "bus|autobus|🚌", "train|pociąg|🚆", "plane|samolot|✈️",
        "bike/bicycle|rower|🚲", "ship/boat|statek / łódź|🚢", "taxi|taksówka|🚕", "ticket|bilet|🎫",
        "passport|paszport|🛂", "suitcase|walizka|🧳", "map|mapa|🗺️", "holiday/vacation|wakacje / urlop|🏖️",
        "trip|wycieczka|🧭", "left|w lewo / lewy|⬅️", "right|w prawo / prawy|➡️", "straight on|prosto|⬆️"
      ]},
      { id: "prep", t: "Przyimki miejsca", d: "Na, w, pod, obok, między, za, przed.", k: "f", i: [
        "The cat is {on} the table.|Kot jest na stole.|in,under",
        "The keys are {in} my bag.|Klucze są w mojej torbie.|on,at",
        "The dog is {under} the bed.|Pies jest pod łóżkiem.|on,behind",
        "The bank is {next to} the school.|Bank jest obok szkoły.|between,under",
        "The shop is {between} the bank and the café.|Sklep jest między bankiem a kawiarnią.|next to,in front of",
        "The car is {behind} the house.|Samochód stoi za domem.|in front of,between",
        "There is a tree {in front of} my house.|Przed moim domem rośnie drzewo.|behind,under",
        "The picture is {on} the wall.|Obraz wisi na ścianie.|in,at",
        "I'm {at} home.|Jestem w domu.|in,on|At home – stałe wyrażenie: w domu.",
        "She lives {in} London.|Ona mieszka w Londynie.|at,on",
        "The lamp is {above} the table.|Lampa wisi nad stołem.|under,between",
        "Meet me {at} the bus stop.|Spotkajmy się na przystanku.|in,on"
      ]},
      { id: "thereis", t: "there is / there are", d: "Jest…, są…, czy jest…?", k: "f", i: [
        "{There is} a cat in the garden.|W ogrodzie jest kot.|There are,It is|There is + liczba pojedyncza, there are + liczba mnoga.",
        "{There are} three books on the desk.|Na biurku są trzy książki.|There is,They are",
        "{There isn't} any milk in the fridge.|W lodówce nie ma mleka.|There aren't,It isn't",
        "{There aren't} any shops here.|Tutaj nie ma żadnych sklepów.|There isn't,They aren't",
        "{Is there} a bank near here?|Czy jest tu gdzieś bank?|Are there,There is",
        "{Are there} any eggs?|Czy są jakieś jajka?|Is there,There are",
        "{There is} a problem.|Jest problem.|There are,It has",
        "{There are} a lot of people in the park.|W parku jest dużo ludzi.|There is,It is",
        "How many students {are there} in your class?|Ilu uczniów jest w twojej klasie?|is there,there is",
        "{There is} a lot of snow.|Jest dużo śniegu.|There are,It is"
      ]},
      { id: "time", t: "Godziny i przyimki czasu", d: "Która godzina? at, on, in.", k: "f", i: [
        "7:30 → It's half {past} seven.|Jest wpół do ósmej (7:30).|to,after|Uwaga! Half past seven to 7:30, czyli po polsku „wpół do ósmej”.",
        "8:15 → It's a quarter {past} eight.|Jest kwadrans po ósmej.|to,after",
        "8:45 → It's a quarter {to} nine.|Jest za kwadrans dziewiąta.|past,before",
        "10:00 → It's ten {o'clock}.|Jest dziesiąta.|hours,clock",
        "5:10 → It's ten {past} five.|Jest dziesięć po piątej.|to,after",
        "5:50 → It's ten {to} six.|Jest za dziesięć szósta.|past,before",
        "I get up {at} 7 o'clock.|Wstaję o siódmej.|on,in|Godziny → at.",
        "See you {on} Monday.|Do zobaczenia w poniedziałek.|in,at|Dni tygodnia i daty → on.",
        "My birthday is {in} May.|Moje urodziny są w maju.|on,at|Miesiące, pory roku i lata → in.",
        "We go skiing {in} winter.|Zimą jeździmy na nartach.|on,at",
        "The concert is {on} 5th June.|Koncert jest piątego czerwca.|in,at",
        "I work {at} night.|Pracuję w nocy.|in,on|At night, ale in the morning / in the evening."
      ]},
      { id: "can", t: "can / can't", d: "Umiem, mogę, potrafię.", k: "f", i: [
        "I {can} swim.|Umiem pływać.|cans,can to|Can nie zmienia się i nie ma po nim „to”.",
        "She {can't} drive.|Ona nie umie prowadzić.|don't can,not can",
        "{Can} you help me?|Czy możesz mi pomóc?|Are,Cans",
        "He can {play} the piano.|On umie grać na pianinie.|plays,to play",
        "We {can't} come today.|Nie możemy dziś przyjść.|don't can,aren't can",
        "{Can} I open the window?|Czy mogę otworzyć okno?|Am,Is",
        "Birds {can} fly.|Ptaki potrafią latać.|cans,are can",
        "Fish {can't} walk.|Ryby nie potrafią chodzić.|don't can,not can",
        "Can she {speak} French?|Czy ona mówi po francusku?|speaks,to speak",
        "Sorry, I {can't} hear you.|Przepraszam, nie słyszę cię.|don't can,not can|„Słyszę / widzę” często tłumaczymy jako can hear / can see."
      ]},
      { id: "pc", t: "Present Continuous", d: "Co robisz teraz? I'm reading.", k: "f", i: [
        "I {am reading} a book now.|Teraz czytam książkę.|read,is reading|am/is/are + czasownik z -ing = to, co dzieje się teraz.",
        "She {is cooking} dinner.|Ona gotuje obiad.|cooks,are cooking",
        "They {are playing} football.|Oni grają w piłkę.|play,is playing",
        "Look! It {is raining}.|Patrz! Pada deszcz.|rains,are raining",
        "We {are watching} a film.|Oglądamy film.|watch,is watching",
        "What {are} you doing?|Co robisz?|is,do",
        "He {isn't working} today.|On dziś nie pracuje.|doesn't working,not work",
        "{Is} she sleeping?|Czy ona śpi?|Does,Are",
        "Why {are} you laughing?|Dlaczego się śmiejesz?|do,is",
        "The children {are swimming} in the lake.|Dzieci pływają w jeziorze.|swim,is swimming",
        "I'm {sitting} in the kitchen.|Siedzę w kuchni.|siting,sit|Krótkie słowa podwajają ostatnią literę: sit → sitting.",
        "Listen! The baby {is crying}.|Posłuchaj! Dziecko płacze.|cries,are crying"
      ]},
      { id: "order2", t: "Ułóż zdanie 2", d: "Zdania z Present Simple, can i there is.", k: "o", i: [
        "I don't like coffee.|Nie lubię kawy.",
        "She works in a bank.|Ona pracuje w banku.",
        "Where do you live?|Gdzie mieszkasz?",
        "There is a cat on the sofa.|Na kanapie jest kot.",
        "Can you help me?|Czy możesz mi pomóc?",
        "He is reading a book.|On czyta książkę.",
        "We have got a big dog.|Mamy dużego psa.",
        "What time is it?|Która jest godzina?",
        "My father doesn't drink tea.|Mój tata nie pije herbaty.",
        "They are playing in the garden.|Oni bawią się w ogrodzie.",
        "How much is this?|Ile to kosztuje?",
        "I can speak a little English.|Umiem mówić trochę po angielsku."
      ]}
    ]
  },

  {
    id: "s4", name: "Przeszłość i przyszłość", tag: "A2", ex: ["type", "type", "pl2en", "listen"],
    levels: [
      { id: "verbs2", t: "Czasowniki 2", d: "Kupować, pamiętać, rozumieć… Tym razem wpisujesz!", k: "v", i: [
        "buy|kupować|🛒", "sell|sprzedawać|🏷️", "open|otwierać|📂", "close/shut|zamykać|🔒",
        "start/begin|zaczynać|▶️", "finish|kończyć|🏁", "help|pomagać|🆘", "wait|czekać|⏳",
        "learn|uczyć się|📚", "teach|uczyć (kogoś)|🧑‍🏫", "forget|zapominać|🤔", "remember|pamiętać|🧠",
        "understand|rozumieć|💡", "think|myśleć|💭", "know|wiedzieć / znać|🤓", "pay|płacić|💳"
      ]},
      { id: "waswere", t: "Past: was / were", d: "Byłem, byłeś, był – przeszłość „to be”.", k: "f", i: [
        "I {was} tired yesterday.|Wczoraj byłem zmęczony.|were,am|I/he/she/it → was, you/we/they → were.",
        "They {were} at the cinema.|Oni byli w kinie.|was,are",
        "She {was} a teacher.|Ona była nauczycielką.|were,is",
        "We {were} happy.|Byliśmy szczęśliwi.|was,are",
        "It {was} cold last night.|Zeszłej nocy było zimno.|were,is",
        "You {were} right.|Miałeś rację.|was,are|Mieć rację = be right.",
        "{Was} he at work?|Czy on był w pracy?|Were,Is",
        "{Were} you at home?|Czy byłeś w domu?|Was,Are",
        "The film {wasn't} good.|Film nie był dobry.|weren't,isn't",
        "The shops {weren't} open.|Sklepy nie były otwarte.|wasn't,aren't",
        "Where {were} you?|Gdzie byłeś?|was,are",
        "I {was} born in 1990.|Urodziłem się w 1990 roku.|were,am|Urodzić się = be born: I was born…"
      ]},
      { id: "past1", t: "Past Simple: regularne", d: "Czasowniki z końcówką -ed oraz did / didn't.", k: "f", i: [
        "Yesterday I {watched} a film.|Wczoraj obejrzałem film.|watch,watching|Czasowniki regularne: dodajemy -ed.",
        "She {played} tennis last week.|W zeszłym tygodniu grała w tenisa.|plays,play",
        "We {visited} our grandma.|Odwiedziliśmy babcię.|visit,visits",
        "He {worked} late yesterday.|On wczoraj długo pracował.|works,working",
        "I {stopped} the car.|Zatrzymałem samochód.|stoped,stop|Krótkie słowa podwajają ostatnią spółgłoskę: stop → stopped.",
        "They {studied} English at school.|Uczyli się angielskiego w szkole.|studyed,study|Spółgłoska + y → -ied.",
        "I {didn't} like the food.|Nie smakowało mi to jedzenie.|don't,wasn't",
        "{Did} you call me?|Dzwoniłeś do mnie?|Do,Were|Pytania w przeszłości: Did + forma podstawowa.",
        "She didn't {open} the door.|Ona nie otworzyła drzwi.|opened,opens|Po did/didn't czasownik jest w formie podstawowej.",
        "We {lived} in Kraków for five years.|Mieszkaliśmy w Krakowie przez pięć lat.|live,lives",
        "It {rained} all day.|Cały dzień padało.|rains,raining",
        "Did he {help} you?|Czy on ci pomógł?|helped,helps"
      ]},
      { id: "past2", t: "Past Simple: nieregularne", d: "go → went, eat → ate… Te formy trzeba zapamiętać.", k: "v",
        ex: ["pl2en", "type", "type"], qp: "Jaka jest forma przeszła?", flip: true, strict: true, i: [
        "went|go (iść)", "ate|eat (jeść)", "drank|drink (pić)", "saw|see (widzieć)",
        "bought|buy (kupować)", "had|have (mieć)", "made|make (robić)", "took|take (brać)",
        "came|come (przychodzić)", "gave|give (dawać)", "wrote|write (pisać)", "slept|sleep (spać)",
        "found|find (znajdować)", "told|tell (mówić, opowiadać)", "knew|know (wiedzieć)",
        "thought|think (myśleć)", "did|do (robić)"
      ]},
      { id: "wh", t: "Słowa pytające", d: "What, where, when, who, why, how…", k: "f", i: [
        "{What} is your name?|Jak masz na imię?|Where,Who|Dosłownie: „Co jest twoim imieniem?”",
        "{Where} do you live?|Gdzie mieszkasz?|When,What",
        "{When} is your birthday?|Kiedy masz urodziny?|Where,Who",
        "{Who} is that woman?|Kim jest ta kobieta?|What,Where",
        "{Why} are you sad?|Dlaczego jesteś smutny?|How,Who",
        "{How} are you?|Jak się masz?|What,Why",
        "{How much} is this shirt?|Ile kosztuje ta koszula?|How many,What|How much – ile (niepoliczalne, cena), how many – ile (policzalne).",
        "{How many} brothers have you got?|Ilu masz braci?|How much,How old",
        "{How old} is your son?|Ile lat ma twój syn?|How many,What",
        "{Which} colour do you like – red or blue?|Który kolor lubisz – czerwony czy niebieski?|Who,Where",
        "{Whose} bag is this?|Czyja to torba?|Who,Who's",
        "{What time} is it?|Która godzina?|How time,When"
      ]},
      { id: "quant", t: "some / any / much / many", d: "Ile? Trochę? Dużo? Za dużo?", k: "f", i: [
        "How {much} water do you drink?|Ile wody pijesz?|many,lot|Much – rzeczy niepoliczalne (woda, czas, pieniądze).",
        "How {many} apples do you need?|Ile jabłek potrzebujesz?|much,lot|Many – rzeczy policzalne (jabłka, ludzie).",
        "I have {some} friends in London.|Mam kilku przyjaciół w Londynie.|any,much",
        "Do you have {any} questions?|Masz jakieś pytania?|much,a|W pytaniach i przeczeniach zwykle any.",
        "There isn't {any} milk.|Nie ma mleka.|some,many",
        "We don't have {much} time.|Nie mamy dużo czasu.|many,lot",
        "I don't have {many} books.|Nie mam wielu książek.|much,lot",
        "Would you like {some} tea?|Napijesz się herbaty?|any,many|W propozycjach i prośbach używamy some.",
        "She drinks {too much} coffee.|Ona pije za dużo kawy.|too many,very much",
        "There are {too many} cars in the city.|W mieście jest za dużo samochodów.|too much,too lot",
        "There are {a lot of} people here.|Jest tu dużo ludzi.|much,a lot"
      ]},
      { id: "future", t: "will / going to", d: "Przyszłość: decyzje, plany i przewidywania.", k: "f", i: [
        "I {will} help you.|Pomogę ci.|am,going|Will – szybka decyzja, obietnica.",
        "Look at those clouds! It {is going to} rain.|Spójrz na te chmury! Będzie padać.|will to,goes to|Going to – gdy widać, że coś się zaraz stanie.",
        "We {are going to} visit Paris next summer.|Następnego lata zamierzamy odwiedzić Paryż.|will to,go to|Going to – plany i zamiary.",
        "She {won't} come to the party.|Ona nie przyjdzie na imprezę.|willn't,doesn't will|won't = will not.",
        "{Will} you marry me?|Wyjdziesz za mnie?|Do,Are",
        "I'm tired. I {will} go to bed.|Jestem zmęczony. Pójdę spać.|am,going",
        "What {are} you going to do?|Co zamierzasz zrobić?|is,will",
        "He {is going to} buy a new car.|On zamierza kupić nowy samochód.|will to,going",
        "Maybe I'll {see} you later.|Może zobaczymy się później.|to see,seeing",
        "They {aren't going to} sell the house.|Oni nie zamierzają sprzedać domu.|won't to,don't going to",
        "Don't worry, I {won't} tell anyone.|Nie martw się, nikomu nie powiem.|willn't,don't will",
        "Do you think it {will} snow tomorrow?|Myślisz, że jutro spadnie śnieg?|is,going"
      ]},
      { id: "compare", t: "Stopniowanie przymiotników", d: "Większy, największy, lepszy, najlepszy.", k: "f", i: [
        "An elephant is {bigger} than a dog.|Słoń jest większy od psa.|more big,biggest|Krótkie przymiotniki: -er / the -est (big → bigger → the biggest).",
        "This is the {biggest} room in the house.|To największy pokój w domu.|bigger,most big",
        "My car is {older} than yours.|Mój samochód jest starszy niż twój.|more old,oldest",
        "For me, Chinese is {more difficult} than English.|Dla mnie chiński jest trudniejszy niż angielski.|difficulter,most difficult|Długie przymiotniki: more / the most.",
        "She is the {best} student in the class.|Ona jest najlepszą uczennicą w klasie.|goodest,better|Nieregularnie: good → better → the best.",
        "The weather today is {worse} than yesterday.|Pogoda jest dziś gorsza niż wczoraj.|badder,worst|Nieregularnie: bad → worse → the worst.",
        "Everest is the {highest} mountain in the world.|Everest to najwyższa góra na świecie.|higher,most high",
        "Trains are {faster} than buses.|Pociągi są szybsze od autobusów.|more fast,fastest",
        "Paris is the {most beautiful} city I know.|Paryż to najpiękniejsze miasto, jakie znam.|beautifulest,more beautiful",
        "He is {happier} now.|On jest teraz szczęśliwszy.|happyer,happiest|-y → -ier: happy → happier.",
        "My sister is {as tall as} me.|Moja siostra jest tak wysoka jak ja.|as tall than,taller as",
        "Which is {cheaper}: tea or coffee?|Co jest tańsze: herbata czy kawa?|more cheap,cheapest"
      ]},
      { id: "order3", t: "Ułóż zdanie 3", d: "Zdania w przeszłości i przyszłości.", k: "o", i: [
        "I went to the cinema yesterday.|Wczoraj poszedłem do kina.|Yesterday I went to the cinema.",
        "Did you see that film?|Czy widziałeś ten film?",
        "She was born in Poland.|Ona urodziła się w Polsce.",
        "We are going to buy a new car.|Zamierzamy kupić nowy samochód.",
        "It will be cold tomorrow.|Jutro będzie zimno.|Tomorrow it will be cold.",
        "My brother is taller than me.|Mój brat jest wyższy ode mnie.",
        "I didn't understand the question.|Nie zrozumiałem pytania.",
        "Where were you last night?|Gdzie byłeś zeszłej nocy?",
        "He bought a present for his wife.|On kupił prezent dla swojej żony.",
        "This is the best pizza in town.|To najlepsza pizza w mieście.",
        "I will call you later.|Zadzwonię do ciebie później.",
        "What did you eat for breakfast?|Co zjadłeś na śniadanie?"
      ]}
    ]
  },

  {
    id: "s5", name: "Średnio zaawansowany", tag: "B1", ex: ["type", "type", "pl2en", "listen"],
    levels: [
      { id: "feelings", t: "Uczucia i opinie", d: "Zmęczony, znudzony, nudny… Uwaga na bored i boring!", k: "v", i: [
        "tired|zmęczony|😩", "hungry|głodny|🤤", "thirsty|spragniony|🥤", "angry|zdenerwowany / zły|😠",
        "afraid/scared|przestraszony|😨", "bored|znudzony|🥱", "boring|nudny|😴",
        "interested|zainteresowany|🧐", "interesting|ciekawy / interesujący|🤩", "surprised|zaskoczony|😮",
        "worried|zmartwiony|😟", "proud|dumny|🏆", "busy|zajęty|📆", "cheap|tani|🪙",
        "expensive|drogi|💎", "easy|łatwy|👌", "difficult/hard|trudny|🧗"
      ]},
      { id: "pp", t: "Present Perfect", d: "Have you ever…? I've already… Doświadczenia i skutki.", k: "f", i: [
        "I {have been} to London.|Byłem kiedyś w Londynie.|was,am been|Present Perfect: have/has + III forma czasownika.",
        "She {has finished} her homework.|Ona skończyła już pracę domową.|have finished,finished has",
        "{Have} you ever eaten sushi?|Czy kiedykolwiek jadłeś sushi?|Did,Has",
        "We {haven't seen} that film.|Nie widzieliśmy tego filmu.|didn't saw,haven't saw",
        "He {has lost} his keys.|On zgubił klucze.|have lost,has losed",
        "I have {never} been to Spain.|Nigdy nie byłem w Hiszpanii.|ever,yet",
        "Have you finished your homework {yet}?|Skończyłeś już pracę domową?|still,ever|Yet – w pytaniach i przeczeniach (już / jeszcze).",
        "I have {already} eaten.|Już jadłem.|yet,ever",
        "They {have lived} here for ten years.|Mieszkają tu od dziesięciu lat.|live,are living|Polskie „od X lat” + czas teraźniejszy → Present Perfect.",
        "I have known her {since} 2015.|Znam ją od 2015 roku.|for,from|Since – od (punkt w czasie), for – przez (okres).",
        "She has worked here {for} two years.|Ona pracuje tu od dwóch lat.|since,from",
        "{Has} he ever been to Poland?|Czy on był kiedyś w Polsce?|Have,Did"
      ]},
      { id: "phrasal", t: "Phrasal verbs", d: "Czasownik + mała cząstka = nowe znaczenie.", k: "v", i: [
        "get up|wstawać (z łóżka)|⏰", "wake up|budzić się|🥱", "turn on/switch on|włączać|💡",
        "turn off/switch off|wyłączać|🔌", "put on|zakładać (ubranie)|🧥", "take off|zdejmować (ubranie)|👟",
        "look for|szukać|🔍", "look after|opiekować się|🤱", "give up|poddawać się / rzucać (nałóg)|🏳️",
        "find out|dowiadywać się|🕵️", "go out|wychodzić (np. ze znajomymi)|🎉", "come back|wracać|🔙",
        "sit down|siadać|🪑", "pick up|podnosić / odbierać|📦"
      ]},
      { id: "falsefr", t: "Fałszywi przyjaciele", d: "Słowa, które brzmią jak polskie, ale znaczą coś innego!", k: "m", i: [
        "actually|właściwie / tak naprawdę|aktualnie,akurat|„Aktualnie” to po angielsku currently / at the moment.",
        "eventually|w końcu / ostatecznie|ewentualnie,natychmiast|„Ewentualnie” to possibly / alternatively.",
        "sympathetic|współczujący|sympatyczny,symetryczny|„Sympatyczny” to nice / friendly.",
        "chef|szef kuchni / kucharz|szef w pracy,kelner|Szef w pracy to boss.",
        "fabric|tkanina|fabryka,farba|„Fabryka” to factory.",
        "receipt|paragon|recepta,przepis|„Recepta” to prescription, a „przepis” to recipe.",
        "recipe|przepis kulinarny|recepta,paragon|„Recepta” to prescription.",
        "lunatic|szaleniec|lunatyk,lotnik|„Lunatyk” to sleepwalker.",
        "ordinary|zwykły / zwyczajny|ordynarny,porządny|„Ordynarny” to vulgar / rude.",
        "lecture|wykład|lektura,lekcja|„Lektura” to reading / set book.",
        "closet|szafa (wnękowa)|klozet,komoda|„Klozet” to toilet.",
        "pathetic|żałosny|patetyczny,poetycki|„Patetyczny” to solemn / pompous.",
        "novel|powieść|nowela,nowość|„Nowela” to short story.",
        "genial|serdeczny / życzliwy|genialny,generalny|„Genialny” to brilliant.",
        "gymnasium|sala gimnastyczna|gimnazjum,gimnastyka|„Gimnazjum” to middle school.",
        "pupil|uczeń|pupilek (ulubieniec),nauczyciel|Polski „pupil” to pet / favourite."
      ]},
      { id: "cond", t: "Zdania warunkowe", d: "Jeśli…, to… oraz gdybym…, to…", k: "f", i: [
        "If it rains, I {will stay} at home.|Jeśli będzie padać, zostanę w domu.|would stay,stay|I tryb: If + Present Simple, will + czasownik.",
        "If you heat ice, it {melts}.|Kiedy podgrzewasz lód, on się topi.|melted,would melt|Tryb zerowy – prawdy ogólne: If + Present Simple, Present Simple.",
        "If I {have} time, I will call you.|Jeśli będę miał czas, zadzwonię do ciebie.|will have,would have|Po if nie używamy will, choć po polsku mówimy „będę”.",
        "If she studies, she {will pass} the exam.|Jeśli będzie się uczyć, zda egzamin.|would pass,passes",
        "If we {don't} leave now, we'll miss the train.|Jeśli zaraz nie wyjdziemy, spóźnimy się na pociąg.|won't,wouldn't",
        "{Unless} you hurry, you will be late.|Jeśli się nie pospieszysz, spóźnisz się.|If,When|Unless = jeśli nie.",
        "If I {had} a lot of money, I would travel.|Gdybym miał dużo pieniędzy, podróżowałbym.|have,would have|II tryb (sytuacje nierealne): If + Past Simple, would + czasownik.",
        "I would buy a house if I {had} enough money.|Kupiłbym dom, gdybym miał dość pieniędzy.|have,would have",
        "If I {were} you, I wouldn't do it.|Na twoim miejscu nie robiłbym tego.|am,will be|If I were you = na twoim miejscu.",
        "If I were you, I {would} learn English.|Na twoim miejscu uczyłbym się angielskiego.|will,am",
        "What {would} you do if you won the lottery?|Co byś zrobił, gdybyś wygrał na loterii?|will,do"
      ]},
      { id: "order4", t: "Ułóż zdanie 4", d: "Dłuższe zdania – wielki finał!", k: "o", i: [
        "I have never been to America.|Nigdy nie byłem w Ameryce.",
        "If it rains, we will stay at home.|Jeśli będzie padać, zostaniemy w domu.|We will stay at home if it rains.",
        "She has lived here since 2010.|Ona mieszka tu od 2010 roku.",
        "Could you tell me where the station is?|Czy mógłbyś mi powiedzieć, gdzie jest dworzec?",
        "I'm looking for my keys.|Szukam swoich kluczy.",
        "If I were you, I would call her.|Na twoim miejscu zadzwoniłbym do niej.|I would call her if I were you.",
        "He gave up smoking last year.|W zeszłym roku rzucił palenie.|Last year he gave up smoking.",
        "Have you ever eaten Polish food?|Czy jadłeś kiedyś polskie jedzenie?",
        "The film was more interesting than the book.|Film był ciekawszy niż książka.",
        "I was bored because the lesson was boring.|Nudziłem się, bo lekcja była nudna.",
        "What are you going to do this weekend?|Co zamierzasz robić w ten weekend?",
        "We haven't finished yet.|Jeszcze nie skończyliśmy."
      ]}
    ]
  },

  { id: "s6", name: "Pewny siebie", tag: "B1–B2", ex: ["type", "type", "pl2en", "listen"], levels: [] },
  { id: "s7", name: "Zaawansowany", tag: "B2", ex: ["type", "type", "pl2en", "listen"], levels: [] },
  { id: "s8", name: "Ekspert", tag: "C1", ex: ["type", "pl2en", "type", "en2pl"], levels: [] }
];

/*
 * Dodatkowe pliki z folderu data/ dopisują poziomy przez ADD(idEtapu, [poziomy], poId).
 * Bez poId poziomy trafiają na koniec etapu. Pole "i" może być tablicą
 * albo jednym tekstem z jednym elementem w każdej linii.
 */
window.ADD = function (stageId, levels, afterId) {
  var st = window.STAGES.filter(function (s) { return s.id === stageId; })[0];
  if (!st) { console.error('ADD: nieznany etap ' + stageId); return; }
  var at = st.levels.length;
  if (afterId) {
    for (var j = 0; j < st.levels.length; j++) { if (st.levels[j].id === afterId) { at = j + 1; break; } }
  }
  st.levels.splice.apply(st.levels, [at, 0].concat(levels));
};
