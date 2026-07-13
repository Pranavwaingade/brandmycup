import React from 'react'
import CartItem from './CartItem'

const CartProducts = () => {
  return (
    <div style={{display:'flex',flexDirection:'column', width:'85%', border:'1px solid black', height:'fit-content' ,borderRadius:'20px',
        padding:'5px'
    }}>
    <CartItem/>

    
    </div>
  )
}

export default CartProducts