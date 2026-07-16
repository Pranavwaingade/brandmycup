import React from "react";
import "../Style/BrandingDetails.css";

const BrandingDetails = ({
  setbrandname,
  setbrandcolor,
  settagline,
}) => {
  return (
    <div className="branding-details">

      <h3>Brand Details</h3>

      <input
        className="branding-input"
        type="text"
        placeholder="Company Name"
      />

      <input
        className="branding-input"
        type="text"
        placeholder="Brand Name"
        onChange={(e) => setbrandname(e.target.value)}
      />

      <input
        className="branding-input"
        type="text"
        placeholder="Tagline"
        onChange={(e) => settagline(e.target.value)}
      />

      <div className="color-picker">

        <label>Brand Color</label>

        <input
          type="color"
          defaultValue="#8B5E3C"
          onChange={(e) => setbrandcolor(e.target.value)}
        />

      </div>

    </div>
  );
};

export default BrandingDetails;