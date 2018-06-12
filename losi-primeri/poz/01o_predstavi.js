function predst_po_dgdj(rid) {
  var j = g_2_id.indexOf(rid * 1);
  return g_2_predstava[j];
}

function datum_po_dgdj(rid) {
  var datumq = [];
  var j = g_2_id.indexOf(rid * 1);
  datumq[0] = g_2_dd[j];
  datumq[1] = g_2_mm[j];
  datumq[2] = g_2_yy[j];
  return datumq
}

function prikazi_predst_spisak(e,f) {
  if(e != "") {
    var nadjeno_id = [];
    nadjeno_id = predst_spisak(e,f);
    var izlaz = "";
    izlaz = predst_spisak(e,2);
    if(izlaz == undefined) { izlaz = "nije nađeno"; }
    document.getElementById('predstave_rezultat').innerHTML = izlaz;
    document.getElementById('predstave_rezultat').style.zIndex = '5';
  }
}

function predst_spisak(e,f) {
  if(e != "") {
    var trazeno = e;
    if(trazeno.length > 2) {
      var imali = 0;
      var nasl = "";
      var izlaz = "";
      var nadjeno_id = [];
      var nadjeno_nasl = [];
      trazeno = trazeno.toLowerCase();
    	for( xx = 0; xx < g_4_id.length; xx++ ) {
    		nasl = g_4_nasl_dijakr[xx];
        nasl = nasl.toLowerCase();
    		imali = nasl.search(trazeno);
    		if(imali>-1) {
    			nadjeno_id.push(g_4_id[xx]);
          nadjeno_nasl.push(nasl);
    		}
    	}
      for(xx=0;xx<nadjeno_id.length;++xx) {
        if(f == 2) {
          dodat = "<div><input type='button' value='" + nadjeno_nasl[xx] + "' onclick='prikaz_komentara(" + nadjeno_id[xx] + ",1)'></div>";
        } else {
          dodat = "<div title='" + nadjeno_id[xx] + "' onclick='document.getElementById(" + '"upit_predstava"' + ").value=" + nadjeno_id[xx] + "'>" + nadjeno_id[xx] + " * " + nadjeno_nasl[xx] + "</div>";
        }
        onclick='prikaz_komentara(" + br_pr +	 ",1);'
        izlaz += dodat;
      }
      if(f * 1 == 0) {
        return izlaz;
      }
      if(f * 1 == 2) {
        return izlaz;
      }
      if(f * 1 == 1) {
        return nadjeno_id;
      }
    	//document.getElementById("pidx73").innerHTML = izlaz;
    }
  }
}

function prikazi_akteri_spisak(e,f) {
  if(e != "") {
    var izlaz = "";
    izlaz = akteri_spisak(e,2);
    if(izlaz == undefined) { izlaz = "nije nađeno"; }
    document.getElementById('akteri_rezultat').innerHTML = izlaz;
    document.getElementById('akteri_rezultat').style.zIndex = '5';
  }
}


function akteri_spisak(e,f) {
  var trazeno = e;
  if(trazeno.length > 2) {
    var imali = 0;
    var imeiprez = "";
    var izlaz = "";
    var nadjeno_id = [];
    var nadjeno_ime = [];
    var nadjeno_prez = [];
    trazeno = trazeno.toLowerCase();
    for(xx=0;xx<g_11_id.length;++xx) {
  		imeiprez = g_11_ime[xx] + " " + g_11_prezime[xx];
      imeiprez = imeiprez.toLowerCase();
      imali = imeiprez.search(trazeno);
  		if(imali>-1) {
  			nadjeno_id.push(g_11_id[xx]);
        nadjeno_ime.push(g_11_ime[xx]);
        nadjeno_prez.push(g_11_prezime[xx]);
  		}
  	}
    for(xx=0;xx<nadjeno_id.length;++xx) {
      if(f == 2) {
        dodat = "<div><input type='button' value='" + nadjeno_ime[xx] + " " + nadjeno_prez[xx] + "' onclick='prikaz_aktera(" + nadjeno_id[xx] + ",1)'></div>";
      } else {
        dodat = dodat = "<div title='" + nadjeno_id[xx] + "' onclick='document.getElementById(" + '"upit_akter"' + ").value=" + nadjeno_id[xx] + "'>" + nadjeno_id[xx] + " * " + nadjeno_ime[xx] + " " + nadjeno_prez[xx] + "</div>";
      }
      izlaz += dodat;
    }
    if(f * 1 == 0) {
      return izlaz;
    }
    if(f * 1 == 1) {
      return nadjeno_id;
    }
    if(f * 1 == 2) {
      return izlaz;
    }
  	//document.getElementById("pidx79").innerHTML = izlaz;
  }
}

