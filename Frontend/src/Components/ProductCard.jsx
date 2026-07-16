import React from "react";
import { Link } from "react-router-dom";
import "../Style/ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">

      <div className="product-image">

        <img
          src={product.image}
          alt={product.name}
        />

      </div>

      <div className="product-details">

        <span className="category">
          {product.category}
        </span>

        <h2>{product.name}</h2>

        <p>{product.description}</p>

        <div className="product-info">

          <span>{product.size}</span>

          <span>⭐ {product.rating}</span>

        </div>

        <h3 className="price">
          ₹{product.price}
          <span>/Cup</span>
        </h3>

        <Link
          to={`/productdetails/${product.id}`}
          className="view-btn"
        >
          View Details
        </Link>

      </div>

    </div>
  );
};

export default ProductCard;