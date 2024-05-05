
const model = {
    app: {
        currentPage: null, // antar at "contact" er den nåværende siden; dette kan settes dynamisk
    },

    input: {
        // null set 
        contactPage: {
            inquiry: "", // Tilsvarer nedtrekksmenyen for type forespørsel
            details: "", // Tilsvarer tekstområdet for flere detaljer
            firstName: "", // Tilsvarer inputfeltet for fornavn
            lastName: "", // Tilsvarer inputfeltet for etternavn
            email: "" // Tilsvarer inputfeltet for e-post
        },

        shopingCart: [],
    },

    data: {
        inquiries: [
            // Array for å lagre henvendelser sendt gjennom kontaktskjemaet
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

        homePage: {
            welcome: 'Velkommen til Frida Foto!',
            fotograph: 'Et profesjonelt fotografi studio basert i hjertet av Oslo',

            description: [
                'Hvor vi med stor lidenskap for kunsten å fange øyeblikk, ',
                'Tilbyr et bredt spekter av fototjenester',
                'Enten det gjelder å forevige minner gjennom portrettfotografering.',
                'Fange følelsesladde øyeblikk under bryllup,',
                'Eller skape kunstneriske verk for kommersiell bruk, ',
                'Streber vi etter å levere bilder som både er elitr og inneheldende den unike essensen av hvert eneste øyeblikk.'
            ],

            viewmore: "Se mer",

            galleryitemimages: [
                "../Images/bilde1.jpg",
                "../Images/bilde2.jpg",
                "../Images/bilde3.jpg",
                "../Images/bilde4.jpg",
                "../Images/bilde5.jpg",
                "../Images/bilde6.jpg",
                "../Images/bilde7.jpg",
                "../Images/bilde8.jpg",
                "../Images/bilde9.jpg",
                "../Images/bilde10.jpg",
                "../Images/bilde11.jpg",
            ]
        },

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

        ServicesProducts : [
            {
                price: "1500",
                originalPrice: "1800",
                name: 'Portrettfotografering (økt som varer på 1 time)',
                image: "../Images/bilde1.jpg",
                description: 'Description: Dette produktet håndterer Portrettfotografering, dette handler om at bildene skal være jo stor som du vil, men altså fokusert på kun et subjekt, dette skal kunne vise fram ditt valgte subjekt når vi møtes på Foto studioet'
            },
            {
                price: "2500",
                originalPrice: "2800",
                name: 'Familieportretter (økt som varer 2 timer)',
                image: "../Images/bilde1.jpg",

                description: 'Description: Dette produktet håndterer Familieportretter, dette handler om at bildene skal være jo stor som du vil, men altså fokusert på kun et subjekt'
            },
            {
                price: "1500",
                originalPrice: "1800",
                image: "../Images/bilde1.jpg",

                name: 'Barnefotografering (økt som varer på 1 time)',
            },
            {
                price: "3500",
                originalPrice: "3800",
                image: "../Images/bilde1.jpg",

                name: 'Gruppefotografering (økt som varer på 3 timer)',
            },
            {
                price: "3000",
                originalPrice: "3300",
                image: "../Images/bilde1.jpg",

                name: 'Bedriftsportretter (økt som varer på 2 timer)',
            },
            {
                price: "2500",
                originalPrice: "2800",
                image: "../Images/bilde1.jpg",

                name: 'Produktfotografering (økt som varer på 2 timer)',
            },
            {
                price: "4500",
                originalPrice: "4800",
                image: "../Images/bilde1.jpg",

                name: 'Eventfotografering (økt som varer på 4 timer)',
            },
            {
                price: "2000",
                originalPrice: "2300",
                image: "../Images/bilde1.jpg",

                name: 'Matfotografering (økt som varer på 2 timer)',
            },
            {
                price: "3500",
                originalPrice: "3800",
                image: "../Images/bilde1.jpg",

                name: 'Interiørfotografering (økt som varer på 3 timer)',
            },
            {
                price: "5000",
                originalPrice: "5300",
                image: "../Images/bilde1.jpg",

                name: 'Reisefotografering (1 dags utflukt)',
            },
            {
                price: "6000",
                originalPrice: "6300",
                image: "../Images/bilde1.jpg",

                name: 'Bryllupsfotografering (1 dag)',
            }
        ],

        contactInfo: {
            phone_Number: "+47 4568 88 888",
            email: "hifridafoto@gmail.com"
        },

        // about me model
        aboutFrida: {
            introduction: "About Frida Foto, Welcome to frida Photography",
            location: 'Based in location I m avaliable for Photography sessions in Larvik.',
            thanksNote: 'Takk for at du velger Frida Foto sin fotografi!',
            telefonNumber: '+47 481 000 00',
            fridaEmail: 'fridaphoto@fridaphoto.no',

            images: [
                '../Images/bilde1.jpg',
                '../Images/bilde2.jpg',
                '../Images/bilde3.jpg'
            ]
        },

        asideFrida: {
            porttraitSrc:
                '../Images/WEDDING.png',

            services: [
                'Portrait photography',
                'Event photography',
                'Commercial photography'
            ],

            googleMapURL:
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.994943748292!2d10.036383516039728!3d59.049996699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4646e944c5dc2eb9%3A0x32fe0474495a5b34!2sGET%20Academy%20AS%20-%20Norges%20r%C3%A5este%20IT-oppl%C3%A6ring!5e0!3m2!1sen!2sno!4v1597848556439!5m2!1sen!2sno'

        }
    }
};

