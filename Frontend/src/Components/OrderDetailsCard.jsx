import React from "react";
import "../Style/OrderDetailsCard.css";


const OrderDetailsCard = ({ order }) => {


    return (

        <div className="order-details-card">


            {/* Order Information */}

            <div className="order-main-info">


                {/* Order ID */}

                <div className="order-info-item">

                    <span>

                        Order ID

                    </span>


                    <strong>

                        #{order.id}

                    </strong>

                </div>


                {/* Order Date */}

                <div className="order-info-item">

                    <span>

                        Order Date

                    </span>


                    <strong>

                        {order.orderDate}

                    </strong>

                </div>


                {/* Order Status */}

                <div className="order-info-item">

                    <span>

                        Order Status

                    </span>


                    <strong

                        className="order-status"

                    >

                        <span

                            className="status-dot"

                        ></span>


                        {order.status}

                    </strong>

                </div>


                {/* Total Amount */}

                <div className="order-info-item">

                    <span>

                        Total Amount

                    </span>


                    <strong

                        className="order-total"

                    >

                        ₹{" "}

                        {order.total.toLocaleString(

                            "en-IN",

                            {

                                minimumFractionDigits: 2

                            }

                        )}

                    </strong>

                </div>


            </div>


        </div>

    );

};


export default OrderDetailsCard;