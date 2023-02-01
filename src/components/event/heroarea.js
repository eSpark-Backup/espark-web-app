import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaSearchLocation } from "react-icons/fa";
import { sideBarlist } from "../../helper/eventCard";

const Heroarea = () => {
    const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <div class="main-slider-wrapper gray-300">
        <div class="hero-area">
          <div class="hero-shape">
            <img src="./hero-shape.png" alt="" />
            <img
              src={require("../../assets/images/events-images/hero-shape.png")}
              alt=""
            />
          </div>
          <div class="hero-sidebar-area d-lg-block d-none">
            <div class="sidebar-list">
              {
                sideBarlist.map((items) =>{
                  return (
                    <div class="sb-single-speaker">
                      <div class="single-speaker-thumb">
                        <img
                          src={items.img}
                          alt=""
                        />
                      </div>
                      <div class="sb-speaker-content">
                        <div class="sb-speaker-info">
                          <h6>
                            <a href="https://demo.egenslab.com/html/eventlab/speaker-details.html">
                              {items.name}
                            </a>
                          </h6>
                          <span>{items.designation}</span>
                        </div>
                        <ul class="sb-speaker-social-cion">
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
                        </ul>
                      </div>
                    </div>
                  )
                })
              }
              <h5>Meet Our Best Spekar:</h5>
            </div>
          </div>
          <div class="container">
            <div class="swiper-container hero-slider overflow-hidden swiper-initialized swiper-horizontal swiper-pointer-events">
              <div
                class="swiper-wrapper"
                id="swiper-wrapper-5be6b74bde6610c7b"
                aria-live="off"
              >
                <div
                  class="swiper-slide swiper-slide-duplicate swiper-slide-active myclass"
                  data-swiper-slide-index="1"
                  
                >
                  <div class="row align-items-center">
                    <div class="col-lg-6">
                      <div class="slide-content">
                        <h5>
                          <FaCalendarAlt /> January 21, 2021
                        </h5>
                        <h2>
                          EVENTS, MEETUPS &amp; <span>CONFERENCES</span>
                        </h2>
                        <ul class="featured-event">
                          <li>
                            <i class="bi bi-diagram-3"></i> <span>500</span>{" "}
                            Seat
                          </li>
                          <li>
                            <span>10</span> Speaker
                          </li>
                          <li>
                            <FaSearchLocation /> 1356 Broadway, New York
                          </li>
                        </ul>
                        <div class="slider-btns">
                          <a
                            href="https://demo.egenslab.com/html/eventlab/event-details.html"
                            class="primary-btn-fill"
                          >
                            Book Now
                          </a>
                          <a
                            href="https://demo.egenslab.com/html/eventlab/event-details.html"
                            class="primary-btn-outline"
                          >
                            View Details
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 text-center">
                      <div class="slide-figure position-relative d-lg-flex justify-content-center">
                        <img
                          src={require("../../assets/images/events-images/hero-figure1.png")}
                          alt="slider"
                          class="img-fluid"
                        />

                        <div class="animated-shape">
                          <img
                            src={require("../../assets/images/events-images/hero-animi.png")}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span
                class="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              ></span>
            </div>
          </div>
        </div>
        <div class="main-searchbar-area">
          <div class="container">
            <form
              class="searchbar-wrapper"
              action="https://demo.egenslab.com/html/eventlab/#"
            >
              <div class="row">
                <div class="col-lg-10">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="searchbar-input-group">
                        <input
                          type="text"
                          placeholder="Event Location....."
                          id="search-location"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="searchbar-input-group">
                        <DatePicker
                          selected={startDate}
                          // onSelect={handleDateSelect} //when day is clicked
                          onChange={(date) => setStartDate(date)} //only when value has changed
                        />
                        {/* <input
                          type="text"
                          id="datepicker"
                          placeholder="Date"
                          class="hasDatepicker"
                        />
                        <i class="bi bi-calendar2-week"></i> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-2">
                  <div class="search-submit">
                    <input type="submit" value="Search Now" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heroarea;
