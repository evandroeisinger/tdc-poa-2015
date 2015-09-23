## Problema

function Player () {
  var fs = require('fs');

  this.move = function () {

    while (true) {
      console.log('pid: ', process.pid);
      console.log('filename: ', __filename);
      console.log('list: ', fs.readdirSync(__dirname), '\n');
    }

    return 0;
  }
}

## Node VM
O que é?
JavaScript code can be compiled and run immediately or compiled, saved, and run later.

## vm.runInThisContext(code)

vm.runInThisContext() compiles code, runs it and returns the result. Running code does not have access to local scope, but does have access to the current global object.

tem acesso ao contexto global: global object: global, process, console...

vm.runInThisContext does not have access to the local scope, so localVar is unchanged. eval does have access to the local scope, so localVar is changed.

## vm.createContext(context)

If given a sandbox object, will "contextify" that sandbox so that it can be used in calls to vm.runInContext or script.runInContext. Inside scripts run as such, sandbox will be the global object, retaining all its existing properties but also having the built-in objects and functions any standard global object has. Outside of scripts run by the vm module, sandbox will be unchanged.

If not given a sandbox object, returns a new, empty contextified sandbox object you can use.

## vm.isContext(context)

Verifica se o contexto criado é o contexto atual da vm

## vm.runInContext(code, context) / vm.runInNewContext(code)

vm.runInContext compiles code, then runs it in contextifiedSandbox and returns the result. Running code does not have access to local scope. The contextifiedSandbox object must have been previously contextified via vm.createContext; it will be used as the global object for code.

## vm.Script(code)
A class for holding precompiled scripts, and running them in specific sandboxes.
Creating a new Script compiles code but does not run it. Instead, the created vm.Script object represents this compiled code. This script can be run later many times using methods below. The returned script is not bound to any global object. It is bound before each run, just for that run.
