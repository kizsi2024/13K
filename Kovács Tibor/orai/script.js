/*// let és const
// es5

var nev5 = 'Teszt Elek';
var kor5 = 40;

//nev5 = 'Kiss Pista';

/*console.log(nev5);

function nyelvVizsga5(siker) {
    if (siker) {
        var keresztnev = 'Ödön';
        var szuletesiEv = 1980
        console.log(keresztnev + '(születési év: ' + szuletesiEv + ') sikeres volt a vizsga');
    }
}

nyelvVizsga5(true);

const nev6 = 'Teszt Elek';
let kor6 = 40;

function nyelvVizsga6(siker) {
    if (siker) {
        var keresztnev = 'Ödön';
        var szuletesiEv = 1980
        console.log(keresztnev + '(születési év: ' + szuletesiEv + ') sikeres volt a vizsga');
    }
}

nyelvVizsga6(true);

let i = 9;
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
}

console.log(a+b);

(function() {
    let c = 3;
    console.log(c);
})();
console.log(c)*/
/*
let vezetekNev = 'Teszt';
let keresztNev = 'Elek';

const szuletesiEv = 1970;

function korSzamintas(ev){
    return 2024 - ev;
}

console.log(vezetekNev + ' ' + keresztNev + ',született ' + szuletesiEv + '-ben. Most ' + korSzamintas(szuletesiEv) + ' éves.');

console.log(`${vezetekNev} ${keresztNev}, született ${szuletesiEv}-ben. Most ${korSzamintas(szuletesiEv)} éves.`)

const nev = `${vezetekNev} ${keresztNev}`
console.log(nev.startsWith('T'));
console.log(nev.endsWith('ek'))
console.log(nev.includes('ele'))
console.log(`${vezetekNev} `.repeat(3))

//Nyíl függvény

const evek = [1970, 1975, 1954, 2010, 1981];

// es5

var korokES5 = evek.map(function(elem) {
    return 2024 - elem;
});

console.log(korokES5);

// es6

let korokES6 = evek.map(elem => 2024 - elem);

console.log(korokES6);

korokES6 = evek.map((elem, index) => `Kor ${index}: ${2024 - elem}.`);

console.log(korokES6)*/

/*korokES6 = evek.map((elem, index) => {
    const aktEv = new Data().getFullYear();
    const kor = aktEv - elem;
    retunr `Kor ${index}: ${kor},`;
});

console.log(korokES6)*/

/*var dobozES5 = {
    szin: 'zöld',
    pozicio: 1,
    kattintsRam: function() {
        var objektum = this;

        document.querySelector('.green').addEventListener('click', function(){
            var szoveg = 'Én vagyok a(z) ' + objektum.pozicio + '. doboz és a szinem ' + objektum.szin + '.';
            alert(szoveg)
        })
    }
};

dobozES5.kattintsRam();*/

/*var dobozES6 = {
    szin: 'zöld',
    pozicio: 1,
    kattintsRam: function() {

        document.querySelector('.green').addEventListener('click', () => {
            var szoveg = 'Én vagyok a(z) ' + this.pozicio + '. doboz és a szinem ' + this.szin + '.';
            alert(szoveg)
        })
    }
};

dobozES6.kattintsRam()

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

//ES6

Szemely.prototype.barataimES6 = function(haverok) {

    const tomb = haverok.map(elem => `${this.nve} baratja ${elem}.`);
    console.log(tomb);
}


var haverok = ['Jóska', 'Pista', 'Ödön'];
new Szemely('Géze').barataimES6(haverok);

//es5 
var odon = ['Ödön', 50]
var nev = odon[0];
var kor = odon[1];

console.log(nev);
console.log(kor);

//es6
const [nev2, kor2] = ['Ödön', 50];

console.log(nev);
console.log(kor);

const obj = {
    keresztNev: 'Ödön',
    vezetekNev: 'Bödön'
};

const { keresztNev: x, vezetekNev: y} = obj;

console.log(x);
console.log(y);

function korEsNyugdij(szuletesiEv) {
    let nyugdijKorhatar = 65;
    const kor = new Date().getFullYear() - szuletesiEv;

    return [kor, nyugdijKorhatar - kor];
}*/
/*
const dobozok = document.querySelectorAll('.rectangle');

// ES5
var dobozokTombES5 = Array.prototype.slice.call(dobozok);
dobozokTombES5.forEach(function(aktualis) {
    aktualis.style.backgroundColor = 'orange';
});

// ES6
const dobozokTombES6 = Array.from(dobozok);
dobozokTombES6.forEach(aktualis => aktualis.style.backgroundColor = 'blue');

//es5

for (var i = 0; i < dobozokTombES5.length; i++) {
    if (dobozokTombES5[i].className === 'rectangle blue' ) {
        continue;
    }
    dobozokTombES5[i].textContent = 'Kék lettem';
}


//es6

for (const aktualis of dobozokTombES6) {
    if (aktualis.className === 'rectangle blue') {
        continue;
    }
    aktualis.textContent = 'Kék lettem';
}

for (const aktualis of dobozokTombES6) {
    if (aktualis.className.includes('blue')) {
        continue;
    }
    aktualis.textContent = 'Kék lettem';
}

//es5
var korok = [2, 10, 20, 17, 14]

console.log(korok);

var felnottek = korok.map(function(aktualis) {
    return aktualis >= 18;
});

//console.log(felnottek);

console.log(felnottek.indexOf(true));

//es6
console.log(korok.findIndex(aktualis => aktualis >= 18));
console.log(korok.find(aktualis => aktualis >= 18));

// Spread operátor

function szamok(a, b, c, d) {
    return a + b + c + d;
}

var osszeg = szamokl (1, 2, 3, 4);
console.log(osszeg);

var szamokTomb = [1, 2, 3, 4];
var osszeg2 = szamok.apply(null, szamokTomb);

console.log(osszeg3);

const t2 = [5, 6, 7, 8, 9, 10];

const t3 = [...szamokTomb, ...t2];
console.log(t3);*/

