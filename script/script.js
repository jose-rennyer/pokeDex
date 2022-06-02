// requisição área depois eu vejo um nome melhor.

document.querySelector(".front").style.opacity = 0;
document.querySelector(".back").style.opacity = 0;
let pokemonList = [];
let listaDePokes = document.querySelector(".list-of-pokes");
function pegarPokes(){
    pokemonList = [];
    for(let i = 1; i <= 898; i++){
        let url = new XMLHttpRequest();
        url.open("GET", `https://pokeapi.co/api/v2/pokemon-form/${i}/`)
        url.send();
        url.onload = function(){
            let JsonPoke = JSON.parse(url.responseText);
            pokemonList.push(JsonPoke)
        }
    }
}

pegarPokes();





















/*document.addEventListener("keydown", function(){
    let pokemonDaVez = pokemonList.findIndex((item) => item.order == contador? true:false);
    if(pokemonDaVez > 0){
        console.log(pokemonDaVez)
        document.querySelector(".front").src = pokemonList[pokemonDaVez].sprites.front_default;
        document.querySelector(".back").src = pokemonList[pokemonDaVez].sprites.back_default;
        document.querySelector(".poke-name").textContent = `#${pokemonList[pokemonDaVez].id} ${pokemonList[pokemonDaVez].name}`
    }
    
    contador++
})*/


