import React from "react";


import "./style.css";

function HeroSectionThree({ heading1, image, paragraph }) {
  return (
    <div class="ml-main-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="ml-banner-content">
              <h1>{heading1}</h1>
              <p>{paragraph}</p>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="iot-banner-image">
              <img
                src={image}
                class="animate__animated animate__fadeInUp animate__delay-0.8s"
                alt="image"
              />
              <img
                src={require("../../assets/images/iot-banner-image/iot-shape1.png")}
                class="animate__animated animate__zoomIn"
                alt="image"
              />
            </div>
            <div class="animate-border">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSectionThree;
