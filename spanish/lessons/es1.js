/* Lekcje: etapy 1–2 (A1). */
LESSON({
  id: 'l-es-basics', stage: 's1', before: 'pron1', practice: ['pron1'],
  t: 'Jak działa hiszpański?', d: 'Kilka rzeczy, które warto wiedzieć na start.',
  body: `
## Czyta się prawie tak, jak się pisze
Hiszpańska wymowa jest bardzo regularna. Gdy poznasz kilka zasad, przeczytasz każde słowo – nawet takie, którego nie znasz. To ogromna różnica w porównaniu z angielskim.

## Rzeczowniki mają rodzaj
Jest tylko męski i żeński (bez nijakiego). Rodzaj pokazuje rodzajnik: **el** libro (męski), **la** casa (żeński). Ucz się słów razem z rodzajnikiem.

> el libro | książka
> la casa | dom
> el coche | samochód

## Czasownik mówi, kto działa
Jak po polsku: końcówka pokazuje osobę, więc zaimek często pomijamy.
> Hablo español. | Mówię po hiszpańsku.
> ¿Hablas inglés? | Mówisz po angielsku?

## Pytania i wykrzyknienia mają dwa znaki
Na początku zdania stoi znak odwrócony: **¿…?** i **¡…!**
> ¿Cómo estás? | Jak się masz?
> ¡Qué bien! | Jak dobrze!

! Do pisania á, é, ñ, ¿ i ¡ masz w ćwiczeniach specjalny rząd przycisków. Gdy zapomnisz akcentu, aplikacja zaliczy odpowiedź, ale pokaże poprawną pisownię.
`
}, {
  id: 'l-es-pron', stage: 's1', before: 'pron2', practice: ['pron2', 'pron3'],
  t: 'Wymowa: ll, ñ, ch, j, c, z, g, h', d: 'Litery, które czyta się inaczej niż po polsku.',
  body: `
| litera | jak czytamy | przykład |
| ll | j | llave – „jabe” |
| ñ | ń | España – „Españja” |
| ch | cz | noche – „nocze” |
| j | mocne ch | jamón – „chamon” |
| h | nie czytamy! | hola – „ola” |
| qu | k | queso – „keso” |
| v | b | vino – „bino” |
| r na początku, rr | mocne, długie r | perro, radio |

> llave | klucz
> España | Hiszpania
> noche | noc
> hola | cześć

## c, z i g przed e, i
| zapis | wymowa | przykład |
| ca, co, cu | k | casa, cosa |
| ce, ci | jak angielskie th (w Ameryce: s) | cena, cine |
| za, zo, zu | jak angielskie th (w Ameryce: s) | zapato, zumo |
| ga, go, gu | g | gato, gusto |
| ge, gi | mocne ch | gente, gigante |
| gue, gui | g (u nieme) | guerra, guitarra |

> cine | kino
> zapato | but
> gente | ludzie
> guitarra | gitara

! W Ameryce Łacińskiej i na Wyspach Kanaryjskich **c** (przed e, i) i **z** czyta się jak **s**. Obie wymowy są poprawne.
`
}, {
  id: 'l-es-stress', stage: 's1', before: 'greet', practice: ['greet'],
  t: 'Akcent i znak ´', d: 'Gdzie pada akcent i po co jest kreska nad samogłoską.',
  body: `
## Dwie proste reguły
- Słowo kończy się na **samogłoskę, -n lub -s** → akcent na **przedostatniej** sylabie: **ca**sa, **ha**blan, **li**bros (jak po polsku).
- Słowo kończy się na **inną spółgłoskę** → akcent na **ostatniej** sylabie: ha**blar**, ciu**dad**, espa**ñol**.

## Kreska ´ (tilde) pokazuje wyjątek
Gdy akcent pada inaczej, niż mówią reguły, piszemy kreskę: **café**, **árbol**, **música**, **canción**.
> café | kawa
> árbol | drzewo
> música | muzyka
> canción | piosenka

## Kreska zmienia znaczenie
| bez akcentu | z akcentem |
| si – jeśli | sí – tak |
| el – rodzajnik | él – on |
| tu – twój | tú – ty |
| mi – mój | mí – mnie |
| que – że, który | ¿qué? – co? |

!! Kreska to część pisowni. **Papa** (ziemniak w Ameryce, papież) i **papá** (tata) to różne słowa!
`
}, {
  id: 'l-es-gender', stage: 's2', before: 'x2-articles', practice: ['x2-articles', 'gn-g1', 'gn-g2'],
  t: 'Rodzaj i rodzajniki', d: 'El, la, los, las, un, una – i jak poznać rodzaj.',
  body: `
## Rodzajniki
| | męski | żeński |
| określony, l. poj. | **el** libro | **la** casa |
| określony, l. mn. | **los** libros | **las** casas |
| nieokreślony, l. poj. | **un** libro | **una** casa |
| nieokreślony, l. mn. | **unos** libros | **unas** casas |

**El / la** = ten konkretny (wiadomo który). **Un / una** = jakiś, jeden.

## Jak rozpoznać rodzaj
- Na **-o** – zwykle męski: el libro, el perro.
- Na **-a** – zwykle żeński: la casa, la mesa.
- Na **-ción, -sión, -dad, -tad** – zawsze żeński: la canción, la ciudad, la libertad.
- Inne końcówki trzeba zapamiętać: el coche, la noche, el árbol, la flor.

## Ważne wyjątki
| słowo | rodzaj |
| el día (dzień) | męski |
| el problema, el idioma, el tema, el sistema | męski |
| el mapa | męski |
| la mano (ręka) | żeński |
| la foto, la moto, la radio | żeński (skróty) |

> el día | dzień
> el problema | problem
> la mano | ręka

!! **El agua** jest rodzaju żeńskiego. Przed akcentowanym **a-** mówimy **el** dla lepszego brzmienia, ale przymiotnik zostaje żeński: **el agua fría**.
`
}, {
  id: 'l-es-plural', stage: 's2', before: 'gn-p1', practice: ['gn-p1', 'gn-p2'],
  t: 'Liczba mnoga', d: '-s, -es, -ces – i kilka pułapek z akcentem.',
  body: `
| koniec słowa | co dodajemy | przykład |
| samogłoska | + s | casa → casas, coche → coches |
| spółgłoska | + es | ciudad → ciudades, árbol → árboles |
| -z | z → ces | lápiz → lápices, luz → luces |
| -s (bez akcentu na końcu) | bez zmian | el lunes → los lunes |

> la casa, las casas | dom, domy
> la ciudad, las ciudades | miasto, miasta
> el lápiz, los lápices | ołówek, ołówki

## Akcent może się zmienić
Bo zmienia się liczba sylab:
| pojedyncza | mnoga |
| canción | canciones (bez kreski) |
| autobús | autobuses |
| examen | exámenes (z kreską) |
| joven | jóvenes |

## Liczba mnoga męska obejmuje obie płcie
> los padres | rodzice
> los hermanos | rodzeństwo (bracia i siostry)
> los hijos | dzieci

! Rodzajnik w liczbie mnogiej podpowiada rodzaj: **los** – męski, **las** – żeński.
`
}, {
  id: 'l-es-ser', stage: 's2', before: 'x2-ser', practice: ['x2-ser'],
  t: 'Ser – być (kim, jakim)', d: 'Soy, eres, es… Tożsamość, pochodzenie, zawód, cechy.',
  body: `
| osoba | ser |
| yo | **soy** |
| tú | **eres** |
| él / ella / usted | **es** |
| nosotros | **somos** |
| vosotros | **sois** |
| ellos / ellas / ustedes | **son** |

## Kiedy ser?
- kim jesteś: **Soy Ana. Soy estudiante.**
- skąd: **Soy de Polonia.**
- cechy stałe: **Es alto y simpático.**
- data, dzień, godzina: **Hoy es lunes. Son las tres.**
- z czego coś jest, czyje: **Es de madera. Es de mi padre.**

> Soy de Polonia. | Jestem z Polski.
> Mi padre es médico. | Mój tata jest lekarzem.
> La casa es grande. | Dom jest duży.

!! Zawód po **ser** – bez rodzajnika: **Soy profesor**, a nie „soy un profesor”.

! **Usted** (Pan / Pani) odmienia się jak **él / ella**: **¿Usted es español?** – Czy Pan jest Hiszpanem?
`
}, {
  id: 'l-es-estar', stage: 's2', before: 'x2-estar', practice: ['x2-estar', 'x2-serestar'],
  t: 'Estar i ser czy estar?', d: 'Estar – gdzie i w jakim stanie. Największa pułapka hiszpańskiego.',
  body: `
| osoba | estar |
| yo | **estoy** |
| tú | **estás** |
| él / ella / usted | **está** |
| nosotros | **estamos** |
| vosotros | **estáis** |
| ellos / ellas / ustedes | **están** |

## Kiedy estar?
- **gdzie** ktoś lub coś jest: **Estoy en casa. Madrid está en España.**
- **stan, samopoczucie** (zmienne): **Estoy cansado. La sopa está fría.**
- z gerundio (co się teraz dzieje): **Estoy comiendo.**

## Ser czy estar?
| ser – co to jest, jakie zawsze | estar – gdzie, jak się ma teraz |
| Es alto. | Está cansado. |
| Es de Madrid. | Está en Madrid. |
| El hielo es frío. | El café está frío. |
| Es aburrido. (nudny) | Está aburrido. (znudzony) |

> Juan es simpático. | Juan jest sympatyczny.
> Juan está en la oficina. | Juan jest w biurze.
> Hoy estoy muy cansado. | Dziś jestem bardzo zmęczony.

!! Miejsce **wydarzenia** wyraża **ser**: **La fiesta es en mi casa.** Ale miejsce **rzeczy lub osoby** – **estar**: **Mi casa está en el centro.**
`
}, {
  id: 'l-es-tener', stage: 's2', before: 'x2-tener', practice: ['x2-tener', 'x2-hay'],
  t: 'Tener i hay', d: 'Mam, mam lat, jestem głodny – oraz „jest / są”.',
  body: `
## Tener – mieć
| yo | tú | él / ella | nosotros | vosotros | ellos |
| tengo | tienes | tiene | tenemos | tenéis | tienen |

> Tengo dos hermanos. | Mam dwóch braci.
> ¿Tienes coche? | Masz samochód?

## Tener tam, gdzie po polsku „być”
| hiszpański | polski |
| tener … años | mieć … lat |
| tener hambre | być głodnym |
| tener sed | chcieć pić |
| tener frío / calor | jest mi zimno / gorąco |
| tener sueño | chcieć spać |
| tener miedo | bać się |
| tener razón | mieć rację |
| tener prisa | spieszyć się |
| tener que + bezokolicznik | musieć |

> Tengo veinte años. | Mam dwadzieścia lat.
> Tengo que trabajar. | Muszę pracować.

## Hay – jest, są (coś istnieje)
Jedna forma dla liczby pojedynczej i mnogiej.
> Hay un banco cerca. | Niedaleko jest (jakiś) bank.
> Hay muchas personas. | Jest dużo ludzi.

!! **Hay** + rzecz nieokreślona (un, una, liczba, bez rodzajnika). Konkretna rzecz – **está**: **El banco está en la plaza.**
`
}, {
  id: 'l-es-gustar', stage: 's2', before: 'x2-gustar', practice: ['x2-gustar', 'x2-sent4'],
  t: 'Me gusta – lubię', d: 'Dosłownie „podoba mi się”. Czasownik zgadza się z tym, co lubimy.',
  body: `
## Budowa jak w „podoba mi się”
| komu | forma |
| (a mí) | **me** gusta |
| (a ti) | **te** gusta |
| (a él / ella / usted) | **le** gusta |
| (a nosotros) | **nos** gusta |
| (a vosotros) | **os** gusta |
| (a ellos / ustedes) | **les** gusta |

## Gusta czy gustan?
- **gusta** + jedna rzecz albo czasownik: **Me gusta el café. Me gusta bailar.**
- **gustan** + kilka rzeczy: **Me gustan los perros.**

> Me gusta la música. | Lubię muzykę.
> Me gustan los gatos. | Lubię koty.
> ¿Te gusta viajar? | Lubisz podróżować?
> A mi madre le gusta cocinar. | Moja mama lubi gotować.

## Tak samo działają
**encantar** (bardzo się podobać), **interesar**, **doler** (boleć), **importar**:
> Me encanta esta canción. | Uwielbiam tę piosenkę.
> Me duele la cabeza. | Boli mnie głowa.

!! Nie mów „yo gusto”. To zdanie znaczyłoby „ja się podobam”. Zawsze **me gusta**.
`
}, {
  id: 'l-es-poss', stage: 's2', before: 'x2-poss', practice: ['x2-poss'],
  t: 'Mi, tu, su, nuestro', d: 'Zaimki dzierżawcze – i jak powiedzieć „swój”.',
  body: `
| kto | jedna rzecz | wiele rzeczy |
| yo | mi | mis |
| tú | tu | tus |
| él / ella / usted | su | sus |
| nosotros | nuestro / nuestra | nuestros / nuestras |
| vosotros | vuestro / vuestra | vuestros / vuestras |
| ellos / ustedes | su | sus |

> mi hermano | mój brat
> mis hermanos | moi bracia
> nuestra casa | nasz dom

## Su – jego, jej, ich, Pana
Su ma wiele znaczeń, sens wynika z kontekstu.
> Ana y su novio. | Ana i jej chłopak.
> Señor López, ¿es su coche? | Panie López, czy to Pana samochód?

## Zamiast „swój”
Po hiszpańsku nie ma „swój”. Wybieramy zaimek według osoby:
> Vivo con mis padres. | Mieszkam ze swoimi (moimi) rodzicami.
> Ella llama a su madre. | Ona dzwoni do swojej mamy.

! Po **ser** używamy form długich: **Es mío. Es tuyo. Es suyo.** – To moje, twoje, jego.
`
}, {
  id: 'l-es-questions', stage: 's2', before: 'x2-qwords', practice: ['x2-qwords', 'x2-sent3', 'x2-questions'],
  t: 'Pytania', d: '¿Qué? ¿Quién? ¿Dónde? – i jak zadać pytanie.',
  body: `
| hiszpański | polski |
| ¿qué? | co? jaki? |
| ¿quién? / ¿quiénes? | kto? |
| ¿dónde? | gdzie? |
| ¿adónde? | dokąd? |
| ¿de dónde? | skąd? |
| ¿cuándo? | kiedy? |
| ¿cómo? | jak? |
| ¿por qué? | dlaczego? |
| ¿cuánto / cuánta? | ile? (niepoliczalne) |
| ¿cuántos / cuántas? | ile? (policzalne) |
| ¿cuál? / ¿cuáles? | który? |

## Pytania tak / nie – jak po polsku
Wystarczy intonacja i znaki **¿?**
> ¿Tienes hermanos? | Masz rodzeństwo?

## Ze słowem pytającym
> ¿Dónde vives? | Gdzie mieszkasz?
> ¿Cuánto cuesta? | Ile to kosztuje?

!! **¿Por qué?** (dlaczego?) pisze się osobno z akcentem. Odpowiedź **porque** (bo, ponieważ) – razem i bez akcentu.

! Słowa pytające zawsze mają kreskę, także w pytaniach zależnych: **No sé dónde está.** – Nie wiem, gdzie on jest.
`
});
