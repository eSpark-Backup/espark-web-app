import React from "react";
import SectionTitle from "../../sectionTitle";
import HirATalentCard from "../HireATalentCard/HireATalentCard";
import styles from "./style.module.css";

const SaveTimeBudget = () => {
  return (
    <div id="hire-talent" className="container-fluid">
      <SectionTitle
        height={"2px"}
        width={"130px"}
        heading={"Save your Time & Budget"}
        padding={"80px"}
        paragraph={`Experience the best global tech talent and enjoy the tech world
        without getting exhausted through the hiring process. Hire an expert
        developer, designer and an engineer now.`}
      />
    </div>
  );
};

export default SaveTimeBudget;
