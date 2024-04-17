document.addEventListener('DOMContentLoaded', function() {
    const app = document.getElementById('contact-info');

    function contactInfoView() {
        const email = model.data.contactInfo.email;
        const phone = model.data.contactInfo.phone_Number;

        let contactForm = `
            <h2>Forespørsler håndteres innen én time</h2>
            <p> Bruk skjema, send mail eller ring oss direkte. 
            Alle forespørsler håndteres innen en time i arbeidstiden vår (man-fre, 8-16). </p>
            <p>${phone}</p>
            <p>${email}</p>
        `;
        
        app.innerHTML = contactForm;
    }

   contactInfoView();
});
