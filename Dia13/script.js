function mostrarInfo(){
    document.getElementById("infoButon").innerHTML = "INSTRUCCIONES <br> Se te mostrara una carta en la cual deberas escoger la correcta en las nueve cartas mostradas";

}

var link = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

mostrar(link);

function mostrar(link){
    fetch(link)
    .then( res => res.json())
    .then( data => {
        var other= data.deck_id;
        var linkDos ="https://deckofcardsapi.com/api/deck/"+String(other)+"/draw/?count=2";

        fetch (linkDos)
        .then( res => res.json())
        .then( card => {
            console.log(card.cards[0].image);
            
            let cartas= document.getElementById("carta");
            cartas.innerHTML =`
            <img src=${card.cards[0].image}>
            `
        })

    })

}