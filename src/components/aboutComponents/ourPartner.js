import React from "react";
import styles from "./style.module.css";
import { partnerLogs } from "../../helper/aboutus";
const OurPartner = () => {
  return (
    <div className={`container-flued ${styles.newContainer}`}>
      <div className={styles.wd_partnerlogos_title}>
        <h5>LoremIpsum</h5>
      </div>
      <div className={styles.wd_partnerlogos_list}>
        <ul>
          {partnerLogs.map((items) => {
            return (
              <li>
                <img src={items.images} alt="ourPartner-images" className={styles.grey_icon} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.wd_partnerlogos_btn}>
        <a href="" id={styles.wd_videos_1} className={styles.Button_cta}>
          Reviwe
        </a>
      </div>
    </div>
  );
};

export default OurPartner;
