/* Lekcje: etap 4 – czas przeszły i przyszły, aspekt, stopniowanie, narzędnik. */
LESSON({
  id: 'l-ua-past', stage: 's4', before: 'x4-past', practice: ['x4-past', 'gv-pt1', 'x4-sent-past'],
  t: 'Czas przeszły', d: 'Читав, читала, читали – końcówka zależy od rodzaju, nie od osoby.',
  body: `
## Cztery końcówki
| kto | końcówka | читати | бути |
| on (ja, ty – mężczyzna) | -в | читав | був |
| ona (ja, ty – kobieta) | -ла | читала | була |
| ono | -ло | читало | було |
| my, wy, oni | -ли | читали | були |

> Я вчора працював. | Wczoraj pracowałem. (mężczyzna)
> Я вчора працювала. | Wczoraj pracowałam. (kobieta)
> Ми були вдома. | Byliśmy w domu.
> Вона читала книжку. | Czytała książkę.

## Zaimek jest potrzebny
Po polsku osobę pokazuje końcówka: czytał**em**, czytał**aś**. Po ukraińsku forma jest taka sama dla ja, ty i on, więc zwykle dodajemy zaimek:
> Я читав. Ти читав. Він читав. | Czytałem. Czytałeś. Czytał.

## Kilka nieregularnych
| bezokolicznik | on | ona |
| могти (móc) | міг | могла |
| нести (nieść) | ніс | несла |
| іти (iść) | ішов / йшов | ішла / йшла |
| їсти (jeść) | їв | їла |

! Końcówka **-в** brzmi jak polskie **ł**: **був** ≈ „buł”, **читав** ≈ „czytał”. Prawie jak po polsku!
`
}, {
  id: 'l-ua-future', stage: 's4', before: 'x4-future', practice: ['x4-future', 'gv-f-1', 'x4-sent-plans'],
  t: 'Czas przyszły', d: 'Буду читати, читатиму albo прочитаю – trzy sposoby.',
  body: `
## Aspekt niedokonany – dwie równorzędne formy
**1. буду + bezokolicznik** (jak polskie „będę czytać”)
| ja | ty | on / ona | my | wy | oni |
| буду | будеш | буде | будемо | будете | будуть |

**2. forma z -му** – bezokolicznik + końcówka:
| ja | ty | on / ona | my | wy | oni |
| читатиму | читатимеш | читатиме | читатимемо | читатимете | читатимуть |

> Я буду працювати завтра. | Jutro będę pracować.
> Я працюватиму завтра. | Jutro będę pracować.

## Aspekt dokonany – forma „teraźniejsza” = przyszłość
Tak samo jak po polsku: „przeczytam”, „zrobię”.
> Я прочитаю цю книжку. | Przeczytam tę książkę.
> Ми зробимо це завтра. | Zrobimy to jutro.

!! Nie łącz **буду** z czasownikiem dokonanym: „буду прочитати” jest błędem, tak jak po polsku „będę przeczytać”.

! Forma na **-му** jest bardzo ukraińska i brzmi naturalnie – warto jej używać.
`
}, {
  id: 'l-ua-aspect', stage: 's4', before: 'x4-aspect', practice: ['x4-aspect', 'gasp-1', 'gasp-2', 'x7-aspect2'],
  t: 'Aspekt: robić czy zrobić?', d: 'Niedokonany i dokonany działają tak jak w polskim.',
  body: `
## Pary aspektowe
| niedokonany (proces) | dokonany (wynik) | polski |
| робити | зробити | robić – zrobić |
| писати | написати | pisać – napisać |
| читати | прочитати | czytać – przeczytać |
| купувати | купити | kupować – kupić |
| давати | дати | dawać – dać |
| брати | взяти | brać – wziąć |
| говорити | сказати | mówić – powiedzieć |

## Kiedy który?
- **niedokonany**: proces, powtarzanie, „jak długo”: **Я цілий день писав листи.**
- **dokonany**: jednorazowy wynik: **Я написав лист.**

> Я часто купую тут хліб. | Często kupuję tu chleb.
> Я купив хліб. | Kupiłem chleb.
> Він довго шукав ключі. | Długo szukał kluczy.
> Нарешті він знайшов ключі. | W końcu znalazł klucze.

! Polska intuicja prawie zawsze się sprawdza. Gdy po polsku powiedziałbyś „zrobić”, po ukraińsku też użyj aspektu dokonanego.

!! W zakazach zwykle używamy niedokonanego: **Не відчиняй вікно!** – Nie otwieraj okna!
`
}, {
  id: 'l-ua-compare', stage: 's4', before: 'x4-compare', practice: ['x4-compare', 'x4-sent-compare'],
  t: 'Stopniowanie przymiotników', d: 'Новіший, найновіший, старший за мене.',
  body: `
## Stopień wyższy: -іш- albo -ш-
| przymiotnik | wyższy | najwyższy |
| новий | новіший | найновіший |
| цікавий | цікавіший | найцікавіший |
| молодий | молодший | наймолодший |
| дорогий | дорожчий | найдорожчий |
| високий | вищий | найвищий |

## Nieregularne
| przymiotnik | wyższy | najwyższy |
| добрий (dobry) | кращий | найкращий |
| поганий (zły) | гірший | найгірший |
| великий (duży) | більший | найбільший |
| малий (mały) | менший | найменший |

## Porównanie: ніж albo за
> Брат старший, ніж я. | Brat jest starszy niż ja.
> Брат старший за мене. | Brat jest starszy ode mnie.
> Це найкращий ресторан у місті. | To najlepsza restauracja w mieście.

! **Най-** to polskie **naj-**: найкращий = najlepszy. Do długich słów można też dodać **більш / найбільш**: більш цікавий.

!! Po **за** stoi biernik: **старший за мене** (nie „за мені”).
`
}, {
  id: 'l-ua-instr', stage: 's4', before: 'x4-instrumental', practice: ['x4-instrumental'],
  t: 'Narzędnik: kim? czym?', d: 'З мамою, ручкою, працюю лікарем – prawie jak po polsku.',
  body: `
## Końcówki
| rodzaj | końcówka | przykład |
| męski / nijaki twardy | -ом | брат → братом, вікно → вікном |
| męski / nijaki miękki | -ем / -єм | учитель → учителем, море → морем |
| żeński -а | -ою | мама → мамою |
| żeński -я | -ею / -єю | земля → землею |
| żeński na -ь | -ю + podwojenie | сіль → сіллю, ніч → ніччю |

## Kiedy?
- narzędzie: **пишу ручкою** – piszę długopisem
- z kim / z czym: **з мамою, з молоком**
- zawód z czasownikiem: **працюю лікарем, хочу бути вчителем**
- miejsce: **над, під, за, перед, між** + narzędnik

> Я п'ю каву з молоком. | Piję kawę z mlekiem.
> Він працює водієм. | On pracuje jako kierowca.
> Ми гуляли з собакою. | Spacerowaliśmy z psem.
> Кіт спить під столом. | Kot śpi pod stołem.

! Polskie **-ą** (mamą, kawą) to ukraińskie **-ою** (мамою, кавою). Łatwe do zapamiętania!

!! W zdaniu bez czasownika „być” zawód stoi w mianowniku: **Він водій.** Ale **Він працює водієм.**
`
});
