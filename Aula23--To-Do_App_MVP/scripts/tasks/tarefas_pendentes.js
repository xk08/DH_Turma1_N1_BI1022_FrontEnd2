
let tarefasPendentesUl = document.querySelector(".tarefas-pendentes");

function renderizaTarefaPendente(tarefa){
    console.log(tarefa);

      let li = document.createElement("li");
      li.classList.add("tarefa");

      li.innerHTML =
       `
       <div id=${tarefa.id} class="not-done" onclick="manipulaTareaPeloId(${tarefa.id})"></div>
        <div class="descricao">
          <p class="nome">ID: ${tarefa.id}</p>
          <p class="nome">${tarefa.description}</p>
          <p class="timestamp">Criada em: ${tarefa.createdAt}</p>
        </div>
        `;

        tarefasPendentesUl.appendChild(li);
}

function manipulaTareaPeloId(id){
    console.log(id);
    location.reload(); //F5
}