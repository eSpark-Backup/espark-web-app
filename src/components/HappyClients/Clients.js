import React from 'react'
import shape2 from "../../../src/assets/images/shape2.svg";
import shape3 from "../../../src/assets/images/shape3.svg";
import shape4 from "../../../src/assets/images/shape4.svg";
import shape5 from "../../../src/assets/images/shape5.png";

import client1 from "../../../src/assets/images/client-image/client1.jpg";
import client2 from "../../../src/assets/images/client-image/client2.jpg";
import client3 from "../../../src/assets/images/client-image/client3.jpg";
import client4 from "../../../src/assets/images/client-image/client4.jpg";
import client5 from "../../../src/assets/images/client-image/client5.jpg";



function Clients() {
  return (
    <div>
         <section class="feedback-area ptb-80 bg-f7fafd">
        <div class="container">
          <div class="section-title">
            <h2>What users Saying</h2>
            <div class="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div class="feedback-slides">
            <div class="client-feedback">
              <div>
                <div class="slick-slider slick-initialized" dir="ltr">
                  <div class="slick-list">
                    {/* <div class="slick-track" style="width: 1700%; left: -100%"> */}
                      {/* <div
                        data-index="0"
                        class="slick-slide slick-active slick-current"
                        tabindex="-1"
                        aria-hidden="false"
                        style="
                          outline: none;
                          width: 5.882352941176471%;
                          position: relative;
                          left: 0;
                          opacity: 1;
                          transition: opacity 100ms linear,
                            visibility 100ms linear;
                        "
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style="width: 100%; display: inline-block"
                          >
                            <div class="item">
                              <div class="single-feedback">
                                <div class="client-img">
                                  <img
                                    src={client4}
                                    alt="image"
                                  />
                                </div>
                                <h3>David Gale</h3>
                                <span>Web Developer</span>
                                <p>
                                  Quis ipsum suspendisse ultrices gravida. Risus
                                  commodo viverra maecenas accumsan lacus vel
                                  facilisis. Lorem ipsum dolor sit amet,
                                  consectetur adipiscing elit, sed do eiusmod
                                  tempor incididunt ut labore et dolore magna
                                  aliqua.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      {/* <div
                        data-index="1"
                        class="slick-slide"
                        tabindex="-1"
                        aria-hidden="true"
                        style="
                          outline: none;
                          width: 5.882352941176471%;
                          position: relative;
                          left: -5px;
                          opacity: 0;
                          transition: opacity 100ms linear,
                            visibility 100ms linear;
                        "
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style="width: 100%; display: inline-block"
                          >
                            <div class="item">
                              <div class="single-feedback">
                                <div class="client-img">
                                  <img
                                    src={client2}
                                    alt="image"
                                  />
                                </div>
                                <h3>Matt Damon</h3>
                                <span>Software Engineer</span>
                                <p>
                                  Quis ipsum suspendisse ultrices gravida. Risus
                                  commodo viverra maecenas accumsan lacus vel
                                  facilisis. Lorem ipsum dolor sit amet,
                                  consectetur adipiscing elit, sed do eiusmod
                                  tempor incididunt ut labore et dolore magna
                                  aliqua.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="2"
                        class="slick-slide"
                        tabindex="-1"
                        aria-hidden="true"
                        style="
                          outline: none;
                          width: 5.882352941176471%;
                          position: relative;
                          left: -10px;
                          opacity: 0;
                          transition: opacity 100ms linear,
                            visibility 100ms linear;
                        "
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style="width: 100%; display: inline-block"
                          >
                            <div class="item">
                              <div class="single-feedback">
                                <div class="client-img">
                                  <img
                                    src={client1}
                                    alt="image"
                                  />
                                </div>
                                <h3>Nicky Parsons</h3>
                                <span>Fictional Character</span>
                                <p>
                                  Quis ipsum suspendisse ultrices gravida. Risus
                                  commodo viverra maecenas accumsan lacus vel
                                  facilisis. Lorem ipsum dolor sit amet,
                                  consectetur adipiscing elit, sed do eiusmod
                                  tempor incididunt ut labore et dolore magna
                                  aliqua.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="3"
                        class="slick-slide"
                        tabindex="-1"
                        aria-hidden="true"
                        style="
                          outline: none;
                          width: 5.882352941176471%;
                          position: relative;
                          left: -15px;
                          opacity: 0;
                          transition: opacity 100ms linear,
                            visibility 100ms linear;
                        "
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style="width: 100%; display: inline-block"
                          >
                            <div class="item">
                              <div class="single-feedback">
                                <div class="client-img">
                                  <img
                                   src={client3}
                                    alt="image"
                                  />
                                </div>
                                <h3>Jason Momoa</h3>
                                <span>American Actor</span>
                                <p>
                                  Quis ipsum suspendisse ultrices gravida. Risus
                                  commodo viverra maecenas accumsan lacus vel
                                  facilisis. Lorem ipsum dolor sit amet,
                                  consectetur adipiscing elit, sed do eiusmod
                                  tempor incididunt ut labore et dolore magna
                                  aliqua.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="4"
                        class="slick-slide"
                        tabindex="-1"
                        aria-hidden="true"
                        style="
                          outline: none;
                          width: 5.882352941176471%;
                          position: relative;
                          left: -20px;
                          opacity: 0;
                          transition: opacity 100ms linear,
                            visibility 100ms linear;
                        "
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style="width: 100%; display: inline-block"
                          >
                            <div class="item">
                              <div class="single-feedback">
                                <div class="client-img">
                                  <img
                                    src={client3}
                                    alt="image"
                                  />
                                </div>
                                <h3>Gennady Korotkevich</h3>
                                <span>Sport Programmer</span>
                                <p>
                                  Quis ipsum suspendisse ultrices gravida. Risus
                                  commodo viverra maecenas accumsan lacus vel
                                  facilisis. Lorem ipsum dolor sit amet,
                                  consectetur adipiscing elit, sed do eiusmod
                                  tempor incididunt ut labore et dolore magna
                                  aliqua.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="5"
                        class="slick-slide"
                        tabindex="-1"
                        aria-hidden="true"
                        style="
                          outline: none;
                          width: 5.882352941176471%;
                          position: relative;
                          left: -25px;
                          opacity: 0;
                          transition: opacity 100ms linear,
                            visibility 100ms linear;
                        "
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style="width: 100%; display: inline-block"
                          >
                            <div class="item">
                              <div class="single-feedback">
                                <div class="client-img">
                                  <img
                                   src={client5}
                                    alt="image"
                                  />
                                </div>
                                <h3>Petr Mitrichev</h3>
                                <span>Russian Programmer</span>
                                <p>
                                  Quis ipsum suspendisse ultrices gravida. Risus
                                  commodo viverra maecenas accumsan lacus vel
                                  facilisis. Lorem ipsum dolor sit amet,
                                  consectetur adipiscing elit, sed do eiusmod
                                  tempor incididunt ut labore et dolore magna
                                  aliqua.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="6"
                        class="slick-slide"
                        tabindex="-1"
                        aria-hidden="true"
                        style="
                          outline: none;
                          width: 5.882352941176471%;
                          position: relative;
                          left: -30px;
                          opacity: 0;
                          transition: opacity 100ms linear,
                            visibility 100ms linear;
                        "
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style="width: 100%; display: inline-block"
                          >
                            <div class="item">
                              <div class="single-feedback">
                                <div class="client-img">
                                  <img
                                    src={client3}
                                    alt="image"
                                  />
                                </div>
                                <h3>Reid W. Barton</h3>
                                <span>Mathematics</span>
                                <p>
                                  Quis ipsum suspendisse ultrices gravida. Risus
                                  commodo viverra maecenas accumsan lacus vel
                                  facilisis. Lorem ipsum dolor sit amet,
                                  consectetur adipiscing elit, sed do eiusmod
                                  tempor incididunt ut labore et dolore magna
                                  aliqua.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="7"
                        class="slick-slide"
                        tabindex="-1"
                        aria-hidden="true"
                        style="
                          outline: none;
                          width: 5.882352941176471%;
                          position: relative;
                          left: -35px;
                          opacity: 0;
                          transition: opacity 100ms linear,
                            visibility 100ms linear;
                        "
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style="width: 100%; display: inline-block"
                          >
                            <div class="item">
                              <div class="single-feedback">
                                <div class="client-img">
                                  <img
                                    src={client2}
                                    alt="image"
                                  />
                                </div>
                                <h3>Lisa Sauermann</h3>
                                <span>Mathematician</span>
                                <p>
                                  Quis ipsum suspendisse ultrices gravida. Risus
                                  commodo viverra maecenas accumsan lacus vel
                                  facilisis. Lorem ipsum dolor sit amet,
                                  consectetur adipiscing elit, sed do eiusmod
                                  tempor incididunt ut labore et dolore magna
                                  aliqua.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="client-thumbnails">
              <div>
                <div class="slick-slider slick-initialized" dir="ltr">
                  <button class="prev-arrow slick-arrow">
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
                      <line x1="19" y1="12" x2="5" y2="12"></line>
                      <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                  </button>
                  <div class="slick-list" style="padding: 0px 50px">
                    <div class="slick-track" style="width: 440%; left: -80%">
                      <div
                        data-index="-6"
                        tabindex="-1"
                        class="slick-slide slick-cloned"
                        aria-hidden="true"
                        style="width: 4.545454545454546%"
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style="width: 100%; display: inline-block"
                          >
                            <div class="item">
                              <div class="img-fill">
                                <img
                                  src={client3}
                                  alt="client"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="-5"
                        tabindex="-1"
                        class="slick-slide slick-cloned"
                        aria-hidden="true"
                        style="width: 4.545454545454546%"
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style="width: 100%; display: inline-block"
                          >
                            <div class="item">
                              <div class="img-fill">
                                <img
                                  src={client3}
                                  alt="client"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="-4"
                        tabindex="-1"
                        class="slick-slide slick-cloned"
                        aria-hidden="true"
                        style="width: 4.545454545454546%"
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style="width: 100%; display: inline-block"
                          >
                            <div class="item">
                              <div class="img-fill">
                                <img
                                  src={client2}
                                  alt="client"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="-3"
                        tabindex="-1"
                        class="slick-slide slick-cloned"
                        aria-hidden="true"
                        style="width: 4.545454545454546%"
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style="width: 100%; display: inline-block"
                          >
                            <div class="item">
                              <div class="img-fill">
                                <img
                                 src={client3}
                                  alt="client"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="-2"
                        tabindex="-1"
                        class="slick-slide slick-active slick-cloned"
                        aria-hidden="false"
                        style="width: 4.545454545454546%"
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style="width: 100%; display: inline-block"
                          >
                            <div class="item">
                              <div class="img-fill">
                                <img
                                  src={client3}
                                  alt="client"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="-1"
                        tabindex="-1"
                        class="slick-slide slick-active slick-cloned"
                        aria-hidden="false"
                        style="width: 4.545454545454546%"
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style="width: 100%; display: inline-block"
                          >
                            <div class="item">
                              <div class="img-fill">
                                <img
                                  src={client1}
                                  alt="client"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="0"
                        class="slick-slide slick-active slick-center slick-current"
                        tabindex="-1"
                        aria-hidden="false"
                        style="outline: none; width: 4.545454545454546%"
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style="width: 100%; display: inline-block"
                          >
                            <div class="item">
                              <div class="img-fill">
                                <img
                                  src={client2}
                                  alt="client"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="1"
                        class="slick-slide slick-active"
                        tabindex="-1"
                        aria-hidden="false"
                        style="outline: none; width: 4.545454545454546%"
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style="width: 100%; display: inline-block"
                          >
                            <div class="item">
                              <div class="img-fill">
                                <img
                                  src={client3}
                                  alt="client"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="2"
                        class="slick-slide slick-active"
                        tabindex="-1"
                        aria-hidden="false"
                        style="outline: none; width: 4.545454545454546%"
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style="width: 100%; display: inline-block"
                          >
                            <div class="item">
                              <div class="img-fill">
                                <img
                                  src={client4}
                                  alt="client"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="3"
                        class="slick-slide"
                        tabindex="-1"
                        aria-hidden="true"
                        style="outline: none; width: 4.545454545454546%"
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style="width: 100%; display: inline-block"
                          >
                            <div class="item">
                              <div class="img-fill">
                                <img
                                  src={client5}
                                  alt="client"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="4"
                        class="slick-slide"
                        tabindex="-1"
                        aria-hidden="true"
                        style="outline: none; width: 4.545454545454546%"
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style="width: 100%; display: inline-block"
                          >
                            <div class="item">
                              <div class="img-fill">
                                <img
                                  src={client3}
                                  alt="client"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="5"
                        class="slick-slide"
                        tabindex="-1"
                        aria-hidden="true"
                        style="outline: none; width: 4.545454545454546%"
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style="width: 100%; display: inline-block"
                          >
                            <div class="item">
                              <div class="img-fill">
                                <img
                                  src={client1}
                                  alt="client"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="6"
                        class="slick-slide"
                        tabindex="-1"
                        aria-hidden="true"
                        style="outline: none; width: 4.545454545454546%"
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style="width: 100%; display: inline-block"
                          >
                            <div class="item">
                              <div class="img-fill">
                                <img
                                  src={client3}
                                  alt="client"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="7"
                        class="slick-slide"
                        tabindex="-1"
                        aria-hidden="true"
                        style="outline: none; width: 4.545454545454546%"
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style="width: 100%; display: inline-block"
                          >
                            <div class="item">
                              <div class="img-fill">
                                <img
                                  src={client1}
                                  alt="client"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="8"
                        tabindex="-1"
                        class="slick-slide slick-center slick-cloned"
                        aria-hidden="true"
                        style="width: 4.545454545454546%"
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style="width: 100%; display: inline-block"
                          >
                            <div class="item">
                              <div class="img-fill">
                                <img
                                  src={client2}
                                  alt="client"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="9"
                        tabindex="-1"
                        class="slick-slide slick-cloned"
                        aria-hidden="true"
                        style="width: 4.545454545454546%"
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style="width: 100%; display: inline-block"
                          >
                            <div class="item">
                              <div class="img-fill">
                                <img
                                  src={client4}
                                  alt="client"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="10"
                        tabindex="-1"
                        class="slick-slide slick-cloned"
                        aria-hidden="true"
                        style="width: 4.545454545454546%"
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style="width: 100%; display: inline-block"
                          >
                            <div class="item">
                              <div class="img-fill">
                                <img
                                  src={client1}
                                  alt="client"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="11"
                        tabindex="-1"
                        class="slick-slide slick-cloned"
                        aria-hidden="true"
                        style="width: 4.545454545454546%"
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style="width: 100%; display: inline-block"
                          >
                            <div class="item">
                              <div class="img-fill">
                                <img
                                  src={client5}
                                  alt="client"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="12"
                        tabindex="-1"
                        class="slick-slide slick-cloned"
                        aria-hidden="true"
                        style="width: 4.545454545454546%"
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style="width: 100%; display: inline-block"
                          >
                            <div class="item">
                              <div class="img-fill">
                                <img
                                  src={client3}
                                  alt="client"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="13"
                        tabindex="-1"
                        class="slick-slide slick-cloned"
                        aria-hidden="true"
                        style="width: 4.545454545454546%"
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style="width: 100%; display: inline-block"
                          >
                            <div class="item">
                              <div class="img-fill">
                                <img
                                  src={client3}
                                  alt="client"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="14"
                        tabindex="-1"
                        class="slick-slide slick-cloned"
                        aria-hidden="true"
                        style="width: 4.545454545454546%"
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style="width: 100%; display: inline-block"
                          >
                            <div class="item">
                              <div class="img-fill">
                                <img
                                  src={client2}
                                  alt="client"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="15"
                        tabindex="-1"
                        class="slick-slide slick-cloned"
                        aria-hidden="true"
                        style="width: 4.545454545454546%"
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style="width: 100%; display: inline-block"
                          >
                            <div class="item">
                              <div class="img-fill">
                                <img
                                  src={client1}
                                  alt="client"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button class="next-arrow slick-arrow">
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
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div class="shape1">
          <img src={shape2} alt="shape" />
        </div>
        <div class="shape2 rotateme">
          <img src={shape3} alt="shape" />
        </div>
        <div class="shape4">
          <img src={shape3} alt="shape" />
        </div>
        <div class="shape5"><img src={shape3} alt="shape" /></div>
        <div class="shape6 rotateme">
          <img src={shape3} alt="shape" />
        </div>
        <div class="shape7">
          <img src={shape3} alt="shape" />
        </div>
        <div class="shape8 rotateme">
          <img src={shape3} alt="shape" />
        </div>
      </section>
    </div>
  )
}

export default Clients