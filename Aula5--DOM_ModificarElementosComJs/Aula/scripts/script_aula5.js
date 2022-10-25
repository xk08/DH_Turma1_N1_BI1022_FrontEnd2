//@@@@@@ [1] - Modelos de texto  - Template Strings

function saudacao() {
    return "Boas-vindas Marcos"
}
let usuario = "Marcos";
console.log(`${saudacao()}`);

//@@@@@@ [2] - Modificando elementos com o DOM
document.querySelector("h1").innerText = "Aula 5";

/* let h3 = document.querySelector("h1");
h3.innerHTML = `
        <div>
            <h1>Teste aula 4</h1>
            <p>lorem ipsum,...</p>
        </div>
` */
let h3 = document.querySelector("h3");
h3.innerHTML = `Aula 5`
console.log(h1.innerText);
console.log(h1.innerHTML);


//@@@@@@ [3] - Modificando estilos 
h3.style.color = "#D25555";
h3.style.textAlign = "center"

//@@@@@@ [4] Modificando a classe dos elementos
h3.classList.add("novoh3");
console.log(h3.classList);