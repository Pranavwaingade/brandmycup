import React from 'react'
import '../Style/ProductCard.css'

const ProductCard = ({ product }) => {
    
    return (
        <>
            <div className="productcard">
                <div className="productimg">
                    <img src={product.img} alt="" />
                </div>
                <div className="productdeatilas">
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <span style={{paddingRight:"40%"}}>{product.size}</span>   <span>⭐{product.rating}</span>
                    <h3 className='price'>₹ {product.price}/ Cup</h3>
                    <a href="">View Details</a>
                </div>
            </div>

        </>
    )
}

export default ProductCard