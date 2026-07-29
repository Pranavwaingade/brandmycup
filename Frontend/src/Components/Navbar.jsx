import React, {
  useEffect,
  useState
} from "react";

import {
  Link,
  useNavigate
} from "react-router-dom";

import "../Style/Navbar.css";

import mylogo from "../img/Cups(2).png";


const Navbar = () => {


  const navigate = useNavigate();


  // =========================
  // LOGIN STATUS
  // =========================

  const [
    isLoggedIn,
    setIsLoggedIn
  ] = useState(

    Boolean(
      localStorage.getItem("token")
    )

  );


  // =========================
  // MOBILE MENU
  // =========================

  const [
    menuOpen,
    setMenuOpen
  ] = useState(false);


  // =========================
  // CART & WISHLIST COUNT
  // =========================

  const [
    cartCount,
    setCartCount
  ] = useState(0);


  const [
    wishlistCount,
    setWishlistCount
  ] = useState(0);


  // =========================
  // UPDATE CART & WISHLIST
  // =========================

  const updateCounts = () => {


    const cart =

      JSON.parse(

        localStorage.getItem(
          "cart"
        )

      ) || [];


    const wishlist =

      JSON.parse(

        localStorage.getItem(
          "wishlist"
        )

      ) || [];


    const totalCartItems =

      cart.reduce(

        (total, item) => {

          return (

            total +
            item.quantity

          );

        },

        0

      );


    setCartCount(
      totalCartItems
    );


    setWishlistCount(
      wishlist.length
    );

  };




  // =========================
  // USE EFFECT
  // =========================

  useEffect(() => {


    // Initial counts
    updateCounts();


    // Login / Logout Event
    const handleAuthChange = () => {


      setIsLoggedIn(

        Boolean(

          localStorage.getItem(
            "token"
          )

        )

      );

    };


    // Listen Auth Changes
    window.addEventListener(

      "authChanged",

      handleAuthChange

    );


    // Listen Cart Changes
    window.addEventListener(

      "cartUpdated",

      updateCounts

    );


    // Listen Wishlist Changes
    window.addEventListener(

      "wishlistUpdated",

      updateCounts

    );


    // Cleanup
    return () => {


      window.removeEventListener(

        "authChanged",

        handleAuthChange

      );


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


  // =========================
  // CLOSE MENU
  // =========================

  const closeMenu = () => {

    setMenuOpen(
      false
    );

  };


  return (

    <nav className="navbar">


      {/* =====================
          LOGO
      ====================== */}

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


      {/* =====================
          HAMBURGER
      ====================== */}

      <button

        className="hamburger"

        onClick={() =>

          setMenuOpen(
            !menuOpen
          )

        }

        aria-label="Toggle Menu"

      >

        {menuOpen
          ? "✕"
          : "☰"

        }

      </button>


      {/* =====================
          NAV MENU
      ====================== */}

      <div

        className={

          menuOpen

            ? "nav-menu active"

            : "nav-menu"

        }

      >


        {/* =====================
            MAIN LINKS
        ====================== */}

        <ul className="nav-links">


          {/* HOME */}

          <li>

            <Link

              to="/"

              onClick={closeMenu}

            >

              Home

            </Link>

          </li>


          {/* PRODUCTS */}

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


          {/* CUSTOMIZE */}

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


          {/* ABOUT */}

          <li>

            <Link

              to="/about"

              onClick={closeMenu}

            >

              About

            </Link>

          </li>


          {/* CONTACT */}

          <li>

            <Link

              to="/contact"

              onClick={closeMenu}

            >

              Contact

            </Link>

          </li>


          {/* LOGIN */}

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


        {/* =====================
            RIGHT SIDE
        ====================== */}

        <ul className="nav-auth">


          {/* PROFILE */}

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


          {/* CART */}

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


          {/* WISHLIST */}

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