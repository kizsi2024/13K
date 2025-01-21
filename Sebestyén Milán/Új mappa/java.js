
////////////////////////////////////////////////////////////////
// let, const

// ES5
// Általánosságban a változók előtt csak "var" van, ezek értékei bármikor megváltoztathatóak.
// Függvényen belül létrehozott "var" változó csak a függvényen belül érhető el!

/*

var nev5 = 'Vicc Elek';
var kor5 = 40;

nev5 = 'Abbanapillanatban Debrüi'

// console.log(nev5);

function nyelvVizsga5(siker) {
    if (siker) {
        var keresztnev = 'Gizi';
        var szuletesiEv = 1980;
        console.log(keresztnev + '(születési év: ' + szuletesiEv + ') sikeres volt a vizsga');
    }
}
nyelvVizsga5(true);


// ES6
// Két fő változó van, a "const" olyan változó aminek értéke folyamatos és nem változtatható meg, a "let" pedig olyan mint a "var", ezek változhatnak.
// Függvényen belül létrehozott "const" vagy "let" változó blokk szinten érhetők el (kapcsos zárójelek közt lévő egység).

const nev6 = 'Fing Ottam';
let kor6 = 40;

// nev6 = 'Kiss Pista'; // Hibát dob
// console.log(nev6);

function nyelvVizsga6(siker) {
    if (siker) {
        let keresztnev = 'Trottyos';
        const szuletesiEv = 1985;
        console.log(keresztnev + '(születési év: ' + szuletesiEv + ') sikeres volt a vizsga');
    }
}
nyelvVizsga6(true);


// Itt az "i" két különböző változó, mivel a "let" blokk szintű, két különböző világ.
let i = 9;
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);

// A két "i" ugyanaz a változó, csak az értékét írtuk át.
var i = 9;
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);


////////////////////////////////////////////////////////////////
// Blokkok és IIFE

// ES6
// Hibát kapunk, mivel a változók csak blokkon belül érhetők el, így nem tudjuk őket külön kiírni.

{
    const a = 1;
    let b = 2;
    var c = 3; //Blokkon belül is lehet "var" változó, de függvény szintű láthatósággal rendelkezik.
}
// console.log(a + b);

// ES5
// 

(function() {
    var c = 3;
    // console.log(c);
})();

console.log(c); //Nem a függvényen belüli "c"-t fogja kiírni, hanem a blokkban lévőt.


////////////////////////////////////////////////////////////////
// Sztringek ES6-ban

let vezetekNev = 'Micc';
let keresztNev = 'Elek';

const szuletesiEv = 1970;

function korszamitas(ev) {
    return 2024 - ev;
}

// ES5
// Átlagos kiíratás, nehezebb kiírni a sok aposztrófok miatt.

console.log(vezetekNev + ' ' + keresztNev + ' ' + szuletesiEv + '-ben született. Most ' + korszamitas(szuletesiEv) + ' éves.');

// ES6
// Hatékonyabb kiíratás, backTick-ek (``) közt kell megadni a szöveget, változókat. (Template literal)

console.log(`${vezetekNev} ${keresztNev}, született ${szuletesiEv}-ben. Most ${korszamitas(szuletesiEv)} éves.`);

const nev = `${vezetekNev} ${keresztNev}`;

console.log(nev.startsWith('M'));
console.log(nev.endsWith('ek'));
console.log(nev.includes('icc'));
console.log(vezetekNev.repeat(3));
console.log(`${vezetekNev} `.repeat(3));


////////////////////////////////////////////////////////////////
// Nyíl függvények

const evek = [1970, 1975, 1954, 2010, 1981];

// ES5
// map -> Metódus, amivel végigjárjuk a tömböt.

var korokES5 = evek.map(function(elem) {
    return 2024 - elem;
});
console.log(korokES5);

// ES6
// Nyíl függvény -> paraméter (több paraméter esetén zárójel kell) => return érték.

let korokES6 = evek.map(elem => 2024 - elem);
console.log(korokES6);

korokES6 = evek.map((elem, index) => `Kor ${index}: ${2024 - elem}.`);
console.log(korokES6);

// Több utasítás esetén a nyíl függvényben kapcsos zárojeleket használunk.
korokES6 = evek.map((elem, index) => {
    const aktEv = new Date().getFullYear();
    const kor = aktEv - elem;
    return `Kor ${index}: ${kor},`;
});
console.log(korokES6);


////////////////////////////////////////////////////////////////
// Nyíl függvények 2.

// ES5

var dobozES5 = {
    szin: 'zöld',
    pozicio: 1,
    kattintsRam: function() {
        var objektum = this; // Ezzel tudunk a "dobozES5" blokkon belüli dolgokra hivatkozni.
        document.querySelector('.zold').addEventListener('click', function() {
            var szoveg = 'Én vagyok az ' + objektum.pozicio + '. doboz, a színem ' + objektum.szin + '.';
            alert(szoveg);
        })
    }
}
// dobozES5.kattintsRam();

// ES6
// Itt már nem kell külön változó az objektumra, az egész kódrész egy blokkban van, így elég a "this".

const dobozES6 = {
    szin: 'zöld',
    pozicio: 1,
    kattintsRam: () => {
        document.querySelector('.zold').addEventListener('click', () => {
            var szoveg = 'Én vagyok az ' + this.pozicio + '. doboz, a színem ' + this.szin + '.';
            alert(szoveg);
        })
    }
}
dobozES6.kattintsRam();


// ES5
function Szemely(nev) {
    this.nev = nev;
}

Szemely.prototype.barataimES5 = function(haverok) {
    //console.log(this.nev);
    var obj = this;
    var tomb = haverok.map(function(elem) {
        return obj.nev + ' barátja ' + elem + '.';
    });
    console.log(tomb);
}

var haverok = ['Bazsi', 'Pisti', 'Jani']
new Szemely('Chad').barataimES5(haverok);

// ES6
Szemely.prototype.barataimES6 = function(haverok) {
    const tomb = haverok.map(elem =>
        `${this.nev} barátja ${elem}.`);
    console.log(tomb);
}

new Szemely('Chad').barataimES6(haverok);


////////////////////////////////////////////////////////////////
// Destruktúrálás

// ES5
var odon = ['Ödön', 50]
var nev = odon[0];
var kor = odon[1];

console.log(nev);
console.log(kor);

// ES6
const [nev2, kor2] = ['Ödön', 50];

console.log(nev2);
console.log(kor2);

const obj = {
    keresztNev2: 'Ödön',
    vezetekNev2: 'Bödön'
};

const {keresztNev2: x, vezetekNev2: y} = obj;

console.log(x);
console.log(y);

function korEsNyugdij(szuletesiEv) {
    let nyugdijKorhatar = 65;
    const kor = new Date().getFullYear() - szuletesiEv;

    return [kor, nyugdijKorhatar - kor];
}

const [kor3, nyugdij] = korEsNyugdij(1978);
console.log(kor3);
console.log(nyugdij);

////////////////////////////////////////////////////////////////
// Tömbök

const dobozok = document.querySelectorAll('.doboz');

// ES5
var dobozokTombES5 = Array.prototype.slice.call(dobozok);

dobozokTombES5.forEach(function(aktualis) {
    aktualis.style.backgroundColor = 'orangered';
});

// ES6
const dobozokTombES6 = Array.from(dobozok);
dobozokTombES6.forEach(aktualis => aktualis.style.backgroundColor = 'dodgerblue');

// ES5
for (var i = 0; i < dobozokTombES5.length; i++) {
    if (dobozokTombES5[i].className === 'doboz kek') {
        continue;
    }

    dobozokTombES5[i].textContent = 'Kék lettem!';
}

// ES6
for (const aktualis of dobozokTombES6) {
    if (aktualis.className === 'doboz kek') {
        continue;
    }

    aktualis.textContent = 'Kék lettem!';
}


// ES5
var korok = [2, 10, 20, 17, 14];
console.log(korok);

var felnottek = korok.map(function(aktualis) {
    return aktualis >= 18;
});

console.log(felnottek);
console.log(felnottek.indexOf(true));

// ES6
console.log(korok.findIndex(aktualis => aktualis >= 18));
console.log(korok.find(aktualis => aktualis >= 18));


////////////////////////////////////////////////////////////////
// Spread operator

function szamok(a, b, c, d) {
    return a + b + c + d;
}

var osszeg = szamok(1, 2, 3, 4);
console.log(osszeg);

// ES5
var szamokTomb = [1, 2, 3, 4];
var osszeg2 = szamok.apply(null, szamokTomb);

console.log(osszeg2);

// ES6
const osszeg3 = szamok(...szamokTomb);
console.log(osszeg3);

const t2 = [5, 6, 7, 8, 9, 10];
const t3 = [...szamokTomb, ...t2];
console.log(t3);

const cimsor = document.querySelector('h1');
const htmlElemek = [cimsor, ...dobozok];

Array.from(htmlElemek).forEach(aktualisElem => aktualisElem.style.color = 'purple');


////////////////////////////////////////////////////////////////
// Rest paraméterek
*/

