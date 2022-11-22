/* Aula 16 - Introdução ao assincronimso e Promises */
/* Nesta aula estamos apenas "Simulando" requisições assincronas ao utilizar as promises */

let validacao = true;

let usuario = {
    nome: "Gilson",
    uf: "SC"
}

let usuarioJson = JSON.stringify(usuario);

let erroPromise = {
    status: 500,
    mensagem: "A promisse falhou"
}

let erroJson = JSON.stringify(erroPromise);

let minhaPromise = new Promise(function (resolve, reject) {

    setTimeout(() => {
        if (validacao) { //True = Resolvida a promise
            resolve(usuarioJson);
        } else { //False = A promise foi rejeitada
            reject(erroJson);
        }
    }, 1000);

});

//Executando a promisse (resolvendo a promisse)
minhaPromise.then(
    function (resposta) {
        console.log("1° then");
        console.log(resposta);

        //Retorna para o próximo bloco the()
        return JSON.parse(resposta);

    }
).then(
    function (resposta) {
        //Recebe o objeto literal JS
        console.log("2° then");
        console.log(resposta);
    }
)
    .catch(
        //Caso tenha algum erro na requisição/promise
        function (erro) {
            console.log(erro);

        }
    );
