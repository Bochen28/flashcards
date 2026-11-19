/* Etapy 6–7 – więcej słownictwa i zdań B2. */
(function () {
var SENT = ["order", "pl2en", "order", "en2pl", "listen"];
var CHOICE = ["en2pl", "pl2en", "listen"];
ADD("s6", [
{ id: "x6-hobbies", t: "Hobby", d: "El senderismo, la escalada, tejer, la jardinería…", k: "v", i: `
el senderismo|wędrówki piesze
la escalada|wspinaczka
la vela|żeglarstwo
el buceo|nurkowanie
tejer|robić na drutach
coser|szyć
la cerámica|ceramika
la repostería|pieczenie ciast (cukiernictwo)
coleccionar sellos|zbierać znaczki
observar aves|obserwować ptaki
el juego de mesa|gra planszowa
el crucigrama|krzyżówka
el yoga|joga
las artes marciales|sztuki walki
el voluntariado|wolontariat
la fotografía|fotografia
la jardinería|ogrodnictwo
la carpintería|stolarstwo
el aficionado|amator (fan)
la pesca|wędkarstwo
el bordado|haft
patinar|jeździć na łyżwach (rolkach)
el ajedrez|szachy
los videojuegos|gry wideo
apuntarse a un taller|zapisać się na warsztaty
`},
{ id: "x6-clothes-desc", t: "Opis ubrań", d: "De rayas, de cuadros, de lunares, de manga larga…", k: "v", i: `
de rayas|w paski
de cuadros|w kratkę
de lunares|w groszki
liso|gładki (jednolity)
estampado|wzorzysty
de flores|w kwiatki
ajustado|obcisły
ancho|luźny (szeroki)
de manga larga|z długim rękawem
de manga corta|z krótkim rękawem
sin mangas|bez rękawów
impermeable|nieprzemakalny
de moda|modny
pasado de moda|niemodny
informal|codzienny (casualowy)
elegante|elegancki
quedar bien|dobrze leżeć (pasować)
combinar|pasować do siebie
arreglarse|stroić się
desvestirse|rozbierać się
la seda|jedwab
la lana|wełna
el algodón|bawełna
el cuero|skóra (materiał)
el tejido|tkanina
`},
{ id: "x6-verbs-b2", t: "Czasowniki B2", d: "Lograr, impedir, influir, garantizar…", k: "v", i: `
lograr|osiągnąć
implantar|wdrażać
perfeccionar|udoskonalać
agravar|pogarszać
disminuir|zmniejszać
incrementar|zwiększać
impedir|uniemożliwiać (zapobiegać)
evitar|unikać
exigir|wymagać (żądać)
garantizar|zapewniać (gwarantować)
apoyar|wspierać
comparar|porównywać
diferenciarse|różnić się
depender de|zależeć od
influir en|wpływać na
tener lugar|odbywać się
surgir|pojawiać się (powstawać)
desaparecer|znikać
recortar|ciąć (redukować)
analizar|analizować
debatir|debatować
destacar|podkreślać (wyróżniać się)
reconocer|przyznawać (uznawać)
difundir|rozpowszechniać
favorecer|sprzyjać
`}
]);
ADD("s7", [
{ id: "x7-healthy", t: "Zdrowy styl życia", d: "La alimentación, los hidratos, adelgazar, las defensas…", k: "v", i: `
la vida sana|zdrowy tryb życia
la alimentación|odżywianie
la dieta equilibrada|zbilansowana dieta
las vitaminas|witaminy
las proteínas|białka
los hidratos de carbono|węglowodany
las grasas|tłuszcze
las calorías|kalorie
el ejercicio físico|ćwiczenia fizyczne
el entrenamiento|trening
la rutina diaria|plan dnia
los malos hábitos|złe nawyki
dejar de fumar|rzucić palenie
el alcohol|alkohol
adelgazar|schudnąć
engordar|przytyć
el chequeo médico|badanie kontrolne
la prevención|profilaktyka
las defensas|odporność
descansar bien|dobrze wypoczywać
caminar a diario|spacerować codziennie
dormir ocho horas|spać osiem godzin
la deshidratación|odwodnienie
el sedentarismo|siedzący tryb życia
mantenerse en forma|utrzymywać formę
`},
{ id: "x7-places", t: "Opis miejsc", d: "Pintoresco, acogedor, abandonado, espacioso…", k: "v", i: `
pintoresco|malowniczy
acogedor|przytulny
ruidoso|hałaśliwy
concurrido|zatłoczony
desierto|wyludniony
abandonado|opuszczony (zaniedbany)
cuidado|zadbany
espacioso|przestronny
estrecho|ciasny
histórico|historyczny
antiguo|zabytkowy (dawny)
majestuoso|majestatyczny
sombrío|ponury
luminoso|jasny
colorido|kolorowy
provinciano|prowincjonalny
turístico|turystyczny
lujoso|luksusowy
sencillo|skromny (prosty)
bien situado|dobrze położony
apartado|odległy (na uboczu)
hospitalario|gościnny
encantador|uroczy
el barrio de moda|modna dzielnica
el barrio dormitorio|dzielnica sypialniana
`},
{ id: "x7-workverbs", t: "Praca: czasowniki", d: "Contratar, coordinar, aprobar, trabajar por turnos…", k: "v", i: `
contratar|zatrudnić
dirigir|kierować
coordinar|koordynować
supervisar|nadzorować
informar|składać sprawozdanie
presentar un informe|przedstawić raport
acordar|uzgadniać
aprobar|zatwierdzać
ejecutar|wykonywać
encargar|zlecać
repartir|rozdzielać
formar al personal|szkolić personel
colaborar|współpracować
negociar|negocjować
firmar un contrato|podpisać umowę
emitir una factura|wystawić fakturę
atender a los clientes|obsługiwać klientów
trabajar por turnos|pracować na zmiany
pedir la baja|wziąć zwolnienie lekarskie
presentar la dimisión|złożyć wypowiedzenie (dymisję)
encontrar empleo|znaleźć zatrudnienie
hacer prácticas|odbywać staż
formarse|podnosić kwalifikacje
jubilarse|przejść na emeryturę
pedir vacaciones|wziąć urlop
`},
{ id: "x7-expressions", t: "Wyrażenia z tener, dar, hacer", d: "Tener en mente, dar a entender, hacer caso…", k: "v", ex: CHOICE, i: `
tener en mente|mieć na myśli
tener que ver con|mieć do czynienia z (dotyczyć)
tener éxito|mieć powodzenie
tener derecho a|mieć prawo do
tener la posibilidad|mieć możliwość
tener sentido|mieć sens
tener buena pinta|dobrze wyglądać
seguir el ejemplo de|brać przykład z
asumir la responsabilidad|brać na siebie odpowiedzialność
tomar la palabra|zabierać głos
llevar ventaja|mieć przewagę
dar el visto bueno|wyrazić zgodę
dar su palabra|dać słowo
dar a conocer|dać znać (ogłosić)
dar pie a|dać powód do
hacer como si|udawać
cometer un error|popełnić błąd
llamar la atención|zwrócić uwagę (komuś)
dar un paso|zrobić krok
poner en duda|podawać w wątpliwość
proponerse algo|postawić sobie za cel
poner una condición|postawić warunek
correr un riesgo|podjąć ryzyko
hacer caso|posłuchać (zwrócić uwagę)
perder la cabeza|tracić głowę
`},
{ id: "x7-sent-story", t: "Zdania: opowiadanie", d: "Una vez… De repente… Resultó que…", k: "o", ex: SENT, i: `
Una vez me pasó algo muy curioso.|Pewnego razu przydarzyło mi się coś bardzo ciekawego.
Fue hace unos años.|To było kilka lat temu.
Al principio todo iba bien.|Na początku wszystko szło dobrze.
De repente sonó el timbre.|Nagle zadzwonił dzwonek.
No me lo podía creer.|Nie mogłem w to uwierzyć.
Resultó que era un viejo amigo.|Okazało się, że to stary przyjaciel.
No nos veíamos desde niños.|Nie widzieliśmy się od dzieciństwa.
Estuvimos hablando hasta el amanecer.|Rozmawialiśmy do świtu.
Mientras tanto, empezó a llover.|Tymczasem zaczęło padać.
Más tarde supe la verdad.|Później poznałem prawdę.
Todavía recuerdo aquel día.|Do dziś pamiętam tamten dzień.
Al final todos nos reímos.|Na koniec wszyscy się śmialiśmy.
Desde entonces somos inseparables.|Od tamtej pory jesteśmy nierozłączni.
`}
]);
})();
