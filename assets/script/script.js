// Navbar
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})

// Glassmorphism de la navbar
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
    navbar.classList.add("glassmorphism");
    } else {
    navbar.classList.remove("glassmorphism");
    }
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