import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./Pages/ForgotPassword";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import CustomizeCup from "./Pages/CustomizeCup";
import Cart from "./Pages/Cart"
import Checkout from "./Pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/productdetails" element={<ProductDetails/>} />
        <Route path="/CustomizeCup" element={<CustomizeCup/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/Cart/checkout" element={<Checkout/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;