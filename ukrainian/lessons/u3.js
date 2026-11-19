/* Lekcje: etap 3 – przypadki, kierunek, godziny, liczebnik + rzeczownik. */
LESSON({
  id: 'l-ua-cases', stage: 's3', before: 'x3-shopping', practice: ['x3-locative', 'x3-accusative', 'x3-genitive', 'x3-dative'],
  t: 'Przypadki – mapa', d: 'Ukraiński ma 7 przypadków, tyle samo co polski i z tymi samymi pytaniami.',
  body: `
## To już znasz z polskiego
Rzeczowniki, przymiotniki i zaimki zmieniają końcówki zależnie od roli w zdaniu. Dobra wiadomość: przypadki odpowiadają polskim prawie jeden do jednego.

| polski | pytanie | po ukraińsku | przykład |
| mianownik | хто? що? | називний | Це **мама**. |
| dopełniacz | кого? чого? | родовий | Немає **мами**. |
| celownik | кому? чому? | давальний | Дякую **мамі**. |
| biernik | кого? що? | знахідний | Я бачу **маму**. |
| narzędnik | ким? чим? | орудний | Я з **мамою**. |
| miejscownik | де? на чому? | місцевий | Я у **школі**. |
| wołacz | – | кличний | **Мамо!** |

> Це мама. | To jest mama.
> Я бачу маму. | Widzę mamę.
> Я йду з мамою. | Idę z mamą.
> Мамо, де ключі? | Mamo, gdzie są klucze?

! Najlepsza metoda: zadaj pytanie po polsku. Jeśli po polsku powiesz „widzę **mamę**” (biernik), po ukraińsku też będzie biernik: **бачу маму**.

!! Uwaga na różnice w rekcji: niektóre czasowniki łączą się z innym przypadkiem niż po polsku. Poznasz je w etapie 6.
`
}, {
  id: 'l-ua-loc', stage: 's3', before: 'x3-locative', practice: ['x3-locative', 'x3-where'],
  t: 'Miejscownik: gdzie?', d: 'У школі, на столі, в Києві – zawsze z przyimkiem.',
  body: `
## Końcówki
| słowo | miejscownik |
| стіл (stół) | на столі |
| місто (miasto) | у місті |
| школа (szkoła) | у школі |
| кухня (kuchnia) | на кухні |
| вулиця (ulica) | на вулиці |
| Київ, Львів | у Києві, у Львові |

Najczęstsza końcówka to **-і**. Niektóre męskie mają **-у**: у саду, на мосту.

## Wymiana spółgłosek – jak po polsku
| | | polski |
| рука | у руці | w ręce |
| нога | на нозі | na nodze |
| книга | у книзі | w książce |

> Я живу в Києві. | Mieszkam w Kijowie.
> Ключі на столі. | Klucze są na stole.
> Діти у школі. | Dzieci są w szkole.
> Телефон у сумці. | Telefon jest w torbie.

## w = в albo у
Ukraiński dba o płynność wymowy: po samogłosce zwykle **в**, po spółgłosce **у**.
> Вона в школі. | Ona jest w szkole.
> Брат у школі. | Brat jest w szkole.

! Przyimki z miejscownikiem: **у / в** (w), **на** (na), **по** (po), **при** (przy).
`
}, {
  id: 'l-ua-acc', stage: 's3', before: 'x3-accusative', practice: ['x3-accusative', 'x3-sent-shop'],
  t: 'Biernik: kogo? co?', d: 'Widzę mamę, czytam książkę, znam twojego brata.',
  body: `
## Końcówki
| rodzaj | jak tworzymy | przykład |
| żeński -а | -у | мама → маму, книжка → книжку |
| żeński -я | -ю | земля → землю |
| męski nieżywotny | bez zmian | стіл, телефон |
| męski żywotny | jak dopełniacz | брат → брата, друг → друга |
| nijaki | bez zmian | вікно, море |

Dokładnie jak po polsku: „widzę brat**a**”, ale „widzę stół”.

> Я бачу маму. | Widzę mamę.
> Я читаю книжку. | Czytam książkę.
> Я люблю каву. | Lubię kawę.
> Я знаю твого брата. | Znam twojego brata.
> Я купив телефон. | Kupiłem telefon.

## Biernik po przyimkach
- **на** – dokąd: на роботу, на концерт
- **у / в** – dni tygodnia: у понеділок (w poniedziałek)
- **чекати на** – czekać na: чекаю на автобус
- **про** – o (kimś, czymś): говоримо про тебе

!! „Mówić o kimś” to **говорити про + biernik**: про тебе, про роботу. Nie używaj tu miejscownika jak po polsku.
`
}, {
  id: 'l-ua-gen', stage: 's3', before: 'x3-genitive', practice: ['x3-genitive', 'x2-umene'],
  t: 'Dopełniacz: kogo? czego?', d: 'Nie ma czasu, samochód brata, szklanka wody, z Polski.',
  body: `
## Końcówki w liczbie pojedynczej
| rodzaj | końcówka | przykład |
| męski: osoby, rzeczy konkretne | -а / -я | брат → брата, стіл → стола |
| męski: pojęcia, materiały | -у / -ю | час → часу, цукор → цукру, чай → чаю |
| żeński | -и / -і | мама → мами, земля → землі |
| nijaki | -а / -я | вікно → вікна, море → моря |

Podział **-а / -у** w rodzaju męskim przypomina polski: „brat**a**”, ale „cukr**u**”.

## Kiedy?
- przynależność: **машина брата** – samochód brata
- brak: **немає часу** – nie ma czasu
- ilość: **склянка води**, **багато роботи**
- po przyimkach: **з, до, без, для, біля, після, від, крім**

> Це машина мого брата. | To samochód mojego brata.
> У мене немає часу. | Nie mam czasu.
> Склянку води, будь ласка. | Szklankę wody, proszę.
> Я з Польщі. | Jestem z Polski.
> Каву без цукру. | Kawę bez cukru.

! Przy przeczeniu „nie ma” zawsze dopełniacz – tak samo jak po polsku: nie ma **mamy** → немає **мами**.
`
}, {
  id: 'l-ua-dat', stage: 's3', before: 'x3-dative', practice: ['x3-dative', 'x3-howfeel'],
  t: 'Celownik: komu? czemu?', d: 'Dziękuję wam, podoba mi się, jest mi zimno.',
  body: `
## Końcówki
| rodzaj | końcówka | przykład |
| męski | -ові / -еві albo -у / -ю | братові (брату), учителеві |
| żeński | -і | мамі, сестрі, Олені |
| nijaki | -у / -ю | вікну, морю |

## Zaimki
| ja | ty | on | ona | my | wy | oni |
| мені | тобі | йому | їй | нам | вам | їм |

## Kiedy?
Komuś coś dajemy, mówimy, pomagamy – i w zwrotach o samopoczuciu, wieku i upodobaniach.
> Я дам книжку сестрі. | Dam książkę siostrze.
> Дякую вам. | Dziękuję Państwu.
> Мені подобається Львів. | Podoba mi się Lwów.
> Мені холодно. | Jest mi zimno.
> Братові десять років. | Brat ma dziesięć lat.

!! **Дзвонити / телефонувати** łączy się z celownikiem: **подзвони мамі** – zadzwoń do mamy (nie „до мами”).
`
}, {
  id: 'l-ua-dir', stage: 's3', before: 'x3-direction', practice: ['x3-direction', 'x3-sent-city'],
  t: 'Gdzie? Dokąd? Skąd?', d: 'Trzy pytania, trzy różne przyimki i przypadki.',
  body: `
| | де? (gdzie) | куди? (dokąd) | звідки? (skąd) |
| szkoła | у школі | до школи | зі школи |
| praca | на роботі | на роботу | з роботи |
| Kijów | у Києві | до Києва | з Києва |
| lekarz | у лікаря | до лікаря | від лікаря |
| dom | вдома | додому | з дому |

## Reguły
- **де?** – miejscownik z у / на: у школі, на роботі
- **куди?** – **до** + dopełniacz (szczególnie miasta i ludzie) albo **на** + biernik (wydarzenia, „otwarte” miejsca): до Києва, до лікаря, на роботу, на концерт
- **звідки?** – **з / із / зі** + dopełniacz; od osoby – **від**

> Я йду до лікаря. | Idę do lekarza.
> Ми їдемо до Львова. | Jedziemy do Lwowa.
> Я йду на роботу. | Idę do pracy.
> Він повертається з роботи. | On wraca z pracy.

!! „Do pracy” to **на роботу**, a „w pracy” – **на роботі**. Tak samo: на пошту, на вокзал, на концерт.

! „Do domu” to jedno słowo: **додому**. „W domu” – **вдома** (albo **удома**).
`
}, {
  id: 'l-ua-time', stage: 's3', before: 'gtime-1', practice: ['gtime-1', 'gtime-2', 'gord-1'],
  t: 'Która godzina?', d: 'Godziny liczy się liczebnikami porządkowymi, jak po polsku.',
  body: `
## Pełne godziny
> Котра година? | Która godzina?
> Третя година. | Jest trzecia.
> О котрій? | O której?
> О п'ятій. | O piątej.

## Pół i kwadranse
| zegar | po ukraińsku | po polsku |
| 3:30 | пів на четверту | wpół do czwartej |
| 3:15 | чверть на четверту | kwadrans po trzeciej |
| 3:45 | за чверть четверта | za kwadrans czwarta |
| 3:10 | десять хвилин на четверту | dziesięć po trzeciej |
| 3:50 | за десять хвилин четверта | za dziesięć czwarta |

> Зараз пів на восьму. | Jest wpół do ósmej.
> Зустрінемося о шостій. | Spotkajmy się o szóstej.

!! Pułapka: „… **на** четверту” liczy minuty **do następnej godziny**: **чверть на четверту** to 3:15, a nie 4:15.

! W rozkładach jazdy i w pracy często mówi się prościej: **о чотирнадцятій тридцять** – o 14:30.
`
}, {
  id: 'l-ua-counted', stage: 's3', before: 'gcnt-1', practice: ['gcnt-1', 'gcnt-2', 'x5-numnouns'],
  t: 'Liczebnik + rzeczownik', d: 'Одна гривня, дві гривні, п\'ять гривень – po liczebniku zmienia się końcówka.',
  body: `
## Trzy formy
| liczba | forma rzeczownika | przykład |
| 1, 21, 31… | mianownik l. poj. | одна гривня, один рік |
| 2–4, 22–24… | mianownik l. mn. | дві гривні, три роки |
| 5–20, 25–30… | dopełniacz l. mn. | п'ять гривень, десять років |

Decyduje **ostatnia cyfra**, a liczby **11–14** zawsze biorą dopełniacz: одинадцять гривень.

> одна гривня | jedna hrywna
> дві гривні | dwie hrywny
> п'ять гривень | pięć hrywien
> двадцять одна гривня | dwadzieścia jeden hrywien
> двадцять два роки | dwadzieścia dwa lata

!! Różnica z polskim: po 21, 31… Ukraińcy mówią liczbę pojedynczą (**двадцять один рік**), a Polacy dopełniacz („dwadzieścia jeden lat”).

! **Кілька, багато, мало** też łączą się z dopełniaczem l. mn.: кілька людей, багато студентів.
`
});
