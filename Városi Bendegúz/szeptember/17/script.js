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

var leptet = (
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
leptet()



