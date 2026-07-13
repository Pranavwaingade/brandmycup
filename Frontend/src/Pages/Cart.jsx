import React from 'react'
import '../Style/Cart.css'
import Navbar from '../Components/Navbar'
import CartProducts from '../Components/CartProducts'
import OrderSummary from '../Components/OrderSummary'
import Reletedgrid from '../Components/Reletedgrid'
import Emptycart from '../Components/Emptycart'

const Cart = () => {
    const cartitem = 1;
    return (
        <div>
            <Navbar />
            <div style={{ paddingTop: '75px', border: '1px solid black', height: '180px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h1>Review your selected products before checkout.</h1>
            </div>
            <br />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'center', width: '80%', alignItems: 'center', height: 'fit-content', gap: '15px' }}>
                    {cartitem === 0 ? (
                        <Emptycart />
                    ) : (
                        <CartProducts />
                    )}
                    <OrderSummary />


                </div>
                <br />
                <br />
                <div style={{ width: '80%', display: 'flex', justifyContent: 'center', paddingBottom: '50px' }}>
                    <Reletedgrid />
                </div>
            </div>
        </div>
    )
}

export default Cart