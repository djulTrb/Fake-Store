import React from "react";
import Header from "./Components/header";
import HeroSection from "./Components/HeroSection";
import Footer from "./Components/Footer";
import Offer from "./Components/Offer";

const FakeStore = () => {
  return (
    <>
      <Header header_bg={"transparent"} />
      <HeroSection />
      <Offer />
      <Footer />
    </>
  );
};

export default FakeStore;
