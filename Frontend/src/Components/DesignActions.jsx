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

            productName: "Custom Designed Paper Cup",

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

            totalPrice: 0,

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

            >

                Save Design

            </button>


        </div>

    );

};


export default DesignActions;