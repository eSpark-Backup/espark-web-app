import React from "react";
import SectionTitle from "../sectionTitle";
import Testimonial from "../testimonial/Testimonial";

export default function PartnerAbout() {
  return (
    <div className="partnerWrapper ptb-80">
      <div class=" row">
        <div class="container">
        <SectionTitle
        heading={"Client Testimonials"}
        paragraph={""}
      />
          
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
