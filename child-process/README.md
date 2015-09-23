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
O processo que criou esse proceso filho é chamado de Parent process. PID (process id)
é um número que o sistema operacional atribui a esses processos.

## ChildProcess.exec()

O método exec() permite executar um processo e armazenar o retorno do processo em uma variavél.
Essa variavél é um buffer (por padrão no máximo 200kb).

## ChildProcess.spawn()

O método spawn executa um processo filho, porém retorna o resultado





Overview

Limitacoes

Sync

Paralelismo



Comparar child proc (nova instancia do v8 e 30MB)
