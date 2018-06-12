function mob_akcija(dif,idi) {
  if(g_akcija == 11) {
    g_datum_unix = g_datum_unix * 1  + dif;
    dd = dan(g_datum_unix,1);
    mm = dan(g_datum_unix,2);
    yy = dan(g_datum_unix,3);
    //dd = dd * 1  - dif;
    na_dan(dd,mm+1,yy);
  }
    //alert(g_dd) + "*****";
  if(g_akcija == 22) {
    for(ii=0;ii<red_scena.length;++ii) {
      c = red_scena[ii] % 1000;
      sledeci = (ii * 1  + red_scena.length + dif) % red_scena.length;
      if(c == g_scen_id) {
        sc = red_scena[sledeci] % 1000;
        break;
      }
    }
    var d = new Date();
		mm = 1 + d.getMonth();
    na_sceni(sc,mm,2);
  }

    //kalendar_akcija_rpt(g_dd,g_mm,g_yy);
}

function proba1() {
  alert(g_akcija);
  var d = new Date("06/10/2016");
  var dd = new Date(d.valueOf());
  var ddd = new Date(dd.toString());
  var dddd = new Date(ddd.valueOf() + 24 * 3600 * 1000);
  //d = Date.parse("6" + String.fromCharCode(47) + "9" + String.fromCharCode(47) + "2016");
  alert(d);
  //dd = d.valueOf() + 24 * 3600 * 1000;
  alert(dd);
  alert(ddd);
  alert(dddd);
  alert(d.toString());
  alert(dd.toString());
  alert(ddd.toString());
  alert(dddd.toString());
  alert(d.valueOf());
  alert(dd.valueOf());
  alert(ddd.valueOf());
  alert(dddd.valueOf());
  //d = Date.parse(d);
  //alert(d.getUTCDate() + 1); + 24 * 3600 * 1000
  //alert(d.getMonth());
  //alert(d.getUTCFullYear());
}

function proba3() {
  var ddd = new Date();
	var hxx = ddd.getHours();
	var xxx = ddd.getDay();
	var mxx = ddd.getMonth();
	var dxx = ddd.getDate();
	var txx = ddd.getTime();
  var j = g_2_id.indexOf(100291);
  datumunix = g_2_datum_unix[j];
  datumunix2 = parseInt((txx + 2 * 3600000) / (24 * 3600000));
  alert(xxx);
  alert(datumunix);
  alert(datumunix2);
	//alert(ucl_obrazac);
	/*
  var ddatumm = [];
  strx = document.getElementById("datum_b").value;
  ddatumm = ddmmyy(strx);
  alert(ddatumm[0] + "*******");*/
  //window.scroll(0,findPos(document.getElementById("ovde")));
}

function provera_ver() {
  var svakog_sata = setInterval(osvez, 600000);
}

function odredi_g_verz() {
  var xmlhttp3_ver = new XMLHttpRequest();
  url = "http://pozorista.net/np/get_rep.php?akcija=proveri_verziju";
  xmlhttp3_ver.onreadystatechange=function() {
  	if (xmlhttp3_ver.readyState == 4 && xmlhttp3_ver.status == 200) {
      //alert("!");
  		aiai = xmlhttp3_ver.responseText;
      outp = analiza_verz(aiai);
      g_verz = outp;
  	}
    }
  xmlhttp3_ver.open("GET", url, true);
  xmlhttp3_ver.send();

  var xmlhttp4_ver = new XMLHttpRequest();
  url = "http://www.pozorista.net/np/get_rep.php?akcija=proveri_verziju";
  xmlhttp4_ver.onreadystatechange=function() {
  	if (xmlhttp4_ver.readyState == 4 && xmlhttp4_ver.status == 200) {
      //alert("!");
  		aiai = xmlhttp4_ver.responseText;
      outp = analiza_verz(aiai);
      g_verz = outp;
  	}
    }
  xmlhttp4_ver.open("GET", url, true);
  xmlhttp4_ver.send();
}

