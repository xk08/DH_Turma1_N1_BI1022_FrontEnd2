/* 1° Bloco da aula: Atributos dinâmicos */

let textNome = document.getElementById("textNome");
textNome.setAttribute("class", "nova-classe");
textNome.setAttribute("outro", "nova-classe");
console.log(textNome);

let img = document.createElement("img");
img.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png")
document.body.appendChild(img);

/* 2° Bloco da aula: Eventos */
/*
Principais tipos de eventos que temos:
- Eventos de tela/pagina
- Eventos de formulários
- Eventos de mouse
- Eventos de teclado
*/

///@@@@ Eventos de janela/pagina

onload = () => {
    boasvindas();
};

function boasvindas() {
    console.log("Clicou no botão");
    alert("Seja bem-vindo usuário")
}

///@@@@ Eventos de formulários

let btn = document.getElementById("botaoEnviar");
console.log(btn);


///@@@@ Eventos do mouse (onClick)

btn.ondblclick = function(){
    boasvindas();
}

btn.addEventListener("click", function () {
    boasvindas();

});

function exibeIdadeUsuario() {
    let inputIdade = document.getElementById("textIdade");
    console.log(inputIdade.value);
}

///@@@@ Eventos do mouse, além do click (onClick)

btn.onmouseover = function() {
    console.log("Esta em cima do botão de enviar");
    btn.style.width = "50%"
}

btn.onmouseout = function() {
    console.log("Saiu do botão de enviar");
    btn.style.width = "10%"
}