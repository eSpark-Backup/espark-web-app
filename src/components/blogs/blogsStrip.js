import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";

const BlogsStrip = ({ title, para, link, btn_text }) => {
  const words = para.split(" ");
  const limitedPara = words.slice(0, 40).join(" ") + "...";
  const heading = title.split(" ");
  const limitedtitle = heading.slice(0, 4).join(" ") + "...";
  return (
    <div className={`${style.blogsStrip}`}>
      <h2 className={`${style.blogsStripHeading} text-justify`}>{limitedtitle}</h2>
      <p
        className={`${style.blogsStripPara} text-justify`}
        dangerouslySetInnerHTML={{
          __html: limitedPara,
        }}
      />
      <Link className={`${style.blogsStripbtn}`} to={link}>
        {btn_text}
      </Link>
    </div>
  );
};

export default BlogsStrip;
