import React from "react";
import styles from "./style.module.css";
import { hiringWhyEspark } from "../../helper/whyEsparkTalent";
import CountUp from "react-countup";
import Slider from "react-slick";

const WhyeSparks = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 700,
        settings: {
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          draggable: true,
          swipe: true,
        },
      },
    ],
  };

  return (
    <div>
      <div
        className={`container-fluid ${styles.hiringContainer} hiringContainer`}
      >
        {hiringWhyEspark.map((items) => {
          return (
            <div key={items.id}>
              <div className={` ${styles.box} hiringContainerBox`}>
                <div className="pb-3">
                  <img src={items.icon} className={styles.boxImage} alt="" />
                </div>
                <div>
                  <CountUp
                    start={items.starts}
                    end={items.ends}
                    target={items.ends}
                    enableScrollSpy={true}
                    useEasing
                    className={styles.boxText}
                    suffix={items.text === "Customer Satisfaction" ? "%" : "+"}
                  />
                </div>
              </div>
              <p className={styles.heading}>{items.text}</p>
            </div>
          );
        })}
      </div>

      <div className={`${styles.hiringContainerMobile} hiringContainerMobile`}>
        <Slider {...settings} fade={true}>
          {hiringWhyEspark.map((items) => {
            return (
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div className={`${styles.boxMobile}`}>
                    <div className="pb-3">
                      <img
                        src={items.icon}
                        className={styles.boxImageMobile}
                        alt=""
                      />
                    </div>
                    <div>
                      <CountUp
                        start={items.starts}
                        end={items.ends}
                        enableScrollSpy
                        className={styles.boxTextMobile}
                      />
                    </div>
                  </div>
                  <p className={styles.heading}>{items.text}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default WhyeSparks;
