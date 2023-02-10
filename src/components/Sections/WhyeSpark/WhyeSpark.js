import React from "react";
import { Link } from "react-router-dom";
import whyesaprk from "../../../assets/images/why-espark/why-esaprk.svg";
import { FaCheckCircle } from "react-icons/fa";
import styles from "./styles.module.css";
import Button from "../../button/button";
import { sociallinks } from "../../../helper/sociallinks"
import { whypoints } from "../../../helper/whypoints"
function WhyeSpark({ heading }) {
  return (
    <div>
      <div className="solutions-area pt-80">
        <div className="container">
          <div id={styles["whylinksmobile"]} className="col-lg-12 col-md-12 d-flex justify-content-around text-center" >
            {sociallinks.map((items) => {
              return (
                <div className={` col-lg-4`} >
                  <Button title={items.name} link={items.url} design={2} />
                </div>)
            })}
          </div>
          <div className="row ">
            <div id={styles["whylinks"]} className="col-lg-2 col-md-12 d-flex flex-column justify-content-around text-center" >
              {sociallinks.map((items) => {
                return (
                  <div className={` col-lg-12 ${styles.sociallink}`} >
                    <Button title={items.name} link={items.url} design={2} />
                  </div>)
              })}
            </div>
            <div className="col-lg-4 col-md-12  justify-content-center">
              <div className="p-20">
                <hr />
              </div>
              <h2 className={styles.heading} >{heading}</h2>
              <p className={styles.whyPara}>
                We focus on custom tailored software and IoT based solutions for our businesses. Through our broad range of services that can help clients and businesses to optimize their operations, save cost and promote their businesses most effectively. Whether you need help with software development, hardware design, or technology consulting, eSpark Consultancy Group has the expertise to help you achieve your goals.
              </p>
              <img src={whyesaprk} alt="" />
            </div>
            <div id={styles["whypoints"]} className="col-lg-6 col-md-12  ">
              {whypoints.map((items) => {
                return (
                  <div className={`${styles.points} row `}>
                    <div className="col-lg-2 col-md-2 col-sm-2">
                      <FaCheckCircle className={styles.arrowSize} />
                    </div>
                    <div className="col-lg-10 col-md-10 col-sm-10">
                      <h4 className={styles.whyPoints} >{items.name}</h4>
                      <p className={styles.whyPointsPara} >{items.content}
                      </p>
                    </div>
                  </div>)
              })}
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default WhyeSpark;
