import React from "react";
import { Link } from "react-router-dom";
import icon4 from "../../../../src/assets/images/icon4.png";
import icon5 from "../../../../src/assets/images/icon5.png";
import icon6 from "../../../../src/assets/images/icon6.png";
import icon7 from "../../../../src/assets/images/icon7.png";

import shape2 from "../../../../src/assets/images/shape2.svg";
import shape3 from "../../../../src/assets/images/shape3.svg";
import shape4 from "../../../../src/assets/images/shape4.svg";
import shape5 from "../../../../src/assets/images/shape5.png";

function Features({ heading }) {
  return (
    <div>
      <div class="solutions-area pt-80">
        <div class="container">
          <div class="section-title">
            <h2>{heading}</h2>
            <div class="bar"></div>
            <p>
              Catalyst Role & Solutions Provider We’ve won a ton of awards and
              have been featured in all of the magazines.
            </p>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-4 col-sm-6 col-md-6">
              <div class="single-solutions-box">
                <div class="icon">
                  <img src={icon4} alt="image" />
                </div>
                <h3>Marketing</h3>
                <p>
                  eSpark is a full-service digital marketing agency with over
                  four years of experience delivering the most impressive
                  results for many customers across a number of industries.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-md-6">
              <div class="single-solutions-box">
                <div class="icon">
                  <img src={icon5} alt="image" />
                </div>
                <h3>Technology</h3>
                <p>
                  Here at eSpark, we deliver an array of tech-based solutions.
                  These include delivering software, programming, networking and
                  project management solutions.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-md-6">
              <div class="single-solutions-box">
                <div class="icon">
                  <img src={icon6} alt="image" />
                </div>
                <h3>Development</h3>
                <p>
                  Our developers have enough expertise to develop your desired
                  programs. Here you can find top-notch developers. Our software
                  & applications are compatible.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="shape1">
          <img src={shape5} alt="shape" />
        </div>
        <div class="shape2 rotateme">
          <img src={shape2} alt="shape" />
        </div>
        <div class="shape3">
          <img src={shape3} alt="shape" />
        </div>
        <div class="shape4">
          <img src={shape4} alt="shape" />
        </div>
        <div class="shape6 rotateme">
          <img src={shape4} alt="shape" />
        </div>
        <div class="shape7">
          <img src={shape4} alt="shape" />
        </div>
        <div class="shape8 rotateme">
          <img src={shape2} alt="shape" />
        </div>
      </div>
    </div>
  );
}

export default Features;
