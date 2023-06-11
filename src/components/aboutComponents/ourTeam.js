import React from "react";
import { teamMembers } from "../../helper/aboutus";
import styles from "./style.module.css";

const OurTeam = () => {
  return (
    <>
      <div className={`${styles.containerFluid} container-fluid }`}>
        <div className={`row ${styles.memberContens}`}>
          {teamMembers.map((member, index) => {
            return (
              <div className={`col-lg-3 ${styles.teamProfileCard}`}>
             <div className={styles.teamImages}>
                <img src={member.images} alt='' />
               </div>
              <div className={styles.teamCaption}>
                 <h3>{member.name}</h3>
                <p>{member.description}</p>
               </div>
            </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OurTeam;
