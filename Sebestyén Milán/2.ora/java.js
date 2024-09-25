/*
var odon={
    nev:'ödön',
    szuletesiEv:1978,
    foglalkozaz:'grafikus'
}

var Szemely=function(nev,szuletesiEv,foglalkozaz){
    this.nev=nev;
    this.szuletesiEv=szuletesiEv;
    this.foglalkozaz=foglalkozaz;
}
    Szemely.prototype.korSzamitas=function(){
        console.log(2024-this.szuletesiEv)
    }

    Szemely.prototype.teszt='teszt'
var odon= new Szemely('ödön',1978,'grafikus')
odon.korSzamitas()

var karcsi= new Szemely('karcsi',1950,'nyugdíjas')
karcsi.korSzamitas()

console.log(Szemely)
console.log(odon)
console.log(odon.teszt)
*/
/*
var szemelyProto={
    korSzamitas: function(){
        console.log(2024-this.szuletesiEv)
    }
}
var odon=Object.create(szemelyProto)
odon.nev='ödön'
odon.szuletesiEv='2000'
odon.foglalkozaz='nincs'
*/
/*
var x=10
var y=x
x=100
console.log(x)
console.log(y)

var o1={
    sz:100,
    m:200
}
var o2=o1
o1.sz=150

console.log(o1.sz)
console.log(o2.sz)

var o1={
    nev:'ödön',
    kor:10
}
function mododsit(a,b){
    a=40
    b.nev='Lajos'
}
mododsit(a,o)
console.log(o.nev)
*/
/*
var evek=[1983,1937,923,1834]
function tombMuletet(tomb,fv){
    var eredmany=[]
    for (let i = 0; i < tomb.length; i++) {
        eredmany.push.fv(tomb[i])
        
    }
    return eredmany
}
function korSzamitas(elem){
    return 2024-elem
}
function felnott(elem){
    return elem>=18
}
var korok=tombMuletet(elem.korSzamitas)
console.log(korok)
*/

//vissza adott fugvények
/*
function intejukezdes(foglalkozas){
    if(foglalkozas==='tanár'){
        return function(nev){
            console.log(nev+', meg tudná adni milyen tárgyakat oktat?')
        }
    }
    else if(foglalkozas==='eladó'){
        return function(nev){
            console.log(nev+', hogyan kezelne egy rekamációt?')
        }
    }
    else {
        return function(nev){
            console.log('mi a foglalkozása kedves'+nev)
        }
    }
}
var kerdestan=intejukezdes('tanár')
kerdestan=('Pál')
var kerdeselado=intejukezdes('eladó')
kerdestan=('Karcsi')

*/
/*

function jatek(){
    var pont=Math.random()*10;
    console.log(pont>=5);
}
jatek();
*/

/*
(function(teszt){
    var pont=Math.random()*10;
    console.log(pont>=5);
    console.log(teszt)
})('hello');
*/
/*closure összefoglaló: egy belső fugvény mindig képes hozzáférni az őt tartalmazó kölső
 fügvény paramétereihez és változóihoz*/ 
 /*
function nyugdij(ev){
    var szöveg='Nyugdijazasig levo ido'
    return function(szulev){
        var utumobj=new Date();
        var aktulev=utumobj.getFullYear();
        var kor=aktulev-szulev
        console.log(szöveg+(ev-kor))
    }
}
var nyugdijasok=nyugdij(66)
nyugdijasok(1977)

nyugdij(66)(1977)


var leptet=(
    function(){
        var szamolo=0
        return function(){
            szamolo++
            console.log(szamolo)
        }
    }
)()

leptet()
leptet()
leptet()



function leptet(){
    
        var szamolo=0
         
            szamolo++
            return   console.log(szamolo)
        
    
}

leptet()
leptet()
leptet()
*/
/*
var odon ={nev:'ödön',
kor:45,
foglalkozas:'csillagasz',
udvozles:function(stilus,napszak){
    if(stilus=='hivatalos'){
        console.log('üdvözlön, jó'+ napszak+'kívánok'+ this.nev+'vagyok');
    }
    else if(stilus=='baráti'){
        console.log('szia, jó'+ napszak+'!');
}}}

odon.udvozles('hivatalos','hajnal')
odon.udvozles('baráti','estét')


var bela ={nev:'Béla',
kor:64,
foglalkozas:'portás',
}

odon.udvozles.call(bela,'hivatalos','hajnal')
odon.udvozles.apply(bela,['baráti','estét'])

var odonbaratai=odon.udvozles.bind(bela,'barati')
odonbaratai('napot')
odonbaratai('estét')
var belahiv=odon.udvozles.bind(bela,'hivatalos')
var belahivregg=odon.udvozles.bind(bela,'hivatalos','reggelt')

belahiv('napot')
belahivregg()
*/
/*
var evek=[1983,1937,923,1834]
function tombMuletet(tomb,fv){
    var eredmany=[]
    for (var i = 0; i < tomb.length; i++) {
        eredmany.push(fv(tomb[i]))
        
    }
    return eredmany
}
function korSzamitas(elem){
    return 2024-elem
}
function felnott(korhatar,elem){
    return elem>=korhatar
}
var korok=tombMuletet(evek,korSzamitas)
console.log(evek)
console.log(korok)

var felnottkorjapanban=tombMuletet(korok,felnott.bind(this,20))
console.log(felnottkorjapanban)

*/

