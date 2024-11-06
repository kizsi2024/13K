// visszaadott függvények
/*
function interjuKerdes(foglalkozas){
    if(foglalkozas === 'tanar'){
        return function(nev){
            console.log(nev + ', meg tudná adni, hogy milyen tantárgyakat tanít?')
        }
    }
    else if(foglalkozas === 'elado'){
        return function(nev){
            console.log(nev + ',hogyan kezeli a vevői reklamációt?')
        }
    }
    else{
        return function(nev){
            console.log('Mi a foglalkozása kedves ' + nev  + '?')
        }
    }
}

var kerdesTanaroknak = interjuKerdes('tanar');
kerdesTanaroknak('Pál');

var kerdesEladoknak = interjuKerdes('elado');
kerdesEladoknak('Karcsi');
kerdesEladoknak('Zsófi');
*/
// azonnal végrehajtott függvények

/*function jatek(){
    var pont = Math.random() * 10;
    console.log(pont >=5);
}

jatek();

(function(teszt){
    var pont = Math.random() * 10;
    console.log(pont >=5);
    console.log(teszt);
})('Helló');


// closure

function nyugdij(ev){

}*/

///////////////

var szamlalo = 0;

function leptet(){
    szamlalo ++;
    console.log(szamlalo);
}

leptet();
leptet();
leptet();

var szamlalo = 0;

function leptet(){
    var szamlalo = 0;
    szamlalo ++;
    console.log(szamlalo);
}

leptet();
leptet();
leptet();

var szamlalo = 0;

function leptet(){
    var szamlalo = 0;

    return function(){
        szamlalo ++;
        console.log(szamlalo);
    }
    
}

var hozzaad = leptet()
hozzaad();
hozzaad();
hozzaad();