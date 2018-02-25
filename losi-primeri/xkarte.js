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
	if(ispravno != -1) {
		url = "http://pozorista.net/np/get_rep.php?akcija=101&preds=" + strxxxx + "&scena=" + strxx + "&dd=" + ddd + "&mm=" + mmm + "&yy=" + yyy + "&hh=" + hhh + "&min=" + minn + "&punacena=" + strc + "&sapopustom=" + strcc + "&speccena=" + strccc + "&statux=" + strcccc + "&ktg=" + strk + "&prov=" + prov + "&total=" + total;
		copyToClipboard(url);
		var unos_u_r = new XMLHttpRequest();
		unos_u_r.onreadystatechange=function() {
	   if (unos_u_r.readyState == 4 && unos_u_r.status == 200) {
	     aiai = unos_u_r.responseText;
		   outp = analiza_u_rept(aiai);
		 }
		}
		unos_u_r.open("GET", url, true);
		unos_u_r.send();
	}
}

function unos_k() {
	strd = document.getElementById("dgdjid_b").value;
	strr1 = document.getElementById("red1_b").value;
	strm1 = document.getElementById("mesto1_b").value;
	strs1 = document.getElementById("strana1_b").value;
	strm2 = document.getElementById("mesto2_b").value;
	strs2 = document.getElementById("strana2_b").value;
	strxx = document.getElementById("scena_b").value;
	strx = document.getElementById("datum_b").value;
	strxxx = document.getElementById("vreme_b").value;
	alert(strs1);
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
		url = "http://pozorista.net/np/kartex.php?akcija=karteustampu&dogadjaj=" + strd + "&scena=" + strxx + "&dd=" + ddd + "&mm=" + mmm + "&yy=" + yyy + "&hh=" + hhh + "&min=" + minn + "&odred1=" + strs1 + "&odred2=" + strs2 + "&mesto1=" + strm1 + "&mesto2=" + strm2 + "&red1=" + strr1;
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
	}
}

function analiza_uk(response) {
  var arr = JSON.parse(response);
  var i;
  var out = arr[0].greske;
  alert("ukupno gresaka: " + out);
}

function prikazi_sc_dg(dg) {
	url = "http://pozorista.net/np/p_e.php?akcija=cl_po_pr&sta=" + dg;
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
	url = "http://pozorista.net/np/p_e.php?akcija=nove_rzrv";
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
  for(i = 0; i < arr.length; i++) {
		boja = "";
		ddatumm1 = ddmmyy(arr[i].kad1);
		ddatumm2 = ddmmyy(arr[i].kad2);
		if(proslo(ddatumm2) == -1) {
			boja=" style='background-color:#ff0000'";
		}
		hhhhh = arr[i].vreme.substring(0, 2);
		minnn = arr[i].vreme.substring(3, 5);
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
  out = out.substr(0,out.length - 8) + "</table>";
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
	  out += "<tr><td class=xbelo onclick='copyToClipboard(this.innerHTML)'>" +
		arr[i].ime +
		"</td><td class=xbelo onclick='copyToClipboard(this.innerHTML)'>" +
		arr[i].prezime +
		"</td><td class=xbelo onclick='copyToClipboard(this.innerHTML)'>" +
		arr[i].clbroj +
		"</td><td class=xbelo onclick='copyToClipboard(this.innerHTML)'>" +
		arr[i].email +
		"</td><td class=xbelo>" +
		arr[i].koliko +
		"</td><td class=xbelo>" +
		arr[i].naslov +
		"</td><td class=xbelo>" +
		arr[i].c1 +
		"</td><td class=xbelo>" +
		arr[i].ktg +
		"</td><td class=xbelo>" +
		ddatumm1[0] + "." + ddatumm1[1] +
		"</td><td class=xbelo" + boja + ">" +
		ddatumm2[0] + "." + ddatumm2[1] +
		"</td><td class=xbelo>" +
		hhhhh + ":" + minnn +
		"</td><td class=xbelo>" +
		arr[i].p +
	  "</td></tr>";
  }
  out = out.substr(0,out.length - 8) + "</table>";
  alert(out);
	document.getElementById("rezerv_clanova").innerHTML = out;
}
