import React from "react";
import "../Style/OrderSummaryCard.css";

const OrderSummaryCard = () => {

    const orderSummary = {
        subtotal: 1800,
        discount: 200,
        delivery: 0,
        gst: 288
    };

    const total =
        orderSummary.subtotal -
        orderSummary.discount +
        orderSummary.gst +
        orderSummary.delivery;

    return (
        <div className="order-summary-card">

            <div className="order-summary-header">

                <h2>🧾 Order Summary</h2>

            </div>

            <div className="summary-details">

                <div className="summary-row">
                    <span>Subtotal</span>
                    <strong>
                        ₹ {orderSummary.subtotal}
                    </strong>
                </div>

                <div className="summary-row discount-row">
                    <span>Discount</span>
                    <strong>
                        - ₹ {orderSummary.discount}
                    </strong>
                </div>

                <div className="summary-row">
                    <span>Delivery Charges</span>

                    <strong className="free">
                        {orderSummary.delivery === 0
                            ? "FREE"
                            : `₹ ${orderSummary.delivery}`
                        }
                    </strong>
                </div>

                <div className="summary-row">
                    <span>GST (18%)</span>

                    <strong>
                        ₹ {orderSummary.gst}
                    </strong>
                </div>

            </div>

            <hr />

            <div className="final-total">

                <h3>Total Amount</h3>

                <h2>
                    ₹ {total}
                </h2>

            </div>

            <div className="payment-status">

                <span className="status-dot"></span>

                <span>
                    Payment Completed
                </span>

            </div>

        </div>
    );
};

export default OrderSummaryCard;