/*
// ES5
function parosvagyParatlanES5() {
    var argumentumokTomb = Array.prototype.slice.call(arguments);
    argumentumokTomb.forEach(function(aktualisElem) { 
        if (aktualisElem % 2 === 0) {
            console.log('Páros');
        }
        else {
            console.log('Páratlan');
        }
    })
}
parosvagyParatlanES5(2, 5, 7, 100);
*/

/*
// ES6
function parosvagyParatlanES6(...szamok) {
    szamok.forEach(aktualisElem => { 
        if (aktualisElem % 2 === 0) {
            console.log('Páros');
        }
        else {
            console.log('Páratlan');
        }
    })
}
parosvagyParatlanES6(2, 5, 7, 100);
*/

/*
// ES5
function AdamsFamily(keresztNev, szuletesiEv, csaladiNev) {
    csaladiNev == undefined ? csaladiNev = 'Adams' : csaladiNev = csaladiNev;
    this.keresztNev = keresztNev;
    this.szuletesiEv = szuletesiEv;
    this.csaladiNev = csaladiNev;
}

var fester = new AdamsFamily('Fester', 1940);
var mortisha = new AdamsFamily('Mortisha', 1965);
var kuzin = new AdamsFamily('Kuzin', 1940, 'Hogyishívják');
*/

