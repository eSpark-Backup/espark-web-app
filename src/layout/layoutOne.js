import React from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

const LayoutOne = ({ children }) => {
  return (
    <div id="__next">
      <Header />
      {children}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer />
    </div>
  );
};

export default LayoutOne;
