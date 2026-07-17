import React from "react";
import { Link } from "react-router-dom";
import "../Style/Navbar.css";
import mylogo from "../img/Cups(2).png";



const Navbar = () => {
  const isLoggedIn = true;

  return (
    <nav className="navbar">
      <Link className="logo" to="/">
        <img className="logo-img" src={mylogo} alt="BrandMyCup Logo" />

        <div className="logo-text">
          <h2 className="cups">Cups</h2>
          <h2 className="craft">Craft</h2>
        </div>
      </Link>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>

        {isLoggedIn && (
          <>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/customizeCup">Customize</Link></li>
          </>
        )}

        <li><Link to="/about">About</Link></li>

        {!isLoggedIn && (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>

      <ul className="nav-auth">
        {isLoggedIn && (
          <li>
            <Link to="/profile">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
            </Link>
          </li>
        )}

        <li>
          <Link to="/cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
          </Link>
        </li>

        <li>
          <Link to="/wishlist">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
              <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;