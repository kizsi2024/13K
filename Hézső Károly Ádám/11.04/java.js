document.body.style = 'rgb(115,61,181)'




async function getWeather(){
    try{
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=47.4997&lon=19.0551&appid=2625197a36afebae1f9caff3ba06297e&units=metric}')
        const adat = await response.json()
        console.log(adat)
        const ma = adat.main
        document.getElementById('ma').innerHTML = `Ma a homerseklet budapesten ${Math.round(ma.temp_min)} es ${Math.round(ma.temp_max)} fok kozott fog valtozni`
        document.getElementById('holnap').innerHTML = `Holnap a homerseklet budapesten ${Math.round(holnap.temp_min)} es ${Math.round(holnap.tem_pmax)} fok kozott fog valtozni`
    } catch(error){
        console.error('gatyaaa',error)
    }
}
getWeather()



