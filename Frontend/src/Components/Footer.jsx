import React from "react";
import { Link } from "react-router-dom";
import "../Style/Footer.css";
import logo from "../img/Cups(2).png";

const Footer = () => {
  return (
    <>
      <footer className="footer">

        {/* Left Section */}
        <div className="footer-column">
          <div className="info">
            <Link to="/" className="info-logo">
              <img className="logo-img" src={logo} alt="Brand Logo" />

              <div className="footer-logo-text">
                <h2 className="footer-cups">Cups</h2>
                <h2 className="footer-craft">Craft</h2>
              </div>
            </Link>

            <p>
              Create custom-branded paper cups for your business. Design,
              customize, and order premium-quality paper cups with your logo
              and brand identity.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h2 className="heading">Quick Links</h2>

          <Link className="footer-link" to="/">
            Home
          </Link>

          <Link className="footer-link" to="/products">
            Products
          </Link>

          <Link className="footer-link" to="/customize">
            Customize Cup
          </Link>

          <Link className="footer-link" to="/about">
            About Us
          </Link>

          <Link className="footer-link" to="/contact">
            Contact Us
          </Link>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h2 className="heading">Services</h2>

          <Link className="footer-link" to="#">
            Custom Paper Cups
          </Link>

          <Link className="footer-link" to="#">
            Logo Printing
          </Link>

          <Link className="footer-link" to="#">
            Bulk Orders
          </Link>

          <Link className="footer-link" to="#">
            Brand Packaging
          </Link>

          <Link className="footer-link" to="#">
            Design Support
          </Link>
        </div>

        {/* Contact */}
        <div className="footer-column">

          <h2 className="heading">Contact Information</h2>

          <div className="contact">

            <span className="contact-title">
              {/* Email SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-envelope-open" viewBox="0 0 16 16">
                <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882z"/>
                <path d="M15 7.383l-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734Z"/>
              </svg>

              Email
            </span>

            <span className="contact-value">
              support@brandmycup.com
            </span>

          </div>

          <div className="contact">

            <span className="contact-title">

              {/* Phone SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015z"/>
              </svg>

              Phone

            </span>

            <span className="contact-value">
              +91 7559215929
            </span>

          </div>

          <div className="contact">

            <span className="contact-title">

              {/* Location SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94"/>
              </svg>

              Location

            </span>

            <span className="contact-value">
              Maharashtra, India
            </span>

          </div>

          <h2 className="heading follow-heading">
            Follow Us
          </h2>

          <div className="follow-logos">

            <a href="#">
              Instagram
            </a>

            <a href="#">
              Facebook
            </a>

            <a href="#">
              LinkedIn
            </a>

          </div>

        </div>

      </footer>

      <div className="footer-bottom">
        © 2026 CupsCraft | Your Brand, Your Cup, Your Identity.
      </div>
    </>
  );
};

export default Footer;