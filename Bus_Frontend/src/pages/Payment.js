import React from "react";
import { Header } from "../components/header/Header";
import PaymentPage from "../components/payment-page/PaymentPage";
import { Footer } from "../components/footer/Footer";

const Payment = () => {
  return (
    <>
      <Header />
      <PaymentPage />
      <Footer />
    </>
  );
};

export default Payment;
