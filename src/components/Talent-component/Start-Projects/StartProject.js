import React from "react";
import styles from "./style.module.css";
import { compunyWorkStarts } from "../../../helper/componystartprojects";
import SectionTitle from "../../sectionTitle";

const StartProject = ({ onStartProjectButtonClick }) => {
  return (
    <div className="container-fluid">
      <div className={`hiretalent ${styles.hiretalent}`}>
        <SectionTitle
          height={0}
          padding={3}
          heading={
            "eSpark makes growing remote and international teams effortless"
          }
          lh={true}
          alignRight={true}
        />
        <div className={styles.whyButton}>
          <button
            className={styles.butntext}
            onClick={onStartProjectButtonClick}
          >
            Schedule Event
          </button>
        </div>
      </div>
      <div className="row">
        {compunyWorkStarts.map((items) => {
          return (
            <div className="col-12 col-sm-6 col-md-3 my-3 mb-5">
              <p className={`startProjects ${styles.startProjects} my-3`}>
                {items.projects}
              </p>
              <p className={`startContents ${styles.startContents}`}>
                {items.contents}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StartProject;
