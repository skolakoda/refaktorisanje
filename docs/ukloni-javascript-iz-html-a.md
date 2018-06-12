# Ukloni JavaScript iz HTML-a

<img src='images/spaghetti-code.jpg' width='300'>

Akademska zajednica [preporučuje](//www.ece.ubc.ca/~amesbah/docs/scam13.pdf) da se u web aplikacijama potpuno odvoje `JS`, `HTML` i `CSS`. HTML služi za strukturu, CSS za stilizovanje, a JavaScript za funkcionalnost, što je princip poznat kao [razdvajanje briga](https://en.wikipedia.org/wiki/Separation_of_concerns) (ovo se ne odnosi na frejmvorke, kao što su Angular ili React, koji imaju drugačiju arhitekturu).

Nažalost, developeri često stavljaju JS u HTML, što negativno utiče na razumevanje, održavanje i debagovanje programa. To je razumljivo, jer mnogi popularni resursi za učenje šire ovu [lošu praksu](https://www.w3schools.com/js/js_htmldom_events.asp).

## Ukloni `script` tagove

Verovatno ste često viđali male pomoćne skripte koje nešto rade na HTML stranici:

```html
<script>
  $(document).ready(initPage);
  doThis();
  dontDoThat();
</script>
```

Za početak, uklonite sav Javaskript iz HTML-a u posebne fajlove, nazvane po stranicama sa kojih su uklonjeni (npr. `contact.js` ili `products.js`) i učitajte ih regularnim putem.

## Ukloni `inline` događaje

Pored velikih JS blokova unutar `script` tagova, često nalazimo i manje updaljive *inline* JS događaje:

```html
<div onclick='showMore()'>Show more!</a>
```

Umesto poziva funkcije u HTML-u, stavite `id` ili klasu koju će vaš Javaskript ciljati. Pošto osnovna namena te klase nije stilizovanje, eksplicirajte to u njenom nazivu. Možete koristiti bilo koju konvenciju, a uobičajen je prefiks `js-`:

```html
<div class='js-show-more'>Show more!</a>
```

Nakon toga u js fajl dodajemo klik događaj:

```javascript
$('.js-show-more').click(showMore);
```

## Šta dobijamo?

Uklanjanje Javascripta iz HTML-a će nam omogućiti:

- da imamo svu funkcionalnost na jednom mestu
- da ne mešamo više jezika u jednom fajlu
- da koristimo statičku analizu (linter)
- da asinhrono učitavamo skripte
- da postepeno pređemo na modularnu arhitekturu
