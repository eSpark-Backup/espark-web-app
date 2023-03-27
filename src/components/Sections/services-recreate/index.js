import React from "react";
import SectionTitle from "../../sectionTitle";
import "./services.css";
import ServiceSlider from "./slider/serviceSlider";

function ServicesRecreate(title) {
  return (
    <div className="ptb-50">
      <SectionTitle
        heading={"Our Services"}
        paragraph={
          <p>
            We offer complete product development solutions that fit your <br />
            product’s unique requirements
          </p>
        }
        padding={"5"}
      />

      <div className="container-fluid sliderWrapper tops">
        <ServiceSlider />
      </div>
    </div>
  );
}

export default ServicesRecreate;
