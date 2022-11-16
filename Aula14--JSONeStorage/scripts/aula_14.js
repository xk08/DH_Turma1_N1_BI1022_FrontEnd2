/* %%%% Praticando os conceitos de Storage */

//Setando novos recursos no Storage
localStorage.setItem("id1", "Aula Storage e JSON");

//Atualizando o registro
localStorage.setItem("id1", "Atualiza o recurso");
localStorage.setItem(1, true);
localStorage.setItem(2, true);
localStorage.setItem(3, true);
localStorage.setItem(4, false);

//Salvando na sessão
sessionStorage.setItem(1, false);

//Buscando um registro existente
let registroUm = localStorage.getItem("id1");
console.log(registroUm);

//Removendo um registro do Storage
localStorage.removeItem("id1");

//remover todos os recursos salvos
localStorage.clear();

//Salvando um objeto Literal JS no Storrage

let usuario = {
    nome: "Gilson",
    estado: "SC",
    cidade: "Urubici",
    temperatura: "14 °C"
}

let usuarioJSON = JSON.stringify(usuario)

localStorage.setItem(1, usuarioJSON);

let usuaioStorage = localStorage.getItem(1);

let usuarioFinal = JSON.parse(usuaioStorage)
console.log(usuarioFinal.temperatura);