
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
function criaNaLista(itemName, itemNumber, itemOrder){
    let itemCriado = document.createElement("div")
    itemCriado.classList.add("list-example")
    itemCriado.setAttribute("data-order", itemOrder);
    itemCriado.textContent = `#${itemNumber} ${itemName}`;

    return itemCriado
}

setTimeout(function(){
    let orders = formataLista(pokemonList);

    let ordenar = ordenaLista(orders);


    for(let i = 0; i < ordenar.length; i++){
        let pokemonDaVez = pokemonList.find((item) => item.order == ordenar[i])

        listaDePokes.appendChild(criaNaLista(pokemonDaVez.name, pokemonDaVez.id, pokemonDaVez.order))
    }
    document.querySelector(".one").remove();
    document.querySelector(".front").removeAttribute("style");
    document.querySelector(".back").removeAttribute("style");
},2000)
