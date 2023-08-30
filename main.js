 // JavaScript para cerrar el menú después de hacer clic en un enlace
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        const navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show");
        }
      });
    });
  });

  // JavaScript para que el boton de whatsapp cargue a los 5 segundos 

  setTimeout(function() {
    let link = document.querySelector(".link-wpp");
    link.style.display = "inline-block";

    setTimeout(function() {
        link.classList.add("visible");
    }, 100); // Ajusta el tiempo de espera si es necesario
}, 5000);