const homePage = document.getElementById("HomePage");
const homePageGallery = document.getElementById("gallerySection");

function updateHomePage() {
    let html = /*HTML*/ `
    ${welcomeHtml()}
    ${descriptionHtml()}
    ${viewmoreHtml()}
    `
    homePage.innerHTML = html;
}

function welcomeHtml() {
    const welcome = model.data.homePage.welcome;
    const photograph = model.data.homePage.fotograph;

    let html = /*HTML*/ `
        <h1 style="color:black">${welcome}</h1>
        <p class="welcome-text">${photograph}</p>
    `;

    return html;
}

function descriptionHtml() {
    const description = model.data.homePage.description;
    let html = description.map(src =>
        `<div class="description">
            <p>${src}</p>
        </div>`
    ).join('');

    return html;
}

function viewmoreHtml() {
    const viewmore = model.data.homePage.viewmore;
    let html =  /*HTML*/ `
        <button id="viewMore">${viewmore}</button>
    `
    return html;
}

function updateHomePageGallery() {
    let html = /*HTML*/ `
        <div class="gallery">
            <div class="gallery-item">
                <img src="../Images/bilde1.jpg" alt="Image 1" class="thumbnail" data-index="0">
            </div>
            <div class="gallery-item">
                <img src="../Images/bilde2.jpg" alt="Image 2" class="thumbnail" data-index="1">
            </div>
            <div class="gallery-item">
                <img src="../Images/bilde3.jpg" alt="Image 3" class="thumbnail" data-index="2">
            </div>
        </div>

        <div class="gallery-overlay">
            <span class="close-btn">&times;</span>
            <div class="gallery-slides">
                <img src="../Images/bilde1.jpg" alt="Image 1">
                <img src="../Images/bilde2.jpg" alt="Image 2">
                <img src="../Images/bilde3.jpg" alt="Image 2">
            </div>
            <button class="prev-btn">&#10094;</button>
            <button class="next-btn">&#10095;</button>
        </div>
    `
    homePageGallery.innerHTML = html;
}

function galleryHtml() {
    let html = /*HTML*/ ``;
    
}

document.addEventListener('DOMContentLoaded', function () {
    updateHomePage();
    updateHomePageGallery();
});
