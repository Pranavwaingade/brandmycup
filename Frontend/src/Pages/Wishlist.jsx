import React from "react";
import Navbar from "../Components/Navbar";
import EmptyWishlist from "../Components/EmptyWishlist";
import WishlistItem from "../Components/WishlistItem";
import Footer from "../Components/Footer";
import "../Style/Wishlist.css";

const Wishlist = () => {

    const wishlistCount = 4;

    return (
        <>
            <Navbar />

            <div className="wishlist-page">

                <div className="wishlist-header">
                    <h1>My Wishlist ❤️</h1>

                    <p>
                        {wishlistCount} Products saved for later.
                    </p>

                </div>

                <div className="wishlist-container">

                    {
                        wishlistCount === 0 ?

                            <EmptyWishlist />

                            :

                            <WishlistItem />

                    }

                </div>

            </div>

            <Footer />

        </>
    );
};

export default Wishlist;