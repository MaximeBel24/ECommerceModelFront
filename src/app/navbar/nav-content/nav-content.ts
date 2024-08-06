export const navigation = {

    products: {
        id: 'products',
        name: 'Produits',
        featured:[],
        sections: [
            {
                id: 'camping',
                name: 'Camping',
                items: [
                    {name : 'Tente', id: 'tent', href: `{camping/tents}`}
                ]
            },
            {
                id: 'bag',
                name: 'Bagagerie et Sacs',
                items: [
                    {name : 'Sacs à dos', id: 'backpack', href: `{camping/tents}`}
                ]
            },
            {
                id: 'tech',
                name: 'Vêtements Techniques',
                items: [
                    {name : 'Imperméables et coupe-vent', id: 'waterproof', href: `{camping/tents}`}
                ]
            },
            {
                id: 'security',
                name: 'Sécurité et Survie',
                items: [
                    {name : 'Premiers Secours', id: 'firstaid', href: `{camping/tents}`}
                ]
            },

        ],
    },

}


