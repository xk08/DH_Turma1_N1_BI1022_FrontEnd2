/* Captura os elementos do formulário de login */
let emailLogin = document.querySelector("#inputEmail");
let passwordLogin = document.querySelector("#inputPassword");
let botaoAcessarLogin = document.querySelector("#botaoAcessarLogin");

/* Altera as caracteristicas do botão acessar */
botaoAcessarLogin.style.backgroundColor = "#979292A1"
botaoAcessarLogin.innerText = "Bloqueado";

/* Variáveis de controle para as validações do form de login */
let emailIsValid = false;
let passwordIsValid = false;
let minPasswordCaracteres = 4;

/* Adiciona um evento de click ao botão de acessar */
botaoAcessarLogin.addEventListener("click", async function (evento) {

    //Busca os valores atualizados dos inputs
    emailLogin = document.querySelector("#inputEmail");
    passwordLogin = document.querySelector("#inputPassword");


    if (validaLogin()) {

        evento.preventDefault();

        /* Normalizando os inputs da tela de login */
        emailLogin = normalizaStringUsandoTrim(emailLogin.value);
        passwordLogin = normalizaStringUsandoTrim(passwordLogin.value);

        console.log(`E-mail: ${emailLogin}`);
        console.log(`Senha: ${passwordLogin}`);

        //Cria objeto JS que representa o login do usuário
        let loginJs = {
            email: emailLogin,
            password: passwordLogin
        }

        //Cria objeto JSON que representa o login do usuário
        let loginJson = JSON.stringify(loginJs);
        //loginApi(loginJson);
        loginAssincrono(loginJson);


    } else {
        console.log("Login inválido");
    }

});


function loginApi(jsonRecebido) {

    let configRequest = {
        method: "POST",
        body: jsonRecebido,
        headers: {
            "Content-Type": "application/json"
        }
    }

    fetch(`${baseUrl()}/users/login`, configRequest)
        .then(
            resultado => {

                if (resultado.status == 201) {
                    return resultado.json()
                } else {
                    //404 ou 400
                    throw resultado;
                }
            }
        )
        .then(
            resultado => {
                loginSucesso(resultado);
            }
        )
        .catch(
            erro => {
                loginErro(erro);

            }
        );
}

async function loginAssincrono(jsonRecebido) {

    let configRequest = {
        method: "POST",
        body: jsonRecebido,
        headers: {
            "Content-Type": "application/json"
        }
    }

    //Async/Await
    try {
        let login = await fetch(`${baseUrl()}/users/login`, configRequest);
        if (login.status == 201) {
            let loginResponse = await login.json();
            loginSucesso(loginResponse);
        } else {
            throw login;
        }
    } catch (error) {
        loginErro(error)
    }
}


function loginSucesso(resposta) {
    console.log(resposta.jwt);

    //Salva o token no cliente/front end
    sessionStorage.setItem("jwt", resposta.jwt)

    //Direciona o usuário pra pagina de tarefas
    location.href = "tarefas.html";

}

function loginErro(resposta) {
    console.log(resposta);
    if (resposta.status == 400 || resposta.status == 404) {
        alert("E-mail e/ou senha inválidos.")
    }
}


/* Verifica se ambas as informações do formulário de login foram validadas */
function validaLogin() {
    if (emailIsValid && passwordIsValid) {
        /* Ativa o botão de acesso novamente e retorna suas propriedades */
        botaoAcessarLogin.style.backgroundColor = "#7898FF"
        botaoAcessarLogin.innerText = "Acessar";
        botaoAcessarLogin.removeAttribute("disabled");
        return true;
    } else {
        /* Desabilita o botão de acesso e troca suas caracteristicas*/
        botaoAcessarLogin.style.backgroundColor = "#979292A1"
        botaoAcessarLogin.innerText = "Bloqueado";
        botaoAcessarLogin.setAttribute("disabled", true);
        return false;
    }
}

/* Validações no Input de EMAIL */
emailLogin.addEventListener("keyup", () => { //Possível também com o (blur)
    //Busca os valores atualizados dos inputs
    emailLogin = document.querySelector("#inputEmail");
    let emailValidacao = document.getElementById("emailValidacao");

    /* Alterando o texto do Small - Validando se o email tem um formato válido */
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailLogin.value)) {
        emailValidacao.innerText = "E-mail inválido";
        //Troca a cor da borda do input
        emailLogin.style.border = "2px solid #E9554EBB"
        emailIsValid = false;

    } else {
        emailValidacao.innerText = "";
        //Troca a cor da borda do input
        emailLogin.style.border = "2px solid transparent"
        emailIsValid = true;
    }
    /* Em caso de sucesso ou erro na validação, chama a função que valida o login*/
    validaLogin();
});

/* Validações no Input da SENHA */
passwordLogin.addEventListener("keyup", () => {
    //Busca os valores atualizados dos inputs
    passwordLogin = document.querySelector("#inputPassword");
    let passwordValidacao = document.getElementById("passwordValidacao");
    /* Alterandoo texto do Small - Verifica se o campo é nulo/vazio */
    if (passwordLogin.value.length <= minPasswordCaracteres) {
        passwordValidacao.innerText = `Faltam ${(minPasswordCaracteres + 1) - passwordLogin.value.length} caracteres`;
        //Troca a cor da borda do input
        passwordLogin.style.border = "2px solid #E9554EBB"
        passwordIsValid = false;

    } else {
        passwordValidacao.innerText = "";
        //Troca a cor da borda do input
        passwordLogin.style.border = "2px solid transparent"
        passwordIsValid = true;
    }
    validaLogin();
});