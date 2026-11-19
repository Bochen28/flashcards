/* Etap 1 i 2 – dodatkowe poziomy A1. */
(function () {
var CHOICE = ["en2pl", "pl2en", "listen"];
var SENT = ["order", "pl2en", "order", "en2pl", "listen"];
ADD("s1", [
{ id: "x1-daily", t: "Codzienne czynności", d: "Myć zęby, oglądać telewizję, iść spać.", k: "v", i: `
brush your teeth|myć zęby|🪥
take a shower|brać prysznic|🚿
have breakfast|jeść śniadanie|🍳
go to school|chodzić do szkoły|🏫
go to work|chodzić do pracy|💼
go home|iść do domu|🏠
go to bed|iść spać|🛏️
watch TV|oglądać telewizję|📺
listen to music|słuchać muzyki|🎧
play football|grać w piłkę|⚽
read a book|czytać książkę|📖
drink water|pić wodę|💧
ride a bike|jeździć na rowerze|🚲
drive a car|prowadzić samochód|🚗
take photos|robić zdjęcia|📷
write a letter|pisać list|✉️
sing a song|śpiewać piosenkę|🎤
draw a picture|rysować obrazek|🖍️
play the piano|grać na pianinie|🎹
swim in the sea|pływać w morzu|🏊
walk in the park|spacerować w parku|🌳
call a friend|dzwonić do przyjaciela|📞
open the door|otwierać drzwi|🚪
wash your hands|myć ręce|🧼
comb your hair|czesać włosy|💇
`},
{ id: "x1-adjbasic", t: "Jaki jest?", d: "Mokry, ciężki, słodki, głośny…", k: "v", i: `
wet|mokry|💧
dry|suchy|🏜️
light|lekki|🪶
heavy|ciężki|🏋️
soft|miękki|🧸
hard|twardy|🪨
long|długi|📏
sweet|słodki|🍬
sour|kwaśny|🍋
salty|słony|🧂
loud|głośny|📢
quiet|cichy|🤫
rich|bogaty|💰
poor|biedny|
strong|silny|💪
weak|słaby|
fat|gruby|
thin|chudy|
ugly|brzydki|
funny|zabawny|😂
angry|zły (rozzłoszczony)|😠
tired|zmęczony|😴
hungry|głodny|🍽️
thirsty|spragniony|🥤
sick|chory|🤒
`},
{ id: "x1-vehicles", t: "Pojazdy", d: "Autobus, pociąg, rakieta, wóz strażacki.", k: "v", i: `
bus|autobus|🚌
train|pociąg|🚆
plane|samolot|✈️
boat|łódka|⛵
bike|rower|🚲
car|samochód|🚗
taxi|taksówka|🚕
truck|ciężarówka|🚚
motorbike|motocykl|🏍️
tram|tramwaj|🚋
ship|statek|🚢
helicopter|helikopter|🚁
rocket|rakieta|🚀
tractor|traktor|🚜
ambulance|karetka|🚑
fire engine|wóz strażacki|🚒
police car|radiowóz|🚓
kick scooter|hulajnoga|🛴
road|droga|🛣️
bridge|most|🌉
station|stacja|🚉
airport|lotnisko|🛫
ticket|bilet|🎫
wheel|koło|🛞
traffic lights|światła na skrzyżowaniu|🚦
`},
{ id: "x1-classroom", t: "Polecenia na lekcji", d: "Otwórzcie książki, powtarzajcie, pracujcie w parach.", k: "v", ex: CHOICE, i: `
Open your books.|Otwórzcie książki.|📖
Close your books.|Zamknijcie książki.|📕
Listen.|Słuchajcie.|👂
Look at the board.|Spójrzcie na tablicę.|🧑‍🏫
Sit down, please.|Usiądźcie, proszę.|🪑
Stand up.|Wstańcie.|🧍
Be quiet, please.|Proszę o ciszę.|🤫
Repeat after me.|Powtarzajcie za mną.|🔁
Work in pairs.|Pracujcie w parach.|👫
Write your name.|Napisz swoje imię.|✍️
Read the text.|Przeczytaj tekst.|📄
Answer the questions.|Odpowiedz na pytania.|❓
Match the words.|Połącz słowa.|🔗
Fill in the gaps.|Uzupełnij luki.|✏️
Check your answers.|Sprawdź odpowiedzi.|✅
Underline the words.|Podkreśl słowa.|〰️
Put up your hand.|Podnieś rękę.|✋
Turn to page ten.|Otwórzcie na stronie dziesiątej.|🔟
Do you understand?|Rozumiecie?|🤔
Can you spell it?|Możesz to przeliterować?|🔤
What does it mean?|Co to znaczy?|💭
How do you say it in English?|Jak to się mówi po angielsku?|🇬🇧
I don't know.|Nie wiem.|🤷
I've finished.|Skończyłem.|🏁
Can I go to the toilet?|Czy mogę wyjść do toalety?|🚻
`},
{ id: "x1-weather", t: "Jaka jest pogoda?", d: "Słonecznie, pada deszcz, tęcza, bałwan.", k: "v", i: `
sunny|słonecznie|☀️
rainy|deszczowo|🌧️
cloudy|pochmurno|☁️
windy|wietrznie|💨
snowy|śnieżnie|❄️
foggy|mgliście|🌫️
hot|gorąco|🥵
cold|zimno|🥶
warm|ciepło|🌡️
cool|chłodno|
stormy|burzowo|⛈️
It's raining.|Pada deszcz.|☔
It's snowing.|Pada śnieg.|🌨️
What's the weather like?|Jaka jest pogoda?|🤔
umbrella|parasol|☂️
rainbow|tęcza|🌈
sun|słońce|🌞
cloud|chmura|⛅
wind|wiatr|🌬️
snowman|bałwan|⛄
lightning|błyskawica|⚡
ice|lód|🧊
puddle|kałuża|
weather|pogoda|🌦️
thermometer|termometr|
`},
{ id: "x1-toys", t: "Zabawki i zabawy", d: "Lalka, latawiec, klocki, chowany.", k: "v", i: `
doll|lalka|🪆
teddy bear|pluszowy miś|🧸
kite|latawiec|🪁
blocks|klocki|🧱
train set|kolejka (zabawka)|🚂
toy car|samochodzik|🏎️
bubbles|bańki mydlane|🫧
crayons|kredki|🖍️
paint|farbki|🎨
sandpit/sandbox|piaskownica|
skipping rope|skakanka|
game|gra|🎲
video game|gra wideo|🕹️
playground|plac zabaw|🛝
hide-and-seek|zabawa w chowanego|🙈
tag|berek|🏃
drum|bębenek|🥁
whistle|gwizdek|
marbles|kulki do gry|
jigsaw|puzzle|🧩
colouring book/coloring book|kolorowanka|📒
play|bawić się|🤸
toy shop|sklep z zabawkami|🏪
favourite toy/favorite toy|ulubiona zabawka|⭐
sticker|naklejka|
`},
{ id: "x1-qa", t: "Pytania i odpowiedzi", d: "Ile masz lat? Umiesz pływać? Tak, umiem.", k: "v", ex: CHOICE, i: `
How old are you?|Ile masz lat?|🎂
I'm ten years old.|Mam dziesięć lat.|🔟
Where do you live?|Gdzie mieszkasz?|🏠
I live in Poland.|Mieszkam w Polsce.|📍
Do you have a pet?|Masz zwierzątko?|🐶
Yes, I do.|Tak (mam).|✅
No, I don't.|Nie (nie mam).|❌
What's your favourite colour?|Jaki jest twój ulubiony kolor?|🎨
My favourite colour is blue.|Mój ulubiony kolor to niebieski.|🟦
Can you swim?|Umiesz pływać?|🏊
Yes, I can.|Tak, umiem.|👍
No, I can't.|Nie, nie umiem.|👎
What time is it?|Która godzina?|⏰
It's three o'clock.|Jest trzecia.|🕒
What day is it today?|Jaki dziś dzień?|📅
It's Monday.|Jest poniedziałek.|
Who is this?|Kto to jest?|🧑
This is my mum.|To moja mama.|👩
What's this?|Co to jest?|❓
It's a pencil.|To ołówek.|✏️
Where is the cat?|Gdzie jest kot?|🐱
It's under the table.|Jest pod stołem.|
I'm hungry.|Jestem głodny.|🍽️
Let's play!|Pobawmy się!|🎉
Thank you very much.|Bardzo dziękuję.|🙏
`},
{ id: "x1-time", t: "Dzień i czas", d: "Rano, wieczorem, teraz, później, zawsze.", k: "v", i: `
morning|rano|🌅
afternoon|popołudnie|🌇
evening|wieczór|🌆
night|noc|🌙
day|dzień|☀️
today|dzisiaj|📅
tomorrow|jutro|➡️
yesterday|wczoraj|⬅️
now|teraz|⏱️
later|później|⏳
early|wcześnie|🐓
late|późno|🦉
hour|godzina|🕐
minute|minuta|⏲️
clock|zegar|🕰️
watch|zegarek|⌚
week|tydzień|🗓️
month|miesiąc|📆
year|rok|🎆
birthday|urodziny|🎂
breakfast time|pora śniadania|🥣
lunchtime|pora obiadu|🍽️
bedtime|pora snu|🛏️
always|zawsze|♾️
never|nigdy|🚫
`}
]);
ADD("s2", [
{ id: "x2-qwords", t: "Pytania: who, what, where…", d: "Kto, co, gdzie, kiedy, ile, dlaczego?", k: "f", i: `
{Where} is my bag?|Gdzie jest moja torba?|Who,What
{Who} is that boy?|Kim jest ten chłopiec?|What,Where
{What} is this?|Co to jest?|Who,How
{How} are you?|Jak się masz?|What,Who
{How old} are you?|Ile masz lat?|How many,What
{When} is your birthday?|Kiedy są twoje urodziny?|Where,Who
{What colour} is your car?|Jakiego koloru jest twój samochód?|How colour,Which is
{How many} sisters have you got?|Ile masz sióstr?|How much,How old
{Where} do you live?|Gdzie mieszkasz?|What,When
{Why} are you sad?|Dlaczego jesteś smutny?|Who,What
{What time} is it?|Która godzina?|How time,When time
{Who} is your teacher?|Kto jest twoim nauczycielem?|Where,How
{How} do you spell it?|Jak to się pisze?|What,Who
{What} do you want?|Czego chcesz?|Who,Where
{Where} are you from?|Skąd jesteś?|What,Who
{How much} is it?|Ile to kosztuje?|How many,What
{Which} one do you like?|Który ci się podoba?|Who,Where
{What} is your favourite food?|Jakie jest twoje ulubione jedzenie?|Who,How
{Where} are my keys?|Gdzie są moje klucze?|When,How
{Who} is it?|Kto to?|What,Where
`},
{ id: "x2-jobs-a1", t: "Zawody A1", d: "Weterynarz, fryzjer, listonosz, piekarz.", k: "v", i: `
vet|weterynarz|🐾
dentist|dentysta|🦷
singer|piosenkarz|🎤
actor|aktor|🎭
artist|artysta|🎨
baker|piekarz|🥖
hairdresser|fryzjer|💇
postman/mail carrier|listonosz|📬
mechanic|mechanik|🔧
scientist|naukowiec|🔬
cleaner|sprzątacz|🧹
secretary|sekretarka|🗂️
receptionist|recepcjonista|🛎️
gardener|ogrodnik|🌻
dancer|tancerz|💃
writer|pisarz|✍️
photographer|fotograf|📷
astronaut|astronauta|🧑‍🚀
footballer|piłkarz|⚽
butcher|rzeźnik|🥩
fisherman|rybak|🎣
tailor|krawiec|🧵
soldier|żołnierz|🪖
musician|muzyk|🎻
programmer|programista|💻
`},
{ id: "x2-sent5", t: "Zdania: have got", d: "Mam, masz, ma – w całych zdaniach.", k: "o", ex: SENT, i: `
I have got a new bike.|Mam nowy rower.
She has got blue eyes.|Ona ma niebieskie oczy.
We have got two cats.|Mamy dwa koty.
He hasn't got a car.|On nie ma samochodu.
Have you got a pen?|Masz długopis?
They have got a big house.|Oni mają duży dom.
My dog has got a long tail.|Mój pies ma długi ogon.
I haven't got any brothers.|Nie mam braci.
Has she got a sister?|Czy ona ma siostrę?
We haven't got time.|Nie mamy czasu.
You have got a nice smile.|Masz ładny uśmiech.
Our school has got a big gym.|Nasza szkoła ma dużą salę gimnastyczną.
I have got a headache.|Boli mnie głowa.
Have they got children?|Czy oni mają dzieci?
My grandma has got a garden.|Moja babcia ma ogród.
He has got short hair.|On ma krótkie włosy.
I've got an idea!|Mam pomysł!
She hasn't got a phone.|Ona nie ma telefonu.
We have got a lot of homework.|Mamy dużo pracy domowej.
Have you got any questions?|Macie jakieś pytania?
`},
{ id: "x2-moves", t: "Czasowniki ruchu A1", d: "Biegać, skakać, rzucać, łapać.", k: "v", i: `
run|biegać|🏃
jump|skakać|🦘
walk|chodzić|🚶
swim|pływać|🏊
climb|wspinać się|🧗
fly|latać|🕊️
dance|tańczyć|💃
sit|siedzieć|🪑
stand|stać|🧍
sleep|spać|😴
ride|jeździć (na rowerze)|🚴
throw|rzucać|🤾
catch|łapać|🧤
kick|kopać (piłkę)|⚽
push|pchać|
pull|ciągnąć|
carry|nieść|📦
fall|upadać|
turn|skręcać|🔄
stop|zatrzymywać się|🛑
wait|czekać|⏳
come|przychodzić|👋
lie down|kłaść się|🛌
get up|wstawać|⏰
clap|klaskać|👏
`},
{ id: "x2-sent6", t: "Zdania: can i can't", d: "Umiem, potrafię, mogę, nie wolno.", k: "o", ex: SENT, i: `
I can swim.|Umiem pływać.
She can speak French.|Ona umie mówić po francusku.
He can't drive.|On nie umie prowadzić samochodu.
Can you help me?|Możesz mi pomóc?
We can see the sea.|Widzimy morze.
My son can ride a bike.|Mój syn umie jeździć na rowerze.
Birds can fly.|Ptaki potrafią latać.
I can't find my keys.|Nie mogę znaleźć kluczy.
Can I open the window?|Czy mogę otworzyć okno?
You can sit here.|Możesz tu usiąść.
They can't come today.|Oni nie mogą dziś przyjść.
Can your sister cook?|Czy twoja siostra umie gotować?
I can hear music.|Słyszę muzykę.
Fish can't walk.|Ryby nie potrafią chodzić.
Can we go home now?|Czy możemy już iść do domu?
My dad can play the guitar.|Mój tata umie grać na gitarze.
You can't smoke here.|Nie wolno tu palić.
Can you spell your name?|Możesz przeliterować swoje imię?
I can count to a hundred.|Umiem liczyć do stu.
She can run very fast.|Ona potrafi biegać bardzo szybko.
`},
{ id: "x2-feelverbs", t: "Czasowniki: zmysły i uczucia", d: "Widzieć, słyszeć, kochać, płakać.", k: "v", i: `
see|widzieć|👀
hear|słyszeć|👂
smell|wąchać|👃
taste|smakować|👅
touch|dotykać|✋
look|patrzeć|🔍
listen|słuchać|🎧
feel|czuć|❤️
think|myśleć|🤔
know|wiedzieć|💡
want|chcieć|🙏
need|potrzebować|
like|lubić|👍
love|kochać|💖
hate|nienawidzić|😡
laugh|śmiać się|😂
cry|płakać|😭
smile|uśmiechać się|😊
shout|krzyczeć|📣
talk|rozmawiać|💬
say|powiedzieć|🗨️
ask|pytać|❓
answer|odpowiadać|🙋
help|pomagać|🆘
play|grać|🎲
`},
{ id: "x2-sent7", t: "Zdania: there is, there are", d: "Co gdzie jest – w całych zdaniach.", k: "o", ex: SENT, i: `
There is a cat in the kitchen.|W kuchni jest kot.
There are two beds in my room.|W moim pokoju są dwa łóżka.
There isn't a park near my house.|Blisko mojego domu nie ma parku.
Is there a bank here?|Czy jest tu bank?
There are many trees in the garden.|W ogrodzie jest dużo drzew.
There aren't any eggs.|Nie ma jajek.
Are there any shops in your street?|Czy na twojej ulicy są jakieś sklepy?
There is a picture on the wall.|Na ścianie wisi obraz.
There is some milk in the fridge.|W lodówce jest trochę mleka.
There are twenty students in my class.|W mojej klasie jest dwudziestu uczniów.
There is a big tree behind the school.|Za szkołą jest duże drzewo.
Is there a toilet on this floor?|Czy na tym piętrze jest toaleta?
There are no clouds in the sky.|Na niebie nie ma chmur.
There is a lot of snow today.|Dziś jest dużo śniegu.
There are three bedrooms in our flat.|W naszym mieszkaniu są trzy sypialnie.
How many people are there?|Ile jest osób?
There is a bus stop opposite the school.|Naprzeciwko szkoły jest przystanek.
There isn't any sugar in my tea.|W mojej herbacie nie ma cukru.
There are some apples on the table.|Na stole są jabłka.
There is a dog in the car.|W samochodzie jest pies.
`},
{ id: "x2-pets", t: "Zwierzęta domowe i z farmy", d: "Cielę, kogut, świnka morska, smycz.", k: "v", i: `
calf|cielę|🐄
lamb|jagnię|🐑
chick|kurczątko|🐥
piglet|prosiaczek|🐖
foal|źrebię|🐎
rooster/cockerel|kogut|🐓
hen|kura|🐔
bull|byk|🐂
goldfish|złota rybka|🐠
tortoise|żółw lądowy|🐢
guinea pig|świnka morska|🐹
budgie|papużka|🦜
ferret|fretka|
lizard|jaszczurka|🦎
sheepdog|owczarek|🐕
kennel|buda dla psa|
tail|ogon|
feathers|pióra|🪶
barn|stodoła|
stable|stajnia|
pet shop|sklep zoologiczny|🏪
fish tank|akwarium|
bird cage|klatka dla ptaka|
dog lead/dog leash|smycz|
hay|siano|
`},
{ id: "x2-sent8", t: "Zdania: lubię i robię", d: "Present Simple w prostych zdaniach.", k: "o", ex: SENT, i: `
I like chocolate.|Lubię czekoladę.
She likes dogs.|Ona lubi psy.
We don't like rain.|Nie lubimy deszczu.
Do you like coffee?|Lubisz kawę?
He doesn't like fish.|On nie lubi ryb.
My mum loves flowers.|Moja mama kocha kwiaty.
I play football on Sundays.|W niedziele gram w piłkę.
She lives in a small town.|Ona mieszka w małym miasteczku.
We go to school by bus.|Jeździmy do szkoły autobusem.
My brother works in a hotel.|Mój brat pracuje w hotelu.
Does she speak English?|Czy ona mówi po angielsku?
I don't eat meat.|Nie jem mięsa.
They watch TV every evening.|Oglądają telewizję każdego wieczoru.|Every evening they watch TV.
He reads a lot.|On dużo czyta.
Do they live here?|Czy oni tu mieszkają?
My cat sleeps all day.|Mój kot śpi cały dzień.
I get up at six.|Wstaję o szóstej.
We have lunch at school.|Jemy obiad w szkole.
She doesn't work on Saturday.|Ona nie pracuje w sobotę.
What do you like?|Co lubisz?
`}
]);
})();
