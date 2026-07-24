import React from "react";
import "../Style/OrderSummaryCard.css";


const OrderSummaryCard = ({ order }) => {


    return (

        <div className="order-summary-card">


            <div className="order-summary-header">


                <h2>

                    🧾 Order Summary

                </h2>


            </div>


            <div className="summary-details">


                {/* Subtotal */}

                <div className="summary-row">


                    <span>

                        Subtotal

                    </span>


                    <strong>

                        ₹{" "}

                        {order.subtotal.toLocaleString(

                            "en-IN"

                        )}

                    </strong>


                </div>


                {/* Discount */}

                <div

                    className=

                        "summary-row discount-row"

                >


                    <span>

                        Discount

                    </span>


                    <strong>

                        - ₹{" "}

                        {order.discount.toLocaleString(

                            "en-IN"

                        )}

                    </strong>


                </div>


                {/* Delivery */}

                <div className="summary-row">


                    <span>

                        Delivery Charges

                    </span>


                    <strong className="free">


                        {order.delivery === 0

                            ? "FREE"

                            : `₹ ${order.delivery}`

                        }


                    </strong>


                </div>


                {/* GST */}

                <div className="summary-row">


                    <span>

                        GST (18%)

                    </span>


                    <strong>

                        ₹{" "}

                        {order.gst.toFixed(2)}

                    </strong>


                </div>


            </div>


            <hr />


            {/* Final Total */}

            <div className="final-total">


                <h3>

                    Total Amount

                </h3>


                <h2>


                    ₹{" "}

                    {order.total.toFixed(2)}


                </h2>


            </div>


            {/* Payment Status */}

            <div className="payment-status">


                <span className="status-dot"></span>


                <span>


                    {order.paymentMethod ===

                        "Cash On Delivery"

                        ? "Payment Pending"

                        : "Payment Completed"

                    }


                </span>


            </div>


        </div>

    );

};


export default OrderSummaryCard;