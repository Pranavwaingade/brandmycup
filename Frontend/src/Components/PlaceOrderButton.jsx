import React from "react";
import { useNavigate } from "react-router-dom";


const PlaceOrderButton = ({

  cartItems,

  shippingAddress,

  paymentMethod

}) => {


  const navigate = useNavigate();


  const handlePlaceOrder = () => {


    // Check cart
    if (cartItems.length === 0) {

      alert("Your cart is empty!");

      return;

    }


    // Check address
    if (

      !shippingAddress.fullName ||

      !shippingAddress.mobile ||

      !shippingAddress.email ||

      !shippingAddress.address ||

      !shippingAddress.city ||

      !shippingAddress.state ||

      !shippingAddress.pincode

    ) {

      alert(

        "Please fill all shipping details!"

      );

      return;

    }


    // Check payment method
    if (!paymentMethod) {

      alert(

        "Please select a payment method!"

      );

      return;

    }


    // Calculate subtotal
    const subtotal = cartItems.reduce(

      (total, item) => {

        return total +

          item.price *

          item.quantity;

      },

      0

    );


    const discount = 300;


    const delivery = 0;


    const taxableAmount = Math.max(

      subtotal - discount,

      0

    );


    const gst =

      taxableAmount * 0.18;


    const total =

      taxableAmount +

      gst +

      delivery;


    // Create Order
    const newOrder = {


      id:

        "ORD" +

        Date.now(),


      orderDate:

        new Date().toLocaleDateString(

          "en-IN"

        ),


      status: "Order Placed",


      items: cartItems,


      shippingAddress:

        shippingAddress,


      paymentMethod:

        paymentMethod,


      subtotal: subtotal,


      discount: discount,


      gst: gst,


      delivery: delivery,


      total: total

    };


    // Get previous orders
    const existingOrders =

      JSON.parse(

        localStorage.getItem(

          "orders"

        )

      ) || [];


    // Add new order
    existingOrders.push(

      newOrder

    );


    // Save orders
    localStorage.setItem(

      "orders",

      JSON.stringify(

        existingOrders

      )

    );

    window.dispatchEvent(
      new Event("ordersUpdated")
    );


    // Clear cart
    localStorage.removeItem(

      "cart"

    );


    // Update Navbar cart count
    window.dispatchEvent(

      new Event(

        "cartUpdated"

      )

    );


    // Navigate
    navigate(

      "/ordersuccess"

    );

  };


  return (

    <div

      style={{

        width: "99%",

        paddingTop: "5px"

      }}

    >

      <button

        onClick={

          handlePlaceOrder

        }


        style={{

          background:

            "#A46C45",

          color: "white",

          border: "none",

          borderRadius:

            "10px",

          fontSize:

            "18px",

          fontWeight:

            "bold",

          cursor:

            "pointer",

          transition:

            ".3s",

          width:

            "100%",

          padding:

            "12px"

        }}

      >

        Place Order

      </button>

    </div>

  );

};


export default PlaceOrderButton;