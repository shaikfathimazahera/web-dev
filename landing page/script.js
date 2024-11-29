// Nav Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
 const navList = document.getElementById('navlist');

menuToggle.addEventListener('click', function () {
    navList.classList.toggle('active');
});

// Carousel
const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
    const items = carousel.querySelector('.carousel-inner');
    let index = 0;

    // Move to the next item
    function moveCarousel() {
        index++;
        if (index >= items.children.length) {
            index = 0; // Back to the First item
        }
        items.style.transform = `translateX(-${index * 100}%)`;
    }

    // Auto-slide
    setInterval(moveCarousel, 2000);
});
