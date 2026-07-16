import React from 'react';
import '../Style/ProductInfo.css';
import ProductOptions from '../Components/ProductOptions';
import QuantitySelector from '../Components/QuantitySelector';
import ProductActions from '../Components/ProductActions';
import ProductTabs from '../Components/ProductTabs';

const ProductInfo = () => {
  return (
    <div className="productinfo">

      <div className="prodetails">

        <h1 className="product-title">
          Tea Paper Cup
        </h1>

        <div className="product-rating">
          ⭐ 4.8 (120 Reviews)
        </div>

        <h2 className="product-price">
          ₹3 <span>/ Cup</span>
        </h2>

        <p className="product-description">
          Premium quality paper cup specially designed for serving hot beverages.
          Leak-proof, eco-friendly and suitable for cafes, restaurants and events.
        </p>

        <div className="stock">
          ✅ In Stock
        </div>

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
  );
};

export default ProductInfo;