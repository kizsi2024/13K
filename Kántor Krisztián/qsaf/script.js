/*fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Budapest?unitGroup=metric&key=Q3NWVWPWALBRF8M676RBAYNWG&contentType=json')
.then(result => {
    return result.json()
})
.then(adat => {
    console.log(adat)
    const ma = adat.days[0]
    const holnap = adat.days[1]
    console.log(`Ma a hőmérséklet ${adat.address}en, ${Math.round(ma.tempmin)} és ${Math.round(ma.tempmax)} fok között fog változni.`)
    console.log(`Holnap a hőmérséklet ${adat.address}en, ${Math.round(holnap.tempmin)} és ${Math.round(holnap.tempmax)} fok között fog változni.`)
})
.catch( error => {
    console.error('Hiba történt az adatok lekérésekor: ', error)
})*/

document.body.style.backgroundColor = 'blue'

const ma2 = document.getElementById('ma')
const holnap2 = document.getElementById('holnap')


async function getWeather(){
    try{
        const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Budapest?unitGroup=metric&key=Q3NWVWPWALBRF8M676RBAYNWG&contentType=json')
        const adat = await response.json()
        const ma = adat.days[0]
        const holnap = adat.days[1]

        ma2.innerText = (`Ma a hőmérséklet ${adat.address}en, ${Math.round(ma.tempmin)} és ${Math.round(ma.tempmax)} fok között fog változni.`)
        holnap2.innerText = (`Holnap a hőmérséklet ${adat.address}en, ${Math.round(holnap.tempmin)} és ${Math.round(holnap.tempmax)} fok között fog változni.`)
    }
    catch(error){
        console.error('Hiba történt az adatok lekérésekor: ', error)
    }
}

getWeather()