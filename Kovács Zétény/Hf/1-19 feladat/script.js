//1 Feladat
//console.log('Hello World')

//2 Feladat
/*
var keresztnev = "Misi"
console.log(keresztnev)

var vezeteknev = "Tóth"
console.log(vezeteknev)

var kor = 32
console.log(kor)

var nagykoru = true
console.log(nagykoru)

var magassag = 180
console.log(magassag)
*/


//3 Feladat
/*
var keresztnev = "Pisti"
var kor = 30
console.log(keresztnev + '' + kor)

var vezeteknev, felnott;
vezeteknev = "Kovács"
felnott = true;
console.log(vezeteknev + "felnőtt? "+ felnott)

kor = "harminc"
*/

//4 Feladat
/*
var szam = 10;
var osszeg = szam + 10;
console.log(osszeg)
var kulonbseg = 300 - szam
console.log(kulonbseg)

console.log(szam*2)
console.log(szam/2)


var szam1 = 100;
var szam2 = 200;
var egyenlo = szam1 <= szam2
console.log(egyenlo)


console.log(typeof szam1)
console.log(typeof 'awdfafafa')
console.log(typeof egyenlo)

var a
console.log(typeof a)
*/

//5 Feladat
/*
const nev = {
    kereszt : 'Jani',
    vezet : 'Fenyő'
}

nev = {
    kereszt : 'Alma',
    vezet : 'CSerepes'
}
*/

//6 Feladat
/*
var kigyok = 100
var bekak = 70
var madarak = 200

var tobbHullo = kigyok + bekak > madarak
console.log(tobbHullo)

var atlag = (kigyok + bekak + madarak) / 3
console.log(atlag)


var a, b;
console.log(a)

a = a +1
a += 1
a ++
*/


//7 Feladat
/*
var fiuk = 23;
var lanyok = 32;

if(fiuk > lanyok){
    console.log("Fiuk többségben")
}else{
    console.log("Lanyok többségben")
}


var belaKora = 12
var felnott = false;


if(felnott){
    console.log("Bela már felnott")
}else{
    console.log("Bela még gyerek")
}
*/

//8 Feladat
/*
var belaKora = 26
var felnott = false;


if(felnott){
    console.log("Bela már felnott")
}else{
    console.log("Bela még gyerek")
}

belaKora >= 18 ? console.log("Béla felnott") : console.log("Bela gyerek");

var felnottVagyok = belaKora >= 18 ? "felnőtt" : "gyerek";
console.log(felnottVagyok)


var film = "Shrek"
var mufaj;

switch(film){
    case "Shrek" : mufaj = 'mese'
        break;
    case "Terminator" : mufaj = 'akcio'
        break;
    case "Utazok" : mufaj = 'sci-fi'
        break;
    default : mufaj = "besorolatlan"
}

console.log(mufaj)

var kor = 40;
var nev = "Bence"

switch(true){
    case kor < 13 : console.log(nev + "kisfiu")
        break
    case kor >= 13 && kor < 20  : console.log(nev + "tini")
        break
    case kor >= 20 && kor < 30: console.log(nev + "fiatalember")
        break
    default : console.log(nev + "igazi ferfi");
}
    */

//9 Feladat

/*
var sutNap = false;
var joIdovan = true;

if(sutNap != false || joIdovan != false){
    console.log("Jó kedvem van")
}else{
    console.log("Rosszu kedvem van")
}
*/

//10 Feladat

/*
var szam;
szam = 10;

if(szam || szam === 0 ){
    console.log("Létezik")
}else{
    console.log("Nem létezik")
}

=== --> azt jelenti hogy nincs tipus kényszerités

if(szam == '10'){
    console.log("egyezik")
}else{
    console.log("nem egyezik")
}
    */

// 11 Feladat
/*
function teglalapTeruletKerulet(a, b, funckcio){
    var eredmeny

    if(funckcio === "kerulet"){
        eredmeny = (a +b )*2
    }else if(funckcio ==="terulet"){
        eredmeny = a*b
    }else{
        return 'Hibas funkcio'
    }
    
    return funckcio + " = " + eredmeny
}

console.log(teglalapTeruletKerulet(4,5, 'kerulet'))
console.log(teglalapTeruletKerulet(4,5, 'terulet'))
*/

//12 Feladat
/*
var eletSzakaszok = function (nev, kor){
    switch(true){
        case kor < 13:  
            return nev + 'gyerek'
            break
        case kor >= 13 && kor <=20:  
            return nev + 'tini'
            break
        case kor > 20 && kor <=30:    
            return nev + 'ifju'
            break
        case kor > 30 && kor <=50:    
            return nev + 'középkoru'
            break
        default:
            return nev + 'idős';
    }
}

console.log(eletSzakaszok('Kati', 12))
console.log(eletSzakaszok('Peti', 20))
console.log(eletSzakaszok('Márk', 67))
*/

//13 Feladat
/*
var nev1 = 'Ond';
var nev2 = 'Kond';
var nev3 = 'Tas';

var nevek = ['Ond', 'Kond', 'Tas'];

var korok = new Array(35, 42, 38);

console.log(korok[1]);
console.log(nevek);
console.log(nevek.length);

nevek [1] = 'Huba';
console.log(nevek);

//nevek[5] = 'Álmos';

nevek [nevek.length] = 'Álmos ';
console.log(nevek);

var huba = ['Huba', 38, 'vezér', true];
console.log(huba);

huba.push(42);
console.log(huba);

huba.unshift('ifj');
console.log(huba);
*/

//14 Feladat
/*
var huba = {
    nev: 'Huba',
    kor: 38,
    foglalkozas: 'vezér',
    hazas: true,
    baratok: ['Álmos', 'Előd', 'Ond' ],
    'csaladi allapot': 'nős'
};

console.log(huba. foglalkozas);
console.log(huba['nev']);

var h = 'hazas';
console.log(huba [h]);

console.log(huba['csaladi allapot']);

huba['kor'] = 40;
huba.foglalkozas = 'ács';
*/