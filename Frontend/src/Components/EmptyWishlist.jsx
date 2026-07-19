import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/EmptyWishlist.css";

const EmptyWishlist = () => {

    const navigate = useNavigate();

    return (

        <div className="empty-wishlist">

            <div className="empty-card">

                <div className="wishlist-icon">
                    ❤️
                </div>

                <h1>Your Wishlist is Empty</h1>

                <p>
                    You haven't added any favourite paper cups yet.
                    Browse our premium collection and save your favourites.
                </p>

                <button
                    className="shop-btn"
                    onClick={() => navigate("/products")}
                >
                    Browse Products
                </button>

            </div>

        </div>

    );
};

export default EmptyWishlist;