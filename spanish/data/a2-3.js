/* Etap 4 – słownictwo A2. */
(function () {
var CHOICE = ["en2pl", "pl2en", "listen"];
ADD("s4", [
{ id: "x4-education", t: "Szkoła i studia", d: "Aprobar, suspender, la carrera, la beca…", k: "v", i: `
la asignatura|przedmiot (szkolny)
la carrera|studia (kierunek)
la facultad|wydział
el curso|kurs (rok nauki)
la matrícula|zapisy (opłata za studia)
la beca|stypendium
el título|dyplom (tytuł)
aprobar|zdać
suspender|oblać (nie zdać)
sacar buena nota|dostać dobrą ocenę
estudiar para un examen|uczyć się do egzaminu
el trabajo de fin de grado|praca licencjacka
el máster|studia magisterskie
el doctorado|doktorat
la biblioteca|biblioteka
el horario|plan zajęć
faltar a clase|opuścić zajęcia
apuntarse a un curso|zapisać się na kurs
las matemáticas|matematyka
la historia|historia
la lengua|język (przedmiot)
la física|fizyka
la química|chemia
el idioma extranjero|język obcy
la educación física|wychowanie fizyczne
`},
{ id: "x4-environment", t: "Środowisko", d: "El medio ambiente, reciclar, la contaminación…", k: "v", i: `
el medio ambiente|środowisko
la naturaleza|przyroda
la contaminación|zanieczyszczenie
el cambio climático|zmiany klimatu
reciclar|recyklingować (segregować)
la basura|śmieci
el plástico|plastik
el contenedor|kontener (na śmieci)
ahorrar energía|oszczędzać energię
la energía solar|energia słoneczna
el bosque|las
el río|rzeka
el mar|morze
la sequía|susza
la inundación|powódź
el incendio|pożar
proteger|chronić
la especie|gatunek
en peligro de extinción|zagrożony wyginięciem
ecológico|ekologiczny
el transporte público|komunikacja publiczna
el aire|powietrze
el agua potable|woda pitna
el planeta|planeta
la Tierra|Ziemia
`},
{ id: "x4-media", t: "Media", d: "Las noticias, el periódico, la serie…", k: "v", i: `
las noticias|wiadomości
el periódico|gazeta
la revista|czasopismo
la radio|radio
la televisión|telewizja
el canal|kanał
el programa|program
la serie|serial
el documental|film dokumentalny
el anuncio|reklama (ogłoszenie)
el periodista|dziennikarz
la entrevista|wywiad
el titular|nagłówek
la portada|okładka (pierwsza strona)
en directo|na żywo
el locutor|spiker
el oyente|słuchacz
el espectador|widz
el artículo|artykuł
la prensa|prasa
informar|informować
publicar|publikować
la publicidad|reklama
el telediario|dziennik telewizyjny
el pódcast|podcast
`},
{ id: "x4-relations", t: "Relacje", d: "Enamorarse, casarse, romper… Ludzie i uczucia.", k: "v", i: `
el amigo|przyjaciel
el conocido|znajomy
el vecino|sąsiad
la pareja|para (partner)
el novio|chłopak (narzeczony)
el matrimonio|małżeństwo
la boda|ślub (wesele)
casarse|brać ślub
divorciarse|rozwodzić się
enamorarse|zakochać się
salir con alguien|chodzić z kimś
romper con alguien|zerwać z kimś
llevarse bien|dogadywać się
llevarse mal|nie dogadywać się
discutir|kłócić się
hacer las paces|pogodzić się
confiar en|ufać
echar de menos|tęsknić
conocer a alguien|poznać kogoś
quedar con alguien|umówić się z kimś
el cariño|czułość (sympatia)
los celos|zazdrość
la amistad|przyjaźń
el amor|miłość
estar soltero|być singlem
`},
{ id: "x4-culture", t: "Sztuka i kultura", d: "El cuadro, la exposición, la obra de teatro…", k: "v", i: `
el arte|sztuka
el cuadro|obraz
el pintor|malarz
la exposición|wystawa
la escultura|rzeźba
el museo|muzeum
la obra de teatro|sztuka teatralna
la entrada|bilet (wejście)
el escenario|scena
el concierto|koncert
la orquesta|orkiestra
el músico|muzyk
la canción|piosenka
el cantante|piosenkarz
el escritor|pisarz
la novela|powieść
el poema|wiersz
el poeta|poeta
la película|film
el director|reżyser
el actor|aktor
el baile|taniec
el flamenco|flamenco
la fiesta popular|festyn (święto ludowe)
la tradición|tradycja
`},
{ id: "x4-weather2", t: "Pogoda 2", d: "Truena, graniza, está despejado…", k: "v", i: `
el pronóstico|prognoza
está despejado|jest bezchmurnie
está nublado|jest pochmurno
llover a cántaros|lać jak z cebra
la llovizna|mżawka
el granizo|grad
graniza|pada grad
truena|grzmi
el trueno|grzmot
el relámpago|błyskawica
la ola de calor|fala upałów
la humedad|wilgotność
bajo cero|poniżej zera
el hielo|lód
helar|zamarzać
el chubasco|przelotny deszcz
soleado|słoneczny
lluvioso|deszczowy
templado|umiarkowany (ciepły)
la estación del año|pora roku
el clima|klimat
mejorar|poprawiać się
empeorar|pogarszać się
el paraguas|parasol
el impermeable|płaszcz przeciwdeszczowy
`},
{ id: "x4-adverbs", t: "Przysłówki A2", d: "Rápidamente, despacio, de repente, por fin…", k: "v", i: `
rápidamente|szybko
despacio|powoli
de repente|nagle
por fin|w końcu
enseguida|zaraz (od razu)
ya no|już nie
todavía no|jeszcze nie
casi|prawie
apenas|ledwie
bastante|dość (całkiem)
demasiado|za bardzo (zbyt)
sobre todo|przede wszystkim
además|poza tym
incluso|nawet
solamente|tylko
juntos|razem
otra vez|jeszcze raz
de nuevo|ponownie
a tiempo|na czas
tarde|późno
a la vez|jednocześnie
mientras tanto|tymczasem
afortunadamente|na szczęście
desgraciadamente|niestety
probablemente|prawdopodobnie
`},
{ id: "x4-linkers", t: "Spójniki i łączniki", d: "Y, pero, porque, aunque, entonces…", k: "v", i: `
y|i
o|lub
pero|ale
porque|ponieważ (bo)
aunque|chociaż
entonces|wtedy (więc)
así que|więc
cuando|kiedy
mientras|podczas gdy
si|jeśli
también|też
tampoco|też nie
ni… ni…|ani… ani…
sin embargo|jednak
por eso|dlatego
primero|najpierw
luego|potem
después de|po (czymś)
antes de|przed (czymś)
al final|na końcu
por ejemplo|na przykład
es decir|to znaczy
en cambio|natomiast
como|ponieważ (skoro)
para que|żeby
`},
{ id: "x4-health2", t: "Zdrowie 2", d: "Romperse una pierna, la herida, el seguro médico…", k: "v", i: `
la salud|zdrowie
la herida|rana
romperse una pierna|złamać nogę
torcerse el tobillo|skręcić kostkę
cortarse|skaleczyć się
quemarse|oparzyć się
la tirita|plaster
la venda|bandaż
la inyección|zastrzyk
la vacuna|szczepionka
el análisis de sangre|badanie krwi
la tensión|ciśnienie
el dentista|dentysta
el enfermero|pielęgniarz
el paciente|pacjent
el seguro médico|ubezpieczenie zdrowotne
la baja médica|zwolnienie lekarskie
mareado|mający zawroty głowy
vomitar|wymiotować
estornudar|kichać
toser|kaszleć
recuperarse|wracać do zdrowia
la dieta|dieta
hacer ejercicio|ćwiczyć
dejar de fumar|rzucić palenie
`},
{ id: "x4-collocations", t: "Wyrażenia z hacer, tener, dar, tomar", d: "Hacer una foto, tener ganas, dar un paseo, tomar el sol.", k: "v", ex: CHOICE, i: `
hacer una foto|zrobić zdjęcie
hacer cola|stać w kolejce
hacer la maleta|spakować walizkę
hacer una pregunta|zadać pytanie
hacer falta|być potrzebnym
tener ganas de|mieć ochotę na
tener cuidado|uważać
tener suerte|mieć szczęście
tener éxito|odnieść sukces
tener en cuenta|brać pod uwagę
dar un paseo|iść na spacer
dar las gracias|podziękować
dar igual|być obojętnym (wszystko jedno)
dar miedo|przerażać
dar una vuelta|przejść się
tomar el sol|opalać się
tomar una decisión|podjąć decyzję
tomar algo|napić się czegoś
tomar apuntes|robić notatki
echar una mano|pomóc
echar de menos|tęsknić
poner la mesa|nakryć do stołu
poner la radio|włączyć radio
llevar a cabo|przeprowadzić (zrealizować)
pasarlo bien|dobrze się bawić
`},
{ id: "x4-adj2", t: "Przymiotniki 2", d: "Cómodo, peligroso, ruidoso, lleno…", k: "v", i: `
cómodo|wygodny
incómodo|niewygodny
peligroso|niebezpieczny
seguro|bezpieczny (pewny)
ruidoso|hałaśliwy
silencioso|cichy
lleno|pełny
vacío|pusty
limpio|czysty
sucio|brudny
moderno|nowoczesny
antiguo|dawny (zabytkowy)
fácil|łatwy
difícil|trudny
útil|przydatny
inútil|bezużyteczny
precioso|piękny
horrible|okropny
ligero|lekki
pesado|ciężki (nudny)
mojado|mokry
seco|suchy
ancho|szeroki
estrecho|wąski
profundo|głęboki
`},
{ id: "x4-abstract", t: "Rzeczowniki abstrakcyjne", d: "La verdad, la libertad, la paz… -dad i -ción to rodzaj żeński.", k: "v", i: `
la verdad|prawda
la mentira|kłamstwo
la libertad|wolność
la paz|pokój (brak wojny)
la guerra|wojna
la felicidad|szczęście
la tristeza|smutek
la belleza|piękno
la suerte|szczęście (traf)
el miedo|strach
la esperanza|nadzieja
la confianza|zaufanie
el éxito|sukces
el fracaso|porażka
la razón|racja (powód)
el problema|problem
la solución|rozwiązanie
la idea|pomysł
la opinión|opinia
el sueño|sen (marzenie)
la vida|życie
la muerte|śmierć
la salud|zdrowie
la juventud|młodość
la costumbre|zwyczaj
`},
{ id: "x4-calendar", t: "Czas i kalendarz", d: "La fecha, el siglo, a principios de, a finales de…", k: "v", i: `
la fecha|data
el calendario|kalendarz
el siglo|wiek (stulecie)
la década|dekada
el fin de semana|weekend
el día festivo|dzień wolny (święto)
el puente|długi weekend
a principios de mes|na początku miesiąca
a mediados de mayo|w połowie maja
a finales de año|pod koniec roku
hace un año|rok temu
dentro de un mes|za miesiąc
desde hace|od (jakiegoś czasu)
el próximo lunes|w przyszły poniedziałek
el lunes pasado|w zeszły poniedziałek
la víspera|wigilia (dzień przed)
el plazo|termin
la cita|spotkanie (umówiona wizyta)
la agenda|terminarz
la hora punta|godzina szczytu
el mediodía|południe
la medianoche|północ
diario|codzienny
semanal|cotygodniowy
mensual|comiesięczny
`},
{ id: "x4-renting", t: "Mieszkanie i wynajem", d: "Alquilar un piso, el casero, la fianza…", k: "v", i: `
alquilar|wynajmować
el alquiler|czynsz (najem)
el piso compartido|mieszkanie współdzielone
el compañero de piso|współlokator
el casero|właściciel (wynajmujący)
el inquilino|najemca
la fianza|kaucja
el contrato de alquiler|umowa najmu
amueblado|umeblowany
sin amueblar|nieumeblowany
los gastos|opłaty (koszty)
la luz|prąd (światło)
la calefacción|ogrzewanie
el aire acondicionado|klimatyzacja
el ascensor|winda
la planta baja|parter
el primer piso|pierwsze piętro
el ático|poddasze
el barrio|dzielnica
la mudanza|przeprowadzka
mudarse|przeprowadzać się
el vecino|sąsiad
luminoso|jasny (dobrze oświetlony)
exterior|z oknami na ulicę
la inmobiliaria|biuro nieruchomości
`},
{ id: "x4-phone", t: "Telefon i poczta", d: "Llamar, colgar, el buzón, el sello…", k: "v", i: `
llamar por teléfono|dzwonić
la llamada|rozmowa (połączenie)
el número|numer
colgar|rozłączyć się
marcar|wybrać numer
comunicar|być zajętym (o linii)
el mensaje de voz|wiadomość głosowa
dejar un mensaje|zostawić wiadomość
devolver la llamada|oddzwonić
¿Diga?|Halo? (odbierając)
¿De parte de quién?|Kto mówi?
Se ha cortado.|Rozłączyło się.
No hay cobertura.|Nie ma zasięgu.
la oficina de correos|poczta
la carta|list
el sobre|koperta
el sello|znaczek
el paquete|paczka
el buzón|skrzynka pocztowa
el cartero|listonosz
enviar|wysyłać
recibir|otrzymywać
la dirección|adres
el código postal|kod pocztowy
certificado|polecony
`},
{ id: "x4-emotions", t: "Emocje", d: "Alegría, miedo, vergüenza… Me da vergüenza = wstydzę się.", k: "v", i: `
la alegría|radość
la tristeza|smutek
el miedo|strach
la rabia|wściekłość
la vergüenza|wstyd
la sorpresa|zaskoczenie
el asco|obrzydzenie
la envidia|zazdrość (zawiść)
los celos|zazdrość (w związku)
el orgullo|duma
la culpa|wina
la ilusión|radosne oczekiwanie (nadzieja)
la pena|żal (smutek)
el estrés|stres
la calma|spokój
me da miedo|boję się (to mnie przeraża)
me da vergüenza|wstydzę się
me da pena|jest mi przykro (żal mi)
me hace ilusión|cieszę się na to
me pone nervioso|denerwuje mnie
estar de buen humor|być w dobrym humorze
estar de mal humor|być w złym humorze
sentirse solo|czuć się samotnym
estar harto|mieć dość
estar orgulloso|być dumnym
`}
]);
})();
