// Prevenir el scroll normal y permitir solo el scroll por diapositiva
let isScrolling = false;
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
console.log(totalSlides);

// Asegurar que la página comience en la primera diapositiva al cargar
window.addEventListener('load', function() {
    window.scrollTo({
        top: 0,
        behavior: 'instant'
    });
    currentSlide = 0;
});

function scrollToSlide(index) {
    if (index >= 0 && index < totalSlides) {
        currentSlide = index;
        window.scrollTo({
            top: index * 100 * window.innerHeight / 100,
            behavior: 'smooth'
        });
    }
}

document.addEventListener('wheel', function(e) {
    if (isScrolling) return;
    
    if (e.deltaY > 0 && currentSlide < totalSlides - 1) {
        scrollToSlide(currentSlide + 1);
    } else if (e.deltaY < 0 && currentSlide > 0) {
        scrollToSlide(currentSlide - 1);
    }
    
    isScrolling = true;
    setTimeout(() => isScrolling = false, 500);
});

// Navegación con teclado
document.addEventListener('keydown', function(e) {
    if (isScrolling) return;
    
    switch(e.key) {
        case 'ArrowDown':
        case ' ':
            e.preventDefault();
            if (currentSlide < totalSlides - 1) {
                scrollToSlide(currentSlide + 1);
            }
            break;
        case 'ArrowUp':
        case 'a':
            e.preventDefault();
            if (currentSlide > 0) {
                scrollToSlide(currentSlide - 1);
            }
            break;
        case 'ArrowLeft':
            e.preventDefault();
            if (currentSlide > 0) {
                scrollToSlide(currentSlide - 1);
            }
            break;
        case 'ArrowRight':
            e.preventDefault();
            if (currentSlide < totalSlides - 1) {
                scrollToSlide(currentSlide + 1);
            }
            break;
    }
});