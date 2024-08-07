export const color = [
    "Blanc",
    "Noir",
    "Rouge",
    "Bleu",
    "Vert",
    "Jaune",
    "Violet",
    "Orange",
    "Rose"
];

export const filters = [
    {
        id: "color",
        name: "Couleur",
        options: [
            { value: "white", label: "Blanc" },
            { value: "black", label: "Noir" },
            { value: "red", label: "Rouge" },
            { value: "blue", label: "Bleu" },
            { value: "green", label: "Vert" },
            { value: "yellow", label: "Jaune" },
            { value: "purple", label: "Violet" },
            { value: "orange", label: "Orange" },
            { value: "pink", label: "Rose" },
        ]
    },
    {
        id: "size",
        name: "Taille",
        options: [
            { value: "S", label: "S" },
            { value: "M", label: "M" },
            { value: "L", label: "L" },
            { value: "XL", label: "XL" },  
        ]
    }
];

export const singleFilter = [
    {
        id: "price",
        name: "Prix",
        options: [
            { value: "159-399", label: "159€ à 399€"},
            { value: "399-999", label: "399€ à 999€"},
            { value: "999-1999", label: "999€ à 1999€"},
            { value: "1999-2999", label: "1999€ à 2999€"},
            { value: "2999-4999", label: "2999€ à 4999€"},
        ]
    },

    {
        id: "discount",
        name: "Réduction",
        options: [
            { value: "10", label: "10% et +"},
            { value: "20", label: "20% et +"},
            { value: "30", label: "30% et +"},
            { value: "40", label: "40% et +"},
            { value: "50", label: "50% et +"},
            { value: "60", label: "60% et +"},
            { value: "70", label: "70% et +"},
            { value: "80", label: "80% et +"},

        ]
    },

    {
        id: "stock",
        name: "Disponibilité",
        options: [
            { value: "in_stock", label: "En stock"},
            { value: "out_of_stock", label: "En rupture de stock"},
        ]
    }
]

export const sortOptions = [

    {name: "Prix: Min. à Max.", query: "price_low", current: false},
    {name: "Prix: Max. à Min.", query: "price_high", current: false},
]