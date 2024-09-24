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

// Sztringek ES6-ban
let vezetekNev = 'Teszt'; let kereszetNev = 'Elek';
const szuletesiEv = 1970;
function korszamitas (ev) {
return 2021 - ev;
}
// ES5
console.log(vezetekNev +' ' + kereszetNev + ' született ' + szuletesiEv + '-ben. Most '+ korszamitas (szuletesiEv) +' éves.');
// ES6
console.log('${vezetekNev} ${kereszetNev}, született ${szuletesiEv}-ben. Most ${korszamitas(szuletesiEv)} éves.');
const nev = '${vezetekNev} ${kereszetNev}'
console.log(nev.startsWith('t'));
console.log(nev.endsWith('ekeee'));
console.log(nev.includes ('ele'));
console.log(vezetekNev.repeat (3));
console.log("${vezetekNev} `.repeat(3))")


// Nyíl függvények
const evek = [1978, 1975, 1954, 2010, 1981];
// ES5
var korokES5 = evek.map(function(elem) { return 2021 - elem;
});
console.log(korokES5);
// ES6
let korokES6 = evek.map(elem => 2021 - elem);
console.log(korokES6);
korokES6 = evek.map((elem, index) => 'Kor ${index}; ${2021 - elem}.')
console.log(korokES6);
korokES6=evek.map((elem, index) => {
    const aktev = new Date().getFullYear();
    const kor = aktEv - elem;
    return `kor ${index}: ${kor}.`;
});
