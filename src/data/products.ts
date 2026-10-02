
export interface ProductItem {
    id: number;
    name: string;
    category: string;
    price: number;
    oldPrice: number;
    rating: number;
    reviews: number;
    description: string;
    image: string;
    features: string[];
}

export const products: ProductItem[] = [
    {
        id: 1,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 99,
        oldPrice: 129,
        rating: 4.8,
        reviews: 120,
        description:
            "Premium sound quality with deep bass and all-day comfort.",
        image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=85",
        features: [
            "Premium sound quality",
            "Comfortable over-ear design",
            "Long battery life",
            "Bluetooth connectivity",
        ],
    },
    {
        id: 2,
        name: "Smart Watch",
        category: "Electronics",
        price: 149,
        oldPrice: 199,
        rating: 4.6,
        reviews: 98,
        description:
            "Track your activity and stay connected with a stylish smart watch.",
        image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=85",
        features: [
            "Activity tracking",
            "Modern design",
            "Smart notifications",
            "Adjustable strap",
        ],
    },
    {
        id: 3,
        name: "Running Shoes",
        category: "Fashion",
        price: 79,
        oldPrice: 99,
        rating: 4.5,
        reviews: 76,
        description:
            "Lightweight running shoes designed for comfort and everyday movement.",
        image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85",
        features: [
            "Lightweight design",
            "Comfortable cushioning",
            "Durable outsole",
            "Sporty style",
        ],
    },
    {
        id: 4,
        name: "Travel Backpack",
        category: "Accessories",
        price: 59,
        oldPrice: 79,
        rating: 4.7,
        reviews: 54,
        description:
            "A practical backpack for everyday use, work and travel.",
        image:
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=85",
        features: [
            "Spacious compartments",
            "Comfortable straps",
            "Durable material",
            "Travel friendly",
        ],
    },
    {
        id: 5,
        name: "Classic Sunglasses",
        category: "Fashion",
        price: 39,
        oldPrice: 49,
        rating: 4.4,
        reviews: 32,
        description:
            "Classic sunglasses that complete your everyday style.",
        image:
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=85",
        features: [
            "Classic design",
            "Lightweight frame",
            "Comfortable fit",
            "Everyday accessory",
        ],
    },
    {
        id: 6,
        name: "Smartphone",
        category: "Electronics",
        price: 699,
        oldPrice: 799,
        rating: 4.9,
        reviews: 210,
        description:
            "A modern smartphone for photography, entertainment and productivity.",
        image:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=85",
        features: [
            "High-resolution display",
            "Advanced camera",
            "Fast performance",
            "Modern design",
        ],
    },
];
