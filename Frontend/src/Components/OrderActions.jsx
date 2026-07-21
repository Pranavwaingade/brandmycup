import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/OrderActions.css";

const OrderActions = () => {

    const navigate = useNavigate();

    const handleDownloadInvoice = () => {
        alert("Invoice download feature will be connected with backend.");
    };

    const handleTrackOrder = () => {
        alert("Tracking feature will be connected with delivery partner.");
    };

    const handleBuyAgain = () => {
        navigate("/products");
    };

    return (
        <div className="order-actions">

            <button
                className="invoice-btn"
                onClick={handleDownloadInvoice}
            >
                🧾 Download Invoice
            </button>

            <button
                className="track-btn"
                onClick={handleTrackOrder}
            >
                🚚 Track Order
            </button>

            <button
                className="buy-again-btn"
                onClick={handleBuyAgain}
            >
                🛒 Buy Again
            </button>

        </div>
    );
};

export default OrderActions;