import React from 'react'
import ProductCard from './ProductCard';
import '../Style/Reletedgrid.css'


const Reletedgrid = () => {
    const products = [
        {
            id: 1,
            name: "Tea Paper Cup",
            category: "Tea Cup",
            description: "Premium paper cup for serving hot tea.",
            size: "150 ml",
            quality: "Premium",
            price: 3,
            rating: 4.8,
            image: "/images/tea-cup.png"
        },
        {
            id: 2,
            name: "Coffee Paper Cup",
            category: "Coffee Cup",
            description: "Perfect paper cup for hot coffee.",
            size: "250 ml",
            quality: "Premium",
            price: 4,
            rating: 4.9,
            image: "/images/coffee-cup.png"
        },
        {
            id: 3,
            name: "Juice Paper Cup",
            category: "Juice Cup",
            description: "Leak-proof cup for cold beverages.",
            size: "350 ml",
            quality: "Standard",
            price: 5,
            rating: 4.7,
            image: "/images/juice-cup.png"
        },
        {
            id: 4,
            name: "Ripple Cup",
            category: "Ripple Cup",
            description: "Double-layer insulation for hot drinks.",
            size: "250 ml",
            quality: "Premium",
            price: 6,
            rating: 4.9,
            image: "/images/ripple-cup.png"
        },
        {
            id: 5,
            name: "Double Wall Cup",
            category: "Double Wall Cup",
            description: "Premium insulated paper cup.",
            size: "350 ml",
            quality: "Premium",
            price: 7,
            rating: 5.0,
            image: "/images/double-wall-cup.png"
        },
        {
            id: 6,
            name: "Ice Cream Cup",
            category: "Ice Cream Cup",
            description: "Food-grade paper cup for desserts.",
            size: "100 ml",
            quality: "Eco-Friendly",
            price: 2,
            rating: 4.6,
            image: "/images/icecream-cup.png"
        }
    ];
    return (
    <>
        <div className="relatedgrid">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        
    </>
  )
}

export default Reletedgrid