import React from "react";

import { shapes } from "../../helper/ImageUrl";
import About from "../Sections/About/About";

function HeroSectionTwo({ heading1 }) {
  return (
    <>
      <div class="hosting-main-banner">
        <div class="d-table">
          <div class="d-table-cell">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                  <div class="hosting-banner-content">
                    <h1>{heading1}</h1>
                    <ul>
                      <li>FREE Domain Name for 2st Year</li>
                      <li>FREE SSL Certificate Included</li>
                      <li>1-Click Wordpress Install</li>
                      <li>24/7 Support</li>
                    </ul>
                    <p>
                      Starting at <span>$8.99</span> $3.95/month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {shapes?.map((item, index) => (
          <div key={index} className={item.className}>
            <img src={item.imgUrl} alt={item.alt} />{" "}
          </div>
        ))}

        <div className="pt-5">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div class="single-box">
                  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="12" y1="1" x2="12" y2="23"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                  <h3>
                    <a href="/feature-details/">Money-back Guarantee</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                    tempor incididunt ut labore dolore magna.
                  </p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="single-box bg-f78acb">
                  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                    </svg>
                  </div>
                  <h3>
                    <a href="/feature-details/">Big Data Transfer</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                    tempor incididunt ut labore dolore magna.
                  </p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="single-box bg-c679e3">
                  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="12" y1="20" x2="12" y2="10"></line>
                      <line x1="18" y1="20" x2="18" y2="4"></line>
                      <line x1="6" y1="20" x2="6" y2="16"></line>
                    </svg>
                  </div>
                  <h3>
                    <a href="/feature-details/">99.9% Server Uptime</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                    tempor incididunt ut labore dolore magna.
                  </p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="single-box bg-eb6b3d">
                  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect
                        x="4"
                        y="2"
                        width="16"
                        height="20"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="12" y1="18" x2="12.01" y2="18"></line>
                    </svg>
                  </div>
                  <h3>
                    <a href="/feature-details/">Live 24/7 Support</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                    tempor incididunt ut labore dolore magna.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default HeroSectionTwo;
