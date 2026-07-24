import React from "react";
import "../Style/OrdersList.css";
import OrderCard from "./OrderCard";


const OrdersList = ({ orders }) => {


    return (

        <div className="orders-list">


            {orders.map((order) => (

                <OrderCard

                    key={order.id}

                    order={order}

                />

            ))}


        </div>

    );

};


export default OrdersList;