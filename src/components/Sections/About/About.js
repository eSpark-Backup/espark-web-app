import React from "react";
import shape2 from "../../../../src/assets/images/shape2.svg";
import shape3 from "../../../../src/assets/images/shape3.svg";
import shape4 from "../../../../src/assets/images/shape4.svg";
import shape5 from "../../../../src/assets/images/shape5.png";

import about4 from "../../../../src/assets/images/about4.png";
import styles from "./style.module.css";


function About({ id, img, p, h1 }) {
  return (
    <div>
      {id === 1 ? (
        <div className="about-area pt-0 ptb-80">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="ml-about-img">
                  <img src={img ? img : about4} alt="image101" width={250} />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="ml-about-content">
                  <h2>
                    {h1 ? h1 : "Engaging New Audiences Through Smart Approach "}
                  </h2>
                  {h1 ? null : <div className="bar"></div>}
                  {p ? (
                    <p>{p}</p>
                  ) : (
                    <>
                      <p>
                        eSpark Consultants is a complete solution provider for
                        modern software development imparting latest methods and
                        techniques to tackle the increasing software
                        advancements. We began our journey in 2015 and are
                        working hard since then to bring a big smile on the face
                        of our customers by making them visible among their
                        competitors We are passionate about providing solutions
                        that represent real value for money.
                      </p>
                      <p>
                        We understand and believe you can’t afford to waste your
                        investment for such a crucial aspect of your business by
                        leaving it in the hands of amateurs. You are investing
                        not only money, but your time when you decide to design
                        and develop your project with us. Times and conditions
                        change so rapidly that we must keep our aim constantly
                        focused on the future
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="shape1">
            <img src={shape5} alt="shape" />
          </div>
          <div className="shape2 rotateme">
            <img src={shape2} alt="shape" />
          </div>
          <div className="shape3">
            <img src={shape3} alt="shape" />
          </div>
          <div className="shape4">
            <img src={shape4} alt="shape" />
          </div>
          <div className="shape7">
            <img src={shape4} alt="shape" />
          </div>
          <div className="shape8 rotateme">
            <img src={shape2} alt="shape" />
          </div>
        </div>
      ) : (
        <div className="about-area pt-0 ptb-80">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="ml-about-content">
                  <h2>
                    {h1 ? h1 : "Engaging New Audiences Through Smart Approach "}
                  </h2>
                  {h1 ? null : <div className="bar"></div>}
                  {p ? (
                    <p className={styles.paraText}>{p}</p>
                  ) : (
                    <>
                      <p className={styles.paraText}>
                        eSpark Consultants is a complete solution provider for
                        modern software development imparting latest methods and
                        techniques to tackle the increasing software
                        advancements. We began our journey in 2015 and are
                        working hard since then to bring a big smile on the face
                        of our customers by making them visible among their
                        competitors We are passionate about providing solutions
                        that represent real value for money.
                      </p>
                      <p className={styles.paraText}>
                        We understand and believe you can’t afford to waste your
                        investment for such a crucial aspect of your business by
                        leaving it in the hands of amateurs. You are investing
                        not only money, but your time when you decide to design
                        and develop your project with us. Times and conditions
                        change so rapidly that we must keep our aim constantly
                        focused on the future
                      </p>
                    </>
                  )}
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="ml-about-img mt-2">
                  <img src={img ? img : about4} alt="image102" width={250} />
                </div>
              </div>
            </div>
          </div>
          <div className="shape1">
            <img src={shape5} alt="shape" />
          </div>
          <div className="shape2 rotateme">
            <img src={shape2} alt="shape" />
          </div>
          <div className="shape3">
            <img src={shape3} alt="shape" />
          </div>
          <div className="shape4">
            <img src={shape4} alt="shape" />
          </div>
          <div className="shape7">
            <img src={shape4} alt="shape" />
          </div>
          <div className="shape8 rotateme">
            <img src={shape2} alt="shape" />
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
