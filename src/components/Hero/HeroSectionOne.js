import React from "react";

const HeroSectionOne = ({ heading, paragrah }) => {
  return (
    <div>
      <div class="repair-main-banner">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="repair-banner-content">
                <h1>Your Local Computer Repair Experts!</h1>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don&#x27;t
                  look even slightly believable.
                </p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="repair-banner-image">
                <img
                  src="/images/repair-banner-image/repair-banner-img.png"
                  alt="image"
                />
                <img
                  src="/images/repair-banner-image/repair-shape1.png"
                  class="animate__animated animate__zoomIn animate__delay-0.6s"
                  alt="image"
                />
                <img
                  src="/images/repair-banner-image/repair-shape2.png"
                  class="animate__animated animate__fadeInLeft animate__delay-0.6s"
                  alt="image"
                />
                <img
                  src="/images/repair-banner-image/repair-shape-circle.png"
                  class="rotateme"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionOne;
