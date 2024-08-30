function search_Id(){
    let search = document.getElementById("enterId").value;
    let link = "https://swapi.py4e.com/api/people/"+search;
    
    view(link)
}

function view(link){
    fetch(link)
    .then(res => res.json())
    .then(data => {
        document.getElementById("view").innerHTML+=`
        <table class="table">
        <tbody>
            <tr class="table-dark">
                <td scope="row">Name: </td>
                <td>${data.name}</td>
            </tr>
            <tr class="table-dark">
                <td scope="row">Height: </td>
                <td>${data.height}</td>
            </tr>
                <tr class="table-dark">
                <td scope="row">Mass: </td>
            <td>${data.mass}</td>
            </tr>
            <tr class="table-dark">
                <td scope="row">Hair color: </td>
                <td>${data["hair_color"]}</td>
            </tr>
            <tr class="table-dark">
                <td scope="row">Skin color: </td>
                <td>${data["skin_color"]}</td>
            </tr>
            <tr class="table-dark">
                <td scope="row">Eye color: </td>
                <td>${data["eye_color"]}</td>
            </tr>
            <tr class="table-dark">
                <td scope="row">Birth year: </td>
                <td>${data["birth_year"]}</td>
            </tr>
            <tr class="table-dark">
                <td scope="row">Gender: </td>
                <td>${data.gender}</td>
            </tr>

            <tr class="table-dark">
                <td scope="row">Homeworld: </td>
                <td>
                    <ul class="list-group">
                        <li class="list-group-item"><strong>Name: ${data.homeworld.name}</strong></li>
                        <li class="list-group-item"><strong>Rotation period: ${data.homeworld}</strong></li>
                        <li class="list-group-item"><strong>Orbital period: ${data.homeworld}</strong></li>
                        <li class="list-group-item"><strong>Dilameter: ${data.homeworld}</strong></li>
                        <li class="list-group-item"><strong>Climate: ${data.homeworld}</strong></li>
                        <li class="list-group-item"><strong>Gravity: ${data.homeworld}</strong></li>
                        <li class="list-group-item"><strong>Terrain: ${data.homeworld}</strong></li>
                        <li class="list-group-item"><strong>Surface water: ${data.homeworld}</strong></li>
                        <li class="list-group-item"><strong>Population: ${data.homeworld}</strong></li>
                        <li class="list-group-item"><strong>Created: ${data.homeworld}</strong></li>
                        <li class="list-group-item"><strong>Edited: ${data.homeworld}</strong></li>
                        <li class="list-group-item"><strong>Url: ${data.homeworld}</strong></li>
                    </ul>
                </td>
            </tr>
                    
            
        </tbody>
        </table>
        `
    })
}