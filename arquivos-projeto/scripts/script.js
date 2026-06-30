// ===== Alternar tema claro/escuro =====
const botao = document.getElementById('botao-tema');
const body = document.body;

function temaEscuro(ativar) {
  if (ativar) {
    body.classList.add('escuro');
    botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    body.classList.remove('escuro');
    botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

// Persistência do tema (lê o que foi salvo antes de o usuário clicar)
const temaSalvo = localStorage.getItem('tema');
temaEscuro(temaSalvo === 'escuro');

botao.addEventListener('click', () => {
  const ativarEscuro = !body.classList.contains('escuro');
  temaEscuro(ativarEscuro);
  localStorage.setItem('tema', ativarEscuro ? 'escuro' : 'claro');
});

// ===== Scroll suave para links de navegação =====
const navLinks = document.querySelectorAll('#menu ul a.link');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    const destino = this.getAttribute('href');
    const target = document.querySelector(destino);

    if (target) {
      e.preventDefault();
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});