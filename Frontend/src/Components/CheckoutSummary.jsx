import React from 'react'
import cartbox from '../img/wallet.png'
import { useNavigate } from 'react-router-dom';

const CheckoutSummary = () => {
  const navigate = useNavigate()

  const subtotal = 3100;
  const discount = 300;
  const delivery = 0;
  const gst = (subtotal - discount) * 0.18;
  const total = subtotal - discount + gst + delivery;

  const handelclick = () => {
    navigate('/Cart/checkout');
  };
  return (
    <div style={{ width: '95%' }}>
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
          <h2 style={{
            color: '#9C6B45',
            fontSize: '36px',
            fontWeight: '700'
          }}>₹{total}</h2>
        </div>

        <div style={{ padding: '5px' }}>
          <input
            type="text"
            placeholder="Coupon Code"
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '8px', height: '30px'
            }}
          />

          <button style={{ height: '30px', fontSize: 'larger', border: 'none', color: 'black', backgroundColor: 'none', marginLeft: '15px' }}>Apply</button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutSummary