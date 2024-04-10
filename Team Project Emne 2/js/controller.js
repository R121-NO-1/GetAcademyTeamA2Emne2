document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
        
            console.log('Clicked on image:', item.querySelector('img').src);
        });
    });
});