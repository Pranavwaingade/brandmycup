import React from 'react'
import '../Style/ProductImage.css'
import img from '../img/Cups(2).png'

const ProductImage = () => {
 
  return (
  
    <div>
      <div className="images">
        <div className="mainimg">
          <img src={img} alt="Main" />
        </div>
        <div className="thumbnails">
            <img src={img} alt="thumb" />
            <img src={img} alt="thumb" />
            <img src={img} alt="thumb" />
            <img src={img} alt="thumb" />
        </div>
      </div>
    </div>
  )
}

export default ProductImage