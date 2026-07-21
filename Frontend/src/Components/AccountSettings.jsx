import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/AccountSettings.css";

const AccountSettings = () => {

    const navigate = useNavigate();

    const handleOrders = () => {
        navigate("/orders");
    };

    const handleWishlist = () => {
        navigate("/wishlist");
    };

    const handleChangePassword = () => {
        alert("Change Password feature will be added soon.");
    };

    const handleLogout = () => {
        alert("Logout feature will be connected with authentication.");
    };

    return (
        <div className="account-settings">

            <div className="settings-header">

                <h2>
                    ⚙️ Account Settings
                </h2>

            </div>


            <div className="settings-list">

                <button
                    className="setting-item"
                    onClick={handleOrders}
                >

                    <span className="setting-icon">
                        📦
                    </span>

                    <span className="setting-info">

                        <strong>
                            My Orders
                        </strong>

                        <small>
                            View your order history
                        </small>

                    </span>

                    <span className="setting-arrow">
                        →
                    </span>

                </button>


                <button
                    className="setting-item"
                    onClick={handleWishlist}
                >

                    <span className="setting-icon">
                        ❤️
                    </span>

                    <span className="setting-info">

                        <strong>
                            My Wishlist
                        </strong>

                        <small>
                            View your saved products
                        </small>

                    </span>

                    <span className="setting-arrow">
                        →
                    </span>

                </button>


                <button
                    className="setting-item"
                    onClick={handleChangePassword}
                >

                    <span className="setting-icon">
                        🔒
                    </span>

                    <span className="setting-info">

                        <strong>
                            Change Password
                        </strong>

                        <small>
                            Update your account password
                        </small>

                    </span>

                    <span className="setting-arrow">
                        →
                    </span>

                </button>


                <button
                    className="setting-item logout-item"
                    onClick={handleLogout}
                >

                    <span className="setting-icon">
                        🚪
                    </span>

                    <span className="setting-info">

                        <strong>
                            Logout
                        </strong>

                        <small>
                            Sign out from your account
                        </small>

                    </span>

                    <span className="setting-arrow">
                        →
                    </span>

                </button>

            </div>

        </div>
    );
};

export default AccountSettings;