function ceo_predst_info(di,dx) {
  if(ucitan_predst_info == 0) {
  var xmlhttp_cpi = new XMLHttpRequest();
  url = "http://pozorista.net/np/get_predst_info.php?akcija=-103";
  xmlhttp_cpi.onreadystatechange=function() {
   if (xmlhttp_cpi.readyState == 4 && xmlhttp_cpi.status == 200) {
     aiai = xmlhttp_cpi.responseText;
     return analiza_cpi(aiai,di,dx);
   }
  }
  xmlhttp_cpi.open("GET", url, true);
  xmlhttp_cpi.send();

  var xmlhttp_cpi2 = new XMLHttpRequest();
  url2 = "http://www.pozorista.net/np/get_predst_info.php?akcija=-103";
  xmlhttp_cpi2.onreadystatechange=function() {
   if (xmlhttp_cpi2.readyState == 4 && xmlhttp_cpi2.status == 200) {
     aiai = xmlhttp_cpi2.responseText;
     return analiza_cpi(aiai,di,dx);
   }
  }
  xmlhttp_cpi2.open("GET", url2, true);
  xmlhttp_cpi2.send();
  }
}

function analiza_cpi(response,di,dx) { // dx odvaja slucajeve kad je prosledjen id/r i id/predstave
  var arr = JSON.parse(response);
  var i;
  for(i = 0; i < arr.length; i++) {
    switch (arr[i].kls) {
      case "11":
        g_11_id.push(parseInt(arr[i].k1id));
        g_11_ime.push(arr[i].k1i);
        g_11_prezime.push(arr[i].k1p);
        break;
      case "12":
        g_12_id.push(parseInt(arr[i].k2id));
        g_12_predstava.push(parseInt(arr[i].k2pr));
        g_12_akter.push(parseInt(arr[i].k2a));
        g_12_veza.push(parseInt(arr[i].k2v));
        break;
    }
  }
  dii = g_2_id.indexOf(parseInt(di));
  pi = g_2_predstava[dii];
  djj = g_4_id.indexOf(pi);
	if (dx==2) {
		djj = g_4_id.indexOf(parseInt(di));
		pi = di;
	}
  pn = g_4_nasl_dijakr[djj];
  ucitan_predst_info = 1;
  return svi_paseri(pi);
}

function sve_o_predstavi(di,dx) {//preko id.pred dx=2, preko id.r dx=1
  var svp = [];
  if(ucitan_predst_info == 0) { // ovo nije razreseno
    return ceo_predst_info(di,dx);
  } else {
    svp = svi_paseri(di);
    return svp;
  }
}

function svi_paseri(pi) {
  pi = pi * 1;
  var akter_id = [];
  var akter_ime = [];
  var akter_prezime = [];
  var akter_uloga = [];
  var paket = [];
  paket[0] = akter_id;
  paket[1] = akter_ime;
  paket[2] = akter_prezime;
  paket[3] = akter_uloga;
  d10 = g_12_predstava.lastIndexOf(parseInt(pi));
  trkac = 0;
  trkac2 = 0;
  while(trkac<=d10) {
    d1 = g_12_predstava.indexOf(parseInt(pi),trkac);
    akter_id[trkac2] = g_12_akter[d1];
    akter_i = g_11_id.indexOf(parseInt(akter_id[trkac2]));
    akter_ime[trkac2] = g_11_ime[akter_i];
    akter_prezime[trkac2] = g_11_prezime[akter_i];
    akter_uloga[trkac2] = g_12_veza[d1];
    trkac = d1 + 1;
    trkac2 ++;
  }
  return paket;
}
/*
function ceo_rep() {
  alert("neko me startovao");
  var xmlhttp_cr = new XMLHttpRequest();
  url = "http://pozorista.net/np/get_rep.php?akcija=1000";

  xmlhttp_cr.onreadystatechange=function() {
   if (xmlhttp_cr.readyState == 4 && xmlhttp_cr.status == 200) {
     aiai = xmlhttp_cr.responseText;
   outp = analiza_rep(aiai);
 }
}
xmlhttp_cr.open("GET", url, true);
xmlhttp_cr.send();
}

function analiza_rep(response) {
  var arr = JSON.parse(response);
  var i;
  var out = "<table>";
  for(i = 0; i < arr.length; i++) {
    g_rep_id.push(arr[i].rep_id);
    g_rep_predst_id.push(arr[i].rep_predst_id);
    g_rep_hh.push(arr[i].rep_hh);
    g_rep_mm.push(arr[i].rep_mm);
    g_rep_c1.push(arr[i].rep_c1);
    g_rep_c2.push(arr[i].rep_c2);
    g_rep_c3.push(arr[i].rep_c3);
    g_rep_predst_naziv.push(arr[i].rep_predst_naziv);
    g_rep_scen_id.push(arr[i].rep_scen_id);
    g_rep_scena_naziv_kuce.push(arr[i].rep_scena_naziv_kuce);
    g_rep_scena_naziv_scene.push(arr[i].rep_scena_naziv_scene);
    g_rep_scena_skr_kuca.push(arr[i].rep_scena_skr_kuca);
    g_rep_scena_skr_scena.push(arr[i].rep_scena_skr_scena);

    g_rep_datum_unix.push(arr[i].rep_datum_unix);
  }
  alert(g_rep.g_rep_id[99]);
  alert(g_rep.g_rep_predst_id[99]);
  alert(g_rep.g_rep_datum_unix[99]);
}
*/
/*
function prikazi_scene(xi) {
  for(i=0;i<g_5_id.length;i++) {
    if(g_5_kuca[i] == xi * 1) {
      if(g_5_a[i] == 4) {
        naziv_taba = "sc" + g_5_id[i];
        docm = document.getElementById(naziv_taba);
        docm.style.zIndex = docm.style.zIndex * (-1);
      }
    }
  }
}
*/
function prikazi_scene(xi) {
  if(document.getElementById("hid_div").value!= ".") {
    naziv_preth_diva = document.getElementById("hid_div").value;
    docm = document.getElementById(naziv_preth_diva);
    docm.style.zIndex = (-7);
  }
  naziv_diva = "div" + xi;
  docm = document.getElementById(naziv_diva);
  docm.style.zIndex = docm.style.zIndex * (-1);
  document.getElementById("hid_div").value = naziv_diva;
}

