/* @@@ EXIBIÇÃO E CAPTURA DOS DADOS 
- Alert()
- Confirm()
- Prompt()
*/

function boasvindas() {
    alert("Bem-vind@ usuári@ X");
}

//Chamando/invocando a função de boas-vindas
boasvindas();

console.log("Aula 2");
let valorRetornado = confirm("Deseja realmente sair?");
console.log(valorRetornado);

if (valorRetornado) { //True -> verdadeiro
    alert("Saiu da sessão")
} else {
    alert("...continua na sessão");
}

let valorRecebido = prompt("Informe um numero inteiro:");
console.log(valorRecebido);

/* @@@ CONVERSÃO DE DADOS EM JS */
let valorA = 10;

let valorConvertidoNumerico = parseFloat(valorRecebido);
let valorConvertidoNumerico = Number(valorRecebido);
let resultado = valorA + valorConvertidoNumerico;
console.log(resultado);

/* @@@  FUNÇÕES MATEMÁTICAS EM JS */

/* Função que gera número aleatorios entre um intervalo escolhido */
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randon = Math.floor(getRandomArbitrary(2, 8));
console.log(randon);