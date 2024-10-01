/*var nev5 = 'tesztelek'
var kor5 = 1322153462

nev5 = 'fallosz'

console.log(nev5)

const nev6 = 'tesztelek'
let kor6 = 21431523200423

//nev6 = 'ugyishibatdobb+' //hibat ad wow

console.log(nev6)

function nyelvVizsga5(siker){
    if (siker){
        var kerestnev = 'anyad'
        var szuletesuiev = 2543750
        console.log(kerestnev+ '(szuletesiev:' + szuletesuiev + ') atmentel fasz')
    }
}
nyelvVizsga5(true)


function nyelvVizsga6(siker){
    if (siker){
        let kerestNev = "csicska" 
        const szulketrwhufdEv = 5421087645407154820
        console.log(kerestNev+ '(szuletesiev:' + szulketrwhufdEv + ') atmentel fasz')
    }
    
}
nyelvVizsga6(true)


let i = 9
for (let i = 0;i<5; i++){
    console.log(i)
}

console.log(i)

var i = 9
for (var i = 0;i<5; i++){
    console.log(i)
}

console.log(i)*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
{
    const a = 1
    let b = 2
    var c = 5
}

console.log(a + b)

(function(){
    let c = 3
    console.log(c)
})()
console.log(c)
*/

/*let vesztrszfshfklNev = 'halal'
let kezshehfudsfnjNev = 'agfiabf'

const szulejwoinfdkfáaEv = 8765219828750

function korSzamitas(ev){
    return 2024-ev
}

console.log(vesztrszfshfklNev+ ' ' + kezshehfudsfnjNev+ ' szul ' + szulejwoinfdkfáaEv +  ' ben. Most ' + korSzamitas(szulejwoinfdkfáaEv) + ' eves')

console.log(`${vesztrszfshfklNev} ${kezshehfudsfnjNev}, szuletet ${szulejwoinfdkfáaEv}-ben. MOst ${korSzamitas(szulejwoinfdkfáaEv)} eves`)


const nev = `${vesztrszfshfklNev} ${kezshehfudsfnjNev}`

console.log(nev.startsWith('h'))
console.log(nev.endsWith('bf'))
console.log(nev.includes('ala'))
console.log(vesztrszfshfklNev.repeat(3))
console.log(`${vesztrszfshfklNev} `.repeat(3))*/

/*const evewk = [21043, 5320, 654321, 776531, 1000]

var korokES5 = evewk.map(function(elem){
    return 2024 - elem
})

console.log(korokES5)

let korokES6 = evewk.map(elem => 2024 -elem)

//console.log(korokES6)

korokES6 = evewk.map((elem,index) => `Kor ${index}: ${2024-elem}.`)

console.log(korokES6)

korokES6 = evewk.map((elem,index) => {
    const aktEv = new Date().getFullYear()
    const kor = aktEv - elem
    return `Kor ${index}: ${kor},`
})

console.log(korokES6)

var dobozES5 = {
    szin: 'zűd',
    pozicio: 1,
    kattintsram: function(){
        console.log(this.szin)
        var objektum = this
        document.querySelector('.green').addEventListener('click', function(){
            var szoveg = 'en vagyok a(z) ' + objektum.pozicio + '.doboz es a szinem ' + objektum.szin + '.'
            alert(szoveg)
        })
    }
}
dobozES5.kattintsram()*/

/*const dobozES6 = {
    szin: 'zűd',
    pozicio: 1,
    kattintsram: function(){
        console.log(this.szin)
        document.querySelector('.green').addEventListener('click', ()=>{
            var szoveg = 'en vagyok a(z) ' + this.pozicio + '.doboz es a szinem ' + this.szin + '.'
            alert(szoveg)
        })
    }
}
dobozES6.kattintsram()

Szemely.prototype.barataimEs6 = function(haverok){
    const tomb = haverok.map(elem => `${this.nev} baratja ${elem}`)
    console.log(tomb)
}
new Szemely('geza').barataimEs6(haverok)*/

var odon = ['ödöm',50]
var nev = odon[0]
var kor = odon[1]

console.log(nev)
console.log(kor)

const [nev2,kor2] = ['ödöm', 50]

console.log(nev2)
console.log(kor2)

const obj = {
    keresztNev: 'ödöm',
    vezetekNev: 'bodom'
}

const {keresztNev, vezetekNev} = obj

console.log(keresztNev)
console.log(vezetekNev)

const { keresztNev: x , vezetekNev: y} = obj

console.log(x)
console.log(y)























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































