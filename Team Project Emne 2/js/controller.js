
document.addEventListener('DOMContentLoaded', function() {
    const smallImages = document.querySelectorAll('.small-image');
    const galleryOverlay = document.querySelector('.gallery-overlay');
    const gallerySlides = document.querySelectorAll('.gallery-slides img');
    let currentSlide = 0;

    // Attach click event listeners to small images for opening the gallery
    smallImages.forEach((image, index) => {
        image.addEventListener('click', function() {
            currentSlide = index;
            showSlide();
            galleryOverlay.style.display = 'block';
        });
    });

    // Close gallery overlay when clicking outside the slides
    galleryOverlay.addEventListener('click', function(e) {
        if (e.target.classList.contains('gallery-overlay')) {
            galleryOverlay.style.display = 'none';
        }
    });

    // Navigate to previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + gallerySlides.length) % gallerySlides.length;
        showSlide();
    }

    // Navigate to next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % gallerySlides.length;
        showSlide();
    }

    // Show current slide
    function showSlide() {
        gallerySlides.forEach(slide => slide.style.display = 'none');
        gallerySlides[currentSlide].style.display = 'block';
    }

    // Event listeners for navigation buttons
    document.querySelector('.prev-btn').addEventListener('click', prevSlide);
    document.querySelector('.next-btn').addEventListener('click', nextSlide);

    // Show first slide initially
    showSlide();
});


    



