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
        // Reset margin and top to calculate natural height
        section.style.marginBottom = '0px';
        section.style.top = '0px';
        
        var sectionHeight = section.offsetHeight;
        if (sectionHeight > vh) {
            const overflow = sectionHeight - vh;
            section.style.top = -overflow + 'px';
            section.style.marginBottom = overflow + 'px'; // Push the next section down so it doesn't overlap early
        } else {
            section.style.top = '0px';
            section.style.marginBottom = '0px';
        }
    });
}
updateStackingTops();
window.addEventListener('resize', updateStackingTops);
