function ddmmyy(dtmm) {
	var ddddd = "";
	var mmmmm = "";
	var yyyyy = "";
	var izl = [];
	var ii = 0;
	for(i=0;i<dtmm.length;i++) {
		if(dtmm.substring(i, i+1) == ".") {
			ii++;
		} else {
			if(ii == 0) { ddddd = ddddd + "" + dtmm.substring(i, i+1); }
			if(ii == 1) { mmmmm = mmmmm + "" + dtmm.substring(i, i+1); }
			if(ii == 2) { yyyyy = yyyyy + "" + dtmm.substring(i, i+1); }
		}
	}
	yyyyy = yyyyy.substring(0, 4);
	izl[0] = ddddd;
	izl[1] = mmmmm;
	izl[2] = yyyyy;
	return izl;
}

 function unos_r() {
	//uzimanje: dd,mm,yy,pid,hh,min,sc
	var ddatumm = [];
	strx = document.getElementById("datum_b").value;
	strxx = document.getElementById("scena_b").value;
	strxxx = document.getElementById("vreme_b").value;
	strxxxx = document.getElementById("predstava_b").title; // punac_b sapop_b specc_b stat_b
	strc = document.getElementById("punac_b").value;
	strcc = document.getElementById("sapop_b").value;
	strccc = document.getElementById("specc_b").value;
	strcccc = document.getElementById("stat_b").value;
	strk = document.getElementById("ktg_b").value;
	prov = document.getElementById("prov_b").value;
	total = document.getElementById("total_b").value;
	hhh = strxxx.substring(0, 2);
	minn = strxxx.substring(3, 5);
	ddd = mmm = yyy = "";
	ddatumm = ddmmyy(strx);
	ddd = ddatumm[0];
	mmm = ddatumm[1];
	yyy = ddatumm[2];
	if(((ddd.length == 2)	|| (ddd.length == 1))	&& ((mmm.length == 2)	|| (mmm.length == 1))	&& (yyy.length == 4)) {
		ispravno = 1;
		alert (ddd + "." + mmm + "." + yyy + "." + ispravno);
	} else {
		alert ("neispravan datum!");
		ispravno = -1;
	}
	alert(ispravno);
	if(ispravno != -1) {
		url = g_prefiks + "pozorista.net/np/get_rep.php?akcija=101&preds=" + strxxxx + "&scena=" + strxx + "&dd=" + ddd + "&mm=" + mmm + "&yy=" + yyy + "&hh=" + hhh + "&min=" + minn + "&punacena=" + strc + "&sapopustom=" + strcc + "&speccena=" + strccc + "&statux=" + strcccc + "&ktg=" + strk + "&prov=" + prov + "&total=" + total;
		copyToClipboard(url);
		var unos_u_r = new XMLHttpRequest();
		unos_u_r.onreadystatechange=function() {
	   if (unos_u_r.readyState == 4 && unos_u_r.status == 200) {
	     aiai = unos_u_r.responseText;
		 alert(aiai);
		   outp = analiza_u_rept(aiai);
		 }
		}
		unos_u_r.open("GET", url, true);
		unos_u_r.send();

	}
}

function analiza_u_rept(response) {
	alert(response);
	//uzimanje: dd,mm,yy,pid,hh,min,sc
	var sc_old = document.getElementById("scena_b").value;
  var arr = JSON.parse(response);
  var sc_new = arr[0].scena;
  if (sc_old!=sc_new) {
	alert("promena scene " + sc_old + " u " + sc_new + "!");
  }
  prikazi_stanje_sc(sc_new);
  
	}
	
