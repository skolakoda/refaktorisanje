var sirina_broj = screen.width;
	var sirina = 2;
if(sirina_broj > 399) sirina = 3;
if(sirina_broj > 699) sirina = 4;
var logo_sir;
var menux_sir = "";
if(sirina == 2) {
	menux_sir = "24%";
} else {
	menux_sir = "12%";
}

logo_sir = (sirina * 20) + "px";

var pokusaji_rezerv=0;
var g_dd = 17;
var g_mm = 6;
var g_yy = 2016;
var g_akcija = 1;
var g_datum_unix = 0;
var g_scen_id = 14;
var g_id_dogadjaja = 0;
var g_id_predstave = 0;
var g_korisnik_ime = "";
var g_korisnik_prezime = "";
var g_korisnik_email = "";
var g_korisnik_ident = 0;
var g_korisnik_ident_proces = 0;
var g_korisnik_clbroj = 0;
var g_korisnik_tel = "";
var ucitan_predst_info = 1;// !!!
var g_obj_naziv = "xxx";
var g_rezervacija_okoncana = 0;
var g_verz = 0;

var g_rep_id = [];
var g_rep_predst_id = [];
var g_rep_hh = [];
var g_rep_mm = [];
var g_rep_c1 = [];
var g_rep_c2 = [];
var g_rep_c3 = [];
var g_rep_predst_naziv = [];
var g_rep_scen_id = [];
var g_rep_scena_naziv_kuce = [];
var g_rep_scena_naziv_scene = [];
var g_rep_scena_skr_kuca = [];
var g_rep_scena_skr_scena = [];
var g_rep_datum_unix = [];

var idovi = [];
var tipovi = [];
var klipovi = [];
var idovi2 = [];
var idovi3 = [];
var idovi33 = [];
var idovi77 = [];
var idovi4 = [];
var idovi5 = [];
var idovi7 = [];
var ktgr = [];
var ktgr2 = [];
var ktgr4 = [];
var ktgr33 = [];
var ktgr77 = [];
var ktgr7 = [];
var dgdj7_info = 0;
var txtid = [];
var txttekst = [];
var txtautor = [];
var txtdelo = [];
var txtverzija = [];
var txtstrana = [];
var txtvrsta = [];
var niz_txt = [];

idovi.push('101983' *1);
ktgr.push('1' *1);
idovi.push('101800' *1);
ktgr.push('1' *1);
idovi.push('101932' *1);
ktgr.push('1' *1);
idovi.push('101965' *1);
ktgr.push('1' *1<);
idovi.push('101801' *1);
ktgr.push('1' *1);
idovi.push('101966' *1);
ktgr.push('1' *2);
idovi.push('101802' *1);
ktgr.push('1' *1);
idovi.push('101934' *1);
ktgr.push('1' *1);
idovi.push('101967' *1);
ktgr.push('1' *2);
idovi.push('101985' *1);
ktgr.push('1' *1);
idovi.push('101803' *1);
ktgr.push('1' *1);
idovi.push('101935' *1);
ktgr.push('1' *1);
idovi.push('101968' *1);
ktgr.push('1' *2);
idovi.push('101986' *1);
ktgr.push('1' *1);
idovi.push('101936' *1);
ktgr.push('1' *1);
idovi.push('101782' *1);
ktgr.push('1' *1);
idovi.push('101815' *1);
ktgr.push('1' *1);
idovi.push('101987' *1);
ktgr.push('1' *1);
idovi.push('101804' *1);
ktgr.push('1' *1);
idovi.push('101937' *1);
ktgr.push('1' *1);
idovi.push('102122' *1);
ktgr.push('1' *1);
idovi.push('102123' *1);
ktgr.push('1' *1);

idovi33.push('101983' *1);
ktgr33.push('1' *1);
idovi33.push('101829' *1);
ktgr33.push('1' *1);
idovi33.push('101965' *1);
ktgr33.push('1' *1);
idovi33.push('101801' *1);
ktgr33.push('1' *1);
idovi33.push('101813' *1);
ktgr33.push('1' *1);
idovi33.push('101844' *1);
ktgr33.push('1' *1);
idovi33.push('101966' *1);
ktgr33.push('1' *2);
idovi33.push('101984' *1);
ktgr33.push('1' *1);
idovi33.push('101845' *1);
ktgr33.push('1' *1);
idovi33.push('101781' *1);
ktgr33.push('1' *1);
idovi33.push('101867' *1);
ktgr33.push('1' *1);
idovi33.push('101968' *1);
ktgr33.push('1' *1);
idovi33.push('101986' *1);
ktgr33.push('1' *1);
idovi33.push('101815' *1);
ktgr33.push('1' *1);
idovi33.push('102016' *1);
ktgr33.push('1' *1);
idovi33.push('101847' *1);
ktgr33.push('1' *1);
idovi33.push('101987' *1);
ktgr33.push('1' *1);
idovi33.push('101783' *1);
ktgr33.push('1' *1);
idovi33.push('101869' *1);
ktgr33.push('1' *1);
idovi33.push('101848' *1);
ktgr33.push('1' *1);
idovi33.push('101973' *1);
ktgr33.push('1' *1);
idovi33.push('102147' *1);
ktgr33.push('1' *1);
idovi33.push('102150' *1);
ktgr33.push('1' *1);
idovi33.push('102090' *1);
ktgr33.push('1' *1);
idovi33.push('101972' *1);
ktgr33.push('1' *1);
idovi33.push('102171' *1);
ktgr33.push('1' *1);
idovi33.push('102042' *1);
ktgr33.push('1' *1);

