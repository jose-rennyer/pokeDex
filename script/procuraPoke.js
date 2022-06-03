const inputPoke = document.querySelector(".input-poke");

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