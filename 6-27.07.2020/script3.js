let datum = new Date();
let godina = datum.getFullYear();
let mesec = datum.getMonth()+1;//1-12
let dan = datum.getDate();//1-31
let prestupna = false;
let preostalo;
if ( (tekucaGodina%4==0 && tekucaGodina%100!=0) || tekucaGodina%400==0) {
    prestupna=true;
}
switch (mesec) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        //31dan
     preostalo = 31- dan;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        //30dana
    preostalo = 30- dan;
        break;
    case 2:if (prestupna) {
        preostalo=29-dan;
    } else {
        preostalo=28-dan;
    }
        //28-29 dana
        break;
    default:
        break;
}
console.log(`Preostalo je jos ${preostalo} dan do kraja meseca.`);

document.getElementById("demo").innerHTML = "Preostalo je jos " + preostalo + " dan do kraja meseca.";
