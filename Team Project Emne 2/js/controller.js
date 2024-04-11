// global variables
const thumbnails = document.querySelectorAll('.thumbnail');
const galleryOverlay = document.querySelector('.gallery-overlay');
const gallerySlides = document.querySelectorAll('.gallery-slides img');
const viewMoreButton = document.getElementById('viewMore');

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;

    viewMoreButton.addEventListener('click', function() {
        window.location.href = '../html/services.html';
    });

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const index = parseInt(thumbnail.getAttribute('data-index'));
            currentSlide = index;
            toggleThumbnailSize(thumbnail); // Toggle size
            showGalleryOverlay();
        });
    });

    document.querySelector('.close-btn').addEventListener('click', hideGalleryOverlay);
    document.querySelector('.prev-btn').addEventListener('click', prevSlide);
    document.querySelector('.next-btn').addEventListener('click', nextSlide);

    function toggleThumbnailSize(thumbnail) {
        thumbnail.classList.toggle('large'); // Toggle 'large' class
    }

    function showGalleryOverlay() {
        galleryOverlay.style.display = 'block';
        showSlide();
    }

    function hideGalleryOverlay() {
        galleryOverlay.style.display = 'none';
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + gallerySlides.length) % gallerySlides.length;
        showSlide();
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % gallerySlides.length;
        showSlide();
    }

    function showSlide() {
        gallerySlides.forEach(slide => slide.style.display = 'none');
        gallerySlides[currentSlide].style.display = 'block';
    }

    // part 2 of gallery
    // joakim det er meg gjøre dette (levi)
    const expandButton = document.getElementById('expandButton');
    const expandedContent = document.getElementById('expandedContent');

    expandButton.addEventListener('click', function() {
        if (expandedContent.style.display === 'none') {
            expandedContent.style.display = 'block';
            expandButton.textContent = 'Collapse View';
        } else {
            expandedContent.style.display = 'none';
            expandButton.textContent = 'Expand View';
        }
    });
});




    



