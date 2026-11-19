/* Etap 2 – podstawy gramatyki w praktyce (A1). */
(function () {
var SENT = ["order", "pl2en", "order", "en2pl", "listen"];
var CHOICE = ["en2pl", "pl2en", "listen"];
ADD("s2", [
{ id: "x2-ser", t: "Ser: soy, eres, es…", d: "Kim jesteś, skąd jesteś, jaki jesteś.", k: "f", i: `
Yo {soy} Ana.|Jestem Ana.|es,eres|Ser: soy, eres, es, somos, sois, son.
Tú {eres} mi amigo.|Ty jesteś moim przyjacielem.|es,soy
Él {es} médico.|On jest lekarzem.|son,eres|Zawód bez rodzajnika: es médico.
Nosotros {somos} de Polonia.|Jesteśmy z Polski.|son,sois|Ser de = pochodzić z.
Vosotros {sois} muy simpáticos.|Jesteście bardzo sympatyczni.|son,somos
Ellos {son} hermanos.|Oni są braćmi.|es,somos
Ella {es} alta y rubia.|Ona jest wysoka i jest blondynką.|está,son|Cechy stałe (wygląd, charakter) – ser.
¿De dónde {eres}?|Skąd jesteś?|estás,es
La casa {es} grande.|Dom jest duży.|está,son
Las manzanas {son} rojas.|Jabłka są czerwone.|es,están
Hoy {es} lunes.|Dziś jest poniedziałek.|está,son|Dni, daty i godziny – ser.
{Son} las tres.|Jest trzecia.|Es,Están
Usted {es} muy amable.|Jest Pan bardzo miły.|eres,está|Usted (Pan/Pani) + 3. osoba: usted es.
Mi padre {es} profesor.|Mój tata jest nauczycielem.|está,son
¿Quién {es}?|Kto to?|está,son
El examen {es} el viernes.|Egzamin jest w piątek.|está,son|Kiedy coś się odbywa – ser.
Ustedes {son} muy amables.|Państwo są bardzo mili.|sois,están
Yo no {soy} español.|Nie jestem Hiszpanem.|es,estoy
`},
{ id: "x2-estar", t: "Estar: gdzie i jak?", d: "Estoy en casa. Estoy cansado.", k: "f", i: `
Yo {estoy} en casa.|Jestem w domu.|soy,está|Estar: estoy, estás, está, estamos, estáis, están.
¿Dónde {estás}?|Gdzie jesteś?|eres,está|Gdzie coś jest – estar.
Madrid {está} en España.|Madryt jest w Hiszpanii.|es,están
Nosotros {estamos} cansados.|Jesteśmy zmęczeni.|somos,están|Stan, samopoczucie – estar.
Ellos {están} en el parque.|Oni są w parku.|son,estamos
La sopa {está} fría.|Zupa jest zimna.|es,están
¿Cómo {estás}?|Jak się masz?|eres,está
{Estoy} bien, gracias.|Dobrze, dziękuję.|Soy,Está
Mi madre {está} enferma.|Moja mama jest chora.|es,están
La puerta {está} abierta.|Drzwi są otwarte.|es,están
Vosotros {estáis} muy guapos hoy.|Ładnie dziś wyglądacie.|sois,están
El banco {está} cerca.|Bank jest blisko.|es,hay
Los niños {están} contentos.|Dzieci są zadowolone.|son,está
¿{Está} ocupado este asiento?|Czy to miejsce jest zajęte?|Es,Hay
{Estamos} de vacaciones.|Jesteśmy na wakacjach.|Somos,Son|Estar de vacaciones = być na wakacjach.
El café {está} caliente.|Kawa jest gorąca.|es,hay
Las llaves {están} en la mesa.|Klucze są na stole.|son,hay
`},
{ id: "x2-serestar", t: "Ser czy estar?", d: "Ser – kim / jaki ktoś jest zawsze. Estar – gdzie i w jakim stanie.", k: "f", i: `
Juan {es} muy alto.|Juan jest bardzo wysoki.|está,hay|Cecha stała – ser.
Juan {está} en la oficina.|Juan jest w biurze.|es,hay|Miejsce – estar.
Hoy {estoy} muy cansado.|Dziś jestem bardzo zmęczony.|soy,es|Stan chwilowy – estar.
Mi hermana {es} abogada.|Moja siostra jest prawniczką.|está,hay
El café {está} frío.|Kawa jest zimna (wystygła).|es,hay
El hielo {es} frío.|Lód jest zimny (z natury).|está,hay
¿Qué hora {es}?|Która godzina?|está,son
La fiesta {es} en mi casa.|Impreza jest u mnie w domu.|está,hay|Wydarzenie (gdzie się odbywa) – ser!
Nosotros {somos} polacos.|Jesteśmy Polakami.|estamos,son
¿{Estás} listo?|Jesteś gotowy?|Eres,Es|Estar listo = być gotowym; ser listo = być bystrym.
Mi abuela {es} muy simpática.|Moja babcia jest bardzo sympatyczna.|está,son
Ana {está} triste hoy.|Ana jest dziś smutna.|es,son
La tienda {está} cerrada.|Sklep jest zamknięty.|es,son
Este libro {es} muy interesante.|Ta książka jest bardzo ciekawa.|está,son
¿De qué color {es} tu coche?|Jakiego koloru jest twój samochód?|está,son
La sopa {está} muy rica.|Zupa jest bardzo smaczna.|es,son|O smaku jedzenia teraz – estar.
Mis padres {están} de viaje.|Moi rodzice są w podróży.|son,es
El concierto {es} a las nueve.|Koncert jest o dziewiątej.|está,son
`},
{ id: "x2-articles", t: "El, la, un, una", d: "Rodzajnik określony i nieokreślony – zgadza się z rodzajem i liczbą.", k: "f", i: `
{El} libro está en la mesa.|Książka jest na stole.|La,Los|El – rodzaj męski, la – żeński.
{La} casa es muy bonita.|Dom jest bardzo ładny.|El,Las
{Los} niños juegan en el parque.|Dzieci bawią się w parku.|El,Las
{Las} flores son preciosas.|Kwiaty są piękne.|Los,La
Tengo {un} perro.|Mam psa.|una,el|Un / una – „jakiś, jeden”.
Quiero {una} cerveza.|Chcę piwo.|un,el
Hay {un} problema.|Jest problem.|una,el|El problema – rodzaj męski mimo -a!
Lavo {la} mano.|Myję rękę.|el,los|La mano – rodzaj żeński mimo -o!
{El} día está muy bonito.|Dzień jest bardzo ładny.|La,Los
Mi padre es {médico}.|Mój tata jest lekarzem.|un médico,el médico|Zawód po ser – bez rodzajnika.
{El} agua está fría.|Woda jest zimna.|La,Los|El agua – słowo żeńskie, ale przed akcentowanym a- mówimy el.
Me gusta {la} música.|Lubię muzykę.|una,el|Mówiąc ogólnie (lubię muzykę) – rodzajnik określony.
Necesito {unos} zapatos nuevos.|Potrzebuję nowych butów.|unas,los|Unos / unas – kilka, jakieś.
Compro {unas} manzanas.|Kupuję (trochę) jabłek.|unos,las
{La} ciudad es grande.|Miasto jest duże.|El,Las|-dad, -ción – zawsze rodzaj żeński.
{El} mapa es antiguo.|Mapa jest stara.|La,Las
`},
{ id: "x2-tener", t: "Tener: mam, mam lat, jestem głodny", d: "Tener = mieć. Także: wiek, głód, pragnienie, zimno.", k: "f", i: `
Yo {tengo} dos hermanos.|Mam dwóch braci.|tiene,tienes|Tener: tengo, tienes, tiene, tenemos, tenéis, tienen.
¿Cuántos años {tienes}?|Ile masz lat?|tiene,eres|Wiek – tener: tengo 20 años.
Mi abuela {tiene} ochenta años.|Moja babcia ma osiemdziesiąt lat.|es,tienen
Nosotros {tenemos} un perro.|Mamy psa.|tienen,tenéis
{Tengo} hambre.|Jestem głodny.|Estoy,Soy|Tener hambre = być głodnym.
¿{Tienes} sed?|Chce ci się pić?|Estás,Eres
Tengo {frío}.|Jest mi zimno.|fría,caliente|Tener frío / calor = jest mi zimno / gorąco.
Tengo {sueño}.|Chce mi się spać.|sueña,sueñas
Ellos {tienen} prisa.|Oni się spieszą.|están,son|Tener prisa = spieszyć się.
Tienes {razón}.|Masz rację.|verdad,razones|Tener razón = mieć rację.
Tengo {miedo} de los perros.|Boję się psów.|asustado,miedos|Tener miedo = bać się.
Ella {tiene} los ojos azules.|Ona ma niebieskie oczy.|es,está
¿{Tenéis} coche?|Macie samochód?|Tienen,Tenemos
Tengo {que} trabajar mañana.|Muszę jutro pracować.|de,a|Tener que + bezokolicznik = musieć.
No {tengo} tiempo.|Nie mam czasu.|tiene,soy
Usted {tiene} una llamada.|Ma Pan telefon.|tienes,tengo
`},
{ id: "x2-hay", t: "Hay czy está?", d: "Hay = jest / są (coś istnieje). Está = jest (konkretna rzecz gdzieś).", k: "f", i: `
{Hay} un banco cerca de aquí.|Niedaleko jest (jakiś) bank.|Está,Es|Hay + rzecz nieokreślona (un, una, liczba).
El banco {está} en la plaza.|Bank jest na placu.|hay,es|Está + konkretna rzecz (el, la).
{Hay} muchos turistas en verano.|Latem jest dużo turystów.|Están,Son
¿{Hay} un supermercado por aquí?|Czy jest tu gdzieś supermarket?|Está,Es
¿Dónde {está} el supermercado?|Gdzie jest supermarket?|hay,es
En mi calle {hay} dos restaurantes.|Na mojej ulicy są dwie restauracje.|están,son|Hay ma jedną formę – także w liczbie mnogiej.
Mis amigos {están} en la playa.|Moi przyjaciele są na plaży.|hay,son
No {hay} leche.|Nie ma mleka.|está,es
¿Qué {hay} en la nevera?|Co jest w lodówce?|está,es
{Hay} que estudiar más.|Trzeba więcej się uczyć.|Está,Tiene|Hay que + bezokolicznik = trzeba.
Las llaves {están} en el bolso.|Klucze są w torebce.|hay,son
{Hay} gente en la calle.|Na ulicy są ludzie.|Está,Están
¿Cuántas personas {hay}?|Ile jest osób?|están,son
La farmacia {está} al lado del banco.|Apteka jest obok banku.|hay,es
`},
{ id: "x2-gustar", t: "Me gusta, me gustan", d: "Lubię = podoba mi się. Czasownik zgadza się z tym, co lubimy.", k: "f", i: `
Me {gusta} el café.|Lubię kawę.|gustan,gusto|Me gusta + liczba pojedyncza.
Me {gustan} los perros.|Lubię psy.|gusta,gustas|Me gustan + liczba mnoga.
¿Te {gusta} bailar?|Lubisz tańczyć?|gustas,gustan|Z bezokolicznikiem – gusta.
A mi madre le {gusta} cocinar.|Moja mama lubi gotować.|gustan,gustas
No me {gusta} el fútbol.|Nie lubię piłki nożnej.|gustan,gusto
Nos {gustan} las películas de terror.|Lubimy horrory.|gusta,gustamos
¿{Te} gusta la música clásica?|Lubisz muzykę klasyczną?|Tú,Ti|Me, te, le, nos, os, les.
A ellos {les} gusta viajar.|Oni lubią podróżować.|le,se
A mí me {encanta} el chocolate.|Uwielbiam czekoladę.|encantan,encanto|Encantar działa jak gustar.
Me {encantan} tus zapatos.|Bardzo podobają mi się twoje buty.|encanta,encanto
¿Os {gusta} la paella?|Smakuje wam paella?|gustan,gustáis
A Pedro no le {gustan} las verduras.|Pedro nie lubi warzyw.|gusta,gustas
Me gusta {más} el té.|Wolę herbatę. (Bardziej lubię herbatę.)|mucho,bien
¿Qué te {gusta} hacer los fines de semana?|Co lubisz robić w weekendy?|gustas,gustan
`},
{ id: "x2-poss", t: "Mi, tu, su, nuestro", d: "Mój, twój, jego/jej… Przed liczbą mnogą dodajemy -s.", k: "f", i: `
Este es {mi} hermano.|To jest mój brat.|mis,me|Mi – jedna rzecz, mis – wiele.
Estos son {mis} padres.|To są moi rodzice.|mi,me
¿Dónde está {tu} coche?|Gdzie jest twój samochód?|tus,te
Me gustan {tus} gafas.|Podobają mi się twoje okulary.|tu,te
Ana vive con {su} madre.|Ana mieszka ze swoją mamą.|sus,se|Su = jego, jej, ich, Pana/Pani.
Ellos venden {su} casa.|Oni sprzedają swój dom.|sus,suyo
{Nuestra} casa es pequeña.|Nasz dom jest mały.|Nuestro,Nuestros|Nuestro / nuestra – zgadza się z rzeczą.
{Nuestros} amigos viven en Madrid.|Nasi przyjaciele mieszkają w Madrycie.|Nuestras,Nuestro
¿Es {vuestro} perro?|Czy to wasz pies?|vuestra,vuestros
Señor García, ¿es este {su} abrigo?|Panie García, czy to Pana płaszcz?|tu,vuestro|Do Pana / Pani – su.
{Sus} hijos son muy simpáticos.|Jego dzieci są bardzo sympatyczne.|Su,Suyos
Mi hermana y {su} novio.|Moja siostra i jej chłopak.|sus,mi
Estas son {nuestras} llaves.|To są nasze klucze.|nuestros,nuestra
El libro es {mío}.|Ta książka jest moja.|mi,me|Po ser: mío, tuyo, suyo, nuestro.
`},
{ id: "x2-qwords", t: "Pytania: qué, quién, dónde…", d: "Słowa pytające zawsze z akcentem: ¿Qué? ¿Dónde? ¿Cuándo?", k: "f", i: `
¿{Qué} es esto?|Co to jest?|Quién,Dónde
¿{Quién} es tu profesor?|Kto jest twoim nauczycielem?|Qué,Cuál
¿{Dónde} vives?|Gdzie mieszkasz?|Cuándo,Cómo
¿{Cuándo} es tu cumpleaños?|Kiedy masz urodziny?|Dónde,Cuánto
¿{Cómo} te llamas?|Jak masz na imię?|Qué,Cuál
¿{Cuánto} cuesta?|Ile to kosztuje?|Cuántos,Cómo
¿{Cuántos} años tienes?|Ile masz lat?|Cuánto,Qué
¿{Por qué} estudias español?|Dlaczego uczysz się hiszpańskiego?|Porque,Para
Estudio español {porque} me gusta.|Uczę się hiszpańskiego, bo mi się podoba.|por qué,para|¿Por qué? – pytanie; porque – odpowiedź.
¿{Cuál} es tu número de teléfono?|Jaki jest twój numer telefonu?|Qué,Cómo|¿Cuál es…? – przed „es” zwykle cuál.
¿{Adónde} vas?|Dokąd idziesz?|Dónde,De dónde
¿{De dónde} eres?|Skąd jesteś?|Dónde,Adónde
¿{Qué} hora es?|Która godzina?|Cuál,Cuánta
¿{Con quién} vives?|Z kim mieszkasz?|Quién,Con qué
¿{Cuántas} hermanas tienes?|Ile masz sióstr?|Cuántos,Cuánto
¿{Qué} quieres comer?|Co chcesz zjeść?|Cuál,Cómo
`},
{ id: "x2-sent1", t: "Zdania: o sobie", d: "Imię, wiek, skąd jesteś, co robisz.", k: "o", ex: SENT, i: `
Me llamo Marta.|Mam na imię Marta.
Tengo veinticinco años.|Mam dwadzieścia pięć lat.
Soy de Polonia.|Jestem z Polski.
Vivo en Cracovia.|Mieszkam w Krakowie.
Soy estudiante de medicina.|Jestem studentką medycyny.
Trabajo en una oficina.|Pracuję w biurze.
Hablo polaco e inglés.|Mówię po polsku i po angielsku.
Estudio español desde hace un año.|Uczę się hiszpańskiego od roku.
Tengo un hermano y una hermana.|Mam brata i siostrę.
No tengo hijos.|Nie mam dzieci.
Me gusta mucho leer.|Bardzo lubię czytać.
Mi color favorito es el azul.|Mój ulubiony kolor to niebieski.
Estoy casado.|Jestem żonaty.
Mi cumpleaños es en mayo.|Mam urodziny w maju.
Soy alta y morena.|Jestem wysoka i jestem brunetką.
Encantado de conocerte.|Miło mi cię poznać.
`},
{ id: "x2-sent2", t: "Zdania: dom i rodzina", d: "Gdzie mieszkasz, z kim, jak wygląda twój dom.", k: "o", ex: SENT, i: `
Vivo con mis padres.|Mieszkam z rodzicami.
Mi casa tiene tres habitaciones.|Mój dom ma trzy pokoje.
La cocina es pequeña.|Kuchnia jest mała.
Hay un jardín detrás de la casa.|Za domem jest ogród.
Mi hermano es mayor que yo.|Mój brat jest starszy ode mnie.
Mis abuelos viven en el campo.|Moi dziadkowie mieszkają na wsi.
Tenemos un gato negro.|Mamy czarnego kota.
Mi madre trabaja en un hospital.|Moja mama pracuje w szpitalu.
Mi padre cocina muy bien.|Mój tata bardzo dobrze gotuje.
El piso está en el centro.|Mieszkanie jest w centrum.
Mi habitación es muy luminosa.|Mój pokój jest bardzo jasny.
Los niños están en el colegio.|Dzieci są w szkole.
El baño está al lado del dormitorio.|Łazienka jest obok sypialni.
Comemos juntos los domingos.|W niedziele jemy razem.
`},
{ id: "x2-sent3", t: "Zdania: proste pytania", d: "Pytania codzienne – i odpowiedzi.", k: "o", ex: SENT, i: `
¿Dónde está el baño?|Gdzie jest łazienka?
¿Cuánto cuesta este libro?|Ile kosztuje ta książka?
¿Hablas inglés?|Mówisz po angielsku?
¿Qué hora es?|Która godzina?
¿Tienes hermanos?|Masz rodzeństwo?
¿Dónde vives?|Gdzie mieszkasz?
¿Qué te gusta hacer?|Co lubisz robić?
¿Puedes repetir, por favor?|Możesz powtórzyć?
¿Cómo se dice esto en español?|Jak to się mówi po hiszpańsku?
¿Hay un banco cerca de aquí?|Czy jest tu w pobliżu bank?
¿A qué hora abre la tienda?|O której otwierają sklep?
¿Quieres un café?|Chcesz kawę?
¿Estás cansado?|Jesteś zmęczony?
¿De dónde es tu profesor?|Skąd jest twój nauczyciel?
`},
{ id: "x2-sent4", t: "Zdania: co lubię?", d: "Me gusta, me encanta, no me gusta nada.", k: "o", ex: SENT, i: `
Me gusta mucho la playa.|Bardzo lubię plażę.
Me encanta el chocolate.|Uwielbiam czekoladę.
No me gusta nada el frío.|W ogóle nie lubię zimna.
Me gustan los animales.|Lubię zwierzęta.
¿Te gusta el cine?|Lubisz kino?
A mi hermana le gusta bailar.|Moja siostra lubi tańczyć.
Nos gusta viajar en verano.|Lubimy podróżować latem.
Prefiero el té al café.|Wolę herbatę od kawy.
Mi deporte favorito es el tenis.|Mój ulubiony sport to tenis.
Me gusta escuchar música por la noche.|Lubię słuchać muzyki wieczorem.
A mis padres les gusta el campo.|Moi rodzice lubią wieś.
No me gustan las verduras.|Nie lubię warzyw.
`},
{ id: "x2-pronouns", t: "Zaimki osobowe", d: "Yo, tú, él, ella, usted… Zaimek często się pomija: (Yo) hablo.", k: "v", ex: CHOICE, i: `
yo|ja
tú|ty
él|on
ella|ona
usted|Pan / Pani
nosotros|my (mężczyźni / mieszane)
nosotras|my (kobiety)
vosotros|wy (mężczyźni / mieszane)
vosotras|wy (kobiety)
ellos|oni
ellas|one
ustedes|Państwo
conmigo|ze mną
contigo|z tobą
para mí|dla mnie
para ti|dla ciebie
`},
{ id: "x2-adverbs", t: "Przysłówki A1", d: "Aquí, allí, ahora, siempre, también…", k: "v", i: `
aquí|tutaj
allí|tam
ahora|teraz
luego|potem
siempre|zawsze
nunca|nigdy
también|też
tampoco|też nie
muy|bardzo
mucho|dużo
poco|mało
bien|dobrze
mal|źle
ya|już
todavía|jeszcze (wciąż)
pronto|wkrótce
tarde|późno
temprano|wcześnie
cerca|blisko
lejos|daleko
juntos|razem
solo|tylko (sam)
más|więcej / bardziej
menos|mniej
quizás|może
`},
{ id: "x2-phrases", t: "Przydatne zwroty", d: "Nie rozumiem, wolniej proszę, jak się mówi…", k: "v", ex: CHOICE, i: `
No entiendo.|Nie rozumiem.
No lo sé.|Nie wiem.
Más despacio, por favor.|Wolniej, proszę.
¿Puede repetir?|Może Pan powtórzyć?
¿Cómo se dice…?|Jak się mówi…?
¿Qué significa?|Co to znaczy?
Hablo un poco de español.|Mówię trochę po hiszpańsku.
¡Claro!|Oczywiście!
Vale.|Okej. / Dobrze.
¡Vamos!|Chodźmy! / Do dzieła!
¡Qué bien!|Jak dobrze! / Super!
¡Qué pena!|Jaka szkoda!
No pasa nada.|Nic nie szkodzi.
¡Cuidado!|Uwaga!
¡Buen provecho!|Smacznego!
¡Buen viaje!|Dobrej podróży!
¡Que te mejores!|Zdrowiej!
¡Enhorabuena!|Gratulacje!
¡Buena suerte!|Powodzenia!
Con permiso.|Przepraszam (przechodząc).
`},
{ id: "x2-feelings", t: "Samopoczucie", d: "Estoy contento, cansado, nervioso… Uczucia – zwykle z estar.", k: "v", i: `
contento|zadowolony
feliz|szczęśliwy
triste|smutny
cansado|zmęczony
enfadado|zły (rozgniewany)
nervioso|zdenerwowany
tranquilo|spokojny
aburrido|znudzony
preocupado|zmartwiony
enfermo|chory
sorprendido|zaskoczony
enamorado|zakochany
ocupado|zajęty
libre|wolny
listo|gotowy
asustado|przestraszony
emocionado|podekscytowany (wzruszony)
relajado|zrelaksowany
estresado|zestresowany
harto|mający dość
`}
]);
})();
