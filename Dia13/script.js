var link = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";//Link principal de la API
var selectedCard = null;  // Carta que el jugador debe adivinar

mostrar(link);

function mostrar(link) {
    fetch(link)
        .then(res => res.json())
        .then(data => {
            var deckId = data.deck_id;
            var drawLink = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=9`; // Pedimos 9 cartas para la mesa

            fetch(drawLink)
                .then(res => res.json())
                .then(cards => {
                    var random = Math.floor(Math.random() * 9); // Seleccionamos un índice aleatorio entre 0 y 8
                    selectedCard = cards.cards[random]; // La carta seleccionada será una de las 9
                    mostrarCartaSeleccionada(selectedCard);
                    mostrarCartasMesa(cards.cards); // Mostramos las 9 cartas
                });
        });
}
function mostrar_info(){
    document.getElementById("infoButon").innerHTML = `
    <p>INSTRUCCIONES <br> El objetivo es encontrar la carta que muestra, CUIDADO SOLO TENDRAS TRES INTENTOS <br> suerte!!!!!!!</p>     
    `
}
function reset(){
    document.getElementById("infoButon").innerHTML = ""
}

function mostrarCartaSeleccionada(card) {
    let cartaSeleccionada = document.getElementById("carta");
    cartaSeleccionada.innerHTML = `<img src="${card.image}">`;
}

function mostrarCartasMesa(cartas) {
    let cartasMesa = document.getElementById("cartas-mostradas");
    cartasMesa.innerHTML = ''; // Limpiamos el contenedor

    cartas.forEach(carta => {
        let cartaElemento = document.createElement('div');
        cartaElemento.classList.add('card');
        
        // Parte interior de la carta que puede girar
        cartaElemento.innerHTML = `
            <div class="carticas">
                <div class="card-front"></div>
                <div class="card-back">
                    <img src="${carta.image}">
                </div>
            </div>
        `;

        cartaElemento.addEventListener('click', () => {
            cartaElemento.classList.add('voltear');  // Girar la carta

            setTimeout(() => {//permite que la animación de giro de la carta termine antes de verificar si la carta seleccionada es la correcta.
                verificarCarta(carta);  // Verificar si es la carta correcta
            }, 800);  // Esperar el tiempo del giro para mostrar la verificación
        });

        cartasMesa.appendChild(cartaElemento);
    });
}

var intentos = 0;// contador de intentos
var maxIntentos = 3;//Numero maximo de intentos

function verificarCarta(carta) {
    intentos++;
    document.getElementById("intento").innerHTML = `Intentos restantes: ${maxIntentos - intentos}`;

    if (carta.code === selectedCard.code) {
        alert('¡Has adivinado la carta correcta!');
        mostrarOpcionReiniciar();
    } else if (intentos >= maxIntentos) {
        alert('Lo siento, has agotado todos tus intentos. La carta correcta era ' + selectedCard.code);
        mostrarOpcionReiniciar();
    } else {
        alert('Esa no es la carta correcta, intenta de nuevo.');
    }
}

function mostrarOpcionReiniciar() {
    document.getElementById("reiniciar").innerHTML = `
        <button onclick="reiniciarJuego()">Volver a jugar</button>
    `;
}

function reiniciarJuego() {
    intentos = 0; // Reiniciar el contador de intentos
    document.getElementById("intento").innerHTML = ''; // Limpiar el mensaje de intentos restantes
    document.getElementById("reiniciar").innerHTML = ''; // Limpiar el botón de reinicio
    mostrar(link); // Volver a cargar un nuevo juego
}