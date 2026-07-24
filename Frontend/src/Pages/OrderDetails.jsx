import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "../Style/OrderDetails.css";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import OrderDetailsCard from "../Components/OrderDetailsCard";
import OrderTimeline from "../Components/OrderTimeline";
import OrderItems from "../Components/OrderItems";
import ShippingDetails from "../Components/ShippingDetails";
import PaymentDetails from "../Components/PaymentDetails";
import OrderSummaryCard from "../Components/OrderSummaryCard";
import OrderActions from "../Components/OrderActions";


const OrderDetails = () => {


    const { id } = useParams();


    const [order, setOrder] = useState(null);


    useEffect(() => {


        const savedOrders =

            JSON.parse(

                localStorage.getItem("orders")

            ) || [];


        const selectedOrder = savedOrders.find(

            (item) => item.id === id

        );


        setOrder(selectedOrder);


    }, [id]);


    // Order not found
    if (!order) {


        return (

            <>

                <Navbar />


                <main className="order-details-page">


                    <div className="order-not-found">


                        <h1>

                            Order Not Found 😔

                        </h1>


                        <p>

                            This order does not exist.

                        </p>


                    </div>


                </main>


                <Footer />

            </>

        );

    }


    return (

        <>


            <Navbar />


            <main className="order-details-page">


                {/* Page Header */}

                <div className="order-details-header">


                    <h1>

                        Order Details

                    </h1>


                    <p>

                        View your complete order information

                    </p>

                </div>


                {/* Main Content */}

                <div className="order-details-container">


                    {/* Basic Information */}

                    <OrderDetailsCard

                        order={order}

                    />


                    {/* Timeline */}

                    <OrderTimeline

                        order={order}

                    />


                    {/* Products */}

                    <OrderItems

                        order={order}

                    />


                    {/* Shipping and Payment */}

                    <div className="order-bottom-grid">


                        <ShippingDetails

                            order={order}

                        />


                        <PaymentDetails

                            order={order}

                        />

                    </div>


                    {/* Summary */}

                    <OrderSummaryCard

                        order={order}

                    />


                    {/* Actions */}

                    <OrderActions

                        order={order}

                    />

                </div>


            </main>


            <Footer />

        </>

    );

};


export default OrderDetails;