function exibeSpinner() {
        let div = document.createElement("div");
        div.classList.add("loader");
        let botaoAcessarLogin = document.getElementById("botaoAcessarLogin");
        botaoAcessarLogin.innerText = "";
        botaoAcessarLogin.appendChild(div);


}

function ocultaSpinner() {
    setTimeout(() => {
        let divAnimacao = document.querySelector(".loader");
        let botaoAcessarLogin = document.getElementById("botaoAcessarLogin");
        botaoAcessarLogin.removeChild(divAnimacao);
        botaoAcessarLogin.innerText = "Acessar"
    }, 2000);

}