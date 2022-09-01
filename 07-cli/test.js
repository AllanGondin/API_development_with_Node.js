const { deepStrictEqual, ok } = require("assert");
const { off } = require("process");

const DEFAULT_ITEM_CADASTRADO = { nome: "Flash", poder: "Speed", id: 1 };
const DEFAULT_ITEM_ATUALIZAR = {nome: "Lanterna Verde", poder: "anel do poder", id: 2 };
const database = require('./database')

describe("Suite de manupulação de Heróis", () => {
  before(async ()=>{
    await database.cadastrar(DEFAULT_ITEM_CADASTRADO)
    await database.cadastrar(DEFAULT_ITEM_ATUALIZAR)
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

  it("Deve atualizar o Heroi pelo ID", async() =>{
    const expeted = {
      ...DEFAULT_ITEM_ATUALIZAR,
      nome: "Batman",
      poder: "Dinheiro"
    }

    const novoDado = {
      nome: "Batman",
      poder: "Dinheiro"
    }

    await database.atualizar(DEFAULT_ITEM_ATUALIZAR.id, novoDado )
    const [resultado] = await database.listar(DEFAULT_ITEM_ATUALIZAR.id)
    deepStrictEqual(resultado, expeted)
  })
});
