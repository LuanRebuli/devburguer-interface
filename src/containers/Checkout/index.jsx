import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import stripePromise from "../../config/stripeConfig";
import CheckoutForm from "../../components/Stripe/CheckoutForm";

const Checkout = () => {
  const {
    state: { clientSecret },
  } = useLocation();

  if (!clientSecret) {
    return "Erro, volte e tente novamente!";
  }
  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm />
    </Elements>
  );
};

export default Checkout;
