
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
        <center>
        
            <div class="card" style="width: 25vw;  box-shadow: 0 0 20px black; margin-top: 2vw; margin-left: 5vw">

                <img src="${data.image.url}" class="card-img-top" style="width:25vw; height: 20vw">

                <div class="card-body">

                    <h5 class="card-title" style=" font-weight: bold; font-size: 2vw;">${data.name}</h5>
                    <h5 class="card-title"> ID ${data.id}</h5>

                </div>
                
                <ul class="list-group list-group-flush" >
                    <li class="list-group-item" >Intelligence: ${data.powerstats.intelligence} <br> strength: ${data.powerstats.strength} <br> speed: ${data.powerstats.speed} <br> durability: ${data.powerstats.durability} <br> power: ${data.powerstats.power} <br> combat: ${data.powerstats.combat}</li>

                    <li class="list-group-item"  ><h6>Biography</h6> Full name:  ${data.biography["full-name"]} <br> alter-egos:  ${data.biography["alter-egos"]} <br> aliases:  ${data.biography["aliases"]} <br> place-of-birth:  ${data.biography["place-of-birth"]} <br> first-appearance:  ${data.biography["first-appearance"]} <br> publisher:  ${data.biography["publisher"]} <br> alignment:  ${data.biography["alignment"]} </li>

                    <li class="list-group-item"  > <h6>appearance</h6> gender: ${data.appearance.gender} <br> race: ${data.appearance.race} <br> height: ${data.appearance.height} <br> height: ${data.appearance.height} <br> weight: ${data.appearance.weight} <br> eye-color: ${data.appearance["eye-color"]} <br> hair-color: ${data.appearance["hair-color"]} </li>

                    <li class="list-group-item" > <h6>connections</h6> ${data.connections["group-affiliation"]} <br> Relatives ${data.connections.relatives}</li>

                    <li class="list-group-item" > <h6>ocupation</h6> ${data.work.occupation} <br> base: ${data.work.base}</li>
                    
                </ul>
            </div>
        </center>
        `
    })
}