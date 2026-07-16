import React from "react";
import "../Style/Searchbar.css";

const Searchbar = () => {
  return (
    <div className="searchbar">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search paper cups..."
          className="search-input"
        />

        <button className="search-btn">
          Search
        </button>
      </div>
    </div>
  );
};

export default Searchbar;