import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../Style/Navbar.css";
import mylogo from "../img/Cups(2).png";


const Navbar = () => {


  // Temporary login status
  const isLoggedIn = true;


  // Mobile menu state
  const [menuOpen, setMenuOpen] = useState(false);


  // Cart and Wishlist counts
  const [cartCount, setCartCount] = useState(0);

  const [wishlistCount, setWishlistCount] = useState(0);


  // Update cart and wishlist counts
  const updateCounts = () => {


    // Get cart data from localStorage
    const cart =
      JSON.parse(
        localStorage.getItem("cart")
      ) || [];


    // Get wishlist data from localStorage
    const wishlist =
      JSON.parse(
        localStorage.getItem("wishlist")
      ) || [];


    // Calculate total cart quantity
    const totalCartItems = cart.reduce(

      (total, item) => {

        return total + item.quantity;

      },

      0

    );


    // Update state
    setCartCount(totalCartItems);

    setWishlistCount(wishlist.length);

  };


  /*
      useEffect runs when Navbar loads.

      It also listens for:

      cartUpdated
      wishlistUpdated

      events.
  */

  useEffect(() => {


    // Initial count update
    updateCounts();


    // Listen for cart changes
    window.addEventListener(

      "cartUpdated",

      updateCounts

    );


    // Listen for wishlist changes
    window.addEventListener(

      "wishlistUpdated",

      updateCounts

    );


    // Cleanup
    return () => {


      window.removeEventListener(

        "cartUpdated",

        updateCounts

      );


      window.removeEventListener(

        "wishlistUpdated",

        updateCounts

      );

    };


  }, []);


  // Close mobile menu
  const closeMenu = () => {

    setMenuOpen(false);

  };


  return (

    <nav className="navbar">


      {/* ===========================
                Logo
            =========================== */}

      <Link

        className="logo"

        to="/"

        onClick={closeMenu}

      >

        <img

          className="logo-img"

          src={mylogo}

          alt="CupsCraft Logo"

        />


        <div className="logo-text">

          <h2 className="cups">

            Cups

          </h2>


          <h2 className="craft">

            Craft

          </h2>

        </div>

      </Link>


      {/* ===========================
                Hamburger Menu
            =========================== */}

      <button

        className="hamburger"

        onClick={() => {

          setMenuOpen(!menuOpen);

        }}

        aria-label="Toggle Menu"

      >

        {menuOpen ? "✕" : "☰"}

      </button>


      {/* ===========================
                Navigation Menu
            =========================== */}

      <div

        className={

          menuOpen

            ? "nav-menu active"

            : "nav-menu"

        }

      >


        {/* ===========================
                    Main Navigation Links
                =========================== */}

        <ul className="nav-links">


          {/* Home */}

          <li>

            <Link

              to="/"

              onClick={closeMenu}

            >

              Home

            </Link>

          </li>


          {/* Products */}

          {isLoggedIn && (

            <li>

              <Link

                to="/products"

                onClick={closeMenu}

              >

                Products

              </Link>

            </li>

          )}


          {/* Customize */}

          {isLoggedIn && (

            <li>

              <Link

                to="/customizeCup"

                onClick={closeMenu}

              >

                Customize

              </Link>

            </li>

          )}


          {/* About */}

          <li>

            <Link

              to="/about"

              onClick={closeMenu}

            >

              About

            </Link>

          </li>


          {/* Contact */}

          <li>

            <Link

              to="/contact"

              onClick={closeMenu}

            >

              Contact

            </Link>

          </li>


          {/* Login */}

          {!isLoggedIn && (

            <li>

              <Link

                to="/login"

                onClick={closeMenu}

              >

                Login

              </Link>

            </li>

          )}

        </ul>


        {/* ===========================
                    Right Side Icons
                =========================== */}

        <ul className="nav-auth">


          {/* Profile */}

          {isLoggedIn && (

            <li>

              <Link

                to="/profile"

                onClick={closeMenu}

                aria-label="Profile"

              >

                👤

              </Link>

            </li>

          )}


          {/* Cart */}

          <li className="nav-icon-item">

            <Link

              to="/cart"

              onClick={closeMenu}

              aria-label="Cart"

            >

              🛒


              {cartCount > 0 && (

                <span className="nav-count">

                  {cartCount}

                </span>

              )}

            </Link>

          </li>


          {/* Wishlist */}

          <li className="nav-icon-item">

            <Link

              to="/wishlist"

              onClick={closeMenu}

              aria-label="Wishlist"

            >

              ❤️


              {wishlistCount > 0 && (

                <span className="nav-count">

                  {wishlistCount}

                </span>

              )}

            </Link>

          </li>

        </ul>

      </div>

    </nav>

  );

};


export default Navbar;