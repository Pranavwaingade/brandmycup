import React from 'react'

const PaymentMethod = () => {
  return (
    <div style={{display:'flex' ,flexDirection:'column',justifyContent:'flex-start', gap:'5px'}}>
      <h2>💳 Payment Method</h2>
      <div style={{marginBottom: '10px',marginTop:'10px'}}><input type="radio"/> Cash On Delivery</div>
      <div style={{marginBottom: '10px',marginTop:'10px'}}><input type="radio"/> UPI</div>
      <div style={{marginBottom: '10px',marginTop:'10px'}}><input type="radio"/> Credit / Debit Card</div>     
    </div>
  )
}

export default PaymentMethod