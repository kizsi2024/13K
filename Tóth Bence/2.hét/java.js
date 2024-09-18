// Visszaadott függvények

function interjukerdes (foglalkozas) {
    if (foglalkozas === 'tanár') {
        return function(nev) {
            console.log(nev + ', meg tudná mondani, hogy milyen tárgyakat oktat?');
        }
    } 
    else if (foglalkozas === 'eladó') {
        return function(nev) {
            console.log(nev + ',hogyan kezelne egy vevői reklamációt?');
        }
    } 
    else {
        return function(nev) {
            console.log('Mi a foglalkozása kedves '+ nev + '?');
        }
    }
}

var kerdesTanaroknak = interjukerdes('tanár');
kerdesTanaroknak ('Pál');

var kerdesEladoknak = interjukerdes('eladó');
kerdesEladoknak ('Katalin');
kerdesEladoknak('Géza');
kerdesEladoknak ('Ilona');
interjukerdes('tanár') ('Péter');


// IIFE

/*function jatek() {
var pont = Math.random() * 10;
console.log(pont >= 5);
}
jatek();*/
(function(teszt) {
    var pont = Math.random() * 10;
    
    console.log(pont >= 5);
    console.log(teszt);
    })('hello');


/*Closure összefoglaló: egy belső függvény mindig képes hozzáférni az őt tartalmazó külső függvény paramétereihez és változóihoz még azután is,
hogy a külső függvény befejezte a futását. */


function nyugdij(ev) {
    var szoveg = 'Nyugdíjazásig hátrelévő évek száma:';
    return function(szuletesiEv) {
        var datumObjektum = new Date();
        var aktualisEv = datumobjektum.getFullYear();
        var kor =  aktualisEv - szuletesiEv;
        console.log(szoveg + (ev-kor));
        }
        }

var nyugdijazasUSA = nyugdij (66);
nyugdijazasUSA (1978);
nyugdij(66) (1978);


var nyugdijazasHUN = nyugdij (65);
var nyugdijazasIZL = nyugdij (67);

nyugdijazasHUN (1978);
nyugdijazasIZL (1978);

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