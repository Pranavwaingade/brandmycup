import React from "react";
import "../Style/OrderItems.css";


const OrderItems = ({ order }) => {


    const orderItems = order.items;


    return (

        <div className="order-items">


            <div className="order-items-header">


                <h2>

                    📦 Ordered Items

                </h2>


                <span>

                    {orderItems.length}{" "}

                    Product

                    {orderItems.length !== 1

                        ? "s"

                        : ""

                    }

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

                                alt={item.name}

                            />


                        </div>


                        {/* Product Details */}

                        <div

                            className="order-item-details"

                        >


                            <h3>

                                {item.name}

                            </h3>


                            <div

                                className=

                                "item-specifications"

                            >


                                <span>

                                    Size:{" "}

                                    {item.size}

                                </span>


                                {item.paperQuality && (

                                    <span>

                                        Quality:{" "}

                                        {item.paperQuality}

                                    </span>

                                )}


                                {item.shape && (

                                    <span>

                                        Shape:{" "}

                                        {item.shape}

                                    </span>

                                )}

                            </div>


                            <p>

                                Quantity:{" "}

                                <strong>

                                    {item.quantity}

                                </strong>

                            </p>


                        </div>


                        {/* Price */}

                        <div

                            className=

                            "order-item-price"

                        >


                            <span>

                                Price

                            </span>


                            <h3>

                                ₹{" "}

                                {(

                                    item.price *

                                    item.quantity

                                ).toLocaleString(

                                    "en-IN"

                                )}

                            </h3>


                        </div>


                    </div>

                ))}


            </div>

        </div>

    );

};


export default OrderItems;