/*
//let és const
//es5
/*var nev5 = 'Teszt Elek';
var kor5 = 40;

nev5 = 'Kiss Pista';

console.log(nev5);

function nyelvVizsga5(siker) {
    if (siker) {
        var keresztnev = 'Ödön';
        var szuletesiEv = 1980;
        console.log(keresztnev + '(születési év: ' + szuletesiEv + ') sikeres volt a viszga');
    }

}

nyelvVizsga5(true);

const nev6 = 'Teszt Elek';
let kor6 = 40;
 
// nev6 = 'Kiss Pista';

// console.log(nev6);

function nyelvVizsga6(siker) {
    if (siker) {
        var keresztnev = 'Ödön';
        const szuletesiEv = 1980;
        console.log(keresztnev + '(születési év: ' + szuletesiEv + ') sikeres volt a viszga');
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
    console.log(1);
}

console.log(i);*/


////////////////////////////////////////////////////////////////////////////////////////////////////////
//Blokkok és IIFE
//ES6
/*
{
    const a = 1;
    let b = 2;
    var c = 3;

}

console.log(a + b);

(function() {
    let c = 3; 
    console.log(c);
})();
console.log(c);
*/

//////////////////////////////////////////////////////
// Sztringek ES6-ban

/*let vezeteknev = 'Teszt';
let keresztnev = 'Elek';

const szuletesiEv = 1970;

function korszamitas(ev) {
    return 2024 - ev;
}

console.log(vezeteknev + '' + keresztnev +', született ' + szuletesiEv + '-ben. Most ' + korszamitas(szuletesiEv) + ' éves');

console.log(`${vezeteknev} ${keresztnev}, született ${szuletesiEv}-ben. Most ${korszamitas(szuletesiEv)} éves.`);

const nev = `${vezeteknev} ${keresztnev}`;

console.log(nev.startsWith('T'));

console.log(nev.endsWith('ek'));

console.log(nev.includes('ele'));

console.log(vezeteknev.repeat(3));

console.log(`${vezeteknev}`.repeat(3));*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Nyíl függvények
/*
const evek = [1970, 1975, 1954, 2010, 1981];

// es5

var korokES5 = evek.map(function(elem) {
    return 2024 - elem;
});

console.log(korokES5);
*/
// es6
/*
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
*/
/*
var dobozES5 = {
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

dobozES5.kattintsRam();
*/
/*
var dobozES6 = {
    szin: 'zöld',
    pozicio: 1,
    kattintsRam: function() {

        document.querySelector('.green').addEventListener('click', () => {
            var szoveg = 'Én vagyok a(z) ' + this.pozicio + '. doboz és a szinem ' + this.szin + '.';
            alert(szoveg)
        })
    }
};

dobozES6.kattintsRam();
*/
/*
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
new Szemely('Géza').barataimES6(haverok);
*/
////////////////////////////////////////////////////////////////////////////////////////////
//

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
}

const [kor3, nyugdij] = korEsNyugdij(1978);

console.log(kor3);
console.log(nyugdij);


///////////////////////////
//Tömbök
/*
const dobozok = document.querySelectorAll('.rectangle');
*/
//es5
/*
var dobozokTombES5 = array.prototype.slice.call(dobozok)
    
    dobozokTombES5.forEach(function(aktualis) {
        aktualis.style.backgroundColor = 'orange' ;
    });
    */
/*
//es6

const dobozokTombES6 = Array.from(dobozok);
dobozokTombES6 forEach(aktualis => aktualis.style.backgroundColor = 'blue');

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
        contionue;
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


////////////////////////////////////
// Spread operátor

function szamok(a, b, c, d) {
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
console.log(t3);

const cimsor = document.querySelector('h1');

const htmlElemek = [cimsor, ...dobozok];

Array.from(htmlElemek).forEach(aktualisElem => aktualisElem.style.color = 'purple');


//////////////////////////////////////
// Rest paratméterek

//es5

function parosVagyParatlanES5() {
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
*/

//es6
/*
function AdamsFamily(keresztNev, szuletesiEv, csaladiNev = 'Adams') {

    this.keresztNev = keresztNev;
    this.szuletesiEv = szuletesiEv;
    this.csaladiNev = csaladiNev;

}

var fester = new AdamsFamily('Fester', 1940);
var morthisa = new AdamsFamily('Mortisha', 1965);
var kuzin = new AdamsFamily('Kuzin', 1800, 'Hogyishivják');
*/