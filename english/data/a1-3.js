/* Etap 2 – dodatkowa gramatyka i zdania A1. */
(function () {
var SENT = ["order", "pl2en", "order", "en2pl", "listen"];
ADD("s2", [
{ id: "x2-be3", t: "to be: powtórka", d: "am / is / are w codziennych zdaniach.", k: "f", i: `
My name {is} Tom.|Mam na imię Tom.|am,are
I {am} from Poland.|Jestem z Polski.|is,are
We {are} brothers.|Jesteśmy braćmi.|is,am
This {is} my car.|To jest mój samochód.|are,am
These {are} my shoes.|To są moje buty.|is,am
The sky {is} blue.|Niebo jest niebieskie.|are,am
The apples {are} red.|Jabłka są czerwone.|is,am
You {are} very nice.|Jesteś bardzo miły.|is,am
My parents {are} at work.|Moi rodzice są w pracy.|is,am
Kate {is} my best friend.|Kate jest moją najlepszą przyjaciółką.|are,am
It {is} a big house.|To duży dom.|are,am
I {am} twenty years old.|Mam dwadzieścia lat.|have,is|Wiek: I am 20 (years old), a nie „I have”.
Where {are} the keys?|Gdzie są klucze?|is,am
What {is} this?|Co to jest?|are,am
My sister and I {are} at school.|Moja siostra i ja jesteśmy w szkole.|am,is
The weather {is} nice today.|Dziś jest ładna pogoda.|are,am
{Is} your father a doctor?|Czy twój tata jest lekarzem?|Are,Am
{Are} you and Tom friends?|Czy ty i Tom jesteście przyjaciółmi?|Is,Am
I'm cold. {Is} the window open?|Zimno mi. Czy okno jest otwarte?|Are,Am
Who {is} that girl?|Kim jest ta dziewczyna?|are,am
`},
{ id: "x2-sent1", t: "Zdania: o sobie", d: "Przedstaw się po angielsku.", k: "o", ex: SENT, i: `
Hello, my name is Tom.|Cześć, mam na imię Tom.
I am from Poland.|Jestem z Polski.
I live in Warsaw.|Mieszkam w Warszawie.
I am thirty years old.|Mam trzydzieści lat.
I am a nurse.|Jestem pielęgniarką.
I have two children.|Mam dwoje dzieci.
My wife is a teacher.|Moja żona jest nauczycielką.
I speak Polish and a little English.|Mówię po polsku i trochę po angielsku.
Nice to meet you.|Miło cię poznać.
Where are you from?|Skąd jesteś?
What do you do?|Czym się zajmujesz?
How old are you?|Ile masz lat?
What is your phone number?|Jaki jest twój numer telefonu?
This is my friend Ola.|To moja przyjaciółka Ola.
I like music and sport.|Lubię muzykę i sport.
My favourite colour is green.|Mój ulubiony kolor to zielony.
I am not married.|Nie jestem żonaty.
I have got a dog and a cat.|Mam psa i kota.
I work in a shop.|Pracuję w sklepie.
See you tomorrow!|Do zobaczenia jutro!
`},
{ id: "x2-poss", t: "my, your, his, her…", d: "Zaimki dzierżawcze. Uwaga na polskie „swój”!", k: "f", i: `
I have a dog. {My} dog is black.|Mam psa. Mój pies jest czarny.|Me,I
You have a cat. {Your} cat is cute.|Masz kota. Twój kot jest słodki.|You,Yours
Tom has a car. {His} car is red.|Tom ma samochód. Jego samochód jest czerwony.|Her,He
Anna has a bike. {Her} bike is new.|Anna ma rower. Jej rower jest nowy.|His,She
We have a house. {Our} house is big.|Mamy dom. Nasz dom jest duży.|We,Us
They have a garden. {Their} garden is beautiful.|Mają ogród. Ich ogród jest piękny.|They,There
The dog is eating {its} food.|Pies je swoje jedzenie.|it's,his|Its = jego (o rzeczy lub zwierzęciu). It's = it is.
What's {your} name?|Jak masz na imię?|you,yours
{My} name is Marek.|Mam na imię Marek.|I,Me
This is Kasia and this is {her} brother.|To jest Kasia, a to jej brat.|his,she
Mr Smith is in {his} office.|Pan Smith jest w swoim biurze.|her,him|Polskie „swój” tłumaczymy jako my / your / his / her / its / our / their.
We love {our} children.|Kochamy nasze dzieci.|us,we
Children, open {your} books.|Dzieci, otwórzcie książki.|you,yours
The students are with {their} teacher.|Uczniowie są ze swoim nauczycielem.|they,them
Is this {your} phone?|Czy to twój telefon?|you,yours
Tom and {his} wife live in London.|Tom i jego żona mieszkają w Londynie.|her,he
The cat is in {its} bed.|Kot jest w swoim posłaniu.|it's,it
I can't find {my} keys.|Nie mogę znaleźć moich kluczy.|mine,me
Their house is near {our} school.|Ich dom jest blisko naszej szkoły.|we,us
She is with {her} mum.|Ona jest ze swoją mamą.|she,hers
`},
{ id: "x2-sent2", t: "Zdania: dom i rodzina", d: "Opisz swój dom i bliskich.", k: "o", ex: SENT, i: `
My house is small but nice.|Mój dom jest mały, ale ładny.
We have a big kitchen.|Mamy dużą kuchnię.
My bedroom is upstairs.|Moja sypialnia jest na górze.
The bathroom is next to the kitchen.|Łazienka jest obok kuchni.
There are three bedrooms.|Są trzy sypialnie.
My sister has long hair.|Moja siostra ma długie włosy.
Our cat sleeps on the sofa.|Nasz kot śpi na kanapie.
My grandparents live in the country.|Moi dziadkowie mieszkają na wsi.
I have one brother and two sisters.|Mam jednego brata i dwie siostry.
My mum cooks very well.|Moja mama bardzo dobrze gotuje.
The garden is behind the house.|Ogród jest za domem.
We eat dinner together.|Jemy razem obiad.
My dad works in an office.|Mój tata pracuje w biurze.
The children are in their room.|Dzieci są w swoim pokoju.
Our flat is on the second floor.|Nasze mieszkanie jest na drugim piętrze.
I have a small garden.|Mam mały ogródek.
My uncle lives in Canada.|Mój wujek mieszka w Kanadzie.
The TV is in the living room.|Telewizor jest w salonie.
We have a new fridge.|Mamy nową lodówkę.
My brother is very tall.|Mój brat jest bardzo wysoki.
`},
{ id: "x2-objpron", t: "me, him, her, us, them", d: "Mnie, go, ją, nas, ich – zaimki w dopełnieniu.", k: "f", i: `
I love {you}.|Kocham cię.|your,yours
Can you help {me}?|Możesz mi pomóc?|I,my
Where is Tom? I can't see {him}.|Gdzie jest Tom? Nie widzę go.|he,his
Anna is nice. I like {her}.|Anna jest miła. Lubię ją.|she,hers
These are my friends. I visit {them} every week.|To moi przyjaciele. Odwiedzam ich co tydzień.|they,their
Please call {us} tomorrow.|Proszę, zadzwoń do nas jutro.|we,our
This book is great. Read {it}!|Ta książka jest świetna. Przeczytaj ją!|its,them
Give {me} the pen, please.|Daj mi długopis, proszę.|I,my
Listen to {him}!|Posłuchaj go!|he,his
I don't know {them}.|Nie znam ich.|they,their
She sends {us} postcards.|Ona wysyła nam pocztówki.|we,our
Do you like this song? I love {it}!|Lubisz tę piosenkę? Uwielbiam ją!|her,its
Tell {her} the truth.|Powiedz jej prawdę.|she,hers
Come with {me}.|Chodź ze mną.|I,mine
The children are in the garden. Can you see {them}?|Dzieci są w ogrodzie. Widzisz je?|they,their
{She} is my teacher.|Ona jest moją nauczycielką.|Her,Hers|She – podmiot (ona), her – dopełnienie (ją, jej).
{They} live in Gdańsk.|Oni mieszkają w Gdańsku.|Them,Their
{He} works with me.|On pracuje ze mną.|Him,His
{We} are hungry.|Jesteśmy głodni.|Us,Our
My parents are here. Say hello to {them}.|Moi rodzice są tutaj. Przywitaj się z nimi.|they,their
`},
{ id: "x2-sent3", t: "Zdania: rzeczy wokół nas", d: "Gdzie coś jest i jakie jest.", k: "o", ex: SENT, i: `
The book is on the table.|Książka jest na stole.
My phone is in my bag.|Mój telefon jest w torbie.
This bag is very heavy.|Ta torba jest bardzo ciężka.
These shoes are too small.|Te buty są za małe.
The sky is blue today.|Niebo jest dziś niebieskie.|Today the sky is blue.
I have a red car.|Mam czerwony samochód.
Her dress is beautiful.|Jej sukienka jest piękna.
The window is open.|Okno jest otwarte.
The shop is closed.|Sklep jest zamknięty.
The water is cold.|Woda jest zimna.
My keys are in the car.|Moje klucze są w samochodzie.
The children are happy.|Dzieci są szczęśliwe.
This is a good idea.|To dobry pomysł.
The tea is too hot.|Herbata jest za gorąca.
That house is very old.|Tamten dom jest bardzo stary.
My computer is new.|Mój komputer jest nowy.
The dog is under the table.|Pies jest pod stołem.
Where are my glasses?|Gdzie są moje okulary?
The cups are in the cupboard.|Filiżanki są w szafce.
It is a beautiful day.|Jest piękny dzień.
`},
{ id: "x2-genitive", t: "Anna's, my parents'", d: "Dopełniacz saksoński – czyje to jest?", k: "f", i: `
This is {Tom's} car.|To jest samochód Toma.|Tom,Toms
{Anna's} brother is a doctor.|Brat Anny jest lekarzem.|Anna,Annas
Where is {my mother's} bag?|Gdzie jest torebka mojej mamy?|my mother,my mothers
It's {the dog's} bowl.|To miska psa.|the dog,the dogs
{My parents'} house is in Kraków.|Dom moich rodziców jest w Krakowie.|My parents,My parent's|Liczba mnoga zakończona na -s: sam apostrof – parents'.
These are {the children's} toys.|To zabawki dzieci.|the childrens',the children|Children nie kończy się na -s, więc dodajemy 's: children's.
{Kasia's} eyes are green.|Kasia ma zielone oczy.|Kasia,Kasias
Is this {your sister's} phone?|Czy to telefon twojej siostry?|your sister,your sisters
{Peter's} birthday is in May.|Urodziny Piotra są w maju.|Peter,Peters
I like {my friend's} flat.|Podoba mi się mieszkanie mojego przyjaciela.|my friend,my friends
{The teacher's} name is Mr Brown.|Nauczyciel nazywa się pan Brown.|The teacher,The teachers
{Whose} bag is this? – It's Mark's.|Czyja to torba? – Marka.|Who's,Who
That's {my grandparents'} farm.|To gospodarstwo moich dziadków.|my grandparents,my grandparent's
{The cat's} name is Puszek.|Kot ma na imię Puszek.|The cat,The cats
Have you seen {James's} new car?|Widziałeś nowy samochód Jamesa?|James,Jameses
{Women's} clothes are on the first floor.|Odzież damska jest na pierwszym piętrze.|Womens',Woman
Is this {the boss's} office?|Czy to biuro szefa?|the boss,the bosses
It's {my wife's} idea.|To pomysł mojej żony.|my wife,my wifes
We are at {Tom and Anna's} wedding.|Jesteśmy na weselu Toma i Anny.|Tom's and Anna,Tom and Anna|Wspólna rzecz dwóch osób: 's tylko po drugim imieniu.
Where are {the students'} books?|Gdzie są książki uczniów?|the students,the student
`},
{ id: "x2-sent4", t: "Zdania: proste pytania", d: "Pytaj o imię, miejsce, cenę i godzinę.", k: "o", ex: SENT, i: `
What is your name?|Jak masz na imię?
Where is the station?|Gdzie jest dworzec?
Is this your bag?|Czy to twoja torba?
Are you hungry?|Jesteś głodny?
Who is that man?|Kim jest tamten mężczyzna?
What colour is your car?|Jakiego koloru jest twój samochód?
How are you today?|Jak się dziś masz?
Is your sister at home?|Czy twoja siostra jest w domu?
Where are the children?|Gdzie są dzieci?
What is this?|Co to jest?
Are they your friends?|Czy oni są twoimi przyjaciółmi?
Is the museum open today?|Czy muzeum jest dziś otwarte?
How much is this bread?|Ile kosztuje ten chleb?
What time is the train?|O której jest pociąg?
Is it far from here?|Czy to daleko stąd?
Where is your mother from?|Skąd pochodzi twoja mama?
Are you ready?|Jesteś gotowy?
Is he your brother?|Czy on jest twoim bratem?
What is the weather like?|Jaka jest pogoda?
Can I help you?|Czy mogę w czymś pomóc?
`},
{ id: "x2-imper", t: "Polecenia: Open! Don't…!", d: "Tryb rozkazujący i Let's…", k: "f", i: `
{Open} the window, please.|Otwórz okno, proszę.|Opens,Opening
{Don't} touch it!|Nie dotykaj tego!|Not,No
{Sit} down, please.|Usiądź, proszę.|Sits,Sitting
Please {be} quiet.|Proszę, bądź cicho.|are,is
{Don't be} late!|Nie spóźnij się!|Not be,Don't
{Let's} go to the cinema!|Chodźmy do kina!|Let,Lets|Let's = let us – chodźmy, zróbmy.
{Close} the door.|Zamknij drzwi.|Closes,Closing
{Turn} left at the bank.|Skręć w lewo przy banku.|Turns,Turning
Don't {worry}.|Nie martw się.|worries,worrying
{Look} at me!|Spójrz na mnie!|See,Watch
{Listen} carefully.|Słuchaj uważnie.|Hear,Listens
Let's {eat}!|Jedzmy!|eating,to eat
{Don't} run in the corridor.|Nie biegaj po korytarzu.|Doesn't,No
Please {wait} here.|Proszę zaczekać tutaj.|waits,waiting
{Have} a good time!|Baw się dobrze!|Has,Having
{Help} me, please!|Pomóż mi, proszę!|Helps,Helping
{Don't} forget your umbrella.|Nie zapomnij parasola.|Not,Doesn't
{Be} careful!|Uważaj!|Are,Being
Let's not {argue}.|Nie kłóćmy się.|arguing,to argue
{Call} me later.|Zadzwoń do mnie później.|Calls,Calling
`},
{ id: "x2-articles", t: "a, an czy the?", d: "Przedimek nieokreślony i określony.", k: "f", i: `
I've got {a} sister.|Mam siostrę.|an,the
{The} sun is hot.|Słońce jest gorące.|A,An|The – rzecz jedyna w swoim rodzaju: the sun, the moon.
She plays {the} piano.|Ona gra na pianinie.|a,an|Instrumenty: play the guitar, play the piano.
Can you close {the} door, please?|Możesz zamknąć drzwi?|a,an|Wiadomo, o które drzwi chodzi → the.
There's {a} cat in the garden.|W ogrodzie jest (jakiś) kot.|the,an
{The} cat is very fat.|Ten kot jest bardzo gruby.|An,A
He's {an} actor.|On jest aktorem.|a,the|Zawód: a / an + zawód.
We live in {the} centre of the city.|Mieszkamy w centrum miasta.|a,an
I eat {an} apple every day.|Codziennie jem jabłko.|a,the
{The} moon is beautiful tonight.|Księżyc jest dziś piękny.|A,An
Is there {a} bank near here?|Czy jest tu w pobliżu bank?|an,the
Let's go to {the} cinema.|Chodźmy do kina.|a,an
She's {an} honest person.|Ona jest uczciwą osobą.|a,the|Honest – nieme h, więc an.
I need {a} new phone.|Potrzebuję nowego telefonu.|an,the
It's {an} interesting book.|To ciekawa książka.|a,the
My dad is {a} pilot.|Mój tata jest pilotem.|an,the
Can I have {a} glass of water?|Mogę prosić szklankę wody?|an,the
He's {the} best player in our team.|On jest najlepszym zawodnikiem w drużynie.|a,an|Przed stopniem najwyższym: the best, the biggest.
Turn off {the} light, please.|Wyłącz światło, proszę.|a,an
It's {a} European country.|To kraj europejski.|an,the|European zaczyna się od dźwięku „j”, więc a.
`}
]);
})();
