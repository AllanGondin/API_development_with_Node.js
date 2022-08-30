const { deepStrictEqual, ok } = require("assert");

const DEFAULT_ITEM_CADASTRADO = { nome: "Flash", poder: "Speed", id: 1 };

const database = require('./database')
describe("Suite de manupulação de Heróis", () => {
it('Deve pesquisar um heroi usando arquivos', async ()=>{
    const expected = DEFAULT_ITEM_CADASTRADO
    const [resultado] = await database.listar(expected.id)
    deepStrictEqual(resultado, expected);
})

//   it("Deve cadastrar um heró usando arquivos ", async () => {
//     const expected = DEFAULT_ITEM_CADASTRADO;
//     ok(null, expected);
//   });
});
