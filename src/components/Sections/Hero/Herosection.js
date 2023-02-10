import React from "react";
import heroImage from "../../../../src/assets/images/hero-section/hero-image.svg";

import { shapes } from "../../../helper/ImageUrl";
import { Link } from "react-router-dom";
import Button from "../../button/button";

import styles from "./style.module.css";
function Herosection({ heading, heading1 }) {
  return (
    <div class="ml-main-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="ml-banner-content">
              <h1 className={styles.heading}>{heading}</h1>

              <p className={styles.paraText}>
                eSpark Consulting Group is a software and embedded system design
                company that specializes in delivering innovative and
                high-quality solutions to our clients. Our team of experts has
                years of experience in the industry and a passion for technology
                that drives us to stay ahead of the curve and deliver
                cutting-edge solutions.
              </p>

              {heading1 === "Services" ? null : (
                <Button title="Learn More" link="/services" design={2} />
              )}
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <img src={heroImage} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
