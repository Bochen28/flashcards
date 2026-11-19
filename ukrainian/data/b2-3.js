/* Etap 7 – słownictwo B2: przedrostki, media, sztuka, ekologia, idiomy. */
(function () {
var CHOICE = ["en2pl", "pl2en", "listen"];
ADD("s7", [
{ id: "x7-prefix-go", t: "Przedrostki: йти, їхати", d: "Вийти, зайти, перейти, під'їхати…", k: "v", i: `
вийти|wyjść
зайти|wstąpić (zajść)
перейти|przejść (na drugą stronę)
підійти|podejść
відійти|odejść (odsunąć się)
пройти|przejść (minąć)
обійти|obejść
увійти|wejść (do środka)
дійти|dojść
прийти|przyjść
піти|pójść
зійти|zejść
розійтися|rozejść się
зійтися|zejść się
виїхати|wyjechać
заїхати|zajechać (wstąpić autem)
переїхати|przeprowadzić się
під'їхати|podjechać
від'їхати|odjechać
проїхати|przejechać
об'їхати|objechać
доїхати|dojechać
приїхати|przyjechać
поїхати|pojechać
в'їхати|wjechać
`},
{ id: "x7-prefix-other", t: "Przedrostki: писати, дати, казати", d: "Підписати, передати, розказати…", k: "v", i: `
переписати|przepisać
записати|zapisać
підписати|podpisać
виписати|wypisać
дописати|dopisać
описати|opisać
перечитати|przeczytać ponownie
дочитати|doczytać
переробити|przerobić
заробити|zarobić
виробляти|produkować
видати|wydać
передати|przekazać
продати|sprzedać
здати|zdać (oddać)
задати|zadać
додати|dodać
віддати|oddać
подати|podać
роздати|rozdać
розказати|opowiedzieć
підказати|podpowiedzieć
наказати|rozkazać
переказати|przekazać (streścić)
показати|pokazać
`},
{ id: "x7-media", t: "Media i dziennikarstwo", d: "Nagłówek, na żywo, wolność słowa.", k: "v", i: `
заголовок|nagłówek
стаття|artykuł
редактор|redaktor
видавництво|wydawnictwo
наклад|nakład
інтерв'ю|wywiad
репортаж|reportaż
кореспондент|korespondent
ведучий|prowadzący
прямий ефір|transmisja na żywo
телеглядач|telewidz
слухач|słuchacz
читач|czytelnik
передплата|prenumerata
реклама|reklama
фейк|fake news
джерело інформації|źródło informacji
цензура|cenzura
свобода слова|wolność słowa
пропаганда|propaganda
допис|wpis (post)
підписник|obserwujący (subskrybent)
вподобайка|polubienie (lajk)
блогер|bloger
висвітлювати|relacjonować
`},
{ id: "x7-arts", t: "Sztuka i literatura", d: "Powieść, fabuła, martwa natura, arcydzieło.", k: "v", i: `
роман|powieść
оповідання|opowiadanie
вірш|wiersz
поет|poeta
письменник|pisarz
поезія|poezja
проза|proza
персонаж|postać
сюжет|fabuła
розділ|rozdział
видання|wydanie
картина|obraz
художник|malarz (artysta)
скульптура|rzeźba
виставка|wystawa
галерея|galeria
полотно|płótno
пейзаж|pejzaż
портрет|portret
натюрморт|martwa natura
шедевр|arcydzieło
натхнення|natchnienie
талант|talent
твір|utwór (dzieło)
митець|artysta (twórca)
`},
{ id: "x7-ecology", t: "Ekologia", d: "Emisje, efekt cieplarniany, susza, recykling.", k: "v", i: `
викиди|emisje
вуглекислий газ|dwutlenek węgla
парниковий ефект|efekt cieplarniany
глобальне потепління|globalne ocieplenie
відновлювана енергія|energia odnawialna
сонячна панель|panel słoneczny
вітрова електростанція|elektrownia wiatrowa
атомна електростанція|elektrownia atomowa
викопне паливо|paliwa kopalne
переробка|recykling
сортувати сміття|segregować śmieci
одноразовий|jednorazowy
пластик|plastik
вимирання|wymieranie
зникаючий вид|gatunek zagrożony wyginięciem
заповідник|rezerwat
біорізноманіття|bioróżnorodność
посуха|susza
повінь|powódź
танення льодовиків|topnienie lodowców
екологічний слід|ślad ekologiczny
забруднювати|zanieczyszczać
охороняти|chronić
сталий розвиток|zrównoważony rozwój
природні ресурси|zasoby naturalne
`},
{ id: "x7-abstract", t: "Pojęcia abstrakcyjne", d: "Godność, sumienie, przyczyna, skutek.", k: "v", i: `
свобода|wolność
справедливість|sprawiedliwość
рівність|równość
гідність|godność
честь|honor
совість|sumienie
мудрість|mądrość
досвід|doświadczenie
знання|wiedza
мета|cel
сенс|sens
причина|przyczyna
наслідок|skutek
вплив|wpływ
вибір|wybór
можливість|możliwość
загроза|zagrożenie
перевага|zaleta (przewaga)
недолік|wada
виклик|wyzwanie
підхід|podejście
погляд|pogląd
довіра|zaufanie
надія|nadzieja
розчарування|rozczarowanie
`},
{ id: "x7-character", t: "Charakter", d: "Wytrwały, uparty, hojny, obłudny.", k: "v", i: `
наполегливий|wytrwały
амбітний|ambitny
скромний|skromny
зарозумілий|zarozumiały
впертий|uparty
щедрий|hojny
скупий|skąpy
хитрий|przebiegły
наївний|naiwny
дотепний|dowcipny
чуйний|czuły (troskliwy)
байдужий|obojętny
дратівливий|drażliwy
легковажний|lekkomyślny
розважливий|rozważny
підступний|podstępny
відвертий|szczery (otwarty)
лицемірний|obłudny
рішучий|zdecydowany
нерішучий|niezdecydowany
працьовитий|pracowity
лінивий|leniwy
ввічливий|uprzejmy
грубий|niegrzeczny (grubiański)
вимогливий|wymagający
`},
{ id: "x7-colloc", t: "Kolokacje", d: "Podjąć decyzję, zwrócić uwagę, wziąć pod uwagę.", k: "v", ex: CHOICE, i: `
ухвалити рішення|podjąć decyzję
скласти іспит|zdać egzamin
провалити іспит|oblać egzamin
звернути увагу|zwrócić uwagę
брати участь|brać udział
мати рацію|mieć rację
дотримати слова|dotrzymać słowa
порушити обіцянку|złamać obietnicę
поставити запитання|zadać pytanie
дати пораду|udzielić rady
зробити висновок|wyciągnąć wniosek
справити враження|zrobić wrażenie
набратися досвіду|nabrać doświadczenia
зводити кінці з кінцями|wiązać koniec z końcem
відігравати роль|odgrywać rolę
мати значення|mieć znaczenie
втратити свідомість|stracić przytomność
прийти до тями|dojść do siebie
покласти край|położyć kres
дати раду|poradzić sobie
вжити заходів|podjąć środki
взяти до уваги|wziąć pod uwagę
піти на компроміс|pójść na kompromis
тримати в таємниці|trzymać w tajemnicy
сказати правду|powiedzieć prawdę
`},
{ id: "x7-idioms1", t: "Idiomy 1", d: "Бити байдики, вішати локшину на вуха…", k: "v", ex: CHOICE, i: `
бити байдики|obijać się
водити за ніс|wodzić za nos
вішати локшину на вуха|wciskać kit
як дві краплі води|jak dwie krople wody
ні риба ні м'ясо|ni pies, ni wydra
з голочки|jak spod igły
накивати п'ятами|dać nogę (uciec)
пекти раків|czerwienić się jak burak
тримати язик за зубами|trzymać język za zębami
сім п'ятниць на тиждень|zmienia zdanie co chwilę
коли рак на горі свисне|na święty nigdy
як сніг на голову|jak grom z jasnego nieba
грошей кури не клюють|pieniędzy jak lodu
працювати не покладаючи рук|pracować bez wytchnienia
на всі сто|na sto procent
ні в зуб ногою|ani w ząb
ловити ґав|gapić się (łapać wrony)
сісти в калюжу|zbłaźnić się
пальцем не поворухнути|palcem nie kiwnąć
як кіт наплакав|tyle, co kot napłakał
у чорта на рогах|gdzie diabeł mówi dobranoc
сидіти склавши руки|siedzieć z założonymi rękami
не в своїй тарілці|nieswojo (nie w sosie)
морочити голову|zawracać głowę
байдуже|wszystko jedno
`},
{ id: "x7-body", t: "Ciało od środka", d: "Kręgosłup, wątroba, nadgarstek, skroń.", k: "v", i: `
хребет|kręgosłup
м'яз|mięsień
кістка|kość
суглоб|staw
шкіра|skóra
вена|żyła
легені|płuca
печінка|wątroba
нирка|nerka
шлунок|żołądek
кишечник|jelita
мозок|mózg
нерв|nerw
лікоть|łokieć
зап'ястя|nadgarstek
щиколотка|kostka (u nogi)
стегно|udo
литка|łydka
долоня|dłoń
п'ята|pięta
підборіддя|podbródek
скроня|skroń
брова|brew
вія|rzęsa
горло|gardło
`},
{ id: "x7-cooking", t: "Gotowanie", d: "Kroić, trzeć, dusić, piekarnik, chochla.", k: "v", i: `
різати|kroić
нарізати|pokroić
чистити|obierać
терти|trzeć (na tarce)
змішувати|mieszać
збивати|ubijać
смажити|smażyć
варити|gotować
тушкувати|dusić
запікати|zapiekać
пекти|piec
кип'ятити|gotować (wodę)
посолити|posolić
поперчити|popieprzyć
приправа|przyprawa
каструля|garnek
сковорідка|patelnia
духовка|piekarnik
тертка|tarka
друшляк|durszlak
черпак|chochla
тісто|ciasto (surowe)
начинка|nadzienie
рецепт|przepis
інгредієнти|składniki
`},
{ id: "x7-time", t: "Wyrażenia czasowe", d: "Niedawno, wkrótce, zawczasu, pojutrze.", k: "v", i: `
нещодавно|niedawno
останнім часом|ostatnio
віднедавна|od niedawna
досі|wciąż (do tej pory)
згодом|z czasem (później)
незабаром|wkrótce
відтепер|odtąd
заздалегідь|zawczasu
вчасно|na czas
одразу|od razu
поступово|stopniowo
раптом|nagle
зрештою|w końcu
час від часу|od czasu do czasu
щойно|przed chwilą (właśnie)
тим часом|tymczasem
напередодні|w przeddzień
позавчора|przedwczoraj
післязавтра|pojutrze
опівночі|o północy
опівдні|w południe
на світанку|o świcie
надвечір|pod wieczór
цілодобово|całodobowo
назавжди|na zawsze
`},
{ id: "x7-crime", t: "Przestępstwa", d: "Oszustwo, łapówka, alibi, dożywocie.", k: "v", i: `
крадіжка|kradzież
грабіж|rabunek
пограбування банку|napad na bank
шахрайство|oszustwo
шахрай|oszust
хабар|łapówka
хабарництво|łapownictwo
вбивство|zabójstwo
викрадення|porwanie
контрабанда|przemyt
підробка|podróbka (fałszerstwo)
вандалізм|wandalizm
злам|włamanie
свідчення|zeznanie
підозрюваний|podejrzany
алібі|alibi
відбитки пальців|odciski palców
слідчий|śledczy
застава|kaucja
умовний термін|wyrok w zawieszeniu
довічне ув'язнення|dożywocie
виправдати|uniewinnić
засудити|skazać
покарання|kara
правопорушення|wykroczenie
`},
{ id: "x7-study", t: "Studia", d: "Akademik, wykład, zaliczenie, ściąga.", k: "v", i: `
вступ|przyjęcie (na studia)
вступати до університету|zdawać na studia
абітурієнт|kandydat na studia
першокурсник|student pierwszego roku
стипендія|stypendium
гуртожиток|akademik
лекція|wykład
семінар|seminarium (ćwiczenia)
залік|zaliczenie
сесія|sesja
диплом|dyplom
дипломна робота|praca dyplomowa
бакалавр|licencjat
магістр|magister
аспірантура|studia doktoranckie
викладач|wykładowca
декан|dziekan
факультет|wydział
кафедра|katedra
спеціальність|kierunek studiów
заочне навчання|studia zaoczne
конспект|notatki
шпаргалка|ściąga
відрахувати|skreślić z listy studentów
середній бал|średnia ocen
`},
{ id: "x7-feelings", t: "Uczucia", d: "Zachwyt, oburzenie, ulga, pogarda.", k: "v", i: `
захоплення|zachwyt
обурення|oburzenie
розпач|rozpacz
полегшення|ulga
туга|tęsknota (smutek)
ностальгія|nostalgia
байдужість|obojętność
зневага|pogarda
вдячність|wdzięczność
каяття|skrucha
збентеження|zakłopotanie
здивування|zdziwienie
цікавість|ciekawość
нетерпіння|niecierpliwość
радість|radość
горе|nieszczęście (żal)
лють|wściekłość
огида|obrzydzenie
жах|przerażenie
ейфорія|euforia
гордість|duma
смуток|smutek
щастя|szczęście
наснага|zapał
пристрасть|namiętność
`},
{ id: "x7-linkers", t: "Słowa łączące B2", d: "W rzeczywistości, przynajmniej, zatem.", k: "v", i: `
насправді|w rzeczywistości
зокрема|w szczególności
принаймні|przynajmniej
щонайменше|co najmniej
навіть|nawet
власне|właściwie
загалом|ogólnie
здебільшого|przeważnie
безперечно|bezsprzecznie
мабуть|chyba
навряд чи|raczej nie
до речі|à propos (nawiasem mówiąc)
навпаки|przeciwnie (na odwrót)
водночас|jednocześnie
відтак|w związku z tym
однак|jednak
втім|zresztą
отже|zatem
тобто|to znaczy
щоправда|co prawda
між іншим|nawiasem mówiąc
до того ж|w dodatku
в такому разі|w takim razie
незважаючи на це|mimo to
по суті|w istocie
`}
]);
})();
