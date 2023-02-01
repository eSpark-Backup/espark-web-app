import React from "react";
import { recentEvent } from './../../helper/recentEventSchedule';

const Recentevent = () => {
  return (
    <>
      <div class="recent-schedule-area gray-300">
        <div class="container position-relative pt-110">
          <div class="row">
            <div class="col-lg-12">
              <div class="background-title text-style-one">
                <h2>SCHEDULE</h2>
              </div>
              <div class="section-head">
                <h5>Schedule</h5>
                <h3>Recent Event Schedule</h3>
              </div>
            </div>
          </div>
          <div class="row position-relative">
            <div class="col-lg-12 overflow-hidden">
              <div class="swiper-container schedule-slider position-relative swiper-initialized swiper-horizontal swiper-pointer-events">
                <div
                  class="swiper-wrapper myThreeD"
                  id="swiper-wrapper-de4130ab53042830"
                  aria-live="polite"
                 
                >
                  <div
                    class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-prev swiper-slide-duplicate-next recentclass"
                    data-swiper-slide-index="1"

                  >
                    <div class="schedule-wrapper">
                      <div class="event-date">
                        <h3>01 Oct 2021</h3>
                      </div>
                      {
                        recentEvent.map((items)=>{
                            return (
                                <div
                                    class="single-schedule-card row wow fadeInLeft animated myanimation"
                                    data-wow-delay="200ms"
                                    data-wow-duration="1500ms"
                                  
                                    >
                                    <div class="col-xl-4 col-lg-5 p-0">
                                    <div class="single-schedule-left">
                                        <div class="schedule-top">
                                        <h4>{items.time}</h4>
                                        <h5>
                                            Room No - <span>{items.Room}</span>
                                        </h5>
                                        </div>
                                        <div class="schedule-bottom">
                                        <div class="speaker-image">
                                            <img src={items.img} alt="" />
                                        </div>
                                        <div class="speaker-info">
                                            <h4>{items.name}</h4>
                                            <p>{items.field}</p>
                                            <ul class="speaker-social-links">
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
                                    </div>
                                    </div>
                                    <div class="col-xl-8 col-lg-7 p-0">
                                    <div class="single-schedule-right">
                                        <h3 class="schedule-title">
                                        <a href="https://demo.egenslab.com/html/eventlab/#">
                                           {items.title}
                                        </a>
                                        </h3>
                                        <p class="schedule-discription">{items.paragraph}</p>
                                        <div class="schedule-topics">
                                        <h5>Topic</h5>
                                        <div class="row">
                                            <div class="col-md-4">
                                            <ul>
                                                <li>
                                                <i class="bi bi-check"></i> Color
                                                </li>
                                                <li>
                                                <i class="bi bi-check"></i> Typhography
                                                </li>
                                            </ul>
                                            </div>
                                            <div class="col-md-4">
                                            <ul>
                                                <li>
                                                <i class="bi bi-check"></i> Allingment
                                                </li>
                                                <li>
                                                <i class="bi bi-check"></i> Development
                                                </li>
                                            </ul>
                                            </div>
                                            <div class="col-md-4">
                                            <ul>
                                                <li>
                                                <i class="bi bi-check"></i> Graphic Design
                                                </li>
                                                <li>
                                                <i class="bi bi-check"></i> Web Design
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
                        class="single-schedule-card row wow fadeInLeft animated myanimation"
                        data-wow-delay="400ms"
                        data-wow-duration="1500ms"
                    
                      >
                        <div class="col-xl-4 col-lg-5 p-0">
                          <div class="single-schedule-left">
                            <div class="schedule-top">
                              <h4>
                               

                                01.00 AM - 01.30 PM
                                
                                </h4>
                              <h5>
                               
                                Room No - <span>05</span>

                               
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-8 col-lg-7 p-0">
                          <div class="single-schedule-right has-break">
                            <h3 class="break-type">Lunch Time</h3>
                          </div>
                        </div>
                      </div>
                        
                     
                      <div class="ticket-progress-wrap">
                        <div class="ticket-progressbar"></div>
                        <h4>
                          Available Seat: <span>390-500</span>
                        </h4>
                        <div class="ticket-book-btn">
                          <a
                            href="https://demo.egenslab.com/html/eventlab/event-details.html"
                            class="primary-btn-fill"
                          >
                            Book Now
                          </a>
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
        </div>
      </div>
    </>
  );
};

export default Recentevent;
