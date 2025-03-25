function filmregchek() {
    var name = document.getElementById("name").value;
    var szereplok = document.getElementById("szereplok").value;
    var desription = document.getElementById("desription").value;
    var hossz = document.getElementById("hossz").value;
    var korhatar = document.getElementById("korhatar").value;
    var dropdown = document.getElementById("dropdown").value;
    var link = document.getElementById("link").value;

    var alapRegex = /^[a-zA-Z0-9áéíóöőúüűÁÉÍÓÖŐÚÜŰ,\s!?'%()]+$/;
    var szereplokRegex = /^[a-zA-Z0-9áéíóöőúüűÁÉÍÓÖŐÚÜŰ'-\s]+$/;
    var linkRegex = /^(https?|ftp?|http):\/\/[^\s/$.?#].[^\s]*$/i;


    if (!name || !szereplok || !desription || !hossz || !korhatar || dropdown=='' || !link) {
        return alert("Töltsön ki minden mezőt!")
    }
    else if (!name.match(alapRegex) && !desription.match(alapRegex)) {
        return alert("Hibás cím vagy leírás! A film címe vagy leírása nem engedéjezett karaktert tartalmaz!")
    }
    else if (!szereplok.match(szereplokRegex)) {
        return alert("Hiba a szereplők nevénél! Nem engedéjezett karaktert tartalmaz!")
    }
    else if (!link.match(linkRegex)) {
        return alert("Hibás link! Nem engedéjezett karaktert tartalmaz, vagy nem felel meg a link formai követelményének!")
    }
    else {
        filmREG();
    }
}


function filmREG(){
    const data = {
        method: "POST",
        headers: {"Content-Type" : "application/json",},
        body: JSON.stringify({
            name: document.getElementById("name").value,
            szereplok: document.getElementById("szereplok").value,
            desription: document.getElementById("desription").value,
            hossz: document.getElementById("hossz").value + " perc",
            korhatar: document.getElementById("korhatar").value,
            kategoria: document.getElementById("dropdown").value,
            link: document.getElementById("link").value
        })       
    }
    
   fetch("http://localhost:8000/filmreg",data)
    .then((response) => {
        return response.json();
    }).then((data) => {
        if (data.status == 404) {
            err = document.getElementById("error");
            err.innerHTML = data.error;
        }
        alert("Sikeres film feltöltés");
        history.back();
    }).catch((error) => {
        console.log(error);
    });
}