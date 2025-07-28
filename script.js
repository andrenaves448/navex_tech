// Troca de palavras no título
const palavras = ["websites", "sistemas", "soluções", "portfólios"];
let index = 0;

setInterval(() => {
  document.getElementById("palavra-dinamica").textContent = palavras[index];
  index = (index + 1) % palavras.length;
}, 2000);

window.addEventListener("DOMContentLoaded", () => {
  // Animação de fundo com partículas
  VANTA.NET({
    el: "#hero",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x00ffff,
    backgroundColor: 0x0d0d0d,
    points: 12.0,
    maxDistance: 20.0,
    spacing: 15.0
  });

  // Animação dos logos ao rolar a página
  const logos = document.querySelectorAll(".portfolio-logos img");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("logo-visible");
        entry.target.classList.remove("logo-hidden");
      }
    });
  }, {
    threshold: 0.1
  });

  logos.forEach(logo => {
    logo.classList.add("logo-hidden"); // aplica classe inicial
    observer.observe(logo);
  });
});
 // Animação de qualquer conteúdo ao rolar a página
 const elementosOcultos = document.querySelectorAll(".scroll-hidden");

 const observerConteudo = new IntersectionObserver(entries => {
   entries.forEach(entry => {
     if (entry.isIntersecting) {
       entry.target.classList.add("scroll-visible");
       observerConteudo.unobserve(entry.target); // uma vez visível, não reverte
     }
   });
 }, {
   threshold: 0.1
 });

 elementosOcultos.forEach(el => {
   observerConteudo.observe(el);
 });

 setTimeout(() => {
  document.querySelectorAll('.scroll-hidden').forEach(el => {
    const bounding = el.getBoundingClientRect();
    if (bounding.top < window.innerHeight && bounding.bottom >= 0) {
      el.classList.add('scroll-visible');
    }
  });
}, 500);

// Mostra o botão do WhatsApp quando o usuário rolar até a seção de contato
window.addEventListener('scroll', function () {
  const botao = document.querySelector('.whatsapp-button');
  const contato = document.querySelector('#contato');

  if (!botao || !contato) return;

  const contatoTop = contato.getBoundingClientRect().top;

  if (contatoTop < window.innerHeight - 100) {
    botao.classList.add('show');
  } else {
    botao.classList.remove('show');
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const telefoneInput = document.getElementById("telefone");
  const formulario = document.querySelector(".formulario-contato");
  const erroTelefone = document.getElementById("erro-telefone");

  // Aplica a máscara
  telefoneInput.addEventListener("input", function (e) {
    let valor = e.target.value.replace(/\D/g, ""); // Só números

    if (valor.length > 11) valor = valor.slice(0, 11);

    if (valor.length <= 10) {
      valor = valor.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else {
      valor = valor.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    }

    e.target.value = valor;
  });

  // Valida antes de enviar
  formulario.addEventListener("submit", function (e) {
    const numeroLimpo = telefoneInput.value.replace(/\D/g, "");

    if (numeroLimpo.length < 10 || numeroLimpo.length > 11) {
      e.preventDefault(); // Impede envio
      erroTelefone.style.display = "block";
    } else {
      erroTelefone.style.display = "none";
    }
  });
});