//Objektum létrehozás
/*
var odon ={
    nev: "Ödön",
    szuletesiEv:1978,
    foglalkozas: "grafikus"
}

var Szemely=function(nev, szuletesiEv, foglalkozas){
    this.nev=nev
    this.szuletesiEv=szuletesiEv
    this.foglalkozas=foglalkozas
}

Szemely.prototype.korSzamitas=function(){
    console.log(2024-this.szuletesiEv)
}
Szemely.prototype.teszt="teszt"

var odon=new Szemely("Ödön", 1978, "grafikus")
odon.korSzamitas()

var erzsi=new Szemely("Erzsi",1950,"nyugdíjas")
erzsi.korSzamitas()

console.log(Szemely)
console.log(odon)
console.log(erzsi)

//Objekt.create

var SzemelyProto={
    korszamitas: function(){
        console.log(2024-this.szuletesiEv)
    }
}

var odon=Object.create(SzemelyProto)
odon.nev="ödön"
odon.szuletesiEv=1978
odon.foglalkozas="pék"

var kati=create(SzemelyProto,{
    nev:{value:"Kati"},
    szuletesiEv:{value:1990},
    foglalkozas: {value:"kozmetikus"}
})


//egyszerű típusok és obj-ok

var x=10
var y=x
x=100
console.log(x)
console.log(y)

var o1={
    sz: 100,
    m:200
}
var o2=o1
o1.sz=150

console.log(o1.sz)
console.log(o2.sz)

var a =10
var o= {
    nev:"ödön",
    kor:35
}

function modosit(a,b){
    a=40
    b.nev='Lajos'
}

modosit(a,o)

console.log(a)
console.log(o.nev)

//fügvények

var evek=[1954, 1990, 1963, 2000, 210]

function tombMuvelet(tomb, fv){
    var eredmeny=[]

    for (var i = 0; i < tomb.length; i++) {
        eredmeny.push(fv(tomb[i]))        
    }
    return eredmeny
}


function korSzamitas(elem){
    return 2024-elem;
}
function felnott(elem){
    return elem>=18;
}

var korok=tombMuvelet(evek,korSzamitas)
console.log(korok)

var felnottek= tombMuvelet(evek,felnott)
console.log(felnottek)


//visszaadott fügvények

function interjukerdes(foglalkozas) {
    if (foglalkozas==="tanár") {
        return function(nev){
            console.log(nev+", meg tudnád mondani, hogy milyen tárgyakat oktat?")
        }
    }else if (foglalkozas==="eladó") {
        return function(nev){
            console.log(nev+", hogyan kezelne egy vevői reklamációt?")
        }
    }else{
        return function(nev){
            console.log("Mi a foglalkozása kedves"+nev+"?")
        }
    }
}
var kerdesTanaroknak= interjukerdes("tanár")
kerdesTanaroknak("Pál")

var kerdesEladoknak=interjukerdes("eladó")
kerdesEladoknak("Milán")
kerdesEladoknak("Zsigi")

interjukerdes("tanár")("Péter")
interjukerdes("eladó")("ödön")


//IIFE
function jatek(){
    var pont=Math.random()*10
    console.log(pont>=5)
}
jatek()

(function(teszt){
    var pont=Math.random()*10
    console.log(pont>=5)
    console.log(teszt)
})('hello')
*/

//clousure

function nyugdij(ev){
    var szoveg = "Nyúgdíjazásig hátralévő évek száma: "
    return function(szuletesiEv) {
        var datumObjektum=new Date()
        var aktualisEv=datumObjektum.getFullYear()
        var kor = aktualisEv-szuletesiEv
        console.log(szoveg+(ev-kor))
    }
}
var nyugdijazasUSA=nyugdij(66)
nyugdijazasUSA(2006)
nyugdij(66)(1978)


var leptet= (
    function() {
        var szamlalo=0
        return function() {
            szamlalo++
            console.log(szamlalo)
        }
    }
)()

leptet()
leptet()
leptet()