import React from "react";
import { telentedSpeakers } from "../../helper/eventCard";

const Telentedspeaker = () => {
  return (
    <>
      <div className="speakers-area gray-300">
        <div className="container position-relative pt-110">
          <div className="row">
            <div className="col-lg-12">
              <div className="background-title text-style-one">
                <h2>Speaker</h2>
              </div>
              <div className="section-head">
                <h5>Speaker</h5>
                <h3>Talented Speaker</h3>
              </div>
            </div>
          </div>
          <div className="swiper speaker-slider-two swiper-initialized swiper-horizontal swiper-pointer-events">
            <div className="row">
              {telentedSpeakers.map((items) => {
                return (
                  <div
                    className="col-lg-4 col-md-6 wow fadeInUp mytransformfadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <div
                      className="swiper-wrapper myThreeD"
                      id="swiper-wrapper-df101108e5274561053"
                      aria-live="off"
                    >
                      <div
                        className="swiper-slide swiper-slide-duplicate"
                        data-swiper-slide-index="0"
                      >
                        <div className="speaker-card">
                          <div className="speaker-image">
                            <img src={items.img} alt="" />
                            <ul className="speaker-social-icons">
                              <li>
                                <a href="https://demo.egenslab.com/html/eventlab/#">
                                  <i className="fab fa-facebook-f"></i>
                                </a>
                              </li>
                              <li>
                                <a href="https://demo.egenslab.com/html/eventlab/#">
                                  <i className="fab fa-instagram"></i>
                                </a>
                              </li>
                              <li>
                                <a href="https://demo.egenslab.com/html/eventlab/#">
                                  <i className="fab fa-linkedin-in"></i>
                                </a>
                              </li>
                              <li>
                                <a href="https://demo.egenslab.com/html/eventlab/#">
                                  <i className="fab fa-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="https://demo.egenslab.com/html/eventlab/#">
                                  <i className="fab fa-whatsapp"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="speaker-info">
                            <h5 className="speaker-name">
                              <a href="https://demo.egenslab.com/html/eventlab/speaker-details.html">
                                {items.name}
                              </a>
                            </h5>
                            <p>{items.designation}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Telentedspeaker;
