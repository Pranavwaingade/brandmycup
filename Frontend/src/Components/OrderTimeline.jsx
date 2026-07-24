import React from "react";
import "../Style/OrderTimeline.css";


const OrderTimeline = ({ order }) => {


    const statuses = [

        "Order Placed",

        "Processing",

        "Shipped",

        "Out for Delivery",

        "Delivered"

    ];


    const descriptions = {

        "Order Placed":

            "Your order has been successfully placed.",

        "Processing":

            "Your order is being prepared.",

        "Shipped":

            "Your order has been shipped.",

        "Out for Delivery":

            "Your order is out for delivery.",

        "Delivered":

            "Your order has been delivered."

    };


    const currentStatusIndex =

        statuses.indexOf(order.status);


    return (

        <div className="order-timeline">


            <div className="timeline-header">

                <h2>

                    📦 Order Status

                </h2>

            </div>


            <div className="timeline">


                {statuses.map((status, index) => {


                    const completed =

                        index <= currentStatusIndex;


                    return (

                        <div

                            className={`timeline-item ${

                                completed

                                    ? "completed"

                                    : ""

                            }`}

                            key={status}

                        >


                            <div

                                className="timeline-marker"

                            >

                                {completed

                                    ? "✓"

                                    : index + 1

                                }

                            </div>


                            <div

                                className="timeline-content"

                            >


                                <div

                                    className="timeline-title-row"

                                >


                                    <h3>

                                        {status}

                                    </h3>


                                    <span>

                                        {completed

                                            ? order.orderDate

                                            : "Pending"

                                        }

                                    </span>


                                </div>


                                <p>

                                    {descriptions[status]}

                                </p>


                            </div>


                        </div>

                    );

                })}

            </div>

        </div>

    );

};


export default OrderTimeline;