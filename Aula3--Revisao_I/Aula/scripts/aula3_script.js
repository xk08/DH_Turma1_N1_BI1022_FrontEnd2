// @@@ CICLOS (Percorrendo, fazendo iterações em dados)
export function trabalhandoComArrays() {

    // FOR IN
    let aula = {
        titulo: "Aula 3 - revisão",
        horario: "19H até 20:45",
        tema: {
            titulo: "Aula de revisão",
            bimestre: "3Bi"
        }
    }
    alert(aula.tema.titulo)
    for (let propriedade in aula) {
        console.log(aula[propriedade]);
    }

    //Criando um array
    let arrayAlunos = ["Gilson", "Thiago", "Luiz fernando"];
    arrayAlunos.push("Cristian");
    arrayAlunos.push("Juliana");

    console.log(arrayAlunos[3]); //Buscando um elemento específico

    //Laço For simples
    for (let i = 0; i < arrayAlunos.length; i++) {
        console.log(arrayAlunos[i]);
    }

    //FOR OF
    console.log("\n");
    for (let elemento of arrayAlunos) {
        console.log(elemento);
    }

    //ForEach
    let arrayAlunos.forEach(aluno => {
        return aluno.toUpperCase();
    });

    /* function exibeNomeAluno(alunoRecebido) {
        console.log(alunoRecebido);
    } */


    //Map
    let novaArray = arrayAlunos.map(aluno => {
        return aluno.toUpperCase();
    });

    console.log(novaArray);

    let vitoria = false;
    while (!vitoria) { //true
        //Realiza a ação...
        vitoria = true;
}

    //trabalhandoComArrays();
    export function exibeNome() {
    console.log("O nome é Marcos");
}

export default trabalhandoComArrays;