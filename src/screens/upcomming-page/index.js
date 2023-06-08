import React from "react";

import commingSoon from "../../assets/images/comming-soon.png";
import "./style.css";
import Button from "../../components/button/button";

const Upcomming = () => {
  return (
    <div className="container-fluid text-center ptb-80">
      <div class="animation">
       
        <div class="two spin-two"></div>
        <div class="three spin-one"></div>
      </div>
      <br />
      <img src={commingSoon} alt="" width={"50%"} className="pb-5  upcommingPage-image" />
      <h1 className="pb-5 upcommingPage-heading" >This page is still Under Construction</h1>
      <Button design={1} title={"Back to Home"} link={"/"}></Button>
      <br />
      <div class="one spin-one"></div>
    </div>

    
  );
};

export default Upcomming;
