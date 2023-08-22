import React from 'react'
import serviceImage1 from "../../../../src/assets/images/services-image/service-image1.png";
import serviceImage2 from "../../../../src/assets/images/services-image/service-image2.png";
import serviceImage3 from "../../../../src/assets/images/services-image/service-image3.png";
import serviceImage4 from "../../../../src/assets/images/services-image/service-image4.png";
import serviceImage5 from "../../../../src/assets/images/services-image/service-image5.png";
import serviceImage6 from "../../../../src/assets/images/services-image/service-image6.png";

import shape2 from "../../../../src/assets/images/shape2.svg";
import shape3 from "../../../../src/assets/images/shape3.svg";
import shape4 from "../../../../src/assets/images/shape4.svg";
import shape5 from "../../../../src/assets/images/shape5.png";


function Service() {
  return (
    <div>
      <div className="ml-services-area ptb-80">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Our Solutions</span>
            <h2>Our Services</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-ml-services-box">
                <div className="image">
                  <img
                    src={serviceImage1}
                    alt="image"
                  />
                </div>
                <h3><a href="/service-details/">IT Professionals</a></h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-ml-services-box">
                <div className="image">
                  <img
                    src={serviceImage2}
                    alt="image"
                  />
                </div>
                <h3><a href="/service-details/">Software Engineers</a></h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-ml-services-box">
                <div className="image">
                  <img
                    src={serviceImage3}
                    alt="image"
                  />
                </div>
                <h3>
                  <a href="/service-details/">Health &amp; Manufacturing</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-ml-services-box">
                <div className="image">
                  <img
                    src={serviceImage4}
                    alt="image"
                  />
                </div>
                <h3>
                  <a href="/service-details/">Security &amp; Surveillance</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-ml-services-box">
                <div className="image">
                  <img
                    src={serviceImage5}

                    alt="image"
                  />
                </div>
                <h3><a href="/service-details/">Automatic Optimization</a></h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-ml-services-box">
                <div className="image">
                  <img
                    src={serviceImage6}
                    alt="image"
                  />
                </div>
                <h3><a href="/service-details/">Data Analysts</a></h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="shape1"><img src={shape5} alt="shape" /></div>
        <div className="shape2 rotateme">
          <img src={shape2} alt="shape" />
        </div>
        <div className="shape3"><img src={shape3} alt="shape" /></div>
        <div className="shape4"><img src={shape4} alt="shape" /></div>
        <div className="shape7"><img src={shape4} alt="shape" /></div>
        <div className="shape8 rotateme">
          <img src={shape2} alt="shape" />
        </div>
      </div>
    </div>
  )
}

export default Service