function zatvori_scene(xi) {
  for(i=0;i<g_5_id.length;i++) {
    if(g_5_kuca[i] == xi * 1) {
      if(g_5_a[i] == 4) {
        naziv_taba = "sc" + g_5_id[i];
        docm = document.getElementById(naziv_taba);
        docm.style.zIndex = '-2';
      }
    }
  }
}

function zatvori_scenu(xi) {
  naziv_taba = "sc" + xi;
  docm = document.getElementById(naziv_taba);
  docm.style.zIndex = '-2';
}

function scene_listic(xi) {
  // idovi i nazivi scena po rb
  // g_5_naziv_kuce[jjj] g_5_naziv_scene[jjj] g_5_id.indexOf(g_2_mesto[j])
  var out = "<table>";
  var kcn = 0;
  var kcs = 0;
  var scenex = [];
  var l_kuce = [];
  var l_scene = [];
  //alert(red_scena.length);
  for(x=0;x<red_scena.length;x++) {
    c = red_scena[x] % 1000;
    jjj = g_5_id.indexOf(c);
    kcn = g_5_kuca[jjj];
    l_kuce.push(kcn);
    l_scene.push(g_5_id[jjj]);
  }
  l_kuce.push(-7);
  l_scene.push(-7);
  for(x=0;x<red_scena.length;x++) {
    c = red_scena[x] % 1000; // 0 rb 0 id - izdvaja id
    jjj = g_5_id.indexOf(c);
    strsc1 = g_5_naziv_kuce[jjj];
    strsc2 = g_5_naziv_scene[jjj];
    strsc3 = g_5_id[jjj];
    kcn = g_5_kuca[jjj];
    mm = 9; // mesec????????
    if(xi == 1) {
      //izdvojiti kuce sa 2+ scene
      if(l_kuce[x] == l_kuce[x+1]) {
        out +=
        "<tr><td id='kc" + g_5_kuca[jjj] + "' onmouseover='prikazi_scene(" + g_5_kuca[jjj] + ")' class=xindigo><input type='button' onmouseover='prikazi_scene(" + g_5_kuca[jjj] + ")' onclick='na_sceni(" + c + "," + mm + ",1)' value='" + strsc1 + "'></td></tr>";
        out += "<script>$('#kc" + g_5_kuca[jjj] + "').on('tap',function(){prikazi_scene(" + g_5_kuca[jjj] + ");});</script>";
        ekstenzija = "<tr><td><div style='position:absolute' id='div" + g_5_kuca[jjj] + "'><table>";
        l_kuca = l_kuce[x];
        y = x;
        while(l_kuce[y] == l_kuca) {
          cc = red_scena[y] % 1000;
          jjjj = g_5_id.indexOf(cc);
          strsc22 = g_5_naziv_scene[jjjj];
          ekstenzija += "<tr><td style='position:inherit' id='sc" + g_5_id[jjjj] + "' class=xindigo7><input type='button' onclick='na_sceni(" + c + "," + mm + ",2)' value='" + " - -  " + strsc22 + "'></td></tr>";
          y++;
        }
        ekstenzija += "</table></div></td></tr>";
        out += ekstenzija;
        dmesto = "div" + g_5_kuca[jjj];
        scenex.push(dmesto);
      } else if(l_kuce[x] == l_kuce[x-1]) {
        xi = xi;
      } else {
        out +=
        "<tr><td id='kc" + g_5_kuca[jjj] + "' class=xindigo><input type='button' onclick='na_sceni(" + c + "," + mm + ",1)' value='" + strsc1 + "'></td></tr>";
      }
    }
/*
    {
      if(kcs == kcn) {
        out +=
        "<tr><td style='position:inherit' id='sc" + g_5_id[jjj] + "' onmouseover='alert(this.style.zIndex + this.id)' class=xindigo7><input type='button' onclick='na_sceni(" + c + "," + mm + ",2)' value='" + " - -  " + strsc2 + "'></td></tr><tr><td>";
      }  else {
        out +=
        "<tr><td id='kc" + g_5_kuca[jjj] + "' onmouseover='prikazi_scene(" + g_5_kuca[jjj] + ")' class=xindigo><input type='button' onclick='na_sceni(" + c + "," + mm + ",1)' value='" + strsc1 + "'></td></tr>" +
        "<tr><td style='position:absolute' id='sc" + g_5_id[jjj] + "' onmouseover='alert(this.style.zIndex + this.id)' class=xindigo7><input type='button' onclick='na_sceni(" + c + "," + mm + ",2)' value='" + " - -  " + strsc2 + "'></td></tr><tr><td>";
        out += "<script>$('#kc" + g_5_kuca[jjj] + "').on('tap',function(){prikazi_scene(" + g_5_kuca[jjj] + ");});</script>";
      }
      dmesto = "sc" + g_5_id[jjj];
      scenex.push(dmesto);

    }
    */
    if(xi == 2) {
      if(kcs == kcn) {
        out +=
        "<tr><td class=xindigo><input type='button' onclick='nax_sceni(" + strsc3 + ")' value='" + " - -  " + strsc2 + "'>" +
        "<input type='button' onclick='prikazi_stanje_sc(" + strsc3 + ")' value='ukup'></td></tr><tr><td>";
      }  else {
        out +=
        "<tr><td class=xindigo><input type='button' onclick='nax_sceni(" + strsc3 + ")' value='" + strsc1 + "'><input type='button' onclick='prikazi_stanje_sc(" + strsc3 + ")' value='ukup'></td></tr><tr>" +
        "<td class=xindigo><input type='button' onclick='nax_sceni(" + strsc3 + ")' value='" + " - -  " + strsc2 + "'><input type='button' onclick='prikazi_stanje_sc(" + strsc3 + ")' value='ukup'></td></tr><tr><td>";
      }

    }
    if(xi == 3) {
      if(kcs == kcn) {
        out +=
        "<tr><td class=body_01 onclick='naxx_sceni(" + c + "," + mm + ",2)'>" + " * " + strsc2 + "</td></tr><tr><td>";
      }  else {
        out +=
        "<tr><td class=body_01 onclick='naxx_sceni(" + c + "," + mm + ",2)'>" + strsc1 + "</td></tr><tr>" +
        "<td class=body_01 onclick='naxx_sceni(" + c + "," + mm + ",2)'>" + " * " + strsc2 + "</td></tr><tr><td>";
      }

    }

  kcs = kcn;
  }
  out = out.substr(0,out.length - 8) + "</table>";
  if(xi==1) {
    g_scen_id = c;
    //alert("ok!");
    //document.getElementById("pid441").innerHTML="ok!";
    document.getElementById("pid03").innerHTML=out;
    for(ix=0;ix<scenex.length;ix++) {
      //alert(scenex[ix]);
      docm = document.getElementById(scenex[ix]);
      docm.style.zIndex = '-7';
    }
  }
  if(xi==2) {
    document.getElementById("pid73").innerHTML=out;
  }
  if(xi==3) {
    document.getElementById("pid137").innerHTML=out;
  }
  if(document.getElementById("hid_pr").value != ".") {
    prikaz_komentara(document.getElementById("hid_pr").value,1);
  } else {
    naslovna();
    if(document.getElementById("hid_02").value == "normal" && document.getElementById("hid_vr").value == ".") {
      info_p(dgdj_info);
    }
    if(document.getElementById("hid_02").value == "vikend") {
      info_p(dgdj2_info);
    }
    if(document.getElementById("hid_02").value == "izbor3") {
      info_p(dgdj3_info);
    }
    if(document.getElementById("hid_02").value == "izbor4") {
      info_p(dgdj4_info);
    }
    if(document.getElementById("hid_vr").value == "opera") {
      alert(dgdj7_info);
    }

  }

}
/*
    //kcn = kcn;
    if(kcs == kcn) {
      out +=
    "<tr><td class=body_01 onclick=" + String.fromCharCode(39) + "na_sceni(" + strsc3 + "," + kcn + ",2)" + String.fromCharCode(39) + ">" +
      " * " + strsc2 +
      "</td></tr><tr><td>";
  } else {
      out +=
    "<tr><td class=body_01 onclick=" + String.fromCharCode(39) + "na_sceni(" sc - mm + strsc3 + "," + kcn + ",1)" + String.fromCharCode(39) + ">" +
      strsc1 +
      "</td></tr><tr>" +
    "<td class=body_01 onclick=" + String.fromCharCode(39) + "na_sceni(" + strsc3 + "," + kcn + ",2)" + String.fromCharCode(39) + ">" +
      " * " + strsc2 +
      "</td></tr><tr><td>";
  }
  kcs = kcn;
}

  poc = g_2_datum_unix.indexOf(tajdan);
  krj = g_2_datum_unix.lastIndexOf(tajdan);
  var out = "<table>";
  for(i = 0; i < arr.length; i++) {
    kcn = arr[i].kuca;
    if(kcs == kcn) {
  //alert(out);
  //alert(g_rep.g_rep_id[29]);
  //alert(g_rep.g_predst_id[29]);
  //alert(g_rep.g_rep_datum_unix[29]);
  //copyToClipboard(out);
  document.getElementById("pid03").innerHTML=out;
*/


