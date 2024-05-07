document.addEventListener('DOMContentLoaded', function () {
    const contact_info = document.getElementById('contact-info');
    const contact_form = document.getElementById('contact-form');

    updateContactInfoView();
    UpdateContactFormView();
    
/*     updateShopingCartView();
    loadShoppingCartStorage(); */

    function updateContactInfoView() {
        const email = model.data.contactInfo.email;
        const phone = model.data.contactInfo.phone_Number;

        let contactForm = `
            <h2>Forespørsler håndteres innen én time</h2>
            <p> Bruk skjema, send mail eller ring oss direkte. 
            Alle forespørsler håndteres innen en time i arbeidstiden vår (man-fre, 8-16). </p>
            <p>${phone}</p>
            <p>${email}</p>
        
            
        `;

        contact_info.innerHTML = contactForm;
    }

    function UpdateContactFormView() {
        let contactForm = `
        <label for="inquiry">Hva kan vi hjelpe deg med?</label>
        <select name="inquiry" id="inquiry">
            <option value="general"> Generelt </option>
            <option value="kundeservice"> Kunde Service </option>
            <option value="price"> Flere Spørsmål </option>
        </select>
     
        <label for="details"> Utdyp med et par setninger: </label>
        <textarea id="details" name="details" rows="4"></textarea>
     
        <label for="firstName">Fornavn:</label>
        <input type="text" id="firstName" name="firstName">
     
        <label for="LastName">Etternavn:</label>
        <input type="text" id="LastName" name="LastName">
     
        <label for="email">Epost:</label>
        <input type="text" id="email" name="email">
     
        <button type="submit">Send forespørsel</button>
        
        
        `;
        contact_form.innerHTML = contactForm;
    }

});
