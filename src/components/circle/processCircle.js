import React from "react";
import { ourProcess } from "../../helper/processCricle";
import styles from "./style.module.css";



function ProcessCircle() {
  return (<div className="row ">
    {ourProcess.map(item => 
         <div className={`col-6 col-md-2   ${styles.circleWrapper}`}>
        <div className={styles.flexItems}>
          <div >  
            <img src={item.icon}></img>
          </div>
           <p >wireframe</p>
        </div>
      </div>)}
      </div>
  );
}

export default ProcessCircle;
