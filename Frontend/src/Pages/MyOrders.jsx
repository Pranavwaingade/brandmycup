import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import OrdersList from "../Components/OrdersList";
import EmptyOrders from "../Components/EmptyOrders";
import "../Style/MyOrders.css";

const MyOrders = () => {

  // Demo Data
  const totalOrders = 3;

  return (
    <>
      <Navbar />

      <section className="myorders-page">

        {/* Hero Section */}
        <div className="orders-header">

          <h1>My Orders</h1>

          <p>
            Track your orders, view purchase history, and reorder your
            favorite paper cups anytime.
          </p>

        </div>

        {/* Orders Section */}
        <div className="orders-container">

          {totalOrders === 0 ? (
            <EmptyOrders />
          ) : (
            <OrdersList />
          )}

        </div>

      </section>

      <Footer />
    </>
  );
};

export default MyOrders;