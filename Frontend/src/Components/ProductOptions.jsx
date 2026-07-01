import React from 'react'
import '../Style/ProductOptions.css'

const ProductOptions = () => {
  return (
    <>
      <div className='part'>
        <div className="size">
          <h3>Select Cup Size</h3>

          <label htmlFor=""><input type="radio" /> 150ml</label>
          <label htmlFor=""><input type="radio" /> 250ml</label>
          <label htmlFor=""><input type="radio" /> 350ml</label>
          <label htmlFor=""><input type="radio" /> 500ml</label>
        </div>

        <div className="paperQuality">
          <h3>Paper Quality</h3>
          <label htmlFor=""><input type="radio" /> Standard</label>
          <label htmlFor=""><input type="radio" /> Premium</label>
          <label htmlFor=""><input type="radio" /> Eco Friendly</label>
        </div>

        <div className="Shape">
          <h3>Shapes</h3>
          <label htmlFor=""><input type="radio" /> Cylindrical</label>         
          <label htmlFor=""><input type="radio" /> Flared Rim</label>        
          <label htmlFor=""><input type="radio" /> Wide Bowl</label>       
          <label htmlFor=""><input type="radio" /> Thick Tapered</label>
        </div>

      </div>
    </>
  )
}

export default ProductOptions