import React from "react";
import Button from "../../button/button";
import SectionTitle from "../../sectionTitle";
import styles from "./style.module.css";

const Portfolio = ({ data, title }) => {
  return (
    <div className="container-fluid ptb-80 text-center" id="newDiv_0">
      <SectionTitle
        heading={title}
        paragraph={<p className={styles.ourPortFolioColorContent}>Empowering decentralization, one project at a time</p>}
      />
      <div className="row pt-2 m-0">
        {data?.map((item) => {
          return (
            <div className="col-sm-6 col-md-4 col-lg-3 mt-2 mb-30">
              <a href={item?.projectUrl}>
                <div className={styles.wrapper}>
                  <div className={styles.imagesWrapper}>
                    <img
                      src={item?.image}
                      className={styles.images}
                      alt={"image"}
                    />
                  </div>
                  <div className={styles.titleWrapper}>
                    <h3 className={styles.titleText}>{item?.name}</h3>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