idovi77.push('101802' *1);
ktgr77.push('1' *1);
idovi77.push('101785' *1);
ktgr77.push('1' *1);
idovi77.push('101967' *1);
ktgr77.push('1' *2);
idovi77.push('101935' *1);
ktgr77.push('1' *1);
idovi77.push('101846' *1);
ktgr77.push('1' *1);
idovi77.push('102016' *1);
ktgr77.push('1' *1);
idovi77.push('101936' *1);
ktgr77.push('1' *1);
idovi77.push('101782' *1);
ktgr77.push('1' *1);
idovi77.push('101937' *1);
ktgr77.push('1' *1);
idovi77.push('102122' *1);
ktgr77.push('1' *1);
idovi77.push('102123' *1);
ktgr77.push('1' *1);
idovi77.push('102124' *1);
ktgr77.push('1' *1);
idovi77.push('102070' *1);
ktgr77.push('1' *1);
idovi77.push('102090' *1);
ktgr77.push('1' *1);
idovi77.push('102126' *1);
ktgr77.push('1' *1);
idovi77.push('102052' *1);
ktgr77.push('1' *1);
idovi77.push('102071' *1);
ktgr77.push('1' *1);
idovi77.push('102151' *1);
ktgr77.push('1' *1);
idovi77.push('102127' *1);
ktgr77.push('1' *1);
idovi77.push('102128' *1);
ktgr77.push('1' *1);
idovi77.push('102042' *1);
ktgr77.push('1' *1);

function prvo() {
	var prefiks = "&nbsp;&nbsp;&nbsp;&nbsp;";
	tipovi.push(prefiks + "novo! urnebesna komedija &#381;or&#382;a Fejdoa HOTEL SLOBODAN PROMET u Jugoslovenskom dramskom, sa Draganom Jovanovi&#263;em, &#272;uri&#269;kom, Nata&#353;om Tapu&#353;kovi&#263; i An&#273;elikom Simi&#263; u glavnim ulogama!");
	tipovi.push(prefiks + "tip: karte se rezervi&#353;u klikom na dugme sa naslovom i cenom");
	tipovi.push(prefiks + "novo! Danilo Ki&#353;: ELEKTRA u Narodnom pozori&#353;tu! U naslovnoj ulozi Nada &#352;argin");
	tipovi.push(prefiks + "tip: karte se rezervi&#353;u klikom na dugme sa naslovom i cenom");
	tipovi.push(prefiks + "tip: prva se prika&#382;e strana sa najpovoljnijom dnevnom ponudom; imate tako&#273;e dugme za uredni&#269;ke preporuke i za komedije");
	tipovi.push(prefiks + "tip: na po&#269;etnu stranu uvek se mo&#382;ete vratiti klikom na naslov 'klub ljubitelja pozori&#353;ta'");
	tipovi.push(prefiks + "tip: klikom na dugme 'repertoari' otvori&#263;ete spisak pozori&#353;ta i scena; kad izaberete scenu, treba da zatvorite pop-up sa spiskom scena");
	tipovi.push(prefiks + "tip: za rezervaciju karata neophodan je &#269;lanski broj");
	tipovi.push(prefiks + "niste u&#269;lanjeni? otvorite '&#269;lanstvo, rezervacije', kliknite na 'obrazac za u&#269;lanjenje' i popunite formular; &#269;lanski broj dobijate ODMAH");
	tipovi.push(prefiks + "zaboravili ste svoj &#269;lanski broj? otvorite '&#269;lanstvo, rezervacije', unesite svoju e-mail adresu, i &#269;lanski broj bi&#263;e poslat na nju");
	tipovi.push(prefiks + "klik na dugme u gornjem desnom uglu (crvene ili zelene boje, zavisno od perioda), otvori&#263;e slu&#269;ajne ise&#269;ke iz umetnosti – na slede&#263;i prelazite klikom ili strelicom");
	tipovi.push(prefiks + "kad namestite mi&#353;a na narand&#382;astu rubnu liniju krajnje desno, otvori&#263;e se meni za opere, balete i komedije");

	var broj_tipova = tipovi.length;
	var akt_tip = tipovi[Math.floor(broj_tipova * Math.random())];
	document.getElementById("ptitl").innerHTML = akt_tip;

}

var prviput = 0;


function drugo() {
	var auto_m = "";
	klipovi.push("http://pozorista.net/m/dk02.mp3");
	klipovi.push("http://pozorista.net/m/dk01.mp3");
	klipovi.push("http://pozorista.net/m/dk03.mp3");
	klipovi.push("http://pozorista.net/m/al01.mp3");
	klipovi.push("http://pozorista.net/m/mn01.mp3");
	klipovi.push("http://pozorista.net/m/mz02.mp3");
	klipovi.push("http://pozorista.net/m/mz_488_02.mp3");
	klipovi.push("http://pozorista.net/m/mz_626_08.mp3");
	klipovi.push("http://pozorista.net/m/mz_550_01.mp3");
	klipovi.push("http://pozorista.net/m/mz_581.mp3");
	klipovi.push("http://pozorista.net/m/bell01.mp3");
	klipovi.push("http://pozorista.net/m/bm02.mp3");
	klipovi.push("http://pozorista.net/m/of01.mp3");
	klipovi.push("http://pozorista.net/m/og01.mp3");
	klipovi.push("http://pozorista.net/m/pa01.mp3");
	klipovi.push("http://pozorista.net/m/pg02.mp3");
	klipovi.push("http://pozorista.net/m/pu01.mp3");
	klipovi.push("http://pozorista.net/m/pu02.mp3");
	klipovi.push("http://pozorista.net/m/pu04.mp3");
	klipovi.push("http://pozorista.net/m/bm04.mp3");
	klipovi.push("http://pozorista.net/m/rh04.mp3");
	klipovi.push("http://pozorista.net/m/db01.mp3");
	klipovi.push("http://pozorista.net/m/liszt01.mp3");
	klipovi.push("http://pozorista.net/m/PonchielliSuicidio.mp3");
	klipovi.push("http://pozorista.net/m/franck12.mp3");
	klipovi.push("http://pozorista.net/m/grieg01.mp3");
	klipovi.push("http://pozorista.net/m/srst_zig.mp3");
	klipovi.push("http://pozorista.net/m/02_079_02.mp3");
	klipovi.push("http://pozorista.net/m/02_084.mp3");
	klipovi.push("http://pozorista.net/m/02_106_03.mp3");
	klipovi.push("http://pozorista.net/m/02_092_02.mp3");
	klipovi.push("http://pozorista.net/m/02_131_01.mp3");
	klipovi.push("http://pozorista.net/m/02_031_03.mp3");
	klipovi.push("http://pozorista.net/m/02_058_02.mp3");
	klipovi.push("http://pozorista.net/m/02_080_a.mp3");
	klipovi.push("http://pozorista.net/m/02_080_b.mp3");
	klipovi.push("http://pozorista.net/m/99_001.mp3");
	klipovi.push("http://pozorista.net/m/98_001.mp3");
	klipovi.push("http://pozorista.net/m/97_001.mp3");
	klipovi.push("http://pozorista.net/m/01_140.mp3");
	klipovi.push("http://pozorista.net/m/01_147.mp3");
	klipovi.push("http://pozorista.net/m/01_578.mp3");
	klipovi.push("http://pozorista.net/m/01_1079.mp3");
	klipovi.push("http://pozorista.net/m/01_1067_07.mp3");
	klipovi.push("http://pozorista.net/m/04_058_01.mp3");
	klipovi.push("http://pozorista.net/m/04_058_04.mp3");
	klipovi.push("http://pozorista.net/m/03_064_02.mp3");
	klipovi.push("http://pozorista.net/m/03_028_04.mp3");
	klipovi.push("http://pozorista.net/m/03_028_07.mp3");
	klipovi.push("http://pozorista.net/m/03_028_15.mp3");
	klipovi.push("http://pozorista.net/m/03_010_03.mp3");

	var broj_klipova = klipovi.length;
	var akt_klip = klipovi[Math.floor(broj_klipova * Math.random())];
	if(prviput == 1) {
		auto_m = " autoplay";
	}

	var sadrzaj_plejera = "<audio controls" + auto_m + "><source src='" + akt_klip + "' type='audio/mpeg'></audio>&nbsp;&nbsp;<input type='button' onclick='drugo()'>";
	document.getElementById("player01").innerHTML = sadrzaj_plejera;
	prviput = 1;
}