function unos_k() {
	strd = document.getElementById("dgdjid_b").value;
	strktg = document.getElementById("ktg_bx").value;
	strr1 = document.getElementById("red1_b").value;
	strm1 = document.getElementById("mesto1_b").value;
	strs1 = document.getElementById("strana1_b").value;
	strm2 = document.getElementById("mesto2_b").value;
	strs2 = document.getElementById("strana2_b").value;
	strxx = document.getElementById("scena_b").value;
	strx = document.getElementById("datum_b").value;
	strxxx = document.getElementById("vreme_b").value;
	//alert(strktg);
	strc = "0";//za cenu su potrebna 2 recorda: r_id i cene_id
	hhh = strxxx.substring(0, 2);
	minn = strxxx.substring(3, 5);
	ddd = mmm = yyy = "";
	ddatumm = ddmmyy(strx);
	ddd = ddatumm[0];
	mmm = ddatumm[1];
	yyy = ddatumm[2];
	if(((ddd.length == 2)	|| (ddd.length == 1))	&& ((mmm.length == 2)	|| (mmm.length == 1))	&& (yyy.length == 4)) {
		ispravno = 1;
		//alert (ddd + "." + mmm + "." + yyy + "." + ispravno);
	} else {
		alert ("neispravan datum!");
		ispravno = -1;
	}
	if(ispravno != -1) {
		url = g_prefiks + "pozorista.net/np/kartex.php?akcija=karteustampu&dogadjaj=" + strd + "&ktg="  + strktg + "&scena=" + strxx + "&dd=" + ddd + "&mm=" + mmm + "&yy=" + yyy + "&hh=" + hhh + "&min=" + minn + "&odred1=" + strs1 + "&odred2=" + strs2 + "&mesto1=" + strm1 + "&mesto2=" + strm2 + "&red1=" + strr1;
		copyToClipboard(url);
		var xmlhttp_u_karte = new XMLHttpRequest();
	  xmlhttp_u_karte.onreadystatechange=function() {
	   if (xmlhttp_u_karte.readyState == 4 && xmlhttp_u_karte.status == 200) {
	     aiai = xmlhttp_u_karte.responseText;
	   outp = analiza_uk(aiai);
	 }
	}
	xmlhttp_u_karte.open("GET", url, true);
	xmlhttp_u_karte.send();
/*
	url2 = "http://www.pozorista.net/np/kartex.php?akcija=karteustampu&dogadjaj=" + strd + "&scena=" + strxx + "&dd=" + ddd + "&mm=" + mmm + "&yy=" + yyy + "&hh=" + hhh + "&min=" + minn + "&odred1=" + strs1 + "&odred2=" + strs2 + "&mesto1=" + strm1 + "&mesto2=" + strm2 + "&red1=" + strr1;
	copyToClipboard(url);
	var xmlhttp_u_karte2 = new XMLHttpRequest();
	xmlhttp_u_karte2.onreadystatechange=function() {
	 if (xmlhttp_u_karte2.readyState == 4 && xmlhttp_u_karte2.status == 200) {
		 aiai = xmlhttp_u_karte2.responseText;
	 outp = analiza_uk(aiai);
 }
}
xmlhttp_u_karte2.open("GET", url2, true);
xmlhttp_u_karte2.send();*/
	}
}

function analiza_uk(response) {
  var arr = JSON.parse(response);
  var i;
  //var out = arr[0].greske;
  var tekskst = arr[0].tekskst;
  alert(tekskst);
  copyToClipboard(tekskst);
  //alert("ukupno gresaka: " + out);
}

function prikazi_sc_dg(dg) {
	document.getElementById("pid37").innerHTML = "**************";
	url = g_prefiks + "pozorista.net/np/p_e.php?akcija=cl_po_pr&sta=" + dg;
	copyToClipboard(url);
	var xmlhttp_sc_dg = new XMLHttpRequest();
	xmlhttp_sc_dg.onreadystatechange=function() {
	if (xmlhttp_sc_dg.readyState == 4 && xmlhttp_sc_dg.status == 200) {
		aiai = xmlhttp_sc_dg.responseText;
		outp = analiza_xmlhttp_sc_dg(aiai);
	}
}
xmlhttp_sc_dg.open("GET", url, true);
xmlhttp_sc_dg.send();

}

