import React from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import styles from "./style.module.css";

const LayoutOne = ({ children }) => {

  // Function to scroll to the letsTalk component
  const scrollToLetsTalk = () => {
    const letsTalkElement = document.getElementById("letsTalkComponent");
    if (letsTalkElement) {
      letsTalkElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div id="__next">
      <Header scrollToLetsTalk={scrollToLetsTalk}/>
      <div className={styles.gaps}>{children}</div>
      <Footer />
    </div>
  );
};

export default LayoutOne;
