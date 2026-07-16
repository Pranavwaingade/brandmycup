import React from 'react'
import '../Style/Cart.css'
import Navbar from '../Components/Navbar'
import CartProducts from '../Components/CartProducts'
import OrderSummary from '../Components/cartOrderSummary'
import Reletedgrid from '../Components/Reletedgrid'
import Emptycart from '../Components/Emptycart'

const Cart = () => {
    const cartitem = 1;
    return (
        <div>
            <Navbar />
            <div style={{ paddingTop: '75px', height: '180px',flexDirection:'column', display: 'flex', justifyContent: 'center', alignItems: 'center' ,backgroundColor:'#8b451389'}}>
                <h1>Shopping Cart</h1> 
                <p style={{backgroundColor:'#ffffff00', color:'white', fontSize:'x-large'}}>You have 4 items in your cart.</p>
            </div>

            <hr />
            <br />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'center', width: '80%', alignItems: 'start', height: 'fit-content', gap: '15px' }}>
                    {cartitem === 0 ? (
                        <Emptycart />
                    ) : (
                        <div style={{display:'flex', gap:'15px',width:'100%'}}>
                            <CartProducts />
                            <OrderSummary />
                        </div>
                        
                    )}
                    
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