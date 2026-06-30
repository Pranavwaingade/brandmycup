import React from 'react'
import '../Style/ProductOptions.css'

const ProductOptions = () => {
  return (
    <>
      <div className='part'>
        <div className="size">
          <h3>Select Cup Size</h3>

          <label htmlFor=""><input type="checkbox" /> 150ml</label>
          <label htmlFor=""><input type="checkbox" /> 250ml</label>
          <label htmlFor=""><input type="checkbox" /> 350ml</label>
          <label htmlFor=""><input type="checkbox" /> 500ml</label>
        </div>

        <div className="paperQuality">
          <h3>Paper Quality</h3>
          <label htmlFor=""><input type="checkbox" /> Standard</label>
          <label htmlFor=""><input type="checkbox" /> Premium</label>
          <label htmlFor=""><input type="checkbox" /> Eco Friendly</label>
        </div>

        <div className="Shape">
          <h3>Shapes</h3>
          <label htmlFor=""><input type="checkbox" /> Cylindrical</label>         
          <label htmlFor=""><input type="checkbox" /> Flared Rim</label>        
          <label htmlFor=""><input type="checkbox" /> Wide Bowl</label>       
          <label htmlFor=""><input type="checkbox" /> Thick Tapered</label>
        </div>

      </div>
    </>
  )
}

export default ProductOptions