// codigo do jogador
function Player () {
  this.move = function () {
    return 0;
  };
}

// instancia do jogador
var player = new Player();

// execução da primeira jogada
console.log('jogou na coluna: ', player.move())
