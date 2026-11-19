/* Etap 4 – czasy przeszłe i przyszły w zdaniach (A2). */
(function () {
var SENT = ["order", "pl2en", "order", "en2pl", "listen"];
ADD("s4", [
{ id: "x4-indef", t: "Indefinido: co się wydarzyło", d: "Ayer, el año pasado, en 2019 – zakończone zdarzenia.", k: "f", i: `
Ayer {comí} paella.|Wczoraj jadłem paellę.|como,comía|Indefinido: zakończone zdarzenie (ayer, el lunes, en 2019).
El año pasado {viajamos} a México.|W zeszłym roku pojechaliśmy do Meksyku.|viajábamos,viajaremos
¿Qué {hiciste} el fin de semana?|Co robiłeś w weekend?|haces,hacías|Hacer → hice, hiciste, hizo.
Mi abuelo {nació} en 1950.|Mój dziadek urodził się w 1950 roku.|nace,nacía
Anoche {vimos} una película.|Wczoraj wieczorem obejrzeliśmy film.|vemos,veíamos
Ellos {llegaron} tarde.|Oni się spóźnili (przyjechali późno).|llegan,llegaban
{Estudié} en Salamanca.|Studiowałem w Salamance.|Estudio,Estudiaba
¿{Llamaste} a tu madre?|Zadzwoniłeś do mamy?|Llamas,Llamabas
El partido {terminó} a las diez.|Mecz skończył się o dziesiątej.|termina,terminaba
Ayer {fui} al médico.|Wczoraj poszedłem do lekarza.|voy,iba|Ir i ser: fui, fuiste, fue…
La fiesta {fue} genial.|Impreza była świetna.|es,era
{Tuve} un accidente en 2020.|Miałem wypadek w 2020 roku.|Tengo,Tenía|Tener → tuve.
¿Dónde {pusiste} las llaves?|Gdzie położyłeś klucze?|pones,ponías|Poner → puse.
No {pude} dormir.|Nie mogłem zasnąć.|puedo,podía|Poder → pude.
Me {dijo} la verdad.|Powiedział mi prawdę.|dice,decía|Decir → dije, dijo.
{Estuvimos} en Roma tres días.|Byliśmy w Rzymie trzy dni.|Estamos,Estábamos|Estar → estuve.
`},
{ id: "x4-imperf", t: "Imperfecto: jak było kiedyś", d: "Cuando era niño… Opis, zwyczaje w przeszłości, tło.", k: "f", i: `
Cuando {era} niño, vivía en el campo.|Kiedy byłem dzieckiem, mieszkałem na wsi.|fui,soy|Imperfecto: opis przeszłości, zwyczaje.
De pequeña {jugaba} con muñecas.|Jako mała dziewczynka bawiłam się lalkami.|jugué,juego
Antes {trabajábamos} los sábados.|Kiedyś pracowaliśmy w soboty.|trabajamos,trabajaron
Mi abuela siempre {hacía} pan.|Moja babcia zawsze piekła chleb.|hizo,hace
{Hacía} mucho calor.|Było bardzo gorąco.|Hizo,Hace
La casa {tenía} un jardín enorme.|Dom miał ogromny ogród.|tuvo,tiene
Todos los veranos {íbamos} a la playa.|Co roku latem jeździliśmy nad morze.|fuimos,vamos|Ir → iba, ibas, iba, íbamos…
{Eran} las ocho de la tarde.|Była ósma wieczorem.|Fueron,Son|Godzina w przeszłości – imperfecto.
Mi padre {era} muy alto.|Mój tata był bardzo wysoki.|fue,es
No {había} nadie en la calle.|Na ulicy nie było nikogo.|hubo,hay|Hay → había.
{Veíamos} la tele después de cenar.|Oglądaliśmy telewizję po kolacji.|Vimos,Vemos|Ver → veía.
Mientras {cocinaba}, sonó el teléfono.|Kiedy gotowałem, zadzwonił telefon.|cociné,cocino
Ella {estaba} muy cansada.|Była bardzo zmęczona.|estuvo,está
Antes {fumaba}, pero ya no.|Kiedyś paliłem, ale już nie.|fumé,fumo
`},
{ id: "x4-pastmix", t: "Indefinido czy imperfecto?", d: "Co się stało (indefinido) – a jakie było tło (imperfecto).", k: "f", i: `
Ayer {llovió} todo el día.|Wczoraj cały dzień padało.|llovía,llueve|Zamknięty okres (todo el día) – indefinido.
Cuando salí de casa, {llovía}.|Kiedy wyszedłem z domu, padało.|llovió,llueve|Tło – imperfecto.
{Conocí} a mi mujer en 2015.|Poznałem żonę w 2015 roku.|Conocía,Conozco
Mientras {dormía}, alguien entró en casa.|Kiedy spałem, ktoś wszedł do domu.|dormí,duermo
De niño {iba} a la escuela en bici.|Jako dziecko jeździłem do szkoły rowerem.|fui,voy
Un día {fui} en autobús.|Pewnego dnia pojechałem autobusem.|iba,voy
{Estaba} en casa cuando me llamaste.|Byłem w domu, kiedy zadzwoniłeś.|Estuve,Estoy
Me {llamaste} cuando estaba en casa.|Zadzwoniłeś, kiedy byłem w domu.|llamabas,llamas
La película {era} muy aburrida.|Film był bardzo nudny.|fue,es|Opis – imperfecto (fue też możliwe jako ocena całości).
De repente {apareció} un perro.|Nagle pojawił się pies.|aparecía,aparece|De repente – indefinido.
Antes {vivíamos} en Gdańsk.|Kiedyś mieszkaliśmy w Gdańsku.|vivimos,vivieron
{Vivimos} en Gdańsk cinco años.|Mieszkaliśmy w Gdańsku pięć lat.|Vivíamos,Vivo|Określony czas (cinco años) – indefinido.
`},
{ id: "x4-perfecto", t: "He comido – pretérito perfecto", d: "Haber + participio: dziś, już, nigdy, w tym tygodniu.", k: "f", i: `
Hoy {he trabajado} mucho.|Dziś dużo pracowałem.|trabajé,trabajaba|Hoy, esta semana, ya, nunca – często perfecto.
¿{Has estado} en España?|Byłeś kiedyś w Hiszpanii?|Estuviste,Estabas
Nunca {he visto} el mar.|Nigdy nie widziałem morza.|vi,veía|Ver → visto.
Esta semana {hemos comido} fuera tres veces.|W tym tygodniu jedliśmy na mieście trzy razy.|comimos,comíamos
Ya {he hecho} los deberes.|Już odrobiłem lekcje.|hice,hacía|Hacer → hecho.
¿Qué {has dicho}?|Co powiedziałeś?|dijiste,decías|Decir → dicho.
Todavía no {ha llegado}.|Jeszcze nie przyjechał.|llegó,llegaba
{He escrito} tres correos esta mañana.|Napisałem dziś rano trzy e-maile.|Escribí,Escribía|Escribir → escrito.
¿{Habéis terminado}?|Skończyliście?|Terminasteis,Terminabais
Mis padres {han vuelto} del viaje.|Moi rodzice wrócili z podróży.|volvieron,volvían|Volver → vuelto.
Alguien {ha abierto} la ventana.|Ktoś otworzył okno.|abrió,abría|Abrir → abierto.
Este año {ha llovido} poco.|W tym roku mało padało.|llovió,llovía
Se me {ha olvidado} el paraguas.|Zapomniałem parasola.|olvidó,olvidaba
¿Alguna vez {has comido} pulpo?|Jadłeś kiedyś ośmiornicę?|comiste,comías
`},
{ id: "x4-futuro", t: "Futuro: iré, haré, tendré", d: "Czas przyszły prosty – i nieregularne tematy.", k: "f", i: `
Mañana {lloverá}.|Jutro będzie padać.|llueve,llovía|Futuro: bezokolicznik + é, ás, á, emos, éis, án.
El año que viene {viajaré} a Chile.|W przyszłym roku pojadę do Chile.|viajo,viajaba
{Tendremos} más tiempo en verano.|Latem będziemy mieć więcej czasu.|Tenemos,Teníamos|Tener → tendré.
¿Qué {harás} después de la universidad?|Co będziesz robić po studiach?|haces,hacías|Hacer → haré.
Te {llamaré} esta noche.|Zadzwonię do ciebie wieczorem.|llamo,llamaba
No {podré} venir.|Nie będę mógł przyjść.|puedo,podía|Poder → podré.
{Saldremos} a las ocho.|Wyjdziemy o ósmej.|Salimos,Salíamos|Salir → saldré.
¿{Vendrás} a mi boda?|Przyjdziesz na mój ślub?|Vienes,Venías|Venir → vendré.
Te lo {diré} mañana.|Powiem ci jutro.|digo,decía|Decir → diré.
¿Dónde {pondré} las maletas?|Gdzie postawię walizki?|pongo,ponía|Poner → pondré.
Seguro que {sabrás} hacerlo.|Na pewno będziesz umiał to zrobić.|sabes,sabías|Saber → sabré.
¿Qué hora {será}?|Która to może być godzina?|es,era|Futuro wyraża też przypuszczenie: ¿Qué hora será?
`},
{ id: "x4-porpara", t: "Por czy para? (podstawy)", d: "Para – cel, odbiorca. Por – przyczyna, przez, za.", k: "f", i: `
Este regalo es {para} ti.|Ten prezent jest dla ciebie.|por,a|Para – dla kogo.
Estudio {para} aprender.|Uczę się, żeby się nauczyć.|por,a|Para + bezokolicznik = żeby.
Gracias {por} todo.|Dziękuję za wszystko.|para,de|Gracias por – dziękuję za.
Paseamos {por} el parque.|Spacerujemy po parku.|para,en|Por – przez, po (miejsce).
Salgo {para} Madrid mañana.|Jutro wyjeżdżam do Madrytu.|por,en|Para – kierunek, cel podróży.
Te llamo {por} la tarde.|Zadzwonię po południu.|para,en|Por la mañana / tarde / noche.
Lo compré {por} veinte euros.|Kupiłem to za dwadzieścia euro.|para,de|Por – za (cena, wymiana).
Necesito el informe {para} el lunes.|Potrzebuję raportu na poniedziałek.|por,hasta|Para – termin.
No fui {por} la lluvia.|Nie poszedłem z powodu deszczu.|para,de|Por – przyczyna.
Hablamos {por} teléfono.|Rozmawiamy przez telefon.|para,en|Por – środek (przez telefon, mailem).
{Para} mí, es el mejor libro.|Dla mnie to najlepsza książka.|Por,A|Para mí – moim zdaniem.
Trabajo {por} las mañanas.|Pracuję rano (przed południem).|para,a
`},
{ id: "x4-muymucho", t: "Muy czy mucho?", d: "Muy + przymiotnik/przysłówek; mucho + rzeczownik/czasownik.", k: "f", i: `
Es {muy} guapo.|Jest bardzo przystojny.|mucho,mucha|Muy + przymiotnik.
Trabajo {mucho}.|Dużo pracuję.|muy,muchos|Czasownik + mucho.
Tengo {mucha} hambre.|Jestem bardzo głodny.|muy,mucho|Hambre – rodzaj żeński: mucha hambre.
Hay {muchos} turistas.|Jest wielu turystów.|muy,mucho|Mucho zgadza się z rzeczownikiem.
Vivo {muy} cerca.|Mieszkam bardzo blisko.|mucho,muchos
Me gusta {mucho} el cine.|Bardzo lubię kino.|muy,muchos
Hace {mucho} frío.|Jest bardzo zimno.|muy,mucha|Hace frío – rzeczownik frío, więc mucho.
Estoy {muy} cansado.|Jestem bardzo zmęczony.|mucho,muchos
Tengo {muchas} ganas de verte.|Bardzo chcę cię zobaczyć.|muy,mucho
Hablas {muy} bien.|Mówisz bardzo dobrze.|mucho,muchos
`},
{ id: "x4-sent-past", t: "Zdania: mój weekend", d: "Co zrobiłeś? Gdzie byłeś?", k: "o", ex: SENT, i: `
El sábado fui a la playa con mis amigos.|W sobotę poszedłem z przyjaciółmi na plażę.
Comimos en un restaurante muy bueno.|Zjedliśmy obiad w bardzo dobrej restauracji.
Por la noche vimos una película.|Wieczorem obejrzeliśmy film.
El domingo me levanté tarde.|W niedzielę wstałem późno.
Visité a mis abuelos.|Odwiedziłem dziadków.
Hizo muy buen tiempo.|Była bardzo ładna pogoda.
Lo pasamos muy bien.|Świetnie się bawiliśmy.
No hice nada especial.|Nie robiłem nic szczególnego.
Leí un libro entero.|Przeczytałem całą książkę.
Mi hermana vino a cenar.|Siostra przyszła na kolację.
Volví a casa a medianoche.|Wróciłem do domu o północy.
¿Qué tal el fin de semana?|Jak minął weekend?
`},
{ id: "x4-sent-child", t: "Zdania: kiedy byłem dzieckiem", d: "Imperfecto w opowieściach o dawnych czasach.", k: "o", ex: SENT, i: `
Cuando era pequeño vivía en un pueblo.|Kiedy byłem mały, mieszkałem w małym miasteczku.
Mi abuela me contaba cuentos.|Babcia opowiadała mi bajki.
Jugábamos en la calle hasta la noche.|Bawiliśmy się na ulicy do wieczora.
Tenía un perro que se llamaba Max.|Miałem psa, który wabił się Max.
Iba al colegio andando.|Chodziłem do szkoły pieszo.
Me gustaban mucho los dibujos animados.|Bardzo lubiłem kreskówki.
Los veranos eran muy largos.|Lata były bardzo długie.
No me gustaba nada la sopa.|W ogóle nie lubiłem zupy.
Mi padre trabajaba en una fábrica.|Mój tata pracował w fabryce.
Siempre pasábamos la Navidad en casa.|Zawsze spędzaliśmy święta w domu.
`},
{ id: "x4-sent-plans", t: "Zdania: plany", d: "Voy a…, pienso…, el año que viene…", k: "o", ex: SENT, i: `
Este verano voy a aprender a surfear.|Tego lata nauczę się surfować.
El año que viene empezaré la universidad.|W przyszłym roku zacznę studia.
Pienso cambiar de trabajo.|Zamierzam zmienić pracę.
Mañana vamos a comer con mis padres.|Jutro idziemy na obiad do rodziców.
Quiero viajar por Sudamérica.|Chcę pojeździć po Ameryce Południowej.
Algún día tendré una casa en la playa.|Kiedyś będę mieć dom na plaży.
El sábado vamos a ir al concierto.|W sobotę pójdziemy na koncert.
Te llamaré cuando llegue.|Zadzwonię do ciebie, kiedy dojadę.
Nos casaremos en primavera.|Weźmiemy ślub wiosną.
¿Qué vas a hacer en Navidad?|Co będziesz robić w święta?
`},
{ id: "x4-sent-travel", t: "Zdania: wakacje", d: "Opowieść o podróży w czasie przeszłym.", k: "o", ex: SENT, i: `
El verano pasado estuvimos en Andalucía.|Zeszłego lata byliśmy w Andaluzji.
Alquilamos un coche en el aeropuerto.|Wynajęliśmy samochód na lotnisku.
Visitamos la Alhambra de Granada.|Zwiedziliśmy Alhambrę w Granadzie.
El hotel estaba cerca de la playa.|Hotel był blisko plaży.
Hacía un calor horrible.|Był okropny upał.
Probamos muchas tapas diferentes.|Spróbowaliśmy wielu różnych tapas.
Perdí mi pasaporte el último día.|Zgubiłem paszport ostatniego dnia.
Fue el mejor viaje de mi vida.|To była najlepsza podróż w moim życiu.
Conocimos a gente muy simpática.|Poznaliśmy bardzo sympatycznych ludzi.
Volvimos muy morenos.|Wróciliśmy bardzo opaleni.
`}
]);
})();
