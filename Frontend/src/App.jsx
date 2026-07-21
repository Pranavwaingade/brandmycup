import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import ForgotPassword from "./Pages/ForgotPassword";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import CustomizeCup from "./Pages/CustomizeCup";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";

import Wishlist from "./Pages/Wishlist";

import OrderSuccess from "./Pages/OrderSuccess";
import MyOrders from "./Pages/MyOrders";
import OrderDetails from "./Pages/OrderDetails";


function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Home */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* Authentication */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/forgotpassword"
          element={<ForgotPassword />}
        />


        {/* Products */}

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/productdetails/:id"
          element={<ProductDetails />}
        />


        {/* Customize */}

        <Route
          path="/customizeCup"
          element={<CustomizeCup />}
        />


        {/* Cart & Checkout */}

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/cart/checkout"
          element={<Checkout />}
        />


        {/* Wishlist */}

        <Route
          path="/wishlist"
          element={<Wishlist />}
        />


        {/* Orders */}

        <Route
          path="/ordersuccess"
          element={<OrderSuccess />}
        />

        <Route
          path="/orders"
          element={<MyOrders />}
        />

        <Route
          path="/orderdetails/:id"
          element={<OrderDetails />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;