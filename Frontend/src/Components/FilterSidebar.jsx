import React from "react";
import "../Style/FilterSidebar.css";

const FilterSidebar = () => {
  return (
    <div className="filter">

      <div className="innerfilter">
        <h2>Categories</h2>

        <label><input type="checkbox" /> Tea Cups</label>

        <label><input type="checkbox" /> Coffee Cups</label>

        <label><input type="checkbox" /> Juice Cups</label>

        <label><input type="checkbox" /> Ripple Cups</label>

        <label><input type="checkbox" /> Double Wall Cups</label>

        <label><input type="checkbox" /> Ice Cream Cups</label>
      </div>

      <div className="innerfilter">

        <h2>Cup Size</h2>

        <label><input type="checkbox" />150 ml</label>

        <label><input type="checkbox" />250 ml</label>

        <label><input type="checkbox" />350 ml</label>

        <label><input type="checkbox" />500 ml</label>

      </div>

      <div className="innerfilter">

        <h2>Paper Quality</h2>

        <label><input type="checkbox" />Standard</label>

        <label><input type="checkbox" />Premium</label>

        <label><input type="checkbox" />Eco-Friendly</label>

      </div>

      <div className="innerfilter">

        <h2>Price Range</h2>

        <input type="range" min="100" max="1500" />

        <div className="price-text">
          ₹100 - ₹1500
        </div>

      </div>

      <button className="clear-btn">
        Clear Filters
      </button>

    </div>
  );
};

export default FilterSidebar;