/*
// ES6
function AdamsFamily(keresztNev, szuletesiEv, csaladiNev = 'Adams') {
    this.keresztNev = keresztNev;
    this.szuletesiEv = szuletesiEv;
    this.csaladiNev = csaladiNev;
}

var fester = new AdamsFamily('Fester', 1940);
var mortisha = new AdamsFamily('Mortisha', 1965);
var kuzin = new AdamsFamily('Kuzin', 1940, 'Hogymit');
*/

/*
////////////////////////////////////////////////////////////////
// Map

const kerdes = new Map();
kerdes.set('kerdes', 'Hogy hívják a Cat marioval játszott ordibáló férfit a TheVr csatornáról?');
kerdes.set(1, 'Balázs');
kerdes.set(2, 'Pisti');
kerdes.set(3, 'János');
kerdes.set(4, 'Kugli');

kerdes.set('helyes', 2);

kerdes.set(true, 'Helyes válasz');
kerdes.set(false, 'Nem talált');

console.log(kerdes.get('kerdes'));
console.log(kerdes.size);

kerdes.forEach(
    (kulcs, ertek) => console.log(`Kulcs: ${kulcs}, ertek: ${ertek}`)
);

for (let [kulcs, ertek] of kerdes.entries()) {
    if (typeof(kulcs) === 'number') {
        console.log(`Kulcs: ${kulcs}, ertek: ${ertek}`)
    }
};

const valasz = parseInt(prompt('Add meg a helyes választ!'));
console.log(kerdes.get(valasz === kerdes.get('helyes')));
*/
/*
var SzemelyES5 = function(nev, szuletesiEv, foglalkozas) {
    this.nev = nev;
    this.szuletesiEv = szuletesiEv;
    this.foglalkozas = foglalkozas;
}

SzemelyES5.prototype.korSzamitas = function() {
    var kor = new Date().getFullYear - this.szuletesiEv;
    console.log(kor);
}

var bodon = new SzemelyES5('Bödön', 1980, 'szakács');

// ES6
class SzemelyES6 {
    constructor (nev, szuletesiEv, foglalkozas) {
        this.nev = nev;
        this.szuletesiEv = szuletesiEv;
        this.foglalkozas = foglalkozas;
    }

    korSzamitas (){
        let kor = new Date().getFullYear - this.szuletesiEv;
        console.log(kor);
    }

    static udvozlet(){
        console.log('Csááá');
    }
}

const nador = new SzemelyES6('Cukornádor', 1960, 'pókember');
SzemelyES6.udvozlet();

var KatonaES5 = function(nev, szuletesiEv, foglalkozas, rendFokozat, osztag) {
    SzemelyES5.call(this, nev, szuletesiEv, foglalkozas);
    this.rendFokozat = rendFokozat;
    this.osztag = osztag;
}
*/
/*
var KatonaES5 = function(nev, szuletesiEv, foglalkozas, rendFokozat, osztag) {
    SzemelyES5.call(this, nev, szuletesiEv, foglalkozas);
    this.rendFokozat = rendFokozat;
    this.osztag = osztag;
}

KatonaES5.prototype = Object.create(SzemelyES5.prototype);

KatonaES5.prototype.rangSzerzes = function(rang) {
    this.rendFokozat = rang;
    console.log(this.rendFokozat);
}
var bodonKatona = new KatonaES5('Bödön', 1980, 'szakács', 'százados', 'parancsnok');
bodonKatona.korSzamitas();
bodonKatona.rangSzerzes('hadnagy');
*/
// ES6
/*
class SzemelyES6 {
    constructor (nev, szuletesiEv, foglalkozas) {
        this.nev = nev;
        this.szuletesiEv = szuletesiEv;
        this.foglalkozas = foglalkozas;
    }

    korSzamitas (){
        let kor = new Date().getFullYear - this.szuletesiEv;
        console.log(kor);
    }
}

class KatonaES6 extends SzemelyES6 {
    constructor(nev, szuletesiEv, foglalkozas, rendFokozat, osztag) {
        super(nev, szuletesiEv, foglalkozas);
        this.rendFokozat = rendFokozat;
        this.osztag = osztag;
    }

    rangSzerzes(rang) {
        this.rendFokozat = rang;
        console.log(this.rendFokozat);
    }
}

const nadorKatona = new KatonaES6('Cukornádor', 1960, 'pókember', 'tiszt', 'harcosok');
nadorKatona.rangSzerzes('százados');
nadorKatona.korSzamitas();*/


