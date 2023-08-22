import React from "react";
import SectionTitle from "../sectionTitle";
import Testimonial from "../testimonial/Testimonial";

export default function PartnerAbout() {
  return (
    <div className="container-fluid">
      <SectionTitle heading={"Client Testimonials"} paragraph={""} />
      <Testimonial />
    </div>
  );
}
