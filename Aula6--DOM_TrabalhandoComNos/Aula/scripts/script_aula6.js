//##### INTERAÇÃO COM A LISTA DE FELINOS

//Elemento pai
let containerFelinos = document.getElementById("containerFelinos");
console.log(containerFelinos);

//Lista de felinos
let listaFelinos = document.querySelectorAll(".item");
console.log(listaFelinos);

//Remoção de um ou mais elementos da lista
containerFelinos.removeChild(listaFelinos[0]);
containerFelinos.removeChild(listaFelinos[1]);

containerFelinos.firstElementChild.remove();
containerFelinos.lastElementChild.remove();


//Inserindo um novo card na list de elementos
let scars = {
    img: "https://i.ytimg.com/vi/pqIv5_Ney7U/maxresdefault.jpg",
    titulo: "Scars",
    descricao: "Velit magna sint cupidatat dolor incididunt adipisicing. Aliqua quis dolore culpa est commodo esse. Id labore nostrud proident velit minim mollit mollit. Consequat aliquip ex aliquip irure labore excepteur voluptate fugiat dolore amet ullamco consequat. Non ut consectetur excepteur magna amet veniam deserunt mollit tempor est velit sint mollit. Esse laborum do cupidatat est in labore exercitation qui."
}

let div = document.createElement("div");
div.classList.add("item");

div.innerHTML = `
    <img src="${scars.img}">
    <h2>${scars.titulo}</h2>
    <p>${scars.descricao}</p>
`

console.log(div);
//Elemento pai
containerFelinos.appendChild(div);

//esquerda: novo elemento - direita:  
containerFelinos.insertBefore(div, listaFelinos[4]);
containerFelinos.insertBefore(div, containerFelinos.children[4]);