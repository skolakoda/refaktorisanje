function sledeci_dan(dd,mm,yy,broj,df) {
	var dat_niz = [];
	var privd;
	var privm1;
	var privm2 = mm * 1;
	var privmx;
	var privy = yy * 1;
	privd = dd + broj * df;
	privm1 = broj_dana_u_mesecu(mm,yy);
	if(privd > privm1) {
		privd = privd - privm1;
		privm2 = privm2 + 1;
	}
	if(privm2 > 12) {
		privm2 = 1;
		privy = privy + 1;
	}

	if(privd < 1) {
		if(mm == 1) {
			privy -= 1;
			privm2 = 12;
			privd =  privd + 31;
		} else {
			privmx = broj_dana_u_mesecu(mm-1,yy);
			privm2 = privm2 - 1;
			privd =  privd + privmx;
		}

	}
		dat_niz[0] = privd;
		dat_niz[1] = privm2;
		dat_niz[2] = privy;
		return dat_niz;

}

function sledeci_mesec(mm,df) {
	var priv=[];
	var a1 = ((mm * 1 + df) + 12);
	var a2 = ((mm * 1 + df) + 12) % 12;
	//if(a2 == 0) { a2 = 12; }
	priv.push(a2);
	if((a1 != a2) && a2 != 12) {
		priv.push(1);
	} else {
		priv.push(0);
	}
	//priv++;
	return priv;
}

function broj_dana_u_mesecu(mm,yy) {
	switch(mm) {
		case 1:
			broj=31;
			break;
		case 2:
			broj=28;
			//argum=eng_naziv_meseca(mm) + " " + "28" + ", " + yy;
			//alert(argum);
			//prs=Date.parse(argum);
			//u_broj=Math.floor(prs/86400000) +1;
			//u_broj=prs;
			//alert(u_broj);
			//dx=u_broj.getDate();
			if((yy % 4)==0) {broj=29;}
			break;
		case 3:
			broj=31;
			break;
		case 4:
			broj=30;
			break;
		case 5:
			broj=31;
			break;
		case 6:
			broj=30;
			break;
		case 7:
			broj=31;
			break;
		case 8:
			broj=31;
			break;
		case 9:
			broj=30;
			break;
		case 10:
			broj=31;
			break;
		case 11:
			broj=30;
			break;
		case 12:
			broj=31;
			break;
	}
	return broj;
}

function eng_naziv_meseca(nm) {
	switch(nm) {
		case 1:
			broj="January";
			break;
		case 2:
			broj="February";
			break;
		case 3:
			broj="March";
			break;
		case 4:
			broj="April";
			break;
		case 5:
			broj="May";
			break;
		case 6:
			broj="June";
			break;
		case 7:
			broj="July";
			break;
		case 8:
			broj="August";
			break;
		case 9:
			broj="September";
			break;
		case 10:
			broj="October";
			break;
		case 11:
			broj="November";
			break;
		case 12:
			broj="December";
			break;
	}
	return broj;
}

function sh_naziv_meseca(nm) {
	switch(nm) {
		case 1:
			broj="jan";
			break;
		case 2:
			broj="feb";
			break;
		case 3:
			broj="mar";
			break;
		case 4:
			broj="apr";
			break;
		case 5:
			broj="maj";
			break;
		case 6:
			broj="jun";
			break;
		case 7:
			broj="jul";
			break;
		case 8:
			broj="avg";
			break;
		case 9:
			broj="sep";
			break;
		case 10:
			broj="okt";
			break;
		case 11:
			broj="nov";
			break;
		case 12:
			broj="dec";
			break;
	}
	return broj;
}

function prva_nedelja_u_mesecu(mm,yy) {
for(x=1;x<9;x++) {
	argum=eng_naziv_meseca(mm) + " " + x + ", " + yy;
	prs=Date.parse(argum);
	u_broj=Math.floor(prs/86400000);
	if((u_broj % 7)==2) {break;}
	}
	//alert(x);
	return x;
}

function poslednji_ponedeljak_u_mesecu(mm,yy) {
	limit=broj_dana_u_mesecu(mm,yy);
	for(x=limit;x>20;x--) {
		argum=eng_naziv_meseca(mm) + " " + x + ", " + yy;
		prs=Date.parse(argum);
		u_broj=Math.floor(prs/86400000);
		if((u_broj % 7)==3) {break;}
	}
	return x;
}

function pisanje_kalendara(m,g,sw) { // sw odredjuje mesto upisivanja kalendara, prosledjuje se
	var uklon = "onclick=" + String.fromCharCode(34) + "document.getElementById(" + "'Popup_kalendar'" + ").style.zIndex='-3';" + String.fromCharCode(34);
	mx = sh_naziv_meseca(m);
	pocetak=prva_nedelja_u_mesecu(m,g)-6;
	kraj=poslednji_ponedeljak_u_mesecu(m,g)+7;
	rr=0;
	klndr = "<div " + uklon + " class=iks  onmouseover='titl_info(7)'>&nbsp;X&nbsp;</div>";
	klndr+="<table>";
	klndr += "<tr><td colspan=7 class=xdunkelindigo style='margin:auto'> <b onclick='kalendar_novimesec(0," + m +"," + g +"," + sw + ")'> ";
	klndr += " <- " + " </b> " + mx + " " + g + "<b onclick=" + String.fromCharCode(39) + "kalendar_novimesec(1," + m +"," + g +"," + sw + ")" + String.fromCharCode(39) + "> " + " -> " + " </b> </td></tr>";
	klndr += "<tr><td class=xdunkelindigo>P</td><td class=xdunkelindigo>U</td><td class=xdunkelindigo>S</td><td class=xdunkelindigo>&#268;</td><td class=xdunkelindigo>P</td><td class=xindigo>S</td><td class=xindigo>N</td></tr>";
	brojac=0;

	for(x=pocetak;x<kraj;x++) {
		rr++;
		if((x>0) & (x<(broj_dana_u_mesecu(m,g)+1))) {
			if(brojac%7<5) {klndr += "</td><td class=xindigolite onclick=" + String.fromCharCode(39) + "na_dan(" + x + "," + m + "," + g + ")" + String.fromCharCode(39) + ">" + x;}
			if(brojac%7>4) {klndr += "</td><td class=xindigolite onclick=" + String.fromCharCode(39) + "na_dan(" + x + "," + m + "," + g + ")" + String.fromCharCode(39) + ">" + x;}
		} else {
			if(brojac%7<5) {klndr += "</td><td " + uklon + " class=xbelo + title='da uklonite kalendar, kliknite na belo polje'>&nbsp;";}
			if(brojac%7>4) {klndr += "</td><td " + uklon + " class=xbelo + title='da uklonite kalendar, kliknite na belo polje'>&nbsp;";}
		}
		if(rr%7==0) {klndr += "</tr><tr>";}
		brojac++;
	}

	klndr += "</tr></table>";

	if(sw==2) {
		klndr = klndr.replace(/na_dan/g, "izaberi_dan");
		document.getElementById("div_klndr_x").innerHTML=klndr;
	}
	if(sw==1) { document.getElementById("div_klndr").innerHTML=klndr; }
	if(sw==3) {
		klndr = klndr.replace(/na_dan/g, "izaberi_danx");
		document.getElementById("div_klndr_xx").innerHTML=klndr;

	}
	if(sw==7) {
		klndr = klndr.replace(/na_dan/g, "naxx_dan");
		document.getElementById("div_klndr_xxx").innerHTML=klndr;

	}
	//document.getElementById("hid_klndr").value=klndr;
}

