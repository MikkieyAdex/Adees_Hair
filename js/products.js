// Sample Product Database Object
const productsDatabase = [
    {
        id: "raw-bundles-1b",
        name: "1B Raw Bundles",
        category: "Raw Bundles",
        basePriceNGN: 105000,
        inStock: true,
        rating: 5.0,
        reviewsCount: 52,
        images: [
            "img/raw-bundle.webp",
            "img/straight.webp",
            "img/wave.jpg",
            "img/kinky.webp"
        ],
        lengths: [
            { inch: '12"', priceModifier: 0 },
            { inch: '14"', priceModifier: 15000 },
            { inch: '16"', priceModifier: 30000 },
            { inch: '18"', priceModifier: 45000 },
            { inch: '20"', priceModifier: 60000 }
        ],
        textures: ["Silky Straight", "Body Wave", "Deep Wave", "Kinky Straight"],
        origins: ["Peruvian", "Brazilian", "Vietnamese"],
        description: "Our 1B Raw Human Hair Bundles offer thick, luxurious volume from root to tip. Sourced ethically from a single donor."
    }
];