// let és const
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

console.log(korokES6)

korokES6 = evek.map((elem, index) => {
    const aktEv = new Data().getFullYear();
    const kor = aktEv - elem;
    retunr `Kor ${index}: ${kor},`;
});

console.log(korokES6)