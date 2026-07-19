import React from "react";
import WishlistCard from "./WishlistCard";
import "../Style/WishlistItems.css";

const WishlistItems = () => {

  const wishlistProducts = [
    {
      id: 1,
      productName: "Tea Paper Cup",
      description: "Premium paper cup for serving hot beverages.",
      image: "/images/tea-cup.png",
      category: "Tea Cup",
      size: "150 ml",
      paperQuality: "Premium",
      rating: 4.8,
      price: 3,
    },
    {
      id: 2,
      productName: "Coffee Paper Cup",
      description: "Perfect paper cup for hot coffee.",
      image: "/images/coffee-cup.png",
      category: "Coffee Cup",
      size: "250 ml",
      paperQuality: "Premium",
      rating: 4.9,
      price: 4,
    },
    {
      id: 3,
      productName: "Juice Paper Cup",
      description: "Food-grade paper cup for cold beverages.",
      image: "/images/juice-cup.png",
      category: "Juice Cup",
      size: "350 ml",
      paperQuality: "Eco Friendly",
      rating: 4.7,
      price: 5,
    }
  ];

  return (
    <div className="wishlist-items">

      {wishlistProducts.map((product) => (
        <WishlistCard
          key={product.id}
          product={product}
        />
      ))}

    </div>
  );
};

export default WishlistItems;