idovi2.push('100180' *1);
idovi2.push('100136' *1);
idovi2.push('100124' *1);
idovi2.push('100306' *1);
idovi2.push('100250' *1);
idovi2.push('100273' *1);
idovi2.push('100248' *1);
idovi2.push('100283' *1);
idovi2.push('100232' *1);
idovi2.push('100162' *1);
idovi2.push('100137' *1);
idovi2.push('100097' *1);
idovi2.push('100249' *1);
ktgr2.push('1' *1);
ktgr2.push('1' *1);
ktgr2.push('1' *1);
ktgr2.push('1' *1);
ktgr2.push('1' *1);
ktgr2.push('1' *1);
ktgr2.push('1' *1);
ktgr2.push('1' *1);
ktgr2.push('1' *1);
ktgr2.push('1' *2);
ktgr2.push('1' *1);
ktgr2.push('1' *1);
ktgr2.push('1' *1);
ktgr2.push('1' *1);
ktgr2.push('1' *1);
ktgr2.push('1' *1);
ktgr2.push('1' *1);
ktgr2.push('1' *1);
ktgr2.push('1' *1);
ktgr2.push('1' *1);
ktgr2.push('1' *1);
ktgr2.push('1' *1);
ktgr2.push('1' *1);
ktgr2.push('1' *1);
ktgr2.push('1' *1);
ktgr2.push('1' *1);

idovi3.push('100043' *1);

idovi4.push('100204' *1);
idovi4.push('100206' *1);
idovi4.push('100208' *1);
idovi4.push('100209' *1);
idovi4.push('100212' *1);
idovi4.push('100215' *1);
idovi4.push('100217' *1);
idovi4.push('100221' *1);
idovi4.push('100222' *1);
ktgr4.push('1' *1);
ktgr4.push('1' *1);
ktgr4.push('2' *1);
ktgr4.push('2' *1);
ktgr4.push('2' *1);
ktgr4.push('2' *1);
ktgr4.push('2' *1);
ktgr4.push('2' *1);
ktgr4.push('2' *1);

var xxpredstave = [];
xxpredstave.push('2338' *1);
xxpredstave.push('2451' *1);
xxpredstave.push('2405' *1);
xxpredstave.push('2016' *1);
xxpredstave.push('2463' *1);
xxpredstave.push('1955' *1);
xxpredstave.push('1851' *1);
xxpredstave.push('2153' *1);
xxpredstave.push('2101' *1);
xxpredstave.push('2467' *1);
xxpredstave.push('2456' *1);
xxpredstave.push('2455' *1);
xxpredstave.push('1947' *1);
xxpredstave.push('1945' *1);
xxpredstave.push('2434' *1);
xxpredstave.push('2279' *1);
xxpredstave.push('2333' *1);
xxpredstave.push('2115' *1);
xxpredstave.push('2488' *1);
xxpredstave.push('2480' *1);

var dgdj_info = idovi[Math.floor(4 * Math.random())];
var dgdj2_info = idovi2[Math.floor(3 * Math.random())];
var dgdj3_info = idovi3[Math.floor(1 * Math.random())];
var dgdj4_info = idovi4[Math.floor(3 * Math.random())];