function kalendar_novimesec(p1,p2,p3,sw) {
if(p1==1) {
	nm=p2+1;
	ng=p3;
	if(p2==12) {
		nm=1;
		ng=p3+1;
	}}
if(p1==0) {
	nm=p2-1;
	ng=p3;
	if(p2==1) {
		nm=12;
		ng=p3-1;
	}}
	pisanje_kalendara(nm,ng,sw);
}

function kalendar_akcija_rpt(kad1,kad2,kad3) {
	g_dd = kad1;
	g_mm = kad2;
	g_yy = kad3;
	g_akcija = 11;
	var xmlhttp_nadan = new XMLHttpRequest();
  url = g_prefiks + "pozorista.net/np/get_rep.php?akcija=323&repertoar=1&dd=" + g_dd + "&mm=" + g_mm + "&yy=" + g_yy;
  xmlhttp_nadan.onreadystatechange=function() {
   if (xmlhttp_nadan.readyState == 4 && xmlhttp_nadan.status == 200) {
     aiai = xmlhttp_nadan.responseText;
   outp = analiza_rept(aiai);
 }
}
xmlhttp_nadan.open("GET", url, true);
xmlhttp_nadan.send();
}

function scena_rpt(gde2,gde1,mdd) {
	url = g_prefiks + "pozorista.net/np/get_rep.php?akcija=5&repertoar=1&scena=" + gde2;
  var xmlhttp_namestu = new XMLHttpRequest();
  xmlhttp_namestu.onreadystatechange=function() {
   if (xmlhttp_namestu.readyState == 4 && xmlhttp_namestu.status == 200) {
     aiai = xmlhttp_namestu.responseText;
   outp = analiza_rept(aiai,gde1);
 }
}
xmlhttp_namestu.open("GET", url, true);
xmlhttp_namestu.send();
}

function analiza_rept(response,gde1) {//ovdeee
	var ddatumm = [];
  var arr = JSON.parse(response);
  var i;
	var boja = "";
  var out = "<table>";
  var out2 = "";
  for(i = 0; i < arr.length; i++) {
		boja = "";
		dgdjid = arr[i].dgdj_id;
		scenaid = arr[i].scena_id;
		ktg = arr[i].ktg;
		dddd = arr[i].dddd;
		mmmm = arr[i].mmmm;
		yyyy = arr[i].yyyy;
		hhhh = arr[i].hhhh;
		mmin = arr[i].mmin;
		ddatumm = ddmmyy(dddd + "." + mmmm + "." + yyyy);
		if(proslo(ddatumm) > -1) {
			boja=" class=xbelo";
		}
		if(gde1 == 3) {
			out += "<tr><td><input type='button' title='" + dgdjid + "' onclick='prikazi_karte_dg(this.title," + ktg + ")' value='" + arr[i].datum + "'>";
			out2 += dddd + "." + mmmm + " " + arr[i].scena_naziv + " " + arr[i].predstava_nasl + "%";
		} else {
			out += "<tr><td class=malaslova title='" + dgdjid + "'  onclick='prikazi_sc_dg(this.title," + ktg + ")'>" +	'<a href="#Popup_sc_dgdj" data-rel="popup" class=malaslova>' + arr[i].datum + "," + hhhh + ":" + mmin + "</a>";
		}
		out += "</td><td class=malaslova " + boja + ">" +
	  arr[i].scena_naziv +
		"</td><td class=malaslova title='" + arr[i].predstava_id + "' " + boja + " onclick='odredi_dgdj(" + dgdjid + "," + scenaid + "," + dddd + "," + mmmm + "," + yyyy + "," + hhhh + "," + mmin + ",this.innerHTML,this.title)'>" +
	  arr[i].predstava_nasl +
		"</td><td class=malaslova " + boja + ">" +
	  arr[i].punacena +
		"</td><td class=malaslova " + boja + ">" +
	  arr[i].sapopustom +
		"</td><td class=malaslova " + boja + ">" +
	  arr[i].speccena +
		"</td><td class=malaslova " + boja + ">" +
	  arr[i].statux +
	  "</td></tr><tr><td>";
  }
  out = out.substr(0,out.length - 8) + "</table>";
  //alert(out);
	if(gde1 == 3) {
		document.getElementById("pid197").innerHTML=out;
		document.getElementById("za_odjavu").value=out2;
	} else {
		document.getElementById("pid83").innerHTML=out;
	}

  //document.getElementById("o_pocetnoj").innerHTML=out;
}

function odredi_dgdj(dgdjid,scenaid,dddd,mmmm,yyyy,hhhh,mmin,nsl,ttl) {
	document.getElementById("button_cl").title = dgdjid;
	document.getElementById("dgdjid_b").value = dgdjid;
	document.getElementById("scena_b").value = scenaid;
	document.getElementById("datum_b").value = dddd + "." + mmmm + "." + yyyy;
	document.getElementById("vreme_b").value = hhhh + ":" + mmin;
	document.getElementById("predstava_b").value = nsl;
	document.getElementById("predstava_b").title = ttl;
}

function dat_unx(strng) {
	nn = parseInt(strng / 1000);
	nnn = parseInt(nn / 3600);
	nnnn = Math.round(nnn / 24);
	return nnnn;
}

function dat_to_unx(dd,mm,yy) {
	strng = mm + String.fromCharCode(47) + dd + String.fromCharCode(47) + yy;
	strngg = Date.parse(strng);
	return dat_unx(strngg);
}

function radno_vreme() {
	var d = new Date();
	var n = d.getHours();
	var x = d.getDay();
	var z = d.getMonth();
	var xx = d.getDate();
	if(z==0 && xx==1) {
		document.getElementById("radnovreme").innerHTML="<img src='/slike/bilten/crvena_tacka.gif' style='height: " + (sirina * 10) + "px; display: block; margin:auto; padding-bottom: 32768px; margin-bottom: -32768px;'>";
		document.getElementById("pid441").innerHTML="klub je trenutno zatvoren - radno vreme je<br />od 14:00 do 19:00 svakog dana osim nedelje.";
		return 0;
	}
	if(z==0 && xx==2) {
		document.getElementById("radnovreme").innerHTML="<img src='/slike/bilten/crvena_tacka.gif' style='height: " + (sirina * 10) + "px; display: block; margin:auto; padding-bottom: 32768px; margin-bottom: -32768px;'>";
		document.getElementById("pid441").innerHTML="klub je trenutno zatvoren - radno vreme je<br />od 14:00 do 19:00 svakog dana osim nedelje.";
		return 0;
	}
	if(z==11 && xx==31) {
		document.getElementById("radnovreme").innerHTML="<img src='/slike/bilten/crvena_tacka.gif' style='height: " + (sirina * 10) + "px; display: block; margin:auto; padding-bottom: 32768px; margin-bottom: -32768px;'>";
		document.getElementById("pid441").innerHTML="klub je trenutno zatvoren - radno vreme je<br />od 14:00 do 19:00 svakog dana osim nedelje.";
		return 0;
	}
	if(z==8 && xx<11) {
		document.getElementById("radnovreme").innerHTML="<img src='/slike/bilten/crvena_tacka.gif' style='height: " + (sirina * 10) + "px; display: block; margin:auto; padding-bottom: 32768px; margin-bottom: -32768px;'>";
		document.getElementById("pid441").innerHTML="klub je trenutno zatvoren - radno vreme je<br />od 14:00 do 19:00 svakog dana osim nedelje.";
		return 0;
	}
	if(z==4 && xx==1) {
		document.getElementById("radnovreme").innerHTML="<img src='/slike/bilten/crvena_tacka.gif' style='height: " + (sirina * 10) + "px; display: block; margin:auto; padding-bottom: 32768px; margin-bottom: -32768px;'>";
		document.getElementById("pid441").innerHTML="klub je trenutno zatvoren - radno vreme je<br />od 14:00 do 19:00 svakog dana osim nedelje.";
		return 0;
	}
	if(z==4 && xx==2) {
		document.getElementById("radnovreme").innerHTML="<img src='/slike/bilten/crvena_tacka.gif' style='height: " + (sirina * 10) + "px; display: block; margin:auto; padding-bottom: 32768px; margin-bottom: -32768px;'>";
		document.getElementById("pid441").innerHTML="klub je trenutno zatvoren - radno vreme je<br />od 14:00 do 19:00 svakog dana osim nedelje.";
		return 0;
	}
	if(n>13 && n<19 && x!=0 && (z<6 || z >7)) {
		document.getElementById("radnovreme").innerHTML="<img src='/slike/bilten/zelena_tacka.gif' style='height: " + (sirina * 10) + "px; display: block; margin:auto; padding-bottom: 32768px; margin-bottom: -32768px;'>";
		document.getElementById("pid441").innerHTML="klub je otvoren do 19:00!<br />mo&#382;ete do&#263;i po karte!";
		return 1;
	} else {
		document.getElementById("radnovreme").innerHTML="<img src='/slike/bilten/crvena_tacka.gif' style='height: " + (sirina * 10) + "px; display: block; margin:auto; padding-bottom: 32768px; margin-bottom: -32768px;'>";
		document.getElementById("pid441").innerHTML="klub je trenutno zatvoren - radno vreme je<br />od 14:00 do 19:00 svakog dana osim nedelje.";
		return 0;
	}
}

