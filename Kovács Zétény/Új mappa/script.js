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
/*
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


var nev5 = 'Teszt Elek';
var kor5 = 40;

//nev5 = 'Kiss Pista';

console.log(nev5);

function nyelvVizsga5(siker) {
    if (siker) {
        var keresztnev = 'Ödön';
        var szuletesiEv = 1980
        console.log(keresztnev + '(születési év: ' + szuletesiEv + ') sikeres volt a vizsga');
    }
}

nyelvVizsga5(true);

const nev6 = 'Teszt Elek';
var kor6 = 40;

function nyelvVizsga6(siker) {
    if (siker) {
        var keresztnev = 'Ödön';
        var szuletesiEv = 1980
        console.log(keresztnev + '(születési év: ' + szuletesiEv + ') sikeres volt a vizsga');
    }
}

nyelvVizsga6(true);

/*let i = 9;
for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);
 

var i = 9;
for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);



{
    const a = 1;
    let b = 2;
    //var c = 5;
}
console.log(a+b)

(function(){
    let c = 3;
    console.log(3);
})();
console.log(c)




let vezetekNev = 'Teszt';
let keresztNev = 'Elek';

const szuletesiEv = 1970;

function korSzamintas(ev){
    return 2024 - ev;
}

console.log(vezetekNev + ' ' + keresztNev + ',született ' + szuletesiEv + '-ben. Most ' + korSzamintas(szuletesiEv) + ' éves.');

console.log(`${vezetekNev} ${keresztNev}, született ${szuletesiEv}-ben. Most ${korSzamintas(szuletesiEv)} éves.`)


const nev = `${vezetekNev}  ${keresztNev}`

console.log(nev.startWith('T'));

console.log(nev.endsWith('ek'));

console.log(nev.includes('ele'));

console.log(`${vezetekNev} `.repeat(3));

//NYíl

const evek = [1954, 1990, 1963, 2000, 2010];

//es5

var korokES5 = evek.map(function(elem){
    return 2024 - elem;
});

console.log(korokES5)

// es6

let korokES6 = evek.map(elem => 2024 - elem);

console.log(korokES6);

korokES6 = evek.map((elem, index) => `Kor ${index}: ${2024 - elem}.`);

console.log(korokES6)

korokES6 = evek.map((elem, index) => {
    const aktEv = new Data().getFullYear();
    const kor = aktEv - elem;
    retunr `Kor ${index}: ${kor},`;
});

console.log(korokES6)


var dobozES5 = {
    szin: 'zöld',
    pozicio: 1,
    kattintsRam:function(){
        console.log(this.szin);

        document.querySelector('.green').addEventListener('click',
        function(){
            var szoveg = 'En vagyok a(z) ' + this.pozicio + '.doboz es a szinem ' + this.szin + '.';
            alert(szoveg)
        })
    }
}

dobozES5.kattintsRam();


var dobozES6 = {
    szin: 'zöld',
    pozicio: 1,
    kattintsRam:function(){
        console.log(this.szin);

        document.querySelector('.green').addEventListener('click',
        () => {
            var szoveg = 'En vagyok a(z) ' + this.pozicio + '.doboz es a szinem ' + this.szin + '.';
            alert(szoveg)
        })
    }
}

dobozES6.kattintsRam();


function Szemely(nev) {
    this.nev = nev;
}

Szemely.prototype.barataimES5 = function(haverok) {
    var obj = this
    var tomb = haverok.map(function(elem) {
        return obj.nev + ' barátja' + elem + '.';
    });
    console.log(tomb)
}

var haverok = ['Jóska', 'Pista', 'Ödön'];
new Szemely('Géza').barataimES5(haverok);



//destrukturálás

var odon = ['Ödön', 50]
var nev = [0]
var kor = [1]

console.log(nev)
console.log(kor)

const [nev2, kor2] = ['Ödön',50]

console.log(nev2)
console.log(kor2)

const obj ={
    keresztNev : 'Ödön',
    vezetekNev : 'Bödön'
}

const {keresztNevn, vezetekNev} = obj;

console.log(keresztNevn)
console.log(vezetekNev)

const {keresztNev:x, vezetekNev:y} = obj

console.log(x)
console.log(y)

function korEsNyugdij(szuletesiEv){
    let nyugkorHatar = 65;
    const kor = new Date().getFullYear() -szuletesiEv;

    return[kor, nyugkorHatar -kor]
}

const[kor3, nyugdij] = korEsNyugdij(1978)

console.log(kor3)
console.log(nyugdij)


//Tömbök

const dobozok = document.querySelectorAll('.rectangle');

//es5

var dobozokTombES5 = Array.prototype.slice.call(dobozok)

dobozokTombES5.forEach(function(){
    aktualis.style.backgroundColor = 'orange'
});

//es6

const dobozokTombES6 = Array.from(dobozok);
dobozokTombES6.forEach(aktualis => aktualis.style.backgroundColor = 'blue')


//es5

for(var i = 0; i<dobozokTombES5.length; i++){
    if(dobozokTombES5[i].className === 'rectangle blue'){
        continue
    }
    dobozokTombES5[i].textContent = 'Kék lettem';
}

//es6

for(const aktualis of dobozokTombES6){
    if(aktualis.className.includes('blue')){
        continue
    }
    aktualis.textContent = 'Kék lettem';
}
*/

