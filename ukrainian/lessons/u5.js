/* Lekcje: etap 5 – tryby, zdania względne, czasowniki ruchu, wołacz, fałszywi przyjaciele. */
LESSON({
  id: 'l-ua-cond', stage: 's5', before: 'x5-cond', practice: ['x5-cond', 'x5-sent-cond'],
  t: 'Tryb warunkowy', d: 'Я б допоміг – pomógłbym. Якби, якщо i щоб.',
  body: `
## Czas przeszły + б / би
Bierzemy formę czasu przeszłego i dodajemy cząstkę **б** (po samogłosce) albo **би** (po spółgłosce). Forma jest taka sama dla wszystkich osób.
| polski | ukraiński |
| pomógłbym | я б допоміг / я допоміг би |
| pomogłabyś | ти б допомогла |
| pomoglibyśmy | ми б допомогли |

> Я б випив кави. | Napiłbym się kawy.
> Що б ти зробив на моєму місці? | Co byś zrobił na moim miejscu?

## Якщо, якби, щоб
| słowo | znaczenie | przykład |
| якщо | jeśli (realne) | Якщо буде дощ, ми залишимося вдома. |
| якби | gdyby (nierealne) | Якби я мав час, я б допоміг. |
| щоб | żeby | Я прийшов, щоб допомогти. |

> Якщо хочеш, приходь. | Jeśli chcesz, przyjdź.
> Якби я знав, я б сказав. | Gdybym wiedział, powiedziałbym.
> Мама хоче, щоб я подзвонив. | Mama chce, żebym zadzwonił.

!! Po **щоб**, gdy podmiot jest inny, stoi czas przeszły: **щоб ти прийшов** – żebyś przyszedł.

! Grzeczna prośba: **Чи не могли б ви…?** – Czy mógłby Pan…?
`
}, {
  id: 'l-ua-imper', stage: 's5', before: 'x5-imperative', practice: ['x5-imperative', 'x7-imperative2'],
  t: 'Tryb rozkazujący', d: 'Читай! Пишіть! Ходімо! Хай він прийде.',
  body: `
## Jak tworzyć
| typ tematu | ty | wy / Pan | my (zróbmy) |
| na samogłoskę | читай | читайте | читаймо |
| na spółgłoskę, akcent na końcówce | пиши | пишіть | пишімо |
| na spółgłoskę, akcent na temacie | сядь | сядьте | сядьмо |

> Читай уважно! | Czytaj uważnie!
> Пишіть, будь ласка. | Proszę pisać.
> Ходімо додому. | Chodźmy do domu.
> Не хвилюйся! | Nie martw się!

## Niech: хай / нехай
> Хай він зайде. | Niech on wejdzie.
> Нехай буде так. | Niech tak będzie.

## Zróbmy: давай / давайте
> Давай поговоримо. | Porozmawiajmy.
> Давайте познайомимося. | Poznajmy się.

! **Будь ласка** to dosłownie „bądź łaskaw” – tryb rozkazujący od **бути**. Grzecznie: **будьте ласкаві**.

!! W zakazach zwykle aspekt niedokonany: **Не відчиняй!**, a nie „не відчини”.
`
}, {
  id: 'l-ua-relative', stage: 's5', before: 'x5-relative', practice: ['x5-relative', 'x8-relative2'],
  t: 'Który: який, яка, яке', d: 'Zdania względne i ukraiński sposób na polski imiesłów „czytający”.',
  body: `
## Який odmienia się jak przymiotnik
| rodzaj | forma | przykład |
| męski | який | чоловік, який стоїть там |
| żeński | яка | жінка, яка читає |
| nijaki | яке | місто, яке ми відвідали |
| mnoga | які | діти, які граються |

Przypadek zależy od roli w zdaniu podrzędnym:
> Книжка, яку я читаю, дуже цікава. | Książka, którą czytam, jest bardzo ciekawa.
> Будинок, у якому я живу, старий. | Dom, w którym mieszkam, jest stary.
> Людина, якій я довіряю, – моя мама. | Osoba, której ufam, to moja mama.

## Zamiast polskiego imiesłowu -ący
Ukraiński rzadko używa form typu „czytający”. Zamiast tego: **який + czasownik**.
> Чоловік, який читає газету, – мій тато. | Mężczyzna czytający gazetę to mój tata.

## Też: що, де, куди, чий
> Місто, де я народився. | Miasto, w którym się urodziłem.
> Людина, чиє ім'я всі знають. | Osoba, której imię wszyscy znają.

! W mowie potocznej często słychać **що** zamiast „який”: книжка, що лежить на столі.
`
}, {
  id: 'l-ua-falsefr', stage: 's5', before: 'x5-falsefr1', practice: ['x5-falsefr1', 'x5-falsefr2', 'x8-falsefr3', 'x8-falsefr4'],
  t: 'Fałszywi przyjaciele', d: 'Słowa, które brzmią jak polskie, a znaczą coś innego.',
  body: `
Bliskość języków to wielka pomoc, ale i pułapka. Kilka słów, na które trzeba uważać:

| ukraiński | znaczy | a nie… |
| склеп | grobowiec | sklep (= магазин) |
| дружина | żona | drużyna (= команда) |
| живіт | brzuch | żywot |
| урок | lekcja | urok |
| диня | melon | dynia (= гарбуз) |
| уряд | rząd | urząd (= установа) |
| овочі | warzywa | owoce (= фрукти) |
| дивитися | patrzeć | dziwić się (= дивуватися) |
| вистава | przedstawienie | wystawa (= виставка) |
| статок | majątek | statek (= корабель) |
| чашка | filiżanka | czaszka (= череп) |
| пилка | piłka do drewna | piłka do gry (= м'яч) |
| завод | fabryka | zawód (= професія) |

> Моя дружина – вчителька. | Moja żona jest nauczycielką.
> Ми купили диню. | Kupiliśmy melona.
> Я не можу знайти магазин. | Nie mogę znaleźć sklepu.

! Jeśli ukraińskie słowo brzmi „prawie po polsku”, a zdanie nie ma sensu – sprawdź, czy to nie fałszywy przyjaciel.
`
}, {
  id: 'l-ua-motion', stage: 's5', before: 'x5-motion', practice: ['x5-motion', 'x7-prefix-go', 'x7-motion-fill'],
  t: 'Czasowniki ruchu', d: 'Йти czy ходити? Їхати czy їздити? Dokładnie jak iść / chodzić.',
  body: `
## Dwie formy: teraz w jedną stronę – albo regularnie
| teraz, w jednym kierunku | zwykle, tam i z powrotem | polski |
| йти (іти) | ходити | iść – chodzić |
| їхати | їздити | jechać – jeździć |
| бігти | бігати | biec – biegać |
| летіти | літати | lecieć – latać |
| нести | носити | nieść – nosić |

> Я йду на роботу. | Idę do pracy. (teraz)
> Я щодня ходжу на роботу. | Codziennie chodzę do pracy.
> Ми їдемо до Львова. | Jedziemy do Lwowa.
> Він часто їздить за кордон. | Często jeździ za granicę.

## Pieszo czy czymś?
Tak jak po polsku: **йти** – pieszo, **їхати** – pojazdem.
> Я їду автобусом. | Jadę autobusem.

## Z przedrostkami
Przedrostki działają jak polskie: **прийти** (przyjść), **вийти** (wyjść), **піти** (pójść), **приїхати** (przyjechać), **виїхати** (wyjechać). Więcej w etapie 7.

!! Ukraińskie **ходити** to także „chodzić” w sensie „bywać”: **Я ходжу в спортзал** – chodzę na siłownię.
`
}, {
  id: 'l-ua-vocative', stage: 's5', before: 'x5-phone', practice: ['x5-phone', 'x5-polite'],
  t: 'Wołacz: Олено! Пане Андрію!', d: 'Gdy zwracamy się do kogoś – po ukraińsku dużo częściej niż po polsku.',
  body: `
## Wołacz żyje na co dzień
Po polsku często mówimy „Anna, chodź!”. Po ukraińsku forma wołacza jest normą: **Ганно, ходи сюди!**

| mianownik | wołacz |
| Олена | Олено! |
| Ганна | Ганно! |
| Марія | Маріє! |
| Оля | Олю! |
| Андрій | Андрію! |
| Іван | Іване! |
| Тарас | Тарасе! |
| брат | брате! |
| друг | друже! |
| мама | мамо! |
| пан | пане! |

> Олено, як справи? | Oleno, jak się masz?
> Пане Андрію, дякую! | Panie Andrzeju, dziękuję!
> Друже, допоможи мені. | Przyjacielu, pomóż mi.
> Мамо, я вдома! | Mamo, jestem w domu!

## Pan i pani
**пан** → **пане** + imię w wołaczu: **пане Іване**. **пані** się nie odmienia: **пані Олено**.

! W e-mailach i listach: **Шановний пане Андрію!**, **Шановна пані Олено!**

!! Wołacz po ukraińsku nie brzmi poufale ani ostro. Mówienie „Олена, …” zamiast „Олено, …” brzmi dla Ukraińca nienaturalnie.
`
});
