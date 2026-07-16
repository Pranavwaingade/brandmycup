import React from 'react'
import { useNavigate } from 'react-router-dom'

const PlaceOrderButton = () => {
  const navigate =useNavigate
  return (
    <div style={{width:'99%',paddingTop:'5px'}}>
              <button onClick={()=>{navigate('/')}}  style={{ background: " #A46C45", color: "white", border: "none", borderRadius: "10px", fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', transition: '.3s', width: '100%', padding: '5px' }}>Place Order</button>
    </div>
  )
}

export default PlaceOrderButton