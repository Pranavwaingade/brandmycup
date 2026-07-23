import React from "react";
import CartItem from "./CartItem";

import "../Style/CartProduct.css";


const CartProducts = ({ cartItems, setCartItems }) => {


    return (

        <div className="cart-products">


            {cartItems.map((product) => (

                <CartItem

                    key={product.id}

                    product={product}

                    setCartItems={setCartItems}

                />

            ))}


        </div>

    );

};


export default CartProducts;