listaDePokes.addEventListener("click", function(e){
    let pokeClicadoNumber = e.target.getAttribute("data-order")

    mostraPoke(pokemonList, pokeClicadoNumber)

})
function mostraPoke(array, order){
    let pokeName = document.querySelector(".poke-name");

    let pokemonExibido = array.find(item => item.order == order)

    trocar(pokemonExibido.sprites.front_default, pokemonExibido.sprites.back_default)
    pokeName.textContent = pokemonExibido.name;
}
setTimeout(()=> {
    mostraPoke(pokemonList, 1);
}, 2000)

function trocar(front, back){
    document.querySelector(".front").src = front;
    document.querySelector(".back").src = back;
}
