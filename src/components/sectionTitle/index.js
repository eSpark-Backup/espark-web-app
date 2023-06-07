import React from "react";

import style from './style.module.css'


const SectionTitle = ({
  heading,
  paragraph,
  width,
  portFolio,
  padding,
  height,
  margin,
  my,
  sectionHeading,
  lh,
  margintop,
  paddTop
}) => {
  return (
    <div className={`my-2  pb-${padding ? padding : 80} ${style.margintop} `} >
      <hr style={{ width: width ? width : "200px", height: height }} />
      <div className={"content"}>
        <h2 className={`my-${my ? my : "4"} ${sectionHeading ? sectionHeading : ''}  ${lh ? style.lhData : ''} ${style.paddTop} `}   >{heading ?? null}</h2>
        {paragraph?.type === "p" ? (
          paragraph ?? null
        ) : (
          <p>{paragraph ?? null}</p>
        )}
      </div>
    </div>
  );
};

export default SectionTitle;
