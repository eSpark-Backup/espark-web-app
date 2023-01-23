import React from "react";

import "./style.css";

function HeroSectionThree({ heading1, image, paragraph, link, bgimage }) {
  return (
    <div
      class={link === "/careers" ? "p-5" : "ml-main-section"}
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="ml-banner-content">
              <h1>{heading1}</h1>
              {<p>{paragraph}</p>}
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            {link === "/careers" ? null : (
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
            )}

            {link === "/careers" ? null : (
              <div class="animate-border">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSectionThree;
