import React from "react";
import { eventsCard } from "../../helper/eventCard";

const Eventcard = () => {
  return (
    <>
      <div className="event-area gray-300">
        <div className="container position-relative pt-110">
          <div className="row">
            <div className="col-lg-12">
              <div className="background-title text-style-one">
                <h2>EVENT</h2>
              </div>
              <div className="section-head">
                <h5>Event</h5>
                <h3>Popular Event</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="event-category-buttons d-flex justify-content-center">
                <ul className="nav nav-pills mb-3" id="events-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-tab1"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-event1"
                      type="button"
                      role="tab"
                      aria-controls="pills-event1"
                      aria-selected="false"
                    >
                      Business <span>10</span>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-tab2"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-event2"
                      type="button"
                      role="tab"
                      aria-controls="pills-event2"
                      aria-selected="false"
                    >
                      Fire Wall <span>10</span>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-tab3"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-event3"
                      type="button"
                      role="tab"
                      aria-controls="pills-event3"
                      aria-selected="false"
                    >
                      Sport <span>10</span>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-tab4"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-event4"
                      type="button"
                      role="tab"
                      aria-controls="pills-event4"
                      aria-selected="false"
                    >
                      Web Development <span>10</span>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-tab5"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-event5"
                      type="button"
                      role="tab"
                      aria-controls="pills-event5"
                      aria-selected="false"
                    >
                      Marketing <span>10</span>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-tab6"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-event6"
                      type="button"
                      role="tab"
                      aria-controls="pills-event6"
                      aria-selected="true"
                    >
                      Technology<span>10</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="all-event-cards">
                <div className="tab-content" id="events-tabContent">
                  <div
                    // className="tab-pane fade"
                    id="pills-event1"
                    role="tabpanel"
                    aria-labelledby="pills-tab1"
                  >
                    <div className="row">
                      {eventsCard.map((items) => {
                        return (
                          <div
                            className="col-lg-4 col-md-6 wow fadeInUp mytransformfadeInUp"
                            data-wow-delay="200ms"
                            data-wow-duration="1500ms"
                          >
                            <div className="event-card-md">
                              <div className="event-thumb">
                                <img src={items.img} alt="" />
                                <div className="event-lavel">
                                  <i className="bi bi-diagram-3"></i>
                                  <span>{items.seats}</span>
                                </div>
                              </div>
                              <div className="event-content">
                                <div className="event-info">
                                  <div className="event-date">
                                    <a href="">
                                      <i className="bi bi-calendar2-week"></i>{" "}
                                      {items.date}
                                    </a>
                                  </div>
                                  <div className="event-location">
                                    <a href="">
                                      <i className="bi bi-geo-alt"></i>{" "}
                                      {items.country}
                                    </a>
                                  </div>
                                </div>
                                <h5 className="event-title">
                                  <a href="">
                                    Media companies need to better one then
                                    educate advertisers.
                                  </a>
                                </h5>
                                <div className="event-bottom">
                                  <div className="event-readme">
                                    <a href="">{items.booking}</a>
                                  </div>
                                  <div className="event-share-icons">
                                    <ul className="share-options">
                                      <li>
                                        <a href="">
                                          <i className="fab fa-facebook-f"></i>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="">
                                          <i className="fab fa-instagram"></i>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="">
                                          <i className="fab fa-linkedin-in"></i>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="">
                                          <i className="fab fa-twitter"></i>
                                        </a>
                                      </li>
                                    </ul>
                                    <div className="share-btn">
                                      <i className="bi bi-share"></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eventcard;
