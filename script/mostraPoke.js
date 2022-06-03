listaDePokes.addEventListener("click", function(e){
    let pokeClicado = e.target

    let pokeClicadoNumber = pokeClicado.getAttribute("data-order")
    mostraPoke(pokemonList, pokeClicadoNumber);

})
function mostraPoke(array, order, type){
    let pokeName = document.querySelector(".poke-name");

    let pokemonExibido = array.find(item => item.order == order)

    trocar(pokemonExibido.sprites.front_default, pokemonExibido.sprites.back_default, pokemonExibido.types[0].type.name)
    pokeName.textContent = pokemonExibido.name;
}
setTimeout(()=> {
    mostraPoke(pokemonList, 1);
}, 2000)

function trocar(front, back, type){
    let colorBack = types.find(item => item.type == type? true:false)
    let frontImg = document.querySelector(".front");
    let backImg = document.querySelector(".back");

    frontImg.style.backgroundImage = colorBack.backgroundColors;
    
    
    frontImg.src = front;
    if(back != null){
        backImg.removeAttribute("style")
        backImg.src = back;
        backImg.style.backgroundImage = colorBack.backgroundColors;
    }else{
        backImg.style.opacity = "0";
    }
    
}
