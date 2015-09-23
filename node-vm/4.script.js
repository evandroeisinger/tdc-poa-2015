var vm = require('vm');
var context = new vm.createContext({});

// crio um script de execução da função de incremento
var incScript = new vm.Script('inc();');

// variavel counter no contexto
vm.runInContext('var counter = 0;', context);
// função inc no contexto
vm.runInContext('function inc () { counter++; };', context);

console.log('contexto:', context.inc);
console.log('contador:', context.counter);

// execução do script no contexto
for (var i = 0; i < 5; i++) incScript.runInContext(context);

console.log('contador:', context.counter);
