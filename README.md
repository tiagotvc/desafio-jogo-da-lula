# Jogo da Lula

Esse desafio é uma simulação do Jogo da Lula - um desafio competitivo pela sobrevivência, onde os sobreviventes dividem uma grande quantia em dinheiro

## Regras

O jogo começa com 69 jogadores, cada jogador possui um prêmio de $420,000. sempre que um jogador e eliminado do jogo, seu prêmio é somado aos fundos do prêmio.

O jogo é jogado em rodadas, e todos os jogadores devem participar. Toda rodada, cada jogador tem 42% de chances de ser eliminado.

No final de cada rodada, os jogadores restantes vão votar se o jogo deve ser encerrado, o jogo é encerrado se mais de 50% dos participantes optem pelo encerramento ou se nao sobram jogadores restante. Quando o jogo é encerrado, o total dos fundos do prêmio é distribuido igualmente entre os jogadores restantes.

Durante a votação, cada jogador tem uma probabilidade percentual calculada de votar Sim ou Não. A chance de um jogador optar pelo fim do jogo e de 30%

## Desafio

Crie uma ferramenta visual para simular o Jogo da Lula.

### Inicialização

Para iniciar o jogo, o App deverá, a partir da pagina Home, disponilizar um botao "Iniciar" que redirecionara para pagina do Jogo. Inicialize o jogo com 69 jogadores randomicos.

### Jogo

Crie um botão para iniciar cada round do jogo. O App deve exibir a lista de jogadores remanescentes, o fundo do prêmio atual, a lista de jogadores eliminados, o número de rodadas jogadas e o numero de votos pelo fim do jogo da rodada anterior (deve exibir 0 caso seja a primeira rodada). Essas informaçoes sobre o jogo devem estar visivel durante todo o tempo.

Ao final de cada round do jogo, o App deve exibir um botão para iniciar a votação. O voto individual de cada participante deve ser apresentando.

### Final

O App deve disponibilizar um botão que redireciona para a Home Page.

## Figma

Interface: https://www.figma.com/file/BXMmS1kSSjln9psMuudPgo/Jogo-da-Lula?type=design&mode=dev

Protótipo interativo: https://www.figma.com/proto/BXMmS1kSSjln9psMuudPgo/Jogo-da-Lula?page-id=0%3A1&type=design&node-id=16-153&viewport=238%2C146%2C0.22&scaling=scale-down&starting-point-node-id=4%3A14&mode=design

### Bonus

- Tocar `red-light-sound.mp3` toda vez que uma rodada comecar.
- Tocar `main-theme.mp3` quando um novo jogo iniciar.

Você sera avaliado por:

- Quantidade de entrega do projeto
- Priorização de tarefas
- Resolução de problema
- Estruturação
- Qualidade de código
