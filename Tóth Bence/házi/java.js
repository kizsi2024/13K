//console.log("Hello World!")

var kereszt$Nev = 'Pisti';

var a = 2;
//console.log(kereszt/Nev);

var vezetekNev = 'Kis';
console.log(vezetekNev);

var kor = 32;
console.log(kor);

var nagykoru = false;
console.log(nagykoru);

var magassag;

console.log(magassag);
//console.log(nemLetezo);

var keresztNev = 'Pisti';
var kor = 32;
//console.log(keresztnev + ' ' + kor);
var vezetekNev, felnott;

vezetekNev = 'Kovács';

//felnott = true;

console.log(vezetekNev + ' felnőtt? ' + felnott)

kor = 'harminc';

var szam = 10;
var osszeg = szam + 33;
console.log(osszeg);
var kulonbseg = 100 - szam;
console.log(kulonbseg);
console.log(szam * 2);
console.log(szam / 3);

var szam1 = 100;
var szam2 = 100;
var egyenlo = szam1 <= szam2;
console.log(egyenlo);

// typeof

console.log(typeof szam1);
console.log(typeof 'jfksdjflkjsdk');
console.log(typeof egyenlo);

var nev = 'Pistike';
function teszt () {
var x = 10;
//console.log(x);
}
    teszt();
// ES6
{
    let y = 20;
    console.log(y);
}


var x = 10;
console.log(x);
{
    let x = 2;
    console.log(x);
}
console.log(x);

var fiuk = 23;
var lanyok = 35;
if (fiuk > lanyok) {
    console.log('A fiúk vannak többen. ');
} else {
    console.log('A lányok vannak többen.');
}
// ---
var belakora = 54;
var felnott = true;
if (true) {
    console.log('Béla már felnőtt. ');
} else {
    console.log('Béci még gyerek.');
}

var felnott = false;
if (felnott) {
    console.log('Béla felnőtt');
} else {
    console.log('Béla gyerek');
}
var belakora = 26;
if (belakora >= 18) {
    console.log('Béla felnőtt');
} else {
    console.log('Béla gyerek');
}
belakora >=18? console.log('Béla felnőtt') : console.log('Béla gyerek');
var felnottvagyGyerek = belakora >= 18 ? 'felnőtt': 'gyerek';
console.log(felnottvagyGyerek);

var film = 'Gladiátor';
var mufaj;

switch (film) {
    case 'Shrek' : mufaj = 'mese';
        break;
    case 'Terminator' : mufaj = 'akció';
        break;
    case 'Utazók' : mufaj = 'sci-fi';
        break;
    default :
        mufaj = 'besorolatlan';
}

console.log(mufaj);


var kor = 40;
var nev = 'Béla';
switch (true) {
    case kor < 13:
        console.log(nev + 'kisfiú');
        break;
    case kor >= 13 && kor <= 20:
        console.log(nev + 'tinédzser');
        break;
    case kor >= 20 && kor < 30:
        console.log(nev + 'fiatalamber');
        break;
    default:
        console.log(nev + 'igazi férfi');
}

var kigyok = 100;
var bekak = 78;
var madarak = 198;
var tobbAHullo = kigyok + bekak > madarak;
console.log(tobbAHullo);

var atlag = (kigyok + bekak + madarak) / 3;
console.log(atlag);

var a, b;
console.log(a);

a = b = (10 + 1) * 2 - 2; // 11 * 2 - 2, 22 - 2
// a b = 20;
console.log(a, b);

//a = a * 2;
a *= 2;
console.log(a);

a = a + 1;
a += 1;
//а++;

var sutANap = false;
var joIdovan = true;
if (sutANap != false || joIdovan != false) {
    console.log('Jó kedvem van');
} else {
    console.log('rossz kedvem van');
}

var szam;
szam = 10;
2222222222222 
if (szam | szam === 0) {
    console.log('Létezik');
} else {
    console.log('Nem létezik');
}
// ==>
if (szam === '10') {
    console.log('egyezik');
} else {
    console.log('nem egyezik');
}

