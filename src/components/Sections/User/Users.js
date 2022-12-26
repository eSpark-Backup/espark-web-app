import React from "react";
import { Link } from "react-router-dom";
import map from "../../../../src/assets/images/map.png";
import shape2 from "../../../../src/assets/images/shape2.svg";
import shape3 from "../../../../src/assets/images/shape3.svg";
import shape4 from "../../../../src/assets/images/shape4.svg";
import shape5 from "../../../../src/assets/images/shape5.png";

function Users() {
  return (
    <div>
      <div class="funfacts-area bg-image ptb-80">
        <div class="container">
          <div class="section-title">
            <h2>We always try to understand users expectation</h2>
            <div class="bar"></div>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p> */}
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-3 col-6 col-sm-6">
              <div class="single-funfact">
                <h3>2015</h3>
                <p>COMPANY FORMATION</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-6 col-sm-6">
              <div class="single-funfact">
                <h3>300+</h3>
                <p>COMPLETED PROJECTS</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-6 col-sm-6">
              <div class="single-funfact">
                <h3>50+</h3>
                <p>TALENTED ESPARKS</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-6 col-sm-6">
              <div class="single-funfact">
                <h3>200+</h3>
                <p>SATISFIED CUSTOMERS</p>
              </div>
            </div>
          </div>
          <div class="contact-cta-box">
            <h3>Have any question about us?</h3>
            <p>Don&#x27;t hesitate to contact us</p>
            <Link to={"lets-talk"}>
              <a class="btn btn-primary">Contact Us</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
