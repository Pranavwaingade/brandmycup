import React from "react";
import "../Style/ProductGrid.css";
import ProductCard from "./ProductCard";
import products from "../data/products";

const ProductGrid = () => {
  return (
    <section className="product-grid">

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}

    </section>
  );
};

export default ProductGrid;