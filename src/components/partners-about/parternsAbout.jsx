import React from "react";
import Testimonial from "../testimonial/Testimonial";

export default function PartnerAbout() {
  return (
    <div className="partnerWrapper">
      <div class=" row">
        <div class="container">
          <div class="section-title">
            <div className="p-20">
              <hr />
            </div>
            <h1>Client Testimonials</h1>
          </div>
          <div className="row d-flex flex-row justify-content-center" >
            <div id="testimonial" className=" testmonials col-sm-12 col-md-12 col-lg-10" >
              <Testimonial />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
