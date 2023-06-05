import React from "react";
import fram from "../../assets/images/why-espark/fram.png";
import { benefit } from "../../helper/Talent";
import styles from './style.module.css';
import icons from '../../assets/images/why-espark/icons.svg';
import '../../assets/css/responsive.module.css';
// import { ReactSVG } from 'react-svg'

const Benefit = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <img src={fram} alt="" className={styles.benefitsImage} />
        </div>
        <div className="col-lg-6 col-md-12">
          <div>
            <p className={styles.benefitPara}>Enjoy the benefits of<br /> having everything in a <br />single platform</p>
            <ul className={`${styles.benefitsList} list-unstyled`}>
              {benefit.map((items) => {
                return (
                  <li className={`${styles.benefits} ${styles.responsiveBenefits} d-flex align-items-center mb-2`}>
                    <img src={icons} className={styles.ticks} alt="" /> 
                    <span className="ms-2">{items.contents}</span>
                  </li>
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


