# Projeto UNP - Jogo de Dados 🎲

> Um jogo web interativo e dinâmico onde dois jogadores "rolam" dados virtuais a cada atualização da página. O vencedor é decidido aleatoriamente e o resultado é exibido em tempo real.

## 💻 Tecnologias Utilizadas

Este projeto foi desenvolvido aplicando fundamentos essenciais do Frontend:

*   **HTML:** Estruturação da página, textos e das tags de imagem.
*   **JavaScript:** Lógica de programação para sorteio numérico, manipulação de elementos da tela (DOM) e regras de vitória.

## ⚙️ Funcionalidades e Aprendizados

*   **Sorteio Aleatório:** A lógica principal utiliza a função `Math.random()` aliada ao `Math.floor()` para simular resultados exatos de um dado de 6 faces (valores de 1 a 6) para cada jogador.
*   **Manipulação do DOM (Document Object Model):** O script seleciona as tags `<img>` no HTML e altera dinamicamente o atributo `src` para exibir a imagem da face do dado correspondente ao número sorteado (`foto1.png` a `foto6.png`).
*   **Lógica Condicional:** Estruturas de controle `if/else` são usadas para comparar os números sorteados e atualizar instantaneamente o texto da tag `<h1>`, anunciando "jogador 1 venceu!", "jogador 2 venceu!" ou declarando um empate.

## 🛠️ Como executar o projeto localmente

Para rodar este jogo no seu computador, é muito simples, pois não requer instalação de servidores ou dependências pesadas:

1. Certifique-se de que todos os arquivos estejam salvos na mesma pasta do seu computador:
   * O arquivo principal `index.html`.
   * O arquivo de script `au.js`.
   * As imagens das faces dos dados, nomeadas exatamente como: `foto1.png`, `foto2.png`, `foto3.png`, `foto4.png`, `foto5.png` e `foto6.png`.
2. Dê um duplo clique no arquivo `index.html` para abri-lo no seu navegador web (Chrome, Edge, Firefox, etc.).
3. **Para jogar:** Basta atualizar (recarregar) a página no navegador. Os dados serão rolados novamente e um novo resultado aparecerá!
