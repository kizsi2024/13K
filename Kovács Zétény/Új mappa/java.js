/*
fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Budapest?unitGroup=metric&key=Q3NWVWPWALBRF8M676RBAYNWG&contentType=json')
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
})

fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Budapest?unitGroup=metric&key=Q3NWVWPWALBRF8M676RBAYNWG&contentType=json')
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



const ma2 = document.getElementById('ma')
const holnap2 = document.getElementById('holnap')


async function getWeather(){
    try{
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=47.4997&lon=19.0551&appid=d9a716ef8292f5cb157b2c3d54dede0d&units=metric')
        const adat = await response.json()
        const ma = adat.main
        //const holnap = adat.days[1]

        p1.innerText = (`Ma a hőmérséklet Budapesten, ${Math.round(ma.temp_min)} és ${Math.round(ma.temp_max)} fok között fog változni.`)
        //holnap2.innerText = (`Holnap a hőmérséklet ${adat.address}en, ${Math.round(holnap.temp_min)} és ${Math.round(holnap.temp_max)} fok között fog változni.`)
    }
    catch(error){
        console.error('Hiba történt az adatok lekérésekor: ', error)
    }
}

getWeather()