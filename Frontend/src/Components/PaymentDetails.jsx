import React from "react";
import "../Style/PaymentDetails.css";

const PaymentDetails = () => {

    const payment = {
        method: "UPI",
        provider: "Google Pay",
        transactionId: "TXN20260721001",
        paymentDate: "21 July 2026",
        status: "Paid"
    };

    return (
        <div className="payment-details">

            <div className="payment-header">

                <span className="payment-icon">
                    💳
                </span>

                <h2>Payment Details</h2>

            </div>

            <div className="payment-content">

                <div className="payment-row">
                    <span>Payment Method</span>
                    <strong>{payment.method}</strong>
                </div>

                <div className="payment-row">
                    <span>Payment Provider</span>
                    <strong>{payment.provider}</strong>
                </div>

                <div className="payment-row">
                    <span>Transaction ID</span>
                    <strong>{payment.transactionId}</strong>
                </div>

                <div className="payment-row">
                    <span>Payment Date</span>
                    <strong>{payment.paymentDate}</strong>
                </div>

                <div className="payment-row">
                    <span>Payment Status</span>

                    <strong className="payment-status">
                        <span className="payment-status-dot"></span>
                        {payment.status}
                    </strong>
                </div>

            </div>

        </div>
    );
};

export default PaymentDetails;