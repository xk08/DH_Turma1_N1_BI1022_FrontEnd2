/* 1- Capturar as informações vindas do HTML e obter os valores com o JS */

let btn = document.getElementById("salvar");
btn.addEventListener('click', function (evento) {

    let inputNomeSobrenome = document.getElementById("nome").value;
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
        console.log("Texto com espaços:"+textoMaiusculo);
        console.log("Texto sem espaços:"+textoSemEspacos);
    }

});

/* AULA 13: TRABALHANDO COM VALIDAÇÕES EM TEMPO REAL */

/* Realizar algumas validações nos campos do formulário*/


  /* Nome: Mínimo de 4 caracteres */

  /* Email: Deve possuir um formato válido (RegExp) */