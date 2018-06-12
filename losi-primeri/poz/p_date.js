function broj_dana_u_mesecu(mm,yy) {
	switch(mm) {
		case 1:
			broj=31;
			break;
		case 2:
			broj=28;
			argum=eng_naziv_meseca(mm) + " " + "28" + ", " + yy;
			//alert(argum);
			prs=Date.parse(argum);
			//u_broj=Math.floor(prs/86400000) +1;
			u_broj=prs;
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

function pisanje_kalendara(m,g,sw) {
	//alert("!!!!!!!!!!!");
	mx = sh_naziv_meseca(m);
	pocetak=prva_nedelja_u_mesecu(m,g)-6;
	kraj=poslednji_ponedeljak_u_mesecu(m,g)+7;
	rr=0;
	klndr="<table><tr>";
	klndr += "<tr><td colspan=7 class=hdr_01> <u onclick='kalendar_novimesec(0," + m +"," + g + ")'> ";
	klndr += String.fromCharCode(60) + " </u> " + mx + " " + g + "<u onclick=" + String.fromCharCode(39) + "kalendar_novimesec(1," + m +"," + g + ")" + String.fromCharCode(39) + "> " + String.fromCharCode(62) + " </u> </td></tr>";
	klndr += "<tr><td class=hdr_03>P</td><td class=hdr_03>U</td><td class=hdr_03>S</td><td class=hdr_03>Č</td><td class=hdr_03>P</td><td class=hdr_03>S</td><td class=hdr_03>N</td></tr>";
	brojac=0;
	for(x=pocetak;x<kraj;x++) {
		rr++;
		if((x>0) & (x<(broj_dana_u_mesecu(m,g)+1))) {
			if(brojac%7<5) {klndr += "</td><td class=body_01 onclick=" + String.fromCharCode(39) + "kalendar_akcija_rpt(" + x + "," + m + "," + g + ")" + String.fromCharCode(39) + ">" + x;}
			if(brojac%7>4) {klndr += "</td><td class=body_02 onclick=" + String.fromCharCode(39) + "kalendar_akcija_rpt(" + x + "," + m + "," + g + ")" + String.fromCharCode(39) + ">" + x;}
		} else {
			if(brojac%7<5) {klndr += "</td><td class=body_01>&nbsp;";}
			if(brojac%7>4) {klndr += "</td><td class=body_02>&nbsp;";}
		}
		if(rr%7==0) {klndr += "</tr><tr>";}
		brojac++;
	}

	klndr += "</tr></table>";

	document.getElementById("div_klndr").innerHTML=klndr;
	document.getElementById("hid_klndr").value=klndr;
}

function kalendar_novimesec(p1,p2,p3) {
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
	pisanje_kalendara(nm,ng,0);
}

function primena() {
	document.getElementById("div_klndr").innerHTML=document.getElementById("klndr").value;
}
