## Problema

function Player () {
  var fs = require('fs');

  this.move = function () {

    while (true) {
      console.log('pid: ', process.pid);
      console.log('filename: ', __filename);
      console.log('list: ', fs.readdirSync(__dirname), '\n');
    }

    return 0;
  }
}

## Node VM
Modulo para gerenciar contextos (execution environment) no node (v8).

# Para o que serve?
Serve para compilar e executar códigos javascript em contextos isolados.

## vm.runInThisContext(code, options)
Compila, executa e retorna o resultado.
Não tem acesso ao escopo local, mas têm aos objetos globais(process, require, console...).

## vm.createContext(context)
Gera um novo contexto na maquina virtual (v8).

## vm.isContext(context)
Verifica se o contexto existe na maquina virtual (v8).

## vm.runInContext(code, context, options)
Compila, executa o código no contexto passado e retorna o resultado.

## vm.Script(code, options)
Compila, não executa o código e não vincula a nenhum contexto.

## solução

"Note that running untrusted code is a tricky business requiring great care. script.runInNewContext is quite useful, but safely running untrusted code requires a separate process."
