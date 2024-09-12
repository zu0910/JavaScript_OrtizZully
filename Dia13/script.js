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
                    var randomIndex = Math.floor(Math.random() * 9); // Seleccionamos un índice aleatorio entre 0 y 8
                    selectedCard = cards.cards[randomIndex]; // La carta seleccionada será una de las 9
                    mostrarCartaSeleccionada(selectedCard);
                    mostrarCartasMesa(cards.cards); // Mostramos las 9 cartas
                });
        });
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

function verificarCarta(carta) {
    if (carta.code === selectedCard.code) {
        alert('¡Has adivinado la carta correcta!');
    } else {
        alert('Esa no es la carta correcta, intenta de nuevo.');
    }
}