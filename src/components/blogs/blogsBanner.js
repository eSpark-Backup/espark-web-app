import React from "react";
import  './blogRedesign.css'

const BlogsBanner = ({ title }) => {
  return (
    <div className="container-fluid topRow ">
      <div
        className="topContainer  d-flex align-items-left justify-content-center align-content-center text-left flex-column"
      >
        <div
          className="topInnerContainer col-lg-9 col-md-12 col-sm-12"
        >
          <h1 className="topText m-5"  dangerouslySetInnerHTML={{
          __html: title,
        }}></h1>
        </div>
      </div>
    </div>
  );
};

export default BlogsBanner;
