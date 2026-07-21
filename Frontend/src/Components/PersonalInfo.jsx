import React from "react";
import "../Style/PersonalInfo.css";

const PersonalInfo = () => {

    const userInfo = {
        fullName: "Pranav Waingade",
        email: "pranav@example.com",
        phone: "+91 9876543210",
        dateOfBirth: "15 August 2004"
    };

    return (
        <div className="personal-info-card">

            <div className="personal-info-header">

                <h2>
                    👤 Personal Information
                </h2>

                <button className="edit-info-btn">
                    ✏️ Edit
                </button>

            </div>


            <div className="personal-info-grid">

                <div className="info-item">

                    <span className="info-label">
                        Full Name
                    </span>

                    <p>
                        {userInfo.fullName}
                    </p>

                </div>


                <div className="info-item">

                    <span className="info-label">
                        Email Address
                    </span>

                    <p>
                        {userInfo.email}
                    </p>

                </div>


                <div className="info-item">

                    <span className="info-label">
                        Phone Number
                    </span>

                    <p>
                        {userInfo.phone}
                    </p>

                </div>


                <div className="info-item">

                    <span className="info-label">
                        Date of Birth
                    </span>

                    <p>
                        {userInfo.dateOfBirth}
                    </p>

                </div>

            </div>

        </div>
    );
};

export default PersonalInfo;