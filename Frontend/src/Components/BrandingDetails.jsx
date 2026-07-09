import React from 'react'
import '../Style/BrandingDetails.css'

const BrandingDetails = () => {
  
  return (
    <div style={{paddingBottom:'15px',borderBottom:'2px solid #A5B29A'}}>
      <input className='drnadinginput'  type="text" placeholder='Company Name' />
      <input className='drnadinginput' type="text" placeholder='Brand Name' />
      <input className='drnadinginput' type="text" placeholder='Tagline' /><br />
      Brand Color: <input style={{width:'10%', height:'35px'}} type="color"/>
    </div>
  )
}

export default BrandingDetails