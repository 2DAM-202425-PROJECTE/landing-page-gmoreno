// main.js

const scrollToTopButton = document.getElementById('scrollToTop');

// Mostrar/ocultar el botón al hacer scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) { // Muestra el botón después de 300px de desplazamiento
    scrollToTopButton.classList.remove('hidden');
  } else {
    scrollToTopButton.classList.add('hidden');
  }
});

// Función para desplazarse al tope de la página con un efecto suave
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

const words = ['Full Stack Dev.', 'Software Dev.', 'Web Designer.', 'Programmer.'];
let index = 0;
const dynamicText = document.getElementById('dynamic-text');

function typeWriter() {
  if (index < words.length) {
    dynamicText.textContent = words[index];
    index++;
  } else {
    index = 0;
  }
  setTimeout(typeWriter, 2000);
}

typeWriter();

window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;

  document.querySelectorAll('.parallax-cube').forEach((cube, index) => {
    const speed = 0.5 + index * 0.15; // Ajusta la velocidad de cada cubo
    const yPosition = scrollY * speed;

    cube.style.transform = `translateY(-${yPosition}px)`; // Mueve el cubo hacia arriba
  });
});