function unos_veza(veza) {
  var staje = document.getElementById("upit_predstava").value;
  var koje = document.getElementById("upit_akter").value;
  var xmlhttp_veza = new XMLHttpRequest();
  url = g_prefiks + "pozorista.net/np/get_predst_info.php?akcija=novaveza&ko=" + koje + "&sta=" + staje + "&vrsta=" + veza;
  xmlhttp_veza.onreadystatechange=function() {
    if (xmlhttp_veza.readyState == 4 && xmlhttp_veza.status == 200) {
      aiai = xmlhttp_veza.responseText;
      //outp = analiza_clanovi(aiai,1);
    }
  }
  xmlhttp_veza.open("GET", url, true);
  xmlhttp_veza.send();

}

function prikazi_karte_dgx(dgdjid,ktg) {
  var red_redova = [];
	// nadji scenu // prodji kroz karte u kx
  privr = g_2_id.indexOf(dgdjid * 1);
  scena = g_2_mesto[privr * 1];
  sir_polja = "10px";
  if(sirina_broj < 1000) { sir_polja = "6px"; }
  //sort po deff redu
  var i = 0;
  for (x=0;x<g_1_id.length;x++) {
    if(g_1_scena[x] == scena) {
      a = g_1_red[x];
      b = g_1_odred[x];
      if((1 * a) < 10) {a = "0" + a;}
      //if(a < 100) {a = "0" + a;}
      if((1 * b) < 10) {b = "0" + b;}
      //if(b < 100) {b = "0" + b;}
		  red_redova.push(a + "" + b);
      g1od = g_1_od[x];
      g1do = g_1_do[x];
      if((1 * g1od) < 10) {g1od = "0" + g1od;}
      if((1 * g1do) < 10) {g1do = "0" + g1do;}
      g1oddo = g1od + "" + g1do;
      red_redova[i] = red_redova[i] + "" + g1oddo;
      i++;
    }
  }
  red_redova.sort(function(a, b){return a-b});
  out = "<center>";
  var starired = 0;
  for (x=0;x<red_redova.length;x++) {
    red = red_redova[x].substring(0,2) * 1;
    odred = red_redova[x].substring(2,4) * 1;
    mesto1x = red_redova[x].substring(4,6) * 1;
    mesto2x = red_redova[x].substring(6,8) * 1;
    razdvoj = "</td><td style='text-align:center;'>";
//
    izraz = " ||| " + red + "," + odred + " ||| ";
    //
    nizmesta = "";
    if(mesto2x > mesto1x) {
      for (xx=mesto1x;xx<(mesto2x * 1)+1;xx++) {
        nizmesta += "<td style='background-color:#ff7f00' id='" + dgdjid + "_" + red + "_" + odred + "_" + xx + "' title='" + dgdjid + "_" + red + "_" + odred + "_" + xx + "' onclick='klikmesto(this.title)' ondblclick='dblklikmesto(this.title)'>" + "&nbsp;</td>";
      }
    } else {
      for (xx=mesto1x;xx>mesto2x-1;xx--) {
        nizmesta += "<td style='background-color:#ff7f00' id='" + dgdjid + "_" + red + "_" + odred + "_" + xx + "' title='" + dgdjid + "_" + red + "_" + odred + "_" + xx + "' onclick='klikmesto(this.title)' ondblclick='dblklikmesto(this.title)'>" + "&nbsp;</td>";
      }
    }
    if(red != starired) {
      polovina = izraz + "<td>" + nizmesta;
      out += "<center><div><center><table style='display:block; margin:auto;'><tr><td>" + polovina + razdvoj;
    } else {
      polovina = nizmesta + "<td>" + izraz;
      out += polovina + "</td></tr></table></div>";
    }

    starired = red;
    //out += odred + "," + red + "," + mesto1x[x] + "," + mesto2x[x] + "," + razdvoj;
  }
    //
  out += "</center>";
  document.getElementById("stanje_dogadjaja").innerHTML = out;
  potrazi_karte(dgdjid,ktg);
}

function prikazi_karte_dg(dgdjid,ktg) {
  potrazi_karte(dgdjid,ktg);
}

function brisanje_nenum() {
  var xmlhttp_karte_zabrisanje = new XMLHttpRequest();
  dgdjidx = document.getElementById("dgidhid").value;
  limit = document.getElementById("zabrisanje").value;
  odred1 = document.getElementById("vrste").value;
  kkttgg = document.getElementById("dgidhid_ktg").value;
  url = g_prefiks + "pozorista.net/np/kartex.php?akcija=brisanjenenum&dogadjaj=" + dgdjidx + "&limit=" + limit + "&ktg=" + kkttgg + "&odred1=" + odred1;
  copyToClipboard(url);
  xmlhttp_karte_zabrisanje.onreadystatechange=function() {
    if (xmlhttp_karte_zabrisanje.readyState == 4 && xmlhttp_karte_zabrisanje.status == 200) {
      aiai = xmlhttp_karte_zabrisanje.responseText;
      //document.getElementById("pid179").innerHTML = outp;
    }
  }
  xmlhttp_karte_zabrisanje.open("GET", url, true);
  xmlhttp_karte_zabrisanje.send();
}

