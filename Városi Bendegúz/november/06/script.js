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

/*korokES6 = evek.map((elem, index) => {
    const aktEv = new Date().getFullYear()
    const kor = aktEv - elem
    return `Kor ${index}: ${kor},`
})

console.log(korokES6)*/


/*var dobozES5 = {
    szin: 'zöld',
    pozicio: 1,
    kattintsRam: function(){
        console.log(this.szin)

        document.querySelector('.green').addEventListener('click', function(){
            var szoveg = 'Én vagok a(z) ' + this.pozicio + '. doboz és a sznem ' +this.szin + '.'
            alert(szoveg)
        })
    }
}

dobozES5.kattintsRam()*/

//ES5
/*var dobozES5 = {
    szin: 'zöld',
    pozicio: 1,
    kattintsRam: function(){
        var objektum = this

        document.querySelector('.green').addEventListener('click', function(){
            var szoveg = 'Én vagok a(z) ' + objektum.pozicio + '. doboz és a sznem ' +objektum.szin + '.'
            alert(szoveg)
        })
    }
}

dobozES5.kattintsRam()*/

//ES6
/*var dobozES6 = {
    szin: 'zöld',
    pozicio: 1,
    kattintsRam: function(){

        document.querySelector('.green').addEventListener('click', () => {
            var szoveg = 'Én vagok a(z) ' + this.pozicio + '. doboz és a sznem ' +this.szin + '.'
            alert(szoveg)
        })
    }
}

dobozES6.kattintsRam()*/


/*function Szemely(nev){
    this.nev = nev
}

//ES5
/*Szemely.prototype.barataimES5 = function(haverok){
    var obj = this
    var tomb = haverok.map(function(elem){
        return obj.nev + ' barátja ' + elem + '.'
    })
    console.log(tomb)
}*/

//var haverok = ['Jóska', 'Pista', 'Ödön']
//new Szemely('Géza').barataimES5(haverok)


//ES6
/*Szemely.prototype.barataimES6 = function(haerok){
    const tomb = haverok.map(elem => `${this.nev} barátja ${elem}.`)
    console.log(tomb)
}

new Szemely('Géza').barataimES6(haverok)*/


//Destrukturálás

//ES5
/*var odon = ['Ödön', 50]
var nev = odon[0]
var kor = odon[1]

console.log(nev)
console.log(kor)

//ES6
const [nev2, kor2] = ['Ödön', 50]

console.log(nev2)
console.log(kor2)

const obj = {
    keresztNev: 'Ödön',
    vezetekNev: 'Bödön'
}



const {keresztNev, vezetekNev} = obj

console.log(keresztNev)
console.log(vezetekNev)

const { keresztNev: x, vezetekNev: y} = obj

console.log(x)
console.log(y)

function korEsNyigdij(szuletesiEv) {
    let nyugdijKorhatar = 65
    const kor = new Date().getFullYear() - szuletesiEv

    return [kor, nyugdijKorhatar - kor]
}

const [kor3, nyugdij] = korEsNyigdij(1978)

console.log(kor3)
console.log(nyugdij)*/


//Tömbök

/*const dobozok = document.querySelectorAll('.rectangle')
console.log(dobozok)
//ES5

var dobozokTombES5 = Array.prototype.slice.call(dobozok)

dobozokTombES5.forEach(function(aktualis){
    aktualis.style.backgroundColor = 'orange'
})

//E6

const dobozokTombES6 = Array.from(dobozok)
dobozokTombES6.forEach(aktualis => aktualis.style.backgroundColor = 'blue')

//ES5

for(var i = 0; i < dobozokTombES5.length; i++){
    if(dobozokTombES5[i].className === 'rectangle blue'){
        continue
    }
    dobozokTombES5[i].textContent = 'Kék lettem'
}

//ES6

for(const aktualis of dobozokTombES6){
    if(aktualis.className === 'rectangle blue'){
        continue
    }
    aktualis.textContent = 'Kék lettem'
}

for(const aktualis of dobozokTombES6){
    if(aktualis.className.includes('blue')){
        continue
    }
    aktualis.textContent = 'Kék lettem'
}


//ES5

var korok = [2, 10, 20, 17, 14]
console.log(korok)

var felnottek = korok.map(function(aktualis){
    return aktualis >= 18
})

console.log(felnottek)

console.log(felnottek.indexOf(true))

//ES6
console.log(korok.findIndex(aktualis => aktualis >= 18))
console.log(korok.find(aktualis => aktualis >= 18 ))*/


//Spread operátor