var unos_clbroja = "<table><tr><td>&#269;lanski broj: <input type='text' id='txt_clbroj'></td></tr><tr><td><input type='button' id='button_clbr' onclick='ex_01(";
var unos_clbroja_rep = ");' value='slede&#263;i korak'></td></tr></table>";
var unos_clbroja_proces = "<table><tr><td><img src='/slike/bilten/loading-small.gif'></td></tr></table>";
var pogresan_clbroj = "<table><tr><td>uneli ste pogre&#353;an &#269;lanski broj, poku&#353;ajte ponovo: <input type='text' id='txt_clbroj'></td></tr><tr><td><input type='button' id='button_clbr' onclick='ex_01(";
var pogresan_clbroj_rep = ");' value='po&#353;alji'></td></tr></table>";
var narudzbenica = "naru&#269;ujem <input type='text' id='txt_broj_ul' size='3'> ulaznica <input type='button' id='button_rzrv' onclick='clan_rezerv(";
var narudzbenica_rep = ");' value='naru&#269;i'>";
var rezervacija_proces = "Rezervacija u obradi <img src='/slike/bilten/loading-small.gif'>";
var potvrda_rez = "Rezervisali ste <div id='rzrv_broj' class=uliniji></div> ulaznice po ceni od <div id='rzrv_cena' class=uliniji></div> dinara po karti za ovu predstavu. Va&#353;a rezervacija va&#382;i do <div id='rzrv_dd' class=uliniji></div> u <div id='rzrv_hhmin' class=uliniji></div>.  Status rezervacije mo&#382;ete proveriti na stranici <input type='button' id='button_rzrv' onclick='clan_rezerv2(30304);' value='pregled rezervacija'>";
var prikaz_rezervacija_proces = "Zahtev u obradi <img src='/slike/bilten/loading-small.gif'>";
//var narudzbenica = "naru&#269;ujem <input type='text' id='txt_broj_ul' size='3'> ulaznica <input type='button' id='button_rzrv' onclick='clan_rezerv();' value='naru&#269;i'>";
var registr1 = "Va&#353;a rezervacija <input type='text' id='txt_broj_ul' size='3'> ulaznica je registrovana! Status rezervacije mo&#382;ete proveriti na stranici <input type='button' id='button_rzrv' onclick='clan_rezerv2(30304);' value='pregled rezervacija'>, a nakon kontrole operatora, potvrda &#263;e Vam biti poslata na Va&#353;u e-mail adresu.";
var registr2 = "Rezervisali ste <input type='text' id='txt_broj_ul' size='3'> karte za ovu predstavu! Status rezervacije mo&#382;ete proveriti na stranici <input type='button' id='button_rzrv' onclick='clan_rezerv2(30304);' value='pregled rezervacija'>, a nakon kontrole operatora, potvrda &#263;e Vam biti poslata na Va&#353;u e-mail adresu.";
var clan_obrazac = "<div class=xindigo>Ova stranica slu&#382;i za u&#269;lanjenja, za tra&#382;enje zaboravljenog &#269;lanskog broja pomo&#263;u e-mail adrese, i za pregled svojih rezervacija kad ste ulogovani. Rezervacija karata se mo&#382;e izvr&#353;iti preko datuma (klikom na dugme 'kalendar', i na &#382;eljeni datum na kalendaru), ili preko scene (klikom na dugme 'repertoari'), ili preko specijalne ponude (klikom na naslov 'klub ljubitelja pozori&#353;ta'). Kad na&#273;ete &#382;eljenu predstavu, rezervacija se vr&#353;i klikom na dugme sa naslovom predstave i cenom, a ne klikom na dugme 'info'.";
clan_obrazac += "<table width='100%'><tr><td class='xindigo'><input type='button' value='obrazac za u&#269;lanjenje' onclick='prikazi_ucla();' title='prikazi' id='prikazi_ucla_button'></td><td class='xindigo'><div id='clan_obrazac_ime' class='xindigo'></div></td><td class='xindigo'><div id='clan_obrazac_clbroj' class='xindigo'></div></td></tr></table>";
clan_obrazac += "<tr><td class='xzuto'><div id='clan_obrazac_ucla' class='xzuto'></div></td></tr></table>";
clan_obrazac += "<table width='100%'><tr><td class='xindigo'>obrazac za login</td></tr>";
clan_obrazac += "<tr><td class='xzuto'><div id='clan_obrazac_login' class='xzuto'></div></td>";
clan_obrazac += "<tr><td class='xzuto'><div id='clan_upit_clbr' class='xzuto'></div></td></tr></table>";
clan_obrazac += "<table width='100%'><tr><td class='xindigo'><input type='button' value='pregled rezervacija' onclick='prikazi_rezervacije()'></td></tr>";
clan_obrazac += "<tr><td class='xzuto'><div id='clan_pregled_rezervacija' class='xzuto'></div></td></tr></table>";

