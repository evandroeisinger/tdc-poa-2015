var cp = require('child_process');

// Fork NAO é similar ao fork do Unix.
var parent = cp.fork('child.js');

// registra um callback para receber mensagens do filho.
parent.on('message', function (msg) {
  console.log(msg);
});

parent.send('ping');
