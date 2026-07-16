import React from "react";
import { useNavigate } from "react-router-dom";

const Emptycart = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100%",
        minHeight: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "40px",
          border: "1px solid #ddd",
          borderRadius: "20px",
          background: "#fff",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        }}
      >
        <div style={{ fontSize: "90px" }}>🛒</div>

        <h1>Your Cart is Empty</h1>

        <p style={{ color: "#666" }}>
          Looks like you haven't added any paper cups yet.
        </p>

        <button
          onClick={() => navigate("/products")}
          style={{
            marginTop: "20px",
            padding: "14px 30px",
            border: "none",
            borderRadius: "10px",
            background: "#9c6b45",
            color: "#fff",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "600",
            width: 'fit-content'
          }}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Emptycart;