function glumci_u_preds(id_preds) {
	sve_o_predstavi(id_preds,2);
}

function copyToClipboard(text) {
	window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}

function danunedelji(dan) {
	xii = dan % 7;
	switch (xii) {
		case 0:
			return "&#269;etvrtak";
			break;
		case 1:
			return "petak";
			break;
		case 2:
			return "subota";
			break;
		case 3:
			return "nedelja";
			break;
		case 4:
			return "ponedeljak";
			break;
		case 5:
			return "utorak";
			break;
		case 6:
			return "sreda";
				break;
	}
}

function na_dan(dd,mm,yy) {
	var d = new Date();
	var n = d.getHours();
	var xd = d.getDay();
	var xm = d.getMonth();
	var xxd = d.getDate();
	var tajdan = dat_to_unx(dd,mm,yy);
	var dnun = danunedelji(tajdan);
	var dddd = 0;
	var mmmm = 0;
	var yyyy = 0;
	var ddatumm = [];
	var boja = "";
	var i = 0;

	var red0 = [];
	var red1 = [];
	k = g_2_datum_unix.lastIndexOf(tajdan);
	while(i < k+1) {
		j = g_2_datum_unix.indexOf(tajdan,i);
		red0.push(j);
		i = j+1;
	}

	for (y=2;y<200;y++) {
		for (x=0;x<red0.length;x++) {
			j = red0[x];
			jjj = g_5_id.indexOf(g_2_mesto[j]);
			if(g_5_rb[jjj] == y) {
				red1.push(red0[x]);
			}
		}
	}
	var out = "<table style='width:80%; overflow-x: scroll;'><tr><td colspan='3' class=xcrno>" + dnun + ", " + dd + "." + mm + "." + yy + "</td></tr>";

	var id_dgdj_info_lok1 = Math.floor(4 * Math.random());
	if(red1.length<4) {
		id_dgdj_info_lok1 = Math.floor(red1.length * Math.random());
	}
	var kolikox = 0;
	var disbl;
	var dell;
	var delll;
	var razlog;
	for (x=0;x<red1.length;x++) {
		j = red1[x];
		jj = g_4_id.indexOf(g_2_predstava[j]);
		jjj = g_5_id.indexOf(g_2_mesto[j]);
		strpr = g_4_nasl_dijakr[jj];
		strsc1 = g_5_skr_kuca[jjj];
		strsc2 = g_5_skr_scena[jjj];
		sati = g_2_hh[j];
		minuta = g_2_min[j];
		if(minuta == "0") {minuta = "00";}
		// nadji cene
		trkac = 0;
		ccx = g_3_dogadjaj.lastIndexOf(g_2_id[j]);
		//if(g_2_status[j] == 0) {
		while(trkac<=ccx) {
			disbl = "Popup_predst_menu";
			razlog = "";
			dell = "";
			delll = "";
			kolikox++;
			boja = " class=xbelo";
			if (id_dgdj_info_lok1 == kolikox) {
				dgdj_info_lok1 = g_2_id[j];
			}
			cc = g_3_dogadjaj.indexOf(g_2_id[j],trkac);
			dddd = g_2_dd[j];
			mmmm = g_2_mm[j];
			yyyy = g_2_yy[j];
			ddatumm = ddmmyy(dddd + "." + mmmm + "." + yyyy);
			u_vremenu = proslo(ddatumm);
			if(obustavljeno(g_2_id[j]) == 1) {
				disbl = "";
				razlog = "<span class=crventekst>prodaja obustavljena</span> - ";
				dell = "";
				delll = "";
				boja = " class=xsivkasto";
			}
			if(g_3_status[cc * 1] == -1) {
				disbl = "";
				razlog = "<span class=crventekst>rasprodato</span> - ";
				dell = "";
				delll = "";
				boja = " class=xsivkasto";
			}
			if(u_vremenu < 0) {
				disbl = "";
				razlog = "<span class=crventekst>pro&#353;lo</span> - ";
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
			if(str_punacena == str_sapopustom) { str_punacena = ""; }
			out += "<tr><td class=xbelo><div class='dugme' onclick='na_sceni(" + g_5_id[jjj] + "," + xm + ",2)'>" +
		  strsc1 + "</div> - " + strsc2 + " u " + sati + ":" + minuta +
			"</td><td title='" + g_2_id[j] + "' onclick='info_p(this.title,4)' class=xbelo>" +
		  "<div class='dugme'>info</div>" +
		  "</td><td" + boja + "><a href='#" + disbl + "' data-rel='popup' class='mx' onclick='izbor(this.title," +
			str_ktg + ","+ eff_cena + ");' data-transition='slide' title='" + g_2_id[j] + "'><div class='dugme'>" + razlog + dell +
		  strpr + " <s>" + str_punacena + "</s> " + str_sapopustom + "!" + delll +
		  "</div></a></td></tr><tr><td colspan='3' class=xindigo id='t" + g_2_id[j] + "'></td></tr>";
			trkac = cc + 1;
			boja = "";
		}
		//}
	}

  //out = out.substr(0,out.length - 8) + "</table>";
	out += "</table>";
	out = out.replace(/<tr><td><tr>/g, "<tr>");
	g_akcija = 11;
	g_datum_unix = tajdan;
	//alert(g_akcija);
	g_scen_id = 0;
	document.getElementById("pid01").innerHTML=out;
	if(dgdj_info_lok1 != undefined) {
		info_p(dgdj_info_lok1,4);
	}
	$(".mx").on("taphold",function(){
		//sve_o_predstavi(this.title,1);
	});
}

function nax_sceni(sc) {
	scc = kuca(sc);
	var red_scena_u_kuci = [];
	var red2 = [];
	out = "<table>";
	for(j=0;j<g_5_id.length;j++) { // sve scene, ako kuca=scc g_5_id
		if((g_5_kuca[j]==scc) && (g_5_a[j]>0)) {
			red_scena_u_kuci.push(g_5_id[j] + ""); // the fuck!!!!!
		}
	}
	for(j=g_4_id.length-1;j>-1;j--) {//g_4_scena
		if(g_4_a[j] != 0) {
			if (red_scena_u_kuci.indexOf(g_4_scena[j],0) != -1) {
					out += "<tr><td>" +
					g_4_id[j] +
				  "</td><td class=malaslova ondblclick='glumci_u_preds(" + g_4_id[j] + ")' onclick='predst_b(" + g_4_id[j] + "," + j + "," + g_4_scena[j] + ")'>" +
				  g_4_nasl_dijakr[j] +
				  "</a></td></tr><tr><td>";
			}
		}
	}
	out = out.substr(0,out.length - 8) + "</table>";
	document.getElementById("pid79").innerHTML=out;
	scena_rpt(sc);
}

function naxx_sceni(sc) {
	scc = kuca(sc);
	var red_scena_u_kuci = [];
	var red2 = [];
	out = "<table>";
	for(j=0;j<g_5_id.length;j++) { // sve scene, ako kuca=scc g_5_id
		if((g_5_kuca[j]==scc) && (g_5_a[j]>0)) {
			red_scena_u_kuci.push(g_5_id[j] + ""); // the fuck!!!!!
		}
	}
	for(j=g_4_id.length-1;j>-1;j--) {//g_4_scena
		if(g_4_a[j] != 0) {
			if (red_scena_u_kuci.indexOf(g_4_scena[j],0) != -1) {
					out += "<tr><td>" +
					g_4_id[j] +
				  "</td><td ondblclick='glumci_u_preds(" + g_4_id[j] + ")' onclick='predst_b(" + g_4_id[j] + "," + j + "," + g_4_scena[j] + ")'>" +
				  g_4_nasl_dijakr[j] +
				  "</a></td></tr><tr><td>";
			}
		}
	}
	out = out.substr(0,out.length - 8) + "</table>";
	//alert(out);
	//document.getElementById("pid79").innerHTML=out;*************************
	scena_rpt(sc,3);
}

function naxx_dan(dd,mm,yy) {
	var tajdan = dat_to_unx(dd,mm,yy);
	var dddd = 0;
	var mmmm = 0;
	var yyyy = 0;
	var ddatumm = [];
	var boja = "";
	var i = 0;
	var out = "<table>";
	var red0 = [];
	var red1 = [];
	var out2 = "";
	k = g_2_datum_unix.lastIndexOf(tajdan);
	while(i < k+1) {
		j = g_2_datum_unix.indexOf(tajdan,i);//puni red0 g2 indeksima
		red0.push(j);
		i = j+1;
	}

	for (y=2;y<200;y++) {
		for (x=0;x<red0.length;x++) {
			j = red0[x];
			jjj = g_5_id.indexOf(g_2_mesto[j]);// g5 indeksi scena za svaki rid
			if(g_5_rb[jjj] == y) {
				red1.push(red0[x]);
			}
		}
	}


	for (x=0;x<red1.length;x++) {
		j = red1[x];

		jj = g_4_id.indexOf(g_2_predstava[j]);
		jjj = g_5_id.indexOf(g_2_mesto[j]);
		//alert(j + "." + jj + "." + jjj);
		strpr = g_4_nasl_dijakr[jj];
		strsc1 = g_5_skr_kuca[jjj];
		strsc2 = g_5_skr_scena[jjj];
		sati = g_2_hh[j];
		minuta = g_2_min[j];
		if(minuta == "0") {minuta = "00";}
		// nadji cene
		trkac = 0;
		ccx = g_3_dogadjaj.lastIndexOf(g_2_id[j]);
		//alert(ccx);
		//if(g_2_status[j] == 0) {
		while(trkac<=ccx) {
			cc = g_3_dogadjaj.indexOf(g_2_id[j],trkac);
			dddd = g_2_dd[j];
			mmmm = g_2_mm[j];
			yyyy = g_2_yy[j];
			ddatumm = ddmmyy(dddd + "." + mmmm + "." + yyyy);
			str_punacena = g_3_punacena[cc];
			str_ktg = g_3_ktg[cc];
			str_sapopustom = g_3_sapopustom[cc];
			eff_cena = str_sapopustom;
			out += "<tr><td><input title='" + g_2_id[j] + "' onclick='prikazi_karte_dg(this.title,1)' value='" + dddd + "." + mmmm + "." + yyyy + "' type='button'>";
		  out += "</td><td class='malaslova'>" + strsc1 + "." + strsc2;
		  out += "</td><td class='malaslova'>" + strpr;
		  out += "</td><td class='malaslova'>" + str_punacena;
		  out += "</td><td class='malaslova'>" + str_sapopustom;
		  out += "</td><td class='malaslova'>" + eff_cena;
		  out += "</td><td class='malaslova'>" + str_ktg + "</td></tr>";
			out2 += dddd + "." + mmmm + " " + strpr + " " + strsc1 + " - " + strsc2 + " prodato:%";
			trkac = cc + 1;
		}
	}

	out += "</table>";


	document.getElementById("pid197").innerHTML=out;
	document.getElementById("za_odjavu").value=out2;

}

function predst_b(prs,iprs,sc) {
	tekst = g_4_nasl_dijakr[iprs];
	document.getElementById("predstava_b").value = tekst;
	document.getElementById("predstava_b").title = prs;
	document.getElementById("scena_b").value = sc;
}

function izaberi_dan(dd,mm,yy) {
	tajdan = dat_to_unx(dd,mm,yy);
	tekst = dd + "." + mm + "." + yy;
	document.getElementById("datum_b").value = tekst;
	document.getElementById("datum_b").title = tajdan;
	kalendar_akcija_rpt(dd,mm,yy); //document.getElementById("pid79").innerHTML=kalendar_akcija_rpt(dd,mm,yy);
}

function izaberi_danxx(dd,mm,yy) {
	tajdan = dat_to_unx(dd,mm,yy);
	tekst = dd + "." + mm + "." + yy;
	//document.getElementById("datum_b").value = tekst;
	//document.getElementById("datum_b").title = tajdan;
	//kalendar_akcija_rpt(dd,mm,yy); //document.getElementById("pid79").innerHTML=kalendar_akcija_rpt(dd,mm,yy);
	alert(dd + "," + mm + "," + yy);
}

function ajenulax(xi) {
	var nulovanje = new XMLHttpRequest();
	url = g_prefiks + "pozorista.net/np/get_rep.php?akcija=555&preds=" + xi;
	nulovanje.open("GET", url, true);
	nulovanje.send();
}

function naslovna() {
	g_akcija = 77;
	var span3 = "3";
  var span4 = "4";
  var prelom = "";
  var span_plus3 = "";
  var span_plus4 = "";
  if(sirina_broj < 769) {
    span3 = "2";
    span4 = "3";
    prelom = "</tr><tr>";
    span_plus3 = "colspan='2'";
    span_plus4 = "colspan='3'";
  }
	if((document.getElementById("hid_dd").value != ".") && (document.getElementById("hid_mm").value != ".") && (document.getElementById("hid_yy").value != ".")) {
	  ddddd = document.getElementById("hid_dd").value;
	  mmmmm = document.getElementById("hid_mm").value;
	  yyyyy = document.getElementById("hid_yy").value;
	  na_dan(ddddd,mmmmm,yyyyy);
	} else if ((document.getElementById("hid_sc").value != ".") && (document.getElementById("hid_mmm").value != ".") && (document.getElementById("hid_kv").value != ".")) {
	  scsc = document.getElementById("hid_sc").value;
	  mmmmmm = document.getElementById("hid_mmm").value;
		dk = new Date();
    godinak = dk.getFullYear();
	  kvkv = document.getElementById("hid_kv").value;
	  na_sceni(scsc,mmmmmm,godinak,kvkv);
	} else {
	var idovix = [];
	var idovixx = [];
	var boja = [];
	boja[0] = " class=xbelo";
	boja[1] = " class=xbelo";
	var outout = ""; //g_5_naziv_kuce
	var out = "<table class=xcrno style='width:80%; overflow-x: auto;'><tr><td class=xindigo2 colspan='4' style='overflow-x: auto;'>";
	out += "<table style='width:100%;'><tr><td colspan='3'><table class=xcrno style='width:100%;'><tr><td class=xbelo id='td_naslovna'>";
	out += "<input type='button' value='dana&#353;nja spec ponuda' class=xindigo3 id='dugme_naslovna' onclick='naslovna()'></td>" + prelom + "<td class=xindigo3 id='td_izbor'>";
	out += "<input type='button' value='preporuka' class=xindigo2 id='dugme_izbor' onclick='edt_izbor()'></td>" + prelom + "<td class=xindigo3 id='td_zabava'>";
	out += "<input type='button' value='zabava' class=xindigo2 id='dugme_zabava' onclick='edt_zabava()'></td>" + prelom + "<td class=xindigo3 id='td_decje'>";
	out += "<input type='button' value='de&#269;je' class=xindigo2 id='dugme_decje' onclick='edt_opera(11)'></td></tr></table></td></tr></table>";
	if(document.getElementById("hid_02").value == "vikend") {
		 out = "<table class=xcrno style='width:100%;'><tr><td class=xindigo2 colspan='4'>specijalna vikend ponuda</td></tr></table>";
	}
	if(document.getElementById("hid_vr").value == "opera") {
		opere(7);
		 out = "<table class=xcrno style='width:100%;'><tr><td class=xindigo2 colspan='4'>*** opera *** opera *** opera ***</td></tr></table>";
	}
	if(document.getElementById("hid_vr").value == "decje") {
		opere(11);
		 out = "<table class=xcrno style='width:100%;'><tr><td class=xindigo2 colspan='4'>*** de&#269;je predstave ***</td></tr></table>";
	}
	var duzina = 0;
	if(document.getElementById("hid_02").value == "normal") {
		duzina = idovi.length;
	}
	if(document.getElementById("hid_02").value == "vikend") {
		duzina = idovi2.length;
	}
	if(document.getElementById("hid_02").value == "izbor3") {
		duzina = idovi3.length;
	}
	if(document.getElementById("hid_02").value == "izbor4") {
		duzina = idovi4.length;
	}
	if(document.getElementById("hid_vr").value == "opera") {
		duzina = idovi7.length;
	}
	if(document.getElementById("hid_vr").value == "decje") {
		duzina = idovi7.length;
	}

	for(iii=0;iii<duzina;iii++) {
		if(document.getElementById("hid_02").value == "normal" && document.getElementById("hid_vr").value == ".") {
			idovix = rc_index(idovi[iii],ktgr[iii]);
		}
		if(document.getElementById("hid_02").value == "vikend") {
			idovix = rc_index(idovi2[iii],ktgr2[iii]);
		}
		if(document.getElementById("hid_02").value == "izbor3") {
			idovix = rc_index(idovi3[iii],ktgr[iii]);
		}
		if(document.getElementById("hid_02").value == "izbor4") {
			idovix = rc_index(idovi4[iii],ktgr4[iii]);
		}
		if(document.getElementById("hid_vr").value == "opera") {
			idovix = rc_index(idovi7[iii],ktgr7[iii]);
		}
		if(document.getElementById("hid_vr").value == "decje") {
			idovix = rc_index(idovi7[iii],ktgr7[iii]);
		}
		id_sc = g_2_mesto[idovix[0]];
		idovixx.push(idovi[iii]);
		xii = g_5_id.indexOf(id_sc);
		if((iii % 2) == 0) {
			out += "<table class=xcrno style='width:100%;'><tr><td colspan='3' class=xindigo'>" + g_5_naziv_kuce[xii] + " - " + g_5_naziv_scene[xii] + "</td></tr><tr><td>";
			if(document.getElementById("hid_02").value == "normal" && document.getElementById("hid_vr").value == ".") {
				out += red_spec_cena(idovi[iii],ktgr[iii]);
			}
			if(document.getElementById("hid_02").value == "vikend") {
				out += red_spec_cena(idovi2[iii],ktgr2[iii]);
			}
			if(document.getElementById("hid_02").value == "izbor3") {
				out += red_spec_cena(idovi3[iii],ktgr[iii]);
			}
			if(document.getElementById("hid_02").value == "izbor4") {
				out += red_spec_cena(idovi4[iii],ktgr4[iii]);
			}
			if(document.getElementById("hid_vr").value == "opera") {
				out += red_spec_cena(idovi7[iii],ktgr7[iii]);
			}
			if(document.getElementById("hid_vr").value == "decje") {
				out += red_spec_cena(idovi7[iii],ktgr7[iii]);
			}
			out += "</table>";
		} else {
			out += "<table class=xcrno style='width:100%;'><tr><td colspan='3' class=xindigo'>" + g_5_naziv_kuce[xii] + " - " + g_5_naziv_scene[xii] + "</td></tr><tr><td>";
			if(document.getElementById("hid_02").value == "normal" && document.getElementById("hid_vr").value == ".") {
				out += red_spec_cena(idovi[iii],ktgr[iii]);
			}
			if(document.getElementById("hid_02").value == "vikend") {
				out += red_spec_cena(idovi2[iii],ktgr2[iii]);
			}
			if(document.getElementById("hid_02").value == "izbor3") {
				out += red_spec_cena(idovi3[iii],ktgr[iii]);
			}
			if(document.getElementById("hid_02").value == "izbor4") {
				out += red_spec_cena(idovi4[iii],ktgr4[iii]);
			}
			if(document.getElementById("hid_vr").value == "opera") {
				out += red_spec_cena(idovi7[iii],ktgr7[iii]);
			}
			if(document.getElementById("hid_vr").value == "decje") {
				out += red_spec_cena(idovi7[iii],ktgr7[iii]);
			}
			out += "</table>";
		}
	}
	outout += out;
	outout += "</td></tr></table>";
	outout = outout.replace(/<tr><td><tr>/g, "<tr>");
	for(x=0;x<50;x++) {
		outout = outout.replace("</table><table class=xcrno style='width:100%;'>", "");
	}
	outout = "<br /><br /><br /><br /><h1 style='text-align: center; color: #00003f; font-size: 36px; width: 96%;'>klub ponovo radi<br />po&#269;ev od ponedeljka, 11. septembra</ h1><br /><br /><br /><br />";
	document.getElementById("pid01").innerHTML=outout;
	}
	document.getElementById("hid_dd").value = ".";
	document.getElementById("hid_mm").value = ".";
	document.getElementById("hid_yy").value = ".";
	document.getElementById("hid_kv").value = ".";
	document.getElementById("hid_sc").value = ".";
	document.getElementById("hid_mmm").value = ".";
	document.getElementById("hid_02").value = "normal";
	if(document.getElementById("hid_start").value == ".") {
		info_p(odredi_dgdj_info(idovixx));
	}
	if(document.getElementById("hid_start").value * 1 == 2) {
		//alert(document.getElementById("hid_start").value * 1);
		edt_izbor();
	}
	if(document.getElementById("hid_start").value * 1 == 3) {
		edt_zabava();
	}
	if(document.getElementById("hid_start").value * 1 > 3) {
		edt_opera(document.getElementById("hid_start").value * 1);
	}
	document.getElementById("tip_div").innerHTML = "";
	tekstovi_load();
	document.getElementById("hid_vr").value = ".";
	ucitavanje_komentara(0,0);
}

function edt_izbor() {
	var span3 = "3";
  var span4 = "4";
  var prelom = "";
  var span_plus3 = "";
  var span_plus4 = "";
  if(sirina_broj < 769) {
    span3 = "2";
    span4 = "3";
    prelom = "</tr><tr>";
    span_plus3 = "colspan='2'";
    span_plus4 = "colspan='3'";
  }
	var idovix = [];
	var idovixx = [];
	var boja = [];
	boja[0] = " class=xbelo";
	boja[1] = " class=xbelo";
	var outout = ""; //g_5_naziv_kuce
	var out = "<table class=xcrno style='width:80%; overflow-x: auto;'><tr><td class=xindigo2 colspan='4' style='overflow-x: auto;'>";
	out += "<table style='width:100%;'><tr><td colspan='3'><table class=xcrno style='width:100%;'><tr><td class=xindigo3 id='td_naslovna'>";
	out += "<input type='button' value='dana&#353;nja spec ponuda' class=xindigo2 id='dugme_naslovna' onclick='naslovna()'></td>" + prelom + "<td class=xbelo id='td_izbor'>";
	out += "<input type='button' value='preporuka' class=xindigo3 id='dugme_izbor' onclick='edt_izbor()'></td>" + prelom + "<td class=xindigo3 id='td_zabava'>";
	out += "<input type='button' value='zabava' class=xindigo2 id='dugme_zabava' onclick='edt_zabava()'></td>" + prelom + "<td class=xindigo3 id='td_decje'>";
	out += "<input type='button' value='de&#269;je' class=xindigo2 id='dugme_decje' onclick='edt_opera(11)'></td></tr></table></td></tr></table>";
	var duzina = 0;
	duzina = idovi33.length;

	for(iii=0;iii<duzina;iii++) {
		idovix = rc_index(idovi33[iii],ktgr33[iii]);
		idovixx.push(idovi33[iii]);
		id_sc = g_2_mesto[idovix[0]];
		xii = g_5_id.indexOf(id_sc);
		if((iii % 2) == 0) {
			out += "<table class=xcrno style='width:100%;'><tr><td colspan='3' class=xindigo'>" + g_5_naziv_kuce[xii] + " - " + g_5_naziv_scene[xii] + "</td></tr><tr><td>";
			out += red_spec_cena(idovi33[iii],ktgr33[iii]);
			out += "</table>";
		} else {
			out += "<table class=xcrno style='width:100%;'><tr><td colspan='3' class=xindigo'>" + g_5_naziv_kuce[xii] + " - " + g_5_naziv_scene[xii] + "</td></tr><tr><td>";
			out += red_spec_cena(idovi33[iii],ktgr33[iii]);
			out += "</table>";
		}
	}
	outout += out;
	outout += "</td></tr></table>";
	outout = outout.replace(/<tr><td><tr>/g, "<tr>");
	for(x=0;x<50;x++) {
		outout = outout.replace("</table><table class=xcrno style='width:100%;'>", "");
	}
	document.getElementById("pid01").innerHTML=outout;
	document.getElementById("hid_02").value = "normal";
	info_p(odredi_dgdj_info(idovixx));
}

function edt_zabava() {
	var span3 = "3";
  var span4 = "4";
  var prelom = "";
  var span_plus3 = "";
  var span_plus4 = "";
  if(sirina_broj < 769) {
    span3 = "2";
    span4 = "3";
    prelom = "</tr><tr>";
    span_plus3 = "colspan='2'";
    span_plus4 = "colspan='3'";
  }
	var idovix = [];
	var idovixx = [];
	var boja = [];
	boja[0] = " class=xbelo";
	boja[1] = " class=xbelo";
	var outout = ""; //g_5_naziv_kuce
	var out = "<table class=xcrno style='width:80%; overflow-x: auto;'><tr><td class=xindigo2 colspan='4' style='overflow-x: auto;'>";
	out += "<table style='width:100%;'><tr><td colspan='3'><table class=xcrno style='width:100%;'><tr><td class=xindigo3 id='td_naslovna'>";
	out += "<input type='button' value='dana&#353;nja spec ponuda' class=xindigo2 id='dugme_naslovna' onclick='naslovna()'></td>" + prelom + "<td class=xindigo3 id='td_izbor'>";
	out += "<input type='button' value='preporuka' class=xindigo2 id='dugme_izbor' onclick='edt_izbor()'></td>" + prelom + "<td class=xbelo id='td_zabava'>";
	out += "<input type='button' value='zabava' class=xindigo3 id='dugme_zabava' onclick='edt_zabava()'></td>" + prelom + "<td class=xindigo3 id='td_decje'>";
	out += "<input type='button' value='de&#269;je' class=xindigo2 id='dugme_decje' onclick='edt_opera(11)'></td></tr></table></td></tr></table>";
	var duzina = 0;
	duzina = idovi77.length;

	for(iii=0;iii<duzina;iii++) {
		idovix = rc_index(idovi77[iii],ktgr77[iii]);
		idovixx.push(idovi77[iii]);
		id_sc = g_2_mesto[idovix[0]];
		xii = g_5_id.indexOf(id_sc);
		if((iii % 2) == 0) {
			out += "<table class=xcrno style='width:100%;'><tr><td colspan='3' class=xindigo'>" + g_5_naziv_kuce[xii] + " - " + g_5_naziv_scene[xii] + "</td></tr><tr><td>";
			out += red_spec_cena(idovi77[iii],ktgr77[iii]);
			out += "</table>";
		} else {
			out += "<table class=xcrno style='width:100%;'><tr><td colspan='3' class=xindigo'>" + g_5_naziv_kuce[xii] + " - " + g_5_naziv_scene[xii] + "</td></tr><tr><td>";
			out += red_spec_cena(idovi77[iii],ktgr77[iii]);
			out += "</table>";
		}
	}
	outout += out;
	outout += "</td></tr></table>";
	outout = outout.replace(/<tr><td><tr>/g, "<tr>");
	for(x=0;x<50;x++) {
		outout = outout.replace("</table><table class=xcrno style='width:100%;'>", "");
	}
	document.getElementById("pid01").innerHTML=outout;
	document.getElementById("hid_02").value = "normal";
	info_p(odredi_dgdj_info(idovixx));
}

function edt_opera(i3) {
	opere(i3);
	var naslovx = "";
	if(i3 == 2) {
		naslovx = "komedija";
	}
	if(i3 == 7) {
		naslovx = "opera";
	}
	if(i3 == 8) {
		naslovx = "balet";
	}
	var span3 = "3";
  var span4 = "4";
  var prelom = "";
  var span_plus3 = "";
  var span_plus4 = "";
  if(sirina_broj < 769) {
    span3 = "2";
    span4 = "3";
    prelom = "</tr><tr>";
    span_plus3 = "colspan='2'";
    span_plus4 = "colspan='3'";
  }
	var idovix = [];
	var idovixx = [];
	var boja = [];
	boja[0] = " class=xbelo";
	boja[1] = " class=xbelo";
	var outout = ""; //g_5_naziv_kuce
	if(i3 == 11) {
		var out = "<table class=xcrno style='width:80%; overflow-x: auto;'><tr><td class=xindigo2 colspan='4' style='overflow-x: auto;'>";
		out += "<table style='width:100%;'><tr><td colspan='3'><table class=xcrno style='width:100%;'><tr><td class=xindigo3 id='td_naslovna'>";
		out += "<input type='button' value='dana&#353;nja spec ponuda' class=xindigo2 id='dugme_naslovna' onclick='naslovna()'></td>" + prelom + "<td class=xindigo3 id='td_izbor'>";
		out += "<input type='button' value='preporuka' class=xindigo2 id='dugme_izbor' onclick='edt_izbor()'></td>" + prelom + "<td class=xindigo3 id='td_zabava'>";
		out += "<input type='button' value='zabava' class=xindigo2 id='dugme_zabava' onclick='edt_zabava()'></td>" + prelom + "<td class=xbelo id='td_decje'>";
		out += "<input type='button' value='de&#269;je' class=xindigo3 id='dugme_decje' onclick='edt_opera(11)'></td></tr></table></td></tr></table>";
	}
	if((i3 == 7) || (i3 == 8) || (i3 == 2)) {
		var out = "<table class=xcrno style='width:80%; overflow-x: auto;'><tr><td class=xindigo2 style='overflow-x: auto;'>";
		out += "<table style='width:100%; overflow-x: scroll;'><tr><td colspan='3' class=xcrno> * " + naslovx + " * " + naslovx + " * " + naslovx + " * " + " * </td></tr></table>";
	}
	var duzina = 0;
	duzina = idovi7.length;

	for(iii=0;iii<duzina;iii++) {
		idovix = rc_index(idovi7[iii],ktgr7[iii]);
		idovixx.push(idovi7[iii]);
		id_sc = g_2_mesto[idovix[0]];
		xii = g_5_id.indexOf(id_sc);
		if((iii % 2) == 0) {
			out += "<table class=xcrno style='width:100%;'><tr><td colspan='3' class=xindigo'>" + g_5_naziv_kuce[xii] + " - " + g_5_naziv_scene[xii] + "</td></tr><tr><td>";
			out += red_spec_cena(idovi7[iii],ktgr7[iii]);
			out += "</table>";
		} else {
			out += "<table class=xcrno style='width:100%;'><tr><td colspan='3' class=xindigo'>" + g_5_naziv_kuce[xii] + " - " + g_5_naziv_scene[xii] + "</td></tr><tr><td>";
			out += red_spec_cena(idovi7[iii],ktgr7[iii]);
			out += "</table>";
		}
	}
	outout += out;
	outout += "</td></tr></table>";
	outout = outout.replace(/<tr><td><tr>/g, "<tr>");
	for(x=0;x<50;x++) {
		outout = outout.replace("</table><table class=xcrno style='width:100%;'>", "");
	}
	document.getElementById("pid01").innerHTML=outout;
	document.getElementById("hid_02").value = "normal";
	info_p(odredi_dgdj_info(idovixx));
}

function odredi_dgdj_info(idovixx) {
	dgdj_info = idovixx[Math.floor(4 * Math.random())];
	return dgdj_info;
}

function red_spec_cena(iz_r,ktgg) {
	//alert(iz_r);
	var out = "";
	var svex = 0;
	if(idovi7.length > 0) {
		svex = 2;
	}
	var aa = [];
	var spec_red = "";
	var boja = " class=xindigo";
	aa = rc_index(iz_r,ktgg);
	var str_punacena = g_3_punacena[aa[1]];
	var str_ktg = g_3_ktg[aa[1]];
	var str_speccena = g_3_speccena[aa[1]];
	var eff_cena = str_speccena;
	var rpr = g_2_predstava[aa[0]];
	var prindex = g_4_id.indexOf(rpr *1);
	var strpr = g_4_nasl_dijakr[prindex];//***
	if(g_4_tx[prindex] * 1 == 11) {
		boja = " class=xindigog";
	}
	sati = g_2_hh[aa[0]];
	minuta = g_2_min[aa[0]];
	if(minuta == "0") {minuta = "00";}

	disbl = "Popup_predst_menu";
	razlog = "";
	dell = "";
	delll = "";
	//kolikox++;
	//cc = g_3_dogadjaj.indexOf(g_2_id[j],trkac);
	dddd = g_2_dd[aa[0]];
	mmmm = g_2_mm[aa[0]];
	yyyy = g_2_yy[aa[0]];
	ddatumm = ddmmyy(dddd + "." + mmmm + "." + yyyy);

	u_vremenu = proslo(ddatumm);
	if(obustavljeno(iz_r) == 1) {
		disbl = "";
		razlog = "<span class=crventekst>prodaja obustavljena</span> - ";
		dell = "";
		delll = "";
		boja = " class=xsivkasto";
	}
	if(aa[2] * 1 == -1) {
		disbl = "";
		razlog = "<span class=crventekst>rasprodato</span> - ";
		dell = "";
		delll = "";
		boja = " class=xsivkasto";
	}
	if(u_vremenu < 0) {
		disbl = "";
		razlog = "pro&#353;lo - ";
		dell = "";
		delll = "";
		boja = " class=xsivkasto";
	}
	if(aa[2] * 1 == -2) {
		disbl = "";
		razlog = "<span class=crventekst>otkazano</span> - ";
		dell = "";
		delll = "";
		boja = " class=xsivkasto";
	}

//if((svex == 0) || (u_vremenu >= 0)) {
	out = "<tr><td><div class='dugme' onclick='na_dan(" + g_2_dd[aa[0]] + "," + g_2_mm[aa[0]] + "," + g_2_yy[aa[0]] + ")'>";
	if(str_punacena == eff_cena) { str_punacena = ""; }
	out += g_2_dd[aa[0]] + "." + g_2_mm[aa[0]] + "</div> u " + sati + ":" + minuta + "</td><td title='" + g_2_id[aa[0]] + "' onclick='info_p(this.title,4)'>";


	out += "<div class='dugme'>info</div>" +
	"</td><td" + boja + "><a href='#" + disbl + "' data-rel='popup' class='mx' onclick='izbor(this.title,";
	out += str_ktg + ","+ eff_cena + ");' title='" + g_2_id[aa[0]] + "'><div class='dugme'>" + razlog + dell +	strpr + " <s>" + str_punacena + "</s> " + eff_cena + "!" +
	"</div></a></td></tr><tr><td colspan='3' class=xindigo id='t" + g_2_id[aa[0]] + "'></td></tr>";
//}

	spec_red = out;
	return spec_red;
}

function rc_index(iz_r,ktgg) {
	var aa = [];
	var rindex = g_2_id.indexOf(iz_r * 1);
	var cindex = g_3_dogadjaj.indexOf(iz_r);
	if(1 * g_3_ktg[cindex] != ktgg * 1) {
		cindex = g_3_dogadjaj.indexOf(iz_r,cindex + 1);
	}
	if(1 * g_3_ktg[cindex] != ktgg * 1) {
		cindex = g_3_dogadjaj.indexOf(iz_r,cindex + 1);
	}
	if(1 * g_3_ktg[cindex] != ktgg * 1) {
		cindex = g_3_dogadjaj.indexOf(iz_r,cindex + 1);
	}
	var cstatus = g_3_status[cindex];
	aa[0] = rindex;
	aa[1] = cindex;
	aa[2] = cstatus;
	return aa;
}

function na_sceni(sc,mm,yy,kv) {
	var kolikox = 0;
	var disbl;
	var dell;
	var delll;
	var razlog;
	var ddatumm = [];
	var boja = "";
	var dddd = 0;
	var mmmm = 0;
	var yyyy = 0;
	var sledecimesec = [];
	scc = kuca(sc);
	var red2 = []; // indeksi u r
	for (xii=0;xii<g_5_id.length;xii++) {
		if(g_5_id[xii] == (sc * 1)) { break; }
	}
	var scena_w = "";
	if((kv * 1) == 2) { scena_w = " - " + g_5_naziv_scene[xii]; }
	var out = "<table style='width:80%; overflow-x: scroll;'><tr><td colspan='3' class=xcrno>" + g_5_naziv_kuce[xii] + scena_w + "</td></tr>"; //g_5_naziv_kuce

	for(xi=-2;xi<6;xi++) { // 3 meseca napred !!!
	sledecimesec = sledeci_mesec(mm * 1 + xi,1);
	mmm = sledecimesec[0];
	dan1 = dat_to_unx(1,mmm + sledecimesec[1]*1,yy);
	dan2 = dat_to_unx(broj_dana_u_mesecu(mmm + sledecimesec[1]*1,yy),mmm + sledecimesec[1]*1,yy);
	for(ii=dan1;ii<dan2+1;++ii) {
		trkac = 0;
		poslednjiindeksdana = g_2_datum_unix.lastIndexOf(ii);
		while(trkac<=poslednjiindeksdana) {
			aktindeksdana = g_2_datum_unix.indexOf(ii,trkac);
			if(kv==2) {
				if(g_2_mesto[aktindeksdana] == sc) { red2.push(aktindeksdana); }
			}
			if(kv==1) {
				if(kuca(g_2_mesto[aktindeksdana]) == scc) { red2.push(aktindeksdana); }
			}
			trkac = aktindeksdana + 1;
			}
		}
	}
	jelbio = 0;
	sidro = "";
	var id_dgdj_info_lok1 = Math.floor(4 * Math.random());
	if(red2.length<4) {
		id_dgdj_info_lok1 = Math.floor(red2.length * Math.random());
	}
	for(j=0;j<red2.length;j++) { // za svaki izdvojeni r-id
		var rj = red2[j];
		var d = new Date();
		aaa = d.getDate();
		cc = g_3_dogadjaj.indexOf(g_2_id[rj]);
		dddd = g_2_dd[rj];
		mmmm = g_2_mm[rj];
		yyyy = g_2_yy[rj];
		ddatumm = ddmmyy(dddd + "." + mmmm + "." + yyyy);
		if(proslo(ddatumm) > -1) {


		// nadji cene
		trkac = 0;
		//document.getElementById("pid441").innerHTML = rj + ",,," + j;
		//alert(g_2_id[rj]);
		ccx = g_3_dogadjaj.lastIndexOf(g_2_id[rj]);
		//if(g_2_status[rj] == 0) {
		while(trkac<=ccx) { // za svaki izdvojeni r-id dok ima kategorija
			boja = " class=xbelo";
			disbl = "Popup_predst_menu";
			razlog = "";
			dell = "";
			delll = "";
			kolikox++;
			if (id_dgdj_info_lok1 == kolikox) {
				dgdj_info_lok1 = g_2_id[rj];
			}
			cc = g_3_dogadjaj.indexOf(g_2_id[rj],trkac);
			if(obustavljeno(g_2_id[rj]) == 1) {
				disbl = "";
				razlog = "<span class=crventekst>prodaja obustavljena</span> - ";
				dell = "";
				delll = "";
				boja = " class=xsivkasto";
			}
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
			if(g_4_tx[jj] * 1 == 11) {
				boja = " class=xindigog";
			}
			//alert(strpr + " - ovo je naslov predstave" + g_2_dd[i] + " - datum" + g_2_mm[i] + " - datum" + g_2_yy[i] + " - datum");
			minxxx = g_2_min[i];
			if(g_2_min[i] * 1 == 0) { minxxx = "00"; }
			jjj = g_5_id.indexOf(g_2_mesto[i]);
			strsc1 = g_5_skr_kuca[jjj];
			strsc2 = g_5_skr_scena[jjj];
			if(str_punacena == str_sapopustom) { str_punacena = ""; }
			out += "<tr" + boja + "><td class=xbelo><div class='dugme' onclick='na_dan(" + g_2_dd[i] + "," + g_2_mm[i] + "," + g_2_yy[i] + ")'>" +
			sidro +
		  g_2_dd[i] + "." + g_2_mm[i] +
			"</div> u " + g_2_hh[i] + ":" + minxxx +
		  "</td><td title='" + g_2_id[rj] + "' onclick='info_p(this.title,4)' class=xbelo><div class='dugme'>info</div>" +
			"</td><td" + boja + "><a href='#" + disbl + "' data-rel='popup' onclick='izbor(this.title," + str_ktg + ","+ eff_cena + ");' data-transition='slide' title='" + g_2_id[rj] + "'><div class='dugme'>" +
		  razlog + dell + strpr + " <s>" + str_punacena + "</s> " + str_sapopustom + "!" + delll +
		  "</div></a></td></tr><tr><td colspan='3' class=xindigo id='t" + g_2_id[rj] + "'></td></tr>";
			trkac = cc + 1;
			boja = "";
		}
	}}
	//out = out.substr(0,out.length - 8) + "</table>";
	out += "</table>";
	out = out.replace(/<tr><td><tr>/g, "<tr>");
	g_akcija = 22;
	//g_2_datum_unix = 0;
	g_scen_id = sc;
	document.getElementById("pid01").innerHTML=out;
	document.getElementById("tip_div").innerHTML = "";
	if(dgdj_info_lok1 != undefined) {
		info_p(dgdj_info_lok1,4);
	}
	$(".mx").on("taphold",function(){
		alert(this.title);
	});

	malitrkac = 0;
	/*
	while(1) {
		bbb = document.getElementById("pid01").innerHTML;
		malitrkac++;
		if((ccc = bbb.search("ovde")) > 0) {
			window.scroll(0,findPos(document.getElementById("ovde")));
			break; }
		if(malitrkac > 10000) {
			break; }
	}*/
}

function sledeci_danx(d_u,smer) {
	bb = dat_to_unx(dd,mm,yy) + smer;
}

function dan(g_datum_unix,aaa) {
	ux = g_datum_unix * 24 * 3600 * 1000;
	dxx = new Date(ux);
	dd = dxx.getUTCDate();
	mm = dxx.getUTCMonth();
	yy = dxx.getFullYear();
	switch(aaa) {
		case 1:
			return dd;
			break;
		case 2:
			return mm + 1;
			break;
		case 3:
			return yy;
			break;
	}
}

function kuca(sc) {
	ox = g_5_id.indexOf(sc);
	scx = g_5_kuca[ox];
	return scx;
}
/*
function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
}
*/

function obustavljeno(rid) {
	var stajemo = 0;
	var j = g_2_id.indexOf(rid * 1);
	var prpr = g_2_predstava[j];
	//alert(prpr);
	var prprid = g_4_id.indexOf(prpr * 1);
	var prprsv = g_4_svrta[prprid];
	datumunix = g_2_datum_unix[j];
	scena = g_2_mesto[j];
	var ddd = new Date();
	var hxx = ddd.getHours();
	var xxx = ddd.getDay();
	var mxx = ddd.getMonth();
	var dxx = ddd.getDate();
	var txx = ddd.getTime();
	datumunix2 = parseInt((txx + 1 * 3600000) / (24 * 3600000));
	if((datumunix - datumunix2 == 0) && xxx == 0) {
		stajemo = 1;
	}
	if((datumunix - datumunix2 == 0) && hxx > 18) {
		stajemo = 1;
	}
	if((datumunix - datumunix2 == 1) && hxx > 18 && datumunix % 7 == 3) {
		stajemo = 1;
	}
	if((datumunix - datumunix2 == 1) && (scena == 68 || scena == 77 || (scena == 42 && rid * 1 != 100746)) && hxx > 18) {
		stajemo = 1;
	}
	if((datumunix - datumunix2 == 2) && (scena == 68 || scena == 77 || (scena == 42 && rid * 1 != 100746)) && hxx > 18 && xxx == 6) {
		stajemo = 1;
	}
	if((datumunix - datumunix2 == 1) && (scena == 68 || scena == 77 || (scena == 42 && rid * 1 != 100746)) && xxx == 0) {
		stajemo = 1;
	}
	if((datumunix - datumunix2 == 0) && (scena == 68 || scena == 77 || (scena == 42 && rid * 1 != 100746))) {
		stajemo = 1;
	}
	//alert(datumunix + " - " + datumunix2 + " - " + xxx + " - " + hxx);
	//if(prpr * 1 == 2457) { stajemo = 0; }
	return stajemo;
}