var slov_pretr = "";
if(sirina_broj < 768) {
	slov_pretr += "<table width='100%'><tr><td class=xdunkelindigo title='unesite nekoliko slova iz naslova u tekst-polje i kliknite'>pretraga predstava</td><td class=xdunkelindigo><input type=text id='upit_predst' onclick='prikazi_predst_spisak(this.value,2)'></td></tr>";
	slov_pretr += "<tr><td colspan='2'><div id='predstave_rezultat' class='kucica'></div></td></tr>";
	slov_pretr += "<tr><td class=xdunkelindigo title='unesite nekoliko slova iz imena i prezimena u tekst-polje i kliknite'>pretraga aktera</td><td class=xdunkelindigo><input type=text id='upit_predst' onclick='prikazi_akteri_spisak(this.value,2)'></td></tr>";
	slov_pretr += "<tr><td colspan='2'><div id='akteri_rezultat' class='kucica'></div></td></tr>";
	slov_pretr += "</table>";
} else {
	slov_pretr += "<table width='100%'><tr><td class=xdunkelindigo title='unesite nekoliko slova iz naslova u tekst-polje i kliknite'>pretraga predstava</td><td class=xdunkelindigo><input type=text id='upit_predst' onclick='prikazi_predst_spisak(this.value,2)'></td>";
	slov_pretr += "<td class=xdunkelindigo title='unesite nekoliko slova iz imena i prezimena u tekst-polje i kliknite'>pretraga aktera</td><td class=xdunkelindigo><input type=text id='upit_akter' onclick='prikazi_akteri_spisak(this.value,2)'></td>";
	slov_pretr += "</tr><tr><td colspan='2'><div id='predstave_rezultat' class='kucica'></div></td><td colspan='2'><div id='akteri_rezultat' class='kucica'></div></td></tr>";
	slov_pretr += "</table>";
}
var unos_komentara_obrazac = "<table width='100%'><tr><td class=xbelo colspan='2'><span class=xindigo2>Va&#353; komentar.</span> Unesite svoj komentar u prazno polje. Odaberite korisni&#269;ko ime koje &#263;e biti prikazano i unesite u polje 'username', unesite &#269;lanski broj (ne&#263;e biti prikazan uz komentar) i svoje inicijale (prvo ime pa prezime) u odgovaraju&#263;a polja, i kliknite na 'po&#353;alji'.</td></tr>";
unos_komentara_obrazac += "<tr><td style='width:80%' class='xindigo'><textarea rows='3' cols='50' id='novi_komentar'></textarea></td>";
unos_komentara_obrazac += "<td style='width:20%' class='xindigo'><input type='text' id='komentar_clbr' value='&#269;lanski broj' size='12' onclick='ocisti(this.id);'><br/>";
unos_komentara_obrazac += "<input type='text' id='komentar_username' value='username' size='12' onclick='ocisti(this.id);'><br/>";
unos_komentara_obrazac += "<input type='text' id='komentator_inic' value='inicijali' size='9' onclick='ocisti(this.id);'><input type='button' id='komentar_posalji' title='0' onclick='posalji_novi_komentar(this.title);' value='po&#353;alji'></td></tr>";
var akter_obrazac = "<table width='100%'><tr><td colspan='2' class='xindigo'><div id='slovna_pretraga' class='xindigo'></div></td></tr></table>";
akter_obrazac += "<tr><td colspan='2' class='xcrno'><div id='akter_ime' class='xcrno'></div></td></tr>";
akter_obrazac += "<tr><td class='xzuto' style='width:50%'><div id='predstave_spisak2' class='xzuto'></div></td>";
akter_obrazac += "<td class='xzuto' style='width:50%'><div id='mesto_za_sliku_a' class='xzuto'></div></td></tr>";
akter_obrazac += "<tr><td colspan='2' class='xindigo'><div id='pid991' class='xindigo'></div></td></tr></table>";
var predstava_obrazac = "<table width='100%'><tr><td colspan='2' class='xindigo'><div id='slovna_pretraga' class='xindigo'></div></td></tr>";
predstava_obrazac += "<tr><td colspan='2' class='xcrno'><div id='naslov_predstave' class='xcrno'></div></td></tr>";
predstava_obrazac += "<tr><td class='xzuto' style='width:50%'><div id='akteri_spisak2' class='xzuto'></div></td>";
predstava_obrazac += "<td class='xzuto' style='width:50%'><div id='mesto_za_sliku' class='xzuto'></div></td></tr>";
predstava_obrazac += "<tr><td colspan='2' class='xindigo'><div id='pid99' class='xindigo'></div></td></tr></table>";
var ucl_obrazac = "<table width='100%'><tr><td class='xindigo'>obrazac za u&#269;lanjenje</td></tr></table>";
ucl_obrazac += "<table width='100%'>" +
	"<tr><td class='hdr_02' colspan='3'>U&#269;lanjenje u Klub je besplatno, a &#269;lanstvo podrazumeva da ostvarujete pravo na kupovinu karata sa popustom, da preuzimete rezervisane karte u nazna&#269;enom roku ili da otka&#382;ete rezervaciju.</td></tr>" +
	"<tr><td class='body_02'>Ime:</td><td class='body_03'><input type='text' id='ucl_ime' onclick='this.value=" + '""' + ";'></td><td class='body_03'>obavezno</td></tr>" +
	"<tr><td class='body_02'>Prezme:</td><td class='body_03'><input type='text' id='ucl_prez' onclick='this.value=" + '""' + ";'></td><td class='body_03'>obavezno</td></tr>" +
	"<tr><td class='body_02'>e-mail:</td><td class='body_03'><input type='text' id='ucl_email' onclick='this.value=" + '""' + ";'></td><td class='body_03'>vrlo preporu&#269;ljivo</td></tr>" +
	"<tr><td class='body_02'>telefon:</td><td class='body_03'><input type='text' id='ucl_tel' onclick='this.value=" + '""' + ";'></td><td class='body_03'>" +
	"po&#382;eljno - broj na koji Vas mo&#382;emo obavestiti SMS-om o otkazivanju predstave</td></tr>" +
	"<tr><td class='xindigo' colspan='3'><input type='button' id='ucl_button' onclick='uclani_me();' value='klik'> <div class=uliniji id='ishod_uclanj' class='xindigo'></div></td></tr>" +
	"</table></div>";

var login_obrazac = "<table width='100%'><tr><td class='body_02'>&#269;lanski broj: </td><td class='body_03'><input type='text' id='login_clbroj'></td></tr>" +
	"<tr><td class='body_02'>e-mail: </td><td class='body_03'><input type='text' id='login_email'></td></tr>" +
	"<tr><td class='xindigo'><input class=uliniji type='button' id='login_xbutton' onclick='uloguj_me();' value='login'> <div class=uliniji id='ishod_logina' class='xindigo'></div></td><td class='xindigo'><div class=uliniji id='mesto_za_logout_dugme' class='xindigo'></div></td></tr></table>";
var logout_dugme = "<input type='button' id='login_xbutton' onclick='izloguj_me();' value='logout'>";
var clbr_zahtev_obrazac = "<table width='100%'><tr><td class='xzuto'>zaboravili ste svoj &#269;lanski broj? </td><td class='xzuto'>&nbsp;</td></tr>" +
	"<tr><td class='xzuto' style='width:50%'>unesite svoju e-mail adresu (onu koju ste prijavili prilikom registracije u Klub), i info o &#269;lanskom broju bi&#263;e Vam poslat: " +
	"</td><td class='xzuto'><input type='text'" +
	" id='clbr_rq_email'></td></tr>" +
	"<tr><td class='xindigo'><input class=uliniji type='button' id='obavest_xbutton' onclick='obavesti_me();' value='obavesti me'> <div class=uliniji id='ishod_upita'" +
	" class='xindigo'></div></td><td class='xindigo'><div class=uliniji id='mesto_za_logout_dugme' class='xindigo'></div></td></tr></table>";


