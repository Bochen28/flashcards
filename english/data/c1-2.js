/* Etap 8 – gramatyka i zdania C1. */
(function () {
var SENT = ["order", "pl2en", "order", "en2pl", "listen"];
ADD("s8", [
{ id: "x8-inversion", t: "Inwersja", d: "Never have I… Not only did he… Had I known…", k: "f", i: `
Never {have I} seen such a mess.|Nigdy nie widziałem takiego bałaganu.|I have,I had|Po never, rarely, seldom na początku zdania stosujemy szyk pytający.
Not only {did he} lie, but he also stole money.|Nie tylko kłamał, ale też ukradł pieniądze.|he did,he
Hardly {had} we arrived when it started to rain.|Ledwie przyjechaliśmy, zaczęło padać.|have,did
No sooner had she left {than} the phone rang.|Ledwie wyszła, zadzwonił telefon.|when,then|No sooner … than; hardly / scarcely … when.
Rarely {do we} get such good weather.|Rzadko mamy tak dobrą pogodę.|we do,we
Under no circumstances {should you} open this door.|W żadnym wypadku nie otwieraj tych drzwi.|you should,you
Only then {did I} realise my mistake.|Dopiero wtedy zrozumiałem swój błąd.|I did,I
Little {did they} know what was about to happen.|Nie mieli pojęcia, co się zaraz wydarzy.|they did,they knew
Not until midnight {did she} come home.|Wróciła do domu dopiero o północy.|she did,she
Seldom {has} a film received such praise.|Rzadko który film zbiera takie pochwały.|have,did
{Had} I known, I would have helped.|Gdybym wiedział, pomógłbym.|If,Have
{Should} you need any help, call me.|Gdybyś potrzebował pomocy, zadzwoń.|If,Would|Should you… = If you should…
{Were} I in your position, I would resign.|Gdybym był na twoim miejscu, zrezygnowałbym.|Was,If
Only by working hard {can you} succeed.|Tylko ciężką pracą można odnieść sukces.|you can,you
So tired {was she} that she fell asleep at once.|Była tak zmęczona, że od razu zasnęła.|she was,she
Not once {did he} say thank you.|Ani razu nie podziękował.|he did,he
In no way {is this} acceptable.|To w żaden sposób nie jest do przyjęcia.|this is,this
Such {was} the noise that nobody could sleep.|Hałas był taki, że nikt nie mógł spać.|is,were
Scarcely had I sat down {when} the doorbell rang.|Ledwie usiadłem, zadzwonił dzwonek.|than,then
At no time {was} the public in danger.|Publiczność w żadnym momencie nie była w niebezpieczeństwie.|did,were
`},
{ id: "x8-sent-inversion", t: "Zdania: inwersja", d: "Mocne, formalne zdania z szykiem przestawnym.", k: "o", ex: SENT, i: `
Never have I seen anything like it.|Nigdy nie widziałem czegoś takiego.
Not only did she win, but she also broke the record.|Nie tylko wygrała, ale też pobiła rekord.
Hardly had we left when it started to snow.|Ledwie wyszliśmy, zaczął padać śnieg.
Under no circumstances should you sign it.|W żadnym wypadku nie powinieneś tego podpisywać.
Rarely do we see such talent.|Rzadko widzimy taki talent.
Only later did I understand what he meant.|Dopiero później zrozumiałem, co miał na myśli.
Had I known the truth, I would have acted differently.|Gdybym znał prawdę, postąpiłbym inaczej.
Should you have any questions, please contact us.|Gdyby mieli Państwo pytania, prosimy o kontakt.
Little did he know that he was being watched.|Nie miał pojęcia, że jest obserwowany.
No sooner had I arrived than the meeting began.|Ledwie przyjechałem, zaczęło się spotkanie.
Not until the next day did we hear the news.|Usłyszeliśmy tę wiadomość dopiero następnego dnia.
So beautiful was the view that we stopped the car.|Widok był tak piękny, że zatrzymaliśmy samochód.
Were it not for her, we would be lost.|Gdyby nie ona, bylibyśmy zgubieni.
Seldom have I felt so happy.|Rzadko czułem się tak szczęśliwy.
At no point did they apologise.|Ani razu nie przeprosili.
Only then did she realise the danger.|Dopiero wtedy zdała sobie sprawę z niebezpieczeństwa.
Such was his anger that he couldn't speak.|Był tak wściekły, że nie mógł mówić.
In no way am I responsible for this.|W żaden sposób nie jestem za to odpowiedzialny.
Not once did he mention his wife.|Ani razu nie wspomniał o żonie.
Scarcely had the film started when the power went off.|Ledwie zaczął się film, wyłączono prąd.
`},
{ id: "x8-cleft", t: "Zdania podkreślające", d: "What I need is… It was Tom who…", k: "f", i: `
{What} I need is a holiday.|Potrzebuję właśnie urlopu.|That,Which|What I need is… – podkreślamy, czego potrzebujemy.
It was Tom {who} broke the window.|To Tom wybił okno.|which,what
It was in 2010 {that} we met.|Poznaliśmy się właśnie w 2010 roku.|when it,which
{What} annoys me is his attitude.|Denerwuje mnie jego postawa.|That,It
All I want {is} some peace and quiet.|Chcę tylko trochę spokoju.|are,be
It's not money {that} makes people happy.|To nie pieniądze dają ludziom szczęście.|what,who
The reason {why} I called is to apologise.|Dzwonię po to, żeby przeprosić.|because,that why
What happened {was} that the car broke down.|Stało się to, że zepsuł się samochód.|were,is that
It was only when I got home {that} I noticed.|Zauważyłem to dopiero po powrocie do domu.|when,then
{The thing} that worries me is the cost.|Martwi mnie koszt.|What thing,That thing
What we did {was} call the police.|Zadzwoniliśmy na policję.|did,were
It is the details {that} matter.|Liczą się szczegóły.|what,who
The person {who} helped me most was my teacher.|Najbardziej pomogła mi moja nauczycielka.|which,what
{Where} we went wrong was in the planning.|Błąd popełniliśmy na etapie planowania.|What,Which
It wasn't until 1989 {that} Poland became free.|Polska stała się wolna dopiero w 1989 roku.|when,then
What I like about her {is} her honesty.|Lubię w niej jej szczerość.|it is,are
{It} was the noise that woke me up.|Obudził mnie hałas.|What,That
The last thing I need {is} another problem.|Ostatnie, czego potrzebuję, to kolejny problem.|it is,are
What surprised me {was} how calm she was.|Zaskoczyło mnie, jak spokojna była.|is it,were
It's you {who} should apologise, not me.|To ty powinieneś przeprosić, nie ja.|which,whom
`},
{ id: "x8-sent-cleft", t: "Zdania: akcentowanie", d: "To właśnie… Jedyne, czego chcę…", k: "o", ex: SENT, i: `
What I really need is a good night's sleep.|Najbardziej potrzebuję porządnie się wyspać.
It was my sister who told me the truth.|To moja siostra powiedziała mi prawdę.
What surprised me most was his reaction.|Najbardziej zaskoczyła mnie jego reakcja.
It was in Paris that they first met.|Poznali się właśnie w Paryżu.
All I wanted was to help.|Chciałem tylko pomóc.
The reason why I left is simple.|Powód, dla którego odszedłem, jest prosty.
What we need now is a clear plan.|Teraz potrzebujemy jasnego planu.
It isn't the money that matters.|To nie pieniądze się liczą.
What happened next was unbelievable.|To, co stało się potem, było niewiarygodne.
The thing I love about London is its parks.|W Londynie uwielbiam jego parki.
It was only then that I understood.|Dopiero wtedy zrozumiałem.
What she did was call her lawyer.|Zadzwoniła do swojego prawnika.
It's the little things that make a difference.|To drobiazgi robią różnicę.
The last thing I expected was an apology.|Ostatnie, czego się spodziewałem, to przeprosiny.
What I don't understand is why he lied.|Nie rozumiem, dlaczego skłamał.
It was the teacher who noticed the problem.|To nauczyciel zauważył problem.
Where they went wrong was in the marketing.|Popełnili błąd w marketingu.
What makes this city special is its people.|To ludzie sprawiają, że to miasto jest wyjątkowe.
It wasn't until I moved abroad that I learnt English.|Nauczyłem się angielskiego dopiero po wyjeździe za granicę.
The person you should talk to is the manager.|Osobą, z którą powinieneś porozmawiać, jest kierownik.
`},
{ id: "x8-participle", t: "Imiesłowy w zdaniach", d: "Having finished… Feeling tired… Built in 1890…", k: "f", i: `
{Having finished} my work, I went home.|Skończywszy pracę, poszedłem do domu.|Finishing,Having finish|Having + III forma = czynność wcześniejsza.
{Feeling} tired, she went to bed early.|Czując się zmęczona, poszła wcześnie spać.|Felt,To feel
The man {sitting} next to me was snoring.|Mężczyzna siedzący obok mnie chrapał.|sat,who sitting
{Built} in 1890, the house needs repairs.|Dom zbudowany w 1890 roku wymaga remontu.|Building,Having building
Not {knowing} what to do, I called my mum.|Nie wiedząc, co robić, zadzwoniłem do mamy.|knew,to know
The letter {written} by her was beautiful.|List napisany przez nią był piękny.|writing,wrote
{Walking} along the street, I met an old friend.|Idąc ulicą, spotkałem starego przyjaciela.|Walked,To walking
{Having lived} there for years, he knows everyone.|Mieszkając tam od lat, zna wszystkich.|Living there,Lived
Anyone {wishing} to leave may do so now.|Każdy, kto chce wyjść, może to zrobić teraz.|wishes,wished
{Shocked} by the news, she sat down.|Wstrząśnięta wiadomością usiadła.|Shocking,Shock
{Being} a doctor, he knew what to do.|Będąc lekarzem, wiedział, co robić.|Been,To be
The book, {published} in 2020, became a bestseller.|Książka wydana w 2020 roku stała się bestsellerem.|publishing,publishes
{After} eating, we went for a walk.|Po jedzeniu poszliśmy na spacer.|Before of,Having
{Having been} warned, we were careful.|Ostrzeżeni, byliśmy ostrożni.|Being,Having
Students {caught} cheating will be punished.|Uczniowie przyłapani na ściąganiu zostaną ukarani.|catching,who caught
{Frankly speaking}, I don't care.|Szczerze mówiąc, nie obchodzi mnie to.|Frank speaking,Frankly speak
{Judging} by his accent, he's from Scotland.|Sądząc po akcencie, jest ze Szkocji.|Judged,To judge
The problems {facing} us are serious.|Problemy, przed którymi stoimy, są poważne.|faced,face
{Given} the circumstances, we did well.|Biorąc pod uwagę okoliczności, poradziliśmy sobie dobrze.|Giving,Gave
{While} waiting for the bus, I read a book.|Czekając na autobus, czytałem książkę.|During,Meanwhile
`},
{ id: "x8-sent-academic", t: "Zdania: styl akademicki", d: "Raporty, eseje i prace naukowe.", k: "o", ex: SENT, i: `
The results suggest that further research is needed.|Wyniki sugerują, że potrzebne są dalsze badania.
This essay will examine the causes of poverty.|W tym eseju zostaną omówione przyczyny ubóstwa.
There is a strong correlation between education and income.|Istnieje silna korelacja między wykształceniem a dochodami.
It could be argued that the policy has failed.|Można by twierdzić, że ta polityka się nie powiodła.
The data was collected over a period of two years.|Dane zbierano przez dwa lata.
These findings are consistent with previous studies.|Te wyniki są zgodne z wcześniejszymi badaniami.
A number of factors must be taken into account.|Należy wziąć pod uwagę szereg czynników.
This raises the question of who is responsible.|To rodzi pytanie, kto jest odpowiedzialny.
The evidence clearly supports this theory.|Dowody wyraźnie potwierdzają tę teorię.
In contrast, the second group showed no improvement.|Z kolei druga grupa nie wykazała poprawy.
It is widely accepted that smoking causes cancer.|Powszechnie przyjmuje się, że palenie powoduje raka.
The study has several limitations.|Badanie ma kilka ograniczeń.
As mentioned above, the costs are high.|Jak wspomniano wyżej, koszty są wysokie.
This issue will be discussed in the next chapter.|Ta kwestia zostanie omówiona w następnym rozdziale.
The aim of this report is to compare two methods.|Celem tego raportu jest porównanie dwóch metod.
Further evidence is needed to confirm this.|Potrzeba dalszych dowodów, aby to potwierdzić.
The majority of respondents agreed with the statement.|Większość respondentów zgodziła się ze stwierdzeniem.
These figures should be treated with caution.|Do tych danych należy podchodzić ostrożnie.
On balance, the advantages outweigh the disadvantages.|Ogólnie rzecz biorąc, zalety przeważają nad wadami.
To conclude, the hypothesis was confirmed.|Podsumowując, hipoteza została potwierdzona.
`},
{ id: "x8-subjunctive", t: "Tryb łączący i nierzeczywistość", d: "It's high time…, as if…, I suggest he go.", k: "f", i: `
It's high time we {left}.|Najwyższy czas, żebyśmy wyszli.|leave,will leave|It's (high) time + Past Simple.
I'd rather you {didn't} tell anyone.|Wolałbym, żebyś nikomu nie mówił.|don't,won't
He talks as if he {were} the boss.|Mówi, jakby był szefem.|is,be
I suggest that he {see} a doctor.|Proponuję, żeby poszedł do lekarza.|sees,will see|Tryb łączący (formalnie): suggest that he see.
It is essential that she {be} on time.|Konieczne jest, żeby była punktualna.|is,will be
Suppose you {won} the lottery – what would you do?|Załóżmy, że wygrałbyś na loterii – co byś zrobił?|win,will win
I'd sooner {stay} at home.|Wolałbym zostać w domu.|to stay,staying
If only she {would} listen to me!|Gdyby tylko chciała mnie posłuchać!|will,does
It's about time you {got} a job.|Najwyższy czas, żebyś znalazł pracę.|get,will get
She looked as though she {had seen} a ghost.|Wyglądała, jakby zobaczyła ducha.|has seen,saw
They demanded that the manager {resign}.|Zażądali, żeby kierownik ustąpił.|resigns,resigned
I'd rather {have} gone by train.|Wolałbym był pojechać pociągiem.|had,having
Were it not for your help, I {would have} failed.|Gdyby nie twoja pomoc, oblałbym.|will have,had
But for the rain, we {would have} won.|Gdyby nie deszcz, wygralibyśmy.|will have,had
I wish you {wouldn't} interrupt me.|Wolałbym, żebyś mi nie przerywał.|don't,won't
It's vital that every child {have} access to education.|Kluczowe jest, by każde dziecko miało dostęp do edukacji.|has,will have
What if he {found} out?|A gdyby się dowiedział?|finds,will find
Supposing it {rains}, what will we do?|Przypuśćmy, że będzie padać – co zrobimy?|will rain,rained
He acted as if nothing {had happened}.|Zachowywał się, jakby nic się nie stało.|has happened,happens
I'd rather we {met} tomorrow.|Wolałbym, żebyśmy spotkali się jutro.|meet,will meet
`},
{ id: "x8-sent-idioms", t: "Zdania: idiomy w praktyce", d: "Popularne idiomy w pełnych zdaniach.", k: "o", ex: SENT, i: `
Let's not beat around the bush.|Nie owijajmy w bawełnę.
It cost an arm and a leg.|To kosztowało majątek.
The exam was a piece of cake.|Egzamin był bułką z masłem.
We're all in the same boat.|Wszyscy jedziemy na tym samym wózku.
I'll have to bite the bullet and tell him.|Będę musiał zacisnąć zęby i mu powiedzieć.
She hit the nail on the head.|Trafiła w sedno.
Don't cry over spilt milk.|Nie płacz nad rozlanym mlekiem.
He let the cat out of the bag.|Wygadał się.
I'm feeling a bit under the weather.|Czuję się trochę nie najlepiej.
Speak of the devil!|O wilku mowa!
We made it by the skin of our teeth.|Udało nam się o włos.
It's not rocket science.|To nie jest żadna filozofia.
That was the last straw.|To była kropla, która przelała czarę.
Every cloud has a silver lining.|Nie ma tego złego, co by na dobre nie wyszło.
She has a heart of gold.|Ona ma złote serce.
Let's call it a day.|Na dziś wystarczy.
I'm all ears.|Zamieniam się w słuch.
Keep your chin up!|Głowa do góry!
It's raining cats and dogs.|Leje jak z cebra.
Actions speak louder than words.|Czyny mówią więcej niż słowa.
`},
{ id: "x8-preps-adv", t: "Przyimki C1", d: "accused of, objected to, on the verge of…", k: "f", i: `
She was accused {of} stealing.|Oskarżono ją o kradzież.|for,with
He objected {to} the plan.|Sprzeciwił się planowi.|against,for
We congratulated her {on} her success.|Pogratulowaliśmy jej sukcesu.|for,with
I'm not accustomed {to} working at night.|Nie jestem przyzwyczajony do pracy w nocy.|with,for
She takes pride {in} her work.|Ona jest dumna ze swojej pracy.|of,on
This is a matter {of} life and death.|To sprawa życia i śmierci.|for,about
He was charged {with} murder.|Oskarżono go o morderstwo.|of,for
The decision is {in} line with our policy.|Decyzja jest zgodna z naszą polityką.|on,at
I'm {at} a loss for words.|Brak mi słów.|in,on
She's {on} the verge of tears.|Jest bliska łez.|at,in
The company went {out} of business.|Firma upadła.|off,away
He's {under} a lot of pressure.|Jest pod dużą presją.|in,on
Prices vary {from} region to region.|Ceny różnią się w zależności od regionu.|between,of
We need to comply {with} the rules.|Musimy przestrzegać zasad.|to,by
She is {by} far the best candidate.|Jest zdecydowanie najlepszą kandydatką.|for,of
In addition {to} the salary, there's a bonus.|Oprócz pensji jest premia.|with,of
He was deprived {of} sleep.|Pozbawiono go snu.|from,with
The meeting was {on} the point of ending.|Spotkanie właśnie miało się kończyć.|at,in
I'll do it {in} due course.|Zrobię to we właściwym czasie.|on,at
She succeeded {in} convincing him.|Udało jej się go przekonać.|to,at
`},
{ id: "x8-sent-hedging", t: "Zdania: dyplomatycznie", d: "Ostrożne, uprzejme wyrażanie zdania.", k: "o", ex: SENT, i: `
It seems that there has been a misunderstanding.|Wygląda na to, że doszło do nieporozumienia.
I'm not entirely convinced by this argument.|Nie do końca przekonuje mnie ten argument.
There may be some truth in what he says.|W tym, co mówi, może być trochę prawdy.
It would appear that the plan has failed.|Wydawałoby się, że plan się nie powiódł.
To a certain extent, I agree with you.|Do pewnego stopnia się z tobą zgadzam.
I'm inclined to think that she's right.|Skłaniam się ku temu, że ona ma rację.
With all due respect, I disagree.|Z całym szacunkiem, nie zgadzam się.
I wonder if you could help me.|Zastanawiam się, czy mógłbyś mi pomóc.
It's not that I don't like him.|Nie chodzi o to, że go nie lubię.
I was wondering whether we could meet next week.|Zastanawiałem się, czy moglibyśmy spotkać się w przyszłym tygodniu.
This is likely to cause problems.|To prawdopodobnie spowoduje problemy.
There is a tendency to forget the past.|Istnieje tendencja do zapominania o przeszłości.
Generally speaking, people prefer cheaper products.|Ogólnie rzecz biorąc, ludzie wolą tańsze produkty.
As far as I can tell, everything is fine.|O ile mogę stwierdzić, wszystko jest w porządku.
I might be wrong, but I think it's a mistake.|Mogę się mylić, ale myślę, że to błąd.
It is fair to say that the project was ambitious.|Można uczciwie powiedzieć, że projekt był ambitny.
Correct me if I'm wrong.|Popraw mnie, jeśli się mylę.
I see where you're coming from.|Rozumiem twój punkt widzenia.
That's not quite what I meant.|Nie to dokładnie miałem na myśli.
Would you mind if I opened the window?|Czy miałbyś coś przeciwko, gdybym otworzył okno?
`}
]);
})();
