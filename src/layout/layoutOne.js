import React from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
// import Home from "../screens/home/index";

const LayoutOne = ({ children }) => {
  return (
    <div id="__next">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutOne;
