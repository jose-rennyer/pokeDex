//evento de clique para identificar o pokemon clicado, e exibir de acordo com o data order dele
listaDePokes.addEventListener("click", function(e){
    let pokeClicado = e.target

    let pokeClicadoNumber = pokeClicado.getAttribute("data-order")
    mostraPoke(pokemonList, pokeClicadoNumber);

})

// essa função vai receber o array que precisa ser analisado, e a ordem do pokemon clicado logo acima, para procurar dentro do array
function mostraPoke(array, order){
    let pokeName = document.querySelector(".poke-name");

    let pokemonExibido = array.find(item => item.order == order)

    trocar(pokemonExibido.sprites.front_default, pokemonExibido.sprites.back_default, pokemonExibido.types[0].type.name)
    pokeName.textContent = pokemonExibido.name;
    // função que vai receber do pokemon o nome, sprite de frente e de costas, e também o tipo dele.
}

// essa função vai ser usada para mostrar pelomenos o pokemon inicial, para que a tela não fique branca// tudo isso sempre depois de 2000 
// milisegundos, para que se possa ter um timing certo da requisição, preparação e o resto. 
setTimeout(()=> {
    mostraPoke(pokemonList, 1);
}, 2000)


// essa função será responsavel por receber a foto, de frente e costas, e o tipo do pokemon, e exibir na tela cada uma dessas caracteristicas
function trocar(front, back, type){
    let colorBack = types.find(item => item.type == type? true:false) // vai procurar no array types, e vai retornar o item correspondente
    let frontImg = document.querySelector(".front");
    let backImg = document.querySelector(".back");

    frontImg.style.backgroundImage = colorBack.backgroundColors;// e vou setar a color do type dentro da front img e da back img, ali em baixo.
    
    
    frontImg.src = front;
    if(back != null){
        backImg.removeAttribute("style")
        backImg.src = back;
        backImg.style.backgroundImage = colorBack.backgroundColors;
    }else{
        backImg.style.opacity = "0";
    }
    
}
