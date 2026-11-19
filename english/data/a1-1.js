/* Etap 1 – dodatkowe słówka A1 (część 1). */
ADD("s1", [
{ id: "x1-school", t: "Szkoła", d: "Przybory, lekcje i klasa.", k: "v", i: `
classroom|sala lekcyjna|🏫
desk|ławka|🪑
blackboard|tablica|🧑‍🏫
pencil|ołówek|✏️
pen|długopis|🖊️
rubber/eraser|gumka do mazania|
ruler|linijka|📏
notebook|zeszyt|📓
book|książka|📕
schoolbag|tornister|🎒
lesson|lekcja|📖
homework|praca domowa|📝
test|sprawdzian|💯
mark/grade|ocena|🅰️
break|przerwa|🔔
pupil|uczeń|🧒
headteacher/principal|dyrektor szkoły|👔
map|mapa|🗺️
computer|komputer|💻
scissors|nożyczki|✂️
glue|klej|🧴
paper|papier|📄
page|strona|📃
question|pytanie|❓
answer|odpowiedź|💬
`},
{ id: "x1-kitchen", t: "W kuchni", d: "Naczynia, sztućce i sprzęty.", k: "v", i: `
plate|talerz|🍽️
cup|filiżanka|☕
mug|kubek|
glass|szklanka|🥃
bowl|miska|🥣
fork|widelec|🍴
knife|nóż|🔪
spoon|łyżka|🥄
teaspoon|łyżeczka|
pot|garnek|🍲
pan|patelnia|🍳
fridge|lodówka|🧊
cooker/stove|kuchenka|🔥
oven|piekarnik|
kettle|czajnik|🫖
microwave|mikrofalówka|
toaster|toster|🍞
sink|zlew|🚰
tap|kran|
bottle|butelka|🍾
jar|słoik|🫙
tin/can|puszka|🥫
napkin|serwetka|🧻
tray|taca|
dishwasher|zmywarka|
`},
{ id: "x1-veg", t: "Warzywa", d: "Od ogórka po dynię.", k: "v", i: `
cucumber|ogórek|🥒
onion|cebula|🧅
garlic|czosnek|🧄
pepper|papryka|🫑
cabbage|kapusta|🥬
lettuce|sałata|
mushroom|grzyb|🍄
corn|kukurydza|🌽
peas|groszek|🫛
beans|fasola|🫘
broccoli|brokuł|🥦
cauliflower|kalafior|
spinach|szpinak|
pumpkin|dynia|🎃
beetroot|burak|
radish|rzodkiewka|
celery|seler|
aubergine/eggplant|bakłażan|🍆
avocado|awokado|🥑
olive|oliwka|🫒
leek|por|
parsley|pietruszka|🌿
chilli|ostra papryczka|🌶️
courgette/zucchini|cukinia|
vegetables|warzywa|🥗
`},
{ id: "x1-fruit2", t: "Owoce 2", d: "Brzoskwinie, maliny, orzechy…", k: "v", i: `
peach|brzoskwinia|🍑
plum|śliwka|
apricot|morela|
pineapple|ananas|🍍
watermelon|arbuz|🍉
melon|melon|🍈
kiwi|kiwi|🥝
mango|mango|🥭
coconut|kokos|🥥
raspberry|malina|
blueberry|borówka|🫐
blackberry|jeżyna|
lime|limonka|
grapefruit|grejpfrut|
fig|figa|
date|daktyl|
nut|orzech|🥜
almond|migdał|
raisin|rodzynek|
gooseberry|agrest|
currant|porzeczka|
pomegranate|granat (owoc)|
tangerine|mandarynka|🍊
fruit|owoce|🧺
seed|pestka / nasiono|🌱
`},
{ id: "x1-food2", t: "Jedzenie 2", d: "Słodycze, przekąski i posiłki.", k: "v", i: `
chocolate|czekolada|🍫
sweets/candy|cukierki|🍬
ice cream|lody|🍦
biscuit/cookie|herbatnik / ciastko|🍪
doughnut|pączek|🍩
pancake|naleśnik|🥞
honey|miód|🍯
jam|dżem|
sugar|cukier|
crisps|chipsy|
French fries/chips|frytki|🍟
sandwich|kanapka|🥪
toast|tost|
cereal|płatki śniadaniowe|🥣
yoghurt/yogurt|jogurt|
cream|śmietana|
sausage|kiełbasa|🌭
ham|szynka|🍖
bacon|boczek|🥓
salad|sałatka|🥗
pasta|makaron|🍝
flour|mąka|
oil|olej|
breakfast|śniadanie|🍳
dinner|obiad / kolacja|🍽️
`},
{ id: "x1-furniture", t: "Meble i pokoje", d: "Szafa, lustro, schody, salon.", k: "v", i: `
sofa/couch|kanapa|🛋️
armchair|fotel|
wardrobe|szafa|
shelf|półka|
bookcase|regał na książki|📚
mirror|lustro|🪞
carpet|dywan|
curtain|zasłona|
pillow|poduszka|
blanket|koc|
sheet|prześcieradło|
clock|zegar|🕰️
picture|obraz|🖼️
wall|ściana|🧱
floor|podłoga|
ceiling|sufit|
stairs|schody|🪜
roof|dach|🏠
balcony|balkon|
hall|przedpokój|
living room|salon|
dining room|jadalnia|
toilet|toaleta|🚽
cupboard|szafka kuchenna|
drawer|szuflada|
`},
{ id: "x1-bathroom", t: "Łazienka", d: "Mydło, ręcznik, szczoteczka…", k: "v", i: `
soap|mydło|🧼
towel|ręcznik|
toothbrush|szczoteczka do zębów|🪥
toothpaste|pasta do zębów|
shampoo|szampon|🧴
shower|prysznic|🚿
bath|wanna / kąpiel|🛁
comb|grzebień|
hairbrush|szczotka do włosów|
razor|maszynka do golenia|🪒
sponge|gąbka|🧽
toilet paper|papier toaletowy|🧻
tissue|chusteczka|
washing machine|pralka|
basket|koszyk|🧺
bin|kosz na śmieci|🗑️
perfume|perfumy|
make-up|makijaż|
lipstick|szminka|💄
nail|paznokieć|💅
hair dryer|suszarka do włosów|
deodorant|dezodorant|
plaster|plaster (opatrunek)|🩹
bucket|wiadro|🪣
iron|żelazko|
`},
{ id: "x1-people", t: "Ludzie", d: "Mężczyzna, kobieta, sąsiad, kuzyn…", k: "v", i: `
man|mężczyzna|👨
woman|kobieta|👩
boy|chłopiec|👦
girl|dziewczynka|👧
friend|przyjaciel|🤝
neighbour/neighbor|sąsiad|🏘️
people|ludzie|👥
person|osoba|🧍
adult|dorosły|🧑
teenager|nastolatek|
guest|gość|🛎️
king|król|🤴
queen|królowa|👸
prince|książę|
princess|księżniczka|
uncle|wujek|
aunt|ciocia|
cousin|kuzyn / kuzynka|
nephew|bratanek / siostrzeniec|
niece|bratanica / siostrzenica|
grandson|wnuk|
granddaughter|wnuczka|
boyfriend|chłopak (partner)|
girlfriend|dziewczyna (partnerka)|
stranger|nieznajomy|
`},
{ id: "x1-wild", t: "Dzikie zwierzęta", d: "Lew, tygrys, delfin, jeż…", k: "v", i: `
lion|lew|🦁
tiger|tygrys|🐯
elephant|słoń|🐘
monkey|małpa|🐒
giraffe|żyrafa|🦒
wolf|wilk|🐺
fox|lis|🦊
deer|jeleń|🦌
snake|wąż|🐍
crocodile|krokodyl|🐊
frog|żaba|🐸
turtle|żółw|🐢
owl|sowa|🦉
eagle|orzeł|🦅
squirrel|wiewiórka|🐿️
hedgehog|jeż|🦔
camel|wielbłąd|🐫
kangaroo|kangur|🦘
penguin|pingwin|🐧
dolphin|delfin|🐬
whale|wieloryb|🐋
shark|rekin|🦈
bat|nietoperz|🦇
parrot|papuga|🦜
goat|koza|🐐
`},
{ id: "x1-small", t: "Owady i małe zwierzęta", d: "Pszczoła, pająk, chomik, kotek…", k: "v", i: `
bee|pszczoła|🐝
fly|mucha|🪰
ant|mrówka|🐜
butterfly|motyl|🦋
spider|pająk|🕷️
mosquito|komar|🦟
ladybird/ladybug|biedronka|🐞
worm|dżdżownica|🪱
snail|ślimak|🐌
beetle|chrząszcz|🪲
wasp|osa|
insect|owad|
rat|szczur|🐀
hamster|chomik|🐹
puppy|szczeniak|🐶
kitten|kotek|🐱
pony|kucyk|🐴
donkey|osioł|🫏
goose|gęś|🪿
turkey|indyk|🦃
swan|łabędź|🦢
pigeon|gołąb|🕊️
crab|krab|🦀
octopus|ośmiornica|🐙
wing|skrzydło|
`}
]);
