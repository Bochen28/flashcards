/* Etap 7 – słownictwo B2. */
(function () {
var CHOICE = ["en2pl", "pl2en", "listen"];
ADD("s7", [
{ id: "x7-media", t: "Media i dziennikarstwo", d: "El titular, la rueda de prensa, la libertad de expresión…", k: "v", i: `
el titular|nagłówek
el artículo de opinión|artykuł publicystyczny
el editorial|artykuł wstępny
el redactor|redaktor
la editorial|wydawnictwo
la tirada|nakład
la entrevista|wywiad
el reportaje|reportaż
el corresponsal|korespondent
el presentador|prezenter
en directo|na żywo
la audiencia|oglądalność (widownia)
la suscripción|prenumerata
la noticia falsa|fałszywa wiadomość
la fuente|źródło
la censura|cenzura
la libertad de expresión|wolność słowa
la propaganda|propaganda
la publicación|wpis (publikacja)
el seguidor|obserwujący
el influencer|influencer
la rueda de prensa|konferencja prasowa
el portavoz|rzecznik
informar sobre|relacjonować
hacerse viral|stać się viralem
`},
{ id: "x7-arts", t: "Sztuka i literatura", d: "La novela, el cuento, el personaje, la obra maestra…", k: "v", i: `
la novela|powieść
el cuento|opowiadanie (bajka)
el poema|wiersz
la poesía|poezja
la prosa|proza
el personaje|postać
el argumento|fabuła
el capítulo|rozdział
la edición|wydanie
el autor|autor
el cuadro|obraz
la escultura|rzeźba
la exposición|wystawa
la galería|galeria
el lienzo|płótno
el paisaje|pejzaż
el retrato|portret
el bodegón|martwa natura
la obra maestra|arcydzieło
la inspiración|natchnienie
el talento|talent
la obra|dzieło (utwór)
el artista|artysta
el estilo|styl
la crítica|krytyka (recenzja)
`},
{ id: "x7-ecology", t: "Ekologia", d: "Las emisiones, las energías renovables, la huella de carbono…", k: "v", i: `
las emisiones|emisje
el dióxido de carbono|dwutlenek węgla
el efecto invernadero|efekt cieplarniany
el calentamiento global|globalne ocieplenie
las energías renovables|energia odnawialna
el panel solar|panel słoneczny
el parque eólico|farma wiatrowa
la central nuclear|elektrownia jądrowa
los combustibles fósiles|paliwa kopalne
el reciclaje|recykling
separar la basura|segregować śmieci
de un solo uso|jednorazowy
la extinción|wymieranie
la especie protegida|gatunek chroniony
la reserva natural|rezerwat przyrody
la biodiversidad|bioróżnorodność
la sequía|susza
la inundación|powódź
el deshielo|topnienie lodowców
la huella de carbono|ślad węglowy
contaminar|zanieczyszczać
conservar|chronić (zachowywać)
el desarrollo sostenible|zrównoważony rozwój
los recursos naturales|zasoby naturalne
sostenible|zrównoważony (ekologiczny)
`},
{ id: "x7-abstract", t: "Pojęcia abstrakcyjne", d: "La dignidad, la conciencia, la causa, el efecto…", k: "v", i: `
la libertad|wolność
la justicia|sprawiedliwość
la igualdad|równość
la dignidad|godność
el honor|honor
la conciencia|sumienie
la sabiduría|mądrość
el conocimiento|wiedza
el propósito|cel
el sentido|sens
la causa|przyczyna
el efecto|skutek
la influencia|wpływ
la elección|wybór
la posibilidad|możliwość
la amenaza|zagrożenie
la ventaja|zaleta
el inconveniente|wada (niedogodność)
el reto|wyzwanie
el enfoque|podejście
el punto de vista|punkt widzenia
la confianza|zaufanie
la esperanza|nadzieja
la decepción|rozczarowanie
el logro|osiągnięcie
`},
{ id: "x7-character", t: "Charakter B2", d: "Terco, generoso, presumido, hipócrita…", k: "v", i: `
constante|wytrwały
ambicioso|ambitny
modesto|skromny
presumido|zarozumiały
terco|uparty
generoso|hojny
tacaño|skąpy
astuto|przebiegły
ingenuo|naiwny
ingenioso|dowcipny (pomysłowy)
cariñoso|czuły
indiferente|obojętny
susceptible|drażliwy
imprudente|lekkomyślny
sensato|rozsądny
traicionero|zdradliwy
franco|szczery
hipócrita|obłudny
decidido|zdecydowany
indeciso|niezdecydowany
trabajador|pracowity
vago|leniwy
educado|uprzejmy
grosero|niegrzeczny (grubiański)
exigente|wymagający
`},
{ id: "x7-colloc", t: "Kolokacje B2", d: "Tomar una decisión, prestar atención, llevar a cabo…", k: "v", ex: CHOICE, i: `
tomar una decisión|podjąć decyzję
aprobar un examen|zdać egzamin
suspender un examen|oblać egzamin
prestar atención|zwracać uwagę
tomar parte en|brać udział w
tener razón|mieć rację
cumplir una promesa|dotrzymać obietnicy
romper una promesa|złamać obietnicę
hacer una pregunta|zadać pytanie
dar un consejo|udzielić rady
sacar conclusiones|wyciągać wnioski
causar buena impresión|zrobić dobre wrażenie
llegar a fin de mes|wiązać koniec z końcem
desempeñar un papel|odgrywać rolę
tener importancia|mieć znaczenie
perder el conocimiento|stracić przytomność
volver en sí|odzyskać przytomność
poner fin a|położyć kres
salir adelante|poradzić sobie (wyjść na prostą)
tomar medidas|podjąć kroki
tener en cuenta|wziąć pod uwagę
llegar a un acuerdo|dojść do porozumienia
guardar un secreto|dochować tajemnicy
decir la verdad|powiedzieć prawdę
correr un riesgo|podjąć ryzyko
`},
{ id: "x7-idioms1", t: "Idiomy 1", d: "Estar en las nubes, tomar el pelo, costar un ojo de la cara…", k: "v", ex: CHOICE, i: `
estar en las nubes|bujać w obłokach
tomar el pelo|nabijać się (robić w konia)
costar un ojo de la cara|kosztować majątek
ser pan comido|być bułką z masłem
no tener pelos en la lengua|mówić prosto z mostu
meter la pata|dać plamę (palnąć gafę)
estar como una cabra|mieć nie po kolei w głowie
echar una mano|pomóc
dar en el clavo|trafić w sedno
ponerse rojo como un tomate|zaczerwienić się jak burak
tirar la toalla|poddać się (rzucić ręcznik)
estar hasta las narices|mieć wszystkiego po dziurki w nosie
no pegar ojo|nie zmrużyć oka
ser uña y carne|być nierozłącznymi
llover a cántaros|lać jak z cebra
estar de mala leche|być w złym humorze
hablar por los codos|gadać jak najęty
irse por las ramas|zbaczać z tematu
dormir como un tronco|spać jak suseł
ser un cero a la izquierda|być zerem (nic nie znaczyć)
tener mala pata|mieć pecha
a la vuelta de la esquina|tuż za rogiem (wkrótce)
estar en el séptimo cielo|być w siódmym niebie
buscar tres pies al gato|szukać dziury w całym
consultar con la almohada|przespać się z problemem
`},
{ id: "x7-body", t: "Ciało od środka", d: "La columna, el músculo, el hígado, la muñeca…", k: "v", i: `
la columna vertebral|kręgosłup
el músculo|mięsień
el hueso|kość
la articulación|staw
la piel|skóra
la vena|żyła
los pulmones|płuca
el hígado|wątroba
el riñón|nerka
el estómago|żołądek
el intestino|jelito
el cerebro|mózg
el nervio|nerw
el codo|łokieć
la muñeca|nadgarstek (też: lalka)
el tobillo|kostka
el muslo|udo
la pantorrilla|łydka
la palma|dłoń (wewnętrzna strona)
el talón|pięta
la barbilla|podbródek
la sien|skroń
la ceja|brew
la pestaña|rzęsa
la garganta|gardło
`},
{ id: "x7-cooking", t: "Gotowanie", d: "Cortar, rallar, rehogar, el horno, el cazo…", k: "v", i: `
cortar|kroić
picar|siekać
pelar|obierać
rallar|trzeć (na tarce)
mezclar|mieszać
batir|ubijać
freír|smażyć
hervir|gotować (wrzeć)
cocer|gotować
rehogar|podsmażyć (dusić)
hornear|piec
asar|piec (opiekać)
salar|solić
la pimienta|pieprz
el aliño|przyprawa (sos do sałatki)
la cacerola|garnek
la sartén|patelnia
el horno|piekarnik
el rallador|tarka
el colador|durszlak (sitko)
el cucharón|chochla
la masa|ciasto (surowe)
el relleno|nadzienie
la receta|przepis
los ingredientes|składniki
`},
{ id: "x7-time", t: "Wyrażenia czasowe", d: "Últimamente, de antemano, a la larga, en adelante…", k: "v", i: `
últimamente|ostatnio
recientemente|niedawno
hasta ahora|dotychczas
con el tiempo|z czasem
dentro de poco|wkrótce
de ahora en adelante|od teraz
de antemano|z góry (zawczasu)
a tiempo|na czas
enseguida|od razu
poco a poco|stopniowo
de repente|nagle
al fin y al cabo|w końcu (ostatecznie)
de vez en cuando|od czasu do czasu
recién|dopiero co (niedawno)
mientras tanto|tymczasem
la víspera|wigilia (dzień wcześniej)
anteayer|przedwczoraj
pasado mañana|pojutrze
a medianoche|o północy
al mediodía|w południe
al amanecer|o świcie
al anochecer|o zmierzchu
las 24 horas|całą dobę
para siempre|na zawsze
a la larga|na dłuższą metę
`},
{ id: "x7-law", t: "Prawo i przestępstwa", d: "El soborno, la estafa, la fianza, la cadena perpetua…", k: "v", i: `
el hurto|kradzież (drobna)
el robo a mano armada|napad z bronią
la estafa|oszustwo
el soborno|łapówka
la corrupción|korupcja
el homicidio|zabójstwo
el secuestro|porwanie
el contrabando|przemyt
la falsificación|podróbka (fałszerstwo)
el vandalismo|wandalizm
el allanamiento de morada|włamanie
la declaración|zeznanie
el sospechoso|podejrzany
la coartada|alibi
las huellas dactilares|odciski palców
el investigador|śledczy
la fianza|kaucja
la condena|wyrok (kara)
la cadena perpetua|dożywocie
absolver|uniewinnić
condenar|skazać
el castigo|kara
la infracción|wykroczenie
el tribunal|sąd
el recurso|odwołanie (apelacja)
`},
{ id: "x7-university", t: "Studia", d: "La residencia, la beca, el TFG, chuletas…", k: "v", i: `
la selectividad|egzamin wstępny na studia (matura)
el estudiante de primero|student pierwszego roku
la beca|stypendium
la residencia de estudiantes|akademik
el colegio mayor|akademik (prestiżowy)
la clase magistral|wykład
el seminario|seminarium
el examen final|egzamin końcowy
la convocatoria|termin egzaminu (sesja)
el título|dyplom
el TFG|praca licencjacka
el grado|licencjat (studia I stopnia)
el máster|studia magisterskie
el doctorado|doktorat
el catedrático|profesor (uczelni)
el decano|dziekan
la facultad|wydział
el departamento|katedra (instytut)
la carrera|kierunek studiów
estudiar a distancia|studiować zaocznie (zdalnie)
los apuntes|notatki
la chuleta|ściąga
la nota media|średnia ocen
el expediente académico|wykaz ocen
el Erasmus|wymiana Erasmus
`},
{ id: "x7-feelings", t: "Uczucia B2", d: "El entusiasmo, la indignación, el alivio, el desprecio…", k: "v", i: `
el entusiasmo|entuzjazm
la indignación|oburzenie
la desesperación|rozpacz
el alivio|ulga
la nostalgia|nostalgia
la añoranza|tęsknota
la indiferencia|obojętność
el desprecio|pogarda
la gratitud|wdzięczność
el arrepentimiento|skrucha (żal)
el desconcierto|zakłopotanie (konsternacja)
el asombro|zdumienie
la curiosidad|ciekawość
la impaciencia|niecierpliwość
la alegría|radość
el dolor|ból (cierpienie)
la ira|gniew
el asco|obrzydzenie
el terror|przerażenie
la euforia|euforia
el orgullo|duma
la tristeza|smutek
la felicidad|szczęście
el ánimo|zapał (otucha)
la pasión|namiętność (pasja)
`},
{ id: "x7-linkers", t: "Łączniki B2", d: "En realidad, sin embargo, por lo tanto, no obstante…", k: "v", i: `
en realidad|w rzeczywistości
sobre todo|przede wszystkim
al menos|przynajmniej
como mínimo|co najmniej
incluso|nawet
en cuanto a|jeśli chodzi o
en general|ogólnie
por lo general|zazwyczaj
sin duda|bez wątpienia
quizás|może
apenas|ledwie
por cierto|nawiasem mówiąc
al contrario|przeciwnie
a la vez|jednocześnie
por lo tanto|w związku z tym
sin embargo|jednak
no obstante|niemniej jednak
de hecho|w istocie (faktycznie)
es decir|to znaczy
aun así|mimo to
en cambio|natomiast
además|poza tym
en ese caso|w takim razie
a pesar de eso|mimo to
en definitiva|krótko mówiąc (ostatecznie)
`},
{ id: "x7-traffic", t: "Ruch drogowy", d: "El atasco, el desvío, la rotonda, el carril…", k: "v", i: `
el atasco|korek
el desvío|objazd
el semáforo|sygnalizacja świetlna
el paso de cebra|przejście dla pieszych (zebra)
la acera|chodnik
la calzada|jezdnia
el cruce|skrzyżowanie
la rotonda|rondo
el carril|pas ruchu
cambiar de sentido|zawracać
el abono mensual|bilet miesięczny
validar el billete|skasować bilet
el autobús urbano|autobus miejski
el trolebús|trolejbus
el tranvía|tramwaj
el cercanías|kolej podmiejska
la autovía|droga ekspresowa
el peaje|opłata drogowa
la grúa|laweta (holownik)
el peatón|pieszy
el ciclista|rowerzysta
la señal de tráfico|znak drogowy
la hora punta|godzina szczytu
el límite de velocidad|ograniczenie prędkości
adelantar|wyprzedzać
`},
{ id: "x7-money", t: "Finanse osobiste", d: "La paga, a plazos, la devolución, llegar a fin de mes…", k: "v", i: `
la paga|kieszonkowe (wypłata)
ahorrar|oszczędzać
derrochar|trwonić
pedir un préstamo|wziąć pożyczkę
devolver una deuda|spłacić dług
deber dinero|być winnym pieniądze
saldar cuentas|rozliczyć się
la propina|napiwek
el descuento|zniżka
las rebajas|wyprzedaż
la oferta|promocja
pagar de más|przepłacić
asequible|przystępny cenowo
carísimo|bardzo drogi
el precio razonable|rozsądna cena
a plazos|na raty
el pago por adelantado|przedpłata
la garantía|gwarancja
el reembolso|zwrot pieniędzy
el presupuesto familiar|budżet domowy
el coste de la vida|koszty utrzymania
el sueldo neto|pensja netto
vivir al día|żyć z dnia na dzień
estar sin blanca|być spłukanym
ganarse la vida|zarabiać na życie
`}
]);
})();
