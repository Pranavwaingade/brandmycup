import React from "react";
import "../Style/OrderItems.css";

const OrderItems = () => {

    const orderItems = [
        {
            id: 1,
            productName: "Tea Paper Cup",
            image: "/images/tea-cup.png",
            size: "150 ml",
            paperQuality: "Premium",
            shape: "Round",
            quantity: 2,
            price: 600
        },
        {
            id: 2,
            productName: "Coffee Paper Cup",
            image: "/images/coffee-cup.png",
            size: "250 ml",
            paperQuality: "Premium",
            shape: "Ripple",
            quantity: 3,
            price: 1200
        }
    ];

    return (
        <div className="order-items">

            <div className="order-items-header">

                <h2>📦 Ordered Items</h2>

                <span>
                    {orderItems.length} Products
                </span>

            </div>

            <div className="items-list">

                {orderItems.map((item) => (

                    <div
                        className="order-item"
                        key={item.id}
                    >

                        {/* Product Image */}

                        <div className="order-item-image">

                            <img
                                src={item.image}
                                alt={item.productName}
                            />

                        </div>


                        {/* Product Details */}

                        <div className="order-item-details">

                            <h3>
                                {item.productName}
                            </h3>

                            <div className="item-specifications">

                                <span>
                                    Size: {item.size}
                                </span>

                                <span>
                                    Quality: {item.paperQuality}
                                </span>

                                <span>
                                    Shape: {item.shape}
                                </span>

                            </div>

                            <p>
                                Quantity: <strong>{item.quantity}</strong>
                            </p>

                        </div>


                        {/* Price */}

                        <div className="order-item-price">

                            <span>Price</span>

                            <h3>
                                ₹ {item.price}
                            </h3>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default OrderItems;