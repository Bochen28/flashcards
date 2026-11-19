/* Etap 3 – słownictwo codzienne (A1–A2). */
(function () {
var CHOICE = ["en2pl", "pl2en", "listen"];
ADD("s3", [
{ id: "x3-shopping", t: "Zakupy", d: "¿Cuánto cuesta? La talla, el probador, rebajas.", k: "v", i: `
la tienda|sklep
el centro comercial|centrum handlowe
el precio|cena
barato|tani
caro|drogi
las rebajas|wyprzedaż
la talla|rozmiar (ubrania)
el número|rozmiar (butów)
el probador|przymierzalnia
probarse|przymierzać
la caja|kasa
pagar en efectivo|płacić gotówką
pagar con tarjeta|płacić kartą
el recibo|paragon
la bolsa|torba (reklamówka)
el cliente|klient
el dependiente|sprzedawca
abierto|otwarty
cerrado|zamknięty
el descuento|zniżka
¿Cuánto cuesta?|Ile kosztuje?
¿Cuánto es?|Ile płacę?
Me lo llevo.|Wezmę to.
Solo estoy mirando.|Tylko się rozglądam.
¿Tiene una talla más grande?|Ma Pan większy rozmiar?
`},
{ id: "x3-restaurant", t: "W restauracji", d: "La carta, el camarero, la cuenta…", k: "v", i: `
la carta|karta dań
el menú del día|zestaw dnia
el camarero|kelner
la mesa|stolik
reservar una mesa|zarezerwować stolik
el primer plato|pierwsze danie
el segundo plato|drugie danie
el postre|deser
la bebida|napój
la cuenta|rachunek
la propina|napiwek
las tapas|tapas (przekąski)
la ración|porcja
el tenedor|widelec
el cuchillo|nóż
la cuchara|łyżka
el plato|talerz
la servilleta|serwetka
Para mí, la sopa.|Dla mnie zupa.
¿Qué me recomienda?|Co Pan poleca?
La cuenta, por favor.|Rachunek, proszę.
Una mesa para dos, por favor.|Stolik dla dwóch osób, proszę.
¿Está incluido el servicio?|Czy obsługa jest wliczona?
Soy vegetariano.|Jestem wegetarianinem.
¡Está riquísimo!|Przepyszne!
`},
{ id: "x3-health", t: "U lekarza", d: "Me duele la cabeza. Tengo fiebre.", k: "v", i: `
el médico|lekarz
el hospital|szpital
el centro de salud|przychodnia
la farmacia|apteka
la cita|wizyta (umówione spotkanie)
la receta|recepta
la pastilla|tabletka
el jarabe|syrop
la fiebre|gorączka
la tos|kaszel
el resfriado|przeziębienie
la gripe|grypa
el dolor|ból
el dolor de cabeza|ból głowy
la alergia|alergia
estar enfermo|być chorym
Me duele la cabeza.|Boli mnie głowa.
Me duelen los pies.|Bolą mnie stopy.
Tengo fiebre.|Mam gorączkę.
Estoy resfriado.|Jestem przeziębiony.
Tengo tos.|Mam kaszel.
¿Qué le pasa?|Co Panu dolega?
Necesito un médico.|Potrzebuję lekarza.
la urgencia|pogotowie (SOR)
la ambulancia|karetka
`},
{ id: "x3-work", t: "Praca i biuro", d: "El trabajo, la oficina, el sueldo…", k: "v", i: `
el trabajo|praca
la oficina|biuro
la empresa|firma
el jefe|szef
el compañero|kolega z pracy
el sueldo|pensja
la reunión|zebranie
el horario|godziny pracy (rozkład)
trabajar a tiempo completo|pracować na pełny etat
trabajar a media jornada|pracować na pół etatu
el contrato|umowa
el cliente|klient
el proyecto|projekt
el ordenador|komputer
la impresora|drukarka
el correo electrónico|e-mail
la llamada|rozmowa telefoniczna
las vacaciones|urlop (wakacje)
estar en paro|być bezrobotnym
buscar trabajo|szukać pracy
la entrevista|rozmowa kwalifikacyjna
el currículum|CV
trabajar desde casa|pracować z domu
el despacho|gabinet
la pausa para el café|przerwa na kawę
`},
{ id: "x3-internet", t: "Komputer i internet", d: "El móvil, la contraseña, descargar…", k: "v", i: `
el móvil|komórka (telefon)
el ordenador portátil|laptop
la pantalla|ekran
el teclado|klawiatura
el ratón|myszka
la contraseña|hasło
el usuario|użytkownik
la página web|strona internetowa
la aplicación|aplikacja
el correo|poczta (e-mail)
el mensaje|wiadomość
descargar|pobierać
subir una foto|wrzucić zdjęcie
buscar en internet|szukać w internecie
la red social|sieć społecznościowa
el enlace|link
el archivo|plik
guardar|zapisywać
borrar|kasować
enviar|wysyłać
la batería|bateria
cargar el móvil|ładować telefon
el wifi|wi-fi
conectarse|łączyć się
¿Cuál es la contraseña del wifi?|Jakie jest hasło do wi-fi?
`},
{ id: "x3-road", t: "Samochód i droga", d: "Conducir, aparcar, la autopista…", k: "v", i: `
conducir|prowadzić (samochód)
aparcar|parkować
el carné de conducir|prawo jazdy
la carretera|droga (szosa)
la autopista|autostrada
el atasco|korek
el cruce|skrzyżowanie
la rotonda|rondo
girar a la derecha|skręcić w prawo
girar a la izquierda|skręcić w lewo
seguir recto|jechać prosto
la gasolina|benzyna
el aparcamiento|parking
el peaje|opłata za autostradę
el accidente|wypadek
la multa|mandat
el cinturón de seguridad|pas bezpieczeństwa
el volante|kierownica
la rueda|koło
el freno|hamulec
el motor|silnik
alquilar un coche|wynająć samochód
la velocidad|prędkość
el paso de peatones|przejście dla pieszych
la señal|znak
`},
{ id: "x3-countries", t: "Kraje i narodowości", d: "Polonia – polaco, España – español. Narodowości piszemy małą literą.", k: "v", i: `
Polonia|Polska
polaco|Polak (polski)
polaca|Polka (polska)
España|Hiszpania
español|Hiszpan (hiszpański)
española|Hiszpanka
Alemania|Niemcy
alemán|Niemiec (niemiecki)
Francia|Francja
francés|Francuz (francuski)
Italia|Włochy
italiano|Włoch (włoski)
Inglaterra|Anglia
inglés|Anglik (angielski)
Estados Unidos|Stany Zjednoczone
estadounidense|Amerykanin
México|Meksyk
mexicano|Meksykanin
Argentina|Argentyna
argentino|Argentyńczyk
Portugal|Portugalia
portugués|Portugalczyk (portugalski)
Ucrania|Ukraina
ucraniano|Ukrainiec (ukraiński)
el idioma|język
`},
{ id: "x3-when", t: "Kiedy? Jak często?", d: "A veces, a menudo, una vez a la semana…", k: "v", i: `
siempre|zawsze
casi siempre|prawie zawsze
a menudo|często
a veces|czasami
casi nunca|prawie nigdy
nunca|nigdy
todos los días|codziennie
cada semana|co tydzień
una vez a la semana|raz w tygodniu
dos veces al mes|dwa razy w miesiącu
los fines de semana|w weekendy
por la mañana|rano
al mediodía|w południe
por la tarde|po południu
por la noche|wieczorem (w nocy)
de vez en cuando|od czasu do czasu
normalmente|zazwyczaj
antes|wcześniej (przedtem)
después|potem
esta mañana|dziś rano
esta noche|dziś wieczorem
la semana que viene|w przyszłym tygodniu
el año pasado|w zeszłym roku
hace dos días|dwa dni temu
dentro de una hora|za godzinę
`},
{ id: "x3-holiday", t: "Wakacje i podróże", d: "El viaje, la maleta, el pasaporte…", k: "v", i: `
las vacaciones|wakacje
el viaje|podróż
viajar|podróżować
la maleta|walizka
el equipaje|bagaż
el pasaporte|paszport
el billete de ida y vuelta|bilet w obie strony
el hotel|hotel
el albergue|schronisko (hostel)
la habitación doble|pokój dwuosobowy
la reserva|rezerwacja
el turista|turysta
la oficina de turismo|informacja turystyczna
el mapa|mapa
la playa|plaża
la montaña|góry
tomar el sol|opalać się
hacer turismo|zwiedzać
la excursión|wycieczka
el recuerdo|pamiątka
la crema solar|krem z filtrem
hacer la maleta|pakować walizkę
la frontera|granica
el extranjero|zagranica (cudzoziemiec)
¡Buen viaje!|Dobrej podróży!
`},
{ id: "x3-money", t: "Pieniądze", d: "El dinero, el euro, el cajero…", k: "v", i: `
el dinero|pieniądze
el euro|euro
el céntimo|cent
la moneda|moneta
el billete|banknot (też: bilet)
el cajero automático|bankomat
la tarjeta de crédito|karta kredytowa
el banco|bank
la cuenta bancaria|konto bankowe
sacar dinero|wypłacić pieniądze
cambiar dinero|wymienić pieniądze
ahorrar|oszczędzać
gastar|wydawać
caro|drogi
barato|tani
gratis|za darmo
el cambio|reszta (też: zmiana)
el precio|cena
pagar|płacić
deber dinero|być winnym pieniądze
prestar|pożyczać (komuś)
pedir prestado|pożyczać (od kogoś)
el sueldo|pensja
la factura|faktura (rachunek)
¿Se puede pagar con tarjeta?|Można płacić kartą?
`},
{ id: "x3-kitchen", t: "Kuchnia i ilości", d: "Un kilo de, una botella de, un trozo de…", k: "v", i: `
la nevera|lodówka
el horno|piekarnik
el microondas|mikrofalówka
la sartén|patelnia
la olla|garnek
el fregadero|zlew
el lavavajillas|zmywarka
un kilo de|kilogram (czegoś)
medio kilo de|pół kilo
un litro de|litr
una botella de|butelka
una lata de|puszka
un paquete de|paczka
un trozo de|kawałek
una docena de huevos|tuzin jajek
una barra de pan|bagietka (bochenek)
una caja de|pudełko
un poco de|trochę
mucho|dużo
bastante|wystarczająco (sporo)
demasiado|za dużo
cocinar|gotować
freír|smażyć
hervir|gotować (wrzeć)
cortar|kroić
`},
{ id: "x3-looks", t: "Wygląd", d: "Alto, delgado, rubio, tiene el pelo largo…", k: "v", i: `
alto|wysoki
bajo|niski
delgado|szczupły
gordo|gruby
guapo|przystojny (ładny)
feo|brzydki
joven|młody
mayor|starszy (w podeszłym wieku)
rubio|blondyn
moreno|brunet (opalony)
pelirrojo|rudy
calvo|łysy
el pelo largo|długie włosy
el pelo corto|krótkie włosy
el pelo rizado|kręcone włosy
el pelo liso|proste włosy
los ojos azules|niebieskie oczy
los ojos marrones|brązowe oczy
la barba|broda
el bigote|wąsy
las gafas|okulary
Lleva gafas.|Nosi okulary.
Tiene el pelo largo.|Ma długie włosy.
Es de estatura media.|Jest średniego wzrostu.
Se parece a su madre.|Jest podobny do mamy.
`},
{ id: "x3-character", t: "Charakter", d: "Simpático, tímido, trabajador… Charakter – zawsze z ser.", k: "v", i: `
simpático|sympatyczny
antipático|niesympatyczny
amable|miły (uprzejmy)
divertido|zabawny
aburrido|nudny
inteligente|inteligentny
listo|bystry
tonto|głupi
trabajador|pracowity
perezoso|leniwy
tímido|nieśmiały
abierto|otwarty
serio|poważny
alegre|wesoły
generoso|hojny
tacaño|skąpy
paciente|cierpliwy
impaciente|niecierpliwy
educado|kulturalny
maleducado|niewychowany
sincero|szczery
mentiroso|kłamliwy
valiente|odważny
cobarde|tchórzliwy
responsable|odpowiedzialny
`},
{ id: "x3-chores", t: "Prace domowe", d: "Hacer la cama, poner la lavadora, fregar los platos…", k: "v", i: `
hacer la cama|ścielić łóżko
limpiar la casa|sprzątać dom
fregar los platos|zmywać naczynia
poner la lavadora|nastawić pranie
tender la ropa|rozwiesić pranie
planchar|prasować
pasar la aspiradora|odkurzać
barrer|zamiatać
sacar la basura|wynosić śmieci
hacer la compra|robić zakupy
hacer la comida|robić obiad
poner la mesa|nakryć do stołu
quitar la mesa|sprzątnąć ze stołu
regar las plantas|podlewać rośliny
ordenar|porządkować
la lavadora|pralka
la plancha|żelazko
la aspiradora|odkurzacz
la escoba|miotła
la basura|śmieci
el polvo|kurz
quitar el polvo|ścierać kurze
las tareas domésticas|prace domowe
cuidar a los niños|opiekować się dziećmi
pasear al perro|wyprowadzać psa
`},
{ id: "x3-directions", t: "Jak dojść?", d: "Todo recto, a la derecha, al lado de…", k: "v", ex: CHOICE, i: `
todo recto|prosto
a la derecha|w prawo (po prawej)
a la izquierda|w lewo (po lewej)
la primera calle|pierwsza ulica
la segunda a la derecha|druga w prawo
al lado de|obok
enfrente de|naprzeciwko
delante de|przed
detrás de|za
entre|między
cerca de|blisko
lejos de|daleko od
en la esquina|na rogu
al final de la calle|na końcu ulicy
cruzar la calle|przejść przez ulicę
¿Dónde está la estación?|Gdzie jest dworzec?
¿Está lejos?|Czy to daleko?
Está a cinco minutos.|To pięć minut stąd.
¿Cómo llego al centro?|Jak dojść do centrum?
Perdone, ¿hay una farmacia por aquí?|Przepraszam, czy jest tu gdzieś apteka?
Siga todo recto.|Proszę iść prosto.
Gire a la derecha.|Proszę skręcić w prawo.
`},
{ id: "x3-routine", t: "Codzienne czynności", d: "Me levanto, me ducho, desayuno… Dużo czasowników zwrotnych!", k: "v", i: `
despertarse|budzić się
levantarse|wstawać
ducharse|brać prysznic
lavarse los dientes|myć zęby
vestirse|ubierać się
peinarse|czesać się
afeitarse|golić się
maquillarse|malować się
desayunar|jeść śniadanie
ir al trabajo|iść do pracy
comer|jeść obiad (też: jeść)
merendar|jeść podwieczorek
cenar|jeść kolację
volver a casa|wracać do domu
ver la tele|oglądać telewizję
acostarse|kłaść się spać
dormirse|zasypiać
echarse la siesta|uciąć sobie drzemkę
estar de pie|stać
sentarse|siadać
tener prisa|spieszyć się
llegar tarde|spóźniać się
salir de casa|wychodzić z domu
coger el autobús|łapać autobus (jechać autobusem)
quedar con amigos|umawiać się z przyjaciółmi
`},
{ id: "x3-sports", t: "Sport i czas wolny", d: "Jugar al fútbol, hacer deporte, ir al gimnasio…", k: "v", i: `
el deporte|sport
hacer deporte|uprawiać sport
jugar al fútbol|grać w piłkę nożną
jugar al tenis|grać w tenisa
el baloncesto|koszykówka
el balonmano|piłka ręczna
nadar|pływać
la natación|pływanie
correr|biegać
montar en bicicleta|jeździć na rowerze
esquiar|jeździć na nartach
el gimnasio|siłownia
el partido|mecz
el equipo|drużyna
el jugador|zawodnik
ganar|wygrywać
perder|przegrywać
empatar|remisować
el campo de fútbol|boisko
la piscina|basen
tocar la guitarra|grać na gitarze
ir al cine|chodzić do kina
quedar con amigos|spotykać się z przyjaciółmi
salir de copas|wyjść na drinka
el tiempo libre|czas wolny
`}
]);
})();
