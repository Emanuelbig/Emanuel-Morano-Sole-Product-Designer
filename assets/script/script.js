// Preloader
// document.addEventListener("DOMContentLoaded", function() {
//     var pantallaCarga = document.getElementById("pantalla-carga");
//     var contenido = document.getElementById("contenido");
//     var isPreloaderShown = localStorage.getItem("isPreloaderShown");

//     if (!isPreloaderShown) {
//         window.addEventListener("load", function () {
//         // Ocultar la pantalla de carga después de 4 segundos + duración de la animación de expandir
//         setTimeout(function () {
//             pantallaCarga.style.display = "none";
//             contenido.style.visibility = "visible";
//         }, 7000); // 4 segundos (4000 ms) + duración de la animación de expandir (3000 ms)
//     });
//         localStorage.setItem("isPreloaderShown", true);
//     } else {
//         pantallaCarga.style.display = "none";
//         contenido.style.visibility = "visible";
//     }
// });

// Preloader
document.addEventListener("DOMContentLoaded", function() {
    var pantallaCarga = document.getElementById("pantalla-carga");
    var contenido = document.getElementById("contenido");
    var isPreloaderShown = localStorage.getItem("isPreloaderShown");

    if (!isPreloaderShown) {
        window.addEventListener("load", function () {
            // Ocultar la pantalla de carga después de 4 segundos + duración de la animación de expandir
            setTimeout(function () {
                pantallaCarga.style.display = "none";
                contenido.style.visibility = "visible";
            }, 7000); // 4 segundos (4000 ms) + duración de la animación de expandir (3000 ms)
        });
        localStorage.setItem("isPreloaderShown", true);
    } else {
        pantallaCarga.style.display = "none";
        contenido.style.visibility = "visible";
    }
});


// Navbar
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector(".navbar");

// Función para aplicar el efecto glassmorphism
function applyGlassmorphism() {
    if (window.scrollY > 0) {
        navbar.classList.add("glassmorphism");
    } else {
        navbar.classList.remove("glassmorphism");
    }
}

// Función para cambiar la apariencia al abrir o cerrar el menú
function toggleMenuAppearance() {
    navbar.classList.toggle("glassmorphism-menu-open", navLinks.classList.contains('active'));
}

// Evento de clic en el botón de menú
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    toggleMenuAppearance();
});

// Evento de desplazamiento
window.addEventListener("scroll", applyGlassmorphism);

// Evento de carga de la página
document.addEventListener('DOMContentLoaded', () => {
    applyGlassmorphism();
    toggleMenuAppearance(); // Asegura que la apariencia inicial sea correcta
});

// footer
function restartAnimation() {
    const textElement = document.querySelector('.effect__lastText');
    textElement.style.animation = 'none';
    setTimeout(() => {
    textElement.style.animation = 'typing 3s steps(15, end), blink-caret 1s step-end infinite';
    }, 100);
}
  setInterval(restartAnimation, 30000); // Reiniciar la animación cada 30 segundos
  restartAnimation(); // Iniciar la animación inicial