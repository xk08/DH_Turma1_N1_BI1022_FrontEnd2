// Declarando variáveis
let nome = "Marcos M";
let idade = 25;
let cidade = "São Borja";

//Exibindo no console do navegador
console.log("O professor é o: "+nome+ " tem "+idade+" anos de idade e mora em: "+cidade);

//Declarando um array
let array = [
    "Denner",
    "Valente",
    3,
    true,
    "Marcos"
];

array.push("Novo nome");

//Exibindo no console do navegador
console.log(array[4]);

//Percorrendo o array de elementos
for (let i = 0; i < array.length; i++) {
    console.log("posição "+i+" elemento: "+array[i]);
}