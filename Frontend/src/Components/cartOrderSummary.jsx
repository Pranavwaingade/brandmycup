import React from "react";
import "../Style/cartOrderSummary.css";
import cartbox from "../img/wallet.png";
import { useNavigate } from "react-router-dom";


const OrderSummary = ({ cartItems }) => {


    const navigate = useNavigate();


    // Total number of products
    const items = cartItems.reduce(

        (total, item) => {

            return total + item.quantity;

        },

        0

    );


    // Subtotal
    const subtotal = cartItems.reduce(

        (total, item) => {

            return total + (

                item.price * item.quantity

            );

        },

        0

    );


    // Discount
    const discount = subtotal/2;


    // Delivery
    const delivery = 0;


    // GST
    const gst = (

        (subtotal - discount) * 18

    ) / 100;


    // Final Total
    const total =

        subtotal

        - discount

        + gst

        + delivery;


    return (

        <div className="summary-card">


            {/* Header */}

            <div className="summary-header">

                <h2>

                    <img

                        src={cartbox}

                        alt="Order Summary Icon"

                    />

                    Order Summary

                </h2>

            </div>


            {/* Items */}

            <div className="summary-row">

                <span>

                    Items

                </span>


                <span>

                    {items}

                </span>

            </div>


            {/* Subtotal */}

            <div className="summary-row">

                <span>

                    Subtotal

                </span>


                <span>

                    ₹{" "}

                    {subtotal.toLocaleString(

                        "en-IN"

                    )}

                </span>

            </div>


            {/* Discount */}

            <div className="summary-row">

                <span>

                    Discount

                </span>


                <span>

                    - ₹{" "}

                    {discount.toLocaleString(

                        "en-IN"

                    )}

                </span>

            </div>


            {/* Delivery */}

            <div className="summary-row">

                <span>

                    Delivery

                </span>


                <span className="free">

                    FREE

                </span>

            </div>


            {/* GST */}

            <div className="summary-row">

                <span>

                    GST (18%)

                </span>


                <span>

                    ₹{" "}

                    {gst.toFixed(2)}

                </span>

            </div>


            <hr />


            {/* Total */}

            <div className="summary-total">

                <h3>

                    Total

                </h3>


                <h2>

                    ₹{" "}

                    {total.toFixed(2)}

                </h2>

            </div>


            {/* Coupon */}

            <div className="coupon-box">

                <input

                    type="text"

                    placeholder="Enter Coupon Code"

                />


                <button>

                    Apply

                </button>

            </div>


            {/* Checkout */}

            <button

                className="checkout-btn"

                onClick={() =>

                    navigate(

                        "/cart/checkout"

                    )

                }

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