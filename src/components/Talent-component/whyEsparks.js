import React from "react";
import styles from "./style.module.css";
import { hiringWhyEspark } from "../../helper/whyEsparkTalent";
import CountUp, { useCountUp } from "react-countup";
import Slider from "react-slick";

const WhyeSparks = () => {
  useCountUp({
    ref: "counter",
    start: 10,
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

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
            <div>
              <div className={` ${styles.box} hiringContainerBox`}>
                <div className="pb-3">
                  <img src={items.icon} className={styles.boxImage} alt="" />
                </div>
                <div>
                  <CountUp
                    start={items.starts}
                    end={items.ends}
                    enableScrollSpy
                    className={styles.boxText}
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
