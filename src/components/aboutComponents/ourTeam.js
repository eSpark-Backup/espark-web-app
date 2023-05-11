import React from 'react';
import { teamMembers } from '../../helper/aboutus';
import styles from "./style.module.css";

const OurTeam = () => {

  const [hoveredIndex, setHoveredIndex] = React.useState(null);

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
            <div className='col-lg-3 col-md-6 col-sm-6 col-12' key={index}> 
              <div className={styles.teamMember} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave()}>
                <img src={member.images} className={styles.teamImages}/>
                {hoveredIndex === index &&
                  <div className={styles.teamContent}>
                    <p className={styles.teamName}>{member.name}</p>
                    <p className={styles.teamDescription}>{member.description}</p>
                  </div>
                }
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OurTeam;
