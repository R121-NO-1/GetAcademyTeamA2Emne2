const services_section = document.getElementById("services-view");

document.addEventListener('DOMContentLoaded', function () {
    updateServicesView();

    function updateServicesView() {
        let html = /*HTML*/ `
        <div class="services-section">
            <h2>VÅRE TJENESTER</h2>
            <h1>Vi tilbyr de beste og mest profesjonelle tjenester</h1>

            <div class="services-gallery">
                <div class="service-item">
                    <img src="../Images/WEDDING.png" alt="wedding" class="service-image">
                    <div class="overlay">
                        <div class="text">wedding</div>
                    </div>
                </div>
        

                <div class="service-item">
                    <img src="../Images/WEDDING2.png" alt="wedding" class="service-image">
                    <div class="overlay">
                        <div class="text">Landescape</div>
                    </div>
                </div>
        

                <div class="service-item">
                    <img src="../Images/WEDDING3.png" alt="wedding" class="service-image">
                    <div class="overlay">
                        <div class="text">editorial</div>
                    </div>
                </div>

                <div class="service-item">
                    <img src="../Images/WEDDING4.png" alt="wedding" class="service-image">
                    <div class="overlay">
                        <div class="text">editorial</div>
                    </div>
                </div>
            </div>
        </div>
        `
        services_section.innerHTML = html;
    }
});