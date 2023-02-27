import React from "react";
import { ourProcess } from "../../helper/processCricle";
import styles from "./style.module.css";

function ProcessCircle() {
  return (
    <div className="row d-flex justify-content-around">
      {ourProcess?.map((item) => (
        <div className={`col-6 col-md-2 ${styles.circleWrapper}`}>
          <div className={styles.flexItems}>
            <img
              src={require(`../../assets/images/our-process/${item.title}.png`)}
              alt={item.title}
            />
            <p>{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProcessCircle;
