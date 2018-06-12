# Logički zakoni za programere

***Logika je nauka za sebe, ali postoji nekoliko logičkih zakona koji nam mogu olakšati život, prilikom pisanja složenih uslova.***

![Formalna logika](https://www.antikvarijat-phoenix.com/pic_nas/0051249.jpg)

## Oznake

Logičke oznake nisu iste za sve programskej jezike. Ovo je konvencija za C-like jezike:

- i (`&&`)
- ili (`||`)
- ne (`!`)

## Zakon asocijacije

Zakon asocijacije kaže da zagrade nisu bitne, kada povezujemo logičke iskaze istim operatorom. Ovo važi za konjunkciju:

```
p && (q && r) == (p && q) && r
```

I za disjunkciju:

```
p || (q || r) == (p || q) || r
```

Analogiju možemo naći u matematici, kod operacija množenja ili sabiranja, koje su *asocijativne*, za razliku od deljenja i oduzimanja. Npr:

```
4 + (5 + 6) == (4 + 5) + 6
```

## Zakoni distribucije

Zakoni distribucije definišu razlaganje složenih izraza, i mogu poslužiti razlaganju uslova. Prvi zakon distribucije izgleda ovako:

```
p && (q || r) == (p && q) || (p && r)
```

Drugi zakon distribucije izgleda ovako:

```
p || (q && r) == (p || q) && (p || r)
```

Ovi zakoni se oslanjaju na svojstvo *distributivnosti*, koje postoji u algebri:

```
a * (b + c) == (a * b) + (a * c)
```

## De Morganovi zakoni

De Morganovi zakoni su veoma primenjivi u refaktorisanju uslova. Oni zapravo predstavljaju, simboličkim jezikom izraženu, definiciju konjunkcije i disjunkcije:

```
!(p && q) == !p || !q
!(p || q) == !p && !q
```

- `p i q` je lažno ako je bar jedna promenljiva lažna;
- `p ili q` je lažno ako su obe promenljive lažne;

## Primena u kodu

U kodu bi primena prvog De Morganovog zakona izgledala ovako:

```js
!(punoletan && prihvatioUslove)
```

je identično sa:

```js
!punoletan || !prihvatioUslove
```

Dok drugi De Morganov zakon u kodu:

```js
!(punoletan || prihvatioUslove)
```

refaktorisanjem postaje:

```js
!punoletan && !prihvatioUslove
```

## Zaključak

Programeri su često skloni improvizaciji kada rade sa složenim uslovima, što u nekim slučajevima može biti kobno. Bolje je osloniti se na zakone logike i uštedeti posao testerskom (QA) odeljenju.


Literatura: dr Milan Kovačević, *Formalna logika*, Novi Sad, 1980.
