// objektum létrehozás

/*
var odon = { 
    nev: 'Ödön',
    szuletesiEv: 1978,
    foglalkozas: 'grafikus'
};



var szemely=function (nev, szuletesiEv, foglalkozas) {
    this.nev = nev;
    this.szuletesiEv = szuletesiEv;
    this.foglalkozas = foglalkozas;

    this.korszamitas=function() {
    console.log(2021 - this.szuletesiEv);
    }
};

Szemely.prototype.korszamitas = function() {
    console.log(2021 - this.szuletesiEv);
};

var erzsi = new Szemely('erzsi', 1950, 'nyugdijas');
erzsi.korszamitas();

var odon = new Szemely('ödön', 1978, 'grafikus'); 
odon.korszamitas();

console.log(Szemely);
console.log(odon); */

//object.create

/*
var szemelyProto = {
    korszamitas: function() {
    console.log(2021---this.szuletesiEv);
    }
    };

    var odon=object.create(szemelyProto);
    odon.nev = 'Ödön';
    odon.szuletesiEV = '1960';
    odon.foglalkozas = 'pék';
    var kati = Object.create(szemelyProto, { 
        nev: { value: 'Kati'}, 
        szuletesiEv: { value: 1990 },
        foglalkozas: { value: 'kozmetikus' }
    });*/

   // modosit(a, 0);
//console.log(a); console.log(o.nev);
// Függvények
/*
- a függvény az Object típusnak egy példánya
- emiatt a fv úgy viselkedik, mint bármelyik más obj
- egyetlen változóban tárolhatunk egy egész fv-tudunk
- egy függvényt átadhatunk egy másik fv-nek, mint paramétert
- ez utóbbihoz hasonló, hogy egy függvény visszatérési értéke lehet egy függvény is, nem csak egy szimpla érték, vagy objektum vagy éppen semmi*/
/* var evek = [1954, 1990, 1963, 2000, 2010];
function tombMuvelet (tomb, fv) {
    var eredmeny = [];

    for (var i=0; i < tomb.length; i++) {
        eredmeny.push(fv(tomb[i]));
    }
    return eredmeny;
}

function korszamitas (elem) {
return 2021 - elem;
}
tombMuvelet (evek, korszamitas);


function interjukerdes(foglalkozas){
    if(foglalkozas === 'tanár'){
        return function(nev){
            console.log(nev + ",meg tudná mondani, milyen tárgyakat oktat?");
        }
    }else if(foglalkozas === 'eladó'){
        return function(nev){
            console.log('Mi a foglalkozása keves'+nev+'?')
        }
    }
}

var kerdesTanaroknak = interjukerdes("tanar;")
kerdesTanaroknak("Pál");

var kerdesEladoknak = interjukerdes("eladó");
kerdesEladoknak("Karcsi");
kerdesEladoknak("Zsófi");*/

/*function jatek()
var pont = Math.random() * 10;
console.log(pont >=5);*/

/*(function(){
    var pont = Math.random() * 10;
    console.log(pont >= 5);
    console.log(teszt);
})("Hello");*/

/*Closure összefoglaló: egy belső függvény  mindig képes hozzáférni az őt tartalmazó  külső függvény paramétereihez és változóihoz még azután is, hogy a külső függvény befejezte a futását. */

/*function nyugdij(ev){
    var szoveg = 'Nyugdijazasig hatralevo evek szama:';
    return function(szuletesiEv){
        
            var datumObjektum = new Date();
            var aktualisEv = datumObjektum.getFullYear();
            var kor = aktualisEv - szuletesiEv;
            console.log(szoveg + (ev - kor));
        
    }


}
var NyugdijazasUSA = nyugdij(66)
NyugdijazasUSA(1978);
NyugdijazasUSA*/


var leptet = (
    function(){
    var szamlalo = 0;
        return function(){
            szamlalo++; // szamlalo = szamlalo + 1
            console.log(szamlalo);
        }
    }   
    
)();
leptet();
leptet();
leptet();

var odon = {
    nev: "Ödön",
    kor: 45,
    foglalkozas: 'csillagász',
    udvozlet: function(stilus,napszak){
        if(stilus === 'hivatalos'){
            console.log('Üdvözlöm, jó' + napszak + 'kívánok!' + this.nev + 'vagyok');
        } else if(stilus === 'baráti'){
            console.log('Szia, jó' + napszak + '!');
        }
    }
}

odon.udvozlet('hivatalos', 'hajnalt');
odon.udvozlet('baráti','estét');

var bela = {
    nev: 'Béla',
    kor: 62,
    foglalkozas: 'portás'
}

//call metódus
odon.udvozlet.call(bela, 'baráti','estét');

//bind
var odonBarati = odon.udvozlet.bind(odon, 'baráti');
odonBarati('napot');
odonBarati('estét');

var belaHivatalos = odon.udvozlet.bind(bela, 'hivatalos');
var blahivatalosReggeli = odon.udvozlet.bind(bela, 'hivatalos', 'reggelit');

belaHivatalos('estét');
belaHivatalosReggeli();

var evek = [1954, 1990, 1963, 2000, 2010]

function tombMuvelet(tomb,fv){
    var eredmeny = [];
    for(var i = 0; i < tomb.length; i++){
        eredmeny.push(fv(tomb[i]));
    }
}

var korok = tombMuvelet(evek, korszamitas);
console.log(evek);
console.log(korok);

var felnottkorjapanban = tombMuvelet(korok, felnott.bind(this, 20));

console.log(felnotkorJapanban)