////////////////////////////////////////////////////////////////
// let, const

// ES5
// Általánosságban a változók előtt csak "var" van, ezek értékei bármikor megváltoztathatóak.
// Függvényen belül létrehozott "var" változó csak a függvényen belül érhető el!

/*

var nev5 = 'Vicc Elek';
var kor5 = 40;

nev5 = 'Abbanapillanatban Debrüi'

// console.log(nev5);

function nyelvVizsga5(siker) {
    if (siker) {
        var keresztnev = 'Gizi';
        var szuletesiEv = 1980;
        console.log(keresztnev + '(születési év: ' + szuletesiEv + ') sikeres volt a vizsga');
    }
}
nyelvVizsga5(true);


// ES6
// Két fő változó van, a "const" olyan változó aminek értéke folyamatos és nem változtatható meg, a "let" pedig olyan mint a "var", ezek változhatnak.
// Függvényen belül létrehozott "const" vagy "let" változó blokk szinten érhetők el (kapcsos zárójelek közt lévő egység).

const nev6 = 'Fing Ottam';
let kor6 = 40;

// nev6 = 'Kiss Pista'; // Hibát dob
// console.log(nev6);

function nyelvVizsga6(siker) {
    if (siker) {
        let keresztnev = 'Trottyos';
        const szuletesiEv = 1985;
        console.log(keresztnev + '(születési év: ' + szuletesiEv + ') sikeres volt a vizsga');
    }
}
nyelvVizsga6(true);


// Itt az "i" két különböző változó, mivel a "let" blokk szintű, két különböző világ.
let i = 9;
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);

// A két "i" ugyanaz a változó, csak az értékét írtuk át.
var i = 9;
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);


////////////////////////////////////////////////////////////////
// Blokkok és IIFE

// ES6
// Hibát kapunk, mivel a változók csak blokkon belül érhetők el, így nem tudjuk őket külön kiírni.

{
    const a = 1;
    let b = 2;
    var c = 3; //Blokkon belül is lehet "var" változó, de függvény szintű láthatósággal rendelkezik.
}
// console.log(a + b);

// ES5
// 

(function() {
    var c = 3;
    // console.log(c);
})();

console.log(c); //Nem a függvényen belüli "c"-t fogja kiírni, hanem a blokkban lévőt.


////////////////////////////////////////////////////////////////
// Sztringek ES6-ban

let vezetekNev = 'Micc';
let keresztNev = 'Elek';

const szuletesiEv = 1970;

function korszamitas(ev) {
    return 2024 - ev;
}

// ES5
// Átlagos kiíratás, nehezebb kiírni a sok aposztrófok miatt.

console.log(vezetekNev + ' ' + keresztNev + ' ' + szuletesiEv + '-ben született. Most ' + korszamitas(szuletesiEv) + ' éves.');

// ES6
// Hatékonyabb kiíratás, backTick-ek (``) közt kell megadni a szöveget, változókat. (Template literal)

console.log(`${vezetekNev} ${keresztNev}, született ${szuletesiEv}-ben. Most ${korszamitas(szuletesiEv)} éves.`);

const nev = `${vezetekNev} ${keresztNev}`;

console.log(nev.startsWith('M'));
console.log(nev.endsWith('ek'));
console.log(nev.includes('icc'));
console.log(vezetekNev.repeat(3));
console.log(`${vezetekNev} `.repeat(3));


////////////////////////////////////////////////////////////////
// Nyíl függvények

const evek = [1970, 1975, 1954, 2010, 1981];

// ES5
// map -> Metódus, amivel végigjárjuk a tömböt.

var korokES5 = evek.map(function(elem) {
    return 2024 - elem;
});
console.log(korokES5);

// ES6
// Nyíl függvény -> paraméter (több paraméter esetén zárójel kell) => return érték.

let korokES6 = evek.map(elem => 2024 - elem);
console.log(korokES6);

korokES6 = evek.map((elem, index) => `Kor ${index}: ${2024 - elem}.`);
console.log(korokES6);

// Több utasítás esetén a nyíl függvényben kapcsos zárojeleket használunk.
korokES6 = evek.map((elem, index) => {
    const aktEv = new Date().getFullYear();
    const kor = aktEv - elem;
    return `Kor ${index}: ${kor},`;
});
console.log(korokES6);


////////////////////////////////////////////////////////////////
// Nyíl függvények 2.

// ES5

var dobozES5 = {
    szin: 'zöld',
    pozicio: 1,
    kattintsRam: function() {
        var objektum = this; // Ezzel tudunk a "dobozES5" blokkon belüli dolgokra hivatkozni.
        document.querySelector('.zold').addEventListener('click', function() {
            var szoveg = 'Én vagyok az ' + objektum.pozicio + '. doboz, a színem ' + objektum.szin + '.';
            alert(szoveg);
        })
    }
}
// dobozES5.kattintsRam();

// ES6
// Itt már nem kell külön változó az objektumra, az egész kódrész egy blokkban van, így elég a "this".

const dobozES6 = {
    szin: 'zöld',
    pozicio: 1,
    kattintsRam: () => {
        document.querySelector('.zold').addEventListener('click', () => {
            var szoveg = 'Én vagyok az ' + this.pozicio + '. doboz, a színem ' + this.szin + '.';
            alert(szoveg);
        })
    }
}
dobozES6.kattintsRam();


// ES5
function Szemely(nev) {
    this.nev = nev;
}

Szemely.prototype.barataimES5 = function(haverok) {
    //console.log(this.nev);
    var obj = this;
    var tomb = haverok.map(function(elem) {
        return obj.nev + ' barátja ' + elem + '.';
    });
    console.log(tomb);
}

var haverok = ['Bazsi', 'Pisti', 'Jani']
new Szemely('Chad').barataimES5(haverok);

// ES6
Szemely.prototype.barataimES6 = function(haverok) {
    const tomb = haverok.map(elem =>
        `${this.nev} barátja ${elem}.`);
    console.log(tomb);
}

new Szemely('Chad').barataimES6(haverok);


////////////////////////////////////////////////////////////////
// Destruktúrálás

// ES5
var odon = ['Ödön', 50]
var nev = odon[0];
var kor = odon[1];

console.log(nev);
console.log(kor);

// ES6
const [nev2, kor2] = ['Ödön', 50];

console.log(nev2);
console.log(kor2);

const obj = {
    keresztNev2: 'Ödön',
    vezetekNev2: 'Bödön'
};

const {keresztNev2: x, vezetekNev2: y} = obj;

console.log(x);
console.log(y);

function korEsNyugdij(szuletesiEv) {
    let nyugdijKorhatar = 65;
    const kor = new Date().getFullYear() - szuletesiEv;

    return [kor, nyugdijKorhatar - kor];
}

const [kor3, nyugdij] = korEsNyugdij(1978);
console.log(kor3);
console.log(nyugdij);

////////////////////////////////////////////////////////////////
// Tömbök

const dobozok = document.querySelectorAll('.doboz');

// ES5
var dobozokTombES5 = Array.prototype.slice.call(dobozok);

dobozokTombES5.forEach(function(aktualis) {
    aktualis.style.backgroundColor = 'orangered';
});

// ES6
const dobozokTombES6 = Array.from(dobozok);
dobozokTombES6.forEach(aktualis => aktualis.style.backgroundColor = 'dodgerblue');

// ES5
for (var i = 0; i < dobozokTombES5.length; i++) {
    if (dobozokTombES5[i].className === 'doboz kek') {
        continue;
    }

    dobozokTombES5[i].textContent = 'Kék lettem!';
}

// ES6
for (const aktualis of dobozokTombES6) {
    if (aktualis.className === 'doboz kek') {
        continue;
    }

    aktualis.textContent = 'Kék lettem!';
}


// ES5
var korok = [2, 10, 20, 17, 14];
console.log(korok);

var felnottek = korok.map(function(aktualis) {
    return aktualis >= 18;
});

console.log(felnottek);
console.log(felnottek.indexOf(true));

// ES6
console.log(korok.findIndex(aktualis => aktualis >= 18));
console.log(korok.find(aktualis => aktualis >= 18));


////////////////////////////////////////////////////////////////
// Spread operator

function szamok(a, b, c, d) {
    return a + b + c + d;
}

var osszeg = szamok(1, 2, 3, 4);
console.log(osszeg);

// ES5
var szamokTomb = [1, 2, 3, 4];
var osszeg2 = szamok.apply(null, szamokTomb);

console.log(osszeg2);

// ES6
const osszeg3 = szamok(...szamokTomb);
console.log(osszeg3);

const t2 = [5, 6, 7, 8, 9, 10];
const t3 = [...szamokTomb, ...t2];
console.log(t3);

const cimsor = document.querySelector('h1');
const htmlElemek = [cimsor, ...dobozok];

Array.from(htmlElemek).forEach(aktualisElem => aktualisElem.style.color = 'purple');


////////////////////////////////////////////////////////////////
// Rest paraméterek
*/

