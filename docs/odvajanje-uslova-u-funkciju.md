# Odvajanje uslova u funkciju

<img class="full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Abandoned_concrete_factory_mechanism.jpg/1024px-Abandoned_concrete_factory_mechanism.jpg">

***Logika čini srž naših programa. Isto tako, loša logika čini dobar deo naših grešaka. Zato je veoma bitno da uprostimo svoju logiku, da imamo što pregledniju situaciju moguću.***

Složeni uslovi su teški za čitanje, teški za razumevanje, teški za debagovanje. Uzmimo na primer, relativno proste uslove, kao što su ovi:

```js
if (pageNumber * videosPerPage < totalNumberOfVideos)
  // do something

if (videos[videos.length-1].videoId == videoId)
  // do something
```

Iako ćemo nakon malo zurenja moći da razumemo logiku, ipak ćemo svaki put gubiti neko vreme na tim redovima. Zašto bismo to sebi radili (da ne pominjemo kolege koji prvi put čitaju kod)?

Rešenje je da odvojimo uslovnu logiku u zasebne funkcije, a unutar uslova ostavimo potpuno jasnu situaciju. U tu svrhu ćemo napraviti dve male pomoćne funkcije:

```js
const hasMoreVideos = () =>
  pageNumber * videosPerPage < totalNbOfVideos

const isLastVideo = videoId =>
  videos[videos.length-1].videoId == videoId
```

A potom ih staviti na mesto pređašnjeg uslova:

```js
if (hasMoreVideos())
  // do something

if (isLastVideo (videoId))
  // do something
```

Sada, kad neko čita naš kod, već na prvi pogled će mu biti jasno o čemu se radi, a ako baš želi da se udubljuje, može pogledati pomoćne funkcije. Ako je razlika očigledna na ovako prostom primeru, možete pretpostaviti koliko znači kod složenijih.

Kriterijum za odvajanje uslova je prilično egzaktan - ako se namrštiš dok čitaš neki uslov, vreme je da ga zameniš nečim čitkijim ;)

Srećno refaktorisanje!
