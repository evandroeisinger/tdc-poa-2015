var vm = require('vm');
var context = new vm.createContext({});

// codigo do jogador
var source = [
  'function Player () {',
  '   this.move = function () {',
  '     return 0;',
  '   };',
  '}',
].join('');

// script para instanciar o jogador
var createPlayer = new vm.Script('player = new Player();');
// script para execução das jogadas
var getMove = new vm.Script('move = player.move();');

// declaro o algoritimo do jogador no contexto
vm.runInContext(source, context, { timeout: 500 });

// instancia do jogador no contexto
createPlayer.runInContext(context);

// execução da primeira jogada
console.log('jogou na coluna: ', getMove.runInContext(context));

