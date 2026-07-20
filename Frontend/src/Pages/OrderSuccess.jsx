import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Style/OrderSuccess.css";

const OrderSuccess = () => {

    const navigate = useNavigate();

    return (
        <>
            <Navbar />

            <section className="order-success">

                <div className="success-card">

                    <div className="success-icon">
                        ✓
                    </div>

                    <h1>Order Placed Successfully!</h1>

                    <p className="success-message">
                        Thank you for choosing <strong>CupsCraft</strong>.
                        Your order has been placed successfully and is now
                        being processed.
                    </p>

                    <div className="order-info">

                        <div className="info-row">
                            <span>Order ID</span>
                            <strong>#CC202600125</strong>
                        </div>

                        <div className="info-row">
                            <span>Payment Status</span>
                            <strong className="paid">
                                Paid Successfully
                            </strong>
                        </div>

                        <div className="info-row">
                            <span>Estimated Delivery</span>
                            <strong>3 - 5 Business Days</strong>
                        </div>

                    </div>

                    <div className="success-buttons">

                        <button
                            className="order-btn"
                            onClick={() => navigate("/orders")}
                        >
                            View My Orders
                        </button>

                        <button
                            className="shop-btn"
                            onClick={() => navigate("/products")}
                        >
                            Continue Shopping
                        </button>

                    </div>

                </div>

            </section>

            <Footer />
        </>
    );
};

export default OrderSuccess;