//Zadatak 1
let pd1= 15; //pocetak smene prvog doktora
let kd1 =20; //kraj smene prvog doktora
let pd2 =15; //pocetak smene drugog doktora
let kd2 = 21; //kraj smene drugog doktora
let prek = (Math.min(kd1, kd2) - Math.max(pd1,pd2));

if((kd1>pd2 || kd2>pd1) && (kd1 != pd2 && kd2 != pd1)) 
{
    console.log("Preklapanje smena doktora iznosi : " + prek + "h");
    
    document.getElementById("demo").innerHTML="Preklapanje smena doktora iznosi : " + "h";
} 
else
{
    console.log ("Ne poklapaju se");
    document.getElementById("demo").innerHTML="Smene se ne poklapaju"
}