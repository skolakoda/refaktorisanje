function ex_01(koje,ktgg,effc) {
  //alert("ex_01 " + koje + "," + ktgg + "," + effc);
  g_akcija = 3;
  koje = document.getElementById("txt_clbroj").value;
  document.getElementById("identifikacija").innerHTML=unos_clbroja_proces;
  g_korisnik_ident_proces = 1;

  var xmlhttp_cl = new XMLHttpRequest();
  url = "http://pozorista.net/np/p_clanovi.php?akcija=-2&ko=" + koje + "&kako=1";
  xmlhttp_cl.onreadystatechange=function() {
   if (xmlhttp_cl.readyState == 4 && xmlhttp_cl.status == 200) {
     aiai = xmlhttp_cl.responseText;
     outp = analiza_clanovi(aiai,1,ktgg,effc);
   }
}
xmlhttp_cl.open("GET", url, true);
xmlhttp_cl.send();

}

function analiza_clanovi(response,meta,ktgg,effc) {
  var arr = JSON.parse(response);
  var i;
  var out = "<table>";
  //alert(arr.length);
  for(i = 0; i < arr.length; i++) {
    var uspeh = arr[i].uspeh;
    if(meta==1) {
      if(uspeh == -5) {
        iiiii = "30304," + ktgg + "," + effc;
        out = pogresan_clbroj + iiiii + pogresan_clbroj_rep;
        g_korisnik_ime = "";
        g_korisnik_prezime = "";
        g_korisnik_email = "";
        g_korisnik_ident = 0;
        g_korisnik_clbroj = 0;
        g_korisnik_ident_proces = 0;
        //document.getElementById("dugme_login").innerHTML="login";
      } else {
        out += "<tr><td>" +
        arr[i].korisnik_ime + " " + arr[i].korisnik_prezime +
        "</td></tr><tr><td>" +
        "članski broj: " + arr[i].korisnik_clbroj +
        "</td></tr></table>";
        g_korisnik_ime = arr[i].korisnik_ime;
        g_korisnik_prezime = arr[i].korisnik_prezime;
        g_korisnik_email = arr[i].korisnik_email;
        g_korisnik_ident = arr[i].korisnik_ident;
        g_korisnik_clbroj = arr[i].korisnik_clbroj;
        //document.getElementById("dugme_login").innerHTML="logout";
      }
    }
    if(meta==2) {
      if(uspeh == -5) {
        document.getElementById("lista_clanova").innerHTML = "nema članova sa zadatim podacima!";
      } else {
        if(i<40) {
          out += "<tr><td class='belo' title='" + arr[i].korisnik_ident + "'  onclick='prikazi_cl_rzrv(this.title); this.class=sivo;'>" +
          arr[i].korisnik_ime + " " + arr[i].korisnik_prezime +
          "</td><td class='belo'>" +
          "članski broj: " + arr[i].korisnik_clbroj +
          "</td><td class='belo'>" +
          "e-mail: " + arr[i].korisnik_email +
          "</td></tr>";
        }
      }
    }
    if(meta==9) {
      if(uspeh != 5) {
        document.getElementById("ishod_logina").innerHTML = "nema članova sa zadatim podacima!";
      }
      if((uspeh == 5) && (arr.length > 1)) {
        document.getElementById("ishod_logina").innerHTML = "uneti podaci nisu dovoljno specifični - ima više članova koji odgovaraju uslovu!";
      }
      if((uspeh == 5) && (arr.length == 1)) {
        document.getElementById("ishod_logina").innerHTML = "uspešno ste se ulogovali !";
        document.getElementById("clan_obrazac_ime").innerHTML = arr[i].korisnik_ime + " " + arr[i].korisnik_prezime;
        document.getElementById("clan_obrazac_clbroj").innerHTML = arr[i].korisnik_clbroj;
        document.getElementById("mesto_za_logout_dugme").innerHTML = logout_dugme;
        g_korisnik_clbroj = arr[i].korisnik_clbroj;
        g_korisnik_ident = arr[i].korisnik_ident;
    	g_korisnik_ime = arr[i].korisnik_ime;
    	g_korisnik_prezime = arr[i].korisnik_prezime;
      }
    }
  }
  if(meta==1) {
    document.getElementById("identifikacija").innerHTML=out;
    iiiii = "30304," + ktgg + "," + effc;
    if(uspeh >769) {
      document.getElementById("karata").innerHTML = narudzbenica + iiiii + narudzbenica_rep;
    }
  }
  if(meta==2) {
    if(uspeh != -5) {
      out += "</table>";
      document.getElementById("lista_clanova").innerHTML=out;
      alert("ukupno: " + arr.length);
    }
  }
}