function prikazi_nove_rzrv() {
	url = g_prefiks + "pozorista.net/np/p_e.php?akcija=nove_rzrv";
	copyToClipboard(url);
	var xmlhttp_nove_rzrv = new XMLHttpRequest();
	xmlhttp_nove_rzrv.onreadystatechange=function() {
	if (xmlhttp_nove_rzrv.readyState == 4 && xmlhttp_nove_rzrv.status == 200) {
		aiai = xmlhttp_nove_rzrv.responseText;
		outp = analiza_xmlhttp_nove_rzrv(aiai);
	}
}
xmlhttp_nove_rzrv.open("GET", url, true);
xmlhttp_nove_rzrv.send();

}

function proslo(nekidan) {
	var d = new Date();
	var nd = d.getDate();
	var nm = d.getMonth() + 1;
	var ny = d.getFullYear();
	if((nekidan[2] < ny) || ((nekidan[2] == ny) && (nekidan[1] < nm)) || ((nekidan[2] == ny) && (nekidan[1] == nm) && (nekidan[0] < nd))) return -1;
	if((nekidan[2] == ny) && (nekidan[1] == nm) && (nekidan[0] == nd)) return 0;
	if((nekidan[2] > ny) || ((nekidan[2] == ny) && (nekidan[1] > nm)) || ((nekidan[2] == ny) && (nekidan[1] == nm) && (nekidan[0] > nd))) return 1;
}

function analiza_xmlhttp_sc_dg(response) {
	var ddatumm1 = [];
	var ddatumm2 = [];
  var arr = JSON.parse(response);
  var i;
	var boja = "";
	var out = "<table>";
	var zbir = 0;
	var zbirx = 0;
	var zbirr = 0;
	var zbirrr = 0;
	var razlika = 0;
  for(i = 0; i < arr.length; i++) {
		boja = "";
		ddatumm1 = ddmmyy(arr[i].kad1);
		ddatumm2 = ddmmyy(arr[i].kad2);
		if(proslo(ddatumm2) == -1) {
			boja=" style='background-color:#ff0000'";
		}
		hhhhh = arr[i].vreme.substring(0, 2);
		minnn = arr[i].vreme.substring(3, 5);
		zbirr += arr[i].koliko * 1;
		if(arr[i].p == 1) {
			zbir += arr[i].koliko * 1;
		}
		if(arr[i].p == 2) {
			zbirx += arr[i].koliko * 1;
		}
		if((arr[i].p == 8) && (boja == "")) {
			zbirrr += arr[i].koliko * 1;
		}
	  out += "<tr><td onclick='copyToClipboard(this.innerHTML)'>" +
		arr[i].ime +
		"</td><td onclick='copyToClipboard(this.innerHTML)'>" +
		arr[i].prezime +
		"</td><td onclick='copyToClipboard(this.innerHTML)'>" +
		arr[i].clbroj +
		"</td><td onclick='copyToClipboard(this.innerHTML)'>" +
		arr[i].email +
		"</td><td>" +
		arr[i].koliko +
		"</td><td>" +
		arr[i].c1 +
		"</td><td>" +
		arr[i].ktg +
		"</td><td>" +
		ddatumm1[0] + "." + ddatumm1[1] +
		"</td><td" + boja + ">" +
		ddatumm2[0] + "." + ddatumm2[1] +
		"</td><td>" +
		hhhhh + ":" + minnn +
		"</td><td>" +
		arr[i].p +
	  "</td></tr><tr><td>";
  }
  razlika = arr[0].stmp * 1 - zbir - zbirx - zbirrr;
  out = out.substr(0,out.length - 8) + "</table><table><tr><td>ukupno podignuto: " + zbir + " * još važećih: " + zbirrr + " * placeno-nepodignuto: " + zbirx + " * stampano: " + arr[0].stmp + " * slobodno: " + razlika + "</td></tr></table>";
  alert("ukupno gresaka: " + out);
	document.getElementById("pid37").innerHTML = out;
}

