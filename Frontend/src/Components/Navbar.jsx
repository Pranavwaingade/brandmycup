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
              {/* Person SVG */}
            </Link>
          </li>
        )}

        <li>
          <Link to="/cart">
            {/* Cart SVG */}
          </Link>
        </li>

        <li>
          <Link to="/wishlist">
            {/* Heart SVG */}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;