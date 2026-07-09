import React, { useState } from 'react'
import '../Style/BrandingDetails.css'

const BrandingDetails = ({setbrandname ,setbrandcolor ,settagline}) => {

  
  return (
    <div style={{paddingBottom:'15px',borderBottom:'2px solid #A5B29A'}}>
      <input className='drnadinginput' required  type="text" placeholder='Company Name' />
      <input className='drnadinginput' required onChange={(e)=>setbrandname(e.target.value)} type="text" placeholder='Brand Name' />
      <input className='drnadinginput' required onChange={(e)=>settagline(e.target.value)} type="text" placeholder='Tagline' /><br />
      Brand Color: <input style={{width:'10%', height:'35px'}} onChange={(e)=>setbrandcolor(e.target.value)} type="color"/>
    </div>
  )
}

export default BrandingDetails