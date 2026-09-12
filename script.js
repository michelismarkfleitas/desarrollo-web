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
// ICONOS SVG INLINE (Opción 3)
// ==========================================

const iconCache = new Map();

async function loadIcon(el) {
    const url = el.dataset.icon;
    if (!url) return;

    try {
        // Cache para no repetir peticiones
        if (!iconCache.has(url)) {
            const res = await fetch(url);
            if (!res.ok) throw new Error('No se pudo cargar ' + url);
            iconCache.set(url, await res.text());
        }

        el.innerHTML = iconCache.get(url);

        // Normalizar el SVG para que herede el color del CSS
        const svg = el.querySelector('svg');
        if (svg) {
            svg.removeAttribute('fill');
            svg.removeAttribute('stroke');
            svg.removeAttribute('width');
            svg.removeAttribute('height');
            svg.setAttribute('fill', 'none');
            svg.setAttribute('stroke', 'currentColor');
            svg.setAttribute('stroke-width', '2');
            svg.setAttribute('stroke-linecap', 'round');
            svg.setAttribute('stroke-linejoin', 'round');
            svg.setAttribute('width', '100%');
            svg.setAttribute('height', '100%');
        }
    } catch (err) {
        console.error('Error cargando icono:', err);
    }
}

// Cargar todos los iconos con [data-icon]
document.querySelectorAll