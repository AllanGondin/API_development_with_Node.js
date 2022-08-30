// class abstrata event emitter
const EventEmitter = require('events');
class MeuEmissor extends EventEmitter{

}
const meuEmissor = new MeuEmissor();
const nomeDoEvento = 'usuario:click';
meuEmissor.on(nomeDoEvento, function(resultado){
    console.log('Um Usuário clickou', resultado);
})

/*meuEmissor.emit(nomeDoEvento, 'na barra de rolagem');
meuEmissor.emit(nomeDoEvento, 'no botão de ok');

let count = 0;

setInterval(() => {
    meuEmissor.emit(nomeDoEvento, 'no ok' + (count++));
}, 1000);*/

const stdin = process.openStdin();
stdin.addListener('data', function (value){
    console.log(`Você digitou: ${value.toString().trim()}`);
})