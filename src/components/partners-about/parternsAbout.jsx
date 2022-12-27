import React from "react";
import { partner } from "../../helper/ImageUrl";
import Partners from "../partners/partners";
import style from "./style.module.css";
import { Carousel } from "react-responsive-carousel";
import { clients } from "../../helper/clients";

export default function PartnerAbout() {
  return (
    <div className={style.partnerWrapper}>
      <div class="bigdata-feedback-area pt-80 pb-50">
        <div class="container">
          <div class="section-title">
            <h2>HAPPY CLIENTS</h2>
            <div class="bar"></div>
            <p>
              The following comments are just a sample of the clients worldwide
              who transformed their business website with eSpark
            </p>
          </div>
          <div style={{ display:"flex" ,flexDirection:"row", justifyContent:"center" }}>
            <div class="row" style={{ width: "70%" }}>
              <Carousel
                // thumbWidth={20}
                // centerMode
                autoPlay
                showIndicators={false}
                showArrows={false}
                showStatus={false}
                infiniteLoop={true}
              >
                {clients.map((item) => {
                  return (
                    <div class="col-lg-12 col-sm-6 col-md-6">
                      <div class="single-feedback-box">
                        <div class="feedback-desc">
                          <p>{item.commet}</p>
                        </div>
                        <div class="client-info">
                          <img src={item.image} alt="image" />
                          <h3>{item.name}</h3>
                          <span>{item.designation}</span>
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
    </div>
  );
}
