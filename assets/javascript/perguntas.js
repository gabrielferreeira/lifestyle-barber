const perguntaItem = document.querySelectorAll(".pergunta-item");

function fecharRespostas() {
  perguntaItem.forEach((item) => {
    item.classList.remove("active");
    const resposta = item.querySelector(".resposta");
    resposta.classList.remove("active");
    const icon = item.querySelector(".pergunta i");
    icon.classList.remove("active");
  });
}

perguntaItem.forEach((item) => {
  const pergunta = item.querySelector(".pergunta");
  const resposta = item.querySelector(".resposta");
  const icon = pergunta.querySelector("i");

  pergunta.addEventListener("click", () => {
    if (!item.classList.contains("active")) {
      fecharRespostas();
      item.classList.add("active");
      resposta.classList.add("active");
      icon.classList.add("active");
    } else {
      item.classList.remove("active");
      resposta.classList.remove("active");
      icon.classList.remove("active");
    }
  });
});
