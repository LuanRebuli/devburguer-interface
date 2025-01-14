import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";

import { Router } from "./routes";
import GlobalStyles from "./styles/globalStyles";
import AppProvider from "./hooks";
import { Elements } from "@stripe/react-stripe-js";
import stripePromise from "./config/stripeConfig";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <Elements stripe={stripePromise}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Elements>
      <GlobalStyles />
      <ToastContainer
        theme="colored"
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </AppProvider>
  </React.StrictMode>
);
