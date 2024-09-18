// Visszaadott függvények
/*
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
kerdesEladoknak('Alajos')

interjukerdes('tanár') ('Péter');

function jatek(){
    var pont = Math.random() * 10
    console.log(pont >= 5)
}

jatek()

(function(teszt){
    var pont = Math.random() * 10
    console.log(pont >= 5)
    console.log(teszt)
})("Helló")*/

function nyugdij(ev) {
    var szoveg = 'Nyugdíjazásig hátrelévő évek száma: '
    return function(szuletesiEv) {
        var datumObjektum = new Date();
        var aktualisEv = datumobjektum.getFullYear();
        var kor = aktualisEv - szuletesiEv;
        console.log(szoveg + (ev-kor));
    }
    }
var nyugdijazasUSA = nyugdij (66);
nyugdijazasUSA(1978);
nyugdij(66)(1978);

//closure: egy belső függvény, mindig képes hozzáférni
//az őt tartalmazó külső függvény paramétereihez és változóihoz,
//azután is, hogy az befejezte a futást.

nyugdijazasHUN(65)
nyugdijazasIZL(67)

var szamlalo = 0

function leptet(){
    var szamlalo = 0
    return function(){
        szamlalo++
        console.log(szamlalo)
    }
}

var hozzaad = leptet()
hozzaad()
hozzaad()
hozzaad()
hozzaad()