
//variavel global o tasks
let jwt;

onload = function () {
    //Capturando o token do Storage
    jwt = sessionStorage.getItem("jwt");

    if (!jwt) {
        window.location.href = "index.html";
    } else {
        buscarDadosUsuarioApi();
    }
}

function buscarDadosUsuarioApi() {
    let configRequest = {
        headers: {
            'Authorization': jwt
        }
    }
    fetch(`${apiBaseURL()}/users/getMe`, configRequest)
    .then(
        resposta => {
            return resposta.json();
        }
    )
    .then(
        resposta => {
            renderizaDadosUsuario(resposta);
        }

    )
    .catch(
        erro => {
            console.log(erro);
        }
    );
    
    function renderizaDadosUsuario(dadosUsuario) {
        let nomeUsuarioTarefas = document.getElementById("nomeUsuarioTarefas");
        nomeUsuarioTarefas.innerText = `${dadosUsuario.firstName} ${dadosUsuario.lastName}`
    }

}