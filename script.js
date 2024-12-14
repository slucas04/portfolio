// Seleciona o botão de hambúrguer e os links
const menuToggle = document.getElementById("menu-toggle"); // Botão de toggle
const navbarLinks = document.getElementById("navbar-links"); // Menu de links

// Adiciona o evento de clique no botão de toggle
menuToggle.addEventListener("click", () => {
    if (navbarLinks.classList.contains("active")) {
        // Quando o menu está ativo, adiciona a animação de fechamento
        navbarLinks.classList.add("closing");
        navbarLinks.addEventListener("animationend", () => {
            navbarLinks.classList.remove("active", "closing"); // Remove as classes após a animação terminar
        }, { once: true });
    } else {
        // Quando o menu está fechado, ativa a animação de abertura
        navbarLinks.classList.add("active");
    }
});
