/* Etap 5 – gramatyka i zdania B1. */
(function () {
var SENT = ["order", "pl2en", "order", "en2pl", "listen"];
ADD("s5", [
{ id: "x5-ppvsps", t: "Present Perfect czy Past Simple?", d: "I have lost… czy I lost…?", k: "f", i: `
I {have lost} my keys. I can't find them.|Zgubiłem klucze. Nie mogę ich znaleźć.|lost,was losing|Skutek widoczny teraz → Present Perfect.
I {lost} my keys yesterday.|Wczoraj zgubiłem klucze.|have lost,have losed|Konkretny czas w przeszłości (yesterday) → Past Simple.
{Have} you ever been to Paris?|Czy byłeś kiedyś w Paryżu?|Did,Were
I {went} to Paris in 2019.|Byłem w Paryżu w 2019 roku.|have gone,have been
She {has worked} here since 2018.|Ona pracuje tu od 2018 roku.|works,worked
We {moved} here two years ago.|Przeprowadziliśmy się tu dwa lata temu.|have moved,move|Ago → Past Simple.
I {haven't seen} him for ages.|Nie widziałem go od wieków.|didn't see,don't see
When {did} you arrive?|Kiedy przyjechałeś?|have,were|Pytanie When…? → Past Simple.
He {has just finished} his homework.|Właśnie skończył lekcje.|just finished,finished just
Have you {already} eaten?|Czy już jadłeś?|yet,ever
I {have known} her for ten years.|Znam ją od dziesięciu lat.|know,knew
They {got} married last summer.|Pobrali się zeszłego lata.|have got,have gotten
How long {have} you lived here?|Jak długo tu mieszkasz?|do,did
This is the best film I {have ever seen}.|To najlepszy film, jaki kiedykolwiek widziałem.|ever saw,have never seen
She {has been} to Japan three times.|Była w Japonii trzy razy.|was,has gone|Has been – była i wróciła. Has gone – pojechała i nadal tam jest.
Tom isn't here. He {has gone} to the shop.|Toma nie ma. Poszedł do sklepu.|has been,went to
I {didn't see} that film last night.|Wczoraj wieczorem nie widziałem tego filmu.|haven't seen,hasn't seen
We {haven't decided} yet.|Jeszcze nie zdecydowaliśmy.|didn't decide,don't decide
It {has rained} a lot this week.|W tym tygodniu dużo padało.|rained,rains|Okres, który jeszcze trwa (this week) → Present Perfect.
Shakespeare {wrote} many plays.|Szekspir napisał wiele sztuk.|has written,writes|Osoba, która już nie żyje → Past Simple.
`},
{ id: "x5-sent-pp", t: "Zdania: doświadczenia", d: "Present Perfect w praktyce.", k: "o", ex: SENT, i: `
I have never been to Asia.|Nigdy nie byłem w Azji.
Have you ever eaten snails?|Jadłeś kiedyś ślimaki?
She has lived in London for five years.|Ona mieszka w Londynie od pięciu lat.
We have known each other since school.|Znamy się od szkoły.
I have just finished my work.|Właśnie skończyłem pracę.
He hasn't called me yet.|Jeszcze do mnie nie zadzwonił.
Have you seen my glasses?|Widziałeś moje okulary?
They have already left.|Oni już wyszli.
I have lost my wallet.|Zgubiłem portfel.
This is the first time I have flown.|To pierwszy raz, kiedy lecę samolotem.
How long have you been married?|Jak długo jesteście małżeństwem?
She has broken her leg.|Złamała nogę.
I've read this book three times.|Czytałem tę książkę trzy razy.
We haven't seen each other for years.|Nie widzieliśmy się od lat.
Has the film started yet?|Czy film już się zaczął?
My parents have never visited America.|Moi rodzice nigdy nie byli w Ameryce.
I've been very busy recently.|Ostatnio byłem bardzo zajęty.
Prices have gone up.|Ceny wzrosły.
I've changed my mind.|Zmieniłem zdanie.
Have you finished your coffee?|Skończyłeś kawę?
`},
{ id: "x5-gerund", t: "-ing czy to + bezokolicznik?", d: "enjoy reading, want to read.", k: "f", i: `
I enjoy {reading}.|Lubię czytać.|to read,read|Po enjoy, finish, mind, avoid → forma -ing.
I want {to learn} Italian.|Chcę uczyć się włoskiego.|learning,learn|Po want, decide, hope, plan → to + bezokolicznik.
She decided {to leave} early.|Postanowiła wyjść wcześniej.|leaving,leave
Do you mind {opening} the window?|Czy mógłbyś otworzyć okno?|to open,open
He finished {writing} the report.|Skończył pisać raport.|to write,write
We hope {to see} you soon.|Mamy nadzieję wkrótce cię zobaczyć.|seeing,see
I'm good at {cooking}.|Jestem dobry w gotowaniu.|cook,to cook|Po przyimku (at, in, of, about) → forma -ing.
Avoid {eating} too much sugar.|Unikaj jedzenia zbyt dużej ilości cukru.|to eat,eat
She promised {to call} me.|Obiecała do mnie zadzwonić.|calling,call
I'm interested in {learning} new things.|Interesuje mnie poznawanie nowych rzeczy.|learn,to learn
{Swimming} is good for your health.|Pływanie jest dobre dla zdrowia.|Swim,To swimming
I can't afford {to buy} a new car.|Nie stać mnie na nowy samochód.|buying,buy
They agreed {to help} us.|Zgodzili się nam pomóc.|helping,help
Stop {talking}, please!|Przestańcie rozmawiać, proszę!|to talk,talk|Stop + -ing = przestać coś robić.
I'm looking forward to {seeing} you.|Nie mogę się doczekać, aż cię zobaczę.|see,to see|W look forward to słowo „to” jest przyimkiem, więc dalej -ing.
He refused {to answer}.|Odmówił odpowiedzi.|answering,answer
Would you like {to come} with us?|Chciałbyś pójść z nami?|coming,come
I gave up {smoking} last year.|Rzuciłem palenie w zeszłym roku.|to smoke,smoke
It's easy {to understand}.|To łatwe do zrozumienia.|understanding,understand
Thank you for {helping} me.|Dziękuję za pomoc.|help,to help
`},
{ id: "x5-sent-work", t: "Zdania: w pracy", d: "Spotkania, terminy, e-maile.", k: "o", ex: SENT, i: `
I work for a big international company.|Pracuję w dużej międzynarodowej firmie.
I'm responsible for customer service.|Odpowiadam za obsługę klienta.
I have a meeting at ten o'clock.|Mam spotkanie o dziesiątej.
Could you send me the report?|Czy możesz mi wysłać raport?
The deadline is next Friday.|Termin mija w przyszły piątek.
I'm working from home today.|Dziś pracuję z domu.
She got a promotion last month.|W zeszłym miesiącu dostała awans.
We need to hire more people.|Musimy zatrudnić więcej ludzi.
He applied for a job in a bank.|Złożył podanie o pracę w banku.
My boss is very demanding.|Mój szef jest bardzo wymagający.
I'm going to ask for a pay rise.|Zamierzam poprosić o podwyżkę.
The interview went really well.|Rozmowa kwalifikacyjna poszła naprawdę dobrze.
I usually start work at eight.|Zwykle zaczynam pracę o ósmej.
Can we reschedule the meeting?|Czy możemy przełożyć spotkanie?
I'll be out of the office tomorrow.|Jutro nie będzie mnie w biurze.
She works part-time in a shop.|Ona pracuje na pół etatu w sklepie.
I have a lot of experience in sales.|Mam duże doświadczenie w sprzedaży.
Thank you for your email.|Dziękuję za e-mail.
I look forward to hearing from you.|Czekam na odpowiedź.
Please find the document attached.|W załączniku przesyłam dokument.
`},
{ id: "x5-passive1", t: "Strona bierna", d: "It was built… It is made… (be + III forma).", k: "f", i: `
English {is spoken} all over the world.|Po angielsku mówi się na całym świecie.|speaks,is speaking|Strona bierna: be + III forma.
This house {was built} in 1920.|Ten dom zbudowano w 1920 roku.|built,is building
The letters {are delivered} every morning.|Listy są dostarczane każdego ranka.|deliver,are delivering
My bike {was stolen} last night.|Wczoraj w nocy ukradziono mi rower.|stole,was stealing
The room {is cleaned} every day.|Pokój jest sprzątany codziennie.|cleans,is cleaning
The Mona Lisa {was painted} by Leonardo da Vinci.|Mona Lisa została namalowana przez Leonarda da Vinci.|painted,is painting
Coffee {is grown} in Brazil.|Kawę uprawia się w Brazylii.|grows,is growing
The thief {was arrested} by the police.|Złodziej został aresztowany przez policję.|arrested,was arresting
Cars {are made} in this factory.|W tej fabryce produkuje się samochody.|make,are making
The window {was broken} by a ball.|Okno zostało wybite piłką.|broke,was breaking
These photos {were taken} in Italy.|Te zdjęcia zostały zrobione we Włoszech.|took,were taking
Dinner {is served} at 7 p.m.|Kolacja jest podawana o 19:00.|serves,is serving
The film {was directed} by a Polish director.|Film wyreżyserował polski reżyser.|directed,was directing
Smoking {is not allowed} here.|Palenie jest tu zabronione.|does not allow,not allowed
When {was} the bridge built?|Kiedy zbudowano most?|did,is
The results {will be announced} tomorrow.|Wyniki zostaną ogłoszone jutro.|will announce,will announced
The meeting {has been cancelled}.|Spotkanie zostało odwołane.|has cancelled,is cancelling
Many trees {were destroyed} in the storm.|W czasie burzy zniszczonych zostało wiele drzew.|destroyed,were destroying
The book {has been translated} into 30 languages.|Książka została przetłumaczona na 30 języków.|has translated,translated
Credit cards {are accepted} here.|Akceptujemy tu karty kredytowe.|accept,are accepting
`},
{ id: "x5-sent-opinion", t: "Zdania: opinie", d: "Zgadzam się, nie sądzę, to zależy.", k: "o", ex: SENT, i: `
In my opinion, smoking should be banned.|Moim zdaniem palenie powinno zostać zakazane.
I don't think it's a good idea.|Nie sądzę, żeby to był dobry pomysł.
I completely agree with you.|Całkowicie się z tobą zgadzam.
I'm not sure that's true.|Nie jestem pewien, czy to prawda.
It depends on the weather.|To zależy od pogody.
To be honest, I didn't like the film.|Szczerze mówiąc, film mi się nie podobał.
What do you think about it?|Co o tym myślisz?
I think we should leave now.|Myślę, że powinniśmy już iść.
It's too expensive for me.|To dla mnie za drogie.
I prefer living in the city.|Wolę mieszkać w mieście.
There are advantages and disadvantages.|Są zalety i wady.
Some people believe that money is everything.|Niektórzy ludzie wierzą, że pieniądze są wszystkim.
I'd rather stay at home tonight.|Wolałbym dziś zostać w domu.
You are absolutely right.|Masz absolutną rację.
I see your point, but I disagree.|Rozumiem twój punkt widzenia, ale się nie zgadzam.
It's worth seeing.|Warto to zobaczyć.
It doesn't matter to me.|Dla mnie to bez znaczenia.
I can't stand loud music.|Nie znoszę głośnej muzyki.
The film was better than I expected.|Film był lepszy, niż się spodziewałem.
I have no idea.|Nie mam pojęcia.
`},
{ id: "x5-relative", t: "who, which, where, whose", d: "Zdania względne: który, gdzie, czyj.", k: "f", i: `
That's the man {who} helped me.|To ten mężczyzna, który mi pomógł.|which,where|Who – o ludziach, which – o rzeczach.
This is the book {which} I told you about.|To jest książka, o której ci mówiłem.|who,where
That's the hotel {where} we stayed.|To hotel, w którym się zatrzymaliśmy.|which,who|Where – o miejscach (gdzie / w którym).
She's the woman {whose} son is a pilot.|To ta kobieta, której syn jest pilotem.|who,who's|Whose = którego / której (przynależność).
I have a friend {who} lives in Rome.|Mam przyjaciela, który mieszka w Rzymie.|which,whose
The car {that} I bought is red.|Samochód, który kupiłem, jest czerwony.|who,where
Do you know the girl {who} is talking to Tom?|Znasz dziewczynę, która rozmawia z Tomem?|which,whose
This is the town {where} I was born.|To miasto, w którym się urodziłem.|which,who
Is this the phone {which} you lost?|Czy to telefon, który zgubiłeś?|who,where
The man {whose} car was stolen called the police.|Mężczyzna, któremu ukradziono samochód, zadzwonił na policję.|who,which
I like people {who} are honest.|Lubię ludzi, którzy są szczerzy.|which,where
The film {that} we saw was great.|Film, który widzieliśmy, był świetny.|who,where
That's the restaurant {where} we met.|To restauracja, w której się poznaliśmy.|which,who
He's the teacher {who} taught me English.|To nauczyciel, który uczył mnie angielskiego.|which,whose
The dog {which} bit me was big.|Pies, który mnie ugryzł, był duży.|who,where
I know a shop {where} you can buy cheap shoes.|Znam sklep, w którym kupisz tanie buty.|which,who
She's the singer {whose} songs I love.|To piosenkarka, której piosenki uwielbiam.|who,which
Everything {that} he said was true.|Wszystko, co powiedział, było prawdą.|what,who|Po everything, something, nothing używamy that.
The people {who} live next door are very nice.|Ludzie, którzy mieszkają obok, są bardzo mili.|which,whose
This is the room {where} I work.|To pokój, w którym pracuję.|which,who
`},
{ id: "x5-sent-passive", t: "Zdania: strona bierna", d: "Zbudowano, wysłano, odwołano.", k: "o", ex: SENT, i: `
This bridge was built in 1900.|Ten most zbudowano w 1900 roku.
The windows are cleaned every month.|Okna są myte co miesiąc.
My car was repaired yesterday.|Mój samochód naprawiono wczoraj.|Yesterday my car was repaired.
English is taught in all schools.|Angielskiego uczy się we wszystkich szkołach.
The letter was sent last week.|List wysłano w zeszłym tygodniu.
Breakfast is served from seven to ten.|Śniadanie jest podawane od siódmej do dziesiątej.
The concert was cancelled.|Koncert został odwołany.
Many people were injured in the accident.|W wypadku rannych zostało wielu ludzi.
The house is being painted.|Dom jest właśnie malowany.
This song was written by my friend.|Tę piosenkę napisał mój przyjaciel.
Photos are not allowed in the museum.|W muzeum nie wolno robić zdjęć.
The thief was caught by the police.|Złodziej został złapany przez policję.
Our office is cleaned every evening.|Nasze biuro jest sprzątane każdego wieczoru.
The results will be published tomorrow.|Wyniki zostaną opublikowane jutro.
Where were these shoes made?|Gdzie zrobiono te buty?
The road is closed for repairs.|Droga jest zamknięta z powodu remontu.
I was born in a small village.|Urodziłem się w małej wsi.
The project has been finished.|Projekt został ukończony.
All the tickets were sold.|Wszystkie bilety zostały sprzedane.
This room is used for meetings.|Ten pokój służy do spotkań.
`},
{ id: "x5-usedto", t: "used to i be used to", d: "Kiedyś tak było / jestem przyzwyczajony.", k: "f", i: `
I {used to} play the piano.|Kiedyś grałem na pianinie.|use to,was used to|Used to = kiedyś (a teraz już nie).
She didn't {use to} like coffee.|Kiedyś nie lubiła kawy.|used to,using to|W przeczeniach i pytaniach: didn't use to, did you use to.
{Did} you use to live here?|Czy kiedyś tu mieszkałeś?|Were,Do
We used to {go} to the seaside every summer.|Kiedyś co lato jeździliśmy nad morze.|going,went
There {used to} be a cinema here.|Kiedyś było tu kino.|use to,was used
He used to {have} long hair.|Kiedyś miał długie włosy.|having,had
I {am used to} getting up early.|Jestem przyzwyczajony do wczesnego wstawania.|used to,use to|Be used to + -ing = być przyzwyczajonym do czegoś.
I can't {get used to} the cold weather.|Nie mogę przyzwyczaić się do zimnej pogody.|use to,be using
My grandfather {used to} work in a mine.|Mój dziadek kiedyś pracował w kopalni.|uses to,was use to
They {didn't use to} have a car.|Kiedyś nie mieli samochodu.|didn't used to,not used to
She's used to {working} at night.|Ona jest przyzwyczajona do pracy w nocy.|work,works
Life {used to} be much simpler.|Kiedyś życie było o wiele prostsze.|was used to,use to
Where did you use to {live}?|Gdzie kiedyś mieszkałeś?|lived,living
I {never used to} eat vegetables.|Kiedyś w ogóle nie jadłem warzyw.|didn't never use to,never use to
He {is used to} driving on the left.|On jest przyzwyczajony do jazdy lewą stroną.|used to,uses to
We {used to} be best friends.|Kiedyś byliśmy najlepszymi przyjaciółmi.|use to,were used to
You'll soon {get used to} it.|Wkrótce się do tego przyzwyczaisz.|used to,be use to
Did your dad use to {smoke}?|Czy twój tata kiedyś palił?|smoked,smoking
I'm not used to {speaking} English.|Nie jestem przyzwyczajony do mówienia po angielsku.|speak,spoke
This building {used to} be a school.|Ten budynek był kiedyś szkołą.|was used to,use to
`},
{ id: "x5-sent-cond", t: "Zdania: jeśli… gdyby…", d: "Pierwszy i drugi tryb warunkowy.", k: "o", ex: SENT, i: `
If you study hard, you will pass.|Jeśli będziesz się pilnie uczyć, zdasz.|You will pass if you study hard.
If I have time, I'll call you.|Jeśli będę miał czas, zadzwonię.|I'll call you if I have time.
If I won the lottery, I would travel.|Gdybym wygrał na loterii, podróżowałbym.|I would travel if I won the lottery.
If I were rich, I would buy a boat.|Gdybym był bogaty, kupiłbym łódź.|I would buy a boat if I were rich.
What would you do if you lost your job?|Co byś zrobił, gdybyś stracił pracę?
If she calls, tell her I'm busy.|Jeśli zadzwoni, powiedz jej, że jestem zajęty.|Tell her I'm busy if she calls.
I would help you if I could.|Pomógłbym ci, gdybym mógł.|If I could I would help you.
If we don't hurry, we'll be late.|Jeśli się nie pospieszymy, spóźnimy się.|We'll be late if we don't hurry.
If I were you, I wouldn't do that.|Na twoim miejscu bym tego nie robił.|I wouldn't do that if I were you.
Unless you hurry, you'll miss the bus.|Jeśli się nie pospieszysz, spóźnisz się na autobus.|You'll miss the bus unless you hurry.
If it's sunny tomorrow, we'll go to the beach.|Jeśli jutro będzie słonecznie, pójdziemy na plażę.|We'll go to the beach if it's sunny tomorrow.
If I had a car, I would drive to work.|Gdybym miał samochód, jeździłbym do pracy.|I would drive to work if I had a car.
Would you live abroad if you could?|Czy zamieszkałbyś za granicą, gdybyś mógł?
If you need help, just ask.|Jeśli potrzebujesz pomocy, po prostu poproś.|Just ask if you need help.
If he knew the answer, he would tell us.|Gdyby znał odpowiedź, powiedziałby nam.|He would tell us if he knew the answer.
If you mix red and blue, you get purple.|Jeśli zmieszasz czerwony i niebieski, otrzymasz fioletowy.|You get purple if you mix red and blue.
I'll be angry if you're late again.|Będę zły, jeśli znowu się spóźnisz.|If you're late again I'll be angry.
If I spoke better English, I would get a better job.|Gdybym lepiej mówił po angielsku, dostałbym lepszą pracę.|I would get a better job if I spoke better English.
What will you do if it rains?|Co zrobisz, jeśli będzie padać?
If I had more time, I would read more books.|Gdybym miał więcej czasu, czytałbym więcej książek.|I would read more books if I had more time.
`}
]);
})();
