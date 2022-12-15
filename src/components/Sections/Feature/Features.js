import React from 'react'
import icon1 from "../../../../src/assets/images/icon1.png";
import icon2 from "../../../../src/assets/images/icon2.png";
import icon3 from "../../../../src/assets/images/icon3.png";
import icon4 from "../../../../src/assets/images/icon4.png";
import icon5 from "../../../../src/assets/images/icon5.png";
import icon6 from "../../../../src/assets/images/icon6.png";
import icon7 from "../../../../src/assets/images/icon7.png";

import shape2 from "../../../../src/assets/images/shape2.svg";
import shape3 from "../../../../src/assets/images/shape3.svg";
import shape4 from "../../../../src/assets/images/shape4.svg";
import shape5 from "../../../../src/assets/images/shape5.png";

function Features() {
  return (
    <div>
        <div class="solutions-area ptb-80">
        <div class="container">
          <div class="section-title">
            <span class="sub-title">What We Offer</span>
            <h2>Our Featured Solutions</h2>
            <div class="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-3 col-sm-6 col-md-6">
              <div class="single-solutions-box">
                <div class="icon">
                  <img src={icon4} alt="image" />
                </div>
                <h3><a href="/service-details/">Robotic Automation</a></h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>
                <a class="learn-more-btn" href="/service-details/"
                  ><svg
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
                  Learn More</a
                >
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-md-6">
              <div class="single-solutions-box">
                <div class="icon">
                  <img src={icon5} alt="image" />
                </div>
                <h3><a href="/service-details/">Cognitive Automation</a></h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>
                <a class="learn-more-btn" href="/service-details/"
                  ><svg
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
                  Learn More</a
                >
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-md-6">
              <div class="single-solutions-box">
                <div class="icon">
                  <img src={icon6} alt="image" />
                </div>
                <h3><a href="/service-details/">Cognitive Engagement</a></h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>
                <a class="learn-more-btn" href="/service-details/"
                  ><svg
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
                  Learn More</a
                >
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-md-6">
              <div class="single-solutions-box">
                <div class="icon">
                  <img src={icon7} alt="image" />
                </div>
                <h3>
                  <a href="/service-details/">Security &amp; Surveillance</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>
                <a class="learn-more-btn" href="/service-details/"
                  ><i data-feather="plus-circle"></i> Learn More</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="shape1"><img src={shape5} alt="shape" /></div>
        <div class="shape2 rotateme">
          <img src={shape2} alt="shape" />
        </div>
        <div class="shape3"><img src={shape3} alt="shape" /></div>
        <div class="shape4"><img src={shape4} alt="shape" /></div>
        <div class="shape6 rotateme">
          <img src={shape4} alt="shape" />
        </div>
        <div class="shape7"><img src={shape4} alt="shape" /></div>
        <div class="shape8 rotateme">
          <img src={shape2} alt="shape" />
        </div>
      </div>
    </div>
  )
}

export default Features