import React from "react";
import styles from "./style.module.css";
import { aboutData } from "../../helper/aboutus";

const OurGoalStatement = () => {
  return (
    <div className={`container-fluid ${styles.containerWraper}`}>
      <div className={`row ${styles.rowCls}`}>
        <div className={`${styles.ourValueContainer} col-lg-8`}>
          <p className={styles.our}>our </p>
          <p className={styles.value}>Value</p>
          <div className={`row  ${styles.aboutRows}`}>
            {aboutData.map((items) => {
              return (
                <>
                  <div className={`col-4 col-sm-4 col-lg-2 ${styles.aboutCol}`}>
                    <div class={styles.ourGoalStatHexagon}>
                      <img src={items.icon} />
                      <div class={styles.face1}></div>
                      <div class={styles.face2}></div>
                    </div>
                  </div>
                  <div className={`col-8 col-sm-8 col-lg-4 ${styles.aboutCol}`}>
                    <div class={styles.hexago}>
                      <div class={styles.HexaTitle}>{items.title}</div>
                      <div class={styles.HexaContenta}>
                        <p className={styles.HexaContent}>
                          {items.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className={`col-lg-4  ${styles.ourVisionContainer}`}>
          <p className={styles.ours}>our </p>
          <p className={styles.Vision}>Vision</p>
          <p className={styles.aboutParagraph}>
            To be the driving force behind transformative software solutions,
            empowering businesses to thrive in a digital world. <br />
            <p className={styles.ourss}>Our</p>
            <p className={styles.Mission}>Mission</p>
            Our mission is to deliver innovative and tailored software solutions
            that empower our clients to achieve their goals. Through
            collaborative partnerships, cutting-edge technology, and a
            passionate team, eSpark strives to make a lasting impact by
            unlocking the true potential of software development. Together, we
            will shape the future of technology and drive the success of
            businesses worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurGoalStatement;
