# Organizuj varijable u objekte

<img src='images/objekat.jpg' width='400'>

Ukoliko u konfiguracionom delu fajla imate letećih varijabli, struktuirajte ih u objekte. Na primer, ako imate:

```javascript
var robotHeight = 200;
var robotWidth = 300;
var robotSpeed = 20;
```

Povežite ih u jedan objekat:
```javascript
var robot = {
  height: 200,
  width: 300,
  speed: 20
}
```

Osim varijabli, često postoje i funkcije povezane sa objektom, na primer:

```javascript
var changeRobotImage = function() {
  /* function body */
}
var changeRobotSpeed = function() {
  /* function body */
}
```

Moguće je i metode pridružiti objektu, pa umesto razbacanih delova koda dobijamo sledeću strukturu:
```javascript
var robot = {
  height: 200,
  width: 1024,
  speed: 20,
  changeImage: function() {
    /* function body */
  },
  changeSpeed: function() {
    /* function body */
  }
}
```

Napisano nešto modernijom sintaksom, izgleda ovako:

```javascript
const robot = {
  height: 200,
  width: 1024,
  speed: 20,
  changeImage() {
    /* function body */
  },
  changeSpeed() {
    /* function body */
  }
}
```

Ovako organizovan objekat sada možemo [izdvojiti u zaseban fajl](/refaktorisanje/podeli-kod-u-komponente), a veoma lako ga možemo refaktorisati u klasu.
