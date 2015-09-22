var vm = require('vm');
var context = new vm.createContext({});

// declaro o variavel counter no contexto
vm.runInContext('var counter = 0;', context);
// declaro a função inc no contexto
vm.runInContext('function inc () { counter++; };', context);

// mostra o que foi avaliado no contexto
console.log('context:', context.inc);
console.log('inc:', context.inc);
console.log('counter:', context.counter);

// executo a função inc do contexto 5 vezes
vm.runInContext('inc()', context);
vm.runInContext('inc()', context);
vm.runInContext('inc()', context);
vm.runInContext('inc()', context);
vm.runInContext('inc()', context);

// mostro o valor atualizado do counter
console.log('counter:', context.counter);
