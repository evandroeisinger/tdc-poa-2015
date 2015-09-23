var vm = require('vm');
var counter = 0;

console.log('antes da vm e do eval');
console.log('contador: ', counter);

// defino o valor do counter através da vm
vm.runInThisContext('counter = 999; while(true) {console.log(123)}', {
  timeout: 1,
});

console.log('depois da vm');
console.log('contador: ', counter);

// defino o valor do counter através do eval
eval('counter = 666');

console.log('depois do eval');
console.log('contador: ', counter);
