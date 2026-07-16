import React, { useState } from 'react';
import '../Style/QuantitySelector.css';

const QuantitySelector = () => {

  const [count, setCount] = useState(1);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="quantity">

      <h3>Quantity</h3>

      <div className="quantity-box">

        <button
          className="qty-btn"
          onClick={handleMinus}
        >
          -
        </button>

        <span className="qty-value">
          {count}
        </span>

        <button
          className="qty-btn"
          onClick={handleAdd}
        >
          +
        </button>

      </div>

    </div>
  );
};

export default QuantitySelector;