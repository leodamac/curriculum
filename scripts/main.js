// Animación de entrada de secciones al hacer scroll
const sections = document.querySelectorAll('.section');
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