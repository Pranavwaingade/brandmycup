import React, { useState } from "react";
import "../Style/CheckoutAddress.css";


const CheckoutAddress = ({ setShippingAddress }) => {


    const [address, setAddress] = useState({

        fullName: "",
        mobile: "",
        email: "",
        address: "",
        city: "",
        state: "",
        pincode: ""

    });


    const handleChange = (event) => {


        const { name, value } = event.target;


        const updatedAddress = {

            ...address,

            [name]: value

        };


        setAddress(updatedAddress);


        // Send address data to Checkout
        setShippingAddress(updatedAddress);

    };


    return (

        <div className="checkout-address">


            <h2>

                📝 Shipping Address

            </h2>


            <input

                type="text"

                name="fullName"

                placeholder="Full Name"

                value={address.fullName}

                onChange={handleChange}

                required

            />


            <input

                type="tel"

                name="mobile"

                placeholder="Mobile Number"

                value={address.mobile}

                onChange={handleChange}

                required

            />


            <input

                type="email"

                name="email"

                placeholder="Email"

                value={address.email}

                onChange={handleChange}

                required

            />


            <input

                type="text"

                name="address"

                placeholder="Address"

                value={address.address}

                onChange={handleChange}

                required

            />


            <input

                type="text"

                name="city"

                placeholder="City"

                value={address.city}

                onChange={handleChange}

                required

            />


            <input

                type="text"

                name="state"

                placeholder="State"

                value={address.state}

                onChange={handleChange}

                required

            />


            <input

                type="text"

                name="pincode"

                placeholder="Pincode"

                value={address.pincode}

                onChange={handleChange}

                required

            />


            <hr />

        </div>

    );

};


export default CheckoutAddress;