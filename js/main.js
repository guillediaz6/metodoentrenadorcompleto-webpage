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
        // Clean up any old margin-bottom left from previous buggy script
        section.style.marginBottom = '';
        
        const sectionHeight = section.offsetHeight;
        if (sectionHeight > vh) {
            // Push the sticky top up so the bottom of the section stops at the bottom of the screen
            section.style.top = -(sectionHeight - vh) + 'px';
        } else {
            section.style.top = '0px';
        }
    });
}

// Run initially
updateStackingTops();

// Run when window resizes
window.addEventListener('resize', updateStackingTops);

// Run when all images and resources finish loading (crucial for correct height calculation)
window.addEventListener('load', updateStackingTops);

// Run repeatedly for a short time in case fonts or dynamic content shift the layout
setTimeout(updateStackingTops, 500);
setTimeout(updateStackingTops, 1500);
setTimeout(updateStackingTops, 3000);
