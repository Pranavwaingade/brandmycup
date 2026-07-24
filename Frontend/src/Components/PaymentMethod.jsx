import React, { useState } from "react";

const PaymentMethod = ({ setPaymentMethod }) => {

    const [selectedMethod, setSelectedMethod] = useState("");


    const handlePaymentChange = (event) => {

        const method = event.target.value;

        setSelectedMethod(method);

        setPaymentMethod(method);

    };


    return (

        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "12px"
            }}
        >

            <h2>
                💳 Payment Method
            </h2>


            <label>

                <input

                    type="radio"

                    name="payment"

                    value="Cash On Delivery"

                    checked={selectedMethod === "Cash On Delivery"}

                    onChange={handlePaymentChange}

                />

                {" "}Cash On Delivery

            </label>


            <label>

                <input

                    type="radio"

                    name="payment"

                    value="UPI"

                    checked={selectedMethod === "UPI"}

                    onChange={handlePaymentChange}

                />

                {" "}UPI

            </label>


            <label>

                <input

                    type="radio"

                    name="payment"

                    value="Credit / Debit Card"

                    checked={selectedMethod === "Credit / Debit Card"}

                    onChange={handlePaymentChange}

                />

                {" "}Credit / Debit Card

            </label>

        </div>

    );

};


export default PaymentMethod;