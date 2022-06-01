// requisição área depois eu vejo um nome melhor.
let pokemonList = [];

function puxe300Pokes(){
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
    setTimeout(function(){
        console.log(pokemonList);
    }, 3000) 
}
let contador = 0;
puxe300Pokes();
document.addEventListener("keydown", function(){
    let pokemonDaVez = pokemonList.findIndex((item) => item.order == contador? true:false);
    if(pokemonDaVez > 0){
        console.log(pokemonDaVez)
        document.querySelector(".front").src = pokemonList[pokemonDaVez].sprites.front_default;
        document.querySelector(".back").src = pokemonList[pokemonDaVez].sprites.back_default;
        document.querySelector(".poke-name").textContent = `#${pokemonList[pokemonDaVez].id} ${pokemonList[pokemonDaVez].name}`
    }
    
    contador++
})


