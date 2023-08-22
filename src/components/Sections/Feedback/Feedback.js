import React from 'react'

import shape2 from "../../../../src/assets/images/shape2.svg";
import shape3 from "../../../../src/assets/images/shape3.svg";
import shape4 from "../../../../src/assets/images/shape4.svg";
import shape5 from "../../../../src/assets/images/shape5.png";


function Feedback() {
  return (
    <div>
          <div className="ml-feedback-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>Our Clients Feedback</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
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

export default Feedback