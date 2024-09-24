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
/*
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
/*
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
leptet(); */

//aply, bind, call
/*
var odon = {
    nev: 'Ödön',
    kor: 45,
    foglalkozas: 'csillagász',
    udvozles: function (stilus, napszak) {
        if (stilusa === ' hivatalos') {
            console.log('Üdvözlöm, jó ' + napszak + ' kívánok! ' + this.nev + 'vagyok.');
        } else if(stilus === 'baráti') {
            console.log('Szia, jó ' + napszak + '!');
        }
    }
}

odon.udvozles('hivatalos', 'hajnalt');
odon.udvozles('baráti', 'estét');
    
var bela = {
    nev: 'Béla',
    kor: 62,
    foglalkozas: 'portás'
}

// call

odon.udvozet.call(bela, 'barati', 'estét')

// apply
odon.udvozlet.apply(bela, ['baráti', 'reggelt']);


// bind

var odonBarati = odon.udvozles.bind(odon, 'baráti');
odonBarati ('napot');
odonBarati ('estét');

var belaHivatalos = odon.udvozles.bind(bela, 'hivatalos')
var belaHivatalosReggeli = odon.udvozles.bind(bela, 'hivatalos', 'reggelt');

belaHivatalos('estét');
belaHivatalosReggeli();
*/

var evek = [1954, 1990, 1963, 2000, 2010];
    function tombMuvelet (tomb, fv) {
    var eredmeny = [];
        for(var i=0; i < tomb.length; i++) {
        eredmeny.push(fv(tomb[i]));
    }
    return eredmeny;
}

function korszamitas (elem) {
return 2021 - elem;
}

function felnott (korhatar, elem) {
return elem >= korhatar;
}

var korok = tombMuvelet (evek, korszamitas);
console.log(evek);
console.log(korok);
var felnottkorJapanban = tombMuvelet (korok, felnott.bind(this, 20));
console.log(felnottkorJapanban);
