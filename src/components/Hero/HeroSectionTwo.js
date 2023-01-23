import React from "react";

import { shapes } from "../../helper/ImageUrl";

function HeroSectionTwo({ heading1, paragarph, features }) {
  return (
    <>
      <div class="hosting-main-banner">
        <div class="d-table">
          <div class="d-table-cell">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                  <div class="hosting-banner-content">
                    <h1 className="comando">{heading1}</h1>

                    <p dangerouslySetInnerHTML={{ __html: paragarph }}></p>
                  </div>
                </div>
                <div class="col-lg-6 col-md-12" style={{ textAlign: "center" }}>
                  <div class="hosting-banner-content">
                    <img
                      src={require("../../assets/images/App Screenshots/Command Do App Screenshots/GIF_CommandD.gif")}
                      alt=""
                      width={250}
                    />
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
              {features &&
                features.map((item) => {
                  return (
                    <div class="col-lg-4 col-md-6">
                      <div class="single-box">
                        <h3>
                          <a>{item.name}</a>
                        </h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSectionTwo;
