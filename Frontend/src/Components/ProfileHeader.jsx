import React from "react";
import "../Style/ProfileHeader.css";

const ProfileHeader = () => {

    const user = {
        name: "Pranav Waingade",
        email: "pranav@example.com",
        profileImage: "/images/profile.png"
    };

    const handleEditProfile = () => {
        alert("Edit Profile feature will be added soon.");
    };

    return (
        <div className="profile-header-card">

            <div className="profile-image-box">

                <img
                    src={user.profileImage}
                    alt="Profile"
                />

            </div>


            <div className="profile-user-info">

                <h2>
                    {user.name}
                </h2>

                <p>
                    {user.email}
                </p>

                <span className="member-badge">
                    ⭐ BrandMyCup Member
                </span>

            </div>


            <button
                className="edit-profile-btn"
                onClick={handleEditProfile}
            >
                ✏️ Edit Profile
            </button>

        </div>
    );
};

export default ProfileHeader;