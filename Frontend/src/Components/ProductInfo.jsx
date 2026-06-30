import React from 'react'
import '../Style/ProductInfo.css'
import ProductOptions from '../Components/ProductOptions'
import QuantitySelector from '../Components/QuantitySelector'
import ProductActions from '../Components/ProductActions'
import ProductTabs from '../Components/ProductTabs'

const ProductInfo = () => {
  return (
    <>
      <div className="productinfo">
        <div className="prodeatils">
          <h1 style={{fontSize: 'xxx-large'}}>Tea Paper Cups</h1>  
          <span style={{fontSize: 'x-large'}}>⭐4.8</span>
          <h3 className='price' style={{fontSize: 'xx-large'}}>₹ 3/ Cup</h3>
          <p style={{fontSize: 'larger'}}>Premium paper cup for hot beverages.</p>
          <h1>✅In Stock</h1>
        </div>
        <div className="productoptions">
          <ProductOptions />
        </div>
        <div className="QunatityItem">
          <QuantitySelector />
        </div>
        <div className="proaction">
          <ProductActions />
        </div>
        <div className="protab">
          <ProductTabs />
        </div>
      </div>
    </>
  )
}

export default ProductInfo