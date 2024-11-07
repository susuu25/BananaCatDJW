## Proposta
<p>O jogo Banana Cat foi criado com inspiração direta no minigame do dinossauro disponibilizado pelo Google quando o navegador está sem conexão com a internet.</p>

## Personagens
<h3> Banana Cat </h3>
<image> <img src="https://raw.githubusercontent.com/susuu25/BananaCatDJW/refs/heads/main/imagens/gato%20amarelo.png"> </image>
<h3>Green Banana Cat </h3>
<image> <img src="https://raw.githubusercontent.com/susuu25/BananaCatDJW/refs/heads/main/imagens/gato%20verde.png"> </image>
<h3>White Banana Cat</h3>
<image> <img src="https://raw.githubusercontent.com/susuu25/BananaCatDJW/refs/heads/main/imagens/gato%20branco.png"> </image>
<p>Banana Car é o personagem principal no jogo, o protagonista, um gato vestido de banana, que precisa desviar de poças d'água e cachorros vestidos de pepinos</p>
<p>Ele tem 3 variações de cor, sendo elas a amarela(principal) a verde e a branca</p>

##CÓDIGOS

###Classes.js
<p>A classe obj é a primeira  classe do jogo que manipula o timer e os objetos. Esta classe é estruturada em condicional.<p>
<p>A segunda classe é a BG, filha da classe obj, e é responsável por manipular a parte do fundo da tela, possibilitando a sua movimentação.</p>
<p>A terceira classe é a BANANACAT, filha da classe obj, e manipula o personagem principal do jogo, o Banana Cat.</p>
<p>A quarta classe é a classe OBSTACLES, filha da classe obj, e manipula os elementos de obstáculo do jogo: as poças d'água e o cachorro corgi.</p>
<p>A quinta e última classe é SCORE, que formata os pontos.</p>

###DISCLAIMER

<p>O arquivo bananaCat1.js não será documentado por ser apenas uma referência usada para a programação do segundo arquivo (bananaCat2.js), ou seja, é nada mais que um exemplo dado pelo professor André Maurício Cunha.</p>

###bananaCat2.js
<p>O código começa com os elementos das classes sendo instanciadops como variáveis. A classe BG recebe a imagem do fundo. A classe BANANACAT recebe a imagem do gato. A classe OBSTACLES recebe a imagem da poça d'água. A classe SCORE recebe o placar. Depois, são criadas as funções: draw, jump, update, collision e main. A function draw desenha as imagens. A function update faz a animação do fundo da tela, a do Banana Cat e a animação das poças. Também é responsável por gerar as poças e chamar as funções jump e collision. A function jump programa os pulos que o gato tem que dar para não colidir com as poças. A function collision programa o que acontece quando o gato colide com algum dos obstáculos, resultando na perca do jogo. Por fim, a function main  limpa o espaço da tela quando esta é reiniciada, faz a animação e chama as functions draw e update.</p> 

 

## Efeitos sonoros
