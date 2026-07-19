import Navbar from "../Components/Navbar";
import CheckoutAddress from "../Components/CheckoutAddress";
import PaymentMethod from "../Components/PaymentMethod";
import CheckoutSummary from "../Components/CheckoutSummary";
import PlaceOrderButton from "../Components/PlaceOrderButton";
import "../Style/Checkout.css";

const Checkout = () => {
  return (
    <>
      <Navbar />

      <div className="checkout-page">

        <div className="checkout-header">
          <h1>Checkout</h1>
          <p>You have 4 items in your cart.</p>
        </div>

        <div className="checkout-container">

          <div className="checkout-left">
            <CheckoutAddress />
            <PaymentMethod />
          </div>

          <div className="checkout-right">
            <CheckoutSummary />
            <PlaceOrderButton />
          </div>

        </div>

      </div>
    </>
  );
};

export default Checkout;