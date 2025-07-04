// Animación de entrada de secciones al hacer scroll
const sections = document.querySelectorAll('.section');
sections.forEach(section => section.classList.add('visible'));
const showSection = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
};
const observer = new IntersectionObserver(showSection, { threshold: 0.2 });
sections.forEach(section => {
  observer.observe(section);
});

// Tooltip para habilidades
document.querySelectorAll('.skills-list li').forEach(li => {
  li.setAttribute('tabindex', '0');
  li.addEventListener('mouseenter', showTooltip);
  li.addEventListener('focus', showTooltip);
  li.addEventListener('mouseleave', hideTooltip);
  li.addEventListener('blur', hideTooltip);
});

function showTooltip(e) {
  const oldTooltip = e.target.querySelector('.tooltip');
  if (oldTooltip) oldTooltip.remove();
  const skill = e.target.textContent;
  const tooltip = document.createElement('span');
  tooltip.className = 'tooltip';
  tooltip.textContent = `¡Habilidad en ${skill}!`;
  e.target.appendChild(tooltip);
}
function hideTooltip(e) {
  const tooltip = e.target.querySelector('.tooltip');
  if (tooltip) tooltip.remove();
}

// Animación de clic en enlaces sociales
document.querySelectorAll('.social-links a').forEach(a => {
  a.addEventListener('click', e => {
    a.classList.add('clicked');
    setTimeout(() => a.classList.remove('clicked'), 300);
  });
});

const proyectosData = [
  {
    id: 1,
    titulo: "Sistema de simulación de envío de datos entre diferentes capas",
    descripcion: "Aplicación que permite visualizar el funcionamiento de las capas del modelo OSI.",
    tecnologias: "Java",
    imagen: "https://raw.githubusercontent.com/leodamac/Proyecto-Redes/main/Grupo7_RedesDeDatos/src/main/resources/tcpip.jpg",
    enlace: "https://github.com/leodamac/Proyecto-Redes"
  },
  {
    id: 2,
    titulo: "Sistema de Marcación de Asistencia",
    descripcion: "Plataforma para gestionar asistencias.",
    tecnologias: "Firebase, TypeScript, React, HTML, CSS",
    imagen: "https://private-user-images.githubusercontent.com/105889369/443815553-aaedf306-183d-405d-a0d0-ada5f48f2296.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDc4NTM5NjUsIm5iZiI6MTc0Nzg1MzY2NSwicGF0aCI6Ii8xMDU4ODkzNjkvNDQzODE1NTUzLWFhZWRmMzA2LTE4M2QtNDA1ZC1hMGQwLWFkYTVmNDhmMjI5Ni5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTIxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUyMVQxODU0MjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wYTBiNmE4YTAxY2M4MGJlYjAwNzEzNzcxYjY0ZmZiMjMyMmY3YTM1ODUxMTE5ODUyNTMyYWY4NzhiYmU3ZDIwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.QZX9wz18Ej9pfNTiro0rmpWb2rDywaYtWXvejP3QhZA",
    enlace: "https://github.com/leodamac/Voluntariado"
  },
  {
    id: 3,
    titulo: "Página para el aprendizaje de los tiempos verbales en inglés",
    descripcion: "Permite aprender los tiempos verbales en inglés.",
    tecnologias: "TypeScript, React, HTML, CSS",
    imagen: "https://github.com/user-attachments/assets/0822681b-52a1-4d89-a194-cdfaa5cd4ba1",
    enlace: "https://github.com/leodamac/english-class"
  }
];

document.querySelectorAll('.proyecto-item').forEach(item => {
  item.addEventListener('click', function() {
    const id = parseInt(this.getAttribute('data-id'));
    const data = proyectosData.find(p => p.id === id);
    if (data) {
      document.getElementById('modalBody').innerHTML = `
        <h3>${data.titulo}</h3>
        <p><strong>Descripción:</strong> ${data.descripcion}</p>
        <p><strong>Tecnologías:</strong> ${data.tecnologias}</p>
        <img src="${data.imagen}" alt="${data.titulo}" style="max-width:100%;border-radius:8px;margin:10px 0;">
        <p><a href="${data.enlace}" target="_blank">Ver proyecto <i class="fas fa-arrow-up-right-from-square"></i></a></p>
      `;
      document.getElementById('modalProyecto').style.display = 'flex';
    }
  });
});

document.querySelector('.close-modal').onclick = function() {
  document.getElementById('modalProyecto').style.display = 'none';
};
window.onclick = function(event) {
  const modal = document.getElementById('modalProyecto');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const tipoContacto = formData.get('tipo-contacto');
    let mensaje = "¡Gracias por tu mensaje!";
    
    if (tipoContacto) {
        const contactoValor = formData.get(tipoContacto);
        if (contactoValor) {
            mensaje += ` Te contactaré a través de ${tipoContacto}: ${contactoValor}`;
        }
    }
    
    document.getElementById('formMsg').textContent = mensaje;
    document.getElementById('formMsg').style.color = "#27ae60";
    this.reset();
});