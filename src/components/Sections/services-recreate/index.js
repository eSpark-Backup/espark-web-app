import React from "react";
import SectionTitle from "../../sectionTitle";
import "./services.css";
import ServiceSlider from "./slider/serviceSlider";

function ServicesRecreate() {
  return (
    <div className="ptb-80">
      <SectionTitle
        heading={"Our Services"}
        paragraph={
          " We offer complete product development solutions that fit your"
        }
      />

      <div className="sliderWrapper">
        <ServiceSlider />
      </div>
    </div>
  );
}

export default ServicesRecreate;
