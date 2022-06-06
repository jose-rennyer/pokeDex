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
    adicionaTipo(pokemonExibido.types)
    pokeName.textContent = pokemonExibido.name;
    // função que vai receber do pokemon o nome, sprite de frente e de costas, e também o tipo dele.
}

// essa função vai ser usada para mostrar pelomenos o pokemon inicial, para que a tela não fique branca// tudo isso sempre depois de 2000 
// milisegundos, para que se possa ter um timing certo da requisição, preparação e o resto. 
setTimeout(()=> {
    mostraPoke(pokemonList, 1);
}, 3000)


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

// essa função recebe o array de tipos do pokemon requisitado, e faz um switch case, de acordo com o número de tipos dentro do pokemon
function adicionaTipo(array){
    let tipoOneImg = document.querySelectorAll(".tipo-img")
    let tipoOneText = document.querySelectorAll(".tipo-info")

    let tiposEncontrados = [];
    let imgTipos = []
    array.forEach((item)=>{
        tiposEncontrados.push(item.type.name);
    })

    tiposEncontrados.forEach((item)=>{
        imgTipos.push(types.find(tipoArray => tipoArray.type == item? true: false))
    })

    switch(tiposEncontrados.length){
        case 1:
            tipoOneImg[0].src = imgTipos[0].img;
            tipoOneText[0].textContent = imgTipos[0].type
            tipoOneImg[1].src = ""
            tipoOneText[1].textContent = ""
        break;
        case 2:
            tipoOneImg[0].src = imgTipos[0].img;
            tipoOneText[0].textContent = imgTipos[0].type
            tipoOneImg[1].src = imgTipos[1].img;
            tipoOneText[1].textContent = imgTipos[1].type
        break;
    }

}
