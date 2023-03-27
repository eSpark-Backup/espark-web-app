import React from "react";
import whyesaprk from "../../../assets/images/why-espark/why-esaprk.svg";
import { FaCheckCircle } from "react-icons/fa";
import styles from "./styles.module.css";
import Button from "../../button/button";
import { sociallinks } from "../../../helper/sociallinks";
import { whypoints } from "../../../helper/whypoints";
import SectionTitle from "../../sectionTitle";
function WhyeSpark({ heading }) {
  return (
    <div className={`${styles.whyEsparkMargin}`}>
      <div className="solutions-area">
        <div className="container-fluid">
          <div id={styles["whylinksmobile"]} className={`row`}>
            {sociallinks.map((items) => {
              return (
                <div
                  id={styles["whylinksbtn"]}
                  className={`col-4`}
                >
                  <Button
                    title={items.name}
                    link={items.url}
                    design={2}
                    className={styles.button}
                  />
                </div>
              );
            })}
          </div>
          <div className="row">
            <div
              id={styles["whylinks"]}
              className={`col-lg-1 col-md-12 col-sm-12 d-flex flex-column justify-content-around mt-5 pb-3`}
              style={{ marginLeft: -23 }}
            >
              {sociallinks.map((items) => {
                return (
                  <div className={`col-lg-12 ${styles.sociallink}`}>
                    <Button title={items.name} link={items.url} design={12} />
                  </div>
                );
              })}
            </div>
            <div
              className={`col-lg-5 col-md-6 col-sm-12 d-flex flex-column justify-content-space-between ${styles.whyeSparksColumn}`}
            >
              <SectionTitle
                height={"2px"}
                width={"126px"}
                heading={heading}
                padding={"0px"}
                paragraph={
                  <p className={`p-2  m-auto ${styles.whyEsparkContentColor}`}>
                    We focus on custom tailored software and IoT based solutions
                    for our businesses. Through our broad range of services that
                    can help clients and businesses to optimize their
                    operations, save cost and promote their businesses most
                    effectively. Whether you need help with software
                    development, hardware design, or technology consulting,
                    eSpark Consultancy Group has the expertise to help you
                    achieve your goals.
                  </p>
                }
              />
              <div className="mt-5 image">
                <img src={whyesaprk} alt="" width={"100%"} />
              </div>
            </div>

            <div
              id={styles["whypoints"]}
              className={`col-lg-6 col-md-6 col-sm-12`}
            >
              {whypoints.map((items, index) => {
                return (
                  <div
                    className={
                      index == 0
                        ? `${styles.points} d-flex`
                        : `${styles.points} d-flex ${styles.imgCustomMargin}`
                    }
                  >
                    <div
                      className={`${styles.icon} col-sm-1 col-md-1 col-lg-1`}
                    >
                      <FaCheckCircle size={42} color={"#11A79c"} />
                    </div>
                    <div className={`col-sm-11 col-md-11 col-lg-11`}>
                      <h4 className={styles.whyPoints}>{items.name}</h4>
                      <p
                        className={styles.whyPointsPara}
                        dangerouslySetInnerHTML={{ __html: items.content }}
                      ></p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyeSpark;
