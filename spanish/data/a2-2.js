/* Etap 3 – gramatyka w zdaniach i zdania (A1–A2). */
(function () {
var SENT = ["order", "pl2en", "order", "en2pl", "listen"];
ADD("s3", [
{ id: "x3-present", t: "Czas teraźniejszy w zdaniach", d: "-ar, -er, -ir: hablo, como, vivo.", k: "f", i: `
Yo {hablo} español.|Mówię po hiszpańsku.|habla,hablas|-ar: hablo, hablas, habla, hablamos, habláis, hablan.
Mi hermana {trabaja} en un banco.|Moja siostra pracuje w banku.|trabajo,trabajan
¿Dónde {vives}?|Gdzie mieszkasz?|vive,vivo|-ir: vivo, vives, vive, vivimos, vivís, viven.
Nosotros {comemos} a las dos.|Jemy obiad o drugiej.|comen,coméis|-er: como, comes, come, comemos, coméis, comen.
Ellos {estudian} medicina.|Oni studiują medycynę.|estudia,estudiamos
¿{Bebes} café?|Pijesz kawę?|Bebe,Beben
Mis padres {viven} en Varsovia.|Moi rodzice mieszkają w Warszawie.|vive,vivimos
Vosotros {habláis} muy rápido.|Mówicie bardzo szybko.|hablan,hablamos
Yo no {como} carne.|Nie jem mięsa.|come,comes
Usted {escribe} muy bien.|Pisze Pan bardzo dobrze.|escribes,escribo
¿A qué hora {abre} el banco?|O której otwiera się bank?|abren,abro
Los niños {leen} cuentos.|Dzieci czytają bajki.|lee,leemos
¿{Necesitas} ayuda?|Potrzebujesz pomocy?|Necesita,Necesito
Siempre {escuchamos} la radio.|Zawsze słuchamy radia.|escuchan,escucháis
Ella {vende} pisos.|Ona sprzedaje mieszkania.|vendes,venden
Yo {aprendo} muchas palabras nuevas.|Uczę się wielu nowych słów.|aprende,aprendes
`},
{ id: "x3-stem", t: "Quiero, puedo, duermo, pido", d: "Czasowniki z wymianą samogłoski: e → ie, o → ue, e → i.", k: "f", i: `
Yo {quiero} un café.|Chcę kawę.|quero,quieres|e → ie: quiero, quieres, quiere, queremos, queréis, quieren.
¿{Puedes} ayudarme?|Możesz mi pomóc?|Podes,Puede|o → ue: puedo, puedes, puede, podemos, podéis, pueden.
Nosotros {podemos} ir mañana.|Możemy iść jutro.|puedemos,pueden|W formie nosotros / vosotros nie ma wymiany!
Mi hijo {duerme} mucho.|Mój syn dużo śpi.|dorme,duermo
¿A qué hora {empieza} la película?|O której zaczyna się film?|empeza,empiezan
Yo {pienso} que tienes razón.|Myślę, że masz rację.|penso,piensa
Siempre {pido} paella.|Zawsze zamawiam paellę.|pedo,pides|e → i: pido, pides, pide, pedimos, pedís, piden.
Los niños {juegan} en el parque.|Dzieci bawią się w parku.|jugan,juega|u → ue: tylko jugar.
¿{Recuerdas} su nombre?|Pamiętasz jego imię?|Recordas,Recuerda
Vosotros {queréis} pizza.|Chcecie pizzę.|quieréis,quieren
La tienda {cierra} a las ocho.|Sklep zamykają o ósmej.|cerra,cierran
¿Cuánto {cuesta} el billete?|Ile kosztuje bilet?|costa,cuestan
Yo {vuelvo} a casa a las seis.|Wracam do domu o szóstej.|volvo,vuelve
¿{Prefieres} té o café?|Wolisz herbatę czy kawę?|Preferes,Prefiere
El camarero {sirve} la comida.|Kelner podaje jedzenie.|serve,sirven
No {entiendo} la pregunta.|Nie rozumiem pytania.|entendo,entiende
`},
{ id: "x3-reflexive", t: "Me levanto, se ducha", d: "Czasowniki zwrotne: me, te, se, nos, os, se – przed czasownikiem.", k: "f", i: `
Yo {me} levanto a las siete.|Wstaję o siódmej.|se,te|Me, te, se, nos, os, se.
¿A qué hora {te} acuestas?|O której kładziesz się spać?|se,me
Mi padre {se} ducha por la mañana.|Mój tata bierze prysznic rano.|le,me
Nosotros {nos} vestimos rápido.|Szybko się ubieramy.|se,os
¿Cómo {se} llama tu hermana?|Jak ma na imię twoja siostra?|te,le
Ellos {se} casan en junio.|Oni biorą ślub w czerwcu.|nos,les
Me {levanto} temprano.|Wstaję wcześnie.|levanta,levantas
Los niños se {lavan} los dientes.|Dzieci myją zęby.|lava,laváis|Myć zęby: lavarse los dientes (nie „sus dientes”).
Ana se {pone} el abrigo.|Ana zakłada płaszcz.|pongo,ponen
¿{Os} quedáis a cenar?|Zostajecie na kolację?|Se,Nos
Yo me {acuesto} a las once.|Kładę się spać o jedenastej.|acosto,acuesta
Siempre me {despierto} antes del despertador.|Zawsze budzę się przed budzikiem.|desperto,despierta
No te {preocupes}.|Nie martw się.|preocupas,preocupe
Nos {divertimos} mucho en la fiesta.|Świetnie bawimy się na imprezie.|divertemos,divierten
`},
{ id: "x3-yo", t: "Hago, pongo, salgo, tengo…", d: "Czasowniki nieregularne tylko (albo głównie) w formie „yo”.", k: "f", i: `
Yo {hago} los deberes por la tarde.|Odrabiam lekcje po południu.|haco,hace|Hacer → hago.
{Salgo} de casa a las ocho.|Wychodzę z domu o ósmej.|Salo,Sale|Salir → salgo.
{Pongo} la mesa.|Nakrywam do stołu.|Pono,Pone|Poner → pongo.
No {tengo} tiempo.|Nie mam czasu.|teno,tiene|Tener → tengo, tienes…
{Vengo} de la oficina.|Wracam (przychodzę) z biura.|Veno,Viene|Venir → vengo, vienes…
Siempre {digo} la verdad.|Zawsze mówię prawdę.|deco,dice|Decir → digo, dices…
{Conozco} a tu hermano.|Znam twojego brata.|Conoco,Conoce|Conocer → conozco. Osoby: conocer a.
No {sé} nada.|Nic nie wiem.|sabo,sabe|Saber → sé.
{Traigo} el vino.|Przyniosę wino.|Trao,Trae|Traer → traigo.
{Veo} la tele cada noche.|Co wieczór oglądam telewizję.|Vo,Ve
{Doy} clases de inglés.|Udzielam lekcji angielskiego.|Do,Da|Dar → doy.
{Voy} al gimnasio los lunes.|W poniedziałki chodzę na siłownię.|Vo,Va|Ir → voy, vas, va…
{Conduzco} muy despacio.|Jeżdżę bardzo wolno.|Conduco,Conduce
{Oigo} un ruido.|Słyszę hałas.|Oyo,Oye
`},
{ id: "x3-gerund", t: "Estoy comiendo – teraz", d: "Estar + gerundio: co dzieje się w tej chwili.", k: "f", i: `
Estoy {comiendo}.|(Właśnie) jem.|comando,como|-er / -ir → -iendo.
Ana está {hablando} por teléfono.|Ana rozmawia przez telefon.|hablendo,habla|-ar → -ando.
¿Qué {estás} haciendo?|Co (teraz) robisz?|eres,estáis
Estamos {viendo} una película.|Oglądamy film.|veiendo,vemos
Los niños {están} durmiendo.|Dzieci śpią.|son,estáis
Está {lloviendo}.|Pada deszcz.|lloveando,llueve
Estoy {leyendo} un libro muy bueno.|Czytam bardzo dobrą książkę.|leiendo,leendo|Leer → leyendo.
Mi padre está {durmiendo} la siesta.|Tata ucina sobie drzemkę.|dormiendo,duermiendo|Dormir → durmiendo.
¿Me estás {escuchando}?|Słuchasz mnie?|escuchendo,escuchas
Estamos {esperando} el autobús.|Czekamy na autobus.|esperiendo,esperamos
Ella está {escribiendo} un correo.|Ona pisze e-maila.|escribando,escribe
Estoy {aprendiendo} español.|Uczę się hiszpańskiego.|aprendando,aprendo
¿Qué estáis {haciendo}?|Co robicie?|hacendo,hacéis
Está {pidiendo} la cuenta.|Prosi o rachunek.|pediendo,pide|Pedir → pidiendo.
`},
{ id: "x3-ira", t: "Voy a + bezokolicznik", d: "Najprostsza przyszłość: voy a comer = zjem, będę jeść.", k: "f", i: `
{Voy} a estudiar esta tarde.|Po południu będę się uczyć.|Va,Vas|Ir a + bezokolicznik = zamierzam, będę.
¿Qué {vas} a hacer mañana?|Co będziesz jutro robić?|va,vais
Vamos {a} cenar fuera.|Zjemy kolację na mieście.|de,en
Mis padres {van} a viajar a Italia.|Moi rodzice pojadą do Włoch.|va,vamos
Va a {llover}.|Będzie padać.|llueve,lloviendo
¿{Vais} a venir a la fiesta?|Przyjdziecie na imprezę?|Van,Vamos
No {voy} a comprar nada.|Niczego nie kupię.|va,vas
Ana va a {tener} un bebé.|Ana będzie mieć dziecko.|tiene,teniendo
¿A qué hora {vamos} a quedar?|O której się umówimy?|van,voy
Este verano voy a {aprender} a nadar.|Tego lata nauczę się pływać.|aprendo,aprendiendo
El tren {va} a llegar tarde.|Pociąg się spóźni.|van,vas
Vas {a} ver, te va a gustar.|Zobaczysz, spodoba ci się.|de,por
`},
{ id: "x3-prep", t: "A, en, de, con…", d: "Najważniejsze przyimki i skróty al, del.", k: "f", i: `
Voy {al} cine.|Idę do kina.|a el,en el|A + el = al.
Vengo {del} trabajo.|Wracam z pracy.|de el,al|De + el = del.
Estoy {en} casa.|Jestem w domu.|a,de|En – w, na (gdzie?).
Voy {a} Madrid.|Jadę do Madrytu.|en,de|A – dokąd?
Soy {de} Polonia.|Jestem z Polski.|en,a
Vivo {con} mis padres.|Mieszkam z rodzicami.|de,en
El libro está {encima de} la mesa.|Książka jest na stole.|debajo de,dentro de
El gato está {debajo de} la cama.|Kot jest pod łóżkiem.|encima de,detrás de
Es la casa {de} mi abuela.|To dom mojej babci.|a,en|Przynależność – de.
Viajamos {en} tren.|Podróżujemy pociągiem.|con,por|Środek transportu – en (ale: a pie).
Voy {a} pie.|Idę pieszo.|en,con
Veo {a} mi madre los domingos.|W niedziele widuję się z mamą.|en,de|A przed osobą: veo a mi madre.
El regalo es {para} ti.|Prezent jest dla ciebie.|por,a
Trabajo {desde} las nueve hasta las cinco.|Pracuję od dziewiątej do piątej.|en,por|Desde … hasta = od … do.
`},
{ id: "x3-this", t: "Este, ese, aquel", d: "Ten (tu), ten (tam), tamten (daleko).", k: "f", i: `
{Este} libro es mío.|Ta książka (tutaj) jest moja.|Esta,Estos|Este (m), esta (f), estos, estas – blisko mnie.
{Esta} casa es muy grande.|Ten dom jest bardzo duży.|Este,Estas
¿Te gustan {estos} zapatos?|Podobają ci się te buty?|estas,este
{Esas} chicas son mis primas.|Te dziewczyny to moje kuzynki.|Esos,Esa|Ese, esa, esos, esas – blisko ciebie.
¿Qué es {eso}?|Co to jest? (to tam)|ese,esa|Eso – rzecz nieokreślona (nijakie).
{Aquella} montaña es muy alta.|Tamta góra jest bardzo wysoka.|Aquel,Aquellas|Aquel, aquella – daleko.
{Aquel} hombre es mi profesor.|Tamten mężczyzna to mój nauczyciel.|Aquella,Aquellos
¿Cuánto cuesta {esto}?|Ile to kosztuje?|este,esta|Esto – to tutaj (nie wiem, jak się nazywa).
{Esta} semana tengo mucho trabajo.|W tym tygodniu mam dużo pracy.|Este,Esa
{Este} año voy a España.|W tym roku jadę do Hiszpanii.|Esta,Ese
Prefiero {ese} coche.|Wolę tamten samochód.|esa,eso
`},
{ id: "x3-compare", t: "Más que, tan como", d: "Porównania: większy niż, tak duży jak, najlepszy.", k: "f", i: `
Madrid es {más} grande que Toledo.|Madryt jest większy niż Toledo.|tan,muy|Más … que = bardziej … niż.
Mi hermano es más alto {que} yo.|Mój brat jest wyższy ode mnie.|como,de
Este coche es {menos} caro que el otro.|Ten samochód jest tańszy (mniej drogi) niż tamten.|tan,más
Ana es {tan} alta como su madre.|Ana jest tak wysoka jak jej mama.|más,tanto|Tan … como = tak … jak.
El tren es tan rápido {como} el avión.|Pociąg jest tak szybki jak samolot.|que,de
Esta pizza es {mejor} que la otra.|Ta pizza jest lepsza niż tamta.|más buena,buenísima|Bueno → mejor.
Hoy hace {peor} tiempo que ayer.|Dziś jest gorsza pogoda niż wczoraj.|más malo,malísimo|Malo → peor.
Mi abuela es {mayor} que mi abuelo.|Moja babcia jest starsza niż dziadek.|más vieja,más grande|O wieku ludzi: mayor / menor.
Es el restaurante {más} caro de la ciudad.|To najdroższa restauracja w mieście.|muy,tan|Najwyższy stopień: el más … de.
Es la {mejor} película del año.|To najlepszy film roku.|más buena,muy buena
Tengo {tantos} libros como tú.|Mam tyle książek co ty.|tan,tantas|Tanto / tanta / tantos / tantas + rzeczownik.
La sopa está {buenísima}.|Zupa jest przepyszna.|muy buenísima,más buena|-ísimo = bardzo, bardzo.
`},
{ id: "x3-objects", t: "Lo, la, le…", d: "Zaimki dopełnienia: lo veo, la llamo, le doy.", k: "f", i: `
¿El libro? {Lo} tengo yo.|Książka? Ja ją mam.|La,Le|Lo – on (rzecz r. męskiego), la – ona.
¿La película? No {la} he visto.|Film? Nie widziałem go.|lo,le|La película – rodzaj żeński, więc la.
¿Conoces a Pedro? Sí, {lo} conozco.|Znasz Pedra? Tak, znam go.|la,le
¿Dónde están las llaves? No {las} encuentro.|Gdzie są klucze? Nie mogę ich znaleźć.|los,les
¿Los zapatos? {Los} compré ayer.|Buty? Kupiłem je wczoraj.|Las,Les
{Te} quiero.|Kocham cię.|Ti,Tú
¿Me llamas mañana? Sí, {te} llamo.|Zadzwonisz jutro? Tak, zadzwonię do ciebie.|me,lo
{Le} doy un regalo a mi madre.|Daję prezent mamie.|La,Lo|Le – komu? (jemu, jej, Panu).
{Les} escribo a mis abuelos.|Piszę do dziadków.|Los,Le
¿{Me} ayudas?|Pomożesz mi?|Mi,Yo
{Nos} invitan a cenar.|Zapraszają nas na kolację.|Nosotros,Los
Quiero {verte}.|Chcę cię zobaczyć.|te ver,verla|Z bezokolicznikiem zaimek można dołączyć na końcu.
`},
{ id: "x3-sent-day", t: "Zdania: mój dzień", d: "Rano, w pracy, wieczorem.", k: "o", ex: SENT, i: `
Me levanto a las siete.|Wstaję o siódmej.
Desayuno café con tostadas.|Na śniadanie jem tosty z kawą.
Salgo de casa a las ocho.|Wychodzę z domu o ósmej.
Voy al trabajo en metro.|Jeżdżę do pracy metrem.
Empiezo a trabajar a las nueve.|Zaczynam pracę o dziewiątej.
Como con mis compañeros.|Jem obiad z kolegami z pracy.
Termino a las cinco y media.|Kończę o wpół do szóstej.
Por la tarde voy al gimnasio.|Po południu chodzę na siłownię.
Ceno con mi familia.|Jem kolację z rodziną.
Después veo una serie.|Potem oglądam serial.
Me acuesto bastante tarde.|Kładę się dość późno.
Los sábados duermo hasta las diez.|W soboty śpię do dziesiątej.
Los domingos visito a mis abuelos.|W niedziele odwiedzam dziadków.
Nunca desayuno en la calle.|Nigdy nie jem śniadania na mieście.
`},
{ id: "x3-sent-shop", t: "Zdania: sklep i restauracja", d: "Zamawianie, płacenie, prośby.", k: "o", ex: SENT, i: `
Quería un kilo de tomates.|Poproszę kilo pomidorów.
¿Me pone una barra de pan?|Poproszę bagietkę.
¿Cuánto es todo?|Ile za wszystko?
¿Puedo pagar con tarjeta?|Mogę zapłacić kartą?
Busco una camiseta blanca.|Szukam białej koszulki.
¿Tiene esta camisa en azul?|Ma Pan tę koszulę w kolorze niebieskim?
Me queda un poco grande.|Jest na mnie trochę za duże.
Una mesa para cuatro, por favor.|Stolik dla czterech osób, proszę.
De primero quiero la sopa.|Na pierwsze danie poproszę zupę.
Para beber, agua sin gas.|Do picia woda niegazowana.
¿Nos trae la cuenta, por favor?|Poprosimy rachunek.
La comida está muy rica.|Jedzenie jest bardzo smaczne.
`},
{ id: "x3-sent-city", t: "Zdania: w mieście", d: "Pytanie o drogę i odpowiedzi.", k: "o", ex: SENT, i: `
Perdone, ¿dónde está la estación?|Przepraszam, gdzie jest dworzec?
Siga todo recto hasta la plaza.|Proszę iść prosto do placu.
Gire a la izquierda en el semáforo.|Proszę skręcić w lewo na światłach.
El museo está al lado de la catedral.|Muzeum jest obok katedry.
La farmacia está enfrente del banco.|Apteka jest naprzeciwko banku.
¿Está lejos de aquí?|Czy to daleko stąd?
Está a diez minutos andando.|To dziesięć minut pieszo.
Puedes coger el autobús número cinco.|Możesz pojechać autobusem numer pięć.
¿Dónde puedo comprar billetes?|Gdzie mogę kupić bilety?
La parada está en la esquina.|Przystanek jest na rogu.
No soy de aquí, lo siento.|Nie jestem stąd, przykro mi.
`},
{ id: "x3-sent-now", t: "Zdania: co się teraz dzieje?", d: "Estar + gerundio w praktyce.", k: "o", ex: SENT, i: `
Estoy cocinando la cena.|Gotuję kolację.
Los niños están jugando en el jardín.|Dzieci bawią się w ogrodzie.
Mi madre está hablando por teléfono.|Mama rozmawia przez telefon.
Está lloviendo mucho.|Mocno pada.
¿Qué estás leyendo?|Co czytasz?
Estamos esperando a Juan.|Czekamy na Juana.
El bebé está durmiendo.|Dziecko śpi.
Estoy buscando mis llaves.|Szukam kluczy.
Ana está estudiando para el examen.|Ana uczy się do egzaminu.
¿Me estás escuchando?|Słuchasz mnie?
Estamos viendo un partido.|Oglądamy mecz.
`}
]);
})();
