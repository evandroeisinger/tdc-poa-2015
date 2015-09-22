var vm = require('vm');
var wrong_context = {
  counter: 0,
};

// crio um novo contexto para vm
var correct_context = new vm.createContext({
  counter: 0,
});

// mostro o valor de cada contexto
console.log('correct_context é o contexto desta vm?', correct_context);
console.log('correct_context é o contexto desta vm?', wrong_context);

// valido qual contexto é da vm
console.log('correct_context é o contexto desta vm?', vm.isContext(correct_context));
console.log('wrong_context é o contexto desta vm?', vm.isContext(wrong_context));
