let types = [
    {type:"fire", backgroundColors:"linear-gradient(orange, #f00)"},
    {type:"water", backgroundColors:"linear-gradient(lightblue, #00f)"},
    {type:"grass", backgroundColors:"linear-gradient(lightgreen, #0f0)"},
    {type:"ghost", backgroundColors:"linear-gradient(purple, gray)"},
    {type:"dark", backgroundColors:"linear-gradient(black, gray)"},
    {type:"bug", backgroundColors:"linear-gradient(green, brown)"},
    {type:"poison", backgroundColors:"linear-gradient(purple, violet)"},
    {type:"psychic", backgroundColors:"linear-gradient(#ed0f64, #fcb6d0)"},
    {type:"normal", backgroundColors:"linear-gradient(#aca974, #eaeade)"},
    {type:"flying", backgroundColors:"linear-gradient(#5eb9b4, #dce5ea)"},
    {type:"electric", backgroundColors:"linear-gradient(#fffa25, #f7ff85)"},
    {type:"ground", backgroundColors:"linear-gradient(brown, #bfac22)"},
    {type:"fighting", backgroundColors:"linear-gradient(#e8121a, #d45f65)"},
    {type:"rock", backgroundColors:"linear-gradient(#474026, #474026)"},
    {type:"dragon", backgroundColors:"linear-gradient(#29036a, #d7b0ff)"},
    {type:"steel", backgroundColors:"linear-gradient(#454545, #7b8e8a)"},
    {type:"fairy", backgroundColors:"linear-gradient(#f87ea7, #fdd1e0)"},
    {type:"ice", backgroundColors:"linear-gradient(#113c43, #1a94a3)"},
]
function formataLista(array){
    let orders = [];
    array.map(function(item){
        orders.push(item.order)
    })
    return orders
}


function ordenaLista(array){
    let tamanhoDoArray = array.length;
    let listaOrdenada = [];

    for(let i = 0; i < tamanhoDoArray; i++){
        let numeroMenor = Math.min(...array);
        listaOrdenada.push(numeroMenor);

        array.splice(array.indexOf(numeroMenor), 1);
    }

    return listaOrdenada
}
function criaNaLista(itemName, itemNumber, itemOrder, itemType){// adicionando o tipo type para mudar o background
    let itemCriado = document.createElement("div")
    itemCriado.classList.add("list-example")
    itemCriado.setAttribute("data-order", itemOrder);
    itemCriado.setAttribute("data-type", itemType)
    itemCriado.textContent = `#${itemNumber} ${itemName}`;

    return itemCriado
}

setTimeout(function(){
    let orders = formataLista(pokemonList);

    let ordenar = ordenaLista(orders);


    for(let i = 0; i < ordenar.length; i++){
        let poke = pokemonList.find((item) => item.order == ordenar[i])

        listaDePokes.appendChild(criaNaLista(poke.name, poke.id, poke.order, poke.types[0].type.name))
    }
    document.querySelector(".one").remove();
    document.querySelector(".front").removeAttribute("style");
    document.querySelector(".back").removeAttribute("style");
},2000)
