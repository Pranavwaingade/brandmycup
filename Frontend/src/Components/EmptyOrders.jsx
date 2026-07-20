import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/EmptyOrders.css";

const EmptyOrders = () => {
    const navigate = useNavigate();

    return (
        <div className="empty-orders">

            <div className="empty-orders-box">

                <div className="empty-icon">
                    📦
                </div>

                <h2>No Orders Yet</h2>

                <p>
                    You haven't placed any orders yet.
                    Start shopping and your orders will appear here.
                </p>

                <button
                    className="shop-btn"
                    onClick={() => navigate("/products")}
                >
                    Start Shopping
                </button>
            </div>

        </div>
    );
};

export default EmptyOrders;