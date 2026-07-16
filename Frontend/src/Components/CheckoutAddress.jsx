import React from 'react'

const CheckoutAddress = () => {
  return (
    <div style={{display:'flex',flexDirection:'column',width:'99%', gap:'8px' }}>
      <h2> 📝 Shipping Address</h2>
      <input type="text" required placeholder="Full Name" style={{   border: '1px solid #ddd',   borderRadius: '8px',   padding: '8px', height: '30px'  }}/>
      <input type="text" required placeholder="Mobile Number" style={{   border: '1px solid #ddd',   borderRadius: '8px',   padding: '8px', height: '30px' }}/>
      <input type="text" required placeholder="Email" style={{   border: '1px solid #ddd',   borderRadius: '8px',   padding: '8px', height: '30px' }}/>
      <input type="text" required placeholder="Address" style={{   border: '1px solid #ddd',   borderRadius: '8px',   padding: '8px', height: '30px' }}/>
      <input type="text" required placeholder="City" style={{   border: '1px solid #ddd',   borderRadius: '8px',   padding: '8px', height: '30px' }}/>
      <input type="text" required placeholder="State" style={{   border: '1px solid #ddd',   borderRadius: '8px',   padding: '8px', height: '30px' }}/>
      <input type="text" required placeholder="Pincode" style={{   border: '1px solid #ddd',   borderRadius: '8px',   padding: '8px', height: '30px' }}/>
      <hr />
    </div>
  )
}

export default CheckoutAddress