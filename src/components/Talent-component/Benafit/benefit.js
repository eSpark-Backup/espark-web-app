import React from "react";
import fram from "../../../assets/images/why-espark/fram.png";
import { benefit } from "../../../helper/Talent";
import styles from "./style.module.css";
import icons from "../../../assets/images/why-espark/icons.svg";
import "../../../assets/css/responsive.css";
import SectionTitle from "../../sectionTitle";
const Benefit = () => {
  return (
    <div className="container-fluid benefitContainer">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="benefitsImageDiv">
            <img
              src={fram}
              alt=""
              className={`benefitsImage ${styles.benefitsImage}`}
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className={styles.benefitUl}>
          <SectionTitle
            height={"0px"}
            heading={" Enjoy the benefits of having everything in a single platform"}
            padding={"40px"}
            sectionHeading={"text-start"}
            lh={true}
          />
            <ul className={`${styles.benefitsList} list-unstyled`}>
              {benefit.map((items) => {
                return (
                  <>
                    <div className={`d-flex my-2 ${styles.mainWraparr}`}>
                      <div className={` ${styles.icondiv}`}>
                        {" "}
                        <img src={icons} alt="" />{" "}
                      </div>
                      <div className={` benefits ${styles.benefits}`}>
                        {items.contents}
                      </div>
                    </div>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
