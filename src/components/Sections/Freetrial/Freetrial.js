import React from "react";
import shape2 from "../../../../src/assets/images/shape2.svg";
import shape4 from "../../../../src/assets/images/shape4.svg";
import freeTrial from "../../../../src/assets/images/free-trial-img.png";

function Freetrial() {
  return (
    <div>
      <div className="free-trial-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="free-trial-image">
                <img src={freeTrial} alt="image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="free-trial-content">
                <h2>Start your free trial</h2>
                <form className="newsletter-form">
                  <input
                    type="email"
                    className="input-newsletter"
                    placeholder="Enter your business email here"
                  />
                  <button type="submit">Sign Up Free</button>
                </form>
                <p>
                  Test out the Machine Learning features for 14 days, no credit
                  card required.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="shape2 rotateme">
          <img src={shape2} alt="shape" />
        </div>
        <div className="shape4">
          <img src={shape4} alt="shape" />
        </div>
        <div className="shape7">
          <img src={shape4} alt="shape" />
        </div>
        <div className="shape8 rotateme">
          <img src={shape2} alt="shape" />
        </div>
      </div>
    </div>
  );
}

export default Freetrial;
