# Uklanjanje ugnježdenih uslova

![](https://upload.wikimedia.org/wikipedia/commons/2/2c/Rock_crusher_gears.jpg)

***Ugnježdeni uslovi su jedna od stvari koje često bespotrebno otežavaju čitljivost našeg koda. Srećom, lako ih se možemo rešiti!***

Ako u kodu imamo više ugnježdenih uslova, nalik ovoj strukturi:

```js
if (years > 13) {
  if (termsAccepted()) {
    if (buttonClicked()) {
      startGame()
    }
  }  
}
```

To se može veoma lako poravnati konjunkcijom, odnosno povezivanjem pomoću `i` operatora (jer uslov unutar uslova znači da oba moraju biti zadovoljeni):

```js
if (years > 13 && termsAccepted() && buttonClicked()) {
  startGame()  
}
```

Nakon toga, ako nam uslov i dalje nije dovoljno čitljiv, možemo primeniti verbalizaciju, odnosno izdvajanje uslova u funkciju jasnog naziva:

```js
function allReady() {
  return years > 13 && termsAccepted() && buttonClicked()
}
```

Na kraju od uslova ostaje samo:

```js
if (allReady()) startGame()
```
