import React from "react";
import styles from "./style.module.css";

function TabCard({ tabCard }) {
  return (
    <>
      <div className={`row ${styles.cardWrapper}`}>
        <div className={`col-md-8  d-flex justify-content-center flex-column`}>
          <div>
            <h3 className={`${styles.heading} mx-4`}>{tabCard.title}</h3>
          </div>
          <div>
            <p className={`text-white my-4 mx-4 ${styles.content}`}>
              {tabCard.content}
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className={`${styles.imgWrapper}`}>
            <img
              className={styles.tabCardImg}
              src={tabCard.image}
              alt={tabCard.title}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TabCard;
