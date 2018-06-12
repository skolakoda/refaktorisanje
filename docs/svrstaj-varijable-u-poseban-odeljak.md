# Svrstaj varijable u poseban odeljak

Pretražite čitav fajl (ključna reč `var` ako je stari Javaskript) i gde god nađete varijablu u globalnom prostoru, premestite je u uvodnu sekciju. Izuzetak su varijable koje zavise od učitavanja DOM-a (uglavnom selektori), njih smestite unutar `document ready` događaja.

Ukoliko primetite da neka varijabla ne treba da budu globalna nego lokalna, smestite je u odgovarajući opseg. Ukoliko vidite da se neka varijabla zapravo koristi kao konstanta, promenite `var` u `const` (pre uvođenja konstanti u jezik to se naznačavalo `VELIKIM_SLOVIMA` u nazivu).

Ukoliko nađete [anonimni parametarski objekat](/refaktorisanje/imenuj-anonimne-objekte), koji se prosleđuje funkciji, imenujte ga i premestite u uvodni odeljak. Tako ćemo imati sve konfiguracije na jednom mestu. Sada naš uvodni odeljak izgleda otprilike ovako:

```js
/*** CONFIG ***/

var title = 'Refaktorišemo jQuery';
var MAX_SPEED = 256;
var currentSpeed = 0;
var $table; // samo proglašavamo, a vrednost dodajemo kasnije kada DOM bude spreman
```

Prevedeno u noviji JS to bi izgledalo ovako:

```js
/*** CONFIG ***/

const title = 'Refaktorišemo jQuery';
const maxSpeed = 256;
let currentSpeed = 0;
let $table;
```

Kada stare varijable prevedemo u `let` i `const`, još lakše vidimo šta se dešava u programu. Naime, znamo da se samo dve vrednosti menjaju, a druge dve će ostati nepromenjene.
