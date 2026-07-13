import React from "react";

const CartItem = () => {
  const cartProducts = [
    {
      id: 1,
      productName: "Tea Paper Cup",
      description: "Premium paper cup for serving hot tea.",
      image: "/images/tea-cup.png",
      size: "150 ml",
      shape: "Round",
      paperQuality: "Premium",
      brandName: "Crafted Cups",
      tagline: "Taste the Happiness",
      brandColor: "#8B4513",
      logo: "/images/logo.png",
      quantity: 2,
      packSize: 100,
      pricePerCup: 3,
      totalPrice: 600,
    },
    {
      id: 2,
      productName: "Coffee Paper Cup",
      description: "Perfect paper cup for hot coffee.",
      image: "/images/coffee-cup.png",
      size: "250 ml",
      shape: "Ripple",
      paperQuality: "Premium",
      brandName: "Coffee House",
      tagline: "Every Sip Matters",
      brandColor: "#6F4E37",
      logo: "/images/logo.png",
      quantity: 3,
      packSize: 100,
      pricePerCup: 4,
      totalPrice: 1200,
    },
    {
      id: 3,
      productName: "Juice Paper Cup",
      description: "Leak-proof cup for cold beverages.",
      image: "/images/juice-cup.png",
      size: "350 ml",
      shape: "Round",
      paperQuality: "Standard",
      brandName: "Fresh Juice",
      tagline: "Fresh Every Sip",
      brandColor: "#1E90FF",
      logo: "/images/logo.png",
      quantity: 1,
      packSize: 100,
      pricePerCup: 5,
      totalPrice: 500,
    },
    {
      id: 4,
      productName: "Ice Cream Cup",
      description: "Food-grade paper cup for desserts.",
      image: "/images/icecream-cup.png",
      size: "100 ml",
      shape: "Square",
      paperQuality: "Eco-Friendly",
      brandName: "Sweet Bowl",
      tagline: "Enjoy Every Bite",
      brandColor: "#FF69B4",
      logo: "/images/logo.png",
      quantity: 4,
      packSize: 100,
      pricePerCup: 2,
      totalPrice: 800,
    },
  ];

  return (
    <>
      {cartProducts.map((product) => (
        <div
          key={product.id}
          style={{
            width: "95%",
            display: "flex",
            height: "165px",
            marginBottom: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "15px",
          }}
        >
          {/* Image */}
          <div
            className="cartimg"
            style={{
              width: "20%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={product.image}
              alt={product.productName}
              style={{
                width: "100px",
                height: "100px",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Product Details */}
          <div
            className="cartproductdetails"
            style={{
              width: "60%",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <h2>{product.productName}</h2>

            <p>{product.description}</p>

            <div style={{ display: "flex", gap: "10px" }}>
              <span>
                <strong>Brand:</strong> {product.brandName}
              </span>

              <span>
                <strong>Tagline:</strong> {product.tagline}
              </span>
            </div>

            <div>
              <strong>
                [ {product.size}]  [{product.shape}]  [{product.paperQuality}]
              </strong>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>Color:</span>

              <div
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  backgroundColor: product.brandColor,
                  border: "1px solid #000",
                }}
              ></div>
            </div>
          </div>
          <div
            style={{
              height: '100%',
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              gap:'5px'
            }}
          >
            <button style={{
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              cursor: "pointer"
            }}>+</button>

            <h3>{product.quantity}</h3>

            <button style={{
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              cursor: "pointer"
            }}>-</button>
          </div>

          {/* Price & Quantity */}
          <div
            className="cartprice"
            style={{
              height: "100%",
              width: "15%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <h2>Total Price</h2>
            <h2>₹{product.totalPrice}</h2>


          </div>

          {/* Delete */}
          <div
            style={{
              width: "5%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
            </svg>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartItem;