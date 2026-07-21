import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/OrderCard.css";

const OrderCard = ({ order }) => {
  const navigate = useNavigate();
  return (
    <div className="order-card">

      {/* Product Image */}
      <div className="order-image">
        <img src={order.image} alt={order.productName} />
      </div>

      {/* Details */}
      <div className="order-details">

        <h2>{order.productName}</h2>

        <p className="order-id">
          <strong>Order ID :</strong> #{order.orderId}
        </p>

        <p className="order-date">
          <strong>Ordered :</strong> {order.date}
        </p>

        <div className="order-specs">
          <span>{order.size}</span>
          <span>{order.paperQuality}</span>
          <span>{order.quantity} Qty</span>
        </div>

        <h3 className="order-price">
          ₹ {order.totalPrice}
        </h3>

      </div>

      {/* Status */}
      <div className="order-status">

        <span
          className={`status ${order.status.toLowerCase()}`}
        >
          {order.status}
        </span>
        <button
          className="details-btn"
          onClick={() => navigate(`/orderdetails/${order.id}`)}
        >
          View Details
        </button>
        <button className="track-btn">
          Track Order
        </button>

        <button className="invoice-btn">
          Download Invoice
        </button>

      </div>

    </div>
  );
};

export default OrderCard;