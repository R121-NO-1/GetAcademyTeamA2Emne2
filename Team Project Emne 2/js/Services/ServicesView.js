const services_section = document.getElementById("services-view");
const services_popup = document.getElementById("services-popup-view");

document.addEventListener('DOMContentLoaded', function () {
    updateServicesView();
    updateServicesPopUpView();

    function updateServicesView() {
        const generate_rating = getRandomRating(2.5, 4.5);

        let html = /*HTML*/ `
        <div class="product-grid">
            <div class="product-item">
                <img src="../Images/bilde1.jpg" alt="product">
                <h3 class="product-name">Beautifull weddings</h3>
               
                <div class="product-rating">
                    ${displayRatingHtml(generate_rating)}
                </div>
         
                <div class="product-price">
                    <span class="product-hours">4 timer</span>
                </div>

                <button type="button" id="add-to-cart" class="add-to-cart">legg til bestillinger</button>
            </div>
        </div>`

        services_section.innerHTML = html;
    }

    function updateServicesPopUpView() {
        let html = /*HTML*/ `
        <div id="product-popup" class="product-popup">
            <div class="product-popup-content">
                <span id="close-btn" class="close-btn"><i class="fas fa-times"></i></span>
                <img src="../Images/WEDDING.png" alt="wedding">
                <div class="product-details">
                    <h2>Produkt Navn: Portrettfotografering </h2>
                    <p>Description: Dette produktet håndterer Portrettfotografering, dette handler om at bildene skal
                        være jo stor som du vil, men altså fokusert på kun et subjekt, dette skal kunne vise fram ditt
                        valgte subjekt når vi møtes på Foto studioet.</p>
                    <p class="rating"><i class="fa fa-star"></i></p>
                    <div id="price"></div>
                    <!-- <p class="product-code">Product Code: 470951</p> -->
                    <p class="stock-status">Stock <span class="in-stock">In Stock</span></p>

                    <div class="attributes">
                        <!-- attributes goes here -->
                        <label for="service">Velg tjeneste:</label>
                        <select id="service" name="service">
                            ${showServices()}
                        </select>
                    </div>

                    <div class="quantity-selector">
                        <!-- quitity selector goes here -->
                        <label for="quantity">Antall Stk:</label>
                        <input type="number" id="quantity" name="quantity" min="1" value="1">
                    </div>

                    <button type="button" class="add-to-cart-btn">LEGG I HANDLEKURV</button>
                </div>
            </div>
        </div>
        `
        services_popup.innerHTML = html;
        
    }


    function showServices() {
        const model_products = model.data.ServicesProducts;

        let html = /*HTML*/ ``;
        
        model_products.forEach(element => {
            html += `
                <option value="${element.price}">${element.name}</option>
            `
        });

        return html;
    }

    const service_id = document.getElementById("service");
    service_id.addEventListener('change', () => {
        changeProducts();
    });

    // Levi
    // To do: Trenger å fikse at når vi laster produktpopup-siden for første gang vises ikke prisen
    // improvement !!

    function changeProducts() {
        const price = document.getElementById("price");
        const services_products = model.data.ServicesProducts;

        let priceHtml = ``;

        console.log(service_id.value);

        services_products.forEach((model_services, index) => {

            if (model_services.price == service_id.value) {
                priceHtml = `
                    <p class="price">
                        Kr ${model_services.price} <span class="original-price"> Kr ${model_services.originalPrice} </span>
                    </p>
                `
            }
        });
        
        price.innerHTML = priceHtml;




        /*const service = document.getElementById("service");
        const price = document.getElementById("price");

        const model_products = model.data.ServicesProducts;

        console.log(price.textContent);
        
        service.addEventListener('change', () => {
            model_products.map(element => {
                price.textContent = `Kr ${element.price}`;
            });
        });*/
    }

    function getRandomRating(minRating, maxRating) {
        let half_rating = 0.5;
        let range = maxRating - minRating + half_rating;

        let rand_rating = Math.random() * range;
        let rand_number = rand_rating + minRating;

        // avrunding til hele tall
        let rounded_number = rand_number.toFixed(1);

        let final_rating = parseFloat(rounded_number);
        return final_rating
    }

    function displayRatingHtml(rating) {
        const star_full = Math.floor(rating);
        let star_half;

        if (rating % 1 >= 0.5) {
            star_half = true;
        }
        else {
            star_half = false;
        }

        let ratingHtml = ``;


        for (let i = 0; i < star_full; i++) {
            ratingHtml += /*HTML*/ `
                <i class="fa fa-star"></i>
            `
        }

        if (star_half == true) {
            ratingHtml += /*HTML*/ `
                <i class="fa fa-star-half"></i>            
             `
        }


        //console.log(rating);

        let html = /*HTML*/ `
            <div class="product-rating">
                ${ratingHtml}
            </div>
        `

        return html;
    }
});