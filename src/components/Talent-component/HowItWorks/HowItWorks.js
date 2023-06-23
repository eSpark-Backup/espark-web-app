import React from "react";
import SectionTitle from "../../sectionTitle";
import styles from "./style.module.css";
import lineSeparator from "../../../assets/images/how-it-works/lineSep.svg";
import lineSeparatorMobile from "../../../assets/images/how-it-works/lineSepMobile.svg";
import { howitworkspoints } from "../../../helper/howitworks";

const HowItWorks = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container-fluid">
        <div className={styles.desktop}>
          <SectionTitle
            // height={"2px"}
            // width={"126px"}
            heading={"How It Works?"}
            padding={"40px"}
          />
          <div className="mt-5">
            <img
              className={styles.separatorLine}
              src={lineSeparator}
              alt="lineSeparator"
            />
          </div>
          <div className="mt-5">
            <img
              className={styles.separatorLineMobile}
              src={lineSeparatorMobile}
              alt="lineSeparator"
            />
          </div>
          {howitworkspoints.map((item) => (
            <div className={styles.mainContainer}>
              <div
                className={
                  item.type == "odd"
                    ? styles.leftPointImageContainer
                    : styles.rightPointImageContainer
                }
              >
                <div
                  className={
                    item.type == "odd" ? styles.leftPoint : styles.rightPoint
                  }
                >
                  <div className={styles.point}>{item._id}</div>
                </div>
              </div>
              <div
                className={
                  item.type == "odd"
                    ? styles.leftSideContainer
                    : styles.rightSideContainer
                }
              >
                {item.type == "even" ? (
                  <div
                    className={
                      item.type == "odd"
                        ? styles.leftSideLogoContainer
                        : styles.rightSideLogoContainer
                    }
                  >
                    <div>
                      <img
                        className={styles.Logo}
                        src={item.image}
                        alt={item.image_alt}
                      />
                    </div>
                  </div>
                ) : null}
                <div
                  className={
                    item.type == "odd"
                      ? styles.leftSideContentContainer
                      : styles.rightSideContentContainer
                  }
                >
                  <h4
                    className={
                      item.type == "odd"
                        ? styles.leftContentHeading
                        : styles.rightContentHeading
                    }
                  >
                    {item.name}
                  </h4>
                  <p
                    className={
                      item.type == "odd"
                        ? styles.leftContentPara
                        : styles.rightContentPara
                    }
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  ></p>
                </div>
                {item.type == "odd" ? (
                  <div
                    className={
                      item.type == "odd"
                        ? styles.leftSideLogoContainer
                        : styles.rightSideLogoContainer
                    }
                  >
                    <div>
                      <img
                        className={styles.Logo}
                        src={item.image}
                        alt={item.image_alt}
                      />
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
