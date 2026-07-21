import React from "react";
import "../Style/OrderTimeline.css";

const OrderTimeline = () => {

    const orderStatus = [
        {
            id: 1,
            title: "Order Placed",
            date: "20 July 2026",
            description: "Your order has been successfully placed.",
            completed: true
        },
        {
            id: 2,
            title: "Processing",
            date: "20 July 2026",
            description: "Your order is being prepared.",
            completed: true
        },
        {
            id: 3,
            title: "Shipped",
            date: "21 July 2026",
            description: "Your order has been shipped.",
            completed: true
        },
        {
            id: 4,
            title: "Out for Delivery",
            date: "22 July 2026",
            description: "Your order is out for delivery.",
            completed: false
        },
        {
            id: 5,
            title: "Delivered",
            date: "Expected soon",
            description: "Your order will be delivered soon.",
            completed: false
        }
    ];

    return (
        <div className="order-timeline">

            <div className="timeline-header">

                <h2>📦 Order Status</h2>

            </div>

            <div className="timeline">

                {orderStatus.map((status, index) => (

                    <div
                        className={`timeline-item ${
                            status.completed ? "completed" : ""
                        }`}
                        key={status.id}
                    >

                        <div className="timeline-marker">

                            {status.completed ? "✓" : status.id}

                        </div>

                        <div className="timeline-content">

                            <div className="timeline-title-row">

                                <h3>
                                    {status.title}
                                </h3>

                                <span>
                                    {status.date}
                                </span>

                            </div>

                            <p>
                                {status.description}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default OrderTimeline;