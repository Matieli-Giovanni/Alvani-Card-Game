
const botoesTipos = document.querySelectorAll(".botao");
const informacoes = document.querySelectorAll(".informacoes");

botoesTipos.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    // Remove a classe "selecionado" de todos os botões
    botoesTipos.forEach(btn => btn.classList.remove("selecionado"));

    // Adiciona a classe "selecionado" ao botão clicado
    botao.classList.add("selecionado");

    // Remove a classe "ativa" de todas as seções de informações
    informacoes.forEach(info => info.classList.remove("ativa"));

    // Adiciona a classe "ativa" à seção de informações correspondente
    informacoes[indice].classList.add("ativa");
  });
});