function osvez() {
  radno_vreme();
  var t_verz = 0;
  var xmlhttp2_ver = new XMLHttpRequest();
  url = g_prefiks + "pozorista.net/np/get_rep.php?akcija=proveri_verziju";
  //copyToClipboard(url);
  xmlhttp2_ver.onreadystatechange = function() {
	if (xmlhttp2_ver.readyState == 4 && xmlhttp2_ver.status == 200) {
		aiai = xmlhttp2_ver.responseText;
    outp = analiza_verz(aiai);
    t_verz = outp;
    //alert(g_verz);
    //alert(t_verz);
    if(t_verz != g_verz) {
      location.reload(true);
    }
}
	}
  xmlhttp2_ver.open("GET", url, true);
  xmlhttp2_ver.send();
}

function analiza_verz(vrz) {
  //alert("!");
  var arr = JSON.parse(vrz);
  //alert(arr[0].infover + "*");
  return arr[0].infover;
}

function proba2() {
  alert(verzija());
  //naslovna();
  //red_spec_cena(25383,2);
  var dat_niz = [];
  dat_niz = sledeci_dan(2,9,2016,5,-1);
  alert(dat_niz);
  //izbor(24521);
  //alert(document.getElementById("predst_menu").innerHTML);
}

function verzija() {
  var xmlhttp_ver = new XMLHttpRequest();
  url = g_prefiks + "pozorista.net/np/get_rep.php?akcija=proveri_verziju";
  copyToClipboard(url);
  xmlhttp_ver.onreadystatechange=function() {
    if (xmlhttp_ver.readyState == 4 && xmlhttp_ver.status == 200) {
      aiai = xmlhttp_ver.responseText;
      outp = analiza_ver(aiai);
      g_verz = outp;
      return outp;
    }
  }
  xmlhttp_ver.open("GET", url, true);
  xmlhttp_ver.send();
/*
  var xmlhttp_ver2 = new XMLHttpRequest();
  url2 = "http://www.pozorista.net/np/get_rep.php?akcija=proveri_verziju";
  xmlhttp_ver2.onreadystatechange=function() {
    if (xmlhttp_ver2.readyState == 4 && xmlhttp_ver2.status == 200) {
      aiai = xmlhttp_ver2.responseText;
      outp = analiza_ver(aiai);
      g_verz = outp;
      return outp;
    }
  }
  xmlhttp_ver2.open("GET", url2, true);
  xmlhttp_ver2.send();*/
}


/*
 function izbor(r_id) {

   document.getElementById("rezervacija").innerHTML=r_id;
   j = g_2_id.indexOf(r_id * 1);
   k = g_4_id.indexOf(g_2_predstava[j] * 1);
   document.getElementById("o_predstavi").innerHTML=g_4_nasl_dijakr[k];// g_4_nasl_dijakr g_4_id
   document.getElementById("slike").innerHTML="<img src='/slike/predstave/big/" + g_2_predstava[j] + "_01.jpg' width='60%'>";
   document.getElementById("karata").innerHTML="naručujem <input type='text' id='txt_broj_ul' size='3'> ulaznica <input type='button' id='button_rzrv' onclick='clan_rezerv();' value='naruči'>";
   if(g_korisnik_ident > 0) {
     document.getElementById("identifikacija").innerHTML=g_korisnik_clbroj;
   } else {
     document.getElementById("identifikacija").innerHTML=unos_clbroja;
     document.getElementById("slike").innerHTML="";
     document.getElementById("karata").innerHTML="";
   }
window.scroll(0,findPos(document.getElementById("ovde")));
   //document.getElementById("predst_menu").innerHTML=rezerv_menu;
 }
*/

function kontr() {
}

function vracanje() {
  var visina = window.screenY;
  alert(visina);
  if(visina > 1400) {
    window.scrollTo(0,1400);
  }
}

function pretraga_lista() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
/*
*/
