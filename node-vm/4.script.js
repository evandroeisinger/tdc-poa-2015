var vm = require('vm');
var context = new vm.createContext({});

// crio um script de execução da função de incremento
var inc_script = new vm.Script('inc();');

// declaro o variavel counter no contexto
vm.runInContext('var counter = 0;', context);
// declaro a função inc no contexto
vm.runInContext('function inc () { counter++; };', context);

// mostro o que foi avaliado no contexto
console.log('inc:', context.inc);
console.log('counter:', context.counter);

for (var i = 0; i < 5; i++) inc_script.runInContext(context);

console.log('counter:', context.counter);
