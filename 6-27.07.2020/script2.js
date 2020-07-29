//zadatak 2

// sme   1 covek  na 3m^2
//nije dozovljen unosi negativnih vrednosti jer takve vrednosti nisu validne.
var v = 100 ; //broj kvadrata lokala
var n =  31; //broj u lokalu 
//var vi = Math.round(v/n); // broj koliko ima kvadrata na jednog coveka
var ns = v/3; // broj kolko osoba sme na datu kvadraturu lokala
var np=n-ns; // broj osoba koliko treba da napuste lokal
np1=Math.ceil(np);
 //broj koji treba da napusti
if (np1 <= 0) 
{
    console.log("DA"); // kafic se pridrzava mera
    document.getElementById("demo").innerHTML ="DA"+" Kafic se pridrzava mera."
}
else
{
    console.log ("NE");
    console.log(`Kafic treba da napusti ${np1} osoba.`);
    document.getElementById("demo").innerHTML ="NE"+"Kafic se ne pridrzava mera" + " Kafic treba da napusti " +np1 +" osoba.";
}

