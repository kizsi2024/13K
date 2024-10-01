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
/*var szamlalo = 0
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

var odon = {
    nev: 'Ödön',
    kor: 45,
    foglalkozas: 'csillagas',
    udvozlet: function(stilus,napszak){
        if(stilus === 'hivatalos'){
            console.log('csa' + napszak + '!' + this.nev + 'vok')
        }
        else if(stilus ==='barati'){
            console.log('szoszi' + napszak + '!')
        }
    }
}
odon.udvozlet('hivatalos', 'hajnalt')
odon.udvozlet('barati', 'estet')

var bela ={
    nev: 'Bela',
    kor: 666,
    foglalkozas: 'portas'

}
odon.udvozlet.call(bela,'hivatalos','estet')
odon.udvozlet.apply(bela,['barati','reggelt'])

var odonBarati = odon.udvozlet.bind(odon,'barati')
odonBarati('napot')
odonBarati('estet')

var belaHivatalos = odon.udvozlet.bind(bela, 'hivtalos')
var belaHivatalosReggeli = odon.udvozlet.bind(bela, 'hivatalos', 'reggelt')

belaHivatalos('reggelt')
belaHivatalosReggeli()*/
var evek = [19544,1990,1963,20000,2010]

function tombMuvelet(tomb,fv){
    var eredmeny = []

    for (var i = 0; i<tomb.length; i++){
        eredmeny.push(fv(tomb[i]))
    }
    return eredmeny
}
function korszamitas(elem){
    return 2024-elem
}

function felnott(korhatar,elem){
    return elem >= korhatar
}

var korok = tombMuvelet(evek,korszamitas)
console.log(evek)
console.log(korok)

var felnottkorJapanban = tombMuvelet(korok,felnott.bind(this,20))

console.log(felnottkorJapanban)