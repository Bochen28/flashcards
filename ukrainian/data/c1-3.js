/* Etap 8 – słownictwo C1: historia, filozofia, teatr, technologia, społeczeństwo. */
(function () {
var CHOICE = ["en2pl", "pl2en", "listen"];
ADD("s8", [
{ id: "x8-idioms4", t: "Idiomy 4", d: "Wisieć na włosku, łamać sobie głowę, prochu nie wymyśli.", k: "v", ex: CHOICE, i: `
пасти задніх|zostawać w tyle
кидати слова на вітер|rzucać słowa na wiatr
водою не розлити|nierozłączni
комар носа не підточить|nie ma się do czego przyczepić
брати близько до серця|brać sobie do serca
на сьомому небі|w siódmym niebie
як на голках|jak na szpilkach
дати відкоша|dać odpór
закинути вудочку|wybadać grunt
пускати пил в очі|mydlić oczy
висіти на волосині|wisieć na włosku
зарубати на носі|zapamiętać raz na zawsze
ламати голову|łamać sobie głowę
дерти носа|zadzierać nosa
мов у воду дивився|jakby przewidział
не тямити себе з радості|nie posiadać się z radości
ні кола ні двора|ani domu, ani grosza
повісити носа|zwiesić nos na kwintę
тримати руку на пульсі|trzymać rękę na pulsie
як по маслу|jak po maśle
пороху не вигадає|prochu nie wymyśli
сміятися в кулак|śmiać się w kułak
на широку ногу|z rozmachem
спіймати облизня|odejść z kwitkiem
собаку з'їсти на чомусь|zjeść na czymś zęby
`},
{ id: "x8-history", t: "Historia", d: "Średniowiecze, hetman, pańszczyzna, kronika.", k: "v", i: `
історія|historia
століття|stulecie (wiek)
епоха|epoka
середньовіччя|średniowiecze
імперія|imperium
королівство|królestwo
князь|książę
гетьман|hetman
козак|kozak
кріпацтво|pańszczyzna
повстання|powstanie
революція|rewolucja
літопис|kronika (latopis)
пам'ятник|pomnik
археологія|archeologia
розкопки|wykopaliska
давнина|starożytność
предки|przodkowie
Голодомор|Wielki Głód (Hołodomor)
депортація|deportacja
тоталітаризм|totalitaryzm
відродження|odrodzenie
цивілізація|cywilizacja
Київська Русь|Ruś Kijowska
Річ Посполита|Rzeczpospolita
`},
{ id: "x8-philosophy", t: "Filozofia", d: "Moralność, istota, los, wolna wola.", k: "v", i: `
істина|prawda (absolutna)
мораль|moralność
етика|etyka
естетика|estetyka
логіка|logika
міркування|rozumowanie
аргумент|argument
контраргумент|kontrargument
парадокс|paradoks
сутність|istota (sedno)
існування|istnienie
доля|los
сенс життя|sens życia
свобода волі|wolna wola
добро|dobro
зло|zło
душа|dusza
розум|rozum
сумнів|wątpliwość
пізнання|poznanie
мислитель|myśliciel
ідеал|ideał
гармонія|harmonia
впевненість|pewność
причинність|przyczynowość
`},
{ id: "x8-stage", t: "Teatr i muzyka", d: "Kurtyna, antrakt, dyrygent, trasa koncertowa.", k: "v", i: `
сцена|scena
глядач|widz
оплески|oklaski
антракт|przerwa (antrakt)
завіса|kurtyna
декорації|dekoracje
режисер|reżyser
репетиція|próba
оркестр|orkiestra
диригент|dyrygent
хор|chór
соліст|solista
опера|opera
балет|balet
симфонія|symfonia
мелодія|melodia
ритм|rytm
нота|nuta
композитор|kompozytor
концертна зала|sala koncertowa
партер|parter
ложа|loża
гастролі|trasa koncertowa
суфлер|sufler
аплодувати|bić brawo
`},
{ id: "x8-tech", t: "Technologie przyszłości", d: "Sieć neuronowa, wyciek danych, kryptowaluta.", k: "v", i: `
машинне навчання|uczenie maszynowe
нейромережа|sieć neuronowa
обробка даних|przetwarzanie danych
автоматизація|automatyzacja
дрон|dron
квантовий комп'ютер|komputer kwantowy
біотехнології|biotechnologia
генна інженерія|inżynieria genetyczna
3D-друк|druk 3D
смарт-годинник|smartwatch
розумний будинок|inteligentny dom
кібератака|cyberatak
витік даних|wyciek danych
цифровізація|cyfryzacja
електромобіль|samochód elektryczny
зарядна станція|stacja ładowania
блокчейн|blockchain
криптовалюта|kryptowaluta
стартап|startup
інновація|innowacja
хмарні обчислення|przetwarzanie w chmurze
голосовий помічник|asystent głosowy
чат-бот|czatbot
відеозв'язок|połączenie wideo
сенсорний екран|ekran dotykowy
`},
{ id: "x8-space", t: "Kosmos", d: "Droga Mleczna, gwiazdozbiór, nieważkość.", k: "v", i: `
Всесвіт|wszechświat
галактика|galaktyka
Чумацький Шлях|Droga Mleczna
Сонячна система|Układ Słoneczny
планета|planeta
супутник|satelita
космос|kosmos
ракета|rakieta
орбіта|orbita
космонавт|kosmonauta
зоряне небо|gwiaździste niebo
сузір'я|gwiazdozbiór
комета|kometa
метеорит|meteoryt
чорна діра|czarna dziura
світловий рік|rok świetlny
телескоп|teleskop
невагомість|nieważkość
затемнення|zaćmienie
Марс|Mars
Земля|Ziemia
Місяць|Księżyc
Сонце|Słońce
космічна станція|stacja kosmiczna
обсерваторія|obserwatorium
`},
{ id: "x8-society", t: "Społeczeństwo", d: "Ulgi, sondaż, wiec, dobrobyt.", k: "v", i: `
суспільство|społeczeństwo
громадянське суспільство|społeczeństwo obywatelskie
дискримінація|dyskryminacja
толерантність|tolerancja
інклюзія|inkluzja (włączenie)
соціальне забезпечення|zabezpieczenie społeczne
пільги|ulgi
малозабезпечений|ubogi (o niskich dochodach)
багатодітна сім'я|rodzina wielodzietna
середній клас|klasa średnia
еліта|elita
верства суспільства|warstwa społeczna
громадська думка|opinia publiczna
опитування|sondaż
мітинг|wiec
петиція|petycja
активіст|aktywista
правозахисник|obrońca praw człowieka
рівні можливості|równe szanse
ґендерна рівність|równość płci
демографія|demografia
народжуваність|dzietność (urodzenia)
смертність|śmiertelność
тривалість життя|długość życia
добробут|dobrobyt
`},
{ id: "x8-adverbs", t: "Przysłówki C1", d: "Niemało, coraz, na chybił trafił, ukradkiem.", k: "v", i: `
неабияк|niemało (nie byle jak)
чимало|sporo
дедалі|coraz (bardziej)
неодмінно|koniecznie
неухильно|konsekwentnie
почасти|częściowo
подекуди|miejscami
навмання|na chybił trafił
навмисно|celowo
ненароком|niechcący
мимоволі|mimowolnie
заледве|ledwie
надто|zbyt
вельми|wielce (bardzo)
украй|skrajnie
цілком|całkowicie
геть|zupełnie (precz)
нишком|ukradkiem
потай|potajemnie
спроквола|niespiesznie
гуртом|gromadnie (razem)
навзаєм|nawzajem
повсякчас|nieustannie
чимдуж|co sił
обабіч|po obu stronach
`},
{ id: "x8-verbs2", t: "Czasowniki C1 – 2", d: "Uciekać się do, powoływać się, zwlekać.", k: "v", i: `
вдаватися до|uciekać się do
вбачати|dopatrywać się
зважати на|zważać na
ґрунтуватися на|opierać się na
посилатися на|powoływać się na
полягати в|polegać na
сягати|sięgać
спричиняти|powodować
зумовлювати|warunkować
опікуватися|opiekować się
вболівати за|kibicować
дошкуляти|dokuczać
нарікати|narzekać
вагатися|wahać się
гаяти час|marnować czas
зволікати|zwlekać
квапитися|spieszyć się
остерігатися|wystrzegać się
зневажати|gardzić
обурюватися|oburzać się
шанувати|czcić (szanować)
долучатися|przyłączać się
сповільнювати|spowalniać
пришвидшувати|przyspieszać
нівелювати|niwelować
`},
{ id: "x8-media", t: "Media C1", d: "Sprostowanie, dezinformacja, rzecznik.", k: "v", i: `
інформаційне агентство|agencja informacyjna
журналістське розслідування|dziennikarstwo śledcze
першоджерело|źródło pierwotne
спростування|sprostowanie
дезінформація|dezinformacja
маніпуляція|manipulacja
медіаграмотність|kompetencje medialne
клікбейт|clickbait
ексклюзив|materiał na wyłączność
оглядач|komentator (felietonista)
колонка|felieton (kolumna)
передовиця|artykuł wstępny
шпальта|szpalta
рубрика|rubryka
редакція|redakcja
випуск новин|wydanie wiadomości
ефірний час|czas antenowy
рейтинг|oglądalność (ranking)
аудиторія|odbiorcy
анонс|zapowiedź
прес-реліз|komunikat prasowy
прес-конференція|konferencja prasowa
речник|rzecznik
акредитація|akredytacja
незалежні медіа|niezależne media
`},
{ id: "x8-illness", t: "Choroby i leczenie", d: "Przewlekły, powikłanie, kroplówka, katar.", k: "v", i: `
хронічний|przewlekły
гострий біль|ostry ból
загострення|zaostrzenie
ускладнення|powikłanie
рецидив|nawrót
реабілітація|rehabilitacja
протипоказання|przeciwwskazania
побічна дія|skutek uboczny
дозування|dawkowanie
анестезія|znieczulenie
наркоз|narkoza
крапельниця|kroplówka
укол|zastrzyk
мазь|maść
краплі|krople
пігулка|pigułka
бинт|bandaż
пластир|plaster
термометр|termometr
підвищений тиск|podwyższone ciśnienie
цукровий діабет|cukrzyca
астма|astma
мігрень|migrena
застуда|przeziębienie
нежить|katar
`},
{ id: "x8-character", t: "Charakter C1", d: "Bezinteresowny, próżny, pamiętliwy, nieugięty.", k: "v", i: `
безкорисливий|bezinteresowny
марнославний|próżny
зверхній|wyniosły
поблажливий|pobłażliwy
принциповий|pryncypialny
безпринципний|bez zasad
винахідливий|pomysłowy
кмітливий|bystry
проникливий|przenikliwy
далекоглядний|dalekowzroczny
обачний|rozważny (ostrożny)
необачний|nierozważny
мстивий|mściwy
злопам'ятний|pamiętliwy
поступливий|ustępliwy
непохитний|nieugięty
зухвалий|zuchwały
цілеспрямований|zdeterminowany
запальний|porywczy
лагідний|łagodny
примхливий|kapryśny
педантичний|pedantyczny
безтурботний|beztroski
самовпевнений|zbyt pewny siebie
щирий|szczery
`}
]);
})();
