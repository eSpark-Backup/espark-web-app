import React from "react";

const SectionTitle = ({
  heading,
  paragraph,
  width,
  portFolio,
  padding,
  height,
  margin,
}) => {
  return (
    <div className={`my-2  pb-${padding ? padding : 80}`}>
      <hr style={{ width: width ? width : "200px", height: height }} />
      <div className={"content"}>
        <h2 className="my-3">{heading ?? null}</h2>
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
