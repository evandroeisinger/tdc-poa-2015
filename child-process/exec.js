var cp = require('child_process');

console.log(process.pid);

cp.exec('cat big.txt', function(error, stdout, stderr){
  console.log(error);
});


// pstree -p PID
