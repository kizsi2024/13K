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
var nev5 = 'Teszt Elek';
var kor5 = 40;

nev5 = 'Dr. Teszt Elek';

//console.log(nev5);

function nyelvvizsga5(siker) {
    if(siker) {
        var keresztNev = 'Ödön';
        var szuletesiEv = 1970;

        console.log(keresztNev + ' (születési év: ' + szuletesiEv + ') sikeres nyelvvizsgát tett.');
    }
}

nyelvvizsga5(true);

//es6
const nev6 = 'Teszt Elek';
let kor6 = 40;

function nyelvvizsga6(siker) {
    if(siker) {
        var keresztNev = 'Ödön';
        var szuletesiEv = 1970;

        console.log(keresztNev + ' (születési év: ' + szuletesiEv + ') sikeres nyelvvizsgát tett.');
    }
}

nyelvvizsga6(true);
*/

/*
var i = 9;

for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i)

////////////////////////////////////
// Blokkok és IIFE

//ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}

//console.log(a + b);

//ES5
(function() {
    var c = 3;
    //console.log(c);
})();

console.log(c);
*/

////////////////////////////////
// Sztringek ES6-ban

/*
let vezetekNev = 'Teszt';
let keresztNev = 'Elek';

const szuletesiEv = 1977;

function korSzamitas(ev) {
    return 2024 - ev;
}

// ES5
console.log(vezetekNev + ' ' + keresztNev + ', született ' + szuletesiEv + '-ben. Most ' + korSzamitas(szuletesiEv) + ' éves.');

// ES6
console.log(`${vezetekNev} ${keresztNev}, született ${szuletesiEv}-ben. Most ${korSzamitas(szuletesiEv)} éves.`);

const nev = `${vezetekNev} ${keresztNev}`;

console.log(nev.startsWith('t'));
console.log(nev.endsWith('ekeee'));
console.log(nev.includes('ele'));
console.log(vezetekNev.repeat(3));

console.log(`${vezetekNev}`.repeat(3));

*/
/*
const evek = [1978, 1975, 1954, 2010, 1981];
// ES5
var korokES5 = evek.map(function(elem) {
});
return 2021 - elem;

// ES6
let korokES6 = evek.map(elem => 2021 - elem);
console.log(korokES6);
korokES6 = evek.map((elem, index) => `Kor ${index}: ${2021 - elem}.`);
console.log(korokES6);
korokES6 = evek.map((elem, index) => {
const aktev = new Date().getFullYear();
const kor = aktEv - elem;
return `Kor ${index}: ${kor}.`;
});
console.log(korokES6);
*/




