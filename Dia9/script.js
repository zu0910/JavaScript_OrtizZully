document.getElementById("form").addEventListener("submit",poke_id)
document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault();
})
function poke_id(){
    var name_poke = document.getElementById("name_poke").value;
    look_for(name_poke)
}
let id;
let idApi=1;
function look_for(name_poke){
    let url = "https://pokeapi.co/api/v2/pokemon/" + name_poke;
    fetch(url)
        .then( res => res.json())
        .then( data => {
            document.getElementById("gif_poke").innerHTML = ""
            document.getElementById("gif_poke").innerHTML += `
            <img src="${data.sprites.other.showdown.front_default}">
            <audio autoplay src="${data.cries.latest}">
            </audio>
            
            `
            document.getElementById("texto").innerHTML=""
            document.getElementById("texto").innerHTML += `
            ${data.id} - <p id="name">${data.forms[0].name}</p>
            `
            idApi = data.id;

            document.getElementById("prev").addEventListener("click", (e) => {
                look_for(idApi-1)
            })
            document.getElementById("next").addEventListener("click", (e) => {
                look_for(idApi+1)
            })
        })
}