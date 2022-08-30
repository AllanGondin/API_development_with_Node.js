/*
obter um usuário
1 Obter o numero de telefone de um usuário apartir de um ID
2 Obter o endereço do usuáiro pelo Id
*/

function obterUsuario(callback) {
    setTimeout(() => {
        return callback(null,{
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })

    }, 1000);
}

function obterTelefone(idUsuario, callback) { //por padrão o callback é o ultimo a ser declarado
    setTimeout(() => {
        return callback(null,{
            telefone:'95587521',
            ddd: '11'
        })
    }, 2000);
}

function obterEndereço(idUsuário, callback) {
    setTimeout(() => {
        return callback(null,{
            rua: 'DOS BOBOS',
            numero: 0
        })
    }, 1000);
}

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


//console.log('telefone', telefone)