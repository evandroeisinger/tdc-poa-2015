process.on('message', function (msg) {
  console.log('Mensagem do processo pai: ', msg)
  process.send('pong');
});