/*
// ES5
function parosvagyParatlanES5() {
    var argumentumokTomb = Array.prototype.slice.call(arguments);
    argumentumokTomb.forEach(function(aktualisElem) { 
        if (aktualisElem % 2 === 0) {
            console.log('Páros');
        }
        else {
            console.log('Páratlan');
        }
    })
}
parosvagyParatlanES5(2, 5, 7, 100);
*/

/*
// ES6
function parosvagyParatlanES6(...szamok) {
    szamok.forEach(aktualisElem => { 
        if (aktualisElem % 2 === 0) {
            console.log('Páros');
        }
        else {
            console.log('Páratlan');
        }
    })
}
parosvagyParatlanES6(2, 5, 7, 100);
*/

/*
// ES5
function AdamsFamily(keresztNev, szuletesiEv, csaladiNev) {
    csaladiNev == undefined ? csaladiNev = 'Adams' : csaladiNev = csaladiNev;
    this.keresztNev = keresztNev;
    this.szuletesiEv = szuletesiEv;
    this.csaladiNev = csaladiNev;
}

var fester = new AdamsFamily('Fester', 1940);
var mortisha = new AdamsFamily('Mortisha', 1965);
var kuzin = new AdamsFamily('Kuzin', 1940, 'Hogyishívják');
*/

