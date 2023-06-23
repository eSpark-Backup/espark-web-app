import React from "react";
import SectionTitle from "../../sectionTitle";
import HirATalentCard from "../HireATalentCard/HireATalentCard";
import styles from "./style.module.css";

const SaveTimeBudget = () => {
  return (
    <div id="hire-talent" className="container-fluid">
      <SectionTitle
        heading={"Save Your Time & Budget"}
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
