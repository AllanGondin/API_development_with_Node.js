function obterUsuário(callback){

    setTimeout(() =>{
        return callback(null,[{
            
            id:1,
            nome: 'Aladin',
            dataNascimento: new Date()
        },
        {
            id:2,
            nome: 'Jasmini',
            dataNascimento: new Date()
        },
        {
            id:3,
            nome: 'Gênio',
            dataNascimento: new Date()
        }])
    }, 1000)
}

function obterTelefone(idUsuario,callback){
    setTimeout(() => {
        return callback(null,[{

        }
    ])
    }, 1000);
}

obterUsuário(function resolverUsuario(erro,usuario){
    if(erro){
        console.error('Deu merda', erro)
        return;
    }
usuario.forEach(element => {
    console.log(element.nome)
});
    

});

