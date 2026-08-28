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


// ============ STACKING CARDS: dynamic sticky top ============
function updateStackingTops() {
    const sections = document.querySelectorAll('.stacking-section');
    const vh = window.innerHeight;
    sections.forEach(function(section) {
        var sectionHeight = section.offsetHeight;
        if (sectionHeight > vh) {
            section.style.top = -(sectionHeight - vh) + 'px';
        } else {
            section.style.top = '0px';
        }
    });
}
updateStackingTops();
window.addEventListener('resize', updateStackingTops);