function prikazikarte(paket,podig,rezerv,neistek,minusjedan) {
  var redovi = [];
  var brojmesta = paket[0].length;
  var podignuto = podig * 1;
  var rezervisano = rezerv * 1;
  var neistek = neistek * 1;
  var minusjedan = minusjedan * 1;
  var ostatak = brojmesta - podignuto;
  var out = "<div>ukupno " + brojmesta + "</div><br />";
  out += "<div>podignuto " + podignuto + "</div><br />";
  out += "<div>rezervisano " + rezervisano + "</div><br />";
  out += "<div>ostalo " + ostatak + "</div><br />";
  out += "<div>još važe " + neistek + "</div><br />";
  out += "<div style='color:red; font-weight: bold;'>slobodno " + (ostatak *1 - neistek *1) + "</div><br />";
  out += "<div>štampano (Daca carica): " + minusjedan + "</div><br />";
  out += "<div>obri&#353;i <input type='text' size='2' id='zabrisanje' value='0'> nenum karata <input type='text' size='3' id='vrste' value='7'> vrste <input type='button' onclick='brisanje_nenum()'></div><br />";
  var brojmestauredu = 0;
  var red = paket[0][0];
  redovi.push(red);
  out += paket[0][0] + ". red, mesta: ";
  for(yy=0;yy<brojmesta;yy++) {
    if(paket[0][yy] != red) {
      red = paket[0][yy];
      redovi.push(red);
      out += "<br />ukupno " + brojmestauredu + "<br /><br />" + paket[0][yy] + ". red, mesta: ";
      brojmestauredu = 0;
    }
    brojmestauredu++;
    out += paket[2][yy] + "(" + paket[1][yy] + "," + paket[3][yy] + ") ";
  }
  out += "<br />ukupno " + brojmestauredu + "<br /><br />" + paket[0][yy] + ". red, mesta: ";
  out += "<br /></div>";
  document.getElementById("pid179").innerHTML = out;
}

function potrazi_karte(dgdjid,ktg) {
  var xmlhttp_karte_kx = new XMLHttpRequest();
  document.getElementById("dgidhid").value = dgdjid;
  document.getElementById("dgidhid_ktg").value = ktg;
  url = g_prefiks + "pozorista.net/np/kartex.php?akcija=kartedogadjaj&dogadjaj=" + dgdjid + "&ktg=" + ktg;
  //copyToClipboard(url);
  xmlhttp_karte_kx.onreadystatechange=function() {
    if (xmlhttp_karte_kx.readyState == 4 && xmlhttp_karte_kx.status == 200) {
      aiai = xmlhttp_karte_kx.responseText;
      outp = analiza_karte_kx(aiai,dgdjid);
      arr = JSON.parse(aiai);
      podig = arr[0].podignuto;
      rezerv = arr[0].rezervisano;
	  neistek = arr[0].neisteklo;
	  minusjedan = arr[0].minusjedan;
      alert(podig);
      prikazikarte(outp,podig,rezerv,neistek,minusjedan);
      //document.getElementById("pid179").innerHTML = outp;
    }
  }
  xmlhttp_karte_kx.open("GET", url, true);
  xmlhttp_karte_kx.send();

}

function analiza_karte_kx(response,dgdjid) {
  var redovix = [];
  var redx = [];
  var odredx = [];
  var mestox = [];
  var statusx = [];
  var arr = JSON.parse(response);
  var i;
  var argum = "";
  for(i=0;i<arr.length;i++) {
    red = arr[i].red;
    redx.push(red);
    odred = arr[i].odred;
    odredx.push(odred);
    mesto = arr[i].mesto;
    mestox.push(mesto);
    status = arr[i].status;
    statusx.push(status);
    /*
    if(status==1) {
      argum = dgdjid + "_" + red + "_" + odred + "_" + mesto;
      document.getElementById(argum).style.backgroundColor = "#8fff8f";
    }
    */
  }
  redovix[0] = redx;
  redovix[1] = odredx;
  redovix[2] = mestox;
  redovix[3] = statusx;
  return redovix;
}

function klikmesto(argum) {
  var rzlt = [];
  var brojac = 0;
  for(i=0;i<argum.length;i++) {
    krktr = argum.substring(i,i+1);
    if(krktr == "_") {
      brojac++;
    } else {
      rzlt[brojac] += krktr + "";
    }
  }
  document.getElementById(argum).style.backgroundColor = "#ff0000";
}

