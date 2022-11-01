/* Tipos de funções em JS */
//---------- @@ Funções declaradas ou declarativas

main("Marcos");

function main(recebeNome) {
    nome(recebeNome);   
}

function nome(nomeRecebido){
    console.log(nomeRecebido);
}

//---------- @@ Funções expressadas ou funções de expressão

 let main = (recebeNome) => {
    nome(recebeNome);   
}

let nome = function(nomeRecebido){
    console.log(nomeRecebido);
}

main("Marcos")

//---------- @@ Funções aninhadas ou Closures
function boasvindas(nomeRecebido) {

    function exibeMensagem(nomeRecebido) {
        console.log(nomeRecebido);
    }
    exibeMensagem(nomeRecebido);

}

boasvindas("Seja bem-vindo Marcos");


//---------- @@ Funções de CallBacks (Função que recebe uma função como parametro e a executa)

function subtracao(valor1, valor2){
    console.log(`O resultado foi: ${valor1-valor2}`);
}

function divisao(valor1, valor2){
    console.log(`O resultado foi: ${valor1/valor2}`);
}


let executaCalculo = function(funcaoRecebida) {
    let valor1 = 10;
    let valor2 = 5;
    funcaoRecebida(valor1, valor2);
}

executaCalculo(soma);

let textIdade = document.getElementById("textIdade");

//Exemplo de uso de callbacks
textIdade.addEventListener("click", function(){});

//---------- @@ Funções de Seta (=>) ou ArrowFunctions

function soma2(valor1, valor2){
    return (`O resultado foi: ${valor1+valor2}`);
}

console.log(soma2(3,5));

let soma = (valor1, valor2) => {
    return (`O resultado foi: ${valor1+valor2}`);
}
let boasVindas = nomeUsuario => {
    return console.log(`Bem-vindo usuário ${nomeUsuario}`);
}
console.log(soma(3,5));