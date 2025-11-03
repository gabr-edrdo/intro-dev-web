// Script com funcionalidades interativas para o site Bagulhos Sinistros
// Implementa manipulação DOM e eventos para interações dinâmicas

// Função 1: Manipulação DOM - Altera texto e estilo de elemento existente
// Busca o parágrafo na sidebar superior e alterna seu texto e cor
function changeChallengeText() {
  const challengeText = document.querySelector(".top-sidebar p"); // Seleciona o elemento
  if (challengeText && challengeText.textContent === "Vai tentar?") {
    challengeText.textContent = "Você ousou!"; // Muda o texto
    challengeText.style.color = "#ff0000"; // Muda a cor para vermelho
  } else if (challengeText) {
    challengeText.textContent = "Vai tentar?"; // Volta ao texto original
    challengeText.style.color = ""; // Remove a cor
  }
}

// Função 2: Manipulação DOM - Cria e adiciona novo elemento à página
// Cria um parágrafo com mensagem e o insere na seção principal
function createMessageElement() {
  const message = document.createElement("p"); // Cria novo elemento <p>
  message.textContent = "Bem-vindo ao mundo invertido!"; // Define o texto
  message.style.color = "#ff0000"; // Cor vermelha
  message.style.fontSize = "20px"; // Tamanho da fonte
  message.style.textAlign = "center"; // Alinhamento central
  message.id = "welcome-message"; // ID para identificação
  document.querySelector(".main-content").appendChild(message); // Adiciona à página
}

// Função 3: Adiciona comportamento - Animação visual no logo
// Aumenta temporariamente o tamanho do logo para efeito de clique
function animateLogo() {
  const logo = document.getElementById("logo"); // Busca o logo por ID
  logo.style.transform = "scale(1.1)"; // Aumenta 10%
  setTimeout(() => {
    logo.style.transform = "scale(1)"; // Volta ao normal após 300ms
  }, 300);
}

// Função 4: Adiciona comportamento - Exibe informação sobre episódio
// Mostra um alerta com o nome do episódio clicado, impedindo navegação
function showEpisodeAlert(event) {
  event.preventDefault(); // Impede o link de navegar
  alert("Episódio selecionado: " + event.target.textContent); // Alerta com texto do link
}

// Função 5: Adiciona comportamento - Navegação por teclado
// Permite ir à página upside pressionando a tecla 'u'
function handleKeyPress(event) {
  if (event.key === "u") {
    // Verifica se a tecla é 'u'
    window.location.href = "intro-dev-web/upside.html"; // Redireciona
  }
}

// Seção de Eventos: Adiciona listeners após carregamento do DOM
document.addEventListener("DOMContentLoaded", function () {
  // Evento click: Muda texto do desafio (apenas na página principal)
  if (document.getElementById("main-image")) {
    // Verifica se está na index.html
    document.body.addEventListener("click", changeChallengeText);
  }

  // Evento mouseover: Cria mensagem na imagem principal
  const mainImage = document.getElementById("main-image");
  if (mainImage) {
    mainImage.addEventListener("mouseover", createMessageElement);
  }

  // Evento click: Anima o logo
  const logo = document.getElementById("logo");
  if (logo) {
    logo.addEventListener("click", animateLogo);
  }

  // Evento click: Alerta nos links de episódios
  const episodeLinks = document.querySelectorAll(".left-sidebar a");
  episodeLinks.forEach((link) => {
    link.addEventListener("click", showEpisodeAlert);
  });

  // Evento keydown: Navegação por teclado
  document.addEventListener("keydown", handleKeyPress);
});