function izbor(r_id,ktgg,effc) {
  iiiii = r_id + "," + ktgg + "," + effc;
  document.getElementById("karata").innerHTML = narudzbenica + iiiii + narudzbenica_rep;
  //alert("izbor " + r_id + "," + ktgg + "," + effc);
  g_rezervacija_okoncana = 0;
  g_id_dogadjaja = r_id;
  //document.getElementById("hid_ktg").value = ktgg;
  //document.getElementById("hid_c1").value = effc;
  j = g_2_id.indexOf(r_id * 1);
  k = g_4_id.indexOf(g_2_predstava[j] * 1);
  var nule= "";
  for(ww=4;ww>(g_2_predstava[j] + "").length;ww--) {
    nule += "0";
  }
  document.getElementById("slike").innerHTML="<img src='/slike/predstave/big/" + nule + g_2_predstava[j] + "_01.jpg' width='60%'>";
  document.getElementById("o_predstavi").innerHTML=g_4_nasl_dijakr[k];
  if(g_korisnik_ident == 0) {
    iiiii = r_id + "," + ktgg + "," + effc;
    document.getElementById("identifikacija").innerHTML=unos_clbroja + iiiii + unos_clbroja_rep;
    document.getElementById("karata").innerHTML="";
  } else {
    out = "<table><tr><td>" + g_korisnik_ime + " " + g_korisnik_prezime +
    "</td></tr><tr><td>" +
    "članski broj: " + g_korisnik_clbroj +
    "</td></tr></table>";
    document.getElementById("identifikacija").innerHTML = out;
  }
}

function clan_rezerv(r_id,ktg,c1) {
  //alert("clan_rezerv " + r_id + "," + ktg + "," + c1);
  // g_korisnik_ident g_id_dogadjaja koje = document.getElementById("txt_broj_ul").value ktg? c1?
  //ktg = document.getElementById("hid_ktg").value;
  //c1 = document.getElementById("hid_c1").value;
  ax = document.getElementById("txt_broj_ul").value;
  koje = g_korisnik_ident;
  staje = g_id_dogadjaja;
  ax = parseInt(ax);
  broj = ax;
  if((ax == (ax * 1)) && (ax > 0)) {
    var xmlhttp_cl_rz = new XMLHttpRequest();
    url = "http://pozorista.net/np/xkartex.php?akcija=rezervisi&ko=" + koje + "&sta=" + staje + "&koliko=" + broj + "&ktg=" + ktg + "&c1=" + c1;
    copyToClipboard(url);
    xmlhttp_cl_rz.onreadystatechange=function() {
    if (xmlhttp_cl_rz.readyState == 4 && xmlhttp_cl_rz.status == 200) {
      aiai = xmlhttp_cl_rz.responseText;
      outp = analiza_cl_rz(aiai,broj,c1);
    }
  }
  xmlhttp_cl_rz.open("GET", url, true);
  xmlhttp_cl_rz.send();
  document.getElementById("karata").innerHTML = rezervacija_proces;

  } else {
    alert("pogrešan broj karata!");
  }
}

