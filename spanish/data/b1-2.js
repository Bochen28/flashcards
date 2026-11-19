/* Etap 5 – gramatyka B1, zdania i fałszywi przyjaciele. */
(function () {
var SENT = ["order", "pl2en", "order", "en2pl", "listen"];
ADD("s5", [
{ id: "x5-subj1", t: "Subjuntivo: quiero que, espero que", d: "Gdy chcemy, żeby ktoś coś zrobił – tryb łączący.", k: "f", i: `
Quiero que {vengas} conmigo.|Chcę, żebyś poszedł ze mną.|vienes,venir|Quiero que + inna osoba → subjuntivo.
Espero que {estés} bien.|Mam nadzieję, że czujesz się dobrze.|estás,estar|Esperar que → subjuntivo.
Mi madre quiere que {estudie} más.|Mama chce, żebym więcej się uczył.|estudio,estudiar
Ojalá {haga} buen tiempo mañana.|Oby jutro była ładna pogoda.|hace,hará|Ojalá + subjuntivo = oby.
Te pido que me {ayudes}.|Proszę cię, żebyś mi pomógł.|ayudas,ayudar
Necesito que {llames} al médico.|Potrzebuję, żebyś zadzwonił do lekarza.|llamas,llamar
Es importante que {lleguéis} a tiempo.|Ważne, żebyście przyszli na czas.|llegáis,llegar
No creo que {sea} verdad.|Nie sądzę, żeby to była prawda.|es,ser|No creo que → subjuntivo; creo que → indicativo.
Creo que {es} verdad.|Myślę, że to prawda.|sea,será
Quiero {ir} al cine.|Chcę iść do kina.|vaya,voy|Ta sama osoba → bezokolicznik.
Es posible que {llueva}.|Możliwe, że będzie padać.|llueve,lloverá
Me alegro de que {estéis} aquí.|Cieszę się, że tu jesteście.|estáis,estar|Uczucia + que → subjuntivo.
Cuando {tengas} tiempo, llámame.|Kiedy będziesz mieć czas, zadzwoń.|tienes,tendrás|Cuando + przyszłość → subjuntivo.
Prefiero que no {digas} nada.|Wolę, żebyś nic nie mówił.|dices,decir
Te lo explico para que lo {entiendas}.|Wyjaśniam ci, żebyś zrozumiał.|entiendes,entender|Para que + subjuntivo.
Dudo que {puedan} venir.|Wątpię, czy będą mogli przyjść.|pueden,poder
`},
{ id: "x5-cond", t: "Condicional: me gustaría…", d: "Tryb warunkowy: grzeczne prośby, rady, marzenia.", k: "f", i: `
Me {gustaría} viajar a Perú.|Chciałbym pojechać do Peru.|gusta,gustaba|Gustaría = podobałoby się (chciałbym).
¿{Podrías} ayudarme?|Mógłbyś mi pomóc?|Puedes,Pudiste|Podría – grzeczna prośba.
Yo que tú, {hablaría} con él.|Na twoim miejscu porozmawiałbym z nim.|hablo,hablé
{Deberías} descansar más.|Powinieneś więcej odpoczywać.|Debes,Debiste|Debería – rada.
¿Qué {harías} con un millón de euros?|Co byś zrobił z milionem euro?|haces,harás|Hacer → haría.
{Tendríamos} que salir antes.|Powinniśmy wyjść wcześniej.|Tenemos,Tendremos
{Sería} genial verte.|Byłoby super cię zobaczyć.|Es,Será
¿Le {importaría} cerrar la ventana?|Czy mógłby Pan zamknąć okno?|importa,importó
Nos {encantaría} ir con vosotros.|Bardzo chcielibyśmy pójść z wami.|encanta,encantó
Yo nunca {diría} eso.|Nigdy bym tego nie powiedział.|digo,dije|Decir → diría.
¿{Querrías} venir a cenar?|Czy chciałbyś przyjść na kolację?|Quieres,Quisiste|Querer → querría.
{Saldría}, pero estoy cansado.|Wyszedłbym, ale jestem zmęczony.|Salgo,Saldré|Salir → saldría.
`},
{ id: "x5-imperative", t: "Tryb rozkazujący", d: "¡Habla! ¡No hables! ¡Hable usted! – twierdzący i przeczący.", k: "f", i: `
¡{Abre} la ventana!|Otwórz okno!|Abres,Abra|Tú: jak forma „él” w czasie teraźniejszym.
¡No {abras} la ventana!|Nie otwieraj okna!|abre,abres|Zakaz: no + subjuntivo.
¡{Ven} aquí!|Chodź tutaj!|Viene,Venga|Nieregularne: ven, haz, pon, sal, ten, di, ve, sé.
¡{Haz} los deberes!|Odrób lekcje!|Hace,Hagas
¡No {hagas} ruido!|Nie hałasuj!|haz,haces
{Siéntese}, por favor.|Proszę usiąść.|Siéntate,Se sienta|Usted: forma z subjuntivo + zaimek na końcu.
¡{Dime} la verdad!|Powiedz mi prawdę!|Me dice,Dices me|Zaimek dołączamy na końcu: dime, ayúdame.
¡No me {digas}!|Nie mów! (Coś takiego!)|dices,di
¡{Tened} cuidado!|Uważajcie!|Tenéis,Tengáis|Vosotros: bezokolicznik -r → -d: tened, venid.
¡No {corráis}!|Nie biegajcie!|corred,corréis
{Pase}, pase.|Proszę wejść.|Pasa,Pasas
¡{Levántate}!|Wstawaj!|Te levantas,Levanta|Levantarse → levántate.
{Hablen} más despacio, por favor.|Proszę mówić wolniej (do kilku osób).|Hablan,Hablad|Ustedes → subjuntivo: hablen.
¡No te {preocupes}!|Nie martw się!|preocupas,preocupa
`},
{ id: "x5-relative", t: "Que, quien, donde, lo que", d: "Zdania względne: la chica que…, la casa donde…", k: "f", i: `
La chica {que} vive aquí es mi prima.|Dziewczyna, która tu mieszka, to moja kuzynka.|quien,cual|Que – najczęstsze: który, która, które.
El libro {que} me prestaste es genial.|Książka, którą mi pożyczyłeś, jest świetna.|quien,lo que
La ciudad {donde} nací es pequeña.|Miasto, w którym się urodziłem, jest małe.|que,quien
No entiendo {lo que} dices.|Nie rozumiem tego, co mówisz.|que,el que|Lo que = to, co.
{Lo que} más me gusta es viajar.|To, co lubię najbardziej, to podróżowanie.|Que,Quien
El chico con {quien} hablas es mi hermano.|Chłopak, z którym rozmawiasz, to mój brat.|que,cual|Po przyimku o osobie – quien.
Es el hombre {cuyo} coche robaron.|To mężczyzna, któremu ukradli samochód.|que,quien|Cuyo / cuya = którego (czyj).
El restaurante {en el que} cenamos estaba lleno.|Restauracja, w której jedliśmy kolację, była pełna.|que,donde que
Haz {lo que} quieras.|Rób, co chcesz.|que,cual
La persona {a quien} llamé no contestó.|Osoba, do której dzwoniłem, nie odebrała.|quien,que
Tengo un amigo {que} habla seis idiomas.|Mam przyjaciela, który mówi sześcioma językami.|quien,lo que
Ese es el motivo por {el que} me fui.|To jest powód, dla którego wyjechałem.|que,lo que
`},
{ id: "x5-se", t: "Se: mówi się, sprzedaje się", d: "Se habla español. Se venden pisos. Se me olvidó.", k: "f", i: `
Aquí {se} habla español.|Tu mówi się po hiszpańsku.|le,lo|Se + 3. osoba = bezosobowo (mówi się).
Se {venden} pisos.|Sprzedam mieszkania (sprzedaje się).|vende,vendemos|Liczba mnoga, gdy rzecz jest w l. mn.
Se {vende} coche.|Sprzedam samochód.|venden,vendo
¿Cómo se {dice} „gracias” en polaco?|Jak się mówi „dziękuję” po polsku?|dicen,digo
En España se {cena} muy tarde.|W Hiszpanii je się kolację bardzo późno.|cenan,ceno
No se {puede} fumar aquí.|Tu nie wolno palić.|pueden,puedo
Se me {olvidó} la cartera.|Zapomniałem portfela.|olvidé,olvidaron|Se me olvidó – „zapomniało mi się” (niechcący).
Se me {rompió} el móvil.|Zepsuł mi się telefon.|rompí,rompieron
Se {necesitan} camareros.|Potrzebni kelnerzy.|necesita,necesitamos
Se {alquila} habitación.|Pokój do wynajęcia.|alquilan,alquilo
Se nos {acabó} la leche.|Skończyło nam się mleko.|acabamos,acabaron
¿Se {puede}?|Można (wejść)?|pueden,puedo
`},
{ id: "x5-double", t: "Se lo, me lo, te la…", d: "Dwa zaimki naraz: komu + co. Le / les zamienia się w se.", k: "f", i: `
¿El libro? Te {lo} doy mañana.|Książkę? Dam ci ją jutro.|la,le|Najpierw komu (te), potem co (lo).
¿La carta? Me {la} envió ayer.|List? Wysłał mi go wczoraj.|lo,le
¿Las fotos? {Se} las enseño a mi madre.|Zdjęcia? Pokażę je mamie.|Le,Les|Le / les + lo / la → se lo / se la.
¿Le has dado el regalo? Sí, ya {se} lo he dado.|Dałeś mu prezent? Tak, już mu go dałem.|le,lo
¿{Me lo} puedes repetir?|Możesz mi to powtórzyć?|Lo me,Me le|Zaimki przed czasownikiem odmienionym…
¿Puedes {repetírmelo}?|Możesz mi to powtórzyć?|repetirmelo,me repetirlo|…albo razem na końcu bezokolicznika (z akcentem).
Nos {lo} contó todo.|Opowiedział nam wszystko.|le,la
¿Las llaves? No te {las} doy.|Klucze? Nie dam ci ich.|los,les
¿El dinero? {Se} lo devolví a Juan.|Pieniądze? Oddałem je Juanowi.|Le,Les
{Dámelo}, por favor.|Daj mi to, proszę.|Me lo da,Da me lo|W rozkazie zaimki na końcu.
`},
{ id: "x5-falsefr1", t: "Fałszywi przyjaciele 1", d: "Embarazada to nie zakłopotana, a la carta to nie karta!", k: "m", i: `
embarazada|w ciąży|zakłopotana,zażenowana|Zakłopotana to avergonzada.
la carta|list (też: karta dań)|karta płatnicza,mapa|Karta płatnicza to la tarjeta.
el éxito|sukces|wyjście,egzamin|Wyjście to la salida.
la ropa|ubrania|ropa (wydzielina),ropa naftowa|Ropa naftowa to el petróleo.
el pupitre|ławka szkolna|pulpit (komputera),pupil|Pulpit to el escritorio.
contestar|odpowiadać|kontestować,protestować|Protestować to protestar.
largo|długi|szeroki,duży|Szeroki to ancho.
la cena|kolacja|cena,cel|Cena to el precio.
el pan|chleb|pan (mężczyzna),pan Bóg|Pan to el señor.
el sino|los (przeznaczenie)|syn,szyna|Syn to el hijo.
el trapo|szmata (ścierka)|trap (schodki),trapez|Trap to la pasarela.
el globo|balon|globus,glob|Globus to el globo terráqueo.
la tarta|tort (ciasto)|tarka,tartak|Tarka to el rallador.
el bigote|wąsy|bigos,bilet|Bigos to po prostu bigos.
la bala|kula (pocisk)|bal (zabawa),bela|Bal to el baile.
la rana|żaba|rana,rano|Rana to la herida.
el oficio|zawód (fach)|biuro,urząd|Biuro to la oficina.
la droga|narkotyk|droga,drogi|Droga to el camino / la carretera.
la cola|kolejka (też: ogon, klej)|cola (napój),koło|Koło to la rueda.
`},
{ id: "x5-falsefr2", t: "Fałszywi przyjaciele 2", d: "Constipado to przeziębiony, a sensible to wrażliwy!", k: "m", i: `
constipado|przeziębiony|mający zaparcie,zatkany|Zaparcie to el estreñimiento.
sensible|wrażliwy|rozsądny,sensowny|Rozsądny to sensato.
la parada|przystanek|parada (pochód),pora|Parada (pochód) to el desfile.
el tiempo|pogoda / czas|tempo,termin|Tempo to el ritmo.
la mancha|plama|mańka,mięta|Mięta to la menta.
el campo|wieś (pole)|kemping,obóz|Kemping to el camping.
la policía|policja (policjantka)|polityka,polisa|Polisa to la póliza.
el gusto|smak (przyjemność)|gust (styl),guzik|Guzik to el botón.
la camilla|nosze|kamizelka,rumianek|Rumianek to la manzanilla.
el polvo|kurz (proszek)|połowa,pole|Połowa to la mitad.
el bufete|kancelaria prawna|bufet,bufon|Bufet to el bufé.
la diversión|rozrywka (zabawa)|dywersja,sabotaż|Dywersja to el sabotaje.
la billetera|portfel|bileterka,biletnik|Bilet to el billete.
la lista|lista (spis)|list,listek|List to la carta.
el compás|cyrkiel (też: takt)|kompas,komputer|Kompas to la brújula.
la cara|twarz|kara,karta|Kara to el castigo.
la rata|szczur|rata (kredytu),ratusz|Rata kredytu to el plazo.
el vaso|szklanka|wazon,waza|Wazon to el jarrón.
la mina|kopalnia (mina)|mina (na twarzy),minuta|Mina na twarzy to la cara, el gesto.
el suceso|wydarzenie (wypadek)|sukces,sukcesja|Sukces to el éxito.
`},
{ id: "x5-sent-exp", t: "Zdania: doświadczenia", d: "Nunca he…, ¿has estado alguna vez…?", k: "o", ex: SENT, i: `
Nunca he estado en Sudamérica.|Nigdy nie byłem w Ameryce Południowej.
¿Has probado alguna vez el gazpacho?|Próbowałeś kiedyś gazpacho?
He vivido en tres países diferentes.|Mieszkałem w trzech różnych krajach.
Este año he leído muchos libros.|W tym roku przeczytałem wiele książek.
Todavía no he visto esa película.|Jeszcze nie widziałem tego filmu.
Ya he terminado el informe.|Już skończyłem raport.
Hace años que no nos vemos.|Nie widzieliśmy się od lat.
Llevo dos años estudiando español.|Uczę się hiszpańskiego od dwóch lat.
Es la primera vez que vengo aquí.|Jestem tu pierwszy raz.
Me han ofrecido un trabajo en Valencia.|Zaproponowano mi pracę w Walencji.
`},
{ id: "x5-sent-work", t: "Zdania: w pracy", d: "Zebrania, terminy, e-maile.", k: "o", ex: SENT, i: `
Tengo una reunión a las diez.|Mam zebranie o dziesiątej.
El jefe quiere que terminemos hoy.|Szef chce, żebyśmy skończyli dzisiaj.
Te envío el documento por correo.|Wysyłam ci dokument mailem.
¿Podemos aplazar la reunión?|Możemy przełożyć zebranie?
Estoy de vacaciones hasta el lunes.|Jestem na urlopie do poniedziałka.
Trabajo desde casa los viernes.|W piątki pracuję z domu.
Me han subido el sueldo.|Dostałem podwyżkę.
Necesito el informe para mañana.|Potrzebuję raportu na jutro.
Mi compañera está de baja.|Moja koleżanka jest na zwolnieniu lekarskim.
Busco un trabajo con mejor horario.|Szukam pracy z lepszymi godzinami.
`},
{ id: "x5-sent-opinion", t: "Zdania: opinie", d: "Zgadzam się, nie sądzę, to zależy.", k: "o", ex: SENT, i: `
Creo que tienes razón.|Myślę, że masz rację.
No creo que sea buena idea.|Nie sądzę, żeby to był dobry pomysł.
Me parece que es demasiado caro.|Wydaje mi się, że to za drogie.
Estoy totalmente de acuerdo contigo.|Całkowicie się z tobą zgadzam.
Depende de la situación.|To zależy od sytuacji.
En mi opinión, es un error.|Moim zdaniem to błąd.
Lo importante es intentarlo.|Ważne, żeby spróbować.
No estoy seguro de eso.|Nie jestem tego pewien.
Es mejor que lo hablemos mañana.|Lepiej porozmawiajmy o tym jutro.
Para mí, la familia es lo primero.|Dla mnie rodzina jest najważniejsza.
`},
{ id: "x5-sent-cond", t: "Zdania: jeśli… gdyby…", d: "Si tengo tiempo… Si tuviera dinero…", k: "o", ex: SENT, i: `
Si tengo tiempo, te llamo.|Jeśli będę miał czas, zadzwonię.
Si llueve, nos quedamos en casa.|Jeśli będzie padać, zostaniemy w domu.
Si estudias, aprobarás.|Jeśli będziesz się uczyć, zdasz.
Si tuviera dinero, viajaría más.|Gdybym miał pieniądze, podróżowałbym więcej.
Si fuera tú, no lo haría.|Na twoim miejscu nie robiłbym tego.
Si pudiera, viviría en la playa.|Gdybym mógł, mieszkałbym na plaży.
Si quieres, te acompaño.|Jeśli chcesz, pójdę z tobą.
Si me lo hubieras dicho, te habría ayudado.|Gdybyś mi powiedział, pomógłbym ci.
`}
]);
})();
