import React from "react";

import WishlistCard from "./WishlistCard";

import "../Style/WishlistItems.css";


const WishlistItems = ({ wishlist }) => {


    return (

        <div className="wishlist-items">


            {wishlist.map((product) => (

                <WishlistCard

                    key={product.id}

                    product={product}

                />

            ))}


        </div>

    );

};


export default WishlistItems;