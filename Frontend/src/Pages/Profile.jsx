import React from "react";
import "../Style/Profile.css";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import ProfileHeader from "../Components/ProfileHeader";
import PersonalInfo from "../Components/PersonalInfo";
import AddressSection from "../Components/AddressSection";
import AccountSettings from "../Components/AccountSettings";

const Profile = () => {
    return (
        <>
            <Navbar />

            <main className="profile-page">

                {/* ===========================
                    Profile Header
                =========================== */}

                <div className="profile-page-header">

                    <h1>
                        My Profile
                    </h1>

                    <p>
                        Manage your personal information and account
                    </p>

                </div>


                {/* ===========================
                    Profile Content
                =========================== */}

                <div className="profile-container">

                    {/* Profile Header */}

                    <ProfileHeader />


                    {/* Personal Information */}

                    <PersonalInfo />


                    {/* Saved Addresses */}

                    <AddressSection />


                    {/* Account Settings */}

                    <AccountSettings />

                </div>

            </main>

            <Footer />

        </>
    );
};

export default Profile;