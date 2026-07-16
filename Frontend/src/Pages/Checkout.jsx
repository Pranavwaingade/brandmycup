import React from 'react'
import CheckoutAddress from '../Components/CheckoutAddress'
import PaymentMethod from '../Components/PaymentMethod'
import CheckoutSummary from '../Components/CheckoutSummary'
import PlaceOrderButton from '../Components/PlaceOrderButton'
import Navbar from '../Components/Navbar'

const Checkout = () => {
    return (
        <div style={{paddingBottom:'50px'}}>
            <Navbar />
            <div style={{ paddingTop: '75px', height: '150px', flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8b451389' }}>
                <h1>CheckOut</h1>
                <p style={{ backgroundColor: '#ffffff00', color: 'white', fontSize: 'x-large' }}>You have 4 items in your cart.</p>
            </div>
            <div style={{ display: 'flex',paddingTop:'10px', width: '100%', justifyContent: 'center', height: 'fit-content', alignContent: 'center', gap: '15px' }}>
                <div style={{
                    display: 'flex', flexDirection: 'column', height: 'fit-content', padding: '15px', width: '40%'
                    ,textAlign: "start",
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "20px",
                    background: "#fff",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                }}>
                    <CheckoutAddress />
                    <PaymentMethod />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', height: 'fit-content', padding: '15px', width: '25%', border: '1px solid black',textAlign: "start",
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "20px",
                    background: "#fff",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",justifyContent:'flex-start',alignItems:'center' }}>
                    <CheckoutSummary />
                    <PlaceOrderButton />
                </div>

            </div>


        </div>
    )
}

export default Checkout