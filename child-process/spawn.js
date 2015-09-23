var cp = require('child_process');

console.log(process.pid);

var command = cp.spawn('cat', ['big.txt']);

command.stdout.on('data', function (data) {
  console.log(data);  //tostr
});


// pstree -p PID