function prikaz_aktera(iid,vrzta) {
  g_akcija = 88;
  var ax = g_11_id.indexOf(iid * 1);
  var aime = g_11_ime[ax];
  var aprezime = g_11_prezime[ax];
  var sadrzaj1 = "";
  var niz_predstava = [];
  var niz_naziva = [];
  var niz_linkova = [];
  var podaci = [];
  var termini_igranja = "";
  var sadrzaj2 = "";
  var sirina_br = screen.width;
  var cinilac = "50%";
	var cinilac2 = "inherit";
  var odv = "";
  if(sirina_br<700) {
    odv = "</tr><tr>";
    cinilac = "200px";
  }
  for(i=0;i<g_12_id.length;i++) {
    if(g_12_akter[i] == iid * 1) {
      if(g_4_id.indexOf(g_12_predstava[i]) != -1) {
        niz_predstava.push(g_12_predstava[i]);
      }
    }
  }
//alert(niz_predstava);
  for(i=0;i<niz_predstava.length;i++) {
    ax = g_4_id.indexOf(niz_predstava[i] * 1);
    niz_naziva.push(g_4_nasl_dijakr[ax]);
    niz_linkova.push("prikaz_komentara(" + niz_predstava[i] + ",1)");
  }
  //alert(niz_naziva);
  sadrzaj1 = "<table>";
  for(i=0;i<niz_predstava.length;i++) {
    sadrzaj1 += "<tr><td onclick='" + niz_linkova[i] + "'>" + niz_naziva[i] + "</td></tr>";
  }
  sadrzaj1 += "</table>";
// izaberi jednu predst random
  var rand = Math.floor(niz_predstava.length * Math.random());
  iiid = niz_predstava[rand];
  //alert(iiid);
  //o_preds = info_p(iiid,1)[1];
  br_pr = iiid + "";
	if(br_pr.length < 4) { br_pr = "0" + br_pr; }
	if(br_pr.length < 4) { br_pr = "0" + br_pr; }
	if(br_pr.length < 4) { br_pr = "0" + br_pr; }
  sadrzaj2 = "<img src='/slike/predstave/big/"+ br_pr + "_01.jpg' width='80%'>";
	sadrzaj2 += "<div><input type='button' value='termini igranja, komentari &#269;lanova Kluba' onclick='prikaz_komentara(" + iiid +	 ",1);'></div>";
//alert(sadrzaj1);
  izlaz = "<table style='text-align:center; width:100%'><tr><td class=xcrno style='width:" + cinilac + "'>";
  izlaz += aime + " " + aprezime + "</td>" + odv;
  izlaz += "<td class=xcrno style='text-align:center; width:" + cinilac + "; height:" + cinilac2 + "';>";
  izlaz += niz_naziva[rand] + "</td></tr><tr>";
  izlaz += "<td class=xzuto style='text-align:left; margin-left:5px; width:" + cinilac + "; height:" + cinilac2 + "';>";
  izlaz += "<b>je akter u predstavama:<br /><br />" + sadrzaj1 + "</b></td>" + odv;
  izlaz += "<td class=xzuto;>";
  izlaz += sadrzaj2;
  izlaz += "</td></tr></table>";
  document.getElementById("pid01").innerHTML = akter_obrazac;
  document.getElementById("slovna_pretraga").innerHTML = slov_pretr;
  document.getElementById("pid01").innerHTML = document.getElementById("pid01").innerHTML + izlaz;
  document.getElementById("tip_div").innerHTML = "";
  //copyToClipboard(izlaz);
}

function prikaz_komentara(iid,vrzta) {
  alert(iid + "," + vrzta);
  g_akcija = 99;
  var podaci = [];
  var termini_igranja = "";
  diid = iid;
  if (iid == 0) {
    diid = xxpredstave[Math.floor(xxpredstave.length * Math.random())];
    if(document.getElementById("hid_pr").value != ".") {
      diid = document.getElementById("hid_pr").value;
    }
    //diid = predst_po_dgdj(diid);
  }
  podaci = info_p(diid,2);
  //alert(diid + " " + vrzta);
  if(((vrzta * 1) == 1) || ((vrzta * 1) == 3) || ((vrzta * 1) == 4)) {
    termini_igranja = na_pred(diid);
  }
  var iiid = g_4_id.indexOf(diid * 1);
  document.getElementById("pid01").innerHTML = predstava_obrazac;
  //document.getElementById("komentar_posalji").title = diid;
  document.getElementById("slovna_pretraga").innerHTML = slov_pretr;
  document.getElementById("naslov_predstave").innerHTML = g_4_nasl_dijakr[iiid] + "<br />" + termini_igranja;
  document.getElementById("akteri_spisak2").innerHTML = podaci[0];
  document.getElementById("mesto_za_sliku").innerHTML = podaci[1];
  //document.getElementById("pid999").innerHTML = kad_se_igra;

  var xmlhttp_komentari = new XMLHttpRequest();
  if(((vrzta * 1) == 1) || ((vrzta * 1) == 4)) {
    url = g_prefiks + "pozorista.net/np/get_predst_info2.php?akcija=komentari_po_predstavi&predstava=" + diid;
  }
  if((vrzta * 1) == 2) {
    url = g_prefiks + "pozorista.net/np/get_predst_info2.php?akcija=komentari_po_komentatoru&komentator=" + iid;
  }
  if((vrzta * 1) == 3) {
    url = g_prefiks + "pozorista.net/np/get_predst_info2.php?akcija=komentari_najnoviji";
  }
  alert(url);
  xmlhttp_komentari.onreadystatechange=function() {
    if (xmlhttp_komentari.readyState == 4 && xmlhttp_komentari.status == 200) {
      aiai = xmlhttp_komentari.responseText;
      if(aiai == "[]") {
        aiai = '[{"odgovor":"-5"}]';
      }
      outp = analiza_komentari(aiai,vrzta,diid);
    }
  }
  xmlhttp_komentari.open("GET", url, true);
  xmlhttp_komentari.send();

}

