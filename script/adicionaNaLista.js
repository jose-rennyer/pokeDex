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
let listaDePokes = document.querySelector(".list-of-pokes");


// formata lista vai ser responsavel, por pegar apenas order, e cada pokemon, e me devolver um array de números da ordem dos pokes 
function formataLista(array){
    let orders = [];
    array.map(function(item){
        orders.push(item.order)
    })
    return orders
}

// essa função recebe o array, e vai ordenar de acordo com os números recebidos no array de números, vai ordenar do menor para o maior
function ordenaLista(array){
    let tamanhoDoArray = array.length;
    let listaOrdenada = [];

    for(let i = 0; i < tamanhoDoArray; i++){
        // nessa solução usei o operador spread, logo depois de ver na documentação, ele resolveu o meu problema então eu usei ele
        let numeroMenor = Math.min(...array);
        listaOrdenada.push(numeroMenor);

        array.splice(array.indexOf(numeroMenor), 1);
        // sempre que receber o minimo, e mandar para o array, eu vou excluir esse minimo, para que ele não possa se repetir.
    }

    return listaOrdenada
}

// essa função cria uma div, para fazer parte da lista, dá o nome, classe, tipo, e ordem.
function criaItemDaLista(itemName, itemNumber, itemOrder){
    let itemCriado = document.createElement("div")
    itemCriado.classList.add("list-example")
    itemCriado.setAttribute("data-order", itemOrder);
    itemCriado.textContent = `#${itemNumber} ${itemName}`;

    return itemCriado
}

// logo após a requisição ser feita, iniciarei essa criação da lista, pegando cada pokemon, e adicionando na lista.
setTimeout(function(){
    let orders = formataLista(pokemonList);

    let ordenar = ordenaLista(orders);


    for(let i = 0; i < ordenar.length; i++){
        let poke = pokemonList.find((item) => item.order == ordenar[i])

        listaDePokes.appendChild(criaItemDaLista(poke.name, poke.id, poke.order))
    }
    //esse one só serve para exibir a mensagem de "carregando..."
    document.querySelector(".one").remove();
    document.querySelector(".front").removeAttribute("style");
    document.querySelector(".back").removeAttribute("style");
},2000)
