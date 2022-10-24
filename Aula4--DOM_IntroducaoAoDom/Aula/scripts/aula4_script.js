/* NESTA AULA, FAREMOS APENAS A CAPTURA DAS INFORMAÇÕES DO HTML (SEM MODIFICAR OU ADICIONAR E REMOVER ELEMENTOS) 
-> Nas proximas aulas, faremos a alteração de alguns elementos e de suas propriedades*/

console.log(window.document);

console.log(document.querySelector('#item1').innerText);

console.log(document.getElementById('item1').innerText);

let articles = document.querySelectorAll("article");
console.log(articles[2]);

let elementoSelecionado;
for (let elememento of articles ) {
console.log(elememento);

    if(elememento.id == "card1") {
        elementoSelecionado = elememento;
    }
}

console.log(elementoSelecionado);