import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/Navbar.css";
import mylogo from "../img/Cups(2).png";

const Navbar = () => {
  const isLoggedIn = true;

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo */}

      <Link className="logo" to="/">
        <img className="logo-img" src={mylogo} alt="logo" />

        <div className="logo-text">
          <h2 className="cups">Cups</h2>
          <h2 className="craft">Craft</h2>
        </div>
      </Link>

      {/* Hamburger */}

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Menu */}

      <div className={menuOpen ? "nav-menu active" : "nav-menu"}>

        <ul className="nav-links">

          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>

          {isLoggedIn && (
            <>
              <li>
                <Link to="/products" onClick={() => setMenuOpen(false)}>
                  Products
                </Link>
              </li>

              <li>
                <Link to="/customizeCup" onClick={() => setMenuOpen(false)}>
                  Customize
                </Link>
              </li>
            </>
          )}

          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>

          {!isLoggedIn && (
            <li>
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
            </li>
          )}
        </ul>

        <ul className="nav-auth">

          {isLoggedIn && (
            <li>
              <Link to="/profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  fill="currentColor" className="bi bi-person"
                  viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4" />
                </svg>
              </Link>
            </li>
          )}

          <li>
            <Link to="/cart">
              🛒
            </Link>
          </li>

          <li>
            <Link to="/wishlist">
              ❤️
            </Link>
          </li>

        </ul>

      </div>

    </nav>
  );
};

export default Navbar;