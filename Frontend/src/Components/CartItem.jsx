import React from "react";
import "../Style/CartItem.css";


const CartItem = ({
    product,
    setCartItems
}) => {


    // Increase quantity
    const increaseQuantity = () => {


        const updatedCart = JSON.parse(

            localStorage.getItem("cart")

        ) || [];


        const updatedProducts = updatedCart.map(

            (item) => {


                if (item.id === product.id) {


                    return {

                        ...item,

                        quantity: item.quantity + 1

                    };

                }


                return item;

            }

        );


        localStorage.setItem(

            "cart",

            JSON.stringify(updatedProducts)

        );


        setCartItems(updatedProducts);


        window.dispatchEvent(

            new Event("cartUpdated")

        );

    };


    // Decrease quantity
    const decreaseQuantity = () => {


        if (product.quantity <= 1) {

            return;

        }


        const updatedCart = JSON.parse(

            localStorage.getItem("cart")

        ) || [];


        const updatedProducts = updatedCart.map(

            (item) => {


                if (item.id === product.id) {


                    return {

                        ...item,

                        quantity: item.quantity - 1

                    };

                }


                return item;

            }

        );


        localStorage.setItem(

            "cart",

            JSON.stringify(updatedProducts)

        );


        setCartItems(updatedProducts);


        window.dispatchEvent(

            new Event("cartUpdated")

        );

    };


    // Remove product
    const removeProduct = () => {


        const updatedCart = JSON.parse(

            localStorage.getItem("cart")

        ) || [];


        const updatedProducts = updatedCart.filter(

            (item) => item.id !== product.id

        );


        localStorage.setItem(

            "cart",

            JSON.stringify(updatedProducts)

        );


        setCartItems(updatedProducts);


        window.dispatchEvent(

            new Event("cartUpdated")

        );

    };


    // Total price
    const totalPrice =

        product.price * product.quantity;


    return (

        <div className="cart-item">


            {/* Product Image */}

            <div className="cart-image">

                <img

                    src={product.image}

                    alt={product.name}

                />

            </div>


            {/* Product Details */}

            <div className="cart-details">


                <h2>

                    {product.name}

                </h2>


                <p>

                    {product.description}

                </p>


                <div className="brand-row">

                    <span>

                        <b>Category:</b>{" "}

                        {product.category}

                    </span>

                </div>


                <div className="specs">

                    <span>

                        {product.size}

                    </span>


                    {product.shape && (

                        <span>

                            {product.shape}

                        </span>

                    )}


                    {product.paperQuality && (

                        <span>

                            {product.paperQuality}

                        </span>

                    )}

                </div>


            </div>


            {/* Quantity */}

            <div className="quantity-box">


                <button

                    onClick={increaseQuantity}

                >

                    +

                </button>


                <h3>

                    {product.quantity}

                </h3>


                <button

                    onClick={decreaseQuantity}

                >

                    -

                </button>

            </div>


            {/* Price */}

            <div className="price-box">


                <h3>

                    Total

                </h3>


                <h2>

                    ₹

                    {totalPrice.toLocaleString(

                        "en-IN"

                    )}

                </h2>

            </div>


            {/* Remove */}

            <button

                className="delete-btn"

                onClick={removeProduct}

            >

                🗑️ Remove

            </button>


        </div>

    );

};


export default CartItem;