import React, { useEffect } from "react";
import mlMainPic from "../../assets/images/ml-banner-image/ml-main-pic.png";
import one from "../../assets/images/ml-banner-image/one.png";
import two from "../../assets/images/ml-banner-image/two.png";
import three from "../../assets/images/ml-banner-image/three.png";
import four from "../../assets/images/ml-banner-image/four.png";
import five from "../../assets/images/ml-banner-image/five.png";
import six from "../../assets/images/ml-banner-image/six.png";
import seven from "../../assets/images/ml-banner-image/seven.png";
import eleven from "../../assets/images/ml-banner-image/eleven.png";
import eight from "../../assets/images/ml-banner-image/eight.png";
import nine from "../../assets/images/ml-banner-image/nine.png";
import ten from "../../assets/images/ml-banner-image/ten.png";

import { shapes } from "../../helper/ImageUrl";
import $ from "jquery";
import { gsap } from "gsap";

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
