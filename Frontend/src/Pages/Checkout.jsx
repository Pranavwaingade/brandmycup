import React, { useEffect, useState } from "react";

import Navbar from "../Components/Navbar";
import CheckoutAddress from "../Components/CheckoutAddress";
import PaymentMethod from "../Components/PaymentMethod";
import CheckoutSummary from "../Components/CheckoutSummary";
import PlaceOrderButton from "../Components/PlaceOrderButton";

import "../Style/Checkout.css";


const Checkout = () => {


  const [cartItems, setCartItems] = useState([]);
  const [shippingAddress, setShippingAddress] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("");

  // Load cart items
  const loadCart = () => {


    const savedCart =

      JSON.parse(

        localStorage.getItem("cart")

      ) || [];


    setCartItems(savedCart);

  };


  useEffect(() => {


    loadCart();


    window.addEventListener(

      "cartUpdated",

      loadCart

    );


    return () => {


      window.removeEventListener(

        "cartUpdated",

        loadCart

      );

    };


  }, []);


  // Total quantity
  const totalItems = cartItems.reduce(

    (total, item) => {

      return total + item.quantity;

    },

    0

  );


  return (

    <>


      <Navbar />


      <div className="checkout-page">


        {/* Header */}

        <div className="checkout-header">

          <h1>

            Checkout

          </h1>


          <p>

            You have{" "}

            {totalItems}

            {" "}

            item

            {totalItems !== 1

              ? "s"

              : ""

            }

            {" "}

            in your cart.

          </p>

        </div>


        {/* Checkout Container */}

        <div className="checkout-container">


          {/* Left Side */}

          <div className="checkout-left">


            <CheckoutAddress setShippingAddress={setShippingAddress} />


            <PaymentMethod setPaymentMethod={setPaymentMethod} />

          </div>


          {/* Right Side */}

          <div className="checkout-right">


            <CheckoutSummary

              cartItems={cartItems}

            />


            <PlaceOrderButton
              shippingAddress={shippingAddress}
              paymentMethod={paymentMethod}
              cartItems={cartItems}

            />

          </div>

        </div>

      </div>

    </>

  );

};


export default Checkout;