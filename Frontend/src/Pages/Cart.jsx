import React from 'react';
import '../Style/Cart.css';
import Navbar from '../Components/Navbar';
import CartProducts from '../Components/CartProducts';
import OrderSummary from '../Components/cartOrderSummary';
import ReletedGrid from '../Components/Reletedgrid';
import Emptycart from '../Components/Emptycart';
import Footer from '../Components/Footer';

const Cart = () => {
    const cartItems = [1,2];

    return (
        <>
            <Navbar />

            <div className="cart-page">

                <div className="cart-header">
                    <h1>Shopping Cart</h1>
                    <p>
                        You have {cartItems.length} item{cartItems.length !== 1 ? "s" : ""} in your cart.
                    </p>
                </div>

                <div className="cart-container">

                    {cartItems === 0 ? (
                        <Emptycart />
                    ) : (
                        <>
                            <div className="cart-left">
                                <CartProducts />
                            </div>

                            <div className="cart-right">
                                <OrderSummary />
                            </div>
                        </>
                    )}

                </div>

                <div className="related-section">
                    <h2>You May Also Like</h2>

                    <ReletedGrid />
                </div>

            </div>

            <Footer />
        </>
    );
};

export default Cart;