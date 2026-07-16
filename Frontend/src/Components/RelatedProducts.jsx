import React from 'react';
import '../Style/RelatedProducts.css';
import Reletedgrid from './Reletedgrid';

const RelatedProducts = () => {
  return (
    <section className="related-products">

      <div className="related-header">
        <h2>Related Products</h2>
        <p>
          You may also like these premium paper cups.
        </p>
      </div>

      <Reletedgrid />

    </section>
  );
};

export default RelatedProducts;