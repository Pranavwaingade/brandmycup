import React, { useEffect, useState } from "react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import OrdersList from "../Components/OrdersList";
import EmptyOrders from "../Components/EmptyOrders";

import "../Style/MyOrders.css";


const MyOrders = () => {


    const [orders, setOrders] = useState([]);


    const loadOrders = () => {


        const savedOrders =

            JSON.parse(

                localStorage.getItem("orders")

            ) || [];


        setOrders(savedOrders);

    };


    useEffect(() => {


        // Load orders when page opens
        loadOrders();


        // Reload when order is created
        window.addEventListener(

            "ordersUpdated",

            loadOrders

        );


        return () => {


            window.removeEventListener(

                "ordersUpdated",

                loadOrders

            );

        };


    }, []);


    return (

        <>


            <Navbar />


            <section className="myorders-page">


                {/* Hero Section */}

                <div className="orders-header">


                    <h1>

                        My Orders

                    </h1>


                    <p>

                        Track your orders, view purchase

                        history, and reorder your

                        favorite paper cups anytime.

                    </p>

                </div>


                {/* Orders Section */}

                <div className="orders-container">


                    {orders.length === 0 ? (


                        <EmptyOrders />


                    ) : (


                        <OrdersList

                            orders={orders}

                        />

                    )}

                </div>


            </section>


            <Footer />

        </>

    );

};


export default MyOrders;