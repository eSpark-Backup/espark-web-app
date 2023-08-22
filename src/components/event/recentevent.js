import React from "react";
import { recentEvent } from './../../helper/recentEventSchedule';

const Recentevent = () => {
  return (
    <>
      <div className="recent-schedule-area gray-300">
        <div className="container position-relative pt-110">
          <div className="row">
            <div className="col-lg-12">
              <div className="background-title text-style-one">
                <h2>SCHEDULE</h2>
              </div>
              <div className="section-head">
                <h5>Schedule</h5>
                <h3>Recent Event Schedule</h3>
              </div>
            </div>
          </div>
          <div className="row position-relative">
            <div className="col-lg-12 overflow-hidden">
              <div className="swiper-container schedule-slider position-relative swiper-initialized swiper-horizontal swiper-pointer-events">
                <div
                  className="swiper-wrapper myThreeD"
                  id="swiper-wrapper-de4130ab53042830"
                  aria-live="polite"
                 
                >
                  <div
                    className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-prev swiper-slide-duplicate-next recentclass"
                    data-swiper-slide-index="1"

                  >
                    <div className="schedule-wrapper">
                      <div className="event-date">
                        <h3>01 Oct 2021</h3>
                      </div>
                      {
                        recentEvent.map((items)=>{
                            return (
                                <div
                                    className="single-schedule-card row wow fadeInLeft animated myanimation"
                                    data-wow-delay="200ms"
                                    data-wow-duration="1500ms"
                                  
                                    >
                                    <div className="col-xl-4 col-lg-5 p-0">
                                    <div className="single-schedule-left">
                                        <div className="schedule-top">
                                        <h4>{items.time}</h4>
                                        <h5>
                                            Room No - <span>{items.Room}</span>
                                        </h5>
                                        </div>
                                        <div className="schedule-bottom">
                                        <div className="speaker-image">
                                            <img src={items.img} alt="" />
                                        </div>
                                        <div className="speaker-info">
                                            <h4>{items.name}</h4>
                                            <p>{items.field}</p>
                                            <ul className="speaker-social-links">
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
                                    </div>
                                    </div>
                                    <div className="col-xl-8 col-lg-7 p-0">
                                    <div className="single-schedule-right">
                                        <h3 className="schedule-title">
                                        <a href="https://demo.egenslab.com/html/eventlab/#">
                                           {items.title}
                                        </a>
                                        </h3>
                                        <p className="schedule-discription">{items.paragraph}</p>
                                        <div className="schedule-topics">
                                        <h5>Topic</h5>
                                        <div className="row">
                                            <div className="col-md-4">
                                            <ul>
                                                <li>
                                                <i className="bi bi-check"></i> Color
                                                </li>
                                                <li>
                                                <i className="bi bi-check"></i> Typhography
                                                </li>
                                            </ul>
                                            </div>
                                            <div className="col-md-4">
                                            <ul>
                                                <li>
                                                <i className="bi bi-check"></i> Allingment
                                                </li>
                                                <li>
                                                <i className="bi bi-check"></i> Development
                                                </li>
                                            </ul>
                                            </div>
                                            <div className="col-md-4">
                                            <ul>
                                                <li>
                                                <i className="bi bi-check"></i> Graphic Design
                                                </li>
                                                <li>
                                                <i className="bi bi-check"></i> Web Design
                                                </li>
                                            </ul>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                            )
                        })
                      }
                     
                      <div
                        className="single-schedule-card row wow fadeInLeft animated myanimation"
                        data-wow-delay="400ms"
                        data-wow-duration="1500ms"
                    
                      >
                        <div className="col-xl-4 col-lg-5 p-0">
                          <div className="single-schedule-left">
                            <div className="schedule-top">
                              <h4>
                               

                                01.00 AM - 01.30 PM
                                
                                </h4>
                              <h5>
                               
                                Room No - <span>05</span>

                               
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 p-0">
                          <div className="single-schedule-right has-break">
                            <h3 className="break-type">Lunch Time</h3>
                          </div>
                        </div>
                      </div>
                        
                     
                      <div className="ticket-progress-wrap">
                        <div className="ticket-progressbar"></div>
                        <h4>
                          Available Seat: <span>390-500</span>
                        </h4>
                        <div className="ticket-book-btn">
                          <a
                            href="https://demo.egenslab.com/html/eventlab/event-details.html"
                            className="primary-btn-fill"
                          >
                            Book Now
                          </a>
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
        </div>
      </div>
    </>
  );
};

export default Recentevent;
