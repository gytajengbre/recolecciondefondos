// Funciones del modal (deben ser globales)
function openModal(src, title) {
  const modal = document.getElementById('medicalModal');
  const modalImg = document.getElementById('modalImage');
  const caption = document.getElementById('caption');
  
  modal.style.display = "block";
  modalImg.src = src;
  caption.textContent = title;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById('medicalModal');
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Carrusel - se ejecuta cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
  // Elementos del DOM
  const carrusel = document.querySelector('.carousel');
  const secciones = document.querySelectorAll('.section');
  const botonesNav = document.querySelectorAll('.nav-btn');
  const puntosIndicadores = document.querySelectorAll('.dot');
  
  // Índice actual
  let seccionActual = 0;
  
  // Función para mover el carrusel
  function moverCarrusel(indice) {
    // Validar índice
    if (indice < 0) indice = secciones.length - 1;
    if (indice >= secciones.length) indice = 0;
    
    seccionActual = indice;
    carrusel.style.transform = `translateX(-${indice * 100}%)`;
    actualizarNavegacion();
  }
  
  // Actualizar estado de navegación
  function actualizarNavegacion() {
    botonesNav.forEach((btn, i) => {
      btn.classList.toggle('active', i === seccionActual);
    });
    
    puntosIndicadores.forEach((punto, i) => {
      punto.classList.toggle('active', i === seccionActual);
    });
  }
  
  // Configurar botones de navegación
  botonesNav.forEach(btn => {
    btn.addEventListener('click', function() {
      const indice = parseInt(this.getAttribute('data-slide'));
      moverCarrusel(indice);
    });
  });
  
  // Configurar puntos indicadores
  puntosIndicadores.forEach(punto => {
    punto.addEventListener('click', function() {
      const indice = parseInt(this.getAttribute('data-index'));
      moverCarrusel(indice);
    });
  });
  
  // Configurar botón "AYUDAR!"
  const botonAyudar = document.querySelector('.title-with-button .gofundme-icon');
  if (botonAyudar) {
    botonAyudar.addEventListener('click', function(e) {
      e.preventDefault();
      moverCarrusel(0);
    });
  }
  
  // Navegación con teclado
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') {
      moverCarrusel(seccionActual + 1);
    } else if (e.key === 'ArrowLeft') {
      moverCarrusel(seccionActual - 1);
    }
  });
  
  // Inicializar
  moverCarrusel(0);
});

// Cerrar modal al hacer clic fuera
window.onclick = function(event) {
  const modal = document.getElementById('medicalModal');
  if (event.target === modal) {
    closeModal();
  }
}

// Cerrar modal con ESC
document.addEventListener('keydown', function(e) {
  if (e.key === "Escape") {
    closeModal();
  }
  
});
