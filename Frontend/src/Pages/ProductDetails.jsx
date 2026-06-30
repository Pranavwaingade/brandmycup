import React from 'react'
import '../Style/ProductDetails.css'
import Navbar from '../Components/Navbar'
import ProductImage from '../Components/ProductImage'
import ProductInfo from '../Components/ProductInfo'
import RelatedProducts from '../Components/RelatedProducts'

import Footer from '../Components/Footer'

const ProductDetails = () => {
  return (
    <>
    <Navbar />
    <div className="productdetial">
        <br />
        <br />
        <div className="perticularpro">
            <ProductImage/>
            <ProductInfo/>
        </div>
        <RelatedProducts/>
    </div>

    <Footer/>
    </>
  )
}

export default ProductDetails