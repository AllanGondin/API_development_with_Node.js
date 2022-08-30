const { obterPessoas } = require('./service');


Array.prototype.meuFilter = function (callback) {
    const meuArray = []
    for(index in this) {
        const resultado = callback(this[index], index, this);

        if(!resultado) continue;
        meuArray.push(this[index])
    }
    return meuArray;
}
async function main() {
    try {
        const { results } = await obterPessoas('a');

        const familiaLars = results.meuFilter((item, index, list) => {
            console.log(`index: ${index}| Lista ${list.length} `)
            return item.name.toLowerCase().indexOf('lars') !== -1})

        const name = familiaLars.map(pessoa => pessoa.name);

        console.log(`names`, name)
    } catch (error) {
        console.log(`Deu MERDAA`, error)
    }
}

main()