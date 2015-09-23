var cp = require('child_process');

var parent = cp.fork('child.js');

parent.on('message', function (msg) {
  console.log(msg);
});

parent.send('ping');
