/* Etap 1 – pierwsze słowa (A1). Rzeczowniki z rodzajnikiem: od razu uczymy rodzaju. */
ADD("s1", [
{ id: "x1-colors", t: "Kolory", d: "Rojo, azul, verde… Kolor stoi po rzeczowniku: un coche rojo.", k: "v", i: `
rojo|czerwony|🔴
azul|niebieski|🔵
verde|zielony|🟢
amarillo|żółty|🟡
naranja|pomarańczowy|🟠
morado|fioletowy|🟣
negro|czarny|⚫
blanco|biały|⚪
gris|szary
marrón|brązowy|🟤
rosa|różowy|🩷
azul claro|jasnoniebieski
verde oscuro|ciemnozielony
dorado|złoty
plateado|srebrny
un coche rojo|czerwony samochód|🚗
una casa blanca|biały dom|🏠
el cielo azul|niebieskie niebo
¿De qué color es?|Jakiego to jest koloru?
Mi color favorito es el verde.|Mój ulubiony kolor to zielony.
`},
{ id: "x1-family", t: "Rodzina", d: "El padre, la madre, los padres = rodzice!", k: "v", i: `
la familia|rodzina|👪
el padre|ojciec|👨
la madre|matka|👩
los padres|rodzice
el hijo|syn|👦
la hija|córka|👧
los hijos|dzieci (synowie i córki)
el hermano|brat
la hermana|siostra
el abuelo|dziadek|👴
la abuela|babcia|👵
los abuelos|dziadkowie
el tío|wujek
la tía|ciocia
el primo|kuzyn
la prima|kuzynka
el marido|mąż
la mujer|żona (też: kobieta)
el novio|chłopak (narzeczony)
la novia|dziewczyna (narzeczona)
el nieto|wnuk
la nieta|wnuczka
el bebé|niemowlę|👶
papá|tata
mamá|mama
`},
{ id: "x1-animals", t: "Zwierzęta", d: "El perro, el gato, el caballo…", k: "v", i: `
el perro|pies|🐕
el gato|kot|🐈
el caballo|koń|🐎
la vaca|krowa|🐄
el cerdo|świnia|🐖
la oveja|owca|🐑
la gallina|kura|🐔
el pájaro|ptak|🐦
el pez|ryba|🐟
el ratón|mysz|🐭
el conejo|królik|🐇
el oso|niedźwiedź|🐻
el lobo|wilk|🐺
el zorro|lis|🦊
el león|lew|🦁
el tigre|tygrys|🐯
el elefante|słoń|🐘
el mono|małpa|🐒
la serpiente|wąż|🐍
la tortuga|żółw|🐢
la rana|żaba|🐸
el pato|kaczka|🦆
la abeja|pszczoła|🐝
la mariposa|motyl|🦋
el toro|byk|🐂
`},
{ id: "x1-food", t: "Jedzenie", d: "El pan, el queso, el arroz… i hiszpańskie klasyki.", k: "v", i: `
el pan|chleb|🍞
el queso|ser|🧀
la mantequilla|masło|🧈
el huevo|jajko|🥚
el jamón|szynka|🥓
el arroz|ryż|🍚
la pasta|makaron|🍝
la carne|mięso|🥩
el pollo|kurczak|🍗
el pescado|ryba (jedzenie)|🐟
la sopa|zupa|🍲
la ensalada|sałatka|🥗
el bocadillo|kanapka (bułka)|🥪
la pizza|pizza|🍕
la tortilla|tortilla (omlet z ziemniakami)|🥘
la paella|paella|🥘
el azúcar|cukier
la sal|sól|🧂
el aceite|olej (oliwa)
el chocolate|czekolada|🍫
el helado|lody|🍦
la galleta|ciastko|🍪
el pastel|ciasto (tort)|🎂
el desayuno|śniadanie
la comida|obiad (też: jedzenie)
`},
{ id: "x1-fruitveg", t: "Owoce i warzywa", d: "La manzana, el plátano, la patata…", k: "v", i: `
la manzana|jabłko|🍎
la pera|gruszka|🍐
el plátano|banan|🍌
la naranja|pomarańcza|🍊
el limón|cytryna|🍋
la fresa|truskawka|🍓
las uvas|winogrona|🍇
la sandía|arbuz|🍉
el melocotón|brzoskwinia|🍑
la cereza|wiśnia (czereśnia)|🍒
la piña|ananas|🍍
el tomate|pomidor|🍅
la patata|ziemniak|🥔
la zanahoria|marchewka|🥕
la cebolla|cebula|🧅
el ajo|czosnek|🧄
el pepino|ogórek|🥒
la lechuga|sałata|🥬
el pimiento|papryka|🫑
el maíz|kukurydza|🌽
las judías|fasola
los guisantes|groszek
el champiñón|pieczarka|🍄
la fruta|owoc (owoce)
la verdura|warzywo (warzywa)
`},
{ id: "x1-drinks", t: "Napoje", d: "El agua, el café, la cerveza… Uwaga: el agua jest rodzaju żeńskiego!", k: "v", i: `
el agua|woda|💧
el café|kawa|☕
el té|herbata|🍵
la leche|mleko|🥛
el zumo|sok|🧃
el zumo de naranja|sok pomarańczowy
la cerveza|piwo|🍺
el vino|wino|🍷
el vino tinto|czerwone wino
el vino blanco|białe wino
el refresco|napój gazowany|🥤
el agua con gas|woda gazowana
el agua sin gas|woda niegazowana
el café con leche|kawa z mlekiem
el cortado|kawa z odrobiną mleka
el chocolate caliente|gorąca czekolada
el hielo|lód (kostki lodu)|🧊
la botella|butelka|🍾
el vaso|szklanka|🥛
la taza|filiżanka|☕
Un café, por favor.|Kawę, proszę.
¿Qué quieres beber?|Co chcesz do picia?
Tengo sed.|Chce mi się pić.
¡Salud!|Na zdrowie!|🥂
`},
{ id: "x1-body", t: "Ciało", d: "La cabeza, la mano, el pie… Uwaga: la mano jest rodzaju żeńskiego.", k: "v", i: `
la cabeza|głowa
el pelo|włosy
la cara|twarz
el ojo|oko|👁️
la nariz|nos|👃
la boca|usta|👄
la oreja|ucho|👂
el diente|ząb|🦷
el cuello|szyja
el hombro|ramię (bark)
el brazo|ręka (ramię)|💪
la mano|dłoń (ręka)|✋
el dedo|palec
la espalda|plecy
el pecho|klatka piersiowa
el estómago|brzuch (żołądek)
la pierna|noga|🦵
la rodilla|kolano
el pie|stopa|🦶
el corazón|serce|❤️
la piel|skóra
la lengua|język (w ustach)|👅
el labio|warga
la uña|paznokieć
el cuerpo|ciało
`},
{ id: "x1-home", t: "Dom", d: "La casa, el piso, la cocina… El piso = mieszkanie (w Hiszpanii).", k: "v", i: `
la casa|dom|🏠
el piso|mieszkanie (też: piętro)|🏢
la habitación|pokój
el dormitorio|sypialnia|🛏️
el salón|salon (pokój dzienny)|🛋️
la cocina|kuchnia
el baño|łazienka|🛁
el comedor|jadalnia
el pasillo|korytarz
el jardín|ogród|🌷
la terraza|taras
el balcón|balkon
la puerta|drzwi|🚪
la ventana|okno|🪟
la pared|ściana
el suelo|podłoga
el techo|sufit (dach)
la escalera|schody|🪜
el ascensor|winda
la llave|klucz|🔑
la mesa|stół
la silla|krzesło|🪑
la cama|łóżko|🛏️
el sofá|kanapa|🛋️
el garaje|garaż
`},
{ id: "x1-clothes", t: "Ubrania", d: "La camisa, los vaqueros, los zapatos…", k: "v", i: `
la ropa|ubrania
la camisa|koszula|👔
la camiseta|koszulka (T-shirt)|👕
los pantalones|spodnie|👖
los vaqueros|dżinsy
la falda|spódnica
el vestido|sukienka|👗
el jersey|sweter
la chaqueta|kurtka (marynarka)|🧥
el abrigo|płaszcz
los zapatos|buty|👞
las zapatillas|tenisówki (kapcie)|👟
las botas|kozaki (buty z cholewką)|🥾
los calcetines|skarpetki|🧦
el sombrero|kapelusz|👒
la gorra|czapka z daszkiem|🧢
la bufanda|szalik|🧣
los guantes|rękawiczki|🧤
el bolso|torebka|👜
la mochila|plecak|🎒
el pijama|piżama
el bañador|strój kąpielowy|🩱
el cinturón|pasek
las gafas|okulary|👓
el paraguas|parasol|☂️
`},
{ id: "x1-school", t: "Szkoła", d: "El colegio, el libro, el cuaderno…", k: "v", i: `
el colegio|szkoła (podstawowa)|🏫
la escuela|szkoła
el instituto|liceum
la universidad|uniwersytet|🎓
la clase|lekcja (klasa)
el profesor|nauczyciel|👨‍🏫
la profesora|nauczycielka|👩‍🏫
el alumno|uczeń
el estudiante|student
el libro|książka|📕
el cuaderno|zeszyt|📓
el bolígrafo|długopis|🖊️
el lápiz|ołówek|✏️
la goma|gumka
la regla|linijka|📏
la mochila|plecak|🎒
la pizarra|tablica
el ordenador|komputer (w Hiszpanii)|💻
el examen|egzamin|📝
los deberes|praca domowa
la pregunta|pytanie|❓
la respuesta|odpowiedź
la nota|ocena
el recreo|przerwa
el diccionario|słownik|📖
`},
{ id: "x1-city", t: "Miasto", d: "La calle, la plaza, el banco… Gdzie co jest w mieście.", k: "v", i: `
la ciudad|miasto|🏙️
el pueblo|wieś (miasteczko)
la calle|ulica
la plaza|plac
el parque|park|🌳
el banco|bank (też: ławka)|🏦
la tienda|sklep
el supermercado|supermarket|🛒
el mercado|targ
la farmacia|apteka|💊
el hospital|szpital|🏥
la iglesia|kościół|⛪
el museo|muzeum|🏛️
el cine|kino|🎬
el teatro|teatr|🎭
el restaurante|restauracja|🍽️
el bar|bar
la cafetería|kawiarnia|☕
el hotel|hotel|🏨
la estación|stacja (dworzec)|🚉
el aeropuerto|lotnisko|✈️
la playa|plaża|🏖️
la biblioteca|biblioteka|📚
el ayuntamiento|ratusz (urząd miasta)
la comisaría|komisariat policji|🚓
`},
{ id: "x1-transport", t: "Transport", d: "El coche, el autobús, el tren… Ir en coche = jechać samochodem.", k: "v", i: `
el coche|samochód|🚗
el autobús|autobus|🚌
el tren|pociąg|🚆
el metro|metro|🚇
el avión|samolot|✈️
el barco|statek|🚢
la bicicleta|rower|🚲
la moto|motocykl|🏍️
el taxi|taksówka|🚕
el camión|ciężarówka|🚚
el tranvía|tramwaj|🚊
a pie|pieszo|🚶
en coche|samochodem
en tren|pociągiem
en avión|samolotem
el billete|bilet|🎫
la parada|przystanek|🚏
el andén|peron
la salida|wyjście (odjazd)
la llegada|przyjazd (przylot)
el conductor|kierowca
el pasajero|pasażer
el semáforo|sygnalizacja świetlna|🚦
la gasolinera|stacja benzynowa|⛽
el aparcamiento|parking|🅿️
`},
{ id: "x1-days", t: "Dni tygodnia", d: "Lunes, martes… Piszemy je małą literą! El lunes = w poniedziałek.", k: "v", i: `
el lunes|poniedziałek
el martes|wtorek
el miércoles|środa
el jueves|czwartek
el viernes|piątek
el sábado|sobota
el domingo|niedziela
la semana|tydzień
el fin de semana|weekend
hoy|dzisiaj
mañana|jutro
ayer|wczoraj
pasado mañana|pojutrze
anteayer|przedwczoraj
por la mañana|rano
por la tarde|po południu
por la noche|wieczorem (w nocy)
el día|dzień
la noche|noc
el lunes por la mañana|w poniedziałek rano
los lunes|w poniedziałki
todos los días|codziennie
¿Qué día es hoy?|Jaki dziś dzień?
Hoy es viernes.|Dziś jest piątek.
`},
{ id: "x1-months", t: "Miesiące i pory roku", d: "Enero, febrero… też małą literą. La primavera, el verano…", k: "v", i: `
enero|styczeń
febrero|luty
marzo|marzec
abril|kwiecień
mayo|maj
junio|czerwiec
julio|lipiec
agosto|sierpień
septiembre|wrzesień
octubre|październik
noviembre|listopad
diciembre|grudzień
el mes|miesiąc
el año|rok
la primavera|wiosna|🌸
el verano|lato|☀️
el otoño|jesień|🍂
el invierno|zima|❄️
en verano|latem
en enero|w styczniu
la Navidad|Boże Narodzenie|🎄
la Semana Santa|Wielkanoc (Wielki Tydzień)
el cumpleaños|urodziny|🎂
¡Feliz cumpleaños!|Wszystkiego najlepszego!
¡Feliz Navidad!|Wesołych Świąt!
`},
{ id: "x1-weather", t: "Pogoda", d: "Hace sol, hace frío, llueve… Pogodę opisujemy czasownikiem hacer.", k: "v", i: `
el tiempo|pogoda (też: czas)
Hace sol.|Świeci słońce.|☀️
Hace calor.|Jest gorąco.|🥵
Hace frío.|Jest zimno.|🥶
Hace viento.|Wieje wiatr.|💨
Hace buen tiempo.|Jest ładna pogoda.
Hace mal tiempo.|Jest brzydka pogoda.
Llueve.|Pada deszcz.|🌧️
Nieva.|Pada śnieg.|🌨️
Está nublado.|Jest pochmurno.|☁️
la lluvia|deszcz
la nieve|śnieg|❄️
el sol|słońce|☀️
la nube|chmura|☁️
el viento|wiatr
la tormenta|burza|⛈️
la niebla|mgła|🌫️
el arco iris|tęcza|🌈
la temperatura|temperatura|🌡️
el grado|stopień
Estamos a veinte grados.|Jest dwadzieścia stopni.
¿Qué tiempo hace?|Jaka jest pogoda?
caluroso|upalny
húmedo|wilgotny
seco|suchy
`},
{ id: "x1-jobs", t: "Zawody", d: "El médico, la médica… Zawód często ma formę męską i żeńską.", k: "v", i: `
el médico|lekarz|🩺
la médica|lekarka
el enfermero|pielęgniarz
la enfermera|pielęgniarka
el profesor|nauczyciel
la profesora|nauczycielka
el camarero|kelner
la camarera|kelnerka
el cocinero|kucharz|🧑‍🍳
el policía|policjant|👮
el bombero|strażak|🧑‍🚒
el abogado|prawnik (adwokat)
el ingeniero|inżynier
el arquitecto|architekt
el periodista|dziennikarz
el dependiente|sprzedawca
el conductor|kierowca
el mecánico|mechanik|🔧
el peluquero|fryzjer|💇
el cantante|piosenkarz|🎤
el actor|aktor
la actriz|aktorka
el estudiante|student
el jefe|szef
¿A qué te dedicas?|Czym się zajmujesz?
`}
]);
