/* Etapy 2–3 – więcej podstawowych słówek (A1–A2). */
(function () {
var CHOICE = ["en2pl", "pl2en", "listen"];
ADD("s2", [
{ id: "x2-verbs1", t: "Czasowniki na start", d: "Ser, estar, tener, hacer, ir… najważniejsze czasowniki.", k: "v", i: `
ser|być (kimś, jakimś)
estar|być (gdzieś, w jakimś stanie)
tener|mieć
hacer|robić
ir|iść (jechać)
venir|przychodzić
poder|móc
querer|chcieć (kochać)
saber|wiedzieć (umieć)
conocer|znać
decir|powiedzieć
hablar|mówić
comer|jeść
beber|pić
dormir|spać
vivir|mieszkać (żyć)
trabajar|pracować
estudiar|uczyć się
leer|czytać
escribir|pisać
ver|widzieć
escuchar|słuchać
comprar|kupować
dar|dawać
tomar|brać
`},
{ id: "x2-opposites", t: "Przeciwieństwa", d: "Grande – pequeño, nuevo – viejo, caliente – frío.", k: "v", i: `
grande|duży
pequeño|mały
nuevo|nowy
viejo|stary
joven|młody
bueno|dobry
malo|zły
caliente|gorący
frío|zimny
alto|wysoki
bajo|niski
largo|długi
corto|krótki
rápido|szybki
lento|powolny
fácil|łatwy
difícil|trudny
caro|drogi
barato|tani
limpio|czysty
sucio|brudny
lleno|pełny
vacío|pusty
abierto|otwarty
cerrado|zamknięty
`},
{ id: "x2-things", t: "Rzeczy w domu", d: "El armario, el espejo, la toalla, la nevera…", k: "v", i: `
el armario|szafa
la cómoda|komoda
el sillón|fotel
el sofá|kanapa
la estantería|regał (półka)
el espejo|lustro
la lámpara|lampa
la alfombra|dywan
las cortinas|zasłony
la almohada|poduszka
la sábana|prześcieradło
la toalla|ręcznik
el jabón|mydło
el cepillo de dientes|szczoteczka do zębów
la pasta de dientes|pasta do zębów
el champú|szampon
la lavadora|pralka
el lavavajillas|zmywarka
el microondas|mikrofalówka
la nevera|lodówka
la plancha|żelazko
la televisión|telewizor
el ventilador|wentylator
el reloj|zegar (zegarek)
el despertador|budzik
`},
{ id: "x2-questions", t: "Pierwsze pytania", d: "¿Cómo te llamas? ¿De dónde eres? ¿Qué hora es?", k: "v", ex: CHOICE, i: `
¿Cómo te llamas?|Jak masz na imię?
¿Cuántos años tienes?|Ile masz lat?
¿De dónde eres?|Skąd jesteś?
¿Dónde vives?|Gdzie mieszkasz?
¿A qué te dedicas?|Czym się zajmujesz?
¿Qué hora es?|Która godzina?
¿Qué es esto?|Co to jest?
¿Quién es?|Kto to jest?
¿Cuánto cuesta?|Ile to kosztuje?
¿Dónde está el baño?|Gdzie jest toaleta?
¿Hablas polaco?|Mówisz po polsku?
¿Entiendes?|Rozumiesz?
¿Qué haces?|Co robisz?
¿Adónde vas?|Dokąd idziesz?
¿Cuándo vienes?|Kiedy przyjdziesz?
¿Por qué estás triste?|Dlaczego jesteś smutny?
¿Tienes hambre?|Jesteś głodny?
¿Quieres un café?|Chcesz kawę?
¿Se puede?|Można?
¿Qué tiempo hace?|Jaka jest pogoda?
¿Qué día es hoy?|Jaki jest dziś dzień?
¿Tienes hermanos?|Masz rodzeństwo?
¿Te gusta la música?|Lubisz muzykę?
¿Cómo se dice en español?|Jak to się mówi po hiszpańsku?
`}
]);
ADD("s3", [
{ id: "x3-shops", t: "Sklepy i usługi", d: "La panadería, la peluquería, la tintorería…", k: "v", i: `
la panadería|piekarnia
la carnicería|sklep mięsny
la pescadería|sklep rybny
la frutería|warzywniak (owoce)
la librería|księgarnia
la papelería|sklep papierniczy
la floristería|kwiaciarnia
la zapatería|sklep obuwniczy
la tienda de ropa|sklep odzieżowy
la joyería|jubiler
la peluquería|fryzjer (salon)
la tintorería|pralnia chemiczna
la lavandería|pralnia
el zapatero|szewc
la óptica|optyk
la tienda de animales|sklep zoologiczny
el estanco|kiosk z tytoniem i znaczkami
el quiosco|kiosk
el centro comercial|centrum handlowe
el mercado|targ
el supermercado|supermarket
el taller|warsztat
la gasolinera|stacja benzynowa
el cajero|bankomat
la farmacia|apteka
`},
{ id: "x3-family2", t: "Rodzina 2", d: "El suegro, la cuñada, el yerno, los gemelos…", k: "v", i: `
los padres|rodzice
el marido|mąż
la esposa|żona
el nieto|wnuk
la nieta|wnuczka
el sobrino|bratanek (siostrzeniec)
la sobrina|bratanica (siostrzenica)
el primo|kuzyn
la prima|kuzynka
el suegro|teść
la suegra|teściowa
el cuñado|szwagier
la cuñada|szwagierka
el yerno|zięć
la nuera|synowa
el padrino|ojciec chrzestny
la madrina|matka chrzestna
los gemelos|bliźniaki
los parientes|krewni
casado|żonaty (zamężna)
soltero|kawaler (wolny)
divorciado|rozwiedziony
el bisabuelo|pradziadek
la bisabuela|prababcia
el hijo único|jedynak
`},
{ id: "x3-dishes", t: "Hiszpańskie potrawy", d: "Gazpacho, croquetas, churros… Co zamówić w Hiszpanii.", k: "v", i: `
el gazpacho|chłodnik pomidorowy
la tortilla de patatas|omlet z ziemniakami
las croquetas|krokiety
los churros|churros (smażone ciastka)
el pulpo a la gallega|ośmiornica po galicyjsku
las gambas al ajillo|krewetki w czosnku
las patatas bravas|ziemniaki w ostrym sosie
el jamón ibérico|szynka iberyjska
el chorizo|chorizo (kiełbasa)
el cocido|gulasz z ciecierzycą
la fabada|fasolka po asturyjsku
el flan|krem karmelowy
el arroz con leche|ryż na mleku
el pan con tomate|chleb z pomidorem
los boquerones|sardele
las aceitunas|oliwki
el queso manchego|ser manchego
la sangría|sangria
el tinto de verano|czerwone wino z lemoniadą
la horchata|horchata (napój z migdałów ziemnych)
el bocadillo de calamares|bułka z kalmarami
las albóndigas|klopsiki
los pimientos de Padrón|papryczki z Padrón
el turrón|turrón (nugat)
la empanada|pieróg (zapiekany)
`},
{ id: "x3-where", t: "Gdzie to jest?", d: "Encima, debajo, al lado, enfrente…", k: "v", ex: CHOICE, i: `
encima de la mesa|na stole
debajo de la mesa|pod stołem
sobre la mesa|na stole (nad)
al lado de la ventana|obok okna
entre los libros|między książkami
detrás de la puerta|za drzwiami
delante de la casa|przed domem
dentro del armario|w szafie
fuera de casa|poza domem (na dworze)
junto a mí|obok mnie
enfrente del banco|naprzeciwko banku
a la izquierda|po lewej
a la derecha|po prawej
todo recto|prosto
arriba|na górze
abajo|na dole
dentro|w środku
alrededor de|wokół
cerca de aquí|w pobliżu
lejos del centro|daleko od centrum
en medio de|pośrodku
en el rincón|w kącie
en la esquina|na rogu
al otro lado|po drugiej stronie
al fondo|w głębi (na końcu)
`}
]);
})();
