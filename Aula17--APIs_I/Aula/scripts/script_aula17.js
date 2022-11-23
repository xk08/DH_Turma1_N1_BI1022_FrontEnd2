let quantidadeFormulario = document.getElementById('quantidadeFormulario');
let botaoPesquisar = document.getElementById('botaoPesquisar');
let exibeResultado = document.getElementById('exibeResultado');

botaoPesquisar.addEventListener('click', function (evento) {
    evento.preventDefault();
    if (quantidadeFormulario.value != "") {
        //GET
        fetch(`https://dog.ceo/api/breedsss/image/random/${quantidadeFormulario.value}`)
            .then(
                function (resultado) {
                    console.log(resultado);
                    return resultado.json()
                }
            ).then(
                function (resultado) {
                    renderizaImgCachorros(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                }
            );
    } else {
        alert("Você deve informar o número de imagens que deseja buscar")
    }
});

function renderizaImgCachorros(listaCachorros) {
    for (let cachorro of listaCachorros.message) {
        let img = document.createElement("img");
        img.setAttribute("src", cachorro);
        exibeResultado.appendChild(img);
    }
}

function atualizaPagina() {
    window.location.reload();
}