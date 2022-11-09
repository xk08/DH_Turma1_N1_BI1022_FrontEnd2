/* 1- Capturar as informações vindas do HTML e obter os valores com o JS */

let inputNomeSobrenome = document.getElementById("nome");

let btn = document.getElementById("salvar");
btn.addEventListener('click', function (evento) {


    let inputIdade = document.getElementById("idade");
    let inputAltura = document.getElementById("altura");
    //let inputBio = document.getElementById("biografia");

    if (inputNomeSobrenome) {
        console.log(evento.preventDefault());
        console.log("clicou no botão");

        console.log(`Nome e sobrenome: ${inputNomeSobrenome}`);
        console.log(`Idade ${inputIdade.value}`);
        console.log(`Altura ${inputAltura.value}`);
        //console.log(`Bio ${inputBio.value}`);

        //Capturando a lista de itens

        let listaItens = document.getElementById("listaItens");
        console.log(listaItens.value);

        //Manipulando o checkbox
        let checkbox = document.getElementById("checkbox");
        console.log(checkbox.checked);

        //Manipulando o RadioButton

        let radioGrupo = document.getElementsByName("radioGrupo");
        console.log(radioGrupo);

        let elementoSelecionado;

        for (let radio of radioGrupo) {
            if (radio.checked) {
                elementoSelecionado = radio;
            }

        }
        console.log(elementoSelecionado.value);

        //NORMALIZANDO as informações do formulário

        //Transformando para letras maiusculas
        let textoMaiusculo = inputNomeSobrenome.toUpperCase();
        console.log(textoMaiusculo);

        //Retirando espaços em branco do inicio e do final da string
        let textoSemEspacos = textoMaiusculo.trim();
        console.log("Texto com espaços:" + textoMaiusculo);
        console.log("Texto sem espaços:" + textoSemEspacos);
    }

});

/* AULA 13: TRABALHANDO COM VALIDAÇÕES EM TEMPO REAL */

/* Realizar algumas validações nos campos do formulário*/


btn.style.backgroundColor = "#6C6B6B"
btn.setAttribute("disabled", true)


/* Nome: Mínimo de 4 caracteres */
email.addEventListener("focus", function () {
    console.log("Clicou no campo");
    email.style.backgroundColor = "#C4BFBF"
});

email.addEventListener("keyup", function () {

    let emailValidacao = document.getElementById("emailValidacao");

    console.log("Sai do campo");
    email.style.backgroundColor = "#FFFF";

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        //Validação passar
        console.log("Validação passou");
        email.style.backgroundColor = "#69C466";
        emailValidacao.innerText = "";
        btn.removeAttribute("disabled");
        btn.style.backgroundColor = "#0b60db"

    } else {
        //Validação não passou
        console.log("Validação não passou");
        email.style.backgroundColor = "#EB5D5D";
        emailValidacao.innerText = "Insira um email válido"
        emailValidacao.style.fontWeight = "bold";
        emailValidacao.style.color = "#EB5D5D";
        btn.setAttribute("disabled", true);
    }
});


/* Email: Deve possuir um formato válido (RegExp) */
inputNomeSobrenome.addEventListener("focus", function () {
    console.log("Clicou no campo");
    inputNomeSobrenome.style.backgroundColor = "#C4BFBF"
});

inputNomeSobrenome.addEventListener("keyup", function () {

    let nomeValidacao = document.getElementById("nomeValidacao");

    console.log("Saiu do campo");
    inputNomeSobrenome.style.backgroundColor = "#FFFF";

    if (inputNomeSobrenome.value.length >= 4) {
        //Validação passar
        console.log("Validação passou");
        inputNomeSobrenome.style.backgroundColor = "#69C466";
        nomeValidacao.innerText = "";
        btn.removeAttribute("disabled");
        btn.style.backgroundColor = "#0b60db"

    } else {
        //Validação não passou
        console.log("Validação não passou");
        inputNomeSobrenome.style.backgroundColor = "#EB5D5D";
        nomeValidacao.innerText = "Minimo de 4 caracteres"
        nomeValidacao.style.fontWeight = "bold";
        nomeValidacao.style.color = "#EB5D5D";
        btn.setAttribute("disabled", true);
    }
});