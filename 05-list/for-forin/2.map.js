const service = require('./service');

// Array.prototype.meuMap = function(callback) {
//     const novoArrayMapeado = [];
//     for(let indice = 0; indice <= this.length-1;indice++){
//         const resultado = callback(this[indice], indice);
//         novoArrayMapeado.push(resultado);
//     }
//     return novoArrayMapeado;
// }
// Array.prototype.meuMap = function(callback) {
//     const novoArrayMapeado = [];
//     for(indice in this){
//         const resultado = callback(this[indice], indice);
//         novoArrayMapeado.push(resultado);
//     }
//     return novoArrayMapeado;
// }
Array.prototype.meuMap = function(callback) {
    const novoArrayMapeado = [];
    for(itens of this){
         const resultado = callback(itens[this], itens);
         console.log(resultado)
    }
    return novoArrayMapeado;
}

async function main() {
try {
    const result = await service.obterPessoas('a');
    // const names = [];

    // result.results.forEach(item => {
    //     names.push(item.name)
    // });

//    const names = result.results.map( pessoa =>{
//         return pessoa.name;
//     })

    // const names = result.results.map(pessoa => pessoa.name);

const names = result.results.meuMap(function (pessoa,i){return`[${i}]${pessoa.name}`});
    console.log(`names`, names)
} catch (error) {
    console.error(`erro`, error)
}
    
}

main();