/* Etap 5 – zwroty praktyczne i słówka B1. */
(function () {
var CHOICE = ["en2pl", "pl2en", "listen"];
ADD("s5", [
{ id: "x5-shop-phrases", t: "Zwroty: w sklepie", d: "Reklamacja, wymiana, zły rozmiar, wezmę to.", k: "v", ex: CHOICE, i: `
Quiero poner una reclamación.|Chcę złożyć reklamację.
Esto no funciona.|To nie działa.
No es mi talla.|To nie mój rozmiar.
¿Puedo cambiarlo?|Czy mogę to wymienić?
¿Tiene el tique?|Ma Pan paragon?
¿Está rebajado?|Czy to jest przecenione?
¿Me lo envuelve para regalo?|Zapakuje mi Pan na prezent?
¿Hacen envíos a domicilio?|Czy dostarczacie do domu?
No nos queda.|Nie mamy tego (skończyło się).
Se lo podemos pedir.|Możemy to dla Pana zamówić.
¿Dónde se paga?|Gdzie się płaci?
Introduzca el PIN, por favor.|Proszę wpisać PIN.
¿Quiere bolsa?|Czy potrzebuje Pan torby?
Son veinte euros en total.|Razem dwadzieścia euro.
Aquí tiene el cambio.|Oto reszta.
¡Es una ganga!|To okazja!
Me queda estrecho.|Jest na mnie za ciasne.
¿Lo tiene en negro?|Ma Pan to w kolorze czarnym?
Me lo quedo.|Wezmę to.
¿Me devuelven el dinero?|Czy dostanę zwrot pieniędzy?
¿Tiene garantía?|Czy jest na to gwarancja?
¿A qué hora cierran?|O której zamykacie?
`},
{ id: "x5-restaurant-phrases", t: "Zwroty: w restauracji", d: "Co Pan poleca? Płacimy osobno. Na wynos?", k: "v", ex: CHOICE, i: `
¿Ya han decidido?|Czy Państwo już wybrali?
¿Qué nos recomienda?|Co nam Pan poleca?
¿Lleva frutos secos?|Czy są w tym orzechy?
Para mí, lo mismo.|Dla mnie to samo.
¿Nos trae más pan?|Poprosimy jeszcze chleba.
¿Agua con gas o sin gas?|Woda gazowana czy niegazowana?
¿Nos trae la carta de postres?|Poprosimy kartę deserów.
Yo no he pedido esto.|Tego nie zamawiałem.
La comida está fría.|Jedzenie jest zimne.
Vamos a pagar por separado.|Zapłacimy osobno.
Tengo una reserva.|Mam rezerwację.
Una mesa junto a la ventana, por favor.|Stolik przy oknie, proszę.
Estaba todo buenísimo, gracias.|Wszystko było przepyszne, dziękuję.
¿Está libre esta silla?|Czy to krzesło jest wolne?
¿Para tomar aquí o para llevar?|Na miejscu czy na wynos?
¿Aceptan tarjeta?|Czy przyjmujecie karty?
¡Que aproveche!|Smacznego!
Soy alérgico al marisco.|Mam alergię na owoce morza.
Sin cebolla, por favor.|Bez cebuli, proszę.
¿Me pone otro café?|Poproszę jeszcze jedną kawę.
`},
{ id: "x5-travel-phrases", t: "Zwroty: w podróży", d: "Ile się jedzie? Czy to miejsce jest zajęte?", k: "v", ex: CHOICE, i: `
¿Cuánto se tarda?|Ile to trwa?
¿Está muy lejos?|Czy to bardzo daleko?
¿Este autobús va al aeropuerto?|Czy ten autobus jedzie na lotnisko?
¿Me avisa cuando tenga que bajar?|Powie mi Pan, kiedy mam wysiąść?
Un billete de ida y vuelta a Sevilla.|Bilet w obie strony do Sewilli.
¿De qué andén sale el tren?|Z którego peronu odjeżdża pociąg?
¿Está ocupado este asiento?|Czy to miejsce jest zajęte?
Quiero alquilar un coche.|Chcę wynająć samochód.
¿Dónde puedo coger un taxi?|Gdzie mogę złapać taksówkę?
Lléveme a esta dirección, por favor.|Proszę mnie zawieźć pod ten adres.
Han cancelado mi vuelo.|Odwołano mój lot.
Mi equipaje no ha llegado.|Mój bagaż nie dotarł.
¿Dónde está el mostrador de facturación?|Gdzie jest stanowisko odprawy?
¿Ventanilla o pasillo?|Przy oknie czy przy przejściu?
¿Necesito visado?|Czy potrzebuję wizy?
¿Tiene algo que declarar?|Ma Pan coś do oclenia?
Estoy aquí de vacaciones.|Jestem tu na wakacjach.
Estoy de viaje de negocios.|Jestem w podróży służbowej.
¿Está incluido el desayuno?|Czy śniadanie jest wliczone?
¿Nos hace una foto?|Zrobi nam Pan zdjęcie?
`},
{ id: "x5-health-phrases", t: "Zwroty: u lekarza", d: "Co Panu dolega? Gdzie boli? Wypiszę receptę.", k: "v", ex: CHOICE, i: `
Quería pedir cita con el médico.|Chciałbym umówić się do lekarza.
¿Qué le pasa?|Co Panu dolega?
¿Dónde le duele?|Gdzie Pana boli?
Me duele aquí.|Boli mnie tutaj.
Me duele la cabeza desde hace tres días.|Od trzech dni boli mnie głowa.
No puedo dormir.|Nie mogę spać.
Tengo fiebre.|Mam gorączkę.
Toso todo el tiempo.|Cały czas kaszlę.
Me encuentro un poco mejor.|Czuję się trochę lepiej.
Tómese dos pastillas al día.|Proszę brać dwie tabletki dziennie.
¿Toma algún medicamento?|Czy przyjmuje Pan jakieś leki?
¿Es alérgico a algo?|Czy ma Pan na coś alergię?
Respire hondo.|Proszę głęboko oddychać.
Abra la boca, por favor.|Proszę otworzyć usta.
Le voy a recetar un antibiótico.|Przepiszę Panu antybiotyk.
Tiene que descansar.|Musi Pan odpoczywać.
Beba mucha agua.|Proszę pić dużo wody.
Me he torcido el tobillo.|Skręciłem kostkę.
Estoy embarazada.|Jestem w ciąży.
¿Es grave?|Czy to coś poważnego?
¡Que te mejores!|Szybkiego powrotu do zdrowia!
`},
{ id: "x5-emergency", t: "Nagłe sytuacje", d: "¡Socorro! ¡Llame a una ambulancia! Me han robado.", k: "v", ex: CHOICE, i: `
¡Socorro!|Pomocy!
¡Llame a una ambulancia!|Proszę wezwać karetkę!
¡Llame a la policía!|Proszę wezwać policję!
¡Fuego!|Pożar!
¡Cuidado!|Uwaga!
¡Al ladrón!|Łapać złodzieja!
Me han robado.|Okradziono mnie.
He perdido el pasaporte.|Zgubiłem paszport.
Ha habido un accidente.|Zdarzył się wypadek.
¿Hay algún herido?|Czy ktoś jest ranny?
Necesito un médico.|Potrzebuję lekarza.
¿Dónde está el hospital más cercano?|Gdzie jest najbliższy szpital?
Soy alérgico a los frutos secos.|Mam alergię na orzechy.
No respira.|On nie oddycha.
Mantenga la calma.|Proszę zachować spokój.
Es urgente.|To pilne.
Se me ha averiado el coche.|Zepsuł mi się samochód.
No puedo entrar en casa.|Nie mogę dostać się do domu.
El ascensor se ha quedado atascado.|Winda utknęła.
¿Me puede ayudar?|Czy może mi Pan pomóc?
la salida de emergencia|wyjście ewakuacyjne
los primeros auxilios|pierwsza pomoc
el número de emergencias|numer alarmowy
`},
{ id: "x5-hotel", t: "W hotelu", d: "La llave, el servicio de habitaciones, no hay plazas…", k: "v", i: `
la llave de la habitación|klucz do pokoju
el servicio de habitaciones|obsługa pokoju
el servicio de despertador|budzenie telefoniczne
el desayuno incluido|śniadanie w cenie
completo|brak wolnych miejsc (pełne)
la habitación libre|wolny pokój
la habitación doble|pokój dwuosobowy
la habitación individual|pokój jednoosobowy
la suite|apartament
la caja fuerte|sejf
el botones|boy hotelowy
una habitación ruidosa|głośny pokój
con vistas al mar|z widokiem na morze
la hora de entrada|godzina zameldowania
la hora de salida|godzina wymeldowania
la salida tardía|późne wymeldowanie
la confirmación de la reserva|potwierdzenie rezerwacji
cancelar la reserva|anulować rezerwację
la cama supletoria|dodatkowe łóżko
No molestar|Nie przeszkadzać
la contraseña del wifi|hasło do wi-fi
la consigna|przechowalnia bagażu
la recepción|recepcja
el huésped|gość hotelowy
con baño propio|z własną łazienką
`},
{ id: "x5-phone", t: "Rozmowa telefoniczna", d: "¿Diga? ¿De parte de quién? Le paso.", k: "v", ex: CHOICE, i: `
¿Diga?|Halo? (odbierając)
¿Sí?|Słucham?
¿De parte de quién?|Kto mówi?
¿Está Elena?|Czy jest Elena?
Ahora no está.|Teraz jej nie ma.
¿Quiere dejar un mensaje?|Chce Pan zostawić wiadomość?
Te llamo más tarde.|Zadzwonię później.
Se ha equivocado de número.|Pomylił Pan numer.
No le oigo bien.|Słabo Pana słyszę.
Hable más alto, por favor.|Proszę mówić głośniej.
Se corta.|Przerywa (połączenie).
Me estoy quedando sin batería.|Rozładowuje mi się bateria.
Deje su mensaje después de la señal.|Proszę zostawić wiadomość po sygnale.
Ahora no puedo hablar.|Teraz nie mogę rozmawiać.
Llámame luego.|Zadzwoń do mnie potem.
Gracias por llamar.|Dziękuję za telefon.
Un momento, por favor.|Chwileczkę, proszę.
Le paso.|Łączę.
Está comunicando.|Jest zajęte.
Perdone que le moleste.|Przepraszam, że przeszkadzam.
Le llamo por el pedido.|Dzwonię w sprawie zamówienia.
¿Me puede repetir el número?|Może Pan powtórzyć numer?
¡Hasta luego!|Do usłyszenia!
`},
{ id: "x5-measures", t: "Ilości i miary", d: "La mitad, un tercio, una docena, el ancho, el peso…", k: "v", i: `
la mitad|połowa
un tercio|jedna trzecia
un cuarto|ćwierć
un par|para
una docena|tuzin
una decena|dziesiątka
un centenar|setka
un millón|milion
mil millones|miliard
el por ciento|procent
el gramo|gram
el litro|litr
el metro|metr
el centímetro|centymetr
el kilómetro|kilometr
la tonelada|tona
el ancho|szerokość
el largo|długość
la altura|wysokość
la profundidad|głębokość
el peso|waga (ciężar)
el tamaño|rozmiar
la cantidad|ilość
la superficie|powierzchnia
el volumen|objętość
`}
]);
})();
