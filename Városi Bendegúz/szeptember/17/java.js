async function getWeather(){
    try{
        const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Budapest?unitGroup=metric&key=Q3NWVWPWALBRF8M676RBAYNWG&contentType=json")
        const adat = await response.json()
        console.log(adat)
        const ma = adat.days[0]
        const holnap = adat.days[1]

        document.getElementById('egy').innerHTML = (`Ma a hőmérséklet ${adat.address}en ${Math.round(ma.tempmin)} és ${Math.round(ma.tempmax)} fok között fog változni.`)
        document.getElementById('ketto').innerHTML = (`Holnap a hőmérséklet ${adat.address}en ${Math.round(holnap.tempmin)} és ${Math.round(holnap.tempmax)} fok között fog változni.`)
    } catch (error) {
        console.log('Hiba történt az adatok lekérésekor:', error)
    }
}

getWeather()