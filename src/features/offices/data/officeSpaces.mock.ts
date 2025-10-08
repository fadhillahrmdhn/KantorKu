import { OfficeSpace } from "../types/officeSpace.types";
export const officeSpaces: OfficeSpace[] = [
    {
        id: 1,
        title: "The City Tower",
        slug: "the-city-tower",
        price: 8800000,
        phone: "623816727519",
        duration: "20 days",        
        location: "Jakarta Pusat",
        rating: 4.8,
        address: "Jl. MH Thamrin No.81, Dukuh Atas, Menteng, Kota Jakarta Pusat",
        image:"/assets/images/thumbnails/thumbnails-1.png",
        images: [
            "/assets/images/thumbnails/thumbnail-details-2.png",
            "/assets/images/thumbnails/thumbnail-details-3.png",
        ],
        about: "The City Tower is a premium office space located in the heart of Jakarta. It offers state-of-the-art facilities and a vibrant work environment.",
        tags: ["Star Class"],
        features: ['Global Event', 'Privacy', 'Free Move', 'Sustainbility', 'Extra Snacks', 'Compact'],
        isFullyBooked: false,
        salesContacts: [
            {
                name: "John Doe",
                role: "Sales Manager",
                photo: "/assets/images/photos/photo-1.png",
            },
            {
                name: "Choi Jiwoo",
                role: "Sales Representative",
                photo: "/assets/images/photos/photo-2.png",
            },
        ]
    },
    {
        id: 2,
        title: "Menara Asia Afrika",
        slug: "menara-asia-afrika",
        price: 1990000,
        phone: "623816727519",
        duration: "30 days",        
        location: "Bandung",
        rating: 4.9,
        address: "Jl. Asia Afrika No.133-137, Kb. Pisang, Kec. Sumur Bandung, Kota Bandung",
        image:"/assets/images/thumbnails/thumbnails-3.png",
        images: [
            "/assets/images/thumbnails/thumbnail-details-2.png",
            "/assets/images/thumbnails/thumbnail-details-3.png",
        ],
        about: "Menara Asia Afrika is a premium office space located in the heart of Bandung. It offers state-of-the-art facilities and a vibrant work environment.",
        tags: ["Cheaper"],
        features: ['Global Event', 'Privacy', 'Free Move', 'Sustainbility'],
        isFullyBooked: true,
        salesContacts: [
            {
                name: "Felix",
                role: "Sales Manager",
                photo: "/assets/images/photos/photo-1.png",
            },
            {
                name: "Kim Ju-eun",
                role: "Sales Representative",
                photo: "/assets/images/photos/photo-2.png",
            },
        ]
    },
];