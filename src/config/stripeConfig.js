import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    "pk_test_51Q5txZATJCgGz1fWqBJtufT2scxV2sRg5AhQeNt6cnOTVOCnpNUgnWkmtoihZTTkrZ1M9LoVojjwKE6NaqD8Nx8T00pnro8bOh"
);

export default stripePromise;