function analiza_cl_rz(response,brojx,c1) {
  var klj = [];
  var dan_prema = [];
  var dan_protiv = [];
  var arr = JSON.parse(response);
  var ishod = arr[0].ishod;
  if(ishod == -5) {
    //alert ("nema dovoljno karata!");
    document.getElementById("karata").innerHTML = "nema dovoljno karata!";
  }
  if(ishod == 5) {
    g_rezervacija_okoncana = 1;
    alert ("rezervacija uspešna!");
    var broj = arr[0].broj_parcadi * 1;

    //alert ("broj parcadi - " + broj);
    for(i=0;i<broj * 1;i++) {
      //alert(arr[i+1].parce + " - parce");
      iii = 1;
    }
    //alert(arr[i+1].rezervisano + " - rezervisano");
    dokadx = arr[i+2].dokad;
    var tacke = 0;
    var brojac = 0;
    var dtm = [];
    dtm[0] = "";
    dtm[1] = "";
    while(tacke < 2) {
      slovo = dokadx.substr(brojac,1);
      brojac++;
      if(slovo == ".") {
        tacke++;
      } else {
        dtm[tacke * 1] += slovo;
      }
    }
    document.getElementById("karata").innerHTML = potvrda_rez;
    document.getElementById("rzrv_broj").innerHTML = brojx;
    document.getElementById("rzrv_cena").innerHTML = c1;
    document.getElementById("rzrv_dd").innerHTML = dtm[0] + "." + dtm[1];
    document.getElementById("rzrv_hhmin").innerHTML = "19:00";
  }
  /* vredan kod, racunanje dana, ALI KAD JE kartex.php?akcija=slobodno!!!
  var nizz = [];
  var naj_niz = 0;
  for(i = 0; i < arr.length; i++) {
    nizz[i] = arr[i].elem;
  }
  for(i = 1; i < nizz.length; i++) {
    if((nizz[i] * 1) > naj_niz * 1) naj_niz = nizz[i] * 1;
  }
  if((broj * 1) <= (nizz[0] * 1)) alert("ima " + broj + " karata");
  if((broj * 1) <= (naj_niz * 1)) alert("ima " + broj + " karata u nizu");
  if((broj * 1) > (naj_niz * 1)) alert("nema " + broj + " karata u nizu");
  if((broj * 1) > (nizz[0] * 1)) alert("nema " + broj + " karata");
  //g_id_dogadjaja -> dd,mm,yy
  //danas -> dd,mm,yy
  var d = new Date();
  var nd = d.getDate();
  var nm = d.getMonth() + 1;
  var ny = d.getFullYear();
  var nindex = g_2_id.indexOf(g_id_dogadjaja * 1);
  var ndd = g_2_dd[nindex];
  var nmm = g_2_mm[nindex];
  var nyy = g_2_yy[nindex];
  var dan_prema = sledeci_dan(nd,nm,ny,7,1);
  var dan_protiv = sledeci_dan(ndd,nmm,nyy,2,-1);
  if(dat_to_unx(dan_prema[0],dan_prema[1],dan_prema[2]) % 7 == 3) {
    dan_prema = sledeci_dan(dan_prema[0],dan_prema[1],dan_prema[2],1,1);
  }
  alert(dan_prema);
  alert(danunedelji(dat_to_unx(dan_prema[0],dan_prema[1],dan_prema[2])));
  if(dat_to_unx(dan_protiv[0],dan_protiv[1],dan_protiv[2]) % 7 == 3) {
    dan_prema = sledeci_dan(dan_prema[0],dan_prema[1],dan_prema[2],1,-1);
  }
  alert(dan_protiv);
  alert(danunedelji(dat_to_unx(dan_protiv[0],dan_protiv[1],dan_protiv[2])));*/
  //ako je dan_prema nedelja, ako je dan_protiv nedelja,
  //document.getElementById("identifikacija").innerHTML=out;
  //document.getElementById("karata").innerHTML="naručujem <input type='text' id='txt_broj_ul' size='3'> ulaznica <input type='button' id='button_rzrv' onclick='clan_rezerv();' value='naruči'>";
}

function nadji_clanove() {
  var ime = document.getElementById("ime_c").value;
  var prezime = document.getElementById("prezime_c").value;
  var clbroj = document.getElementById("clbroj_c").value;
  var email = document.getElementById("email_c").value;
  var xmlhttp_nadji_cl = new XMLHttpRequest();
  if(((clbroj.length == 5) || (clbroj.length == 6)) && (parseInt(clbroj) > 15000) && (parseInt(clbroj) < 200000)) {
    url = "http://pozorista.net/np/p_clanovi.php?akcija=-2&ko=" + clbroj + "&kako=1";
    //copyToClipboard(url);
    xmlhttp_nadji_cl.onreadystatechange=function() {
    if (xmlhttp_nadji_cl.readyState == 4 && xmlhttp_nadji_cl.status == 200) {
      aiai = xmlhttp_nadji_cl.responseText;
      outp = analiza_clanovi(aiai,2);
      }
    }
    xmlhttp_nadji_cl.open("GET", url, true);
    xmlhttp_nadji_cl.send();
  } else {
    url = "http://pozorista.net/np/p_clanovi.php?akcija=-22&ime=" + ime + "&prezime=" + prezime + "&email=" + email;
    //copyToClipboard(url);
    xmlhttp_nadji_cl.onreadystatechange=function() {
    if (xmlhttp_nadji_cl.readyState == 4 && xmlhttp_nadji_cl.status == 200) {
      aiai = xmlhttp_nadji_cl.responseText;
      outp = analiza_clanovi(aiai,2);
      }
    }
    xmlhttp_nadji_cl.open("GET", url, true);
    xmlhttp_nadji_cl.send();
  }

}