/*
var pid71 = ""
	<p id="pid71" class=xcrno style='width:100%; z-index:-5;' onmouseover="alert('+');">
		<table style="width:40%; z-index:-5;" onclick="this.style.zIndex='-5';"><tr><td class=xindigo onmouseover="alert('+');" onmouseout="alert('++');"><input type='text' size="24"></td><td class=xindigo><input type='button' value="nađi predstavu!" onclick="pretraga_lista()">
		</td></tr><tr><td class=xindigo colspan='2' style="z-index:-2; position:absolute;"  onclick="this.style.zIndex='-2'; alert(this.style.zIndex);">
				<table id="pretraga_rz" style="z-index:'-5'; position:absolute;"><tr style="z-index:'-5'; position:absolute;"><td id="prozorcic" class=xbelo style="z-index:'-5'; position:absolute;">.......</td></tr>
					<tr style="z-index:'-5'; position:absolute;"><td class=xbelo style="z-index:'-5'; position:absolute;">.......</td></tr>
					<tr style="z-index:'-5'; position:absolute;"><td class=xbelo style="z-index:'-5'; position:absolute;">.......</td></tr></table>
		</td></tr>
	</table>
	</p>
*/
//tabela clanovi

function ocisti(x) {
	document.getElementById(x).value = "";
}

var g_6_korisnik_id = [];
var g_6_korisnik_ime = [];
var g_6_korisnik_prezime = [];
var g_6_korisnik_email = [];
var g_6_korisnik_tel = [];
var g_6_korisnik_r = [];
var g_6_korisnik_ident = [];
var g_6_korisnik_clbroj = [];
var g_6_korisnik_lozinka = [];

//tabela deff
var g_1_id = [];
var g_1_scena = [];
var g_1_red = [];
var g_1_odred = [];
var g_1_od = [];
var g_1_do = [];
var g_1_rang = [];


//tabela r

var g_2_id = [];
var g_2_predstava = [];
var g_2_dd = [];
var g_2_mm = [];
var g_2_yy = [];
var g_2_hh = [];
var g_2_min = [];
var g_2_mesto = [];
var g_2_gled = [];
var g_2_datum_unix = [];
var g_2_dat_str = [];
var g_2_vr_str = [];
var g_2_status = [];


//tabela cene
var g_3_id = [];
var g_3_dogadjaj = [];
var g_3_ktg = [];
var g_3_vreme = [];
var g_3_punacena = [];
var g_3_sapopustom = [];
var g_3_speccena = [];
var g_3_status = [];

//tabela predstave
var g_4_id = [];
var g_4_vrsta = [];
var g_4_tx = [];
var g_4_rod = [];
var g_4_scena = [];
var g_4_a = [];
var g_4_nasl_dijakr = [];
var g_4_br_slika = [];
var g_4_gled = [];
var g_4_ocena_1 = [];
var g_4_ocena_2 = [];
var g_4_ocena_3 = [];
var g_4_nasl_orig = [];
var g_4_href = [];
var g_4_svrta = [];
var g_4_info = [];

//tabela pozorista
var g_5_id = [];
var g_5_rb = [];
var g_5_a = [];
var g_5_kuca = [];
var g_5_naziv_kuce = [];
var g_5_skr_kuca = [];
var g_5_naziv_scene = [];
var g_5_skr_scena = [];

//tabela glumci
var g_11_id = [];
var g_11_ime = [];
var g_11_prezime = [];
var g_11_imeo = [];
var g_11_prezimeo = [];

//tabela veze
var g_12_id = [];
var g_12_predstava = [];
var g_12_akter = [];
var g_12_veza = [];


var karakter0 = [];
var karakter1 = [];
var bojakose = [];
var red_scena = [];

//var g_prefiks = "http://";

function ceo_repic(xi) {
	var xmlhttp_crc = new XMLHttpRequest();
  url = g_prefiks + "pozorista.net/np/get_rep.php?akcija=-103";
  xmlhttp_crc.onreadystatechange=function() {
		if (xmlhttp_crc.readyState == 4 && xmlhttp_crc.status == 200) {
			aiai = xmlhttp_crc.responseText;
			outp = analiza_repic(aiai,xi);
		}
	}
	xmlhttp_crc.open("GET", url, true);
	xmlhttp_crc.send();
	if(xi != 1) { alert(xi); }
}

