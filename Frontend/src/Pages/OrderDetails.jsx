import React from "react";
import "../Style/OrderDetails.css";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import OrderDetailsCard from "../Components/OrderDetailsCard";
import OrderTimeline from "../Components/OrderTimeline";
import OrderItems from "../Components/OrderItems";
import ShippingDetails from "../Components/ShippingDetails";
import PaymentDetails from "../Components/PaymentDetails";
import OrderSummaryCard from "../Components/OrderSummaryCard";
import OrderActions from "../Components/OrderActions";

const OrderDetails = () => {

    return (
        <>
            <Navbar />

            <main className="order-details-page">

                {/* ===========================
                    Page Header
                =========================== */}

                <div className="order-details-header">

                    <h1>
                        Order Details
                    </h1>

                    <p>
                        View your complete order information
                    </p>

                </div>


                {/* ===========================
                    Main Content
                =========================== */}

                <div className="order-details-container">

                    {/* Order Basic Information */}

                    <OrderDetailsCard />


                    {/* Order Status Timeline */}

                    <OrderTimeline />


                    {/* Ordered Products */}

                    <OrderItems />


                    {/* Shipping and Payment Details */}

                    <div className="order-bottom-grid">

                        <ShippingDetails />

                        <PaymentDetails />

                    </div>


                    {/* Order Summary */}

                    <OrderSummaryCard />


                    {/* Order Actions */}

                    <OrderActions />

                </div>

            </main>

            <Footer />

        </>
    );
};

export default OrderDetails;