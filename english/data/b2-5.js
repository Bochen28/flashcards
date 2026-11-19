/* Etap 7 – gramatyka i zdania B2. */
(function () {
var SENT = ["order", "pl2en", "order", "en2pl", "listen"];
ADD("s7", [
{ id: "x7-passive2", t: "Strona bierna 2 i have sth done", d: "Usługi, „mówi się, że…”, being done.", k: "f", i: `
I {had my hair cut} yesterday.|Wczoraj obciąłem włosy (u fryzjera).|cut my hair,had cut my hair|Have something done = ktoś robi coś dla nas (usługa).
We're {having} our kitchen painted.|Malują nam kuchnię.|making,doing
She got her car {repaired}.|Dała samochód do naprawy.|repair,repairing
You should {have} your eyes tested.|Powinieneś zbadać wzrok.|make,get to
It {is said} that he is very rich.|Mówi się, że on jest bardzo bogaty.|says,said
He {is believed} to be in Spain.|Uważa się, że jest w Hiszpanii.|believes,is believing
The bridge {is being built} at the moment.|Most jest właśnie budowany.|is building,is been built
The work {will have been finished} by Friday.|Praca zostanie skończona do piątku.|will have finished,will be finishing
I don't like {being told} what to do.|Nie lubię, gdy ktoś mi mówi, co mam robić.|telling,be told
The suspect {was seen} leaving the building.|Widziano podejrzanego wychodzącego z budynku.|saw,was seeing
The house {needs painting}.|Dom wymaga pomalowania.|needs paint,needs to painting
The new hospital {is going to be opened} next year.|Nowy szpital zostanie otwarty w przyszłym roku.|is going to open,is opened
My wallet {has been stolen}!|Ukradziono mi portfel!|has stolen,was stealing
She {was given} a prize.|Dostała nagrodę.|gave,was giving
Mistakes {must be corrected}.|Błędy muszą zostać poprawione.|must correct,must corrected
I had my phone {stolen} on the bus.|Ukradziono mi telefon w autobusie.|steal,stealing
It {is thought} that the fire started in the kitchen.|Uważa się, że pożar zaczął się w kuchni.|thinks,thought
He hates {being photographed}.|Nienawidzi, gdy się go fotografuje.|photographing,be photographed
The results {were being checked} when I arrived.|Kiedy przyszedłem, wyniki były właśnie sprawdzane.|were checking,was being check
The documents {should have been sent} yesterday.|Dokumenty powinny były zostać wysłane wczoraj.|should have sent,should be sent
`},
{ id: "x7-sent-formal", t: "Zdania: list formalny", d: "Reklamacja, podanie o pracę, uprzejme prośby.", k: "o", ex: SENT, i: `
I am writing to complain about my order.|Piszę, aby złożyć reklamację dotyczącą mojego zamówienia.
I am writing to apply for the position of manager.|Piszę, aby ubiegać się o stanowisko kierownika.
I would be grateful if you could reply soon.|Byłbym wdzięczny za szybką odpowiedź.
Please find my CV attached.|W załączeniu przesyłam moje CV.
I look forward to hearing from you soon.|Czekam na Państwa odpowiedź.
Thank you for your prompt reply.|Dziękuję za szybką odpowiedź.
Unfortunately, the product arrived damaged.|Niestety produkt dotarł uszkodzony.
I would like to request a refund.|Chciałbym prosić o zwrot pieniędzy.
Could you please confirm the date of the meeting?|Czy mogą Państwo potwierdzić datę spotkania?
I apologise for the delay.|Przepraszam za opóźnienie.
Further to our phone call, I am sending the documents.|W nawiązaniu do naszej rozmowy telefonicznej przesyłam dokumenty.
Do not hesitate to contact me.|Proszę się ze mną kontaktować bez wahania.
I have five years of experience in marketing.|Mam pięć lat doświadczenia w marketingu.
I am available for an interview at any time.|Mogę przyjść na rozmowę w dowolnym terminie.
We regret to inform you that the event has been cancelled.|Z przykrością informujemy, że wydarzenie zostało odwołane.
Your order will be delivered within five days.|Twoje zamówienie zostanie dostarczone w ciągu pięciu dni.
I am interested in the course you advertised.|Interesuje mnie kurs, który Państwo reklamowali.
I would appreciate your help.|Będę wdzięczny za pomoc.
Please let me know if this is convenient for you.|Proszę dać znać, czy to Państwu odpowiada.
Yours sincerely, Anna Nowak|Z poważaniem, Anna Nowak
`},
{ id: "x7-modalpast", t: "should have, needn't have…", d: "Czasowniki modalne o przeszłości.", k: "f", i: `
You {should have} told me earlier.|Powinieneś był mi powiedzieć wcześniej.|should,must have|Should have + III forma = krytyka lub żal dotyczący przeszłości.
I {shouldn't have} eaten so much.|Nie powinienem był tyle jeść.|mustn't have,shouldn't
We {needn't have} hurried – the train was late.|Niepotrzebnie się spieszyliśmy – pociąg był spóźniony.|mustn't have,shouldn't|Needn't have = zrobiliśmy coś niepotrzebnie.
We {didn't need to} take a taxi, so we walked.|Nie musieliśmy brać taksówki, więc poszliśmy pieszo.|needn't have,mustn't
You {could have} hurt yourself!|Mogłeś zrobić sobie krzywdę!|can have,must
He {might have} been stuck in traffic.|Może utknął w korku.|might,must
They {would have} come, but they were ill.|Przyszliby, ale byli chorzy.|will have,would
I {could} swim when I was five.|Umiałem pływać, gdy miałem pięć lat.|could have,was able
Fortunately, we {were able to} escape.|Na szczęście udało nam się uciec.|could have,could to|Jednorazowe osiągnięcie w przeszłości → was / were able to.
You {ought to} apologise.|Powinieneś przeprosić.|ought,should to
You {had better} hurry, or you'll miss the bus.|Lepiej się pospiesz, bo spóźnisz się na autobus.|would better,had to better
She {must have} left already. Her coat is gone.|Musiała już wyjść. Nie ma jej płaszcza.|should have,can have
I {wouldn't have} done that if I were you.|Na twoim miejscu nie zrobiłbym tego.|won't have,didn't
He {can't have} written this. He doesn't speak French.|On nie mógł tego napisać. Nie mówi po francusku.|mustn't have,shouldn't have
We {were supposed to} meet at six.|Mieliśmy się spotkać o szóstej.|supposed,were suppose to|Be supposed to = mieć (coś zrobić według planu).
You {don't need to} bring anything.|Nie musisz niczego przynosić.|mustn't,needn't to
{Shall} we go?|Idziemy?|Will,Should to
I {would rather} stay in tonight.|Wolałbym dziś zostać w domu.|had rather,would better
She {should have arrived} by now.|Powinna już dotrzeć.|should arrive,must arrived
You {mustn't} tell anyone. It's a secret.|Nie wolno ci nikomu mówić. To tajemnica.|don't have to,needn't
`},
{ id: "x7-sent-future", t: "Zdania: będę robić, zrobię do…", d: "Future Continuous i Future Perfect.", k: "o", ex: SENT, i: `
This time next week I will be flying to Rome.|W przyszłym tygodniu o tej porze będę lecieć do Rzymu.
By the end of the year, I will have saved enough money.|Do końca roku zaoszczędzę wystarczająco dużo pieniędzy.|I will have saved enough money by the end of the year.
Will you be using your laptop this evening?|Czy będziesz dziś wieczorem korzystać z laptopa?
They will have finished the work by Monday.|Skończą pracę do poniedziałku.|By Monday they will have finished the work.
At ten o'clock I will be sitting in a meeting.|O dziesiątej będę siedzieć na zebraniu.|I will be sitting in a meeting at ten o'clock.
By the time you read this, I will have left.|Zanim to przeczytasz, już mnie nie będzie.
In a few years, robots will be doing most jobs.|Za kilka lat roboty będą wykonywać większość prac.
I won't have finished by tomorrow.|Nie skończę do jutra.
We will have been married for twenty years next month.|W przyszłym miesiącu minie dwadzieścia lat naszego małżeństwa.
Don't phone me at eight because I will be driving.|Nie dzwoń do mnie o ósmej, bo będę prowadzić.
She will be waiting for you at the airport.|Ona będzie na ciebie czekać na lotnisku.
How long will you have lived here by then?|Jak długo będziesz tu wtedy mieszkać?
By 2050, the climate will have changed dramatically.|Do 2050 roku klimat drastycznie się zmieni.
I'll be thinking of you.|Będę o tobie myśleć.
The concert will have ended by midnight.|Koncert skończy się przed północą.
What will you be doing this time tomorrow?|Co będziesz robić jutro o tej porze?
We will be staying at a hotel near the beach.|Będziemy mieszkać w hotelu blisko plaży.
By the time we get there, the shop will have closed.|Zanim tam dotrzemy, sklep będzie zamknięty.
I hope you will have recovered by the weekend.|Mam nadzieję, że do weekendu wyzdrowiejesz.
Next year I will be studying abroad.|W przyszłym roku będę studiować za granicą.|I will be studying abroad next year.
`},
{ id: "x7-futureadv", t: "Future Continuous i Perfect", d: "Będę robić / zrobię do jakiegoś momentu.", k: "f", i: `
This time tomorrow I {will be lying} on the beach.|Jutro o tej porze będę leżeć na plaży.|will lie,am lying|Future Continuous: czynność w toku w danym momencie w przyszłości.
By next year, I {will have finished} university.|Do przyszłego roku skończę studia.|will finish,will be finishing|Future Perfect: coś będzie zakończone przed danym momentem.
Don't call at 8 – we {will be having} dinner.|Nie dzwoń o 8 – będziemy jeść kolację.|will have,have
By the time you arrive, I {will have cooked} dinner.|Zanim przyjedziesz, ugotuję obiad.|will cook,cook
{Will} you be using the car tonight?|Czy będziesz dziś wieczorem używać samochodu?|Are,Do
She {will have been} married for ten years in June.|W czerwcu minie dziesięć lat jej małżeństwa.|will be,has been
In 2040 we {will be living} on another planet.|W 2040 roku będziemy mieszkać na innej planecie.|live,are living
I {won't have finished} the report by five.|Nie skończę raportu do piątej.|won't finish,don't finish
Will you {have finished} by tomorrow?|Skończysz do jutra?|be finished,finishing
At midnight I {will be sleeping}.|O północy będę spać.|will sleep,am sleeping
They {will have left} by the time we get there.|Zanim tam dotrzemy, oni już wyjdą.|will leave,leave
Next week I {will be working} in Berlin.|W przyszłym tygodniu będę pracować w Berlinie.|work,will have worked
By 2030, the population {will have grown} a lot.|Do 2030 roku populacja bardzo się zwiększy.|will grow,grows
I'll be waiting {for} you at the station.|Będę na ciebie czekać na dworcu.|on,to
The film {will have started} before we get there.|Film zacznie się, zanim tam dotrzemy.|will start,starts
What {will} you be doing at 10 tomorrow?|Co będziesz robić jutro o 10?|are,do
He'll {have saved} enough money by the summer.|Do lata zaoszczędzi wystarczająco dużo pieniędzy.|saved,be saving
The plane {will be landing} in a few minutes.|Za kilka minut samolot będzie lądował.|lands,will have landing
By the end of the day, I {will have written} ten emails.|Do końca dnia napiszę dziesięć e-maili.|will write,am writing
I'm sure you {will be feeling} better soon.|Jestem pewien, że wkrótce poczujesz się lepiej.|are feeling,feel
`},
{ id: "x7-sent-contrast", t: "Zdania: kontrast", d: "although, despite, however, whereas.", k: "o", ex: SENT, i: `
Although it was cold, we went swimming.|Chociaż było zimno, poszliśmy popływać.|We went swimming although it was cold.
Despite the rain, the match continued.|Mimo deszczu mecz trwał dalej.|The match continued despite the rain.
She failed the test even though she studied hard.|Oblała test, mimo że ciężko się uczyła.
In spite of his age, he is very active.|Mimo swojego wieku jest bardzo aktywny.|He is very active in spite of his age.
The flat is small. However, it is very comfortable.|Mieszkanie jest małe. Jednak jest bardzo wygodne.
I prefer the sea, whereas my husband likes the mountains.|Ja wolę morze, podczas gdy mój mąż woli góry.
Even if you don't like him, you should be polite.|Nawet jeśli go nie lubisz, powinieneś być uprzejmy.
Despite feeling tired, she finished the report.|Mimo zmęczenia skończyła raport.
While some people enjoy it, others find it boring.|Chociaż niektórym to się podoba, inni uważają to za nudne.
The job is well paid, but it is very stressful.|Praca jest dobrze płatna, ale bardzo stresująca.
Unlike his sister, he hates sport.|W przeciwieństwie do siostry nienawidzi sportu.
Nevertheless, we decided to go.|Mimo to postanowiliśmy pojechać.
On the one hand, cities offer many opportunities.|Z jednej strony miasta oferują wiele możliwości.
On the other hand, life there is expensive.|Z drugiej strony życie tam jest drogie.
Although he apologised, she was still angry.|Chociaż przeprosił, wciąż była zła.
It was a good idea in theory but not in practice.|W teorii był to dobry pomysł, ale nie w praktyce.
Despite the fact that he was ill, he came to work.|Mimo że był chory, przyszedł do pracy.
The car is old. Even so, it works perfectly.|Samochód jest stary. Mimo to działa doskonale.
Some love the city, while others prefer the countryside.|Jedni kochają miasto, a inni wolą wieś.
Rich as he is, he isn't happy.|Choć jest bogaty, nie jest szczęśliwy.
`},
{ id: "x7-contrast", t: "although, despite, however", d: "Łączniki kontrastu i ich składnia.", k: "f", i: `
{Although} it was raining, we went for a walk.|Chociaż padało, poszliśmy na spacer.|Despite,However|Although + zdanie (podmiot + czasownik).
{Despite} the rain, we went for a walk.|Mimo deszczu poszliśmy na spacer.|Although,Even though|Despite / in spite of + rzeczownik lub forma -ing.
In spite {of} being tired, she kept working.|Mimo zmęczenia pracowała dalej.|from,that
It was expensive. {However}, we bought it.|Było drogie. Jednak to kupiliśmy.|Although,Despite
{Even though} he's rich, he isn't happy.|Mimo że jest bogaty, nie jest szczęśliwy.|Despite,In spite
I like tea, {whereas} my wife prefers coffee.|Ja lubię herbatę, podczas gdy moja żona woli kawę.|despite,however
{Despite} feeling ill, he went to work.|Mimo że źle się czuł, poszedł do pracy.|Although,Even
She passed the exam {even though} she didn't study.|Zdała egzamin, chociaż się nie uczyła.|despite,in spite
The hotel was nice. The food, {however}, was terrible.|Hotel był ładny. Jedzenie natomiast było okropne.|although,despite
{While} I understand your point, I disagree.|Choć rozumiem twój punkt widzenia, nie zgadzam się.|Despite,However
Despite {the fact} that it was late, we stayed.|Mimo że było późno, zostaliśmy.|of,that
{Nevertheless}, we decided to continue.|Mimo to postanowiliśmy kontynuować.|Although,Despite
He is very clever, {but} he is lazy.|Jest bardzo bystry, ale leniwy.|despite,although of
{Although} she is young, she is very wise.|Choć jest młoda, jest bardzo mądra.|Despite,In spite of
In spite of {the traffic}, we arrived on time.|Mimo korków dotarliśmy na czas.|the traffic was heavy,there was traffic
I'll go, {even if} it rains.|Pójdę, nawet jeśli będzie padać.|even though,despite|Even if = nawet jeśli (warunek).
{On the other hand}, it's very expensive.|Z drugiej strony to bardzo drogie.|On other hand,In the other hand
Some people love it; {others} hate it.|Niektórzy to uwielbiają, inni tego nienawidzą.|another,other
She went out {despite} the storm.|Wyszła mimo burzy.|although,however
{Unlike} his brother, he is very quiet.|W przeciwieństwie do brata jest bardzo cichy.|Despite,Whereas
`},
{ id: "x7-sent-causative", t: "Zdania: usługi i strona bierna", d: "I had my car washed. It is said that…", k: "o", ex: SENT, i: `
I had my car washed yesterday.|Wczoraj umyłem samochód w myjni.|Yesterday I had my car washed.
She is having her nails done.|Robi sobie paznokcie u kosmetyczki.
We need to have the roof repaired.|Musimy oddać dach do naprawy.
Where do you get your hair cut?|Gdzie się strzyżesz?
He had his wallet stolen on holiday.|Na wakacjach ukradziono mu portfel.
I'm going to have my eyes tested.|Zamierzam zbadać wzrok.
They had a new kitchen fitted.|Zamontowano im nową kuchnię.
You should get that tooth checked.|Powinieneś dać ten ząb do sprawdzenia.
It is said that this house is haunted.|Mówi się, że w tym domu straszy.
He is believed to be the richest man in town.|Uważa się, że jest najbogatszym człowiekiem w mieście.
The new road is being built now.|Nowa droga jest teraz budowana.
The decision has already been made.|Decyzja została już podjęta.
The children are being looked after by their grandma.|Dziećmi opiekuje się babcia.
This problem must be solved quickly.|Ten problem musi zostać szybko rozwiązany.
The prize will be presented by the mayor.|Nagrodę wręczy burmistrz.
I don't like being interrupted.|Nie lubię, gdy ktoś mi przerywa.
The letter should have been sent last week.|List powinien był zostać wysłany w zeszłym tygodniu.
My bike needs repairing.|Mój rower wymaga naprawy.
Our house was broken into last night.|Wczoraj w nocy włamano się do naszego domu.
The meeting has been put off until Friday.|Spotkanie zostało przełożone na piątek.
`},
{ id: "x7-wordform", t: "Słowotwórstwo", d: "Rzeczownik, przymiotnik czy przysłówek?", k: "f", i: `
We need to find a {solution} to this problem.|Musimy znaleźć rozwiązanie tego problemu.|solve,solving
She is a very {creative} person.|Ona jest bardzo kreatywną osobą.|create,creation
His {behaviour} was unacceptable.|Jego zachowanie było nie do przyjęcia.|behave,behaved
The film was really {disappointing}.|Film był naprawdę rozczarowujący.|disappointed,disappointment|-ing opisuje rzecz (film rozczarowuje), -ed opisuje uczucie osoby.
I was {disappointed} with the film.|Byłem rozczarowany filmem.|disappointing,disappoint
Your advice was very {helpful}.|Twoja rada była bardzo pomocna.|helpless,helping
There's a {possibility} that it will rain.|Jest możliwość, że będzie padać.|possible,possibly
He drives very {carefully}.|On jeździ bardzo ostrożnie.|careful,care
The {government} announced new taxes.|Rząd ogłosił nowe podatki.|govern,governing
This is a very {useful} tool.|To bardzo przydatne narzędzie.|useless,use
The {length} of the bridge is 300 metres.|Długość mostu wynosi 300 metrów.|long,lengthy
I need more {information}.|Potrzebuję więcej informacji.|inform,informative
It's {impossible} to finish this today.|Nie da się tego dziś skończyć.|unpossible,impossibly
He gave a very {impressive} speech.|Wygłosił bardzo imponujące przemówienie.|impress,impression
Our {friendship} is very important to me.|Nasza przyjaźń jest dla mnie bardzo ważna.|friendly,friendness
The {width} of the road is ten metres.|Szerokość drogi wynosi dziesięć metrów.|wide,widely
She answered {politely}.|Odpowiedziała uprzejmie.|polite,politeness
The {weight} of the parcel is 2 kg.|Waga paczki wynosi 2 kg.|weigh,heavy
There was a lot of {excitement} before the match.|Przed meczem panowało duże podekscytowanie.|exciting,excited
His {ability} to learn languages is amazing.|Jego zdolność do nauki języków jest niesamowita.|able,ably
`},
{ id: "x7-sent-debate", t: "Zdania: argumentacja", d: "Wypracowanie, dyskusja, podsumowanie.", k: "o", ex: SENT, i: `
There is no doubt that technology affects our lives.|Nie ma wątpliwości, że technologia wpływa na nasze życie.
It is often argued that money cannot buy happiness.|Często twierdzi się, że pieniądze nie dają szczęścia.
Many experts believe that this is a serious problem.|Wielu ekspertów uważa, że to poważny problem.
First of all, we need to consider the costs.|Przede wszystkim musimy wziąć pod uwagę koszty.
Another advantage is that it saves time.|Kolejną zaletą jest to, że oszczędza czas.
The main disadvantage is the price.|Główną wadą jest cena.
In conclusion, I believe the plan will work.|Podsumowując, uważam, że plan się sprawdzi.
It is worth mentioning that prices have risen.|Warto wspomnieć, że ceny wzrosły.
From my point of view, it is a waste of money.|Z mojego punktu widzenia to strata pieniędzy.
Not only is it cheap, but it is also fast.|Jest nie tylko tanie, ale też szybkie.
This leads to serious health problems.|To prowadzi do poważnych problemów zdrowotnych.
As a result, many people lost their jobs.|W rezultacie wiele osób straciło pracę.|Many people lost their jobs as a result.
On the whole, the project was a success.|Ogólnie rzecz biorąc, projekt był sukcesem.
It is hard to say who is right.|Trudno powiedzieć, kto ma rację.
The figures speak for themselves.|Liczby mówią same za siebie.
Let me give you an example.|Pozwól, że podam przykład.
I'm afraid I can't agree with you.|Obawiam się, że nie mogę się z tobą zgodzić.
That's exactly what I mean.|Właśnie to mam na myśli.
We should look at the problem from a different angle.|Powinniśmy spojrzeć na problem z innej strony.
To sum up, both options have their pros and cons.|Podsumowując, obie opcje mają swoje plusy i minusy.
`}
]);
})();
