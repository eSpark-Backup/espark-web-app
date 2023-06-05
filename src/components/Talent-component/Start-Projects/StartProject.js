import React from "react";
import styles from "./style.module.css"
import { compunyWorkStarts } from "../../../helper/componystartprojects";


const StartProject = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {compunyWorkStarts.map((items) => {
          return <div className="col-12 col-sm-6 col-md-3 my-3">
            <p className={`startProjects ${styles.startProjects} my-3`}>{items.projects}</p>
            <p className={`startContents ${styles.startContents}`}>{items.contents}</p>

          </div>;
        })}
      </div>
    </div>
  );
};

export default StartProject;