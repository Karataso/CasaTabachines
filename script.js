// Función para cambiar el idioma
function toggleLanguage() {
    const body = document.body;
    const isEnglish = body.classList.contains('lang-en') || (!body.classList.contains('lang-en') && !body.classList.contains('lang-es'));

    if (isEnglish) {
        body.classList.remove('lang-en');
        body.classList.add('lang-es');
    } else {
        body.classList.remove('lang-es');
        body.classList.add('lang-en');
    }
}

// Funcionalidad del carrusel de imágenes
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.carousel').forEach(carousel => {
        const images = carousel.querySelectorAll('.carousel-image');
        const dots = carousel.querySelectorAll('.dot');
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');
        let currentIndex = 0;
        let autoPlayInterval;

        // Muestra una imagen específica
        function showImage(index) {
            images.forEach(img => img.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            images[index].classList.add('active');
            dots[index].classList.add('active');
            currentIndex = index;
        }

        // Botones anterior/siguiente
        prevBtn.addEventListener('click', () => {
            resetAutoPlay();
            let newIndex = currentIndex - 1;
            if (newIndex < 0) newIndex = images.length - 1;
            showImage(newIndex);
        });

        nextBtn.addEventListener('click', () => {
            resetAutoPlay();
            let newIndex = currentIndex + 1;
            if (newIndex >= images.length) newIndex = 0;
            showImage(newIndex);
        });

        // Dots del carrusel
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                resetAutoPlay();
                showImage(index);
            });
        });

        // Auto-play
        function startAutoPlay() {
            autoPlayInterval = setInterval(() => {
                let newIndex = currentIndex + 1;
                if (newIndex >= images.length) newIndex = 0;
                showImage(newIndex);
            }, 5000);
        }

        function resetAutoPlay() {
            clearInterval(autoPlayInterval);
            startAutoPlay();
        }

        // Iniciar auto-play
        startAutoPlay();

        // Pausar auto-play al hacer hover
        carousel.addEventListener('mouseenter', () => {
            clearInterval(autoPlayInterval);
        });

        carousel.addEventListener('mouseleave', () => {
            startAutoPlay();
        });
    });
});