/*function szamok(a,b,c,d){
    return a + b + c + d
}

var osszeg = szamok(1,2,3,4)
console.log(osszeg)

//es5

var szamokTomb = [1,2,3,4]
var osszeg2 = szamok.apply(null, szamokTomb)

console.log(osszeg2)

//es6
const osszeg3 = szamok(...szamokTomb)
console.log(osszeg3)

const t2 = [5,6,7,8,9,10]

const t3 = [...szamokTomb, ...t2]
console.log(t3)*/

//Rest paraméterek
//es5

/*function parosVagyParatlanES5(){
    var argumentumokTomb = Array.prototype.slice.call(arguments)

    argumentumokTomb.forEach(function(aktualisElem){
        if(aktualisElem % 2 === 0){
            console.log('Paros')
        } else {
            console.log('Paratlan')
        }
    })
}

parosVagyParatlanES5(1,2,3)

//es6

function parosVagyParatlanES6(...szamok){
    szamok.forEach(aktualisElem => {
        if(aktualisElem % 2 === 0){
            console.log('Paros')
        } else{
            console.log('Paratlan')
        }
    })
}

parosVagyParatlanES6(1,2,3)

function parosVagyParatlanES5(teszt){
    var argumentumokTomb = Array.prototype.slice.call(arguments)

    argumentumokTomb.forEach(function(aktualisElem){
        if(aktualisElem % 2 === 0){
            console.log('Paros')
        } else {
            console.log('Paratlan')
        }
    })
}
parosVagyParatlanES5('teszt', 1,2,3,100,5,20 )


function parosVagyParatlanES6(teszt, ...szamok){
    szamok.forEach(aktualisElem => {
        if(aktualisElem % 2 === 0){
            console.log('Paros')
        } else{
            console.log('Paratlan')
        }
    })
}
parosVagyParatlanES6('teszt', 1,2,3,10,20,25)*/

//es5
/*function AdamsFamily(keresztNev, szuletesiEv, csaladiNev){
    csaladiNev === undefined ? csaladiNev = 'Adams' : csaladiNev = csaladiNev
    this.keresztNev = keresztNev
    this.szuletesiEv = szuletesiEv
    this.csaladiNev = csaladiNev
}

var fester = new AdamsFamily('Fester', 1940)
var mortisha = new AdamsFamily('Mortisha', 1965)
var kuzin = new AdamsFamily('Kuzin', 1800, 'Hogyishívják')

//es6
function AdamsFamily(keresztNev, szuletesiEv, csaladiNev){
    
    this.keresztNev = keresztNev
    this.szuletesiEv = szuletesiEv
    this.csaladiNev = csaladiNev
}

var fester = new AdamsFamily('Fester', 1940)
var mortisha = new AdamsFamily('Mortisha', 1965)
var kuzin = new AdamsFamily('Kuzin', 1800, 'Hogyishívják')*/


//Map

/*const kerdes = new Map()
kerdes.set('kerdes', 'Hogy hívják a de miééért reklámban szereplő kisfiút?')
kerdes.set(1, 'Ödön')
kerdes.set(2, 'Ábel')
kerdes.set(3, 'Miklóska')
kerdes.set(4, 'Nándi')

kerdes.set('helyes', 2)

kerdes.set(true, 'Helyes válasz')
kerdes.set(false, 'Nem talált')

console.log(kerdes.get('kerdes'))
console.log(kerdes.size)

/*kerdes.delete(4)

if(kerdes.has(3)){
    kerdes.delete(3)
}*/

//kerdes.clear()

/*kerdes.forEach((kulcs, ertek) => console.log(`Kulcs: ${kulcs}, ertek: ${ertek}`))

for(let [kulcs, ertek] of kerdes.entries()){
    if(typeof(kulcs) === 'number') {
        console.log(`Kulcs: ${kulcs}, ertek: ${ertek}`)
    }
}

const valasz = parseInt(prompt('Add meg a helyes választ'))
console.log(kerdes.get(valasz === kerdes.get('helyes')))*/


//Osztályok
//ES5
/*var SzemelyES5 = function(nev, szuletesiEv, foglakozas){
    this.nev = nev
    this.szuletesiEv = szuletesiEv
    this.foglakozas = foglakozas
}

SzemelyES5.prototype.korszamitas = function(){
    var kor = new Date().getFullYear - this.szuletesiEv
    console.log(kor)
}
var odon = new SzemelyES5('Ödön', 1810, 'kísétet')

//ES6
class SzemelyES6 {
    constructor(nev, szuletesiEv, foglakozas){
        this.nev = nev
        this.szuletesiEv = szuletesiEv
        this.foglakozas = foglakozas
    }
    korszamitas(){
        let kor = new Date().getFullYear - this.szuletesiEv
        console.log(kor)
    }
}
const nandi = new SzemelyES6('Nandi', 1960, "Pék")
console.log(nandi)*/

