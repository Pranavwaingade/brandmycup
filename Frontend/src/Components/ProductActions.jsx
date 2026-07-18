import React from 'react';
import '../Style/ProductActions.css';
import { useNavigate } from 'react-router-dom';

const ProductActions = () => {

  const navigate = useNavigate();

  return (
    <div className="action">

      <button
        className="custom-btn"
        onClick={() => navigate('/Customizecup')}
      >
        Customize Now
      </button>

      <button className="cart-btn" type="button">
        🛒Add To Cart
      </button>

      <button className="wishlist-btn">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          className="bi bi-heart-fill"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
          />
        </svg>

      </button>

    </div>
  );
};

export default ProductActions;