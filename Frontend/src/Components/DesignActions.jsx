import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/DesignActions.css";


const DesignActions = ({

  brandname,
  tagline,
  brandcolor,
  logo,

  cupSize,
  cupShape,
  paperQuality,
  quantity

}) => {


  const navigate = useNavigate();


  const handleAddToCart = () => {


    const cart =

      JSON.parse(
        localStorage.getItem("cart")
      ) || [];


    const customProduct = {

      id: `custom-${Date.now()}`,

      name: "Custom Designed Paper Cup",

      description:
        "Your personalized branded paper cup.",

      image: logo,

      size: cupSize,

      shape: cupShape,

      paperQuality: paperQuality,

      brandName: brandname,

      tagline: tagline,

      brandColor: brandcolor,

      quantity: Number(quantity),

      price: (
        ({

          "150ml": 3,

          "250ml": 4,

          "350ml": 5,

          "500ml": 6

        }[cupSize] || 0)

        +

        ({

          "Standard": 0,

          "Premium": 1,

          "Eco Friendly": 2

        }[paperQuality] || 0)

      ),

      isCustom: true

    };


    cart.push(customProduct);


    localStorage.setItem(

      "cart",

      JSON.stringify(cart)

    );


    window.dispatchEvent(

      new Event("cartUpdated")

    );


    alert(

      "Custom Cup Added To Cart 🛒"

    );


    navigate("/cart");

  };

  const handleSaveDesign = () => {

    const wishlist =
        JSON.parse(
            localStorage.getItem("wishlist")
        ) || [];


    const customProduct = {

        id: `custom-${Date.now()}`,

        name: "Custom Designed Paper Cup",

        description:
            "Your personalized branded paper cup.",

        image: logo,

        size: cupSize,

        shape: cupShape,

        paperQuality: paperQuality,

        brandName: brandname,

        tagline: tagline,

        brandColor: brandcolor,

        quantity: Number(quantity),

        price: 4,

        isCustom: true

    };


    wishlist.push(customProduct);


    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );


    window.dispatchEvent(
        new Event("wishlistUpdated")
    );


    alert(
        "Custom Design Saved To Wishlist ❤️"
    );

};


  return (

    <div className="design-actions">


      <button

        className="action-btn preview-btn"

      >

        Preview Design

      </button>


      <button

        className="action-btn cart-btn"

        onClick={handleAddToCart}

      >

        Add To Cart

      </button>


      <button

        className="action-btn save-btn"
         onClick={handleSaveDesign}
      >

        Save Design

      </button>


    </div>

  );

};


export default DesignActions;