fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Budapest?unitGroup=metric&key=Q3NWVWPWALBRF8M676RBAYNWG&contentType=json')
.then(result=>{
    return result.json()
})
.then(adat=>{
    console.log(adat)
    const ma =adat.days[0]
    const holnap=adat.days[1]
    console.log(`Ma a hőmérséklet ${adat.address}en ${Math.round(ma.tempmin)} és ${Math.round(ma.tempmax)} fok között fog változni`)
    console.log(`Holnap a hőmérséklet ${adat.address}en ${Math.round(holnap.tempmin)} és ${Math.round(holnap.tempmax)} fok között fog változni`)
})
.catch(error=>{
    console.error('Hiba történt az adaok lekérésekor!',error)
})