import React from "react";
import fram from "../../../assets/images/why-espark/fram.png";
import { benefit } from "../../../helper/Talent";
import styles from './style.module.css';
import icons from '../../../assets/images/why-espark/icons.svg';
import '../../../assets/css/responsive.css';
const Benefit = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <img src={fram} alt="" className={styles.benefitsImage} />
        </div>
        <div className="col-lg-6 col-md-12">
          <div className={styles.benefitUl}>
            <p className={`benefitPara ${styles.benefitPara}`}>Enjoy the benefits of<br /> having everything in a <br />single platform</p>
            <ul className={`${styles.benefitsList} list-unstyled`}>
              {benefit.map((items) => {
                return (

                 <>
                  <div className="col-sm-12 d-flex my-2">
                    <div className="col-sm-1 trueIcons"> <img src={icons} className={`${styles.ticks}`} alt="" /> </div>
                    <div className={`col-sm-11 benefits ${styles.benefits}`}>{items.contents}</div>
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