function prikazi_cl_rzrv(ident) {
  //alert(ident);
  var xmlhttp_cl_rzrv = new XMLHttpRequest();
  url = "http://pozorista.net/np/p_clanovi.php?akcija=-737&ko=" + ident;
  //copyToClipboard(url);
  xmlhttp_cl_rzrv.onreadystatechange=function() {
   if (xmlhttp_cl_rzrv.readyState == 4 && xmlhttp_cl_rzrv.status == 200) {
     aiai = xmlhttp_cl_rzrv.responseText;
     outp = analiza_cl_rzrv(aiai);
     }
  }
  xmlhttp_cl_rzrv.open("GET", url, true);
  xmlhttp_cl_rzrv.send();
}

function analiza_cl_rzrv(response,meta) {
  var arr = JSON.parse(response);
  var i;
  var out = "<table>";
  //alert(arr.length);
  for(i = 0; i < arr.length; i++) {
    out += "<tr><td class='belo' title='" + arr[i].dogadjaj + "'>" +
    arr[i].dd1 + "." + arr[i].mm1 + "." + arr[i].yy1.substring(2,4) + " (" + arr[i].mesto + ")" +
    "</td><td class='belo'>" +
    arr[i].naslov +
    "</td><td class='belo'>" +
    arr[i].koliko +
    "</td><td class='belo'>" +
    arr[i].cena +
    "</td><td class='belo'>" +
    arr[i].dd2 + "." + arr[i].mm2 + "." + arr[i].yy2.substring(2,4) + " u " + arr[i].vreme +
    "</td><td class='belo'><input type='button' value='akcija' onclick='rezerv_akcija(" + arr[i].eid + ")'>" +
    "<input type='text' size='2' value='" + arr[i].p + "' id='tx" + arr[i].eid + "'></td></tr>";
  }
  out += "</table>";
  document.getElementById("rezerv_clanova").innerHTML=out;
}

function rezerv_akcija(eid) {
	odakle = "tx" + eid;
	stat = document.getElementById(odakle).value;
	url1 = "http://pozorista.net/np/p_e.php?akcija=estatus&eid=" + eid + "&stat=" + stat;
  var xmlhttp_za_estatus = new XMLHttpRequest();
   //copyToClipboard(url1);
  xmlhttp_za_estatus.onreadystatechange=function() {
   if (xmlhttp_za_estatus.readyState == 4 && xmlhttp_za_estatus.status == 200) {
     aiai = xmlhttp_za_estatus.responseText;
     //outp = analiza_za_ucla(aiai);
     }
  }
  xmlhttp_za_estatus.open("GET", url1, true);
  xmlhttp_za_estatus.send();
}
function uclani_me() {
	rri = document.getElementById('ucl_ime').value;
	while(rri.substr(1,1) == " ") {
		rri = rri.substr(2,rri.length);
	}
	while(rri.substr(rri.length,1) == " ") {
		rri = rri.substr(1,rri.length-1);
	}
	rrj = document.getElementById('ucl_prez').value;
	while(rrj.substr(1,1) == " ") {
		rrj = rrj.substr(2,rrj.length);
	}
	while(rrj.substr(rri.length,1) == " ") {
		rrj = rrj.substr(1,rrj.length-1);
	}
	if (rri.length<3 || rrj.length<3) { alert("potrebno je upisati ime i prezime - pokušajte ponovo"); }
	rrk = document.getElementById('ucl_email').value;
	while(rrk.substr(1,1) == " ") {
		rrk = rrk.substr(2,rrk.length);
	}
	while(rrk.substr(rri.length,1) == " ") {
		rrk = rrk.substr(1,rrk.length-1);
	}
	rrl = document.getElementById('ucl_tel').value;
	while(rrl.substr(1,1) == " ") {
		rrl = rrl.substr(2,rrl.length);
	}
	while(rrl.substr(rri.length,1) == " ") {
		rrl = rrl.substr(1,rrl.length-1);
	}
	url = "http://pozorista.net/np/p_clanovi.php?akcija=zaucla&kao_ime=" + rri + "&kao_prez=" + rrj + "&kao_email=" + rrk + "&kao_tel=" + rrl;
  var xmlhttp_za_ucla = new XMLHttpRequest();
   //copyToClipboard(url);
  xmlhttp_za_ucla.onreadystatechange=function() {
   if (xmlhttp_za_ucla.readyState == 4 && xmlhttp_za_ucla.status == 200) {
     aiai = xmlhttp_za_ucla.responseText;
     outp = analiza_za_ucla(aiai);
     }
  }
  xmlhttp_za_ucla.open("GET", url, true);
  xmlhttp_za_ucla.send();
}

