import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaSearchLocation } from "react-icons/fa";
import { sideBarlist } from "../../helper/eventCard";

const Heroarea = () => {
    const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <div className="main-slider-wrapper gray-300">
        <div className="hero-area">
          <div className="hero-shape">
            <img src="./hero-shape.png" alt="" />
            <img
              src={require("../../assets/images/events-images/hero-shape.png")}
              alt=""
            />
          </div>
          <div className="hero-sidebar-area d-lg-block d-none">
            <div className="sidebar-list">
              {
                sideBarlist.map((items) =>{
                  return (
                    <div className="sb-single-speaker">
                      <div className="single-speaker-thumb">
                        <img
                          src={items.img}
                          alt=""
                        />
                      </div>
                      <div className="sb-speaker-content">
                        <div className="sb-speaker-info">
                          <h6>
                            <a href="https://demo.egenslab.com/html/eventlab/speaker-details.html">
                              {items.name}
                            </a>
                          </h6>
                          <span>{items.designation}</span>
                        </div>
                        <ul className="sb-speaker-social-cion">
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
                        </ul>
                      </div>
                    </div>
                  )
                })
              }
              <h5>Meet Our Best Spekar:</h5>
            </div>
          </div>
          <div className="container">
            <div className="swiper-container hero-slider overflow-hidden swiper-initialized swiper-horizontal swiper-pointer-events">
              <div
                className="swiper-wrapper"
                id="swiper-wrapper-5be6b74bde6610c7b"
                aria-live="off"
              >
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-active myclass"
                  data-swiper-slide-index="1"
                  
                >
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="slide-content">
                        <h5>
                          <FaCalendarAlt /> January 21, 2021
                        </h5>
                        <h2>
                          EVENTS, MEETUPS &amp; <span>CONFERENCES</span>
                        </h2>
                        <ul className="featured-event">
                          <li>
                            <i className="bi bi-diagram-3"></i> <span>500</span>{" "}
                            Seat
                          </li>
                          <li>
                            <span>10</span> Speaker
                          </li>
                          <li>
                            <FaSearchLocation /> 1356 Broadway, New York
                          </li>
                        </ul>
                        <div className="slider-btns">
                          <a
                            href="https://demo.egenslab.com/html/eventlab/event-details.html"
                            className="primary-btn-fill"
                          >
                            Book Now
                          </a>
                          <a
                            href="https://demo.egenslab.com/html/eventlab/event-details.html"
                            className="primary-btn-outline"
                          >
                            View Details
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 text-center">
                      <div className="slide-figure position-relative d-lg-flex justify-content-center">
                        <img
                          src={require("../../assets/images/events-images/hero-figure1.png")}
                          alt="slider"
                          className="img-fluid"
                        />

                        <div className="animated-shape">
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
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              ></span>
            </div>
          </div>
        </div>
        <div className="main-searchbar-area">
          <div className="container">
            <form
              className="searchbar-wrapper"
              action="https://demo.egenslab.com/html/eventlab/#"
            >
              <div className="row">
                <div className="col-lg-10">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="searchbar-input-group">
                        <input
                          type="text"
                          placeholder="Event Location....."
                          id="search-location"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="searchbar-input-group">
                        <DatePicker
                          selected={startDate}
                          // onSelect={handleDateSelect} //when day is clicked
                          onChange={(date) => setStartDate(date)} //only when value has changed
                        />
                       
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="search-submit">
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