function scene_list() {
  var xmlhttp_madam = new XMLHttpRequest();
  url = "http://pozorista.net/np/get_rep.php?akcija=2021";

  xmlhttp_madam.onreadystatechange=function() {
   if (xmlhttp_madam.readyState == 4 && xmlhttp_madam.status == 200) {
     aiai = xmlhttp_madam.responseText;
   outp = analiza_scene(aiai);
 }
}

xmlhttp_madam.open("GET", url, true);
xmlhttp_madam.send();

var xmlhttp_madam2 = new XMLHttpRequest();
url2 = "http://www.pozorista.net/np/get_rep.php?akcija=2021";

xmlhttp_madam2.onreadystatechange=function() {
 if (xmlhttp_madam2.readyState == 4 && xmlhttp_madam2.status == 200) {
   aiai = xmlhttp_madam2.responseText;
 outp = analiza_scene(aiai);
}
}

xmlhttp_madam2.open("GET", url2, true);
xmlhttp_madam2.send();
}

function analiza_scene(response) {
  //aliipak = "document.getElementById("+ String.fromCharCode(34) + "scenelist" + String.fromCharCode(34) + ").innerHTML=out";
  var arr = JSON.parse(response);
  var i;
  var out = "<table>";
  var kcn = 0;
  var kcs = 0;
  for(i = 0; i < arr.length; i++) {
    kcn = arr[i].kuca;
    if(kcs == kcn) {
      out +=
    "<tr><td class=body_01 onclick=" + String.fromCharCode(39) + "scena_rpt(" + arr[i].scena_id + "," + arr[i].kuca + ",2)" + String.fromCharCode(39) + ">" +
      " * " + arr[i].naziv_scene +
      "</td></tr><tr><td>";
    } else {
      out +=
    "<tr><td class=body_01 onclick=" + String.fromCharCode(39) + "scena_rpt(" + arr[i].scena_id + "," + arr[i].kuca + ",1)" + String.fromCharCode(39) + ">" +
      arr[i].naziv_kuce +
      "</td></tr><tr>" +
    "<td class=body_01 onclick=" + String.fromCharCode(39) + "scena_rpt(" + arr[i].scena_id + "," + arr[i].kuca + ",2)" + String.fromCharCode(39) + ">" +
      " * " + arr[i].naziv_scene +
      "</td></tr><tr><td>";
    }
    kcs = kcn;
  }
  out = out.substr(0,out.length - 8) + "</table>";
  //alert(out);
  //alert(g_rep.g_rep_id[29]);
  //alert(g_rep.g_predst_id[29]);
  //alert(g_rep.g_rep_datum_unix[29]);
  //copyToClipboard(out);
  document.getElementById("pid01").innerHTML=out;
  document.getElementById("pid03").innerHTML=out;

}

