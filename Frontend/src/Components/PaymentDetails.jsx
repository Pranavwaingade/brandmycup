import React from "react";
import "../Style/PaymentDetails.css";


const PaymentDetails = ({ order }) => {


    return (

        <div className="payment-details">


            <div className="payment-header">


                <span className="payment-icon">

                    💳

                </span>


                <h2>

                    Payment Details

                </h2>


            </div>


            <div className="payment-content">


                {/* Payment Method */}

                <div className="payment-row">

                    <span>

                        Payment Method

                    </span>


                    <strong>

                        {order.paymentMethod}

                    </strong>

                </div>


                {/* Payment Status */}

                <div className="payment-row">


                    <span>

                        Payment Status

                    </span>


                    <strong

                        className="payment-status"

                    >

                        <span

                            className="payment-status-dot"

                        ></span>


                        {order.paymentMethod ===

                            "Cash On Delivery"

                            ? "Pending"

                            : "Paid"

                        }

                    </strong>

                </div>


                {/* Payment Date */}

                <div className="payment-row">

                    <span>

                        Order Date

                    </span>


                    <strong>

                        {order.orderDate}

                    </strong>

                </div>


                {/* Transaction */}

                <div className="payment-row">

                    <span>

                        Transaction ID

                    </span>


                    <strong>

                        {order.paymentMethod ===

                            "Cash On Delivery"

                            ? "Not Available"

                            : order.id

                        }

                    </strong>

                </div>


            </div>

        </div>

    );

};


export default PaymentDetails;