
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
        // Andre sider kan ha sin egen inputmodell, f.eks. homePage, aboutPage
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

        /*
                            <option value="1500">Portrettfotografering (økt som varer på 1 time) - kr 1500 </option>
                            <option value="2500">Familieportretter (økt som varer 2 timer) - Kr 2500</option>
                            <option value="1500">Barnefotografering (økt som varer på 1 time) - Kr 1500</option>
                            <option value="3500">Gruppefotografering (økt som varer på 3 time) - Kr 3500</option>
                            <option value="3000">Bedriftsportretter (økt som varer på 2 time) - Kr 3000</option>
                            <option value="2500">Produktfotografering (økt som varer på 2 time) - Kr 2500</option>
                            <option value="4500">Eventfotografering (økt som varer på 4 time) - Kr 4500</option>
                            <option value="2000">Matfotografering (økt som varer på 2 time) - Kr 2000</option>
                            <option value="3500">Interiørfotografering (økt som varer på 3 time) - Kr 3500</option>
                            <option value="5000">Reisefotografering (1 dags utflukt) - Kr 5000</option>
                            <option value="6000">Bryllupsfotografering (1 dag) - Kr 6000</option>
                            */
        ServicesProducts : [
            {
                price: "1500",
                originalPrice: "1800",
                name: 'Portrettfotografering (økt som varer på 1 time)',
            },
            {
                price: "2500",
                originalPrice: "2800",
                name: 'Familieportretter (økt som varer 2 timer)',
            },
            {
                price: "1500",
                originalPrice: "1800",
                name: 'Barnefotografering (økt som varer på 1 time)',
            },
            {
                price: "3500",
                originalPrice: "3800",
                name: 'Gruppefotografering (økt som varer på 3 timer)',
            },
            {
                price: "3000",
                originalPrice: "3300",
                name: 'Bedriftsportretter (økt som varer på 2 timer)',
            },
            {
                price: "2500",
                originalPrice: "2800",
                name: 'Produktfotografering (økt som varer på 2 timer)',
            },
            {
                price: "4500",
                originalPrice: "4800",
                name: 'Eventfotografering (økt som varer på 4 timer)',
            },
            {
                price: "2000",
                originalPrice: "2300",
                name: 'Matfotografering (økt som varer på 2 timer)',
            },
            {
                price: "3500",
                originalPrice: "3800",
                name: 'Interiørfotografering (økt som varer på 3 timer)',
            },
            {
                price: "5000",
                originalPrice: "5300",
                name: 'Reisefotografering (1 dags utflukt)',
            },
            {
                price: "6000",
                originalPrice: "6300",
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

