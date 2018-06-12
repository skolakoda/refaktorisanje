# Podeli kod u komponente

![celine stranice](images/komponente.png)

Podelite glavni js fajl u više zasebnih fajlova, nazvanih po logičnim celinama (komponentama) za čiju funkcionalnost su nadležni (npr. `contact.js`, `header.js`, `slider.js`). Na primer, ako se funkcija za slanje formulara koristi samo na kontakt stranici, smestite je tamo. U glavnom fajlu ostavite samo zajedničku funkcionalnost. Nova struktura fajlova će izgledati otprilike ovako:

```
js/
  components/
    header.js
    contact.js
    slider.js
  main.js
```

Podela koda će nam, zajedno sa drugim koracima, pomoći da pređemo na modularnu organizaciju projekta. Fajlove razdvajamo radi lakšeg **razvoja**, odnosno mogućnosti razvoja uopšte, jer taložeći kod u istom fajlu neprestano otežavamo razvoj, sve dok u jednom trenutku ne udarimo u zid. U **produkciji** razdvojene fajlove ponovo spajamo u jedan minifikovan fajl, koristeći neku build alatku (`Grunt`, `Gulp`, `Webpack`).

*Ovaj korak možete preskočiti ukoliko glavni js fajl nema više od dvestotinjak linija.*