function analiza_za_ucla(response) {
  var arr = JSON.parse(response);
	var out_clbr = 0;
    out_clbr = arr[0].uspeh;
	if(out_clbr == 0) {
		alert("upisivanje nije uspelo - pokušajte ponovo ili pozovite operatera");
	}
	if(out_clbr == 1) {
		alert("članski broj koji ste uneli već postoji u bazi. Ako ste zaboravili svoj članski broj, javite se operateru");
	}
	if(out_clbr>769) {
		alert("čestitamo - učlanili ste se u klub ljubitelja pozorišta. Vaš članski broj je " + out_clbr);
		/*
		ima_neko=1;
		document.getElementById("login_buton").innerHTML="<input type='button' value='log out' id='logout' onclick='izlog(0)'>";
		tekst_dosije="<div id='druga_strana_dosije'></div>";
		document.getElementById("clbroj_txt").value = out_clbr;
		document.getElementById("clbr_span").innerHTML = out_clbr;
		pokazi(5);
		korisnik_ime=arr[0].korisnik_ime;
		korisnik_prezime=arr[0].korisnik_prezime;
		korisnik_email=arr[0].korisnik_email;
		korisnik_ident=arr[0].korisnik_ident;
		korisnik_clbroj=arr[0].korisnik_clbroj; */
	}

		//svi_obrasci_rzrv(1);
		//izmena_dosijea(1);
		//document.getElementById("rezerv_akcija").disabled=true;
		//document.getElementById("dosije_naslovx").style.visibility = "visible";
		//document.getElementById("druga_strana_narudzbenica").style.visibility = "visible";
}

function clan_rezerv2() {
  document.getElementById("karata").innerHTML = prikaz_rezervacija_proces;
  koje = g_korisnik_clbroj;
  url1 = "http://pozorista.net/np/p_e.php?akcija=pr_po_cl&ko=" + koje + "&kako=1";
  var xmlhttp_clan_rezerv2 = new XMLHttpRequest();
  //copyToClipboard(url1);
  xmlhttp_clan_rezerv2.onreadystatechange=function() {
	if (xmlhttp_clan_rezerv2.readyState == 4 && xmlhttp_clan_rezerv2.status == 200) {
	aiai = xmlhttp_clan_rezerv2.responseText;
	outp = analiza_clan_rezerv2(aiai);
	return outp;
	}
  }
  xmlhttp_clan_rezerv2.open("GET", url1, true);
  xmlhttp_clan_rezerv2.send();
}

