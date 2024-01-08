import React from "react";
import SectionTitle from "../../sectionTitle";
import styles from "./style.module.css";

const SaveTimeBudget = () => {
  return (
    <div id="hire-talent" className="container-fluid">
      <SectionTitle
        heading={<h2 className={styles.heading}>Save Your Time & Budget</h2>}
        padding={"80px"}
        paragraph={
          <p className={styles.para}>
            Experience the best global tech talent and enjoy the tech world
            without getting exhausted through the hiring process. Hire an expert
            developer, designer and an engineer now.
          </p>
        }
      />
    </div>
  );
};

export default SaveTimeBudget;
