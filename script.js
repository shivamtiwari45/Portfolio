// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Dark mode toggle
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  localStorage.setItem('darkMode', document.body.classList.contains("dark"));
});
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark');
  toggleBtn.textContent = "☀️";
}

// Fade-in animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.section, .project, .skills-container div').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Particles.js setup
particlesJS('particles-js', {
  particles: {
    number: { value: 100 },
    color: { value: "#0ff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: { speed: 1.5 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 100 },
      push: { quantity: 4 }
    }
  }
});

// Click sound
const clickSound = document.getElementById('clickSound');
document.querySelectorAll('#contact a').forEach(btn => {
  btn.addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});
