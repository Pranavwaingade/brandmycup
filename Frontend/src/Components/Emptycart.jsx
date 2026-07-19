import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/EmptyCart.css";

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className="empty-cart">
      <div className="empty-card">

        <div className="empty-icon">🛒</div>

        <h1>Your Shopping Cart is Empty</h1>

        <p>
          Browse our premium paper cups and start customizing your perfect order.
        </p>

        <button
          className="shop-btn"
          onClick={() => navigate("/products")}
        >
          Continue Shopping
        </button>

      </div>
    </div>
  );
};

export default EmptyCart;