// ==========================================
// NAVBAR: SCROLL Y MENÚ MÓVIL
// ==========================================

const navbar = document.querySelector('.navbar');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ==========================================
// SCROLL SUAVE
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// ANIMACIONES AL HACER SCROLL
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.solution-card, .service-card, .process-step, .project-card, .faq-item, .about-card, .section-header').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ==========================================
// CONSOLA
// ==========================================

console.log('%c🚀 MF DevStudio', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%c¿Necesitas una web profesional? Escríbenos por WhatsApp 💬', 'font-size: 14px; color: #64748b;');