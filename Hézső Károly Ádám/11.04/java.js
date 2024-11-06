document.body.style = 'rgb(115,61,181)'




async function getWeather(){
    try{
        const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Budapest?unitGroup=metric&key=Q3NWVWPWALBRF8M676RBAYNWG&contentType=json')
        const adat = await response.json()
        console.log(adat)
        const ma = adat.days[0]
        const holnap = adat.days[1]
        document.getElementById('ma').innerHTML = `Ma a homerseklet ${adat.address}en ${Math.round(ma.tempmin)} es ${Math.round(ma.tempmax)} fok kozott fog valtozni`
        document.getElementById('holnap').innerHTML = `Holnap a homerseklet ${adat.address}en ${Math.round(holnap.tempmin)} es ${Math.round(holnap.tempmax)} fok kozott fog valtozni`
    } catch(error){
        console.error('gatyaaa',error)
    }
}
getWeather()



