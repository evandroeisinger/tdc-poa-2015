var vm = require('vm');
var wrongContext = {
  counter: 0,
};

// crio um novo contexto para vm
var correctContext = new vm.createContext({
  counter: 0,
});

// mostro o valor de cada contexto
console.log('correctContext:', correctContext);
console.log('wrongContext:', wrongContext);

// valido qual contexto é da vm
console.log('correctContext é o contexto desta vm?', vm.isContext(correctContext));
console.log('wrongContext é o contexto desta vm?', vm.isContext(wrongContext));
