import React from "react";
import SectionTitle from "../../sectionTitle";
import styles from "./style.module.css";

const Portfolio = ({ data, title }) => {
  return (
    <div className="container-fluid ptb-80">
      <SectionTitle
        heading={title}
      />
      <div className="row pt-5 mt-3 ">
        {data?.map((item) => {
          return (
            <div className="col-sm-6 col-md-4 col-lg-4 mt-2 mb-30">
              <a href={item.data.projectUrl}>
                <div className={styles.wrapper}>
                  <div className={styles.imagesWrapper}>
                    <img
                      src={item.data.image}
                      className={styles.images}
                      alt={"image"}
                    />
                  </div>
                  <div className={styles.titleWrapper}>
                    <h3 className={styles.titleText}>
                      {item.data.name}
                    </h3>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
