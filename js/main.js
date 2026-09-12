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



// ============ DEBOUNCE UTILITY ============
function debounce(fn, ms) {
    let timer;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(fn, ms);
    };
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
window.addEventListener('resize', debounce(updateStackingTops, 150));

// Run when all images and resources finish loading (crucial for correct height calculation)
window.addEventListener('load', updateStackingTops);

// Run repeatedly for a short time in case fonts or dynamic content shift the layout
setTimeout(updateStackingTops, 500);
setTimeout(updateStackingTops, 1500);
setTimeout(updateStackingTops, 3000);

// ============ TOGGLE INFO PANELS ============
document.querySelectorAll('.team__member button.btn-cta, .beneficios__btn-wrap button.btn-cta').forEach(function(btn) {
    btn.addEventListener('click', function() {
        var info = this.nextElementSibling;
        if (info && info.classList.contains('team__member-info')) {
            info.style.display = info.style.display === 'block' ? 'none' : 'block';
        }
    });
});

// ============ FAQ ACCORDION ============
document.querySelectorAll('.faq__item').forEach(function(item) {
    item.addEventListener('click', function() {
        const isOpen = item.classList.contains('active');
        // Close others
        document.querySelectorAll('.faq__item').forEach(function(other) {
            other.classList.remove('active');
            const icon = other.querySelector('.faq__icon');
            if (icon) icon.textContent = '+';
        });
        if (!isOpen) {
            item.classList.add('active');
            const icon = item.querySelector('.faq__icon');
            if (icon) icon.textContent = '−';
        }
        if (typeof updateStackingTops === 'function') {
            updateStackingTops();
        }
    });
});
