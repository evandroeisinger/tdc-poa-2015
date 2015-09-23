## Child Process

Se sua aplicação precisa executar um comando no sistema operacional e tratar um resultado,
podemos utilizar o ChildProcess do node. Ele é capaz de usar processos filhos.

## stdin, stdout and stderr

Standard input stream (stdin).
Standard output stream (output).
Standard error stream (stderr).
Pipe.
    $ cat log.txt | grep test

## Spawn, parent process and pid.

O termo spawn se refere ao ato de um processo carregar e executar um processo filho.
O processo que criou esse processo filho é chamado de Parent process. PID (process id)
é um número que o sistema operacional atribui a esses processos.

## ChildProcess.exec()

O método exec() permite executar um processo e armazenar o retorno do processo em uma variável.
Essa variável é um buffer (por padrão no máximo 200kb).

## ChildProcess.spawn()

O método spawn carrega e executa um processo filho, porém retorna o resultado através de um stream.
A cada vez que o buffer atinge seu limite, ele chama o callback registrado pela aplicação.

## ChildProcess.fork()

Do mesmo modo que o spawn, o fork carrega um processo filho e executa ele, porém do nodejs.
O processo pai pode enviar e receber mensagens (utilizando a classe EventEmitter) de maneira simples, via pipe.
Segundo a documentação, esse novo processo cria uma nova instancia da V8, o que consome no mínimo 10MB de memória e 30ms de execução.
