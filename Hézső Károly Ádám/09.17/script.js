/*function interjukerdes(foglalkozas) {
    if (foglalkozas === 'tanár'){
        return function(nev){
            console.log(nev + ', meg tudna mondani, hogy milyen targyakat oktat?')

        }
    }
    else if(foglalkozas === 'elado'){
        return function(nev){
            console.log(nev + ', hogyna kezelne egy vevoi reklamaciot?')
        }
    }
    else {
        return function(nev){
            console.log('Mi a foglalkozasa kedves ' + nev + '?')
        }
    }
}

var kerdesTanaroknak = interjukerdes('tanar')
kerdesTanaroknak('Pál')

var kerdesEladoknak = interjukerdes('elado')
kerdesEladoknak('Karcsi')
kerdesEladoknak('Zsofi')*/

/*function jatek(){
    var pont = Math.random() * 10
    console.log(pont >=5)
}

jatek()*/

/*(function(teszt){
    var pont = Math.random() * 10
    console.log(pont >=5)
    console.log(teszt)
})('Pokol')*/

/*function nyugdij(ev) {
    var szoveg = 'Nyugdíjazásig hátralévő évek száma: '
    return function(szuletesiEv) {
    var datumObjektum = new Date()
    var aktualisEv = datumObjektum.getFullYear()
    var kor = aktualisEv - szuletesiEv
    console.log(szoveg + (ev - kor))
    }
}
var nyugdijazasUSA = nyugdij(66)
nyugdijazasUSA(1978)
nyugdij(66) (1978)

var nyugdijazaSHUN = nyugdij(65)
var nyugdijazasIZL = nyugdij(67)
nyugdijazasHUN (1978)
nyugdijazasIZL (1978)*/
/* Closure összefoglaló: egy belső függvény mindig képes hozzáférni az őt tartalmazó külső függvény paramétereihez és változóihoz még azután is,
hogy a külső függvény befejezte a futását. */
var szamlalo = 0
function leptet(){
    
    var szamlalo = 0
    return function(){
        szamlalo++
        console.log(szamlalo)
    }
}
var hozzaad = leptet()
hozzaad()
hozzaad()
hozzaad()