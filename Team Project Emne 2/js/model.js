const model = {
    app: {
        currentPage: "contact" // antar at "contact" er den nåværende siden; dette kan settes dynamisk
    },

    input: {
        contactPage: {
            inquiry: "", // Tilsvarer nedtrekksmenyen for type forespørsel
            details: "", // Tilsvarer tekstområdet for flere detaljer
            firstName: "", // Tilsvarer inputfeltet for fornavn
            lastName: "", // Tilsvarer inputfeltet for etternavn
            email: "" // Tilsvarer inputfeltet for e-post
        },
        // Andre sider kan ha sin egen inputmodell, f.eks. homePage, aboutPage
    },

    data: {
        user: [ // Dette kan holde registrerte brukere eller innsendinger av skjemaer
            {
                firstName: "Kompis",
                lastName: "Kompisen",
                email: "a@a.no"
            },
            {
                firstName: "Jørn",
                lastName: "Kompisen",
                email: "j@a.no"
            },
        ],

        inquiries: [ // Array for å lagre henvendelser sendt gjennom kontaktskjemaet
            // Eksempel på henvendelse
            // {
            //     type: "Generell Forespørsel",
            //     details: "Jeg ønsker mer informasjon om tjenestene deres.",
            //     user: {
            //         firstName: "Ola",
            //         lastName: "Nordmann",
            //         email: "o@n.no"
            //     }
            // }
        ],

        Services: [
            {
                name: "Service 1",
                time: "1 hour",
                price: 100,
                description: "This is a description of service 1.",
                image: "service1.jpg" // Path to the image
            },
            {
                name: "Service 2",
                time: "2 hours",
                price: 200,
                description: "This is a description of service 2.",
                image: "service2.jpg"
            },
            // ... more services ...
        ],
    }
};


//controller
// function inputthing(){
//     model1.input.contactPage.firstName = document.getElementById('input').value
//     model1.data.contactUser.email = // ?
//     let kompis = {
//             firstName: document.getElementById('input').value,
//             lastName: "",
//             email: ""
//     }
  
//     model1.data.user.push(kompis)
    
// }

