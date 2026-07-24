import React from "react";
import { useNavigate } from "react-router-dom";

import "../Style/OrderCard.css";


const OrderCard = ({ order }) => {


    const navigate = useNavigate();


    // First product from order
    const firstProduct = order.items[0];


    // Total quantity
    const totalQuantity = order.items.reduce(

        (total, item) => {

            return total + item.quantity;

        },

        0

    );


    return (

        <div className="order-card">


            {/* Product Image */}

            <div className="order-image">

                <img

                    src={firstProduct.image}

                    alt={firstProduct.name}

                />

            </div>


            {/* Details */}

            <div className="order-details">


                <h2>

                    {firstProduct.name}

                </h2>


                <p className="order-id">

                    <strong>

                        Order ID :

                    </strong>{" "}

                    #{order.id}

                </p>


                <p className="order-date">

                    <strong>

                        Ordered :

                    </strong>{" "}

                    {order.orderDate}

                </p>


                <div className="order-specs">


                    <span>

                        {firstProduct.size}

                    </span>


                    {firstProduct.paperQuality && (

                        <span>

                            {firstProduct.paperQuality}

                        </span>

                    )}


                    <span>

                        {totalQuantity} Qty

                    </span>


                    {order.items.length > 1 && (

                        <span>

                            +{" "}

                            {order.items.length - 1}

                            {" "}

                            more product

                            {order.items.length - 1 !== 1

                                ? "s"

                                : ""

                            }

                        </span>

                    )}

                </div>


                <h3 className="order-price">

                    ₹{" "}

                    {order.total.toLocaleString(

                        "en-IN"

                    )}

                </h3>


            </div>


            {/* Status */}

            <div className="order-status">


                <span

                    className={`status ${

                        order.status

                            .toLowerCase()

                            .replace(

                                " ",

                                "-"

                            )

                    }`}

                >

                    {order.status}

                </span>


                {/* View Details */}

                <button

                    className="details-btn"

                    onClick={() =>

                        navigate(

                            `/orderdetails/${order.id}`

                        )

                    }

                >

                    View Details

                </button>


                {/* Track Order */}

                <button

                    className="track-btn"

                >

                    Track Order

                </button>


                {/* Invoice */}

                <button

                    className="invoice-btn"

                >

                    Download Invoice

                </button>


            </div>


        </div>

    );

};


export default OrderCard;