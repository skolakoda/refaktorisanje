# Imenuj anonimne objekte

![](https://d5wt70d4gnm1t.cloudfront.net/media/a-s/artworks/mikkel-johnsen/29546-762012198748/mikkel-johnsen-anonymous-object-5-1-800x800.jpg)

Naša skripta za slanje formulara ima jedan anonimni parametarski objekat, koji nije toliko upadljiv:

```javascript
function formSubmit (e) {
  var name = document.querySelector('input').value
  request({
    uri: 'http://example.com/upload',
    body: name,
    method: 'POST'
  }, postResponse)
}
```

Možemo ga izdvojiti i staviti u uvodni odeljak sa ostalim konfiguracijama:

```javascript
const postParams = {
  uri: 'http://example.com/upload',
  body: document.querySelector('input').value,
  method: 'POST'
}
```

Izdvajanje konfiguracionih objekata nije uvek neophodno, ali ima smisla ukoliko ćemo ih povremeno menjati.

## Integracija kopiranog koda

Na primer, kada preuzimamo `plugin` za slajder, često nam ponude da prekopiramo parče koda poput ovog:

```javascript
$(window).load(function() {
    $('#flexslider1').flexslider({
    easing: "swing",  
    animation: "fade",
    slideshowSpeed: 7000,
    animationSpeed: 600,
    startAt: 0,
    controlNav: true,
    pausePlay: true,
    pauseText: 'Pause',
    playText: 'Play'
  });
});
```

U ovih nekoliko linija se zapravo mnogo toga dešava. Imamo slušač događaja, parametarski objekat, jQuery selektor i poziv metode. Hajde da parametre slajdera pomerimo među ostale konfiguracije na "kontrolnoj tabli":

```javascript
const sliderParams = {
  easing: "swing",  
  animation: "fade",
  slideshowSpeed: 7000,
  animationSpeed: 600,
  startAt: 0,
  controlNav: true,
  pausePlay: true,
  pauseText: 'Pause',
  playText: 'Play'
}
```

Ako želimo da promenimo dužinu animacije, sada to radimo na početku fajla, a izvršni deo koda stavljamo među događaje (metoda `flexslider` kreće nakon što se sve učita):

```javascript
$(window).load(function() {
  $('#flexslider1').flexslider(sliderParams);
});
```

Ukoliko već imamo `onload` događaj, slajder dodajemo među ostale funkcije:

```javascript
$(window).load(function() {
  hideIntro();
  showImages();
  $('#flexslider1').flexslider(sliderParams);
});
```

Ovako smo umesto pukog kopi-pejstovanja, preuzeti kod prilagodili strukturi našeg projekta.
