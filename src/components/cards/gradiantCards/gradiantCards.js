import React from "react";

const GradiantCards = ({ data }) => {
  return (
    <div className="pb-5">
      <div class="container">
        <div class="row">
          {data?.map((item) => {
            return (
              <div class="col-lg-4 col-md-6 mt-1">
                <div class="single-box">
                  <div class="icon">
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
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="8"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="2"
                        y="14"
                        width="20"
                        height="8"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="6" y1="6" x2="6.01" y2="6"></line>
                      <line x1="6" y1="18" x2="6.01" y2="18"></line>
                    </svg>
                  </div>
                  <h3>
                    <a href="/feature-details/">{item?.name}</a>
                  </h3>
                  <p>{item?.data?.shortDescription}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GradiantCards;
