import React from "react";
import { useNavigate } from "react-router-dom";

import "../Style/WishlistCard.css";


const WishlistCard = ({ product }) => {


  const navigate = useNavigate();


  // Add Product To Cart
  const handleAddToCart = () => {


    const cart =

      JSON.parse(

        localStorage.getItem("cart")

      ) || [];


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


    // Notify Navbar
    window.dispatchEvent(

      new Event("cartUpdated")

    );


    alert("Added to Cart 🛒");

  };


  // Remove Product From Wishlist
  const handleRemoveWishlist = () => {


    const wishlist =

      JSON.parse(

        localStorage.getItem("wishlist")

      ) || [];


    const updatedWishlist = wishlist.filter(

      (item) => item.id !== product.id

    );


    localStorage.setItem(

      "wishlist",

      JSON.stringify(updatedWishlist)

    );


    // Notify Navbar
    window.dispatchEvent(

      new Event("wishlistUpdated")

    );


    // Notify Wishlist Page
    window.dispatchEvent(

      new Event("wishlistPageUpdated")

    );


    alert("Removed from Wishlist ❤️");

  };


  return (

    <div className="wishlist-card">


      {/* Product Image */}

      <div className="wishlist-image">

        <img

          src={product.image}

          alt={product.name}

        />

      </div>


      {/* Product Details */}

      <div className="wishlist-details">


        <span className="wishlist-category">

          {product.category}

        </span>


        <h2>

          {product.name}

        </h2>


        <p>

          {product.description}

        </p>


        <div className="wishlist-info">

          <span>

            {product.size}

          </span>


          <span>

            ⭐ {product.rating}

          </span>

        </div>


        <h3 className="wishlist-price">

          ₹ {product.price}

          <span>

            / Cup

          </span>

        </h3>


        <div className="wishlist-actions">


          {/* Add To Cart */}

          <button

            className="wishlist-cart-btn"

            onClick={handleAddToCart}

          >

            🛒 Add To Cart

          </button>


          {/* View Details */}

          <button

            className="wishlist-view-btn"

            onClick={() =>

              navigate(

                `/productdetails/${product.id}`

              )

            }

          >

            View Details

          </button>


          {/* Remove Wishlist */}

          <button

            className="wishlist-remove-btn"

            onClick={handleRemoveWishlist}

          >

            ❤️

          </button>

        </div>

      </div>

    </div>

  );

};


export default WishlistCard;