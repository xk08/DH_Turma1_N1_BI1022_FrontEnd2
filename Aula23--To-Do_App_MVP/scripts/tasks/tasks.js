//Variável global (pois, outras funções irão utilizar)
let tokenJwt;

//Executa automaticamente ao chamar a página tarefas.html
onload = function () {

    //Busca o token no Storage
    tokenJwt = sessionStorage.getItem("jwt");

    if (!tokenJwt) {
        //Caso o token seja inválido....
        window.location = "index.html"
    } else {
        //Executa as outras ações automáticas necessárias
        buscaDadosUsuario();

        //Chama o método que lista todas as tarefas
        buscaTarefas();
    }
}

/* Cria uma função assincrona para fazer a requisição */
async function buscaDadosUsuario() {

    let configRequest = {
        //Passo apenas o cabeçalho, pois já sabe que é GET
        headers:
            { "authorization": tokenJwt }
    }

    try {
        let respostaApi = await fetch(`${apiBaseURL()}/users/getMe`, configRequest);

        if (respostaApi.status == 200) {
            let respostaFinal = await respostaApi.json();
            modificaUsuarioDom(respostaFinal);
        } else {
            throw Error("Ocorreu algum erro ao buscar o usuário");
        }
    } catch (error) {
        alert(error);
    }
}

/* BUSCA AS TAREFAS DO USUÁRIO LOGADO */
async function buscaTarefas() {

    let configRequest = {
        //Passo apenas o cabeçalho, pois já sabe que é GET
        headers:
            { "authorization": tokenJwt }
    }

    try {
        let respostaApi = await fetch(`${apiBaseURL()}/tasks`, configRequest);

        if (respostaApi.status == 200) {
            let respostaFinal = await respostaApi.json();
            manipulaListaTarefas(respostaFinal);

        } else {
            throw Error("Ocorreu algum erro ao buscar as tarefas do usuário!");
        }
    } catch (error) {
        alert(error);
    }
}

let modificaUsuarioDom = (dadosUsuario) => {
    //Captura a variável para a manipulação do DOM
    let nomeUsuario = document.getElementById("nomeUsuario");
    //Altera o nome do usuário em tela
    nomeUsuario.innerText = `${dadosUsuario.firstName} ${dadosUsuario.lastName}`
}

//LISTA TODAS AS TAREFAS
let manipulaListaTarefas = (tarefas) => {
    console.log(tarefas);
}