function analiza_clan_rezerv2(response) {
  var arr = JSON.parse(response);
  var datumq = [];
  var datumqq = [];
	var i = 0;
  var boja = " class=xbelo";
  var bojax = " class=xindigo";
  var out = "<table><tr><td colspan='7' " + bojax + ">rezervacije za članski broj: " + arr[0].clbroj + "</td></tr>";
  out += "<tr><td " + bojax + ">predstava</td><td" + bojax + ">broj</td><td" + bojax + ">cena</td><td" + bojax + ">datum</td><td" + bojax + ">rok važenja</td><td" + bojax + ">u</td><td" + bojax + ">status</td></tr><tr><td" + boja + ">";
  for(i = 0; i < arr.length; i++) {
    predst = predst_po_dgdj(arr[i].sta);
    ii = g_4_id.indexOf(predst * 1);
    nasl = g_4_nasl_dijakr[ii];
    datumq = datum_po_dgdj(arr[i].sta);
    datumqq = ddmmyy(arr[i].kad2);
    out +=
    nasl + "</td><td" + boja + ">" +
    arr[i].koliko + "</td><td" + boja + ">" +
    arr[i].c1 + "</td><td" + boja + ">" +
    datumq[0] + "." + datumq[1] + "." + datumq[2] + "</td><td" + boja + ">";
    datumqq = ddmmyy(arr[i].kad2);
    out += datumqq[0] + "." + datumqq[1] + "." + datumqq[2] + "</td><td" + boja + ">";
    pp = arr[i].p;
    if(pp == 1) {
      boja = " class=xsivo";
      ppp = "podignuto";
    }
    if(pp > 1) {
      boja = " class=xzeleno";
      ppp = "još važi";
    }
    if(pp < 1) {
      boja = " class=xcrveno";
      ppp = "isteklo";
    }
    out += arr[i].vreme + "</td><td" + boja + ">";
    if(i==arr.length-1) {
      out += ppp + "</td></tr></table>";
    } else {
      out += ppp + "</td></tr>";
      boja = " class=xbelo";
      out += "<tr><td" + boja + ">";
    }

  }
	if(document.getElementById("clan_pregled_rezervacija") !== null) {
		document.getElementById("clan_pregled_rezervacija").innerHTML=out;
	} else {
    document.getElementById("pid01").innerHTML=out;
  }

	if(document.getElementById("karata") !== null) {
		document.getElementById("karata").innerHTML = "okončano!";
	}
  //document.getElementById("clan_pregled_rezervacija").innerHTML = out;
  return out;
}

function o_clanu() {
	document.getElementById("pid01").innerHTML=clan_obrazac;
	document.getElementById("clan_obrazac_login").innerHTML=login_obrazac;
	if(g_korisnik_clbroj > 769) {
      document.getElementById("clan_obrazac_ime").innerHTML = g_korisnik_ime + " " + g_korisnik_prezime;
      document.getElementById("clan_obrazac_clbroj").innerHTML = g_korisnik_clbroj;
      if(document.getElementById("mesto_za_logout_dugme") !== null)  {
        document.getElementById("mesto_za_logout_dugme").innerHTML = logout_dugme;
      }
	}
}

function prikazi_ucla() {

	if(document.getElementById("prikazi_ucla_button").title == "prikazi") {
		document.getElementById("clan_obrazac_ucla").innerHTML = ucl_obrazac;
		document.getElementById("prikazi_ucla_button").title = "sakrij";
	} else {
		document.getElementById("clan_obrazac_ucla").innerHTML = "";
		document.getElementById("prikazi_ucla_button").title = "prikazi";
	}

}

function prikazi_rezervacije() {
	var out = "";
	if(g_korisnik_clbroj > 769) {
		if(document.getElementById("clan_pregled_rezervacija") !== null) {
			out = clan_rezerv2();
			//document.getElementById("clan_pregled_rezervacija").innerHTML = out;
		}
	}
}

function uloguj_me() {
  var email = document.getElementById("login_email").value;
  var clbroj = document.getElementById("login_clbroj").value;
  var xmlhttp_cl_login = new XMLHttpRequest();
  if(email.length < 5) {
    alert("niste uneli dovoljno slova!");
  } else {
    url = "http://pozorista.net/np/p_clanovi.php?akcija=uloguj_me&email=" + email + "&clbroj=" + clbroj;
    //copyToClipboard(url);
    xmlhttp_cl_login.onreadystatechange=function() {
    if (xmlhttp_cl_login.readyState == 4 && xmlhttp_cl_login.status == 200) {
      aiai = xmlhttp_cl_login.responseText;
      outp = analiza_clanovi(aiai,9);
      }
    }
    xmlhttp_cl_login.open("GET", url, true);
    xmlhttp_cl_login.send();
  }

}

function izloguj_me() {
  g_korisnik_clbroj = 0;
  g_korisnik_ident = 0;
  g_korisnik_ime = "";
  g_korisnik_prezime = "";
  document.getElementById("ishod_logina").innerHTML = "uspešno ste se izlogovali !";
  document.getElementById("clan_obrazac_ime").innerHTML = "";
  document.getElementById("clan_obrazac_clbroj").innerHTML = "";
  document.getElementById("mesto_za_logout_dugme").innerHTML = "";
}
