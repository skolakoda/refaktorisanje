# Refaktorisanje uslova do nestanka

**Nedavno sam u sklopu redovnog pregleda koda naišao na sledeći primer bespotrebnog if/else uslova, čije uklanjanje prilično dobro oslikava vrednost refaktorisanja.**

Primer je dat u programskom jeziku `CoffeeScript`, ali rešenje je opšte primenljivo.

## Originalni if/else uslov

```coffee
if checkAll is false
  checkAll = true
  _.forEach clips, (item) - >
    item.DownloadSelected = true
else
  checkAll = false
  _.forEach clips, (item) - >
    item.DownloadSelected = false
```

Ovde vidimo da oba ishoda imaju zajednički izvršni deo koji je identičan, različita je samo bulova varijabla koja se dodeljuje (true/false). Dakle, kao prvi korak, izvlačimo zajednički deo koda van iz uslova:

## Prvo refaktorisanje

```coffee
if !checkAll
  checkAll = true
else
  checkAll = false

_.forEach clips, (item) - >
  item.DownloadSelected = checkAll
```

Već nakon prvog refaktorisanja kod je znatno kraći i čitljiviji za nas i naše kolege, ali moguće ga je dodatno uprostiti. Sad jasno vidimo da u oba ishoda varijabla obrće samu sebe. U sledećem koraku ćemo to eksplicirati:

## Drugo refaktorisanje

```coffee
checkAll = !checkAll
_.forEach clips, (item) - >
  item.DownloadSelected = checkAll
```

Kao što vidite, if/else uslov je potpuno nestao (magija)! Međutim, ostao je konfuzan naziv varijable checkAll, koja zbog imperativnog gramatičkog oblika zvuči kao funkcija. Potrebno je još i to promeniti kako ne bismo dovodili ljude u zabludu:

## Konačna verzija

```coffee
allChecked = !allChecked
_.forEach clips, (item) - >
  item.DownloadSelected = allChecked
```

Eto, nakon pospremanja, naš kod je postao duplo kraći i čitljiviji! Zato, čistimo uvek svoj kod kao što čistimo kuhinjski sto.

Happy coding :)