function analiza_xmlhttp_nove_rzrv(response) {
	var ddatumm1 = [];
	var ddatumm2 = [];
  var arr = JSON.parse(response);
  alert(arr.length);
  var i;
	var boja = "";
	var out = "<table style='overflow:scroll;'>";
  for(i = 0; i < arr.length; i++) {
		boja = "";
		ddatumm1 = ddmmyy(arr[i].kad1);
		ddatumm2 = ddmmyy(arr[i].kad2);
		if(proslo(ddatumm2) == -1) {
			boja=" style='background-color:#ff0000'";
		}
		hhhhh = arr[i].vreme.substring(0, 2);
		minnn = arr[i].vreme.substring(3, 5);
		out += "<tr><td class=malaslova title='" + arr[i].dogadjaj + "'>" +
		arr[i].ime + " " + arr[i].prezime +
		"</td><td class=malaslova onclick='copyToClipboard(this.innerHTML)'>" +
		arr[i].clbroj +
		"</td><td class=malaslova onclick='copyToClipboard(this.innerHTML)'>" +
		arr[i].dan_i + "." + arr[i].mes_i + " (" + arr[i].mesto + ") " + arr[i].naslov +
    "</td><td class=malaslova><input type='text' size='2' id='kk" + arr[i].eid + "' value='" + arr[i].koliko + "'>" +
    "</td><td class=malaslova><input type='text' size='4' id='cn" + arr[i].eid + "' value='" + arr[i].c1 + "'>" +
    "</td><td class=malaslova><input type='text' size='2' id='dd" + arr[i].eid + "' value='" + ddatumm2[0] + "'>" +
    "</td><td class=malaslova><input type='text' size='2' id='mm" + arr[i].eid + "' value='" + ddatumm2[1] + "'>" +
    "</td><td class=malaslova><input type='text' size='4' id='yy" + arr[i].eid + "' value='" + ddatumm2[2] + "'>" +
    "</td><td class=malaslova><input type='text' size='5' id='vr" + arr[i].eid + "' value='" + arr[i].vreme + "'>" +
    "</td><td class=malaslova><input type='button' value='akcija' onclick='rezerv_akcija(" + arr[i].eid + ")'>" +
    "<input type='text' size='2' value='" + arr[i].p + "' id='tx" + arr[i].eid + "'></td></tr>";
/*
	  out += "<tr><td class=malaslova onclick='copyToClipboard(this.innerHTML)'>" +
		arr[i].ime +
		"</td><td class=malaslova onclick='copyToClipboard(this.innerHTML)'>" +
		arr[i].prezime +
		"</td><td class=malaslova onclick='copyToClipboard(this.innerHTML)'>" +
		arr[i].clbroj +
		"</td><td class=malaslova onclick='copyToClipboard(this.innerHTML)'>" +
		arr[i].email +
		"</td><td class=malaslova>" +
		arr[i].koliko +
		"</td><td class=malaslova>" +
		arr[i].dan_i + "." + arr[i].mes_i + " " + arr[i].naslov +
		"</td><td class=malaslova>" +
		arr[i].c1 +
		"</td><td class=malaslova>" +
		arr[i].ktg +
		"</td><td class=malaslova>" +
		ddatumm1[0] + "." + ddatumm1[1] +
		"</td><td class=malaslova" + boja + ">" +
		ddatumm2[0] + "." + ddatumm2[1] +
		"</td><td class=malaslova>" +
		hhhhh + ":" + minnn +
		"</td><td class=malaslova>" +
		"<input type='text' size='2' value='" + arr[i].p + "' id='p" + arr[i].eid + "'>" +
	  "<input type='button' title='" + arr[i].eid + "' value='@' onclick='izmeni_cl_rzrv(this.title)'></td></tr>";
		*/
  }
  out = out.substr(0,out.length - 8) + "</table>";
  alert(out);
	document.getElementById("lista_clanova").innerHTML = out;
}

