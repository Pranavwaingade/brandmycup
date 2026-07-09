import React from 'react'

const OrderSummary = () => {
  return (
    <div style={{display:'flex',flexDirection:'column',paddingBottom:'15px',padding:'15px',borderBottom:'2px solid #A5B29A',gap:'10px'
    }}>

    <div style={{display:'flex',justifyContent:'space-between'}}><p>Size of Cup:-</p> <p>150ml</p> </div>
    <div style={{display:'flex',justifyContent:'space-between'}}><p>Shape of Cup:-</p> <p>Cylindrical</p> </div>
    <div style={{display:'flex',justifyContent:'space-between'}}><p>Paper Quality:-</p> <p>Standard</p></div>
    <div style={{display:'flex',justifyContent:'space-between'}}><p>Qunatity You Chosse:-</p> <p>Pack of 100</p> </div>
    <div style={{display:'flex',justifyContent:'space-between', borderTop:'2px solid black'}}><h2>Total Price :- </h2> <h2>$ 150.00</h2> </div>

    </div>
  )
}

export default OrderSummary