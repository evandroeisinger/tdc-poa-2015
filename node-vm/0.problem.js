// codigo do jogador
function Player () {
  var fs = require('fs');

  this.move = function () {
    while (true) {
      console.log(process.pid);
      console.log(__filename);
      console.log(fs.readdirSync(__dirname));
    }

    return 0;
  }
}

// instancia do jogador
var player = new Player();

// execução da primeira jogada
console.log('jogou na coluna: ', player.move())
