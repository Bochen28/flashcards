/* Etap 5 – słownictwo B1. */
(function () {
var CHOICE = ["en2pl", "pl2en", "listen"];
ADD("s5", [
{ id: "x5-jobhunt", t: "Szukanie pracy", d: "La oferta de empleo, el puesto, la experiencia…", k: "v", i: `
la oferta de empleo|oferta pracy
el puesto|stanowisko
el empleo|zatrudnienie (praca)
el desempleo|bezrobocie
el candidato|kandydat
la experiencia|doświadczenie
la formación|wykształcenie (szkolenie)
la carta de presentación|list motywacyjny
la entrevista de trabajo|rozmowa kwalifikacyjna
contratar|zatrudniać
despedir|zwalniać
dimitir|złożyć wypowiedzenie
el sueldo bruto|pensja brutto
el sueldo neto|pensja netto
las prácticas|praktyki (staż)
el período de prueba|okres próbny
la jornada laboral|dzień pracy (etat)
el ascenso|awans
la empresa multinacional|korporacja
autónomo|samozatrudniony
el sindicato|związek zawodowy
la jubilación|emerytura (przejście na emeryturę)
jubilarse|przejść na emeryturę
los recursos humanos|dział kadr (HR)
solicitar un puesto|ubiegać się o stanowisko
`},
{ id: "x5-tech", t: "Technologia", d: "El software, la nube, actualizar, la inteligencia artificial…", k: "v", i: `
la tecnología|technologia
el dispositivo|urządzenie
el programa|program
la aplicación|aplikacja
actualizar|aktualizować
instalar|instalować
la nube|chmura
la copia de seguridad|kopia zapasowa
el virus|wirus
el pirata informático|haker
la inteligencia artificial|sztuczna inteligencja
el robot|robot
la pantalla táctil|ekran dotykowy
el cargador|ładowarka
los auriculares|słuchawki
inalámbrico|bezprzewodowy
la impresora|drukarka
la memoria|pamięć
la base de datos|baza danych
el navegador|przeglądarka
la red|sieć
el usuario|użytkownik
la contraseña segura|bezpieczne hasło
iniciar sesión|zalogować się
cerrar sesión|wylogować się
`},
{ id: "x5-crime", t: "Przestępczość", d: "El ladrón, robar, la denuncia, el juicio…", k: "v", i: `
el delito|przestępstwo
el ladrón|złodziej
robar|kraść (okradać)
el robo|kradzież
el atraco|napad
el asesinato|morderstwo
el sospechoso|podejrzany
el testigo|świadek
la víctima|ofiara
la policía|policja
detener|zatrzymać (aresztować)
la denuncia|zgłoszenie (doniesienie)
poner una denuncia|zgłosić przestępstwo
el juicio|proces (sądowy)
el juez|sędzia
el abogado|adwokat
la cárcel|więzienie
la multa|grzywna (mandat)
culpable|winny
inocente|niewinny
la prueba|dowód
el carterista|kieszonkowiec
la estafa|oszustwo
el estafador|oszust
la seguridad|bezpieczeństwo
`},
{ id: "x5-society", t: "Społeczeństwo i polityka", d: "El gobierno, las elecciones, votar…", k: "v", i: `
la sociedad|społeczeństwo
el gobierno|rząd
el presidente|prezydent (premier w Hiszpanii)
el ministro|minister
el parlamento|parlament
las elecciones|wybory
votar|głosować
el partido político|partia polityczna
el ciudadano|obywatel
la ley|ustawa (prawo)
los derechos|prawa
la democracia|demokracja
la manifestación|demonstracja
la huelga|strajk
los impuestos|podatki
la pobreza|bieda
la riqueza|bogactwo
la igualdad|równość
la inmigración|imigracja
el inmigrante|imigrant
el desempleo|bezrobocie
la crisis|kryzys
el ayuntamiento|urząd miasta
el alcalde|burmistrz
la comunidad autónoma|wspólnota autonomiczna (region)
`},
{ id: "x5-wildlife", t: "Przyroda i zwierzęta", d: "La selva, el desierto, el águila, la ballena…", k: "v", i: `
la selva|dżungla
el desierto|pustynia
la costa|wybrzeże
la isla|wyspa
el volcán|wulkan
la cueva|jaskinia
la cascada|wodospad
el valle|dolina
la colina|wzgórze
el águila|orzeł
la ballena|wieloryb
el delfín|delfin
el tiburón|rekin
el pulpo|ośmiornica
el cocodrilo|krokodyl
la jirafa|żyrafa
el camello|wielbłąd
el ciervo|jeleń
la ardilla|wiewiórka
el búho|sowa
la hormiga|mrówka
el mosquito|komar
la araña|pająk
la planta|roślina
la hoja|liść
`},
{ id: "x5-taste", t: "Smaki i gotowanie", d: "Dulce, salado, picante, a la plancha, al horno…", k: "v", i: `
dulce|słodki
salado|słony
amargo|gorzki
ácido|kwaśny
picante|ostry
sabroso|smaczny
soso|mdły (bez smaku)
crudo|surowy
hecho|ugotowany (wysmażony)
poco hecho|krwisty (mało wysmażony)
muy hecho|dobrze wysmażony
a la plancha|z grilla (z płyty)
al horno|pieczony
frito|smażony
cocido|gotowany
asado|pieczony (z rożna)
la receta|przepis
el ingrediente|składnik
pelar|obierać
mezclar|mieszać
añadir|dodawać
calentar|podgrzewać
probar|próbować
la especia|przyprawa
el sabor|smak
`},
{ id: "x5-tools", t: "Narzędzia i naprawy", d: "El martillo, el destornillador, arreglar…", k: "v", i: `
la herramienta|narzędzie
el martillo|młotek
el clavo|gwóźdź
el tornillo|śruba
el destornillador|śrubokręt
las tijeras|nożyczki
el taladro|wiertarka
la cinta adhesiva|taśma klejąca
el pegamento|klej
la escalera de mano|drabina
el cubo|wiadro
el enchufe|gniazdko (wtyczka)
la bombilla|żarówka
el grifo|kran
la tubería|rura
el fontanero|hydraulik
el electricista|elektryk
arreglar|naprawiać
romperse|zepsuć się
estropearse|popsuć się
funcionar|działać
no funciona|nie działa
pintar la pared|malować ścianę
cambiar la bombilla|wymienić żarówkę
hay una fuga|jest przeciek
`},
{ id: "x5-moves", t: "Ruchy i gesty", d: "Saltar, empujar, tirar, coger, agacharse…", k: "v", i: `
saltar|skakać
empujar|pchać
tirar|ciągnąć (też: rzucać)
lanzar|rzucać
coger|łapać (brać)
soltar|puścić
levantar|podnosić
agacharse|schylać się
arrodillarse|klękać
tumbarse|kłaść się
girarse|obracać się
caerse|przewracać się
tropezar|potknąć się
abrazar|przytulać
besar|całować
saludar con la mano|machać ręką
señalar|wskazywać
asentir|kiwać głową (przytakiwać)
sonreír|uśmiechać się
reírse|śmiać się
guiñar un ojo|mrugnąć
encogerse de hombros|wzruszyć ramionami
dar la mano|podać rękę
tocar|dotykać
apoyarse|opierać się
`},
{ id: "x5-opinion-adj", t: "Oceny", d: "Genial, increíble, horrible, regular…", k: "v", i: `
genial|świetny
estupendo|wspaniały
increíble|niesamowity
maravilloso|cudowny
fantástico|fantastyczny
impresionante|imponujący
interesante|ciekawy
divertido|zabawny
emocionante|ekscytujący
regular|taki sobie
normal|zwyczajny
aburrido|nudny
pesado|męczący (nudny)
horrible|okropny
terrible|straszny
desastroso|katastrofalny
decepcionante|rozczarowujący
raro|dziwny
extraño|dziwny (obcy)
sorprendente|zaskakujący
agradable|przyjemny
desagradable|nieprzyjemny
precioso|przepiękny
original|oryginalny
útil|przydatny
`},
{ id: "x5-prefix", t: "Przedrostki: des-, in-, re-", d: "Hacer – deshacer, posible – imposible, leer – releer.", k: "v", i: `
deshacer|cofnąć (rozpakować)
desconocido|nieznany
desordenado|nieuporządkowany
descontento|niezadowolony
desaparecer|znikać
desconfiar|nie ufać
desagradable|nieprzyjemny
desempleo|bezrobocie
imposible|niemożliwy
impaciente|niecierpliwy
inseguro|niepewny
injusto|niesprawiedliwy
incómodo|niewygodny
innecesario|niepotrzebny
ilegal|nielegalny
irresponsable|nieodpowiedzialny
releer|przeczytać ponownie
rehacer|przerobić (zrobić od nowa)
reconstruir|odbudować
anteayer|przedwczoraj
prever|przewidzieć
preparar|przygotować
sobrevivir|przeżyć
subrayar|podkreślić
contradecir|zaprzeczać
`},
{ id: "x5-eshop", t: "Zakupy w internecie", d: "El pedido, el envío, la devolución…", k: "v", i: `
comprar por internet|kupować przez internet
la tienda online|sklep internetowy
el pedido|zamówienie
hacer un pedido|złożyć zamówienie
el carrito|koszyk
el envío|wysyłka
los gastos de envío|koszty wysyłki
el envío gratuito|darmowa dostawa
la entrega|dostawa
el repartidor|kurier
el plazo de entrega|termin dostawy
la devolución|zwrot
devolver|zwracać
el reembolso|zwrot pieniędzy
la garantía|gwarancja
la reseña|recenzja (opinia)
la valoración|ocena
el código de descuento|kod rabatowy
la talla|rozmiar
agotado|wyprzedany
en stock|dostępny (na stanie)
rastrear el paquete|śledzić paczkę
el método de pago|metoda płatności
la oferta|promocja
la factura|faktura
`},
{ id: "x5-sport2", t: "Sport 2", d: "El entrenador, el campeonato, marcar un gol…", k: "v", i: `
el entrenador|trener
el árbitro|sędzia
el campeonato|mistrzostwa
la liga|liga
la final|finał
el campeón|mistrz
el aficionado|kibic
el estadio|stadion
marcar un gol|strzelić gola
el resultado|wynik
el empate|remis
la victoria|zwycięstwo
la derrota|porażka
entrenar|trenować
competir|rywalizować
la medalla|medal
el récord|rekord
el ciclismo|kolarstwo
el atletismo|lekkoatletyka
la vela|żeglarstwo
el boxeo|boks
el senderismo|turystyka piesza
la escalada|wspinaczka
el esquí|narciarstwo
la carrera|bieg (wyścig)
`},
{ id: "x5-opinions", t: "Wyrażanie opinii", d: "Creo que…, en mi opinión…, estoy de acuerdo…", k: "v", ex: CHOICE, i: `
Creo que sí.|Myślę, że tak.
Creo que no.|Myślę, że nie.
En mi opinión…|Moim zdaniem…
Para mí…|Dla mnie…
Estoy de acuerdo.|Zgadzam się.
No estoy de acuerdo.|Nie zgadzam się.
Tienes razón.|Masz rację.
Depende.|To zależy.
Me parece bien.|Wydaje mi się w porządku.
Me parece que…|Wydaje mi się, że…
No lo creo.|Nie sądzę.
¡Qué va!|Gdzie tam!
¡Por supuesto!|Oczywiście!
¡Ni hablar!|Nie ma mowy!
Puede ser.|Może być.
Por un lado… por otro lado…|Z jednej strony… z drugiej strony…
Lo que pasa es que…|Rzecz w tym, że…
A mi modo de ver…|Z mojego punktu widzenia…
Sinceramente…|Szczerze mówiąc…
¿Tú qué opinas?|A ty co sądzisz?
`},
{ id: "x5-verbprep", t: "Czasowniki z przyimkami", d: "Pensar en, soñar con, depender de, casarse con…", k: "v", i: `
pensar en|myśleć o
soñar con|śnić o (marzyć o)
depender de|zależeć od
casarse con|ożenić się z
enamorarse de|zakochać się w
acordarse de|pamiętać o
olvidarse de|zapomnieć o
tratar de|starać się (dotyczyć)
quejarse de|narzekać na
reírse de|śmiać się z
confiar en|ufać komuś
insistir en|nalegać na
consistir en|polegać na
contar con|liczyć na
empezar a|zaczynać (coś robić)
aprender a|uczyć się (robić coś)
ayudar a|pomagać w
dejar de|przestać
acabar de|właśnie skończyć
volver a|zrobić znowu
tener ganas de|mieć ochotę
preocuparse por|martwić się o
interesarse por|interesować się
despedirse de|żegnać się z
alegrarse de|cieszyć się z
`},
{ id: "x5-nouns", t: "Rzeczowniki B1", d: "El ambiente, la ventaja, el desarrollo…", k: "v", i: `
el ambiente|atmosfera (środowisko)
la ventaja|zaleta (przewaga)
la desventaja|wada
el desarrollo|rozwój
el crecimiento|wzrost
el cambio|zmiana
la mejora|poprawa
el aumento|wzrost (podwyżka)
la disminución|spadek
el objetivo|cel
el resultado|wynik
la causa|przyczyna
la consecuencia|skutek
el riesgo|ryzyko
el peligro|niebezpieczeństwo
la oportunidad|okazja (szansa)
la ayuda|pomoc
el apoyo|wsparcie
el esfuerzo|wysiłek
la capacidad|zdolność
la necesidad|potrzeba
el acuerdo|porozumienie
el conocimiento|wiedza
la experiencia|doświadczenie
el comportamiento|zachowanie
`},
{ id: "x5-verbs-b1", t: "Czasowniki B1", d: "Conseguir, lograr, evitar, mejorar…", k: "v", i: `
conseguir|osiągnąć (zdobyć)
lograr|osiągnąć (zdołać)
evitar|unikać
mejorar|poprawiać
empeorar|pogarszać
aumentar|zwiększać
reducir|zmniejszać
desarrollar|rozwijać
permitir|pozwalać
prohibir|zabraniać
proponer|proponować
aceptar|akceptować
rechazar|odrzucać
negar|zaprzeczać
admitir|przyznawać
sugerir|sugerować
comparar|porównywać
elegir|wybierać
dudar|wątpić
suponer|przypuszczać
comprobar|sprawdzać
realizar|realizować
alcanzar|osiągać (sięgać)
superar|pokonywać
fracasar|ponieść porażkę
`}
]);
})();
