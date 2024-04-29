const services_section = document.getElementById("services-view");
document.addEventListener('DOMContentLoaded', function () {
    updateServicesView();

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