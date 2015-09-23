var vm = require('vm');
var context = new vm.createContext({});

// declaro o variavel counter no contexto
vm.runInContext('var counter = 0;', context);
// declaro a função inc no contexto
vm.runInContext('function inc () { counter++; };', context);

// o que foi avaliado no contexto
console.log('contexto:', context);

// valor inicial do counter
console.log('contador:', context.counter);

// executo a função inc do contexto 5 vezes
vm.runInContext('inc();', context);
vm.runInContext('inc();', context);
vm.runInContext('inc();', context);
vm.runInContext('inc();', context);
vm.runInContext('inc();', context);

// valor atualizado do counter
console.log('contador:', context.counter);
