import React from 'react';
import '../Style/ProductImage.css';
import img from '../img/Cups(2).png';

const ProductImage = () => {
  return (
    <div className="images">

      <div className="mainimg">
        <img src={img} alt="Main Product" />
      </div>

      <div className="thumbnails">
        <img src={img} alt="thumb1" />
        <img src={img} alt="thumb2" />
        <img src={img} alt="thumb3" />
        <img src={img} alt="thumb4" />
      </div>

    </div>
  );
};

export default ProductImage;