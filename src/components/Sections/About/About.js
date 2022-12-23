import React from "react";
import shape2 from "../../../../src/assets/images/shape2.svg";
import shape3 from "../../../../src/assets/images/shape3.svg";
import shape4 from "../../../../src/assets/images/shape4.svg";
import shape5 from "../../../../src/assets/images/shape5.png";

import about4 from "../../../../src/assets/images/about4.png";
import { Link } from "react-router-dom";

function About({ id }) {
  return (
    <div>
      {id === 1 ? (
        <div class="about-area pt-0 ptb-80">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 col-md-12">
                <div class="ml-about-img">
                  <img src={about4} alt="image" />
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="ml-about-content">
                  <span class="sub-title">About Us</span>
                  <h2>Engaging New Audiences Through Smart Approach</h2>
                  <div class="bar"></div>
                  <p>
                    eSpark Consultants is a complete solution provider for
                    modern software development imparting latest methods and
                    techniques to tackle the increasing software advancements.
                    We began our journey in 2015 and are working hard since then
                    to bring a big smile on the face of our customers by making
                    them visible among their competitors We are passionate about
                    providing solutions that represent real value for money.
                  </p>
                  <p>
                    We understand and believe you can’t afford to waste your
                    investment for such a crucial aspect of your business by
                    leaving it in the hands of amateurs. You are investing not
                    only money, but your time when you decide to design and
                    develop your project with us. Times and conditions change so
                    rapidly that we must keep our aim constantly focused on the
                    future
                  </p>
                  <Link to={"/s"}>
                    <a class="btn btn-secondary">Discover More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="shape1">
            <img src={shape5} alt="shape" />
          </div>
          <div class="shape2 rotateme">
            <img src={shape2} alt="shape" />
          </div>
          <div class="shape3">
            <img src={shape3} alt="shape" />
          </div>
          <div class="shape4">
            <img src={shape4} alt="shape" />
          </div>
          <div class="shape7">
            <img src={shape4} alt="shape" />
          </div>
          <div class="shape8 rotateme">
            <img src={shape2} alt="shape" />
          </div>
        </div>
      ) : (
        <div class="about-area pt-0 ptb-80">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 col-md-12">
                <div class="ml-about-content">
                  <span class="sub-title">About Us</span>
                  <h2>Engaging New Audiences Through Smart Approach</h2>
                  <div class="bar"></div>
                  <p>
                    eSpark Consultants is a complete solution provider for
                    modern software development imparting latest methods and
                    techniques to tackle the increasing software advancements.
                    We began our journey in 2015 and are working hard since then
                    to bring a big smile on the face of our customers by making
                    them visible among their competitors We are passionate about
                    providing solutions that represent real value for money.
                  </p>
                  <p>
                    We understand and believe you can’t afford to waste your
                    investment for such a crucial aspect of your business by
                    leaving it in the hands of amateurs. You are investing not
                    only money, but your time when you decide to design and
                    develop your project with us. Times and conditions change so
                    rapidly that we must keep our aim constantly focused on the
                    future
                  </p>
                  {/* <a class="btn btn-secondary" href="/">
                    Discover More
                  </a> */}
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="ml-about-img">
                  <img src={about4} alt="image" />
                </div>
              </div>
            </div>
          </div>
          <div class="shape1">
            <img src={shape5} alt="shape" />
          </div>
          <div class="shape2 rotateme">
            <img src={shape2} alt="shape" />
          </div>
          <div class="shape3">
            <img src={shape3} alt="shape" />
          </div>
          <div class="shape4">
            <img src={shape4} alt="shape" />
          </div>
          <div class="shape7">
            <img src={shape4} alt="shape" />
          </div>
          <div class="shape8 rotateme">
            <img src={shape2} alt="shape" />
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
