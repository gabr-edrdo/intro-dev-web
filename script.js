// Muda texto do desafio ao clicar
function changeChallengeText() {
  const challengeText = document.querySelector(".top-sidebar p");
  if (challengeText && challengeText.textContent === "Vai tentar?") {
    challengeText.textContent = "Você ousou!";
    challengeText.style.color = "#ff0000";
  } else if (challengeText) {
    challengeText.textContent = "Vai tentar?";
    challengeText.style.color = "";
  }
}

// Cria mensagem ao passar mouse na imagem
function createMessageElement() {
  const message = document.createElement("p");
  message.textContent = "Bem-vindo ao mundo invertido!";
  message.style.color = "#ff0000";
  message.style.fontSize = "20px";
  message.style.textAlign = "center";
  message.id = "welcome-message";
  document.querySelector(".main-content").appendChild(message);
}

// Anima logo ao clicar
function animateLogo() {
  const logo = document.getElementById("logo");
  logo.style.transform = "scale(1.1)";
  setTimeout(() => {
    logo.style.transform = "scale(1)";
  }, 300);
}

// Mostra alerta ao clicar em episódio
function showEpisodeAlert(event) {
  event.preventDefault();
  alert("Episódio selecionado: " + event.target.textContent);
}

// Vai pra upside ao apertar 'u'
function handleKeyPress(event) {
  if (event.key === "u") {
    window.location.href = "/upside.html";
  }
}

// Eventos
document.addEventListener("DOMContentLoaded", function () {
  document.body.addEventListener("click", changeChallengeText);

  const mainImage = document.getElementById("main-image");
  if (mainImage) {
    mainImage.addEventListener("mouseover", createMessageElement);
  }

  const logo = document.getElementById("logo");
  if (logo) {
    logo.addEventListener("click", animateLogo);
  }

  const episodeLinks = document.querySelectorAll(".left-sidebar a");
  episodeLinks.forEach((link) => {
    link.addEventListener("click", showEpisodeAlert);
  });

  document.addEventListener("keydown", handleKeyPress);
});
