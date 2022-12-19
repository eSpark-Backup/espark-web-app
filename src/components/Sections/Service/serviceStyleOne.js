import React from "react";
import { shapes } from "../../../helper/ImageUrl";
import icon4 from "../../../../src/assets/images/icon4.png";

const ServiceStyleOne = ({ data }) => {
  return (
    <div>
      <div class="solutions-area pt-80">
        <div class="container">
          <div class="row justify-content-center">
            {data.map((item) => {
              return (
                <div class="col-lg-3 col-sm-6 col-md-6">
                  <div class="single-solutions-box">
                    <div class="icon">
                      <img src={icon4} alt="image" />
                    </div>
                    <h3>
                      <a href="/service-details/">{item.name}</a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet elit, adipiscing, sed do
                      eiusmod tempor incididunt ut labore dolore magna aliqua.
                    </p>
                    <a class="learn-more-btn" href="/service-details/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="16"></line>
                        <line x1="8" y1="12" x2="16" y2="12"></line>
                      </svg>
                      Learn More
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {shapes?.map((item, index) => (
          <div key={index} className={item.className}>
            <img src={item.imgUrl} alt={item.alt} />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceStyleOne;