function analiza_komentari(response,vrzta,diid) {
  var arr = JSON.parse(response);
  var i;
  var dk;
  var dank;
  var meseck;
  var godinak;
  var mink;
  var sekk;
  var hhk;
  var span3 = "3";
  var span4 = "4";
  var prelom = "";
  var span_plus3 = "";
  var span_plus4 = "";
  if(sirina_broj < 1000) {
    span3 = "2";
    span4 = "3";
    prelom = "</tr><tr>";
    span_plus3 = "colspan='2'";
    span_plus4 = "colspan='3'";
  }
  if(((vrzta * 1) == 1) || ((vrzta * 1) == 4)) {
    var out = unos_komentara_obrazac;
    out += "<input type='hidden' id='hid_idpr' value='" + diid + "'>";
	  if(arr[0].odgovor != '-5') {
      out += "<table style='width:100%'><tr><td colspan='" + span3 + "' class=xindigo>komentari &#269;lanova kluba o predstavi " + arr[0].predstava_nasl + "</td></tr><tr><td class=xbelo>";
    }
  }
  if(vrzta == 2) {
	  var out = "<table style='width:100%'><tr><td colspan='" + span3 + "' class=xindigo>komentari komentatora " + '"' + arr[0].komentator_username + '"' + "</td></tr><tr><td class=xbelo>";
  }
  if(vrzta == 3) {
	  var out = "<table style='width:100%'><tr><td colspan='" + span4 + "' class=xindigo>najnoviji komentari</td></tr><tr><td class=xbelo>";
  }
  if(arr[0].odgovor != '-5') {
    for(i=0;i<arr.length;i++) {
      xpredst_id = arr[i].predstava_id;
    	if(vrzta != 1) {
    		out += "<input type='button' value='" + arr[i].predstava_nasl + "' onclick='prikaz_komentara(" + arr[i].predstava_id +	 ",1);'></td><td class=xbelo>";
    	}
      xkomentar_id = arr[i].komentar_id;
      xkomentator_id = arr[i].komentator_id;
     	if(vrzta != 2) {
    		out += "<input type='button' value='" + arr[i].komentator_username + "' onclick='prikaz_komentara(" + arr[i].komentator_id + ",2);'></td><td class=xbelo>";
    	}
      dat_vr_str = arr[i].datum_komentara;
      dk = new Date(dat_vr_str);
      godinak = dk.getFullYear();
      meseck = dk.getMonth() + 1;
      dank = dk.getDate();
      hhk = dk.getHours();
      mink = dk.getMinutes()
      sekk = dk.getSeconds()
      if(vrzta == 1) {
        out += dank + "." + meseck + "." + godinak + " " + hhk + ":" + mink + ":" + sekk + "</td>" + prelom + "<td class=xbelo " + span_plus3 + ">";
      }
      if(vrzta == 2) {
        out += dank + "." + meseck + "." + godinak + " " + hhk + ":" + mink + ":" + sekk + "</td>" + prelom + "<td class=xbelo " + span_plus3 + ">";
      }
      if(vrzta == 3) {
        out += dank + "." + meseck + "." + godinak + " " + hhk + ":" + mink + ":" + sekk + "</td>" + prelom + "<td class=xbelo " + span_plus4 + ">";
      }

      xrang = arr[i].rang;
      vrxta = arr[i].vrsta;
      if(i == arr.length-1) {
        out += arr[i].tekst_komentara + "</td></tr></table>";
      } else {
        out += arr[i].tekst_komentara + "</td></tr><tr><td class=xbelo>";
      }
    }
  }
  if(document.getElementById("pid99") !== null) {
    document.getElementById("pid99").innerHTML = out;
    if((vrzta * 1) == 1) {
      document.getElementById("komentar_posalji").title = diid;
      if(g_korisnik_clbroj != 0) {
        document.getElementById("komentar_clbr").value = g_korisnik_clbroj;
      }
    }
  } else {
	document.getElementById("pid01").innerHTML = out;
    if((vrzta * 1) == 1) {
      document.getElementById("komentar_posalji").title = diid;
      if(g_korisnik_clbroj != 0) {
        document.getElementById("komentar_clbr").value = g_korisnik_clbroj;
      }
    }
  }
}

