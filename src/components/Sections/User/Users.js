import React from 'react'
import map from "../../../../src/assets/images/map.png";
import shape2 from "../../../../src/assets/images/shape2.svg";
import shape3 from "../../../../src/assets/images/shape3.svg";
import shape4 from "../../../../src/assets/images/shape4.svg";
import shape5 from "../../../../src/assets/images/shape5.png";

function Users() {
  return (
    <div>
        <div class="funfacts-area ptb-80">
        <div class="container">
          <div class="section-title">
            <h2>We always try to understand users expectation</h2>
            <div class="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-3 col-6">
              <div class="funfact">
                <h3>180K</h3>
                <p>Downloaded</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-6">
              <div class="funfact">
                <h3>20K</h3>
                <p>Feedback</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-6">
              <div class="funfact">
                <h3>500+</h3>
                <p>Workers</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-6">
              <div class="funfact">
                <h3>70+</h3>
                <p>Contributors</p>
              </div>
            </div>
          </div>
          <div class="contact-cta-box">
            <h3>Have any question about us?</h3>
            <p>Don&#x27;t hesitate to contact us</p>
            <a class="btn btn-primary" href="/contact/">Contact Us</a>
          </div>
          <div class="map-bg"><img src={map} alt="map" /></div>
        </div>
      </div>
      <div class="ml-projects-area pt-0 ptb-80">
        <div class="container">
          <div class="section-title st-fs-28">
            <h2>Proud Projects That Make Us Stand Out</h2>
            <div class="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div class="container-fluid"></div>
        <div class="shape1"><img src={shape5} alt="shape" /></div>
        <div class="shape2 rotateme">
          <img src={shape2} alt="shape" />
        </div>
        <div class="shape3"><img src={shape3} alt="shape" /></div>
        <div class="shape4"><img src={shape4} alt="shape" /></div>
        <div class="shape7"><img src={shape4} alt="shape" /></div>
        <div class="shape8 rotateme">
          <img src={shape2} alt="shape" />
        </div>
      </div>
    </div>
  )
}

export default Users