function iskazi(text) {
	//alert(text);
}
/*
function copyToClipboard(text) {
	window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}
*/

function na_pred(pr) {
	/*
	var tajdan = dat_to_unx(dd,mm,yy);
	var dnun = danunedelji(tajdan);
	var dddd = 0;
	var mmmm = 0;
	var yyyy = 0;*/
	var ddatumm = [];
	var boja = "";
	var i = 0;
	var j = 0;
	var indikator = -1;
	var u_vremenu = 0;
	var ddatumm = "";

	while(indikator == -1) {
		j = g_2_predstava.indexOf(pr * 1,i);
		ddatumm = ddmmyy(g_2_dd[j] + "." + g_2_mm[j] + "." + g_2_yy[j]);
		u_vremenu = proslo(ddatumm);
		indikator = u_vremenu;
		i = j+1;
	}

	prviid = j;
  prviidid = g_2_id[j];

	var red_id = [];
  var red_idid = [];
  for(xx=j;xx<g_2_predstava.length;xx++) {
    if(g_2_predstava[xx] == pr * 1) {
      ddatumm = ddmmyy(g_2_dd[xx] + "." + g_2_mm[xx] + "." + g_2_yy[xx]);
  		u_vremenu = proslo(ddatumm);
      if(u_vremenu > -1) {
        red_id.push(xx);
        red_idid.push(g_2_id[xx]);
      }
    }

  }

alert(red_id);
alert(red_idid);

for(xxx=0;xxx<red_id.length;xxx++) {
trkac = 0;
//document.getElementById("pid441").innerHTML = red_id[xxx] * 1 + ",,," + j;
//alert(g_2_id[red_id[xxx] * 1]);
ccx = g_3_dogadjaj.lastIndexOf(g_2_id[red_idid[red_idid.length-1]]);
//if(g_2_status[red_id[xxx] * 1] == 0) {
while(trkac<=ccx) { // za svaki izdvojeni r-id dok ima kategorija
  disbl = "Popup_predst_menu";
  razlog = "";
  dell = "";
  delll = "";
  kolikox++;
  if (id_dgdj_info_lok1 == kolikox) {
    dgdj_info_lok1 = g_2_id[red_id[xxx] * 1];
  }
  cc = g_3_dogadjaj.indexOf(g_2_id[red_id[xxx] * 1],trkac);

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
str_punacena = g_3_punacena[cc];
str_ktg = g_3_ktg[cc];
str_sapopustom = g_3_sapopustom[cc];
eff_cena = str_sapopustom;

i = red2[j];
if(g_2_dd[i] >= aaa) {
  sidro = "<a id = 'ovde'></a>";
  if(jelbio == 1) { sidro = ""; }
  jelbio = 1;
}
jj = g_4_id.indexOf(g_2_predstava[i]);
strpr = g_4_nasl_dijakr[jj];
//alert(strpr + " - ovo je naslov predstave" + g_2_dd[i] + " - datum" + g_2_mm[i] + " - datum" + g_2_yy[i] + " - datum");
minxxx = g_2_min[i];
if(g_2_min[i] * 1 == 0) { minxxx = "00"; }
jjj = g_5_id.indexOf(g_2_mesto[i]);
strsc1 = g_5_skr_kuca[jjj];
strsc2 = g_5_skr_scena[jjj];
if(str_punacena == str_sapopustom) { str_punacena = ""; }
out += "<tr><td" + boja + ">" +
sidro +
g_2_dd[i] + "." + g_2_mm[i] +
" u " + g_2_hh[i] + ":" + minxxx +
"</td><td title='" + g_2_id[red_id[xxx] * 1] + "' onclick='info_p(this.title)'" + boja + "><a href='#' data-rel='popup' class='ui-btn ui-btn-inline ui-corner-all' style='font-size:16px; margin:auto;'>?</a>" +
"</td><td" + boja + "><a href='#" + disbl + "' data-rel='popup' class='ui-btn ui-btn-inline ui-corner-all' class='mx' onclick='izbor(this.title," + str_ktg + ","+ eff_cena + ");' data-transition='slide' title='" + g_2_id[red_id[xxx] * 1 * 1] + "'>" +
razlog + dell + strpr + " <s>" + str_punacena + "</s> " + str_sapopustom + "!" + delll +
"</a></td></tr><tr><td colspan='3' class=xindigo id='t" + g_2_id[red_id[xxx] * 1 * 1] + "'></td></tr>";
trkac = cc + 1;
boja = "";

}
}
alert(out);
return out;
}