function posalji_novi_komentar() {
  var test1 = 0;
  var test2 = 0;
  var test3 = 0;komentar_posalji
  document.getElementById("komentar_posalji").value = "sačekajte";
  var pid = document.getElementById("hid_idpr").value;
  var nk = document.getElementById("novi_komentar").value;
  var cb = document.getElementById("komentar_clbr").value;
  var un = document.getElementById("komentar_username").value;
  var inici = document.getElementById("komentator_inic").value;
  if(( cb * 1 > 769 ) && ( cb * 1 < 200000 )) {
    test1 = 1;
  } else {
    alert("unesite svoj &#269;lanski broj!");
  }
  if(un != "username") {
    test2 = 1;
  } else {
    alert("odaberite komentatorsko korisničko ime!");
  }
  if(inici.length == 2) {
    test3 = 1;
  } else {
    alert("unesite svoje inicijale!");
  }
  if(test1 == 0) {
    alert("clanski broj!");
  }
  if(nk.length < 8) {
    alert("komentar treba da ima bar 8 slova");
  } else {
    if((test1 == 1) && (test2 == 1) && (test3 == 1)) {
      var xmlhttp_novi_komentar = new XMLHttpRequest();
      url = g_prefiks + "pozorista.net/np/get_predst_info.php?akcija=upis_novog_komentara&predstava=" + pid + "&komentator=" + un + "&clbr=" + cb + "&inic=" + inici + "&tekstkomentara=" + nk;
      xmlhttp_novi_komentar.onreadystatechange=function() {
        if (xmlhttp_novi_komentar.readyState == 4 && xmlhttp_novi_komentar.status == 200) {
          aiai = xmlhttp_novi_komentar.responseText;
          outp = analiza_novi_komentar(aiai,diid);
        }
      }
      xmlhttp_novi_komentar.open("GET", url, true);
      xmlhttp_novi_komentar.send();
    }
  }
}

function analiza_novi_komentar(response,diid) {
  document.getElementById("komentar_posalji").value = "posalji";
  var arr = JSON.parse(response);
  var odgovor = arr[0].odgovor;
  if(odgovor == '-1') {
    alert("pogre&#353;an &#269;lanski broj!");
  }
  if(odgovor == '-2') {
    alert("inicijali ne odgovaraju &#269;lanskom broju!");
  }
  if(odgovor * 1 > 0) {
    aaaa = 'http://pozorista.net' + '/?pr=' + diid;
    window.location.assign(aaaa);
  }
}

function info_p(rid,sw) {
  alert("***" + rid);
  var akteri = [];
	var obj_naziv = "";
  /*
	if(dgdj_info != 0) {
	   obj_naziv = "t" + dgdj_info;
	}
  */
	dgdj_info = rid * 1;
	obj_naziv = "t" + rid;
	if(g_obj_naziv != "xxx") {
		if(document.getElementById(g_obj_naziv) !== null) {
			document.getElementById(g_obj_naziv).innerHTML = "";
		}
	}

	var sadrzaj = [];
  var xsadrzaj = [];

	var sadrzaj1 = "";
	var sadrzaj2 = "";
	var sirina_br = screen.width;
  var odv = "";
	//var clspn = "";
  var cinilac = "50%";
	var cinilac2 = "inherit";
  var errst = "onError=" + String.fromCharCode(34) + "this.onerror=null;this.src='/tmp/magritte2.jpg';" + String.fromCharCode(34);
  if(sirina_br<700) {
    odv = "</tr><tr>";
    cinilac = "200px";
  }
	var br_pr = predst_po_dgdj(rid);
  if(sw==2) {
    br_pr = rid;
  }
	akteri = sve_o_predstavi(br_pr,2);
	sadrzaj1 = "<table>";
	mi = akteri[3].indexOf(2);
	if(mi != -1) {
		sadrzaj1 += "<tr><td style='font-style: italic;'>autor:" + "</td><td onclick='prikaz_aktera(" + akteri[0][mi] + ",1)' style='font-weight: normal;' title='klikom dobijete spisak predstava u kojima akter učestvuje'>" +  akteri[1][mi] + " " + akteri[2][mi] + "</td></tr>";
	}
	mi = akteri[3].indexOf(3);
	if(mi != -1) {
		sadrzaj1 += "<tr><td style='font-style: italic;'>reditelj:" + "</td><td onclick='prikaz_aktera(" + akteri[0][mi] + ",1)' style='font-weight: normal;' title='klikom dobijete spisak predstava u kojima akter učestvuje'>" +  akteri[1][mi] + " " + akteri[2][mi] + "</td></tr>";
	}

	for(mi=0;mi<akteri[0].length;mi++) {
		if(akteri[3][mi] == 1) {
			sadrzaj1 += "<tr><td style='font-style: italic;'>igra:" + "</td><td onclick='prikaz_aktera(" + akteri[0][mi] + ",1)' style='font-weight: normal;' title='klikom dobijete spisak predstava u kojima akter učestvuje'>" +  akteri[1][mi] + " " + akteri[2][mi] + "</td></tr>";
		}
	}
  var index_pr = g_4_id.indexOf(br_pr * 1);
  var pr_rod = g_4_rod[index_pr * 1];
  sadrzaj1 += "<tr><td style='font-style: italic;'><br /><br />vrsta: " + pr_rod + "</td></tr>";
	sadrzaj1 += "</table>";

	//sadrzaj1 = akteri;
  alert("+++" + br_pr);
	br_pr = br_pr + "";
  alert(br_pr);
	if(br_pr.length < 4) { br_pr = "0" + br_pr; }
	if(br_pr.length < 4) { br_pr = "0" + br_pr; }
	if(br_pr.length < 4) { br_pr = "0" + br_pr; }
  alert("+++" + br_pr);
	sadrzaj2 = "<img  " + errst + " src='/slike/predstave/big/"+ br_pr + "_01.jpg' width='80%'>";
	sadrzaj2 += "<div><input type='button' value='termini igranja, komentari &#269;lanova Kluba' onclick='prikaz_komentara(" + br_pr * 1 +	 ",1);'></td><td class=xbelo></div>";
  alert(sadrzaj2);
  for(i=1;i<5;i++) {
    sadrzaj[i] = "<img " + errst + " src='/slike/predstave/big/1851_0"+ i + ".jpg' width='80%'>" ;
  }
  izlaz = "<table style='margin:auto; text-align:center; width:100%'><tr><td style='margin:auto; width:" + cinilac + "'>";
  izlaz += sadrzaj1;
  izlaz += "</td>" + odv + "<td style='overflow:scroll; margin:auto; text-align:center; width:" + cinilac + "; height:" + cinilac2 + "';>";
  izlaz += sadrzaj2;
  izlaz += "</tr></table>";
  //g4i = g_4_id.indexOf(br_pr * 1);
  //izlaz += "<table style='margin:auto; text-align:center; width:100%'><tr><td class=xzuto>" + g_4_info[g4i] + "</td></tr></table>";
  if(document.getElementById(obj_naziv) !== null) {
    document.getElementById(obj_naziv).innerHTML = izlaz;
  }
	g_obj_naziv = obj_naziv;
  xsadrzaj[0] = sadrzaj1;
  xsadrzaj[1] = sadrzaj2;
  //alert(br_pr);
  return xsadrzaj;
}