/*
// ES6
function AdamsFamily(keresztNev, szuletesiEv, csaladiNev = 'Adams') {
    this.keresztNev = keresztNev;
    this.szuletesiEv = szuletesiEv;
    this.csaladiNev = csaladiNev;
}

var fester = new AdamsFamily('Fester', 1940);
var mortisha = new AdamsFamily('Mortisha', 1965);
var kuzin = new AdamsFamily('Kuzin', 1940, 'Hogymit');
*/

/*
////////////////////////////////////////////////////////////////
// Map

const kerdes = new Map();
kerdes.set('kerdes', 'Hogy hívják a Cat marioval játszott ordibáló férfit a TheVr csatornáról?');
kerdes.set(1, 'Balázs');
kerdes.set(2, 'Pisti');
kerdes.set(3, 'János');
kerdes.set(4, 'Kugli');

kerdes.set('helyes', 2);

kerdes.set(true, 'Helyes válasz');
kerdes.set(false, 'Nem talált');

console.log(kerdes.get('kerdes'));
console.log(kerdes.size);

kerdes.forEach(
    (kulcs, ertek) => console.log(`Kulcs: ${kulcs}, ertek: ${ertek}`)
);

for (let [kulcs, ertek] of kerdes.entries()) {
    if (typeof(kulcs) === 'number') {
        console.log(`Kulcs: ${kulcs}, ertek: ${ertek}`)
    }
};

const valasz = parseInt(prompt('Add meg a helyes választ!'));
console.log(kerdes.get(valasz === kerdes.get('helyes')));
*/
/*
var SzemelyES5 = function(nev, szuletesiEv, foglalkozas) {
    this.nev = nev;
    this.szuletesiEv = szuletesiEv;
    this.foglalkozas = foglalkozas;
}

SzemelyES5.prototype.korSzamitas = function() {
    var kor = new Date().getFullYear - this.szuletesiEv;
    console.log(kor);
}

var bodon = new SzemelyES5('Bödön', 1980, 'szakács');

// ES6
class SzemelyES6 {
    constructor (nev, szuletesiEv, foglalkozas) {
        this.nev = nev;
        this.szuletesiEv = szuletesiEv;
        this.foglalkozas = foglalkozas;
    }

    korSzamitas (){
        let kor = new Date().getFullYear - this.szuletesiEv;
        console.log(kor);
    }

    static udvozlet(){
        console.log('Csááá');
    }
}

const nador = new SzemelyES6('Cukornádor', 1960, 'pókember');
SzemelyES6.udvozlet();

var KatonaES5 = function(nev, szuletesiEv, foglalkozas, rendFokozat, osztag) {
    SzemelyES5.call(this, nev, szuletesiEv, foglalkozas);
    this.rendFokozat = rendFokozat;
    this.osztag = osztag;
}
*/
/*
var KatonaES5 = function(nev, szuletesiEv, foglalkozas, rendFokozat, osztag) {
    SzemelyES5.call(this, nev, szuletesiEv, foglalkozas);
    this.rendFokozat = rendFokozat;
    this.osztag = osztag;
}

KatonaES5.prototype = Object.create(SzemelyES5.prototype);

KatonaES5.prototype.rangSzerzes = function(rang) {
    this.rendFokozat = rang;
    console.log(this.rendFokozat);
}
var bodonKatona = new KatonaES5('Bödön', 1980, 'szakács', 'százados', 'parancsnok');
bodonKatona.korSzamitas();
bodonKatona.rangSzerzes('hadnagy');
*/
// ES6
/*
class SzemelyES6 {
    constructor (nev, szuletesiEv, foglalkozas) {
        this.nev = nev;
        this.szuletesiEv = szuletesiEv;
        this.foglalkozas = foglalkozas;
    }

    korSzamitas (){
        let kor = new Date().getFullYear - this.szuletesiEv;
        console.log(kor);
    }
}

class KatonaES6 extends SzemelyES6 {
    constructor(nev, szuletesiEv, foglalkozas, rendFokozat, osztag) {
        super(nev, szuletesiEv, foglalkozas);
        this.rendFokozat = rendFokozat;
        this.osztag = osztag;
    }

    rangSzerzes(rang) {
        this.rendFokozat = rang;
        console.log(this.rendFokozat);
    }
}

const nadorKatona = new KatonaES6('Cukornádor', 1960, 'pókember', 'tiszt', 'harcosok');
nadorKatona.rangSzerzes('százados');
nadorKatona.korSzamitas();*/




