const {readFile} = require('fs');
const {promisify} = require('util');

const readFileAsync = promisify(readFile);

class Database {
    constructor() {
        this.NOME_ARQUIVO = 'dataset_mercado.xlsx'
    }

    async obterProdutos(){
        const arquivo = await readFileAsync(this.NOME_ARQUIVO,'utf8');
        return JSON.parse(arquivo.toString());
    }

    async listar(id){
        const dados = await this.obterProdutos()

        const dadosFiltrados = dados.filter(item => (id ? (item.id === id) : true))
        return dadosFiltrados;
    }
}

module.exports = new Database()