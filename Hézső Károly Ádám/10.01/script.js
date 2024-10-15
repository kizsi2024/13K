/*var szamokTomb = [1,2,3,4]

const t2 = [5,6,7,8,9,10]

const t3 = [...szamokTomb,...t2]
console.log(t3)*/

/*function parosVagyParatlanES5(){
    var argumentumokTomb = Array.prototype.slice.call(arguments)
    argumentumokTomb.forEach(function(aktualisElem) {
        if(aktualisElem % 2 === 0){
            console.log('Paros')
        }
        else{
            console.log('Paratlan')
        }
    })
}

parosVagyParatlanES5(1,2,3)

function parosVagyParatlanES6(...szamok){
    var argumentumokTomb = Array.prototype.slice.call(arguments)
    argumentumokTomb.forEach(function(aktualisElem) {
        if(aktualisElem % 2 === 0){
            console.log('Paros')
        }
        else{
            console.log('Paratlan')
        }
    })
}

parosVagyParatlanES5(1,2,3)*/

/*function AdamsFamily(keresztNev, szuleteiEv, csaladiNev){
    csaladiNev === undefined ? csaladiNev = 'Adams' : csaladiNev = csaladiNev
    this.keresztNev = keresztNev
    this.szuleteiEv = szuleteiEv
    this.csaladiNev = csaladiNev
}

var fester = new AdamsFamily('Fester',1940)
var mortisha = new AdamsFamily('Mortisha',1965)
var kuzin = new AdamsFamily('kuzin', 1800,'hogyishivjak')

function AdamsFamily(keresztNev, szuleteiEv, csaladiNev = 'Adams'){
    this.keresztNev = keresztNev
    this.szuleteiEv = szuleteiEv
    this.csaladiNev = csaladiNev
}

var fester = new AdamsFamily('Fester',1940)
var mortisha = new AdamsFamily('Mortisha',1965)
var kuzin = new AdamsFamily('kuzin', 1800,'hogyishivjak')*/

/*const kerdes = new Map()
kerdes.set('kerdes', 'Mi a faszért vgyunk itt?')
kerdes.set(1, 'idk')
kerdes.set(2, 'faszert')
kerdes.set(3, 'qtya tanarok miatt')
kerdes.set(4, 'unalombol')

kerdes.set('helyes', 3)

kerdes.set(true,'helyes fasz')
kerdes.set(false,'buta fasz')

console.log(kerdes.get('kerdes'))
console.log(kerdes.size)

kerdes.forEach(
    (kulcs, ertek) => console.log(`Kulcs: ${kulcs}, ertek: ${ertek}`)
)
for(let [kulcs,ertek] of kerdes.entries()){
    if(typeof(kulcs)==='number'){
        console.log(`Kulcs: ${kulcs}, ertek: ${ertek}`)
    }
}
const valasz = parseInt(prompt('Add meg a helyes valaszt'))
console.log(kerdes.get(valasz === kerdes.get('helyes')))

var SzemelyES5 = function(nev,szuleteiEv,foglalkozas){
    this.nev = nev
    this.szuleteiEv = szuleteiEv
    this.foglalkozas = foglalkozas
}
SzemelyES5.prototype.korszamitas = function(){
    var kor = new Date().getFullYear -this.szuleteiEv
    console.log(kor)
}
var odon = new SzemelyES5('fasz',1111,'hivatasos cigany')

class SzemelyES6 {
    constructor(nev, szuleteiEv,foglalkozas){
        this.nev = nev
        this.szuleteiEv = szuleteiEv
        this.foglalkozas = foglalkozas
    }
    korszamitas(){
        let kor = new Date().getFullYear -this.szuleteiEv
        console.log(kor)
    }
    static udvozlet(){
        console.log('helo')
    }
}
var qtya = new SzemelyES6('fasz',1111,'hivatasos cigany')
SzemelyES6.udvozlet()

var KatonaES5 = function(nev,szuleteiEv,foglalkozas,rendfokozat,osztag){
    SzemelyES5.call(this,nev,szuleteiEv,foglalkozas)
    this.rendfokozat = rendfokozat
    this.osztag = osztag
}
KatonaES5.prototype = Object.create(SzemelyES5.prototype)
var hulyefasz = new KatonaES5('qtya',1111,'kurva','nincs','buzi')
hulyefasz.korszamitas()

cjcuhvusvguhgr
wkhguegioga
ggepigjpdfg
egkpiejgmeorgds
frjhgidgoerg
agjipgKYSodfopeajmda
gjdgipodfgksd
gjigdapoigfjda
gadjogfja
dgfagfőjadfg
jfa
gadjogfjaaodjfg
fagjfda
jgodjr
gadjogfjarhojrarhja
rohjjh
odajhrjgjrjg
jdagr
a*/


























