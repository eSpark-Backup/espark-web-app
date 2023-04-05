import React from "react";
import styles from "./style.module.css";
function TabDescription({ discrption, image, title }) {
  return (
    <div className="pt-80">
      <div className={styles.tabWrapper}>
        <p className={styles.txtDescription}>{discrption}</p>
      </div>
      <div className={styles.imgPlacement}>
        <img src={image} alt={title} className={styles.imgPlacement} />
      </div>
    </div>
  );
}

export default TabDescription;
