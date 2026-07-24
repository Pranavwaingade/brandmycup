import React from "react";
import cartbox from "../img/wallet.png";


const CheckoutSummary = ({ cartItems }) => {


    // Total Items
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
    const discount = 300;


    // Delivery
    const delivery = 0;


    // Taxable Amount
    const taxableAmount = Math.max(

        subtotal - discount,

        0

    );


    // GST
    const gst = taxableAmount * 0.18;


    // Final Total
    const total =

        taxableAmount

        + gst

        + delivery;


    return (

        <div className="checkout-summary">


            <div className="ordersummary">


                <h2>

                    <img

                        src={cartbox}

                        alt="Order Summary" style={{width:'8%'}}

                    />

                    Order Summary

                </h2>


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

                        ₹

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

                        - ₹

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

                        ₹

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

                        ₹

                        {total.toFixed(2)}

                    </h2>

                </div>


                {/* Coupon */}

                <div className="coupon-box">


                    <input

                        type="text"

                        placeholder="Coupon Code"

                    />


                    <button>

                        Apply

                    </button>


                </div>


            </div>

        </div>

    );

};


export default CheckoutSummary;