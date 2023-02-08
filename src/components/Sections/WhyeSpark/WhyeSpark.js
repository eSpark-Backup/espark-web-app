import React from "react";
import { Link } from "react-router-dom";
import whyesaprk from "../../../assets/images/why-espark/why-esaprk.svg";
import { FaCheckCircle } from "react-icons/fa";
import styles from "./styles.module.css";
import Button from "../../button/button";

function WhyeSpark({ heading }) {
  return (
    <div>
      <div className="solutions-area pt-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-2">
              <div
                // className={styles.sociallinks}
                className={`${styles.sociallinks} row d-flex flex-row `}>
                <Button title="Facebook" link="https://www.facebook.com/eSparkConsGroup/" design={2} />
                <Button title="Linkedin" link="https://www.linkedin.com/company/esparkconsgroup/" design={2} />
                <Button title="Instagram" link="https://www.instagram.com/esparkconsultantsgroup/" design={2} />
              </div>
            </div>
            <div className="col-lg-5 justify-content-center">
              <hr width={100} height={10} />
              <h2 className={styles.heading} >{heading}</h2>
              <p className={styles.whyPara}>
                We focus on custom tailored software and IoT based solutions for our businesses. Through our broad range of services that can help clients and businesses to optimize their operations, save cost and promote their businesses most effectively. Whether you need help with software development, hardware design, or technology consulting, eSpark Consultancy Group has the expertise to help you achieve your goals.
              </p>
              <img src={whyesaprk} alt="" />
            </div>
            <div className="col-lg-5">
              <div className={`${styles.points} row `}>
                <div className="col-lg-2">
                  <FaCheckCircle className={styles.arrowSize} />
                </div>
                <div className="col-lg-10">
                  <h4 className={styles.whyPoints} >eSaprk Experties</h4>
                  <p className={styles.whyPointsPara} >
                    eSpark Consulting Group has a team of experts who have extensive knowledge and experience in delivering solutions for a wide range of industries. Their deep understanding technologies and methodologies allows them to provide high standard solutions that meet the unique needs of each client.
                  </p>
                </div>
              </div>
              <div className={`${styles.points} row `}>
                <div className="col-lg-2">
                  <FaCheckCircle className={styles.arrowSize} />
                </div>
                <div className="col-lg-10">
                  <h4 className={styles.whyPoints} >Custom Solutions</h4>
                  <p className={styles.whyPointsPara} >
                    eSpark takes a customized approach to delivering Software and hardware solutions, working closely with each client to understand their specific requirements and delivering solutions that are tailored to their needs.
                  </p>
                </div>
              </div>
              <div className={`${styles.points} row `}>
                <div className="col-lg-2">
                  <FaCheckCircle className={styles.arrowSize} />
                </div>
                <div className="col-lg-10">
                  <h4 className={styles.whyPoints} >Strong Project Management</h4>
                  <p className={styles.whyPointsPara} >
                    eSpark has a proven track record of delivering projects on time and within budget, making it a reliable and trusted partner for IoT solutions and software development services.
                  </p>
                </div>
              </div>
              <div className={`${styles.points} row `}>
                <div className="col-lg-2">
                  <FaCheckCircle className={styles.arrowSize} />
                </div>
                <div className="col-lg-10">
                  <h4 className={styles.whyPoints} >Quality focused</h4>
                  <p className={styles.whyPointsPara} >
                    eSpark is dedicated to delivering high-quality solutions and services, using the latest technologies and methodologies to ensure that each project is delivered to the highest standards.
                  </p>
                </div>
              </div>
              <div className={`${styles.points} row `}>
                <div className="col-lg-2">
                  <FaCheckCircle className={styles.arrowSize} />
                </div>
                <div className="col-lg-10">
                  <h4 className={styles.whyPoints} >Broad range of services</h4>
                  <p className={styles.whyPointsPara} >
                    eSpark offers a comprehensive range of services that can help companies optimize their operations and enhance their bottom line, including IoT solution, Embedded design, software development, UI/UX design and App Development.
                  </p>
                </div>
              </div>
              <div className={`${styles.points} row `}>
                <div className="col-lg-2">
                  <FaCheckCircle className={styles.arrowSize} />
                </div>
                <div className="col-lg-10">
                  <h4 className={styles.whyPoints} >Excellent Customer Services</h4>
                  <p className={styles.whyPointsPara} >
                    eSpark is known for its exceptional customer service, providing ongoing support and communication throughout each project to ensure that clients are satisfied with the results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default WhyeSpark;
