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

document.querySelectorAll('.slider-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault(); // Evita o comportamento padrão de navegação
    
      const targetId = this.getAttribute('href').substring(1); // Pega o ID da âncora
      const targetElement = document.getElementById(targetId); // Seleciona o elemento alvo

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth', // Aplica o efeito de rolagem suave
          block: 'nearest', // Alinha o item ao mais próximo
        });
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const linkContato = document.getElementById('link-contato');
    const asideContato = document.getElementById('contato');
    const pageTop = document.getElementById('body-wrapper');
  
    linkContato.addEventListener('click', function(e) {
      e.preventDefault(); // previne a ação padrão da âncora
  
      // Faz o scroll suave até o aside
      pageTop.scrollIntoView({ behavior: 'smooth' });
  
      asideContato.classList.add('blink-aside');
      asideContato.addEventListener('animationend', function() {
        asideContato.classList.remove('blink-aside');
      }, { once: true });
      
    });
  });


  