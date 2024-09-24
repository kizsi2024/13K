/*var odon = {
    nev: 'Ödön',
    szuletsiEv: 1978,
    foglalkozas: 'grafikus'
}*/

/*var Szemely = function(nev, szuletsiEv, foglalkozas){
    this.nev = nev
    this.szuletsiEv = szuletsiEv
    this.foglalkozas = foglalkozas

    this.korSzamitas = function(){
        console.log(2024 - this.szuletsiEv)
    }
}*/

/*var odon = new Szemely('Ödön', 1978, 'grafikus')
odon.korSzamitas()

var erzsi = new Szemely('Erzsi', 1950, 'nyugdija')
erzsi.korSzamitas()

console.log(Szemely)
console.log(odon)
console.log(odon.teszt)


*/

/*var szemelyProto = {
    korSzamitas: function(){
        console.log(2024 - this.szuletsiEv)
    }
}

var odon = Object.create(szemelyProto)
odon.nev = 'Ödön'
odon.szuletsiEv = '1960'
odon.foglalkozas = 'pék'

var kati = Object.create(szemelyProto, {
    nev: {value: 'Kati'},
    szuletsiEv: {value: 199},
    foglalkozas: {value: 'kozmetikus'}
})*/


/*var x = 10
var y = x
x = 100
console.log(x)
console.log(y)

var o1 = {
    sz: 100,
    m: 200
}

var o2 = o1
o1.sz = 150

console.log(o1.sz)
console.log(o2.sz)

var a = 10
var o = {
    nev: 'Ödön',
    kor: 35
}

function modosit(a,b){
    a = 40
    b.nev = 'Lajos'
}

modosit(a,o)

console.log(a)
console.log(o.nev)*/

/*var evek = [1954, 1990, 1963, 2000, 2010]

function tombMuvelet(tomb, fv){
    var eredmeny = []

    for(var i=0; i < tomb.length; i++){
        eredmeny.push(fv(tomb[i]))
    }
    return eredmeny
}

function korSzamitas(elem){
    return 2024 - elem
}

function felnott(elem){
    return elem >= 18
}

var korok = tombMuvelet(evek, korSzamitas)
console.log(korok)

var felnottek = tombMuvelet(korok, felnott)
console.log(felnottek)*/

//visszaadott_függvények

/*function interjukerdes(foglalkozas) {
    if(foglalkozas === 'tanár'){
        return function(nev){
            console.log(nev + ',meg tudná mondani, hogy milyen tárgyakat oktat?')
        }
    } else if (foglalkozas === 'eladó'){
        return function(nev){
            console.log(nev + ", hogyan kezelne egy vevői reklamációt?")
        }
    } else{
        return function(nev){
            console.log('Mi a foglalkozás kedves ' + nev + '?')
        }
    }
}
 var kerdesTanaroknak = interjukerdes('tanár')
kerdesTanaroknak('Pél')

var kerdesEladoknak = interjukerdes('eladó')
kerdesEladoknak('Katalin')
kerdesEladoknak('Béla')
kerdesEladoknak('Ilona')

interjukerdes('tanár')('Péter')
interjukerdes('programozó')('Ödön')*/


/*function jatek(){
    var pont = Math.random() * 10
    console.log(pont >= 5)
}

jatek()*/


/*(function(teszt){
    var pont = Math.random() * 10
    console.log(pont >= 5)
    console.log(teszt)
})('Elló')*/

/*Closure összefoglaló: egy belső függvény mindig képes hozzáférni az őt tartalmazó külső függvény paramétereihez és változóihoz még azután is.
hogy külső függvény befejezte a futását.
*/

/*function nyugdij(ev){
    var szoveg = 'Nyugdíjazásig hátralévő évek száma: '
    return function(szuletsiEv){
        var datumObjektum = new Date()
        var aktualisEv = datumObjektum.getFullYear()
        var kor = aktualisEv - szuletsiEv
        console.log(szoveg + (ev - kor))
    }
}

var nyugdijazasUSA = nyugdij(66)
nyugdijazasUSA(1978)
nyugdij(66)(1978)

var nyugdijasHUN = nyugdij(65)
var nyugdijasIZL = nyugdij(67)

nyugdijasHUN(1978)
nyugdijasIZL(1978)*/

/*var leptet = (
    function(){
        var szamlalo = 0
        return function(){
            szamlalo++
            console.log(szamlalo)
        }
    }
)()

leptet()
leptet()
leptet()*/



//apply, bind, call

