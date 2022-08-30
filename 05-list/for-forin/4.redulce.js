const { obterPessoas } = require('./service');

Array.prototype.meuReduce = function (callback, valorInicial) {
    let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]

    for (let i = 0; i<= this.length; i++) {
        const a = this[i]
        valorFinal = callback(valorFinal, a, this);
    }
    return valorFinal
}
async function main() {
    try {
        const { results } = await obterPessoas('a');

        const pesos = results.map(item => parseInt(item.height));
        console.log(`pesos: `, pesos)
        // const total = pesos.meuReduce((anterior, proximo) => {
        //     return anterior + proximo;
        // }, [])

        const minhaLista = [
            ['Allan', 'Gondin'],
            ['allaaaaaa','aaaasdasd']
        ]

        const total = minhaLista.meuReduce((anterior,proximo)=>{
            return anterior.concat(proximo)              
        },[]).join(', ')

        console.log(`total:`, total)

    } catch (error) {
        console.error(`error`, error);
    }
}


main()