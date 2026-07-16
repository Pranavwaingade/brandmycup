import React from "react";
import "../Style/Pagination.css";

const Pagination = () => {
  return (
    <div className="pagination">
      <button className="page-btn">← Previous</button>

      <div className="page-numbers">
        <a href="/" className="active">
          1
        </a>
        <a href="/">2</a>
        <a href="/">3</a>
        <span>...</span>
        <a href="/">10</a>
      </div>

      <button className="page-btn">Next →</button>
    </div>
  );
};

export default Pagination;