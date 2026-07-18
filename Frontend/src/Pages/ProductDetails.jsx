import React from "react";
import "../Style/ProductDetails.css";
import Navbar from "../Components/Navbar";
import ProductImage from "../Components/ProductImage";
import ProductInfo from "../Components/ProductInfo";
import RelatedProducts from "../Components/RelatedProducts";
import Footer from "../Components/Footer";

const ProductDetails = () => {
  return (
    <>
      <Navbar />

      <div className="productdetails">

        <div className="breadcrumb">
          Home / Products / <span> Tea Paper Cup</span>
        </div>

        <div className="product-container">
          <ProductImage />
          <ProductInfo />
        </div>

        <div className="related-section">
          <RelatedProducts />
        </div>

      </div>

      <Footer />
    </>
  );
};

export default ProductDetails;