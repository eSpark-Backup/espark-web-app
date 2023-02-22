import React from "react";

const SectionTitle = ({ heading, paragraph, width }) => {
  return (
    <div className="pb-80">
      <hr style={{ width: width ? width : "200px" }} />
      <div className={"content"}>
        <h2>{heading ?? null}</h2>
        <p>{paragraph ?? null}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
