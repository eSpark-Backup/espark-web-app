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
    <div className={`container-fluid ${styles.containerFluid}}`}>
      <div className={`row ${styles.memberContens}`}>
        {teamMembers.map((member, index) => {
          return (
            <div className="col-lg-3 col-md-3 col-sm-6 col-12 mb-3" key={index}>
              <div
                className={styles.teamMember}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave()}
              >
                <img
                  src={member.images}
                  className={styles.teamImages}
                  alt="TeamsImage"
                />
                {widthIndex ? (
                  hoveredIndex === index && (
                    <div className={styles.teamContent}>
                      <p className={styles.teamName}>{member.name}</p>
                      <p className={styles.teamDescription}>
                        {member.description}
                      </p>
                    </div>
                  )
                ) : (
                  <div className={styles.teamContent}>
                    <p className={styles.teamName}>{member.name}</p>
                    <p className={styles.teamDescription}>
                      {member.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurTeam;
