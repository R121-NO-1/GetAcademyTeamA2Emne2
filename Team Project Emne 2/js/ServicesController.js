document.addEventListener('DOMContentLoaded', function() {
    const expandButtons = document.querySelectorAll('.expandButton');

    expandButtons.forEach(button => {
        button.addEventListener('click', function() {
            const expandedContent = button.nextElementSibling;
            if (expandedContent.style.display === 'none' || expandedContent.style.display === '') {
                expandedContent.style.display = 'block';
                button.classList.add('large'); // Add the 'large' class to make the button bigger
                button.textContent = 'Collapse View';
            } else {
                expandedContent.style.display = 'none';
                button.classList.remove('large'); // Remove the 'large' class to revert to original size
                button.textContent = 'Expand View';
            }
        });
    });

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