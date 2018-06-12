# Pretvori skripte u module

Kada u svakom fajlu imamo globalne varijable, to žestoko zagađuje globalni prostor. Ukoliko promenljiva istog naziva postoji u još nekom fajlu ili biblioteci koju koristimo, doćiće do kolizije i pucanja programa.

## Zatvaranje u opseg funkcije

Pre ES6 modula, problem zagađenja globalnog imenskog prostora se rešavao zatvaranjem (*[closure](https://developer.mozilla.org/en/docs/Web/JavaScript/Closures)*) fajla u [samoizvršnu anonimnu funkciju](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression):

```javascript
(function() {

  /*** CONFIG ***/

  var MAX_SPEED = 256;
  var currentSpeed = 0;

  /*** FUNCTIONS ***/

  function toDegrees (angle) {
    return angle * (180 / Math.PI);
  }

  function toRadians (angle) {
    return angle * (Math.PI / 180);
  }

  /*** LISTENERS ***/

  $(window).resize(function() {
    resizeThePage();
  });

  $(document).on('click', '.should-hide', function(){
    $(this).hide();
  });

})();
```

Zagrade oko funkcije znače da je ona anonimna, a zagrade nakon funkcije da se odmah poziva. Varijable više nisu dostupne globalno, jer su zatvorene u opseg funkcije. Ukoliko zatvorena funkcija ima neku spoljašnju zavisnost (npr. jQuery), onda to eksplicirajte prosleđivanjem varijable:

```javascript
(function($) {

  // jQuery objekat je unutra dostupan pod alijasom $

})(jQuery);
```

Anonimnoj funkciji prosleđujemo globalnu `jQuery` varijablu, koju ona prima pod alijasom `$`. Globalna varijabla će naravno biti dostupna i ako je ne prosledimo, ali ovako ekspliciramo zavisnost u slučaju da promenimo okruženje.

## Izvoz iz modula

<img src='images/closure.png' width='400'>

Ukoliko želimo da nešto iz unutrašnjosti postane dostupno, moramo dodeliti samoizvršnu anonimnu funkciju konstanti, koja postaje naš prvi Javascript modul. Iz funkcije [vraćamo](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/return) objekat sa metodama koje postaju javne. Ova tehnika je poznat kao **modul obrazac** (*module pattern*):

```javascript
const mathModule = (function() {

  /*** PRIVATNO ***/

  const MAX_SPEED = 256;
  let currentSpeed = 0;

  function toDegrees (angle) {
    return angle * (180 / Math.PI);
  }

  function toRadians (angle) {
    return angle * (Math.PI / 180);
  }

  function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }

  /*** JAVNO ***/

  return {
    toDegrees: toDegrees,
    toRadians: toRadians
  };
})();
```

Ako koristimo skraćenu sintasku, vraćanje objekta sa metoda izgleda ovako:

```js
return {
  toDegrees,
  toRadians
}
```

Dve javne metode koje smo izvezli sada su dostupne u `mathModule` imenskom prostoru i možemo ih koristiti na sledeći način: `mathModule.toDegrees(45)`. Treća funkcija `toCelsius()`, koju nismo izvezli, ostaje privatna.

ES6 moduli podrazumevano imaju zatvoren opseg i kod njih primena ove tehnike nije potrebna.