/*var odon = {
    nev: 'Ödön',
    kor: 45,
    foglakozas: 'csillagász',
    udvozlet: function(stilus, napszak){
        if(stilus === 'hivatalos'){
            console.log('Üdvözlöm, jó ' + napszak + ' kívánok! ' + this.nev + ' vagyok')
        } else if(stilus === 'baráti'){
            console.log('Szia, jó ' + napszak + '!')
        }
    }
}

odon.udvozlet('hivatalos', 'hajnalt')
odon.udvozlet('baráti', 'estét')

var bela = {
    nev: 'Béla',
    kor: 62,
    foglakozas: 'portás'
}

//call
odon.udvozlet.call(bela, 'baráti', 'estét')

//apply
odon.udvozlet.apply(bela, ['baráti', 'reggelt'])

//bind
var odonBarati = odon.udvozlet.bind(odon, 'baráti')
odonBarati('napot')
odonBarati('estét')

var belaHivatalos = odon.udvozlet.bind(bela, 'hivatalos')
var belaHivatalosReggeli = odon.udvozlet.bind(bela, 'hivatalos', 'reggelt')

belaHivatalos('estét')
belaHivatalosReggeli()*/

/*var evek = [1954, 1990, 1963, 2000, 2010]

function tombMuvelet(tomb, fv){
    var eredmeny =[]

    for (var i = 0; i < tomb.length; i++){
        eredmeny.push(fv(tomb[i]))
    }
    return eredmeny
}

function korszamitas(elem){
    return 2024 - elem
}

// console.log(korok) után
function felnott(korhatar, elem){
    return elem >= korhatar
}

var korok = tombMuvelet(evek, korszamitas)
console.log(evek)
console.log(korok)

var felnottkorJapanban = tombMuvelet(korok, felnott.bind(this, 20))

console.log(felnottkorJapanban)*/


/*var nev5 = 'Teszt Elek'
var kor5 = 40

nev5 = 'Kiss Pista'

console.log(nev5)*/

/*const nev6 = 'Teszt Elek'
let kor6 = 40

//nev6 = 'Kiss Pista' //hiba

console.log(nev6)*/

/*function nyelvVizsga5(siker){
    if(siker){
        var keresztnev = 'Ödön'
        var szuletsiEv = 1980
        console.log(keresztnev + '(születési év: ' + szuletsiEv + ') sikeres volt a vizsga')
    }   
}
nyelvVizsga5(true)*/


/*function nyelvVizsga6(siker){
    if(siker){
        let keresztnev = 'Ödön'
        const szuletsiEv = 1980
        console.log(keresztnev + '(születési év: ' + szuletsiEv + ') sikeres volt a vizsga')
    }   
}
nyelvVizsga6(true)*/


/*let i = 9

for(let i=0; i<5; i++){
    console.log(i)
}

console.log(i)*/

/*var i = 9

for(var i=0; i<5; i++){
    console.log(i)
}

console.log(i)*/


//Blokkok, IIFE
//es6
/*{
    const a = 1
    let b = 2
    //var c = 5
}

console.log(a + b)*/

/*(function(){
    let c = 3
    console.log(c)
})()
console.log(c)*/

//Sztringek ES6ban

/*let vezetekNev = 'Teszt'
let keresztNev = 'Elek'

const szuletesiEv = 1970

function korSzamitas(ev){
    return 2024 - ev
}

//es5
//console.log(vezetekNev + ' ' + keresztNev + ', született ' + szuletsiEv + '-ben. Most ' + korSzamitas(szuletsiEv) + ' éves')

//es6
//console.log(`${vezetekNev} ${keresztNev}, született ${szuletesiEv}-ben. Most ${korSzamitas(szuletesiEv)} éves.`)

const nev = `${vezetekNev} ${keresztNev}`

console.log(nev.startsWith('T'))

console.log(nev.endsWith('ek'))

console.log(nev.includes('Ele'))

console.log(vezetekNev.repeat(3))

console.log(`${vezetekNev} `.repeat(3))*/


//Nyíl függvények
const evek = [1970, 1975, 1954, 2010, 1981]

//es5

/*var korokES5 = evek.map(function(elem){
    return 2024 - elem
})

console.log(korokES5)

//es6

let korokES6 = evek.map(elem => 2024 - elem)

korokES6 = evek.map((elem, index) => `Kor ${index}: ${2024 - elem}.`)

console.log(korokES6)*/

korokES6 = evek.map((elem, index) => {
    const aktEv = new Date().getFullYear()
    const kor = aktEv - elem
    return `Kor ${index}: ${kor},`
})

console.log(korokES6)