function izmeni_cl_rzrv(eeid) {
	tekstid = "p" + eeid;
	tekstvrednost = document.getElementById(tekstid).value;
	url = g_prefiks + "pozorista.net/np/p_e.php?akcija=obrada_rzrv&eid=" + eeid + "&stat=" + tekstvrednost;
	alert(url);
	var xmlhttp_e_edit = new XMLHttpRequest();
	xmlhttp_e_edit.onreadystatechange=function() {
	if (xmlhttp_e_edit.readyState == 4 && xmlhttp_e_edit.status == 200) {
		aiai = xmlhttp_e_edit.responseText;
		//outp = analiza_xmlhttp_e_edit(aiai);
		}
	}
	xmlhttp_e_edit.open("GET", url, true);
	xmlhttp_e_edit.send();

}

function prikazi_stanje_sc(sc) {
	url = g_prefiks + "pozorista.net/np/p_e.php?akcija=stanje_sc&scena=" + sc + "&mm=10";
	copyToClipboard(url);
	var xmlhttp_stanje_sc = new XMLHttpRequest();
	xmlhttp_stanje_sc.onreadystatechange=function() {
	if (xmlhttp_stanje_sc.readyState == 4 && xmlhttp_stanje_sc.status == 200) {
		aiai = xmlhttp_stanje_sc.responseText;
		outp = analiza_xmlhttp_stanje_sc(aiai);
	}
}
xmlhttp_stanje_sc.open("GET", url, true);
xmlhttp_stanje_sc.send();

}

function analiza_xmlhttp_stanje_sc(response) {
  var arr = JSON.parse(response);
  var i;
	var boja = "";
	var out = "<table><tr><td class=xcrno>naslov</td><td class=xcrno>datum</td><td class=xcrno>p=1</td><td class=xcrno>p=8</td><td class=xcrno>nije isteklo</td><td class=xcrno>total</td></tr>";
  for(i = 0; i < arr.length; i++) {
		boja = "";
		out += "<tr><td title='" + arr[i].dogadjaj + "'>" +
		arr[i].ktg + "." + arr[i].naslov +
		"</td><td onclick='copyToClipboard(this.innerHTML)'>" +
		arr[i].dd + "." + arr[i].mm +
		"</td><td onclick='copyToClipboard(this.innerHTML)'>" +
		arr[i].kolikoy +
		"</td><td onclick='copyToClipboard(this.innerHTML)'>" +
		arr[i].kolikox +
		"</td><td onclick='copyToClipboard(this.innerHTML)'>" +
		arr[i].kolikoz +
		"</td><td onclick='copyToClipboard(this.innerHTML)'>" +
		arr[i].kolikox +
    "</td></tr>";
/*
	  out += "<tr><td class=malaslova onclick='copyToClipboard(this.innerHTML)'>" +
		arr[i].ime +
		"</td><td class=malaslova onclick='copyToClipboard(this.innerHTML)'>" +
		arr[i].prezime +
		"</td><td class=malaslova onclick='copyToClipboard(this.innerHTML)'>" +
		arr[i].clbroj +
		"</td><td class=malaslova onclick='copyToClipboard(this.innerHTML)'>" +
		arr[i].email +
		"</td><td class=malaslova>" +
		arr[i].koliko +
		"</td><td class=malaslova>" +
		arr[i].dan_i + "." + arr[i].mes_i + " " + arr[i].naslov +
		"</td><td class=malaslova>" +
		arr[i].c1 +
		"</td><td class=malaslova>" +
		arr[i].ktg +
		"</td><td class=malaslova>" +
		ddatumm1[0] + "." + ddatumm1[1] +
		"</td><td class=malaslova" + boja + ">" +
		ddatumm2[0] + "." + ddatumm2[1] +
		"</td><td class=malaslova>" +
		hhhhh + ":" + minnn +
		"</td><td class=malaslova>" +
		"<input type='text' size='2' value='" + arr[i].p + "' id='p" + arr[i].eid + "'>" +
	  "<input type='button' title='" + arr[i].eid + "' value='@' onclick='izmeni_cl_rzrv(this.title)'></td></tr>";
		*/
  }
  out = out.substr(0,out.length - 8) + "</table>";
  alert(out);
	document.getElementById("pidxxx").innerHTML = out;
}
