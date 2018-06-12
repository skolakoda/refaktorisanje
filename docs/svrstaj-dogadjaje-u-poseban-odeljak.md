# Svrstaj događaje u poseban odeljak

Događaji su deo aplikacije u kome se glavna logika odvija. U jQuery-u, `document ready` je osnovni slušač događaja, koji se okida tek kada je HTML fajl učitan (bez slika, zvukova, skripti i svega ostalog što se učitava naknadno). On nam jemči da će u trenutku izvršenja koda biti prisutni svi DOM elementi.

Ostali slušači događaja obično idu unutar njega. Ako ih ostavimo izvan, rizikujemo da element koji ciljamo još nije prisutan. Samo listeneri koji se kače na globalne objekte (`document` ili `window`) mogu biti izvan, jer ne zavise od učitavanja strane. Odeljak sa event listenerima sada izgleda otprilike ovako:


```javascript
/*** LISTENERS ***/

$(document).ready(function() {

  $table = $('#table');

  $('.should-hide').click(function(){
    $(this).hide();
  });

  $('.book-description').click(function() {
    $('.book').fadeIn('slow');
  });

});

$(window).resize(function() {
  resizeThePage();
});
```

<img src='images/slusac-dogadjaja.png' width='600'>

Međutim, ukoliko sve trpamo u `document ready`, Javascript fajl će brzo postati jedno veliko *jQuery crevo*. Još gore, neće raditi događaji za elemente koje dinamički ubacimo u DOM, tokom izvršenja programa. Ako, na primer, vežemo klik za klasu `.should-hide`, koja trenutno nije u HTML-u, nakon što klasa bude dodata u DOM, klik neće raditi:

```javascript
$(document).ready(function() {

  $('.should-hide').on('click', function() {
    $(this).hide();
  });

});
```

Srećom, postoji standardno rešenje. Ako vežemo klik za globalni `document` objekat, koji je dostupan sve vreme, kad on bude kliknut, delegiraće klik potčinjenoj klasi ukoliko se ona u međuvremenu pojavi:

```javascript
$(document).on('click', '.should-hide', function(){
  $(this).hide();
});
```

Između ova dva načina organizacije, treba koristiti drugo rešenje jer time izbegavamo pucanje programa, kao i stepeničastu strukturu koda. Odeljak sa slušačima događaja na kraju treba da izgleda otprilike ovako:

```javascript
/*** LISTENERS ***/

$(document).ready(function() {
  $table = $('#table');
});

$(window).resize(function() {
  resizeThePage();
});

$(document).on('click', '.should-hide', function(){
  $(this).hide();
});

$(document).on('click', '.book-description', function(){
  $('.book').fadeIn('slow');
});
```
