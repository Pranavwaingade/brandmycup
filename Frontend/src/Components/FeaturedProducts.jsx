import React from "react";
import "../Style/FeaturedProducts.css";

import ml150 from "../img/150ml.png";
import ml250 from "../img/250ml.png";
import ml350 from "../img/350ml.png";

const cups = [
  {
    id: 1,
    title: "Small Paper Cup",
    size: "150ml",
    image: ml150,
    bestFor: ["Tea", "Espresso", "Sampling"],
    features: [
      "Leak Resistant",
      "Eco Friendly",
      "Logo Printing",
      "Compact Design"
    ]
  },
  {
    id: 2,
    title: "Medium Paper Cup",
    size: "250ml",
    image: ml250,
    bestFor: ["Coffee", "Juice", "Soft Drinks"],
    features: [
      "Premium Print",
      "Strong Material",
      "Multiple Colors",
      "Best Selling"
    ]
  },
  {
    id: 3,
    title: "Large Paper Cup",
    size: "350ml",
    image: ml350,
    bestFor: ["Cold Coffee", "Milkshake", "Smoothie"],
    features: [
      "Extra Capacity",
      "Premium Finish",
      "Strong Paper",
      "Full Wrap Branding"
    ]
  }
];

const FeaturedProducts = () => {
  return (
    <section className="featured">

      <h1>Explore Our Custom Paper Cup Collection</h1>

      <p>
        Choose from premium quality paper cups designed for your business.
      </p>

      <div className="featured-grid">

        {cups.map((cup) => (

          <div className="featured-card" key={cup.id}>

            <img src={cup.image} alt={cup.title} />

            <h2>{cup.title}</h2>

            <span>{cup.size}</span>

            <h3>Best For</h3>

            <ul>
              {cup.bestFor.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3>Features</h3>

            <ul>
              {cup.features.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

          </div>

        ))}

      </div>

    </section>
  );
};

export default FeaturedProducts;