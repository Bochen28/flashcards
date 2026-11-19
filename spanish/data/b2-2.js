/* Etap 6 – gramatyka B1–B2 i zdania. */
(function () {
var SENT = ["order", "pl2en", "order", "en2pl", "listen"];
ADD("s6", [
{ id: "x6-subj2", t: "Subjuntivo po cuando, para que, aunque", d: "Cuando llegues…, para que entiendas…, aunque llueva…", k: "f", i: `
Cuando {llegues}, llámame.|Kiedy dojedziesz, zadzwoń do mnie.|llegas,llegarás|Cuando + przyszłość → subjuntivo.
Cuando {llego} a casa, me ducho.|Kiedy wracam do domu, biorę prysznic.|llegue,llegaré|Cuando + zwyczaj → indicativo.
Te lo repito para que lo {entiendas}.|Powtarzam ci, żebyś zrozumiał.|entiendes,entender|Para que → zawsze subjuntivo.
Aunque {llueva}, saldremos.|Nawet jeśli będzie padać, wyjdziemy.|llueve,lloverá|Aunque + niepewne → subjuntivo.
Aunque {llueve}, salimos.|Chociaż pada, wychodzimy.|llueva,lloverá|Aunque + fakt → indicativo.
Antes de que {te vayas}, dame las llaves.|Zanim wyjdziesz, daj mi klucze.|te vas,irte|Antes de que → subjuntivo.
Esperaré hasta que {vuelvas}.|Poczekam, aż wrócisz.|vuelves,volverás
En cuanto {sepa} algo, te aviso.|Jak tylko się czegoś dowiem, dam ci znać.|sé,sabré
Busco un piso que {tenga} terraza.|Szukam mieszkania, które ma taras.|tiene,tendrá|Coś, czego jeszcze nie znamy → subjuntivo.
Tengo un piso que {tiene} terraza.|Mam mieszkanie, które ma taras.|tenga,tuviera
No hay nadie que lo {sepa}.|Nie ma nikogo, kto by to wiedział.|sabe,sabrá
Es una pena que no {puedas} venir.|Szkoda, że nie możesz przyjść.|puedes,podrás
Me molesta que {lleguen} tarde.|Przeszkadza mi, że się spóźniają.|llegan,llegarán
Sin que nadie lo {sepa}.|Bez wiedzy kogokolwiek. (Tak, żeby nikt nie wiedział.)|sabe,saber
`},
{ id: "x6-impsubj", t: "Si tuviera… – subjuntivo imperfecto", d: "Gdybym miał…, chciałem, żebyś przyszedł…", k: "f", i: `
Si {tuviera} tiempo, te ayudaría.|Gdybym miał czas, pomógłbym ci.|tengo,tendría|Si + subjuntivo imperfecto, condicional.
Si {fuera} rico, compraría una casa.|Gdybym był bogaty, kupiłbym dom.|soy,sería|Ser / ir → fuera.
Si {pudiera}, viviría en Barcelona.|Gdybym mógł, mieszkałbym w Barcelonie.|puedo,podría
Quería que {vinieras} a la fiesta.|Chciałem, żebyś przyszedł na imprezę.|vengas,vienes|Po czasie przeszłym → subjuntivo imperfecto.
Me pidió que le {ayudara}.|Poprosił mnie, żebym mu pomógł.|ayude,ayudo
Si {supiera} la respuesta, te la diría.|Gdybym znał odpowiedź, powiedziałbym ci.|sé,sabría
Ojalá {estuvieras} aquí.|Szkoda, że cię tu nie ma. (Obyś tu był.)|estás,estés|Ojalá + imperfecto = nierealne życzenie.
Habla como si {fuera} el jefe.|Mówi, jakby był szefem.|es,sea|Como si → zawsze subjuntivo imperfecto.
Si {hiciera} buen tiempo, iríamos a la playa.|Gdyby była ładna pogoda, poszlibyśmy na plażę.|hace,haría
Era importante que {llegáramos} pronto.|Ważne było, żebyśmy przyjechali wcześnie.|lleguemos,llegamos
No creía que {fuera} posible.|Nie sądziłem, że to możliwe.|es,sea
Si {tuvieras} un problema, ¿me lo dirías?|Gdybyś miał problem, powiedziałbyś mi?|tienes,tengas
`},
{ id: "x6-porpara", t: "Por i para – więcej", d: "Por – przyczyna, czas, środek, zamiana. Para – cel, termin, odbiorca, opinia.", k: "f", i: `
Lo hice {por} ti.|Zrobiłem to dla ciebie (z twojego powodu).|para,a|Por ti – z twojego powodu / zamiast ciebie.
Lo hice {para} ti.|Zrobiłem to dla ciebie (żebyś miał).|por,a|Para ti – ty jesteś odbiorcą.
Estuve en Chile {por} dos meses.|Byłem w Chile przez dwa miesiące.|para,durante de|Por + okres (często bez przyimka).
Tiene que estar listo {para} el viernes.|Musi być gotowe na piątek.|por,hasta
El tren pasa {por} Zaragoza.|Pociąg jedzie przez Saragossę.|para,en
{Para} ser extranjero, hablas muy bien.|Jak na obcokrajowca mówisz bardzo dobrze.|Por,A|Para – jak na (porównanie).
Te cambio mi bici {por} tu patinete.|Zamienię mój rower na twoją hulajnogę.|para,con
Fue escrito {por} Cervantes.|Zostało napisane przez Cervantesa.|para,de|Strona bierna: por = przez.
Voy {por} pan.|Idę po chleb.|para,a|Ir por = iść po coś.
Estoy {por} terminar.|Zaraz skończę. (Jestem bliski skończenia.)|para,a
Ahorro {para} comprarme un coche.|Oszczędzam, żeby kupić sobie samochód.|por,a
Lo envié {por} correo.|Wysłałem to pocztą.|para,en
{Por} suerte, no pasó nada.|Na szczęście nic się nie stało.|Para,Con
Es demasiado difícil {para} mí.|To dla mnie za trudne.|por,a
`},
{ id: "x6-reported", t: "Mowa zależna", d: "Dijo que estaba cansado. Me preguntó si…", k: "f", i: `
Dijo que {estaba} cansado.|Powiedział, że jest zmęczony.|está,estará|„Estoy cansado” → dijo que estaba.
Me dijo que {vendría} mañana.|Powiedział mi, że przyjdzie jutro.|vendrá,viene|„Vendré” → dijo que vendría.
Ana dijo que {había perdido} las llaves.|Ana powiedziała, że zgubiła klucze.|perdió,pierde|„Perdí” → había perdido.
Me preguntó {si} quería un café.|Zapytał mnie, czy chcę kawę.|que,qué|Pytanie tak / nie → si.
Me preguntó {dónde} vivía.|Zapytał mnie, gdzie mieszkam.|donde,si
Le dije que me {llamara}.|Powiedziałem mu, żeby do mnie zadzwonił.|llama,llamaba|Polecenie → subjuntivo.
Dice que {está} enfermo.|Mówi, że jest chory.|estaba,esté|Dice (teraz) → czas się nie zmienia.
Nos contó que {se iba} a casar.|Powiedział nam, że się żeni.|se va,se fue
Pregunté {qué} había pasado.|Zapytałem, co się stało.|que,si
Me pidió que no se lo {contara} a nadie.|Poprosił, żebym nikomu nie mówił.|contaba,cuente
Explicó que no {podía} venir.|Wyjaśnił, że nie może przyjść.|puede,pudo
Dijeron que {habían terminado}.|Powiedzieli, że skończyli.|terminaron,terminan
`},
{ id: "x6-pluscuamp", t: "Había comido – zaprzeszły", d: "Co wydarzyło się wcześniej niż inne zdarzenie w przeszłości.", k: "f", i: `
Cuando llegué, la película ya {había empezado}.|Kiedy przyszedłem, film już się zaczął.|empezó,empezaba|Había + participio = wcześniej niż inne zdarzenie.
Nunca {había visto} algo así.|Nigdy wcześniej nie widziałem czegoś takiego.|vi,veía
Ella ya {había salido} cuando la llamé.|Już wyszła, kiedy do niej zadzwoniłem.|salió,salía
No sabía que {habías vuelto}.|Nie wiedziałem, że wróciłeś.|volviste,volvías
Me di cuenta de que {había olvidado} el móvil.|Zorientowałem się, że zapomniałem telefonu.|olvidé,olvido
Estaba cansado porque no {había dormido}.|Byłem zmęczony, bo nie spałem.|dormí,dormía
Ya {habíamos comido} cuando llegaron.|Już zjedliśmy, kiedy przyszli.|comimos,comíamos
¿{Habías estado} antes en Sevilla?|Byłeś wcześniej w Sewilli?|Estuviste,Estabas
Le devolví el libro que me {había prestado}.|Oddałem mu książkę, którą mi pożyczył.|prestó,prestaba
Pensé que lo {habían hecho} ellos.|Myślałem, że to oni to zrobili.|hicieron,hacían
`},
{ id: "x6-periphr", t: "Llevar, acabar de, volver a…", d: "Konstrukcje z czasownikiem: od jak dawna, właśnie, znowu, przestać.", k: "f", i: `
{Llevo} tres años viviendo aquí.|Mieszkam tu od trzech lat.|Hace,Tengo|Llevar + czas + gerundio = od (jak dawna).
Acabo {de} llegar.|Właśnie przyjechałem.|a,que|Acabar de = właśnie (przed chwilą).
He vuelto {a} fumar.|Znowu zacząłem palić.|de,en|Volver a = znowu coś robić.
Dejé {de} fumar hace un año.|Rzuciłem palenie rok temu.|a,en|Dejar de = przestać.
Sigo {estudiando} español.|Nadal uczę się hiszpańskiego.|estudiar,estudio|Seguir + gerundio = nadal.
Está a punto {de} empezar.|Zaraz się zacznie.|a,para|Estar a punto de = zaraz (o włos od).
Empezó {a} llover.|Zaczęło padać.|de,en|Empezar a = zacząć.
Tengo {que} irme.|Muszę iść.|de,a|Tener que = musieć.
Hay {que} reservar antes.|Trzeba zarezerwować wcześniej.|de,a|Hay que = trzeba.
Suelo {levantarme} temprano.|Zazwyczaj wstaję wcześnie.|me levanto,levantando|Soler + bezokolicznik = zazwyczaj.
Debe {de} ser muy tarde.|Musi być bardzo późno (chyba).|que,a|Deber de = przypuszczenie.
¿Cuánto tiempo {llevas} esperando?|Jak długo czekasz?|haces,tienes
`},
{ id: "x6-sent-news", t: "Zdania: wiadomości", d: "Rząd, ceny, pogoda, sport.", k: "o", ex: SENT, i: `
El gobierno ha aprobado una nueva ley.|Rząd przyjął nową ustawę.
Los precios de la vivienda siguen subiendo.|Ceny mieszkań nadal rosną.
Las elecciones se celebrarán en otoño.|Wybory odbędą się jesienią.
Hubo un incendio en el centro de la ciudad.|W centrum miasta wybuchł pożar.
No hubo heridos.|Nie było rannych.
Mañana se esperan fuertes lluvias.|Na jutro zapowiadane są silne opady.
El paro ha bajado este mes.|W tym miesiącu bezrobocie spadło.
Los científicos han hecho un gran descubrimiento.|Naukowcy dokonali wielkiego odkrycia.
El partido terminó en empate.|Mecz zakończył się remisem.
Miles de personas salieron a la calle.|Tysiące ludzi wyszło na ulice.
La película ganó el premio principal.|Film zdobył główną nagrodę.
`},
{ id: "x6-sent-feelings", t: "Zdania: uczucia", d: "Tęsknię, jestem dumny, przykro mi.", k: "o", ex: SENT, i: `
Te echo mucho de menos.|Bardzo za tobą tęsknię.
Siento mucho lo que ha pasado.|Bardzo mi przykro z powodu tego, co się stało.
Estoy muy orgulloso de ti.|Jestem z ciebie bardzo dumny.
No te enfades conmigo.|Nie gniewaj się na mnie.
Se enamoró de ella a primera vista.|Zakochał się w niej od pierwszego wejrzenia.
Discutimos por una tontería.|Pokłóciliśmy się o głupotę.
Hicieron las paces al día siguiente.|Pogodzili się następnego dnia.
Confío plenamente en ti.|W pełni ci ufam.
Me da vergüenza hablar en público.|Wstydzę się mówić publicznie.
Me alegro mucho de verte.|Bardzo się cieszę, że cię widzę.
Estoy harto de este trabajo.|Mam dość tej pracy.
`},
{ id: "x6-sent-debate", t: "Zdania: dyskusja", d: "Z jednej strony…, poza tym…, szczerze mówiąc…", k: "o", ex: SENT, i: `
Por un lado, es muy caro.|Z jednej strony to bardzo drogie.
Por otro lado, la calidad es buena.|Z drugiej strony jakość jest dobra.
Estoy completamente de acuerdo contigo.|Całkowicie się z tobą zgadzam.
No estoy del todo de acuerdo.|Nie do końca się zgadzam.
Lo que pasa es que no tenemos tiempo.|Rzecz w tym, że nie mamy czasu.
Además, es malo para la salud.|Poza tym to szkodzi zdrowiu.
Sinceramente, no me convence.|Szczerze mówiąc, nie przekonuje mnie to.
Desde mi punto de vista, es un error.|Z mojego punktu widzenia to błąd.
Hay que tener en cuenta los costes.|Trzeba wziąć pod uwagę koszty.
Volvamos al tema principal.|Wróćmy do głównego tematu.
`},
{ id: "x6-sent-home", t: "Zdania: dom i sprawy", d: "Awarie, sąsiedzi, przeprowadzka.", k: "o", ex: SENT, i: `
Se ha estropeado la lavadora.|Zepsuła się pralka.
He llamado al fontanero.|Zadzwoniłem po hydraulika.
Los vecinos hacen mucho ruido.|Sąsiedzi bardzo hałasują.
Nos mudamos a un piso nuevo.|Przeprowadzamy się do nowego mieszkania.
El alquiler es demasiado caro.|Czynsz jest za drogi.
¿A quién le toca sacar la basura?|Czyja kolej wynieść śmieci?
Se me olvidó apagar la luz.|Zapomniałem zgasić światło.
Hay una fuga en el baño.|W łazience jest przeciek.
Tenemos que pagar la factura de la luz.|Musimy zapłacić rachunek za prąd.
Hoy me toca cocinar a mí.|Dziś moja kolej gotować.
`}
]);
})();
