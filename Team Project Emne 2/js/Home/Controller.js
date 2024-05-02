

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    
    const galleryOverlay = document.querySelector('.gallery-overlay');
    const gallerySlides = document.querySelectorAll('.gallery-slides img');
    const viewMoreButton = document.getElementById('viewMore');

    viewMoreButton.addEventListener('click', function() {
        window.location.href = '../html/services.html';
    });

    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const index = parseInt(thumbnail.getAttribute('data-index'));
            currentSlide = index;
            toggleThumbnailSize(thumbnail); // Toggle size
            showGalleryOverlay();
        });
    });

    document.querySelector('.close-btn').addEventListener('click', () => {
        galleryOverlay.style.display = 'none';
    });

    document.querySelector('.prev-btn').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + gallerySlides.length) % gallerySlides.length;
        showSlide();
    });

    document.querySelector('.next-btn').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % gallerySlides.length;
        showSlide();
    });

    function toggleThumbnailSize(thumbnail) {
        thumbnail.classList.toggle('large'); // Toggle 'large' class
    }

    function showGalleryOverlay() {
        galleryOverlay.style.display = 'block';
        showSlide();
    }

    function showSlide() {
        gallerySlides.forEach(slide => slide.style.display = 'none');
        gallerySlides[currentSlide].style.display = 'block';
    }

    window.addEventListener('click', (event) => {
        if (event.target === galleryOverlay) {
            galleryOverlay.style.display = 'none';
        }
    });
});




    



