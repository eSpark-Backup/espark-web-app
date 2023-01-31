import React from "react";
import { telentedSpeakers } from "../../helper/eventCard";

const Telentedspeaker = () => {
  return (
    <>
      <div class="speakers-area gray-300">
        <div class="container position-relative pt-110">
          <div class="row">
            <div class="col-lg-12">
              <div class="background-title text-style-one">
                <h2>Speaker</h2>
              </div>
              <div class="section-head">
                <h5>Speaker</h5>
                <h3>Talented Speaker</h3>
              </div>
            </div>
          </div>
          <div class="swiper speaker-slider-two swiper-initialized swiper-horizontal swiper-pointer-events">
            <div className="row">
              {telentedSpeakers.map((items) => {
                return (
                  <div
                    class="col-lg-4 col-md-6 wow fadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                    style={{
                      visibility: "visible",
                      animationDuration: "1500ms",
                      animationDelay: "200ms",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div
                      class="swiper-wrapper"
                      id="swiper-wrapper-df101108e5274561053"
                      aria-live="off"
                      //   style={{
                      //     transitionDuration: "0ms",
                      //     transform: "translate3d(-1320px, 0px, 0px)",
                      //   }}
                    >
                      <div
                        class="swiper-slide swiper-slide-duplicate"
                        data-swiper-slide-index="0"
                        // style={{ width: "416px", marginRight: "24px" }}
                      >
                        <div class="speaker-card">
                          <div class="speaker-image">
                            <img src={items.img} alt="" />
                            <ul class="speaker-social-icons">
                              <li>
                                <a href="https://demo.egenslab.com/html/eventlab/#">
                                  <i class="fab fa-facebook-f"></i>
                                </a>
                              </li>
                              <li>
                                <a href="https://demo.egenslab.com/html/eventlab/#">
                                  <i class="fab fa-instagram"></i>
                                </a>
                              </li>
                              <li>
                                <a href="https://demo.egenslab.com/html/eventlab/#">
                                  <i class="fab fa-linkedin-in"></i>
                                </a>
                              </li>
                              <li>
                                <a href="https://demo.egenslab.com/html/eventlab/#">
                                  <i class="fab fa-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="https://demo.egenslab.com/html/eventlab/#">
                                  <i class="fab fa-whatsapp"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div class="speaker-info">
                            <h5 class="speaker-name">
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
                class="swiper-notification"
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
