import React from "react";
import styles from "./style.module.css";
function TabDescription({ discrption, image, title }) {
  return (
    <div className={styles.tabWrapper}>
      <p className={styles.txtDescription}>{discrption}</p>
      <div className={styles.imgPlacement}>
        <img src={image} alt={title}  className={styles.imgPlacement}/>
      </div>
      <p className={styles.txtDescription}>We are a leading custom web app development company that creates scalable web applications, web portals and solutions with high-quality standards. Thoroughly examining your preferences, requirements and expectations, our community of 100+ developers deliver top-notch web app development services to enhance your customer retention and boost brand equity.</p>
      <div className={styles.imgPlacement}>
        <img src={image} alt={title}  className={styles.imgPlacement}/>
      </div>
    </div>
  );
}

export default TabDescription;
