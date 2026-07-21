import React from "react";
import "../Style/AddressSection.css";

const AddressSection = () => {

    const address = {
        name: "Pranav Waingade",
        phone: "+91 9876543210",
        addressLine: "123, Main Road",
        city: "Pune",
        state: "Maharashtra",
        pincode: "411001"
    };

    return (
        <div className="address-section">

            <div className="address-header">

                <h2>
                    📍 Saved Address
                </h2>

                <button className="edit-address-btn">
                    ✏️ Edit
                </button>

            </div>


            <div className="address-card">

                <div className="address-card-header">

                    <h3>
                        {address.name}
                    </h3>

                    <span className="address-type">
                        Home
                    </span>

                </div>


                <p>
                    {address.addressLine}
                </p>

                <p>
                    {address.city}, {address.state}
                </p>

                <p>
                    PIN Code: {address.pincode}
                </p>

                <p>
                    📞 {address.phone}
                </p>

            </div>


            <button className="add-address-btn">
                + Add New Address
            </button>

        </div>
    );
};

export default AddressSection;