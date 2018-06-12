# Naznači sktrukturu fajla

Komentarima naznačite glavne odeljke, koji se nalaze gotovo unutar svakog fajla. Vaša struktura se može razlikovati, ali korisno je napraviti mini sadržaj na početku kao putokaz:

```javascript
/*** CONFIG ***/

/*** FUNCTIONS ***/

/*** LISTENERS ***/
```

Na vrhu su varijable, koje služe kao konfiguracija. Potom dolaze funkcije, u koje organizujemo naš kod. Neke od opštekorisnih funkcija kasnije možemo odvojiti u poseban fajl (npr. `helpers.js` ili `utils.js`) i organizovati kao modul. Na kraju se nalaze event listeneri, unutar kojih se pozivaju funkcije (izvršni deo koda).

Da biste stekli širu sliku, zamislite gornji deo fajla kao kontrolnu tablu, gde podešavate neke dugmiće, a funkcije kao unutrašnjost mašine. Sve dok radi, unutrašnjost mašine ne treba da vam bude pred očima (zatvorena je u kapsulu, *enkapsulacija*). Tek kad neki deo otkaže, otvarate ga. Tako je i sa funkcijama (modulima). Ne treba sve vreme da vam budu pred očima. Slobodno ih možete odvojiti u posebne fajlove i samo pozivati u glavnom fajlu.

<img src='https://upload.wikimedia.org/wikipedia/commons/0/09/Plc_control_panel.JPG' width='400'>
