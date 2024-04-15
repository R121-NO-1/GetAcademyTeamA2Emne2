    const app = document.getElementById('contact-info');

    function updateView() {
        let contactForm = '';

        contactForm = /* "contact-info" HTML*/`
            <h2>Forespørsler håndteres innen én time</h2>
            <p> Bruk skjema, send mail eller ring oss direkte. 
            Alle forespørsler håndteres innen en time i arbeidstiden vår (man-fre, 8-16). </p>
            <p> Telefon: +47 4568 88 888 </p> 

            <p>${model.data.contactInfo.email}</p>
        `;
        
        app.innerHTML = contactForm;
   
   
   
   
    }



    





    document.addEventListener('DOMContentLoaded', function() {
        updateView();
    })
