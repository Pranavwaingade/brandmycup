import React from 'react'
import cartbox from '../img/wallet.png'

const OrderSummary = () => {

  const subtotal = 3100;
  const discount = 300;
  const delivery = 0;
  const gst = (subtotal - discount) * 0.18;
  const total = subtotal - discount + gst + delivery;
  return (
    <div style={{ width: '30%', height: 'fit-content', borderRadius: '20px', padding: '15px', position: 'sticky', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.29)' }}>
      <div className="ordersummary" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

        <h2><img src={cartbox} alt="" style={{ width: '8%' }} />  Order Summary</h2>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Items</span>
          <span>4</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Discount</span>
          <span>-₹{discount}</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Delivery</span>
          <span style={{ color: "#2E8B57", fontWeight: "600" }}>{delivery}</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>GST (18%)</span>
          <span>₹{gst}</span>
        </div>

        <hr />

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h2></h2>
          <h2>₹{total}</h2>
        </div>

        <div style={{padding:'5px'}}>
          <input
            type="text"
            placeholder="Coupon Code"
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '8px', height: '30px'
            }}
          />

          <button  style={{ height: '30px', fontSize: 'larger', border: 'none', color: 'black', backgroundColor: 'none', marginLeft:'15px' }}>Apply</button>

        </div>
        <button style={{ background: " #A46C45", color: "white", border: "none", borderRadius: "10px", fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', transition: '.3s', width: 'fit-content', padding: '5px'}}>Proceed To Checkout</button>
        <p style={{color:'gray'}}>🔒 Secure Checkout</p>

      </div>
    </div>
  )
}

export default OrderSummary