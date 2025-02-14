const carousel = document.querySelector('.carousel');
const items = carousel.querySelectorAll('.carousel-item');
const itemWidth = items[0].offsetWidth + 20; // Width + margin-right
const totalWidth = itemWidth * items.length;

// Duplicate the carousel items for seamless looping
carousel.innerHTML += carousel.innerHTML;

// Set the carousel width to double the total width
carousel.style.width = `${totalWidth * 2}px`;

// Function to animate the carousel
function animateCarousel() {
  let scrollPosition = 0;

  function scroll() {
    scrollPosition -= 1; // Scroll speed (1px per frame)
    if (scrollPosition <= -totalWidth) {
      scrollPosition = 0; // Reset to the start when reaching the end
    }
    carousel.style.transform = `translateX(${scrollPosition}px)`;
    requestAnimationFrame(scroll); // Continuously call the scroll function
  }

  scroll(); // Start the animation
}

// Start the carousel animation
animateCarousel();

// Pause on hover
carousel.addEventListener('mouseenter', () => {
  carousel.style.animationPlayState = 'paused';
});

// Resume on mouse leave
carousel.addEventListener('mouseleave', () => {
  carousel.style.animationPlayState = 'running';
});