//Alosztályok

//ES5

/*var SzemelyES5 = function(nev, szuletesiEv, foglakozas){
    this.nev = nev
    this.szuletesiEv = szuletesiEv
    this.foglakozas = foglakozas
}

SzemelyES5.prototype.korszamitas = function(){
    var kor = new Date().getFullYear - this.szuletesiEv
    console.log(kor)

}
var KatonaES5 = function(nev, szuletesiEv, foglakozas, rendfokozat, osztag){
    SzemelyES5.call(this, nev, szuletesiEv, foglakozas)
    this.rendfokozat = rendfokozat
    this.osztag = osztag
}

KatonaES5.prototype.rangszerzes = function(rang){
    this.rendfokozat = rang
    console.log(this.rendfokozat)
}

var odonKatona = new KatonaES5('Ödön', 1970, 'Pék', 'közlegény', 'harcosok')

odonKatona.korszamitas()
odonKatona.rangszerzes('szazados')

//ES6

class SzemelyES6 {
    constructor(nev, szuletesiEv, foglakozas){
        this.nev = nev
        this.szuletesiEv = szuletesiEv
        this.foglakozas = foglakozas
    }
    korszamitas(){
        let kor = new Date().getFullYear - this.szuletesiEv
        console.log(kor)
    }
}

class KatonaES6 extends SzemelyES5{
    constructor(nev, szuletesiEv, foglakozas, rendfokozat, osztag){
        super(nev, szuletesiEv, foglakozas)
        this.rendfokozat = rendfokozat
        this.osztag = osztag
    }

    rangszerzes(rang){
        this.rendfokozat = rang
        console.log(this.rendfokozat)
    }
}

const nandiKatona = new KatonaES6('Nándi', 1960, 'Tiszt', 'harcosok osztaga')

nandiKatona.rangszerzes('szazados')
nandiKatona.korszamitas()*/


/*const masodik = () =>{
    console.log('masodik')
}

const elso = () => {
    console.log('elso')
    masodik()
    console.log('harmadik')
}

elso()*/

/*const masodik = () =>{
    setTimeout(() =>{
        console.log('Asszinkron masodik')
    },6000)
}

const elso = () =>{
    console.log('elso')
    masodik()
    console.log('harmadik')
}

elso()*/


///////////////         Callback hell   ////////////////////////////////////////////////////////////////////////////////////////


/*function receptLekerdez(){
    setTimeout(() =>{
        const receptID = [676, 102, 34, 1489, 321]
        console.log(receptID)

        setTimeout((id) =>{
            const recept = {
                cim: 'Gyulas',
                ketegoria: 'Levesek'
            }
            console.log(`${id}, ${recept.cim}`)

            setTimeout(kategoria => {
                const levesek = [
                    {cim: 'nyrsegi gombocleves', kategoria: 'Levesek'},
                    {cim: 'borsoleves', ketegoria: 'Levesek'}
                ]

                console.log(levesek)
            }, 2000, recept.kategoria)
        }, 2000, receptID[1])
    }, 3000)
}

receptLekerdez()*/


///////////////////         promise     ///////////////////////////////////////////////

const azonositokLekerdezese = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([676, 102, 34, 1489, 321])
    }, 2000)
})

const receptLekeres = (receptID) => {
    return new Promise((resolve, rejcet) => {
        setTimeout((id) =>{
            const recept = {
                cim: 'Gulyas',
                kategoria: 'Levesek'
            }
            resolve(`${id}, ${recept.cim}`)
        }, 2000, receptID)
    })
}

const kategoriaLekeres = (kategoria) =>{
    return new Promise((resolve, reject) => {
        setTimeout((kat) =>{
            const levesek = [
                {cim: 'tokleves', kategoria: 'Levesek'},
                {cim: 'husleves', kategoria: 'Levesek'}
            ]
            resolve(levesek)
        }, 2000, kategoria)
    })
}

azonositokLekerdezese.then(azonositok =>{
    console.log(azonositok)
    return receptLekeres(azonositok[2])
})
.then((recept) => {
    console.log(recept)
    return kategoriaLekeres(recept.kategoria)
})
.then((kategoria) => {
    console.log(kategoria)
})
.catch(hiba =>{
    console.log(hiba)
})