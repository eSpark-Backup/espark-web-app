import React from "react";
import styles from "./style.module.css";

const Portfolio = ({ data }) => {
  return (
    <div className="container pt-5 mt-5">
      <div className="p-20">
        <hr />
      </div>
      <div className={styles.content}>
        <h2>OUR PORTFOLIO</h2>
        <p>Empowering decentralization, one project at a time</p>
      </div>
      <div className="row pt-5 mt-3">
        {data?.map((item) => {
          return (
            <div className="col-sm-6 col-md-4 col-lg-3 my-2">
              <div className={styles.wrapper}>
                <div className={styles.imagesWrapper}>
                  <img
                    src={item.data.image}
                    className={styles.images}
                    alt={"image"}
                  />
                </div>
                <div className={styles.titleWrapper}>
                  <h3 className={styles.titleText}>{item.data.name}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
