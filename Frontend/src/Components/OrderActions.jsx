import React from "react";
import { useNavigate } from "react-router-dom";

import "../Style/OrderActions.css";


const OrderActions = ({ order }) => {


    const navigate = useNavigate();


    // Download Invoice
    const handleDownloadInvoice = () => {


        alert(

            "Invoice download feature will be connected with backend."

        );

    };


    // Track Order
    const handleTrackOrder = () => {


        alert(

            `Your order status is: ${order.status}`

        );

    };


    // Buy Again
    const handleBuyAgain = () => {


        const existingCart =

            JSON.parse(

                localStorage.getItem("cart")

            ) || [];


        order.items.forEach((product) => {


            const existingProduct =

                existingCart.find(

                    (item) =>

                        item.id === product.id

                );


            if (existingProduct) {


                existingProduct.quantity +=

                    product.quantity;


            } else {


                existingCart.push({

                    ...product

                });

            }

        });


        // Save updated cart
        localStorage.setItem(

            "cart",

            JSON.stringify(

                existingCart

            )

        );


        // Update Navbar count
        window.dispatchEvent(

            new Event(

                "cartUpdated"

            )

        );


        alert(

            "Products added to your cart 🛒"

        );


        navigate(

            "/cart"

        );

    };


    return (

        <div className="order-actions">


            {/* Invoice */}

            <button

                className="invoice-btn"

                onClick={

                    handleDownloadInvoice

                }

            >

                🧾 Download Invoice

            </button>


            {/* Track Order */}

            <button

                className="track-btn"

                onClick={

                    handleTrackOrder

                }

            >

                🚚 Track Order

            </button>


            {/* Buy Again */}

            <button

                className="buy-again-btn"

                onClick={

                    handleBuyAgain

                }

            >

                🛒 Buy Again

            </button>


        </div>

    );

};


export default OrderActions;