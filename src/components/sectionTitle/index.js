import React from "react";

const SectionTitle = ({
  heading,
  paragraph,
  width,
  portFolio,
  padding,
  paddingTop,
  height,
  margin,
  my,
}) => {
  return (
    <div className={`my-2  pb-${padding ? padding : 80} pt-${paddingTop ? paddingTop : null}` }>
      <hr style={{ width: width ? width : "200px", height: height }} />
      <div className={"content"}>
        <h2 className={`my-${my ? my : "4"}`}>{heading ?? null}</h2>
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
