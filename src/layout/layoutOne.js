import React from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import SEO from "../utils/SEO";

const LayoutOne = ({ children }) => {
  return (
    <div id="__next">
      <SEO />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutOne;
