import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/WishlistCard.css";

const WishlistCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="wishlist-card">

      <div className="wishlist-image">
        <img
          src={product.image}
          alt={product.productName}
        />
      </div>

      <div className="wishlist-details">

        <span className="wishlist-category">
          {product.category}
        </span>

        <h2>{product.productName}</h2>

        <p>{product.description}</p>

        <div className="wishlist-info">
          <span>{product.size}</span>
          <span>⭐ {product.rating}</span>
        </div>

        <h3 className="wishlist-price">
          ₹ {product.price}
          <span> / Cup</span>
        </h3>

        <div className="wishlist-actions">

          <button
            className="wishlist-cart-btn"
            onClick={() => alert("Added to Cart")}
          >
            Add To Cart
          </button>

          <button
            className="wishlist-view-btn"
            onClick={() =>
              navigate(`/productdetails/${product.id}`)
            }
          >
            View Details
          </button>

          <button
            className="wishlist-remove-btn"
            onClick={() => alert("Removed from Wishlist")}
          >
            ❤
          </button>

        </div>

      </div>

    </div>
  );
};

export default WishlistCard;