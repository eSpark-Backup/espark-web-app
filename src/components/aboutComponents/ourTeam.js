import React, { useEffect } from "react";
import { teamMembers } from "../../helper/aboutus";
import styles from "./style.module.css";
import useWindowDimensions from "../../hook/useWindowDimensions";

const OurTeam = () => {
  const [widthIndex, setWidthIndex] = React.useState(false); 
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const { width } = useWindowDimensions(); 

  useEffect(() => {
    if (width <= 768) {
      setWidthIndex(false); 
    } else {
      setWidthIndex(true);
    }
  }, [width]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      <div className={`container-fluid ${styles.containerFluid}}`}>
        <div className={`row ${styles.memberContens}`}>
          {teamMembers.map((member, index) => {
            return (
              <div 
                className={`col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5 py-2 ${styles.profileCardContaner} `}
                key={index}
              >
                <div
                  className={`${styles.profileCard}`}
                  key={index}
                >
                  <div class={styles.img}>
                    <img
                      src={member.images}
                      alt=""
                      class={styles.hexaBackgroundTeam}
                    />
                  </div>
                  <div className={styles.caption}>
                    <p className={styles.teamName}>{member.name}</p>
                    <p className={styles.teamDescription}> 
                      {member.description} 
                    </p>
                  </div>
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
