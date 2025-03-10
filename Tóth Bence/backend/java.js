// let és const
// es5

//var nev5 = 'Teszt Elek';
//var kor5 = 40;

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

/*let vezetekNev = 'Teszt';
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
        var objektum = this;

        document.querySelector('.green').addEventListener('click',() => {
            var szoveg = 'Én vagyok a(z) ' + this.pozicio + '. doboz és a szinem ' + objektum.szin + '.';
            alert(szoveg)
        })
    }
};

dobozES6.kattintsRam();*/

/*function Szemely(nev) {
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
new Szemely('Géza').barataimES5(haverok);*/


//ES6

/*Szemely.prototype.barataimES6 = function(haverok) {

    const tomb = haverok.map(elem => `${this.nve} baratja ${elem}.`);
    console.log(tomb);
}


var haverok = ['Jóska', 'Pista', 'Ödön'];
new Szemely('Géze').barataimES6(haverok);*/


//es5 
/*
var odon = ['Ödön', 50]
var nev = odon[0];
var kor = odon[1];

console.log(nev);
console.log(kor);

//es6
const [nev2, kor2] = ['Ödön', 50];

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
}

const [kor3, nyugdij] = korEsNyugdij(1978);

console.log(kor3);
console.log(nyugdij);*/

//Tömbök

/*const dobozok = document.querySelectorAll('.rectangle');

//es5

var dobozokTombES5 = Array.prototype.slice.call(dobozok)
    dobozokTombES5.forEach(function(aktualis) {
        aktualis.style.backgroundColor = 'orange' ;
    });
    

//es6

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
}*/


// Spread operátor

/*function szamok(a, b, c, d) {
    return a + b + c + d;
}

var osszeg = szamokl (1, 2, 3, 4);
console.log(osszeg);

//es5
var szamokTomb = [1, 2, 3, 4];
var osszeg2 = szamok.apply(null, szamokTomb);

console.log(osszeg2);

//es6
const osszeg3 = szamok(...szamokTomb);
console.log(osszeg3);


const t2 = [5, 6, 7, 8, 9, 10];

const t3 = [...szamokTomb, ...t2];
console.log(t3);*/

//////////////////////////////////////////////////////////////////////////////////////
// Rest paratméterek

//es5

/*function parosVagyParatlanES5() {
    console.log(arguements);
    var argumentumokTomb = Arra.prototype.slice.call(arguements);
    console.log(argumentumokTomb);
    argumentumokTomb.forEach(function(aktualisElem) {
        if (aktualisElem % 2 === 0) {
            console.log('Paros');
        } else {
            console.log('paratlan');
        }
    });
        
    
}

parosVagyParatlanES5(1, 2, 3);

//ES6

function parosVagyParatlanES6(...szamok) {
    console.log(szamok);
    szamok.forEach(aktualisElem => {
        if (aktualisElem === 0){
            console.log(paros);
        } else {
            console.log('Paratlan')
        }
    })
}

parosVagyParatlanES6(1, 2, 3);
function parosVagyParatlanES5() {

    var argumentumokTomb = Array.prototype.slice.call(arguments, 1);
    //console.log(argumentumokTomb);
    argumentumokTomb.forEach(function(aktualisElem) {
        if (aktualisElem % 2 === 0) {
            console.log('Paros');
        } else {
            console.log('Paratlan');
        }
    });
}
parosVagyParatlanES5('teszt', 1, 2, 3, 100, 5, 20);

function parosVagyParatlanES6(teszt, ...szamok) {
    //console.log(szamok);
    szamok.forEach(aktualisElem => {
        if (aktualisElem % 2 === 0) {
            console.log('Paros');
        } else {
            console.log('Paratlan')
        }
    })
}

parosVagyParatlanES5('teszt', 1, 2, 3, 10, 20, 25);


function AdamsFamily(keresztNev, szuletesiEv, csaladiNev) {
    csaladiNev === undefined ? csaladiNev = 'Adams' : csaladiNev = csaladiNev;
    this.keresztNev = keresztNev;
    this.szuletesiEv = szuletesiEv;
    this.csaladiNev = csaladiNev;
}

var fester = new AdamsFamily('Fester', 1940);
var morthisa = new AdamsFamily('Mortisha', 1965);
var kuzin = new AdamsFamily('Kuzin', 1800, 'Hogyishivják');

//es6

function AdamsFamily(keresztNev, szuletesiEv, csaladiNev = 'Adams') {

    this.keresztNev = keresztNev;
    this.szuletesiEv = szuletesiEv;
    this.csaladiNev = csaladiNev;
}
var fester = new AdamsFamily('Fester', 1940);
var morthisa = new AdamsFamily('Mortisha', 1965);
var kuzin = new AdamsFamily('Kuzin', 1800, 'Hogyishivják');


//es6
function AdamsFamily(keresztNev, szuletesiEv, csaladiNev = 'Adams') {

    this.keresztNev = keresztNev;
    this.szuletesiEv = szuletesiEv;
    this.csaladiNev = csaladiNev;

}

var fester = new AdamsFamily('Fester', 1940);
var morthisa = new AdamsFamily('Mortisha', 1965);
var kuzin = new AdamsFamily('Kuzin', 1800, 'Hogyishivják');

/////////////////////////////////
// Map

const kerdes = new Map();
kerdes.set('kerdes', 'Hogy hivják a de miéééért reklámban szereplő kisfiút?');

kerdes.set(1, 'Ödön');
kerdes.set(2, 'Ábel');
kerdes.set(3, 'Miklóska');
kerdes.set(4, 'Nándi');

kerdes.set('helyes', 2);

kerdes.set(true, 'helyes válasz');
kerdes.set(false, 'nem talált');

console.log(kerdes.get('kerdes'));
console.log(kerdes.size);
kerdes.delete(4)

if (kerdes.has(3)) {
    kerdes(3);
}*/
//kerdes.forEach((kulcs, ertek) => )