function na_pred(pr) {

	var boja = " class=xbelo";
	var i = 0;
	var j = 0;
	var indikator = -1;
	var u_vremenu = 0;
	var ddatumm = "";
  var naslov = "";
  var out = "";
  var red0 = [];
  var jj = g_4_id.indexOf(pr * 1,i);
  naslov = g_4_nasl_dijakr[jj];
	while(j != -1) {
		j = g_2_predstava.indexOf(pr * 1,i);
		ddatumm = ddmmyy(g_2_dd[j] + "." + g_2_mm[j] + "." + g_2_yy[j]);
		u_vremenu = proslo(ddatumm);
		indikator = u_vremenu;
		i = j+1;
    if(indikator > -1) {
      red0.push(j);
    }
	}

  if(red0.length == 0) {
    out += "<table style='width:100%'><tr><td colspan='3' class=xcrno>predstavu nemamo na repertoaru u narednom periodu</td></tr>";
  } else {
    out = "<table style='width:100%'><tr><td colspan='3' class=xcrno>predstoje&#263;i termini igranja</td></tr>";
    var kolikox = 0;
    for(xz=0;xz<red0.length;xz++) {
      j = red0[xz];
  		dddd = g_2_dd[j];
  		mmmm = g_2_mm[j];
  		yyyy = g_2_yy[j];
  		jjj = g_5_id.indexOf(g_2_mesto[j]);
      strsc1 = g_5_skr_kuca[jjj];
  		strsc2 = g_5_skr_scena[jjj];
  		trkac = 0;
  		ccx = g_3_dogadjaj.lastIndexOf(g_2_id[j]);
  		//if(g_2_status[j] == 0)
  		while(trkac<=ccx) {
        boja = " class=xbelo";
        cc = g_3_dogadjaj.indexOf(g_2_id[j],trkac);
        disbl = "Popup_predst_menu";
  			razlog = "";
  			dell = "";
  			delll = "";
  			kolikox++;
  			if(g_3_status[cc * 1] == -1) {
  				disbl = "";
  				razlog = "<span class=crventekst>rasprodato</span> - ";
  				dell = "";
  				delll = "";
  				boja = " class=xsivkasto";
  			}
  			if(g_3_status[cc * 1] == -2) {
  				disbl = "";
  				razlog = "<span class=crventekst>otkazano</span> - ";
  				dell = "";
  				delll = "";
  				boja = " class=xsivkasto";
  			}
  			str_ktg = g_3_ktg[cc];
  			eff_cena = g_3_sapopustom[cc];
  			minxxx = g_2_min[j];
  			if(g_2_min[j] * 1 == 0) { minxxx = "00"; }
  			jjj = g_5_id.indexOf(g_2_mesto[j]);
  			strsc1 = g_5_skr_kuca[jjj];
  			strsc2 = g_5_skr_scena[jjj];
        str_punacena = g_3_punacena[cc];
        str_sapopustom = g_3_sapopustom[cc];
  			if(str_punacena == str_sapopustom) { str_punacena = ""; }
  			out += "<tr><td" + boja + ">" +
  		  dddd + "." + mmmm +  ", " + strsc1 +  " - " + strsc2 +
  			" u " + g_2_hh[j] + ":" + minxxx +
  		  "</td><td title='" + g_2_id[j] + "' onclick='info_p(this.title)'" + boja + "><a href='#' data-rel='popup' class='ui-btn ui-btn-inline ui-corner-all' style='font-size:16px; margin:auto;'>info</a>" +
  			"</td><td" + boja + "><a href='#" + disbl + "' data-rel='popup' class='ui-btn ui-btn-inline ui-corner-all' class='mx' onclick='izbor(this.title," + str_ktg + ","+ eff_cena + ");' data-transition='slide' title='" + g_2_id[j] + "'>" +
  		  razlog + dell + naslov + " <s>" + str_punacena + "</s> " + str_sapopustom + "!" + delll +
  		  "</a></td></tr><tr><td colspan='3' class=xindigo id='t" + g_2_id[j] + "'></td></tr>";
  			trkac = cc + 1;
  			boja = "";
      }

    }
    out += "</table>";
    out = out.replace(/<tr><td><tr>/g, "<tr>");

  }
  document.getElementById("pid01").innerHTML = out;
  //copyToClipboard(out);
  return out;
}

