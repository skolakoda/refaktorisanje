# Svrstaj funkcije u poseban odeljak

Ponovo pretražite fajl i organizujte sve funkcije u poseban odeljak. Ukoliko su funkcije isprepletene i nije jasno ko koga poziva, preporučljivo je koristiti deklaracije funkcija, a ne funkcijske izraze, jer je [razlika presudna](//stackoverflow.com/questions/1013385/what-is-the-difference-between-a-function-expression-vs-declaration-in-javascrip) (u prvom slučaju će raditi usled [dizanja](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting), a u drugom može pući aplikacija). Sada naš odeljak sa funkcijama izgleda ovako:

```javascript
/*** FUNCTIONS ***/

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}

function toDegrees (angle) {
  return angle * (180 / Math.PI);
}

function toRadians (angle) {
  return angle * (Math.PI / 180);
}
```

Tokom ovog procesa, verovatno ćete morati da popravite neke funkcije. Vodite računa da svaka funkcija obavlja jedan zadatak i da ima jasno definisan ulaz i izlaz (ukoliko vraća vrednost). Nemojte da funkcija podrazumeva dostupnost bilo čega, osim onog što joj je izričito prosleđeno. Imajte na umu da kad premestite funkciju u drugi kontekst ona i dalje treba da radi.

<img src='images/funkcija.jpg' width='300'>

Anonimne funkcije za sada ostavite gde jesu, ali neke od njih ćemo kasnije [imenovati](/refaktorisanje/imenuj-anonimne-funkcije).
