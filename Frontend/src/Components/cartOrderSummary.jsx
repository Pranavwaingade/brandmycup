import React from "react";
import "../Style/cartOrderSummary.css";
import cartbox from "../img/wallet.png";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {

    const navigate = useNavigate();

    const subtotal = 3100;
    const discount = 300;
    const delivery = 0;
    const gst = ((subtotal - discount) * 18) / 100;
    const total = subtotal - discount + gst + delivery;

    return (
        <div className="summary-card">

            <div className="summary-header">

                <h2>
                    <img src={cartbox} alt="" />
                    Order Summary
                </h2>

            </div>

            <div className="summary-row">
                <span>Items</span>
                <span>4</span>
            </div>

            <div className="summary-row">
                <span>Subtotal</span>
                <span>₹ {subtotal}</span>
            </div>

            <div className="summary-row">
                <span>Discount</span>
                <span>- ₹ {discount}</span>
            </div>

            <div className="summary-row">
                <span>Delivery</span>
                <span className="free">FREE</span>
            </div>

            <div className="summary-row">
                <span>GST (18%)</span>
                <span>₹ {gst.toFixed(2)}</span>
            </div>

            <hr />

            <div className="summary-total">
                <h3>Total</h3>
                <h2>₹ {total.toFixed(2)}</h2>
            </div>

            <div className="coupon-box">

                <input
                    type="text"
                    placeholder="Enter Coupon Code"
                />

                <button>Apply</button>

            </div>

            <button
                className="checkout-btn"
                onClick={() => navigate("/Cart/checkout")}
            >
                Proceed To Checkout
            </button>

            <p className="secure">
                🔒 Secure Checkout
            </p>

        </div>
    );
};

export default OrderSummary;