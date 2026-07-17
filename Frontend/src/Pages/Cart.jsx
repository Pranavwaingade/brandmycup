import React from 'react';
import '../Style/Cart.css';
import Navbar from '../Components/Navbar';
import CartProducts from '../Components/CartProducts';
import OrderSummary from '../Components/cartOrderSummary';
import Reletedgrid from '../Components/Reletedgrid';
import Emptycart from '../Components/Emptycart';
import Footer from '../Components/Footer';

const Cart = () => {
    const cartitem = 1;

    return (
        <>
            <Navbar />

            <div className="cart-page">

                <div className="cart-header">
                    <h1>Shopping Cart</h1>
                    <p>You have 4 items in your cart.</p>
                </div>

                <div className="cart-container">

                    {cartitem === 0 ? (
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

                    <Reletedgrid />
                </div>

            </div>

            <Footer />
        </>
    );
};

export default Cart;