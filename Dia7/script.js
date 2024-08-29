
function search_Id(){
    let search = document.getElementById("enterId").value;
    let link = "https://superheroapi.com/api.php/96d47f600e2a97ac109a1b92769f26fa/"+search;
    view(link)
}

function view(link){
    fetch(link)
    .then(res => res.json())
    .then(data => {
        document.getElementById("view").innerHTML+=`
        <div class="card" style="width: 20vw; border: 0.1vw solid black; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
            <img src="${data.image.url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <p class="card-text">connections: <br> ${data.connections["group-affiliation"]}</p>
                <p class="card-text">Relatives: <br> ${data.connections.relatives}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Intelligence: ${data.powerstats.intelligence} <br>strength: ${data.powerstats.strength} <br> speed: ${data.powerstats.speed} <br> durability: ${data.powerstats.durability} <br> power: ${data.powerstats.power} <br> combat: ${data.powerstats.combat}</li>

                <li class="list-group-item">Biography: <br> Full name:  ${data.biography["full-name"]} <br> alter-egos:  ${data.biography["alter-egos"]} <br> aliases:  ${data.biography["aliases"]} <br> place-of-birth:  ${data.biography["place-of-birth"]} <br> first-appearance:  ${data.biography["first-appearance"]} <br> publisher:  ${data.biography["publisher"]} <br> alignment:  ${data.biography["alignment"]} </li>

                <li class="list-group-item"> appearance: <br> gender: ${data.appearance.gender} <br> race: ${data.appearance.race} <br> height: ${data.appearance.height} <br> height: ${data.appearance.height} <br> weight: ${data.appearance.weight} <br> eye-color: ${data.appearance["eye-color"]} <br> hair-color: ${data.appearance["hair-color"]} </li>

                <li class="list-group-item">ocupation: ${data.work.occupation} <br> ocupation: ${data.work.base}</li>
                
            </ul>
        </div>
        `
    })
}