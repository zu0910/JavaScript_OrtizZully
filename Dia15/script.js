
// // Creacion de un elemento personalizado
// class crearBoton extends HTMLElement{
//     constructor(){
//         super();
//             this.textContent = '¿Haz click aqui!';
//             this.addEventListener('click', () => alert("Hiciste click!!!"));
//     }
// }

// customElements.define('mi-boton',crearBoton);

// // ----------------------------------------------------------------------
// class crearBotonShadow extends HTMLElement{
//     constructor(){
//         super();
//         let miShadow = this.attachShadow({mode:'open'});
//         miShadow.innerHTML=`
//         <button>Soy un boton lindo!</button>
//         `
//     }
// }
// customElements.define('boton-shadow',crearBotonShadow)


class info extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
    <div id="contenedor">
        <div id="barraSup">
            <h1 id="title">Live User Filter</h1>
            <p id="texto">Search by name and/or location</p>
            <input id="input" name="buscador" type="search" placeholder=" Search">
        </div>
        <div id="info_perso"></div>
    </div>
    `
    }
}
customElements.define('mi-info', info)
var link = "https://66e45b7dd2405277ed1408c9.mockapi.io/live";// link
const information = document.getElementById("info_perso");
document.addEventListener("keyup", e => {
    if (e.target.matches("#input")) {
        document.querySelectorAll("#info_person").forEach(name => {
            name.textContent.includes(e.target.value)
                ? name.classList.remove("filtro")
                : name.classList.add("filtro")
        })
    }
})

mostrar(link);

function mostrar(link) {
    fetch(link)
        .then(res => res.json())
        .then(data => {

            for (const i of data) {

                information.innerHTML += `
                    <div id="info_person">
                        <div id="img"><img src="${i.avatar}"></div>
                        <div id="nombre" class="info">${i.name_full}</div>
                        <div id="descripcion" class="info">${i.description}</div>
                    </div>
                    
                    `
            }
        })
}
