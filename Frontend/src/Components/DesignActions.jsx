import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/DesignActions.css';

const DesignActions = () => {
  return (
    <div className="design-actions">

      <button className="action-btn preview-btn">
        Preview Design
      </button>

      <Link to="/cart" className="action-link">
        <button className="action-btn cart-btn">
          Add To Cart
        </button>
      </Link>

      <button className="action-btn save-btn">
        Save Design
      </button>

    </div>
  );
};

export default DesignActions;