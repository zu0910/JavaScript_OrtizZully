
function searchId(){
    let search = document.getElementById("enterId");
    let link = "https://superheroapi.com/api.php/96d47f600e2a97ac109a1b92769f26fa/"
    view(link)
}

function view(link){
    fetch(link)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            
        })
}