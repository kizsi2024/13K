function VetitesekINFO(){
    const data = {
        method: "POST",
        headers: {"Content-Type" : "application/json",},
        body: JSON.stringify({id: document.getElementById("dropdown").value}) 
    }

    fetch('http://localhost:8000/vetitesekinfo',data)
    .then((response) => {
        return response.json();
    })
    .then(data => {
        document.getElementById("idopont").innerHTML = "";
        document.getElementById("helyszin").innerHTML = "";
        document.getElementById("poster").innerHTML = "";

        document.getElementById("idopont").innerHTML = data[0].datum;
        document.getElementById("helyszin").innerHTML = data[0].Terem;
        document.getElementById("poster").innerHTML = `<img id="poszter" src="${data[0].film_keplink}" class="img-thumbnail poster"/>`;
    }).catch((error) => {
        console.log(error);
    });
}