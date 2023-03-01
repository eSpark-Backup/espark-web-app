import React from "react";
import styles from "./style.module.css";

function TabCard({ tabCard }) {
  return (
    <>
      <div className={`row  ${styles.cardWrapper} border my-5 p-3`}>
        <div className={`col-md-6  d-flex justify-content-center flex-column align-items-left`}>
          <div>
            <h3 className={`${styles.heading} mx-4`}>{tabCard.title}</h3>
          </div>
          <div>
            <p className="text-white my-4 mx-4">{tabCard.content}</p>
          </div>
        </div>
        <div className="col-md-6 ">
          <div className={styles.imgWrapper}>
            <img src={tabCard.image} alt={tabCard.title} />
          </div>
        </div>
      </div>
      
    </>
  );
}

export default TabCard;
