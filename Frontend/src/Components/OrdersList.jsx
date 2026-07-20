import React from "react";
import "../Style/OrdersList.css";
import OrderCard from "./OrderCard";

const OrdersList = () => {

    const orders = [
        {
            id: 1,
            orderId: "CC2026001",
            productName: "Tea Paper Cup",
            image: "/images/tea-cup.png",
            size: "250 ml",
            paperQuality: "Premium",
            quantity: 500,
            totalPrice: 1500,
            status: "Delivered",
            date: "18 July 2026",
        },
        {
            id: 2,
            orderId: "CC2026002",
            productName: "Coffee Paper Cup",
            image: "/images/coffee-cup.png",
            size: "350 ml",
            paperQuality: "Eco Friendly",
            quantity: 1000,
            totalPrice: 4200,
            status: "Shipped",
            date: "15 July 2026",
        },
        {
            id: 3,
            orderId: "CC2026003",
            productName: "Juice Paper Cup",
            image: "/images/juice-cup.png",
            size: "500 ml",
            paperQuality: "Premium",
            quantity: 300,
            totalPrice: 1800,
            status: "Processing",
            date: "20 July 2026",
        },
    ];

    return (
        <div className="orders-list">

            {
                orders.map((order) => (
                    <OrderCard
                        key={order.id}
                        order={order}
                    />
                ))
            }
        </div>
    );
};

export default OrdersList;