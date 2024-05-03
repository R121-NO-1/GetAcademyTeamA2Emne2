const homePage = document.getElementById("welcomeSection");
const homePageGallery = document.getElementById("gallerySection");

function updateHomePage() {
    let html = /*HTML*/ `
    ${welcomeHtml()}
    `
    homePage.innerHTML = html;
}

function welcomeHtml() {
    const welcome = model.data.homePage.welcome;
    const photograph = model.data.homePage.fotograph;

    const description = model.data.homePage.description;
    let describe_html = description.map(src =>
        `<p>${src}</p>`
    ).join('');

    let html = /*HTML*/ `
        <section class="welcome-section">
            <h1>${welcome}</h1>
            <h2>${photograph}</h2>

            ${describe_html}
            ${viewmoreHtml()}
        </section>
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
                <img src="../Images/bilde1.jpg" alt="To gamle personener som henger ut" class="thumbnail" data-index="0">
            </div>
            <div class="gallery-item">
                <img src="../Images/bilde2.jpg" alt="en dame på stranda med solbriller" class="thumbnail" data-index="1">
            </div>
            <div class="gallery-item">
                <img src="../Images/bilde3.jpg" alt="et stort glass byggning" class="thumbnail" data-index="2">
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
