import React from "react";

import "./style.css";

function HeroSectionThree({ heading1, image, paragraph, link, bgimage }) {
  return (
    <div
      className={link === "/careers" ? "p-5" : "ml-main-section"}
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="ml-banner-content">
              <h1>{heading1}</h1>
              {<p>{paragraph}</p>}
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            {link === "/careers" ? null : (
              <div className="iot-banner-image">
                <img
                  src={image}
                  className="animate__animated animate__fadeInUp animate__delay-0.8s"
                  alt="image01"
                />
                <img
                  src={require("../../assets/images/iot-banner-image/iot-shape1.png")}
                  className="animate__animated animate__zoomIn"
                  alt="image01"
                />
              </div>
            )}

            {link === "/careers" ? null : (
              <div className="animate-border">
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
