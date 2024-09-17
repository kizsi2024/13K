/*
function interjukerdes (foglalkozas) {
    if (foglalkozas === 'tanár') {
        return function (nev) {
            console.log(nev + ', meg tudná mondani, hogy milyen tárgyakat oktat?');
        }
    } else if (foglalkozas === 'eladó') {
        return function(nev) {
            console.log(nev + ', hogyan kezelne egy vevői reklamációt?');
        }
    } else {
        return function (nev) {
            console.log('Mi a foglalkozása kedves'   + nev + '?');
        }
    }
}
    
    
var kerdesTanaroknak = interjukerdes("tanár")
kerdesTanaroknak ('Pál');
var kerdesEladoknak = interjukerdes('eladó');
kerdesTanaroknak ('Katalin');
kerdesTanaroknak ('Géza');
kerdesTanaroknak('Ilona');


function jatek(){
    var pont = Math.random() *10;
    console.log(pont >= 5)
}
*/

(function(teszt){
    var pont = Math.random() *10;
    console.log(pont >= 5);
    console.log(teszt)
})


function nyugdij(ev) {
    var szoveg = 'Nyugdíjazásig hátralévő évek száma:'
    return function (szuletesiEv) {
        var datumObjektum = new Date();
        var aktualisEv = datumObjektum.getFullYear();
        var kor = aktualisEv - szuletesiEv;
        console.log(szoveg + (ev - kor));
    }
}


var nyugdijazasUSA = nyugdij(66);
nyugdijazasUSA (1978);
nyugdij(66) (1978);

/*Closure összefoglaló: egy belső függvény
hogy a külső függvény befejezte a futását.*/

var leptet = (
    function() {
        var szamlalo = 0;
        return function() {
            szamlalo++; // szamlalo = szamlalo +1
            console.log(szamlalo);
        }
    }
)();

leptet();
leptet();
leptet();