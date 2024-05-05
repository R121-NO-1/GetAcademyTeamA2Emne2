const services_section = document.getElementById("services-view");
const services_popup = document.getElementById("services-popup-view");
const services_shopping_cart_view = document.getElementById("shopping-cart-view");

function updateShopingCartView() {
    let html = /*HTML*/ `
        <div class="shopping-cart">
            <i class="fas fa-shopping-cart cart-icon"></i>
            <span class="cart-count">${model.input.shopingCart.length}</span>

            <div class="cart-tooltip" style="visibility: hidden;">
                <div class="cart-item">
                    ${shoppingCartDisplay()}
                </div>

                <div class="sub-total">
                    <span>Sub-Total:</span>
                    <span>${calculateTotalPrice()}</span>
                </div>

                <button class="checkout-btn">CHECKOUT</button>
            </div>
        </div>`;

    services_shopping_cart_view.innerHTML = html;

    const cart_icon = document.querySelector('.cart-icon');
    const cart_tooltip = document.querySelector('.cart-tooltip');

    cart_icon.addEventListener('click', () => {
        if (cart_tooltip.style.visibility === 'hidden') {
            cart_tooltip.style.visibility = 'visible';
        } else {
            cart_tooltip.style.visibility = 'hidden';
        }
    });

    document.addEventListener('click', (event) => {
        if (!cart_icon.contains(event.target) && !cart_tooltip.contains(event.target)) {
            cart_tooltip.style.visibility = 'hidden';
        }
    });
}

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

                <button type="button" class="add-to-cart-btn" id="add-to-cart-btn">LEGG I HANDLEKURV</button>
            </div>
        </div>
    </div>
    `
    services_popup.innerHTML = html;

    // når vi skyve ned menyen og klikke for å bytte til andre elementer, som vil endre all produktinformasjon.

    // felles

    const quantity_id = document.getElementById("quantity");

    //

    const service_id = document.getElementById("service");
    service_id.addEventListener('change', () => {
        changePrice(service_id.value);
        changeDescription(service_id.selectedIndex);
        showServicesRating();
    });

    const add_to_cart_btn = document.getElementById("add-to-cart-btn");
    add_to_cart_btn.addEventListener('click', () => {
        const product = model.data.ServicesProducts[service_id.selectedIndex];
        const quantity = parseInt(quantity_id.value);
        addToShoppingCart(product, quantity);
    });

    // To do: initialiser html-kode når View() funksjonen lastes inn for første gang
    changePrice(service_id.value);
    changeDescription(service_id.selectedIndex);
    addToShoppingCart(service_id.selectedIndex, quantity_id.value);
    showServicesRating();
}

function addToShoppingCart(product, quantity) {
    //console.log(product);
    //console.log(quantity);

    if (product == 0) {
        return;
    }

    const product_index = model.input.shopingCart.findIndex(item => item.name === product.name);

    //console.log(product_index);

    if (product_index !== -1) {
        model.input.shopingCart[product_index].quantity += quantity;
    } else {
        model.input.shopingCart.push({
            name: product.name,
            price: product.price,
            quantity: quantity,
            image: product.image
        });
    }

    updateShopingCartView();
}

function calculateTotalPrice() {
    const shoping_cart_list = model.input.shopingCart;
    let total_price = 0;

    shoping_cart_list.map(item => {
        total_price += item.price * item.quantity;
    });

    return total_price.toFixed(2);
}

function shoppingCartDisplay() {
    const shopping_cart_list = model.input.shopingCart.filter(item => item.quantity > 0 && item.name);
    let html = `<div class="cart-items">`;

    if (shopping_cart_list.length === 0) {
        html += `<div class="empty-cart">Ingen varer i handlekurven</div>`;
    }
    else {
        shopping_cart_list.forEach(item => {
            html += /*HTML*/ `
                <div class="cart-item">
                    <img src="${item.image}" alt="Product Image">
                    <div class="item-name">${item.name}</div>
                    <div class="item-price">${item.quantity} x ${item.price}</div>
                </div>
            `;
        });
    }

    html += `</div>`;
    return html;
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

document.addEventListener('DOMContentLoaded', function () {
    updateServicesView();
    updateServicesPopUpView();
    updateShopingCartView();
});