function pesquisar() {

    let section = document.getElementById("resultados-pesquisa");
  
    let personagem = document.getElementById("personagem").value

    if(!personagem) {
      section.innerHTML = "<p>Nada foi encontrado.</p>"
      return}

      peronagem = personagem.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      if (titulo.includes(personagem) || descricao.includes(personagem) || tags.includes(personagem)) {
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais Informações da Wiki Grand Order</a>
        </div>
      `;
      }
    }
  
    if (!resultados) {resultados = "<p>Nada foi encontrado. Você não digitou corretamente.</p>"}
    section.innerHTML = resultados;
  }