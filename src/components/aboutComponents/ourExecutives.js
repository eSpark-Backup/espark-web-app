import React from "react";
import styles from "./style.module.css";
import exactive4 from "../../assets/images/About-us-image/Boss.png";
import exactive3 from "../../assets/images/About-us-image/CTO.png";

const OurExecutives = () => {
  return (
    <div>
      <div className={`container-fluid  my-2 ${styles.fullscreen} `}>
          <div class={`${styles.hexagone} my-4`}>
            <div class={styles.hexagoneBackground}>
              <div class="row ">
                <div
                  class={`col-12 col-sm-12 col-md-12 col-lg-4 ${styles.aboutImgDiv}`}
                >
                  <img src={exactive4} className={styles.exactiveImage} alt="exactiveImage" />
                </div>
                <div
                  class={` col-12 col-sm-12 col-md-12 col-lg-8 ${styles.aboutParaLeft}`}
                >
                  <p className={styles.exactiveHeading}>HUZAIFA ALI</p>
                  <p className={styles.exactiveSubHeading}>
                    Chief Executive Officer (CEO)
                  </p>
                  <p className={styles.exactivePra}>
                    From alone freelancer to a leader of a thriving team, my
                    journey as a Embedded Developer has been one of passion and
                    perseverance. I've had the privilege of working with startups
                    and big names in the industry, and now, I've taken the plunge
                    and founded eSpark Consulting Group <br /> <br />
                    Join me on this journey to turn your startup ideas into
                    reality. Let's push boundaries, take risks, and inspire the
                    world with our innovation
                  </p>
                </div>
              </div>
            </div>
          </div>
        <div class={`${styles.hexagoneRight} `}>
          <div class={styles.hexagoneBackground}>
            <div class="row ">
              <div
                className={`col-sm-12 col-md-12 col-lg-4 ${styles.aboutImgDivReverse}`}
              >
                <img src={exactive3} className={styles.exactiveImageRight} alt="exactiveImage" />
              </div>
              <div
                class={` col-sm-12 col-md-12 col-lg-8 ${styles.aboutParaRight}`}
              >
                <p className={styles.exactiveHeadingRight}>Faizan Ur Rahman</p>
                <p className={styles.exactiveSubHeading}>
                  Chief Technology Officer (CTO)
                </p>
                <p className={styles.exactivePraRight}>
                  Seven-year journey as a senior Hardware Developer Designer has
                  been one of passion and hard work. Starting out with the goal
                  to meet modern standards, I gained technical skills and
                  expertise in the field through every project I took on. I have
                  always had the drive to accomplish challenging tasks and use
                  my resources to it’s fullest form And despite working under
                  time constraint conditions and handling pressure efficiently,
                  I have never lost my ability to plan things in a
                  well-organized manner.
                </p>
              </div>
              <div
                className={`col-sm-12 col-md-12 col-lg-4 ${styles.aboutImgDivRight}`}
              >
                <img src={exactive3} className={styles.exactiveImageRight} alt="exactiveImage" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExecutives;