function hello(nev) {
return 'Helló ' + nev + '!';
}
var ertek = hello('Géza');
console.log(ertek); 
function teglalapkeruletTerulet(a, b, funkcio) {
    var eredmeny;
    if (funkcio === 'kerület') {
    eredmeny = (a + b) * 2;
    } else if (funkcio === 'terület') {
        eredmeny = a * b;
    } else {
        return 'Hibás funkcio!';
    }
    return funkcio + ' = ' + eredmeny;
}
console.log(teglalapkeruletTerulet (5, 4, 'kerület'));
console.log(teglalapkeruletTerulet (5, 4, 'terület'));

var eletszakaszok = function (nev, kor) {
    switch (true) {
    case kor< 13:
        return nev + 'gyerek';
        break;
    case kor >= 13 && kor <= 20:
        return nev + ' tinédzser';
        break;
    case kor > 20 && kor <= 30:
        return nev + ' ifjú';
        break;
    case kor > 30 && kor <= 50:
        return nev + 'középkorú';
        break;
    default:
        return nev + 'idős';
    }
    }
console.log(eletszakaszok('Kati', 12));
console.log(eletszakaszok('Peti', 20));
console.log(eletSzakaszok('Márk', 67));

var nev1 = 'Ond';
var nev2 = 'Kond';
var nev3 = 'Tas';
var nevek = ['Ond', 'Kond', 'Tas'];
var korok = new Array(35, 42, 38);

console.log(korok [1]);
console.log(nevek);
console.log(nevek.length);

nevek[1] = 'Huba';
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

huba.pop();
console.log(huba);

huba.shift();
console.log(huba);

console.log(huba.indexOf(48));

var szakacs = huba.indexOf('szakács') === -1 ? 'Huba nem szakács' : 'Huba szakács';
console.log(szakacs);

var h = {
    nev: 'Huba',
    'elet kor' : 38
};

var huba = {
    nev: 'Huba',
    kor: 38,
    foglalkozas: 'vezér',
    hazas: true,
    baratok: ['Álmos', 'Előd', 'Ond' ],
    'csaladi allapot': 'nős'
};

console.log(huba.foglalkozas);
console.log(huba['nev']);

var h = 'hazas';
console.log(huba [h]);
console.log(huba['csaladi allapot']);

huba['kor'] = 40;
huba.foglalkozas = 'ács';
console.log(huba);

var tas = new Object();

tas.nev = 'Tas';
tas.kor = 32;
tas['foglalkozas'] = 'vezér';
console.log(tas);

var huba = {
    nev: 'Huba',
    kor: 40,
    foglalkozas: 'vezér',
    hazas: true,
    baratok: ['Álmos', 'Előd', 'Ond' ],
    'csaladi allapot': 'nõs',
    szuletesiEvSzamitas: function () {
        this.szuletesiEV = 2024 - this.kor;
    }
};

huba.szuletesiEvSzamitas();
console.log(huba);

var tomb = ['Ond', 38, 'vezér', true, 1990];
for (var i = 0; i < tomb.length; i++) {
    console.log(tomb[i]);
}
// while
var i = 0;
while (i < tomb.length) {
    console.log(tomb[i]);
i++;
}

// break
var tomb = ['Ond', 38, 'vezér', true, 1990];
for (var i = 0; i < tomb.length; i++) {
    if (typeof(tomb[i]) === 'boolean') {
        break;
    }
    console.log(tomb[i]);
}
// continue
for (var i = 0; i < tomb.length; i++) {
    if (typeof(tomb[i]) !== 'string') {
        continue;
    }
    console.log(tomb[i]);
}

var teszt = 10;

console.log(teszt);

console.log(window.teszt);

console.log(window['teszt']);

function egy() {
    console.log(teszt);
}

egy();

window.egy();