/*for(let[kulcs,ertek] of kerdes.entries()){
    if(typeof(kulcs) === 'number'){
        console.log(`kulcs: ${kulcs}, ertek: ${ertek}`)
    }
}
kerdes.clear();*/

/*var SzemelyES5 = function() {
    this.nev = nev;
    this.szuletesiEv = szuletesiEv;
    this.foglalkozas = foglalkozas;
}

SzemelyES5.prototype.korszamitas = function() {
    var kor = new Date().getFullYear() - this.szuletesiEv;
    console.log(kor);
}

var KatonaES5 = function(nev, szuletesiEv, foglalkozas, rendfokozat, osztag) {
    SzemelyES5.call(this, nev, szuletesiEv, foglalkozas);
    this.rendfokozat = rendfokozat;
    this.osztag = osztag;
}

KatonaES5.prototype = Object.create(SzemelyES5.prototype);

KatonaES5.prototype.rangszerzes = function(rang) {
    this.rendfokozat = rang;
    console.log(this.rendfokozat);
}

var odonKatona = new KatonaES5('Ödön', 1970, 'Pék', 'közlegény', 'harcosok');

odonKatona.korszamitas();

const masodik= () => {
    console.log('második');
}

const elso = () => {
    console.log('első');
    masodik();
    console.log('harmadik');
}

elso();

const masodik2 = () => 
    setTimeout(() => {
        console.log('második'); 
    }, 6000);{
}

const elso2 = () => {
    console.log('első');
    masodik();
    console.log('harmadik');
}

elso();

////////////////////////////////////osztalyok//////////////////////////////////////////////////////

//es5

var SzemelyES5 = function(nev, szuletesiEv, foglalkozas){
    this.nev = nev;
    this.szuletesiEv = szuletesiEv;
    this.foglalkozas = foglalkozas;
}

SzemelyES5.prototype.korszamitas = function(){
    var kor = new Date().getFullYear - this.szuletesiEv;
    console.log(kor);
}

var odon = new SzemelyES5('Odon', 1810, 'kisertet');

//es6

class SzemelyES6 {
    constructor(nev, szuletesiEv, foglalkozas){
        this.nev = nev;
        this.szuletesiEv = szuletesiEv;
        this.foglalkozas = foglalkozas;
    }
    korSzamitas(){
        let kor = new Date().getFullYear - this.szuletesiEv;
        console.log(kor);
    }
    static udvozlet(){
        console.log('helo');
    }
}

const nandi = new SzemelyES6('Nandi', 1960, 'pek');
console.log(nandi);
SzemelyES6.udvozlet();*/
/*
var SzemelyES5 = function(nev, szuletesiEv, foglalkozas){
    this.nev = nev;
    this.szuletesiEv = szuletesiEv;
    this.foglalkozas = foglalkozas;
}

SzemelyES5.prototype.korszamitas = function(){
    var kor = new Date().getFullYear - this.szuletesiEv;
    console.log(kor);
}

var KatonaES5 = function(nev, szuletesiEv, foglalkozas, rendfokozat, osztag){
    SzemelyES5.call(this, nev, szuletesiEv, foglalkozas)
    this.rendfokozat = rendfokozat;
    this.osztag = osztag;
}

KatonaES5.prototype = Object.create(SzemelyES5.prototype)
KatonaES5.prototype.rangszerzes = function(rang){
    this.rendfokozat = rang;
    console.log(this.rendfokozat);
}

var odonKatona = new KatonaES5('Odi', 1969, 'urologus', 'kozlegeny', 'boxosok');

odonKatona.korszamitas();
odonKatona.rangszerzes('szazados');

//es6

class SzemelyES6{
    constructor(nev, szuletesiEv, foglalkozas){
        this.nev = nev;
        this.szuletesiEv = szuletesiEv;
        this.foglalkozas = foglalkozas;
    }
    korSzamitas(){
        let kor = new Date().getFullYear() - this.szuletesiEv;
        console.log(kor);
    }
}

class KatonaES6 extends SzemelyES6{
    constructor(nev, szuletesiEv, foglalkozas, rendfokozat, osztag){
        super(nev, szuletesiEv, foglalkozas);
        this.rendfokozat = rendfokozat;
        this.osztag = osztag;
    }
    rangszerzes(rang){ 
        this.rendfokozat = rang;
        console.log(this.rendfokozat);
    }
}

const nandiKatona = new KatonaES6('Nandi', 1960, 'tiszt(a)', 'boxosok');

nandiKatona.rangszerzes('szazados');
nandiKatona.korSzamitas();*/

