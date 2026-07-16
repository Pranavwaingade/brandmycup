import React from "react";
import { Link } from "react-router-dom";
import "../Style/Hero.css";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-box hero-left"></div>

      <div className="hero-content">
        <h1>
          Design Your Own <span>Branded Paper Cups</span>
        </h1>

        <p>
          Create premium custom paper cups with your own logo,
          brand name and unique identity.
        </p>

        <div className="hero-buttons">
          <Link to="/customize" className="primary-btn">
            Start Designing
          </Link>

          <Link to="/products" className="secondary-btn">
            View Products
          </Link>
        </div>
      </div>

      <div className="hero-box hero-right"></div>

    </section>
  );
};

export default Hero;