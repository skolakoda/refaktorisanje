function ex_02(koje) {
  var xmlhttp_e = new XMLHttpRequest();
  url = g_prefiks + "pozorista.net/np/p_e.php?ko=" + koje;

  xmlhttp_e.onreadystatechange=function() {
   if (xmlhttp_e.readyState == 4 && xmlhttp_e.status == 200) {
   outp=analiza_e(xmlhttp_e.responseText);
 }
}
xmlhttp_e.open("GET", url, true);
xmlhttp_e.send();

//return outp;
}

function analiza_e(response) {
  var arr = JSON.parse(response);
  var i;
  var out = "<table>";
  for(i = 0; i < arr.length; i++) {
  out += "<tr><td>" +
  arr[i].korisnik_ime +
  "</td><td>" +
  arr[i].korisnik_prezime +
  "</td><td>" +
  arr[i].korisnik_email +
  "</td><td>" +
  arr[i].korisnik_ident +
  "</td><td>" +
  arr[i].korisnik_clbroj +
  "</td><td>" +
  arr[i].zapis_sta +
  "</td><td>" +
  arr[i].zapis_koliko +
  "</td><td>" +
  arr[i].zapis_c1 +
  "</td><td>" +
  arr[i].zapis_p +
  "</td></tr></table>";
  }
  document.getElementById("uclanj").innerHTML=out;
}
