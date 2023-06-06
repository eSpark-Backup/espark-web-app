import React from "react";
import HrPlformPic from "../../../assets/images/talent-image/HrPlateform.png";
import '../../../assets/css/responsive.css';
import styles from "./style.module.css";

const Hrplatform = () => {
  return (
    <div className="container-fluid">
      <div className={`row `}>
        <div className={`col-lg-6 col-md-12 my-2 ${styles.hrContainer}`}>
            <p className={`hrPlatformTitle ${styles.hrPlatformTitle}`}>
              eSpark The only HR platform with everything you need, for everyone
            </p>
            <p className={`hrPlateformPara ${styles.hrPlateformPara}`}>
              We're making global team management so easy, business don't need to think twice. Whether you want to hire contractors and employees worldwide without opening legal entities, streamline HR for your global  team, or consolidate payroll for everyone
            </p>
        </div>
        <div className="col-lg-6 col-md-12">
          <img src={HrPlformPic} alt="" className={styles.hrPlateformImage} />
        </div>
      </div>
    </div>
  );
};

export default Hrplatform;
