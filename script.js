// Seleciona o botão de hambúrguer e os links
const menuToggle = document.getElementById("menu-toggle");
const navbarLinks = document.getElementById("navbar-links");

// Adiciona o evento de clique
menuToggle.addEventListener("click", () => {
  navbarLinks.classList.toggle("active"); // Alterna a classe 'active'
});
