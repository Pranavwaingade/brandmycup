import React, { useEffect, useState } from "react";

import "../Style/Cart.css";

import Navbar from "../Components/Navbar";
import CartProducts from "../Components/CartProducts";
import OrderSummary from "../Components/cartOrderSummary";
import ReletedGrid from "../Components/Reletedgrid";
import Emptycart from "../Components/Emptycart";
import Footer from "../Components/Footer";


const Cart = () => {


    const [cartItems, setCartItems] = useState([]);


    const loadCart = () => {


        const savedCart =

            JSON.parse(

                localStorage.getItem("cart")

            ) || [];


        setCartItems(savedCart);

    };


    useEffect(() => {


        // Load cart when page opens
        loadCart();


        // Listen for cart changes
        window.addEventListener(

            "cartUpdated",

            loadCart

        );


        return () => {


            window.removeEventListener(

                "cartUpdated",

                loadCart

            );

        };


    }, []);


    return (

        <>


            <Navbar />


            <div className="cart-page">


                {/* Cart Header */}

                <div className="cart-header">

                    <h1>

                        Shopping Cart

                    </h1>


                    <p>

                        You have{" "}

                        {cartItems.length}

                        {" "}

                        item

                        {cartItems.length !== 1

                            ? "s"

                            : ""

                        }

                        {" "}

                        in your cart.

                    </p>

                </div>


                {/* Cart Container */}

                <div className="cart-container">


                    {cartItems.length === 0 ? (


                        <Emptycart />


                    ) : (


                        <>


                            <div className="cart-left">

                                <CartProducts

                                    cartItems={cartItems}

                                    setCartItems={setCartItems}

                                />

                            </div>


                            <div className="cart-right">

                                <OrderSummary

                                    cartItems={cartItems}

                                />

                            </div>


                        </>

                    )}

                </div>


                {/* Related Products */}

                <div className="related-section">


                    <h2>

                        You May Also Like

                    </h2>


                    <ReletedGrid />

                </div>


            </div>


            <Footer />

        </>

    );

};


export default Cart;