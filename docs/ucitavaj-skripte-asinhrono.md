# Učitavaj skripte asinhrono

![asinhrono učitavanje modula](images/asinhrono-ucitavanje.png)

Asinhrono učitavanje skripti je jedino ispravno rešenje koje [Google preporučuje](https://developers.google.com/speed/docs/insights/BlockingJS), jer ne blokira učitavanje ostalih resursa. Skripte se na taj način umesto jedna za drugom, učitavaju istovremeno, ali se izvršavaju bez ikakvog reda, što može biti nezgodno ako su međuzavisne. HTML `<script>` tag ima dva atributa za asinhrono učitavanje:
- `defer` odlaže izvršenje dok se sve skripte ne učitaju, i izvršava ih redom kojim su uključene;
- `async` izvršava skripte kako koja pristiže, nezavisno od redosleda kojim su navedene.

Ukoliko ne želite da ručno regulišete redosled izvršenja skripti, najprostije rešenje je `defer` atribut:

```html
<script src="jquery.js" defer></script>
<script src="slider-plugin.js" defer></script>
<script src="main.js" defer></script>
```

Nedostatak `defer` atributa je što će čekati da sve skripte stignu, da bi bilo koju pokrenuo. Inače, postoje razne biblioteke koje regulišu asinhrono učitavanje skripti, redosled njihovog izvršenja i međuzavisnost.

Alternativni pristup je korišćenje nekog *bundler*-a kao što je [Webpack](https://webpack.js.org/), koji pakuje sve skripte u jedan fajl.

Čestitam, ako ste došli do ovde znači da ste od špageti koda napravili modularnu Javaskript aplikaciju :)
