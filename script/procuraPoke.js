const inputPoke = document.querySelector(".input-poke");

// função de procura, evento de input no input, e utilizando regex para analisar o que está sendo escrito, e usando o padrão case insensitive.
// a cada palavra, é criado um novo regExp, com o valor do input, e será testado no forEach, verificando se a palavra do input em modo
//insensitive, está contida em algum dos itens da lista, se tiver, não faz nada, caso não tenha, eu adiciono a classe invisivel.
inputPoke.addEventListener("input", function(){
    let verificacao = new RegExp(inputPoke.value, "i");
    let pokesDaLista = document.querySelectorAll(".list-example");

    pokesDaLista.forEach((pokeDaVez)=>{
        if(verificacao.test(pokeDaVez.textContent)){
            pokeDaVez.classList.remove("invisivel")
        }else{
            pokeDaVez.classList.add("invisivel")
        }
    })
})