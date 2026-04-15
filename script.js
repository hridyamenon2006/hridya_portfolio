// Hamburger menu toggle
function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('open');
}

// Contact form mock send
function sendMessage() {
  const success = document.getElementById('form-success');
  if (success) {
    success.classList.remove('hidden');
    setTimeout(() => success.classList.add('hidden'), 4000);
  }
}

// Scroll-triggered animations for cards
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-card').forEach(el => {
  el.style.animationPlayState = 'paused';
  observer.observe(el);
});

// Navbar active link highlight on scroll (optional enhancement)
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 20) {
    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
  } else {
    navbar.style.boxShadow = '0 1px 12px rgba(0,0,0,0.05)';
  }
});
