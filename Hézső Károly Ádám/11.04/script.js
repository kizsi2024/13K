/*const masodik = () =>{
    console.log('masodik')
}

const elso = () => {
    console.log('he?')
}
elso()*/

const masodik = () =>{
    setTimeout(() =>{
        console.log('szinkron volt esku masodik')
    },6000)
    
}

const elso = () => {
    console.log('he?')
    masodik()
    console.log('he?')
}

elso()

function receptLekerdez(){
    setTimeout(()=>{
        const receptID = [3210,421,5431,53]
        console.log(receptID)

        setTimeout((id)=>{
            const recept = {
                cim: 'gyulasy',
                kategoria: 'levesek'
            }
            console.log(`${id}. ${recept.cim}`)

            setTimeout(kategoria => {
                const levesek = [
                    {cim:'nyirsegi gombocleves',kategoria:'levesek'},
                    {cim:'beorsoleves',kategoria:'levesek'}

                ]
                console.log(levesek)
            },2000,recept.kategoria)
        },2000,receptID[1])
    },3000)
}
receptLekerdez()

const azonositoLekerdezese = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve([325,643,654,754,7524])
    }, 2000);
})

const receptLekeres = (receptID) =>{
    return new Promise((resolve,reject)=>{
        setTimeout((id) => {
            const recept = {
                cim: 'gulyas',
                kategoria:'levesek'
            }
            resolve(`${id}. ${recept.cim}`)
        }, 2000);
    })
}
const kategoriaLekeres = (kategoria) =>{
    return new Promise((resolve,reject)=>{
        setTimeout((kat) => {
            const levesek = [
                {cim: 'tokleves',kategoria:'levesek'},
                {cim:'husleves',kategoria:'levesek'}
            ]
            resolve(levesek)
        }, 2000, kategoria);
    })
}

azonositoLekerdezese.then(azonositok =>{
    console.log(recept)
    return receptLekeres(azonositok[2])
})
.then((receot) =>{
    console.log(recept)
    return kategoriaLekeres(recept.kategoria)
})
.then((kategoria)=>{
    console.log(kategoria)
})
.catch(hiba=>{
    console.log(hiba)
})