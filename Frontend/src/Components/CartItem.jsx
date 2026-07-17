import React from "react";
import "../Style/CartItem.css";

const CartItem = () => {

  const cartProducts = [
    {
      id: 1,
      productName: "Tea Paper Cup",
      description: "Premium paper cup for serving hot tea.",
      image: "/images/tea-cup.png",
      size: "150 ml",
      shape: "Round",
      paperQuality: "Premium",
      brandName: "Crafted Cups",
      tagline: "Taste the Happiness",
      brandColor: "#8B4513",
      quantity: 2,
      totalPrice: 600,
    },
    {
      id: 2,
      productName: "Coffee Paper Cup",
      description: "Perfect paper cup for hot coffee.",
      image: "/images/coffee-cup.png",
      size: "250 ml",
      shape: "Ripple",
      paperQuality: "Premium",
      brandName: "Coffee House",
      tagline: "Every Sip Matters",
      brandColor: "#6F4E37",
      quantity: 3,
      totalPrice: 1200,
    }
  ];

  return (
    <>
      {cartProducts.map((product) => (
        <div className="cart-item" key={product.id}>

          <div className="cart-image">
            <img src={product.image} alt={product.productName} />
          </div>

          <div className="cart-details">

            <h2>{product.productName}</h2>

            <p>{product.description}</p>

            <div className="brand-row">
              <span><b>Brand:</b> {product.brandName}</span>
              <span><b>Tagline:</b> {product.tagline}</span>
            </div>

            <div className="specs">
              <span>{product.size}</span>
              <span>{product.shape}</span>
              <span>{product.paperQuality}</span>
            </div>

            <div className="color-box">
              <span>Color :</span>

              <div
                className="circle"
                style={{ background: product.brandColor }}
              ></div>

            </div>

          </div>

          <div className="quantity-box">

            <button>+</button>

            <h3>{product.quantity}</h3>

            <button>-</button>

          </div>

          <div className="price-box">

            <h3>Total</h3>

            <h2>₹ {product.totalPrice}</h2>

          </div>

          <div className="delete-box">

            🗑️

          </div>

        </div>
      ))}
    </>
  );
};

export default CartItem;