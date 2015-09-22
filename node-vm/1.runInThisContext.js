var vm = require('vm');
var counter = 0;

console.log('antes da vm e do eval');
console.log('counter: ', counter, '\n');

// defino o valor do counter através da vm
vm.runInThisContext('counter =\'vm\'');

console.log('depois da vm');
console.log('counter: ', counter, '\n');

// defino o valor do counter através do eval
eval('counter = \'eval\'');

console.log('depois do eval');
console.log('counter: ', counter);