function analiza_repic(response,xi) {
  var arr = JSON.parse(response);
  var i;
  for(i = 0; i < arr.length; i++) {
    switch (arr[i].kls) {
      case "1":
        g_1_id.push(parseInt(arr[i].k2id));
        g_1_scena.push(arr[i].k1scena);
        g_1_red.push(arr[i].k1red);
        g_1_odred.push(arr[i].k1odred);
        g_1_od.push(arr[i].k1od);
        g_1_do.push(arr[i].k1do);
        g_1_rang.push(arr[i].k1rang);
        break;
      case "2":
        g_2_id.push(parseInt(arr[i].k2id));
        g_2_predstava.push(parseInt(arr[i].k2pr));
        g_2_dd.push(parseInt(arr[i].k2dd));
        g_2_mm.push(parseInt(arr[i].k2mm));
        g_2_yy.push(parseInt(arr[i].k2yy));
        g_2_hh.push(arr[i].k2hh);
        g_2_min.push(arr[i].k2mn);
        g_2_mesto.push(parseInt(arr[i].k2ms));
        g_2_gled.push(parseInt(arr[i].k2gl));
        g_2_datum_unix.push(parseInt(arr[i].k2dx));
        //if((g_2_datum_unix[g_2_datum_unix.length-1]) == 16962) {alert(g_2_datum_unix[g_2_datum_unix.length-1] + " ovo mu je indeks! " + (g_2_datum_unix.length-1));}//alert(g_2_datum_unix[g_2_datum_unix.length-1]);
        g_2_dat_str.push(arr[i].k2dr);
        g_2_vr_str.push(arr[i].k2vr);
		g_2_status.push(parseInt(arr[i].k2st));
        break;
      case "3":
        g_3_id.push(parseInt(arr[i].k3id));
        g_3_dogadjaj.push(parseInt(arr[i].k3dj));
        g_3_ktg.push(arr[i].k3kt);
        g_3_vreme.push(arr[i].k3vr);
        g_3_punacena.push(arr[i].k3pc);
        g_3_sapopustom.push(arr[i].k3sp);
        g_3_speccena.push(arr[i].k3sc);
        g_3_status.push(arr[i].k3st);
        break;
      case "4":
        g_4_id.push(parseInt(arr[i].k4id));
        g_4_vrsta.push(arr[i].k4vr);
        g_4_tx.push(arr[i].k4tx);
        g_4_rod.push(arr[i].k4rd);
        g_4_scena.push(arr[i].k4sc);
        g_4_a.push(arr[i].k4a);
        g_4_nasl_dijakr.push(arr[i].k4ns);
        g_4_br_slika.push(arr[i].k4bs);
        g_4_gled.push(arr[i].k4gl);
        g_4_ocena_1.push(arr[i].k4o1);
        g_4_ocena_2.push(arr[i].k4o2);
        g_4_ocena_3.push(arr[i].k4o3);
        g_4_nasl_orig.push(arr[i].k4no);
        g_4_href.push(arr[i].k4hr);
        g_4_svrta.push(arr[i].k4sv);
				//g_4_info.push(arr[i].k4in);
        break;
      case "5":
        g_5_id.push(parseInt(arr[i].k5id));
        g_5_rb.push(arr[i].k5rb);
        g_5_a.push(arr[i].k5a);
        g_5_kuca.push(arr[i].k5kc);
        g_5_naziv_kuce.push(arr[i].k5nk);
        g_5_skr_kuca.push(arr[i].k5sk);
        g_5_naziv_scene.push(arr[i].k5ns);
        g_5_skr_scena.push(arr[i].k5ss);
        break;
			case "7":
      /*
				g_7_id.push(parseInt(arr[i].k7id));
				g_7_dogadjaj.push(parseInt(arr[i].k7dg));
				g_7_punacena.push(parseInt(arr[i].k7pc));
				g_7_sapopustom.push(parseInt(arr[i].k7sp));
				g_7_speccena.push(parseInt(arr[i].k7sc));
				g_7_statux.push(parseInt(arr[i].k7sx));
				g_7_ktg.push(parseInt(arr[i].k7kg));
        */
				break;
      case "11":
        g_11_id.push(parseInt(arr[i].k11id));
				g_11_ime.push(arr[i].k11i);
        g_11_prezime.push(arr[i].k11p);
				g_11_imeo.push(arr[i].k11io);
        g_11_prezimeo.push(arr[i].k11po);
        break;
      case "12":
        g_12_id.push(parseInt(arr[i].k12id));
        g_12_predstava.push(parseInt(arr[i].k12pr));
        g_12_akter.push(parseInt(arr[i].k12a));
        g_12_veza.push(parseInt(arr[i].k12v));
        break;
    }
  }
	//opere();
  lista_scena();
  scene_listic(xi);
}

function www_upit1() {
  var xmlhttp_www = new XMLHttpRequest();
  url = "http://www.pozorista.net/np/get_rep.php?akcija=testwww";
  xmlhttp_www.onreadystatechange=function() {
    if (xmlhttp_www.readyState == 4 && xmlhttp_www.status == 200) {
      aiai = xmlhttp_www.responseText;
      outp = analiza_www(aiai);
    }
  }
  xmlhttp_www.open("GET", url, true);
  xmlhttp_www.send();
}
function www_upit2() {
  var xmlhttp_nowww = new XMLHttpRequest();
  url2 = "http://pozorista.net/np/get_rep.php?akcija=testwww";
  xmlhttp_nowww.onreadystatechange=function() {
    if (xmlhttp_nowww.readyState == 4 && xmlhttp_nowww.status == 200) {
      aiai = xmlhttp_nowww.responseText;
      outp = analiza_nowww(aiai);
    }
  }
  xmlhttp_nowww.open("GET", url2, true);
  xmlhttp_nowww.send();

}
function analiza_www(response) {
  var arr = JSON.parse(response);
  if(arr[0].www == "ima") {
    g_prefiks = "http://www.";
  }
  ceo_repic(1);
	odredi_g_verz();
}
function analiza_nowww(response) {
  var arr = JSON.parse(response);
  if(arr[0].www == "ima") {
    g_prefiks = "http://";
  }
  ceo_repic(1);
	odredi_g_verz();
}

function opere(i3) {
	idovi7 = [];
	ktgr7 = [];
	var d = new Date();
	var nd = d.getDate();
	var nm = d.getMonth() + 1;
	var ny = d.getFullYear();
	var d = Date.parse(nm + "/" + nd + "/" + ny);
	var minutes = 1000 * 60;
	var hours = minutes * 60;
	var days = hours * 24;
	var ddddd = Math.floor(d / days);
	var j = g_2_id.indexOf(100001);
	var k = 0;
	var kk = 0;
	var kl = 1;
	for(i = j;i<g_2_id.length;i++) {
		k = g_4_id.indexOf(g_2_predstava[i] * 1);
		kk = 0;
		kl = 1;
		if(g_2_datum_unix[i] * 1 > ddddd) {
		if(g_4_vrsta[k] * 1 == i3 * 1) {
			while(kl > 0) {
				kk = g_3_dogadjaj.indexOf(g_2_id[i],kl);
				if(kk > - 1) {
					idovi7.push(g_2_id[i] * 1);
					ktgr7.push(1 * g_3_ktg[kk]);
				}
				kl = kk+1;
			}
		}}
	}
	dgdj7_info = idovi7[Math.floor(3 * Math.random())];
	//document.getElementById("hid_vr").value = ".";
	//document.getElementById("pid00").innerHTML=dgdj7_info;
}

function lista_scena() {
  for (x=0;x<g_5_id.length;x++) {
    if(g_5_a[x] == 4) {
      //alert(g_5_rb[x]);
      a = g_5_rb[x];
      b = g_5_id[x];
      if(a < 10) {a = "0" + a;}
      if(a < 100) {a = "0" + a;}
      if(b < 10) {b = "0" + b;}
      if(b < 100) {b = "0" + b;}
		  red_scena.push(a + "" + b);
    }
	}
  red_scena.sort(function(a, b){return a-b});

}

function provera() {
  var dt = new Date();
  var dan = dt.getDate();
  var sat = dt.getHours();
  alert(h_verz);
  alert(d_verz);
  alert(sat);
  alert(dan);
  if(h_verz != sat) {
    h_verz = sat;
    //location.reload();
    alert("reload");
  }
}

