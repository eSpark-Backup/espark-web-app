import React from 'react'
import styles from "./style.module.css";
import { aboutData } from '../../helper/aboutus';

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
                    <div
                      className={`col-4 col-sm-4 col-lg-2 ${styles.aboutCol}`}
                    >
                      <div class={styles.ourGoalStatHexagon}>
                        <span className={styles.hexgonText}>{items.icon}</span>
                        <div class={styles.face1}></div>
                        <div class={styles.face2}></div>
                      </div>
                    </div>
                    <div
                      className={`col-8 col-sm-8 col-lg-4 ${styles.aboutCol}`}
                    >
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
              quis eu volutpat luctus eget convallis. maximus In at eget non.
              scelerisque dolor facilisis consectetur sollicitudin. sit tempor
              non, vehicula, elit urna eget <br />
              <br /> vitae massa eu tincidunt ultrices enim. sodales. nisi sit
              quis eu In dolor tincidunt dolor non ipsum luctus vitae eget vitae
              vitae quis orci elementum odio Ut <br />
              <br />
              efficitur. commodo tincidunt nisl. lobortis, maximus ex diam risus
              adipiscing consectetur turpis turpis tincidunt nisi leo. at,
              felis, leo. libero, ultrices
            </p>
          </div>
        </div>
      </div>
  )
}

export default OurGoalStatement;