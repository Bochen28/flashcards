/* Etap 7 – gramatyka B2, zdania, idiomy i przysłowia. */
(function () {
var SENT = ["order", "pl2en", "order", "en2pl", "listen"];
var CHOICE = ["en2pl", "pl2en", "listen"];
ADD("s7", [
{ id: "x7-cond3", t: "Si hubiera sabido… – III tryb", d: "Gdybym był wiedział, pomógłbym. Przeszłość, której nie da się zmienić.", k: "f", i: `
Si lo {hubiera sabido}, te habría ayudado.|Gdybym wiedział, pomógłbym ci.|habría sabido,sabría|Si + pluscuamperfecto de subjuntivo, condicional compuesto.
Si hubieras venido, lo {habrías pasado} bien.|Gdybyś przyszedł, dobrze byś się bawił.|hubieras pasado,pasarías
Si {hubiéramos salido} antes, no habríamos perdido el tren.|Gdybyśmy wyszli wcześniej, nie spóźnilibyśmy się na pociąg.|habríamos salido,saliéramos
Yo no lo {habría hecho}.|Ja bym tego nie zrobił.|hubiera hecho,haría
Ojalá {hubiera estudiado} más.|Szkoda, że nie uczyłem się więcej.|habría estudiado,estudiara|Ojalá + pluscuamperfecto = żal z przeszłości.
Si me {hubieras llamado}, habría ido.|Gdybyś do mnie zadzwonił, poszedłbym.|habrías llamado,llamaras
¿Qué {habrías hecho} tú?|Co ty byś zrobił?|hubieras hecho,harías
Si no {hubiera llovido}, habríamos ido a la playa.|Gdyby nie padało, poszlibyśmy na plażę.|habría llovido,lloviera
Si hubiera aceptado aquel trabajo, ahora {viviría} en Londres.|Gdybym przyjął tamtą pracę, mieszkałbym teraz w Londynie.|habría vivido,viviera|Mieszany: przeszłość → skutek teraz.
Me {habría gustado} conocerla.|Chciałbym był ją poznać.|hubiera gustado,gustaría
`},
{ id: "x7-passive", t: "Strona bierna: ser i estar", d: "Fue construido (proces) – está construido (stan).", k: "f", i: `
El puente {fue} construido en 1900.|Most został zbudowany w 1900 roku.|estuvo,estaba|Ser + participio – czynność (zostało zrobione).
El puente {está} construido de piedra.|Most jest zbudowany z kamienia.|es,fue|Estar + participio – stan (jest zrobione).
La novela fue {escrita} por una mujer.|Powieść została napisana przez kobietę.|escrito,escribida|Participio zgadza się z rzeczownikiem.
Los ladrones fueron {detenidos} ayer.|Złodzieje zostali zatrzymani wczoraj.|detenido,detenidas
La tienda {está} cerrada los domingos.|Sklep jest zamknięty w niedziele.|es,fue
Las entradas {están} agotadas.|Bilety są wyprzedane.|son,fueron
El cuadro fue pintado {por} Goya.|Obraz namalował Goya.|para,de|Wykonawca – por.
La casa {fue} vendida en un mes.|Dom został sprzedany w miesiąc.|estuvo,estaba
{Se} construyó un nuevo hospital.|Zbudowano nowy szpital.|Le,Lo|Częściej: se + czasownik (pasiva refleja).
Se {vendieron} todas las entradas.|Sprzedano wszystkie bilety.|vendió,vendían
La reunión {ha sido} cancelada.|Zebranie zostało odwołane.|ha estado,está siendo
Todo {está} preparado.|Wszystko jest przygotowane.|es,fue
`},
{ id: "x7-serestar2", t: "Ser czy estar: zmiana znaczenia", d: "Ser listo = być bystrym, estar listo = być gotowym.", k: "f", i: `
Mi hermano {es} muy listo.|Mój brat jest bardzo bystry.|está,estuvo|Ser listo = bystry.
¿{Estás} listo? Nos vamos.|Jesteś gotowy? Idziemy.|Eres,Fuiste|Estar listo = gotowy.
Esta película {es} aburrida.|Ten film jest nudny.|está,estuvo|Ser aburrido = nudny.
{Estoy} aburrido, no hay nada que hacer.|Nudzę się, nie ma nic do roboty.|Soy,Fui|Estar aburrido = znudzony.
El pescado {está} malo, no lo comas.|Ryba jest zepsuta, nie jedz jej.|es,fue|Estar malo = zepsuty / chory.
Fumar {es} malo para la salud.|Palenie szkodzi zdrowiu.|está,estuvo|Ser malo = szkodliwy, zły.
Mi abuelo {está} muy vivo para su edad.|Dziadek jest bardzo żwawy jak na swój wiek.|es,fue|Estar vivo = żyć / być żwawym.
Es un niño muy {vivo}.|To bardzo bystre dziecko.|vivido,viviente|Ser vivo = bystry, sprytny.
La fruta todavía {está} verde.|Owoc jest jeszcze niedojrzały.|es,fue|Estar verde = niedojrzały.
Las hojas {son} verdes.|Liście są zielone.|están,estuvieron
Ese chico {es} muy rico.|Ten chłopak jest bardzo bogaty.|está,estuvo|Ser rico = bogaty.
La paella {está} muy rica.|Paella jest bardzo smaczna.|es,fue|Estar rico = smaczny.
Juan {está} muy delgado últimamente.|Juan ostatnio bardzo schudł.|es,fue|Estar + wygląd = zmiana, tymczasowo.
`},
{ id: "x7-subjperf", t: "Haya hecho – subjuntivo perfecto", d: "Espero que hayas dormido bien. No creo que haya llegado.", k: "f", i: `
Espero que {hayas dormido} bien.|Mam nadzieję, że dobrze spałeś.|has dormido,durmieras|Haya + participio – przeszłość w trybie łączącym.
No creo que {haya llegado} todavía.|Nie sądzę, żeby już przyjechał.|ha llegado,llegue
Me alegro de que {hayáis venido}.|Cieszę się, że przyszliście.|habéis venido,vinierais
Es raro que no {haya llamado}.|Dziwne, że nie zadzwonił.|ha llamado,llame
Cuando {hayas terminado}, avísame.|Kiedy skończysz, daj mi znać.|has terminado,terminarás
Ojalá {haya aprobado}.|Oby zdał.|ha aprobado,aprobó
Dudo que lo {hayan entendido}.|Wątpię, żeby to zrozumieli.|han entendido,entendieran
Siento que {hayas tenido} que esperar.|Przykro mi, że musiałeś czekać.|has tenido,tuviste
Puede que se {haya perdido}.|Możliwe, że się zgubił.|ha perdido,perdió
No conozco a nadie que {haya estado} en Japón.|Nie znam nikogo, kto był w Japonii.|ha estado,estuvo
`},
{ id: "x7-verbprep", t: "Czasowniki z przyimkami w zdaniach", d: "Pensar en, soñar con, depender de, consistir en…", k: "f", i: `
Siempre pienso {en} ti.|Zawsze myślę o tobie.|de,sobre|Pensar en = myśleć o.
¿Qué piensas {de} mi idea?|Co sądzisz o moim pomyśle?|en,sobre|Pensar de = mieć zdanie o.
Sueño {con} viajar por el mundo.|Marzę o podróży dookoła świata.|de,en|Soñar con = marzyć o.
Todo depende {de} ti.|Wszystko zależy od ciebie.|en,con
Se casó {con} un italiano.|Wyszła za mąż za Włocha.|a,de|Casarse con – „z” (nie „za”).
El trabajo consiste {en} atender a clientes.|Praca polega na obsłudze klientów.|de,a
Me acuerdo {de} aquel verano.|Pamiętam tamto lato.|a,en
No te olvides {de} comprar pan.|Nie zapomnij kupić chleba.|a,en
Se enamoró {de} su profesora.|Zakochał się w swojej nauczycielce.|en,con|Enamorarse de – „w” po polsku!
Puedes contar {conmigo}.|Możesz na mnie liczyć.|con mí,en mí
Trato {de} ayudar.|Staram się pomóc.|a,en|Tratar de = starać się.
Se queja {de} todo.|Narzeka na wszystko.|en,por
Me niego {a} hacerlo.|Odmawiam zrobienia tego.|de,en
Insiste {en} pagar.|Upiera się, żeby zapłacić.|a,de
`},
{ id: "x7-sent-travel", t: "Zdania: podróże", d: "Przesiadka, opóźnienie, nocleg.", k: "o", ex: SENT, i: `
Nuestro vuelo se retrasó tres horas.|Nasz lot był opóźniony o trzy godziny.
Hacemos escala en Madrid.|Mamy przesiadkę w Madrycie.
Casi pierdo el tren.|Prawie spóźniłem się na pociąg.
Reservamos el alojamiento con antelación.|Zarezerwowaliśmy nocleg z wyprzedzeniem.
Había una cola enorme en el control.|Na kontroli była ogromna kolejka.
Nos perdimos en el casco antiguo.|Zgubiliśmy się na starym mieście.
La gente del lugar nos ayudó mucho.|Miejscowi bardzo nam pomogli.
El viaje duró un día entero.|Podróż trwała cały dzień.
Cambié dinero en el aeropuerto.|Wymieniłem pieniądze na lotnisku.
El hotel era mejor que en las fotos.|Hotel był lepszy niż na zdjęciach.
Alquilamos un coche para recorrer la isla.|Wynajęliśmy samochód, żeby objechać wyspę.
`},
{ id: "x7-sent-career", t: "Zdania: kariera", d: "Awans, zwolnienie, projekt, termin.", k: "o", ex: SENT, i: `
Me han ascendido a jefe de equipo.|Awansowano mnie na kierownika zespołu.
Dejó su trabajo el mes pasado.|Odszedł z pracy w zeszłym miesiącu.
No llegamos a tiempo para la fecha límite.|Nie zdążymy przed terminem.
Trabajo a distancia dos días por semana.|Pracuję zdalnie dwa dni w tygodniu.
El jefe no está contento con los resultados.|Szef nie jest zadowolony z wyników.
Hemos contratado a tres personas nuevas.|Zatrudniliśmy trzy nowe osoby.
He solicitado ese puesto.|Złożyłem podanie na to stanowisko.
Me han ofrecido un sueldo más alto.|Zaproponowano mi wyższą pensję.
La empresa está creciendo rápidamente.|Firma szybko się rozwija.
Quiero montar mi propio negocio.|Chcę założyć własny biznes.
`},
{ id: "x7-sent-society", t: "Zdania: społeczeństwo", d: "Problemy, zmiany, przyszłość.", k: "o", ex: SENT, i: `
Los jóvenes pasan cada vez más tiempo en internet.|Młodzi spędzają coraz więcej czasu w internecie.
Cada vez más gente se muda a las ciudades.|Coraz więcej ludzi przeprowadza się do miast.
La vivienda es cada vez más cara.|Mieszkania są coraz droższe.
La población está envejeciendo.|Społeczeństwo się starzeje.
La educación debería ser accesible para todos.|Edukacja powinna być dostępna dla wszystkich.
La tecnología está cambiando nuestras vidas.|Technologia zmienia nasze życie.
Hay que cuidar el medio ambiente.|Trzeba dbać o środowisko.
Es difícil encontrar trabajo sin experiencia.|Trudno znaleźć pracę bez doświadczenia.
Las redes sociales influyen en la política.|Media społecznościowe wpływają na politykę.
El futuro depende de nosotros.|Przyszłość zależy od nas.
`},
{ id: "x7-idioms2", t: "Idiomy 2", d: "Ponerse las pilas, estar en el ajo, ser la leche…", k: "v", ex: CHOICE, i: `
ponerse las pilas|wziąć się w garść
estar en el ajo|być w temacie (wiedzieć, o co chodzi)
ser la leche|być niesamowitym
estar como pez en el agua|czuć się jak ryba w wodzie
tener la cabeza en su sitio|mieć głowę na karku
importar un pimiento|mieć coś gdzieś
quedarse de piedra|osłupieć
ir al grano|przejść do rzeczy
estar entre la espada y la pared|być między młotem a kowadłem
dar gato por liebre|wcisnąć kit (oszukać)
salir el tiro por la culata|obrócić się przeciwko komuś
echar leña al fuego|dolewać oliwy do ognia
no ver tres en un burro|być ślepym jak kret
ser más listo que el hambre|być bardzo cwanym
pedir peras al olmo|chcieć gruszek na wierzbie
tener la sartén por el mango|trzymać rękę na pulsie (mieć władzę)
ponerse las botas|najeść się do syta
hacer la vista gorda|przymykać oko
estar a dos velas|być spłukanym
quedarse en blanco|mieć pustkę w głowie
ahogarse en un vaso de agua|robić z igły widły
nadar entre dos aguas|lawirować (siedzieć na dwóch stołkach)
estar hecho polvo|być wykończonym
ser de pocas palabras|być małomównym
`},
{ id: "x7-proverbs", t: "Przysłowia", d: "Hiszpańskie przysłowia i ich polskie odpowiedniki.", k: "v", ex: CHOICE, i: `
Más vale tarde que nunca.|Lepiej późno niż wcale.
No hay mal que por bien no venga.|Nie ma tego złego, co by na dobre nie wyszło.
A quien madruga, Dios le ayuda.|Kto rano wstaje, temu Pan Bóg daje.
Más vale pájaro en mano que ciento volando.|Lepszy wróbel w garści niż gołąb na dachu.
Dime con quién andas y te diré quién eres.|Powiedz mi, z kim przestajesz, a powiem ci, kim jesteś.
En boca cerrada no entran moscas.|Mowa jest srebrem, a milczenie złotem.
Ojos que no ven, corazón que no siente.|Czego oczy nie widzą, tego sercu nie żal.
No todo lo que brilla es oro.|Nie wszystko złoto, co się świeci.
De tal palo, tal astilla.|Niedaleko pada jabłko od jabłoni.
Perro ladrador, poco mordedor.|Pies, który dużo szczeka, nie gryzie.
Querer es poder.|Dla chcącego nic trudnego.
Poco a poco se va lejos.|Kto powoli jedzie, ten dalej zajedzie.
El que la sigue la consigue.|Kto wytrwa, ten osiągnie.
Cada loco con su tema.|Każdy ma swojego bzika.
No dejes para mañana lo que puedas hacer hoy.|Co masz zrobić jutro, zrób dziś.
Donde fueres, haz lo que vieres.|Kiedy wejdziesz między wrony, musisz krakać jak i one.
A caballo regalado no le mires el diente.|Darowanemu koniowi nie zagląda się w zęby.
Agua que no has de beber, déjala correr.|Nie wtrącaj się w nie swoje sprawy.
`}
]);
})();
