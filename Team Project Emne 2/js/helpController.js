// close details
function closeDetails(index, details) {
    for (let i = 0; i < details.length; ++i) {
        if (i === index) { 
            continue; 
        }

        details[i].open = false;
    }
}

// open details
function openDetails() {
    const details = document.querySelectorAll('details');

    for (let i = 0; i < details.length; ++i) {
        details[i].addEventListener('toggle', function() {
            if (details[i].open) {
                closeDetails(i, details);
            }
        });
    }
}

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    openDetails();
});