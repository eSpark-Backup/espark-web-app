import React from "react";

import { shapes } from "../../helper/ImageUrl";
import About from "../Sections/About/About";

function HeroSectionTwo({ heading1, image }) {
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
      <div className="pt-5">
        <About id={1} />
        <About id={2} />
      </div>
      <div class="cta-area ptb-80">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-7 col-md-6">
              <div class="cta-content">
                <h3>Download App from google Play store </h3>
              </div>
            </div>
            <div class="col-lg-5 col-md-6">
              <div class="cta-right-content">
                <div class="hosting-price">
                  <span>Starting at only</span>
                  <h4>$4.75/mo*</h4>
                </div>
                <div class="buy-btn">
                  <a class="btn btn-primary">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 54 54"
                    >
                      <path d="M20.91887,10.653c-.31445-.16992-3.01074-1.73438-4.02246-2.32324l-.00293-.002L4.6386,1.25262a1.679,1.679,0,0,0-1.40711-.1593c-.02618.0094-.05078.01886-.07623.03051a1.41835,1.41835,0,0,0-.17291.06922,1.51864,1.51864,0,0,0-.73828,1.36426V21.54266a1.43542,1.43542,0,0,0,.69238,1.2705,1.30761,1.30761,0,0,0,.15479.06373c.02893.01336.05651.025.08636.03552a1.37893,1.37893,0,0,0,.44635.0824,1.67263,1.67263,0,0,0,.83106-.23145c.38867-.22559,12.43847-7.18262,12.43847-7.18262L20.914,13.25945a1.52522,1.52522,0,0,0,.8418-1.334A1.49078,1.49078,0,0,0,20.91887,10.653ZM4.24407,19.839V4.10186l7.94012,7.85907Zm5.018-2.16168,4.34351-4.30957,1.14954,1.13782C13.49047,15.23583,11.35381,16.4696,9.26207,17.67736Zm4.3418-7.125L9.206,6.19933l5.55365,3.2063ZM16.55065,13.469l-1.52539-1.50977L16.553,10.44341c.72027.41828,1.84283,1.06934,2.6159,1.51429Z" />
                    </svg>{" "} */}
                    <span> Google play</span>
                  </a>
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
