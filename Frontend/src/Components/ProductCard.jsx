import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/ProductCard.css";

const ProductCard = ({ product }) => {

  const [isWishlisted, setIsWishlisted] = useState(() => {

    const wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    return wishlist.some(
      (item) => item.id === product.id
    );

  });


  const handleWishlist = () => {

    const wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];


    if (isWishlisted) {

      const updatedWishlist = wishlist.filter(
        (item) => item.id !== product.id
      );


      localStorage.setItem(
        "wishlist",
        JSON.stringify(updatedWishlist)
      );


      window.dispatchEvent(
        new Event("wishlistUpdated")
      );


      setIsWishlisted(false);


      alert("Removed from Wishlist ❤️");


    } else {

      wishlist.push(product);


      localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
      );


      window.dispatchEvent(
        new Event("wishlistUpdated")
      );


      setIsWishlisted(true);


      alert("Added to Wishlist ❤️");

    }

  };


  const handleAddToCart = () => {

    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];


    const existingProduct = cart.find(
      (item) => item.id === product.id
    );


    if (existingProduct) {

      existingProduct.quantity += 1;

    } else {

      cart.push({

        ...product,

        quantity: 1

      });

    }


    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );
    window.dispatchEvent(
      new Event("cartUpdated")
    );


    alert("Product added to Cart 🛒");

  };


  return (

    <div className="product-card">


      {/* Product Image */}

      <div className="product-image">

        <img
          src={product.image}
          alt={product.name}
        />


        <button
          className={
            isWishlisted
              ? "wishlist-btn active"
              : "wishlist-btn"
          }
          onClick={handleWishlist}
        >

          {isWishlisted ? "❤️" : "♡"}

        </button>

      </div>


      {/* Product Details */}

      <div className="product-details">

        <span className="category">
          {product.category}
        </span>


        <h2>
          {product.name}
        </h2>


        <p>
          {product.description}
        </p>


        <div className="product-info">

          <span>
            {product.size}
          </span>

          <span>
            ⭐ {product.rating}
          </span>

        </div>


        <h3 className="price">

          ₹{product.price}

          <span>
            /Cup
          </span>

        </h3>


        {/* Actions */}

        <div className="product-actions">


          <button
            className="add-cart-btn"
            onClick={handleAddToCart}
          >

            🛒 Add to Cart

          </button>


          <Link
            to={`/productdetails/${product.id}`}
            className="view-btn"
          >

            View Details

          </Link>


        </div>

      </div>

    </div>

  );

};

export default ProductCard;