function ocisti_rez(did) {
  url = g_prefiks + "pozorista.net/np/kartex.php?akcija=ponisti_istekle&sta=" + did;
  var xmlhttp_ocisti_rez = new XMLHttpRequest();
  xmlhttp_ocisti_rez.onreadystatechange=function() {
    if (xmlhttp_ocisti_rez.readyState == 4 && xmlhttp_ocisti_rez.status == 200) {
      aiai = xmlhttp_ocisti_rez.responseText;
      outp = analiza_novapredst(aiai);
    }
  }
  xmlhttp_ocisti_rez.open("GET", url, true);
  xmlhttp_ocisti_rez.send();
}

function unesi_novu_predst() {
  var nasl1= document.getElementById("nasl_nove_predstave").value;
  var nasl2= document.getElementById("nasl_nove_predstave_orig").value;
  var nasl3= document.getElementById("nasl_nove_predstave_yuscii").value;
  var nvrsta= document.getElementById("nova_predstava_vrsta").value;
  var na= document.getElementById("nova_predstava_a").value;
  var nscena= document.getElementById("nova_predstava_scena").value;
  var nlink= document.getElementById("nova_predstava_link").value;
  var nsvrta= document.getElementById("nova_predstava_svrta").value;
  var nrod= document.getElementById("nova_predstava_rod").value;
  url = g_prefiks + "pozorista.net/np/get_predst_info.php?akcija=novap&nasl1=" + nasl1 + "&nasl2=" + nasl2 + "&nasl3=" + nasl3 + "&nvrsta=" + nvrsta + "&na=" + na + "&nscena=" + nscena + "&nlink=" + nlink + "&nsvrta=" + nsvrta + "&nrod=" + nrod;
  copyToClipboard(url);
  var xmlhttp_novapredst = new XMLHttpRequest();
  xmlhttp_novapredst.onreadystatechange=function() {
    if (xmlhttp_novapredst.readyState == 4 && xmlhttp_novapredst.status == 200) {
      aiai = xmlhttp_novapredst.responseText;
      outp = analiza_novapredst(aiai);
    }
  }
  xmlhttp_novapredst.open("GET", url, true);
  xmlhttp_novapredst.send();
}

function analiza_novapredst(response) {
  var arr = JSON.parse(response);
  var odgovor = arr[0].odgovor;
  alert(odgovor);
  document.getElementById("upit_predstava").innerHTML = odgovor;
}

function unesi_novog_aktera() {
  var ime= document.getElementById("ime").value;
  var prezime= document.getElementById("prezime").value;
  var ime_orig= document.getElementById("ime_orig").value;
  var prezime_orig= document.getElementById("prezime_orig").value;
  var god_rodj= document.getElementById("god_rodj").value;
  var stat= document.getElementById("stat").value;
  url = g_prefiks + "pozorista.net/np/get_predst_info.php?akcija=novia&nasl1=" + ime + "&nasl2=" + prezime + "&nasl3=" + ime_orig + "&nasl4=" + prezime_orig + "&god=" + god_rodj + "&stat=" + stat;
  copyToClipboard(url);
  var xmlhttp_noviakter = new XMLHttpRequest();
  xmlhttp_noviakter.onreadystatechange=function() {
    if (xmlhttp_noviakter.readyState == 4 && xmlhttp_noviakter.status == 200) {
      aiai = xmlhttp_noviakter.responseText;
      outp = analiza_noviakter(aiai);
    }
  }
  xmlhttp_noviakter.open("GET", url, true);
  xmlhttp_noviakter.send();
}

function analiza_noviakter(response) {
  var arr = JSON.parse(response);
  var odgovor = arr[0].odgovor;
  alert(odgovor);
  document.getElementById("upit_akter").innerHTML = odgovor;
}
