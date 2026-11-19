/* Etap 4 – gramatyka i zdania A2. */
(function () {
var SENT = ["order", "pl2en", "order", "en2pl", "listen"];
ADD("s4", [
{ id: "x4-pastmix", t: "Past Simple: powtórka", d: "Regularne, nieregularne, pytania, przeczenia.", k: "f", i: `
Yesterday I {went} to the cinema.|Wczoraj poszedłem do kina.|go,gone
We {didn't} see the film.|Nie widzieliśmy tego filmu.|don't,wasn't
{Did} you like the concert?|Podobał ci się koncert?|Do,Were
She {bought} a new dress last week.|W zeszłym tygodniu kupiła nową sukienkę.|buyed,buys
They {came} home late.|Wrócili do domu późno.|come,comed
I {saw} Tom at the station.|Widziałem Toma na dworcu.|seen,see
What {did} you do at the weekend?|Co robiłeś w weekend?|do,were
He didn't {call} me.|Nie zadzwonił do mnie.|called,calls
We {had} a great time.|Świetnie się bawiliśmy.|have,haved
I {lost} my keys yesterday.|Wczoraj zgubiłem klucze.|losed,lose
Where {did} you go on holiday?|Dokąd pojechałeś na wakacje?|were,do
She {wrote} a letter to her grandma.|Napisała list do babci.|writed,written
My parents {met} in 1985.|Moi rodzice poznali się w 1985 roku.|meet,meeted
The film {began} at eight.|Film zaczął się o ósmej.|begun,begin
I {didn't} go to work on Monday.|W poniedziałek nie poszedłem do pracy.|wasn't,don't
{Did} she pass the exam?|Czy zdała egzamin?|Was,Does
We {drove} to the seaside.|Pojechaliśmy samochodem nad morze.|drived,drive
He {forgot} my birthday.|Zapomniał o moich urodzinach.|forgetted,forget
It {cost} a lot of money.|To kosztowało dużo pieniędzy.|costed,costs
How long {did} you stay in London?|Jak długo byłeś w Londynie?|were,have
`},
{ id: "x4-sent-past", t: "Zdania: mój weekend", d: "Opowiadamy, co się wydarzyło.", k: "o", ex: SENT, i: `
I went to my parents' house.|Pojechałem do domu rodziców.
We had a barbecue in the garden.|Zrobiliśmy grilla w ogrodzie.
It was sunny and warm.|Było słonecznie i ciepło.
I didn't do anything special.|Nie robiłem nic specjalnego.
We watched a film at home.|Obejrzeliśmy film w domu.
She cleaned the whole flat.|Posprzątała całe mieszkanie.
I met an old friend in town.|Spotkałem w mieście starego przyjaciela.
We went for a long walk.|Poszliśmy na długi spacer.
My son played football on Saturday.|Mój syn grał w piłkę w sobotę.|On Saturday my son played football.
I slept until ten o'clock.|Spałem do dziesiątej.
Did you have a nice weekend?|Miałeś miły weekend?
What did you do on Sunday?|Co robiłeś w niedzielę?
We visited a museum in Kraków.|Zwiedziliśmy muzeum w Krakowie.
It rained all day on Sunday.|W niedzielę cały dzień padało.
I was very tired after the party.|Byłem bardzo zmęczony po imprezie.
They stayed at home and read books.|Zostali w domu i czytali książki.
We ate dinner in a new restaurant.|Zjedliśmy obiad w nowej restauracji.
I bought a present for my sister.|Kupiłem prezent dla siostry.
The weekend was too short.|Weekend był za krótki.
Where did you go last night?|Gdzie byłeś wczoraj wieczorem?
`},
{ id: "x4-pastcont", t: "Past Continuous", d: "Co się działo, kiedy… (was / were + -ing).", k: "f", i: `
I {was watching} TV when the phone rang.|Oglądałem telewizję, kiedy zadzwonił telefon.|watched,am watching|Czynność w toku (was/were + -ing) przerwana krótką czynnością (Past Simple).
When I arrived, they {were having} dinner.|Kiedy przyjechałem, jedli kolację.|had,have
She {was sleeping} at midnight.|O północy spała.|slept,is sleeping
What {were} you doing at 8 o'clock?|Co robiłeś o ósmej?|was,did
It {was raining} when we left.|Padało, kiedy wychodziliśmy.|rained,is raining
While I was cooking, he {was reading}.|Kiedy gotowałem, on czytał.|read,is reading
I {met} Kate while I was walking in the park.|Spotkałem Kate, kiedy spacerowałem po parku.|was meeting,meet
He {fell} while he was running.|Przewrócił się, kiedy biegł.|was falling,falls
We {weren't listening} to the teacher.|Nie słuchaliśmy nauczyciela.|didn't listening,wasn't listening
{Were} they playing football?|Czy oni grali w piłkę?|Was,Did
The sun {was shining} and the birds were singing.|Świeciło słońce i śpiewały ptaki.|shone,is shining
I {was driving} home when I saw the accident.|Jechałem do domu, kiedy zobaczyłem wypadek.|drove,am driving
When the teacher came in, the students {stopped} talking.|Kiedy weszła nauczycielka, uczniowie przestali rozmawiać.|were stopping,stop
She {was talking} on the phone all evening.|Rozmawiała przez telefon cały wieczór.|talked to,is talking
Somebody {knocked} on the door while I was having a bath.|Ktoś zapukał do drzwi, kiedy brałem kąpiel.|was knocking,knocks
What {was} she wearing?|W co była ubrana?|were,did
I {wasn't feeling} well, so I stayed at home.|Nie czułem się dobrze, więc zostałem w domu.|didn't feeling,wasn't feel
They {were waiting} for us at the airport.|Czekali na nas na lotnisku.|waited for,was waiting
I {cut} my finger while I was making a salad.|Skaleczyłem się w palec, kiedy robiłem sałatkę.|was cutting,cutted
It was a beautiful day. People {were walking} in the park.|Był piękny dzień. Ludzie spacerowali po parku.|walked to,was walking
`},
{ id: "x4-sent-plans", t: "Zdania: plany na przyszłość", d: "will, going to i ustalone plany.", k: "o", ex: SENT, i: `
I am going to learn Spanish.|Zamierzam uczyć się hiszpańskiego.
We are going to visit Italy this summer.|Tego lata zamierzamy odwiedzić Włochy.|This summer we are going to visit Italy.
What are you going to do tomorrow?|Co zamierzasz robić jutro?
I will call you in the evening.|Zadzwonię do ciebie wieczorem.
She is going to have a baby.|Ona będzie miała dziecko.
We are meeting at the station at six.|Spotykamy się na dworcu o szóstej.
I think he will win.|Myślę, że on wygra.
I won't tell anybody.|Nikomu nie powiem.
They are getting married in June.|Biorą ślub w czerwcu.
Will you come to my party?|Przyjdziesz na moją imprezę?
I'm not going to buy a new car.|Nie zamierzam kupować nowego samochodu.
It will be sunny tomorrow.|Jutro będzie słonecznie.|Tomorrow it will be sunny.
Next year I want to find a new job.|W przyszłym roku chcę znaleźć nową pracę.|I want to find a new job next year.
We are going to paint the kitchen.|Zamierzamy pomalować kuchnię.
I'll help you with your bags.|Pomogę ci z torbami.
My brother is starting university in October.|Mój brat zaczyna studia w październiku.
Are you going to sell your flat?|Czy zamierzasz sprzedać mieszkanie?
Shall we go for a coffee?|Może pójdziemy na kawę?
I hope it won't rain.|Mam nadzieję, że nie będzie padać.
We'll see.|Zobaczymy.
`},
{ id: "x4-future2", t: "Przyszłość: wszystkie formy", d: "will, going to, Present Continuous i Simple.", k: "f", i: `
I'm tired. I think I {will} go to bed.|Jestem zmęczony. Chyba pójdę spać.|am going,going to
We {are going to} buy a house next year.|W przyszłym roku zamierzamy kupić dom.|will to,are go to
I {am meeting} Tom at 6 tonight.|Dziś o 18 spotykam się z Tomem.|meet,will meeting|Ustalone spotkanie → Present Continuous.
Look at the sky! It {is going to} snow.|Spójrz na niebo! Będzie padać śnieg.|will to,goes to
{Will} you help me with my homework?|Pomożesz mi w lekcjach?|Are,Do
The train {leaves} at 7:30 tomorrow.|Pociąg odjeżdża jutro o 7:30.|will leaving,is leave|Rozkłady jazdy → Present Simple.
I promise I {won't} be late.|Obiecuję, że się nie spóźnię.|don't,am not going
What {are} you doing this weekend?|Co robisz w ten weekend?|do,will
She {is having} a party on Saturday.|Ona robi imprezę w sobotę.|has,will having
I don't think it {will} rain.|Nie sądzę, żeby padało.|is,going to
They {aren't going to} come.|Oni nie zamierzają przyjść.|won't to,don't going to
The phone is ringing. – I'll {get} it!|Telefon dzwoni. – Odbiorę!|getting,to get
In 2050 people {will} live on Mars.|W 2050 roku ludzie będą mieszkać na Marsie.|are,going
Are you going to {study} medicine?|Czy zamierzasz studiować medycynę?|studying,studies
We {are flying} to Rome on Friday.|W piątek lecimy do Rzymu.|fly,will flying
Careful! You {are going to} fall!|Uważaj! Zaraz spadniesz!|will to,go to
I'll call you when I {get} home.|Zadzwonię, kiedy dotrę do domu.|will get,am getting|Po when (o przyszłości) używamy Present Simple.
{Shall} I open the window?|Czy mam otworzyć okno?|Will,Do|Shall I…? = Czy mam…? (propozycja).
I'm sure you {will} pass the exam.|Jestem pewien, że zdasz egzamin.|are,going
He {is starting} a new job next month.|W przyszłym miesiącu zaczyna nową pracę.|starts to,will starting
`},
{ id: "x4-sent-compare", t: "Zdania: porównania", d: "Większy, najlepszy, tak samo jak…", k: "o", ex: SENT, i: `
My sister is younger than me.|Moja siostra jest młodsza ode mnie.
This is the best day of my life.|To najlepszy dzień w moim życiu.
Trains are faster than buses.|Pociągi są szybsze od autobusów.
English is easier than Polish.|Angielski jest łatwiejszy niż polski.
Who is the oldest person in your family?|Kto jest najstarszą osobą w twojej rodzinie?
This hotel is more expensive than that one.|Ten hotel jest droższy niż tamten.
Today is colder than yesterday.|Dziś jest zimniej niż wczoraj.
She is as tall as her mother.|Ona jest tak wysoka jak jej mama.
It isn't as hot as last summer.|Nie jest tak gorąco jak zeszłego lata.
My new phone is much better.|Mój nowy telefon jest dużo lepszy.
This is the most beautiful place in Poland.|To najpiękniejsze miejsce w Polsce.
The second test was more difficult.|Drugi test był trudniejszy.
Your English is better than mine.|Twój angielski jest lepszy niż mój.
Which city is bigger?|Które miasto jest większe?
He is the funniest person I know.|On jest najzabawniejszą osobą, jaką znam.
Life in the country is quieter.|Życie na wsi jest spokojniejsze.
The weather is getting worse.|Pogoda się pogarsza.
Mount Everest is the highest mountain in the world.|Mount Everest to najwyższa góra na świecie.
Is coffee more popular than tea in Poland?|Czy w Polsce kawa jest bardziej popularna niż herbata?
This room is too small for us.|Ten pokój jest dla nas za mały.
`},
{ id: "x4-comp2", t: "too, enough, as … as", d: "Za dużo, wystarczająco, tak samo jak.", k: "f", i: `
My brother is {taller} than me.|Mój brat jest wyższy ode mnie.|tall,tallest
This book is {as interesting as} the film.|Ta książka jest tak samo ciekawa jak film.|as interesting than,more interesting as
It's {too} cold to swim.|Jest za zimno, żeby pływać.|enough,very
He isn't old {enough} to drive.|On nie jest wystarczająco dorosły, żeby prowadzić.|too,so|Enough stoi PO przymiotniku: old enough.
This is {the most expensive} hotel in town.|To najdroższy hotel w mieście.|the expensivest,more expensive
Your car is {faster} than mine.|Twój samochód jest szybszy niż mój.|more fast,fastest
Today is {not as warm as} yesterday.|Dziś nie jest tak ciepło jak wczoraj.|not as warm than,not warmer as
She is {much} older than her husband.|Ona jest dużo starsza od męża.|very,more|Wzmocnienie stopnia wyższego: much / a lot / far older.
Which is {the longest} river in Poland?|Która rzeka jest najdłuższa w Polsce?|the longer,longest of
I'm {better} at maths than at English.|Jestem lepszy z matematyki niż z angielskiego.|gooder,best
The exam was {easier} than I expected.|Egzamin był łatwiejszy, niż się spodziewałem.|more easy,easyer
This is {the worst} day of my life!|To najgorszy dzień w moim życiu!|the baddest,worse
London is {bigger} than Warsaw.|Londyn jest większy od Warszawy.|biger,more big
These shoes are {too} small for me.|Te buty są dla mnie za małe.|enough,to
Is the water warm {enough} for swimming?|Czy woda jest wystarczająco ciepła do pływania?|too,very
He drives {more carefully} than his wife.|On jeździ ostrożniej niż jego żona.|carefuller,more careful|Przysłówki z -ly: more carefully, more slowly.
She is {the youngest} in our family.|Ona jest najmłodsza w naszej rodzinie.|the younger,youngest of
It's getting {colder and colder}.|Robi się coraz zimniej.|more and more cold,colder and cold
The {more} you practise, the better you get.|Im więcej ćwiczysz, tym lepiej ci idzie.|most,much
My flat is {smaller} than yours.|Moje mieszkanie jest mniejsze od twojego.|more small,smallest
`},
{ id: "x4-sent-travel", t: "Zdania: wakacje w przeszłości", d: "Opowiedz o podróży.", k: "o", ex: SENT, i: `
We flew to London last year.|W zeszłym roku polecieliśmy do Londynu.|Last year we flew to London.
Our flight was delayed.|Nasz lot był opóźniony.
The hotel was near the beach.|Hotel był blisko plaży.
We stayed there for a week.|Byliśmy tam przez tydzień.
I lost my passport at the airport.|Zgubiłem paszport na lotnisku.
We rented a car.|Wynajęliśmy samochód.
The food was delicious.|Jedzenie było pyszne.
We took a lot of photos.|Zrobiliśmy mnóstwo zdjęć.
I bought some souvenirs for my friends.|Kupiłem pamiątki dla przyjaciół.
The weather was terrible.|Pogoda była okropna.
Did you enjoy your holiday?|Podobały ci się wakacje?
Where did you stay?|Gdzie się zatrzymałeś?
We went sightseeing in the old town.|Zwiedzaliśmy stare miasto.
The beach was very crowded.|Plaża była bardzo zatłoczona.
I swam in the sea every day.|Codziennie pływałem w morzu.
We missed the last train.|Spóźniliśmy się na ostatni pociąg.
How did you get there?|Jak się tam dostaliście?
We went by car.|Pojechaliśmy samochodem.
The journey took ten hours.|Podróż trwała dziesięć godzin.
We came back on Sunday.|Wróciliśmy w niedzielę.
`},
{ id: "x4-countable", t: "a few, a little, much, many", d: "Policzalne i niepoliczalne.", k: "f", i: `
Can I have {some} water, please?|Czy mogę prosić trochę wody?|a,many
There aren't {many} people here.|Nie ma tu wielu ludzi.|much,a lot
I have {a few} friends in Spain.|Mam kilku przyjaciół w Hiszpanii.|a little,much|A few – kilka (policzalne). A little – trochę (niepoliczalne).
There's {a little} milk in the fridge.|W lodówce jest trochę mleka.|a few,many
How {much} sugar do you want?|Ile cukru chcesz?|many,lot
How {many} eggs do we need?|Ile jajek potrzebujemy?|much,lot
I don't have {any} money.|Nie mam pieniędzy.|some,no
I'd like {an} orange juice.|Poproszę sok pomarańczowy.|a,some
She has {a lot of} books.|Ona ma dużo książek.|much,lots
There is {no} bread left.|Nie został już chleb.|any,not
We need {some} eggs.|Potrzebujemy jajek.|any,a
Is there {any} cheese?|Czy jest ser?|some,many
I've got {very little} time.|Mam bardzo mało czasu.|very few,very much
{Few} people know about it.|Niewiele osób o tym wie.|Little,Much
Can you give me {some} advice?|Możesz mi coś doradzić?|an,many|Advice jest niepoliczalne: some advice, a piece of advice.
The news {is} good.|Wiadomości są dobre.|are,were|News jest niepoliczalne – czasownik w liczbie pojedynczej.
I need {some} information.|Potrzebuję informacji.|an,many
How much {luggage} do you have?|Ile masz bagażu?|luggages,baggages
There are {too many} cars here.|Jest tu za dużo samochodów.|too much,to many
Would you like {some} more coffee?|Napijesz się jeszcze kawy?|any,many
`},
{ id: "x4-sent-advice", t: "Zdania: rady i obowiązki", d: "should, must, have to, can, could.", k: "o", ex: SENT, i: `
You should drink more water.|Powinieneś pić więcej wody.
You shouldn't work so hard.|Nie powinieneś tak ciężko pracować.
Why don't you ask your teacher?|Może zapytasz nauczyciela?
I think you should go to bed.|Myślę, że powinieneś iść spać.
You must be careful.|Musisz uważać.
You don't have to wear a tie.|Nie musisz nosić krawata.
We have to leave now.|Musimy już wychodzić.
You mustn't park here.|Nie wolno tu parkować.
What should I do?|Co powinienem zrobić?
If I were you, I would wait.|Na twoim miejscu bym poczekał.|I would wait if I were you.
Let's ask somebody for help.|Poprośmy kogoś o pomoc.
Do I have to pay now?|Czy muszę płacić teraz?
You can borrow my bike.|Możesz pożyczyć mój rower.
Could you open the window, please?|Czy mógłbyś otworzyć okno?
Can I use your phone?|Czy mogę skorzystać z twojego telefonu?
May I come in?|Czy mogę wejść?
You'd better hurry.|Lepiej się pospiesz.
Try to relax.|Spróbuj się zrelaksować.
Don't worry about it.|Nie martw się tym.
It's a good idea to book a table.|Dobrze jest zarezerwować stolik.
`}
]);
})();
