// ============ REVEAL ON SCROLL ============
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

// ============ MOBILE NAV ============
document.querySelectorAll('.header__nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('nav').classList.remove('open');
    });
});

const hamburger = document.getElementById('hamburger');
if (hamburger) {
    hamburger.addEventListener('click', () => {
        document.getElementById('nav').classList.toggle('open');
    });
}