//////////////////////////////////////////////////////////////
/*
function parosVagyParatlanES5(){
    //console.log(arguments);
    var argumentumokTomb = Array.prototype.slice.call(arguments);
    //console.log(argumentumokTomb);
    argumentumokTomb.array.forEach(function(aktualisElem) {
        if(aktualisElem % 2 === 0){
            console.log('Paros');
        } else {
            console.log('Paratlan');
        }
    });
}

parosVagyParatlanES5('teszt',1, 2, 3,100,5,20);

function parosVagyParatlanES6(...szamok){
    //console.log(szamok);
    szamok.forEach(aktualisElem => {
        if(aktualisElem % 2 === 0){
            console.log('Paros');
        } else{
            console.log('Paratlan')
        }
    })
}

parosVagyParatlanES6('teszt',1, 2 ,3,100,5,20);

//es5

function AdamsFamily(keresztNev, szuletesiEv, csaladiNev){
    csaladiNev === undefined ? csaladiNev = 'Adams' : csaladiNev = csaladiNev;
    this.keresztNev =  keresztNev;
    this.szuletesiEv = szuletesiEv;
    this.csaladiNev = csaladiNev;
}

var fester = new AdamsFamily('fester',1940);
var mortisha = new AdamsFamily('Mortisha',1965);
var kuzin = new AdamsFamily('Kuzin', 1800, 'Hogyishivjak');

//es6

function AdamsFamily(keresztNev, szuletesiEv, csaladiNev = 'Adams'){
    
    this.keresztNev =  keresztNev;
    this.szuletesiEv = szuletesiEv;
    this.csaladiNev = csaladiNev;
}

var fester = new AdamsFamily('fester',1940);
var mortisha = new AdamsFamily('Mortisha',1965);
var kuzin = new AdamsFamily('Kuzin', 1800, 'Hogyishivjak');*/

///////////////////////////////////////////////////////////////////

const kerdes = new Map();
kerdes.set('kerdes','Hogy hívják a de miééért reklámban szereplő kisfiut?')
kerdes.set(1, 'Ödön');
kerdes.set(2, 'Ábel');
kerdes.set(3, 'Miklóska');
kerdes.set(4, 'Nándi');

kerdes.set('helyes',2);

kerdes.set(true,'Helyes válasz');
kerdes.set(false,'Helytelen válasz');

console.log(kerdes.get('kerdes'));
console.log(kerdes.size);

//kerdes.delete(4);

/*if (kerdes.has(3)){
    kerdes.delete(3);
}
*/
//kerdes.clear();
/*
kerdes.forEach(
    (kulcs,ertek) => console.log('Kulcs: ${kulcs},ertek: ${ertek}'));

for(let [kulcs,ertek] of kerdes.entries()){
    if(typeof(kulcs) === 'number'){
        console.log('Kulcs: ${kulcs}, ertek ${ertek}');
    }
}
const valasz = parseInt(prompt('Add meg a helyes válast'))*/

//ES5
var SzemelyES5 = function(nev,szuletesiEv,foglalkozas){
    this.nev = nev;
    this.szuletesiEv = szuletesiEv;
    this.foglalkozas = foglalkozas;
}
SzemelyES5.prototype.korszamitas = function(){
    var kor = new Date().getFullYear - this.szuletesiEv;
    console.log(kor);
}
var odon = new SzemelyES5('Ödön',1810,'kísértet');

//ES6

class SzemelyES6 {
    constructor(nev,szuletesiEv,foglalkozas){
        this.nev = nev;
        this.szuletesiEv = szuletesiEv;
        this.foglalkozas = foglalkozas;
    }
    korszamitas(){
        let kor = new Date().getFullYear - this.szuletesiEv;
        console.log(kor);
    }
}

var SzemelyES5 = function(nev, szuletesiEv,foglalkozas){
        this.nev = nev;
        this.szuletesiEv = szuletesiEv;
        this.foglalkozas = foglalkozas;
}

SzemelyES5.prototype.korszamitas = function(){
        let kor = new Date().getFullYear - this.szuletesiEv;
        console.log(kor);
}

var KatonaES5 = function(nev, szuletesiEv,foglalkozas,rendfokozat,osztag){
    SzemelyES5.call(this,nev,szuletesiEv,foglalkozas)
    this.rendfokozat = rendfokozat;
    this.osztag = osztag;
}
KatonaES5.prototype = Object.create(SzemelyES5.prototype);
KatonaES5.prototype.rangszerzes = function(rang){
    console.log(this.rendfokozat);
}

var odonKatona = new KatonaES5('Ödön',1970,'Pék','közlegény','harcosok');

odonKatona.korszamitas();
odonKatona.rangszerzes('szazados');

class SzemelyES6{
    constructor(nev,szuletesiEv,foglalkozas){
        this.nev = nev;
        this.szuletesiEv = szuletesiEv;
        this.foglalkozas = foglalkozas;
    }korszamitas(){
        let kor = new Date().getFullYear - this.szuletesiEv
        console.log(kor)
    }    
}   

class KatonaES6 extends SzemelyES6{
    rangszerze(rang){

    }
}
const nandiKatona = new KatonaES6('nandi')

    

    
