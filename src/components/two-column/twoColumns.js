import React from "react";
import { Link } from "react-router-dom";

export default function TwoColumns({
  imgUrl,
  imgAlt,
  heading2,
  paragraph,
  button,
  id,
  link,
}) {
  if (id === 1) {
    return (
      <div className="about-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src={imgUrl} alt={imgAlt} />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="section-title">
                  <h2>{heading2}</h2>
                  <div className="bar"></div>
                  <p dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                </div>
                {button && (
                  <Link class="btn btn-primary" to={link}>
                    Read More
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (id === 2) {
    return (
      <div className="about-area ptb-80" style={{ backgroundColor: "#e5e6e7" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="section-title">
                  <h2>{heading2}</h2>
                  <div className="bar"></div>
                  <p dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                </div>
                {button && (
                  <Link class="btn btn-primary" to="/espark-app">
                    Read More
                  </Link>
                )}
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src={imgUrl} alt={imgAlt} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (id === 3) {
    return (
      <div class="cta-area pt-5">
        <div class="container">
          <div class="row ">
            <div class="col-lg-2 col-md-6">
              <div class="cta-content">
                <img
                  src="https://assets.raspberrypi.com/static/14fc26731cfe6ef875c1e156c3d80f6f/acdfe/pico-board-transparent.webp"
                  alt=""
                  class="img"
                />
              </div>
            </div>
            <div class="col-lg-8 col-md-6">
              <div class="cta-right-content text-center">
                <div class="hosting-price">
                  <h6 dangerouslySetInnerHTML={{ __html: paragraph }}></h6>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-6">
              <div class="cta-content">
                <img
                  src="https://assets.raspberrypi.com/static/14fc26731cfe6ef875c1e156c3d80f6f/acdfe/pico-board-transparent.webp"
                  alt=""
                  class="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
