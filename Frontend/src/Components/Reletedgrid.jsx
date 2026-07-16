import React from 'react';
import ProductCard from './ProductCard';
import '../Style/Reletedgrid.css';
import products from '../data/products';

const Reletedgrid = () => {
  return (
    <div className="relatedgrid">
      {products.slice(0, 4).map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default Reletedgrid;