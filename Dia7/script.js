
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
        
            <div class="card" style="width: 25vw; border: 0.1vw solid black; box-shadow: 0 0 20px black; margin-top: 2vw; margin-left: 5vw">

                <img src="${data.image.url}" class="card-img-top" style="width:25vw; height: 20vw">

                <div class="card-body">

                    <h5 class="card-title" style=" font-weight: bold; font-size: 2vw;">${data.name}</h5>

                </div>
                
                <ul class="list-group list-group-flush" >
                    <li class="list-group-item" style=" border: 0.01vw solid black">Intelligence: ${data.powerstats.intelligence} / strength: ${data.powerstats.strength} / speed: ${data.powerstats.speed} / durability: ${data.powerstats.durability} / power: ${data.powerstats.power} / combat: ${data.powerstats.combat}</li>

                    <li class="list-group-item" style=" border: 0.01vw solid black" ><h6>Biography</h6> Full name:  ${data.biography["full-name"]} / alter-egos:  ${data.biography["alter-egos"]} / aliases:  ${data.biography["aliases"]} / place-of-birth:  ${data.biography["place-of-birth"]} / first-appearance:  ${data.biography["first-appearance"]} / publisher:  ${data.biography["publisher"]} / alignment:  ${data.biography["alignment"]} </li>

                    <li class="list-group-item" style=" border: 0.01vw solid black" > <h6>appearance</h6> / gender: ${data.appearance.gender} / race: ${data.appearance.race} / height: ${data.appearance.height} / height: ${data.appearance.height} / weight: ${data.appearance.weight} / eye-color: ${data.appearance["eye-color"]} / hair-color: ${data.appearance["hair-color"]} </li>

                    <li class="list-group-item" style=" border: 0.01vw solid black">connections ${data.connections["group-affiliation"]} / Relatives ${data.connections.relatives}</li>

                    <li class="list-group-item" style=" border: 0.01vw solid black">ocupation: ${data.work.occupation} / base: ${data.work.base}</li>
                    
                </ul>
            </div>
        </center>
        `
    })
}