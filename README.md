<h1>Projeto pokeDex</h1>

<a href="https://jose-rennyer.github.io/pokeDex/">projeto para acesso</a>
<ul>
  <h3>Tecnologia usadas nesse projeto</h3>
  <li>Html</li>
  <li>Css</li>
  <li>JavaScript</li>
</ul>

<div align="center">
  <img width="800px" src="https://user-images.githubusercontent.com/93714892/172194106-83708b82-e27a-432e-875e-c6ceb4debd40.png" alt="pokeDex projeto" />
</div>

<h2>Informações de uso</h2>

<h3>Lista de pokemons e cliques</h3>
<div>
  <img width="200px" src="https://user-images.githubusercontent.com/93714892/172194629-d84419a9-f32b-46f9-98c5-a7608dc7f564.png" alt="lista-pokemons"/>
</div>
<br>
<p>Para esta parte do projeto foram adicionado analises, validações, inclusive switches, para saber o que fazer quando for clicado, ao clicar em qualquer nome da lista
a tela ao lado irá mudar consequentemente mostrando o pokemon escolhido.<br>
Existem mais de mais de 800 Pokes nesta lista, aproveitem :)</p>

<div>
  <img width="200px" src="https://user-images.githubusercontent.com/93714892/172195435-f9a7b0b4-2e68-4335-aed9-ba5e8661d386.png" alt="input-poke"/>
</div>

<p>Com esse input você pode navegar e procurar ou pelo id do pokemon ou pelo nome, a partir de verificações de evento, é usado um RegExp de acordo com o valor do input
e verificado se algum poke testado, vai retornar true.</p>

<h3>Área de pokemons</h3>
<div>
  <img width="400px" src="https://user-images.githubusercontent.com/93714892/172195820-2d1f46b7-c8a0-431d-846d-d78462ebff9e.png" alt="poke-area"/>
</div>

<p>Essa será a área onde será mostrado cada pokemon de acordo com a sua escolha na lista, e não fica somente nisso, por trás do clique são ocorrido varias validações 
como tipo do pokemon, como colocar e onde colocar, e em qual parte colocar<br>
<br>
Cada tipo de pokemon tem o seu background-definido de acordo com o seu tipo primario.</p>

<h3>Área de tipos</h3>

<div>
  <img src="https://user-images.githubusercontent.com/93714892/172196393-ffe811ea-0b86-4759-8058-9def63c07656.png" width="300px" />
</div>

<p>A definição dessa área se dá de acordo com o objeto requisitado, uma verificação é feita dentro do pokemon clicado a partir da ordem dele, e com isso, é verificado
se o pokemon clicado tem 1 ou 2 tipos, e de acordo com o valor, ele faz algo diferente para cada um dos dois.
<br>
 Cada uma dessas imagens dos tipos, recortada por mim através do figma, não está cortado totalmente certo todas, mas esse foi um desafio bem grandinho para mim kkkk
</p>

<p>A partir dos pokemons que eu puxei a partir da requisição, cada um objeto retornado possui até no máximo 2 tipos, e por conta disso, eu faço a verificação
com o switch, para ver se é 1 ou 2 tipos</p>


<h3>Totalmente responsivo</h3>

<h4>Mobile</h4>
<div>
  <img src="https://user-images.githubusercontent.com/93714892/172198308-c1ffa004-0c6f-4bb0-8282-6840709c25be.png" alt=""/>
</div>

<h4>Tablet</h4>
<div>
  <img src="https://user-images.githubusercontent.com/93714892/172198463-2ac7bebd-3e68-41c5-9269-5b518da7d742.png" alt=""/>
</div>

