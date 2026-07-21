import React from "react";
import "../Style/ShippingDetails.css";

const ShippingDetails = () => {

    const shippingAddress = {
        name: "Pranav Waingade",
        phone: "+91 7559215929",
        address: "123, Main Road",
        city: "Pune",
        state: "Maharashtra",
        pincode: "411001",
        country: "India"
    };

    return (
        <div className="shipping-details">

            <div className="shipping-header">

                <span className="shipping-icon">
                    📍
                </span>

                <h2>Shipping Address</h2>

            </div>

            <div className="shipping-content">

                <h3>{shippingAddress.name}</h3>

                <p>
                    {shippingAddress.address}
                </p>

                <p>
                    {shippingAddress.city}, {shippingAddress.state}
                </p>

                <p>
                    {shippingAddress.pincode}, {shippingAddress.country}
                </p>

                <div className="shipping-phone">

                    <span>📞</span>

                    <span>
                        {shippingAddress.phone}
                    </span>

                </div>

            </div>

        </div>
    );
};

export default ShippingDetails;