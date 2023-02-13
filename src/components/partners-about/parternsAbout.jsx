import React from "react";
import { partner } from "../../helper/ImageUrl";
import Partners from "../partners/partners";
import style from "./style.module.css";
import "./style.css";
import { Carousel } from "react-responsive-carousel";
import { clients } from "../../helper/clients";
import Testimonial from "../testimonial/Testimonial";

export default function PartnerAbout() {
  return (
    <div className={style.partnerWrapper}>
      <div class="bigdata-feedback-area pt-80">
        <div class="container">
          <div class="section-title">
            <div className="p-20">
              <hr />
            </div>
            <h1>Client Testimonials</h1>
          </div>
          <div className="row" style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <div id="testimonial" className=" testmonials col-sm-12 col-md-12 col-lg-10" >
              {/* <Testimonial /> */}
              <Carousel
                autoPlay
                showIndicators={true}
                showArrows={true}
                showStatus={false}
                infiniteLoop={true}
              >
                {clients.map((item) => {
                  return (
                    <div className={`${style.testimonial} col-lg-12 col-md-12 `}>
                      <div className="col-lg-12 col-md-12 col-md-12">
                        <img className={`${style.testiImage} rounded-circle shadow-4-strong`} alt="upwork" src={item.image} />
                        <div className={style.subTestimonial}>
                          <h3 className={style.testiName}>{item.name}</h3>
                          <h4 className={style.testiDesignation}>{item.designation}</h4>
                          <p className={style.testiReviews}>{item.testimonial}</p>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/* <Partners h5="More that 1.5 million subscriber" data={partner} /> */}
    </div >
  );
}
