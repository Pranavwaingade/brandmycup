import React from 'react'
import '../Style/ProductCard.css'

const ProductCard = ({ product }) => {
    
    return (
        <>
            <div className="productcard" style={{boxShadow: '0 4px 12px rgba(0, 0, 0, 0.29)'}}>
                <div className="productimg">
                    <img src={product.img} alt="" />
                </div>
                <div className="productdeatilas">
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <span style={{paddingRight:"40%"}}>{product.size}</span>   <span>⭐{product.rating}</span>
                    <h3 className='price'>₹ {product.price}/ Cup</h3>
                    <a href="/productdetails">View Details</a>
                </div>
            </div>

        </>
    )
}

export default ProductCard