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
            {/* <span class="sub-title">{heading}</span> */}
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
                <h3>
                  <Link to={"/service"}>
                    <a>Marketing</a>
                  </Link>
                </h3>
                <p>
                  eSpark is a full-service digital marketing agency and we have
                  4+ years of experience driving most impressive results for
                  multiple clients in a number of industries
                </p>
                {/* <a class="learn-more-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewbox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                  Learn More
                </a> */}
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-md-6">
              <div class="single-solutions-box">
                <div class="icon">
                  <img src={icon5} alt="image" />
                </div>
                <h3>
                  <Link to={"/service"}>
                    <a>Technology</a>
                  </Link>
                </h3>
                <p>
                  Here at eSpark, we deliver an array of tech-based solutions.
                  These include delivering software, programming, networking and
                  project management solutions.
                </p>
                {/* <a class="learn-more-btn" href="/service">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewbox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                  Learn More
                </a> */}
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-md-6">
              <div class="single-solutions-box">
                <div class="icon">
                  <img src={icon6} alt="image" />
                </div>
                <h3>
                  <Link to={"/service"}>
                    <a>Development</a>
                  </Link>
                </h3>
                <p>
                  Our software developers have the required expertise to develop
                  a program that best satisfies the unique needs of your
                  business. Our software and applications are compatible.
                </p>
                {/* <a class="learn-more-btn" href="/service">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewbox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                  Learn More
                </a> */}
              </div>
            </div>
            {/* <div class="col-lg-3 col-sm-6 col-md-6">
              <div class="single-solutions-box">
                <div class="icon">
                  <img src={icon7} alt="image" />
                </div>
                <h3>
                  <Link to={"/service"}>
                    <a>Security &amp; Surveillance</a>
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>
                <a class="learn-more-btn">
                  <Link to={"/service"}>
                    <i data-feather="plus-circle"></i> Learn More
                  </Link>
                </a>
              </div>
            </div> */}
          </div>
          {/* <ServiceStyleFive data={services} /> */}
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
