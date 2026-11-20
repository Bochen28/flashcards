/* Etap 2 – podstawy gramatyki (A1): essere, avere, rodzajniki, c'è, piacere, zaimki dzierżawcze, pytania. */
ADD("s2", [
{ id: "x2-essere", t: "Essere: sono, sei, è…", d: "Być: io sono, tu sei, lui / lei è, noi siamo, voi siete, loro sono.", k: "f", i: `
Io {sono} polacco.|Jestem Polakiem.|sei,è|io → sono
Tu {sei} italiana?|Jesteś Włoszką?|sono,è|tu → sei
Marco {è} molto simpatico.|Marco jest bardzo sympatyczny.|sono,sei|lui / lei → è
Noi {siamo} amici.|Jesteśmy przyjaciółmi.|siete,sono|noi → siamo
Voi {siete} di Roma?|Jesteście z Rzymu?|siamo,sono|voi → siete
Loro {sono} in vacanza.|Oni są na wakacjach.|siamo,è|loro → sono (tak samo jak „io sono”)
La casa {è} grande.|Dom jest duży.|sono,sei
I bambini {sono} stanchi.|Dzieci są zmęczone.|è,siamo
Di dove {sei}?|Skąd jesteś?|sono,è
{Sono} le otto.|Jest ósma.|È,Siamo|Godziny: sono le due, sono le otto (ale: è l'una).
Anna e io {siamo} sorelle.|Anna i ja jesteśmy siostrami.|sono,siete
Il caffè {è} caldo.|Kawa jest gorąca.|sono,ha
Dove {sono} le chiavi?|Gdzie są klucze?|è,sei
Lei {è} la mia professoressa.|Ona jest moją nauczycielką.|sei,ha
Oggi {è} lunedì.|Dziś jest poniedziałek.|sono,ha
Voi {siete} pronti?|Jesteście gotowi?|sono,siamo
Questo libro non {è} mio.|Ta książka nie jest moja.|sono,ha
{Siamo} in ritardo!|Jesteśmy spóźnieni!|Sono,Siete
Mio padre {è} medico.|Mój tata jest lekarzem.|ha,sono|Zawód po „essere” bez rodzajnika: è medico.
Tu e Marco {siete} fratelli?|Ty i Marco jesteście braćmi?|siamo,sono
`},
{ id: "x2-avere", t: "Avere: ho, hai, ha…", d: "Mieć: ho, hai, ha, abbiamo, avete, hanno. Litera h jest nieme.", k: "f", i: `
Io {ho} un fratello.|Mam brata.|hai,ha|io → ho (h nie czytamy)
Tu {hai} una macchina?|Masz samochód?|ho,ha|tu → hai
Lui {ha} due gatti.|On ma dwa koty.|hai,hanno|lui / lei → ha
Noi {abbiamo} una casa al mare.|Mamy dom nad morzem.|avete,hanno|noi → abbiamo
Voi {avete} tempo domani?|Macie jutro czas?|abbiamo,hanno|voi → avete
Loro {hanno} tre figli.|Oni mają troje dzieci.|ha,avete|loro → hanno
Quanti anni {hai}?|Ile masz lat?|sei,ha|Wiek wyrażamy przez „avere”: ho vent'anni.
{Ho} trent'anni.|Mam trzydzieści lat.|Sono,Hai
{Ho} fame.|Jestem głodny.|Sono,Hai|Avere fame = być głodnym (dosł. mieć głód).
Hai {sete}?|Chce ci się pić?|fame,freddo|Avere sete = chcieć pić.
{Abbiamo} freddo.|Jest nam zimno.|Siamo,Avete|Avere freddo / caldo = jest mi zimno / gorąco.
Marta {ha} paura dei cani.|Marta boi się psów.|è,hanno|Avere paura di = bać się czegoś.
Non {ho} tempo.|Nie mam czasu.|sono,hai
{Hai} ragione!|Masz rację!|Sei,Ha|Avere ragione = mieć rację.
Hanno {sonno}.|Chce im się spać.|fame,ragione|Avere sonno = być śpiącym.
Mia sorella {ha} gli occhi azzurri.|Moja siostra ma niebieskie oczy.|è,hanno
{Avete} figli?|Macie dzieci?|Siete,Hanno
Non {abbiamo} soldi.|Nie mamy pieniędzy.|siamo,avete
Lei {ha} fretta.|Ona się spieszy.|è,ho|Avere fretta = spieszyć się.
Gli italiani {hanno} molte feste.|Włosi mają wiele świąt.|sono,ha
`},
{ id: "x2-articles", t: "Il, lo, la, l', i, gli, le", d: "Rodzajnik określony zależy od rodzaju i od pierwszej litery słowa.", k: "f", i: `
{Il} libro è sul tavolo.|Książka jest na stole.|Lo,La|il – rodzaj męski przed spółgłoską
{Lo} zaino è pesante.|Plecak jest ciężki.|Il,La|lo – rodzaj męski przed z, s + spółgłoska, gn, ps, y
{La} casa è grande.|Dom jest duży.|Il,Lo|la – rodzaj żeński
{L'}amico di Marco è simpatico.|Przyjaciel Marka jest sympatyczny.|Il,Lo|l' – przed samogłoską (oba rodzaje)
Dov'è {l'}acqua?|Gdzie jest woda?|la,il|acqua zaczyna się samogłoską → l'acqua
{I} ragazzi giocano.|Chłopcy się bawią.|Gli,Le|i – liczba mnoga od „il”
{Gli} studenti sono in classe.|Uczniowie są w klasie.|I,Le|gli – liczba mnoga od „lo” i „l'” (męski)
{Le} ragazze cantano.|Dziewczyny śpiewają.|I,Gli|le – liczba mnoga żeńska
Mi piace {lo} sport.|Lubię sport.|il,la|sport zaczyna się od s + spółgłoska → lo
{Gli} amici di Anna sono qui.|Przyjaciele Anny są tutaj.|I,Le|amici (męski, na samogłoskę) → gli
{Lo} zucchero è finito.|Cukier się skończył.|Il,La
{Le} chiavi sono nella borsa.|Klucze są w torebce.|I,Gli
{Il} treno parte alle nove.|Pociąg odjeżdża o dziewiątej.|Lo,La
Dove sono {gli} occhiali?|Gdzie są okulary?|i,le
{L'}estate è calda.|Lato jest gorące.|La,Lo
{Lo} studente è bravo.|Uczeń jest zdolny.|Il,L'
{I} bambini dormono.|Dzieci śpią.|Gli,Le
Mi passi {il} sale?|Podasz mi sól?|lo,la
{Gli} zii abitano a Napoli.|Wujostwo mieszka w Neapolu.|I,Le
Ecco {le} foto delle vacanze.|Oto zdjęcia z wakacji.|i,gli|la foto → le foto (skrót od „la fotografia”)
`},
{ id: "x2-indef", t: "Un, uno, una, un'", d: "Rodzajnik nieokreślony: un libro, uno zaino, una casa, un'amica.", k: "f", i: `
Ho {un} cane.|Mam psa.|uno,una|un – rodzaj męski (także przed samogłoską)
È {uno} studente.|To (jest) student.|un,una|uno – przed z, s + spółgłoska, gn, ps
Vorrei {una} pizza.|Poproszę pizzę.|un,uno
Ho {un'}amica a Roma.|Mam przyjaciółkę w Rzymie.|una,un|un' – rodzaj żeński przed samogłoską (z apostrofem)
C'è {un} albero in giardino.|W ogrodzie jest drzewo.|un',uno|albero jest męskie → un albero (bez apostrofu)
Mi serve {uno} zaino nuovo.|Potrzebuję nowego plecaka.|un,una
Abitiamo in {una} casa piccola.|Mieszkamy w małym domu.|un,un'
Prendo {un} caffè.|Wezmę kawę.|uno,una
È {un'}idea fantastica!|To fantastyczny pomysł!|un,una
Ho {uno} zio in America.|Mam wujka w Ameryce.|un,una
Mangio {una} mela.|Jem jabłko.|un,un'
C'è {un} problema.|Jest (pewien) problem.|uno,una|il problema – męski, choć kończy się na -a
Lei ha {un'}ottima memoria.|Ona ma świetną pamięć.|una,un
Cerco {un} lavoro.|Szukam pracy.|uno,una
È {uno} psicologo famoso.|To znany psycholog.|un,una
Vuoi {un} gelato?|Chcesz loda?|uno,una
Scrivo {una} lettera.|Piszę list.|un,uno
Abbiamo {un'}auto rossa.|Mamy czerwony samochód.|una,un|l'auto (skrót od l'automobile) jest żeńska
Ha {uno} stipendio alto.|Ma wysoką pensję.|un,una
C'è {un} bar qui vicino?|Jest tu w pobliżu bar?|uno,una
`},
{ id: "x2-ce", t: "C'è czy ci sono?", d: "C'è = jest (jedna rzecz), ci sono = są (wiele). Dov'è? = gdzie jest?", k: "f", i: `
{C'è} un bar qui vicino?|Czy jest tu w pobliżu bar?|Ci sono,È|c'è + liczba pojedyncza
{Ci sono} molti turisti.|Jest dużo turystów.|C'è,Sono|ci sono + liczba mnoga
Nel frigo {c'è} il latte.|W lodówce jest mleko.|ci sono,sono
In classe {ci sono} venti studenti.|W klasie jest dwudziestu uczniów.|c'è,è
Non {c'è} problema.|Nie ma problemu.|ci sono,è
{Ci sono} due camere da letto.|Są dwie sypialnie.|C'è,Sono
Chi {c'è} alla porta?|Kto jest przy drzwiach?|ci sono,sono
{C'è} una farmacia in questa via?|Jest apteka na tej ulicy?|Ci sono,È
Oggi non {c'è} il sole.|Dzisiaj nie ma słońca.|ci sono,è
Quante persone {ci sono}?|Ile jest osób?|c'è,sono
{Dov'è} la stazione?|Gdzie jest dworzec?|C'è,Ci sono|Pytając o konkretne miejsce: dov'è…? / dove sono…?
{Dove sono} i bagni?|Gdzie są toalety?|Dov'è,Ci sono
In centro {ci sono} tanti negozi.|W centrum jest dużo sklepów.|c'è,è
{C'è} posta per me?|Jest dla mnie poczta?|Ci sono,È
Sul tavolo {ci sono} le chiavi.|Na stole leżą klucze.|c'è,è
Non {ci sono} più biglietti.|Nie ma już biletów.|c'è,sono
{C'è} qualcuno?|Jest tu ktoś?|Ci sono,È
In Italia {ci sono} venti regioni.|We Włoszech jest dwadzieścia regionów.|c'è,sono
Scusi, {c'è} Marco?|Przepraszam, jest Marco?|ci sono,è|Pytając, czy ktoś jest na miejscu: c'è…?
Qui {c'è} troppo rumore.|Tu jest za głośno.|ci sono,è
`},
{ id: "x2-piacere", t: "Mi piace, mi piacciono", d: "Lubię = mi piace (coś pojedynczego), mi piacciono (wiele rzeczy).", k: "f", i: `
Mi {piace} la pizza.|Lubię pizzę.|piacciono,piaci|piace + liczba pojedyncza
Mi {piacciono} i gatti.|Lubię koty.|piace,piaccio|piacciono + liczba mnoga
Ti {piace} ballare?|Lubisz tańczyć?|piacciono,piaci|piace + bezokolicznik
A Marco {piace} il calcio.|Marco lubi piłkę nożną.|piacciono,piaci
{Gli} piace la musica.|On lubi muzykę.|Le,Mi|gli = jemu
{Le} piacciono i fiori.|Ona lubi kwiaty.|Gli,Ti|le = jej
Ci {piace} viaggiare.|Lubimy podróżować.|piacciono,piacciamo|ci = nam
Vi {piacciono} gli spaghetti?|Lubicie spaghetti?|piace,piacete|vi = wam
Non mi {piace} il caffè.|Nie lubię kawy.|piacciono,piaci
A me {piace} il mare, a te?|Ja lubię morze, a ty?|piacciono,piaci|A me / a te – z naciskiem.
Mi {piacciono} molto questi pantaloni.|Bardzo podobają mi się te spodnie.|piace,piacete
A loro {piace} cucinare.|Oni lubią gotować.|piacciono,piacevano
Mi {piace} leggere e nuotare.|Lubię czytać i pływać.|piacciono,piaci|Kilka czynności (bezokoliczników) → piace.
Ti {piacciono} le lingue?|Lubisz języki?|piace,piaci
Non {gli} piacciono i ragni.|On nie lubi pająków.|le,mi
{Anche} a me!|Ja też (lubię)!|Neanche,Pure|Anche a me = ja też. Neanche a me = ja też nie.
{Neanche} a me.|Ja też nie (nie lubię).|Anche,Mai
Mi {piacerebbe} venire.|Chętnie bym przyszedł.|piace,piacciono|piacerebbe = podobałoby się (grzecznie).
Quale ti {piace} di più?|Który podoba ci się bardziej?|piacciono,piaci
A mia madre {piacciono} i film italiani.|Moja mama lubi włoskie filmy.|piace,piacete
`},
{ id: "x2-poss", t: "Il mio, la mia, i miei…", d: "Zaimek dzierżawczy zwykle stoi z rodzajnikiem: la mia casa. Wyjątek: mio padre, mia madre.", k: "f", i: `
Questa è {la mia} macchina.|To mój samochód.|il mio,mia|la mia macchina – rodzajnik + mia
{Il mio} libro è sul tavolo.|Moja książka jest na stole.|La mia,Mio
{Mio} padre lavora a Milano.|Mój tata pracuje w Mediolanie.|Il mio,La mia|Członek rodziny w l. poj. – bez rodzajnika: mio padre, mia sorella.
{Mia} sorella si chiama Giulia.|Moja siostra ma na imię Giulia.|La mia,Mio
{I miei} amici sono italiani.|Moi przyjaciele są Włochami.|Le mie,I mio|i miei – l. mnoga męska
{Le mie} scarpe sono nuove.|Moje buty są nowe.|I miei,La mia|le mie – l. mnoga żeńska
Dov'è {la tua} borsa?|Gdzie jest twoja torebka?|il tuo,tua
{Tuo} fratello è simpatico.|Twój brat jest sympatyczny.|Il tuo,Tua
Come si chiama {il suo} cane?|Jak się nazywa jego / jej pies?|la sua,suo|suo / sua = jego, jej i grzecznościowe „Pana / Pani”.
Marco vive con {sua} madre.|Marco mieszka ze swoją mamą.|suo,la sua
{La nostra} casa è vicino al mare.|Nasz dom jest blisko morza.|Il nostro,Nostra
{I nostri} figli studiano a Bologna.|Nasze dzieci studiują w Bolonii.|Le nostre,I nostro
È {il vostro} primo viaggio in Italia?|To wasza pierwsza podróż do Włoch?|la vostra,vostro
{Il loro} appartamento è piccolo.|Ich mieszkanie jest małe.|Loro,Il suo|loro zawsze z rodzajnikiem, nawet przy rodzinie: il loro padre.
{I miei} genitori abitano in Polonia.|Moi rodzice mieszkają w Polsce.|Miei,Le mie|W liczbie mnogiej rodzina ma rodzajnik: i miei genitori.
Signora, è {la sua} valigia?|Proszę pani, czy to pani walizka?|la tua,il suo
Questa penna è {mia}.|Ten długopis jest mój.|la mia,mio|Po „essere” można pominąć rodzajnik: è mia.
{La mia} mamma cucina benissimo.|Moja mama świetnie gotuje.|Mia,Il mio|Zdrobnienia (mamma, papà) zwykle z rodzajnikiem.
Ho perso {le mie} chiavi.|Zgubiłem klucze.|i miei,la mia
{Le tue} idee sono interessanti.|Twoje pomysły są ciekawe.|I tuoi,La tua
`},
{ id: "x2-qwords", t: "Pytania: chi, che cosa, dove…", d: "Kto, co, gdzie, kiedy, dlaczego, jak, ile, który.", k: "f", i: `
{Chi} è quel ragazzo?|Kim jest tamten chłopak?|Che,Dove|chi – kto
{Che cosa} fai stasera?|Co robisz dziś wieczorem?|Chi,Quando|che cosa / cosa / che – co
{Dove} abiti?|Gdzie mieszkasz?|Come,Chi
{Quando} parti?|Kiedy wyjeżdżasz?|Dove,Quanto
{Perché} studi l'italiano?|Dlaczego uczysz się włoskiego?|Come,Quando|perché – dlaczego i ponieważ
{Come} stai?|Jak się masz?|Cosa,Quale
{Quanto} costa?|Ile to kosztuje?|Quanti,Come
{Quanti} anni hai?|Ile masz lat?|Quanto,Quante|quanti – ile (rzeczowniki męskie w l. mn.)
{Quante} sorelle hai?|Ile masz sióstr?|Quanti,Quanto|quante – ile (rzeczowniki żeńskie w l. mn.)
{Quale} preferisci?|Który wolisz?|Che,Chi|quale – który (l. mn. quali)
{Di dove} sei?|Skąd jesteś?|Dove,Da dove|Di dove sei? = skąd pochodzisz?
{Come} ti chiami?|Jak masz na imię?|Che,Quale
{A che ora} parte il treno?|O której odjeżdża pociąg?|Quando,Che ora
{Che} ore sono?|Która godzina?|Quale,Quanto
{Con chi} vai in vacanza?|Z kim jedziesz na wakacje?|Chi,Con cui
{Dove} vai?|Dokąd idziesz?|Quando,Come
{Quali} lingue parli?|Jakimi językami mówisz?|Quale,Che cosa
{Cosa} vuoi mangiare?|Co chcesz zjeść?|Chi,Quale
{Quanto} tempo hai?|Ile masz czasu?|Quanti,Quale
{Perché} ridi?|Dlaczego się śmiejesz?|Come,Cosa
`},
{ id: "x2-sent1", t: "Zdania: o sobie", d: "Przedstaw się po włosku.", k: "o", i: `
Ciao, mi chiamo Marco.|Cześć, mam na imię Marco.
Sono polacco.|Jestem Polakiem.
Sono di Varsavia.|Jestem z Warszawy.
Ho trent'anni.|Mam trzydzieści lat.
Abito a Cracovia.|Mieszkam w Krakowie.
Faccio l'infermiera.|Jestem pielęgniarką.
Ho due figli.|Mam dwoje dzieci.
Mia moglie è insegnante.|Moja żona jest nauczycielką.
Parlo polacco e un po' di italiano.|Mówię po polsku i trochę po włosku.
Piacere di conoscerti.|Miło cię poznać.
Di dove sei?|Skąd jesteś?
Che lavoro fai?|Czym się zajmujesz?
Quanti anni hai?|Ile masz lat?
Qual è il tuo numero di telefono?|Jaki jest twój numer telefonu?
Questa è la mia amica Ola.|To moja przyjaciółka Ola.
Mi piacciono la musica e lo sport.|Lubię muzykę i sport.
Il mio colore preferito è il verde.|Mój ulubiony kolor to zielony.
Non sono sposato.|Nie jestem żonaty.
Ho un cane e un gatto.|Mam psa i kota.
Ci vediamo domani!|Do zobaczenia jutro!
`},
{ id: "x2-sent2", t: "Zdania: dom i rodzina", d: "Opisz swój dom i bliskich.", k: "o", i: `
La mia casa è piccola ma bella.|Mój dom jest mały, ale ładny.
Abbiamo una cucina grande.|Mamy dużą kuchnię.
La mia camera è al primo piano.|Mój pokój jest na pierwszym piętrze.
Il bagno è vicino alla cucina.|Łazienka jest obok kuchni.
Ci sono tre camere da letto.|Są trzy sypialnie.
Mia sorella ha i capelli lunghi.|Moja siostra ma długie włosy.
Il nostro gatto dorme sul divano.|Nasz kot śpi na kanapie.
I miei nonni abitano in campagna.|Moi dziadkowie mieszkają na wsi.
Ho un fratello e due sorelle.|Mam brata i dwie siostry.
Mia madre cucina molto bene.|Moja mama bardzo dobrze gotuje.
Il giardino è dietro la casa.|Ogród jest za domem.
La sera mangiamo insieme.|Wieczorem jemy razem.
Mio padre lavora in un ufficio.|Mój tata pracuje w biurze.
I bambini sono in camera loro.|Dzieci są w swoim pokoju.
Il nostro appartamento è al terzo piano.|Nasze mieszkanie jest na trzecim piętrze.
Mio zio vive in Canada.|Mój wujek mieszka w Kanadzie.
La televisione è in soggiorno.|Telewizor jest w salonie.
Abbiamo un frigorifero nuovo.|Mamy nową lodówkę.
Mio fratello è molto alto.|Mój brat jest bardzo wysoki.
La domenica pranziamo dai nonni.|W niedziele jemy obiad u dziadków.
`},
{ id: "x2-sent3", t: "Zdania: proste pytania", d: "Pytaj o imię, miejsce, cenę i godzinę.", k: "o", i: `
Come ti chiami?|Jak masz na imię?
Dov'è la stazione?|Gdzie jest dworzec?
È la tua borsa?|Czy to twoja torebka?
Hai fame?|Jesteś głodny?
Chi è quell'uomo?|Kim jest tamten mężczyzna?
Di che colore è la tua macchina?|Jakiego koloru jest twój samochód?
Come stai oggi?|Jak się dziś masz?
Tua sorella è a casa?|Twoja siostra jest w domu?
Dove sono i bambini?|Gdzie są dzieci?
Che cos'è questo?|Co to jest?
Sono tuoi amici?|Czy to twoi przyjaciele?
Il museo è aperto oggi?|Czy muzeum jest dziś otwarte?
Quanto costa questo pane?|Ile kosztuje ten chleb?
A che ora parte il treno?|O której odjeżdża pociąg?
È lontano da qui?|Czy to daleko stąd?
Di dov'è tua madre?|Skąd pochodzi twoja mama?
Sei pronto?|Jesteś gotowy?
È tuo fratello?|Czy to twój brat?
Che tempo fa oggi?|Jaka jest dziś pogoda?
Posso aiutarti?|Mogę ci pomóc?
`},
{ id: "x2-sent4", t: "Zdania: co lubię?", d: "Mi piace, mi piacciono – w całych zdaniach.", k: "o", i: `
Mi piace molto la pizza.|Bardzo lubię pizzę.
Mi piacciono i film italiani.|Lubię włoskie filmy.
Non mi piace il caffè amaro.|Nie lubię gorzkiej kawy.
Ti piace ballare?|Lubisz tańczyć?
A mio padre piace il calcio.|Mój tata lubi piłkę nożną.
Le piacciono i fiori.|Ona lubi kwiaty.
Ci piace andare al mare.|Lubimy jeździć nad morze.
Non gli piacciono i ragni.|On nie lubi pająków.
Mi piace leggere la sera.|Lubię czytać wieczorami.
Vi piace la cucina italiana?|Lubicie kuchnię włoską?
Preferisco il tè al caffè.|Wolę herbatę od kawy.
Mi piace molto questa canzone.|Bardzo podoba mi się ta piosenka.
Ai bambini piace il gelato.|Dzieci lubią lody.
Non mi piace alzarmi presto.|Nie lubię wcześnie wstawać.
Mi piacciono gli animali.|Lubię zwierzęta.
Ti piacciono queste scarpe?|Podobają ci się te buty?
Mi piace il mare, ma preferisco la montagna.|Lubię morze, ale wolę góry.
A Giulia piace cantare.|Giulia lubi śpiewać.
Non ci piace il freddo.|Nie lubimy zimna.
Il mio sport preferito è il nuoto.|Mój ulubiony sport to pływanie.
`},
{ id: "x2-pronouns", t: "Zaimki osobowe", d: "Io, tu, lui, lei… i grzecznościowe Lei (= pan / pani).", k: "v", i: `
io|ja
tu|ty
lui|on
lei|ona
Lei|pan / pani (forma grzecznościowa)
noi|my
voi|wy (też: państwo)
loro|oni / one
anch'io|ja też
neanch'io|ja też nie
io e te|ja i ty
con me|ze mną
con te|z tobą
per lui|dla niego
per lei|dla niej
senza di noi|bez nas
da voi|u was
secondo me|moim zdaniem
tocca a te|twoja kolej
tra di noi|między nami
`},
{ id: "x2-adverbs", t: "Przysłówki A1", d: "Qui, lì, sempre, mai, molto, poco…", k: "v", i: `
qui|tutaj
lì|tam
vicino|blisko
lontano|daleko
sempre|zawsze
mai|nigdy
spesso|często
a volte|czasami
adesso|teraz
subito|od razu
presto|wcześnie (też: szybko)
tardi|późno
già|już
ancora|jeszcze
molto|bardzo / dużo
poco|mało
troppo|za dużo / zbyt
abbastanza|wystarczająco (dość)
bene|dobrze
male|źle
insieme|razem
forse|może
anche|też
solo|tylko
di nuovo|znowu
`},
{ id: "x2-phrases", t: "Przydatne zwroty", d: "Non capisco, può ripetere?, quanto costa? – ratunek w każdej sytuacji.", k: "v", i: `
Non capisco.|Nie rozumiem.
Non lo so.|Nie wiem.
Può ripetere, per favore?|Może pan / pani powtórzyć?
Più lentamente, per favore.|Wolniej, proszę.
Come si dice … in italiano?|Jak się mówi … po włosku?
Che cosa significa?|Co to znaczy?
Parla inglese?|Czy mówi pan / pani po angielsku?
Parlo un po' di italiano.|Mówię trochę po włosku.
Quanto costa?|Ile to kosztuje?
Dov'è il bagno?|Gdzie jest toaleta?
Il conto, per favore.|Rachunek, proszę.
Vorrei un caffè.|Poproszę kawę (chciałbym kawę).
Mi può aiutare?|Może mi pan / pani pomóc?
Va bene.|W porządku.
D'accordo.|Zgoda.
Certo!|Oczywiście!
Che peccato!|Jaka szkoda!
Buon appetito!|Smacznego!
Salute!|Na zdrowie! (też po kichnięciu)
Auguri!|Wszystkiego najlepszego!
Buona giornata!|Miłego dnia!
Non importa.|Nie szkodzi.
Aspetta un attimo.|Poczekaj chwilę.
`},
{ id: "x2-feelings", t: "Samopoczucie", d: "Sono stanco, sono contenta… – końcówka -o / -a zależy od osoby, która mówi.", k: "v", i: `
stanco|zmęczony|😩
stanca|zmęczona
contento|zadowolony|😊
contenta|zadowolona
felice|szczęśliwy / szczęśliwa|😄
triste|smutny / smutna|😢
arrabbiato|zły (rozzłoszczony)|😠
nervoso|zdenerwowany
preoccupato|zmartwiony|😟
annoiato|znudzony|🥱
malato|chory|🤒
tranquillo|spokojny
occupato|zajęty
pronto|gotowy
sorpreso|zaskoczony|😮
innamorato|zakochany|😍
Come stai?|Jak się masz?
Sto bene.|Czuję się dobrze.
Sto male.|Czuję się źle.
Così così.|Tak sobie.
Sono stanco morto.|Jestem padnięty.
`}
]);
