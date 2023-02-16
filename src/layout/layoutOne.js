import React from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import styles from "./style.module.css";

const LayoutOne = ({ children }) => {
  return (
    <div id="__next">
      <Header />
      <div className={styles.gaps}>{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default LayoutOne;
