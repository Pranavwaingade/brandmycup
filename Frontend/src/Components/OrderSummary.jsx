import React from 'react';
import '../Style/OrderSummary.css';

const OrderSummary = ({
  cupSize,
  cupShape,
  quantity,
  paperQuality,
}) => {

  // Base price according to cup size
  const sizePrice = {
    "150ml": 3,
    "250ml": 4,
    "350ml": 5,
    "500ml": 6,
  };

  // Extra charge for paper quality
  const qualityPrice = {
    "Standard": 0,
    "Premium": 1,
    "Eco Friendly": 2,
  };

  const pricePerCup =
    (sizePrice[cupSize] || 0) +
    (qualityPrice[paperQuality] || 0);

  const totalPrice = pricePerCup * Number(quantity);

  return (
    <div className="order-summary">

      <div className="summary-row">
        <p>Cup Size</p>
        <p>{cupSize}</p>
      </div>

      <div className="summary-row">
        <p>Cup Shape</p>
        <p>{cupShape}</p>
      </div>

      <div className="summary-row">
        <p>Paper Quality</p>
        <p>{paperQuality}</p>
      </div>

      <div className="summary-row">
        <p>Quantity</p>
        <p>{quantity}</p>
      </div>

      <hr />

      <div className="summary-total">
        <h2>Total Price</h2>
        <h2>₹ {totalPrice}</h2>
      </div>

    </div>
  );
};

export default OrderSummary;