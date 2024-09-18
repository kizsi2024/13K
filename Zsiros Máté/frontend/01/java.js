/*var odon = {
    nev: "Odon"
    szuletesiEv: 1978,
    foglalkozas:"grafikus"
}

var Szemely = function(nev, szuletesiEv, foglalkozas){
    this.nev = nev
    this.szuletesiEv = szuletesiEv
    this.foglalkozas = foglalkozas
}

Szemely.prototype.korSzamitas = function(){
    console.log(2024-this.szuletesiEv)
}

Szemely.prototype.teszt = "teszt"

var odon = new Szemely("Odon", 1978, "grafikus");
odon.korSzamitas();

var erzsi = new Szemely("Erzsi", 2018, "roma");
erzsi.korSzamitas();

console.log(Szemely)
console.log(odon)
console.log(erzsi)
console.log(odon.teszt)

var szemelyProto = {
    korSzamitas: function(){
        console.log(2024 - this.szuletesiEv)
    }
}

var odon = Object.create(szemelyProto)
odon.nev = "Ödön"
odon.szuletesiEv = "2024"
odon.foglalkozas = "tolvaj"

var x = 10
var y = x
x = 100
console.log(x)
console.log(y)

var o1 = {
    sz: 100,
    m: 10
}

var o2 = o1
o1.sz = 150

console.log(o1.sz)
console.log(o2.sz)

var a = 10
var o = {
    nev: 'Odon',
    kor: 35
}

function modosit(s,e){
    s = 40
    e.nev = "Lajos"
}

modosit(a,o)
console.log(o.nev)*/

var evek = [1954, 1955, 1956, 1957]

function tombMuvelet(tomb, fv) {
    var eredmeny = []

    for(var i = 0; i < tomb.length; i++){
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

var felnottek = tombMuvelet(evek, felnott)
console.log(korok)