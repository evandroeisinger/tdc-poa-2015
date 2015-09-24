var cp = require('child_process');

console.log(process.pid);

var command = cp.spawn('cat', ['big.txt']);

// registra um callback para receber os dados de leitura do arquivo.
command.stdout.on('data', function (data) {
  console.log(data.toString());  //tostr
});


// pstree -p PID
