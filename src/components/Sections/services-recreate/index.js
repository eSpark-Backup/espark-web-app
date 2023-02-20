import React from "react";
import "./services.css";
import ServiceSlider from "./slider/serviceSlider";

function ServicesRecreate() {
  return (
    <>
      <div className="d-flex">
        <hr />
        <h4 className="servicesColor">Our Services</h4>
        <p className="txtpara">
          We offer complete product development solutions that fit your{" "}
        </p>
        <p className="txtpara">product’s unique requirements</p>
      </div>
      <div className="sliderWrapper">
        <ServiceSlider />
      </div>
    </>
  );
}

export default ServicesRecreate;
