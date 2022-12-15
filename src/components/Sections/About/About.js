import React from 'react'
import shape2 from "../../../../src/assets/images/shape2.svg";
import shape3 from "../../../../src/assets/images/shape3.svg";
import shape4 from "../../../../src/assets/images/shape4.svg";
import shape5 from "../../../../src/assets/images/shape5.png";


import about4 from "../../../../src/assets/images/about4.png";

function About() {
  return (
    <div>
        <div class="about-area pt-0 ptb-80">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-12">
              <div class="ml-about-img">
                <img src={about4} alt="image" />
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="ml-about-content">
                <span class="sub-title">About Us</span>
                <h2>Engaging New Audiences Through Smart Approach</h2>
                <div class="bar"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Nullam quis ante. Etiam sit amet orci eget eros faucibus
                  tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec
                  sodales sagittis magna. Sed consequat, leo eget bibendum
                  sodales, augue velit cursus nunc.Donec vitae sapien ut libero
                  venenatis faucibus tempus.
                </p>
                <a class="btn btn-secondary" href="/about-1/">Discover More</a>
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
        <div class="shape7"><img src={shape4} alt="shape" /></div>
        <div class="shape8 rotateme">
          <img src={shape2} alt="shape" />
        </div>
      </div>
    </div>
  )
}

export default About