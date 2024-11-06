/*const masodik = () =>{
    console.log("masodik")
}

const elso = () => {
    console.log('elso')
    masodik()
    console.log('harmadik')
}
elso()



const masodik = () =>{
    setTimeout(() =>{
        console.log("masodik")
    },6000);
}

const elso = () => {
    console.log('elso')
    masodik()
    console.log('harmadik')
}
elso()


function receptLekerdez(){
    setTimeout(() => {
        const receptID = [670, 124, 346, 745]
        console.log(receptID)

        setTimeout((id) => {
            const recept = {
                cim:'Gulyas',
                kategoria:'Levesek'

            }
            console.log(`${id}. ${recept.cim}`);

            setTimeout(kategoria => {
                const levesek =[
                    {cim:'nyirsegi gombocleves',
                    kategoria:'Levesek'},
                    {cim:'borsoleves',
                    kategoria:'Levesek'}
                ];
                console.log(levesek)
            },2000,recept.kategoria);
        },2000, receptID[1])
    },3000)
    


}
*/
receptLekerdez();

const azonositokLekerdezese = new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve([670, 124, 346, 745]);
    },2000);
});

const receptLekeres = (receptID) => {
    return new Promise((resolve, reject) => {
        setTimeout((id) =>{
            const recept = {
                cim:'Gulyas',
                kategoria:'Levesek'
            };
            resolve(`${id}. ${recept.cim}`);
        },2000,receptID)
    })
}

const kategoriaLekeres = (kategoria) => {
    return new Promise((resolve, reject) => {
        setTimeout((kat) => {
            const levesek =[
                {cim:'tokleves',
                kategoria:'Levesek'},
                {cim:'husleves',
                kategoria:'Levesek'}
            ]
            resolve(levesek)
        },2000,kategoria)
    })
}

azonositoLekerdezes.then(azonositok =>{
    console.log(azonositok)
    return receptLekres(aazonositok[2])
})
.then((recept) =>{
    console.log(recept)
    return kategoriaLekeres(recept.kategoria)
})
.then((kategoria) => {
    console.log(kategoria)
})
.catch(hiba =>{
    console.log(hiba)
})