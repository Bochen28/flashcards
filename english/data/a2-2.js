/* Etap 3 – gramatyka i zdania A2. */
(function () {
var SENT = ["order", "pl2en", "order", "en2pl", "listen"];
ADD("s3", [
{ id: "x3-psmix", t: "Present Simple: powtórka", d: "Twierdzenia, przeczenia i pytania razem.", k: "f", i: `
My sister {lives} in Berlin.|Moja siostra mieszka w Berlinie.|live,living
We {don't} watch TV in the morning.|Nie oglądamy telewizji rano.|doesn't,aren't
{Does} your brother like football?|Czy twój brat lubi piłkę nożną?|Do,Is
My parents {get} up at six.|Moi rodzice wstają o szóstej.|gets,getting
She {doesn't} eat meat.|Ona nie je mięsa.|don't,isn't
What time {do} you finish work?|O której kończysz pracę?|does,are
The train {leaves} at 8:15.|Pociąg odjeżdża o 8:15.|leave,leaving
He {washes} his car every Sunday.|On myje samochód w każdą niedzielę.|washs,wash
I {don't} understand this word.|Nie rozumiem tego słowa.|doesn't,am not
{Do} they speak English?|Czy oni mówią po angielsku?|Does,Are
My dog {sleeps} a lot.|Mój pies dużo śpi.|sleep,sleeping
Where {does} your sister work?|Gdzie pracuje twoja siostra?|do,is
Water {boils} at 100 degrees.|Woda wrze w temperaturze 100 stopni.|boil,is boil
It {doesn't} snow here in winter.|Tu zimą nie pada śnieg.|don't,isn't
How much {does} this cost?|Ile to kosztuje?|do,is
My grandpa {reads} the newspaper every morning.|Mój dziadek co rano czyta gazetę.|read,reading
Kids {love} ice cream.|Dzieci uwielbiają lody.|loves,loving
{Does} the bus stop here?|Czy autobus się tu zatrzymuje?|Do,Is
She {tries} to be on time.|Ona stara się być na czas.|trys,try
Who {cooks} in your family?|Kto gotuje w twojej rodzinie?|cook,does cook|Pytanie o podmiot (Who…?) – bez do/does.
`},
{ id: "x3-sent-routine", t: "Zdania: mój dzień", d: "Codzienne czynności po kolei.", k: "o", ex: SENT, i: `
I get up at seven o'clock.|Wstaję o siódmej.
I have breakfast at home.|Jem śniadanie w domu.
I go to work by bus.|Jeżdżę do pracy autobusem.
My work starts at nine.|Moja praca zaczyna się o dziewiątej.
I have lunch at one o'clock.|Jem lunch o pierwszej.
I finish work at five.|Kończę pracę o piątej.
In the evening I watch TV.|Wieczorem oglądam telewizję.|I watch TV in the evening.
I go to bed at eleven.|Chodzę spać o jedenastej.
She takes a shower every morning.|Ona bierze prysznic każdego ranka.|Every morning she takes a shower.
We do the shopping on Saturdays.|Robimy zakupy w soboty.|On Saturdays we do the shopping.
He walks the dog after dinner.|On wyprowadza psa po obiedzie.|After dinner he walks the dog.
My children go to school on foot.|Moje dzieci chodzą do szkoły pieszo.
I never drink coffee in the evening.|Nigdy nie piję kawy wieczorem.
She usually reads before bed.|Ona zwykle czyta przed snem.
We often eat out on Fridays.|Często jemy na mieście w piątki.
I don't work at the weekend.|Nie pracuję w weekend.
What time do you get up?|O której wstajesz?
How do you get to work?|Jak dojeżdżasz do pracy?
Do you cook every day?|Czy gotujesz codziennie?
My husband makes coffee every morning.|Mój mąż co rano robi kawę.|Every morning my husband makes coffee.
`},
{ id: "x3-psvspc", t: "Simple czy Continuous?", d: "Zwykle (I work) czy teraz (I'm working)?", k: "f", i: `
I usually {walk} to work.|Zwykle chodzę do pracy pieszo.|am walking,walks|Rutyna, zwyczaj → Present Simple.
Today I {am taking} the bus.|Dziś jadę autobusem.|take,takes|Tylko dziś, wyjątkowo → Present Continuous.
Listen! Somebody {is singing}.|Posłuchaj! Ktoś śpiewa.|sings,sing
She {plays} tennis every Saturday.|Ona gra w tenisa w każdą sobotę.|is playing,play
Look! The children {are dancing}.|Spójrz! Dzieci tańczą.|dance,dances
I {don't like} horror films.|Nie lubię horrorów.|am not liking,not like|Czasowniki stanu (like, love, know, want) zwykle nie mają formy -ing.
Be quiet! The baby {is sleeping}.|Bądź cicho! Dziecko śpi.|sleeps,sleep
My dad {works} in a bank.|Mój tata pracuje w banku.|is working,work
This week I {am working} from home.|W tym tygodniu pracuję z domu.|work,works
We {know} the answer.|Znamy odpowiedź.|are knowing,knows
What {are} you doing now?|Co teraz robisz?|do,does
How often {do} you go swimming?|Jak często chodzisz na basen?|are,does
It {is raining} now, so take an umbrella.|Teraz pada, więc weź parasol.|rains,rain
It often {rains} in November.|W listopadzie często pada.|is raining,rain
I {want} a cup of coffee.|Chcę filiżankę kawy.|am wanting,wants
He {is wearing} a blue shirt today.|On ma dziś na sobie niebieską koszulę.|wears,wear
She usually {wears} jeans.|Ona zwykle nosi dżinsy.|is wearing,wear
Why {are} you crying?|Dlaczego płaczesz?|do,does
I {think} it's a good idea.|Myślę, że to dobry pomysł.|am thinking,thinks
Hurry up! Everybody {is waiting} for you.|Pospiesz się! Wszyscy na ciebie czekają.|waits,wait
`},
{ id: "x3-sent-shop", t: "Zdania: w sklepie i restauracji", d: "Zamawianie, płacenie, przymierzanie.", k: "o", ex: SENT, i: `
How much does this cost?|Ile to kosztuje?
Can I pay by card?|Czy mogę zapłacić kartą?
I'm just looking, thank you.|Tylko się rozglądam, dziękuję.
Do you have this in a bigger size?|Czy macie to w większym rozmiarze?
Where is the fitting room?|Gdzie jest przymierzalnia?
I would like a cup of coffee, please.|Poproszę filiżankę kawy.
Can I have the menu, please?|Czy mogę prosić kartę?
We would like a table for two.|Chcielibyśmy stolik dla dwóch osób.
I'll have the chicken soup.|Poproszę rosół.
Is service included?|Czy obsługa jest wliczona?
Could we have the bill, please?|Czy możemy prosić o rachunek?
Keep the change.|Reszty nie trzeba.
This shirt is too expensive.|Ta koszula jest za droga.
I'm looking for a present for my mum.|Szukam prezentu dla mamy.
Can I try it on?|Czy mogę to przymierzyć?
Do you have any vegetarian dishes?|Czy macie jakieś dania wegetariańskie?
I'd like to return these shoes.|Chciałbym zwrócić te buty.
The soup is cold.|Zupa jest zimna.
Two coffees to go, please.|Dwie kawy na wynos, poproszę.
Is there a cash machine near here?|Czy jest tu w pobliżu bankomat?
`},
{ id: "x3-inonat", t: "in / on / at – czas", d: "in May, on Monday, at 5 o'clock.", k: "f", i: `
I was born {in} 1995.|Urodziłem się w 1995 roku.|on,at
The shop opens {at} nine o'clock.|Sklep otwierają o dziewiątej.|in,on
My birthday is {on} 3rd July.|Moje urodziny są trzeciego lipca.|in,at
We go skiing {in} February.|Jeździmy na nartach w lutym.|on,at
I'll see you {on} Friday.|Zobaczymy się w piątek.|in,at
She works {at} night.|Ona pracuje w nocy.|in,on
I drink coffee {in} the morning.|Piję kawę rano.|on,at
The film starts {at} 8 p.m.|Film zaczyna się o 20:00.|in,on
We have a party {on} New Year's Eve.|W Sylwestra robimy imprezę.|in,at
It's very hot here {in} summer.|Latem jest tu bardzo gorąco.|on,at
I met him {at} Christmas.|Poznałem go w święta Bożego Narodzenia.|on,in|At Christmas / at Easter – cały okres świąt.
My train leaves {at} midnight.|Mój pociąg odjeżdża o północy.|in,on
Let's meet {on} Monday morning.|Spotkajmy się w poniedziałek rano.|in,at|Konkretny dzień + pora dnia → on.
He was born {in} the 20th century.|On urodził się w XX wieku.|on,at
I'm busy {at} the moment.|W tej chwili jestem zajęty.|in,on
We usually relax {at} the weekend.|Zwykle odpoczywamy w weekend.|in,to|Brytyjskie at the weekend, amerykańskie on the weekend.
Call me {in} the afternoon.|Zadzwoń do mnie po południu.|on,at
The course starts {on} 1st September.|Kurs zaczyna się pierwszego września.|in,at
I'll be back {in} ten minutes.|Wrócę za dziesięć minut.|after,on|In + okres czasu = za (np. za 10 minut).
We had dinner {at} 7 o'clock.|Zjedliśmy obiad o siódmej.|on,in
`},
{ id: "x3-sent-city", t: "Zdania: jak dojść?", d: "Pytanie o drogę i wskazówki.", k: "o", ex: SENT, i: `
Excuse me, where is the post office?|Przepraszam, gdzie jest poczta?
Go straight on.|Idź prosto.
Turn left at the traffic lights.|Skręć w lewo na światłach.
Turn right at the roundabout.|Skręć w prawo na rondzie.
It's on the corner.|To jest na rogu.
The bank is opposite the church.|Bank jest naprzeciwko kościoła.
The museum is next to the park.|Muzeum jest obok parku.
How do I get to the station?|Jak dojdę do dworca?
Is it far?|Czy to daleko?
It's about ten minutes on foot.|To około dziesięć minut pieszo.
Take the second street on the left.|Skręć w drugą ulicę w lewo.
Cross the bridge.|Przejdź przez most.
The hotel is at the end of the street.|Hotel jest na końcu ulicy.
You can take the number five bus.|Możesz pojechać autobusem numer pięć.
Where can I buy a ticket?|Gdzie mogę kupić bilet?
The shop is between the bank and the café.|Sklep jest między bankiem a kawiarnią.
Sorry, I'm not from here.|Przepraszam, nie jestem stąd.
Go past the school.|Przejdź obok szkoły.
It's on your right.|Jest po twojej prawej stronie.
Can you show me on the map?|Czy możesz mi pokazać na mapie?
`},
{ id: "x3-must", t: "must, have to, should", d: "Muszę, nie wolno, nie trzeba, powinieneś.", k: "f", i: `
You {must} wear a seat belt.|Musisz zapiąć pasy.|mustn't,don't have to
You {mustn't} smoke here.|Nie wolno tu palić.|don't have to,must|Mustn't = nie wolno. Don't have to = nie trzeba.
It's Sunday. I {don't have to} get up early.|Jest niedziela. Nie muszę wcześnie wstawać.|mustn't,must
She {has to} work on Saturdays.|Ona musi pracować w soboty.|have to,must to
Do you {have to} wear a uniform?|Czy musisz nosić mundurek?|has to,must
Students {mustn't} use phones during the exam.|Podczas egzaminu uczniom nie wolno używać telefonów.|don't have to,haven't to
I {have to} go now. Bye!|Muszę już iść. Pa!|has to,must to
You {don't have to} pay. It's free.|Nie musisz płacić. To jest darmowe.|mustn't,haven't
He {doesn't have to} cook. His wife cooks.|On nie musi gotować. Jego żona gotuje.|mustn't,don't have to
We {must} be quiet in the library.|W bibliotece musimy być cicho.|mustn't,musts
You {mustn't} touch the paintings.|Nie wolno dotykać obrazów.|don't have to,must
{Does} he have to work tomorrow?|Czy on musi jutro pracować?|Do,Must
You {should} see a doctor.|Powinieneś pójść do lekarza.|must to,should to|Should = powinieneś (rada).
You {shouldn't} eat so much sugar.|Nie powinieneś jeść tyle cukru.|mustn't to,don't should
I think you {should} apologise.|Myślę, że powinieneś przeprosić.|shall,must to
Children {must} go to school.|Dzieci muszą chodzić do szkoły.|must to,musts
You {don't have to} come if you don't want to.|Nie musisz przychodzić, jeśli nie chcesz.|mustn't,shouldn't to
Drivers {have to} stop at a red light.|Kierowcy muszą zatrzymać się na czerwonym świetle.|has to,must to
{Should} I call him?|Czy powinienem do niego zadzwonić?|Must to,Do should
You {must} try this cake! It's delicious.|Musisz spróbować tego ciasta! Jest pyszne.|must to,have
`},
{ id: "x3-sent-now", t: "Zdania: co się dzieje teraz?", d: "Present Continuous w praktyce.", k: "o", ex: SENT, i: `
I am cooking dinner now.|Teraz gotuję obiad.|Now I am cooking dinner.
She is talking on the phone.|Ona rozmawia przez telefon.
The children are playing outside.|Dzieci bawią się na dworze.
It is snowing again.|Znowu pada śnieg.
We are waiting for the bus.|Czekamy na autobus.
What are you reading?|Co czytasz?
He isn't listening to me.|On mnie nie słucha.
Are you watching this film?|Oglądasz ten film?
My parents are staying with us this week.|Moi rodzice mieszkają u nas w tym tygodniu.
I'm looking for my glasses.|Szukam okularów.
Why is she crying?|Dlaczego ona płacze?
The sun is shining.|Świeci słońce.
They are building a new school.|Budują nową szkołę.
I'm not feeling well today.|Nie czuję się dziś dobrze.
Who are you talking to?|Z kim rozmawiasz?
We are having lunch at the moment.|W tej chwili jemy lunch.
Is it raining outside?|Czy na dworze pada?
The phone is ringing.|Telefon dzwoni.
My brother is learning to drive.|Mój brat uczy się prowadzić samochód.
You are standing on my foot!|Stoisz mi na nodze!
`},
{ id: "x3-freq", t: "always, often, never…", d: "Przysłówki częstotliwości i ich miejsce w zdaniu.", k: "f", i: `
I {always} brush my teeth before bed.|Zawsze myję zęby przed snem.|never,sometimes
She {never} drinks coffee.|Ona nigdy nie pije kawy.|always,often|Never jest przeczeniem – nie dodajemy don't.
We {often} go to the cinema.|Często chodzimy do kina.|never,rarely
He is {usually} late.|On zwykle się spóźnia.|never,ever|Po „be” przysłówek stoi za czasownikiem: He is usually late.
I {sometimes} cook for my friends.|Czasami gotuję dla przyjaciół.|always,never
They {rarely} eat out.|Rzadko jadają na mieście.|often,always
How {often} do you exercise?|Jak często ćwiczysz?|much,many
I go swimming {once} a week.|Chodzę na basen raz w tygodniu.|one,first
She calls her mum {twice} a day.|Ona dzwoni do mamy dwa razy dziennie.|two,second
We visit our grandparents {every} Sunday.|Odwiedzamy dziadków w każdą niedzielę.|all,each of
I {hardly ever} watch TV.|Prawie nigdy nie oglądam telewizji.|always,often
It {never} snows in Egypt.|W Egipcie nigdy nie pada śnieg.|always,often
My boss is {always} busy.|Mój szef jest zawsze zajęty.|never,rarely
I {usually} get up at seven.|Zwykle wstaję o siódmej.|never,rarely
Do you {ever} go hiking?|Czy chodzisz czasem po górach?|never,always|Ever = kiedykolwiek (w pytaniach).
We have English lessons three {times} a week.|Mamy angielski trzy razy w tygodniu.|time,once
He {doesn't often} go out.|On nie wychodzi często.|often doesn't,doesn't never
I'm {never} bored at work.|W pracy nigdy się nie nudzę.|always,not never
They {always} have breakfast together.|Zawsze jedzą razem śniadanie.|never,rarely
I see my cousins {from time to time}.|Od czasu do czasu widuję kuzynów.|every time,all time
`},
{ id: "x3-sent-like", t: "Zdania: co lubię?", d: "Upodobania, hobby i czas wolny.", k: "o", ex: SENT, i: `
I like reading books.|Lubię czytać książki.
She loves dancing.|Ona uwielbia tańczyć.
He doesn't like cold weather.|On nie lubi zimnej pogody.
I hate getting up early.|Nienawidzę wcześnie wstawać.
Do you like swimming?|Lubisz pływać?
My favourite sport is volleyball.|Mój ulubiony sport to siatkówka.
We enjoy walking in the forest.|Lubimy spacerować po lesie.
I'm interested in history.|Interesuję się historią.
She is good at maths.|Ona jest dobra z matematyki.
I'm not very good at cooking.|Nie jestem zbyt dobry w gotowaniu.
What do you do in your free time?|Co robisz w wolnym czasie?
I play the guitar in a band.|Gram na gitarze w zespole.
He collects old coins.|On zbiera stare monety.
My son plays computer games every day.|Mój syn codziennie gra w gry komputerowe.
I go to the gym three times a week.|Chodzę na siłownię trzy razy w tygodniu.
Would you like to go to the cinema?|Chciałbyś pójść do kina?
I prefer tea to coffee.|Wolę herbatę od kawy.
They don't like horror films.|Oni nie lubią horrorów.
Does your sister like animals?|Czy twoja siostra lubi zwierzęta?
I really like this song.|Bardzo lubię tę piosenkę.
`}
]);
})();
