import React from "react";
import style from "./style.module.css";

const BlogsBanner = ({ title }) => {
  return (
    <div className={`${style.topRow} `}>
      <div
        className={`${style.topContainer} container-fluid d-flex align-items-left justify-content-center align-content-center text-left flex-column`}
      >
        <div
          className={`${style.topInnerContainer} col-lg-9 col-md-12 col-sm-12`}
        >
          <h1 className={`${style.topText} m-5`}>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default BlogsBanner;
