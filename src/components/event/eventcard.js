import React from "react";
import { eventsCard } from "../../helper/eventCard";

const Eventcard = () => {
  return (
    <>
      <div className="event-area gray-300">
        <div className="container position-relative pt-110">
          <div class="row">
            <div class="col-lg-12">
              <div class="background-title text-style-one">
                <h2>EVENT</h2>
              </div>
              <div class="section-head">
                <h5>Event</h5>
                <h3>Popular Event</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div class="col-lg-12">
              <div class="event-category-buttons d-flex justify-content-center">
                <ul class="nav nav-pills mb-3" id="events-tab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
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
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
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
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
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
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
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
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
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
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
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

            <div class="col-lg-12">
              <div class="all-event-cards">
                <div class="tab-content" id="events-tabContent">
                  <div
                    // class="tab-pane fade"
                    id="pills-event1"
                    role="tabpanel"
                    aria-labelledby="pills-tab1"
                  >
                    <div class="row">
                      {eventsCard.map((items) => {
                        console.log(items, "items");
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
                            <div class="event-card-md">
                              <div class="event-thumb">
                                <img src={items.img} alt="" />
                                <div class="event-lavel">
                                  <i class="bi bi-diagram-3"></i>
                                  <span>{items.seats}</span>
                                </div>
                              </div>
                              <div class="event-content">
                                <div class="event-info">
                                  <div class="event-date">
                                    <a>
                                      <i class="bi bi-calendar2-week"></i>{" "}
                                      {items.date}
                                    </a>
                                  </div>
                                  <div class="event-location">
                                    <a>
                                      <i class="bi bi-geo-alt"></i>{" "}
                                      {items.country}
                                    </a>
                                  </div>
                                </div>
                                <h5 class="event-title">
                                  <a>
                                    Media companies need to better one then
                                    educate advertisers.
                                  </a>
                                </h5>
                                <div class="event-bottom">
                                  <div class="event-readme">
                                    <a>{items.booking}</a>
                                  </div>
                                  <div class="event-share-icons">
                                    <ul class="share-options">
                                      <li>
                                        <a>
                                          <i class="fab fa-facebook-f"></i>
                                        </a>
                                      </li>
                                      <li>
                                        <a>
                                          <i class="fab fa-instagram"></i>
                                        </a>
                                      </li>
                                      <li>
                                        <a>
                                          <i class="fab fa-linkedin-in"></i>
                                        </a>
                                      </li>
                                      <li>
                                        <a>
                                          <i class="fab fa-twitter"></i>
                                        </a>
                                      </li>
                                    </ul>
                                    <div class="share-btn">
                                      <i class="bi bi-share"></i>
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
