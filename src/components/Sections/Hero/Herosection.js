import React from "react";
import mlMainPic from "../../../../src/assets/images/ml-banner-image/ml-main-pic.png";
import one from "../../../../src/assets/images/ml-banner-image/one.png";
import two from "../../../../src/assets/images/ml-banner-image/two.png";
import three from "../../../../src/assets/images/ml-banner-image/three.png";
import four from "../../../../src/assets/images/ml-banner-image/four.png";
import five from "../../../../src/assets/images/ml-banner-image/five.png";
import six from "../../../../src/assets/images/ml-banner-image/six.png";
import seven from "../../../../src/assets/images/ml-banner-image/seven.png";
import eleven from "../../../../src/assets/images/ml-banner-image/eleven.png";
import eight from "../../../../src/assets/images/ml-banner-image/eight.png";
import nine from "../../../../src/assets/images/ml-banner-image/nine.png";
import ten from "../../../../src/assets/images/ml-banner-image/ten.png";

import shape2 from "../../../../src/assets/images/shape2.svg";
import shape3 from "../../../../src/assets/images/shape3.svg";
import shape4 from "../../../../src/assets/images/shape4.svg";
import shape5 from "../../../../src/assets/images/shape5.png";
import { shapes } from "../../../helper/ImageUrl";

function Herosection({ heading1, image }) {
  return (
    <div class="ml-main-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="ml-banner-content">
              <h1>{heading1}</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida.
              </p>
              {heading1 === "Services" ? null : (
                <a class="btn btn-secondary" href="/contact/">
                  Get Started
                </a>
              )}
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="ml-banner-image">
              <img
                src={one}
                class="animate__animated animate__fadeIn animate__delay-2s"
                alt="image"
              />
              <img
                src={two}
                class="animate__animated animate__fadeInUp animate__delay-1s"
                alt="image"
              />
              <img
                src={three}
                class="animate__animated animate__fadeInUp animate__delay-0.5s"
                alt="image"
              />
              <img
                src={four}
                class="animate__animated animate__fadeInUp animate__delay-2s"
                alt="image"
              />
              <img
                src={five}
                class="animate__animated animate__fadeInDown animate__delay-2.5s"
                alt="image"
              />
              <img
                src={six}
                class="animate__animated animate__fadeInDown animate__delay-1.9s"
                alt="image"
              />
              <img
                src={seven}
                class="animate__animated animate__fadeInDown animate__delay-2.1s"
                alt="image"
              />
              <img
                src={eight}
                class="animate__animated animate__fadeInDown animate__delay-1.9s"
                alt="image"
              />
              <img
                src={nine}
                class="animate__animated animate__fadeInDown animate__delay-1.7s"
                alt="image"
              />
              <img
                src={ten}
                class="animate__animated animate__fadeInDown animate__delay-1.5s"
                alt="image"
              />
              <img
                src={eleven}
                class="animate__animated animate__fadeInUp animate__delay-0.4s"
                alt="image"
              />
              <img
                src={mlMainPic}
                class="animate__animated animate__fadeInUp animate__delay-0.5s"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
      {shapes?.map((item, index) => (
        <div key={index} className={item.className}>
          <img src={item.imgUrl} alt={item.alt} />{" "}
        </div>
      ))}
    </div>
  );
}

export default Herosection;
