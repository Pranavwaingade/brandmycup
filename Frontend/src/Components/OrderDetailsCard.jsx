import React from "react";
import "../Style/OrderDetailsCard.css";

const OrderDetailsCard = ({ orderId }) => {

    // Temporary dummy order data
    const order = {
        orderId: orderId || "CC2026001",
        orderDate: "20 July 2026",
        status: "Delivered",
        totalAmount: "₹ 3,100"
    };

    return (
        <div className="order-details-card">

            {/* Order Information */}

            <div className="order-main-info">

                <div className="order-info-item">
                    <span>Order ID</span>
                    <strong>#{order.orderId}</strong>
                </div>

                <div className="order-info-item">
                    <span>Order Date</span>
                    <strong>{order.orderDate}</strong>
                </div>

                <div className="order-info-item">
                    <span>Order Status</span>

                    <strong className="order-status">
                        <span className="status-dot"></span>
                        {order.status}
                    </strong>
                </div>

                <div className="order-info-item">
                    <span>Total Amount</span>
                    <strong className="order-total">
                        {order.totalAmount}
                    </strong>
                </div>

            </div>

        </div>
    );
};

export default OrderDetailsCard;