const about_frida = document.getElementById('about-frida-view');
const aside_view = document.getElementById('aside-view');

document.addEventListener('DOMContentLoaded', function () {
    updateAboutFridaView();
    updateAsideView();
    
 /*    updateShopingCartView();
    loadShoppingCartStorage(); */

    function updateAboutFridaView() {
        let html = /*HTML*/ `
        ${photoGridHtml()}
        ${aboutFridaHtml()}
        ${googleMapHtml()}`
        about_frida.innerHTML = html;
    }

    function photoGridHtml() {
        const introduction = model.data.aboutFrida.introduction;
        const photo_grid_images = model.data.aboutFrida.images;

        let photo_html = '';

        for (let i = 0; i < photo_grid_images.length; i++) {
            photo_html += `
                <div>
                    <img src="${photo_grid_images[i]}" alt="Photo">
                </div>
            `;
        }

        let html = `
            <p>${introduction}</p>
            <div class="photo-grid">
                ${photo_html}
            </div>
        `;

        return html;
    }

    function aboutFridaHtml() {
        const frida_location = model.data.aboutFrida.location;
        const frida_thanks_note = model.data.aboutFrida.thanksNote;
        const frida_phone = model.data.aboutFrida.telefonNumber;
        const frida_email = model.data.aboutFrida.fridaEmail;

        let html = /*HTML*/`
            <div class="about-frida-describe"> 
                <p>${frida_location}</p>
                <p>${frida_thanks_note}</p>
                <p>${frida_phone}</p>
                <p>${frida_email}</p>
            </div>
        `;

        return html;
    }

    function googleMapHtml() {
        const aside_frida_google_url = model.data.asideFrida.googleMapURL;

        let html = /*HTML*/
            `<div class="map-container">
                <iframe class="map-iframe"  
                    loading: lazy;
                    allowfullscreen: true;
                    frameborder: 0;
                    aria-hidden: false; 
                    tabindex: 0;
                    src="${aside_frida_google_url}">
                </iframe>
            </div>
        `;
        return html;
    }

    /* second view update() */

    function updateAsideView() {
        let html = /*HTML*/ `
        ${porttraitHtml()}
        <h2>Frida Foto</h2>
        ${fridaAboutServicesHtml()}
        `;

        aside_view.innerHTML = html;
    }

    function porttraitHtml() {
        const frida_porttrait_img = model.data.asideFrida.porttraitSrc;

        let html = /*HTML*/ `
            <img src="${frida_porttrait_img}" alt="Photo of Frida">
        `;

        return html;
    }

    function fridaAboutServicesHtml() {
        const frida_aside_services = model.data.asideFrida.services;
        const services = frida_aside_services.map(src =>
            `<li>${src}</li>`
        ).join('');


        let html = /*HTML*/ `
        <ul class="services-offered">
            ${services}
        </ul>`;

        return html;
    }
});