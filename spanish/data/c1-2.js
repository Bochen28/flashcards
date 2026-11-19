/* Etap 8 – styl formalny, zdania złożone, idiomy, synonimy (C1). */
(function () {
var SENT = ["order", "pl2en", "order", "en2pl", "listen"];
var CHOICE = ["en2pl", "pl2en", "listen"];
ADD("s8", [
{ id: "x8-letters", t: "Listy i e-maile formalne", d: "Estimado señor…, Le saluda atentamente…", k: "v", ex: CHOICE, i: `
Estimado señor:|Szanowny Panie,
Estimada señora:|Szanowna Pani,
Estimados señores:|Szanowni Państwo,
Me dirijo a ustedes para…|Zwracam się do Państwa w celu…
En respuesta a su carta…|W odpowiedzi na Państwa list…
Le agradecería que…|Byłbym wdzięczny, gdyby…
Le ruego que…|Uprzejmie proszę, aby…
Les informamos de que…|Informujemy Państwa, że…
Lamentamos comunicarle que…|Z przykrością informujemy, że…
Quedo a la espera de su respuesta.|Czekam na Państwa odpowiedź.
Adjunto le envío…|W załączniku przesyłam…
Disculpen las molestias.|Przepraszamy za niedogodności.
Según lo acordado…|Zgodnie z ustaleniami…
Teniendo en cuenta lo anterior…|Biorąc pod uwagę powyższe…
En relación con su consulta…|W odniesieniu do Państwa zapytania…
Quedo a su disposición.|Pozostaję do Państwa dyspozycji.
Gracias de antemano.|Z góry dziękuję.
Atentamente|Z poważaniem
Un cordial saludo|Serdeczne pozdrowienia
Le saluda atentamente|Z wyrazami szacunku
`},
{ id: "x8-subj3", t: "Subjuntivo dla zaawansowanych", d: "Por mucho que, como si, a no ser que, el hecho de que…", k: "f", i: `
Por mucho que {insistas}, no voy a ir.|Choćbyś nie wiem jak nalegał, nie pójdę.|insistes,insistirás|Por mucho que → subjuntivo.
Habla como si lo {supiera} todo.|Mówi tak, jakby wszystko wiedział.|sabe,sepa|Como si → subjuntivo imperfecto.
Iremos, a no ser que {llueva}.|Pójdziemy, chyba że będzie padać.|llueve,lloverá|A no ser que = chyba że.
El hecho de que no {haya venido} es preocupante.|To, że nie przyszedł, jest niepokojące.|ha venido,vino
Sea como {sea}, hay que intentarlo.|Tak czy inaczej, trzeba spróbować.|es,fuera|Sea como sea = tak czy inaczej.
Pase lo que {pase}, estaré contigo.|Cokolwiek się stanie, będę z tobą.|pasa,pasará
Digan lo que {digan}, no me importa.|Niech mówią, co chcą – nie obchodzi mnie to.|dicen,dirán
Con tal de que {estés} bien, todo lo demás da igual.|Byle tylko z tobą wszystko było dobrze, reszta jest nieważna.|estás,estarás
No es que no {quiera}, es que no puedo.|Nie chodzi o to, że nie chcę – po prostu nie mogę.|quiero,querré
Quienquiera que {sea}, no abras la puerta.|Ktokolwiek to jest, nie otwieraj drzwi.|es,fuera
En caso de que {necesites} algo, llámame.|Gdybyś czegoś potrzebował, zadzwoń.|necesitas,necesitarás
Me extraña que no te {lo hayan dicho}.|Dziwi mnie, że ci nie powiedzieli.|lo han dicho,lo dijeron
`},
{ id: "x8-wordform", t: "Słowotwórstwo", d: "Decidir, la decisión, decisivo…", k: "f", i: `
Su {decisión} fue acertada.|Jego decyzja była trafna.|decidir,decisivo
Es un momento {decisivo}.|To decydujący moment.|decisión,decidir
Hay que {resolver} este problema.|Trzeba rozwiązać ten problem.|solución,resuelto
Esperamos su {respuesta}.|Czekamy na odpowiedź.|responder,responsable
Es un trabajador muy {responsable}.|To bardzo odpowiedzialny pracownik.|responsabilidad,responder
Valoro mucho tu {ayuda}.|Bardzo cenię twoją pomoc.|ayudar,ayudante
Es un consejo muy {útil}.|To bardzo przydatna rada.|utilidad,utilizar
Su {comportamiento} fue extraño.|Jego zachowanie było dziwne.|comportarse,comportado
Sentimos una gran {gratitud}.|Czujemy wielką wdzięczność.|agradecido,agradecer
Te estoy muy {agradecido}.|Jestem ci bardzo wdzięczny.|gratitud,agradecer
La {lectura} desarrolla la imaginación.|Czytanie rozwija wyobraźnię.|leer,lector
Es un lugar muy {peligroso}.|To bardzo niebezpieczne miejsce.|peligro,peligrar
Corremos un gran {peligro}.|Grozi nam wielkie niebezpieczeństwo.|peligroso,peligrosamente
Lo hizo {rápidamente}.|Zrobił to szybko.|rápido de,rapidez
`},
{ id: "x8-sent-formal", t: "Zdania: styl urzędowy", d: "Posiedzenie, wniosek, wchodzi w życie.", k: "o", ex: SENT, i: `
Solicito unos días de permiso a partir del uno de julio.|Proszę o kilka dni urlopu od pierwszego lipca.
La reunión tendrá lugar el martes a las diez.|Zebranie odbędzie się we wtorek o dziesiątej.
Se ruega puntualidad.|Uprasza się o punktualność.
Es imprescindible presentar la documentación antes del viernes.|Należy koniecznie złożyć dokumenty przed piątkiem.
Su solicitud está siendo tramitada.|Pana wniosek jest w trakcie rozpatrywania.
Estudiaremos su propuesta lo antes posible.|Rozpatrzymy Pana propozycję jak najszybciej.
De acuerdo con la ley, usted tiene derecho a una indemnización.|Zgodnie z ustawą ma Pan prawo do odszkodowania.
Prohibido el paso a personas ajenas a la empresa.|Wstęp wzbroniony dla osób postronnych.
La normativa entrará en vigor el próximo mes.|Przepisy wejdą w życie w przyszłym miesiącu.
Ambas partes llegaron a un acuerdo.|Obie strony doszły do porozumienia.
Les rogamos disculpen las molestias.|Prosimy o wyrozumiałość za utrudnienia.
`},
{ id: "x8-sent-ideas", t: "Zdania: myśli i argumenty", d: "Im więcej, tym… Cokolwiek się stanie…", k: "o", ex: SENT, i: `
Es difícil exagerar la importancia de la educación.|Trudno przecenić znaczenie edukacji.
No cabe duda de que tiene razón.|Nie ulega wątpliwości, że ma rację.
Este problema tiene raíces más profundas.|Ten problem ma głębsze korzenie.
Cuanto más leo, menos sé.|Im więcej czytam, tym mniej wiem.
Sea como sea, tenemos que actuar.|Tak czy inaczej, musimy działać.
Pase lo que pase, estaré a tu lado.|Cokolwiek się stanie, będę przy tobie.
Pocas personas lo saben.|Mało kto o tym wie.
Cabe destacar que la situación ha cambiado.|Warto podkreślić, że sytuacja się zmieniła.
Por eso precisamente este tema es tan importante.|Właśnie dlatego ten temat jest tak ważny.
En otras palabras, tenemos que cambiar.|Innymi słowy, musimy się zmienić.
Solo el tiempo dirá quién tenía razón.|Tylko czas pokaże, kto miał rację.
`},
{ id: "x8-sent-nuance", t: "Zdania: niuanse", d: "Prawie, ledwo, byle tylko, też coś!", k: "o", ex: SENT, i: `
Por poco me olvido de tu cumpleaños.|Prawie zapomniałem o twoich urodzinach.
Llegué a duras penas al último autobús.|Ledwo zdążyłem na ostatni autobus.
Hizo como si no me hubiera visto.|Udawał, że mnie nie widzi.
Dudo mucho que llegue a tiempo.|Bardzo wątpię, czy zdąży.
Con tal de que no llueva…|Byle tylko nie padało…
¡Ojalá alguien llamara!|Żeby chociaż ktoś zadzwonił!
Me da igual lo que piensen de mí.|Wszystko mi jedno, co o mnie myślą.
¡Basta ya de quejarte!|Dość już narzekania!
No hacía falta decir eso.|Nie trzeba było tego mówić.
¡Quién lo iba a decir!|Kto by pomyślał!
No estoy para bromas.|Nie jest mi do śmiechu.
`},
{ id: "x8-sent-culture", t: "Zdania: Hiszpania i kultura", d: "Siesta, tapas, fiestas, Ameryka Łacińska.", k: "o", ex: SENT, i: `
En España se cena muy tarde.|W Hiszpanii je się kolację bardzo późno.
Ir de tapas es una costumbre muy social.|Chodzenie na tapas to bardzo towarzyski zwyczaj.
El español se habla en más de veinte países.|Po hiszpańsku mówi się w ponad dwudziestu krajach.
Cervantes escribió el Quijote.|Cervantes napisał Don Kichota.
En Nochevieja se comen doce uvas.|W sylwestra je się dwanaście winogron.
El flamenco nació en Andalucía.|Flamenco narodziło się w Andaluzji.
Muchos latinoamericanos usan ustedes en vez de vosotros.|Wielu mieszkańców Ameryki Łacińskiej używa ustedes zamiast vosotros.
Los niños reciben regalos el día de Reyes.|Dzieci dostają prezenty w dzień Trzech Króli.
En verano muchas tiendas cierran a mediodía.|Latem wiele sklepów zamyka się w południe.
Aprender un idioma es descubrir un mundo nuevo.|Uczyć się języka to odkrywać nowy świat.
`},
{ id: "x8-sent-work", t: "Zdania: praca na poziomie C1", d: "Zrewidować budżet, napięte terminy, owocna praca.", k: "o", ex: SENT, i: `
Propongo tratarlo en la próxima reunión.|Proponuję omówić to na następnym zebraniu.
Tenemos que revisar el presupuesto.|Musimy zrewidować budżet.
Este enfoque ha resultado ineficaz.|To podejście okazało się nieskuteczne.
Debemos tener en cuenta la opinión de los clientes.|Musimy uwzględnić opinię klientów.
Los resultados superaron nuestras expectativas.|Wyniki przerosły nasze oczekiwania.
Asumo la responsabilidad de esta decisión.|Biorę na siebie odpowiedzialność za tę decyzję.
Los plazos son muy ajustados.|Terminy są bardzo napięte.
Buscamos una solución intermedia.|Szukamy kompromisowego rozwiązania.
Las ventas han aumentado un veinte por ciento.|Sprzedaż wzrosła o dwadzieścia procent.
Gracias a todos por el trabajo bien hecho.|Dziękuję wszystkim za dobrze wykonaną pracę.
`},
{ id: "x8-idioms3", t: "Idiomy 3", d: "Buscar una aguja en un pajar, lágrimas de cocodrilo…", k: "v", ex: CHOICE, i: `
buscar una aguja en un pajar|szukać igły w stogu siana
lágrimas de cocodrilo|krokodyle łzy
el talón de Aquiles|pięta achillesowa
la oveja negra|czarna owca
llevar la voz cantante|grać pierwsze skrzypce
el canto del cisne|łabędzi śpiew
no tener oído|słoń nadepnął na ucho
dar largas|odkładać (zwlekać)
sin venir a cuento|ni stąd, ni zowąd
llevarse como el perro y el gato|żyć jak pies z kotem
comprar a ciegas|kupić kota w worku
a los cuatro vientos|wszem i wobec
verlo todo negro|widzieć wszystko w czarnych barwach
como quien oye llover|jak grochem o ścianę
a montones|w bród
salir airoso|wyjść z czegoś obronną ręką
meter la pata hasta el fondo|dać ogromną plamę
tropezar dos veces con la misma piedra|popełnić dwa razy ten sam błąd
bailar al son que tocan|tańczyć, jak ktoś zagra
con la mente despejada|ze świeżą głową
se me heló la sangre|krew zastygła mi w żyłach
estar en la luna|bujać w obłokach
pagar el pato|zapłacić za cudze winy
tener enchufe|mieć plecy (znajomości)
ser pan comido|być dziecinnie łatwym
`},
{ id: "x8-falsefr3", t: "Fałszywi przyjaciele 3", d: "Constipado to nie zaparcie, a el pastel to nie kredka!", k: "m", i: `
la pila|bateria (też: zlew, stos)|piła,piłka|Piła to la sierra.
el coche|samochód|kocz (powóz),kochanie|Kochanie to cariño.
la mama|pierś (sutek)|mama,mamy|Mama to mamá – z akcentem!
la tasa|opłata (stawka)|tasak,taśma|Tasak to la cuchilla.
el bufete|kancelaria prawna|bufet,bufon|Bufet to el bufé.
la parienta|żona (potocznie)|krewna,parafianka|Krewna to la pariente.
el rato|chwila|rata,ratunek|Ratunek to el rescate.
la noria|diabelski młyn|norka,nora|Nora to la madriguera.
la lata|puszka (też: nudy)|lato,łata|Lato to el verano.
la gana|ochota|gane (wygrane),ganek|Ganek to el porche.
el piso|mieszkanie (piętro)|pisak,pisarz|Pisak to el rotulador.
el pito|gwizdek|pito (napój),pita|Wypite to bebido.
la carpeta|teczka (segregator)|karpeta,dywan|Dywan to la alfombra.
el prestigio|prestiż|prestiżowy,pretekst|Pretekst to el pretexto.
la miseria|nędza|mizeria,miseczka|Mizeria to ensalada de pepino.
el apellido|nazwisko|apel,apelacja|Apel to el llamamiento.
la cadera|biodro|kadra,kadet|Kadra to el personal.
la bomba|pompa (też: bomba)|bombka,bombonierka|Bombka choinkowa to la bola de Navidad.
el armario|szafa|armia,armata|Armia to el ejército.
la balanza|waga (do ważenia)|balans,balon|Balon to el globo.
`},
{ id: "x8-synonyms", t: "Synonimy", d: "Wybierz słowo o tym samym znaczeniu.", k: "m", qp: "Wybierz synonim:", i: `
bonito|precioso|feo,triste|Bonito = precioso = ładny.
rápido|veloz|lento,tranquilo
grande|enorme|diminuto,estrecho
hablar|conversar|callar,escuchar
triste|apenado|alegre,contento
valiente|valeroso|cobarde,perezoso
listo|inteligente|tonto,vago
pobre|necesitado|rico,generoso
tranquilo|sereno|ruidoso,nervioso
trabajar|laborar|descansar,dormir
empezar|comenzar|terminar,acabar
ayudar|apoyar|molestar,impedir
la meta|el objetivo|la causa,el efecto
el error|la equivocación|la verdad,el éxito
la idea|la ocurrencia|el silencio,la acción
la alegría|el gozo|la pena,el dolor
el camino|la vía|la casa,el río
el amigo|el compañero|el enemigo,el rival
pronto|enseguida|antes,nunca
auténtico|genuino|falso,imaginario
`},
{ id: "x8-antonyms", t: "Antonimy", d: "Wybierz słowo o przeciwnym znaczeniu.", k: "m", qp: "Wybierz przeciwieństwo:", i: `
generoso|tacaño|amable,rico|Generoso = hojny, tacaño = skąpy.
valiente|cobarde|valeroso,fuerte
estrecho|ancho|delgado,largo
profundo|superficial|bajo,mojado
pesado|ligero|grave,difícil
duro|blando|rígido,fuerte
amargo|dulce|ácido,picante
temprano|tarde|pronto,rápido
pobre|rico|humilde,malo
barato|caro|económico,rebajado
la victoria|la derrota|el éxito,el triunfo
el amigo|el enemigo|el compañero,el colega
la verdad|la mentira|la realidad,el hecho
el principio|el final|el inicio,la mitad
la alegría|la tristeza|el gozo,la felicidad
la entrada|la salida|la puerta,el paso
cerrar|abrir|clausurar,apagar
llegar|partir|venir,aparecer
alabar|criticar|elogiar,agradecer
aceptar|rechazar|admitir,permitir
`}
]);
})();
