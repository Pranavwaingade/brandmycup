import React from "react";
import "../Style/CupPreview.css";
import cupImage from "../img/paper-cup.png";

const CupPreview = ({ brandname, brandcolor, tagline, logo }) => {
  return (
    <div className="preview-container">

      <div className="cup-box">

        <img
          src={cupImage}
          alt="Paper Cup"
          className="cup-image"
        />

        {logo && (
          <div className="viewlogo">
            <img src={logo} alt="Brand Logo" />
          </div>
        )}

        <div className="brand-name">
          <h2 style={{ color: brandcolor }}>
            {brandname || "Your Brand"}
          </h2>
        </div>

        <div className="tagline">
          <p style={{ color: brandcolor }}>
            {tagline || "Your Tagline"}
          </p>
        </div>

      </div>

    </div>
  );
};

export default CupPreview;