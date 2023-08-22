import React from "react";
import styles from "./style.module.css";
import { OurJourneyData } from "../../helper/aboutus";
import leftRightArrows from "../../assets/images/About-us-image/leftRight.png";

const OurJourney = () => {
  return (
    <div className={styles.journyWrapper}>
      <div className={`container-fluid ${styles.OurJourneyMain}`}>
        <div className={styles.sapratorLine}></div>
        <div className={styles.desktop}>
          {OurJourneyData.map((items) => {
            return (
              <>
                <div
                  className={`row d-flex align-items-center  ptb-80 ${styles.journeyContainer} `}
                >
                  <div
                    className={`col-5 col-md-5 col-lg-5 d-flex justify-content-end `}
                  >
                    <div className={styles.descriptionBox}>
                      <h1 className={styles.titleLeft}>{items.titleLeft.toUpperCase()}</h1>
                      <p className={styles.descriptionLeft}>
                        {items.descriptionLeft}
                      </p>
                    </div>
                  </div>
                  <div className={`col-2 col-md-2 col-lg-2 d-flex justify-content-center ${styles.midle}  `}>
                    <img
                      src={leftRightArrows}
                      className={styles.arrowImage}
                      alt="ArrowImage"
                    />
                  </div>
                  <div className={`col-5 col-md-5 col-lg-5 ${styles.last} `}>
                    <div className={styles.hexagon}>
                      <span className={styles.hexgonText2}>
                        {items.hexagonLeft}
                      </span>
                      <div className={styles.face1}></div>
                      <div className={styles.face2}></div>
                    </div>
                  </div>
                </div>
                <div
                  className={`row d-flex align-items-center ptb-80 ${styles.journeyContainer}`}
                >
                  <div
                    className={`col-5 col-md-5 d-flex justify-content-end ${styles.secondDivHexagon}`}
                  >
                    <div className={styles.hexagon}>
                      <span className={styles.hexgonText2}>
                        {items.hexagonRight}
                      </span>
                      <div className={styles.face1}></div>
                      <div className={styles.face2}></div>
                    </div>
                  </div>
                  <div className="col-2 col-md-2 d-flex justify-content-center">
                    <img
                      src={leftRightArrows}
                      className={styles.secondDivarrowImage}
                      alt="ArrowImage"
                    />
                  </div>
                  <div className={`col-5 col-md-5 d-flex justify-content-start`}>
                    <div className={styles.descriptionBox}>
                      <h1 className={styles.titleRight}>{items.titleRight.toUpperCase()}</h1>
                      <p className={styles.descriptionRight}>
                        {items.descriptionRight}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className={styles.mobile}>
          {/* <div className={styles.sapratorLineMobile}></div> */}
          {OurJourneyData.map((items) => {
            return (
              <>
                <div
                  className={`row d-flex align-items-center ptb-80 ${styles.journeyContainer} `}
                >
                  <div className={`col-12 d-flex justify-content-center `}>
                    <div className={styles.hexagon}>
                      <span className={styles.hexgonText2}>
                        {items.hexagonLeft}
                      </span>
                      <div className={styles.face1}></div>
                      <div className={styles.face2}></div>
                    </div>
                  </div>
                  <div className={`col-12 d-flex justify-content-center `}>
                    <div className={styles.descriptionBox}>
                      <h1 className={styles.titleLeft}>{items.titleLeft}</h1>
                      <p className={styles.descriptionLeft}>
                        {items.descriptionLeft}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`row d-flex align-items-center ptb-80 ${styles.journeyContainer} `}
                >
                  <div className={`col-12 d-flex justify-content-center `}>
                    <div className={styles.hexagon}>
                      <span className={styles.hexgonText2}>
                        {items.hexagonRight}
                      </span>
                      <div className={styles.face1}></div>
                      <div className={styles.face2}></div>
                    </div>
                  </div>
                  <div className={`col-12 d-flex justify-content-center `}>
                    <div className={styles.descriptionBox}>
                      <h1 className={styles.titleLeft}>{items.titleRight}</h1>
                      <p className={styles.descriptionLeft}>
                        {items.descriptionRight}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default OurJourney;
