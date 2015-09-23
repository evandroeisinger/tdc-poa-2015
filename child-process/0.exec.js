var cp = require('child_process');

// exibe o PID do processo.
console.log(process.pid);

// executa cat big.txt
cp.exec('cat big.txt', function(error, stdout, stderr){
  console.log(error);
});

// pstree -p PID