function tapse() {
	/*
	window.addEventListener("scroll", function () {
		//alert("!");
	}, false);
*/
  var naslov = " klub ljubitelja pozori&#353;ta";
  xlogo = '<table style="width:100%;"><tbody><tr><td class=xbelo><img src="/tmp/logo.jpg" width="' + logo_sir + '">';
  naslov = xlogo + '</td><td onclick="naslovna()" class=xbelo style="margin:auto; font-size:' + (sirina * 10) + 'px;">' + naslov + '</td></tr></table>';
  document.getElementById("heder").innerHTML = naslov;
  document.getElementById("hdr").style.height=logo_sir;
  document.getElementById("pid01").innerHTML = "<img src='/slike/bilten/loading-circle.gif' style='display: block;  margin:auto; width:30%'>";
  //document.getElementById("ucl").innerHTML = ucl_obrazac;
	odredi_g_verz();
  provera_ver();
	//document.getElementById("tip_div").innerHTML = "";
  //document.getElementById("b").style.background = "url(/slike/flora.jpg)";
}

function pozicija() {
    var myWindow = window.open("", "myWin");
    document.getElementById("pid01").innerHTML = myWindow.screenY;
}

function tekstovi_load() {
  var xmlhttp_tekstovi_load = new XMLHttpRequest();
  url = g_prefiks + "pozorista.net/np/get_rep.php?akcija=tekstovi_load";
  xmlhttp_tekstovi_load.onreadystatechange=function() {
    if (xmlhttp_tekstovi_load.readyState == 4 && xmlhttp_tekstovi_load.status == 200) {
      aiai = xmlhttp_tekstovi_load.responseText;
      outp = analiza_tekstovi_load(aiai);
    }
  }
  xmlhttp_tekstovi_load.open("GET", url, true);
  xmlhttp_tekstovi_load.send();
}

function analiza_tekstovi_load(response) {
  var arr = JSON.parse(response);
	var i;
  for(i = 0; i < arr.length; i++) {
		txtid[i] = arr[i].id;
		txttekst[i] = arr[i].tekst;
		txtautor[i] = arr[i].autor;
		txtdelo[i] = arr[i].delo;
		txtverzija[i] = arr[i].verzija;
		txtstrana[i] = arr[i].strana;
		txtvrsta[i] = arr[i].vrsta;
	}
	//var res = txttekst[3].replace("%", String.fromCharCode(13) + String.fromCharCode(10));
	//alert(res);
}

function zatvori_tekst() {
	document.getElementById('Popup_tekstovi').style.zIndex=-8;
	document.getElementById('zastor').style.zIndex=-6;
}

function otvori_tekst() {
	var broj_tekstova = txtid.length;
	//alert(broj_tekstova);
	var txtprivr = 0;
	var brojacx = 0;
	var nemavise = 0;
	while(txtprivr > -1) {
		brojacx++;
		//akt_tekst = Math.floor(broj_tekstova * Math.random());
		if((g_korisnik_clbroj == 21383) || (g_korisnik_clbroj == 10101) ) {
			akt_tekst = broj_tekstova - brojacx;
		} else {
			akt_tekst = Math.floor(broj_tekstova * Math.random());
		}
		txtprivr = niz_txt.indexOf(akt_tekst);
		if(brojacx > 1000) {
			nemavise = -1;
			niz_txt = [];
			break; }
		if(akt_tekst == -1) {
			brojacx = 0;
			akt_tekst = broj_tekstova - 1;
		}
	}
	niz_txt.push(akt_tekst);
	var uklontxt = "onclick=" + String.fromCharCode(34) + "document.getElementById(" + "'Popup_tekstovi'" + ").style.zIndex='-8'; document.getElementById(" + "'zastor'" + ").style.zIndex='-6';" + String.fromCharCode(34);
	divuklontxt = "<div " + uklontxt + " class=iks>&nbsp;X&nbsp;</div>";
	var idautora = g_11_id.indexOf(txtautor[akt_tekst] * 1);
	var tximeo = "";
	if(txtvrsta[akt_tekst] == 0) {
		var xtxt = txttekst[akt_tekst].replace(/%/g,"");
		var txime = g_11_ime[idautora] + " " + g_11_prezime[idautora];
		if(txtdelo[akt_tekst].length > 2) {
			txdelo = ": " + txtdelo[akt_tekst];
		} else {
			txdelo = "";
		}
		if(g_11_imeo[idautora].length  > 2) {
			tximeo = "(" + g_11_imeo[idautora] + " " + g_11_prezimeo[idautora] + ")";
		}
		xtxt = "<div style='text-align: center;' onclick='otvori_tekst();' title='" + txime + " " + tximeo + txdelo + "'>" + xtxt + "</div>";
		document.getElementById('ptitl').innerHTML=txime + " " + tximeo + txdelo;
	}
	if(txtvrsta[akt_tekst] == 1) {
		var txime = g_11_ime[idautora] + " " + g_11_prezime[idautora];
		var tximeo = "";
		if(g_11_imeo[idautora].length  > 2) {
			tximeo = "(" + g_11_imeo[idautora] + " " + g_11_prezimeo[idautora] + ")";
		}
		var xtxt = "<img style='width:90%; margin-left:5%; margin-right:5%; margin-top:5px;' src='/i/" + txttekst[akt_tekst] + "'>";
		xtxt = "<div onclick='otvori_tekst();' title='" + txime + " " + tximeo + ": " + txtdelo[akt_tekst] + "'>" + xtxt + "</div>";
		document.getElementById('ptitl').innerHTML=txime + " " + tximeo + ": " + txtdelo[akt_tekst];
	}

	document.getElementById("pid1001").innerHTML = divuklontxt + xtxt;
	document.getElementById("zastor").style.zIndex = 6;
	document.getElementById("Popup_tekstovi").style.zIndex = 8;
	document.getElementById('titl').style.zIndex = 9;
	document.getElementById('ptitl').style.zIndex = 9;
	//location.href = "#Popup_tekstovi";
}
