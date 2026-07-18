import React, { useState } from "react";
import "../Style/ProductTabs.css";

const ProductTabs = () => {

  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="product-tabs">

      <div className="tab-header">

        <button type="button"
          className={activeTab === "description" ? "active" : ""}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>

        <button type="button"
          className={activeTab === "specification" ? "active" : ""}
          onClick={() => setActiveTab("specification")}
        >
          Specifications
        </button>

        <button type="button"
          className={activeTab === "review" ? "active" : ""}
          onClick={() => setActiveTab("review")}
        >
          Reviews
        </button>

      </div>

      <div className="tab-content">

        {activeTab === "description" && (
          <div>
            <p>
              Our premium paper cups are made from high-quality food-grade
              paper. They are perfect for tea, coffee and other hot beverages.
            </p>

            <p>
              These cups are durable, leak-resistant, eco-friendly and support
              high-quality custom logo printing for your business.
            </p>
          </div>
        )}

        {activeTab === "specification" && (
          <div>

            <p><strong>Capacity :</strong> 250 ml</p>

            <p><strong>Material :</strong> Food Grade Paper</p>

            <p><strong>Printing :</strong> Offset Printing</p>

            <p><strong>Quality :</strong> Premium</p>

            <p><strong>Usage :</strong> Tea / Coffee</p>

          </div>
        )}

        {activeTab === "review" && (
          <div>

            <div className="review-box">
              <h4>Rahul</h4>
              <p>⭐⭐⭐⭐⭐</p>
              <p>Very good quality.</p>
              
            </div>

            <div className="review-box">
              <h4>Priya</h4>
              <p>⭐⭐⭐⭐☆</p>
              <p>Printing quality is amazing.</p>
              
            </div>

          </div>
        )}

      </div>

    </div>
  );
};

export default ProductTabs;