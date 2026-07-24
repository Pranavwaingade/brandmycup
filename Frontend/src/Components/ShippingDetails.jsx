import React from "react";
import "../Style/ShippingDetails.css";


const ShippingDetails = ({ order }) => {


    const shippingAddress =

        order.shippingAddress;


    return (

        <div className="shipping-details">


            <div className="shipping-header">


                <span className="shipping-icon">

                    📍

                </span>


                <h2>

                    Shipping Address

                </h2>


            </div>


            <div className="shipping-content">


                <h3>

                    {shippingAddress.fullName}

                </h3>


                <p>

                    {shippingAddress.address}

                </p>


                <p>

                    {shippingAddress.city},{" "}

                    {shippingAddress.state}

                </p>


                <p>

                    {shippingAddress.pincode},{" "}

                    India

                </p>


                <div

                    className="shipping-phone"

                >


                    <span>

                        📞

                    </span>


                    <span>

                        {shippingAddress.mobile}

                    </span>


                </div>


                <div

                    className="shipping-email"

                >


                    <span>

                        ✉️

                    </span>


                    <span>

                        {shippingAddress.email}

                    </span>


                </div>


            </div>


        </div>

    );

};


export default ShippingDetails;