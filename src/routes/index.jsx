import { createBrowserRouter } from "react-router-dom";

import { Login } from "../containers/Login";
import { Register } from "../containers/Register";
import { Home } from "../containers/Home";
import { Menu } from "../containers/Menu";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cart from "../containers/Cart";
import Checkout from "../containers/Checkout";
import CompletePayment from "../containers/CompletePayment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Register />,
  },
  {
    path: "/cardapio",
    element: (
      <>
        <Header />
        <Menu />
        <Footer />
      </>
    ),
  },
  {
    path: "/carrinho",
    element: (
      <>
        <Header />
        <Cart />
        <Footer />
      </>
    ),
  },

  {
    path: "/checkout",
    element: (
      <>
        <Header />
        <Checkout />
        <Footer />
      </>
    ),
  },

  {
    path: "/complete",
    element: (
      <>
        <Header />
        <CompletePayment />
        <Footer />
      </>
    ),
  },
]);
