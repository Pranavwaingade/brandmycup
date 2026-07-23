import React, { useEffect, useState } from "react";

import Navbar from "../Components/Navbar";
import EmptyWishlist from "../Components/EmptyWishlist";
import WishlistItem from "../Components/WishlistItem";
import Footer from "../Components/Footer";

import "../Style/Wishlist.css";


const Wishlist = () => {


    const [wishlist, setWishlist] = useState([]);


    const loadWishlist = () => {

        const savedWishlist =
            JSON.parse(
                localStorage.getItem("wishlist")
            ) || [];


        setWishlist(savedWishlist);

    };


    useEffect(() => {


        // Load wishlist when page opens
        loadWishlist();


        // Listen for wishlist changes
        window.addEventListener(
            "wishlistUpdated",
            loadWishlist
        );


        return () => {

            window.removeEventListener(
                "wishlistUpdated",
                loadWishlist
            );

        };

    }, []);


    return (

        <>

            <Navbar />


            <div className="wishlist-page">


                {/* Wishlist Header */}

                <div className="wishlist-header">

                    <h1>
                        My Wishlist ❤️
                    </h1>


                    <p>

                        {wishlist.length}

                        {" "}

                        {wishlist.length === 1
                            ? "Product"
                            : "Products"
                        }

                        {" "}
                        saved for later.

                    </p>

                </div>


                {/* Wishlist Content */}

                <div className="wishlist-container">


                    {wishlist.length === 0 ? (

                        <EmptyWishlist />

                    ) : (

                        <WishlistItem
                            wishlist={wishlist}
                            setWishlist={setWishlist}
                        />

                    )}

                </div>

            </div>


            <Footer />

        </>

    );

};


export default Wishlist;