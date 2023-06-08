import React from "react";
import { Link } from "react-router-dom";
import "./blogRedesign.css";

const BlogsStrip = ({ title, para, link, btn_text }) => {
  const words = para.split(" ");
  const limitedPara = words.slice(0, 25).join(" ") + "...";
  const heading = title.split(" ");
  const limitedtitle = heading.slice(0, 4).join(" ") + "...";
  return (
    <div className={`blogsStrip`}>
      <Link to={link}>
        <h2 className={`blogsStripHeading text-justify`}>{limitedtitle}</h2>
      </Link>
      <p
        className={`blogsStripPara text-justify`}
        dangerouslySetInnerHTML={{
          __html: limitedPara,
        }}
      />
      <Link className={`blogsStripbtn`} to={link}>
        {btn_text}
      </Link>
    </div>
  );
};

export default BlogsStrip;