/*
const masodik = () =>{
    console.log("masodik")
}

const elso = () => {
    console.log("elso")
    masodik()
    console.log("harmadik")
}*/
/*
const masodik = () =>{
    setTimeout(() => {
        console.log('Asszinkron masodik')
    }, 6000);
};

const elso = () => {
    console.log('elso')
    masodik();
    console.log('harmadik')
};

elso();*/
/*

function receptLekerdez(){
    setTimeout(() => {
        const receptID = [676,102,34,1489,321]
        console.log(receptID)

        setTimeout((id) => {
            const recept = {
                cim: 'Gulyas',
                kategoria: 'Levesek'
            }
            console.log(`${id}. ${recept.cim}`)

            setTimeout(kategoria => {
                const levesek = [
                    {cim: 'nyirsegi gombocleves', kategoria: 'Levesek'},
                    {cim: 'borsoleves', kategoria: 'Levesek'}

                ]
                console.log(levesek)
            },2000,recept.kategoria)
        },2000, receptID[1])
    },3000)
}*/

///////////////////////////////////////////////
//promise/////////////////////////////////////
/////////////////////////////////////////////
/*const azonositokLekerdezese = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve([676,102,34,1489,321]);
    },2000)
})

fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Budapest?unitGroup=metric&key=Q3NWVWPWALBRF8M676RBAYNWG&contentType=json')
.then(result => {
    return result.json()
})
.then(adat => {
    console.log(adat)
    const ma = adat.days[0]
    const holnap = adat.days[1]
    console.log(`Ma a hőmérséklet ${adat.address}en, ${Math.round(ma.tempmin)} és ${Math.round(ma.tempmax)} fok között fog változni.`)
    console.log(`Holnap a hőmérséklet ${adat.address}en, ${Math.round(holnap.tempmin)} és ${Math.round(holnap.tempmax)} fok között fog változni.`)
})
.catch( error => {
    console.error('Hiba történt az adatok lekérésekor: ', error)
})*/


document.body.style.backgroundColor = "blue"

document.getElementById('ma')
document.getElementById('holnap')



async function getWeather(){
    try{
        const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Budapest?unitGroup=metric&key=Q3NWVWPWALBRF8M676RBAYNWG&contentType=json')
        const adat = await response.json()
        const ma = adat.days[0]
        const holnap = adat.days[1]
        p1.innerText =(`Ma a hőmérséklet ${adat.address}en, ${Math.round(ma.tempmin)} és ${Math.round(ma.tempmax)} fok között fog változni.`)
        p2.innerText =(`Holnap a hőmérséklet ${adat.address}en, ${Math.round(holnap.tempmin)} és ${Math.round(holnap.tempmax)} fok között fog változni.`)
    }
    catch(error){
        console.error('Hiba történt az adatok lekérésekor: ', error)
    }
}
getWeather()