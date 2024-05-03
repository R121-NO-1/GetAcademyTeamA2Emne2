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
                    <p id="description"></p>

                    <div id="rating"></div>
                    <div id="price"></div>
                    <p class="stock-status">På Lager: <span class="in-stock"> In Stock</span></p>

                    <div class="attributes">
                        <!-- attributes goes here -->
                        <label for="service">Velg tjeneste:</label>
                        <select id="service" name="service">
                            ${showServicesOptionTag()}
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

        // når vi skyve ned menyen og klikke for å bytte til andre elementer, som vil endre all produktinformasjon.
        const service_id = document.getElementById("service");
        service_id.addEventListener('change', () => {
            changePrice(service_id.value);
            changeDescription(service_id.selectedIndex);
            showServicesRating();
        });

        // To do: initialiser html-kode når View() funksjonen lastes inn for første gang
        changePrice(service_id.value);
        changeDescription(service_id.selectedIndex);
        showServicesRating();
    }

    function showServicesOptionTag() {
        const model_products = model.data.ServicesProducts;
        let html = ``;
        model_products.forEach(element => {
            html += `<option value="${element.price}">${element.name}</option>`
        });
        return html;
    }

    function showServicesRating() {
        const rating_id = document.getElementById("rating");
        const rating = getRandomRating(2.5, 5.0);
        
        let ratingHtml = `
                <p class="rating">
                    ${displayRatingHtml(rating)}
                </p>
        `;

        rating_id.innerHTML = ratingHtml;
    }

    function changePrice(value) {
        const price = document.getElementById("price");
        const services_products = model.data.ServicesProducts;

        let priceHtml = ``;

        services_products.forEach(model_services => {
            priceHtml = model_services.price == value ? 
                                    `<p class="price">Kr ${model_services.price} 
                                        <span class="original-price"> Kr${model_services.originalPrice}</span>
                                    </p` : priceHtml;
        });

        price.innerHTML = priceHtml;
    }

    function changeDescription(index) {
        const description = document.getElementById("description");
        const services_products = model.data.ServicesProducts;

        let descriptionHtml = ``;

        services_products.forEach((dsc, dscIndex) => {
            descriptionHtml = dscIndex == index ? `<p>${dsc.description}</p>` : descriptionHtml;
            //console.log('array prices ' + dsc.price);
            //console.log('select index ' + index);
        });

        description.innerHTML = descriptionHtml;
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
        let star_half = (rating % 1 >= 0.5) ? true : false;
        let ratingHtml = ``;

        for (let i = 0; i < star_full; i++) {
            ratingHtml += /*HTML*/ `<i class="fa fa-star"></i>`
        }

        if (star_half == true) {
            ratingHtml += /*HTML*/ `<i class="fa fa-star-half"></i>`
        }

        //console.log(rating);

        let html = /*HTML*/ `
            ${ratingHtml}
        `
        return html;
    }
});