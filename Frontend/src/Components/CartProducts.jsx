import React from 'react'
import CartItem from './CartItem'

const CartProducts = () => {
  return (
    <div style={{display:'flex',flexDirection:'column', width:'85%',boxShadow:'0 4px 12px rgba(0, 0, 0, 0.29)', height:'fit-content' ,borderRadius:'20px',
        padding:'5px'
    }}>
    <CartItem/>

    
    </div>
  )
}

export default CartProducts