const { deepStrictEqual, ok } = require("assert");
const { off } = require("process");

const DEFAULT_ITEM_CADASTRADO = { nome: "Flash", poder: "Speed", id: 1 };

const database = require('./database')

describe("Suite de manupulação de Heróis", () => {
  before(async ()=>{
    await database.cadastrar(DEFAULT_ITEM_CADASTRADO)
  })
it('Deve pesquisar um heroi usando arquivos', async ()=>{
    const expected = DEFAULT_ITEM_CADASTRADO
    const [resultado] = await database.listar(expected.id)
    deepStrictEqual(resultado, expected);
})

  it("Deve cadastrar um herói usando arquivos ", async () => {
    const expected = DEFAULT_ITEM_CADASTRADO;
    const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRADO)
    const [actual] = await database.listar(DEFAULT_ITEM_CADASTRADO.id)
    deepStrictEqual(actual, expected);
  });

  it("Deve remover um heróis por ID", async () =>{
    const expected = true;
    const resultado = await database.remover(DEFAULT_ITEM_CADASTRADO.id)
    deepStrictEqual(expected,resultado)
  });
});
