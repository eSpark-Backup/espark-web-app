import React from "react";

const SectionTitle = ({ heading, paragraph, width, portFolio }) => {
  return (
    <div>
      <hr style={{ width: width ? width : "200px" }} />
      <div className={portFolio ? 'portfolio' : 'content'}>
        <h2>{heading ?? null}</h2>
        <p>{paragraph ?? null}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
