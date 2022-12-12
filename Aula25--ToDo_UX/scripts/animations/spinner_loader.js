
function exibeSpinner() {

    //Manipulando o spinner
    let spinner = document.createElement("div");
    spinner.classList.add("loader");

    let botaoAcessar = document.getElementById("botaoAcessarLogin");

    //Retira o texto do Botão
    botaoAcessar.innerText = "";

    //Adiciona a animação no botão
    botaoAcessar.appendChild(spinner);

}

function ocultaSpinner() {

    //Captura o spinner existente
    let spinner = document.querySelector(".loader")

    //Captura o botão de acesso
    let botaoAcessar = document.getElementById("botaoAcessarLogin");

    //Remove ele do botão de acesso
    botaoAcessar.removeChild(spinner);

    //Retorna o texto do Botão
    botaoAcessar.innerText = "Acessar";
}