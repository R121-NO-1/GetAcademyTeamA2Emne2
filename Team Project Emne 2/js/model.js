
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
            fotograph: 'Fotografi Studio Basert i Oslo',

            description: [
                'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.',
                'Aliqu diam amet diam et eos.',
                'Clita erat ipsum et lorem et sit. Sed stet lorem sit clita duo. Justo magna dolore erat amet.'
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

