import React from "react";

const SectionTitle = ({ heading, paragraph, width, portFolio }) => {
  return (
    <div className="pb-80">
      <hr style={{ width: width ? width : "200px" }} />
      <div className={"content"}>
        <h2>{heading ?? null}</h2>
        {paragraph.type === "p" ? (
          paragraph ?? null
        ) : (
          <p>{paragraph ?? null}</p>
        )}
      </div>
    </div>
  );
};

export default SectionTitle;
