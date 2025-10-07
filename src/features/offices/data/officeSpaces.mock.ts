import { OfficeSpace } from "../types/officeSpace.types";
export const officeSpaces: OfficeSpace[] = [
    {
        id: 1,
        title: "Angga Park Central Master Silicon Valley Star Class",
        slug: "angga-park-central-master-silicon-valley-star-class",
        price: 18560000,
        duration: "20 days",        
        location: "Jakarta Pusat",
        rating: 4.8,
        address: "Jl. Kebon Jeruk No.1, Jakarta Pusat",
        image:"/assets/images/thumbnails/thumbnails-1.png",
        images: [
            "/assets/images/thumbnails/thumbnail-details-2.png",
            "/assets/images/thumbnails/thumbnail-details-3.png",
        ],
        about: "Angga Park Central Master Silicon Valley Star Class is a premium office space located in the heart of Jakarta. It offers state-of-the-art facilities and a vibrant work environment.",
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
        title: "Bandung Central Master Silicon Valley Star Class",
        slug: "bandung-central-master-silicon-valley-star-class",
        price: 17560000,
        duration: "30 days",        
        location: "Bandung",
        rating: 4.9,
        address: "Jl. Sukajadi No.45, Bandung",
        image:"/assets/images/thumbnails/thumbnails-3.png",
        images: [
            "/assets/images/thumbnails/thumbnail-details-2.png",
            "/assets/images/thumbnails/thumbnail-details-3.png",
        ],
        about: "Bandung Central Master Silicon Valley Star Class is a premium office space located in the heart of Bandung. It offers state-of-the-art facilities and a vibrant work environment.",
        tags: ["Cheaper"],
        features: ['Global Event', 'Privacy', 'Free Move', 'Sustainbility'],
        isFullyBooked: false,
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