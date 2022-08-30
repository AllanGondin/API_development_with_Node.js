/*
obter um usuário
1 Obter o numero de telefone de um usuário apartir de um ID
2 Obter o endereço do usuáiro pelo Id
*/
//importando biblioteca interna do node que transforma callback em promises

const { getMaxListeners } = require('process');
const util = require('util');

const obterEndereçoAsync = util.promisify(obterEndereço);

function obterUsuario() {
    //quando der merda chama reject
    //quando der bom chama o resolve
    return new Promise(function resolvePromise (resolve, reject){
      //  return reject(new Error('Deu merda meeeeesmo'))
        setTimeout(() => {
            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
    
        }, 1000);
    })
}

function obterTelefone(idUsuario) { //por padrão o callback é o ultimo a ser declarado
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(() => {
            return resolve ({
                telefone:'95587521',
                ddd: '11'
            })
        }, 2000);

    })
}

function obterEndereço(idUsuário, callback) {
    setTimeout(() => {
        return callback(null,{
            rua: 'DOS BOBOS',
            numero: 0
        })
    }, 1000);
}

main()
async function main(){
    try{
        console.time('promise-time')
        const usuario = await obterUsuario();
       // const telefone = await obterTelefone(usuario.id);
       // const endereco = await obterEndereçoAsync(usuario.id);
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEndereçoAsync(usuario.id)
        ])
        const telefone = resultado[0]
        const endereco = resultado[1]

        console.log(`
            Nome: ${usuario.nome},
            Telefone: (${telefone.ddd}) ${telefone.telefone},
            Enderedo: ${endereco.rua}, ${endereco.numero}
        `)
        console.timeEnd('promise-time')
    }catch(error){
        console.error('deu merda', error)
    }
}

/*
const usuarioPrimise = obterUsuario()
//Para manipular o sucesso usamos a função .then
// para manipular erro chamamos o .catch 

usuarioPrimise
    .then(function(usuario){
        return obterTelefone(usuario.id)
        .then(function resolverTelefone(result){
            return {
                usuario: {
                    nome: usuario.nome,
                    id: usuario.id
                },
                telefone: result
            }
        })
    })
    .then(function (resultadoAnterior){
        const endereco = obterEndereçoAsync(resultadoAnterior.usuario.id);
        return endereco.then(function resolverEndereco(result){
            return {
                usuario: resultadoAnterior.usuario,
                telefone: resultadoAnterior.telefone,
                endereco: result
            }
        })
    })
    .then(function (resultado){
        console.log(`
        Nome: ${resultado.usuario.nome},
        endereco: ${resultado.endereco.rua} Nº ${resultado.endereco.numero},
        telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
        `)
    })
    .catch(function (error){
        console.error('Deu merda', error)
    })

/*

obterUsuario(function resolverUsuario(erro, usuario){
    if(erro){
        console.error("DEU RUIM em USUARIO", erro);
        return;
    }
    obterTelefone(usuario.id,function resolverTelefone(erro1, telefone){
        if(erro1){
            console.erro("DEU RUIM no TELEFONE", erro1);
            return;
        }
        obterEndereço(usuario.id, function resolverEndereco(erro2, endereco){
            if(erro2){
                console.log("DEU RUM no ENDERECO", erro2);
                return;
            }
            console.log(`
                Nome: ${usuario.nome},
                Endereco: ${endereco.rua}, ${endereco.numero}
                Telefone: (${telefone.ddd}) ${telefone.telefone}
            `)
        })
    })
});
//const telefone = obterTelefone(usuario.id);


//console.log('telefone', telefone)*/

