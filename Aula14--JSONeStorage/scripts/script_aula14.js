/* Objetivo: Capturar as informações vindas do HTML e obter os valores com o JS */
let nomeCapturado = document.getElementById("nome");
let idade = document.getElementById("idade");
let altura = document.getElementById("altura");
let checkbox = document.getElementById("checkbox");
let listaItens = document.getElementById("listaItens");
let botaoCapturado = document.getElementById("salvar");
//Capturando os radio buttons
let radioButtons = document.getElementsByName("radioGrupo");

//Cria variável de controle
let nomeFormularioOk = false;
let emailFormularioOk = false;

//Bloqueado o botão de salvar ao iniciar a página
botaoCapturado.setAttribute("disabled", true);
botaoCapturado.style.backgroundColor = "#908E8E"

botaoCapturado.addEventListener("click", function (evento) {

  if (nomeFormularioOk && emailFormularioOk) {
    evento.preventDefault();
    normalizandoDados(nomeCapturado.value);
  }

});

/* Objetivo da aula 11: Conhecer e praticar algumas normalizações em JS */

function normalizandoDados(nomeRecebido) {

  //TRIM (Retira espaços inicias e finais)
  let textoSemEspaco = retiraEspacos(nomeRecebido);
  console.log(`Com espaços: ${nomeRecebido}`);
  console.log(`Sem espaços: ${textoSemEspaco}`);

  let nomeNormalizado = transformaEmMaiusculas(textoSemEspaco);
  console.log(nomeNormalizado);

  //SPLIT (Fragmenta uma informação em um Array)
  let novoNome = nomeNormalizado.split(" ");
  console.log(novoNome);


}

function retiraEspacos(recebeTexto) {
  return recebeTexto.trim();
}

function transformaEmMaiusculas(recebeTexto) {
  return recebeTexto.toUpperCase();
}

function transformaEmMinusculas(recebeTexto) {
  return recebeTexto.toLowerCase();
}

/* Objetivo da aula 13: Realizar algumas validações nos campos do formulário*/

////////Validando o Nome e sobrenome (click ou focus)
nomeCapturado.addEventListener("focus", function () {
  console.log("Clicou no campo do Nome e sobrenome");
  //Altera o fundo do campo ao ser clicado
  nomeCapturado.style.backgroundColor = "#C1C6C8F3"
});

//Bluer ou keyup
nomeCapturado.addEventListener("keyup", function () {
  //console.log("Saiu do campo do Nome e sobrenome");

  //Pega o elemento Small
  let nomeSobrenomeValidacao = document.getElementById('nomeValidacao');


  //Altera o fundo do campo ao sair do click 
  nomeCapturado.style.backgroundColor = "#FFFFFF"

  if (nomeCapturado.value.length <= 5) { //Tem que ter mais de 5 caracteres

    // troca o fundo
    nomeCapturado.style.backgroundColor = "#E6626299"

    //Seta a mensage no small (e configura)
    nomeSobrenomeValidacao.innerText = "O campo deve ter mais de 5 caracteres"
    nomeSobrenomeValidacao.style.color = "#D53A3A"
    nomeSobrenomeValidacao.style.fontWeight = "bold"

    //Bloqueado o botão de salvar
    botaoCapturado.setAttribute("disabled", true);
    //Trocando a cor do botão
    botaoCapturado.style.backgroundColor = "#908E8E"

    //Seta a variável para falso
    nomeFormularioOk = false;

  } else {  //Se ambos estiverem ok

    //Retira a mensage do small
    nomeSobrenomeValidacao.innerText = ""

    //Seta o BG do input como Sucesso
    nomeCapturado.style.backgroundColor = "#50D48084"


    //Seta a variável de controlle do formulário
    nomeFormularioOk = true;

    if (nomeFormularioOk && emailFormularioOk) {
      //Retorna o botão para "habilitado"
      botaoCapturado.removeAttribute("disabled");
      botaoCapturado.style.backgroundColor = "#0b5ed7"
    }
  }

});


////////Validando O E-MAIL
//Focus ou click
email.addEventListener("focus", function () {
  console.log("Clicou no campo do E-mail");
  //Altera o fundo do campo ao ser clicado
  email.style.backgroundColor = "#E2DCDC"
});

//Blur ou KeyUp
email.addEventListener("keyup", function () {
  console.log("Saiu do campo do email");

  //Pega o elemento Small
  let emailValidacao = document.getElementById('emailValidacao');


  //Altera o fundo do campo ao sair do click 
  email.style.backgroundColor = "#FFFFFF"

  //Valida se o campo É VAZIO
  if (!email.value) { //Se não foi preenchido
    // troca o fundo
    email.style.backgroundColor = "#E6626299"

    //Seta a mensage no small (e configura)
    emailValidacao.innerText = "Campo obrigatório"
    emailValidacao.style.color = "#D53A3A"
    emailValidacao.style.fontWeight = "bold"

    //Bloqueado o botão de salvar
    botaoCapturado.setAttribute("disabled", true);
    //Trocando a cor do botão
    botaoCapturado.style.backgroundColor = "#908E8E"

    //Seta a variável para falso
    emailFormularioOk = false;

    //Valida de o email está em um formato correto
  } else if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) { //Testa o erro

    // troca o fundo
    email.style.backgroundColor = "#E6626299"

    //Seta a mensage no small (e configura)
    emailValidacao.innerText = "E-mail inválido"
    emailValidacao.style.color = "#D53A3A"
    emailValidacao.style.fontWeight = "bold"

    //Bloqueado o botão de salvar
    botaoCapturado.setAttribute("disabled", true);
    //Trocando a cor do botão
    botaoCapturado.style.backgroundColor = "#908E8E"

    //Seta a variável para falso
    emailFormularioOk = false;

  } else {
    //Se o campo estiver ok
    //Retira a mensage do small
    emailValidacao.innerText = ""

    //Seta o BG do input como Sucesso
    email.style.backgroundColor = "#50D48084"

    //Seta a variável de controlle do formulário
    emailFormularioOk = true;

    if (nomeFormularioOk && emailFormularioOk) {
      //Retorna o botão para "habilitado"
      botaoCapturado.removeAttribute("disabled");
      botaoCapturado.style.backgroundColor = "#0b5ed7"
    }
  }

});

/* Objetivo da aula 14: Conhecer e praticar alguns cocneitos sobre JSON e Storage
Objetivo: Queremos salvar as informações do forms, pra que sejam exibidas 
automaticamente ao acessar a página 
*/